<template>
    <v-row class="explainer-heading">
        <span>
            {{ title }}
        </span>
        <v-divider />
        <p class="explainer-perc" @mouseover="setExplainer(item.name.replace(/\s+/g, ''))"
            @click="setSelectedProcess(item.name.replace(/\s+/g, ''))" v-for="(item, i) in perc" :key="i">
            <span class="dot"
                :class="getSelectedProcess() == null || getSelectedProcess() == item.name.replace(/\s+/g, '') ? 'fraction-' + item.name.replace(/\s+/g, '').replace('/', '') : ''"></span>
            <span class="explainer-perc-number">
                {{ Math.round(item.data * 100).toFixed(0) }}%
            </span>
            <span class="explainer-perc-text">
                {{ $t("categories." + item.name.replace(/\s+/g, '')) }}
            </span>
        </p>
    </v-row>
</template>

<script>
import { SET_EXPLANATION, SET_SELECTED_PROCESS, GET_SELECTED_PROCESS } from "../../store/storeconstants";

export default {
    name: "FractionInfo",
    props: ['title', 'perc'],
    methods: {
        setExplainer: function (process) {
            const selectedProcess = this.$store.getters[`explanation/${GET_SELECTED_PROCESS}`];
            if (selectedProcess == null) {
                this.$store.commit(`explanation/${SET_EXPLANATION}`, process);
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

.fraction-VerwerkingOrganisatie {
    background-color: #FDBF6F;
}
</style>