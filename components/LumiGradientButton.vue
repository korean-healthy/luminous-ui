<template>
	<button class="lumi-gradient-button" @click="click">
		<div class="lumi-backgroundfix"></div>
		<div class="lumi-borderfix-left"></div>
		<div class="lumi-button-text"><slot></slot></div>
		<div class="lumi-borderfix-right"></div>
	</button>
</template>

<style scoped lang="less">
	@import "~theme";

	@button-gradient-start: extract(@button-gradient, 1);
	@button-gradient-end: extract(@button-gradient, 2);

	.lumi-gradient-button {
		background: transparent;
		position: relative;
		padding: 20px 50px;
		border: none;
		height: @button-height;
		line-height: calc(@button-height - 40px);
		font-family: @button-font;
		font-size: @button-font-size;
		font-weight: @button-font-weight;
		color: @button-color;
		border-radius: @button-radius;
		transition: color @button-animate-tick ease;
		cursor: pointer;
		outline: 0;

		* {
			outline: 0;
		}

		.lumi-button-text {
			z-index: 1;
			position: relative;
		}

		.lumi-borderfix-left, .lumi-borderfix-right {
			position: absolute;
			top: 0;
			width: 50%;
			height: 100%;
			box-sizing: border-box;
		}

		.lumi-backgroundfix {
			position: absolute;
			opacity: 0;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to right, @button-gradient-start, @button-gradient-end);
			border-radius: @button-radius;
			z-index: 0;
			transition: opacity @button-animate-tick ease;
		}

		&:hover {
			.lumi-backgroundfix {
				opacity: 1;
			}
			color: #fff;
		}

		&:active {
			filter: brightness(90%);
		}

		.lumi-borderfix-left {
			left: 0;
			border-top-left-radius: @button-radius;
			border-bottom-left-radius: @button-radius;
			border-top: @button-border solid @button-gradient-start;
			border-left: @button-border solid @button-gradient-start;
			border-right: @button-border solid transparent;
			border-bottom: @button-border solid @button-gradient-start;
		}

		.lumi-borderfix-right {
			right: 0;
			border-top-right-radius: @button-radius;
			border-bottom-right-radius: @button-radius;
			border-top: @button-border solid @button-gradient-end;
			border-right: @button-border solid @button-gradient-end;
			border-left: @button-border solid transparent;
			border-bottom: @button-border solid @button-gradient-end;
		}

		&::before, &::after {
			content: '';
			position: absolute;
			left: @button-radius;
			right: @button-radius;
			height: @button-border;
			z-index: 2;
			background: linear-gradient(to right, @button-gradient-start, @button-gradient-end);
		}

		&::before {
			top: 0;
		}

		&::after {
			bottom: 0;
		}
	}
</style>

<script>
	export default {
		props: {
			click: {
				type: Function,
				required: true
			}
		}
	};
</script>
