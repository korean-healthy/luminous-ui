if(typeof require !== 'undefined') {
	if(typeof __webpack_modules__ !== 'undefined'){
		require('./dist/luminous.bundle.css');
	}

	const LuminousUI = require('./dist/luminous.bundle.js');

	if(typeof module !== 'undefined' && module.exports) {
		module.exports = LuminousUI;
	} else {
		window.LuminousUI = LuminousUI;
	}
} else {
	console.error('Require doesn\'t exists!');
}
