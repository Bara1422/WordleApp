import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`

export const BannerElement = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 32px;
  text-align: center;
  animation: ${slideUp} 750ms cubic-bezier(0, 0.72, 0.24, 1.02);
  border-radius: 32px 32px 0px 0px;
  will-change: transform;
  font-size: 1.3rem;
  &.winner {
    background: hsl(150deg 70% 30%);
    color: white;
  }
  &.looser {
    background: hsl(0deg 70% 45%);
    color: white;
  }
  @media (max-width: 425px) {
    border-radius: 0px;
  }
`
