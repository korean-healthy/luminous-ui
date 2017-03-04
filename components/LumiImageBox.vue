<template>
	<div :class="className" :style="style">
		<div class="lumi-image-textbox" v-if="text">
			<slot></slot>
		</div>
	</div>
</template>

<style lang="less" scoped>
	@import "~theme";

	.lumi-image-box {
		display: inline-block;
		height: 200px;

		background-position: center;
		background-size: cover;

		transition: filter .4s ease;

		position: relative;
		overflow: hidden;

		&.no-text:hover {
			filter: brightness(0.5);
		}

		&.text {
			.lumi-image-textbox {
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				width: 100%;
				height: 75%;
				bottom: -75%;
				background: @dark-blue;
				box-sizing: border-box;
				color: @white;
				padding: 10px;
				transition: bottom .4s ease;
			}

			&:hover {
				.lumi-image-textbox {
					bottom: 0;
				}
			}
		}
	}
</style>

<script>
	export default {
		props: {
			src: {
				type: String,
				required: true
			},

			text: {
				type: Boolean
			}
		},

		computed: {
			style() {
				return `background-image: url(${this.src});`;
			},

			className() {
				return `lumi-image-box ${this.text ? 'text' : 'no-text'}`;
			}
		}
	};
</script>
