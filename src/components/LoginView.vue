<template>
    <v-row class="login-tab">
        <v-col cols="1"></v-col>
        <v-col cols="4">
            <div>
                <p class="title">
                    Dashboard leerproces
                </p>
            </div>
            <div>
                <p class="undertitle">
                    Startscherm & uitleg
                </p>
            </div>
            <div class="login-info-box">
                <p class="subtitle">
                    Welkom op jouw persoonlijke dashboard!
                </p>
                <p>
                    Dit dashboard geeft inzicht in jouw leerproces tijdens het schrijven van het essay. Om jouw leerproces te bekijken, log in met jouw gebruikersnaam.
                </p>
                <p>
                    Na het werken met het dashboard:
                </p>
                <p>
                    1. weet je meer over de rol van cognitie en metacognitie in leren,
                </p>
                <p>
                    2. weet je meer over jouw eigen leerproces en de leerstrategieën die je hebt gebruikt en
                </p>
                <p>
                    3. kan je reflecteren over waarom je een bepaalde leerstrategie gekozen hebt.
                </p>
            </div>
        </v-col>
        <v-col cols="2"></v-col>
        <v-col class="login-box" cols="4" offset="2">
            <p class="subtitle">
                Dashboard login
            </p>
            <form name="login-form">
                <div class="mb-3 login-input">
                    <label for="username">Gebruikersnaam </label><br>
                    <input type="text" id="username" v-model="input.username" />
                </div>
                <p class="error">{{this.output}}</p>
                <button class="btn btn-outline-dark" type="submit" v-on:click.prevent="login()">
                    Inloggen
                </button>
            </form>
        </v-col>
        <v-col cols="1"></v-col>
    </v-row>
</template>

<script>
import {GET_USERNAME, SET_AUTHENTICATION, SET_USERNAME} from "../store/storeconstants";

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
                this.$store.commit(`auth/${SET_USERNAME}`, this.input.username);
                console.log("Waiting for data fetch");
                this.fetchData();
            } else {
                this.output = "Gebruikersnaam kan niet leeg zijn"
            }
        },
        fetchData() {
            this.$store.dispatch('loadUsers',this.$store.getters[`auth/${GET_USERNAME}`], {
                root:true
            }).then((res) => {
                console.log(res);
                if(res !== 400) {
                    this.output = "Authenticatie succesvol"
                    this.authenticate();
                    this.$router.push('/');
                }
                else{
                    this.output = "Er is iets fout gegaan. Probeer het opnieuw"
                }
            })
            .catch((error) => {
                // catch the error
                alert(error)
            })
        },
        authenticate(){
            //stores true to the set_authentication and username to the set_username
            this.$store.commit(`auth/${SET_AUTHENTICATION}`, true);
        }
    },
}
</script>

<style scoped>
.greetings{
    display: none!important;
}
.login-tab{
    padding:4em 0em;
}
.login-info-box .subtitle{
    margin-top:2em;
}
.login-info-box p:not(.subtitle){
    margin-top:15px;
}
.login-box{
    background:#EBEBEB;
    border-radius: 25px;
    padding: 4em;
}
.login-box label{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
}
.login-box input{
    border-bottom: 2px solid #2c3e50;
    margin-top: 10px;
    width: 50%;
}
.login-input{
    margin-top: 20px;
}
.login-box button{
    color:white;
    background-color:#2c3e50;
    padding: 10px 40px;
    border-radius: 25px;
    margin-top: 30px;
    width: 50%;
}
</style>