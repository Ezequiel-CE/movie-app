import { MovieItem } from "@/types/movie";
import axios from "axios";

const API_KEY = process.env.TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrend = async (): Promise<MovieItem[]> => {
  const response = await api.get("/trending/movie/day");
  const data = response.data.results.slice(0, 14);
  return data;
};

export const getTopMovies = async (): Promise<MovieItem[]> => {
  const response = await api.get("/movie/top_rated");
  const data = response.data.results.slice(0, 14);
  return data;
};

export const getMovies = async (query: string) => {
  const response = await api.get("/search/movie", { params: { query } });
  return response.data;
};

export const getMovieDetails = async (id: string) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const getSimilarMovies = async (id: string) => {
  const response = await api.get(`/movie/${id}/similar`);
  return response.data;
};
