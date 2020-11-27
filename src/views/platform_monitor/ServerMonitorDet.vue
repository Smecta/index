<template>
  <div class="server-details">
    <div class="serverDetails-card">
      <CardHeader cardTitle="服务器详情页面"></CardHeader>
      <div class="top-btn fs-md">
        详细页面
        {{ id }}
        <el-button type="danger" @click="$router.replace('/index/ServerMonitor')">
          返回
        </el-button>
      </div>

      <div class="center-body">
        
      </div>
    </div>
  </div>
</template>

<script>
import CardHeader from "../../components/CardHeader"
export default {
  components:{
    CardHeader
  },
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      //获取当前页面接收到的id
      this.id = this.$route.params && this.$route.params.id;
      console.log(this.id);
    },
    // 请求数据
  },
};
</script>

<style scoped>
.serverDetails-card{
  position:relative
}
.top-btn{
  position: absolute;
  right:0;
  top:0;
}
</style>

