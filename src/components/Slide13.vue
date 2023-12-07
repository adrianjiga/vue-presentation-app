<template>
	<div class="slide">
		<h1 class="slide-title">Slide 13: Vue 2 vs. Vue 3</h1>

		<h2 class="sub-title">1. Composition API:</h2>
		<div class="content">
			<p>
				<strong>Vue 2:</strong> Relies on the Options API, which can lead to
				complex and verbose component logic. It has support for Composition
				API since v2.7.
			</p>
			<p>
				<strong>Vue 3:</strong> Introduces the Composition API, providing a
				more flexible and modular way to organize component logic.
			</p>
		</div>

		<h2 class="sub-title">2. Reactivity System:</h2>
		<div class="content">
			<p>
				<strong>Vue 2:</strong> Limited reactivity and less efficient
				dependency tracking.
			</p>
			<p>
				<strong>Vue 3:</strong> Optimized reactivity system for faster
				updates and improved performance.
			</p>
		</div>

		<h2 class="sub-title">3. Performance Improvements:</h2>
		<div class="content">
			<p>
				<strong>Vue 3:</strong> Significant performance improvements in
				terms of rendering speed and overall efficiency.
			</p>
			<p>
				<strong>Vue 3:</strong> Better handling of complex and
				data-intensive applications compared to Vue 2.
			</p>
		</div>

		<h2 class="sub-title">4. TypeScript Integration:</h2>
		<div class="content">
			<p>
				<strong>Vue 3:</strong> Better TypeScript integration with improved
				type inference and support.
			</p>
			<p>
				<strong>Vue 2:</strong> Supports TypeScript, but the integration is
				not as seamless as in Vue 3.
			</p>
		</div>

		<h2 class="sub-title">5. Teleport Component:</h2>
		<div class="content">
			<p>
				<strong>Vue 3:</strong> Introduces the Teleport component for more
				flexible and efficient rendering in different parts of the DOM.
			</p>
			<p>
				<strong>Vue 2:</strong> Does not have a built-in Teleport component.
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Slide13",
	};
</script>

<style scoped>
	@import "../common.css";
</style>
