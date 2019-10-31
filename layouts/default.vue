<template>
  <div class="root">
    <app-navigation :color="isTop ? 'white' : 'black'" />
    <div class="pageOuter">
      <nuxt />
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppNavigation from '../containers/AppNavigation'
import AppFooter from '../containers/AppFooter'
export default {
  components: {
    AppNavigation,
    AppFooter
  },
  computed: {
    isTop () {
      return this.$route.path === '/'
    }
  }
}
</script>

<style>
html {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #1F1F1F;
  min-width: 1024px;
}
@media screen and (max-width: 768px) {
  html {
    min-width: initial;
  }
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  vertical-align: bottom;
}
</style>
