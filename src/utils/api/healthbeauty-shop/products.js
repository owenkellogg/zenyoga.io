import axios from "axios";
export const getTopNewProducts = async () => {
  const response = await axios.get("/api/healthbeauty/top-new-products");
  return response.data;
};
export const getHealthBeautyProducts = async () => {
  const response = await axios.get("/api/healthbeauty/all-products");
  return response.data;
};
