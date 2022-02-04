// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"emU3S":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"aeH4U"}],"4Xw3N":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "0a6b8deb6a687535";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7E3uy":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$b03f = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$b03f.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _handleRequests = require("../../logic/handleRequests");
var _handleRequestsDefault = parcelHelpers.interopDefault(_handleRequests);
var _formValidation = require("../../logic/formValidation");
// toaster
var _reactToastify = require("react-toastify");
var _reactToastifyCss = require("react-toastify/dist/ReactToastify.css");
var _companyIllustration = require("../reusables/CompanyIllustration");
var _companyIllustrationDefault = parcelHelpers.interopDefault(_companyIllustration);
var _s = $RefreshSig$();
// end toaster
function CompanyAdd({ setIsLoaded , isAuth  }) {
    _s();
    const [isFetching, setIsFetching] = _react.useState(false);
    _react.useEffect(()=>{
        const message = sessionStorage.getItem("cogipToast");
        if (!message) return;
        const messageArray = message.split(",");
        _reactToastify.toast[messageArray[0]](messageArray[1], {
            position: _reactToastify.toast.POSITION.BOTTOM_RIGHT
        });
        sessionStorage.removeItem("cogipToast");
    }, [
        isFetching
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsFetching(true);
        const formData = {
            country: e.target.country.value,
            name: e.target.name.value,
            status: e.target.status.value,
            street: e.target.street.value,
            streetnumber: e.target.streetnumber.value,
            town: e.target.town.value,
            vat: e.target.vat.value,
            zip: e.target.zip.value,
            contacts: []
        };
        let check = _formValidation.companyVerify(formData);
        if (check.ok) {
            const { status , message , dataPackage  } = await _handleRequestsDefault.default("POST", "https://csharpproject.somee.com/api/Company", isAuth.jwt, formData);
            if (status === 200) sessionStorage.setItem("cogipToast", "success,Success !");
            else sessionStorage.setItem("cogipToast", `error,${message}`);
            setTimeout(()=>{
                setIsLoaded(false);
                setIsFetching(false);
            }, 1000);
        } else {
            setIsFetching(false);
            const issues = Object.keys(check);
            setTimeout(()=>{
                for (let issue of issues)if (issue !== "ok") _reactToastify.toast.error(check[issue], {
                    position: _reactToastify.toast.POSITION.BOTTOM_RIGHT
                });
            }, 250);
        }
    };
    return(/*#__PURE__*/ _jsxRuntime.jsxs("main", {
        __source: {
            fileName: "src/components/companies/CompanyAdd.jsx",
            lineNumber: 66,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                className: "companyAdd card",
                __source: {
                    fileName: "src/components/companies/CompanyAdd.jsx",
                    lineNumber: 67,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ _jsxRuntime.jsx("h2", {
                        __source: {
                            fileName: "src/components/companies/CompanyAdd.jsx",
                            lineNumber: 68,
                            columnNumber: 9
                        },
                        __self: this,
                        children: "Fill up the form"
                    }),
                    /*#__PURE__*/ _jsxRuntime.jsxs("form", {
                        className: "companyForm",
                        onSubmit: handleSubmit,
                        __source: {
                            fileName: "src/components/companies/CompanyAdd.jsx",
                            lineNumber: 69,
                            columnNumber: 9
                        },
                        __self: this,
                        children: [
                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                className: "formContent",
                                __source: {
                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                    lineNumber: 70,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: [
                                    /*#__PURE__*/ _jsxRuntime.jsxs("fieldset", {
                                        __source: {
                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                            lineNumber: 71,
                                            columnNumber: 13
                                        },
                                        __self: this,
                                        children: [
                                            /*#__PURE__*/ _jsxRuntime.jsx("legend", {
                                                __source: {
                                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                                    lineNumber: 72,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: "Company details"
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                                    lineNumber: 73,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "name",
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 74,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Name : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                        name: "name",
                                                        type: "text",
                                                        placeholder: "Ex : BeCode",
                                                        required: true,
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 75,
                                                            columnNumber: 17
                                                        },
                                                        __self: this
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                                    lineNumber: 82,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "vat",
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 83,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "VAT : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                        name: "vat",
                                                        type: "text",
                                                        placeholder: "Ex : 1235431658",
                                                        required: true,
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 84,
                                                            columnNumber: 17
                                                        },
                                                        __self: this
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                                    lineNumber: 91,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "status",
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 92,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Status : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsxs("select", {
                                                        name: "status",
                                                        required: true,
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 93,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: [
                                                            /*#__PURE__*/ _jsxRuntime.jsx("option", {
                                                                value: "",
                                                                __source: {
                                                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                                                    lineNumber: 94,
                                                                    columnNumber: 19
                                                                },
                                                                __self: this,
                                                                children: "Select a status"
                                                            }),
                                                            /*#__PURE__*/ _jsxRuntime.jsx("option", {
                                                                value: "Supplier",
                                                                __source: {
                                                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                                                    lineNumber: 95,
                                                                    columnNumber: 19
                                                                },
                                                                __self: this,
                                                                children: "Supplier"
                                                            }),
                                                            /*#__PURE__*/ _jsxRuntime.jsx("option", {
                                                                value: "Customer",
                                                                __source: {
                                                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                                                    lineNumber: 96,
                                                                    columnNumber: 19
                                                                },
                                                                __self: this,
                                                                children: "Customer"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxRuntime.jsxs("fieldset", {
                                        __source: {
                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                            lineNumber: 100,
                                            columnNumber: 13
                                        },
                                        __self: this,
                                        children: [
                                            /*#__PURE__*/ _jsxRuntime.jsx("legend", {
                                                __source: {
                                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: "Address"
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "streetnumber",
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 103,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Streetnumber : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                        type: "text",
                                                        name: "streetnumber",
                                                        id: "streetnumber",
                                                        required: true,
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 104,
                                                            columnNumber: 17
                                                        },
                                                        __self: this
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                                    lineNumber: 111,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "street",
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 112,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Street : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                        type: "text",
                                                        name: "street",
                                                        id: "street",
                                                        required: true,
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 113,
                                                            columnNumber: 17
                                                        },
                                                        __self: this
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "town",
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 116,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Town : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                        type: "text",
                                                        name: "town",
                                                        id: "town",
                                                        required: true,
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 117,
                                                            columnNumber: 17
                                                        },
                                                        __self: this
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                                    lineNumber: 119,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "country",
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 120,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Country : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                        type: "text",
                                                        name: "country",
                                                        id: "country",
                                                        required: true,
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 121,
                                                            columnNumber: 17
                                                        },
                                                        __self: this
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                                    lineNumber: 123,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "zip",
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 124,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Zip : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                        type: "text",
                                                        name: "zip",
                                                        id: "zip",
                                                        __source: {
                                                            fileName: "src/components/companies/CompanyAdd.jsx",
                                                            lineNumber: 125,
                                                            columnNumber: 17
                                                        },
                                                        __self: this
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxRuntime.jsx("button", {
                                __source: {
                                    fileName: "src/components/companies/CompanyAdd.jsx",
                                    lineNumber: 129,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: "Submit"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxRuntime.jsx("div", {
                        className: "formIllu",
                        __source: {
                            fileName: "src/components/companies/CompanyAdd.jsx",
                            lineNumber: 131,
                            columnNumber: 9
                        },
                        __self: this,
                        children: /*#__PURE__*/ _jsxRuntime.jsx(_companyIllustrationDefault.default, {
                            __source: {
                                fileName: "src/components/companies/CompanyAdd.jsx",
                                lineNumber: 132,
                                columnNumber: 11
                            },
                            __self: this
                        })
                    }),
                    /*#__PURE__*/ _jsxRuntime.jsx(_reactToastify.ToastContainer, {
                        __source: {
                            fileName: "src/components/companies/CompanyAdd.jsx",
                            lineNumber: 134,
                            columnNumber: 9
                        },
                        __self: this
                    })
                ]
            }),
            isFetching ? /*#__PURE__*/ _jsxRuntime.jsx("div", {
                className: "fetching dark",
                __source: {
                    fileName: "src/components/companies/CompanyAdd.jsx",
                    lineNumber: 137,
                    columnNumber: 9
                },
                __self: this,
                children: /*#__PURE__*/ _jsxRuntime.jsx("div", {
                    className: "lds-dual-ring",
                    __source: {
                        fileName: "src/components/companies/CompanyAdd.jsx",
                        lineNumber: 138,
                        columnNumber: 11
                    },
                    __self: this
                })
            }) : null
        ]
    }));
}
_s(CompanyAdd, "4bYCuTcVzOH+CK5eDgTTf7d6i94=");
_c = CompanyAdd;
exports.default = CompanyAdd;
var _c;
$RefreshReg$(_c, "CompanyAdd");

  $parcel$ReactRefreshHelpers$b03f.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","react":"4mchR","../../logic/handleRequests":"h0OCH","../../logic/formValidation":"1zt8R","react-toastify":"24XKh","react-toastify/dist/ReactToastify.css":"ZJDLk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13","../reusables/CompanyIllustration":"6cLF9"}],"1zt8R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invoiceVerify", ()=>invoiceVerify
);
parcelHelpers.export(exports, "contactVerify", ()=>contactVerify
);
parcelHelpers.export(exports, "companyVerify", ()=>companyVerify
);
const invoiceVerify = (dataToVerify)=>{
    let response = {
    };
    if (!dataToVerify.reference) response.reference = "Please enter a reference";
    if (!dataToVerify.company) response.company = "Please select a company";
    if (!dataToVerify.amount) response.amount = "Please enter an amount";
    if (!dataToVerify.received) response.received = "Please select a date";
    if (dataToVerify.paidStatus !== false && dataToVerify.paidStatus !== true) response.paid = "Please select a paid status";
    response.ok = Object.keys(response).length > 0 ? false : true;
    return response;
};
const contactVerify = (dataToVerify)=>{
    let response = {
    };
    if (!dataToVerify.firstname) response.firstname = "Please enter a firstname";
    if (!dataToVerify.lastname) response.lastname = "Please enter a lastname";
    if (!dataToVerify.companies) response.companies = "Please select a contact";
    if (!dataToVerify.email) response.email = "Please enter an email";
    if (!dataToVerify.phonenumber) response.phonenumber = "Please enter a phone number";
    response.ok = Object.keys(response).length > 0 ? false : true;
    return response;
};
const companyVerify = (dataToVerify)=>{
    let response = {
    };
    if (!dataToVerify.name) response.name = "Please enter a name";
    if (!dataToVerify.vat) response.vat = "Please enter a vat number";
    if (!dataToVerify.town) response.town = "Please enter a town";
    if (!dataToVerify.street) response.street = "Please enter a street";
    if (!dataToVerify.streetnumber) response.streetnumber = "Please enter a street number";
    if (!dataToVerify.country) response.country = "Please enter a country";
    if (!dataToVerify.status) response.status = "Please select a status";
    response.ok = Object.keys(response).length > 0 ? false : true;
    return response;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"24XKh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bounce", ()=>Bounce
);
parcelHelpers.export(exports, "Flip", ()=>Flip
);
parcelHelpers.export(exports, "Icons", ()=>Icons
);
parcelHelpers.export(exports, "Slide", ()=>Slide
);
parcelHelpers.export(exports, "ToastContainer", ()=>ToastContainer
);
parcelHelpers.export(exports, "Zoom", ()=>Zoom
);
parcelHelpers.export(exports, "collapseToast", ()=>collapseToast
);
parcelHelpers.export(exports, "cssTransition", ()=>cssTransition
);
parcelHelpers.export(exports, "toast", ()=>toast1
);
parcelHelpers.export(exports, "useToast", ()=>useToast
);
parcelHelpers.export(exports, "useToastContainer", ()=>useToastContainer
);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _reactDom = require("react-dom");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function isNum(v) {
    return typeof v === 'number' && !isNaN(v);
}
function isBool(v) {
    return typeof v === 'boolean';
}
function isStr(v) {
    return typeof v === 'string';
}
function isFn(v) {
    return typeof v === 'function';
}
function parseClassName(v) {
    return isStr(v) || isFn(v) ? v : null;
}
function isToastIdValid(toastId) {
    return toastId === 0 || toastId;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
    return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function canBeRendered(content) {
    return _react.isValidElement(content) || isStr(content) || isFn(content) || isNum(content);
}
var POSITION = {
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    TOP_CENTER: 'top-center',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_CENTER: 'bottom-center'
};
var TYPE = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    DEFAULT: 'default'
};
/**
 * Used to collapse toast after exit animation
 */ function collapseToast(node, done, duration) {
    if (duration === void 0) duration = 300;
    var scrollHeight = node.scrollHeight, style = node.style;
    requestAnimationFrame(function() {
        style.minHeight = 'initial';
        style.height = scrollHeight + 'px';
        style.transition = "all " + duration + "ms";
        requestAnimationFrame(function() {
            style.height = '0';
            style.padding = '0';
            style.margin = '0';
            setTimeout(done, duration);
        });
    });
}
/**
 * Css animation that just work.
 * You could use animate.css for instance
 *
 *
 * ```
 * cssTransition({
 *   enter: "animate__animated animate__bounceIn",
 *   exit: "animate__animated animate__bounceOut"
 * })
 * ```
 *
 */ function cssTransition(_ref) {
    var enter = _ref.enter, exit = _ref.exit, _ref$appendPosition = _ref.appendPosition, appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition, _ref$collapse = _ref.collapse, collapse = _ref$collapse === void 0 ? true : _ref$collapse, _ref$collapseDuration = _ref.collapseDuration, collapseDuration = _ref$collapseDuration === void 0 ? 300 : _ref$collapseDuration;
    return function ToastTransition(_ref2) {
        var children = _ref2.children, position = _ref2.position, preventExitTransition = _ref2.preventExitTransition, done = _ref2.done, nodeRef = _ref2.nodeRef, isIn = _ref2.isIn;
        var enterClassName = appendPosition ? enter + "--" + position : enter;
        var exitClassName = appendPosition ? exit + "--" + position : exit;
        var baseClassName = _react.useRef();
        var animationStep = _react.useRef(0);
        _react.useLayoutEffect(function() {
            onEnter();
        }, []);
        _react.useEffect(function() {
            if (!isIn) preventExitTransition ? onExited() : onExit();
        }, [
            isIn
        ]);
        function onEnter() {
            var node = nodeRef.current;
            baseClassName.current = node.className;
            node.className += " " + enterClassName;
            node.addEventListener('animationend', onEntered);
        }
        function onEntered(e) {
            if (e.target !== nodeRef.current) return;
            var node = nodeRef.current;
            node.removeEventListener('animationend', onEntered);
            if (animationStep.current === 0) node.className = baseClassName.current;
        }
        function onExit() {
            animationStep.current = 1;
            var node = nodeRef.current;
            node.className += " " + exitClassName;
            node.addEventListener('animationend', onExited);
        }
        function onExited() {
            var node = nodeRef.current;
            node.removeEventListener('animationend', onExited);
            collapse ? collapseToast(node, done, collapseDuration) : done();
        }
        return _reactDefault.default.createElement(_reactDefault.default.Fragment, null, children);
    };
}
var eventManager = {
    list: /*#__PURE__*/ new Map(),
    emitQueue: /*#__PURE__*/ new Map(),
    on: function on(event, callback) {
        this.list.has(event) || this.list.set(event, []);
        this.list.get(event).push(callback);
        return this;
    },
    off: function off(event, callback) {
        if (callback) {
            var cb1 = this.list.get(event).filter(function(cb) {
                return cb !== callback;
            });
            this.list.set(event, cb1);
            return this;
        }
        this.list["delete"](event);
        return this;
    },
    cancelEmit: function cancelEmit(event) {
        var timers = this.emitQueue.get(event);
        if (timers) {
            timers.forEach(clearTimeout);
            this.emitQueue["delete"](event);
        }
        return this;
    },
    /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */ emit: function emit(event) {
        var _this = this;
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        this.list.has(event) && this.list.get(event).forEach(function(callback) {
            var timer = setTimeout(function() {
                // @ts-ignore
                callback.apply(void 0, args);
            }, 0);
            _this.emitQueue.has(event) || _this.emitQueue.set(event, []);
            _this.emitQueue.get(event).push(timer);
        });
    }
};
/**
 * `useKeeper` is a helper around `useRef`.
 *
 * You don't need to access the `.current`property to get the value
 * If refresh is set to true. The ref will be updated every render
 */ function useKeeper(arg, refresh) {
    if (refresh === void 0) refresh = false;
    var ref = _react.useRef(arg);
    _react.useEffect(function() {
        if (refresh) ref.current = arg;
    });
    return ref.current;
}
function reducer(state, action) {
    switch(action.type){
        case 0:
            return [].concat(state, [
                action.toastId
            ]).filter(function(id) {
                return id !== action.staleId;
            });
        case 1:
            return isToastIdValid(action.toastId) ? state.filter(function(id) {
                return id !== action.toastId;
            }) : [];
    }
}
var _excluded = [
    "delay",
    "staleId"
];
function useToastContainer(props1) {
    var _useReducer = _react.useReducer(function(x) {
        return x + 1;
    }, 0), forceUpdate = _useReducer[1];
    var _useReducer2 = _react.useReducer(reducer, []), toast = _useReducer2[0], dispatch = _useReducer2[1];
    var containerRef = _react.useRef(null);
    var toastCount = useKeeper(0);
    var queue = useKeeper([]);
    var collection = useKeeper({
    });
    var instance = useKeeper({
        toastKey: 1,
        displayedToast: 0,
        props: props1,
        containerId: null,
        isToastActive: isToastActive,
        getToast: function getToast(id) {
            return collection[id] || null;
        }
    });
    _react.useEffect(function() {
        instance.containerId = props1.containerId;
        eventManager.cancelEmit(3).on(0, buildToast).on(1, function(toastId) {
            return containerRef.current && removeToast(toastId);
        }).on(5, clearWaitingQueue).emit(2, instance);
        return function() {
            return eventManager.emit(3, instance);
        };
    }, []);
    _react.useEffect(function() {
        instance.isToastActive = isToastActive;
        instance.displayedToast = toast.length;
        eventManager.emit(4, toast.length, props1.containerId);
    }, [
        toast
    ]);
    _react.useEffect(function() {
        instance.props = props1;
    });
    function isToastActive(id) {
        return toast.indexOf(id) !== -1;
    }
    function clearWaitingQueue(_ref) {
        var containerId = _ref.containerId;
        var limit = instance.props.limit;
        if (limit && (!containerId || instance.containerId === containerId)) {
            toastCount -= queue.length;
            queue = [];
        }
    }
    function removeToast(toastId) {
        dispatch({
            type: 1,
            toastId: toastId
        });
    }
    function dequeueToast() {
        var _queue$shift = queue.shift(), toastContent = _queue$shift.toastContent, toastProps = _queue$shift.toastProps, staleId = _queue$shift.staleId;
        appendToast(toastContent, toastProps, staleId);
    }
    /**
   * check if a container is attached to the dom
   * check for multi-container, build only if associated
   * check for duplicate toastId if no update
   */ function isNotValid(_ref2) {
        var containerId = _ref2.containerId, toastId = _ref2.toastId, updateId = _ref2.updateId;
        return !containerRef.current || instance.props.enableMultiContainer && containerId !== instance.props.containerId || collection[toastId] && updateId == null ? true : false;
    } // this function and all the function called inside needs to rely on ref(`useKeeper`)
    function buildToast(content, _ref3) {
        var _options$icon;
        var delay = _ref3.delay, staleId = _ref3.staleId, options = _objectWithoutPropertiesLoose(_ref3, _excluded);
        if (!canBeRendered(content) || isNotValid(options)) return;
        var toastId = options.toastId, updateId = options.updateId, data = options.data;
        var props = instance.props;
        var closeToast = function closeToast() {
            return removeToast(toastId);
        };
        var isNotAnUpdate = options.updateId == null;
        if (isNotAnUpdate) toastCount++;
        var toastProps = {
            toastId: toastId,
            updateId: updateId,
            isLoading: options.isLoading,
            theme: options.theme || props.theme,
            icon: (_options$icon = options.icon) != null ? _options$icon : props.icon,
            isIn: false,
            key: options.key || instance.toastKey++,
            type: options.type,
            closeToast: closeToast,
            closeButton: options.closeButton,
            rtl: props.rtl,
            position: options.position || props.position,
            transition: options.transition || props.transition,
            className: parseClassName(options.className || props.toastClassName),
            bodyClassName: parseClassName(options.bodyClassName || props.bodyClassName),
            style: options.style || props.toastStyle,
            bodyStyle: options.bodyStyle || props.bodyStyle,
            onClick: options.onClick || props.onClick,
            pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props.pauseOnHover,
            pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props.pauseOnFocusLoss,
            draggable: isBool(options.draggable) ? options.draggable : props.draggable,
            draggablePercent: isNum(options.draggablePercent) ? options.draggablePercent : props.draggablePercent,
            draggableDirection: options.draggableDirection || props.draggableDirection,
            closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props.closeOnClick,
            progressClassName: parseClassName(options.progressClassName || props.progressClassName),
            progressStyle: options.progressStyle || props.progressStyle,
            autoClose: options.isLoading ? false : getAutoCloseDelay(options.autoClose, props.autoClose),
            hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props.hideProgressBar,
            progress: options.progress,
            role: isStr(options.role) ? options.role : props.role,
            deleteToast: function deleteToast() {
                removeFromCollection(toastId);
            }
        };
        if (isFn(options.onOpen)) toastProps.onOpen = options.onOpen;
        if (isFn(options.onClose)) toastProps.onClose = options.onClose; //  tweak for vertical dragging
        if (toastProps.draggableDirection === "y" && toastProps.draggablePercent === 80) toastProps.draggablePercent *= 1.5;
        var closeButton = props.closeButton;
        if (options.closeButton === false || canBeRendered(options.closeButton)) closeButton = options.closeButton;
        else if (options.closeButton === true) closeButton = canBeRendered(props.closeButton) ? props.closeButton : true;
        toastProps.closeButton = closeButton;
        var toastContent = content;
        if (_react.isValidElement(content) && !isStr(content.type)) toastContent = _react.cloneElement(content, {
            closeToast: closeToast,
            toastProps: toastProps,
            data: data
        });
        else if (isFn(content)) toastContent = content({
            closeToast: closeToast,
            toastProps: toastProps,
            data: data
        });
         // not handling limit + delay by design. Waiting for user feedback first
        if (props.limit && props.limit > 0 && toastCount > props.limit && isNotAnUpdate) queue.push({
            toastContent: toastContent,
            toastProps: toastProps,
            staleId: staleId
        });
        else if (isNum(delay) && delay > 0) setTimeout(function() {
            appendToast(toastContent, toastProps, staleId);
        }, delay);
        else appendToast(toastContent, toastProps, staleId);
    }
    function appendToast(content, toastProps, staleId) {
        var toastId = toastProps.toastId;
        if (staleId) delete collection[staleId];
        collection[toastId] = {
            content: content,
            props: toastProps
        };
        dispatch({
            type: 0,
            toastId: toastId,
            staleId: staleId
        });
    }
    function removeFromCollection(toastId) {
        delete collection[toastId];
        var queueLen = queue.length;
        toastCount = isToastIdValid(toastId) ? toastCount - 1 : toastCount - instance.displayedToast;
        if (toastCount < 0) toastCount = 0;
        if (queueLen > 0) {
            var freeSlot = isToastIdValid(toastId) ? 1 : instance.props.limit;
            if (queueLen === 1 || freeSlot === 1) {
                instance.displayedToast++;
                dequeueToast();
            } else {
                var toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
                instance.displayedToast = toDequeue;
                for(var i = 0; i < toDequeue; i++)dequeueToast();
            }
        } else forceUpdate();
    }
    function getToastToRender(cb) {
        var toastToRender = {
        };
        var toastList = props1.newestOnTop ? Object.keys(collection).reverse() : Object.keys(collection);
        for(var i = 0; i < toastList.length; i++){
            var _toast = collection[toastList[i]];
            var position = _toast.props.position;
            toastToRender[position] || (toastToRender[position] = []);
            toastToRender[position].push(_toast);
        }
        return Object.keys(toastToRender).map(function(p) {
            return cb(p, toastToRender[p]);
        });
    }
    return {
        getToastToRender: getToastToRender,
        collection: collection,
        containerRef: containerRef,
        isToastActive: isToastActive
    };
}
function getX(e) {
    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function getY(e) {
    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function useToast(props) {
    var _useState = _react.useState(true), isRunning = _useState[0], setIsRunning = _useState[1];
    var _useState2 = _react.useState(false), preventExitTransition = _useState2[0], setPreventExitTransition = _useState2[1];
    var toastRef = _react.useRef(null);
    var drag = useKeeper({
        start: 0,
        x: 0,
        y: 0,
        delta: 0,
        removalDistance: 0,
        canCloseOnClick: true,
        canDrag: false,
        boundingRect: null
    });
    var syncProps = useKeeper(props, true);
    var autoClose = props.autoClose, pauseOnHover = props.pauseOnHover, closeToast = props.closeToast, onClick = props.onClick, closeOnClick = props.closeOnClick;
    _react.useEffect(function() {
        if (isFn(props.onOpen)) props.onOpen(_react.isValidElement(props.children) && props.children.props);
        return function() {
            if (isFn(syncProps.onClose)) syncProps.onClose(_react.isValidElement(syncProps.children) && syncProps.children.props);
        };
    }, []);
    _react.useEffect(function() {
        props.draggable && bindDragEvents();
        return function() {
            props.draggable && unbindDragEvents();
        };
    }, [
        props.draggable
    ]);
    _react.useEffect(function() {
        props.pauseOnFocusLoss && bindFocusEvents();
        return function() {
            props.pauseOnFocusLoss && unbindFocusEvents();
        };
    }, [
        props.pauseOnFocusLoss
    ]);
    function onDragStart(e) {
        if (props.draggable) {
            var toast = toastRef.current;
            drag.canCloseOnClick = true;
            drag.canDrag = true;
            drag.boundingRect = toast.getBoundingClientRect();
            toast.style.transition = '';
            drag.x = getX(e.nativeEvent);
            drag.y = getY(e.nativeEvent);
            if (props.draggableDirection === "x") {
                drag.start = drag.x;
                drag.removalDistance = toast.offsetWidth * (props.draggablePercent / 100);
            } else {
                drag.start = drag.y;
                drag.removalDistance = toast.offsetHeight * (props.draggablePercent / 100);
            }
        }
    }
    function onDragTransitionEnd() {
        if (drag.boundingRect) {
            var _drag$boundingRect = drag.boundingRect, top = _drag$boundingRect.top, bottom = _drag$boundingRect.bottom, left = _drag$boundingRect.left, right = _drag$boundingRect.right;
            if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) pauseToast();
            else playToast();
        }
    }
    function playToast() {
        setIsRunning(true);
    }
    function pauseToast() {
        setIsRunning(false);
    }
    function bindFocusEvents() {
        if (!document.hasFocus()) pauseToast();
        window.addEventListener('focus', playToast);
        window.addEventListener('blur', pauseToast);
    }
    function unbindFocusEvents() {
        window.removeEventListener('focus', playToast);
        window.removeEventListener('blur', pauseToast);
    }
    function bindDragEvents() {
        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('mouseup', onDragEnd);
        document.addEventListener('touchmove', onDragMove);
        document.addEventListener('touchend', onDragEnd);
    }
    function unbindDragEvents() {
        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', onDragEnd);
        document.removeEventListener('touchmove', onDragMove);
        document.removeEventListener('touchend', onDragEnd);
    }
    function onDragMove(e) {
        if (drag.canDrag) {
            e.preventDefault();
            var toast = toastRef.current;
            if (isRunning) pauseToast();
            drag.x = getX(e);
            drag.y = getY(e);
            if (props.draggableDirection === "x") drag.delta = drag.x - drag.start;
            else drag.delta = drag.y - drag.start;
             // prevent false positif during a toast click
            if (drag.start !== drag.x) drag.canCloseOnClick = false;
            toast.style.transform = "translate" + props.draggableDirection + "(" + drag.delta + "px)";
            toast.style.opacity = "" + (1 - Math.abs(drag.delta / drag.removalDistance));
        }
    }
    function onDragEnd() {
        var toast = toastRef.current;
        if (drag.canDrag) {
            drag.canDrag = false;
            if (Math.abs(drag.delta) > drag.removalDistance) {
                setPreventExitTransition(true);
                props.closeToast();
                return;
            }
            toast.style.transition = 'transform 0.2s, opacity 0.2s';
            toast.style.transform = "translate" + props.draggableDirection + "(0)";
            toast.style.opacity = '1';
        }
    }
    var eventHandlers = {
        onMouseDown: onDragStart,
        onTouchStart: onDragStart,
        onMouseUp: onDragTransitionEnd,
        onTouchEnd: onDragTransitionEnd
    };
    if (autoClose && pauseOnHover) {
        eventHandlers.onMouseEnter = pauseToast;
        eventHandlers.onMouseLeave = playToast;
    } // prevent toast from closing when user drags the toast
    if (closeOnClick) eventHandlers.onClick = function(e) {
        onClick && onClick(e);
        drag.canCloseOnClick && closeToast();
    };
    return {
        playToast: playToast,
        pauseToast: pauseToast,
        isRunning: isRunning,
        preventExitTransition: preventExitTransition,
        toastRef: toastRef,
        eventHandlers: eventHandlers
    };
}
function CloseButton(_ref) {
    var closeToast = _ref.closeToast, theme = _ref.theme, _ref$ariaLabel = _ref.ariaLabel, ariaLabel = _ref$ariaLabel === void 0 ? 'close' : _ref$ariaLabel;
    return _react.createElement("button", {
        className: "Toastify__close-button Toastify__close-button--" + theme,
        type: "button",
        onClick: function onClick(e) {
            e.stopPropagation();
            closeToast(e);
        },
        "aria-label": ariaLabel
    }, _react.createElement("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 14 16"
    }, _react.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    })));
}
function ProgressBar(_ref) {
    var _cx, _animationEvent;
    var delay = _ref.delay, isRunning = _ref.isRunning, closeToast = _ref.closeToast, type = _ref.type, hide = _ref.hide, className = _ref.className, userStyle = _ref.style, controlledProgress = _ref.controlledProgress, progress = _ref.progress, rtl = _ref.rtl, isIn = _ref.isIn, theme = _ref.theme;
    var style = _extends({
    }, userStyle, {
        animationDuration: delay + "ms",
        animationPlayState: isRunning ? 'running' : 'paused',
        opacity: hide ? 0 : 1
    });
    if (controlledProgress) style.transform = "scaleX(" + progress + ")";
    var defaultClassName = _clsxDefault.default("Toastify__progress-bar", controlledProgress ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar-theme--" + theme, "Toastify__progress-bar--" + type, (_cx = {
    }, _cx["Toastify__progress-bar--rtl"] = rtl, _cx));
    var classNames = isFn(className) ? className({
        rtl: rtl,
        type: type,
        defaultClassName: defaultClassName
    }) : _clsxDefault.default(defaultClassName, className); // 🧐 controlledProgress is derived from progress
    // so if controlledProgress is set
    // it means that this is also the case for progress
    var animationEvent = (_animationEvent = {
    }, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : function() {
        isIn && closeToast();
    }, _animationEvent); // TODO: add aria-valuenow, aria-valuemax, aria-valuemin
    return _react.createElement("div", Object.assign({
        role: "progressbar",
        "aria-hidden": hide ? 'true' : 'false',
        "aria-label": "notification timer",
        className: classNames,
        style: style
    }, animationEvent));
}
ProgressBar.defaultProps = {
    type: TYPE.DEFAULT,
    hide: false
};
var _excluded$1 = [
    "theme",
    "type"
];
var Svg = function Svg(_ref) {
    var theme = _ref.theme, type = _ref.type, rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);
    return _reactDefault.default.createElement("svg", Object.assign({
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: theme === 'colored' ? 'currentColor' : "var(--toastify-icon-color-" + type + ")"
    }, rest));
};
function Warning(props) {
    return _reactDefault.default.createElement(Svg, Object.assign({
    }, props), _reactDefault.default.createElement("path", {
        d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
    }));
}
function Info(props) {
    return _reactDefault.default.createElement(Svg, Object.assign({
    }, props), _reactDefault.default.createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
    }));
}
function Success(props) {
    return _reactDefault.default.createElement(Svg, Object.assign({
    }, props), _reactDefault.default.createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
    }));
}
function Error(props) {
    return _reactDefault.default.createElement(Svg, Object.assign({
    }, props), _reactDefault.default.createElement("path", {
        d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
    }));
}
function Spinner() {
    return _reactDefault.default.createElement("div", {
        className: "Toastify__spinner"
    });
}
var Icons = {
    info: Info,
    warning: Warning,
    success: Success,
    error: Error,
    spinner: Spinner
};
var Toast = function Toast(props2) {
    var _cx, _cx2;
    var _useToast = useToast(props2), isRunning = _useToast.isRunning, preventExitTransition = _useToast.preventExitTransition, toastRef = _useToast.toastRef, eventHandlers = _useToast.eventHandlers;
    var closeButton1 = props2.closeButton, children = props2.children, autoClose = props2.autoClose, onClick = props2.onClick, type = props2.type, hideProgressBar = props2.hideProgressBar, closeToast = props2.closeToast, Transition = props2.transition, position = props2.position, className = props2.className, style = props2.style, bodyClassName = props2.bodyClassName, bodyStyle = props2.bodyStyle, progressClassName = props2.progressClassName, progressStyle = props2.progressStyle, updateId = props2.updateId, role = props2.role, progress = props2.progress, rtl = props2.rtl, toastId = props2.toastId, deleteToast = props2.deleteToast, isIn = props2.isIn, isLoading = props2.isLoading, icon = props2.icon, theme = props2.theme;
    var defaultClassName = _clsxDefault.default("Toastify__toast", "Toastify__toast-theme--" + theme, "Toastify__toast--" + type, (_cx = {
    }, _cx["Toastify__toast--rtl"] = rtl, _cx));
    var cssClasses = isFn(className) ? className({
        rtl: rtl,
        position: position,
        type: type,
        defaultClassName: defaultClassName
    }) : _clsxDefault.default(defaultClassName, className);
    var isProgressControlled = !!progress;
    var maybeIcon = Icons[type];
    var iconProps = {
        theme: theme,
        type: type
    };
    var Icon = maybeIcon && maybeIcon(iconProps);
    if (icon === false) Icon = void 0;
    else if (isFn(icon)) Icon = icon(iconProps);
    else if (_react.isValidElement(icon)) Icon = _react.cloneElement(icon, iconProps);
    else if (isStr(icon)) Icon = icon;
    else if (isLoading) Icon = Icons.spinner();
    function renderCloseButton(closeButton) {
        if (!closeButton) return;
        var props = {
            closeToast: closeToast,
            type: type,
            theme: theme
        };
        if (isFn(closeButton)) return closeButton(props);
        if (_react.isValidElement(closeButton)) return _react.cloneElement(closeButton, props);
    }
    return _react.createElement(Transition, {
        isIn: isIn,
        done: deleteToast,
        position: position,
        preventExitTransition: preventExitTransition,
        nodeRef: toastRef
    }, _react.createElement("div", Object.assign({
        id: toastId,
        onClick: onClick,
        className: cssClasses
    }, eventHandlers, {
        style: style,
        ref: toastRef
    }), _react.createElement("div", Object.assign({
    }, isIn && {
        role: role
    }, {
        className: isFn(bodyClassName) ? bodyClassName({
            type: type
        }) : _clsxDefault.default("Toastify__toast-body", bodyClassName),
        style: bodyStyle
    }), Icon && _react.createElement("div", {
        className: _clsxDefault.default("Toastify__toast-icon", (_cx2 = {
        }, _cx2["Toastify--animate-icon Toastify__zoom-enter"] = !isLoading, _cx2))
    }, Icon), _react.createElement("div", null, children)), renderCloseButton(closeButton1), (autoClose || isProgressControlled) && _react.createElement(ProgressBar, Object.assign({
    }, updateId && !isProgressControlled ? {
        key: "pb-" + updateId
    } : {
    }, {
        rtl: rtl,
        theme: theme,
        delay: autoClose,
        isRunning: isRunning,
        isIn: isIn,
        closeToast: closeToast,
        hide: hideProgressBar,
        type: type,
        style: progressStyle,
        className: progressClassName,
        controlledProgress: isProgressControlled,
        progress: progress
    }))));
};
var Bounce = /*#__PURE__*/ cssTransition({
    enter: "Toastify--animate Toastify__bounce-enter",
    exit: "Toastify--animate Toastify__bounce-exit",
    appendPosition: true
});
var Slide = /*#__PURE__*/ cssTransition({
    enter: "Toastify--animate Toastify__slide-enter",
    exit: "Toastify--animate Toastify__slide-exit",
    appendPosition: true
});
var Zoom = /*#__PURE__*/ cssTransition({
    enter: "Toastify--animate Toastify__zoom-enter",
    exit: "Toastify--animate Toastify__zoom-exit"
});
var Flip = /*#__PURE__*/ cssTransition({
    enter: "Toastify--animate Toastify__flip-enter",
    exit: "Toastify--animate Toastify__flip-exit"
});
var ToastContainer = function ToastContainer(props) {
    var _useToastContainer = useToastContainer(props), getToastToRender = _useToastContainer.getToastToRender, containerRef = _useToastContainer.containerRef, isToastActive = _useToastContainer.isToastActive;
    var className = props.className, style = props.style, rtl = props.rtl, containerId = props.containerId;
    function getClassName(position) {
        var _cx;
        var defaultClassName = _clsxDefault.default("Toastify__toast-container", "Toastify__toast-container--" + position, (_cx = {
        }, _cx["Toastify__toast-container--rtl"] = rtl, _cx));
        return isFn(className) ? className({
            position: position,
            rtl: rtl,
            defaultClassName: defaultClassName
        }) : _clsxDefault.default(defaultClassName, parseClassName(className));
    }
    return _react.createElement("div", {
        ref: containerRef,
        className: "Toastify",
        id: containerId
    }, getToastToRender(function(position, toastList) {
        var containerStyle = toastList.length === 0 ? _extends({
        }, style, {
            pointerEvents: 'none'
        }) : _extends({
        }, style);
        return _react.createElement("div", {
            className: getClassName(position),
            style: containerStyle,
            key: "container-" + position
        }, toastList.map(function(_ref) {
            var content = _ref.content, toastProps = _ref.props;
            return _react.createElement(Toast, Object.assign({
            }, toastProps, {
                isIn: isToastActive(toastProps.toastId),
                key: "toast-" + toastProps.key,
                closeButton: toastProps.closeButton === true ? CloseButton : toastProps.closeButton
            }), content);
        }));
    }));
};
ToastContainer.defaultProps = {
    position: POSITION.TOP_RIGHT,
    transition: Bounce,
    rtl: false,
    autoClose: 5000,
    hideProgressBar: false,
    closeButton: CloseButton,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    closeOnClick: true,
    newestOnTop: false,
    draggable: true,
    draggablePercent: 80,
    draggableDirection: "x",
    role: 'alert',
    theme: 'light'
};
var containers = /*#__PURE__*/ new Map();
var latestInstance;
var containerDomNode;
var containerConfig;
var queue1 = [];
var lazy = false;
/**
 * Check whether any container is currently mounted in the DOM
 */ function isAnyContainerMounted() {
    return containers.size > 0;
}
/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */ function getToast(toastId, _ref) {
    var containerId = _ref.containerId;
    var container = containers.get(containerId || latestInstance);
    if (!container) return null;
    return container.getToast(toastId);
}
/**
 * Generate a random toastId
 */ function generateToastId() {
    return Math.random().toString(36).substr(2, 9);
}
/**
 * Generate a toastId or use the one provided
 */ function getToastId(options) {
    if (options && (isStr(options.toastId) || isNum(options.toastId))) return options.toastId;
    return generateToastId();
}
/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */ function dispatchToast(content, options) {
    if (isAnyContainerMounted()) eventManager.emit(0, content, options);
    else {
        queue1.push({
            content: content,
            options: options
        });
        if (lazy && canUseDom) {
            lazy = false;
            containerDomNode = document.createElement('div');
            document.body.appendChild(containerDomNode);
            _reactDom.render(_react.createElement(ToastContainer, Object.assign({
            }, containerConfig)), containerDomNode);
        }
    }
    return options.toastId;
}
/**
 * Merge provided options with the defaults settings and generate the toastId
 */ function mergeOptions(type, options) {
    return _extends({
    }, options, {
        type: options && options.type || type,
        toastId: getToastId(options)
    });
}
var createToastByType = function createToastByType(type) {
    return function(content, options) {
        return dispatchToast(content, mergeOptions(type, options));
    };
};
var toast1 = function toast(content, options) {
    return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
};
toast1.loading = function(content, options) {
    return dispatchToast(content, mergeOptions(TYPE.DEFAULT, _extends({
        isLoading: true,
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false
    }, options)));
};
function handlePromise(promise, _ref2, options) {
    var pending = _ref2.pending, error = _ref2.error, success = _ref2.success;
    var id;
    if (pending) id = isStr(pending) ? toast1.loading(pending, options) : toast1.loading(pending.render, _extends({
    }, options, pending));
    var resetParams = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null
    };
    var resolver = function resolver(type, input, result) {
        var baseParams = _extends({
            type: type
        }, resetParams, options, {
            data: result
        });
        var params = isStr(input) ? {
            render: input
        } : input; // if the id is set we know that it's an update
        if (id) toast1.update(id, _extends({
        }, baseParams, params));
        else // using toast.promise without loading
        toast1(params.render, _extends({
        }, baseParams, params));
        return result;
    };
    var p = isFn(promise) ? promise() : promise; //call the resolvers only when needed
    p.then(function(result) {
        return success && resolver('success', success, result);
    })["catch"](function(err) {
        return error && resolver('error', error, err);
    });
    return p;
}
toast1.promise = handlePromise;
toast1.success = /*#__PURE__*/ createToastByType(TYPE.SUCCESS);
toast1.info = /*#__PURE__*/ createToastByType(TYPE.INFO);
toast1.error = /*#__PURE__*/ createToastByType(TYPE.ERROR);
toast1.warning = /*#__PURE__*/ createToastByType(TYPE.WARNING);
toast1.warn = toast1.warning;
toast1.dark = function(content, options) {
    return dispatchToast(content, mergeOptions(TYPE.DEFAULT, _extends({
        theme: 'dark'
    }, options)));
};
/**
 * Remove toast programmaticaly
 */ toast1.dismiss = function(id) {
    return eventManager.emit(1, id);
};
/**
 * Clear waiting queue when limit is used
 */ toast1.clearWaitingQueue = function(params) {
    if (params === void 0) params = {
    };
    return eventManager.emit(5, params);
};
/**
 * return true if one container is displaying the toast
 */ toast1.isActive = function(id) {
    var isToastActive = false;
    containers.forEach(function(container) {
        if (container.isToastActive && container.isToastActive(id)) isToastActive = true;
    });
    return isToastActive;
};
toast1.update = function(toastId, options) {
    if (options === void 0) options = {
    };
    // if you call toast and toast.update directly nothing will be displayed
    // this is why I defered the update
    setTimeout(function() {
        var toast = getToast(toastId, options);
        if (toast) {
            var oldOptions = toast.props, oldContent = toast.content;
            var nextOptions = _extends({
            }, oldOptions, options, {
                toastId: options.toastId || toastId,
                updateId: generateToastId()
            });
            if (nextOptions.toastId !== toastId) nextOptions.staleId = toastId;
            var content = nextOptions.render || oldContent;
            delete nextOptions.render;
            dispatchToast(content, nextOptions);
        }
    }, 0);
};
/**
 * Used for controlled progress bar.
 */ toast1.done = function(id) {
    toast1.update(id, {
        progress: 1
    });
};
/**
 * Track changes. The callback get the number of toast displayed
 *
 */ toast1.onChange = function(callback) {
    if (isFn(callback)) eventManager.on(4, callback);
    return function() {
        isFn(callback) && eventManager.off(4, callback);
    };
};
/**
 * Configure the ToastContainer when lazy mounted
 */ toast1.configure = function(config) {
    if (config === void 0) config = {
    };
    lazy = true;
    containerConfig = config;
};
toast1.POSITION = POSITION;
toast1.TYPE = TYPE;
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */ eventManager.on(2, function(containerInstance) {
    latestInstance = containerInstance.containerId || containerInstance;
    containers.set(latestInstance, containerInstance);
    queue1.forEach(function(item) {
        eventManager.emit(0, item.content, item.options);
    });
    queue1 = [];
}).on(3, function(containerInstance) {
    containers["delete"](containerInstance.containerId || containerInstance);
    if (containers.size === 0) eventManager.off(0).off(1).off(5);
    if (canUseDom && containerDomNode) document.body.removeChild(containerDomNode);
});

},{"react":"4mchR","clsx":"5PXc8","react-dom":"afyCw","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5PXc8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function toVal(mix) {
    var k, y, str = '';
    if (typeof mix === 'string' || typeof mix === 'number') str += mix;
    else if (typeof mix === 'object') {
        if (Array.isArray(mix)) for(k = 0; k < mix.length; k++){
            if (mix[k]) {
                if (y = toVal(mix[k])) {
                    str && (str += ' ');
                    str += y;
                }
            }
        }
        else {
            for(k in mix)if (mix[k]) {
                str && (str += ' ');
                str += k;
            }
        }
    }
    return str;
}
exports.default = function() {
    var i = 0, tmp, x, str = '';
    while(i < arguments.length){
        if (tmp = arguments[i++]) {
            if (x = toVal(tmp)) {
                str && (str += ' ');
                str += x;
            }
        }
    }
    return str;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ZJDLk":[function() {},{}],"6cLF9":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$c2d0 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$c2d0.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const CompanyIllustration = ()=>/*#__PURE__*/ _jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 704.72644 560.95591",
        __source: {
            fileName: "src/components/reusables/CompanyIllustration.jsx",
            lineNumber: 4,
            columnNumber: 3
        },
        __self: undefined,
        children: [
            /*#__PURE__*/ _jsxRuntime.jsx("rect", {
                x: "159.70342",
                y: "191.73569",
                width: "5",
                height: "55",
                fill: "#f2f2f2",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 5,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("polygon", {
                points: "270.438 559.992 73.438 559.992 73.658 537.104 73.678 535.114 75.438 355.992 269.438 355.992 269.688 407.738 269.698 409.728 270.438 559.992",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 6,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M756.00562,339.98873,787.882,285.95008a10.12678,10.12678,0,0,0-3.48087-13.77487l0,0a10.12679,10.12679,0,0,0-14.17886,3.86527l-31.39087,57.148-20.53808,33.92122a8.83707,8.83707,0,1,0,7.55813,8.45613Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#a0616a",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 10,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M786.352,299.89063h0a2.98619,2.98619,0,0,0,2.2983-2.79656,3.87391,3.87391,0,0,1,.84492-2.207,3.56246,3.56246,0,0,1,.31968-.34128,5.84262,5.84262,0,0,0,1.91345-5.05186c-.4101-3.06825.69794-6.62582,2.05676-9.56381,1.48695-3.21492,3.17044-6.39758,3.84457-9.875.97237-5.01625-.50447-10.9606-6.68692-12.4485a11.76107,11.76107,0,0,0-7.82276.95086c-5.09461,2.45643-8.20655,7.34346-11.13894,12.04723,0,0-7.006,7.29026-11.89129,10.83335,1.27577.49449,1.11934,2.52776.061,3.3948-1.05843.86709-2.52788.95018-3.87885,1.1667-1.70286.27292-3.63808,1.05189-3.53417,3.17087a3.68182,3.68182,0,0,0,1.38637,2.60386,69.58157,69.58157,0,0,0,25.2,13.26721c2.04919.58465,4.34642,1.05166,6.23049.05607S788.17141,301,786.352,299.89063Z",
                transform: "translate(-247.63678 -169.52205)",
                id: "shirtSleeve",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 15,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("polygon", {
                points: "587.328 224.152 522.328 223.152 520.328 208.152 526.328 174.152 577.328 174.152 587.328 224.152",
                fill: "#a0616a",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 20,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("polygon", {
                points: "500.069 538.978 489.031 538.978 483.778 496.405 500.069 496.405 500.069 538.978",
                fill: "#a0616a",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 24,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M753.53124,727.62456H745.6157l-1.41289-7.47321-3.61861,7.47321-20.99388,0a4.71923,4.71923,0,0,1-2.68163-8.60272l16.76509-11.57858,0-7.55515,17.63395,1.05251Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 28,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("polygon", {
                points: "649.348 503.147 640.294 509.46 611.634 477.542 624.997 468.225 649.348 503.147",
                fill: "#a0616a",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 33,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M912.7017,685.0241l-6.49294,4.52741-5.43337-5.322,1.30614,8.19983-17.22081,12.00777a4.71923,4.71923,0,0,1-7.12014-5.52283l7.12949-19.0867-4.32129-6.19732,15.06674-9.22266Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 37,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M951.17876,730.17064l-702.3575.30731a1.19069,1.19069,0,0,1,0-2.38134l702.3575-.30732a1.19069,1.19069,0,0,1,0,2.38135Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#cacaca",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 42,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("rect", {
                x: "62.93408",
                y: "335.38378",
                width: "215.49825",
                height: "23.7682",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 47,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M452.46268,476.27128l-.72975-2.56026h.164a1.70683,1.70683,0,0,0,0-3.41365,50.78067,50.78067,0,0,0-23.46887,0,1.70586,1.70586,0,0,0-.02027,3.41161l-.694,2.5623c-5.38483,7.48643-2.75049,19.92225,0,32.42971h24.74895C455.574,495.06838,457.92981,482.12117,452.46268,476.27128Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 54,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "192.52567",
                cy: "319.97715",
                r: "6.82731",
                fill: "#fff",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 59,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M471.13413,439.7402l-.72975-2.56027h.16395a1.70682,1.70682,0,0,0,0-3.41364,50.7804,50.7804,0,0,0-23.46887,0,1.70586,1.70586,0,0,0-.02027,3.41161l-.694,2.5623c-5.38483,7.48642-2.75048,19.92224,0,32.42971h24.749C474.24542,458.5373,476.60125,445.59009,471.13413,439.7402Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 60,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "211.19711",
                cy: "283.44606",
                r: "6.82731",
                fill: "#fff",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 65,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M435.13413,439.7402l-.72975-2.56027h.16395a1.70682,1.70682,0,0,0,0-3.41364,50.7804,50.7804,0,0,0-23.46887,0,1.70586,1.70586,0,0,0-.02027,3.41161l-.694,2.5623c-5.38483,7.48642-2.75048,19.92224,0,32.42971h24.749C438.24542,458.5373,440.60125,445.59009,435.13413,439.7402Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 66,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "175.19711",
                cy: "283.44606",
                r: "6.82731",
                fill: "#fff",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 71,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M419.13413,404.7402l-.72975-2.56027h.16395a1.70682,1.70682,0,0,0,0-3.41364,50.7804,50.7804,0,0,0-23.46887,0,1.70586,1.70586,0,0,0-.02027,3.41161l-.694,2.5623c-5.38483,7.48642-2.75048,19.92224,0,32.42971h24.749C422.24542,423.5373,424.60125,410.59009,419.13413,404.7402Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 72,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "159.19711",
                cy: "248.44606",
                r: "6.82731",
                fill: "#fff",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 77,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M455.13413,404.7402l-.72975-2.56027h.16395a1.70682,1.70682,0,0,0,0-3.41364,50.7804,50.7804,0,0,0-23.46887,0,1.70586,1.70586,0,0,0-.02027,3.41161l-.694,2.5623c-5.38483,7.48642-2.75048,19.92224,0,32.42971h24.749C458.24542,423.5373,460.60125,410.59009,455.13413,404.7402Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 78,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "195.19711",
                cy: "248.44606",
                r: "6.82731",
                fill: "#fff",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 83,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M398.13413,439.7402l-.72975-2.56027h.16395a1.70682,1.70682,0,0,0,0-3.41364,50.7804,50.7804,0,0,0-23.46887,0,1.70586,1.70586,0,0,0-.02027,3.41161l-.694,2.5623c-5.38483,7.48642-2.75048,19.92224,0,32.42971h24.749C401.24542,458.5373,403.60125,445.59009,398.13413,439.7402Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 84,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "138.19711",
                cy: "283.44606",
                r: "6.82731",
                fill: "#fff",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 89,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M727.13413,340.7402l-.72975-2.56027h.16395a1.70682,1.70682,0,0,0,0-3.41364,50.7804,50.7804,0,0,0-23.46887,0,1.70586,1.70586,0,0,0-.02027,3.41161l-.694,2.5623c-5.38483,7.48642-2.75048,19.92224,0,32.42971h24.749C730.24542,359.5373,732.60125,346.59009,727.13413,340.7402Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#ccc",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 90,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "467.19711",
                cy: "184.44606",
                r: "6.82731",
                fill: "#fff",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 95,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M378.58871,476.27128,377.859,473.711h.164a1.70683,1.70683,0,0,0,0-3.41365,50.78067,50.78067,0,0,0-23.46887,0,1.70586,1.70586,0,0,0-.02027,3.41161l-.694,2.5623c-5.38482,7.48643-2.75048,19.92225,0,32.42971h24.749C381.7,495.06838,384.05584,482.12117,378.58871,476.27128Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 96,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "118.6517",
                cy: "319.97715",
                r: "6.82731",
                fill: "#fff",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 101,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M415.58871,476.27128,414.859,473.711h.164a1.70683,1.70683,0,0,0,0-3.41365,50.78067,50.78067,0,0,0-23.46887,0,1.70586,1.70586,0,0,0-.02027,3.41161l-.694,2.5623c-5.38482,7.48643-2.75048,19.92225,0,32.42971h24.749C418.7,495.06838,421.05584,482.12117,415.58871,476.27128Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 102,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "155.6517",
                cy: "319.97715",
                r: "6.82731",
                fill: "#fff",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 107,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M491.42917,476.27128l-.72974-2.56026h.16395a1.70683,1.70683,0,0,0,0-3.41365,50.78067,50.78067,0,0,0-23.46887,0,1.70586,1.70586,0,0,0-.02027,3.41161l-.694,2.5623c-5.38483,7.48643-2.75049,19.92225,0,32.42971h24.74895C494.54047,495.06838,496.8963,482.12117,491.42917,476.27128Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 108,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "231.49216",
                cy: "319.97715",
                r: "6.82731",
                fill: "#fff",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 113,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M833.72127,380.31182l-67.87964-4.5737s-15.728,36.33189-15.47607,41.1339,6.742,3.35558-.003,10.57879-6.745-2.77679-6.745,7.22321-27.27065,232-15.27065,234c21,3,20-1,20-1l32.953-103.24339s59.49733,86.98165,78.047,82.24339,15-11,15-11l-39.74463-80.67467s-5.925-.01089-5.09018-6.66811-4.22193-5.5307-4.22193-5.5307-7.59425-2.36756-4.76876-6.247-4.6745-6.12357-4.6745-6.12357l21.88927-83.7874S853.325,410.44961,833.72127,380.31182Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 114,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M827.7337,241.72077l-23.3632,1.18344-7.7994,13.13989S774.34688,257.674,774.34688,275.674s-15.16944,10.167-8.08472,33.08351,8.69889,27.33382,2.3918,30.62515-15.20806,2.58268-7.25757,7.937,10.95049,7.35433,8.95049,9.35433,37.07086-13.73526,59.53543-3.86763c0,0,6.28453-4.757,4.87455-8.94466s-2.17772-2.56848.20615-6.37809S862.64885,267.414,862.64885,267.414s-5.13648-9.5497-16.21923-9.14486S827.7337,241.72077,827.7337,241.72077Z",
                transform: "translate(-247.63678 -169.52205)",
                id: "shirtMain",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 119,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M909.70621,464.25541l-41.30915,22.41773-31.7187-58.448a23.5,23.5,0,0,1,41.30915-22.41772Zm-40.50526,19.706,37.79347-20.50984-30.76475-56.69021a21.5,21.5,0,1,0-37.79347,20.50984Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#3f3d56",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 124,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M944.99492,505.97516l-60.85047,33.02246a7.841,7.841,0,0,1-9.19977-1.23848L833.85373,498.316a7.8673,7.8673,0,0,1,1.69536-12.58989l91.265-49.52786a7.8673,7.8673,0,0,1,11.47983,5.44l10.67645,55.94859A7.841,7.841,0,0,1,944.99492,505.97516Z",
                transform: "translate(-247.63678 -169.52205)",
                id: "plant",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 129,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("rect", {
                x: "877.70569",
                y: "462.3445",
                width: "7",
                height: "12",
                transform: "translate(-364.32627 307.49732) rotate(-28.48789)",
                fill: "#3f3d56",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 134,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M865.50525,346.96346l-1.78631-62.71433a10.1268,10.1268,0,0,0-10.28016-9.80725h0a10.12681,10.12681,0,0,0-9.94457,10.82063l3.8527,65.08795.67384,39.64855a8.83709,8.83709,0,1,0,10.89991,3.13424Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#a0616a",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 142,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M869.8456,296.86435h0a2.98618,2.98618,0,0,0,.45665-3.59088,3.874,3.874,0,0,1-.45977-2.31806,3.56228,3.56228,0,0,1,.08892-.45908,5.84263,5.84263,0,0,0-1.06983-5.29511c-1.98065-2.37893-2.93671-5.98032-3.35063-9.19075-.45288-3.51306-.72223-7.10346-2.00293-10.406-1.8475-4.76393-6.26235-9.00956-12.28793-6.97759a11.761,11.761,0,0,0-6.11573,4.96966c-3.0048,4.79168-3.03725,10.58532-3.01529,16.12823l-1.08068-2.19024a44.96651,44.96651,0,0,1-3.21772,17.69146c1.3432-.26062,2.29328,1.54383,1.859,2.84125-.43432,1.29749-1.634,2.15015-2.66229,3.05267-1.29618,1.13762-2.51962,2.8273-1.30354,4.5657a3.68181,3.68181,0,0,0,2.55983,1.46607,69.58136,69.58136,0,0,0,28.39508-2.18551c2.04589-.59607,4.23913-1.42377,5.30395-3.2696S871.97633,296.83475,869.8456,296.86435Z",
                transform: "translate(-247.63678 -169.52205)",
                id: "shirtSleeve",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 147,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M850.15333,210.11612c-1.34,4.96.2,12.77.78,17.4.62,4.95-7.96,9.38-12.87,9.66a6.9892,6.9892,0,0,0-1.3-4.6,11.967,11.967,0,0,1-.96,4.61h-40.97c-5.16-9.71-9.55-22.98-4.81-36.7a14.03972,14.03972,0,0,1,9.7-12.15l22.34-7.15c8.81,0,19.62,1.25,24.49,7.81A24.57544,24.57544,0,0,1,850.15333,210.11612Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 152,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "565.19654",
                cy: "43.66408",
                r: "23",
                fill: "#a0616a",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 157,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M841.83332,207.18613v5h-19.9a7.15591,7.15591,0,0,0-1.17-5.61,12.19184,12.19184,0,0,1-1.42,5.61c-11.50684,3.40265-21.1651,3.33743-29.07916,0a4.43084,4.43084,0,0,1-4.43085-4.43084v0c0-15.32986,12.08375-28.24712,27.41035-28.56306a27.99692,27.99692,0,0,1,28.58965,27.99392Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 158,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M837.91182,173.30488c-2.3714-1.10943-5.04126-1.57959-6.91223-3.78283l.70624,3.73236a17.626,17.626,0,0,0-12.55036-1.568,6.73025,6.73025,0,0,0-3.31354,1.71942,4.95654,4.95654,0,0,0-1.31311,4.07953,4.6413,4.6413,0,0,0,2.07727,3.1203,8.96245,8.96245,0,0,0,3.16559,1.07776q6.94309,1.41138,13.88611,2.8227a10.59135,10.59135,0,0,0,5.31964.1698,5.21978,5.21978,0,0,0,3.514-4.51587C842.755,176.97328,840.28322,174.41426,837.91182,173.30488Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 163,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M462.77642,348.18741,353.14828,383.56366a3.87593,3.87593,0,0,1-4.87329-2.49545l-13.86646-42.971a3.87594,3.87594,0,0,1,2.49545-4.87329l109.62814-35.37625a3.87594,3.87594,0,0,1,4.87329,2.49545l13.86646,42.971A3.87594,3.87594,0,0,1,462.77642,348.18741Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#f2f2f2",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 168,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M436.45041,354.08811l-66.65863,21.51028a19.70932,19.70932,0,0,1-24.78164-12.68985l-2.6353-8.16657a19.70945,19.70945,0,0,1,12.68981-24.78178l74.8252-24.14558a19.70945,19.70945,0,0,1,24.78168,12.69A28.30037,28.30037,0,0,1,436.45041,354.08811Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#fff",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 173,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M408.49755,326.29987,364.4354,340.51843a.99845.99845,0,1,1-.61324-1.90041l44.06215-14.21855a.99845.99845,0,0,1,.61324,1.9004Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 178,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M434.07406,329.24023l-66.36718,21.41623a.99845.99845,0,1,1-.61325-1.9004l66.36719-21.41624a.99845.99845,0,0,1,.61324,1.90041Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 183,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M437.34554,339.37826,370.97835,360.7945a.99845.99845,0,1,1-.61324-1.90041l66.36718-21.41623a.99845.99845,0,0,1,.61325,1.9004Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 188,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M437.34554,339.37826,370.97835,360.7945a.99845.99845,0,1,1-.61324-1.90041l66.36718-21.41623a.99845.99845,0,0,1,.61325,1.9004Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 193,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "195.15224",
                cy: "134.86954",
                r: "11.55118",
                id: "plant",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 198,
                    columnNumber: 5
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M442.38282,309.02525a.99833.99833,0,0,1-.79882-.39953l-2.44919-3.26565a.9986.9986,0,1,1,1.59779-1.19827l1.60235,2.1363,4.11542-6.173a.99864.99864,0,0,1,1.66184,1.10789l-4.89839,7.34759a.999.999,0,0,1-.80321.44439Z",
                transform: "translate(-247.63678 -169.52205)",
                fill: "#fff",
                __source: {
                    fileName: "src/components/reusables/CompanyIllustration.jsx",
                    lineNumber: 199,
                    columnNumber: 5
                },
                __self: undefined
            })
        ]
    })
;
_c = CompanyIllustration;
exports.default = CompanyIllustration;
var _c;
$RefreshReg$(_c, "CompanyIllustration");

  $parcel$ReactRefreshHelpers$c2d0.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","react":"4mchR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}]},["emU3S","4Xw3N"], null, "parcelRequire30d9")

//# sourceMappingURL=CompanyAdd.6a687535.js.map
