<template>
	<div class="lumi-modal" v-if="opened">
		<section :class="className">
			<div class="lumi-modal-inner">
				<h2 v-html="title"></h2>
				<slot></slot>
				<slot name="buttons"></slot>
			</div>
		</section>
		<lumi-backdrop :click="backdropClose" :closable="backdropClosable" :closing="closing"></lumi-backdrop>
	</div>
</template>

<style lang="less" scoped>
	@import "~theme";

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

		h2 {
			color: @white;
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

			backdropClosable: {
				type: Boolean
			},

			closing: {
				//TODO
				type: Boolean
			},

			title: {
				type: String,
				required: true
			}
		},

		computed: {
			className(){
				return `lumi-modal-content${this.closing ? ' closing' : ''}`;
			}
		}
	}
</script>
