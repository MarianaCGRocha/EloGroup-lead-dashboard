import SignUpBox from '../../components/SignUpBox';
import SignUpField from '../../components/SignUpField';
import SignUpButton from '../../components/SignUpButton';
import Alert from '../../components/Alert';
import { Container} from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/user';

const Register : React.FC = () => {
  const navigate = useNavigate();
  const regex = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
  const [passwordIsEqual, setPasswordIsEqual] = useState<boolean>(false);
  const [usernameIsUnique, setUsernameIsUnique] = useState<boolean>(false);
  const [submited, setSubmited] = useState<boolean>(false);


  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  }

  const handlePasswordFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if(regex.test(password)){
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  }

  const handleConfirmPasswordFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if(password === confirmPassword){
      setPasswordIsEqual(true);
    } else {
      setPasswordIsEqual(false);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (createUser({username, password})) {
      setSubmited(true);
      setUsernameIsUnique(true);
      navigate('/login');
    } else {
      setSubmited(true);
      setUsernameIsUnique(false);
    }
  }

  return ( 
    <Container>
      <SignUpBox>
        <SignUpField 
          label='Usu??rio' 
          type='text' 
          id='user' 
          value={username} 
          handleChange={handleUsernameChange}
        />
        {(!usernameIsUnique && submited) && <Alert>Usu??rio j?? existe</Alert>}
        <SignUpField 
          label='Password' 
          type='password' 
          id='password' 
          value={password} 
          handleChange={handlePasswordChange}
          handleBlur={handlePasswordFocus}
        />
        {!passwordIsValid && <Alert>Password deve possuir ao menos 8 caracteres, contendo ao menos, um caracter especial, um caracter num??rico, um caracter alfanum??rico</Alert>}
        <SignUpField 
          label='Confirma????o Password' 
          type='password'
          id='confirmPassword' 
          value={confirmPassword} 
          handleChange={handleConfirmPasswordChange}
          handleBlur={handleConfirmPasswordFocus}
        />
        {!passwordIsEqual && <Alert>Password n??o ?? igual a confirma????o</Alert>}
        <SignUpButton 
          label='Registrar' 
          handleClick={handleSubmit}
          disabled={!(username.length > 0 && passwordIsValid && passwordIsEqual)}
        />
      </SignUpBox>
    </Container>
  );
}

export default Register;