<template>
	<div class="lumi-modal" v-if="opened">
		<section :class="className" @click="closeBackdrop">
			<div class="lumi-modal-inner">
				<h2 class="lumi-modal-title" v-html="title"></h2>
				<slot></slot>
				<div class="lumi-modal-buttons">
					<slot name="buttons"></slot>
				</div>
			</div>
		</section>
	</div>
</template>

<style lang="less" scoped>
	@import "~theme";

	.lumi-modal-title {
		text-align: center;
	}

	.lumi-modal-buttons {
		margin-top: 30px;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.lumi-modal-inner {
		max-width: 768px;
	}

	.lumi-modal-content {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		justify-content: center;
		align-items: center;
		z-index: 100;
		background-color: fadeout(@backdrop-color, 20%);

		opacity: 0;
		animation-name: lumi-modal-show;
		animation-duration: .35s;
		animation-fill-mode: forwards;
		animation-timing-function: ease;

		h2 {
			color: @white;
		}

		&.closing {
			animation-name: lumi-modal-hide;
		}
	}

	@keyframes lumi-modal-show {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes lumi-modal-hide {
		0% {
			opacity: 1;
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
		props: {
			opened: {
				type: Boolean
			},

			backdropClose: {
				type: Function
			},

			closing: {
				type: Boolean
			},

			title: {
				type: String,
				required: true
			}
		},

		computed: {
			className() {
				return `lumi-modal-content${this.closing ? ' closing' : ''}`;
			}
		},

		methods: {
			closeBackdrop() {
				if(this.backdropClose) this.backdropClose();
			}
		}
	}
</script>
