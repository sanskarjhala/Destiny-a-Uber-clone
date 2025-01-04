import { toast } from "react-hot-toast";
import { captainEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";

export const captainSignup = async (newCaptain, navigate, setCaptain) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "POST",
      captainEndpoints.CAPTAIN_SIGNUP,
      newCaptain
    );
    console.log("CAPTAIN_SIGNUP_API_RESPONSE..... ", response);

    if (response.status === 403) {
      return toast.error("Captain Alredy exists , Please Login");
    }

    if (response.status !== 200) {
      throw new Error(response.data);
    }

    toast.success("Login Successfully");
    setCaptain(response.data.captain);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem()
    navigate("/captain-Dashboard");
  } catch (error) {
    console.log("CAPTAIN SIGNUP API ERROR............", error);
    toast.error("Signup Failed");
    navigate("/captain-signup");
  }
  toast.dismiss(toastId);
};

export const captainLogin = async (credentails, navigate, set) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "POST",
      captainEndpoints.CAPTAIN_LOGIN,
      credentails
    );

    if (response.status === 401) {
      toast.error("Invalid Email or Password");
      return;
    }

    if (response.status !== 200) {
      throw new Error(response.data);
    }

    toast.success("Login Successfully");
    set(response.data.captain);
    localStorage.setItem("token", response.data.token);
    console.log("login api")
    navigate("/captain-Dashboard");
  } catch (error) {
    console.log("CAPTAIN Login API ERROR............", error);
    toast.error("Login Failed");
    navigate("/captain-login");
  }
  toast.dismiss(toastId);
};

export const getCaptainProfile = async (token , navigate , setCaptain , setIsLoading) => {
  try {
    const response = await apiConnector(
      "GET",
      captainEndpoints.CAPTAIN_PROFILE,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if(response.status !== 200){
        throw new Error("GET CCAPTAIN PROFILE ERROR ",response.data);
    }

    setCaptain(response.data);
    setIsLoading(false);
    console.log("Captain PROFILE")
  } catch (error) {
    console.log(error);
    localStorage.removeItem('token');
    setIsLoading(false);
    navigate('/captain-login')
  }
};

