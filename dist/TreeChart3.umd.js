(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TreeChart3"] = factory(require("vue"));
	else
		root["TreeChart3"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), (__WEBPACK_EXTERNAL_MODULE__648__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 758:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(500);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(312);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `table[data-v-2bdde04f]{border-collapse:separate!important;border-spacing:0!important}td[data-v-2bdde04f]{position:relative;vertical-align:top;padding:0 0 50px 0;text-align:center}.extend_handle[data-v-2bdde04f]{position:absolute;left:50%;bottom:30px;width:10px;height:10px;padding:10px;transform:translate3d(-15px,0,0);cursor:pointer}.extend_handle[data-v-2bdde04f]:before{content:"";display:block;width:100%;height:100%;box-sizing:border-box;border:2px solid;border-color:#ccc #ccc transparent transparent;transform:rotate(135deg);transform-origin:50% 50% 0;transition:transform .3s ease}.extend_handle[data-v-2bdde04f]:hover:before{border-color:#333 #333 transparent transparent}.extend .extend_handle[data-v-2bdde04f]:before{transform:rotate(-45deg)}.extend[data-v-2bdde04f]:after{bottom:15px}.childLevel[data-v-2bdde04f]:before,.extend[data-v-2bdde04f]:after{content:"";position:absolute;left:50%;height:15px;border-left:2px solid #ccc;transform:translate3d(-1px,0,0)}.childLevel[data-v-2bdde04f]:before{bottom:100%}.childLevel[data-v-2bdde04f]:after{content:"";position:absolute;left:0;right:0;top:-15px;border-top:2px solid #ccc}.childLevel[data-v-2bdde04f]:first-child:before,.childLevel[data-v-2bdde04f]:last-child:before{display:none}.childLevel[data-v-2bdde04f]:first-child:after{left:50%;height:15px;border:2px solid;border-color:#ccc transparent transparent #ccc;border-radius:6px 0 0 0;transform:translate3d(1px,0,0)}.childLevel[data-v-2bdde04f]:last-child:after{right:50%;height:15px;border:2px solid;border-color:#ccc #ccc transparent transparent;border-radius:0 6px 0 0;transform:translate3d(-1px,0,0)}.childLevel:first-child.childLevel[data-v-2bdde04f]:last-child:after{left:auto;border-radius:0;border-color:transparent #ccc transparent transparent;transform:translate3d(1px,0,0)}.node[data-v-2bdde04f]{margin:0 1em;box-sizing:border-box;text-align:center}.node[data-v-2bdde04f],.node .person[data-v-2bdde04f]{position:relative;display:inline-block}.node .person[data-v-2bdde04f]{z-index:2;width:6em;overflow:hidden}.node .person .avat[data-v-2bdde04f]{display:flex;justify-content:center;align-items:center;width:4em;height:4em;margin:auto;overflow:hidden;background:#fff;border:1px solid #ccc;box-sizing:border-box}.node .person .avat img[data-v-2bdde04f]{width:100%;height:100%}.node .person .name[data-v-2bdde04f]{height:2em;line-height:2em;overflow:hidden;width:100%}.node.hasMate[data-v-2bdde04f]:after{content:"";position:absolute;left:2em;right:2em;top:2em;border-top:2px solid #ccc;z-index:1}.landscape[data-v-2bdde04f]{transform:translate(-100%) rotate(-90deg);transform-origin:100% 0}.landscape .node[data-v-2bdde04f]{text-align:left;height:8em;width:8em}.landscape .person[data-v-2bdde04f]{position:relative;transform:rotate(90deg);padding-left:4.5em;height:4em;top:4em;left:-1em}.landscape .person .avat[data-v-2bdde04f]{position:absolute;left:0}.landscape .person .name[data-v-2bdde04f]{height:4em;line-height:4em}.landscape .hasMate[data-v-2bdde04f]{position:relative}.landscape .hasMate .person[data-v-2bdde04f]{position:absolute}.landscape .hasMate .person[data-v-2bdde04f]:first-child{left:auto;right:-4em}.landscape .hasMate .person[data-v-2bdde04f]:last-child{left:-4em;margin-left:0}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 312:
/***/ ((module) => {

"use strict";


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

/***/ 500:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 152:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.c = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 92:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(758);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(24)/* ["default"] */ .c)
var update = add("0e68faf0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ addStylesClient)
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 648:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__648__;

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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(648);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/TreeChart.vue?vue&type=template&id=2bdde04f&scoped=true


const _withScopeId = n => (_pushScopeId("data-v-2bdde04f"),n=n(),_popScopeId(),n)
const _hoisted_1 = { key: 0 }
const _hoisted_2 = ["colspan"]
const _hoisted_3 = ["src"]
const _hoisted_4 = { key: 1 }
const _hoisted_5 = { class: "name" }
const _hoisted_6 = ["onClick"]
const _hoisted_7 = ["src"]
const _hoisted_8 = { key: 1 }
const _hoisted_9 = { class: "name" }
const _hoisted_10 = { key: 0 }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TreeChart = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("TreeChart", true)

  return ($data.treeData.name)
    ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("table", _hoisted_1, [
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("tr", null, [
          (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("td", {
            colspan: Array.isArray($data.treeData.children) ? $data.treeData.children.length * 2 : 1,
            class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)({parentLevel: Array.isArray($data.treeData.children) && $data.treeData.children.length, extend: Array.isArray($data.treeData.children) && $data.treeData.children.length && $data.treeData.extend})
          }, [
            (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
              class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)({node: true, hasMate: $data.treeData.mate})
            }, [
              (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
                class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["person", Array.isArray($data.treeData.class) ? $data.treeData.class : []]),
                onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('click-node', $data.treeData)))
              }, [
                ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDynamicComponent)($data.treeData.link_url ? 'a' : 'div'), {
                  href: $data.treeData.link_url,
                  class: "avat"
                }, {
                  default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [
                    ($data.treeData.image_url)
                      ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("img", {
                          key: 0,
                          src: $data.treeData.image_url
                        }, null, 8, _hoisted_3))
                      : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("h1", _hoisted_4, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($data.treeData.name[0].toUpperCase()), 1))
                  ]),
                  _: 1
                }, 8, ["href"])),
                (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_5, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($data.treeData.name), 1)
              ], 2),
              (Array.isArray($data.treeData.mate) && $data.treeData.mate.length)
                ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, { key: 0 }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($data.treeData.mate, (mate, mateIndex) => {
                    return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
                      class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["person", Array.isArray(mate.class) ? mate.class : []]),
                      key: $data.treeData.name+mateIndex,
                      onClick: $event => (_ctx.$emit('click-node', mate))
                    }, [
                      ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDynamicComponent)($data.treeData.link_url ? 'a' : 'div'), {
                        href: mate.link_url,
                        class: "avat"
                      }, {
                        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [
                          (mate.image_url)
                            ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("img", {
                                key: 0,
                                src: mate.image_url
                              }, null, 8, _hoisted_7))
                            : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("h1", _hoisted_8, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(mate.name[0].toUpperCase()), 1))
                        ]),
                        _: 2
                      }, 1032, ["href"])),
                      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_9, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(mate.name), 1)
                    ], 10, _hoisted_6))
                  }), 128))
                : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)
            ], 2),
            (Array.isArray($data.treeData.children) && $data.treeData.children.length)
              ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
                  key: 0,
                  class: "extend_handle",
                  onClick: _cache[1] || (_cache[1] = $event => ($options.toggleExtend($data.treeData)))
                }))
              : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)
          ], 10, _hoisted_2)
        ]),
        (Array.isArray($data.treeData.children) && $data.treeData.children.length && $data.treeData.extend)
          ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("tr", _hoisted_10, [
              ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($data.treeData.children, (children, index) => {
                return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("td", {
                  key: index,
                  colspan: "2",
                  class: "childLevel"
                }, [
                  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_TreeChart, {
                    json: children,
                    onClickNode: _cache[2] || (_cache[2] = $event => (_ctx.$emit('click-node', $event)))
                  }, null, 8, ["json"])
                ]))
              }), 128))
            ]))
          : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)
      ]))
    : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)
}
;// CONCATENATED MODULE: ./src/components/TreeChart.vue?vue&type=template&id=2bdde04f&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/TreeChart.vue?vue&type=script&lang=js

/* harmony default export */ const TreeChartvue_type_script_lang_js = ({
  name: "TreeChart",
  props: ["json"],
  data() {
    return {
      treeData: {}
    }
  },
  watch: {
    json: {
      handler: function(Props){
        let extendKey = function(jsonData){
          jsonData.extend = (jsonData.extend===void 0 ? true: !!jsonData.extend);
          if(Array.isArray(jsonData.children)){
            jsonData.children.forEach(c => {
              extendKey(c)
            })
          }
          return jsonData;
        }
        if(Props){
          this.treeData = extendKey(Props);
        }
      },
      immediate: true
    }
  },
  methods: {
    toggleExtend: function(treeData){
      treeData.extend = !treeData.extend;
      this.$forceUpdate();
    }
  }
});

;// CONCATENATED MODULE: ./src/components/TreeChart.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-52.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-52.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-52.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/TreeChart.vue?vue&type=style&index=0&id=2bdde04f&scoped=true&lang=css
var TreeChartvue_type_style_index_0_id_2bdde04f_scoped_true_lang_css = __webpack_require__(92);
;// CONCATENATED MODULE: ./src/components/TreeChart.vue?vue&type=style&index=0&id=2bdde04f&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(152);
;// CONCATENATED MODULE: ./src/components/TreeChart.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.c)(TreeChartvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-2bdde04f"]])

/* harmony default export */ const TreeChart = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (TreeChart);


})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=TreeChart3.umd.js.map