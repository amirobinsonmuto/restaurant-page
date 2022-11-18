/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./style.css":
/*!**************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./style.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./hero.jpg */ "./hero.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*Google font*/\n\n/*color*/\n\n:root {\n    --color-purple: #81007f;\n    --color-purple-opacity: rgba(129, 0, 127, 0.8);\n}\n\n/*custom css*/\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    font-family: 'Poppins', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-attachment: fixed;\n    min-height: 100%;\n}\n\n/*nav bar*/\nnav {\n    background-color: rgba(0, 0, 0, 0.8);\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nnav img {\n    margin-top: 20px;\n}\n\nul {\n    display: flex;\n}\n\nli {\n    padding: 30px;\n    font-size: 1.5rem;\n}\n\nli:last-of-type {\n    padding-right: 0px;\n}\n\n/*main*/\nmain {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n}  \n\n.container {\n    margin-top: 40px;\n    margin-bottom: 40px;\n    width: clamp(320px, 80vw, 60rem);\n    background-color: var(--color-purple-opacity);\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 2rem;\n}\n\nmain .container h1 {\n    font-size: 3rem;\n    margin-top: 2rem;\n    margin-bottom: 3rem;\n}\n\nmain .container h2 {\n    font-size: 2rem;\n    margin: 1rem;\n}\n\nmain .container p {\n    font-size: 1.5rem;\n    margin: 1rem;\n    line-height: 2rem;\n}\n\nmain .menuItem h3 {\n    font-size: 1.2rem;\n}\n\nmain .menuItem p {\n    font-size: 1rem;\n}\n\n.menuContainer {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 3rem;\n    justify-content: center;\n}\n\n.menuItem {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color:#000;\n    color: #fff;\n    padding: 1rem;\n}\n\n.menuItem img {\n    margin-bottom: 1.5rem;\n}\n\n/*footer*/\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    min-height: 10%;\n    background-color: #000;\n    padding: 1rem;\n    color: #fff;\n}", "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,cAAc;;AAGd,QAAQ;;AAER;IACI,uBAAuB;IACvB,8CAA8C;AAClD;;AAEA,aAAa;;AAEb;IACI,WAAW;IACX,YAAY;IACZ,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mDAA6B;IAC7B,4BAA4B;IAC5B,gBAAgB;AACpB;;AAEA,UAAU;AACV;IACI,oCAAoC;IACpC,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA,OAAO;AACP;IACI,OAAO;IACP,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,gCAAgC;IAChC,6CAA6C;IAC7C,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,qBAAqB;AACzB;;AAEA,SAAS;AACT;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,eAAe;IACf,sBAAsB;IACtB,aAAa;IACb,WAAW;AACf","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*Google font*/\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;900&display=swap');\n\n/*color*/\n\n:root {\n    --color-purple: #81007f;\n    --color-purple-opacity: rgba(129, 0, 127, 0.8);\n}\n\n/*custom css*/\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    font-family: 'Poppins', sans-serif;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    background: url('./hero.jpg');\n    background-attachment: fixed;\n    min-height: 100%;\n}\n\n/*nav bar*/\nnav {\n    background-color: rgba(0, 0, 0, 0.8);\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nnav img {\n    margin-top: 20px;\n}\n\nul {\n    display: flex;\n}\n\nli {\n    padding: 30px;\n    font-size: 1.5rem;\n}\n\nli:last-of-type {\n    padding-right: 0px;\n}\n\n/*main*/\nmain {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n}  \n\n.container {\n    margin-top: 40px;\n    margin-bottom: 40px;\n    width: clamp(320px, 80vw, 60rem);\n    background-color: var(--color-purple-opacity);\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 2rem;\n}\n\nmain .container h1 {\n    font-size: 3rem;\n    margin-top: 2rem;\n    margin-bottom: 3rem;\n}\n\nmain .container h2 {\n    font-size: 2rem;\n    margin: 1rem;\n}\n\nmain .container p {\n    font-size: 1.5rem;\n    margin: 1rem;\n    line-height: 2rem;\n}\n\nmain .menuItem h3 {\n    font-size: 1.2rem;\n}\n\nmain .menuItem p {\n    font-size: 1rem;\n}\n\n.menuContainer {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 3rem;\n    justify-content: center;\n}\n\n.menuItem {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color:#000;\n    color: #fff;\n    padding: 1rem;\n}\n\n.menuItem img {\n    margin-bottom: 1.5rem;\n}\n\n/*footer*/\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    min-height: 10%;\n    background-color: #000;\n    padding: 1rem;\n    color: #fff;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
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

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./style.css */ "../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
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

/***/ "./contact.js":
/*!********************!*\
  !*** ./contact.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayContactMain": () => (/* binding */ displayContactMain)
