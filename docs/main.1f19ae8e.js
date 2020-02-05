// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/svelte/internal/index.mjs":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add_attribute = add_attribute;
exports.add_classes = add_classes;
exports.add_flush_callback = add_flush_callback;
exports.add_location = add_location;
exports.add_render_callback = add_render_callback;
exports.add_resize_listener = add_resize_listener;
exports.add_transform = add_transform;
exports.afterUpdate = afterUpdate;
exports.append = append;
exports.append_dev = append_dev;
exports.assign = assign;
exports.attr = attr;
exports.attr_dev = attr_dev;
exports.beforeUpdate = beforeUpdate;
exports.bind = bind;
exports.blank_object = blank_object;
exports.bubble = bubble;
exports.check_outros = check_outros;
exports.children = children;
exports.claim_component = claim_component;
exports.claim_element = claim_element;
exports.claim_space = claim_space;
exports.claim_text = claim_text;
exports.clear_loops = clear_loops;
exports.component_subscribe = component_subscribe;
exports.createEventDispatcher = createEventDispatcher;
exports.create_animation = create_animation;
exports.create_bidirectional_transition = create_bidirectional_transition;
exports.create_component = create_component;
exports.create_in_transition = create_in_transition;
exports.create_out_transition = create_out_transition;
exports.create_slot = create_slot;
exports.create_ssr_component = create_ssr_component;
exports.custom_event = custom_event;
exports.dataset_dev = dataset_dev;
exports.debug = debug;
exports.destroy_block = destroy_block;
exports.destroy_component = destroy_component;
exports.destroy_each = destroy_each;
exports.detach = detach;
exports.detach_after_dev = detach_after_dev;
exports.detach_before_dev = detach_before_dev;
exports.detach_between_dev = detach_between_dev;
exports.detach_dev = detach_dev;
exports.dispatch_dev = dispatch_dev;
exports.each = each;
exports.element = element;
exports.element_is = element_is;
exports.empty = empty;
exports.escape = escape;
exports.exclude_internal_props = exclude_internal_props;
exports.fix_and_destroy_block = fix_and_destroy_block;
exports.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
exports.fix_position = fix_position;
exports.flush = flush;
exports.getContext = getContext;
exports.get_binding_group_value = get_binding_group_value;
exports.get_current_component = get_current_component;
exports.get_slot_changes = get_slot_changes;
exports.get_slot_context = get_slot_context;
exports.get_spread_object = get_spread_object;
exports.get_spread_update = get_spread_update;
exports.get_store_value = get_store_value;
exports.group_outros = group_outros;
exports.handle_promise = handle_promise;
exports.init = init;
exports.insert = insert;
exports.insert_dev = insert_dev;
exports.is_function = is_function;
exports.is_promise = is_promise;
exports.listen = listen;
exports.listen_dev = listen_dev;
exports.loop = loop;
exports.loop_guard = loop_guard;
exports.measure = measure;
exports.mount_component = mount_component;
exports.noop = noop;
exports.not_equal = not_equal;
exports.null_to_empty = null_to_empty;
exports.object_without_properties = object_without_properties;
exports.onDestroy = onDestroy;
exports.onMount = onMount;
exports.once = once;
exports.outro_and_destroy_block = outro_and_destroy_block;
exports.prevent_default = prevent_default;
exports.prop_dev = prop_dev;
exports.run = run;
exports.run_all = run_all;
exports.safe_not_equal = safe_not_equal;
exports.schedule_update = schedule_update;
exports.select_multiple_value = select_multiple_value;
exports.select_option = select_option;
exports.select_options = select_options;
exports.select_value = select_value;
exports.self = self;
exports.setContext = setContext;
exports.set_attributes = set_attributes;
exports.set_current_component = set_current_component;
exports.set_custom_element_data = set_custom_element_data;
exports.set_data = set_data;
exports.set_data_dev = set_data_dev;
exports.set_input_type = set_input_type;
exports.set_input_value = set_input_value;
exports.set_now = set_now;
exports.set_raf = set_raf;
exports.set_store_value = set_store_value;
exports.set_style = set_style;
exports.set_svg_attributes = set_svg_attributes;
exports.space = space;
exports.spread = spread;
exports.stop_propagation = stop_propagation;
exports.subscribe = subscribe;
exports.svg_element = svg_element;
exports.text = text;
exports.tick = tick;
exports.time_ranges_to_array = time_ranges_to_array;
exports.to_number = to_number;
exports.toggle_class = toggle_class;
exports.transition_in = transition_in;
exports.transition_out = transition_out;
exports.update_keyed_each = update_keyed_each;
exports.validate_component = validate_component;
exports.validate_store = validate_store;
exports.xlink_attr = xlink_attr;
exports.raf = exports.now = exports.missing_component = exports.is_client = exports.invalid_attribute_name_character = exports.intros = exports.identity = exports.has_prop = exports.globals = exports.escaped = exports.dirty_components = exports.current_component = exports.binding_callbacks = exports.SvelteElement = exports.SvelteComponentDev = exports.SvelteComponent = exports.HtmlTag = void 0;

function noop() {}

const identity = x => x;

exports.identity = identity;

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function is_promise(value) {
  return value && typeof value === 'object' && typeof value.then === 'function';
}

function add_location(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}

function validate_store(store, name) {
  if (!store || typeof store.subscribe !== 'function') {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}

function subscribe(store, callback) {
  const unsub = store.subscribe(callback);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function get_store_value(store) {
  let value;
  subscribe(store, _ => value = _)();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));

    if ($$scope.dirty) {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);

      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return lets;
  }

  return $$scope.dirty;
}

function exclude_internal_props(props) {
  const result = {};

  for (const k in props) if (k[0] !== '$') result[k] = props[k];

  return result;
}

function once(fn) {
  let ran = false;
  return function (...args) {
    if (ran) return;
    ran = true;
    fn.call(this, ...args);
  };
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value = ret) {
  store.set(value);
  return ret;
}

const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

exports.has_prop = has_prop;
const is_client = typeof window !== 'undefined';
exports.is_client = is_client;
let now = is_client ? () => window.performance.now() : () => Date.now();
exports.now = now;
let raf = is_client ? cb => requestAnimationFrame(cb) : noop; // used internally for testing

exports.raf = raf;

function set_now(fn) {
  exports.now = now = fn;
}

function set_raf(fn) {
  exports.raf = raf = fn;
}

const tasks = new Set();

function run_tasks(now) {
  tasks.forEach(task => {
    if (!task.c(now)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * For testing purposes only!
 */


function clear_loops() {
  tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(fulfill => {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),

    abort() {
      tasks.delete(task);
    }

  };
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function element_is(name, is) {
  return document.createElement(name, {
    is
  });
}

function object_without_properties(obj, exclude) {
  const target = {};

  for (const k in obj) {
    if (has_prop(obj, k) // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }

  return target;
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function set_svg_attributes(node, attributes) {
  for (const key in attributes) {
    attr(node, key, attributes[key]);
  }
}

function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = value;
  } else {
    attr(node, prop, value);
  }
}

function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group) {
  const value = [];

  for (let i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.push(group[i].__value);
  }

  return value;
}

function to_number(value) {
  return value === '' ? undefined : +value;
}

function time_ranges_to_array(ranges) {
  const array = [];

  for (let i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function claim_element(nodes, name, attributes, svg) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeName === name) {
      for (let j = 0; j < node.attributes.length; j += 1) {
        const attribute = node.attributes[j];
        if (!attributes[attribute.name]) node.removeAttribute(attribute.name);
      }

      return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
    }
  }

  return svg ? svg_element(name) : element(name);
}

function claim_text(nodes, data) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeType === 3) {
      node.data = '' + data;
      return nodes.splice(i, 1)[0];
    }
  }

  return text(data);
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function set_data(text, data) {
  data = '' + data;
  if (text.data !== data) text.data = data;
}

function set_input_value(input, value) {
  if (value != null || input.value) {
    input.value = value;
  }
}

function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {// do nothing
  }
}

function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? 'important' : '');
}

function select_option(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
}

function select_options(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function select_value(select) {
  const selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}

function add_resize_listener(element, fn) {
  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative';
  }

  const object = document.createElement('object');
  object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
  object.setAttribute('aria-hidden', 'true');
  object.type = 'text/html';
  object.tabIndex = -1;
  let win;

  object.onload = () => {
    win = object.contentDocument.defaultView;
    win.addEventListener('resize', fn);
  };

  if (/Trident/.test(navigator.userAgent)) {
    element.appendChild(object);
    object.data = 'about:blank';
  } else {
    object.data = 'about:blank';
    element.appendChild(object);
  }

  return {
    cancel: () => {
      win && win.removeEventListener && win.removeEventListener('resize', fn);
      element.removeChild(object);
    }
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  const e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

class HtmlTag {
  constructor(html, anchor = null) {
    this.e = element('div');
    this.a = anchor;
    this.u(html);
  }

  m(target, anchor = null) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert(target, this.n[i], anchor);
    }

    this.t = target;
  }

  u(html) {
    this.e.innerHTML = html;
    this.n = Array.from(this.e.childNodes);
  }

  p(html) {
    this.d();
    this.u(html);
    this.m(this.t, this.a);
  }

  d() {
    this.n.forEach(detach);
  }

}

