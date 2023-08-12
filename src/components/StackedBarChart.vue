<template>
    <div class="charts">
        <div id="metacognitionChart">
            <apexchart
                ref="metacognitionChart"
                type="bar"
                height="150"
                :options="metacognitionChartOptions"
                :series="metacognitionSeries"
                @dataPointMouseEnter="hoverHandler"
            ></apexchart>
        </div>
        <div id="metacognitionChart">
            <apexchart
                ref="cognitionChart"
                type="bar"
                height="150"
                :options="cognitionChartOptions"
                :series="cognitionSeries"
                @dataPointMouseEnter="hoverHandler"
            ></apexchart>
        </div>
    </div>
</template>

<script>
// base imports
import VueApexCharts from "vue3-apexcharts";
import { ref } from 'vue';

// import data
import {SET_EXPLANATION, SET_PROCESS} from "../store/storeconstants";

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
            show: true,
        },
        axisBorder: {
            show: true
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
    },
    methods: {
        translateHover(parameter) {
            // `this` inside methods point to the Vue instance
            var temp = parameter.split(" ").join("");//.toUpperCase();
            this.$store.commit(`explanation/${SET_EXPLANATION}`, "explanations." + temp);
            this.$store.commit(`explanation/${SET_PROCESS}`, parameter);
        },
        hoverHandler(e, chart, opts){
            this.translateHover(opts.w.config.series[opts.seriesIndex].name);
        }
    },
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