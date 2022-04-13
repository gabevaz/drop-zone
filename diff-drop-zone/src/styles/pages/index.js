import styled from 'styled-components'
import BackgroundImage from '../../images/landing.jpg'

export const Main = styled.main`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  background-size: cover;
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 15px;
`

export const TopTextLogo = styled.p`
  background-color: black;
  color: #ffffff;
  width: 110px;
  text-align: center;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 28px;
  margin: 5px 40px;
  font-family: 'Rozha One';
`

export const BottomTextLogo =  styled.p`
  background-color: black;
  color: #ffffff;
  width: 110px;
  text-align: center;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 28px;
  margin: 5px 20px;
  font-family: 'Rozha One';
`

export const Content = styled.div`
  width: 60%;
  margin: 0 0 0 auto;
  position: relative;
  top: 30%;

  @media(max-width: 767.98px) {
    width: 100%;
    margin: 0 auto;
    top: 55%;
  }
`

export const Title = styled.h1`
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-align: center;
  font-weight: 900;
  font-size: 32px;
  margin-bottom: 12px;

  @media(max-width: 767.98px) {
    font-size: 24px;
  }
`