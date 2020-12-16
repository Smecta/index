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
          
          <el-button-group>
            <el-button plain @click="wait">待尽调</el-button>
            <el-button plain @click="done">已尽调</el-button>
          </el-button-group>
        </div>
      </div>
      <div class="body"></div>
      <div class="page"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isShow:""
    }
  },
  methods:{
    wait(){
      this.isShow = false
    },
    done(){
      this.isShow = true
    }
  }

};
</script>

<style>
.el-input {
    width: 340px;
  }
  .right{
    position: relative;
  }
  .btn{
    position: absolute;
    z-index: 999;
    right:250px;
  }
</style>
