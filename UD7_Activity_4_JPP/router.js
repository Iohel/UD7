import Output from "./components/Output.js";
import Creator from "./components/Output.js";



let router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {path: '/index.html', name: "Output", component: Output},
        {path: '/creator', name: "Creator", component: Creator},
    ]

});

export default router;