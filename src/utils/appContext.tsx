import React from 'react';

type AppContextValue = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = React.createContext<AppContextValue>({} as AppContextValue);

export const AppProvider : React.FC = ({ children }) => {
  const [username, setUsername] = React.useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  const context : AppContextValue = {
    username,
    setUsername,
    isLoggedIn,
    setIsLoggedIn
  }

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}