import axios from "axios";

export const topArtistFetch = async ({ pageParam = 1 }) => {
  try {
    const limit = 10;
    const { data } = await axios.get(
      `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&page=${pageParam}&api_key=8e73114473fcefc5ba2848a79a622848&format=json&limit=${limit}`
    );
    return data?.artists?.artist;
  } catch (error) {
    console.log(error);
  }
};
