'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(global.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    var runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    var ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    __extends(FirebaseError, _super);
    function FirebaseError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage);
        // Keys with an underscore at the end of their name are not included in
        // error.data for some reason.
        // TODO: Replace with Object.entries when lib is updated to es2017.
        for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
            var key = _b[_a];
            if (key.slice(-1) !== '_') {
                if (key in error) {
                    console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
                }
                error[key] = customData[key];
            }
        }
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? value.toString() : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            // If the service instance is available, resolve the promise with it immediately
            try {
                var instance = this.getOrInitializeService(normalizedIdentifier);
                if (instance) {
                    deferred.resolve(instance);
                }
            }
            catch (e) {
                // when the instance factory throws an exception during get(), it should not cause
                // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a = __assign({ identifier: DEFAULT_ENTRY_NAME, optional: false }, options), identifier = _a.identifier, optional = _a.optional;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            if (!instance) {
                if (optional) {
                    return null;
                }
                throw Error("Service " + this.name + " is not available");
            }
            return instance;
        }
        catch (e) {
            if (optional) {
                return null;
            }
            else {
                throw e;
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = component;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService(DEFAULT_ENTRY_NAME);
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = __values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService(normalizedIdentifier);
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var services;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all(services
                                .filter(function (service) { return 'INTERNAL' in service; })
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.getOrInitializeService = function (identifier) {
        var instance = this.instances.get(identifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
            this.instances.set(identifier, instance);
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays$1() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    switch (logType) {
        /**
         * By default, `console.debug` is not displayed in the developer console (in
         * chrome). To avoid forcing users to have to opt-in to these logs twice
         * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
         * logs to the `console.log` function.
         */
        case LogLevel.DEBUG:
            console.log.apply(console, __spreadArrays$1(["[" + now + "]  " + instance.name + ":"], args));
            break;
        case LogLevel.VERBOSE:
            console.log.apply(console, __spreadArrays$1(["[" + now + "]  " + instance.name + ":"], args));
            break;
        case LogLevel.INFO:
            console.info.apply(console, __spreadArrays$1(["[" + now + "]  " + instance.name + ":"], args));
            break;
        case LogLevel.WARN:
            console.warn.apply(console, __spreadArrays$1(["[" + now + "]  " + instance.name + ":"], args));
            break;
        case LogLevel.ERROR:
            console.error.apply(console, __spreadArrays$1(["[" + now + "]  " + instance.name + ":"], args));
            break;
        default:
            throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The log handler for the Logger instance.
         */
        this._logHandler = defaultLogHandler;
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError('Invalid value assigned to `logLevel`');
            }
            this._logLevel = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.ERROR], args));
    };
    return Logger;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a);
var ERROR_FACTORY = new ErrorFactory('app', 'Firebase', ERRORS);

var name = "@firebase/app";
var version = "0.5.5";

var name$1 = "@firebase/analytics";

var name$2 = "@firebase/auth";

var name$3 = "@firebase/database";

var name$4 = "@firebase/functions";

var name$5 = "@firebase/installations";

var name$6 = "@firebase/messaging";

var name$7 = "@firebase/performance";

var name$8 = "@firebase/remote-config";

var name$9 = "@firebase/storage";

var name$a = "@firebase/firestore";

var name$b = "firebase-wrapper";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var DEFAULT_ENTRY_NAME$1 = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {},
    _a$1[name] = 'fire-core',
    _a$1[name$1] = 'fire-analytics',
    _a$1[name$2] = 'fire-auth',
    _a$1[name$3] = 'fire-rtdb',
    _a$1[name$4] = 'fire-fn',
    _a$1[name$5] = 'fire-iid',
    _a$1[name$6] = 'fire-fcm',
    _a$1[name$7] = 'fire-perf',
    _a$1[name$8] = 'fire-rc',
    _a$1[name$9] = 'fire-gcs',
    _a$1[name$a] = 'fire-fst',
    _a$1['fire-js'] = 'fire-js',
    _a$1[name$b] = 'fire-js-all',
    _a$1);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new Logger('@firebase/app');

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        var e_1, _a;
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = deepCopy(options);
        this.container = new ComponentContainer(config.name);
        // add itself to container
        this._addComponent(new Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
        try {
            // populate ComponentContainer with existing components
            for (var _b = __values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component = _c.value;
                this._addComponent(component);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function (provider) { return provider.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME$1; }
        this.checkDestroyed_();
        // getImmediate will always succeed because _getService is only called for registered components.
        return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier
        });
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME$1; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.container.getProvider(name).clearInstance(instanceIdentifier);
    };
    /**
     * @param component the component being added to this app's container
     */
    FirebaseAppImpl.prototype._addComponent = function (component) {
        try {
            this.container.addComponent(component);
        }
        catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
    };
    FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
        this.container.addOrOverwriteComponent(component);
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version$1 = "7.9.2";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var components = new Map();
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME$1;
        if (!contains(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME$1;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if (contains(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    function registerComponent(component) {
        var e_1, _a;
        var componentName = component.name;
        if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC" /* PUBLIC */
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    namespace[componentName]
                : null;
        }
        components.set(componentName, component);
        // create service namespace for public components
        if (component.type === "PUBLIC" /* PUBLIC */) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function (appArg) {
                if (appArg === void 0) { appArg = app(); }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentName] !== 'function') {
                    // Invalid argument.
                    // This happens in the following case: firebase.storage('gs:/')
                    throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                        appName: componentName
                    });
                }
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
                deepExtend(serviceNamespace, component.serviceProps);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] =
                // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                // option added to the no-explicit-any rule when ESlint releases it.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var serviceFxn = this._getService.bind(this, componentName);
                    return serviceFxn.apply(this, component.multipleInstances ? args : []);
                };
        }
        try {
            // add the component to existing app instances
            for (var _b = __values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var appName = _c.value;
                apps[appName]._addComponent(component);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return component.type === "PUBLIC" /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName]
            : null;
    }
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
            library += "-" + variant;
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            var warning = [
                "Unable to register library \"" + library + "\" with version \"" + version + "\":"
            ];
            if (libraryMismatch) {
                warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }
            logger.warn(warning.join(' '));
            return;
        }
        registerComponent(new Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = __assign(__assign({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: createSubscribe,
        ErrorFactory: ErrorFactory,
        deepExtend: deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        deepExtend(namespace, props);
    }
    return namespace;
}
var firebase = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = /** @class */ (function () {
    function PlatformLoggerService(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerService.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerService;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase, variant) {
    firebase.INTERNAL.registerComponent(new Component('platform-logger', function (container) { return new PlatformLoggerService(container); }, "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    firebase.registerVersion(name, version, variant);
    // Register platform SDK identifier (no version).
    firebase.registerVersion('fire-js', '');
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (isBrowser() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var initializeApp = firebase.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if (isNode()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase$1 = firebase;
registerCoreComponents(firebase$1);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var g,goog=goog||{},k=commonjsGlobal;function m(a){return "string"==typeof a}function aa(a){return "number"==typeof a}function n(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}function ba(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return "array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return "object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return "array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return "function"}else return "null";
else if("function"==b&&"undefined"==typeof a.call)return "object";return b}function q(a){return "array"==p(a)}function ca(a){var b=p(a);return "array"==b||"object"==b&&"number"==typeof a.length}function r(a){var b=typeof a;return "object"==b&&null!=a||"function"==b}var t="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u=ea:u=fa;return u.apply(null,arguments)}
function v(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var w=Date.now||function(){return +new Date};function x(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.yb=function(d,e,f){for(var h=Array(arguments.length-2),l=2;l<arguments.length;l++)h[l-2]=arguments[l];return b.prototype[e].apply(d,h)};}function y(){this.j=this.j;this.i=this.i;}var ha=0;y.prototype.j=!1;y.prototype.la=function(){if(!this.j&&(this.j=!0,this.G(),0!=ha)){var a=this[t]||(this[t]=++da);}};y.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()();};var ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(m(a))return m(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1},la=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c);}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a);};
function ma(a){a:{var b=na;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1;}return 0>b?null:m(a)?a.charAt(b):a[b]}function oa(a){return Array.prototype.concat.apply([],arguments)}function pa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return []}function qa(a){return /^[\s\xa0]*$/.test(a)}var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function z(a,b){return -1!=a.indexOf(b)}function sa(a,b){return a<b?-1:a>b?1:0}var A;a:{var ta=k.navigator;if(ta){var ua=ta.userAgent;if(ua){A=ua;break a}}A="";}function va(a,b,c){for(var d in a)b.call(c,a[d],d,a);}function wa(a){var b={},c;for(c in a)b[c]=a[c];return b}var xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xa.length;f++)c=xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c]);}}function za(a){za[" "](a);return a}za[" "]=ba;function Aa(a,b){var c=Ba;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}var Ca=z(A,"Opera"),B=z(A,"Trident")||z(A,"MSIE"),Da=z(A,"Edge"),Ea=Da||B,Fa=z(A,"Gecko")&&!(z(A.toLowerCase(),"webkit")&&!z(A,"Edge"))&&!(z(A,"Trident")||z(A,"MSIE"))&&!z(A,"Edge"),Ga=z(A.toLowerCase(),"webkit")&&!z(A,"Edge");function Ha(){var a=k.document;return a?a.documentMode:void 0}var Ia;
a:{var Ja="",Ka=function(){var a=A;if(Fa)return /rv:([^\);]+)(\)|;)/.exec(a);if(Da)return /Edge\/([\d\.]+)/.exec(a);if(B)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ga)return /WebKit\/(\S+)/.exec(a);if(Ca)return /(?:Version)[ \/]?(\S+)/.exec(a)}();Ka&&(Ja=Ka?Ka[1]:"");if(B){var La=Ha();if(null!=La&&La>parseFloat(Ja)){Ia=String(La);break a}}Ia=Ja;}var Ba={};
function Ma(a){return Aa(a,function(){for(var b=0,c=ra(String(Ia)).split("."),d=ra(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",l=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;b=sa(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||sa(0==h[2].length,0==l[2].length)||sa(h[2],l[2]);h=h[3];l=l[3];}while(0==b)}return 0<=b})}var Na;var Oa=k.document;
Na=Oa&&B?Ha()||("CSS1Compat"==Oa.compatMode?parseInt(Ia,10):5):void 0;var Pa=!B||9<=Number(Na),Qa=B&&!Ma("9"),Ra=function(){if(!k.addEventListener||!Object.defineProperty)return !1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0;}});try{k.addEventListener("test",ba,b),k.removeEventListener("test",ba,b);}catch(c){}return a}();function C(a,b){this.type=a;this.a=this.target=b;this.Ia=!0;}C.prototype.b=function(){this.Ia=!1;};function D(a,b){C.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.c=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(Fa){a:{try{za(b.nodeName);var e=!0;break a}catch(f){}e=!1;}e||(b=null);}}else "mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=m(a.pointerType)?a.pointerType:Sa[a.pointerType]||"";this.c=a;a.defaultPrevented&&this.b();}}x(D,C);var Sa={2:"touch",3:"pen",4:"mouse"};D.prototype.b=function(){D.N.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Qa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1;}catch(b){}};var F="closure_listenable_"+(1E6*Math.random()|0),Ta=0;function Ua(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.da=e;this.key=++Ta;this.X=this.Z=!1;}function Va(a){a.X=!0;a.listener=null;a.proxy=null;a.src=null;a.da=null;}function Wa(a){this.src=a;this.a={};this.b=0;}Wa.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var h=Xa(a,b,d,e);-1<h?(b=a[h],c||(b.Z=!1)):(b=new Ua(b,this.src,f,!!d,e),b.Z=c,a.push(b));return b};function Ya(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ja(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(Va(b),0==a.a[c].length&&(delete a.a[c],a.b--));}}
function Xa(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.X&&f.listener==b&&f.capture==!!c&&f.da==d)return e}return -1}var Za="closure_lm_"+(1E6*Math.random()|0),$a={};function bb(a,b,c,d,e){if(d&&d.once)return cb(a,b,c,d,e);if(q(b)){for(var f=0;f<b.length;f++)bb(a,b[f],c,d,e);return null}c=db(c);return a&&a[F]?a.za(b,c,r(d)?!!d.capture:!!d,e):eb(a,b,c,!1,d,e)}
function eb(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=r(e)?!!e.capture:!!e;if(h&&!Pa)return null;var l=fb(a);l||(a[Za]=l=new Wa(a));c=l.add(b,c,d,h,f);if(c.proxy)return c;d=gb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ra||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(hb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function gb(){var a=ib,b=Pa?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function cb(a,b,c,d,e){if(q(b)){for(var f=0;f<b.length;f++)cb(a,b[f],c,d,e);return null}c=db(c);return a&&a[F]?a.Aa(b,c,r(d)?!!d.capture:!!d,e):eb(a,b,c,!0,d,e)}
function jb(a,b,c,d,e){if(q(b))for(var f=0;f<b.length;f++)jb(a,b[f],c,d,e);else (d=r(d)?!!d.capture:!!d,c=db(c),a&&a[F])?(a=a.c,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Xa(f,c,d,e),-1<c&&(Va(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=fb(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Xa(b,c,d,e)),(c=-1<a?b[a]:null)&&kb(c));}
function kb(a){if(!aa(a)&&a&&!a.X){var b=a.src;if(b&&b[F])Ya(b.c,a);else {var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(hb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);(c=fb(b))?(Ya(c,a),0==c.b&&(c.src=null,b[Za]=null)):Va(a);}}}function hb(a){return a in $a?$a[a]:$a[a]="on"+a}function lb(a,b){var c=a.listener,d=a.da||a.src;a.Z&&kb(a);return c.call(d,b)}
function ib(a,b){return a.X?!0:Pa?lb(a,new D(b,this)):(b=new D(b||n("window.event"),this),lb(a,b))}function fb(a){a=a[Za];return a instanceof Wa?a:null}var mb="__closure_events_fn_"+(1E9*Math.random()>>>0);function db(a){if("function"==p(a))return a;a[mb]||(a[mb]=function(b){return a.handleEvent(b)});return a[mb]}function G(){y.call(this);this.c=new Wa(this);this.J=this;this.B=null;}x(G,y);G.prototype[F]=!0;g=G.prototype;g.addEventListener=function(a,b,c,d){bb(this,a,b,c,d);};g.removeEventListener=function(a,b,c,d){jb(this,a,b,c,d);};
g.dispatchEvent=function(a){var b,c=this.B;if(c)for(b=[];c;c=c.B)b.push(c);c=this.J;var d=a.type||a;if(m(a))a=new C(a,c);else if(a instanceof C)a.target=a.target||c;else {var e=a;a=new C(d,c);ya(a,e);}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var h=a.a=b[f];e=nb(h,d,!0,a)&&e;}h=a.a=c;e=nb(h,d,!0,a)&&e;e=nb(h,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)h=a.a=b[f],e=nb(h,d,!1,a)&&e;return e};
g.G=function(){G.N.G.call(this);if(this.c){var a=this.c,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)Va(d[e]);delete a.a[c];a.b--;}}this.B=null;};g.za=function(a,b,c,d){return this.c.add(String(a),b,!1,c,d)};g.Aa=function(a,b,c,d){return this.c.add(String(a),b,!0,c,d)};
function nb(a,b,c,d){b=a.c.a[String(b)];if(!b)return !0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.X&&h.capture==c){var l=h.listener,E=h.da||h.src;h.Z&&Ya(a.c,h);e=!1!==l.call(E,d)&&e;}}return e&&0!=d.Ia}var ob=k.JSON.stringify;function pb(a,b){this.c=a;this.f=b;this.b=0;this.a=null;}pb.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null;}else a=this.c();return a};function qb(){this.b=this.a=null;}var sb=new pb(function(){return new rb},function(a){a.reset();});qb.prototype.add=function(a,b){var c=sb.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c;};function tb(){var a=ub,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function rb(){this.next=this.b=this.a=null;}rb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null;};rb.prototype.reset=function(){this.next=this.b=this.a=null;};function vb(a){k.setTimeout(function(){throw a;},0);}function wb(a,b){xb||yb();zb||(xb(),zb=!0);ub.add(a,b);}var xb;function yb(){var a=k.Promise.resolve(void 0);xb=function(){a.then(Ab);};}var zb=!1,ub=new qb;function Ab(){for(var a;a=tb();){try{a.a.call(a.b);}catch(c){vb(c);}var b=sb;b.f(a);100>b.b&&(b.b++,a.next=b.a,b.a=a);}zb=!1;}function Cb(a,b){G.call(this);this.b=a||1;this.a=b||k;this.f=u(this.gb,this);this.g=w();}x(Cb,G);g=Cb.prototype;g.ba=!1;g.L=null;g.gb=function(){if(this.ba){var a=w()-this.g;0<a&&a<.8*this.b?this.L=this.a.setTimeout(this.f,this.b-a):(this.L&&(this.a.clearTimeout(this.L),this.L=null),this.dispatchEvent("tick"),this.ba&&(Db(this),this.start()));}};g.start=function(){this.ba=!0;this.L||(this.L=this.a.setTimeout(this.f,this.b),this.g=w());};function Db(a){a.ba=!1;a.L&&(a.a.clearTimeout(a.L),a.L=null);}
g.G=function(){Cb.N.G.call(this);Db(this);delete this.a;};function Eb(a,b,c){if("function"==p(a))c&&(a=u(a,c));else if(a&&"function"==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)}function Fb(a,b,c){y.call(this);this.f=null!=c?u(a,c):a;this.c=b;this.b=u(this.$a,this);this.a=[];}x(Fb,y);g=Fb.prototype;g.ea=!1;g.U=null;g.Ta=function(a){this.a=arguments;this.U?this.ea=!0:Gb(this);};g.G=function(){Fb.N.G.call(this);this.U&&(k.clearTimeout(this.U),this.U=null,this.ea=!1,this.a=[]);};g.$a=function(){this.U=null;this.ea&&(this.ea=!1,Gb(this));};function Gb(a){a.U=Eb(a.b,a.c);a.f.apply(null,a.a);}function H(a){y.call(this);this.b=a;this.a={};}x(H,y);var Hb=[];function Ib(a,b,c,d){q(c)||(c&&(Hb[0]=c.toString()),c=Hb);for(var e=0;e<c.length;e++){var f=bb(b,c[e],d||a.handleEvent,!1,a.b||a);if(!f)break;a.a[f.key]=f;}}function Jb(a){va(a.a,function(b,c){this.a.hasOwnProperty(c)&&kb(b);},a);a.a={};}H.prototype.G=function(){H.N.G.call(this);Jb(this);};H.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Kb(){}var I=new G;function Lb(a){C.call(this,"serverreachability",a);}x(Lb,C);function J(a){I.dispatchEvent(new Lb(I,a));}function Mb(a){C.call(this,"statevent",a);}x(Mb,C);function K(a){I.dispatchEvent(new Mb(I,a));}function Nb(a){C.call(this,"timingevent",a);}x(Nb,C);function Ob(a,b){if("function"!=p(a))throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){a();},b)}var Pb={NO_ERROR:0,hb:1,ob:2,nb:3,kb:4,mb:5,pb:6,La:7,TIMEOUT:8,sb:9};var Qb={jb:"complete",wb:"success",Ma:"error",La:"abort",ub:"ready",vb:"readystatechange",TIMEOUT:"timeout",qb:"incrementaldata",tb:"progress",lb:"downloadprogress",xb:"uploadprogress"};function Rb(){}Rb.prototype.a=null;function Sb(a){var b;(b=a.a)||(b=a.a={});return b}function Tb(){}var L={OPEN:"a",ib:"b",Ma:"c",rb:"d"};function Ub(){C.call(this,"d");}x(Ub,C);function Vb(){C.call(this,"c");}x(Vb,C);var Wb;function Xb(){}x(Xb,Rb);Wb=new Xb;function M(a,b,c){this.g=a;this.W=b;this.V=c||1;this.I=new H(this);this.O=Yb;a=Ea?125:void 0;this.P=new Cb(a);this.h=null;this.b=!1;this.l=this.D=this.f=this.F=this.v=this.R=this.i=null;this.j=[];this.a=null;this.A=0;this.c=this.w=null;this.o=-1;this.m=!1;this.J=0;this.B=null;this.s=this.S=this.H=!1;}var Yb=45E3,Zb={},$b={};g=M.prototype;g.setTimeout=function(a){this.O=a;};function ac(a,b,c){a.F=1;a.f=bc(N(b));a.l=c;a.H=!0;cc(a,null);}function dc(a,b,c,d){a.F=1;a.f=bc(N(b));a.l=null;a.H=c;cc(a,d);}
function cc(a,b){a.v=w();ec(a);a.D=N(a.f);fc(a.D,"t",a.V);a.A=0;a.a=a.g.$(a.g.Y()?b:null);0<a.J&&(a.B=new Fb(u(a.Ja,a,a.a),a.J));Ib(a.I,a.a,"readystatechange",a.cb);b=a.h?wa(a.h):{};a.l?(a.w||(a.w="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.a.ca(a.D,a.w,a.l,b)):(a.w="GET",a.a.ca(a.D,a.w,null,b));J(1);}g.cb=function(a){a=a.target;var b=this.B;b&&3==O(a)?b.Ta():this.Ja(a);};
g.Ja=function(a){try{if(a==this.a)a:{var b=O(this.a),c=this.a.ya(),d=this.a.T();if(!(3>b||3==b&&!Ea&&!this.a.aa())){this.m||4!=b||7==c||(8==c||0>=d?J(3):J(2));gc(this);var e=this.a.T();this.o=e;var f=this.a.aa();if(this.b=200==e){if(this.S&&!this.s){b:{if(this.a){var h=hc(this.a,"X-HTTP-Initial-Response");if(h&&!qa(h)){var l=h;break b}}l=null;}if(l)this.s=!0,ic(this,l);else {this.b=!1;this.c=3;K(12);P(this);jc(this);break a}}this.H?(kc(this,b,f),Ea&&this.b&&3==b&&(Ib(this.I,this.P,"tick",this.bb),this.P.start())):
ic(this,f);4==b&&P(this);this.b&&!this.m&&(4==b?this.g.na(this):(this.b=!1,ec(this)));}else 400==e&&0<f.indexOf("Unknown SID")?(this.c=3,K(12)):(this.c=0,K(13)),P(this),jc(this);}}}catch(E){}finally{}};function kc(a,b,c){for(var d=!0;!a.m&&a.A<c.length;){var e=lc(a,c);if(e==$b){4==b&&(a.c=4,K(14),d=!1);break}else if(e==Zb){a.c=4;K(15);d=!1;break}else ic(a,e);}4==b&&0==c.length&&(a.c=1,K(16),d=!1);a.b=a.b&&d;d||(P(a),jc(a));}
g.bb=function(){if(this.a){var a=O(this.a),b=this.a.aa();this.A<b.length&&(gc(this),kc(this,a,b),this.b&&4!=a&&ec(this));}};function lc(a,b){var c=a.A,d=b.indexOf("\n",c);if(-1==d)return $b;c=Number(b.substring(c,d));if(isNaN(c))return Zb;d+=1;if(d+c>b.length)return $b;b=b.substr(d,c);a.A=d+c;return b}g.cancel=function(){this.m=!0;P(this);};function ec(a){a.R=w()+a.O;mc(a,a.O);}function mc(a,b){if(null!=a.i)throw Error("WatchDog timer not null");a.i=Ob(u(a.ab,a),b);}
function gc(a){a.i&&(k.clearTimeout(a.i),a.i=null);}g.ab=function(){this.i=null;var a=w();0<=a-this.R?(2!=this.F&&(J(3),K(17)),P(this),this.c=2,jc(this)):mc(this,this.R-a);};function jc(a){a.g.Ca()||a.m||a.g.na(a);}function P(a){gc(a);var b=a.B;b&&"function"==typeof b.la&&b.la();a.B=null;Db(a.P);Jb(a.I);a.a&&(b=a.a,a.a=null,b.abort(),b.la());}function ic(a,b){try{a.g.Fa(a,b),J(4);}catch(c){}}function nc(a){if(a.C&&"function"==typeof a.C)return a.C();if(m(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}
function oc(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ca(a)||m(a))la(a,b,void 0);else {if(a.K&&"function"==typeof a.K)var c=a.K();else if(a.C&&"function"==typeof a.C)c=void 0;else if(ca(a)||m(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e);}else for(e in c=[],d=0,a)c[d++]=e;d=nc(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a);}}function Q(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1]);}else if(a)if(a instanceof Q)for(c=a.K(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d]);}g=Q.prototype;g.C=function(){pc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};g.K=function(){pc(this);return this.a.concat()};
function qc(a){a.b={};a.a.length=0;a.c=0;}function rc(a,b){R(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&pc(a));}function pc(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];R(a.b,d)&&(a.a[c++]=d);b++;}a.a.length=c;}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],R(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c;}}g.get=function(a,b){return R(this.b,a)?this.b[a]:b};g.set=function(a,b){R(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b;};
g.forEach=function(a,b){for(var c=this.K(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this);}};function R(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var sc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1);}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"");}}}function S(a,b){this.b=this.j=this.f="";this.i=null;this.g=this.a="";this.h=!1;var c;a instanceof S?(this.h=void 0!==b?b:a.h,uc(this,a.f),this.j=a.j,vc(this,a.b),wc(this,a.i),this.a=a.a,xc(this,yc(a.c)),this.g=a.g):a&&(c=String(a).match(sc))?(this.h=!!b,uc(this,c[1]||"",!0),this.j=zc(c[2]||""),vc(this,c[3]||"",!0),wc(this,c[4]),this.a=zc(c[5]||"",!0),xc(this,c[6]||"",!0),this.g=zc(c[7]||"")):(this.h=!!b,this.c=new Ac(null,this.h));}
S.prototype.toString=function(){var a=[],b=this.f;b&&a.push(Bc(b,Cc,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.j)&&a.push(Bc(b,Cc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.a)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Bc(c,"/"==c.charAt(0)?Dc:Ec,!0));(c=this.c.toString())&&a.push("?",c);(c=this.g)&&a.push("#",Bc(c,Fc));return a.join("")};
S.prototype.resolve=function(a){var b=N(this),c=!!a.f;c?uc(b,a.f):c=!!a.j;c?b.j=a.j:c=!!a.b;c?vc(b,a.b):c=null!=a.i;var d=a.a;if(c)wc(b,a.i);else if(c=!!a.a){if("/"!=d.charAt(0))if(this.b&&!this.a)d="/"+d;else {var e=b.a.lastIndexOf("/");-1!=e&&(d=b.a.substr(0,e+1)+d);}e=d;if(".."==e||"."==e)d="";else if(z(e,"./")||z(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],h=0;h<e.length;){var l=e[h++];"."==l?d&&h==e.length&&f.push(""):".."==l?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&
h==e.length&&f.push("")):(f.push(l),d=!0);}d=f.join("/");}else d=e;}c?b.a=d:c=""!==a.c.toString();c?xc(b,yc(a.c)):c=!!a.g;c&&(b.g=a.g);return b};function N(a){return new S(a)}function uc(a,b,c){a.f=c?zc(b,!0):b;a.f&&(a.f=a.f.replace(/:$/,""));}function vc(a,b,c){a.b=c?zc(b,!0):b;}function wc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b;}else a.i=null;}function xc(a,b,c){b instanceof Ac?(a.c=b,Gc(a.c,a.h)):(c||(b=Bc(b,Hc)),a.c=new Ac(b,a.h));}
function T(a,b,c){a.c.set(b,c);}function fc(a,b,c){q(c)||(c=[String(c)]);Ic(a.c,b,c);}function bc(a){T(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^w()).toString(36));return a}function Jc(a){return a instanceof S?N(a):new S(a,void 0)}function Kc(a,b,c,d){var e=new S(null,void 0);a&&uc(e,a);b&&vc(e,b);c&&wc(e,c);d&&(e.a=d);return e}function zc(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Bc(a,b,c){return m(a)?(a=encodeURI(a).replace(b,Lc),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Lc(a){a=a.charCodeAt(0);return "%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cc=/[#\/\?@]/g,Ec=/[#\?:]/g,Dc=/[#\?]/g,Hc=/[#\?@]/g,Fc=/#/g;function Ac(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b;}function U(a){a.a||(a.a=new Q,a.b=0,a.c&&tc(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c);}));}g=Ac.prototype;
g.add=function(a,b){U(this);this.c=null;a=V(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};function Mc(a,b){U(a);b=V(a,b);R(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,rc(a.a,b));}function Nc(a,b){U(a);b=V(a,b);return R(a.a.b,b)}g.forEach=function(a,b){U(this);this.a.forEach(function(c,d){la(c,function(e){a.call(b,e,d,this);},this);},this);};
g.K=function(){U(this);for(var a=this.a.C(),b=this.a.K(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};g.C=function(a){U(this);var b=[];if(m(a))Nc(this,a)&&(b=oa(b,this.a.get(V(this,a))));else {a=this.a.C();for(var c=0;c<a.length;c++)b=oa(b,a[c]);}return b};g.set=function(a,b){U(this);this.c=null;a=V(this,a);Nc(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};
g.get=function(a,b){if(!a)return b;a=this.C(a);return 0<a.length?String(a[0]):b};function Ic(a,b,c){Mc(a,b);0<c.length&&(a.c=null,a.a.set(V(a,b),pa(c)),a.b+=c.length);}g.toString=function(){if(this.c)return this.c;if(!this.a)return "";for(var a=[],b=this.a.K(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.C(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h);}}return this.c=a.join("&")};
function yc(a){var b=new Ac;b.c=a.c;a.a&&(b.a=new Q(a.a),b.b=a.b);return b}function V(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function Gc(a,b){b&&!a.f&&(U(a),a.c=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(Mc(this,d),Ic(this,e,c));},a));a.f=b;}function Qc(){}function Rc(){}x(Rc,Qc);function Sc(a){this.a=a;this.b=this.h=null;this.g=!1;this.i=null;this.c=-1;this.l=this.f=null;}g=Sc.prototype;g.M=null;function Uc(a){var b=a.a.F.a;if(null!=b)K(4),b?(K(10),Vc(a.a,a,!1)):(K(11),Vc(a.a,a,!0));else {a.b=new M(a,void 0,void 0);a.b.h=a.h;b=a.a;b=Wc(b,b.Y()?a.f:null,a.i);K(4);fc(b,"TYPE","xmlhttp");var c=a.a.j,d=a.a.I;c&&d&&T(b,c,d);dc(a.b,b,!1,a.f);}}g.$=function(a){return this.a.$(a)};g.abort=function(){this.b&&(this.b.cancel(),this.b=null);this.c=-1;};g.Ca=function(){return !1};
g.Fa=function(a,b){this.c=a.o;if(0==this.M){if(!this.a.o&&(a=a.a)){var c=hc(a,"X-Client-Wire-Protocol");this.l=c?c:null;this.a.j&&(a=hc(a,"X-HTTP-Session-Id"))&&(this.a.I=a);}if(b){try{var d=this.a.ja.a.parse(b);}catch(e){b=this.a;b.m=this.c;W(b,2);return}this.f=d[0];}else b=this.a,b.m=this.c,W(b,2);}else if(1==this.M)if(this.g)K(6);else if("11111"==b){if(K(5),this.g=!0,!B||10<=Number(Na))this.c=200,this.b.cancel(),K(11),Vc(this.a,this,!0);}else K(7),this.g=!1;};
g.na=function(){this.c=this.b.o;if(this.b.b)0==this.M?(this.M=1,Uc(this)):1==this.M&&(this.g?(K(11),Vc(this.a,this,!0)):(K(10),Vc(this.a,this,!1)));else {0==this.M?K(8):1==this.M&&K(9);var a=this.a;a.m=this.c;W(a,2);}};g.Y=function(){return this.a.Y()};g.ma=function(){return this.a.ma()};function Xc(){this.a=this.b=null;}function Yc(){this.a=new Q;}function Zc(a){var b=typeof a;return "object"==b&&a||"function"==b?"o"+(a[t]||(a[t]=++da)):b.charAt(0)+a}Yc.prototype.add=function(a){this.a.set(Zc(a),a);};Yc.prototype.C=function(){return this.a.C()};function $c(a,b){this.b=a;this.a=b;}function ad(a){this.g=a||bd;k.PerformanceNavigationTiming?(a=k.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(k.ka&&k.ka.Da&&k.ka.Da()&&k.ka.Da().zb);this.f=a?this.g:1;this.a=null;1<this.f&&(this.a=new Yc);this.b=null;this.c=[];}var bd=10;function cd(a,b){!a.a&&(z(b,"spdy")||z(b,"quic")||z(b,"h2"))&&(a.f=a.g,a.a=new Yc,a.b&&(dd(a,a.b),a.b=null));}function ed(a){return a.b?!0:a.a?a.a.a.c>=a.f:!1}
function fd(a){return a.b?1:a.a?a.a.a.c:0}function gd(a,b){a.b?a=a.b==b:a.a?(b=Zc(b),a=R(a.a.a.b,b)):a=!1;return a}function dd(a,b){a.a?a.a.add(b):a.b=b;}function hd(a,b){if(a.b&&a.b==b)a.b=null;else {var c;if(c=a.a)c=Zc(b),c=R(a.a.a.b,c);c&&rc(a.a.a,Zc(b));}}ad.prototype.cancel=function(){this.c=id(this);this.b?(this.b.cancel(),this.b=null):this.a&&0!=this.a.a.c&&(la(this.a.C(),function(a){a.cancel();}),qc(this.a.a));};
function id(a){if(null!=a.b)return a.c.concat(a.b.j);if(null!=a.a&&0!=a.a.a.c){var b=a.c;la(a.a.C(),function(c){b=b.concat(c.j);});return b}return pa(a.c)}function jd(){}jd.prototype.stringify=function(a){return k.JSON.stringify(a,void 0)};jd.prototype.parse=function(a){return k.JSON.parse(a,void 0)};function kd(){this.a=new jd;}function ld(a,b,c){var d=c||"";try{oc(a,function(e,f){var h=e;r(e)&&(h=ob(e));b.push(d+f+"="+encodeURIComponent(h));});}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;}}function md(a,b){var c=new Kb;if(k.Image){var d=new Image;d.onload=v(nd,c,d,"TestLoadImage: loaded",!0,b);d.onerror=v(nd,c,d,"TestLoadImage: error",!1,b);d.onabort=v(nd,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=v(nd,c,d,"TestLoadImage: timeout",!1,b);k.setTimeout(function(){if(d.ontimeout)d.ontimeout();},1E4);d.src=a;}else b(!1);}function nd(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d);}catch(f){}}var od=k.JSON.parse;function X(a){G.call(this);this.headers=new Q;this.H=a||null;this.b=!1;this.s=this.a=null;this.A="";this.h=0;this.f="";this.g=this.w=this.l=this.v=!1;this.o=0;this.m=null;this.I=pd;this.D=this.F=!1;}x(X,G);var pd="",qd=/^https?$/i,rd=["POST","PUT"];g=X.prototype;
g.ca=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.A+"; newUri="+a);b=b?b.toUpperCase():"GET";this.A=a;this.f="";this.h=0;this.v=!1;this.b=!0;this.a=new XMLHttpRequest;this.s=this.H?Sb(this.H):Sb(Wb);this.a.onreadystatechange=u(this.Ea,this);try{this.w=!0,this.a.open(b,String(a),!0),this.w=!1;}catch(f){sd(this,f);return}a=c||"";var e=new Q(this.headers);d&&oc(d,function(f,h){e.set(h,f);});d=ma(e.K());c=k.FormData&&a instanceof k.FormData;!(0<=
ja(rd,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.a.setRequestHeader(h,f);},this);this.I&&(this.a.responseType=this.I);"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F);try{td(this),0<this.o&&((this.D=ud(this.a))?(this.a.timeout=this.o,this.a.ontimeout=u(this.Ba,this)):this.m=Eb(this.Ba,this.o,this)),this.l=!0,this.a.send(a),this.l=!1;}catch(f){sd(this,f);}};
function ud(a){return B&&Ma(9)&&aa(a.timeout)&&void 0!==a.ontimeout}function na(a){return "content-type"==a.toLowerCase()}g.Ba=function(){"undefined"!=typeof goog&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,this.dispatchEvent("timeout"),this.abort(8));};function sd(a,b){a.b=!1;a.a&&(a.g=!0,a.a.abort(),a.g=!1);a.f=b;a.h=5;vd(a);wd(a);}function vd(a){a.v||(a.v=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"));}
g.abort=function(a){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),wd(this));};g.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),wd(this,!0));X.N.G.call(this);};g.Ea=function(){this.j||(this.w||this.l||this.g?xd(this):this.Za());};g.Za=function(){xd(this);};
function xd(a){if(a.b&&"undefined"!=typeof goog&&(!a.s[1]||4!=O(a)||2!=a.T()))if(a.l&&4==O(a))Eb(a.Ea,0,a);else if(a.dispatchEvent("readystatechange"),4==O(a)){a.b=!1;try{var b=a.T();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1;}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.A).match(sc)[1]||null;if(!f&&k.self&&k.self.location){var h=k.self.location.protocol;f=h.substr(0,h.length-1);}e=!qd.test(f?f.toLowerCase():"");}d=e;}if(d)a.dispatchEvent("complete"),
a.dispatchEvent("success");else {a.h=6;try{var l=2<O(a)?a.a.statusText:"";}catch(E){l="";}a.f=l+" ["+a.T()+"]";vd(a);}}finally{wd(a);}}}function wd(a,b){if(a.a){td(a);var c=a.a,d=a.s[0]?ba:null;a.a=null;a.s=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d;}catch(e){}}}function td(a){a.a&&a.D&&(a.a.ontimeout=null);a.m&&(k.clearTimeout(a.m),a.m=null);}function O(a){return a.a?a.a.readyState:0}g.T=function(){try{return 2<O(this)?this.a.status:-1}catch(a){return -1}};
g.aa=function(){try{return this.a?this.a.responseText:""}catch(a){return ""}};g.Ua=function(a){if(this.a){var b=this.a.responseText;a&&0==b.indexOf(a)&&(b=b.substring(a.length));return od(b)}};function hc(a,b){return a.a?a.a.getResponseHeader(b):null}g.ya=function(){return this.h};g.Xa=function(){return m(this.f)?this.f:String(this.f)};function yd(a){var b="";va(a,function(c,d){b+=d;b+=":";b+=c;b+="\r\n";});return b}function zd(a,b,c){a:{for(d in c){var d=!1;break a}d=!0;}if(d)return a;c=yd(c);if(m(a)){b=encodeURIComponent(String(b));c=null!=c?"="+encodeURIComponent(String(c)):"";if(b+=c){c=a.indexOf("#");0>c&&(c=a.length);d=a.indexOf("?");if(0>d||d>c){d=c;var e="";}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;a=a[0]+(a[1]?"?"+a[1]:"")+a[2];}return a}T(a,b,c);return a}function Ad(a){this.f=[];this.F=new Xc;this.ga=this.pa=this.B=this.ha=this.a=this.I=this.j=this.V=this.g=this.J=this.i=null;this.Qa=this.P=0;this.Oa=!!n("internalChannelParams.failFast",a);this.ia=this.w=this.s=this.l=this.h=this.c=null;this.oa=!0;this.m=this.ra=this.O=-1;this.S=this.v=this.A=0;this.Na=n("internalChannelParams.baseRetryDelayMs",a)||5E3;this.Ra=n("internalChannelParams.retryDelaySeedMs",a)||1E4;this.Pa=n("internalChannelParams.forwardChannelMaxRetries",a)||2;this.qa=n("internalChannelParams.forwardChannelRequestTimeoutMs",
a)||2E4;this.Ka=a&&a.Ab||void 0;this.D=void 0;this.R=a&&a.supportsCrossDomainXhr||!1;this.H="";this.b=new ad(a&&a.concurrentRequestLimit);this.ja=new kd;this.o=a&&void 0!==a.backgroundChannelTest?a.backgroundChannelTest:!0;(this.W=a&&a.fastHandshake||!1)&&!this.o&&(this.o=!0);a&&a.forceLongPolling&&(this.oa=!1);this.fa=void 0;}g=Ad.prototype;g.wa=8;g.u=1;
function Bd(a){Cd(a);if(3==a.u){var b=a.P++,c=N(a.B);T(c,"SID",a.H);T(c,"RID",b);T(c,"TYPE","terminate");Dd(a,c);b=new M(a,b,void 0);b.F=2;b.f=bc(N(c));c=!1;k.navigator&&k.navigator.sendBeacon&&(c=k.navigator.sendBeacon(b.f.toString(),""));!c&&k.Image&&((new Image).src=b.f,c=!0);c||(b.a=b.g.$(null),b.a.ca(b.f));b.v=w();ec(b);}Ed(a);}
function Cd(a){a.w&&(a.w.abort(),a.w=null);a.a&&(a.a.cancel(),a.a=null);a.l&&(k.clearTimeout(a.l),a.l=null);Fd(a);a.b.cancel();a.h&&(aa(a.h)&&k.clearTimeout(a.h),a.h=null);}function Gd(a,b){a.f.push(new $c(a.Qa++,b));3==a.u&&Hd(a);}g.Ca=function(){return 0==this.u};function Hd(a){ed(a.b)||a.h||(a.h=!0,wb(a.Ha,a),a.A=0);}
function Id(a,b){if(fd(a.b)>=a.b.f-(a.h?1:0))return !1;if(a.h)return a.f=b.j.concat(a.f),!0;if(1==a.u||2==a.u||a.A>=(a.Oa?0:a.Pa))return !1;a.h=Ob(u(a.Ha,a,b),Jd(a,a.A));a.A++;return !0}
g.Ha=function(a){if(this.h)if(this.h=null,1==this.u){if(!a){this.P=Math.floor(1E5*Math.random());a=this.P++;var b=new M(this,a,void 0),c=this.i;this.J&&(c?(c=wa(c),ya(c,this.J)):c=this.J);null===this.g&&(b.h=c);var d;if(this.W)a:{for(var e=d=0;e<this.f.length;e++){b:{var f=this.f[e];if("__data__"in f.a&&(f=f.a.__data__,m(f))){f=f.length;break b}f=void 0;}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.f.length-1){d=e+1;break a}}d=1E3;}else d=1E3;d=Kd(this,b,d);e=N(this.B);T(e,
"RID",a);T(e,"CVER",22);this.o&&this.j&&T(e,"X-HTTP-Session-Id",this.j);Dd(this,e);this.g&&c&&zd(e,this.g,c);dd(this.b,b);this.W?(T(e,"$req",d),T(e,"SID","null"),b.S=!0,ac(b,e,null)):ac(b,e,d);this.u=2;}}else 3==this.u&&(a?Ld(this,a):0==this.f.length||ed(this.b)||Ld(this));};
function Ld(a,b){var c;b?c=b.W:c=a.P++;var d=N(a.B);T(d,"SID",a.H);T(d,"RID",c);T(d,"AID",a.O);Dd(a,d);a.g&&a.i&&zd(d,a.g,a.i);c=new M(a,c,a.A+1);null===a.g&&(c.h=a.i);b&&(a.f=b.j.concat(a.f));b=Kd(a,c,1E3);c.setTimeout(Math.round(.5*a.qa)+Math.round(.5*a.qa*Math.random()));dd(a.b,c);ac(c,d,b);}function Dd(a,b){a.c&&oc({},function(c,d){T(b,d,c);});}
function Kd(a,b,c){c=Math.min(a.f.length,c);var d=a.c?u(a.c.Sa,a.c,a):null;a:for(var e=a.f,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].b,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,E=0;E<c;E++){var Bb=e[E].b,Tc=e[E].a;Bb-=f;if(0>Bb)f=Math.max(0,e[E].b-100),l=!1;else try{ld(Tc,h,"req"+Bb+"_");}catch(Ud){d&&d(Tc);}}if(l){d=h.join("&");break a}}a=a.f.splice(0,c);b.j=a;return d}function Md(a){a.a||a.l||(a.S=1,wb(a.Ga,a),a.v=0);}
function Nd(a){if(a.a||a.l||3<=a.v)return !1;a.S++;a.l=Ob(u(a.Ga,a),Jd(a,a.v));a.v++;return !0}g.Ga=function(){this.l=null;this.a=new M(this,"rpc",this.S);null===this.g&&(this.a.h=this.i);this.a.J=0;var a=N(this.pa);T(a,"RID","rpc");T(a,"SID",this.H);T(a,"CI",this.ia?"0":"1");T(a,"AID",this.O);Dd(this,a);T(a,"TYPE","xmlhttp");this.g&&this.i&&zd(a,this.g,this.i);this.D&&this.a.setTimeout(this.D);dc(this.a,a,!0,this.ga);};
function Vc(a,b,c){var d=b.l;d&&cd(a.b,d);a.ia=a.oa&&c;a.m=b.c;a.B=Wc(a,null,a.ha);Hd(a);}
g.Fa=function(a,b){if(0!=this.u&&(this.a==a||gd(this.b,a)))if(this.m=a.o,!a.s&&gd(this.b,a)&&3==this.u){try{var c=this.ja.a.parse(b);}catch(f){c=null;}if(q(c)&&3==c.length){b=c;if(0==b[0])a:{if(!this.l){if(this.a)if(this.a.v+3E3<a.v)Fd(this),this.a.cancel(),this.a=null;else break a;Nd(this);K(18);}}else this.ra=b[1],0<this.ra-this.O&&37500>b[2]&&this.ia&&0==this.v&&!this.s&&(this.s=Ob(u(this.Ya,this),6E3));if(1>=fd(this.b)&&this.fa){try{this.fa();}catch(f){}this.fa=void 0;}}else W(this,11);}else if((a.s||
this.a==a)&&Fd(this),!qa(b))for(b=c=this.ja.a.parse(b),c=0;c<b.length;c++){var d=b[c];this.O=d[0];d=d[1];if(2==this.u)if("c"==d[0]){this.H=d[1];this.ga=d[2];var e=d[3];null!=e&&(this.wa=e);d=d[5];null!=d&&aa(d)&&0<d&&(this.D=1.5*d);this.o&&(d=a.a)&&((e=hc(d,"X-Client-Wire-Protocol"))&&cd(this.b,e),this.j&&(d=hc(d,"X-HTTP-Session-Id")))&&(this.I=d,T(this.B,this.j,d));this.u=3;this.c&&this.c.va();d=a;this.pa=Wc(this,this.Y()?this.ga:null,this.ha);d.s?(hd(this.b,d),(e=this.D)&&d.setTimeout(e),d.i&&(gc(d),
ec(d)),this.a=d):Md(this);0<this.f.length&&Hd(this);}else "stop"!=d[0]&&"close"!=d[0]||W(this,7);else 3==this.u&&("stop"==d[0]||"close"==d[0]?"stop"==d[0]?W(this,7):Bd(this):"noop"!=d[0]&&this.c&&this.c.ua(d),this.v=0);}};g.Ya=function(){null!=this.s&&(this.s=null,this.a.cancel(),this.a=null,Nd(this),K(19));};function Fd(a){null!=a.s&&(k.clearTimeout(a.s),a.s=null);}
g.na=function(a){var b=null;if(this.a==a){Fd(this);this.a=null;var c=2;}else if(gd(this.b,a))b=a.j,hd(this.b,a),c=1;else return;this.m=a.o;if(0!=this.u)if(a.b)1==c?(b=w()-a.v,I.dispatchEvent(new Nb(I,a.l?a.l.length:0,b,this.A)),Hd(this)):Md(this);else {var d=a.c;if(3==d||0==d&&0<this.m||!(1==c&&Id(this,a)||2==c&&Nd(this)))switch(b&&0<b.length&&(a=this.b,a.c=a.c.concat(b)),d){case 1:W(this,5);break;case 4:W(this,10);break;case 3:W(this,6);break;default:W(this,2);}}};
function Jd(a,b){var c=a.Na+Math.floor(Math.random()*a.Ra);a.ma()||(c*=2);return c*b}function W(a,b){if(2==b){var c=null;a.c&&(c=null);var d=u(a.eb,a);c||(c=new S("//www.google.com/images/cleardot.gif"),k.location&&"http"==k.location.protocol||uc(c,"https"),bc(c));md(c.toString(),d);}else K(2);a.u=0;a.c&&a.c.ta(b);Ed(a);Cd(a);}g.eb=function(a){a?K(2):K(1);};function Ed(a){a.u=0;a.m=-1;if(a.c){if(0!=id(a.b).length||0!=a.f.length)a.b.c.length=0,pa(a.f),a.f.length=0;a.c.sa();}}
function Wc(a,b,c){var d=Jc(c);if(""!=d.b)b&&vc(d,b+"."+d.b),wc(d,d.i);else {var e=k.location,f;b?f=b+"."+e.hostname:f=e.hostname;d=Kc(e.protocol,f,+e.port,c);}a.V&&va(a.V,function(h,l){T(d,l,h);});b=a.j;c=a.I;b&&c&&T(d,b,c);T(d,"VER",a.wa);Dd(a,d);return d}g.$=function(a){if(a&&!this.R)throw Error("Can't create secondary domain capable XhrIo object.");a=new X(this.Ka);a.F=this.R;return a};g.ma=function(){return !!this.c&&!0};g.Y=function(){return this.R};function Od(){}g=Od.prototype;g.va=function(){};
g.ua=function(){};g.ta=function(){};g.sa=function(){};g.Sa=function(){};function Pd(a){for(var b=arguments[0],c=1;c<arguments.length;c++){var d=arguments[c];if(0==d.lastIndexOf("/",0))b=d;else {var e;(e=""==b)||(e=b.length-1,e=0<=e&&b.indexOf("/",e)==e);e?b+=d:b+="/"+d;}}return b}function Qd(){if(B&&!(10<=Number(Na)))throw Error("Environmental error: no available transport.");}Qd.prototype.a=function(a,b){return new Y(a,b)};
function Y(a,b){G.call(this);this.a=new Ad(b);this.g=a;this.m=b&&b.fb?b.fb:Pd(this.g,"test");this.b=b&&b.messageUrlParams||null;a=b&&b.messageHeaders||null;b&&b.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.a.i=a;a=b&&b.initMessageHeaders||null;b&&b.messageContentType&&(a?a["X-WebChannel-Content-Type"]=b.messageContentType:a={"X-WebChannel-Content-Type":b.messageContentType});b&&b.xa&&(a?a["X-WebChannel-Client-Profile"]=b.xa:a={"X-WebChannel-Client-Profile":b.xa});
this.a.J=a;(a=b&&b.httpHeadersOverwriteParam)&&!qa(a)&&(this.a.g=a);this.l=b&&b.supportsCrossDomainXhr||!1;this.h=b&&b.sendRawJson||!1;(b=b&&b.httpSessionIdParam)&&!qa(b)&&(this.a.j=b,a=this.b,null!==a&&b in a&&(a=this.b,b in a&&delete a[b]));this.f=new Z(this);}x(Y,G);g=Y.prototype;g.addEventListener=function(a,b,c,d){Y.N.addEventListener.call(this,a,b,c,d);};g.removeEventListener=function(a,b,c,d){Y.N.removeEventListener.call(this,a,b,c,d);};
g.Va=function(){this.a.c=this.f;this.l&&(this.a.R=!0);var a=this.a,b=this.m,c=this.g,d=this.b||void 0;K(0);a.ha=c;a.V=d||{};a.o&&(a.F.b=[],a.F.a=!1);a.w=new Sc(a);null===a.g&&(a.w.h=a.i);c=b;a.g&&a.i&&(c=zd(b,a.g,a.i));a=a.w;a.i=c;b=Wc(a.a,null,a.i);K(3);c=a.a.F.b;null!=c?(a.f=c[0],a.M=1,Uc(a)):(fc(b,"MODE","init"),!a.a.o&&a.a.j&&fc(b,"X-HTTP-Session-Id",a.a.j),a.b=new M(a,void 0,void 0),a.b.h=a.h,dc(a.b,b,!1,null),a.M=0);};g.close=function(){Bd(this.a);};
g.Wa=function(a){if(m(a)){var b={};b.__data__=a;Gd(this.a,b);}else this.h?(b={},b.__data__=ob(a),Gd(this.a,b)):Gd(this.a,a);};g.G=function(){this.a.c=null;delete this.f;Bd(this.a);delete this.a;Y.N.G.call(this);};function Rd(a){Ub.call(this);var b=a.__sm__;if(b){a:{for(var c in b){a=c;break a}a=void 0;}(this.c=a)?(a=this.c,this.data=null!==b&&a in b?b[a]:void 0):this.data=b;}else this.data=a;}x(Rd,Ub);function Sd(){Vb.call(this);this.status=1;}x(Sd,Vb);function Z(a){this.a=a;}x(Z,Od);Z.prototype.va=function(){this.a.dispatchEvent("a");};
Z.prototype.ua=function(a){this.a.dispatchEvent(new Rd(a));};Z.prototype.ta=function(a){this.a.dispatchEvent(new Sd(a));};Z.prototype.sa=function(){this.a.dispatchEvent("b");};var Td=v(function(a,b){function c(){}c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Qd);/*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Qd.prototype.createWebChannel=Qd.prototype.a;Y.prototype.send=Y.prototype.Wa;Y.prototype.open=Y.prototype.Va;Y.prototype.close=Y.prototype.close;Pb.NO_ERROR=0;Pb.TIMEOUT=8;Pb.HTTP_ERROR=6;Qb.COMPLETE="complete";Tb.EventType=L;L.OPEN="a";L.CLOSE="b";L.ERROR="c";L.MESSAGE="d";G.prototype.listen=G.prototype.za;X.prototype.listenOnce=X.prototype.Aa;X.prototype.getLastError=X.prototype.Xa;X.prototype.getLastErrorCode=X.prototype.ya;X.prototype.getStatus=X.prototype.T;X.prototype.getResponseJson=X.prototype.Ua;
X.prototype.getResponseText=X.prototype.aa;X.prototype.send=X.prototype.ca;var tmp={createWebChannelTransport:Td,ErrorCode:Pb,EventType:Qb,WebChannel:Tb,XhrIo:X};
var tmp_1 = tmp.createWebChannelTransport;
var tmp_2 = tmp.ErrorCode;
var tmp_3 = tmp.EventType;
var tmp_4 = tmp.WebChannel;
var tmp_5 = tmp.XhrIo;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The semver (www.semver.org) version of the SDK. */ var _, I$1 = firebase$1.SDK_VERSION, T$1 = new Logger("@firebase/firestore");

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Helper methods are needed because variables can't be exported as read/write
function E() {
    return T$1.logLevel === LogLevel.DEBUG ? _.DEBUG : T$1.logLevel === LogLevel.SILENT ? _.SILENT : _.ERROR;
}

function R$1(t) {
    /**
     * Map the new log level to the associated Firebase Log Level
     */
    switch (t) {
      case _.DEBUG:
        T$1.logLevel = LogLevel.DEBUG;
        break;

      case _.ERROR:
        T$1.logLevel = LogLevel.ERROR;
        break;

      case _.SILENT:
        T$1.logLevel = LogLevel.SILENT;
        break;

      default:
        T$1.error("Firestore (" + I$1 + "): Invalid value passed to `setLogLevel`");
    }
}

function A$1(t, i) {
    for (var e = [], r = 2; r < arguments.length; r++) e[r - 2] = arguments[r];
    if (T$1.logLevel <= LogLevel.DEBUG) {
        var u = e.map(P$1);
        T$1.debug.apply(T$1, __spreadArrays([ "Firestore (" + I$1 + ") [" + t + "]: " + i ], u));
    }
}

function D$1(t) {
    for (var i = [], e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
    if (T$1.logLevel <= LogLevel.ERROR) {
        var r = i.map(P$1);
        T$1.error.apply(T$1, __spreadArrays([ "Firestore (" + I$1 + "): " + t ], r));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function P$1(t) {
    if ("string" == typeof t) return t;
    var n = qi.t();
    try {
        return n.i(t);
    } catch (n) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 *
 * Returns any so it can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function S$1(t) {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    var n = "FIRESTORE (" + I$1 + ") INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw D$1(n), new Error(n);
}

/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 */ function C$1(t, n) {
    t || S$1(n);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ !function(t) {
    t[t.DEBUG = 0] = "DEBUG", t[t.ERROR = 1] = "ERROR", t[t.SILENT = 2] = "SILENT";
}(_ || (_ = {}));

var k$1 = /** @class */ function() {
    function t() {}
    return t.u = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = "", i = 0; i < 20; i++) n += t.charAt(Math.floor(Math.random() * t.length));
        return C$1(20 === n.length, "Invalid auto ID: " + n), n;
    }, t;
}();

function V$1(t, n) {
    return t < n ? -1 : t > n ? 1 : 0;
}

/** Helper to compare nullable (or undefined-able) objects using isEqual(). */
/** Helper to compare arrays using isEqual(). */
function N$1(t, n) {
    if (t.length !== n.length) return !1;
    for (var i = 0; i < t.length; i++) if (!t[i].isEqual(n[i])) return !1;
    return !0;
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function O$1(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var F$1 = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
function(t, n, i, e, r) {
    this.s = t, this.persistenceKey = n, this.host = i, this.ssl = e, this.forceLongPolling = r;
}, U$1 = "(default)", x$1 = /** @class */ function() {
    function t(t, n) {
        this.projectId = t, this.database = n || U$1;
    }
    return Object.defineProperty(t.prototype, "o", {
        get: function() {
            return this.database === U$1;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(n) {
        return n instanceof t && n.projectId === this.projectId && n.database === this.database;
    }, t.prototype.h = function(t) {
        return V$1(this.projectId, t.projectId) || V$1(this.database, t.database);
    }, t;
}(), j = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.l = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.v = function() {
        return this.l() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, 
    /** A user with a null UID. */
    t.UNAUTHENTICATED = new t(null), 
    // TODO(mikelehen): Look into getting a proper uid-equivalent for
    // non-FirebaseAuth providers.
    t.m = new t("google-credentials-uid"), t.p = new t("first-party-uid"), t;
}(), L$1 = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, B$1 = /** @class */ function(t) {
    function n(n, i) {
        var e = t.call(this, i) || this;
        return e.code = n, e.message = i, e.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        e.toString = function() {
            return e.name + ": [code=" + e.code + "]: " + e.message;
        }, e;
    }
    return __extends(n, t), n;
}(Error), M$1 = function(t, n) {
    this.user = n, this.type = "OAuth", this.g = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.g.Authorization = "Bearer " + t;
}, q$1 = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this._ = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.I = function() {}, t.prototype.T = function(t) {
        C$1(!this._, "Can only call setChangeListener() once."), this._ = t, 
        // Fire with initial user.
        t(j.UNAUTHENTICATED);
    }, t.prototype.R = function() {
        C$1(null !== this._, "removeChangeListener() when no listener registered"), this._ = null;
    }, t;
}(), Q$1 = /** @class */ function() {
    function t(t) {
        var n = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.A = null, 
        /** Tracks the current User. */
        this.currentUser = j.UNAUTHENTICATED, this.D = !1, 
        /**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */
        this.P = 0, 
        /** The listener registered with setChangeListener(). */
        this._ = null, this.forceRefresh = !1, this.A = function() {
            n.P++, n.currentUser = n.S(), n.D = !0, n._ && n._(n.currentUser);
        }, this.P = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.A) : (
        // if auth is not available, invoke tokenListener once with null token
        this.A(null), t.get().then((function(t) {
            n.auth = t, n.A && 
            // tokenListener can be removed by removeChangeListener()
            n.auth.addAuthTokenListener(n.A);
        }), (function() {
            /* this.authProvider.get() never rejects */})));
    }
    return t.prototype.getToken = function() {
        var t = this;
        C$1(null != this.A, "getToken cannot be called after listener removed.");
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
        var n = this.P, i = this.forceRefresh;
        return this.forceRefresh = !1, this.auth ? this.auth.getToken(i).then((function(i) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            if (t.P !== n) throw new B$1(L$1.ABORTED, "getToken aborted due to token change.");
            return i ? (C$1("string" == typeof i.accessToken, "Invalid tokenData returned from getToken():" + i), 
            new M$1(i.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.I = function() {
        this.forceRefresh = !0;
    }, t.prototype.T = function(t) {
        C$1(!this._, "Can only call setChangeListener() once."), this._ = t, 
        // Fire the initial event
        this.D && t(this.currentUser);
    }, t.prototype.R = function() {
        C$1(null != this.A, "removeChangeListener() called twice"), C$1(null !== this._, "removeChangeListener() called when no listener registered"), 
        this.auth && this.auth.removeAuthTokenListener(this.A), this.A = null, this._ = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.S = function() {
        var t = this.auth && this.auth.getUid();
        return C$1(null === t || "string" == typeof t, "Received invalid UID: " + t), new j(t);
    }, t;
}(), G$1 = /** @class */ function() {
    function t(t, n) {
        this.C = t, this.k = n, this.type = "FirstParty", this.user = j.p;
    }
    return Object.defineProperty(t.prototype, "g", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.k
            }, n = this.C.auth.V([]);
            return n && (t.Authorization = n), t;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}(), W$1 = /** @class */ function() {
    function t(t, n) {
        this.C = t, this.k = n;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new G$1(this.C, this.k));
    }, t.prototype.T = function(t) {
        // Fire with initial uid.
        t(j.p);
    }, t.prototype.R = function() {}, t.prototype.I = function() {}, t;
}();

/** The default database name for a project. */
/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */
function z$1(t) {
    if (!t) return new q$1;
    switch (t.type) {
      case "gapi":
        var n = t.N;
        // Make sure this really is a Gapi client.
                return C$1(!("object" != typeof n || null === n || !n.auth || !n.auth.getAuthHeaderValueForFirstParty), "unexpected gapi interface"), 
        new W$1(n, t.k || "0");

      case "provider":
        return t.N;

      default:
        throw new B$1(L$1.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function K$1(t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
}

/** Returns the given value if it's defined or the defaultValue otherwise. */ function H$1(t, n) {
    return void 0 !== t ? t : n;
}

function J$1(t, n) {
    for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
        var e = Number(i);
        isNaN(e) || n(e, t[i]);
    }
}

function Y$1(t, n) {
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && n(i, t[i]);
}

function X$1(t) {
    for (var n in C$1(null != t && "object" == typeof t, "isEmpty() expects object parameter."), 
    t) if (Object.prototype.hasOwnProperty.call(t, n)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */
function $(t, n) {
    if (0 !== n.length) throw new B$1(L$1.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + pt(n.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */ function Z$1(t, n, i) {
    if (n.length !== i) throw new B$1(L$1.INVALID_ARGUMENT, "Function " + t + "() requires " + pt(i, "argument") + ", but was called with " + pt(n.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */ function tt(t, n, i) {
    if (n.length < i) throw new B$1(L$1.INVALID_ARGUMENT, "Function " + t + "() requires at least " + pt(i, "argument") + ", but was called with " + pt(n.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */ function nt(t, n, i, e) {
    if (n.length < i || n.length > e) throw new B$1(L$1.INVALID_ARGUMENT, "Function " + t + "() requires between " + i + " and " + e + " arguments, but was called with " + pt(n.length, "argument") + ".");
}

/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */
function it(t, n, i, e) {
    ct(t, n, mt(i) + " argument", e);
}

/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */ function et(t, n, i, e) {
    void 0 !== e && it(t, n, i, e);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */ function rt(t, n, i, e) {
    ct(t, n, i + " option", e);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */ function ut(t, n, i, e) {
    void 0 !== e && rt(t, n, i, e);
}

function st(t, n, i, e, r) {
    void 0 !== e && function(t, n, i, e, r) {
        if (!(e instanceof Array)) throw new B$1(L$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " option to be an array, but it was: " + ft(e));
        for (var u = 0; u < e.length; ++u) if (!r(e[u])) throw new B$1(L$1.INVALID_ARGUMENT, "Function " + t + "() requires all " + n + " elements to be " + i + ", but the value at index " + u + " was: " + ft(e[u]));
    }(t, n, i, e, r);
}

/**
 * Validates that the provided named option equals one of the expected values.
 */
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function ot(t, n, i, e, r) {
    void 0 !== e && function(t, n, i, e, r) {
        for (var u = [], s = 0, o = r; s < o.length; s++) {
            var h = o[s];
            if (h === e) return;
            u.push(ft(h));
        }
        var c = ft(e);
        throw new B$1(L$1.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t + '() for option "' + i + '". Acceptable values: ' + u.join(", "));
    }(t, 0, i, e, r);
}

/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Arugment to validate.
 */ function ht(t, n, i, e) {
    if (!n.some((function(t) {
        return t === e;
    }))) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid value " + ft(e) + " provided to function " + t + "() for its " + mt(i) + " argument. Acceptable values: " + n.join(", "));
}

/** Helper to validate the type of a provided input. */ function ct(t, n, i, e) {
    if (!("object" === n ? at(e) : "non-empty string" === n ? "string" == typeof e && "" !== e : typeof e === n)) {
        var r = ft(e);
        throw new B$1(L$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + i + " to be of type " + n + ", but it was: " + r);
    }
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */ function at(t) {
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}

/** Returns a string describing the type / value of the provided input. */ function ft(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var n = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var n = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (n && n.length > 1) return n[1];
            }
            return null;
        }
        /** Validates the provided argument is defined. */ (t);
        return n ? "a custom " + n + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : S$1("Unknown wrong type: " + typeof t);
}

function lt(t, n, i) {
    if (void 0 === i) throw new B$1(L$1.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + mt(n) + " argument, but it was undefined.");
}

/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */ function dt(t, n, i) {
    Y$1(n, (function(n, e) {
        if (i.indexOf(n) < 0) throw new B$1(L$1.INVALID_ARGUMENT, "Unknown option '" + n + "' passed to function " + t + "(). Available options: " + i.join(", "));
    }));
}

/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */ function vt(t, n, i, e) {
    var r = ft(e);
    return new B$1(L$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + mt(i) + " argument to be a " + n + ", but it was: " + r);
}

function wt(t, n, i) {
    if (i <= 0) throw new B$1(L$1.INVALID_ARGUMENT, 'Function "' + t + '()" requires its ' + mt(n) + " argument to be a positive number, but it was: " + i + ".");
}

/** Converts a number to its english word representation */ function mt(t) {
    switch (t) {
      case 1:
        return "first";

      case 2:
        return "second";

      case 3:
        return "third";

      default:
        return t + "th";
    }
}

/**
 * Formats the given word as plural conditionally given the preceding number.
 */ function pt(t, n) {
    return t + " " + n + (1 === t ? "" : "s");
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class representing a geo point as latitude-longitude pair.
 * This class is directly exposed in the public API, including its constructor.
 */ var gt = /** @class */ function() {
    function t(t, n) {
        if (Z$1("GeoPoint", arguments, 2), it("GeoPoint", "number", 1, t), it("GeoPoint", "number", 2, n), 
        !isFinite(t) || t < -90 || t > 90) throw new B$1(L$1.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(n) || n < -180 || n > 180) throw new B$1(L$1.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + n);
        this.O = t, this.F = n;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function() {
            return this.O;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function() {
            return this.F;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.O === t.O && this.F === t.F;
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.U = function(t) {
        return V$1(this.O, t.O) || V$1(this.F, t.F);
    }, t;
}(), bt = -62135596800, yt = /** @class */ function() {
    function t(t, n) {
        if (this.seconds = t, this.nanoseconds = n, n < 0) throw new B$1(L$1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
        if (n >= 1e9) throw new B$1(L$1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
        if (t < bt) throw new B$1(L$1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new B$1(L$1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    return t.now = function() {
        return t.fromMillis(Date.now());
    }, t.fromDate = function(n) {
        return t.fromMillis(n.getTime());
    }, t.fromMillis = function(n) {
        var i = Math.floor(n / 1e3);
        return new t(i, 1e6 * (n - 1e3 * i));
    }, t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.U = function(t) {
        return this.seconds === t.seconds ? V$1(this.nanoseconds, t.nanoseconds) : V$1(this.seconds, t.seconds);
    }, t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - bt;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), _t = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    // TODO(b/34176344): Once we no longer need to use the old alpha protos,
    // delete this constructor and use a timestamp-backed version everywhere.
        return t.j = function(n) {
        var i = Math.floor(n / 1e6);
        return new t(new yt(i, n % 1e6 * 1e3));
    }, t.L = function(n) {
        return new t(n);
    }, t.B = function() {
        return t.MIN;
    }, t.prototype.h = function(t) {
        return this.timestamp.U(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */
    t.prototype.M = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.q = function() {
        return this.timestamp;
    }, t.MIN = new t(new yt(0, 0)), t;
}(), It = /** @class */ function() {
    function t(t, n, i) {
        void 0 === n ? n = 0 : n > t.length && S$1("offset " + n + " out of range " + t.length), 
        void 0 === i ? i = t.length - n : i > t.length - n && S$1("length " + i + " out of range " + (t.length - n)), 
        this.segments = t, this.offset = n, this.len = i;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.len;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(n) {
        return 0 === t.G(this, n);
    }, t.prototype.child = function(n) {
        var i = this.segments.slice(this.offset, this.limit());
        return n instanceof t ? n.forEach((function(t) {
            i.push(t);
        })) : i.push(n), this.W(i);
    }, 
    /** The index of one past the last segment of the path. */
    t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.K = function(t) {
        return t = void 0 === t ? 1 : t, C$1(this.length >= t, "Can't call popFirst() with less segments"), 
        this.W(this.segments, this.offset + t, this.length - t);
    }, t.prototype.H = function() {
        return C$1(!this.J(), "Can't call popLast() on empty path"), this.W(this.segments, this.offset, this.length - 1);
    }, t.prototype.Y = function() {
        return C$1(!this.J(), "Can't call firstSegment() on empty path"), this.segments[this.offset];
    }, t.prototype.X = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return C$1(t < this.length, "Index out of range"), this.segments[this.offset + t];
    }, t.prototype.J = function() {
        return 0 === this.length;
    }, t.prototype.$ = function(t) {
        if (t.length < this.length) return !1;
        for (var n = 0; n < this.length; n++) if (this.get(n) !== t.get(n)) return !1;
        return !0;
    }, t.prototype.Z = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var n = 0; n < this.length; n++) if (this.get(n) !== t.get(n)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var n = this.offset, i = this.limit(); n < i; n++) t(this.segments[n]);
    }, t.prototype.tt = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.G = function(t, n) {
        for (var i = Math.min(t.length, n.length), e = 0; e < i; e++) {
            var r = t.get(e), u = n.get(e);
            if (r < u) return -1;
            if (r > u) return 1;
        }
        return t.length < n.length ? -1 : t.length > n.length ? 1 : 0;
    }, t;
}(), Tt = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends(n, t), n.prototype.W = function(t, i, e) {
        return new n(t, i, e);
    }, n.prototype.nt = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.tt().join("/");
    }, n.prototype.toString = function() {
        return this.nt();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    n.it = function(t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
                return new n(t.split("/").filter((function(t) {
            return t.length > 0;
        })));
    }, n.et = new n([]), n;
}(It), Et = /^[_a-zA-Z][_a-zA-Z0-9]*$/, Rt = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends(n, t), n.prototype.W = function(t, i, e) {
        return new n(t, i, e);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n.rt = function(t) {
        return Et.test(t);
    }, n.prototype.nt = function() {
        return this.tt().map((function(t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.rt(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, n.prototype.toString = function() {
        return this.nt();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    n.prototype.ut = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    n.st = function() {
        return new n([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    n.ot = function(t) {
        for (var i = [], e = "", r = 0, u = function() {
            if (0 === e.length) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            i.push(e), e = "";
        }, s = !1; r < t.length; ) {
            var o = t[r];
            if ("\\" === o) {
                if (r + 1 === t.length) throw new B$1(L$1.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var h = t[r + 1];
                if ("\\" !== h && "." !== h && "`" !== h) throw new B$1(L$1.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                e += h, r += 2;
            } else "`" === o ? (s = !s, r++) : "." !== o || s ? (e += o, r++) : (u(), r++);
        }
        if (u(), s) throw new B$1(L$1.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(i);
    }, n.et = new n([]), n;
}(It), At = /** @class */ function() {
    function t(n) {
        this.path = n, C$1(t.ht(n), "Invalid DocumentKey with an odd number of segments: " + n.tt().join("/"));
    }
    /** Returns true if the document is in the specified collectionId. */    return t.prototype.ct = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === Tt.G(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.G = function(t, n) {
        return Tt.G(t.path, n.path);
    }, t.ht = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param path The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    t.at = function(n) {
        return new t(new Tt(n.slice()));
    }, 
    /**
     * Creates and returns a new document key using '/' to split the string into
     * segments.
     *
     * @param path The slash-separated path string to the document
     * @return A new instance of DocumentKey
     */
    t.ft = function(n) {
        return new t(Tt.it(n));
    }, t.EMPTY = new t(new Tt([])), t;
}(), Dt = /** @class */ function() {
    function t(t, n) {
        this.G = t, this.root = n || St.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.lt = function(n, i) {
        return new t(this.G, this.root.lt(n, i, this.G).copy(null, null, St.dt, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(n) {
        return new t(this.G, this.root.remove(n, this.G).copy(null, null, St.dt, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var n = this.root; !n.J(); ) {
            var i = this.G(t, n.key);
            if (0 === i) return n.value;
            i < 0 ? n = n.left : i > 0 && (n = n.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var n = 0, i = this.root; !i.J(); ) {
            var e = this.G(t, i.key);
            if (0 === e) return n + i.left.size;
            e < 0 ? i = i.left : (
            // Count all nodes left of the node plus the node itself
            n += i.left.size + 1, i = i.right);
        }
        // Node not found
                return -1;
    }, t.prototype.J = function() {
        return this.root.J();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.vt = function() {
        return this.root.vt();
    }, 
    // Returns the maximum key in the map.
    t.prototype.wt = function() {
        return this.root.wt();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.pt = function(t) {
        return this.root.pt(t);
    }, t.prototype.forEach = function(t) {
        this.pt((function(n, i) {
            return t(n, i), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.pt((function(n, i) {
            return t.push(n + ":" + i), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.gt = function(t) {
        return this.root.gt(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.bt = function() {
        return new Pt(this.root, null, this.G, !1);
    }, t.prototype.yt = function(t) {
        return new Pt(this.root, t, this.G, !1);
    }, t.prototype._t = function() {
        return new Pt(this.root, null, this.G, !0);
    }, t.prototype.It = function(t) {
        return new Pt(this.root, t, this.G, !0);
    }, t;
}(), Pt = /** @class */ function() {
    function t(t, n, i, e) {
        this.Tt = e, this.Et = [];
        for (var r = 1; !t.J(); ) if (r = n ? i(t.key, n) : 1, 
        // flip the comparison if we're going in reverse
        e && (r *= -1), r < 0) 
        // This node is less than our start key. ignore it
        t = this.Tt ? t.left : t.right; else {
            if (0 === r) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.Et.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
            this.Et.push(t), t = this.Tt ? t.right : t.left;
        }
    }
    return t.prototype.Rt = function() {
        C$1(this.Et.length > 0, "getNext() called on iterator when hasNext() is false.");
        var t = this.Et.pop(), n = {
            key: t.key,
            value: t.value
        };
        if (this.Tt) for (t = t.left; !t.J(); ) this.Et.push(t), t = t.right; else for (t = t.right; !t.J(); ) this.Et.push(t), 
        t = t.left;
        return n;
    }, t.prototype.At = function() {
        return this.Et.length > 0;
    }, t.prototype.Dt = function() {
        if (0 === this.Et.length) return null;
        var t = this.Et[this.Et.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), St = /** @class */ function() {
    function t(n, i, e, r, u) {
        this.key = n, this.value = i, this.color = null != e ? e : t.RED, this.left = null != r ? r : t.EMPTY, 
        this.right = null != u ? u : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.copy = function(n, i, e, r, u) {
        return new t(null != n ? n : this.key, null != i ? i : this.value, null != e ? e : this.color, null != r ? r : this.left, null != u ? u : this.right);
    }, t.prototype.J = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.pt = function(t) {
        return this.left.pt(t) || t(this.key, this.value) || this.right.pt(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.gt = function(t) {
        return this.right.gt(t) || t(this.key, this.value) || this.left.gt(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.J() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.vt = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.wt = function() {
        return this.right.J() ? this.key : this.right.wt();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.lt = function(t, n, i) {
        var e = this, r = i(t, e.key);
        return (e = r < 0 ? e.copy(null, null, null, e.left.lt(t, n, i), null) : 0 === r ? e.copy(null, n, null, null, null) : e.copy(null, null, null, null, e.right.lt(t, n, i))).Pt();
    }, t.prototype.St = function() {
        if (this.left.J()) return t.EMPTY;
        var n = this;
        return n.left.Ct() || n.left.left.Ct() || (n = n.kt()), (n = n.copy(null, null, null, n.left.St(), null)).Pt();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(n, i) {
        var e, r = this;
        if (i(n, r.key) < 0) r.left.J() || r.left.Ct() || r.left.left.Ct() || (r = r.kt()), 
        r = r.copy(null, null, null, r.left.remove(n, i), null); else {
            if (r.left.Ct() && (r = r.Vt()), r.right.J() || r.right.Ct() || r.right.left.Ct() || (r = r.Nt()), 
            0 === i(n, r.key)) {
                if (r.right.J()) return t.EMPTY;
                e = r.right.min(), r = r.copy(e.key, e.value, null, null, r.right.St());
            }
            r = r.copy(null, null, null, null, r.right.remove(n, i));
        }
        return r.Pt();
    }, t.prototype.Ct = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.Pt = function() {
        var t = this;
        return t.right.Ct() && !t.left.Ct() && (t = t.Ot()), t.left.Ct() && t.left.left.Ct() && (t = t.Vt()), 
        t.left.Ct() && t.right.Ct() && (t = t.Ft()), t;
    }, t.prototype.kt = function() {
        var t = this.Ft();
        return t.right.left.Ct() && (t = (t = (t = t.copy(null, null, null, null, t.right.Vt())).Ot()).Ft()), 
        t;
    }, t.prototype.Nt = function() {
        var t = this.Ft();
        return t.left.left.Ct() && (t = (t = t.Vt()).Ft()), t;
    }, t.prototype.Ot = function() {
        var n = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, n, null);
    }, t.prototype.Vt = function() {
        var n = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, n);
    }, t.prototype.Ft = function() {
        var t = this.left.copy(null, null, !this.left.color, null, null), n = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, n);
    }, 
    // For testing.
    t.prototype.Ut = function() {
        var t = this.xt();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.xt = function() {
        if (this.Ct() && this.left.Ct()) throw S$1("Red node has red child(" + this.key + "," + this.value + ")");
        if (this.right.Ct()) throw S$1("Right child of (" + this.key + "," + this.value + ") is red");
        var t = this.left.xt();
        if (t !== this.right.xt()) throw S$1("Black depths differ");
        return t + (this.Ct() ? 0 : 1);
    }, 
    // Empty node is shared between all LLRB trees.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t.EMPTY = null, t.RED = !0, t.dt = !1, t;
}(), Ct = /** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw S$1("LLRBEmptyNode has no key.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw S$1("LLRBEmptyNode has no value.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw S$1("LLRBEmptyNode has no color.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw S$1("LLRBEmptyNode has no left child.");
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw S$1("LLRBEmptyNode has no right child.");
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.copy = function(t, n, i, e, r) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.lt = function(t, n, i) {
        return new St(t, n);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, n) {
        return this;
    }, t.prototype.J = function() {
        return !0;
    }, t.prototype.pt = function(t) {
        return !1;
    }, t.prototype.gt = function(t) {
        return !1;
    }, t.prototype.vt = function() {
        return null;
    }, t.prototype.wt = function() {
        return null;
    }, t.prototype.Ct = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.Ut = function() {
        return !0;
    }, t.prototype.xt = function() {
        return 0;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The earlist date supported by Firestore timestamps (0001-01-01T00:00:00Z).
// end LLRBEmptyNode
St.EMPTY = new Ct;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var kt = /** @class */ function() {
    function t(t) {
        this.G = t, this.data = new Dt(this.G);
    }
    /**
     * Creates a SortedSet from the keys of the map.
     * This is currently implemented as an O(n) copy.
     */    return t.jt = function(n) {
        var i = new t(n.G);
        return n.forEach((function(t) {
            i = i.add(t);
        })), i;
    }, t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.vt();
    }, t.prototype.last = function() {
        return this.data.wt();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */
    t.prototype.forEach = function(t) {
        this.data.pt((function(n, i) {
            return t(n), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */
    t.prototype.Lt = function(t, n) {
        for (var i = this.data.yt(t[0]); i.At(); ) {
            var e = i.Rt();
            if (this.G(e.key, t[1]) >= 0) return;
            n(e.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    t.prototype.Bt = function(t, n) {
        var i;
        for (i = void 0 !== n ? this.data.yt(n) : this.data.bt(); i.At(); ) {
            if (!t(i.Rt().key)) return;
        }
    }, 
    /** Finds the least element greater than or equal to `elem`. */
    t.prototype.Mt = function(t) {
        var n = this.data.yt(t);
        return n.At() ? n.Rt().key : null;
    }, t.prototype.bt = function() {
        return new Vt(this.data.bt());
    }, t.prototype.yt = function(t) {
        return new Vt(this.data.yt(t));
    }, 
    /** Inserts or updates an element */
    t.prototype.add = function(t) {
        return this.copy(this.data.remove(t).lt(t, !0));
    }, 
    /** Deletes an element */
    t.prototype.delete = function(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }, t.prototype.J = function() {
        return this.data.J();
    }, t.prototype.qt = function(t) {
        var n = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return n.size < t.size && (n = t, t = this), t.forEach((function(t) {
            n = n.add(t);
        })), n;
    }, t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) return !1;
        if (this.size !== n.size) return !1;
        for (var i = this.data.bt(), e = n.data.bt(); i.At(); ) {
            var r = i.Rt().key, u = e.Rt().key;
            if (0 !== this.G(r, u)) return !1;
        }
        return !0;
    }, t.prototype.tt = function() {
        var t = [];
        return this.forEach((function(n) {
            t.push(n);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(n) {
            return t.push(n);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.copy = function(n) {
        var i = new t(this.G);
        return i.data = n, i;
    }, t;
}(), Vt = /** @class */ function() {
    function t(t) {
        this.Qt = t;
    }
    return t.prototype.Rt = function() {
        return this.Qt.Rt().key;
    }, t.prototype.At = function() {
        return this.Qt.At();
    }, t;
}(), Nt = /** @class */ function() {
    function t() {}
    return t.prototype.Gt = function(t, n) {
        return new fn(n, t);
    }, t.prototype.Wt = function(t, n) {
        return n;
    }, t.prototype.zt = function(t) {
        return null;
 // Server timestamps are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(n) {
        return n instanceof t;
    }, t.instance = new t, t;
}(), Ot = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.Gt = function(t, n) {
        return this.apply(t);
    }, t.prototype.Wt = function(t, n) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var n = xt(t), i = function(t) {
            n.find((function(n) {
                return n.isEqual(t);
            })) || n.push(t);
        }, e = 0, r = this.elements; e < r.length; e++) {
            i(r[e]);
        }
        return new pn(n);
    }, t.prototype.zt = function(t) {
        return null;
 // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(n) {
        return n instanceof t && N$1(n.elements, this.elements);
    }, t;
}(), Ft = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.Gt = function(t, n) {
        return this.apply(t);
    }, t.prototype.Wt = function(t, n) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var n = xt(t), i = function(t) {
            n = n.filter((function(n) {
                return !n.isEqual(t);
            }));
        }, e = 0, r = this.elements; e < r.length; e++) {
            i(r[e]);
        }
        return new pn(n);
    }, t.prototype.zt = function(t) {
        return null;
 // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(n) {
        return n instanceof t && N$1(n.elements, this.elements);
    }, t;
}(), Ut = /** @class */ function() {
    function t(t) {
        this.Kt = t;
    }
    return t.prototype.Gt = function(t, n) {
        var i = this.zt(t);
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        // Return an integer value iff the previous value and the operand is an
        // integer.
                if (i instanceof on && this.Kt instanceof on) {
            var e = i.Ht + this.Kt.Ht;
            return new on(e);
        }
        e = i.Ht + this.Kt.Ht;
        return new hn(e);
    }, t.prototype.Wt = function(t, n) {
        return C$1(null !== n, "Didn't receive transformResult for NUMERIC_ADD transform"), 
        n;
    }, 
    /**
     * Inspects the provided value, returning the provided value if it is already
     * a NumberValue, otherwise returning a coerced IntegerValue of 0.
     */
    t.prototype.zt = function(t) {
        return t instanceof un ? t : new on(0);
    }, t.prototype.isEqual = function(n) {
        return n instanceof t && this.Kt.isEqual(n.Kt);
    }, t;
}();

function xt(t) {
    return t instanceof pn ? t.Ht.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var jt, Lt, Bt = /** @class */ function() {
    function t(t) {
        this.fields = t;
        // TODO(dimond): validation of FieldMask
        }
    return t.Jt = function(n) {
        return new t(n);
    }, t.Yt = function(n) {
        var i = new kt(Rt.G);
        return n.forEach((function(t) {
            return i = i.add(t);
        })), new t(i);
    }, 
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */
    t.prototype.Xt = function(t) {
        var n = !1;
        return this.fields.forEach((function(i) {
            i.$(t) && (n = !0);
        })), n;
    }, t.prototype.isEqual = function(t) {
        return this.fields.isEqual(t.fields);
    }, t;
}(), Mt = /** @class */ function() {
    function t(t, n) {
        this.field = t, this.transform = n;
    }
    return t.prototype.isEqual = function(t) {
        return this.field.isEqual(t.field) && this.transform.isEqual(t.transform);
    }, t;
}(), qt = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
n) {
    this.version = t, this.transformResults = n;
};

/** A field path and the TransformOperation to perform upon it. */ (Lt = jt || (jt = {}))[Lt.Set = 0] = "Set", 
Lt[Lt.$t = 1] = "__PRIVATE_Patch", Lt[Lt.Transform = 2] = "Transform", Lt[Lt.Zt = 3] = "__PRIVATE_Delete", 
Lt[Lt.Verify = 4] = "Verify";

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */
var Qt, Gt, Wt, zt, Kt = /** @class */ function() {
    function t(t, n) {
        this.updateTime = t, this.exists = n, C$1(void 0 === t || void 0 === n, 'Precondition can specify "exists" or "updateTime" but not both');
    }
    /** Creates a new Precondition with an exists flag. */    return t.exists = function(n) {
        return new t(void 0, n);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */
    t.updateTime = function(n) {
        return new t(n);
    }, Object.defineProperty(t.prototype, "tn", {
        /** Returns whether this Precondition is empty. */
        get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Returns true if the preconditions is valid for the given document
     * (or null if no document is available).
     */
    t.prototype.nn = function(t) {
        return void 0 !== this.updateTime ? t instanceof bn && t.version.isEqual(this.updateTime) : void 0 !== this.exists ? this.exists === t instanceof bn : (C$1(this.tn, "Precondition should be empty"), 
        !0);
    }, t.prototype.isEqual = function(t) {
        return n = this.updateTime, i = t.updateTime, (null != n ? !(!i || !n.isEqual(i)) : n === i) && this.exists === t.exists;
        var n, i;
    }, t.NONE = new t, t;
}(), Ht = /** @class */ function() {
    function t() {}
    return t.prototype.in = function(t) {
        null != t && C$1(t.key.isEqual(this.key), "Can only apply a mutation to a document with the same key");
    }, 
    /**
     * Returns the version from the given document for use as the result of a
     * mutation. Mutations are defined to return the version of the base document
     * only if it is an existing document. Deleted and unknown documents have a
     * post-mutation version of SnapshotVersion.MIN.
     */
    t.en = function(t) {
        return t instanceof bn ? t.version : _t.MIN;
    }, t;
}(), Jt = /** @class */ function(t) {
    function n(n, i, e) {
        var r = t.call(this) || this;
        return r.key = n, r.value = i, r.rn = e, r.type = jt.Set, r;
    }
    return __extends(n, t), n.prototype.Wt = function(t, n) {
        this.in(t), C$1(null == n.transformResults, "Transform results received by SetMutation.");
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        var i = n.version;
        return new bn(this.key, i, {
            hasCommittedMutations: !0
        }, this.value);
    }, n.prototype.Gt = function(t, n, i) {
        if (this.in(t), !this.rn.nn(t)) return t;
        var e = Ht.en(t);
        return new bn(this.key, e, {
            un: !0
        }, this.value);
    }, n.prototype.sn = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.rn.isEqual(t.rn);
    }, n;
}(Ht), Yt = /** @class */ function(t) {
    function n(n, i, e, r) {
        var u = t.call(this) || this;
        return u.key = n, u.data = i, u.on = e, u.rn = r, u.type = jt.$t, u;
    }
    return __extends(n, t), n.prototype.Wt = function(t, n) {
        if (this.in(t), C$1(null == n.transformResults, "Transform results received by PatchMutation."), 
        !this.rn.nn(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new _n(this.key, n.version);
        var i = this.hn(t);
        return new bn(this.key, n.version, {
            hasCommittedMutations: !0
        }, i);
    }, n.prototype.Gt = function(t, n, i) {
        if (this.in(t), !this.rn.nn(t)) return t;
        var e = Ht.en(t), r = this.hn(t);
        return new bn(this.key, e, {
            un: !0
        }, r);
    }, n.prototype.sn = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.on.isEqual(t.on) && this.rn.isEqual(t.rn);
    }, 
    /**
     * Patches the data of document if available or creates a new document. Note
     * that this does not check whether or not the precondition of this patch
     * holds.
     */
    n.prototype.hn = function(t) {
        var n;
        return n = t instanceof bn ? t.data() : wn.EMPTY, this.cn(n);
    }, n.prototype.cn = function(t) {
        var n = this, i = t.an();
        return this.on.fields.forEach((function(t) {
            if (!t.J()) {
                var e = n.data.field(t);
                null !== e ? i.set(t, e) : i.delete(t);
            }
        })), i.fn();
    }, n;
}(Ht), Xt = /** @class */ function(t) {
    function n(n, i) {
        var e = t.call(this) || this;
        return e.key = n, e.fieldTransforms = i, e.type = jt.Transform, 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        e.rn = Kt.exists(!0), e;
    }
    return __extends(n, t), n.prototype.Wt = function(t, n) {
        if (this.in(t), C$1(null != n.transformResults, "Transform results missing for TransformMutation."), 
        !this.rn.nn(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new _n(this.key, n.version);
        var i = this.ln(t), e = this.dn(t, n.transformResults), r = n.version, u = this.vn(i.data(), e);
        return new bn(this.key, r, {
            hasCommittedMutations: !0
        }, u);
    }, n.prototype.Gt = function(t, n, i) {
        if (this.in(t), !this.rn.nn(t)) return t;
        var e = this.ln(t), r = this.wn(i, t, n), u = this.vn(e.data(), r);
        return new bn(this.key, e.version, {
            un: !0
        }, u);
    }, n.prototype.sn = function(t) {
        for (var n = null, i = 0, e = this.fieldTransforms; i < e.length; i++) {
            var r = e[i], u = t instanceof bn ? t.field(r.field) : void 0, s = r.transform.zt(u || null);
            null != s && (n = null == n ? wn.mn().set(r.field, s) : n.set(r.field, s));
        }
        return n ? n.fn() : null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && N$1(this.fieldTransforms, t.fieldTransforms) && this.rn.isEqual(t.rn);
    }, 
    /**
     * Asserts that the given MaybeDocument is actually a Document and verifies
     * that it matches the key for this mutation. Since we only support
     * transformations with precondition exists this method is guaranteed to be
     * safe.
     */
    n.prototype.ln = function(t) {
        return C$1(t instanceof bn, "Unknown MaybeDocument type " + t), C$1(t.key.isEqual(this.key), "Can only transform a document with the same key"), 
        t;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use after a
     * TransformMutation has been acknowledged by the server.
     *
     * @param baseDoc The document prior to applying this mutation batch.
     * @param serverTransformResults The transform results received by the server.
     * @return The transform results list.
     */
    n.prototype.dn = function(t, n) {
        var i = [];
        C$1(this.fieldTransforms.length === n.length, "server transform result count (" + n.length + ") should match field transform count (" + this.fieldTransforms.length + ")");
        for (var e = 0; e < n.length; e++) {
            var r = this.fieldTransforms[e], u = r.transform, s = null;
            t instanceof bn && (s = t.field(r.field)), i.push(u.Wt(s, n[e]));
        }
        return i;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use when applying a
     * TransformMutation locally.
     *
     * @param localWriteTime The local time of the transform mutation (used to
     *     generate ServerTimestampValues).
     * @param maybeDoc The current state of the document after applying all
     *     previous mutations.
     * @param baseDoc The document prior to applying this mutation batch.
     * @return The transform results list.
     */
    n.prototype.wn = function(t, n, i) {
        for (var e = [], r = 0, u = this.fieldTransforms; r < u.length; r++) {
            var s = u[r], o = s.transform, h = null;
            n instanceof bn && (h = n.field(s.field)), null === h && i instanceof bn && (
            // If the current document does not contain a value for the mutated
            // field, use the value that existed before applying this mutation
            // batch. This solves an edge case where a PatchMutation clears the
            // values in a nested map before the TransformMutation is applied.
            h = i.field(s.field)), e.push(o.Gt(h, t));
        }
        return e;
    }, n.prototype.vn = function(t, n) {
        C$1(n.length === this.fieldTransforms.length, "TransformResults length mismatch.");
        for (var i = t.an(), e = 0; e < this.fieldTransforms.length; e++) {
            var r = this.fieldTransforms[e].field;
            i.set(r, n[e]);
        }
        return i.fn();
    }, n;
}(Ht), $t = /** @class */ function(t) {
    function n(n, i) {
        var e = t.call(this) || this;
        return e.key = n, e.rn = i, e.type = jt.Zt, e;
    }
    return __extends(n, t), n.prototype.Wt = function(t, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return this.in(t), C$1(null == n.transformResults, "Transform results received by DeleteMutation."), 
        new yn(this.key, n.version, {
            hasCommittedMutations: !0
        });
    }, n.prototype.Gt = function(t, n, i) {
        return this.in(t), this.rn.nn(t) ? (t && C$1(t.key.isEqual(this.key), "Can only apply mutation to document with same key"), 
        new yn(this.key, _t.B())) : t;
    }, n.prototype.sn = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.rn.isEqual(t.rn);
    }, n;
}(Ht), Zt = /** @class */ function(t) {
    function n(n, i) {
        var e = t.call(this) || this;
        return e.key = n, e.rn = i, e.type = jt.Verify, e;
    }
    return __extends(n, t), n.prototype.Wt = function(t, n) {
        S$1("VerifyMutation should only be used in Transactions.");
    }, n.prototype.Gt = function(t, n, i) {
        S$1("VerifyMutation should only be used in Transactions.");
    }, n.prototype.sn = function(t) {
        S$1("VerifyMutation should only be used in Transactions.");
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.rn.isEqual(t.rn);
    }, n;
}(Ht);

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set, Patch, and Transform mutations. For Delete
 * mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set, Patch, and Transform mutations. As deletes
 * have no explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */
// This order is defined by the backend.
(Gt = Qt || (Qt = {}))[Gt.pn = 0] = "__PRIVATE_NullValue", Gt[Gt.gn = 1] = "__PRIVATE_BooleanValue", 
Gt[Gt.bn = 2] = "__PRIVATE_NumberValue", Gt[Gt.yn = 3] = "__PRIVATE_TimestampValue", 
Gt[Gt._n = 4] = "__PRIVATE_StringValue", Gt[Gt.In = 5] = "__PRIVATE_BlobValue", 
Gt[Gt.Tn = 6] = "__PRIVATE_RefValue", Gt[Gt.En = 7] = "__PRIVATE_GeoPointValue", 
Gt[Gt.ArrayValue = 8] = "ArrayValue", Gt[Gt.Rn = 9] = "__PRIVATE_ObjectValue", (zt = Wt || (Wt = {}))[zt.An = 0] = "__PRIVATE_Default", 
zt[zt.Dn = 1] = "__PRIVATE_Estimate", zt[zt.Pn = 2] = "__PRIVATE_Previous";

/** Holds properties that define field value deserialization options. */
var tn = /** @class */ function() {
    function t(t, n) {
        this.Sn = t, this.timestampsInSnapshots = n;
    }
    return t.Cn = function(n, i) {
        switch (n.serverTimestamps) {
          case "estimate":
            return new t(Wt.Dn, i);

          case "previous":
            return new t(Wt.Pn, i);

          case "none":
 // Fall-through intended.
                      case void 0:
            return new t(Wt.An, i);

          default:
            return S$1("fromSnapshotOptions() called with invalid options.");
        }
    }, t;
}(), nn = /** @class */ function() {
    function t() {}
    return t.prototype.toString = function() {
        var t = this.value();
        return null === t ? "null" : t.toString();
    }, t.prototype.kn = function(t) {
        return C$1(this.Vn !== t.Vn, "Default compareTo should not be used for values of same type."), 
        V$1(this.Vn, t.Vn);
    }, t;
}(), en = /** @class */ function(t) {
    function n() {
        var n = t.call(this) || this;
        return n.Vn = Qt.pn, 
        // internalValue is unused but we add it to work around
        // https://github.com/Microsoft/TypeScript/issues/15585
        n.Ht = null, n;
    }
    return __extends(n, t), n.prototype.value = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n.prototype.h = function(t) {
        return t instanceof n ? 0 : this.kn(t);
    }, n.prototype.Nn = function() {
        return 4;
    }, n.On = new n, n;
}(nn), rn = /** @class */ function(t) {
    function n(n) {
        var i = t.call(this) || this;
        return i.Ht = n, i.Vn = Qt.gn, i;
    }
    return __extends(n, t), n.prototype.value = function(t) {
        return this.Ht;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.Ht === t.Ht;
    }, n.prototype.h = function(t) {
        return t instanceof n ? V$1(this.Ht, t.Ht) : this.kn(t);
    }, n.prototype.Nn = function() {
        return 4;
    }, n.of = function(t) {
        return t ? n.Fn : n.Un;
    }, n.Fn = new n(!0), n.Un = new n(!1), n;
}(nn), un = /** @class */ function(t) {
    function n(n) {
        var i = t.call(this) || this;
        return i.Ht = n, i.Vn = Qt.bn, i;
    }
    return __extends(n, t), n.prototype.value = function(t) {
        return this.Ht;
    }, n.prototype.h = function(t) {
        return t instanceof n ? (i = this.Ht, e = t.Ht, i < e ? -1 : i > e ? 1 : i === e ? 0 : 
        // one or both are NaN.
        isNaN(i) ? isNaN(e) ? 0 : -1 : 1) : this.kn(t);
        /** Utility function to compare doubles (using Firestore semantics for NaN). */
        var i, e;
        /**
 * Utility function to check numbers for equality using Firestore semantics
 * (NaN === NaN, -0.0 !== 0.0).
 */    }, n.prototype.Nn = function() {
        return 8;
    }, n;
}(nn);

/**
 * A field value represents a datatype as stored by Firestore.
 */ function sn(t, n) {
    // Implemented based on Object.is() polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n;
}

var on = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends(n, t), n.prototype.isEqual = function(t) {
        // NOTE: DoubleValue and IntegerValue instances may compareTo() the same,
        // but that doesn't make them equal via isEqual().
        return t instanceof n && sn(this.Ht, t.Ht);
    }, n;
}(un), hn = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends(n, t), n.prototype.isEqual = function(t) {
        // NOTE: DoubleValue and IntegerValue instances may compareTo() the same,
        // but that doesn't make them equal via isEqual().
        return t instanceof n && sn(this.Ht, t.Ht);
    }, n.xn = new n(NaN), n.POSITIVE_INFINITY = new n(1 / 0), n.NEGATIVE_INFINITY = new n(-1 / 0), 
    n;
}(un), cn = /** @class */ function(t) {
    function n(n) {
        var i = t.call(this) || this;
        return i.Ht = n, i.Vn = Qt._n, i;
    }
    return __extends(n, t), n.prototype.value = function(t) {
        return this.Ht;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.Ht === t.Ht;
    }, n.prototype.h = function(t) {
        return t instanceof n ? V$1(this.Ht, t.Ht) : this.kn(t);
    }, n.prototype.Nn = function() {
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures:
        // "JavaScript's String type is [...] a set of elements of 16-bit unsigned
        // integer values"
        return 2 * this.Ht.length;
    }, n;
}(nn), an = /** @class */ function(t) {
    function n(n) {
        var i = t.call(this) || this;
        return i.Ht = n, i.Vn = Qt.yn, i;
    }
    return __extends(n, t), n.prototype.value = function(t) {
        return !t || t.timestampsInSnapshots ? this.Ht : this.Ht.toDate();
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.Ht.isEqual(t.Ht);
    }, n.prototype.h = function(t) {
        return t instanceof n ? this.Ht.U(t.Ht) : t instanceof fn ? -1 : this.kn(t);
    }, n.prototype.Nn = function() {
        // Timestamps are made up of two distinct numbers (seconds + nanoseconds)
        return 16;
    }, n;
}(nn), fn = /** @class */ function(t) {
    function n(n, i) {
        var e = t.call(this) || this;
        return e.jn = n, e.previousValue = i, e.Vn = Qt.yn, e;
    }
    return __extends(n, t), n.prototype.value = function(t) {
        return t && t.Sn === Wt.Dn ? new an(this.jn).value(t) : t && t.Sn === Wt.Pn && this.previousValue ? this.previousValue.value(t) : null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.jn.isEqual(t.jn);
    }, n.prototype.h = function(t) {
        return t instanceof n ? this.jn.U(t.jn) : t instanceof an ? 1 : this.kn(t);
    }, n.prototype.toString = function() {
        return "<ServerTimestamp localTime=" + this.jn.toString() + ">";
    }, n.prototype.Nn = function() {
        /* localWriteTime */
        return 16 + (this.previousValue ? this.previousValue.Nn() : 0);
    }, n;
}(nn), ln = /** @class */ function(t) {
    function n(n) {
        var i = t.call(this) || this;
        return i.Ht = n, i.Vn = Qt.In, i;
    }
    return __extends(n, t), n.prototype.value = function(t) {
        return this.Ht;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.Ht.isEqual(t.Ht);
    }, n.prototype.h = function(t) {
        return t instanceof n ? this.Ht.U(t.Ht) : this.kn(t);
    }, n.prototype.Nn = function() {
        return this.Ht.Ln();
    }, n;
}(nn), dn = /** @class */ function(t) {
    function n(n, i) {
        var e = t.call(this) || this;
        return e.s = n, e.key = i, e.Vn = Qt.Tn, e;
    }
    return __extends(n, t), n.prototype.value = function(t) {
        return this.key;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && (this.key.isEqual(t.key) && this.s.isEqual(t.s));
    }, n.prototype.h = function(t) {
        if (t instanceof n) {
            var i = this.s.h(t.s);
            return 0 !== i ? i : At.G(this.key, t.key);
        }
        return this.kn(t);
    }, n.prototype.Nn = function() {
        return this.s.projectId.length + this.s.database.length + this.key.toString().length;
    }, n;
}(nn), vn = /** @class */ function(t) {
    function n(n) {
        var i = t.call(this) || this;
        return i.Ht = n, i.Vn = Qt.En, i;
    }
    return __extends(n, t), n.prototype.value = function(t) {
        return this.Ht;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.Ht.isEqual(t.Ht);
    }, n.prototype.h = function(t) {
        return t instanceof n ? this.Ht.U(t.Ht) : this.kn(t);
    }, n.prototype.Nn = function() {
        // GeoPoints are made up of two distinct numbers (latitude + longitude)
        return 16;
    }, n;
}(nn), wn = /** @class */ function(t) {
    function n(n) {
        var i = t.call(this) || this;
        return i.Ht = n, i.Vn = Qt.Rn, i;
    }
    /** Returns a new ObjectValueBuilder instance that is based on an empty object. */    return __extends(n, t), 
    n.mn = function() {
        return new mn(n.EMPTY.Ht);
    }, n.prototype.value = function(t) {
        var n = {};
        return this.Ht.pt((function(i, e) {
            n[i] = e.value(t);
        })), n;
    }, n.prototype.forEach = function(t) {
        this.Ht.pt(t);
    }, n.prototype.isEqual = function(t) {
        if (t instanceof n) {
            for (var i = this.Ht.bt(), e = t.Ht.bt(); i.At() && e.At(); ) {
                var r = i.Rt(), u = e.Rt();
                if (r.key !== u.key || !r.value.isEqual(u.value)) return !1;
            }
            return !i.At() && !e.At();
        }
        return !1;
    }, n.prototype.h = function(t) {
        if (t instanceof n) {
            for (var i = this.Ht.bt(), e = t.Ht.bt(); i.At() && e.At(); ) {
                var r = i.Rt(), u = e.Rt(), s = V$1(r.key, u.key) || r.value.h(u.value);
                if (s) return s;
            }
            // Only equal if both iterators are exhausted
                        return V$1(i.At(), e.At());
        }
        return this.kn(t);
    }, n.prototype.contains = function(t) {
        return null !== this.field(t);
    }, n.prototype.field = function(t) {
        C$1(!t.J(), "Can't get field of empty path");
        var i = this;
        return t.forEach((function(t) {
            i = i instanceof n ? i.Ht.get(t) : null;
        })), i;
    }, 
    /**
     * Returns a FieldMask built from all FieldPaths starting from this ObjectValue,
     * including paths from nested objects.
     */
    n.prototype.on = function() {
        var t = new kt(Rt.G);
        return this.Ht.forEach((function(i, e) {
            var r = new Rt([ i ]);
            if (e instanceof n) {
                var u = e.on().fields;
                u.J() ? 
                // Preserve the empty map by adding it to the FieldMask.
                t = t.add(r) : 
                // For nested and non-empty ObjectValues, add the FieldPath of the
                // leaf nodes.
                u.forEach((function(n) {
                    t = t.add(r.child(n));
                }));
            } else t = t.add(r);
        })), Bt.Jt(t);
    }, n.prototype.Nn = function() {
        var t = 0;
        return this.Ht.pt((function(n, i) {
            t += n.length + i.Nn();
        })), t;
    }, n.prototype.toString = function() {
        return this.Ht.toString();
    }, 
    /** Creates a ObjectValueBuilder instance that is based on the current value. */
    n.prototype.an = function() {
        return new mn(this.Ht);
    }, n.EMPTY = new n(new Dt(V$1)), n;
}(nn), mn = /** @class */ function() {
    function t(t) {
        this.Ht = t;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */    return t.prototype.set = function(t, n) {
        C$1(!t.J(), "Cannot set field for empty path on ObjectValue");
        var i = t.Y();
        if (1 === t.length) this.Ht = this.Ht.lt(i, n); else {
            // nested field
            var e = this.Ht.get(i), r = (e instanceof wn ? e : wn.EMPTY).an().set(t.K(), n).fn();
            this.Ht = this.Ht.lt(i, r);
        }
        return this;
    }, 
    /**
     * Removes the field at the current path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove
     * @return The current Builder instance.
     */
    t.prototype.delete = function(t) {
        C$1(!t.J(), "Cannot delete field for empty path on ObjectValue");
        var n = t.Y();
        if (1 === t.length) this.Ht = this.Ht.remove(n); else {
            // nested field
            var i = this.Ht.get(n);
            if (i instanceof wn) {
                var e = i.an().delete(t.K()).fn();
                this.Ht = this.Ht.lt(t.Y(), e);
            }
        }
        return this;
    }, t.prototype.fn = function() {
        return new wn(this.Ht);
    }, t;
}(), pn = /** @class */ function(t) {
    function n(n) {
        var i = t.call(this) || this;
        return i.Ht = n, i.Vn = Qt.ArrayValue, i;
    }
    return __extends(n, t), n.prototype.value = function(t) {
        return this.Ht.map((function(n) {
            return n.value(t);
        }));
    }, 
    /**
     * Returns true if the given value is contained in this array.
     */
    n.prototype.contains = function(t) {
        for (var n = 0, i = this.Ht; n < i.length; n++) {
            if (i[n].isEqual(t)) return !0;
        }
        return !1;
    }, n.prototype.forEach = function(t) {
        this.Ht.forEach(t);
    }, n.prototype.isEqual = function(t) {
        if (t instanceof n) {
            if (this.Ht.length !== t.Ht.length) return !1;
            for (var i = 0; i < this.Ht.length; i++) if (!this.Ht[i].isEqual(t.Ht[i])) return !1;
            return !0;
        }
        return !1;
    }, n.prototype.h = function(t) {
        if (t instanceof n) {
            for (var i = Math.min(this.Ht.length, t.Ht.length), e = 0; e < i; e++) {
                var r = this.Ht[e].h(t.Ht[e]);
                if (r) return r;
            }
            return V$1(this.Ht.length, t.Ht.length);
        }
        return this.kn(t);
    }, n.prototype.Nn = function() {
        return this.Ht.reduce((function(t, n) {
            return t + n.Nn();
        }), 0);
    }, n.prototype.toString = function() {
        return "[" + this.Ht.map((function(t) {
            return t.toString();
        })).join(",") + "]";
    }, n;
}(nn), gn = /** @class */ function() {
    function t(t, n) {
        this.key = t, this.version = n;
    }
    return t.Bn = function(t, n) {
        return At.G(t.key, n.key);
    }, t;
}(), bn = /** @class */ function(t) {
    function n(n, i, e, r, u, s) {
        var o = t.call(this, n, i) || this;
        return o.Mn = r, o.proto = u, o.converter = s, C$1(void 0 !== o.Mn || void 0 !== o.proto && void 0 !== o.converter, "If objectValue is not defined, proto and converter need to be set."), 
        o.un = !!e.un, o.hasCommittedMutations = !!e.hasCommittedMutations, o;
    }
    return __extends(n, t), n.prototype.field = function(t) {
        if (this.Mn) return this.Mn.field(t);
        this.qn || (
        // TODO(b/136090445): Remove the cache when `getField` is no longer
        // called during Query ordering.
        this.qn = new Map);
        var n = t.nt(), i = this.qn.get(n);
        if (void 0 === i) {
            // Instead of deserializing the full Document proto, we only
            // deserialize the value at the requested field path. This speeds up
            // Query execution as query filters can discard documents based on a
            // single field.
            var e = this.Qn(t);
            i = void 0 === e ? null : this.converter(e), this.qn.set(n, i);
        }
        return i;
    }, n.prototype.data = function() {
        var t = this;
        if (!this.Mn) {
            var n = wn.mn();
            Y$1(this.proto.fields || {}, (function(i, e) {
                n.set(new Rt([ i ]), t.converter(e));
            })), this.Mn = n.fn(), 
            // Once objectValue is computed, values inside the fieldValueCache are no
            // longer accessed.
            this.qn = void 0;
        }
        return this.Mn;
    }, n.prototype.value = function() {
        return this.data().value();
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.un === t.un && this.hasCommittedMutations === t.hasCommittedMutations && this.data().isEqual(t.data());
    }, n.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.data().toString() + ", {hasLocalMutations: " + this.un + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.un || this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Returns the nested Protobuf value for 'path`. Can only be called if
     * `proto` was provided at construction time.
     */
    n.prototype.Qn = function(t) {
        C$1(void 0 !== this.proto, "Can only call getProtoField() when proto is defined");
        for (var n = this.proto.fields ? this.proto.fields[t.Y()] : void 0, i = 1; i < t.length; ++i) {
            if (!n || !n.mapValue || !n.mapValue.fields) return;
            n = n.mapValue.fields[t.get(i)];
        }
        return n;
    }, n.Gn = function(t, n, i) {
        var e = n.field(t), r = i.field(t);
        return null !== e && null !== r ? e.h(r) : S$1("Trying to compare documents on fields that don't exist");
    }, n;
}(gn), yn = /** @class */ function(t) {
    function n(n, i, e) {
        var r = t.call(this, n, i) || this;
        return r.hasCommittedMutations = !(!e || !e.hasCommittedMutations), r;
    }
    return __extends(n, t), n.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(gn), _n = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends(n, t), n.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(gn), In = Number, Tn = In.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1), En = In.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1, Rn = In.isInteger || function(t) {
    return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
};

/**
 * Returns whether a variable is either undefined or null.
 */
function An(t) {
    return null == t;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */ function Dn(t) {
    return Rn(t) && t <= En && t >= Tn;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A Target represents the WatchTarget representation of a Query, which is used
 * by the LocalStore and the RemoteStore to keep track of and to execute
 * backend queries. While a Query can represent multiple Targets, each Targets
 * maps to a single WatchTarget in RemoteStore and a single TargetData entry
 * in persistence.
 */ var Pn, Sn, Cn = /** @class */ function() {
    /**
     * Initializes a Target with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     *
     * NOTE: you should always construct `Target` from `Query.toTarget` instead of
     * using this constructor, because `Query` provides an implicit `orderBy`
     * property.
     */
    function t(t, n, i, e, r, u, s) {
        void 0 === n && (n = null), void 0 === i && (i = []), void 0 === e && (e = []), 
        void 0 === r && (r = null), void 0 === u && (u = null), void 0 === s && (s = null), 
        this.path = t, this.collectionGroup = n, this.orderBy = i, this.filters = e, this.limit = r, 
        this.startAt = u, this.endAt = s, this.Wn = null;
    }
    return t.prototype.canonicalId = function() {
        if (null === this.Wn) {
            var t = this.path.nt();
            null !== this.collectionGroup && (t += "|cg:" + this.collectionGroup), t += "|f:";
            for (var n = 0, i = this.filters; n < i.length; n++) {
                t += i[n].canonicalId(), t += ",";
            }
            t += "|ob:";
            // TODO(dimond): make this collision resistant
            for (var e = 0, r = this.orderBy; e < r.length; e++) {
                t += r[e].canonicalId(), t += ",";
            }
            An(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", t += this.startAt.canonicalId()), 
            this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), this.Wn = t;
        }
        return this.Wn;
    }, t.prototype.toString = function() {
        var t = this.path.nt();
        return null !== this.collectionGroup && (t += " collectionGroup=" + this.collectionGroup), 
        this.filters.length > 0 && (t += ", filters: [" + this.filters.join(", ") + "]"), 
        An(this.limit) || (t += ", limit: " + this.limit), this.orderBy.length > 0 && (t += ", orderBy: [" + this.orderBy.join(", ") + "]"), 
        this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), 
        "Target(" + t + ")";
    }, t.prototype.isEqual = function(t) {
        if (this.limit !== t.limit) return !1;
        if (this.orderBy.length !== t.orderBy.length) return !1;
        for (var n = 0; n < this.orderBy.length; n++) if (!this.orderBy[n].isEqual(t.orderBy[n])) return !1;
        if (this.filters.length !== t.filters.length) return !1;
        for (n = 0; n < this.filters.length; n++) if (!this.filters[n].isEqual(t.filters[n])) return !1;
        return this.collectionGroup === t.collectionGroup && (!!this.path.isEqual(t.path) && (!(null !== this.startAt ? !this.startAt.isEqual(t.startAt) : null !== t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt)));
    }, t.prototype.zn = function() {
        return At.ht(this.path) && null === this.collectionGroup && 0 === this.filters.length;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (Sn = Pn || (Pn = {})).Kn = "F", Sn.Hn = "L";

/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 */
var kn, Vn, Nn = /** @class */ function() {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    function t(t, n, i, e, r, u, s, o) {
        void 0 === n && (n = null), void 0 === i && (i = []), void 0 === e && (e = []), 
        void 0 === r && (r = null), void 0 === u && (u = Pn.Kn), void 0 === s && (s = null), 
        void 0 === o && (o = null), this.path = t, this.collectionGroup = n, this.Jn = i, 
        this.filters = e, this.limit = r, this.Yn = u, this.startAt = s, this.endAt = o, 
        this.Xn = null, 
        // The corresponding `Target` of this `Query` instance.
        this.$n = null, this.startAt && this.Zn(this.startAt), this.endAt && this.Zn(this.endAt);
    }
    return t.ti = function(n) {
        return new t(n);
    }, Object.defineProperty(t.prototype, "orderBy", {
        get: function() {
            if (null === this.Xn) {
                var t = this.ni(), n = this.ii();
                if (null !== t && null === n) 
                // In order to implicitly add key ordering, we must also add the
                // inequality filter field for it to be a valid query.
                // Note that the default inequality field and key ordering is ascending.
                t.ut() ? this.Xn = [ Wn ] : this.Xn = [ new Gn(t), Wn ]; else {
                    C$1(null === t || null !== n && t.isEqual(n), "First orderBy should match inequality field."), 
                    this.Xn = [];
                    for (var i = !1, e = 0, r = this.Jn; e < r.length; e++) {
                        var u = r[e];
                        this.Xn.push(u), u.field.ut() && (i = !0);
                    }
                    if (!i) {
                        // The order of the implicit key ordering always matches the last
                        // explicit order by
                        var s = this.Jn.length > 0 ? this.Jn[this.Jn.length - 1].dir : qn.ASCENDING;
                        this.Xn.push(s === qn.ASCENDING ? Wn : zn);
                    }
                }
            }
            return this.Xn;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.ei = function(n) {
        C$1(null == this.ni() || !(n instanceof Un) || !n.ri() || n.field.isEqual(this.ni()), "Query must only have one inequality field."), 
        C$1(!this.zn(), "No filtering allowed for document query");
        var i = this.filters.concat([ n ]);
        return new t(this.path, this.collectionGroup, this.Jn.slice(), i, this.limit, this.Yn, this.startAt, this.endAt);
    }, t.prototype.ui = function(n) {
        C$1(!this.startAt && !this.endAt, "Bounds must be set after orderBy");
        // TODO(dimond): validate that orderBy does not list the same key twice.
        var i = this.Jn.concat([ n ]);
        return new t(this.path, this.collectionGroup, i, this.filters.slice(), this.limit, this.Yn, this.startAt, this.endAt);
    }, t.prototype.si = function(n) {
        return new t(this.path, this.collectionGroup, this.Jn.slice(), this.filters.slice(), n, Pn.Kn, this.startAt, this.endAt);
    }, t.prototype.oi = function(n) {
        return new t(this.path, this.collectionGroup, this.Jn.slice(), this.filters.slice(), n, Pn.Hn, this.startAt, this.endAt);
    }, t.prototype.hi = function(n) {
        return new t(this.path, this.collectionGroup, this.Jn.slice(), this.filters.slice(), this.limit, this.Yn, n, this.endAt);
    }, t.prototype.ci = function(n) {
        return new t(this.path, this.collectionGroup, this.Jn.slice(), this.filters.slice(), this.limit, this.Yn, this.startAt, n);
    }, 
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */
    t.prototype.ai = function(n) {
        return new t(n, 
        /*collectionGroup=*/ null, this.Jn.slice(), this.filters.slice(), this.limit, this.Yn, this.startAt, this.endAt);
    }, 
    /**
     * Returns true if this query does not specify any query constraints that
     * could remove results.
     */
    t.prototype.fi = function() {
        return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.Jn.length || 1 === this.Jn.length && this.Jn[0].field.ut());
    }, 
    // TODO(b/29183165): This is used to get a unique string from a query to, for
    // example, use as a dictionary key, but the implementation is subject to
    // collisions. Make it collision-free.
    t.prototype.canonicalId = function() {
        return this.li().canonicalId() + "|lt:" + this.Yn;
    }, t.prototype.toString = function() {
        return "Query(target=" + this.li().toString() + "; limitType=" + this.Yn + ")";
    }, t.prototype.isEqual = function(t) {
        return this.li().isEqual(t.li()) && this.Yn === t.Yn;
    }, t.prototype.di = function(t, n) {
        for (var i = !1, e = 0, r = this.orderBy; e < r.length; e++) {
            var u = r[e], s = u.compare(t, n);
            if (0 !== s) return s;
            i = i || u.field.ut();
        }
        // Assert that we actually compared by key
                return C$1(i, "orderBy used that doesn't compare on key field"), 0;
    }, t.prototype.matches = function(t) {
        return this.vi(t) && this.wi(t) && this.mi(t) && this.pi(t);
    }, t.prototype.gi = function() {
        return !An(this.limit) && this.Yn === Pn.Kn;
    }, t.prototype.bi = function() {
        return !An(this.limit) && this.Yn === Pn.Hn;
    }, t.prototype.ii = function() {
        return this.Jn.length > 0 ? this.Jn[0].field : null;
    }, t.prototype.ni = function() {
        for (var t = 0, n = this.filters; t < n.length; t++) {
            var i = n[t];
            if (i instanceof Un && i.ri()) return i.field;
        }
        return null;
    }, 
    // Checks if any of the provided Operators are included in the query and
    // returns the first one that is, or null if none are.
    t.prototype.yi = function(t) {
        for (var n = 0, i = this.filters; n < i.length; n++) {
            var e = i[n];
            if (e instanceof Un && t.indexOf(e.op) >= 0) return e.op;
        }
        return null;
    }, t.prototype.zn = function() {
        return this.li().zn();
    }, t.prototype._i = function() {
        return null !== this.collectionGroup;
    }, 
    /**
     * Converts this `Query` instance to it's corresponding `Target`
     * representation.
     */
    t.prototype.li = function() {
        if (!this.$n) if (this.Yn === Pn.Kn) this.$n = new Cn(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt); else {
            for (
            // Flip the orderBy directions since we want the last results
            var t = [], n = 0, i = this.orderBy; n < i.length; n++) {
                var e = i[n], r = e.dir === qn.DESCENDING ? qn.ASCENDING : qn.DESCENDING;
                t.push(new Gn(e.field, r));
            }
            // We need to swap the cursors to match the now-flipped query ordering.
                        var u = this.endAt ? new Qn(this.endAt.position, !this.endAt.before) : null, s = this.startAt ? new Qn(this.startAt.position, !this.startAt.before) : null;
            // Now return as a LimitType.First query.
            this.$n = new Cn(this.path, this.collectionGroup, t, this.filters, this.limit, u, s);
        }
        return this.$n;
    }, t.prototype.vi = function(t) {
        var n = t.key.path;
        return null !== this.collectionGroup ? t.key.ct(this.collectionGroup) && this.path.$(n) : At.ht(this.path) ? this.path.isEqual(n) : this.path.Z(n);
    }, 
    /**
     * A document must have a value for every ordering clause in order to show up
     * in the results.
     */
    t.prototype.wi = function(t) {
        for (var n = 0, i = this.Jn; n < i.length; n++) {
            var e = i[n];
            // order by key always matches
                        if (!e.field.ut() && null === t.field(e.field)) return !1;
        }
        return !0;
    }, t.prototype.mi = function(t) {
        for (var n = 0, i = this.filters; n < i.length; n++) {
            if (!i[n].matches(t)) return !1;
        }
        return !0;
    }, 
    /**
     * Makes sure a document is within the bounds, if provided.
     */
    t.prototype.pi = function(t) {
        return !(this.startAt && !this.startAt.Ii(this.orderBy, t)) && (!this.endAt || !this.endAt.Ii(this.orderBy, t));
    }, t.prototype.Zn = function(t) {
        C$1(t.position.length <= this.orderBy.length, "Bound is longer than orderBy");
    }, t;
}(), On = function() {}, Fn = /** @class */ function() {
    function t(t) {
        this.name = t;
    }
    return t.it = function(n) {
        switch (n) {
          case "<":
            return t.LESS_THAN;

          case "<=":
            return t.LESS_THAN_OR_EQUAL;

          case "==":
            return t.EQUAL;

          case ">=":
            return t.GREATER_THAN_OR_EQUAL;

          case ">":
            return t.GREATER_THAN;

          case "array-contains":
            return t.ARRAY_CONTAINS;

          case "in":
            return t.IN;

          case "array-contains-any":
            return t.ARRAY_CONTAINS_ANY;

          default:
            return S$1("Unknown FieldFilter operator: " + n);
        }
    }, t.prototype.toString = function() {
        return this.name;
    }, t.prototype.isEqual = function(t) {
        return this.name === t.name;
    }, t.LESS_THAN = new t("<"), t.LESS_THAN_OR_EQUAL = new t("<="), t.EQUAL = new t("=="), 
    t.GREATER_THAN = new t(">"), t.GREATER_THAN_OR_EQUAL = new t(">="), t.ARRAY_CONTAINS = new t("array-contains"), 
    t.IN = new t("in"), t.ARRAY_CONTAINS_ANY = new t("array-contains-any"), t;
}(), Un = /** @class */ function(t) {
    function n(n, i, e) {
        var r = t.call(this) || this;
        return r.field = n, r.op = i, r.value = e, r;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return __extends(n, t), n.create = function(t, i, e) {
        if (t.ut()) return i === Fn.IN ? (C$1(e instanceof pn, "Comparing on key with IN, but filter value not an ArrayValue"), 
        C$1(e.Ht.every((function(t) {
            return t instanceof dn;
        })), "Comparing on key with IN, but an array value was not a RefValue"), new jn(t, e)) : (C$1(e instanceof dn, "Comparing on key, but filter value not a RefValue"), 
        C$1(i !== Fn.ARRAY_CONTAINS && i !== Fn.ARRAY_CONTAINS_ANY, "'" + i.toString() + "' queries don't make sense on document keys."), 
        new xn(t, i, e));
        if (e.isEqual(en.On)) {
            if (i !== Fn.EQUAL) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
            return new n(t, i, e);
        }
        if (e.isEqual(hn.xn)) {
            if (i !== Fn.EQUAL) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
            return new n(t, i, e);
        }
        return i === Fn.ARRAY_CONTAINS ? new Ln(t, e) : i === Fn.IN ? (C$1(e instanceof pn, "IN filter has invalid value: " + e.toString()), 
        new Bn(t, e)) : i === Fn.ARRAY_CONTAINS_ANY ? (C$1(e instanceof pn, "ARRAY_CONTAINS_ANY filter has invalid value: " + e.toString()), 
        new Mn(t, e)) : new n(t, i, e);
    }, n.prototype.matches = function(t) {
        var n = t.field(this.field);
        // Only compare types with matching backend order (such as double and int).
                return null !== n && this.value.Vn === n.Vn && this.Ti(n.h(this.value));
    }, n.prototype.Ti = function(t) {
        switch (this.op) {
          case Fn.LESS_THAN:
            return t < 0;

          case Fn.LESS_THAN_OR_EQUAL:
            return t <= 0;

          case Fn.EQUAL:
            return 0 === t;

          case Fn.GREATER_THAN:
            return t > 0;

          case Fn.GREATER_THAN_OR_EQUAL:
            return t >= 0;

          default:
            return S$1("Unknown FieldFilter operator: " + this.op);
        }
    }, n.prototype.ri = function() {
        return [ Fn.LESS_THAN, Fn.LESS_THAN_OR_EQUAL, Fn.GREATER_THAN, Fn.GREATER_THAN_OR_EQUAL ].indexOf(this.op) >= 0;
    }, n.prototype.canonicalId = function() {
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return this.field.nt() + this.op.toString() + this.value.toString();
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && (this.op.isEqual(t.op) && this.field.isEqual(t.field) && this.value.isEqual(t.value));
    }, n.prototype.toString = function() {
        return this.field.nt() + " " + this.op + " " + this.value.value();
    }, n;
}(On), xn = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends(n, t), n.prototype.matches = function(t) {
        var n = this.value, i = At.G(t.key, n.key);
        return this.Ti(i);
    }, n;
}(Un), jn = /** @class */ function(t) {
    function n(n, i) {
        var e = t.call(this, n, Fn.IN, i) || this;
        return e.value = i, e;
    }
    return __extends(n, t), n.prototype.matches = function(t) {
        return this.value.Ht.some((function(n) {
            return t.key.isEqual(n.key);
        }));
    }, n;
}(Un), Ln = /** @class */ function(t) {
    function n(n, i) {
        return t.call(this, n, Fn.ARRAY_CONTAINS, i) || this;
    }
    return __extends(n, t), n.prototype.matches = function(t) {
        var n = t.field(this.field);
        return n instanceof pn && n.contains(this.value);
    }, n;
}(Un), Bn = /** @class */ function(t) {
    function n(n, i) {
        var e = t.call(this, n, Fn.IN, i) || this;
        return e.value = i, e;
    }
    return __extends(n, t), n.prototype.matches = function(t) {
        var n = this.value, i = t.field(this.field);
        return null !== i && n.contains(i);
    }, n;
}(Un), Mn = /** @class */ function(t) {
    function n(n, i) {
        var e = t.call(this, n, Fn.ARRAY_CONTAINS_ANY, i) || this;
        return e.value = i, e;
    }
    return __extends(n, t), n.prototype.matches = function(t) {
        var n = this, i = t.field(this.field);
        return i instanceof pn && i.Ht.some((function(t) {
            return n.value.contains(t);
        }));
    }, n;
}(Un), qn = /** @class */ function() {
    function t(t) {
        this.name = t;
    }
    return t.prototype.toString = function() {
        return this.name;
    }, t.ASCENDING = new t("asc"), t.DESCENDING = new t("desc"), t;
}(), Qn = /** @class */ function() {
    function t(t, n) {
        this.position = t, this.before = n;
    }
    return t.prototype.canonicalId = function() {
        for (
        // TODO(b/29183165): Make this collision robust.
        var t = this.before ? "b:" : "a:", n = 0, i = this.position; n < i.length; n++) {
            t += i[n].toString();
        }
        return t;
    }, 
    /**
     * Returns true if a document sorts before a bound using the provided sort
     * order.
     */
    t.prototype.Ii = function(t, n) {
        C$1(this.position.length <= t.length, "Bound has more components than query's orderBy");
        for (var i = 0, e = 0; e < this.position.length; e++) {
            var r = t[e], u = this.position[e];
            if (r.field.ut()) C$1(u instanceof dn, "Bound has a non-key value where the key path is being used."), 
            i = At.G(u.key, n.key); else {
                var s = n.field(r.field);
                C$1(null !== s, "Field should exist since document matched the orderBy already."), 
                i = u.h(s);
            }
            if (r.dir === qn.DESCENDING && (i *= -1), 0 !== i) break;
        }
        return this.before ? i <= 0 : i < 0;
    }, t.prototype.isEqual = function(t) {
        if (null === t) return !1;
        if (this.before !== t.before || this.position.length !== t.position.length) return !1;
        for (var n = 0; n < this.position.length; n++) {
            var i = this.position[n], e = t.position[n];
            if (!i.isEqual(e)) return !1;
        }
        return !0;
    }, t;
}(), Gn = /** @class */ function() {
    function t(t, n) {
        this.field = t, void 0 === n && (n = qn.ASCENDING), this.dir = n, this.Ei = t.ut();
    }
    return t.prototype.compare = function(t, n) {
        var i = this.Ei ? bn.Bn(t, n) : bn.Gn(this.field, t, n);
        switch (this.dir) {
          case qn.ASCENDING:
            return i;

          case qn.DESCENDING:
            return -1 * i;

          default:
            return S$1("Unknown direction: " + this.dir);
        }
    }, t.prototype.canonicalId = function() {
        // TODO(b/29183165): Make this collision robust.
        return this.field.nt() + this.dir.toString();
    }, t.prototype.toString = function() {
        return this.field.nt() + " (" + this.dir + ")";
    }, t.prototype.isEqual = function(t) {
        return this.dir === t.dir && this.field.isEqual(t.field);
    }, t;
}(), Wn = new Gn(Rt.st(), qn.ASCENDING), zn = new Gn(Rt.st(), qn.DESCENDING);

(Vn = kn || (kn = {}))[Vn.Ri = 0] = "__PRIVATE_RemoteStore", Vn[Vn.Ai = 1] = "__PRIVATE_SharedClientState";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */
var Kn, Hn, Jn = /** @class */ function() {
    function t(t) {
        this.Di = t;
    }
    return t.fromBase64String = function(n) {
        return new t(qi.t().atob(n));
    }, t.fromUint8Array = function(n) {
        return new t(Yn(n));
    }, t.prototype.toBase64 = function() {
        return qi.t().btoa(this.Di);
    }, t.prototype.toUint8Array = function() {
        return Xn(this.Di);
    }, t.prototype.Nn = function() {
        return 2 * this.Di.length;
    }, t.prototype.isEqual = function(t) {
        return this.Di === t.Di;
    }, t.Pi = new t(""), t;
}();

/**
 * Helper function to convert an Uint8array to a binary string.
 */ function Yn(t) {
    for (var n = "", i = 0; i < t.length; ++i) n += String.fromCharCode(t[i]);
    return n;
}

/**
 * Helper function to convert a binary string to an Uint8Array.
 */ function Xn(t) {
    for (var n = new Uint8Array(t.length), i = 0; i < t.length; i++) n[i] = t.charCodeAt(i);
    return n;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** An enumeration of the different purposes we have for targets. */
/** A regular, normal query target. */
(Hn = Kn || (Kn = {}))[Hn.Si = 0] = "__PRIVATE_Listen", 
/**
     * The query target was used to refill a query after an existence filter mismatch.
     */
Hn[Hn.Ci = 1] = "__PRIVATE_ExistenceFilterMismatch", 
/** The query target was used to resolve a limbo document. */
Hn[Hn.ki = 2] = "__PRIVATE_LimboResolution";

/**
 * An immutable set of metadata that the local store tracks for each target.
 */
var $n, Zn, ti = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    n, 
    /** The purpose of the target. */
    i, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    e, 
    /** The latest snapshot version seen for this target. */
    r, 
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */
    u, 
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
    s) {
        void 0 === r && (r = _t.MIN), void 0 === u && (u = _t.MIN), void 0 === s && (s = Jn.Pi), 
        this.target = t, this.targetId = n, this.Vi = i, this.sequenceNumber = e, this.Ni = r, 
        this.lastLimboFreeSnapshotVersion = u, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.Oi = function(n) {
        return new t(this.target, this.targetId, this.Vi, n, this.Ni, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.Fi = function(n, i) {
        return new t(this.target, this.targetId, this.Vi, this.sequenceNumber, i, this.lastLimboFreeSnapshotVersion, n);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.Ui = function(n) {
        return new t(this.target, this.targetId, this.Vi, this.sequenceNumber, this.Ni, n, this.resumeToken);
    }, t.prototype.isEqual = function(t) {
        return this.targetId === t.targetId && this.Vi === t.Vi && this.sequenceNumber === t.sequenceNumber && this.Ni.isEqual(t.Ni) && this.lastLimboFreeSnapshotVersion.isEqual(t.lastLimboFreeSnapshotVersion) && this.resumeToken.isEqual(t.resumeToken) && this.target.isEqual(t.target);
    }, t;
}(), ni = /** @class */ function() {
    // TODO(b/33078163): just use simplest form of existence filter for now
    function t(t) {
        this.count = t;
    }
    return t.prototype.isEqual = function(t) {
        return t && t.count === this.count;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function ii(t) {
    switch (t) {
      case L$1.OK:
        return S$1("Treated status OK as error");

      case L$1.CANCELLED:
      case L$1.UNKNOWN:
      case L$1.DEADLINE_EXCEEDED:
      case L$1.RESOURCE_EXHAUSTED:
      case L$1.INTERNAL:
      case L$1.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case L$1.UNAUTHENTICATED:
        return !1;

      case L$1.INVALID_ARGUMENT:
      case L$1.NOT_FOUND:
      case L$1.ALREADY_EXISTS:
      case L$1.PERMISSION_DENIED:
      case L$1.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case L$1.ABORTED:
      case L$1.OUT_OF_RANGE:
      case L$1.UNIMPLEMENTED:
      case L$1.DATA_LOSS:
        return !0;

      default:
        return S$1("Unknown status code: " + t);
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */
function ei(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return D$1("GRPC error has no .code"), L$1.UNKNOWN;
    switch (t) {
      case $n.OK:
        return L$1.OK;

      case $n.CANCELLED:
        return L$1.CANCELLED;

      case $n.UNKNOWN:
        return L$1.UNKNOWN;

      case $n.DEADLINE_EXCEEDED:
        return L$1.DEADLINE_EXCEEDED;

      case $n.RESOURCE_EXHAUSTED:
        return L$1.RESOURCE_EXHAUSTED;

      case $n.INTERNAL:
        return L$1.INTERNAL;

      case $n.UNAVAILABLE:
        return L$1.UNAVAILABLE;

      case $n.UNAUTHENTICATED:
        return L$1.UNAUTHENTICATED;

      case $n.INVALID_ARGUMENT:
        return L$1.INVALID_ARGUMENT;

      case $n.NOT_FOUND:
        return L$1.NOT_FOUND;

      case $n.ALREADY_EXISTS:
        return L$1.ALREADY_EXISTS;

      case $n.PERMISSION_DENIED:
        return L$1.PERMISSION_DENIED;

      case $n.FAILED_PRECONDITION:
        return L$1.FAILED_PRECONDITION;

      case $n.ABORTED:
        return L$1.ABORTED;

      case $n.OUT_OF_RANGE:
        return L$1.OUT_OF_RANGE;

      case $n.UNIMPLEMENTED:
        return L$1.UNIMPLEMENTED;

      case $n.DATA_LOSS:
        return L$1.DATA_LOSS;

      default:
        return S$1("Unknown status code: " + t);
    }
}

/**
 * Maps an RPC code from a Code. This is the reverse operation from
 * mapCodeFromRpcCode and should really only be used in tests.
 */ function ri(t) {
    if (void 0 === t) return $n.OK;
    switch (t) {
      case L$1.OK:
        return $n.OK;

      case L$1.CANCELLED:
        return $n.CANCELLED;

      case L$1.UNKNOWN:
        return $n.UNKNOWN;

      case L$1.DEADLINE_EXCEEDED:
        return $n.DEADLINE_EXCEEDED;

      case L$1.RESOURCE_EXHAUSTED:
        return $n.RESOURCE_EXHAUSTED;

      case L$1.INTERNAL:
        return $n.INTERNAL;

      case L$1.UNAVAILABLE:
        return $n.UNAVAILABLE;

      case L$1.UNAUTHENTICATED:
        return $n.UNAUTHENTICATED;

      case L$1.INVALID_ARGUMENT:
        return $n.INVALID_ARGUMENT;

      case L$1.NOT_FOUND:
        return $n.NOT_FOUND;

      case L$1.ALREADY_EXISTS:
        return $n.ALREADY_EXISTS;

      case L$1.PERMISSION_DENIED:
        return $n.PERMISSION_DENIED;

      case L$1.FAILED_PRECONDITION:
        return $n.FAILED_PRECONDITION;

      case L$1.ABORTED:
        return $n.ABORTED;

      case L$1.OUT_OF_RANGE:
        return $n.OUT_OF_RANGE;

      case L$1.UNIMPLEMENTED:
        return $n.UNIMPLEMENTED;

      case L$1.DATA_LOSS:
        return $n.DATA_LOSS;

      default:
        return S$1("Unknown status code: " + t);
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (Zn = $n || ($n = {}))[Zn.OK = 0] = "OK", Zn[Zn.CANCELLED = 1] = "CANCELLED", 
Zn[Zn.UNKNOWN = 2] = "UNKNOWN", Zn[Zn.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
Zn[Zn.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Zn[Zn.NOT_FOUND = 5] = "NOT_FOUND", 
Zn[Zn.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Zn[Zn.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
Zn[Zn.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Zn[Zn.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
Zn[Zn.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Zn[Zn.ABORTED = 10] = "ABORTED", 
Zn[Zn.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Zn[Zn.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
Zn[Zn.INTERNAL = 13] = "INTERNAL", Zn[Zn.UNAVAILABLE = 14] = "UNAVAILABLE", Zn[Zn.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ui = new Dt(At.G);

function si() {
    return ui;
}

function oi() {
    return si();
}

var hi = new Dt(At.G);

function ci() {
    return hi;
}

var ai = new Dt(At.G);

function fi() {
    return ai;
}

var li = new kt(At.G);

function di() {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    for (var i = li, e = 0, r = t; e < r.length; e++) {
        var u = r[e];
        i = i.add(u);
    }
    return i;
}

var vi = new kt(V$1);

function wi() {
    return vi;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var mi, pi, gi, bi, yi = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.G = t ? function(n, i) {
            return t(n, i) || At.G(n.key, i.key);
        } : function(t, n) {
            return At.G(t.key, n.key);
        }, this.xi = ci(), this.ji = new Dt(this.G);
    }
    /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */    return t.Li = function(n) {
        return new t(n.G);
    }, t.prototype.has = function(t) {
        return null != this.xi.get(t);
    }, t.prototype.get = function(t) {
        return this.xi.get(t);
    }, t.prototype.first = function() {
        return this.ji.vt();
    }, t.prototype.last = function() {
        return this.ji.wt();
    }, t.prototype.J = function() {
        return this.ji.J();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var n = this.xi.get(t);
        return n ? this.ji.indexOf(n) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.ji.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */
    t.prototype.forEach = function(t) {
        this.ji.pt((function(n, i) {
            return t(n), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */
    t.prototype.add = function(t) {
        // First remove the element if we have it.
        var n = this.delete(t.key);
        return n.copy(n.xi.lt(t.key, t), n.ji.lt(t, null));
    }, 
    /** Deletes a document with a given key */
    t.prototype.delete = function(t) {
        var n = this.get(t);
        return n ? this.copy(this.xi.remove(t), this.ji.remove(n)) : this;
    }, t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) return !1;
        if (this.size !== n.size) return !1;
        for (var i = this.ji.bt(), e = n.ji.bt(); i.At(); ) {
            var r = i.Rt().key, u = e.Rt().key;
            if (!r.isEqual(u)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(n) {
            t.push(n.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.copy = function(n, i) {
        var e = new t;
        return e.G = this.G, e.xi = n, e.ji = i, e;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (pi = mi || (mi = {}))[pi.Bi = 0] = "__PRIVATE_Added", pi[pi.Mi = 1] = "__PRIVATE_Removed", 
pi[pi.qi = 2] = "__PRIVATE_Modified", pi[pi.Qi = 3] = "__PRIVATE_Metadata", (bi = gi || (gi = {}))[bi.Gi = 0] = "__PRIVATE_Local", 
bi[bi.Wi = 1] = "__PRIVATE_Synced";

/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */
var _i, Ii, Ti = /** @class */ function() {
    function t() {
        this.zi = new Dt(At.G);
    }
    return t.prototype.track = function(t) {
        var n = t.doc.key, i = this.zi.get(n);
        i ? 
        // Merge the new change with the existing change.
        t.type !== mi.Bi && i.type === mi.Qi ? this.zi = this.zi.lt(n, t) : t.type === mi.Qi && i.type !== mi.Mi ? this.zi = this.zi.lt(n, {
            type: i.type,
            doc: t.doc
        }) : t.type === mi.qi && i.type === mi.qi ? this.zi = this.zi.lt(n, {
            type: mi.qi,
            doc: t.doc
        }) : t.type === mi.qi && i.type === mi.Bi ? this.zi = this.zi.lt(n, {
            type: mi.Bi,
            doc: t.doc
        }) : t.type === mi.Mi && i.type === mi.Bi ? this.zi = this.zi.remove(n) : t.type === mi.Mi && i.type === mi.qi ? this.zi = this.zi.lt(n, {
            type: mi.Mi,
            doc: i.doc
        }) : t.type === mi.Bi && i.type === mi.Mi ? this.zi = this.zi.lt(n, {
            type: mi.qi,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        S$1("unsupported combination of changes: " + JSON.stringify(t) + " after " + JSON.stringify(i)) : this.zi = this.zi.lt(n, t);
    }, t.prototype.Ki = function() {
        var t = [];
        return this.zi.pt((function(n, i) {
            t.push(i);
        })), t;
    }, t;
}(), Ei = /** @class */ function() {
    function t(t, n, i, e, r, u, s, o) {
        this.query = t, this.docs = n, this.Hi = i, this.docChanges = e, this.Ji = r, this.fromCache = u, 
        this.Yi = s, this.Xi = o;
    }
    /** Returns a view snapshot as if all documents in the snapshot were added. */    return t.$i = function(n, i, e, r) {
        var u = [];
        return i.forEach((function(t) {
            u.push({
                type: mi.Bi,
                doc: t
            });
        })), new t(n, i, yi.Li(i), u, e, r, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.Ji.J();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.Yi === t.Yi && this.Ji.isEqual(t.Ji) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.Hi.isEqual(t.Hi))) return !1;
        var n = this.docChanges, i = t.docChanges;
        if (n.length !== i.length) return !1;
        for (var e = 0; e < n.length; e++) if (n[e].type !== i[e].type || !n[e].doc.isEqual(i[e].doc)) return !1;
        return !0;
    }, t;
}(), Ri = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    n, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    i, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    e, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    r) {
        this.Ni = t, this.Zi = n, this.te = i, this.ne = e, this.ie = r;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.ee = function(n, i) {
        var e, r = ((e = {})[n] = Ai.re(n, i), e);
        return new t(_t.MIN, r, wi(), si(), di());
    }, t;
}(), Ai = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    n, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    i, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    e, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    r) {
        this.resumeToken = t, this.ue = n, this.se = i, this.oe = e, this.he = r;
    }
    /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */    return t.re = function(n, i) {
        return new t(Jn.Pi, i, di(), di(), di());
    }, t;
}(), Di = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
n, 
/** The key of the document for this change. */
i, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
e) {
    this.ce = t, this.removedTargetIds = n, this.key = i, this.ae = e;
}, Pi = function(t, n) {
    this.targetId = t, this.fe = n;
};

(Ii = _i || (_i = {}))[Ii.le = 0] = "__PRIVATE_NoChange", Ii[Ii.Bi = 1] = "__PRIVATE_Added", 
Ii[Ii.Mi = 2] = "__PRIVATE_Removed", Ii[Ii.de = 3] = "__PRIVATE_Current", Ii[Ii.ve = 4] = "__PRIVATE_Reset";

var Si = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
n, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
i, 
/** An RPC error indicating why the watch failed. */
e) {
    void 0 === i && (i = Jn.Pi), void 0 === e && (e = null), this.state = t, this.targetIds = n, 
    this.resumeToken = i, this.cause = e;
}, Ci = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.we = 0, 
        /**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */
        this.me = Ni(), 
        /** See public getters for explanations of these fields. */
        this.pe = Jn.Pi, this.ge = !1, 
        /**
         * Whether this target state should be included in the next snapshot. We
         * initialize to true so that newly-added targets are included in the next
         * RemoteEvent.
         */
        this.be = !0;
    }
    return Object.defineProperty(t.prototype, "ue", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.ge;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */
        get: function() {
            return this.pe;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ye", {
        /** Whether this target has pending target adds or target removes. */
        get: function() {
            return 0 !== this.we;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_e", {
        /** Whether we have modified any state that should trigger a snapshot. */
        get: function() {
            return this.be;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.Ie = function(t) {
        t.Nn() > 0 && (this.be = !0, this.pe = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.Te = function() {
        var t = di(), n = di(), i = di();
        return this.me.forEach((function(e, r) {
            switch (r) {
              case mi.Bi:
                t = t.add(e);
                break;

              case mi.qi:
                n = n.add(e);
                break;

              case mi.Mi:
                i = i.add(e);
                break;

              default:
                S$1("Encountered invalid change type: " + r);
            }
        })), new Ai(this.pe, this.ge, t, n, i);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.Ee = function() {
        this.be = !1, this.me = Ni();
    }, t.prototype.Re = function(t, n) {
        this.be = !0, this.me = this.me.lt(t, n);
    }, t.prototype.Ae = function(t) {
        this.be = !0, this.me = this.me.remove(t);
    }, t.prototype.De = function() {
        this.we += 1;
    }, t.prototype.Pe = function() {
        this.we -= 1;
    }, t.prototype.Se = function() {
        this.be = !0, this.ge = !0;
    }, t;
}(), ki = /** @class */ function() {
    function t(t) {
        this.Ce = t, 
        /** The internal state of all tracked targets. */
        this.ke = {}, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.Ve = si(), 
        /** A mapping of document keys to their set of target IDs. */
        this.Ne = Vi(), 
        /**
         * A list of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */
        this.Oe = new kt(V$1);
    }
    /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */    return t.prototype.Fe = function(t) {
        for (var n = 0, i = t.ce; n < i.length; n++) {
            var e = i[n];
            t.ae instanceof bn ? this.Ue(e, t.ae) : t.ae instanceof yn && this.xe(e, t.key, t.ae);
        }
        for (var r = 0, u = t.removedTargetIds; r < u.length; r++) {
            e = u[r];
            this.xe(e, t.key, t.ae);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */
    t.prototype.je = function(t) {
        var n = this;
        this.Le(t, (function(i) {
            var e = n.Be(i);
            switch (t.state) {
              case _i.le:
                n.Me(i) && e.Ie(t.resumeToken);
                break;

              case _i.Bi:
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                e.Pe(), e.ye || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                e.Ee(), e.Ie(t.resumeToken);
                break;

              case _i.Mi:
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                e.Pe(), e.ye || n.removeTarget(i), C$1(!t.cause, "WatchChangeAggregator does not handle errored targets");
                break;

              case _i.de:
                n.Me(i) && (e.Se(), e.Ie(t.resumeToken));
                break;

              case _i.ve:
                n.Me(i) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                n.qe(i), e.Ie(t.resumeToken));
                break;

              default:
                S$1("Unknown target watch change state: " + t.state);
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.Le = function(t, n) {
        t.targetIds.length > 0 ? t.targetIds.forEach(n) : J$1(this.ke, n);
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.Qe = function(t) {
        var n = t.targetId, i = t.fe.count, e = this.Ge(n);
        if (e) {
            var r = e.target;
            if (r.zn()) if (0 === i) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var u = new At(r.path);
                this.xe(n, u, new yn(u, _t.B()));
            } else C$1(1 === i, "Single document existence filter with count: " + i); else this.We(n) !== i && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.qe(n), this.Oe = this.Oe.add(n));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.ze = function(t) {
        var n = this, i = {};
        J$1(this.ke, (function(e, r) {
            var u = n.Ge(e);
            if (u) {
                if (r.ue && u.target.zn()) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    //
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new At(u.target.path);
                    null !== n.Ve.get(s) || n.Ke(e, s) || n.xe(e, s, new yn(s, t));
                }
                r._e && (i[e] = r.Te(), r.Ee());
            }
        }));
        var e = di();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        //
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.Ne.forEach((function(t, i) {
            var r = !0;
            i.Bt((function(t) {
                var i = n.Ge(t);
                return !i || i.Vi === Kn.ki || (r = !1, !1);
            })), r && (e = e.add(t));
        }));
        var r = new Ri(t, i, this.Oe, this.Ve, e);
        return this.Ve = si(), this.Ne = Vi(), this.Oe = new kt(V$1), r;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.Ue = function(t, n) {
        if (this.Me(t)) {
            var i = this.Ke(t, n.key) ? mi.qi : mi.Bi;
            this.Be(t).Re(n.key, i), this.Ve = this.Ve.lt(n.key, n), this.Ne = this.Ne.lt(n.key, this.He(n.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.xe = function(t, n, i) {
        if (this.Me(t)) {
            var e = this.Be(t);
            this.Ke(t, n) ? e.Re(n, mi.Mi) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            e.Ae(n), this.Ne = this.Ne.lt(n, this.He(n).delete(t)), i && (this.Ve = this.Ve.lt(n, i));
        }
    }, t.prototype.removeTarget = function(t) {
        delete this.ke[t];
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.We = function(t) {
        var n = this.Be(t).Te();
        return this.Ce.Je(t).size + n.se.size - n.he.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.De = function(t) {
        this.Be(t).De();
    }, t.prototype.Be = function(t) {
        return this.ke[t] || (this.ke[t] = new Ci), this.ke[t];
    }, t.prototype.He = function(t) {
        var n = this.Ne.get(t);
        return n || (n = new kt(V$1), this.Ne = this.Ne.lt(t, n)), n;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.Me = function(t) {
        var n = null !== this.Ge(t);
        return n || A$1("WatchChangeAggregator", "Detected inactive target", t), n;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.Ge = function(t) {
        var n = this.ke[t];
        return n && n.ye ? null : this.Ce.Ye(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.qe = function(t) {
        var n = this;
        C$1(!this.ke[t].ye, "Should only reset active targets"), this.ke[t] = new Ci, this.Ce.Je(t).forEach((function(i) {
            n.xe(t, i, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.Ke = function(t, n) {
        return this.Ce.Je(t).has(n);
    }, t;
}();

/** Tracks the internal state of a Watch target. */ function Vi() {
    return new Dt(At.G);
}

function Ni() {
    return new Dt(At.G);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Oi, Fi, Ui = ((Oi = {})[qn.ASCENDING.name] = "ASCENDING", Oi[qn.DESCENDING.name] = "DESCENDING", 
Oi), xi = ((Fi = {})[Fn.LESS_THAN.name] = "LESS_THAN", Fi[Fn.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL", 
Fi[Fn.GREATER_THAN.name] = "GREATER_THAN", Fi[Fn.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL", 
Fi[Fn.EQUAL.name] = "EQUAL", Fi[Fn.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS", Fi[Fn.IN.name] = "IN", 
Fi[Fn.ARRAY_CONTAINS_ANY.name] = "ARRAY_CONTAINS_ANY", Fi), ji = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

function Li(t, n) {
    C$1(!An(t), n + " is missing");
}

function Bi(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : S$1("can't parse " + t);
}

/**
 * Generates JsonObject values for the Datastore API suitable for sending to
 * either GRPC stub methods or via the JSON/HTTP REST API.
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */ var Mi = /** @class */ function() {
    function t(t, n) {
        this.s = t, this.options = n;
    }
    return t.prototype.Xe = function(t) {
        var n = void 0 === t.code ? L$1.UNKNOWN : ei(t.code);
        return new B$1(n, t.message || "");
    }, 
    /**
     * Returns a value for a number (or null) that's appropriate to put into
     * a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "number" because that's what
     * our generated proto interfaces say Int32Value must be. But GRPC actually
     * expects a { value: <number> } struct.
     */
    t.prototype.$e = function(t) {
        return this.options.Ze || An(t) ? t : {
            value: t
        };
    }, 
    /**
     * Returns a number (or null) from a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as accepting "number" because that's what
     * our generated proto interfaces say Int32Value must be, but it actually
     * accepts { value: number } to match our serialization in toInt32Value().
     */
    t.prototype.tr = function(t) {
        var n;
        return An(
        // Use any because we need to match generated Proto types.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        n = "object" == typeof t ? t.value : t) ? null : n;
    }, 
    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "string" because that's what
     * our generated proto interfaces say dates must be. But it's easier and safer
     * to actually return a Timestamp proto.
     */
    t.prototype.q = function(t) {
        return this.options.Ze ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : {
            seconds: "" + t.seconds,
            nanos: t.nanoseconds
        };
    }, t.prototype.L = function(t) {
        // The json interface (for the browser) will return an iso timestamp string,
        // while the proto js library (for node) will return a
        // google.protobuf.Timestamp instance.
        if ("string" == typeof t) 
        // TODO(b/37282237): Use strings for Proto3 timestamps
        // assert(this.options.useProto3Json,
        //   'The timestamp string format requires Proto3.');
        return this.nr(t);
        C$1(!!t, "Cannot deserialize null or undefined timestamp.");
        // TODO(b/37282237): Use strings for Proto3 timestamps
        // assert(!this.options.useProto3Json,
        //   'The timestamp instance format requires Proto JS.');
        var n = Bi(t.seconds || "0"), i = t.nanos || 0;
        return new yt(n, i);
    }, t.prototype.nr = function(t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var n = 0, i = ji.exec(t);
        if (C$1(!!i, "invalid timestamp: " + t), i[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var e = i[1];
            e = (e + "000000000").substr(0, 9), n = Number(e);
        }
        // Parse the date to get the seconds.
                var r = new Date(t), u = Math.floor(r.getTime() / 1e3);
        return new yt(u, n);
    }, 
    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "string" because that's what
     * our generated proto interfaces say bytes must be. But it should return
     * an Uint8Array in Node.
     *
     * Visible for testing.
     */
    t.prototype.ir = function(t) {
        return this.options.Ze ? t.toBase64() : t.toUint8Array();
    }, 
    /**
     * Returns a ByteString based on the proto string value.
     */
    t.prototype.er = function(t) {
        return this.options.Ze ? (C$1(void 0 === t || "string" == typeof t, "value must be undefined or a string when using proto3 Json"), 
        Jn.fromBase64String(t || "")) : (C$1(void 0 === t || t instanceof Uint8Array, "value must be undefined or Uint8Array"), 
        Jn.fromUint8Array(t || new Uint8Array));
    }, 
    /**
     * Parse the blob from the protos into the internal Blob class. Note that the
     * typings assume all blobs are strings, but they are actually Uint8Arrays
     * on Node.
     */
    t.prototype.rr = function(t) {
        return "string" == typeof t ? (C$1(this.options.Ze, "Expected bytes to be passed in as Uint8Array, but got a string instead."), 
        Hi.fromBase64String(t)) : (C$1(!this.options.Ze, "Expected bytes to be passed in as Uint8Array, but got a string instead."), 
        Hi.fromUint8Array(t));
    }, t.prototype.toVersion = function(t) {
        return this.q(t.q());
    }, t.prototype.fromVersion = function(t) {
        return C$1(!!t, "Trying to deserialize version that isn't set"), _t.L(this.L(t));
    }, t.prototype.ur = function(t, n) {
        return this.sr(t).child("documents").child(n).nt();
    }, t.prototype.or = function(t) {
        var n = Tt.it(t);
        return C$1(this.hr(n), "Tried to deserialize invalid key " + n.toString()), n;
    }, t.prototype.cr = function(t) {
        return this.ur(this.s, t.path);
    }, t.prototype.ar = function(t) {
        var n = this.or(t);
        return C$1(n.get(1) === this.s.projectId, "Tried to deserialize key from different project: " + n.get(1) + " vs " + this.s.projectId), 
        C$1(!n.get(3) && !this.s.database || n.get(3) === this.s.database, "Tried to deserialize key from different database: " + n.get(3) + " vs " + this.s.database), 
        new At(this.lr(n));
    }, t.prototype.dr = function(t) {
        return this.ur(this.s, t);
    }, t.prototype.vr = function(t) {
        var n = this.or(t);
        // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.
                return 4 === n.length ? Tt.et : this.lr(n);
    }, Object.defineProperty(t.prototype, "wr", {
        get: function() {
            return new Tt([ "projects", this.s.projectId, "databases", this.s.database ]).nt();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.sr = function(t) {
        return new Tt([ "projects", t.projectId, "databases", t.database ]);
    }, t.prototype.lr = function(t) {
        return C$1(t.length > 4 && "documents" === t.get(4), "tried to deserialize invalid key " + t.toString()), 
        t.K(5);
    }, t.prototype.hr = function(t) {
        // Resource names have at least 4 components (project ID, database ID)
        return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
    }, t.prototype.mr = function(t) {
        if (t instanceof en) return {
            nullValue: "NULL_VALUE"
        };
        if (t instanceof rn) return {
            booleanValue: t.value()
        };
        if (t instanceof on) return {
            integerValue: "" + t.value()
        };
        if (t instanceof hn) {
            var n = t.value();
            if (this.options.Ze) {
                // Proto 3 let's us encode NaN and Infinity as string values as
                // expected by the backend. This is currently not checked by our unit
                // tests because they rely on protobuf.js.
                if (isNaN(n)) return {
                    doubleValue: "NaN"
                };
                if (n === 1 / 0) return {
                    doubleValue: "Infinity"
                };
                if (n === -1 / 0) return {
                    doubleValue: "-Infinity"
                };
            }
            return {
                doubleValue: t.value()
            };
        }
        return t instanceof cn ? {
            stringValue: t.value()
        } : t instanceof wn ? {
            mapValue: this.pr(t)
        } : t instanceof pn ? {
            arrayValue: this.gr(t)
        } : t instanceof an ? {
            timestampValue: this.q(t.Ht)
        } : t instanceof vn ? {
            geoPointValue: {
                latitude: t.value().latitude,
                longitude: t.value().longitude
            }
        } : t instanceof ln ? {
            bytesValue: this.ir(t.value())
        } : t instanceof dn ? {
            referenceValue: this.ur(t.s, t.key.path)
        } : S$1("Unknown FieldValue " + JSON.stringify(t));
    }, t.prototype.br = function(t) {
        var n = this;
        if ("nullValue" in t) return en.On;
        if ("booleanValue" in t) return rn.of(t.booleanValue);
        if ("integerValue" in t) return new on(Bi(t.integerValue));
        if ("doubleValue" in t) {
            if (this.options.Ze) {
                // Proto 3 uses the string values 'NaN' and 'Infinity'.
                if ("NaN" === t.doubleValue) return hn.xn;
                if ("Infinity" === t.doubleValue) return hn.POSITIVE_INFINITY;
                if ("-Infinity" === t.doubleValue) return hn.NEGATIVE_INFINITY;
            }
            return new hn(t.doubleValue);
        }
        if ("stringValue" in t) return new cn(t.stringValue);
        if ("mapValue" in t) return this.yr(t.mapValue.fields || {});
        if ("arrayValue" in t) {
            // "values" is not present if the array is empty
            Li(t.arrayValue, "arrayValue");
            var i = t.arrayValue.values || [];
            return new pn(i.map((function(t) {
                return n.br(t);
            })));
        }
        if ("timestampValue" in t) return Li(t.timestampValue, "timestampValue"), new an(this.L(t.timestampValue));
        if ("geoPointValue" in t) {
            Li(t.geoPointValue, "geoPointValue");
            var e = t.geoPointValue.latitude || 0, r = t.geoPointValue.longitude || 0;
            return new vn(new gt(e, r));
        }
        if ("bytesValue" in t) {
            Li(t.bytesValue, "bytesValue");
            var u = this.rr(t.bytesValue);
            return new ln(u);
        }
        if ("referenceValue" in t) {
            Li(t.referenceValue, "referenceValue");
            var s = this.or(t.referenceValue), o = new x$1(s.get(1), s.get(3)), h = new At(this.lr(s));
            return new dn(o, h);
        }
        return S$1("Unknown Value proto " + JSON.stringify(t));
    }, 
    /** Creates an api.Document from key and fields (but no create/update time) */
    t.prototype._r = function(t, n) {
        return {
            name: this.cr(t),
            fields: this.Ir(n)
        };
    }, t.prototype.Tr = function(t) {
        return C$1(!t.un, "Can't serialize documents with mutations."), {
            name: this.cr(t.key),
            fields: this.Ir(t.data()),
            updateTime: this.q(t.version.q())
        };
    }, t.prototype.Er = function(t, n) {
        var i = this, e = this.ar(t.name), r = this.fromVersion(t.updateTime);
        return new bn(e, r, {
            hasCommittedMutations: !!n
        }, void 0, t, (function(t) {
            return i.br(t);
        }));
    }, t.prototype.Ir = function(t) {
        var n = this, i = {};
        return t.forEach((function(t, e) {
            i[t] = n.mr(e);
        })), i;
    }, t.prototype.yr = function(t) {
        var n = this, i = t, e = wn.mn();
        // Proto map<string, Value> gets mapped to Object, so cast it.
                return Y$1(i, (function(t, i) {
            e.set(new Rt([ t ]), n.br(i));
        })), e.fn();
    }, t.prototype.pr = function(t) {
        return {
            fields: this.Ir(t)
        };
    }, t.prototype.gr = function(t) {
        var n = this, i = [];
        return t.forEach((function(t) {
            i.push(n.mr(t));
        })), {
            values: i
        };
    }, t.prototype.Rr = function(t) {
        var n = this;
        C$1(!!t.found, "Tried to deserialize a found document from a missing document."), 
        Li(t.found.name, "doc.found.name"), Li(t.found.updateTime, "doc.found.updateTime");
        var i = this.ar(t.found.name), e = this.fromVersion(t.found.updateTime);
        return new bn(i, e, {}, void 0, t.found, (function(t) {
            return n.br(t);
        }));
    }, t.prototype.Ar = function(t) {
        C$1(!!t.missing, "Tried to deserialize a missing document from a found document."), 
        C$1(!!t.readTime, "Tried to deserialize a missing document without a read time.");
        var n = this.ar(t.missing), i = this.fromVersion(t.readTime);
        return new yn(n, i);
    }, t.prototype.Dr = function(t) {
        return "found" in t ? this.Rr(t) : "missing" in t ? this.Ar(t) : S$1("invalid batch get response: " + JSON.stringify(t));
    }, t.prototype.Pr = function(t) {
        switch (t) {
          case _i.Bi:
            return "ADD";

          case _i.de:
            return "CURRENT";

          case _i.le:
            return "NO_CHANGE";

          case _i.Mi:
            return "REMOVE";

          case _i.ve:
            return "RESET";

          default:
            return S$1("Unknown WatchTargetChangeState: " + t);
        }
    }, t.prototype.Sr = function(t) {
        if (t instanceof Pi) return {
            filter: {
                count: t.fe.count,
                targetId: t.targetId
            }
        };
        if (t instanceof Di) {
            if (t.ae instanceof bn) {
                var n = t.ae;
                return {
                    documentChange: {
                        document: {
                            name: this.cr(n.key),
                            fields: this.Ir(n.data()),
                            updateTime: this.toVersion(n.version)
                        },
                        targetIds: t.ce,
                        removedTargetIds: t.removedTargetIds
                    }
                };
            }
            if (t.ae instanceof yn) {
                n = t.ae;
                return {
                    documentDelete: {
                        document: this.cr(n.key),
                        readTime: this.toVersion(n.version),
                        removedTargetIds: t.removedTargetIds
                    }
                };
            }
            if (null === t.ae) return {
                documentRemove: {
                    document: this.cr(t.key),
                    removedTargetIds: t.removedTargetIds
                }
            };
        }
        if (t instanceof Si) {
            var i = void 0;
            return t.cause && (i = {
                code: ri(t.cause.code),
                message: t.cause.message
            }), {
                targetChange: {
                    targetChangeType: this.Pr(t.state),
                    targetIds: t.targetIds,
                    resumeToken: this.ir(t.resumeToken),
                    cause: i
                }
            };
        }
        return S$1("Unrecognized watch change: " + JSON.stringify(t));
    }, t.prototype.Cr = function(t) {
        var n, i = this;
        if ("targetChange" in t) {
            Li(t.targetChange, "targetChange");
            // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
            // if unset
            var e = this.kr(t.targetChange.targetChangeType || "NO_CHANGE"), r = t.targetChange.targetIds || [], u = this.er(t.targetChange.resumeToken), s = t.targetChange.cause, o = s && this.Xe(s);
            n = new Si(e, r, u, o || null);
        } else if ("documentChange" in t) {
            Li(t.documentChange, "documentChange");
            var h = t.documentChange;
            Li(h.document, "documentChange.name"), Li(h.document.name, "documentChange.document.name"), 
            Li(h.document.updateTime, "documentChange.document.updateTime");
            var c = this.ar(h.document.name), a = this.fromVersion(h.document.updateTime), f = new bn(c, a, {}, void 0, h.document, (function(t) {
                return i.br(t);
            })), l = h.targetIds || [], d = h.removedTargetIds || [];
            n = new Di(l, d, f.key, f);
        } else if ("documentDelete" in t) {
            Li(t.documentDelete, "documentDelete");
            var v = t.documentDelete;
            Li(v.document, "documentDelete.document");
            c = this.ar(v.document), a = v.readTime ? this.fromVersion(v.readTime) : _t.B(), 
            f = new yn(c, a), d = v.removedTargetIds || [];
            n = new Di([], d, f.key, f);
        } else if ("documentRemove" in t) {
            Li(t.documentRemove, "documentRemove");
            var w = t.documentRemove;
            Li(w.document, "documentRemove");
            c = this.ar(w.document), d = w.removedTargetIds || [];
            n = new Di([], d, c, null);
        } else {
            if (!("filter" in t)) return S$1("Unknown change type " + JSON.stringify(t));
            // TODO(dimond): implement existence filter parsing with strategy.
            Li(t.filter, "filter");
            var m = t.filter;
            Li(m.targetId, "filter.targetId");
            var p = m.count || 0, g = new ni(p), b = m.targetId;
            n = new Pi(b, g);
        }
        return n;
    }, t.prototype.kr = function(t) {
        return "NO_CHANGE" === t ? _i.le : "ADD" === t ? _i.Bi : "REMOVE" === t ? _i.Mi : "CURRENT" === t ? _i.de : "RESET" === t ? _i.ve : S$1("Got unexpected TargetChange.state: " + t);
    }, t.prototype.Vr = function(t) {
        // We have only reached a consistent snapshot for the entire stream if there
        // is a read_time set and it applies to all targets (i.e. the list of
        // targets is empty). The backend is guaranteed to send such responses.
        if (!("targetChange" in t)) return _t.MIN;
        var n = t.targetChange;
        return n.targetIds && n.targetIds.length ? _t.MIN : n.readTime ? this.fromVersion(n.readTime) : _t.MIN;
    }, t.prototype.Nr = function(t) {
        var n, i = this;
        if (t instanceof Jt) n = {
            update: this._r(t.key, t.value)
        }; else if (t instanceof $t) n = {
            delete: this.cr(t.key)
        }; else if (t instanceof Yt) n = {
            update: this._r(t.key, t.data),
            updateMask: this.Or(t.on)
        }; else if (t instanceof Xt) n = {
            transform: {
                document: this.cr(t.key),
                fieldTransforms: t.fieldTransforms.map((function(t) {
                    return i.Fr(t);
                }))
            }
        }; else {
            if (!(t instanceof Zt)) return S$1("Unknown mutation type " + t.type);
            n = {
                verify: this.cr(t.key)
            };
        }
        return t.rn.tn || (n.currentDocument = this.Ur(t.rn)), n;
    }, t.prototype.xr = function(t) {
        var n = this, i = t.currentDocument ? this.jr(t.currentDocument) : Kt.NONE;
        if (t.update) {
            Li(t.update.name, "name");
            var e = this.ar(t.update.name), r = this.yr(t.update.fields || {});
            if (t.updateMask) {
                var u = this.Lr(t.updateMask);
                return new Yt(e, r, u, i);
            }
            return new Jt(e, r, i);
        }
        if (t.delete) {
            e = this.ar(t.delete);
            return new $t(e, i);
        }
        if (t.transform) {
            e = this.ar(t.transform.document);
            var s = t.transform.fieldTransforms.map((function(t) {
                return n.Br(t);
            }));
            return C$1(!0 === i.exists, 'Transforms only support precondition "exists == true"'), 
            new Xt(e, s);
        }
        if (t.verify) {
            e = this.ar(t.verify);
            return new Zt(e, i);
        }
        return S$1("unknown mutation proto: " + JSON.stringify(t));
    }, t.prototype.Ur = function(t) {
        return C$1(!t.tn, "Can't serialize an empty precondition"), void 0 !== t.updateTime ? {
            updateTime: this.toVersion(t.updateTime)
        } : void 0 !== t.exists ? {
            exists: t.exists
        } : S$1("Unknown precondition");
    }, t.prototype.jr = function(t) {
        return void 0 !== t.updateTime ? Kt.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? Kt.exists(t.exists) : Kt.NONE;
    }, t.prototype.Mr = function(t, n) {
        var i = this, e = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(n);
        // NOTE: Deletes don't have an updateTime.
                e.isEqual(_t.MIN) && (
        // The Firestore Emulator currently returns an update time of 0 for
        // deletes of non-existing documents (rather than null). This breaks the
        // test "get deleted doc while offline with source=cache" as NoDocuments
        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
        // TODO(#2149): Remove this when Emulator is fixed
        e = this.fromVersion(n));
        var r = null;
        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults.map((function(t) {
            return i.br(t);
        }))), new qt(e, r);
    }, t.prototype.qr = function(t, n) {
        var i = this;
        return t && t.length > 0 ? (C$1(void 0 !== n, "Received a write result without a commit time"), 
        t.map((function(t) {
            return i.Mr(t, n);
        }))) : [];
    }, t.prototype.Fr = function(t) {
        var n = this, i = t.transform;
        if (i instanceof Nt) return {
            fieldPath: t.field.nt(),
            setToServerValue: "REQUEST_TIME"
        };
        if (i instanceof Ot) return {
            fieldPath: t.field.nt(),
            appendMissingElements: {
                values: i.elements.map((function(t) {
                    return n.mr(t);
                }))
            }
        };
        if (i instanceof Ft) return {
            fieldPath: t.field.nt(),
            removeAllFromArray: {
                values: i.elements.map((function(t) {
                    return n.mr(t);
                }))
            }
        };
        if (i instanceof Ut) return {
            fieldPath: t.field.nt(),
            increment: this.mr(i.Kt)
        };
        throw S$1("Unknown transform: " + t.transform);
    }, t.prototype.Br = function(t) {
        var n = this, i = null;
        if ("setToServerValue" in t) C$1("REQUEST_TIME" === t.setToServerValue, "Unknown server value transform proto: " + JSON.stringify(t)), 
        i = Nt.instance; else if ("appendMissingElements" in t) {
            var e = t.appendMissingElements.values || [];
            i = new Ot(e.map((function(t) {
                return n.br(t);
            })));
        } else if ("removeAllFromArray" in t) {
            e = t.removeAllFromArray.values || [];
            i = new Ft(e.map((function(t) {
                return n.br(t);
            })));
        } else if ("increment" in t) {
            var r = this.br(t.increment);
            C$1(r instanceof un, "NUMERIC_ADD transform requires a NumberValue"), i = new Ut(r);
        } else S$1("Unknown transform proto: " + JSON.stringify(t));
        var u = Rt.ot(t.fieldPath);
        return new Mt(u, i);
    }, t.prototype.Qr = function(t) {
        return {
            documents: [ this.dr(t.path) ]
        };
    }, t.prototype.Gr = function(t) {
        var n = t.documents.length;
        C$1(1 === n, "DocumentsTarget contained other than 1 document: " + n);
        var i = t.documents[0];
        return Nn.ti(this.vr(i)).li();
    }, t.prototype.Wr = function(t) {
        // Dissect the path into parent, collectionId, and optional key filter.
        var n = {
            structuredQuery: {}
        }, i = t.path;
        null !== t.collectionGroup ? (C$1(i.length % 2 == 0, "Collection Group queries should be within a document path or root."), 
        n.parent = this.dr(i), n.structuredQuery.from = [ {
            collectionId: t.collectionGroup,
            allDescendants: !0
        } ]) : (C$1(i.length % 2 != 0, "Document queries with filters are not supported."), 
        n.parent = this.dr(i.H()), n.structuredQuery.from = [ {
            collectionId: i.X()
        } ]);
        var e = this.zr(t.filters);
        e && (n.structuredQuery.where = e);
        var r = this.Kr(t.orderBy);
        r && (n.structuredQuery.orderBy = r);
        var u = this.$e(t.limit);
        return null !== u && (n.structuredQuery.limit = u), t.startAt && (n.structuredQuery.startAt = this.Hr(t.startAt)), 
        t.endAt && (n.structuredQuery.endAt = this.Hr(t.endAt)), n;
    }, t.prototype.Jr = function(t) {
        var n = this.vr(t.parent), i = t.structuredQuery, e = i.from ? i.from.length : 0, r = null;
        if (e > 0) {
            C$1(1 === e, "StructuredQuery.from with more than one collection is not supported.");
            var u = i.from[0];
            u.allDescendants ? r = u.collectionId : n = n.child(u.collectionId);
        }
        var s = [];
        i.where && (s = this.Yr(i.where));
        var o = [];
        i.orderBy && (o = this.Xr(i.orderBy));
        var h = null;
        i.limit && (h = this.tr(i.limit));
        var c = null;
        i.startAt && (c = this.$r(i.startAt));
        var a = null;
        return i.endAt && (a = this.$r(i.endAt)), new Nn(n, r, o, s, h, Pn.Kn, c, a).li();
    }, t.prototype.Zr = function(t) {
        var n = this.tu(t.Vi);
        return null == n ? null : {
            "goog-listen-tags": n
        };
    }, t.prototype.tu = function(t) {
        switch (t) {
          case Kn.Si:
            return null;

          case Kn.Ci:
            return "existence-filter-mismatch";

          case Kn.ki:
            return "limbo-document";

          default:
            return S$1("Unrecognized query purpose: " + t);
        }
    }, t.prototype.li = function(t) {
        var n, i = t.target;
        return (n = i.zn() ? {
            documents: this.Qr(i)
        } : {
            query: this.Wr(i)
        }).targetId = t.targetId, t.resumeToken.Nn() > 0 && (n.resumeToken = this.ir(t.resumeToken)), 
        n;
    }, t.prototype.zr = function(t) {
        var n = this;
        if (0 !== t.length) {
            var i = t.map((function(t) {
                return t instanceof Un ? n.nu(t) : S$1("Unrecognized filter: " + JSON.stringify(t));
            }));
            return 1 === i.length ? i[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: i
                }
            };
        }
    }, t.prototype.Yr = function(t) {
        var n = this;
        return t ? void 0 !== t.unaryFilter ? [ this.iu(t) ] : void 0 !== t.fieldFilter ? [ this.eu(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t) {
            return n.Yr(t);
        })).reduce((function(t, n) {
            return t.concat(n);
        })) : S$1("Unknown filter: " + JSON.stringify(t)) : [];
    }, t.prototype.Kr = function(t) {
        var n = this;
        if (0 !== t.length) return t.map((function(t) {
            return n.ru(t);
        }));
    }, t.prototype.Xr = function(t) {
        var n = this;
        return t.map((function(t) {
            return n.uu(t);
        }));
    }, t.prototype.Hr = function(t) {
        var n = this;
        return {
            before: t.before,
            values: t.position.map((function(t) {
                return n.mr(t);
            }))
        };
    }, t.prototype.$r = function(t) {
        var n = this, i = !!t.before, e = t.values.map((function(t) {
            return n.br(t);
        }));
        return new Qn(e, i);
    }, 
    // visible for testing
    t.prototype.su = function(t) {
        return Ui[t.name];
    }, 
    // visible for testing
    t.prototype.ou = function(t) {
        switch (t) {
          case "ASCENDING":
            return qn.ASCENDING;

          case "DESCENDING":
            return qn.DESCENDING;

          default:
            return;
        }
    }, 
    // visible for testing
    t.prototype.hu = function(t) {
        return xi[t.name];
    }, t.prototype.cu = function(t) {
        switch (t) {
          case "EQUAL":
            return Fn.EQUAL;

          case "GREATER_THAN":
            return Fn.GREATER_THAN;

          case "GREATER_THAN_OR_EQUAL":
            return Fn.GREATER_THAN_OR_EQUAL;

          case "LESS_THAN":
            return Fn.LESS_THAN;

          case "LESS_THAN_OR_EQUAL":
            return Fn.LESS_THAN_OR_EQUAL;

          case "ARRAY_CONTAINS":
            return Fn.ARRAY_CONTAINS;

          case "IN":
            return Fn.IN;

          case "ARRAY_CONTAINS_ANY":
            return Fn.ARRAY_CONTAINS_ANY;

          case "OPERATOR_UNSPECIFIED":
            return S$1("Unspecified operator");

          default:
            return S$1("Unknown operator");
        }
    }, t.prototype.au = function(t) {
        return {
            fieldPath: t.nt()
        };
    }, t.prototype.fu = function(t) {
        return Rt.ot(t.fieldPath);
    }, 
    // visible for testing
    t.prototype.ru = function(t) {
        return {
            field: this.au(t.field),
            direction: this.su(t.dir)
        };
    }, t.prototype.uu = function(t) {
        return new Gn(this.fu(t.field), this.ou(t.direction));
    }, t.prototype.eu = function(t) {
        return Un.create(this.fu(t.fieldFilter.field), this.cu(t.fieldFilter.op), this.br(t.fieldFilter.value));
    }, 
    // visible for testing
    t.prototype.nu = function(t) {
        if (t.op === Fn.EQUAL) {
            if (t.value.isEqual(hn.xn)) return {
                unaryFilter: {
                    field: this.au(t.field),
                    op: "IS_NAN"
                }
            };
            if (t.value.isEqual(en.On)) return {
                unaryFilter: {
                    field: this.au(t.field),
                    op: "IS_NULL"
                }
            };
        }
        return {
            fieldFilter: {
                field: this.au(t.field),
                op: this.hu(t.op),
                value: this.mr(t.value)
            }
        };
    }, t.prototype.iu = function(t) {
        switch (t.unaryFilter.op) {
          case "IS_NAN":
            var n = this.fu(t.unaryFilter.field);
            return Un.create(n, Fn.EQUAL, hn.xn);

          case "IS_NULL":
            var i = this.fu(t.unaryFilter.field);
            return Un.create(i, Fn.EQUAL, en.On);

          case "OPERATOR_UNSPECIFIED":
            return S$1("Unspecified filter");

          default:
            return S$1("Unknown filter");
        }
    }, t.prototype.Or = function(t) {
        var n = [];
        return t.fields.forEach((function(t) {
            return n.push(t.nt());
        })), {
            fieldPaths: n
        };
    }, t.prototype.Lr = function(t) {
        var n = (t.fieldPaths || []).map((function(t) {
            return Rt.ot(t);
        }));
        return Bt.Yt(n);
    }, t;
}(), qi = /** @class */ function() {
    function t() {}
    return t.lu = function(n) {
        t.platform && S$1("Platform already defined"), t.platform = n;
    }, t.t = function() {
        return t.platform || S$1("Platform not set"), t.platform;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides singleton helpers where setup code can inject a platform at runtime.
 * setPlatform needs to be set before Firestore is used and must be set exactly
 * once.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper function to prevent instantiation through the constructor.
 *
 * This method creates a new constructor that throws when it's invoked.
 * The prototype of that constructor is then set to the prototype of the hidden
 * "class" to expose all the prototype methods and allow for instanceof
 * checks.
 *
 * To also make all the static methods available, all properties of the
 * original constructor are copied to the new constructor.
 */
function Qi(t, n) {
    function i() {
        var t = "This constructor is private.";
        throw n && (t += " ", t += n), new B$1(L$1.INVALID_ARGUMENT, t);
    }
    // Make sure instanceof checks work and all methods are exposed on the public
    // constructor
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return i.prototype = t.prototype, 
    // Copy any static methods/members
    Object.assign(i, t), i;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Helper function to assert Uint8Array is available at runtime. */ function Gi() {
    if ("undefined" == typeof Uint8Array) throw new B$1(L$1.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function Wi() {
    if (!qi.t().du) throw new B$1(L$1.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */ var zi, Ki, Hi = /** @class */ function() {
    function t(t) {
        Wi(), this.Di = t;
    }
    return t.fromBase64String = function(n) {
        Z$1("Blob.fromBase64String", arguments, 1), it("Blob.fromBase64String", "string", 1, n), 
        Wi();
        try {
            var i = qi.t().atob(n);
            return new t(i);
        } catch (t) {
            throw new B$1(L$1.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t);
        }
    }, t.fromUint8Array = function(n) {
        if (Z$1("Blob.fromUint8Array", arguments, 1), Gi(), !(n instanceof Uint8Array)) throw vt("Blob.fromUint8Array", "Uint8Array", 1, n);
        var i = Yn(n);
        return new t(i);
    }, t.prototype.toBase64 = function() {
        return Z$1("Blob.toBase64", arguments, 0), Wi(), qi.t().btoa(this.Di);
    }, t.prototype.toUint8Array = function() {
        Z$1("Blob.toUint8Array", arguments, 0), Gi();
        var t = Xn(this.Di);
        return t;
    }, t.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, t.prototype.isEqual = function(t) {
        return this.Di === t.Di;
    }, t.prototype.Ln = function() {
        // Assume UTF-16 encoding in memory (see StringValue.approximateByteSize())
        return 2 * this.Di.length;
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.U = function(t) {
        return V$1(this.Di, t.Di);
    }, t;
}(), Ji = Qi(Hi, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."), Yi = /** @class */ function() {
    function t(t, n) {
        var i = this;
        this.previousValue = t, n && (n.vu = function(t) {
            return i.wu(t);
        }, this.mu = function(t) {
            return n.pu(t);
        });
    }
    return t.prototype.wu = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.mu && this.mu(t), t;
    }, t.gu = -1, t;
}(), Xi = function() {
    var t = this;
    this.promise = new Promise((function(n, i) {
        t.resolve = n, t.reject = i;
    }));
};

// Public instance that disallows construction at runtime. This constructor is
// used when exporting Blob on firebase.firestore.Blob and will be called Blob
// publicly. Internally we still use Blob which has a type checked private
// constructor. Note that Blob and PublicBlob can be used interchangeably in
// instanceof checks.
// For our internal TypeScript code PublicBlob doesn't exist as a type, and so
// we need to use Blob as type and export it too.
/** All can be used with runDelayedOperationsEarly() to run all timers. */
(Ki = zi || (zi = {})).bu = "all", 
/**
     * The following 4 timers are used in persistent_stream.ts for the listen and
     * write streams. The "Idle" timer is used to close the stream due to
     * inactivity. The "ConnectionBackoff" timer is used to restart a stream once
     * the appropriate backoff delay has elapsed.
     */
Ki.yu = "listen_stream_idle", Ki._u = "listen_stream_connection_backoff", Ki.Iu = "write_stream_idle", 
Ki.Tu = "write_stream_connection_backoff", 
/**
     * A timer used in online_state_tracker.ts to transition from
     * OnlineState.Unknown to Offline after a set timeout, rather than waiting
     * indefinitely for success or failure.
     */
Ki.Eu = "online_state_timeout", 
/**
     * A timer used to update the client metadata in IndexedDb, which is used
     * to determine the primary leaseholder.
     */
Ki.Ru = "client_metadata_refresh", 
/** A timer used to periodically attempt LRU Garbage collection */
Ki.Au = "lru_garbage_collection", 
/**
     * A timer used to retry transactions. Since there can be multiple concurrent
     * transactions, multiple of these may be in the queue at a given time.
     */
Ki.Du = "retry_transaction";

/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 */
var $i = /** @class */ function() {
    function t(t, n, i, e, r) {
        this.Pu = t, this.Su = n, this.Cu = i, this.op = e, this.ku = r, this.Vu = new Xi, 
        this.then = this.Vu.promise.then.bind(this.Vu.promise), this.catch = this.Vu.promise.catch.bind(this.Vu.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.Vu.promise.catch((function(t) {}));
    }
    /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue The queue to schedule the operation on.
     * @param id A Timer ID identifying the type of operation this is.
     * @param delayMs The delay (ms) before the operation should be scheduled.
     * @param op The operation to run.
     * @param removalCallback A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */    return t.Nu = function(n, i, e, r, u) {
        var s = new t(n, i, Date.now() + e, r, u);
        return s.start(e), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var n = this;
        this.Ou = setTimeout((function() {
            return n.Fu();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.Uu = function() {
        return this.Fu();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.Ou && (this.clearTimeout(), this.Vu.reject(new B$1(L$1.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.Fu = function() {
        var t = this;
        this.Pu.xu((function() {
            return null !== t.Ou ? (t.clearTimeout(), t.op().then((function(n) {
                return t.Vu.resolve(n);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.Ou && (this.ku(this), clearTimeout(this.Ou), this.Ou = null);
    }, t;
}(), Zi = /** @class */ function() {
    function t() {
        // The last promise in the queue.
        this.ju = Promise.resolve(), 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Lu = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Bu = [], 
        // visible for testing
        this.Mu = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.qu = !1, 
        // List of TimerIds to fast-forward delays for.
        this.Qu = [];
    }
    return Object.defineProperty(t.prototype, "Gu", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function() {
            return this.Lu;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.xu = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    t.prototype.Wu = function(t) {
        this.zu(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Ku(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue.
     */
    t.prototype.Hu = function(t) {
        return this.zu(), this.Ku(t);
    }, 
    /**
     * Adds a new operation to the queue and initialize the shut down of this queue.
     * Returns a promise that will be resolved when the promise returned by the new
     * operation is (with its value).
     * Once this method is called, the only possible way to request running an operation
     * is through `enqueueAndForgetEvenAfterShutdown`.
     */
    t.prototype.Ju = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.zu(), this.Lu ? [ 3 /*break*/ , 2 ] : (this.Lu = !0, [ 4 /*yield*/ , this.Hu(t) ]);

                  case 1:
                    n.sent(), n.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    t.prototype.enqueue = function(t) {
        return this.zu(), this.Lu ? new Promise((function(t) {})) : this.Ku(t);
    }, t.prototype.Ku = function(t) {
        var n = this, i = this.ju.then((function() {
            return n.qu = !0, t().catch((function(t) {
                n.Mu = t, n.qu = !1;
                var i = t.stack || t.message || "";
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw D$1("INTERNAL UNHANDLED ERROR: ", i), 
                // Escape the promise chain and throw the error globally so that
                // e.g. any global crash reporting library detects and reports it.
                // (but not for simulated errors in our tests since this breaks mocha)
                i.indexOf("Firestore Test Simulated Error") < 0 && setTimeout((function() {
                    throw t;
                }), 0), t;
            })).then((function(t) {
                return n.qu = !1, t;
            }));
        }));
        return this.ju = i, i;
    }, 
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned CancelablePromise can be used to cancel
     * the operation prior to its running.
     */
    t.prototype.Yu = function(t, n, i) {
        var e = this;
        this.zu(), C$1(n >= 0, "Attempted to schedule an operation with a negative delay of " + n), 
        // Fast-forward delays for timerIds that have been overriden.
        this.Qu.indexOf(t) > -1 && (n = 0);
        var r = $i.Nu(this, t, n, i, (function(t) {
            return e.Xu(t);
        }));
        return this.Bu.push(r), r;
    }, t.prototype.zu = function() {
        this.Mu && S$1("AsyncQueue is already failed: " + (this.Mu.stack || this.Mu.message));
    }, 
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    t.prototype.$u = function() {
        C$1(this.qu, "verifyOpInProgress() called when no op in progress on this queue.");
    }, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.Zu = function() {
        // It should still be possible to drain the queue after it is shutting down.
        return this.Hu((function() {
            return Promise.resolve();
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.ts = function(t) {
        for (var n = 0, i = this.Bu; n < i.length; n++) {
            if (i[n].Su === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Throws if no such operation exists. Pass TimerId.All to run
     *  all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.ns = function(t) {
        var n = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.Zu().then((function() {
            C$1(t === zi.bu || n.ts(t), "Attempted to drain to missing operation " + t), 
            // Run ops in the same order they'd run if they ran naturally.
            n.Bu.sort((function(t, n) {
                return t.Cu - n.Cu;
            }));
            for (var i = 0, e = n.Bu; i < e.length; i++) {
                var r = e[i];
                if (r.Uu(), t !== zi.bu && r.Su === t) break;
            }
            return n.Zu();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.es = function(t) {
        this.Qu.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */
    t.prototype.Xu = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var n = this.Bu.indexOf(t);
        C$1(n >= 0, "Delayed operation not found."), this.Bu.splice(n, 1);
    }, t;
}(), te = "", ne = "", ie = "", ee = "";

/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */
function re(t) {
    for (var n = "", i = 0; i < t.length; i++) n.length > 0 && (n = se(n)), n = ue(t.get(i), n);
    return se(n);
}

/** Encodes a single segment of a resource path into the given result */ function ue(t, n) {
    for (var i = n, e = t.length, r = 0; r < e; r++) {
        var u = t.charAt(r);
        switch (u) {
          case "\0":
            i += te + ie;
            break;

          case te:
            i += te + ee;
            break;

          default:
            i += u;
        }
    }
    return i;
}

/** Encodes a path separator into the given result */ function se(t) {
    return t + te + ne;
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function oe(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    var n = t.length;
    if (C$1(n >= 2, "Invalid path " + t), 2 === n) return C$1(t.charAt(0) === te && t.charAt(1) === ne, "Non-empty path " + t + " had length 2"), 
    Tt.et;
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        for (var i = n - 2, e = [], r = "", u = 0; u < n; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var s = t.indexOf(te, u);
        switch ((s < 0 || s > i) && S$1('Invalid encoded resource path: "' + t + '"'), t.charAt(s + 1)) {
          case ne:
            var o = t.substring(u, s), h = void 0;
            0 === r.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            h = o : (h = r += o, r = ""), e.push(h);
            break;

          case ie:
            r += t.substring(u, s), r += "\0";
            break;

          case ee:
            // The escape character can be used in the output to encode itself.
            r += t.substring(u, s + 1);
            break;

          default:
            S$1('Invalid encoded resource path: "' + t + '"');
        }
        u = s + 2;
    }
    return new Tt(e);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var he = /** @class */ function() {
    /**
     * @param batchId The unique ID of this mutation batch.
     * @param localWriteTime The original write time of this mutation.
     * @param baseMutations Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, n, i, e) {
        this.batchId = t, this.jn = n, this.baseMutations = i, this.mutations = e, C$1(e.length > 0, "Cannot create an empty mutation batch");
    }
    /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */    return t.prototype.Wt = function(t, n, i) {
        n && C$1(n.key.isEqual(t), "applyToRemoteDocument: key " + t + " should match maybeDoc key\n        " + n.key);
        var e = i.rs;
        C$1(e.length === this.mutations.length, "Mismatch between mutations length\n      (" + this.mutations.length + ") and mutation results length\n      (" + e.length + ").");
        for (var r = 0; r < this.mutations.length; r++) {
            var u = this.mutations[r];
            if (u.key.isEqual(t)) {
                var s = e[r];
                n = u.Wt(n, s);
            }
        }
        return n;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    t.prototype.Gt = function(t, n) {
        n && C$1(n.key.isEqual(t), "applyToLocalDocument: key " + t + " should match maybeDoc key\n        " + n.key);
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
                for (var i = 0, e = this.baseMutations; i < e.length; i++) {
            (o = e[i]).key.isEqual(t) && (n = o.Gt(n, n, this.jn));
        }
        // Second, apply all user-provided mutations.
        for (var r = n, u = 0, s = this.mutations; u < s.length; u++) {
            var o;
            (o = s[u]).key.isEqual(t) && (n = o.Gt(n, r, this.jn));
        }
        return n;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.us = function(t) {
        var n = this, i = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(e) {
            var r = n.Gt(e.key, t.get(e.key));
            r && (i = i.lt(e.key, r));
        })), i;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, n) {
            return t.add(n.key);
        }), di());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && N$1(this.mutations, t.mutations) && N$1(this.baseMutations, t.baseMutations);
    }, t;
}(), ce = /** @class */ function() {
    function t(t, n, i, e, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    r) {
        this.batch = t, this.ss = n, this.rs = i, this.streamToken = e, this.os = r;
    }
    /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */    return t.from = function(n, i, e, r) {
        C$1(n.mutations.length === e.length, "Mutations sent " + n.mutations.length + " must equal results received " + e.length);
        for (var u = fi(), s = n.mutations, o = 0; o < s.length; o++) u = u.lt(s[o].key, e[o].version);
        return new t(n, i, e, r, u);
    }, t;
}(), ae = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.hs = new kt(fe.Bn), 
        // A set of outstanding references to a document sorted by target id.
        this.cs = new kt(fe.as);
    }
    /** Returns true if the reference set contains no references. */    return t.prototype.J = function() {
        return this.hs.J();
    }, 
    /** Adds a reference to the given document key for the given ID. */
    t.prototype.fs = function(t, n) {
        var i = new fe(t, n);
        this.hs = this.hs.add(i), this.cs = this.cs.add(i);
    }, 
    /** Add references to the given document keys for the given ID. */
    t.prototype.ls = function(t, n) {
        var i = this;
        t.forEach((function(t) {
            return i.fs(t, n);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.ds = function(t, n) {
        this.vs(new fe(t, n));
    }, t.prototype.ws = function(t, n) {
        var i = this;
        t.forEach((function(t) {
            return i.ds(t, n);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.ms = function(t) {
        var n = this, i = At.EMPTY, e = new fe(i, t), r = new fe(i, t + 1), u = [];
        return this.cs.Lt([ e, r ], (function(t) {
            n.vs(t), u.push(t.key);
        })), u;
    }, t.prototype.ps = function() {
        var t = this;
        this.hs.forEach((function(n) {
            return t.vs(n);
        }));
    }, t.prototype.vs = function(t) {
        this.hs = this.hs.delete(t), this.cs = this.cs.delete(t);
    }, t.prototype.gs = function(t) {
        var n = At.EMPTY, i = new fe(n, t), e = new fe(n, t + 1), r = di();
        return this.cs.Lt([ i, e ], (function(t) {
            r = r.add(t.key);
        })), r;
    }, t.prototype.bs = function(t) {
        var n = new fe(t, 0), i = this.hs.Mt(n);
        return null !== i && t.isEqual(i.key);
    }, t;
}(), fe = /** @class */ function() {
    function t(t, n) {
        this.key = t, this.ys = n;
    }
    /** Compare by key then by ID */    return t.Bn = function(t, n) {
        return At.G(t.key, n.key) || V$1(t.ys, n.ys);
    }, 
    /** Compare by ID then by key */
    t.as = function(t, n) {
        return V$1(t.ys, n.ys) || At.G(t.key, n.key);
    }, t;
}(), le = /** @class */ function() {
    function t(t) {
        this._s = t, 
        /**
         * The inner map for a key -> value pair. Due to the possibility of
         * collisions we keep a list of entries that we do a linear search through
         * to find an actual match. Note that collisions should be rare, so we still
         * expect near constant time lookups in practice.
         */
        this.Is = {};
    }
    /** Get a value for this key, or undefined if it does not exist. */    return t.prototype.get = function(t) {
        var n = this._s(t), i = this.Is[n];
        if (void 0 !== i) for (var e = 0, r = i; e < r.length; e++) {
            var u = r[e], s = u[0], o = u[1];
            if (s.isEqual(t)) return o;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */
    t.prototype.set = function(t, n) {
        var i = this._s(t), e = this.Is[i];
        if (void 0 !== e) {
            for (var r = 0; r < e.length; r++) if (e[r][0].isEqual(t)) return void (e[r] = [ t, n ]);
            e.push([ t, n ]);
        } else this.Is[i] = [ [ t, n ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var n = this._s(t), i = this.Is[n];
        if (void 0 === i) return !1;
        for (var e = 0; e < i.length; e++) if (i[e][0].isEqual(t)) return 1 === i.length ? delete this.Is[n] : i.splice(e, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        Y$1(this.Is, (function(n, i) {
            for (var e = 0, r = i; e < r.length; e++) {
                var u = r[e], s = u[0], o = u[1];
                t(s, o);
            }
        }));
    }, t.prototype.J = function() {
        return X$1(this.Is);
    }, t;
}(), de = /** @class */ function() {
    function t(t) {
        var n = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.Ts = null, this.Es = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.Rs = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.As = !1, t((function(t) {
            n.Rs = !0, n.result = t, n.Ts && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            n.Ts(t);
        }), (function(t) {
            n.Rs = !0, n.error = t, n.Es && n.Es(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(n, i) {
        var e = this;
        return this.As && S$1("Called next() or catch() twice for PersistencePromise"), this.As = !0, 
        this.Rs ? this.error ? this.Ds(i, this.error) : this.Ps(n, this.result) : new t((function(t, r) {
            e.Ts = function(i) {
                e.Ps(n, i).next(t, r);
            }, e.Es = function(n) {
                e.Ds(i, n).next(t, r);
            };
        }));
    }, t.prototype.Ss = function() {
        var t = this;
        return new Promise((function(n, i) {
            t.next(n, i);
        }));
    }, t.prototype.Cs = function(n) {
        try {
            var i = n();
            return i instanceof t ? i : t.resolve(i);
        } catch (n) {
            return t.reject(n);
        }
    }, t.prototype.Ps = function(n, i) {
        return n ? this.Cs((function() {
            return n(i);
        })) : t.resolve(i);
    }, t.prototype.Ds = function(n, i) {
        return n ? this.Cs((function() {
            return n(i);
        })) : t.reject(i);
    }, t.resolve = function(n) {
        return new t((function(t, i) {
            t(n);
        }));
    }, t.reject = function(n) {
        return new t((function(t, i) {
            i(n);
        }));
    }, t.ks = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    n) {
        return new t((function(t, i) {
            var e = 0, r = 0, u = !1;
            n.forEach((function(n) {
                ++e, n.next((function() {
                    ++r, u && r === e && t();
                }), (function(t) {
                    return i(t);
                }));
            })), u = !0, r === e && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.Vs = function(n) {
        for (var i = t.resolve(!1), e = function(n) {
            i = i.next((function(i) {
                return i ? t.resolve(i) : n();
            }));
        }, r = 0, u = n; r < u.length; r++) {
            e(u[r]);
        }
        return i;
    }, t.forEach = function(t, n) {
        var i = this, e = [];
        return t.forEach((function(t, r) {
            e.push(n.call(i, t, r));
        })), this.ks(e);
    }, t;
}(), ve = /** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.Ns = new le((function(t) {
            return t.toString();
        })), this.Os = !1;
    }
    return Object.defineProperty(t.prototype, "readTime", {
        get: function() {
            return C$1(void 0 !== this.Fs, "Read time is not set. All removeEntry() calls must include a readTime if `trackRemovals` is used."), 
            this.Fs;
        },
        set: function(t) {
            // Right now (for simplicity) we just track a single readTime for all the
            // added entries since we expect them to all be the same, but we could
            // rework to store per-entry readTimes if necessary.
            C$1(void 0 === this.Fs || this.Fs.isEqual(t), "All changes in a RemoteDocumentChangeBuffer must have the same read time"), 
            this.Fs = t;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Us = function(t, n) {
        this.xs(), this.readTime = n, this.Ns.set(t.key, t);
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.js = function(t, n) {
        this.xs(), n && (this.readTime = n), this.Ns.set(t, null);
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    t.prototype.Ls = function(t, n) {
        this.xs();
        var i = this.Ns.get(n);
        return void 0 !== i ? de.resolve(i) : this.Bs(t, n);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */
    t.prototype.getEntries = function(t, n) {
        return this.Ms(t, n);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.xs(), this.Os = !0, this.qs(t);
    }, 
    /** Helper to assert this.changes is not null  */
    t.prototype.xs = function() {
        C$1(!this.Os, "Changes have already been applied.");
    }, t;
}(), we = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", me = /** @class */ function() {
    function t() {
        this.Qs = [];
    }
    return t.prototype.Gs = function(t) {
        this.Qs.push(t);
    }, t.prototype.Ws = function() {
        this.Qs.forEach((function(t) {
            return t();
        }));
    }, t;
}(), pe = /** @class */ function() {
    function t(n) {
        this.db = n, 
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === t.zs(getUA()) && D$1("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
    /**
     * Opens the specified database, creating or upgrading it if necessary.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support downgrading the schema
     * version. We currently do not support any way to do versioning outside of IndexedDB's versioning
     * mechanism, as only version-upgrade transactions are allowed to do things like create
     * objectstores.
     */    return t.Ks = function(n, i, e) {
        return C$1(t.Hs(), "IndexedDB not supported in current environment."), A$1("SimpleDb", "Opening database:", n), 
        new de((function(r, u) {
            // TODO(mikelehen): Investigate browser compatibility.
            // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
            // suggests IE9 and older WebKit browsers handle upgrade
            // differently. They expect setVersion, as described here:
            // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
            var s = window.indexedDB.open(n, i);
            s.onsuccess = function(n) {
                var i = n.target.result;
                r(new t(i));
            }, s.onblocked = function() {
                u(new B$1(L$1.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
            }, s.onerror = function(t) {
                var n = t.target.error;
                "VersionError" === n.name ? u(new B$1(L$1.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : u(n);
            }, s.onupgradeneeded = function(t) {
                A$1("SimpleDb", 'Database "' + n + '" requires upgrade from version:', t.oldVersion);
                var i = t.target.result;
                e.createOrUpgrade(i, s.transaction, t.oldVersion, er).next((function() {
                    A$1("SimpleDb", "Database upgrade to version " + er + " complete");
                }));
            };
        })).Ss();
    }, 
    /** Deletes the specified database. */
    t.delete = function(t) {
        return A$1("SimpleDb", "Removing database:", t), _e(window.indexedDB.deleteDatabase(t)).Ss();
    }, 
    /** Returns true if IndexedDB is available in the current environment. */
    t.Hs = function() {
        if ("undefined" == typeof window || null == window.indexedDB) return !1;
        if (t.Js()) return !0;
        // In some Node environments, `window` is defined, but `window.navigator` is
        // not. We don't support IndexedDB persistence in Node if the
        // isMockPersistence() check above returns false.
                if (void 0 === window.navigator) return !1;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                var n = getUA(), i = t.zs(n), e = 0 < i && i < 10, r = t.Ys(n), u = 0 < r && r < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(n.indexOf("MSIE ") > 0 || n.indexOf("Trident/") > 0 || n.indexOf("Edge/") > 0 || e || u);
    }, 
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */
    t.Js = function() {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.Xs);
    }, 
    /** Helper to get a typed SimpleDbStore from a transaction. */
    t.$s = function(t, n) {
        return t.store(n);
    }, 
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    t.zs = function(t) {
        var n = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), i = n ? n[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(i);
    }, 
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    t.Ys = function(t) {
        var n = t.match(/Android ([\d.]+)/i), i = n ? n[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(i);
    }, t.prototype.Zs = function(t) {
        this.db.onversionchange = function(n) {
            return t(n);
        };
    }, t.prototype.runTransaction = function(t, n, i) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, s, o, h, c;
            return __generator(this, (function(a) {
                switch (a.label) {
                  case 0:
                    e = t.startsWith("readonly"), r = t.endsWith("idempotent"), s = 0, o = function() {
                        var t, o, c, a;
                        return __generator(this, (function(u) {
                            switch (u.label) {
                              case 0:
                                ++s, t = be.open(h.db, e ? "readonly" : "readwrite", n), u.label = 1;

                              case 1:
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                return u.trys.push([ 1, 3, , 4 ]), 
                                // As noted above, errors are propagated by aborting the transaction. So
                                // we swallow any error here to avoid the browser logging it as unhandled.
                                (o = i(t).catch((function(n) {
                                    // We cannot actually recover, and calling `abort()` will cause the transaction's
                                    // completion promise to be rejected. This in turn means that we won't use
                                    // `transactionFnResult` below. We return a rejection here so that we don't add the
                                    // possibility of returning `void` to the type of `transactionFnResult`.
                                    // Abort the transaction if there was an error.
                                    return t.abort(n), de.reject(n);
                                })).Ss()).catch((function() {})), [ 4 /*yield*/ , t.to ];

                              case 2:
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                return u.sent(), [ 2 /*return*/ , {
                                    value: o
                                } ];

                              case 3:
                                return c = u.sent(), a = r && "FirebaseError" !== c.name && s < 3, A$1("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", c.message, a), 
                                a ? [ 3 /*break*/ , 4 ] : [ 2 /*return*/ , {
                                    value: Promise.reject(c)
                                } ];

                              case 4:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, h = this, a.label = 1;

                  case 1:
                    return [ 5 /*yield**/ , o() ];

                  case 2:
                    return "object" == typeof (c = a.sent()) ? [ 2 /*return*/ , c.value ] : [ 3 /*break*/ , 1 ];

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.close = function() {
        this.db.close();
    }, t;
}(), ge = /** @class */ function() {
    function t(t) {
        this.no = t, this.io = !1, this.eo = null;
    }
    return Object.defineProperty(t.prototype, "Rs", {
        get: function() {
            return this.io;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ro", {
        get: function() {
            return this.eo;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursor", {
        set: function(t) {
            this.no = t;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * This function can be called to stop iteration at any point.
     */
    t.prototype.done = function() {
        this.io = !0;
    }, 
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    t.prototype.uo = function(t) {
        this.eo = t;
    }, 
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    t.prototype.delete = function() {
        return _e(this.no.delete());
    }, t;
}(), be = /** @class */ function() {
    function t(t) {
        var n = this;
        this.transaction = t, this.aborted = !1, 
        /**
         * A promise that resolves with the result of the IndexedDb transaction.
         */
        this.so = new Xi, this.transaction.oncomplete = function() {
            n.so.resolve();
        }, this.transaction.onabort = function() {
            t.error ? n.so.reject(t.error) : n.so.resolve();
        }, this.transaction.onerror = function(t) {
            var i = Te(t.target.error);
            n.so.reject(i);
        };
    }
    return t.open = function(n, i, e) {
        return new t(n.transaction(e, i));
    }, Object.defineProperty(t.prototype, "to", {
        get: function() {
            return this.so.promise;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.abort = function(t) {
        t && this.so.reject(t), this.aborted || (A$1("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }, 
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    t.prototype.store = function(t) {
        var n = this.transaction.objectStore(t);
        return C$1(!!n, "Object store not part of transaction: " + t), new ye(n);
    }, t;
}(), ye = /** @class */ function() {
    function t(t) {
        this.store = t;
    }
    return t.prototype.put = function(t, n) {
        var i;
        return void 0 !== n ? (A$1("SimpleDb", "PUT", this.store.name, t, n), i = this.store.put(n, t)) : (A$1("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        i = this.store.put(t)), _e(i);
    }, 
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value The object to write.
     * @return The key of the value to add.
     */
    t.prototype.add = function(t) {
        return A$1("SimpleDb", "ADD", this.store.name, t, t), _e(this.store.add(t));
    }, 
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @return The object with the specified key or null if no object exists.
     */
    t.prototype.get = function(t) {
        var n = this;
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return _e(this.store.get(t)).next((function(i) {
            // Normalize nonexistence to null.
            return void 0 === i && (i = null), A$1("SimpleDb", "GET", n.store.name, t, i), i;
        }));
    }, t.prototype.delete = function(t) {
        return A$1("SimpleDb", "DELETE", this.store.name, t), _e(this.store.delete(t));
    }, 
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */
    t.prototype.count = function() {
        return A$1("SimpleDb", "COUNT", this.store.name), _e(this.store.count());
    }, t.prototype.oo = function(t, n) {
        var i = this.cursor(this.options(t, n)), e = [];
        return this.ho(i, (function(t, n) {
            e.push(n);
        })).next((function() {
            return e;
        }));
    }, t.prototype.co = function(t, n) {
        A$1("SimpleDb", "DELETE ALL", this.store.name);
        var i = this.options(t, n);
        i.ao = !1;
        var e = this.cursor(i);
        return this.ho(e, (function(t, n, i) {
            // NOTE: Calling delete() on a cursor is documented as more efficient than
            // calling delete() on an object store with a single key
            // (https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/delete),
            // however, this requires us *not* to use a keysOnly cursor
            // (https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/delete). We
            // may want to compare the performance of each method.
            return i.delete();
        }));
    }, t.prototype.fo = function(t, n) {
        var i;
        n ? i = t : (i = {}, n = t);
        var e = this.cursor(i);
        return this.ho(e, n);
    }, 
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */
    t.prototype.lo = function(t) {
        var n = this.cursor({});
        return new de((function(i, e) {
            n.onerror = function(t) {
                var n = Te(t.target.error);
                e(n);
            }, n.onsuccess = function(n) {
                var e = n.target.result;
                e ? t(e.primaryKey, e.value).next((function(t) {
                    t ? e.continue() : i();
                })) : i();
            };
        }));
    }, t.prototype.ho = function(t, n) {
        var i = [];
        return new de((function(e, r) {
            t.onerror = function(t) {
                r(t.target.error);
            }, t.onsuccess = function(t) {
                var r = t.target.result;
                if (r) {
                    var u = new ge(r), s = n(r.primaryKey, r.value, u);
                    if (s instanceof de) {
                        var o = s.catch((function(t) {
                            return u.done(), de.reject(t);
                        }));
                        i.push(o);
                    }
                    u.Rs ? e() : null === u.ro ? r.continue() : r.continue(u.ro);
                } else e();
            };
        })).next((function() {
            return de.ks(i);
        }));
    }, t.prototype.options = function(t, n) {
        var i = void 0;
        return void 0 !== t && ("string" == typeof t ? i = t : (C$1(void 0 === n, "3rd argument must not be defined if 2nd is a range."), 
        n = t)), {
            index: i,
            range: n
        };
    }, t.prototype.cursor = function(t) {
        var n = "next";
        if (t.reverse && (n = "prev"), t.index) {
            var i = this.store.index(t.index);
            return t.ao ? i.openKeyCursor(t.range, n) : i.openCursor(t.range, n);
        }
        return this.store.openCursor(t.range, n);
    }, t;
}();

/**
 * A batch of mutations that will be sent as one unit to the backend.
 */
/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */
function _e(t) {
    return new de((function(n, i) {
        t.onsuccess = function(t) {
            var i = t.target.result;
            n(i);
        }, t.onerror = function(t) {
            var n = Te(t.target.error);
            i(n);
        };
    }));
}

// Guard so we only report the error once.
var Ie = !1;

function Te(t) {
    var n = pe.zs(getUA());
    if (n >= 12.2 && n < 13) {
        var i = "An internal error was encountered in the Indexed Database server";
        if (t.message.indexOf(i) >= 0) {
            // Wrap error in a more descriptive one.
            var e = new B$1("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + i + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return Ie || (Ie = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout((function() {
                throw e;
            }), 0)), e;
        }
    }
    return t;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A mutation queue for a specific user, backed by IndexedDB. */ var Ee = /** @class */ function() {
    function t(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, n, i, e) {
        this.userId = t, this.serializer = n, this.do = i, this.vo = e, 
        /**
         * Caches the document keys for pending mutation batches. If the mutation
         * has been removed from IndexedDb, the cached value may continue to
         * be used to retrieve the batch's document keys. To remove a cached value
         * locally, `removeCachedMutationKeys()` should be invoked either directly
         * or through `removeMutationBatches()`.
         *
         * With multi-tab, when the primary client acknowledges or rejects a mutation,
         * this cache is used by secondary clients to invalidate the local
         * view of the documents that were previously affected by the mutation.
         */
        // PORTING NOTE: Multi-tab only.
        this.wo = {};
    }
    /**
     * Creates a new mutation queue for the given user.
     * @param user The user for which to create a mutation queue.
     * @param serializer The serializer to use when persisting to IndexedDb.
     */    return t.mo = function(n, i, e, r) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return C$1("" !== n.uid, "UserID must not be an empty string."), new t(n.l() ? n.uid : "", i, e, r);
    }, t.prototype.po = function(t) {
        var n = !0, i = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return De(t).fo({
            index: hr.userMutationsIndex,
            range: i
        }, (function(t, i, e) {
            n = !1, e.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.bo = function(t, n, i) {
        return this.yo(t).next((function(n) {
            // We can't store the resumeToken as a ByteString in IndexedDB, so we
            // convert it to a Base64 string for storage.
            return n.lastStreamToken = i.toBase64(), Se(t).put(n);
        }));
    }, t.prototype._o = function(t) {
        return this.yo(t).next((function(t) {
            return Jn.fromBase64String(t.lastStreamToken);
        }));
    }, t.prototype.Io = function(t, n) {
        return this.yo(t).next((function(i) {
            // We can't store the resumeToken as a ByteString in IndexedDB, so we
            // convert it to a Base64 string for storage.
            return i.lastStreamToken = n.toBase64(), Se(t).put(i);
        }));
    }, t.prototype.To = function(t, n, i, e) {
        var r = this, u = Pe(t), s = De(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return s.add({}).next((function(o) {
            C$1("number" == typeof o, "Auto-generated key is not a number");
            for (var h = new he(o, n, i, e), c = r.serializer.Eo(r.userId, h), a = [], f = new kt((function(t, n) {
                return V$1(t.nt(), n.nt());
            })), l = 0, d = e; l < d.length; l++) {
                var v = d[l], w = cr.key(r.userId, v.key.path, o);
                f = f.add(v.key.path.H()), a.push(s.put(c)), a.push(u.put(w, cr.PLACEHOLDER));
            }
            return f.forEach((function(n) {
                a.push(r.do.Ro(t, n));
            })), t.Gs((function() {
                r.wo[o] = h.keys();
            })), de.ks(a).next((function() {
                return h;
            }));
        }));
    }, t.prototype.Ao = function(t, n) {
        var i = this;
        return De(t).get(n).next((function(t) {
            return t ? (C$1(t.userId === i.userId, "Unexpected user '" + t.userId + "' for mutation batch " + n), 
            i.serializer.Do(t)) : null;
        }));
    }, t.prototype.Po = function(t, n) {
        var i = this;
        return this.wo[n] ? de.resolve(this.wo[n]) : this.Ao(t, n).next((function(t) {
            if (t) {
                var e = t.keys();
                return i.wo[n] = e, e;
            }
            return null;
        }));
    }, t.prototype.So = function(t, n) {
        var i = this, e = n + 1, r = IDBKeyRange.lowerBound([ this.userId, e ]), u = null;
        return De(t).fo({
            index: hr.userMutationsIndex,
            range: r
        }, (function(t, n, r) {
            n.userId === i.userId && (C$1(n.batchId >= e, "Should have found mutation after " + e), 
            u = i.serializer.Do(n)), r.done();
        })).next((function() {
            return u;
        }));
    }, t.prototype.Co = function(t) {
        var n = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]), i = -1;
        return De(t).fo({
            index: hr.userMutationsIndex,
            range: n,
            reverse: !0
        }, (function(t, n, e) {
            i = n.batchId, e.done();
        })).next((function() {
            return i;
        }));
    }, t.prototype.ko = function(t) {
        var n = this, i = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return De(t).oo(hr.userMutationsIndex, i).next((function(t) {
            return t.map((function(t) {
                return n.serializer.Do(t);
            }));
        }));
    }, t.prototype.Vo = function(t, n) {
        var i = this, e = cr.prefixForPath(this.userId, n.path), r = IDBKeyRange.lowerBound(e), u = [];
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
                return Pe(t).fo({
            range: r
        }, (function(e, r, s) {
            var o = e[0], h = e[1], c = e[2], a = oe(h);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (o === i.userId && n.path.isEqual(a)) 
            // Look up the mutation batch in the store.
            return De(t).get(c).next((function(t) {
                if (!t) throw S$1("Dangling document-mutation reference found: " + e + " which points to " + c);
                C$1(t.userId === i.userId, "Unexpected user '" + t.userId + "' for mutation batch " + c), 
                u.push(i.serializer.Do(t));
            }));
            s.done();
        })).next((function() {
            return u;
        }));
    }, t.prototype.No = function(t, n) {
        var i = this, e = new kt(V$1), r = [];
        return n.forEach((function(n) {
            var u = cr.prefixForPath(i.userId, n.path), s = IDBKeyRange.lowerBound(u), o = Pe(t).fo({
                range: s
            }, (function(t, r, u) {
                var s = t[0], o = t[1], h = t[2], c = oe(o);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                s === i.userId && n.path.isEqual(c) ? e = e.add(h) : u.done();
            }));
            r.push(o);
        })), de.ks(r).next((function() {
            return i.Oo(t, e);
        }));
    }, t.prototype.Fo = function(t, n) {
        var i = this;
        C$1(!n.zn(), "Document queries shouldn't go down this path"), C$1(!n._i(), "CollectionGroup queries should be handled in LocalDocumentsView");
        var e = n.path, r = e.length + 1, u = cr.prefixForPath(this.userId, e), s = IDBKeyRange.lowerBound(u), o = new kt(V$1);
        return Pe(t).fo({
            range: s
        }, (function(t, n, u) {
            var s = t[0], h = t[1], c = t[2], a = oe(h);
            s === i.userId && e.$(a) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            a.length === r && (o = o.add(c)) : u.done();
        })).next((function() {
            return i.Oo(t, o);
        }));
    }, t.prototype.Oo = function(t, n) {
        var i = this, e = [], r = [];
        // TODO(rockwood): Implement this using iterate.
        return n.forEach((function(n) {
            r.push(De(t).get(n).next((function(t) {
                if (null === t) throw S$1("Dangling document-mutation reference found, which points to " + n);
                C$1(t.userId === i.userId, "Unexpected user '" + t.userId + "' for mutation batch " + n), 
                e.push(i.serializer.Do(t));
            })));
        })), de.ks(r).next((function() {
            return e;
        }));
    }, t.prototype.Uo = function(t, n) {
        var i = this;
        return Ae(t.xo, this.userId, n).next((function(e) {
            return t.Gs((function() {
                i.jo(n.batchId);
            })), de.forEach(e, (function(n) {
                return i.vo.Lo(t, n);
            }));
        }));
    }, t.prototype.jo = function(t) {
        delete this.wo[t];
    }, t.prototype.Bo = function(t) {
        var n = this;
        return this.po(t).next((function(i) {
            if (!i) return de.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        var e = IDBKeyRange.lowerBound(cr.prefixForUser(n.userId)), r = [];
            return Pe(t).fo({
                range: e
            }, (function(t, i, e) {
                if (t[0] === n.userId) {
                    var u = oe(t[1]);
                    r.push(u);
                } else e.done();
            })).next((function() {
                C$1(0 === r.length, "Document leak -- detected dangling mutation references when queue is empty. Dangling keys: " + r.map((function(t) {
                    return t.nt();
                })));
            }));
        }));
    }, t.prototype.bs = function(t, n) {
        return Re(t, this.userId, n);
    }, 
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    t.prototype.yo = function(t) {
        var n = this;
        return Se(t).get(this.userId).next((function(t) {
            return t || new or(n.userId, -1, 
            /*lastStreamToken=*/ "");
        }));
    }, t;
}();

/**
 * @return true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function Re(t, n, i) {
    var e = cr.prefixForPath(n, i.path), r = e[1], u = IDBKeyRange.lowerBound(e), s = !1;
    return Pe(t).fo({
        range: u,
        ao: !0
    }, (function(t, i, e) {
        var u = t[0], o = t[1];
        t[2];
        u === n && o === r && (s = !0), e.done();
    })).next((function() {
        return s;
    }));
}

/** Returns true if any mutation queue contains the given document. */
/**
 * Delete a mutation batch and the associated document mutations.
 * @return A PersistencePromise of the document mutations that were removed.
 */
function Ae(t, n, i) {
    var e = t.store(hr.store), r = t.store(cr.store), u = [], s = IDBKeyRange.only(i.batchId), o = 0, h = e.fo({
        range: s
    }, (function(t, n, i) {
        return o++, i.delete();
    }));
    u.push(h.next((function() {
        C$1(1 === o, "Dangling document-mutation reference found: Missing batch " + i.batchId);
    })));
    for (var c = [], a = 0, f = i.mutations; a < f.length; a++) {
        var l = f[a], d = cr.key(n, l.key.path, i.batchId);
        u.push(r.delete(d)), c.push(l.key);
    }
    return de.ks(u).next((function() {
        return c;
    }));
}

/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */ function De(t) {
    return Sr.$s(t, hr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Pe(t) {
    return Sr.$s(t, cr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Se(t) {
    return Sr.$s(t, or.store);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ce, ke, Ve = 1;

(ke = Ce || (Ce = {}))[ke.Mo = 0] = "__PRIVATE_QueryCache", ke[ke.qo = 1] = "__PRIVATE_SyncEngine";

/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the query cache (via
 * forQueryCache()), and one for limbo documents (via forSyncEngine()). These
 * two generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */
// TODO(mrschmidt): Explore removing this class in favor of generating these IDs
// directly in SyncEngine and LocalStore.
var Ne = /** @class */ function() {
    /**
     * Instantiates a new TargetIdGenerator. If a seed is provided, the generator
     * will use the seed value as the next target ID.
     */
    function t(t, n) {
        this.Qo = t, C$1((t & Ve) === t, "Generator ID " + t + " contains more than " + Ve + " reserved bits"), 
        this.Go(void 0 !== n ? n : this.Qo);
    }
    return t.prototype.next = function() {
        var t = this.Wo;
        return this.Wo += 1 << Ve, t;
    }, 
    /**
     * Returns the ID that follows the given ID. Subsequent calls to `next()`
     * use the newly returned target ID as their base.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.after = function(t) {
        return this.Go(t + (1 << Ve)), this.next();
    }, t.prototype.Go = function(t) {
        C$1((t & Ve) === this.Qo, "Cannot supply target ID from different generator ID"), 
        this.Wo = t;
    }, t.zo = function() {
        return new t(Ce.Mo, 2);
    }, t.Ko = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(Ce.qo);
    }, t;
}(), Oe = /** @class */ function() {
    function t(t, n, i) {
        this.Ho = t, this.Jo = n, this.do = i;
    }
    /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */    return t.prototype.Yo = function(t, n) {
        var i = this;
        return this.Jo.Vo(t, n).next((function(e) {
            return i.Xo(t, n, e);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */
    t.prototype.Xo = function(t, n, i) {
        return this.Ho.Ls(t, n).next((function(t) {
            for (var e = 0, r = i; e < r.length; e++) {
                t = r[e].Gt(n, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.$o = function(t, n, i) {
        var e = oi();
        return n.forEach((function(t, n) {
            for (var r = 0, u = i; r < u.length; r++) {
                n = u[r].Gt(t, n);
            }
            e = e.lt(t, n);
        })), e;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.Zo = function(t, n) {
        var i = this;
        return this.Ho.getEntries(t, n).next((function(n) {
            return i.th(t, n);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.th = function(t, n) {
        var i = this;
        return this.Jo.No(t, n).next((function(e) {
            var r = i.$o(t, n, e), u = si();
            return r.forEach((function(t, n) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                n || (n = new yn(t, _t.B())), u = u.lt(t, n);
            })), u;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.MIN, return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.nh = function(t, n, i) {
        return n.zn() ? this.ih(t, n.path) : n._i() ? this.eh(t, n, i) : this.rh(t, n, i);
    }, t.prototype.ih = function(t, n) {
        // Just do a simple document lookup.
        return this.Yo(t, new At(n)).next((function(t) {
            var n = ci();
            return t instanceof bn && (n = n.lt(t.key, t)), n;
        }));
    }, t.prototype.eh = function(t, n, i) {
        var e = this;
        C$1(n.path.J(), "Currently we only support collection group queries at the root.");
        var r = n.collectionGroup, u = ci();
        return this.do.uh(t, r).next((function(s) {
            // Perform a collection query against each parent that contains the
            // collectionId and aggregate the results.
            return de.forEach(s, (function(s) {
                var o = n.ai(s.child(r));
                return e.rh(t, o, i).next((function(t) {
                    t.forEach((function(t, n) {
                        u = u.lt(t, n);
                    }));
                }));
            })).next((function() {
                return u;
            }));
        }));
    }, t.prototype.rh = function(t, n, i) {
        var e, r, u = this;
        // Query the remote documents and overlay mutations.
                return this.Ho.nh(t, n, i).next((function(i) {
            return e = i, u.Jo.Fo(t, n);
        })).next((function(n) {
            // It is possible that a PatchMutation can make a document match a query, even if
            // the version in the RemoteDocumentCache is not a match yet (waiting for server
            // to ack). To handle this, we find all document keys affected by the PatchMutations
            // that are not in `result` yet, and back fill them via `remoteDocumentCache.getEntries`,
            // otherwise those `PatchMutations` will be ignored because no base document can be found,
            // and lead to missing result for the query.
            return r = n, u.sh(t, r, e).next((function(t) {
                e = t;
                for (var n = 0, i = r; n < i.length; n++) for (var u = i[n], s = 0, o = u.mutations; s < o.length; s++) {
                    var h = o[s], c = h.key, a = e.get(c), f = h.Gt(a, a, u.jn);
                    e = f instanceof bn ? e.lt(c, f) : e.remove(c);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return e.forEach((function(t, i) {
                n.matches(i) || (e = e.remove(t));
            })), e;
        }));
    }, t.prototype.sh = function(t, n, i) {
        for (var e = di(), r = 0, u = n; r < u.length; r++) for (var s = 0, o = u[r].mutations; s < o.length; s++) {
            var h = o[s];
            h instanceof Yt && null === i.get(h.key) && (e = e.add(h.key));
        }
        var c = i;
        return this.Ho.getEntries(t, e).next((function(t) {
            return t.forEach((function(t, n) {
                null !== n && n instanceof bn && (c = c.lt(t, n));
            })), c;
        }));
    }, t;
}(), Fe = /** @class */ function() {
    function t(t, n, i, e) {
        this.targetId = t, this.fromCache = n, this.oh = i, this.hh = e;
    }
    return t.ah = function(n, i) {
        for (var e = di(), r = di(), u = 0, s = i.docChanges; u < s.length; u++) {
            var o = s[u];
            switch (o.type) {
              case mi.Bi:
                e = e.add(o.doc.key);
                break;

              case mi.Mi:
                r = r.add(o.doc.key);
 // do nothing
                        }
        }
        return new t(n, i.fromCache, e, r);
    }, t;
}(), Ue = "LocalStore", xe = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, n, i) {
        this.persistence = t, this.fh = n, 
        /**
         * The set of document references maintained by any local views.
         */
        this.lh = new ae, 
        /**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */
        this.dh = new Dt(V$1), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.vh = new le((function(t) {
            return t.canonicalId();
        })), 
        /**
         * The read time of the last entry processed by `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */
        this.wh = _t.MIN, C$1(t.mh, "LocalStore was passed an unstarted persistence implementation"), 
        this.persistence.vo.ph(this.lh), this.Jo = t.gh(i), this.bh = t.yh(), this._h = t.Ih(), 
        this.Th = new Oe(this.bh, this.Jo, this.persistence.Eh()), this.fh.Rh(this.Th);
    }
    /** Starts the LocalStore. */    return t.prototype.start = function() {
        return this.Ah();
    }, 
    /**
     * Tells the LocalStore that the currently authenticated user has changed.
     *
     * In response the local store switches the mutation queue to the new user and
     * returns any resulting document changes.
     */
    // PORTING NOTE: Android and iOS only return the documents affected by the
    // change.
    t.prototype.Dh = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, i, e, r = this;
            return __generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return n = this.Jo, i = this.Th, [ 4 /*yield*/ , this.persistence.runTransaction("Handle user change", "readonly-idempotent", (function(e) {
                        // Swap out the mutation queue, grabbing the pending mutation batches
                        // before and after.
                        var u;
                        return r.Jo.ko(e).next((function(s) {
                            return u = s, n = r.persistence.gh(t), 
                            // Recreate our LocalDocumentsView using the new
                            // MutationQueue.
                            i = new Oe(r.bh, n, r.persistence.Eh()), n.ko(e);
                        })).next((function(t) {
                            for (var n = [], r = [], s = di(), o = 0, h = u; o < h.length; o++) {
                                var c = h[o];
                                n.push(c.batchId);
                                for (var a = 0, f = c.mutations; a < f.length; a++) {
                                    var l = f[a];
                                    s = s.add(l.key);
                                }
                            }
                            for (var d = 0, v = t; d < v.length; d++) {
                                c = v[d];
                                r.push(c.batchId);
                                for (var w = 0, m = c.mutations; w < m.length; w++) {
                                    l = m[w];
                                    s = s.add(l.key);
                                }
                            }
                            // Return the set of all (potentially) changed documents and the list
                            // of mutation batch IDs that were affected by change.
                                                        return i.Zo(e, s).next((function(t) {
                                return {
                                    Ph: t,
                                    Sh: n,
                                    Ch: r
                                };
                            }));
                        }));
                    })) ];

                  case 1:
                    return e = u.sent(), this.Jo = n, this.Th = i, this.fh.Rh(this.Th), [ 2 /*return*/ , e ];
                }
            }));
        }));
    }, 
    /* Accept locally generated Mutations and commit them to storage. */
    t.prototype.kh = function(t) {
        var n, i = this, e = yt.now(), r = t.reduce((function(t, n) {
            return t.add(n.key);
        }), di());
        return this.persistence.runTransaction("Locally write mutations", "readwrite-idempotent", (function(u) {
            // Load and apply all existing mutations. This lets us compute the
            // current base state for all non-idempotent transforms before applying
            // any additional user-provided writes.
            return i.Th.Zo(u, r).next((function(r) {
                n = r;
                for (
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                var s = [], o = 0, h = t; o < h.length; o++) {
                    var c = h[o], a = c.sn(n.get(c.key));
                    null != a && 
                    // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    s.push(new Yt(c.key, a, a.on(), Kt.exists(!0)));
                }
                return i.Jo.To(u, e, s, t);
            }));
        })).then((function(t) {
            var i = t.us(n);
            return {
                batchId: t.batchId,
                Ns: i
            };
        }));
    }, 
    /** Returns the local view of the documents affected by a mutation batch. */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Vh = function(t) {
        var n = this;
        return this.persistence.runTransaction("Lookup mutation documents", "readonly-idempotent", (function(i) {
            return n.Jo.Po(i, t).next((function(t) {
                return t ? n.Th.Zo(i, t) : de.resolve(null);
            }));
        }));
    }, 
    /**
     * Acknowledge the given batch.
     *
     * On the happy path when a batch is acknowledged, the local store will
     *
     *  + remove the batch from the mutation queue;
     *  + apply the changes to the remote document cache;
     *  + recalculate the latency compensated view implied by those changes (there
     *    may be mutations in the queue that affect the documents but haven't been
     *    acknowledged yet); and
     *  + give the changed documents back the sync engine
     *
     * @returns The resulting (modified) documents.
     */
    t.prototype.bo = function(t) {
        var n = this;
        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary-idempotent", (function(i) {
            var e = t.batch.keys(), r = n.bh.Nh({
                Oh: !0
            });
            return n.Jo.bo(i, t.batch, t.streamToken).next((function() {
                return n.Fh(i, t, r);
            })).next((function() {
                return r.apply(i);
            })).next((function() {
                return n.Jo.Bo(i);
            })).next((function() {
                return n.Th.Zo(i, e);
            }));
        }));
    }, 
    /**
     * Remove mutations from the MutationQueue for the specified batch;
     * LocalDocuments will be recalculated.
     *
     * @returns The resulting modified documents.
     */
    t.prototype.Uh = function(t) {
        var n = this;
        return this.persistence.runTransaction("Reject batch", "readwrite-primary-idempotent", (function(i) {
            var e;
            return n.Jo.Ao(i, t).next((function(t) {
                return C$1(null !== t, "Attempt to reject nonexistent batch!"), e = t.keys(), n.Jo.Uo(i, t);
            })).next((function() {
                return n.Jo.Bo(i);
            })).next((function() {
                return n.Th.Zo(i, e);
            }));
        }));
    }, 
    /**
     * Returns the largest (latest) batch id in mutation queue that is pending server response.
     * Returns `BATCHID_UNKNOWN` if the queue is empty.
     */
    t.prototype.Co = function() {
        var t = this;
        return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly-idempotent", (function(n) {
            return t.Jo.Co(n);
        }));
    }, 
    /** Returns the last recorded stream token for the current user. */
    t.prototype._o = function() {
        var t = this;
        return this.persistence.runTransaction("Get last stream token", "readonly-idempotent", (function(n) {
            return t.Jo._o(n);
        }));
    }, 
    /**
     * Sets the stream token for the current user without acknowledging any
     * mutation batch. This is usually only useful after a stream handshake or in
     * response to an error that requires clearing the stream token.
     */
    t.prototype.Io = function(t) {
        var n = this;
        return this.persistence.runTransaction("Set last stream token", "readwrite-primary-idempotent", (function(i) {
            return n.Jo.Io(i, t);
        }));
    }, 
    /**
     * Returns the last consistent snapshot processed (used by the RemoteStore to
     * determine whether to buffer incoming snapshots from the backend).
     */
    t.prototype.xh = function() {
        var t = this;
        return this.persistence.runTransaction("Get last remote snapshot version", "readonly-idempotent", (function(n) {
            return t._h.xh(n);
        }));
    }, 
    /**
     * Update the "ground-state" (remote) documents. We assume that the remote
     * event reflects any write batches that have been acknowledged or rejected
     * (i.e. we do not re-apply local mutations to updates from this event).
     *
     * LocalDocuments are re-calculated if there are remaining mutations in the
     * queue.
     */
    t.prototype.jh = function(n) {
        var i = this, e = n.Ni, r = this.dh;
        return this.persistence.runTransaction("Apply remote event", "readwrite-primary-idempotent", (function(u) {
            var s = i.bh.Nh({
                Oh: !0
            });
            // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                        r = i.dh;
            var o = [];
            J$1(n.Zi, (function(n, s) {
                var h = r.get(n);
                if (h) {
                    // Only update the remote keys if the target is still active. This
                    // ensures that we can persist the updated target data along with
                    // the updated assignment.
                    o.push(i._h.Lh(u, s.he, n).next((function() {
                        return i._h.Bh(u, s.se, n);
                    })));
                    var c = s.resumeToken;
                    // Update the resume token if the change includes one.
                                        if (c.Nn() > 0) {
                        var a = h.Fi(c, e).Oi(u.Mh);
                        r = r.lt(n, a), 
                        // Update the target data if there are target changes (or if
                        // sufficient time has passed since the last update).
                        t.qh(h, a, s) && o.push(i._h.Qh(u, a));
                    }
                }
            }));
            var h = si(), c = di();
            // HACK: The only reason we allow a null snapshot version is so that we
            // can synthesize remote events when we get permission denied errors while
            // trying to resolve the state of a locally cached document that is in
            // limbo.
            if (n.ne.forEach((function(t, n) {
                c = c.add(t);
            })), 
            // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
            // documents in advance in a single call.
            o.push(s.getEntries(u, c).next((function(t) {
                n.ne.forEach((function(r, c) {
                    var a = t.get(r);
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.MIN) never add documents to
                    // cache.
                                        c instanceof yn && c.version.isEqual(_t.MIN) ? (
                    // NoDocuments with SnapshotVersion.MIN are used in manufactured
                    // events. We remove these documents from cache since we lost
                    // access.
                    s.js(r, e), h = h.lt(r, c)) : null == a || c.version.h(a.version) > 0 || 0 === c.version.h(a.version) && a.hasPendingWrites ? (C$1(!_t.MIN.isEqual(e), "Cannot add a document when the remote version is zero"), 
                    s.Us(c, e), h = h.lt(r, c)) : A$1(Ue, "Ignoring outdated watch update for ", r, ". Current version:", a.version, " Watch version:", c.version), 
                    n.ie.has(r) && o.push(i.persistence.vo.Gh(u, r));
                }));
            }))), !e.isEqual(_t.MIN)) {
                var a = i._h.xh(u).next((function(t) {
                    return C$1(e.h(t) >= 0, "Watch stream reverted to previous snapshot?? " + e + " < " + t), 
                    i._h.Wh(u, u.Mh, e);
                }));
                o.push(a);
            }
            return de.ks(o).next((function() {
                return s.apply(u);
            })).next((function() {
                return i.Th.th(u, h);
            }));
        })).then((function(t) {
            return i.dh = r, t;
        }));
    }, 
    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
    t.qh = function(t, n, i) {
        // Always persist target data if we don't already have a resume token.
        return C$1(n.resumeToken.Nn() > 0, "Attempted to persist target data with no resume token"), 
        0 === t.resumeToken.Nn() || (n.Ni.M() - t.Ni.M() >= this.zh || i.se.size + i.oe.size + i.he.size > 0);
        // Don't allow resume token changes to be buffered indefinitely. This
        // allows us to be reasonably up-to-date after a crash and avoids needing
        // to loop over all active queries on shutdown. Especially in the browser
        // we may not get time to do anything interesting while the current tab is
        // closing.
        }, 
    /**
     * Notify local store of the changed views to locally pin documents.
     */
    t.prototype.Kh = function(t) {
        for (var n = this, i = 0, e = t; i < e.length; i++) {
            var r = e[i], u = r.targetId;
            if (this.lh.ls(r.oh, u), this.lh.ws(r.hh, u), !r.fromCache) {
                var s = this.dh.get(u);
                C$1(null !== s, "Can't set limbo-free snapshot version for unknown target: " + u);
                // Advance the last limbo free snapshot version
                var o = s.Ni, h = s.Ui(o);
                this.dh = this.dh.lt(u, h);
            }
        }
        return this.persistence.runTransaction("notifyLocalViewChanges", "readwrite-idempotent", (function(i) {
            return de.forEach(t, (function(t) {
                return de.forEach(t.hh, (function(t) {
                    return n.persistence.vo.ds(i, t);
                }));
            }));
        }));
    }, 
    /**
     * Gets the mutation batch after the passed in batchId in the mutation queue
     * or null if empty.
     * @param afterBatchId If provided, the batch to search after.
     * @returns The next mutation or null if there wasn't one.
     */
    t.prototype.Hh = function(t) {
        var n = this;
        return this.persistence.runTransaction("Get next mutation batch", "readonly-idempotent", (function(i) {
            return void 0 === t && (t = -1), n.Jo.So(i, t);
        }));
    }, 
    /**
     * Read the current value of a Document with a given key or null if not
     * found - used for testing.
     */
    t.prototype.Jh = function(t) {
        var n = this;
        return this.persistence.runTransaction("read document", "readonly-idempotent", (function(i) {
            return n.Th.Yo(i, t);
        }));
    }, 
    /**
     * Assigns the given target an internal ID so that its results can be pinned so
     * they don't get GC'd. A target must be allocated in the local store before
     * the store can be used to manage its view.
     *
     * Allocating an already allocated `Target` will return the existing `TargetData`
     * for that `Target`.
     */
    t.prototype.Yh = function(t) {
        var n = this;
        return this.persistence.runTransaction("Allocate target", "readwrite-idempotent", (function(i) {
            var e;
            return n._h.Xh(i, t).next((function(r) {
                return r ? (
                // This target has been listened to previously, so reuse the
                // previous targetID.
                // TODO(mcg): freshen last accessed date?
                e = r, de.resolve(e)) : n._h.$h(i).next((function(r) {
                    return e = new ti(t, r, Kn.Si, i.Mh), n._h.Zh(i, e).next((function() {
                        return e;
                    }));
                }));
            }));
        })).then((function(i) {
            return null === n.dh.get(i.targetId) && (n.dh = n.dh.lt(i.targetId, i), n.vh.set(t, i.targetId)), 
            i;
        }));
    }, 
    /**
     * Returns the TargetData as seen by the LocalStore, including updates that may
     * have not yet been persisted to the TargetCache.
     */
    // Visible for testing.
    t.prototype.Xh = function(t, n) {
        var i = this.vh.get(n);
        return void 0 !== i ? de.resolve(this.dh.get(i)) : this._h.Xh(t, n);
    }, 
    /**
     * Unpin all the documents associated with the given target. If
     * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
     * directly removes the associated target data from the target cache.
     *
     * Releasing a non-existing `Target` is a no-op.
     */
    // PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
    t.prototype.tc = function(t, n) {
        var i = this, e = this.dh.get(t);
        C$1(null !== e, "Tried to release nonexistent target: " + t);
        var r = n ? "readwrite-idempotent" : "readwrite-primary-idempotent";
        return this.persistence.runTransaction("Release target", r, (function(r) {
            // References for documents sent via Watch are automatically removed
            // when we delete a target's data from the reference delegate.
            // Since this does not remove references for locally mutated documents,
            // we have to remove the target associations for these documents
            // manually.
            // This operation needs to be run inside the transaction since EagerGC
            // uses the local view references during the transaction's commit.
            // Fortunately, the operation is safe to be re-run in case the
            // transaction fails since there are no side effects if the target has
            // already been removed.
            var u = i.lh.ms(t);
            return n ? de.resolve() : de.forEach(u, (function(t) {
                return i.persistence.vo.ds(r, t);
            })).next((function() {
                i.persistence.vo.removeTarget(r, e);
            }));
        })).then((function() {
            i.dh = i.dh.remove(t), i.vh.delete(e.target);
        }));
    }, 
    /**
     * Runs the specified query against the local store and returns the results,
     * potentially taking advantage of query data from previous executions (such
     * as the set of remote keys).
     *
     * @param usePreviousResults Whether results from previous executions can
     * be used to optimize this query execution.
     */
    t.prototype.nc = function(t, n) {
        var i = this, e = _t.MIN, r = di();
        return this.persistence.runTransaction("Execute query", "readonly-idempotent", (function(u) {
            return i.Xh(u, t.li()).next((function(t) {
                if (t) return e = t.lastLimboFreeSnapshotVersion, i._h.ic(u, t.targetId).next((function(t) {
                    r = t;
                }));
            })).next((function() {
                return i.fh.nh(u, t, n ? e : _t.MIN, n ? r : di());
            })).next((function(t) {
                return {
                    documents: t,
                    ec: r
                };
            }));
        }));
    }, 
    /**
     * Returns the keys of the documents that are associated with the given
     * target id in the remote table.
     */
    t.prototype.rc = function(t) {
        var n = this;
        return this.persistence.runTransaction("Remote document keys", "readonly-idempotent", (function(i) {
            return n._h.ic(i, t);
        }));
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.uc = function() {
        return this.persistence.uc();
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.sc = function(t) {
        this.Jo.jo(t);
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.oc = function(t) {
        this.persistence.oc(t);
    }, t.prototype.Fh = function(t, n, i) {
        var e = this, r = n.batch, u = r.keys(), s = de.resolve();
        return u.forEach((function(e) {
            s = s.next((function() {
                return i.Ls(t, e);
            })).next((function(t) {
                var u = t, s = n.os.get(e);
                C$1(null !== s, "ackVersions should contain every doc in the write."), (!u || u.version.h(s) < 0) && ((u = r.Wt(e, u, n)) ? 
                // We use the commitVersion as the readTime rather than the
                // document's updateTime since the updateTime is not advanced
                // for updates that do not modify the underlying document.
                i.Us(u, n.ss) : C$1(!t, "Mutation batch " + r + " applied to document " + t + " resulted in null"));
            }));
        })), s.next((function() {
            return e.Jo.Uo(t, r);
        }));
    }, t.prototype.hc = function(t) {
        var n = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary-idempotent", (function(i) {
            return t.cc(i, n.dh);
        }));
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.ac = function(t) {
        var n = this, i = this.dh.get(t);
        return i ? Promise.resolve(i.target) : this.persistence.runTransaction("Get target data", "readonly-idempotent", (function(i) {
            return n._h.Ye(i, t).next((function(t) {
                return t ? t.target : null;
            }));
        }));
    }, 
    /**
     * Returns the set of documents that have been updated since the last call.
     * If this is the first call, returns the set of changes since client
     * initialization. Further invocations will return document changes since
     * the point of rejection.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.fc = function() {
        var t = this;
        return this.persistence.runTransaction("Get new document changes", "readonly-idempotent", (function(n) {
            return t.bh.fc(n, t.wh);
        })).then((function(n) {
            var i = n.lc, e = n.readTime;
            return t.wh = e, i;
        }));
    }, 
    /**
     * Reads the newest document change from persistence and forwards the internal
     * synchronization marker so that calls to `getNewDocumentChanges()`
     * only return changes that happened after client initialization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Ah = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return __generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return t = this, [ 4 /*yield*/ , this.persistence.runTransaction("Synchronize last document change read time", "readonly-idempotent", (function(t) {
                        return n.bh.dc(t);
                    })) ];

                  case 1:
                    return t.wh = i.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * The maximum time to leave a resume token buffered without writing it out.
     * This value is arbitrary: it's long enough to avoid several writes
     * (possibly indefinitely if updates come more frequently than this) but
     * short enough that restarting after crashing will still have a pretty
     * recent resume token.
     */
    t.zh = 3e8, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */
function je(t) {
    return __awaiter(this, void 0, void 0, (function() {
        return __generator(this, (function(n) {
            if (t.code !== L$1.FAILED_PRECONDITION || t.message !== we) throw t;
            return A$1(Ue, "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Le(t, n) {
    var i = t[0], e = t[1], r = n[0], u = n[1], s = V$1(i, r);
    return 0 === s ? V$1(e, u) : s;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ var Be = /** @class */ function() {
    function t(t) {
        this.vc = t, this.buffer = new kt(Le), this.wc = 0;
    }
    return t.prototype.mc = function() {
        return ++this.wc;
    }, t.prototype.pc = function(t) {
        var n = [ t, this.mc() ];
        if (this.buffer.size < this.vc) this.buffer = this.buffer.add(n); else {
            var i = this.buffer.last();
            Le(n, i) < 0 && (this.buffer = this.buffer.delete(i).add(n));
        }
    }, Object.defineProperty(t.prototype, "maxValue", {
        get: function() {
            // Guaranteed to be non-empty. If we decide we are not collecting any
            // sequence numbers, nthSequenceNumber below short-circuits. If we have
            // decided that we are collecting n sequence numbers, it's because n is some
            // percentage of the existing sequence numbers. That means we should never
            // be in a situation where we are collecting sequence numbers but don't
            // actually have any.
            return this.buffer.last()[0];
        },
        enumerable: !0,
        configurable: !0
    }), t;
}(), Me = {
    gc: !1,
    bc: 0,
    yc: 0,
    _c: 0
}, qe = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    n, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    i) {
        this.Ic = t, this.Tc = n, this.Ec = i;
    }
    return t.Rc = function(n) {
        return new t(n, t.Ac, t.Dc);
    }, t.Pc = -1, t.Sc = 1048576, t.Cc = 41943040, t.Ac = 10, t.Dc = 1e3, t.kc = new t(t.Cc, t.Ac, t.Dc), 
    t.DISABLED = new t(t.Pc, 0, 0), t;
}(), Qe = /** @class */ function() {
    function t(t, n, i) {
        this.Vc = t, this.Pu = n, this.Nc = i, this.Oc = !1, this.Fc = null;
    }
    return t.prototype.start = function() {
        C$1(null === this.Fc, "Cannot start an already started LruScheduler"), this.Vc.params.Ic !== qe.Pc && this.Uc();
    }, t.prototype.stop = function() {
        this.Fc && (this.Fc.cancel(), this.Fc = null);
    }, Object.defineProperty(t.prototype, "mh", {
        get: function() {
            return null !== this.Fc;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Uc = function() {
        var t = this;
        C$1(null === this.Fc, "Cannot schedule GC while a task is pending");
        var n = this.Oc ? 3e5 : 6e4;
        A$1("LruGarbageCollector", "Garbage collection scheduled in " + n + "ms"), this.Fc = this.Pu.Yu(zi.Au, n, (function() {
            return t.Fc = null, t.Oc = !0, t.Nc.hc(t.Vc).then((function() {
                return t.Uc();
            })).catch(je);
        }));
    }, t;
}(), Ge = /** @class */ function() {
    function t(t, n) {
        this.xc = t, this.params = n;
    }
    /** Given a percentile of target to collect, returns the number of targets to collect. */    return t.prototype.jc = function(t, n) {
        return this.xc.Lc(t).next((function(t) {
            return Math.floor(n / 100 * t);
        }));
    }, 
    /** Returns the nth sequence number, counting in order from the smallest. */
    t.prototype.Bc = function(t, n) {
        var i = this;
        if (0 === n) return de.resolve(Yi.gu);
        var e = new Be(n);
        return this.xc.Le(t, (function(t) {
            return e.pc(t.sequenceNumber);
        })).next((function() {
            return i.xc.Mc(t, (function(t) {
                return e.pc(t);
            }));
        })).next((function() {
            return e.maxValue;
        }));
    }, 
    /**
     * Removes targets with a sequence number equal to or less than the given upper bound, and removes
     * document associations with those targets.
     */
    t.prototype.qc = function(t, n, i) {
        return this.xc.qc(t, n, i);
    }, 
    /**
     * Removes documents that have a sequence number equal to or less than the upper bound and are not
     * otherwise pinned.
     */
    t.prototype.Qc = function(t, n) {
        return this.xc.Qc(t, n);
    }, t.prototype.cc = function(t, n) {
        var i = this;
        return this.params.Ic === qe.Pc ? (A$1("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        de.resolve(Me)) : this.Gc(t).next((function(e) {
            return e < i.params.Ic ? (A$1("LruGarbageCollector", "Garbage collection skipped; Cache size " + e + " is lower than threshold " + i.params.Ic), 
            Me) : i.Wc(t, n);
        }));
    }, t.prototype.Gc = function(t) {
        return this.xc.Gc(t);
    }, t.prototype.Wc = function(t, n) {
        var i, e, r, u, s, o, h, c = this, a = Date.now();
        return this.jc(t, this.params.Tc).next((function(n) {
            // Cap at the configured max
            return n > c.params.Ec ? (A$1("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + c.params.Ec + " from " + n), 
            e = c.params.Ec) : e = n, u = Date.now(), c.Bc(t, e);
        })).next((function(e) {
            return i = e, s = Date.now(), c.qc(t, i, n);
        })).next((function(n) {
            return r = n, o = Date.now(), c.Qc(t, i);
        })).next((function(t) {
            (h = Date.now(), E() <= _.DEBUG) && A$1("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (u - a) + "ms\n\tDetermined least recently used " + e + " in " + (s - u) + "ms\n\tRemoved " + r + " targets in " + (o - s) + "ms\n\tRemoved " + t + " documents in " + (h - o) + "ms\nTotal Duration: " + (h - a) + "ms");
            return de.resolve({
                gc: !0,
                bc: e,
                yc: r,
                _c: t
            });
        }));
    }, t;
}(), We = /** @class */ function() {
    function t(t, n) {
        this.vo = t, this.serializer = n, 
        // PORTING NOTE: We don't cache global metadata for the target cache, since
        // some of it (in particular `highestTargetId`) can be modified by secondary
        // tabs. We could perhaps be more granular (and e.g. still cache
        // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
        // to IndexedDb whenever we need to read metadata. We can revisit if it turns
        // out to have a meaningful performance impact.
        this.zc = Ne.zo();
    }
    return t.prototype.$h = function(t) {
        var n = this;
        return this.Kc(t).next((function(i) {
            return i.highestTargetId = n.zc.after(i.highestTargetId), n.Hc(t, i).next((function() {
                return i.highestTargetId;
            }));
        }));
    }, t.prototype.xh = function(t) {
        return this.Kc(t).next((function(t) {
            return _t.L(new yt(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        }));
    }, t.prototype.Jc = function(t) {
        return He(t.xo);
    }, t.prototype.Wh = function(t, n, i) {
        var e = this;
        return this.Kc(t).next((function(r) {
            return r.highestListenSequenceNumber = n, i && (r.lastRemoteSnapshotVersion = i.q()), 
            n > r.highestListenSequenceNumber && (r.highestListenSequenceNumber = n), e.Hc(t, r);
        }));
    }, t.prototype.Zh = function(t, n) {
        var i = this;
        return this.Yc(t, n).next((function() {
            return i.Kc(t).next((function(e) {
                return e.targetCount += 1, i.Xc(n, e), i.Hc(t, e);
            }));
        }));
    }, t.prototype.Qh = function(t, n) {
        return this.Yc(t, n);
    }, t.prototype.$c = function(t, n) {
        var i = this;
        return this.Zc(t, n.targetId).next((function() {
            return ze(t).delete(n.targetId);
        })).next((function() {
            return i.Kc(t);
        })).next((function(n) {
            return C$1(n.targetCount > 0, "Removing from an empty target cache"), n.targetCount -= 1, 
            i.Hc(t, n);
        }));
    }, 
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */
    t.prototype.qc = function(t, n, i) {
        var e = this, r = 0, u = [];
        return ze(t).fo((function(s, o) {
            var h = e.serializer.ta(o);
            h.sequenceNumber <= n && null === i.get(h.targetId) && (r++, u.push(e.$c(t, h)));
        })).next((function() {
            return de.ks(u);
        })).next((function() {
            return r;
        }));
    }, 
    /**
     * Call provided function with each `TargetData` that we have cached.
     */
    t.prototype.Le = function(t, n) {
        var i = this;
        return ze(t).fo((function(t, e) {
            var r = i.serializer.ta(e);
            n(r);
        }));
    }, t.prototype.Kc = function(t) {
        return Ke(t.xo);
    }, t.prototype.Hc = function(t, n) {
        return (i = t, Sr.$s(i, mr.store)).put(mr.key, n);
        /**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */
        var i;
    }, t.prototype.Yc = function(t, n) {
        return ze(t).put(this.serializer.na(n));
    }, 
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */
    t.prototype.Xc = function(t, n) {
        var i = !1;
        return t.targetId > n.highestTargetId && (n.highestTargetId = t.targetId, i = !0), 
        t.sequenceNumber > n.highestListenSequenceNumber && (n.highestListenSequenceNumber = t.sequenceNumber, 
        i = !0), i;
    }, t.prototype.ia = function(t) {
        return this.Kc(t).next((function(t) {
            return t.targetCount;
        }));
    }, t.prototype.Xh = function(t, n) {
        var i = this, e = n.canonicalId(), r = IDBKeyRange.bound([ e, Number.NEGATIVE_INFINITY ], [ e, Number.POSITIVE_INFINITY ]), u = null;
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
                return ze(t).fo({
            range: r,
            index: vr.queryTargetsIndexName
        }, (function(t, e, r) {
            var s = i.serializer.ta(e);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        n.isEqual(s.target) && (u = s, r.done());
        })).next((function() {
            return u;
        }));
    }, t.prototype.Bh = function(t, n, i) {
        var e = this, r = [], u = Je(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return n.forEach((function(n) {
            var s = re(n.path);
            r.push(u.put(new wr(i, s))), r.push(e.vo.fs(t, n));
        })), de.ks(r);
    }, t.prototype.Lh = function(t, n, i) {
        var e = this, r = Je(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return de.forEach(n, (function(n) {
            var u = re(n.path);
            return de.ks([ r.delete([ i, u ]), e.vo.ds(t, n) ]);
        }));
    }, t.prototype.Zc = function(t, n) {
        var i = Je(t), e = IDBKeyRange.bound([ n ], [ n + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return i.delete(e);
    }, t.prototype.ic = function(t, n) {
        var i = IDBKeyRange.bound([ n ], [ n + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), e = Je(t), r = di();
        return e.fo({
            range: i,
            ao: !0
        }, (function(t, n, i) {
            var e = oe(t[1]), u = new At(e);
            r = r.add(u);
        })).next((function() {
            return r;
        }));
    }, t.prototype.bs = function(t, n) {
        var i = re(n.path), e = IDBKeyRange.bound([ i ], [ O$1(i) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), r = 0;
        return Je(t).fo({
            index: wr.documentTargetsIndex,
            ao: !0,
            range: e
        }, (function(t, n, i) {
            var e = t[0];
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
                        t[1];
            0 !== e && (r++, i.done());
        })).next((function() {
            return r > 0;
        }));
    }, t.prototype.Ye = function(t, n) {
        var i = this;
        return ze(t).get(n).next((function(t) {
            return t ? i.serializer.ta(t) : null;
        }));
    }, t;
}();

/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */
function ze(t) {
    return Sr.$s(t, vr.store);
}

function Ke(t) {
    return pe.$s(t, mr.store).get(mr.key).next((function(t) {
        return C$1(null !== t, "Missing metadata row."), t;
    }));
}

function He(t) {
    return Ke(t).next((function(t) {
        return t.highestListenSequenceNumber;
    }));
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function Je(t) {
    return Sr.$s(t, wr.store);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ye = /** @class */ function() {
    /**
     * @param {LocalSerializer} serializer The document serializer.
     * @param {IndexManager} indexManager The query indexes that need to be maintained.
     */
    function t(t, n) {
        this.serializer = t, this.do = n;
    }
    /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */    return t.prototype.Us = function(t, n, i) {
        return $e(t).put(Ze(n), i);
    }, 
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    t.prototype.js = function(t, n) {
        var i = $e(t), e = Ze(n);
        return i.delete(e);
    }, 
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */
    t.prototype.updateMetadata = function(t, n) {
        var i = this;
        return this.getMetadata(t).next((function(e) {
            return e.byteSize += n, i.ea(t, e);
        }));
    }, t.prototype.Ls = function(t, n) {
        var i = this;
        return $e(t).get(Ze(n)).next((function(t) {
            return i.ra(t);
        }));
    }, 
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey The key of the entry to look up.
     * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
     */
    t.prototype.ua = function(t, n) {
        var i = this;
        return $e(t).get(Ze(n)).next((function(t) {
            var n = i.ra(t);
            return n ? {
                sa: n,
                size: tr(t)
            } : null;
        }));
    }, t.prototype.getEntries = function(t, n) {
        var i = this, e = oi();
        return this.oa(t, n, (function(t, n) {
            var r = i.ra(n);
            e = e.lt(t, r);
        })).next((function() {
            return e;
        }));
    }, 
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys The set of keys entries to look up.
     * @return A map of MaybeDocuments indexed by key (if a document cannot be
     *     found, the key will be mapped to null) and a map of sizes indexed by
     *     key (zero if the key cannot be found).
     */
    t.prototype.ha = function(t, n) {
        var i = this, e = oi(), r = new Dt(At.G);
        return this.oa(t, n, (function(t, n) {
            var u = i.ra(n);
            u ? (e = e.lt(t, u), r = r.lt(t, tr(n))) : (e = e.lt(t, null), r = r.lt(t, 0));
        })).next((function() {
            return {
                ca: e,
                aa: r
            };
        }));
    }, t.prototype.oa = function(t, n, i) {
        if (n.J()) return de.resolve();
        var e = IDBKeyRange.bound(n.first().path.tt(), n.last().path.tt()), r = n.bt(), u = r.Rt();
        return $e(t).fo({
            range: e
        }, (function(t, n, e) {
            // Go through keys not found in cache.
            for (var s = At.at(t); u && At.G(u, s) < 0; ) i(u, null), u = r.Rt();
            u && u.isEqual(s) && (
            // Key found in cache.
            i(u, n), u = r.At() ? r.Rt() : null), 
            // Skip to the next key (if there is one).
            u ? e.uo(u.path.tt()) : e.done();
        })).next((function() {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;u; ) i(u, null), u = r.At() ? r.Rt() : null;
        }));
    }, t.prototype.nh = function(t, n, i) {
        var e = this;
        C$1(!n._i(), "CollectionGroup queries should be handled in LocalDocumentsView");
        var r = ci(), u = n.path.length + 1, s = {};
        if (i.isEqual(_t.MIN)) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            var o = n.path.tt();
            s.range = IDBKeyRange.lowerBound(o);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            var h = n.path.tt(), c = this.serializer.fa(i);
            s.range = IDBKeyRange.lowerBound([ h, c ], 
            /* open= */ !0), s.index = lr.collectionReadTimeIndex;
        }
        return $e(t).fo(s, (function(t, i, s) {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length === u) {
                var o = e.serializer.la(i);
                n.path.$(o.key.path) ? o instanceof bn && n.matches(o) && (r = r.lt(o.key, o)) : s.done();
            }
        })).next((function() {
            return r;
        }));
    }, t.prototype.fc = function(t, n) {
        var i = this, e = si(), r = this.serializer.fa(n), u = $e(t), s = IDBKeyRange.lowerBound(r, !0);
        return u.fo({
            index: lr.readTimeIndex,
            range: s
        }, (function(t, n) {
            // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
            // the documents directly since we want to keep sentinel deletes.
            var u = i.serializer.la(n);
            e = e.lt(u.key, u), r = n.readTime;
        })).next((function() {
            return {
                lc: e,
                readTime: i.serializer.da(r)
            };
        }));
    }, t.prototype.dc = function(t) {
        var n = this, i = $e(t), e = _t.MIN;
        return i.fo({
            index: lr.readTimeIndex,
            reverse: !0
        }, (function(t, i, r) {
            i.readTime && (e = n.serializer.da(i.readTime)), r.done();
        })).next((function() {
            return e;
        }));
    }, t.prototype.Nh = function(n) {
        return new t.va(this, !!n && n.Oh);
    }, t.prototype.wa = function(t) {
        return this.getMetadata(t).next((function(t) {
            return t.byteSize;
        }));
    }, t.prototype.getMetadata = function(t) {
        return Xe(t).get(dr.key).next((function(t) {
            return C$1(!!t, "Missing document cache metadata"), t;
        }));
    }, t.prototype.ea = function(t, n) {
        return Xe(t).put(dr.key, n);
    }, 
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */
    t.prototype.ra = function(t) {
        if (t) {
            var n = this.serializer.la(t);
            return n instanceof yn && n.version.isEqual(_t.B()) ? null : n;
        }
        return null;
    }, 
    /**
     * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
     *
     * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
     * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
     * when we apply the changes.
     */
    t.va = /** @class */ function(t) {
        /**
         * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
         * @param trackRemovals Whether to create sentinel deletes that can be tracked by
         * `getNewDocumentChanges()`.
         */
        function n(n, i) {
            var e = t.call(this) || this;
            return e.ma = n, e.Oh = i, 
            // A map of document sizes prior to applying the changes in this buffer.
            e.pa = new le((function(t) {
                return t.toString();
            })), e;
        }
        return __extends(n, t), n.prototype.qs = function(t) {
            var n = this, i = [], e = 0, r = new kt((function(t, n) {
                return V$1(t.nt(), n.nt());
            }));
            return this.Ns.forEach((function(u, s) {
                var o = n.pa.get(u);
                if (C$1(void 0 !== o, "Cannot modify a document that wasn't read (for " + u + ")"), 
                s) {
                    C$1(!n.readTime.isEqual(_t.MIN), "Cannot add a document with a read time of zero");
                    var h = n.ma.serializer.ga(s, n.readTime);
                    r = r.add(u.path.H());
                    var c = tr(h);
                    e += c - o, i.push(n.ma.Us(t, u, h));
                } else if (e -= o, n.Oh) {
                    // In order to track removals, we store a "sentinel delete" in the
                    // RemoteDocumentCache. This entry is represented by a NoDocument
                    // with a version of 0 and ignored by `maybeDecodeDocument()` but
                    // preserved in `getNewDocumentChanges()`.
                    var a = n.ma.serializer.ga(new yn(u, _t.B()), n.readTime);
                    i.push(n.ma.Us(t, u, a));
                } else i.push(n.ma.js(t, u));
            })), r.forEach((function(e) {
                i.push(n.ma.do.Ro(t, e));
            })), i.push(this.ma.updateMetadata(t, e)), de.ks(i);
        }, n.prototype.Bs = function(t, n) {
            var i = this;
            // Record the size of everything we load from the cache so we can compute a delta later.
                        return this.ma.ua(t, n).next((function(t) {
                return null === t ? (i.pa.set(n, 0), null) : (i.pa.set(n, t.size), t.sa);
            }));
        }, n.prototype.Ms = function(t, n) {
            var i = this;
            // Record the size of everything we load from the cache so we can compute
            // a delta later.
                        return this.ma.ha(t, n).next((function(t) {
                var n = t.ca;
                // Note: `getAllFromCache` returns two maps instead of a single map from
                // keys to `DocumentSizeEntry`s. This is to allow returning the
                // `NullableMaybeDocumentMap` directly, without a conversion.
                                return t.aa.forEach((function(t, n) {
                    i.pa.set(t, n);
                })), n;
            }));
        }, n;
    }(ve), t;
}();

function Xe(t) {
    return Sr.$s(t, dr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function $e(t) {
    return Sr.$s(t, lr.store);
}

function Ze(t) {
    return t.path.tt();
}

/**
 * Retrusn an approximate size for the given document.
 */ function tr(t) {
    var n;
    if (t.document) n = t.document; else if (t.unknownDocument) n = t.unknownDocument; else {
        if (!t.noDocument) throw S$1("Unknown remote document type");
        n = t.noDocument;
    }
    return JSON.stringify(n).length;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */ var nr = /** @class */ function() {
    function t() {
        this.ba = new ir;
    }
    return t.prototype.Ro = function(t, n) {
        return this.ba.add(n), de.resolve();
    }, t.prototype.uh = function(t, n) {
        return de.resolve(this.ba.getEntries(n));
    }, t;
}(), ir = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        C$1(t.length % 2 == 1, "Expected a collection path.");
        var n = t.X(), i = t.H(), e = this.index[n] || new kt(Tt.G), r = !e.has(i);
        return this.index[n] = e.add(i), r;
    }, t.prototype.has = function(t) {
        var n = t.X(), i = t.H(), e = this.index[n];
        return e && e.has(i);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new kt(Tt.G)).tt();
    }, t;
}(), er = 9, rr = /** @class */ function() {
    function t(t) {
        this.serializer = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    return t.prototype.createOrUpgrade = function(t, n, i, e) {
        var r = this;
        C$1(i < e && i >= 0 && e <= er, "Unexpected schema upgrade from v" + i + " to v{toVersion}.");
        var u = new be(n);
        i < 1 && e >= 1 && (function(t) {
            t.createObjectStore(sr.store);
        }
        /**
 * An object to be stored in the 'mutationQueues' store in IndexedDb.
 *
 * Each user gets a single queue of MutationBatches to apply to the server.
 * DbMutationQueue tracks the metadata about the queue.
 */ (t), function(t) {
            t.createObjectStore(or.store, {
                keyPath: or.keyPath
            }), t.createObjectStore(hr.store, {
                keyPath: hr.keyPath,
                autoIncrement: !0
            }).createIndex(hr.userMutationsIndex, hr.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(cr.store);
        }
        /**
 * Upgrade function to migrate the 'mutations' store from V1 to V3. Loads
 * and rewrites all data.
 */ (t), gr(t), function(t) {
            t.createObjectStore(lr.store);
        }
        /**
 * Represents the known absence of a document at a particular version.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ (t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
                var s = de.resolve();
        return i < 3 && e >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== i && (!function(t) {
            t.deleteObjectStore(wr.store), t.deleteObjectStore(vr.store), t.deleteObjectStore(mr.store);
        }(t), gr(t)), s = s.next((function() {
            /**
 * Creates the target global singleton row.
 *
 * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
 */ return function(t) {
                var n = t.store(mr.store), i = new mr(
                /*highestTargetId=*/ 0, 
                /*lastListenSequenceNumber=*/ 0, _t.MIN.q(), 
                /*targetCount=*/ 0);
                return n.put(mr.key, i);
            }
            /**
 * Creates indices on the RemoteDocuments store used for both multi-tab
 * and Index-Free queries.
 */ (u);
        }))), i < 4 && e >= 4 && (0 !== i && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        s = s.next((function() {
            return function(t, n) {
                return n.store(hr.store).oo().next((function(i) {
                    t.deleteObjectStore(hr.store), t.createObjectStore(hr.store, {
                        keyPath: hr.keyPath,
                        autoIncrement: !0
                    }).createIndex(hr.userMutationsIndex, hr.userMutationsKeyPath, {
                        unique: !0
                    });
                    var e = n.store(hr.store), r = i.map((function(t) {
                        return e.put(t);
                    }));
                    return de.ks(r);
                }));
            }
            /**
 * An object to be stored in the 'documentMutations' store in IndexedDb.
 *
 * A manually maintained index of all the mutation batches that affect a given
 * document key. The rows in this table are references based on the contents of
 * DbMutationBatch.mutations.
 */ (t, u);
        }))), s = s.next((function() {
            !function(t) {
                t.createObjectStore(br.store, {
                    keyPath: br.keyPath
                });
            }
            // Visible for testing
            (t);
        }))), i < 5 && e >= 5 && (s = s.next((function() {
            return r.removeAcknowledgedMutations(u);
        }))), i < 6 && e >= 6 && (s = s.next((function() {
            return function(t) {
                t.createObjectStore(dr.store);
            }
            /**
 * An object to be stored in the 'targets' store in IndexedDb.
 *
 * This is based on and should be kept in sync with the proto used in the iOS
 * client.
 *
 * Each query the client listens to against the server is tracked on disk so
 * that the query can be efficiently resumed on restart.
 */ (t), r.addDocumentGlobal(u);
        }))), i < 7 && e >= 7 && (s = s.next((function() {
            return r.ensureSequenceNumbers(u);
        }))), i < 8 && e >= 8 && (s = s.next((function() {
            return r.createCollectionParentIndex(t, u);
        }))), i < 9 && e >= 9 && (s = s.next((function() {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                var n = t.objectStore(lr.store);
                n.createIndex(lr.readTimeIndex, lr.readTimeIndexPath, {
                    unique: !1
                }), n.createIndex(lr.collectionReadTimeIndex, lr.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }
            /**
 * A record of the metadata state of each client.
 *
 * PORTING NOTE: This is used to synchronize multi-tab state and does not need
 * to be ported to iOS or Android.
 */ (n);
        }))), s;
    }, t.prototype.addDocumentGlobal = function(t) {
        var n = 0;
        return t.store(lr.store).fo((function(t, i) {
            n += tr(i);
        })).next((function() {
            var i = new dr(n);
            return t.store(dr.store).put(dr.key, i);
        }));
    }, t.prototype.removeAcknowledgedMutations = function(t) {
        var n = this, i = t.store(or.store), e = t.store(hr.store);
        return i.oo().next((function(i) {
            return de.forEach(i, (function(i) {
                var r = IDBKeyRange.bound([ i.userId, -1 ], [ i.userId, i.lastAcknowledgedBatchId ]);
                return e.oo(hr.userMutationsIndex, r).next((function(e) {
                    return de.forEach(e, (function(e) {
                        C$1(e.userId === i.userId, "Cannot process batch " + e.batchId + " from unexpected user");
                        var r = n.serializer.Do(e);
                        return Ae(t, i.userId, r).next((function() {}));
                    }));
                }));
            }));
        }));
    }, 
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */
    t.prototype.ensureSequenceNumbers = function(t) {
        var n = t.store(wr.store), i = t.store(lr.store);
        return He(t).next((function(t) {
            var e = [];
            return i.fo((function(i, r) {
                var u = new Tt(i), s = function(t) {
                    return [ 0, re(t) ];
                }
                /**
 * Wrapper class to store timestamps (seconds and nanos) in IndexedDb objects.
 */ (u);
                e.push(n.get(s).next((function(i) {
                    return i ? de.resolve() : function(i) {
                        return n.put(new wr(0, re(i), t));
                    }(u);
                })));
            })).next((function() {
                return de.ks(e);
            }));
        }));
    }, t.prototype.createCollectionParentIndex = function(t, n) {
        // Create the index.
        t.createObjectStore(pr.store, {
            keyPath: pr.keyPath
        });
        var i = n.store(pr.store), e = new ir, r = function(t) {
            if (e.add(t)) {
                var n = t.X(), r = t.H();
                return i.put({
                    collectionId: n,
                    parent: re(r)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
                // Index existing remote documents.
        return n.store(lr.store).fo({
            ao: !0
        }, (function(t, n) {
            var i = new Tt(t);
            return r(i.H());
        })).next((function() {
            // Index existing mutations.
            return n.store(cr.store).fo({
                ao: !0
            }, (function(t, n) {
                t[0];
                var i = t[1], e = (t[2], oe(i));
                return r(e.H());
            }));
        }));
    }, t;
}();

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */ var ur = function(t, n) {
    this.seconds = t, this.nanoseconds = n;
}, sr = /** @class */ function() {
    function t(t, 
    /** Whether to allow shared access from multiple tabs. */
    n, i) {
        this.ownerId = t, this.allowTabSynchronization = n, this.leaseTimestampMs = i;
    }
    /**
     * Name of the IndexedDb object store.
     *
     * Note that the name 'owner' is chosen to ensure backwards compatibility with
     * older clients that only supported single locked access to the persistence
     * layer.
     */    return t.store = "owner", 
    /**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
    t.key = "owner", t;
}();

/**
 * A singleton object to be stored in the 'owner' store in IndexedDb.
 *
 * A given database can have a single primary tab assigned at a given time. That
 * tab must validate that it is still holding the primary lease before every
 * operation that requires locked access. The primary tab should regularly
 * write an updated timestamp to this lease to prevent other tabs from
 * "stealing" the primary lease
 */ var or = /** @class */ function() {
    function t(
    /**
     * The normalized user ID to which this queue belongs.
     */
    t, 
    /**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
    n, 
    /**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     */
    i) {
        this.userId = t, this.lastAcknowledgedBatchId = n, this.lastStreamToken = i;
    }
    /** Name of the IndexedDb object store.  */    return t.store = "mutationQueues", 
    /** Keys are automatically assigned via the userId property. */
    t.keyPath = "userId", t;
}(), hr = /** @class */ function() {
    function t(
    /**
     * The normalized user ID to which this batch belongs.
     */
    t, 
    /**
     * An identifier for this batch, allocated using an auto-generated key.
     */
    n, 
    /**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
    i, 
    /**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
    e, 
    /**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via JsonProtoSerializer.toMutation().
     */
    r) {
        this.userId = t, this.batchId = n, this.localWriteTimeMs = i, this.baseMutations = e, 
        this.mutations = r;
    }
    /** Name of the IndexedDb object store.  */    return t.store = "mutations", 
    /** Keys are automatically assigned via the userId, batchId properties. */
    t.keyPath = "batchId", 
    /** The index name for lookup of mutations by user. */
    t.userMutationsIndex = "userMutationsIndex", 
    /** The user mutations index is keyed by [userId, batchId] pairs. */
    t.userMutationsKeyPath = [ "userId", "batchId" ], t;
}();

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */ var cr = /** @class */ function() {
    function t() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    return t.prefixForUser = function(t) {
        return [ t ];
    }, 
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */
    t.prefixForPath = function(t, n) {
        return [ t, re(n) ];
    }, 
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */
    t.key = function(t, n, i) {
        return [ t, re(n), i ];
    }, t.store = "documentMutations", 
    /**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
    t.PLACEHOLDER = new t, t;
}();

var ar = function(t, n) {
    this.path = t, this.readTime = n;
}, fr = function(t, n) {
    this.path = t, this.version = n;
}, lr = /** @class */ function() {
    // TODO: We are currently storing full document keys almost three times
    // (once as part of the primary key, once - partly - as `parentPath` and once
    // inside the encoded documents). During our next migration, we should
    // rewrite the primary key as parentPath + document ID which would allow us
    // to drop one value.
    function t(
    /**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
    t, 
    /**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
    n, 
    /**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
    i, 
    /**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
    e, 
    /**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
    r, 
    /**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
    u) {
        this.unknownDocument = t, this.noDocument = n, this.document = i, this.hasCommittedMutations = e, 
        this.readTime = r, this.parentPath = u;
    }
    return t.store = "remoteDocuments", 
    /**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
    t.readTimeIndex = "readTimeIndex", t.readTimeIndexPath = "readTime", 
    /**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
    t.collectionReadTimeIndex = "collectionReadTimeIndex", t.collectionReadTimeIndexPath = [ "parentPath", "readTime" ], 
    t;
}(), dr = /** @class */ function() {
    /**
     * @param byteSize Approximately the total size in bytes of all the documents in the document
     * cache.
     */
    function t(t) {
        this.byteSize = t;
    }
    return t.store = "remoteDocumentGlobal", t.key = "remoteDocumentGlobalKey", t;
}();

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ var vr = /** @class */ function() {
    function t(
    /**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
    t, 
    /**
     * The canonical string representing this query. This is not unique.
     */
    n, 
    /**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
    i, 
    /**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
    e, 
    /**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
    r, 
    /**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
    u, 
    /**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
    s) {
        this.targetId = t, this.canonicalId = n, this.readTime = i, this.resumeToken = e, 
        this.lastListenSequenceNumber = r, this.lastLimboFreeSnapshotVersion = u, this.query = s;
    }
    return t.store = "targets", 
    /** Keys are automatically assigned via the targetId property. */
    t.keyPath = "targetId", 
    /** The name of the queryTargets index. */
    t.queryTargetsIndexName = "queryTargetsIndex", 
    /**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
    t.queryTargetsKeyPath = [ "canonicalId", "targetId" ], t;
}(), wr = /** @class */ function() {
    function t(
    /**
     * The targetId identifying a target or 0 for a sentinel row.
     */
    t, 
    /**
     * The path to the document, as encoded in the key.
     */
    n, 
    /**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
    i) {
        this.targetId = t, this.path = n, this.sequenceNumber = i, C$1(0 === t == (void 0 !== i), "A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number");
    }
    /** Name of the IndexedDb object store.  */    return t.store = "targetDocuments", 
    /** Keys are automatically assigned via the targetId, path properties. */
    t.keyPath = [ "targetId", "path" ], 
    /** The index name for the reverse index. */
    t.documentTargetsIndex = "documentTargetsIndex", 
    /** We also need to create the reverse index for these properties. */
    t.documentTargetsKeyPath = [ "path", "targetId" ], t;
}(), mr = /** @class */ function() {
    function t(
    /**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
    t, 
    /**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
    n, 
    /**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
    i, 
    /**
     * The number of targets persisted.
     */
    e) {
        this.highestTargetId = t, this.highestListenSequenceNumber = n, this.lastRemoteSnapshotVersion = i, 
        this.targetCount = e;
    }
    /**
     * The key string used for the single object that exists in the
     * DbTargetGlobal store.
     */    return t.key = "targetGlobalKey", t.store = "targetGlobal", t;
}(), pr = /** @class */ function() {
    function t(
    /**
     * The collectionId (e.g. 'messages')
     */
    t, 
    /**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
    n) {
        this.collectionId = t, this.parent = n;
    }
    /** Name of the IndexedDb object store. */    return t.store = "collectionParents", 
    /** Keys are automatically assigned via the collectionId, parent properties. */
    t.keyPath = [ "collectionId", "parent" ], t;
}();

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */ function gr(t) {
    t.createObjectStore(wr.store, {
        keyPath: wr.keyPath
    }).createIndex(wr.documentTargetsIndex, wr.documentTargetsKeyPath, {
        unique: !0
    }), 
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(vr.store, {
        keyPath: vr.keyPath
    }).createIndex(vr.queryTargetsIndexName, vr.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(mr.store);
}

var br = /** @class */ function() {
    function t(
    // Note: Previous schema versions included a field
    // "lastProcessedDocumentChangeId". Don't use anymore.
    /** The auto-generated client id assigned at client startup. */
    t, 
    /** The last time this state was updated. */
    n, 
    /** Whether the client's network connection is enabled. */
    i, 
    /** Whether this client is running in a foreground tab. */
    e) {
        this.clientId = t, this.updateTimeMs = n, this.networkEnabled = i, this.inForeground = e;
    }
    /** Name of the IndexedDb object store. */    return t.store = "clientMetadata", 
    /** Keys are automatically assigned via the clientId properties. */
    t.keyPath = "clientId", t;
}();

var yr = [ or.store, hr.store, cr.store, lr.store, vr.store, sr.store, mr.store, wr.store ], _r = __spreadArrays(yr, [ br.store ]), Ir = __spreadArrays(_r, [ dr.store ]), Tr = __spreadArrays(Ir, [ pr.store ]), Er = /** @class */ function() {
    function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.ya = new ir;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    return t.prototype.Ro = function(t, n) {
        var i = this;
        if (C$1(n.length % 2 == 1, "Expected a collection path."), !this.ya.has(n)) {
            var e = n.X(), r = n.H();
            t.Gs((function() {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                i.ya.add(n);
            }));
            var u = {
                collectionId: e,
                parent: re(r)
            };
            return Rr(t).put(u);
        }
        return de.resolve();
    }, t.prototype.uh = function(t, n) {
        var i = [], e = IDBKeyRange.bound([ n, "" ], [ O$1(n), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return Rr(t).oo(e).next((function(t) {
            for (var e = 0, r = t; e < r.length; e++) {
                var u = r[e];
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                                if (u.collectionId !== n) break;
                i.push(oe(u.parent));
            }
            return i;
        }));
    }, t;
}();

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */
function Rr(t) {
    return Sr.$s(t, pr.store);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Serializer for values stored in the LocalStore. */ var Ar = /** @class */ function() {
    function t(t) {
        this._a = t;
    }
    /** Decodes a remote document from storage locally to a Document. */    return t.prototype.la = function(t) {
        if (t.document) return this._a.Er(t.document, !!t.hasCommittedMutations);
        if (t.noDocument) {
            var n = At.at(t.noDocument.path), i = this.Ia(t.noDocument.readTime);
            return new yn(n, i, {
                hasCommittedMutations: !!t.hasCommittedMutations
            });
        }
        if (t.unknownDocument) {
            n = At.at(t.unknownDocument.path), i = this.Ia(t.unknownDocument.version);
            return new _n(n, i);
        }
        return S$1("Unexpected DbRemoteDocument");
    }, 
    /** Encodes a document for storage locally. */
    t.prototype.ga = function(t, n) {
        var i = this.fa(n), e = t.key.path.H().tt();
        if (t instanceof bn) {
            var r = t.proto ? t.proto : this._a.Tr(t), u = t.hasCommittedMutations;
            return new lr(
            /* unknownDocument= */ null, 
            /* noDocument= */ null, r, u, i, e);
        }
        if (t instanceof yn) {
            var s = t.key.path.tt(), o = this.Ta(t.version);
            u = t.hasCommittedMutations;
            return new lr(
            /* unknownDocument= */ null, new ar(s, o), 
            /* document= */ null, u, i, e);
        }
        if (t instanceof _n) {
            s = t.key.path.tt();
            var h = this.Ta(t.version);
            return new lr(new fr(s, h), 
            /* noDocument= */ null, 
            /* document= */ null, 
            /* hasCommittedMutations= */ !0, i, e);
        }
        return S$1("Unexpected MaybeDocument");
    }, t.prototype.fa = function(t) {
        var n = t.q();
        return [ n.seconds, n.nanoseconds ];
    }, t.prototype.da = function(t) {
        var n = new yt(t[0], t[1]);
        return _t.L(n);
    }, t.prototype.Ta = function(t) {
        var n = t.q();
        return new ur(n.seconds, n.nanoseconds);
    }, t.prototype.Ia = function(t) {
        var n = new yt(t.seconds, t.nanoseconds);
        return _t.L(n);
    }, 
    /** Encodes a batch of mutations into a DbMutationBatch for local storage. */
    t.prototype.Eo = function(t, n) {
        var i = this, e = n.baseMutations.map((function(t) {
            return i._a.Nr(t);
        })), r = n.mutations.map((function(t) {
            return i._a.Nr(t);
        }));
        return new hr(t, n.batchId, n.jn.toMillis(), e, r);
    }, 
    /** Decodes a DbMutationBatch into a MutationBatch */
    t.prototype.Do = function(t) {
        var n = this, i = (t.baseMutations || []).map((function(t) {
            return n._a.xr(t);
        })), e = t.mutations.map((function(t) {
            return n._a.xr(t);
        })), r = yt.fromMillis(t.localWriteTimeMs);
        return new he(t.batchId, r, i, e);
    }, 
    /*
     * Encodes a set of document keys into an array of EncodedResourcePaths.
     */
    t.prototype.Ea = function(t) {
        var n = [];
        return t.forEach((function(t) {
            n.push(re(t.path));
        })), n;
    }, 
    /** Decodes an array of EncodedResourcePaths into a set of document keys. */
    t.prototype.Ra = function(t) {
        for (var n = di(), i = 0, e = t; i < e.length; i++) {
            var r = e[i];
            n = n.add(new At(oe(r)));
        }
        return n;
    }, 
    /** Decodes a DbTarget into TargetData */
    t.prototype.ta = function(t) {
        var n, i = this.Ia(t.readTime), e = void 0 !== t.lastLimboFreeSnapshotVersion ? this.Ia(t.lastLimboFreeSnapshotVersion) : _t.MIN;
        return n = void 0 !== t.query.documents ? this._a.Gr(t.query) : this._a.Jr(t.query), 
        new ti(n, t.targetId, Kn.Si, t.lastListenSequenceNumber, i, e, Jn.fromBase64String(t.resumeToken));
    }, 
    /** Encodes TargetData into a DbTarget for storage locally. */
    t.prototype.na = function(t) {
        C$1(Kn.Si === t.Vi, "Only queries with purpose " + Kn.Si + " may be stored, got " + t.Vi);
        var n, i = this.Ta(t.Ni), e = this.Ta(t.lastLimboFreeSnapshotVersion);
        n = t.target.zn() ? this._a.Qr(t.target) : this._a.Wr(t.target);
        // We can't store the resumeToken as a ByteString in IndexedDb, so we
        // convert it to a base64 string for storage.
                var r = t.resumeToken.toBase64();
        // lastListenSequenceNumber is always 0 until we do real GC.
                return new vr(t.targetId, t.target.canonicalId(), i, r, t.sequenceNumber, e, n);
    }, t;
}();

/**
 * A helper function for figuring out what kind of query has been stored.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dr = "Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.", Pr = /** @class */ function(t) {
    function n(n, i) {
        var e = t.call(this) || this;
        return e.xo = n, e.Mh = i, e;
    }
    return __extends(n, t), n;
}(me), Sr = /** @class */ function() {
    function t(n, i, e, r, u, s, o, h) {
        if (this.allowTabSynchronization = n, this.persistenceKey = i, this.clientId = e, 
        this.Aa = s, this.Da = h, this.Pa = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.Sa = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.Ca = null, 
        /** The client metadata refresh task. */
        this.ka = null, 
        /** The last time we garbage collected the client metadata object store. */
        this.Va = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.Na = function(t) {
            return Promise.resolve();
        }, this.vo = new Vr(this, u), this.Oa = i + t.Fa, this.serializer = new Ar(o), this.document = r.document, 
        this._h = new We(this.vo, this.serializer), this.do = new Er, this.Ho = new Ye(this.serializer, this.do), 
        !r.window || !r.window.localStorage) throw new B$1(L$1.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
        this.window = r.window, this.Ua = this.window.localStorage;
    }
    return t.$s = function(t, n) {
        if (t instanceof Pr) return pe.$s(t.xo, n);
        throw S$1("IndexedDbPersistence must use instances of IndexedDbTransaction");
    }, t.xa = function(n) {
        return __awaiter(this, void 0, void 0, (function() {
            var i;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    if (!t.Hs()) throw new B$1(L$1.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
                    return [ 4 /*yield*/ , (i = new t(n.allowTabSynchronization, n.persistenceKey, n.clientId, n.platform, n.ja, n.Aa, n.serializer, n.Da)).start() ];

                  case 1:
                    return e.sent(), [ 2 /*return*/ , i ];
                }
            }));
        }));
    }, 
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @return {Promise<void>} Whether persistence was enabled.
     */
    t.prototype.start = function() {
        var t = this;
        return C$1(!this.mh, "IndexedDbPersistence double-started!"), C$1(null !== this.window, "Expected 'window' to be defined"), 
        pe.Ks(this.Oa, er, new rr(this.serializer)).then((function(n) {
            // NOTE: This is expected to fail sometimes (in the case of another tab already
            // having the persistence lock), so it's the first thing we should do.
            return t.La = n, t.Ba();
        })).then((function() {
            return t.Ma(), t.qa(), t.Qa(), t.La.runTransaction("readonly-idempotent", [ mr.store ], (function(t) {
                return He(t);
            }));
        })).then((function(n) {
            t.Ga = new Yi(n, t.Da);
        })).then((function() {
            t.Pa = !0;
        })).catch((function(n) {
            return t.La && t.La.close(), Promise.reject(n);
        }));
    }, t.prototype.Wa = function(t) {
        var n = this;
        return this.Na = function(i) {
            return __awaiter(n, void 0, void 0, (function() {
                return __generator(this, (function(n) {
                    return this.mh ? [ 2 /*return*/ , t(i) ] : [ 2 /*return*/ ];
                }));
            }));
        }, t(this.isPrimary);
    }, t.prototype.za = function(t) {
        var n = this;
        this.La.Zs((function(i) {
            return __awaiter(n, void 0, void 0, (function() {
                return __generator(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return null !== i.newVersion ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , t() ];

                      case 1:
                        n.sent(), n.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, t.prototype.oc = function(t) {
        var n = this;
        this.networkEnabled !== t && (this.networkEnabled = t, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.Aa.xu((function() {
            return __awaiter(n, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return this.mh ? [ 4 /*yield*/ , this.Ba() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })));
    }, 
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */
    t.prototype.Ba = function() {
        var t = this;
        return this.La.runTransaction("readwrite-idempotent", Tr, (function(n) {
            return kr(n).put(new br(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function() {
                if (t.isPrimary) return t.Ka(n).next((function(n) {
                    n || (t.isPrimary = !1, t.Aa.xu((function() {
                        return t.Na(!1);
                    })));
                }));
            })).next((function() {
                return t.Ha(n);
            })).next((function(i) {
                return t.isPrimary && !i ? t.Ja(n).next((function() {
                    return !1;
                })) : !!i && t.Ya(n).next((function() {
                    return !0;
                }));
            }));
        })).catch((function(n) {
            if (!t.allowTabSynchronization) throw n;
            return A$1("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", n), 
            /* isPrimary= */ !1;
        })).then((function(n) {
            t.isPrimary !== n && t.Aa.xu((function() {
                return t.Na(n);
            })), t.isPrimary = n;
        }));
    }, t.prototype.Ka = function(t) {
        var n = this;
        return Cr(t).get(sr.key).next((function(t) {
            return de.resolve(n.Xa(t));
        }));
    }, t.prototype.$a = function(t) {
        return kr(t).delete(this.clientId);
    }, 
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */
    t.prototype.Za = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var n = this;
            return __generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return !this.isPrimary || this.tf(this.Va, 18e5) ? [ 3 /*break*/ , 2 ] : (this.Va = Date.now(), 
                    [ 4 /*yield*/ , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary-idempotent", (function(i) {
                        var e = t.$s(i, br.store);
                        return e.oo().next((function(t) {
                            var i = n.nf(t, 18e5), r = t.filter((function(t) {
                                return -1 === i.indexOf(t);
                            }));
                            // Delete metadata for clients that are no longer considered active.
                            return de.forEach(r, (function(t) {
                                return e.delete(t.clientId);
                            })).next((function() {
                                return r;
                            }));
                        }));
                    })).catch((function() {
                        // Ignore primary lease violations or any other type of error. The next
                        // primary will run `maybeGarbageCollectMultiClientState()` again.
                        // We don't use `ignoreIfPrimaryLeaseLoss()` since we don't want to depend
                        // on LocalStore.
                        return [];
                    })) ]);

                  case 1:
                    // Delete potential leftover entries that may continue to mark the
                    // inactive clients as zombied in LocalStorage.
                    // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                    // the client atomically, but we can't. So we opt to delete the IndexedDb
                    // entries first to avoid potentially reviving a zombied client.
                    i.sent().forEach((function(t) {
                        n.window.localStorage.removeItem(n.if(t.clientId));
                    })), i.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */
    t.prototype.Qa = function() {
        var t = this;
        this.ka = this.Aa.Yu(zi.Ru, 4e3, (function() {
            return t.Ba().then((function() {
                return t.Za();
            })).then((function() {
                return t.Qa();
            }));
        }));
    }, 
    /** Checks whether `client` is the local client. */
    t.prototype.Xa = function(t) {
        return !!t && t.ownerId === this.clientId;
    }, 
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */
    t.prototype.Ha = function(t) {
        var n = this;
        return Cr(t).get(sr.key).next((function(i) {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            if (null !== i && n.tf(i.leaseTimestampMs, 5e3) && !n.ef(i.ownerId)) {
                if (n.Xa(i) && n.networkEnabled) return !0;
                if (!n.Xa(i)) {
                    if (!i.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    //
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new B$1(L$1.FAILED_PRECONDITION, Dr);
                    return !1;
                }
            }
            return !(!n.networkEnabled || !n.inForeground) || kr(t).oo().next((function(t) {
                return void 0 === n.nf(t, 5e3).find((function(t) {
                    if (n.clientId !== t.clientId) {
                        var i = !n.networkEnabled && t.networkEnabled, e = !n.inForeground && t.inForeground, r = n.networkEnabled === t.networkEnabled;
                        if (i || e && r) return !0;
                    }
                    return !1;
                }));
            }));
        })).next((function(t) {
            return n.isPrimary !== t && A$1("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), 
            t;
        }));
    }, t.prototype.shutdown = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return this.Pa = !1, this.rf(), this.ka && (this.ka.cancel(), this.ka = null), this.uf(), 
                    this.sf(), [ 4 /*yield*/ , this.La.runTransaction("readwrite-idempotent", [ sr.store, br.store ], (function(n) {
                        return t.Ja(n).next((function() {
                            return t.$a(n);
                        }));
                    })) ];

                  case 1:
                    return n.sent(), this.La.close(), 
                    // Remove the entry marking the client as zombied from LocalStorage since
                    // we successfully deleted its metadata from IndexedDb.
                    this.hf(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */
    t.prototype.nf = function(t, n) {
        var i = this;
        return t.filter((function(t) {
            return i.tf(t.updateTimeMs, n) && !i.ef(t.clientId);
        }));
    }, t.prototype.uc = function() {
        var t = this;
        return this.La.runTransaction("readonly-idempotent", [ br.store ], (function(n) {
            return kr(n).oo().next((function(n) {
                return t.nf(n, 18e5).map((function(t) {
                    return t.clientId;
                }));
            }));
        }));
    }, t.clearPersistence = function(n) {
        return __awaiter(this, void 0, void 0, (function() {
            var i;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return t.Hs() ? (i = n + t.Fa, [ 4 /*yield*/ , pe.delete(i) ]) : [ 2 /*return*/ , Promise.resolve() ];

                  case 1:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, Object.defineProperty(t.prototype, "mh", {
        get: function() {
            return this.Pa;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.gh = function(t) {
        return C$1(this.mh, "Cannot initialize MutationQueue before persistence is started."), 
        Ee.mo(t, this.serializer, this.do, this.vo);
    }, t.prototype.Ih = function() {
        return C$1(this.mh, "Cannot initialize TargetCache before persistence is started."), 
        this._h;
    }, t.prototype.yh = function() {
        return C$1(this.mh, "Cannot initialize RemoteDocumentCache before persistence is started."), 
        this.Ho;
    }, t.prototype.Eh = function() {
        return C$1(this.mh, "Cannot initialize IndexManager before persistence is started."), 
        this.do;
    }, t.prototype.runTransaction = function(t, n, i) {
        var e = this;
        A$1("IndexedDbPersistence", "Starting transaction:", t);
        // TODO(schmidt-sebastian): Simplify once all transactions are idempotent.
        var r, u = n.endsWith("idempotent"), s = n.startsWith("readonly") ? u ? "readonly-idempotent" : "readonly" : u ? "readwrite-idempotent" : "readwrite";
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
        return this.La.runTransaction(s, Tr, (function(u) {
            return r = new Pr(u, e.Ga.next()), "readwrite-primary" === n || "readwrite-primary-idempotent" === n ? e.Ka(u).next((function(t) {
                return !!t || e.Ha(u);
            })).next((function(n) {
                if (!n) throw D$1("Failed to obtain primary lease for action '" + t + "'."), e.isPrimary = !1, 
                e.Aa.xu((function() {
                    return e.Na(!1);
                })), new B$1(L$1.FAILED_PRECONDITION, we);
                return i(r);
            })).next((function(t) {
                return e.Ya(u).next((function() {
                    return t;
                }));
            })) : e.cf(u).next((function() {
                return i(r);
            }));
        })).then((function(t) {
            return r.Ws(), t;
        }));
    }, 
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    t.prototype.cf = function(t) {
        var n = this;
        return Cr(t).get(sr.key).next((function(t) {
            if (null !== t && n.tf(t.leaseTimestampMs, 5e3) && !n.ef(t.ownerId) && !n.Xa(t) && !t.allowTabSynchronization) throw new B$1(L$1.FAILED_PRECONDITION, Dr);
        }));
    }, 
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */
    t.prototype.Ya = function(t) {
        var n = new sr(this.clientId, this.allowTabSynchronization, Date.now());
        return Cr(t).put(sr.key, n);
    }, t.Hs = function() {
        return pe.Hs();
    }, 
    /**
     * Generates a string used as a prefix when storing data in IndexedDB and
     * LocalStorage.
     */
    t.af = function(t) {
        // Use two different prefix formats:
        //
        //   * firestore / persistenceKey / projectID . databaseID / ...
        //   * firestore / persistenceKey / projectID / ...
        //
        // projectIDs are DNS-compatible names and cannot contain dots
        // so there's no danger of collisions.
        var n = t.s.projectId;
        return t.s.o || (n += "." + t.s.database), "firestore/" + t.persistenceKey + "/" + n + "/";
    }, 
    /** Checks the primary lease and removes it if we are the current primary. */
    t.prototype.Ja = function(t) {
        var n = this, i = Cr(t);
        return i.get(sr.key).next((function(t) {
            return n.Xa(t) ? (A$1("IndexedDbPersistence", "Releasing primary lease."), i.delete(sr.key)) : de.resolve();
        }));
    }, 
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */
    t.prototype.tf = function(t, n) {
        var i = Date.now();
        return !(t < i - n) && (!(t > i) || (D$1("Detected an update time that is in the future: " + t + " > " + i), 
        !1));
    }, t.prototype.Ma = function() {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.Ca = function() {
            t.Aa.xu((function() {
                return t.inForeground = "visible" === t.document.visibilityState, t.Ba();
            }));
        }, this.document.addEventListener("visibilitychange", this.Ca), this.inForeground = "visible" === this.document.visibilityState);
    }, t.prototype.uf = function() {
        this.Ca && (C$1(null !== this.document && "function" == typeof this.document.addEventListener, "Expected 'document.addEventListener' to be a function"), 
        this.document.removeEventListener("visibilitychange", this.Ca), this.Ca = null);
    }, 
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */
    t.prototype.qa = function() {
        var t = this;
        "function" == typeof this.window.addEventListener && (this.Sa = function() {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            t.rf(), t.Aa.xu((function() {
                // Attempt graceful shutdown (including releasing our primary lease),
                // but there's no guarantee it will complete.
                return t.shutdown();
            }));
        }, this.window.addEventListener("unload", this.Sa));
    }, t.prototype.sf = function() {
        this.Sa && (C$1("function" == typeof this.window.removeEventListener, "Expected 'window.removeEventListener' to be a function"), 
        this.window.removeEventListener("unload", this.Sa), this.Sa = null);
    }, 
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */
    t.prototype.ef = function(t) {
        try {
            var n = null !== this.Ua.getItem(this.if(t));
            return A$1("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), 
            n;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return D$1("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }, 
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */
    t.prototype.rf = function() {
        try {
            this.Ua.setItem(this.if(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            D$1("Failed to set zombie client id.", t);
        }
    }, 
    /** Removes the zombied client entry if it exists. */
    t.prototype.hf = function() {
        try {
            this.Ua.removeItem(this.if(this.clientId));
        } catch (t) {
            // Ignore
        }
    }, t.prototype.if = function(t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
    }, 
    /**
     * The name of the main (and currently only) IndexedDB database. this name is
     * appended to the prefix provided to the IndexedDbPersistence constructor.
     */
    t.Fa = "main", t;
}();

/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */
/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */
function Cr(t) {
    return t.store(sr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function kr(t) {
    return t.store(br.store);
}

/** Provides LRU functionality for IndexedDB persistence. */ var Vr = /** @class */ function() {
    function t(t, n) {
        this.db = t, this.ff = null, this.Vc = new Ge(this, n);
    }
    return t.prototype.Lc = function(t) {
        var n = this.lf(t);
        return this.db.Ih().ia(t).next((function(t) {
            return n.next((function(n) {
                return t + n;
            }));
        }));
    }, t.prototype.lf = function(t) {
        var n = 0;
        return this.Mc(t, (function(t) {
            n++;
        })).next((function() {
            return n;
        }));
    }, t.prototype.Le = function(t, n) {
        return this.db.Ih().Le(t, n);
    }, t.prototype.Mc = function(t, n) {
        return this.df(t, (function(t, i) {
            return n(i);
        }));
    }, t.prototype.ph = function(t) {
        this.ff = t;
    }, t.prototype.fs = function(t, n) {
        return Nr(t, n);
    }, t.prototype.ds = function(t, n) {
        return Nr(t, n);
    }, t.prototype.qc = function(t, n, i) {
        return this.db.Ih().qc(t, n, i);
    }, t.prototype.Lo = function(t, n) {
        return Nr(t, n);
    }, 
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */
    t.prototype.vf = function(t, n) {
        return this.ff.bs(n) ? de.resolve(!0) : function(t, n) {
            var i = !1;
            return Se(t).lo((function(e) {
                return Re(t, e, n).next((function(t) {
                    return t && (i = !0), de.resolve(!t);
                }));
            })).next((function() {
                return i;
            }));
        }(t, n);
    }, t.prototype.Qc = function(t, n) {
        var i = this, e = this.db.yh().Nh(), r = [], u = 0;
        return this.df(t, (function(s, o) {
            if (o <= n) {
                var h = i.vf(t, s).next((function(n) {
                    if (!n) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return u++, e.Ls(t, s).next((function() {
                        return e.js(s), Je(t).delete([ 0, re(s.path) ]);
                    }));
                }));
                r.push(h);
            }
        })).next((function() {
            return de.ks(r);
        })).next((function() {
            return e.apply(t);
        })).next((function() {
            return u;
        }));
    }, t.prototype.removeTarget = function(t, n) {
        var i = n.Oi(t.Mh);
        return this.db.Ih().Qh(t, i);
    }, t.prototype.Gh = function(t, n) {
        return Nr(t, n);
    }, 
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */
    t.prototype.df = function(t, n) {
        var i, e = Je(t), r = Yi.gu;
        return e.fo({
            index: wr.documentTargetsIndex
        }, (function(t, e) {
            var u = t[0], s = (t[1], e.path), o = e.sequenceNumber;
            0 === u ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            r !== Yi.gu && n(new At(oe(i)), r), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            r = o, i = s) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            r = Yi.gu;
        })).next((function() {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            r !== Yi.gu && n(new At(oe(i)), r);
        }));
    }, t.prototype.Gc = function(t) {
        return this.db.yh().wa(t);
    }, t;
}();

function Nr(t, n) {
    return Je(t).put(
    /**
 * @return A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, n) {
        return new wr(0, re(t.path), n);
    }(n, t.Mh));
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TOOD(b/140938512): Drop SimpleQueryEngine and rename IndexFreeQueryEngine.
/**
 * A query engine that takes advantage of the target document mapping in the
 * QueryCache. The IndexFreeQueryEngine optimizes query execution by only
 * reading the documents that previously matched a query plus any documents that were
 * edited after the query was last listened to.
 *
 * There are some cases where Index-Free queries are not guaranteed to produce
 * the same results as full collection scans. In these cases, the
 * IndexFreeQueryEngine falls back to full query processing. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of Limbo documents.
 */ var Or = /** @class */ function() {
    function t() {}
    return t.prototype.Rh = function(t) {
        this.wf = t;
    }, t.prototype.nh = function(t, n, i, e) {
        var r = this;
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
        return C$1(void 0 !== this.wf, "setLocalDocumentsView() not called"), n.fi() ? this.mf(t, n) : 
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        i.isEqual(_t.MIN) ? this.mf(t, n) : this.wf.Zo(t, e).next((function(u) {
            var s = r.pf(n, u);
            return (n.gi() || n.bi()) && r.gf(n.Yn, s, e, i) ? r.mf(t, n) : (E() <= _.DEBUG && A$1("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), n.toString()), 
            r.wf.nh(t, n, i).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return s.forEach((function(n) {
                    t = t.lt(n.key, n);
                })), t;
            })));
        }));
    }, 
    /** Applies the query filter and sorting to the provided documents.  */
    t.prototype.pf = function(t, n) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var i = new kt((function(n, i) {
            return t.di(n, i);
        }));
        return n.forEach((function(n, e) {
            e instanceof bn && t.matches(e) && (i = i.add(e));
        })), i;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */
    t.prototype.gf = function(t, n, i, e) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (i.size !== n.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var r = t === Pn.Kn ? n.last() : n.first();
        return !!r && (r.hasPendingWrites || r.version.h(e) > 0);
    }, t.prototype.mf = function(t, n) {
        return E() <= _.DEBUG && A$1("IndexFreeQueryEngine", "Using full collection scan to execute query: %s", n.toString()), 
        this.wf.nh(t, n, _t.MIN);
    }, t;
}(), Fr = /** @class */ function() {
    function t(t, n) {
        this.do = t, this.vo = n, 
        /**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */
        this.Jo = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.bf = 1, 
        /** The last received stream token from the server, used to acknowledge which
         * responses the client has processed. Stream tokens are opaque checkpoint
         * markers whose only real value is their inclusion in the next request.
         */
        this.lastStreamToken = Jn.Pi, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.yf = new kt(fe.Bn);
    }
    return t.prototype.po = function(t) {
        return de.resolve(0 === this.Jo.length);
    }, t.prototype.bo = function(t, n, i) {
        var e = n.batchId, r = this._f(e, "acknowledged");
        C$1(0 === r, "Can only acknowledge the first batch in the mutation queue");
        // Verify that the batch in the queue is the one to be acknowledged.
        var u = this.Jo[r];
        return C$1(e === u.batchId, "Queue ordering failure: expected batch " + e + ", got batch " + u.batchId), 
        this.lastStreamToken = i, de.resolve();
    }, t.prototype._o = function(t) {
        return de.resolve(this.lastStreamToken);
    }, t.prototype.Io = function(t, n) {
        return this.lastStreamToken = n, de.resolve();
    }, t.prototype.To = function(t, n, i, e) {
        C$1(0 !== e.length, "Mutation batches should not be empty");
        var r = this.bf;
        (this.bf++, this.Jo.length > 0) && C$1(this.Jo[this.Jo.length - 1].batchId < r, "Mutation batchIDs must be monotonically increasing order");
        var u = new he(r, n, i, e);
        this.Jo.push(u);
        // Track references by document key and index collection parents.
        for (var s = 0, o = e; s < o.length; s++) {
            var h = o[s];
            this.yf = this.yf.add(new fe(h.key, r)), this.do.Ro(t, h.key.path.H());
        }
        return de.resolve(u);
    }, t.prototype.Ao = function(t, n) {
        return de.resolve(this.If(n));
    }, t.prototype.Po = function(t, n) {
        var i = this.If(n);
        return C$1(null != i, "Failed to find local mutation batch."), de.resolve(i.keys());
    }, t.prototype.So = function(t, n) {
        var i = n + 1, e = this.Tf(i), r = e < 0 ? 0 : e;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return de.resolve(this.Jo.length > r ? this.Jo[r] : null);
    }, t.prototype.Co = function() {
        return de.resolve(0 === this.Jo.length ? -1 : this.bf - 1);
    }, t.prototype.ko = function(t) {
        return de.resolve(this.Jo.slice());
    }, t.prototype.Vo = function(t, n) {
        var i = this, e = new fe(n, 0), r = new fe(n, Number.POSITIVE_INFINITY), u = [];
        return this.yf.Lt([ e, r ], (function(t) {
            C$1(n.isEqual(t.key), "Should only iterate over a single key's batches");
            var e = i.If(t.ys);
            C$1(null !== e, "Batches in the index must exist in the main table"), u.push(e);
        })), de.resolve(u);
    }, t.prototype.No = function(t, n) {
        var i = this, e = new kt(V$1);
        return n.forEach((function(t) {
            var n = new fe(t, 0), r = new fe(t, Number.POSITIVE_INFINITY);
            i.yf.Lt([ n, r ], (function(n) {
                C$1(t.isEqual(n.key), "For each key, should only iterate over a single key's batches"), 
                e = e.add(n.ys);
            }));
        })), de.resolve(this.Ef(e));
    }, t.prototype.Fo = function(t, n) {
        C$1(!n._i(), "CollectionGroup queries should be handled in LocalDocumentsView");
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var i = n.path, e = i.length + 1, r = i;
        At.ht(r) || (r = r.child(""));
        var u = new fe(new At(r), 0), s = new kt(V$1);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.yf.Bt((function(t) {
            var n = t.key.path;
            return !!i.$(n) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            n.length === e && (s = s.add(t.ys)), !0);
        }), u), de.resolve(this.Ef(s));
    }, t.prototype.Ef = function(t) {
        var n = this, i = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var e = n.If(t);
            null !== e && i.push(e);
        })), i;
    }, t.prototype.Uo = function(t, n) {
        var i = this;
        // Find the position of the first batch for removal. This need not be the
        // first entry in the queue.
                C$1(0 === this._f(n.batchId, "removed"), "Can only remove the first entry of the mutation queue"), 
        this.Jo.shift();
        var e = this.yf;
        return de.forEach(n.mutations, (function(r) {
            var u = new fe(r.key, n.batchId);
            return e = e.delete(u), i.vo.Lo(t, r.key);
        })).next((function() {
            i.yf = e;
        }));
    }, t.prototype.jo = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.bs = function(t, n) {
        var i = new fe(n, 0), e = this.yf.Mt(i);
        return de.resolve(n.isEqual(e && e.key));
    }, t.prototype.Bo = function(t) {
        return 0 === this.Jo.length && C$1(this.yf.J(), "Document leak -- detected dangling mutation references when queue is empty."), 
        de.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype._f = function(t, n) {
        var i = this.Tf(t);
        return C$1(i >= 0 && i < this.Jo.length, "Batches must exist to be " + n), i;
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.Tf = function(t) {
        return 0 === this.Jo.length ? 0 : t - this.Jo[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.If = function(t) {
        var n = this.Tf(t);
        if (n < 0 || n >= this.Jo.length) return null;
        var i = this.Jo[n];
        return C$1(i.batchId === t, "If found batch must match"), i;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ur, xr, jr = /** @class */ function() {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    function t(t, n) {
        this.do = t, this.Rf = n, 
        /** Underlying cache of documents and their read times. */
        this.docs = new Dt(At.G), 
        /** Size of all cached documents. */
        this.size = 0;
    }
    /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */    return t.prototype.Us = function(t, n, i) {
        C$1(!i.isEqual(_t.MIN), "Cannot add a document with a read time of zero");
        var e = n.key, r = this.docs.get(e), u = r ? r.size : 0, s = this.Rf(n);
        return this.docs = this.docs.lt(e, {
            sa: n,
            size: s,
            readTime: i
        }), this.size += s - u, this.do.Ro(t, e.path.H());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.js = function(t) {
        var n = this.docs.get(t);
        n && (this.docs = this.docs.remove(t), this.size -= n.size);
    }, t.prototype.Ls = function(t, n) {
        var i = this.docs.get(n);
        return de.resolve(i ? i.sa : null);
    }, t.prototype.getEntries = function(t, n) {
        var i = this, e = oi();
        return n.forEach((function(t) {
            var n = i.docs.get(t);
            e = e.lt(t, n ? n.sa : null);
        })), de.resolve(e);
    }, t.prototype.nh = function(t, n, i) {
        C$1(!n._i(), "CollectionGroup queries should be handled in LocalDocumentsView");
        for (var e = ci(), r = new At(n.path.child("")), u = this.docs.yt(r)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; u.At(); ) {
            var s = u.Rt(), o = s.key, h = s.value, c = h.sa, a = h.readTime;
            if (!n.path.$(o.path)) break;
            a.h(i) <= 0 || c instanceof bn && n.matches(c) && (e = e.lt(c.key, c));
        }
        return de.resolve(e);
    }, t.prototype.Af = function(t, n) {
        return de.forEach(this.docs, (function(t) {
            return n(t);
        }));
    }, t.prototype.fc = function(t, n) {
        throw new Error("getNewDocumentChanges() is not supported with MemoryPersistence");
    }, t.prototype.dc = function(t) {
        return de.resolve(_t.MIN);
    }, t.prototype.Nh = function(n) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.va(this);
    }, t.prototype.wa = function(t) {
        return de.resolve(this.size);
    }, 
    /**
     * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
     */
    t.va = /** @class */ function(t) {
        function n(n) {
            var i = t.call(this) || this;
            return i.ma = n, i;
        }
        return __extends(n, t), n.prototype.qs = function(t) {
            var n = this, i = [];
            return this.Ns.forEach((function(e, r) {
                r ? i.push(n.ma.Us(t, r, n.readTime)) : n.ma.js(e);
            })), de.ks(i);
        }, n.prototype.Bs = function(t, n) {
            return this.ma.Ls(t, n);
        }, n.prototype.Ms = function(t, n) {
            return this.ma.getEntries(t, n);
        }, n;
    }(ve), t;
}(), Lr = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
         * Maps a target to the data about that target
         */
        this.Df = new le((function(t) {
            return t.canonicalId();
        })), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = _t.MIN, 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.Pf = 0, 
        /**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */
        this.Sf = new ae, this.targetCount = 0, this.zc = Ne.zo();
    }
    return t.prototype.Le = function(t, n) {
        return this.Df.forEach((function(t, i) {
            return n(i);
        })), de.resolve();
    }, t.prototype.xh = function(t) {
        return de.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.Jc = function(t) {
        return de.resolve(this.Pf);
    }, t.prototype.$h = function(t) {
        var n = this.zc.after(this.highestTargetId);
        return this.highestTargetId = n, de.resolve(n);
    }, t.prototype.Wh = function(t, n, i) {
        return i && (this.lastRemoteSnapshotVersion = i), n > this.Pf && (this.Pf = n), 
        de.resolve();
    }, t.prototype.Yc = function(t) {
        this.Df.set(t.target, t);
        var n = t.targetId;
        n > this.highestTargetId && (this.highestTargetId = n), t.sequenceNumber > this.Pf && (this.Pf = t.sequenceNumber);
    }, t.prototype.Zh = function(t, n) {
        return C$1(!this.Df.has(n.target), "Adding a target that already exists"), this.Yc(n), 
        this.targetCount += 1, de.resolve();
    }, t.prototype.Qh = function(t, n) {
        return C$1(this.Df.has(n.target), "Updating a non-existent target"), this.Yc(n), de.resolve();
    }, t.prototype.$c = function(t, n) {
        return C$1(this.targetCount > 0, "Removing a target from an empty cache"), C$1(this.Df.has(n.target), "Removing a non-existent target from the cache"), 
        this.Df.delete(n.target), this.Sf.ms(n.targetId), this.targetCount -= 1, de.resolve();
    }, t.prototype.qc = function(t, n, i) {
        var e = this, r = 0, u = [];
        return this.Df.forEach((function(s, o) {
            o.sequenceNumber <= n && null === i.get(o.targetId) && (e.Df.delete(s), u.push(e.Zc(t, o.targetId)), 
            r++);
        })), de.ks(u).next((function() {
            return r;
        }));
    }, t.prototype.ia = function(t) {
        return de.resolve(this.targetCount);
    }, t.prototype.Xh = function(t, n) {
        var i = this.Df.get(n) || null;
        return de.resolve(i);
    }, t.prototype.Ye = function(t, n) {
        // This method is only needed for multi-tab and we can't implement it
        // efficiently without additional data structures.
        return S$1("Not yet implemented.");
    }, t.prototype.Bh = function(t, n, i) {
        this.Sf.ls(n, i);
        var e = this.persistence.vo, r = [];
        return e && n.forEach((function(n) {
            r.push(e.fs(t, n));
        })), de.ks(r);
    }, t.prototype.Lh = function(t, n, i) {
        this.Sf.ws(n, i);
        var e = this.persistence.vo, r = [];
        return e && n.forEach((function(n) {
            r.push(e.ds(t, n));
        })), de.ks(r);
    }, t.prototype.Zc = function(t, n) {
        return this.Sf.ms(n), de.resolve();
    }, t.prototype.ic = function(t, n) {
        var i = this.Sf.gs(n);
        return de.resolve(i);
    }, t.prototype.bs = function(t, n) {
        return de.resolve(this.Sf.bs(n));
    }, t;
}(), Br = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t, n) {
        var i = this;
        this.clientId = t, this.Cf = {}, this.Ga = new Yi(0), this.Pa = !1, this.Pa = !0, 
        this.vo = n(this), this._h = new Lr(this);
        this.do = new nr, this.Ho = new jr(this.do, (function(t) {
            return i.vo.kf(t);
        }));
    }
    return t.Vf = function(n, i) {
        return new t(n, (function(t) {
            return new Qr(t, i);
        }));
    }, t.Nf = function(n) {
        return new t(n, (function(t) {
            return new qr(t);
        }));
    }, t.prototype.shutdown = function() {
        // No durable state to ensure is closed on shutdown.
        return this.Pa = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "mh", {
        get: function() {
            return this.Pa;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.uc = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return [ 2 /*return*/ , [ this.clientId ] ];
            }));
        }));
    }, t.prototype.Wa = function(t) {
        // All clients using memory persistence act as primary.
        return t(!0);
    }, t.prototype.za = function() {
        // No op.
    }, t.prototype.oc = function(t) {
        // No op.
    }, t.prototype.Eh = function() {
        return this.do;
    }, t.prototype.gh = function(t) {
        var n = this.Cf[t.v()];
        return n || (n = new Fr(this.do, this.vo), this.Cf[t.v()] = n), n;
    }, t.prototype.Ih = function() {
        return this._h;
    }, t.prototype.yh = function() {
        return this.Ho;
    }, t.prototype.runTransaction = function(t, n, i) {
        var e = this;
        A$1("MemoryPersistence", "Starting transaction:", t);
        var r = new Mr(this.Ga.next());
        return this.vo.Of(), i(r).next((function(t) {
            return e.vo.Ff(r).next((function() {
                return t;
            }));
        })).Ss().then((function(t) {
            return r.Ws(), t;
        }));
    }, t.prototype.Uf = function(t, n) {
        return de.Vs((i = this.Cf, e = [], Y$1(i, (function(t, n) {
            return e.push(n);
        })), e).map((function(i) {
            return function() {
                return i.bs(t, n);
            };
        })));
        var i, e;
    }, t;
}(), Mr = /** @class */ function(t) {
    function n(n) {
        var i = t.call(this) || this;
        return i.Mh = n, i;
    }
    return __extends(n, t), n;
}(me), qr = /** @class */ function() {
    function t(t) {
        this.persistence = t, this.ff = null, this.xf = null;
    }
    return Object.defineProperty(t.prototype, "jf", {
        get: function() {
            if (this.xf) return this.xf;
            throw S$1("orphanedDocuments is only valid during a transaction.");
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.ph = function(t) {
        this.ff = t;
    }, t.prototype.fs = function(t, n) {
        return this.jf.delete(n), de.resolve();
    }, t.prototype.ds = function(t, n) {
        return this.jf.add(n), de.resolve();
    }, t.prototype.Lo = function(t, n) {
        return this.jf.add(n), de.resolve();
    }, t.prototype.removeTarget = function(t, n) {
        var i = this, e = this.persistence.Ih();
        return e.ic(t, n.targetId).next((function(t) {
            t.forEach((function(t) {
                return i.jf.add(t);
            }));
        })).next((function() {
            return e.$c(t, n);
        }));
    }, t.prototype.Of = function() {
        this.xf = new Set;
    }, t.prototype.Ff = function(t) {
        var n = this, i = this.persistence.yh().Nh();
        // Remove newly orphaned documents.
                return de.forEach(this.jf, (function(e) {
            return n.Lf(t, e).next((function(t) {
                t || i.js(e);
            }));
        })).next((function() {
            return n.xf = null, i.apply(t);
        }));
    }, t.prototype.Gh = function(t, n) {
        var i = this;
        return this.Lf(t, n).next((function(t) {
            t ? i.jf.delete(n) : i.jf.add(n);
        }));
    }, t.prototype.kf = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.Lf = function(t, n) {
        var i = this;
        return de.Vs([ function() {
            return i.persistence.Ih().bs(t, n);
        }, function() {
            return i.persistence.Uf(t, n);
        }, function() {
            return de.resolve(i.ff.bs(n));
        } ]);
    }, t;
}(), Qr = /** @class */ function() {
    function t(t, n) {
        this.persistence = t, this.ff = null, this.Bf = new le((function(t) {
            return re(t.path);
        })), this.Vc = new Ge(this, n);
    }
    // No-ops, present so memory persistence doesn't have to care which delegate
    // it has.
        return t.prototype.Of = function() {}, t.prototype.Ff = function(t) {
        return de.resolve();
    }, t.prototype.Le = function(t, n) {
        return this.persistence.Ih().Le(t, n);
    }, t.prototype.Lc = function(t) {
        var n = this.Mf(t);
        return this.persistence.Ih().ia(t).next((function(t) {
            return n.next((function(n) {
                return t + n;
            }));
        }));
    }, t.prototype.Mf = function(t) {
        var n = 0;
        return this.Mc(t, (function(t) {
            n++;
        })).next((function() {
            return n;
        }));
    }, t.prototype.Mc = function(t, n) {
        var i = this;
        return de.forEach(this.Bf, (function(e, r) {
            // Pass in the exact sequence number as the upper bound so we know it won't be pinned by
            // being too recent.
            return i.vf(t, e, r).next((function(t) {
                return t ? de.resolve() : n(r);
            }));
        }));
    }, t.prototype.ph = function(t) {
        this.ff = t;
    }, t.prototype.qc = function(t, n, i) {
        return this.persistence.Ih().qc(t, n, i);
    }, t.prototype.Qc = function(t, n) {
        var i = this, e = 0, r = this.persistence.yh(), u = r.Nh();
        return r.Af(t, (function(r) {
            return i.vf(t, r, n).next((function(t) {
                t || (e++, u.js(r));
            }));
        })).next((function() {
            return u.apply(t);
        })).next((function() {
            return e;
        }));
    }, t.prototype.Lo = function(t, n) {
        return this.Bf.set(n, t.Mh), de.resolve();
    }, t.prototype.removeTarget = function(t, n) {
        var i = n.Oi(t.Mh);
        return this.persistence.Ih().Qh(t, i);
    }, t.prototype.fs = function(t, n) {
        return this.Bf.set(n, t.Mh), de.resolve();
    }, t.prototype.ds = function(t, n) {
        return this.Bf.set(n, t.Mh), de.resolve();
    }, t.prototype.Gh = function(t, n) {
        return this.Bf.set(n, t.Mh), de.resolve();
    }, t.prototype.kf = function(t) {
        var n = t.key.toString().length;
        return t instanceof bn && (n += t.data().Nn()), n;
    }, t.prototype.vf = function(t, n, i) {
        var e = this;
        return de.Vs([ function() {
            return e.persistence.Uf(t, n);
        }, function() {
            return de.resolve(e.ff.bs(n));
        }, function() {
            return e.persistence.Ih().bs(t, n);
        }, function() {
            var t = e.Bf.get(n);
            return de.resolve(void 0 !== t && t > i);
        } ]);
    }, t.prototype.Gc = function(t) {
        return this.persistence.yh().wa(t);
    }, t;
}(), Gr = 1e3, Wr = 1.5, zr = 6e4, Kr = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    n, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    i, 
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */
    e, 
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */
    r) {
        void 0 === i && (i = Gr), void 0 === e && (e = Wr), void 0 === r && (r = zr), this.Aa = t, 
        this.Su = n, this.qf = i, this.Qf = e, this.Gf = r, this.Wf = 0, this.zf = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.Kf = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.Wf = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.Hf = function() {
        this.Wf = this.Gf;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.Jf = function(t) {
        var n = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var i = Math.floor(this.Wf + this.Yf()), e = Math.max(0, Date.now() - this.Kf), r = Math.max(0, i - e);
        // Guard against lastAttemptTime being in the future due to a clock change.
                this.Wf > 0 && A$1("ExponentialBackoff", "Backing off for " + r + " ms (base delay: " + this.Wf + " ms, delay with jitter: " + i + " ms, last attempt: " + e + " ms ago)"), 
        this.zf = this.Aa.Yu(this.Su, r, (function() {
            return n.Kf = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.Wf *= this.Qf, this.Wf < this.qf && (this.Wf = this.qf), this.Wf > this.Gf && (this.Wf = this.Gf);
    }, t.prototype.cancel = function() {
        null !== this.zf && (this.zf.cancel(), this.zf = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
    t.prototype.Yf = function() {
        return (Math.random() - .5) * this.Wf;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
     * The streaming RPC is not yet running and there's no error condition.
     * Calling start() will start the stream immediately without backoff.
     * While in this state isStarted() will return false.
     */
(xr = Ur || (Ur = {}))[xr.Xf = 0] = "__PRIVATE_Initial", 
/**
     * The stream is starting, either waiting for an auth token or for the stream
     * to successfully open. While in this state, isStarted() will return true but
     * isOpen() will return false.
     */
xr[xr.$f = 1] = "__PRIVATE_Starting", 
/**
     * The streaming RPC is up and running. Requests and responses can flow
     * freely. Both isStarted() and isOpen() will return true.
     */
xr[xr.Zf = 2] = "__PRIVATE_Open", 
/**
     * The stream encountered an error. The next start attempt will back off.
     * While in this state isStarted() will return false.
     */
xr[xr.Error = 3] = "Error", 
/**
     * An in-between state after an error where the stream is waiting before
     * re-starting. After waiting is complete, the stream will try to open.
     * While in this state isStarted() will return true but isOpen() will return
     * false.
     */
xr[xr.tl = 4] = "__PRIVATE_Backoff";

/** The time a stream stays open after it is marked idle. */
var Hr = /** @class */ function() {
    function t(t, n, i, e, r, u) {
        this.Aa = t, this.nl = i, this.connection = e, this.il = r, this.listener = u, this.state = Ur.Xf, 
        /**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */
        this.el = 0, this.rl = null, this.stream = null, this.ul = new Kr(t, n);
    }
    /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */    return t.prototype.sl = function() {
        return this.state === Ur.$f || this.state === Ur.Zf || this.state === Ur.tl;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.ol = function() {
        return this.state === Ur.Zf;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        this.state !== Ur.Error ? (C$1(this.state === Ur.Xf, "Already started"), this.auth()) : this.hl();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.sl() ? [ 4 /*yield*/ , this.close(Ur.Xf) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.cl = function() {
        C$1(!this.sl(), "Can only inhibit backoff in a stopped state"), this.state = Ur.Xf, 
        this.ul.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype.al = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.ol() && null === this.rl && (this.rl = this.Aa.Yu(this.nl, 6e4, (function() {
            return t.fl();
        })));
    }, 
    /** Sends a message to the underlying stream. */
    t.prototype.ll = function(t) {
        this.dl(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */
    t.prototype.fl = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return this.ol() ? [ 2 /*return*/ , this.close(Ur.Xf) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */
    t.prototype.dl = function() {
        this.rl && (this.rl.cancel(), this.rl = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    t.prototype.close = function(t, n) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    return C$1(this.sl(), "Only started streams should be closed."), C$1(t === Ur.Error || An(n), "Can't provide an error when not in an error state."), 
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    this.dl(), this.ul.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.el++, t !== Ur.Error ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.ul.reset() : n && n.code === L$1.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    D$1(n.toString()), D$1("Using maximum backoff delay to prevent overloading the backend."), 
                    this.ul.Hf()) : n && n.code === L$1.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.il.I(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.vl(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.wl(n) ];

                  case 1:
                    // Notify the listener that the stream closed.
                    return i.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.vl = function() {}, t.prototype.auth = function() {
        var t = this;
        C$1(this.state === Ur.Xf, "Must be in initial state to auth"), this.state = Ur.$f;
        var n = this.ml(this.el), i = this.el;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.il.getToken().then((function(n) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.el === i && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.pl(n);
        }), (function(i) {
            n((function() {
                var n = new B$1(L$1.UNKNOWN, "Fetching auth token failed: " + i.message);
                return t.gl(n);
            }));
        }));
    }, t.prototype.pl = function(t) {
        var n = this;
        C$1(this.state === Ur.$f, "Trying to start stream in a non-starting state");
        var i = this.ml(this.el);
        this.stream = this.bl(t), this.stream.yl((function() {
            i((function() {
                return C$1(n.state === Ur.$f, "Expected stream to be in state Starting, but was " + n.state), 
                n.state = Ur.Zf, n.listener.yl();
            }));
        })), this.stream.wl((function(t) {
            i((function() {
                return n.gl(t);
            }));
        })), this.stream.onMessage((function(t) {
            i((function() {
                return n.onMessage(t);
            }));
        }));
    }, t.prototype.hl = function() {
        var t = this;
        C$1(this.state === Ur.Error, "Should only perform backoff when in Error state"), this.state = Ur.tl, 
        this.ul.Jf((function() {
            return __awaiter(t, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    return C$1(this.state === Ur.tl, "Backoff elapsed but state is now: " + this.state), 
                    this.state = Ur.Xf, this.start(), C$1(this.sl(), "PersistentStream should have started"), 
                    [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.gl = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return C$1(this.sl(), "Can't handle server close on non-started stream"), A$1("PersistentStream", "close with error: " + t), 
        this.stream = null, this.close(Ur.Error, t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.ml = function(t) {
        var n = this;
        return function(i) {
            n.Aa.xu((function() {
                return n.el === t ? i() : (A$1("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), Jr = /** @class */ function(t) {
    function n(n, i, e, r, u) {
        var s = t.call(this, n, zi._u, zi.yu, i, e, u) || this;
        return s.serializer = r, s;
    }
    return __extends(n, t), n.prototype.bl = function(t) {
        return this.connection._l("Listen", t);
    }, n.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.ul.reset();
        var n = this.serializer.Cr(t), i = this.serializer.Vr(t);
        return this.listener.Il(n, i);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n.prototype.watch = function(t) {
        var n = {};
        n.database = this.serializer.wr, n.addTarget = this.serializer.li(t);
        var i = this.serializer.Zr(t);
        i && (n.labels = i), this.ll(n);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n.prototype.Tl = function(t) {
        var n = {};
        n.database = this.serializer.wr, n.removeTarget = t, this.ll(n);
    }, n;
}(Hr), Yr = /** @class */ function(t) {
    function n(n, i, e, r, u) {
        var s = t.call(this, n, zi.Tu, zi.Iu, i, e, u) || this;
        return s.serializer = r, s.El = !1, 
        /**
         * The last received stream token from the server, used to acknowledge which
         * responses the client has processed. Stream tokens are opaque checkpoint
         * markers whose only real value is their inclusion in the next request.
         *
         * PersistentWriteStream manages propagating this value from responses to the
         * next request.
         */
        s.lastStreamToken = Jn.Pi, s;
    }
    return __extends(n, t), Object.defineProperty(n.prototype, "Rl", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.El;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    n.prototype.start = function() {
        this.El = !1, t.prototype.start.call(this);
    }, n.prototype.vl = function() {
        this.El && this.Al([]);
    }, n.prototype.bl = function(t) {
        return this.connection._l("Write", t);
    }, n.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        C$1(!!t.streamToken, "Got a write response without a stream token"), this.lastStreamToken = this.serializer.er(t.streamToken), 
        this.El) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.ul.reset();
            var n = this.serializer.qr(t.writeResults, t.commitTime), i = this.serializer.fromVersion(t.commitTime);
            return this.listener.Dl(i, n);
        }
        // The first response is always the handshake response
        return C$1(!t.writeResults || 0 === t.writeResults.length, "Got mutation results for handshake"), 
        this.El = !0, this.listener.Pl();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n.prototype.Sl = function() {
        C$1(this.ol(), "Writing handshake requires an opened stream"), C$1(!this.El, "Handshake already completed");
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = this.serializer.wr, this.ll(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */
    n.prototype.Al = function(t) {
        var n = this;
        C$1(this.ol(), "Writing mutations requires an opened stream"), C$1(this.El, "Handshake must be complete before writing mutations"), 
        C$1(this.lastStreamToken.Nn() > 0, "Trying to write mutation without a token");
        var i = {
            streamToken: this.serializer.ir(this.lastStreamToken),
            writes: t.map((function(t) {
                return n.serializer.Nr(t);
            }))
        };
        this.ll(i);
    }, n;
}(Hr), Xr = /** @class */ function() {
    function t(t, n, i, e) {
        this.Aa = t, this.connection = n, this.credentials = i, this.serializer = e;
    }
    return t.prototype.Cl = function(t) {
        return new Yr(this.Aa, this.connection, this.credentials, this.serializer, t);
    }, t.prototype.kl = function(t) {
        return new Jr(this.Aa, this.connection, this.credentials, this.serializer, t);
    }, t.prototype.commit = function(t) {
        var n = this, i = {
            database: this.serializer.wr,
            writes: t.map((function(t) {
                return n.serializer.Nr(t);
            }))
        };
        return this.Vl("Commit", i).then((function(t) {
            return n.serializer.qr(t.writeResults, t.commitTime);
        }));
    }, t.prototype.lookup = function(t) {
        var n = this, i = {
            database: this.serializer.wr,
            documents: t.map((function(t) {
                return n.serializer.cr(t);
            }))
        };
        return this.Nl("BatchGetDocuments", i).then((function(i) {
            var e = si();
            i.forEach((function(t) {
                var i = n.serializer.Dr(t);
                e = e.lt(i.key, i);
            }));
            var r = [];
            return t.forEach((function(t) {
                var n = e.get(t);
                C$1(!!n, "Missing entity in write response for " + t), r.push(n);
            })), r;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC. */
    t.prototype.Vl = function(t, n) {
        var i = this;
        return this.credentials.getToken().then((function(e) {
            return i.connection.Vl(t, n, e);
        })).catch((function(t) {
            throw t.code === L$1.UNAUTHENTICATED && i.credentials.I(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */
    t.prototype.Nl = function(t, n) {
        var i = this;
        return this.credentials.getToken().then((function(e) {
            return i.connection.Nl(t, n, e);
        })).catch((function(t) {
            throw t.code === L$1.UNAUTHENTICATED && i.credentials.I(), t;
        }));
    }, t;
}(), $r = /** @class */ function() {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function t() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        !function(t, n, i, e) {
            if (!(n instanceof Array) || n.length < e) throw new B$1(L$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + i + " argument to be an array with at least " + pt(e, "element") + ".");
        }("FieldPath", t, "fieldNames", 1);
        for (var i = 0; i < t.length; ++i) if (it("FieldPath", "string", i, t[i]), 0 === t[i].length) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this.Ol = new Rt(t);
    }
    return t.documentId = function() {
        return t.Fl;
    }, t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) throw vt("isEqual", "FieldPath", 1, n);
        return this.Ol.isEqual(n.Ol);
    }, 
    /**
     * Internal Note: The backend doesn't technically support querying by
     * document ID. Instead it queries by the entire document name (full path
     * included), but in the cases we currently support documentId(), the net
     * effect is the same.
     */
    t.Fl = new t(Rt.st().nt()), t;
}(), Zr = new RegExp("[~\\*/\\[\\]]");

/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An opaque base class for FieldValue sentinel objects in our public API,
 * with public static methods for creating said sentinel objects.
 */
var tu, nu, iu = /** @class */ function() {
    function t(t) {
        this.Ul = t;
    }
    return t.delete = function() {
        return $("FieldValue.delete", arguments), eu.instance;
    }, t.serverTimestamp = function() {
        return $("FieldValue.serverTimestamp", arguments), ru.instance;
    }, t.arrayUnion = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
        return tt("FieldValue.arrayUnion", arguments, 1), new uu(t);
    }, t.arrayRemove = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
        return tt("FieldValue.arrayRemove", arguments, 1), new su(t);
    }, t.increment = function(t) {
        return it("FieldValue.increment", "number", 1, t), Z$1("FieldValue.increment", arguments, 1), 
        new ou(t);
    }, t.prototype.isEqual = function(t) {
        return this === t;
    }, t;
}(), eu = /** @class */ function(t) {
    function n() {
        return t.call(this, "FieldValue.delete") || this;
    }
    /** Singleton instance. */    return __extends(n, t), n.instance = new n, n;
}(iu), ru = /** @class */ function(t) {
    function n() {
        return t.call(this, "FieldValue.serverTimestamp") || this;
    }
    /** Singleton instance. */    return __extends(n, t), n.instance = new n, n;
}(iu), uu = /** @class */ function(t) {
    function n(n) {
        var i = t.call(this, "FieldValue.arrayUnion") || this;
        return i.xl = n, i;
    }
    return __extends(n, t), n;
}(iu), su = /** @class */ function(t) {
    function n(n) {
        var i = t.call(this, "FieldValue.arrayRemove") || this;
        return i.xl = n, i;
    }
    return __extends(n, t), n;
}(iu), ou = /** @class */ function(t) {
    function n(n) {
        var i = t.call(this, "FieldValue.increment") || this;
        return i.jl = n, i;
    }
    return __extends(n, t), n;
}(iu), hu = Qi(iu, "Use FieldValue.<field>() instead."), cu = /^__.*__$/, au = /** @class */ function() {
    function t(t, n, i) {
        this.data = t, this.on = n, this.fieldTransforms = i;
    }
    return t.prototype.Ll = function(t, n) {
        var i = [];
        return null !== this.on ? i.push(new Yt(t, this.data, this.on, n)) : i.push(new Jt(t, this.data, n)), 
        this.fieldTransforms.length > 0 && i.push(new Xt(t, this.fieldTransforms)), i;
    }, t;
}(), fu = /** @class */ function() {
    function t(t, n, i) {
        this.data = t, this.on = n, this.fieldTransforms = i;
    }
    return t.prototype.Ll = function(t, n) {
        var i = [ new Yt(t, this.data, this.on, n) ];
        return this.fieldTransforms.length > 0 && i.push(new Xt(t, this.fieldTransforms)), 
        i;
    }, t;
}();

function lu(t) {
    switch (t) {
      case tu.Set:
 // fall through
              case tu.Bl:
 // fall through
              case tu.Ml:
        return !0;

      case tu.ql:
      case tu.Ql:
        return !1;

      default:
        throw S$1("Unexpected case for UserDataSource: " + t);
    }
}

/** A "context" object passed around while parsing user data. */ (nu = tu || (tu = {}))[nu.Set = 0] = "Set", 
nu[nu.Ml = 1] = "__PRIVATE_Update", nu[nu.Bl = 2] = "__PRIVATE_MergeSet", 
/**
     * Indicates the source is a where clause, cursor bound, arrayUnion()
     * element, etc. Of note, isWrite(source) will return false.
     */
nu[nu.ql = 3] = "__PRIVATE_Argument", 
/**
     * Indicates that the source is an Argument that may directly contain nested
     * arrays (e.g. the operand of an `in` query).
     */
nu[nu.Ql = 4] = "__PRIVATE_ArrayArgument";

var du = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param dataSource Indicates what kind of API method this data came from.
     * @param methodName The name of the method the user called to create this
     *     ParseContext.
     * @param path A path within the object being parsed. This could be an empty
     *     path (in which case the context represents the root of the data being
     *     parsed), or a nonempty path (indicating the context represents a nested
     *     location within the data).
     * @param arrayElement Whether or not this context corresponds to an element
     *     of an array.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, n, i, e, r, u) {
        this.Gl = t, this.methodName = n, this.path = i, this.Wl = e, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === r && this.zl(), this.Wl = void 0 !== e && e, this.fieldTransforms = r || [], 
        this.on = u || [];
    }
    return t.prototype.Kl = function(n) {
        var i = null == this.path ? null : this.path.child(n), e = new t(this.Gl, this.methodName, i, 
        /*arrayElement=*/ !1, this.fieldTransforms, this.on);
        return e.Hl(n), e;
    }, t.prototype.Jl = function(n) {
        var i = null == this.path ? null : this.path.child(n), e = new t(this.Gl, this.methodName, i, 
        /*arrayElement=*/ !1, this.fieldTransforms, this.on);
        return e.zl(), e;
    }, t.prototype.Yl = function(n) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // null.
        return new t(this.Gl, this.methodName, 
        /*path=*/ null, 
        /*arrayElement=*/ !0, this.fieldTransforms, this.on);
    }, t.prototype.Xl = function(t) {
        var n = null === this.path || this.path.J() ? "" : " (found in field " + this.path.toString() + ")";
        return new B$1(L$1.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " + t + n);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
    t.prototype.contains = function(t) {
        return void 0 !== this.on.find((function(n) {
            return t.$(n);
        })) || void 0 !== this.fieldTransforms.find((function(n) {
            return t.$(n.field);
        }));
    }, t.prototype.zl = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (null !== this.path) for (var t = 0; t < this.path.length; t++) this.Hl(this.path.get(t));
    }, t.prototype.Hl = function(t) {
        if (0 === t.length) throw this.Xl("Document fields must not be empty");
        if (lu(this.Gl) && cu.test(t)) throw this.Xl('Document fields cannot begin and end with "__"');
    }, t;
}(), vu = function(t, n) {
    this.s = t, this.key = n;
}, wu = /** @class */ function() {
    function t(t) {
        this.$l = t;
    }
    /** Parse document data from a non-merge set() call. */    return t.prototype.Zl = function(t, n) {
        var i = new du(tu.Set, t, Rt.et);
        pu("Data must be an object, but it was:", i, n);
        var e = this.td(n, i);
        return new au(e, 
        /* fieldMask= */ null, i.fieldTransforms);
    }, 
    /** Parse document data from a set() call with '{merge:true}'. */
    t.prototype.nd = function(t, n, i) {
        var e = new du(tu.Bl, t, Rt.et);
        pu("Data must be an object, but it was:", e, n);
        var r, u, s = this.td(n, e);
        if (i) {
            for (var o = new kt(Rt.G), h = 0, c = i; h < c.length; h++) {
                var a = c[h], f = void 0;
                if (a instanceof $r) f = a.Ol; else {
                    if ("string" != typeof a) throw S$1("Expected stringOrFieldPath to be a string or a FieldPath");
                    f = bu(t, a);
                }
                if (!e.contains(f)) throw new B$1(L$1.INVALID_ARGUMENT, "Field '" + f + "' is specified in your field mask but missing from your input data.");
                o = o.add(f);
            }
            r = Bt.Jt(o), u = e.fieldTransforms.filter((function(t) {
                return r.Xt(t.field);
            }));
        } else r = Bt.Yt(e.on), u = e.fieldTransforms;
        return new au(s, r, u);
    }, 
    /** Parse update data from an update() call. */
    t.prototype.ed = function(t, n) {
        var i = this, e = new du(tu.Ml, t, Rt.et);
        pu("Data must be an object, but it was:", e, n);
        var r = new kt(Rt.G), u = wn.mn();
        Y$1(n, (function(n, s) {
            var o = bu(t, n), h = e.Jl(o);
            if ((s = i.rd(s, h)) instanceof eu) 
            // Add it to the field mask, but don't add anything to updateData.
            r = r.add(o); else {
                var c = i.td(s, h);
                null != c && (r = r.add(o), u.set(o, c));
            }
        }));
        var s = Bt.Jt(r);
        return new fu(u.fn(), s, e.fieldTransforms);
    }, 
    /** Parse update data from a list of field/value arguments. */
    t.prototype.ud = function(t, n, i, e) {
        var r = new du(tu.Ml, t, Rt.et), u = [ gu(t, n) ], s = [ i ];
        if (e.length % 2 != 0) throw new B$1(L$1.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
        for (var o = 0; o < e.length; o += 2) u.push(gu(t, e[o])), s.push(e[o + 1]);
        var h = new kt(Rt.G), c = wn.mn();
        for (o = 0; o < u.length; ++o) {
            var a = u[o], f = r.Jl(a), l = this.rd(s[o], f);
            if (l instanceof eu) 
            // Add it to the field mask, but don't add anything to updateData.
            h = h.add(a); else {
                var d = this.td(l, f);
                null != d && (h = h.add(a), c.set(a, d));
            }
        }
        var v = Bt.Jt(h);
        return new fu(c.fn(), v, r.fieldTransforms);
    }, 
    /**
     * Parse a "query value" (e.g. value in a where filter or a value in a cursor
     * bound).
     *
     * @param allowArrays Whether the query value is an array that may directly
     * contain additional arrays (e.g. the operand of an `in` query).
     */
    t.prototype.sd = function(t, n, i) {
        void 0 === i && (i = !1);
        var e = new du(i ? tu.Ql : tu.ql, t, Rt.et), r = this.td(n, e);
        return C$1(null != r, "Parsed data should not be null."), C$1(0 === e.fieldTransforms.length, "Field transforms should have been disallowed."), 
        r;
    }, 
    /** Sends data through this.preConverter, handling any thrown errors. */
    t.prototype.rd = function(t, n) {
        try {
            return this.$l(t);
        } catch (t) {
            var i = yu(t);
            throw n.Xl(i);
        }
    }, 
    /**
     * Internal helper for parsing user data.
     *
     * @param input Data to be parsed.
     * @param context A context object representing the current path being parsed,
     * the source of the data being parsed, etc.
     * @return The parsed value, or null if the value was a FieldValue sentinel
     * that should not be included in the resulting parsed data.
     */
    t.prototype.td = function(t, n) {
        if (mu(t = this.rd(t, n))) return pu("Unsupported field value:", n, t), this.od(t, n);
        if (t instanceof iu) 
        // FieldValues usually parse into transforms (except FieldValue.delete())
        // in which case we do not want to include this field in our parsed data
        // (as doing so will overwrite the field directly prior to the transform
        // trying to transform it). So we don't add this location to
        // context.fieldMask and we return null as our parsing result.
        return this.hd(t, n), null;
        if (
        // If context.path is null we are inside an array and we don't support
        // field mask paths more granular than the top-level array.
        n.path && n.on.push(n.path), t instanceof Array) {
            // TODO(b/34871131): Include the path containing the array in the error
            // message.
            // In the case of IN queries, the parsed data is an array (representing
            // the set of values to be included for the IN query) that may directly
            // contain additional arrays (each representing an individual field
            // value), so we disable this validation.
            if (n.Wl && n.Gl !== tu.Ql) throw n.Xl("Nested arrays are not supported");
            return this.ad(t, n);
        }
        return this.fd(t, n);
    }, t.prototype.od = function(t, n) {
        var i = this, e = new Dt(V$1);
        return X$1(t) ? 
        // If we encounter an empty object, we explicitly add it to the update
        // mask to ensure that the server creates a map entry.
        n.path && n.path.length > 0 && n.on.push(n.path) : Y$1(t, (function(t, r) {
            var u = i.td(r, n.Kl(t));
            null != u && (e = e.lt(t, u));
        })), new wn(e);
    }, t.prototype.ad = function(t, n) {
        for (var i = [], e = 0, r = 0, u = t; r < u.length; r++) {
            var s = u[r], o = this.td(s, n.Yl(e));
            null == o && (
            // Just include nulls in the array for fields being replaced with a
            // sentinel.
            o = en.On), i.push(o), e++;
        }
        return new pn(i);
    }, 
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    t.prototype.hd = function(t, n) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!lu(n.Gl)) throw n.Xl(t.Ul + "() can only be used with update() and set()");
        if (null === n.path) throw n.Xl(t.Ul + "() is not currently supported inside arrays");
        if (t instanceof eu) {
            if (n.Gl !== tu.Bl) throw n.Gl === tu.Ml ? (C$1(n.path.length > 0, "FieldValue.delete() at the top level should have already been handled."), 
            n.Xl("FieldValue.delete() can only appear at the top level of your update data")) : n.Xl("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
            // No transform to add for a delete, but we need to add it to our
            // fieldMask so it gets deleted.
            n.on.push(n.path);
        } else if (t instanceof ru) n.fieldTransforms.push(new Mt(n.path, Nt.instance)); else if (t instanceof uu) {
            var i = this.ld(t.Ul, t.xl), e = new Ot(i);
            n.fieldTransforms.push(new Mt(n.path, e));
        } else if (t instanceof su) {
            i = this.ld(t.Ul, t.xl);
            var r = new Ft(i);
            n.fieldTransforms.push(new Mt(n.path, r));
        } else if (t instanceof ou) {
            var u = this.sd("FieldValue.increment", t.jl), s = new Ut(u);
            n.fieldTransforms.push(new Mt(n.path, s));
        } else S$1("Unknown FieldValue type: " + t);
    }, 
    /**
     * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
     *
     * @return The parsed value
     */
    t.prototype.fd = function(t, n) {
        if (null === t) return en.On;
        if ("number" == typeof t) return Dn(t) ? new on(t) : new hn(t);
        if ("boolean" == typeof t) return rn.of(t);
        if ("string" == typeof t) return new cn(t);
        if (t instanceof Date) return new an(yt.fromDate(t));
        if (t instanceof yt) 
        // Firestore backend truncates precision down to microseconds. To ensure
        // offline mode works the same with regards to truncation, perform the
        // truncation immediately without waiting for the backend to do that.
        return new an(new yt(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3)));
        if (t instanceof gt) return new vn(t);
        if (t instanceof Hi) return new ln(t);
        if (t instanceof vu) return new dn(t.s, t.key);
        throw n.Xl("Unsupported field value: " + ft(t));
    }, t.prototype.ld = function(t, n) {
        var i = this;
        return n.map((function(n, e) {
            // Although array transforms are used with writes, the actual elements
            // being unioned or removed are not considered writes since they cannot
            // contain any FieldValue sentinels, etc.
            var r = new du(tu.ql, t, Rt.et);
            return i.td(n, r.Yl(e));
        }));
    }, t;
}();

/**
 * A placeholder object for DocumentReferences in this file, in order to
 * avoid a circular dependency. See the comments for `DataPreConverter` for
 * the full context.
 */
/**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */
function mu(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof yt || t instanceof gt || t instanceof Hi || t instanceof vu || t instanceof iu);
}

function pu(t, n, i) {
    if (!mu(i) || !at(i)) {
        var e = ft(i);
        throw "an object" === e ? n.Xl(t + " a custom object") : n.Xl(t + " " + e);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function gu(t, n) {
    if (n instanceof $r) return n.Ol;
    if ("string" == typeof n) return bu(t, n);
    throw new B$1(L$1.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.");
}

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 */ function bu(t, i) {
    try {
        /**
 * Parses a field path string into a FieldPath, treating dots as separators.
 */
        return function(t) {
            if (t.search(Zr) >= 0) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
            try {
                return new ($r.bind.apply($r, __spreadArrays([ void 0 ], t.split("."))));
            } catch (n) {
                throw new B$1(L$1.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            }
        }(i).Ol;
    } catch (n) {
        var e = yu(n);
        throw new B$1(L$1.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. " + e);
    }
}

/**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */ function yu(t) {
    return t instanceof Error ? t.message : t.toString();
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ var _u = /** @class */ function() {
    function t(t) {
        this.dd = t, 
        // The version of each document that was read during this transaction.
        this.vd = fi(), this.mutations = [], this.wd = !1, 
        /**
         * A deferred usage error that occurred previously in this transaction that
         * will cause the transaction to fail once it actually commits.
         */
        this.md = null, 
        /**
         * Set of documents that have been written in the transaction.
         *
         * When there's more than one write to the same key in a transaction, any
         * writes after the first are handled differently.
         */
        this.pd = new Set;
    }
    return t.prototype.lookup = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, i = this;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    if (this.gd(), this.mutations.length > 0) throw new B$1(L$1.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , this.dd.lookup(t) ];

                  case 1:
                    return (n = e.sent()).forEach((function(t) {
                        t instanceof yn || t instanceof bn ? i.bd(t) : S$1("Document in a transaction was a " + t.constructor.name);
                    })), [ 2 /*return*/ , n ];
                }
            }));
        }));
    }, t.prototype.set = function(t, n) {
        this.write(n.Ll(t, this.rn(t))), this.pd.add(t);
    }, t.prototype.update = function(t, n) {
        try {
            this.write(n.Ll(t, this.yd(t)));
        } catch (t) {
            this.md = t;
        }
        this.pd.add(t);
    }, t.prototype.delete = function(t) {
        this.write([ new $t(t, this.rn(t)) ]), this.pd.add(t);
    }, t.prototype.commit = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, n = this;
            return __generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    if (this.gd(), this.md) throw this.md;
                    return t = this.vd, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(n) {
                        t = t.remove(n.key);
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, i) {
                        n.mutations.push(new Zt(t, n.rn(t)));
                    })), [ 4 /*yield*/ , this.dd.commit(this.mutations) ];

                  case 1:
                    return i.sent(), this.wd = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.bd = function(t) {
        var n;
        if (t instanceof bn) n = t.version; else {
            if (!(t instanceof yn)) throw S$1("Document in a transaction was a " + t.constructor.name);
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
            n = _t.B();
        }
        var i = this.vd.get(t.key);
        if (null !== i) {
            if (!n.isEqual(i)) 
            // This transaction will fail no matter what.
            throw new B$1(L$1.ABORTED, "Document version changed between two reads.");
        } else this.vd = this.vd.lt(t.key, n);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.rn = function(t) {
        var n = this.vd.get(t);
        return !this.pd.has(t) && n ? Kt.updateTime(n) : Kt.NONE;
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.yd = function(t) {
        var n = this.vd.get(t);
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.pd.has(t) && n) {
            if (n.isEqual(_t.B())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new B$1(L$1.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return Kt.updateTime(n);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
        return Kt.exists(!0);
    }, t.prototype.write = function(t) {
        this.gd(), this.mutations = this.mutations.concat(t);
    }, t.prototype.gd = function() {
        C$1(!this.wd, "A transaction object cannot be used after its update callback has been invoked.");
    }, t;
}(), Iu = /** @class */ function() {
    function t(t, n) {
        this.Pu = t, this._d = n, 
        /** The current OnlineState. */
        this.state = "Unknown", 
        /**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */
        this.Id = 0, 
        /**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */
        this.Td = null, 
        /**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */
        this.Ed = !0;
    }
    /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */    return t.prototype.Rd = function() {
        var t = this;
        0 === this.Id && (this.Ad("Unknown"), C$1(null === this.Td, "onlineStateTimer shouldn't be started yet"), 
        this.Td = this.Pu.Yu(zi.Eu, 1e4, (function() {
            // NOTE: handleWatchStreamFailure() will continue to increment
            // watchStreamFailures even though we are already marked Offline,
            // but this is non-harmful.
            return t.Td = null, C$1("Unknown" === t.state, "Timer should be canceled if we transitioned to a different state."), 
            t.Dd("Backend didn't respond within 10 seconds."), t.Ad("Offline"), Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.Pd = function(t) {
        "Online" === this.state ? (this.Ad("Unknown"), 
        // To get to OnlineState.Online, set() must have been called which would
        // have reset our heuristics.
        C$1(0 === this.Id, "watchStreamFailures must be 0"), C$1(null === this.Td, "onlineStateTimer must be null")) : (this.Id++, 
        this.Id >= 1 && (this.Sd(), this.Dd("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.Ad("Offline")));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.Sd(), this.Id = 0, "Online" === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Ed = !1), this.Ad(t);
    }, t.prototype.Ad = function(t) {
        t !== this.state && (this.state = t, this._d(t));
    }, t.prototype.Dd = function(t) {
        var n = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Ed ? (D$1(n), this.Ed = !1) : A$1("OnlineStateTracker", n);
    }, t.prototype.Sd = function() {
        null !== this.Td && (this.Td.cancel(), this.Td = null);
    }, t;
}(), Tu = "RemoteStore", Eu = /** @class */ function() {
    function t(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    n, i, e, s) {
        var o = this;
        this.Nc = t, this.dd = n, 
        /**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */
        this.Cd = [], 
        /**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */
        this.kd = {}, this.Vd = null, 
        /**
         * Set to true by enableNetwork() and false by disableNetwork() and indicates
         * the user-preferred network state.
         */
        this.networkEnabled = !1, this.isPrimary = !1, this.Nd = s, this.Nd.Od((function(t) {
            i.xu((function() {
                return __awaiter(o, void 0, void 0, (function() {
                    return __generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return this.Fd() ? (A$1(Tu, "Restarting streams for network reachability change."), 
                            [ 4 /*yield*/ , this.Ud() ]) : [ 3 /*break*/ , 2 ];

                          case 1:
                            t.sent(), t.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }));
        })), this.xd = new Iu(i, e), 
        // Create streams (but note they're not started yet).
        this.jd = this.dd.kl({
            yl: this.Ld.bind(this),
            wl: this.Bd.bind(this),
            Il: this.Md.bind(this)
        }), this.qd = this.dd.Cl({
            yl: this.Qd.bind(this),
            wl: this.Gd.bind(this),
            Pl: this.Wd.bind(this),
            Dl: this.Dl.bind(this)
        });
    }
    /**
     * Starts up the remote store, creating streams, restoring state from
     * LocalStore, etc.
     */    return t.prototype.start = function() {
        return this.enableNetwork();
    }, 
    /** Re-enables the network. Idempotent. */
    t.prototype.enableNetwork = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.networkEnabled = !0, this.Fd() ? (t = this.qd, [ 4 /*yield*/ , this.Nc._o() ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    // This will start the write stream if necessary.
                    return t.lastStreamToken = n.sent(), this.zd() ? this.Kd() : this.xd.set("Unknown"), 
                    [ 4 /*yield*/ , this.Hd() ];

                  case 2:
                    // This will start the write stream if necessary.
                    n.sent(), n.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Temporarily disables the network. The network can be re-enabled using
     * enableNetwork().
     */
    t.prototype.disableNetwork = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this.Jd() ];

                  case 1:
                    return t.sent(), 
                    // Set the OnlineState to Offline so get()s return from cache, etc.
                    this.xd.set("Offline"), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Jd = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.qd.stop() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.jd.stop() ];

                  case 2:
                    return t.sent(), this.Cd.length > 0 && (A$1(Tu, "Stopping write stream with " + this.Cd.length + " pending writes"), 
                    this.Cd = []), this.Yd(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.shutdown = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return A$1(Tu, "RemoteStore shutting down."), this.networkEnabled = !1, [ 4 /*yield*/ , this.Jd() ];

                  case 1:
                    return t.sent(), this.Nd.shutdown(), 
                    // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                    // triggering spurious listener events with cached data, etc.
                    this.xd.set("Unknown"), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */
    t.prototype.listen = function(t) {
        K$1(this.kd, t.targetId) || (
        // Mark this as something the client is currently listening for.
        this.kd[t.targetId] = t, this.zd() ? 
        // The listen will be sent in onWatchStreamOpen
        this.Kd() : this.jd.ol() && this.Xd(t));
    }, 
    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */
    t.prototype.$d = function(t) {
        C$1(K$1(this.kd, t), "unlisten called on target no currently watched: " + t), delete this.kd[t], 
        this.jd.ol() && this.Zd(t), X$1(this.kd) && (this.jd.ol() ? this.jd.al() : this.Fd() && 
        // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        this.xd.set("Unknown"));
    }, 
    /** {@link TargetMetadataProvider.getTargetDataForTarget} */
    t.prototype.Ye = function(t) {
        return this.kd[t] || null;
    }, 
    /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */
    t.prototype.Je = function(t) {
        return this.tv.Je(t);
    }, 
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */
    t.prototype.Xd = function(t) {
        this.Vd.De(t.targetId), this.jd.watch(t);
    }, 
    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */
    t.prototype.Zd = function(t) {
        this.Vd.De(t), this.jd.Tl(t);
    }, t.prototype.Kd = function() {
        C$1(this.zd(), "startWatchStream() called when shouldStartWatchStream() is false."), 
        this.Vd = new ki(this), this.jd.start(), this.xd.Rd();
    }, 
    /**
     * Returns whether the watch stream should be started because it's necessary
     * and has not yet been started.
     */
    t.prototype.zd = function() {
        return this.Fd() && !this.jd.sl() && !X$1(this.kd);
    }, t.prototype.Fd = function() {
        return this.isPrimary && this.networkEnabled;
    }, t.prototype.Yd = function() {
        this.Vd = null;
    }, t.prototype.Ld = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t = this;
            return __generator(this, (function(n) {
                return J$1(this.kd, (function(n, i) {
                    t.Xd(i);
                })), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Bd = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(n) {
                return void 0 === t && 
                // Graceful stop (due to stop() or idle timeout). Make sure that's
                // desirable.
                C$1(!this.zd(), "Watch stream was stopped gracefully while still needed."), this.Yd(), 
                // If we still need the watch stream, retry the connection.
                this.zd() ? (this.xd.Pd(t), this.Kd()) : 
                // No need to restart watch stream because there are no active targets.
                // The online state is set to unknown because there is no active attempt
                // at establishing a connection
                this.xd.set("Unknown"), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Md = function(t, n) {
        return __awaiter(this, void 0, void 0, (function() {
            var i;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Mark the client as online since we got a message from the server
                    return this.xd.set("Online"), t instanceof Si && t.state === _i.Mi && t.cause ? [ 2 /*return*/ , this.nv(t) ] : (t instanceof Di ? this.Vd.Fe(t) : t instanceof Pi ? this.Vd.Qe(t) : (C$1(t instanceof Si, "Expected watchChange to be an instance of WatchTargetChange"), 
                    this.Vd.je(t)), n.isEqual(_t.MIN) ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , this.Nc.xh() ]);

                  case 1:
                    return i = e.sent(), n.h(i) >= 0 ? [ 4 /*yield*/ , this.iv(n) ] : [ 3 /*break*/ , 3 ];

                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.MIN.
                                      case 2:
                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.MIN.
                    e.sent(), e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */
    t.prototype.iv = function(t) {
        var n = this;
        C$1(!t.isEqual(_t.MIN), "Can't raise event for unknown SnapshotVersion");
        var i = this.Vd.ze(t);
        // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
                // Finally raise remote event
        return J$1(i.Zi, (function(i, e) {
            if (e.resumeToken.Nn() > 0) {
                var r = n.kd[i];
                // A watched target might have been removed already.
                                r && (n.kd[i] = r.Fi(e.resumeToken, t));
            }
        })), 
        // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        i.te.forEach((function(t) {
            var i = n.kd[t];
            if (i) {
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                n.kd[t] = i.Fi(Jn.Pi, i.Ni), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                n.Zd(t);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                var e = new ti(i.target, t, Kn.Ci, i.sequenceNumber);
                n.Xd(e);
            }
        })), this.tv.jh(i);
    }, 
    /** Handles an error on a target */
    t.prototype.nv = function(t) {
        var n = this;
        C$1(!!t.cause, "Handling target error without a cause");
        var i = t.cause, e = Promise.resolve();
        return t.targetIds.forEach((function(t) {
            e = e.then((function() {
                return __awaiter(n, void 0, void 0, (function() {
                    return __generator(this, (function(n) {
                        // A watched target might have been removed already.
                        return K$1(this.kd, t) ? (delete this.kd[t], this.Vd.removeTarget(t), [ 2 /*return*/ , this.tv.ev(t, i) ]) : [ 2 /*return*/ ];
                    }));
                }));
            }));
        })), e;
    }, 
    /**
     * Attempts to fill our write pipeline with writes from the LocalStore.
     *
     * Called internally to bootstrap or refill the write pipeline and by
     * SyncEngine whenever there are new mutations to process.
     *
     * Starts the write stream if necessary.
     */
    t.prototype.Hd = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, n;
            return __generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return this.rv() ? (t = this.Cd.length > 0 ? this.Cd[this.Cd.length - 1].batchId : -1, 
                    [ 4 /*yield*/ , this.Nc.Hh(t) ]) : [ 3 /*break*/ , 4 ];

                  case 1:
                    return null !== (n = i.sent()) ? [ 3 /*break*/ , 2 ] : (0 === this.Cd.length && this.qd.al(), 
                    [ 3 /*break*/ , 4 ]);

                  case 2:
                    return this.uv(n), [ 4 /*yield*/ , this.Hd() ];

                  case 3:
                    i.sent(), i.label = 4;

                  case 4:
                    return this.sv() && this.ov(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns true if we can add to the write pipeline (i.e. the network is
     * enabled and the write pipeline is not full).
     */
    t.prototype.rv = function() {
        return this.Fd() && this.Cd.length < 10;
    }, 
    // For testing
    t.prototype.hv = function() {
        return this.Cd.length;
    }, 
    /**
     * Queues additional writes to be sent to the write stream, sending them
     * immediately if the write stream is established.
     */
    t.prototype.uv = function(t) {
        C$1(this.rv(), "addToWritePipeline called when pipeline is full"), this.Cd.push(t), 
        this.qd.ol() && this.qd.Rl && this.qd.Al(t.mutations);
    }, t.prototype.sv = function() {
        return this.Fd() && !this.qd.sl() && this.Cd.length > 0;
    }, t.prototype.ov = function() {
        C$1(this.sv(), "startWriteStream() called when shouldStartWriteStream() is false."), 
        this.qd.start();
    }, t.prototype.Qd = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return this.qd.Sl(), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Wd = function() {
        var t = this;
        // Record the stream token.
                return this.Nc.Io(this.qd.lastStreamToken).then((function() {
            // Send the write pipeline now that the stream is established.
            for (var n = 0, i = t.Cd; n < i.length; n++) {
                var e = i[n];
                t.qd.Al(e.mutations);
            }
        })).catch(je);
    }, t.prototype.Dl = function(t, n) {
        var i = this;
        // This is a response to a write containing mutations and should be
        // correlated to the first write in our write pipeline.
                C$1(this.Cd.length > 0, "Got result for empty write pipeline");
        var e = this.Cd.shift(), r = ce.from(e, t, n, this.qd.lastStreamToken);
        return this.tv.cv(r).then((function() {
            // It's possible that with the completion of this mutation another
            // slot has freed up.
            return i.Hd();
        }));
    }, t.prototype.Gd = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n = this;
            return __generator(this, (function(i) {
                // If the write stream closed due to an error, invoke the error callbacks if
                // there are pending writes.
                return void 0 === t && 
                // Graceful stop (due to stop() or idle timeout). Make sure that's
                // desirable.
                C$1(!this.sv(), "Write stream was stopped gracefully while still needed."), t && this.Cd.length > 0 ? ([ 2 /*return*/ , (this.qd.Rl ? this.av(t) : this.fv(t)).then((function() {
                    // The write stream might have been started by refilling the write
                    // pipeline for failed writes
                    n.sv() && n.ov();
                })) ]) : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.fv = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(n) {
                // Reset the token if it's a permanent error, signaling the write stream is
                // no longer valid. Note that the handshake does not count as a write: see
                // comments on isPermanentWriteError for details.
                return ii(t.code) ? (A$1(Tu, "RemoteStore error before completed handshake; resetting stream token: ", this.qd.lastStreamToken), 
                this.qd.lastStreamToken = Jn.Pi, [ 2 /*return*/ , this.Nc.Io(Jn.Pi).catch(je) ]) : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.av = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, i = this;
            return __generator(this, (function(e) {
                // Only handle permanent errors here. If it's transient, just let the retry
                // logic kick in.
                return ii(r = t.code) && r !== L$1.ABORTED ? (n = this.Cd.shift(), 
                // In this case it's also unlikely that the server itself is melting
                // down -- this was just a bad request so inhibit backoff on the next
                // restart.
                this.qd.cl(), [ 2 /*return*/ , this.tv.lv(n.batchId, t).then((function() {
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    return i.Hd();
                })) ]) : [ 2 /*return*/ ];
                var r;
                /**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */            }));
        }));
    }, t.prototype.dv = function() {
        return new _u(this.dd);
    }, t.prototype.Ud = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this.Jd() ];

                  case 1:
                    return t.sent(), this.xd.set("Unknown"), [ 4 /*yield*/ , this.enableNetwork() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.vv = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Fd() ? (
                    // Tear down and re-create our network streams. This will ensure we get a fresh auth token
                    // for the new user and re-fill the write pipeline with new mutations from the LocalStore
                    // (since mutations are per-user).
                    A$1(Tu, "RemoteStore restarting streams for new credential"), [ 4 /*yield*/ , this.Ud() ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */
    t.prototype.wv = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.isPrimary = t, t && this.networkEnabled ? [ 4 /*yield*/ , this.enableNetwork() ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    return n.sent(), [ 3 /*break*/ , 4 ];

                  case 2:
                    return t ? [ 3 /*break*/ , 4 ] : [ 4 /*yield*/ , this.Jd() ];

                  case 3:
                    n.sent(), this.xd.set("Unknown"), n.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}(), Ru = "firestore_clients";

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Assembles the key for a client state in WebStorage */
function Au(t, n) {
    return C$1(-1 === n.indexOf("_"), "Client key cannot contain '_', but was '" + n + "'"), 
    Ru + "_" + t + "_" + n;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
//
// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
var Du = "firestore_mutations";

/** Assembles the key for a mutation batch in WebStorage */ function Pu(t, n, i) {
    var e = Du + "_" + t + "_" + i;
    return n.l() && (e += "_" + n.uid), e;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
var Su = "firestore_targets";

/** Assembles the key for a query state in WebStorage */ function Cu(t, n) {
    return Su + "_" + t + "_" + n;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
var ku = "firestore_online_state";

/** Assembles the key for the online state of the primary tab. */
// The WebStorage key prefix for the key that stores the last sequence number allocated. The key
// looks like 'firestore_sequence_number_<persistence_prefix>'.
var Vu = "firestore_sequence_number";

/** Assembles the key for the current sequence number. */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nu = "SharedClientState", Ou = /** @class */ function() {
    function t(t, n, i, e) {
        this.user = t, this.batchId = n, this.state = i, this.error = e, C$1(void 0 !== e == ("rejected" === i), "MutationMetadata must contain an error iff state is 'rejected'");
    }
    /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    return t.mv = function(n, i, e) {
        var r = JSON.parse(e), u = "object" == typeof r && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error), s = void 0;
        return u && r.error && (u = "string" == typeof r.error.message && "string" == typeof r.error.code) && (s = new B$1(r.error.code, r.error.message)), 
        u ? new t(n, i, r.state, s) : (D$1(Nu, "Failed to parse mutation state for ID '" + i + "': " + e), 
        null);
    }, t.prototype.pv = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), Fu = /** @class */ function() {
    function t(t, n, i) {
        this.targetId = t, this.state = n, this.error = i, C$1(void 0 !== i == ("rejected" === n), "QueryTargetMetadata must contain an error iff state is 'rejected'");
    }
    /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    return t.mv = function(n, i) {
        var e = JSON.parse(i), r = "object" == typeof e && -1 !== [ "not-current", "current", "rejected" ].indexOf(e.state) && (void 0 === e.error || "object" == typeof e.error), u = void 0;
        return r && e.error && (r = "string" == typeof e.error.message && "string" == typeof e.error.code) && (u = new B$1(e.error.code, e.error.message)), 
        r ? new t(n, e.state, u) : (D$1(Nu, "Failed to parse target state for ID '" + n + "': " + i), 
        null);
    }, t.prototype.pv = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), Uu = /** @class */ function() {
    function t(t, n) {
        this.clientId = t, this.activeTargetIds = n;
    }
    /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    return t.mv = function(n, i) {
        for (var e = JSON.parse(i), r = "object" == typeof e && e.activeTargetIds instanceof Array, u = wi(), s = 0; r && s < e.activeTargetIds.length; ++s) r = Dn(e.activeTargetIds[s]), 
        u = u.add(e.activeTargetIds[s]);
        return r ? new t(n, u) : (D$1(Nu, "Failed to parse client data for instance '" + n + "': " + i), 
        null);
    }, t;
}(), xu = /** @class */ function() {
    function t(t, n) {
        this.clientId = t, this.onlineState = n;
    }
    /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    return t.mv = function(n) {
        var i = JSON.parse(n);
        return "object" == typeof i && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(i.onlineState) && "string" == typeof i.clientId ? new t(i.clientId, i.onlineState) : (D$1(Nu, "Failed to parse online state: " + n), 
        null);
    }, t;
}(), ju = /** @class */ function() {
    function t() {
        this.activeTargetIds = wi();
    }
    return t.prototype.gv = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.bv = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.pv = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.tt(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), Lu = /** @class */ function() {
    function t(n, i, e, r, u) {
        if (this.Aa = n, this.platform = i, this.persistenceKey = e, this.yv = r, this.tv = null, 
        this._d = null, this.vu = null, this._v = {}, this.Iv = this.Tv.bind(this), this.mh = !1, 
        /**
         * Captures WebStorage events that occur before `start()` is called. These
         * events are replayed once `WebStorageSharedClientState` is started.
         */
        this.Ev = [], !t.Hs(this.platform)) throw new B$1(L$1.UNIMPLEMENTED, "LocalStorage is not available on this platform.");
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
                var s = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.platform.window.localStorage, this.currentUser = u, this.Rv = Au(this.persistenceKey, this.yv), 
        this.Av = function(t) {
            return Vu + "_" + t;
        }(this.persistenceKey), this._v[this.yv] = new ju, this.Dv = new RegExp("^" + Ru + "_" + s + "_([^_]*)$"), 
        this.Pv = new RegExp("^" + Du + "_" + s + "_(\\d+)(?:_(.*))?$"), this.Sv = new RegExp("^" + Su + "_" + s + "_(\\d+)$"), 
        this.Cv = function(t) {
            return ku + "_" + t;
        }(this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.platform.window.addEventListener("storage", this.Iv);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    return t.Hs = function(t) {
        return !(!t.window || null == t.window.localStorage);
    }, t.prototype.start = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, n, i, e, r, s, o, h, c, a, f, l = this;
            return __generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return C$1(!this.mh, "WebStorageSharedClientState already started"), C$1(null !== this.tv, "syncEngine property must be set before calling start()"), 
                    C$1(null !== this._d, "onlineStateHandler property must be set before calling start()"), 
                    [ 4 /*yield*/ , this.tv.uc() ];

                  case 1:
                    for (t = u.sent(), n = 0, i = t; n < i.length; n++) (e = i[n]) !== this.yv && (r = this.getItem(Au(this.persistenceKey, e))) && (s = Uu.mv(e, r)) && (this._v[s.clientId] = s);
                    for (this.kv(), (o = this.storage.getItem(this.Cv)) && (h = this.Vv(o)) && this.Nv(h), 
                    c = 0, a = this.Ev; c < a.length; c++) f = a[c], this.Tv(f);
                    return this.Ev = [], 
                    // Register a window unload hook to remove the client metadata entry from
                    // WebStorage even if `shutdown()` was not called.
                    this.platform.window.addEventListener("unload", (function() {
                        return l.shutdown();
                    })), this.mh = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.pu = function(t) {
        this.setItem(this.Av, JSON.stringify(t));
    }, t.prototype.Ov = function() {
        var t = wi();
        return Y$1(this._v, (function(n, i) {
            t = t.qt(i.activeTargetIds);
        })), t;
    }, t.prototype.Fv = function(t) {
        // This is not using `obj.forEach` since `forEach` doesn't support early
        // return.
        for (var n in this._v) if (this._v.hasOwnProperty(n) && this._v[n].activeTargetIds.has(t)) return !0;
        return !1;
    }, t.prototype.Uv = function(t) {
        this.xv(t, "pending");
    }, t.prototype.jv = function(t, n, i) {
        this.xv(t, n, i), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.Lv(t);
    }, t.prototype.Bv = function(t) {
        var n = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.Fv(t)) {
            var i = this.storage.getItem(Cu(this.persistenceKey, t));
            if (i) {
                var e = Fu.mv(t, i);
                e && (n = e.state);
            }
        }
        return this.Mv.gv(t), this.kv(), n;
    }, t.prototype.qv = function(t) {
        this.Mv.bv(t), this.kv();
    }, t.prototype.Qv = function(t) {
        return this.Mv.activeTargetIds.has(t);
    }, t.prototype.Gv = function(t) {
        this.removeItem(Cu(this.persistenceKey, t));
    }, t.prototype.Wv = function(t, n, i) {
        this.zv(t, n, i);
    }, t.prototype.Dh = function(t, n, i) {
        var e = this;
        n.forEach((function(t) {
            e.Lv(t);
        })), this.currentUser = t, i.forEach((function(t) {
            e.Uv(t);
        }));
    }, t.prototype.Kv = function(t) {
        this.Hv(t);
    }, t.prototype.shutdown = function() {
        this.mh && (this.platform.window.removeEventListener("storage", this.Iv), this.removeItem(this.Rv), 
        this.mh = !1);
    }, t.prototype.getItem = function(t) {
        var n = this.storage.getItem(t);
        return A$1(Nu, "READ", t, n), n;
    }, t.prototype.setItem = function(t, n) {
        A$1(Nu, "SET", t, n), this.storage.setItem(t, n);
    }, t.prototype.removeItem = function(t) {
        A$1(Nu, "REMOVE", t), this.storage.removeItem(t);
    }, t.prototype.Tv = function(t) {
        var n = this;
        if (t.storageArea === this.storage) {
            if (A$1(Nu, "EVENT", t.key, t.newValue), t.key === this.Rv) return void D$1("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.Aa.xu((function() {
                return __awaiter(n, void 0, void 0, (function() {
                    var n, i, e, r, s, o;
                    return __generator(this, (function(u) {
                        if (!this.mh) return this.Ev.push(t), [ 2 /*return*/ ];
                        if (null === t.key) return [ 2 /*return*/ ];
                        if (this.Dv.test(t.key)) {
                            if (null == t.newValue) return i = this.Jv(t.key), [ 2 /*return*/ , this.Yv(i, null) ];
                            if (n = this.Xv(t.key, t.newValue)) return [ 2 /*return*/ , this.Yv(n.clientId, n) ];
                        } else if (this.Pv.test(t.key)) {
                            if (null !== t.newValue && (e = this.$v(t.key, t.newValue))) return [ 2 /*return*/ , this.Zv(e) ];
                        } else if (this.Sv.test(t.key)) {
                            if (null !== t.newValue && (r = this.tw(t.key, t.newValue))) return [ 2 /*return*/ , this.nw(r) ];
                        } else if (t.key === this.Cv) {
                            if (null !== t.newValue && (s = this.Vv(t.newValue))) return [ 2 /*return*/ , this.Nv(s) ];
                        } else t.key === this.Av && (C$1(!!this.vu, "Missing sequenceNumberHandler"), (o = function(t) {
                            var n = Yi.gu;
                            if (null != t) try {
                                var i = JSON.parse(t);
                                C$1("number" == typeof i, "Found non-numeric sequence number"), n = i;
                            } catch (t) {
                                D$1(Nu, "Failed to read sequence number from WebStorage", t);
                            }
                            return n;
                        }
                        /**
 * `MemorySharedClientState` is a simple implementation of SharedClientState for
 * clients using memory persistence. The state in this class remains fully
 * isolated and no synchronization is performed.
 */ (t.newValue)) !== Yi.gu && this.vu(o));
                        return [ 2 /*return*/ ];
                    }));
                }));
            }));
        }
    }, Object.defineProperty(t.prototype, "Mv", {
        get: function() {
            return this._v[this.yv];
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.kv = function() {
        this.setItem(this.Rv, this.Mv.pv());
    }, t.prototype.xv = function(t, n, i) {
        var e = new Ou(this.currentUser, t, n, i), r = Pu(this.persistenceKey, this.currentUser, t);
        this.setItem(r, e.pv());
    }, t.prototype.Lv = function(t) {
        var n = Pu(this.persistenceKey, this.currentUser, t);
        this.removeItem(n);
    }, t.prototype.Hv = function(t) {
        var n = {
            clientId: this.yv,
            onlineState: t
        };
        this.storage.setItem(this.Cv, JSON.stringify(n));
    }, t.prototype.zv = function(t, n, i) {
        var e = Cu(this.persistenceKey, t), r = new Fu(t, n, i);
        this.setItem(e, r.pv());
    }, 
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */
    t.prototype.Jv = function(t) {
        var n = this.Dv.exec(t);
        return n ? n[1] : null;
    }, 
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */
    t.prototype.Xv = function(t, n) {
        var i = this.Jv(t);
        return C$1(null !== i, "Cannot parse client state key '" + t + "'"), Uu.mv(i, n);
    }, 
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.$v = function(t, n) {
        var i = this.Pv.exec(t);
        C$1(null !== i, "Cannot parse mutation batch key '" + t + "'");
        var e = Number(i[1]), r = void 0 !== i[2] ? i[2] : null;
        return Ou.mv(new j(r), e, n);
    }, 
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.tw = function(t, n) {
        var i = this.Sv.exec(t);
        C$1(null !== i, "Cannot parse query target key '" + t + "'");
        var e = Number(i[1]);
        return Fu.mv(e, n);
    }, 
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Vv = function(t) {
        return xu.mv(t);
    }, t.prototype.Zv = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(n) {
                return t.user.uid !== this.currentUser.uid ? (A$1(Nu, "Ignoring mutation for non-active user " + t.user.uid), 
                [ 2 /*return*/ ]) : [ 2 /*return*/ , this.tv.iw(t.batchId, t.state, t.error) ];
            }));
        }));
    }, t.prototype.nw = function(t) {
        return this.tv.ew(t.targetId, t.state, t.error);
    }, t.prototype.Yv = function(t, n) {
        var i = this, e = this.Ov();
        n ? this._v[t] = n : delete this._v[t];
        var s = this.Ov(), o = [], h = [];
        return s.forEach((function(t) {
            return __awaiter(i, void 0, void 0, (function() {
                return __generator(this, (function(n) {
                    return e.has(t) || o.push(t), [ 2 /*return*/ ];
                }));
            }));
        })), e.forEach((function(t) {
            return __awaiter(i, void 0, void 0, (function() {
                return __generator(this, (function(n) {
                    return s.has(t) || h.push(t), [ 2 /*return*/ ];
                }));
            }));
        })), this.tv.rw(o, h);
    }, t.prototype.Nv = function(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this._v[t.clientId] && this._d(t.onlineState);
    }, t;
}();

/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
var Bu = /** @class */ function() {
    function t() {
        this.uw = new ju, this.sw = {}, this.tv = null, this._d = null, this.vu = null;
    }
    return t.prototype.Uv = function(t) {
        // No op.
    }, t.prototype.jv = function(t, n, i) {
        // No op.
    }, t.prototype.Bv = function(t) {
        return this.uw.gv(t), this.sw[t] || "not-current";
    }, t.prototype.Wv = function(t, n, i) {
        this.sw[t] = n;
    }, t.prototype.qv = function(t) {
        this.uw.bv(t);
    }, t.prototype.Qv = function(t) {
        return this.uw.activeTargetIds.has(t);
    }, t.prototype.Gv = function(t) {
        delete this.sw[t];
    }, t.prototype.Ov = function() {
        return this.uw.activeTargetIds;
    }, t.prototype.Fv = function(t) {
        return this.uw.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.uw = new ju, Promise.resolve();
    }, t.prototype.Dh = function(t, n, i) {
        // No op.
    }, t.prototype.Kv = function(t) {
        // No op.
    }, t.prototype.shutdown = function() {}, t.prototype.pu = function(t) {}, t;
}(), Mu = function(t) {
    this.key = t;
}, qu = function(t) {
    this.key = t;
}, Qu = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    n) {
        this.query = t, this.ow = n, this.hw = null, 
        /**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */
        this.ue = !1, 
        /** Documents in the view but not in the remote target */
        this.cw = di(), 
        /** Document Keys that have local changes */
        this.Ji = di(), this.aw = new yi(t.di.bind(t));
    }
    return Object.defineProperty(t.prototype, "fw", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.ow;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    t.prototype.lw = function(t, n) {
        var i = this, e = n ? n.dw : new Ti, r = n ? n.aw : this.aw, u = n ? n.Ji : this.Ji, s = r, o = !1, h = this.query.gi() && r.size === this.query.limit ? r.last() : null, c = this.query.bi() && r.size === this.query.limit ? r.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.pt((function(t, n) {
            var a = r.get(t), f = n instanceof bn ? n : null;
            f && (C$1(t.isEqual(f.key), "Mismatching keys found in document changes: " + t + " != " + f.key), 
            f = i.query.matches(f) ? f : null);
            var l = !!a && i.Ji.has(a.key), d = !!f && (f.un || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            i.Ji.has(f.key) && f.hasCommittedMutations), v = !1;
            // Calculate change
            a && f ? a.data().isEqual(f.data()) ? l !== d && (e.track({
                type: mi.Qi,
                doc: f
            }), v = !0) : i.vw(a, f) || (e.track({
                type: mi.qi,
                doc: f
            }), v = !0, (h && i.query.di(f, h) > 0 || c && i.query.di(f, c) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            o = !0)) : !a && f ? (e.track({
                type: mi.Bi,
                doc: f
            }), v = !0) : a && !f && (e.track({
                type: mi.Mi,
                doc: a
            }), v = !0, (h || c) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            o = !0));
            v && (f ? (s = s.add(f), u = d ? u.add(t) : u.delete(t)) : (s = s.delete(t), u = u.delete(t)));
        })), this.query.gi() || this.query.bi()) for (;s.size > this.query.limit; ) {
            var a = this.query.gi() ? s.last() : s.first();
            s = s.delete(a.key), u = u.delete(a.key), e.track({
                type: mi.Mi,
                doc: a
            });
        }
        return C$1(!o || !n, "View was refilled using docs that themselves needed refilling."), 
        {
            aw: s,
            dw: e,
            gf: o,
            Ji: u
        };
    }, t.prototype.vw = function(t, n) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.un && n.hasCommittedMutations && !n.un;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.qs = function(t, n, i) {
        var e = this;
        C$1(!t.gf, "Cannot apply changes that need a refill");
        var r = this.aw;
        this.aw = t.aw, this.Ji = t.Ji;
        // Sort changes based on type and query comparator
        var u = t.dw.Ki();
        u.sort((function(t, n) {
            return function(t, n) {
                var i = function(t) {
                    switch (t) {
                      case mi.Bi:
                        return 1;

                      case mi.qi:
                      case mi.Qi:
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case mi.Mi:
                        return 0;

                      default:
                        return S$1("Unknown ChangeType: " + t);
                    }
                };
                return i(t) - i(n);
            }
            /**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (t.type, n.type) || e.query.di(t.doc, n.doc);
        })), this.ww(i);
        var s = n ? this.mw() : [], o = 0 === this.cw.size && this.ue ? gi.Wi : gi.Gi, h = o !== this.hw;
        return this.hw = o, 0 !== u.length || h ? {
            snapshot: new Ei(this.query, t.aw, r, u, t.Ji, o === gi.Gi, h, 
            /* excludesMetadataChanges= */ !1),
            pw: s
        } : {
            pw: s
        };
    }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.gw = function(t) {
        return this.ue && "Offline" === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.ue = !1, this.qs({
            aw: this.aw,
            dw: new Ti,
            Ji: this.Ji,
            gf: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            pw: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.bw = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.ow.has(t) && (
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.aw.has(t) && !this.aw.get(t).un);
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.ww = function(t) {
        var n = this;
        t && (t.se.forEach((function(t) {
            return n.ow = n.ow.add(t);
        })), t.oe.forEach((function(t) {
            return C$1(n.ow.has(t), "Modified document " + t + " not found in view.");
        })), t.he.forEach((function(t) {
            return n.ow = n.ow.delete(t);
        })), this.ue = t.ue);
    }, t.prototype.mw = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.ue) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var n = this.cw;
        this.cw = di(), this.aw.forEach((function(n) {
            t.bw(n.key) && (t.cw = t.cw.add(n.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var i = [];
        return n.forEach((function(n) {
            t.cw.has(n) || i.push(new qu(n));
        })), this.cw.forEach((function(t) {
            n.has(t) || i.push(new Mu(t));
        })), i;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.yw = function(t) {
        this.ow = t.ec, this.cw = di();
        var n = this.lw(t.documents);
        return this.qs(n, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype._w = function() {
        return Ei.$i(this.query, this.aw, this.Ji, this.hw === gi.Gi);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Gu = 5, Wu = /** @class */ function() {
    function t(t, n, i, e) {
        this.Pu = t, this.Iw = n, this.updateFunction = i, this.Vu = e, this.Tw = Gu, this.ul = new Kr(this.Pu, zi.Du);
    }
    /** Runs the transaction and sets the result on deferred. */    return t.prototype.run = function() {
        this.Ew();
    }, t.prototype.Ew = function() {
        var t = this;
        this.ul.Jf((function() {
            return __awaiter(t, void 0, void 0, (function() {
                var t, n, i = this;
                return __generator(this, (function(e) {
                    return t = this.Iw.dv(), (n = this.Rw(t)) && n.then((function(n) {
                        i.Pu.xu((function() {
                            return t.commit().then((function() {
                                i.Vu.resolve(n);
                            })).catch((function(t) {
                                i.Aw(t);
                            }));
                        }));
                    })).catch((function(t) {
                        i.Aw(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.Rw = function(t) {
        try {
            var n = this.updateFunction(t);
            return !An(n) && n.catch && n.then ? n : (this.Vu.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.Vu.reject(t), null;
        }
    }, t.prototype.Aw = function(t) {
        var n = this;
        this.Tw > 0 && this.Dw(t) ? (this.Tw -= 1, this.Pu.xu((function() {
            return n.Ew(), Promise.resolve();
        }))) : this.Vu.reject(t);
    }, t.prototype.Dw = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var n = t.code;
            return "aborted" === n || "failed-precondition" === n || !ii(n);
        }
        return !1;
    }, t;
}(), zu = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
n, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
i) {
    this.query = t, this.targetId = n, this.view = i;
}, Ku = function(t) {
    this.key = t, 
    /**
         * Set to true once we've received a document. This is used in
         * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
         * decide whether it needs to manufacture a delete event for the target once
         * the target is CURRENT.
         */
    this.Pw = !1;
}, Hu = /** @class */ function() {
    function t(t, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    i, e) {
        this.Nc = t, this.Iw = n, this.Sw = i, this.currentUser = e, this.Cw = null, this.kw = new le((function(t) {
            return t.canonicalId();
        })), this.Vw = {}, this.Nw = new Dt(At.G), this.Ow = {}, this.Fw = new ae, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.Uw = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.xw = new Map, this.jw = Ne.Ko(), 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.isPrimary = void 0, this.onlineState = "Unknown";
    }
    return Object.defineProperty(t.prototype, "Lw", {
        // Only used for testing.
        get: function() {
            return !0 === this.isPrimary;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Subscribes to SyncEngine notifications. Has to be called exactly once. */
    t.prototype.subscribe = function(t) {
        C$1(null !== t, "SyncEngine listener cannot be null"), C$1(null === this.Cw, "SyncEngine already has a subscriber."), 
        this.Cw = t;
    }, 
    /**
     * Initiates the new listen, resolves promise when listen enqueued to the
     * server. All the subsequent view snapshots or errors are sent to the
     * subscribed handlers. Returns the targetId of the query.
     */
    t.prototype.listen = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, i, e, r, s;
            return __generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return this.Bw("listen()"), (e = this.kw.get(t)) ? (
                    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                    // already exists when EventManager calls us for the first time. This
                    // happens when the primary tab is already listening to this query on
                    // behalf of another tab and the user of the primary also starts listening
                    // to the query. EventManager will not have an assigned target ID in this
                    // case and calls `listen` to obtain this ID.
                    n = e.targetId, this.Sw.Bv(n), i = e.view._w(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , this.Nc.Yh(t.li()) ];

                  case 2:
                    return r = u.sent(), s = this.Sw.Bv(r.targetId), n = r.targetId, [ 4 /*yield*/ , this.Mw(t, n, "current" === s) ];

                  case 3:
                    i = u.sent(), this.isPrimary && this.Iw.listen(r), u.label = 4;

                  case 4:
                    return this.Cw.Il([ i ]), [ 2 /*return*/ , n ];
                }
            }));
        }));
    }, 
    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */
    t.prototype.Mw = function(t, n, i) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, s, o, h, c;
            return __generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.Nc.nc(t, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return e = u.sent(), r = new Qu(t, e.ec), s = r.lw(e.documents), o = Ai.re(n, i && "Offline" !== this.onlineState), 
                    C$1(0 === (h = r.qs(s, 
                    /* updateLimboDocuments= */ !0 === this.isPrimary, o)).pw.length, "View returned limbo docs before target ack from the server."), 
                    C$1(!!h.snapshot, "applyChanges for new view should always return a snapshot"), c = new zu(t, n, r), 
                    this.kw.set(t, c), this.Vw[n] || (this.Vw[n] = []), this.Vw[n].push(t), [ 2 /*return*/ , h.snapshot ];
                }
            }));
        }));
    }, 
    /**
     * Reconcile the list of synced documents in an existing view with those
     * from persistence.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.qw = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, i;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.Nc.nc(t.query, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return n = e.sent(), i = t.view.yw(n), this.isPrimary && this.Qw(t.targetId, i.pw), 
                    [ 2 /*return*/ , i ];
                }
            }));
        }));
    }, 
    /** Stops listening to the query. */
    t.prototype.$d = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, i, e = this;
            return __generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.Bw("unlisten()"), C$1(!!(n = this.kw.get(t)), "Trying to unlisten on query not found:" + t), 
                    (i = this.Vw[n.targetId]).length > 1 ? (this.Vw[n.targetId] = i.filter((function(n) {
                        return !n.isEqual(t);
                    })), this.kw.delete(t), [ 2 /*return*/ ]) : this.isPrimary ? (
                    // We need to remove the local query target first to allow us to verify
                    // whether any other client is still interested in this target.
                    this.Sw.qv(n.targetId), this.Sw.Fv(n.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , this.Nc.tc(n.targetId, /*keepPersistedTargetData=*/ !1).then((function() {
                        e.Sw.Gv(n.targetId), e.Iw.$d(n.targetId), e.Gw(n.targetId);
                    })).catch(je) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    r.sent(), r.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 5 ];

                  case 3:
                    return this.Gw(n.targetId), [ 4 /*yield*/ , this.Nc.tc(n.targetId, 
                    /*keepPersistedTargetData=*/ !0) ];

                  case 4:
                    r.sent(), r.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Initiates the write of local mutation batch which involves adding the
     * writes to the mutation queue, notifying the remote store about new
     * mutations and raising events for any changes this write caused.
     *
     * The promise returned by this call is resolved when the above steps
     * have completed, *not* when the write was acked by the backend. The
     * userCallback is resolved once the write was acked/rejected by the
     * backend (or failed locally for any other reason).
     */
    t.prototype.write = function(t, n) {
        return __awaiter(this, void 0, void 0, (function() {
            var i;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Bw("write()"), [ 4 /*yield*/ , this.Nc.kh(t) ];

                  case 1:
                    return i = e.sent(), this.Sw.Uv(i.batchId), this.Ww(i.batchId, n), [ 4 /*yield*/ , this.zw(i.Ns) ];

                  case 2:
                    return e.sent(), [ 4 /*yield*/ , this.Iw.Hd() ];

                  case 3:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If a retryable error occurs (ex: some other
     * client has changed any of the data referenced), then the updateFunction
     * will be called again after a backoff. If the updateFunction still fails
     * after all retries, then the transaction will be rejected.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     *
     * The Deferred input is resolved when the transaction is fully committed.
     */
    t.prototype.runTransaction = function(t, n, i) {
        new Wu(t, this.Iw, n, i).run();
    }, t.prototype.jh = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, i = this;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.Bw("applyRemoteEvent()"), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.Nc.jh(t) ];

                  case 2:
                    return n = e.sent(), 
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    Y$1(t.Zi, (function(t, n) {
                        var e = i.Ow[Number(t)];
                        e && (
                        // Since this is a limbo resolution lookup, it's for a single document
                        // and it could be added, modified, or removed, but not a combination.
                        C$1(n.se.size + n.oe.size + n.he.size <= 1, "Limbo resolution for single document contains multiple changes."), 
                        n.se.size > 0 ? e.Pw = !0 : n.oe.size > 0 ? C$1(e.Pw, "Received change for limbo target document without add.") : n.he.size > 0 && (C$1(e.Pw, "Received remove for limbo target document without add."), 
                        e.Pw = !1));
                    })), [ 4 /*yield*/ , this.zw(n, t) ];

                  case 3:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , je(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Applies an OnlineState change to the sync engine and notifies any views of
     * the change.
     */
    t.prototype.gw = function(t, n) {
        // If we are the secondary client, we explicitly ignore the remote store's
        // online state (the local client may go offline, even though the primary
        // tab remains online) and only apply the primary tab's online state from
        // SharedClientState.
        if (this.isPrimary && n === kn.Ri || !this.isPrimary && n === kn.Ai) {
            this.Bw("applyOnlineStateChange()");
            var i = [];
            this.kw.forEach((function(n, e) {
                var r = e.view.gw(t);
                C$1(0 === r.pw.length, "OnlineState should not affect limbo documents."), r.snapshot && i.push(r.snapshot);
            })), this.Cw.Kw(t), this.Cw.Il(i), this.onlineState = t, this.isPrimary && this.Sw.Kv(t);
        }
    }, t.prototype.ev = function(t, n) {
        return __awaiter(this, void 0, void 0, (function() {
            var i, e, r, s, o, h = this;
            return __generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return this.Bw("rejectListens()"), 
                    // PORTING NOTE: Multi-tab only.
                    this.Sw.Wv(t, "rejected", n), i = this.Ow[t], (e = i && i.key) ? (
                    // Since this query failed, we won't want to manually unlisten to it.
                    // So go ahead and remove it from bookkeeping.
                    this.Nw = this.Nw.remove(e), delete this.Ow[t], r = (r = new Dt(At.G)).lt(e, new yn(e, _t.B())), 
                    s = di().add(e), o = new Ri(_t.MIN, 
                    /* targetChanges= */ {}, 
                    /* targetMismatches= */ new kt(V$1), r, s), [ 2 /*return*/ , this.jh(o) ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , this.Nc.tc(t, /* keepPersistedTargetData */ !1).then((function() {
                        return h.Gw(t, n);
                    })).catch(je) ];

                  case 2:
                    u.sent(), u.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.iw = function(t, n, i) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.Bw("applyBatchState()"), [ 4 /*yield*/ , this.Nc.Vh(t) ];

                  case 1:
                    return null === (e = r.sent()) ? (
                    // A throttled tab may not have seen the mutation before it was completed
                    // and removed from the mutation queue, in which case we won't have cached
                    // the affected documents. In this case we can safely ignore the update
                    // since that means we didn't apply the mutation locally at all (if we
                    // had, we would have cached the affected documents), and so we will just
                    // see any resulting document changes via normal remote document updates
                    // as applicable.
                    A$1("SyncEngine", "Cannot apply mutation batch with id: " + t), [ 2 /*return*/ ]) : "pending" !== n ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , this.Iw.Hd() ];

                  case 2:
                    // If we are the primary client, we need to send this write to the
                    // backend. Secondary clients will ignore these writes since their remote
                    // connection is disabled.
                    return r.sent(), [ 3 /*break*/ , 4 ];

                  case 3:
                    "acknowledged" === n || "rejected" === n ? (
                    // NOTE: Both these methods are no-ops for batches that originated from
                    // other clients.
                    this.Hw(t, i || null), this.Nc.sc(t)) : S$1("Unknown batchState: " + n), r.label = 4;

                  case 4:
                    return [ 4 /*yield*/ , this.zw(e) ];

                  case 5:
                    return r.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.cv = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, i;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.Bw("applySuccessfulWrite()"), n = t.batch.batchId, 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    this.Hw(n, /*error=*/ null), this.Jw(n), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.Nc.bo(t) ];

                  case 2:
                    return i = e.sent(), this.Sw.jv(n, "acknowledged"), [ 4 /*yield*/ , this.zw(i) ];

                  case 3:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , je(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.lv = function(t, n) {
        return __awaiter(this, void 0, void 0, (function() {
            var i;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    this.Bw("rejectFailedWrite()"), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    this.Hw(t, n), this.Jw(t), e.label = 1;

                  case 1:
                    return e.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.Nc.Uh(t) ];

                  case 2:
                    return i = e.sent(), this.Sw.jv(t, "rejected", n), [ 4 /*yield*/ , this.zw(i) ];

                  case 3:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , je(e.sent()) ];

                  case 5:
                    return e.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Registers a user callback that resolves when all pending mutations at the moment of calling
     * are acknowledged .
     */
    t.prototype.Yw = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, i;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Iw.Fd() || A$1("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                    [ 4 /*yield*/ , this.Nc.Co() ];

                  case 1:
                    return -1 === (n = e.sent()) ? (
                    // Trigger the callback right away if there is no pending writes at the moment.
                    t.resolve(), [ 2 /*return*/ ]) : ((i = this.xw.get(n) || []).push(t), this.xw.set(n, i), 
                    [ 2 /*return*/ ]);
                }
            }));
        }));
    }, 
    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */
    t.prototype.Jw = function(t) {
        (this.xw.get(t) || []).forEach((function(t) {
            t.resolve();
        })), this.xw.delete(t);
    }, 
    /** Reject all outstanding callbacks waiting for pending writes to complete. */
    t.prototype.Xw = function(t) {
        this.xw.forEach((function(n) {
            n.forEach((function(n) {
                n.reject(new B$1(L$1.CANCELLED, t));
            }));
        })), this.xw.clear();
    }, t.prototype.Ww = function(t, n) {
        var i = this.Uw[this.currentUser.v()];
        i || (i = new Dt(V$1)), i = i.lt(t, n), this.Uw[this.currentUser.v()] = i;
    }, 
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */
    t.prototype.Hw = function(t, n) {
        var i = this.Uw[this.currentUser.v()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
                if (i) {
            var e = i.get(t);
            e && (C$1(t === i.vt(), "Mutation callbacks processed out-of-order?"), n ? e.reject(n) : e.resolve(), 
            i = i.remove(t)), this.Uw[this.currentUser.v()] = i;
        }
    }, t.prototype.Gw = function(t, n) {
        var i = this;
        void 0 === n && (n = null), this.Sw.qv(t), C$1(this.Vw[t] && 0 !== this.Vw[t].length, "There are no queries mapped to target id " + t);
        for (var e = 0, r = this.Vw[t]; e < r.length; e++) {
            var u = r[e];
            this.kw.delete(u), n && this.Cw.$w(u, n);
        }
        if (delete this.Vw[t], this.isPrimary) {
            var s = this.Fw.gs(t);
            this.Fw.ms(t), s.forEach((function(t) {
                i.Fw.bs(t) || 
                // We removed the last reference for this key
                i.Zw(t);
            }));
        }
    }, t.prototype.Zw = function(t) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var n = this.Nw.get(t);
        null !== n && (this.Iw.$d(n), this.Nw = this.Nw.remove(t), delete this.Ow[n]);
    }, t.prototype.Qw = function(t, n) {
        for (var i = 0, e = n; i < e.length; i++) {
            var r = e[i];
            if (r instanceof Mu) this.Fw.fs(r.key, t), this.tm(r); else if (r instanceof qu) {
                A$1("SyncEngine", "Document no longer in limbo: " + r.key), this.Fw.ds(r.key, t), 
                this.Fw.bs(r.key) || 
                // We removed the last reference for this key
                this.Zw(r.key);
            } else S$1("Unknown limbo change: " + JSON.stringify(r));
        }
    }, t.prototype.tm = function(t) {
        var n = t.key;
        if (!this.Nw.get(n)) {
            A$1("SyncEngine", "New document in limbo: " + n);
            var i = this.jw.next(), e = Nn.ti(n.path);
            this.Ow[i] = new Ku(n), this.Iw.listen(new ti(e.li(), i, Kn.ki, Yi.gu)), this.Nw = this.Nw.lt(n, i);
        }
    }, 
    // Visible for testing
    t.prototype.nm = function() {
        return this.Nw;
    }, t.prototype.zw = function(t, n) {
        return __awaiter(this, void 0, void 0, (function() {
            var i, e, r, s = this;
            return __generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return i = [], e = [], r = [], this.kw.forEach((function(u, o) {
                        r.push(Promise.resolve().then((function() {
                            var n = o.view.lw(t);
                            return n.gf ? s.Nc.nc(o.query, /* usePreviousResults= */ !1).then((function(t) {
                                var i = t.documents;
                                return o.view.lw(i, n);
                            })) : n;
                            // The query has a limit and some docs were removed, so we need
                            // to re-run the query against the local store to make sure we
                            // didn't lose any good docs that had been past the limit.
                                                })).then((function(t) {
                            var r = n && n.Zi[o.targetId], u = o.view.qs(t, 
                            /* updateLimboDocuments= */ !0 === s.isPrimary, r);
                            if (s.Qw(o.targetId, u.pw), u.snapshot) {
                                s.isPrimary && s.Sw.Wv(o.targetId, u.snapshot.fromCache ? "not-current" : "current"), 
                                i.push(u.snapshot);
                                var h = Fe.ah(o.targetId, u.snapshot);
                                e.push(h);
                            }
                        })));
                    })), [ 4 /*yield*/ , Promise.all(r) ];

                  case 1:
                    return u.sent(), this.Cw.Il(i), [ 4 /*yield*/ , this.Nc.Kh(e) ];

                  case 2:
                    return u.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Bw = function(t) {
        C$1(null !== this.Cw, "Trying to call " + t + " before calling subscribe().");
    }, t.prototype.vv = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, i;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return n = !this.currentUser.isEqual(t), this.currentUser = t, n ? (
                    // Fails tasks waiting for pending writes requested by previous user.
                    this.Xw("'waitForPendingWrites' promise is rejected due to a user change."), [ 4 /*yield*/ , this.Nc.Dh(t) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    return i = e.sent(), 
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    this.Sw.Dh(t, i.Sh, i.Ch), [ 4 /*yield*/ , this.zw(i.Ph) ];

                  case 2:
                    e.sent(), e.label = 3;

                  case 3:
                    return [ 4 /*yield*/ , this.Iw.vv() ];

                  case 4:
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.wv = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, i, e, r, s, o, h = this;
            return __generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    return !0 !== t || !0 === this.isPrimary ? [ 3 /*break*/ , 3 ] : (this.isPrimary = !0, 
                    [ 4 /*yield*/ , this.Iw.wv(!0) ]);

                  case 1:
                    return u.sent(), s = this.Sw.Ov(), [ 4 /*yield*/ , this.im(s.tt()) ];

                  case 2:
                    for (n = u.sent(), i = 0, e = n; i < e.length; i++) r = e[i], this.Iw.listen(r);
                    return [ 3 /*break*/ , 7 ];

                  case 3:
                    return !1 !== t || !1 === this.isPrimary ? [ 3 /*break*/ , 7 ] : (this.isPrimary = !1, 
                    s = [], o = Promise.resolve(), J$1(this.Vw, (function(t, n) {
                        h.Sw.Qv(t) ? s.push(t) : o = o.then((function() {
                            return h.Gw(t), h.Nc.tc(t, 
                            /*keepPersistedTargetData=*/ !0);
                        })), h.Iw.$d(t);
                    })), [ 4 /*yield*/ , o ]);

                  case 4:
                    return u.sent(), [ 4 /*yield*/ , this.im(s) ];

                  case 5:
                    return u.sent(), this.em(), [ 4 /*yield*/ , this.Iw.wv(!1) ];

                  case 6:
                    u.sent(), u.label = 7;

                  case 7:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only.
    t.prototype.em = function() {
        var t = this;
        J$1(this.Ow, (function(n) {
            t.Iw.$d(n);
        })), this.Fw.ps(), this.Ow = [], this.Nw = new Dt(At.G);
    }, 
    /**
     * Reconcile the query views of the provided query targets with the state from
     * persistence. Raises snapshots for any changes that affect the local
     * client and returns the updated state of all target's query data.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.im = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, i, e, r, s, o, h, c, a, f, l, d, v;
            return __generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    n = [], i = [], e = 0, r = t, u.label = 1;

                  case 1:
                    return e < r.length ? (s = r[e], o = void 0, (h = this.Vw[s]) && 0 !== h.length ? [ 4 /*yield*/ , this.Nc.tc(s, 
                    /*keepPersistedTargetData=*/ !0) ] : [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 14 ];

                  case 2:
                    // For queries that have a local View, we need to update their state
                    // in LocalStore (as the resume token and the snapshot version
                    // might have changed) and reconcile their views with the persisted
                    // state (the list of syncedDocuments may have gotten out of sync).
                    return u.sent(), [ 4 /*yield*/ , this.Nc.Yh(h[0].li()) ];

                  case 3:
                    o = u.sent(), c = 0, a = h, u.label = 4;

                  case 4:
                    return c < a.length ? (f = a[c], C$1(!!(l = this.kw.get(f)), "No query view found for " + f), 
                    [ 4 /*yield*/ , this.qw(l) ]) : [ 3 /*break*/ , 7 ];

                  case 5:
                    (d = u.sent()).snapshot && i.push(d.snapshot), u.label = 6;

                  case 6:
                    return c++, [ 3 /*break*/ , 4 ];

                  case 7:
                    return [ 3 /*break*/ , 12 ];

                  case 8:
                    return C$1(!0 === this.isPrimary, "A secondary tab should never have an active target without an active query."), 
                    [ 4 /*yield*/ , this.Nc.ac(s) ];

                  case 9:
                    return C$1(!!(v = u.sent()), "Target for id " + s + " not found"), [ 4 /*yield*/ , this.Nc.Yh(v) ];

                  case 10:
                    return o = u.sent(), [ 4 /*yield*/ , this.Mw(this.rm(v), s, 
                    /*current=*/ !1) ];

                  case 11:
                    u.sent(), u.label = 12;

                  case 12:
                    n.push(o), u.label = 13;

                  case 13:
                    return e++, [ 3 /*break*/ , 1 ];

                  case 14:
                    return this.Cw.Il(i), [ 2 /*return*/ , n ];
                }
            }));
        }));
    }, 
    /**
     * Creates a `Query` object from the specified `Target`. There is no way to
     * obtain the original `Query`, so we synthesize a `Query` from the `Target`
     * object.
     *
     * The synthesized result might be different from the original `Query`, but
     * since the synthesized `Query` should return the same results as the
     * original one (only the presentation of results might differ), the potential
     * difference will not cause issues.
     */
    // PORTING NOTE: Multi-tab only
    t.prototype.rm = function(t) {
        return new Nn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, Pn.Kn, t.startAt, t.endAt);
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.uc = function() {
        return this.Nc.uc();
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.ew = function(t, n, i) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r;
            return __generator(this, (function(u) {
                switch (u.label) {
                  case 0:
                    if (this.isPrimary) 
                    // If we receive a target state notification via WebStorage, we are
                    // either already secondary or another tab has taken the primary lease.
                    return A$1("SyncEngine", "Ignoring unexpected query state notification."), [ 2 /*return*/ ];
                    if (!this.Vw[t]) return [ 3 /*break*/ , 7 ];
                    switch (n) {
                      case "current":
                      case "not-current":
                        return [ 3 /*break*/ , 1 ];

                      case "rejected":
                        return [ 3 /*break*/ , 4 ];
                    }
                    return [ 3 /*break*/ , 6 ];

                  case 1:
                    return [ 4 /*yield*/ , this.Nc.fc() ];

                  case 2:
                    return e = u.sent(), r = Ri.ee(t, "current" === n), [ 4 /*yield*/ , this.zw(e, r) ];

                  case 3:
                    return u.sent(), [ 3 /*break*/ , 7 ];

                  case 4:
                    return [ 4 /*yield*/ , this.Nc.tc(t, 
                    /* keepPersistedTargetData */ !0) ];

                  case 5:
                    return u.sent(), this.Gw(t, i), [ 3 /*break*/ , 7 ];

                  case 6:
                    S$1("Unexpected target state: " + n), u.label = 7;

                  case 7:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only
    t.prototype.rw = function(t, n) {
        return __awaiter(this, void 0, void 0, (function() {
            var i, e, r, s, o, h, c, a, f, l = this;
            return __generator(this, (function(d) {
                switch (d.label) {
                  case 0:
                    if (!this.isPrimary) return [ 2 /*return*/ ];
                    i = 0, e = t, d.label = 1;

                  case 1:
                    return i < e.length ? (f = e[i], C$1(!this.Vw[f], "Trying to add an already active target"), 
                    [ 4 /*yield*/ , this.Nc.ac(f) ]) : [ 3 /*break*/ , 6 ];

                  case 2:
                    return C$1(!!(r = d.sent()), "Query data for active target " + f + " not found"), 
                    [ 4 /*yield*/ , this.Nc.Yh(r) ];

                  case 3:
                    return s = d.sent(), [ 4 /*yield*/ , this.Mw(this.rm(r), s.targetId, 
                    /*current=*/ !1) ];

                  case 4:
                    d.sent(), this.Iw.listen(s), d.label = 5;

                  case 5:
                    return i++, [ 3 /*break*/ , 1 ];

                  case 6:
                    o = function(t) {
                        return __generator(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                // Check that the target is still active since the target might have been
                                // removed if it has been rejected by the backend.
                                return h.Vw[t] ? [ 4 /*yield*/ , h.Nc.tc(t, /* keepPersistedTargetData */ !1).then((function() {
                                    l.Iw.$d(t), l.Gw(t);
                                })).catch(je) ] : [ 2 /*return*/ , "continue" ];

                                // Release queries that are still active.
                                                              case 1:
                                // Release queries that are still active.
                                return n.sent(), [ 2 /*return*/ ];
                            }
                        }));
                    }, h = this, c = 0, a = n, d.label = 7;

                  case 7:
                    return c < a.length ? (f = a[c], [ 5 /*yield**/ , o(f) ]) : [ 3 /*break*/ , 10 ];

                  case 8:
                    d.sent(), d.label = 9;

                  case 9:
                    return c++, [ 3 /*break*/ , 7 ];

                  case 10:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    // PORTING NOTE: Multi-tab only. In other clients, LocalStore is unaware of
    // the online state.
    t.prototype.enableNetwork = function() {
        return this.Nc.oc(!0), this.Iw.enableNetwork();
    }, 
    // PORTING NOTE: Multi-tab only. In other clients, LocalStore is unaware of
    // the online state.
    t.prototype.disableNetwork = function() {
        return this.Nc.oc(!1), this.Iw.disableNetwork();
    }, t.prototype.Je = function(t) {
        var n = this.Ow[t];
        if (n && n.Pw) return di().add(n.key);
        var i = di(), e = this.Vw[t];
        if (!e) return i;
        for (var r = 0, u = e; r < u.length; r++) {
            var s = u[r], o = this.kw.get(s);
            C$1(!!o, "No query view found for " + s), i = i.qt(o.view.fw);
        }
        return i;
    }, t;
}(), Ju = function() {
    this.um = null, this.targetId = 0, this.listeners = [];
}, Yu = /** @class */ function() {
    function t(t) {
        this.tv = t, this.sm = new le((function(t) {
            return t.canonicalId();
        })), this.onlineState = "Unknown", this.om = new Set, this.tv.subscribe(this);
    }
    return t.prototype.listen = function(t) {
        var n = t.query, i = !1, e = this.sm.get(n);
        (e || (i = !0, e = new Ju, this.sm.set(n, e)), e.listeners.push(t), C$1(!t.gw(this.onlineState), "applyOnlineStateChange() shouldn't raise an event for brand-new listeners."), 
        e.um) && (t.hm(e.um) && this.cm());
        return i ? this.tv.listen(n).then((function(t) {
            return e.targetId = t, t;
        })) : Promise.resolve(e.targetId);
    }, t.prototype.$d = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, i, e, r;
            return __generator(this, (function(u) {
                return n = t.query, i = !1, (e = this.sm.get(n)) && (r = e.listeners.indexOf(t)) >= 0 && (e.listeners.splice(r, 1), 
                i = 0 === e.listeners.length), i ? (this.sm.delete(n), [ 2 /*return*/ , this.tv.$d(n) ]) : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Il = function(t) {
        for (var n = !1, i = 0, e = t; i < e.length; i++) {
            var r = e[i], u = r.query, s = this.sm.get(u);
            if (s) {
                for (var o = 0, h = s.listeners; o < h.length; o++) {
                    h[o].hm(r) && (n = !0);
                }
                s.um = r;
            }
        }
        n && this.cm();
    }, t.prototype.$w = function(t, n) {
        var i = this.sm.get(t);
        if (i) for (var e = 0, r = i.listeners; e < r.length; e++) {
            r[e].onError(n);
        }
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
                this.sm.delete(t);
    }, t.prototype.Kw = function(t) {
        this.onlineState = t;
        var n = !1;
        this.sm.forEach((function(i, e) {
            for (var r = 0, u = e.listeners; r < u.length; r++) {
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                u[r].gw(t) && (n = !0);
            }
        })), n && this.cm();
    }, t.prototype.am = function(t) {
        this.om.add(t), 
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        t.next();
    }, t.prototype.fm = function(t) {
        this.om.delete(t);
    }, 
    // Call all global snapshot listeners that have been set.
    t.prototype.cm = function() {
        this.om.forEach((function(t) {
            t.next();
        }));
    }, t;
}(), Xu = /** @class */ function() {
    function t(t, n, i) {
        this.query = t, this.lm = n, 
        /**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */
        this.dm = !1, this.vm = null, this.onlineState = "Unknown", this.options = i || {};
    }
    /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */    return t.prototype.hm = function(t) {
        if (C$1(t.docChanges.length > 0 || t.Yi, "We got a new snapshot with no changes?"), 
        !this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var n = [], i = 0, e = t.docChanges; i < e.length; i++) {
                var r = e[i];
                r.type !== mi.Qi && n.push(r);
            }
            t = new Ei(t.query, t.docs, t.Hi, n, t.Ji, t.fromCache, t.Yi, 
            /* excludesMetadataChanges= */ !0);
        }
        var u = !1;
        return this.dm ? this.wm(t) && (this.lm.next(t), u = !0) : this.mm(t, this.onlineState) && (this.pm(t), 
        u = !0), this.vm = t, u;
    }, t.prototype.onError = function(t) {
        this.lm.error(t);
    }, 
    /** Returns whether a snapshot was raised. */
    t.prototype.gw = function(t) {
        this.onlineState = t;
        var n = !1;
        return this.vm && !this.dm && this.mm(this.vm, t) && (this.pm(this.vm), n = !0), 
        n;
    }, t.prototype.mm = function(t, n) {
        // Always raise the first event when we're synced
        if (C$1(!this.dm, "Determining whether to raise first event but already had first event"), 
        !t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var i = "Offline" !== n;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return this.options.gm && i ? (C$1(t.fromCache, "Waiting for sync, but snapshot is not from cache"), 
        !1) : !t.docs.J() || "Offline" === n;
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.wm = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var n = this.vm && this.vm.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.Yi && !n) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.pm = function(t) {
        C$1(!this.dm, "Trying to raise initial events for second time"), t = Ei.$i(t.query, t.docs, t.Ji, t.fromCache), 
        this.dm = !0, this.lm.next(t);
    }, t;
}(), $u = /** @class */ function() {
    function t(t, n) {
        this.cacheSizeBytes = t, this.synchronizeTabs = n;
    }
    return t.prototype.ja = function() {
        return qe.Rc(this.cacheSizeBytes);
    }, t;
}(), Zu = function() {}, ts = /** @class */ function() {
    function t(t, n, i, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e) {
        this.platform = t, this.bm = n, this.credentials = i, this.Pu = e, this.clientId = k$1.u();
    }
    /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param persistenceSettings Settings object to configure offline
     *     persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */    return t.prototype.start = function(t) {
        var n = this;
        this.ym();
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        //
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        var i = new Xi, e = new Xi, r = !1;
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        //
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
                // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return this.credentials.T((function(u) {
            r ? n.Pu.xu((function() {
                return n.vv(u);
            })) : (r = !0, n._m(t, e, u).then((function(t) {
                return n.Im(u, t);
            })).then(i.resolve, i.reject));
        })), 
        // Block the async queue until initialization is done
        this.Pu.xu((function() {
            return i.promise;
        })), e.promise;
    }, 
    /** Enables the network connection and requeues all pending operations. */
    t.prototype.enableNetwork = function() {
        var t = this;
        return this.ym(), this.Pu.enqueue((function() {
            return t.tv.enableNetwork();
        }));
    }, 
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param persistenceSettings Settings object to configure offline persistence
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    t.prototype._m = function(t, n, i) {
        var e = this;
        return t instanceof $u ? this.Tm(i, t).then((function(t) {
            return n.resolve(), t;
        })).catch((function(t) {
            // An unknown failure on the first stage shuts everything down.
            if (
            // Regardless of whether or not the retry succeeds, from an user
            // perspective, offline persistence has failed.
            n.reject(t), !e.Em(t)) throw t;
            return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + t), 
            e.Rm();
        })) : (
        // When usePersistence == false, enabling offline persistence is defined
        // to unconditionally succeed. This allows start() to have the same
        // signature for both cases, despite the fact that the returned promise
        // is only used in the enablePersistence call.
        n.resolve(), this.Rm());
    }, 
    /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */
    t.prototype.Em = function(t) {
        return t instanceof B$1 ? t.code === L$1.FAILED_PRECONDITION || t.code === L$1.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || (
        // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || 
        // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code);
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.ym = function() {
        if (this.Pu.Gu) throw new B$1(L$1.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /**
     * Starts IndexedDB-based persistence.
     *
     * @returns A promise indicating success or failure.
     */
    t.prototype.Tm = function(t, n) {
        var i = this, e = Sr.af(this.bm), s = new Mi(this.bm.s, {
            Ze: !0
        });
        // TODO(http://b/33384523): For now we just disable garbage collection
        // when persistence is enabled.
                return Promise.resolve().then((function() {
            return __awaiter(i, void 0, void 0, (function() {
                var i, r;
                return __generator(this, (function(u) {
                    switch (u.label) {
                      case 0:
                        if (n.synchronizeTabs && !Lu.Hs(this.platform)) throw new B$1(L$1.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                        return i = n.ja(), this.Sw = n.synchronizeTabs ? new Lu(this.Pu, this.platform, e, this.clientId, t) : new Bu, 
                        [ 4 /*yield*/ , Sr.xa({
                            allowTabSynchronization: n.synchronizeTabs,
                            persistenceKey: e,
                            clientId: this.clientId,
                            platform: this.platform,
                            Aa: this.Pu,
                            serializer: s,
                            ja: i,
                            Da: this.Sw
                        }) ];

                      case 1:
                        return r = u.sent(), this.persistence = r, [ 2 /*return*/ , r.vo.Vc ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Starts Memory-backed persistence. In practice this cannot fail.
     *
     * @returns A promise that will successfully resolve.
     */
    t.prototype.Rm = function() {
        return this.persistence = Br.Nf(this.clientId), this.Sw = new Bu, Promise.resolve(null);
    }, 
    /**
     * Initializes the rest of the FirestoreClient, assuming the initial user
     * has been obtained from the credential provider and some persistence
     * implementation is available in this.persistence.
     */
    t.prototype.Im = function(t, n) {
        var i = this;
        return A$1("FirestoreClient", "Initializing. user=", t.uid), this.platform.Am(this.bm).then((function(e) {
            return __awaiter(i, void 0, void 0, (function() {
                var i, s, o, h, c, a, f = this;
                return __generator(this, (function(l) {
                    switch (l.label) {
                      case 0:
                        return i = new Or, this.Nc = new xe(this.persistence, i, t), [ 4 /*yield*/ , this.Nc.start() ];

                      case 1:
                        // PORTING NOTE: LocalStore doesn't need an explicit start() on the Web.
                        return l.sent(), n && (
                        // We're running LRU Garbage collection. Set up the scheduler.
                        this.Dm = new Qe(n, this.Pu, this.Nc)), s = this.platform.Pm(), o = this.platform.Sm(this.bm.s), 
                        h = new Xr(this.Pu, e, this.credentials, o), c = function(t) {
                            return f.tv.gw(t, kn.Ri);
                        }, a = function(t) {
                            return f.tv.gw(t, kn.Ai);
                        }, this.Iw = new Eu(this.Nc, h, this.Pu, c, s), this.tv = new Hu(this.Nc, this.Iw, this.Sw, t), 
                        this.Sw._d = a, 
                        // Set up wiring between sync engine and other components
                        this.Iw.tv = this.tv, this.Sw.tv = this.tv, this.Cm = new Yu(this.tv), [ 4 /*yield*/ , this.Sw.start() ];

                      case 2:
                        // PORTING NOTE: LocalStore doesn't need an explicit start() on the Web.
                        return l.sent(), [ 4 /*yield*/ , this.Iw.start() ];

                      case 3:
                        // NOTE: This will immediately call the listener, so we make sure to
                        // set it after localStore / remoteStore are started.
                        return l.sent(), [ 4 /*yield*/ , this.persistence.Wa((function(t) {
                            return __awaiter(f, void 0, void 0, (function() {
                                return __generator(this, (function(n) {
                                    switch (n.label) {
                                      case 0:
                                        return [ 4 /*yield*/ , this.tv.wv(t) ];

                                      case 1:
                                        return n.sent(), this.Dm && (t && !this.Dm.mh ? this.Dm.start() : t || this.Dm.stop()), 
                                        [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        })) ];

                      case 4:
                        // When a user calls clearPersistence() in one client, all other clients
                        // need to be terminated to allow the delete to succeed.
                        // NOTE: This will immediately call the listener, so we make sure to
                        // set it after localStore / remoteStore are started.
                        return l.sent(), [ 4 /*yield*/ , this.persistence.za((function() {
                            return __awaiter(f, void 0, void 0, (function() {
                                return __generator(this, (function(t) {
                                    switch (t.label) {
                                      case 0:
                                        return [ 4 /*yield*/ , this.terminate() ];

                                      case 1:
                                        return t.sent(), [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        })) ];

                      case 5:
                        // When a user calls clearPersistence() in one client, all other clients
                        // need to be terminated to allow the delete to succeed.
                        return l.sent(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, t.prototype.vv = function(t) {
        return this.Pu.$u(), A$1("FirestoreClient", "Credential Changed. Current user: " + t.uid), 
        this.tv.vv(t);
    }, 
    /** Disables the network connection. Pending operations will not complete. */
    t.prototype.disableNetwork = function() {
        var t = this;
        return this.ym(), this.Pu.enqueue((function() {
            return t.tv.disableNetwork();
        }));
    }, t.prototype.terminate = function() {
        var t = this;
        return this.Pu.Ju((function() {
            return __awaiter(t, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return this.Dm && this.Dm.stop(), [ 4 /*yield*/ , this.Iw.shutdown() ];

                      case 1:
                        return t.sent(), [ 4 /*yield*/ , this.Sw.shutdown() ];

                      case 2:
                        return t.sent(), [ 4 /*yield*/ , this.persistence.shutdown() ];

                      case 3:
                        return t.sent(), 
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        this.credentials.R(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */
    t.prototype.waitForPendingWrites = function() {
        var t = this;
        this.ym();
        var n = new Xi;
        return this.Pu.xu((function() {
            return t.tv.Yw(n);
        })), n.promise;
    }, t.prototype.listen = function(t, n, i) {
        var e = this;
        this.ym();
        var r = new Xu(t, n, i);
        return this.Pu.xu((function() {
            return e.Cm.listen(r);
        })), r;
    }, t.prototype.$d = function(t) {
        var n = this;
        // Checks for termination but does not raise error, allowing unlisten after
        // termination to be a no-op.
                this.km || this.Pu.xu((function() {
            return n.Cm.$d(t);
        }));
    }, t.prototype.Vm = function(t) {
        var n = this;
        return this.ym(), this.Pu.enqueue((function() {
            return n.Nc.Jh(t);
        })).then((function(t) {
            if (t instanceof bn) return t;
            if (t instanceof yn) return null;
            throw new B$1(L$1.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)");
        }));
    }, t.prototype.Nm = function(t) {
        var n = this;
        return this.ym(), this.Pu.enqueue((function() {
            return __awaiter(n, void 0, void 0, (function() {
                var n, i, e;
                return __generator(this, (function(r) {
                    switch (r.label) {
                      case 0:
                        return [ 4 /*yield*/ , this.Nc.nc(t, 
                        /* usePreviousResults= */ !0) ];

                      case 1:
                        return n = r.sent(), i = new Qu(t, n.ec), e = i.lw(n.documents), [ 2 /*return*/ , i.qs(e, 
                        /* updateLimboDocuments= */ !1).snapshot ];
                    }
                }));
            }));
        }));
    }, t.prototype.write = function(t) {
        var n = this;
        this.ym();
        var i = new Xi;
        return this.Pu.xu((function() {
            return n.tv.write(t, i);
        })), i.promise;
    }, t.prototype.s = function() {
        return this.bm.s;
    }, t.prototype.am = function(t) {
        var n = this;
        this.ym(), this.Pu.xu((function() {
            return n.Cm.am(t), Promise.resolve();
        }));
    }, t.prototype.fm = function(t) {
        // Checks for shutdown but does not raise error, allowing remove after
        // shutdown to be a no-op.
        this.km || this.Cm.fm(t);
    }, Object.defineProperty(t.prototype, "km", {
        get: function() {
            // Technically, the asyncQueue is still running, but only accepting operations
            // related to termination or supposed to be run after termination. It is effectively
            // terminated to the eyes of users.
            return this.Pu.Gu;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.transaction = function(t) {
        var n = this;
        this.ym();
        var i = new Xi;
        return this.Pu.xu((function() {
            return n.tv.runTransaction(n.Pu, t, i), Promise.resolve();
        })), i.promise;
    }, t;
}(), ns = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.Om(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.Om(this.observer.error, t);
    }, t.prototype.Fm = function() {
        this.muted = !0;
    }, t.prototype.Om = function(t, n) {
        var i = this;
        this.muted || setTimeout((function() {
            i.muted || t(n);
        }), 0);
    }, t;
}();

/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function is(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, n) {
        if ("object" != typeof t || null === t) return !1;
        for (var i = t, e = 0, r = n; e < r.length; e++) {
            var u = r[e];
            if (u in i && "function" == typeof i[u]) return !0;
        }
        return !1;
    }
    /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    // settings() defaults:
    (t, [ "next", "error", "complete" ]);
}

var es = "firestore.googleapis.com", rs = !0, us = !0, ss = !1, os = qe.Pc, hs = /** @class */ function() {
    function t(t) {
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new B$1(L$1.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = es, this.ssl = rs;
        } else rt("settings", "non-empty string", "host", t.host), this.host = t.host, ut("settings", "boolean", "ssl", t.ssl), 
        this.ssl = H$1(t.ssl, rs);
        if (dt("settings", t, [ "host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling" ]), 
        ut("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, 
        ut("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), 
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? D$1("\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now.") : !1 === t.timestampsInSnapshots && D$1("\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."), 
        this.timestampsInSnapshots = H$1(t.timestampsInSnapshots, us), ut("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = qe.Cc; else {
            if (t.cacheSizeBytes !== os && t.cacheSizeBytes < qe.Sc) throw new B$1(L$1.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + qe.Sc);
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        ut("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), 
        this.forceLongPolling = void 0 === t.experimentalForceLongPolling ? ss : t.experimentalForceLongPolling;
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling;
    }, t;
}(), cs = /** @class */ function() {
    function t(n, i) {
        var e = this;
        if (this.Um = null, 
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.xm = new Zi, this.INTERNAL = {
            delete: function() {
                return __awaiter(e, void 0, void 0, (function() {
                    return __generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return this.jm(), [ 4 /*yield*/ , this.Lm.terminate() ];

                          case 1:
                            return t.sent(), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }
        }, "object" == typeof n.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var s = n;
            this.Um = s, this.Bm = t.Mm(s), this.qm = s.name, this.Qm = new Q$1(i);
        } else {
            var o = n;
            if (!o.projectId) throw new B$1(L$1.INVALID_ARGUMENT, "Must provide projectId");
            this.Bm = new x$1(o.projectId, o.database), 
            // Use a default persistenceKey that lines up with FirebaseApp.
            this.qm = "[DEFAULT]", this.Qm = new q$1;
        }
        this.Gm = new hs({}), this.Wm = this.zm(this.Bm);
    }
    return t.prototype.settings = function(t) {
        if (Z$1("Firestore.settings", arguments, 1), it("Firestore.settings", "object", 1, t), 
        K$1(t, "persistence")) throw new B$1(L$1.INVALID_ARGUMENT, '"persistence" is now specified with a separate call to firestore.enablePersistence().');
        var n = new hs(t);
        if (this.Lm && !this.Gm.isEqual(n)) throw new B$1(L$1.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.Gm = n, void 0 !== n.credentials && (this.Qm = z$1(n.credentials));
    }, t.prototype.enableNetwork = function() {
        return this.jm(), this.Lm.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.jm(), this.Lm.disableNetwork();
    }, t.prototype.enablePersistence = function(t) {
        if (this.Lm) throw new B$1(L$1.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var n = !1;
        return t && (void 0 !== t.experimentalTabSynchronization && D$1("The 'experimentalTabSynchronization' setting has been renamed to 'synchronizeTabs'. In a future release, the setting will be removed and it is recommended that you update your firestore.enablePersistence() call to use 'synchronizeTabs'."), 
        n = H$1(void 0 !== t.synchronizeTabs ? t.synchronizeTabs : t.experimentalTabSynchronization, !1)), 
        this.Km(new $u(this.Gm.cacheSizeBytes, n));
    }, t.prototype.clearPersistence = function() {
        var t = this, n = Sr.af(this.Hm()), i = new Xi;
        return this.xm.Wu((function() {
            return __awaiter(t, void 0, void 0, (function() {
                var t;
                return __generator(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        if (e.trys.push([ 0, 2, , 3 ]), void 0 !== this.Lm && !this.Lm.km) throw new B$1(L$1.FAILED_PRECONDITION, "Persistence cannot be cleared after this Firestore instance is initialized.");
                        return [ 4 /*yield*/ , Sr.clearPersistence(n) ];

                      case 1:
                        return e.sent(), i.resolve(), [ 3 /*break*/ , 3 ];

                      case 2:
                        return t = e.sent(), i.reject(t), [ 3 /*break*/ , 3 ];

                      case 3:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })), i.promise;
    }, t.prototype.terminate = function() {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
    }, Object.defineProperty(t.prototype, "Jm", {
        get: function() {
            return this.jm(), this.Lm.km;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.waitForPendingWrites = function() {
        return this.jm(), this.Lm.waitForPendingWrites();
    }, t.prototype.onSnapshotsInSync = function(t) {
        if (this.jm(), is(t)) return this.Ym(t);
        it("Firestore.onSnapshotsInSync", "function", 1, t);
        var n = {
            next: t
        };
        return this.Ym(n);
    }, t.prototype.Ym = function(t) {
        var n = this, i = new ns({
            next: function() {
                t.next && t.next();
            },
            error: function(t) {
                throw S$1("Uncaught Error in onSnapshotsInSync");
            }
        });
        return this.Lm.am(i), function() {
            i.Fm(), n.Lm.fm(i);
        };
    }, t.prototype.jm = function() {
        return this.Lm || 
        // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Km(new Zu), this.Lm;
    }, t.prototype.Hm = function() {
        return new F$1(this.Bm, this.qm, this.Gm.host, this.Gm.ssl, this.Gm.forceLongPolling);
    }, t.prototype.Km = function(t) {
        C$1(!!this.Gm.host, "FirestoreSettings.host is not set"), C$1(!this.Lm, "configureClient() called multiple times");
        var n = this.Hm();
        return this.Lm = new ts(qi.t(), n, this.Qm, this.xm), this.Lm.start(t);
    }, t.prototype.zm = function(t) {
        return new wu((function(n) {
            if (n instanceof ls) {
                var i = t, e = n.firestore.Bm;
                if (!e.isEqual(i)) throw new B$1(L$1.INVALID_ARGUMENT, "Document reference is for database " + e.projectId + "/" + e.database + " but should be for database " + i.projectId + "/" + i.database);
                return new vu(t, n.Xm);
            }
            return n;
        }));
    }, t.Mm = function(t) {
        var n = t.options;
        if (!K$1(n, "projectId")) throw new B$1(L$1.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var i = n.projectId;
        if (!i || "string" != typeof i) throw new B$1(L$1.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new x$1(i);
    }, Object.defineProperty(t.prototype, "app", {
        get: function() {
            if (!this.Um) throw new B$1(L$1.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.Um;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.collection = function(t) {
        return Z$1("Firestore.collection", arguments, 1), it("Firestore.collection", "non-empty string", 1, t), 
        this.jm(), new gs(Tt.it(t), this);
    }, t.prototype.doc = function(t) {
        return Z$1("Firestore.doc", arguments, 1), it("Firestore.doc", "non-empty string", 1, t), 
        this.jm(), ls.$m(Tt.it(t), this);
    }, t.prototype.collectionGroup = function(t) {
        if (Z$1("Firestore.collectionGroup", arguments, 1), it("Firestore.collectionGroup", "non-empty string", 1, t), 
        t.indexOf("/") >= 0) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.jm(), new ms(new Nn(Tt.et, t), this);
    }, t.prototype.runTransaction = function(t) {
        var n = this;
        return Z$1("Firestore.runTransaction", arguments, 1), it("Firestore.runTransaction", "function", 1, t), 
        this.jm().transaction((function(i) {
            return t(new as(n, i));
        }));
    }, t.prototype.batch = function() {
        return this.jm(), new fs(this);
    }, Object.defineProperty(t, "logLevel", {
        get: function() {
            switch (E()) {
              case _.DEBUG:
                return "debug";

              case _.ERROR:
                return "error";

              case _.SILENT:
                return "silent";

              default:
                return S$1("Unknown log level: " + E());
            }
        },
        enumerable: !0,
        configurable: !0
    }), t.setLogLevel = function(t) {
        switch (Z$1("Firestore.setLogLevel", arguments, 1), it("Firestore.setLogLevel", "non-empty string", 1, t), 
        t) {
          case "debug":
            R$1(_.DEBUG);
            break;

          case "error":
            R$1(_.ERROR);
            break;

          case "silent":
            R$1(_.SILENT);
            break;

          default:
            throw new B$1(L$1.INVALID_ARGUMENT, "Invalid log level: " + t);
        }
    }, 
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    t.prototype.Zm = function() {
        return this.Gm.timestampsInSnapshots;
    }, t;
}(), as = /** @class */ function() {
    function t(t, n) {
        this.tp = t, this.np = n;
    }
    return t.prototype.get = function(t) {
        var n = this;
        Z$1("Transaction.get", arguments, 1);
        var i = Is("Transaction.get", t, this.tp);
        return this.np.lookup([ i.Xm ]).then((function(t) {
            if (!t || 1 !== t.length) return S$1("Mismatch in docs returned from document lookup.");
            var e = t[0];
            if (e instanceof yn) return new vs(n.tp, i.Xm, null, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, i.ip);
            if (e instanceof bn) return new vs(n.tp, i.Xm, e, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, i.ip);
            throw S$1("BatchGetDocumentsRequest returned unexpected document type: " + e.constructor.name);
        }));
    }, t.prototype.set = function(t, n, i) {
        nt("Transaction.set", arguments, 2, 3);
        var e = Is("Transaction.set", t, this.tp);
        i = bs("Transaction.set", i);
        var r = Es(e.ip, n, "Transaction.set"), u = r[0], s = r[1], o = i.merge || i.mergeFields ? this.tp.Wm.nd(s, u, i.mergeFields) : this.tp.Wm.Zl(s, u);
        return this.np.set(e.Xm, o), this;
    }, t.prototype.update = function(t, n, i) {
        for (var e, r, u = [], s = 3; s < arguments.length; s++) u[s - 3] = arguments[s];
        return "string" == typeof n || n instanceof $r ? (tt("Transaction.update", arguments, 3), 
        e = Is("Transaction.update", t, this.tp), r = this.tp.Wm.ud("Transaction.update", n, i, u)) : (Z$1("Transaction.update", arguments, 2), 
        e = Is("Transaction.update", t, this.tp), r = this.tp.Wm.ed("Transaction.update", n)), 
        this.np.update(e.Xm, r), this;
    }, t.prototype.delete = function(t) {
        Z$1("Transaction.delete", arguments, 1);
        var n = Is("Transaction.delete", t, this.tp);
        return this.np.delete(n.Xm), this;
    }, t;
}(), fs = /** @class */ function() {
    function t(t) {
        this.tp = t, this.ep = [], this.rp = !1;
    }
    return t.prototype.set = function(t, n, i) {
        nt("WriteBatch.set", arguments, 2, 3), this.up();
        var e = Is("WriteBatch.set", t, this.tp);
        i = bs("WriteBatch.set", i);
        var r = Es(e.ip, n, "WriteBatch.set"), u = r[0], s = r[1], o = i.merge || i.mergeFields ? this.tp.Wm.nd(s, u, i.mergeFields) : this.tp.Wm.Zl(s, u);
        return this.ep = this.ep.concat(o.Ll(e.Xm, Kt.NONE)), this;
    }, t.prototype.update = function(t, n, i) {
        for (var e, r, u = [], s = 3; s < arguments.length; s++) u[s - 3] = arguments[s];
        return this.up(), "string" == typeof n || n instanceof $r ? (tt("WriteBatch.update", arguments, 3), 
        e = Is("WriteBatch.update", t, this.tp), r = this.tp.Wm.ud("WriteBatch.update", n, i, u)) : (Z$1("WriteBatch.update", arguments, 2), 
        e = Is("WriteBatch.update", t, this.tp), r = this.tp.Wm.ed("WriteBatch.update", n)), 
        this.ep = this.ep.concat(r.Ll(e.Xm, Kt.exists(!0))), this;
    }, t.prototype.delete = function(t) {
        Z$1("WriteBatch.delete", arguments, 1), this.up();
        var n = Is("WriteBatch.delete", t, this.tp);
        return this.ep = this.ep.concat(new $t(n.Xm, Kt.NONE)), this;
    }, t.prototype.commit = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return this.up(), this.rp = !0, this.ep.length > 0 ? [ 2 /*return*/ , this.tp.jm().write(this.ep) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.up = function() {
        if (this.rp) throw new B$1(L$1.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}(), ls = /** @class */ function() {
    function t(t, n, i) {
        this.Xm = t, this.firestore = n, this.ip = i, this.Lm = this.firestore.jm();
    }
    return t.$m = function(n, i, e) {
        if (n.length % 2 != 0) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + n.nt() + " has " + n.length);
        return new t(new At(n), i, e);
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.Xm.path.X();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
        get: function() {
            return new gs(this.Xm.path.H(), this.firestore, this.ip);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.Xm.path.nt();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.collection = function(t) {
        if (Z$1("DocumentReference.collection", arguments, 1), it("DocumentReference.collection", "non-empty string", 1, t), 
        !t) throw new B$1(L$1.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var n = Tt.it(t);
        return new gs(this.Xm.path.child(n), this.firestore);
    }, t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) throw vt("isEqual", "DocumentReference", 1, n);
        return this.firestore === n.firestore && this.Xm.isEqual(n.Xm) && this.ip === n.ip;
    }, t.prototype.set = function(t, n) {
        nt("DocumentReference.set", arguments, 1, 2), n = bs("DocumentReference.set", n);
        var i = Es(this.ip, t, "DocumentReference.set"), e = i[0], r = i[1], u = n.merge || n.mergeFields ? this.firestore.Wm.nd(r, e, n.mergeFields) : this.firestore.Wm.Zl(r, e);
        return this.Lm.write(u.Ll(this.Xm, Kt.NONE));
    }, t.prototype.update = function(t, n) {
        for (var i, e = [], r = 2; r < arguments.length; r++) e[r - 2] = arguments[r];
        return "string" == typeof t || t instanceof $r ? (tt("DocumentReference.update", arguments, 2), 
        i = this.firestore.Wm.ud("DocumentReference.update", t, n, e)) : (Z$1("DocumentReference.update", arguments, 1), 
        i = this.firestore.Wm.ed("DocumentReference.update", t)), this.Lm.write(i.Ll(this.Xm, Kt.exists(!0)));
    }, t.prototype.delete = function() {
        return Z$1("DocumentReference.delete", arguments, 0), this.Lm.write([ new $t(this.Xm, Kt.NONE) ]);
    }, t.prototype.onSnapshot = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        nt("DocumentReference.onSnapshot", arguments, 1, 4);
        var i, e = {
            includeMetadataChanges: !1
        }, r = 0;
        "object" != typeof t[r] || is(t[r]) || (dt("DocumentReference.onSnapshot", e = t[r], [ "includeMetadataChanges" ]), 
        ut("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", e.includeMetadataChanges), 
        r++);
        var u = {
            includeMetadataChanges: e.includeMetadataChanges
        };
        return is(t[r]) ? i = t[r] : (it("DocumentReference.onSnapshot", "function", r, t[r]), 
        et("DocumentReference.onSnapshot", "function", r + 1, t[r + 1]), et("DocumentReference.onSnapshot", "function", r + 2, t[r + 2]), 
        i = {
            next: t[r],
            error: t[r + 1],
            complete: t[r + 2]
        }), this.sp(u, i);
    }, t.prototype.sp = function(t, n) {
        var i = this, e = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        n.error && (e = n.error.bind(n));
        var r = new ns({
            next: function(t) {
                if (n.next) {
                    C$1(t.docs.size <= 1, "Too many documents returned on a document query");
                    var e = t.docs.get(i.Xm);
                    n.next(new vs(i.firestore, i.Xm, e, t.fromCache, t.hasPendingWrites, i.ip));
                }
            },
            error: e
        }), u = this.Lm.listen(Nn.ti(this.Xm.path), r, t);
        return function() {
            r.Fm(), i.Lm.$d(u);
        };
    }, t.prototype.get = function(t) {
        var n = this;
        return nt("DocumentReference.get", arguments, 0, 1), _s("DocumentReference.get", t), 
        new Promise((function(i, e) {
            t && "cache" === t.source ? n.firestore.jm().Vm(n.Xm).then((function(t) {
                i(new vs(n.firestore, n.Xm, t, 
                /*fromCache=*/ !0, t instanceof bn && t.un, n.ip));
            }), e) : n.hp(i, e, t);
        }));
    }, t.prototype.hp = function(t, n, i) {
        var e = this.sp({
            includeMetadataChanges: !0,
            gm: !0
        }, {
            next: function(r) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                e(), !r.exists && r.metadata.fromCache ? 
                // TODO(dimond): If we're online and the document doesn't
                // exist then we resolve with a doc.exists set to false. If
                // we're offline however, we reject the Promise in this
                // case. Two options: 1) Cache the negative response from
                // the server so we can deliver that even when you're
                // offline 2) Actually reject the Promise in the online case
                // if the document doesn't exist.
                n(new B$1(L$1.UNAVAILABLE, "Failed to get document because the client is offline.")) : r.exists && r.metadata.fromCache && i && "server" === i.source ? n(new B$1(L$1.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : t(r);
            },
            error: n
        });
    }, t.prototype.withConverter = function(n) {
        return new t(this.Xm, this.firestore, n);
    }, t;
}(), ds = /** @class */ function() {
    function t(t, n) {
        this.hasPendingWrites = t, this.fromCache = n;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), vs = /** @class */ function() {
    function t(t, n, i, e, r, u) {
        this.tp = t, this.Xm = n, this.cp = i, this.ap = e, this.fp = r, this.ip = u;
    }
    return t.prototype.data = function(t) {
        if (nt("DocumentSnapshot.data", arguments, 0, 1), t = ys("DocumentSnapshot.data", t), 
        this.cp) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.ip) {
                var n = new ws(this.tp, this.Xm, this.cp, this.ap, this.fp);
                return this.ip.fromFirestore(n, t);
            }
            return this.lp(this.cp.data(), tn.Cn(t, this.tp.Zm()));
        }
    }, t.prototype.get = function(t, n) {
        if (nt("DocumentSnapshot.get", arguments, 1, 2), n = ys("DocumentSnapshot.get", n), 
        this.cp) {
            var i = this.cp.data().field(gu("DocumentSnapshot.get", t));
            if (null !== i) return this.dp(i, tn.Cn(n, this.tp.Zm()));
        }
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.Xm.path.X();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        get: function() {
            return new ls(this.Xm, this.tp, this.ip);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "exists", {
        get: function() {
            return null !== this.cp;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return new ds(this.fp, this.ap);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) throw vt("isEqual", "DocumentSnapshot", 1, n);
        return this.tp === n.tp && this.ap === n.ap && this.Xm.isEqual(n.Xm) && (null === this.cp ? null === n.cp : this.cp.isEqual(n.cp)) && this.ip === n.ip;
    }, t.prototype.lp = function(t, n) {
        var i = this, e = {};
        return t.forEach((function(t, r) {
            e[t] = i.dp(r, n);
        })), e;
    }, t.prototype.dp = function(t, n) {
        if (t instanceof wn) return this.lp(t, n);
        if (t instanceof pn) return this.vp(t, n);
        if (t instanceof dn) {
            var i = t.value(n), e = this.tp.jm().s();
            return t.s.isEqual(e) || 
            // TODO(b/64130202): Somehow support foreign references.
            D$1("Document " + this.Xm.path + " contains a document reference within a different database (" + t.s.projectId + "/" + t.s.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), 
            new ls(i, this.tp, this.ip);
        }
        return t.value(n);
    }, t.prototype.vp = function(t, n) {
        var i = this;
        return t.Ht.map((function(t) {
            return i.dp(t, n);
        }));
    }, t;
}(), ws = /** @class */ function(t) {
    function n() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends(n, t), n.prototype.data = function(n) {
        var i = t.prototype.data.call(this, n);
        return C$1(void 0 !== i, "Document in a QueryDocumentSnapshot should exist"), i;
    }, n;
}(vs), ms = /** @class */ function() {
    function t(t, n, i) {
        this.wp = t, this.firestore = n, this.ip = i;
    }
    return t.prototype.where = function(n, i, e) {
        Z$1("Query.where", arguments, 3), lt("Query.where", 3, e);
        // Enumerated from the WhereFilterOp type in index.d.ts.
        var r, u = [ "<", "<=", "==", ">=", ">", "array-contains", "in", "array-contains-any" ];
        ht("Query.where", u, 2, i);
        var s = gu("Query.where", n), o = Fn.it(i);
        if (s.ut()) {
            if (o === Fn.ARRAY_CONTAINS || o === Fn.ARRAY_CONTAINS_ANY) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o.toString() + "' queries on FieldPath.documentId().");
            if (o === Fn.IN) {
                this.mp(e, o);
                for (var h = [], c = 0, a = e; c < a.length; c++) {
                    var f = a[c];
                    h.push(this.pp(f));
                }
                r = new pn(h);
            } else r = this.pp(e);
        } else o !== Fn.IN && o !== Fn.ARRAY_CONTAINS_ANY || this.mp(e, o), r = this.firestore.Wm.sd("Query.where", e, 
        // We only allow nested arrays for IN queries.
        /** allowArrays = */ o === Fn.IN);
        var l = Un.create(s, o, r);
        return this.gp(l), new t(this.wp.ei(l), this.firestore, this.ip);
    }, t.prototype.orderBy = function(n, i) {
        var e;
        if (nt("Query.orderBy", arguments, 1, 2), et("Query.orderBy", "non-empty string", 2, i), 
        void 0 === i || "asc" === i) e = qn.ASCENDING; else {
            if ("desc" !== i) throw new B$1(L$1.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + i + "', expected 'asc' or 'desc'.");
            e = qn.DESCENDING;
        }
        if (null !== this.wp.startAt) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
        if (null !== this.wp.endAt) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
        var r = gu("Query.orderBy", n), u = new Gn(r, e);
        return this.bp(u), new t(this.wp.ui(u), this.firestore, this.ip);
    }, t.prototype.limit = function(n) {
        return Z$1("Query.limit", arguments, 1), it("Query.limit", "number", 1, n), wt("Query.limit", 1, n), 
        new t(this.wp.si(n), this.firestore, this.ip);
    }, t.prototype.limitToLast = function(n) {
        return Z$1("Query.limitToLast", arguments, 1), it("Query.limitToLast", "number", 1, n), 
        wt("Query.limitToLast", 1, n), new t(this.wp.oi(n), this.firestore, this.ip);
    }, t.prototype.startAt = function(n) {
        for (var i = [], e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
        tt("Query.startAt", arguments, 1);
        var r = this.yp("Query.startAt", n, i, 
        /*before=*/ !0);
        return new t(this.wp.hi(r), this.firestore, this.ip);
    }, t.prototype.startAfter = function(n) {
        for (var i = [], e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
        tt("Query.startAfter", arguments, 1);
        var r = this.yp("Query.startAfter", n, i, 
        /*before=*/ !1);
        return new t(this.wp.hi(r), this.firestore, this.ip);
    }, t.prototype.endBefore = function(n) {
        for (var i = [], e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
        tt("Query.endBefore", arguments, 1);
        var r = this.yp("Query.endBefore", n, i, 
        /*before=*/ !0);
        return new t(this.wp.ci(r), this.firestore, this.ip);
    }, t.prototype.endAt = function(n) {
        for (var i = [], e = 1; e < arguments.length; e++) i[e - 1] = arguments[e];
        tt("Query.endAt", arguments, 1);
        var r = this.yp("Query.endAt", n, i, 
        /*before=*/ !1);
        return new t(this.wp.ci(r), this.firestore, this.ip);
    }, t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) throw vt("isEqual", "Query", 1, n);
        return this.firestore === n.firestore && this.wp.isEqual(n.wp);
    }, t.prototype.withConverter = function(n) {
        return new t(this.wp, this.firestore, n);
    }, 
    /** Helper function to create a bound from a document or fields */
    t.prototype.yp = function(t, n, i, e) {
        if (lt(t, 1, n), n instanceof vs) {
            if (i.length > 0) throw new B$1(L$1.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
            var r = n;
            if (!r.exists) throw new B$1(L$1.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
            return this._p(t, r.cp, e);
        }
        var u = [ n ].concat(i);
        return this.Ip(t, u, e);
    }, 
    /**
     * Create a Bound from a query and a document.
     *
     * Note that the Bound will always include the key of the document
     * and so only the provided document will compare equal to the returned
     * position.
     *
     * Will throw if the document does not contain all fields of the order by
     * of the query or if any of the fields in the order by are an uncommitted
     * server timestamp.
     */
    t.prototype._p = function(t, n, i) {
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var e = [], r = 0, u = this.wp.orderBy; r < u.length; r++) {
            var s = u[r];
            if (s.field.ut()) e.push(new dn(this.firestore.Bm, n.key)); else {
                var o = n.field(s.field);
                if (o instanceof fn) throw new B$1(L$1.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + s.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === o) {
                    var h = s.field.nt();
                    throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
                }
                e.push(o);
            }
        }
        return new Qn(e, i);
    }, 
    /**
     * Converts a list of field values to a Bound for the given query.
     */
    t.prototype.Ip = function(t, n, i) {
        // Use explicit order by's because it has to match the query the user made
        var e = this.wp.Jn;
        if (n.length > e.length) throw new B$1(L$1.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
        for (var r = [], u = 0; u < n.length; u++) {
            var s = n[u];
            if (e[u].field.ut()) {
                if ("string" != typeof s) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
                if (!this.wp._i() && -1 !== s.indexOf("/")) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash.");
                var o = this.wp.path.child(Tt.it(s));
                if (!At.ht(o)) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + o + "' is not because it contains an odd number of segments.");
                var h = new At(o);
                r.push(new dn(this.firestore.Bm, h));
            } else {
                var c = this.firestore.Wm.sd(t, s);
                r.push(c);
            }
        }
        return new Qn(r, i);
    }, t.prototype.onSnapshot = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        nt("Query.onSnapshot", arguments, 1, 4);
        var i, e = {}, r = 0;
        return "object" != typeof t[r] || is(t[r]) || (dt("Query.onSnapshot", e = t[r], [ "includeMetadataChanges" ]), 
        ut("Query.onSnapshot", "boolean", "includeMetadataChanges", e.includeMetadataChanges), 
        r++), is(t[r]) ? i = t[r] : (it("Query.onSnapshot", "function", r, t[r]), et("Query.onSnapshot", "function", r + 1, t[r + 1]), 
        et("Query.onSnapshot", "function", r + 2, t[r + 2]), i = {
            next: t[r],
            error: t[r + 1],
            complete: t[r + 2]
        }), this.Tp(this.wp), this.sp(e, i);
    }, t.prototype.sp = function(t, n) {
        var i = this, e = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        n.error && (e = n.error.bind(n));
        var r = new ns({
            next: function(t) {
                n.next && n.next(new ps(i.firestore, i.wp, t, i.ip));
            },
            error: e
        }), u = this.firestore.jm(), s = u.listen(this.wp, r, t);
        return function() {
            r.Fm(), u.$d(s);
        };
    }, t.prototype.Tp = function(t) {
        if (t.bi() && 0 === t.Jn.length) throw new B$1(L$1.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
    }, t.prototype.get = function(t) {
        var n = this;
        return nt("Query.get", arguments, 0, 1), _s("Query.get", t), this.Tp(this.wp), new Promise((function(i, e) {
            t && "cache" === t.source ? n.firestore.jm().Nm(n.wp).then((function(t) {
                i(new ps(n.firestore, n.wp, t, n.ip));
            }), e) : n.hp(i, e, t);
        }));
    }, t.prototype.hp = function(t, n, i) {
        var e = this.sp({
            includeMetadataChanges: !0,
            gm: !0
        }, {
            next: function(r) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                e(), r.metadata.fromCache && i && "server" === i.source ? n(new B$1(L$1.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : t(r);
            },
            error: n
        });
    }, 
    /**
     * Parses the given documentIdValue into a ReferenceValue, throwing
     * appropriate errors if the value is anything other than a DocumentReference
     * or String, or if the string is malformed.
     */
    t.prototype.pp = function(t) {
        if ("string" == typeof t) {
            if ("" === t) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
            if (!this.wp._i() && -1 !== t.indexOf("/")) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
            var n = this.wp.path.child(Tt.it(t));
            if (!At.ht(n)) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + n + "' is not because it has an odd number of segments (" + n.length + ").");
            return new dn(this.firestore.Bm, new At(n));
        }
        if (t instanceof ls) {
            var i = t;
            return new dn(this.firestore.Bm, i.Xm);
        }
        throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + ft(t) + ".");
    }, 
    /**
     * Validates that the value passed into a disjunctrive filter satisfies all
     * array requirements.
     */
    t.prototype.mp = function(t, n) {
        if (!Array.isArray(t) || 0 === t.length) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + n.toString() + "' filters.");
        if (t.length > 10) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid Query. '" + n.toString() + "' filters support a maximum of 10 elements in the value array.");
        if (t.indexOf(null) >= 0) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid Query. '" + n.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter((function(t) {
            return Number.isNaN(t);
        })).length > 0) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid Query. '" + n.toString() + "' filters cannot contain 'NaN' in the value array.");
    }, t.prototype.gp = function(t) {
        if (t instanceof Un) {
            var n = [ Fn.ARRAY_CONTAINS, Fn.ARRAY_CONTAINS_ANY ], i = [ Fn.IN, Fn.ARRAY_CONTAINS_ANY ], e = n.indexOf(t.op) >= 0, r = i.indexOf(t.op) >= 0;
            if (t.ri()) {
                var u = this.wp.ni();
                if (null !== u && !u.isEqual(t.field)) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + u.toString() + "' and '" + t.field.toString() + "'");
                var s = this.wp.ii();
                null !== s && this.Ep(t.field, s);
            } else if (r || e) {
                // You can have at most 1 disjunctive filter and 1 array filter. Check if
                // the new filter conflicts with an existing one.
                var o = null;
                if (r && (o = this.wp.yi(i)), null === o && e && (o = this.wp.yi(n)), null != o) 
                // We special case when it's a duplicate op to give a slightly clearer error message.
                throw o === t.op ? new B$1(L$1.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new B$1(L$1.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + o.toString() + "' filters.");
            }
        }
    }, t.prototype.bp = function(t) {
        if (null === this.wp.ii()) {
            // This is the first order by. It must match any inequality.
            var n = this.wp.ni();
            null !== n && this.Ep(n, t.field);
        }
    }, t.prototype.Ep = function(t, n) {
        if (!n.isEqual(t)) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + n.toString() + "' instead.");
    }, t;
}(), ps = /** @class */ function() {
    function t(t, n, i, e) {
        this.tp = t, this.Rp = n, this.Ap = i, this.ip = e, this.Dp = null, this.Pp = null, 
        this.metadata = new ds(i.hasPendingWrites, i.fromCache);
    }
    return Object.defineProperty(t.prototype, "docs", {
        get: function() {
            var t = [];
            return this.forEach((function(n) {
                return t.push(n);
            })), t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        get: function() {
            return this.Ap.docs.J();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Ap.docs.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.forEach = function(t, n) {
        var i = this;
        nt("QuerySnapshot.forEach", arguments, 1, 2), it("QuerySnapshot.forEach", "function", 1, t), 
        this.Ap.docs.forEach((function(e) {
            t.call(n, i.Sp(e));
        }));
    }, Object.defineProperty(t.prototype, "query", {
        get: function() {
            return new ms(this.Rp, this.tp, this.ip);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.docChanges = function(t) {
        t && (dt("QuerySnapshot.docChanges", t, [ "includeMetadataChanges" ]), ut("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var n = !(!t || !t.includeMetadataChanges);
        if (n && this.Ap.Xi) throw new B$1(L$1.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.Dp && this.Pp === n || (this.Dp = 
        /**
 * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
 *
 * Exported for testing.
 */
        function(t, n, i, e) {
            if (i.Hi.J()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var r, u = 0;
                return i.docChanges.map((function(n) {
                    var s = new ws(t, n.doc.key, n.doc, i.fromCache, i.Ji.has(n.doc.key), e);
                    return C$1(n.type === mi.Bi, "Invalid event type for first snapshot"), C$1(!r || i.query.di(r, n.doc) < 0, "Got added events in wrong order"), 
                    r = n.doc, {
                        type: "added",
                        doc: s,
                        oldIndex: -1,
                        newIndex: u++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var s = i.Hi;
            return i.docChanges.filter((function(t) {
                return n || t.type !== mi.Qi;
            })).map((function(n) {
                var r = new ws(t, n.doc.key, n.doc, i.fromCache, i.Ji.has(n.doc.key), e), u = -1, o = -1;
                return n.type !== mi.Bi && (C$1((u = s.indexOf(n.doc.key)) >= 0, "Index for document not found"), 
                s = s.delete(n.doc.key)), n.type !== mi.Mi && (o = (s = s.add(n.doc)).indexOf(n.doc.key)), 
                {
                    type: Ts(n.type),
                    doc: r,
                    oldIndex: u,
                    newIndex: o
                };
            }));
        }(this.tp, n, this.Ap, this.ip), this.Pp = n), this.Dp;
    }, 
    /** Check the equality. The call can be very expensive. */
    t.prototype.isEqual = function(n) {
        if (!(n instanceof t)) throw vt("isEqual", "QuerySnapshot", 1, n);
        return this.tp === n.tp && this.Rp.isEqual(n.Rp) && this.Ap.isEqual(n.Ap) && this.ip === n.ip;
    }, t.prototype.Sp = function(t) {
        return new ws(this.tp, t.key, t, this.metadata.fromCache, this.Ap.Ji.has(t.key), this.ip);
    }, t;
}();

__spreadArrays([ "length", "forEach", "map" ], "undefined" != typeof Symbol ? [ Symbol.iterator ] : []).forEach((function(t) {
    /**
     * We are (re-)defining properties on QuerySnapshot.prototype.docChanges which
     * is a Function. This could fail, in particular in the case of 'length' which
     * already exists on Function.prototype and on IE11 is improperly defined with
     * `{ configurable: false }`. So we wrap this in a try/catch to ensure that we
     * still have a functional SDK.
     */
    try {
        Object.defineProperty(ps.prototype.docChanges, t, {
            get: function() {
                // TODO(2018/11/01): As of 2018/04/17 we're changing docChanges from an array
                // into a method. Because this is a runtime breaking change and somewhat subtle
                // (both Array and Function have a .length, etc.), we'll replace commonly-used
                // properties (including Symbol.iterator) to throw a custom error message. In
                // ~6 months we can delete the custom error as most folks will have hopefully
                // migrated.
                return function() {
                    throw new B$1(L$1.INVALID_ARGUMENT, 'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"');
                }();
            }
        });
    } catch (t) {}
 // Ignore this failure intentionally
}));

var gs = /** @class */ function(t) {
    function n(n, i, e) {
        var r = t.call(this, Nn.ti(n), i, e) || this;
        if (r.Cp = n, n.length % 2 != 1) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + n.nt() + " has " + n.length);
        return r;
    }
    return __extends(n, t), Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.wp.path.X();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            var t = this.wp.path.H();
            return t.J() ? null : new ls(new At(t), this.firestore);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.wp.path.nt();
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.doc = function(t) {
        if (nt("CollectionReference.doc", arguments, 0, 1), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = k$1.u()), it("CollectionReference.doc", "non-empty string", 1, t), 
        "" === t) throw new B$1(L$1.INVALID_ARGUMENT, "Document path must be a non-empty string");
        var n = Tt.it(t);
        return ls.$m(this.wp.path.child(n), this.firestore, this.ip);
    }, n.prototype.add = function(t) {
        Z$1("CollectionReference.add", arguments, 1);
        var n = this.ip ? this.ip.toFirestore(t) : t;
        it("CollectionReference.add", "object", 1, n);
        var i = this.doc();
        return i.set(t).then((function() {
            return i;
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.Cp, this.firestore, t);
    }, n;
}(ms);

function bs(t, n) {
    if (void 0 === n) return {
        merge: !1
    };
    if (dt(t, n, [ "merge", "mergeFields" ]), ut(t, "boolean", "merge", n.merge), st(t, "mergeFields", "a string or a FieldPath", n.mergeFields, (function(t) {
        return "string" == typeof t || t instanceof $r;
    })), void 0 !== n.mergeFields && void 0 !== n.merge) throw new B$1(L$1.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return n;
}

function ys(t, n) {
    return void 0 === n ? {} : (dt(t, n, [ "serverTimestamps" ]), ot(t, 0, "serverTimestamps", n.serverTimestamps, [ "estimate", "previous", "none" ]), 
    n);
}

function _s(t, n) {
    et(t, "object", 1, n), n && (dt(t, n, [ "source" ]), ot(t, 0, "source", n.source, [ "default", "server", "cache" ]));
}

function Is(t, n, i) {
    if (n instanceof ls) {
        if (n.firestore !== i) throw new B$1(L$1.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return n;
    }
    throw vt(t, "DocumentReference", 1, n);
}

function Ts(t) {
    switch (t) {
      case mi.Bi:
        return "added";

      case mi.qi:
      case mi.Qi:
        return "modified";

      case mi.Mi:
        return "removed";

      default:
        return S$1("Unknown change type: " + t);
    }
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function Es(t, n, i) {
    var e;
    return t ? (e = t.toFirestore(n), i = "toFirestore() in " + i) : e = n, [ e, i ];
}

// Export the classes with a private constructor (it will fail if invoked
// at runtime). Note that this still allows instanceof checks.
// We're treating the variables as class names, so disable checking for lower
// case variable names.
var Rs = Qi(cs, "Use firebase.firestore() instead."), As = Qi(as, "Use firebase.firestore().runTransaction() instead."), Ds = Qi(fs, "Use firebase.firestore().batch() instead."), Ps = Qi(ls, "Use firebase.firestore().doc() instead."), Ss = Qi(vs), Cs = Qi(ws), ks = Qi(ms), Vs = Qi(ps), Ns = Qi(gs, "Use firebase.firestore().collection() instead."), Os = {
    Firestore: Rs,
    GeoPoint: gt,
    Timestamp: yt,
    Blob: Ji,
    Transaction: As,
    WriteBatch: Ds,
    DocumentReference: Ps,
    DocumentSnapshot: Ss,
    Query: ks,
    QueryDocumentSnapshot: Cs,
    QuerySnapshot: Vs,
    CollectionReference: Ns,
    FieldPath: $r,
    FieldValue: hu,
    setLogLevel: cs.setLogLevel,
    CACHE_SIZE_UNLIMITED: os
};

/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 */
function Fs(t) {
    var n;
    t.INTERNAL.registerComponent(new Component("firestore", (function(t) {
        var n = t.getProvider("app").getImmediate();
        return new cs(n, t.getProvider("auth-internal"));
    }), "PUBLIC" /* PUBLIC */).setServiceProps((C$1((n = Os) && "object" == typeof n, "shallowCopy() expects object parameter."), 
    __assign({}, n))));
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Us = /** @class */ function() {
    function t() {}
    return t.prototype.Od = function(t) {
        // No-op.
    }, t.prototype.shutdown = function() {
        // No-op.
    }, t;
}(), xs = /** @class */ function() {
    function t() {
        var t = this;
        this.kp = function() {
            return t.Vp();
        }, this.Np = function() {
            return t.Op();
        }, this.Fp = [], this.Up();
    }
    return t.prototype.Od = function(t) {
        this.Fp.push(t);
    }, t.prototype.shutdown = function() {
        window.removeEventListener("online", this.kp), window.removeEventListener("offline", this.Np);
    }, t.prototype.Up = function() {
        window.addEventListener("online", this.kp), window.addEventListener("offline", this.Np);
    }, t.prototype.Vp = function() {
        A$1("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, n = this.Fp; t < n.length; t++) {
            (0, n[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.Op = function() {
        A$1("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, n = this.Fp; t < n.length; t++) {
            (0, n[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.Hs = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), js = /** @class */ function() {
    function t(t) {
        this.xp = t.xp, this.jp = t.jp;
    }
    return t.prototype.yl = function(t) {
        C$1(!this.Lp, "Called onOpen on stream twice!"), this.Lp = t;
    }, t.prototype.wl = function(t) {
        C$1(!this.Bp, "Called onClose on stream twice!"), this.Bp = t;
    }, t.prototype.onMessage = function(t) {
        C$1(!this.Mp, "Called onMessage on stream twice!"), this.Mp = t;
    }, t.prototype.close = function() {
        this.jp();
    }, t.prototype.send = function(t) {
        this.xp(t);
    }, t.prototype.qp = function() {
        C$1(void 0 !== this.Lp, "Cannot call onOpen because no callback was set"), this.Lp();
    }, t.prototype.Qp = function(t) {
        C$1(void 0 !== this.Bp, "Cannot call onClose because no callback was set"), this.Bp(t);
    }, t.prototype.Gp = function(t) {
        C$1(void 0 !== this.Mp, "Cannot call onMessage because no callback was set"), this.Mp(t);
    }, t;
}(), Ls = {
    BatchGetDocuments: "batchGet",
    Commit: "commit"
}, Bs = "gl-js/ fire/" + I$1, Ms = /** @class */ function() {
    function t(t) {
        this.s = t.s;
        var n = t.ssl ? "https" : "http";
        this.Wp = n + "://" + t.host, this.forceLongPolling = t.forceLongPolling;
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    return t.prototype.zp = function(t, n) {
        if (n) for (var i in n.g) n.g.hasOwnProperty(i) && (t[i] = n.g[i]);
        t["X-Goog-Api-Client"] = Bs;
    }, t.prototype.Vl = function(t, n, i) {
        var r = this, u = this.Kp(t);
        return new Promise((function(s, o) {
            var h = new tmp_5;
            h.listenOnce(tmp_3.COMPLETE, (function() {
                try {
                    switch (h.getLastErrorCode()) {
                      case tmp_2.NO_ERROR:
                        var n = h.getResponseJson();
                        A$1("Connection", "XHR received:", JSON.stringify(n)), s(n);
                        break;

                      case tmp_2.TIMEOUT:
                        A$1("Connection", 'RPC "' + t + '" timed out'), o(new B$1(L$1.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case tmp_2.HTTP_ERROR:
                        var i = h.getStatus();
                        if (A$1("Connection", 'RPC "' + t + '" failed with status:', i, "response text:", h.getResponseText()), 
                        i > 0) {
                            var e = h.getResponseJson().error;
                            if (e && e.status && e.message) {
                                var r = (u = e.status, c = u.toLowerCase().replace("_", "-"), Object.values(L$1).indexOf(c) >= 0 ? c : L$1.UNKNOWN);
                                o(new B$1(r, e.message));
                            } else o(new B$1(L$1.UNKNOWN, "Server responded with status " + h.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        A$1("Connection", 'RPC "' + t + '" failed'), o(new B$1(L$1.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        S$1('RPC "' + t + '" failed with unanticipated webchannel error ' + h.getLastErrorCode() + ": " + h.getLastError() + ", giving up.");
                    }
                } finally {
                    A$1("Connection", 'RPC "' + t + '" completed.');
                }
                var u, c;
            }));
            // The database field is already encoded in URL. Specifying it again in
            // the body is not necessary in production, and will cause duplicate field
            // errors in the Firestore Emulator. Let's remove it.
            var c = __assign({}, n);
            delete c.database;
            var a = JSON.stringify(c);
            A$1("Connection", "XHR sending: ", u + " " + a);
            // Content-Type: text/plain will avoid preflight requests which might
            // mess with CORS and redirects by proxies. If we add custom headers
            // we will need to change this code to potentially use the
            // $httpOverwrite parameter supported by ESF to avoid
            // triggering preflight requests.
            var f = {
                "Content-Type": "text/plain"
            };
            r.zp(f, i), h.send(u, "POST", a, f, 15);
        }));
    }, t.prototype.Nl = function(t, n, i) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.Vl(t, n, i);
    }, t.prototype._l = function(t, n) {
        var i = [ this.Wp, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], e = tmp_1(), r = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.s.projectId + "/databases/" + this.s.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling
        };
        this.zp(r.initMessageHeaders, n), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        //
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        //
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (r.httpHeadersOverwriteParam = "$httpHeaders");
        var u = i.join("");
        A$1("Connection", "Creating WebChannel: " + u + " " + r);
        var s = e.createWebChannel(u, r), o = !1, h = !1, w = new js({
            xp: function(t) {
                h ? A$1("Connection", "Not sending because WebChannel is closed:", t) : (o || (A$1("Connection", "Opening WebChannel transport."), 
                s.open(), o = !0), A$1("Connection", "WebChannel sending:", t), s.send(t));
            },
            jp: function() {
                return s.close();
            }
        }), m = function(t, n) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            s.listen(t, (function(t) {
                try {
                    n(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                return m(tmp_4.EventType.OPEN, (function() {
            h || A$1("Connection", "WebChannel transport opened.");
        })), m(tmp_4.EventType.CLOSE, (function() {
            h || (h = !0, A$1("Connection", "WebChannel transport closed"), w.Qp());
        })), m(tmp_4.EventType.ERROR, (function(t) {
            h || (h = !0, A$1("Connection", "WebChannel transport errored:", t), w.Qp(new B$1(L$1.UNAVAILABLE, "The operation could not be completed")));
        })), m(tmp_4.EventType.MESSAGE, (function(t) {
            var n;
            if (!h) {
                var i = t.data[0];
                C$1(!!i, "Got a webchannel message without data.");
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var e = i, r = e.error || (null === (n = e[0]) || void 0 === n ? void 0 : n.error);
                if (r) {
                    A$1("Connection", "WebChannel received error:", r);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var u = r.status, o = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var n = $n[t];
                        if (void 0 !== n) return ei(n);
                    }(u), c = r.message;
                    void 0 === o && (o = L$1.INTERNAL, c = "Unknown error status: " + u + " with message " + r.message), 
                    // Mark closed so no further events are propagated
                    h = !0, w.Qp(new B$1(o, c)), s.close();
                } else A$1("Connection", "WebChannel received:", i), w.Gp(i);
            }
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            w.qp();
        }), 0), w;
    }, 
    // visible for testing
    t.prototype.Kp = function(t) {
        var n = Ls[t];
        return C$1(void 0 !== n, "Unknown REST mapping for: " + t), this.Wp + "/v1/projects/" + this.s.projectId + "/databases/" + this.s.database + "/documents:" + n;
    }, t;
}(), qs = /** @class */ function() {
    function t() {
        this.du = "undefined" != typeof atob;
    }
    return Object.defineProperty(t.prototype, "document", {
        get: function() {
            return "undefined" != typeof document ? document : null;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "window", {
        get: function() {
            return "undefined" != typeof window ? window : null;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Am = function(t) {
        return Promise.resolve(new Ms(t));
    }, t.prototype.Pm = function() {
        return xs.Hs() ? new xs : new Us;
    }, t.prototype.Sm = function(t) {
        return new Mi(t, {
            Ze: !0
        });
    }, t.prototype.i = function(t) {
        return JSON.stringify(t);
    }, t.prototype.atob = function(t) {
        return atob(t);
    }, t.prototype.btoa = function(t) {
        return btoa(t);
    }, t;
}();

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This code needs to run before Firestore is used. This can be achieved in
 * several ways:
 *   1) Through the JSCompiler compiling this code and then (automatically)
 *      executing it before exporting the Firestore symbols.
 *   2) Through importing this module first in a Firestore main module
 */
qi.lu(new qs);

var Qs = "@firebase/firestore", Gs = "1.12.0";

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ws(t) {
    Fs(t), t.registerVersion(Qs, Gs);
}

Ws(firebase$1);