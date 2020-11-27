<template>
  <div class="service">
    <div class="service-monitor-card">
      <div class="top-title d-flex jc-between ai-center">
        <div class="top-right fs-xl">
          <div class="top-name">服务监控</div>
        </div>
        <div class="top-right fs-md">
          <el-button @click="$router.replace('/index/ServiceMonitor')"
            >返回</el-button
          >
        </div>
      </div>
      <div class="center-body">
        <div>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
          <el-button type="primary">查询</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    tabsData(news, old) {
      console.log(news, old);
    },
  },
  data() {
    return {
        value1:''
    };
  },
  methods: {},
};
</script>

<style scoped>
.top-name {
  padding-left: 10px;
  border-left: 5px solid #f36d64;
  font-size: 15px;
}
</style>
