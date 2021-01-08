<template>
  <div class="nav d-flex flex-column jc-center ai-center bg-black" style="height:100vh">
        <h1 class="text-white pb-2">Demo页面</h1>
        <div class="d-flex fs-xxl text-light ">
          <div class="nav-item pr-5" @click="$router.push('/home')">home</div>
          <div class="nav-item pr-5" @click="$router.push('/admin')">demo/Admin</div>
          <div class="nav-item pr-5" @click="$router.push('/index')">demo/Index</div>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.nav-item:last-child{
  padding-right:0;
}
</style>