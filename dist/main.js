/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Montserrat-VariableFont_wght.ttf */ "./src/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'Montserrat';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\r\n}\r\n\r\n:root {\r\n  --clr-1: #ffdacc;\r\n  --clr-2: #ad7b68;\r\n  --clr-3: #244b43;\r\n  --clr-4: #880000;\r\n  --clr-5: #f7efeb;\r\n  --clr-6: #613e30;\r\n  --clr-6-t: #613e301e;\r\n  --clr-7-t: #27615750;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.flex-container {\r\n  display: flex;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n}\r\n\r\nbody {\r\n  font-family: 'Montserrat';\r\n  color: var(--clr-3);\r\n  letter-spacing: 1px;\r\n  line-height: 1.3;\r\n  min-height: 100vh;\r\n}\r\n\r\na {\r\n  color: var(--clr-4);\r\n  text-decoration: none;\r\n}\r\n\r\nh1 {\r\n  font-weight: 500;\r\n}\r\n\r\nh2 {\r\n  font-weight: 400;\r\n}\r\n\r\n#content {\r\n  flex-direction: column;\r\n  background-color: var(--clr-1);\r\n  flex-grow: 1;\r\n}\r\n\r\n.nav {\r\n  font-size: 1.3rem;\r\n  background-color: var(--clr-2);\r\n  gap: 1rem;\r\n  padding: 0.5em;\r\n}\r\n\r\n.nav > li {\r\n  padding: 0.2em 0.3em;\r\n}\r\n\r\n.nav > li:hover {\r\n  color: var(--clr-5);\r\n  background-color: var(--clr-7-t);\r\n  border-radius: 0.3em;\r\n  cursor: pointer;\r\n  text-decoration-line: underline;\r\n}\r\n\r\nli.highlighted {\r\n  color: var(--clr-6);\r\n  text-decoration-line: underline;\r\n}\r\n\r\n.container {\r\n  flex-direction: column;\r\n  gap: 3em;\r\n  margin: 4rem auto;\r\n}\r\n\r\n.header {\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  border-radius: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.header-tomato {\r\n  width: 360px;\r\n  height: 130px;\r\n  object-fit: cover;\r\n  object-position: 100% 65%;\r\n  border-radius: 3em;\r\n}\r\n\r\n.header-description {\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n  max-width: 50ch;\r\n}\r\n\r\n.info {\r\n  text-align: center;\r\n}\r\n\r\n.dishes {\r\n  position: relative;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));\r\n  gap: 2rem;\r\n}\r\n\r\n.dishes > h1 {\r\n  position: absolute;\r\n  font-size: 1.7rem;\r\n  top: -3rem;\r\n}\r\n\r\n.dish-card {\r\n  gap: 2rem;\r\n  padding: 1em;\r\n  border-radius: 1em;\r\n  background-color: var(--clr-5);\r\n  cursor: pointer;\r\n}\r\n\r\n.dish-card:hover {\r\n  background-color: var(--clr-6-t);\r\n}\r\n\r\n.dish-card:hover h2 {\r\n  text-decoration-line: underline;\r\n}\r\n\r\n.dish-card h2 {\r\n  font-size: 1rem;\r\n}\r\n\r\n.food-container {\r\n  gap: 2rem;\r\n}\r\n\r\n.dish-img {\r\n  width: 200px;\r\n  object-fit: cover;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.back-btn {\r\n  font-size: 1.2rem;\r\n  border: none;\r\n  color: var(--clr-1);\r\n  background-color: var(--clr-6);\r\n  padding: 0.3em 0;\r\n  border-radius: 0.8rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.back-btn:hover {\r\n  opacity: 0.9;\r\n}\r\n\r\n.dish-description {\r\n  font-size: 1.3rem;\r\n  max-width: 50ch;\r\n}\r\n\r\n.contact {\r\n  font-size: 1.4rem;\r\n  flex-direction: column;\r\n  gap: 5rem;\r\n  text-align: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,+DAA+D;AACjE;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,8BAA8B;EAC9B,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,oBAAoB;EACpB,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;EACtB,QAAQ;EACR,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,sEAAsE;EACtE,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;EAChB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,SAAS;EACT,kBAAkB;AACpB","sourcesContent":["@font-face {\r\n  font-family: 'Montserrat';\r\n  src: url(./Montserrat-VariableFont_wght.ttf) format('truetype');\r\n}\r\n\r\n:root {\r\n  --clr-1: #ffdacc;\r\n  --clr-2: #ad7b68;\r\n  --clr-3: #244b43;\r\n  --clr-4: #880000;\r\n  --clr-5: #f7efeb;\r\n  --clr-6: #613e30;\r\n  --clr-6-t: #613e301e;\r\n  --clr-7-t: #27615750;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.flex-container {\r\n  display: flex;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n}\r\n\r\nbody {\r\n  font-family: 'Montserrat';\r\n  color: var(--clr-3);\r\n  letter-spacing: 1px;\r\n  line-height: 1.3;\r\n  min-height: 100vh;\r\n}\r\n\r\na {\r\n  color: var(--clr-4);\r\n  text-decoration: none;\r\n}\r\n\r\nh1 {\r\n  font-weight: 500;\r\n}\r\n\r\nh2 {\r\n  font-weight: 400;\r\n}\r\n\r\n#content {\r\n  flex-direction: column;\r\n  background-color: var(--clr-1);\r\n  flex-grow: 1;\r\n}\r\n\r\n.nav {\r\n  font-size: 1.3rem;\r\n  background-color: var(--clr-2);\r\n  gap: 1rem;\r\n  padding: 0.5em;\r\n}\r\n\r\n.nav > li {\r\n  padding: 0.2em 0.3em;\r\n}\r\n\r\n.nav > li:hover {\r\n  color: var(--clr-5);\r\n  background-color: var(--clr-7-t);\r\n  border-radius: 0.3em;\r\n  cursor: pointer;\r\n  text-decoration-line: underline;\r\n}\r\n\r\nli.highlighted {\r\n  color: var(--clr-6);\r\n  text-decoration-line: underline;\r\n}\r\n\r\n.container {\r\n  flex-direction: column;\r\n  gap: 3em;\r\n  margin: 4rem auto;\r\n}\r\n\r\n.header {\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  border-radius: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.header-tomato {\r\n  width: 360px;\r\n  height: 130px;\r\n  object-fit: cover;\r\n  object-position: 100% 65%;\r\n  border-radius: 3em;\r\n}\r\n\r\n.header-description {\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n  max-width: 50ch;\r\n}\r\n\r\n.info {\r\n  text-align: center;\r\n}\r\n\r\n.dishes {\r\n  position: relative;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));\r\n  gap: 2rem;\r\n}\r\n\r\n.dishes > h1 {\r\n  position: absolute;\r\n  font-size: 1.7rem;\r\n  top: -3rem;\r\n}\r\n\r\n.dish-card {\r\n  gap: 2rem;\r\n  padding: 1em;\r\n  border-radius: 1em;\r\n  background-color: var(--clr-5);\r\n  cursor: pointer;\r\n}\r\n\r\n.dish-card:hover {\r\n  background-color: var(--clr-6-t);\r\n}\r\n\r\n.dish-card:hover h2 {\r\n  text-decoration-line: underline;\r\n}\r\n\r\n.dish-card h2 {\r\n  font-size: 1rem;\r\n}\r\n\r\n.food-container {\r\n  gap: 2rem;\r\n}\r\n\r\n.dish-img {\r\n  width: 200px;\r\n  object-fit: cover;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.back-btn {\r\n  font-size: 1.2rem;\r\n  border: none;\r\n  color: var(--clr-1);\r\n  background-color: var(--clr-6);\r\n  padding: 0.3em 0;\r\n  border-radius: 0.8rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.back-btn:hover {\r\n  opacity: 0.9;\r\n}\r\n\r\n.dish-description {\r\n  font-size: 1.3rem;\r\n  max-width: 50ch;\r\n}\r\n\r\n.contact {\r\n  font-size: 1.4rem;\r\n  flex-direction: column;\r\n  gap: 5rem;\r\n  text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
const contact = document.createElement('div')
const email = document.createElement('p')
const phone = document.createElement('p')

email.textContent = 'e-mail: fake@email.com'
phone.textContent = 'Phone: number'
contact.classList.add('contact', 'flex-container')
contact.append(email, phone)


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _tomatoes_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tomatoes.jpg */ "./src/tomatoes.jpg");


