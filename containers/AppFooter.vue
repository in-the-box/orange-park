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
      <div class="footer-sns">
        <p class="footer-sns-text">
          最新情報発信中
        </p>
        <div class="footer-sns-inner">
          <div class="footer-sns-item">
            <a href="https://twitter.com/ORANGEPARK301" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16.243" viewBox="0 0 20 16.243">
                <g transform="translate(0.001 -42.259)">
                  <path d="M20,44.188a8.179,8.179,0,0,1-2.36.635,3.98,3.98,0,0,0,1.8-2.259,8.046,8.046,0,0,1-2.6.99,4.109,4.109,0,0,0-5.895-.1,3.95,3.95,0,0,0-1.2,2.9,4.549,4.549,0,0,0,.1.939,11.422,11.422,0,0,1-4.715-1.263,11.621,11.621,0,0,1-3.737-3.027,4.108,4.108,0,0,0-.063,4.023A4.1,4.1,0,0,0,2.664,48.49a4.066,4.066,0,0,1-1.853-.52v.051a3.961,3.961,0,0,0,.933,2.608A4.033,4.033,0,0,0,4.1,52.043a4.247,4.247,0,0,1-1.079.139,5.229,5.229,0,0,1-.774-.063,4.108,4.108,0,0,0,3.832,2.843A8.026,8.026,0,0,1,.989,56.713,8.726,8.726,0,0,1,0,56.662,11.384,11.384,0,0,0,6.293,58.5a11.976,11.976,0,0,0,4.1-.691,10.418,10.418,0,0,0,3.274-1.853,12.4,12.4,0,0,0,2.341-2.671,11.912,11.912,0,0,0,1.466-3.153,11.65,11.65,0,0,0,.482-3.293q0-.355-.013-.533A8.584,8.584,0,0,0,20,44.188Z" fill="#238b45" />
                </g>
              </svg>
            </a>
          </div>
          <div class="footer-sns-item">
            <a href="https://www.instagram.com/orangepark.301/" target="_blank" rel="noopener noreferrer">
              <svg id="instagram" xmlns="http://www.w3.org/2000/svg" width="18.707" height="18.707" viewBox="0 0 18.707 18.707">
                <g>
                  <g>
                    <path d="M12.861,0H5.846A5.847,5.847,0,0,0,0,5.846v7.015a5.847,5.847,0,0,0,5.846,5.846h7.015a5.847,5.847,0,0,0,5.846-5.846V5.846A5.847,5.847,0,0,0,12.861,0Zm4.092,12.861a4.1,4.1,0,0,1-4.092,4.092H5.846a4.1,4.1,0,0,1-4.092-4.092V5.846A4.1,4.1,0,0,1,5.846,1.754h7.015a4.1,4.1,0,0,1,4.092,4.092Z" fill="#238b45" />
                  </g>
                </g>
                <g transform="translate(4.677 4.677)">
                  <g>
                    <path d="M132.677,128a4.677,4.677,0,1,0,4.677,4.677A4.677,4.677,0,0,0,132.677,128Zm0,7.6a2.923,2.923,0,1,1,2.923-2.923A2.927,2.927,0,0,1,132.677,135.6Z" transform="translate(-128 -128)" fill="#238b45" />
                  </g>
                </g>
                <g transform="translate(13.758 3.703)">
                  <g>
                    <circle cx="0.623" cy="0.623" r="0.623" fill="#238b45" />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-logo">
        <img src="/footer-logo.svg" alt="パークン">
      </div>
      <p class="footer-createdBy">
        Powerted by <a href="https://pixelgram.jp" target="_blank" rel="noopener noreferrer">PIXELGRAM</a>
      </p>
      <p class="footer-copyright">
        © ORANGE PARK
      </p>
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
      height: 400px;
    }
    @media screen and (max-width: 425px) {
      height: 240px;
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
        margin-bottom: 16px;
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
      &:nth-child(2n) a {
        @media screen and (max-width: 768px) {
          border-right: none;
        }
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
  &-sns {
    margin-top: 64px;
    margin-bottom: 64px;
    &-text {
      text-align: center;
      color: #fff;
      margin-bottom: 16px;
      font-weight: bold;
    }
    &-inner {
      display: flex;
      justify-content: center;
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
