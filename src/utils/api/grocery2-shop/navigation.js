import axios from "axios";
export const getGroceryNavigation = async () => {
  const response = await axios.get("/api/grocery-navigation");
  return response.data;
};
