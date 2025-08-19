import React from "react";
import { FaGoogle, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const providerStyles = {
  google: "bg-white border text-gray-700 hover:bg-gray-100",
  github: "bg-gray-800 text-white hover:bg-gray-900",
  facebook: "bg-blue-600 text-white hover:bg-blue-700",
  linkedin: "bg-blue-700 text-white hover:bg-blue-800",
};

const providerIcons = {
  google: <FaGoogle className="mr-2 text-red-500" />,
  github: <FaGithub className="mr-2" />,
  facebook: <FaFacebook className="mr-2" />,
  linkedin: <FaLinkedin className="mr-2" />,
};

const SB_SocialLoginButton = ({
  provider = "google",
  label,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center w-full px-4 py-2 rounded-lg font-medium
        transition-colors duration-200 shadow-md
        ${providerStyles[provider] || "bg-gray-200"}
        ${className}
      `}
    >
      {providerIcons[provider]}
      {label ||
        `Continue with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
    </button>
  );
};

export default SB_SocialLoginButton;
