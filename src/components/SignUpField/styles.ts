import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;

  > p {
    margin: 0 0 10px;
    font-size: 0.9em;

    > span {
      color: red;
      font-size: 12px;
    }
  }

  > input {
    width: 100%;
    font-size: 1.1em;
    border: 1px solid black;
    border-radius: 0;
    height: 1.8em;
    box-sizing: border-box;
  }
`