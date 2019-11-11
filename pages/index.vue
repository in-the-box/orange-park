<template>
  <div class="page">
    <div class="mv">
      <div class="mv-logo">
        <img src="/logo.svg" alt="パークン">
      </div>
      <div class="mv-info">
        10:00 ~ 22:00 まで営業中（不定休）
      </div>
    </div>
    <el-section class="gray">
      <el-container>
        <el-section-title caption="最新情報をお届けします">
          新着ニュース
        </el-section-title>
        <el-card>
          <el-scroll-area>
            <div>オレンジパークがオープンしました</div>
          </el-scroll-area>
        </el-card>
      </el-container>
    </el-section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'ホーム'
    }
  }
}
</script>

<style lang="scss" scoped>
.mv {
  position: relative;
  background-color: #139646;
  margin: 0 auto;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 24px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 768px) {
    min-height: 400px;
    padding-bottom: 36px;
  }
  img {
    pointer-events: none;
    user-select: none;
    @media screen and (max-width: 768px) {
      width: 240px;
    }
  }
  &-info {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #EB5902;
    padding: 16px 56px;
    @media screen and (max-width: 768px) {
      width: 100%;
      text-align: center;
      padding: 8px;
    }
  }
}
</style>
