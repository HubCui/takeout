// 入口JS
import Vue from 'vue'
import app from './app'
import router from './router'

let vm = new Vue({
  el: '#app',
  render: h => h(app),
  router
})
Vue.use({
  vm
})
