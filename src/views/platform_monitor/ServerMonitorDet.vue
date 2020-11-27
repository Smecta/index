<template>
  <div>详细页面</div>
</template>

<script>
export default {
  data(){
    return{
      id:"",
    }
  },
  mounted(){
    this.getArticle();
  },
  methods: {
    getArticle() {
      //获取当前页面接收到的id
      this.id = this.$route.params && this.$route.params.id;
      console.log(this.id);
    },
  },
};
</script>

<style></style>
