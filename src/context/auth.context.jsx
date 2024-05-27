import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload, isLoggedIn: true, loading: false };
    case "LOGOUT":
      return { user: null, isLoggedIn: false, loading: false };
    case "GUEST":
      return { user: null, isLoggedIn: false, loading: false };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isLoggedIn: false,
    loading: true,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userinfo"));
    if (user != null) {
      dispatch({ type: "LOGIN", payload: user });
    } else {
      dispatch({ type: "GUEST" });
    }
  }, []);

  console.log(state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};