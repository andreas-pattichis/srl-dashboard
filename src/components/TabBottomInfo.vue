<template>
    <v-row class="explainer-row">
        <v-col cols="3" class="explainer-col px-8">
            <HoverInfo />
        </v-col>
        <v-col cols="2" class="explainer-col px-8">
            <CognitionInfo />
        </v-col>
        <v-col cols="2" class="explainer-col px-8">
            <MetacognitionInfo />
        </v-col>
        <v-col cols="2" class="explainer-col px-8">
            <OtherInfo />
        </v-col>
        <v-col cols="3" class="explainer-col px-8">
            <ReflectionInfo />
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <button class="btn btn-outline-dark" type="submit" v-on:click.prevent="logout()">
                Logout
            </button>
        </v-col>
    </v-row>
</template>

<script>
import ReflectionInfo from "./info/ReflectionInfo.vue";
import HoverInfo from "./info/HoverInfo.vue";
import CognitionInfo from "./info/CognitionInfo.vue";
import MetacognitionInfo from "./info/MetacognitionInfo.vue";
import OtherInfo from "./info/OtherInfo.vue";
import {SET_AUTHENTICATION, SET_USERNAME} from "../store/storeconstants";

export default {
    name: "TabBottomInfo",
    components: {OtherInfo, MetacognitionInfo, CognitionInfo, HoverInfo, ReflectionInfo},
    methods: {
        logout() {
            this.$store.commit(`auth/${SET_AUTHENTICATION}`, false);
            this.$store.commit(`auth/${SET_USERNAME}`, "");
            this.output = "Logged out"
            this.$router.push('/login')
        }
    }
}
</script>

<style>
.explainer-heading span{
    font-weight: 600;
    font-size: 13pt;
    text-align: left;
}
/*.explainer-heading span:not(:first-child){*/
/*    margin-bottom: 10px;*/
/*}*/
.explainer-row{
}
.v-divider{
    margin-top:10px;
    margin-bottom:15px;
    color:#000;
    border-top-width:2px;
}
</style>