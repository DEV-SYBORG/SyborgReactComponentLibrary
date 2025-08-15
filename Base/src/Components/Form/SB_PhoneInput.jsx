import React from "react";

const SB_PhoneInput = ({
  label,
  name,
  value,
  onChange,
  required = false,
  disabled = false,
  error,
  countryCode,
  onCountryCodeChange,
  countryOptions = [
    { label: "+91 (India)", value: "+91" },
    { label: "+1 (USA)", value: "+1" },
    { label: "+44 (UK)", value: "+44" },
  ],
  placeholder = "Enter phone number",
  className = "",
}) => {
  return (
    <div className={`flex flex-col space-y-1 w-full ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="mb-1 font-semibold flex flex-start text-gray-700"
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      <div className="flex gap-1">
        {/* Country Code Dropdown */}

        <select
          value={countryCode}
          onChange={(e) => onCountryCodeChange(e.target.value)}
          className={`px-2 py-2 border-t border-b border-l border-r ${
            error ? "border-red-500" : "border-gray-300"
          } bg-white rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700`}
        >
          {countryOptions.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Phone Number Input */}
        <input
          id={name}
          name={name}
          type="tel"
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border-t border-b border-r ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
        />
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default SB_PhoneInput;
