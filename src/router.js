import { createRouter, createWebHistory } from "vue-router";
import Slide1 from "./components/Slide1.vue";
import Slide2 from "./components/Slide2.vue";
import Slide3 from "./components/Slide3.vue";
import Slide4 from "./components/Slide4.vue";
import Slide5 from "./components/Slide5.vue";
import Slide6 from "./components/Slide6.vue";
import Slide7 from "./components/Slide7.vue";
import Slide8 from "./components/Slide8.vue";
import Slide9 from "./components/Slide9.vue";
import Slide10 from "./components/Slide10.vue";
import Slide11 from "./components/Slide11.vue";
import Slide12 from "./components/Slide12.vue";

const routes = [
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
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
