
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

        editPostEvent: function(posts){
            
            let item = posts[this.$route.params.id];
            
            item.title = this.post.title;
            item.author = this.post.author;
            item.content = this.post.content;
            item.summary = this.post.content.split(" ", 30).join(" ");
            localStorage.setItem("posts",JSON.stringify(this.posts));
            this.$router.push("/");
        }


        

    },
    mounted() {
        if (this.$route.params.id !== "") {
            this.editing = true;
        }
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
            editing:false,
        };
      },
    template:`
    
        <h1 v-if="editing">Actualizar Post</h1>
        <h1 v-else>Crear Posts</h1>
            
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
        <button v-if="editing" v-on:click.prevent="editPostEvent(posts)" >Update</button>
        <button v-else v-on:click.prevent="createPost()" >Create</button>
    
    `
}