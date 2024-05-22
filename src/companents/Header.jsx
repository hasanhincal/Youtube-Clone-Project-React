import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { IoMic } from "react-icons/io5";
const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    //*Form gönderilince çalışacak fonksiyonlar;
    e.preventDefault(); //*sayfanın yenilenmesini engeller.
    //* Aratılacak metin;
    const text = e.target[0].value;
    //* Metin boşsa fonksiyonu durdur;
    if (text.trim() === "") return;
    navigate(`/results?search_query=${text}`);
  };
  return (
    <header className="flex justify-between items-center p-4">
      <Link to="/" className="flex items-center gap-2">
        <img className="w-[50px]" src="/youtube.png" alt="logo" />
        <h1 className="text-2xl font-mono max-sm:hidden">YouTube</h1>
      </Link>
      <div className="flex">
        <form
          onSubmit={handleSubmit}
          className="group transition-[250ms] flex border border-gray-400 rounded-[20px] overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search..."
            className="group-hover:border-blue-500 group-hover:border border border-transparent bg-black text-white py-2 px-5 outline-none rounded-l-[20px] focus:border-blue-500 "
          />
          <button className="px-4 text-2xl bg-zinc-800">
            <CiSearch />
          </button>
        </form>
        <button className="mx-l-[0] text-2xl transition-[250ms] bg-zinc-800 hover:bg-zinc-500 rounded-full px-2 mx-2">
          <IoMic />
        </button>
      </div>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition-[250ms]" />
        <BsCameraVideoFill className="hover:text-gray-400 transition-[250ms]" />
        <MdVideoLibrary className="hover:text-gray-400 transition-[250ms]" />
      </div>
    </header>
  );
};

export default Header;
