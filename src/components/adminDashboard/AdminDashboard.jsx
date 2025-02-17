import React from "react";

import useGetUserInfo from "../../hooks/useGetUserInfo";
const AdminDashboard = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetUserInfo();

  if (isLoading) return <p>Loading user info...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p>email : {data.email}</p>
      <p>admin : {`${data.admin}`}</p>
    </div>
  );
};

export default AdminDashboard;
