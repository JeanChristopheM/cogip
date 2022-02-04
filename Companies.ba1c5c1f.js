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

},{"react-refresh/runtime":"aeH4U"}],"2pvFy":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "8fcabb3eba1c5c1f";
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

},{}],"iAm0Y":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$59b4 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$59b4.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _reactTable = require("react-table");
var _selectFilter = require("../reusables/SelectFilter");
var _selectFilterDefault = parcelHelpers.interopDefault(_selectFilter);
var _dateFormatter = require("../../logic/dateFormatter");
var _reactToastify = require("react-toastify");
var _s = $RefreshSig$();
function Companies({ companies  }) {
    _s();
    _react.useEffect(()=>{
        const message = sessionStorage.getItem("cogipToast");
        if (!message) return;
        _reactToastify.toast.success(message, {
            position: _reactToastify.toast.POSITION.BOTTOM_RIGHT
        });
        sessionStorage.removeItem("cogipToast");
    }, []);
    const navigate = _reactRouterDom.useNavigate();
    const handleAdd = (e)=>{
        navigate(`/${e.target.id}`);
    };
    /* SETTING UP TABLE */ const data = _react.useMemo(()=>{
        let results = [];
        for (let company of companies){
            let obj = {
                icon: company.status == "Supplier" ? /*#__PURE__*/ _jsxRuntime.jsx("i", {
                    className: "fas fa-parachute-box",
                    __source: {
                        fileName: "src/components/companies/Companies.jsx",
                        lineNumber: 29,
                        columnNumber: 13
                    },
                    __self: this
                }) : /*#__PURE__*/ _jsxRuntime.jsx("i", {
                    className: "fas fa-shopping-basket",
                    __source: {
                        fileName: "src/components/companies/Companies.jsx",
                        lineNumber: 31,
                        columnNumber: 13
                    },
                    __self: this
                }),
                col1: company.name,
                col2: company.status,
                col3: company.vat,
                col4: _dateFormatter.dateFormatter(company.added),
                col5: company.country,
                col6: company.zip.toString(),
                id: company.id
            };
            results.push(obj);
        }
        return results;
    }, [
        companies
    ]);
    const columns = _react.useMemo(()=>[
            {
                Header: "",
                accessor: "icon",
                className: "companyIcon",
                disableSortBy: true,
                disableFilters: true
            },
            {
                Header: "Name",
                accessor: "col1",
                className: "companyName",
                disableFilters: true
            },
            {
                Header: "Status",
                accessor: "col2",
                className: "companyType",
                Filter: _selectFilterDefault.default,
                filter: "includes"
            },
            {
                Header: "VAT",
                accessor: "col3",
                className: "companyVat",
                disableFilters: true
            },
            {
                Header: "Added",
                accessor: "col4",
                className: "companyAdded",
                disableFilters: true
            },
            {
                Header: "Country",
                accessor: "col5",
                className: "companyCountry",
                Filter: _selectFilterDefault.default,
                filter: "includes"
            },
            {
                Header: "ZIP",
                accessor: "col6",
                className: "companyZIP",
                Filter: _selectFilterDefault.default,
                filter: "includes"
            },
            {
                Header: "ID",
                accessor: "id",
                className: "companyId",
                disableFilters: true
            }, 
        ]
    , [
        companies
    ]);
    const { getTableProps , getTableBodyProps , headerGroups , rows , prepareRow  } = _reactTable.useTable({
        columns,
        data,
        initialState: {
            sortBy: [
                {
                    id: "col1",
                    desc: false
                }
            ],
            hiddenColumns: [
                "id"
            ]
        }
    }, _reactTable.useFilters, _reactTable.useSortBy);
    return(/*#__PURE__*/ _jsxRuntime.jsxs("main", {
        __source: {
            fileName: "src/components/companies/Companies.jsx",
            lineNumber: 117,
            columnNumber: 5
        },
        __self: this,
        children: [
            /*#__PURE__*/ _jsxRuntime.jsxs("section", {
                className: "companies card",
                __source: {
                    fileName: "src/components/companies/Companies.jsx",
                    lineNumber: 118,
                    columnNumber: 7
                },
                __self: this,
                children: [
                    /*#__PURE__*/ _jsxRuntime.jsxs("h2", {
                        __source: {
                            fileName: "src/components/companies/Companies.jsx",
                            lineNumber: 119,
                            columnNumber: 9
                        },
                        __self: this,
                        children: [
                            "Companies",
                            /*#__PURE__*/ _jsxRuntime.jsx("button", {
                                type: "button",
                                id: "companyAdd",
                                onClick: handleAdd,
                                style: {
                                    padding: "0 .5rem"
                                },
                                __source: {
                                    fileName: "src/components/companies/Companies.jsx",
                                    lineNumber: 121,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: "+"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxRuntime.jsxs("table", {
                        ...getTableProps(),
                        className: "table",
                        __source: {
                            fileName: "src/components/companies/Companies.jsx",
                            lineNumber: 131,
                            columnNumber: 9
                        },
                        __self: this,
                        children: [
                            /*#__PURE__*/ _jsxRuntime.jsxs("thead", {
                                __source: {
                                    fileName: "src/components/companies/Companies.jsx",
                                    lineNumber: 132,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: [
                                    headerGroups.map((headerGroup)=>/*#__PURE__*/ _jsxRuntime.jsx("tr", {
                                            ...headerGroup.getHeaderGroupProps(),
                                            __source: {
                                                fileName: "src/components/companies/Companies.jsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            },
                                            __self: this,
                                            children: headerGroup.headers.map((column)=>/*#__PURE__*/ _jsxRuntime.jsx("th", {
                                                    ...column.getHeaderProps(column.getSortByToggleProps({
                                                        className: column.className
                                                    })),
                                                    __source: {
                                                        fileName: "src/components/companies/Companies.jsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    },
                                                    __self: this,
                                                    children: /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                                        className: "thContainer",
                                                        __source: {
                                                            fileName: "src/components/companies/Companies.jsx",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        },
                                                        __self: this,
                                                        children: [
                                                            column.render("Header"),
                                                            /*#__PURE__*/ _jsxRuntime.jsx("span", {
                                                                __source: {
                                                                    fileName: "src/components/companies/Companies.jsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 23
                                                                },
                                                                __self: this,
                                                                children: column.isSorted ? column.isSortedDesc ? /*#__PURE__*/ _jsxRuntime.jsx("i", {
                                                                    className: "fas fa-arrow-alt-circle-up sorted",
                                                                    __source: {
                                                                        fileName: "src/components/companies/Companies.jsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 29
                                                                    },
                                                                    __self: this
                                                                }) : /*#__PURE__*/ _jsxRuntime.jsx("i", {
                                                                    className: "fas fa-arrow-alt-circle-down sorted",
                                                                    __source: {
                                                                        fileName: "src/components/companies/Companies.jsx",
                                                                        lineNumber: 150,
                                                                        columnNumber: 29
                                                                    },
                                                                    __self: this
                                                                }) : /*#__PURE__*/ _jsxRuntime.jsx("i", {
                                                                    className: "fas fa-arrow-alt-circle-down unSorted",
                                                                    __source: {
                                                                        fileName: "src/components/companies/Companies.jsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 27
                                                                    },
                                                                    __self: this
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            )
                                        })
                                    ),
                                    headerGroups.map((headerGroup)=>/*#__PURE__*/ _jsxRuntime.jsx("tr", {
                                            ...headerGroup.getHeaderGroupProps(),
                                            className: "filtersRow",
                                            __source: {
                                                fileName: "src/components/companies/Companies.jsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            },
                                            __self: this,
                                            children: headerGroup.headers.map((column)=>/*#__PURE__*/ _jsxRuntime.jsx("th", {
                                                    ...column.getHeaderProps({
                                                        className: column.className
                                                    }),
                                                    __source: {
                                                        fileName: "src/components/companies/Companies.jsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    },
                                                    __self: this,
                                                    children: /*#__PURE__*/ _jsxRuntime.jsx("div", {
                                                        className: "filterContainer",
                                                        __source: {
                                                            fileName: "src/components/companies/Companies.jsx",
                                                            lineNumber: 173,
                                                            columnNumber: 21
                                                        },
                                                        __self: this,
                                                        children: column.canFilter ? column.render("Filter") : null
                                                    })
                                                }, column.id)
                                            )
                                        })
                                    )
                                ]
                            }),
                            /*#__PURE__*/ _jsxRuntime.jsx("tbody", {
                                ...getTableBodyProps(),
                                __source: {
                                    fileName: "src/components/companies/Companies.jsx",
                                    lineNumber: 181,
                                    columnNumber: 11
                                },
                                __self: this,
                                children: rows.map((row)=>{
                                    prepareRow(row);
                                    return(/*#__PURE__*/ _jsxRuntime.jsx("tr", {
                                        ...row.getRowProps(),
                                        __source: {
                                            fileName: "src/components/companies/Companies.jsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        },
                                        __self: this,
                                        children: row.cells.map((cell)=>{
                                            return(/*#__PURE__*/ _jsxRuntime.jsx("td", {
                                                ...cell.getCellProps({
                                                    className: cell.column.className
                                                }),
                                                onClick: cell.column.Header == "Name" ? ()=>{
                                                    navigate(`/company/${cell.row.allCells[7].value}`);
                                                } : ()=>{
                                                },
                                                __source: {
                                                    fileName: "src/components/companies/Companies.jsx",
                                                    lineNumber: 188,
                                                    columnNumber: 23
                                                },
                                                __self: this,
                                                children: cell.render("Cell")
                                            }));
                                        })
                                    }));
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxRuntime.jsx(_reactToastify.ToastContainer, {
                __source: {
                    fileName: "src/components/companies/Companies.jsx",
                    lineNumber: 212,
                    columnNumber: 7
                },
                __self: this
            })
        ]
    }));
}
_s(Companies, "ZyiTlFu2WBY8JAd5iUi+fvBsVQY=", false, function() {
    return [
        _reactRouterDom.useNavigate,
        _reactTable.useTable
    ];
});
_c = Companies;
exports.default = Companies;
var _c;
$RefreshReg$(_c, "Companies");

  $parcel$ReactRefreshHelpers$59b4.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","react":"4mchR","react-router-dom":"16kZP","react-table":"5fjQA","../reusables/SelectFilter":"71dM4","../../logic/dateFormatter":"7VZgQ","react-toastify":"24XKh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}],"5fjQA":[function(require,module,exports) {
module.exports = require('./dist/react-table.development.js');

},{"./dist/react-table.development.js":"1xw01"}],"1xw01":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) : typeof define === 'function' && define.amd ? define([
        'exports',
        'react'
    ], factory) : (global = global || self, factory(global.ReactTable = {
    }, global.React));
})(this, function(exports, React) {
    'use strict';
    React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            reject(error);
            return;
        }
        if (info.done) resolve(value);
        else Promise.resolve(value).then(_next, _throw);
    }
    function _asyncToGenerator(fn) {
        return function() {
            var self = this, args = arguments;
            return new Promise(function(resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }
                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }
                _next(undefined);
            });
        };
    }
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
    function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (typeof res !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
    }
    function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
    }
    var renderErr = 'Renderer Error ☝️';
    var actions = {
        init: 'init'
    };
    var defaultRenderer = function defaultRenderer(_ref) {
        var _ref$value = _ref.value, value = _ref$value === void 0 ? '' : _ref$value;
        return value;
    };
    var emptyRenderer = function emptyRenderer() {
        return React.createElement(React.Fragment, null, "\xA0");
    };
    var defaultColumn1 = {
        Cell: defaultRenderer,
        width: 150,
        minWidth: 0,
        maxWidth: Number.MAX_SAFE_INTEGER
    };
    function mergeProps() {
        for(var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++)propList[_key] = arguments[_key];
        return propList.reduce(function(props, next) {
            var style = next.style, className = next.className, rest = _objectWithoutPropertiesLoose(next, [
                "style",
                "className"
            ]);
            props = _extends({
            }, props, {
            }, rest);
            if (style) props.style = props.style ? _extends({
            }, props.style || {
            }, {
            }, style || {
            }) : style;
            if (className) props.className = props.className ? props.className + ' ' + className : className;
            if (props.className === '') delete props.className;
            return props;
        }, {
        });
    }
    function handlePropGetter(prevProps, userProps, meta) {
        // Handle a lambda, pass it the previous props
        if (typeof userProps === 'function') return handlePropGetter({
        }, userProps(prevProps, meta));
         // Handle an array, merge each item as separate props
        if (Array.isArray(userProps)) return mergeProps.apply(void 0, [
            prevProps
        ].concat(userProps));
         // Handle an object by default, merge the two objects
        return mergeProps(prevProps, userProps);
    }
    var makePropGetter = function makePropGetter(hooks, meta) {
        if (meta === void 0) meta = {
        };
        return function(userProps) {
            if (userProps === void 0) userProps = {
            };
            return [].concat(hooks, [
                userProps
            ]).reduce(function(prev, next) {
                return handlePropGetter(prev, next, _extends({
                }, meta, {
                    userProps: userProps
                }));
            }, {
            });
        };
    };
    var reduceHooks = function reduceHooks(hooks, initial, meta, allowUndefined) {
        if (meta === void 0) meta = {
        };
        return hooks.reduce(function(prev, next) {
            var nextValue = next(prev, meta);
            if (!allowUndefined && typeof nextValue === 'undefined') {
                console.info(next);
                throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
            }
            return nextValue;
        }, initial);
    };
    var loopHooks = function loopHooks(hooks, context, meta) {
        if (meta === void 0) meta = {
        };
        return hooks.forEach(function(hook) {
            var nextValue = hook(context, meta);
            if (typeof nextValue !== 'undefined') {
                console.info(hook, nextValue);
                throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
            }
        });
    };
    function ensurePluginOrder(plugins, befores, pluginName, afters) {
        if (afters) throw new Error("Defining plugins in the \"after\" section of ensurePluginOrder is no longer supported (see plugin " + pluginName + ")");
        var pluginIndex = plugins.findIndex(function(plugin) {
            return plugin.pluginName === pluginName;
        });
        if (pluginIndex === -1) throw new Error("The plugin \"" + pluginName + "\" was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  " + pluginName + ".pluginName = '" + pluginName + "'\n");
        befores.forEach(function(before) {
            var beforeIndex = plugins.findIndex(function(plugin) {
                return plugin.pluginName === before;
            });
            if (beforeIndex > -1 && beforeIndex > pluginIndex) throw new Error("React Table: The " + pluginName + " plugin hook must be placed after the " + before + " plugin hook!");
        });
    }
    function functionalUpdate(updater, old) {
        return typeof updater === 'function' ? updater(old) : updater;
    }
    function useGetLatest(obj) {
        var ref = React.useRef();
        ref.current = obj;
        return React.useCallback(function() {
            return ref.current;
        }, []);
    } // SSR has issues with useLayoutEffect still, so use useEffect during SSR
    var safeUseLayoutEffect = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
    function useMountedLayoutEffect(fn, deps) {
        var mountedRef = React.useRef(false);
        safeUseLayoutEffect(function() {
            if (mountedRef.current) fn();
            mountedRef.current = true; // eslint-disable-next-line
        }, deps);
    }
    function useAsyncDebounce(defaultFn, defaultWait) {
        if (defaultWait === void 0) defaultWait = 0;
        var debounceRef = React.useRef({
        });
        var getDefaultFn = useGetLatest(defaultFn);
        var getDefaultWait = useGetLatest(defaultWait);
        return React.useCallback(/*#__PURE__*/ function() {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
                var _len2, args, _key2, _args2 = arguments;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while(true)switch(_context2.prev = _context2.next){
                        case 0:
                            for(_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = _args2[_key2];
                            if (!debounceRef.current.promise) debounceRef.current.promise = new Promise(function(resolve, reject) {
                                debounceRef.current.resolve = resolve;
                                debounceRef.current.reject = reject;
                            });
                            if (debounceRef.current.timeout) clearTimeout(debounceRef.current.timeout);
                            debounceRef.current.timeout = setTimeout(/*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while(true)switch(_context.prev = _context.next){
                                        case 0:
                                            delete debounceRef.current.timeout;
                                            _context.prev = 1;
                                            _context.t0 = debounceRef.current;
                                            _context.next = 5;
                                            return getDefaultFn().apply(void 0, args);
                                        case 5:
                                            _context.t1 = _context.sent;
                                            _context.t0.resolve.call(_context.t0, _context.t1);
                                            _context.next = 12;
                                            break;
                                        case 9:
                                            _context.prev = 9;
                                            _context.t2 = _context["catch"](1);
                                            debounceRef.current.reject(_context.t2);
                                        case 12:
                                            _context.prev = 12;
                                            delete debounceRef.current.promise;
                                            return _context.finish(12);
                                        case 15:
                                        case "end":
                                            return _context.stop();
                                    }
                                }, _callee, null, [
                                    [
                                        1,
                                        9,
                                        12,
                                        15
                                    ]
                                ]);
                            })), getDefaultWait());
                            return _context2.abrupt("return", debounceRef.current.promise);
                        case 5:
                        case "end":
                            return _context2.stop();
                    }
                }, _callee2);
            }));
            return function() {
                return _ref2.apply(this, arguments);
            };
        }(), [
            getDefaultFn,
            getDefaultWait
        ]);
    }
    function makeRenderer(instance, column, meta) {
        if (meta === void 0) meta = {
        };
        return function(type, userProps) {
            if (userProps === void 0) userProps = {
            };
            var Comp = typeof type === 'string' ? column[type] : type;
            if (typeof Comp === 'undefined') {
                console.info(column);
                throw new Error(renderErr);
            }
            return flexRender(Comp, _extends({
            }, instance, {
                column: column
            }, meta, {
            }, userProps));
        };
    }
    function flexRender(Comp, props) {
        return isReactComponent(Comp) ? React.createElement(Comp, props) : Comp;
    }
    function isReactComponent(component) {
        return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
    }
    function isClassComponent(component) {
        return typeof component === 'function' && (function() {
            var proto = Object.getPrototypeOf(component);
            return proto.prototype && proto.prototype.isReactComponent;
        })();
    }
    function isExoticComponent(component) {
        return typeof component === 'object' && typeof component.$$typeof === 'symbol' && [
            'react.memo',
            'react.forward_ref'
        ].includes(component.$$typeof.description);
    }
    function linkColumnStructure(columns, parent, depth) {
        if (depth === void 0) depth = 0;
        return columns.map(function(column) {
            column = _extends({
            }, column, {
                parent: parent,
                depth: depth
            });
            assignColumnAccessor(column);
            if (column.columns) column.columns = linkColumnStructure(column.columns, column, depth + 1);
            return column;
        });
    }
    function flattenColumns(columns) {
        return flattenBy(columns, 'columns');
    }
    function assignColumnAccessor(column) {
        // First check for string accessor
        var id = column.id, accessor = column.accessor, Header = column.Header;
        if (typeof accessor === 'string') {
            id = id || accessor;
            var accessorPath = accessor.split('.');
            accessor = function accessor(row) {
                return getBy(row, accessorPath);
            };
        }
        if (!id && typeof Header === 'string' && Header) id = Header;
        if (!id && column.columns) {
            console.error(column);
            throw new Error('A column ID (or unique "Header" value) is required!');
        }
        if (!id) {
            console.error(column);
            throw new Error('A column ID (or string accessor) is required!');
        }
        Object.assign(column, {
            id: id,
            accessor: accessor
        });
        return column;
    }
    function decorateColumn(column, userDefaultColumn) {
        if (!userDefaultColumn) throw new Error();
        Object.assign(column, _extends({
            // Make sure there is a fallback header, just in case
            Header: emptyRenderer,
            Footer: emptyRenderer
        }, defaultColumn1, {
        }, userDefaultColumn, {
        }, column));
        Object.assign(column, {
            originalWidth: column.width
        });
        return column;
    } // Build the header groups from the bottom up
    function makeHeaderGroups(allColumns, defaultColumn, additionalHeaderProperties) {
        if (additionalHeaderProperties === void 0) additionalHeaderProperties = function additionalHeaderProperties() {
            return {
            };
        };
        var headerGroups = [];
        var scanColumns = allColumns;
        var uid = 0;
        var getUID = function getUID() {
            return uid++;
        };
        var _loop = function _loop() {
            // The header group we are creating
            var headerGroup = {
                headers: []
            }; // The parent columns we're going to scan next
            var parentColumns = [];
            var hasParents = scanColumns.some(function(d) {
                return d.parent;
            }); // Scan each column for parents
            scanColumns.forEach(function(column) {
                // What is the latest (last) parent column?
                var latestParentColumn = [].concat(parentColumns).reverse()[0];
                var newParent;
                if (hasParents) {
                    // If the column has a parent, add it if necessary
                    if (column.parent) newParent = _extends({
                    }, column.parent, {
                        originalId: column.parent.id,
                        id: column.parent.id + "_" + getUID(),
                        headers: [
                            column
                        ]
                    }, additionalHeaderProperties(column));
                    else {
                        // If other columns have parents, we'll need to add a place holder if necessary
                        var originalId = column.id + "_placeholder";
                        newParent = decorateColumn(_extends({
                            originalId: originalId,
                            id: column.id + "_placeholder_" + getUID(),
                            placeholderOf: column,
                            headers: [
                                column
                            ]
                        }, additionalHeaderProperties(column)), defaultColumn);
                    } // If the resulting parent columns are the same, just add
                    // the column and increment the header span
                    if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) latestParentColumn.headers.push(column);
                    else parentColumns.push(newParent);
                }
                headerGroup.headers.push(column);
            });
            headerGroups.push(headerGroup); // Start scanning the parent columns
            scanColumns = parentColumns;
        };
        while(scanColumns.length)_loop();
        return headerGroups.reverse();
    }
    var pathObjCache = new Map();
    function getBy(obj, path, def) {
        if (!path) return obj;
        var cacheKey = typeof path === 'function' ? path : JSON.stringify(path);
        var pathObj1 = pathObjCache.get(cacheKey) || function() {
            var pathObj = makePathArray(path);
            pathObjCache.set(cacheKey, pathObj);
            return pathObj;
        }();
        var val;
        try {
            val = pathObj1.reduce(function(cursor, pathPart) {
                return cursor[pathPart];
            }, obj);
        } catch (e) {
        }
        return typeof val !== 'undefined' ? val : def;
    }
    function getFirstDefined() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        for(var i = 0; i < args.length; i += 1){
            if (typeof args[i] !== 'undefined') return args[i];
        }
    }
    function isFunction(a) {
        if (typeof a === 'function') return a;
    }
    function flattenBy(arr1, key) {
        var flat = [];
        var recurse1 = function recurse(arr) {
            arr.forEach(function(d) {
                if (!d[key]) flat.push(d);
                else recurse(d[key]);
            });
        };
        recurse1(arr1);
        return flat;
    }
    function expandRows(rows, _ref) {
        var manualExpandedKey = _ref.manualExpandedKey, expanded = _ref.expanded, _ref$expandSubRows = _ref.expandSubRows, expandSubRows = _ref$expandSubRows === void 0 ? true : _ref$expandSubRows;
        var expandedRows = [];
        var handleRow1 = function handleRow(row1, addToExpandedRows) {
            if (addToExpandedRows === void 0) addToExpandedRows = true;
            row1.isExpanded = row1.original && row1.original[manualExpandedKey] || expanded[row1.id];
            row1.canExpand = row1.subRows && !!row1.subRows.length;
            if (addToExpandedRows) expandedRows.push(row1);
            if (row1.subRows && row1.subRows.length && row1.isExpanded) row1.subRows.forEach(function(row) {
                return handleRow(row, expandSubRows);
            });
        };
        rows.forEach(function(row) {
            return handleRow1(row);
        });
        return expandedRows;
    }
    function getFilterMethod(filter, userFilterTypes, filterTypes) {
        return isFunction(filter) || userFilterTypes[filter] || filterTypes[filter] || filterTypes.text;
    }
    function shouldAutoRemoveFilter(autoRemove, value, column) {
        return autoRemove ? autoRemove(value, column) : typeof value === 'undefined';
    }
    function unpreparedAccessWarning() {
        throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
    }
    var passiveSupported = null;
    function passiveEventSupported() {
        // memoize support to avoid adding multiple test events
        if (typeof passiveSupported === 'boolean') return passiveSupported;
        var supported = false;
        try {
            var options = {
                get passive () {
                    supported = true;
                    return false;
                }
            };
            window.addEventListener('test', null, options);
            window.removeEventListener('test', null, options);
        } catch (err) {
            supported = false;
        }
        passiveSupported = supported;
        return passiveSupported;
    } //
    var reOpenBracket = /\[/g;
    var reCloseBracket = /\]/g;
    function makePathArray(obj) {
        return flattenDeep(obj) // remove all periods in parts
        .map(function(d) {
            return String(d).replace('.', '_');
        }) // join parts using period
        .join('.') // replace brackets with periods
        .replace(reOpenBracket, '.').replace(reCloseBracket, '') // split it back out on periods
        .split('.');
    }
    function flattenDeep(arr, newArr) {
        if (newArr === void 0) newArr = [];
        if (!Array.isArray(arr)) newArr.push(arr);
        else for(var i = 0; i < arr.length; i += 1)flattenDeep(arr[i], newArr);
        return newArr;
    }
    var defaultGetTableProps = function defaultGetTableProps(props) {
        return _extends({
            role: 'table'
        }, props);
    };
    var defaultGetTableBodyProps = function defaultGetTableBodyProps(props) {
        return _extends({
            role: 'rowgroup'
        }, props);
    };
    var defaultGetHeaderProps = function defaultGetHeaderProps(props, _ref) {
        var column = _ref.column;
        return _extends({
            key: "header_" + column.id,
            colSpan: column.totalVisibleHeaderCount,
            role: 'columnheader'
        }, props);
    };
    var defaultGetFooterProps = function defaultGetFooterProps(props, _ref2) {
        var column = _ref2.column;
        return _extends({
            key: "footer_" + column.id,
            colSpan: column.totalVisibleHeaderCount
        }, props);
    };
    var defaultGetHeaderGroupProps = function defaultGetHeaderGroupProps(props, _ref3) {
        var index = _ref3.index;
        return _extends({
            key: "headerGroup_" + index,
            role: 'row'
        }, props);
    };
    var defaultGetFooterGroupProps = function defaultGetFooterGroupProps(props, _ref4) {
        var index = _ref4.index;
        return _extends({
            key: "footerGroup_" + index
        }, props);
    };
    var defaultGetRowProps = function defaultGetRowProps(props, _ref5) {
        var row = _ref5.row;
        return _extends({
            key: "row_" + row.id,
            role: 'row'
        }, props);
    };
    var defaultGetCellProps = function defaultGetCellProps(props, _ref6) {
        var cell = _ref6.cell;
        return _extends({
            key: "cell_" + cell.row.id + "_" + cell.column.id,
            role: 'cell'
        }, props);
    };
    function makeDefaultPluginHooks() {
        return {
            useOptions: [],
            stateReducers: [],
            useControlledState: [],
            columns: [],
            columnsDeps: [],
            allColumns: [],
            allColumnsDeps: [],
            accessValue: [],
            materializedColumns: [],
            materializedColumnsDeps: [],
            useInstanceAfterData: [],
            visibleColumns: [],
            visibleColumnsDeps: [],
            headerGroups: [],
            headerGroupsDeps: [],
            useInstanceBeforeDimensions: [],
            useInstance: [],
            prepareRow: [],
            getTableProps: [
                defaultGetTableProps
            ],
            getTableBodyProps: [
                defaultGetTableBodyProps
            ],
            getHeaderGroupProps: [
                defaultGetHeaderGroupProps
            ],
            getFooterGroupProps: [
                defaultGetFooterGroupProps
            ],
            getHeaderProps: [
                defaultGetHeaderProps
            ],
            getFooterProps: [
                defaultGetFooterProps
            ],
            getRowProps: [
                defaultGetRowProps
            ],
            getCellProps: [
                defaultGetCellProps
            ],
            useFinalInstance: []
        };
    }
    actions.resetHiddenColumns = 'resetHiddenColumns';
    actions.toggleHideColumn = 'toggleHideColumn';
    actions.setHiddenColumns = 'setHiddenColumns';
    actions.toggleHideAllColumns = 'toggleHideAllColumns';
    var useColumnVisibility = function useColumnVisibility(hooks) {
        hooks.getToggleHiddenProps = [
            defaultGetToggleHiddenProps
        ];
        hooks.getToggleHideAllColumnsProps = [
            defaultGetToggleHideAllColumnsProps
        ];
        hooks.stateReducers.push(reducer1);
        hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
        hooks.headerGroupsDeps.push(function(deps, _ref) {
            var instance = _ref.instance;
            return [].concat(deps, [
                instance.state.hiddenColumns
            ]);
        });
        hooks.useInstance.push(useInstance);
    };
    useColumnVisibility.pluginName = 'useColumnVisibility';
    var defaultGetToggleHiddenProps = function defaultGetToggleHiddenProps(props, _ref2) {
        var column = _ref2.column;
        return [
            props,
            {
                onChange: function onChange(e) {
                    column.toggleHidden(!e.target.checked);
                },
                style: {
                    cursor: 'pointer'
                },
                checked: column.isVisible,
                title: 'Toggle Column Visible'
            }
        ];
    };
    var defaultGetToggleHideAllColumnsProps = function defaultGetToggleHideAllColumnsProps(props, _ref3) {
        var instance = _ref3.instance;
        return [
            props,
            {
                onChange: function onChange(e) {
                    instance.toggleHideAllColumns(!e.target.checked);
                },
                style: {
                    cursor: 'pointer'
                },
                checked: !instance.allColumnsHidden && !instance.state.hiddenColumns.length,
                title: 'Toggle All Columns Hidden',
                indeterminate: !instance.allColumnsHidden && instance.state.hiddenColumns.length
            }
        ];
    };
    function reducer1(state, action, previousState, instance) {
        if (action.type === actions.init) return _extends({
            hiddenColumns: []
        }, state);
        if (action.type === actions.resetHiddenColumns) return _extends({
        }, state, {
            hiddenColumns: instance.initialState.hiddenColumns || []
        });
        if (action.type === actions.toggleHideColumn) {
            var should = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.includes(action.columnId);
            var hiddenColumns = should ? [].concat(state.hiddenColumns, [
                action.columnId
            ]) : state.hiddenColumns.filter(function(d) {
                return d !== action.columnId;
            });
            return _extends({
            }, state, {
                hiddenColumns: hiddenColumns
            });
        }
        if (action.type === actions.setHiddenColumns) return _extends({
        }, state, {
            hiddenColumns: functionalUpdate(action.value, state.hiddenColumns)
        });
        if (action.type === actions.toggleHideAllColumns) {
            var shouldAll = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.length;
            return _extends({
            }, state, {
                hiddenColumns: shouldAll ? instance.allColumns.map(function(d) {
                    return d.id;
                }) : []
            });
        }
    }
    function useInstanceBeforeDimensions(instance) {
        var headers = instance.headers, hiddenColumns = instance.state.hiddenColumns;
        var isMountedRef = React.useRef(false);
        isMountedRef.current;
        var handleColumn1 = function handleColumn(column, parentVisible) {
            column.isVisible = parentVisible && !hiddenColumns.includes(column.id);
            var totalVisibleHeaderCount = 0;
            if (column.headers && column.headers.length) column.headers.forEach(function(subColumn) {
                return totalVisibleHeaderCount += handleColumn(subColumn, column.isVisible);
            });
            else totalVisibleHeaderCount = column.isVisible ? 1 : 0;
            column.totalVisibleHeaderCount = totalVisibleHeaderCount;
            return totalVisibleHeaderCount;
        };
        var totalVisibleHeaderCount1 = 0;
        headers.forEach(function(subHeader) {
            return totalVisibleHeaderCount1 += handleColumn1(subHeader, true);
        });
    }
    function useInstance(instance) {
        var columns = instance.columns, flatHeaders = instance.flatHeaders, dispatch = instance.dispatch, allColumns = instance.allColumns, getHooks = instance.getHooks, hiddenColumns = instance.state.hiddenColumns, _instance$autoResetHi = instance.autoResetHiddenColumns, autoResetHiddenColumns = _instance$autoResetHi === void 0 ? true : _instance$autoResetHi;
        var getInstance = useGetLatest(instance);
        var allColumnsHidden = allColumns.length === hiddenColumns.length;
        var toggleHideColumn = React.useCallback(function(columnId, value) {
            return dispatch({
                type: actions.toggleHideColumn,
                columnId: columnId,
                value: value
            });
        }, [
            dispatch
        ]);
        var setHiddenColumns = React.useCallback(function(value) {
            return dispatch({
                type: actions.setHiddenColumns,
                value: value
            });
        }, [
            dispatch
        ]);
        var toggleHideAllColumns = React.useCallback(function(value) {
            return dispatch({
                type: actions.toggleHideAllColumns,
                value: value
            });
        }, [
            dispatch
        ]);
        var getToggleHideAllColumnsProps = makePropGetter(getHooks().getToggleHideAllColumnsProps, {
            instance: getInstance()
        });
        flatHeaders.forEach(function(column) {
            column.toggleHidden = function(value) {
                dispatch({
                    type: actions.toggleHideColumn,
                    columnId: column.id,
                    value: value
                });
            };
            column.getToggleHiddenProps = makePropGetter(getHooks().getToggleHiddenProps, {
                instance: getInstance(),
                column: column
            });
        });
        var getAutoResetHiddenColumns = useGetLatest(autoResetHiddenColumns);
        useMountedLayoutEffect(function() {
            if (getAutoResetHiddenColumns()) dispatch({
                type: actions.resetHiddenColumns
            });
        }, [
            dispatch,
            columns
        ]);
        Object.assign(instance, {
            allColumnsHidden: allColumnsHidden,
            toggleHideColumn: toggleHideColumn,
            setHiddenColumns: setHiddenColumns,
            toggleHideAllColumns: toggleHideAllColumns,
            getToggleHideAllColumnsProps: getToggleHideAllColumnsProps
        });
    }
    var defaultInitialState = {
    };
    var defaultColumnInstance = {
    };
    var defaultReducer = function defaultReducer(state, action, prevState) {
        return state;
    };
    var defaultGetSubRows = function defaultGetSubRows(row, index) {
        return row.subRows || [];
    };
    var defaultGetRowId = function defaultGetRowId(row, index, parent) {
        return "" + (parent ? [
            parent.id,
            index
        ].join('.') : index);
    };
    var defaultUseControlledState = function defaultUseControlledState(d) {
        return d;
    };
    function applyDefaults(props) {
        var _props$initialState = props.initialState, initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState, _props$defaultColumn = props.defaultColumn, defaultColumn = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn, _props$getSubRows = props.getSubRows, getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows, _props$getRowId = props.getRowId, getRowId = _props$getRowId === void 0 ? defaultGetRowId : _props$getRowId, _props$stateReducer = props.stateReducer, stateReducer = _props$stateReducer === void 0 ? defaultReducer : _props$stateReducer, _props$useControlledS = props.useControlledState, useControlledState = _props$useControlledS === void 0 ? defaultUseControlledState : _props$useControlledS, rest = _objectWithoutPropertiesLoose(props, [
            "initialState",
            "defaultColumn",
            "getSubRows",
            "getRowId",
            "stateReducer",
            "useControlledState"
        ]);
        return _extends({
        }, rest, {
            initialState: initialState,
            defaultColumn: defaultColumn,
            getSubRows: getSubRows,
            getRowId: getRowId,
            stateReducer: stateReducer,
            useControlledState: useControlledState
        });
    }
    var useTable = function useTable(props) {
        for(var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)plugins[_key - 1] = arguments[_key];
        // Apply default props
        props = applyDefaults(props); // Add core plugins
        plugins = [
            useColumnVisibility
        ].concat(plugins); // Create the table instance
        var instanceRef = React.useRef({
        }); // Create a getter for the instance (helps avoid a lot of potential memory leaks)
        var getInstance = useGetLatest(instanceRef.current); // Assign the props, plugins and hooks to the instance
        Object.assign(getInstance(), _extends({
        }, props, {
            plugins: plugins,
            hooks: makeDefaultPluginHooks()
        })); // Allow plugins to register hooks as early as possible
        plugins.filter(Boolean).forEach(function(plugin) {
            plugin(getInstance().hooks);
        }); // Consume all hooks and make a getter for them
        var getHooks = useGetLatest(getInstance().hooks);
        getInstance().getHooks = getHooks;
        delete getInstance().hooks; // Allow useOptions hooks to modify the options coming into the table
        Object.assign(getInstance(), reduceHooks(getHooks().useOptions, applyDefaults(props)));
        var _getInstance = getInstance(), data = _getInstance.data, userColumns = _getInstance.columns, initialState = _getInstance.initialState, defaultColumn = _getInstance.defaultColumn, getSubRows = _getInstance.getSubRows, getRowId = _getInstance.getRowId, stateReducer = _getInstance.stateReducer, useControlledState = _getInstance.useControlledState; // Setup user reducer ref
        var getStateReducer = useGetLatest(stateReducer); // Build the reducer
        var reducer = React.useCallback(function(state, action) {
            // Detect invalid actions
            if (!action.type) {
                console.info({
                    action: action
                });
                throw new Error('Unknown Action 👆');
            } // Reduce the state from all plugin reducers
            return [].concat(getHooks().stateReducers, Array.isArray(getStateReducer()) ? getStateReducer() : [
                getStateReducer()
            ]).reduce(function(s, handler) {
                return handler(s, action, state, getInstance()) || s;
            }, state);
        }, [
            getHooks,
            getStateReducer,
            getInstance
        ]); // Start the reducer
        var _React$useReducer = React.useReducer(reducer, undefined, function() {
            return reducer(initialState, {
                type: actions.init
            });
        }), reducerState = _React$useReducer[0], dispatch = _React$useReducer[1]; // Allow the user to control the final state with hooks
        var state1 = reduceHooks([].concat(getHooks().useControlledState, [
            useControlledState
        ]), reducerState, {
            instance: getInstance()
        });
        Object.assign(getInstance(), {
            state: state1,
            dispatch: dispatch
        }); // Decorate All the columns
        var columns1 = React.useMemo(function() {
            return linkColumnStructure(reduceHooks(getHooks().columns, userColumns, {
                instance: getInstance()
            }));
        }, [
            getHooks,
            getInstance,
            userColumns
        ].concat(reduceHooks(getHooks().columnsDeps, [], {
            instance: getInstance()
        })));
        getInstance().columns = columns1; // Get the flat list of all columns and allow hooks to decorate
        // those columns (and trigger this memoization via deps)
        var allColumns = React.useMemo(function() {
            return reduceHooks(getHooks().allColumns, flattenColumns(columns1), {
                instance: getInstance()
            }).map(assignColumnAccessor);
        }, [
            columns1,
            getHooks,
            getInstance
        ].concat(reduceHooks(getHooks().allColumnsDeps, [], {
            instance: getInstance()
        })));
        getInstance().allColumns = allColumns; // Access the row model using initial columns
        var _React$useMemo = React.useMemo(function() {
            var rows = [];
            var flatRows = [];
            var rowsById = {
            };
            var allColumnsQueue = [].concat(allColumns);
            while(allColumnsQueue.length){
                var column = allColumnsQueue.shift();
                accessRowsForColumn({
                    data: data,
                    rows: rows,
                    flatRows: flatRows,
                    rowsById: rowsById,
                    column: column,
                    getRowId: getRowId,
                    getSubRows: getSubRows,
                    accessValueHooks: getHooks().accessValue,
                    getInstance: getInstance
                });
            }
            return [
                rows,
                flatRows,
                rowsById
            ];
        }, [
            allColumns,
            data,
            getRowId,
            getSubRows,
            getHooks,
            getInstance
        ]), rows1 = _React$useMemo[0], flatRows1 = _React$useMemo[1], rowsById1 = _React$useMemo[2];
        Object.assign(getInstance(), {
            rows: rows1,
            initialRows: [].concat(rows1),
            flatRows: flatRows1,
            rowsById: rowsById1 // materializedColumns,
        });
        loopHooks(getHooks().useInstanceAfterData, getInstance()); // Get the flat list of all columns AFTER the rows
        // have been access, and allow hooks to decorate
        // those columns (and trigger this memoization via deps)
        var visibleColumns = React.useMemo(function() {
            return reduceHooks(getHooks().visibleColumns, allColumns, {
                instance: getInstance()
            }).map(function(d) {
                return decorateColumn(d, defaultColumn);
            });
        }, [
            getHooks,
            allColumns,
            getInstance,
            defaultColumn
        ].concat(reduceHooks(getHooks().visibleColumnsDeps, [], {
            instance: getInstance()
        }))); // Combine new visible columns with all columns
        allColumns = React.useMemo(function() {
            var columns = [].concat(visibleColumns);
            allColumns.forEach(function(column) {
                if (!columns.find(function(d) {
                    return d.id === column.id;
                })) columns.push(column);
            });
            return columns;
        }, [
            allColumns,
            visibleColumns
        ]);
        getInstance().allColumns = allColumns;
        var duplicateColumns = allColumns.filter(function(column, i) {
            return allColumns.findIndex(function(d) {
                return d.id === column.id;
            }) !== i;
        });
        if (duplicateColumns.length) {
            console.info(allColumns);
            throw new Error("Duplicate columns were found with ids: \"" + duplicateColumns.map(function(d) {
                return d.id;
            }).join(', ') + "\" in the columns array above");
        }
        var headerGroups = React.useMemo(function() {
            return reduceHooks(getHooks().headerGroups, makeHeaderGroups(visibleColumns, defaultColumn), getInstance());
        }, [
            getHooks,
            visibleColumns,
            defaultColumn,
            getInstance
        ].concat(reduceHooks(getHooks().headerGroupsDeps, [], {
            instance: getInstance()
        })));
        getInstance().headerGroups = headerGroups; // Get the first level of headers
        var headers1 = React.useMemo(function() {
            return headerGroups.length ? headerGroups[0].headers : [];
        }, [
            headerGroups
        ]);
        getInstance().headers = headers1; // Provide a flat header list for utilities
        getInstance().flatHeaders = headerGroups.reduce(function(all, headerGroup) {
            return [].concat(all, headerGroup.headers);
        }, []);
        loopHooks(getHooks().useInstanceBeforeDimensions, getInstance()); // Filter columns down to visible ones
        var visibleColumnsDep = visibleColumns.filter(function(d) {
            return d.isVisible;
        }).map(function(d) {
            return d.id;
        }).sort().join('_');
        visibleColumns = React.useMemo(function() {
            return visibleColumns.filter(function(d) {
                return d.isVisible;
            });
        }, [
            visibleColumns,
            visibleColumnsDep
        ]);
        getInstance().visibleColumns = visibleColumns; // Header Visibility is needed by this point
        var _calculateHeaderWidth = calculateHeaderWidths(headers1), totalColumnsMinWidth = _calculateHeaderWidth[0], totalColumnsWidth = _calculateHeaderWidth[1], totalColumnsMaxWidth = _calculateHeaderWidth[2];
        getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
        getInstance().totalColumnsWidth = totalColumnsWidth;
        getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;
        loopHooks(getHooks().useInstance, getInstance()) // Each materialized header needs to be assigned a render function and other
        ;
        [].concat(getInstance().flatHeaders, getInstance().allColumns).forEach(function(column) {
            // Give columns/headers rendering power
            column.render = makeRenderer(getInstance(), column); // Give columns/headers a default getHeaderProps
            column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
                instance: getInstance(),
                column: column
            }); // Give columns/headers a default getFooterProps
            column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
                instance: getInstance(),
                column: column
            });
        });
        getInstance().headerGroups = React.useMemo(function() {
            return headerGroups.filter(function(headerGroup, i) {
                // Filter out any headers and headerGroups that don't have visible columns
                headerGroup.headers = headerGroup.headers.filter(function(column1) {
                    var recurse2 = function recurse(headers) {
                        return headers.filter(function(column) {
                            if (column.headers) return recurse(column.headers);
                            return column.isVisible;
                        }).length;
                    };
                    if (column1.headers) return recurse2(column1.headers);
                    return column1.isVisible;
                }); // Give headerGroups getRowProps
                if (headerGroup.headers.length) {
                    headerGroup.getHeaderGroupProps = makePropGetter(getHooks().getHeaderGroupProps, {
                        instance: getInstance(),
                        headerGroup: headerGroup,
                        index: i
                    });
                    headerGroup.getFooterGroupProps = makePropGetter(getHooks().getFooterGroupProps, {
                        instance: getInstance(),
                        headerGroup: headerGroup,
                        index: i
                    });
                    return true;
                }
                return false;
            });
        }, [
            headerGroups,
            getInstance,
            getHooks
        ]);
        getInstance().footerGroups = [].concat(getInstance().headerGroups).reverse(); // The prepareRow function is absolutely necessary and MUST be called on
        // any rows the user wishes to be displayed.
        getInstance().prepareRow = React.useCallback(function(row) {
            row.getRowProps = makePropGetter(getHooks().getRowProps, {
                instance: getInstance(),
                row: row
            }); // Build the visible cells for each row
            row.allCells = allColumns.map(function(column) {
                var value = row.values[column.id];
                var cell = {
                    column: column,
                    row: row,
                    value: value
                }; // Give each cell a getCellProps base
                cell.getCellProps = makePropGetter(getHooks().getCellProps, {
                    instance: getInstance(),
                    cell: cell
                }); // Give each cell a renderer function (supports multiple renderers)
                cell.render = makeRenderer(getInstance(), column, {
                    row: row,
                    cell: cell,
                    value: value
                });
                return cell;
            });
            row.cells = visibleColumns.map(function(column) {
                return row.allCells.find(function(cell) {
                    return cell.column.id === column.id;
                });
            }); // need to apply any row specific hooks (useExpanded requires this)
            loopHooks(getHooks().prepareRow, row, {
                instance: getInstance()
            });
        }, [
            getHooks,
            getInstance,
            allColumns,
            visibleColumns
        ]);
        getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
            instance: getInstance()
        });
        getInstance().getTableBodyProps = makePropGetter(getHooks().getTableBodyProps, {
            instance: getInstance()
        });
        loopHooks(getHooks().useFinalInstance, getInstance());
        return getInstance();
    };
    function calculateHeaderWidths(headers, left) {
        if (left === void 0) left = 0;
        var sumTotalMinWidth = 0;
        var sumTotalWidth = 0;
        var sumTotalMaxWidth = 0;
        var sumTotalFlexWidth = 0;
        headers.forEach(function(header) {
            var subHeaders = header.headers;
            header.totalLeft = left;
            if (subHeaders && subHeaders.length) {
                var _calculateHeaderWidth2 = calculateHeaderWidths(subHeaders, left), totalMinWidth = _calculateHeaderWidth2[0], totalWidth = _calculateHeaderWidth2[1], totalMaxWidth = _calculateHeaderWidth2[2], totalFlexWidth = _calculateHeaderWidth2[3];
                header.totalMinWidth = totalMinWidth;
                header.totalWidth = totalWidth;
                header.totalMaxWidth = totalMaxWidth;
                header.totalFlexWidth = totalFlexWidth;
            } else {
                header.totalMinWidth = header.minWidth;
                header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
                header.totalMaxWidth = header.maxWidth;
                header.totalFlexWidth = header.canResize ? header.totalWidth : 0;
            }
            if (header.isVisible) {
                left += header.totalWidth;
                sumTotalMinWidth += header.totalMinWidth;
                sumTotalWidth += header.totalWidth;
                sumTotalMaxWidth += header.totalMaxWidth;
                sumTotalFlexWidth += header.totalFlexWidth;
            }
        });
        return [
            sumTotalMinWidth,
            sumTotalWidth,
            sumTotalMaxWidth,
            sumTotalFlexWidth
        ];
    }
    function accessRowsForColumn(_ref) {
        var data = _ref.data, rows = _ref.rows, flatRows = _ref.flatRows, rowsById = _ref.rowsById, column = _ref.column, getRowId = _ref.getRowId, getSubRows = _ref.getSubRows, accessValueHooks = _ref.accessValueHooks, getInstance = _ref.getInstance;
        // Access the row's data column-by-column
        // We do it this way so we can incrementally add materialized
        // columns after the first pass and avoid excessive looping
        var accessRow1 = function accessRow(originalRow, rowIndex, depth, parent, parentRows) {
            if (depth === void 0) depth = 0;
            // Keep the original reference around
            var original = originalRow;
            var id = getRowId(originalRow, rowIndex, parent);
            var row = rowsById[id]; // If the row hasn't been created, let's make it
            if (!row) {
                row = {
                    id: id,
                    original: original,
                    index: rowIndex,
                    depth: depth,
                    cells: [
                        {
                        }
                    ] // This is a dummy cell
                }; // Override common array functions (and the dummy cell's getCellProps function)
                // to show an error if it is accessed without calling prepareRow
                row.cells.map = unpreparedAccessWarning;
                row.cells.filter = unpreparedAccessWarning;
                row.cells.forEach = unpreparedAccessWarning;
                row.cells[0].getCellProps = unpreparedAccessWarning; // Create the cells and values
                row.values = {
                }; // Push this row into the parentRows array
                parentRows.push(row); // Keep track of every row in a flat array
                flatRows.push(row); // Also keep track of every row by its ID
                rowsById[id] = row; // Get the original subrows
                row.originalSubRows = getSubRows(originalRow, rowIndex); // Then recursively access them
                if (row.originalSubRows) {
                    var subRows = [];
                    row.originalSubRows.forEach(function(d, i) {
                        return accessRow(d, i, depth + 1, row, subRows);
                    }); // Keep the new subRows array on the row
                    row.subRows = subRows;
                }
            } else if (row.subRows) // If the row exists, then it's already been accessed
            // Keep recursing, but don't worry about passing the
            // accumlator array (those rows already exist)
            row.originalSubRows.forEach(function(d, i) {
                return accessRow(d, i, depth + 1, row);
            });
             // If the column has an accessor, use it to get a value
            if (column.accessor) row.values[column.id] = column.accessor(originalRow, rowIndex, row, parentRows, data);
             // Allow plugins to manipulate the column value
            row.values[column.id] = reduceHooks(accessValueHooks, row.values[column.id], {
                row: row,
                column: column,
                instance: getInstance()
            }, true);
        };
        data.forEach(function(originalRow, rowIndex) {
            return accessRow1(originalRow, rowIndex, 0, undefined, rows);
        });
    }
    actions.resetExpanded = 'resetExpanded';
    actions.toggleRowExpanded = 'toggleRowExpanded';
    actions.toggleAllRowsExpanded = 'toggleAllRowsExpanded';
    var useExpanded = function useExpanded(hooks) {
        hooks.getToggleAllRowsExpandedProps = [
            defaultGetToggleAllRowsExpandedProps
        ];
        hooks.getToggleRowExpandedProps = [
            defaultGetToggleRowExpandedProps
        ];
        hooks.stateReducers.push(reducer$1);
        hooks.useInstance.push(useInstance$1);
        hooks.prepareRow.push(prepareRow);
    };
    useExpanded.pluginName = 'useExpanded';
    var defaultGetToggleAllRowsExpandedProps = function defaultGetToggleAllRowsExpandedProps(props, _ref) {
        var instance = _ref.instance;
        return [
            props,
            {
                onClick: function onClick(e) {
                    instance.toggleAllRowsExpanded();
                },
                style: {
                    cursor: 'pointer'
                },
                title: 'Toggle All Rows Expanded'
            }
        ];
    };
    var defaultGetToggleRowExpandedProps = function defaultGetToggleRowExpandedProps(props, _ref2) {
        var row = _ref2.row;
        return [
            props,
            {
                onClick: function onClick() {
                    row.toggleRowExpanded();
                },
                style: {
                    cursor: 'pointer'
                },
                title: 'Toggle Row Expanded'
            }
        ];
    }; // Reducer
    function reducer$1(state, action, previousState, instance) {
        if (action.type === actions.init) return _extends({
            expanded: {
            }
        }, state);
        if (action.type === actions.resetExpanded) return _extends({
        }, state, {
            expanded: instance.initialState.expanded || {
            }
        });
        if (action.type === actions.toggleAllRowsExpanded) {
            var value = action.value;
            var isAllRowsExpanded = instance.isAllRowsExpanded, rowsById = instance.rowsById;
            var expandAll = typeof value !== 'undefined' ? value : !isAllRowsExpanded;
            if (expandAll) {
                var expanded = {
                };
                Object.keys(rowsById).forEach(function(rowId) {
                    expanded[rowId] = true;
                });
                return _extends({
                }, state, {
                    expanded: expanded
                });
            }
            return _extends({
            }, state, {
                expanded: {
                }
            });
        }
        if (action.type === actions.toggleRowExpanded) {
            var id = action.id, setExpanded = action.value;
            var exists = state.expanded[id];
            var shouldExist = typeof setExpanded !== 'undefined' ? setExpanded : !exists;
            if (!exists && shouldExist) {
                var _extends2;
                return _extends({
                }, state, {
                    expanded: _extends({
                    }, state.expanded, (_extends2 = {
                    }, _extends2[id] = true, _extends2))
                });
            } else if (exists && !shouldExist) {
                var _state$expanded = state.expanded, _ = _state$expanded[id], rest = _objectWithoutPropertiesLoose(_state$expanded, [
                    id
                ].map(_toPropertyKey));
                return _extends({
                }, state, {
                    expanded: rest
                });
            } else return state;
        }
    }
    function useInstance$1(instance) {
        var data = instance.data, rows = instance.rows, rowsById = instance.rowsById, _instance$manualExpan = instance.manualExpandedKey, manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan, _instance$paginateExp = instance.paginateExpandedRows, paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp, _instance$expandSubRo = instance.expandSubRows, expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo, _instance$autoResetEx = instance.autoResetExpanded, autoResetExpanded = _instance$autoResetEx === void 0 ? true : _instance$autoResetEx, getHooks = instance.getHooks, plugins = instance.plugins, expanded = instance.state.expanded, dispatch = instance.dispatch;
        ensurePluginOrder(plugins, [
            'useSortBy',
            'useGroupBy',
            'usePivotColumns',
            'useGlobalFilter'
        ], 'useExpanded');
        var getAutoResetExpanded = useGetLatest(autoResetExpanded);
        var isAllRowsExpanded = Boolean(Object.keys(rowsById).length && Object.keys(expanded).length);
        if (isAllRowsExpanded) {
            if (Object.keys(rowsById).some(function(id) {
                return !expanded[id];
            })) isAllRowsExpanded = false;
        } // Bypass any effects from firing when this changes
        useMountedLayoutEffect(function() {
            if (getAutoResetExpanded()) dispatch({
                type: actions.resetExpanded
            });
        }, [
            dispatch,
            data
        ]);
        var toggleRowExpanded = React.useCallback(function(id, value) {
            dispatch({
                type: actions.toggleRowExpanded,
                id: id,
                value: value
            });
        }, [
            dispatch
        ]);
        var toggleAllRowsExpanded = React.useCallback(function(value) {
            return dispatch({
                type: actions.toggleAllRowsExpanded,
                value: value
            });
        }, [
            dispatch
        ]);
        var expandedRows = React.useMemo(function() {
            if (paginateExpandedRows) return expandRows(rows, {
                manualExpandedKey: manualExpandedKey,
                expanded: expanded,
                expandSubRows: expandSubRows
            });
            return rows;
        }, [
            paginateExpandedRows,
            rows,
            manualExpandedKey,
            expanded,
            expandSubRows
        ]);
        var expandedDepth = React.useMemo(function() {
            return findExpandedDepth(expanded);
        }, [
            expanded
        ]);
        var getInstance = useGetLatest(instance);
        var getToggleAllRowsExpandedProps = makePropGetter(getHooks().getToggleAllRowsExpandedProps, {
            instance: getInstance()
        });
        Object.assign(instance, {
            preExpandedRows: rows,
            expandedRows: expandedRows,
            rows: expandedRows,
            expandedDepth: expandedDepth,
            isAllRowsExpanded: isAllRowsExpanded,
            toggleRowExpanded: toggleRowExpanded,
            toggleAllRowsExpanded: toggleAllRowsExpanded,
            getToggleAllRowsExpandedProps: getToggleAllRowsExpandedProps
        });
    }
    function prepareRow(row, _ref3) {
        var getHooks = _ref3.instance.getHooks, instance = _ref3.instance;
        row.toggleRowExpanded = function(set) {
            return instance.toggleRowExpanded(row.id, set);
        };
        row.getToggleRowExpandedProps = makePropGetter(getHooks().getToggleRowExpandedProps, {
            instance: instance,
            row: row
        });
    }
    function findExpandedDepth(expanded) {
        var maxDepth = 0;
        Object.keys(expanded).forEach(function(id) {
            var splitId = id.split('.');
            maxDepth = Math.max(maxDepth, splitId.length);
        });
        return maxDepth;
    }
    var text = function text(rows, ids, filterValue) {
        rows = rows.filter(function(row) {
            return ids.some(function(id) {
                var rowValue = row.values[id];
                return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
            });
        });
        return rows;
    };
    text.autoRemove = function(val) {
        return !val;
    };
    var exactText = function exactText(rows, ids, filterValue) {
        return rows.filter(function(row) {
            return ids.some(function(id) {
                var rowValue = row.values[id];
                return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
            });
        });
    };
    exactText.autoRemove = function(val) {
        return !val;
    };
    var exactTextCase = function exactTextCase(rows, ids, filterValue) {
        return rows.filter(function(row) {
            return ids.some(function(id) {
                var rowValue = row.values[id];
                return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
            });
        });
    };
    exactTextCase.autoRemove = function(val) {
        return !val;
    };
    var includes = function includes(rows, ids, filterValue) {
        return rows.filter(function(row) {
            return ids.some(function(id) {
                var rowValue = row.values[id];
                return rowValue.includes(filterValue);
            });
        });
    };
    includes.autoRemove = function(val) {
        return !val || !val.length;
    };
    var includesAll = function includesAll(rows, ids, filterValue) {
        return rows.filter(function(row) {
            return ids.some(function(id) {
                var rowValue = row.values[id];
                return rowValue && rowValue.length && filterValue.every(function(val) {
                    return rowValue.includes(val);
                });
            });
        });
    };
    includesAll.autoRemove = function(val) {
        return !val || !val.length;
    };
    var includesSome = function includesSome(rows, ids, filterValue) {
        return rows.filter(function(row) {
            return ids.some(function(id) {
                var rowValue = row.values[id];
                return rowValue && rowValue.length && filterValue.some(function(val) {
                    return rowValue.includes(val);
                });
            });
        });
    };
    includesSome.autoRemove = function(val) {
        return !val || !val.length;
    };
    var includesValue = function includesValue(rows, ids, filterValue) {
        return rows.filter(function(row) {
            return ids.some(function(id) {
                var rowValue = row.values[id];
                return filterValue.includes(rowValue);
            });
        });
    };
    includesValue.autoRemove = function(val) {
        return !val || !val.length;
    };
    var exact = function exact(rows, ids, filterValue) {
        return rows.filter(function(row) {
            return ids.some(function(id) {
                var rowValue = row.values[id];
                return rowValue === filterValue;
            });
        });
    };
    exact.autoRemove = function(val) {
        return typeof val === 'undefined';
    };
    var equals = function equals(rows, ids, filterValue) {
        return rows.filter(function(row) {
            return ids.some(function(id) {
                var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq
                return rowValue == filterValue;
            });
        });
    };
    equals.autoRemove = function(val) {
        return val == null;
    };
    var between = function between(rows, ids, filterValue) {
        var _ref = filterValue || [], min = _ref[0], max = _ref[1];
        min = typeof min === 'number' ? min : -Infinity;
        max = typeof max === 'number' ? max : Infinity;
        if (min > max) {
            var temp = min;
            min = max;
            max = temp;
        }
        return rows.filter(function(row) {
            return ids.some(function(id) {
                var rowValue = row.values[id];
                return rowValue >= min && rowValue <= max;
            });
        });
    };
    between.autoRemove = function(val) {
        return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
    };
    var filterTypes1 = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        text: text,
        exactText: exactText,
        exactTextCase: exactTextCase,
        includes: includes,
        includesAll: includesAll,
        includesSome: includesSome,
        includesValue: includesValue,
        exact: exact,
        equals: equals,
        between: between
    });
    actions.resetFilters = 'resetFilters';
    actions.setFilter = 'setFilter';
    actions.setAllFilters = 'setAllFilters';
    var useFilters = function useFilters(hooks) {
        hooks.stateReducers.push(reducer$2);
        hooks.useInstance.push(useInstance$2);
    };
    useFilters.pluginName = 'useFilters';
    function reducer$2(state, action, previousState, instance) {
        if (action.type === actions.init) return _extends({
            filters: []
        }, state);
        if (action.type === actions.resetFilters) return _extends({
        }, state, {
            filters: instance.initialState.filters || []
        });
        if (action.type === actions.setFilter) {
            var columnId = action.columnId, filterValue = action.filterValue;
            var allColumns = instance.allColumns, userFilterTypes = instance.filterTypes;
            var column = allColumns.find(function(d) {
                return d.id === columnId;
            });
            if (!column) throw new Error("React-Table: Could not find a column with id: " + columnId);
            var filterMethod = getFilterMethod(column.filter, userFilterTypes || {
            }, filterTypes1);
            var previousfilter = state.filters.find(function(d) {
                return d.id === columnId;
            });
            var newFilter = functionalUpdate(filterValue, previousfilter && previousfilter.value); //
            if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter, column)) return _extends({
            }, state, {
                filters: state.filters.filter(function(d) {
                    return d.id !== columnId;
                })
            });
            if (previousfilter) return _extends({
            }, state, {
                filters: state.filters.map(function(d) {
                    if (d.id === columnId) return {
                        id: columnId,
                        value: newFilter
                    };
                    return d;
                })
            });
            return _extends({
            }, state, {
                filters: [].concat(state.filters, [
                    {
                        id: columnId,
                        value: newFilter
                    }
                ])
            });
        }
        if (action.type === actions.setAllFilters) {
            var filters = action.filters;
            var _allColumns = instance.allColumns, _userFilterTypes = instance.filterTypes;
            return _extends({
            }, state, {
                // Filter out undefined values
                filters: functionalUpdate(filters, state.filters).filter(function(filter) {
                    var column = _allColumns.find(function(d) {
                        return d.id === filter.id;
                    });
                    var filterMethod = getFilterMethod(column.filter, _userFilterTypes || {
                    }, filterTypes1);
                    if (shouldAutoRemoveFilter(filterMethod.autoRemove, filter.value, column)) return false;
                    return true;
                })
            });
        }
    }
    function useInstance$2(instance) {
        var data = instance.data, rows2 = instance.rows, flatRows = instance.flatRows, rowsById = instance.rowsById, allColumns = instance.allColumns, userFilterTypes = instance.filterTypes, manualFilters = instance.manualFilters, _instance$defaultCanF = instance.defaultCanFilter, defaultCanFilter = _instance$defaultCanF === void 0 ? false : _instance$defaultCanF, disableFilters = instance.disableFilters, filters1 = instance.state.filters, dispatch = instance.dispatch, _instance$autoResetFi = instance.autoResetFilters, autoResetFilters = _instance$autoResetFi === void 0 ? true : _instance$autoResetFi;
        var setFilter = React.useCallback(function(columnId, filterValue) {
            dispatch({
                type: actions.setFilter,
                columnId: columnId,
                filterValue: filterValue
            });
        }, [
            dispatch
        ]);
        var setAllFilters = React.useCallback(function(filters) {
            dispatch({
                type: actions.setAllFilters,
                filters: filters
            });
        }, [
            dispatch
        ]);
        allColumns.forEach(function(column) {
            var id = column.id, accessor = column.accessor, columnDefaultCanFilter = column.defaultCanFilter, columnDisableFilters = column.disableFilters; // Determine if a column is filterable
            column.canFilter = accessor ? getFirstDefined(columnDisableFilters === true ? false : undefined, disableFilters === true ? false : undefined, true) : getFirstDefined(columnDefaultCanFilter, defaultCanFilter, false); // Provide the column a way of updating the filter value
            column.setFilter = function(val) {
                return setFilter(column.id, val);
            }; // Provide the current filter value to the column for
            // convenience
            var found = filters1.find(function(d) {
                return d.id === id;
            });
            column.filterValue = found && found.value;
        });
        var _React$useMemo = React.useMemo(function() {
            if (manualFilters || !filters1.length) return [
                rows2,
                flatRows,
                rowsById
            ];
            var filteredFlatRows = [];
            var filteredRowsById = {
            }; // Filters top level and nested rows
            var filterRows1 = function filterRows(rows, depth) {
                if (depth === void 0) depth = 0;
                var filteredRows = rows;
                filteredRows = filters1.reduce(function(filteredSoFar, _ref) {
                    var columnId = _ref.id, filterValue = _ref.value;
                    // Find the filters column
                    var column = allColumns.find(function(d) {
                        return d.id === columnId;
                    });
                    if (!column) return filteredSoFar;
                    if (depth === 0) column.preFilteredRows = filteredSoFar;
                    var filterMethod = getFilterMethod(column.filter, userFilterTypes || {
                    }, filterTypes1);
                    if (!filterMethod) {
                        console.warn("Could not find a valid 'column.filter' for column with the ID: " + column.id + ".");
                        return filteredSoFar;
                    } // Pass the rows, id, filterValue and column to the filterMethod
                    // to get the filtered rows back
                    column.filteredRows = filterMethod(filteredSoFar, [
                        columnId
                    ], filterValue);
                    return column.filteredRows;
                }, rows); // Apply the filter to any subRows
                // We technically could do this recursively in the above loop,
                // but that would severely hinder the API for the user, since they
                // would be required to do that recursion in some scenarios
                filteredRows.forEach(function(row) {
                    filteredFlatRows.push(row);
                    filteredRowsById[row.id] = row;
                    if (!row.subRows) return;
                    row.subRows = row.subRows && row.subRows.length > 0 ? filterRows(row.subRows, depth + 1) : row.subRows;
                });
                return filteredRows;
            };
            return [
                filterRows1(rows2),
                filteredFlatRows,
                filteredRowsById
            ];
        }, [
            manualFilters,
            filters1,
            rows2,
            flatRows,
            rowsById,
            allColumns,
            userFilterTypes
        ]), filteredRows1 = _React$useMemo[0], filteredFlatRows1 = _React$useMemo[1], filteredRowsById1 = _React$useMemo[2];
        React.useMemo(function() {
            // Now that each filtered column has it's partially filtered rows,
            // lets assign the final filtered rows to all of the other columns
            var nonFilteredColumns = allColumns.filter(function(column) {
                return !filters1.find(function(d) {
                    return d.id === column.id;
                });
            }); // This essentially enables faceted filter options to be built easily
            // using every column's preFilteredRows value
            nonFilteredColumns.forEach(function(column) {
                column.preFilteredRows = filteredRows1;
                column.filteredRows = filteredRows1;
            });
        }, [
            filteredRows1,
            filters1,
            allColumns
        ]);
        var getAutoResetFilters = useGetLatest(autoResetFilters);
        useMountedLayoutEffect(function() {
            if (getAutoResetFilters()) dispatch({
                type: actions.resetFilters
            });
        }, [
            dispatch,
            manualFilters ? null : data
        ]);
        Object.assign(instance, {
            preFilteredRows: rows2,
            preFilteredFlatRows: flatRows,
            preFilteredRowsById: rowsById,
            filteredRows: filteredRows1,
            filteredFlatRows: filteredFlatRows1,
            filteredRowsById: filteredRowsById1,
            rows: filteredRows1,
            flatRows: filteredFlatRows1,
            rowsById: filteredRowsById1,
            setFilter: setFilter,
            setAllFilters: setAllFilters
        });
    }
    actions.resetGlobalFilter = 'resetGlobalFilter';
    actions.setGlobalFilter = 'setGlobalFilter';
    var useGlobalFilter = function useGlobalFilter(hooks) {
        hooks.stateReducers.push(reducer$3);
        hooks.useInstance.push(useInstance$3);
    };
    useGlobalFilter.pluginName = 'useGlobalFilter';
    function reducer$3(state, action, previousState, instance) {
        if (action.type === actions.resetGlobalFilter) return _extends({
        }, state, {
            globalFilter: instance.initialState.globalFilter || undefined
        });
        if (action.type === actions.setGlobalFilter) {
            var filterValue = action.filterValue;
            var userFilterTypes = instance.userFilterTypes;
            var filterMethod = getFilterMethod(instance.globalFilter, userFilterTypes || {
            }, filterTypes1);
            var newFilter = functionalUpdate(filterValue, state.globalFilter); //
            if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter)) {
                var globalFilter = state.globalFilter, stateWithoutGlobalFilter = _objectWithoutPropertiesLoose(state, [
                    "globalFilter"
                ]);
                return stateWithoutGlobalFilter;
            }
            return _extends({
            }, state, {
                globalFilter: newFilter
            });
        }
    }
    function useInstance$3(instance) {
        var data = instance.data, rows = instance.rows, flatRows = instance.flatRows, rowsById = instance.rowsById, allColumns = instance.allColumns, userFilterTypes = instance.filterTypes, globalFilter = instance.globalFilter, manualGlobalFilter = instance.manualGlobalFilter, globalFilterValue = instance.state.globalFilter, dispatch = instance.dispatch, _instance$autoResetGl = instance.autoResetGlobalFilter, autoResetGlobalFilter = _instance$autoResetGl === void 0 ? true : _instance$autoResetGl, disableGlobalFilter = instance.disableGlobalFilter;
        var setGlobalFilter = React.useCallback(function(filterValue) {
            dispatch({
                type: actions.setGlobalFilter,
                filterValue: filterValue
            });
        }, [
            dispatch
        ]); // TODO: Create a filter cache for incremental high speed multi-filtering
        // This gets pretty complicated pretty fast, since you have to maintain a
        // cache for each row group (top-level rows, and each row's recursive subrows)
        // This would make multi-filtering a lot faster though. Too far?
        var _React$useMemo = React.useMemo(function() {
            if (manualGlobalFilter || typeof globalFilterValue === 'undefined') return [
                rows,
                flatRows,
                rowsById
            ];
            var filteredFlatRows = [];
            var filteredRowsById = {
            };
            var filterMethod = getFilterMethod(globalFilter, userFilterTypes || {
            }, filterTypes1);
            if (!filterMethod) {
                console.warn("Could not find a valid 'globalFilter' option.");
                return rows;
            }
            allColumns.forEach(function(column) {
                var columnDisableGlobalFilter = column.disableGlobalFilter;
                column.canFilter = getFirstDefined(columnDisableGlobalFilter === true ? false : undefined, disableGlobalFilter === true ? false : undefined, true);
            });
            var filterableColumns = allColumns.filter(function(c) {
                return c.canFilter === true;
            }); // Filters top level and nested rows
            var filterRows2 = function filterRows(filteredRows) {
                filteredRows = filterMethod(filteredRows, filterableColumns.map(function(d) {
                    return d.id;
                }), globalFilterValue);
                filteredRows.forEach(function(row) {
                    filteredFlatRows.push(row);
                    filteredRowsById[row.id] = row;
                    row.subRows = row.subRows && row.subRows.length ? filterRows(row.subRows) : row.subRows;
                });
                return filteredRows;
            };
            return [
                filterRows2(rows),
                filteredFlatRows,
                filteredRowsById
            ];
        }, [
            manualGlobalFilter,
            globalFilterValue,
            globalFilter,
            userFilterTypes,
            allColumns,
            rows,
            flatRows,
            rowsById,
            disableGlobalFilter
        ]), globalFilteredRows = _React$useMemo[0], globalFilteredFlatRows = _React$useMemo[1], globalFilteredRowsById = _React$useMemo[2];
        var getAutoResetGlobalFilter = useGetLatest(autoResetGlobalFilter);
        useMountedLayoutEffect(function() {
            if (getAutoResetGlobalFilter()) dispatch({
                type: actions.resetGlobalFilter
            });
        }, [
            dispatch,
            manualGlobalFilter ? null : data
        ]);
        Object.assign(instance, {
            preGlobalFilteredRows: rows,
            preGlobalFilteredFlatRows: flatRows,
            preGlobalFilteredRowsById: rowsById,
            globalFilteredRows: globalFilteredRows,
            globalFilteredFlatRows: globalFilteredFlatRows,
            globalFilteredRowsById: globalFilteredRowsById,
            rows: globalFilteredRows,
            flatRows: globalFilteredFlatRows,
            rowsById: globalFilteredRowsById,
            setGlobalFilter: setGlobalFilter,
            disableGlobalFilter: disableGlobalFilter
        });
    }
    function sum1(values, aggregatedValues) {
        // It's faster to just add the aggregations together instead of
        // process leaf nodes individually
        return aggregatedValues.reduce(function(sum, next) {
            return sum + (typeof next === 'number' ? next : 0);
        }, 0);
    }
    function min1(values) {
        var min = values[0] || 0;
        values.forEach(function(value) {
            if (typeof value === 'number') min = Math.min(min, value);
        });
        return min;
    }
    function max1(values) {
        var max = values[0] || 0;
        values.forEach(function(value) {
            if (typeof value === 'number') max = Math.max(max, value);
        });
        return max;
    }
    function minMax(values) {
        var min = values[0] || 0;
        var max = values[0] || 0;
        values.forEach(function(value) {
            if (typeof value === 'number') {
                min = Math.min(min, value);
                max = Math.max(max, value);
            }
        });
        return min + ".." + max;
    }
    function average(values) {
        return sum1(null, values) / values.length;
    }
    function median(values) {
        if (!values.length) return null;
        var mid = Math.floor(values.length / 2);
        var nums = [].concat(values).sort(function(a, b) {
            return a - b;
        });
        return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    }
    function unique(values) {
        return Array.from(new Set(values).values());
    }
    function uniqueCount(values) {
        return new Set(values).size;
    }
    function count(values) {
        return values.length;
    }
    var aggregations = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        sum: sum1,
        min: min1,
        max: max1,
        minMax: minMax,
        average: average,
        median: median,
        unique: unique,
        uniqueCount: uniqueCount,
        count: count
    });
    var emptyArray = [];
    var emptyObject = {
    }; // Actions
    actions.resetGroupBy = 'resetGroupBy';
    actions.setGroupBy = 'setGroupBy';
    actions.toggleGroupBy = 'toggleGroupBy';
    var useGroupBy = function useGroupBy(hooks) {
        hooks.getGroupByToggleProps = [
            defaultGetGroupByToggleProps
        ];
        hooks.stateReducers.push(reducer$4);
        hooks.visibleColumnsDeps.push(function(deps, _ref) {
            var instance = _ref.instance;
            return [].concat(deps, [
                instance.state.groupBy
            ]);
        });
        hooks.visibleColumns.push(visibleColumns1);
        hooks.useInstance.push(useInstance$4);
        hooks.prepareRow.push(prepareRow$1);
    };
    useGroupBy.pluginName = 'useGroupBy';
    var defaultGetGroupByToggleProps = function defaultGetGroupByToggleProps(props, _ref2) {
        var header = _ref2.header;
        return [
            props,
            {
                onClick: header.canGroupBy ? function(e) {
                    e.persist();
                    header.toggleGroupBy();
                } : undefined,
                style: {
                    cursor: header.canGroupBy ? 'pointer' : undefined
                },
                title: 'Toggle GroupBy'
            }
        ];
    }; // Reducer
    function reducer$4(state, action, previousState, instance) {
        if (action.type === actions.init) return _extends({
            groupBy: []
        }, state);
        if (action.type === actions.resetGroupBy) return _extends({
        }, state, {
            groupBy: instance.initialState.groupBy || []
        });
        if (action.type === actions.setGroupBy) {
            var value = action.value;
            return _extends({
            }, state, {
                groupBy: value
            });
        }
        if (action.type === actions.toggleGroupBy) {
            var columnId = action.columnId, setGroupBy = action.value;
            var resolvedGroupBy = typeof setGroupBy !== 'undefined' ? setGroupBy : !state.groupBy.includes(columnId);
            if (resolvedGroupBy) return _extends({
            }, state, {
                groupBy: [].concat(state.groupBy, [
                    columnId
                ])
            });
            return _extends({
            }, state, {
                groupBy: state.groupBy.filter(function(d) {
                    return d !== columnId;
                })
            });
        }
    }
    function visibleColumns1(columns, _ref3) {
        var groupBy = _ref3.instance.state.groupBy;
        // Sort grouped columns to the start of the column list
        // before the headers are built
        var groupByColumns = groupBy.map(function(g) {
            return columns.find(function(col) {
                return col.id === g;
            });
        }).filter(Boolean);
        var nonGroupByColumns = columns.filter(function(col) {
            return !groupBy.includes(col.id);
        });
        columns = [].concat(groupByColumns, nonGroupByColumns);
        columns.forEach(function(column) {
            column.isGrouped = groupBy.includes(column.id);
            column.groupedIndex = groupBy.indexOf(column.id);
        });
        return columns;
    }
    var defaultUserAggregations = {
    };
    function useInstance$4(instance) {
        var data = instance.data, rows3 = instance.rows, flatRows = instance.flatRows, rowsById = instance.rowsById, allColumns = instance.allColumns, flatHeaders = instance.flatHeaders, _instance$groupByFn = instance.groupByFn, groupByFn = _instance$groupByFn === void 0 ? defaultGroupByFn : _instance$groupByFn, manualGroupBy = instance.manualGroupBy, _instance$aggregation = instance.aggregations, userAggregations = _instance$aggregation === void 0 ? defaultUserAggregations : _instance$aggregation, plugins = instance.plugins, groupBy = instance.state.groupBy, dispatch = instance.dispatch, _instance$autoResetGr = instance.autoResetGroupBy, autoResetGroupBy = _instance$autoResetGr === void 0 ? true : _instance$autoResetGr, disableGroupBy = instance.disableGroupBy, defaultCanGroupBy = instance.defaultCanGroupBy, getHooks = instance.getHooks;
        ensurePluginOrder(plugins, [
            'useColumnOrder',
            'useFilters'
        ], 'useGroupBy');
        var getInstance = useGetLatest(instance);
        allColumns.forEach(function(column) {
            var accessor = column.accessor, defaultColumnGroupBy = column.defaultGroupBy, columnDisableGroupBy = column.disableGroupBy;
            column.canGroupBy = accessor ? getFirstDefined(column.canGroupBy, columnDisableGroupBy === true ? false : undefined, disableGroupBy === true ? false : undefined, true) : getFirstDefined(column.canGroupBy, defaultColumnGroupBy, defaultCanGroupBy, false);
            if (column.canGroupBy) column.toggleGroupBy = function() {
                return instance.toggleGroupBy(column.id);
            };
            column.Aggregated = column.Aggregated || column.Cell;
        });
        var toggleGroupBy = React.useCallback(function(columnId, value) {
            dispatch({
                type: actions.toggleGroupBy,
                columnId: columnId,
                value: value
            });
        }, [
            dispatch
        ]);
        var setGroupBy = React.useCallback(function(value) {
            dispatch({
                type: actions.setGroupBy,
                value: value
            });
        }, [
            dispatch
        ]);
        flatHeaders.forEach(function(header) {
            header.getGroupByToggleProps = makePropGetter(getHooks().getGroupByToggleProps, {
                instance: getInstance(),
                header: header
            });
        });
        var _React$useMemo = React.useMemo(function() {
            if (manualGroupBy || !groupBy.length) return [
                rows3,
                flatRows,
                rowsById,
                emptyArray,
                emptyObject,
                flatRows,
                rowsById
            ];
             // Ensure that the list of filtered columns exist
            var existingGroupBy = groupBy.filter(function(g) {
                return allColumns.find(function(col) {
                    return col.id === g;
                });
            }); // Find the columns that can or are aggregating
            // Uses each column to aggregate rows into a single value
            var aggregateRowsToValues = function aggregateRowsToValues(leafRows, groupedRows, depth) {
                var values = {
                };
                allColumns.forEach(function(column) {
                    // Don't aggregate columns that are in the groupBy
                    if (existingGroupBy.includes(column.id)) {
                        values[column.id] = groupedRows[0] ? groupedRows[0].values[column.id] : null;
                        return;
                    } // Aggregate the values
                    var aggregateFn = typeof column.aggregate === 'function' ? column.aggregate : userAggregations[column.aggregate] || aggregations[column.aggregate];
                    if (aggregateFn) {
                        // Get the columnValues to aggregate
                        var groupedValues = groupedRows.map(function(row) {
                            return row.values[column.id];
                        }); // Get the columnValues to aggregate
                        var leafValues = leafRows.map(function(row) {
                            var columnValue = row.values[column.id];
                            if (!depth && column.aggregateValue) {
                                var aggregateValueFn = typeof column.aggregateValue === 'function' ? column.aggregateValue : userAggregations[column.aggregateValue] || aggregations[column.aggregateValue];
                                if (!aggregateValueFn) {
                                    console.info({
                                        column: column
                                    });
                                    throw new Error("React Table: Invalid column.aggregateValue option for column listed above");
                                }
                                columnValue = aggregateValueFn(columnValue, row, column);
                            }
                            return columnValue;
                        });
                        values[column.id] = aggregateFn(leafValues, groupedValues);
                    } else if (column.aggregate) {
                        console.info({
                            column: column
                        });
                        throw new Error("React Table: Invalid column.aggregate option for column listed above");
                    } else values[column.id] = null;
                });
                return values;
            };
            var groupedFlatRows = [];
            var groupedRowsById = {
            };
            var onlyGroupedFlatRows = [];
            var onlyGroupedRowsById = {
            };
            var nonGroupedFlatRows = [];
            var nonGroupedRowsById = {
            }; // Recursively group the data
            var groupUpRecursively1 = function groupUpRecursively(rows, depth, parentId) {
                if (depth === void 0) depth = 0;
                // This is the last level, just return the rows
                if (depth === existingGroupBy.length) return rows;
                var columnId = existingGroupBy[depth]; // Group the rows together for this level
                var rowGroupsMap = groupByFn(rows, columnId); // Peform aggregations for each group
                var aggregatedGroupedRows = Object.entries(rowGroupsMap).map(function(_ref4, index) {
                    var groupByVal = _ref4[0], groupedRows = _ref4[1];
                    var id = columnId + ":" + groupByVal;
                    id = parentId ? parentId + ">" + id : id; // First, Recurse to group sub rows before aggregation
                    var subRows = groupUpRecursively(groupedRows, depth + 1, id); // Flatten the leaf rows of the rows in this group
                    var leafRows = depth ? flattenBy(groupedRows, 'leafRows') : groupedRows;
                    var values = aggregateRowsToValues(leafRows, groupedRows, depth);
                    var row = {
                        id: id,
                        isGrouped: true,
                        groupByID: columnId,
                        groupByVal: groupByVal,
                        values: values,
                        subRows: subRows,
                        leafRows: leafRows,
                        depth: depth,
                        index: index
                    };
                    subRows.forEach(function(subRow) {
                        groupedFlatRows.push(subRow);
                        groupedRowsById[subRow.id] = subRow;
                        if (subRow.isGrouped) {
                            onlyGroupedFlatRows.push(subRow);
                            onlyGroupedRowsById[subRow.id] = subRow;
                        } else {
                            nonGroupedFlatRows.push(subRow);
                            nonGroupedRowsById[subRow.id] = subRow;
                        }
                    });
                    return row;
                });
                return aggregatedGroupedRows;
            };
            var groupedRows2 = groupUpRecursively1(rows3);
            groupedRows2.forEach(function(subRow) {
                groupedFlatRows.push(subRow);
                groupedRowsById[subRow.id] = subRow;
                if (subRow.isGrouped) {
                    onlyGroupedFlatRows.push(subRow);
                    onlyGroupedRowsById[subRow.id] = subRow;
                } else {
                    nonGroupedFlatRows.push(subRow);
                    nonGroupedRowsById[subRow.id] = subRow;
                }
            }); // Assign the new data
            return [
                groupedRows2,
                groupedFlatRows,
                groupedRowsById,
                onlyGroupedFlatRows,
                onlyGroupedRowsById,
                nonGroupedFlatRows,
                nonGroupedRowsById
            ];
        }, [
            manualGroupBy,
            groupBy,
            rows3,
            flatRows,
            rowsById,
            allColumns,
            userAggregations,
            groupByFn
        ]), groupedRows1 = _React$useMemo[0], groupedFlatRows1 = _React$useMemo[1], groupedRowsById1 = _React$useMemo[2], onlyGroupedFlatRows1 = _React$useMemo[3], onlyGroupedRowsById1 = _React$useMemo[4], nonGroupedFlatRows1 = _React$useMemo[5], nonGroupedRowsById1 = _React$useMemo[6];
        var getAutoResetGroupBy = useGetLatest(autoResetGroupBy);
        useMountedLayoutEffect(function() {
            if (getAutoResetGroupBy()) dispatch({
                type: actions.resetGroupBy
            });
        }, [
            dispatch,
            manualGroupBy ? null : data
        ]);
        Object.assign(instance, {
            preGroupedRows: rows3,
            preGroupedFlatRow: flatRows,
            preGroupedRowsById: rowsById,
            groupedRows: groupedRows1,
            groupedFlatRows: groupedFlatRows1,
            groupedRowsById: groupedRowsById1,
            onlyGroupedFlatRows: onlyGroupedFlatRows1,
            onlyGroupedRowsById: onlyGroupedRowsById1,
            nonGroupedFlatRows: nonGroupedFlatRows1,
            nonGroupedRowsById: nonGroupedRowsById1,
            rows: groupedRows1,
            flatRows: groupedFlatRows1,
            rowsById: groupedRowsById1,
            toggleGroupBy: toggleGroupBy,
            setGroupBy: setGroupBy
        });
    }
    function prepareRow$1(row) {
        row.allCells.forEach(function(cell) {
            var _row$subRows;
            // Grouped cells are in the groupBy and the pivot cell for the row
            cell.isGrouped = cell.column.isGrouped && cell.column.id === row.groupByID; // Placeholder cells are any columns in the groupBy that are not grouped
            cell.isPlaceholder = !cell.isGrouped && cell.column.isGrouped; // Aggregated cells are not grouped, not repeated, but still have subRows
            cell.isAggregated = !cell.isGrouped && !cell.isPlaceholder && ((_row$subRows = row.subRows) == null ? void 0 : _row$subRows.length);
        });
    }
    function defaultGroupByFn(rows, columnId) {
        return rows.reduce(function(prev, row, i) {
            // TODO: Might want to implement a key serializer here so
            // irregular column values can still be grouped if needed?
            var resKey = "" + row.values[columnId];
            prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : [];
            prev[resKey].push(row);
            return prev;
        }, {
        });
    }
    var reSplitAlphaNumeric = /([0-9]+)/gm; // Mixed sorting is slow, but very inclusive of many edge cases.
    // It handles numbers, mixed alphanumeric combinations, and even
    // null, undefined, and Infinity
    var alphanumeric = function alphanumeric(rowA, rowB, columnId) {
        var _getRowValuesByColumn = getRowValuesByColumnID(rowA, rowB, columnId), a = _getRowValuesByColumn[0], b = _getRowValuesByColumn[1]; // Force to strings (or "" for unsupported types)
        a = toString(a);
        b = toString(b); // Split on number groups, but keep the delimiter
        // Then remove falsey split values
        a = a.split(reSplitAlphaNumeric).filter(Boolean);
        b = b.split(reSplitAlphaNumeric).filter(Boolean); // While
        while(a.length && b.length){
            var aa = a.shift();
            var bb = b.shift();
            var an = parseInt(aa, 10);
            var bn = parseInt(bb, 10);
            var combo = [
                an,
                bn
            ].sort(); // Both are string
            if (isNaN(combo[0])) {
                if (aa > bb) return 1;
                if (bb > aa) return -1;
                continue;
            } // One is a string, one is a number
            if (isNaN(combo[1])) return isNaN(an) ? -1 : 1;
             // Both are numbers
            if (an > bn) return 1;
            if (bn > an) return -1;
        }
        return a.length - b.length;
    };
    function datetime(rowA, rowB, columnId) {
        var _getRowValuesByColumn2 = getRowValuesByColumnID(rowA, rowB, columnId), a = _getRowValuesByColumn2[0], b = _getRowValuesByColumn2[1];
        a = a.getTime();
        b = b.getTime();
        return compareBasic(a, b);
    }
    function basic(rowA, rowB, columnId) {
        var _getRowValuesByColumn3 = getRowValuesByColumnID(rowA, rowB, columnId), a = _getRowValuesByColumn3[0], b = _getRowValuesByColumn3[1];
        return compareBasic(a, b);
    }
    function string(rowA, rowB, columnId) {
        var _getRowValuesByColumn4 = getRowValuesByColumnID(rowA, rowB, columnId), a = _getRowValuesByColumn4[0], b = _getRowValuesByColumn4[1];
        a = a.split('').filter(Boolean);
        b = b.split('').filter(Boolean);
        while(a.length && b.length){
            var aa = a.shift();
            var bb = b.shift();
            var alower = aa.toLowerCase();
            var blower = bb.toLowerCase(); // Case insensitive comparison until characters match
            if (alower > blower) return 1;
            if (blower > alower) return -1;
             // If lowercase characters are identical
            if (aa > bb) return 1;
            if (bb > aa) return -1;
            continue;
        }
        return a.length - b.length;
    }
    function number(rowA, rowB, columnId) {
        var _getRowValuesByColumn5 = getRowValuesByColumnID(rowA, rowB, columnId), a = _getRowValuesByColumn5[0], b = _getRowValuesByColumn5[1];
        var replaceNonNumeric = /[^0-9.]/gi;
        a = Number(String(a).replace(replaceNonNumeric, ''));
        b = Number(String(b).replace(replaceNonNumeric, ''));
        return compareBasic(a, b);
    } // Utils
    function compareBasic(a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
    }
    function getRowValuesByColumnID(row1, row2, columnId) {
        return [
            row1.values[columnId],
            row2.values[columnId]
        ];
    }
    function toString(a) {
        if (typeof a === 'number') {
            if (isNaN(a) || a === Infinity || a === -Infinity) return '';
            return String(a);
        }
        if (typeof a === 'string') return a;
        return '';
    }
    var sortTypes = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        alphanumeric: alphanumeric,
        datetime: datetime,
        basic: basic,
        string: string,
        number: number
    });
    actions.resetSortBy = 'resetSortBy';
    actions.setSortBy = 'setSortBy';
    actions.toggleSortBy = 'toggleSortBy';
    actions.clearSortBy = 'clearSortBy';
    defaultColumn1.sortType = 'alphanumeric';
    defaultColumn1.sortDescFirst = false;
    var useSortBy = function useSortBy(hooks) {
        hooks.getSortByToggleProps = [
            defaultGetSortByToggleProps
        ];
        hooks.stateReducers.push(reducer$5);
        hooks.useInstance.push(useInstance$5);
    };
    useSortBy.pluginName = 'useSortBy';
    var defaultGetSortByToggleProps = function defaultGetSortByToggleProps(props, _ref) {
        var instance = _ref.instance, column = _ref.column;
        var _instance$isMultiSort = instance.isMultiSortEvent, isMultiSortEvent = _instance$isMultiSort === void 0 ? function(e) {
            return e.shiftKey;
        } : _instance$isMultiSort;
        return [
            props,
            {
                onClick: column.canSort ? function(e) {
                    e.persist();
                    column.toggleSortBy(undefined, !instance.disableMultiSort && isMultiSortEvent(e));
                } : undefined,
                style: {
                    cursor: column.canSort ? 'pointer' : undefined
                },
                title: column.canSort ? 'Toggle SortBy' : undefined
            }
        ];
    }; // Reducer
    function reducer$5(state, action, previousState, instance) {
        if (action.type === actions.init) return _extends({
            sortBy: []
        }, state);
        if (action.type === actions.resetSortBy) return _extends({
        }, state, {
            sortBy: instance.initialState.sortBy || []
        });
        if (action.type === actions.clearSortBy) {
            var sortBy = state.sortBy;
            var newSortBy = sortBy.filter(function(d) {
                return d.id !== action.columnId;
            });
            return _extends({
            }, state, {
                sortBy: newSortBy
            });
        }
        if (action.type === actions.setSortBy) {
            var _sortBy = action.sortBy;
            return _extends({
            }, state, {
                sortBy: _sortBy
            });
        }
        if (action.type === actions.toggleSortBy) {
            var columnId = action.columnId, desc = action.desc, multi = action.multi;
            var allColumns = instance.allColumns, disableMultiSort = instance.disableMultiSort, disableSortRemove = instance.disableSortRemove, disableMultiRemove = instance.disableMultiRemove, _instance$maxMultiSor = instance.maxMultiSortColCount, maxMultiSortColCount = _instance$maxMultiSor === void 0 ? Number.MAX_SAFE_INTEGER : _instance$maxMultiSor;
            var _sortBy2 = state.sortBy; // Find the column for this columnId
            var column = allColumns.find(function(d) {
                return d.id === columnId;
            });
            var sortDescFirst = column.sortDescFirst; // Find any existing sortBy for this column
            var existingSortBy = _sortBy2.find(function(d) {
                return d.id === columnId;
            });
            var existingIndex = _sortBy2.findIndex(function(d) {
                return d.id === columnId;
            });
            var hasDescDefined = typeof desc !== 'undefined' && desc !== null;
            var _newSortBy = []; // What should we do with this sort action?
            var sortAction;
            if (!disableMultiSort && multi) {
                if (existingSortBy) sortAction = 'toggle';
                else sortAction = 'add';
            } else {
                // Normal mode
                if (existingIndex !== _sortBy2.length - 1 || _sortBy2.length !== 1) sortAction = 'replace';
                else if (existingSortBy) sortAction = 'toggle';
                else sortAction = 'replace';
            } // Handle toggle states that will remove the sortBy
            if (sortAction === 'toggle' && !disableSortRemove && !hasDescDefined && (multi ? !disableMultiRemove : true) && (existingSortBy && existingSortBy.desc && !sortDescFirst || !existingSortBy.desc && sortDescFirst)) sortAction = 'remove';
            if (sortAction === 'replace') _newSortBy = [
                {
                    id: columnId,
                    desc: hasDescDefined ? desc : sortDescFirst
                }
            ];
            else if (sortAction === 'add') {
                _newSortBy = [].concat(_sortBy2, [
                    {
                        id: columnId,
                        desc: hasDescDefined ? desc : sortDescFirst
                    }
                ]); // Take latest n columns
                _newSortBy.splice(0, _newSortBy.length - maxMultiSortColCount);
            } else if (sortAction === 'toggle') // This flips (or sets) the
            _newSortBy = _sortBy2.map(function(d) {
                if (d.id === columnId) return _extends({
                }, d, {
                    desc: hasDescDefined ? desc : !existingSortBy.desc
                });
                return d;
            });
            else if (sortAction === 'remove') _newSortBy = _sortBy2.filter(function(d) {
                return d.id !== columnId;
            });
            return _extends({
            }, state, {
                sortBy: _newSortBy
            });
        }
    }
    function useInstance$5(instance) {
        var data = instance.data, rows4 = instance.rows, flatRows = instance.flatRows, allColumns = instance.allColumns, _instance$orderByFn = instance.orderByFn, orderByFn = _instance$orderByFn === void 0 ? defaultOrderByFn : _instance$orderByFn, userSortTypes = instance.sortTypes, manualSortBy = instance.manualSortBy, defaultCanSort = instance.defaultCanSort, disableSortBy = instance.disableSortBy, flatHeaders = instance.flatHeaders, sortBy1 = instance.state.sortBy, dispatch = instance.dispatch, plugins = instance.plugins, getHooks = instance.getHooks, _instance$autoResetSo = instance.autoResetSortBy, autoResetSortBy = _instance$autoResetSo === void 0 ? true : _instance$autoResetSo;
        ensurePluginOrder(plugins, [
            'useFilters',
            'useGlobalFilter',
            'useGroupBy',
            'usePivotColumns'
        ], 'useSortBy');
        var setSortBy = React.useCallback(function(sortBy) {
            dispatch({
                type: actions.setSortBy,
                sortBy: sortBy
            });
        }, [
            dispatch
        ]); // Updates sorting based on a columnId, desc flag and multi flag
        var toggleSortBy = React.useCallback(function(columnId, desc, multi) {
            dispatch({
                type: actions.toggleSortBy,
                columnId: columnId,
                desc: desc,
                multi: multi
            });
        }, [
            dispatch
        ]); // use reference to avoid memory leak in #1608
        var getInstance = useGetLatest(instance); // Add the getSortByToggleProps method to columns and headers
        flatHeaders.forEach(function(column) {
            var accessor = column.accessor, defaultColumnCanSort = column.canSort, columnDisableSortBy = column.disableSortBy, id = column.id;
            var canSort = accessor ? getFirstDefined(columnDisableSortBy === true ? false : undefined, disableSortBy === true ? false : undefined, true) : getFirstDefined(defaultCanSort, defaultColumnCanSort, false);
            column.canSort = canSort;
            if (column.canSort) {
                column.toggleSortBy = function(desc, multi) {
                    return toggleSortBy(column.id, desc, multi);
                };
                column.clearSortBy = function() {
                    dispatch({
                        type: actions.clearSortBy,
                        columnId: column.id
                    });
                };
            }
            column.getSortByToggleProps = makePropGetter(getHooks().getSortByToggleProps, {
                instance: getInstance(),
                column: column
            });
            var columnSort = sortBy1.find(function(d) {
                return d.id === id;
            });
            column.isSorted = !!columnSort;
            column.sortedIndex = sortBy1.findIndex(function(d) {
                return d.id === id;
            });
            column.isSortedDesc = column.isSorted ? columnSort.desc : undefined;
        });
        var _React$useMemo = React.useMemo(function() {
            if (manualSortBy || !sortBy1.length) return [
                rows4,
                flatRows
            ];
            var sortedFlatRows = []; // Filter out sortBys that correspond to non existing columns
            var availableSortBy = sortBy1.filter(function(sort) {
                return allColumns.find(function(col) {
                    return col.id === sort.id;
                });
            });
            var sortData1 = function sortData(rows) {
                // Use the orderByFn to compose multiple sortBy's together.
                // This will also perform a stable sorting using the row index
                // if needed.
                var sortedData = orderByFn(rows, availableSortBy.map(function(sort) {
                    // Support custom sorting methods for each column
                    var column = allColumns.find(function(d) {
                        return d.id === sort.id;
                    });
                    if (!column) throw new Error("React-Table: Could not find a column with id: " + sort.id + " while sorting");
                    var sortType = column.sortType; // Look up sortBy functions in this order:
                    // column function
                    // column string lookup on user sortType
                    // column string lookup on built-in sortType
                    // default function
                    // default string lookup on user sortType
                    // default string lookup on built-in sortType
                    var sortMethod = isFunction(sortType) || (userSortTypes || {
                    })[sortType] || sortTypes[sortType];
                    if (!sortMethod) throw new Error("React-Table: Could not find a valid sortType of '" + sortType + "' for column '" + sort.id + "'.");
                     // Return the correct sortFn.
                    // This function should always return in ascending order
                    return function(a, b) {
                        return sortMethod(a, b, sort.id, sort.desc);
                    };
                }), availableSortBy.map(function(sort) {
                    // Detect and use the sortInverted option
                    var column = allColumns.find(function(d) {
                        return d.id === sort.id;
                    });
                    if (column && column.sortInverted) return sort.desc;
                    return !sort.desc;
                })); // If there are sub-rows, sort them
                sortedData.forEach(function(row) {
                    sortedFlatRows.push(row);
                    if (!row.subRows || row.subRows.length === 0) return;
                    row.subRows = sortData(row.subRows);
                });
                return sortedData;
            };
            return [
                sortData1(rows4),
                sortedFlatRows
            ];
        }, [
            manualSortBy,
            sortBy1,
            rows4,
            flatRows,
            allColumns,
            orderByFn,
            userSortTypes
        ]), sortedRows = _React$useMemo[0], sortedFlatRows1 = _React$useMemo[1];
        var getAutoResetSortBy = useGetLatest(autoResetSortBy);
        useMountedLayoutEffect(function() {
            if (getAutoResetSortBy()) dispatch({
                type: actions.resetSortBy
            });
        }, [
            manualSortBy ? null : data
        ]);
        Object.assign(instance, {
            preSortedRows: rows4,
            preSortedFlatRows: flatRows,
            sortedRows: sortedRows,
            sortedFlatRows: sortedFlatRows1,
            rows: sortedRows,
            flatRows: sortedFlatRows1,
            setSortBy: setSortBy,
            toggleSortBy: toggleSortBy
        });
    }
    function defaultOrderByFn(arr, funcs, dirs) {
        return [].concat(arr).sort(function(rowA, rowB) {
            for(var i = 0; i < funcs.length; i += 1){
                var sortFn = funcs[i];
                var desc = dirs[i] === false || dirs[i] === 'desc';
                var sortInt = sortFn(rowA, rowB);
                if (sortInt !== 0) return desc ? -sortInt : sortInt;
            }
            return dirs[0] ? rowA.index - rowB.index : rowB.index - rowA.index;
        });
    }
    var pluginName1 = 'usePagination'; // Actions
    actions.resetPage = 'resetPage';
    actions.gotoPage = 'gotoPage';
    actions.setPageSize = 'setPageSize';
    var usePagination = function usePagination(hooks) {
        hooks.stateReducers.push(reducer$6);
        hooks.useInstance.push(useInstance$6);
    };
    usePagination.pluginName = pluginName1;
    function reducer$6(state, action, previousState, instance) {
        if (action.type === actions.init) return _extends({
            pageSize: 10,
            pageIndex: 0
        }, state);
        if (action.type === actions.resetPage) return _extends({
        }, state, {
            pageIndex: instance.initialState.pageIndex || 0
        });
        if (action.type === actions.gotoPage) {
            var pageCount = instance.pageCount, page = instance.page;
            var newPageIndex = functionalUpdate(action.pageIndex, state.pageIndex);
            var canNavigate = false;
            if (newPageIndex > state.pageIndex) // next page
            canNavigate = pageCount === -1 ? page.length >= state.pageSize : newPageIndex < pageCount;
            else if (newPageIndex < state.pageIndex) // prev page
            canNavigate = newPageIndex > -1;
            if (!canNavigate) return state;
            return _extends({
            }, state, {
                pageIndex: newPageIndex
            });
        }
        if (action.type === actions.setPageSize) {
            var pageSize = action.pageSize;
            var topRowIndex = state.pageSize * state.pageIndex;
            var pageIndex = Math.floor(topRowIndex / pageSize);
            return _extends({
            }, state, {
                pageIndex: pageIndex,
                pageSize: pageSize
            });
        }
    }
    function useInstance$6(instance) {
        var rows = instance.rows, _instance$autoResetPa = instance.autoResetPage, autoResetPage = _instance$autoResetPa === void 0 ? true : _instance$autoResetPa, _instance$manualExpan = instance.manualExpandedKey, manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan, plugins = instance.plugins, userPageCount = instance.pageCount, _instance$paginateExp = instance.paginateExpandedRows, paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp, _instance$expandSubRo = instance.expandSubRows, expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo, _instance$state = instance.state, pageSize1 = _instance$state.pageSize, pageIndex1 = _instance$state.pageIndex, expanded = _instance$state.expanded, globalFilter = _instance$state.globalFilter, filters = _instance$state.filters, groupBy = _instance$state.groupBy, sortBy = _instance$state.sortBy, dispatch = instance.dispatch, data = instance.data, manualPagination = instance.manualPagination;
        ensurePluginOrder(plugins, [
            'useGlobalFilter',
            'useFilters',
            'useGroupBy',
            'useSortBy',
            'useExpanded'
        ], 'usePagination');
        var getAutoResetPage = useGetLatest(autoResetPage);
        useMountedLayoutEffect(function() {
            if (getAutoResetPage()) dispatch({
                type: actions.resetPage
            });
        }, [
            dispatch,
            manualPagination ? null : data,
            globalFilter,
            filters,
            groupBy,
            sortBy
        ]);
        var pageCount = manualPagination ? userPageCount : Math.ceil(rows.length / pageSize1);
        var pageOptions = React.useMemo(function() {
            return pageCount > 0 ? [].concat(new Array(pageCount)).fill(null).map(function(d, i) {
                return i;
            }) : [];
        }, [
            pageCount
        ]);
        var page1 = React.useMemo(function() {
            var page;
            if (manualPagination) page = rows;
            else {
                var pageStart = pageSize1 * pageIndex1;
                var pageEnd = pageStart + pageSize1;
                page = rows.slice(pageStart, pageEnd);
            }
            if (paginateExpandedRows) return page;
            return expandRows(page, {
                manualExpandedKey: manualExpandedKey,
                expanded: expanded,
                expandSubRows: expandSubRows
            });
        }, [
            expandSubRows,
            expanded,
            manualExpandedKey,
            manualPagination,
            pageIndex1,
            pageSize1,
            paginateExpandedRows,
            rows
        ]);
        var canPreviousPage = pageIndex1 > 0;
        var canNextPage = pageCount === -1 ? page1.length >= pageSize1 : pageIndex1 < pageCount - 1;
        var gotoPage = React.useCallback(function(pageIndex) {
            dispatch({
                type: actions.gotoPage,
                pageIndex: pageIndex
            });
        }, [
            dispatch
        ]);
        var previousPage = React.useCallback(function() {
            return gotoPage(function(old) {
                return old - 1;
            });
        }, [
            gotoPage
        ]);
        var nextPage = React.useCallback(function() {
            return gotoPage(function(old) {
                return old + 1;
            });
        }, [
            gotoPage
        ]);
        var setPageSize = React.useCallback(function(pageSize) {
            dispatch({
                type: actions.setPageSize,
                pageSize: pageSize
            });
        }, [
            dispatch
        ]);
        Object.assign(instance, {
            pageOptions: pageOptions,
            pageCount: pageCount,
            page: page1,
            canPreviousPage: canPreviousPage,
            canNextPage: canNextPage,
            gotoPage: gotoPage,
            previousPage: previousPage,
            nextPage: nextPage,
            setPageSize: setPageSize
        });
    }
    actions.resetPivot = 'resetPivot';
    actions.togglePivot = 'togglePivot';
    var _UNSTABLE_usePivotColumns = function _UNSTABLE_usePivotColumns(hooks) {
        hooks.getPivotToggleProps = [
            defaultGetPivotToggleProps
        ];
        hooks.stateReducers.push(reducer$7);
        hooks.useInstanceAfterData.push(useInstanceAfterData);
        hooks.allColumns.push(allColumns1);
        hooks.accessValue.push(accessValue);
        hooks.materializedColumns.push(materializedColumns);
        hooks.materializedColumnsDeps.push(materializedColumnsDeps);
        hooks.visibleColumns.push(visibleColumns$1);
        hooks.visibleColumnsDeps.push(visibleColumnsDeps);
        hooks.useInstance.push(useInstance$7);
        hooks.prepareRow.push(prepareRow$2);
    };
    _UNSTABLE_usePivotColumns.pluginName = 'usePivotColumns';
    var defaultPivotColumns = [];
    var defaultGetPivotToggleProps = function defaultGetPivotToggleProps(props, _ref) {
        var header = _ref.header;
        return [
            props,
            {
                onClick: header.canPivot ? function(e) {
                    e.persist();
                    header.togglePivot();
                } : undefined,
                style: {
                    cursor: header.canPivot ? 'pointer' : undefined
                },
                title: 'Toggle Pivot'
            }
        ];
    }; // Reducer
    function reducer$7(state, action, previousState, instance) {
        if (action.type === actions.init) return _extends({
            pivotColumns: defaultPivotColumns
        }, state);
        if (action.type === actions.resetPivot) return _extends({
        }, state, {
            pivotColumns: instance.initialState.pivotColumns || defaultPivotColumns
        });
        if (action.type === actions.togglePivot) {
            var columnId = action.columnId, setPivot = action.value;
            var resolvedPivot = typeof setPivot !== 'undefined' ? setPivot : !state.pivotColumns.includes(columnId);
            if (resolvedPivot) return _extends({
            }, state, {
                pivotColumns: [].concat(state.pivotColumns, [
                    columnId
                ])
            });
            return _extends({
            }, state, {
                pivotColumns: state.pivotColumns.filter(function(d) {
                    return d !== columnId;
                })
            });
        }
    }
    function useInstanceAfterData(instance) {
        instance.allColumns.forEach(function(column) {
            column.isPivotSource = instance.state.pivotColumns.includes(column.id);
        });
    }
    function allColumns1(columns, _ref2) {
        var instance = _ref2.instance;
        columns.forEach(function(column) {
            column.isPivotSource = instance.state.pivotColumns.includes(column.id);
            column.uniqueValues = new Set();
        });
        return columns;
    }
    function accessValue(value, _ref3) {
        var column = _ref3.column;
        if (column.uniqueValues && typeof value !== 'undefined') column.uniqueValues.add(value);
        return value;
    }
    function materializedColumns(materialized, _ref4) {
        var instance = _ref4.instance;
        var allColumns = instance.allColumns, state = instance.state;
        if (!state.pivotColumns.length || !state.groupBy || !state.groupBy.length) return materialized;
        var pivotColumns = state.pivotColumns.map(function(id) {
            return allColumns.find(function(d) {
                return d.id === id;
            });
        }).filter(Boolean);
        var sourceColumns = allColumns.filter(function(d) {
            return !d.isPivotSource && !state.groupBy.includes(d.id) && !state.pivotColumns.includes(d.id);
        });
        var buildPivotColumns1 = function buildPivotColumns(depth, parent, pivotFilters) {
            if (depth === void 0) depth = 0;
            if (pivotFilters === void 0) pivotFilters = [];
            var pivotColumn = pivotColumns[depth];
            if (!pivotColumn) return sourceColumns.map(function(sourceColumn) {
                // TODO: We could offer support here for renesting pivoted
                // columns inside copies of their header groups. For now,
                // that seems like it would be (1) overkill on nesting, considering
                // you already get nesting for every pivot level and (2)
                // really hard. :)
                return _extends({
                }, sourceColumn, {
                    canPivot: false,
                    isPivoted: true,
                    parent: parent,
                    depth: depth,
                    id: "" + (parent ? parent.id + "." + sourceColumn.id : sourceColumn.id),
                    accessor: function accessor(originalRow, i, row) {
                        if (pivotFilters.every(function(filter) {
                            return filter(row);
                        })) return row.values[sourceColumn.id];
                    }
                });
            });
            var uniqueValues = Array.from(pivotColumn.uniqueValues).sort();
            return uniqueValues.map(function(uniqueValue) {
                var columnGroup = _extends({
                }, pivotColumn, {
                    Header: pivotColumn.PivotHeader || typeof pivotColumn.header === 'string' ? pivotColumn.Header + ": " + uniqueValue : uniqueValue,
                    isPivotGroup: true,
                    parent: parent,
                    depth: depth,
                    id: parent ? parent.id + "." + pivotColumn.id + "." + uniqueValue : pivotColumn.id + "." + uniqueValue,
                    pivotValue: uniqueValue
                });
                columnGroup.columns = buildPivotColumns(depth + 1, columnGroup, [].concat(pivotFilters, [
                    function(row) {
                        return row.values[pivotColumn.id] === uniqueValue;
                    }
                ]));
                return columnGroup;
            });
        };
        var newMaterialized = flattenColumns(buildPivotColumns1());
        return [].concat(materialized, newMaterialized);
    }
    function materializedColumnsDeps(deps, _ref5) {
        var _ref5$instance$state = _ref5.instance.state, pivotColumns = _ref5$instance$state.pivotColumns, groupBy = _ref5$instance$state.groupBy;
        return [].concat(deps, [
            pivotColumns,
            groupBy
        ]);
    }
    function visibleColumns$1(visibleColumns, _ref6) {
        var state = _ref6.instance.state;
        visibleColumns = visibleColumns.filter(function(d) {
            return !d.isPivotSource;
        });
        if (state.pivotColumns.length && state.groupBy && state.groupBy.length) visibleColumns = visibleColumns.filter(function(column) {
            return column.isGrouped || column.isPivoted;
        });
        return visibleColumns;
    }
    function visibleColumnsDeps(deps, _ref7) {
        var instance = _ref7.instance;
        return [].concat(deps, [
            instance.state.pivotColumns,
            instance.state.groupBy
        ]);
    }
    function useInstance$7(instance) {
        var columns = instance.columns, allColumns = instance.allColumns, flatHeaders = instance.flatHeaders, getHooks = instance.getHooks, plugins = instance.plugins, dispatch = instance.dispatch, _instance$autoResetPi = instance.autoResetPivot, autoResetPivot = _instance$autoResetPi === void 0 ? true : _instance$autoResetPi, manaulPivot = instance.manaulPivot, disablePivot = instance.disablePivot, defaultCanPivot = instance.defaultCanPivot;
        ensurePluginOrder(plugins, [
            'useGroupBy'
        ], 'usePivotColumns');
        var getInstance = useGetLatest(instance);
        allColumns.forEach(function(column) {
            var accessor = column.accessor, defaultColumnPivot = column.defaultPivot, columnDisablePivot = column.disablePivot;
            column.canPivot = accessor ? getFirstDefined(column.canPivot, columnDisablePivot === true ? false : undefined, disablePivot === true ? false : undefined, true) : getFirstDefined(column.canPivot, defaultColumnPivot, defaultCanPivot, false);
            if (column.canPivot) column.togglePivot = function() {
                return instance.togglePivot(column.id);
            };
            column.Aggregated = column.Aggregated || column.Cell;
        });
        var togglePivot = function togglePivot(columnId, value) {
            dispatch({
                type: actions.togglePivot,
                columnId: columnId,
                value: value
            });
        };
        flatHeaders.forEach(function(header) {
            header.getPivotToggleProps = makePropGetter(getHooks().getPivotToggleProps, {
                instance: getInstance(),
                header: header
            });
        });
        var getAutoResetPivot = useGetLatest(autoResetPivot);
        useMountedLayoutEffect(function() {
            if (getAutoResetPivot()) dispatch({
                type: actions.resetPivot
            });
        }, [
            dispatch,
            manaulPivot ? null : columns
        ]);
        Object.assign(instance, {
            togglePivot: togglePivot
        });
    }
    function prepareRow$2(row) {
        row.allCells.forEach(function(cell) {
            // Grouped cells are in the pivotColumns and the pivot cell for the row
            cell.isPivoted = cell.column.isPivoted;
        });
    }
    var pluginName$1 = 'useRowSelect'; // Actions
    actions.resetSelectedRows = 'resetSelectedRows';
    actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
    actions.toggleRowSelected = 'toggleRowSelected';
    actions.toggleAllPageRowsSelected = 'toggleAllPageRowsSelected';
    var useRowSelect = function useRowSelect(hooks) {
        hooks.getToggleRowSelectedProps = [
            defaultGetToggleRowSelectedProps
        ];
        hooks.getToggleAllRowsSelectedProps = [
            defaultGetToggleAllRowsSelectedProps
        ];
        hooks.getToggleAllPageRowsSelectedProps = [
            defaultGetToggleAllPageRowsSelectedProps
        ];
        hooks.stateReducers.push(reducer$8);
        hooks.useInstance.push(useInstance$8);
        hooks.prepareRow.push(prepareRow$3);
    };
    useRowSelect.pluginName = pluginName$1;
    var defaultGetToggleRowSelectedProps = function defaultGetToggleRowSelectedProps(props, _ref) {
        var instance = _ref.instance, row = _ref.row;
        var _instance$manualRowSe = instance.manualRowSelectedKey, manualRowSelectedKey = _instance$manualRowSe === void 0 ? 'isSelected' : _instance$manualRowSe;
        var checked = false;
        if (row.original && row.original[manualRowSelectedKey]) checked = true;
        else checked = row.isSelected;
        return [
            props,
            {
                onChange: function onChange(e) {
                    row.toggleRowSelected(e.target.checked);
                },
                style: {
                    cursor: 'pointer'
                },
                checked: checked,
                title: 'Toggle Row Selected',
                indeterminate: row.isSomeSelected
            }
        ];
    };
    var defaultGetToggleAllRowsSelectedProps = function defaultGetToggleAllRowsSelectedProps(props, _ref2) {
        var instance = _ref2.instance;
        return [
            props,
            {
                onChange: function onChange(e) {
                    instance.toggleAllRowsSelected(e.target.checked);
                },
                style: {
                    cursor: 'pointer'
                },
                checked: instance.isAllRowsSelected,
                title: 'Toggle All Rows Selected',
                indeterminate: Boolean(!instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length)
            }
        ];
    };
    var defaultGetToggleAllPageRowsSelectedProps = function defaultGetToggleAllPageRowsSelectedProps(props, _ref3) {
        var instance = _ref3.instance;
        return [
            props,
            {
                onChange: function onChange(e) {
                    instance.toggleAllPageRowsSelected(e.target.checked);
                },
                style: {
                    cursor: 'pointer'
                },
                checked: instance.isAllPageRowsSelected,
                title: 'Toggle All Current Page Rows Selected',
                indeterminate: Boolean(!instance.isAllPageRowsSelected && instance.page.some(function(_ref4) {
                    var id = _ref4.id;
                    return instance.state.selectedRowIds[id];
                }))
            }
        ];
    }; // eslint-disable-next-line max-params
    function reducer$8(state, action, previousState, instance) {
        if (action.type === actions.init) return _extends({
            selectedRowIds: {
            }
        }, state);
        if (action.type === actions.resetSelectedRows) return _extends({
        }, state, {
            selectedRowIds: instance.initialState.selectedRowIds || {
            }
        });
        if (action.type === actions.toggleAllRowsSelected) {
            var setSelected = action.value;
            var isAllRowsSelected = instance.isAllRowsSelected, rowsById = instance.rowsById, _instance$nonGroupedR = instance.nonGroupedRowsById, nonGroupedRowsById = _instance$nonGroupedR === void 0 ? rowsById : _instance$nonGroupedR;
            var selectAll = typeof setSelected !== 'undefined' ? setSelected : !isAllRowsSelected; // Only remove/add the rows that are visible on the screen
            //  Leave all the other rows that are selected alone.
            var selectedRowIds = Object.assign({
            }, state.selectedRowIds);
            if (selectAll) Object.keys(nonGroupedRowsById).forEach(function(rowId) {
                selectedRowIds[rowId] = true;
            });
            else Object.keys(nonGroupedRowsById).forEach(function(rowId) {
                delete selectedRowIds[rowId];
            });
            return _extends({
            }, state, {
                selectedRowIds: selectedRowIds
            });
        }
        if (action.type === actions.toggleRowSelected) {
            var id = action.id, _setSelected = action.value;
            var _rowsById = instance.rowsById, _instance$selectSubRo = instance.selectSubRows, selectSubRows = _instance$selectSubRo === void 0 ? true : _instance$selectSubRo, getSubRows = instance.getSubRows;
            var isSelected = state.selectedRowIds[id];
            var shouldExist = typeof _setSelected !== 'undefined' ? _setSelected : !isSelected;
            if (isSelected === shouldExist) return state;
            var newSelectedRowIds = _extends({
            }, state.selectedRowIds);
            var handleRowById1 = function handleRowById(id) {
                var row2 = _rowsById[id];
                if (!row2.isGrouped) {
                    if (shouldExist) newSelectedRowIds[id] = true;
                    else delete newSelectedRowIds[id];
                }
                if (selectSubRows && getSubRows(row2)) return getSubRows(row2).forEach(function(row) {
                    return handleRowById(row.id);
                });
            };
            handleRowById1(id);
            return _extends({
            }, state, {
                selectedRowIds: newSelectedRowIds
            });
        }
        if (action.type === actions.toggleAllPageRowsSelected) {
            var _setSelected2 = action.value;
            var page = instance.page, _rowsById2 = instance.rowsById, _instance$selectSubRo2 = instance.selectSubRows, _selectSubRows = _instance$selectSubRo2 === void 0 ? true : _instance$selectSubRo2, isAllPageRowsSelected = instance.isAllPageRowsSelected, _getSubRows = instance.getSubRows;
            var _selectAll = typeof _setSelected2 !== 'undefined' ? _setSelected2 : !isAllPageRowsSelected;
            var _newSelectedRowIds = _extends({
            }, state.selectedRowIds);
            var _handleRowById1 = function _handleRowById(id) {
                var row3 = _rowsById2[id];
                if (!row3.isGrouped) {
                    if (_selectAll) _newSelectedRowIds[id] = true;
                    else delete _newSelectedRowIds[id];
                }
                if (_selectSubRows && _getSubRows(row3)) return _getSubRows(row3).forEach(function(row) {
                    return _handleRowById(row.id);
                });
            };
            page.forEach(function(row) {
                return _handleRowById1(row.id);
            });
            return _extends({
            }, state, {
                selectedRowIds: _newSelectedRowIds
            });
        }
        return state;
    }
    function useInstance$8(instance) {
        var data = instance.data, rows = instance.rows, getHooks = instance.getHooks, plugins = instance.plugins, rowsById = instance.rowsById, _instance$nonGroupedR2 = instance.nonGroupedRowsById, nonGroupedRowsById = _instance$nonGroupedR2 === void 0 ? rowsById : _instance$nonGroupedR2, _instance$autoResetSe = instance.autoResetSelectedRows, autoResetSelectedRows = _instance$autoResetSe === void 0 ? true : _instance$autoResetSe, selectedRowIds = instance.state.selectedRowIds, _instance$selectSubRo3 = instance.selectSubRows, selectSubRows = _instance$selectSubRo3 === void 0 ? true : _instance$selectSubRo3, dispatch = instance.dispatch, page = instance.page, getSubRows = instance.getSubRows;
        ensurePluginOrder(plugins, [
            'useFilters',
            'useGroupBy',
            'useSortBy',
            'useExpanded',
            'usePagination'
        ], 'useRowSelect');
        var selectedFlatRows1 = React.useMemo(function() {
            var selectedFlatRows = [];
            rows.forEach(function(row) {
                var isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds, getSubRows) : !!selectedRowIds[row.id];
                row.isSelected = !!isSelected;
                row.isSomeSelected = isSelected === null;
                if (isSelected) selectedFlatRows.push(row);
            });
            return selectedFlatRows;
        }, [
            rows,
            selectSubRows,
            selectedRowIds,
            getSubRows
        ]);
        var isAllRowsSelected = Boolean(Object.keys(nonGroupedRowsById).length && Object.keys(selectedRowIds).length);
        var isAllPageRowsSelected = isAllRowsSelected;
        if (isAllRowsSelected) {
            if (Object.keys(nonGroupedRowsById).some(function(id) {
                return !selectedRowIds[id];
            })) isAllRowsSelected = false;
        }
        if (!isAllRowsSelected) {
            if (page && page.length && page.some(function(_ref5) {
                var id = _ref5.id;
                return !selectedRowIds[id];
            })) isAllPageRowsSelected = false;
        }
        var getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);
        useMountedLayoutEffect(function() {
            if (getAutoResetSelectedRows()) dispatch({
                type: actions.resetSelectedRows
            });
        }, [
            dispatch,
            data
        ]);
        var toggleAllRowsSelected = React.useCallback(function(value) {
            return dispatch({
                type: actions.toggleAllRowsSelected,
                value: value
            });
        }, [
            dispatch
        ]);
        var toggleAllPageRowsSelected = React.useCallback(function(value) {
            return dispatch({
                type: actions.toggleAllPageRowsSelected,
                value: value
            });
        }, [
            dispatch
        ]);
        var toggleRowSelected = React.useCallback(function(id, value) {
            return dispatch({
                type: actions.toggleRowSelected,
                id: id,
                value: value
            });
        }, [
            dispatch
        ]);
        var getInstance = useGetLatest(instance);
        var getToggleAllRowsSelectedProps = makePropGetter(getHooks().getToggleAllRowsSelectedProps, {
            instance: getInstance()
        });
        var getToggleAllPageRowsSelectedProps = makePropGetter(getHooks().getToggleAllPageRowsSelectedProps, {
            instance: getInstance()
        });
        Object.assign(instance, {
            selectedFlatRows: selectedFlatRows1,
            isAllRowsSelected: isAllRowsSelected,
            isAllPageRowsSelected: isAllPageRowsSelected,
            toggleRowSelected: toggleRowSelected,
            toggleAllRowsSelected: toggleAllRowsSelected,
            getToggleAllRowsSelectedProps: getToggleAllRowsSelectedProps,
            getToggleAllPageRowsSelectedProps: getToggleAllPageRowsSelectedProps,
            toggleAllPageRowsSelected: toggleAllPageRowsSelected
        });
    }
    function prepareRow$3(row, _ref6) {
        var instance = _ref6.instance;
        row.toggleRowSelected = function(set) {
            return instance.toggleRowSelected(row.id, set);
        };
        row.getToggleRowSelectedProps = makePropGetter(instance.getHooks().getToggleRowSelectedProps, {
            instance: instance,
            row: row
        });
    }
    function getRowIsSelected(row, selectedRowIds, getSubRows) {
        if (selectedRowIds[row.id]) return true;
        var subRows = getSubRows(row);
        if (subRows && subRows.length) {
            var allChildrenSelected = true;
            var someSelected = false;
            subRows.forEach(function(subRow) {
                // Bail out early if we know both of these
                if (someSelected && !allChildrenSelected) return;
                if (getRowIsSelected(subRow, selectedRowIds, getSubRows)) someSelected = true;
                else allChildrenSelected = false;
            });
            return allChildrenSelected ? true : someSelected ? null : false;
        }
        return false;
    }
    var defaultInitialRowStateAccessor = function defaultInitialRowStateAccessor(row) {
        return {
        };
    };
    var defaultInitialCellStateAccessor = function defaultInitialCellStateAccessor(cell) {
        return {
        };
    }; // Actions
    actions.setRowState = 'setRowState';
    actions.setCellState = 'setCellState';
    actions.resetRowState = 'resetRowState';
    var useRowState = function useRowState(hooks) {
        hooks.stateReducers.push(reducer$9);
        hooks.useInstance.push(useInstance$9);
        hooks.prepareRow.push(prepareRow$4);
    };
    useRowState.pluginName = 'useRowState';
    function reducer$9(state, action, previousState, instance) {
        var _instance$initialRowS = instance.initialRowStateAccessor, initialRowStateAccessor = _instance$initialRowS === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS, _instance$initialCell = instance.initialCellStateAccessor, initialCellStateAccessor = _instance$initialCell === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell, rowsById = instance.rowsById;
        if (action.type === actions.init) return _extends({
            rowState: {
            }
        }, state);
        if (action.type === actions.resetRowState) return _extends({
        }, state, {
            rowState: instance.initialState.rowState || {
            }
        });
        if (action.type === actions.setRowState) {
            var _extends2;
            var rowId = action.rowId, value = action.value;
            var oldRowState = typeof state.rowState[rowId] !== 'undefined' ? state.rowState[rowId] : initialRowStateAccessor(rowsById[rowId]);
            return _extends({
            }, state, {
                rowState: _extends({
                }, state.rowState, (_extends2 = {
                }, _extends2[rowId] = functionalUpdate(value, oldRowState), _extends2))
            });
        }
        if (action.type === actions.setCellState) {
            var _oldRowState$cellStat, _rowsById$_rowId, _rowsById$_rowId$cell, _extends3, _extends4;
            var _rowId = action.rowId, columnId = action.columnId, _value = action.value;
            var _oldRowState = typeof state.rowState[_rowId] !== 'undefined' ? state.rowState[_rowId] : initialRowStateAccessor(rowsById[_rowId]);
            var oldCellState = typeof (_oldRowState == null ? void 0 : (_oldRowState$cellStat = _oldRowState.cellState) == null ? void 0 : _oldRowState$cellStat[columnId]) !== 'undefined' ? _oldRowState.cellState[columnId] : initialCellStateAccessor((_rowsById$_rowId = rowsById[_rowId]) == null ? void 0 : (_rowsById$_rowId$cell = _rowsById$_rowId.cells) == null ? void 0 : _rowsById$_rowId$cell.find(function(cell) {
                return cell.column.id === columnId;
            }));
            return _extends({
            }, state, {
                rowState: _extends({
                }, state.rowState, (_extends4 = {
                }, _extends4[_rowId] = _extends({
                }, _oldRowState, {
                    cellState: _extends({
                    }, _oldRowState.cellState || {
                    }, (_extends3 = {
                    }, _extends3[columnId] = functionalUpdate(_value, oldCellState), _extends3))
                }), _extends4))
            });
        }
    }
    function useInstance$9(instance) {
        var _instance$autoResetRo = instance.autoResetRowState, autoResetRowState = _instance$autoResetRo === void 0 ? true : _instance$autoResetRo, data = instance.data, dispatch = instance.dispatch;
        var setRowState = React.useCallback(function(rowId, value) {
            return dispatch({
                type: actions.setRowState,
                rowId: rowId,
                value: value
            });
        }, [
            dispatch
        ]);
        var setCellState = React.useCallback(function(rowId, columnId, value) {
            return dispatch({
                type: actions.setCellState,
                rowId: rowId,
                columnId: columnId,
                value: value
            });
        }, [
            dispatch
        ]);
        var getAutoResetRowState = useGetLatest(autoResetRowState);
        useMountedLayoutEffect(function() {
            if (getAutoResetRowState()) dispatch({
                type: actions.resetRowState
            });
        }, [
            data
        ]);
        Object.assign(instance, {
            setRowState: setRowState,
            setCellState: setCellState
        });
    }
    function prepareRow$4(row, _ref) {
        var instance = _ref.instance;
        var _instance$initialRowS2 = instance.initialRowStateAccessor, initialRowStateAccessor = _instance$initialRowS2 === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS2, _instance$initialCell2 = instance.initialCellStateAccessor, initialCellStateAccessor = _instance$initialCell2 === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell2, rowState = instance.state.rowState;
        if (row) {
            row.state = typeof rowState[row.id] !== 'undefined' ? rowState[row.id] : initialRowStateAccessor(row);
            row.setState = function(updater) {
                return instance.setRowState(row.id, updater);
            };
            row.cells.forEach(function(cell) {
                if (!row.state.cellState) row.state.cellState = {
                };
                cell.state = typeof row.state.cellState[cell.column.id] !== 'undefined' ? row.state.cellState[cell.column.id] : initialCellStateAccessor(cell);
                cell.setState = function(updater) {
                    return instance.setCellState(row.id, cell.column.id, updater);
                };
            });
        }
    }
    actions.resetColumnOrder = 'resetColumnOrder';
    actions.setColumnOrder = 'setColumnOrder';
    var useColumnOrder = function useColumnOrder(hooks) {
        hooks.stateReducers.push(reducer$a);
        hooks.visibleColumnsDeps.push(function(deps, _ref) {
            var instance = _ref.instance;
            return [].concat(deps, [
                instance.state.columnOrder
            ]);
        });
        hooks.visibleColumns.push(visibleColumns$2);
        hooks.useInstance.push(useInstance$a);
    };
    useColumnOrder.pluginName = 'useColumnOrder';
    function reducer$a(state, action, previousState, instance) {
        if (action.type === actions.init) return _extends({
            columnOrder: []
        }, state);
        if (action.type === actions.resetColumnOrder) return _extends({
        }, state, {
            columnOrder: instance.initialState.columnOrder || []
        });
        if (action.type === actions.setColumnOrder) return _extends({
        }, state, {
            columnOrder: functionalUpdate(action.columnOrder, state.columnOrder)
        });
    }
    function visibleColumns$2(columns, _ref2) {
        var columnOrder = _ref2.instance.state.columnOrder;
        // If there is no order, return the normal columns
        if (!columnOrder || !columnOrder.length) return columns;
        var columnOrderCopy = [].concat(columnOrder); // If there is an order, make a copy of the columns
        var columnsCopy = [].concat(columns); // And make a new ordered array of the columns
        var columnsInOrder = []; // Loop over the columns and place them in order into the new array
        var _loop = function _loop() {
            var targetColumnId = columnOrderCopy.shift();
            var foundIndex = columnsCopy.findIndex(function(d) {
                return d.id === targetColumnId;
            });
            if (foundIndex > -1) columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
        };
        while(columnsCopy.length && columnOrderCopy.length)_loop();
         // If there are any columns left, add them to the end
        return [].concat(columnsInOrder, columnsCopy);
    }
    function useInstance$a(instance) {
        var dispatch = instance.dispatch;
        instance.setColumnOrder = React.useCallback(function(columnOrder) {
            return dispatch({
                type: actions.setColumnOrder,
                columnOrder: columnOrder
            });
        }, [
            dispatch
        ]);
    }
    defaultColumn1.canResize = true; // Actions
    actions.columnStartResizing = 'columnStartResizing';
    actions.columnResizing = 'columnResizing';
    actions.columnDoneResizing = 'columnDoneResizing';
    actions.resetResize = 'resetResize';
    var useResizeColumns = function useResizeColumns(hooks) {
        hooks.getResizerProps = [
            defaultGetResizerProps
        ];
        hooks.getHeaderProps.push({
            style: {
                position: 'relative'
            }
        });
        hooks.stateReducers.push(reducer$b);
        hooks.useInstance.push(useInstance$b);
        hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions$1);
    };
    var defaultGetResizerProps = function defaultGetResizerProps(props, _ref) {
        var instance = _ref.instance, header1 = _ref.header;
        var dispatch = instance.dispatch;
        var onResizeStart = function onResizeStart(e1, header) {
            var isTouchEvent = false;
            if (e1.type === 'touchstart') {
                // lets not respond to multiple touches (e.g. 2 or 3 fingers)
                if (e1.touches && e1.touches.length > 1) return;
                isTouchEvent = true;
            }
            var headersToResize = getLeafHeaders(header);
            var headerIdWidths = headersToResize.map(function(d) {
                return [
                    d.id,
                    d.totalWidth
                ];
            });
            var clientX = isTouchEvent ? Math.round(e1.touches[0].clientX) : e1.clientX;
            var dispatchMove = function dispatchMove(clientXPos) {
                dispatch({
                    type: actions.columnResizing,
                    clientX: clientXPos
                });
            };
            var dispatchEnd = function dispatchEnd() {
                return dispatch({
                    type: actions.columnDoneResizing
                });
            };
            var handlersAndEvents = {
                mouse: {
                    moveEvent: 'mousemove',
                    moveHandler: function moveHandler(e) {
                        return dispatchMove(e.clientX);
                    },
                    upEvent: 'mouseup',
                    upHandler: function upHandler(e) {
                        document.removeEventListener('mousemove', handlersAndEvents.mouse.moveHandler);
                        document.removeEventListener('mouseup', handlersAndEvents.mouse.upHandler);
                        dispatchEnd();
                    }
                },
                touch: {
                    moveEvent: 'touchmove',
                    moveHandler: function moveHandler(e) {
                        if (e.cancelable) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        dispatchMove(e.touches[0].clientX);
                        return false;
                    },
                    upEvent: 'touchend',
                    upHandler: function upHandler(e) {
                        document.removeEventListener(handlersAndEvents.touch.moveEvent, handlersAndEvents.touch.moveHandler);
                        document.removeEventListener(handlersAndEvents.touch.upEvent, handlersAndEvents.touch.moveHandler);
                        dispatchEnd();
                    }
                }
            };
            var events = isTouchEvent ? handlersAndEvents.touch : handlersAndEvents.mouse;
            var passiveIfSupported = passiveEventSupported() ? {
                passive: false
            } : false;
            document.addEventListener(events.moveEvent, events.moveHandler, passiveIfSupported);
            document.addEventListener(events.upEvent, events.upHandler, passiveIfSupported);
            dispatch({
                type: actions.columnStartResizing,
                columnId: header.id,
                columnWidth: header.totalWidth,
                headerIdWidths: headerIdWidths,
                clientX: clientX
            });
        };
        return [
            props,
            {
                onMouseDown: function onMouseDown(e) {
                    return e.persist() || onResizeStart(e, header1);
                },
                onTouchStart: function onTouchStart(e) {
                    return e.persist() || onResizeStart(e, header1);
                },
                style: {
                    cursor: 'col-resize'
                },
                draggable: false,
                role: 'separator'
            }
        ];
    };
    useResizeColumns.pluginName = 'useResizeColumns';
    function reducer$b(state, action) {
        if (action.type === actions.init) return _extends({
            columnResizing: {
                columnWidths: {
                }
            }
        }, state);
        if (action.type === actions.resetResize) return _extends({
        }, state, {
            columnResizing: {
                columnWidths: {
                }
            }
        });
        if (action.type === actions.columnStartResizing) {
            var clientX = action.clientX, columnId = action.columnId, columnWidth = action.columnWidth, headerIdWidths = action.headerIdWidths;
            return _extends({
            }, state, {
                columnResizing: _extends({
                }, state.columnResizing, {
                    startX: clientX,
                    headerIdWidths: headerIdWidths,
                    columnWidth: columnWidth,
                    isResizingColumn: columnId
                })
            });
        }
        if (action.type === actions.columnResizing) {
            var _clientX = action.clientX;
            var _state$columnResizing = state.columnResizing, startX = _state$columnResizing.startX, _columnWidth = _state$columnResizing.columnWidth, _state$columnResizing2 = _state$columnResizing.headerIdWidths, _headerIdWidths = _state$columnResizing2 === void 0 ? [] : _state$columnResizing2;
            var deltaX = _clientX - startX;
            var percentageDeltaX = deltaX / _columnWidth;
            var newColumnWidths = {
            };
            _headerIdWidths.forEach(function(_ref2) {
                var headerId = _ref2[0], headerWidth = _ref2[1];
                newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
            });
            return _extends({
            }, state, {
                columnResizing: _extends({
                }, state.columnResizing, {
                    columnWidths: _extends({
                    }, state.columnResizing.columnWidths, {
                    }, newColumnWidths)
                })
            });
        }
        if (action.type === actions.columnDoneResizing) return _extends({
        }, state, {
            columnResizing: _extends({
            }, state.columnResizing, {
                startX: null,
                isResizingColumn: null
            })
        });
    }
    var useInstanceBeforeDimensions$1 = function useInstanceBeforeDimensions(instance) {
        var flatHeaders = instance.flatHeaders, disableResizing = instance.disableResizing, getHooks = instance.getHooks, columnResizing = instance.state.columnResizing;
        var getInstance = useGetLatest(instance);
        flatHeaders.forEach(function(header) {
            var canResize = getFirstDefined(header.disableResizing === true ? false : undefined, disableResizing === true ? false : undefined, true);
            header.canResize = canResize;
            header.width = columnResizing.columnWidths[header.id] || header.originalWidth || header.width;
            header.isResizing = columnResizing.isResizingColumn === header.id;
            if (canResize) header.getResizerProps = makePropGetter(getHooks().getResizerProps, {
                instance: getInstance(),
                header: header
            });
        });
    };
    function useInstance$b(instance) {
        var plugins = instance.plugins, dispatch = instance.dispatch, _instance$autoResetRe = instance.autoResetResize, autoResetResize = _instance$autoResetRe === void 0 ? true : _instance$autoResetRe, columns = instance.columns;
        ensurePluginOrder(plugins, [
            'useAbsoluteLayout'
        ], 'useResizeColumns');
        var getAutoResetResize = useGetLatest(autoResetResize);
        useMountedLayoutEffect(function() {
            if (getAutoResetResize()) dispatch({
                type: actions.resetResize
            });
        }, [
            columns
        ]);
        var resetResizing = React.useCallback(function() {
            return dispatch({
                type: actions.resetResize
            });
        }, [
            dispatch
        ]);
        Object.assign(instance, {
            resetResizing: resetResizing
        });
    }
    function getLeafHeaders(header2) {
        var leafHeaders = [];
        var recurseHeader1 = function recurseHeader(header) {
            if (header.columns && header.columns.length) header.columns.map(recurseHeader);
            leafHeaders.push(header);
        };
        recurseHeader1(header2);
        return leafHeaders;
    }
    var cellStyles = {
        position: 'absolute',
        top: 0
    };
    var useAbsoluteLayout = function useAbsoluteLayout(hooks) {
        hooks.getTableBodyProps.push(getRowStyles);
        hooks.getRowProps.push(getRowStyles);
        hooks.getHeaderGroupProps.push(getRowStyles);
        hooks.getFooterGroupProps.push(getRowStyles);
        hooks.getHeaderProps.push(function(props, _ref) {
            var column = _ref.column;
            return [
                props,
                {
                    style: _extends({
                    }, cellStyles, {
                        left: column.totalLeft + "px",
                        width: column.totalWidth + "px"
                    })
                }
            ];
        });
        hooks.getCellProps.push(function(props, _ref2) {
            var cell = _ref2.cell;
            return [
                props,
                {
                    style: _extends({
                    }, cellStyles, {
                        left: cell.column.totalLeft + "px",
                        width: cell.column.totalWidth + "px"
                    })
                }
            ];
        });
        hooks.getFooterProps.push(function(props, _ref3) {
            var column = _ref3.column;
            return [
                props,
                {
                    style: _extends({
                    }, cellStyles, {
                        left: column.totalLeft + "px",
                        width: column.totalWidth + "px"
                    })
                }
            ];
        });
    };
    useAbsoluteLayout.pluginName = 'useAbsoluteLayout';
    var getRowStyles = function getRowStyles(props, _ref4) {
        var instance = _ref4.instance;
        return [
            props,
            {
                style: {
                    position: 'relative',
                    width: instance.totalColumnsWidth + "px"
                }
            }
        ];
    };
    var cellStyles$1 = {
        display: 'inline-block',
        boxSizing: 'border-box'
    };
    var getRowStyles$1 = function getRowStyles(props, _ref) {
        var instance = _ref.instance;
        return [
            props,
            {
                style: {
                    display: 'flex',
                    width: instance.totalColumnsWidth + "px"
                }
            }
        ];
    };
    var useBlockLayout = function useBlockLayout(hooks) {
        hooks.getRowProps.push(getRowStyles$1);
        hooks.getHeaderGroupProps.push(getRowStyles$1);
        hooks.getFooterGroupProps.push(getRowStyles$1);
        hooks.getHeaderProps.push(function(props, _ref2) {
            var column = _ref2.column;
            return [
                props,
                {
                    style: _extends({
                    }, cellStyles$1, {
                        width: column.totalWidth + "px"
                    })
                }
            ];
        });
        hooks.getCellProps.push(function(props, _ref3) {
            var cell = _ref3.cell;
            return [
                props,
                {
                    style: _extends({
                    }, cellStyles$1, {
                        width: cell.column.totalWidth + "px"
                    })
                }
            ];
        });
        hooks.getFooterProps.push(function(props, _ref4) {
            var column = _ref4.column;
            return [
                props,
                {
                    style: _extends({
                    }, cellStyles$1, {
                        width: column.totalWidth + "px"
                    })
                }
            ];
        });
    };
    useBlockLayout.pluginName = 'useBlockLayout';
    function useFlexLayout(hooks) {
        hooks.getTableProps.push(getTableProps);
        hooks.getRowProps.push(getRowStyles$2);
        hooks.getHeaderGroupProps.push(getRowStyles$2);
        hooks.getFooterGroupProps.push(getRowStyles$2);
        hooks.getHeaderProps.push(getHeaderProps);
        hooks.getCellProps.push(getCellProps);
        hooks.getFooterProps.push(getFooterProps);
    }
    useFlexLayout.pluginName = 'useFlexLayout';
    var getTableProps = function getTableProps(props, _ref) {
        var instance = _ref.instance;
        return [
            props,
            {
                style: {
                    minWidth: instance.totalColumnsMinWidth + "px"
                }
            }
        ];
    };
    var getRowStyles$2 = function getRowStyles(props, _ref2) {
        var instance = _ref2.instance;
        return [
            props,
            {
                style: {
                    display: 'flex',
                    flex: '1 0 auto',
                    minWidth: instance.totalColumnsMinWidth + "px"
                }
            }
        ];
    };
    var getHeaderProps = function getHeaderProps(props, _ref3) {
        var column = _ref3.column;
        return [
            props,
            {
                style: {
                    boxSizing: 'border-box',
                    flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
                    minWidth: column.totalMinWidth + "px",
                    width: column.totalWidth + "px"
                }
            }
        ];
    };
    var getCellProps = function getCellProps(props, _ref4) {
        var cell = _ref4.cell;
        return [
            props,
            {
                style: {
                    boxSizing: 'border-box',
                    flex: cell.column.totalFlexWidth + " 0 auto",
                    minWidth: cell.column.totalMinWidth + "px",
                    width: cell.column.totalWidth + "px"
                }
            }
        ];
    };
    var getFooterProps = function getFooterProps(props, _ref5) {
        var column = _ref5.column;
        return [
            props,
            {
                style: {
                    boxSizing: 'border-box',
                    flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
                    minWidth: column.totalMinWidth + "px",
                    width: column.totalWidth + "px"
                }
            }
        ];
    };
    function useGridLayout(hooks) {
        hooks.stateReducers.push(reducer$c);
        hooks.getTableProps.push(getTableProps$1);
        hooks.getHeaderProps.push(getHeaderProps$1);
    }
    useGridLayout.pluginName = 'useGridLayout';
    var getTableProps$1 = function getTableProps(props, _ref) {
        var instance = _ref.instance;
        return [
            props,
            {
                style: {
                    display: "grid",
                    gridTemplateColumns: instance.state.gridLayout.columnWidths.map(function(w) {
                        return w;
                    }).join(" ")
                }
            }
        ];
    };
    var getHeaderProps$1 = function getHeaderProps(props, _ref2) {
        var column = _ref2.column;
        return [
            props,
            {
                id: "header-cell-" + column.id,
                style: {
                    position: "sticky" //enables a scroll wrapper to be placed around the table and have sticky headers
                }
            }
        ];
    };
    function reducer$c(state, action, previousState, instance) {
        if (action.type === "init") return _extends({
            gridLayout: {
                columnWidths: instance.columns.map(function() {
                    return "auto";
                })
            }
        }, state);
        if (action.type === "columnStartResizing") {
            var columnId = action.columnId;
            var columnIndex = instance.visibleColumns.findIndex(function(col) {
                return col.id === columnId;
            });
            var elWidth = getElementWidth(columnId);
            if (elWidth !== undefined) return _extends({
            }, state, {
                gridLayout: _extends({
                }, state.gridLayout, {
                    columnId: columnId,
                    columnIndex: columnIndex,
                    startingWidth: elWidth
                })
            });
            else return state;
        }
        if (action.type === "columnResizing") {
            var _state$gridLayout = state.gridLayout, _columnIndex = _state$gridLayout.columnIndex, startingWidth = _state$gridLayout.startingWidth, columnWidths = _state$gridLayout.columnWidths;
            var change = state.columnResizing.startX - action.clientX;
            var newWidth = startingWidth - change;
            var columnWidthsCopy = [].concat(columnWidths);
            columnWidthsCopy[_columnIndex] = newWidth + "px";
            return _extends({
            }, state, {
                gridLayout: _extends({
                }, state.gridLayout, {
                    columnWidths: columnWidthsCopy
                })
            });
        }
    }
    function getElementWidth(columnId) {
        var _document$getElementB;
        var width = (_document$getElementB = document.getElementById("header-cell-" + columnId)) == null ? void 0 : _document$getElementB.offsetWidth;
        if (width !== undefined) return width;
    }
    exports._UNSTABLE_usePivotColumns = _UNSTABLE_usePivotColumns;
    exports.actions = actions;
    exports.defaultColumn = defaultColumn1;
    exports.defaultGroupByFn = defaultGroupByFn;
    exports.defaultOrderByFn = defaultOrderByFn;
    exports.defaultRenderer = defaultRenderer;
    exports.emptyRenderer = emptyRenderer;
    exports.ensurePluginOrder = ensurePluginOrder;
    exports.flexRender = flexRender;
    exports.functionalUpdate = functionalUpdate;
    exports.loopHooks = loopHooks;
    exports.makePropGetter = makePropGetter;
    exports.makeRenderer = makeRenderer;
    exports.reduceHooks = reduceHooks;
    exports.safeUseLayoutEffect = safeUseLayoutEffect;
    exports.useAbsoluteLayout = useAbsoluteLayout;
    exports.useAsyncDebounce = useAsyncDebounce;
    exports.useBlockLayout = useBlockLayout;
    exports.useColumnOrder = useColumnOrder;
    exports.useExpanded = useExpanded;
    exports.useFilters = useFilters;
    exports.useFlexLayout = useFlexLayout;
    exports.useGetLatest = useGetLatest;
    exports.useGlobalFilter = useGlobalFilter;
    exports.useGridLayout = useGridLayout;
    exports.useGroupBy = useGroupBy;
    exports.useMountedLayoutEffect = useMountedLayoutEffect;
    exports.usePagination = usePagination;
    exports.useResizeColumns = useResizeColumns;
    exports.useRowSelect = useRowSelect;
    exports.useRowState = useRowState;
    exports.useSortBy = useSortBy;
    exports.useTable = useTable;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

},{"react":"4mchR"}],"71dM4":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$55c8 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$55c8.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _s = $RefreshSig$();
const SelectFilter = ({ column: { filterValue , setFilter , preFilteredRows , id  } ,  })=>{
    _s();
    // Calculate the options for filtering
    // using the preFilteredRows
    const options1 = _react.useMemo(()=>{
        const options = new Set();
        preFilteredRows.forEach((row)=>{
            if (row.values[id].includes(",")) {
                const values = row.values[id].split(",");
                for (let value of values)options.add(value);
            } else options.add(row.values[id]);
        });
        return [
            ...options.values()
        ];
    }, [
        id,
        preFilteredRows
    ]);
    // Render a multi-select box
    return(/*#__PURE__*/ _jsxRuntime.jsxs("select", {
        value: filterValue,
        onChange: (e)=>{
            setFilter(e.target.value || undefined);
        },
        className: "selectFilter",
        __source: {
            fileName: "src/components/reusables/SelectFilter.jsx",
            lineNumber: 20,
            columnNumber: 5
        },
        __self: undefined,
        children: [
            /*#__PURE__*/ _jsxRuntime.jsx("option", {
                value: "",
                className: "selectFiler__option",
                __source: {
                    fileName: "src/components/reusables/SelectFilter.jsx",
                    lineNumber: 27,
                    columnNumber: 7
                },
                __self: undefined,
                children: "All"
            }),
            options1.map((option, i)=>/*#__PURE__*/ _jsxRuntime.jsx("option", {
                    value: option,
                    className: "selectFiler__option",
                    __source: {
                        fileName: "src/components/reusables/SelectFilter.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    },
                    __self: undefined,
                    children: option
                }, i)
            )
        ]
    }));
};
_s(SelectFilter, "UfleS4trXWGxzhzYTKqqYygmjCE=");
_c = SelectFilter;
exports.default = SelectFilter;
var _c;
$RefreshReg$(_c, "SelectFilter");

  $parcel$ReactRefreshHelpers$55c8.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","react":"4mchR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}],"7VZgQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dateFormatter", ()=>dateFormatter
);
const dateFormatter = (dateInput)=>{
    const dateOutput = `${dateInput.slice(8, 10)}-${dateInput.slice(5, 7)}-${dateInput.slice(0, 4)}`;
    return dateOutput;
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["emU3S","2pvFy"], null, "parcelRequire30d9")

//# sourceMappingURL=Companies.ba1c5c1f.js.map
