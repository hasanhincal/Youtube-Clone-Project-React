import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import ChannelInfo from "./ChannelInfo";
import Comments from "./Comments";
import VideoInfo from "./VideoInfo";
import VideoCard from "../../companents/VideoCard";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);

  //* Arama paremetrelerine erişim için kullanırız.
  const [searchParams] = useSearchParams();

  //* URL'den "v" isimli paremetreye eriştik.
  const id = searchParams.get("v");

  useEffect(() => {
    api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data));

    api.get(`/comments?id=${id}`).then((res) => setComments(res.data));
  }, [id]);

  return (
    <div className="detail_page h-screen overflow-auto">
      <div>
        {/* Video içeriği */}
        <div className="h-[50vh] lg:h-[60vh] rounded-md overflow-hidden">
          <ReactPlayer
            controls
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        {!video && <p>YÜKLENİYOR...</p>}
        {video && (
          <>
            {/* Başlık */}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            {/* Kanal bilgileri */}
            <ChannelInfo video={video} />
            {/* Video bilgileri */}
            <VideoInfo video={video} />
            {/* Yorumlar */}
            <Comments data={comments} />
          </>
        )}
      </div>
      <div className="flex flex-col gap-5 p-1">
        {video?.relatedVideos.data.map(
          (item) =>
            item.type === "video" && (
              <VideoCard key={item.videoId} video={item} isRow={true} />
            )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
