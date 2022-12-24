const AlbumsAndTracksCard = (item, loading) => {
  const { artist, name, image, playcount, listeners, url } = item;
  return (
    <a
      href={url}
      className="w-full border border-black h-20 py-10 px-2 flex items-center justify-between hover:shadow-2xl dark:hover:shadow-white dark:hover:shadow-md cursor-pointer "
    >
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
    </a>
  );
};

export default AlbumsAndTracksCard;
