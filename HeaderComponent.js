export default {
    computed: {
        loggedInUser(){
            return JSON.parse(localStorage.getItem("userLoggedIn"));
        }
    },
    template: `
    <header v-if="loggedInUser">
    <h1>My App</h1>
    <nav>
        <router-link to="/home">Home</router-link>
        <router-link to="/my-posts">My posts</router-link>
        <router-link to="/add-posts">Add new post</router-link>
    </nav>
    <h2>Hi, {{ loggedInUser.name}}</h2>
    </header>
    `
}