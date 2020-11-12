<template>
  <div class="home">
    <div class="home-header">
      <div class="header-left">
        <div class="header-logo">logo</div>
        <div class="header-title">成都市水务数据资源交换开放门户</div>
      </div>
      <div class="header-right">
        <div class="header-nav">
          <ul>
            <li>首页</li>
            <li>资源目录</li>
            <li>数据目录</li>
            <li>用户工作台</li>
          </ul>
        </div>
        <div class="header-search">
          <i class="header-line"></i>
          <!-- <el-input 
                    placeholder="请输入内容"
                    v-model="input4">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input> -->
          <input type="text" placeholder="搜索服务内容" />
          <img src="" alt="" />
          <i class="header-line"></i>
        </div>
        <div class="header-login">登录</div>
        <div class="header-zhuce">立即注册</div>
      </div>
    </div>
    <div class="home-body">
      <div class="flex flex-row bg-gray-200 xl:flex-row">
        <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
        <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
        <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
      </div>
    </div>
    <div class="home-fooder"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-header {
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #000;
}
.header-left {
  display: flex;
  margin-left: 70px;
}
.header-logo {
  margin-right: 10px;
}
.header-title {
  font-weight: 700;
  letter-spacing: 0.2px;
}
.header-right {
  display: flex;
}
.header-nav ul {
  display: flex;
}
.header-nav ul li {
  list-style-type: none;
  margin-right: 30px;
}
.header-search::before {
  content: "";
  /* border-left:2px solid #000; */
}
.header-line {
  display: inline-block;
  height: 100%;
  border: 1 solid #000;
}
.header-search input {
  outline-style: none;
  border: 0;
  /* padding: 20px 0; */
  /* background: skyblue; */
}
</style>
