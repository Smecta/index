<template>
  <el-card class="wrapper">
    <div class="title">无缝播报</div>
    <div class="scroll">
      <div class="scroll-content">
        <ul :class="{ aniamtedTop }">
          <li
            v-for="(item, index) in data"
            :key="index + 'iuhv'"
            @click="goDetail(item)"
          >
            {{ item.title }}
          </li>
        </ul>
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
        { id: 1, title: "不知道工资条长什么样子的" },
        { id: 2, title: "今天最低零下11度" },
        { id: 3, title: "在办公室里热的要死" },
        { id: 4,title: "不知道工之前的公司都是发邮箱 或者 自己去查资条长什么样子的",},
        { id: 5, title: "你睡了晚上就又要“奋斗”了吗" },
      ],
    };
  },
  mounted() {
    setInterval(this.showScroll, 2000);
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
      }, 3000);
    },
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
  }
  .scroll {
    width: 100%;
    height: 40px;
    position: relative;
    .scroll-content {
      position: absolute;
      right: 0px;
      height: 40px;
      width: 90%;
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
