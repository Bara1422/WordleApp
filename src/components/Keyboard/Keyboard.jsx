import React from 'react'
import { KeyboardKey, KeyboardRow, KeyboardWrapper } from './KeyboardStyles'

const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Enter'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace']
]

const specialKeys = {
  Backspace: '\u232B',
  Enter: '\u21A9'
}

function getStatusByLetter(validatedWords, prev = {}) {
  const statusObj = { ...prev }

  validatedWords.forEach((word) => {
    word.forEach(({ letter, status }) => {
      if (status === 'correct') statusObj[letter] = 'correct'
      else if (!statusObj[letter]) statusObj[letter] = status
    })
  })
  return statusObj
}

const Keyboard = ({ validatedWords, gameStatus, handleKeyClick }) => {
  const statusByLetter = getStatusByLetter(validatedWords)

  return (
    <KeyboardWrapper>
      {keys.map((row, index) => (
        <KeyboardRow key={index}>
          {row.map((letter) => (
            <KeyboardKey
              onClick={(e) => handleKeyClick(e, letter)}
              key={letter}
              pattern='[A-Z]{5}'
              maxLength={5}
              minLength={5}
              required
              disabled={gameStatus !== 'run'}
              title='5 letter word'
              className={statusByLetter[letter] || ''}
            >
              {specialKeys[letter] ?? letter}
            </KeyboardKey>
          ))}
        </KeyboardRow>
      ))}
    </KeyboardWrapper>
  )
}

export default Keyboard
