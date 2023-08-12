<template>
    <v-container fluid fill-height>
        <v-row id="results">
            <v-col col="1"></v-col>
            <v-col cols="3">
                <SpiderChartInfo />
            </v-col>
            <v-col cols="7" class="results-item">
                <SpiderChart />
            </v-col>
            <v-col cols="1"></v-col>
        </v-row>
    </v-container>
</template>

<script>
import SpiderChart from "./SpiderChart.vue";
import SpiderChartInfo from "./info/SpiderChartInfo.vue";

export default {
    name: "ResultsTab",
    components: {SpiderChartInfo, SpiderChart}
}
</script>

<style>
#results .results-item{
    background-color: #d5f1f8;
    border-radius: 20px;
    margin: 20px 0;
    padding: 40px 20px;
}
</style>