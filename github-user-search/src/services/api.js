import axios from "axios";

// Create an Axios instance with the base URL from the environment variable
const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_BASE_URL,
});

export default api;
