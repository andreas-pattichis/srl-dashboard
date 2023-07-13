<template>
    <v-container fluid>
        <v-row id="tab-info">
            <TabTopInfo />
        </v-row>
        <v-row id="timelines">
            <div v-if="getSelectedEssays().length == 1" class="timeline-container">
                <h3>{{ getSelectedEssays()[0].name }}</h3>
                <TimelineChart :series="getSelectedEssays()[0].meta" class="timeline" />
                <TimelineChart :series="getSelectedEssays()[0].cog" class="timeline" />
            </div>
            <template v-else-if="getSelectedEssays().length > 1">
                <div v-for="essay in getSelectedEssays()" class="timeline-container">
                    <h3>{{ essay.name }}</h3>
                    <TimelineChart :series="essay.combined_series" class="timeline" />
                </div>
            </template>
            <div v-else class="timeline-container">
                <h1>Er zijn geen betogen geselecteerd.</h1>
            </div>
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
    },
    methods: {
        getSelectedEssays() {
            return this.$store.getters.selectedEssays;
        }
    }
}
</script>

<style scoped>
#tab-info {
    margin-top: 5px;
}

#timelines {
    margin-bottom: 50px;
}

.timeline-container {
    width: 100%;
    margin-top: 20px;
    margin-bottom: -20px;
}
</style>