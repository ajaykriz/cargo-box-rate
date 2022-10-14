import axios from "axios";

const API_URL = "http://localhost:5000/api/cargo/";

const createCargo = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};
const getAll = async () => {
  console.log("kjfkaskjfsgkdfbgkjhafjyth");
  const response = await axios.get(API_URL);

  return response.data;
};

const cargoService = {
  createCargo,
  getAll,
};

export default cargoService;
