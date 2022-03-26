import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid black;

  > tr {
    > th {
      font-size: 1.1em;
      padding: 1em 3em;
      border: 1px solid black;
      background: #767676;
      color: #ffffff;
    }
  }
`