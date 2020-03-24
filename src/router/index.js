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
import { db } from "@/firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "top",
    component: Top,
  },

  {
    path: "/products",
    name: "products",
    component: Product,
  },
  {
    path: "/:text_id/:course/:title",
    name: "show",
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

router.beforeEach((to, from, next) => {
  if (to.path === "/login" || to.path === "/" || to.path === "/register") {
    next();
  } else {
    if (!store.state.currentUser) {
      console.log(store.state.currentUser);
      next({ path: "/login" });
    } else {
      if (store.state.publicUser.length !== 0) {
        if (
          store.state.publicUser.status !== "none" &&
          store.state.publicUser.status !== "unApproved"
        ) {
          next();
        } else {
          next({ path: "/" });
        }
      } else {
        db.collection("public-users")
          .doc(store.state.currentUser.uid)
          .get()
          .then(doc => {
            const publicUser = {
              id: doc.id,
              ...doc.data(),
            };
            store.commit("setPublicUser", publicUser);
            console.log("はいったよん");
            if (
              store.state.publicUser.status !== "none" &&
              store.state.publicUser.status !== "unApproved"
            ) {
              next();
            } else {
              next({ path: "/" });
            }
          });
      }
    }
  }
});
