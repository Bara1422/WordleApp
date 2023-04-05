import './App.css'
import { GameWrapper, Header, Wrapper } from './AppStyles'
import Game from './components/Game/Game'

function App() {
  return (
    <Wrapper>
      <Header>
        <h1>Wordle Game</h1>
      </Header>

      <GameWrapper>
        <Game />
      </GameWrapper>
    </Wrapper>
  )
}

export default App
