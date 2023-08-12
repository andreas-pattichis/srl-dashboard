import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            explanation: import.meta.env.VITE_DEFAULT_EXPLANATION,
            process: import.meta.env.VITE_DEFAULT_PROCESS
        }
    },
    mutations,
    getters
}