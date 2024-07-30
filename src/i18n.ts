// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import zhTranslation from './locales/zh/translation.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    zh: {
        translation: zhTranslation,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'zh', // 默认语言
        fallbackLng: 'zh',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;