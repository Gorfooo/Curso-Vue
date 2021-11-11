import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./components/home');
const Portfolio = () => import('./components/portfolio');
const Acoes = () => import('./components/acoes');

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/home', name: 'home', component: Home },
    { path: '/portfolio', name: 'portfolio', component: Portfolio },
    { path: '/acoes', name: 'acoes', component: Acoes },
  ],
});
