import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: localStorage.getItem("color-theme") === "dark" ? true : false,
};

const darkMode = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    reverseDarkMode: (state, { payload }) => {
      state.darkMode = payload;
    },
  },
});

export const { reverseDarkMode } = darkMode.actions;
export default darkMode.reducer;
