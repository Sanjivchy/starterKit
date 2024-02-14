import { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";

const countries = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "np",
    name: "Nepali",
    country_code: "np",
  }
];

const LanguageSelector = () => {

  const {i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage')
    if(storedLanguage && countries.some((c)=>c.code === storedLanguage)){
        i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]); 

/**
 * handle language change event
 * 
 * @param {React.ChangeEvent<HTMLSelectElement>} e - the event object
 * @return {void} - no return value 
 */
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    // Save the selected language in local storage
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  return (
    <>
      <select
        value={i18n.language}
        onChange={handleLanguageChange}
      >
        {countries.map((c) => (
          <Fragment key={c.code}>
            <option value={c.code}>{c.name}</option>
          </Fragment>
        ))}
      </select>
    </>
  );
};

export default LanguageSelector;