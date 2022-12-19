import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import AlbumsAndTracksCard from "../component/AlbumsAndTracksCard";

import {
  fetchError,
  fetchStart,
  fetchTopAlbumsSuccess,
  fetchTopTracksSuccess,
} from "../features/topArtistsSlice";

const Details = () => {
  const { topAlbums, topTracks } = useSelector((state) => state.lastfm);
  const { name } = useParams();
  const { state: image } = useLocation();
  const dispatch = useDispatch();
  const getTopArtists = async () => {
    dispatch(fetchStart());
    try {
      const topAlbumsUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=8e73114473fcefc5ba2848a79a622848&format=json`;
      const { data } = await axios.get(topAlbumsUrl);
      dispatch(fetchTopAlbumsSuccess(data?.topalbums?.album));
    } catch (error) {
      dispatch(fetchError());
    }
  };
  const getTopTracks = async () => {
    dispatch(fetchStart());
    try {
      const topAlbumsUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=8e73114473fcefc5ba2848a79a622848&format=json`;
      const { data } = await axios.get(topAlbumsUrl);
      dispatch(fetchTopTracksSuccess(data?.toptracks?.track));
    } catch (error) {
      dispatch(fetchError());
    }
  };
  useEffect(() => {
    getTopArtists();
    getTopTracks();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border border-black w-3/5 h-4/5 p-5 bg-lime-200 dark:bg-gray-900 opacity-90  rounded-md overflow-hidden">
        <div className="flex gap-10 items-center w-full border border-black p-2 bg-lime-100 dark:bg-gray-800 dark:text-white">
          <img src={image[2]["#text"]} alt="" width={"100px"} />
          <h2 className="text-2xl font-bold">{topAlbums[0]?.artist?.name}</h2>
        </div>
        <div className="mt-3 flex gap-10 dark:text-white">
          <div className="w-1/2 ">
            <h3 className=" border-b border-black dark:border-white font-bold mb-2">
              Top Albums
            </h3>
            <div className="flex flex-col gap-2 overflow-auto h-screen">
              {topAlbums?.map((item, index) => (
                <AlbumsAndTracksCard key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <h3 className=" border-b border-black dark:border-white font-bold mb-2">
              Top Tracks
            </h3>
            <div className="flex flex-col gap-2 overflow-auto h-screen">
              {topTracks?.map((item, index) => (
                <AlbumsAndTracksCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
