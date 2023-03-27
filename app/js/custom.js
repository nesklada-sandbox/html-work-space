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

/***/ "./app/js/_init.js":
/*!*************************!*\
  !*** ./app/js/_init.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_config_jquery_validation_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/config/jquery.validation-default */ \"./app/js/component/config/jquery.validation-default.js\");\n/* harmony import */ var _component_config_avifWebpBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/config/avifWebpBackground */ \"./app/js/component/config/avifWebpBackground.js\");\n/* harmony import */ var _component_utms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/utms */ \"./app/js/component/utms.js\");\n/* harmony import */ var _component_forms_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/forms/contact */ \"./app/js/component/forms/contact.js\");\n/* harmony import */ var _component_forms_unsubscribe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/forms/unsubscribe */ \"./app/js/component/forms/unsubscribe.js\");\n\n // import lazy_init from './component/lazy';\n\n\n\n\n\n(function ($, window, document) {\n  $(function () {\n    (0,_component_config_avifWebpBackground__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_component_config_jquery_validation_default__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // lazy_init();\n\n    (0,_component_utms__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,_component_forms_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,_component_forms_unsubscribe__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    $(\"body\").css(\"opacity\", 1);\n  });\n})(window.jQuery, window, document);\n\n//# sourceURL=webpack://myproject/./app/js/_init.js?");

/***/ }),

/***/ "./app/js/component/config/avifWebpBackground.js":
/*!*******************************************************!*\
  !*** ./app/js/component/config/avifWebpBackground.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  function htmlClass(attr) {\n    document.documentElement.classList.add(attr);\n  }\n\n  var avif = new Image();\n  avif.src = \"data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=\";\n\n  avif.onload = function () {\n    htmlClass(\"avif\");\n  };\n\n  avif.onerror = function () {\n    checkWebp(function (isWebp) {\n      if (isWebp) {\n        htmlClass(\"webp\");\n        return;\n      }\n\n      htmlClass(\"jpng\");\n    });\n  };\n\n  function checkWebp(cbFn) {\n    var img = new Image();\n\n    img.onload = function () {\n      var result = img.width > 0 && img.height > 0;\n      cbFn(result);\n    };\n\n    img.onerror = function () {\n      cbFn(false);\n    };\n\n    img.src = \"data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==\";\n  }\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/config/avifWebpBackground.js?");

/***/ }),

/***/ "./app/js/component/config/jquery.validation-default.js":
/*!**************************************************************!*\
  !*** ./app/js/component/config/jquery.validation-default.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  jQuery.validator.setDefaults({\n    errorElement: \"label\",\n    errorClass: \"error\",\n    focusInvalid: false,\n    errorPlacement: function errorPlacement(error, element) {\n      $(element).closest(\".form-group\").append(error);\n    },\n    highlight: function highlight(element, errorClass, validClass) {\n      var fieldWrap = $(element).closest(\".form-group\");\n      fieldWrap.addClass(\"has-error\").removeClass(\"has-valid\");\n      $(element).addClass(\"error\");\n    },\n    unhighlight: function unhighlight(element, errorClass, validClass) {\n      var fieldWrap = $(element).closest(\".form-group\");\n      fieldWrap.removeClass(\"has-error\").addClass(\"has-valid\");\n      $(element).removeClass(\"error\");\n    },\n    rules: {\n      email: {\n        required: true,\n        email: true\n      },\n      contact_message: {\n        required: true,\n        minlength: 10\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/config/jquery.validation-default.js?");

/***/ }),

/***/ "./app/js/component/forms/contact.js":
/*!*******************************************!*\
  !*** ./app/js/component/forms/contact.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var $formContact = $('#js_formContact');\n  $formContact.submit(function (e) {\n    e.preventDefault();\n\n    if (!$formContact.valid()) {\n      return;\n    }\n\n    var $control = $formContact.find('.btn');\n    $control.addClass('btn--loading').attr('disabled', true);\n    setTimeout(function () {\n      alert('Your message was successfully sent.');\n      $formContact.find('input').val('');\n      $formContact.find('.form-group').removeClass('has-valid');\n      $control.removeClass('btn--loading').attr('disabled', false);\n    }, 2410);\n  });\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/forms/contact.js?");

/***/ }),

/***/ "./app/js/component/forms/unsubscribe.js":
/*!***********************************************!*\
  !*** ./app/js/component/forms/unsubscribe.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var $formUnsubscribe = $('#js_formUnsubscribe');\n  $formUnsubscribe.submit(function (e) {\n    e.preventDefault();\n\n    if (!$formUnsubscribe.valid()) {\n      return;\n    }\n\n    var $control = $formUnsubscribe.find('.btn');\n    $control.addClass('btn--loading').attr('disabled', true);\n    setTimeout(function () {\n      alert('If your email was found in our database - you have been unsubscribed.');\n      $formUnsubscribe.find('input').val('');\n      $formUnsubscribe.find('.form-group').removeClass('has-valid');\n      $control.removeClass('btn--loading').attr('disabled', false);\n      ;\n    }, 2500);\n  });\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/forms/unsubscribe.js?");

/***/ }),

/***/ "./app/js/component/utms.js":
/*!**********************************!*\
  !*** ./app/js/component/utms.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction formatWindowSearch() {\n  var pairs = window.location.search.substring(1).split(\"&\"),\n      obj = {},\n      pair,\n      i;\n\n  for (i in pairs) {\n    if (pairs[i] === \"\") continue;\n    pair = pairs[i].split(\"=\");\n    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);\n  }\n\n  delete obj.htmlpage;\n  var utmString = \"?\";\n\n  for (var item in obj) {\n    utmString += \"\".concat(item, \"=\").concat(obj[item], \"&\");\n  }\n\n  return utmString.substring(0, utmString.length - 1);\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(obj) {\n  if (!obj) {\n    var obj = {};\n  }\n\n  var selector = obj.selector || '.js_utmLink';\n  var links = document.querySelectorAll(selector);\n  var utm = formatWindowSearch();\n\n  for (var i = 0; i < links.length; i++) {\n    var link = links[i],\n        href = link.getAttribute('href');\n\n    if (!href) {\n      continue;\n    }\n\n    var hrefArr = href.split('?');\n    var newHref = href + utm;\n\n    if (hrefArr.length >= 2) {\n      newHref = href + utm.replace(\"?\", \"&\");\n    }\n\n    if (!link.hasAttribute('href') || href.length <= 0) {\n      continue;\n    }\n\n    link.setAttribute('href', newHref);\n  }\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/utms.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/js/_init.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=custom.js.map
