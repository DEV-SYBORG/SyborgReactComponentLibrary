import React from "react";

const SB_TimePicker = ({
  value,
  onChange,
  disabled = false,
  placeholder = "Select Time",
  className = "",
  label = "Select Time",
  error = "",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 font-medium">{label}</label>}
      <input
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
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
