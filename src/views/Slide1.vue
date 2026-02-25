<template>
  <div class="slide">
    <h1 class="slide-title">
      Slide 1: Introduction to VueJS 3
    </h1>
    <h2 class="sub-title">
      Introduction to VueJS
    </h2>
    <div class="content">
      <p>
        VueJS, often pronounced as "view," is a widely adopted progressive
        JavaScript framework designed for creating dynamic and interactive
        user interfaces.
      </p>
    </div>

    <h2 class="sub-title">
      Popularity and Prevalence
    </h2>
    <div class="content">
      <p>
        VueJS has found its place in a multitude of web development
        projects, from small-scale websites to large, complex web
        applications.
      </p>
      <img
        src="../assets/stackoverflow-popularity.jpg"
        alt="stackoverflow-popularity"
      >
      <img
        class="jetbrains-popularity"
        src="../assets/jetbrains-popularity.jpg"
        alt="jetbrains-popularity"
      >
    </div>
  </div>
</template>

<script lang="ts">
	export default {
		name: "Slide1",
	};
</script>

<style scoped>
	@import "../common.css";

	img {
		max-width: 100%;
		height: auto;
		max-height: 400px;
	}

	img.jetbrains-popularity {
		max-width: min(400px, 100%);
	}
</style>
