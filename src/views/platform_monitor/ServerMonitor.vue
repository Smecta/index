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
            <ServiceTables :name="navName" v-if="item.active" />
            <el-table
              v-show="item.status === true"
              :data="item.data"
              style="width: 100%"
              height="400"
            >
              <el-table-column prop="order" label="序号" width="80" />
              <el-table-column prop="project" label="所属项目" />
              <el-table-column prop="operatingSystem" label="操作系统" />
              <el-table-column prop="IPaddress" label="IP地址" />
              <el-table-column prop="configureIntroduction" label="配置简介" />
              <el-table-column prop="operation" label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="detail(scope.row)"
                    >查看详细</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
        <!-- 分页布局 -->
        <div class="d-flex jc-end mt-2" v-if="total">
          <el-pagination
            :current-page="currentPage4"
            :page-size="10"
            layout="total, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardHeader from "../../components/CardHeader";
import { getServerList } from "../../api/ServerMonitor";
export default {
  components: {
    CardHeader,
  },
  mounted() {
    // this.getTabDemo();
    // this.getServerNavDemo();
  },
  data() {
    return {
      // 等接口联调 进行数据拼接 具体方法实现
      tabsData: "",
      tabsData1: [
        {
          label: "服务器列表",
          name: "APIvisits",
          tableName: "访问量",
          tableData: "visits",
          status: true,
          order: 1,
          data: [
            {
              order: 1,
              project: "冰山项目",
              operatingSystem: "Windowserver2012R2",
              IPaddress: "192.168.0.110",
              configureIntroduction: "双核四进程",
            },
            {
              order: 2,
              project: "冰岛项目",
              operatingSystem: "Linux",
              IPaddress: "192.168.0.112",
              configureIntroduction: "双核四进程",
            },
            {
              order: 3,
              project: "飞碟项目",
              operatingSystem: "Macos",
              IPaddress: "192.168.0.113",
              configureIntroduction: "双核四进程",
            },
            {
              order: 4,
              project: "飞碟项目",
              operatingSystem: "Macos",
              IPaddress: "192.168.0.113",
              configureIntroduction: "双核四进程",
            },
            {
              order: 5,
              project: "飞碟项目",
              operatingSystem: "Macos",
              IPaddress: "192.168.0.113",
              configureIntroduction: "双核四进程",
            },
            {
              order: 6,
              project: "飞碟项目",
              operatingSystem: "Macos",
              IPaddress: "192.168.0.113",
              configureIntroduction: "双核四进程",
            },
            {
              order: 7,
              project: "飞碟项目",
              operatingSystem: "Macos",
              IPaddress: "192.168.0.113",
              configureIntroduction: "双核四进程",
            },
            {
              order: 8,
              project: "飞碟项目",
              operatingSystem: "Macos",
              IPaddress: "192.168.0.113",
              configureIntroduction: "双核四进程",
            },
          ],
        },
        {
          label: "磁盘列表",
          name: "APItime",
          tableName: "耗时",
          tableData: "times",
          status: true,
          order: 2,
          data: [
            {
              order: 1,
              project: "冰山计划",
              operatingSystem: "windowserver2012R2",
              IPaddress: "192.168.0.110",
              configureIntroduction: "双核四进程",
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
      ],
      navName: "",
      tabData: "",
      serverTabData: "", // 服务器列表数据
      total: 0, //总数量
      activeName: "APIvisits",
      dialogVisible: false,
      currentPage4: 4,
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
    // async getTabDemo() {
    //   let params = {
    //     page: this.page,
    //     limit: this.limit,
    //   };
    //   const res = await this.$http.get(
    //     "https://easy-mock.com/mock/5fc09b67bbfbda51199fe5ff/demo/getInfoList",
    //     {
    //       params,
    //     }
    //   );
    //   this.total = res.data.total;
    //   this.serverTabData = res.data.data;
    //   console.log(res.data);
    // },
    async getServerNavDemo() {
      const res = await this.$http.get(
        "https://easy-mock.com/mock/5fc09b67bbfbda51199fe5ff/demo/getServerNar",
        {}
      );
      // console.log(res.data.data);
      this.tabsData = res.data.data;
      // res.data.data.map((v) => {
      //   console.log(v);
      // });
    },

    detail(row) {
      //查看详情
      // this.$router.push({ path: "mediaContent/" + row.id });
      console.log(row.order);
      this.$router.push({ path: "/index/ServerMonitor/" + row.order });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    show_upsPage(event) {
      // console.log(tab, event);
      // console.log(this.tabsData);
      // console.log(event.name);
      this.tabsData.map(item =>{
        console.log(item);
        if(item.name == event.name){
          this.navName = event.name
          console.log(this.navName);
          item.active = true
        }else{
          this.navName = event.name
          item.active = false
        }
      })
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
.top-name {
  padding-left: 10px;
  border-left: 5px solid #f36d64;
  font-size: 15px;
}
</style>
