import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }
  return context;
};