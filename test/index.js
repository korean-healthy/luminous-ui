import Vue from "vue";
import LuminousUI from "../index.js";
Vue.use(LuminousUI);

import App from "./App.vue";

new Vue({
	el: '#app',
	render(h){
		return h(App);
	}
});
