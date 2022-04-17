import axios from "axios";
export const getPopularProducts = async () => {
  const response = await axios.get("/api/grocery1/popular-products");
  return response.data;
};
export const getTrendingProducts = async () => {
  const response = await axios.get("/api/grocery1/trending-products");
  return response.data;
};
export const getGrocery1Products = async () => {
  const response = await axios.get("/api/grocery1/all-products");
  return response.data;
};
