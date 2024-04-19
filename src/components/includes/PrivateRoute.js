import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = () => {
  const { userData } = useContext(UserContext);

  if (userData) {
    return <Outlet />;
  } else {
    return <Navigate to="/login/" />;
  }
};

export default PrivateRoute;
