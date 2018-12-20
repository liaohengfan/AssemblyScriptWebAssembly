/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assemblyscript/moduleEntry.ts":
/*!***************************************!*\
  !*** ./assemblyscript/moduleEntry.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    function createWebAssemblyModulePromise (deps) {\n      var p = new Promise(function(resolve){\n        var compatibleModule;\n                if (typeof WebAssembly !== 'undefined') {\n                    var buffer = new ArrayBuffer(1614);\n        var uint8 = new Uint8Array(buffer);\n        uint8.set([0,97,115,109,1,0,0,0,1,36,7,96,0,0,96,2,127,127,0,96,2,127,127,1,127,96,1,124,1,124,96,2,124,127,1,124,96,1,127,1,127,96,1,124,1,124,3,9,8,0,1,2,4,6,3,5,0,4,4,1,112,0,1,5,3,1,0,0,6,16,3,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,7,57,7,6,109,101,109,111,114,121,2,0,5,116,97,98,108,101,1,0,4,115,116,101,112,0,0,4,105,110,105,116,0,1,3,97,100,100,0,2,10,70,105,98,111,110,97,99,99,105,51,0,5,3,102,105,98,0,6,9,7,1,0,65,0,11,1,7,10,137,11,8,161,2,1,8,127,35,1,65,1,107,33,6,35,0,65,1,107,33,7,3,64,2,64,32,0,35,1,79,13,0,32,0,65,1,107,32,6,32,0,27,33,4,65,0,32,0,65,1,106,32,0,32,6,70,27,33,5,65,0,33,1,3,64,2,64,32,1,35,0,79,13,0,65,0,32,1,65,1,106,32,1,32,7,70,27,34,2,32,5,35,0,108,106,45,0,0,32,5,35,0,108,32,1,106,45,0,0,32,1,65,1,107,32,7,32,1,27,34,3,32,5,35,0,108,106,45,0,0,32,0,35,0,108,32,2,106,45,0,0,32,0,35,0,108,32,3,106,45,0,0,32,4,35,0,108,32,2,106,45,0,0,32,4,35,0,108,32,3,106,45,0,0,32,4,35,0,108,32,1,106,45,0,0,106,106,106,106,106,106,106,33,2,32,0,35,0,108,32,1,106,45,0,0,4,64,32,2,65,2,72,34,3,4,127,32,3,5,32,2,65,3,74,11,4,64,35,2,32,0,35,0,108,106,32,1,106,65,0,58,0,0,11,5,32,2,65,3,70,4,64,35,2,32,0,35,0,108,106,32,1,106,65,1,58,0,0,11,11,32,1,65,1,106,33,1,12,1,11,11,32,0,65,1,106,33,0,12,1,11,11,11,17,0,32,0,36,0,32,1,36,1,35,0,35,1,108,36,2,11,64,1,3,127,3,64,2,64,32,2,32,0,78,13,0,65,0,33,3,3,64,2,64,32,3,32,1,78,13,0,32,4,32,2,32,3,108,106,33,4,32,3,65,1,106,33,3,12,1,11,11,32,2,65,1,106,33,2,12,1,11,11,32,4,11,165,1,1,1,127,32,1,65,255,7,74,4,64,32,0,68,0,0,0,0,0,0,224,127,162,33,0,32,1,65,255,7,107,34,1,65,255,7,74,4,64,32,0,68,0,0,0,0,0,0,224,127,162,33,0,32,1,65,255,7,107,34,1,65,255,7,34,2,32,1,32,2,72,27,33,1,11,5,32,1,65,130,120,72,4,64,32,0,68,0,0,0,0,0,0,96,3,162,33,0,32,1,65,201,7,106,34,1,65,130,120,72,4,64,32,0,68,0,0,0,0,0,0,96,3,162,33,0,32,1,65,201,7,106,34,1,65,130,120,34,2,32,1,32,2,74,27,33,1,11,11,11,32,0,32,1,172,66,255,7,124,66,52,134,191,162,11,193,6,3,4,127,1,126,4,124,32,0,189,34,5,66,32,136,167,33,1,32,5,167,34,2,32,1,65,255,255,255,255,7,113,34,3,114,69,4,64,68,0,0,0,0,0,0,240,63,15,11,32,3,65,128,128,192,255,7,74,34,4,4,127,32,4,5,32,3,65,128,128,192,255,7,70,34,4,4,127,32,2,5,32,4,11,11,4,64,68,0,0,0,0,0,0,0,64,32,0,160,15,11,32,2,69,4,64,32,3,65,128,128,192,255,7,70,4,64,32,0,68,0,0,0,0,0,0,0,0,32,1,65,0,78,27,15,11,32,3,65,128,128,192,255,3,70,4,64,32,1,65,0,78,4,64,68,0,0,0,0,0,0,0,64,15,11,68,0,0,0,0,0,0,224,63,15,11,32,1,65,128,128,128,128,4,70,4,64,68,0,0,0,0,0,0,16,64,15,11,32,1,65,128,128,128,255,3,70,4,64,68,205,59,127,102,158,160,246,63,15,11,11,68,0,0,0,0,0,0,0,64,33,6,2,64,32,3,65,128,128,128,143,4,74,4,124,12,1,5,68,0,0,0,0,0,0,240,63,33,7,68,0,0,0,0,0,0,0,0,11,33,6,32,0,32,0,189,66,128,128,128,128,112,131,191,34,8,161,32,7,162,32,0,32,6,162,160,34,0,32,8,32,7,162,34,8,160,34,6,189,34,5,66,32,136,167,33,1,32,5,167,33,4,2,64,2,64,32,1,65,128,128,192,132,4,78,4,64,32,1,65,128,128,192,132,4,107,32,4,114,32,0,68,254,130,43,101,71,21,151,60,160,32,6,32,8,161,100,114,13,1,5,32,1,65,255,255,255,255,7,113,65,128,152,195,132,4,78,4,64,32,1,65,128,152,195,132,124,107,32,4,114,32,0,32,6,32,8,161,101,114,13,3,11,11,32,1,65,255,255,255,255,7,113,34,4,65,20,117,65,255,7,107,33,3,65,0,33,2,32,4,65,128,128,128,255,3,74,4,64,65,255,255,63,32,1,65,128,128,192,0,32,3,65,1,106,117,106,34,2,65,255,255,255,255,7,113,65,20,117,65,255,7,107,34,3,117,65,127,115,32,2,113,172,66,32,134,191,33,7,32,2,65,255,255,63,113,65,128,128,192,0,114,65,20,32,3,107,117,33,2,32,1,65,0,72,4,64,65,0,32,2,107,33,2,11,32,8,32,7,161,33,8,11,68,0,0,0,0,0,0,240,63,68,0,0,0,0,0,0,240,63,32,0,32,8,160,189,66,128,128,128,128,112,131,191,34,7,68,0,0,0,0,67,46,230,63,162,34,9,32,0,32,7,32,8,161,161,68,239,57,250,254,66,46,230,63,162,32,7,68,57,108,168,12,97,92,32,190,162,160,34,0,160,34,6,32,6,32,6,32,6,162,34,7,68,62,85,85,85,85,85,197,63,32,7,68,147,189,190,22,108,193,102,191,32,7,68,44,222,37,175,106,86,17,63,32,7,68,241,107,210,197,65,189,187,190,32,7,68,208,164,190,114,105,55,102,62,162,160,162,160,162,160,162,160,162,161,34,7,162,32,7,68,0,0,0,0,0,0,0,64,161,163,32,0,32,6,32,9,161,161,34,8,32,6,32,8,162,160,161,32,6,161,161,34,6,189,66,32,136,167,32,2,65,20,116,106,34,1,65,20,117,65,0,76,4,124,32,6,32,2,16,3,5,32,6,189,66,255,255,255,255,15,131,32,1,172,66,32,134,132,191,11,162,15,11,68,0,0,0,0,0,0,240,127,15,11,68,0,0,0,0,0,0,0,0,15,11,68,0,0,0,0,0,0,240,127,68,0,0,0,0,0,0,0,0,32,1,65,0,74,27,11,6,0,32,0,16,4,11,28,0,32,0,65,2,72,4,64,65,1,15,11,32,0,65,2,107,16,6,32,0,65,1,107,16,6,106,11,3,0,1,11,0,38,16,115,111,117,114,99,101,77,97,112,112,105,110,103,85,82,76,20,109,111,100,117,108,101,69,110,116,114,121,46,119,97,115,109,46,109,97,112]);\n        'use strict';\n\nvar WebAssemblyModule = function WebAssemblyModule(deps) {\n    var defaultDeps = {\n        'global': {},\n        'env': {\n            'memory': new WebAssembly.Memory({\n                initial: 10,\n                limit: 100 }),\n            'table': new WebAssembly.Table({\n                initial: 0,\n                element: 'anyfunc' })\n        }\n    };\n    return new WebAssembly.Instance(new WebAssembly.Module(buffer), deps || defaultDeps);\n};\n                    compatibleModule = WebAssemblyModule;\n\n                }\n                else {\n                    \"use strict\";\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar w, // width\r\nh, // height\r\ns; // total size\r\n/** Initializes width and height. */\r\nfunction init(w_, h_) {\r\n    w = w_;\r\n    h = h_;\r\n    s = w * h;\r\n}\r\nexports.init = init;\r\nfunction fib(n) {\r\n    if (n < 2) {\r\n        return 1;\r\n    }\r\n    return fib(n - 2) + fib(n - 1);\r\n}\r\nexports.fib = fib;\r\nfunction add(x, y) {\r\n    var a = 0;\r\n    for (var i = 0; i < x; i++) {\r\n        for (var j = 0; j < y; j++) {\r\n            a += j * i;\r\n        }\r\n    }\r\n    return a;\r\n}\r\nexports.add = add;\r\nfunction Fibonacci3(n) {\r\n    var ac2 = Math.pow(2, n);\r\n    return ac2;\r\n}\r\nexports.Fibonacci3 = Fibonacci3;\r\n/** Performs one step. */\r\nfunction step() {\r\n    var hm1 = h - 1, wm1 = w - 1;\r\n    for (var y = 0; y < h; ++y) {\r\n        var ym1 = select(hm1, y - 1, y == 0), yp1 = select(0, y + 1, y == hm1);\r\n        for (var x = 0; x < w; ++x) {\r\n            var xm1 = select(wm1, x - 1, x == 0), xp1 = select(0, x + 1, x == wm1);\r\n            var n = (load(ym1 * w + xm1) + load(ym1 * w + x) + load(ym1 * w + xp1) +\r\n                load(y * w + xm1) + load(y * w + xp1) +\r\n                load(yp1 * w + xm1) + load(yp1 * w + x) + load(yp1 * w + xp1));\r\n            if (load(y * w + x)) {\r\n                if (n < 2 || n > 3)\r\n                    store(s + y * w + x, 0);\r\n            }\r\n            else if (n == 3)\r\n                store(s + y * w + x, 1);\r\n        }\r\n    }\r\n}\r\nexports.step = step;\r\n\n                    compatibleModule = function() {};          compatibleModule.prototype.exports = exports;\n                }\n        resolve(compatibleModule().exports);;\n      });\n      return p\n    }\n    module.exports = createWebAssemblyModulePromise\n    \n\n//# sourceURL=webpack:///./assemblyscript/moduleEntry.ts?");

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar asmPromise = __webpack_require__(/*! ../assemblyscript/moduleEntry.ts */ \"./assemblyscript/moduleEntry.ts\");\r\nasmPromise().then(function (asModule) {\r\n    asModule.step();\r\n    console.log(window);\r\n    console.log(asModule.add(10000, 10000));\r\n    console.log(asModule.Fibonacci3(3));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/Main.ts?");

/***/ })

/******/ });