export default {
    mode: 'universal',
    target: 'static',
    head: {
      title: 'Recipe App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    },
    css: [
      '~/assets/css/main.css'
    ],
    plugins: [
      '~/plugins/axios.js'
    ],
    modules: [
      '@nuxtjs/axios'
    ]
  }