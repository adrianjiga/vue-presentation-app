<template>
	<div class="slide">
		<h1 class="slide-title">Slide 14: Links</h1>

		<div class="links">
			<div class="sub-title">
				VueJS Official Documentation
				<a href="https://vuejs.org/guide/introduction.html" target="_blank"
					>Vue</a
				>
			</div>

			<div class="sub-title">
				VueJS with TypeScript
				<a
					href="https://vuejs.org/guide/typescript/overview.html"
					target="_blank"
					>Vue + TypeScript</a
				>
			</div>

			<div class="sub-title">
				Vue Router Official Documentation
				<a href="https://router.vuejs.org/installation.html" target="_blank"
					>Vue Router</a
				>
			</div>

			<div class="sub-title">
				Awesome Vue GitHub Repository
				<a href="https://github.com/vuejs/awesome-vue" target="_blank"
					>Awesome Vue</a
				>
			</div>

			<div class="sub-title">
				Pinia Official Documentation
				<a href="https://pinia.vuejs.org/introduction.html" target="_blank"
					>Pinia</a
				>
			</div>

			<div class="sub-title">
				Vitest Official Documentation
				<a href="https://vitest.dev/guide/" target="_blank">Vitest</a>
			</div>

			<div class="sub-title">
				ESLint Official Documentation
				<a href="https://eslint.vuejs.org/" target="_blank">ESLint</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Slide14",
	};
</script>

<style scoped>
	.slide {
		padding: 20px;
	}
	.slide-title {
		font-size: 35px;
		margin-bottom: 15px;
		text-align: center;
	}

	.sub-title {
		padding-bottom: 25px;
	}

	.links {
		padding: 10px 30% 0 30%;
	}

	.links a {
		background-color: #95d5b2;
	}

	.links a:hover {
		background-color: rgba(3, 173, 100, 0.697);
	}
</style>
