import Post from "./Post.js"
export default{
    Name: "Outputpost",
    components:{
        Post
    },
    methods: {
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
        createPost: function(){
            this.$router.push("/creator.")
        }
    },
    props:["posts"],
    template:`
    <button v-on:click.prevent="createPost()">test</button>
    <div class="content">
        <post id="output" v-for="(item, index) in posts" :post="item" v-on:edit-item="editPost" v-on:delete-item="deletePost">
                
                
        </post>
    </div>
    `
}