exports.HtmlTag = HtmlTag;
let stylesheet;
let active = 0;
let current_rules = {}; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }

  const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
  const name = `__svelte_${hash(rule)}_${uid}`;

  if (!current_rules[name]) {
    if (!stylesheet) {
      const style = element('style');
      document.head.appendChild(style);
      stylesheet = style.sheet;
    }

    current_rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }

  const animation = node.style.animation || '';
  node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}

function delete_rule(node, name) {
  node.style.animation = (node.style.animation || '').split(', ').filter(name ? anim => anim.indexOf(name) < 0 // remove specific animation
  : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
  ).join(', ');
  if (name && ! --active) clear_rules();
}

function clear_rules() {
  raf(() => {
    if (active) return;
    let i = stylesheet.cssRules.length;

    while (i--) stylesheet.deleteRule(i);

    current_rules = {};
  });
}

function create_animation(node, from, fn, params) {
  if (!from) return noop;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
  const {
    delay = 0,
    duration = 300,
    easing = identity,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay,
    // @ts-ignore todo:
    end = start_time + duration,
    tick = noop,
    css
  } = fn(node, {
    from,
    to
  }, params);
  let running = true;
  let started = false;
  let name;

  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }

    if (!delay) {
      started = true;
    }
  }

  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }

  loop(now => {
    if (!started && now >= start_time) {
      started = true;
    }

    if (started && now >= end) {
      tick(1, 0);
      stop();
    }

    if (!running) {
      return false;
    }

    if (started) {
      const p = now - start_time;
      const t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }

    return true;
  });
  start();
  tick(0, 1);
  return stop;
}

function fix_position(node) {
  const style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    const {
      width,
      height
    } = style;
    const a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}

function add_transform(node, a) {
  const b = node.getBoundingClientRect();

  if (a.left !== b.left || a.top !== b.top) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
  }
}

let current_component;
exports.current_component = current_component;

function set_current_component(component) {
  exports.current_component = current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error(`Function called outside component initialization`);
  return current_component;
}

function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      const event = custom_event(type, detail);
      callbacks.slice().forEach(fn => {
        fn.call(component, event);
      });
    }
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    callbacks.slice().forEach(fn => fn(event));
  }
}

const dirty_components = [];
exports.dirty_components = dirty_components;
const intros = {
  enabled: false
};
exports.intros = intros;
const binding_callbacks = [];
exports.binding_callbacks = binding_callbacks;
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function tick() {
  schedule_update();
  return resolved_promise;
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}

function flush() {
  const seen_callbacks = new Set();

  do {
    // first, call beforeUpdate functions
    // and update components
    while (dirty_components.length) {
      const component = dirty_components.shift();
      set_current_component(component);
      update(component.$$);
    }

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        callback(); // ...so guard against infinite loops

        seen_callbacks.add(callback);
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    $$.fragment && $$.fragment.p($$.ctx, $$.dirty);
    $$.dirty = [-1];
    $$.after_update.forEach(add_render_callback);
  }
}

let promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

const null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  let config = fn(node, params);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, 'start'));
    task = loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  let started = false;
  return {
    start() {
      if (started) return;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },

    invalidate() {
      started = false;
    },

    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }

  };
}

function create_out_transition(node, fn, params) {
  let config = fn(node, params);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, 'start'));
    loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(() => {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }

  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  let config = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(() => dispatch(node, b, 'start'));
      loop(now => {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            const p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },

    end() {
      clear_animation();
      running_program = pending_program = null;
    }

  };
}

function handle_promise(promise, info) {
  const token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    let child_ctx = info.ctx;

    if (key !== undefined) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }

    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, () => {
              info.blocks[i] = null;
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;

    if (needs_flush) {
      flush();
    }
  }

  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(value => {
      set_current_component(current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, error => {
      set_current_component(current_component);
      update(info.catch, 2, info.error, error);
      set_current_component(null);
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = promise;
  }
}

const globals = typeof window !== 'undefined' ? window : global;
exports.globals = globals;

function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}

function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}

function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};

  while (i--) old_indexes[old_blocks[i].key] = i;

  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;

  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  const will_move = new Set();
  const did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }

  while (n) insert(new_blocks[n - 1]);

  return new_blocks;
}

function measure(blocks) {
  const rects = {};
  let i = blocks.length;

  while (i--) rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();

  return rects;
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html


const boolean_attributes = new Set(['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected']);
const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

exports.invalid_attribute_name_character = invalid_attribute_name_character;

function spread(args, classes_to_add) {
  const attributes = Object.assign({}, ...args);

  if (classes_to_add) {
    if (attributes.class == null) {
      attributes.class = classes_to_add;
    } else {
      attributes.class += ' ' + classes_to_add;
    }
  }

  let str = '';
  Object.keys(attributes).forEach(name => {
    if (invalid_attribute_name_character.test(name)) return;
    const value = attributes[name];
    if (value === true) str += " " + name;else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += " " + name;
    } else if (value != null) {
      str += " " + name + "=" + JSON.stringify(String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;'));
    }
  });
  return str;
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
exports.escaped = escaped;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }

  return str;
}

const missing_component = {
  $$render: () => ''
};
exports.missing_component = missing_component;

function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function debug(file, line, column, values) {
  console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console

  console.log(values); // eslint-disable-line no-console

  return '';
}

let on_destroy;

function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : []),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$
    });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }

  return {
    render: (props = {}, options = {}) => {
      on_destroy = [];
      const result = {
        head: '',
        css: new Set()
      };
      const html = $$render(result, props, {}, options);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map(css => css.code).join('\n'),
          map: null // TODO

        },
        head: result.head
      };
    },
    $$render
  };
}

function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value) return '';
  return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

function add_classes(classes) {
  return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
  const index = component.$$.props[name];

  if (index !== undefined) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

  add_render_callback(() => {
    const new_on_destroy = on_mount.map(run).filter(is_function);

    if (on_destroy) {
      on_destroy.push(...new_on_destroy);
    } else {
      // Edge case - component was destroyed immediately,
      // most likely as a result of a binding initialising
      run_all(new_on_destroy);
    }

    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const prop_values = options.props || {};
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty
  };
  let ready = false;
  $$.ctx = instance ? instance(component, prop_values, (i, ret, value = ret) => {
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if ($$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.l(children(options.target));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }

  set_current_component(parent_component);
}

let SvelteElement;
exports.SvelteElement = SvelteElement;

if (typeof HTMLElement === 'function') {
  exports.SvelteElement = SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
    }

    connectedCallback() {
      // @ts-ignore todo: improve typings
      for (const key in this.$$.slotted) {
        // @ts-ignore todo: improve typings
        this.appendChild(this.$$.slotted[key]);
      }
    }

    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }

    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }

    $on(type, callback) {
      // TODO should this delegate to addEventListener?
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }

    $set() {// overridden by instance, if it has props
    }

  };
}

class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set() {// overridden by instance, if it has props
  }

}

exports.SvelteComponent = SvelteComponent;

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, detail));
}

function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node
  });
  append(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node,
    anchor
  });
  insert(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", {
    node
  });
  detach(node);
}

function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}

function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}

function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev("SvelteDOMAddEventListener", {
    node,
    event,
    handler,
    modifiers
  });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", {
      node,
      event,
      handler,
      modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
    node,
    attribute
  });else dispatch_dev("SvelteDOMSetAttribute", {
    node,
    attribute,
    value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev("SvelteDOMSetProperty", {
    node,
    property,
    value
  });
}

function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev("SvelteDOMSetDataset", {
    node,
    property,
    value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.data === data) return;
  dispatch_dev("SvelteDOMSetData", {
    node: text,
    data
  });
  text.data = data;
}

class SvelteComponentDev extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error(`'target' is a required option`);
    }

    super();
  }

  $destroy() {
    super.$destroy();

    this.$destroy = () => {
      console.warn(`Component was already destroyed`); // eslint-disable-line no-console
    };
  }

}

exports.SvelteComponentDev = SvelteComponentDev;

function loop_guard(timeout) {
  const start = Date.now();
  return () => {
    if (Date.now() - start > timeout) {
      throw new Error(`Infinite loop detected`);
    }
  };
}
},{}],"../node_modules/svelte/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SvelteComponent", {
  enumerable: true,
  get: function () {
    return _internal.SvelteComponentDev;
  }
});
Object.defineProperty(exports, "afterUpdate", {
  enumerable: true,
  get: function () {
    return _internal.afterUpdate;
  }
});
Object.defineProperty(exports, "beforeUpdate", {
  enumerable: true,
  get: function () {
    return _internal.beforeUpdate;
  }
});
Object.defineProperty(exports, "createEventDispatcher", {
  enumerable: true,
  get: function () {
    return _internal.createEventDispatcher;
  }
});
Object.defineProperty(exports, "getContext", {
  enumerable: true,
  get: function () {
    return _internal.getContext;
  }
});
Object.defineProperty(exports, "onDestroy", {
  enumerable: true,
  get: function () {
    return _internal.onDestroy;
  }
});
Object.defineProperty(exports, "onMount", {
  enumerable: true,
  get: function () {
    return _internal.onMount;
  }
});
Object.defineProperty(exports, "setContext", {
  enumerable: true,
  get: function () {
    return _internal.setContext;
  }
});
Object.defineProperty(exports, "tick", {
  enumerable: true,
  get: function () {
    return _internal.tick;
  }
});

