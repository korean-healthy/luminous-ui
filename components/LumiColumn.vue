<template>
	<div class="lumi-column">
		<slot></slot>
	</div>
</template>

<style lang="less" scoped>
	.lumi-column {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

<script>
	export default {};
</script>
