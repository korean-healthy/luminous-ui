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
		height: @button-height;
		line-height: calc(@button-height - 40px);
		cursor: pointer;
		padding: 20px 50px;
		outline: 0;
		transition: background @button-animate-tick ease;

		&:hover {
			.colors(); .-do(@color) {
				&.@{color}-background {
					background: lighten(@@color, 10%);
				}
			}
		}

		&:active {
			.colors(); .-do(@color) {
				&.@{color}-background{
					background: darken(@@color, 10%);
				}
			}
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
