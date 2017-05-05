import Login from '../views/login/Index.vue';
import Dashboard from '../views/dashboard/Index.vue';

const routes = [{
    path: '/',
    name: 'login',
    component: Login
},{
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
}];

export default routes;
