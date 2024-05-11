<template>
  <div>
    <apexchart type="bar" height="150" :options="chartOptions" :series="chartSeries"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "ClusterChart",
  components: {
    apexchart: VueApexCharts,
  },
  props: ['chartData'],
  computed: {
    chartOptions() {
      return {
        chart: {
          type: 'bar',
          stacked: true,
          stackType: '100%',
          toolbar: {
            show: false
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 10, // Adjust this value to control the roundness
            barHeight: '60%',
          }
        },
        xaxis: {
          labels: {
            show: false
          },
          axisBorder: {
            show: false  // Hides the axis line
          },
          axisTicks: {
            show: false  // Hides the ticks on the axis line
          }
        },
        yaxis: {
          show: false
        },
        legend: {
          show: false
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          yaxis: {
            lines: {
              show: false
            }
          },
        },
      };
    },
    chartSeries() {
      return [{
        name: 'Primary Cluster',
        data: [10]
      }, {
        name: 'Secondary Cluster',
        data: [23] // [this.chartData.secondaryPercentage]
      }, {
        name: 'Others',
        data: [20] // [this.chartData.otherPercentage]
      }];
    }
  }
}
</script>

<style scoped>
/* Add any specific styles here */
</style>

