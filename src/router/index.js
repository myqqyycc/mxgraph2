import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index_view from '@/components/index_view'
import index_view1 from '@/components/index_view1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index_view',
      name: 'index_view',
      component: index_view
    },
    {
      path: '/index_view1',
      name: 'index_view1',
      component: index_view1
    }
  ], mode: "history"
})
