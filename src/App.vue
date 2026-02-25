<template>
  <div id="app">
    <Header />
    <div class="container">
      <nav class="nav-container">
        <router-link
          v-for="slide in slides"
          :key="slide.path"
          :to="slide.path"
          :class="{ 'active-link': $route.path === slide.path }"
        >
          {{ slide.label }}
        </router-link>
      </nav>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
	import Header from "./components/Header.vue";
	import Footer from "./components/Footer.vue";

	export default {
		name: "App",
		components: { Header, Footer },
		data() {
			return {
				slides: [
					{ path: "/", label: "Slide 1" },
					{ path: "/slide2", label: "Slide 2" },
					{ path: "/slide3", label: "Slide 3" },
					{ path: "/slide4", label: "Slide 4" },
					{ path: "/slide5", label: "Slide 5" },
					{ path: "/slide6", label: "Slide 6" },
					{ path: "/slide7", label: "Slide 7" },
					{ path: "/slide8", label: "Slide 8" },
					{ path: "/slide9", label: "Slide 9" },
					{ path: "/slide10", label: "Slide 10" },
					{ path: "/slide11", label: "Slide 11" },
					{ path: "/slide12", label: "Slide 12" },
					{ path: "/slide13", label: "Slide 13" },
					{ path: "/slide14", label: "Slide 14" },
				],
			};
		},
	};
</script>

<style>
	#app {
		background-color: #d8f3dc;
		font-family: Georgia, serif;
	}

	.container {
		min-height: 80vh;
		padding: 0 clamp(16px, 8vw, 300px);
	}

	.nav-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 6px;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	a {
		background-color: #95d5b2;
		color: black;
		padding: 10px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		text-decoration: none;
	}

	a:hover,
	.active-link {
		background-color: rgba(3, 173, 100, 0.697);
		color: #fff;
	}

	@media (max-width: 768px) {
		a {
			padding: 6px 10px;
			font-size: 0.85rem;
		}
	}
</style>
