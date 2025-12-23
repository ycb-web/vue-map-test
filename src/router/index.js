import Vue from "vue";
import VueRouter from "vue-router";
import WindPage from "../views/WindPage.vue";
import TyphoonPage from "../views/TyphoonPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/wind",
  },
  {
    path: "/wind",
    name: "Wind",
    component: WindPage,
  },
  {
    path: "/typhoon",
    name: "Typhoon",
    component: TyphoonPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
