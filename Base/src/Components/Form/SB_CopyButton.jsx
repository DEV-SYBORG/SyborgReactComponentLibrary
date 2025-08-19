import React, { useState } from "react";
import SB_IconButton from "./SB_IconButton";
import { MdContentCopy } from "react-icons/md";
import { MdCheck } from "react-icons/md";

const SB_CopyButton = ({
  textToCopy,
  tooltip = "Copy",
  copiedTooltip = "Copied!",
  iconSize = 20,
  iconColor = "black",
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <SB_IconButton
      icon={copied ? MdCheck : MdContentCopy}
      onClick={handleCopy}
      tooltip={copied ? copiedTooltip : tooltip}
      size={iconSize}
      color={iconColor}
      className={className}
    />
  );
};

export default SB_CopyButton;
