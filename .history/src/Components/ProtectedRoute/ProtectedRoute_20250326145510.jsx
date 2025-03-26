import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  ocnst[({ user }, dispatch)] = useContext(DataContext);
  useEffect(() => {}, []);
  return <div></div>;
};

export default ProtectedRoute;
