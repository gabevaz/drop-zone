import React from 'react'
import "../styles/reset.css"
import "../styles/fonts.css"
import CountdownGroup from '../components/coutdownGroup/countdownGroup.jsx'
import { Main, Logo, TopTextLogo, BottomTextLogo, Content, Title } from '../styles/pages/index.js'

const IndexPage = () => (
    <Main>
      <Logo>
        <TopTextLogo>Drop</TopTextLogo>
        <BottomTextLogo>Zone</BottomTextLogo>
      </Logo>
      <Content>
        <Title>Leezy Boost 103</Title>
        <CountdownGroup
          totalTime={(13 * 86400) + (8 * 3600) + (12 * 60) + 5}
          defaultText={'until drop'}
          finishedText={'available now'}
        />
      </Content>
    </Main>
)

export default IndexPage
