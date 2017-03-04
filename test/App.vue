<template>
	<lumi-app>
		<lumi-navbar color="dark-blue">
			<lumi-navbar-link href="/" slot="title" no-effect>
				<img src="./korean-healthy.svg" style="width: 48px; height: 48px; padding: 8px;">
			</lumi-navbar-link>
			<lumi-navbar-link href="https://blog.khinenw.tk">
				Blog
			</lumi-navbar-link>
		</lumi-navbar>

		<lumi-section background="https://i.imgur.com/rrLsKeb.jpg" attach="top left" full>
			<lumi-row>
				<lumi-column>
					<img src="./korean-healthy.svg" style="width: 18rem; height: 18rem;">
				</lumi-column>
				<lumi-column>
					<lumi-text weight="200" size="5rem">
						Korean<br>
						Health<br>
						Channel
					</lumi-text>
				</lumi-column>
			</lumi-row>
		</lumi-section>

		<lumi-section color="dark-blue">
			<div>
				<lumi-text size="3rem" weight="200">The channel which tells</lumi-text>
			</div>
			<div>
				<lumi-text size="4rem" weight="200">what is <b>the fact</b>.</lumi-text>
			</div>
		</lumi-section>

		<lumi-section color="white">
			<lumi-row>
				<lumi-stat stat="100%" desc="Human Death Rate" color="black"></lumi-stat>
				<lumi-stat stat="217,057" desc="Cancer Patients" color="teal"></lumi-stat>
				<lumi-stat stat="0.3%" desc="Cancer Incidence" color="black"></lumi-stat>
			</lumi-row>
		</lumi-section>

		<lumi-container>
			<h1>
				<lumi-icon icon="information"></lumi-icon>
				<lumi-text color="black" weight="800">Galleries</lumi-text>
			</h1>

			<lumi-gallery>
				<lumi-image-box src="https://placehold.it/300x200"></lumi-image-box>
				<lumi-image-box src="https://placehold.it/300x200"></lumi-image-box>
				<lumi-image-box src="https://placehold.it/300x200"></lumi-image-box>
				<lumi-image-box src="https://placehold.it/300x200"></lumi-image-box>
				<lumi-image-box src="https://placehold.it/300x200"></lumi-image-box>
				<lumi-image-box src="https://placehold.it/300x200" text>
					<lumi-text style="margin-bottom: 30px;" weight="200">Test</lumi-text>
					<lumi-flat-button background="blue" color="white" :click="openModal">
						READ MORE
					</lumi-flat-button>
				</lumi-image-box>
			</lumi-gallery>
		</lumi-container>

		<lumi-section color="dark-blue" style="margin-top: 100px;">
		</lumi-section>

		<lumi-modal :opened="modal" :backdrop-close="closeModal" :closing="closing" title="Test Modal!">
			<template v-slot="buttons">
				<lumi-gradient-button :click="alertButton">Ooh!</lumi-gradient-button>
			</template>
		</lumi-modal>
	</lumi-app>
</template>

<script>
	export default {
		data(){
			return {
				modal: false,
				closing: false
			};
		},
		methods: {
			openModal(){
				this.modal = true;
				this.closing = false;
			},

			closeModal(){
				this.closing = true;
				setTimeout(() => {
					this.modal = false;
				}, 300);
			},

			alertButton(){
				this.closing = true;
				setTimeout(() => {
					this.modal = false;
					alert('Oh!');
				}, 300);
			}
		}
	};
</script>
