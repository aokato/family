import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../views/Top.vue";
import Event_new from "../views/Event_new.vue";
import Event from "../views/Event.vue";
import Product from "../views/Products.vue";
import Show from "../views/Show.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import store from "@/store";
// import firebase from "@/firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Top,
  },

  {
    path: "/products",
    component: Product,
  },
  {
    path: "/texts/:course/:title",
    component: Show,
  },
  {
    path: "/event_new",
    name: "event_new",
    component: Event_new,
  },
  {
    path: "/events",
    name: "event",
    component: Event,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeResolve((to, from, next) => {
  if (to.path == "/login") {
    next();
  } else {
    // const x = this.$store.state.status;
    console.log(store.state.status);
    if (store.state.status === true) {
      console.log("認証中");
      // router.go("/");
      next();
    } else {
      console.log("未認証");
      next({ path: "/login" });
    }
  }
});
