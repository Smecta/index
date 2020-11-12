<template>
  <div class="home">
    <div class="home-header">
      <div class="header-left">
        <div class="header-logo">logo</div>
        <div class="header-title">成都市水务数据资源交换开放门户</div>
      </div>
      <div class="header-right">
        <div class="header-nav">
          <a href="#">首页</a>
          <a href="#">资源目录</a>
          <a href="#">数据目录</a>
          <a href="#">用户工作台</a>
        </div>
        <div class="header-search">
          <!-- <i class="header-line"></i> -->
          <input type="text" placeholder="搜索服务内容" />
          <img src="" alt="" />
          <!-- <i class="header-line"></i> -->
        </div>
        <div class="header-login">登录</div>
        <div class="header-zhuce">立即注册</div>
      </div>
    </div>
    <div class="home-body">
      <el-carousel :interval="5000" arrow="always" height="624px">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img class="carousel-img" src="../assets/img/ban1.jpg" alt="">
          {{item.id}}
        </el-carousel-item>
      </el-carousel>
      
    </div>
    <div class="card-list">
          <div class="card-item">
              <div class="card-top">
                  存储总量
              </div>
              <div class="card-bottom">
                <div class="card-number">2980</div>
                <div class="card-unit">TB</div>
              </div>
          </div>
      </div>
    <div class="home-fooder"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            imgList:[
                {
                    id:0,
                    url:'src/assets/img/ban1.jpg'
                },
                {
                    id:1,
                    url:'../assets/img/ban1.jpg'
                },
                {
                    id:2,
                    url:'../assets/img/ban1.jpg'
                },
            ]
        }
    }
};
</script>

<style scoped>
.home {
  min-width: 1024px;
  position: relative;
}
.home-header {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  z-index:999;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid #000;
  color:#fff;
}
.header-left {
  display: flex;
  margin-left: 70px;
}
.header-logo {
  margin-right: 10px;
}
.header-title {
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.2px;
}
.header-right {
  display: flex;
}
.header-nav {
  display: flex;
}
.header-nav a {
  list-style-type: none;
  margin-right: 30px;
}
.header-search::before {
  content: "";
}
.header-line {
  display: inline-block;
  height: 100%;
  border: 1 solid #000;
}
.header-search input {
  outline-style: none;
  border: 0;
}
.home-body{

}
/* 跑马灯样式 */
.carousel-img{
    width: 100%;
    height: 100%;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /* 卡片数据 */
  .card-list{
      display: flex;
      position: absolute;
      top:100%;
      left:50%;
      transform: translate(-50%,-50%);
      z-index:999;
      /* width: 1200px; */
      width: 90%;
      height: 120px;
      background: #fff;
      box-shadow: 0px 0px 10px #999999;
  }
  .card-item{
      display: flex;
      /* flex-direction: column; */
      justify-content: space-around;
      align-items: center;
  }
  .card-bottom{
      display: flex;

  }
</style>
