import React from "react";

const SB_TimePicker = ({
  value,
  onChange,
  disabled = false,
  required = false,
  placeholder = "Select Time",
  className = "",
  label = "Select Time",
  error = "",
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
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default SB_TimePicker;
