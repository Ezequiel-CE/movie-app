import { MovieItem } from "@/types/movie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type QueryState = {
  query: string;
  page: number;
  items: MovieItem[];
};

const initialState: QueryState = {
  query: "",
  page: 1,
  items: [],
};

const searchSlice = createSlice({
  name: "seach",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      return {
        ...state,
        query: action.payload,
        page: 1,
      };
    },
    setPage: (state, action: PayloadAction<number>) => ({
      ...state,
      page: action.payload,
    }),
    setItems(state, action: PayloadAction<MovieItem[]>) {
      return {
        ...state,
        items: action.payload,
      };
    },
  },
});

export const { setItems, setQuery, setPage } = searchSlice.actions;
export default searchSlice.reducer;
