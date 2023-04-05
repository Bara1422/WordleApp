import React from 'react'
import { GuessResults } from './GameResultsStyles'
import { range } from '../../utils'
import Guess from '../Guess/Guess'

const GameResults = ({ validatedWords }) => {
  return (
    <GuessResults>
      {range(6).map((num) => (
        <Guess key={num} validatedWords={validatedWords[num]} />
      ))}
    </GuessResults>
  )
}

export default GameResults
