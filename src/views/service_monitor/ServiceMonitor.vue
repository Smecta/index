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
            v-for="(item, index) in tabsData1"
            :key="index"
            :label="item.label"
            :name="item.name"
          >
            <el-table
              v-show="item.status === true"
              :data="item.data"
              style="width: 100%"
            >
              <el-table-column type="index" label="序号" :index="indexMethod">
              </el-table-column>

              <el-table-column prop="order" label="序号" />
              <el-table-column prop="sourceOrganization" label="来源机构" />
              <el-table-column prop="interfaceName" label="接口名称" />
              <el-table-column :prop="item.tableData" :label="item.tableName" />
              <el-table-column prop="type" label="类型" />
              <el-table-column fixed="right" prop="operation" label="操作">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="small"
                    @click="
                      $router.push(`/index/ServiceMonitor/${scope.row.order}`)
                    "
                    >图表监控</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <!-- 分页布局 -->
            <div class="d-flex jc-end mt-2">
              <el-pagination
                :current-page="currentPage4"
                :page-size="limit"
                layout="total, prev, pager, next, jumper"
                :total="total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
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
      <el-table :data="tabsData1">
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
import CardHeader from "../../components/CardHeader";
export default {
  components: {
    CardHeader,
  },
  data() {
    return {
      // 等接口联调 进行数据拼接 具体方法实现
      tabsData1: null,
      tabsData: [
        {
          label: "API访问量",
          name: "APIvisits",
          tableName: "访问量",
          tableData: "visits",
          status: true,
          order: 1,
        },
        {
          label: "API耗时",
          name: "APItime",
          tableName: "耗时",
          tableData: "times",
          status: true,
          order: 2,
        },
        {
          label: "API成功率",
          name: "APIsuccess",
          tableName: "成功率",
          tableData: "success",
          status: true,
          order: 3,
        },
        {
          label: "API申请量",
          name: "APIapply",
          tableName: "申请量",
          tableData: "apply",
          status: true,
          order: 4,
        },
      ],
      activeName: "APIvisits",
      dialogVisible: false,
      total: 0, //列表总数量
      currentPage4: 1,
      page: 1,
      limit: 10,
    };
  },
  mounted() {
    this.getList(1);
  },
  methods: {
    indexMethod(index){
      return index + 1
    },
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
    // 获取模拟假数据列表
    async getList(page) {
      let params = {
        page: page,
        limit: 10,
      };
      const res = await this.$http.get(
        "https://easy-mock.com/mock/5fc09b67bbfbda51199fe5ff/demo/sreviceList",
        {
          params,
        }
      );
      console.log(res.data.data);
      // 拼接数据
      this.tabsData.map((v) => {
        // console.log(v);
        v.data = res.data.data;
      });
      this.tabsData1 = this.tabsData;
      this.total = res.data.total;
      // console.log(this.tabsData);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      // this.getTabDemo(val);
      this.getList(val);
      this.currentpage4 = val;
    },
  },
};
</script>

<style scoped>
.service-monitor-card {
  position: relative;
}
.top-btn {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
