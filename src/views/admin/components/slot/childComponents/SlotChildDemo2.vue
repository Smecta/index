<template>
  <div>
      <header  style="color:skyblue">
          <slot name="header"></slot>
      </header>
      <main>
          <slot></slot>
      </main>
      <footer>
          <slot name="footer"></slot>
      </footer>
      <div class="qt" style="font-weight:700">
          <slot name="qt"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.qt{
    background:tomato;
}
</style>