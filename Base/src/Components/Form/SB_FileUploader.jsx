import React, { useState } from "react";

const SB_FileUploader = ({
  label = "Upload File",
  accept = "*",
  maxSize = 5 * 1024 * 1024, // 5 MB default max size
  required = false,
  error = "",

  className = "",
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [localError, setLocalError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > maxSize) {
      setLocalError(
        `File size should not exceed ${maxSize / (1024 * 1024)} MB`
      );
      setSelectedFile(null);
      return;
    }

    setLocalError("");
    setSelectedFile(file);

    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 font-medium">{label}</label>}
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden shadow-sm">
        <input
          type="file"
          accept={accept}
          onChange={handleFileChange}
          required={required}
          className="flex-1 px-2 py-1 text-md text-left file:mr-4 file:py-2 file:px-4 
                     file:rounded-l-md file:border-0
                     file:text-sm file:font-medium
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
        />
      </div>
      {(localError || error) && (
        <span className="text-red-500 text-sm mt-1">{localError || error}</span>
      )}
      {selectedFile && !localError && (
        <span className="text-lg text-green-600  mt-2">
          Selected File: {selectedFile.name}
        </span>
      )}
    </div>
  );
};

export default SB_FileUploader;
