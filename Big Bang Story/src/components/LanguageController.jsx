import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";


const LanguageController = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={toggleLanguage}>
        {language === "en" ? "Switch to Klingon" : "yIchel DIvI’ Hol"}
      </button>
    </div>
  );
};

export default LanguageController;
