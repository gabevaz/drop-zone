import styled from 'styled-components'

export const Item = styled.div`
  margin: 10px;

  @media(max-width: 767.98px) {
    margin: 10px 2px;
  }
`

export const Description = styled.p`
  text-align: center;
  margin: 12px 0;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 900;
  font-size: 16px;
`

export const Span = styled.span`
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