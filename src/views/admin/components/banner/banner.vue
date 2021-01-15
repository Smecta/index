<template>
  <el-card class="wrapper">
    <div style="float:right">
      <card-header cardTitle="用户动态" />
      <user-action />
    </div>
    <div class="title">四种轮播图</div>
    <card-header cardTitle="不闪现轮播图" />
    <div class="frist-two mb-10">
      <div class="banner1">
        <img
          v-for="(item, index) in sourceData1"
          :key="item.id"
          :src="item.img"
          v-show="currentPage1 === index"
        />
      </div>
      <div class="arrow">
        <div class="arrow-left arrow-item" @click="leftItem">
          <i class="el-icon-arrow-left icon" />
        </div>
        <div class="arrow-right arrow-item" @click="rightItem">
          <i class="el-icon-arrow-right icon" />
        </div>
      </div>
      <div class="dot-box">
        <div
          v-for="(item, index) in sourceData1"
          :key="index"
          class="dot"
          :class="{ active: currentPage1 === index }"
          @click="selectItem(index)"
        />
      </div>
    </div>

    <card-header cardTitle="闪现轮播图" />
    <div class="frist-one mb-10">
      <transition-group tag="div" class="banner1" name="fade">
        <img
          v-for="(item, index) in sourceData1"
          :key="item.id"
          :src="item.img"
          v-show="currentPage1 === index"
        />
      </transition-group>
      <div class="arrow">
        <div class="arrow-left arrow-item" @click="leftItem">
          <i class="el-icon-arrow-left icon" />
        </div>
        <div class="arrow-right arrow-item" @click="rightItem">
          <i class="el-icon-arrow-right icon" />
        </div>
      </div>
      <div class="dot-box">
        <div
          v-for="(item, index) in sourceData1"
          :key="index"
          class="dot"
          :class="{ active: currentPage1 === index }"
          @click="selectItem(index)"
        />
      </div>
    </div>

    <card-header cardTitle="滑动轮播图-回滚" />
    <transition-banner class="mb-10" />

    <card-header cardTitle="滑动轮播图-无回滚" />
    <transition-banner2 />
  </el-card>
</template>
<script>
import CardHeader from "../../../../components/CardHeader.vue";
import TransitionBanner from "./components/TransitionBanner.vue";
import TransitionBanner2 from "./components/TransitionBanner2.vue";
import UserAction from "./components/UserAction.vue";
export default {
  components: { CardHeader, TransitionBanner2, TransitionBanner, UserAction },
  data() {
    return {
      currentPage1: 0,
      sourceData1: [
        { id: 1, img: require("@/assets/img/banner/source1/1.jpg") },
        { id: 2, img: require("@/assets/img/banner/source1/2.jpg") },
        { id: 3, img: require("@/assets/img/banner/source1/3.jpg") },
      ],
      timer1: null,
    };
  },
  mounted() {
    this.startAutoPlay1(); //启动轮播图的定时器
  },
  methods: {
    selectItem(index) {
      this.clearAutoPlay1();
      this.currentPage1 = index;
      this.startAutoPlay1();
    },
    startAutoPlay1() {
      if (this.currentPage1 >= this.sourceData1.length) {
        this.currentPage1 = 0;
        this.startAutoPlay1();
      } else {
        this.timer1 = setTimeout(() => {
          this.currentPage1++;
          this.startAutoPlay1();
        }, 3000);
      }
    },
    clearAutoPlay1() {
      clearTimeout(this.timer1);
      this.timer1 = null;
    },
    leftItem() {
      this.currentPage1 =
        this.currentPage1 - 1 >= 0
          ? this.currentPage1 - 1
          : this.sourceData1.length - 1;
    },
    rightItem() {
      this.currentPage1 =
        this.currentPage1 < this.sourceData1.length - 1
          ? this.currentPage1 + 1
          : 0;
    },
    showScroll() {
      this.animatedTop = true;
      this.userTimer = setTimeout(() => {
        this.userData.push(this.userData[0]);
        this.userData.shift();
        this.animatedTop = false;
      }, 700);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  .title {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 20px 0;
    position: relative;
    margin-left: 10px;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-52%);
      left: -10px;
      width: 5px;
      height: 17px;
      background: #1890ff;
    }
  }
  .frist-one,
  .frist-two {
    width: 1200px;
    height: 300px;
    position: relative;
    overflow: hidden;
    .banner1 {
      display: flex;
      &.transition-banner {
        transition: all 1s linear;
      }
      img {
        width: 100%;
        height: 300px;
      }
    }
    .arrow {
      &-item {
        width: 30px;
        height: 30px;
        background: rgb(255, 255, 255);
        border-radius: 50%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        .icon {
          font-size: 18px;
          z-index: 1;
        }
      }
      &-left {
        left: 2px;
      }
      &-right {
        right: 2px;
      }
    }
    .dot-box {
      position: absolute;
      bottom: 20px;
      right: 40px;
      display: flex;
      align-items: center;
      .dot {
        width: 12px;
        height: 12px;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        margin-right: 10px;
      }
      .dot.active {
        background: #1890ff;
      }
    }
  }
}
/* fade */
.fade-enter-active {
  transition: 0.1s all linear;
}
.fade-enter,
.fade-leave-active,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}

/* fade-transform-y */
.fade-transform-y-leave-active,
.fade-transform-y-enter-active {
  transition: 0.5s transform linear;
}
.fade-transform-y-enter {
  right: 0;
  transform: translateY(45px);
}
.fade-transform-y-leave-to {
  transform: translateY(45px);
}
</style>
