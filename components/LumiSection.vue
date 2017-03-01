<template>
	<section :style="style" :class="className">
		<lumi-container>
			<div class="lumi-section-inner">
				<slot></slot>
			</div>
		</lumi-container>
	</section>
</template>

<style lang="less" scoped>
	@import "~theme";
	@import "~utilities";

	.lumi-section {
		background-size: cover;
		background-position: center;

		&.full {
			height: 100vh;
		}

		.colors-background;

		.lumi-container {
			height: 100%;
		}

		.lumi-section-inner {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 100%;
			align-items: center;
			min-height: @section-height;
		}
	}
</style>

<script>
	export default {
		props: {
			background: {
				type: String,
				default: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMCIgaGVpZ2h0PSIwIj48L3N2Zz4='
			},

			color: {
				type: String,
				default: 'transparent'
			},

			parallax: {
				type: Boolean
				//TODO
			},

			attach: {
				type: String,
				default: 'center center'
			},

			full: {
				type: Boolean
			}
		},

		computed: {
			style(){
				return !this.parallax && this.background ?
					`background-image: url("${this.background}");` +
					`background-position: ${this.attach};` : '';
			},

			className(){
				return `lumi-section ${this.color}${this.full ? ' full' : ''}`;
			}
		},

		components: {}
	};
</script>
