export default {
    data () {
        return {
             user: {
                name: "",
                password: ""
             },
            users: [
                {id: 1, name: "Juan", password: "hola" },
                {id: 2, name: "Maria", password: "chau" },
                {id: 3, name: "Pedro", password: "hola" },
            ]

        }
    },
    methods: {
        checkUser(e){
            e.preventDefault();
            let flag = false;
            this.users.forEach(userInDb => {
                if(userInDb.name === this.user.name && userInDb.password == this.user.password){
                    flag = true;
                    localStorage.setItem("userLoggedIn", JSON.stringify(userInDb))
                    console.log("successful login")
                    this.$router.push("/home");
                    return;
                }
            })
            if(flag == false){ 
                alert("User not found")
            }
        }
    },
    template: `
    <div>
        <h1>Login</h1>
        <form @submit="checkUser">
            <input type="text" v-model="user.name" placeholder="User">
            <input type="password" v-model="user.password" placeholder="Password">
            <input type="submit" value="Login">
        </form>
    </div>
    `
}