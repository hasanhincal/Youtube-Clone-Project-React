import React, { useEffect, useState } from "react";
import SideBar from "../companents/SideBar";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import VideoCard from "../companents/VideoCard";

const Results = () => {
  const [page, setPage] = useState(1);
  const [token, setToken] = useState();
  const [data, setData] = useState([]);

  const [searchParams] = useSearchParams();
  //*1. adım URL'den aratılan terime uygun verileri al.
  const query = searchParams.get("search_query");

  useEffect(() => {
    const params = {
      query: query,
      token: page > 1 ? token : undefined,
    };
    api
      .get("/search", { params })
      //* Verilerin devamını almamızı sağlayacak token state
      .then((res) => {
        setToken(res.data.continuation);
        setData((prev) => prev.concat(res.data.data));
      });
  }, [query, page]);

  return (
    <div className="flex gap-3">
      <SideBar />
      <div className="mx-auto h-[90vh] overflow-auto">
        <h5 className="text-xl mb-2">
          <span>"{query}"</span> için sonuçlar...
        </h5>

        <div className="flex flex-col justify-center">
          {data.map(
            (item) =>
              item.type === "video" && (
                <VideoCard key={item.videoId} video={item} isRow={true} />
              )
          )}
          <button
            onClick={() => setPage(page + 1)}
            className=" bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition-[250ms]"
          >
            Daha Fazla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
