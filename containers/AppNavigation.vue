<template>
  <div :class="['navigation', color]">
    <div v-if="color === 'black'" class="navigation-logo">
      <nuxt-link to="/">
        <img src="/header-logo.svg" alt="パークン">
      </nuxt-link>
    </div>
    <div class="navigation-item">
      <nuxt-link class="navigation-link" to="/about">
        オレンジパークとは？
      </nuxt-link>
    </div>
    <div class="navigation-item">
      <nuxt-link class="navigation-link" to="/service">
        サービス
      </nuxt-link>
    </div>
    <div class="navigation-item">
      <nuxt-link class="navigation-link" to="/facility">
        施設紹介
      </nuxt-link>
    </div>
    <div class="navigation-item">
      <nuxt-link class="navigation-link" to="/access">
        アクセス
      </nuxt-link>
    </div>
    <div class="navigation-item">
      <nuxt-link class="navigation-link" to="/contact">
        お問い合わせ
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      default: 'white',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  position: absolute;
  z-index: 2;
  display: flex;
  top: 24px;
  left: 40px;
  &-logo {
    margin-right: 24px;
    margin-top: -8px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  &-item {
    font-weight: bold;
    margin-right: 16px;
  }
  &.white {
    .navigation-item {
      color: #fff;
    }
  }
}
</style>
