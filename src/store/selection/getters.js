import { GET_LOCALE, GET_ACTIVE_TAB } from "../storeconstants";

export default {
    [GET_LOCALE](state) {
        return state.locale;
    },
    [GET_ACTIVE_TAB](state) {
        return state.tab;
    }
}