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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
})({"awEvQ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
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

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _onboarding = require("@metamask/onboarding");
var _onboardingDefault = parcelHelpers.interopDefault(_onboarding);
const player = document.querySelector(".success-anim");
const onboarding = new (0, _onboardingDefault.default)();
const btn = document.querySelector(".onboard");
const statusText = document.querySelector("h1");
const statusDesc = document.querySelector(".desc");
const loader = document.querySelector(".loader");
const upArrow = document.querySelector(".up");
const confetti = document.querySelector(".confetti");
const isMetaMaskInstalled = ()=>{
    const { ethereum: ethereum1  } = window;
    return Boolean(ethereum1 && ethereum1.isMetaMask);
};
let connected = (accounts)=>{
    statusText.innerHTML = "Connected!";
    statusDesc.classList.add("account");
    statusDesc.innerHTML = accounts[0];
    btn.style.display = "none";
    loader.style.display = "none";
    upArrow.style.display = "none";
    confetti.style.display = "block";
    player.play();
    statusDesc.classList.add("account");
};
async function connectWallet() {
    return await ethereum.request({
        method: "eth_accounts"
    });
}
const onClickInstallMetaMask = ()=>{
    onboarding.startOnboarding();
    loader.style.display = "block";
};
btn.addEventListener("click", async ()=>{
    btn.style.backgroundColor = "#cccccc";
    loader.style.display = "block";
    try {
        const accounts = await ethereum.request({
            method: "eth_requestAccounts"
        });
        connected(accounts);
    } catch (error) {
        console.error(error);
    }
});
const MetaMaskClientCheck = ()=>{
    if (!isMetaMaskInstalled()) {
        statusText.innerText = "You need to Install a Wallet";
        statusDesc.innerText = "We recommend the MetaMask wallet.";
        btn.innerText = "Install MetaMask";
        btn.onclick = onClickInstallMetaMask;
    } else connectWallet().then((accounts)=>{
        if (accounts && accounts[0] > 0) connected(accounts);
        else {
            statusText.innerHTML = "Connect your wallet";
            statusDesc.innerHTML = `To begin, please connect your MetaMask wallet.`;
            btn.innerText = "Connect MetaMask";
            upArrow.style.display = "block";
        }
    });
};
MetaMaskClientCheck();

},{"@metamask/onboarding":"gSj9U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSj9U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bowser = require("bowser");
var _bowserDefault = parcelHelpers.interopDefault(_bowser);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var ONBOARDING_STATE = {
    INSTALLED: "INSTALLED",
    NOT_INSTALLED: "NOT_INSTALLED",
    REGISTERED: "REGISTERED",
    REGISTERING: "REGISTERING",
    RELOADING: "RELOADING"
};
var EXTENSION_DOWNLOAD_URL = {
    CHROME: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
    FIREFOX: "https://addons.mozilla.org/firefox/addon/ether-metamask/",
    DEFAULT: "https://metamask.io"
};
// sessionStorage key
var REGISTRATION_IN_PROGRESS = "REGISTRATION_IN_PROGRESS";
// forwarder iframe id
var FORWARDER_ID = "FORWARDER_ID";
var Onboarding = /** @class */ function() {
    function Onboarding(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.forwarderOrigin, forwarderOrigin = _c === void 0 ? "https://fwd.metamask.io" : _c, _d = _b.forwarderMode, forwarderMode = _d === void 0 ? Onboarding.FORWARDER_MODE.INJECT : _d;
        this.forwarderOrigin = forwarderOrigin;
        this.forwarderMode = forwarderMode;
        this.state = Onboarding.isMetaMaskInstalled() ? ONBOARDING_STATE.INSTALLED : ONBOARDING_STATE.NOT_INSTALLED;
        var browser = Onboarding._detectBrowser();
        if (browser) this.downloadUrl = EXTENSION_DOWNLOAD_URL[browser];
        else this.downloadUrl = EXTENSION_DOWNLOAD_URL.DEFAULT;
        this._onMessage = this._onMessage.bind(this);
        this._onMessageFromForwarder = this._onMessageFromForwarder.bind(this);
        this._openForwarder = this._openForwarder.bind(this);
        this._openDownloadPage = this._openDownloadPage.bind(this);
        this.startOnboarding = this.startOnboarding.bind(this);
        this.stopOnboarding = this.stopOnboarding.bind(this);
        window.addEventListener("message", this._onMessage);
        if (forwarderMode === Onboarding.FORWARDER_MODE.INJECT && sessionStorage.getItem(REGISTRATION_IN_PROGRESS) === "true") Onboarding._injectForwarder(this.forwarderOrigin);
    }
    Onboarding.prototype._onMessage = function(event) {
        if (event.origin !== this.forwarderOrigin) // Ignoring non-forwarder message
        return undefined;
        if (event.data.type === "metamask:reload") return this._onMessageFromForwarder(event);
        console.debug("Unknown message from '" + event.origin + "' with data " + JSON.stringify(event.data));
        return undefined;
    };
    Onboarding.prototype._onMessageUnknownStateError = function(state) {
        throw new Error("Unknown state: '" + state + "'");
    };
    Onboarding.prototype._onMessageFromForwarder = function(event) {
        return __awaiter(this, void 0, void 0, function() {
            var _a;
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = this.state;
                        switch(_a){
                            case ONBOARDING_STATE.RELOADING:
                                return [
                                    3 /*break*/ ,
                                    1
                                ];
                            case ONBOARDING_STATE.NOT_INSTALLED:
                                return [
                                    3 /*break*/ ,
                                    2
                                ];
                            case ONBOARDING_STATE.INSTALLED:
                                return [
                                    3 /*break*/ ,
                                    3
                                ];
                            case ONBOARDING_STATE.REGISTERING:
                                return [
                                    3 /*break*/ ,
                                    5
                                ];
                            case ONBOARDING_STATE.REGISTERED:
                                return [
                                    3 /*break*/ ,
                                    6
                                ];
                        }
                        return [
                            3 /*break*/ ,
                            7
                        ];
                    case 1:
                        console.debug("Ignoring message while reloading");
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 2:
                        console.debug("Reloading now to register with MetaMask");
                        this.state = ONBOARDING_STATE.RELOADING;
                        location.reload();
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 3:
                        console.debug("Registering with MetaMask");
                        this.state = ONBOARDING_STATE.REGISTERING;
                        return [
                            4 /*yield*/ ,
                            Onboarding._register()
                        ];
                    case 4:
                        _b.sent();
                        this.state = ONBOARDING_STATE.REGISTERED;
                        event.source.postMessage({
                            type: "metamask:registrationCompleted"
                        }, event.origin);
                        this.stopOnboarding();
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 5:
                        console.debug("Already registering - ignoring reload message");
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 6:
                        console.debug("Already registered - ignoring reload message");
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 7:
                        this._onMessageUnknownStateError(this.state);
                        _b.label = 8;
                    case 8:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /**
     * Starts onboarding by opening the MetaMask download page and the Onboarding forwarder
     */ Onboarding.prototype.startOnboarding = function() {
        sessionStorage.setItem(REGISTRATION_IN_PROGRESS, "true");
        this._openDownloadPage();
        this._openForwarder();
    };
    /**
     * Stops onboarding registration, including removing the injected forwarder (if any)
     *
     * Typically this function is not necessary, but it can be useful for cases where
     * onboarding completes before the forwarder has registered.
     */ Onboarding.prototype.stopOnboarding = function() {
        if (sessionStorage.getItem(REGISTRATION_IN_PROGRESS) === "true") {
            if (this.forwarderMode === Onboarding.FORWARDER_MODE.INJECT) {
                console.debug("Removing forwarder");
                Onboarding._removeForwarder();
            }
            sessionStorage.setItem(REGISTRATION_IN_PROGRESS, "false");
        }
    };
    Onboarding.prototype._openForwarder = function() {
        if (this.forwarderMode === Onboarding.FORWARDER_MODE.OPEN_TAB) window.open(this.forwarderOrigin, "_blank");
        else Onboarding._injectForwarder(this.forwarderOrigin);
    };
    Onboarding.prototype._openDownloadPage = function() {
        window.open(this.downloadUrl, "_blank");
    };
    /**
     * Checks whether the MetaMask extension is installed
     */ Onboarding.isMetaMaskInstalled = function() {
        return Boolean(window.ethereum && window.ethereum.isMetaMask);
    };
    Onboarding._register = function() {
        return window.ethereum.request({
            method: "wallet_registerOnboarding"
        });
    };
    Onboarding._injectForwarder = function(forwarderOrigin) {
        var container = document.body;
        var iframe = document.createElement("iframe");
        iframe.setAttribute("height", "0");
        iframe.setAttribute("width", "0");
        iframe.setAttribute("style", "display: none;");
        iframe.setAttribute("src", forwarderOrigin);
        iframe.setAttribute("id", FORWARDER_ID);
        container.insertBefore(iframe, container.children[0]);
    };
    Onboarding._removeForwarder = function() {
        var _a;
        (_a = document.getElementById(FORWARDER_ID)) === null || _a === void 0 || _a.remove();
    };
    Onboarding._detectBrowser = function() {
        var browserInfo = (0, _bowserDefault.default).parse(window.navigator.userAgent);
        if (browserInfo.browser.name === "Firefox") return "FIREFOX";
        else if ([
            "Chrome",
            "Chromium"
        ].includes(browserInfo.browser.name || "")) return "CHROME";
        return null;
    };
    Onboarding.FORWARDER_MODE = {
        INJECT: "INJECT",
        OPEN_TAB: "OPEN_TAB"
    };
    return Onboarding;
}();
exports.default = Onboarding;

},{"bowser":"5jYCf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5jYCf":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    return function(e) {
        var t = {};
        function r(n) {
            if (t[n]) return t[n].exports;
            var i = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
        }
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            });
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var i in e)r.d(n, i, (function(t) {
                return e[t];
            }).bind(null, i));
            return n;
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return r.d(t, "a", t), t;
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, r.p = "", r(r.s = 90);
    }({
        17: function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var n = r(18), i = function() {
                function e() {}
                return e.getFirstMatch = function(e, t) {
                    var r = t.match(e);
                    return r && r.length > 0 && r[1] || "";
                }, e.getSecondMatch = function(e, t) {
                    var r = t.match(e);
                    return r && r.length > 1 && r[2] || "";
                }, e.matchAndReturnConst = function(e, t, r) {
                    if (e.test(t)) return r;
                }, e.getWindowsVersionName = function(e) {
                    switch(e){
                        case "NT":
                            return "NT";
                        case "XP":
                            return "XP";
                        case "NT 5.0":
                            return "2000";
                        case "NT 5.1":
                            return "XP";
                        case "NT 5.2":
                            return "2003";
                        case "NT 6.0":
                            return "Vista";
                        case "NT 6.1":
                            return "7";
                        case "NT 6.2":
                            return "8";
                        case "NT 6.3":
                            return "8.1";
                        case "NT 10.0":
                            return "10";
                        default:
                            return;
                    }
                }, e.getMacOSVersionName = function(e) {
                    var t = e.split(".").splice(0, 2).map(function(e) {
                        return parseInt(e, 10) || 0;
                    });
                    if (t.push(0), 10 === t[0]) switch(t[1]){
                        case 5:
                            return "Leopard";
                        case 6:
                            return "Snow Leopard";
                        case 7:
                            return "Lion";
                        case 8:
                            return "Mountain Lion";
                        case 9:
                            return "Mavericks";
                        case 10:
                            return "Yosemite";
                        case 11:
                            return "El Capitan";
                        case 12:
                            return "Sierra";
                        case 13:
                            return "High Sierra";
                        case 14:
                            return "Mojave";
                        case 15:
                            return "Catalina";
                        default:
                            return;
                    }
                }, e.getAndroidVersionName = function(e) {
                    var t = e.split(".").splice(0, 2).map(function(e) {
                        return parseInt(e, 10) || 0;
                    });
                    if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0;
                }, e.getVersionPrecision = function(e) {
                    return e.split(".").length;
                }, e.compareVersions = function(t, r, n) {
                    void 0 === n && (n = !1);
                    var i = e.getVersionPrecision(t), s = e.getVersionPrecision(r), a = Math.max(i, s), o = 0, u = e.map([
                        t,
                        r
                    ], function(t) {
                        var r = a - e.getVersionPrecision(t), n = t + new Array(r + 1).join(".0");
                        return e.map(n.split("."), function(e) {
                            return new Array(20 - e.length).join("0") + e;
                        }).reverse();
                    });
                    for(n && (o = a - Math.min(i, s)), a -= 1; a >= o;){
                        if (u[0][a] > u[1][a]) return 1;
                        if (u[0][a] === u[1][a]) {
                            if (a === o) return 0;
                            a -= 1;
                        } else if (u[0][a] < u[1][a]) return -1;
                    }
                }, e.map = function(e, t) {
                    var r, n = [];
                    if (Array.prototype.map) return Array.prototype.map.call(e, t);
                    for(r = 0; r < e.length; r += 1)n.push(t(e[r]));
                    return n;
                }, e.find = function(e, t) {
                    var r, n;
                    if (Array.prototype.find) return Array.prototype.find.call(e, t);
                    for(r = 0, n = e.length; r < n; r += 1){
                        var i = e[r];
                        if (t(i, r)) return i;
                    }
                }, e.assign = function(e) {
                    for(var t, r, n = e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)s[a - 1] = arguments[a];
                    if (Object.assign) return Object.assign.apply(Object, [
                        e
                    ].concat(s));
                    var o = function() {
                        var e = s[t];
                        "object" == typeof e && null !== e && Object.keys(e).forEach(function(t) {
                            n[t] = e[t];
                        });
                    };
                    for(t = 0, r = s.length; t < r; t += 1)o();
                    return e;
                }, e.getBrowserAlias = function(e) {
                    return n.BROWSER_ALIASES_MAP[e];
                }, e.getBrowserTypeByAlias = function(e) {
                    return n.BROWSER_MAP[e] || "";
                }, e;
            }();
            t.default = i, e.exports = t.default;
        },
        18: function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0;
            t.BROWSER_ALIASES_MAP = {
                "Amazon Silk": "amazon_silk",
                "Android Browser": "android",
                Bada: "bada",
                BlackBerry: "blackberry",
                Chrome: "chrome",
                Chromium: "chromium",
                Electron: "electron",
                Epiphany: "epiphany",
                Firefox: "firefox",
                Focus: "focus",
                Generic: "generic",
                "Google Search": "google_search",
                Googlebot: "googlebot",
                "Internet Explorer": "ie",
                "K-Meleon": "k_meleon",
                Maxthon: "maxthon",
                "Microsoft Edge": "edge",
                "MZ Browser": "mz",
                "NAVER Whale Browser": "naver",
                Opera: "opera",
                "Opera Coast": "opera_coast",
                PhantomJS: "phantomjs",
                Puffin: "puffin",
                QupZilla: "qupzilla",
                QQ: "qq",
                QQLite: "qqlite",
                Safari: "safari",
                Sailfish: "sailfish",
                "Samsung Internet for Android": "samsung_internet",
                SeaMonkey: "seamonkey",
                Sleipnir: "sleipnir",
                Swing: "swing",
                Tizen: "tizen",
                "UC Browser": "uc",
                Vivaldi: "vivaldi",
                "WebOS Browser": "webos",
                WeChat: "wechat",
                "Yandex Browser": "yandex",
                Roku: "roku"
            };
            t.BROWSER_MAP = {
                amazon_silk: "Amazon Silk",
                android: "Android Browser",
                bada: "Bada",
                blackberry: "BlackBerry",
                chrome: "Chrome",
                chromium: "Chromium",
                electron: "Electron",
                epiphany: "Epiphany",
                firefox: "Firefox",
                focus: "Focus",
                generic: "Generic",
                googlebot: "Googlebot",
                google_search: "Google Search",
                ie: "Internet Explorer",
                k_meleon: "K-Meleon",
                maxthon: "Maxthon",
                edge: "Microsoft Edge",
                mz: "MZ Browser",
                naver: "NAVER Whale Browser",
                opera: "Opera",
                opera_coast: "Opera Coast",
                phantomjs: "PhantomJS",
                puffin: "Puffin",
                qupzilla: "QupZilla",
                qq: "QQ Browser",
                qqlite: "QQ Browser Lite",
                safari: "Safari",
                sailfish: "Sailfish",
                samsung_internet: "Samsung Internet for Android",
                seamonkey: "SeaMonkey",
                sleipnir: "Sleipnir",
                swing: "Swing",
                tizen: "Tizen",
                uc: "UC Browser",
                vivaldi: "Vivaldi",
                webos: "WebOS Browser",
                wechat: "WeChat",
                yandex: "Yandex Browser"
            };
            t.PLATFORMS_MAP = {
                tablet: "tablet",
                mobile: "mobile",
                desktop: "desktop",
                tv: "tv"
            };
            t.OS_MAP = {
                WindowsPhone: "Windows Phone",
                Windows: "Windows",
                MacOS: "macOS",
                iOS: "iOS",
                Android: "Android",
                WebOS: "WebOS",
                BlackBerry: "BlackBerry",
                Bada: "Bada",
                Tizen: "Tizen",
                Linux: "Linux",
                ChromeOS: "Chrome OS",
                PlayStation4: "PlayStation 4",
                Roku: "Roku"
            };
            t.ENGINE_MAP = {
                EdgeHTML: "EdgeHTML",
                Blink: "Blink",
                Trident: "Trident",
                Presto: "Presto",
                Gecko: "Gecko",
                WebKit: "WebKit"
            };
        },
        90: function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var n, i = (n = r(91)) && n.__esModule ? n : {
                default: n
            }, s = r(18);
            function a(e, t) {
                for(var r = 0; r < t.length; r++){
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                }
            }
            var o = function() {
                function e() {}
                var t, r, n;
                return e.getParser = function(e, t) {
                    if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
                    return new i.default(e, t);
                }, e.parse = function(e) {
                    return new i.default(e).getResult();
                }, t = e, n = [
                    {
                        key: "BROWSER_MAP",
                        get: function() {
                            return s.BROWSER_MAP;
                        }
                    },
                    {
                        key: "ENGINE_MAP",
                        get: function() {
                            return s.ENGINE_MAP;
                        }
                    },
                    {
                        key: "OS_MAP",
                        get: function() {
                            return s.OS_MAP;
                        }
                    },
                    {
                        key: "PLATFORMS_MAP",
                        get: function() {
                            return s.PLATFORMS_MAP;
                        }
                    }
                ], r = null, n && a(t, n), e;
            }();
            t.default = o, e.exports = t.default;
        },
        91: function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var n = u(r(92)), i = u(r(93)), s = u(r(94)), a = u(r(95)), o = u(r(17));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var d = function() {
                function e(e, t) {
                    if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
                    this._ua = e, this.parsedResult = {}, !0 !== t && this.parse();
                }
                var t = e.prototype;
                return t.getUA = function() {
                    return this._ua;
                }, t.test = function(e) {
                    return e.test(this._ua);
                }, t.parseBrowser = function() {
                    var e = this;
                    this.parsedResult.browser = {};
                    var t = o.default.find(n.default, function(t) {
                        if ("function" == typeof t.test) return t.test(e);
                        if (t.test instanceof Array) return t.test.some(function(t) {
                            return e.test(t);
                        });
                        throw new Error("Browser's test function is not valid");
                    });
                    return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
                }, t.getBrowser = function() {
                    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
                }, t.getBrowserName = function(e) {
                    return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
                }, t.getBrowserVersion = function() {
                    return this.getBrowser().version;
                }, t.getOS = function() {
                    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
                }, t.parseOS = function() {
                    var e = this;
                    this.parsedResult.os = {};
                    var t = o.default.find(i.default, function(t) {
                        if ("function" == typeof t.test) return t.test(e);
                        if (t.test instanceof Array) return t.test.some(function(t) {
                            return e.test(t);
                        });
                        throw new Error("Browser's test function is not valid");
                    });
                    return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
                }, t.getOSName = function(e) {
                    var t = this.getOS().name;
                    return e ? String(t).toLowerCase() || "" : t || "";
                }, t.getOSVersion = function() {
                    return this.getOS().version;
                }, t.getPlatform = function() {
                    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
                }, t.getPlatformType = function(e) {
                    void 0 === e && (e = !1);
                    var t = this.getPlatform().type;
                    return e ? String(t).toLowerCase() || "" : t || "";
                }, t.parsePlatform = function() {
                    var e = this;
                    this.parsedResult.platform = {};
                    var t = o.default.find(s.default, function(t) {
                        if ("function" == typeof t.test) return t.test(e);
                        if (t.test instanceof Array) return t.test.some(function(t) {
                            return e.test(t);
                        });
                        throw new Error("Browser's test function is not valid");
                    });
                    return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
                }, t.getEngine = function() {
                    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
                }, t.getEngineName = function(e) {
                    return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
                }, t.parseEngine = function() {
                    var e = this;
                    this.parsedResult.engine = {};
                    var t = o.default.find(a.default, function(t) {
                        if ("function" == typeof t.test) return t.test(e);
                        if (t.test instanceof Array) return t.test.some(function(t) {
                            return e.test(t);
                        });
                        throw new Error("Browser's test function is not valid");
                    });
                    return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
                }, t.parse = function() {
                    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
                }, t.getResult = function() {
                    return o.default.assign({}, this.parsedResult);
                }, t.satisfies = function(e) {
                    var t = this, r = {}, n = 0, i = {}, s = 0;
                    if (Object.keys(e).forEach(function(t) {
                        var a = e[t];
                        "string" == typeof a ? (i[t] = a, s += 1) : "object" == typeof a && (r[t] = a, n += 1);
                    }), n > 0) {
                        var a = Object.keys(r), u = o.default.find(a, function(e) {
                            return t.isOS(e);
                        });
                        if (u) {
                            var d = this.satisfies(r[u]);
                            if (void 0 !== d) return d;
                        }
                        var c = o.default.find(a, function(e) {
                            return t.isPlatform(e);
                        });
                        if (c) {
                            var f = this.satisfies(r[c]);
                            if (void 0 !== f) return f;
                        }
                    }
                    if (s > 0) {
                        var l = Object.keys(i), h = o.default.find(l, function(e) {
                            return t.isBrowser(e, !0);
                        });
                        if (void 0 !== h) return this.compareVersion(i[h]);
                    }
                }, t.isBrowser = function(e, t) {
                    void 0 === t && (t = !1);
                    var r = this.getBrowserName().toLowerCase(), n = e.toLowerCase(), i = o.default.getBrowserTypeByAlias(n);
                    return t && i && (n = i.toLowerCase()), n === r;
                }, t.compareVersion = function(e) {
                    var t = [
                        0
                    ], r = e, n = !1, i = this.getBrowserVersion();
                    if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0, r = e.substr(1)), t.indexOf(o.default.compareVersions(i, r, n)) > -1;
                }, t.isOS = function(e) {
                    return this.getOSName(!0) === String(e).toLowerCase();
                }, t.isPlatform = function(e) {
                    return this.getPlatformType(!0) === String(e).toLowerCase();
                }, t.isEngine = function(e) {
                    return this.getEngineName(!0) === String(e).toLowerCase();
                }, t.is = function(e, t) {
                    return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
                }, t.some = function(e) {
                    var t = this;
                    return void 0 === e && (e = []), e.some(function(e) {
                        return t.is(e);
                    });
                }, e;
            }();
            t.default = d, e.exports = t.default;
        },
        92: function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var n, i = (n = r(17)) && n.__esModule ? n : {
                default: n
            };
            var s = /version\/(\d+(\.?_?\d+)+)/i, a = [
                {
                    test: [
                        /googlebot/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Googlebot"
                        }, r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /opera/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Opera"
                        }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /opr\/|opios/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Opera"
                        }, r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /SamsungBrowser/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Samsung Internet for Android"
                        }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /Whale/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "NAVER Whale Browser"
                        }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /MZBrowser/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "MZ Browser"
                        }, r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /focus/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Focus"
                        }, r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /swing/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Swing"
                        }, r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /coast/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Opera Coast"
                        }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /opt\/\d+(?:.?_?\d+)+/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Opera Touch"
                        }, r = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /yabrowser/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Yandex Browser"
                        }, r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /ucbrowser/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "UC Browser"
                        }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /Maxthon|mxios/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Maxthon"
                        }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /epiphany/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Epiphany"
                        }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /puffin/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Puffin"
                        }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /sleipnir/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Sleipnir"
                        }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /k-meleon/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "K-Meleon"
                        }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /micromessenger/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "WeChat"
                        }, r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /qqbrowser/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                        }, r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /msie|trident/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Internet Explorer"
                        }, r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /\sedg\//i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Microsoft Edge"
                        }, r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /edg([ea]|ios)/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Microsoft Edge"
                        }, r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /vivaldi/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Vivaldi"
                        }, r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /seamonkey/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "SeaMonkey"
                        }, r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /sailfish/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Sailfish"
                        }, r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /silk/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Amazon Silk"
                        }, r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /phantom/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "PhantomJS"
                        }, r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /slimerjs/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "SlimerJS"
                        }, r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /blackberry|\bbb\d+/i,
                        /rim\stablet/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "BlackBerry"
                        }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /(web|hpw)[o0]s/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "WebOS Browser"
                        }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /bada/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Bada"
                        }, r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /tizen/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Tizen"
                        }, r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /qupzilla/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "QupZilla"
                        }, r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /firefox|iceweasel|fxios/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Firefox"
                        }, r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /electron/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Electron"
                        }, r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /MiuiBrowser/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Miui"
                        }, r = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /chromium/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Chromium"
                        }, r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /chrome|crios|crmo/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Chrome"
                        }, r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /GSA/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Google Search"
                        }, r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: function(e) {
                        var t = !e.test(/like android/i), r = e.test(/android/i);
                        return t && r;
                    },
                    describe: function(e) {
                        var t = {
                            name: "Android Browser"
                        }, r = i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /playstation 4/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "PlayStation 4"
                        }, r = i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /safari|applewebkit/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: "Safari"
                        }, r = i.default.getFirstMatch(s, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /.*/i
                    ],
                    describe: function(e) {
                        var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                        return {
                            name: i.default.getFirstMatch(t, e),
                            version: i.default.getSecondMatch(t, e)
                        };
                    }
                }
            ];
            t.default = a, e.exports = t.default;
        },
        93: function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var n, i = (n = r(17)) && n.__esModule ? n : {
                default: n
            }, s = r(18);
            var a = [
                {
                    test: [
                        /Roku\/DVP/
                    ],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                        return {
                            name: s.OS_MAP.Roku,
                            version: t
                        };
                    }
                },
                {
                    test: [
                        /windows phone/i
                    ],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                        return {
                            name: s.OS_MAP.WindowsPhone,
                            version: t
                        };
                    }
                },
                {
                    test: [
                        /windows /i
                    ],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e), r = i.default.getWindowsVersionName(t);
                        return {
                            name: s.OS_MAP.Windows,
                            version: t,
                            versionName: r
                        };
                    }
                },
                {
                    test: [
                        /Macintosh(.*?) FxiOS(.*?)\//
                    ],
                    describe: function(e) {
                        var t = {
                            name: s.OS_MAP.iOS
                        }, r = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /macintosh/i
                    ],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."), r = i.default.getMacOSVersionName(t), n = {
                            name: s.OS_MAP.MacOS,
                            version: t
                        };
                        return r && (n.versionName = r), n;
                    }
                },
                {
                    test: [
                        /(ipod|iphone|ipad)/i
                    ],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                        return {
                            name: s.OS_MAP.iOS,
                            version: t
                        };
                    }
                },
                {
                    test: function(e) {
                        var t = !e.test(/like android/i), r = e.test(/android/i);
                        return t && r;
                    },
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e), r = i.default.getAndroidVersionName(t), n = {
                            name: s.OS_MAP.Android,
                            version: t
                        };
                        return r && (n.versionName = r), n;
                    }
                },
                {
                    test: [
                        /(web|hpw)[o0]s/i
                    ],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e), r = {
                            name: s.OS_MAP.WebOS
                        };
                        return t && t.length && (r.version = t), r;
                    }
                },
                {
                    test: [
                        /blackberry|\bbb\d+/i,
                        /rim\stablet/i
                    ],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                        return {
                            name: s.OS_MAP.BlackBerry,
                            version: t
                        };
                    }
                },
                {
                    test: [
                        /bada/i
                    ],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                        return {
                            name: s.OS_MAP.Bada,
                            version: t
                        };
                    }
                },
                {
                    test: [
                        /tizen/i
                    ],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                        return {
                            name: s.OS_MAP.Tizen,
                            version: t
                        };
                    }
                },
                {
                    test: [
                        /linux/i
                    ],
                    describe: function() {
                        return {
                            name: s.OS_MAP.Linux
                        };
                    }
                },
                {
                    test: [
                        /CrOS/
                    ],
                    describe: function() {
                        return {
                            name: s.OS_MAP.ChromeOS
                        };
                    }
                },
                {
                    test: [
                        /PlayStation 4/
                    ],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                        return {
                            name: s.OS_MAP.PlayStation4,
                            version: t
                        };
                    }
                }
            ];
            t.default = a, e.exports = t.default;
        },
        94: function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var n, i = (n = r(17)) && n.__esModule ? n : {
                default: n
            }, s = r(18);
            var a = [
                {
                    test: [
                        /googlebot/i
                    ],
                    describe: function() {
                        return {
                            type: "bot",
                            vendor: "Google"
                        };
                    }
                },
                {
                    test: [
                        /huawei/i
                    ],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova", r = {
                            type: s.PLATFORMS_MAP.mobile,
                            vendor: "Huawei"
                        };
                        return t && (r.model = t), r;
                    }
                },
                {
                    test: [
                        /nexus\s*(?:7|8|9|10).*/i
                    ],
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.tablet,
                            vendor: "Nexus"
                        };
                    }
                },
                {
                    test: [
                        /ipad/i
                    ],
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.tablet,
                            vendor: "Apple",
                            model: "iPad"
                        };
                    }
                },
                {
                    test: [
                        /Macintosh(.*?) FxiOS(.*?)\//
                    ],
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.tablet,
                            vendor: "Apple",
                            model: "iPad"
                        };
                    }
                },
                {
                    test: [
                        /kftt build/i
                    ],
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.tablet,
                            vendor: "Amazon",
                            model: "Kindle Fire HD 7"
                        };
                    }
                },
                {
                    test: [
                        /silk/i
                    ],
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.tablet,
                            vendor: "Amazon"
                        };
                    }
                },
                {
                    test: [
                        /tablet(?! pc)/i
                    ],
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.tablet
                        };
                    }
                },
                {
                    test: function(e) {
                        var t = e.test(/ipod|iphone/i), r = e.test(/like (ipod|iphone)/i);
                        return t && !r;
                    },
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                        return {
                            type: s.PLATFORMS_MAP.mobile,
                            vendor: "Apple",
                            model: t
                        };
                    }
                },
                {
                    test: [
                        /nexus\s*[0-6].*/i,
                        /galaxy nexus/i
                    ],
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.mobile,
                            vendor: "Nexus"
                        };
                    }
                },
                {
                    test: [
                        /[^-]mobi/i
                    ],
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.mobile
                        };
                    }
                },
                {
                    test: function(e) {
                        return "blackberry" === e.getBrowserName(!0);
                    },
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.mobile,
                            vendor: "BlackBerry"
                        };
                    }
                },
                {
                    test: function(e) {
                        return "bada" === e.getBrowserName(!0);
                    },
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.mobile
                        };
                    }
                },
                {
                    test: function(e) {
                        return "windows phone" === e.getBrowserName();
                    },
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.mobile,
                            vendor: "Microsoft"
                        };
                    }
                },
                {
                    test: function(e) {
                        var t = Number(String(e.getOSVersion()).split(".")[0]);
                        return "android" === e.getOSName(!0) && t >= 3;
                    },
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.tablet
                        };
                    }
                },
                {
                    test: function(e) {
                        return "android" === e.getOSName(!0);
                    },
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.mobile
                        };
                    }
                },
                {
                    test: function(e) {
                        return "macos" === e.getOSName(!0);
                    },
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.desktop,
                            vendor: "Apple"
                        };
                    }
                },
                {
                    test: function(e) {
                        return "windows" === e.getOSName(!0);
                    },
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.desktop
                        };
                    }
                },
                {
                    test: function(e) {
                        return "linux" === e.getOSName(!0);
                    },
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.desktop
                        };
                    }
                },
                {
                    test: function(e) {
                        return "playstation 4" === e.getOSName(!0);
                    },
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.tv
                        };
                    }
                },
                {
                    test: function(e) {
                        return "roku" === e.getOSName(!0);
                    },
                    describe: function() {
                        return {
                            type: s.PLATFORMS_MAP.tv
                        };
                    }
                }
            ];
            t.default = a, e.exports = t.default;
        },
        95: function(e, t, r) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var n, i = (n = r(17)) && n.__esModule ? n : {
                default: n
            }, s = r(18);
            var a = [
                {
                    test: function(e) {
                        return "microsoft edge" === e.getBrowserName(!0);
                    },
                    describe: function(e) {
                        if (/\sedg\//i.test(e)) return {
                            name: s.ENGINE_MAP.Blink
                        };
                        var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                        return {
                            name: s.ENGINE_MAP.EdgeHTML,
                            version: t
                        };
                    }
                },
                {
                    test: [
                        /trident/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: s.ENGINE_MAP.Trident
                        }, r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: function(e) {
                        return e.test(/presto/i);
                    },
                    describe: function(e) {
                        var t = {
                            name: s.ENGINE_MAP.Presto
                        }, r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: function(e) {
                        var t = e.test(/gecko/i), r = e.test(/like gecko/i);
                        return t && !r;
                    },
                    describe: function(e) {
                        var t = {
                            name: s.ENGINE_MAP.Gecko
                        }, r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                },
                {
                    test: [
                        /(apple)?webkit\/537\.36/i
                    ],
                    describe: function() {
                        return {
                            name: s.ENGINE_MAP.Blink
                        };
                    }
                },
                {
                    test: [
                        /(apple)?webkit/i
                    ],
                    describe: function(e) {
                        var t = {
                            name: s.ENGINE_MAP.WebKit
                        }, r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                        return r && (t.version = r), t;
                    }
                }
            ];
            t.default = a, e.exports = t.default;
        }
    });
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["awEvQ","bB7Pu"], "bB7Pu", "parcelRequire0cc3")

//# sourceMappingURL=index.js.map
