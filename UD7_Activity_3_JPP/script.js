import Post from "./components/Post.js";
import Headerpost from "./components/Header.js";
import Footerpost from "./components/Footer.js";
const { createApp } = Vue;


createApp({
  data() {
    return {
        post: {
            title: "",
            content: "",
            summary: "",
            author: "",
            image: null,
            creation_date: new Date(Date.now()).toLocaleDateString(),
            publication_date: "",
            status: "draft",
        },
        posts: [],
    };
  },
  components:{
    Post,
    Headerpost,
    Footerpost
  },
  mounted() {
    this.posts = JSON.parse(localStorage.getItem("posts"));
  },
  methods: {
    createPost: function () {

      if (this.post.title !== "" && this.post.author !== "") {
        this.post.summary = this.post.content.split(" ", 30).join(" ");
        this.posts.push({...this.post});
        this.post.title = "";
        this.post.author = "";
        this.post.content = "";
        localStorage.setItem("posts",JSON.stringify(this.posts));
      }
      
    },
    editPost: function (id) {
      id.title = this.post.title;
      id.author = this.post.author;
      id.content = this.post.content;
      id.summary = this.post.content.split(" ", 30).join(" ");
      localStorage.setItem("posts",JSON.stringify(this.posts));
    },
    deletePost: function (id) {
      console.log(this.posts.indexOf(id));
      this.posts.splice(this.posts.indexOf(id), 1);
      localStorage.setItem("posts",JSON.stringify(this.posts));
    },
  },
}).mount("#app");

