<template>
  <div>
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router >
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>请求方式</template
            >
            <el-menu-item-group>
              <template slot="title">方式一</template>
              <el-menu-item index="axios">轮询方式</el-menu-item>
              <el-menu-item index="websocket">websocket方式</el-menu-item>
              <el-menu-item index="scroll">无缝播报</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-message"></i>antv图表demo</template
            >
            <el-menu-item-group>
              <template slot="title">图表一</template>
              <el-menu-item index="antvDemo">antv快速上手</el-menu-item>
            </el-menu-item-group>
             <el-menu-item-group>
              <template slot="title">图表二</template>
              <el-menu-item index="antvG2Demo">antv G2 快速上手</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">图表三</template>
              <el-menu-item index="echartsDemo">Echarts图表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"
              ><i class="el-icon-message"></i>fontdemo演示</template
            >
            <el-menu-item-group>
              <template slot="title">fontawesome</template>
              <el-menu-item index="fontDemo">fontDemo</el-menu-item>
            </el-menu-item-group>

          </el-submenu>
          <el-submenu index="5">
            <template slot="title"
              ><i class="el-icon-message"></i>tabs标签页</template
            >
            <el-menu-item-group>
              <template slot="title">elementUI</template>
              <el-menu-item index="tabsDemo">tabsDemo</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">elementUI</template>
              <el-menu-item index="tabsDemo2">tabsDemo2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">Routers</template>
              <el-menu-item index="RouterDemo">RouterDemo</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-message"></i>slot插槽</template>
            <el-menu-item-group>
              <template slot="title">单个插槽/匿名插槽</template>
              <el-menu-item index="Slot">单个slot</el-menu-item>
            </el-menu-item-group>
          </el-submenu>  
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-message"></i>小功能</template>
            <el-menu-item-group>
              <template slot="title">一些组件的小应用</template>
              <el-menu-item index="checkAll">CheckBox全选</el-menu-item>
              <el-menu-item index="select">select选择器</el-menu-item>
              <el-menu-item index="scroll">无缝播报</el-menu-item>
              <el-menu-item index="SelectDemo">SelectDemo</el-menu-item>
              <el-menu-item index="banner">banner轮播图</el-menu-item>
              <el-menu-item index="video">视频流播放</el-menu-item>
            </el-menu-item-group>
          </el-submenu>    
        </el-menu>
      </el-aside>

      <el-container>
        <!-- <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header> -->

        <el-main>
            <router-view></router-view>
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>
<style>
</style>
