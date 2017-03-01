<template>
	<div :class="className" @click="handleClick"></div>
</template>

<style lang="less" scoped>
	@import "~theme";

	.lumi-backdrop {
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 99;
		position: fixed;
		background: @backdrop-color;
		opacity: 0;
		animation-name: lumi-modal-show;
		animation-fill-mode: forwards;
		animation-timing-function: ease;
		animation-duration: @backdrop-animate-tick;

		&.closing {
			animation-name: lumi-modal-hide;
		}
	}


	@keyframes lumi-modal-show {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 0.8;
		}
	}

	@keyframes lumi-modal-hide {
		0% {
			opacity: 0.8;
			visibility: visible;
		}

		100% {
			opacity: 0;
			visibility: hidden;
			display: none;
		}
	}
</style>

<script>
	export default {
		data() {
			return {
				innerClosing: false
			};
		},

		props: {
			click: {
				type: Function
			},

			closable: {
				type: Boolean
			},

			closing: {
				type: Boolean
			}
		},

		methods: {
			handleClick(){
				if(this.closable){
					if(this.click){
						setTimeout(() => {
							this.click();
						}, 300);
					}

					this.closing = true;
				}
			}
		},

		computed: {
			className(){
				return `lumi-backdrop${(this.closing || this.innerClosing) ? ' closing' : ''}`;
			}
		}
	};
</script>
