<template>
  <div class="g2">
    <div id="container"></div>
  </div>
</template>

<script>
import { Chart } from "@antv/g2";
export default {
  mounted() {
    this.getG2Chart();
  },
  methods: {
    getG2Chart() {
      const datalist = [
        { year: "1951 年", sales: 38 },
        { year: "1952 年", sales: 52 },
        { year: "1956 年", sales: 61 },
        { year: "1957 年", sales: 145 },
        { year: "1958 年", sales: 48 },
        { year: "1959 年", sales: 38 },
        { year: "1960 年", sales: 38 },
        { year: "1962 年", sales: 38 },
      ];
      const chart = new Chart({
        container: "container",
        autoFit: true,
        height: 500,
      });

      chart.data(datalist);
      chart.scale("sales", {
        nice: true,
      });

      chart.tooltip({
        showMarkers: false,
      });
      chart.interaction("active-region");

      chart.interval().position("year*sales");

      chart.render();
    },
  },
};
</script>

<style>
#container {
  width: 340px;
  height: 280px;
}
</style>
