<template>
  <el-card>
      <div class="title">select选择器</div>
      <div class="btn-box">
          <el-button @click="baseVisible=true">基础选择框</el-button>
          <el-button @click="demandVisible=true">需求发布</el-button>
          <el-button @click="shareVisible=true">团队共享</el-button>
      </div>
      <div>
          <base-dialog :show-dialog.sync="baseVisible" />
          <demand-dialog :show-dialog.sync="demandVisible"/>
          <share-dialog :show-dialog.sync="shareVisible"/>
      </div>
      <div class="summary">
          总结：
      </div>
  </el-card>
</template>
<script>
import BaseDialog from './BaseDialog.vue';
import DemandDialog from "./DemandDialog";
import ShareDialog from "./ShareDialog";
export default {
  components: {
    DemandDialog,
    ShareDialog,
    BaseDialog
  },
  data(){
      return{
          baseVisible:false,
          demandVisible:false,
          shareVisible:false
      }
  }
};
</script>
<style scoped>
.title{
    font-size: 18px;
    font-weight: bold;
    margin: 20px 0;
}
.btn-box{
    margin-bottom: 20px;
}
</style>
