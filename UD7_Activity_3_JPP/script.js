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
  methods: {
    createPost: function () {
      /* let imageSaved = uploadAndSaveImage(); */

      if (this.post.title !== "" && this.post.author !== "") {
        this.post.summary = this.post.content.split(" ", 30).join(" ");
        this.posts.push({...this.post});
        this.post.title = "";
        this.post.author = "";
        this.post.content = "";
        
      }
    },
    editPost: function (id) {
      id.title = this.post.title;
      id.author = this.post.author;
      id.content = this.post.content;
      id.summary = this.post.content.split(" ", 30).join(" ");
      /* this.posts[id].image = uploadAndSaveImage(); */
    },
    deletePost: function (id) {
      console.log(this.posts.indexOf(id));
      this.posts.splice(this.posts.indexOf(id), 1);
    },
  },
}).mount("#app");

/* function uploadAndSaveImage() {
  let imageUpload = document.getElementById("image");
  let imageSaved = "";
  if (imageUpload.files[0] !== undefined) {
    return (imageSaved = URL.createObjectURL(imageUpload.files[0]));
  }
} */
