// const Vue = require('vue')
import 'styles/reset.less'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from 'store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App }
})