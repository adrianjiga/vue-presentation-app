<template>
	<div class="slide">
		<h1 class="slide-title">Slide 11: Vue 3 with TypeScript</h1>
		<h2 class="sub-title">Getting Started with TypeScript in Vue 3:</h2>
		<div class="content">
			<p>
				Vue 3 has excellent support for TypeScript, providing strong typing
				for your Vue components. This enhances code predictability and
				provides a better development experience.
			</p>
			<p>
				To get started with TypeScript in Vue 3, you can use the
				<code>lang="ts"</code> attribute in your Vue component's
				<code>script</code> tag.
			</p>
		</div>
		<h2 class="sub-title">Example of Vue 3 with TypeScript:</h2>
		<div class="content">
			<p>Let's create a basic example with a typed property and method.</p>
			<button @click="handleClick">Click me!</button>

			<p>Code Example</p>
			<img src="../assets/Vue3Ts.jpg" alt="vue 3 with typescript example" />
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "Slide11",
		methods: {
			handleClick(): number {
				const num1 = Math.floor(Math.random() * 101);
				alert("The numbers is " + num1);
				return num1;
			},
		},
	});
</script>

<style scoped>
	@import "../common.css";

	button {
		background-color: #95d5b2;
		color: black;
		padding: 10px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		text-decoration: none;
		font-weight: 700;
	}

	button:hover {
		background-color: rgba(3, 173, 100, 0.697);
		color: #fff;
	}
</style>
