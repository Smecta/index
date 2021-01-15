<template>
  <div class="second">
    <div :class="{ animatedTop }">
      <div class="content" v-for="(item, index) in userData" :key="index">
        <div class="time">{{ item.time }}</div>
        <div class="user">{{ item.user }}</div>
        <span>编辑</span>
        <div class="content">{{ item.content }}</div>
        <span>词条</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: [
        { time: "11'", user: "洋洋洋", content: "毛戈平" },
        { time: "12'", user: "那年夏天风在吹", content: "listen" },
        { time: "13'", user: "那个男人", content: "Lenovo" },
        { time: "14'", user: "麦丽素聚享装", content: "麦丽素" },
        { time: "15'", user: "不厌平仄", content: "柳残阳" },
        { time: "16'", user: "爱吃榴莲的HH", content: "日式豚骨叉烧面" },
      ],
      animatedTop: false,
      userTimer: null,
    };
  },
  mounted() {
    setInterval(this.showScroll, 2000); //启动用户动态的定时器
  },
  methods: {
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
.second {
  height: 210px;
  overflow: hidden;
  margin-left: 20px;
  margin-top: 20px;
  .animatedTop {
    transition: transform 0.7s linear;
    transform: translateY(-45px);
  }
  .content {
    margin-top: 15px;
    display: flex;
    align-items: center;
    color: #666;
    &:nth-child(1) {
      margin-top: 0;
    }
    .time {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      color: black;
      &::after {
        position: absolute;
        top: 29px;
        content: "";
        width: 1px;
        height: 15px;
        background: #ccc;
      }
    }
    .user {
      color: #1890ff;
      margin: 0 5px 0 10px;
    }
    .content {
      color: black;
      margin: 0 5px;
    }
  }
}
</style>
