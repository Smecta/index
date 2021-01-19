<template>
  <div>
    <!-- 待尽调 已尽调 -->
    <el-card>
      <div class="top-menu d-flex jc-between">
        <div class="left">
          <h1>尽调项目</h1>
        </div>
        <div class="search">
          <el-input placeholder="请输入公司名称" v-model="input4">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <div class="right d-flex">
          <div class="btn" v-show="isShow">
            <el-button type="primary">导出数据</el-button>
          </div>

          <el-radio-group v-model="radio1">
            <el-radio-button label="waiting" plain>待尽调</el-radio-button>
            <el-radio-button label="finished" plain>已尽调</el-radio-button>
            <el-radio-button label="uploaded" plain>已上传</el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="body">
        <el-tabs v-model="activeName" class="tabs">
          <el-tab-pane label="待尽调" name="waiting" />
          <el-tab-pane label="已尽调" name="finished" />
          <el-tab-pane label="已上传" name="uploaded" />
        </el-tabs>
      </div>
      <div class="page"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: "",
      radio1: "waiting",
      input4: "",
      activeName: "waiting",
    };
  },
  methods: {},
  watch: {
    // radio1(newval) {
    //   //普通的watch监听
    //   //  console.log("radio1 "+newval, oldVal);
    //   if (newval == "待尽调") {
    //     this.isShow = false;
    //   } else {
    //     this.isShow = true;
    //   }
    // },
    //  b:{//深度监听，可监听到对象、数组的变化
    //      handler(val, oldVal){
    //          console.log("b.c: "+val.c, oldVal.c);
    //      },
    //      deep:true //true 深度监听
    //  }
  },
};
</script>

<style lang="scss" scope>
>>> .el-radio-button__inner{
  background-color: none!important;
}
::v-deep .el-tabs__nav {
  margin-left: 20px!important;
}
::v-deep .el-tabs__header {
  margin: 0!important;
}
::v-deep .el-tabs__nav-wrap::after,
::v-deep .el-tabs__active-bar {
  display: none!important;
}
>>> .el-tabs__item {
  width: 74px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border: 1px solid #ccc;
  padding: 0;
  &.is-active {
    border: 1px solid #1890ff;
  }
}
>>> .el-tabs__item:nth-child(1) {
  border-radius: 4px 0px 0px 4px !important;
}
>>> .el-tabs__item:nth-child(2) {
  border-radius: 0 !important;
}
>>> .el-tabs__item:nth-child(3) {
  border-radius: 0 4px 4px 0 !important;
}

.el-input {
  width: 340px;
}
.right {
  position: relative;
}
.btn {
  position: absolute;
  z-index: 999;
  right: 250px;
}
</style>
