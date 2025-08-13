import React from "react";

const SB_SubmitButton = ({
  label = "Submit",
  onClick,
  disabled = false,
  className = "",
  size = "",
  color = "",
}) => {
  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-400",
    green: "bg-green-600 hover:bg-green-700 focus:ring-green-400",
    red: "bg-red-600 hover:bg-red-700 focus:ring-red-400",
  };

  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-lg font-semibold text-white
        focus:ring-2 transition-all duration-200 ease-in-out shadow-md
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]} 
        ${colorClasses[color] || color} 
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default SB_SubmitButton;