/* harmony export */ });
function displayContactMain () {
    console.log('displayContactMain is invoked');
    //main
    const main = document.createElement('main');
    main.setAttribute('id', 'main');

        const container = document.createElement('div');
        container.classList.add('container');

        const contactHeading = document.createElement('h1');
        contactHeading.textContent = 'Contact us';

        const phone = document.createElement('p');
        phone.textContent = 'Phone: 250-111-1111';

        const address = document.createElement('p');
        address.textContent = '1111 Fifth avenue, Nanaimo, BC';

        const hours = document.createElement('p');
        hours.textContent = 'Tuesday - Sunday 11:00 - 21:00';

        container.append(contactHeading, phone, address, hours);
        main.appendChild(container);

    content.appendChild(main);
}

/***/ }),

/***/ "./home.js":
/*!*****************!*\
  !*** ./home.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayFooter": () => (/* binding */ displayFooter),
/* harmony export */   "displayHeader": () => (/* binding */ displayHeader),
/* harmony export */   "displayHomeMain": () => (/* binding */ displayHomeMain)
/* harmony export */ });


function displayHeader() {
        const nav = document.createElement('nav');

            const logoImg = document.createElement('img');
            Object.assign(logoImg, {
                alt: 'sushime logo',
                src: '512e949f69fc97773375.png',
                height: 100, // pixels
                width: 100, // pixels
            })
            nav.appendChild(logoImg);

            const navUl = document.createElement('ul');
            const home = document.createElement('li');
            home.setAttribute('id', 'home');
            const menu = document.createElement('li');
            menu.setAttribute('id', 'menu');
            const contact = document.createElement('li');
            contact.setAttribute('id', 'contact');

            home.textContent = "Home";
            menu.textContent = "Menu";
            contact.textContent = "Contact";

            navUl.append(home, menu, contact);
            nav.appendChild(navUl);

        content.appendChild(nav);
};

function displayHomeMain () {
    //main
    const main = document.createElement('main');
    main.setAttribute('id', 'main');

        const container = document.createElement('div');
        container.classList.add('container');

        const heroHeading1 = document.createElement('h1');
        heroHeading1.textContent = 'Welcome to Sushime';

        const heroHeading2 = document.createElement('h2');
        heroHeading2.textContent = 'Japanese Restaurant in Nanaimo';

        const heroPara = document.createElement('p');
        heroPara.textContent = `
        If you are looking for authentic and delicious Japanese food in Nanaimo, 
        we hope you'll visit Sushime - Japanese Restaurant Nanaimo. 
        We offer a large variety of delicious mouth-watering dishes and 
        appetizers with the highest quality ingredients to make you feel 
        healthy and bring you a memorable dining experience.        
        `;

        container.append(heroHeading1, heroHeading2, heroPara);
        main.appendChild(container);

    content.appendChild(main);
}

function displayFooter() {
    //footer
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');

        const copyright = document.createElement('p');
        copyright.textContent = 'Copyright © 2022 amirobinsonmuto'

        const github = document.createElement('a');
        Object.assign(github, {
            href: "https://github.com/amirobinsonmuto",
            target: "_blank"
        })
        const githubImg = document.createElement('img');
        Object.assign(githubImg, {
            alt: 'github logo',
            src: 'ef7111f215268c27e896.png',
            height: 30, // pixels
            width: 30, // pixels
        })
        github.appendChild(githubImg);

        footer.append(copyright, github);

    content.appendChild(footer);
}
    

/***/ }),

/***/ "./menu.js":
/*!*****************!*\
  !*** ./menu.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayMenuMain": () => (/* binding */ displayMenuMain)
/* harmony export */ });

function displayMenuMain() {

    console.log('displayMenuMain is invoked');

    // create a factory function
    const menuFactory = (imgSrc, hdg, descr) => {
        return {
            imgSrc,
            hdg,
            descr
        }
    }

    //create menu item objects
    const sushi0 = menuFactory ('1dbd4dec2233146c0b3f.png', 'Sushi0', 'Sushi 0 description');
    const sushi1 = menuFactory ('4af02a575fa5353f4722.png', 'Sushi1', 'Sushi 1 description');
    const sushi2 = menuFactory ('6a9330833932fa3591e7.png', 'Sushi2', 'Sushi 2 description');
    const sushi3 = menuFactory ('27fadbe4a042e9e8371d.png', 'Sushi3', 'Sushi 3 description');
    const sushi4 = menuFactory ('29a2b21cc50e25da5ed9.png', 'Sushi4', 'Sushi 4 description');
    const sushi5 = menuFactory ('5866e2aa3eea46c7bff8.png', 'Sushi5', 'Sushi 5 description');
    const sushi6 = menuFactory ('d2897d617d1d5ec9ac53.png', 'Sushi6', 'Sushi 6 description');
    const sushi7 = menuFactory ('f70bdc88f1c3a4c1f1ed.png', 'Sushi7', 'Sushi 7 description');
    const sushi8 = menuFactory ('ff9b18a3a8b2090dd0ed.png', 'Sushi8', 'Sushi 8 description');

    //create an array with the menu item objects 
    const menuItemArr = [sushi0, sushi1, sushi2, sushi3, sushi4, sushi5, sushi6,
                      sushi7, sushi8];

    console.log(menuItemArr);

    //create div menuContainer
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    //function to create a menu card
    function createMenuCard(obj) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');

        const menuImg = document.createElement('img');
        Object.assign(menuImg, {
            alt: obj.hdg + ' image',
            src: obj.imgSrc,
            height: 120,
            width: 120,
        })
        const menuHdg = document.createElement('h3');
        menuHdg.textContent = obj.hdg;
        const menuDescr = document.createElement('p');
        menuDescr.textContent = obj.descr;

        menuItem.append(menuImg, menuHdg, menuDescr);

        menuContainer.appendChild(menuItem);
    }

    //create menu card for all elements in the menuItemArr
    menuItemArr.forEach(el => createMenuCard(el));

    const main = document.createElement('main');
    main.setAttribute('id', 'main');

    const menuHeading = document.createElement('h1');
    menuHeading.textContent = 'Menu';

    const container = document.createElement('div');
    container.classList.add('container');

    container.append(menuHeading, menuContainer);
    main.appendChild(container);
    content.appendChild(main);
}




