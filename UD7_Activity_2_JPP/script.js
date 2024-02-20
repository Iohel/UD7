
import Number from "./Number.js";
const {createApp} = Vue;

const app = createApp({

    data: function(){
        return{
            num: null,
            numbers:[],
            error:"",
            selectedItem: null
        }
    },
    components: {
        Number,
    },
    methods: {
        send:function(){
            
            if(~~this.num === this.num){
                if (this.numbers.indexOf(this.num)<0) {
                    this.numbers.push(this.num);
                    this.num = null;
                    this.error = "";               
                }else{
                    this.error = "Number already exists";
                }
                
            }else{
                this.error = "input a valid interger";
            }
        },
        numberSelected: function(item){
            this.selectedItem = item;
        }
    }

}).mount("#app");