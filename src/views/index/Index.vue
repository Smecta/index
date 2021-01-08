<template>
  <div class="home">
    <Header />
    <el-container style="height: 88vh;">
      <el-aside
        width="300"
        style="background-color: rgb(238, 241, 246);overflow:hidden"
      >
        <el-menu
          router
          style="height: 100vh;"
          :default-openeds="['1', '3', '4']"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#fff"
          :default-active="$route.path"
        >
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message" />数据源监控</template
            >

            <el-menu-item index="/index/dataSource">数据源监控</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-message" />共享监控</template
            >

            <el-menu-item index="/index/ServiceMonitor">服务监控</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"
              ><i class="el-icon-message" />平台监控</template
            >

            <el-menu-item index="/index/ServerMonitor">服务器监控</el-menu-item>
            <el-menu-item index="/index/DatabaseMonitor"
              >数据库监控</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view :key="$route.path" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      activerouter: "",
    };
  },
  mounted() {
    // 获取地址栏中的路由，设置elementui中的导航栏选中状态
    // this.activerouter = window.location.pathname
  },
};
</script>
<style scope>
.home {
  overflow: hidden;
}
/* .el-menu-item.is-active {
  background-color: #D95F56 !important;
} */
</style>
