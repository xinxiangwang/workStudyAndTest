// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import { routes } from './router'
import VueRouter from 'vue-router'

Vue.use(ElementUI)
Vue.config.productionTip = false
routes.unshift({
  path: '/',
  redirect: './container'
})
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
