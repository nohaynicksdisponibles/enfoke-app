import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '@locals/en'
import es from '@locals/es'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        lng: 'es',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        ns: [...Object.getOwnPropertyNames(es)],
        resources: {
            en,
            es
        }
    });

export default i18n;
