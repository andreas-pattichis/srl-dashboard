<template>
    <p v-for="item in metacognition">
        {{item.data}}
    </p>
</template>

<script>
import timelineData from '@/assets/data/fsh.json'

export default {
    name: "SendRequests",
    data() {
        return {
            metacognition: timelineData['body']['meta'],
            cognition: timelineData['body']['cog']
        };
    },
};
</script>