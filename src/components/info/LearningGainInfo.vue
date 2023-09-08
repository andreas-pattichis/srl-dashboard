<template>
    <v-row class="results-item">
        <v-row no-gutters>
            <v-col cols="6">
                <span>{{ $t("general.beforeMeasure") }}</span>
                <br>
                <span class="tab-info-title">{{ pplg[0] }}</span>
                <br><br>
                <span>{{ $t("general.afterMeasure") }}</span>
                <br>
                <span class="tab-info-title">{{ pplg[1] }}</span>
            </v-col>
            <v-col cols="6" id="learning-gain-profit-col">
                <span class="learning-gain-profit-text">{{ $t("general.learningProfit") }}</span>
                <span class="tab-info-title tab-info-big-title learning-gain-profit-text">{{ pplg[2] }}</span>
            </v-col>
        </v-row>
    </v-row>
</template>

<script>
export default {
    name: "LearningGainInfo",
    props: ['pplg'],
}
</script>

<style scoped>
#learning-gain-profit-col {
    display: flex;
    text-align: center;
    align-items: center;
    flex-wrap: inherit;
}

.learning-gain-profit-text {
    display: block;
    width: 100%;
}
</style>