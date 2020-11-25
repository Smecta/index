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

### 菜菜是个坏蛋

### VUE使用normalize.css
1. 安装
npm install --save normalize.css
1. main.js引入
import 'normalize.css/normalize.css'

### vue 中引入font-awesome

入口js中引入
直接引入npm install font-awesome --save就可以了
import 'font-awesome/css/font-awesome.min.css' 

### sass 开发环境安装
npm i -D sass sass-loader
在入口js中引入自己创建的 style.css
import './src/assets/css/style.scss'