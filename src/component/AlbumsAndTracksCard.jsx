const AlbumsAndTracksCard = (item) => {
  const { artist, name, image, playcount, listeners } = item;
  return (
    <div className="w-full border border-black h-20 py-10 px-2 flex items-center justify-between ">
      <div className="flex gap-5 items-center w-2/3">
        <img src={image[2]["#text"]} alt="" width={"50px"} />
        <div>
          <h2 className="font-bold lineClamp">{name}</h2>
          <p>{artist?.name}</p>
        </div>
      </div>
      <div className="flex flex-col items-end w-1/3">
        {listeners && (
          <p>
            {listeners > 1000000
              ? ` ${(listeners / 1000000).toFixed(1)} M`
              : ` ${(listeners / 1000).toFixed(1)} K`}{" "}
            listeners
          </p>
        )}
        <p>
          {playcount > 1000000
            ? ` ${(playcount / 1000000).toFixed(1)} M`
            : ` ${(playcount / 1000).toFixed(1)} K`}{" "}
          play
        </p>
      </div>
    </div>
  );
};

export default AlbumsAndTracksCard;