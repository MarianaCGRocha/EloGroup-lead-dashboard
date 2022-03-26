import { AlertItem } from './styles';

const Alert : React.FC = ({children}) => { 
  return (
    <AlertItem>
      {children}
    </AlertItem>
  )
}

export default Alert;