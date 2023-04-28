import React, { useRef, useState } from 'react'
import { InputWrapper } from './GameInputStyles'
import Keyboard from '../Keyboard/Keyboard'

const GameInput = ({ handleWords, validatedWords, gameStatus }) => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.length < 5) return
    handleWords(value)
    setValue('')
  }

  const handleKeyClick = (e, key) => {
    e.preventDefault()
    if (value.length < 5) setValue(value + key)
    if (key === 'Backspace') setValue(value.slice(0, -1))
    if (key === 'Enter') {
      setValue(value)
      handleSubmit(e)
    }
    inputRef.current.focus()
  }

  return (
    <>
      <InputWrapper onSubmit={handleSubmit}>
        <label htmlFor='guess'>Enter guess:</label>
        <input
          type='text'
          name='guess'
          id='guess'
          ref={inputRef}
          minLength={5}
          maxLength={5}
          autoComplete='off'
          autoFocus
          pattern='[A-Z]{5}'
          title='5 letter word'
          disabled={gameStatus !== 'run'}
          value={value}
          onChange={(e) =>
            setValue(e.target.value.trim().toUpperCase().slice(0, 5))
          }
        />
      </InputWrapper>
      <Keyboard
        validatedWords={validatedWords}
        handleKeyClick={handleKeyClick}
        gameStatus={gameStatus}
      />
    </>
  )
}

export default GameInput
