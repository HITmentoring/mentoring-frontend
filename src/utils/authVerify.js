import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const parseJwt = (token) => {
  try {
    return JSON.parse(window.atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  let location = useLocation();

  useEffect(() => {
    if(localStorage.getItem("userinfo")){
      const user = JSON.parse(localStorage.getItem("userinfo"));
      if (user) {
        const decodedJwt = parseJwt(user.token);
        if (decodedJwt.exp * 1000 < Date.now()) {
          props.logout();
        }
      }
  }
  }, [location, props]);

  return;
};

export default AuthVerify;