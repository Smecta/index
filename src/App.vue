<template>
  <div id="app">
    <transition
      :duration="1000"
      mode="out-in"
      appear
      enter-active-class="animated animate__zoomIn"
      leave-active-class="animated animate__zoomOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  margin: 0 auto;
}

/* 修改elementui轮播图箭头 */

.arrow-style .el-carousel__arrow--left {
  left: 120px;
}
.arrow-style .el-carousel__arrow--right {
  right: 120px;
}
.arrow-style .el-carousel__arrow {
  border-radius: 0;
  background: #ffffff20; 
}
.arrow-style .el-icon-arrow-left,.el-icon-arrow-right{
  font-size:25px;
}


.el-radio-button__inner{
  background-color: none;
}
</style>
