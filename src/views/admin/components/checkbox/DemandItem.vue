<template>
  <div class="item-wrapper">
    <div class="check">
      <el-checkbox :label="data.id" :key="data.id"></el-checkbox>
    </div>
    <div class="right">
      <div class="title">公司名：{{data.title}}</div>
      <div class="code">企业信用代码：{{data.code}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    data:{
      type:Object,
      required:true
    }
  }
};
</script>
<style lang="scss" scoped>
::v-deep {
  .check {
    .el-checkbox__label {
      display: none;
    }
  }
}
.item-wrapper {
  width: 100%;
  padding: 20px;
  color: rgba(80, 80, 80, 1);
  background:#fff;
  font-size: 14px;
  line-height: 150%;
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid #dcdcdc;
  margin-bottom: 10px;
  .check {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .right{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 25px;
      .title{
        margin: 0 20px 4px 0;
      }
  }
}
</style>
