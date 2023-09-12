<template>
    <div class="timeline">
        <apexchart ref="timeline" type="bar" height="150" :options="options" :series="mapColours(series)"
            @dataPointMouseEnter="hoverHandler" @dataPointSelection="selectHandler"></apexchart>
    </div>
</template>

<script>
// base imports
import VueApexCharts from "vue3-apexcharts";
import { ref } from 'vue';

// import data
import { SET_EXPLANATION, SET_PROCESS, SET_SELECTED_PROCESS, GET_SELECTED_PROCESS } from "../store/storeconstants";

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
    states: {
        active: {
            allowMultipleDataPointsSelection: false,
        },
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
        setExplanation(parameter) {
            var temp = parameter.split(" ").join("");
            this.$store.commit(`explanation/${SET_EXPLANATION}`, "explanations." + temp);
            this.$store.commit(`explanation/${SET_PROCESS}`, parameter);
        },
        hoverHandler(e, chart, opts) {
            const selectedProcess = this.$store.getters[`explanation/${GET_SELECTED_PROCESS}`];
            if (selectedProcess == null) {
                this.setExplanation(opts.w.config.series[opts.seriesIndex].name);
            }
        },
        selectHandler(e, chart, opts) {
            const selectedProcess = this.$store.getters[`explanation/${GET_SELECTED_PROCESS}`];
            const process = opts.w.globals.seriesNames[opts.seriesIndex];

            if (opts.selectedDataPoints[opts.seriesIndex].includes(opts.dataPointIndex)) {
                chart.toggleDataPointSelection(opts.seriesIndex, opts.dataPointIndex);
                if (selectedProcess != process) {
                    this.$store.commit(`explanation/${SET_SELECTED_PROCESS}`, process);
                    this.setExplanation(process);
                }
            } else {
                if (selectedProcess == process) {
                    this.$store.commit(`explanation/${SET_SELECTED_PROCESS}`, null);
                }
            }
        },
        mapColours(series) {
            const selectedProcess = this.$store.getters[`explanation/${GET_SELECTED_PROCESS}`];
            return series.map((dataPoint) => {
                return {
                    name: dataPoint.name,
                    data: dataPoint.data,
                    color: selectedProcess != null && dataPoint.name != selectedProcess ? "#ebebeb" : dataPoint.color
                };
            });
        },
    },
}

</script>

<style scoped>
.timeline {
    width: 100%;
}
</style>