import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",

  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use<any>(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("Response error : ", error);
    return Promise.reject(error);
  }
);
