<template>
  <div>
      <el-button @click="sendToMessage">点我发送数据</el-button>
  </div>
</template>

<script>
import bus from '@/plugins/eventBus.js'

export default {
    data() {
        return {
            message:'我是planA的数据'
        }
    },
    methods: {
        sendToMessage(){
            bus.$emit('sendBybus',this.message)
            this.$message.success('发送成功！')
        }
    },
}
</script>

<style>

</style>