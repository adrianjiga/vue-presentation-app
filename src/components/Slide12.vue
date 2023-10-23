<template>
	<div class="slide">
		<h1 class="slide-title">Slide 12: Best Practices and Tips</h1>

		<h2 class="sub-title">Code Organization and Project Structure:</h2>
		<div class="content">
			<p>
				When working with VueJS, it's essential to maintain a clean and
				organized project structure.
			</p>
			<p>
				Consider using a modular approach, dividing your code into
				components, views, and utility functions.
			</p>
			<p>
				Leveraging a build tool like Vite can help establish a sensible
				project structure from the start.
			</p>
			<p>
				Use meaningful file and folder names to make your codebase more
				understandable.
			</p>
			<p>
				Implement a consistent naming convention and folder hierarchy to
				improve collaboration and code maintenance.
			</p>
		</div>

		<h2 class="sub-title">Handling Component Communication:</h2>
		<div class="content">
			<p>
				One of the key challenges in VueJS development is managing
				communication between components.
			</p>
			<p>
				Best practices include using props for parent-to-child communication
				and custom events or a central state management system (e.g., Vuex)
				for complex applications.
			</p>
			<img
				src="../assets/parent-child-communication.png"
				alt="parent child components communication"
			/>
			<p>
				Consider using the <strong>provide/inject</strong> for sharing data
				between deeply nested components when necessary.
			</p>
		</div>

		<h2 class="sub-title">
			Useful Tools and Extensions for Vue Development:
		</h2>
		<div class="content">
			<p>
				As a Vue developer, you can benefit from various tools and
				extensions that simplify development and debugging.
			</p>
			<p>
				Some popular choices include Vue Devtools, Volar (for VS Code), and
				Vite.
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Slide12",
	};
</script>

<style scoped>
	@import "../common.css";
</style>
