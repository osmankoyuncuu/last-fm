import { useNavigate } from "react-router-dom";
const TopArtistsCard = ({ image, name, listeners, playcount }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border border-black w-full flex flex-col sm:flex-row items-center px-2 py-4 gap-3 bg-lime-100 dark:bg-gray-800 dark:text-white cursor-pointer hover:shadow-md hover:shadow-black dark:shadow-white "
      onClick={() => navigate(`details/${name}`, { state: image })}
    >
      <img src={image[2]["#text"]} alt="" width={"75px"} />
      <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-3 w-full ">
        <div className="w-full sm:w-2/4 text-center sm:text-left ">
          <h5>Artist</h5>
          <div className="border border-b-black"></div>
          <h2 className="font-bold justify-center sm:text-left">{name}</h2>
        </div>
        <div className="flex sm:justify-center sm:flex-col text-sm items-center">
          <div className="flex gap-1">
            <div>
              <p>listeners</p>
              <p>playcount</p>
            </div>
            <div>
              <p>
                {listeners > 1000000
                  ? `: ${(listeners / 1000000).toFixed(1)} M`
                  : `: ${(listeners / 1000).toFixed(1)} K`}
              </p>
              <p>
                {playcount > 1000000
                  ? `: ${(playcount / 1000000).toFixed(1)} M`
                  : `: ${(playcount / 1000).toFixed(1)} K`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtistsCard;
