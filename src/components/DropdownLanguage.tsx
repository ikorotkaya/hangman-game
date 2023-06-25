import { useState } from "react"

export function DropdownLanguage() {
  const options = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'german', label: 'German' },
  ];

  const [language, setLanguage] = useState('');

  const handleChange = (event: any) => {
    setLanguage(event.target.value);
  }

  return (
    <div className="dropdown">
      <label className="dropdown-container">
        <p className="text">Choose language</p>
        <select className="option" value={language} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  )
}