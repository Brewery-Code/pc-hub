import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enComponents from "./en/components.json";
import ukComponents from "./uk/components.json";
import enHome from "./en/home.json";
import ukHome from "./uk/home.json";
import enModals from "./en/modals.json";
import ukModals from "./uk/modals.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { components: enComponents, home: enHome, modals: enModals },
      uk: { components: ukComponents, home: ukHome, modals: ukModals },
    },
    detection: {
      lookupQuerystring: "lng",
    },
    defaultNS: "components",
    fallbackLng: "en",
    supportedLngs: ["en", "uk"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
