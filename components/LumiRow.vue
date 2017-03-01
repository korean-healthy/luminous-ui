<template>
	<div :class="className">
		<slot></slot>
	</div>
</template>

<style lang="less" scoped>
	.lumi-row {
		display: flex;
		width: 100%;
		flex-direction: row;
		
		&.pillar {
			flex-direction: column;
		}
	}
</style>

<script>
	export default {
		props: {
			pillar: {
				type: Boolean
			}
		},

		computed: {
			className(){
				return `lumi-row${this.pillar ? ' pillar' : ''}`;
			}
		}
	};
</script>
