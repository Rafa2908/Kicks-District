import axios from "axios";

const sneaker_instance = axios.create({
  baseURL: "http://localhost:8004/sneaker",
});

export const createSneaker = async (sneakerData) => {
  try {
    const res = await sneaker_instance.post("/", sneakerData);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const getAllSneakers = async () => {
  try {
    const res = await sneaker_instance.get("/");
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const getSneakerById = async (id) => {
  try {
    const res = await sneaker_instance.get(`/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const updateSneakerById = async (data) => {
  try {
    const res = await sneaker_instance.put(`/${data._id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const deleteSneakerById = async (id) => {
  try {
    const res = await sneaker_instance.delete(`/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
