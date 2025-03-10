import { useMutation } from "@tanstack/react-query";
import { login } from "../services/api";
import { useNavigate } from "react-router";

const useAuthLogin = () => {
  const navigate =useNavigate()
  return useMutation({
    
    mutationFn: login,
    onSuccess: (data) => {
      navigate("/dashboard")
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });
};

export default useAuthLogin;
