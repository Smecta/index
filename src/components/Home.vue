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
        <el-carousel-item v-for="(item, index) in imgList" :key="index">
          <img class="carousel-img" src="../assets/img/ban1.jpg" alt="" />
          {{ item.id }}
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 卡片数据 -->
    <div class="card-numbers">
      <div class="card-number" v-for="(item, index) in dataList" :key="index">
        <div class="card-top">{{ item.title }}</div>
        <div class="card">
          <div class="card-num">{{ item.num }}</div>
          <div class="card-unit">{{ item.unit }}</div>
        </div>
        <span></span>
      </div>
    </div>
    <!-- 河道 -->
    <div class="hedao">
      <div class="container">
        <div class="card active">
          <div class="img">
            <div class="logo">
              <img src="" alt="" />
            </div>
          </div>
          <div class="title">
            <h1>河道</h1>
            <h2>River course</h2>
          </div>
          <div class="goin">
            <div class="img">
              <div class="arror">
                ->
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <div class="logo">
              <img src="" alt="" />
            </div>
          </div>
          <div class="title">
            <h1>河道</h1>
            <h2>River course</h2>
          </div>
          <div class="goin">
            <div class="img">
              <div class="arror">
                ->
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <div class="logo">
              <img src="" alt="" />
            </div>
          </div>
          <div class="title">
            <h1>河道</h1>
            <h2>River course</h2>
          </div>
          <div class="goin">
            <div class="img">
              <div class="arror">
                ->
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <div class="logo">
              <img src="" alt="" />
            </div>
          </div>
          <div class="title">
            <h1>河道</h1>
            <h2>River course</h2>
          </div>
          <div class="goin">
            <div class="img">
              <div class="arror">
                ->
              </div>
            </div>
          </div>
        </div>

        <div class="left-lunbo lunbo-card">
          <img
            class="mirrorRotateLevel"
            src="../assets/img/ic-lunbo-right.png"
            alt=""
          />
        </div>
        <div class="right-lunbo lunbo-card">
          <img src="../assets/img/ic-lunbo-right.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 地图 -->
    <div class="map">
      <img src="../assets/img/img-ditu.png" alt="" />
    </div>

    <!-- 机构 -->
    <div class="jigou">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>

    <!-- 资源 -->
    <div class="ziyuan">
      <div class="ziyuan-foot">
        <img src="../assets/img/bg-jianbianlantiao.png" alt="" />
      </div>
    </div>
    <!-- 底部 -->
    <div class="home-footer">
      <div class="top">43px</div>
      <div class="bottom">117px</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          id: 0,
          url: "src/assets/img/ban1.jpg",
        },
        {
          id: 1,
          url: "../assets/img/ban1.jpg",
        },
        {
          id: 2,
          url: "../assets/img/ban1.jpg",
        },
      ],
      dataList: [
        {
          title: "存储总量",
          num: "2980",
          unit: "TB",
        },
        {
          title: "累计数据交换量",
          num: "49,3657",
          unit: "次",
        },
        {
          title: "存储总量",
          num: "87,890",
          unit: "MB",
        },
        {
          title: "累计数据交换量",
          num: "56,780",
          unit: "次",
        },
        {
          title: "交换来源单位总数",
          num: "46,570",
          unit: "家",
        },
        {
          title: "数据总量",
          num: "76,570",
          unit: "GB",
        },
        {
          title: "日更新条数",
          num: "34,570",
          unit: "条",
        },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  min-width: 1024px;
  position: relative;
}
.home-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid #000;
  color: #fff;
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

/* 跑马灯样式 */
.carousel-img {
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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* 卡片数据 */
.card-numbers {
  /* display: flex; */
  position: absolute;
  /* top: 100%; */
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  /* display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center; */
  /* width: 1200px; */
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1204px;
  height: 120px;
  background: #fff;
  box-shadow: 0px 0px 10px #999999;
}
.card-number {
  display: flex;
  width: 172px;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.card-number .card {
  display: flex;
  align-items: center;
  padding-top: 8px;
}
.card-number .card .card-num {
  font-family: DINAlternate-Bold;
  font-size: 28px;
  color: #1250c8;
  letter-spacing: 1.2px;
}
.card-number .card .card-unit {
  padding: 4px 0 0 4px;
  font-family: ArialMT;
  font-size: 14px;
  color: #777575;
}

.card-number > span {
  display: inline-block;
  width: 2px;
  height: 40px;
  background: #ccc;
  position: absolute;
  right: 0px;
  top: 10px;
}
.card-number:nth-child(7) > span {
  display: none;
}

/* 河道样式 */
.hedao {
  width: 100%;
  height: 557px;
  background: url("../assets/img/bg-qianlan.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hedao > .container {
  padding-top: 54px;
  /* padding-left:118.5px; */
  /* padding: 124px 120px 80px 118.5px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.hedao .container .card {
  width: 300px;
  height: 353px;
  background: #ffffff;
  border: 1px solid #e2e3e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hedao .container .card:hover {
  background-image: linear-gradient(135deg, #22bcdc 0%, #0427b7 100%);
  box-shadow: 0 10px 24px 0 rgba(16, 51, 198, 0.4);
}
.hedao .container .card.active {
  background-image: linear-gradient(135deg, #22bcdc 0%, #0427b7 100%);
  box-shadow: 0 10px 24px 0 rgba(16, 51, 198, 0.4);
}
.left-lunbo {
  position: absolute;
  top: 50%;
  left: 10px;
}
.lunbo-card {
  width: 56px;
  height: 56px;
  background: #ffffff;
  box-shadow: 0 3px 11px 0 rgba(169, 177, 216, 0.4);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.mirrorRotateLevel {
  transform: rotateY(180deg); /* 水平镜像翻转 */
}
.right-lunbo {
  position: absolute;
  top: 50%;
  right: 10px;
}

/* 地图 */
.map {
  width: 100%;
  height: 483px;
}
.map img {
  width: 100%;
  height: 100%;
}

/* 机构 */
.jigou {
  height: 428px;
}
.jigou > .top {
  height: 258px;
  background: url("../assets/img/bg-jigou.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.jigou > .bottom {
  height: 170px;
  background: url("../assets/img/bg-zijigou.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
/* 资源 */
.ziyuan {
  position: relative;
  height: 795px;
  background: url("../assets/img/bg-ziyuan.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.ziyuan .ziyuan-foot {
  /* width: 100%; */
  /* background: url("../assets/img/bg-ziyuan.png");
  background-repeat:no-repeat ;
  background-size: 100% 100%; */
  position: absolute;
  left: 0;
  bottom: 0;
}
/* 底部 */
.home-footer {
  height: 160px;
  background: #102537;
  color: #d3dce6;
}
.home-footer .top {
  height: 43px;
  opacity: 0.5;
  border-bottom: 1px solid #ffffff;
}
.home-footer .bottom {
  height: 117px;
}
</style>
