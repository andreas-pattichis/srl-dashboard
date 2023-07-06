<template>
    <div id="chart">
        <apexchart
            type="radar"
            :options="spiderChartOptions"
            :series="spiderChartSeries"
        ></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
    name: "SpiderChart",
    components: {
        apexchart: VueApexCharts,
    },
    created() {
        this.pplg = this.$store.getters.essays[0].pplg;
        this.spiderChartSeries[0].data = this.$store.getters.essays[0].spiderData;
    },
    data: function() {
        return {
            pplg: null,
            spiderChartOptions: {
                chart: {
                    width: '100%',
                    toolbar: {
                        show: false
                    },
                },
                xaxis: {
                    categories: ["Semantische Kruising", "Gemiddelde Cohesie", "Aantal Woorden"]
                },
                yaxis: {
                    show: false,
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return (Math.round(val * 100) / 100).toFixed(2);
                        },
                    },
                },
                tooltip: {
                    enabled: true,
                },
            },
            spiderChartSeries: [
                {
                    data: null,
                },
            ],
        };
    }
};
</script>