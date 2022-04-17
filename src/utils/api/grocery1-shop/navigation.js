import axios from "axios";
export const getGrocery1Navigation = async () => {
  const response = await axios.get("/api/grocery1/navigation");
  return response.data;
};
