// source: https://lokalise.com/blog/vue-i18n/
import i18n from "@/i18n"
import store from '@/store'
import {SET_LOCALE} from "../store/storeconstants";

const Trans = {
    get supportedLocales() {
        return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
    },
    set currentLocale(newLocale) {
        i18n.global.locale.value = newLocale
    },

    async switchLanguage(newLocale) {
        Trans.currentLocale = newLocale
        document.querySelector("html").setAttribute("lang", newLocale)
        store.commit(`selection/${SET_LOCALE}`, newLocale);
    },
}
export default Trans