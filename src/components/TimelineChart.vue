<template>
    <div class="timeline">
        <apexchart ref="timeline" type="bar" height="150" :options="options" :series="series"
            @dataPointMouseEnter="hoverHandler"></apexchart>
    </div>
</template>

<script>
// base imports
import VueApexCharts from "vue3-apexcharts";
import { ref } from 'vue';

// import data
import { SET_EXPLANATION, SET_PROCESS } from "../store/storeconstants";

const baseChartOptions = {
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
    name: "TimelineChart",
    components: {
        apexchart: VueApexCharts,
    },
    props: ['series'],
    data: function () {
        return {
            options: ref(baseChartOptions),
        };
    },
    methods: {
        translateHover(parameter) {
            var temp = parameter.split(" ").join("");
            this.$store.commit(`explanation/${SET_EXPLANATION}`, "EXPLANATIONS." + temp);
            this.$store.commit(`explanation/${SET_PROCESS}`, parameter);
        },
        hoverHandler(e, chart, opts) {
            this.translateHover(opts.w.config.series[opts.seriesIndex].name);
        }
    },
}

</script>

<style scoped>
.timeline {
    width: 100%;
}
</style>