<template>
  <div class="service">
    <div class="service-monitor-card">
      <!-- 头部组件 -->
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
            <!-- 表格页面 -->
            <el-table
              :data="item.data"
              style="width: 100%"
            >
              <el-table-column type="index" label="序号" :index="indexMethod">
              </el-table-column>
              <el-table-column prop="sourceOrganization" label="来源机构" />
              <el-table-column prop="interfaceName" label="接口名称" />
              <el-table-column :prop="item.name" :label="item.label" />
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
            <!-- 分页标签  -->
            <div class="d-flex jc-end mt-2">
              <el-pagination
                :current-page.sync="currentPage[item.name]"
                :page-size="limit"
                layout="total, prev, pager, next, jumper"
                :total="total"
                @current-change="handleCurrentChange"
              />
            </div>
          </el-tab-pane>
        </el-tabs>
        
      </div>
    </div>
    <!-- 管理tabs页面 -->
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
import CardHeader from "@/components/CardHeader";
export default {
  components: {
    CardHeader,
  },
  data() {
    return {
      tabsData:[
       
  
      ],
      ListData:null,
      activeName: sessionStorage.getItem('activeName') || "APIvisits",
      dialogVisible: false,
      total: 0, //列表总数量
      currentPage: JSON.parse(sessionStorage.getItem('curPage')) || {
        APIvisits: 1,
        APItime: 1,
        APIsuccess: 1,
        APIapply: 1
      },
      page: 1,
      limit: 10,
    };
  },
  mounted() {
      this.getNavList()
  },
  methods: {
    indexMethod(index) {
      return index + 1;
    },

    // QIE HUA  TAB 
    handleClick(tab) {
      sessionStorage.setItem('activeName',tab.name)
      console.log(tab.paneName);
    },
    manage() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    // 模拟获取假数据导航nav
    async getNavList(){
      // this.activeName = sessionStorage.setItem('activeTab') 
      const res = await this.$http.get("https://easy-mock.com/mock/5fc09b67bbfbda51199fe5ff/demo/service/nav")
      console.log(res);
      this.tabsData = res.data.data
      this.getList()
    },

    // 获取模拟假数据列表
    async getList() {
      let params = {
        page: this.currentPage,
        limit: this.limit,
      };
      // 接口偶尔会挂
      const res = await this.$http.get(
        "https://easy-mock.com/mock/5fc09b67bbfbda51199fe5ff/demo/sreviceList",
        {
          params,
        }
      );
      // let res = this.data
      this.total = res.data.total;
      // console.log(res.data);
      let data = res.data.data;
      this.tabsData = this.tabsData.map((item) => {
          return {...item,data};
      });
    },
   // 我恢复了 不搞了 太麻烦了 放弃i了 睡觉了你也早点睡吧
     handleCurrentChange(val) {
      console.log(val);
      sessionStorage.setItem('curPage',JSON.stringify(this.currentPage))
      this.getNavList()
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
