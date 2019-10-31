<template>
  <div class="scrollArea">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ElScrollArea'
}
</script>

<style lang="scss" scoped>
.scrollArea {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
