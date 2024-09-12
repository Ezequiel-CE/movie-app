import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import { apiSlice } from "./apiSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
