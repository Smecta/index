<template>
  <div class="home">
    <Header></Header>
    <el-container style="height: 88vh;">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          router
          style="height: 100vh;"
          :default-openeds="['1', '3']"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-active="activerouter"
        >
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>数据源监控</template
            >
            <el-menu-item-group>
              <el-menu-item index="/index/dataSource">数据源监控</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-message"></i>共享监控</template
            >
            <el-menu-item-group>
              <el-menu-item index="/index/ServiceMonitor"
                >服务监控</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
    data(){
        return{
            activerouter:"",
        }
    },
  components: {
    Header,
  },
  mounted() {
    //获取地址栏中的路由，设置elementui中的导航栏选中状态
    this.activerouter = window.location.pathname;
  },
};
</script>
<style>
.el-menu-item.is-active {
  background-color: #00b4aa !important;
}
</style>
