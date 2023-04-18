import React, { useCallback, useState } from 'react'
import GameInput from '../GameInput/GameInput'
import GameResults from '../GameResults/GameResults'
import { checkGuess } from '../game-logic'
import { sample } from '../../utils'
import { WORDS } from '../data'
import Banner from '../Banner/Banner'

const Game = () => {
  const [words, setWords] = useState([])
  const [answer, setAnswer] = useState(sample(WORDS))
  const [gameState, setGameState] = useState('run')

  const MAX_WORDS = 6

  console.log({ answer })

  const handleWords = useCallback(
    (label) => {
      console.log('handleWords')
      const nextWords = [...words, label]
      setWords(nextWords)
      if (label.toUpperCase() === answer) setGameState('win')
      if (nextWords.length >= MAX_WORDS && label !== answer) {
        setGameState('lose')
      }
    },
    [words, answer]
  )

  const resetGame = () => {
    setGameState('run')
    setAnswer(sample(WORDS))
    setWords([])
  }

  const validatedWords = words.map((word) => checkGuess(word, answer))

  return (
    <>
      <GameResults validatedWords={validatedWords} />
      <GameInput
        handleWords={handleWords}
        validatedWords={validatedWords}
        gameStatus={gameState}
      />
      <Banner
        gameStatus={gameState}
        resetGame={resetGame}
        answer={answer}
        times={words.length}
      />
    </>
  )
}

export default Game
