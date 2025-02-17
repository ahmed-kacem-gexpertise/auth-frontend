import { Route, Outlet } from "react-router-dom";
import useGetUserInfo from "../hooks/useGetUserInfo";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ admin, ...rest }) => {
  const navigate = useNavigate();

  const { data: user, isLoading, isError, error } = useGetUserInfo();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !user) {
    navigate("/login");
    return null;
  }

  if ((admin && user.admin) || admin === user.admin) {
    return <Outlet />;
  }

  navigate("/");
};

export default ProtectedRoute;
