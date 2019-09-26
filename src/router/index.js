import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let req = require.context('../components', true, /^((?!index).)*\.vue$/)
console.log(req.keys())
let routes = req.keys().map(fn => {
  fn = fn.replace('./', '/') // ./layout.vue --> /layout.vue
  let path = fn.replace('.vue', '') // /layout.vue --> /layout
  let name = path.replace('/', '') // /layout --> layout
  return {
    path,
    name,
    component: () => import('../components' + fn)
  }
})
// const router = new Router({
//   routes
// })
export { routes }