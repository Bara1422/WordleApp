import styled from 'styled-components'

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 6rem;
  label {
    font-size: 1.3rem;
  }
  input {
    display: block;
    width: 100%;
    font-size: 2rem;
    border: 2px solid hsl(0deg 0% 25%);
    border-radius: 4px;
    padding: 8px 10px;
    outline-offset: 4px;
    @media (max-width: 768px) {
      padding: 4px 8px;
    }
  }
`
