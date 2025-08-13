import React from "react";

const SB_input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  error = "",
  disabled = false,
  name,
  className = "",
  htmlFor,
}) => {
  return (
    <div className="flex flex-col space-y-1 w-full ">
      {label && (
        <label
          htmlFor={htmlFor || name}
          className="mb-1 font-semibold flex flex-start"
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <input
        id={htmlFor || name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default SB_input;
