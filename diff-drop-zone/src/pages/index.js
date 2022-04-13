import React, { useState, useEffect, useRef } from 'react'
import "../styles/reset.css"
import "../styles/fonts.css"
import ItemCountdown from '../components/itemCountdown/itemCoutdown.jsx'
import { Main, Logo, TopTextLogo, BottomTextLogo, Content, Title, CountdownDiv, Text } from '../styles/pages/index.js'

const IndexPage = () => {
  const [days, setDays] = useState('13')
  const [hours, setHours] = useState('08')
  const [mins, setMins] = useState('12')
  const [secs, setSecs] = useState('05')

  const intervalTrigger = useRef();
  useEffect(() => {
    intervalTrigger.current = setInterval(timer, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const daysToSeconds = (86400) * 13
  const hoursToSeconds = 28800
  const minutesToSeconds = 720
  let totalTime = daysToSeconds + hoursToSeconds  + minutesToSeconds + 5
  let seconds = totalTime
  function timer() {
    let days        = Math.floor(seconds/24/60/60)
    let hoursLeft   = Math.floor((seconds) - (days*86400))
    let hours       = Math.floor(hoursLeft/3600)
    let minutesLeft = Math.floor((hoursLeft) - (hours*3600))
    let minutes     = Math.floor(minutesLeft/60)
    let remainingSeconds = seconds % 60
    function pad(n) {
      return (n < 10 ? "0" + n : n)
    }

    setDays(pad(days))
    setHours(pad(hours))
    setMins(pad(minutes))
    setSecs(pad(remainingSeconds))
    if (seconds === 0) {
      clearInterval(intervalTrigger)
      setDays('00')
      setHours('00')
      setMins('00')
      setSecs('00')
    } else {
      seconds--
    }
  }

  return (
    <Main>
      <Logo>
        <TopTextLogo>Drop</TopTextLogo>
        <BottomTextLogo>Zone</BottomTextLogo>
      </Logo>
      <Content>
        <Title>Leezy Boost 103</Title>
        <CountdownDiv>
          <ItemCountdown value={days} description={'Days'} />
          <ItemCountdown value={hours} description={'Hours'} />
          <ItemCountdown value={mins} description={'Mins'} />
          <ItemCountdown value={secs} description={'Secs'} />
        </CountdownDiv>
        <Text>until drop</Text>
      </Content>
    </Main>
  )
}

export default IndexPage
