const usages = {
  input: `<SB_Input
  label="Username"
  type="text"
  name="username"
  value={username}
  onChange={handleChange}
  placeholder="Enter username"
  required
  disabled
  error={error}
  className=""
/>
`,
  dropdown: `<SB_Dropdown
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
  disabled
  className=""
/>`,
  multiSelectDropdown: `<SB_MultiSelectDropdown
  label="Programming Languages"
  selected={selectedLanguages}
  onChange={handleMultiSelectChange}
  options={[
    { label: "JavaScript", value: "js" },
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "C++", value: "cpp" },
  ]}
  error={error}
  required
  placeholder="Select Languages"
  className=""
/>`,
  checkbox: `{skillOptions.map((skill) => (
  <SB_Checkbox
    key={skill.value}
    label={skill.label}
    name="skills"
    value={skill.value}
    checked={selectedSkills.includes(skill.value)}
    onChange={(e) => handleSkillChange(skill.value, e.target.checked)}
    error={error}
    required
    disabled
    className=""
  />
))}`,
  radioButton: `<SB_RadioButton
  label="Male"
  name="gender"
  value="male"
  checked={gender === "male"}
  onChange={handleRadioButtonChange}
  error={error}
  required
  disabled
  className=""
/>`,
  textArea: `<SB_Textarea
  label="Description"
  name="description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  placeholder="Enter your description"
  rows= ,  
  maxLength= ,
  required
  disabled
  error={error}
  className=""
/>`,
  phoneInput: `<SB_PhoneInput
  label="Phone Number"
  name="phone"
  value={phone}
  countryCode={countryCode}
  onCountryCodeChange={setCountryCode}
  onChange={(e) => setPhone(e.target.value)}
  required
  disabled
  error={phoneError}
  className=""
/>`,
  mailInput: `<SB_MailInput
  label="Email Address"
  name="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  disabled
  error={emailError}
  className=""
/>`,
  passwordInput: `<SB_PasswordInput
  label="Password"
  name="password"
  value={password}
  minLength={minLength}
  onChange={(e) => setPassword(e.target.value)}
  required
  disabled
  error={passwordError}
  className=""
/>`,
  datePicker: `<SB_DatePicker
  label="Date of Birth"
  name="dob"
  value={dob}
  onChange={(e) => setDob(e.target.value)}
  min="1900-01-01"
  max="2025-12-31"
  required
  disabled
  error={dobError}
  className=""
/>`,
  timePicker: `<SB_TimePicker
  label="Select Time"
  name="time"
  value={time}
  onChange={setTime}
  required
  disabled
  error={timeError}
  classname=""
/>`,
  dateTimePicker: `<SB_DateTimePicker
    label="Select Date & Time"
    value={dateTime}
    onChange={(e) => setDateTime(e.target.value)}
    min="2025-01-01T09:00"
    max="2025-12-31T18:00"
    required
    disabled
    error={error}
    classname=""
/>`,
  searchBar: `<SB_SearchBar
    placeholder="Search users..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onSearch={handleSearch}
    className=""
/>`,
  fileUploader: `<SB_FileUploader
    label="Upload File"
    accept=".pdf,.docx"
    maxSize={2 * 1024 * 1024}
    onFileSelect={handleFile}
    className=""
/>`,
  iconButton: `<SB_IconButton
    icon={FaSearch}
    onClick={() => alert("Search clicked")}
    tooltip="Search"
    size={20}
    color="blue"
    disabled
    classname=""
/>`,
  submitButton: `<SB_SubmitButton
    label="Submit"
    onClick={() => console.log("Submitted")}
    size="md"
    color="bg-purple-600 hover:bg-purple-700 focus:ring-purple-400"
    disabled
    className=""
/>`,

  cancelButton: `<SB_CancelButton
    label="Cancel"
    size="md"
    color="red"
    onClick={() => console.log("Cancelled")}
    disabled
    className=""
/>`,
  resetButton: `<SB_ResetButton
    label="Reset"
    size="md"
    color="blue"
    onClick={() => console.log("Reset")}
    disabled
    className=""
/>`,
};

export default usages;
