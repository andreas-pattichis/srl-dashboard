<template>
    <template v-if="getSelectedEssays().length >= 1">
        <div v-for="essay in getSelectedEssays()" class="timeline-container">
            <h3>{{ essay.name }}</h3>
            <v-container fluid fill-height>
                <v-row id="results">
                    <v-col col="1"></v-col>
                    <v-col cols="3">
                        <LearningGainInfo :pplg="essay.pplg" />
                    </v-col>
                    <v-col cols="7" class="results-item">
                        <SpiderChart :pplg="essay.pplg" :spider-data="essay.spiderData" />
                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>
            </v-container>
        </div>
    </template>
    <template v-else>
        <h1>Er zijn geen betogen geselecteerd.</h1>
    </template>
</template>

<script>
import SpiderChart from "./SpiderChart.vue";
import LearningGainInfo from "./info/LearningGainInfo.vue";

export default {
    name: "ResultsTab",
    components: { LearningGainInfo, SpiderChart },
    methods: {
        getSelectedEssays() {
            return this.$store.getters.selectedEssays;
        }
    }
}
</script>

<style>
#results .results-item {
    background-color: #d5f1f8;
    border-radius: 20px;
    margin: 20px 0;
    padding: 40px 20px;
}
</style>