import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetUserInfo from "../hooks/useGetUserInfo";

 import { Outlet } from "react-router-dom";

const ProtectedRoute = ({ admin, ...rest }) => {
  const navigate = useNavigate();
  const { data: user, isLoading, isError } = useGetUserInfo();

  useEffect(() => {
    if (isLoading) return;

    if (isError || !user) {
      navigate("/signin"); 
    } else if (admin && !user.admin) {
      navigate("/unauthorized"); 
    }
  }, [isLoading, isError, user, admin, navigate]);

 
  if (isLoading) {
    return <div>Loading...</div>;
  }

 
  return <Outlet />;
};

export default ProtectedRoute;
