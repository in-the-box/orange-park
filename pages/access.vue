<template>
  <div class="page">
    <el-section class="gray">
      <el-container>
        <el-card>
          <el-page-title sub-title="アクセス">
            ACCESS
          </el-page-title>
          <div class="access-image">
            <img src="/access.jpg" alt="">
          </div>
          <div class="access-group">
            <div class="access-map">
              <iframe
                class="access-map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3281.4244147930594!2d135.49456461523144!3d34.66923643044255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7ce3d2f776d%3A0x350543e266914523!2zT1JBTkdFIFBBUkso44Kq44Os44Oz44K444OR44O844KvKQ!5e0!3m2!1sja!2sjp!4v1572525462976!5m2!1sja!2sjp"
                width="600"
                height="400"
                frameborder="0"
                style="border:0;"
                allowfullscreen=""
              />
            </div>
            <div class="access-info">
              <div class="access-info-row">
                <div class="access-info-name">
                  名前
                </div>
                <div class="access-info-value">
                  ORANGE PARK（オレンジパーク）
                </div>
              </div>
              <div class="access-info-row">
                <div class="access-info-name">
                  住所
                </div>
                <div class="access-info-value">
                  〒550-0015<br>
                  大阪府大阪市西区南堀江１丁目４−１０<br>川西湊町ビル 3F
                </div>
              </div>
              <div class="access-info-row">
                <div class="access-info-name">
                  アクセス
                </div>
                <div class="access-info-value">
                  四つ橋線なんば駅より徒歩3分<br>
                  JR難波駅より徒歩5分<br>
                  四つ橋線四ツ橋駅より徒歩7分
                </div>
              </div>
              <div class="access-info-row">
                <div class="access-info-name">
                  駐車場
                </div>
                <div class="access-info-value">
                  徒歩5分圏内
                </div>
              </div>
              <div class="access-info-row">
                <div class="access-info-name">
                  営業時間
                </div>
                <div class="access-info-value">
                  10:00 ~ 22:00（不定休）
                </div>
              </div>
            </div>
          </div>
          <div class="access-button">
            <a href="https://www.google.com/maps?ll=34.669337,135.496719&z=16&t=m&hl=ja&gl=JP&mapclient=embed&cid=3820534498556200227" target="_blank" rel="noopener noreferrer">GoogleMapを開く</a>
          </div>
        </el-card>
      </el-container>
    </el-section>
  </div>
</template>

<style lang="scss" scoped>
.access {
  &-image {
    margin-bottom: 64px;
  }
  &-group {
    display: flex;
    margin-bottom: 32px;
  }
  &-info {
    border-top: solid #eee 2px;
    padding-top: 16px;
    width: 45%;
    &-row {
      display: flex;
      margin-bottom: 16px;
      padding-bottom: 16px;
      border-bottom: solid #eee 2px;
    }
    &-name {
      font-weight: bold;
      min-width: 100px;
    }
  }
  &-map {
    width: 50%;
    margin-right: 5%;
    &-iframe {
      width: 100%;
    }
  }
  &-button {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    a {
      color: #fff;
      background-color: #EB5902;
      display: inline-block;
      font-size: 24px;
      font-weight: bold;
      padding: 16px 48px;
      border: solid 4px #EB5902;
      border-radius: 8px;
      transition: ease-in .2s;
      &:hover {
        border: solid 4px #EB5902;
        background-color: #fff;
        color: #EB5902;
      }
    }
  }
}
</style>
