<template>
	<lumi-app>
		<lumi-container>
			<h1>Buttons</h1>
			<lumi-button :click="openModal">My Button!</lumi-button>
			<lumi-gradient-button :click="openModal">Fancy Button!</lumi-gradient-button>
			<lumi-flat-button :click="openModal">Flat button!</lumi-flat-button>
		</lumi-container>

		<lumi-container>
			<h1>Sections</h1>
		</lumi-container>

		<lumi-section background="https://i.imgur.com/rrLsKeb.jpg" attach="top left">
			<lumi-column>
				<svg xmlns="http://www.w3.org/2000/svg" style="width:120px; height: 120px" viewBox="0 0 2400 2400">
					<path fill="transparent" stroke="#fff" stroke-width="30px" d="M810,1334L391,916C235,759 235,506 391,350L1093,1050L810,1334M1488,1153L1341,1300L2029,1988L1888,2129L1200,1441L1341,1300M1200,1441L512,2129L371,1988L1347,1012C1276,859 1326,644 1485,485C1676,293 1950,257 2096,403C2243,550 2207,824 2015,1015C1856,1174 1641,1224 1488,1153Z"/>
				</svg>
			</lumi-column>
			<lumi-column>
				<lumi-text weight="200" size="30px" vertical>
					Korean Health Channel
				</lumi-text>
			</lumi-column>
		</lumi-section>
		<lumi-section color="white">
			<lumi-stat stat="100%" desc="Human Death Rate" color="black"></lumi-stat>
			<lumi-stat stat="217,057" desc="Cancer Patients" color="teal"></lumi-stat>
			<lumi-stat stat="0.3%" desc="Cancer Incidence" color="black"></lumi-stat>
		</lumi-section>

		<lumi-modal :opened="modal" :backdrop-close="closeModal" :closing="closing" title="Test Modal!" backdrop-closable>
			<template v-slot="buttons">
				<lumi-button :click="alertButton" color="teal">Ooh!</lumi-button>
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
				this.closint = false;
			},

			closeModal(){
				this.modal = false;
			},

			alertButton(){
				this.closing = true;
				setTimeout(() => {
					this.modal = false;
				}, 300);
			}
		}
	};
</script>
