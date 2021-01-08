<template>
  <div>
      <a :href="url">
          <slot></slot>
      </a>
  </div>
</template>

<script>
export default {
    props:{
        url:String, 
    }
}
</script>

<style>

</style>