var _internal = require("./internal");
},{"./internal":"../node_modules/svelte/internal/index.mjs"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"components/spices.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

/* components/spices.svelte generated by Svelte v3.16.4 */
const {
  document: document_1
} = _internal.globals;
const file = "components/spices.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = "svelte-wivk4j-style";
  style.textContent = "button.svelte-wivk4j{background:none;font-size:20px}#darkModeToggle.svelte-wivk4j{position:absolute;top:10px;left:20px}#retroToggle.svelte-wivk4j{position:absolute;top:10px;right:20px}\n";
  (0, _internal.append_dev)(document_1.head, style);
}

function create_fragment(ctx) {
  let button0;
  let i0;
  let button1;
  let i1;
  let i1_class_value;
  let dispose;
  const block = {
    c: function create() {
      button0 = (0, _internal.element)("button");
      i0 = (0, _internal.element)("i");
      button1 = (0, _internal.element)("button");
      i1 = (0, _internal.element)("i");
      (0, _internal.attr_dev)(i0, "class", "fas fa-pepper-hot");
      (0, _internal.add_location)(i0, file, 76, 55, 2265);
      (0, _internal.attr_dev)(button0, "id", "retroToggle");
      (0, _internal.attr_dev)(button0, "class", "svelte-wivk4j");
      (0, _internal.add_location)(button0, file, 76, 0, 2210);
      (0, _internal.attr_dev)(i1, "class", i1_class_value = "fas fa-" + (
      /*theme*/
      ctx[0] === "light" ? "sun" : "moon"));
      (0, _internal.add_location)(i1, file, 76, 150, 2360);
      (0, _internal.attr_dev)(button1, "id", "darkModeToggle");
      (0, _internal.attr_dev)(button1, "class", "svelte-wivk4j");
      (0, _internal.add_location)(button1, file, 76, 97, 2307);
      dispose = [(0, _internal.listen_dev)(button0, "click", function () {
        /*toggleThemeStyle*/
        ctx[2].apply(this, arguments);
      }, false, false, false), (0, _internal.listen_dev)(button1, "click", function () {
        /*toggleTheme*/
        ctx[1].apply(this, arguments);
      }, false, false, false)];
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, button0, anchor);
      (0, _internal.append_dev)(button0, i0);
      (0, _internal.insert_dev)(target, button1, anchor);
      (0, _internal.append_dev)(button1, i1);
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;

      if (dirty[0] &
      /*theme*/
      1 && i1_class_value !== (i1_class_value = "fas fa-" + (
      /*theme*/
      ctx[0] === "light" ? "sun" : "moon"))) {
        (0, _internal.attr_dev)(i1, "class", i1_class_value);
      }
    },
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(button0);
      if (detaching) (0, _internal.detach_dev)(button1);
      (0, _internal.run_all)(dispose);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var theme, themeStyle, themeStyles, themes, toggleTheme, toggleThemeStyle;
  theme = "";
  themeStyle = "";
  themes = ["light", "dark"];
  themeStyles = ["modern", "retro"];
  (0, _svelte.onMount)(() => {
    var lastThemeStyleUsed, lastThemeUsed;
    window.matchMedia("(prefers-color-scheme: light)").addListener(() => {
      return $$invalidate(0, theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    });
    lastThemeUsed = sessionStorage.getItem("theme");

    if (lastThemeUsed) {
      document.documentElement.setAttribute("theme", lastThemeUsed);
      $$invalidate(0, theme = lastThemeUsed);
    }

    lastThemeStyleUsed = sessionStorage.getItem("theme-style");

    if (lastThemeStyleUsed) {
      document.documentElement.setAttribute("theme-style", lastThemeStyleUsed);
      themeStyle = lastThemeStyleUsed;
    }

    $$invalidate(0, theme = document.documentElement.getAttribute("theme"));
    return themeStyle = document.documentElement.getAttribute("theme-style");
  });

  toggleThemeStyle = () => {
    var activeThemeStyle, i, nextThemeStyle;
    activeThemeStyle = document.documentElement.getAttribute("theme-style");
    i = themeStyles.findIndex(t => {
      return t === activeThemeStyle;
    });
    nextThemeStyle = themeStyles[(i + 1) % themeStyles.length];
    document.documentElement.setAttribute("theme-style", nextThemeStyle);
    themeStyle = nextThemeStyle;
    return sessionStorage.setItem("theme-style", themeStyle);
  };

  toggleTheme = () => {
    var activeTheme, i, nextTheme;
    activeTheme = document.documentElement.getAttribute("theme");
    i = themes.findIndex(t => {
      return t === activeTheme;
    });
    nextTheme = themes[(i + 1) % themes.length];
    document.documentElement.setAttribute("theme", nextTheme);
    $$invalidate(0, theme = nextTheme);
    return sessionStorage.setItem("theme", theme);
  };

  $$self.$capture_state = () => {
    return {};
  };

  $$self.$inject_state = $$props => {
    if ("theme" in $$props) $$invalidate(0, theme = $$props.theme);
    if ("themeStyle" in $$props) themeStyle = $$props.themeStyle;
    if ("themeStyles" in $$props) themeStyles = $$props.themeStyles;
    if ("themes" in $$props) themes = $$props.themes;
    if ("toggleTheme" in $$props) $$invalidate(1, toggleTheme = $$props.toggleTheme);
    if ("toggleThemeStyle" in $$props) $$invalidate(2, toggleThemeStyle = $$props.toggleThemeStyle);
  };

  return [theme, toggleTheme, toggleThemeStyle];
}

class Spices extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document_1.getElementById("svelte-wivk4j-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Spices",
      options,
      id: create_fragment.name
    });
  }

}

var _default = Spices;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/avatar.jpg":[function(require,module,exports) {
module.exports = "/avatar.539b9fbc.jpg";
},{}],"components/shaders/blob-avatar.vert":[function(require,module,exports) {
module.exports = "#version 300 es\n\nprecision mediump float;\n#define GLSLIFY 1\n\n// out vec2 uv;\n\nvoid main()\n{\n    vec2 uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);\n    gl_Position = vec4(uv * 2.0 + -1.0, 0.0, 1.0);\n}\n";
},{}],"components/shaders/blob-avatar.frag":[function(require,module,exports) {
module.exports = "#version 300 es\n\nprecision mediump float;\n#define GLSLIFY 1\n\nout vec4 frag;\n\nuniform float time;\nuniform vec4 mouse;\nuniform vec2 viewport_size;\nuniform vec3 backColor;\n\nuniform sampler2D sam;\n\n#define f32 float\n#define v2 vec2\n#define v3 vec3\n#define v4 vec4\n\n// cosine based palette, 4 vec3 params\n// https://www.iquilezles.org/www/articles/palettes/palettes.htm\nv3 palette(f32 t, v3 a, v3 b, v3 c, v3 d)\n{\n    return a + b * cos(6.2831 * (c * t + d));\n}\n\nv3 rainbowMap(f32 t)\n{\n    v3 a = v3(0.5, 0.5, 0.5);\n    v3 b = v3(0.5, 0.5, 0.5);\n    v3 c = v3(1.0, 1.0, 1.0);\n    v3 d = v3(0.00, 0.33, 0.67);\n    return palette(t, a, b, c, d);\n}\n\nv3 heatMap2(f32 t)\n{\n    v3 a = v3(0.5, 0.5, 0.5);\n    v3 b = v3(0.5, 0.5, 0.5);\n    v3 c = v3(1.0, 1.0, 1.0);\n    v3 d = v3(0.00, 0.10, 0.20);\n    return palette(t, a, b, c, d);\n}\n\nv3 heatMap(f32 t)\n{\n    v3 a = v3(0.5, 0.5, 0.5);\n    v3 b = v3(0.5, 0.5, 0.5);\n    v3 c = v3(1.0, 0.7, 0.4);\n    v3 d = v3(0.00, 0.15, 0.20);\n    return palette(t, a, b, c, d);\n}\n\nv3 papayaMap(f32 t)\n{\n    v3 a = v3(0.8, 0.5, 0.4);\n    v3 b = v3(0.2, 0.4, 0.2);\n    v3 c = v3(2.0, 1.0, 1.0);\n    v3 d = v3(0.00, 0.25, 0.2);\n    return palette(t, a, b, c, d);\n}\n\nf32 dCircle(v2 p, f32 r)\n{\n    return length(p) - r;\n}\n\nf32 hash21(v2 p) {\n  p = fract(p * v2(233.34, 851.74));\n  p += dot(p, p + 23.45);\n  return fract(p.x * p.y);\n}\n\nf32 map(v2 p, f32 time, v2 mo)\n{\n    f32 d = dCircle(p, 0.01) + sin(p.x*time)*0.3*sin(p.y*time)*0.3;\n    return d;\n}\n\nvoid main()\n{\n    // v2 uv = gl_FragCoord.xy / viewport_size;\n    v2 p = (gl_FragCoord.xy - viewport_size* 0.5) / viewport_size.y;\n    v2 mo = (mouse.xy-viewport_size*0.5)/viewport_size.y;\n    mo.y = -mo.y;\n    // f32 mask = 1.0-(texture(sam, uv*v2(1.0, 0.64308)+v2(0.0, 0.3569)).a);\n    \n    f32 d = map(p, min(5.0,time*2.0)*2.0, mo);\n    f32 r = 0.4;\n    frag = v4(backColor, 1.0) * (smoothstep(r-0.01, r, d));\n}\n";
},{}],"components/utils/v2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class v2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  neg() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  scale(v) {
    this.x *= v;
    this.y *= v;
    return this;
  }

  div(v) {
    if (v != 0) {
      this.x /= v;
      this.y /= v;
    }

    return this;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  length() {
    return Math.sqrt(this.dot(this));
  }

  normalize() {
    return this.div(this.length());
  }

  static distance(a, b) {
    return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
  }

  static neg(v) {
    return new v2(-v.x, -v.y);
  }

  static add(a, b) {
    return new v2(a.x + b.x, a.y + b.y);
  }

  static adds(a, b) {
    return new v2(a.x + b, a.y + b);
  }

  static sub(a, b) {
    return new v2(a.x - b.x, a.y - b.y);
  }

  static subs(a, b) {
    return new v2(a.x - b, a.y - b);
  }

  static scale(a, b) {
    return new v2(a.x * b, a.y * b);
  }

  static div(a, b) {
    return new v2(a.x / b, a.y / b);
  }

  static dot(a, b) {
    return a.x * b.x + a.y * b.y;
  }

}

