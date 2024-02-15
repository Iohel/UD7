const { createApp } = Vue;

createApp({
    data() {
        return {
            post:[
                /* {
                    title:"title",
                    summary:"test",
                    content:"test",
                    author:"test",
                    image:"./img/img_test.png",
                    creation_date:new Date(Date.now()).toLocaleDateString(),
                    publication_date:"",
                    status:"draft"
                } */
                
            ],  
        }
    },  
    methods: {
        createPost:function(){
            let title = document.getElementById("title");
            let author = document.getElementById("author");
            let content = document.getElementById("content");
            let imageSaved = uploadAndSaveImage();
            

            
            if(title.value !== "" && author.value !== ""){
                this.post.push(
                    {
                        title:title.value,
                        summary:content.value.split(" ",30).join(" "),
                        content:content.value,
                        author:author.value,
                        image:imageSaved,
                        creation_date:new Date(Date.now()).toLocaleDateString(),
                        publication_date:"",
                        status:"draft"
                    }
                );
            }
            
        },
        editPost:function(id){
            
            this.post[id].title = document.getElementById("title").value;
            this.post[id].author = document.getElementById("author").value;
            this.post[id].content = document.getElementById("content").value;
            this.post[id].summary = document.getElementById("content").value.split(" ",30).join(" ");
            this.post[id].image = uploadAndSaveImage();
        },
        deletePost:function(id){
            console.log();
            this.post.splice(id,1);
                
        }
    },
}).mount('#app');

function uploadAndSaveImage(){
    let imageUpload = document.getElementById("image");
    let imageSaved ="";
    if(imageUpload.files[0] !== undefined){
        return imageSaved = URL.createObjectURL(imageUpload.files[0]);
    }
}