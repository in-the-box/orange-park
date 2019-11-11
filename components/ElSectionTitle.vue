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
  @media screen and (max-width: 768px) {
    display: block;
    margin-bottom: 24px;
  }
  &-text {
    font-size: 32px;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      margin-left: 16px;
    }
  }
  &-caption {
    margin-left: 24px;
    font-size: 16px;
    color: #8D8D8D;
    @media screen and (max-width: 768px) {
      margin-left: 16px;
      font-size: 14px;
    }
  }
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 23.5px;
    background-color: #EB5902;
    margin-right: 16px;
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 48px;
    }
  }
}
</style>
