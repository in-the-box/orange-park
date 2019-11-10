<template>
  <section :class="['section', color]">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'ElSection',
  props: {
    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding: 80px 0;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  &.white {
    background-color: #FFFFFF;
  }
  &.gray {
    background-color: #F3F3F3;
  }
}
</style>
