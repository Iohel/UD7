const { createApp } = Vue;

createApp({
    data() {
        return {
            post:[
                {
                    title:"title",
                    summary:"test",
                    content:"test",
                    author:"test",
                    image:"",
                    creation_date:new Date(Date.now()).toLocaleDateString(),
                    publication_date:"",
                    status:"draft"
                }
                
            ],  
        }
    },  
    methods: {
        createPost:function(){
            let title = document.getElementById("title");
            let author = document.getElementById("author");
            let content = document.getElementById("content");
            console.log();
            if(title.value !== "" && author.value !== ""){
                this.post.push(
                    {
                        title:title.value,
                        summary:content.value.split(" ",30).join(" "),
                        content:content.value,
                        author:author.value,
                        image:"",
                        creation_date:new Date(Date.now()).toLocaleDateString(),
                        publication_date:"",
                        status:"draft"
                    }
                );
            }
            
        },
        editPost:function(id){
            console.log(this.post[id].title);
            this.post[id].title = document.getElementById("title").value;
            this.post[id].author = document.getElementById("author").value;
            this.post[id].content = document.getElementById("content").value;
            this.post[id].summary = document.getElementById("content").value.split(" ",30).join(" ");
        },
        deletePost:function(id){
            console.log();
            this.post.splice(id,1);
                
        }
    },
}).mount('#app')