const home = (() => {
  const _createCopyright = (name, profileLink, site, siteLink) => {
    const p = document.createElement('p')
    const profile = document.createElement('a')
    const imgLink = document.createElement('a')

    profile.textContent = name
    profile.href = profileLink
    imgLink.textContent = site
    imgLink.href = siteLink

    p.append('Photo by ', profile, ' on ', imgLink)

    return p
  }

  const createHeader = () => {
    const header = document.createElement('header')
    const h1 = document.createElement('h1')
    const img = document.createElement('img')
    const p = document.createElement('p')
    const copyrightInfo = _createCopyright(
      'Alex Ghizila',
      'https://unsplash.com/@galex',
      'Unsplash',
      'https://unsplash.com/'
    )

    header.classList.add('header', 'flex-container')
    h1.textContent = 'Restaurant name'
    p.classList.add('header-description')
    p.textContent =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi itaque ipsum odio in. Quidem.'
    img.classList.add('header-tomato')
    img.src = _tomatoes_jpg__WEBPACK_IMPORTED_MODULE_0__
    img.alt = 'three cherry tomatoes'
    header.append(h1, img, copyrightInfo, p)

    return header
  }

  return { createHeader }
})()


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "contentControl": () => (/* binding */ contentControl)
/* harmony export */ });
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const contentControl = (() => {
  const changeContent = (event) => {
    const name = event.target.dataset.nav
    if (name === container.dataset.page) return

    removeDivChilds(container)
    _highlightNav(name)

    if (name === 'menu') {
      container.dataset.page = 'menu'
      container.appendChild(dishes)
    } else if (name === 'home') {
      container.dataset.page = 'home'
      container.appendChild(header)
    } else if (name === 'contact') {
      container.dataset.page = 'contact'
      container.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact)
    }
  }

  const removeDivChilds = () => {
    while (container.firstChild) {
      container.firstChild.remove()
    }
  }

  const _highlightNav = (name) => {
    navLi.forEach((li) => {
      if (li.dataset.nav === name) li.classList.toggle('highlighted')
      else li.className = ''
    })
  }

  return { changeContent, removeDivChilds }
})()

const content = document.querySelector('[data-content]')
const container = document.createElement('div')
const header = _home_js__WEBPACK_IMPORTED_MODULE_1__.home.createHeader()
const dishes = _menu_js__WEBPACK_IMPORTED_MODULE_2__.menu.createDishGrid()

container.dataset.page = 'container'
container.classList.add('container', 'flex-container')
container.appendChild(header)
content.append(_nav_js__WEBPACK_IMPORTED_MODULE_0__.nav, container)

