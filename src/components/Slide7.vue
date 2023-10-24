<template>
	<div class="slide">
		<h1 class="slide-title">Slide 7: VueJS 3 Routing</h1>

		<h2 class="sub-title">The Importance of Client-Side Routing</h2>
		<div class="content">
			<p>
				Client-side routing is a vital aspect of modern web applications,
				offering a seamless and dynamic user experience by allowing
				navigation between different views without full page reloads.
			</p>
			<p>
				Vue Router is the official routing library for VueJS, and it plays a
				crucial role in enabling client-side routing in your Vue
				applications.
			</p>
		</div>

		<h2 class="sub-title">Code Snippet for Configuring Routes</h2>
		<div class="content">
			<p>
				To clarify route configuration, here's an example of how routes are
				defined within the Vue Router setup:
			</p>
			<img
				src="../assets/routes-config-example.jpg"
				alt="routes-config-example"
			/>
		</div>

		<h2 class="sub-title">Setting Up Vue Router in Your Project</h2>
		<div class="content">
			<p>
				To get started with Vue Router in your VueJS 3 project, follow these
				key steps:
			</p>
			<ol>
				<li>
					Install Vue Router using npm:
					<pre>npm install vue-router@4</pre>
				</li>
			</ol>

			<ol start="2">
				<li>
					Create a Vue Router instance and configure your routes. Here's a
					basic setup:
					<p>Main.js</p>
					<img src="../assets/mainjs-example.jpg" alt="main.js file" />
					<p>Router.js</p>
					<img src="../assets/routerjs-example.jpg" alt="router.js file" />
				</li>
			</ol>

			<ol start="3">
				<li>
					In your Vue components, you can use the &lt;router-link&gt;
					component to navigate between routes and the &lt;router-view&gt;
					component to display the appropriate component based on the
					current route.
					<p>
						<img
							src="../assets/router-link-example.jpg"
							alt="router-link example"
						/>
					</p>
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Slide7",
	};
</script>

<style scoped>
	@import "../common.css";
</style>
