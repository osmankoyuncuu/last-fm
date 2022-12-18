import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topArtists: [],
  loading: false,
  error: false,
};

const topArtistsSlice = createSlice({
  name: "lastfm",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, { payload }) => {
      state.loading = false;
      state.topArtists = payload;
    },
    fetchError: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchError } = topArtistsSlice.actions;
export default topArtistsSlice.reducer;
