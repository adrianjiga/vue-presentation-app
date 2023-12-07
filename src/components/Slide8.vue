<template>
	<div class="slide">
		<h1 class="slide-title">Slide 8: Vue Composition API</h1>
		<h2 class="sub-title">Introduction to Composition API:</h2>
		<div class="content">
			<p>
				The Vue Composition API is a set of additive, function-based APIs
				that allow you to organize your component logic in a more flexible
				and reusable way. It's a significant enhancement to Vue's reactivity
				system.
			</p>
			<p>
				With the Composition API, you can structure your component logic
				using functions rather than options.
			</p>
		</div>
		<h2 class="sub-title">Example of Vue Composition API:</h2>
		<div class="content">
			<p>
				Let's take a look at a simple example using the Composition API. In
				this example, we'll create a counter component with its logic
				organized using the Composition API.
			</p>
			<pre>{{ counter }}</pre>
			<button @click="incrementCounter">Increment Counter</button>

			<p>Code Example</p>
			<img
				src="../assets/compositionAPIcode.jpg"
				alt="composition api example"
			/>
		</div>
	</div>
</template>

<script>
	import { ref } from "vue";

	export default {
		name: "Slide8",
		setup() {
			const counter = ref(0);

			const incrementCounter = () => {
				counter.value++;
			};

			return {
				counter,
				incrementCounter,
			};
		},
	};
</script>

<style scoped>
	@import "../common.css";

	button {
		background-color: #95d5b2;
		padding: 10px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		text-decoration: none;
		font-weight: 700;
	}

	button:hover {
		background-color: rgba(3, 173, 100, 0.697);
	}
</style>
