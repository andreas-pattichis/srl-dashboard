import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            locale: import.meta.env.VITE_DEFAULT_LOCALE,
            tab: import.meta.env.VITE_DEFAULT_TAB
        }
    },
    mutations,
    getters
}