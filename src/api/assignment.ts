import axios from "axios";
import { getAuthorization } from "./auth";

export const getAllAssignment = async () => {
  const response = await axios.get(`${import.meta.env.VITE_ASSIGNMENT}/all`);

  return response.data;
};

export const getPartAssignment = async (part: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_ASSIGNMENT}/part/${part.toUpperCase()}`
  );

  return response.data;
};

export const getIdAssignment = async (id: number) => {
  const response = await axios.get(`${import.meta.env.VITE_ASSIGNMENT}/${id}`);

  console.log(response.data);

  return response.data;
};

export const getSubmittedAssignment = async (id: number) => {
  const response = await axios.get(
    `${import.meta.env.VITE_ASSIGNMENT}/${id}/submissions`
  );

  return response.data;
};

export const getMySubmission = async (id: number) => {
  await getAuthorization();

  const response = await axios.get(
    `${import.meta.env.VITE_ASSIGNMENT}/${id}/mysubmission`
  );

  return response.data;
};
