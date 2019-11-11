<template>
  <div class="page">
    <el-section class="gray">
      <el-container>
        <el-card>
          <el-page-title sub-title="お問い合わせ">
            CONTACT
          </el-page-title>
          <p class="contact-text">
            オレンジパークについてのお問い合わせは、下記のメールフォームより受け付けております。<br>
            パークのご利用方法、イベント・展示でのレンタル利用についてのご質問やご相談など、気軽にお問い合わせください。<br>
            担当者よりご連絡させていただきます｡
          </p>
          <div>
            <el-form>
              <el-form-item name="お名前">
                <el-input v-model="name" :is-error="errors.name" placeholder="パークン" />
              </el-form-item>
              <el-form-item name="メールアドレス">
                <el-input v-model="mail" :is-error="errors.mail" placeholder="orangepark@example.com" />
              </el-form-item>
              <el-form-item name="お問い合わせ内容">
                <el-textarea v-model="body" :is-error="errors.body" />
              </el-form-item>
            </el-form>
            <el-button :block="true" @click="onSubmit">
              送信する
            </el-button>
          </div>
        </el-card>
      </el-container>
    </el-section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  head () {
    return {
      title: 'お問い合わせ'
    }
  },
  data () {
    return {
      name: '',
      mail: '',
      body: '',
      isSending: false,
      errors: {
        name: false,
        mail: false
      }
    }
  },
  computed: {
    isSendable () {
      return this.name !== '' && this.mail !== '' && this.body !== ''
    }
  },
  watch: {
    name () {
      if (this.errors.name && this.name) {
        this.errors.name = false
      }
    },
    mail () {
      if (this.errors.mail && this.mail) {
        this.errors.mail = false
      }
    },
    body () {
      if (this.errors.body && this.body) {
        this.errors.body = false
      }
    }
  },
  methods: {
    send () {
      const payload = {
        text: `
ホームページからのお問い合わせがありました！！
張り切ってどうぞ！！

ーーーーーーー

${this.name}<${this.mail}>
${this.body}
`
      }
      return axios.post('https://hooks.slack.com/services/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', JSON.stringify(payload))
    },
    onSubmit () {
      if (this.isSendable) {
        if (!this.isSending) {
          this.isSending = true
          this.send().then((res) => {
            this.name = ''
            this.mail = ''
            this.body = ''
            this.$router.push('/')
          })
            .finally(() => {
              this.isSending = false
            })
        }
      } else {
        if (!this.name) {
          this.errors.name = true
        }
        if (!this.mail) {
          this.errors.mail = true
        }
        if (!this.body) {
          this.errors.body = true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  &-text {
    line-height: 2;
    margin-bottom: 32px;
  }
}
</style>
