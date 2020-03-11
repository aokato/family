import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../views/Top.vue";
import Event from "../views/Event.vue";
import Product from "../views/Products.vue";
import Show from "../views/Show.vue";
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
    path: "/events",
    name: "event",
    component: Event,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
