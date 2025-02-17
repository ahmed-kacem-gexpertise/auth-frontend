import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../services/api";

const useForgotPassword = () => {
  return useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      console.log("forgot password successful:", data);
    },
    onError: (error) => {
      console.error("forgot password error:", error);
    },
  });
};

export default useForgotPassword;
