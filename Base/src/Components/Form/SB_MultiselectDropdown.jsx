import React, { useState, useRef, useEffect } from "react";

const SB_MultiSelectDropdown = ({
  label,
  options = [],
  selected = [],
  onChange,
  required = false,
  error = "",
  className = "",
  placeholder = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (value) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="w-full" ref={dropdownRef}>
      {label && (
        <label className="mb-1 font-semibold flex flex-start">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <select
        onClick={() => setIsOpen(!isOpen)}
        // className="mt-1 px-3 py-2 border rounded-md cursor-pointer bg-white shadow-sm text-sm
        className={`w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      >
        {selected.length > 0
          ? options
              .filter((opt) => selected.includes(opt.value))

              .map((opt) => opt.label)
              .join(", ")
          : "Select options"}
        <option value="">{placeholder}</option>
      </select>

      {isOpen && (
        <div className="mt-1 absolute bg-white border shadow-md rounded-md z-10 w-full max-h-60 overflow-y-auto">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={selected.includes(option.value)}
                onChange={() => toggleOption(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default SB_MultiSelectDropdown;
