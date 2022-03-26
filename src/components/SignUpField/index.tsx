import { Container } from './styles';

type Props = {
  label: string;
  type: string;
  id: string;
  value: string;
  pattern?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const SignUpField : React.FC<Props> = ({ label, type, id, value, pattern, handleChange, handleBlur }) => {
  return (
    <Container>
      <p>{label}<span> *</span></p>
      <input 
        type={type} 
        name={id} 
        value={value}
        pattern={pattern}
        onChange={handleChange} 
        onBlur={handleBlur} 
      />
    </Container>
  );
}

export default SignUpField;