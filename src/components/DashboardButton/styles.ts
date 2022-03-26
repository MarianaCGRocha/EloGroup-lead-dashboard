import styled from 'styled-components';

export const Button = styled.button`
  padding: 1em 3em;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 0.9em;
  color: #ffffff;
  background: #2196f3;
  transition: 0.5s ease all;

  :hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`