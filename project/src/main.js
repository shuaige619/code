// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store/vuex';
import router from './router';
import Mock from './data/adapter';
import particles from 'particles.js';
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
Vue.use(particles);
Mock.getData();
Vue.config.productionTip = false;
new Vue({
    'el': '#app',
    store,
    'router': router,
    'template': '<App/>',
    'components': { App }
});
