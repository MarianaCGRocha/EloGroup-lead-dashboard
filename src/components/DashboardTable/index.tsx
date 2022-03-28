import { Table } from './styles';
import { useEffect, useState } from 'react';
import { Lead, getLeadList, updateLead } from '../../services/lead';
import DashboardRow from '../DashboardRow';

const DashboardTable : React.FC = () => {
  const [leadList, setLeadList] = useState<Lead[]>([] as Lead[]);

  useEffect(() => {
    setLeadList(getLeadList());
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
    const updatedLead = leadList.find(lead => lead.id === parseInt(e.currentTarget.id));

    if (updatedLead && updatedLead.status! < 2) {
      const leadListClone = leadList;
      const leadIndex = leadList.findIndex(lead => lead.id === parseInt(e.currentTarget.id));
      updatedLead.status! += 1;
      leadListClone[leadIndex] = updatedLead;
      updateLead(updatedLead);
      setLeadList([...leadListClone]);
    }
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th>Cliente em Potencial</th>
          <th>Dados Confirmados</th>
          <th>Reunião Agendada</th>
        </tr>
        {
          leadList.length > 0 &&
            leadList.map(lead => (
              <DashboardRow 
                key={lead.name} 
                id={lead.id!} 
                name={lead.name} 
                status={lead.status!} 
                handleClick={handleClick} 
              />
            ))
        }
      </tbody>
    </Table>
  );
}

export default DashboardTable;