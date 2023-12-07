<template>
	<div class="slide">
		<h1 class="slide-title">Slide 7: JavaScript Proxies</h1>

		<h2 class="sub-title">Basic Proxy Example</h2>
		<div class="content">
			<p>
				JavaScript Proxies act as custom intermediaries for fundamental
				operations like property access and assignment. By defining traps,
				developers can intercept and customize the default behavior,
				enabling the creation of virtualized objects with tailored
				functionality.
			</p>
			<p>
				In this example, the Basic Proxy demonstrates how Proxies can be
				used to modify the behavior of property access. Click the button to
				see the dynamic update of the Basic Proxy Example value, showcasing
				the flexibility and control Proxies provide in JavaScript
				development.
			</p>
			<pre>{{ basicProxyExample.value }}</pre>
			<button @click="updateBasicProxyExample">
				Update Basic Proxy Example
			</button>

			<p>Example code</p>
			<img src="../assets/proxyExamples.jpg" alt="js proxy example" />

			<p>How to use the proxy inside a component</p>
			<img src="../assets/useProxy.jpg" alt="how to use js proxy" />
		</div>
	</div>
</template>

<script>
	import { createBasicProxyExample } from "../proxyExamples.js";

	export default {
		name: "Slide7",
		data() {
			return {
				basicProxyExample: createBasicProxyExample(),
			};
		},
		methods: {
			updateBasicProxyExample() {
				this.basicProxyExample.value += 10;
			},
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

	.proxy-image {
		max-width: 75%;
		height: auto;
	}
</style>
