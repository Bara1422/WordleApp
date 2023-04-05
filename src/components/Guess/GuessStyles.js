import styled from 'styled-components'

export const GuessPar = styled.p`
  display: flex;
  gap: 4px;
  margin-bottom: 4px;
  font-size: 2rem;
  font-weight: 700;
`

export const Square = styled.span`
  position: relative;
  width: 20%;
  display: grid;
  place-content: center;
  aspect-ratio: 1/1;
  border: 2px solid hsl(0deg 0% 75%);
  border-radius: 4px;
  font-size: 2rem;
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
`
