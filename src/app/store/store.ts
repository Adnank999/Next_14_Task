import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "../features/apiSlice";

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(taskApi.middleware),
});