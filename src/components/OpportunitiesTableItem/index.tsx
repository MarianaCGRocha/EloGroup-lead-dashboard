import { TableRow, TableCheckbox } from './styles';

type Props = {
  opportunity: string,
  checked: boolean,
  handleCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const OpportunitiesTableItem : React.FC<Props> = ({ opportunity, checked = false, handleCheckbox }) => {
  return (
    <TableRow>
      <TableCheckbox>
        <input type='checkbox' onChange={handleCheckbox} checked={checked} value={opportunity} />
      </TableCheckbox>
      <td>
        {opportunity}
      </td>
    </TableRow>
  )
}

export default OpportunitiesTableItem;