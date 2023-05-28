import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            explanation: null
        }
    },
    mutations,
    getters
}