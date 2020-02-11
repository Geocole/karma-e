const webpack = require("webpack");

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
      '@/assets/css/linearicons.css',
      '@/assets/css/font-awesome.min.css',
      '@/assets/css/themify-icons.css',
      '@/assets/css/bootstrap.css',
      '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
      '~/node_modules/owl.carousel/dist/assets/owl.carousel.css',
      '~/node_modules/jquery-nice-select/css/nice-select.css',
      '~/node_modules/nouislider/distribute/nouislider.css',
      '~/node_modules/ion-rangeslider/css/ion.rangeSlider.css',
      '~/node_modules/magnific-popup/dist/magnific-popup.css',
      { src: '~assets/scss/main.scss', lang: 'sass' },
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      { src: '~plugins/bootstrap', ssr: false },
      { src: '~plugins/main', mode: 'client' }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
      '@nuxtjs/moment'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
      /**
       * add external plugins
       */
      vendor: ["jquery",
          "bootstrap",
          "ajaxchimp",
          "jquery-nice-select",
          "jquery.sticky",
          "nouislider",
          "countdown",
          "magnific-popup",
          "owl.carousel",
          //"~plugins/main"
      ],
      plugins: [
          new webpack.ProvidePlugin({
              $: "jquery"
          })
          ]
  }
}
