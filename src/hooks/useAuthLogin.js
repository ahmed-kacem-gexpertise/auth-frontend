import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

const useAuthLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {},
    onError: (error) => {
      console.error("Login error:", error);
    },
  });
};

export default useAuthLogin;
