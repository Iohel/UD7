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
                    image:"./img/img_test.png",
                    creation_date:new Date(Date.now()).toLocaleDateString(),
                    publication_date:"",
                    status:"draft"
                }
                
            ],  
        }
    },  
    methods: {
        createPost:function(){
            
            let imageSaved = uploadAndSaveImage();

            if(title.value !== "" && author.value !== ""){
                console.log(this.post);
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
                title.value = "";
                author.value = "";
                content.value = "";
                this.$refs.image.value = "";
            }
            
            
        },
        editPost:function(id){
            
            this.post[id].title = title.value;
            this.post[id].author = author.value;
            this.post[id].content = content.value;
            this.post[id].summary = content.value.split(" ",30).join(" ");
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