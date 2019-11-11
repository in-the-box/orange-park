import app from './configs/app'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'ORANGE PARK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '19年10月、大阪・なんばにコワーキング、ギャラリー、イベントスペースとして利用できる屋内公園として誕生。子供のようにピュアにのびのびと仕事や関心事、やりたいことに取り組めるだけでなく、ここで出会った人たちと繋がり、フェアに語り合い、時には一緒に何かを作り、新たなコンテンツやカルチャーを生み出していく拠点となる、みんなのコミニケーションの場として開放中。' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap&subset=japanese'
      }
    ]
  },
  meta: {
    lang: app.lang,
    name: app.name,
    author: app.author,
    description: app.description,
    theme_color: app.theme_color,
    mobileAppIOS: true,
    viewport: 'width=device-width,initial-scale=1',
    ogType: 'website',
    ogSiteName: app.name,
    ogTitle: app.name,
    ogDescription: app.description,
    ogHost: app.host,
    ogImage: {
      path: 'card.jpg'
    },
    ogUrl: app.url,
    twitterCard: 'summary_large_image',
    nativeUI: true
  },
  manifest: {
    name: app.name,
    short_name: 'ORANGE PARK',
    start_url: '/',
    display: 'standalone',
    background_color: '#7AF562',
    description: app.description
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/components.js' },
    { src: '~/plugins/window-size-observer.js', ssr: false }
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://orangepark.pixelgram.jp',
    gzip: true,
    cacheTime: 1000 * 60 * 15,
    generate: true
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-149592533-1'
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
