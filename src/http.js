import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import Vue from 'vue'
// import router from './router/router'
// 关闭加载环
NProgress.configure({ showSpinner: false })
const http = axios.create({
    baseURL:'http://10.88.212.43:8888/'
})
// 请求 拦截器
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    NProgress.start()
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 // response 拦截器中,  隐藏进度条NProgress.done()
http.interceptors.response.use(config => {
    NProgress.done()
    return config
  })

export default http