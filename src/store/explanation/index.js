import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            explanation: null,
            process: null
        }
    },
    mutations,
    getters
}