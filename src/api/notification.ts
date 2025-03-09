import axios from "axios";

export const getPartNotification = async (part: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_NOTIFICATION}/part/${part.toUpperCase()}`
  );

  return response.data;
};

export const getAllNotification = async () => {
  const response = await axios.get(`${import.meta.env.VITE_NOTIFICATION}/all`);

  return response.data;
};

export const getNoticeById = async (id: number) => {
  const response = await axios.get(
    `${import.meta.env.VITE_NOTIFICATION}/${id}`
  );

  return response.data;
};
