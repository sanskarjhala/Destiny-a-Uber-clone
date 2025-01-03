import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import { getCaptainProfile } from "../services/operations/captainApi";

const CaptainProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }

    getCaptainProfile(token, navigate, setCaptain, setIsLoading);
  }, [token]);

  if (isLoading) {
    return <div>Loading....</div>;
  }
  return <div>{children}</div>;
};

export default CaptainProtectedRoute;
