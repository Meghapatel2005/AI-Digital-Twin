import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-digital-twin-9dna.onrender.com",
});

export default api;

export const getPrediction = async () => {
  const response = await api.get("/api/predict");
  return response.data;
};