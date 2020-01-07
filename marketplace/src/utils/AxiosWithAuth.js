import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://africanmarket2.herokuapp.com/",
    headers: {
      Authorization: token,
    }
  });
};
export default axiosWithAuth;
