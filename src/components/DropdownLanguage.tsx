import { useTranslation } from "react-i18next";

export function DropdownLanguage() {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  
  const handleChange = (event: any) => {
    const language = event.target.value;
    changeLanguage(language);
  }

  return (
    <div className="dropdown">
      <label className="dropdown-container">
        <p className="text">Choose language</p>
        <select className="dropdown-container__option" value={i18n.language} onChange={handleChange}>
          {Object.keys(i18n.options.resources).map((language) => (
            <option value={language}>{t("language", { lng: language })}</option>
          ))}
        </select>
      </label>
    </div>
  )
}