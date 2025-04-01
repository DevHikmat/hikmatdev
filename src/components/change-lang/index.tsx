import "./language.scss";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageOption } from "../../types";
const languageOptions: LanguageOption[] = [
  { value: "en", label: "En", flag: "https://flagcdn.com/w40/gb.png" },
  { value: "ru", label: "Ру", flag: "https://flagcdn.com/w40/ru.png" },
  { value: "uz", label: "Uz", flag: "https://flagcdn.com/w40/uz.png" },
];
const ChangeLang: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(
    () => {
      const savedLang = localStorage.getItem("currentLanguage");
      return savedLang ? JSON.parse(savedLang) : languageOptions[0];
    }
  );
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    if (i18n.language !== selectedLanguage.value) {
      i18n.changeLanguage(selectedLanguage.value);
      localStorage.setItem("currentLanguage", JSON.stringify(selectedLanguage));
    }
  }, [selectedLanguage, i18n]);
  return (
    <div
      className={`change-lang ${isDarkMode ? "dark-lang" : ""}`}
      ref={selectRef}
    >
      <button className="change-lang-btn" onClick={() => setOpen(!open)}>
        <img src={selectedLanguage.flag} alt={selectedLanguage.label} />
      </button>
      {open && (
        <ul className="change-lang-menu">
          {languageOptions.map((item) => (
            <li
              key={item.value}
              className="change-lang-item"
              onClick={() => {
                setSelectedLanguage(item);
                setOpen(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ChangeLang;