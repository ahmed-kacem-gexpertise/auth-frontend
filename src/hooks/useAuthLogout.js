import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logout } from "../services/api";

const useAuthLogout = () => {
  const navigate =useNavigate()
  return useMutation({
    
    mutationFn: logout,
    onSuccess: (data) => {
        navigate("/signin")
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });
};

export default useAuthLogout;
