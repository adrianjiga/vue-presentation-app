<template>
	<div class="slide">
		<h1 class="slide-title">Slide 1: Introduction to VueJS 3</h1>
		<h2 class="sub-title">Introduction to VueJS</h2>
		<div class="content">
			<p>
				VueJS, often pronounced as "view," is a widely adopted progressive
				JavaScript framework designed for creating dynamic and interactive
				user interfaces.
			</p>
			<p>
				It has gained immense popularity and recognition among web
				developers due to its ease of use, versatility, and remarkable
				performance.
			</p>
		</div>

		<h2 class="sub-title">Popularity and Prevalence</h2>
		<div class="content">
			<p>
				VueJS has found its place in a multitude of web development
				projects, from small-scale websites to large, complex web
				applications.
			</p>
			<p>
				Its widespread use is a testament to its effectiveness and
				developer-friendly nature.
			</p>
			<p>
				In the next 2 images we have the Stack Overflow popularity survey
				for 2022 and the JetBrains popularity survey for 2023
			</p>
			<img
				src="../assets/stackoverflow-popularity.jpg"
				alt="stackoverflow-popularity"
			/>
			<img
				class="jetbrains-popularity"
				src="../assets/jetbrains-popularity.jpg"
				alt="jetbrains-popularity"
			/>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Slide1",
	};
</script>

<style scoped>
	@import "../common.css";

	img {
		width: auto;
		height: 400px;
	}

	img.jetbrains-popularity {
		width: 400px;
		max-height: 511.75px;
	}
</style>
