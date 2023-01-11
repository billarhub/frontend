import { createContext, useReducer, useState } from "react";

const authState = {
  user: null,
  authReady: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "INITIALISE": {
      const { authReady, user } = action.payload;

      return {
        ...state,
        authReady,
        user,
      };
    }
    case "LOGIN": {
      const { user } = action.payload;
      return {
        ...state,
        authReady: true,
        user,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        authReady: false,
        user: null,
      };
    }
    case "REGISTER": {
      const { user } = action.payload;
      return {
        ...state,
        user,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...authState,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authState);

  const login = async (data) => {
    dispatch({ type: "LOGIN", payload: { user: data } });
  };
  const logout = async () => {
    dispatch({ type: "LOGOUT" });
  };

  const context = { login, logout, ...state };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
