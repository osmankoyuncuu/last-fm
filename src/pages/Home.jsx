import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../component/Card";
import Header from "../component/Header";
import {
  fetchError,
  fetchStart,
  fetchSuccess,
} from "../features/topArtistsSlice";

const Home = () => {
  const { topArtists } = useSelector((state) => state.lastfm);
  const dispatch = useDispatch();
  const getTopArtists = async () => {
    dispatch(fetchStart());
    try {
      const topArtistUrl = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=8e73114473fcefc5ba2848a79a622848&format=json`;
      const { data } = await axios.get(topArtistUrl);
      const {
        artists: { artist },
      } = data;
      dispatch(fetchSuccess(artist));
    } catch (error) {
      dispatch(fetchError());
    }
  };
  useEffect(() => {
    getTopArtists();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen opacity-90">
      <Header header={"Top Artist List"} />
      <div className="bg-lime-200 dark:bg-gray-900 mt-3 w-96 h-2/3 flex flex-col border border-black rounded-md p-2 gap-2 overflow-auto">
        {topArtists?.map((artist, index) => (
          <Card {...artist} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
