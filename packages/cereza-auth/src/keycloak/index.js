import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userManager } from "./userManager";
import {
  setKeycloakProfile,
  setMyKeycloakId,
  setAuthUser,
} from "../redux/slices/authUser";

export const SignInKeyCloak = () => {
  useEffect(() => {
    const login = async () => {
      try {
        await userManager.signinRedirect();
      } catch (error) {
        console.error("Failed to authenticate", error);
      }
    };
    login();
  }, []);
  return null;
};

export const Callback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    userManager
      .signinRedirectCallback()
      .then((user) => {
        dispatch(setAuthUser(user.access_token));
        dispatch(setKeycloakProfile(user.profile));
        dispatch(setMyKeycloakId(userManager?._sessionMonitor?._sub));
        navigate("/home/indicators");
      })
      .catch((error) => console.log("Auth error: ", error));
  }, [dispatch, navigate]);
  return null;
};
