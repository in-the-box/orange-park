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
      { hid: 'description', name: 'description', content: 'ORANGE PARK' }
    ],
    link: []
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
  ],
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
