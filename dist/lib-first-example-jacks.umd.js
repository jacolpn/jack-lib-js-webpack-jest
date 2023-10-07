(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["agm-awesome-utils-tutorial"] = {}));
})(this, (function (exports) { 'use strict';

	// const linguagens = require('./linguagens-de-programacao.json')

	// module.exports = { all: linguagens };
	var capitalize = function capitalize(word) {
	  return word.charAt(0).toUpperCase() + word.slice(1);
	};

	exports.capitalize = capitalize;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
