<template>
    <v-row class="explainer-heading">
        <span>
            {{ title }}
        </span>
        <v-divider />
        <p class="explainer-perc" @mouseover="setExplainer(item.name)" @click="setSelectedProcess(item.name)"
            v-for="(item, i) in perc" :key="i">
            <span class="dot"
                :class="getSelectedProcess() == null || getSelectedProcess() == item.name ? 'fraction-' + item.name : ''"></span>
            <span class="explainer-perc-number">
                {{ Math.round(item.data * 100).toFixed(0) }}%
            </span>
            <span class="explainer-perc-text">
                {{ $t("categories." + item.name) }}
            </span>
        </p>
    </v-row>
</template>

<script>
import { SET_EXPLANATION, SET_PROCESS, SET_SELECTED_PROCESS, GET_SELECTED_PROCESS } from "../../store/storeconstants";

export default {
    name: "FractionInfo",
    props: ['title', 'perc'],
    methods: {
        setExplanation(parameter) {
            var temp = parameter.split(" ").join("");
            this.$store.commit(`explanation/${SET_EXPLANATION}`, "explanations." + temp);
            this.$store.commit(`explanation/${SET_PROCESS}`, parameter);
        },
        setExplainer: function (process) {
            const selectedProcess = this.$store.getters[`explanation/${GET_SELECTED_PROCESS}`];
            if (selectedProcess == null) {
                this.setExplanation(process);
            }
        },
        getSelectedProcess: function () {
            return this.$store.getters[`explanation/${GET_SELECTED_PROCESS}`];
        },
        setSelectedProcess: function (process) {
            const selectedProcess = this.$store.getters[`explanation/${GET_SELECTED_PROCESS}`];
            if (selectedProcess == process) {
                this.$store.commit(`explanation/${SET_SELECTED_PROCESS}`, null);
            } else {
                this.$store.commit(`explanation/${SET_SELECTED_PROCESS}`, process);
                this.setExplanation(process);
            }
        },
    }
}
</script>

<style scoped>
.fraction-Orientatie {
    background-color: #A6CEE3;
}

.fraction-Plannen {
    background-color: #1F78B4;
}

.fraction-Evaluatie {
    background-color: #33A02C;
}

.fraction-Monitoren {
    background-color: #B2DF8A;
}

.fraction-Lezen {
    background-color: #E31A1C;
}

.fraction-Herlezen {
    background-color: #FB9A99;
}

.fraction-Schrijven {
    background-color: #FF7F00;
}
</style>