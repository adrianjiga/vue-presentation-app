<template>
	<div class="slide">
		<h1 class="slide-title">Slide 4: VueJS 3 Directives</h1>
		<p>In this slide, we'll explore some essential Vue directives.</p>

		<h2 class="sub-title">v-bind: Binding HTML Attributes and Classes</h2>
		<div class="content">
			<p>
				The <code>v-bind</code> directive allows you to bind HTML attributes
				and classes to data properties. This enables dynamic attribute
				binding.
			</p>
			<code>
				<pre>{{ buttonText }}</pre>
				<pre>{{ buttonTextShortHand }}</pre>
			</code>
			<button
				class="example-button"
				v-bind:disabled="isDisabled"
				@click="handleClick"
			>
				Click me
			</button>
			<p>
				Here, the <code>disabled</code> attribute of the button is bound to
				the <code>isDisabled</code> data property, making the button
				disabled when <code>isDisabled</code> is true.
			</p>
		</div>

		<h2 class="sub-title">v-if: Conditional Rendering</h2>
		<div class="content">
			<p>
				The <code>v-if</code> directive is used for conditional rendering.
				It allows you to render or not render an element based on a
				condition.
			</p>
			<p>
				Here's an example that demonstrates the use of the <code>v-if</code>
				directive to conditionally display a message:
			</p>
			<div v-if="vifMessage">
				<p>This message is displayed when vifMessage is true.</p>
			</div>
			<div v-else>
				<p>This message is displayed when vifMessage is false.</p>
			</div>
			<img alt="vif-example" src="../assets/vif-example.jpg" />
		</div>

		<h2 class="sub-title">v-on: Listening To Events</h2>
		<div class="content">
			<p>
				The <code>v-on</code> directive allows you to listen to DOM events
				and perform actions in response to those events. It's a powerful way
				to handle user interactions.
			</p>
			<p>
				Here's an example that uses <code>v-on</code> to listen for a click
				event on a button and execute a method when it's clicked:
			</p>
			<div class="example-buttons">
				<button v-on:click="handleClick">Click me</button>
				<button @click="handleClick">Click me (Shorthand)</button>
			</div>
			<div class="von-images">
				<img alt="von-example" src="../assets/von-examples.jpg" />
				<img alt="von-method" src="../assets//von-method.jpg" />
			</div>
		</div>

		<!-- Example for v-show directive -->
		<h2 class="sub-title">v-show: Conditional Visibility</h2>
		<div class="content">
			<p>
				The <code>v-show</code> directive is used to conditionally show or
				hide an element based on a boolean value. Unlike <code>v-if</code>,
				the element is always rendered in the DOM, and its visibility is
				toggled using CSS styles.
			</p>
			<div v-show="showElement">
				<p>This element is shown when showElement is true.</p>
			</div>
			<div v-show="!showElement">
				<p>This element is shown when showElement is false.</p>
			</div>
			<button @click="toggleVisibility">Toggle Visibility</button>
		</div>

		<h2 class="sub-title">v-for: Looping Through Arrays and Lists</h2>
		<div class="content">
			<p>
				The <code>v-for</code> directive is used to iterate through arrays
				and lists, allowing you to render dynamic content based on your
				data.
			</p>
			<img alt="vfor-example" src="../assets/vfor-example.jpg" />
			<ul class="example-list">
				<li v-for="item in items" :key="item">{{ item }}</li>
			</ul>
			<p>
				In this case, for each item in the <code>items</code> array, a list
				item is generated, making it easy to display dynamic content.
			</p>
		</div>

		<!-- Example for v-model directive -->
		<h2 class="sub-title">v-model: Two-Way Data Binding</h2>
		<div class="content">
			<p>
				The <code>v-model</code> directive enables two-way data binding
				between the user interface and the data model.
			</p>
			<img alt="vmodel-example" src="../assets/vmodel-example.jpg" />
			<img
				alt="vmodel-example-text"
				class="vmodel-example-text"
				src="../assets/vmodel-example-text.jpg"
			/>

			<input v-model="message" class="example-input" />
			<p>{{ message }}</p>
			<p>
				Any change in the input field is immediately reflected in the
				<code>message</code> data property, and vice versa.
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Slide4",
		data() {
			return {
				isDisabled: false,
				vifMessage: false,
				showElement: true,
				items: ["Item 1", "Item 2", "Item 3"],
				message: "Hello, VueJS 3!",
				buttonText:
					'<button v-bind:disabled="isDisabled" class="example-button">Click Me</button>',
				buttonTextShortHand:
					'<button :disabled="isDisabled" class="example-button">Click Me</button>',
			};
		},
		methods: {
			handleClick() {
				alert("Button clicked!");
			},
			toggleVisibility() {
				this.showElement = !this.showElement;
			},
		},
	};
</script>

<style scoped>
	@import "../common.css";

	.example-list {
		list-style: none;
		padding: 0;
	}

	.example-list li {
		margin: 5px 0;
	}

	.example-input {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
		width: 15%;
		display: block;
	}

	.von-images img {
		display: block;
		padding-bottom: 0.5rem;
	}

	.vmodel-example-text {
		display: block;
		padding-bottom: 0.5rem;
	}

	.example-buttons {
		display: flex;
		justify-content: space-between;
		max-width: 340px;
		padding-bottom: 1rem;
	}

	button {
		background-color: #95d5b2;
		padding: 10px 20px;
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
