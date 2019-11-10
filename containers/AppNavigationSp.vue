<template>
  <div class="navigation-outer">
    <div class="navigation">
      <div class="navigation-header">
        <div class="navigation-header-logo">
          <nuxt-link to="/">
            <img src="/header-logotext.svg" alt="">
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  &-outer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
  }
  &-header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 0 5px 1px rgba(0,0,0,.05);
  }
}
</style>
