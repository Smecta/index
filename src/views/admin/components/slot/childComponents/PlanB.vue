<template>
  <div>
      <el-button @click="showMessage">点我打开接收到的数据</el-button>
      <span v-if="isShow" style="margin-left:20px; font-size:20px;">{{ message }}</span>
  </div>
</template>

<script>
import bus from '@/plugins/eventBus.js'

export default {
    data() {
        return {
            message:'', // * 初始化数据
            isShow:false,// * 默认关闭
        }
    },
    mounted() {
        // * 兄弟接受数据并赋值给message
        bus.$on('sendBybus', data => {
            console.log(data);
            this.message = data
            console.log(this.message);
        })
    },
    methods: {
        showMessage(){
            // * 打开开关
            this.isShow = !this.isShow
        }
    },
}
</script>

<style>

</style>