import React from "react";

const SB_TextArea = ({
  label = "",
  placeholder = "",
  value,
  onChange,
  rows = 4,
  maxLength,
  error = "",
  disabled = false,
  name = "",
  className = "",
  htmlFor,
  required,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={htmlFor || name}
          className="mb-1 font-semibold flex flex-start"
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        maxLength={maxLength}
        disabled={disabled}
        className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SB_TextArea;
