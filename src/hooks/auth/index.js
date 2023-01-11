import { useContext } from "react";
import { useMutation } from "react-query";
import AuthContext from "../../context/authContext";
import { loginService } from "../../services/authServices";
import { useRouter } from "next/router";

export const useLogin = () => {
    const {login} = useContext(AuthContext);
    const router = useRouter();
   
    return useMutation('login', loginService, {
       onSuccess: data => {
            login(data.data)
            data.status === 1 && router.push("/")  
           
       },
    });
 };