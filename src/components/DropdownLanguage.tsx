import { useTranslation } from "react-i18next";

export function DropdownLanguage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const handleChange = (event) => {
    const language = event.target.value;
    changeLanguage(language);
  };

  return (
    <div className="dropdown">
      <label className="dropdown-container">
        <select
          className="dropdown-container__option"
          aria-label="language"
          value={i18n.language}
          onChange={handleChange}
        >
          {Object.keys(i18n.options.resources || {}).map((language, i) => (
            <option value={language} key={i} role="language" aria-label={language}>
              {t("language", { lng: language })}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
