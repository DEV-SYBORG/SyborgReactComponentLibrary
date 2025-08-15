import React from "react";

const SB_DatePicker = ({
  label = "Select Date",
  value,
  onChange,
  min,
  max,
  required = false,
  error = "",
  disabled = false,
  className = "",
  htmlFor,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={htmlFor || name}
        className="mb-1 font-semibold flex flex-start"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        type="date"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        required={required}
        disabled={disabled}
        className={`w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default SB_DatePicker;
