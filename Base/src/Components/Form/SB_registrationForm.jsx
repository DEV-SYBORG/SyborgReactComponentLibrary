import React, { useState } from "react";
import SB_MailInput from "./SB_MailInput";
import SB_PhoneInput from "./SB_PhoneInput";
import SB_DatePicker from "./SB_DatePicker";
import SB_PasswordInput from "./SB_PasswordInput";
import SB_SubmitButton from "./SB_SubmitButton";
import SB_input from "./SB_Input";

const SB_RegistrationForm = ({
  onSubmit,
  buttonLabel = "Register",
  redirectText = "Already have an account?",
  redirectLinkText = "Sign in",
  onRedirectClick,
  className = "",
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    countryCode: "+91",
    dob: "",
    password: "",
  });

  const [phoneError, setPhoneError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      setPhoneError("Phone number must contain only digits");
      return;
    }

    handleChange("mobile", value);

    if (value.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.mobile ||
      !formData.dob ||
      !formData.password
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (phoneError) {
      alert("Please fix phone number errors before submitting");
      return;
    }

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 ${className}`}
    >
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

      <div className="flex gap-4">
        <SB_input
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          required
          placeholder="Enter first name"
        />
        <SB_input
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          required
          placeholder="Enter last name"
        />
      </div>

      <SB_MailInput
        value={formData.email}
        onChange={(val) => handleChange("email", val)}
        required
      />

      <SB_PhoneInput
        label="Mobile Number"
        name="mobile"
        value={formData.mobile}
        onChange={handlePhoneChange}
        countryCode={formData.countryCode}
        onCountryCodeChange={(code) => handleChange("countryCode", code)}
        required
        error={phoneError}
      />

      <SB_DatePicker
        label="Date of Birth"
        value={formData.dob}
        onChange={(e) => handleChange("dob", e.target.value)}
        required
      />

      <SB_PasswordInput
        value={formData.password}
        onChange={(e) => handleChange("password", e.target.value)}
        required
      />

      <div className="flex justify-center">
        <SB_SubmitButton
          label={buttonLabel}
          size="md"
          color="blue"
          className="w-full"
        />
      </div>

      <p className="text-sm text-center mt-3">
        {redirectText}{" "}
        <span
          onClick={onRedirectClick}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          {redirectLinkText}
        </span>
      </p>
    </form>
  );
};

export default SB_RegistrationForm;
