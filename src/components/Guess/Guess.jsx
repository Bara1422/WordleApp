import React from 'react'
import { GuessPar, Square } from './GuessStyles'
import { range } from '../../utils'

function Cell({ letter, status }) {
  const className = status ? ` ${status}` : ''
  return <Square className={className}>{letter}</Square>
}

const Guess = ({ validatedWords }) => {
  return (
    <GuessPar>
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={validatedWords ? validatedWords[num].letter : undefined}
          status={validatedWords ? validatedWords[num].status : undefined}
        />
      ))}
    </GuessPar>
  )
}

export default Guess
