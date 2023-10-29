import axiosWithConfig from '../api/axiosWithConfig';
import { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);
  const [refreshToken, setRefreshToken] = useState(sessionStorage.getItem('refreshToken') || null);

  const authRegister = (username, password, fullname) => {
    return new Promise(async (resolve, reject) => {
      try {
        await axiosWithConfig.post('/users', { username, password, fullname });
        resolve('Register successfully');
      } catch (error) {
        reject(error.response.data.message);
      }
    });
  };

  const login = (username, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axiosWithConfig.post('/authentications', { username, password });
        const { accessToken, refreshToken } = response.data.data;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        localStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('refreshToken', refreshToken);
        resolve('Login successfully');
      } catch (error) {
        reject(error.response.data.message);
      }
    });
  };

  const logout = () => {
    return new Promise(async (resolve, reject) => {
      const payload = {
        refreshToken,
      };
      try {
        await axiosWithConfig.delete('/authentications', { data: payload });
        setAccessToken(null);
        setRefreshToken(null);
        localStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
        resolve('Log out successfully');
      } catch (error) {
        console.log(error);
        reject(error.response);
      }
    });
  };

  return (
    <TokenContext.Provider value={{ accessToken, refreshToken, authRegister, login, logout }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};
