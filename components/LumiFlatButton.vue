<template>
	<button @click="click" :class="className">
		<slot></slot>
	</button>
</template>

<style scoped lang="less">
	@import "~theme";
	@import "~utilities";

	.lumi-flat-button {
		.colors-foreground;
		.colors-background-fallback;

		border: none;
		color: @button-color;
		font-family: @button-font;
		font-size: @button-font-size;
		font-weight: @button-font-weight;
		outline: 0;
	}
</style>

<script>
	export default {
		props: {
			click: {
				type: Function,
				required: true
			},

			color: {
				type: String,
				default: 'white'
			},

			background: {
				type: String,
				default: 'red'
			}
		},

		computed: {
			className(){
				return `lumi-flat-button ${this.color} ${this.background}-background`;
			}
		}
	};
</script>
