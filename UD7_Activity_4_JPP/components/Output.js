import Post from "./Post.js"
export default{
    Name: "Outputpost",
    components:{
        Post
    },
    methods: {
        
        deletePost: function (id) {
            console.log(this.posts.indexOf(id));
            this.posts.splice(this.posts.indexOf(id), 1);
            localStorage.setItem("posts",JSON.stringify(this.posts));
        },
        createPost: function(){
            this.$router.push("/creator")
        }
    },
    props:["posts"],
    template:`
    <button v-on:click.prevent="createPost()">test</button>
    <div class="content">
        <post id="output" v-for="(item, index) in posts" :post="item" :index="index" v-on:delete-item="deletePost">
                
                
        </post>
    </div>
    `
}


