import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { searchMoviesParams, searchMoviesResponse } from "@/types/movie";
import { PUBLIC_API_KEY, BASE_URL } from "@/config/constants";

export const apiSlice = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    searchMovies: builder.query<searchMoviesResponse, searchMoviesParams>({
      query: ({ query, page = 1 }) => ({
        url: `/search/movie`,
        params: { query, page, api_key: PUBLIC_API_KEY },
      }),
    }),
  }),
});

export const { useSearchMoviesQuery } = apiSlice;
