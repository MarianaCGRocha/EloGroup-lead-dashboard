import { Container, Title, Row, Name, Logoff } from './styles';
import Logo from '../../assets/images/EloGroup.jpeg';

type Props = {
  title: string;
  name: string;
  handleClick: (e: any) => void;
}

const ContainerBox : React.FC<Props> = ({ children, title, name, handleClick }) => {
  return (
    <Container>
      <Row>
        <img src={Logo} alt='Logo' />
        <Title>{title}</Title>
        <div>
          <Name>{name}</Name>
          <Logoff onClick={handleClick} >Sair</Logoff>
        </div>
      </Row>
      {children}
    </Container>
  );
}

export default ContainerBox;