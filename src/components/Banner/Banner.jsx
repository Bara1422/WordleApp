import React from 'react'
import { BannerElement } from './BannerStyles'
import ResetGame from '../ResetGame/ResetGame'

const Banner = ({ gameStatus, resetGame, answer, times }) => {
  return (
    <>
      {gameStatus === 'win' && (
        <BannerElement className='winner'>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {times} {times > 1 ? 'times' : 'time'}
            </strong>
          </p>
          <ResetGame resetGame={resetGame} />
        </BannerElement>
      )}
      {gameStatus === 'lose' && (
        <BannerElement className='looser'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>
          </p>
          <ResetGame resetGame={resetGame} />
        </BannerElement>
      )}
    </>
  )
}

export default Banner
