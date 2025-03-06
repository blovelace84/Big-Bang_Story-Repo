import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageController = () => {
    const { language, toggleLanguage } = useLanguage();

    return(
        <div style={{ textAlign: "center", marginBottom: "20px"}}>
            <button onClick={toggleLanguage} style={{ padding: "10px", fontSize: "16px"}}>
                {language === "en" ? "Switch to Klingon" : "Switch to English"}
            </button>
        </div>
    );
};

export default LanguageController;