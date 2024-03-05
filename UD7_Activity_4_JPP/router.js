import Output from "./components/Output.js";
import Creator from "./components/Creator.js";



let router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {path: '/', name: "Output", component: Output},
        {path: '/creator', name: "Creator", component: Creator},
        {path: '/creator/:id?', name: "Update", component: Creator}
    ]

});

export default router;