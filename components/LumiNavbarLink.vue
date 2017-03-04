<template>
	<a :class="className" :href="href">
		<slot></slot>
	</a>
</template>

<style lang="less" scoped>
	@import "~theme";

	.lumi-link {
		position: relative;
		text-decoration: none;
		display: inline-block;
		line-height: 64px;
		height: 64px;
		padding: 0 30px;
		margin: 0 30px;
		color: @white;

		&:not(.no-effect)::after {
			content: '';
			display: block;
			width: 0;
			height: 3px;
			position: absolute;
			bottom: 0;
			left: 50%;
			background: @white;
			transform: translateX(-50%);
			transition: width .4s ease;
		}

		&:not(.no-effect):hover {
			&::after {
				width: 100%;
			}
		}
	}
</style>

<script>
	export default {
		props: {
			href: {
				type: String,
				required: true
			},

			noEffect: {
				type: Boolean
			}
		},

		computed: {
			className() {
				return `lumi-link${this.noEffect ? ' no-effect' : ''}`;
			}
		}
	};
</script>
