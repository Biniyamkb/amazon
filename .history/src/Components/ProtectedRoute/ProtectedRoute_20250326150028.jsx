import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const ProtectedRoute = ({children,msg ,redirect}) => {
  const navigate = useNavigate();
  ocnst[({ user }, dispatch)] = useContext(DataContext);
  useEffect(() => {
   if(!user){
    navigate("/auth",{state}),
   }


  }, []);
  return <div></div>;
};

export default ProtectedRoute;
