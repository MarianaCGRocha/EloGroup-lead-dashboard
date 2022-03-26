import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 3em;
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  font-size: 0.9em;
  background: #ffffff;
  transition: 0.5s ease all;

  :hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`