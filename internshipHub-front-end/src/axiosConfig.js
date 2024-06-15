import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Default to local backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor for adding authorization header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["auth-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
