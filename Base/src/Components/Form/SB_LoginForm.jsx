import React, { useState } from "react";
import SB_MailInput from "./SB_MailInput";
import SB_PasswordInput from "./SB_PasswordInput";
import SB_SubmitButton from "./SB_SubmitButton";

const SB_LoginForm = ({
  onSubmit,
  buttonLabel = "Login",
  showRememberMe = false,
  showForgotPassword = false,
  className = "",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all required fields");
      return;
    }

    onSubmit({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 ${className}`}
    >
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

      {/* Email Input */}
      <SB_MailInput value={email} onChange={setEmail} required={true} />

      {/* Password Input */}
      <SB_PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
      />

      {/* Remember Me + Forgot Password */}
      {(showRememberMe || showForgotPassword) && (
        <div className="flex justify-between items-center text-sm">
          {showRememberMe && (
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
              <span>Remember Me</span>
            </label>
          )}
          {showForgotPassword && (
            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          )}
        </div>
      )}

      <div className="flex justify-center">
        <SB_SubmitButton
          label={buttonLabel}
          size="md"
          color="blue"
          className="w-full"
        />
      </div>
      <p className="text-sm text-center mt-4">
        Don’t have an account?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </form>
  );
};

export default SB_LoginForm;
