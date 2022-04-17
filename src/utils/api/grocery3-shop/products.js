import axios from "axios";
export const getTopSailedProducts = async () => {
  const response = await axios.get("/api/grocery3/top-sailed-products");
  return response.data;
};
export const getGrocery3Products = async () => {
  const response = await axios.get("/api/grocery3/all-products");
  return response.data;
};
export const getGrocery3offerProducts = async () => {
  const response = await axios.get("/api/grocery3/offer-products");
  return response.data;
};
