import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { SiGoogletranslate } from "react-icons/si";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

function ToggleContexts() {
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <div className="context-container">
      <button className="btn-item" onClick={toggleTheme} title={locale === "id" ? "ganti tema" : "toggle theme"}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>

      <button className="btn-item" onClick={toggleLocale} title={locale === "id" ? "terjemahkan" : "translate"}>
        <SiGoogletranslate />
      </button>
    </div>
  );
}

export default ToggleContexts;