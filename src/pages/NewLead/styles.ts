import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Row = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > div {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const Success = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: green;
  font-size: 2em;
  margin: 2em 0;
`