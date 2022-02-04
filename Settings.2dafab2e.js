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

},{"react-refresh/runtime":"aeH4U"}],"g6nhb":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "dbcdcf642dafab2e";
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

},{}],"6HVWu":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$2068 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$2068.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _settingsMenuJsx = require("./SettingsMenu.jsx");
var _settingsMenuJsxDefault = parcelHelpers.interopDefault(_settingsMenuJsx);
var _usersSettingsJsx = require("./UsersSettings.jsx");
var _usersSettingsJsxDefault = parcelHelpers.interopDefault(_usersSettingsJsx);
var _accountSettingsJsx = require("./AccountSettings.jsx");
var _accountSettingsJsxDefault = parcelHelpers.interopDefault(_accountSettingsJsx);
var _themeSettingsJsx = require("./ThemeSettings.jsx");
var _themeSettingsJsxDefault = parcelHelpers.interopDefault(_themeSettingsJsx);
var _s = $RefreshSig$();
const Settings = ({ isAuth  })=>{
    _s();
    const [selectedPage, setSelectedPage] = _react.useState(0);
    const choices = [
        /*#__PURE__*/ _jsxRuntime.jsx(_usersSettingsJsxDefault.default, {
            isAuth: isAuth,
            __source: {
                fileName: "src/components/settings/Settings.jsx",
                lineNumber: 9,
                columnNumber: 5
            },
            __self: undefined
        }),
        /*#__PURE__*/ _jsxRuntime.jsx(_accountSettingsJsxDefault.default, {
            isAuth: isAuth,
            __source: {
                fileName: "src/components/settings/Settings.jsx",
                lineNumber: 10,
                columnNumber: 5
            },
            __self: undefined
        }),
        /*#__PURE__*/ _jsxRuntime.jsx(_themeSettingsJsxDefault.default, {
            __source: {
                fileName: "src/components/settings/Settings.jsx",
                lineNumber: 11,
                columnNumber: 5
            },
            __self: undefined
        }), 
    ];
    return(/*#__PURE__*/ _jsxRuntime.jsxs("main", {
        __source: {
            fileName: "src/components/settings/Settings.jsx",
            lineNumber: 14,
            columnNumber: 5
        },
        __self: undefined,
        children: [
            /*#__PURE__*/ _jsxRuntime.jsx(_settingsMenuJsxDefault.default, {
                setSelectedPage: setSelectedPage,
                isAuth: isAuth,
                __source: {
                    fileName: "src/components/settings/Settings.jsx",
                    lineNumber: 15,
                    columnNumber: 7
                },
                __self: undefined
            }),
            choices[selectedPage]
        ]
    }));
};
_s(Settings, "B+niNq4uVffVyLN7uVTTvus0iIQ=");
_c = Settings;
exports.default = Settings;
var _c;
$RefreshReg$(_c, "Settings");

  $parcel$ReactRefreshHelpers$2068.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","react":"4mchR","./SettingsMenu.jsx":"l3wY9","./UsersSettings.jsx":"o8ETh","./AccountSettings.jsx":"gf5BS","./ThemeSettings.jsx":"g4q3j","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}],"l3wY9":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$4084 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$4084.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _s = $RefreshSig$();
