import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default api;

export const getPrediction = async () => {
  const response = await api.get("/api/predict");
  return response.data;
};