exports.default = v2;
},{}],"components/utils/v4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class v4 {
  constructor(x = 0, y = 0, z = 0, w = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  RGBA() {
    return {
      r: this.x,
      g: this.y,
      b: this.z,
      a: this.w
    };
  }

  add(b) {
    this.x += b.x;
    this.y += b.y;
    this.z += b.z;
    this.w += b.w;
    return this;
  }

  sub(b) {
    this.x -= b.x;
    this.y -= b.y;
    this.z -= b.z;
    this.w -= b.w;
    return this;
  }

  scale(b) {
    this.x *= b;
    this.y *= b;
    this.z *= b;
    this.w *= b;
    return this;
  }

  static scale(a, b) {
    return new v4(a.x * b, a.y * b, a.z * b, a.w * b);
  }

  static add(a, b) {
    return new v4(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
  }

  static sub(a, b) {
    return new v4(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
  }

}

exports.default = v4;
},{}],"components/utils/mat4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class mat4 {
  static fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    let out = [];
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
  }

}

exports.default = mat4;
},{}],"components/utils/math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "v2", {
  enumerable: true,
  get: function () {
    return _v.default;
  }
});
Object.defineProperty(exports, "v4", {
  enumerable: true,
  get: function () {
    return _v2.default;
  }
});
Object.defineProperty(exports, "mat4", {
  enumerable: true,
  get: function () {
    return _mat.default;
  }
});

var _v = _interopRequireDefault(require("./v2"));

var _v2 = _interopRequireDefault(require("./v4"));

var _mat = _interopRequireDefault(require("./mat4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./v2":"components/utils/v2.js","./v4":"components/utils/v4.js","./mat4":"components/utils/mat4.js"}],"components/utils/query.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 *  Shorthand syntax for getting elements from the DOM.
 *
 * @param {string} query - Prefix IDs, classes, elements with '# . <' respectivly.
 * @returns {(HTMLElement|HTMLElement[]|NodeListOf<Element>)} Returns element if 'ID' otherwise an array of elements.
 */
const $ = query => query[0] === '#' ? document.getElementById(query.slice(1, query.length)) : query[0] === '.' ? [...document.getElementsByClassName(query.slice(1, query.length))] : query[0] === '<' ? document.createElement(query.slice(1, query.length - 1)) : [...document.querySelectorAll(query)];

var _default = $;
exports.default = _default;
},{}],"components/utils/utility.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addButton = exports.addProgressBar = exports.random = exports.uuidv4 = exports.getExt = exports.getTime = exports.cachedFetch = exports.HSLtoRGBA = exports.HSLtoRGB = exports.HSLstringToRGB = exports.Rect = exports.randFloat = exports.getMinAndMaxPosition = exports.rawNumToSuffixed = void 0;

var _math = require("./math");

var _query = _interopRequireDefault(require("./query"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rawNumToSuffixed = num => {
  if (num >= 1000000) return parseInt(num / 1000000).toString() + "m";
  if (num >= 1000) return parseInt(num / 1000).toString() + "k";
  return num.toString();
};
/**
 * Returns the minimum and maximum position found.
 * @param {Object[]} objects - An array of objects with a 'pos' property.
 * @returns {min, max}- An object with a 'min' and 'max' property.
 */


exports.rawNumToSuffixed = rawNumToSuffixed;

const getMinAndMaxPosition = objects => {
  let min = new _math.v2(10000, 10000);
  let max = new _math.v2(-10000, -10000);

  for (const object of objects) {
    const pos = object.position;
    if (pos.x > max.x) max.x = pos.x;else if (pos.x < min.x) min.x = pos.x;
    if (pos.y > max.y) max.y = pos.y;else if (pos.y < min.y) min.y = pos.y;
  }

  return {
    min: min,
    max: max
  };
};

exports.getMinAndMaxPosition = getMinAndMaxPosition;

const randFloat = (min, max) => {
  return Math.random() * (max - min) + min;
};

exports.randFloat = randFloat;

class Rect {
  constructor(min = new _math.v2(0, 0), max = new _math.v2(0, 0)) {
    this.min = min;
    this.max = max;
    this.color = {
      r: 1.0,
      g: 1.0,
      b: 1.0,
      a: 1.0
    };
  }

  containsPoint(position, radius) {
    if (position.x - radius < this.max.x && position.x + radius > this.min.x && position.y - radius < this.max.y && position.y + radius > this.min.y) {
      return true;
    }

    return false;
  }

}

exports.Rect = Rect;

const hue2rgb = (p, q, t) => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
};

const HSLstringToRGB = hsl => {
  const regexp = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g;
  let res = regexp.exec(hsl).slice(1);
  res[0] = parseInt(res[0]);
  res[1] = parseInt(res[1].slice(0, res[1].length - 1));
  res[2] = parseInt(res[2].slice(0, res[2].length - 1));
  const rgb = HSLtoRGB(res[0], res[1], res[2]);
  return {
    r: rgb.r * 255,
    g: rgb.g * 255,
    b: rgb.b * 255
  };
};

exports.HSLstringToRGB = HSLstringToRGB;

const HSLtoRGB = (h, s, l) => {
  var r, g, b, m, c, x;
  if (!isFinite(h)) h = 0;
  if (!isFinite(s)) s = 0;
  if (!isFinite(l)) l = 0;
  h /= 60;
  if (h < 0) h = 6 - -h % 6;
  h %= 6;
  s = Math.max(0, Math.min(1, s / 100));
  l = Math.max(0, Math.min(1, l / 100));
  c = (1 - Math.abs(2 * l - 1)) * s;
  x = c * (1 - Math.abs(h % 2 - 1));

  if (h < 1) {
    r = c;
    g = x;
    b = 0;
  } else if (h < 2) {
    r = x;
    g = c;
    b = 0;
  } else if (h < 3) {
    r = 0;
    g = c;
    b = x;
  } else if (h < 4) {
    r = 0;
    g = x;
    b = c;
  } else if (h < 5) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  m = l - c / 2;
  r += m;
  g += m;
  b += m;
  return {
    r: r,
    g: g,
    b: b
  };
};

exports.HSLtoRGB = HSLtoRGB;

const HSLtoRGBA = (h, s, l) => {
  var r, g, b, m, c, x;
  if (!isFinite(h)) h = 0;
  if (!isFinite(s)) s = 0;
  if (!isFinite(l)) l = 0;
  h /= 60;
  if (h < 0) h = 6 - -h % 6;
  h %= 6;
  s = Math.max(0, Math.min(1, s / 100));
  l = Math.max(0, Math.min(1, l / 100));
  c = (1 - Math.abs(2 * l - 1)) * s;
  x = c * (1 - Math.abs(h % 2 - 1));

  if (h < 1) {
    r = c;
    g = x;
    b = 0;
  } else if (h < 2) {
    r = x;
    g = c;
    b = 0;
  } else if (h < 3) {
    r = 0;
    g = c;
    b = x;
  } else if (h < 4) {
    r = 0;
    g = x;
    b = c;
  } else if (h < 5) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  m = l - c / 2;
  r += m;
  g += m;
  b += m;
  return {
    r: r,
    g: g,
    b: b,
    a: 1
  };
};

exports.HSLtoRGBA = HSLtoRGBA;

const cachedFetch = async (root, storage = sessionStorage) => {
  const result = storage.getItem(root);

  if (result !== null) {
    console.log(`getting ${root}... from storage`);
    return JSON.parse(result);
  } else {
    console.log(`getting ${root}... from source`);
    const res = await fetch(root);
    const json = await res.json();
    storage.setItem(root, JSON.stringify(json));
    return json;
  }
};

exports.cachedFetch = cachedFetch;

const getTime = () => {
  return new Date().getTime();
};

exports.getTime = getTime;

const getExt = str => {
  return str.split('.').pop();
};

exports.getExt = getExt;

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

exports.uuidv4 = uuidv4;

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

exports.random = random;

const addProgressBar = options => {
  const bar = (0, _query.default)('<input>');
  bar.type = 'range';
  bar.className = options.className || 'slider';
  bar.setAttribute('value', options.startingValue || 50);
  bar.setAttribute('min', options.minValue || 0);
  bar.setAttribute('max', options.maxValue || 100);
  bar.addEventListener('input', options.callback);
  options.element.appendChild(bar);
};

exports.addProgressBar = addProgressBar;

const addButton = options => {
  const element = (0, _query.default)('<button>');
  element.textContent = options.label;
  element.id = options.id || options.label;
  element.className = options.className || 'btn';
  element.addEventListener('click', options.callback);
  (0, _query.default)(`#${options.parent}`).appendChild(element);
};

exports.addButton = addButton;
},{"./math":"components/utils/math.js","./query":"components/utils/query.js"}],"components/hero.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _avatar = _interopRequireDefault(require("../assets/avatar.jpg"));

