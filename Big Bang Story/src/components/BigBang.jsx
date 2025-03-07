import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const BigBang = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    en: "In the beginning, the universe was a singularity. A moment of infinite density and energy, waiting to expand into the vast cosmos we see today.",
    tlh: "QaQchoHbe’bogh poH, wa’logh che’taHbogh chenmoHbogh Hoch. Qapchu’ Hoch Sub, HoS, ‘ej chImbogh logh mojtaHvIS." // Translated to Klingon
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", fontSize: "18px" }}>
      <p>{texts[language]}</p>
    </div>
  );
};

export default BigBang;
