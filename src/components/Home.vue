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
      <div class="header-right">
        <span class="search-line search-line-left"></span>
        <div class="search-element">
          <!-- <input type="text" placeholder="搜索服务内容"> -->
          搜索服务内容
          <i class="el-icon-search"></i>
        </div>

        <span class="search-line search-line-right"></span>
        <div class="header-login">
          <router-link to="/login" class="login-item">登录</router-link>
          <div class="register">
            <button>立即注册</button>
          </div>
        </div>
      </div>
      <!-- <div class="header-login">
        <router-link to="/login" class="login-item">登录</router-link>
        <div class="register">
          <button>立即注册</button>
        </div>
      </div> -->
    </div>
    <!-- 轮播图 -->
    <div class="home-body">
      <el-carousel
        :interval="5000"
        arrow="always"
        height="624px"
        class="arrow-style"
      >
        <el-carousel-item v-for="(item, index) in imgList" :key="index">
          <img class="carousel-img" src="../assets/img/ban1.jpg" alt="" />
          {{ item.id }}
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 卡片数据 -->
    <div class="home-numbers-card">
      <div class="numbers-card" v-for="(item, index) in dataList" :key="index">
        <div class="card-name">{{ item.title }}</div>
        <div class="card-style">
          <div class="card-num">{{ item.num }}</div>
          <div class="card-unit">{{ item.unit }}</div>
        </div>
        <span></span>
      </div>
    </div>
    <!-- 服务指南 -->
    <!-- service guild -->
    <div class="home-service">
      <div class="service-container">
        <div
          class="service-card"
          v-for="(item, index) in serviceList"
          :key="index"
          :class="{ active: item === selected }"
          @click="selectService(item)"
        >
          <div class="service-card-logo">
            <!-- <img :src="item.img" alt="" /> -->
            <img src="../assets/img/hedao.png" alt="" />
          </div>
          <div>
            <div class="service-card-title-top">{{ item.title }}</div>
            <div class="service-card-title-bottom">{{ item.describe }}</div>
          </div>
          <div class="service-card-goin">
            <img src="../assets/img/ic-enter.png" alt="" />
          </div>
        </div>
        <!-- 服务左右箭头部分 -->
        <div class="service-left-select select-card">
          <img
            class="service-mirrorRotateLevel"
            src="../assets/img/ic-lunbo-right.png"
            alt=""
          />
        </div>
        <div class="service-right-select select-card">
          <img src="../assets/img/ic-lunbo-right.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 地图 -->
    <div class="home-map">
      <img src="../assets/img/img-ditu.png" alt="" />
    </div>
    <!-- 部门单位 -->
    <!-- department unit -->
    <div class="home-department">
      <div class="department-menu">
        <div
          class="department-menu-list"
          :class="{ active: item.uid === selDepartmentMenu }"
          v-for="(item, index) in departmentMenuList"
          :key="index"
          @click="selectDepartmentSelection(item)"
        >
          <img :src="item.img" alt="" />
          <div class="department-name">{{ item.label }}</div>
          <span></span>
        </div>
      </div>
      <div class="department-content">
        <div v-show="selDepartmentMenu === 1">
          <el-row>
            <el-col
              class="department-content-card"
              :span="4"
              v-for="(item, index) in 12"
              :key="index"
            >
              <img src="../assets/img/ic-jigou.png" alt="" />
              <p>内部机构</p>
            </el-col>
          </el-row>
        </div>
        <div v-show="selDepartmentMenu === 2">
          <el-row>
            <el-col
              class="department-content-card"
              :span="4"
              v-for="(item, index) in 2"
              :key="index"
            >
              <img src="../assets/img/ic-jigou.png" alt="" />
              <p>内部机构</p>
            </el-col>
          </el-row>
        </div>
        <div v-show="selDepartmentMenu === 3">
          <el-row>
            <el-col
              class="department-content-card"
              :span="4"
              v-for="(item, index) in 1"
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
    <!-- resource information -->
    <div class="home-resource">
      <!-- resource nav -->
      <div class="resource-nav">
        <div class="resource-nav-items">
          <div class="resource-btn">
            <!-- 遍历资源列表 resourceList -->
            <!-- 方法：选择资源项 selectResourceItem -->
            <div
              class="resource-btn-name"
              :class="{ active: item.uid === defaultResourceSelection }"
              v-for="(item, index) in resourceList"
              :key="index"
              @click="selectResourceItem(item)"
            >
              <p>{{ item.name }}</p>
            </div>
          </div>

          <div class="resource-more">
            <span>更多</span>
            <img src="../assets/img/ic-more.png" alt="" />
          </div>
        </div>
        <div class="resource-content">
          <el-row :gutter="30" v-show="defaultResourceSelection === 1">
            <el-col :span="12" v-for="(item, index) in 8" :key="index">
              <div class="resource-content-card">
                <div class="resource-content-card-left">
                  <div class="resource-day">26</div>
                  <div class="reosurce-month">09月</div>
                </div>
                <div class="resource-line"></div>
                <div class="reosurce-card-body">
                  <div class="reosurce-card-title">
                    【成都市水务数据资源交换中心】山洪灾害预测日报【成都市水务数据资源交换中心】山洪灾害预测日报…
                  </div>
                  <div class="reosurce-card-from">来源：成都市水务局</div>
                </div>
                <div class="resource-content-card-right">
                  <div class="reosurce-category">资源目录</div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="30" v-show="defaultResourceSelection === 2">
            <el-col :span="12" v-for="(item, index) in 2" :key="index">
              <div class="resource-content-card">
                <div class="resource-content-card-left">
                  <div class="resource-day">26</div>
                  <div class="reosurce-month">09月</div>
                </div>
                <div class="resource-line"></div>
                <div class="reosurce-card-body">
                  <div class="reosurce-card-title">
                    【成都市水务数据资源交换中心】山洪灾害预测日报【成都市水务数据资源交换中心】山洪灾害预测日报…
                  </div>
                  <div class="reosurce-card-from">来源：成都市水务局</div>
                </div>
                <div class="resource-content-card-right">
                  <div class="reosurce-category">资源目录</div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="30" v-show="defaultResourceSelection === 3">
            <el-col :span="12" v-for="(item, index) in 1" :key="index">
              <div class="resource-content-card">
                <div class="resource-content-card-left">
                  <div class="resource-day">26</div>
                  <div class="reosurce-month">09月</div>
                </div>
                <div class="resource-line"></div>
                <div class="reosurce-card-body">
                  <div class="reosurce-card-title">
                    【成都市水务数据资源交换中心】山洪灾害预测日报【成都市水务数据资源交换中心】山洪灾害预测日报…
                  </div>
                  <div class="reosurce-card-from">来源：成都市水务局</div>
                </div>
                <div class="resource-content-card-right">
                  <div class="reosurce-category">资源目录</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- resource footer -->
      <div class="resource-footer">
        <img src="../assets/img/bg-jianbianlantiao.png" alt="" />
      </div>
    </div>
    <!-- 底部 -->
    <!-- footer -->
    <div class="home-footer">
      <div class="top"></div>
      <div class="footer—content">
        <div class="footer-link">
          <div class="about-us">
            <a>关于我们</a>
          </div>
          <div class="contact-us">
            <a>联系我们</a>
          </div>
        </div>
        <div class="copyright">
          <p>Copyrigh © 2020-2032 成都市水务数据版权所有</p>
        </div>
      </div>
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
      //默认选中的，默认第一个服务
      selected: {
        img: require("../assets/img/hedao.png"),
        title: "河道",
        describe: "River course",
      },
      serviceList: [
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
      selDepartmentMenu: 1,
      // 机构数据
      departmentMenuList: [
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
      resourceList: [
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
      // 默认资源选择 defaultResourceSelection
      defaultResourceSelection: 1,
    };
  },
  components: {},
  mounted(){
    this.getHeader()
  },
  methods: {
    // 设置服务的下标
    selectService(item) {
      this.selected = item;
    },
    // 设置机构的下标
    selectDepartmentSelection(item) {
      this.selDepartmentMenu = item.uid;
    },
    // 设置资源的下标
    selectResourceItem(item) {
      this.defaultResourceSelection = item.uid;
      this.axios.get("/api/sharedGateway/service/hottest").then((res) => {
        console.log(res);
      });
    },
    getHeader() {
      // 导航实例
      const headerEl = document.querySelector(".header-page");
  
      // 窗口滚动处理
      window.addEventListener("scroll", () => {
        // 固定导航
        let height = headerEl.getBoundingClientRect().height;

        if (window.pageYOffset - height > 50) {
          if (!headerEl.classList.contains("sticky")) {
            headerEl.classList.add("sticky");
          }
        } else {
          headerEl.classList.remove("sticky");
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  position: relative;
}
// 字体样式
font-style {
  font-family: MicrosoftYaHeiUI;
  font-size: 16px;
  color: #ffffff;
}
// 头部导航
.header-page {
  height: 80px;
  width: 100vw;
  min-width: 1440px;
  position: fixed;
  top: 0;
  z-index: 999;

  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: space-around;
  align-items: center;
  .header-left {
    display: flex;
    align-items: center;
    padding-left: 91px;
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
  }
  /* nav css */
  .header-nav {
    display: flex;
    .nav-item {
      padding: 0 24px;
      letter-spacing: 1.33px;
      @extend font-style;
    }
  }
  /* right css */
  .header-right {
    display: flex;
    align-items: center;
    .search-line {
      height: 81px;
      opacity: 0.4;
      border: 1px solid #ffffff;
    }
    .search-element {
      opacity: 0.6;
      letter-spacing: 1.33px;
      @extend font-style;
      .search-element i {
        padding-left: 19px;
      }
    }
    .search-line-left {
      margin-right: 19.5px;
    }
    .search-line {
      padding-left: 19.5;
    }
    .search-line-right {
      margin-left: 23.5px;
    }
    /* login css */
    .header-login {
      display: flex;
      align-items: center;
      .login-item {
        padding-left: 47.5px;
        padding-right: 20px;
        letter-spacing: 1.33px;
        @extend font-style;
      }
      .register {
        padding-right: 91px;
        button {
          width: 104px;
          height: 40px;
          font-family: MicrosoftYaHeiUISemibold;
          font-size: 16px;
          color: #ffffff;
          border: none;
          background: linear-gradient(to right, #20b3d9, #093ebd);
          outline: none;
        }
      }
    }
  }
}

.header-page.sticky {
  position: fixed;
  background-color: #fefefe;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);
  animation: dropDown 0.5s ease-in-out forwards;
}
/* 固定导航文字颜色为黑色 */
.header-page.sticky .header-left .header-name,
.header-page.sticky .header-nav .nav-items .nav-item, 
.header-page.sticky .header-right .header-login .login-item, 
.header-page.sticky .header-right .search-element {
  color: #000;
}

/* 固定导航下滑动画 */
@keyframes dropDown {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
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

.arrow >>> .el-carousel__arrow--left {
  background: #fff;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* --------------卡片数据-------------- */
.home-numbers-card {
  position: absolute;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 1204px;
  width: 80%;
  height: 120px;
  transform: translate(-50%, -50%);
  z-index: 888;
  background: #fff;
  box-shadow: 0px 0px 10px #999999;
  .numbers-card {
    display: flex;
    // width: 172px;
    width: 80%;
    flex-direction: column;
    align-items: center;
    position: relative;
    .card-name {
      font-family: MicrosoftYaHeiUI;
      font-size: 16px;
      color: #252323;
      text-align: center;
    }
    .card-style {
      display: flex;
      align-items: center;
      padding-top: 8px;
      .card-num {
        font-family: DINAlternate-Bold;
        font-size: 28px;
        color: #1250c8;
        letter-spacing: 1.2px;
      }
      .card-unit {
        padding: 4px 0 0 4px;
        font-family: ArialMT;
        font-size: 14px;
        color: #777575;
      }
    }
    span {
      display: inline-block;
      width: 1px;
      height: 40px;
      background: #ccc;
      position: absolute;
      right: 0px;
      top: 10px;
    }
    &:nth-child(7) {
      span {
        display: none;
      }
    }
  }
}

/* --------------服务指南-------------- */
// service guild
.home-service {
  width: 100%;
  height: 557px;
  background: url("../assets/img/bg-qianlan.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .service-container {
    width: 80%;
    padding-top: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .service-card {
      // width: 300px;
      // width:100%;
      height: 353px;
      background: #ffffff;
      border: 1px solid #e2e3e9;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 1s;
      &:hover,
      &.active {
        background-image: linear-gradient(135deg, #22bcdc 0%, #0427b7 100%);
        box-shadow: 0 10px 24px 0 rgba(16, 51, 198, 0.4);
      }
      .service-card-logo {
        width: 120px;
        height: 120px;
        background: #ffffff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 72.1px;
          height: 72.1px;
        }
      }
      &:hover .service-card-logo,
      &.active .service-card-logo {
        transform: translateY(-20px);
      }
      .service-card-title-top {
        font-family: MicrosoftYaHeiUI-Bold;
        font-size: 18px;
        color: #252323;
        text-align: center;
      }
      &:hover .service-card-title-top,
      &.active .service-card-title-top {
        color: #ffffff;
        transform: translateY(-10px);
      }
      .service-card-title-bottom {
        font-family: MicrosoftYaHeiUI;
        font-size: 14px;
        color: #777575;
        text-align: center;
      }
      &:hover .service-card-title-bottom,
      &.active .service-card-title-bottom {
        opacity: 0.45;
        color: #ffffff;
        transform: translateY(-10px);
      }
      .service-card-goin {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        display: none;
        background: rgba(226, 229, 241, 0.1);
        cursor: pointer;
      }
      &.active .service-card-goin,
      &:hover .service-card-goin {
        display: flex;
      }
      .service-card-goin:hover {
        background: rgba(226, 229, 241, 0.3);
      }
    }
  }
  .select-card {
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
  .service-left-select {
    position: absolute;
    top: 50%;
    left: -25px;
    .service-mirrorRotateLevel {
      transform: rotateY(180deg); /* 水平镜像翻转 */
    }
  }
  .service-right-select {
    position: absolute;
    top: 50%;
    right: -25px;
  }
}

/* ---------------地图--------------- */
.home-map {
  width: 100%;
  height: 483px;
  img {
    width: 100%;
    height: 100%;
  }
}

/* --------------部门单位-------------- */
// department unit
.home-department {
  min-height: 428px;
  .department-menu {
    height: 258px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    background: url("../assets/img/bg-jigou.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .department-menu-list {
      padding-top: 111px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      &.active::before {
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
      &.active {
        .department-name {
          color: #0427b7;
        }
      }
      .department-name {
        padding-top: 20px;
        font-family: MicrosoftYaHeiUI-Bold;
        font-size: 18px;
        color: #252323;
        text-align: center;
      }
    }
  }
  .department-content {
    min-height: 170px;
    background: url("../assets/img/bg-zijigou.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .department-content-card {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 25.5px;
      min-width: 84px;
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
      }
      p {
        padding-left: 8px;
        font-family: MicrosoftYaHeiUI;
        font-size: 14px;
        color: #252323;
      }
    }
  }
}

/* ---------------资源--------------- */
// resource information
.home-resource {
  /* width: 100%; */
  position: relative;
  min-height: 795px;
  background: url("../assets/img/bg-ziyuan.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // resource nav css
  .resource-nav {
    .resource-nav-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 80px 120px 58px 120px;
      .resource-btn {
        display: flex;
        align-items: center;
        cursor: pointer;
        .resource-btn-name {
          width: 160px;
          height: 56px;
          text-align: center;
          line-height: 56px;
          font-family: MicrosoftYaHeiUI;
          font-size: 16px;
          color: #252323;
          background: #fff;
          &.active {
            background: url("../assets/img/im-ziyuan-xuanzhong.png") no-repeat
              center center;
            font-family: MicrosoftYaHeiUI-Bold;
            color: #ffffff;
          }
        }
      }
      // resource more css
      .resource-more {
        display: flex;
        cursor: pointer;
        span {
          font-family: PingFangSC-Regular;
          font-size: 18px;
          color: #777575;
          // text-align: right;
        }
        img {
          width: 20px;
          margin-left: 4px;
        }
      }
    }
    // resource content css
    .resource-content {
      padding: 0 130px 80px 120px;
      .resource-content-card {
        // width: 580px;
        height: 108px;
        position: relative;
        background: white;
        margin-bottom: 20px;
        cursor: pointer;
        .resource-content-card-left {
          width: 87px;
          height: 108px;
          position: absolute;
          left: 0;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .resource-day {
            font-family: MicrosoftYaHeiUI-Bold;
            font-size: 24px;
            color: #252323;
          }
          .reosurce-month {
            font-family: MicrosoftYaHeiUI;
            font-size: 14px;
            color: #777575;
          }
        }
        .resource-line {
          width: 1px;
          height: 48px;
          background: #d8d8d8;
          position: absolute;
          left: 87px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        .reosurce-card-body {
          height: 108px;
          width: 80%;
          position: absolute;
          left: 112px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          .reosurce-card-title {
            font-family: MicrosoftYaHeiUI-Bold;
            font-size: 16px;
            color: #252323;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 80%;
          }
          .reosurce-card-from {
            margin-left: 8px;
            font-family: MicrosoftYaHeiUI;
            font-size: 14px;
            color: #777575;
          }
        }
        .resource-content-card-right {
          width: 73px;
          height: 35px;
          background: url("../assets/img/tag-ziyuan.png") no-repeat 100% 100%;
          position: absolute;
          top: 10px;
          right: -10px;
          display: flex;
          align-items: center;
          justify-content: center;
          .reosurce-category {
            font-family: MicrosoftYaHeiUI;
            font-size: 12px;
            color: #ffffff;
            margin-top: -6px;
          }
        }
      }
    }
  }
  // resource footer css
  .resource-footer {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    img {
      width: 100%;
    }
  }
}

/* ---------------底部--------------- */
.home-footer {
  height: 160px;
  background: #102537;
  color: #d3dce6;
  .top {
    height: 43px;
    opacity: 0.5;
    border-bottom: 1px solid #ffffff;
  }
  .footer—content {
    height: 117px;
    display: flex;
    padding-top: 48px;
    justify-content: space-between;
    .footer-link {
      display: flex;
      padding: 0 0 49px 120px;
      .about-us,
      .contact-us {
        font-family: MicrosoftYaHeiUI;
        font-size: 16px;
        color: #ffffff;
      }
      .about-us {
        padding-right: 80px;
      }
    }
    .copyright p {
      padding-right: 120px;
      opacity: 0.6;
      font-family: MicrosoftYaHeiUI;
      font-size: 14px;
      color: #ffffff;
    }
  }
}
</style>