var _blobAvatar = _interopRequireDefault(require("./shaders/blob-avatar.vert"));

var _blobAvatar2 = _interopRequireDefault(require("./shaders/blob-avatar.frag"));

var _svelte = require("svelte");

var _math = require("./utils/math");

var _utility = require("./utils/utility");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* components/hero.svelte generated by Svelte v3.16.4 */
const {
  document: document_1
} = _internal.globals;
const file = "components/hero.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = "svelte-zuypa7-style";
  style.textContent = "canvas.svelte-zuypa7{margin:0 auto;margin-top:20px;background-image:var(--avatar);background-size:cover;width:200px;height:200px}\n";
  (0, _internal.append_dev)(document_1.head, style);
}

function create_fragment(ctx) {
  let div;
  let canvas_1;
  let h1;
  let p;
  let t1;
  let br0;
  let t2;
  let br1;
  let a;
  let icon;
  let span;
  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      canvas_1 = (0, _internal.element)("canvas");
      h1 = (0, _internal.element)("h1");
      h1.textContent = "Marcus Mathiassen";
      p = (0, _internal.element)("p");
      t1 = (0, _internal.text)("I do compilers and graphics.");
      br0 = (0, _internal.element)("br");
      t2 = (0, _internal.text)("\nInterested in systems design and UX.");
      br1 = (0, _internal.element)("br");
      a = (0, _internal.element)("a");
      icon = (0, _internal.element)("icon");
      span = (0, _internal.element)("span");
      span.textContent = "Contact Me";
      (0, _internal.attr_dev)(canvas_1, "class", "svelte-zuypa7");
      (0, _internal.add_location)(canvas_1, file, 10, 51, 267);
      (0, _internal.attr_dev)(h1, "class", "title is-size-3");
      (0, _internal.add_location)(h1, file, 10, 89, 305);
      (0, _internal.add_location)(br0, file, 10, 197, 413);
      (0, _internal.attr_dev)(p, "class", "subtitle is-size-5");
      (0, _internal.add_location)(p, file, 10, 139, 355);
      (0, _internal.add_location)(br1, file, 11, 40, 458);
      (0, _internal.attr_dev)(icon, "class", "fontello icon-mail-alt");
      (0, _internal.add_location)(icon, file, 11, 129, 547);
      (0, _internal.add_location)(span, file, 11, 173, 591);
      (0, _internal.attr_dev)(a, "class", "button has-addons is-bold is-size-5");
      (0, _internal.attr_dev)(a, "href", "mailto:mathiassenmarcus@me.com");
      (0, _internal.add_location)(a, file, 11, 44, 462);
      (0, _internal.attr_dev)(div, "class", "container");
      (0, _internal.set_style)(div, "text-align", "center");
      (0, _internal.add_location)(div, file, 10, 0, 216);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);
      (0, _internal.append_dev)(div, canvas_1);
      /*canvas_1_binding*/

      ctx[18](canvas_1);
      (0, _internal.append_dev)(div, h1);
      (0, _internal.append_dev)(div, p);
      (0, _internal.append_dev)(p, t1);
      (0, _internal.append_dev)(p, br0);
      (0, _internal.append_dev)(p, t2);
      (0, _internal.append_dev)(div, br1);
      (0, _internal.append_dev)(div, a);
      (0, _internal.append_dev)(a, icon);
      (0, _internal.append_dev)(a, span);
    },
    p: _internal.noop,
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      /*canvas_1_binding*/

      ctx[18](null);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function isPowerOf2(value) {
  return (value & value - 1) == 0;
}

function instance($$self, $$props, $$invalidate) {
  let focused = true;
  let startTime = 0;
  let mouse = {
    x: 0,
    y: 0,
    z: 0,
    w: 0
  };
  let uniformLoc = {
    viewport_size: 0,
    sam: 0,
    time: 0,
    mouse: 0,
    backColor: 0
  };
  let texture;
  let textColors;
  let backColor;
  let devicePixelRatio;
  let vao;
  let gl;
  let program;
  let canvas;
  let canvasWidth = 200 * 1.5;
  let canvasHeight = 200 * 1.5;

  const normalize = rgba => {
    return {
      r: rgba.r / 255,
      g: rgba.g / 255,
      b: rgba.b / 255
    };
  };

  function updateValues() {
    var desiredCSSWidth = canvasWidth;
    var desiredCSSHeight = canvasHeight;
    devicePixelRatio = canvas.devicePixelRatio || 1;
    $$invalidate(0, canvas.width = desiredCSSWidth * devicePixelRatio, canvas);
    $$invalidate(0, canvas.height = desiredCSSHeight * devicePixelRatio, canvas);
    $$invalidate(0, canvas.style.width = desiredCSSWidth + "px", canvas);
    $$invalidate(0, canvas.style.height = desiredCSSHeight + "px", canvas);
    canvasWidth *= devicePixelRatio;
    canvasHeight *= devicePixelRatio;

    if (document.documentElement.getAttribute("theme") === "light") {
      backColor = normalize({
        r: 254,
        g: 254,
        b: 254
      });
    } else {
      backColor = normalize({
        r: 22,
        g: 21,
        b: 30
      });
    }
  }

  const getRelativeMousePosition = (event, target) => {
    target = target || event.target;
    const rect = target.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  };

  const updateMousePos = (event, target) => {
    target = target || event.target;
    let pos = getRelativeMousePosition(event, target);
    pos.x *= devicePixelRatio;
    pos.y *= devicePixelRatio;
    mouse.x = pos.x;
    mouse.y = pos.y;
  };

  (0, _svelte.onMount)(async () => {
    canvas.addEventListener("mousemove", updateMousePos);
    canvas.addEventListener("mouseenter", () => focused = !focused);
    canvas.addEventListener("mouseleave", () => focused = !focused);
    canvas.addEventListener("mousedown", () => {
      mouse.w = 1;
    });
    gl = canvas.getContext("webgl2");

    if (!gl) {
      console.error("no webgl2 context found. stopping.");
      $$invalidate(0, canvas.style.borderRadius = "50%", canvas);
      return;
    }

    gl.enable(gl.BLEND);
    gl.blendEquation(gl.FUNC_ADD);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    program = gl.createProgram();
    let vs = gl.createShader(gl.VERTEX_SHADER);
    let fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(vs, _blobAvatar.default);
    gl.shaderSource(fs, _blobAvatar2.default);
    gl.compileShader(vs);

    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
      console.error("ERROR compiling vertex shader!", gl.getShaderInfoLog(vs));
      return;
    }

    gl.compileShader(fs);

    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error("ERROR compiling fragment shader!", gl.getShaderInfoLog(fs));
      return;
    }

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.validateProgram(program);
    uniformLoc.viewport_size = gl.getUniformLocation(program, "viewport_size");
    uniformLoc.sam = gl.getUniformLocation(program, "sam"), uniformLoc.time = gl.getUniformLocation(program, "time");
    uniformLoc.mouse = gl.getUniformLocation(program, "mouse");
    uniformLoc.backColor = gl.getUniformLocation(program, "backColor");
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    let frame;
    startTime = (0, _utility.getTime)();

    const loop = () => {
      frame = requestAnimationFrame(loop);
      updateValues();
      let time = ((0, _utility.getTime)() - startTime) / 1000;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.viewport(0, 0, canvasWidth, canvasHeight);
      gl.useProgram(program);
      gl.bindVertexArray(vao);
      gl.uniform2f(uniformLoc.viewport_size, canvasWidth, canvasHeight);
      gl.uniform1f(uniformLoc.time, time);
      gl.uniform4f(uniformLoc.mouse, mouse.x, mouse.y, mouse.z, mouse.w);
      gl.uniform3f(uniformLoc.backColor, backColor.r, backColor.g, backColor.b);
      gl.uniform1i(uniformLoc.sam, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      mouse.z = 0;
      mouse.w = 0;
    };

    loop();
    return () => cancelAnimationFrame(frame);
  });

  function canvas_1_binding($$value) {
    _internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
      $$invalidate(0, canvas = $$value);
    });
  }

  $$self.$capture_state = () => {
    return {};
  };

  $$self.$inject_state = $$props => {
    if ("focused" in $$props) focused = $$props.focused;
    if ("startTime" in $$props) startTime = $$props.startTime;
    if ("mouse" in $$props) mouse = $$props.mouse;
    if ("uniformLoc" in $$props) uniformLoc = $$props.uniformLoc;
    if ("texture" in $$props) texture = $$props.texture;
    if ("textColors" in $$props) textColors = $$props.textColors;
    if ("backColor" in $$props) backColor = $$props.backColor;
    if ("devicePixelRatio" in $$props) devicePixelRatio = $$props.devicePixelRatio;
    if ("vao" in $$props) vao = $$props.vao;
    if ("gl" in $$props) gl = $$props.gl;
    if ("program" in $$props) program = $$props.program;
    if ("canvas" in $$props) $$invalidate(0, canvas = $$props.canvas);
    if ("canvasWidth" in $$props) canvasWidth = $$props.canvasWidth;
    if ("canvasHeight" in $$props) canvasHeight = $$props.canvasHeight;
  };

  return [canvas, focused, startTime, mouse, uniformLoc, backColor, devicePixelRatio, vao, gl, program, canvasWidth, canvasHeight, texture, textColors, normalize, updateValues, getRelativeMousePosition, updateMousePos, canvas_1_binding];
}

