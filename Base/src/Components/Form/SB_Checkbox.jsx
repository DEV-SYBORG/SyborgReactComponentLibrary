import React from "react";

const SB_Checkbox = ({
  label,
  name,
  checked = false,
  onChange,
  required = false,
  error = "",
  disabled = false,
  className = "",
  htmlFor,
  value,
}) => {
  return (
    <div className="mb-2 flex items-center">
      <input
        id={htmlFor || name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(value, e.target.checked)}
        required={required}
        disabled={disabled}
        className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${className}`}
      />
      {label && (
        <label
          htmlFor={htmlFor || name}
          className="mb-1 font-semibold flex flex-start ml-2"
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      {error && <p className="text-sm text-red-500 ml-2">{error}</p>}
    </div>
  );
};

export default SB_Checkbox;
