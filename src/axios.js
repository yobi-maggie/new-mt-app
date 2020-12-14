import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use((response) => response.data,
  (error) => Promise.reject(error));

export default instance;
