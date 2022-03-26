import { Table } from './styles';
import { useEffect, useState } from 'react';
import { Lead, getLeadList } from '../../services/lead';
import DashboardRow from '../DashboardRow';

const DashboardTable : React.FC = () => {
  const [leadList, setLeadList] = useState<Lead[]>([] as Lead[]);

  useEffect(() => {
    setLeadList(getLeadList());
  }, [])

  return (
    <Table>
      <tr>
        <th>Cliente em Potencial</th>
        <th>Dados Confirmados</th>
        <th>Reunião Agendada</th>
      </tr>
      {
        leadList.length > 0 &&
          leadList.map(lead => (
            <DashboardRow key={lead.name} {...lead} />
          ))
      }
    </Table>
  );
}

export default DashboardTable;