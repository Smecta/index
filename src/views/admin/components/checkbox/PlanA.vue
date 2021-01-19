<template>
  <div>
    PlanA
    <el-button @click="sendToMessage">点击我想planB传递东西{{ message }}</el-button>
  </div>
</template>
<script>
import eventBus from '../../plugins/eventBus.js'
export default {
    data(){
        return {
            message:"我是段枕朋"
        }
    },
    methods: {
        sendToMessage(){
            this.message = "我是发送过去的数据"
            eventBus.$emit('sentBybus',this.message)
        }
    },
};
</script>

