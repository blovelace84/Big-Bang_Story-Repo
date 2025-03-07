import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageController from "./components/LanguageController";
import BigBang from "./components/BigBang";

function App() {
  return (
   <LanguageProvider>
      <div>
        <h1>The Big Bang Story</h1>
        <LanguageController />
        <BigBang />
      </div>
   </LanguageProvider>
  )
}

export default App
