import axios from "axios";

const API_URL = "https://api-prayer247.snowmanlabs.com/api/v1";

const api = axios.create({
  baseURL: API_URL,
});

export default api;
