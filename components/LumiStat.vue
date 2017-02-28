<template>
	<figure :class="className">
		<div class="stat-view">
			<b v-html="stat"></b>
			<figcaption v-html="desc"></figcaption>
		</div>
	</figure>
</template>

<style lang="less" scoped>
	@import "~theme";
	@import "~utilities";

	.lumi-stat {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		flex-grow: 1;

		.colors-foreground;

		.stat-view {
			b {
				display: block;
				text-align: center;
				font-size: 3rem;
				font-weight: 200;
				font-family: @font;
			}

			figcaption {
				display: block;
				text-align: center;
				opacity: 0.5;
			}
		}
	}
</style>

<script>
	export default {
		props: {
			stat: {
				type: String,
				required: true
			},

			desc: {
				type: String,
				required: true
			},

			color: {
				type: String,
				default: 'white'
			}
		},

		computed: {
			className(){
				return `lumi-stat ${this.color}`;
			}
		}
	}
</script>
