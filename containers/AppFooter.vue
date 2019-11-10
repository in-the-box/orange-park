<template>
  <div>
    <el-section color="white">
      <el-container>
        <div class="store">
          <div class="store-image">
            <img src="/store.jpg" alt="">
          </div>
          <div class="store-inner">
            <p class="store-inner-text">
              ONLINE STORE
            </p>
            <a class="store-inner-button" href="https://orangepark.stores.jp/" target="_blank" rel="noopener noreferrer">
              ORANGEPARK.STORES.JP
            </a>
          </div>
        </div>
      </el-container>
    </el-section>
    <footer class="footer">
      <el-container>
        <div class="footer-navigation">
          <div class="footer-navigation-item">
            <nuxt-link to="/">
              ホーム
            </nuxt-link>
          </div>
          <div class="footer-navigation-item">
            <nuxt-link to="/about">
              オレンジパークとは？
            </nuxt-link>
          </div>
          <div class="footer-navigation-item">
            <nuxt-link to="/service">
              サービス
            </nuxt-link>
          </div>
          <div class="footer-navigation-item">
            <nuxt-link to="/facility">
              施設紹介
            </nuxt-link>
          </div>
          <div class="footer-navigation-item">
            <nuxt-link to="/access">
              アクセス
            </nuxt-link>
          </div>
          <div class="footer-navigation-item">
            <nuxt-link to="/contact">
              お問い合わせ
            </nuxt-link>
          </div>
        </div>
        <div class="footer-logo">
          <img src="/footer-logo.svg" alt="パークン">
        </div>
        <p class="footer-createdBy">
          Created by <a href="https://pixelgram.jp" target="_blank" rel="noopener noreferrer">PIXELGRAM</a>
        </p>
        <p class="footer-copyright">
          © ORANGE PARK
        </p>
      </el-container>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.store {
  position: relative;
  &-image {
    user-select: none;
    pointer-events: none;
    height: 600px;
    @media screen and (max-width: 768px) {
      height: 380px;
    }
    img {
      object-fit: cover;
      height: 100%;
    }
  }
  &-inner {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    &-text {
      color: #fff;
      font-size: 56px;
      font-weight: bold;
      margin-bottom: 24px;
      @media screen and (max-width: 768px) {
        font-size: 18px;
      }
    }
    &-button {
      display: inline-block;
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      padding: 16px 48px;
      border: solid 4px #fff;
      border-radius: 8px;
      transition: ease-in .2s;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
      &:hover {
        background-color: #fff;
        color: #EB5902;
      }
    }
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background-color: #000;
    width: 100%;
    height: 100%;
    opacity: .2;
  }
}
.footer {
  padding: 64px 0 32px;
  background-color: #238B45;
  @media screen and (max-width: 768px) {
    padding: 0 0 32px;
  }
  &-navigation {
    display: flex;
    justify-content: center;
    margin-bottom: 56px;
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    &-item {
      color: #fff;
      font-weight: bold;
      margin-right: 16px;
      display: flex;
      align-items: center;
      @media screen and (max-width: 768px) {
        width: 50%;
        margin-right: 0;
      }
      a {
        display: inline-block;
        margin-right: 16px;
        @media screen and (max-width: 768px) {
          text-align: center;
          margin-right: 0;
          display: block;
          width: 100%;
          padding: 16px 8px;
          background-color: #238b45;
          border: solid #fff 1px;
          border-top: none;
          border-left: none;
        }
        &:hover {
          text-decoration: underline
        }
      }
      &:not(:last-child):after {
        margin-bottom: -2px;
        content: '';
        display: block;
        width: 2px;
        height: 100%;
        background-color: #fff;
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
  &-logo {
    text-align: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 32px;
  }
  &-createdBy {
    text-align: center;
    color: #fff;
    font-weight: bold;
    margin-bottom: 24px;
    a {
      color: #fff
    }
  }
  &-copyright {
    font-size: 12px;
    text-align: center;
    color: #fff;
    font-weight: bold;
  }
}
</style>
