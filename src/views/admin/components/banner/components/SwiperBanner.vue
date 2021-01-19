<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in bannerData" :key="item.id">
        <img :src="item.img" />
        <div class="text-content">
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
          <a class="detail" :href="item.url">查看详情</a>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev">
      <i class="el-icon-arrow-left icon"></i>
    </div>
    <div class="swiper-button-next">
      <i class="el-icon-arrow-right icon"></i>
    </div>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      bannerData: [
        {
          id: 1,
          img: require("@/assets/img/banner/baike/1.jpg"),
          title: "特色词条",
          content: "由百度精英用户编写集趣味与严谨于一身",
          url: "http://baike.baidu.com/tese",
        },
        {
          id: 2,
          img: require("@/assets/img/banner/baike/2.jpg"),
          title: "数字方志馆",
          content: "陕西馆全新上线带你走进习大大故乡",
          url: "https://baike.baidu.com/difangzhi/shaanxi",
        },
        {
          id: 3,
          img: require("@/assets/img/banner/baike/3.jpg"),
          title: "明星百科",
          content: "最权威明星资料库已上线307位明星",
          url: "https://baike.baidu.com/item/%E5%91%A8%E8%BF%85/10076",
        },
        {
          id: 4,
          img: require("@/assets/img/banner/baike/4.jpg"),
          title: "城市百科",
          content: "已上线368个城市收录38017个词条",
          url: "http://baike.baidu.com/city",
        },
        {
          id: 5,
          img: require("@/assets/img/banner/baike/5.png"),
          title: "特色词条",
          content: "由百度精英用户编写集趣味与严谨于一身",
          url: "http://baike.baidu.com/tese",
        },
        {
          id: 6,
          img: require("@/assets/img/banner/baike/6.jpg"),
          title: "特色词条",
          content: "由百度精英用户编写集趣味与严谨于一身",
          url: "http://baike.baidu.com/tese",
        },
        {
          id: 7,
          img: require("@/assets/img/banner/baike/7.jpg"),
          title: "特色词条",
          content: "由百度精英用户编写集趣味与严谨于一身",
          url: "http://baike.baidu.com/tese",
        },
        {
          id: 8,
          img: require("@/assets/img/banner/baike/8.jpg"),
          title: "特色词条",
          content: "由百度精英用户编写集趣味与严谨于一身",
          url: "http://baike.baidu.com/tese",
        },
        {
          id: 9,
          img: require("@/assets/img/banner/baike/9.png"),
          title: "特色词条",
          content: "由百度精英用户编写集趣味与严谨于一身",
          url: "http://baike.baidu.com/tese",
        },
        {
          id: 10,
          img: require("@/assets/img/banner/baike/10.jpg"),
          title: "特色词条",
          content: "由百度精英用户编写集趣味与严谨于一身",
          url: "http://baike.baidu.com/tese",
        },
        {
          id: 11,
          img: require("@/assets/img/banner/baike/8.jpg"),
          title: "特色词条",
          content: "由百度精英用户编写集趣味与严谨于一身",
          url: "http://baike.baidu.com/tese",
        },
        {
          id: 12,
          img: require("@/assets/img/banner/baike/9.png"),
          title: "特色词条",
          content: "由百度精英用户编写集趣味与严谨于一身",
          url: "http://baike.baidu.com/tese",
        },
      ],
      swiperOption: {
        slidesPerView: 4, //一页显示几条
        spaceBetween: 20, //每个swiper-item的间距
        slidesPerGroup: 4, //一次滚动几条
        loop: true,
        //设置自动播放
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style lang="scss" scoped>
.recommendPage {
  position: relative;
  width: 1172px;
  height: 200px;
  display: flex;
  align-items: center;
  .swiper-slide {
    border: 1px solid #ccc;
    width: 278px;
    height: 144px;
    color: #000;
    font-size: 16px;
    text-align: center;
    position: relative;
    img {
      width: 278px;
      height: 142px;
    }
    .text-content {
      position: absolute;
      top: 20px;
      left: 20px;
      text-align: left;
      .title {
        font-size: 22px;
        color: rgb(34, 34, 34);
      }
      .content {
        margin: 10px 0;
        width: 110px;
        color: #888;
        font-size: 12px;
      }
      .detail {
        color: #666;
        font-size: 14px;
        padding-bottom: 3px;
        border-bottom: 1px solid #ccc;
      }
    }
  }
  // 左右箭头更改样式
  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
    .icon {
      font-size: 20px;
    }
  }
  .swiper-button-prev {
    left: -30px;
  }
  .swiper-button-next {
    right: -30px;
  }
  &::v-deep {
    //小圆点样式
    .swiper-pagination {
      position: absolute;
      bottom: 0;
      right: 50px;
      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        margin-right: 10px;
        display: inline-block;
        background-color: #ccc;
        border: 1px solid #333;
        &.swiper-pagination-bullet-active {
          background: #1890ff;
          outline: none;
        }
      }
    }
  }
}
</style>
