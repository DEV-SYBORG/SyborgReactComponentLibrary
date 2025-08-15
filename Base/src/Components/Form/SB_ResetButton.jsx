import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid"; // Tailwind Heroicons

const SB_ResetButton = ({
  label = "Reset",
  onClick,
  size = "md", // sm, md, lg
  color = "gray", // gray, red, blue, green
  icon = true,
  disabled = false,
  className = "",
}) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const colorClasses = {
    gray: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300",
    red: "bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-300",
    blue: "bg-blue-100 text-blue-700 hover:bg-blue-200 focus:ring-blue-300",
    green:
      "bg-green-100 text-green-700 hover:bg-green-200 focus:ring-green-300",
  };

  return (
    <button
      type="reset"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center gap-2
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        rounded-full font-medium shadow-sm border border-transparent
        focus:outline-none focus:ring-2 transition-all duration-200 ease-in-out
        hover:shadow-md active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {icon && <ArrowPathIcon className="w-4 h-4" />}
      {label}
    </button>
  );
};

export default SB_ResetButton;
