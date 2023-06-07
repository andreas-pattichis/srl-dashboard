<template>
    <v-row no-gutters>
        <v-col>
            <span class="tab-info-date">{{ currentDate() }}</span>
            <br>
            <span class="tab-info-title">Tijdlijn van {{ getUsername() }}</span>
            <br>
            <span class="tab-info-subtitle">Totale tijd: 45 minuten</span>
        </v-col>
    </v-row>
</template>

<script>
import {GET_USERNAME} from "../../store/storeconstants";

export default {
    name: "TabTopInfo",
    methods:{
        getUsername() {
            return this.$store.getters[`auth/${GET_USERNAME}`]
        },
        currentDate() {
            const current = new Date();
            const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
            return date;
        }
    }
}
</script>

<style>
.tab-info-date{
    font-style: italic;
    font-size: 12pt;
    display: inline-block;
}
.tab-info-title{
    font-size: 16pt;
    font-weight: bold;
    display: inline-block;
    padding-top:5px;
    padding-bottom:5px;
}
.tab-info-big-title{
    font-size:42pt;
}
.tab-info-subtitle{
    font-size: 12pt;
}
</style>