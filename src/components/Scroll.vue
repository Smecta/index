<template>
    <div class="scroll">
        <div class="scroll-content">
            <div class="scroll-right">
                <ul :class="{aniamtedTop}">
                    <li v-for="(item,index) in scrollList" :key="index">
                        {{item.title}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        scrollList:Array
    },
    data(){
        return{
            aniamtedTop:false,
            // scrollList:[
            //     {
            //         id:0,
            //         title:"北京旅游落地签如何搞定？360°带您了解北京古城360°带您了解北京古城"
            //     },
            //     {
            //         id:1,
            //         title:"棒子旅游地是怎么个回事？我们一谈究竟"
            //     },
            //     {
            //         id:2,
            //         title:"日本🇯🇵北海道 一日游，免费了参与活动可赢取七日游"
            //     },
            //     {
            //         id:3,
            //         title:"什么❓海南省到北京双人游秒杀7日半价回馈"
            //     }
            // ]
        }
    },
    mounted(){
        setInterval(this.showScroll,2000)
    },
    methods:{
        // 滚动消息 方法
        showScroll(){
            this.aniamtedTop = true;
            setTimeout(()=>{
                this.scrollList.push(this.scrollList[0])
                this.scrollList.shift()
                this.aniamtedTop=false;
            },500)
        }
    }
}
</script>

<style scoped>
.aniamtedTop{
    transition: all .5s;
    margin-top: -10px;
}

.scroll{
    padding:20px 0;
}
.scroll-content{
    background-size:100%;
    width:100%;
    height:20px;
}
.scroll-right{
    height:20px;
    width:100%;

    text-align: center;
    overflow: hidden;
}
li{
    font-size:20px;
    color:dodgerblue;
    line-height: 20px;
    /* 溢出隐藏 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>