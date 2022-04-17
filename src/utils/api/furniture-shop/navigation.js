import axios from "axios";
export const getFurnitureShopNavList = async () => {
  const response = await axios.get("/api/furniture-shop/navigation");
  return response.data;
};
