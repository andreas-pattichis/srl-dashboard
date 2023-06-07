<template>
    <v-row class="explainer-heading">
        <span>
            Anders
        </span>
        <v-divider />
        <p class="explainer-perc" @mouseover="setExplainer('Niet Gedetecteerd')">
            <span class="dot" style="background-color: #ebebeb;"></span>
            <span class="explainer-perc-text">
                Niet gedetecteerd
            </span>
        </p>
    </v-row>
</template>

<script>
import {SET_EXPLANATION, SET_PROCESS} from "../../store/storeconstants";

export default {
    name: "OtherInfo",
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

</style>