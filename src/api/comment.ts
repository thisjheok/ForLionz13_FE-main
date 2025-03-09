import axios from "axios";

export const getCommentsById = async (id: number) => {
  const response = await axios.get(`${import.meta.env.VITE_COMMENT}/${id}`);

  return response.data;
};

export const getChildComments = async (id: number) => {
  const response = await axios.get(
    `${import.meta.env.VITE_CHILD_COMMENT}/${id}`
  );

  return response.data;
};
