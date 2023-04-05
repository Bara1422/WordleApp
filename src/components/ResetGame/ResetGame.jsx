import React from 'react'
import { Button } from './ResetGameStyles'

const ResetGame = ({ resetGame }) => {
  return <Button onClick={resetGame}>Reset Game</Button>
}

export default ResetGame
