<template>
	<section class="lumi-gallery">
		<slot></slot>
	</section>
</template>

<style lang="less" scoped>
	.lumi-gallery {
		display: flex;
		flex-wrap: wrap;
		
		* {
			flex-grow: 1;
			width: 33.33333%;
		}
	}
</style>

<script>
	export default {};
</script>
