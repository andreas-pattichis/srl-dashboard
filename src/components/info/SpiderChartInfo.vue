<template>
    <v-row class="results-item">
        <TabTopInfo />
    </v-row>
    <v-row class="results-item">
        <LearningGainInfo />
    </v-row>
</template>

<script>
import TabTopInfo from "./TabTopInfo.vue";
import LearningGainInfo from "./LearningGainInfo.vue";

export default {
    name: "SpiderChartInfo",
    components: {LearningGainInfo, TabTopInfo}
}
</script>

<style scoped>

</style>