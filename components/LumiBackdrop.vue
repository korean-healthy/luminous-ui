<template>
	<div class="backdrop" @click="handleClick"></div>
</template>

<style lang="less" scoped>
	@import "~theme";

	.backdrop {
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 99;
		position: fixed;
		background: @backdrop-color;
		opacity: 0;
		animation-name: show;
		animation-fill-mode: forwards;
		animation-timing-function: ease;
		animation-duration: @backdrop-animate-tick;

		&.closing {
			animation-direction: reverse;
			animation-play-state: running;
		}
	}


	@keyframes show {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 0.8;
		}
	}
</style>

<script>
	export default {
		props: {
			click: {
				type: Function
			}
		},

		methods: {
			handleClick(){
				this.$el.classList.add('closing');

				setTimeout(() => {
					this.click();
				}, 350);
			}
		}
	};
</script>
