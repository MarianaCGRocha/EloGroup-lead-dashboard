import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  margin: 10px 0;
  border-collapse: collapse;
  border: 1px solid black;

  > tr {
    > th {
      padding: 0.5em;
      font-size: 1.1em;
      border: 1px solid black;
      background: #767676;
      color: #ffffff;
    }
  }
`