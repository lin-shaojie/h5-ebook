import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/icon.css'
import './assets/styles/global.scss'
import './assets/styles/mixin.scss'
import './utils/vant'
import i18n from './lang/index' // 国际化插件

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
