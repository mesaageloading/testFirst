import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '@/store/index.js'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
// 加入这句话 表示下面的代码不需要语法检测
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
