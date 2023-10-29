import axios from 'axios';

const axiosWithConfig = axios.create({
  baseURL: 'https://notes-wizard.up.railway.app',
  timeout: 5000,
});

export default axiosWithConfig;
