import axios from "axios";

let axiosApi = "";


if (process.env.NEXT_PUBLIC_ENVIROMENT === "DEV") {
  axiosApi = axios.create({ baseURL: process.env.NEXT_PUBLIC_DEV_API_URL });
} else if (process.env.REACT_APP_ENVIROMENT === "PRO") {
  axiosApi = axios.create({ baseURL: process.env.NEXT_PUBLIC_PROD_API_URL });
}



export { axiosApi };
