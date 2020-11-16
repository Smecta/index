<template>
  <div class="home">
    <!-- 头部 -->
    <div class="header-page">
      <div class="header-left">
        <div class="header-logo">
          <img src="../assets/img/img-logo.png" alt="" />
        </div>
        <div class="header-name">
          {{ systemName }}
        </div>
      </div>
      <div class="header-nav">
        <div class="nav-items" v-for="(item, index) in messageNav" :key="index">
          <router-link :to="item.url" class="nav-item">{{
            item.name
          }}</router-link>
        </div>
      </div>
      <div class="header-search">
        <span class="search-line search-line-left"></span>
        <div class="search-element">
          <!-- <input type="text" placeholder="搜索服务内容"> -->
          搜索服务内容
          <i class="el-icon-search"></i>
        </div>

        <span class="search-line search-line-right"></span>
      </div>
      <div class="header-login">
        <router-link to="/login" class="login-item">登录</router-link>
        <div class="register">
          <button>立即注册</button>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
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
        <div
          class="card"
          v-for="(item, index) in hedaoList"
          :key="index"
          :class="{ active: item === selected }"
          @click="selectHedao(item)"
        >
          <div class="logo">
            <!-- <img :src="item.img" alt="" /> -->
            <img src="../assets/img/hedao.png" alt="" />
          </div>
          <div class="title">
            <div class="title-h1">{{ item.title }}</div>
            <div class="title-h2">{{ item.describe }}</div>
          </div>
          <div class="goin">
            <img src="../assets/img/ic-enter.png" alt="" />
          </div>
        </div>
        <!-- 河道左右箭头部分 -->
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
      <div class="top-menu">
        <div
          class="top-card"
          :class="{ active: item.uid === sel }"
          v-for="(item, index) in jigouList"
          :key="index"
          @click="select(item)"
        >
          <img :src="item.img" alt="" />
          <div class="jigou-name">{{ item.label }}</div>
          <span></span>
        </div>
      </div>
      <div class="bottom-class">
        <div class="bottom-card" v-show="sel === 1">
          <el-row>
            <el-col
              class="card-style"
              :span="4"
              v-for="(item, index) in 12"
              :key="index"
            >
              <img src="../assets/img/ic-jigou.png" alt="" />
              <p>内部机构</p>
            </el-col>
          </el-row>
        </div>
        <div class="bottom-card" v-show="sel === 2">
          <el-row>
            <el-col
              class="card-style"
              :span="4"
              v-for="(item, index) in 2"
              :key="index"
            >
              <img src="../assets/img/ic-jigou.png" alt="" />
              <p>内部机构</p>
            </el-col>
          </el-row>
        </div>
        <div class="bottom-card" v-show="sel === 3">
          <el-row>
            <el-col
              class="card-style"
              :span="4"
              v-for="(item, index) in 6"
              :key="index"
            >
              <img src="../assets/img/ic-jigou.png" alt="" />
              <p>内部机构</p>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <!-- 资源 -->
    <div class="ziyuan">
      <div class="ziyuan-menu">
        <div class="ziyuan-top">
          <div class="ziyuan-top-btn">
            <div
              class="ziyuan-name"
              :class="{ active: item.uid === defaultSel }"
              v-for="(item, index) in ziyuanList"
              :key="index"
              @click="selectZiYuan(item)"
            >
              {{ item.name }}
            </div>
          </div>
          <div class="ziyuan-more">
            <p>更多</p>
            <img src="../assets/img/ic-more.png" alt="" />
          </div>
        </div>
        <div class="ziyuan-bottom">
          <div class="ziyuan-bottom-card" v-show="defaultSel === 1">
            <el-row>
              <el-col
                class="ziyuan-style"
                :span="10" 
                v-for="(item, index) in 8"
                :key="index"
              >
                <div class="ziyuan-card">
                  <div class="ziyuan-card-left">
                    <div class="day">26</div>
                    <div class="month">09月</div>
                  </div>
                  <div class="line"></div>
                  <div class="center">
                    <div class="title">【成都市水务数据资源交换中心】山洪灾害预测日报…</div>
                    <div class="from">来源：成都市水务局</div>
                  </div>
                  <div class="ziyuan-card-right">
                    <div class="category">资源目录</div>
                  </div> 
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="ziyuan-bottom-card" v-show="defaultSel === 2">
            111最新资源
          </div>
          <div class="ziyuan-bottom-card" v-show="defaultSel === 3">
            111热门服务
          </div>
        </div>
      </div>
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
      //系统名称
      systemName: "成都市水务数据资源交换开放门户",
      //nav_item
      messageNav: [
        //首页显示的导航栏
        {
          name: "首页",
          url: "/index",
          active: "index",
        },
        {
          name: "资源目录",
          url: "/resourceCatalog/list",
          active: "resourceCatalog",
        },
        {
          name: "数据目录",
          // url: "/service/resourceService/list",
          url: "/data/gisService/list",
          active: "data",
          // children: [
          //   {
          //     name: "政务资源服务目录",
          //     url: "/service/resourceService/list",
          //     active: "resourceService"
          //   },
          //   {
          //     name: "地理GIS服务目录",
          //     url: "/service/gisService/list",
          //     active: "service"
          //   },
          //   {
          //     name: "视频流媒体",
          //     url: "/service/videoService/list",
          //     active: "service"
          //   },
          //   // {
          //   //   name: "指标结果服务目录",
          //   //   url: "/service/videoService/list",
          //   //   active: "service"
          //   // }
          // ]
        },
        {
          name: "用户工作台",
          url: "",
          active: "/workbench",
        },
      ],
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
      //默认选中的，默认第一个河道
      selected: {
        img: require("../assets/img/hedao.png"),
        title: "河道",
        describe: "River course",
      },
      hedaoList: [
        {
          img: require("../assets/img/hedao.png"),
          title: "河道",
          describe: "River course",
        },
        {
          img: require("../assets/img/shuiku.png"),
          title: "水库水位",
          describe: "Reservoir water level",
        },
        {
          img: require("../assets/img/shuizhi.png"),
          title: "水质",
          describe: "Water Quality",
        },
        {
          img: require("../assets/img/yuqing.png"),
          title: "雨情",
          describe: "Rain Condition",
        },
      ],
      // 设置机构默认展示
      sel: 1,
      // 机构数据
      jigouList: [
        {
          uid: 1,
          img: require("../assets/img/ic-neibujigou.png"),
          label: "内部机构",
        },
        {
          uid: 2,
          img: require("../assets/img/ic-waibujigou.png"),
          label: "外部机构",
        },
        {
          uid: 3,
          img: require("../assets/img/ic-zhishudanwei.png"),
          label: "直属单位",
        },
      ],
      ziyuanList: [
        {
          uid: 1,
          name: "热门资源",
        },
        {
          uid: 2,
          name: "最新资源",
        },
        {
          uid: 3,
          name: "热门服务",
        },
      ],
      defaultSel: 1,
    };
  },
  components: {},
  methods: {
    // 设置河道的下标
    selectHedao(item) {
      this.selected = item;
    },
    // 设置机构的下标
    select(item) {
      this.sel = item.uid;
    },
    // 设置资源的下标
    selectZiYuan(item) {
      this.defaultSel = item.uid;
    },
  },
};
</script>

