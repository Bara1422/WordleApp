import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  align-items: center;
  h1 {
    font-size: 50px;
  }
`

export const Header = styled.header`
  display: flex;
  height: 4rem;
  border-bottom: 1px solid hsl(0deg 0% 75%);
  color: hsl(0deg 0% 25%);
`
export const GameWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  min-width: 250px;
  max-width: min(500px, 50vh, 100%);
`
