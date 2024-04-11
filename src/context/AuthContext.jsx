import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    user: null,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (storedUser && isLoggedIn) {
      setAuthState({
        isLoggedIn: true,
        user: JSON.parse(storedUser),
      });
    }
  }, []);

const login = (username, rememberMe) => {
  const user = { name: username };
  setAuthState({
    isLoggedIn: true,
    user,
  });
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('user', JSON.stringify(user));
  if (rememberMe) {
    localStorage.setItem('rememberMe', 'true');
  } else {
    localStorage.removeItem('rememberMe');
  }
};


  const logout = () => {
    setAuthState({
      isLoggedIn: false,
      user: null,
    });
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('rememberMe');
  };

  const value = {
    ...authState,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
