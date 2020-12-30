import Vue from "vue"
import VueRouter from "vue-router"
import routes from './routes.js'
// import Store from '../store/index.js'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'hash',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})
// router.beforeEach((to, from, next) => {
//     if (Object.is(to.path, '/login/'+new Date().getTime())) {
//         next();
//         return
//     }   
//     if (window.localStorage.getItem('mobile_token') && Store.state.user.token) {
//         next();
//     } else {
//         router.push({ path: '/login/'+new Date().getTime() })
//     }
// });

export default router