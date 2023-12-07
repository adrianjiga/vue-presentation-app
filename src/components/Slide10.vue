<template>
	<div class="slide">
		<h1 class="slide-title">Slide 10: VueJS 3 Refs</h1>

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
				You can create a ref in a component using the
				<strong>ref</strong> option. For example:
			</p>
			<img src="../assets/refs-example.jpg" alt="refs example" />
			<p>
				Here, <strong>myRef</strong> is a ref that can be associated with an
				element or a component instance in the template.
			</p>
		</div>

		<h2 class="sub-title">Using Refs in Templates</h2>
		<div class="content">
			<p>
				Once you've created a ref, you can use it in your template like
				this:
			</p>
			<img src="../assets/refs-usage-example.jpg" alt="refs usage example" />
			<div ref="myRef">This is a ref element.</div>
			<button @click="logRef">Log Ref</button>
			<p>
				You can access the ref in the template using
				<code>this.$refs.myRef</code>.
			</p>
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
	export default {
		name: "Slide10",
		data() {
			return {
				myRef: null,
			};
		},
		methods: {
			logRef() {
				console.log(this.$refs.myRef);
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
</style>
