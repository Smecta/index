<template>
  <div class="frist-three mb-10">
    <div class="banner1 transition-banner" :style="transformStyle">
      <img v-for="item in sourceData1" :key="item.id" :src="item.img" />
    </div>
    <div class="arrow">
      <div class="arrow-left arrow-item" @click="leftItemTransition">
        <i class="el-icon-arrow-left icon" />
      </div>
      <div class="arrow-right arrow-item" @click="rightItemTransition">
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
</template>
<script>
export default {
  mounted() {
    this.startAutoPlay1(); //启动轮播图的定时器
  },
  computed: {
    transformStyle() {
      return {
        transform: `translate3d(${this.xValue}px,0,0)`,
      };
    },
  },
  data() {
    return {
      currentPage1: 0,
      sourceData1: [
        { id: 1, img: require("@/assets/img/banner/source1/1.jpg") },
        { id: 2, img: require("@/assets/img/banner/source1/2.jpg") },
        { id: 3, img: require("@/assets/img/banner/source1/3.jpg") },
      ],
      timer: null,
      xValue: 0,
    };
  },
  methods: {
    selectItem(index) {
      this.clearAutoPlay1();
      this.currentPage1 = index;
      this.xValue = -(index * 1200);
      this.startAutoPlay1();
    },
    leftItemTransition() {
      this.clearAutoPlay1();
      const lastIndex = this.sourceData1.length - 1;
      if (this.currentPage1 > 0) {
        this.currentPage1 -= 1;
        this.xValue = -(this.currentPage1 * 1200);
      } else {
        this.currentPage1 = lastIndex;
        this.xValue = -(lastIndex * 1200);
      }
      this.startAutoPlay1();
      // this.leftItem()
      // this.xValue = this.currentPage1-1>=0 ? this.xValue-(this.currentPage1*1200)
      //                                      : this.xValue-(this.sourceData1-1)*1200
    },
    rightItemTransition() {
      this.clearAutoPlay1();
      const lastIndex = this.sourceData1.length - 1;
      if (this.currentPage1 < lastIndex) {
        this.currentPage1 += 1;
        this.xValue = -(this.currentPage1 * 1200);
      } else {
        this.currentPage1 = 0;
        this.xValue = 0;
      }
      this.startAutoPlay1();
    },
    startAutoPlay1() {
      if (this.currentPage1 >= this.sourceData1.length) {
        this.currentPage1 = 0;
        this.xValue = 0;
        this.startAutoPlay1();
      } else {
        this.timer = setTimeout(() => {
          this.currentPage1++;
          this.startAutoPlay1();
          this.xValue = -(this.currentPage1 * 1200);
        }, 3000);
      }
    },
    clearAutoPlay1() {
      clearTimeout(this.timer);
      this.timer = null;
    },
  },
};
</script>
<style lang="scss" scoped>
.frist-three {
  width: 1200px;
  height: 300px;
  position: relative;
  overflow: hidden;
  .banner1 {
    display: flex;
    &.transition-banner {
      transition: all .7s linear;
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
      background: white;
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
</style>
