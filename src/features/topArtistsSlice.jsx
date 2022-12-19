import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topArtists: [],
  topAlbums: [],
  topTracks: [],
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
    fetchTopAlbumsSuccess: (state, { payload }) => {
      state.loading = false;
      state.topAlbums = payload;
    },
    fetchTopTracksSuccess: (state, { payload }) => {
      state.loading = false;
      state.topTracks = payload;
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchError,
  fetchTopAlbumsSuccess,
  fetchTopTracksSuccess,
} = topArtistsSlice.actions;
export default topArtistsSlice.reducer;
