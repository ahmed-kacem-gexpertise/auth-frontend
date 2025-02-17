import { useQuery } from "@tanstack/react-query";
import { user } from "../services/api";
const useGetUserInfo = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: user,
    onSuccess: (data) => {
      console.log(data.json());
    },
    onError: (error) => {
      console.error("Error fetching user:", error);
    },

    staleTime: Infinity,
    retry: false,
  });
};

export default useGetUserInfo;
