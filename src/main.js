import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);

import home from './components/home.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: home
    }
  ]
})

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
