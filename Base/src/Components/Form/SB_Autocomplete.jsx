import React, { useState, useRef, useEffect } from "react";

const SB_Autocomplete = ({
  label = "Search",
  placeholder = "Type to search...",
  options = [],
  value = "",
  onChange,
  onSelect,
  error = "",
  required = false,
  className = "",
  name,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (inputValue.trim() === "") {
      setFilteredOptions([]);
      setIsOpen(false);
      return;
    }

    const results = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(results);
    setIsOpen(true);
  }, [inputValue, options]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setInputValue(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="mb-1 font-semibold flex flex-start">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          if (onChange) onChange(e.target.value);
        }}
        className={`w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />

      {isOpen && filteredOptions.length > 0 && (
        <ul className="mt-1 max-h-40 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg">
          {filteredOptions.map((option, idx) => (
            <li
              key={idx}
              className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default SB_Autocomplete;
