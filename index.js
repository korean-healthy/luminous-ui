// Importing Fonts
import "typeface-roboto";
import "typeface-nanum-barun-gothic";
import "mdi/css/materialdesignicons.css";

// Importing Luminous Components
import LumiApp from "./components/LumiApp.vue";
import LumiButton from "./components/LumiButton.vue";
import LumiColumn from "./components/LumiColumn.vue";
import LumiContainer from "./components/LumiContainer.vue";
import LumiDivider from "./components/LumiDivider.vue";
import LumiFlatButton from "./components/LumiFlatButton.vue";
import LumiGallery from "./components/LumiGallery.vue";
import LumiGradientButton from "./components/LumiGradientButton.vue";
import LumiIcon from "./components/LumiIcon.vue";
import LumiImageBox from "./components/LumiImageBox.vue";
import LumiModal from "./components/LumiModal.vue";
import LumiNavbar from "./components/LumiNavbar.vue";
import LumiNavbarLink from "./components/LumiNavbarLink.vue";
import LumiRow from "./components/LumiRow.vue";
import LumiSection from "./components/LumiSection.vue";
import LumiStat from "./components/LumiStat.vue";
import LumiText from "./components/LumiText.vue";

class LuminousUI{
	static install(Vue){
		Vue.component('lumi-app', LumiApp);
		Vue.component('lumi-button', LumiButton);
		Vue.component('lumi-column', LumiColumn);
		Vue.component('lumi-container', LumiContainer);
		Vue.component('lumi-divider', LumiDivider);
		Vue.component('lumi-flat-button', LumiFlatButton);
		Vue.component('lumi-gallery', LumiGallery);
		Vue.component('lumi-gradient-button', LumiGradientButton);
		Vue.component('lumi-icon', LumiIcon);
		Vue.component('lumi-image-box', LumiImageBox);
		Vue.component('lumi-modal', LumiModal);
		Vue.component('lumi-navbar', LumiNavbar);
		Vue.component('lumi-navbar-link', LumiNavbarLink);
		Vue.component('lumi-row', LumiRow);
		Vue.component('lumi-section', LumiSection);
		Vue.component('lumi-stat', LumiStat);
		Vue.component('lumi-text', LumiText);
	}
}

export default LuminousUI;
