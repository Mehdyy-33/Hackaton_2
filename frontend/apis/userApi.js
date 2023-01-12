import axios from "axios";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const loginUser = (email, password) => {
  return axios
    .post(apiUrl + "user/login", { email, password }, { withCredentials: true })
    .then((response) => response.data);
};
