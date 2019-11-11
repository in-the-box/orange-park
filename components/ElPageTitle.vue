<template>
  <div class="pageTitle">
    <h1>
      <slot />
    </h1>
    <p v-if="subTitle" class="about-heading01-text">
      {{ subTitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ElPageTitle',
  props: {
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.pageTitle {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 64px;
  @media screen and (max-width: 768px) {
    margin-bottom: 48px;
    margin-top: 24px;
  }
  h1 {
    font-size: 64px;
    font-weight: bold;
    line-height: .8;
    margin-bottom: 16px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
      margin-bottom: 8px;
    }
  }
  p {
    font-weight: bold;
    font-size: 24px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
  img {
    @media screen and (max-width: 768px) {
      width: 240px;
    }
  }
}
</style>
