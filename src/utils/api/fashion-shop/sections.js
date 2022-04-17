import axios from "axios";
export const getFlashDeals = async () => {
  const response = await axios.get("/api/fashion-store/flash-deals");
  return response.data;
};
export const getNewArrivals = async () => {
  const response = await axios.get("/api/fashion-store/new-arrivals");
  return response.data;
};
export const getTrendingItems = async () => {
  const response = await axios.get("/api/fashion-store/trending-items");
  return response.data;
};
export const getServiceList = async () => {
  const response = await axios.get("/api/fashion-store/service-list");
  return response.data;
};
