import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
const Comments = ({ data }) => {
  console.log(data);
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">{data?.commentsCount}</h2>
      <input
        className="w-full border-b bg-transparent outline-none mb-5 p-2"
        type="text"
        placeholder="Yorum ekleyiniz..."
      />

      {data?.data.map((item, index) => (
        <div key={index} className="flex align-items-center gap-2 px-1 py-4">
          <img
            src={item.authorThumbnail[0].url}
            className="rounded-full h-fit w-fit"
          />
          <div className="flex flex-col gap-2">
            <h5 className="flex gap-2 items-center">
              <span className="font-semibold">{item.authorText}</span>
              <span className="text-sm text-gray-400">
                {item.publishedTimeText}
              </span>
            </h5>

            <p>{item.textDisplay}</p>

            <div className="flex items-center gap-5">
              <div className="flex gap-1 align-items-center hover:bg-gray-700 rounded p-1 cursor-pointer">
                <AiFillLike />
              </div>
              <div className="hover:bg-gray-700 p-1 cursor-pointer rounded">
                <AiFillDislike />
              </div>
              <span className="hover:bg-gray-700 px-2 cursor-pointer rounded">
                Yanıtla
              </span>
            </div>

            {item.replyCount > 0 && (
              <div className="flex px-2 w-fit rounded cursor-pointer items-center p-1 gap-2 text-blue-500 hover:bg-[#11263D]">
                <IoMdArrowDropdown /> Yanıt
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
