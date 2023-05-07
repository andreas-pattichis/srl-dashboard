<template>
  <v-row class="greetings">
    <span class="title">
      Dashboard van persoon X
    </span>
    <br>
    <span class="undertitle">
      Overzicht van leerproces
    </span>
  </v-row>
</template>
<script>
export default {
    name: "HelloUser",
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
