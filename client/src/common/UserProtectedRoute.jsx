import React, {  useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { getUserProfile } from "../services/operations/userApi";

const UserProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    getUserProfile(token, navigate, setUser, setIsLoading);
  }, [token]);

  if (isLoading) {
    return <div>Loading.....</div>;
  }
  return <div>{children}</div>;
};

export default UserProtectedRoute;
