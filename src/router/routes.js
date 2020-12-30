
const home = () => import('../views/Home/Home.vue')


export default [
    {
        path: '/home',
        name:'home',
        component: home,
        meta: {
            isHide: true
        }, 
    },
]