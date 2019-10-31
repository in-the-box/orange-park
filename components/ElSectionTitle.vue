<template>
  <div class="sectionTitle">
    <h1 class="sectionTitle-text">
      <slot />
    </h1>
    <p v-if="caption" class="sectionTitle-caption">
      {{ caption }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ElSectionTitle',
  props: {
    caption: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.sectionTitle {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  &-text {
    font-size: 32px;
    font-weight: bold;
  }
  &-caption {
    margin-left: 26px;
    font-size: 16px;
    color: #8D8D8D;
  }
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 23.5px;
    background-color: #EB5902;
    margin-right: 16px;
  }
}
</style>
