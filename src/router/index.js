
import { createRouter, createWebHistory } from 'vue-router';
import routesConfig from './config';
const routes = [
	{
		path: '/',
		name: '首页',
		redirect: '/homepage',
	},
	...routesConfig
]
const router = createRouter({
	history: createWebHistory("/"),
	routes,

})
router.beforeEach((to, from, next) => {
	const token = sessionStorage.getItem('userlogin'); 
	// console.log('执行了router.beforeEach,定义的token值和类型',token,typeof(token));
    if (to.path == '/login') {
        next();
    } else {
        if (token === null || token === '') {
            console.log('您还没有登录，请先登录');
            next('/login');
        } else {
            next();
        }
    }
});

export default router