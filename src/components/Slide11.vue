<template>
	<div class="slide">
		<h1 class="slide-title">Slide 11: VueJS 3 Refs</h1>

		<h2 class="sub-title">Understanding Refs</h2>
		<div class="content">
			<p>
				Refs are a feature in VueJS 3 that provides direct access to a DOM
				element or a component instance within your template.
			</p>
			<p>
				They are commonly used to interact with the DOM or child components
				in a more imperative way.
			</p>
		</div>

		<h2 class="sub-title">Creating Refs</h2>
		<div class="content">
			<p>
				You can create a ref in a component using the `ref` function. For
				example:
			</p>
			<img src="../assets/refs-example.png" alt="refs example" />
			<p>
				Here, `myRef` is a ref that can be associated with an element or a
				component instance in the template.
			</p>
		</div>

		<h2 class="sub-title">Using Refs in Templates</h2>
		<div class="content">
			<p>
				Once you've created a ref, you can use it in your template like
				this:
			</p>
			<img src="../assets/refs-usage-example.png" alt="refs usage example" />
			<div ref="myRef">This is a ref element.</div>
			<button @click="logRef">Log Ref</button>
			<p>You can access the ref in the template using `this.$refs.myRef`.</p>
		</div>

		<h2 class="sub-title">Common Use Cases</h2>
		<div class="content">
			<p>Refs are handy for various tasks, including:</p>
			<ul>
				<li>
					<strong>Accessing DOM elements:</strong> You can manipulate the
					DOM directly using refs.
				</li>
				<li>
					<strong>Interacting with child components:</strong> Refs can be
					used to trigger methods or access data in child components.
				</li>
			</ul>
		</div>

		<h2 class="sub-title">Important Considerations</h2>
		<div class="content">
			<p>
				While refs offer powerful capabilities, they should be used with
				caution to maintain the reactivity and declarative nature of Vue.
			</p>
			<p>
				It's best to leverage Vue's reactivity system and component
				communication whenever possible before resorting to refs.
			</p>
		</div>
	</div>
</template>

<script>
	import { ref } from "vue";

	export default {
		name: "Slide11",
		setup() {
			const myRef = ref(null);

			const logRef = () => {
				console.log(myRef.value);
			};

			return { myRef, logRef };
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
