<template>
    <v-container fluid id="app">
        <v-container fluid id="outer">
            <HelloUser />
        </v-container>
        <v-container fluid id="inner">
            <RouterView />
        </v-container>
    </v-container>
</template>

<script>
import HelloUser from "./components/HelloUser.vue";
import {IS_USER_AUTHENTICATED} from "./store/storeconstants";

export default {
    name: 'App',
    components: {
        HelloUser
    },
    methods:{
        isAuthenticated() {
            return this.$store.getters[`auth/${IS_USER_AUTHENTICATED}`]
        },
    }
}
</script>

<style>
#inner{
    background-color: #ffffff;
    min-height: 80vh;
    height:100%;
    border-radius: 25px;
    box-sizing: border-box;
    padding: 40px 40px 40px 40px;
    text-align: left;
}
</style>