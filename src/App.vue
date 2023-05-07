<template>
    <v-container fluid id="app">
        <v-container fluid id="outer">
            <v-row justify="start">
                <HelloUser />
            </v-row>
        </v-container>
        <v-container fluid id="inner">
            <v-row class="tabLinks">
                <a class="tab-button"
                   href="#timeline"
                   :class="{'is-active': activeTab === 1}"
                   @click="activeTab = 1">
                        Timeline
                </a>
                <a class="tab-button"
                   href="#results"
                   :class="{'is-active': activeTab === 2}"
                   @click="activeTab = 2">
                        Results
                </a>
            </v-row>
            <v-row>
                <tabs id="mainTabs" ref="mainTabs" :options="{ defaultTabHash: 'timeline' }">
                    <tab
                        id="timeline"
                        name="Timeline">
                        <TimelineTab />
                    </tab>
                    <tab
                        id="results"
                        name="Results">
                        <SendRequest />
                    </tab>
                </tabs>
            </v-row>
        </v-container>
    </v-container>
</template>
<script>
import HelloUser from "./components/HelloUser.vue";
import SendRequest from "./components/SendRequest.vue";
import TimelineTab from "./components/TimelineTab.vue";

export default {
    name: 'App',
    components: {
        TimelineTab,
        SendRequest,
        HelloUser
    },
    data: function (){
        return{
            activeTab: 1
        }
    }
}
</script>
<style>
#app {
    font-family: "Noto Sans", sans-serif;
    font-weight: normal;
    text-align: center;
    color: #2c3e50;
}
.tabs-component-tab{
    display:none;
}
.is-active {
    border-bottom-color: #2bbbde!important;
}
.tab-button{
    font-family: "Noto Sans";
    font-weight: bold;
    font-size: 16pt;
    color: #2c3e50;
    text-decoration: none;
    border-bottom:4px solid #EBEBEB;
    margin-right: 20px;
    padding-bottom:2px;
}
.tabLinks{
    margin-bottom:20px
}
#inner{
    margin-top: 50px;
    background-color: #ffffff;
    min-height: 80vh;
    height:100%;
    border-radius: 2%;
    box-sizing: border-box;
    padding: 40px 40px 40px 40px;
    text-align: left;
}
#mainTabs{
    width: 100%;
}
</style>