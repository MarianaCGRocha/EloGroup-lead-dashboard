import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid black;
  padding: 1em 2em;

  > img {
    width: 300px;
  }
`
export const Form = styled.form`
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
`