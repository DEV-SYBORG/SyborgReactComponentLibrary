import React from "react";

const SB_Dropdown = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  error = "",
  disabled = false,
  className = "",
  htmlFor,
  placeholder = "Select an option",
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={htmlFor || name}
          className="mb-1 font-semibold flex flex-start"
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      <select
        id={htmlFor || name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default SB_Dropdown;
