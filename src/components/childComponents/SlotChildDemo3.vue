<template>
  <div>
      <span>
          <slot :user="user" name="slot3">
              {{user.name}}
          </slot>

      </span>
  </div>
</template>

<script>

export default {

    data(){
        return {
            user:{
                name:"ch",
                age:18,
            }
        }
    }
}
</script>

<style scoped>
.qt{
    background:tomato;
}
</style>