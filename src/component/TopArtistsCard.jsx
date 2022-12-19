import { useNavigate } from "react-router-dom";
const TopArtistsCard = ({ image, name, listeners, playcount }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border border-black w-full flex px-2 py-4 gap-3 bg-lime-100 dark:bg-gray-800 dark:text-white cursor-pointer"
      onClick={() => navigate(`details/${name}`, { state: image })}
    >
      <img src={image[2]["#text"]} alt="" width={"75px"} />
      <div className="flex justify-between gap-3 w-full">
        <div className="w-1/3">
          <h5>Artist</h5>
          <div className="border border-b-black"></div>
          <h2 className="font-bold flex flex-wrap">{name}</h2>
        </div>
        <div className="flex justify-center flex-col text-sm ">
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
