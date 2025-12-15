import { SearchIcon } from "lucide-react";
import { useState, useMemo } from "react";

// Dummy data for demonstration
const dummyProducts = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Keyboard" },
  { id: 3, name: "Mouse" },
  { id: 4, name: "Monitor" },
  { id: 5, name: "Webcam" },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const results = useMemo(() => {
    if (query.length === 0) return [];
    return dummyProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsDropdownVisible(true)}
          onBlur={() => setTimeout(() => setIsDropdownVisible(false), 100)}
          placeholder="Search for products..."
          className="border rounded-full w-full text-lg px-5 py-3 pr-12"
        />
        <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
      </div>
      {isDropdownVisible && results.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white border rounded-lg mt-2 shadow-lg z-10">
          {results.map((product) => (
            <li
              key={product.id}
              className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
              onMouseDown={() => {
                setQuery(product.name);
                setIsDropdownVisible(false);
              }}
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
