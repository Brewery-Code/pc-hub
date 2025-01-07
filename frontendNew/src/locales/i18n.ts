import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enComponents from "./en/components.json";
import ukComponents from "./uk/components.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { components: enComponents },
    uk: { components: ukComponents },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
