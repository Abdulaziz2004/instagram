import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

  let token = localStorage.getItem("user-token")
  let navigate = useNavigate()

  useEffect(() => {
    if(!token){
      navigate("/signIn")
    }
  }, [token, navigate])

  return children;
};


export default PrivateRoutes;
