<template>
    <div id="app">
        <SendRequest />
    </div>
</template>
<script>
import SendRequest from './components/SendRequest.vue'
export default {
    name: 'App',
    components: {
        SendRequest
    }
}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>