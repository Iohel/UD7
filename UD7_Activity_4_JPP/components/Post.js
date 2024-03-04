export default{
    name:"Post",
    props:["post"],
    methods: {
        editPostEvent: function(item){
            this.$emit("edit-item", item);
        },
        deletePostEvent: function(item){
            this.$emit("delete-item", item)
        }
        
    },
    template:`
    
    <div class="post">
        <img src=post.image alt="">
        <div id="content_menu">
            <h2>{{post.title}}</h2>
            <p>{{post.summary}}</p>
            <p>{{post.author}}</p>
        </div>
        <div id="button_menu">
            
            <button v-on:click.prevent="editPostEvent(post)">edit</button>
            <button v-on:click.prevent="deletePostEvent(post)">delete</button>
        </div>
    </div>
    `
}