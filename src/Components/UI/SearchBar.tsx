import { ArrowLeftIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  return (
    <main>
      {!isSearchBarOpen && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsSearchBarOpen(true);
          }}
          className={`${
            isSearchBarOpen ? "hidden" : "flex"
          } rounded-full hover:bg-gray-100 items-center gap-14`}
        >
          <SearchIcon className="w-6 h-6 text-gray-700" />
          <h1 className="font-bold text-md hidden lg:block">Search</h1>
        </button>
      )}

      {isSearchBarOpen && (
        <section className="fixed inset-0 bg-white z-50 flex flex-col p-3">
          <nav className="flex justify-between">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsSearchBarOpen(false);
              }}
            >
              <ArrowLeftIcon className="text-2xl" />
            </button>

            <input
              type="search"
              name=""
              id=""
              placeholder="Search..."
              className="border rounded-full w-full text-sm px-3 py-2 m-2 "
            />
          </nav>
          <ul className="p-2 gap-3 flex flex-col ">
            <li> First Result </li>
            <li> Second Result </li>
          </ul>
        </section>
      )}
    </main>
  );
}
