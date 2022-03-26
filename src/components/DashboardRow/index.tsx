import { TableRow } from './styles';
import { Lead } from '../../services/lead';

const DashboardRow : React.FC<Lead> = ({name}) => {
  return (
    <TableRow>
      <td>{name}</td>
      <td></td>
      <td></td>
    </TableRow>
  );
}

export default DashboardRow;