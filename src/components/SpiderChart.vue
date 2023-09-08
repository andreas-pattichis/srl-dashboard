<template>
    <div id="chart">
        <apexchart type="radar" :options="spiderChartOptions" :series="[{ 'data': spiderData }]"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
    name: "SpiderChart",
    components: {
        apexchart: VueApexCharts,
    },
    props: ['pplg', 'spiderData'],
    data: function () {
        return {
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
        };
    }
};
</script>