class Hero extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document_1.getElementById("svelte-zuypa7-style")) add_css();
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Hero",
      options,
      id: create_fragment.name
    });
  }

}

var _default = Hero;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","../assets/avatar.jpg":"assets/avatar.jpg","./shaders/blob-avatar.vert":"components/shaders/blob-avatar.vert","./shaders/blob-avatar.frag":"components/shaders/blob-avatar.frag","svelte":"../node_modules/svelte/index.mjs","./utils/math":"components/utils/math.js","./utils/utility":"components/utils/utility.js","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/repos.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

var _utility = require("./utils/utility");

/* components/repos.svelte generated by Svelte v3.16.4 */
const file = "components/repos.svelte";

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[8] = i;
  return child_ctx;
} // (43:403) {#if repo.primaryLanguage}


function create_if_block_2(ctx) {
  let span;
  let t_value =
  /*repo*/
  ctx[6].primaryLanguage.name + "";
  let t;
  const block = {
    c: function create() {
      span = (0, _internal.element)("span");
      t = (0, _internal.text)(t_value);
      (0, _internal.attr_dev)(span, "class", "badge--item");
      (0, _internal.set_style)(span, "font-weight", "700");
      (0, _internal.set_style)(span, "color",
      /*languageColors*/
      ctx[0].get(
      /*repo*/
      ctx[6].primaryLanguage.name));
      (0, _internal.add_location)(span, file, 42, 429, 1881);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span, anchor);
      (0, _internal.append_dev)(span, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*repos*/
      2 && t_value !== (t_value =
      /*repo*/
      ctx[6].primaryLanguage.name + "")) (0, _internal.set_data_dev)(t, t_value);

      if (dirty[0] &
      /*languageColors, repos*/
      3) {
        (0, _internal.set_style)(span, "color",
        /*languageColors*/
        ctx[0].get(
        /*repo*/
        ctx[6].primaryLanguage.name));
      }
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(43:403) {#if repo.primaryLanguage}",
    ctx
  });
  return block;
} // (43:575) {#if repo.stargazers.totalCount}


function create_if_block_1(ctx) {
  let span1;
  let i;
  let span0;
  let t_value =
  /*repo*/
  ctx[6].stargazers.totalCount + "";
  let t;
  const block = {
    c: function create() {
      span1 = (0, _internal.element)("span");
      i = (0, _internal.element)("i");
      span0 = (0, _internal.element)("span");
      t = (0, _internal.text)(t_value);
      (0, _internal.attr_dev)(i, "class", "fontello icon-star");
      (0, _internal.set_style)(i, "color", "var(--systemOrange)");
      (0, _internal.add_location)(i, file, 42, 633, 2085);
      (0, _internal.set_style)(span0, "color", "var(--systemOrange)");
      (0, _internal.add_location)(span0, file, 42, 702, 2154);
      (0, _internal.attr_dev)(span1, "class", "badge--item");
      (0, _internal.add_location)(span1, file, 42, 607, 2059);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span1, anchor);
      (0, _internal.append_dev)(span1, i);
      (0, _internal.append_dev)(span1, span0);
      (0, _internal.append_dev)(span0, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*repos*/
      2 && t_value !== (t_value =
      /*repo*/
      ctx[6].stargazers.totalCount + "")) (0, _internal.set_data_dev)(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span1);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(43:575) {#if repo.stargazers.totalCount}",
    ctx
  });
  return block;
} // (43:790) {#if repo.forkCount}


function create_if_block(ctx) {
  let span1;
  let i;
  let span0;
  let t_value =
  /*repo*/
  ctx[6].forkCount + "";
  let t;
  const block = {
    c: function create() {
      span1 = (0, _internal.element)("span");
      i = (0, _internal.element)("i");
      span0 = (0, _internal.element)("span");
      t = (0, _internal.text)(t_value);
      (0, _internal.attr_dev)(i, "class", "fontello icon-fork");
      (0, _internal.set_style)(i, "color", "var(--systemPurple)");
      (0, _internal.add_location)(i, file, 42, 836, 2288);
      (0, _internal.set_style)(span0, "color", "var(--systemPurple)");
      (0, _internal.add_location)(span0, file, 42, 905, 2357);
      (0, _internal.attr_dev)(span1, "class", "badge--item");
      (0, _internal.add_location)(span1, file, 42, 810, 2262);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span1, anchor);
      (0, _internal.append_dev)(span1, i);
      (0, _internal.append_dev)(span1, span0);
      (0, _internal.append_dev)(span0, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*repos*/
      2 && t_value !== (t_value =
      /*repo*/
      ctx[6].forkCount + "")) (0, _internal.set_data_dev)(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span1);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(43:790) {#if repo.forkCount}",
    ctx
  });
  return block;
} // (43:254) {#each repos as repo, i}


