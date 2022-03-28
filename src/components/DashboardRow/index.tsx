import { TableRow, Item } from './styles';

type Props = {
  id: number;
  name: string;
  status: number;
  handleClick: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
}

const DashboardRow : React.FC<Props> = ({id, name, status, handleClick}) => {
  return (
    <TableRow>
      <td>{status === 0 && <Item id={id} onClick={handleClick}>{name}</Item>}</td>
      <td>{status === 1 && <Item id={id} onClick={handleClick}>{name}</Item>}</td>
      <td>{status === 2 && <Item id={id} onClick={handleClick}>{name}</Item>}</td>
    </TableRow>
  );
}

export default DashboardRow;