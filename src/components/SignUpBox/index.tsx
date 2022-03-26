import { Container, Form } from './styles';
import Logo from '../../assets/images/EloGroup.jpeg';

const SignUpBox : React.FC = ({ children }) => {
  return (
    <Container>
      <img src={Logo} alt='Logo' />
      <Form >
        {children}
      </Form>
    </Container>
  );
}

export default SignUpBox;