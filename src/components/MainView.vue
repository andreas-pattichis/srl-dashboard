<template>
    <v-row>
        <v-card flat color="transparent" min-width="100%">
            <EssaySelector />
            <v-tabs v-model="tab">
                <v-tab value="timeline">Tijdlijn</v-tab>
                <v-tab value="results">Resultaten</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="timeline">
                        <TimelineTab />
                    </v-window-item>

                    <v-window-item value="results">
                        <ResultsTab />
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </v-row>
</template>

<script>
import TimelineTab from "./TimelineTab.vue";
import ResultsTab from "./ResultsTab.vue";
import EssaySelector from "./EssaySelector.vue";
import { GET_USERNAME } from "../store/storeconstants";

export default {
    name: 'MainView',
    components: { ResultsTab, TimelineTab, EssaySelector },
    data: function () {
        return {
            tab: null,
        }
    },
    created() {
        if (!this.$store.getters[`auth/${GET_USERNAME}`]) {
            this.$router.push('/login')
        }
    }
}
</script>
<style scoped>
.v-btn {
    font-family: "Noto Sans";
    font-weight: bold;
    font-size: 16pt;
    color: #2c3e50;
    text-decoration: none;
    margin-right: 20px;
    padding-bottom: 2px;
    text-transform: none;
    letter-spacing: normal;
}

.tabLinks {
    margin-bottom: 20px
}

#mainTabs {
    width: 100%;
}
</style>