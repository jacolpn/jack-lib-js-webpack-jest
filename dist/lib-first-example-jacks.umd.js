(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["agm-awesome-utils-tutorial"] = {}));
})(this, (function (exports) { 'use strict';

    var linguagensDeProgramacao = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    function getCjsExportFromNamespace (n) {
    	return n && n['default'] || n;
    }

    var linguagens = getCjsExportFromNamespace(linguagensDeProgramacao);

    var capitalize = function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    };
    var libFirst = {
      linguagens: linguagens,
      capitalize: capitalize
    };
    var libFirst_1 = libFirst.linguagens;
    var libFirst_2 = libFirst.capitalize;

    exports.capitalize = libFirst_2;
    exports["default"] = libFirst;
    exports.linguagens = libFirst_1;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
