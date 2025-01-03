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
    console.log("SIGNUP API ERROR............", error);
    toast.error("Signup Failed");
    navigate("/signup");
  }

  toast.dismiss(toastId);
};

export const userLogin = async () => {
  const toastId = toast.loading("Loading...");
  try {
  } catch (error) {}
};
