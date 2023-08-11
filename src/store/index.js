import { createStore } from 'vuex'
import auth from './auth/index'
import api from './api/index'
import explanation from "./explanation";
import selection from "./selection";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});

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
        explanation,
        selection
    },
    plugins: [vuexLocal.plugin]
})