import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  srcDir: 'src',
  /*
   ** Headers of the page
   */
  head: {
    title: '774inc曲一覧',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '774incメンバーのBGMをまとめてます'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/composition-api'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    // customVariables: ['@/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.deepOrange.lighten1,
          secondary: colors.yellow.darken3,
          accent: colors.blueGrey,
          info: colors.teal.darken3,
          warning: colors.amber.darken3,
          error: colors.deepOrange.darken3,
          success: colors.green.darken3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) { }
  },
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  watchers: {
    webpack: {
      poll: true
    }
  }
}
