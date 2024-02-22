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
  methods: {
    createPost: function () {
      /* let imageSaved = uploadAndSaveImage(); */

      if (this.post.title !== "" && this.post.author !== "") {
        this.post.summary = this.post.content.split(" ", 30).join(" ");
        console.log(this.post);
        this.posts.push(this.post);
        this.post.title = "";
        this.post.author = "";
        this.post.content = "";
        
      }
    },
    editPost: function (id) {
      this.posts[id].title = title.value;
      this.posts[id].author = author.value;
      this.posts[id].content = content.value;
      this.posts[id].summary = content.value.split(" ", 30).join(" ");
      /* this.posts[id].image = uploadAndSaveImage(); */
    },
    deletePost: function (id) {
      console.log();
      this.posts.splice(id, 1);
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
