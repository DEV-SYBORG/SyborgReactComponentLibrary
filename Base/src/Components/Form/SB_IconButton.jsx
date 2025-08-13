import React from "react";

const SB_IconButton = ({
  icon: Icon,
  onClick,
  tooltip = "",
  size = "24",
  color = "black",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition-colors ${className}`}
      title={tooltip}
    >
      {Icon && <Icon size={size} color={color} />}
    </button>
  );
};

export default SB_IconButton;
