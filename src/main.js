/** @format */

import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Bootstrap from 'bootstrap-vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import VueParticles from 'vue-particles'

Vue.use(Bootstrap);
Vue.use(Router);
Vue.use(VueResource);
Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
