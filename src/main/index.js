import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import routes from './routes.js';

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import '../stylesheet/all.scss';

Vue.use(VueRouter);
Vue.use(iView);

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