<style scoped>
.header-nav .nav-item,
.search-element,
.header-login .login-item {
  font-family: MicrosoftYaHeiUI;
  font-size: 16px;
  color: #ffffff;
}
.header-page {
  height: 80px;
  width: 100%;
  /* min-width: 1220px; */
  position: absolute;
  top: 0;
  z-index: 100;

  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header-left {
  display: flex;
  align-items: center;
}
.header-logo img {
  width: 56px;
  height: 55px;
}
.header-name {
  font-family: MicrosoftYaHeiUI-Bold;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 1.5px;
  padding-left: 8px;
}

/* nav css */
.header-nav {
  display: flex;
}
.header-nav .nav-item {
  padding: 0 24px;
  letter-spacing: 1.33px;
}
/* search css */
.header-search {
  display: flex;
  align-items: center;
}

.search-line {
  height: 81px;
  opacity: 0.4;
  border: 1px solid #ffffff;
}
.search-line-left {
  margin-right: 19.5px;
}
.search-line-right {
  margin-left: 23.5px;
}
.search-element {
  opacity: 0.6;
  letter-spacing: 1.33px;
}
/* .search-element input{
	background:none;  
	outline:none;  
    border:1px solid #ccc;
    -webkit-text-fill-color: #fff;
}

.search-element input:focus{   
	border:none;
} */

.search-element i {
  padding-left: 19px;
}
.search-line {
  padding-left: 19.5;
}

/* login css */
.header-login {
  display: flex;
  align-items: center;
}
.header-login .login-item {
  padding-right: 20px;
  letter-spacing: 1.33px;
}
.header-login button {
  width: 104px;
  height: 40px;
  font-family: MicrosoftYaHeiUISemibold;
  font-size: 16px;
  color: #ffffff;
  border: none;
  background: linear-gradient(to right, #20b3d9, #093ebd);
  outline: none;
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
  transition: all 1s;
}
.hedao .container .card:hover,
.hedao .container .card.active {
  background-image: linear-gradient(135deg, #22bcdc 0%, #0427b7 100%);
  box-shadow: 0 10px 24px 0 rgba(16, 51, 198, 0.4);
}

.hedao .container .card .logo {
  width: 120px;
  height: 120px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hedao .container .card .logo,
.hedao .container .card.active .logo {
  transform: translateY(-20px);
}
.hedao .container .card .title .title-h1 {
  font-family: MicrosoftYaHeiUI-Bold;
  font-size: 18px;
  color: #252323;
  text-align: center;
}

.hedao .container .card .title .title-h2 {
  font-family: MicrosoftYaHeiUI;
  font-size: 14px;
  color: #777575;
  text-align: center;
}
.hedao .container .card:hover .title .title-h1,
.hedao .container .card.active .title .title-h1 {
  color: #ffffff;
  transform: translateY(-10px);
}
.hedao .container .card:hover .title .title-h2,
.hedao .container .card.active .title .title-h2 {
  opacity: 0.45;
  color: #ffffff;
  transform: translateY(-10px);
}

.hedao .container .card .goin {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  background: rgba(226, 229, 241, 0.1);
  cursor: pointer;
}
.hedao .container .card.active .goin,
.hedao .container .card:hover .goin {
  display: flex;
}

.hedao .container .card .goin:hover {
  background: rgba(226, 229, 241, 0.3);
}

.hedao .container .card .logo img {
  width: 72.1px;
  height: 72.1px;
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
  min-height: 428px;
}
.jigou > .top-menu {
  height: 258px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background: url("../assets/img/bg-jigou.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.jigou .top-menu .top-card {
  padding-top: 111px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.top-menu .top-card .jigou-name {
  font-family: MicrosoftYaHeiUI-Bold;
  font-size: 18px;
  color: #252323;
  text-align: center;
}

.top-card.active::before {
  content: "";
  display: inline-block;
  width: 181px;
  height: 8px;
  background: url("../assets/img/ic-xuanzhong.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: 0;
}
.jigou .top-menu .top-card.active .jigou-name {
  color: #0427b7;
}

.jigou .top-menu .top-card .jigou-name {
  padding-top: 20px;
}
.jigou > .bottom-class {
  min-height: 170px;
  background: url("../assets/img/bg-zijigou.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.bottom-card1 .card-content {
  display: flex;
}
.bottom-class .bottom-card .card-style {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25.5px;
  min-width: 84px;
  cursor: pointer;
}

.bottom-class .bottom-card .card-style img {
  width: 20px;
  height: 20px;
}
.bottom-class .bottom-card .card-style p {
  padding-left: 8px;
  font-family: MicrosoftYaHeiUI;
  font-size: 14px;
  color: #252323;
}

/* 资源 */
.ziyuan {
  /* width: 100%; */
  position: relative;
  min-height: 795px;
  background: url("../assets/img/bg-ziyuan.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.ziyuan-more {
  display: flex;
}
.ziyuan-menu .ziyuan-top {
  display: flex;
  justify-content: space-between;
  /* background: #20b3d9; */
  padding: 80px 120px 58px 120px;
}
.ziyuan-top .ziyuan-top-btn {
  display: flex;
  align-items: center;
}
.ziyuan-top .ziyuan-top-btn .ziyuan-name {
  width: 160px;
  height: 56px;
  text-align: center;
  line-height: 56px;
  font-family: MicrosoftYaHeiUI;
  font-size: 16px;
  color: #252323;
  background: #fff;
}
.ziyuan-top .ziyuan-top-btn .ziyuan-name.active {
  background: url("../assets/img/im-ziyuan-xuanzhong.png") no-repeat center
    center;
  font-family: MicrosoftYaHeiUI-Bold;
  color: #ffffff;
}

.ziyuan-top .ziyuan-more {
  display: flex;
  align-items: center;
}
.ziyuan-top .ziyuan-more img {
  width: 20px;
  height: 20px;
  padding-left: 4px;
}

.ziyuan .ziyuan-foot {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.ziyuan .ziyuan-foot img {
  width: 100%;
}

.ziyuan-menu .ziyuan-bottom {
  padding: 0 130px 80px 120px;
}
.ziyuan-style{
  display: flex;
  margin-right: 10px;
}
.ziyuan-card {
  width: 580px;
  height: 108px;
  position: relative;
  background: white;
  margin-bottom: 20px;
}
.ziyuan-card .ziyuan-card-left{
  width: 87px;
  height: 108px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.ziyuan-card .ziyuan-card-left .day{
  font-family: MicrosoftYaHeiUI-Bold;
  font-size: 24px;
  color: #252323;
}
.ziyuan-card .ziyuan-card-left .month,
.ziyuan-card .center .from{
  font-family: MicrosoftYaHeiUI;
  font-size: 14px;
  color: #777575;
}
.ziyuan-card .line{
  width: 1px;
  height: 48px;
  background:#D8D8D8;
  position: absolute;
  left: 87px;
  top: 0;
  bottom: 0;
  margin: auto;
}
.ziyuan-card .center{
  height: 108px;
  position: absolute;
  left: 112px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.ziyuan-card .center .title{
  font-family: MicrosoftYaHeiUI-Bold;
  font-size: 16px;
  color: #252323;
}
.ziyuan-card .center .from{
  margin-left: 8px;
}
.ziyuan-card .ziyuan-card-right{
  width: 73px;
  height: 35px;
  background: url("../assets/img/tag-ziyuan.png") no-repeat 100% 100%;
  position: absolute;
  top: 10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ziyuan-card .ziyuan-card-right .category{
  font-family: MicrosoftYaHeiUI;
  font-size: 12px;
  color: #FFFFFF;
  margin-top: -6px;
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
