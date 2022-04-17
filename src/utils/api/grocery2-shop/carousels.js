import axios from "axios";
export const getSection4Products = async () => {
  const response = await axios.get("/api/grocery-section4/products");
  return response.data;
};
export const getSection5Products = async () => {
  const response = await axios.get("/api/grocery-section5/products");
  return response.data;
};
export const getSection7Products = async () => {
  const response = await axios.get("/api/grocery-section7/products");
  return response.data;
};
export const getSection8Products = async () => {
  const response = await axios.get("/api/grocery-section8/products");
  return response.data;
};
export const getSection9Testimonials = async () => {
  const response = await axios.get("/api/grocery-section9/testimonial-list");
  return response.data;
};
