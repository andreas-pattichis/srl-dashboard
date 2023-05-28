<template>
    <v-row class="explainer-heading">
        <span>
            {{ $t("EXPLANATIONS.title") }}
        </span>
        <v-divider />
        <p v-if="getExplanation()">
            {{ $t(getExplanation()) }}
        </p>
        <p v-else>
            {{ $t("EXPLANATIONS.NIETGEDETECTEERD") }}
        </p>
    </v-row>
</template>

<script>
import {GET_EXPLANATION} from "../../store/storeconstants";

export default {
    name: "HoverInfo",
    methods:{
        getExplanation() {
            return this.$store.getters[`explanation/${GET_EXPLANATION}`]
        },
    }
}
</script>

<style scoped>

</style>