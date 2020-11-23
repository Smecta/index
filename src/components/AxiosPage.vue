<template>
    <div>
        轮询方式
        <button @click="getStatus">发请求拿数据</button>
        <span>状态：{{status}}</span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                status: ''
            }
        },
        computed: {
            // 计算属性
            // statusData() { return this.status }
        },
        watch: {
            // statusData: function (newval) {
            //     // 当返回的新值为创建中的时候,保持3秒轮询
            //     if (newval == 'creating') {
            //         var timer = setInterval(() => {
            //             setTimeout(this.getStatus, 0)
            //         }, 3000)
            //     }
            //     // 当返回的新值为成功的时候,关闭定时器,结束轮询
            //     if (newval == 'success') {
            //         clearInterval(timer)
            //     }
            //     // 当页面关闭的时候,结束轮询,否则就会一直发请求,
            //     //使用$once(eventName, eventHandler)一次性监听事件
            //     this.$once('hook:boforeDestory', () => {
            //         clearInterval(timer)
            //     })
            // }
        },
        methods: {
            getStatus() {
                this.axios("https://api.66mz8.com/api/sweet.php?format=json").then(res => {
                    if (res.status == 200) this.$message.success('请求成功')
                    console.log(res);
                    this.status = res.data.sweet
                    setTimeout(this.getStatus,10*1000)
                })
            }
        },
    }
</script>