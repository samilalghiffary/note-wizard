import axiosWithConfig from '../api/axiosWithConfig';
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    fullname: '',
    username: '',
  });

  useEffect(() => {
    axiosWithConfig
      .get(`/users/user-id`)
      .then((response) => {
        const { fullname, username } = response.data;
        setUserData({ fullname, username });
      })
      .catch((error) => {
        console.error('Gagal mengambil data pengguna', error);
      });
  }, []);

  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
