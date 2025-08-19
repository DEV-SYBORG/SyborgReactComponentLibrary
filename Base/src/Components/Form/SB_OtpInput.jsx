import React, { useState, useRef } from "react";
import SB_SubmitButton from "./SB_SubmitButton";

const SB_OtpInput = ({
  title = "Enter your One-Time Password",
  length = 6,
  buttonLabel = "Verify OTP",
  onSubmit,

  className = "",
}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // allow only digits
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < length - 1 && value) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (onSubmit) {
      onSubmit(otpValue);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4 ${className}`}
    >
      {/* Title */}
      <p className="text-lg font-bold text-center mb-4">{title}</p>

      {/* OTP Inputs */}
      <div className="flex justify-center space-x-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputsRef.current[index] = el)}
            className="w-12 h-12 text-center border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
          />
        ))}
      </div>

      <div className="flex justify-center">
        <SB_SubmitButton
          label={buttonLabel}
          size="md"
          color="blue"
          disabled={otp.includes("")}
          className="w-1/2"
        />
      </div>
    </form>
  );
};

export default SB_OtpInput;
