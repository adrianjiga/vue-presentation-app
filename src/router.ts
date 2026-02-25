import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Slide1 from "./views/Slide1.vue";
import Slide2 from "./views/Slide2.vue";
import Slide3 from "./views/Slide3.vue";
import Slide4 from "./views/Slide4.vue";
import Slide5 from "./views/Slide5.vue";
import Slide6 from "./views/Slide6.vue";
import Slide7 from "./views/Slide7.vue";
import Slide8 from "./views/Slide8.vue";
import Slide9 from "./views/Slide9.vue";
import Slide10 from "./views/Slide10.vue";
import Slide11 from "./views/Slide11.vue";
import Slide12 from "./views/Slide12.vue";
import Slide13 from "./views/Slide13.vue";
import Slide14 from "./views/Slide14.vue";

const routes: RouteRecordRaw[] = [
	{ path: "/", component: Slide1 },
	{ path: "/slide2", component: Slide2 },
	{ path: "/slide3", component: Slide3 },
	{ path: "/slide4", component: Slide4 },
	{ path: "/slide5", component: Slide5 },
	{ path: "/slide6", component: Slide6 },
	{ path: "/slide7", component: Slide7 },
	{ path: "/slide8", component: Slide8 },
	{ path: "/slide9", component: Slide9 },
	{ path: "/slide10", component: Slide10 },
	{ path: "/slide11", component: Slide11 },
	{ path: "/slide12", component: Slide12 },
	{ path: "/slide13", component: Slide13 },
	{ path: "/slide14", component: Slide14 },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
