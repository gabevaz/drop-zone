import styled from 'styled-components'

export const CountdownDiv = styled.div`
  display: ${props => props.isFinished ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
`

export const Text = styled.p`
  text-transform: uppercase;
  color: #000000;
  font-size: ${props => props.isFinished ? '18px' : '14px'};
  letter-spacing: 0.15em;
  text-align: center;
  margin-top: ${props => props.isFinished ? '25px' : '0'};

  @media(max-width: 767.98px) {
    margin: 12px 0;
  }
`