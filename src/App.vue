<template>
	<div id="app">
		<Header></Header>
		<div class="container">
			<nav class="nav-container">
				<router-link to="/" :class="{ 'active-link': $route.path === '/' }"
					>Slide 1</router-link
				>
				<router-link
					to="/slide2"
					:class="{ 'active-link': $route.path === '/slide2' }"
					>Slide 2</router-link
				>
				<router-link
					to="/slide3"
					:class="{ 'active-link': $route.path === '/slide3' }"
					>Slide 3</router-link
				>
				<router-link
					to="/slide4"
					:class="{ 'active-link': $route.path === '/slide4' }"
					>Slide 4</router-link
				>
				<router-link
					to="/slide5"
					:class="{ 'active-link': $route.path === '/slide5' }"
					>Slide 5</router-link
				>
				<router-link
					to="/slide6"
					:class="{ 'active-link': $route.path === '/slide6' }"
					>Slide 6</router-link
				>
				<router-link
					to="/slide7"
					:class="{ 'active-link': $route.path === '/slide7' }"
					>Slide 7</router-link
				>
				<router-link
					to="/slide8"
					:class="{ 'active-link': $route.path === '/slide8' }"
					>Slide 8</router-link
				>
				<router-link
					to="/slide9"
					:class="{ 'active-link': $route.path === '/slide9' }"
					>Slide 9</router-link
				>
				<router-link
					to="/slide10"
					:class="{ 'active-link': $route.path === '/slide10' }"
					>Slide 10</router-link
				>
				<router-link
					to="/slide11"
					:class="{ 'active-link': $route.path === '/slide11' }"
					>Slide 11</router-link
				>
				<router-link
					to="/slide12"
					:class="{ 'active-link': $route.path === '/slide12' }"
					>Slide 12</router-link
				>
				<router-link
					to="/slide13"
					:class="{ 'active-link': $route.path === '/slide13' }"
					>Slide 13</router-link
				>
				<router-link
					to="/slide14"
					:class="{ 'active-link': $route.path === '/slide14' }"
					>Slide 14</router-link
				>
			</nav>
			<router-view></router-view>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "./components/Header.vue";
	import Footer from "./components/Footer.vue";

	export default {
		name: "App",
		components: { Header, Footer },
	};
</script>

<style>
	#app {
		background-color: #d8f3dc;
		font-family: Georgia, serif;
	}

	.container {
		min-height: 80vh;
		padding: 0 300px;
	}

	.nav-container {
		display: flex;
		justify-content: space-evenly;
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
</style>
