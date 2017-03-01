<template>
	<div class="lumi-column">
		<slot></slot>
	</div>
</template>

<style lang="less" scoped>
	@import "~theme";
	
	.lumi-column {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;

		min-height: @section-height;
	}
</style>

<script>
	export default {};
</script>
