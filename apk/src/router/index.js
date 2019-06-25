import Vue from 'vue'
import Router from 'vue-router'
//组件
// import Nav from '@/components/component/Nav'  //nav
// import Footer from '@/components/component/Footer'  //footer
//页面
import Error from '@/components/pages/Error'  //错误页面
import HelloWorld from '@/components/pages/HelloWorld' //helloworld
import Recommend from '@/components/pages/Recommend'  //推荐页面
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'*',
      component:Error
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',//首页
      name: 'Recommend',
      component: Recommend,
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   children:[{
    //     path:'nav',
    //     nav:Nav,
    //   },{
    //     path:'footer',
    //     footer:Footer,
    //   }]
    // },
    // {
    //   path: '/recommend',//推荐
    //   name: 'Recommend',
    //   components:{
    //     'nav':Nav,
    //     'main':Recommend,
    //     'footer':Footer
    //   },
    //   meta:{
    //   }
    // },
  ]
})
