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
import SB_DateTimeInput from "../Components/Form/SB_DateTimePicker";
import SB_SearchBar from "../Components/Form/SB_SearchBar";
import SB_FileUploader from "../Components/Form/SB_FileUploader";
import { FaSearch, FaTrash, FaEdit } from "react-icons/fa";
import SB_IconButton from "../Components/Form/SB_IconButton";
import SB_SubmitButton from "../Components/Form/SB_SubmitButton";
import SB_CancelButton from "../Components/Form/SB_CancelButton";
import SB_DateTimePicker from "../Components/Form/SB_DateTimePicker";
import SB_CopyButton from "../Components/Form/SB_CopyButton";
import imports from "../Constants/ImportStatements";
import usages from "../Constants/Usages";
import SB_ResetButton from "../Components/Form/SB_ResetButton";

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
  const [dateTime, setDateTime] = useState("");
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
        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.input}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.input}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.input}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.input}</code>
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
        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.dropdown}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.dropdown}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.dropdown}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.dropdown}</code>
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
        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.multiSelectDropdown}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.multiSelectDropdown}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.multiSelectDropdown}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.multiSelectDropdown}</code>
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

        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.checkbox}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.checkbox}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.checkbox}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.checkbox}</code>
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
        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.radioButton}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.radioButton}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.radioButton}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.radioButton}</code>
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

        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.textArea}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.textArea}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.textArea}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.textArea}</code>
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
        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.phoneInput}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.phoneInput}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.phoneInput}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.phoneInput}</code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">Mail Input</h1>
      <br />

      <div className="w-full mt-2">
        <SB_MailInput value={email} onChange={setEmail} required />
        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.mailInput}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.mailInput}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.mailInput}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.mailInput}</code>
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
        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.passwordInput}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.passwordInput}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.passwordInput}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.passwordInput}</code>
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

        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.datePicker}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.datePicker}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.datePicker}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.datePicker}</code>
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
        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.timePicker}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.timePicker}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.timePicker}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.timePicker}</code>
        </pre>
        <br />
      </div>
      <hr />
      <br />

      <h1 className="text-3xl font-bold mb-2 text-center">
        Date and Time Picker
      </h1>
      <br />
      <div className="flex justify-center items-center">
        <div className="w-1/2 mt-2 ">
          <SB_DateTimePicker
            label="Select Date & Time"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            //   min="2026-01-01T09:00"
            //   max="2025-12-31T18:00"
            required
            error={error}
          />

          <div className="flex flex-row justify-between">
            <h1 className="mt-2 font-bold"> Import Statement -</h1>
            <SB_CopyButton
              textToCopy={imports.dateTimePicker}
              label="Copy"
              copiedLabel="Copied!"
            />
          </div>

          <h2 className="text-blue-600"> {imports.dateTimePicker}</h2>
          <div className="flex flex-row justify-between">
            <h2 className=" font-bold"> Usage -</h2>
            <SB_CopyButton
              textToCopy={usages.dateTimePicker}
              label="Copy"
              copiedLabel="Copied!"
            />
          </div>

          <pre>
            <code className="text-blue-600">{usages.dateTimePicker}</code>
          </pre>
          <br />
        </div>
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
        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.searchBar}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.searchBar}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.searchBar}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.searchBar}</code>
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
        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.fileUploader}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.fileUploader}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.fileUploader}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.fileUploader}</code>
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
        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.iconButton}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.iconButton}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.iconButton}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.iconButton}</code>
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
        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.submitButton}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.submitButton}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.submitButton}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.submitButton}</code>
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
        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.cancelButton}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.cancelButton}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.cancelButton}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.cancelButton}</code>
        </pre>
      </div>
      <h1 className="text-3xl font-bold mb-2 text-center">Reset Button</h1>
      <br />
      <div className="w-full mt-2">
        <SB_ResetButton
          label="Reset"
          size="md"
          color="blue"
          onClick={() => console.log("Reset")}
        />

        <div className="flex flex-row justify-between">
          <h1 className="mt-2 font-bold"> Import Statement -</h1>
          <SB_CopyButton
            textToCopy={imports.resetButton}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <h2 className="text-blue-600"> {imports.resetButton}</h2>
        <div className="flex flex-row justify-between">
          <h2 className=" font-bold"> Usage -</h2>
          <SB_CopyButton
            textToCopy={usages.resetButton}
            label="Copy"
            copiedLabel="Copied!"
          />
        </div>

        <pre>
          <code className="text-blue-600">{usages.resetButton}</code>
        </pre>
      </div>
    </div>
  );
};

export default FormComponents;
