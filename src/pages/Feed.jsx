import React, { useContext } from "react";
import SideBar from "../companents/SideBar";
import { VideoContext } from "../context/VideoContext";
import VideoCard from "../companents/VideoCard";
import Loader from "../companents/Loader";

const Feed = () => {
  const { videos, isLoading, error } = useContext(VideoContext);

  return (
    <div className="flex">
      <SideBar />
      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <p>error</p>
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard video={item} key={item.videoId} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
