<template>
  <el-card class="wrapper">
    <div class="title">无缝播报</div>
    <div class="scroll">
      <div class="scroll-content">
        <ul :class="{ aniamtedTop }">
          <li v-for="(item, index) in data" :key="index + 'iuhv'">
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="arrow-box">
        <div class="el-icon-arrow-up arrow" @click="upItem" />
        <div class="el-icon-arrow-down arrow" @click="downItem" />
      </div>
    </div>
    <div class="notice">
      <div class="notice-content">
        <transition-group tag="ul" name="fade-transform-y">
          <li
            v-for="(item, index) in noticeData"
            v-show="currentIndex === index"
            :key="item.id"
            class="item"
          >
            <div class="item-content">{{ item.title }}</div>
          </li>
        </transition-group>
      </div>
      <div class="dot-box">
        <div
          v-for="(item, index) in noticeData"
          :key="index"
          class="dot"
          :class="{ active: currentIndex === index }"
          @click="selectItem(index)"
        />
      </div>
      <div class="arrow-box">
        <div class="el-icon-arrow-up arrow" @click="upItem2" />
        <div class="el-icon-arrow-down arrow" @click="downItem2" />
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      aniamtedTop: false,
      data: [
        {
          id: 1,
          title:
            "不用管这里，我先打个草稿 打草稿？ 其实不用这么麻烦的。。。 简单说一下就可以了",
        },
        { id: 2, title: "不怕，有我呢。 嗯嗯。我想写，我能帮你 增加阅历" },
        { id: 3, title: "感动不 艾玛 老哭鼻子了" },
        {
          id: 4,
          title:
            "早上起床 - 上午 你陪我录自我介绍 -？ 洗头- 你？-录自我介绍- 快中午 你出现",
        },
        {
          id: 5,
          title:
            "快中午 你出现 -  11：30该吃饭了么 -12点半 没吃上饭 -消失了 -下午又出现-规定3点录视频",
        },
      ],
      noticeData: [
        {
          id: 1,
          title:
            "-睡了会儿 3:05 10 2点56 闭上眼这个时间 取了个外卖我在吃饭一直看着你的",
        },
        {
          id: 2,
          title:
            "3：06 过一半 醒了- 在床上 -消失 - 录好视频了 -发消息说 电脑关机--出门 给你妹妹配眼镜",
        },
        {
          id: 3,
          title: "上传视频-你给我发消息 说出去配眼镜 - 我看了会视频 困得不行 ",
        },
        { id: 4, title: "那种视频 一般会快进⏩" },
        {
          id: 5,
          title:
            "-我给你发消息 说 回来叫醒我 -你打电话叫我 -然后 又消失- 老张开课了 -",
        },
      ],
      currentIndex: 0,
      timer: null,
      timer2: null,
    };
  },
  mounted() {
    this.startAutoPlay();
    this.registerPageHide();    //解决切换页面，消息仍在滚动
    this.startAutoPlay2();
    this.registerPageHide2();   //解决切换页面，公告初始化重叠的bug
  },
  methods: {
    goDetail(item) {
      this.$router.push(`/scroll/${item.id}`);
    },
    showScroll() {
      this.aniamtedTop = true;
      setTimeout(() => {
        this.data.push(this.data[0]);
        this.data.shift();
        this.aniamtedTop = false;
      }, 1000);
    },
    startAutoPlay() {
      this.timer = setInterval(this.showScroll, 3000);
    },
    clearAutoPlay() {
      clearInterval(this.timer);
      this.timer = null;
    },
    upItem() {
      this.clearAutoPlay();
      this.data.unshift(this.data.pop());
      this.startAutoPlay();
    },
    downItem() {
      this.clearAutoPlay();
      this.data.push(this.data[0]);
      this.data.shift();
      this.startAutoPlay();
    },
    // 浏览器切换页面，停止定时器，切回开启
    registerPageHide() {
      const visibilityHandler = () => {
        document.visibilityState === 'visible' ? this.startAutoPlay() : this.clearAutoPlay()
      }
      document.addEventListener('visibilitychange', visibilityHandler)
      this.$on('hook:beforeDestroy', () => document.removeEventListener('visibilitychange', visibilityHandler))
    },
    // 另一个播报的相关内容
    startAutoPlay2() {
      if (this.currentIndex >= this.noticeData.length) {
        this.currentIndex = 0;
        this.startAutoPlay2();
      } else {
        this.timer2 = setTimeout(() => {
          this.currentIndex++;
          this.startAutoPlay2();
        }, 3000);
      }
    },
    clearAutoPlay2() {
      clearTimeout(this.timer2);
      this.timer2 = null;
    },
    upItem2() {
      this.clearAutoPlay();
      this.currentIndex =
        this.currentIndex - 1 >= 0 ? this.currentIndex - 1 : this.noticeData.length - 1;
      this.startAutoPlay();
    },
    downItem2() {
      this.clearAutoPlay2();
      this.currentIndex =
        this.currentIndex < this.noticeData.length - 1 ? this.currentIndex + 1 : 0;
      this.startAutoPlay2();
    },
    selectItem(index) {
      this.clearAutoPlay2();
      this.currentIndex = index;
      this.startAutoPlay2();
    },
    // 浏览器切换页面，停止定时器，切回开启
    registerPageHide2() {
      const visibilityHandler = () => {
        document.visibilityState === 'visible' ? this.startAutoPlay2() : this.clearAutoPlay2()
      }
      document.addEventListener('visibilitychange', visibilityHandler)
      this.$on('hook:beforeDestroy', () => document.removeEventListener('visibilitychange', visibilityHandler))
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
  height: 80%;
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
      width: 4px;
      height: 17px;
      background: #1890ff;
    }
  }
  .scroll {
    width: 100%;
    height: 40px;
    position: relative;
    display: flex;
    .scroll-content {
      position: absolute;
      right: 0px;
      height: 40px;
      width: 85%;
      overflow: hidden;
      .aniamtedTop {
        transition: all 1s linear;
        margin-top: -40px;
      }
      li {
        font-size: 17px;
        color: #6495ed;
        font-weight: bold;
        line-height: 40px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
      }
    }
  }
  .arrow-box {
    margin: 8px 0 0 80px;
    display: flex;
    flex-direction: column;
    .arrow:hover {
      cursor: pointer;
      color: blue;
    }
  }
  .notice {
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
    &-content {
      height: 50px;
      flex: 1;
      overflow: hidden;
      margin-left: 100px;
      position: relative;
      font-size: 17px;
      color: #6495ed;
      font-weight: bold;
      .item {
        position: absolute;
        width: 100%;
        height: 50px;
        white-space: nowrap;
        cursor: pointer;
        display: flex;
        align-items: center;
        // transition: transform 1.6s ease;
      }
    }
    .dot-box {
      display: flex;
      align-items: center;
      .dot {
        width: 9px;
        height: 9px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        margin-right: 10px;
      }
      .dot.active {
        background: #1890ff;
      }
    }
    .arrow-box {
      flex: 0 0 40px;
      display: flex;
      flex-direction: column;
      .arrow:hover{
        cursor: pointer;
        color: blue;
      }
    }
  }
  /* fade-transform-y */
  .fade-transform-y-leave-active,
  .fade-transform-y-enter-active {
    transition: transform 1s;
  }

  .fade-transform-y-enter {
    top: 0;
    transform: translateY(60px);
  }
  .fade-enter-to {
    transform: translateY(0, 0);
  }
  .fade-transform-y-leave {
    opacity: 1;
  }
  .fade-transform-y-leave-to {
    transform: translateY(-60px);
  }
}

@media screen and (max-width: 768px) {
  .scroll {
    width: 100%;
    height: 30px;
    position: relative;
    .scroll-content {
      position: absolute;
      right: 0px;
      height: 30px;
      width: 90%;
      overflow: hidden;
      .aniamtedTop {
        transition: all 1s linear;
        margin-top: -30px;
      }
      li {
        font-size: 14px;
        color: #313131;
        font-weight: bold;
        line-height: 30px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
      }
    }
  }
}
</style>
