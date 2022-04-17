import axios from "axios";
export const getDealOfTheWeekList = async () => {
  const response = await axios.get("/api/fashion-store/deal-of-the-week");
  return response.data;
};
export const getHotDealList = async () => {
  const response = await axios.get("/api/fashion-store/hot-deals");
  return response.data;
};
