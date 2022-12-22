import { useLocation, useParams } from "react-router-dom";
import AlbumsAndTracksCard from "../component/AlbumsAndTracksCard";
import { useQuery } from "react-query";
import { topAlbumsFetch, topTracksFetch } from "../hook/api";

const Details = () => {
  const { name } = useParams();
  const { state: image } = useLocation();

  const resultAlbums = useQuery("topAlbums", () => topAlbumsFetch(name));
  const resultTracks = useQuery("topTracks", () => topTracksFetch(name));

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border border-black w-3/5 h-4/5 p-5 bg-lime-200 dark:bg-gray-900 opacity-90  rounded-md overflow-hidden">
        <div className="flex gap-10 items-center w-full border border-black p-2 bg-lime-100 dark:bg-gray-800 dark:text-white">
          {resultAlbums?.isLoading ? (
            <h3>Loading..</h3>
          ) : (
            <>
              <img src={image[2]["#text"]} alt="" width={"100px"} />
              <h2 className="text-2xl font-bold">
                {resultAlbums?.data[0]?.artist?.name}
              </h2>
            </>
          )}
        </div>

        <div className="mt-3 flex gap-10 dark:text-white ">
          <div className="w-1/2 ">
            <h3 className=" border-b border-black dark:border-white font-bold mb-2">
              Top Albums
            </h3>
            <div className="flex flex-col gap-3 overflow-auto h-screen ">
              {resultAlbums?.data?.map((item, index) => (
                <AlbumsAndTracksCard
                  key={index}
                  {...item}
                  loading={resultAlbums?.isLoading}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <h3 className=" border-b border-black dark:border-white font-bold mb-2">
              Top Tracks
            </h3>
            <div className="flex flex-col gap-3  overflow-auto h-screen">
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
      </div>
    </div>
  );
};

export default Details;
