import styled from 'styled-components'

export const KeyboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
export const KeyboardRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`

export const KeyboardKey = styled.button`
  border: 1px solid hsl(0deg 0% 75%);
  border-radius: 4px;
  font-size: 1.5rem;
  padding: 2px 8px;
  text-align: center;
  background-color: hsl(0deg 0% 90%);
  font-weight: 500;
  transition: transform 150ms, background-color 150ms;
  &.correct {
    background: hsl(150deg 70% 30%);
    border-color: hsl(150deg 70% 30%);
    color: white;
  }
  &.incorrect {
    background: hsl(0deg 0% 25%);
    border-color: hsl(0deg 0% 25%);
    color: white;
  }
  &.misplaced {
    background: hsl(50deg 100% 30%);
    border-color: hsl(50deg 100% 30%);
    color: white;
  }
  @media (max-width: 425px) {
    font-size: 0.95rem;
    height: 48px;
  }
  &:hover {
    background-color: hsl(0deg 0% 70%);
  }
  &:active {
    box-shadow: 0px 0px transparent;
    transform: translateY(3px);
  }
`
