<template>
    <v-row class="explainer-heading">
        <span>
            Cognitie
        </span>
        <v-divider />
        <p class="explainer-perc" @mouseover="setExplainer(item.name)" v-for="(item, i) in c_perc" :key="i">
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
    name: "CognitionInfo",
    data: function() {
        return {
            c_perc: this.$store.getters.essays[0].c_perc,
            colors: ["red", "pink", "orange"]
        };
    },
    methods: {
        // Perhaps something to come back to later as copy-pasting this method between components ((Meta)cognition, other) is redundant
        setExplainer: function(process){
            var temp = process.split(" ").join("");
            this.$store.commit(`explanation/${SET_EXPLANATION}`, "EXPLANATIONS." + temp);
            this.$store.commit(`explanation/${SET_PROCESS}`, process);
        }
    }
}
</script>

<style scoped>
.red{
    background-color: #E31A1C;
}
.pink{
    background-color: #FB9A99;
}
.orange{
    background-color: #FF7F00;
}
</style>