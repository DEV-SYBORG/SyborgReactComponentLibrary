import React, { useState } from "react";
import SB_PasswordInput from "./SB_PasswordInput";
import SB_SubmitButton from "./SB_SubmitButton";

const SB_ResetPassword = ({
  title = "Reset Password",
  buttonLabel = "Update Password",
  onSubmit,
  className = "",
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError("Both fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    if (onSubmit) {
      onSubmit(password);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4 ${className}`}
    >
      {/* Title */}
      <h2 className="text-xl font-bold text-center mb-4">{title}</h2>

      {/* New Password Input */}
      <SB_PasswordInput
        label="New Password"
        name="newPassword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        error={error && !password ? "Password is required" : ""}
      />

      {/* Confirm Password Input */}
      <SB_PasswordInput
        label="Confirm Password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        error={
          error && password !== confirmPassword ? "Passwords do not match" : ""
        }
      />

      {/* Submit Button */}
      <div className="flex justify-center">
        <SB_SubmitButton
          label={buttonLabel}
          size="md"
          color="blue"
          disabled={!password || !confirmPassword}
          className="w-full"
        />
      </div>
    </form>
  );
};

export default SB_ResetPassword;
