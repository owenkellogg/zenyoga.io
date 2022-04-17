import axios from "axios";
export const getTopNewProducts = async () => {
  const response = await axios.get("/api/furniture-shop/top-new-products");
  return response.data;
};
export const getTopSellingProducts = async () => {
  const response = await axios.get("/api/furniture-shop/top-selling-products");
  return response.data;
};
export const getFurnitureProducts = async () => {
  const response = await axios.get("/api/furniture-shop/all-products");
  return response.data;
};
