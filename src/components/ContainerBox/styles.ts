import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #ffffff;
  border: 1px solid black;
  padding: 1em 2em;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  > img {
    width: 300px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Title = styled.h1`
  font-size: 1.5em;
  color: #767676;
`

export const Name = styled.h1`
  font-size: 1.1em;
  color: #767676;
`

export const Logoff = styled.button`
  height: 1em;
  margin-left: 5px;
  padding: 10px 20px;
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