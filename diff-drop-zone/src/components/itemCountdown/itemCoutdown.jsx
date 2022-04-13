import React from 'react'
import "../../styles/reset.css"
import "../../styles/fonts.css"
import { formatCountdown } from '../../utils/formatCountdown.js'
import { Item, Description } from './style.js'

const ItemCountdown = ({ value, description }) => (
    <Item>
        {formatCountdown(value)}
        <Description>{description}</Description>
    </Item>
)

export default ItemCountdown
