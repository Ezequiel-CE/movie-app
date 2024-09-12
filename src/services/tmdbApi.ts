import { BASE_URL, API_KEY } from "@/config/constants";
import { DetailMovieItem, MovieItem } from "@/types/movie";
import axios from "axios";

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

export const getMovieDetails = async (id: string): Promise<DetailMovieItem> => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const getSimilarMovies = async (id: string) => {
  const response = await api.get(`/movie/${id}/similar`);
  const data = response.data.results.slice(0, 14);
  return data;
};
