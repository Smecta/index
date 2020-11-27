<template>
  <div class="card-header top-name fs-xl d-flex jc-between ai-center my-1">
      {{cardTitle}}
  </div>
</template>

<script>
export default {
    props:{
        cardTitle:String
    }
}
</script>

<style scoped lang="scss">
.top-name {
  padding-left: 10px;
  border-left: 5px solid #f36d64;
  font-size: 15px;
  line-height: 20px;
  height:20px;
}
</style>