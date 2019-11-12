import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/**根据components下内容生成路由 */
let req = require.context('../components', false, /^((?!index).)*\.vue$/)
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