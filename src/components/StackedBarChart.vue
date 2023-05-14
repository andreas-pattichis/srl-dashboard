<template>
    <div class="charts">
        <div id="metacognitionChart">
            <apexchart
                ref="metacognitionChart"
                type="bar"
                height="150"
                :options="metacognitionChartOptions"
                :series="metacognitionSeries"
            ></apexchart>
        </div>
        <div id="metacognitionChart">
            <apexchart
                ref="cognitionChart"
                type="bar"
                height="150"
                :options="cognitionChartOptions"
                :series="cognitionSeries"
            ></apexchart>
        </div>
    </div>
</template>

<script>
// base imports
import VueApexCharts from "vue3-apexcharts";
import { ref } from 'vue';
import {mapState} from "vuex";

// import data
// import timelineData from '@/assets/data/fsh.json'
import {GET_USERNAME} from "../store/storeconstants";

let baseChartOptions = {
    chart: {
        stacked: true,
            toolbar: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
                borderRadius: 10
        }
    },
    xaxis: {
        min: 0,
            max: 45,
            tickAmount: 9,
            labels: {
            show: false,
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: true,
        },
    },
    yaxis: {
        labels: {
            show: false,
                formatter: function (val) {
                return (Math.round(val * 100) / 100).toFixed(2) + " min";
            },
        },
    },
    grid: {
        show: false
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
}
export default {
    name: "StackedBarChart",
    components: {
        apexchart: VueApexCharts,
    },
    data: function() {
        return {
            metacognitionSeries: this.$store.getters.user.meta,
            cognitionSeries: this.$store.getters.user.cog,
            metacognitionChartOptions: ref(baseChartOptions),
            cognitionChartOptions: ref(baseChartOptions),
        };
    }
}

</script>

<style scoped>
#metacognitionChart{
    margin-bottom: -50px;
}
.charts{
    margin-bottom: 50px;
    width: 100%;
}
</style>