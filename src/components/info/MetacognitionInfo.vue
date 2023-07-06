<template>
    <v-row class="explainer-heading">
        <span>
            Metacognitie
        </span>
        <v-divider />
        <p class="explainer-perc" @mouseover="setExplainer(item.name)" v-for="(item, i) in m_perc" :key="i">
            <span class="dot" :class="[colors[i]]"></span>
            <span class="explainer-perc-number">
                {{ Math.round(item.data * 100).toFixed(0) }}%
            </span>
            <span class="explainer-perc-text">
                {{ item.name }}
            </span>
        </p>
    </v-row>
</template>

<script>
import {SET_EXPLANATION, SET_PROCESS} from "../../store/storeconstants";

export default {
    name: "MetacognitionInfo",
    data: function() {
        return {
            m_perc: this.$store.getters.essays[0].m_perc,
            colors: ["lightblue", "blue", "green", "lightgreen"]
        };
    },
    methods: {
        setExplainer: function(process){
            var temp = process.split(" ").join("");
            this.$store.commit(`explanation/${SET_EXPLANATION}`, "EXPLANATIONS." + temp);
            this.$store.commit(`explanation/${SET_PROCESS}`, process);
        }
    }
}
</script>

<style scoped>
.lightblue{
    background-color: #A6CEE3;
}
.blue{
    background-color: #1F78B4;
}
.green{
    background-color: #33A02C;
}
.lightgreen{
    background-color: #B2DF8A;
}
</style>