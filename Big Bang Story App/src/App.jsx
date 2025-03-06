import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import BigBang from "./components/BigBang";
import LanguageController from "./components/LanguageController";

const App = () => {
  return (
    <LanguageProvider>
      <LanguageController />
      <BigBang />
    </LanguageProvider>
  );
};

export default App;
