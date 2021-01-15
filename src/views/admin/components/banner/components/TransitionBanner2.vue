<template>
  <div id="slider">
    <div class="window" @mouseover="stop" @mouseleave="play">
      <div class="container" :style="containerStyle">
        <img :src="sliders[sliders.length - 1].img" />
        <img v-for="(item, index) in sliders" :key="index" :src="item.img" />
        <img :src="sliders[0].img" />
      </div>
      <div class="arrow">
        <div class="arrow-left arrow-item" @click="move(1200, 1, speed)">
          <i class="el-icon-arrow-left icon" />
        </div>
        <div class="arrow-right arrow-item" @click="move(1200, -1, speed)">
          <i class="el-icon-arrow-right icon" />
        </div>
      </div>
      <div class="direction">
        <div class="left" @click="move(1200, 1, speed)">
          <i class="el-icon-arrow-left icon" />
        </div>
        <div class="right" @click="move(1200, -1, speed)">
          <i class="el-icon-arrow-right icon" />
        </div>
      </div>
      <ul class="dots">
        <li
          v-for="(dot, i) in sliders"
          :key="i"
          :class="{ dotted: i === currentIndex - 1 }"
          @click="jump(i + 1)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "slider",
  props: {
    initialSpeed: {
      type: Number,
      default: 30,
    },
    initialInterval: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      sliders: [
        {
          img: require("@/assets/img/banner/source1/1.jpg"),
        },
        {
          img: require("@/assets/img/banner/source1/2.jpg"),
        },
        {
          img: require("@/assets/img/banner/source1/3.jpg"),
        },
        {
          img: require("@/assets/img/banner/source1/4.jpg"),
        },
        {
          img: require("@/assets/img/banner/source1/5.jpg"),
        },
      ],
      currentIndex: 1,
      distance: -1200,
      transitionEnd: true,
      speed: this.initialSpeed,
    };
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`,
      };
    },
    interval() {
      return this.initialInterval * 1000;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.play();
      window.onblur = function() {
        this.stop();
      }.bind(this);
      window.onfocus = function() {
        this.play();
      }.bind(this);
    },
    move(offset, direction, speed) {
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      direction === -1
        ? (this.currentIndex += offset / 1200)
        : (this.currentIndex -= offset / 1200);
      if (this.currentIndex > 5) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = 5;

      const destination = this.distance + offset * direction;
      this.animate(destination, direction, speed);
    },
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null;
      }
      this.temp = window.setInterval(() => {
        const length = this.sliders.length;
        if (
          (direc === -1 && des < this.distance) ||
          (direc === 1 && des > this.distance)
        ) {
          this.distance += speed * direc;
        } else {
          this.transitionEnd = true;
          window.clearInterval(this.temp);
          this.distance = des;
          if (des < -(length * 1200)) this.distance = -1200;
          if (des > -1200) this.distance = -(length * 1200);
        }
      }, 20);
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(index - this.currentIndex) * 1200;
      const jumpSpeed =
        Math.abs(index - this.currentIndex) === 0
          ? this.speed
          : Math.abs(index - this.currentIndex) * this.speed;
      this.move(offset, direction, jumpSpeed);
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = window.setInterval(() => {
        this.move(1200, -1, this.speed);
      }, this.interval);
    },
    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
.window {
  position: relative;
  width: 1200px;
  height: 300px;
  overflow: hidden;
  .container {
    display: flex;
    position: absolute;
    img {
      width: 1200px;
      height: 300px;
    }
  }
  .arrow {
    &-item {
      width: 40px;
      height: 40px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 50%;
      .icon {
        color: white;
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
  .dots {
    position: absolute;
    bottom: 20px;
    right: 40px;
    li {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin: 0 3px;
      border: 1px solid#ccc;
      border-radius: 50%;
      background-color: white;
      cursor: pointer;
    }
    .dotted {
      background-color: #1890ff;
    }
  }
}
</style>
