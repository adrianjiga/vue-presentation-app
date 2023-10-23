<template>
	<div class="slide">
		<h1 class="slide-title">Slide 6: Computed Properties in VueJS 3</h1>

		<h2 class="sub-title">Introducing Computed Properties</h2>
		<div class="content">
			<p>
				Computed properties are a powerful feature in VueJS 3 that allow you
				to perform complex calculations or data manipulations and bind the
				result to the template.
			</p>
			<p>They are like data properties, but with added benefits.</p>
		</div>

		<h2 class="sub-title">Why Use Computed Properties?</h2>
		<div class="content">
			<p>
				Computed properties are ideal for scenarios where you need to derive
				values from your existing data.
			</p>
			<p>
				Computed properties automatically update when their dependencies
				change.
			</p>
		</div>

		<h2 class="sub-title">Creating Computed Properties</h2>
		<div class="content">
			<p>
				To create a computed property, define it within your component using
				the <strong>computed</strong> property.
			</p>
			<p></p>
		</div>

		<h2 class="sub-title">A Simple Example</h2>
		<div class="content">
			<p>
				<img src="../assets/computed-example.png" alt="computed example" />
			</p>
			<p>
				In this example, the <code>fullName</code> computed property
				concatenates the <code>firstName</code> and
				<code>lastName</code> data properties to create a full name.
			</p>
		</div>

		<h2 class="sub-title">Using Computed Properties in the Template</h2>
		<div class="content">
			<p>
				You can easily use computed properties in your template by
				referencing them like a regular data property.
			</p>
			<img src="../assets/computed-reference.png" alt="computed reference" />
		</div>

		<h2 class="sub-title">Benefits of Computed Properties</h2>
		<div class="content">
			<p>
				Efficiency: Computed properties are cached and only recalculated
				when their dependencies change.
			</p>
			<p>
				Reactivity: Computed properties automatically update when their
				underlying data changes.
			</p>
		</div>

		<h2 class="sub-title">When to Use Methods Instead</h2>
		<div class="content">
			<p>
				While computed properties are great for simple transformations, use
				methods for operations with side effects, like HTTP requests or DOM
				manipulation.
			</p>
		</div>

		<h2 class="sub-title">Summary</h2>
		<div class="content">
			<p>
				Computed properties are a valuable tool for enhancing the reactivity
				and maintainability of your VueJS 3 applications.
			</p>
			<p>
				They allow you to perform data transformations and calculations with
				ease, improving your application's overall performance and
				efficiency.
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Slide6",
		data() {
			return {
				firstName: "Adrian",
				lastName: "Jiga",
			};
		},
		computed: {
			fullName() {
				return this.firstName + " " + this.lastName;
			},
		},
	};
</script>

<style scoped>
	@import "../common.css";
</style>
