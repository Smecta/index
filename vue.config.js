// vue 前端代理 解决 cors 跨域问题
module.exports={
    devServer:{
        proxy:{
            // "/":{
            //     target:'http://10.88.212.43:8888',
            //     ws:true,
            //     changeOrign:true,
            //     pathRewrite:{
            //         '^/':''
            //     }
            // }
            // // /api 来定义目标地址 
            // "/api":{
            //     // 目标地址
            //     // target:'http://10.88.212.43:18783',
            //     // http://192.168.124.149:3008/courses
            //     target:'http://192.168.124.149:3008',
            //     ws:true,
            //     //开启跨域
            //     changeOrigin:true,
            //     //路由重写  对应上面的目标地址 用法： 比如 http://10.88.212.43:18783/api/sharedGateway/service/hottest  
            //     // axios 请求后不用设置baseURL 可直接 axios.get(/api/sharedGateway/service/hottest) 即可
            //     pathRewrite:{
            //         '^/api':''
            //     }
            // }
        }
    }
}