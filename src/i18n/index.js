import { createI18n } from 'vue-i18n'
import store from '@/store'
import nl from "./locales/nl.json"
import en from "./locales/en.json"
import {GET_LOCALE} from "../store/storeconstants";

export default createI18n({
    locale: (store.getters[`selection/${GET_LOCALE}`] || import.meta.env.VITE_DEFAULT_LOCALE),
    legacy: false,
    globalInjection: true,
    messages: {
        nl,
        en
    }
});