import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom'; 
import {login} from '../services/authService';

const useAuthLogin = () => {
  const navigate = useNavigate(); 

  return useMutation( {
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data.data.access_token)
      if (data.data.access_token) {
        localStorage.setItem('accessToken', data.data.access_token);
      }
      navigate('/dashboard');
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
  });
};

export default useAuthLogin;
