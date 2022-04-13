import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
  background: black;
  padding: 5px 10px;
  margin: 0 4px;
  font-family: 'Rozha One';
  font-weight: 400;
  text-transform: uppercase;
  display: inline-block;
  font-size: 42px;
  color: #FFF;

  @media(max-width: 767.98px) {
    font-size: 28px;
    display: inline;
    padding: 0px 10px;
  }
`

export const formatCountdown = param => {
    let renderedComponent =  []
    param.toString().split('').map((item, index) => {
      return (
        renderedComponent.push(<Span key={index}>{item}</Span>)
      )
    })
    return renderedComponent
  }
