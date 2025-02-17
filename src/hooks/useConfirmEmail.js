import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { confirmEmail } from "../services/api";
import "react-toastify/dist/ReactToastify.css";
const useConfirmEmail = () => {
  const { token } = useParams();
  console.log(token);
  return useQuery({
    queryKey: ["confirmEmail", token],
    queryFn: () => confirmEmail(token),
    enabled: !!token,
    staleTime: Infinity,
    retry: false,
  });
};

export default useConfirmEmail;
