<template>
  <div id="app">
    <h1 class="teal-text">Top 10 Smash Brothers Characters</h1>
    <div class="container">
      <canvas id="planet-chart" width="800" height="450"></canvas>
    </div>
    <footer>
      <p>Scores calculated according to whether a certain character is eventhub users main, secondary or third choice fighter in their profile. Points are assigned as follows:</p>
      <ul>
        <li>Main is worth 3 points.</li>
        <li>Secondary is worth 2 points.</li>
        <li>Third is worth 1 point.</li>
      </ul>
      <p>
        Data retrieved from
        <a
          href="https://www.eventhubs.com/stats/ssbu/"
          target="_blank"
        >eventhubs.com</a>
      </p>
    </footer>
  </div>
</template>

<script>
/* eslint-disable */

import Chart from 'chart.js';
import planetChartData from './chart-data.js';

export default {
  name: 'app',
  data() {
    return {
      planetChartData: planetChartData
    };
  },

  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  mounted() {
    this.createChart('planet-chart', this.planetChartData);
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
