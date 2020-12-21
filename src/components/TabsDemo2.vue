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
            <el-radio-button label="待尽调" plain></el-radio-button>
            <el-radio-button label="已尽调" plain></el-radio-button>
          </el-radio-group>
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
      isShow:"",
      radio1: '待尽调',
      input4:'',
    }
  },
  methods:{
    
  },
  watch:{
     radio1(newval){//普通的watch监听
        //  console.log("radio1 "+newval, oldVal);
         if(newval == "待尽调"){
           this.isShow = false
         }else{
           this.isShow = true
         }
     },
    //  b:{//深度监听，可监听到对象、数组的变化
    //      handler(val, oldVal){
    //          console.log("b.c: "+val.c, oldVal.c);
    //      },
    //      deep:true //true 深度监听
    //  }
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
