import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // якщо завантажуєте переклади через API
import LanguageDetector from 'i18next-browser-languagedetector'; // для автоматичного виявлення мови

import enComponents from './locales/en/components.json';
import ukComponents from './locales/uk/components.json';
import enHome from './locales/en/home.json';
import ukHome from './locales/uk/home.json';

i18n
  .use(Backend) // для завантаження перекладів з серверу
  .use(LanguageDetector) // для автоматичного визначення мови
  .use(initReactI18next) // для інтеграції з React
  .init({
    resources: {
      en: {
        components: enComponents,
        home: enHome,
      },
      uk: {
        components: ukComponents,
        home: ukHome,
      },
    },
    fallbackLng: 'en', // мова за замовчуванням
    debug: true, // виводить інформацію для налагодження в консоль
    interpolation: {
      escapeValue: false, // не екранізуємо значення
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // шлях до локалізацій
    },
  });

export default i18n;
