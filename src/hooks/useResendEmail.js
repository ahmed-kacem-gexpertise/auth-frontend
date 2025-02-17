import { useMutation } from "@tanstack/react-query";
import { resendConfirmationEmail } from "../services/api";

const useResendEmail = () => {
  return useMutation({
    mutationFn: resendConfirmationEmail,
    onSuccess: (data) => {
      console.log("resend successful:", data);
    },
    onError: (error) => {
      console.error(" error resending the email:", error);
    },
  });
};

export default useResendEmail;
