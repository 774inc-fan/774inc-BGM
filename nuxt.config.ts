import { NuxtConfig } from '@nuxt/types'
// import colors from 'vuetify/es5/util/colors'

const config: NuxtConfig = {
  srcDir: 'src',

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - ななしBGM',
    title: 'ななしBGM',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/composition-api',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    fallback: true,
  },

  // TypeScript Configuration (https://typescript.nuxtjs.org/guide/lint.html#configuration)
  typescript: {
    typeCheck: {
      eslint: {
        files: './src/**/*.{ts,js,vue}',
      },
    },
  },

  // Wathers Configuration (https://nuxtjs.org/api/configuration-watchers/)
  watchers: {
    webpack: {
      poll: 1000,
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    treeShake: true,
  },
}

export default config
