<template>
	<span :class="className" :style="style">
		<slot></slot>
	</span>
</template>

<style lang="less" scoped>
	@import "~theme";

	.lumi-text{
		font-family: @font;

		&.vertical {
			width: 1em;
		}

		&.italic {
			font-style: italic;
		}
	}
</style>

<script>
	export default {
		props: {
			color: {
				type: String,
				default: '#fff'
			},

			font: {
				type: String
			},

			size: {
				type: String,
				default: '20px'
			},

			weight: {
				type: String,
				default: '400'
			},

			vertical: {
				type: Boolean
			},

			italic: {
				type: Boolean
			}
		},

		computed: {
			style(){
				return `color: ${this.color};` +
					`${this.font ? `font-family: ${this.font};` : ''}` +
					`font-size: ${this.size};` +
					`font-weight: ${this.weight};`;
			},

			className(){
				return `lumi-text${this.vertical ? ' vertical' : ''}${this.italic ? ' italic' : ''}`
			}
		}
	};
</script>
