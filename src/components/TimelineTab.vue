<template>
    <v-container fluid>
        <v-row id="tab-info">
            <TabTopInfo />
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
import TabTopInfo from "./info/TabTopInfo.vue";
import TabBottomInfo from "./info/TabBottomInfo.vue";

export default {
    name: "TimelineTab",
    components: {
        TabBottomInfo,
        TabTopInfo,
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