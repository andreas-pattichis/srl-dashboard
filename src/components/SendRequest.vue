<template>
    <p>
        {{ info }}
    </p>
</template>

<script>
import axios from "axios";

export default {
    name: "SendRequests",
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios
            .get('https://floralearn.org/flora-lighthouse/api/result',
                {
                    params: {
                        studentNumber: "fsh7_132"
                    }
                })
            .then(response => (this.info = response))
    }
};
</script>