<template>
  <v-row class="greetings">
    <span class="title">
      Dashboard van persoon {{ getUsername() }}
    </span>
    <br>
    <span class="undertitle">
      Overzicht van leerproces
    </span>
  </v-row>
</template>
<script>
import {GET_USERNAME} from "../store/storeconstants";

export default {
    name: "HelloUser",
    methods:{
        getUsername() {
            return this.$store.getters[`auth/${GET_USERNAME}`]
        },
    }
};
</script>
<style scoped>
.title{
    font-weight: bold;
    font-size: 20pt;
}

.undertitle{
    font-weight: normal;
    font-style: italic;
    font-size: 14pt;
}

.greetings{
    height: 5vh;
    text-align: left;
    display: block;
}
</style>
