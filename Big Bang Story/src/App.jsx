import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageController from "./components/LanguageController";
import BigBang from "./components/BigBang";
import bigBangImage from "./assets/BigBang.jpg";
import "./App.css";

function App() {
  return (
   <LanguageProvider>
      <div>
        <h1>The Big Bang Story</h1>
        <img src={bigBangImage} alt="Big Bang" className="big-bang-image"/>
        <LanguageController />
        <BigBang />
      </div>
   </LanguageProvider>
  )
}

export default App
