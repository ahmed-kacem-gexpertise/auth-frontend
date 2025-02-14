import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

const login = (data) => {
  return api.post('/auth/login', data);
};

 const register = (data) => {
  return api.post('/auth/register', data);
};
const resetPassword= (data) =>{
  return api.put('/auth/resetPassword')
}
export { login, register };
