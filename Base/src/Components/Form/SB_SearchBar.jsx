import React from "react";

const SB_SearchBar = ({
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
  className = "",
  disabled = false,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(value);
    }
  };

  return (
    <div
      className={`flex items-center border border-gray-300 rounded-md overflow-hidden  ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className="flex-1 px-3 py-2 outline-none text-gray-700 focus:ring-blue-400"
      />
      <button
        onClick={() => onSearch && onSearch(value)}
        disabled={disabled}
        className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 disabled:opacity-50"
      >
        Search
      </button>
    </div>
  );
};

export default SB_SearchBar;
