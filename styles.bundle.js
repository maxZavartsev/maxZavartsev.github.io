webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, "html {\n  font-family: 'Roboto', sans-serif; }\n  html > * {\n    font-size: 14px;\n    font-family: 'Roboto Light', sans-serif;\n    box-sizing: border-box;\n    transition: all 0.5s ease; }\n\nh1 {\n  font-family: 'Roboto Black', sans-serif;\n  text-transform: uppercase;\n  color: #000000;\n  font-size: 48px; }\n\nh2 {\n  font-size: 24px;\n  font-family: 'Roboto Bold', sans-serif;\n  color: #405896; }\n\nh3 {\n  font-size: 16px;\n  font-family: 'Roboto Medium', sans-serif; }\n\n.modal {\n  position: fixed;\n  width: 50%;\n  height: 100%;\n  top: 0;\n  left: -100%;\n  transition: all 0.5s ease;\n  padding: 3%;\n  display: table;\n  box-sizing: border-box; }\n  .modal.active {\n    left: 0;\n    background: #ffffff; }\n  .modal .close {\n    width: 25px;\n    height: 25px;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    font-size: 0;\n    z-index: 999; }\n    .modal .close:before, .modal .close:after {\n      content: '';\n      display: block;\n      position: absolute;\n      border: 2px solid #405896;\n      width: 100%;\n      height: 0;\n      top: 50%;\n      left: 0;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      transition: all 0.5s ease; }\n    .modal .close:after {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n    .modal .close:hover:before {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n    .modal .close:hover:after {\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n  .modal .more {\n    display: table-cell;\n    vertical-align: middle; }\n    .modal .more-title-name {\n      font-family: 'Roboto Black', sans-serif;\n      text-transform: uppercase;\n      color: #405896;\n      font-size: 24px; }\n    .modal .more-title-info, .modal .more-title-voters-count {\n      display: inline-block;\n      vertical-align: middle;\n      margin-right: 50px;\n      margin-top: 30px;\n      margin-bottom: 15px;\n      box-sizing: border-box; }\n      .modal .more-title-info span, .modal .more-title-voters-count span {\n        font-family: 'Roboto Medium', sans-serif; }\n    .modal .more-candidate {\n      position: relative; }\n      .modal .more-candidate-item {\n        display: inline-block;\n        width: 49%;\n        vertical-align: top;\n        position: relative;\n        box-sizing: border-box;\n        padding-right: 10px;\n        margin-bottom: 10px; }\n        .modal .more-candidate-item-img {\n          display: inline-block;\n          vertical-align: top;\n          text-align: center;\n          width: 120px;\n          height: 120px;\n          background-position: top center;\n          background-size: cover;\n          border: 2px solid #405896;\n          margin-right: 4%;\n          border-radius: 50%; }\n          .modal .more-candidate-item-img img {\n            width: 100%;\n            height: auto;\n            border: 2px solid #405896; }\n        .modal .more-candidate-item-name {\n          width: 64%;\n          display: inline-block;\n          vertical-align: top; }\n          .modal .more-candidate-item-name .sec-fio {\n            font-weight: bold;\n            font-family: 'Roboto Bold', sans-serif; }\n          .modal .more-candidate-item-name ul li .bold {\n            font-weight: bold;\n            font-family: 'Roboto Medium', sans-serif; }\n\n.content {\n  position: fixed;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  padding: 3%;\n  background: white;\n  background: linear-gradient(45deg, white 1%, #f0f7ff 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f0f7ff',GradientType=1 ); }\n  .content:before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: url(/assets/img/bg.png) no-repeat left bottom;\n    z-index: 0; }\n  .content .block {\n    display: inline-block;\n    vertical-align: middle;\n    width: 49%;\n    height: 100%;\n    box-sizing: border-box;\n    position: relative;\n    z-index: 1; }\n    .content .block:first-child {\n      width: 50%; }\n    .content .block:last-child {\n      background: url(/assets/img/ER_logo.png) no-repeat bottom right;\n      background-size: 130px auto; }\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.header .logo, .header .title {\n  display: inline-block;\n  margin-right: 50px; }\n\n.buttons a {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 20px 30px;\n  -webkit-transform: skewX(-10deg);\n          transform: skewX(-10deg);\n  margin-right: 15px;\n  background-color: #c6c8ce;\n  text-decoration: none;\n  color: #fff;\n  font-size: 36px; }\n  .buttons a span {\n    display: inline-block;\n    font-family: 'Roboto Medium', sans-serif;\n    -webkit-transform: skewX(10deg);\n            transform: skewX(10deg); }\n  .buttons a.active {\n    background-color: #c8361d; }\n\n.bottom-link {\n  position: absolute;\n  bottom: 0;\n  font-size: 24px;\n  color: #405896;\n  font-family: 'Roboto Medium', sans-serif; }\n\n.map_path {\n  opacity: 0.5;\n  pointer-events: all; }\n  .map_path:hover, .map_path.active {\n    opacity: 1;\n    stroke: #c8361d;\n    stroke-width: 5px; }\n\n.map {\n  position: absolute;\n  top: 100%;\n  transition: all 0.5s ease;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  overflow: hidden; }\n  .map.active {\n    top: 0;\n    opacity: 1; }\n\n.st0 {\n  fill: #CB97AE; }\n\n.st1 {\n  fill: #6AB583; }\n\n.st2 {\n  fill: #DD8160; }\n\n.st3 {\n  fill: #DAD17B; }\n\n.st4 {\n  fill: #EBB672; }\n\n.st5 {\n  fill: #5EAF72; }\n\n.st6 {\n  fill: #CFDC67; }\n\n.st7 {\n  fill: #C790BE; }\n\n.st8 {\n  fill: #EACBE0; }\n\n.st9 {\n  fill: #BCD366; }\n\n.st10 {\n  fill: #ADA7D2; }\n\n.st11 {\n  fill: #C78F93; }\n\n.st12 {\n  fill: #52AB62; }\n\n.st13 {\n  fill: #C6DEB5; }\n\n.st14 {\n  fill: #B8A2CD; }\n\n.st15 {\n  fill: #DAB5A4; }\n\n.st16 {\n  fill: #B8A4C7; }\n\n.st17 {\n  fill: #D299C2; }\n\n.st18 {\n  fill: #F0EB6F; }\n\n.st19 {\n  fill: #F0EB6F; }\n\n.st20 {\n  fill: #AC98C7; }\n\n.st21 {\n  fill: #E9CCB8; }\n\n.st22 {\n  fill: #C79F93; }\n\n.st23 {\n  fill: #DAB5A4; }\n\n.st24 {\n  fill: #53AD7A; }\n\n.st25 {\n  fill: #53B4C3; }\n\n.st26 {\n  fill: #DCA2BD; }\n\n.st27 {\n  fill: #8C9CC4; }\n\n.st28 {\n  fill: #E59C59; }\n\n.st29 {\n  fill: #73AA72; }\n\n.st30 {\n  fill: #9F96C7; }\n\n.st31 {\n  fill: #C7DAE8; }\n\n.st32 {\n  fill: #201600; }\n\n.st34 {\n  font-size: 32px; }\n\n.st35 {\n  font-size: 28px; }\n\n.krai-item {\n  width: 26%;\n  margin-right: 5%;\n  position: relative;\n  display: inline-block;\n  margin-top: 80px; }\n  .krai-item-img {\n    width: 100%; }\n    .krai-item-img img {\n      width: 100%;\n      height: auto; }\n  .krai-item-name {\n    font-size: 16px;\n    font-family: 'Roboto Bold', sans-serif;\n    text-align: center;\n    font-weight: bold;\n    margin-top: 10px; }\n\ntext {\n  pointer-events: none; }", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map