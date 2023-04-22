import { useAuthContext } from "./useAuthContext.js";
import { useState } from "react";
import { auth } from "./config.js";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  //LogOutPage Firebase Logic
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        setSuccess("Log Out Successful");
      })
      .catch((err) => {
        setError("Logout Failed");
      });
  };

  return { logout, success, error };
};
