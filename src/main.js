import { createApp } from 'vue'
import App from './App.vue'
import {Tabs, Tab} from 'vue3-tabs-component';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

// Vuex
import store from './store'

// Router
import router from './router'

import './assets/main.css'

const app = createApp(App);
app.use(vuetify)
app.use(store)
app.use(router)
app.component('tab', Tab)
app.component('tabs', Tabs)
app.mount('#app');