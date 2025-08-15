import React, { useState } from "react";

const SB_MailInput = ({
  label = "Email",
  placeholder = "Enter your email",
  value,
  onChange,
  required = false,
  disabled = false,
  className = "",
  htmlFor,
  name = "email",
}) => {
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]{3,}\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleBlur = () => {
    if (!value && required) {
      setError("Email is required");
    } else if (value && !validateEmail(value)) {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };

  return (
    <div className={`flex flex-col space-y-1 w-full ${className}`}>
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
        type="email"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
        required={required}
        className={`w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default SB_MailInput;
