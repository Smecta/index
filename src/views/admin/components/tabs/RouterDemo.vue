<template>
    <div>
        我是about
        <hr>
        <!-- a标签中href属性不需要写地址，页面编译完成后自动会在href中加入对应的路劲 -->
        <!-- <ul class="subnave f-cb">
            
            <router-link :to='{name:"About"}' exact tag="li">
                <a>study</a>
            </router-link>
            <router-link :to='{name:"Work"}' tag="li">
                <a>work</a>
            </router-link>
            <router-link :to='{name:"Hobby"}' tag="li">
                <a>hobby</a>
            </router-link>
        </ul> -->
        测试数据：{{test}}
        <!-- <router-view></router-view> -->
    </div>
</template>
 
<script>
    export default {
        data(){
            return {
                test:'改变之前',
                demo:'wo de tian '
            }
        },
        beforeCreate(){//组件生命周期函数
            console.log('beforeCreate')
        },
        //当进入组件之前，执行 beforRouteEnter 路由钩子函数
        beforeRouteEnter(to,from,next){
            console.log('beforRouteEnter')
            console.log(to);
            console.log(this) // 结果为undefined，因为在执行beforRouteEnter时候，组件还没有被创建出来；先执行beforRouteEnter，再执行beforeCreate
            next((vm)=>{ //参数vm就是当前组件的实例。
                // vm.test = '我被改变了'
                console.log(vm);
            })
        },
        beforeRouteUpdate(to,from,next){
            console.log('beforeRouteUpdate')
            next()
        },
        beforeRouteLeave(to,from,next){//离开组件的时候触发
            //什么都不写的时候，不会离开(走下一步)
            next()
        }
    }
</script>
 