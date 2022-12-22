import axios from "axios";

export const topArtistFetch = async ({ pageParam = 1 }) => {
  const limit = 10;
  const { data } = await axios.get(
    `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&page=${pageParam}&api_key=8e73114473fcefc5ba2848a79a622848&format=json&limit=${limit}`
  );
  return data?.artists?.artist;
};

export const topAlbumsFetch = async (name) => {
  const { data } = await axios.get(
    `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=8e73114473fcefc5ba2848a79a622848&format=json`
  );
  return data?.topalbums?.album;
};

export const topTracksFetch = async (name) => {
  const { data } = await axios.get(
    `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=8e73114473fcefc5ba2848a79a622848&format=json`
  );
  return data?.toptracks?.track;
};
