<template>
    <v-container fluid>
        <v-row id="tab-info">
            <TabInfo />
        </v-row>
        <v-row>
            <StackedBarChart />
        </v-row>
        <v-row>
            <TabBottomInfo />
        </v-row>
    </v-container>

</template>

<script>
import StackedBarChart from "./StackedBarChart.vue";
import TabInfo from "./TabTopInfo.vue";
import TabBottomInfo from "./TabBottomInfo.vue";

export default {
    name: "TimelineTab",
    components: {
        TabBottomInfo,
        TabInfo,
        StackedBarChart
    }
}
</script>

<style scoped>
#tab-info{
    margin-top: 5px;
    margin-bottom: -20px;
}
</style>