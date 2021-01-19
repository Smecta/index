<template>
  <div>
    PlanB
    <el-button @click="getMessage"> 点我就展示数据</el-button>
    <span v-if="isShow">{{ messageStr }}</span>
  </div>
</template>

<script>
import eventBus from "../../plugins/eventBus.js";

export default {
  data() {
    return {
      messageStr: "",
      isShow:false
    };
  },
  mounted() {
    eventBus.$on("sentBybus", (data) => {
      console.log(data);
      this.messageStr = data;
      console.log(this.messageStr);
    });
  },
  methods: {
    getMessage() {
      console.log("planB组件");
      this.isShow = true
    },
  },
};
</script>

<style></style>
