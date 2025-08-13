import React from "react";
import SB_input from "../Components/Form/SB_Input";
import { useState } from "react";
import SB_Dropdown from "../Components/Form/SB_Dropdown";
import SB_MultiSelectDropdown from "../Components/Form/SB_MultiselectDropdown";
import SB_Checkbox from "../Components/Form/SB_Checkbox";
import SB_RadioButton from "../Components/Form/SB_RadioButton";
import SB_TextArea from "../Components/Form/SB_Teaxtarea";
import SB_PhoneInput from "../Components/Form/SB_PhoneInput";
import SB_MailInput from "../Components/Form/SB_MailInput";
import SB_PasswordInput from "../Components/Form/SB_PasswordInput";
import SB_DatePicker from "../Components/Form/SB_DatePicker";
import SB_TimePicker from "../Components/Form/SB_TimePicker";
import SB_DateTimeInput from "../Components/Form/SB_DateTimeInput";
import SB_SearchBar from "../Components/Form/SB_SearchBar";
import SB_FileUploader from "../Components/Form/SB_FileUploader";
import { FaSearch, FaTrash, FaEdit } from "react-icons/fa";
import SB_IconButton from "../Components/Form/SB_IconButton";
import SB_SubmitButton from "../Components/Form/SB_SubmitButton";
import SB_CancelButton from "../Components/Form/SB_CancelButton";
import SB_DateTimePicker from "../Components/Form/SB_DateTimeInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormComponents = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [country, setCountry] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [date1, setDate1] = useState("");
  const [time1, setTime1] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [query, setQuery] = useState("");

  const options = [
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
    { label: "Canada", value: "canada" },
  ];

  const languageOptions = [
    { label: "JavaScript", value: "js" },
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "C++", value: "cpp" },
  ];

  const skillOptions = [
    { label: "JavaScript", value: "js" },
    { label: "React", value: "react" },
    { label: "Java", value: "java" },
  ];
  const handleChange = (e) => {
    setUsername(e.target.value);

    if (e.target.value.trim() === "") {
      setError("Username is required");
    } else {
      setError("");
    }
  };

  const handleSkillChange = (value, isChecked) => {
    setSelectedSkills((prev) =>
      isChecked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  const handleMultiSelectChange = (selectedValues) => {
    setSelectedLanguages(selectedValues);

    if (selectedValues.length === 0) {
      setError("Please select at least one language");
    } else {
      setError("");
    }
  };

  const handleRadioButtonChange = (e) => {
    setGender(e.target.value);
    setError("");
  };

  const handleTextArea = (e) => {
    const value = e.target.value;
    setMessage(value);
    setError(value.trim() === "" ? "Message is required" : "");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
    }
  };
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };
  const handleFile = (file) => {
    console.log("File selected:", file);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-center">Input</h1>
      <br />

      <div className="w-full mt-2 ">
        <SB_input
          label="Username"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Enter your username"
          required
          error={error}
        />
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_Input from "../Components/Form/SB_Input";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`<SB_Input
  label="Username"
  name="username"
  value={username}
  onChange={handleChange}
  placeholder="Enter username"
  required
  error={error}
/>
`}
          </code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">Dropdown</h1>
      <br />

      <div className="w-full mt-2 ">
        <SB_Dropdown
          label="Country"
          name="country"
          value={country}
          onChange={handleChange}
          options={options}
          required
          error={error}
          placeholder="Select a country"
        />
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_Dropdown from "../Components/Form/SB_Dropdown";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`<SB_Dropdown
          label="Country"
          name="country"
          value={country}
          onChange={handleChange}
          options={[
            { label: "India", value: "india" },
            { label: "USA", value: "usa" },
            { label: "Canada", value: "canada" },
            ];}
          required
          error={error}
          placeholder="Select a country"
        />`}
          </code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">
        Multiselect Dropdown
      </h1>
      <br />

      <div className="w-full mt-2">
        <SB_MultiSelectDropdown
          label="Programming Languages"
          selected={selectedLanguages}
          onChange={handleMultiSelectChange}
          options={languageOptions}
          required
          placeholder="Select Languages"
        />
        {selectedLanguages.length > 0 && (
          <div className="mt-2 text-lg text-green-600 font-bold">
            Selected -{" "}
            {languageOptions
              .filter((opt) => selectedLanguages.includes(opt.value))
              .map((opt) => opt.label)
              .join(", ")}
          </div>
        )}
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_MultiSelectDropdown from
            "../Components/Form/SB_MultiSelectDropdown";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`<SB_MultiSelectDropdown
  label="Programming Languages"
  selected={selectedLanguages}
  onChange={handleMultiSelectChange}
  options={[
    { label: "JavaScript", value: "js" },
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "C++", value: "cpp" },
  ]}
  required
  placeholder="Select Languages"
/>`}
          </code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">Checkbox</h1>
      <br />

      <div className="w-full mt-2">
        <h2 className="font-medium mb-2">Select your skills:</h2>
        {skillOptions.map((skill, index) => (
          <SB_Checkbox
            key={index}
            label={skill.label}
            name="skills"
            value={skill.value}
            checked={selectedSkills.includes(skill.value)}
            onChange={handleSkillChange}
          />
        ))}

        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_Checkbox from "../Components/Form/SB_Checkbox";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>

        <pre>
          <code className="text-blue-600">
            {`{skillOptions.map((skill) => (
  <SB_Checkbox
    key={skill.value}
    label={skill.label}
    name="skills"
    value={skill.value}
    checked={selectedSkills.includes(skill.value)}
    onChange={(e) => handleSkillChange(skill.value, e.target.checked)}
  />
))}`}
          </code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">Radio Button</h1>
      <br />

      <div className="w-full mt-2">
        <h2 className="font-medium mb-2">Select Gender:</h2>

        <SB_RadioButton
          label="Male"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={handleRadioButtonChange}
          required
        />

        <SB_RadioButton
          label="Female"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={handleRadioButtonChange}
          required
        />

        <SB_RadioButton
          label="Other"
          name="gender"
          value="other"
          checked={gender === "other"}
          onChange={handleRadioButtonChange}
          required
        />
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_RadioButton from "../Components/Form/SB_RadioButton";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`<SB_RadioButton
  label="Male"
  name="gender"
  value="male"
  checked={gender === "male"}
  onChange={handleRadioButtonChange}
  required
/>`}
          </code>
        </pre>
        <br />
      </div>

      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">TextArea</h1>
      <br />

      <div className="w-full mt-2">
        <SB_TextArea
          label="Description"
          placeholder="Type your description here..."
          value={message}
          onChange={handleTextArea}
          rows={2}
          maxLength={200}
          error={error}
          name="message"
          required
        />

        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_TextArea from "../Components/Form/SB_TextArea";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>

        <pre>
          <code className="text-blue-600">
            {`<SB_Textarea
  label="Description"
  name="description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  placeholder="Enter your description"
  required
  error={error}
/>`}
          </code>
        </pre>
        <br />
      </div>

      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">Phone Input</h1>
      <br />
      <div className="w-full mt-2">
        <SB_PhoneInput
          label="Phone Number"
          name="phone"
          value={phone}
          countryCode={countryCode}
          onCountryCodeChange={setCountryCode}
          onChange={(e) => {
            const value = e.target.value;

            if (!/^\d*$/.test(value)) {
              setPhoneError("Phone number must contain only digits");
              return;
            }

            setPhone(value);

            if (value.length !== 10) {
              setPhoneError("Phone number must be exactly 10 digits");
            } else {
              setPhoneError("");
            }
          }}
          required
          error={phoneError}
        />
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_PhoneInput from "../Components/Form/SB_PhoneInput";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`<SB_PhoneInput
  label="Phone Number"
  name="phone"
  value={phone}
  countryCode={countryCode}
  onCountryCodeChange={setCountryCode}
  onChange={(e) => setPhone(e.target.value)}
  required
  error={phoneError}
/>`}
          </code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">Mail Input</h1>
      <br />

      <div className="w-full mt-2">
        <SB_MailInput value={email} onChange={setEmail} required />
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_MailInput from "../Components/Form/SB_MailInput";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`<SB_MailInput
  label="Email Address"
  name="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  error={emailError}
/>`}
          </code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">Password Input</h1>
      <br />
      <div className="w-full mt-2">
        <SB_PasswordInput
          value={password}
          onChange={handlePasswordChange}
          error={error}
          required
          minLength={6}
        />
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_PasswordInput from "../Components/Form/SB_PasswordInput";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`<SB_PasswordInput
  label="Password"
  name="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  error={passwordError}
/>`}
          </code>
        </pre>
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">Date Picker</h1>
      <br />
      <div className="w-full mt-2">
        <SB_DatePicker
          label="Date of Birth"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min="2000-01-01"
          max="2025-12-31"
          required
          //   error={!date && "Date is required"}
        />
        <p className="mt-2">Selected Date: {date}</p>

        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_DatePicker from "../Components/Form/SB_DatePicker";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`<SB_DatePicker
  label="Date of Birth"
  name="dob"
  value={dob}
  onChange={(e) => setDob(e.target.value)}
  min="1900-01-01"
  max="2025-12-31"
  required
  error={dobError}
/>`}
          </code>
        </pre>
        <br />
      </div>

      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">Time Picker</h1>
      <br />

      <div className="w-full mt-2">
        <SB_TimePicker
          label="Select Time"
          value={time}
          onChange={setTime}
          required
        />
        <p>Selected Time: {time}</p>
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_TimePicker from "../Components/Form/SB_TimePicker";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`<SB_TimePicker
  label="Select Time"
  name="time"
  value={time}
  onChange={setTime}
  required
  error={timeError}
/>`}
          </code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">
        Date and Time Picker
      </h1>
      <br />
      <div className="w-1/2 mt-2">
        <SB_DateTimePicker
          label="Select Date & Time"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          //   min="2026-01-01T09:00"
          //   max="2025-12-31T18:00"
          required
          error={error}
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          dateFormat="dd/MM/yyyy hh:mm aa"
          placeholderText="Select Date and Time"
          className="border px-3 py-2 rounded mt-2 "
        />
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_DateTimeInput from "../Components/Form/SB_DateTimeInput";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`   <SB_DateTimePicker
    label="Select Date & Time"
    value={dateTime}
    onChange={(e) => setDateTime(e.target.value)}
    min="2025-01-01T09:00"
    max="2025-12-31T18:00"
    required
    error={error}
/>`}
          </code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">Search Bar </h1>
      <br />
      <div className="w-full mt-2">
        <SB_SearchBar
          placeholder="Search users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onSearch={handleSearch}
        />
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_SearchBar from "../Components/Form/SB_SearchBar";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`  <SB_SearchBar
    placeholder="Search users..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onSearch={handleSearch}
/>`}
          </code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">File Uploader</h1>
      <br />
      <div className="w-full mt-2">
        <SB_FileUploader
          label="Upload File"
          accept=".pdf,.docx"
          maxSize={2 * 1024 * 1024}
          onFileSelect={handleFile}
        />
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_FileUploader from "../Components/Form/SB_FileUploader";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`  <SB_FileUploader
    label="Upload File"
    accept=".pdf,.docx"
    maxSize={2 * 1024 * 1024}
    onFileSelect={handleFile}
/>`}
          </code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">Icon Buttons</h1>
      <br />
      <div className="w-full mt-2">
        <SB_IconButton
          icon={FaSearch}
          onClick={() => alert("Search clicked")}
          tooltip="Search"
          size={20}
          color="blue"
        />
        <SB_IconButton
          icon={FaEdit}
          onClick={() => alert("Edit clicked")}
          tooltip="Edit"
          size={20}
          color="green"
        />
        <SB_IconButton
          icon={FaTrash}
          onClick={() => alert("Delete clicked")}
          tooltip="Delete"
          size={20}
          color="red"
        />
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_IconButton from "../Components/Form/SB_IconButton";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`   <SB_IconButton
    icon={FaSearch}
    onClick={() => alert("Search clicked")}
    tooltip="Search"
    size={20}
    color="blue"
/>`}
          </code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">Submit Button</h1>
      <br />
      <div className="w-full mt-2">
        <SB_SubmitButton
          label="Submit"
          size="md"
          color="bg-purple-600 hover:bg-purple-700 focus:ring-purple-400"
          onClick={() => console.log("Submitted")}
        />
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_SubmitButton from "../Components/Form/SB_SubmitButton";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>
        <pre>
          <code className="text-blue-600">
            {`  <SB_SubmitButton
    label="Submit"
    onClick={() => console.log("Submitted")}
    size="md"
    color="bg-purple-600 hover:bg-purple-700 focus:ring-purple-400"
/>`}
          </code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">Cancel Button</h1>
      <br />
      <div className="w-full mt-2">
        <SB_CancelButton
          label="Cancel"
          size="md"
          color="red"
          onClick={() => console.log("Cancelled")}
          //   className="bg-red-100 text-red-700 hover:bg-red-200"
        />
        <h1 className="mt-2 font-bold"> Import Statement -</h1>
        <pre>
          <code className="text-blue-600">
            import SB_CancelButton from "../Components/Form/SB_CancelButton";
          </code>
        </pre>
        <h2 className=" font-bold"> Usage -</h2>

        <pre>
          <code className="text-blue-600">
            {`    <SB_CancelButton
    label="Cancel"
    size="md"
    color="red"
    onClick={() => console.log("Cancelled")}
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default FormComponents;
