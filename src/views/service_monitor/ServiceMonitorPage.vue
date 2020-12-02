<template>
  <div class="service">
    <div class="service-monitor-card">
      <div class="top-title d-flex jc-between ai-center">
        <div class="top-right fs-xl">
          <div class="top-name">服务监控</div>
        </div>
        <div class="top-right fs-md">
          <el-button @click="$router.go(-1)"
            >返回</el-button
          >
        </div>
      </div>
      <div class="center-body">
        <div class="d-flex jc-end date-style">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
          <el-button type="primary" class="seek-btn">查询</el-button>
        </div>
        <div>
          <el-row type="flex" justify="center">
            <el-col :span="22">
              <div id="linePlot" style="width:100%;height:400px;margin:30px auto;"></div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Line } from "@antv/g2plot";
export default {
  // watch: {
  //   tabsData(news, old) {
  //     console.log(news, old);
  //   },
  // },
  data() {
    return {
      value1: "",
      testData:[
        {
          time:'2020-11-13 08:00:00',
          num:360000,
          name:'总体访问量'
        },
        {
          time:'2020-11-14 08:00:00',
          num:480000,
          name:'总体访问量'
        },
        {
          time:'2020-11-15 08:00:00',
          num:460000,
          name:'总体访问量'
        },
        {
          time:'2020-11-16 08:00:00',
          num:540000,
          name:'总体访问量'
        },
        {
          time:'2020-11-17 08:00:00',
          num:560000,
          name:'总体访问量'
        },
        {
          time:'2020-11-18 08:00:00',
          num:560000,
          name:'总体访问量'
        },
        {
          time:'2020-11-19 08:00:00',
          num:660000,
          name:'总体访问量'
        },
        {
          time:'2020-11-20 08:00:00',
          num:620000,
          name:'总体访问量'
        },
        {
          time:'2020-11-21 08:00:00',
          num:560000,
          name:'总体访问量'
        },
        {
          time:'2020-11-22 08:00:00',
          num:660000,
          name:'总体访问量'
        },
        {
          time:'2020-11-23 08:00:00',
          num:680000,
          name:'总体访问量'
        },
        {
          time:'2020-11-24 08:00:00',
          num:690000,
          name:'总体访问量'
        },
        {
          time:'2020-11-13 08:00:00',
          num:60000,
          name:'市公交集团GPS定位访问量'
        },
        {
          time:'2020-11-14 08:00:00',
          num:50000,
          name:'市公交集团GPS定位访问量'
        },
        {
          time:'2020-11-15 08:00:00',
          num:50000,
          name:'市公交集团GPS定位访问量'
        },
        {
          time:'2020-11-16 08:00:00',
          num:80000,
          name:'市公交集团GPS定位访问量'
        },
        {
          time:'2020-11-17 08:00:00',
          num:90000,
          name:'市公交集团GPS定位访问量'
        },
        {
          time:'2020-11-18 08:00:00',
          num:90000,
          name:'市公交集团GPS定位访问量'
        },
        {
          time:'2020-11-19 08:00:00',
          num:110000,
          name:'市公交集团GPS定位访问量'
        },
        {
          time:'2020-11-20 08:00:00',
          num:80000,
          name:'市公交集团GPS定位访问量'
        },
        {
          time:'2020-11-21 08:00:00',
          num:70000,
          name:'市公交集团GPS定位访问量'
        },
        {
          time:'2020-11-22 08:00:00',
          num:120000,
          name:'市公交集团GPS定位访问量'
        },
        {
          time:'2020-11-23 08:00:00',
          num:90000,
          name:'市公交集团GPS定位访问量'
        },
        {
          time:'2020-11-24 08:00:00',
          num:100000,
          name:'市公交集团GPS定位访问量'
        }
      ]
    };
  },
  mounted() {
    this.getlinePlot();
  },
  methods: {
    getlinePlot() {
      // this.axios
      //   .get(
      //     "https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json"
      //   )
      //   .then((res) => {
      //     console.log(res.data);
          const linePlot = new Line("linePlot", {
            data: this.testData,
            xField: "time",
            yField: "num",
            seriesField: "name",
            yAxis: {
              label: {
                formatter: (v) => v,
              },
            },
            legend: {
              position: "top",
            },
            color: ['#409EFF', '#FE740C'],
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
          // this.linePlot = linePlot;
        // });
    },
  },
};
</script>

<style scoped>
.top-name {
  padding-left: 10px;
  border-left: 5px solid #f36d64;
  font-size: 15px;
}
.date-style{
  padding: 8px;
  background: white;
}
.seek-btn{
  margin: 0 25px 0 10px;
}
</style>
