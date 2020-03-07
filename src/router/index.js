import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../views/Top.vue";

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
    path: "/:course/:id",
    name: "show",
    component: Show,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
