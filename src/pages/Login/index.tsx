import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import SignUpBox from '../../components/SignUpBox';
import SignUpField from '../../components/SignUpField';
import SignUpButton from '../../components/SignUpButton';
import Alert from '../../components/Alert';
import { Container} from './styles';
import { AppContext } from '../../utils/appContext';
import { verifyUser } from '../../services/user';


const Login : React.FC = () => {  
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userIsValid, setUserIsValid] = useState<boolean>(false);
  const [submited, setSubmited] = useState<boolean>(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e : any) => {
    e.preventDefault();
    const valid = verifyUser({username, password});
    setSubmited(true);
    setUserIsValid(valid);
    
    if(valid){
      context.setUsername(username);
      context.setIsLoggedIn(true);
      navigate('/dashboard');
    } else {
      setPassword('');
    }
  }

  const handleSignUp = () => {
    navigate('/register');
  }

  return ( 
    <Container>
      <SignUpBox>
        <SignUpField 
          label='Usuário' 
          type='text' id='user' 
          value={username} 
          handleChange={handleUsernameChange} 
        />
        <SignUpField 
          label='Password' 
          type='password' 
          id='password' 
          value={password} 
          handleChange={handlePasswordChange}
        />
        {
          (!userIsValid && submited) &&
            <Alert>Usuário ou senha inválido</Alert>
        }
        <SignUpButton 
          label='Fazer Login' 
          handleClick={handleSubmit}
        />
        <SignUpButton 
          label='Registrar-se' 
          handleClick={handleSignUp}
        />
      </SignUpBox>
    </Container>
  );
}

export default Login;