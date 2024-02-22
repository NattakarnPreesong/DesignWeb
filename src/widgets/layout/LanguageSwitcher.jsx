import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center">
      <button
        className={`mr-2 ${i18n.language === "en" ? "selected" : ""}`}
        onClick={() => changeLanguage("en")}
        style={{ margin: "0 5px" }}
      >
        EN
      </button>
      <button
        className={`${i18n.language === "jp" ? "selected" : ""}`}
        onClick={() => changeLanguage("jp")}
        style={{ margin: "0 5px" }}
      >
        JP
      </button>
      <button
        className={`${i18n.language === "th" ? "selected" : ""}`}
        onClick={() => changeLanguage("th")}
        style={{ margin: "0 5px" }}
      >
        TH
      </button>
    </div>
  );
};

export default LanguageSwitcher;
