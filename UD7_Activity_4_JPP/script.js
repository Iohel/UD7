import router from "./router.js";
import Post from "./components/Post.js"
import Headerpost from "./components/Header.js";
import Footerpost from "./components/Footer.js";
import Creator from "./components/Creator.js";
import Outputpost from "./components/Output.js";
const { createApp } = Vue;


createApp({
  data() {
    return {
        
        posts: [],
    };
  },
  components:{
    router,
    Headerpost,
    Footerpost,
    Creator,
    Outputpost,
    Post
  },
  mounted() {
    if(localStorage.getItem("posts") != null){
      this.posts = JSON.parse(localStorage.getItem("posts"));
      this.$router.push("/")
    }else{
      this.posts = [];
    }
  },
  methods: {
    
    
    
  },
}).use(router).mount("#app");

