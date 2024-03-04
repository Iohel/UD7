
export default{
    Name:"Creator",
    methods: {
        
        createPost: function () {

            if (this.post.title !== "" && this.post.author !== "") {
              this.post.summary = this.post.content.split(" ", 30).join(" ");
              this.posts.push({...this.post});
              this.post.title = "";
              this.post.author = "";
              this.post.content = "";
              localStorage.setItem("posts",JSON.stringify(this.posts));

              this.$router.push("/");
            }
            
            
        },
    },
    props:["posts"],
    
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
        };
      },
    template:`

        <h1>Crear Posts</h1>
            
        <form action="">
            <div>
                <label for="">Title</label>
                <input type="text" v-model="post.title" id="title" value="" maxlength="30">
            </div>
            <div>
                <label for="">Author</label>
                <input  type="text" v-model="post.author" id="author" value="" maxlength="30">
            </div>
            <div>
                <label for="">Content</label>
                <textarea  v-model="post.content" id="content" cols="30" rows="10" id="content"></textarea>
            </div>
            <input type="file" v-on:change="console.log(this.$refs.image).value;" id="image" ref="image">
            
        </form>
        <button v-on:click.prevent="createPost()" >Create</button>
    
    `
}