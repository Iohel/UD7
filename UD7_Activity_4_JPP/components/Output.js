export default{
    Name: "Output",
    template:`
    <div class="content">
        <post id="output" v-for="(item, index) in posts" :post="item" v-on:edit-item="editPost" v-on:delete-item="deletePost">
                
                
        </post>
    </div>
    `
}


