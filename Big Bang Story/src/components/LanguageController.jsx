import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "./LanguageController.css";


const LanguageController = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="language-controller-container">
      <button onClick={toggleLanguage} className="language-controller-button">
        {language === "en" ? "Switch to Klingon" : "yIchel DIvI’ Hol"}
      </button>
    </div>
  );
};

export default LanguageController;
