<template>
	<div class="slide">
		<h1 class="slide-title">Slide 8: VueJS 3 Demo Application</h1>

		<h2 class="sub-title">Understanding Our Vue 3 App Structure</h2>
		<div class="content">
			<p>
				In our Vue 3 demo application, the structure is organized into three
				main parts:
			</p>
			<ul>
				<li>
					<strong>Main.js:</strong> This file is the entry point of our Vue
					app. It creates the Vue app instance and sets up Vue Router for
					navigation.
					<p>
						<img src="../assets/mainjs-example.jpg" alt="main.js file" />
					</p>
				</li>
				<li>
					<strong>Router.js:</strong> Vue Router is responsible for
					handling navigation between different slides (components). It
					defines the routes and associates each route with a specific
					slide.
					<p>
						<img
							src="../assets/routerjs-example.jpg"
							alt="router.js file"
						/>
					</p>
				</li>
				<li>
					<strong>App.vue:</strong> The App component serves as the
					container for our application. It includes a navigation menu with
					buttons that allow you to move between the different slides using
					Vue Router.
					<p>
						<img src="../assets/appvue-example.jpg" alt="App.vue file" />
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Slide8",
	};
</script>

<style scoped>
	@import "../common.css";

	.content li {
		margin-bottom: 10px;
	}
</style>
