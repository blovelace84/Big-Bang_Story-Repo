import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "./BigBang.css";

const BigBang = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    en: "The universe began, scientists believe, with every speck of its energy jammed into a very tiny point. This extremely dense point exploded with unimaginable force, creating matter and propelling it outward to make the billions of galaxies of our vast universe. Astrophysicists dubbed this titanic explosion the Big Bang.",
    en2: "The Big Bang was like no explosion you might witness on Earth today. For instance, a hydrogen bomb explosion, whose center registers approximately 100 million degrees Celsius, moves through the air at about 300 meters per second. In contrast, cosmologists believe the Big Bang flung energy in all directions at the speed of light (300,000,000 meters per second, a million times faster than the H-bomb) and estimate that the temperature of the entire universe was 1000 trillion degrees Celsius at just a tiny fraction of a second after the explosion. Even the cores of the hottest stars in today's universe are much cooler than that.",
    en3: "There's another important quality of the Big Bang that makes it unique. While an explosion of a man-made bomb expands through air, the Big Bang did not expand through anything. That's because there was no space to expand through at the beginning of time. Rather, physicists believe the Big Bang created and stretched space itself, expanding the universe.",

    tlh: "reH tu'lu'be'chugh, vaj ngoQwI' DamojlaW' 'e' yIHar. ghIq yabDaj Dotlhna' luleghbogh qechmeymaj'e'. 'ach romuluS HIq vItlhutlh vIneH. Hudgh 'ach Huj ghitlh vIleghlaHbe'chugh. Daq'eghchu'pu', daq'eghchoHDI' qa'wI'. 'ach ngemHom vIDelmeH, qaStaHvIS tupmey puS. 'ach jIvanglaHbe'chugh, mujonnIS latlhpu', pa' qaStaHvIS poHmey Sar, 'ej ghu' qaStaHvIS cha'maH ghu'vam, 'ej tlhoS Dochvam'e'. ngemHomDaq QottaHvIS wa'maHcha' Duj. vaj, tugh QIb nIvqu' QorwaghHa'lu'chugh.",
    tlh2: "There's another important quality of the Big Bang that makes it unique. While an explosion of a man-made bomb expands through air, the Big Bang did not expand through anything. That's because there was no space to expand through at the beginning of time. Rather, physicists believe the Big Bang created and stretched space itself, expanding the universe."
  };

  return (
    <div className="big-bang-container">
      <p>{texts[language]}</p>
    </div>
  );
};

export default BigBang;
