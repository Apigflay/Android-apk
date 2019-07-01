import Vue from 'vue'
import Router from 'vue-router'
//组件
// import Nav from '@/components/component/Nav'  //nav
// import Footer from '@/components/component/Footer'  //footer
//页面
import Error from '@/components/pages/Error'  //错误页面
import HelloWorld from '@/components/pages/HelloWorld' //helloworld
import Recommend from '@/components/pages/Recommend'  //推荐页面
import EveryDay from '@/components/pages/EveryDay'  //每日推荐页面
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'*',
      component:Error
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',//首页--每日推荐
      name: 'Recommend',
      component: Recommend,
      meta:{
      }
    },
    {
      path: '/everyday',//每日推荐
      name: 'EveryDay',
      component: EveryDay,
      meta:{
      }
    },
   
  ]
})