const SettingsMenu = ({ setSelectedPage , isAuth  })=>{
    _s();
    const [active, setActive] = _react.useState(()=>{
        return isAuth.role === "Admin" ? 0 : 1;
    });
    const [bgStyle, setBgStyle] = _react.useState({
        width: "0px",
        transform: `translate(0px, 0px)`
    });
    const firstLiRef = _react.useRef();
    const backgroundRef = _react.useRef();
    _react.useLayoutEffect(()=>{
        setBgStyle({
            width: document.getElementById(active).getBoundingClientRect().width,
            transform: `translate(${document.getElementById(active).getBoundingClientRect().x - firstLiRef.current.getBoundingClientRect().x}px, 0px)`
        });
        setSelectedPage(active);
    }, [
        active
    ]);
    const changeActive = (e)=>{
        const id = e.target.id;
        setActive(id);
    };
    return(/*#__PURE__*/ _jsxRuntime.jsx("nav", {
        className: "settingsSubmenu",
        __source: {
            fileName: "src/components/settings/SettingsMenu.jsx",
            lineNumber: 29,
            columnNumber: 5
        },
        __self: undefined,
        children: isAuth.role === "Admin" ? /*#__PURE__*/ _jsxRuntime.jsxs("ul", {
            __source: {
                fileName: "src/components/settings/SettingsMenu.jsx",
                lineNumber: 31,
                columnNumber: 9
            },
            __self: undefined,
            children: [
                /*#__PURE__*/ _jsxRuntime.jsx("li", {
                    className: active == 0 ? "active" : null,
                    ref: firstLiRef,
                    id: "0",
                    onClick: changeActive,
                    __source: {
                        fileName: "src/components/settings/SettingsMenu.jsx",
                        lineNumber: 32,
                        columnNumber: 11
                    },
                    __self: undefined,
                    children: "Users"
                }),
                /*#__PURE__*/ _jsxRuntime.jsx("li", {
                    className: active == 1 ? "active" : null,
                    id: "1",
                    onClick: changeActive,
                    __source: {
                        fileName: "src/components/settings/SettingsMenu.jsx",
                        lineNumber: 40,
                        columnNumber: 11
                    },
                    __self: undefined,
                    children: "Account"
                }),
                /*#__PURE__*/ _jsxRuntime.jsx("li", {
                    className: active == 2 ? "active" : null,
                    id: "2",
                    onClick: changeActive,
                    __source: {
                        fileName: "src/components/settings/SettingsMenu.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    },
                    __self: undefined,
                    children: "Theme"
                }),
                /*#__PURE__*/ _jsxRuntime.jsx("li", {
                    className: "background",
                    ref: backgroundRef,
                    style: bgStyle,
                    __source: {
                        fileName: "src/components/settings/SettingsMenu.jsx",
                        lineNumber: 54,
                        columnNumber: 11
                    },
                    __self: undefined
                })
            ]
        }) : /*#__PURE__*/ _jsxRuntime.jsxs("ul", {
            __source: {
                fileName: "src/components/settings/SettingsMenu.jsx",
                lineNumber: 57,
                columnNumber: 9
            },
            __self: undefined,
            children: [
                /*#__PURE__*/ _jsxRuntime.jsx("li", {
                    ref: firstLiRef,
                    className: active == 1 ? "active" : null,
                    id: "1",
                    onClick: changeActive,
                    __source: {
                        fileName: "src/components/settings/SettingsMenu.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    },
                    __self: undefined,
                    children: "Account"
                }),
                /*#__PURE__*/ _jsxRuntime.jsx("li", {
                    className: active == 2 ? "active" : null,
                    id: "2",
                    onClick: changeActive,
                    __source: {
                        fileName: "src/components/settings/SettingsMenu.jsx",
                        lineNumber: 66,
                        columnNumber: 11
                    },
                    __self: undefined,
                    children: "Theme"
                }),
                /*#__PURE__*/ _jsxRuntime.jsx("li", {
                    className: "background",
                    ref: backgroundRef,
                    style: bgStyle,
                    __source: {
                        fileName: "src/components/settings/SettingsMenu.jsx",
                        lineNumber: 73,
                        columnNumber: 11
                    },
                    __self: undefined
                })
            ]
        })
    }));
};
_s(SettingsMenu, "mvMv4OaUQ6A1Qdy3TXK/YpF+aJ4=");
_c = SettingsMenu;
exports.default = SettingsMenu;
var _c;
$RefreshReg$(_c, "SettingsMenu");

  $parcel$ReactRefreshHelpers$4084.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","react":"4mchR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}],"o8ETh":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$787e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$787e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
