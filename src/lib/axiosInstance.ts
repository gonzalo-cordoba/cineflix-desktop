// lib/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    language: "es-AR",
  },
});

export default axiosInstance;
