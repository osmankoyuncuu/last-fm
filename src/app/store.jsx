import { configureStore } from "@reduxjs/toolkit";
import topArtistsSlice from "../features/topArtistsSlice";

const store = configureStore({
  reducer: {
    lastfm: topArtistsSlice,
  },
});

export default store;
