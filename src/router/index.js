import Vue from "vue";
import VueRouter from "vue-router";
import TestPage from "../views/TestPage";
import WindPage from "../views/WindPage";
import TyphoonPage from "../views/TyphoonPage.vue";
import WmsPage from "../views/WmsPage.vue";
import ContourPage from "../views/ContourPage.vue";
import EditPage from "../views/EditPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/test",
  },
  {
    path: "/test",
    name: "Test",
    component: TestPage,
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
  {
    path: "/wms",
    name: "Wms",
    component: WmsPage,
  },
  {
    path: "/contour",
    name: "Contour",
    component: ContourPage,
  },
  {
    path: "/edit",
    name: "Edit",
    component: EditPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
