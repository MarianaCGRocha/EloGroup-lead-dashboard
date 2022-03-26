import { Button } from './styles';

type Props = {
  label: string;
  disabled?: boolean;
  handleClick: (e: any) => void;
}

const SignUpBox : React.FC<Props> = ({ label, disabled = false, handleClick }) => {
  return (
    <Button onClick={handleClick} disabled={disabled}>
      {label}
    </Button>
  );
}

export default SignUpBox;