//<div class="menuContainer">
    //         <div class="menuItem">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //         <div class="menu-item">
    //           <img src="1dbd4dec2233146c0b3f.png" width="120" height="120" alt="sushi1">
    //           <h3>Menu name</h3>
    //           <p>Menu description</p>
    //         </div>
    //       </div>

    //     </div>
    //   </main> 

/***/ }),

/***/ "./10.png":
/*!****************!*\
  !*** ./10.png ***!
  \****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f70bdc88f1c3a4c1f1ed.png";

/***/ }),

/***/ "./2.png":
/*!***************!*\
  !*** ./2.png ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5866e2aa3eea46c7bff8.png";

/***/ }),

/***/ "./3.png":
/*!***************!*\
  !*** ./3.png ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27fadbe4a042e9e8371d.png";

/***/ }),

/***/ "./4.png":
/*!***************!*\
  !*** ./4.png ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a9330833932fa3591e7.png";

/***/ }),

/***/ "./5.png":
/*!***************!*\
  !*** ./5.png ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1dbd4dec2233146c0b3f.png";

/***/ }),

/***/ "./6.png":
/*!***************!*\
  !*** ./6.png ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29a2b21cc50e25da5ed9.png";

/***/ }),

/***/ "./7.png":
/*!***************!*\
  !*** ./7.png ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff9b18a3a8b2090dd0ed.png";

/***/ }),

/***/ "./8.png":
/*!***************!*\
  !*** ./8.png ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4af02a575fa5353f4722.png";

/***/ }),

/***/ "./9.png":
/*!***************!*\
  !*** ./9.png ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2897d617d1d5ec9ac53.png";

/***/ }),

/***/ "./github.png":
/*!********************!*\
  !*** ./github.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef7111f215268c27e896.png";

/***/ }),

/***/ "./hero.jpg":
/*!******************!*\
  !*** ./hero.jpg ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1071adc2e2bf98be3df3.jpg";

/***/ }),

/***/ "./logo.png":
/*!******************!*\
  !*** ./logo.png ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "512e949f69fc97773375.png";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _hero_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.jpg */ "./hero.jpg");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.png */ "./logo.png");
/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./github.png */ "./github.png");
/* harmony import */ var _2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./2.png */ "./2.png");
/* harmony import */ var _3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./3.png */ "./3.png");
/* harmony import */ var _4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./4.png */ "./4.png");
/* harmony import */ var _5_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./5.png */ "./5.png");
/* harmony import */ var _6_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./6.png */ "./6.png");
/* harmony import */ var _7_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./7.png */ "./7.png");
/* harmony import */ var _8_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./8.png */ "./8.png");
/* harmony import */ var _9_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./9.png */ "./9.png");
/* harmony import */ var _10_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./10.png */ "./10.png");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home.js */ "./home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact.js */ "./contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menu.js */ "./menu.js");
//css import


//images import














const myHero = new Image();
myHero.src = _hero_jpg__WEBPACK_IMPORTED_MODULE_1__;
const myLogo = new Image();
myLogo.src = _logo_png__WEBPACK_IMPORTED_MODULE_2__;
const myGitHub = new Image();
myGitHub.src = _github_png__WEBPACK_IMPORTED_MODULE_3__;
const mySushi0 = new Image();
mySushi0.src = _2_png__WEBPACK_IMPORTED_MODULE_4__;
const mySushi1 = new Image();
mySushi1.src = _2_png__WEBPACK_IMPORTED_MODULE_4__;
const mySushi2 = new Image();
mySushi2.src = _3_png__WEBPACK_IMPORTED_MODULE_5__;
const mySushi3 = new Image();
mySushi3.src = _4_png__WEBPACK_IMPORTED_MODULE_6__;
const mySushi4 = new Image();
mySushi4.src = _5_png__WEBPACK_IMPORTED_MODULE_7__;
const mySushi5 = new Image();
mySushi5.src = _6_png__WEBPACK_IMPORTED_MODULE_8__;
const mySushi6 = new Image();
mySushi6.src = _7_png__WEBPACK_IMPORTED_MODULE_9__;
const mySushi7 = new Image();
mySushi7.src = _8_png__WEBPACK_IMPORTED_MODULE_10__;
const mySushi8 = new Image();
mySushi8.src = _9_png__WEBPACK_IMPORTED_MODULE_11__;
const mySushi9 = new Image();
mySushi9.src = _10_png__WEBPACK_IMPORTED_MODULE_12__;

