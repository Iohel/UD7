export default{
    Name:"Creator",
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
            <input type="file" v-on:change="console.log(this.$refs.image.value);" id="image" ref="image">
            
        </form>
        <button v-on:click.prevent="createPost()" >Create</button>
    
    `
}