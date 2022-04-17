import axios from "axios";
export const getHealthBeautyNavigation = async () => {
  const response = await axios.get("/api/healthbeauty/navigation");
  return response.data;
};