//js import







// function to all content
function wipe() {
    const mainContent = document.getElementById('main');
    const footerContent = document.getElementById('footer');
    content.removeChild(mainContent);
    content.removeChild(footerContent);
}

//invoke functions on page load
const content = document.getElementById('content');
(0,_home_js__WEBPACK_IMPORTED_MODULE_13__.displayHeader)();
const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');
const contactTab = document.getElementById('contact');
(0,_home_js__WEBPACK_IMPORTED_MODULE_13__.displayHomeMain)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_13__.displayFooter)();

homeTab.addEventListener('click', ()=>{
    wipe(); 
    (0,_home_js__WEBPACK_IMPORTED_MODULE_13__.displayHomeMain)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_13__.displayFooter)();
});

menuTab.addEventListener('click', ()=>{
    wipe();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_15__.displayMenuMain)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_13__.displayFooter)();
});

contactTab.addEventListener('click', ()=>{
    wipe();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_14__.displayContactMain)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_13__.displayFooter)();
});










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Rk87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FCOztBQUVyQjtBQUM4QjtBQUNBO0FBQ0k7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQzs7QUFFOUI7QUFDQSxhQUFhLHNDQUFJO0FBQ2pCO0FBQ0EsYUFBYSxzQ0FBSTtBQUNqQjtBQUNBLGVBQWUsd0NBQU07QUFDckI7QUFDQSxlQUFlLG1DQUFNO0FBQ3JCO0FBQ0EsZUFBZSxtQ0FBTTtBQUNyQjtBQUNBLGVBQWUsbUNBQU07QUFDckI7QUFDQSxlQUFlLG1DQUFNO0FBQ3JCO0FBQ0EsZUFBZSxtQ0FBTTtBQUNyQjtBQUNBLGVBQWUsbUNBQU07QUFDckI7QUFDQSxlQUFlLG1DQUFNO0FBQ3JCO0FBQ0EsZUFBZSxvQ0FBTTtBQUNyQjtBQUNBLGVBQWUsb0NBQU07QUFDckI7QUFDQSxlQUFlLHFDQUFNOztBQUVyQjtBQUMwQztBQUNFO0FBQ0s7QUFDTDtBQUNGOzs7QUFHMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsMERBQWU7QUFDZix3REFBYTs7QUFFYjtBQUNBO0FBQ0EsSUFBSSwwREFBZTtBQUNuQixJQUFJLHdEQUFhO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksMERBQWU7QUFDbkIsSUFBSSx3REFBYTtBQUNqQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLGdFQUFrQjtBQUN0QixJQUFJLHdEQUFhO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3N0eWxlLmNzcz9kZjk1Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ob21lLmpzIiwid2VicGFjazovLy8uL21lbnUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9oZXJvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qR29vZ2xlIGZvbnQqL1xcblxcbi8qY29sb3IqL1xcblxcbjpyb290IHtcXG4gICAgLS1jb2xvci1wdXJwbGU6ICM4MTAwN2Y7XFxuICAgIC0tY29sb3ItcHVycGxlLW9wYWNpdHk6IHJnYmEoMTI5LCAwLCAxMjcsIDAuOCk7XFxufVxcblxcbi8qY3VzdG9tIGNzcyovXFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLypuYXYgYmFyKi9cXG5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXYgaW1nIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxudWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5saSB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5saTpsYXN0LW9mLXR5cGUge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxufVxcblxcbi8qbWFpbiovXFxubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn0gIFxcblxcbi5jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICB3aWR0aDogY2xhbXAoMzIwcHgsIDgwdncsIDYwcmVtKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHVycGxlLW9wYWNpdHkpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxubWFpbiAuY29udGFpbmVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG5tYWluIC5jb250YWluZXIgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxubWFpbiAuY29udGFpbmVyIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxubWFpbiAubWVudUl0ZW0gaDMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxubWFpbiAubWVudUl0ZW0gcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLm1lbnVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogM3JlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZW51SXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ubWVudUl0ZW0gaW1nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4vKmZvb3RlciovXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSxjQUFjOztBQUdkLFFBQVE7O0FBRVI7SUFDSSx1QkFBdUI7SUFDdkIsOENBQThDO0FBQ2xEOztBQUVBLGFBQWE7O0FBRWI7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbURBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7O0FBRUEsVUFBVTtBQUNWO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLE9BQU87QUFDUDtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsNkNBQTZDO0lBQzdDLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qR29vZ2xlIGZvbnQqL1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDA7NDAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKmNvbG9yKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tY29sb3ItcHVycGxlOiAjODEwMDdmO1xcbiAgICAtLWNvbG9yLXB1cnBsZS1vcGFjaXR5OiByZ2JhKDEyOSwgMCwgMTI3LCAwLjgpO1xcbn1cXG5cXG4vKmN1c3RvbSBjc3MqL1xcblxcbmh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9oZXJvLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKm5hdiBiYXIqL1xcbm5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiBpbWcge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG51bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmxpIHtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmxpOmxhc3Qtb2YtdHlwZSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcXG59XFxuXFxuLyptYWluKi9cXG5tYWluIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufSAgXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIHdpZHRoOiBjbGFtcCgzMjBweCwgODB2dywgNjByZW0pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtb3BhY2l0eSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5tYWluIC5jb250YWluZXIgaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbm1haW4gLmNvbnRhaW5lciBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG5tYWluIC5jb250YWluZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG5tYWluIC5tZW51SXRlbSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5tYWluIC5tZW51SXRlbSBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubWVudUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tZW51SXRlbSBpbWcge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi8qZm9vdGVyKi9cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzFdIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzFdIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGFjdE1haW4gKCkge1xuICAgIGNvbnNvbGUubG9nKCdkaXNwbGF5Q29udGFjdE1haW4gaXMgaW52b2tlZCcpO1xuICAgIC8vbWFpblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29udGFjdEhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyc7XG5cbiAgICAgICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBob25lLnRleHRDb250ZW50ID0gJ1Bob25lOiAyNTAtMTExLTExMTEnO1xuXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnMTExMSBGaWZ0aCBhdmVudWUsIE5hbmFpbW8sIEJDJztcblxuICAgICAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaG91cnMudGV4dENvbnRlbnQgPSAnVHVlc2RheSAtIFN1bmRheSAxMTowMCAtIDIxOjAwJztcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGNvbnRhY3RIZWFkaW5nLCBwaG9uZSwgYWRkcmVzcywgaG91cnMpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufSIsIlxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obG9nb0ltZywge1xuICAgICAgICAgICAgICAgIGFsdDogJ3N1c2hpbWUgbG9nbycsXG4gICAgICAgICAgICAgICAgc3JjOiAnNTEyZTk0OWY2OWZjOTc3NzMzNzUucG5nJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCwgLy8gcGl4ZWxzXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCwgLy8gcGl4ZWxzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuXG4gICAgICAgICAgICBjb25zdCBuYXZVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gICAgICAgICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG5cbiAgICAgICAgICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICAgICAgICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICAgICAgICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAgICAgICAgICAgbmF2VWwuYXBwZW5kKGhvbWUsIG1lbnUsIGNvbnRhY3QpO1xuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKG5hdlVsKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhvbWVNYWluICgpIHtcbiAgICAvL21haW5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBoZXJvSGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZXJvSGVhZGluZzEudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBTdXNoaW1lJztcblxuICAgICAgICBjb25zdCBoZXJvSGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZXJvSGVhZGluZzIudGV4dENvbnRlbnQgPSAnSmFwYW5lc2UgUmVzdGF1cmFudCBpbiBOYW5haW1vJztcblxuICAgICAgICBjb25zdCBoZXJvUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaGVyb1BhcmEudGV4dENvbnRlbnQgPSBgXG4gICAgICAgIElmIHlvdSBhcmUgbG9va2luZyBmb3IgYXV0aGVudGljIGFuZCBkZWxpY2lvdXMgSmFwYW5lc2UgZm9vZCBpbiBOYW5haW1vLCBcbiAgICAgICAgd2UgaG9wZSB5b3UnbGwgdmlzaXQgU3VzaGltZSAtIEphcGFuZXNlIFJlc3RhdXJhbnQgTmFuYWltby4gXG4gICAgICAgIFdlIG9mZmVyIGEgbGFyZ2UgdmFyaWV0eSBvZiBkZWxpY2lvdXMgbW91dGgtd2F0ZXJpbmcgZGlzaGVzIGFuZCBcbiAgICAgICAgYXBwZXRpemVycyB3aXRoIHRoZSBoaWdoZXN0IHF1YWxpdHkgaW5ncmVkaWVudHMgdG8gbWFrZSB5b3UgZmVlbCBcbiAgICAgICAgaGVhbHRoeSBhbmQgYnJpbmcgeW91IGEgbWVtb3JhYmxlIGRpbmluZyBleHBlcmllbmNlLiAgICAgICAgXG4gICAgICAgIGA7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChoZXJvSGVhZGluZzEsIGhlcm9IZWFkaW5nMiwgaGVyb1BhcmEpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUZvb3RlcigpIHtcbiAgICAvL2Zvb3RlclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xuXG4gICAgICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSAyMDIyIGFtaXJvYmluc29ubXV0bydcblxuICAgICAgICBjb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZ2l0aHViLCB7XG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbWlyb2JpbnNvbm11dG9cIixcbiAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBnaXRodWJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihnaXRodWJJbWcsIHtcbiAgICAgICAgICAgIGFsdDogJ2dpdGh1YiBsb2dvJyxcbiAgICAgICAgICAgIHNyYzogJ2VmNzExMWYyMTUyNjhjMjdlODk2LnBuZycsXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLCAvLyBwaXhlbHNcbiAgICAgICAgICAgIHdpZHRoOiAzMCwgLy8gcGl4ZWxzXG4gICAgICAgIH0pXG4gICAgICAgIGdpdGh1Yi5hcHBlbmRDaGlsZChnaXRodWJJbWcpO1xuXG4gICAgICAgIGZvb3Rlci5hcHBlbmQoY29weXJpZ2h0LCBnaXRodWIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuICAgICIsIlxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZW51TWFpbigpIHtcblxuICAgIGNvbnNvbGUubG9nKCdkaXNwbGF5TWVudU1haW4gaXMgaW52b2tlZCcpO1xuXG4gICAgLy8gY3JlYXRlIGEgZmFjdG9yeSBmdW5jdGlvblxuICAgIGNvbnN0IG1lbnVGYWN0b3J5ID0gKGltZ1NyYywgaGRnLCBkZXNjcikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW1nU3JjLFxuICAgICAgICAgICAgaGRnLFxuICAgICAgICAgICAgZGVzY3JcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vY3JlYXRlIG1lbnUgaXRlbSBvYmplY3RzXG4gICAgY29uc3Qgc3VzaGkwID0gbWVudUZhY3RvcnkgKCcxZGJkNGRlYzIyMzMxNDZjMGIzZi5wbmcnLCAnU3VzaGkwJywgJ1N1c2hpIDAgZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzdXNoaTEgPSBtZW51RmFjdG9yeSAoJzRhZjAyYTU3NWZhNTM1M2Y0NzIyLnBuZycsICdTdXNoaTEnLCAnU3VzaGkgMSBkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHN1c2hpMiA9IG1lbnVGYWN0b3J5ICgnNmE5MzMwODMzOTMyZmEzNTkxZTcucG5nJywgJ1N1c2hpMicsICdTdXNoaSAyIGRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3Qgc3VzaGkzID0gbWVudUZhY3RvcnkgKCcyN2ZhZGJlNGEwNDJlOWU4MzcxZC5wbmcnLCAnU3VzaGkzJywgJ1N1c2hpIDMgZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzdXNoaTQgPSBtZW51RmFjdG9yeSAoJzI5YTJiMjFjYzUwZTI1ZGE1ZWQ5LnBuZycsICdTdXNoaTQnLCAnU3VzaGkgNCBkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHN1c2hpNSA9IG1lbnVGYWN0b3J5ICgnNTg2NmUyYWEzZWVhNDZjN2JmZjgucG5nJywgJ1N1c2hpNScsICdTdXNoaSA1IGRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3Qgc3VzaGk2ID0gbWVudUZhY3RvcnkgKCdkMjg5N2Q2MTdkMWQ1ZWM5YWM1My5wbmcnLCAnU3VzaGk2JywgJ1N1c2hpIDYgZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzdXNoaTcgPSBtZW51RmFjdG9yeSAoJ2Y3MGJkYzg4ZjFjM2E0YzFmMWVkLnBuZycsICdTdXNoaTcnLCAnU3VzaGkgNyBkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHN1c2hpOCA9IG1lbnVGYWN0b3J5ICgnZmY5YjE4YTNhOGIyMDkwZGQwZWQucG5nJywgJ1N1c2hpOCcsICdTdXNoaSA4IGRlc2NyaXB0aW9uJyk7XG5cbiAgICAvL2NyZWF0ZSBhbiBhcnJheSB3aXRoIHRoZSBtZW51IGl0ZW0gb2JqZWN0cyBcbiAgICBjb25zdCBtZW51SXRlbUFyciA9IFtzdXNoaTAsIHN1c2hpMSwgc3VzaGkyLCBzdXNoaTMsIHN1c2hpNCwgc3VzaGk1LCBzdXNoaTYsXG4gICAgICAgICAgICAgICAgICAgICAgc3VzaGk3LCBzdXNoaThdO1xuXG4gICAgY29uc29sZS5sb2cobWVudUl0ZW1BcnIpO1xuXG4gICAgLy9jcmVhdGUgZGl2IG1lbnVDb250YWluZXJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51Q29udGFpbmVyJyk7XG5cbiAgICAvL2Z1bmN0aW9uIHRvIGNyZWF0ZSBhIG1lbnUgY2FyZFxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXJkKG9iaikge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZW51SW1nLCB7XG4gICAgICAgICAgICBhbHQ6IG9iai5oZGcgKyAnIGltYWdlJyxcbiAgICAgICAgICAgIHNyYzogb2JqLmltZ1NyYyxcbiAgICAgICAgICAgIGhlaWdodDogMTIwLFxuICAgICAgICAgICAgd2lkdGg6IDEyMCxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbWVudUhkZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG1lbnVIZGcudGV4dENvbnRlbnQgPSBvYmouaGRnO1xuICAgICAgICBjb25zdCBtZW51RGVzY3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG1lbnVEZXNjci50ZXh0Q29udGVudCA9IG9iai5kZXNjcjtcblxuICAgICAgICBtZW51SXRlbS5hcHBlbmQobWVudUltZywgbWVudUhkZywgbWVudURlc2NyKTtcblxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICB9XG5cbiAgICAvL2NyZWF0ZSBtZW51IGNhcmQgZm9yIGFsbCBlbGVtZW50cyBpbiB0aGUgbWVudUl0ZW1BcnJcbiAgICBtZW51SXRlbUFyci5mb3JFYWNoKGVsID0+IGNyZWF0ZU1lbnVDYXJkKGVsKSk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICBjb25zdCBtZW51SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbWVudUhlYWRpbmcudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKG1lbnVIZWFkaW5nLCBtZW51Q29udGFpbmVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuXG5cblxuLy88ZGl2IGNsYXNzPVwibWVudUNvbnRhaW5lclwiPlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVJdGVtXCI+XG4gICAgLy8gICAgICAgICAgIDxpbWcgc3JjPVwiMWRiZDRkZWMyMjMzMTQ2YzBiM2YucG5nXCIgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCIxMjBcIiBhbHQ9XCJzdXNoaTFcIj5cbiAgICAvLyAgICAgICAgICAgPGgzPk1lbnUgbmFtZTwvaDM+XG4gICAgLy8gICAgICAgICAgIDxwPk1lbnUgZGVzY3JpcHRpb248L3A+XG4gICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAvLyAgICAgICAgICAgPGltZyBzcmM9XCIxZGJkNGRlYzIyMzMxNDZjMGIzZi5wbmdcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjEyMFwiIGFsdD1cInN1c2hpMVwiPlxuICAgIC8vICAgICAgICAgICA8aDM+TWVudSBuYW1lPC9oMz5cbiAgICAvLyAgICAgICAgICAgPHA+TWVudSBkZXNjcmlwdGlvbjwvcD5cbiAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgIC8vICAgICAgICAgICA8aW1nIHNyYz1cIjFkYmQ0ZGVjMjIzMzE0NmMwYjNmLnBuZ1wiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiMTIwXCIgYWx0PVwic3VzaGkxXCI+XG4gICAgLy8gICAgICAgICAgIDxoMz5NZW51IG5hbWU8L2gzPlxuICAgIC8vICAgICAgICAgICA8cD5NZW51IGRlc2NyaXB0aW9uPC9wPlxuICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgLy8gICAgICAgICAgIDxpbWcgc3JjPVwiMWRiZDRkZWMyMjMzMTQ2YzBiM2YucG5nXCIgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCIxMjBcIiBhbHQ9XCJzdXNoaTFcIj5cbiAgICAvLyAgICAgICAgICAgPGgzPk1lbnUgbmFtZTwvaDM+XG4gICAgLy8gICAgICAgICAgIDxwPk1lbnUgZGVzY3JpcHRpb248L3A+XG4gICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAvLyAgICAgICAgICAgPGltZyBzcmM9XCIxZGJkNGRlYzIyMzMxNDZjMGIzZi5wbmdcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjEyMFwiIGFsdD1cInN1c2hpMVwiPlxuICAgIC8vICAgICAgICAgICA8aDM+TWVudSBuYW1lPC9oMz5cbiAgICAvLyAgICAgICAgICAgPHA+TWVudSBkZXNjcmlwdGlvbjwvcD5cbiAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgIC8vICAgICAgICAgICA8aW1nIHNyYz1cIjFkYmQ0ZGVjMjIzMzE0NmMwYjNmLnBuZ1wiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiMTIwXCIgYWx0PVwic3VzaGkxXCI+XG4gICAgLy8gICAgICAgICAgIDxoMz5NZW51IG5hbWU8L2gzPlxuICAgIC8vICAgICAgICAgICA8cD5NZW51IGRlc2NyaXB0aW9uPC9wPlxuICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgLy8gICAgICAgICAgIDxpbWcgc3JjPVwiMWRiZDRkZWMyMjMzMTQ2YzBiM2YucG5nXCIgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCIxMjBcIiBhbHQ9XCJzdXNoaTFcIj5cbiAgICAvLyAgICAgICAgICAgPGgzPk1lbnUgbmFtZTwvaDM+XG4gICAgLy8gICAgICAgICAgIDxwPk1lbnUgZGVzY3JpcHRpb248L3A+XG4gICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAvLyAgICAgICAgICAgPGltZyBzcmM9XCIxZGJkNGRlYzIyMzMxNDZjMGIzZi5wbmdcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjEyMFwiIGFsdD1cInN1c2hpMVwiPlxuICAgIC8vICAgICAgICAgICA8aDM+TWVudSBuYW1lPC9oMz5cbiAgICAvLyAgICAgICAgICAgPHA+TWVudSBkZXNjcmlwdGlvbjwvcD5cbiAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICAgIDwvZGl2PlxuXG4gICAgLy8gICAgIDwvZGl2PlxuICAgIC8vICAgPC9tYWluPiAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9jc3MgaW1wb3J0XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy9pbWFnZXMgaW1wb3J0XG5pbXBvcnQgSGVybyBmcm9tICcuL2hlcm8uanBnJztcbmltcG9ydCBMb2dvIGZyb20gJy4vbG9nby5wbmcnO1xuaW1wb3J0IEdpdEh1YiBmcm9tICcuL2dpdGh1Yi5wbmcnO1xuaW1wb3J0IFN1c2hpMCBmcm9tICcuLzIucG5nJztcbmltcG9ydCBTdXNoaTEgZnJvbSAnLi8yLnBuZyc7XG5pbXBvcnQgU3VzaGkyIGZyb20gJy4vMy5wbmcnO1xuaW1wb3J0IFN1c2hpMyBmcm9tICcuLzQucG5nJztcbmltcG9ydCBTdXNoaTQgZnJvbSAnLi81LnBuZyc7XG5pbXBvcnQgU3VzaGk1IGZyb20gJy4vNi5wbmcnO1xuaW1wb3J0IFN1c2hpNiBmcm9tICcuLzcucG5nJztcbmltcG9ydCBTdXNoaTcgZnJvbSAnLi84LnBuZyc7XG5pbXBvcnQgU3VzaGk4IGZyb20gJy4vOS5wbmcnO1xuaW1wb3J0IFN1c2hpOSBmcm9tICcuLzEwLnBuZyc7XG5cbmNvbnN0IG15SGVybyA9IG5ldyBJbWFnZSgpO1xubXlIZXJvLnNyYyA9IEhlcm87XG5jb25zdCBteUxvZ28gPSBuZXcgSW1hZ2UoKTtcbm15TG9nby5zcmMgPSBMb2dvO1xuY29uc3QgbXlHaXRIdWIgPSBuZXcgSW1hZ2UoKTtcbm15R2l0SHViLnNyYyA9IEdpdEh1YjtcbmNvbnN0IG15U3VzaGkwID0gbmV3IEltYWdlKCk7XG5teVN1c2hpMC5zcmMgPSBTdXNoaTA7XG5jb25zdCBteVN1c2hpMSA9IG5ldyBJbWFnZSgpO1xubXlTdXNoaTEuc3JjID0gU3VzaGkxO1xuY29uc3QgbXlTdXNoaTIgPSBuZXcgSW1hZ2UoKTtcbm15U3VzaGkyLnNyYyA9IFN1c2hpMjtcbmNvbnN0IG15U3VzaGkzID0gbmV3IEltYWdlKCk7XG5teVN1c2hpMy5zcmMgPSBTdXNoaTM7XG5jb25zdCBteVN1c2hpNCA9IG5ldyBJbWFnZSgpO1xubXlTdXNoaTQuc3JjID0gU3VzaGk0O1xuY29uc3QgbXlTdXNoaTUgPSBuZXcgSW1hZ2UoKTtcbm15U3VzaGk1LnNyYyA9IFN1c2hpNTtcbmNvbnN0IG15U3VzaGk2ID0gbmV3IEltYWdlKCk7XG5teVN1c2hpNi5zcmMgPSBTdXNoaTY7XG5jb25zdCBteVN1c2hpNyA9IG5ldyBJbWFnZSgpO1xubXlTdXNoaTcuc3JjID0gU3VzaGk3O1xuY29uc3QgbXlTdXNoaTggPSBuZXcgSW1hZ2UoKTtcbm15U3VzaGk4LnNyYyA9IFN1c2hpODtcbmNvbnN0IG15U3VzaGk5ID0gbmV3IEltYWdlKCk7XG5teVN1c2hpOS5zcmMgPSBTdXNoaTk7XG5cbi8vanMgaW1wb3J0XG5pbXBvcnQgeyBkaXNwbGF5SGVhZGVyIH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7IGRpc3BsYXlIb21lTWFpbiB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5Q29udGFjdE1haW59IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5TWVudU1haW4gfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgZGlzcGxheUZvb3RlciB9IGZyb20gJy4vaG9tZS5qcyc7XG5cblxuLy8gZnVuY3Rpb24gdG8gYWxsIGNvbnRlbnRcbmZ1bmN0aW9uIHdpcGUoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChtYWluQ29udGVudCk7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChmb290ZXJDb250ZW50KTtcbn1cblxuLy9pbnZva2UgZnVuY3Rpb25zIG9uIHBhZ2UgbG9hZFxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5kaXNwbGF5SGVhZGVyKCk7XG5jb25zdCBob21lVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG5kaXNwbGF5SG9tZU1haW4oKTtcbmRpc3BsYXlGb290ZXIoKTtcblxuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgd2lwZSgpOyBcbiAgICBkaXNwbGF5SG9tZU1haW4oKTtcbiAgICBkaXNwbGF5Rm9vdGVyKCk7XG59KTtcblxubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgd2lwZSgpO1xuICAgIGRpc3BsYXlNZW51TWFpbigpO1xuICAgIGRpc3BsYXlGb290ZXIoKTtcbn0pO1xuXG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICB3aXBlKCk7XG4gICAgZGlzcGxheUNvbnRhY3RNYWluKCk7XG4gICAgZGlzcGxheUZvb3RlcigpO1xufSk7XG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=