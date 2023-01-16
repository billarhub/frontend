import { axiosApi } from "../utils/axiosApi";

export const loginService = async ({ email, password }) => {
  try {
    const { data } = await axiosApi.post("auth/login", {
      username: email,
      password: password,
    });
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const registerService = async ({
  name,
  last_name,
  identification_number,
  phone,
  email,
  password,
  repeat_password,
}) => {
  try {
    const { data } = await axiosApi.post("auth/register", {
      identification_type: "V",
      identification_number: identification_number,
      cellphone: phone,
      name: name,
      last_name: last_name,
      username: email,
      email: email,
      password: password,
      repeat_password: repeat_password,
    });
    return data;
  } catch (error) {
    throw Error(error);
  }
};
