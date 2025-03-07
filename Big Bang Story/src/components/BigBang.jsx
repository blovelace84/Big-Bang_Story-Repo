import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "./BigBang.css";

const BigBang = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    en: "In the beginning, the universe was a singularity. A moment of infinite density and energy, waiting to expand into the vast cosmos we see today.",
    tlh: "QaQchoHbe’bogh poH, wa’logh che’taHbogh chenmoHbogh Hoch. Qapchu’ Hoch Sub, HoS, ‘ej chImbogh logh mojtaHvIS." // Translated to Klingon
  };

  return (
    <div className="big-bang-container">
      <p>{texts[language]}</p>
    </div>
  );
};

export default BigBang;
