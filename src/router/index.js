import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../view/Home.vue'),
        meta: {
            login: true
        },
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
