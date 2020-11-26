<template>
  <div class="service">
    <div class="service-monitor-card">
      <div class="top-title d-flex jc-between ai-center">
        <div class="top-right fs-xl">
          <div class="top-name">服务监控</div>
        </div>
        <div class="top-right fs-md">
          <el-button>服务管理</el-button>
        </div>
      </div>
      <div class="center-body">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane
            v-for="(item, index) in tabsData"
            :key="index"
            :label="item.label"
            :name="item.name"
          >
            <el-table :data="item.data" style="width: 100%">
              <el-table-column
                prop="order"
                label="序号"
                width="80"
              ></el-table-column>
              <el-table-column
                prop="sourceOrganization"
                label="来源机构"
                width="280"
              >
              </el-table-column>
              <el-table-column
                prop="interfaceName"
                label="接口名称"
                width="280"
              >
              </el-table-column>
              <el-table-column prop="visits" label="访问量" width="180">
              </el-table-column>
              <el-table-column prop="type" label="类型" width="180">
              </el-table-column>
              <el-table-column
                fixed="right"
                prop="operation"
                label="操作"
                width="180"
              >
                <template slot-scope="scope">
                  <el-button
                    @click="$router.push(`/ServiceMonitor/${scope.row._id}`)"
                    type="text"
                    size="small"
                    >图表监控</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabsData: [
        {
          label: "API访问量",
          name: "APIvisits",
          data: [
            {
              order: 1,
              sourceOrganization: "成都市水务局",
              interfaceName: "市水务系统GPS定位",
              visits: "21.29s",
              type: "http",
            },
            {
              order: 2,
              sourceOrganization: "成都市水务局",
              interfaceName: "市水务系统GPS定位",
              visits: "21.29s",
              type: "http",
            },
          ],
        },
        {
          label: "API耗时",
          name: "APItime",
        },
        {
          label: "API成功率",
          name: "APIsuccess",
        },
        {
          label: "API申请量",
          name: "APIapply",
        },
      ],
      activeName: "APIvisits",
      tableData: [
        {
          order: 1,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 2,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 1,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 2,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 1,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 2,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 1,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 2,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 1,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 2,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 1,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 2,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 1,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 2,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 1,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
        {
          order: 2,
          sourceOrganization: "成都市水务局",
          interfaceName: "市水务系统GPS定位",
          visits: "21.29s",
          type: "http",
        },
      ],
    };
  },
  methods: {
    handleClick(tab) {
      // console.log(tab, event);
      console.log(tab.paneName);
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
/* .service-monitor-card{
    margin:0px;
    padding:0px;
} */
/* .top-title{
    display:flex;
    justify-content: space-between;
    align-items: center;
} */
/* .center-body {
  height: 400px;
} */
</style>
