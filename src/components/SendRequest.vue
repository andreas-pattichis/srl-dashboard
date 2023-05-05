<template>
    <h1>Vue 3 and Fetch Example</h1>

    <template>
        <div>
            <div v-for="data in myJson">{{data}}</div>
        </div>
    </template>
</template>

<script>
import json from './example.json'
export default{
    data(){
        return{
            myJson: json
        }
    }
}
</script>