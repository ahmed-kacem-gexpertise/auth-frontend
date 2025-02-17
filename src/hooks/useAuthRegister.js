import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/api';
import { toast } from 'react-toastify';  

const useAuthRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log('register successful:', data);
      toast.success("Inscription réussie! Veuillez vérifier votre email pour la confirmation"); 
      navigate('/signin');
    },
    onError: (error) => {
      console.error('register error:', error);
      toast.error("Erreur d'inscription, veuillez réessayer.");  
    },
  });
};

export default useAuthRegister;
