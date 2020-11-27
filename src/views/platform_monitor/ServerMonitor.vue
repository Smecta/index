<template>
  <div class="service">
    <div class="service-monitor-card ">
      <CardHeader cardTitle="服务器监控"></CardHeader>
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
              <el-table-column prop="project" label="所属项目" />
              <el-table-column prop="operatingSystem" label="操作系统" />
              <el-table-column prop="IPaddress" label="IP地址" />
              <el-table-column prop="configureIntroduction" label="配置简介" />

              <!-- <el-table-column
                :prop="item.tableData"
                :label="item.tableName"
                width="180"
              >
              </el-table-column> -->
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
        <div class="d-flex jc-end mt-2">
          <el-pagination
            :current-page="currentPage4"
            :page-size="10"
            layout="total, prev, pager, next, jumper"
            :total="100"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardHeader from "../../components/CardHeader"
import { getServerList } from "../../api/ServerMonitor"
export default {
  components:{
    CardHeader
  },
  mounted(){
    this.getTab();
  },
  data() {
    return {
      // 等接口联调 进行数据拼接 具体方法实现
      tabsData: [
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
      activeName: "APIvisits",
      dialogVisible: false,
      currentPage4: 4,
      page:1,
      limit:10
    };
  },
  methods: {
    async getTab(){
      let res = await getServerList({
        page:this.page,
        limit:this.limit
      })
      console.log(res);
    },
    detail(row) {
      //查看详情
      // this.$router.push({ path: "mediaContent/" + row.id });
      console.log(row.order);
      this.$router.push({ path: "/index/ServerMonitor/"+row.order});
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