const navLi = Array.from(document.querySelectorAll('[data-nav]'))
navLi.forEach((li) =>
  li.addEventListener('click', contentControl.changeContent)
)


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _amish_tomato_pie_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./amish-tomato-pie.jpg */ "./src/amish-tomato-pie.jpg");
/* harmony import */ var _caprese_salad_with_grilled_flank_steak_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caprese-salad-with-grilled-flank-steak.jpg */ "./src/caprese-salad-with-grilled-flank-steak.jpg");
/* harmony import */ var _garden_fresh_tomato_soup_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./garden-fresh-tomato-soup.jpg */ "./src/garden-fresh-tomato-soup.jpg");
/* harmony import */ var _grilled_shrimp_with_fresh_tomato_sauce_and_angel_hair_pasta_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grilled-shrimp-with-fresh-tomato-sauce-and-angel-hair-pasta.jpg */ "./src/grilled-shrimp-with-fresh-tomato-sauce-and-angel-hair-pasta.jpg");
/* harmony import */ var _tomato_chicken_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tomato-chicken.jpg */ "./src/tomato-chicken.jpg");
/* harmony import */ var _vera_cruz_tomatoes_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vera-cruz-tomatoes.jpg */ "./src/vera-cruz-tomatoes.jpg");








const menu = (() => {
  const _dish = {
    'Amish Tomato Pie': [
      _amish_tomato_pie_jpg__WEBPACK_IMPORTED_MODULE_1__,
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, temporibus!',
    ],
    'Caprese Salad with Grilled Flank Steak': [
      _caprese_salad_with_grilled_flank_steak_jpg__WEBPACK_IMPORTED_MODULE_2__,
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, voluptates.',
    ],
    'Garden-Fresh Tomato Soup': [
      _garden_fresh_tomato_soup_jpg__WEBPACK_IMPORTED_MODULE_3__,
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, repudiandae?',
    ],
    'Grilled Shrimp with Fresh Tomato Sauce and Angel Hair Pasta': [
      _grilled_shrimp_with_fresh_tomato_sauce_and_angel_hair_pasta_jpg__WEBPACK_IMPORTED_MODULE_4__,
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, fugit!',
    ],
    'Tomato Chicken': [
      _tomato_chicken_jpg__WEBPACK_IMPORTED_MODULE_5__,
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, suscipit.',
    ],
    'Vera Cruz Tomatoes': [
      _vera_cruz_tomatoes_jpg__WEBPACK_IMPORTED_MODULE_6__,
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, libero!',
    ],
  }

  const _dishLink = {
    'Amish Tomato Pie':
      'https://www.allrecipes.com/recipe/281218/amish-tomato-pie/',
    'Caprese Salad with Grilled Flank Steak':
      'https://www.allrecipes.com/recipe/232209/caprese-salad-with-grilled-flank-steak/',
    'Garden-Fresh Tomato Soup':
      'https://www.allrecipes.com/recipe/238176/garden-fresh-tomato-soup/',
    'Grilled Shrimp with Fresh Tomato Sauce and Angel Hair Pasta':
      'https://www.allrecipes.com/recipe/280720/grilled-shrimp-with-fresh-tomato-sauce-and-angel-hair-pasta/',
    'Tomato Chicken':
      'https://www.allrecipes.com/recipe/192533/tomato-chicken/',
    'Vera Cruz Tomatoes':
      'https://www.allrecipes.com/recipe/57300/vera-cruz-tomatoes/',
  }

  const createDishGrid = () => {
    const div = document.createElement('div')
    const h1 = document.createElement('h1')

    h1.textContent = 'Dishes'
    div.classList.add('dishes', 'grid-container')
    div.appendChild(h1)

    for (let key in _dish) {
      const dish = _createDishCard(key, _dish[key])

      dish.addEventListener('click', _openDishDescription, true)
      div.appendChild(dish)
    }

    return div
  }

  const _createDishCard = (name, arr) => {
    const card = document.createElement('div')
    const h2 = document.createElement('h2')
    const container = document.createElement('div')
    const foodImg = document.createElement('img')
    const p = document.createElement('p')

    h2.textContent = name
    foodImg.src = arr[0]
    foodImg.alt = name
    p.textContent = arr[1]
    foodImg.classList.add('dish-img')
    card.classList.add('dish-card', 'grid-container')
    card.dataset.dish = name
    container.classList.add('food-container', 'flex-container')
    container.append(foodImg, p)
    card.append(h2, container)

    return card
  }

  const _openDishDescription = (event) => {
    const p = document.createElement('p')
    const btn = document.createElement('button')
    const a = document.createElement('a')

    _index_js__WEBPACK_IMPORTED_MODULE_0__.contentControl.removeDivChilds()

    btn.addEventListener('click', _reloadMenu)
    a.href = _dishLink[event.currentTarget.dataset.dish]
    a.textContent = 'All Recipes'
    p.textContent = 'Photo from '
    p.appendChild(a)
    p.classList.add('dish-description')
    btn.classList.add('back-btn')
    btn.textContent = 'Go back'
    _index_js__WEBPACK_IMPORTED_MODULE_0__.container.append(p, btn)
  }

  const _reloadMenu = () => {
    const dishes = createDishGrid()

    _index_js__WEBPACK_IMPORTED_MODULE_0__.contentControl.removeDivChilds()
    _index_js__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(dishes)
  }

  return { createDishGrid }
})()


/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nav": () => (/* binding */ nav)
/* harmony export */ });
const nav = document.createElement('nav')
const ul = document.createElement('ul')
const home = document.createElement('li')
const menu = document.createElement('li')
const contact = document.createElement('li')

home.dataset.nav = 'home'
menu.dataset.nav = 'menu'
contact.dataset.nav = 'contact'
home.textContent = 'Home'
menu.textContent = 'Menu'
contact.textContent = 'Contact'
ul.classList.add('nav', 'flex-container')
home.classList.add('highlighted')
ul.append(home, menu, contact)
nav.appendChild(ul)


