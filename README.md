# demo-home

# hh

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### VUE使用normalize.css
npm安装
```
npm install --save normalize.css
```
main.js引入
``` js
import 'normalize.css/normalize.css'
```

### vue 中引入font-awesome

入口js中引入

npm
``` bash
npm install font-awesome --save
```
直接引入
``` js
import 'font-awesome/css/font-awesome.min.css' 
```

### sass 开发环境安装
``` bash
npm i -D sass sass-loader
```
在入口js中引入自己创建的 `style.css`
``` js
import './src/assets/css/style.scss' 
```

### 安装nprogress 开启axios请求进度条
npm
``` bash
    npm install --save nprogress
```
yarn
``` bash
    yarn add nprogress
```
在axios请求和响应拦截器中使用 
首先要引入
``` js
    import NProgress from 'nprogress'
    import 'nprogress/nprogress.css'
```
直接调用 `start()`或者`done()`来控制进度条
``` js
    NProgress.start();
    NProgress.done();
```
### monment.js 日期处理类库

npm & yarn 安装
``` bash
npm install moment --save   # npm
yarn add moment             # Yarn
```

在main.js 中使用
``` js
    import moment from "moment";
    Vue.prototype.$moment = moment;
```
一般我们只需要日期格式化即可：
```
moment(要格式化的内容).format("YYYY-MM-DD HH:mm:ss") 
```

### lodash js实用工具库

npm 安装

``` bash
    npm i --save lodash
```
在main.js中使用：
import _ from "lodash";
在页面中使用： let data = _.cloneDeep(this.userInfoData)
cloneDeep：深度克隆JavaScript对象