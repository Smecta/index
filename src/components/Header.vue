<template>
  <div class="header">
    <div class="header-left">
      <img src="@/assets/img/img-logo.png" alt="" />
      <div>资源数据平台监控系统</div>
    </div>
    <div class="header-right">
      <p>test</p>
      <el-button size="mini" type="danger">登出</el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  display: flex;
  height:12vh;
  background: #545c64;
  justify-content: space-between;
  padding:0 20px;
  align-items: center;
  .header-left {
    display: flex;
    align-items: center;
    img {
      width: 56px;
      height: 55px;
    }
    div {
      font-family: MicrosoftYaHeiUI-Bold;
      font-size: 18px;
      letter-spacing: 1.5px;
      padding-left: 8px;
      color: #fff;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    justify-items: center;
    p{
        color:#fff;
        padding-right:12px;
    }
  }
}

</style>
