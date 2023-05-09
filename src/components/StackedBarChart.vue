<template>
    <div class="charts">
        <div id="metacognitionChart">
            <apexchart
                type="bar"
                height="150"
                :options="metacognitionChartOptions"
                :series="metacognition"
            ></apexchart>
        </div>
        <div id="metacognitionChart">
            <apexchart
                type="bar"
                height="150"
                :options="cognitionChartOptions"
                :series="cognition"
            ></apexchart>
        </div>
    </div>
</template>

<script>
// base imports
import VueApexCharts from "vue3-apexcharts";
import { ref } from 'vue';

// import data
import timelineData from '@/assets/data/fsh.json'

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
            metacognition: timelineData['body']['meta'],
            cognition: timelineData['body']['cog'],
            metacognitionChartOptions: ref(baseChartOptions),
            cognitionChartOptions: ref(baseChartOptions)
        };
    },
    computed: {
        metacognitionChartOptions(){
            let chart = this.metacognitionChartOptions
            chart.xaxis.labels.show = false;

            return chart
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