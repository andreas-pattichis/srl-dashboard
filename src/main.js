import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import vuetify from './plugins/vuetify'

// Vuex
import store from './store'

// Router
import router from './router'

import './assets/main.css'

const app = createApp(App);
app.use(vuetify)
app.use(store)
app.use(router)
app.mount('#app');