var _handleRequests = require("../../logic/handleRequests");
var _handleRequestsDefault = parcelHelpers.interopDefault(_handleRequests);
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _s = $RefreshSig$();
const UserPlaceholder = ()=>{
    return(/*#__PURE__*/ _jsxRuntime.jsxs("div", {
        className: "userCard placeholder",
        __source: {
            fileName: "src/components/settings/UsersSettings.jsx",
            lineNumber: 7,
            columnNumber: 5
        },
        __self: undefined,
        children: [
            /*#__PURE__*/ _jsxRuntime.jsx("span", {
                className: "imageContainer",
                __source: {
                    fileName: "src/components/settings/UsersSettings.jsx",
                    lineNumber: 8,
                    columnNumber: 7
                },
                __self: undefined,
                children: /*#__PURE__*/ _jsxRuntime.jsx("span", {
                    className: "img",
                    __source: {
                        fileName: "src/components/settings/UsersSettings.jsx",
                        lineNumber: 9,
                        columnNumber: 9
                    },
                    __self: undefined
                })
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("span", {
                className: "name",
                __source: {
                    fileName: "src/components/settings/UsersSettings.jsx",
                    lineNumber: 11,
                    columnNumber: 7
                },
                __self: undefined,
                children: "a"
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("span", {
                className: "username",
                __source: {
                    fileName: "src/components/settings/UsersSettings.jsx",
                    lineNumber: 12,
                    columnNumber: 7
                },
                __self: undefined,
                children: "a"
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("span", {
                className: "email",
                __source: {
                    fileName: "src/components/settings/UsersSettings.jsx",
                    lineNumber: 13,
                    columnNumber: 7
                },
                __self: undefined,
                children: "a"
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("span", {
                className: "userType",
                __source: {
                    fileName: "src/components/settings/UsersSettings.jsx",
                    lineNumber: 14,
                    columnNumber: 7
                },
                __self: undefined,
                children: "a"
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("span", {
                className: "options",
                __source: {
                    fileName: "src/components/settings/UsersSettings.jsx",
                    lineNumber: 15,
                    columnNumber: 7
                },
                __self: undefined
            })
        ]
    }));
};
_c = UserPlaceholder;
const UsersSettings = ({ isAuth  })=>{
    _s();
    const navigate = _reactRouterDom.useNavigate();
    const [users, setUsers] = _react.useState([]);
    const amountOfPlaceholders = [
        1,
        2,
        3,
        4,
        5
    ];
    _react.useEffect(()=>{
        getUsers();
    }, []);
    const getUsers = async ()=>{
        const data = await _handleRequestsDefault.default("GET", "https://csharpproject.somee.com/api/Auth/users", isAuth.jwt);
        setUsers(data.dataPackage);
    };
    const handleOptionsClick = (e)=>{
        console.log(e.target.parentNode.id);
    };
    const handleAdd = ()=>{
        navigate("/userAdd");
    };
    return(/*#__PURE__*/ _jsxRuntime.jsx("div", {
        className: "settings__users",
        __source: {
            fileName: "src/components/settings/UsersSettings.jsx",
            lineNumber: 41,
            columnNumber: 5
        },
        __self: undefined,
        children: /*#__PURE__*/ _jsxRuntime.jsxs("div", {
            className: "users card",
            __source: {
                fileName: "src/components/settings/UsersSettings.jsx",
                lineNumber: 42,
                columnNumber: 7
            },
            __self: undefined,
            children: [
                /*#__PURE__*/ _jsxRuntime.jsxs("h2", {
                    className: "settings__users--title",
                    __source: {
                        fileName: "src/components/settings/UsersSettings.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    },
                    __self: undefined,
                    children: [
                        "Users",
                        /*#__PURE__*/ _jsxRuntime.jsx("button", {
                            type: "button",
                            id: "userAdd",
                            onClick: handleAdd,
                            style: {
                                padding: "0 .5rem"
                            },
                            __source: {
                                fileName: "src/components/settings/UsersSettings.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            },
                            __self: undefined,
                            children: "+"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxRuntime.jsx("div", {
                    className: "usersContainer",
                    __source: {
                        fileName: "src/components/settings/UsersSettings.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    },
                    __self: undefined,
                    children: users.length === 0 ? amountOfPlaceholders.map((placeholder)=>/*#__PURE__*/ _jsxRuntime.jsx(UserPlaceholder, {
                            __source: {
                                fileName: "src/components/settings/UsersSettings.jsx",
                                lineNumber: 57,
                                columnNumber: 17
                            },
                            __self: undefined
                        }, placeholder)
                    ) : users.map((user, index1)=>{
                        const colors = (index)=>{
                            let colorIndex = index % 4;
                            let colorArray = [
                                "#61C9A8",
                                "#ED9B40",
                                "#BA3B46",
                                "#508991"
                            ];
                            return colorArray[colorIndex];
                        };
                        return(/*#__PURE__*/ _jsxRuntime.jsxs("div", {
                            id: user.id,
                            className: "userCard",
                            __source: {
                                fileName: "src/components/settings/UsersSettings.jsx",
                                lineNumber: 66,
                                columnNumber: 19
                            },
                            __self: undefined,
                            children: [
                                /*#__PURE__*/ _jsxRuntime.jsx("figure", {
                                    className: "imageContainer",
                                    __source: {
                                        fileName: "src/components/settings/UsersSettings.jsx",
                                        lineNumber: 67,
                                        columnNumber: 21
                                    },
                                    __self: undefined,
                                    children: /*#__PURE__*/ _jsxRuntime.jsx("div", {
                                        className: "img",
                                        style: {
                                            backgroundColor: colors(index1)
                                        },
                                        __source: {
                                            fileName: "src/components/settings/UsersSettings.jsx",
                                            lineNumber: 68,
                                            columnNumber: 23
                                        },
                                        __self: undefined,
                                        children: /*#__PURE__*/ _jsxRuntime.jsxs("span", {
                                            className: "img--text",
                                            __source: {
                                                fileName: "src/components/settings/UsersSettings.jsx",
                                                lineNumber: 72,
                                                columnNumber: 25
                                            },
                                            __self: undefined,
                                            children: [
                                                "F",
                                                "L"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsxs("span", {
                                    className: "name",
                                    __source: {
                                        fileName: "src/components/settings/UsersSettings.jsx",
                                        lineNumber: 78,
                                        columnNumber: 21
                                    },
                                    __self: undefined,
                                    children: [
                                        "Firstname",
                                        " ",
                                        "Lastname"
                                    ]
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsxs("span", {
                                    className: "username",
                                    __source: {
                                        fileName: "src/components/settings/UsersSettings.jsx",
                                        lineNumber: 81,
                                        columnNumber: 21
                                    },
                                    __self: undefined,
                                    children: [
                                        "@",
                                        user.userName
                                    ]
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsx("span", {
                                    className: "email",
                                    __source: {
                                        fileName: "src/components/settings/UsersSettings.jsx",
                                        lineNumber: 82,
                                        columnNumber: 21
                                    },
                                    __self: undefined,
                                    children: user.email
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsx("span", {
                                    className: "userType",
                                    __source: {
                                        fileName: "src/components/settings/UsersSettings.jsx",
                                        lineNumber: 83,
                                        columnNumber: 21
                                    },
                                    __self: undefined,
                                    children: user.userType
                                }),
                                /*#__PURE__*/ _jsxRuntime.jsx("i", {
                                    className: "fas fa-ellipsis-v options",
                                    onClick: handleOptionsClick,
                                    __source: {
                                        fileName: "src/components/settings/UsersSettings.jsx",
                                        lineNumber: 84,
                                        columnNumber: 21
                                    },
                                    __self: undefined
                                })
                            ]
                        }, user.id));
                    })
                })
            ]
        })
    }));
};
_s(UsersSettings, "9F/iyLR9P87HihtpGPMC534iECw=", false, function() {
    return [
        _reactRouterDom.useNavigate
    ];
});
_c1 = UsersSettings;
exports.default = UsersSettings;
var _c, _c1;
$RefreshReg$(_c, "UserPlaceholder");
$RefreshReg$(_c1, "UsersSettings");

  $parcel$ReactRefreshHelpers$787e.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","../../logic/handleRequests":"h0OCH","react":"4mchR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13","react-router-dom":"16kZP"}],"gf5BS":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$f463 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$f463.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
const AccountSettings = ({ isAuth  })=>{
    return(/*#__PURE__*/ _jsxRuntime.jsxs("div", {
        className: "card",
        __source: {
            fileName: "src/components/settings/AccountSettings.jsx",
            lineNumber: 3,
            columnNumber: 5
        },
        __self: undefined,
        children: [
            /*#__PURE__*/ _jsxRuntime.jsx("h2", {
                __source: {
                    fileName: "src/components/settings/AccountSettings.jsx",
                    lineNumber: 4,
                    columnNumber: 7
                },
                __self: undefined,
                children: "You : "
            }),
            /*#__PURE__*/ _jsxRuntime.jsx("br", {
                __source: {
                    fileName: "src/components/settings/AccountSettings.jsx",
                    lineNumber: 5,
                    columnNumber: 7
                },
                __self: undefined
            }),
            /*#__PURE__*/ _jsxRuntime.jsxs("p", {
                __source: {
                    fileName: "src/components/settings/AccountSettings.jsx",
                    lineNumber: 6,
                    columnNumber: 7
                },
                __self: undefined,
                children: [
                    "Username : ",
                    isAuth.name
                ]
            }),
            /*#__PURE__*/ _jsxRuntime.jsxs("p", {
                __source: {
                    fileName: "src/components/settings/AccountSettings.jsx",
                    lineNumber: 7,
                    columnNumber: 7
                },
                __self: undefined,
                children: [
                    "Role : ",
                    isAuth.role
                ]
            })
        ]
    }));
};
_c = AccountSettings;
exports.default = AccountSettings;
var _c;
$RefreshReg$(_c, "AccountSettings");

  $parcel$ReactRefreshHelpers$f463.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}],"g4q3j":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$4028 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$4028.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _hooks = require("../../logic/hooks");
var _theme = require("../../logic/theme");
var _s = $RefreshSig$();
const ThemeSettings = ()=>{
    _s();
    const [currentTheme, setCurrentTheme] = _hooks.useLocalState("cogipTheme", _theme.themes.original);
    const handleClick = (e)=>{
        const target = e.target;
        setCurrentTheme(_theme.themes[target.id]);
    };
    _react.useEffect(()=>{
        _theme.switchTheme(currentTheme);
    }, [
        currentTheme
    ]);
    return(/*#__PURE__*/ _jsxRuntime.jsxs("div", {
        className: "settings__themes card",
        __source: {
            fileName: "src/components/settings/ThemeSettings.jsx",
            lineNumber: 18,
            columnNumber: 5
        },
        __self: undefined,
        children: [
            /*#__PURE__*/ _jsxRuntime.jsx("h2", {
                className: "settings__themes--title",
                __source: {
                    fileName: "src/components/settings/ThemeSettings.jsx",
                    lineNumber: 19,
                    columnNumber: 7
                },
                __self: undefined,
                children: "Theme settings"
            }),
            /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                className: "themeContainer",
                __source: {
                    fileName: "src/components/settings/ThemeSettings.jsx",
                    lineNumber: 20,
                    columnNumber: 7
                },
                __self: undefined,
                children: [
                    /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                        className: "themeCard",
                        id: "original",
                        onClick: handleClick,
                        style: {
                            cursor: "pointer"
                        },
                        __source: {
                            fileName: "src/components/settings/ThemeSettings.jsx",
                            lineNumber: 21,
                            columnNumber: 9
                        },
                        __self: undefined,
                        children: [
                            "Original :",
                            /*#__PURE__*/ _jsxRuntime.jsx("div", {
                                className: "themeCard__colors",
                                __source: {
                                    fileName: "src/components/settings/ThemeSettings.jsx",
                                    lineNumber: 28,
                                    columnNumber: 11
                                },
                                __self: undefined,
                                children: /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                    className: "primary",
                                    __source: {
                                        fileName: "src/components/settings/ThemeSettings.jsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    },
                                    __self: undefined,
                                    children: [
                                        /*#__PURE__*/ _jsxRuntime.jsx("h3", {
                                            __source: {
                                                fileName: "src/components/settings/ThemeSettings.jsx",
                                                lineNumber: 30,
                                                columnNumber: 15
                                            },
                                            __self: undefined,
                                            children: "Title"
                                        }),
                                        /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                            __source: {
                                                fileName: "src/components/settings/ThemeSettings.jsx",
                                                lineNumber: 31,
                                                columnNumber: 15
                                            },
                                            __self: undefined,
                                            children: "Text"
                                        }),
                                        /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                            id: "lighterText",
                                            __source: {
                                                fileName: "src/components/settings/ThemeSettings.jsx",
                                                lineNumber: 32,
                                                columnNumber: 15
                                            },
                                            __self: undefined,
                                            children: "Lighter Text"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                        className: "themeCard",
                        id: "dark",
                        onClick: handleClick,
                        style: {
                            cursor: "pointer"
                        },
                        __source: {
                            fileName: "src/components/settings/ThemeSettings.jsx",
                            lineNumber: 36,
                            columnNumber: 9
                        },
                        __self: undefined,
                        children: [
                            "Dark :",
                            /*#__PURE__*/ _jsxRuntime.jsx("div", {
                                className: "themeCard__colors",
                                __source: {
                                    fileName: "src/components/settings/ThemeSettings.jsx",
                                    lineNumber: 43,
                                    columnNumber: 11
                                },
                                __self: undefined,
                                children: /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                    className: "primary",
                                    __source: {
                                        fileName: "src/components/settings/ThemeSettings.jsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    },
                                    __self: undefined,
                                    children: [
                                        /*#__PURE__*/ _jsxRuntime.jsx("h3", {
                                            __source: {
                                                fileName: "src/components/settings/ThemeSettings.jsx",
                                                lineNumber: 45,
                                                columnNumber: 15
                                            },
                                            __self: undefined,
                                            children: "Title"
                                        }),
                                        /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                            __source: {
                                                fileName: "src/components/settings/ThemeSettings.jsx",
                                                lineNumber: 46,
                                                columnNumber: 15
                                            },
                                            __self: undefined,
                                            children: "Text"
                                        }),
                                        /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                            id: "lighterText",
                                            __source: {
                                                fileName: "src/components/settings/ThemeSettings.jsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            },
                                            __self: undefined,
                                            children: "Lighter Text"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                        className: "themeCard",
                        id: "salmon",
                        onClick: handleClick,
                        style: {
                            cursor: "pointer"
                        },
                        __source: {
                            fileName: "src/components/settings/ThemeSettings.jsx",
                            lineNumber: 51,
                            columnNumber: 9
                        },
                        __self: undefined,
                        children: [
                            "Salmon :",
                            /*#__PURE__*/ _jsxRuntime.jsx("div", {
                                className: "themeCard__colors",
                                __source: {
                                    fileName: "src/components/settings/ThemeSettings.jsx",
                                    lineNumber: 58,
                                    columnNumber: 11
                                },
                                __self: undefined,
                                children: /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                    className: "primary",
                                    __source: {
                                        fileName: "src/components/settings/ThemeSettings.jsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    },
                                    __self: undefined,
                                    children: [
                                        /*#__PURE__*/ _jsxRuntime.jsx("h3", {
                                            __source: {
                                                fileName: "src/components/settings/ThemeSettings.jsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            },
                                            __self: undefined,
                                            children: "Title"
                                        }),
                                        /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                            __source: {
                                                fileName: "src/components/settings/ThemeSettings.jsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            },
                                            __self: undefined,
                                            children: "Text"
                                        }),
                                        /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                            id: "lighterText",
                                            __source: {
                                                fileName: "src/components/settings/ThemeSettings.jsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            },
                                            __self: undefined,
                                            children: "Lighter Text"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                        className: "themeCard",
                        id: "forest",
                        onClick: handleClick,
                        style: {
                            cursor: "pointer"
                        },
                        __source: {
                            fileName: "src/components/settings/ThemeSettings.jsx",
                            lineNumber: 66,
                            columnNumber: 9
                        },
                        __self: undefined,
                        children: [
                            "Forest :",
                            /*#__PURE__*/ _jsxRuntime.jsx("div", {
                                className: "themeCard__colors",
                                __source: {
                                    fileName: "src/components/settings/ThemeSettings.jsx",
                                    lineNumber: 73,
                                    columnNumber: 11
                                },
                                __self: undefined,
                                children: /*#__PURE__*/ _jsxRuntime.jsxs("div", {
                                    className: "primary",
                                    __source: {
                                        fileName: "src/components/settings/ThemeSettings.jsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    },
                                    __self: undefined,
                                    children: [
                                        /*#__PURE__*/ _jsxRuntime.jsx("h3", {
                                            __source: {
                                                fileName: "src/components/settings/ThemeSettings.jsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            },
                                            __self: undefined,
                                            children: "Title"
                                        }),
                                        /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                            __source: {
                                                fileName: "src/components/settings/ThemeSettings.jsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            },
                                            __self: undefined,
                                            children: "Text"
                                        }),
                                        /*#__PURE__*/ _jsxRuntime.jsx("p", {
                                            id: "lighterText",
                                            __source: {
                                                fileName: "src/components/settings/ThemeSettings.jsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            },
                                            __self: undefined,
                                            children: "Lighter Text"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
_s(ThemeSettings, "1r7DdYc/n+PXEiVe8nHC4vYvoDA=", false, function() {
    return [
        _hooks.useLocalState
    ];
});
_c = ThemeSettings;
exports.default = ThemeSettings;
var _c;
$RefreshReg$(_c, "ThemeSettings");

  $parcel$ReactRefreshHelpers$4028.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-runtime":"6Ds2u","react":"4mchR","../../logic/hooks":"6u3CE","../../logic/theme":"fFWM2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}],"6u3CE":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$4a0a = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$4a0a.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useLocalState", ()=>useLocalState
);
var _react = require("react");
var _s = $RefreshSig$();
const useLocalState = (key, initialValue)=>{
    _s();
    const saved = localStorage.getItem(key);
    const value = saved ? JSON.parse(saved) : null;
    const [theme, setTheme] = _react.useState(value || initialValue);
    _react.useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(theme));
    }, [
        key,
        theme
    ]);
    return [
        theme,
        setTheme
    ];
};
_s(useLocalState, "VryUsR3MErmcg97eIebzhB6j4fg=");

  $parcel$ReactRefreshHelpers$4a0a.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"4mchR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"9pz13"}]},["emU3S","g6nhb"], null, "parcelRequire30d9")

//# sourceMappingURL=Settings.2dafab2e.js.map
