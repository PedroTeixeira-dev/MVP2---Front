import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://0.0.0.0:8000/docs/#/Custumers',
});

export default axiosInstance;
