<template>
    <v-row class="explainer-heading">
        <span>
            Metacognitie
        </span>
        <v-divider />
        <p class="explainer-perc" v-for="(item, i) in m_perc" :key="i">
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
export default {
    name: "MetacognitionInfo",
    data: function() {
        return {
            m_perc: this.$store.getters.user.m_perc,
        };
    },
}
</script>

<style scoped>

</style>