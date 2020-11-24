<template>
  <div class="box">
    <div id="line-container">折线图</div>
    <div id="line-container1">折线图</div>
  </div>
</template>

<script>
// import { Bar } from "@antv/g2plot";
import { Line } from "@antv/g2plot";

export default {
  data() {
    return {
      lineDataMap: [
        { year: "1991", value: 3 },
        { year: "1992", value: 4 },
        { year: "1993", value: 3.5 },
        { year: "1994", value: 5 },
        { year: "1995", value: 4.9 },
        { year: "1996", value: 6 },
        { year: "1997", value: 7 },
        { year: "1998", value: 9 },
        { year: "1999", value: 13 },
      ],
    };
  },
  mounted() {
    this.lineDemo();
    this.lineDemo1();
  },
  methods: {
    lineDemo() {
      const line = new Line("line-container", {
        data: this.lineDataMap,
        xField: "year",
        yField: "value",
        color: "#FE740C",
        // 更改辅助数据点大小及样式
        point: {
          size: 5,
          shape: "diamond",
          style: {
            stroke: "#FE740C",
            lineWidth: 3,
            fillOpacity: 0.6,
          },
        },
        yAxis: {
          // 格式化 y 轴标签加单位，自定义 labal 样式
          label: {
            formatter: (v) => {
              return v + "千";
            },
            style: {
              fill: "#fe740c",
            },
          },
        },
        // 添加label
        label: {
          fill: "#752358",
        },
        // 添加辅助文本、辅助线
        annotations: [
          {
            type: "text",
            position: ["min", "median"],
            content: "5k的基准",
            offsetY: -4,
            style: {
              textBaseline: "bottom",
            },
          },
          {
            type: "line",
            start: ["min", "median"],
            end: ["max", "median"],
            style: {
              stroke: "skyblue",
              lineDash: [3, 2],
            },
          },
        ],
      });
      // element 添加点击事件
      line.on("element:click", (e) => {
        console.log(e);
      });

      // annotation 添加点击事件
      line.on("annotation:click", (e) => {
        console.log(e);
      });

      // axis-label 添加点击事件
      line.on("axis-label:click", (e) => {
        console.log(e);
      });
      line.render();
    },
    lineDemo1() {
      const line = new Line("line-container1", {
        data: this.lineDataMap,
        xField: "year",
        yField: "value",
        color: "#FE740C",
        // 更改辅助数据点大小及样式
        point: {
          size: 5,
          shape: "diamond",
          style: {
            stroke: "#FE740C",
            lineWidth: 3,
            fillOpacity: 0.6,
          },
        },
        yAxis: {
          // 格式化 y 轴标签加单位，自定义 labal 样式
          label: {
            formatter: (v) => {
              return v + "千";
            },
            style: {
              fill: "#fe740c",
            },
          },
        },
        // 添加label
        label: {
          fill: "#752358",
        },
        // 添加辅助文本、辅助线
        annotations: [
          {
            type: "text",
            position: ["min", "median"],
            content: "5k的基准",
            offsetY: -4,
            style: {
              textBaseline: "bottom",
            },
          },
          {
            type: "line",
            start: ["min", "median"],
            end: ["max", "median"],
            style: {
              stroke: "skyblue",
              lineDash: [3, 2],
            },
          },
        ],
      });
      // element 添加点击事件
      line.on("element:click", (e) => {
        console.log(e);
      });

      // annotation 添加点击事件
      line.on("annotation:click", (e) => {
        console.log(e);
      });

      // axis-label 添加点击事件
      line.on("axis-label:click", (e) => {
        console.log(e);
      });
      line.render();
    },
  },
};
</script>

<style>
.box{
    display: flex;
    /* justify-content: center;
    align-items: center;
    height:100vh; */
}
#line-container{
    width:440px;
    height:200px;
    /* border: 1px solid tomato; */
    /* padding:10px 20px; */
}
#line-container1{
    width:440px;
    height:200px;
    /* border: 1px solid tomato; */
    /* padding:10px 20px; */
}
</style>
