<template>
  <div class="service">
    <div class="service-monitor-card ">
      <CardHeader cardTitle="服务器监控"></CardHeader>
      <div class="center-body">
        <el-tabs v-model="activeName" @tab-click="show_upsPage">
          <el-tab-pane
            v-for="(item, index) in tabsData"
            :key="index"
            :label="item.label"
            :name="item.name"
          >
            <el-table
              v-show="total"
              :data="serverTabData"
              style="width: 100%"
              height="400"
            >
              <el-table-column prop="order" label="序号" width="80" />
              <el-table-column prop="project" label="所属项目" width="250" />
              <el-table-column prop="operatingSystem" label="操作系统" width="250"/>
              <el-table-column prop="IPaddress" label="IP地址" width="250"/>
              <el-table-column prop="configureIntroduction" label="配置简介" width="250"/>
              <el-table-column prop="operation" label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="detail(scope.row)"
                    >查看详细</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <!-- 分页布局 -->
            <div class="d-flex jc-end mt-2" v-if="total">
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
  </div>
</template>

<script>
import CardHeader from "@/components/CardHeader";
import { getServerList } from "@/api/ServerMonitor";
export default {
  components: {
    CardHeader,
  },
  mounted() {
    this.getServerNavDemo();
    this.getTabDemo(1);
  },
  data() {
    return {
      tabsData: null, //导航数据 服务器列表 磁盘列表
      serverTabData: null, // 服务器列表数据
      total: 0, //列表总数量
      activeName: "ServerList",  //默认选中
      //dialogVisible: false,
      currentPage4: 1,
      page: 1,
      limit: 10,
    };
  },
  methods: {
    async getTab() {
      let res = await getServerList({
        page: this.page,
        limit: this.limit,
      });
      console.log(res);
    },
    // 获取 easy-mock 数据
    async getTabDemo(page) {
      let params = {
        page: page,
        limit: this.limit,
      };
      const res = await this.$http.get(
        "https://easy-mock.com/mock/5fc09b67bbfbda51199fe5ff/demo/getInfoList",
        {
          params,
        }
      );
      console.log(res);
      this.total = res.data.total;
      this.serverTabData = res.data.data;
      console.log(res.data.data);
    },
    async getServerNavDemo() {
      const res = await this.$http.get(
        "https://easy-mock.com/mock/5fc09b67bbfbda51199fe5ff/demo/getServerNar"
      );
      this.tabsData = res.data.data;
    },
    async getCipanNavDemo(page) {
      let params = {
        page: page,
        limit: this.limit,
      };
      const res = await this.$http.get(
        "https://www.easy-mock.com/mock/5fc09b67bbfbda51199fe5ff/demo/getInfoList_copy_1606637282013",
        {
          params,
        }
      );

      this.total = res.data.total;
      this.serverTabData = res.data.data;
    },
    detail(row) {
      //查看详情
      console.log(row.order);
      this.$router.push({ path: "/index/ServerMonitor/" + row.order });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.getTabDemo(val);
    },
    show_upsPage(tab) {
      console.log(tab);
      if (tab.name === "ServerList") {
        this.getTabDemo(1);
      } else {
        this.getCipanNavDemo(1);
      }
    },
    // manage() {
    //   this.dialogVisible = true;
    // },
    // closeDialog() {
    //   this.dialogVisible = false;
    // },
  },
};
</script>

<style scoped>
.top-name {
  padding-left: 10px;
  border-left: 5px solid #f36d64;
  font-size: 15px;
}
</style>
