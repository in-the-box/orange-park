<template>
  <div class="navigation-outer">
    <div class="navigation">
      <div class="navigation-header">
        <div class="navigation-header-logo">
          <nuxt-link to="/">
            <img src="/header-logotext.svg" alt="ORANGE PARK">
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
          <div class="navigation-body-item" @click="toggleMenu">
            <nuxt-link class="navigation-body-link" to="/">
              <span class="title">HOME</span>
              <span>ホーム</span>
            </nuxt-link>
          </div>
          <div class="navigation-body-item" @click="toggleMenu">
            <nuxt-link class="navigation-body-link" to="/about">
              <span class="title">ABOUT</span>
              <span>オレンジパークとは？</span>
            </nuxt-link>
          </div>
          <div class="navigation-body-item" @click="toggleMenu">
            <nuxt-link class="navigation-body-link" to="/service">
              <span class="title">SERVICE</span>
              <span>サービス</span>
            </nuxt-link>
          </div>
          <div class="navigation-body-item" @click="toggleMenu">
            <nuxt-link class="navigation-body-link" to="/facility">
              <span class="title">FACILLTY</span>
              <span>施設紹介</span>
            </nuxt-link>
          </div>
          <div class="navigation-body-item" @click="toggleMenu">
            <nuxt-link class="navigation-body-link" to="/access">
              <span class="title">ACCESS</span>
              <span>アクセス</span>
            </nuxt-link>
          </div>
          <div class="navigation-body-item" @click="toggleMenu">
            <nuxt-link class="navigation-body-link" to="/contact">
              <span class="title">CONTACT</span>
              <span>お問い合わせ</span>
            </nuxt-link>
          </div>
          <div class="navigation-body-sns">
            <div class="navigation-body-sns-item">
              <a href="https://twitter.com/ORANGEPARK301" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16.243" viewBox="0 0 20 16.243">
                  <g transform="translate(0.001 -42.259)">
                    <path d="M20,44.188a8.179,8.179,0,0,1-2.36.635,3.98,3.98,0,0,0,1.8-2.259,8.046,8.046,0,0,1-2.6.99,4.109,4.109,0,0,0-5.895-.1,3.95,3.95,0,0,0-1.2,2.9,4.549,4.549,0,0,0,.1.939,11.422,11.422,0,0,1-4.715-1.263,11.621,11.621,0,0,1-3.737-3.027,4.108,4.108,0,0,0-.063,4.023A4.1,4.1,0,0,0,2.664,48.49a4.066,4.066,0,0,1-1.853-.52v.051a3.961,3.961,0,0,0,.933,2.608A4.033,4.033,0,0,0,4.1,52.043a4.247,4.247,0,0,1-1.079.139,5.229,5.229,0,0,1-.774-.063,4.108,4.108,0,0,0,3.832,2.843A8.026,8.026,0,0,1,.989,56.713,8.726,8.726,0,0,1,0,56.662,11.384,11.384,0,0,0,6.293,58.5a11.976,11.976,0,0,0,4.1-.691,10.418,10.418,0,0,0,3.274-1.853,12.4,12.4,0,0,0,2.341-2.671,11.912,11.912,0,0,0,1.466-3.153,11.65,11.65,0,0,0,.482-3.293q0-.355-.013-.533A8.584,8.584,0,0,0,20,44.188Z" fill="#eb5902" />
                  </g>
                </svg>
              </a>
            </div>
            <div class="navigation-body-sns-item">
              <a href="https://www.instagram.com/orangepark.301/" target="_blank" rel="noopener noreferrer">
                <svg id="instagram" xmlns="http://www.w3.org/2000/svg" width="18.707" height="18.707" viewBox="0 0 18.707 18.707">
                  <g>
                    <g>
                      <path d="M12.861,0H5.846A5.847,5.847,0,0,0,0,5.846v7.015a5.847,5.847,0,0,0,5.846,5.846h7.015a5.847,5.847,0,0,0,5.846-5.846V5.846A5.847,5.847,0,0,0,12.861,0Zm4.092,12.861a4.1,4.1,0,0,1-4.092,4.092H5.846a4.1,4.1,0,0,1-4.092-4.092V5.846A4.1,4.1,0,0,1,5.846,1.754h7.015a4.1,4.1,0,0,1,4.092,4.092Z" fill="#eb5902" />
                    </g>
                  </g>
                  <g transform="translate(4.677 4.677)">
                    <g>
                      <path d="M132.677,128a4.677,4.677,0,1,0,4.677,4.677A4.677,4.677,0,0,0,132.677,128Zm0,7.6a2.923,2.923,0,1,1,2.923-2.923A2.927,2.927,0,0,1,132.677,135.6Z" transform="translate(-128 -128)" fill="#eb5902" />
                    </g>
                  </g>
                  <g transform="translate(13.758 3.703)">
                    <g>
                      <circle cx="0.623" cy="0.623" r="0.623" fill="#eb5902" />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
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
    position: fixed;
    top: 60px;
    left: 0;
    opacity: 0;
    pointer-events: none;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: rgba(235, 89, 2, 0.95);
    &.is-open {
      opacity: 1;
      pointer-events: initial;
    }
    &-inner {
      padding: 32px 24px;
    }
    &-link {
      display: block;
    }
    &-item {
      color: #fff;
      font-weight: bold;
      .title {
        display: block;
        font-size: 24px;
      }
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
    &-sns {
      margin-top: 32px;
      display: flex;
      justify-content: flex-end;
      &-text {
        text-align: center;
        color: #fff;
        margin-bottom: 16px;
        font-weight: bold;
      }
      &-item {
        &:not(:last-child) {
        margin-right: 16px;
        }
      }
      &-item a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 100%;
      }
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
    z-index: 2;
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
