import { AppProvider } from './utils/appContext';
import Routes from './routes';

function App() {

  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;