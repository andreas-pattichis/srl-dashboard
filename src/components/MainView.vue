<template>
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
</template>

<script>
import TimelineTab from "./TimelineTab.vue";
import SendRequest from "./SendRequest.vue";

export default {
    name: 'WelcomeVIew',
    components: {SendRequest, TimelineTab},
    data: function (){
        return{
            activeTab: 1
        }
    },
}
</script>
<style scoped>
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
#mainTabs{
    width: 100%;
}
</style>