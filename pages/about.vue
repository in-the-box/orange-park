<template>
  <div class="page">
    <el-section class="gray">
      <el-container>
        <el-card>
          <el-page-title sub-title="オレンジパークとは？">
            <img src="/about-logoText.svg" alt="ORANGE PARK">
          </el-page-title>
          <div class="about-image">
            <img src="/about.jpg" alt="オレンジパークの作業風景">
          </div>
          <h2 class="about-heading02">
            「オレンジパーク」は<br>大阪なんばに新たに開園した公園です!!
          </h2>
          <p class="about-text">
            わたしたちが想い浮かべる公園といえば、ピクニックやランニング、犬の散歩、休憩など様々な目的を持った人が集まる公共の広場のイメージかと思います。そこでは、すれ違った人と挨拶したり、偶然に会った人たちと会話してみたりと、コミュニケーションが生まれることもしばしば。<br>
            もし、年齢、国籍、性別問わず、だれもが気軽に立ち寄れて、誰かと誰かが、それぞれの目的が、交差することで日々何かが生まれる公園のような場所で仕事やイベントができたら、、、<br>
            仲間や未だ出会っていない誰かと、おもしろいことができたり、新しいコンテンツやサービスが生まれるかもしれません。<br>
            子供のようにピュアに自分の関心事ややりたいことに取り組めて、そこで出会った人たちと繋がり、時にはフェアに語り合ったり、時には何かを作り、起こし、発信していくことで<br>
            自然と、新しいシーンやカルチャーが生まれていくはず…<br>
            その拠点となるような場所、集まれる場所として誕生した公園が、このオレンジパークです。
          </p>
        </el-card>
      </el-container>
    </el-section>
  </div>
</template>

<style lang="scss" scoped>
.about {
  &-heading01 {
    margin-top: 126px;
    text-align: center;
    margin-bottom: 80px;
    &-image {
      margin-bottom: 16px;
    }
    &-text {
      font-weight: bold;
      font-size: 24px;
    }
  }
  &-heading02 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #238B45;
    margin-bottom: 40px;
    line-height: 2;
  }
  &-image {
    margin-bottom: 40px;
  }
  &-text {
    font-size: 20px;
    font-weight: bold;
    line-height: 2;
  }
}
</style>
