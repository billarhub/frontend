import { axiosApi } from "../utils/axiosApi";

export const loginService = async ({ email, password }) => {

    try {
       const { data } = await axiosApi.post('auth/login', {
          username: email,
          password: password
       });
       return data;
    } catch (error) {
       throw Error(error);
    }
 };
 
 export const registerService = async ({ email, password }) => {

   try {
      const { data } = await axiosApi.post('auth/login', {
         username: email,
         password: password
      });
      return data;
   } catch (error) {
      throw Error(error);
   }
};
