import React, { useState } from "react";
import SB_input from "./SB_Input";
import SB_SubmitButton from "./SB_SubmitButton";

const SB_ForgetPassword = ({
  title = "Forgot Password",
  placeholder = "Enter your username or email",
  buttonLabel = "Reset Password",
  onSubmit,
  className = "",
}) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setError("Username or Email is required");
      return;
    }

    setError("");
    if (onSubmit) {
      onSubmit(username);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4 ${className}`}
    >
      {/* Title */}
      <h2 className="text-xl font-bold text-center mb-4">{title}</h2>

      {/* Username / Email Input */}
      <SB_input
        label="Username or Email"
        name="username"
        type="text"
        placeholder={placeholder}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        error={error}
      />

      <div className="flex justify-center">
        <SB_SubmitButton
          label={buttonLabel}
          size="md"
          color="blue"
          disabled={!username}
          className="w-full"
        />
      </div>
    </form>
  );
};

export default SB_ForgetPassword;
