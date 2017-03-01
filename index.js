import Vue from "vue";

import LumiApp from "./components/LumiApp.vue";
import LumiBackdrop from "./components/LumiBackdrop.vue";
import LumiButton from "./components/LumiButton.vue";
import LumiCollapse from "./components/LumiCollapse.vue";
import LumiColumn from "./components/LumiColumn.vue";
import LumiContainer from "./components/LumiContainer.vue";
import LumiDivider from "./components/LumiDivider.vue";
import LumiFlatButton from "./components/LumiFlatButton.vue";
import LumiGallery from "./components/LumiGallery.vue";
import LumiGradientButton from "./components/LumiGradientButton.vue";
import LumiIcon from "./components/LumiIcon.vue";
import LumiImage from "./components/LumiImage.vue";
import LumiModal from "./components/LumiModal.vue";
import LumiRow from "./components/LumiRow.vue";
import LumiSection from "./components/LumiSection.vue";
import LumiStat from "./components/LumiStat.vue";
import LumiText from "./components/LumiText.vue";

class LuminousUI{
	static install(){
		Vue.component('lumi-app', LumiApp);
		Vue.component('lumi-backdrop', LumiBackdrop);
		Vue.component('lumi-button', LumiButton);
		Vue.component('lumi-collapse', LumiCollapse);
		Vue.component('lumi-column', LumiColumn);
		Vue.component('lumi-container', LumiContainer);
		Vue.component('lumi-divider', LumiDivider);
		Vue.component('lumi-flat-button', LumiFlatButton);
		Vue.component('lumi-gallery', LumiGallery);
		Vue.component('lumi-gradient-button', LumiGradientButton);
		Vue.component('lumi-icon', LumiIcon);
		Vue.component('lumi-image', LumiImage);
		Vue.component('lumi-modal', LumiModal);
		Vue.component('lumi-row', LumiRow);
		Vue.component('lumi-section', LumiSection);
		Vue.component('lumi-stat', LumiStat);
		Vue.component('lumi-text', LumiText);
	}
}

export default LuminousUI;
