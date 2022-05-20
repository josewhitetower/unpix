import Vue from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import feather from 'vue-icon'
import infiniteScroll from 'vue-infinite-scroll'
import i18n from './plugins/i18n'
Vue.use(infiniteScroll)
Vue.use(feather, 'v-icon')
Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
