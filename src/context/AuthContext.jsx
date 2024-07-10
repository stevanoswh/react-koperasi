// src/context/AuthContext.js
import React, { createContext, useContext, useReducer } from 'react';
import axiosInstance from '../api/axiosInstance';


const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, token: action.payload.token, user: action.payload.user };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, token: null, user: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    isLoggedIn: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    user: null,
  });

  const login = async (username, password) => {
    try {
      const response = await axiosInstance.post('/auth/signin', { username, password });
      const { data, roles } = response.data;
      if (data) {
        localStorage.setItem('token', data);
        dispatch({ type: 'LOGIN', payload: { token: data, user: { username, roles } } });
      } else {
        throw new Error('Login failed: No token received');
      }
    } catch (error) {
      console.error("Login Failed: ", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  const value = { ...authState, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
