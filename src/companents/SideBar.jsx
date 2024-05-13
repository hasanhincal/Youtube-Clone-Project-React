import { Link } from "react-router-dom";
import { categories } from "../constants/index";
import { VideoContext } from "../context/VideoContext";
import { useContext } from "react";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext);

  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories?.map((item, i) => (
        <Link
          onClick={() => setSelectedCategory(item)}
          key={i}
          className="flex flex-col p-1 md:p-4"
        >
          <div
            className={`
            ${selectedCategory.name === item.name && "bg-[#27272A]"}
            flex gap-2 items-center py-4 px-2 md:px-3 md:text-lg rounded-md cursor-pointer hover:bg-[#27272A]`}
          >
            <span className="max-md:text-2xl">{item.icon}</span>
            <span className="max-md:hidden line-clamp-1">{item.name}</span>
          </div>
          {item.divider && <hr />}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
