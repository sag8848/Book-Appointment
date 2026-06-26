import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative max-w-4xl mx-auto mt-10">

      <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl"/>

      <input
        type="text"
        placeholder="Search by doctor name or specialty..."
        className="w-full border-2 border-cyan-500 rounded-2xl py-5 pl-14 outline-none"
      />

    </div>
  );
};

export default SearchBar;