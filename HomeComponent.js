export default {
    data(){
        return {
            posts: []
        }
    },
    mounted(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            this.posts = data
        })
        .catch(error => console.log(error))
    },

    template: `
    <div>
    <h2>Welcome</h2>
    <div v-for="post in posts">
        <div class="card">
            <h3>{{post.title}}</h3>
            <p>{{post.body}}</p>
        </div>
    </div>
</div>`
}