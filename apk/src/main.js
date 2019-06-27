// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/global.scss'

// import axios from 'axios';//引入axios;
import axios from './assets/js/axios';
Vue.prototype.$axios = axios; //添加axios到Vue的原型对象上

import NutUI from '@nutui/nutui';  //NutUI  京东移动端框架
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue);

import VueAwesomeSwiper from 'vue-awesome-swiper';//swiper4
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper, /* { default global options } */)

// 以下是注册组件的方法
import NavBar from './components/component/Nav.vue';
import FooterBar from './components/component/Footer.vue';
Vue.component("NavBar",NavBar); // 全局注册组件
Vue.component("FooterBar",FooterBar); // 全局注册组件


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
