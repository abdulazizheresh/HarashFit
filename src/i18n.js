// src/i18n.js
import { createI18n } from "vue-i18n";
import en from "@/locales/en";
import ar from "@/locales/ar";

const savedLocale = localStorage.getItem('locale') || 'en';

const i18n = createI18n({
    legacy: false,
    locale: savedLocale,
    fallbackLocale: "en",
    messages: {
        en,
        ar,
    },
});

export default i18n;
