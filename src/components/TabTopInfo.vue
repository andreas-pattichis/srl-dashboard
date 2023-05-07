<template>
    <v-row no-gutters>
        <v-col>
            <span class="tab-info-date">20-4-2021</span>
            <br>
            <span class="tab-info-title">Timeline Essay about X</span>
            <br>
            <span class="tab-info-subtitle">Total time: 45 minutes</span>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "TabInfo"
}
</script>

<style scoped>
.tab-info-date{
    font-style: italic;
    font-size: 12pt;
    display: inline-block;
}
.tab-info-title{
    font-size: 16pt;
    font-weight: bold;
    display: inline-block;
}
.tab-info-subtitle{
    font-size: 12pt;
}
</style>