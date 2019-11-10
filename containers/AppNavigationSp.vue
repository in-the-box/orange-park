<template>
  <div class="navigation-outer">
    <div class="navigation">
      <div class="navigation-header">
        <div class="navigation-header-logo">
          <nuxt-link to="/">
            <img src="/header-logotext.svg" alt="">
          </nuxt-link>
        </div>
        <button :class="['navigation-header-button', isOpenMenu ? 'is-open' : '']" @click="toggleMenu">
          <div class="navigation-header-button-inner">
            <span class="navigation-header-button-border top" />
            <span class="navigation-header-button-border middle" />
            <span class="navigation-header-button-border bottom" />
          </div>
        </button>
      </div>
      <div :class="['navigation-body', isOpenMenu ? 'is-open' : '']">
        <div class="navigation-body-inner">
          menu
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('app', [
      'isOpenMenu'
    ])
  },
  methods: {
    ...mapActions('app', [
      'toggleMenu'
    ])
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  &-outer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
  }
  &-body {
    opacity: 0;
    pointer-events: none;
    height: calc(100vh - 60px);
    background-color: #eb5902;
    &.is-open {
      opacity: 1;
      pointer-events: initial;
    }
  }
  &-header {
    position: relative;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 0 5px 1px rgba(0,0,0,.1);
    &-logo {
      line-height: 0;
    }
    &-button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(-50%, -50%);
      width: 32px;
      height: 32px;
      appearance: none;
      padding: 0;
      background: none;
      border: none;
      &-inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &-border {
        display: block;
        width: 24px;
        height: 2px;
        background-color: #000;
        &.top {
          transform: translate(0, -4px);
        }
        &.bottom {
          transform: translate(0, 4px);
        }
      }
      &.is-open {
        .navigation-header-button-border {
          &.top {
            transform: translate(0, 2px) rotate(-45deg);
          }
          &.middle {
            transform: scaleX(0);
          }
          &.bottom {
            transform: translate(0, -2px) rotate(45deg);
          }
        }
      }
    }
  }
}
</style>
