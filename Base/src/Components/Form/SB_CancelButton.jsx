import React from "react";

const SB_CancelButton = ({
  label = "Cancel",
  onClick,
  disabled = false,
  className = "",
  size = "",
  color = "",
}) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const colorClasses = {
    gray: "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400",
    red: "bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-400",
    blue: "bg-blue-100 text-blue-700 hover:bg-blue-200 focus:ring-blue-400",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg font-semibold shadow-sm focus:ring-2 
                  transition-all duration-200 ease-in-out
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${sizeClasses[size]} 
                  ${colorClasses[color] || color} 
                  ${className}`}
    >
      {label}
    </button>
  );
};

export default SB_CancelButton;
