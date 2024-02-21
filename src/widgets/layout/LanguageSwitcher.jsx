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
      >
        EN
      </button>
      <button
        className={`${i18n.language === "jp" ? "selected" : ""}`}
        onClick={() => changeLanguage("jp")}
      >
        JP
      </button>
    </div>
  );
};

export default LanguageSwitcher;