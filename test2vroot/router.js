import Hello from "./Number.js";

const Home = {template: '<div>Home</div>'}

let router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {path: '/', name: "Home", component: Home},
        {path: '/hello', name: "Hello2", component: Hello},
        {path: '/hello/:message', name: "Hello", component: Hello},
    ]

});

export default router;