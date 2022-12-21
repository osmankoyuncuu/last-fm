import TopArtistsCard from "../component/TopArtistsCard";
import Header from "../component/Header";
import { useInfiniteQuery } from "react-query";
import { topArtistFetch } from "../hook/api";
import React, { useRef } from "react";

const Home = () => {
  const scrollRef = useRef(null);

  console.log(scrollRef?.current);
  console.log(scrollRef?.current?.scrollHeight);
  console.log(scrollRef?.current?.scrollHeight);

  const loadNewArtists = async () => {
    const heightOfScroll = scrollRef.current.scrollHeight - 40;
    const ScrollY = scrollRef.current.scrollTop;
    const InnerHeight = scrollRef.current.offsetHeight;

    if (!isFetchingNextPage && ScrollY + InnerHeight >= heightOfScroll) {
      if (hasNextPage) await fetchNextPage();
    }
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("topArtist", topArtistFetch, {
    getNextPageParam: (allGroups) => {
      return allGroups.length + 1;
    },
  });

  if (status === "loading") return "Loading...";
  if (status === "error") return "An error has occurred: " + error.message;

  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen opacity-90">
      <Header header={"Top Artist List"} />
      <div
        className="bg-lime-200 dark:bg-gray-900 mt-3  w-96 h-3/4 overflow-auto  border border-black rounded-md p-2"
        id="scrollableDiv"
        ref={scrollRef}
        onScroll={loadNewArtists}
      >
        <div className="flex flex-col gap-4">
          {data?.pages.map((group, i) =>
            group?.map((item, i) => <TopArtistsCard {...item} key={i} />)
          )}
        </div>
        {isFetchingNextPage && <h4 className="flex justify-end">...Loading</h4>}
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </div>
    </div>
  );
};

export default Home;
