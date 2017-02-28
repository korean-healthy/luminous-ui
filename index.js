import Vue from "vue";

import LumiApp from "./components/LumiApp.vue";
import LumiBackdrop from "./components/LumiBackdrop.vue";
import LumiButton from "./components/LumiButton.vue";
import LumiCard from "./components/LumiCard.vue";
import LumiCardSection from "./components/LumiCardSection.vue";
import LumiCollapse from "./components/LumiCollapse.vue";
import LumiColumn from "./components/LumiColumn.vue";
import LumiContainer from "./components/LumiContainer.vue";
import LumiFlatButton from "./components/LumiFlatButton.vue";
import LumiFullSection from "./components/LumiFullSection.vue";
import LumiGradientButton from "./components/LumiGradientButton.vue";
import LumiModal from "./components/LumiModal.vue";
import LumiSection from "./components/LumiSection.vue";
import LumiStat from "./components/LumiStat.vue";
import LumiText from "./components/LumiText.vue";

class LuminousUI{
	static install(){
		Vue.component('lumi-app', LumiApp);
		Vue.component('lumi-backdrop', LumiBackdrop);
		Vue.component('lumi-button', LumiButton);
		Vue.component('lumi-card', LumiCard);
		Vue.component('lumi-card-section', LumiCardSection);
		Vue.component('lumi-collapse', LumiCollapse);
		Vue.component('lumi-column', LumiColumn);
		Vue.component('lumi-container', LumiContainer);
		Vue.component('lumi-flat-button', LumiFlatButton);
		Vue.component('lumi-full-section', LumiFullSection);
		Vue.component('lumi-gradient-button', LumiGradientButton);
		Vue.component('lumi-modal', LumiModal);
		Vue.component('lumi-section', LumiSection);
		Vue.component('lumi-stat', LumiStat);
		Vue.component('lumi-text', LumiText);
	}
}

export default LuminousUI;