/***/ }),

/***/ "./src/Montserrat-VariableFont_wght.ttf":
/*!**********************************************!*\
  !*** ./src/Montserrat-VariableFont_wght.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3faa3eef13649db02044.ttf";

/***/ }),

/***/ "./src/amish-tomato-pie.jpg":
/*!**********************************!*\
  !*** ./src/amish-tomato-pie.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c78b17644ab87c896cbe.jpg";

/***/ }),

/***/ "./src/caprese-salad-with-grilled-flank-steak.jpg":
/*!********************************************************!*\
  !*** ./src/caprese-salad-with-grilled-flank-steak.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b95ac00613b209e962c9.jpg";

/***/ }),

/***/ "./src/garden-fresh-tomato-soup.jpg":
/*!******************************************!*\
  !*** ./src/garden-fresh-tomato-soup.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d72a1ce5247431ae59e.jpg";

/***/ }),

/***/ "./src/grilled-shrimp-with-fresh-tomato-sauce-and-angel-hair-pasta.jpg":
/*!*****************************************************************************!*\
  !*** ./src/grilled-shrimp-with-fresh-tomato-sauce-and-angel-hair-pasta.jpg ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24429e1a16de12be1796.jpg";

/***/ }),

/***/ "./src/tomato-chicken.jpg":
/*!********************************!*\
  !*** ./src/tomato-chicken.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bd029655353c937fa9a.jpg";

/***/ }),

/***/ "./src/tomatoes.jpg":
/*!**************************!*\
  !*** ./src/tomatoes.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae15dc4c95a95817cf74.jpg";

/***/ }),

