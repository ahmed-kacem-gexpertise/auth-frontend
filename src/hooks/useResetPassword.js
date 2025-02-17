import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../services/api";

const useResetPassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      console.log("resetting pasword success:", data);
    },
    onError: (error) => {
      console.error("resetting pasword error:", error);
    },
  });
};

export default useResetPassword;
