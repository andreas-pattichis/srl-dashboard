<template>
    <v-row no-gutters>
        <v-col cols="6">
            <span>Voor meting</span>
            <br>
            <span class="tab-info-title">{{ pplg[0] }}</span>
            <br><br>
            <span>Na meting</span>
            <br>
            <span class="tab-info-title">{{ pplg[1] }}</span>
        </v-col>
        <v-col cols="6" id="learning-gain-profit-col">
            <span class="learning-gain-profit-text">Leerwinst</span>
            <span class="tab-info-title tab-info-big-title learning-gain-profit-text">{{ pplg[2] }}</span>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "LearningGainInfo",
    data: function() {
        return {
            pplg: this.$store.getters.user.pplg,
        };
    },
}
</script>

<style scoped>
#learning-gain-profit-col{
    display:flex;
    text-align: center;
    align-items: center;
    flex-wrap: inherit;
}
.learning-gain-profit-text{
    display: block;
    width: 100%;
}
</style>