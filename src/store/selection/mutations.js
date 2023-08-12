import {
    SET_LOCALE,
    SET_ACTIVE_TAB
} from "../storeconstants";

export default {
    [SET_LOCALE](state, locale) {
        state.locale = locale
    },
    [SET_ACTIVE_TAB](state, tab) {
        state.tab = tab
    }
}