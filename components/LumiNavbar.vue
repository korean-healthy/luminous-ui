<template>
	<div class="lumi-navigation">
		<div :class="className">
			<nav class="lumi-navbar-content" role="navigation">
				<slot name="title"></slot>
				<div class="lumi-navbar-content-inner">
					<slot></slot>
				</div>
			</nav>
		</div>

		<div class="lumi-navbar-backdrop">
		</div>
	</div>
</template>

<style lang="less" scoped>
	@import "~theme";
	@import "~utilities";

	.lumi-navbar {
		width: 100%;
		height: 64px;
		position: fixed;
		top: 0;
		left: 0;
		//padding-bottom: 16px;
		display: flex;
		justify-content: flex-end;
		animation-duration: .3s;
		animation-timing-function: ease-in;
		z-index: 2;

		&.fixed {
			animation-name: lumi-navbar-drop;
			position: fixed;
			top: 0;
			box-shadow: 0 0 3px 1px #404040;
			padding-bottom: 0;

			.colors-background;
		}

		.colors(); .-do(@color) {
			&.was-fixed.@{color} {
				animation-name: ~"lumi-navbar-up-@{color}";
			}
		}

		&.was-fixed {
			top: 0;
		}

		&:not(.was-fixed, .fixed) {
			//background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 60%, transparent 100%);
		}

		.lumi-navbar-content {
			display: flex;
			min-width: 768px;
			margin: 0 auto;

			.lumi-navbar-content-inner {
				display: flex;
				flex-grow: 1;
				justify-content: flex-end;
			}
		}
	}

	.fixed+.lumi-navbar-backdrop, .was-fixed+.lumi-navbar-backdrop {
		display: block;
		position: fixed;
		//background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 60%, transparent 100%);
		left: 0;
		top: 0;
		width: 100%;
		height: calc(64px + 16px);
		z-index: 1;
	}
</style>

<style lang="less" scoped>
	@import "~theme";
	@import "~utilities";

	@keyframes lumi-navbar-drop {
		0% {
			top: -64px;
		}

		100% {
			top: 0;
		}
	}

	.color-keyframes(@color) {
		@name: ~"lumi-navbar-up-@{color}";

		@keyframes @name {
			0% {
				top: 0;
				background: @@color;
			}

			100% {
				top: -64px;
			}
		}
	}

	.colors(); .-do(@color) {
		.color-keyframes(@color);
	}
</style>

<style lang="less">
	@import "~theme";
	@import "~utilities";

	.colors(); .-do(@color) {
		.lumi-navbar.fixed.@{color} {
			.lumi-navbar-content, .lumi-navbar-content a {
				color: contrast(@@color, @black, @white);
			}

			.lumi-navbar-content a::after {
				background: contrast(@@color, @black, @white);
			}
		}
	}
</style>

<script>
	const NAVBAR_HEIGHT = 64;

	export default {
		data() {
			return {
				scrollTop: 0,
				wasOverHeight: false
			};
		},

		props: {
			color: {
				type: String,
				default: 'white'
			}
		},

		mounted() {
			window.addEventListener('scroll', this.scrollHandler, false);
		},

		destroyed() {
			window.removeEventListener('scroll', this.scrollHandler, false);
		},

		methods: {
			scrollHandler() {
				this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			}
		},

		computed: {
			overHeight() {
				return this.scrollTop > NAVBAR_HEIGHT;
			},

			className() {
				let defaultClass = 'lumi-navbar';

				if(this.overHeight) {
					this.wasOverHeight = true;
					defaultClass += ' fixed';
				}

				if(!this.overHeight && this.wasOverHeight) {
					defaultClass += ' was-fixed';
				}

				return `${defaultClass} ${this.color}`;
			}
		}
	};
</script>
