import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../views/Top.vue";
import Event from "../views/Event.vue";
import Product from "../views/Products.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Top,
  },
  {
    path: "/events",
    component: Event,
  },
  {
    path: "/products",
    component: Product,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
