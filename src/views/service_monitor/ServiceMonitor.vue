<template>
  <div class="service">
    <div class="service-monitor-card">
      <CardHeader cardTitle="服务监控"></CardHeader>
      <div class="top-btn fs-md d-flex jc-end">
          <el-button type="danger" @click="manage">服务管理</el-button>
      </div>
      <div class="center-body">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane
            v-for="(item, index) in tabsData"
            :key="index"
            :label="item.label"
            :name="item.name"
          >
            <el-table
              v-show="item.status === true"
              :data="item.data"
              style="width: 100%"
            >
              <el-table-column prop="order" label="序号" width="80" />
              <el-table-column
                prop="sourceOrganization"
                label="来源机构"
                width="280"
              />
              <el-table-column
                prop="interfaceName"
                label="接口名称"
                width="280"
              />
              <el-table-column
                :prop="item.tableData"
                :label="item.tableName"
                width="180"
              />
              <el-table-column prop="type" label="类型" width="180" />
              <el-table-column
                fixed="right"
                prop="operation"
                label="操作"
                width="180"
              >
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="small"
                    @click="$router.push(`/index/ServiceMonitor/${scope.row.order}`)"
                    >图表监控</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <el-dialog
      title="服务管理"
      :visible="dialogVisible"
      width="50%"
      @close="closeDialog"
    >
      <el-table :data="tabsData">
        <el-table-column label="序号" prop="order" />
        <el-table-column label="名称" prop="label" />
        <el-table-column label="状态" prop="status">
          <template slot-scope="scope">
            <span>
              {{ scope.row.status === true ? "启用" : "禁用" }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" prop="status">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.status" />
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import CardHeader from "../../components/CardHeader"
export default {
  components:{
    CardHeader
  },
  data() {
    return {
      // 等接口联调 进行数据拼接 具体方法实现
      tabsData: [
        {
          label: "API访问量",
          name: "APIvisits",
          tableName: "访问量",
          tableData: "visits",
          status: true,
          order: 1,
          data: [
            {
              order: 1,
              sourceOrganization: "成都市水务局",
              interfaceName: "市水务系统GPS定位",
              visits: "1000",
              type: "http",
            },
            {
              order: 2,
              sourceOrganization: "成都市水务局",
              interfaceName: "市水务系统GPS定位",
              visits: "2000",
              type: "http",
            },
            {
              order: 3,
              sourceOrganization: "成都市水务局",
              interfaceName: "市水务系统GPS定位",
              visits: "1000",
              type: "http",
            },
            {
              order: 4,
              sourceOrganization: "成都市水务局",
              interfaceName: "市水务系统GPS定位",
              visits: "2000",
              type: "http",
            },
          ],
        },
        {
          label: "API耗时",
          name: "APItime",
          tableName: "耗时",
          tableData: "times",
          status: true,
          order: 2,
          data: [
            {
              order: 1,
              sourceOrganization: "222成都市水务局",
              interfaceName: "市水务系统GPS定位",
              times: "21.29s",
              type: "http",
            },
            {
              order: 2,
              sourceOrganization: "222成都市水务局",
              interfaceName: "市水务系统GPS定位",
              times: "21.29s",
              type: "http",
            },
          ],
        },
        {
          label: "API成功率",
          name: "APIsuccess",
          tableName: "成功率",
          tableData: "success",
          status: true,
          order: 3,
          data: [
            {
              order: 1,
              sourceOrganization: "333成都市水务局",
              interfaceName: "市水务系统GPS定位",
              success: "70%",
              type: "http",
            },
            {
              order: 2,
              sourceOrganization: "333成都市水务局",
              interfaceName: "市水务系统GPS定位",
              success: "60%",
              type: "http",
            },
          ],
        },
        {
          label: "API申请量",
          name: "APIapply",
          tableName: "申请量",
          tableData: "apply",
          status: true,
          order: 4,
          data: [
            {
              order: 1,
              sourceOrganization: "444成都市水务局",
              interfaceName: "市水务系统GPS定位",
              apply: "34345",
              type: "http",
            },
            {
              order: 2,
              sourceOrganization: "444成都市水务局",
              interfaceName: "市水务系统GPS定位",
              apply: "98945",
              type: "http",
            },
          ],
        },
      ],
      activeName: "APIvisits",
      dialogVisible: false,
    };
  },
  methods: {
    handleClick(tab) {
      // console.log(tab, event);
      console.log(tab.paneName);
    },
    manage() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style scoped>
.service-monitor-card{
  position:relative
}
.top-btn{
  position: absolute;
  right:0;
  top:0;
}
</style>
