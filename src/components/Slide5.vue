<template>
	<div class="slide">
		<h1 class="slide-title">Slide 5: Computed Properties in VueJS 3</h1>

		<h2 class="sub-title">Introducing Computed Properties</h2>
		<div class="content">
			<p>
				Computed properties are a powerful feature in VueJS 3 that allow you
				to perform complex calculations or data manipulations.
			</p>
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
			<p>
				<img src="../assets/computed-example.jpg" alt="computed example" />
			</p>
			<p>
				In this example, the <code>fullName</code> computed property
				concatenates the <code>firstName</code> and
				<code>lastName</code> data properties to create a full name.
			</p>
			<p>
				You can easily use computed properties in your template by
				referencing them like a regular data property.
			</p>
			<img src="../assets/computed-reference.jpg" alt="computed reference" />
			<div>
				<p class="form-row">
					<label for="firstName">First Name</label>
					<input type="text" id="firstName" v-model="firstName" />
				</p>
				<p class="form-row">
					<label for="lastName">Last Name</label>
					<input type="text" id="lastName" v-model="lastName" />
				</p>
			</div>
			<p class="form-row">
				<label for="computed">Computed</label>
				<em class="computed" id="computed">{{ fullName }}</em>
			</p>
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
	</div>
</template>

<script>
	export default {
		name: "Slide5",
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

	.computed {
		background-color: #95d5b2;
	}

	input,
	.computed {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
		width: 15%;
		display: block;
	}

	.form-row {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	label {
		margin-right: 10px;
	}
</style>
