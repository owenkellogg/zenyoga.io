import axios from "axios";
export const getHealthBeautyServices = async () => {
  const response = await axios.get("/api/healthbeauty/services");
  return response.data;
};
