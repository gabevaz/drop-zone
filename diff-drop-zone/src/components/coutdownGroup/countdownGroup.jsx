import React, { useState, useEffect, useRef } from 'react'
import "../../styles/reset.css"
import "../../styles/fonts.css"
import ItemCountdown from '../itemCountdown/itemCoutdown.jsx'
import { CountdownDiv, Text } from './style.js'

const CountdownGroup = ({ totalTime, defaultText, finishedText }) => {

    const [isFinished, setIsFinished] = useState(false)

    const [secondsLeft, setSecondsLeft] = useState(totalTime)

    let seconds = secondsLeft

    const intervalTrigger = useRef()

    let days        = Math.floor(secondsLeft/86400)
    let hoursLeft   = Math.floor((secondsLeft) - (days*86400))
    let hours       = Math.floor(hoursLeft/3600)
    let minutesLeft = Math.floor((hoursLeft) - (hours*3600))
    let mins     = Math.floor(minutesLeft/60)
    let secs = secondsLeft % 60

    useEffect(() => {
        intervalTrigger.current = setInterval(timer, 1000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const pad = n => (n < 10 ? "0" + n : n)

    const timer = () => {
        if (seconds === 0) {
          clearInterval(intervalTrigger.current)
          setIsFinished(true)
        } else{
          seconds--
          setSecondsLeft(seconds)
        }
    }

    return (
    <>
    <CountdownDiv isFinished={isFinished}>
        <ItemCountdown value={pad(days)} description={'Days'} />
        <ItemCountdown value={pad(hours)} description={'Hours'} />
        <ItemCountdown value={pad(mins)} description={'Mins'} />
        <ItemCountdown value={pad(secs)} description={'Secs'} />
    </CountdownDiv>
    <Text isFinished={isFinished}>{isFinished ? finishedText : defaultText}</Text>  
    </>
    )
}

export default CountdownGroup
