import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom'; 
import {register} from '../services/api';

const useAuthregister = () => {
  const navigate = useNavigate(); 

  return useMutation( {
    mutationFn: register,
    onSuccess: (data) => {
      console.log('register successful:', data);
      navigate('/signin');
    },
    onError: (error) => {
      console.error('register error:', error);
    },
  });
};

export default useAuthregister;
