import axiosInstance from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

axiosInstance.defaults.baseURL = baseURL;

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.accessToken;
    if (accessToken) {
      config.headers['Authorization'] = accessToken;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export default axiosInstance;
