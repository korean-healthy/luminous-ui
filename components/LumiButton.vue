<template>
	<button @click="click" :class="className">
		<slot></slot>
	</button>
</template>

<style scoped lang="less">
	@import "~theme";
	@import "~utilities";

	.lumi-button {
		.colors-foreground;

		border: 1px solid #000;
		.colors-border-fallback;
		border-radius: @button-radius;
		background: transparent;
		cursor: pointer;
		padding: 20px 50px;
		height: @button-height;
		line-height: calc(@button-height - 40px);
		font-family: @button-font;
		font-size: @button-font-size;
		font-weight: @button-font-weight;
		border-radius: @button-radius;
		transition: background @button-animate-tick ease, color @button-animate-tick ease;
		outline: 0;

		&:hover {
			.colors-background-foreground-fallback;
		}
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
				default: 'red'
			},

			border: {
				type: String,
				default: 'red'
			}
		},

		computed: {
			className(){
				return `lumi-button ${this.color} ${this.border}-border ${this.border}-background`;
			}
		}
	};
</script>
