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

},{"react-refresh/runtime":"aeH4U"}],"31JEo":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "9f5c37405c06effe";
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

},{}],"NYIhw":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$9e1c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$9e1c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _handleRequests = require("../../logic/handleRequests");
var _handleRequestsDefault = parcelHelpers.interopDefault(_handleRequests);
var _formValidation = require("../../logic/formValidation");
var _companySelector = require("../reusables/CompanySelector");
var _companySelectorDefault = parcelHelpers.interopDefault(_companySelector);
var _contactSelector = require("../reusables/ContactSelector");
var _contactSelectorDefault = parcelHelpers.interopDefault(_contactSelector);
var _invoiceIllustrationJsx = require("../reusables/InvoiceIllustration.jsx");
var _invoiceIllustrationJsxDefault = parcelHelpers.interopDefault(_invoiceIllustrationJsx);
// toaster
var _reactToastify = require("react-toastify");
var _reactToastifyCss = require("react-toastify/dist/ReactToastify.css");
var _s = $RefreshSig$();
// end toaster
function InvoiceAdd({ contacts , companies , categories , setIsLoaded , isAuth  }) {
    _s();
    const [selectedCompany, setSelectedCompany] = _react.useState("");
    const [selectedContact, setSelectedContact] = _react.useState("");
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
    const handleCompanyChange = (value)=>{
        setSelectedCompany(value);
    };
    const handleContactChange = (value)=>{
        setSelectedContact(value);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsFetching(true);
        /* Instantiate object with form data */ const formData = {
            reference: e.target.reference.value,
            amount: parseInt(e.target.amount.value),
            company: selectedCompany ? selectedCompany.id : null,
            contact: selectedContact ? selectedContact.id : null,
            received: e.target.date.value,
            dueDate: e.target.dueDate.value,
            paidStatus: e.target.paid.checked,
            category: parseInt(e.target.category.value),
            due: e.target.paid.checked ? 0 : parseInt(e.target.amount.value),
            paid: e.target.paid.checked ? parseInt(e.target.amount.value) : 0
        };
        console.log(formData);
        // Data verification
        let check = _formValidation.invoiceVerify(formData);
        // Posting data if OK
        if (check.ok) {
            const { status , message , dataPackage  } = await _handleRequestsDefault.default("POST", "https://csharpproject.somee.com/api/Invoice", isAuth.jwt, formData);
            setIsFetching(false);
            setIsLoaded(false);
            if (status === 200) sessionStorage.setItem("cogipToast", "success,Success !");
            else sessionStorage.setItem("cogipToast", `error,${message}`);
        } else {
            setIsFetching(false);
            // Handling Errors
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
            fileName: "src/components/invoices/InvoiceAdd.jsx",
            lineNumber: 83,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                className: "invoiceAdd card",
                __source: {
                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                    lineNumber: 84,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ _jsxRuntime.jsx("h2", {
                        __source: {
                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                            lineNumber: 85,
                            columnNumber: 9
                        },
                        __self: this,
                        children: "Fill up the form"
                    }),
                    /*#__PURE__*/ _jsxRuntime.jsxs("form", {
                        className: "invoiceForm",
                        onSubmit: handleSubmit,
                        __source: {
                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                            lineNumber: 86,
                            columnNumber: 9
                        },
                        __self: this,
                        children: [
                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                className: "formContent",
                                __source: {
                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                    lineNumber: 87,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: [
                                    /*#__PURE__*/ _jsxRuntime.jsxs("fieldset", {
                                        __source: {
                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                            lineNumber: 88,
                                            columnNumber: 13
                                        },
                                        __self: this,
                                        children: [
                                            /*#__PURE__*/ _jsxRuntime.jsx("legend", {
                                                __source: {
                                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                    lineNumber: 89,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: "Invoice details"
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                    lineNumber: 90,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "reference",
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 91,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Reference : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                        type: "text",
                                                        name: "reference",
                                                        minLength: "3",
                                                        maxLength: "45",
                                                        required: true,
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 92,
                                                            columnNumber: 17
                                                        },
                                                        __self: this
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "date",
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 101,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Date of reception : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                        type: "date",
                                                        name: "date",
                                                        required: true,
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 102,
                                                            columnNumber: 17
                                                        },
                                                        __self: this
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                    lineNumber: 104,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "company",
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 105,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Company : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsx(_companySelectorDefault.default, {
                                                        companies: companies,
                                                        handleCompanyChange: handleCompanyChange,
                                                        currentCompany: {
                                                            name: ""
                                                        },
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 106,
                                                            columnNumber: 17
                                                        },
                                                        __self: this
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                    lineNumber: 112,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "contact",
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 113,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Contact : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsx(_contactSelectorDefault.default, {
                                                        contacts: contacts,
                                                        companies: companies,
                                                        selectedCompany: selectedCompany,
                                                        handleContactChange: handleContactChange,
                                                        currentContact: {
                                                            name: ""
                                                        },
                                                        name: "company",
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 114,
                                                            columnNumber: 17
                                                        },
                                                        __self: this
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                    lineNumber: 123,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "category",
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 124,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Category : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsxs("select", {
                                                        name: "category",
                                                        id: "category",
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 125,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: [
                                                            /*#__PURE__*/ _jsxRuntime.jsx("option", {
                                                                value: "",
                                                                __source: {
                                                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                                    lineNumber: 126,
                                                                    columnNumber: 19
                                                                },
                                                                __self: this,
                                                                children: "Select a category"
                                                            }),
                                                            categories ? categories.map((category)=>/*#__PURE__*/ _jsxRuntime.jsx("option", {
                                                                    value: category.id,
                                                                    __source: {
                                                                        fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                                        lineNumber: 129,
                                                                        columnNumber: 25
                                                                    },
                                                                    __self: this,
                                                                    children: category.category
                                                                }, category.id)
                                                            ) : null
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxRuntime.jsxs("fieldset", {
                                        __source: {
                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                            lineNumber: 137,
                                            columnNumber: 13
                                        },
                                        __self: this,
                                        children: [
                                            /*#__PURE__*/ _jsxRuntime.jsx("legend", {
                                                __source: {
                                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                    lineNumber: 138,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: "Payement"
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                    lineNumber: 139,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "amount",
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 140,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Amount : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                        type: "number",
                                                        name: "amount",
                                                        required: true,
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 141,
                                                            columnNumber: 17
                                                        },
                                                        __self: this
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                    lineNumber: 143,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("label", {
                                                        htmlFor: "dueDate",
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 144,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Due date : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                        type: "date",
                                                        name: "dueDate",
                                                        required: true,
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 145,
                                                            columnNumber: 17
                                                        },
                                                        __self: this
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                __source: {
                                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                    lineNumber: 147,
                                                    columnNumber: 15
                                                },
                                                __self: this,
                                                children: [
                                                    /*#__PURE__*/ _jsxRuntime.jsx("span", {
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 148,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: "Paid status : "
                                                    }),
                                                    /*#__PURE__*/ _jsxRuntime.jsxs("label", {
                                                        htmlFor: "paid",
                                                        className: "switchToggle",
                                                        __source: {
                                                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                            lineNumber: 149,
                                                            columnNumber: 17
                                                        },
                                                        __self: this,
                                                        children: [
                                                            /*#__PURE__*/ _jsxRuntime.jsx("input", {
                                                                type: "checkbox",
                                                                name: "paid",
                                                                id: "paid",
                                                                className: "switchCheck",
                                                                __source: {
                                                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 19
                                                                },
                                                                __self: this
                                                            }),
                                                            /*#__PURE__*/ _jsxRuntime.jsx("span", {
                                                                className: "slider",
                                                                __source: {
                                                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 19
                                                                },
                                                                __self: this
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxRuntime.jsx("button", {
                                __source: {
                                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                                    lineNumber: 161,
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
                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                            lineNumber: 163,
                            columnNumber: 9
                        },
                        __self: this,
                        children: /*#__PURE__*/ _jsxRuntime.jsx(_invoiceIllustrationJsxDefault.default, {
                            __source: {
                                fileName: "src/components/invoices/InvoiceAdd.jsx",
                                lineNumber: 164,
                                columnNumber: 11
                            },
                            __self: this
                        })
                    }),
                    /*#__PURE__*/ _jsxRuntime.jsx(_reactToastify.ToastContainer, {
                        __source: {
                            fileName: "src/components/invoices/InvoiceAdd.jsx",
                            lineNumber: 166,
                            columnNumber: 9
                        },
                        __self: this
                    })
                ]
            }),
            isFetching ? /*#__PURE__*/ _jsxRuntime.jsx("div", {
                className: "fetching dark",
                __source: {
                    fileName: "src/components/invoices/InvoiceAdd.jsx",
                    lineNumber: 169,
                    columnNumber: 9
                },
                __self: this,
                children: /*#__PURE__*/ _jsxRuntime.jsx("div", {
                    className: "lds-dual-ring",
                    __source: {
                        fileName: "src/components/invoices/InvoiceAdd.jsx",
                        lineNumber: 170,
                        columnNumber: 11
                    },
                    __self: this
                })
            }) : null
        ]
    }));
}
_s(InvoiceAdd, "kv77GDOHb7wSPkf6b+uSYWXzgpU=");
_c = InvoiceAdd;
exports.default = InvoiceAdd;
var _c;
$RefreshReg$(_c, "InvoiceAdd");

  $parcel$ReactRefreshHelpers$9e1c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","react":"4mchR","../../logic/handleRequests":"h0OCH","../../logic/formValidation":"1zt8R","../reusables/CompanySelector":"9S1v8","../reusables/ContactSelector":"cvCAg","react-toastify":"24XKh","react-toastify/dist/ReactToastify.css":"ZJDLk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13","../reusables/InvoiceIllustration.jsx":"5KNUt"}],"1zt8R":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9S1v8":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$1f71 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$1f71.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
function CompanySelector({ companies , handleCompanyChange , currentCompany , name ,  }) {
    return(/*#__PURE__*/ _jsxRuntime.jsxs("select", {
        onChange: (e)=>{
            let company = companies.find((el)=>el.name == e.target.value
            ) ? companies.find((el)=>el.name == e.target.value
            ) : "";
            handleCompanyChange(company);
        },
        defaultValue: currentCompany.name,
        name: name,
        required: true,
        __source: {
            fileName: "src/components/reusables/CompanySelector.jsx",
            lineNumber: 8,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ _jsxRuntime.jsx("option", {
                value: "",
                __source: {
                    fileName: "src/components/reusables/CompanySelector.jsx",
                    lineNumber: 19,
                    columnNumber: 7
                },
                __self: this,
                children: "Select a company"
            }),
            companies.map((company)=>{
                return(/*#__PURE__*/ _jsxRuntime.jsx("option", {
                    value: company.name,
                    __source: {
                        fileName: "src/components/reusables/CompanySelector.jsx",
                        lineNumber: 22,
                        columnNumber: 11
                    },
                    __self: this,
                    children: company.name
                }, company.id));
            })
        ]
    }));
}
_c = CompanySelector;
exports.default = CompanySelector;
var _c;
$RefreshReg$(_c, "CompanySelector");

  $parcel$ReactRefreshHelpers$1f71.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}],"cvCAg":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$de69 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$de69.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
function ContactSelector({ contacts , selectedCompany , currentContact , handleContactChange ,  }) {
    return(/*#__PURE__*/ _jsxRuntime.jsxs("select", {
        onChange: (e)=>{
            handleContactChange(contacts.find((contact)=>`${contact.firstname} ${contact.lastname}` === e.target.value
            ));
        },
        defaultValue: `${currentContact.firstname} ${currentContact.lastname}`,
        required: true,
        __source: {
            fileName: "src/components/reusables/ContactSelector.jsx",
            lineNumber: 8,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ _jsxRuntime.jsx("option", {
                value: "",
                __source: {
                    fileName: "src/components/reusables/ContactSelector.jsx",
                    lineNumber: 20,
                    columnNumber: 7
                },
                __self: this,
                children: selectedCompany == "" ? "Select a company first" : "Select a contact"
            }),
            contacts.map((contact)=>{
                if (selectedCompany == "") return;
                else if (selectedCompany.contacts.includes(contact.id)) return(/*#__PURE__*/ _jsxRuntime.jsx("option", {
                    value: `${contact.firstname} ${contact.lastname}`,
                    __source: {
                        fileName: "src/components/reusables/ContactSelector.jsx",
                        lineNumber: 28,
                        columnNumber: 13
                    },
                    __self: this,
                    children: `${contact.firstname} ${contact.lastname}`
                }, contact.id));
            })
        ]
    }));
}
_c = ContactSelector;
exports.default = ContactSelector;
var _c;
$RefreshReg$(_c, "ContactSelector");

  $parcel$ReactRefreshHelpers$de69.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}],"24XKh":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ZJDLk":[function() {},{}],"5KNUt":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$caac = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$caac.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
const InvoiceIllustration = ()=>{
    return(/*#__PURE__*/ _jsxRuntime.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 717.67004 544.56279",
        __source: {
            fileName: "src/components/reusables/InvoiceIllustration.jsx",
            lineNumber: 3,
            columnNumber: 5
        },
        __self: undefined,
        children: [
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M528.35053,230.24577c-8.74377,15.063,7.72065,40.4432-8.87275,45.71354l1.367-1.367c10.0162-12.32036-10.919-38.397-.90274-50.71737a30.10219,30.10219,0,0,0,3.97967-5.91559",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 4,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M610.23656,451.23117a10.49546,10.49546,0,0,0-10.19069-12.456L578.43258,375.982l-11.96325,15.2489L589.321,449.904a10.55234,10.55234,0,0,0,20.91553,1.32714Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#ffb8b8",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 9,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M515.23087,299.62387s-.67244-22.7304,19.65389-9.70908S599.46694,424.9139,599.46694,424.9139l-22.0235,11.9154L527.44685,325.20578Z",
                transform: "translate(-241.16498 -177.71861)",
                id: "shirtSleeve",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 14,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("polygon", {
                points: "334.034 511.488 323.884 515.825 302.324 478.74 317.305 472.338 334.034 511.488",
                fill: "#ffb6b6",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 19,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M588.0705,704.50277l-7.27882,3.11037-4.2358-6.31688-.391,8.294-19.30517,8.24944a4.71923,4.71923,0,0,1-5.84632-6.857l10.86679-17.235-2.96876-6.94743,16.62909-5.96133Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 23,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("polygon", {
                points: "174.924 524.067 163.9 523.528 160.731 480.749 177.003 481.544 174.924 524.067",
                fill: "#ffb6b6",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 28,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M420.97453,721.17129l-7.9061-.38639-1.0464-7.53326-3.9791,7.28765-20.96886-1.0248a4.71924,4.71924,0,0,1-2.25849-8.72338l17.3103-10.74639.3688-7.54615,17.56156,1.91205Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 32,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M740.917,694.96942a3.56386,3.56386,0,0,0,2.52393-6.20136c-.09328-.35631-.1602-.61214-.25341-.9685a9.57475,9.57475,0,0,1,17.74853-.33644c4.31772,9.84579,9.88142,20.02805,7.26661,30.94266,17.594-38.22733,11.03667-85.50773-15.81028-117.80021-7.37364-3.97084-13.38731-11.09312-15.01445-19.41415,3.642,1.19546,8.14-1.80049,5.37412-5.59841-1.197-1.45023-2.40544-2.88879-3.60237-4.33908,13.65013-14.81754,30.30051,8.10753,15.31045,28.074a114.26429,114.26429,0,0,1,13.024,19.95055,48.04331,48.04331,0,0,1,2.65565-22.34155c2.68222-6.64886,7.77474-12.27553,12.25158-18.044,5.443-7.02861,16.81306-3.91815,17.6387,4.92755-5.06867,1.71965-5.65929,9.07055.16646,10.02036-1.36654,16.48349-11.98172,31.72082-26.73177,39.08465a114.70968,114.70968,0,0,1,6.72483,47.88518c2.43494-19.011,22.77131-23.8125,36.94436-31.49419a5.54912,5.54912,0,0,1,8.516,5.53977,32.05186,32.05186,0,0,0-5.58948,3.01718,4.84411,4.84411,0,0,0,2.33454,8.8211c-7.01111,17.83933-25.46154,29.94946-44.52854,30.06384a117.92872,117.92872,0,0,1-7.70134,23.201l-28.29843.26948c-.10449-.31345-.19885-.63723-.29316-.95078a32.15277,32.15277,0,0,0,7.82585-.5411c-7.00816-8.139-12.40748-12.27406-8.48327-23.76706Z",
                transform: "translate(-241.16498 -177.71861)",
                id: "plant",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 37,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M443.93871,423.70394s-22.419,61.09728-22.78123,67.93447-6.75591,93.29728-12.11811,98.3209-21.75591,82.90815-9,89,53-4,53-4l14-92,4.75591-70.48371s14.4788,165.97637,40.7394,165.48819,58.2606-10.48819,58.2606-10.48819L534.03937,566.95931s.51968-118.99873-8-143S443.93871,423.70394,443.93871,423.70394Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 42,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M510.46306,266.29342l-30.02424,2.75011-4.8369,14.84778s-25.12627,13.799-19.56255,20.068-1.24409,48.51629-1.24409,48.51629l1.53763,34.29291s-1.65173,23.75888-6.59468,29.233-17.87482,18.89736-8.73744,12.47537c32.03858-22.51755,88.03858-3.51755,88.03858-3.51755l-8-49s18.171-80.2247,11-87-13.937-7.63165-13.937-7.63165Z",
                transform: "translate(-241.16498 -177.71861)",
                id: "shirtMain",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 47,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M352.699,421.72134a10.49547,10.49547,0,0,0,7.899-14.02168l50.6395-42.96233-18.55467-5.60111L346.3317,401.75441a10.55234,10.55234,0,0,0,6.3673,19.96693Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#ffb8b8",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 52,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M481.30457,309.34381s9.9774-20.43464-13.90837-16.944-114.46472,96.40252-114.46472,96.40252L368.09,408.733l91.544-81.11205Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#6c63ff",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 57,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M442.4072,274.68222,347.70481,396.00816a10.08064,10.08064,0,0,0,1.74093,14.12657c21.99237,53.3988,87.78748,92.9964,165.1861,128.938a10.07423,10.07423,0,0,0,14.12658-1.741l94.70239-121.32594a10.07419,10.07419,0,0,0-1.741-14.12659c-64.952-36.67587-120.77823-79.16815-165.1861-128.93795A10.0806,10.0806,0,0,0,442.4072,274.68222Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#e6e6e6",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 62,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M616.814,413.24549l-28.82644,36.93038a107.91279,107.91279,0,0,1-151.02282,18.612L356.18,405.73035a5.73345,5.73345,0,0,1-.99832-8.03743l91.51114-117.23753a5.73348,5.73348,0,0,1,8.03933-.983c40.86527,52.76917,95.56689,93.83378,161.09216,125.74238A5.728,5.728,0,0,1,616.814,413.24549Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#fff",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 67,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M440.518,340.91459,421.74459,364.9657a3.05106,3.05106,0,0,1-4.81022-3.75468l18.77338-24.05111a3.05106,3.05106,0,1,1,4.81022,3.75468Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#ccc",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 72,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M475.73121,323.07417l-41.22784,52.81817a3.05106,3.05106,0,0,1-4.81023-3.75468L470.921,319.3195a3.05106,3.05106,0,1,1,4.81022,3.75467Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#ccc",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 77,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "164.25091",
                cy: "213.35969",
                r: "20.09591",
                id: "circle",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 82,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M477.92013,364.8182l-50.63607,64.87132a3.07083,3.07083,0,0,1-4.81022-3.75468l50.63607-64.87131a3.07083,3.07083,0,0,1,4.81022,3.75467Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#ccc",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 83,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M510.7689,350.007l-70.67559,90.54451a3.07083,3.07083,0,0,1-4.81022-3.75468l70.67558-90.5445a3.07083,3.07083,0,0,1,4.81023,3.75467Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#ccc",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 88,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M510.5235,390.26715l-50.63607,64.87132a3.07083,3.07083,0,0,1-4.81022-3.75468l50.63607-64.87131a3.07083,3.07083,0,0,1,4.81022,3.75467Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#ccc",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 93,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M577.5235,398.26715l-50.63607,64.87132a3.07083,3.07083,0,0,1-4.81022-3.75468l50.63607-64.87131a3.07083,3.07083,0,0,1,4.81022,3.75467Z",
                transform: "translate(-241.16498 -177.71861)",
                id: "line",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 98,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M543.37227,375.45593l-70.67559,90.54451a3.07083,3.07083,0,0,1-4.81022-3.75468l70.67559-90.5445a3.07083,3.07083,0,0,1,4.81022,3.75467Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#ccc",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 103,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M460.1263,227.96223A29.82287,29.82287,0,1,0,511.42163,207.277l-.14314-.143c-.2386-.25061-.4772-.50107-.72774-.73974a.01167.01167,0,0,1-.01186-.01194c-.31017-.28629-.62034-.57258-.94245-.84693a29.815,29.815,0,0,0-49.47014,22.42686Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 108,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("circle", {
                cx: "256.13166",
                cy: "57.14378",
                r: "25.00775",
                fill: "#ffb8b8",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 113,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M470.637,241.52685c-2.44434-11.01562,1.08886-23.35693,8.792-30.71093a28.19911,28.19911,0,0,1,29.44824-5.708c.62891.2539,1.25781.53174,1.875.82177l.28711.13526v.042c.05566.03857.11133.0791.167.12012a.95727.95727,0,0,0,.41309.228,15.4171,15.4171,0,0,1,11.63379,4.8496c3.876,4.20557,5.70117,11.002,5.1416,19.13721l-.01758.2544-.2168.13525a85.4635,85.4635,0,0,1-9.11816,5.02734c-10.97852,5.16211-21.001,6.11866-30.63379,2.92041l-.17676-.05859-4.043-6.77588c-.83007,4.67334-.38671,20.17465-5.14941,21.01449l-8.29883-10.96517Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 114,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M417.994,263.30087c8.51008-4.39247-2.43482-20.33442-.23553-29.65523,2.19936-9.32082,18.037-12.31871,19.04593-21.84222s3.38245-19.346,9.6668-26.5725c4.01568-4.61773,9.93278-8.02669,16.02491-7.44829a14.40869,14.40869,0,0,1,12.62827,17.79208c1.73454-2.45776,6.22341-1.92509,7.33449.87052.98788,2.48528-1.19437,5.49567-3.76252,5.71556-3.36046,4.15-7.2086,8.55427-12.47325,9.39143a5.6806,5.6806,0,0,1-4.84076-1.11733c-1.23856-1.18942-1.33489-3.56739.13434-4.45625-6.61615,2.62814-10.49509,9.78155-11.47678,16.83259-.98162,7.051.3765,14.18523,1.27147,21.24777s1.28058,14.492-1.48859,21.05046c-3.27178,7.74885-10.80453,13.30263-19.02519,15.0837s-16.97551.04034-24.41659-3.88148c-7.44108-3.92212-13.64622-9.90941-18.71523-16.62188C396.39747,265.89,408.47784,268.21276,417.994,263.30087Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 119,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M485.35053,233.24577c-8.74377,15.063,7.72065,40.4432-8.87275,45.71354l1.367-1.367c10.0162-12.32036-10.919-38.397-.90274-50.71737a30.10219,30.10219,0,0,0,3.97967-5.91559",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#2f2e41",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 124,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M471.80491,241.29893s7.408-27.65168,39.16341-34.03389c.03575-.01179.15508-.05956.31017-.13106.09538-.0597.21471-.1194.334-.179-.35786-.20285-.70378-.38167-1.06172-.56078a.01167.01167,0,0,1-.01186-.01194c-.31017-.28629-.62034-.57258-.94245-.84693l-.90663.03583S476.82711,200.52519,471.80491,241.29893Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#fd6584",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 129,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("path", {
                d: "M241.165,721.09139a1.18646,1.18646,0,0,0,1.19006,1.19h715.29a1.19,1.19,0,0,0,0-2.38H242.355A1.18651,1.18651,0,0,0,241.165,721.09139Z",
                transform: "translate(-241.16498 -177.71861)",
                fill: "#ccc",
                __source: {
                    fileName: "src/components/reusables/InvoiceIllustration.jsx",
                    lineNumber: 134,
                    columnNumber: 7
                },
                __self: undefined
            })
        ]
    }));
};
_c = InvoiceIllustration;
exports.default = InvoiceIllustration;
var _c;
$RefreshReg$(_c, "InvoiceIllustration");

  $parcel$ReactRefreshHelpers$caac.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}]},["emU3S","31JEo"], null, "parcelRequire30d9")

//# sourceMappingURL=InvoiceAdd.5c06effe.js.map
