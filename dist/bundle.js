/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sliders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders.js */ \"./src/js/sliders.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ \"./src/js/script.js\");\n\r\n\r\n//import '../scss/style.scss';\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,_sliders_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n  (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://cps_site/./src/js/index.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction script() {\r\n    \r\n    let boxContainer = document.querySelector('.brand-box-container__input');\r\n    let btnMore = document.querySelector('.btn-loader');\r\n    let boxContainerArr = ['lenovo.png', 'samsung.png', 'apple.png', 'bosh.png', 'bosh.png', 'acer.png', 'sony.png', 'viewsonic.png', 'acer.png'];\r\n    let boxItem = document.createElement('div').classList.add('brand-box-container__item');\r\n\r\n    if (document.documentElement.clientWidth == 1920) {\r\n        btnMore.style.display = \"none\";\r\n    }\r\n\r\n    window.addEventListener('resize', () => {\r\n        if (document.documentElement.clientWidth > 1400 && boxContainerArr.length < 10) {\r\n            btnMore.style.display = \"none\";\r\n        } else {\r\n            btnMore.style.display = \"block\";\r\n        }\r\n    });\r\n    \r\n    function addElementItem(arr, container, classNameBlock, classNameElement) {\r\n        for (let i = 0; i < arr.length; i++) {\r\n            let elem = document.createElement('div');\r\n            elem.classList.add(classNameBlock);\r\n            elem.classList.add(classNameElement);\r\n            elem.innerHTML = `\r\n            <div class=\"block-slide__content\">\r\n                <div class=\"block-slide__elem logo-brand\"><img src=\"./src/img/slider/logo-brands/${boxContainerArr[i]}\" class=\"block-slide__elem-pic\"></div>\r\n                <button class=\"block-slide__elem elem-button\"><img src=\"./src/img/slider/icon-button/go.png\" class=\"elem-button__icon\"></button>\r\n            </div>\r\n            `;\r\n            container.after(elem);\r\n        };\r\n    }\r\n    addElementItem(boxContainerArr, boxContainer, 'brand-box-container__item', 'block-slide');\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (script);\n\n//# sourceURL=webpack://cps_site/./src/js/script.js?");

/***/ }),

/***/ "./src/js/sliders.js":
/*!***************************!*\
  !*** ./src/js/sliders.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction sliders() {\r\n    const swiperBrands = new Swiper('.swiper-container', {\r\n        pagination: {\r\n            el: '.swiper-pagination',\r\n        },\r\n        scrollbar: {\r\n            el: '.swiper-scrollbar',\r\n        },\r\n        breakpoints: {\r\n        \r\n            280: {\r\n            slidesPerView: 1.20,\r\n            spaceBetween: 16\r\n            },\r\n            \r\n            528: {\r\n            slidesPerView: 2,\r\n            spaceBetween: 20\r\n            },\r\n            \r\n            784: {\r\n            slidesPerView: 3,\r\n            spaceBetween: 24\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);\n\n//# sourceURL=webpack://cps_site/./src/js/sliders.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;