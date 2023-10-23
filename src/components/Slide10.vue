<template>
	<div class="slide">
		<h1 class="slide-title">Slide 10: VueJS 3 Lifecycle Hooks</h1>

		<h2 class="sub-title">Understanding Lifecycle Hooks</h2>
		<div class="content">
			<p>
				Lifecycle hooks are special methods provided by Vue that allow you
				to execute code at specific stages of a component's lifecycle.
			</p>
			<p>
				They provide opportunities to perform tasks like initialization,
				data loading, and cleanup.
			</p>
		</div>

		<h2 class="sub-title">The Key Lifecycle Stages</h2>
		<div class="content">
			<p>
				Vue components go through several key stages during their lifecycle,
				and there are corresponding hooks for each stage.
			</p>
			<ul>
				<li>
					<strong>beforeCreate:</strong> Called just before instance
					creation, useful for configuration.
				</li>
				<li>
					<strong>created:</strong> Called after instance creation, data
					observation, and events setup.
				</li>
				<li>
					<strong>beforeMount:</strong> Called just before the component is
					added to the DOM.
				</li>
				<li>
					<strong>mounted:</strong> Called after the component is added to
					the DOM.
				</li>
				<li>
					<strong>beforeUpdate:</strong> Called when data changes but
					before the virtual DOM re-render and patch.
				</li>
				<li>
					<strong>updated:</strong> Called after a data change causes a
					re-render and the component is updated in the DOM.
				</li>
				<li>
					<strong>beforeUnmount:</strong> Called just before the component
					is unmounted and destroyed.
				</li>
				<li>
					<strong>unmounted:</strong> Called after the component is
					unmounted and destroyed.
				</li>
			</ul>
		</div>

		<h2 class="sub-title">Common Use Cases</h2>
		<div class="content">
			<p>
				Lifecycle hooks are valuable for various scenarios. Here are a few
				common use cases:
			</p>
			<ul>
				<li>
					<strong>beforeCreate and created:</strong> Configuration, data
					setup, and initialization.
				</li>
				<li>
					<strong>mounted:</strong> DOM-related actions and data fetching.
				</li>
				<li>
					<strong>beforeUpdate and updated:</strong> Reacting to data
					changes in the component.
				</li>
				<li>
					<strong>beforeUnmount and unmounted:</strong> Cleanup, such as
					removing event listeners or timers.
				</li>
			</ul>
		</div>
		<img
			src="../assets/vuejs-lifecycle-hooks.png"
			alt="Vue lifecycle hooks"
		/>
	</div>
</template>

<script>
	export default {
		name: "Slide10",
	};
</script>

<style scoped>
	@import "../common.css";
</style>
