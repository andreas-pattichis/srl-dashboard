import { createWebHistory, createRouter } from "vue-router";

const routes =  [
    {
        path: "/login",
        component: () => import('../components/LoginView.vue'),
    },
    {
        path: "/",
        component: () => import('../components/MainView.vue'),
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active'
})



export default router;