import { useContext } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ Component }) => {
  const { auth } = useContext(AuthContext);
  return <>{auth?.token ? <Component /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
