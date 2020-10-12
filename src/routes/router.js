import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Contact from "../components/Contact.vue";
import About from "../components/About.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
  ],
});

export default router;
