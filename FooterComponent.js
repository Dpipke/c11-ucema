export default {
    computed: {
        loggedInUser(){
            return JSON.parse(localStorage.getItem("userLoggedIn"));
        }
    },
    template: `
    <footer v-if="loggedInUser">
        <p>All rights reserved</p>
    </footer>
    `
}