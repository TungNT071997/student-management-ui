import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://student-management-api-925z.onrender.com'
});

export default axiosInstance;
