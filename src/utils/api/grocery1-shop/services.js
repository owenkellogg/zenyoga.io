import axios from "axios";
export const getGrocery1Services = async () => {
  const response = await axios.get("/api/grocery1/services");
  return response.data;
};
