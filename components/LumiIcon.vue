<template>
	<i :class="className"></i>
</template>

<script>
	export default {
		props: {
			icon: {
				type: String,
				required: true
			}
		},

		computed: {
			className(){
				return `lumi-icon mdi mdi-${this.icon}`;
			}
		}
	};
</script>