/***/ "./src/vera-cruz-tomatoes.jpg":
/*!************************************!*\
  !*** ./src/vera-cruz-tomatoes.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "277e8c40a9a74c225bfa.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlKQUFxRDtBQUNqRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsZ0NBQWdDLDhFQUE4RSxLQUFLLGVBQWUsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsMkJBQTJCLDJCQUEyQixLQUFLLFdBQVcsZ0JBQWdCLGlCQUFpQix1QkFBdUIsNkJBQTZCLEtBQUsseUJBQXlCLG9CQUFvQixLQUFLLHlCQUF5QixvQkFBb0IsS0FBSyxjQUFjLGdDQUFnQywwQkFBMEIsMEJBQTBCLHVCQUF1Qix3QkFBd0IsS0FBSyxXQUFXLDBCQUEwQiw0QkFBNEIsS0FBSyxZQUFZLHVCQUF1QixLQUFLLFlBQVksdUJBQXVCLEtBQUssa0JBQWtCLDZCQUE2QixxQ0FBcUMsbUJBQW1CLEtBQUssY0FBYyx3QkFBd0IscUNBQXFDLGdCQUFnQixxQkFBcUIsS0FBSyxtQkFBbUIsMkJBQTJCLEtBQUsseUJBQXlCLDBCQUEwQix1Q0FBdUMsMkJBQTJCLHNCQUFzQixzQ0FBc0MsS0FBSyx3QkFBd0IsMEJBQTBCLHNDQUFzQyxLQUFLLG9CQUFvQiw2QkFBNkIsZUFBZSx3QkFBd0IsS0FBSyxpQkFBaUIsNkJBQTZCLDBCQUEwQixnQkFBZ0IsMEJBQTBCLDBCQUEwQixLQUFLLHdCQUF3QixtQkFBbUIsb0JBQW9CLHdCQUF3QixnQ0FBZ0MseUJBQXlCLEtBQUssNkJBQTZCLHdCQUF3Qix5QkFBeUIsc0JBQXNCLEtBQUssZUFBZSx5QkFBeUIsS0FBSyxpQkFBaUIseUJBQXlCLDZFQUE2RSxnQkFBZ0IsS0FBSyxzQkFBc0IseUJBQXlCLHdCQUF3QixpQkFBaUIsS0FBSyxvQkFBb0IsZ0JBQWdCLG1CQUFtQix5QkFBeUIscUNBQXFDLHNCQUFzQixLQUFLLDBCQUEwQix1Q0FBdUMsS0FBSyw2QkFBNkIsc0NBQXNDLEtBQUssdUJBQXVCLHNCQUFzQixLQUFLLHlCQUF5QixnQkFBZ0IsS0FBSyxtQkFBbUIsbUJBQW1CLHdCQUF3QiwwQkFBMEIsS0FBSyxtQkFBbUIsd0JBQXdCLG1CQUFtQiwwQkFBMEIscUNBQXFDLHVCQUF1Qiw0QkFBNEIsc0JBQXNCLEtBQUsseUJBQXlCLG1CQUFtQixLQUFLLDJCQUEyQix3QkFBd0Isc0JBQXNCLEtBQUssa0JBQWtCLHdCQUF3Qiw2QkFBNkIsZ0JBQWdCLHlCQUF5QixLQUFLLFdBQVcsZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxzQ0FBc0MsZ0NBQWdDLHNFQUFzRSxLQUFLLGVBQWUsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsMkJBQTJCLDJCQUEyQixLQUFLLFdBQVcsZ0JBQWdCLGlCQUFpQix1QkFBdUIsNkJBQTZCLEtBQUsseUJBQXlCLG9CQUFvQixLQUFLLHlCQUF5QixvQkFBb0IsS0FBSyxjQUFjLGdDQUFnQywwQkFBMEIsMEJBQTBCLHVCQUF1Qix3QkFBd0IsS0FBSyxXQUFXLDBCQUEwQiw0QkFBNEIsS0FBSyxZQUFZLHVCQUF1QixLQUFLLFlBQVksdUJBQXVCLEtBQUssa0JBQWtCLDZCQUE2QixxQ0FBcUMsbUJBQW1CLEtBQUssY0FBYyx3QkFBd0IscUNBQXFDLGdCQUFnQixxQkFBcUIsS0FBSyxtQkFBbUIsMkJBQTJCLEtBQUsseUJBQXlCLDBCQUEwQix1Q0FBdUMsMkJBQTJCLHNCQUFzQixzQ0FBc0MsS0FBSyx3QkFBd0IsMEJBQTBCLHNDQUFzQyxLQUFLLG9CQUFvQiw2QkFBNkIsZUFBZSx3QkFBd0IsS0FBSyxpQkFBaUIsNkJBQTZCLDBCQUEwQixnQkFBZ0IsMEJBQTBCLDBCQUEwQixLQUFLLHdCQUF3QixtQkFBbUIsb0JBQW9CLHdCQUF3QixnQ0FBZ0MseUJBQXlCLEtBQUssNkJBQTZCLHdCQUF3Qix5QkFBeUIsc0JBQXNCLEtBQUssZUFBZSx5QkFBeUIsS0FBSyxpQkFBaUIseUJBQXlCLDZFQUE2RSxnQkFBZ0IsS0FBSyxzQkFBc0IseUJBQXlCLHdCQUF3QixpQkFBaUIsS0FBSyxvQkFBb0IsZ0JBQWdCLG1CQUFtQix5QkFBeUIscUNBQXFDLHNCQUFzQixLQUFLLDBCQUEwQix1Q0FBdUMsS0FBSyw2QkFBNkIsc0NBQXNDLEtBQUssdUJBQXVCLHNCQUFzQixLQUFLLHlCQUF5QixnQkFBZ0IsS0FBSyxtQkFBbUIsbUJBQW1CLHdCQUF3QiwwQkFBMEIsS0FBSyxtQkFBbUIsd0JBQXdCLG1CQUFtQiwwQkFBMEIscUNBQXFDLHVCQUF1Qiw0QkFBNEIsc0JBQXNCLEtBQUsseUJBQXlCLG1CQUFtQixLQUFLLDJCQUEyQix3QkFBd0Isc0JBQXNCLEtBQUssa0JBQWtCLHdCQUF3Qiw2QkFBNkIsZ0JBQWdCLHlCQUF5QixLQUFLLHVCQUF1QjtBQUMxa1A7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BzQztBQUN0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwQ0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUM2QjtBQUNFO0FBQ0E7QUFDTTtBQUNsQjtBQUNwQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDRCQUE0QixnREFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBO0FBQ087QUFDUCxlQUFlLHVEQUFpQjtBQUNoQyxlQUFlLHlEQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0NBQUc7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEc0Q7QUFDRjtBQUNtQjtBQUNoQjtBQUNzQztBQUM3QztBQUNPO0FBQ3ZEO0FBQ087QUFDUDtBQUNBO0FBQ0EsTUFBTSxrREFBZTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdFQUFZO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMERBQVU7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2RkFBYTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQThCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUE4QjtBQUNsQyxJQUFJLDREQUFxQjtBQUN6QjtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BITTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWNsci0xOiAjZmZkYWNjO1xcclxcbiAgLS1jbHItMjogI2FkN2I2ODtcXHJcXG4gIC0tY2xyLTM6ICMyNDRiNDM7XFxyXFxuICAtLWNsci00OiAjODgwMDAwO1xcclxcbiAgLS1jbHItNTogI2Y3ZWZlYjtcXHJcXG4gIC0tY2xyLTY6ICM2MTNlMzA7XFxyXFxuICAtLWNsci02LXQ6ICM2MTNlMzAxZTtcXHJcXG4gIC0tY2xyLTctdDogIzI3NjE1NzUwO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLTMpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLTQpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLTEpO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLTIpO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYgPiBsaSB7XFxyXFxuICBwYWRkaW5nOiAwLjJlbSAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiA+IGxpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jbHItNSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItNy10KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxubGkuaGlnaGxpZ2h0ZWQge1xcclxcbiAgY29sb3I6IHZhcigtLWNsci02KTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogM2VtO1xcclxcbiAgbWFyZ2luOiA0cmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10b21hdG8ge1xcclxcbiAgd2lkdGg6IDM2MHB4O1xcclxcbiAgaGVpZ2h0OiAxMzBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiAxMDAlIDY1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1heC13aWR0aDogNTBjaDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaGVzIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgobWluKDQwMHB4LCAxMDAlKSwgMWZyKSk7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXNoZXMgPiBoMSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIHRvcDogLTNyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXNoLWNhcmQge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLTUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC1jYXJkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci02LXQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC1jYXJkOmhvdmVyIGgyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5kaXNoLWNhcmQgaDIge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1jb250YWluZXIge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC1pbWcge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjay1idG4ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLTEpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLTYpO1xcclxcbiAgcGFkZGluZzogMC4zZW0gMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2stYnRuOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2gtZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBtYXgtd2lkdGg6IDUwY2g7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QiwrREFBK0Q7QUFDakU7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0VBQXNFO0VBQ3RFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcclxcbiAgc3JjOiB1cmwoLi9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWNsci0xOiAjZmZkYWNjO1xcclxcbiAgLS1jbHItMjogI2FkN2I2ODtcXHJcXG4gIC0tY2xyLTM6ICMyNDRiNDM7XFxyXFxuICAtLWNsci00OiAjODgwMDAwO1xcclxcbiAgLS1jbHItNTogI2Y3ZWZlYjtcXHJcXG4gIC0tY2xyLTY6ICM2MTNlMzA7XFxyXFxuICAtLWNsci02LXQ6ICM2MTNlMzAxZTtcXHJcXG4gIC0tY2xyLTctdDogIzI3NjE1NzUwO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLTMpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLTQpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLTEpO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLTIpO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYgPiBsaSB7XFxyXFxuICBwYWRkaW5nOiAwLjJlbSAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiA+IGxpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jbHItNSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItNy10KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxubGkuaGlnaGxpZ2h0ZWQge1xcclxcbiAgY29sb3I6IHZhcigtLWNsci02KTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogM2VtO1xcclxcbiAgbWFyZ2luOiA0cmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10b21hdG8ge1xcclxcbiAgd2lkdGg6IDM2MHB4O1xcclxcbiAgaGVpZ2h0OiAxMzBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiAxMDAlIDY1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1heC13aWR0aDogNTBjaDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaGVzIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgobWluKDQwMHB4LCAxMDAlKSwgMWZyKSk7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXNoZXMgPiBoMSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIHRvcDogLTNyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXNoLWNhcmQge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLTUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC1jYXJkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci02LXQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC1jYXJkOmhvdmVyIGgyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5kaXNoLWNhcmQgaDIge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1jb250YWluZXIge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC1pbWcge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjay1idG4ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLTEpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLTYpO1xcclxcbiAgcGFkZGluZzogMC4zZW0gMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2stYnRuOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2gtZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBtYXgtd2lkdGg6IDUwY2g7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHJcbmVtYWlsLnRleHRDb250ZW50ID0gJ2UtbWFpbDogZmFrZUBlbWFpbC5jb20nXHJcbnBob25lLnRleHRDb250ZW50ID0gJ1Bob25lOiBudW1iZXInXHJcbmNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcsICdmbGV4LWNvbnRhaW5lcicpXHJcbmNvbnRhY3QuYXBwZW5kKGVtYWlsLCBwaG9uZSlcclxuIiwiaW1wb3J0IGhlYWRlckltZyBmcm9tICcuL3RvbWF0b2VzLmpwZydcclxuXHJcbmV4cG9ydCBjb25zdCBob21lID0gKCgpID0+IHtcclxuICBjb25zdCBfY3JlYXRlQ29weXJpZ2h0ID0gKG5hbWUsIHByb2ZpbGVMaW5rLCBzaXRlLCBzaXRlTGluaykgPT4ge1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgcHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgY29uc3QgaW1nTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG5cclxuICAgIHByb2ZpbGUudGV4dENvbnRlbnQgPSBuYW1lXHJcbiAgICBwcm9maWxlLmhyZWYgPSBwcm9maWxlTGlua1xyXG4gICAgaW1nTGluay50ZXh0Q29udGVudCA9IHNpdGVcclxuICAgIGltZ0xpbmsuaHJlZiA9IHNpdGVMaW5rXHJcblxyXG4gICAgcC5hcHBlbmQoJ1Bob3RvIGJ5ICcsIHByb2ZpbGUsICcgb24gJywgaW1nTGluaylcclxuXHJcbiAgICByZXR1cm4gcFxyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcclxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IGNvcHlyaWdodEluZm8gPSBfY3JlYXRlQ29weXJpZ2h0KFxyXG4gICAgICAnQWxleCBHaGl6aWxhJyxcclxuICAgICAgJ2h0dHBzOi8vdW5zcGxhc2guY29tL0BnYWxleCcsXHJcbiAgICAgICdVbnNwbGFzaCcsXHJcbiAgICAgICdodHRwczovL3Vuc3BsYXNoLmNvbS8nXHJcbiAgICApXHJcblxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicsICdmbGV4LWNvbnRhaW5lcicpXHJcbiAgICBoMS50ZXh0Q29udGVudCA9ICdSZXN0YXVyYW50IG5hbWUnXHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1kZXNjcmlwdGlvbicpXHJcbiAgICBwLnRleHRDb250ZW50ID1cclxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEEgbW9kaSBpdGFxdWUgaXBzdW0gb2RpbyBpbi4gUXVpZGVtLidcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdG9tYXRvJylcclxuICAgIGltZy5zcmMgPSBoZWFkZXJJbWdcclxuICAgIGltZy5hbHQgPSAndGhyZWUgY2hlcnJ5IHRvbWF0b2VzJ1xyXG4gICAgaGVhZGVyLmFwcGVuZChoMSwgaW1nLCBjb3B5cmlnaHRJbmZvLCBwKVxyXG5cclxuICAgIHJldHVybiBoZWFkZXJcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGNyZWF0ZUhlYWRlciB9XHJcbn0pKClcclxuIiwiaW1wb3J0IHsgbmF2IH0gZnJvbSAnLi9uYXYuanMnXHJcbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuL2hvbWUuanMnXHJcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL21lbnUuanMnXHJcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5leHBvcnQgY29uc3QgY29udGVudENvbnRyb2wgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGNoYW5nZUNvbnRlbnQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQuZGF0YXNldC5uYXZcclxuICAgIGlmIChuYW1lID09PSBjb250YWluZXIuZGF0YXNldC5wYWdlKSByZXR1cm5cclxuXHJcbiAgICByZW1vdmVEaXZDaGlsZHMoY29udGFpbmVyKVxyXG4gICAgX2hpZ2hsaWdodE5hdihuYW1lKVxyXG5cclxuICAgIGlmIChuYW1lID09PSAnbWVudScpIHtcclxuICAgICAgY29udGFpbmVyLmRhdGFzZXQucGFnZSA9ICdtZW51J1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzaGVzKVxyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnaG9tZScpIHtcclxuICAgICAgY29udGFpbmVyLmRhdGFzZXQucGFnZSA9ICdob21lJ1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnY29udGFjdCcpIHtcclxuICAgICAgY29udGFpbmVyLmRhdGFzZXQucGFnZSA9ICdjb250YWN0J1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZURpdkNoaWxkcyA9ICgpID0+IHtcclxuICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICBjb250YWluZXIuZmlyc3RDaGlsZC5yZW1vdmUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgX2hpZ2hsaWdodE5hdiA9IChuYW1lKSA9PiB7XHJcbiAgICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xyXG4gICAgICBpZiAobGkuZGF0YXNldC5uYXYgPT09IG5hbWUpIGxpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZ2hsaWdodGVkJylcclxuICAgICAgZWxzZSBsaS5jbGFzc05hbWUgPSAnJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGNoYW5nZUNvbnRlbnQsIHJlbW92ZURpdkNoaWxkcyB9XHJcbn0pKClcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jb250ZW50XScpXHJcbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCBoZWFkZXIgPSBob21lLmNyZWF0ZUhlYWRlcigpXHJcbmNvbnN0IGRpc2hlcyA9IG1lbnUuY3JlYXRlRGlzaEdyaWQoKVxyXG5cclxuY29udGFpbmVyLmRhdGFzZXQucGFnZSA9ICdjb250YWluZXInXHJcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnZmxleC1jb250YWluZXInKVxyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG5jb250ZW50LmFwcGVuZChuYXYsIGNvbnRhaW5lcilcclxuXHJcbmNvbnN0IG5hdkxpID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uYXZdJykpXHJcbm5hdkxpLmZvckVhY2goKGxpKSA9PlxyXG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udGVudENvbnRyb2wuY2hhbmdlQ29udGVudClcclxuKVxyXG4iLCJpbXBvcnQgeyBjb250ZW50Q29udHJvbCwgY29udGFpbmVyIH0gZnJvbSAnLi9pbmRleC5qcydcclxuaW1wb3J0IGFybWlzaFRvbWF0b1BpZSBmcm9tICcuL2FtaXNoLXRvbWF0by1waWUuanBnJ1xyXG5pbXBvcnQgY2FwcmVzZVNhbGFkIGZyb20gJy4vY2FwcmVzZS1zYWxhZC13aXRoLWdyaWxsZWQtZmxhbmstc3RlYWsuanBnJ1xyXG5pbXBvcnQgdG9tYXRvU291cCBmcm9tICcuL2dhcmRlbi1mcmVzaC10b21hdG8tc291cC5qcGcnXHJcbmltcG9ydCBncmlsbGVkU2hyaW1wIGZyb20gJy4vZ3JpbGxlZC1zaHJpbXAtd2l0aC1mcmVzaC10b21hdG8tc2F1Y2UtYW5kLWFuZ2VsLWhhaXItcGFzdGEuanBnJ1xyXG5pbXBvcnQgdG9tYXRvQ2hpY2tlbiBmcm9tICcuL3RvbWF0by1jaGlja2VuLmpwZydcclxuaW1wb3J0IHZlcmFDcnV6VG9tYXRvZXMgZnJvbSAnLi92ZXJhLWNydXotdG9tYXRvZXMuanBnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG1lbnUgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IF9kaXNoID0ge1xyXG4gICAgJ0FtaXNoIFRvbWF0byBQaWUnOiBbXHJcbiAgICAgIGFybWlzaFRvbWF0b1BpZSxcclxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbWlsaXF1ZSwgdGVtcG9yaWJ1cyEnLFxyXG4gICAgXSxcclxuICAgICdDYXByZXNlIFNhbGFkIHdpdGggR3JpbGxlZCBGbGFuayBTdGVhayc6IFtcclxuICAgICAgY2FwcmVzZVNhbGFkLFxyXG4gICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5vbiwgdm9sdXB0YXRlcy4nLFxyXG4gICAgXSxcclxuICAgICdHYXJkZW4tRnJlc2ggVG9tYXRvIFNvdXAnOiBbXHJcbiAgICAgIHRvbWF0b1NvdXAsXHJcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVvZCwgcmVwdWRpYW5kYWU/JyxcclxuICAgIF0sXHJcbiAgICAnR3JpbGxlZCBTaHJpbXAgd2l0aCBGcmVzaCBUb21hdG8gU2F1Y2UgYW5kIEFuZ2VsIEhhaXIgUGFzdGEnOiBbXHJcbiAgICAgIGdyaWxsZWRTaHJpbXAsXHJcbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2VkLCBmdWdpdCEnLFxyXG4gICAgXSxcclxuICAgICdUb21hdG8gQ2hpY2tlbic6IFtcclxuICAgICAgdG9tYXRvQ2hpY2tlbixcclxuICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZ1Z2lhdCwgc3VzY2lwaXQuJyxcclxuICAgIF0sXHJcbiAgICAnVmVyYSBDcnV6IFRvbWF0b2VzJzogW1xyXG4gICAgICB2ZXJhQ3J1elRvbWF0b2VzLFxyXG4gICAgICAnTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVuZGUsIGxpYmVybyEnLFxyXG4gICAgXSxcclxuICB9XHJcblxyXG4gIGNvbnN0IF9kaXNoTGluayA9IHtcclxuICAgICdBbWlzaCBUb21hdG8gUGllJzpcclxuICAgICAgJ2h0dHBzOi8vd3d3LmFsbHJlY2lwZXMuY29tL3JlY2lwZS8yODEyMTgvYW1pc2gtdG9tYXRvLXBpZS8nLFxyXG4gICAgJ0NhcHJlc2UgU2FsYWQgd2l0aCBHcmlsbGVkIEZsYW5rIFN0ZWFrJzpcclxuICAgICAgJ2h0dHBzOi8vd3d3LmFsbHJlY2lwZXMuY29tL3JlY2lwZS8yMzIyMDkvY2FwcmVzZS1zYWxhZC13aXRoLWdyaWxsZWQtZmxhbmstc3RlYWsvJyxcclxuICAgICdHYXJkZW4tRnJlc2ggVG9tYXRvIFNvdXAnOlxyXG4gICAgICAnaHR0cHM6Ly93d3cuYWxscmVjaXBlcy5jb20vcmVjaXBlLzIzODE3Ni9nYXJkZW4tZnJlc2gtdG9tYXRvLXNvdXAvJyxcclxuICAgICdHcmlsbGVkIFNocmltcCB3aXRoIEZyZXNoIFRvbWF0byBTYXVjZSBhbmQgQW5nZWwgSGFpciBQYXN0YSc6XHJcbiAgICAgICdodHRwczovL3d3dy5hbGxyZWNpcGVzLmNvbS9yZWNpcGUvMjgwNzIwL2dyaWxsZWQtc2hyaW1wLXdpdGgtZnJlc2gtdG9tYXRvLXNhdWNlLWFuZC1hbmdlbC1oYWlyLXBhc3RhLycsXHJcbiAgICAnVG9tYXRvIENoaWNrZW4nOlxyXG4gICAgICAnaHR0cHM6Ly93d3cuYWxscmVjaXBlcy5jb20vcmVjaXBlLzE5MjUzMy90b21hdG8tY2hpY2tlbi8nLFxyXG4gICAgJ1ZlcmEgQ3J1eiBUb21hdG9lcyc6XHJcbiAgICAgICdodHRwczovL3d3dy5hbGxyZWNpcGVzLmNvbS9yZWNpcGUvNTczMDAvdmVyYS1jcnV6LXRvbWF0b2VzLycsXHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVEaXNoR3JpZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuXHJcbiAgICBoMS50ZXh0Q29udGVudCA9ICdEaXNoZXMnXHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGlzaGVzJywgJ2dyaWQtY29udGFpbmVyJylcclxuICAgIGRpdi5hcHBlbmRDaGlsZChoMSlcclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gX2Rpc2gpIHtcclxuICAgICAgY29uc3QgZGlzaCA9IF9jcmVhdGVEaXNoQ2FyZChrZXksIF9kaXNoW2tleV0pXHJcblxyXG4gICAgICBkaXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX29wZW5EaXNoRGVzY3JpcHRpb24sIHRydWUpXHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkaXNoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaXZcclxuICB9XHJcblxyXG4gIGNvbnN0IF9jcmVhdGVEaXNoQ2FyZCA9IChuYW1lLCBhcnIpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgZm9vZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gICAgaDIudGV4dENvbnRlbnQgPSBuYW1lXHJcbiAgICBmb29kSW1nLnNyYyA9IGFyclswXVxyXG4gICAgZm9vZEltZy5hbHQgPSBuYW1lXHJcbiAgICBwLnRleHRDb250ZW50ID0gYXJyWzFdXHJcbiAgICBmb29kSW1nLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtaW1nJylcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZGlzaC1jYXJkJywgJ2dyaWQtY29udGFpbmVyJylcclxuICAgIGNhcmQuZGF0YXNldC5kaXNoID0gbmFtZVxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtY29udGFpbmVyJywgJ2ZsZXgtY29udGFpbmVyJylcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoZm9vZEltZywgcClcclxuICAgIGNhcmQuYXBwZW5kKGgyLCBjb250YWluZXIpXHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxuICB9XHJcblxyXG4gIGNvbnN0IF9vcGVuRGlzaERlc2NyaXB0aW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG5cclxuICAgIGNvbnRlbnRDb250cm9sLnJlbW92ZURpdkNoaWxkcygpXHJcblxyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3JlbG9hZE1lbnUpXHJcbiAgICBhLmhyZWYgPSBfZGlzaExpbmtbZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmRpc2hdXHJcbiAgICBhLnRleHRDb250ZW50ID0gJ0FsbCBSZWNpcGVzJ1xyXG4gICAgcC50ZXh0Q29udGVudCA9ICdQaG90byBmcm9tICdcclxuICAgIHAuYXBwZW5kQ2hpbGQoYSlcclxuICAgIHAuY2xhc3NMaXN0LmFkZCgnZGlzaC1kZXNjcmlwdGlvbicpXHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnYmFjay1idG4nKVxyXG4gICAgYnRuLnRleHRDb250ZW50ID0gJ0dvIGJhY2snXHJcbiAgICBjb250YWluZXIuYXBwZW5kKHAsIGJ0bilcclxuICB9XHJcblxyXG4gIGNvbnN0IF9yZWxvYWRNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzaGVzID0gY3JlYXRlRGlzaEdyaWQoKVxyXG5cclxuICAgIGNvbnRlbnRDb250cm9sLnJlbW92ZURpdkNoaWxkcygpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzaGVzKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgY3JlYXRlRGlzaEdyaWQgfVxyXG59KSgpXHJcbiIsImV4cG9ydCBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxyXG5jb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuXHJcbmhvbWUuZGF0YXNldC5uYXYgPSAnaG9tZSdcclxubWVudS5kYXRhc2V0Lm5hdiA9ICdtZW51J1xyXG5jb250YWN0LmRhdGFzZXQubmF2ID0gJ2NvbnRhY3QnXHJcbmhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSdcclxubWVudS50ZXh0Q29udGVudCA9ICdNZW51J1xyXG5jb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnXHJcbnVsLmNsYXNzTGlzdC5hZGQoJ25hdicsICdmbGV4LWNvbnRhaW5lcicpXHJcbmhvbWUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKVxyXG51bC5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdClcclxubmF2LmFwcGVuZENoaWxkKHVsKVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=