import { useState } from "react"
import { useTranslation, withTranslation } from "react-i18next";

export function DropdownLanguage() {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  const options = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'de', label: 'German' },
  ];

  const handleChange = (event: any) => {
    const language = event.target.value;
    changeLanguage(language);
  }

  return (
    <div className="dropdown">
      <label className="dropdown-container">
        <p className="text">Choose language</p>
        <select className="dropdown-container__option" value={i18n.language} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  )
}