import Hello from "./Number.js";

const Home = {template: '<div>Home</div>'}

let router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {path: '/', name: "Home", component: Home},
        {path: '/hello', name: "Hello2", componesnt: Hello},
        {path: '/hello/:message', name: "Hello", componesnt: Hello},
    ]

});

export default router;