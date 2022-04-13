import React from 'react'
import "../../styles/reset.css"
import "../../styles/fonts.css"
import { Item, Description, Span } from './style.js'

const ItemCountdown = ({ value, description }) => (
    <Item>
        {value.toString().split('').map((item, index) => {
            return <Span key={index}>{item}</Span>
        })}
        <Description>{description}</Description>
    </Item>
)

export default ItemCountdown
