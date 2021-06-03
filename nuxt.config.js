export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '烽火台企微运营官网',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '烽火台企微运营官网'
      },
      { name: 'referrer', content: 'no-referrer' } // 解决 网络图片 img 403问题
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }],
    script: [{ src: './rem.js', type: 'text/javascript', charset: 'utf-8' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    // 'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/reset.css',
    '@/assets/css/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui/element-ui',
    // '@/plugins/filter',
    '@/plugins/i18n'
    // '@/plugins/dat.gui.min'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    analyze: true,
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    /*
     ** You can extend webpack config here
     */
    vendor: ['vue-i18n'], // webpack vue-i18n.bundle.js
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
    // base: './',
    base: process.env.NODE_ENV === 'production' ? './' : '/',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      return { x: 0, y: 0 }
    },
    middleware: 'i18n'
  },
  server: {
    port: 5000
  },
  axios: {
    proxy: true,
    baseURL: 'http://m-dev.parllay.cn/'
  },
  target: 'static',
  proxy: {
    '/business2/': {
      target: 'http://10.27.3.103:8093/',
      pathRewrite: {
        '^/business/': '/'
      }
    },
    '/public/': {
      target: 'http://127.0.0.1:8999/'
    }
  }
}
