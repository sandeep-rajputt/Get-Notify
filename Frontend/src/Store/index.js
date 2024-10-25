import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./Slices/headerSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});
