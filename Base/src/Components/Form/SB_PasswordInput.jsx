import React, { useState } from "react";

const SB_PasswordInput = ({
  label = "Password",
  value,
  onChange,
  placeholder = "Enter your password",
  name = "password",
  error = "",
  required = false,
  minLength = 6,
  disabled = false,
  className = "",
  htmlFor,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col space-y-1 w-full">
      {label && (
        <label
          htmlFor={htmlFor || name}
          className="mb-1 font-semibold flex flex-start"
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          id={htmlFor || name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          minLength={minLength}
          required={required}
          disabled={disabled}
          className={`w-full px-3 py-2 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default SB_PasswordInput;
