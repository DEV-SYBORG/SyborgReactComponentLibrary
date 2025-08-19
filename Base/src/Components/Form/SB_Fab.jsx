import React from "react";

const SB_Fab = ({
  icon,
  label = "",
  onClick,
  position = "bottom-right",
  size = "md",
  color = "bg-blue-600 hover:bg-blue-700",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-lg",
    lg: "w-14 h-14 text-xl",
  };

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  };

  return (
    <button
      onClick={onClick}
      className={`
        fixed flex items-center justify-center rounded-full shadow-lg text-white
        transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2
        ${sizeClasses[size]} ${color} ${positionClasses[position]} ${className}
      `}
    >
      {icon || "+"}
      {label && <span className="ml-2 hidden sm:inline">{label}</span>}
    </button>
  );
};

export default SB_Fab;
