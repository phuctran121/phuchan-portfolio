import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});

// Lấy RootState và AppDispatch từ store
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
