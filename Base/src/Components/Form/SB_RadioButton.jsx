import React from "react";

const SB_RadioButton = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  required = false,
  error = "",
  disabled = false,
  className = "",
  htmlFor,
}) => {
  return (
    <div className="mb-2 flex items-center">
      <input
        id={htmlFor || `${name}-${value}`}
        name={name}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 ${className}`}
      />
      {label && (
        <label
          htmlFor={htmlFor || `${name}-${value}`}
          className="ml-2 text-sm text-gray-700"
        >
          {label}
        </label>
      )}
      {error && <p className="text-sm text-red-500 ml-2">{error}</p>}
    </div>
  );
};

export default SB_RadioButton;
