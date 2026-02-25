<template>
  <header>
    <div>VueJS 3</div>
  </header>
</template>

<script lang="ts">
	export default {
		name: "Header",
	};
</script>

<style scoped>
	div {
		font-size: clamp(1.4rem, 5vw, 3rem);
		font-weight: 600;
		background-color: #95d5b2;
		text-align: center;
		padding: clamp(0.75rem, 3vw, 2rem) 16px;
	}
</style>
