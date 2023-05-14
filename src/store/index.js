import { createStore } from 'vuex'
import auth from './auth/index'
import api from './api/index'

export default createStore({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        auth,
        api,
    }
})