function create_each_block(ctx) {
  let li;
  let a;
  let span0;
  let t_value =
  /*repo*/
  ctx[6].name + "";
  let t;
  let span1;
  let if_block0_anchor;
  let if_block1_anchor;
  let a_href_value;
  let if_block0 =
  /*repo*/
  ctx[6].primaryLanguage && create_if_block_2(ctx);
  let if_block1 =
  /*repo*/
  ctx[6].stargazers.totalCount && create_if_block_1(ctx);
  let if_block2 =
  /*repo*/
  ctx[6].forkCount && create_if_block(ctx);
  const block = {
    c: function create() {
      li = (0, _internal.element)("li");
      a = (0, _internal.element)("a");
      span0 = (0, _internal.element)("span");
      t = (0, _internal.text)(t_value);
      span1 = (0, _internal.element)("span");
      if (if_block0) if_block0.c();
      if_block0_anchor = (0, _internal.empty)();
      if (if_block1) if_block1.c();
      if_block1_anchor = (0, _internal.empty)();
      if (if_block2) if_block2.c();
      (0, _internal.attr_dev)(span0, "class", "list-item--name");
      (0, _internal.add_location)(span0, file, 42, 335, 1787);
      (0, _internal.attr_dev)(span1, "class", "badge");
      (0, _internal.add_location)(span1, file, 42, 383, 1835);
      (0, _internal.attr_dev)(a, "href", a_href_value =
      /*repo*/
      ctx[6].url);
      (0, _internal.attr_dev)(a, "target", "_blank");
      (0, _internal.attr_dev)(a, "rel", "noopener");
      (0, _internal.add_location)(a, file, 42, 282, 1734);
      (0, _internal.add_location)(li, file, 42, 278, 1730);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, li, anchor);
      (0, _internal.append_dev)(li, a);
      (0, _internal.append_dev)(a, span0);
      (0, _internal.append_dev)(span0, t);
      (0, _internal.append_dev)(a, span1);
      if (if_block0) if_block0.m(span1, null);
      (0, _internal.append_dev)(span1, if_block0_anchor);
      if (if_block1) if_block1.m(span1, null);
      (0, _internal.append_dev)(span1, if_block1_anchor);
      if (if_block2) if_block2.m(span1, null);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*repos*/
      2 && t_value !== (t_value =
      /*repo*/
      ctx[6].name + "")) (0, _internal.set_data_dev)(t, t_value);

      if (
      /*repo*/
      ctx[6].primaryLanguage) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_2(ctx);
          if_block0.c();
          if_block0.m(span1, if_block0_anchor);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*repo*/
      ctx[6].stargazers.totalCount) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_1(ctx);
          if_block1.c();
          if_block1.m(span1, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (
      /*repo*/
      ctx[6].forkCount) {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block(ctx);
          if_block2.c();
          if_block2.m(span1, null);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }

      if (dirty[0] &
      /*repos*/
      2 && a_href_value !== (a_href_value =
      /*repo*/
      ctx[6].url)) {
        (0, _internal.attr_dev)(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(li);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(43:254) {#each repos as repo, i}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let a;
  let icon;
  let span;
  let ul;
  let each_value =
  /*repos*/
  ctx[1];
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const block = {
    c: function create() {
      a = (0, _internal.element)("a");
      icon = (0, _internal.element)("icon");
      span = (0, _internal.element)("span");
      span.textContent = "Repositories";
      ul = (0, _internal.element)("ul");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      (0, _internal.attr_dev)(icon, "class", "fontello icon-github-circled");
      (0, _internal.add_location)(icon, file, 42, 171, 1623);
      (0, _internal.add_location)(span, file, 42, 221, 1673);
      (0, _internal.attr_dev)(a, "class", "has-addons");
      (0, _internal.set_style)(a, "font-size", "1.5em");
      (0, _internal.set_style)(a, "font-weight", "700");
      (0, _internal.attr_dev)(a, "href", "https://github.com/MarcusMathiassen");
      (0, _internal.attr_dev)(a, "target", "_blank");
      (0, _internal.attr_dev)(a, "rel", "noopener");
      (0, _internal.attr_dev)(a, "aria-label", "Checkout my Github");
      (0, _internal.add_location)(a, file, 42, 0, 1452);
      (0, _internal.add_location)(ul, file, 42, 250, 1702);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, a, anchor);
      (0, _internal.append_dev)(a, icon);
      (0, _internal.append_dev)(a, span);
      (0, _internal.insert_dev)(target, ul, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*repos, languageColors*/
      3) {
        each_value =
        /*repos*/
        ctx[1];
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(a);
      if (detaching) (0, _internal.detach_dev)(ul);
      (0, _internal.destroy_each)(each_blocks, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var forkBias, languageColorChoices, languageColorChoicesIter, languageColors, repos, starBias;
  repos = [];
  languageColorChoicesIter = 0;
  languageColors = new Map();
  languageColorChoices = ["var(--systemBlue)", "var(--systemGreen)", "var(--systemIndigo)", "var(--systemTeal)", "var(--systemPurple)", "var(--systemRed)", "var(--systemYellow)", "var(--systemPink)", "var(--systemOrange)", "var(--systemGray)"];
  starBias = 1.5;
  forkBias = 2;
  (0, _svelte.onMount)(async () => {
    var color, i, len, name, repo, results;
    $$invalidate(1, repos = await (0, _utility.cachedFetch)("/.netlify/functions/github"));
    repos.sort((a, b) => {
      return b.stargazers.totalCount * starBias + b.forkCount * forkBias - (a.stargazers.totalCount * starBias + a.forkCount * forkBias);
    });
    results = [];

    for (i = 0, len = repos.length; i < len; i++) {
      repo = repos[i];
      name = repo.primaryLanguage.name;
      color = languageColors.has(name) ? languageColors.get(name) : languageColorChoices[languageColorChoicesIter++ % languageColorChoices.length];
      results.push(languageColors.set(name, color));
    }

    return results;
  });

  $$self.$capture_state = () => {
    return {};
  };

  $$self.$inject_state = $$props => {
    if ("forkBias" in $$props) forkBias = $$props.forkBias;
    if ("languageColorChoices" in $$props) languageColorChoices = $$props.languageColorChoices;
    if ("languageColorChoicesIter" in $$props) languageColorChoicesIter = $$props.languageColorChoicesIter;
    if ("languageColors" in $$props) $$invalidate(0, languageColors = $$props.languageColors);
    if ("repos" in $$props) $$invalidate(1, repos = $$props.repos);
    if ("starBias" in $$props) starBias = $$props.starBias;
  };

  return [languageColors, repos];
}

class Repos extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Repos",
      options,
      id: create_fragment.name
    });
  }

}

var _default = Repos;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","./utils/utility":"components/utils/utility.js"}],"components/youtube-videos.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _svelte = require("svelte");

var _utility = require("./utils/utility");

/* components/youtube-videos.svelte generated by Svelte v3.16.4 */
const file = "components/youtube-videos.svelte";

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  child_ctx[3] = i;
  return child_ctx;
} // (22:449) {#if parseInt(video.statistics.viewCount)}


function create_if_block_2(ctx) {
  let span1;
  let i;
  let span0;
  let t_value =
  /*video*/
  ctx[1].statistics.viewCount + "";
  let t;
  const block = {
    c: function create() {
      span1 = (0, _internal.element)("span");
      i = (0, _internal.element)("i");
      span0 = (0, _internal.element)("span");
      t = (0, _internal.text)(t_value);
      (0, _internal.attr_dev)(i, "class", "fontello icon-eye");
      (0, _internal.set_style)(i, "color", "var(--systemGray)");
      (0, _internal.add_location)(i, file, 21, 517, 901);
      (0, _internal.set_style)(span0, "color", "var(--systemGray)");
      (0, _internal.add_location)(span0, file, 21, 583, 967);
      (0, _internal.attr_dev)(span1, "class", "badge--item");
      (0, _internal.add_location)(span1, file, 21, 491, 875);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span1, anchor);
      (0, _internal.append_dev)(span1, i);
      (0, _internal.append_dev)(span1, span0);
      (0, _internal.append_dev)(span0, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*videos*/
      1 && t_value !== (t_value =
      /*video*/
      ctx[1].statistics.viewCount + "")) (0, _internal.set_data_dev)(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span1);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(22:449) {#if parseInt(video.statistics.viewCount)}",
    ctx
  });
  return block;
} // (22:669) {#if parseInt(video.statistics.likeCount)}


function create_if_block_1(ctx) {
  let span1;
  let i;
  let span0;
  let t_value =
  /*video*/
  ctx[1].statistics.likeCount + "";
  let t;
  const block = {
    c: function create() {
      span1 = (0, _internal.element)("span");
      i = (0, _internal.element)("i");
      span0 = (0, _internal.element)("span");
      t = (0, _internal.text)(t_value);
      (0, _internal.attr_dev)(i, "class", "fontello icon-heart");
      (0, _internal.set_style)(i, "color", "var(--systemRed)");
      (0, _internal.add_location)(i, file, 21, 737, 1121);
      (0, _internal.set_style)(span0, "color", "var(--systemRed)");
      (0, _internal.add_location)(span0, file, 21, 804, 1188);
      (0, _internal.attr_dev)(span1, "class", "badge--item");
      (0, _internal.add_location)(span1, file, 21, 711, 1095);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span1, anchor);
      (0, _internal.append_dev)(span1, i);
      (0, _internal.append_dev)(span1, span0);
      (0, _internal.append_dev)(span0, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*videos*/
      1 && t_value !== (t_value =
      /*video*/
      ctx[1].statistics.likeCount + "")) (0, _internal.set_data_dev)(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span1);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(22:669) {#if parseInt(video.statistics.likeCount)}",
    ctx
  });
  return block;
} // (22:889) {#if parseInt(video.statistics.commentCount)}


function create_if_block(ctx) {
  let span1;
  let i;
  let span0;
  let t_value =
  /*video*/
  ctx[1].statistics.commentCount + "";
  let t;
  const block = {
    c: function create() {
      span1 = (0, _internal.element)("span");
      i = (0, _internal.element)("i");
      span0 = (0, _internal.element)("span");
      t = (0, _internal.text)(t_value);
      (0, _internal.attr_dev)(i, "class", "fontello icon-comment");
      (0, _internal.set_style)(i, "color", "var(--systemTeal)");
      (0, _internal.add_location)(i, file, 21, 960, 1344);
      (0, _internal.set_style)(span0, "color", "var(--systemTeal)");
      (0, _internal.add_location)(span0, file, 21, 1030, 1414);
      (0, _internal.attr_dev)(span1, "class", "badge--item");
      (0, _internal.add_location)(span1, file, 21, 934, 1318);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, span1, anchor);
      (0, _internal.append_dev)(span1, i);
      (0, _internal.append_dev)(span1, span0);
      (0, _internal.append_dev)(span0, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*videos*/
      1 && t_value !== (t_value =
      /*video*/
      ctx[1].statistics.commentCount + "")) (0, _internal.set_data_dev)(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(span1);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(22:889) {#if parseInt(video.statistics.commentCount)}",
    ctx
  });
  return block;
} // (22:264) {#each videos as video, i}


function create_each_block(ctx) {
  let li;
  let a;
  let span0;
  let t_value =
  /*video*/
  ctx[1].title + "";
  let t;
  let span1;
  let show_if_2 = parseInt(
  /*video*/
  ctx[1].statistics.viewCount);
  let if_block0_anchor;
  let show_if_1 = parseInt(
  /*video*/
  ctx[1].statistics.likeCount);
  let if_block1_anchor;
  let show_if = parseInt(
  /*video*/
  ctx[1].statistics.commentCount);
  let a_href_value;
  let if_block0 = show_if_2 && create_if_block_2(ctx);
  let if_block1 = show_if_1 && create_if_block_1(ctx);
  let if_block2 = show_if && create_if_block(ctx);
  const block = {
    c: function create() {
      li = (0, _internal.element)("li");
      a = (0, _internal.element)("a");
      span0 = (0, _internal.element)("span");
      t = (0, _internal.text)(t_value);
      span1 = (0, _internal.element)("span");
      if (if_block0) if_block0.c();
      if_block0_anchor = (0, _internal.empty)();
      if (if_block1) if_block1.c();
      if_block1_anchor = (0, _internal.empty)();
      if (if_block2) if_block2.c();
      (0, _internal.attr_dev)(span0, "class", "list-item--name");
      (0, _internal.add_location)(span0, file, 21, 378, 762);
      (0, _internal.attr_dev)(span1, "class", "badge");
      (0, _internal.add_location)(span1, file, 21, 429, 813);
      (0, _internal.attr_dev)(a, "href", a_href_value = "https://www.youtube.com/watch?v=" +
      /*video*/
      ctx[1].id);
      (0, _internal.attr_dev)(a, "target", "_blank");
      (0, _internal.attr_dev)(a, "rel", "noopener");
      (0, _internal.add_location)(a, file, 21, 294, 678);
      (0, _internal.add_location)(li, file, 21, 290, 674);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, li, anchor);
      (0, _internal.append_dev)(li, a);
      (0, _internal.append_dev)(a, span0);
      (0, _internal.append_dev)(span0, t);
      (0, _internal.append_dev)(a, span1);
      if (if_block0) if_block0.m(span1, null);
      (0, _internal.append_dev)(span1, if_block0_anchor);
      if (if_block1) if_block1.m(span1, null);
      (0, _internal.append_dev)(span1, if_block1_anchor);
      if (if_block2) if_block2.m(span1, null);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*videos*/
      1 && t_value !== (t_value =
      /*video*/
      ctx[1].title + "")) (0, _internal.set_data_dev)(t, t_value);
      if (dirty[0] &
      /*videos*/
      1) show_if_2 = parseInt(
      /*video*/
      ctx[1].statistics.viewCount);

      if (show_if_2) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_2(ctx);
          if_block0.c();
          if_block0.m(span1, if_block0_anchor);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (dirty[0] &
      /*videos*/
      1) show_if_1 = parseInt(
      /*video*/
      ctx[1].statistics.likeCount);

      if (show_if_1) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_1(ctx);
          if_block1.c();
          if_block1.m(span1, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (dirty[0] &
      /*videos*/
      1) show_if = parseInt(
      /*video*/
      ctx[1].statistics.commentCount);

      if (show_if) {
        if (if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2 = create_if_block(ctx);
          if_block2.c();
          if_block2.m(span1, null);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }

      if (dirty[0] &
      /*videos*/
      1 && a_href_value !== (a_href_value = "https://www.youtube.com/watch?v=" +
      /*video*/
      ctx[1].id)) {
        (0, _internal.attr_dev)(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(li);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(22:264) {#each videos as video, i}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let a;
  let icon;
  let span;
  let ul;
  let each_value =
  /*videos*/
  ctx[0];
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const block = {
    c: function create() {
      a = (0, _internal.element)("a");
      icon = (0, _internal.element)("icon");
      span = (0, _internal.element)("span");
      span.textContent = "Videos";
      ul = (0, _internal.element)("ul");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      (0, _internal.attr_dev)(icon, "class", "fontello icon-youtube-play");
      (0, _internal.add_location)(icon, file, 21, 189, 573);
      (0, _internal.add_location)(span, file, 21, 237, 621);
      (0, _internal.attr_dev)(a, "class", "has-addons");
      (0, _internal.set_style)(a, "font-size", "1.5em");
      (0, _internal.set_style)(a, "font-weight", "700");
      (0, _internal.attr_dev)(a, "href", "https://www.youtube.com/user/MathiassenMarcus/videos");
      (0, _internal.attr_dev)(a, "target", "_blank");
      (0, _internal.attr_dev)(a, "rel", "noopener");
      (0, _internal.attr_dev)(a, "aria-label", "Checkout my YouTube");
      (0, _internal.add_location)(a, file, 21, 0, 384);
      (0, _internal.add_location)(ul, file, 21, 260, 644);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, a, anchor);
      (0, _internal.append_dev)(a, icon);
      (0, _internal.append_dev)(a, span);
      (0, _internal.insert_dev)(target, ul, anchor);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*videos*/
      1) {
        each_value =
        /*videos*/
        ctx[0];
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }

        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(a);
      if (detaching) (0, _internal.detach_dev)(ul);
      (0, _internal.destroy_each)(each_blocks, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var videos;
  videos = [];
  (0, _svelte.onMount)(async () => {
    $$invalidate(0, videos = await (0, _utility.cachedFetch)("/.netlify/functions/youtube"));
    return videos.sort((a, b) => {
      return parseInt(b.statistics.viewCount) - parseInt(a.statistics.viewCount);
    });
  });

  $$self.$capture_state = () => {
    return {};
  };

  $$self.$inject_state = $$props => {
    if ("videos" in $$props) $$invalidate(0, videos = $$props.videos);
  };

  return [videos];
}

class Youtube_videos extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Youtube_videos",
      options,
      id: create_fragment.name
    });
  }

}

var _default = Youtube_videos;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","svelte":"../node_modules/svelte/index.mjs","./utils/utility":"components/utils/utility.js"}],"App.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _spices = _interopRequireDefault(require("./components/spices.svelte"));

var _hero = _interopRequireDefault(require("./components/hero.svelte"));

var _repos = _interopRequireDefault(require("./components/repos.svelte"));

var _youtubeVideos = _interopRequireDefault(require("./components/youtube-videos.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* App.svelte generated by Svelte v3.16.4 */
const file = "App.svelte";

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
} // (14:281) {#each components as component}


function create_each_block(ctx) {
  let div;
  let current;
  var switch_value =
  /*component*/
  ctx[1];

  function switch_props(ctx) {
    return {
      $$inline: true
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props(ctx));
  }

  const block = {
    c: function create() {
      div = (0, _internal.element)("div");
      if (switch_instance) (0, _internal.create_component)(switch_instance.$$.fragment);
      (0, _internal.attr_dev)(div, "class", "column is-narrow");
      (0, _internal.add_location)(div, file, 13, 312, 594);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, div, anchor);

      if (switch_instance) {
        (0, _internal.mount_component)(switch_instance, div, null);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (switch_value !== (switch_value =
      /*component*/
      ctx[1])) {
        if (switch_instance) {
          (0, _internal.group_outros)();
          const old_component = switch_instance;
          (0, _internal.transition_out)(old_component.$$.fragment, 1, 0, () => {
            (0, _internal.destroy_component)(old_component, 1);
          });
          (0, _internal.check_outros)();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          (0, _internal.create_component)(switch_instance.$$.fragment);
          (0, _internal.transition_in)(switch_instance.$$.fragment, 1);
          (0, _internal.mount_component)(switch_instance, div, null);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        0;
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) (0, _internal.transition_in)(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) (0, _internal.transition_out)(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(div);
      if (switch_instance) (0, _internal.destroy_component)(switch_instance);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(14:281) {#each components as component}",
    ctx
  });
  return block;
}

function create_fragment(ctx) {
  let section;
  let div4;
  let div1;
  let div0;
  let div3;
  let div2;
  let current;
  const hero = new _hero.default({
    $$inline: true
  });
  let each_value =
  /*components*/
  ctx[0];
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const out = i => (0, _internal.transition_out)(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  const block = {
    c: function create() {
      section = (0, _internal.element)("section");
      div4 = (0, _internal.element)("div");
      div1 = (0, _internal.element)("div");
      div0 = (0, _internal.element)("div");
      (0, _internal.create_component)(hero.$$.fragment);
      div3 = (0, _internal.element)("div");
      div2 = (0, _internal.element)("div");

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      document.title = "Marcus Mathiassen - Homepage";
      (0, _internal.attr_dev)(div0, "class", "column is-half");
      (0, _internal.add_location)(div0, file, 13, 151, 433);
      (0, _internal.attr_dev)(div1, "class", "columns is-centered");
      (0, _internal.add_location)(div1, file, 13, 118, 400);
      (0, _internal.attr_dev)(div2, "class", "columns");
      (0, _internal.set_style)(div2, "justify-content", "space-around");
      (0, _internal.add_location)(div2, file, 13, 222, 504);
      (0, _internal.attr_dev)(div3, "class", "box");
      (0, _internal.add_location)(div3, file, 13, 205, 487);
      (0, _internal.attr_dev)(div4, "class", "container");
      (0, _internal.add_location)(div4, file, 13, 95, 377);
      (0, _internal.attr_dev)(section, "class", "section");
      (0, _internal.add_location)(section, file, 13, 70, 352);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, section, anchor);
      (0, _internal.append_dev)(section, div4);
      (0, _internal.append_dev)(div4, div1);
      (0, _internal.append_dev)(div1, div0);
      (0, _internal.mount_component)(hero, div0, null);
      (0, _internal.append_dev)(div4, div3);
      (0, _internal.append_dev)(div3, div2);

      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div2, null);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*components*/
      1) {
        each_value =
        /*components*/
        ctx[0];
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            (0, _internal.transition_in)(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            (0, _internal.transition_in)(each_blocks[i], 1);
            each_blocks[i].m(div2, null);
          }
        }

        (0, _internal.group_outros)();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(hero.$$.fragment, local);

      for (let i = 0; i < each_value.length; i += 1) {
        (0, _internal.transition_in)(each_blocks[i]);
      }

      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(hero.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        (0, _internal.transition_out)(each_blocks[i]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(section);
      (0, _internal.destroy_component)(hero);
      (0, _internal.destroy_each)(each_blocks, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var components;
  components = [_repos.default, _youtubeVideos.default];

  $$self.$capture_state = () => {
    return {};
  };

  $$self.$inject_state = $$props => {
    if ("components" in $$props) $$invalidate(0, components = $$props.components);
  };

  return [components];
}

class App extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "App",
      options,
      id: create_fragment.name
    });
  }

}

var _default = App;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","./components/spices.svelte":"components/spices.svelte","./components/hero.svelte":"components/hero.svelte","./components/repos.svelte":"components/repos.svelte","./components/youtube-videos.svelte":"components/youtube-videos.svelte"}],"main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _App = _interopRequireDefault(require("./App.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.matchMedia('(prefers-color-scheme: light)').addListener(() => document.documentElement.setAttribute('theme', window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
document.documentElement.setAttribute('theme', window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
const app = new _App.default({
  target: document.body
});
var _default = app;
exports.default = _default;
},{"./App.svelte":"App.svelte"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50863" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map