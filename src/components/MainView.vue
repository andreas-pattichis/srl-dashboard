<template>
    <v-row>
        <v-card flat color="transparent" min-width="100%">
            <EssaySelector />
            <v-tabs
                v-model="tab"
            >
                <v-tab
                    value="timeline"
                    @click="updateActiveTab('timeline')">
                    {{ $t("general.timelineTab") }}
                </v-tab>
                <v-tab
                    value="cluster"
                    @click="updateActiveTab('cluster')">
                    {{ $t("general.clusterTab") }}
                </v-tab>
                <v-tab
                    value="faqs"
                    @click="updateActiveTab('faqs')">
                    {{ $t("general.faqsTab") }}
                </v-tab>

            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="timeline">
                        <TimelineTab />
                    </v-window-item>
                    <v-window-item value="cluster">
                        <ClusterTab />
                    </v-window-item>
                    <v-window-item value="faqs">
                        <FAQsTab />
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </v-row>
</template>

<script>
import TimelineTab from "./TimelineTab.vue";
import ClusterTab from "./ClusterTab.vue";
import FAQsTab from "./FAQsTab.vue";
import EssaySelector from "./EssaySelector.vue";
import {GET_ACTIVE_TAB, IS_USER_AUTHENTICATED, SET_ACTIVE_TAB} from "../store/storeconstants";

export default {
    name: 'MainView',
    components: { ClusterTab, TimelineTab, FAQsTab, EssaySelector },
    data: function (){
        return{
            tab: this.$store.getters[`selection/${GET_ACTIVE_TAB}`],
        }
    },
    created() {
        if (!this.$store.getters[`auth/${IS_USER_AUTHENTICATED}`]) {
            this.$router.push('/login')
        }
    },
    methods: {
         updateActiveTab(value){
            this.$store.commit(`selection/${SET_ACTIVE_TAB}`, value);
        }
    }
}
</script>
<style scoped>
.v-btn {
    font-family: "Noto Sans";
    font-weight: bold;
    font-size: 16pt;
    color: #2c3e50;
    text-decoration: none;
    margin-right: 20px;
    padding-bottom: 2px;
    text-transform: none;
    letter-spacing: normal;
}

.tabLinks {
    margin-bottom: 20px
}

#mainTabs {
    width: 100%;
}
</style>