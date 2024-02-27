
import router from "./router.js";
const {createApp} = Vue;

const app = createApp({

    data: function(){
        return{
            text:"hola"
        }
    },
    components: {
        router
    },
    methods: {
        
    }

}).use(router).mount("#app");