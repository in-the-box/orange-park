<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ElContainer'
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1258px ;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
}
</style>
