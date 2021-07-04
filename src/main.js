import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// ПОДКЛЮЧЕНА БИБЛИОТЕКА LODASH
// https://medium.com/js-dojo/how-to-use-lodash-with-vue-d1376ecc297a
// https://lodash.com/
// import lodashFunction_range from "lodash/range"; ПРИМЕР ИМПОРТА ОДНОЙ ФУНКЦИИ


// global-components
// import globalBtnLinkAllCountry from '@/global-components/globalBtnLinkAllCountry.vue'
// Vue.component('globalComponentBtnLinkAllCountry', globalBtnLinkAllCountry)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
