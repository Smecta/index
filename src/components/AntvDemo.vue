<template>
  <div class="box">
    <el-row>
      <el-col :span="8">
        <div id="line-container">折线图</div>
      </el-col>
      <el-col :span="8">
        <div id="column-container">统计图</div>
      </el-col>
      <el-col :span="8">
        <div id="linePlot">多折线动画</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div id="liquid">样式自定义的水波图</div>
      </el-col>
      <el-col :span="8">
        <div id="gauge">自定义配置的仪表盘</div>
      </el-col>
      <el-col :span="8">
        <div id="column">基础柱状图</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Line } from "@antv/g2plot";
import { Column } from "@antv/g2plot";
import { Liquid, measureTextWidth } from "@antv/g2plot";
import { Gauge } from "@antv/g2plot";
export default {
  data() {
    return {
      mydata: [],
      linePlot: "",
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
  watch: {
    // mydata(b) {
    //   this.linePlot.changeData(b);
    //   this.linePlot.render();
    // },
  },
  created() {},
  mounted() {
    // this.getlinePlot();
    // this.timer = window.setInterval(() => {
    //   setTimeout(() => {
    //     this.changeData();
    //   }, 0);
    // }, 3000);
    this.lineDemo();
    this.getColumnData();
    this.getlinePlot();
    this.getliquidPlot();
    this.getGayge();
    this.getColumn();
  },
  methods: {
    //test
    changeData() {
      this.$http
        .get(
          //轮询这里放置的是不匹配的url，为了检测页面是否会自动刷新，即3s后曲线图消失
          "https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json"
        )
        .then((res) => {
          this.mydata = res.data;
        });
    },
    getlinePlot() {
      this.$http
        .get(
          "https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json"
        )
        .then((res) => {
          const linePlot = new Line("linePlot", {
            data: res.data,
            xField: "year",
            yField: "gdp",
            seriesField: "name",
            yAxis: {
              label: {
                formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
              },
            },
            legend: {
              position: "top",
            },
            smooth: true,
            // @TODO 后续会换一种动画方式
            animation: {
              appear: {
                animation: "path-in",
                duration: 5000,
              },
            },
          });

          linePlot.render();
          this.linePlot = linePlot;
        });
    },
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
    getColumnData() {
      this.$http
        .get(
          "https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json"
        )
        .then((res) => {
          // this.columnDataMap = res.data;
          const column = new Column("column-container", {
            // data: this.columnDataMap,
            data: res.data,
            xField: "城市",
            yField: "销售额",
            xAxis: {
              label: {
                autoRotate: false,
              },
            },
            slider: {
              start: 0.1,
              end: 0.2,
            },
          });

          column.render();
        });
    },
    getliquidPlot() {
      const liquidPlot = new Liquid(document.getElementById("liquid"), {
        percent: 0.26,
        statistic: {
          title: {
            formatter: () => "盈利率",
            style: ({ percent }) => ({
              fill: percent > 0.65 ? "white" : "rgba(44,53,66,0.85)",
            }),
          },
          content: {
            style: ({ percent }) => ({
              fontSize: 60,
              lineHeight: 1,
              fill: percent > 0.65 ? "white" : "rgba(44,53,66,0.85)",
            }),
            customHtml: (container, view, { percent }) => {
              const { width, height } = container.getBoundingClientRect();
              const d = Math.sqrt(
                Math.pow(width / 2, 2) + Math.pow(height / 2, 2)
              );
              const text = `占比 ${(percent * 100).toFixed(0)}%`;
              const textWidth = measureTextWidth(text, { fontSize: 60 });
              const scale = Math.min(d / textWidth, 1);
              return `<div style="width:${d}px;display:flex;align-items:center;justify-content:center;font-size:${scale}em;line-height:${
                scale <= 1 ? 1 : "inherit"
              }">${text}</div>`;
            },
          },
        },
        liquidStyle: ({ percent }) => {
          return {
            fill: percent > 0.45 ? "#5B8FF9" : "#FAAD14",
            stroke: percent > 0.45 ? "#5B8FF9" : "#FAAD14",
          };
        },
        color: () => "#5B8FF9",
      });
      liquidPlot.render();

      let data = 0.25;
      const interval = setInterval(() => {
        data += Math.min(Math.random() * 0.1, 0.1);
        if (data < 0.75) {
          liquidPlot.changeData(data);
        } else {
          clearInterval(interval);
        }
      }, 500);
    },
    getGayge() {
      const ticks = [0, 1 / 3, 2 / 3, 1];
      const color = ["#F4664A", "#FAAD14", "#30BF78"];
      const gauge = new Gauge("gauge", {
        percent: 0,
        range: {
          ticks: [0, 1],
          color: ["l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78"],
        },
        indicator: {
          pointer: {
            style: {
              stroke: "#D0D0D0",
            },
          },
          pin: {
            style: {
              stroke: "#D0D0D0",
            },
          },
        },
        statistic: {
          title: {
            formatter: ({ percent }) => {
              if (percent < ticks[1]) {
                return "差";
              }
              if (percent < ticks[2]) {
                return "中";
              }
              return "优";
            },
            style: ({ percent }) => {
              return {
                fontSize: "36px",
                lineHeight: 1,
                color:
                  percent < ticks[1]
                    ? color[0]
                    : percent < ticks[2]
                    ? color[1]
                    : color[2],
              };
            },
          },
          content: {
            offsetY: 36,
            style: {
              fontSize: "24px",
              color: "#4B535E",
            },
            formatter: () => "系统表现",
          },
        },
      });

      gauge.render();
      let data = 0;
      const interval = setInterval(() => {
        if (data >= 1) {
          clearInterval(interval);
        }
        data += 0.1;
        gauge.changeData(data);
      }, 1000);
    },
    getColumn() {
      const data = [
        {
          type: "家具家电",
          sales: 38,
        },
        {
          type: "粮油副食",
          sales: 52,
        },
        {
          type: "生鲜水果",
          sales: 61,
        },
        {
          type: "美容洗护",
          sales: 145,
        },
        {
          type: "母婴用品",
          sales: 48,
        },
        {
          type: "进口食品",
          sales: 38,
        },
        {
          type: "食品饮料",
          sales: 38,
        },
        {
          type: "家庭清洁",
          sales: 38,
        },
      ];
      const columnPlot = new Column("column", {
        data,
        theme: "default", // 'dark',
        xField: "type",
        yField: "sales",
        color: "#79d70f",
        label: {
          // 可手动配置 label 数据标签位置
          position: "middle", // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: "#FFFFFF",
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: "类别",
          },
          sales: {
            alias: "销售额",
          },
        },
      });
      columnPlot.render();
    },
    
  },
};
</script>

<style>
.el-row {
  margin-bottom: 60px;
}
.el-row:last-child {
  margin-bottom: 0px;
}

#line-container,
#column-container,
#linePlot,
#liquid,
#gauge,
#column {
  width: 440px;
  height: 200px;
}
</style>
