import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Loader = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return array.map((i) => (
    <div key={i} className="p-4 shadow animate-pulse md:p-6">
      <div className="flex items-center rounded bg-gray-700 h-48" />
      <div className="flex items-center mt-4 gap-3">
        <FaRegUserCircle className="text-5xl text-gray-700" />
        <div>
          <div className="h-2.5 bg-gray-700 w-44 rounded-full" />
          <div className="h-2 bg-gray-700 w-16 rounded-full my-3" />
          <div>
            <div className="h-2 bg-gray-700 w-16 rounded-full my-3" />
            <div className="h-2 bg-gray-700 w-16 rounded-full my-3" />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Loader;
