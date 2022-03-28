import OpportunitiesTableItem from '../OpportunitiesTableItem';
import { Table } from './styles';

type Props = {
  opportunities: string[],
  selected: string[],
  handleCheckbox: (event: any) => void,
  handleSelectAll: (event: any) => void,
}

const OpportunitiesTable : React.FC<Props> = ({ opportunities, selected, handleCheckbox, handleSelectAll }) => {
  return (
    <Table>
      <tbody>
        <tr>
          <th>
            <input type='checkbox' onClick={handleSelectAll} />
          </th>
          <th></th>
        </tr>
        {
          opportunities.map((opportunity) => (
            <OpportunitiesTableItem 
              key={opportunity} 
              opportunity={opportunity} 
              checked={selected.indexOf(opportunity) !== -1} 
              handleCheckbox={handleCheckbox} 
            />
          ))
        }
      </tbody>
    </Table>
  )
}

export default OpportunitiesTable;