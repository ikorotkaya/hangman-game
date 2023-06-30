import { useTranslation } from "react-i18next";

export function DropdownLanguage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  const handleChange = (event: any) => {
    const language = event.target.value;
    changeLanguage(language);
  };

  return (
    <div className="dropdown">
      <label className="dropdown-container">
        {/* <p className="dropdown-container__text">{t("chooseLanguage")}</p> */}
        <select
          className="dropdown-container__option"
          value={i18n.language}
          onChange={handleChange}
        >
          {Object.keys(i18n.options.resources).map((language, i) => (
            <option value={language} key={i}>
              {t("language", { lng: language })}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
