export default{
    name: "Hello",
    
    template:`
        <div>
            <p>Hello {{$route.params.message}}</p>
            <input type="button" value="Send" @click="sendHello">
        </div>
    
    `,
    methods: {
        sendHello:()=>{
            /* this.$router.push("/"); */
            return "hello world";
        }
    },
}