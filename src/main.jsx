import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import "../public/css/tailwind.css";
import "../public/css/styles.css";

import global_en from "@/translations/en/global.json";
import global_jp from "@/translations/jp/global.json";
import global_th from "@/translations/th/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: {escapeValue: false},
  lng: "jp",
  resources: {
    en: {
        global: global_en,
    },
    jp: {
      global: global_jp,
  },th: {
      global: global_th,
  },
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
