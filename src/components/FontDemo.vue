<template>
  <div>
    <div class="fontawesome">
      <i class="fa fa-windows"></i>
      <i class="fa fa-apple"></i>
      <i class="fa fa-wechat"></i>
      <i class="fa fa-github"></i>
    </div>
    <div>使用moment.js进行日期格式化：</div>
    <div>{{ nowDate }}</div>
    <el-button @click="change">
      格式化
    </el-button>
    <div>{{newDate}}</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      nowDate: "2020-12-07T10:11:05.000+00:00", //当前时间
      newDate:''
    };
  },
  created() {
  },
  methods: {
    change(){
      let newDate = this.nowDate
      this.newDate = moment(newDate).format("YYYY-MM-DD HH:mm:ss")
      // console.log(moment(this.nowData).format("YYYY-MM-DD HH:mm:ss"));
    }
  }
};
</script>

<style>
.fontawesome {
  font-size: 80px;
}
.fa {
  margin-right: 24px;
}
.fa-windows {
  color: skyblue;
}
.fa-wechat {
  color: green;
}
</style>
