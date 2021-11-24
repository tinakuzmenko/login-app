import React, {useEffect, useState} from 'react';

export const AuthStore = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthStoreProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserIsLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedUserIsLoggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthStore.Provider value={{
      isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler,
    }}>{props.children}</AuthStore.Provider>
  );
};
