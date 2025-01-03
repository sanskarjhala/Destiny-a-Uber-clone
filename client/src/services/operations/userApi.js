import { toast } from "react-hot-toast";
import { userEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";

export const userSignup = async (newUser, navigate, setUser) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "POST",
      userEndpoints.USER_SIGNUP,
      newUser
    );
    console.log("SIGNUP API RESPONSSE ..... ", response);

    if (response.status !== 200) {
      throw new Error(response.data);
    }
    toast.success("Signup successfully");
    setUser(response.data.user);
    localStorage.setItem("token", response.data.token);
    navigate("/dashboard");
  } catch (error) {
    console.log("USER SIGNUP API ERROR............", error);
    toast.error("Signup Failed");
    navigate("/signup");
  }

  toast.dismiss(toastId);
};

export const userLogin = async (credentials, navigate, set) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "POST",
      userEndpoints.USER_LOGIN,
      credentials
    );
    
    if (response.status === 401) {
        toast.error("Invalid Email Or Password");
        return;
    }

    if (response.status !== 200) {
      throw new Error(response.data);
    }

    

    toast.success("Login Successfully");
    set(response.data.user);
    localStorage.setItem("token", response.data.token);
    navigate("/dashboard");
  } catch (error) {
    console.log("USER LOGIN API ERROR............", error);
    toast.error("Login Failed");
    navigate("/login");
  }
  toast.dismiss(toastId);
};

export const getUserProfile = async (token , navigate , setUser , setIsLoading) => {
  try {
    const response = await apiConnector(
      "GET",
      userEndpoints.USER_PROFILE,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if(response.status !== 200){
        throw new Error(response.data);
    }

    setUser(response.data);
    setIsLoading(false);
    console.log("USER PROFILE")
  } catch (error) {
    console.log(error);
    localStorage.removeItem('token');
    setIsLoading(false);
    navigate('/login')
  }
};
