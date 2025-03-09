import axios from "axios";
import { getCookie } from "../utils/cookie";

export const getUser = async () => {
  const response = await axios.get(import.meta.env.VITE_MY_INFO);

  return response.data;
};

export const getAuthorization = async () => {
  await axios({
    method: "post",
    url: `${import.meta.env.VITE_AUTH_REISSUE}=${getCookie("myToken")}`,
  }).then((res) => {
    const { accessToken } = res.data.data;

    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  });
};
