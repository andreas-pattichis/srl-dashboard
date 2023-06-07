import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import vuetify from './plugins/vuetify'

// Vuex
import store from './store'

// Router
import router from './router'

// Vuei18n
import { createI18n } from 'vue-i18n'

import './assets/main.css'

const messages = {
    NL: {
        EXPLANATIONS: {
            title: 'Hover over de tijdlijn voor uitleg',
            NietGedetecteerd: 'Er is geen proces gedetecteerd. Dit betekent niet dat je niks hebt gedaan. Het gedrag kon enkel niet gedetecteerd worden als een cognitief en/of metacognitief proces.',
            Orientatie: 'Orientatie is het verkennen van de leeromgeving en het activeren van voorkennis. Voorbeelden van oriënterende activiteiten bij het schrijven van een essay zijn: inhoud scannen van een leeromgeving, bepalen van leerdoelen en de rubriek bekijken.',
            Plannen: 'Plannen heeft betrekking op activiteiten die jouw voorbereiding op het uitvoeren van de taak. Het gaat over het bepalen en plannen van activiteiten die nodig zijn om jouw leerdoel te behalen.',
            Monitoren: 'Monitoren betreft het controleren van jouw leerproces en het controleren van jouw geplande leerstrategie. Ben ik nog steeds aan het leren op de manier, zoals ik van te voren bedacht heb? Voorbeelden van monitoringsactiviteiten zijn: annotaties en notities gebruiken, je planning controleren en de timer bekijken.',
            Evaluatie: 'Evaluatie hangt nauw samen met monitoring. In beide toets je je leerproces en gedrag, maar bij evaluatie voeg je een oordeel toe aan de activiteiten die je toetst. Bij monitoring controleer je of je leerproces verloopt zoals je van te voren hebt bedacht. Met evaluatieactiviteiten beoordeel je of de dingen die je doen nog steeds nuttig zijn om je leerdoel te behalen. Dit oordeel kan leiden tot het aanpassen van je leerstrategie. Voorbeelden van evaluatie bij het schrijven van een essay zijn: het controleren van de instructie en/of de rubriek om de relevantie van de informatie voor het essay te beoordelen.',
            Lezen: 'Lezen valt onder cognitieve processen en weergeeft wanneer en hoe lang jij een tekst voor het eerste hebt gelezen.',
            Herlezen: 'Het cognitieve proces herlezen weergeeft wanneer en hoe lang jij een tekst nogmaals hebt gelezen.',
            Schrijven: 'Schrijven toont wanneer en hoe lang jij aan het schrijven was. ',
            Other: "BLANK: Geen informatie.",
        },
    },
};

const i18n = createI18n({
    locale: 'NL',
    messages
});

const app = createApp(App);

app.use(vuetify)
app.use(i18n)
app.use(store)
app.use(router)
app.mount('#app');