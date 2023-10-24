import LogInComponent from "./LogInComponent.js"
import HeaderComponent from "./HeaderComponent.js"
import FooterComponent from "./FooterComponent.js"
import HomeComponent from "./HomeComponent.js"

const app = Vue.createApp({
    components: {
        "header-component": HeaderComponent,
        "footer-component": FooterComponent
    }
})


const routes = [
    {path: "/login", component: LogInComponent },
    {path: "/home", component: HomeComponent},
    //{path: "/my-posts", component: MyPosts},
    //{path: "/add-posts", component: AddNewPost}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})
app.use(router)
app.mount("#app")