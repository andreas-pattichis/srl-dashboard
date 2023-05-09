<template>
    <form name="login-form">
        <div class="mb-3">
            <label for="username">Username: </label>
            <input type="text" id="username" v-model="input.username" />
        </div>
        <button class="btn btn-outline-dark" type="submit" v-on:click.prevent="login()">
            Login
        </button>
    </form>
</template>

<script>
import { SET_AUTHENTICATION, SET_USERNAME } from "../store/storeconstants";

export default {
    name: 'LoginView',
    data() {
        return {
            input: {
                username: "",
            },
            output: "",
        }
    },
    methods: {
        login() {
            //make sure username OR password are not empty
            if (this.input.username !== "") {
                this.output = "Authentication complete"
                //stores true to the set_authentication and username to the set_username
                this.$store.commit(`auth/${SET_AUTHENTICATION}`, true);
                this.$store.commit(`auth/${SET_USERNAME}`, this.input.username);
                this.output = "Authentication complete."
                this.$router.push('/')
            } else {
                this.$store.commit(`auth/${SET_AUTHENTICATION}`, false);
                this.output = "Username and password can not be empty"
            }
        },
    },
}
</script>

<style scoped>
.greetings{
    display: none!important;
}
</style>