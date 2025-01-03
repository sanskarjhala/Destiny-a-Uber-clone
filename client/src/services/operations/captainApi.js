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

    if (response.status !== 200) {
      throw new Error(response.data);
    }

    if (response.status === 403) {
        return toast.error('Captain Alredy exists , Please Login');
    }

    toast.success("Login Successfully");
    setCaptain(response.data.captain);
    localStorage.setItem("token", response.data.token);
    console.log(1)
    navigate("/captain-Dashboard");
  } catch (error) {
    console.log("CAPTAIN SIGNUP API ERROR............", error);
    toast.error("Signup Failed");
    navigate("/captain-signup");
  }
  toast.dismiss(toastId);
};
