import { useContext } from "react";
import { useMutation } from "react-query";
import AuthContext from "../../context/authContext";
import { loginService, registerService } from "../../services/authServices";
import Router, { useRouter } from "next/router";

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  const router = useRouter();

  return useMutation("login", loginService, {
    onSuccess: (data) => {
      login(data.data);
      data.status === 1 && router.push("/");
    },
  });
};

export const useRegister = () => {
  const router = useRouter();

  return useMutation("register", registerService, {
    onSuccess: (data) => {
      console.log(data);
      data.status === 1 && router.push("/login");
    },
  });
};
