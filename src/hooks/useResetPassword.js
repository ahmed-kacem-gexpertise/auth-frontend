import { useMutation } from "@tanstack/react-query";
import {  useParams } from "react-router-dom";
import { resetPassword } from "../services/api";

const useResetPassword = () => {

  const { token } = useParams();
  return useMutation({

    mutationFn:(data)=> resetPassword(data,token),
    onSuccess: () => {
      console.log("resetting pasword success:");
    },
    onError: (error) => {
      console.error("resetting pasword error:", error);
    },
  });
};

export default useResetPassword;
