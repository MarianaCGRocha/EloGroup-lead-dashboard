import { useContext, useState } from 'react';
import { AppContext } from '../../utils/appContext';
import ContainerBox from '../../components/ContainerBox';
import { Container, Row, Success } from './styles';
import DashboardButton from '../../components/DashboardButton';
import SignUpField from '../../components/SignUpField';
import Alert from '../../components/Alert';
import OpportunitiesTable from '../../components/OpportunitiesTable';
import { createLead } from '../../services/lead';
import { useNavigate } from 'react-router-dom';
import SignUpButton from '../../components/SignUpButton';

const NewLead : React.FC = () => {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  
  const emailRegex = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  const phoneRegex = new RegExp(/(?:(?<=^)|(?<=\D))((00|\+)?55(\s|\.|-)*)?((\()?0?\d{2}(?<=(5)\)|)(\s|\.|-)*)?(9(\s|\.|-)*)?\d{4}(\s|\.|-)*\d{4}(?=\D|$)/, 'gm');
  const opportunitiesList = ['RPA', 'Produto Digital', 'Analytics', 'BPM'];

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [opportunities, setOpportunities] = useState<string[]>([]);
  const [phoneIsValid, setPhoneIsValid] = useState<boolean>(false);
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const [created, setCreated] = useState<boolean>(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleNewOpportunities = (event: any) => {
    if ( event.target.checked === true ) {
      setOpportunities([...opportunities, event.target.value]);
    } else {
      setOpportunities(opportunities.filter(opportunity => opportunity !== event.target.value));
    }
  }

  const handleSelectAll = (event: any) => {
    if ( event.target.checked === true ) {
      setOpportunities(opportunitiesList);
    } else {
      setOpportunities([]);
    }
  }

  const handlePhoneFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (phoneRegex.test(event.target.value)) {
      setPhoneIsValid(true);
    } else {
      setPhoneIsValid(false);
    }
  }

  const handleEmailFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (emailRegex.test(event.target.value)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  }

  const handleLogoff = () => {
    context.setIsLoggedIn(false);
    context.setUsername('');
  }

  const handleSave = () => {
    const lead = {
      name,
      phone,
      email,
      opportunities,
    }
    createLead(lead);
    setCreated(true);
  }

  const handleGoBack = () => {
    navigate('/dashboard');
  }

  if (created) {
    return (
      <Container>
        <ContainerBox 
          title='Painel de Leads' 
          name={ `Olá ${context.username}` }
          handleClick={handleLogoff}
        >
          <Success>Lead criado com sucesso</Success>
          <SignUpButton label='Voltar' handleClick={handleGoBack} />
        </ContainerBox>
      </Container>
    );
  }

  return (
    <Container>
      <ContainerBox 
        title='Painel de Leads' 
        name={ `Olá ${context.username}` }
        handleClick={handleLogoff}
      >
        <Row>
          <div>
            <SignUpField 
              label='Nome' 
              type='text' 
              id='name' 
              value={name}
              handleChange={handleNameChange}
            />
            <SignUpField 
              label='Telefone' 
              type='tel' 
              id='phone' 
              value={phone}
              handleChange={handlePhoneChange}
              handleBlur={handlePhoneFocus}
            />
            { (!phoneIsValid && phone.length > 0 ) && <Alert>Telefone inválido</Alert> }
            <SignUpField 
              label='Email' 
              type='email' 
              id='email' 
              value={email} 
              handleChange={handleEmailChange}
              handleBlur={handleEmailFocus}
            />
            { (!emailIsValid && email.length > 0 ) && <Alert>Email inválido</Alert> }
          </div>
          <div>
            <OpportunitiesTable 
              opportunities={opportunitiesList} 
              selected={opportunities} 
              handleCheckbox={handleNewOpportunities}
              handleSelectAll={handleSelectAll}
            />
          </div>
        </Row>
        <DashboardButton label='Salvar' handleClick={handleSave} />
        <SignUpButton label='Voltar' handleClick={handleGoBack} />
      </ContainerBox>
    </Container>
  )
}

export default NewLead;