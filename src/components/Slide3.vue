<template>
	<div class="slide">
		<h1 class="slide-title">Slide 3: VueJS 3 Components</h1>

		<h2 class="sub-title">Defining Components and Their Significance</h2>
		<div class="content">
			<p>
				In VueJS, components are fundamental building blocks that
				encapsulate a part of the user interface, making the code more
				modular and maintainable.
			</p>
			<p>
				They allow us to create reusable, self-contained units of
				functionality, each with its own template, script, and styling.
			</p>
		</div>

		<h2 class="sub-title">Creating a Basic Vue Component:</h2>
		<div class="content">
			<p>To create a simple Vue component:</p>
			<ul>
				<li>
					Define the template in HTML within the
					<code>&lt;template&gt;</code> tag.
				</li>
				<li>
					Add the script section to define the component's behavior using
					the
					<code>&lt;script&gt;</code> tag.
				</li>
				<li>
					Optionally, add the component's styling in a
					<code>&lt;style&gt;</code>
					section.
				</li>
			</ul>
		</div>

		<h2 class="sub-title">Example Component:</h2>
		<div class="content">
			<p>Here's a basic example of a Vue component structure:</p>
			<img src="../assets/example-component.jpg" alt="example-component" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "Slide3",
	};
</script>

<style scoped>
	@import "../common.css";

	.code {
		background-color: #f7f7f7;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}

	.text {
		background-color: #f7f7f7;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
