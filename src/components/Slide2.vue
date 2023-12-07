<template>
	<div class="slide">
		<h1 class="slide-title">Slide 2: Setting Up VueJS 3</h1>

		<h2 class="sub-title">Installing Vue 3 with Vite</h2>
		<div class="content">
			<p>
				To create a new Vue 3 project with Vite, execute the following
				command in your terminal: <code>npm create vue@latest </code>
			</p>
			<p>
				Vite's lightning-fast development server and quick setup process
				will have you up and running in no time.
			</p>
			<img
				src="../assets/npm-create-vue-latest-example.jpg"
				alt="npm create vue@latest example"
			/>
		</div>

		<h2 class="sub-title">Installing Vue 3 with npm</h2>
		<div class="content">
			<p>
				If you prefer a more traditional setup, you can install Vue 3 with
				npm, the Node.js package manager.
			</p>
			<p>
				Begin by creating a new directory for your project and navigate to
				it using the command line.
			</p>
			<p>
				To install Vue 3, use the following commands:
				<code>
					<br />
					mkdir my-vue3-app
					<br />
					cd my-vue3-app
					<br />
					npm install vue@next
				</code>
			</p>
			<p>This will install only Vue 3 into your project.</p>
		</div>

		<h2 class="sub-title">Directory Structure for Clarity</h2>
		<div class="content">
			<p>
				For further clarity, here's a sample directory structure after
				setting up a Vue 3 project using the first option:
			</p>
			<img src="../assets/project-structure.jpg" alt="project structure" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "Slide2",
	};
</script>

<style scoped>
	@import "../common.css";

	.code {
		background-color: #f7f7f7;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
