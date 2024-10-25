import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showHeader: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleHeader: (state) => {
      state.showHeader = !state.showHeader;
    },
  },
});

export const { toggleHeader } = headerSlice.actions;

export default headerSlice.reducer;
