import { useLocation, useParams } from "react-router-dom";
import AlbumsAndTracksCard from "../component/AlbumsAndTracksCard";
import { useQuery } from "react-query";
import { topAlbumsFetch, topTracksFetch } from "../hook/api";
import { useEffect, useState } from "react";

const Details = ({ setPathname }) => {
  const { name } = useParams();
  const { state: image } = useLocation();

  const [visible, setVisible] = useState(true);

  const resultAlbums = useQuery("topAlbums", () => topAlbumsFetch(name));
  const resultTracks = useQuery("topTracks", () => topTracksFetch(name));

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border border-black mx-2 md:mx-6 w-full xl:w-3/5 h-[38rem] md:h-[36rem] p-4 bg-lime-200 dark:bg-gray-900 opacity-90  rounded-md ">
        {resultAlbums?.isLoading ? (
          <h2 className="text-black dark:text-white">Loading..</h2>
        ) : (
          <>
            <div className="flex gap-5 sm:gap-10 items-center w-full border border-black p-2 bg-lime-100 dark:bg-gray-800 dark:text-white">
              <img src={image[2]["#text"]} alt="" width={"100px"} />
              <h2 className="text-2xl font-bold">
                {resultAlbums?.data[0]?.artist?.name}
              </h2>
            </div>
            <div className="my-2 flex gap-3 justify-center">
              <button
                onClick={() => setVisible(true)}
                className="border border-black px-3 py-1 rounded-md font-bold shadow-md shadow-black dark:border-white dark:text-white dark:shadow-white block md:hidden text-sm sm:text-base"
              >
                Top Albums
              </button>
              <button
                onClick={() => setVisible(false)}
                className="border border-black px-3 py-1 rounded-md font-bold shadow-md shadow-black dark:border-white dark:text-white dark:shadow-white block md:hidden text-sm sm:text-base"
              >
                Top Tracks
              </button>
            </div>

            <div className="mt-3 flex gap-6 dark:text-white ">
              <div
                className={`w-full md:w-1/2 ${
                  visible ? "block" : "hidden"
                } md:block`}
              >
                <h3 className=" border-b border-black dark:border-white font-bold mb-2">
                  Top Albums
                </h3>
                <div className="flex flex-col gap-3 overflow-auto h-96 pb-1">
                  {resultAlbums?.data?.map((item, index) => (
                    <AlbumsAndTracksCard
                      key={index}
                      {...item}
                      loading={resultAlbums?.isLoading}
                    />
                  ))}
                </div>
              </div>
              <div
                className={`w-full md:w-1/2 ${
                  !visible ? "block" : "hidden"
                } md:block`}
              >
                <h3 className=" border-b border-black dark:border-white font-bold mb-2">
                  Top Tracks
                </h3>
                <div className="flex flex-col gap-3 overflow-auto h-96 pb-1">
                  {resultTracks?.data?.map((item, index) => (
                    <AlbumsAndTracksCard
                      key={index}
                      {...item}
                      loading={resultTracks?.isLoading}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
