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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*Google font*/\n\n/*color*/\n\n:root {\n    --color-purple: #81007f;\n    --color-purple-opacity: rgba(129, 0, 127, 0.8);\n}\n\n/*custom css*/\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    font-family: 'Poppins', sans-serif;\n}\n\nbody {\n    overflow-y: scroll;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-attachment: fixed;\n    min-height: 100%;\n}\n\n/*nav bar*/\nnav {\n    background-color: rgba(0, 0, 0, 0.8);\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nnav img {\n    margin-top: 20px;\n}\n\nul {\n    display: flex;\n}\n\nli {\n    padding: 30px;\n    font-size: 1.5rem;\n    cursor: pointer;\n    transition: transform 0.3s;\n}\n\n.currentTab {\n    border-bottom: 2px var(--color-purple) solid;\n}\n\nli:hover {\n    transform: translateY(-10%);\n}\n\n/*main*/\nmain {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n}  \n\n.container {\n    margin-top: 40px;\n    margin-bottom: 40px;\n    width: clamp(320px, 80vw, 60rem);\n    background-color: var(--color-purple-opacity);\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 2rem;\n}\n\nmain .container h1 {\n    font-size: 3rem;\n    margin-top: 2rem;\n    margin-bottom: 3rem;\n}\n\nmain .container h2 {\n    font-size: 2rem;\n    margin: 1rem;\n}\n\nmain .container p {\n    font-size: 1.5rem;\n    margin: 1rem;\n    line-height: 2rem;\n}\n\nmain .menuItem h3 {\n    font-size: 1.2rem;\n}\n\nmain .menuItem p {\n    font-size: 1rem;\n}\n\n.menuContainer {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 3rem;\n    justify-content: center;\n}\n\n.menuItem {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color:#000;\n    color: #fff;\n    padding: 1rem;\n    cursor: pointer;\n    transition: 0.5s;\n}\n\n.menuItem:hover {\n    background-color:rgba(0, 0, 0, 0.8)\n}\n\n.menuItem img {\n    margin-bottom: 1.5rem;\n}\n\n/*footer*/\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    min-height: 10%;\n    background-color: #000;\n    padding: 1rem;\n    color: #fff;\n}", "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,cAAc;;AAGd,QAAQ;;AAER;IACI,uBAAuB;IACvB,8CAA8C;AAClD;;AAEA,aAAa;;AAEb;IACI,WAAW;IACX,YAAY;IACZ,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mDAA6B;IAC7B,4BAA4B;IAC5B,gBAAgB;AACpB;;AAEA,UAAU;AACV;IACI,oCAAoC;IACpC,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,2BAA2B;AAC/B;;AAEA,OAAO;AACP;IACI,OAAO;IACP,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,gCAAgC;IAChC,6CAA6C;IAC7C,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,aAAa;IACb,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI;AACJ;;AAEA;IACI,qBAAqB;AACzB;;AAEA,SAAS;AACT;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,eAAe;IACf,sBAAsB;IACtB,aAAa;IACb,WAAW;AACf","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*Google font*/\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;900&display=swap');\n\n/*color*/\n\n:root {\n    --color-purple: #81007f;\n    --color-purple-opacity: rgba(129, 0, 127, 0.8);\n}\n\n/*custom css*/\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    font-family: 'Poppins', sans-serif;\n}\n\nbody {\n    overflow-y: scroll;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    background: url('./hero.jpg');\n    background-attachment: fixed;\n    min-height: 100%;\n}\n\n/*nav bar*/\nnav {\n    background-color: rgba(0, 0, 0, 0.8);\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nnav img {\n    margin-top: 20px;\n}\n\nul {\n    display: flex;\n}\n\nli {\n    padding: 30px;\n    font-size: 1.5rem;\n    cursor: pointer;\n    transition: transform 0.3s;\n}\n\n.currentTab {\n    border-bottom: 2px var(--color-purple) solid;\n}\n\nli:hover {\n    transform: translateY(-10%);\n}\n\n/*main*/\nmain {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n}  \n\n.container {\n    margin-top: 40px;\n    margin-bottom: 40px;\n    width: clamp(320px, 80vw, 60rem);\n    background-color: var(--color-purple-opacity);\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 2rem;\n}\n\nmain .container h1 {\n    font-size: 3rem;\n    margin-top: 2rem;\n    margin-bottom: 3rem;\n}\n\nmain .container h2 {\n    font-size: 2rem;\n    margin: 1rem;\n}\n\nmain .container p {\n    font-size: 1.5rem;\n    margin: 1rem;\n    line-height: 2rem;\n}\n\nmain .menuItem h3 {\n    font-size: 1.2rem;\n}\n\nmain .menuItem p {\n    font-size: 1rem;\n}\n\n.menuContainer {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 3rem;\n    justify-content: center;\n}\n\n.menuItem {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color:#000;\n    color: #fff;\n    padding: 1rem;\n    cursor: pointer;\n    transition: 0.5s;\n}\n\n.menuItem:hover {\n    background-color:rgba(0, 0, 0, 0.8)\n}\n\n.menuItem img {\n    margin-bottom: 1.5rem;\n}\n\n/*footer*/\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    min-height: 10%;\n    background-color: #000;\n    padding: 1rem;\n    color: #fff;\n}"],"sourceRoot":""}]);
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
                src: 'img/logo.png',
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
            src: 'img/github.png',
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
    const sushi0 = menuFactory ('img/1.png', 'Sushi0', 'Sushi 0 description');
    const sushi1 = menuFactory ('img/2.png', 'Sushi1', 'Sushi 1 description');
    const sushi2 = menuFactory ('img/3.png', 'Sushi2', 'Sushi 2 description');
    const sushi3 = menuFactory ('img/4.png', 'Sushi3', 'Sushi 3 description');
    const sushi4 = menuFactory ('img/5.png', 'Sushi4', 'Sushi 4 description');
    const sushi5 = menuFactory ('img/6.png', 'Sushi5', 'Sushi 5 description');
    const sushi6 = menuFactory ('img/7.png', 'Sushi6', 'Sushi 6 description');
    const sushi7 = menuFactory ('img/8.png', 'Sushi7', 'Sushi 7 description');
    const sushi8 = menuFactory ('img/9.png', 'Sushi8', 'Sushi 8 description');

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

/***/ "./hero.jpg":
/*!******************!*\
  !*** ./hero.jpg ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1071adc2e2bf98be3df3.jpg";

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
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./menu.js");
//css import


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
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.displayHeader)();
const homeTab = document.getElementById('home');
homeTab.classList.add('currentTab');
const menuTab = document.getElementById('menu');
const contactTab = document.getElementById('contact');
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.displayHomeMain)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.displayFooter)();

homeTab.addEventListener('click', ()=>{
    wipe(); 
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.displayHomeMain)();
    homeTab.classList.add('currentTab');
    menuTab.classList.remove('currentTab');
    contactTab.classList.remove('currentTab');
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.displayFooter)();
});

menuTab.addEventListener('click', ()=>{
    wipe();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.displayMenuMain)();
    homeTab.classList.remove('currentTab');
    menuTab.classList.add('currentTab');
    contactTab.classList.remove('currentTab');
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.displayFooter)();
});

contactTab.addEventListener('click', ()=>{
    wipe();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.displayContactMain)();
    homeTab.classList.remove('currentTab');
    menuTab.classList.remove('currentTab');
    contactTab.classList.add('currentTab');
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.displayFooter)();
});










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEZPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDekhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDcUI7O0FBRXJCO0FBQzBDO0FBQ0U7QUFDSztBQUNMO0FBQ0Y7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQWU7QUFDZix1REFBYTs7QUFFYjtBQUNBO0FBQ0EsSUFBSSx5REFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFhO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUkseURBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBYTtBQUNqQixDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLCtEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFhO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3N0eWxlLmNzcz9kZjk1Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ob21lLmpzIiwid2VicGFjazovLy8uL21lbnUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9oZXJvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qR29vZ2xlIGZvbnQqL1xcblxcbi8qY29sb3IqL1xcblxcbjpyb290IHtcXG4gICAgLS1jb2xvci1wdXJwbGU6ICM4MTAwN2Y7XFxuICAgIC0tY29sb3ItcHVycGxlLW9wYWNpdHk6IHJnYmEoMTI5LCAwLCAxMjcsIDAuOCk7XFxufVxcblxcbi8qY3VzdG9tIGNzcyovXFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLypuYXYgYmFyKi9cXG5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXYgaW1nIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxudWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5saSB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4uY3VycmVudFRhYiB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCB2YXIoLS1jb2xvci1wdXJwbGUpIHNvbGlkO1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuXFxuLyptYWluKi9cXG5tYWluIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufSAgXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIHdpZHRoOiBjbGFtcCgzMjBweCwgODB2dywgNjByZW0pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wdXJwbGUtb3BhY2l0eSk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5tYWluIC5jb250YWluZXIgaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbm1haW4gLmNvbnRhaW5lciBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG5tYWluIC5jb250YWluZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG5tYWluIC5tZW51SXRlbSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5tYWluIC5tZW51SXRlbSBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubWVudUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLm1lbnVJdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuOClcXG59XFxuXFxuLm1lbnVJdGVtIGltZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLypmb290ZXIqL1xcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgbWluLWhlaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUEsY0FBYzs7QUFHZCxRQUFROztBQUVSO0lBQ0ksdUJBQXVCO0lBQ3ZCLDhDQUE4QztBQUNsRDs7QUFFQSxhQUFhOztBQUViO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1EQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBLFVBQVU7QUFDVjtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBLE9BQU87QUFDUDtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsNkNBQTZDO0lBQzdDLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLypHb29nbGUgZm9udCovXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qY29sb3IqL1xcblxcbjpyb290IHtcXG4gICAgLS1jb2xvci1wdXJwbGU6ICM4MTAwN2Y7XFxuICAgIC0tY29sb3ItcHVycGxlLW9wYWNpdHk6IHJnYmEoMTI5LCAwLCAxMjcsIDAuOCk7XFxufVxcblxcbi8qY3VzdG9tIGNzcyovXFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2hlcm8uanBnJyk7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qbmF2IGJhciovXFxubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2IGltZyB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbnVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxubGkge1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuXFxuLmN1cnJlbnRUYWIge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggdmFyKC0tY29sb3ItcHVycGxlKSBzb2xpZDtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxufVxcblxcbi8qbWFpbiovXFxubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn0gIFxcblxcbi5jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICB3aWR0aDogY2xhbXAoMzIwcHgsIDgwdncsIDYwcmVtKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHVycGxlLW9wYWNpdHkpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxubWFpbiAuY29udGFpbmVyIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG5tYWluIC5jb250YWluZXIgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxubWFpbiAuY29udGFpbmVyIHAge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxubWFpbiAubWVudUl0ZW0gaDMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxubWFpbiAubWVudUl0ZW0gcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLm1lbnVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogM3JlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZW51SXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5tZW51SXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjgpXFxufVxcblxcbi5tZW51SXRlbSBpbWcge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi8qZm9vdGVyKi9cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzFdIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzFdIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGFjdE1haW4gKCkge1xuICAgIGNvbnNvbGUubG9nKCdkaXNwbGF5Q29udGFjdE1haW4gaXMgaW52b2tlZCcpO1xuICAgIC8vbWFpblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29udGFjdEhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyc7XG5cbiAgICAgICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBob25lLnRleHRDb250ZW50ID0gJ1Bob25lOiAyNTAtMTExLTExMTEnO1xuXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnMTExMSBGaWZ0aCBhdmVudWUsIE5hbmFpbW8sIEJDJztcblxuICAgICAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaG91cnMudGV4dENvbnRlbnQgPSAnVHVlc2RheSAtIFN1bmRheSAxMTowMCAtIDIxOjAwJztcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGNvbnRhY3RIZWFkaW5nLCBwaG9uZSwgYWRkcmVzcywgaG91cnMpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufSIsIlxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obG9nb0ltZywge1xuICAgICAgICAgICAgICAgIGFsdDogJ3N1c2hpbWUgbG9nbycsXG4gICAgICAgICAgICAgICAgc3JjOiAnaW1nL2xvZ28ucG5nJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCwgLy8gcGl4ZWxzXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCwgLy8gcGl4ZWxzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuXG4gICAgICAgICAgICBjb25zdCBuYXZVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gICAgICAgICAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG5cbiAgICAgICAgICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICAgICAgICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICAgICAgICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAgICAgICAgICAgbmF2VWwuYXBwZW5kKGhvbWUsIG1lbnUsIGNvbnRhY3QpO1xuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKG5hdlVsKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhvbWVNYWluICgpIHtcbiAgICAvL21haW5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBoZXJvSGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZXJvSGVhZGluZzEudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBTdXNoaW1lJztcblxuICAgICAgICBjb25zdCBoZXJvSGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZXJvSGVhZGluZzIudGV4dENvbnRlbnQgPSAnSmFwYW5lc2UgUmVzdGF1cmFudCBpbiBOYW5haW1vJztcblxuICAgICAgICBjb25zdCBoZXJvUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaGVyb1BhcmEudGV4dENvbnRlbnQgPSBgXG4gICAgICAgIElmIHlvdSBhcmUgbG9va2luZyBmb3IgYXV0aGVudGljIGFuZCBkZWxpY2lvdXMgSmFwYW5lc2UgZm9vZCBpbiBOYW5haW1vLCBcbiAgICAgICAgd2UgaG9wZSB5b3UnbGwgdmlzaXQgU3VzaGltZSAtIEphcGFuZXNlIFJlc3RhdXJhbnQgTmFuYWltby4gXG4gICAgICAgIFdlIG9mZmVyIGEgbGFyZ2UgdmFyaWV0eSBvZiBkZWxpY2lvdXMgbW91dGgtd2F0ZXJpbmcgZGlzaGVzIGFuZCBcbiAgICAgICAgYXBwZXRpemVycyB3aXRoIHRoZSBoaWdoZXN0IHF1YWxpdHkgaW5ncmVkaWVudHMgdG8gbWFrZSB5b3UgZmVlbCBcbiAgICAgICAgaGVhbHRoeSBhbmQgYnJpbmcgeW91IGEgbWVtb3JhYmxlIGRpbmluZyBleHBlcmllbmNlLiAgICAgICAgXG4gICAgICAgIGA7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChoZXJvSGVhZGluZzEsIGhlcm9IZWFkaW5nMiwgaGVyb1BhcmEpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUZvb3RlcigpIHtcbiAgICAvL2Zvb3RlclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xuXG4gICAgICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSAyMDIyIGFtaXJvYmluc29ubXV0bydcblxuICAgICAgICBjb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZ2l0aHViLCB7XG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbWlyb2JpbnNvbm11dG9cIixcbiAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBnaXRodWJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihnaXRodWJJbWcsIHtcbiAgICAgICAgICAgIGFsdDogJ2dpdGh1YiBsb2dvJyxcbiAgICAgICAgICAgIHNyYzogJ2ltZy9naXRodWIucG5nJyxcbiAgICAgICAgICAgIGhlaWdodDogMzAsIC8vIHBpeGVsc1xuICAgICAgICAgICAgd2lkdGg6IDMwLCAvLyBwaXhlbHNcbiAgICAgICAgfSlcbiAgICAgICAgZ2l0aHViLmFwcGVuZENoaWxkKGdpdGh1YkltZyk7XG5cbiAgICAgICAgZm9vdGVyLmFwcGVuZChjb3B5cmlnaHQsIGdpdGh1Yik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG4gICAgIiwiXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU1lbnVNYWluKCkge1xuXG4gICAgY29uc29sZS5sb2coJ2Rpc3BsYXlNZW51TWFpbiBpcyBpbnZva2VkJyk7XG5cbiAgICAvLyBjcmVhdGUgYSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgY29uc3QgbWVudUZhY3RvcnkgPSAoaW1nU3JjLCBoZGcsIGRlc2NyKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbWdTcmMsXG4gICAgICAgICAgICBoZGcsXG4gICAgICAgICAgICBkZXNjclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9jcmVhdGUgbWVudSBpdGVtIG9iamVjdHNcbiAgICBjb25zdCBzdXNoaTAgPSBtZW51RmFjdG9yeSAoJ2ltZy8xLnBuZycsICdTdXNoaTAnLCAnU3VzaGkgMCBkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHN1c2hpMSA9IG1lbnVGYWN0b3J5ICgnaW1nLzIucG5nJywgJ1N1c2hpMScsICdTdXNoaSAxIGRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3Qgc3VzaGkyID0gbWVudUZhY3RvcnkgKCdpbWcvMy5wbmcnLCAnU3VzaGkyJywgJ1N1c2hpIDIgZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzdXNoaTMgPSBtZW51RmFjdG9yeSAoJ2ltZy80LnBuZycsICdTdXNoaTMnLCAnU3VzaGkgMyBkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHN1c2hpNCA9IG1lbnVGYWN0b3J5ICgnaW1nLzUucG5nJywgJ1N1c2hpNCcsICdTdXNoaSA0IGRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3Qgc3VzaGk1ID0gbWVudUZhY3RvcnkgKCdpbWcvNi5wbmcnLCAnU3VzaGk1JywgJ1N1c2hpIDUgZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzdXNoaTYgPSBtZW51RmFjdG9yeSAoJ2ltZy83LnBuZycsICdTdXNoaTYnLCAnU3VzaGkgNiBkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHN1c2hpNyA9IG1lbnVGYWN0b3J5ICgnaW1nLzgucG5nJywgJ1N1c2hpNycsICdTdXNoaSA3IGRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3Qgc3VzaGk4ID0gbWVudUZhY3RvcnkgKCdpbWcvOS5wbmcnLCAnU3VzaGk4JywgJ1N1c2hpIDggZGVzY3JpcHRpb24nKTtcblxuICAgIC8vY3JlYXRlIGFuIGFycmF5IHdpdGggdGhlIG1lbnUgaXRlbSBvYmplY3RzIFxuICAgIGNvbnN0IG1lbnVJdGVtQXJyID0gW3N1c2hpMCwgc3VzaGkxLCBzdXNoaTIsIHN1c2hpMywgc3VzaGk0LCBzdXNoaTUsIHN1c2hpNixcbiAgICAgICAgICAgICAgICAgICAgICBzdXNoaTcsIHN1c2hpOF07XG5cbiAgICBjb25zb2xlLmxvZyhtZW51SXRlbUFycik7XG5cbiAgICAvL2NyZWF0ZSBkaXYgbWVudUNvbnRhaW5lclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXInKTtcblxuICAgIC8vZnVuY3Rpb24gdG8gY3JlYXRlIGEgbWVudSBjYXJkXG4gICAgZnVuY3Rpb24gY3JlYXRlTWVudUNhcmQob2JqKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJyk7XG5cbiAgICAgICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBPYmplY3QuYXNzaWduKG1lbnVJbWcsIHtcbiAgICAgICAgICAgIGFsdDogb2JqLmhkZyArICcgaW1hZ2UnLFxuICAgICAgICAgICAgc3JjOiBvYmouaW1nU3JjLFxuICAgICAgICAgICAgaGVpZ2h0OiAxMjAsXG4gICAgICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtZW51SGRnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgbWVudUhkZy50ZXh0Q29udGVudCA9IG9iai5oZGc7XG4gICAgICAgIGNvbnN0IG1lbnVEZXNjciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbWVudURlc2NyLnRleHRDb250ZW50ID0gb2JqLmRlc2NyO1xuXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZChtZW51SW1nLCBtZW51SGRnLCBtZW51RGVzY3IpO1xuXG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgIH1cblxuICAgIC8vY3JlYXRlIG1lbnUgY2FyZCBmb3IgYWxsIGVsZW1lbnRzIGluIHRoZSBtZW51SXRlbUFyclxuICAgIG1lbnVJdGVtQXJyLmZvckVhY2goZWwgPT4gY3JlYXRlTWVudUNhcmQoZWwpKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcblxuICAgIGNvbnN0IG1lbnVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51SGVhZGluZy50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQobWVudUhlYWRpbmcsIG1lbnVDb250YWluZXIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5cblxuXG4vLzxkaXYgY2xhc3M9XCJtZW51Q29udGFpbmVyXCI+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwibWVudUl0ZW1cIj5cbiAgICAvLyAgICAgICAgICAgPGltZyBzcmM9XCIxZGJkNGRlYzIyMzMxNDZjMGIzZi5wbmdcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjEyMFwiIGFsdD1cInN1c2hpMVwiPlxuICAgIC8vICAgICAgICAgICA8aDM+TWVudSBuYW1lPC9oMz5cbiAgICAvLyAgICAgICAgICAgPHA+TWVudSBkZXNjcmlwdGlvbjwvcD5cbiAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgIC8vICAgICAgICAgICA8aW1nIHNyYz1cIjFkYmQ0ZGVjMjIzMzE0NmMwYjNmLnBuZ1wiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiMTIwXCIgYWx0PVwic3VzaGkxXCI+XG4gICAgLy8gICAgICAgICAgIDxoMz5NZW51IG5hbWU8L2gzPlxuICAgIC8vICAgICAgICAgICA8cD5NZW51IGRlc2NyaXB0aW9uPC9wPlxuICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgLy8gICAgICAgICAgIDxpbWcgc3JjPVwiMWRiZDRkZWMyMjMzMTQ2YzBiM2YucG5nXCIgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCIxMjBcIiBhbHQ9XCJzdXNoaTFcIj5cbiAgICAvLyAgICAgICAgICAgPGgzPk1lbnUgbmFtZTwvaDM+XG4gICAgLy8gICAgICAgICAgIDxwPk1lbnUgZGVzY3JpcHRpb248L3A+XG4gICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAvLyAgICAgICAgICAgPGltZyBzcmM9XCIxZGJkNGRlYzIyMzMxNDZjMGIzZi5wbmdcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjEyMFwiIGFsdD1cInN1c2hpMVwiPlxuICAgIC8vICAgICAgICAgICA8aDM+TWVudSBuYW1lPC9oMz5cbiAgICAvLyAgICAgICAgICAgPHA+TWVudSBkZXNjcmlwdGlvbjwvcD5cbiAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgIC8vICAgICAgICAgICA8aW1nIHNyYz1cIjFkYmQ0ZGVjMjIzMzE0NmMwYjNmLnBuZ1wiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiMTIwXCIgYWx0PVwic3VzaGkxXCI+XG4gICAgLy8gICAgICAgICAgIDxoMz5NZW51IG5hbWU8L2gzPlxuICAgIC8vICAgICAgICAgICA8cD5NZW51IGRlc2NyaXB0aW9uPC9wPlxuICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgLy8gICAgICAgICAgIDxpbWcgc3JjPVwiMWRiZDRkZWMyMjMzMTQ2YzBiM2YucG5nXCIgd2lkdGg9XCIxMjBcIiBoZWlnaHQ9XCIxMjBcIiBhbHQ9XCJzdXNoaTFcIj5cbiAgICAvLyAgICAgICAgICAgPGgzPk1lbnUgbmFtZTwvaDM+XG4gICAgLy8gICAgICAgICAgIDxwPk1lbnUgZGVzY3JpcHRpb248L3A+XG4gICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAvLyAgICAgICAgICAgPGltZyBzcmM9XCIxZGJkNGRlYzIyMzMxNDZjMGIzZi5wbmdcIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjEyMFwiIGFsdD1cInN1c2hpMVwiPlxuICAgIC8vICAgICAgICAgICA8aDM+TWVudSBuYW1lPC9oMz5cbiAgICAvLyAgICAgICAgICAgPHA+TWVudSBkZXNjcmlwdGlvbjwvcD5cbiAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgIC8vICAgICAgICAgICA8aW1nIHNyYz1cIjFkYmQ0ZGVjMjIzMzE0NmMwYjNmLnBuZ1wiIHdpZHRoPVwiMTIwXCIgaGVpZ2h0PVwiMTIwXCIgYWx0PVwic3VzaGkxXCI+XG4gICAgLy8gICAgICAgICAgIDxoMz5NZW51IG5hbWU8L2gzPlxuICAgIC8vICAgICAgICAgICA8cD5NZW51IGRlc2NyaXB0aW9uPC9wPlxuICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgICAgPC9kaXY+XG5cbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICA8L21haW4+ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL2NzcyBpbXBvcnRcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vL2pzIGltcG9ydFxuaW1wb3J0IHsgZGlzcGxheUhlYWRlciB9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5SG9tZU1haW4gfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgZGlzcGxheUNvbnRhY3RNYWlufSBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0IHsgZGlzcGxheU1lbnVNYWluIH0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IGRpc3BsYXlGb290ZXIgfSBmcm9tICcuL2hvbWUuanMnO1xuXG4vLyBmdW5jdGlvbiB0byBhbGwgY29udGVudFxuZnVuY3Rpb24gd2lwZSgpIHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKG1haW5Db250ZW50KTtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGZvb3RlckNvbnRlbnQpO1xufVxuXG4vL2ludm9rZSBmdW5jdGlvbnMgb24gcGFnZSBsb2FkXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmRpc3BsYXlIZWFkZXIoKTtcbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50VGFiJyk7XG5jb25zdCBtZW51VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbmNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuZGlzcGxheUhvbWVNYWluKCk7XG5kaXNwbGF5Rm9vdGVyKCk7XG5cbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHdpcGUoKTsgXG4gICAgZGlzcGxheUhvbWVNYWluKCk7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50VGFiJyk7XG4gICAgbWVudVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50VGFiJyk7XG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50VGFiJyk7XG4gICAgZGlzcGxheUZvb3RlcigpO1xufSk7XG5cbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHdpcGUoKTtcbiAgICBkaXNwbGF5TWVudU1haW4oKTtcbiAgICBob21lVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnRUYWInKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRUYWInKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnRUYWInKTtcbiAgICBkaXNwbGF5Rm9vdGVyKCk7XG59KTtcblxuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgd2lwZSgpO1xuICAgIGRpc3BsYXlDb250YWN0TWFpbigpO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudFRhYicpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudFRhYicpO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudFRhYicpO1xuICAgIGRpc3BsYXlGb290ZXIoKTtcbn0pO1xuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9