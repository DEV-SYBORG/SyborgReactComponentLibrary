// import React from "react";

// const SB_DateTimeInput = ({
//   label = "Select Date & Time",
//   dateValue,
//   timeValue,
//   onDateChange,
//   onTimeChange,
//   minDate,
//   maxDate,
//   required = false,
//   error = "",
//   disabled = false,
//   className = "",
// }) => {
//   return (
//     <div className={`flex flex-col ${className}`}>
//       {label && <label className="mb-1 font-medium">{label}</label>}
//       <div className="flex gap-2">
//         {/* Date Picker */}
//         <input
//           type="date"
//           value={dateValue}
//           onChange={onDateChange}
//           min={minDate}
//           max={maxDate}
//           required={required}
//           disabled={disabled}
//           className={`w-1/2 px-3 py-2 border ${
//             error ? "border-red-500" : "border-gray-300"
//           } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
//         />

//         {/* Time Picker */}
//         <input
//           type="time"
//           value={timeValue}
//           onChange={onTimeChange}
//           required={required}
//           disabled={disabled}
//           className={`w-1/2 px-3 py-2 border ${
//             error ? "border-red-500" : "border-gray-300"
//           } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
//         />
//       </div>

//       {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
//     </div>
//   );
// };

// export default SB_DateTimeInput;

import React from "react";

const SB_DateTimePicker = ({
  label = "Select Date & Time",
  value,
  onChange,
  min,
  max,
  required = false,
  error = "",
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label className="mb-1 font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}

      <input
        type="datetime-local"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        required={required}
        disabled={disabled}
        className={`px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />

      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default SB_DateTimePicker;
