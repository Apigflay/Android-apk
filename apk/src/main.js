// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/global.scss'
// import axios from 'axios';//引入axios;
import axios from './assets/js/axios';
Vue.prototype.$axios = axios; //添加axios到Vue的原型对象上
Vue.config.productionTip = false
import NutUI from '@nutui/nutui';  //NutUI  京东移动端框架
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
