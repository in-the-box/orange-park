<template>
  <div class="page">
    <el-section class="gray">
      <el-container>
        <el-card>
          <el-page-title sub-title="お問い合わせ">
            CONTACT
          </el-page-title>
          <p class="contact-text">
            制作依頼、制作協力などお気軽にご相談ください。<br>
            お見積もりのご相談や制作可能かのご相談、わたしたちへの質問もお気軽にお問い合わせください。
          </p>
          <div>
            <el-form>
              <el-form-item name="お名前">
                <el-input />
              </el-form-item>
              <el-form-item name="メールアドレス">
                <el-input />
              </el-form-item>
              <el-form-item name="お問い合わせ内容">
                <el-textarea />
              </el-form-item>
            </el-form>
            <el-button :block="true">
              送信する
            </el-button>
          </div>
        </el-card>
      </el-container>
    </el-section>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  &-text {
    margin-bottom: 32px;
  }
}
</style>
