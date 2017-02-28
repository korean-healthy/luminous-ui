<template>
	<div class="modal" v-if="opened">
		<h2 v-html="title"></h2>
		<slot></slot>
		<slot name="buttons"></slot>
		<lumi-backdrop></lumi-backdrop>
	</div>
</template>

<script>
	export default {
		props: {
			opened: {
				type: Boolean
			},

			title: {
				type: String,
				required: true
			}
		}
	}
</script>
