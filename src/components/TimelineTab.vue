<template>
    <v-container fluid>
        <v-row id="tab-info">
            <TabTopInfo />
        </v-row>
        <v-row id="timelines">
            <TimelineChart type="meta" class="timeline" />
            <TimelineChart type="cog" class="timeline" />
        </v-row>
        <v-row>
            <TabBottomInfo />
        </v-row>
    </v-container>

</template>

<script>
import TimelineChart from "./TimelineChart.vue";
import TabTopInfo from "./info/TabTopInfo.vue";
import TabBottomInfo from "./info/TabBottomInfo.vue";

export default {
    name: "TimelineTab",
    components: {
        TabBottomInfo,
        TabTopInfo,
        TimelineChart,
    }
}
</script>

<style scoped>
#tab-info{
    margin-top: 5px;
    margin-bottom: -20px;
}
#timelines {
    margin-bottom: 50px;
}
.timeline {
    margin-bottom: -50px;
}
</style>