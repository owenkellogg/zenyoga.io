import axios from "axios";
export const getSection2Services = async () => {
  const response = await axios.get("/api/grocery-section2/services");
  return response.data;
};
export const getSection3Categories = async () => {
  const response = await axios.get("/api/grocery-section3/shop-by-category");
  return response.data;
};
export const getSection6CardList = async () => {
  const response = await axios.get("/api/grocery-section6/card-list");
  return response.data;
};
