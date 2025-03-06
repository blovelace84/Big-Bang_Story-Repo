import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { use } from "react";

const BigBang = () => {
    const { language } = useLanguage();

    const text = {
        en: "In the beginning, the universe was a singularity, an infinite point of energy and potential. Then, an immense explosion occurred—the Big Bang—giving birth to time, space, and everything we know today.",
        tlh: "qa'vam raSDaq, logh wa' neH taH, HoS je luj neH. ghIq, HoS tlhoS bochtaH—Big Bang—vaj poH, logh, Hoch maH SamchoH.",
      };
      return(
        <div style={{ padding: "20px", textAlign: "center"}}>
            <h1>{language === "en" ? "The Big Bang Story" : "Big Bang"}</h1>
            <p>{text[language]}</p>
        </div>
      );
};

export default BigBang;