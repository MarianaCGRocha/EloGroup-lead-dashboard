import { useContext } from 'react';
import { AppContext } from '../../utils/appContext';
import ContainerBox from '../../components/ContainerBox';
import { Container} from './styles';
import DashboardButton from '../../components/DashboardButton';
import DashboardTable from '../../components/DashboardTable';
import { useNavigate } from 'react-router-dom';

const Dashboard : React.FC = () => {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogoff = () => {
    context.setIsLoggedIn(false);
    context.setUsername('');
  }

  const handleNewLead = () => {
    navigate('/newLead');
  }

  return (
    <Container>
      <ContainerBox 
        title='Painel de Leads' 
        name={ `Olá ${context.username}` }
        handleClick={handleLogoff}
      >
        <DashboardButton 
          label='Novo Lead (+)'
          handleClick={handleNewLead}
        />
        <DashboardTable />
      </ContainerBox>
    </Container>
  )
}

export default Dashboard;