import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/@vite-plugin-checker-runtime");/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map2 = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(",")) map2[key] = 1;
  return (val) => val in map2;
}
const EMPTY_OBJ = true ? Object.freeze({}) : {};
const EMPTY_ARR = true ? Object.freeze([]) : [];
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction(
  (str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  }
);
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction(
  (str) => {
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
  }
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](...arg);
  }
};
const def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const isRef$1 = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isRef$1(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i) => {
          entries[stringifySymbol(key, i) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i = "") => {
  var _a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
  );
};
/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function warn$2(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this._on = 0;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i, l;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].pause();
        }
      }
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].pause();
      }
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i, l;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].resume();
          }
        }
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].resume();
        }
      }
    }
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else if (true) {
      warn$2(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    if (++this._on === 1) {
      this.prevScope = activeEffectScope;
      activeEffectScope = this;
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      activeEffectScope = this.prevScope;
      this.prevScope = void 0;
    }
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      this.effects.length = 0;
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
let activeSub;
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
  constructor(fn) {
    this.fn = fn;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 1 | 4;
    this.next = void 0;
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope && activeEffectScope.active) {
      activeEffectScope.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      if (activeSub !== this) {
        warn$2(
          "Active effect was not restored correctly - this is likely a Vue internal bug."
        );
      }
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  /**
   * @internal
   */
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed = false) {
  sub.flags |= 8;
  if (isComputed) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e = batchedComputed;
    batchedComputed = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      e = next;
    }
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err) {
          if (!error) error = err;
        }
      }
      e = next;
    }
  }
  if (error) throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail) tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed2) {
  if (computed2.flags & 4 && !(computed2.flags & 16)) {
    return;
  }
  computed2.flags &= -17;
  if (computed2.globalVersion === globalVersion) {
    return;
  }
  computed2.globalVersion = globalVersion;
  if (!computed2.isSSR && computed2.flags & 128 && (!computed2.deps && !computed2._dirty || !isDirty(computed2))) {
    return;
  }
  computed2.flags |= 2;
  const dep = computed2.dep;
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed2;
  shouldTrack = true;
  try {
    prepareDeps(computed2);
    const value = computed2.fn(computed2._value);
    if (dep.version === 0 || hasChanged(value, computed2._value)) {
      computed2.flags |= 128;
      computed2._value = value;
      dep.version++;
    }
  } catch (err) {
    dep.version++;
    throw err;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed2);
    computed2.flags &= -3;
  }
}
function removeSub(link, soft = false) {
  const { dep, prevSub, nextSub } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if (dep.subsHead === link) {
    dep.subsHead = nextSub;
  }
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= -5;
      for (let l = dep.computed.deps; l; l = l.nextDep) {
        removeSub(l, true);
      }
    }
  }
  if (!soft && !--dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const { prevDep, nextDep } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
  const { cleanup } = e;
  e.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}
let globalVersion = 0;
class Link {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dep {
  // TODO isolatedDeclarations "__v_skip"
  constructor(computed2) {
    this.computed = computed2;
    this.version = 0;
    this.activeLink = void 0;
    this.subs = void 0;
    this.map = void 0;
    this.key = void 0;
    this.sc = 0;
    this.__v_skip = true;
    if (true) {
      this.subsHead = void 0;
    }
  }
  track(debugInfo) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    if (activeSub.onTrack) {
      activeSub.onTrack(
        extend(
          {
            effect: activeSub
          },
          debugInfo
        )
      );
    }
    return link;
  }
  trigger(debugInfo) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (true) {
        for (let head = this.subsHead; head; head = head.nextSub) {
          if (head.sub.onTrigger && !(head.sub.flags & 8)) {
            head.sub.onTrigger(
              extend(
                {
                  effect: head.sub
                },
                debugInfo
              )
            );
          }
        }
      }
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
}
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed2 = link.dep.computed;
    if (computed2 && !link.dep.subs) {
      computed2.flags |= 4 | 16;
      for (let l = computed2.deps; l; l = l.nextDep) {
        addSub(l);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail) currentTail.nextSub = link;
    }
    if (link.dep.subsHead === void 0) {
      link.dep.subsHead = link;
    }
    link.dep.subs = link;
  }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol(
  true ? "Object iterate" : ""
);
const MAP_KEY_ITERATE_KEY = Symbol(
  true ? "Map keys iterate" : ""
);
const ARRAY_ITERATE_KEY = Symbol(
  true ? "Array iterate" : ""
);
function track(target, type, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    if (true) {
      dep.track({
        target,
        type,
        key
      });
    } else {
      dep.track();
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = (dep) => {
    if (dep) {
      if (true) {
        dep.trigger({
          target,
          type,
          key,
          newValue,
          oldValue,
          oldTarget
        });
      } else {
        dep.trigger();
      }
    }
  };
  startBatch();
  if (type === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = isArray(target);
    const isArrayIndex = targetIsArray && isIntegerKey(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function reactiveReadArray(array) {
  const raw = toRaw(array);
  if (raw === array) return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
const arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, toReactive);
  },
  concat(...args) {
    return reactiveReadArray(this).concat(
      ...args.map((x) => isArray(x) ? reactiveReadArray(x) : x)
    );
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toReactive(value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply(this, "filter", fn, thisArg, (v) => v.map(toReactive), arguments);
  },
  find(fn, thisArg) {
    return apply(this, "find", fn, thisArg, toReactive, arguments);
  },
  findIndex(fn, thisArg) {
    return apply(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply(this, "findLast", fn, thisArg, toReactive, arguments);
  },
  findLastIndex(fn, thisArg) {
    return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn, thisArg) {
    return apply(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn, thisArg) {
    return apply(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", toReactive);
  }
};
function iterator(self2, method, wrapValue) {
  const arr = shallowReadArray(self2);
  const iter = arr[method]();
  if (arr !== self2 && !isShallow(self2)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (result.value) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
const arrayProto = Array.prototype;
function apply(self2, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self2);
  const needsWrap = arr !== self2 && !isShallow(self2);
  const methodFn = arr[method];
  if (methodFn !== arrayProto[method]) {
    const result2 = methodFn.apply(self2, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self2) {
    if (needsWrap) {
      wrappedFn = function(item, index) {
        return fn.call(this, toReactive(item), index, self2);
      };
    } else if (fn.length > 2) {
      wrappedFn = function(item, index) {
        return fn.call(this, item, index, self2);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self2, method, fn, args) {
  const arr = shallowReadArray(self2);
  let wrappedFn = fn;
  if (arr !== self2) {
    if (!isShallow(self2)) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, toReactive(item), index, self2);
      };
    } else if (fn.length > 3) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, item, index, self2);
      };
    }
  }
  return arr[method](wrappedFn, ...args);
}
function searchProxy(self2, method, args) {
  const arr = toRaw(self2);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && isProxy(args[0])) {
    args[0] = toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self2, method, args = []) {
  pauseTracking();
  startBatch();
  const res = toRaw(self2)[method].apply(self2, args);
  endBatch();
  resetTracking();
  return res;
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
function hasOwnProperty(key) {
  if (!isSymbol(key)) key = String(key);
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip") return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key])) {
        return fn;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(
      target,
      key,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      isRef(target) ? target : receiver
    );
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(
      target,
      key,
      value,
      isRef(target) ? target : receiver
    );
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    if (true) {
      warn$2(
        `Set operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
  deleteProperty(target, key) {
    if (true) {
      warn$2(
        `Delete operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (true) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      warn$2(
        `${capitalize(type)} operation ${key}failed: target is readonly.`,
        toRaw(this)
      );
    }
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly2, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  extend(
    instrumentations,
    readonly2 ? {
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear")
    } : {
      add(value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      },
      set(key, value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        } else if (true) {
          checkIdentityKeys(target, has, key);
        }
        const oldValue = get.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
        return this;
      },
      delete(key) {
        const target = toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        } else if (true) {
          checkIdentityKeys(target, has, key);
        }
        const oldValue = get ? get.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0, oldValue);
        }
        return result;
      },
      clear() {
        const target = toRaw(this);
        const hadItems = target.size !== 0;
        const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
        const result = target.clear();
        if (hadItems) {
          trigger(
            target,
            "clear",
            void 0,
            void 0,
            oldTarget
          );
        }
        return result;
      }
    }
  );
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly2, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has.call(target, rawKey)) {
    const type = toRawType(target);
    warn$2(
      `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    if (true) {
      warn$2(
        `value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(
          target
        )}`
      );
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function isRef(r) {
  return r ? r["__v_isRef"] === true : false;
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    if (true) {
      this.dep.track({
        target: this,
        type: "get",
        key: "value"
      });
    } else {
      this.dep.track();
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
    newValue = useDirectValue ? newValue : toRaw(newValue);
    if (hasChanged(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      if (true) {
        this.dep.trigger({
          target: this,
          type: "set",
          key: "value",
          newValue,
          oldValue
        });
      } else {
        this.dep.trigger();
      }
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class ComputedRefImpl {
  constructor(fn, setter, isSSR) {
    this.fn = fn;
    this.setter = setter;
    this._value = void 0;
    this.dep = new Dep(this);
    this.__v_isRef = true;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 16;
    this.globalVersion = globalVersion - 1;
    this.next = void 0;
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  /**
   * @internal
   */
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && // avoid infinite self recursion
    activeSub !== this) {
      batch(this, true);
      return true;
    } else if (true) ;
  }
  get value() {
    const link = true ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    } else if (true) {
      warn$2("Write operation failed: computed value is readonly");
    }
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  if (debugOptions) ;
  return cRef;
}
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups) cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  } else if (!failSilently) {
    warn$2(
      `onWatcherCleanup() was called when there was no active watcher to associate with.`
    );
  }
}
function watch$1(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, once, scheduler, augmentJob, call } = options;
  const warnInvalidSource = (s) => {
    (options.onWarn || warn$2)(
      `Invalid watch source: `,
      s,
      `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
    );
  };
  const reactiveGetter = (source2) => {
    if (deep) return source2;
    if (isShallow(source2) || deep === false || deep === 0)
      return traverse(source2, 1);
    return traverse(source2);
  };
  let effect;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return reactiveGetter(s);
      } else if (isFunction(s)) {
        return call ? call(s, 2) : s();
      } else {
        warnInvalidSource(s);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = call ? () => call(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect;
        try {
          return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect.stop();
    if (scope && scope.active) {
      remove(scope.effects, effect);
    }
  };
  if (once && cb) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      watchHandle();
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = (immediateFirstRun) => {
    if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        const currentWatcher = activeWatcher;
        activeWatcher = effect;
        try {
          const args = [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            boundCleanup
          ];
          oldValue = newValue;
          call ? call(cb, 3, args) : (
            // @ts-expect-error
            cb(...args)
          );
        } finally {
          activeWatcher = currentWatcher;
        }
      }
    } else {
      effect.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect = new ReactiveEffect(getter);
  effect.scheduler = scheduler ? () => scheduler(job, false) : job;
  boundCleanup = (fn) => onWatcherCleanup(fn, false, effect);
  cleanup = effect.onStop = () => {
    const cleanups = cleanupMap.get(effect);
    if (cleanups) {
      if (call) {
        call(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups) cleanup2();
      }
      cleanupMap.delete(effect);
    }
  };
  if (true) {
    effect.onTrack = options.onTrack;
    effect.onTrigger = options.onTrigger;
  }
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect.run();
    }
  } else if (scheduler) {
    scheduler(job.bind(null, true), true);
  } else {
    effect.run();
  }
  watchHandle.pause = effect.pause.bind(effect);
  watchHandle.resume = effect.resume.bind(effect);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
  if (depth <= 0 || !isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  depth--;
  if (isRef(value)) {
    traverse(value.value, depth, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, depth, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen);
      }
    }
  }
  return value;
}
/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
let isWarning = false;
function warn$1(msg, ...args) {
  if (isWarning) return;
  isWarning = true;
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        msg + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
  isWarning = false;
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
const ErrorTypeStrings$1 = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush",
  [15]: "component update",
  [16]: "app unmount cleanup function"
};
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  if (isArray(fn)) {
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  } else if (true) {
    warn$1(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn}`
    );
  }
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = true ? ErrorTypeStrings$1[type] : `https://vuejs.org/error-reference/#runtime-${type}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler) {
      pauseTracking();
      callWithErrorHandling(errorHandler, null, 10, [
        err,
        exposedInstance,
        errorInfo
      ]);
      resetTracking();
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
  if (true) {
    const info = ErrorTypeStrings$1[type];
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else if (throwInProd) {
    throw err;
  } else {
    console.error(err);
  }
}
const queue = [];
let flushIndex = -1;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue[queue.length - 1];
    if (!lastJob || // fast path when the job id is larger than the tail
    !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
  if (true) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= -2;
      }
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b) => getId(a) - getId(b)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    if (true) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      if (!(cb.flags & 8)) cb();
      cb.flags &= -2;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
  if (true) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  const check = true ? (job) => checkRecursiveUpdates(seen, job) : NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && !(job.flags & 8)) {
        if (check(job)) {
          continue;
        }
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(
          job,
          job.i,
          job.i ? 15 : 14
        );
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        job.flags &= -2;
      }
    }
    flushIndex = -1;
    queue.length = 0;
    flushPostFlushCbs(seen);
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  const count = seen.get(fn) || 0;
  if (count > RECURSION_LIMIT) {
    const instance = fn.i;
    const componentName = instance && getComponentName(instance.type);
    handleError(
      `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    );
    return true;
  }
  seen.set(fn, count + 1);
  return false;
}
let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */ new Map();
if (true) {
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
const map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
  const id = instance.type.__hmrId;
  let record = map.get(id);
  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }
  record.instances.add(instance);
}
function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record) return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (let i = 0; i < instances.length; i++) {
    const instance = instances[i];
    const oldComp = normalizeClassComponent(instance.type);
    let dirtyInstances = hmrDirtyComponents.get(oldComp);
    if (!dirtyInstances) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.set(oldComp, dirtyInstances = /* @__PURE__ */ new Set());
    }
    dirtyInstances.add(instance);
    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      dirtyInstances.add(instance);
      instance.ceReload(newComp.styles);
      dirtyInstances.delete(instance);
    } else if (instance.parent) {
      queueJob(() => {
        isHmrUpdating = true;
        instance.parent.update();
        isHmrUpdating = false;
        dirtyInstances.delete(instance);
      });
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn(
        "[HMR] Root or manually mounted instance modified. Full reload required."
      );
    }
    if (instance.root.ce && instance !== instance.root) {
      instance.root.ce._removeChildStyle(oldComp);
    }
  }
  queuePostFlushCb(() => {
    hmrDirtyComponents.clear();
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(
        `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
      );
    }
  };
}
let devtools$1;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
  if (devtools$1) {
    devtools$1.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook$1(hook, target) {
  var _a, _b;
  devtools$1 = hook;
  if (devtools$1) {
    devtools$1.enabled = true;
    buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    // eslint-disable-next-line no-restricted-syntax
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook$1(newHook, target);
    });
    setTimeout(() => {
      if (!devtools$1) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version2) {
  emit$1("app:init", app, version2, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
function devtoolsUnmountApp(app) {
  emit$1("app:unmount", app);
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:added"
  /* COMPONENT_ADDED */
);
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:updated"
  /* COMPONENT_UPDATED */
);
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:removed"
  /* COMPONENT_REMOVED */
);
const devtoolsComponentRemoved = (component) => {
  if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
  !devtools$1.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(
      hook,
      component.appContext.app,
      component.uid,
      component.parent ? component.parent.uid : void 0,
      component
    );
  };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:start"
  /* PERFORMANCE_START */
);
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:end"
  /* PERFORMANCE_END */
);
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1(
    "component:emit",
    component.appContext.app,
    component,
    event,
    params
  );
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx) return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    if (true) {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const TeleportEndKey = Symbol("_vte");
const isTeleport = (type) => type.__isTeleport;
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks;
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction(options) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}
const knownTemplateRefs = /* @__PURE__ */ new WeakSet();
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref3 } = rawRef;
  if (!owner) {
    warn$1(
      `Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`
    );
    return;
  }
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = toRaw(setupState);
  const canSetSetupRef = setupState === EMPTY_OBJ ? () => false : (key) => {
    if (true) {
      if (hasOwn(rawSetupState, key) && !isRef(rawSetupState[key])) {
        warn$1(
          `Template ref "${key}" used on a non-ref value. It will not work in the production build.`
        );
      }
      if (knownTemplateRefs.has(rawSetupState[key])) {
        return false;
      }
    }
    return hasOwn(rawSetupState, key);
  };
  if (oldRef != null && oldRef !== ref3) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref3)) {
    callWithErrorHandling(ref3, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref3);
    const _isRef = isRef(ref3);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref3) ? setupState[ref3] : refs[ref3] : ref3.value;
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref3] = [refValue];
                if (canSetSetupRef(ref3)) {
                  setupState[ref3] = refs[ref3];
                }
              } else {
                ref3.value = [refValue];
                if (rawRef.k) refs[rawRef.k] = ref3.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref3] = value;
          if (canSetSetupRef(ref3)) {
            setupState[ref3] = value;
          }
        } else if (_isRef) {
          ref3.value = value;
          if (rawRef.k) refs[rawRef.k] = value;
        } else if (true) {
          warn$1("Invalid template ref type:", ref3, `(${typeof ref3})`);
        }
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (true) {
      warn$1("Invalid template ref type:", ref3, `(${typeof ref3})`);
    }
  }
}
getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else if (true) {
    const apiName = toHandlerKey(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
    warn$1(
      `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook(
  "bu"
);
const onUpdated = createHook("u");
const onBeforeUnmount = createHook(
  "bum"
);
const onUnmounted = createHook("um");
const onServerPrefetch = createHook(
  "sp"
);
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache;
  const sourceIsArray = isArray(source);
  if (sourceIsArray || isString(source)) {
    const sourceIsReactiveArray = sourceIsArray && isReactive(source);
    let needsWrap = false;
    let isReadonlySource = false;
    if (sourceIsReactiveArray) {
      needsWrap = !isShallow(source);
      isReadonlySource = isReadonly(source);
      source = shallowReadArray(source);
    }
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(
        needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i])) : toReactive(source[i]) : source[i],
        i,
        void 0,
        cached
      );
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source)) {
      warn$1(`The v-for range expect an integer value but got ${source}.`);
    }
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached)
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached);
      }
    }
  } else {
    ret = [];
  }
  return ret;
}
const getPublicInstance = (i) => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getComponentPublicInstance(i);
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => true ? shallowReadonly(i.props) : i.props,
    $attrs: (i) => true ? shallowReadonly(i.attrs) : i.attrs,
    $slots: (i) => true ? shallowReadonly(i.slots) : i.slots,
    $refs: (i) => true ? shallowReadonly(i.refs) : i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => {
      queueJob(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => instanceWatch.bind(i)
  })
);
const isReservedPrefix = (key) => key === "_" || key === "$";
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key === "__isVue") {
      return true;
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance.attrs, "get", "");
        markAttrsAccessed();
      } else if (key === "$slots") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn$1(
          `Property ${JSON.stringify(
            key
          )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
        );
      } else if (instance === currentRenderingInstance) {
        warn$1(
          `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
        );
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
      warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      warn$1(
        `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
      );
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
if (true) {
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(
      `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
    );
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const {
    ctx,
    propsOptions: [propsOptions]
  } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1(
          `setup() return property ${JSON.stringify(
            key
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
function normalizePropsOrEmits(props) {
  return isArray(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render2,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = true ? createDuplicateChecker() : null;
  if (true) {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        if (true) {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {
          ctx[key] = methodHandler.bind(publicThis);
        }
        if (true) {
          checkDuplicateProperties("Methods", key);
        }
      } else if (true) {
        warn$1(
          `Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
        );
      }
    }
  }
  if (dataOptions) {
    if (!isFunction(dataOptions)) {
      warn$1(
        `The data option must be a function. Plain object usage is no longer supported.`
      );
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise(data)) {
      warn$1(
        `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
      );
    }
    if (!isObject(data)) {
      warn$1(`data() should return an object.`);
    } else {
      instance.data = reactive(data);
      if (true) {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get === NOOP) {
        warn$1(`Computed property "${key}" has no getter.`);
      }
      const set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : true ? () => {
        warn$1(
          `Write operation failed: computed property "${key}" is readonly.`
        );
      } : NOOP;
      const c = computed({
        get,
        set
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      if (true) {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val,
          enumerable: true
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render2 && instance.render === NOOP) {
    instance.render = render2;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject$1(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject$1(opt.from || key);
      }
    } else {
      injected = inject$1(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
    if (true) {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      {
        watch(getter, handler);
      }
    } else if (true) {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction(raw)) {
    {
      watch(getter, raw.bind(publicThis));
    }
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      } else if (true) {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else if (true) {
    warn$1(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
      warn$1(
        `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
      );
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction(to) ? to.call(this, this) : to,
      isFunction(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray(to) && isArray(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render2, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      warn$1(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const pluginCleanupFns = [];
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        if (true) {
          warn$1(
            `app.config cannot be replaced. Modify individual options instead.`
          );
        }
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) {
          warn$1(`Plugin has already been applied to target app.`);
        } else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else if (true) {
          warn$1(
            `A plugin must either be a function or an object with an "install" function.`
          );
        }
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else if (true) {
            warn$1(
              "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
            );
          }
        }
        return app;
      },
      component(name, component) {
        if (true) {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn$1(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (true) {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn$1(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          if (rootContainer.__vue_app__) {
            warn$1(
              `There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`
            );
          }
          const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          if (true) {
            context.reload = () => {
              const cloned = cloneVNode(vnode);
              cloned.el = null;
              render2(cloned, rootContainer, namespace);
            };
          }
          {
            render2(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          if (true) {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }
          return getComponentPublicInstance(vnode.component);
        } else if (true) {
          warn$1(
            `App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``
          );
        }
      },
      onUnmount(cleanupFn) {
        if (typeof cleanupFn !== "function") {
          warn$1(
            `Expected function as first argument to app.onUnmount(), but got ${typeof cleanupFn}`
          );
        }
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted) {
          callWithAsyncErrorHandling(
            pluginCleanupFns,
            app._instance,
            16
          );
          render2(null, app._container);
          if (true) {
            app._instance = null;
            devtoolsUnmountApp(app);
          }
          delete app._container.__vue_app__;
        } else if (true) {
          warn$1(`Cannot unmount an app that is not mounted.`);
        }
      },
      provide(key, value) {
        if (key in context.provides) {
          if (hasOwn(context.provides, key)) {
            warn$1(
              `App already provides property with key "${String(key)}". It will be overwritten with the new value.`
            );
          } else {
            warn$1(
              `App already provides property with key "${String(key)}" inherited from its parent element. It will be overwritten with the new value.`
            );
          }
        }
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function provide(key, value) {
  if (!currentInstance) {
    if (true) {
      warn$1(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject$1(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = getCurrentInstance();
  if (instance || currentApp) {
    let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else if (true) {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else if (true) {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
const internalObjectProto = {};
const createInternalObject = () => Object.create(internalObjectProto);
const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId) return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance.attrs, "set", "");
  }
  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key, value);
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
const mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys) needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString(raw[i])) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject(raw)) {
      warn$1(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if (isArray(propType)) {
          for (let index = 0; index < propType.length; ++index) {
            const type = propType[index];
            const typeName = isFunction(type) && type.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = isFunction(propType) && propType.name === "Boolean";
        }
        prop[
          0
          /* shouldCast */
        ] = shouldCast;
        prop[
          1
          /* shouldCastTrue */
        ] = shouldCastTrue;
        if (shouldCast || hasOwn(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  } else if (true) {
    warn$1(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  if (ctor === null) {
    return "null";
  }
  if (typeof ctor === "function") {
    return ctor.name || "";
  } else if (typeof ctor === "object") {
    const name = ctor.constructor && ctor.constructor.name;
    return name || "";
  }
  return "";
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options = instance.propsOptions[0];
  const camelizePropsKey = Object.keys(rawProps).map((key) => camelize(key));
  for (const key in options) {
    let opt = options[key];
    if (opt == null) continue;
    validateProp(
      key,
      resolvedValues[key],
      opt,
      true ? shallowReadonly(resolvedValues) : resolvedValues,
      !camelizePropsKey.includes(key)
    );
  }
}
function validateProp(name, value, prop, props, isAbsent) {
  const { type, required, validator, skipCheck } = prop;
  if (required && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !required) {
    return;
  }
  if (type != null && type !== true && !skipCheck) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value, props)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ makeMap(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (expectedType === "null") {
    valid = value === null;
  } else if (isSimpleType(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  if (expectedTypes.length === 0) {
    return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
  }
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
const isInternalKey = (key) => key === "_" || key === "__" || key === "_ctx" || key === "$stable";
const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (currentInstance && !(ctx === null && currentRenderingInstance) && !(ctx && ctx.root !== currentInstance.root)) {
      warn$1(
        `Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
      );
    }
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key)) continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      if (true) {
        warn$1(
          `Non-function value encountered for slot "${key}". Prefer function slots for better performance.`
        );
      }
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  if (!isKeepAlive(instance.vnode) && true) {
    warn$1(
      `Non-function value encountered for default slot. Prefer function slots for better performance.`
    );
  }
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const assignSlots = (slots, children, optimized) => {
  for (const key in children) {
    if (optimized || !isInternalKey(key)) {
      slots[key] = children[key];
    }
  }
};
const initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const cacheIndexes = children.__;
    if (cacheIndexes) def(slots, "__", cacheIndexes, true);
    const type = children._;
    if (type) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        def(slots, "_", type, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (isHmrUpdating) {
        assignSlots(slots, children, optimized);
        trigger(instance, "set", "$slots");
      } else if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
let supported;
let perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark(`vue-${type}-${instance.uid}`);
  }
  if (true) {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf.mark(endTag);
    perf.measure(
      `<${formatComponentName(instance, instance.type)}> ${type}`,
      startTag,
      endTag
    );
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  if (true) {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}
function initFeatureFlags() {
  const needWarn = [];
  if (needWarn.length) {
    const multi = needWarn.length > 1;
    console.warn(
      `Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  {
    initFeatureFlags();
  }
  const target = getGlobalThis();
  target.__VUE__ = true;
  if (true) {
    setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref3, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        } else if (true) {
          patchStaticNode(n1, n2, container, namespace);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (true) {
          warn$1("Invalid VNode type:", type, `(${typeof type})`);
        }
    }
    if (ref3 != null && parentComponent) {
      setRef(ref3, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    } else if (ref3 == null && n1 && n1.ref != null) {
      setRef(n1.ref, null, parentSuspense, n1, true);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace,
      n2.el,
      n2.anchor
    );
  };
  const patchStaticNode = (n1, n2, container, namespace) => {
    if (n2.children !== n1.children) {
      const anchor = hostNextSibling(n1.anchor);
      removeStaticNode(n1);
      [n2.el, n2.anchor] = hostInsertStaticContent(
        n2.children,
        container,
        anchor,
        namespace
      );
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      patchElement(
        n1,
        n2,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], namespace, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (true) {
      def(el, "__vnode", vnode, true);
      def(el, "__vueParentComponent", parentComponent, true);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    if (true) {
      el.__vnode = n2;
    }
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (isHmrUpdating) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds
      );
      if (true) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, namespace, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace,
              parentComponent
            );
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key)) continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, namespace, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (
      // #5523 dev root fragment may inherit directives
      isHmrUpdating || patchFlag & 2048
    ) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        if (true) {
          traverseStaticChildren(n1, n2);
        } else if (
          // #2080 if the stable fragment has a key, it's a <template v-for> that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it's a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null || parentComponent && n2 === parentComponent.subTree
        ) {
          traverseStaticChildren(
            n1,
            n2,
            true
            /* shallow */
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (instance.type.__hmrId) {
      registerHMR(instance);
    }
    if (true) {
      pushWarningContext(initialVNode);
      startMeasure(instance, `mount`);
    }
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      if (true) {
        startMeasure(instance, `init`);
      }
      setupComponent(instance, false, optimized);
      if (true) {
        endMeasure(instance, `init`);
      }
    }
    if (isHmrUpdating) initialVNode.el = null;
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
        initialVNode.placeholder = placeholder.el;
      }
    } else {
      setupRenderEffect(
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace,
        optimized
      );
    }
    if (true) {
      popWarningContext();
      endMeasure(instance, `mount`);
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        if (true) {
          pushWarningContext(n2);
        }
        updateComponentPreRender(instance, n2, optimized);
        if (true) {
          popWarningContext();
        }
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent, root, type } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        {
          if (root.ce && // @ts-expect-error _def is private
          root.ce._def.shadowRoot !== false) {
            root.ce._injectChildStyle(type);
          }
          if (true) {
            startMeasure(instance, `render`);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          if (true) {
            endMeasure(instance, `render`);
          }
          if (true) {
            startMeasure(instance, `patch`);
          }
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            namespace
          );
          if (true) {
            endMeasure(instance, `patch`);
          }
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        if (true) {
          devtoolsComponentAdded(instance);
        }
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        if (true) {
          pushWarningContext(next || instance.vnode);
        }
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        if (true) {
          startMeasure(instance, `render`);
        }
        const nextTree = renderComponentRoot(instance);
        if (true) {
          endMeasure(instance, `render`);
        }
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        if (true) {
          startMeasure(instance, `patch`);
        }
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        if (true) {
          endMeasure(instance, `patch`);
        }
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
        if (true) {
          devtoolsComponentUpdated(instance);
        }
        if (true) {
          popWarningContext();
        }
      }
    };
    instance.scope.on();
    const effect2 = instance.effect = new ReactiveEffect(componentUpdateFn);
    instance.scope.off();
    const update = instance.update = effect2.run.bind(effect2);
    const job = instance.job = effect2.runIfDirty.bind(effect2);
    job.i = instance;
    job.id = instance.uid;
    effect2.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    if (true) {
      effect2.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
      effect2.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
    }
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          if (keyToNewIndexMap.has(nextChild.key)) {
            warn$1(
              `Duplicate keys found during update:`,
              JSON.stringify(nextChild.key),
              `Make sure keys are unique.`
            );
          }
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchorVNode = c2[nextIndex + 1];
        const anchor = nextIndex + 1 < l2 ? (
          // #13559, fallback to el placeholder for unresolved async component
          anchorVNode.el || anchorVNode.placeholder
        ) : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => {
          if (vnode.ctx.isUnmounted) {
            hostRemove(el);
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const performLeave = () => {
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref3,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex
    } = vnode;
    if (patchFlag === -2) {
      optimized = false;
    }
    if (ref3 != null) {
      pauseTracking();
      setRef(ref3, null, parentSuspense, vnode, true);
      resetTracking();
    }
    if (cacheIndex != null) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
        vnode.children.forEach((child) => {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove2(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    if (instance.type.__hmrId) {
      unregisterHMR(instance);
    }
    const {
      bum,
      scope,
      job,
      subTree,
      um,
      m,
      a,
      parent,
      slots: { __: slotCacheKeys }
    } = instance;
    invalidateMount(m);
    invalidateMount(a);
    if (bum) {
      invokeArrayFns(bum);
    }
    if (parent && isArray(slotCacheKeys)) {
      slotCacheKeys.forEach((v) => {
        parent.renderCache[v] = void 0;
      });
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
    if (true) {
      devtoolsComponentRemoved(instance);
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  let isFlushing = false;
  const render2 = (vnode, container, namespace) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace
      );
    }
    container._vnode = vnode;
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs();
      flushPostFlushCbs();
      isFlushing = false;
    }
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  return {
    render: render2,
    hydrate,
    createApp: createAppAPI(render2)
  };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect: effect2, job }, allowed) {
  if (allowed) {
    effect2.flags |= 32;
    job.flags |= 4;
  } else {
    effect2.flags &= -33;
    job.flags &= -5;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
      if (true) {
        c2.el && (c2.el.__vnode = c2);
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i = 0; i < hooks.length; i++)
      hooks[i].flags |= 8;
  }
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject$1(ssrContextKey);
    if (!ctx) {
      warn$1(
        `Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`
      );
    }
    return ctx;
  }
};
function watch(source, cb, options) {
  if (!isFunction(cb)) {
    warn$1(
      `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
    );
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, flush, once } = options;
  if (!cb) {
    if (immediate !== void 0) {
      warn$1(
        `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (deep !== void 0) {
      warn$1(
        `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (once !== void 0) {
      warn$1(
        `watch() "once" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
  }
  const baseWatchOptions = extend({}, options);
  if (true) baseWatchOptions.onWarn = warn$1;
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {
      };
      watchStopHandle.stop = NOOP;
      watchStopHandle.resume = NOOP;
      watchStopHandle.pause = NOOP;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = (job) => {
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = (job) => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = watch$1(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
const getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted) return;
  const props = instance.vnode.props || EMPTY_OBJ;
  if (true) {
    const {
      emitsOptions,
      propsOptions: [propsOptions]
    } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(camelize(event)) in propsOptions)) {
          warn$1(
            `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(camelize(event))}" prop.`
          );
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1(
              `Invalid event arguments: event validation failed for event "${event}".`
            );
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (modifiers.number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  if (true) {
    devtoolsComponentEmit(instance, event, args);
  }
  if (true) {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn$1(
        `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
          instance,
          instance.type
        )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(
          event
        )}" instead of "${event}".`
      );
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render: render2,
    renderCache,
    props,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  if (true) {
    accessedAttrs = false;
  }
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = setupState.__isScriptSetup ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(
            `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render2.call(
          thisProxy,
          proxyToUse,
          renderCache,
          true ? shallowReadonly(props) : props,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render22 = Component;
      if (attrs === props) {
        markAttrsAccessed();
      }
      result = normalizeVNode(
        render22.length > 1 ? render22(
          true ? shallowReadonly(props) : props,
          true ? {
            get attrs() {
              markAttrsAccessed();
              return shallowReadonly(attrs);
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render22(
          true ? shallowReadonly(props) : props,
          null
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  let setRoot = void 0;
  if (result.patchFlag > 0 && result.patchFlag & 2048) {
    [root, setRoot] = getChildRoot(result);
  }
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs, false, true);
      } else if (!accessedAttrs && root.type !== Comment) {
        const allAttrs = Object.keys(attrs);
        const eventAttrs = [];
        const extraAttrs = [];
        for (let i = 0, l = allAttrs.length; i < l; i++) {
          const key = allAttrs[i];
          if (isOn(key)) {
            if (!isModelListener(key)) {
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }
        if (extraAttrs.length) {
          warn$1(
            `Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
          );
        }
        if (eventAttrs.length) {
          warn$1(
            `Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
          );
        }
      }
    }
  }
  if (vnode.dirs) {
    if (!isElementRoot(root)) {
      warn$1(
        `Runtime directive used on component with non-element root node. The directives will not function as intended.`
      );
    }
    root = cloneVNode(root, null, false, true);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    if (!isElementRoot(root)) {
      warn$1(
        `Component inside <Transition> renders non-element root node that cannot be animated.`
      );
    }
    setTransitionHooks(root, vnode.transition);
  }
  if (setRoot) {
    setRoot(root);
  } else {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getChildRoot = (vnode) => {
  const rawChildren = vnode.children;
  const dynamicChildren = vnode.dynamicChildren;
  const childRoot = filterSingleRoot(rawChildren, false);
  if (!childRoot) {
    return [vnode, void 0];
  } else if (childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) {
    return getChildRoot(childRoot);
  }
  const index = rawChildren.indexOf(childRoot);
  const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  const setRoot = (updatedRoot) => {
    rawChildren[index] = updatedRoot;
    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
      }
    }
  };
  return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children, recurse = true) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
          if (recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) {
            return filterSingleRoot(singleRoot.children);
          }
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
const isElementRoot = (vnode) => {
  return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if ((prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  }
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent) {
    const root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if (n2.shapeFlag & 6 && n1.component) {
    const dirtyInstances = hmrDirtyComponents.get(n2.type);
    if (dirtyInstances && dirtyInstances.has(n1.component)) {
      n1.shapeFlag &= -257;
      n2.shapeFlag &= -513;
      return false;
    }
  }
  return n1.type === n2.type && n1.key === n2.key;
}
const createVNodeWithArgsTransform = (...args) => {
  return _createVNode(
    ...args
  );
};
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref: ref3,
  ref_key,
  ref_for
}) => {
  if (typeof ref3 === "number") {
    ref3 = "" + ref3;
  }
  return ref3 != null ? isString(ref3) || isRef(ref3) || isFunction(ref3) ? { i: currentRenderingInstance, r: ref3, k: ref_key, f: !!ref_for } : ref3 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (vnode.key !== vnode.key) {
    warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = true ? createVNodeWithArgsTransform : _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (!type) {
      warn$1(`Invalid vnode type when creating vnode: ${type}.`);
    }
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  if (shapeFlag & 4 && isProxy(type)) {
    type = toRaw(type);
    warn$1(
      `Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`,
      `
Component that was made reactive: `,
      type
    );
  }
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props) return null;
  return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const { props, ref: ref3, patchFlag, children, transition } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref3 ? isArray(ref3) ? ref3.concat(normalizeRef(extraProps)) : [ref3, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref3,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    placeholder: vnode.placeholder,
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(
      cloned,
      transition.clone(cloned)
    );
  }
  return cloned;
}
function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if (isArray(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    ids: parent ? parent.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  if (true) {
    instance.ctx = createDevRenderContext(instance);
  } else {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key])) setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1) setters.forEach((set) => set(v));
      else setters[0](v);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v) => currentInstance = v
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v) => isInSSRComponentSetup = v
  );
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, { isNativeTag }) {
  if (isBuiltInTag(name) || isNativeTag(name)) {
    warn$1(
      "Do not use built-in or reserved HTML elements as component id: " + name
    );
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized || isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  var _a;
  const Component = instance.type;
  if (true) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }
    if (Component.components) {
      const names = Object.keys(Component.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component.directives) {
      const names = Object.keys(Component.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component.compilerOptions && isRuntimeOnly()) {
      warn$1(
        `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
      );
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  if (true) {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component;
  if (setup) {
    pauseTracking();
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
        true ? shallowReadonly(instance.props) : instance.props,
        setupContext
      ]
    );
    const isAsyncSetup = isPromise(setupResult);
    resetTracking();
    reset();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
        if (!instance.suspense) {
          const name = (_a = Component.name) != null ? _a : "Anonymous";
          warn$1(
            `Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
          );
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    if (isVNode(setupResult)) {
      warn$1(
        `setup() should not return VNodes directly - return a render function instead.`
      );
    }
    if (true) {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    if (true) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn$1(
      `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
    );
  }
  finishComponentSetup(instance, isSSR);
}
const isRuntimeOnly = () => true;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    instance.render = Component.render || NOOP;
  }
  {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
  if (!Component.render && instance.render === NOOP && !isSSR) {
    if (Component.template) {
      warn$1(
        `Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
      );
    } else {
      warn$1(`Component is missing template or render function: `, Component);
    }
  }
}
const attrsProxyHandlers = true ? {
  get(target, key) {
    markAttrsAccessed();
    track(target, "get", "");
    return target[key];
  },
  set() {
    warn$1(`setupContext.attrs is readonly.`);
    return false;
  },
  deleteProperty() {
    warn$1(`setupContext.attrs is readonly.`);
    return false;
  }
} : {
  get(target, key) {
    track(target, "get", "");
    return target[key];
  }
};
function getSlotsProxy(instance) {
  return new Proxy(instance.slots, {
    get(target, key) {
      track(instance, "get", "$slots");
      return target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    if (true) {
      if (instance.exposed) {
        warn$1(`expose() should be called only once per setup().`);
      }
      if (exposed != null) {
        let exposedType = typeof exposed;
        if (exposedType === "object") {
          if (isArray(exposed)) {
            exposedType = "array";
          } else if (isRef(exposed)) {
            exposedType = "ref";
          }
        }
        if (exposedType !== "object") {
          warn$1(
            `expose() should be passed a plain object, received ${exposedType}.`
          );
        }
      }
    }
    instance.exposed = exposed || {};
  };
  if (true) {
    let attrsProxy;
    let slotsProxy;
    return Object.freeze({
      get attrs() {
        return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
      },
      get slots() {
        return slotsProxy || (slotsProxy = getSlotsProxy(instance));
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  } else {
    return {
      attrs: new Proxy(instance.attrs, attrsProxyHandlers),
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  const c = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  if (true) {
    const i = getCurrentInstance();
    if (i && i.appContext.config.warnRecursiveComputed) {
      c._warnRecursive = true;
    }
  }
  return c;
};
function initCustomFormatter() {
  if (typeof window === "undefined") {
    return;
  }
  const vueStyle = { style: "color:#3ba776" };
  const numberStyle = { style: "color:#1677ff" };
  const stringStyle = { style: "color:#f5222d" };
  const keywordStyle = { style: "color:#eb2f96" };
  const formatter = {
    __vue_custom_formatter: true,
    header(obj) {
      if (!isObject(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if (isRef(obj)) {
        pauseTracking();
        const value = obj.value;
        resetTracking();
        return [
          "div",
          {},
          ["span", vueStyle, genRefFlag(obj)],
          "<",
          formatValue(value),
          `>`
        ];
      } else if (isReactive(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
          "<",
          formatValue(obj),
          `>${isReadonly(obj) ? ` (readonly)` : ``}`
        ];
      } else if (isReadonly(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
          "<",
          formatValue(obj),
          ">"
        ];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return [
          "div",
          {},
          ...formatInstance(obj.$)
        ];
      }
    }
  };
  function formatInstance(instance) {
    const blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", toRaw(instance.props)));
    }
    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", toRaw(instance.data)));
    }
    const computed2 = extractKeys(instance, "computed");
    if (computed2) {
      blocks.push(createInstanceBlock("computed", computed2));
    }
    const injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push([
      "div",
      {},
      [
        "span",
        {
          style: keywordStyle.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: instance }]
    ]);
    return blocks;
  }
  function createInstanceBlock(type, target) {
    target = extend({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        type
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(target).map((key) => {
          return [
            "div",
            {},
            ["span", keywordStyle, key + ": "],
            formatValue(target[key], false)
          ];
        })
      ]
    ];
  }
  function formatValue(v, asRaw = true) {
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if (isObject(v)) {
      return ["object", { object: asRaw ? toRaw(v) : v }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type) {
    const Comp = instance.type;
    if (isFunction(Comp)) {
      return;
    }
    const extracted = {};
    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type) {
    const opts = Comp[type];
    if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
      return true;
    }
  }
  function genRefFlag(v) {
    if (isShallow(v)) {
      return `ShallowRef`;
    }
    if (v.effect) {
      return `ComputedRef`;
    }
    return `Ref`;
  }
  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}
const version = "3.5.18";
const warn = true ? warn$1 : NOOP;
true ? devtools$1 : void 0;
true ? setDevtoolsHook$1 : NOOP;
/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let policy = void 0;
const tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) {
  try {
    policy = /* @__PURE__ */ tt.createPolicy("vue", {
      createHTML: (val) => val
    });
  } catch (e) {
    warn(`Error creating trusted types policy: ${e}`);
  }
}
const unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(
        namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
      );
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
const vtcKey = Symbol("_vtc");
function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
if (true) ;
const CSS_VAR_TEXT = Symbol(true ? "CSS_VAR_TEXT" : "");
const displayRE = /(^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
    if (el[vShowHidden]) {
      style.display = "none";
    }
  }
}
const semicolonRE = /[^\\];\s*$/;
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null) val = "";
    if (true) {
      if (semicolonRE.test(val)) {
        warn(
          `Unexpected semicolon at the end of '${name}' style value: '${val}'`
        );
      }
    }
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean2 = isSpecialBooleanAttr(key)) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(
        key,
        isBoolean2 ? "" : isSymbol(value) ? String(value) : value
      );
    }
  }
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
  if (key === "innerHTML" || key === "textContent") {
    if (value != null) {
      el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      el.type === "checkbox" ? "on" : ""
    ) : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
    if (!needRemove) {
      warn(
        `Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`,
        e
      );
    }
  }
  needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = true ? sanitizeEventValue(nextValue, rawName) : nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(
        true ? sanitizeEventValue(nextValue, rawName) : nextValue,
        instance
      );
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function sanitizeEventValue(value, propName) {
  if (isFunction(value) || isArray(value)) {
    return value;
  }
  warn(
    `Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`
  );
  return NOOP;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map(
      (fn) => (e2) => !e2._stopped && fn && fn(e2)
    );
  } else {
    return value;
  }
}
const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue);
    if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
      patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    }
  } else if (
    // #11081 force set props for possible async custom element
    el._isVueCE && (/[A-Z]/.test(key) || !isString(nextValue))
  ) {
    patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && isString(value)) {
    return false;
  }
  return key in el;
}
const REMOVAL = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineCustomElement(options, extraOptions, _createApp) {
  const Comp = /* @__PURE__ */ defineComponent(options, extraOptions);
  if (isPlainObject(Comp)) extend(Comp, extraOptions);
  class VueCustomElement extends VueElement {
    constructor(initialProps) {
      super(Comp, initialProps, _createApp);
    }
  }
  VueCustomElement.def = Comp;
  return VueCustomElement;
}
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class VueElement extends BaseClass {
  constructor(_def, _props = {}, _createApp = createApp) {
    super();
    this._def = _def;
    this._props = _props;
    this._createApp = _createApp;
    this._isVueCE = true;
    this._instance = null;
    this._app = null;
    this._nonce = this._def.nonce;
    this._connected = false;
    this._resolved = false;
    this._numberProps = null;
    this._styleChildren = /* @__PURE__ */ new WeakSet();
    this._ob = null;
    if (this.shadowRoot && _createApp !== createApp) {
      this._root = this.shadowRoot;
    } else {
      if (this.shadowRoot) {
        warn(
          `Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`
        );
      }
      if (_def.shadowRoot !== false) {
        this.attachShadow({ mode: "open" });
        this._root = this.shadowRoot;
      } else {
        this._root = this;
      }
    }
  }
  connectedCallback() {
    if (!this.isConnected) return;
    if (!this.shadowRoot && !this._resolved) {
      this._parseSlots();
    }
    this._connected = true;
    let parent = this;
    while (parent = parent && (parent.parentNode || parent.host)) {
      if (parent instanceof VueElement) {
        this._parent = parent;
        break;
      }
    }
    if (!this._instance) {
      if (this._resolved) {
        this._mount(this._def);
      } else {
        if (parent && parent._pendingResolve) {
          this._pendingResolve = parent._pendingResolve.then(() => {
            this._pendingResolve = void 0;
            this._resolveDef();
          });
        } else {
          this._resolveDef();
        }
      }
    }
  }
  _setParent(parent = this._parent) {
    if (parent) {
      this._instance.parent = parent._instance;
      this._inheritParentContext(parent);
    }
  }
  _inheritParentContext(parent = this._parent) {
    if (parent && this._app) {
      Object.setPrototypeOf(
        this._app._context.provides,
        parent._instance.provides
      );
    }
  }
  disconnectedCallback() {
    this._connected = false;
    nextTick(() => {
      if (!this._connected) {
        if (this._ob) {
          this._ob.disconnect();
          this._ob = null;
        }
        this._app && this._app.unmount();
        if (this._instance) this._instance.ce = void 0;
        this._app = this._instance = null;
      }
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve) {
      return;
    }
    for (let i = 0; i < this.attributes.length; i++) {
      this._setAttr(this.attributes[i].name);
    }
    this._ob = new MutationObserver((mutations) => {
      for (const m of mutations) {
        this._setAttr(m.attributeName);
      }
    });
    this._ob.observe(this, { attributes: true });
    const resolve = (def2, isAsync = false) => {
      this._resolved = true;
      this._pendingResolve = void 0;
      const { props, styles } = def2;
      let numberProps;
      if (props && !isArray(props)) {
        for (const key in props) {
          const opt = props[key];
          if (opt === Number || opt && opt.type === Number) {
            if (key in this._props) {
              this._props[key] = toNumber(this._props[key]);
            }
            (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[camelize(key)] = true;
          }
        }
      }
      this._numberProps = numberProps;
      this._resolveProps(def2);
      if (this.shadowRoot) {
        this._applyStyles(styles);
      } else if (styles) {
        warn(
          "Custom element style injection is not supported when using shadowRoot: false"
        );
      }
      this._mount(def2);
    };
    const asyncDef = this._def.__asyncLoader;
    if (asyncDef) {
      this._pendingResolve = asyncDef().then((def2) => {
        def2.configureApp = this._def.configureApp;
        resolve(this._def = def2, true);
      });
    } else {
      resolve(this._def);
    }
  }
  _mount(def2) {
    if (!def2.name) {
      def2.name = "VueElement";
    }
    this._app = this._createApp(def2);
    this._inheritParentContext();
    if (def2.configureApp) {
      def2.configureApp(this._app);
    }
    this._app._ceVNode = this._createVNode();
    this._app.mount(this._root);
    const exposed = this._instance && this._instance.exposed;
    if (!exposed) return;
    for (const key in exposed) {
      if (!hasOwn(this, key)) {
        Object.defineProperty(this, key, {
          // unwrap ref to be consistent with public instance behavior
          get: () => unref(exposed[key])
        });
      } else if (true) {
        warn(`Exposed property "${key}" already exists on custom element.`);
      }
    }
  }
  _resolveProps(def2) {
    const { props } = def2;
    const declaredPropKeys = isArray(props) ? props : Object.keys(props || {});
    for (const key of Object.keys(this)) {
      if (key[0] !== "_" && declaredPropKeys.includes(key)) {
        this._setProp(key, this[key]);
      }
    }
    for (const key of declaredPropKeys.map(camelize)) {
      Object.defineProperty(this, key, {
        get() {
          return this._getProp(key);
        },
        set(val) {
          this._setProp(key, val, true, true);
        }
      });
    }
  }
  _setAttr(key) {
    if (key.startsWith("data-v-")) return;
    const has = this.hasAttribute(key);
    let value = has ? this.getAttribute(key) : REMOVAL;
    const camelKey = camelize(key);
    if (has && this._numberProps && this._numberProps[camelKey]) {
      value = toNumber(value);
    }
    this._setProp(camelKey, value, false, true);
  }
  /**
   * @internal
   */
  _getProp(key) {
    return this._props[key];
  }
  /**
   * @internal
   */
  _setProp(key, val, shouldReflect = true, shouldUpdate = false) {
    if (val !== this._props[key]) {
      if (val === REMOVAL) {
        delete this._props[key];
      } else {
        this._props[key] = val;
        if (key === "key" && this._app) {
          this._app._ceVNode.key = val;
        }
      }
      if (shouldUpdate && this._instance) {
        this._update();
      }
      if (shouldReflect) {
        const ob = this._ob;
        ob && ob.disconnect();
        if (val === true) {
          this.setAttribute(hyphenate(key), "");
        } else if (typeof val === "string" || typeof val === "number") {
          this.setAttribute(hyphenate(key), val + "");
        } else if (!val) {
          this.removeAttribute(hyphenate(key));
        }
        ob && ob.observe(this, { attributes: true });
      }
    }
  }
  _update() {
    const vnode = this._createVNode();
    if (this._app) vnode.appContext = this._app._context;
    render(vnode, this._root);
  }
  _createVNode() {
    const baseProps = {};
    if (!this.shadowRoot) {
      baseProps.onVnodeMounted = baseProps.onVnodeUpdated = this._renderSlots.bind(this);
    }
    const vnode = createVNode(this._def, extend(baseProps, this._props));
    if (!this._instance) {
      vnode.ce = (instance) => {
        this._instance = instance;
        instance.ce = this;
        instance.isCE = true;
        if (true) {
          instance.ceReload = (newStyles) => {
            if (this._styles) {
              this._styles.forEach((s) => this._root.removeChild(s));
              this._styles.length = 0;
            }
            this._applyStyles(newStyles);
            this._instance = null;
            this._update();
          };
        }
        const dispatch = (event, args) => {
          this.dispatchEvent(
            new CustomEvent(
              event,
              isPlainObject(args[0]) ? extend({ detail: args }, args[0]) : { detail: args }
            )
          );
        };
        instance.emit = (event, ...args) => {
          dispatch(event, args);
          if (hyphenate(event) !== event) {
            dispatch(hyphenate(event), args);
          }
        };
        this._setParent();
      };
    }
    return vnode;
  }
  _applyStyles(styles, owner) {
    if (!styles) return;
    if (owner) {
      if (owner === this._def || this._styleChildren.has(owner)) {
        return;
      }
      this._styleChildren.add(owner);
    }
    const nonce = this._nonce;
    for (let i = styles.length - 1; i >= 0; i--) {
      const s = document.createElement("style");
      if (nonce) s.setAttribute("nonce", nonce);
      s.textContent = styles[i];
      this.shadowRoot.prepend(s);
      if (true) {
        if (owner) {
          if (owner.__hmrId) {
            if (!this._childStyles) this._childStyles = /* @__PURE__ */ new Map();
            let entry = this._childStyles.get(owner.__hmrId);
            if (!entry) {
              this._childStyles.set(owner.__hmrId, entry = []);
            }
            entry.push(s);
          }
        } else {
          (this._styles || (this._styles = [])).push(s);
        }
      }
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const slots = this._slots = {};
    let n;
    while (n = this.firstChild) {
      const slotName = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (slots[slotName] || (slots[slotName] = [])).push(n);
      this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const outlets = (this._teleportTarget || this).querySelectorAll("slot");
    const scopeId = this._instance.type.__scopeId;
    for (let i = 0; i < outlets.length; i++) {
      const o = outlets[i];
      const slotName = o.getAttribute("name") || "default";
      const content = this._slots[slotName];
      const parent = o.parentNode;
      if (content) {
        for (const n of content) {
          if (scopeId && n.nodeType === 1) {
            const id = scopeId + "-s";
            const walker = document.createTreeWalker(n, 1);
            n.setAttribute(id, "");
            let child;
            while (child = walker.nextNode()) {
              child.setAttribute(id, "");
            }
          }
          parent.insertBefore(n, o);
        }
      } else {
        while (o.firstChild) parent.insertBefore(o.firstChild, o);
      }
      parent.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(comp) {
    this._applyStyles(comp.styles, comp);
  }
  /**
   * @internal
   */
  _removeChildStyle(comp) {
    if (true) {
      this._styleChildren.delete(comp);
      if (this._childStyles && comp.__hmrId) {
        const oldStyles = this._childStyles.get(comp.__hmrId);
        if (oldStyles) {
          oldStyles.forEach((s) => this._root.removeChild(s));
          oldStyles.length = 0;
        }
      }
    }
  }
}
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const render = (...args) => {
  ensureRenderer().render(...args);
};
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container) return;
    const component = app._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    if (container.nodeType === 1) {
      container.textContent = "";
    }
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function injectNativeTagCheck(app) {
  Object.defineProperty(app.config, "isNativeTag", {
    value: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
    writable: false
  });
}
function injectCompilerOptionsCheck(app) {
  {
    const isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, "isCustomElement", {
      get() {
        return isCustomElement;
      },
      set() {
        warn(
          `The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`
        );
      }
    });
    const compilerOptions = app.config.compilerOptions;
    const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
    Object.defineProperty(app.config, "compilerOptions", {
      get() {
        warn(msg);
        return compilerOptions;
      },
      set() {
        warn(msg);
      }
    });
  }
}
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    if (!res) {
      warn(
        `Failed to mount app: mount target selector "${container}" returned null.`
      );
    }
    return res;
  }
  if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
    warn(
      `mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`
    );
  }
  return container;
}
/**
* vue v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function initDev() {
  {
    initCustomFormatter();
  }
}
if (true) {
  initDev();
}
const _hoisted_1$2 = { class: "summary" };
const _hoisted_2$1 = { class: "summary" };
const _hoisted_3$1 = { key: 1 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Badge.ce",
  props: {
    checkerResults: { type: Array },
    collapsed: { type: Boolean },
    position: { default: "bl", type: String },
    badgeStyle: { default: "", type: String },
    onClick: { type: Function }
  },
  setup(__props) {
    const props = __props;
    const summary = computed(() => {
      let errorCount = 0;
      let warningCount = 0;
      props.checkerResults.forEach((result) => {
        result.diagnostics.forEach((d) => {
          if (d.level === 1) errorCount++;
          if (d.level === 0) warningCount++;
        });
      });
      return { errorCount, warningCount };
    });
    const bgColorClass = computed(() => {
      if (!summary.value) return "";
      if (summary.value.errorCount > 0) return "summary-error";
      if (summary.value.warningCount > 0) return "summary-warning";
      return "summary-success";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass([
          "badge-base",
          _ctx.collapsed ? `to-uncollpase ${bgColorClass.value}` : "to-collpase",
          `badge-${_ctx.position}`
        ]),
        style: normalizeStyle(_ctx.badgeStyle),
        onClick: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, [
        _ctx.collapsed ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("span", _hoisted_1$2, [
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "emoji" }, "❗️", -1)),
            createTextVNode(toDisplayString(summary.value.errorCount), 1)
          ]),
          createBaseVNode("span", _hoisted_2$1, [
            _cache[2] || (_cache[2] = createBaseVNode("span", { class: "emoji" }, "⚠️", -1)),
            createTextVNode(toDisplayString(summary.value.warningCount), 1)
          ])
        ], 64)) : (openBlock(), createElementBlock("span", _hoisted_3$1, "Close"))
      ], 6);
    };
  }
});
const _style_0$4 = "\n.badge-base {\n  appearance: none;\n  font-size: 0.9em;\n  font-weight: bold;\n  border: 0px;\n  border-radius: 0.3em;\n  padding: 0.5em;\n  cursor: pointer;\n  position: fixed;\n  z-index: 99999;\n  margin: 0.5em;\n}\n.badge-bl {\n  bottom: 0px;\n  left: 0px;\n}\n.badge-br {\n  bottom: 0px;\n  right: 0px;\n}\n.badge-tl {\n  top: 0px;\n  left: 0px;\n}\n.badge-tr {\n  top: 0px;\n  right: 0px;\n}\n.to-collpase {\n  color: white;\n  background: rgb(63, 78, 96);\n}\n.to-uncollpase {\n  color: white;\n}\n.emoji {\n  margin-right: 0.5ch;\n  font-family: 'apple color emoji,segoe ui emoji,noto color emoji,android emoji,emojisymbols,emojione mozilla,twemoji mozilla,segoe ui symbol';\n}\n.summary {\n  font-family: var(--monospace);\n  margin-right: 1ch;\n}\n.summary:last-of-type {\n  margin-right: 0;\n}\n.summary-error {\n  background: var(--red);\n}\n.summary-warning {\n  background: var(--yellow);\n}\n";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["styles", [_style_0$4]]]);
const _hoisted_1$1 = { class: "message-item" };
const _hoisted_2 = { class: "message" };
const _hoisted_3 = { class: "file" };
const _hoisted_4 = {
  key: 0,
  class: "frame"
};
const _hoisted_5 = { class: "frame-code" };
const _hoisted_6 = { class: "stack" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Diagnostic.ce",
  props: {
    diagnostic: { type: null },
    base: { type: String }
  },
  setup(__props) {
    function calcLink(text) {
      let curIndex = 0;
      let match;
      fileRE.lastIndex = 0;
      const links = [];
      while (match = fileRE.exec(text)) {
        const { 0: file2, index } = match;
        if (index !== null) {
          const frag = text.slice(curIndex, index);
          const link = {
            textContent: file2,
            onclick: () => {
              fetch(`${__props.base}__open-in-editor?file=` + encodeURIComponent(file2));
            }
          };
          curIndex += frag.length + file2.length;
          links.push(link);
        }
      }
      return links;
    }
    const checkerColorMap = {
      TypeScript: "#3178c6",
      ESLint: "#7b7fe3",
      Biome: "#60a5fa",
      VLS: "#64b587",
      "vue-tsc": "#64b587",
      Stylelint: "#ffffff",
      "oxlint": "#a8b1ff"
    };
    const fileRE = /(?:[a-zA-Z]:\\|\/).*(:\d+:\d+)?/g;
    const codeFrameRE = /^(?:>?\s+\d+\s+\|.*|\s+\|\s*\^.*)\r?\n/gm;
    const hasFrame = computed(() => {
      codeFrameRE.lastIndex = 0;
      return __props.diagnostic.frame && codeFrameRE.test(__props.diagnostic.frame);
    });
    const file = computed(() => {
      return (__props.diagnostic.loc?.file || __props.diagnostic.id || "unknown file").split(`?`);
    }).value[0];
    const errorSource = computed(() => {
      return {
        ...calcLink(
          `${file}` + (__props.diagnostic.loc ? `:${__props.diagnostic.loc.line}:${__props.diagnostic.loc.column}` : "")
        )[0],
        linkFiles: true
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", _hoisted_1$1, [
        createBaseVNode("pre", _hoisted_2, [
          _cache[1] || (_cache[1] = createTextVNode("    \n    ", -1)),
          createBaseVNode("span", {
            class: "plugin",
            style: normalizeStyle({ color: checkerColorMap[_ctx.diagnostic.checkerId] })
          }, toDisplayString(`[${_ctx.diagnostic.checkerId}]`) + " ", 5),
          createBaseVNode("span", {
            class: normalizeClass(["message-body", `message-body-${_ctx.diagnostic.level}`])
          }, toDisplayString(_ctx.diagnostic.message), 3),
          _cache[2] || (_cache[2] = createTextVNode("\n  ", -1))
        ]),
        createBaseVNode("pre", _hoisted_3, [
          createBaseVNode("a", {
            class: "file-link",
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => errorSource.value.onclick && errorSource.value.onclick(...args))
          }, toDisplayString(errorSource.value.textContent), 1)
        ]),
        hasFrame.value ? (openBlock(), createElementBlock("pre", _hoisted_4, [
          createBaseVNode("code", _hoisted_5, toDisplayString(_ctx.diagnostic.frame), 1)
        ])) : createCommentVNode("", true),
        createBaseVNode("pre", _hoisted_6, toDisplayString(_ctx.diagnostic.stack), 1)
      ]);
    };
  }
});
const _style_0$3 = "\nli {\n  list-style: none;\n}\n.message-item {\n  border-bottom: 1px dotted #666;\n  padding: 12px 0 0 0;\n}\n.message {\n  white-space: initial;\n  font-weight: 600;\n}\npre {\n  font-family: var(--monospace);\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 0;\n  overflow-x: scroll;\n  scrollbar-width: none;\n}\n.frame {\n  margin: 1em 0;\n  padding: 6px 8px;\n  background: rgba(22, 24, 29, 0.85);\n  margin-top: 8px;\n  border-radius: 8px;\n}\n.frame-code {\n  color: var(--yellow);\n  font-family: var(--monospace);\n}\npre::-webkit-scrollbar {\n  display: none;\n}\n.message-body {\n  color: var(--red);\n}\n\n/* warning */\n.message-body-0 {\n  color: var(--yellow);\n}\n\n/* error */\n.message-body-1 {\n  color: var(--red);\n}\n\n/* suggestion */\n.message-body-2 {\n  color: var(--blue);\n}\n\n/* message */\n.message-body-3 {\n  color: var(--dim);\n}\n.file {\n  color: var(--cyan);\n  margin-bottom: 0;\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n.stack {\n  font-size: 13px;\n  color: var(--dim);\n}\n.file-link {\n  text-decoration: underline;\n  cursor: pointer;\n}\n";
const Diagnostic = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["styles", [_style_0$3]]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Checker.ce",
  props: {
    diagnostics: { type: Array },
    base: { type: String }
  },
  setup(__props) {
    const key = (diagnostic) => {
      if (diagnostic.loc) {
        return `${diagnostic.loc.file}-${diagnostic.loc.line}-${diagnostic.loc.column}`;
      } else {
        return diagnostic.id;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.diagnostics, (d) => {
          return openBlock(), createBlock(Diagnostic, {
            diagnostic: d,
            base: _ctx.base,
            key: key(d)
          }, null, 8, ["diagnostic", "base"]);
        }), 128))
      ]);
    };
  }
});
const _style_0$2 = "\nul {\n  list-style: none;\n}\nul {\n  padding-inline: 0;\n  margin-block: 0;\n}\n";
const Checker = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["styles", [_style_0$2]]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "List.ce",
  props: {
    ulStyle: { default: "", type: String },
    base: { type: String },
    checkerResults: { type: Array }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", {
        style: normalizeStyle(_ctx.ulStyle)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.checkerResults, (checkerResult, index) => {
          return openBlock(), createElementBlock("li", { key: index }, [
            createVNode(Checker, {
              diagnostics: checkerResult.diagnostics,
              base: _ctx.base,
              index
            }, null, 8, ["diagnostics", "base", "index"])
          ]);
        }), 128))
      ], 4);
    };
  }
});
const _style_0$1 = "\nul,\nli {\n  list-style: none;\n}\nul {\n  padding-inline: 0;\n  margin-block: 0;\n}\n";
const List = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["styles", [_style_0$1]]]);
const WS_CHECKER_ERROR_EVENT = "vite-plugin-checker:error";
const WS_CHECKER_RECONNECT_EVENT = "vite-plugin-checker:reconnect";
const onCustomMessage = [];
const onReconnectMessage = [];
function listenToCustomMessage(cb) {
  onCustomMessage.push(cb);
}
function listenToReconnectMessage(cb) {
  onReconnectMessage.push(cb);
}
function prepareListen() {
  const onMessage = async (data) => {
    switch (data.event) {
      case WS_CHECKER_ERROR_EVENT:
        for (const callbackfn of onCustomMessage) {
          callbackfn(data.data);
        }
        break;
      case WS_CHECKER_RECONNECT_EVENT:
        for (const callbackfn of onReconnectMessage) {
          callbackfn(data.data);
        }
        break;
    }
  };
  return {
    startListening: () => {
      if (import.meta.hot) {
        import.meta.hot.on("vite-plugin-checker", (data) => {
          onMessage(data);
        });
        import.meta.hot.send("vite-plugin-checker", { event: "runtime-loaded" });
      }
    }
  };
}
const checkerResults = ref([]);
function updateErrorOverlay(payloads) {
  const payloadArray = Array.isArray(payloads) ? payloads : [payloads];
  const nextCheckerResults = [
    ...payloadArray,
    ...checkerResults.value.filter((existCheckerResult) => {
      return !payloadArray.map((p2) => p2.checkerId).includes(existCheckerResult.checkerId);
    })
  ];
  checkerResults.value = nextCheckerResults;
}
function resumeErrorOverlay(data) {
  const payloadsToResume = data.map((d) => d.data);
  updateErrorOverlay(payloadsToResume);
}
function useChecker() {
  const ws = prepareListen();
  listenToCustomMessage(updateErrorOverlay);
  listenToReconnectMessage(resumeErrorOverlay);
  ws.startListening();
  return {
    checkerResults
  };
}
const _hoisted_1 = { class: "list-scroll" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "App.ce",
  props: {
    checkerResults: { type: Array },
    overlayConfig: { default: {}, type: null },
    base: { type: String }
  },
  setup(__props) {
    const props = __props;
    const { checkerResults: checkerResults2 } = useChecker();
    const shouldRender = computed(() => {
      return checkerResults2.value.some((p2) => p2.diagnostics.length > 0);
    });
    const initialCollapsed = ref(
      props?.overlayConfig?.initialIsOpen === false || props?.overlayConfig?.initialIsOpen === "error"
    );
    if (props?.overlayConfig?.initialIsOpen === "error") {
      const unwatch = watch(checkerResults2, () => {
        if (!checkerResults2.value.length) return;
        if (checkerResults2.value.some((p2) => p2.diagnostics.some((d) => d.level === 1))) {
          initialCollapsed.value = false;
        }
        unwatch();
      });
    }
    const userCollapsed = ref(void 0);
    const toggle = () => {
      userCollapsed.value = !(userCollapsed.value ?? initialCollapsed.value);
    };
    const collapsed = computed(() => userCollapsed.value ?? initialCollapsed.value);
    return (_ctx, _cache) => {
      return shouldRender.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(Badge, {
          collapsed: collapsed.value,
          "checker-results": unref(checkerResults2),
          position: _ctx.overlayConfig.position,
          badgeStyle: _ctx.overlayConfig.badgeStyle,
          onClick: toggle
        }, null, 8, ["collapsed", "checker-results", "position", "badgeStyle"]),
        createBaseVNode("main", {
          class: normalizeClass(["window", `${collapsed.value ? "window-collapsed" : ""}`]),
          style: normalizeStyle(_ctx.overlayConfig?.panelStyle)
        }, [
          createBaseVNode("div", _hoisted_1, [
            createVNode(List, {
              checkerResults: unref(checkerResults2),
              base: _ctx.base,
              ulStyle: "margin-bottom: 36px;"
            }, null, 8, ["checkerResults", "base"])
          ])
        ], 6)
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const _style_0 = "\n:host {\n  --monospace: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;\n  --red: #ff5555;\n  --yellow: #e2aa53;\n  --purple: #cfa4ff;\n  --blue: #a4c1ff;\n  --cyan: #2dd9da;\n  --dim: #c9c9c9;\n  direction: ltr;\n}\n.window {\n  font-family: sans-serif;\n  background-color: rgba(11, 21, 33, 0.85);\n  backdrop-filter: blur(1px);\n  color: white;\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  z-index: 99998;\n  width: 100%;\n  height: 500px;\n  max-height: 90%;\n  box-shadow: rgb(0 0 0 / 30%) 0px 0px 20px;\n  border-top: 1px solid rgb(63, 78, 96);\n  transform-origin: center top;\n  visibility: visible;\n  transition: all 0.2s ease 0s;\n  opacity: 1;\n  pointer-events: all;\n  transform: translateY(0px) scale(1);\n}\n.window-collapsed {\n  transform: translateY(0px) scale(1);\n  visibility: hidden;\n  transition: all 0.2s ease 0s;\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(15px) scale(1.02);\n}\n.list-scroll {\n  height: 100%;\n  overflow-y: auto;\n  flex-grow: 1;\n}\nmain {\n  padding: 16px;\n  width: 100%;\n  box-sizing: border-box;\n}\n";
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
const ShadowElement = /* @__PURE__ */ defineCustomElement(App);
const overlayId = "vite-plugin-checker-error-overlay";
if (customElements && !customElements.get(overlayId)) {
  customElements.define(overlayId, ShadowElement);
}
function inject({
  base,
  overlayConfig
}) {
  if (document.querySelector("vite-plugin-checker-error-overlay")) return;
  const overlayEle = new ShadowElement({
    base,
    overlayConfig
  });
  document.body.appendChild(overlayEle);
}
export {
  inject
};
;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpcnR1YWw6QHZpdGUtcGx1Z2luLWNoZWNrZXItcnVudGltZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogQHZ1ZS9zaGFyZWQgdjMuNS4xOFxuKiAoYykgMjAxOC1wcmVzZW50IFl1eGkgKEV2YW4pIFlvdSBhbmQgVnVlIGNvbnRyaWJ1dG9yc1xuKiBAbGljZW5zZSBNSVRcbioqL1xuLyohICNfX05PX1NJREVfRUZGRUNUU19fICovXG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZnVuY3Rpb24gbWFrZU1hcChzdHIpIHtcbiAgY29uc3QgbWFwMiA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBmb3IgKGNvbnN0IGtleSBvZiBzdHIuc3BsaXQoXCIsXCIpKSBtYXAyW2tleV0gPSAxO1xuICByZXR1cm4gKHZhbCkgPT4gdmFsIGluIG1hcDI7XG59XG5jb25zdCBFTVBUWV9PQkogPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gT2JqZWN0LmZyZWV6ZSh7fSkgOiB7fTtcbmNvbnN0IEVNUFRZX0FSUiA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBPYmplY3QuZnJlZXplKFtdKSA6IFtdO1xuY29uc3QgTk9PUCA9ICgpID0+IHtcbn07XG5jb25zdCBOTyA9ICgpID0+IGZhbHNlO1xuY29uc3QgaXNPbiA9IChrZXkpID0+IGtleS5jaGFyQ29kZUF0KDApID09PSAxMTEgJiYga2V5LmNoYXJDb2RlQXQoMSkgPT09IDExMCAmJiAvLyB1cHBlcmNhc2UgbGV0dGVyXG4oa2V5LmNoYXJDb2RlQXQoMikgPiAxMjIgfHwga2V5LmNoYXJDb2RlQXQoMikgPCA5Nyk7XG5jb25zdCBpc01vZGVsTGlzdGVuZXIgPSAoa2V5KSA9PiBrZXkuc3RhcnRzV2l0aChcIm9uVXBkYXRlOlwiKTtcbmNvbnN0IGV4dGVuZCA9IE9iamVjdC5hc3NpZ247XG5jb25zdCByZW1vdmUgPSAoYXJyLCBlbCkgPT4ge1xuICBjb25zdCBpID0gYXJyLmluZGV4T2YoZWwpO1xuICBpZiAoaSA+IC0xKSB7XG4gICAgYXJyLnNwbGljZShpLCAxKTtcbiAgfVxufTtcbmNvbnN0IGhhc093blByb3BlcnR5JDEgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuY29uc3QgaGFzT3duID0gKHZhbCwga2V5KSA9PiBoYXNPd25Qcm9wZXJ0eSQxLmNhbGwodmFsLCBrZXkpO1xuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5jb25zdCBpc01hcCA9ICh2YWwpID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSBcIltvYmplY3QgTWFwXVwiO1xuY29uc3QgaXNTZXQgPSAodmFsKSA9PiB0b1R5cGVTdHJpbmcodmFsKSA9PT0gXCJbb2JqZWN0IFNldF1cIjtcbmNvbnN0IGlzRnVuY3Rpb24gPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCI7XG5jb25zdCBpc1N0cmluZyA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCI7XG5jb25zdCBpc1N5bWJvbCA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwic3ltYm9sXCI7XG5jb25zdCBpc09iamVjdCA9ICh2YWwpID0+IHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiO1xuY29uc3QgaXNQcm9taXNlID0gKHZhbCkgPT4ge1xuICByZXR1cm4gKGlzT2JqZWN0KHZhbCkgfHwgaXNGdW5jdGlvbih2YWwpKSAmJiBpc0Z1bmN0aW9uKHZhbC50aGVuKSAmJiBpc0Z1bmN0aW9uKHZhbC5jYXRjaCk7XG59O1xuY29uc3Qgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuY29uc3QgdG9UeXBlU3RyaW5nID0gKHZhbHVlKSA9PiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbmNvbnN0IHRvUmF3VHlwZSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gdG9UeXBlU3RyaW5nKHZhbHVlKS5zbGljZSg4LCAtMSk7XG59O1xuY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWwpID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xuY29uc3QgaXNJbnRlZ2VyS2V5ID0gKGtleSkgPT4gaXNTdHJpbmcoa2V5KSAmJiBrZXkgIT09IFwiTmFOXCIgJiYga2V5WzBdICE9PSBcIi1cIiAmJiBcIlwiICsgcGFyc2VJbnQoa2V5LCAxMCkgPT09IGtleTtcbmNvbnN0IGlzUmVzZXJ2ZWRQcm9wID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoXG4gIC8vIHRoZSBsZWFkaW5nIGNvbW1hIGlzIGludGVudGlvbmFsIHNvIGVtcHR5IHN0cmluZyBcIlwiIGlzIGFsc28gaW5jbHVkZWRcbiAgXCIsa2V5LHJlZixyZWZfZm9yLHJlZl9rZXksb25Wbm9kZUJlZm9yZU1vdW50LG9uVm5vZGVNb3VudGVkLG9uVm5vZGVCZWZvcmVVcGRhdGUsb25Wbm9kZVVwZGF0ZWQsb25Wbm9kZUJlZm9yZVVubW91bnQsb25Wbm9kZVVubW91bnRlZFwiXG4pO1xuY29uc3QgaXNCdWlsdEluRGlyZWN0aXZlID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoXG4gIFwiYmluZCxjbG9hayxlbHNlLWlmLGVsc2UsZm9yLGh0bWwsaWYsbW9kZWwsb24sb25jZSxwcmUsc2hvdyxzbG90LHRleHQsbWVtb1wiXG4pO1xuY29uc3QgY2FjaGVTdHJpbmdGdW5jdGlvbiA9IChmbikgPT4ge1xuICBjb25zdCBjYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gKHN0cikgPT4ge1xuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICB9O1xufTtcbmNvbnN0IGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG5jb25zdCBjYW1lbGl6ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oXG4gIChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgKF8sIGMpID0+IGMgPyBjLnRvVXBwZXJDYXNlKCkgOiBcIlwiKTtcbiAgfVxuKTtcbmNvbnN0IGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbmNvbnN0IGh5cGhlbmF0ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oXG4gIChzdHIpID0+IHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpXG4pO1xuY29uc3QgY2FwaXRhbGl6ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufSk7XG5jb25zdCB0b0hhbmRsZXJLZXkgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKFxuICAoc3RyKSA9PiB7XG4gICAgY29uc3QgcyA9IHN0ciA/IGBvbiR7Y2FwaXRhbGl6ZShzdHIpfWAgOiBgYDtcbiAgICByZXR1cm4gcztcbiAgfVxuKTtcbmNvbnN0IGhhc0NoYW5nZWQgPSAodmFsdWUsIG9sZFZhbHVlKSA9PiAhT2JqZWN0LmlzKHZhbHVlLCBvbGRWYWx1ZSk7XG5jb25zdCBpbnZva2VBcnJheUZucyA9IChmbnMsIC4uLmFyZykgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgIGZuc1tpXSguLi5hcmcpO1xuICB9XG59O1xuY29uc3QgZGVmID0gKG9iaiwga2V5LCB2YWx1ZSwgd3JpdGFibGUgPSBmYWxzZSkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGUsXG4gICAgdmFsdWVcbiAgfSk7XG59O1xuY29uc3QgbG9vc2VUb051bWJlciA9ICh2YWwpID0+IHtcbiAgY29uc3QgbiA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogbjtcbn07XG5jb25zdCB0b051bWJlciA9ICh2YWwpID0+IHtcbiAgY29uc3QgbiA9IGlzU3RyaW5nKHZhbCkgPyBOdW1iZXIodmFsKSA6IE5hTjtcbiAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogbjtcbn07XG5sZXQgX2dsb2JhbFRoaXM7XG5jb25zdCBnZXRHbG9iYWxUaGlzID0gKCkgPT4ge1xuICByZXR1cm4gX2dsb2JhbFRoaXMgfHwgKF9nbG9iYWxUaGlzID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB7fSk7XG59O1xuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGUodmFsdWUpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgY29uc3QgcmVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHZhbHVlW2ldO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IGlzU3RyaW5nKGl0ZW0pID8gcGFyc2VTdHJpbmdTdHlsZShpdGVtKSA6IG5vcm1hbGl6ZVN0eWxlKGl0ZW0pO1xuICAgICAgaWYgKG5vcm1hbGl6ZWQpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbm9ybWFsaXplZCkge1xuICAgICAgICAgIHJlc1trZXldID0gbm9ybWFsaXplZFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpIHx8IGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuY29uc3QgbGlzdERlbGltaXRlclJFID0gLzsoPyFbXihdKlxcKSkvZztcbmNvbnN0IHByb3BlcnR5RGVsaW1pdGVyUkUgPSAvOihbXl0rKS87XG5jb25zdCBzdHlsZUNvbW1lbnRSRSA9IC9cXC9cXCpbXl0qP1xcKlxcLy9nO1xuZnVuY3Rpb24gcGFyc2VTdHJpbmdTdHlsZShjc3NUZXh0KSB7XG4gIGNvbnN0IHJldCA9IHt9O1xuICBjc3NUZXh0LnJlcGxhY2Uoc3R5bGVDb21tZW50UkUsIFwiXCIpLnNwbGl0KGxpc3REZWxpbWl0ZXJSRSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyUkUpO1xuICAgICAgdG1wLmxlbmd0aCA+IDEgJiYgKHJldFt0bXBbMF0udHJpbSgpXSA9IHRtcFsxXS50cmltKCkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5mdW5jdGlvbiBub3JtYWxpemVDbGFzcyh2YWx1ZSkge1xuICBsZXQgcmVzID0gXCJcIjtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHJlcyA9IHZhbHVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUNsYXNzKHZhbHVlW2ldKTtcbiAgICAgIGlmIChub3JtYWxpemVkKSB7XG4gICAgICAgIHJlcyArPSBub3JtYWxpemVkICsgXCIgXCI7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlW25hbWVdKSB7XG4gICAgICAgIHJlcyArPSBuYW1lICsgXCIgXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXMudHJpbSgpO1xufVxuY29uc3QgSFRNTF9UQUdTID0gXCJodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSxhZGRyZXNzLGFydGljbGUsYXNpZGUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsaDEsaDIsaDMsaDQsaDUsaDYsbmF2LHNlY3Rpb24sZGl2LGRkLGRsLGR0LGZpZ2NhcHRpb24sZmlndXJlLHBpY3R1cmUsaHIsaW1nLGxpLG1haW4sb2wscCxwcmUsdWwsYSxiLGFiYnIsYmRpLGJkbyxicixjaXRlLGNvZGUsZGF0YSxkZm4sZW0saSxrYmQsbWFyayxxLHJwLHJ0LHJ1YnkscyxzYW1wLHNtYWxsLHNwYW4sc3Ryb25nLHN1YixzdXAsdGltZSx1LHZhcix3YnIsYXJlYSxhdWRpbyxtYXAsdHJhY2ssdmlkZW8sZW1iZWQsb2JqZWN0LHBhcmFtLHNvdXJjZSxjYW52YXMsc2NyaXB0LG5vc2NyaXB0LGRlbCxpbnMsY2FwdGlvbixjb2wsY29sZ3JvdXAsdGFibGUsdGhlYWQsdGJvZHksdGQsdGgsdHIsYnV0dG9uLGRhdGFsaXN0LGZpZWxkc2V0LGZvcm0saW5wdXQsbGFiZWwsbGVnZW5kLG1ldGVyLG9wdGdyb3VwLG9wdGlvbixvdXRwdXQscHJvZ3Jlc3Msc2VsZWN0LHRleHRhcmVhLGRldGFpbHMsZGlhbG9nLG1lbnUsc3VtbWFyeSx0ZW1wbGF0ZSxibG9ja3F1b3RlLGlmcmFtZSx0Zm9vdFwiO1xuY29uc3QgU1ZHX1RBR1MgPSBcInN2ZyxhbmltYXRlLGFuaW1hdGVNb3Rpb24sYW5pbWF0ZVRyYW5zZm9ybSxjaXJjbGUsY2xpcFBhdGgsY29sb3ItcHJvZmlsZSxkZWZzLGRlc2MsZGlzY2FyZCxlbGxpcHNlLGZlQmxlbmQsZmVDb2xvck1hdHJpeCxmZUNvbXBvbmVudFRyYW5zZmVyLGZlQ29tcG9zaXRlLGZlQ29udm9sdmVNYXRyaXgsZmVEaWZmdXNlTGlnaHRpbmcsZmVEaXNwbGFjZW1lbnRNYXAsZmVEaXN0YW50TGlnaHQsZmVEcm9wU2hhZG93LGZlRmxvb2QsZmVGdW5jQSxmZUZ1bmNCLGZlRnVuY0csZmVGdW5jUixmZUdhdXNzaWFuQmx1cixmZUltYWdlLGZlTWVyZ2UsZmVNZXJnZU5vZGUsZmVNb3JwaG9sb2d5LGZlT2Zmc2V0LGZlUG9pbnRMaWdodCxmZVNwZWN1bGFyTGlnaHRpbmcsZmVTcG90TGlnaHQsZmVUaWxlLGZlVHVyYnVsZW5jZSxmaWx0ZXIsZm9yZWlnbk9iamVjdCxnLGhhdGNoLGhhdGNocGF0aCxpbWFnZSxsaW5lLGxpbmVhckdyYWRpZW50LG1hcmtlcixtYXNrLG1lc2gsbWVzaGdyYWRpZW50LG1lc2hwYXRjaCxtZXNocm93LG1ldGFkYXRhLG1wYXRoLHBhdGgscGF0dGVybixwb2x5Z29uLHBvbHlsaW5lLHJhZGlhbEdyYWRpZW50LHJlY3Qsc2V0LHNvbGlkY29sb3Isc3RvcCxzd2l0Y2gsc3ltYm9sLHRleHQsdGV4dFBhdGgsdGl0bGUsdHNwYW4sdW5rbm93bix1c2Usdmlld1wiO1xuY29uc3QgTUFUSF9UQUdTID0gXCJhbm5vdGF0aW9uLGFubm90YXRpb24teG1sLG1hY3Rpb24sbWFsaWduZ3JvdXAsbWFsaWdubWFyayxtYXRoLG1lbmNsb3NlLG1lcnJvcixtZmVuY2VkLG1mcmFjLG1mcmFjdGlvbixtZ2x5cGgsbWksbWxhYmVsZWR0cixtbG9uZ2RpdixtbXVsdGlzY3JpcHRzLG1uLG1vLG1vdmVyLG1wYWRkZWQsbXBoYW50b20sbXByZXNjcmlwdHMsbXJvb3QsbXJvdyxtcyxtc2NhcnJpZXMsbXNjYXJyeSxtc2dyb3VwLG1zbGluZSxtc3BhY2UsbXNxcnQsbXNyb3csbXN0YWNrLG1zdHlsZSxtc3ViLG1zdWJzdXAsbXN1cCxtdGFibGUsbXRkLG10ZXh0LG10cixtdW5kZXIsbXVuZGVyb3Zlcixub25lLHNlbWFudGljc1wiO1xuY29uc3QgaXNIVE1MVGFnID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoSFRNTF9UQUdTKTtcbmNvbnN0IGlzU1ZHVGFnID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoU1ZHX1RBR1MpO1xuY29uc3QgaXNNYXRoTUxUYWcgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChNQVRIX1RBR1MpO1xuY29uc3Qgc3BlY2lhbEJvb2xlYW5BdHRycyA9IGBpdGVtc2NvcGUsYWxsb3dmdWxsc2NyZWVuLGZvcm1ub3ZhbGlkYXRlLGlzbWFwLG5vbW9kdWxlLG5vdmFsaWRhdGUscmVhZG9ubHlgO1xuY29uc3QgaXNTcGVjaWFsQm9vbGVhbkF0dHIgPSAvKiBAX19QVVJFX18gKi8gbWFrZU1hcChzcGVjaWFsQm9vbGVhbkF0dHJzKTtcbmZ1bmN0aW9uIGluY2x1ZGVCb29sZWFuQXR0cih2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSB8fCB2YWx1ZSA9PT0gXCJcIjtcbn1cbmNvbnN0IGlzUmVmJDEgPSAodmFsKSA9PiB7XG4gIHJldHVybiAhISh2YWwgJiYgdmFsW1wiX192X2lzUmVmXCJdID09PSB0cnVlKTtcbn07XG5jb25zdCB0b0Rpc3BsYXlTdHJpbmcgPSAodmFsKSA9PiB7XG4gIHJldHVybiBpc1N0cmluZyh2YWwpID8gdmFsIDogdmFsID09IG51bGwgPyBcIlwiIDogaXNBcnJheSh2YWwpIHx8IGlzT2JqZWN0KHZhbCkgJiYgKHZhbC50b1N0cmluZyA9PT0gb2JqZWN0VG9TdHJpbmcgfHwgIWlzRnVuY3Rpb24odmFsLnRvU3RyaW5nKSkgPyBpc1JlZiQxKHZhbCkgPyB0b0Rpc3BsYXlTdHJpbmcodmFsLnZhbHVlKSA6IEpTT04uc3RyaW5naWZ5KHZhbCwgcmVwbGFjZXIsIDIpIDogU3RyaW5nKHZhbCk7XG59O1xuY29uc3QgcmVwbGFjZXIgPSAoX2tleSwgdmFsKSA9PiB7XG4gIGlmIChpc1JlZiQxKHZhbCkpIHtcbiAgICByZXR1cm4gcmVwbGFjZXIoX2tleSwgdmFsLnZhbHVlKTtcbiAgfSBlbHNlIGlmIChpc01hcCh2YWwpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgTWFwKCR7dmFsLnNpemV9KWBdOiBbLi4udmFsLmVudHJpZXMoKV0ucmVkdWNlKFxuICAgICAgICAoZW50cmllcywgW2tleSwgdmFsMl0sIGkpID0+IHtcbiAgICAgICAgICBlbnRyaWVzW3N0cmluZ2lmeVN5bWJvbChrZXksIGkpICsgXCIgPT5cIl0gPSB2YWwyO1xuICAgICAgICAgIHJldHVybiBlbnRyaWVzO1xuICAgICAgICB9LFxuICAgICAgICB7fVxuICAgICAgKVxuICAgIH07XG4gIH0gZWxzZSBpZiAoaXNTZXQodmFsKSkge1xuICAgIHJldHVybiB7XG4gICAgICBbYFNldCgke3ZhbC5zaXplfSlgXTogWy4uLnZhbC52YWx1ZXMoKV0ubWFwKCh2KSA9PiBzdHJpbmdpZnlTeW1ib2wodikpXG4gICAgfTtcbiAgfSBlbHNlIGlmIChpc1N5bWJvbCh2YWwpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeVN5bWJvbCh2YWwpO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkgJiYgIWlzQXJyYXkodmFsKSAmJiAhaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWwpO1xuICB9XG4gIHJldHVybiB2YWw7XG59O1xuY29uc3Qgc3RyaW5naWZ5U3ltYm9sID0gKHYsIGkgPSBcIlwiKSA9PiB7XG4gIHZhciBfYTtcbiAgcmV0dXJuIChcbiAgICAvLyBTeW1ib2wuZGVzY3JpcHRpb24gaW4gZXMyMDE5KyBzbyB3ZSBuZWVkIHRvIGNhc3QgaGVyZSB0byBwYXNzXG4gICAgLy8gdGhlIGxpYjogZXMyMDE2IGNoZWNrXG4gICAgaXNTeW1ib2wodikgPyBgU3ltYm9sKCR7KF9hID0gdi5kZXNjcmlwdGlvbikgIT0gbnVsbCA/IF9hIDogaX0pYCA6IHZcbiAgKTtcbn07XG4vKipcbiogQHZ1ZS9yZWFjdGl2aXR5IHYzLjUuMThcbiogKGMpIDIwMTgtcHJlc2VudCBZdXhpIChFdmFuKSBZb3UgYW5kIFZ1ZSBjb250cmlidXRvcnNcbiogQGxpY2Vuc2UgTUlUXG4qKi9cbmZ1bmN0aW9uIHdhcm4kMihtc2csIC4uLmFyZ3MpIHtcbiAgY29uc29sZS53YXJuKGBbVnVlIHdhcm5dICR7bXNnfWAsIC4uLmFyZ3MpO1xufVxubGV0IGFjdGl2ZUVmZmVjdFNjb3BlO1xuY2xhc3MgRWZmZWN0U2NvcGUge1xuICBjb25zdHJ1Y3RvcihkZXRhY2hlZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5kZXRhY2hlZCA9IGRldGFjaGVkO1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fb24gPSAwO1xuICAgIHRoaXMuZWZmZWN0cyA9IFtdO1xuICAgIHRoaXMuY2xlYW51cHMgPSBbXTtcbiAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMucGFyZW50ID0gYWN0aXZlRWZmZWN0U2NvcGU7XG4gICAgaWYgKCFkZXRhY2hlZCAmJiBhY3RpdmVFZmZlY3RTY29wZSkge1xuICAgICAgdGhpcy5pbmRleCA9IChhY3RpdmVFZmZlY3RTY29wZS5zY29wZXMgfHwgKGFjdGl2ZUVmZmVjdFNjb3BlLnNjb3BlcyA9IFtdKSkucHVzaChcbiAgICAgICAgdGhpc1xuICAgICAgKSAtIDE7XG4gICAgfVxuICB9XG4gIGdldCBhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBwYXVzZSgpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWU7XG4gICAgICBsZXQgaSwgbDtcbiAgICAgIGlmICh0aGlzLnNjb3Blcykge1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0gdGhpcy5zY29wZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5zY29wZXNbaV0ucGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChpID0gMCwgbCA9IHRoaXMuZWZmZWN0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5lZmZlY3RzW2ldLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXN1bWVzIHRoZSBlZmZlY3Qgc2NvcGUsIGluY2x1ZGluZyBhbGwgY2hpbGQgc2NvcGVzIGFuZCBlZmZlY3RzLlxuICAgKi9cbiAgcmVzdW1lKCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgaSwgbDtcbiAgICAgICAgaWYgKHRoaXMuc2NvcGVzKSB7XG4gICAgICAgICAgZm9yIChpID0gMCwgbCA9IHRoaXMuc2NvcGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zY29wZXNbaV0ucmVzdW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSB0aGlzLmVmZmVjdHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5lZmZlY3RzW2ldLnJlc3VtZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJ1bihmbikge1xuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFZmZlY3RTY29wZSA9IGFjdGl2ZUVmZmVjdFNjb3BlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYWN0aXZlRWZmZWN0U2NvcGUgPSB0aGlzO1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGFjdGl2ZUVmZmVjdFNjb3BlID0gY3VycmVudEVmZmVjdFNjb3BlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgd2FybiQyKGBjYW5ub3QgcnVuIGFuIGluYWN0aXZlIGVmZmVjdCBzY29wZS5gKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIG9uIG5vbi1kZXRhY2hlZCBzY29wZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbigpIHtcbiAgICBpZiAoKyt0aGlzLl9vbiA9PT0gMSkge1xuICAgICAgdGhpcy5wcmV2U2NvcGUgPSBhY3RpdmVFZmZlY3RTY29wZTtcbiAgICAgIGFjdGl2ZUVmZmVjdFNjb3BlID0gdGhpcztcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIG9uIG5vbi1kZXRhY2hlZCBzY29wZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvZmYoKSB7XG4gICAgaWYgKHRoaXMuX29uID4gMCAmJiAtLXRoaXMuX29uID09PSAwKSB7XG4gICAgICBhY3RpdmVFZmZlY3RTY29wZSA9IHRoaXMucHJldlNjb3BlO1xuICAgICAgdGhpcy5wcmV2U2NvcGUgPSB2b2lkIDA7XG4gICAgfVxuICB9XG4gIHN0b3AoZnJvbVBhcmVudCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgbGV0IGksIGw7XG4gICAgICBmb3IgKGkgPSAwLCBsID0gdGhpcy5lZmZlY3RzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzLmVmZmVjdHNbaV0uc3RvcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5lZmZlY3RzLmxlbmd0aCA9IDA7XG4gICAgICBmb3IgKGkgPSAwLCBsID0gdGhpcy5jbGVhbnVwcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwc1tpXSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jbGVhbnVwcy5sZW5ndGggPSAwO1xuICAgICAgaWYgKHRoaXMuc2NvcGVzKSB7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSB0aGlzLnNjb3Blcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnNjb3Blc1tpXS5zdG9wKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NvcGVzLmxlbmd0aCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZGV0YWNoZWQgJiYgdGhpcy5wYXJlbnQgJiYgIWZyb21QYXJlbnQpIHtcbiAgICAgICAgY29uc3QgbGFzdCA9IHRoaXMucGFyZW50LnNjb3Blcy5wb3AoKTtcbiAgICAgICAgaWYgKGxhc3QgJiYgbGFzdCAhPT0gdGhpcykge1xuICAgICAgICAgIHRoaXMucGFyZW50LnNjb3Blc1t0aGlzLmluZGV4XSA9IGxhc3Q7XG4gICAgICAgICAgbGFzdC5pbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucGFyZW50ID0gdm9pZCAwO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZ2V0Q3VycmVudFNjb3BlKCkge1xuICByZXR1cm4gYWN0aXZlRWZmZWN0U2NvcGU7XG59XG5sZXQgYWN0aXZlU3ViO1xuY29uc3QgcGF1c2VkUXVldWVFZmZlY3RzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5jbGFzcyBSZWFjdGl2ZUVmZmVjdCB7XG4gIGNvbnN0cnVjdG9yKGZuKSB7XG4gICAgdGhpcy5mbiA9IGZuO1xuICAgIHRoaXMuZGVwcyA9IHZvaWQgMDtcbiAgICB0aGlzLmRlcHNUYWlsID0gdm9pZCAwO1xuICAgIHRoaXMuZmxhZ3MgPSAxIHwgNDtcbiAgICB0aGlzLm5leHQgPSB2b2lkIDA7XG4gICAgdGhpcy5jbGVhbnVwID0gdm9pZCAwO1xuICAgIHRoaXMuc2NoZWR1bGVyID0gdm9pZCAwO1xuICAgIGlmIChhY3RpdmVFZmZlY3RTY29wZSAmJiBhY3RpdmVFZmZlY3RTY29wZS5hY3RpdmUpIHtcbiAgICAgIGFjdGl2ZUVmZmVjdFNjb3BlLmVmZmVjdHMucHVzaCh0aGlzKTtcbiAgICB9XG4gIH1cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5mbGFncyB8PSA2NDtcbiAgfVxuICByZXN1bWUoKSB7XG4gICAgaWYgKHRoaXMuZmxhZ3MgJiA2NCkge1xuICAgICAgdGhpcy5mbGFncyAmPSAtNjU7XG4gICAgICBpZiAocGF1c2VkUXVldWVFZmZlY3RzLmhhcyh0aGlzKSkge1xuICAgICAgICBwYXVzZWRRdWV1ZUVmZmVjdHMuZGVsZXRlKHRoaXMpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbm90aWZ5KCkge1xuICAgIGlmICh0aGlzLmZsYWdzICYgMiAmJiAhKHRoaXMuZmxhZ3MgJiAzMikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCEodGhpcy5mbGFncyAmIDgpKSB7XG4gICAgICBiYXRjaCh0aGlzKTtcbiAgICB9XG4gIH1cbiAgcnVuKCkge1xuICAgIGlmICghKHRoaXMuZmxhZ3MgJiAxKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm4oKTtcbiAgICB9XG4gICAgdGhpcy5mbGFncyB8PSAyO1xuICAgIGNsZWFudXBFZmZlY3QodGhpcyk7XG4gICAgcHJlcGFyZURlcHModGhpcyk7XG4gICAgY29uc3QgcHJldkVmZmVjdCA9IGFjdGl2ZVN1YjtcbiAgICBjb25zdCBwcmV2U2hvdWxkVHJhY2sgPSBzaG91bGRUcmFjaztcbiAgICBhY3RpdmVTdWIgPSB0aGlzO1xuICAgIHNob3VsZFRyYWNrID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuZm4oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgYWN0aXZlU3ViICE9PSB0aGlzKSB7XG4gICAgICAgIHdhcm4kMihcbiAgICAgICAgICBcIkFjdGl2ZSBlZmZlY3Qgd2FzIG5vdCByZXN0b3JlZCBjb3JyZWN0bHkgLSB0aGlzIGlzIGxpa2VseSBhIFZ1ZSBpbnRlcm5hbCBidWcuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNsZWFudXBEZXBzKHRoaXMpO1xuICAgICAgYWN0aXZlU3ViID0gcHJldkVmZmVjdDtcbiAgICAgIHNob3VsZFRyYWNrID0gcHJldlNob3VsZFRyYWNrO1xuICAgICAgdGhpcy5mbGFncyAmPSAtMztcbiAgICB9XG4gIH1cbiAgc3RvcCgpIHtcbiAgICBpZiAodGhpcy5mbGFncyAmIDEpIHtcbiAgICAgIGZvciAobGV0IGxpbmsgPSB0aGlzLmRlcHM7IGxpbms7IGxpbmsgPSBsaW5rLm5leHREZXApIHtcbiAgICAgICAgcmVtb3ZlU3ViKGxpbmspO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXBzID0gdGhpcy5kZXBzVGFpbCA9IHZvaWQgMDtcbiAgICAgIGNsZWFudXBFZmZlY3QodGhpcyk7XG4gICAgICB0aGlzLm9uU3RvcCAmJiB0aGlzLm9uU3RvcCgpO1xuICAgICAgdGhpcy5mbGFncyAmPSAtMjtcbiAgICB9XG4gIH1cbiAgdHJpZ2dlcigpIHtcbiAgICBpZiAodGhpcy5mbGFncyAmIDY0KSB7XG4gICAgICBwYXVzZWRRdWV1ZUVmZmVjdHMuYWRkKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlZHVsZXIpIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucnVuSWZEaXJ0eSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBydW5JZkRpcnR5KCkge1xuICAgIGlmIChpc0RpcnR5KHRoaXMpKSB7XG4gICAgICB0aGlzLnJ1bigpO1xuICAgIH1cbiAgfVxuICBnZXQgZGlydHkoKSB7XG4gICAgcmV0dXJuIGlzRGlydHkodGhpcyk7XG4gIH1cbn1cbmxldCBiYXRjaERlcHRoID0gMDtcbmxldCBiYXRjaGVkU3ViO1xubGV0IGJhdGNoZWRDb21wdXRlZDtcbmZ1bmN0aW9uIGJhdGNoKHN1YiwgaXNDb21wdXRlZCA9IGZhbHNlKSB7XG4gIHN1Yi5mbGFncyB8PSA4O1xuICBpZiAoaXNDb21wdXRlZCkge1xuICAgIHN1Yi5uZXh0ID0gYmF0Y2hlZENvbXB1dGVkO1xuICAgIGJhdGNoZWRDb21wdXRlZCA9IHN1YjtcbiAgICByZXR1cm47XG4gIH1cbiAgc3ViLm5leHQgPSBiYXRjaGVkU3ViO1xuICBiYXRjaGVkU3ViID0gc3ViO1xufVxuZnVuY3Rpb24gc3RhcnRCYXRjaCgpIHtcbiAgYmF0Y2hEZXB0aCsrO1xufVxuZnVuY3Rpb24gZW5kQmF0Y2goKSB7XG4gIGlmICgtLWJhdGNoRGVwdGggPiAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChiYXRjaGVkQ29tcHV0ZWQpIHtcbiAgICBsZXQgZSA9IGJhdGNoZWRDb21wdXRlZDtcbiAgICBiYXRjaGVkQ29tcHV0ZWQgPSB2b2lkIDA7XG4gICAgd2hpbGUgKGUpIHtcbiAgICAgIGNvbnN0IG5leHQgPSBlLm5leHQ7XG4gICAgICBlLm5leHQgPSB2b2lkIDA7XG4gICAgICBlLmZsYWdzICY9IC05O1xuICAgICAgZSA9IG5leHQ7XG4gICAgfVxuICB9XG4gIGxldCBlcnJvcjtcbiAgd2hpbGUgKGJhdGNoZWRTdWIpIHtcbiAgICBsZXQgZSA9IGJhdGNoZWRTdWI7XG4gICAgYmF0Y2hlZFN1YiA9IHZvaWQgMDtcbiAgICB3aGlsZSAoZSkge1xuICAgICAgY29uc3QgbmV4dCA9IGUubmV4dDtcbiAgICAgIGUubmV4dCA9IHZvaWQgMDtcbiAgICAgIGUuZmxhZ3MgJj0gLTk7XG4gICAgICBpZiAoZS5mbGFncyAmIDEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICA7XG4gICAgICAgICAgZS50cmlnZ2VyKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlID0gbmV4dDtcbiAgICB9XG4gIH1cbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcbn1cbmZ1bmN0aW9uIHByZXBhcmVEZXBzKHN1Yikge1xuICBmb3IgKGxldCBsaW5rID0gc3ViLmRlcHM7IGxpbms7IGxpbmsgPSBsaW5rLm5leHREZXApIHtcbiAgICBsaW5rLnZlcnNpb24gPSAtMTtcbiAgICBsaW5rLnByZXZBY3RpdmVMaW5rID0gbGluay5kZXAuYWN0aXZlTGluaztcbiAgICBsaW5rLmRlcC5hY3RpdmVMaW5rID0gbGluaztcbiAgfVxufVxuZnVuY3Rpb24gY2xlYW51cERlcHMoc3ViKSB7XG4gIGxldCBoZWFkO1xuICBsZXQgdGFpbCA9IHN1Yi5kZXBzVGFpbDtcbiAgbGV0IGxpbmsgPSB0YWlsO1xuICB3aGlsZSAobGluaykge1xuICAgIGNvbnN0IHByZXYgPSBsaW5rLnByZXZEZXA7XG4gICAgaWYgKGxpbmsudmVyc2lvbiA9PT0gLTEpIHtcbiAgICAgIGlmIChsaW5rID09PSB0YWlsKSB0YWlsID0gcHJldjtcbiAgICAgIHJlbW92ZVN1YihsaW5rKTtcbiAgICAgIHJlbW92ZURlcChsaW5rKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZCA9IGxpbms7XG4gICAgfVxuICAgIGxpbmsuZGVwLmFjdGl2ZUxpbmsgPSBsaW5rLnByZXZBY3RpdmVMaW5rO1xuICAgIGxpbmsucHJldkFjdGl2ZUxpbmsgPSB2b2lkIDA7XG4gICAgbGluayA9IHByZXY7XG4gIH1cbiAgc3ViLmRlcHMgPSBoZWFkO1xuICBzdWIuZGVwc1RhaWwgPSB0YWlsO1xufVxuZnVuY3Rpb24gaXNEaXJ0eShzdWIpIHtcbiAgZm9yIChsZXQgbGluayA9IHN1Yi5kZXBzOyBsaW5rOyBsaW5rID0gbGluay5uZXh0RGVwKSB7XG4gICAgaWYgKGxpbmsuZGVwLnZlcnNpb24gIT09IGxpbmsudmVyc2lvbiB8fCBsaW5rLmRlcC5jb21wdXRlZCAmJiAocmVmcmVzaENvbXB1dGVkKGxpbmsuZGVwLmNvbXB1dGVkKSB8fCBsaW5rLmRlcC52ZXJzaW9uICE9PSBsaW5rLnZlcnNpb24pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKHN1Yi5fZGlydHkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiByZWZyZXNoQ29tcHV0ZWQoY29tcHV0ZWQyKSB7XG4gIGlmIChjb21wdXRlZDIuZmxhZ3MgJiA0ICYmICEoY29tcHV0ZWQyLmZsYWdzICYgMTYpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbXB1dGVkMi5mbGFncyAmPSAtMTc7XG4gIGlmIChjb21wdXRlZDIuZ2xvYmFsVmVyc2lvbiA9PT0gZ2xvYmFsVmVyc2lvbikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb21wdXRlZDIuZ2xvYmFsVmVyc2lvbiA9IGdsb2JhbFZlcnNpb247XG4gIGlmICghY29tcHV0ZWQyLmlzU1NSICYmIGNvbXB1dGVkMi5mbGFncyAmIDEyOCAmJiAoIWNvbXB1dGVkMi5kZXBzICYmICFjb21wdXRlZDIuX2RpcnR5IHx8ICFpc0RpcnR5KGNvbXB1dGVkMikpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbXB1dGVkMi5mbGFncyB8PSAyO1xuICBjb25zdCBkZXAgPSBjb21wdXRlZDIuZGVwO1xuICBjb25zdCBwcmV2U3ViID0gYWN0aXZlU3ViO1xuICBjb25zdCBwcmV2U2hvdWxkVHJhY2sgPSBzaG91bGRUcmFjaztcbiAgYWN0aXZlU3ViID0gY29tcHV0ZWQyO1xuICBzaG91bGRUcmFjayA9IHRydWU7XG4gIHRyeSB7XG4gICAgcHJlcGFyZURlcHMoY29tcHV0ZWQyKTtcbiAgICBjb25zdCB2YWx1ZSA9IGNvbXB1dGVkMi5mbihjb21wdXRlZDIuX3ZhbHVlKTtcbiAgICBpZiAoZGVwLnZlcnNpb24gPT09IDAgfHwgaGFzQ2hhbmdlZCh2YWx1ZSwgY29tcHV0ZWQyLl92YWx1ZSkpIHtcbiAgICAgIGNvbXB1dGVkMi5mbGFncyB8PSAxMjg7XG4gICAgICBjb21wdXRlZDIuX3ZhbHVlID0gdmFsdWU7XG4gICAgICBkZXAudmVyc2lvbisrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVwLnZlcnNpb24rKztcbiAgICB0aHJvdyBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgYWN0aXZlU3ViID0gcHJldlN1YjtcbiAgICBzaG91bGRUcmFjayA9IHByZXZTaG91bGRUcmFjaztcbiAgICBjbGVhbnVwRGVwcyhjb21wdXRlZDIpO1xuICAgIGNvbXB1dGVkMi5mbGFncyAmPSAtMztcbiAgfVxufVxuZnVuY3Rpb24gcmVtb3ZlU3ViKGxpbmssIHNvZnQgPSBmYWxzZSkge1xuICBjb25zdCB7IGRlcCwgcHJldlN1YiwgbmV4dFN1YiB9ID0gbGluaztcbiAgaWYgKHByZXZTdWIpIHtcbiAgICBwcmV2U3ViLm5leHRTdWIgPSBuZXh0U3ViO1xuICAgIGxpbmsucHJldlN1YiA9IHZvaWQgMDtcbiAgfVxuICBpZiAobmV4dFN1Yikge1xuICAgIG5leHRTdWIucHJldlN1YiA9IHByZXZTdWI7XG4gICAgbGluay5uZXh0U3ViID0gdm9pZCAwO1xuICB9XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGRlcC5zdWJzSGVhZCA9PT0gbGluaykge1xuICAgIGRlcC5zdWJzSGVhZCA9IG5leHRTdWI7XG4gIH1cbiAgaWYgKGRlcC5zdWJzID09PSBsaW5rKSB7XG4gICAgZGVwLnN1YnMgPSBwcmV2U3ViO1xuICAgIGlmICghcHJldlN1YiAmJiBkZXAuY29tcHV0ZWQpIHtcbiAgICAgIGRlcC5jb21wdXRlZC5mbGFncyAmPSAtNTtcbiAgICAgIGZvciAobGV0IGwgPSBkZXAuY29tcHV0ZWQuZGVwczsgbDsgbCA9IGwubmV4dERlcCkge1xuICAgICAgICByZW1vdmVTdWIobCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghc29mdCAmJiAhLS1kZXAuc2MgJiYgZGVwLm1hcCkge1xuICAgIGRlcC5tYXAuZGVsZXRlKGRlcC5rZXkpO1xuICB9XG59XG5mdW5jdGlvbiByZW1vdmVEZXAobGluaykge1xuICBjb25zdCB7IHByZXZEZXAsIG5leHREZXAgfSA9IGxpbms7XG4gIGlmIChwcmV2RGVwKSB7XG4gICAgcHJldkRlcC5uZXh0RGVwID0gbmV4dERlcDtcbiAgICBsaW5rLnByZXZEZXAgPSB2b2lkIDA7XG4gIH1cbiAgaWYgKG5leHREZXApIHtcbiAgICBuZXh0RGVwLnByZXZEZXAgPSBwcmV2RGVwO1xuICAgIGxpbmsubmV4dERlcCA9IHZvaWQgMDtcbiAgfVxufVxubGV0IHNob3VsZFRyYWNrID0gdHJ1ZTtcbmNvbnN0IHRyYWNrU3RhY2sgPSBbXTtcbmZ1bmN0aW9uIHBhdXNlVHJhY2tpbmcoKSB7XG4gIHRyYWNrU3RhY2sucHVzaChzaG91bGRUcmFjayk7XG4gIHNob3VsZFRyYWNrID0gZmFsc2U7XG59XG5mdW5jdGlvbiByZXNldFRyYWNraW5nKCkge1xuICBjb25zdCBsYXN0ID0gdHJhY2tTdGFjay5wb3AoKTtcbiAgc2hvdWxkVHJhY2sgPSBsYXN0ID09PSB2b2lkIDAgPyB0cnVlIDogbGFzdDtcbn1cbmZ1bmN0aW9uIGNsZWFudXBFZmZlY3QoZSkge1xuICBjb25zdCB7IGNsZWFudXAgfSA9IGU7XG4gIGUuY2xlYW51cCA9IHZvaWQgMDtcbiAgaWYgKGNsZWFudXApIHtcbiAgICBjb25zdCBwcmV2U3ViID0gYWN0aXZlU3ViO1xuICAgIGFjdGl2ZVN1YiA9IHZvaWQgMDtcbiAgICB0cnkge1xuICAgICAgY2xlYW51cCgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBhY3RpdmVTdWIgPSBwcmV2U3ViO1xuICAgIH1cbiAgfVxufVxubGV0IGdsb2JhbFZlcnNpb24gPSAwO1xuY2xhc3MgTGluayB7XG4gIGNvbnN0cnVjdG9yKHN1YiwgZGVwKSB7XG4gICAgdGhpcy5zdWIgPSBzdWI7XG4gICAgdGhpcy5kZXAgPSBkZXA7XG4gICAgdGhpcy52ZXJzaW9uID0gZGVwLnZlcnNpb247XG4gICAgdGhpcy5uZXh0RGVwID0gdGhpcy5wcmV2RGVwID0gdGhpcy5uZXh0U3ViID0gdGhpcy5wcmV2U3ViID0gdGhpcy5wcmV2QWN0aXZlTGluayA9IHZvaWQgMDtcbiAgfVxufVxuY2xhc3MgRGVwIHtcbiAgLy8gVE9ETyBpc29sYXRlZERlY2xhcmF0aW9ucyBcIl9fdl9za2lwXCJcbiAgY29uc3RydWN0b3IoY29tcHV0ZWQyKSB7XG4gICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkMjtcbiAgICB0aGlzLnZlcnNpb24gPSAwO1xuICAgIHRoaXMuYWN0aXZlTGluayA9IHZvaWQgMDtcbiAgICB0aGlzLnN1YnMgPSB2b2lkIDA7XG4gICAgdGhpcy5tYXAgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5zYyA9IDA7XG4gICAgdGhpcy5fX3Zfc2tpcCA9IHRydWU7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIHRoaXMuc3Vic0hlYWQgPSB2b2lkIDA7XG4gICAgfVxuICB9XG4gIHRyYWNrKGRlYnVnSW5mbykge1xuICAgIGlmICghYWN0aXZlU3ViIHx8ICFzaG91bGRUcmFjayB8fCBhY3RpdmVTdWIgPT09IHRoaXMuY29tcHV0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGxpbmsgPSB0aGlzLmFjdGl2ZUxpbms7XG4gICAgaWYgKGxpbmsgPT09IHZvaWQgMCB8fCBsaW5rLnN1YiAhPT0gYWN0aXZlU3ViKSB7XG4gICAgICBsaW5rID0gdGhpcy5hY3RpdmVMaW5rID0gbmV3IExpbmsoYWN0aXZlU3ViLCB0aGlzKTtcbiAgICAgIGlmICghYWN0aXZlU3ViLmRlcHMpIHtcbiAgICAgICAgYWN0aXZlU3ViLmRlcHMgPSBhY3RpdmVTdWIuZGVwc1RhaWwgPSBsaW5rO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluay5wcmV2RGVwID0gYWN0aXZlU3ViLmRlcHNUYWlsO1xuICAgICAgICBhY3RpdmVTdWIuZGVwc1RhaWwubmV4dERlcCA9IGxpbms7XG4gICAgICAgIGFjdGl2ZVN1Yi5kZXBzVGFpbCA9IGxpbms7XG4gICAgICB9XG4gICAgICBhZGRTdWIobGluayk7XG4gICAgfSBlbHNlIGlmIChsaW5rLnZlcnNpb24gPT09IC0xKSB7XG4gICAgICBsaW5rLnZlcnNpb24gPSB0aGlzLnZlcnNpb247XG4gICAgICBpZiAobGluay5uZXh0RGVwKSB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBsaW5rLm5leHREZXA7XG4gICAgICAgIG5leHQucHJldkRlcCA9IGxpbmsucHJldkRlcDtcbiAgICAgICAgaWYgKGxpbmsucHJldkRlcCkge1xuICAgICAgICAgIGxpbmsucHJldkRlcC5uZXh0RGVwID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgICBsaW5rLnByZXZEZXAgPSBhY3RpdmVTdWIuZGVwc1RhaWw7XG4gICAgICAgIGxpbmsubmV4dERlcCA9IHZvaWQgMDtcbiAgICAgICAgYWN0aXZlU3ViLmRlcHNUYWlsLm5leHREZXAgPSBsaW5rO1xuICAgICAgICBhY3RpdmVTdWIuZGVwc1RhaWwgPSBsaW5rO1xuICAgICAgICBpZiAoYWN0aXZlU3ViLmRlcHMgPT09IGxpbmspIHtcbiAgICAgICAgICBhY3RpdmVTdWIuZGVwcyA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgYWN0aXZlU3ViLm9uVHJhY2spIHtcbiAgICAgIGFjdGl2ZVN1Yi5vblRyYWNrKFxuICAgICAgICBleHRlbmQoXG4gICAgICAgICAge1xuICAgICAgICAgICAgZWZmZWN0OiBhY3RpdmVTdWJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlYnVnSW5mb1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbGluaztcbiAgfVxuICB0cmlnZ2VyKGRlYnVnSW5mbykge1xuICAgIHRoaXMudmVyc2lvbisrO1xuICAgIGdsb2JhbFZlcnNpb24rKztcbiAgICB0aGlzLm5vdGlmeShkZWJ1Z0luZm8pO1xuICB9XG4gIG5vdGlmeShkZWJ1Z0luZm8pIHtcbiAgICBzdGFydEJhdGNoKCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgIGZvciAobGV0IGhlYWQgPSB0aGlzLnN1YnNIZWFkOyBoZWFkOyBoZWFkID0gaGVhZC5uZXh0U3ViKSB7XG4gICAgICAgICAgaWYgKGhlYWQuc3ViLm9uVHJpZ2dlciAmJiAhKGhlYWQuc3ViLmZsYWdzICYgOCkpIHtcbiAgICAgICAgICAgIGhlYWQuc3ViLm9uVHJpZ2dlcihcbiAgICAgICAgICAgICAgZXh0ZW5kKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGVmZmVjdDogaGVhZC5zdWJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlYnVnSW5mb1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgbGluayA9IHRoaXMuc3ViczsgbGluazsgbGluayA9IGxpbmsucHJldlN1Yikge1xuICAgICAgICBpZiAobGluay5zdWIubm90aWZ5KCkpIHtcbiAgICAgICAgICA7XG4gICAgICAgICAgbGluay5zdWIuZGVwLm5vdGlmeSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBhZGRTdWIobGluaykge1xuICBsaW5rLmRlcC5zYysrO1xuICBpZiAobGluay5zdWIuZmxhZ3MgJiA0KSB7XG4gICAgY29uc3QgY29tcHV0ZWQyID0gbGluay5kZXAuY29tcHV0ZWQ7XG4gICAgaWYgKGNvbXB1dGVkMiAmJiAhbGluay5kZXAuc3Vicykge1xuICAgICAgY29tcHV0ZWQyLmZsYWdzIHw9IDQgfCAxNjtcbiAgICAgIGZvciAobGV0IGwgPSBjb21wdXRlZDIuZGVwczsgbDsgbCA9IGwubmV4dERlcCkge1xuICAgICAgICBhZGRTdWIobCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRUYWlsID0gbGluay5kZXAuc3VicztcbiAgICBpZiAoY3VycmVudFRhaWwgIT09IGxpbmspIHtcbiAgICAgIGxpbmsucHJldlN1YiA9IGN1cnJlbnRUYWlsO1xuICAgICAgaWYgKGN1cnJlbnRUYWlsKSBjdXJyZW50VGFpbC5uZXh0U3ViID0gbGluaztcbiAgICB9XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgbGluay5kZXAuc3Vic0hlYWQgPT09IHZvaWQgMCkge1xuICAgICAgbGluay5kZXAuc3Vic0hlYWQgPSBsaW5rO1xuICAgIH1cbiAgICBsaW5rLmRlcC5zdWJzID0gbGluaztcbiAgfVxufVxuY29uc3QgdGFyZ2V0TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5jb25zdCBJVEVSQVRFX0tFWSA9IFN5bWJvbChcbiAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IFwiT2JqZWN0IGl0ZXJhdGVcIiA6IFwiXCJcbik7XG5jb25zdCBNQVBfS0VZX0lURVJBVEVfS0VZID0gU3ltYm9sKFxuICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gXCJNYXAga2V5cyBpdGVyYXRlXCIgOiBcIlwiXG4pO1xuY29uc3QgQVJSQVlfSVRFUkFURV9LRVkgPSBTeW1ib2woXG4gICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBcIkFycmF5IGl0ZXJhdGVcIiA6IFwiXCJcbik7XG5mdW5jdGlvbiB0cmFjayh0YXJnZXQsIHR5cGUsIGtleSkge1xuICBpZiAoc2hvdWxkVHJhY2sgJiYgYWN0aXZlU3ViKSB7XG4gICAgbGV0IGRlcHNNYXAgPSB0YXJnZXRNYXAuZ2V0KHRhcmdldCk7XG4gICAgaWYgKCFkZXBzTWFwKSB7XG4gICAgICB0YXJnZXRNYXAuc2V0KHRhcmdldCwgZGVwc01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuICAgIH1cbiAgICBsZXQgZGVwID0gZGVwc01hcC5nZXQoa2V5KTtcbiAgICBpZiAoIWRlcCkge1xuICAgICAgZGVwc01hcC5zZXQoa2V5LCBkZXAgPSBuZXcgRGVwKCkpO1xuICAgICAgZGVwLm1hcCA9IGRlcHNNYXA7XG4gICAgICBkZXAua2V5ID0ga2V5O1xuICAgIH1cbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgZGVwLnRyYWNrKHtcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICB0eXBlLFxuICAgICAgICBrZXlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXAudHJhY2soKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHRyaWdnZXIodGFyZ2V0LCB0eXBlLCBrZXksIG5ld1ZhbHVlLCBvbGRWYWx1ZSwgb2xkVGFyZ2V0KSB7XG4gIGNvbnN0IGRlcHNNYXAgPSB0YXJnZXRNYXAuZ2V0KHRhcmdldCk7XG4gIGlmICghZGVwc01hcCkge1xuICAgIGdsb2JhbFZlcnNpb24rKztcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcnVuID0gKGRlcCkgPT4ge1xuICAgIGlmIChkZXApIHtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgIGRlcC50cmlnZ2VyKHtcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgbmV3VmFsdWUsXG4gICAgICAgICAgb2xkVmFsdWUsXG4gICAgICAgICAgb2xkVGFyZ2V0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwLnRyaWdnZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHN0YXJ0QmF0Y2goKTtcbiAgaWYgKHR5cGUgPT09IFwiY2xlYXJcIikge1xuICAgIGRlcHNNYXAuZm9yRWFjaChydW4pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRhcmdldElzQXJyYXkgPSBpc0FycmF5KHRhcmdldCk7XG4gICAgY29uc3QgaXNBcnJheUluZGV4ID0gdGFyZ2V0SXNBcnJheSAmJiBpc0ludGVnZXJLZXkoa2V5KTtcbiAgICBpZiAodGFyZ2V0SXNBcnJheSAmJiBrZXkgPT09IFwibGVuZ3RoXCIpIHtcbiAgICAgIGNvbnN0IG5ld0xlbmd0aCA9IE51bWJlcihuZXdWYWx1ZSk7XG4gICAgICBkZXBzTWFwLmZvckVhY2goKGRlcCwga2V5MikgPT4ge1xuICAgICAgICBpZiAoa2V5MiA9PT0gXCJsZW5ndGhcIiB8fCBrZXkyID09PSBBUlJBWV9JVEVSQVRFX0tFWSB8fCAhaXNTeW1ib2woa2V5MikgJiYga2V5MiA+PSBuZXdMZW5ndGgpIHtcbiAgICAgICAgICBydW4oZGVwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChrZXkgIT09IHZvaWQgMCB8fCBkZXBzTWFwLmhhcyh2b2lkIDApKSB7XG4gICAgICAgIHJ1bihkZXBzTWFwLmdldChrZXkpKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0FycmF5SW5kZXgpIHtcbiAgICAgICAgcnVuKGRlcHNNYXAuZ2V0KEFSUkFZX0lURVJBVEVfS0VZKSk7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgICAgIGlmICghdGFyZ2V0SXNBcnJheSkge1xuICAgICAgICAgICAgcnVuKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgICAgICBpZiAoaXNNYXAodGFyZ2V0KSkge1xuICAgICAgICAgICAgICBydW4oZGVwc01hcC5nZXQoTUFQX0tFWV9JVEVSQVRFX0tFWSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheUluZGV4KSB7XG4gICAgICAgICAgICBydW4oZGVwc01hcC5nZXQoXCJsZW5ndGhcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgICAgIGlmICghdGFyZ2V0SXNBcnJheSkge1xuICAgICAgICAgICAgcnVuKGRlcHNNYXAuZ2V0KElURVJBVEVfS0VZKSk7XG4gICAgICAgICAgICBpZiAoaXNNYXAodGFyZ2V0KSkge1xuICAgICAgICAgICAgICBydW4oZGVwc01hcC5nZXQoTUFQX0tFWV9JVEVSQVRFX0tFWSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNldFwiOlxuICAgICAgICAgIGlmIChpc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBydW4oZGVwc01hcC5nZXQoSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVuZEJhdGNoKCk7XG59XG5mdW5jdGlvbiByZWFjdGl2ZVJlYWRBcnJheShhcnJheSkge1xuICBjb25zdCByYXcgPSB0b1JhdyhhcnJheSk7XG4gIGlmIChyYXcgPT09IGFycmF5KSByZXR1cm4gcmF3O1xuICB0cmFjayhyYXcsIFwiaXRlcmF0ZVwiLCBBUlJBWV9JVEVSQVRFX0tFWSk7XG4gIHJldHVybiBpc1NoYWxsb3coYXJyYXkpID8gcmF3IDogcmF3Lm1hcCh0b1JlYWN0aXZlKTtcbn1cbmZ1bmN0aW9uIHNoYWxsb3dSZWFkQXJyYXkoYXJyKSB7XG4gIHRyYWNrKGFyciA9IHRvUmF3KGFyciksIFwiaXRlcmF0ZVwiLCBBUlJBWV9JVEVSQVRFX0tFWSk7XG4gIHJldHVybiBhcnI7XG59XG5jb25zdCBhcnJheUluc3RydW1lbnRhdGlvbnMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIGl0ZXJhdG9yKHRoaXMsIFN5bWJvbC5pdGVyYXRvciwgdG9SZWFjdGl2ZSk7XG4gIH0sXG4gIGNvbmNhdCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHJlYWN0aXZlUmVhZEFycmF5KHRoaXMpLmNvbmNhdChcbiAgICAgIC4uLmFyZ3MubWFwKCh4KSA9PiBpc0FycmF5KHgpID8gcmVhY3RpdmVSZWFkQXJyYXkoeCkgOiB4KVxuICAgICk7XG4gIH0sXG4gIGVudHJpZXMoKSB7XG4gICAgcmV0dXJuIGl0ZXJhdG9yKHRoaXMsIFwiZW50cmllc1wiLCAodmFsdWUpID0+IHtcbiAgICAgIHZhbHVlWzFdID0gdG9SZWFjdGl2ZSh2YWx1ZVsxXSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSk7XG4gIH0sXG4gIGV2ZXJ5KGZuLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIGFwcGx5KHRoaXMsIFwiZXZlcnlcIiwgZm4sIHRoaXNBcmcsIHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfSxcbiAgZmlsdGVyKGZuLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIGFwcGx5KHRoaXMsIFwiZmlsdGVyXCIsIGZuLCB0aGlzQXJnLCAodikgPT4gdi5tYXAodG9SZWFjdGl2ZSksIGFyZ3VtZW50cyk7XG4gIH0sXG4gIGZpbmQoZm4sIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gYXBwbHkodGhpcywgXCJmaW5kXCIsIGZuLCB0aGlzQXJnLCB0b1JlYWN0aXZlLCBhcmd1bWVudHMpO1xuICB9LFxuICBmaW5kSW5kZXgoZm4sIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gYXBwbHkodGhpcywgXCJmaW5kSW5kZXhcIiwgZm4sIHRoaXNBcmcsIHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfSxcbiAgZmluZExhc3QoZm4sIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gYXBwbHkodGhpcywgXCJmaW5kTGFzdFwiLCBmbiwgdGhpc0FyZywgdG9SZWFjdGl2ZSwgYXJndW1lbnRzKTtcbiAgfSxcbiAgZmluZExhc3RJbmRleChmbiwgdGhpc0FyZykge1xuICAgIHJldHVybiBhcHBseSh0aGlzLCBcImZpbmRMYXN0SW5kZXhcIiwgZm4sIHRoaXNBcmcsIHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfSxcbiAgLy8gZmxhdCwgZmxhdE1hcCBjb3VsZCBiZW5lZml0IGZyb20gQVJSQVlfSVRFUkFURSBidXQgYXJlIG5vdCBzdHJhaWdodC1mb3J3YXJkIHRvIGltcGxlbWVudFxuICBmb3JFYWNoKGZuLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIGFwcGx5KHRoaXMsIFwiZm9yRWFjaFwiLCBmbiwgdGhpc0FyZywgdm9pZCAwLCBhcmd1bWVudHMpO1xuICB9LFxuICBpbmNsdWRlcyguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHNlYXJjaFByb3h5KHRoaXMsIFwiaW5jbHVkZXNcIiwgYXJncyk7XG4gIH0sXG4gIGluZGV4T2YoLi4uYXJncykge1xuICAgIHJldHVybiBzZWFyY2hQcm94eSh0aGlzLCBcImluZGV4T2ZcIiwgYXJncyk7XG4gIH0sXG4gIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIHJlYWN0aXZlUmVhZEFycmF5KHRoaXMpLmpvaW4oc2VwYXJhdG9yKTtcbiAgfSxcbiAgLy8ga2V5cygpIGl0ZXJhdG9yIG9ubHkgcmVhZHMgYGxlbmd0aGAsIG5vIG9wdGltaXNhdGlvbiByZXF1aXJlZFxuICBsYXN0SW5kZXhPZiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHNlYXJjaFByb3h5KHRoaXMsIFwibGFzdEluZGV4T2ZcIiwgYXJncyk7XG4gIH0sXG4gIG1hcChmbiwgdGhpc0FyZykge1xuICAgIHJldHVybiBhcHBseSh0aGlzLCBcIm1hcFwiLCBmbiwgdGhpc0FyZywgdm9pZCAwLCBhcmd1bWVudHMpO1xuICB9LFxuICBwb3AoKSB7XG4gICAgcmV0dXJuIG5vVHJhY2tpbmcodGhpcywgXCJwb3BcIik7XG4gIH0sXG4gIHB1c2goLi4uYXJncykge1xuICAgIHJldHVybiBub1RyYWNraW5nKHRoaXMsIFwicHVzaFwiLCBhcmdzKTtcbiAgfSxcbiAgcmVkdWNlKGZuLCAuLi5hcmdzKSB7XG4gICAgcmV0dXJuIHJlZHVjZSh0aGlzLCBcInJlZHVjZVwiLCBmbiwgYXJncyk7XG4gIH0sXG4gIHJlZHVjZVJpZ2h0KGZuLCAuLi5hcmdzKSB7XG4gICAgcmV0dXJuIHJlZHVjZSh0aGlzLCBcInJlZHVjZVJpZ2h0XCIsIGZuLCBhcmdzKTtcbiAgfSxcbiAgc2hpZnQoKSB7XG4gICAgcmV0dXJuIG5vVHJhY2tpbmcodGhpcywgXCJzaGlmdFwiKTtcbiAgfSxcbiAgLy8gc2xpY2UgY291bGQgdXNlIEFSUkFZX0lURVJBVEUgYnV0IGFsc28gc2VlbXMgdG8gYmVnIGZvciByYW5nZSB0cmFja2luZ1xuICBzb21lKGZuLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIGFwcGx5KHRoaXMsIFwic29tZVwiLCBmbiwgdGhpc0FyZywgdm9pZCAwLCBhcmd1bWVudHMpO1xuICB9LFxuICBzcGxpY2UoLi4uYXJncykge1xuICAgIHJldHVybiBub1RyYWNraW5nKHRoaXMsIFwic3BsaWNlXCIsIGFyZ3MpO1xuICB9LFxuICB0b1JldmVyc2VkKCkge1xuICAgIHJldHVybiByZWFjdGl2ZVJlYWRBcnJheSh0aGlzKS50b1JldmVyc2VkKCk7XG4gIH0sXG4gIHRvU29ydGVkKGNvbXBhcmVyKSB7XG4gICAgcmV0dXJuIHJlYWN0aXZlUmVhZEFycmF5KHRoaXMpLnRvU29ydGVkKGNvbXBhcmVyKTtcbiAgfSxcbiAgdG9TcGxpY2VkKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gcmVhY3RpdmVSZWFkQXJyYXkodGhpcykudG9TcGxpY2VkKC4uLmFyZ3MpO1xuICB9LFxuICB1bnNoaWZ0KC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbm9UcmFja2luZyh0aGlzLCBcInVuc2hpZnRcIiwgYXJncyk7XG4gIH0sXG4gIHZhbHVlcygpIHtcbiAgICByZXR1cm4gaXRlcmF0b3IodGhpcywgXCJ2YWx1ZXNcIiwgdG9SZWFjdGl2ZSk7XG4gIH1cbn07XG5mdW5jdGlvbiBpdGVyYXRvcihzZWxmMiwgbWV0aG9kLCB3cmFwVmFsdWUpIHtcbiAgY29uc3QgYXJyID0gc2hhbGxvd1JlYWRBcnJheShzZWxmMik7XG4gIGNvbnN0IGl0ZXIgPSBhcnJbbWV0aG9kXSgpO1xuICBpZiAoYXJyICE9PSBzZWxmMiAmJiAhaXNTaGFsbG93KHNlbGYyKSkge1xuICAgIGl0ZXIuX25leHQgPSBpdGVyLm5leHQ7XG4gICAgaXRlci5uZXh0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gaXRlci5fbmV4dCgpO1xuICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICByZXN1bHQudmFsdWUgPSB3cmFwVmFsdWUocmVzdWx0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gaXRlcjtcbn1cbmNvbnN0IGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5mdW5jdGlvbiBhcHBseShzZWxmMiwgbWV0aG9kLCBmbiwgdGhpc0FyZywgd3JhcHBlZFJldEZuLCBhcmdzKSB7XG4gIGNvbnN0IGFyciA9IHNoYWxsb3dSZWFkQXJyYXkoc2VsZjIpO1xuICBjb25zdCBuZWVkc1dyYXAgPSBhcnIgIT09IHNlbGYyICYmICFpc1NoYWxsb3coc2VsZjIpO1xuICBjb25zdCBtZXRob2RGbiA9IGFyclttZXRob2RdO1xuICBpZiAobWV0aG9kRm4gIT09IGFycmF5UHJvdG9bbWV0aG9kXSkge1xuICAgIGNvbnN0IHJlc3VsdDIgPSBtZXRob2RGbi5hcHBseShzZWxmMiwgYXJncyk7XG4gICAgcmV0dXJuIG5lZWRzV3JhcCA/IHRvUmVhY3RpdmUocmVzdWx0MikgOiByZXN1bHQyO1xuICB9XG4gIGxldCB3cmFwcGVkRm4gPSBmbjtcbiAgaWYgKGFyciAhPT0gc2VsZjIpIHtcbiAgICBpZiAobmVlZHNXcmFwKSB7XG4gICAgICB3cmFwcGVkRm4gPSBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCB0b1JlYWN0aXZlKGl0ZW0pLCBpbmRleCwgc2VsZjIpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGZuLmxlbmd0aCA+IDIpIHtcbiAgICAgIHdyYXBwZWRGbiA9IGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGl0ZW0sIGluZGV4LCBzZWxmMik7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBjb25zdCByZXN1bHQgPSBtZXRob2RGbi5jYWxsKGFyciwgd3JhcHBlZEZuLCB0aGlzQXJnKTtcbiAgcmV0dXJuIG5lZWRzV3JhcCAmJiB3cmFwcGVkUmV0Rm4gPyB3cmFwcGVkUmV0Rm4ocmVzdWx0KSA6IHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHJlZHVjZShzZWxmMiwgbWV0aG9kLCBmbiwgYXJncykge1xuICBjb25zdCBhcnIgPSBzaGFsbG93UmVhZEFycmF5KHNlbGYyKTtcbiAgbGV0IHdyYXBwZWRGbiA9IGZuO1xuICBpZiAoYXJyICE9PSBzZWxmMikge1xuICAgIGlmICghaXNTaGFsbG93KHNlbGYyKSkge1xuICAgICAgd3JhcHBlZEZuID0gZnVuY3Rpb24oYWNjLCBpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBhY2MsIHRvUmVhY3RpdmUoaXRlbSksIGluZGV4LCBzZWxmMik7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZm4ubGVuZ3RoID4gMykge1xuICAgICAgd3JhcHBlZEZuID0gZnVuY3Rpb24oYWNjLCBpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBhY2MsIGl0ZW0sIGluZGV4LCBzZWxmMik7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyW21ldGhvZF0od3JhcHBlZEZuLCAuLi5hcmdzKTtcbn1cbmZ1bmN0aW9uIHNlYXJjaFByb3h5KHNlbGYyLCBtZXRob2QsIGFyZ3MpIHtcbiAgY29uc3QgYXJyID0gdG9SYXcoc2VsZjIpO1xuICB0cmFjayhhcnIsIFwiaXRlcmF0ZVwiLCBBUlJBWV9JVEVSQVRFX0tFWSk7XG4gIGNvbnN0IHJlcyA9IGFyclttZXRob2RdKC4uLmFyZ3MpO1xuICBpZiAoKHJlcyA9PT0gLTEgfHwgcmVzID09PSBmYWxzZSkgJiYgaXNQcm94eShhcmdzWzBdKSkge1xuICAgIGFyZ3NbMF0gPSB0b1JhdyhhcmdzWzBdKTtcbiAgICByZXR1cm4gYXJyW21ldGhvZF0oLi4uYXJncyk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIG5vVHJhY2tpbmcoc2VsZjIsIG1ldGhvZCwgYXJncyA9IFtdKSB7XG4gIHBhdXNlVHJhY2tpbmcoKTtcbiAgc3RhcnRCYXRjaCgpO1xuICBjb25zdCByZXMgPSB0b1JhdyhzZWxmMilbbWV0aG9kXS5hcHBseShzZWxmMiwgYXJncyk7XG4gIGVuZEJhdGNoKCk7XG4gIHJlc2V0VHJhY2tpbmcoKTtcbiAgcmV0dXJuIHJlcztcbn1cbmNvbnN0IGlzTm9uVHJhY2thYmxlS2V5cyA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKGBfX3Byb3RvX18sX192X2lzUmVmLF9faXNWdWVgKTtcbmNvbnN0IGJ1aWx0SW5TeW1ib2xzID0gbmV3IFNldChcbiAgLyogQF9fUFVSRV9fICovIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFN5bWJvbCkuZmlsdGVyKChrZXkpID0+IGtleSAhPT0gXCJhcmd1bWVudHNcIiAmJiBrZXkgIT09IFwiY2FsbGVyXCIpLm1hcCgoa2V5KSA9PiBTeW1ib2xba2V5XSkuZmlsdGVyKGlzU3ltYm9sKVxuKTtcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KGtleSkge1xuICBpZiAoIWlzU3ltYm9sKGtleSkpIGtleSA9IFN0cmluZyhrZXkpO1xuICBjb25zdCBvYmogPSB0b1Jhdyh0aGlzKTtcbiAgdHJhY2sob2JqLCBcImhhc1wiLCBrZXkpO1xuICByZXR1cm4gb2JqLmhhc093blByb3BlcnR5KGtleSk7XG59XG5jbGFzcyBCYXNlUmVhY3RpdmVIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoX2lzUmVhZG9ubHkgPSBmYWxzZSwgX2lzU2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgdGhpcy5faXNSZWFkb25seSA9IF9pc1JlYWRvbmx5O1xuICAgIHRoaXMuX2lzU2hhbGxvdyA9IF9pc1NoYWxsb3c7XG4gIH1cbiAgZ2V0KHRhcmdldCwga2V5LCByZWNlaXZlcikge1xuICAgIGlmIChrZXkgPT09IFwiX192X3NraXBcIikgcmV0dXJuIHRhcmdldFtcIl9fdl9za2lwXCJdO1xuICAgIGNvbnN0IGlzUmVhZG9ubHkyID0gdGhpcy5faXNSZWFkb25seSwgaXNTaGFsbG93MiA9IHRoaXMuX2lzU2hhbGxvdztcbiAgICBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWN0aXZlXCIpIHtcbiAgICAgIHJldHVybiAhaXNSZWFkb25seTI7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X2lzUmVhZG9ubHlcIikge1xuICAgICAgcmV0dXJuIGlzUmVhZG9ubHkyO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9pc1NoYWxsb3dcIikge1xuICAgICAgcmV0dXJuIGlzU2hhbGxvdzI7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X3Jhd1wiKSB7XG4gICAgICBpZiAocmVjZWl2ZXIgPT09IChpc1JlYWRvbmx5MiA/IGlzU2hhbGxvdzIgPyBzaGFsbG93UmVhZG9ubHlNYXAgOiByZWFkb25seU1hcCA6IGlzU2hhbGxvdzIgPyBzaGFsbG93UmVhY3RpdmVNYXAgOiByZWFjdGl2ZU1hcCkuZ2V0KHRhcmdldCkgfHwgLy8gcmVjZWl2ZXIgaXMgbm90IHRoZSByZWFjdGl2ZSBwcm94eSwgYnV0IGhhcyB0aGUgc2FtZSBwcm90b3R5cGVcbiAgICAgIC8vIHRoaXMgbWVhbnMgdGhlIHJlY2VpdmVyIGlzIGEgdXNlciBwcm94eSBvZiB0aGUgcmVhY3RpdmUgcHJveHlcbiAgICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocmVjZWl2ZXIpKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldElzQXJyYXkgPSBpc0FycmF5KHRhcmdldCk7XG4gICAgaWYgKCFpc1JlYWRvbmx5Mikge1xuICAgICAgbGV0IGZuO1xuICAgICAgaWYgKHRhcmdldElzQXJyYXkgJiYgKGZuID0gYXJyYXlJbnN0cnVtZW50YXRpb25zW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiaGFzT3duUHJvcGVydHlcIikge1xuICAgICAgICByZXR1cm4gaGFzT3duUHJvcGVydHk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IFJlZmxlY3QuZ2V0KFxuICAgICAgdGFyZ2V0LFxuICAgICAga2V5LFxuICAgICAgLy8gaWYgdGhpcyBpcyBhIHByb3h5IHdyYXBwaW5nIGEgcmVmLCByZXR1cm4gbWV0aG9kcyB1c2luZyB0aGUgcmF3IHJlZlxuICAgICAgLy8gYXMgcmVjZWl2ZXIgc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIGNhbGwgYHRvUmF3YCBvbiB0aGUgcmVmIGluIGFsbFxuICAgICAgLy8gaXRzIGNsYXNzIG1ldGhvZHNcbiAgICAgIGlzUmVmKHRhcmdldCkgPyB0YXJnZXQgOiByZWNlaXZlclxuICAgICk7XG4gICAgaWYgKGlzU3ltYm9sKGtleSkgPyBidWlsdEluU3ltYm9scy5oYXMoa2V5KSA6IGlzTm9uVHJhY2thYmxlS2V5cyhrZXkpKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBpZiAoIWlzUmVhZG9ubHkyKSB7XG4gICAgICB0cmFjayh0YXJnZXQsIFwiZ2V0XCIsIGtleSk7XG4gICAgfVxuICAgIGlmIChpc1NoYWxsb3cyKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBpZiAoaXNSZWYocmVzKSkge1xuICAgICAgcmV0dXJuIHRhcmdldElzQXJyYXkgJiYgaXNJbnRlZ2VyS2V5KGtleSkgPyByZXMgOiByZXMudmFsdWU7XG4gICAgfVxuICAgIGlmIChpc09iamVjdChyZXMpKSB7XG4gICAgICByZXR1cm4gaXNSZWFkb25seTIgPyByZWFkb25seShyZXMpIDogcmVhY3RpdmUocmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuY2xhc3MgTXV0YWJsZVJlYWN0aXZlSGFuZGxlciBleHRlbmRzIEJhc2VSZWFjdGl2ZUhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihpc1NoYWxsb3cyID0gZmFsc2UpIHtcbiAgICBzdXBlcihmYWxzZSwgaXNTaGFsbG93Mik7XG4gIH1cbiAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICBsZXQgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICBpZiAoIXRoaXMuX2lzU2hhbGxvdykge1xuICAgICAgY29uc3QgaXNPbGRWYWx1ZVJlYWRvbmx5ID0gaXNSZWFkb25seShvbGRWYWx1ZSk7XG4gICAgICBpZiAoIWlzU2hhbGxvdyh2YWx1ZSkgJiYgIWlzUmVhZG9ubHkodmFsdWUpKSB7XG4gICAgICAgIG9sZFZhbHVlID0gdG9SYXcob2xkVmFsdWUpO1xuICAgICAgICB2YWx1ZSA9IHRvUmF3KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXNBcnJheSh0YXJnZXQpICYmIGlzUmVmKG9sZFZhbHVlKSAmJiAhaXNSZWYodmFsdWUpKSB7XG4gICAgICAgIGlmIChpc09sZFZhbHVlUmVhZG9ubHkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2xkVmFsdWUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoYWRLZXkgPSBpc0FycmF5KHRhcmdldCkgJiYgaXNJbnRlZ2VyS2V5KGtleSkgPyBOdW1iZXIoa2V5KSA8IHRhcmdldC5sZW5ndGggOiBoYXNPd24odGFyZ2V0LCBrZXkpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3Quc2V0KFxuICAgICAgdGFyZ2V0LFxuICAgICAga2V5LFxuICAgICAgdmFsdWUsXG4gICAgICBpc1JlZih0YXJnZXQpID8gdGFyZ2V0IDogcmVjZWl2ZXJcbiAgICApO1xuICAgIGlmICh0YXJnZXQgPT09IHRvUmF3KHJlY2VpdmVyKSkge1xuICAgICAgaWYgKCFoYWRLZXkpIHtcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChoYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwic2V0XCIsIGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSkge1xuICAgIGNvbnN0IGhhZEtleSA9IGhhc093bih0YXJnZXQsIGtleSk7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgICBpZiAocmVzdWx0ICYmIGhhZEtleSkge1xuICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiZGVsZXRlXCIsIGtleSwgdm9pZCAwLCBvbGRWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaGFzKHRhcmdldCwga2V5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5oYXModGFyZ2V0LCBrZXkpO1xuICAgIGlmICghaXNTeW1ib2woa2V5KSB8fCAhYnVpbHRJblN5bWJvbHMuaGFzKGtleSkpIHtcbiAgICAgIHRyYWNrKHRhcmdldCwgXCJoYXNcIiwga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBvd25LZXlzKHRhcmdldCkge1xuICAgIHRyYWNrKFxuICAgICAgdGFyZ2V0LFxuICAgICAgXCJpdGVyYXRlXCIsXG4gICAgICBpc0FycmF5KHRhcmdldCkgPyBcImxlbmd0aFwiIDogSVRFUkFURV9LRVlcbiAgICApO1xuICAgIHJldHVybiBSZWZsZWN0Lm93bktleXModGFyZ2V0KTtcbiAgfVxufVxuY2xhc3MgUmVhZG9ubHlSZWFjdGl2ZUhhbmRsZXIgZXh0ZW5kcyBCYXNlUmVhY3RpdmVIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoaXNTaGFsbG93MiA9IGZhbHNlKSB7XG4gICAgc3VwZXIodHJ1ZSwgaXNTaGFsbG93Mik7XG4gIH1cbiAgc2V0KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIHdhcm4kMihcbiAgICAgICAgYFNldCBvcGVyYXRpb24gb24ga2V5IFwiJHtTdHJpbmcoa2V5KX1cIiBmYWlsZWQ6IHRhcmdldCBpcyByZWFkb25seS5gLFxuICAgICAgICB0YXJnZXRcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIHdhcm4kMihcbiAgICAgICAgYERlbGV0ZSBvcGVyYXRpb24gb24ga2V5IFwiJHtTdHJpbmcoa2V5KX1cIiBmYWlsZWQ6IHRhcmdldCBpcyByZWFkb25seS5gLFxuICAgICAgICB0YXJnZXRcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5jb25zdCBtdXRhYmxlSGFuZGxlcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE11dGFibGVSZWFjdGl2ZUhhbmRsZXIoKTtcbmNvbnN0IHJlYWRvbmx5SGFuZGxlcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFJlYWRvbmx5UmVhY3RpdmVIYW5kbGVyKCk7XG5jb25zdCBzaGFsbG93UmVhY3RpdmVIYW5kbGVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTXV0YWJsZVJlYWN0aXZlSGFuZGxlcih0cnVlKTtcbmNvbnN0IHNoYWxsb3dSZWFkb25seUhhbmRsZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBSZWFkb25seVJlYWN0aXZlSGFuZGxlcih0cnVlKTtcbmNvbnN0IHRvU2hhbGxvdyA9ICh2YWx1ZSkgPT4gdmFsdWU7XG5jb25zdCBnZXRQcm90byA9ICh2KSA9PiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHYpO1xuZnVuY3Rpb24gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCBpc1JlYWRvbmx5MiwgaXNTaGFsbG93Mikge1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNbXCJfX3ZfcmF3XCJdO1xuICAgIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3KHRhcmdldCk7XG4gICAgY29uc3QgdGFyZ2V0SXNNYXAgPSBpc01hcChyYXdUYXJnZXQpO1xuICAgIGNvbnN0IGlzUGFpciA9IG1ldGhvZCA9PT0gXCJlbnRyaWVzXCIgfHwgbWV0aG9kID09PSBTeW1ib2wuaXRlcmF0b3IgJiYgdGFyZ2V0SXNNYXA7XG4gICAgY29uc3QgaXNLZXlPbmx5ID0gbWV0aG9kID09PSBcImtleXNcIiAmJiB0YXJnZXRJc01hcDtcbiAgICBjb25zdCBpbm5lckl0ZXJhdG9yID0gdGFyZ2V0W21ldGhvZF0oLi4uYXJncyk7XG4gICAgY29uc3Qgd3JhcCA9IGlzU2hhbGxvdzIgPyB0b1NoYWxsb3cgOiBpc1JlYWRvbmx5MiA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICAgICFpc1JlYWRvbmx5MiAmJiB0cmFjayhcbiAgICAgIHJhd1RhcmdldCxcbiAgICAgIFwiaXRlcmF0ZVwiLFxuICAgICAgaXNLZXlPbmx5ID8gTUFQX0tFWV9JVEVSQVRFX0tFWSA6IElURVJBVEVfS0VZXG4gICAgKTtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gaXRlcmF0b3IgcHJvdG9jb2xcbiAgICAgIG5leHQoKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGlubmVySXRlcmF0b3IubmV4dCgpO1xuICAgICAgICByZXR1cm4gZG9uZSA/IHsgdmFsdWUsIGRvbmUgfSA6IHtcbiAgICAgICAgICB2YWx1ZTogaXNQYWlyID8gW3dyYXAodmFsdWVbMF0pLCB3cmFwKHZhbHVlWzFdKV0gOiB3cmFwKHZhbHVlKSxcbiAgICAgICAgICBkb25lXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgLy8gaXRlcmFibGUgcHJvdG9jb2xcbiAgICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlUmVhZG9ubHlNZXRob2QodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICBjb25zdCBrZXkgPSBhcmdzWzBdID8gYG9uIGtleSBcIiR7YXJnc1swXX1cIiBgIDogYGA7XG4gICAgICB3YXJuJDIoXG4gICAgICAgIGAke2NhcGl0YWxpemUodHlwZSl9IG9wZXJhdGlvbiAke2tleX1mYWlsZWQ6IHRhcmdldCBpcyByZWFkb25seS5gLFxuICAgICAgICB0b1Jhdyh0aGlzKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGUgPT09IFwiZGVsZXRlXCIgPyBmYWxzZSA6IHR5cGUgPT09IFwiY2xlYXJcIiA/IHZvaWQgMCA6IHRoaXM7XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVJbnN0cnVtZW50YXRpb25zKHJlYWRvbmx5Miwgc2hhbGxvdykge1xuICBjb25zdCBpbnN0cnVtZW50YXRpb25zID0ge1xuICAgIGdldChrZXkpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXNbXCJfX3ZfcmF3XCJdO1xuICAgICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgICAgIGNvbnN0IHJhd0tleSA9IHRvUmF3KGtleSk7XG4gICAgICBpZiAoIXJlYWRvbmx5Mikge1xuICAgICAgICBpZiAoaGFzQ2hhbmdlZChrZXksIHJhd0tleSkpIHtcbiAgICAgICAgICB0cmFjayhyYXdUYXJnZXQsIFwiZ2V0XCIsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJhY2socmF3VGFyZ2V0LCBcImdldFwiLCByYXdLZXkpO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBoYXMgfSA9IGdldFByb3RvKHJhd1RhcmdldCk7XG4gICAgICBjb25zdCB3cmFwID0gc2hhbGxvdyA/IHRvU2hhbGxvdyA6IHJlYWRvbmx5MiA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICAgICAgaWYgKGhhcy5jYWxsKHJhd1RhcmdldCwga2V5KSkge1xuICAgICAgICByZXR1cm4gd3JhcCh0YXJnZXQuZ2V0KGtleSkpO1xuICAgICAgfSBlbHNlIGlmIChoYXMuY2FsbChyYXdUYXJnZXQsIHJhd0tleSkpIHtcbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0LmdldChyYXdLZXkpKTtcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSByYXdUYXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LmdldChrZXkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzW1wiX192X3Jhd1wiXTtcbiAgICAgICFyZWFkb25seTIgJiYgdHJhY2sodG9SYXcodGFyZ2V0KSwgXCJpdGVyYXRlXCIsIElURVJBVEVfS0VZKTtcbiAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIFwic2l6ZVwiLCB0YXJnZXQpO1xuICAgIH0sXG4gICAgaGFzKGtleSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpc1tcIl9fdl9yYXdcIl07XG4gICAgICBjb25zdCByYXdUYXJnZXQgPSB0b1Jhdyh0YXJnZXQpO1xuICAgICAgY29uc3QgcmF3S2V5ID0gdG9SYXcoa2V5KTtcbiAgICAgIGlmICghcmVhZG9ubHkyKSB7XG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKGtleSwgcmF3S2V5KSkge1xuICAgICAgICAgIHRyYWNrKHJhd1RhcmdldCwgXCJoYXNcIiwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0cmFjayhyYXdUYXJnZXQsIFwiaGFzXCIsIHJhd0tleSk7XG4gICAgICB9XG4gICAgICByZXR1cm4ga2V5ID09PSByYXdLZXkgPyB0YXJnZXQuaGFzKGtleSkgOiB0YXJnZXQuaGFzKGtleSkgfHwgdGFyZ2V0LmhhcyhyYXdLZXkpO1xuICAgIH0sXG4gICAgZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgY29uc3Qgb2JzZXJ2ZWQgPSB0aGlzO1xuICAgICAgY29uc3QgdGFyZ2V0ID0gb2JzZXJ2ZWRbXCJfX3ZfcmF3XCJdO1xuICAgICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgICAgIGNvbnN0IHdyYXAgPSBzaGFsbG93ID8gdG9TaGFsbG93IDogcmVhZG9ubHkyID8gdG9SZWFkb25seSA6IHRvUmVhY3RpdmU7XG4gICAgICAhcmVhZG9ubHkyICYmIHRyYWNrKHJhd1RhcmdldCwgXCJpdGVyYXRlXCIsIElURVJBVEVfS0VZKTtcbiAgICAgIHJldHVybiB0YXJnZXQuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB3cmFwKHZhbHVlKSwgd3JhcChrZXkpLCBvYnNlcnZlZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGV4dGVuZChcbiAgICBpbnN0cnVtZW50YXRpb25zLFxuICAgIHJlYWRvbmx5MiA/IHtcbiAgICAgIGFkZDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXCJhZGRcIiksXG4gICAgICBzZXQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFwic2V0XCIpLFxuICAgICAgZGVsZXRlOiBjcmVhdGVSZWFkb25seU1ldGhvZChcImRlbGV0ZVwiKSxcbiAgICAgIGNsZWFyOiBjcmVhdGVSZWFkb25seU1ldGhvZChcImNsZWFyXCIpXG4gICAgfSA6IHtcbiAgICAgIGFkZCh2YWx1ZSkge1xuICAgICAgICBpZiAoIXNoYWxsb3cgJiYgIWlzU2hhbGxvdyh2YWx1ZSkgJiYgIWlzUmVhZG9ubHkodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSB0b1Jhdyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdG9SYXcodGhpcyk7XG4gICAgICAgIGNvbnN0IHByb3RvID0gZ2V0UHJvdG8odGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaGFkS2V5ID0gcHJvdG8uaGFzLmNhbGwodGFyZ2V0LCB2YWx1ZSk7XG4gICAgICAgIGlmICghaGFkS2V5KSB7XG4gICAgICAgICAgdGFyZ2V0LmFkZCh2YWx1ZSk7XG4gICAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIHZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCFzaGFsbG93ICYmICFpc1NoYWxsb3codmFsdWUpICYmICFpc1JlYWRvbmx5KHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlID0gdG9SYXcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRvUmF3KHRoaXMpO1xuICAgICAgICBjb25zdCB7IGhhcywgZ2V0IH0gPSBnZXRQcm90byh0YXJnZXQpO1xuICAgICAgICBsZXQgaGFkS2V5ID0gaGFzLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgICAgICBpZiAoIWhhZEtleSkge1xuICAgICAgICAgIGtleSA9IHRvUmF3KGtleSk7XG4gICAgICAgICAgaGFkS2V5ID0gaGFzLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhcywga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGdldC5jYWxsKHRhcmdldCwga2V5KTtcbiAgICAgICAgdGFyZ2V0LnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKCFoYWRLZXkpIHtcbiAgICAgICAgICB0cmlnZ2VyKHRhcmdldCwgXCJhZGRcIiwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwic2V0XCIsIGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBkZWxldGUoa2V5KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRvUmF3KHRoaXMpO1xuICAgICAgICBjb25zdCB7IGhhcywgZ2V0IH0gPSBnZXRQcm90byh0YXJnZXQpO1xuICAgICAgICBsZXQgaGFkS2V5ID0gaGFzLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgICAgICBpZiAoIWhhZEtleSkge1xuICAgICAgICAgIGtleSA9IHRvUmF3KGtleSk7XG4gICAgICAgICAgaGFkS2V5ID0gaGFzLmNhbGwodGFyZ2V0LCBrZXkpO1xuICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhcywga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGdldCA/IGdldC5jYWxsKHRhcmdldCwga2V5KSA6IHZvaWQgMDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGFyZ2V0LmRlbGV0ZShrZXkpO1xuICAgICAgICBpZiAoaGFkS2V5KSB7XG4gICAgICAgICAgdHJpZ2dlcih0YXJnZXQsIFwiZGVsZXRlXCIsIGtleSwgdm9pZCAwLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sXG4gICAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdG9SYXcodGhpcyk7XG4gICAgICAgIGNvbnN0IGhhZEl0ZW1zID0gdGFyZ2V0LnNpemUgIT09IDA7XG4gICAgICAgIGNvbnN0IG9sZFRhcmdldCA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBpc01hcCh0YXJnZXQpID8gbmV3IE1hcCh0YXJnZXQpIDogbmV3IFNldCh0YXJnZXQpIDogdm9pZCAwO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0YXJnZXQuY2xlYXIoKTtcbiAgICAgICAgaWYgKGhhZEl0ZW1zKSB7XG4gICAgICAgICAgdHJpZ2dlcihcbiAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgIFwiY2xlYXJcIixcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIG9sZFRhcmdldFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gICk7XG4gIGNvbnN0IGl0ZXJhdG9yTWV0aG9kcyA9IFtcbiAgICBcImtleXNcIixcbiAgICBcInZhbHVlc1wiLFxuICAgIFwiZW50cmllc1wiLFxuICAgIFN5bWJvbC5pdGVyYXRvclxuICBdO1xuICBpdGVyYXRvck1ldGhvZHMuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgaW5zdHJ1bWVudGF0aW9uc1ttZXRob2RdID0gY3JlYXRlSXRlcmFibGVNZXRob2QobWV0aG9kLCByZWFkb25seTIsIHNoYWxsb3cpO1xuICB9KTtcbiAgcmV0dXJuIGluc3RydW1lbnRhdGlvbnM7XG59XG5mdW5jdGlvbiBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIoaXNSZWFkb25seTIsIHNoYWxsb3cpIHtcbiAgY29uc3QgaW5zdHJ1bWVudGF0aW9ucyA9IGNyZWF0ZUluc3RydW1lbnRhdGlvbnMoaXNSZWFkb25seTIsIHNoYWxsb3cpO1xuICByZXR1cm4gKHRhcmdldCwga2V5LCByZWNlaXZlcikgPT4ge1xuICAgIGlmIChrZXkgPT09IFwiX192X2lzUmVhY3RpdmVcIikge1xuICAgICAgcmV0dXJuICFpc1JlYWRvbmx5MjtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFkb25seVwiKSB7XG4gICAgICByZXR1cm4gaXNSZWFkb25seTI7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiX192X3Jhd1wiKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgICByZXR1cm4gUmVmbGVjdC5nZXQoXG4gICAgICBoYXNPd24oaW5zdHJ1bWVudGF0aW9ucywga2V5KSAmJiBrZXkgaW4gdGFyZ2V0ID8gaW5zdHJ1bWVudGF0aW9ucyA6IHRhcmdldCxcbiAgICAgIGtleSxcbiAgICAgIHJlY2VpdmVyXG4gICAgKTtcbiAgfTtcbn1cbmNvbnN0IG11dGFibGVDb2xsZWN0aW9uSGFuZGxlcnMgPSB7XG4gIGdldDogLyogQF9fUFVSRV9fICovIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcihmYWxzZSwgZmFsc2UpXG59O1xuY29uc3Qgc2hhbGxvd0NvbGxlY3Rpb25IYW5kbGVycyA9IHtcbiAgZ2V0OiAvKiBAX19QVVJFX18gKi8gY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKGZhbHNlLCB0cnVlKVxufTtcbmNvbnN0IHJlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzID0ge1xuICBnZXQ6IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIodHJ1ZSwgZmFsc2UpXG59O1xuY29uc3Qgc2hhbGxvd1JlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzID0ge1xuICBnZXQ6IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVJbnN0cnVtZW50YXRpb25HZXR0ZXIodHJ1ZSwgdHJ1ZSlcbn07XG5mdW5jdGlvbiBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhcywga2V5KSB7XG4gIGNvbnN0IHJhd0tleSA9IHRvUmF3KGtleSk7XG4gIGlmIChyYXdLZXkgIT09IGtleSAmJiBoYXMuY2FsbCh0YXJnZXQsIHJhd0tleSkpIHtcbiAgICBjb25zdCB0eXBlID0gdG9SYXdUeXBlKHRhcmdldCk7XG4gICAgd2FybiQyKFxuICAgICAgYFJlYWN0aXZlICR7dHlwZX0gY29udGFpbnMgYm90aCB0aGUgcmF3IGFuZCByZWFjdGl2ZSB2ZXJzaW9ucyBvZiB0aGUgc2FtZSBvYmplY3Qke3R5cGUgPT09IGBNYXBgID8gYCBhcyBrZXlzYCA6IGBgfSwgd2hpY2ggY2FuIGxlYWQgdG8gaW5jb25zaXN0ZW5jaWVzLiBBdm9pZCBkaWZmZXJlbnRpYXRpbmcgYmV0d2VlbiB0aGUgcmF3IGFuZCByZWFjdGl2ZSB2ZXJzaW9ucyBvZiBhbiBvYmplY3QgYW5kIG9ubHkgdXNlIHRoZSByZWFjdGl2ZSB2ZXJzaW9uIGlmIHBvc3NpYmxlLmBcbiAgICApO1xuICB9XG59XG5jb25zdCByZWFjdGl2ZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuY29uc3Qgc2hhbGxvd1JlYWN0aXZlTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5jb25zdCByZWFkb25seU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuY29uc3Qgc2hhbGxvd1JlYWRvbmx5TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiB0YXJnZXRUeXBlTWFwKHJhd1R5cGUpIHtcbiAgc3dpdGNoIChyYXdUeXBlKSB7XG4gICAgY2FzZSBcIk9iamVjdFwiOlxuICAgIGNhc2UgXCJBcnJheVwiOlxuICAgICAgcmV0dXJuIDE7XG4gICAgY2FzZSBcIk1hcFwiOlxuICAgIGNhc2UgXCJTZXRcIjpcbiAgICBjYXNlIFwiV2Vha01hcFwiOlxuICAgIGNhc2UgXCJXZWFrU2V0XCI6XG4gICAgICByZXR1cm4gMjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDA7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFRhcmdldFR5cGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlW1wiX192X3NraXBcIl0gfHwgIU9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpID8gMCA6IHRhcmdldFR5cGVNYXAodG9SYXdUeXBlKHZhbHVlKSk7XG59XG5mdW5jdGlvbiByZWFjdGl2ZSh0YXJnZXQpIHtcbiAgaWYgKGlzUmVhZG9ubHkodGFyZ2V0KSkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KFxuICAgIHRhcmdldCxcbiAgICBmYWxzZSxcbiAgICBtdXRhYmxlSGFuZGxlcnMsXG4gICAgbXV0YWJsZUNvbGxlY3Rpb25IYW5kbGVycyxcbiAgICByZWFjdGl2ZU1hcFxuICApO1xufVxuZnVuY3Rpb24gc2hhbGxvd1JlYWN0aXZlKHRhcmdldCkge1xuICByZXR1cm4gY3JlYXRlUmVhY3RpdmVPYmplY3QoXG4gICAgdGFyZ2V0LFxuICAgIGZhbHNlLFxuICAgIHNoYWxsb3dSZWFjdGl2ZUhhbmRsZXJzLFxuICAgIHNoYWxsb3dDb2xsZWN0aW9uSGFuZGxlcnMsXG4gICAgc2hhbGxvd1JlYWN0aXZlTWFwXG4gICk7XG59XG5mdW5jdGlvbiByZWFkb25seSh0YXJnZXQpIHtcbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KFxuICAgIHRhcmdldCxcbiAgICB0cnVlLFxuICAgIHJlYWRvbmx5SGFuZGxlcnMsXG4gICAgcmVhZG9ubHlDb2xsZWN0aW9uSGFuZGxlcnMsXG4gICAgcmVhZG9ubHlNYXBcbiAgKTtcbn1cbmZ1bmN0aW9uIHNoYWxsb3dSZWFkb25seSh0YXJnZXQpIHtcbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KFxuICAgIHRhcmdldCxcbiAgICB0cnVlLFxuICAgIHNoYWxsb3dSZWFkb25seUhhbmRsZXJzLFxuICAgIHNoYWxsb3dSZWFkb25seUNvbGxlY3Rpb25IYW5kbGVycyxcbiAgICBzaGFsbG93UmVhZG9ubHlNYXBcbiAgKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KHRhcmdldCwgaXNSZWFkb25seTIsIGJhc2VIYW5kbGVycywgY29sbGVjdGlvbkhhbmRsZXJzLCBwcm94eU1hcCkge1xuICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgd2FybiQyKFxuICAgICAgICBgdmFsdWUgY2Fubm90IGJlIG1hZGUgJHtpc1JlYWRvbmx5MiA/IFwicmVhZG9ubHlcIiA6IFwicmVhY3RpdmVcIn06ICR7U3RyaW5nKFxuICAgICAgICAgIHRhcmdldFxuICAgICAgICApfWBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgaWYgKHRhcmdldFtcIl9fdl9yYXdcIl0gJiYgIShpc1JlYWRvbmx5MiAmJiB0YXJnZXRbXCJfX3ZfaXNSZWFjdGl2ZVwiXSkpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IHRhcmdldFR5cGUgPSBnZXRUYXJnZXRUeXBlKHRhcmdldCk7XG4gIGlmICh0YXJnZXRUeXBlID09PSAwKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBjb25zdCBleGlzdGluZ1Byb3h5ID0gcHJveHlNYXAuZ2V0KHRhcmdldCk7XG4gIGlmIChleGlzdGluZ1Byb3h5KSB7XG4gICAgcmV0dXJuIGV4aXN0aW5nUHJveHk7XG4gIH1cbiAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkoXG4gICAgdGFyZ2V0LFxuICAgIHRhcmdldFR5cGUgPT09IDIgPyBjb2xsZWN0aW9uSGFuZGxlcnMgOiBiYXNlSGFuZGxlcnNcbiAgKTtcbiAgcHJveHlNYXAuc2V0KHRhcmdldCwgcHJveHkpO1xuICByZXR1cm4gcHJveHk7XG59XG5mdW5jdGlvbiBpc1JlYWN0aXZlKHZhbHVlKSB7XG4gIGlmIChpc1JlYWRvbmx5KHZhbHVlKSkge1xuICAgIHJldHVybiBpc1JlYWN0aXZlKHZhbHVlW1wiX192X3Jhd1wiXSk7XG4gIH1cbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlW1wiX192X2lzUmVhY3RpdmVcIl0pO1xufVxuZnVuY3Rpb24gaXNSZWFkb25seSh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWVbXCJfX3ZfaXNSZWFkb25seVwiXSk7XG59XG5mdW5jdGlvbiBpc1NoYWxsb3codmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlW1wiX192X2lzU2hhbGxvd1wiXSk7XG59XG5mdW5jdGlvbiBpc1Byb3h5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/ICEhdmFsdWVbXCJfX3ZfcmF3XCJdIDogZmFsc2U7XG59XG5mdW5jdGlvbiB0b1JhdyhvYnNlcnZlZCkge1xuICBjb25zdCByYXcgPSBvYnNlcnZlZCAmJiBvYnNlcnZlZFtcIl9fdl9yYXdcIl07XG4gIHJldHVybiByYXcgPyB0b1JhdyhyYXcpIDogb2JzZXJ2ZWQ7XG59XG5mdW5jdGlvbiBtYXJrUmF3KHZhbHVlKSB7XG4gIGlmICghaGFzT3duKHZhbHVlLCBcIl9fdl9za2lwXCIpICYmIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpKSB7XG4gICAgZGVmKHZhbHVlLCBcIl9fdl9za2lwXCIsIHRydWUpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbmNvbnN0IHRvUmVhY3RpdmUgPSAodmFsdWUpID0+IGlzT2JqZWN0KHZhbHVlKSA/IHJlYWN0aXZlKHZhbHVlKSA6IHZhbHVlO1xuY29uc3QgdG9SZWFkb25seSA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpID8gcmVhZG9ubHkodmFsdWUpIDogdmFsdWU7XG5mdW5jdGlvbiBpc1JlZihyKSB7XG4gIHJldHVybiByID8gcltcIl9fdl9pc1JlZlwiXSA9PT0gdHJ1ZSA6IGZhbHNlO1xufVxuZnVuY3Rpb24gcmVmKHZhbHVlKSB7XG4gIHJldHVybiBjcmVhdGVSZWYodmFsdWUsIGZhbHNlKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlZihyYXdWYWx1ZSwgc2hhbGxvdykge1xuICBpZiAoaXNSZWYocmF3VmFsdWUpKSB7XG4gICAgcmV0dXJuIHJhd1ZhbHVlO1xuICB9XG4gIHJldHVybiBuZXcgUmVmSW1wbChyYXdWYWx1ZSwgc2hhbGxvdyk7XG59XG5jbGFzcyBSZWZJbXBsIHtcbiAgY29uc3RydWN0b3IodmFsdWUsIGlzU2hhbGxvdzIpIHtcbiAgICB0aGlzLmRlcCA9IG5ldyBEZXAoKTtcbiAgICB0aGlzW1wiX192X2lzUmVmXCJdID0gdHJ1ZTtcbiAgICB0aGlzW1wiX192X2lzU2hhbGxvd1wiXSA9IGZhbHNlO1xuICAgIHRoaXMuX3Jhd1ZhbHVlID0gaXNTaGFsbG93MiA/IHZhbHVlIDogdG9SYXcodmFsdWUpO1xuICAgIHRoaXMuX3ZhbHVlID0gaXNTaGFsbG93MiA/IHZhbHVlIDogdG9SZWFjdGl2ZSh2YWx1ZSk7XG4gICAgdGhpc1tcIl9fdl9pc1NoYWxsb3dcIl0gPSBpc1NoYWxsb3cyO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgdGhpcy5kZXAudHJhY2soe1xuICAgICAgICB0YXJnZXQ6IHRoaXMsXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgIGtleTogXCJ2YWx1ZVwiXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXAudHJhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZShuZXdWYWx1ZSkge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5fcmF3VmFsdWU7XG4gICAgY29uc3QgdXNlRGlyZWN0VmFsdWUgPSB0aGlzW1wiX192X2lzU2hhbGxvd1wiXSB8fCBpc1NoYWxsb3cobmV3VmFsdWUpIHx8IGlzUmVhZG9ubHkobmV3VmFsdWUpO1xuICAgIG5ld1ZhbHVlID0gdXNlRGlyZWN0VmFsdWUgPyBuZXdWYWx1ZSA6IHRvUmF3KG5ld1ZhbHVlKTtcbiAgICBpZiAoaGFzQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgICB0aGlzLl9yYXdWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5fdmFsdWUgPSB1c2VEaXJlY3RWYWx1ZSA/IG5ld1ZhbHVlIDogdG9SZWFjdGl2ZShuZXdWYWx1ZSk7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICB0aGlzLmRlcC50cmlnZ2VyKHtcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMsXG4gICAgICAgICAgdHlwZTogXCJzZXRcIixcbiAgICAgICAgICBrZXk6IFwidmFsdWVcIixcbiAgICAgICAgICBuZXdWYWx1ZSxcbiAgICAgICAgICBvbGRWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVwLnRyaWdnZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHVucmVmKHJlZjIpIHtcbiAgcmV0dXJuIGlzUmVmKHJlZjIpID8gcmVmMi52YWx1ZSA6IHJlZjI7XG59XG5jb25zdCBzaGFsbG93VW53cmFwSGFuZGxlcnMgPSB7XG4gIGdldDogKHRhcmdldCwga2V5LCByZWNlaXZlcikgPT4ga2V5ID09PSBcIl9fdl9yYXdcIiA/IHRhcmdldCA6IHVucmVmKFJlZmxlY3QuZ2V0KHRhcmdldCwga2V5LCByZWNlaXZlcikpLFxuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKSA9PiB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICBpZiAoaXNSZWYob2xkVmFsdWUpICYmICFpc1JlZih2YWx1ZSkpIHtcbiAgICAgIG9sZFZhbHVlLnZhbHVlID0gdmFsdWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfVxufTtcbmZ1bmN0aW9uIHByb3h5UmVmcyhvYmplY3RXaXRoUmVmcykge1xuICByZXR1cm4gaXNSZWFjdGl2ZShvYmplY3RXaXRoUmVmcykgPyBvYmplY3RXaXRoUmVmcyA6IG5ldyBQcm94eShvYmplY3RXaXRoUmVmcywgc2hhbGxvd1Vud3JhcEhhbmRsZXJzKTtcbn1cbmNsYXNzIENvbXB1dGVkUmVmSW1wbCB7XG4gIGNvbnN0cnVjdG9yKGZuLCBzZXR0ZXIsIGlzU1NSKSB7XG4gICAgdGhpcy5mbiA9IGZuO1xuICAgIHRoaXMuc2V0dGVyID0gc2V0dGVyO1xuICAgIHRoaXMuX3ZhbHVlID0gdm9pZCAwO1xuICAgIHRoaXMuZGVwID0gbmV3IERlcCh0aGlzKTtcbiAgICB0aGlzLl9fdl9pc1JlZiA9IHRydWU7XG4gICAgdGhpcy5kZXBzID0gdm9pZCAwO1xuICAgIHRoaXMuZGVwc1RhaWwgPSB2b2lkIDA7XG4gICAgdGhpcy5mbGFncyA9IDE2O1xuICAgIHRoaXMuZ2xvYmFsVmVyc2lvbiA9IGdsb2JhbFZlcnNpb24gLSAxO1xuICAgIHRoaXMubmV4dCA9IHZvaWQgMDtcbiAgICB0aGlzLmVmZmVjdCA9IHRoaXM7XG4gICAgdGhpc1tcIl9fdl9pc1JlYWRvbmx5XCJdID0gIXNldHRlcjtcbiAgICB0aGlzLmlzU1NSID0gaXNTU1I7XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbm90aWZ5KCkge1xuICAgIHRoaXMuZmxhZ3MgfD0gMTY7XG4gICAgaWYgKCEodGhpcy5mbGFncyAmIDgpICYmIC8vIGF2b2lkIGluZmluaXRlIHNlbGYgcmVjdXJzaW9uXG4gICAgYWN0aXZlU3ViICE9PSB0aGlzKSB7XG4gICAgICBiYXRjaCh0aGlzLCB0cnVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkgO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICBjb25zdCBsaW5rID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IHRoaXMuZGVwLnRyYWNrKHtcbiAgICAgIHRhcmdldDogdGhpcyxcbiAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICBrZXk6IFwidmFsdWVcIlxuICAgIH0pIDogdGhpcy5kZXAudHJhY2soKTtcbiAgICByZWZyZXNoQ29tcHV0ZWQodGhpcyk7XG4gICAgaWYgKGxpbmspIHtcbiAgICAgIGxpbmsudmVyc2lvbiA9IHRoaXMuZGVwLnZlcnNpb247XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUobmV3VmFsdWUpIHtcbiAgICBpZiAodGhpcy5zZXR0ZXIpIHtcbiAgICAgIHRoaXMuc2V0dGVyKG5ld1ZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIHdhcm4kMihcIldyaXRlIG9wZXJhdGlvbiBmYWlsZWQ6IGNvbXB1dGVkIHZhbHVlIGlzIHJlYWRvbmx5XCIpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY29tcHV0ZWQkMShnZXR0ZXJPck9wdGlvbnMsIGRlYnVnT3B0aW9ucywgaXNTU1IgPSBmYWxzZSkge1xuICBsZXQgZ2V0dGVyO1xuICBsZXQgc2V0dGVyO1xuICBpZiAoaXNGdW5jdGlvbihnZXR0ZXJPck9wdGlvbnMpKSB7XG4gICAgZ2V0dGVyID0gZ2V0dGVyT3JPcHRpb25zO1xuICB9IGVsc2Uge1xuICAgIGdldHRlciA9IGdldHRlck9yT3B0aW9ucy5nZXQ7XG4gICAgc2V0dGVyID0gZ2V0dGVyT3JPcHRpb25zLnNldDtcbiAgfVxuICBjb25zdCBjUmVmID0gbmV3IENvbXB1dGVkUmVmSW1wbChnZXR0ZXIsIHNldHRlciwgaXNTU1IpO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBkZWJ1Z09wdGlvbnMpIDtcbiAgcmV0dXJuIGNSZWY7XG59XG5jb25zdCBJTklUSUFMX1dBVENIRVJfVkFMVUUgPSB7fTtcbmNvbnN0IGNsZWFudXBNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmxldCBhY3RpdmVXYXRjaGVyID0gdm9pZCAwO1xuZnVuY3Rpb24gb25XYXRjaGVyQ2xlYW51cChjbGVhbnVwRm4sIGZhaWxTaWxlbnRseSA9IGZhbHNlLCBvd25lciA9IGFjdGl2ZVdhdGNoZXIpIHtcbiAgaWYgKG93bmVyKSB7XG4gICAgbGV0IGNsZWFudXBzID0gY2xlYW51cE1hcC5nZXQob3duZXIpO1xuICAgIGlmICghY2xlYW51cHMpIGNsZWFudXBNYXAuc2V0KG93bmVyLCBjbGVhbnVwcyA9IFtdKTtcbiAgICBjbGVhbnVwcy5wdXNoKGNsZWFudXBGbik7XG4gIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhZmFpbFNpbGVudGx5KSB7XG4gICAgd2FybiQyKFxuICAgICAgYG9uV2F0Y2hlckNsZWFudXAoKSB3YXMgY2FsbGVkIHdoZW4gdGhlcmUgd2FzIG5vIGFjdGl2ZSB3YXRjaGVyIHRvIGFzc29jaWF0ZSB3aXRoLmBcbiAgICApO1xuICB9XG59XG5mdW5jdGlvbiB3YXRjaCQxKHNvdXJjZSwgY2IsIG9wdGlvbnMgPSBFTVBUWV9PQkopIHtcbiAgY29uc3QgeyBpbW1lZGlhdGUsIGRlZXAsIG9uY2UsIHNjaGVkdWxlciwgYXVnbWVudEpvYiwgY2FsbCB9ID0gb3B0aW9ucztcbiAgY29uc3Qgd2FybkludmFsaWRTb3VyY2UgPSAocykgPT4ge1xuICAgIChvcHRpb25zLm9uV2FybiB8fCB3YXJuJDIpKFxuICAgICAgYEludmFsaWQgd2F0Y2ggc291cmNlOiBgLFxuICAgICAgcyxcbiAgICAgIGBBIHdhdGNoIHNvdXJjZSBjYW4gb25seSBiZSBhIGdldHRlci9lZmZlY3QgZnVuY3Rpb24sIGEgcmVmLCBhIHJlYWN0aXZlIG9iamVjdCwgb3IgYW4gYXJyYXkgb2YgdGhlc2UgdHlwZXMuYFxuICAgICk7XG4gIH07XG4gIGNvbnN0IHJlYWN0aXZlR2V0dGVyID0gKHNvdXJjZTIpID0+IHtcbiAgICBpZiAoZGVlcCkgcmV0dXJuIHNvdXJjZTI7XG4gICAgaWYgKGlzU2hhbGxvdyhzb3VyY2UyKSB8fCBkZWVwID09PSBmYWxzZSB8fCBkZWVwID09PSAwKVxuICAgICAgcmV0dXJuIHRyYXZlcnNlKHNvdXJjZTIsIDEpO1xuICAgIHJldHVybiB0cmF2ZXJzZShzb3VyY2UyKTtcbiAgfTtcbiAgbGV0IGVmZmVjdDtcbiAgbGV0IGdldHRlcjtcbiAgbGV0IGNsZWFudXA7XG4gIGxldCBib3VuZENsZWFudXA7XG4gIGxldCBmb3JjZVRyaWdnZXIgPSBmYWxzZTtcbiAgbGV0IGlzTXVsdGlTb3VyY2UgPSBmYWxzZTtcbiAgaWYgKGlzUmVmKHNvdXJjZSkpIHtcbiAgICBnZXR0ZXIgPSAoKSA9PiBzb3VyY2UudmFsdWU7XG4gICAgZm9yY2VUcmlnZ2VyID0gaXNTaGFsbG93KHNvdXJjZSk7XG4gIH0gZWxzZSBpZiAoaXNSZWFjdGl2ZShzb3VyY2UpKSB7XG4gICAgZ2V0dGVyID0gKCkgPT4gcmVhY3RpdmVHZXR0ZXIoc291cmNlKTtcbiAgICBmb3JjZVRyaWdnZXIgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkoc291cmNlKSkge1xuICAgIGlzTXVsdGlTb3VyY2UgPSB0cnVlO1xuICAgIGZvcmNlVHJpZ2dlciA9IHNvdXJjZS5zb21lKChzKSA9PiBpc1JlYWN0aXZlKHMpIHx8IGlzU2hhbGxvdyhzKSk7XG4gICAgZ2V0dGVyID0gKCkgPT4gc291cmNlLm1hcCgocykgPT4ge1xuICAgICAgaWYgKGlzUmVmKHMpKSB7XG4gICAgICAgIHJldHVybiBzLnZhbHVlO1xuICAgICAgfSBlbHNlIGlmIChpc1JlYWN0aXZlKHMpKSB7XG4gICAgICAgIHJldHVybiByZWFjdGl2ZUdldHRlcihzKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihzKSkge1xuICAgICAgICByZXR1cm4gY2FsbCA/IGNhbGwocywgMikgOiBzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdhcm5JbnZhbGlkU291cmNlKHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oc291cmNlKSkge1xuICAgIGlmIChjYikge1xuICAgICAgZ2V0dGVyID0gY2FsbCA/ICgpID0+IGNhbGwoc291cmNlLCAyKSA6IHNvdXJjZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0dGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoY2xlYW51cCkge1xuICAgICAgICAgIHBhdXNlVHJhY2tpbmcoKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICByZXNldFRyYWNraW5nKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRFZmZlY3QgPSBhY3RpdmVXYXRjaGVyO1xuICAgICAgICBhY3RpdmVXYXRjaGVyID0gZWZmZWN0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBjYWxsID8gY2FsbChzb3VyY2UsIDMsIFtib3VuZENsZWFudXBdKSA6IHNvdXJjZShib3VuZENsZWFudXApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGFjdGl2ZVdhdGNoZXIgPSBjdXJyZW50RWZmZWN0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBnZXR0ZXIgPSBOT09QO1xuICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgd2FybkludmFsaWRTb3VyY2Uoc291cmNlKTtcbiAgfVxuICBpZiAoY2IgJiYgZGVlcCkge1xuICAgIGNvbnN0IGJhc2VHZXR0ZXIgPSBnZXR0ZXI7XG4gICAgY29uc3QgZGVwdGggPSBkZWVwID09PSB0cnVlID8gSW5maW5pdHkgOiBkZWVwO1xuICAgIGdldHRlciA9ICgpID0+IHRyYXZlcnNlKGJhc2VHZXR0ZXIoKSwgZGVwdGgpO1xuICB9XG4gIGNvbnN0IHNjb3BlID0gZ2V0Q3VycmVudFNjb3BlKCk7XG4gIGNvbnN0IHdhdGNoSGFuZGxlID0gKCkgPT4ge1xuICAgIGVmZmVjdC5zdG9wKCk7XG4gICAgaWYgKHNjb3BlICYmIHNjb3BlLmFjdGl2ZSkge1xuICAgICAgcmVtb3ZlKHNjb3BlLmVmZmVjdHMsIGVmZmVjdCk7XG4gICAgfVxuICB9O1xuICBpZiAob25jZSAmJiBjYikge1xuICAgIGNvbnN0IF9jYiA9IGNiO1xuICAgIGNiID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIF9jYiguLi5hcmdzKTtcbiAgICAgIHdhdGNoSGFuZGxlKCk7XG4gICAgfTtcbiAgfVxuICBsZXQgb2xkVmFsdWUgPSBpc011bHRpU291cmNlID8gbmV3IEFycmF5KHNvdXJjZS5sZW5ndGgpLmZpbGwoSU5JVElBTF9XQVRDSEVSX1ZBTFVFKSA6IElOSVRJQUxfV0FUQ0hFUl9WQUxVRTtcbiAgY29uc3Qgam9iID0gKGltbWVkaWF0ZUZpcnN0UnVuKSA9PiB7XG4gICAgaWYgKCEoZWZmZWN0LmZsYWdzICYgMSkgfHwgIWVmZmVjdC5kaXJ0eSAmJiAhaW1tZWRpYXRlRmlyc3RSdW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNiKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGVmZmVjdC5ydW4oKTtcbiAgICAgIGlmIChkZWVwIHx8IGZvcmNlVHJpZ2dlciB8fCAoaXNNdWx0aVNvdXJjZSA/IG5ld1ZhbHVlLnNvbWUoKHYsIGkpID0+IGhhc0NoYW5nZWQodiwgb2xkVmFsdWVbaV0pKSA6IGhhc0NoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSkpIHtcbiAgICAgICAgaWYgKGNsZWFudXApIHtcbiAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudFdhdGNoZXIgPSBhY3RpdmVXYXRjaGVyO1xuICAgICAgICBhY3RpdmVXYXRjaGVyID0gZWZmZWN0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGFyZ3MgPSBbXG4gICAgICAgICAgICBuZXdWYWx1ZSxcbiAgICAgICAgICAgIC8vIHBhc3MgdW5kZWZpbmVkIGFzIHRoZSBvbGQgdmFsdWUgd2hlbiBpdCdzIGNoYW5nZWQgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgICAgICBvbGRWYWx1ZSA9PT0gSU5JVElBTF9XQVRDSEVSX1ZBTFVFID8gdm9pZCAwIDogaXNNdWx0aVNvdXJjZSAmJiBvbGRWYWx1ZVswXSA9PT0gSU5JVElBTF9XQVRDSEVSX1ZBTFVFID8gW10gOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgIGJvdW5kQ2xlYW51cFxuICAgICAgICAgIF07XG4gICAgICAgICAgb2xkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICBjYWxsID8gY2FsbChjYiwgMywgYXJncykgOiAoXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICBjYiguLi5hcmdzKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgYWN0aXZlV2F0Y2hlciA9IGN1cnJlbnRXYXRjaGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVmZmVjdC5ydW4oKTtcbiAgICB9XG4gIH07XG4gIGlmIChhdWdtZW50Sm9iKSB7XG4gICAgYXVnbWVudEpvYihqb2IpO1xuICB9XG4gIGVmZmVjdCA9IG5ldyBSZWFjdGl2ZUVmZmVjdChnZXR0ZXIpO1xuICBlZmZlY3Quc2NoZWR1bGVyID0gc2NoZWR1bGVyID8gKCkgPT4gc2NoZWR1bGVyKGpvYiwgZmFsc2UpIDogam9iO1xuICBib3VuZENsZWFudXAgPSAoZm4pID0+IG9uV2F0Y2hlckNsZWFudXAoZm4sIGZhbHNlLCBlZmZlY3QpO1xuICBjbGVhbnVwID0gZWZmZWN0Lm9uU3RvcCA9ICgpID0+IHtcbiAgICBjb25zdCBjbGVhbnVwcyA9IGNsZWFudXBNYXAuZ2V0KGVmZmVjdCk7XG4gICAgaWYgKGNsZWFudXBzKSB7XG4gICAgICBpZiAoY2FsbCkge1xuICAgICAgICBjYWxsKGNsZWFudXBzLCA0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgY2xlYW51cDIgb2YgY2xlYW51cHMpIGNsZWFudXAyKCk7XG4gICAgICB9XG4gICAgICBjbGVhbnVwTWFwLmRlbGV0ZShlZmZlY3QpO1xuICAgIH1cbiAgfTtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICBlZmZlY3Qub25UcmFjayA9IG9wdGlvbnMub25UcmFjaztcbiAgICBlZmZlY3Qub25UcmlnZ2VyID0gb3B0aW9ucy5vblRyaWdnZXI7XG4gIH1cbiAgaWYgKGNiKSB7XG4gICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgam9iKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGRWYWx1ZSA9IGVmZmVjdC5ydW4oKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoc2NoZWR1bGVyKSB7XG4gICAgc2NoZWR1bGVyKGpvYi5iaW5kKG51bGwsIHRydWUpLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBlZmZlY3QucnVuKCk7XG4gIH1cbiAgd2F0Y2hIYW5kbGUucGF1c2UgPSBlZmZlY3QucGF1c2UuYmluZChlZmZlY3QpO1xuICB3YXRjaEhhbmRsZS5yZXN1bWUgPSBlZmZlY3QucmVzdW1lLmJpbmQoZWZmZWN0KTtcbiAgd2F0Y2hIYW5kbGUuc3RvcCA9IHdhdGNoSGFuZGxlO1xuICByZXR1cm4gd2F0Y2hIYW5kbGU7XG59XG5mdW5jdGlvbiB0cmF2ZXJzZSh2YWx1ZSwgZGVwdGggPSBJbmZpbml0eSwgc2Vlbikge1xuICBpZiAoZGVwdGggPD0gMCB8fCAhaXNPYmplY3QodmFsdWUpIHx8IHZhbHVlW1wiX192X3NraXBcIl0pIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgc2VlbiA9IHNlZW4gfHwgLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgaWYgKHNlZW4uaGFzKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBzZWVuLmFkZCh2YWx1ZSk7XG4gIGRlcHRoLS07XG4gIGlmIChpc1JlZih2YWx1ZSkpIHtcbiAgICB0cmF2ZXJzZSh2YWx1ZS52YWx1ZSwgZGVwdGgsIHNlZW4pO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdHJhdmVyc2UodmFsdWVbaV0sIGRlcHRoLCBzZWVuKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNTZXQodmFsdWUpIHx8IGlzTWFwKHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goKHYpID0+IHtcbiAgICAgIHRyYXZlcnNlKHYsIGRlcHRoLCBzZWVuKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICB0cmF2ZXJzZSh2YWx1ZVtrZXldLCBkZXB0aCwgc2Vlbik7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModmFsdWUpKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICAgIHRyYXZlcnNlKHZhbHVlW2tleV0sIGRlcHRoLCBzZWVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4qIEB2dWUvcnVudGltZS1jb3JlIHYzLjUuMThcbiogKGMpIDIwMTgtcHJlc2VudCBZdXhpIChFdmFuKSBZb3UgYW5kIFZ1ZSBjb250cmlidXRvcnNcbiogQGxpY2Vuc2UgTUlUXG4qKi9cbmNvbnN0IHN0YWNrID0gW107XG5mdW5jdGlvbiBwdXNoV2FybmluZ0NvbnRleHQodm5vZGUpIHtcbiAgc3RhY2sucHVzaCh2bm9kZSk7XG59XG5mdW5jdGlvbiBwb3BXYXJuaW5nQ29udGV4dCgpIHtcbiAgc3RhY2sucG9wKCk7XG59XG5sZXQgaXNXYXJuaW5nID0gZmFsc2U7XG5mdW5jdGlvbiB3YXJuJDEobXNnLCAuLi5hcmdzKSB7XG4gIGlmIChpc1dhcm5pbmcpIHJldHVybjtcbiAgaXNXYXJuaW5nID0gdHJ1ZTtcbiAgcGF1c2VUcmFja2luZygpO1xuICBjb25zdCBpbnN0YW5jZSA9IHN0YWNrLmxlbmd0aCA/IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdLmNvbXBvbmVudCA6IG51bGw7XG4gIGNvbnN0IGFwcFdhcm5IYW5kbGVyID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuYXBwQ29udGV4dC5jb25maWcud2FybkhhbmRsZXI7XG4gIGNvbnN0IHRyYWNlID0gZ2V0Q29tcG9uZW50VHJhY2UoKTtcbiAgaWYgKGFwcFdhcm5IYW5kbGVyKSB7XG4gICAgY2FsbFdpdGhFcnJvckhhbmRsaW5nKFxuICAgICAgYXBwV2FybkhhbmRsZXIsXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIDExLFxuICAgICAgW1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgICAgbXNnICsgYXJncy5tYXAoKGEpID0+IHtcbiAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSBhLnRvU3RyaW5nKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChhKSkgIT0gbnVsbCA/IF9iIDogSlNPTi5zdHJpbmdpZnkoYSk7XG4gICAgICAgIH0pLmpvaW4oXCJcIiksXG4gICAgICAgIGluc3RhbmNlICYmIGluc3RhbmNlLnByb3h5LFxuICAgICAgICB0cmFjZS5tYXAoXG4gICAgICAgICAgKHsgdm5vZGUgfSkgPT4gYGF0IDwke2Zvcm1hdENvbXBvbmVudE5hbWUoaW5zdGFuY2UsIHZub2RlLnR5cGUpfT5gXG4gICAgICAgICkuam9pbihcIlxcblwiKSxcbiAgICAgICAgdHJhY2VcbiAgICAgIF1cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHdhcm5BcmdzID0gW2BbVnVlIHdhcm5dOiAke21zZ31gLCAuLi5hcmdzXTtcbiAgICBpZiAodHJhY2UubGVuZ3RoICYmIC8vIGF2b2lkIHNwYW1taW5nIGNvbnNvbGUgZHVyaW5nIHRlc3RzXG4gICAgdHJ1ZSkge1xuICAgICAgd2FybkFyZ3MucHVzaChgXG5gLCAuLi5mb3JtYXRUcmFjZSh0cmFjZSkpO1xuICAgIH1cbiAgICBjb25zb2xlLndhcm4oLi4ud2FybkFyZ3MpO1xuICB9XG4gIHJlc2V0VHJhY2tpbmcoKTtcbiAgaXNXYXJuaW5nID0gZmFsc2U7XG59XG5mdW5jdGlvbiBnZXRDb21wb25lbnRUcmFjZSgpIHtcbiAgbGV0IGN1cnJlbnRWTm9kZSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICBpZiAoIWN1cnJlbnRWTm9kZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCBub3JtYWxpemVkU3RhY2sgPSBbXTtcbiAgd2hpbGUgKGN1cnJlbnRWTm9kZSkge1xuICAgIGNvbnN0IGxhc3QgPSBub3JtYWxpemVkU3RhY2tbMF07XG4gICAgaWYgKGxhc3QgJiYgbGFzdC52bm9kZSA9PT0gY3VycmVudFZOb2RlKSB7XG4gICAgICBsYXN0LnJlY3Vyc2VDb3VudCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBub3JtYWxpemVkU3RhY2sucHVzaCh7XG4gICAgICAgIHZub2RlOiBjdXJyZW50Vk5vZGUsXG4gICAgICAgIHJlY3Vyc2VDb3VudDogMFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudEluc3RhbmNlID0gY3VycmVudFZOb2RlLmNvbXBvbmVudCAmJiBjdXJyZW50Vk5vZGUuY29tcG9uZW50LnBhcmVudDtcbiAgICBjdXJyZW50Vk5vZGUgPSBwYXJlbnRJbnN0YW5jZSAmJiBwYXJlbnRJbnN0YW5jZS52bm9kZTtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZFN0YWNrO1xufVxuZnVuY3Rpb24gZm9ybWF0VHJhY2UodHJhY2UpIHtcbiAgY29uc3QgbG9ncyA9IFtdO1xuICB0cmFjZS5mb3JFYWNoKChlbnRyeSwgaSkgPT4ge1xuICAgIGxvZ3MucHVzaCguLi5pID09PSAwID8gW10gOiBbYFxuYF0sIC4uLmZvcm1hdFRyYWNlRW50cnkoZW50cnkpKTtcbiAgfSk7XG4gIHJldHVybiBsb2dzO1xufVxuZnVuY3Rpb24gZm9ybWF0VHJhY2VFbnRyeSh7IHZub2RlLCByZWN1cnNlQ291bnQgfSkge1xuICBjb25zdCBwb3N0Zml4ID0gcmVjdXJzZUNvdW50ID4gMCA/IGAuLi4gKCR7cmVjdXJzZUNvdW50fSByZWN1cnNpdmUgY2FsbHMpYCA6IGBgO1xuICBjb25zdCBpc1Jvb3QgPSB2bm9kZS5jb21wb25lbnQgPyB2bm9kZS5jb21wb25lbnQucGFyZW50ID09IG51bGwgOiBmYWxzZTtcbiAgY29uc3Qgb3BlbiA9IGAgYXQgPCR7Zm9ybWF0Q29tcG9uZW50TmFtZShcbiAgICB2bm9kZS5jb21wb25lbnQsXG4gICAgdm5vZGUudHlwZSxcbiAgICBpc1Jvb3RcbiAgKX1gO1xuICBjb25zdCBjbG9zZSA9IGA+YCArIHBvc3RmaXg7XG4gIHJldHVybiB2bm9kZS5wcm9wcyA/IFtvcGVuLCAuLi5mb3JtYXRQcm9wcyh2bm9kZS5wcm9wcyksIGNsb3NlXSA6IFtvcGVuICsgY2xvc2VdO1xufVxuZnVuY3Rpb24gZm9ybWF0UHJvcHMocHJvcHMpIHtcbiAgY29uc3QgcmVzID0gW107XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gIGtleXMuc2xpY2UoMCwgMykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgcmVzLnB1c2goLi4uZm9ybWF0UHJvcChrZXksIHByb3BzW2tleV0pKTtcbiAgfSk7XG4gIGlmIChrZXlzLmxlbmd0aCA+IDMpIHtcbiAgICByZXMucHVzaChgIC4uLmApO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBmb3JtYXRQcm9wKGtleSwgdmFsdWUsIHJhdykge1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgcmV0dXJuIHJhdyA/IHZhbHVlIDogW2Ake2tleX09JHt2YWx1ZX1gXTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIiB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHJhdyA/IHZhbHVlIDogW2Ake2tleX09JHt2YWx1ZX1gXTtcbiAgfSBlbHNlIGlmIChpc1JlZih2YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IGZvcm1hdFByb3Aoa2V5LCB0b1Jhdyh2YWx1ZS52YWx1ZSksIHRydWUpO1xuICAgIHJldHVybiByYXcgPyB2YWx1ZSA6IFtgJHtrZXl9PVJlZjxgLCB2YWx1ZSwgYD5gXTtcbiAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHJldHVybiBbYCR7a2V5fT1mbiR7dmFsdWUubmFtZSA/IGA8JHt2YWx1ZS5uYW1lfT5gIDogYGB9YF07XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSB0b1Jhdyh2YWx1ZSk7XG4gICAgcmV0dXJuIHJhdyA/IHZhbHVlIDogW2Ake2tleX09YCwgdmFsdWVdO1xuICB9XG59XG5jb25zdCBFcnJvclR5cGVTdHJpbmdzJDEgPSB7XG4gIFtcInNwXCJdOiBcInNlcnZlclByZWZldGNoIGhvb2tcIixcbiAgW1wiYmNcIl06IFwiYmVmb3JlQ3JlYXRlIGhvb2tcIixcbiAgW1wiY1wiXTogXCJjcmVhdGVkIGhvb2tcIixcbiAgW1wiYm1cIl06IFwiYmVmb3JlTW91bnQgaG9va1wiLFxuICBbXCJtXCJdOiBcIm1vdW50ZWQgaG9va1wiLFxuICBbXCJidVwiXTogXCJiZWZvcmVVcGRhdGUgaG9va1wiLFxuICBbXCJ1XCJdOiBcInVwZGF0ZWRcIixcbiAgW1wiYnVtXCJdOiBcImJlZm9yZVVubW91bnQgaG9va1wiLFxuICBbXCJ1bVwiXTogXCJ1bm1vdW50ZWQgaG9va1wiLFxuICBbXCJhXCJdOiBcImFjdGl2YXRlZCBob29rXCIsXG4gIFtcImRhXCJdOiBcImRlYWN0aXZhdGVkIGhvb2tcIixcbiAgW1wiZWNcIl06IFwiZXJyb3JDYXB0dXJlZCBob29rXCIsXG4gIFtcInJ0Y1wiXTogXCJyZW5kZXJUcmFja2VkIGhvb2tcIixcbiAgW1wicnRnXCJdOiBcInJlbmRlclRyaWdnZXJlZCBob29rXCIsXG4gIFswXTogXCJzZXR1cCBmdW5jdGlvblwiLFxuICBbMV06IFwicmVuZGVyIGZ1bmN0aW9uXCIsXG4gIFsyXTogXCJ3YXRjaGVyIGdldHRlclwiLFxuICBbM106IFwid2F0Y2hlciBjYWxsYmFja1wiLFxuICBbNF06IFwid2F0Y2hlciBjbGVhbnVwIGZ1bmN0aW9uXCIsXG4gIFs1XTogXCJuYXRpdmUgZXZlbnQgaGFuZGxlclwiLFxuICBbNl06IFwiY29tcG9uZW50IGV2ZW50IGhhbmRsZXJcIixcbiAgWzddOiBcInZub2RlIGhvb2tcIixcbiAgWzhdOiBcImRpcmVjdGl2ZSBob29rXCIsXG4gIFs5XTogXCJ0cmFuc2l0aW9uIGhvb2tcIixcbiAgWzEwXTogXCJhcHAgZXJyb3JIYW5kbGVyXCIsXG4gIFsxMV06IFwiYXBwIHdhcm5IYW5kbGVyXCIsXG4gIFsxMl06IFwicmVmIGZ1bmN0aW9uXCIsXG4gIFsxM106IFwiYXN5bmMgY29tcG9uZW50IGxvYWRlclwiLFxuICBbMTRdOiBcInNjaGVkdWxlciBmbHVzaFwiLFxuICBbMTVdOiBcImNvbXBvbmVudCB1cGRhdGVcIixcbiAgWzE2XTogXCJhcHAgdW5tb3VudCBjbGVhbnVwIGZ1bmN0aW9uXCJcbn07XG5mdW5jdGlvbiBjYWxsV2l0aEVycm9ySGFuZGxpbmcoZm4sIGluc3RhbmNlLCB0eXBlLCBhcmdzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGFyZ3MgPyBmbiguLi5hcmdzKSA6IGZuKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGhhbmRsZUVycm9yKGVyciwgaW5zdGFuY2UsIHR5cGUpO1xuICB9XG59XG5mdW5jdGlvbiBjYWxsV2l0aEFzeW5jRXJyb3JIYW5kbGluZyhmbiwgaW5zdGFuY2UsIHR5cGUsIGFyZ3MpIHtcbiAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgY29uc3QgcmVzID0gY2FsbFdpdGhFcnJvckhhbmRsaW5nKGZuLCBpbnN0YW5jZSwgdHlwZSwgYXJncyk7XG4gICAgaWYgKHJlcyAmJiBpc1Byb21pc2UocmVzKSkge1xuICAgICAgcmVzLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZXJyLCBpbnN0YW5jZSwgdHlwZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICBpZiAoaXNBcnJheShmbikpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZXMucHVzaChjYWxsV2l0aEFzeW5jRXJyb3JIYW5kbGluZyhmbltpXSwgaW5zdGFuY2UsIHR5cGUsIGFyZ3MpKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgd2FybiQxKFxuICAgICAgYEludmFsaWQgdmFsdWUgdHlwZSBwYXNzZWQgdG8gY2FsbFdpdGhBc3luY0Vycm9ySGFuZGxpbmcoKTogJHt0eXBlb2YgZm59YFxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVyciwgaW5zdGFuY2UsIHR5cGUsIHRocm93SW5EZXYgPSB0cnVlKSB7XG4gIGNvbnN0IGNvbnRleHRWTm9kZSA9IGluc3RhbmNlID8gaW5zdGFuY2Uudm5vZGUgOiBudWxsO1xuICBjb25zdCB7IGVycm9ySGFuZGxlciwgdGhyb3dVbmhhbmRsZWRFcnJvckluUHJvZHVjdGlvbiB9ID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuYXBwQ29udGV4dC5jb25maWcgfHwgRU1QVFlfT0JKO1xuICBpZiAoaW5zdGFuY2UpIHtcbiAgICBsZXQgY3VyID0gaW5zdGFuY2UucGFyZW50O1xuICAgIGNvbnN0IGV4cG9zZWRJbnN0YW5jZSA9IGluc3RhbmNlLnByb3h5O1xuICAgIGNvbnN0IGVycm9ySW5mbyA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBFcnJvclR5cGVTdHJpbmdzJDFbdHlwZV0gOiBgaHR0cHM6Ly92dWVqcy5vcmcvZXJyb3ItcmVmZXJlbmNlLyNydW50aW1lLSR7dHlwZX1gO1xuICAgIHdoaWxlIChjdXIpIHtcbiAgICAgIGNvbnN0IGVycm9yQ2FwdHVyZWRIb29rcyA9IGN1ci5lYztcbiAgICAgIGlmIChlcnJvckNhcHR1cmVkSG9va3MpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcnJvckNhcHR1cmVkSG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZXJyb3JDYXB0dXJlZEhvb2tzW2ldKGVyciwgZXhwb3NlZEluc3RhbmNlLCBlcnJvckluZm8pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY3VyID0gY3VyLnBhcmVudDtcbiAgICB9XG4gICAgaWYgKGVycm9ySGFuZGxlcikge1xuICAgICAgcGF1c2VUcmFja2luZygpO1xuICAgICAgY2FsbFdpdGhFcnJvckhhbmRsaW5nKGVycm9ySGFuZGxlciwgbnVsbCwgMTAsIFtcbiAgICAgICAgZXJyLFxuICAgICAgICBleHBvc2VkSW5zdGFuY2UsXG4gICAgICAgIGVycm9ySW5mb1xuICAgICAgXSk7XG4gICAgICByZXNldFRyYWNraW5nKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGxvZ0Vycm9yKGVyciwgdHlwZSwgY29udGV4dFZOb2RlLCB0aHJvd0luRGV2LCB0aHJvd1VuaGFuZGxlZEVycm9ySW5Qcm9kdWN0aW9uKTtcbn1cbmZ1bmN0aW9uIGxvZ0Vycm9yKGVyciwgdHlwZSwgY29udGV4dFZOb2RlLCB0aHJvd0luRGV2ID0gdHJ1ZSwgdGhyb3dJblByb2QgPSBmYWxzZSkge1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGNvbnN0IGluZm8gPSBFcnJvclR5cGVTdHJpbmdzJDFbdHlwZV07XG4gICAgaWYgKGNvbnRleHRWTm9kZSkge1xuICAgICAgcHVzaFdhcm5pbmdDb250ZXh0KGNvbnRleHRWTm9kZSk7XG4gICAgfVxuICAgIHdhcm4kMShgVW5oYW5kbGVkIGVycm9yJHtpbmZvID8gYCBkdXJpbmcgZXhlY3V0aW9uIG9mICR7aW5mb31gIDogYGB9YCk7XG4gICAgaWYgKGNvbnRleHRWTm9kZSkge1xuICAgICAgcG9wV2FybmluZ0NvbnRleHQoKTtcbiAgICB9XG4gICAgaWYgKHRocm93SW5EZXYpIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0aHJvd0luUHJvZCkge1xuICAgIHRocm93IGVycjtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cbmNvbnN0IHF1ZXVlID0gW107XG5sZXQgZmx1c2hJbmRleCA9IC0xO1xuY29uc3QgcGVuZGluZ1Bvc3RGbHVzaENicyA9IFtdO1xubGV0IGFjdGl2ZVBvc3RGbHVzaENicyA9IG51bGw7XG5sZXQgcG9zdEZsdXNoSW5kZXggPSAwO1xuY29uc3QgcmVzb2x2ZWRQcm9taXNlID0gLyogQF9fUFVSRV9fICovIFByb21pc2UucmVzb2x2ZSgpO1xubGV0IGN1cnJlbnRGbHVzaFByb21pc2UgPSBudWxsO1xuY29uc3QgUkVDVVJTSU9OX0xJTUlUID0gMTAwO1xuZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgY29uc3QgcDIgPSBjdXJyZW50Rmx1c2hQcm9taXNlIHx8IHJlc29sdmVkUHJvbWlzZTtcbiAgcmV0dXJuIGZuID8gcDIudGhlbih0aGlzID8gZm4uYmluZCh0aGlzKSA6IGZuKSA6IHAyO1xufVxuZnVuY3Rpb24gZmluZEluc2VydGlvbkluZGV4KGlkKSB7XG4gIGxldCBzdGFydCA9IGZsdXNoSW5kZXggKyAxO1xuICBsZXQgZW5kID0gcXVldWUubGVuZ3RoO1xuICB3aGlsZSAoc3RhcnQgPCBlbmQpIHtcbiAgICBjb25zdCBtaWRkbGUgPSBzdGFydCArIGVuZCA+Pj4gMTtcbiAgICBjb25zdCBtaWRkbGVKb2IgPSBxdWV1ZVttaWRkbGVdO1xuICAgIGNvbnN0IG1pZGRsZUpvYklkID0gZ2V0SWQobWlkZGxlSm9iKTtcbiAgICBpZiAobWlkZGxlSm9iSWQgPCBpZCB8fCBtaWRkbGVKb2JJZCA9PT0gaWQgJiYgbWlkZGxlSm9iLmZsYWdzICYgMikge1xuICAgICAgc3RhcnQgPSBtaWRkbGUgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmQgPSBtaWRkbGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGFydDtcbn1cbmZ1bmN0aW9uIHF1ZXVlSm9iKGpvYikge1xuICBpZiAoIShqb2IuZmxhZ3MgJiAxKSkge1xuICAgIGNvbnN0IGpvYklkID0gZ2V0SWQoam9iKTtcbiAgICBjb25zdCBsYXN0Sm9iID0gcXVldWVbcXVldWUubGVuZ3RoIC0gMV07XG4gICAgaWYgKCFsYXN0Sm9iIHx8IC8vIGZhc3QgcGF0aCB3aGVuIHRoZSBqb2IgaWQgaXMgbGFyZ2VyIHRoYW4gdGhlIHRhaWxcbiAgICAhKGpvYi5mbGFncyAmIDIpICYmIGpvYklkID49IGdldElkKGxhc3RKb2IpKSB7XG4gICAgICBxdWV1ZS5wdXNoKGpvYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXVlLnNwbGljZShmaW5kSW5zZXJ0aW9uSW5kZXgoam9iSWQpLCAwLCBqb2IpO1xuICAgIH1cbiAgICBqb2IuZmxhZ3MgfD0gMTtcbiAgICBxdWV1ZUZsdXNoKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHF1ZXVlRmx1c2goKSB7XG4gIGlmICghY3VycmVudEZsdXNoUHJvbWlzZSkge1xuICAgIGN1cnJlbnRGbHVzaFByb21pc2UgPSByZXNvbHZlZFByb21pc2UudGhlbihmbHVzaEpvYnMpO1xuICB9XG59XG5mdW5jdGlvbiBxdWV1ZVBvc3RGbHVzaENiKGNiKSB7XG4gIGlmICghaXNBcnJheShjYikpIHtcbiAgICBpZiAoYWN0aXZlUG9zdEZsdXNoQ2JzICYmIGNiLmlkID09PSAtMSkge1xuICAgICAgYWN0aXZlUG9zdEZsdXNoQ2JzLnNwbGljZShwb3N0Rmx1c2hJbmRleCArIDEsIDAsIGNiKTtcbiAgICB9IGVsc2UgaWYgKCEoY2IuZmxhZ3MgJiAxKSkge1xuICAgICAgcGVuZGluZ1Bvc3RGbHVzaENicy5wdXNoKGNiKTtcbiAgICAgIGNiLmZsYWdzIHw9IDE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBlbmRpbmdQb3N0Rmx1c2hDYnMucHVzaCguLi5jYik7XG4gIH1cbiAgcXVldWVGbHVzaCgpO1xufVxuZnVuY3Rpb24gZmx1c2hQcmVGbHVzaENicyhpbnN0YW5jZSwgc2VlbiwgaSA9IGZsdXNoSW5kZXggKyAxKSB7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgc2VlbiA9IHNlZW4gfHwgLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgfVxuICBmb3IgKDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2IgPSBxdWV1ZVtpXTtcbiAgICBpZiAoY2IgJiYgY2IuZmxhZ3MgJiAyKSB7XG4gICAgICBpZiAoaW5zdGFuY2UgJiYgY2IuaWQgIT09IGluc3RhbmNlLnVpZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGNoZWNrUmVjdXJzaXZlVXBkYXRlcyhzZWVuLCBjYikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBxdWV1ZS5zcGxpY2UoaSwgMSk7XG4gICAgICBpLS07XG4gICAgICBpZiAoY2IuZmxhZ3MgJiA0KSB7XG4gICAgICAgIGNiLmZsYWdzICY9IC0yO1xuICAgICAgfVxuICAgICAgY2IoKTtcbiAgICAgIGlmICghKGNiLmZsYWdzICYgNCkpIHtcbiAgICAgICAgY2IuZmxhZ3MgJj0gLTI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBmbHVzaFBvc3RGbHVzaENicyhzZWVuKSB7XG4gIGlmIChwZW5kaW5nUG9zdEZsdXNoQ2JzLmxlbmd0aCkge1xuICAgIGNvbnN0IGRlZHVwZWQgPSBbLi4ubmV3IFNldChwZW5kaW5nUG9zdEZsdXNoQ2JzKV0uc29ydChcbiAgICAgIChhLCBiKSA9PiBnZXRJZChhKSAtIGdldElkKGIpXG4gICAgKTtcbiAgICBwZW5kaW5nUG9zdEZsdXNoQ2JzLmxlbmd0aCA9IDA7XG4gICAgaWYgKGFjdGl2ZVBvc3RGbHVzaENicykge1xuICAgICAgYWN0aXZlUG9zdEZsdXNoQ2JzLnB1c2goLi4uZGVkdXBlZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFjdGl2ZVBvc3RGbHVzaENicyA9IGRlZHVwZWQ7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIHNlZW4gPSBzZWVuIHx8IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGZvciAocG9zdEZsdXNoSW5kZXggPSAwOyBwb3N0Rmx1c2hJbmRleCA8IGFjdGl2ZVBvc3RGbHVzaENicy5sZW5ndGg7IHBvc3RGbHVzaEluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNiID0gYWN0aXZlUG9zdEZsdXNoQ2JzW3Bvc3RGbHVzaEluZGV4XTtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGNoZWNrUmVjdXJzaXZlVXBkYXRlcyhzZWVuLCBjYikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoY2IuZmxhZ3MgJiA0KSB7XG4gICAgICAgIGNiLmZsYWdzICY9IC0yO1xuICAgICAgfVxuICAgICAgaWYgKCEoY2IuZmxhZ3MgJiA4KSkgY2IoKTtcbiAgICAgIGNiLmZsYWdzICY9IC0yO1xuICAgIH1cbiAgICBhY3RpdmVQb3N0Rmx1c2hDYnMgPSBudWxsO1xuICAgIHBvc3RGbHVzaEluZGV4ID0gMDtcbiAgfVxufVxuY29uc3QgZ2V0SWQgPSAoam9iKSA9PiBqb2IuaWQgPT0gbnVsbCA/IGpvYi5mbGFncyAmIDIgPyAtMSA6IEluZmluaXR5IDogam9iLmlkO1xuZnVuY3Rpb24gZmx1c2hKb2JzKHNlZW4pIHtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICBzZWVuID0gc2VlbiB8fCAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICB9XG4gIGNvbnN0IGNoZWNrID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IChqb2IpID0+IGNoZWNrUmVjdXJzaXZlVXBkYXRlcyhzZWVuLCBqb2IpIDogTk9PUDtcbiAgdHJ5IHtcbiAgICBmb3IgKGZsdXNoSW5kZXggPSAwOyBmbHVzaEluZGV4IDwgcXVldWUubGVuZ3RoOyBmbHVzaEluZGV4KyspIHtcbiAgICAgIGNvbnN0IGpvYiA9IHF1ZXVlW2ZsdXNoSW5kZXhdO1xuICAgICAgaWYgKGpvYiAmJiAhKGpvYi5mbGFncyAmIDgpKSB7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGNoZWNrKGpvYikpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoam9iLmZsYWdzICYgNCkge1xuICAgICAgICAgIGpvYi5mbGFncyAmPSB+MTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsV2l0aEVycm9ySGFuZGxpbmcoXG4gICAgICAgICAgam9iLFxuICAgICAgICAgIGpvYi5pLFxuICAgICAgICAgIGpvYi5pID8gMTUgOiAxNFxuICAgICAgICApO1xuICAgICAgICBpZiAoIShqb2IuZmxhZ3MgJiA0KSkge1xuICAgICAgICAgIGpvYi5mbGFncyAmPSB+MTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBmb3IgKDsgZmx1c2hJbmRleCA8IHF1ZXVlLmxlbmd0aDsgZmx1c2hJbmRleCsrKSB7XG4gICAgICBjb25zdCBqb2IgPSBxdWV1ZVtmbHVzaEluZGV4XTtcbiAgICAgIGlmIChqb2IpIHtcbiAgICAgICAgam9iLmZsYWdzICY9IC0yO1xuICAgICAgfVxuICAgIH1cbiAgICBmbHVzaEluZGV4ID0gLTE7XG4gICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICBmbHVzaFBvc3RGbHVzaENicyhzZWVuKTtcbiAgICBjdXJyZW50Rmx1c2hQcm9taXNlID0gbnVsbDtcbiAgICBpZiAocXVldWUubGVuZ3RoIHx8IHBlbmRpbmdQb3N0Rmx1c2hDYnMubGVuZ3RoKSB7XG4gICAgICBmbHVzaEpvYnMoc2Vlbik7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjaGVja1JlY3Vyc2l2ZVVwZGF0ZXMoc2VlbiwgZm4pIHtcbiAgY29uc3QgY291bnQgPSBzZWVuLmdldChmbikgfHwgMDtcbiAgaWYgKGNvdW50ID4gUkVDVVJTSU9OX0xJTUlUKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBmbi5pO1xuICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBpbnN0YW5jZSAmJiBnZXRDb21wb25lbnROYW1lKGluc3RhbmNlLnR5cGUpO1xuICAgIGhhbmRsZUVycm9yKFxuICAgICAgYE1heGltdW0gcmVjdXJzaXZlIHVwZGF0ZXMgZXhjZWVkZWQke2NvbXBvbmVudE5hbWUgPyBgIGluIGNvbXBvbmVudCA8JHtjb21wb25lbnROYW1lfT5gIDogYGB9LiBUaGlzIG1lYW5zIHlvdSBoYXZlIGEgcmVhY3RpdmUgZWZmZWN0IHRoYXQgaXMgbXV0YXRpbmcgaXRzIG93biBkZXBlbmRlbmNpZXMgYW5kIHRodXMgcmVjdXJzaXZlbHkgdHJpZ2dlcmluZyBpdHNlbGYuIFBvc3NpYmxlIHNvdXJjZXMgaW5jbHVkZSBjb21wb25lbnQgdGVtcGxhdGUsIHJlbmRlciBmdW5jdGlvbiwgdXBkYXRlZCBob29rIG9yIHdhdGNoZXIgc291cmNlIGZ1bmN0aW9uLmAsXG4gICAgICBudWxsLFxuICAgICAgMTBcbiAgICApO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHNlZW4uc2V0KGZuLCBjb3VudCArIDEpO1xuICByZXR1cm4gZmFsc2U7XG59XG5sZXQgaXNIbXJVcGRhdGluZyA9IGZhbHNlO1xuY29uc3QgaG1yRGlydHlDb21wb25lbnRzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbmlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gIGdldEdsb2JhbFRoaXMoKS5fX1ZVRV9ITVJfUlVOVElNRV9fID0ge1xuICAgIGNyZWF0ZVJlY29yZDogdHJ5V3JhcChjcmVhdGVSZWNvcmQpLFxuICAgIHJlcmVuZGVyOiB0cnlXcmFwKHJlcmVuZGVyKSxcbiAgICByZWxvYWQ6IHRyeVdyYXAocmVsb2FkKVxuICB9O1xufVxuY29uc3QgbWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbmZ1bmN0aW9uIHJlZ2lzdGVySE1SKGluc3RhbmNlKSB7XG4gIGNvbnN0IGlkID0gaW5zdGFuY2UudHlwZS5fX2htcklkO1xuICBsZXQgcmVjb3JkID0gbWFwLmdldChpZCk7XG4gIGlmICghcmVjb3JkKSB7XG4gICAgY3JlYXRlUmVjb3JkKGlkLCBpbnN0YW5jZS50eXBlKTtcbiAgICByZWNvcmQgPSBtYXAuZ2V0KGlkKTtcbiAgfVxuICByZWNvcmQuaW5zdGFuY2VzLmFkZChpbnN0YW5jZSk7XG59XG5mdW5jdGlvbiB1bnJlZ2lzdGVySE1SKGluc3RhbmNlKSB7XG4gIG1hcC5nZXQoaW5zdGFuY2UudHlwZS5fX2htcklkKS5pbnN0YW5jZXMuZGVsZXRlKGluc3RhbmNlKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlY29yZChpZCwgaW5pdGlhbERlZikge1xuICBpZiAobWFwLmhhcyhpZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbWFwLnNldChpZCwge1xuICAgIGluaXRpYWxEZWY6IG5vcm1hbGl6ZUNsYXNzQ29tcG9uZW50KGluaXRpYWxEZWYpLFxuICAgIGluc3RhbmNlczogLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKVxuICB9KTtcbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBub3JtYWxpemVDbGFzc0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGlzQ2xhc3NDb21wb25lbnQoY29tcG9uZW50KSA/IGNvbXBvbmVudC5fX3ZjY09wdHMgOiBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiByZXJlbmRlcihpZCwgbmV3UmVuZGVyKSB7XG4gIGNvbnN0IHJlY29yZCA9IG1hcC5nZXQoaWQpO1xuICBpZiAoIXJlY29yZCkge1xuICAgIHJldHVybjtcbiAgfVxuICByZWNvcmQuaW5pdGlhbERlZi5yZW5kZXIgPSBuZXdSZW5kZXI7XG4gIFsuLi5yZWNvcmQuaW5zdGFuY2VzXS5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgIGlmIChuZXdSZW5kZXIpIHtcbiAgICAgIGluc3RhbmNlLnJlbmRlciA9IG5ld1JlbmRlcjtcbiAgICAgIG5vcm1hbGl6ZUNsYXNzQ29tcG9uZW50KGluc3RhbmNlLnR5cGUpLnJlbmRlciA9IG5ld1JlbmRlcjtcbiAgICB9XG4gICAgaW5zdGFuY2UucmVuZGVyQ2FjaGUgPSBbXTtcbiAgICBpc0htclVwZGF0aW5nID0gdHJ1ZTtcbiAgICBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICBpc0htclVwZGF0aW5nID0gZmFsc2U7XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVsb2FkKGlkLCBuZXdDb21wKSB7XG4gIGNvbnN0IHJlY29yZCA9IG1hcC5nZXQoaWQpO1xuICBpZiAoIXJlY29yZCkgcmV0dXJuO1xuICBuZXdDb21wID0gbm9ybWFsaXplQ2xhc3NDb21wb25lbnQobmV3Q29tcCk7XG4gIHVwZGF0ZUNvbXBvbmVudERlZihyZWNvcmQuaW5pdGlhbERlZiwgbmV3Q29tcCk7XG4gIGNvbnN0IGluc3RhbmNlcyA9IFsuLi5yZWNvcmQuaW5zdGFuY2VzXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlc1tpXTtcbiAgICBjb25zdCBvbGRDb21wID0gbm9ybWFsaXplQ2xhc3NDb21wb25lbnQoaW5zdGFuY2UudHlwZSk7XG4gICAgbGV0IGRpcnR5SW5zdGFuY2VzID0gaG1yRGlydHlDb21wb25lbnRzLmdldChvbGRDb21wKTtcbiAgICBpZiAoIWRpcnR5SW5zdGFuY2VzKSB7XG4gICAgICBpZiAob2xkQ29tcCAhPT0gcmVjb3JkLmluaXRpYWxEZWYpIHtcbiAgICAgICAgdXBkYXRlQ29tcG9uZW50RGVmKG9sZENvbXAsIG5ld0NvbXApO1xuICAgICAgfVxuICAgICAgaG1yRGlydHlDb21wb25lbnRzLnNldChvbGRDb21wLCBkaXJ0eUluc3RhbmNlcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpO1xuICAgIH1cbiAgICBkaXJ0eUluc3RhbmNlcy5hZGQoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLmFwcENvbnRleHQucHJvcHNDYWNoZS5kZWxldGUoaW5zdGFuY2UudHlwZSk7XG4gICAgaW5zdGFuY2UuYXBwQ29udGV4dC5lbWl0c0NhY2hlLmRlbGV0ZShpbnN0YW5jZS50eXBlKTtcbiAgICBpbnN0YW5jZS5hcHBDb250ZXh0Lm9wdGlvbnNDYWNoZS5kZWxldGUoaW5zdGFuY2UudHlwZSk7XG4gICAgaWYgKGluc3RhbmNlLmNlUmVsb2FkKSB7XG4gICAgICBkaXJ0eUluc3RhbmNlcy5hZGQoaW5zdGFuY2UpO1xuICAgICAgaW5zdGFuY2UuY2VSZWxvYWQobmV3Q29tcC5zdHlsZXMpO1xuICAgICAgZGlydHlJbnN0YW5jZXMuZGVsZXRlKGluc3RhbmNlKTtcbiAgICB9IGVsc2UgaWYgKGluc3RhbmNlLnBhcmVudCkge1xuICAgICAgcXVldWVKb2IoKCkgPT4ge1xuICAgICAgICBpc0htclVwZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UucGFyZW50LnVwZGF0ZSgpO1xuICAgICAgICBpc0htclVwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIGRpcnR5SW5zdGFuY2VzLmRlbGV0ZShpbnN0YW5jZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGluc3RhbmNlLmFwcENvbnRleHQucmVsb2FkKSB7XG4gICAgICBpbnN0YW5jZS5hcHBDb250ZXh0LnJlbG9hZCgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIFwiW0hNUl0gUm9vdCBvciBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlIG1vZGlmaWVkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLnJvb3QuY2UgJiYgaW5zdGFuY2UgIT09IGluc3RhbmNlLnJvb3QpIHtcbiAgICAgIGluc3RhbmNlLnJvb3QuY2UuX3JlbW92ZUNoaWxkU3R5bGUob2xkQ29tcCk7XG4gICAgfVxuICB9XG4gIHF1ZXVlUG9zdEZsdXNoQ2IoKCkgPT4ge1xuICAgIGhtckRpcnR5Q29tcG9uZW50cy5jbGVhcigpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudERlZihvbGRDb21wLCBuZXdDb21wKSB7XG4gIGV4dGVuZChvbGRDb21wLCBuZXdDb21wKTtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2xkQ29tcCkge1xuICAgIGlmIChrZXkgIT09IFwiX19maWxlXCIgJiYgIShrZXkgaW4gbmV3Q29tcCkpIHtcbiAgICAgIGRlbGV0ZSBvbGRDb21wW2tleV07XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB0cnlXcmFwKGZuKSB7XG4gIHJldHVybiAoaWQsIGFyZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZm4oaWQsIGFyZyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFtITVJdIFNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyBWdWUgY29tcG9uZW50IGhvdC1yZWxvYWQuIEZ1bGwgcmVsb2FkIHJlcXVpcmVkLmBcbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxubGV0IGRldnRvb2xzJDE7XG5sZXQgYnVmZmVyID0gW107XG5sZXQgZGV2dG9vbHNOb3RJbnN0YWxsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGVtaXQkMShldmVudCwgLi4uYXJncykge1xuICBpZiAoZGV2dG9vbHMkMSkge1xuICAgIGRldnRvb2xzJDEuZW1pdChldmVudCwgLi4uYXJncyk7XG4gIH0gZWxzZSBpZiAoIWRldnRvb2xzTm90SW5zdGFsbGVkKSB7XG4gICAgYnVmZmVyLnB1c2goeyBldmVudCwgYXJncyB9KTtcbiAgfVxufVxuZnVuY3Rpb24gc2V0RGV2dG9vbHNIb29rJDEoaG9vaywgdGFyZ2V0KSB7XG4gIHZhciBfYSwgX2I7XG4gIGRldnRvb2xzJDEgPSBob29rO1xuICBpZiAoZGV2dG9vbHMkMSkge1xuICAgIGRldnRvb2xzJDEuZW5hYmxlZCA9IHRydWU7XG4gICAgYnVmZmVyLmZvckVhY2goKHsgZXZlbnQsIGFyZ3MgfSkgPT4gZGV2dG9vbHMkMS5lbWl0KGV2ZW50LCAuLi5hcmdzKSk7XG4gICAgYnVmZmVyID0gW107XG4gIH0gZWxzZSBpZiAoXG4gICAgLy8gaGFuZGxlIGxhdGUgZGV2dG9vbHMgaW5qZWN0aW9uIC0gb25seSBkbyB0aGlzIGlmIHdlIGFyZSBpbiBhbiBhY3R1YWxcbiAgICAvLyBicm93c2VyIGVudmlyb25tZW50IHRvIGF2b2lkIHRoZSB0aW1lciBoYW5kbGUgc3RhbGxpbmcgdGVzdCBydW5uZXIgZXhpdFxuICAgIC8vICgjNDgxNSlcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIC8vIHNvbWUgZW52cyBtb2NrIHdpbmRvdyBidXQgbm90IGZ1bGx5XG4gICAgd2luZG93LkhUTUxFbGVtZW50ICYmIC8vIGFsc28gZXhjbHVkZSBqc2RvbVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICEoKF9iID0gKF9hID0gd2luZG93Lm5hdmlnYXRvcikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnVzZXJBZ2VudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLmluY2x1ZGVzKFwianNkb21cIikpXG4gICkge1xuICAgIGNvbnN0IHJlcGxheSA9IHRhcmdldC5fX1ZVRV9ERVZUT09MU19IT09LX1JFUExBWV9fID0gdGFyZ2V0Ll9fVlVFX0RFVlRPT0xTX0hPT0tfUkVQTEFZX18gfHwgW107XG4gICAgcmVwbGF5LnB1c2goKG5ld0hvb2spID0+IHtcbiAgICAgIHNldERldnRvb2xzSG9vayQxKG5ld0hvb2ssIHRhcmdldCk7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIWRldnRvb2xzJDEpIHtcbiAgICAgICAgdGFyZ2V0Ll9fVlVFX0RFVlRPT0xTX0hPT0tfUkVQTEFZX18gPSBudWxsO1xuICAgICAgICBkZXZ0b29sc05vdEluc3RhbGxlZCA9IHRydWU7XG4gICAgICAgIGJ1ZmZlciA9IFtdO1xuICAgICAgfVxuICAgIH0sIDNlMyk7XG4gIH0gZWxzZSB7XG4gICAgZGV2dG9vbHNOb3RJbnN0YWxsZWQgPSB0cnVlO1xuICAgIGJ1ZmZlciA9IFtdO1xuICB9XG59XG5mdW5jdGlvbiBkZXZ0b29sc0luaXRBcHAoYXBwLCB2ZXJzaW9uMikge1xuICBlbWl0JDEoXCJhcHA6aW5pdFwiLCBhcHAsIHZlcnNpb24yLCB7XG4gICAgRnJhZ21lbnQsXG4gICAgVGV4dCxcbiAgICBDb21tZW50LFxuICAgIFN0YXRpY1xuICB9KTtcbn1cbmZ1bmN0aW9uIGRldnRvb2xzVW5tb3VudEFwcChhcHApIHtcbiAgZW1pdCQxKFwiYXBwOnVubW91bnRcIiwgYXBwKTtcbn1cbmNvbnN0IGRldnRvb2xzQ29tcG9uZW50QWRkZWQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlRGV2dG9vbHNDb21wb25lbnRIb29rKFxuICBcImNvbXBvbmVudDphZGRlZFwiXG4gIC8qIENPTVBPTkVOVF9BRERFRCAqL1xuKTtcbmNvbnN0IGRldnRvb2xzQ29tcG9uZW50VXBkYXRlZCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVEZXZ0b29sc0NvbXBvbmVudEhvb2soXG4gIFwiY29tcG9uZW50OnVwZGF0ZWRcIlxuICAvKiBDT01QT05FTlRfVVBEQVRFRCAqL1xuKTtcbmNvbnN0IF9kZXZ0b29sc0NvbXBvbmVudFJlbW92ZWQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlRGV2dG9vbHNDb21wb25lbnRIb29rKFxuICBcImNvbXBvbmVudDpyZW1vdmVkXCJcbiAgLyogQ09NUE9ORU5UX1JFTU9WRUQgKi9cbik7XG5jb25zdCBkZXZ0b29sc0NvbXBvbmVudFJlbW92ZWQgPSAoY29tcG9uZW50KSA9PiB7XG4gIGlmIChkZXZ0b29scyQxICYmIHR5cGVvZiBkZXZ0b29scyQxLmNsZWFudXBCdWZmZXIgPT09IFwiZnVuY3Rpb25cIiAmJiAvLyByZW1vdmUgdGhlIGNvbXBvbmVudCBpZiBpdCB3YXNuJ3QgYnVmZmVyZWRcbiAgIWRldnRvb2xzJDEuY2xlYW51cEJ1ZmZlcihjb21wb25lbnQpKSB7XG4gICAgX2RldnRvb2xzQ29tcG9uZW50UmVtb3ZlZChjb21wb25lbnQpO1xuICB9XG59O1xuLyohICNfX05PX1NJREVfRUZGRUNUU19fICovXG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZnVuY3Rpb24gY3JlYXRlRGV2dG9vbHNDb21wb25lbnRIb29rKGhvb2spIHtcbiAgcmV0dXJuIChjb21wb25lbnQpID0+IHtcbiAgICBlbWl0JDEoXG4gICAgICBob29rLFxuICAgICAgY29tcG9uZW50LmFwcENvbnRleHQuYXBwLFxuICAgICAgY29tcG9uZW50LnVpZCxcbiAgICAgIGNvbXBvbmVudC5wYXJlbnQgPyBjb21wb25lbnQucGFyZW50LnVpZCA6IHZvaWQgMCxcbiAgICAgIGNvbXBvbmVudFxuICAgICk7XG4gIH07XG59XG5jb25zdCBkZXZ0b29sc1BlcmZTdGFydCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVEZXZ0b29sc1BlcmZvcm1hbmNlSG9vayhcbiAgXCJwZXJmOnN0YXJ0XCJcbiAgLyogUEVSRk9STUFOQ0VfU1RBUlQgKi9cbik7XG5jb25zdCBkZXZ0b29sc1BlcmZFbmQgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlRGV2dG9vbHNQZXJmb3JtYW5jZUhvb2soXG4gIFwicGVyZjplbmRcIlxuICAvKiBQRVJGT1JNQU5DRV9FTkQgKi9cbik7XG5mdW5jdGlvbiBjcmVhdGVEZXZ0b29sc1BlcmZvcm1hbmNlSG9vayhob29rKSB7XG4gIHJldHVybiAoY29tcG9uZW50LCB0eXBlLCB0aW1lKSA9PiB7XG4gICAgZW1pdCQxKGhvb2ssIGNvbXBvbmVudC5hcHBDb250ZXh0LmFwcCwgY29tcG9uZW50LnVpZCwgY29tcG9uZW50LCB0eXBlLCB0aW1lKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGRldnRvb2xzQ29tcG9uZW50RW1pdChjb21wb25lbnQsIGV2ZW50LCBwYXJhbXMpIHtcbiAgZW1pdCQxKFxuICAgIFwiY29tcG9uZW50OmVtaXRcIixcbiAgICBjb21wb25lbnQuYXBwQ29udGV4dC5hcHAsXG4gICAgY29tcG9uZW50LFxuICAgIGV2ZW50LFxuICAgIHBhcmFtc1xuICApO1xufVxubGV0IGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG5sZXQgY3VycmVudFNjb3BlSWQgPSBudWxsO1xuZnVuY3Rpb24gc2V0Q3VycmVudFJlbmRlcmluZ0luc3RhbmNlKGluc3RhbmNlKSB7XG4gIGNvbnN0IHByZXYgPSBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2U7XG4gIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IGluc3RhbmNlO1xuICBjdXJyZW50U2NvcGVJZCA9IGluc3RhbmNlICYmIGluc3RhbmNlLnR5cGUuX19zY29wZUlkIHx8IG51bGw7XG4gIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gd2l0aEN0eChmbiwgY3R4ID0gY3VycmVudFJlbmRlcmluZ0luc3RhbmNlLCBpc05vblNjb3BlZFNsb3QpIHtcbiAgaWYgKCFjdHgpIHJldHVybiBmbjtcbiAgaWYgKGZuLl9uKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG4gIGNvbnN0IHJlbmRlckZuV2l0aENvbnRleHQgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChyZW5kZXJGbldpdGhDb250ZXh0Ll9kKSB7XG4gICAgICBzZXRCbG9ja1RyYWNraW5nKC0xKTtcbiAgICB9XG4gICAgY29uc3QgcHJldkluc3RhbmNlID0gc2V0Q3VycmVudFJlbmRlcmluZ0luc3RhbmNlKGN0eCk7XG4gICAgbGV0IHJlcztcbiAgICB0cnkge1xuICAgICAgcmVzID0gZm4oLi4uYXJncyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldEN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZShwcmV2SW5zdGFuY2UpO1xuICAgICAgaWYgKHJlbmRlckZuV2l0aENvbnRleHQuX2QpIHtcbiAgICAgICAgc2V0QmxvY2tUcmFja2luZygxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgZmFsc2UpIHtcbiAgICAgIGRldnRvb2xzQ29tcG9uZW50VXBkYXRlZChjdHgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuICByZW5kZXJGbldpdGhDb250ZXh0Ll9uID0gdHJ1ZTtcbiAgcmVuZGVyRm5XaXRoQ29udGV4dC5fYyA9IHRydWU7XG4gIHJlbmRlckZuV2l0aENvbnRleHQuX2QgPSB0cnVlO1xuICByZXR1cm4gcmVuZGVyRm5XaXRoQ29udGV4dDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGlyZWN0aXZlTmFtZShuYW1lKSB7XG4gIGlmIChpc0J1aWx0SW5EaXJlY3RpdmUobmFtZSkpIHtcbiAgICB3YXJuJDEoXCJEbyBub3QgdXNlIGJ1aWx0LWluIGRpcmVjdGl2ZSBpZHMgYXMgY3VzdG9tIGRpcmVjdGl2ZSBpZDogXCIgKyBuYW1lKTtcbiAgfVxufVxuZnVuY3Rpb24gaW52b2tlRGlyZWN0aXZlSG9vayh2bm9kZSwgcHJldlZOb2RlLCBpbnN0YW5jZSwgbmFtZSkge1xuICBjb25zdCBiaW5kaW5ncyA9IHZub2RlLmRpcnM7XG4gIGNvbnN0IG9sZEJpbmRpbmdzID0gcHJldlZOb2RlICYmIHByZXZWTm9kZS5kaXJzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmRpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYmluZGluZyA9IGJpbmRpbmdzW2ldO1xuICAgIGlmIChvbGRCaW5kaW5ncykge1xuICAgICAgYmluZGluZy5vbGRWYWx1ZSA9IG9sZEJpbmRpbmdzW2ldLnZhbHVlO1xuICAgIH1cbiAgICBsZXQgaG9vayA9IGJpbmRpbmcuZGlyW25hbWVdO1xuICAgIGlmIChob29rKSB7XG4gICAgICBwYXVzZVRyYWNraW5nKCk7XG4gICAgICBjYWxsV2l0aEFzeW5jRXJyb3JIYW5kbGluZyhob29rLCBpbnN0YW5jZSwgOCwgW1xuICAgICAgICB2bm9kZS5lbCxcbiAgICAgICAgYmluZGluZyxcbiAgICAgICAgdm5vZGUsXG4gICAgICAgIHByZXZWTm9kZVxuICAgICAgXSk7XG4gICAgICByZXNldFRyYWNraW5nKCk7XG4gICAgfVxuICB9XG59XG5jb25zdCBUZWxlcG9ydEVuZEtleSA9IFN5bWJvbChcIl92dGVcIik7XG5jb25zdCBpc1RlbGVwb3J0ID0gKHR5cGUpID0+IHR5cGUuX19pc1RlbGVwb3J0O1xuZnVuY3Rpb24gc2V0VHJhbnNpdGlvbkhvb2tzKHZub2RlLCBob29rcykge1xuICBpZiAodm5vZGUuc2hhcGVGbGFnICYgNiAmJiB2bm9kZS5jb21wb25lbnQpIHtcbiAgICB2bm9kZS50cmFuc2l0aW9uID0gaG9va3M7XG4gICAgc2V0VHJhbnNpdGlvbkhvb2tzKHZub2RlLmNvbXBvbmVudC5zdWJUcmVlLCBob29rcyk7XG4gIH0gZWxzZSBpZiAodm5vZGUuc2hhcGVGbGFnICYgMTI4KSB7XG4gICAgdm5vZGUuc3NDb250ZW50LnRyYW5zaXRpb24gPSBob29rcy5jbG9uZSh2bm9kZS5zc0NvbnRlbnQpO1xuICAgIHZub2RlLnNzRmFsbGJhY2sudHJhbnNpdGlvbiA9IGhvb2tzLmNsb25lKHZub2RlLnNzRmFsbGJhY2spO1xuICB9IGVsc2Uge1xuICAgIHZub2RlLnRyYW5zaXRpb24gPSBob29rcztcbiAgfVxufVxuLyohICNfX05PX1NJREVfRUZGRUNUU19fICovXG4vLyBAX19OT19TSURFX0VGRkVDVFNfX1xuZnVuY3Rpb24gZGVmaW5lQ29tcG9uZW50KG9wdGlvbnMsIGV4dHJhT3B0aW9ucykge1xuICByZXR1cm4gaXNGdW5jdGlvbihvcHRpb25zKSA/IChcbiAgICAvLyAjODIzNjogZXh0ZW5kIGNhbGwgYW5kIG9wdGlvbnMubmFtZSBhY2Nlc3MgYXJlIGNvbnNpZGVyZWQgc2lkZS1lZmZlY3RzXG4gICAgLy8gYnkgUm9sbHVwLCBzbyB3ZSBoYXZlIHRvIHdyYXAgaXQgaW4gYSBwdXJlLWFubm90YXRlZCBJSUZFLlxuICAgIC8qIEBfX1BVUkVfXyAqLyAoKCkgPT4gZXh0ZW5kKHsgbmFtZTogb3B0aW9ucy5uYW1lIH0sIGV4dHJhT3B0aW9ucywgeyBzZXR1cDogb3B0aW9ucyB9KSkoKVxuICApIDogb3B0aW9ucztcbn1cbmZ1bmN0aW9uIG1hcmtBc3luY0JvdW5kYXJ5KGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLmlkcyA9IFtpbnN0YW5jZS5pZHNbMF0gKyBpbnN0YW5jZS5pZHNbMl0rKyArIFwiLVwiLCAwLCAwXTtcbn1cbmNvbnN0IGtub3duVGVtcGxhdGVSZWZzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5mdW5jdGlvbiBzZXRSZWYocmF3UmVmLCBvbGRSYXdSZWYsIHBhcmVudFN1c3BlbnNlLCB2bm9kZSwgaXNVbm1vdW50ID0gZmFsc2UpIHtcbiAgaWYgKGlzQXJyYXkocmF3UmVmKSkge1xuICAgIHJhd1JlZi5mb3JFYWNoKFxuICAgICAgKHIsIGkpID0+IHNldFJlZihcbiAgICAgICAgcixcbiAgICAgICAgb2xkUmF3UmVmICYmIChpc0FycmF5KG9sZFJhd1JlZikgPyBvbGRSYXdSZWZbaV0gOiBvbGRSYXdSZWYpLFxuICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgdm5vZGUsXG4gICAgICAgIGlzVW5tb3VudFxuICAgICAgKVxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpc0FzeW5jV3JhcHBlcih2bm9kZSkgJiYgIWlzVW5tb3VudCkge1xuICAgIGlmICh2bm9kZS5zaGFwZUZsYWcgJiA1MTIgJiYgdm5vZGUudHlwZS5fX2FzeW5jUmVzb2x2ZWQgJiYgdm5vZGUuY29tcG9uZW50LnN1YlRyZWUuY29tcG9uZW50KSB7XG4gICAgICBzZXRSZWYocmF3UmVmLCBvbGRSYXdSZWYsIHBhcmVudFN1c3BlbnNlLCB2bm9kZS5jb21wb25lbnQuc3ViVHJlZSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCByZWZWYWx1ZSA9IHZub2RlLnNoYXBlRmxhZyAmIDQgPyBnZXRDb21wb25lbnRQdWJsaWNJbnN0YW5jZSh2bm9kZS5jb21wb25lbnQpIDogdm5vZGUuZWw7XG4gIGNvbnN0IHZhbHVlID0gaXNVbm1vdW50ID8gbnVsbCA6IHJlZlZhbHVlO1xuICBjb25zdCB7IGk6IG93bmVyLCByOiByZWYzIH0gPSByYXdSZWY7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFvd25lcikge1xuICAgIHdhcm4kMShcbiAgICAgIGBNaXNzaW5nIHJlZiBvd25lciBjb250ZXh0LiByZWYgY2Fubm90IGJlIHVzZWQgb24gaG9pc3RlZCB2bm9kZXMuIEEgdm5vZGUgd2l0aCByZWYgbXVzdCBiZSBjcmVhdGVkIGluc2lkZSB0aGUgcmVuZGVyIGZ1bmN0aW9uLmBcbiAgICApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBvbGRSZWYgPSBvbGRSYXdSZWYgJiYgb2xkUmF3UmVmLnI7XG4gIGNvbnN0IHJlZnMgPSBvd25lci5yZWZzID09PSBFTVBUWV9PQkogPyBvd25lci5yZWZzID0ge30gOiBvd25lci5yZWZzO1xuICBjb25zdCBzZXR1cFN0YXRlID0gb3duZXIuc2V0dXBTdGF0ZTtcbiAgY29uc3QgcmF3U2V0dXBTdGF0ZSA9IHRvUmF3KHNldHVwU3RhdGUpO1xuICBjb25zdCBjYW5TZXRTZXR1cFJlZiA9IHNldHVwU3RhdGUgPT09IEVNUFRZX09CSiA/ICgpID0+IGZhbHNlIDogKGtleSkgPT4ge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICBpZiAoaGFzT3duKHJhd1NldHVwU3RhdGUsIGtleSkgJiYgIWlzUmVmKHJhd1NldHVwU3RhdGVba2V5XSkpIHtcbiAgICAgICAgd2FybiQxKFxuICAgICAgICAgIGBUZW1wbGF0ZSByZWYgXCIke2tleX1cIiB1c2VkIG9uIGEgbm9uLXJlZiB2YWx1ZS4gSXQgd2lsbCBub3Qgd29yayBpbiB0aGUgcHJvZHVjdGlvbiBidWlsZC5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoa25vd25UZW1wbGF0ZVJlZnMuaGFzKHJhd1NldHVwU3RhdGVba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGFzT3duKHJhd1NldHVwU3RhdGUsIGtleSk7XG4gIH07XG4gIGlmIChvbGRSZWYgIT0gbnVsbCAmJiBvbGRSZWYgIT09IHJlZjMpIHtcbiAgICBpZiAoaXNTdHJpbmcob2xkUmVmKSkge1xuICAgICAgcmVmc1tvbGRSZWZdID0gbnVsbDtcbiAgICAgIGlmIChjYW5TZXRTZXR1cFJlZihvbGRSZWYpKSB7XG4gICAgICAgIHNldHVwU3RhdGVbb2xkUmVmXSA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1JlZihvbGRSZWYpKSB7XG4gICAgICBvbGRSZWYudmFsdWUgPSBudWxsO1xuICAgIH1cbiAgfVxuICBpZiAoaXNGdW5jdGlvbihyZWYzKSkge1xuICAgIGNhbGxXaXRoRXJyb3JIYW5kbGluZyhyZWYzLCBvd25lciwgMTIsIFt2YWx1ZSwgcmVmc10pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IF9pc1N0cmluZyA9IGlzU3RyaW5nKHJlZjMpO1xuICAgIGNvbnN0IF9pc1JlZiA9IGlzUmVmKHJlZjMpO1xuICAgIGlmIChfaXNTdHJpbmcgfHwgX2lzUmVmKSB7XG4gICAgICBjb25zdCBkb1NldCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHJhd1JlZi5mKSB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBfaXNTdHJpbmcgPyBjYW5TZXRTZXR1cFJlZihyZWYzKSA/IHNldHVwU3RhdGVbcmVmM10gOiByZWZzW3JlZjNdIDogcmVmMy52YWx1ZTtcbiAgICAgICAgICBpZiAoaXNVbm1vdW50KSB7XG4gICAgICAgICAgICBpc0FycmF5KGV4aXN0aW5nKSAmJiByZW1vdmUoZXhpc3RpbmcsIHJlZlZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpc0FycmF5KGV4aXN0aW5nKSkge1xuICAgICAgICAgICAgICBpZiAoX2lzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgcmVmc1tyZWYzXSA9IFtyZWZWYWx1ZV07XG4gICAgICAgICAgICAgICAgaWYgKGNhblNldFNldHVwUmVmKHJlZjMpKSB7XG4gICAgICAgICAgICAgICAgICBzZXR1cFN0YXRlW3JlZjNdID0gcmVmc1tyZWYzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVmMy52YWx1ZSA9IFtyZWZWYWx1ZV07XG4gICAgICAgICAgICAgICAgaWYgKHJhd1JlZi5rKSByZWZzW3Jhd1JlZi5rXSA9IHJlZjMudmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWV4aXN0aW5nLmluY2x1ZGVzKHJlZlZhbHVlKSkge1xuICAgICAgICAgICAgICBleGlzdGluZy5wdXNoKHJlZlZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoX2lzU3RyaW5nKSB7XG4gICAgICAgICAgcmVmc1tyZWYzXSA9IHZhbHVlO1xuICAgICAgICAgIGlmIChjYW5TZXRTZXR1cFJlZihyZWYzKSkge1xuICAgICAgICAgICAgc2V0dXBTdGF0ZVtyZWYzXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfaXNSZWYpIHtcbiAgICAgICAgICByZWYzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgaWYgKHJhd1JlZi5rKSByZWZzW3Jhd1JlZi5rXSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICB3YXJuJDEoXCJJbnZhbGlkIHRlbXBsYXRlIHJlZiB0eXBlOlwiLCByZWYzLCBgKCR7dHlwZW9mIHJlZjN9KWApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGRvU2V0LmlkID0gLTE7XG4gICAgICAgIHF1ZXVlUG9zdFJlbmRlckVmZmVjdChkb1NldCwgcGFyZW50U3VzcGVuc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9TZXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIHdhcm4kMShcIkludmFsaWQgdGVtcGxhdGUgcmVmIHR5cGU6XCIsIHJlZjMsIGAoJHt0eXBlb2YgcmVmM30pYCk7XG4gICAgfVxuICB9XG59XG5nZXRHbG9iYWxUaGlzKCkucmVxdWVzdElkbGVDYWxsYmFjayB8fCAoKGNiKSA9PiBzZXRUaW1lb3V0KGNiLCAxKSk7XG5nZXRHbG9iYWxUaGlzKCkuY2FuY2VsSWRsZUNhbGxiYWNrIHx8ICgoaWQpID0+IGNsZWFyVGltZW91dChpZCkpO1xuY29uc3QgaXNBc3luY1dyYXBwZXIgPSAoaSkgPT4gISFpLnR5cGUuX19hc3luY0xvYWRlcjtcbmNvbnN0IGlzS2VlcEFsaXZlID0gKHZub2RlKSA9PiB2bm9kZS50eXBlLl9faXNLZWVwQWxpdmU7XG5mdW5jdGlvbiBvbkFjdGl2YXRlZChob29rLCB0YXJnZXQpIHtcbiAgcmVnaXN0ZXJLZWVwQWxpdmVIb29rKGhvb2ssIFwiYVwiLCB0YXJnZXQpO1xufVxuZnVuY3Rpb24gb25EZWFjdGl2YXRlZChob29rLCB0YXJnZXQpIHtcbiAgcmVnaXN0ZXJLZWVwQWxpdmVIb29rKGhvb2ssIFwiZGFcIiwgdGFyZ2V0KTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyS2VlcEFsaXZlSG9vayhob29rLCB0eXBlLCB0YXJnZXQgPSBjdXJyZW50SW5zdGFuY2UpIHtcbiAgY29uc3Qgd3JhcHBlZEhvb2sgPSBob29rLl9fd2RjIHx8IChob29rLl9fd2RjID0gKCkgPT4ge1xuICAgIGxldCBjdXJyZW50ID0gdGFyZ2V0O1xuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICBpZiAoY3VycmVudC5pc0RlYWN0aXZhdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIGhvb2soKTtcbiAgfSk7XG4gIGluamVjdEhvb2sodHlwZSwgd3JhcHBlZEhvb2ssIHRhcmdldCk7XG4gIGlmICh0YXJnZXQpIHtcbiAgICBsZXQgY3VycmVudCA9IHRhcmdldC5wYXJlbnQ7XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudC5wYXJlbnQpIHtcbiAgICAgIGlmIChpc0tlZXBBbGl2ZShjdXJyZW50LnBhcmVudC52bm9kZSkpIHtcbiAgICAgICAgaW5qZWN0VG9LZWVwQWxpdmVSb290KHdyYXBwZWRIb29rLCB0eXBlLCB0YXJnZXQsIGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaW5qZWN0VG9LZWVwQWxpdmVSb290KGhvb2ssIHR5cGUsIHRhcmdldCwga2VlcEFsaXZlUm9vdCkge1xuICBjb25zdCBpbmplY3RlZCA9IGluamVjdEhvb2soXG4gICAgdHlwZSxcbiAgICBob29rLFxuICAgIGtlZXBBbGl2ZVJvb3QsXG4gICAgdHJ1ZVxuICAgIC8qIHByZXBlbmQgKi9cbiAgKTtcbiAgb25Vbm1vdW50ZWQoKCkgPT4ge1xuICAgIHJlbW92ZShrZWVwQWxpdmVSb290W3R5cGVdLCBpbmplY3RlZCk7XG4gIH0sIHRhcmdldCk7XG59XG5mdW5jdGlvbiBpbmplY3RIb29rKHR5cGUsIGhvb2ssIHRhcmdldCA9IGN1cnJlbnRJbnN0YW5jZSwgcHJlcGVuZCA9IGZhbHNlKSB7XG4gIGlmICh0YXJnZXQpIHtcbiAgICBjb25zdCBob29rcyA9IHRhcmdldFt0eXBlXSB8fCAodGFyZ2V0W3R5cGVdID0gW10pO1xuICAgIGNvbnN0IHdyYXBwZWRIb29rID0gaG9vay5fX3dlaCB8fCAoaG9vay5fX3dlaCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBwYXVzZVRyYWNraW5nKCk7XG4gICAgICBjb25zdCByZXNldCA9IHNldEN1cnJlbnRJbnN0YW5jZSh0YXJnZXQpO1xuICAgICAgY29uc3QgcmVzID0gY2FsbFdpdGhBc3luY0Vycm9ySGFuZGxpbmcoaG9vaywgdGFyZ2V0LCB0eXBlLCBhcmdzKTtcbiAgICAgIHJlc2V0KCk7XG4gICAgICByZXNldFRyYWNraW5nKCk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICAgIGlmIChwcmVwZW5kKSB7XG4gICAgICBob29rcy51bnNoaWZ0KHdyYXBwZWRIb29rKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaG9va3MucHVzaCh3cmFwcGVkSG9vayk7XG4gICAgfVxuICAgIHJldHVybiB3cmFwcGVkSG9vaztcbiAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgY29uc3QgYXBpTmFtZSA9IHRvSGFuZGxlcktleShFcnJvclR5cGVTdHJpbmdzJDFbdHlwZV0ucmVwbGFjZSgvIGhvb2skLywgXCJcIikpO1xuICAgIHdhcm4kMShcbiAgICAgIGAke2FwaU5hbWV9IGlzIGNhbGxlZCB3aGVuIHRoZXJlIGlzIG5vIGFjdGl2ZSBjb21wb25lbnQgaW5zdGFuY2UgdG8gYmUgYXNzb2NpYXRlZCB3aXRoLiBMaWZlY3ljbGUgaW5qZWN0aW9uIEFQSXMgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgZXhlY3V0aW9uIG9mIHNldHVwKCkuIElmIHlvdSBhcmUgdXNpbmcgYXN5bmMgc2V0dXAoKSwgbWFrZSBzdXJlIHRvIHJlZ2lzdGVyIGxpZmVjeWNsZSBob29rcyBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0IHN0YXRlbWVudC5gXG4gICAgKTtcbiAgfVxufVxuY29uc3QgY3JlYXRlSG9vayA9IChsaWZlY3ljbGUpID0+IChob29rLCB0YXJnZXQgPSBjdXJyZW50SW5zdGFuY2UpID0+IHtcbiAgaWYgKCFpc0luU1NSQ29tcG9uZW50U2V0dXAgfHwgbGlmZWN5Y2xlID09PSBcInNwXCIpIHtcbiAgICBpbmplY3RIb29rKGxpZmVjeWNsZSwgKC4uLmFyZ3MpID0+IGhvb2soLi4uYXJncyksIHRhcmdldCk7XG4gIH1cbn07XG5jb25zdCBvbkJlZm9yZU1vdW50ID0gY3JlYXRlSG9vayhcImJtXCIpO1xuY29uc3Qgb25Nb3VudGVkID0gY3JlYXRlSG9vayhcIm1cIik7XG5jb25zdCBvbkJlZm9yZVVwZGF0ZSA9IGNyZWF0ZUhvb2soXG4gIFwiYnVcIlxuKTtcbmNvbnN0IG9uVXBkYXRlZCA9IGNyZWF0ZUhvb2soXCJ1XCIpO1xuY29uc3Qgb25CZWZvcmVVbm1vdW50ID0gY3JlYXRlSG9vayhcbiAgXCJidW1cIlxuKTtcbmNvbnN0IG9uVW5tb3VudGVkID0gY3JlYXRlSG9vayhcInVtXCIpO1xuY29uc3Qgb25TZXJ2ZXJQcmVmZXRjaCA9IGNyZWF0ZUhvb2soXG4gIFwic3BcIlxuKTtcbmNvbnN0IG9uUmVuZGVyVHJpZ2dlcmVkID0gY3JlYXRlSG9vayhcInJ0Z1wiKTtcbmNvbnN0IG9uUmVuZGVyVHJhY2tlZCA9IGNyZWF0ZUhvb2soXCJydGNcIik7XG5mdW5jdGlvbiBvbkVycm9yQ2FwdHVyZWQoaG9vaywgdGFyZ2V0ID0gY3VycmVudEluc3RhbmNlKSB7XG4gIGluamVjdEhvb2soXCJlY1wiLCBob29rLCB0YXJnZXQpO1xufVxuY29uc3QgTlVMTF9EWU5BTUlDX0NPTVBPTkVOVCA9IFN5bWJvbC5mb3IoXCJ2LW5kY1wiKTtcbmZ1bmN0aW9uIHJlbmRlckxpc3Qoc291cmNlLCByZW5kZXJJdGVtLCBjYWNoZSwgaW5kZXgpIHtcbiAgbGV0IHJldDtcbiAgY29uc3QgY2FjaGVkID0gY2FjaGU7XG4gIGNvbnN0IHNvdXJjZUlzQXJyYXkgPSBpc0FycmF5KHNvdXJjZSk7XG4gIGlmIChzb3VyY2VJc0FycmF5IHx8IGlzU3RyaW5nKHNvdXJjZSkpIHtcbiAgICBjb25zdCBzb3VyY2VJc1JlYWN0aXZlQXJyYXkgPSBzb3VyY2VJc0FycmF5ICYmIGlzUmVhY3RpdmUoc291cmNlKTtcbiAgICBsZXQgbmVlZHNXcmFwID0gZmFsc2U7XG4gICAgbGV0IGlzUmVhZG9ubHlTb3VyY2UgPSBmYWxzZTtcbiAgICBpZiAoc291cmNlSXNSZWFjdGl2ZUFycmF5KSB7XG4gICAgICBuZWVkc1dyYXAgPSAhaXNTaGFsbG93KHNvdXJjZSk7XG4gICAgICBpc1JlYWRvbmx5U291cmNlID0gaXNSZWFkb25seShzb3VyY2UpO1xuICAgICAgc291cmNlID0gc2hhbGxvd1JlYWRBcnJheShzb3VyY2UpO1xuICAgIH1cbiAgICByZXQgPSBuZXcgQXJyYXkoc291cmNlLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzb3VyY2UubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICByZXRbaV0gPSByZW5kZXJJdGVtKFxuICAgICAgICBuZWVkc1dyYXAgPyBpc1JlYWRvbmx5U291cmNlID8gdG9SZWFkb25seSh0b1JlYWN0aXZlKHNvdXJjZVtpXSkpIDogdG9SZWFjdGl2ZShzb3VyY2VbaV0pIDogc291cmNlW2ldLFxuICAgICAgICBpLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIGNhY2hlZFxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNvdXJjZSA9PT0gXCJudW1iZXJcIikge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFOdW1iZXIuaXNJbnRlZ2VyKHNvdXJjZSkpIHtcbiAgICAgIHdhcm4kMShgVGhlIHYtZm9yIHJhbmdlIGV4cGVjdCBhbiBpbnRlZ2VyIHZhbHVlIGJ1dCBnb3QgJHtzb3VyY2V9LmApO1xuICAgIH1cbiAgICByZXQgPSBuZXcgQXJyYXkoc291cmNlKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZTsgaSsrKSB7XG4gICAgICByZXRbaV0gPSByZW5kZXJJdGVtKGkgKyAxLCBpLCB2b2lkIDAsIGNhY2hlZCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBpZiAoc291cmNlW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgICAgIHJldCA9IEFycmF5LmZyb20oXG4gICAgICAgIHNvdXJjZSxcbiAgICAgICAgKGl0ZW0sIGkpID0+IHJlbmRlckl0ZW0oaXRlbSwgaSwgdm9pZCAwLCBjYWNoZWQpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgIHJldCA9IG5ldyBBcnJheShrZXlzLmxlbmd0aCk7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgIHJldFtpXSA9IHJlbmRlckl0ZW0oc291cmNlW2tleV0sIGtleSwgaSwgY2FjaGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0ID0gW107XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbmNvbnN0IGdldFB1YmxpY0luc3RhbmNlID0gKGkpID0+IHtcbiAgaWYgKCFpKSByZXR1cm4gbnVsbDtcbiAgaWYgKGlzU3RhdGVmdWxDb21wb25lbnQoaSkpIHJldHVybiBnZXRDb21wb25lbnRQdWJsaWNJbnN0YW5jZShpKTtcbiAgcmV0dXJuIGdldFB1YmxpY0luc3RhbmNlKGkucGFyZW50KTtcbn07XG5jb25zdCBwdWJsaWNQcm9wZXJ0aWVzTWFwID0gKFxuICAvLyBNb3ZlIFBVUkUgbWFya2VyIHRvIG5ldyBsaW5lIHRvIHdvcmthcm91bmQgY29tcGlsZXIgZGlzY2FyZGluZyBpdFxuICAvLyBkdWUgdG8gdHlwZSBhbm5vdGF0aW9uXG4gIC8qIEBfX1BVUkVfXyAqLyBleHRlbmQoLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCksIHtcbiAgICAkOiAoaSkgPT4gaSxcbiAgICAkZWw6IChpKSA9PiBpLnZub2RlLmVsLFxuICAgICRkYXRhOiAoaSkgPT4gaS5kYXRhLFxuICAgICRwcm9wczogKGkpID0+ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBzaGFsbG93UmVhZG9ubHkoaS5wcm9wcykgOiBpLnByb3BzLFxuICAgICRhdHRyczogKGkpID0+ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBzaGFsbG93UmVhZG9ubHkoaS5hdHRycykgOiBpLmF0dHJzLFxuICAgICRzbG90czogKGkpID0+ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBzaGFsbG93UmVhZG9ubHkoaS5zbG90cykgOiBpLnNsb3RzLFxuICAgICRyZWZzOiAoaSkgPT4gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IHNoYWxsb3dSZWFkb25seShpLnJlZnMpIDogaS5yZWZzLFxuICAgICRwYXJlbnQ6IChpKSA9PiBnZXRQdWJsaWNJbnN0YW5jZShpLnBhcmVudCksXG4gICAgJHJvb3Q6IChpKSA9PiBnZXRQdWJsaWNJbnN0YW5jZShpLnJvb3QpLFxuICAgICRob3N0OiAoaSkgPT4gaS5jZSxcbiAgICAkZW1pdDogKGkpID0+IGkuZW1pdCxcbiAgICAkb3B0aW9uczogKGkpID0+IHJlc29sdmVNZXJnZWRPcHRpb25zKGkpLFxuICAgICRmb3JjZVVwZGF0ZTogKGkpID0+IGkuZiB8fCAoaS5mID0gKCkgPT4ge1xuICAgICAgcXVldWVKb2IoaS51cGRhdGUpO1xuICAgIH0pLFxuICAgICRuZXh0VGljazogKGkpID0+IGkubiB8fCAoaS5uID0gbmV4dFRpY2suYmluZChpLnByb3h5KSksXG4gICAgJHdhdGNoOiAoaSkgPT4gaW5zdGFuY2VXYXRjaC5iaW5kKGkpXG4gIH0pXG4pO1xuY29uc3QgaXNSZXNlcnZlZFByZWZpeCA9IChrZXkpID0+IGtleSA9PT0gXCJfXCIgfHwga2V5ID09PSBcIiRcIjtcbmNvbnN0IGhhc1NldHVwQmluZGluZyA9IChzdGF0ZSwga2V5KSA9PiBzdGF0ZSAhPT0gRU1QVFlfT0JKICYmICFzdGF0ZS5fX2lzU2NyaXB0U2V0dXAgJiYgaGFzT3duKHN0YXRlLCBrZXkpO1xuY29uc3QgUHVibGljSW5zdGFuY2VQcm94eUhhbmRsZXJzID0ge1xuICBnZXQoeyBfOiBpbnN0YW5jZSB9LCBrZXkpIHtcbiAgICBpZiAoa2V5ID09PSBcIl9fdl9za2lwXCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB7IGN0eCwgc2V0dXBTdGF0ZSwgZGF0YSwgcHJvcHMsIGFjY2Vzc0NhY2hlLCB0eXBlLCBhcHBDb250ZXh0IH0gPSBpbnN0YW5jZTtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBrZXkgPT09IFwiX19pc1Z1ZVwiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IG5vcm1hbGl6ZWRQcm9wcztcbiAgICBpZiAoa2V5WzBdICE9PSBcIiRcIikge1xuICAgICAgY29uc3QgbiA9IGFjY2Vzc0NhY2hlW2tleV07XG4gICAgICBpZiAobiAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHN3aXRjaCAobikge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBzZXR1cFN0YXRlW2tleV07XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGFba2V5XTtcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gY3R4W2tleV07XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaGFzU2V0dXBCaW5kaW5nKHNldHVwU3RhdGUsIGtleSkpIHtcbiAgICAgICAgYWNjZXNzQ2FjaGVba2V5XSA9IDE7XG4gICAgICAgIHJldHVybiBzZXR1cFN0YXRlW2tleV07XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgIT09IEVNUFRZX09CSiAmJiBoYXNPd24oZGF0YSwga2V5KSkge1xuICAgICAgICBhY2Nlc3NDYWNoZVtrZXldID0gMjtcbiAgICAgICAgcmV0dXJuIGRhdGFba2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIC8vIG9ubHkgY2FjaGUgb3RoZXIgcHJvcGVydGllcyB3aGVuIGluc3RhbmNlIGhhcyBkZWNsYXJlZCAodGh1cyBzdGFibGUpXG4gICAgICAgIC8vIHByb3BzXG4gICAgICAgIChub3JtYWxpemVkUHJvcHMgPSBpbnN0YW5jZS5wcm9wc09wdGlvbnNbMF0pICYmIGhhc093bihub3JtYWxpemVkUHJvcHMsIGtleSlcbiAgICAgICkge1xuICAgICAgICBhY2Nlc3NDYWNoZVtrZXldID0gMztcbiAgICAgICAgcmV0dXJuIHByb3BzW2tleV07XG4gICAgICB9IGVsc2UgaWYgKGN0eCAhPT0gRU1QVFlfT0JKICYmIGhhc093bihjdHgsIGtleSkpIHtcbiAgICAgICAgYWNjZXNzQ2FjaGVba2V5XSA9IDQ7XG4gICAgICAgIHJldHVybiBjdHhba2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkQ2FjaGVBY2Nlc3MpIHtcbiAgICAgICAgYWNjZXNzQ2FjaGVba2V5XSA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHB1YmxpY0dldHRlciA9IHB1YmxpY1Byb3BlcnRpZXNNYXBba2V5XTtcbiAgICBsZXQgY3NzTW9kdWxlLCBnbG9iYWxQcm9wZXJ0aWVzO1xuICAgIGlmIChwdWJsaWNHZXR0ZXIpIHtcbiAgICAgIGlmIChrZXkgPT09IFwiJGF0dHJzXCIpIHtcbiAgICAgICAgdHJhY2soaW5zdGFuY2UuYXR0cnMsIFwiZ2V0XCIsIFwiXCIpO1xuICAgICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIG1hcmtBdHRyc0FjY2Vzc2VkKCk7XG4gICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYga2V5ID09PSBcIiRzbG90c1wiKSB7XG4gICAgICAgIHRyYWNrKGluc3RhbmNlLCBcImdldFwiLCBrZXkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHB1YmxpY0dldHRlcihpbnN0YW5jZSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIGNzcyBtb2R1bGUgKGluamVjdGVkIGJ5IHZ1ZS1sb2FkZXIpXG4gICAgICAoY3NzTW9kdWxlID0gdHlwZS5fX2Nzc01vZHVsZXMpICYmIChjc3NNb2R1bGUgPSBjc3NNb2R1bGVba2V5XSlcbiAgICApIHtcbiAgICAgIHJldHVybiBjc3NNb2R1bGU7XG4gICAgfSBlbHNlIGlmIChjdHggIT09IEVNUFRZX09CSiAmJiBoYXNPd24oY3R4LCBrZXkpKSB7XG4gICAgICBhY2Nlc3NDYWNoZVtrZXldID0gNDtcbiAgICAgIHJldHVybiBjdHhba2V5XTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gZ2xvYmFsIHByb3BlcnRpZXNcbiAgICAgIGdsb2JhbFByb3BlcnRpZXMgPSBhcHBDb250ZXh0LmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLCBoYXNPd24oZ2xvYmFsUHJvcGVydGllcywga2V5KVxuICAgICkge1xuICAgICAge1xuICAgICAgICByZXR1cm4gZ2xvYmFsUHJvcGVydGllc1trZXldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgJiYgKCFpc1N0cmluZyhrZXkpIHx8IC8vICMxMDkxIGF2b2lkIGludGVybmFsIGlzUmVmL2lzVk5vZGUgY2hlY2tzIG9uIGNvbXBvbmVudCBpbnN0YW5jZSBsZWFkaW5nXG4gICAgLy8gdG8gaW5maW5pdGUgd2FybmluZyBsb29wXG4gICAga2V5LmluZGV4T2YoXCJfX3ZcIikgIT09IDApKSB7XG4gICAgICBpZiAoZGF0YSAhPT0gRU1QVFlfT0JKICYmIGlzUmVzZXJ2ZWRQcmVmaXgoa2V5WzBdKSAmJiBoYXNPd24oZGF0YSwga2V5KSkge1xuICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgYFByb3BlcnR5ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICBrZXlcbiAgICAgICAgICApfSBtdXN0IGJlIGFjY2Vzc2VkIHZpYSAkZGF0YSBiZWNhdXNlIGl0IHN0YXJ0cyB3aXRoIGEgcmVzZXJ2ZWQgY2hhcmFjdGVyIChcIiRcIiBvciBcIl9cIikgYW5kIGlzIG5vdCBwcm94aWVkIG9uIHRoZSByZW5kZXIgY29udGV4dC5gXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGluc3RhbmNlID09PSBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UpIHtcbiAgICAgICAgd2FybiQxKFxuICAgICAgICAgIGBQcm9wZXJ0eSAke0pTT04uc3RyaW5naWZ5KGtleSl9IHdhcyBhY2Nlc3NlZCBkdXJpbmcgcmVuZGVyIGJ1dCBpcyBub3QgZGVmaW5lZCBvbiBpbnN0YW5jZS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZXQoeyBfOiBpbnN0YW5jZSB9LCBrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgeyBkYXRhLCBzZXR1cFN0YXRlLCBjdHggfSA9IGluc3RhbmNlO1xuICAgIGlmIChoYXNTZXR1cEJpbmRpbmcoc2V0dXBTdGF0ZSwga2V5KSkge1xuICAgICAgc2V0dXBTdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgc2V0dXBTdGF0ZS5fX2lzU2NyaXB0U2V0dXAgJiYgaGFzT3duKHNldHVwU3RhdGUsIGtleSkpIHtcbiAgICAgIHdhcm4kMShgQ2Fubm90IG11dGF0ZSA8c2NyaXB0IHNldHVwPiBiaW5kaW5nIFwiJHtrZXl9XCIgZnJvbSBPcHRpb25zIEFQSS5gKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGRhdGEgIT09IEVNUFRZX09CSiAmJiBoYXNPd24oZGF0YSwga2V5KSkge1xuICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGhhc093bihpbnN0YW5jZS5wcm9wcywga2V5KSkge1xuICAgICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB3YXJuJDEoYEF0dGVtcHRpbmcgdG8gbXV0YXRlIHByb3AgXCIke2tleX1cIi4gUHJvcHMgYXJlIHJlYWRvbmx5LmApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoa2V5WzBdID09PSBcIiRcIiAmJiBrZXkuc2xpY2UoMSkgaW4gaW5zdGFuY2UpIHtcbiAgICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgd2FybiQxKFxuICAgICAgICBgQXR0ZW1wdGluZyB0byBtdXRhdGUgcHVibGljIHByb3BlcnR5IFwiJHtrZXl9XCIuIFByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCAkIGFyZSByZXNlcnZlZCBhbmQgcmVhZG9ubHkuYFxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYga2V5IGluIGluc3RhbmNlLmFwcENvbnRleHQuY29uZmlnLmdsb2JhbFByb3BlcnRpZXMpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN0eCwga2V5LCB7XG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHhba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgaGFzKHtcbiAgICBfOiB7IGRhdGEsIHNldHVwU3RhdGUsIGFjY2Vzc0NhY2hlLCBjdHgsIGFwcENvbnRleHQsIHByb3BzT3B0aW9ucyB9XG4gIH0sIGtleSkge1xuICAgIGxldCBub3JtYWxpemVkUHJvcHM7XG4gICAgcmV0dXJuICEhYWNjZXNzQ2FjaGVba2V5XSB8fCBkYXRhICE9PSBFTVBUWV9PQkogJiYgaGFzT3duKGRhdGEsIGtleSkgfHwgaGFzU2V0dXBCaW5kaW5nKHNldHVwU3RhdGUsIGtleSkgfHwgKG5vcm1hbGl6ZWRQcm9wcyA9IHByb3BzT3B0aW9uc1swXSkgJiYgaGFzT3duKG5vcm1hbGl6ZWRQcm9wcywga2V5KSB8fCBoYXNPd24oY3R4LCBrZXkpIHx8IGhhc093bihwdWJsaWNQcm9wZXJ0aWVzTWFwLCBrZXkpIHx8IGhhc093bihhcHBDb250ZXh0LmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLCBrZXkpO1xuICB9LFxuICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICAgIGlmIChkZXNjcmlwdG9yLmdldCAhPSBudWxsKSB7XG4gICAgICB0YXJnZXQuXy5hY2Nlc3NDYWNoZVtrZXldID0gMDtcbiAgICB9IGVsc2UgaWYgKGhhc093bihkZXNjcmlwdG9yLCBcInZhbHVlXCIpKSB7XG4gICAgICB0aGlzLnNldCh0YXJnZXQsIGtleSwgZGVzY3JpcHRvci52YWx1ZSwgbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufTtcbmlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHRydWUpIHtcbiAgUHVibGljSW5zdGFuY2VQcm94eUhhbmRsZXJzLm93bktleXMgPSAodGFyZ2V0KSA9PiB7XG4gICAgd2FybiQxKFxuICAgICAgYEF2b2lkIGFwcCBsb2dpYyB0aGF0IHJlbGllcyBvbiBlbnVtZXJhdGluZyBrZXlzIG9uIGEgY29tcG9uZW50IGluc3RhbmNlLiBUaGUga2V5cyB3aWxsIGJlIGVtcHR5IGluIHByb2R1Y3Rpb24gbW9kZSB0byBhdm9pZCBwZXJmb3JtYW5jZSBvdmVyaGVhZC5gXG4gICAgKTtcbiAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVEZXZSZW5kZXJDb250ZXh0KGluc3RhbmNlKSB7XG4gIGNvbnN0IHRhcmdldCA9IHt9O1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBgX2AsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgZ2V0OiAoKSA9PiBpbnN0YW5jZVxuICB9KTtcbiAgT2JqZWN0LmtleXMocHVibGljUHJvcGVydGllc01hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogKCkgPT4gcHVibGljUHJvcGVydGllc01hcFtrZXldKGluc3RhbmNlKSxcbiAgICAgIC8vIGludGVyY2VwdGVkIGJ5IHRoZSBwcm94eSBzbyBubyBuZWVkIGZvciBpbXBsZW1lbnRhdGlvbixcbiAgICAgIC8vIGJ1dCBuZWVkZWQgdG8gcHJldmVudCBzZXQgZXJyb3JzXG4gICAgICBzZXQ6IE5PT1BcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBleHBvc2VQcm9wc09uUmVuZGVyQ29udGV4dChpbnN0YW5jZSkge1xuICBjb25zdCB7XG4gICAgY3R4LFxuICAgIHByb3BzT3B0aW9uczogW3Byb3BzT3B0aW9uc11cbiAgfSA9IGluc3RhbmNlO1xuICBpZiAocHJvcHNPcHRpb25zKSB7XG4gICAgT2JqZWN0LmtleXMocHJvcHNPcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdHgsIGtleSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogKCkgPT4gaW5zdGFuY2UucHJvcHNba2V5XSxcbiAgICAgICAgc2V0OiBOT09QXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gZXhwb3NlU2V0dXBTdGF0ZU9uUmVuZGVyQ29udGV4dChpbnN0YW5jZSkge1xuICBjb25zdCB7IGN0eCwgc2V0dXBTdGF0ZSB9ID0gaW5zdGFuY2U7XG4gIE9iamVjdC5rZXlzKHRvUmF3KHNldHVwU3RhdGUpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXNldHVwU3RhdGUuX19pc1NjcmlwdFNldHVwKSB7XG4gICAgICBpZiAoaXNSZXNlcnZlZFByZWZpeChrZXlbMF0pKSB7XG4gICAgICAgIHdhcm4kMShcbiAgICAgICAgICBgc2V0dXAoKSByZXR1cm4gcHJvcGVydHkgJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIGtleVxuICAgICAgICAgICl9IHNob3VsZCBub3Qgc3RhcnQgd2l0aCBcIiRcIiBvciBcIl9cIiB3aGljaCBhcmUgcmVzZXJ2ZWQgcHJlZml4ZXMgZm9yIFZ1ZSBpbnRlcm5hbHMuYFxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3R4LCBrZXksIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6ICgpID0+IHNldHVwU3RhdGVba2V5XSxcbiAgICAgICAgc2V0OiBOT09QXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcHNPckVtaXRzKHByb3BzKSB7XG4gIHJldHVybiBpc0FycmF5KHByb3BzKSA/IHByb3BzLnJlZHVjZShcbiAgICAobm9ybWFsaXplZCwgcDIpID0+IChub3JtYWxpemVkW3AyXSA9IG51bGwsIG5vcm1hbGl6ZWQpLFxuICAgIHt9XG4gICkgOiBwcm9wcztcbn1cbmZ1bmN0aW9uIGNyZWF0ZUR1cGxpY2F0ZUNoZWNrZXIoKSB7XG4gIGNvbnN0IGNhY2hlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAodHlwZSwga2V5KSA9PiB7XG4gICAgaWYgKGNhY2hlW2tleV0pIHtcbiAgICAgIHdhcm4kMShgJHt0eXBlfSBwcm9wZXJ0eSBcIiR7a2V5fVwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiAke2NhY2hlW2tleV19LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZVtrZXldID0gdHlwZTtcbiAgICB9XG4gIH07XG59XG5sZXQgc2hvdWxkQ2FjaGVBY2Nlc3MgPSB0cnVlO1xuZnVuY3Rpb24gYXBwbHlPcHRpb25zKGluc3RhbmNlKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSByZXNvbHZlTWVyZ2VkT3B0aW9ucyhpbnN0YW5jZSk7XG4gIGNvbnN0IHB1YmxpY1RoaXMgPSBpbnN0YW5jZS5wcm94eTtcbiAgY29uc3QgY3R4ID0gaW5zdGFuY2UuY3R4O1xuICBzaG91bGRDYWNoZUFjY2VzcyA9IGZhbHNlO1xuICBpZiAob3B0aW9ucy5iZWZvcmVDcmVhdGUpIHtcbiAgICBjYWxsSG9vayhvcHRpb25zLmJlZm9yZUNyZWF0ZSwgaW5zdGFuY2UsIFwiYmNcIik7XG4gIH1cbiAgY29uc3Qge1xuICAgIC8vIHN0YXRlXG4gICAgZGF0YTogZGF0YU9wdGlvbnMsXG4gICAgY29tcHV0ZWQ6IGNvbXB1dGVkT3B0aW9ucyxcbiAgICBtZXRob2RzLFxuICAgIHdhdGNoOiB3YXRjaE9wdGlvbnMsXG4gICAgcHJvdmlkZTogcHJvdmlkZU9wdGlvbnMsXG4gICAgaW5qZWN0OiBpbmplY3RPcHRpb25zLFxuICAgIC8vIGxpZmVjeWNsZVxuICAgIGNyZWF0ZWQsXG4gICAgYmVmb3JlTW91bnQsXG4gICAgbW91bnRlZCxcbiAgICBiZWZvcmVVcGRhdGUsXG4gICAgdXBkYXRlZCxcbiAgICBhY3RpdmF0ZWQsXG4gICAgZGVhY3RpdmF0ZWQsXG4gICAgYmVmb3JlRGVzdHJveSxcbiAgICBiZWZvcmVVbm1vdW50LFxuICAgIGRlc3Ryb3llZCxcbiAgICB1bm1vdW50ZWQsXG4gICAgcmVuZGVyOiByZW5kZXIyLFxuICAgIHJlbmRlclRyYWNrZWQsXG4gICAgcmVuZGVyVHJpZ2dlcmVkLFxuICAgIGVycm9yQ2FwdHVyZWQsXG4gICAgc2VydmVyUHJlZmV0Y2gsXG4gICAgLy8gcHVibGljIEFQSVxuICAgIGV4cG9zZSxcbiAgICBpbmhlcml0QXR0cnMsXG4gICAgLy8gYXNzZXRzXG4gICAgY29tcG9uZW50cyxcbiAgICBkaXJlY3RpdmVzLFxuICAgIGZpbHRlcnNcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGNoZWNrRHVwbGljYXRlUHJvcGVydGllcyA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBjcmVhdGVEdXBsaWNhdGVDaGVja2VyKCkgOiBudWxsO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGNvbnN0IFtwcm9wc09wdGlvbnNdID0gaW5zdGFuY2UucHJvcHNPcHRpb25zO1xuICAgIGlmIChwcm9wc09wdGlvbnMpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BzT3B0aW9ucykge1xuICAgICAgICBjaGVja0R1cGxpY2F0ZVByb3BlcnRpZXMoXCJQcm9wc1wiLCBrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoaW5qZWN0T3B0aW9ucykge1xuICAgIHJlc29sdmVJbmplY3Rpb25zKGluamVjdE9wdGlvbnMsIGN0eCwgY2hlY2tEdXBsaWNhdGVQcm9wZXJ0aWVzKTtcbiAgfVxuICBpZiAobWV0aG9kcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGNvbnN0IG1ldGhvZEhhbmRsZXIgPSBtZXRob2RzW2tleV07XG4gICAgICBpZiAoaXNGdW5jdGlvbihtZXRob2RIYW5kbGVyKSkge1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdHgsIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IG1ldGhvZEhhbmRsZXIuYmluZChwdWJsaWNUaGlzKSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eFtrZXldID0gbWV0aG9kSGFuZGxlci5iaW5kKHB1YmxpY1RoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgY2hlY2tEdXBsaWNhdGVQcm9wZXJ0aWVzKFwiTWV0aG9kc1wiLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgd2FybiQxKFxuICAgICAgICAgIGBNZXRob2QgXCIke2tleX1cIiBoYXMgdHlwZSBcIiR7dHlwZW9mIG1ldGhvZEhhbmRsZXJ9XCIgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBEaWQgeW91IHJlZmVyZW5jZSB0aGUgZnVuY3Rpb24gY29ycmVjdGx5P2BcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGRhdGFPcHRpb25zKSB7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgIWlzRnVuY3Rpb24oZGF0YU9wdGlvbnMpKSB7XG4gICAgICB3YXJuJDEoXG4gICAgICAgIGBUaGUgZGF0YSBvcHRpb24gbXVzdCBiZSBhIGZ1bmN0aW9uLiBQbGFpbiBvYmplY3QgdXNhZ2UgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZC5gXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gZGF0YU9wdGlvbnMuY2FsbChwdWJsaWNUaGlzLCBwdWJsaWNUaGlzKTtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBpc1Byb21pc2UoZGF0YSkpIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgYGRhdGEoKSByZXR1cm5lZCBhIFByb21pc2UgLSBub3RlIGRhdGEoKSBjYW5ub3QgYmUgYXN5bmM7IElmIHlvdSBpbnRlbmQgdG8gcGVyZm9ybSBkYXRhIGZldGNoaW5nIGJlZm9yZSBjb21wb25lbnQgcmVuZGVycywgdXNlIGFzeW5jIHNldHVwKCkgKyA8U3VzcGVuc2U+LmBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgd2FybiQxKGBkYXRhKCkgc2hvdWxkIHJldHVybiBhbiBvYmplY3QuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLmRhdGEgPSByZWFjdGl2ZShkYXRhKTtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICBjaGVja0R1cGxpY2F0ZVByb3BlcnRpZXMoXCJEYXRhXCIsIGtleSk7XG4gICAgICAgICAgaWYgKCFpc1Jlc2VydmVkUHJlZml4KGtleVswXSkpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdHgsIGtleSwge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGdldDogKCkgPT4gZGF0YVtrZXldLFxuICAgICAgICAgICAgICBzZXQ6IE5PT1BcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBzaG91bGRDYWNoZUFjY2VzcyA9IHRydWU7XG4gIGlmIChjb21wdXRlZE9wdGlvbnMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wdXRlZE9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IG9wdCA9IGNvbXB1dGVkT3B0aW9uc1trZXldO1xuICAgICAgY29uc3QgZ2V0ID0gaXNGdW5jdGlvbihvcHQpID8gb3B0LmJpbmQocHVibGljVGhpcywgcHVibGljVGhpcykgOiBpc0Z1bmN0aW9uKG9wdC5nZXQpID8gb3B0LmdldC5iaW5kKHB1YmxpY1RoaXMsIHB1YmxpY1RoaXMpIDogTk9PUDtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGdldCA9PT0gTk9PUCkge1xuICAgICAgICB3YXJuJDEoYENvbXB1dGVkIHByb3BlcnR5IFwiJHtrZXl9XCIgaGFzIG5vIGdldHRlci5gKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNldCA9ICFpc0Z1bmN0aW9uKG9wdCkgJiYgaXNGdW5jdGlvbihvcHQuc2V0KSA/IG9wdC5zZXQuYmluZChwdWJsaWNUaGlzKSA6ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyAoKSA9PiB7XG4gICAgICAgIHdhcm4kMShcbiAgICAgICAgICBgV3JpdGUgb3BlcmF0aW9uIGZhaWxlZDogY29tcHV0ZWQgcHJvcGVydHkgXCIke2tleX1cIiBpcyByZWFkb25seS5gXG4gICAgICAgICk7XG4gICAgICB9IDogTk9PUDtcbiAgICAgIGNvbnN0IGMgPSBjb21wdXRlZCh7XG4gICAgICAgIGdldCxcbiAgICAgICAgc2V0XG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdHgsIGtleSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogKCkgPT4gYy52YWx1ZSxcbiAgICAgICAgc2V0OiAodikgPT4gYy52YWx1ZSA9IHZcbiAgICAgIH0pO1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgY2hlY2tEdXBsaWNhdGVQcm9wZXJ0aWVzKFwiQ29tcHV0ZWRcIiwga2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHdhdGNoT3B0aW9ucykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHdhdGNoT3B0aW9ucykge1xuICAgICAgY3JlYXRlV2F0Y2hlcih3YXRjaE9wdGlvbnNba2V5XSwgY3R4LCBwdWJsaWNUaGlzLCBrZXkpO1xuICAgIH1cbiAgfVxuICBpZiAocHJvdmlkZU9wdGlvbnMpIHtcbiAgICBjb25zdCBwcm92aWRlcyA9IGlzRnVuY3Rpb24ocHJvdmlkZU9wdGlvbnMpID8gcHJvdmlkZU9wdGlvbnMuY2FsbChwdWJsaWNUaGlzKSA6IHByb3ZpZGVPcHRpb25zO1xuICAgIFJlZmxlY3Qub3duS2V5cyhwcm92aWRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBwcm92aWRlKGtleSwgcHJvdmlkZXNba2V5XSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGNyZWF0ZWQpIHtcbiAgICBjYWxsSG9vayhjcmVhdGVkLCBpbnN0YW5jZSwgXCJjXCIpO1xuICB9XG4gIGZ1bmN0aW9uIHJlZ2lzdGVyTGlmZWN5Y2xlSG9vayhyZWdpc3RlciwgaG9vaykge1xuICAgIGlmIChpc0FycmF5KGhvb2spKSB7XG4gICAgICBob29rLmZvckVhY2goKF9ob29rKSA9PiByZWdpc3RlcihfaG9vay5iaW5kKHB1YmxpY1RoaXMpKSk7XG4gICAgfSBlbHNlIGlmIChob29rKSB7XG4gICAgICByZWdpc3Rlcihob29rLmJpbmQocHVibGljVGhpcykpO1xuICAgIH1cbiAgfVxuICByZWdpc3RlckxpZmVjeWNsZUhvb2sob25CZWZvcmVNb3VudCwgYmVmb3JlTW91bnQpO1xuICByZWdpc3RlckxpZmVjeWNsZUhvb2sob25Nb3VudGVkLCBtb3VudGVkKTtcbiAgcmVnaXN0ZXJMaWZlY3ljbGVIb29rKG9uQmVmb3JlVXBkYXRlLCBiZWZvcmVVcGRhdGUpO1xuICByZWdpc3RlckxpZmVjeWNsZUhvb2sob25VcGRhdGVkLCB1cGRhdGVkKTtcbiAgcmVnaXN0ZXJMaWZlY3ljbGVIb29rKG9uQWN0aXZhdGVkLCBhY3RpdmF0ZWQpO1xuICByZWdpc3RlckxpZmVjeWNsZUhvb2sob25EZWFjdGl2YXRlZCwgZGVhY3RpdmF0ZWQpO1xuICByZWdpc3RlckxpZmVjeWNsZUhvb2sob25FcnJvckNhcHR1cmVkLCBlcnJvckNhcHR1cmVkKTtcbiAgcmVnaXN0ZXJMaWZlY3ljbGVIb29rKG9uUmVuZGVyVHJhY2tlZCwgcmVuZGVyVHJhY2tlZCk7XG4gIHJlZ2lzdGVyTGlmZWN5Y2xlSG9vayhvblJlbmRlclRyaWdnZXJlZCwgcmVuZGVyVHJpZ2dlcmVkKTtcbiAgcmVnaXN0ZXJMaWZlY3ljbGVIb29rKG9uQmVmb3JlVW5tb3VudCwgYmVmb3JlVW5tb3VudCk7XG4gIHJlZ2lzdGVyTGlmZWN5Y2xlSG9vayhvblVubW91bnRlZCwgdW5tb3VudGVkKTtcbiAgcmVnaXN0ZXJMaWZlY3ljbGVIb29rKG9uU2VydmVyUHJlZmV0Y2gsIHNlcnZlclByZWZldGNoKTtcbiAgaWYgKGlzQXJyYXkoZXhwb3NlKSkge1xuICAgIGlmIChleHBvc2UubGVuZ3RoKSB7XG4gICAgICBjb25zdCBleHBvc2VkID0gaW5zdGFuY2UuZXhwb3NlZCB8fCAoaW5zdGFuY2UuZXhwb3NlZCA9IHt9KTtcbiAgICAgIGV4cG9zZS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9zZWQsIGtleSwge1xuICAgICAgICAgIGdldDogKCkgPT4gcHVibGljVGhpc1trZXldLFxuICAgICAgICAgIHNldDogKHZhbCkgPT4gcHVibGljVGhpc1trZXldID0gdmFsLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFpbnN0YW5jZS5leHBvc2VkKSB7XG4gICAgICBpbnN0YW5jZS5leHBvc2VkID0ge307XG4gICAgfVxuICB9XG4gIGlmIChyZW5kZXIyICYmIGluc3RhbmNlLnJlbmRlciA9PT0gTk9PUCkge1xuICAgIGluc3RhbmNlLnJlbmRlciA9IHJlbmRlcjI7XG4gIH1cbiAgaWYgKGluaGVyaXRBdHRycyAhPSBudWxsKSB7XG4gICAgaW5zdGFuY2UuaW5oZXJpdEF0dHJzID0gaW5oZXJpdEF0dHJzO1xuICB9XG4gIGlmIChjb21wb25lbnRzKSBpbnN0YW5jZS5jb21wb25lbnRzID0gY29tcG9uZW50cztcbiAgaWYgKGRpcmVjdGl2ZXMpIGluc3RhbmNlLmRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzO1xuICBpZiAoc2VydmVyUHJlZmV0Y2gpIHtcbiAgICBtYXJrQXN5bmNCb3VuZGFyeShpbnN0YW5jZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlc29sdmVJbmplY3Rpb25zKGluamVjdE9wdGlvbnMsIGN0eCwgY2hlY2tEdXBsaWNhdGVQcm9wZXJ0aWVzID0gTk9PUCkge1xuICBpZiAoaXNBcnJheShpbmplY3RPcHRpb25zKSkge1xuICAgIGluamVjdE9wdGlvbnMgPSBub3JtYWxpemVJbmplY3QoaW5qZWN0T3B0aW9ucyk7XG4gIH1cbiAgZm9yIChjb25zdCBrZXkgaW4gaW5qZWN0T3B0aW9ucykge1xuICAgIGNvbnN0IG9wdCA9IGluamVjdE9wdGlvbnNba2V5XTtcbiAgICBsZXQgaW5qZWN0ZWQ7XG4gICAgaWYgKGlzT2JqZWN0KG9wdCkpIHtcbiAgICAgIGlmIChcImRlZmF1bHRcIiBpbiBvcHQpIHtcbiAgICAgICAgaW5qZWN0ZWQgPSBpbmplY3QkMShcbiAgICAgICAgICBvcHQuZnJvbSB8fCBrZXksXG4gICAgICAgICAgb3B0LmRlZmF1bHQsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5qZWN0ZWQgPSBpbmplY3QkMShvcHQuZnJvbSB8fCBrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbmplY3RlZCA9IGluamVjdCQxKG9wdCk7XG4gICAgfVxuICAgIGlmIChpc1JlZihpbmplY3RlZCkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdHgsIGtleSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogKCkgPT4gaW5qZWN0ZWQudmFsdWUsXG4gICAgICAgIHNldDogKHYpID0+IGluamVjdGVkLnZhbHVlID0gdlxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eFtrZXldID0gaW5qZWN0ZWQ7XG4gICAgfVxuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICBjaGVja0R1cGxpY2F0ZVByb3BlcnRpZXMoXCJJbmplY3RcIiwga2V5KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNhbGxIb29rKGhvb2ssIGluc3RhbmNlLCB0eXBlKSB7XG4gIGNhbGxXaXRoQXN5bmNFcnJvckhhbmRsaW5nKFxuICAgIGlzQXJyYXkoaG9vaykgPyBob29rLm1hcCgoaDIpID0+IGgyLmJpbmQoaW5zdGFuY2UucHJveHkpKSA6IGhvb2suYmluZChpbnN0YW5jZS5wcm94eSksXG4gICAgaW5zdGFuY2UsXG4gICAgdHlwZVxuICApO1xufVxuZnVuY3Rpb24gY3JlYXRlV2F0Y2hlcihyYXcsIGN0eCwgcHVibGljVGhpcywga2V5KSB7XG4gIGxldCBnZXR0ZXIgPSBrZXkuaW5jbHVkZXMoXCIuXCIpID8gY3JlYXRlUGF0aEdldHRlcihwdWJsaWNUaGlzLCBrZXkpIDogKCkgPT4gcHVibGljVGhpc1trZXldO1xuICBpZiAoaXNTdHJpbmcocmF3KSkge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBjdHhbcmF3XTtcbiAgICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAge1xuICAgICAgICB3YXRjaChnZXR0ZXIsIGhhbmRsZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgd2FybiQxKGBJbnZhbGlkIHdhdGNoIGhhbmRsZXIgc3BlY2lmaWVkIGJ5IGtleSBcIiR7cmF3fVwiYCwgaGFuZGxlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24ocmF3KSkge1xuICAgIHtcbiAgICAgIHdhdGNoKGdldHRlciwgcmF3LmJpbmQocHVibGljVGhpcykpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdChyYXcpKSB7XG4gICAgaWYgKGlzQXJyYXkocmF3KSkge1xuICAgICAgcmF3LmZvckVhY2goKHIpID0+IGNyZWF0ZVdhdGNoZXIociwgY3R4LCBwdWJsaWNUaGlzLCBrZXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaGFuZGxlciA9IGlzRnVuY3Rpb24ocmF3LmhhbmRsZXIpID8gcmF3LmhhbmRsZXIuYmluZChwdWJsaWNUaGlzKSA6IGN0eFtyYXcuaGFuZGxlcl07XG4gICAgICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgICB3YXRjaChnZXR0ZXIsIGhhbmRsZXIsIHJhdyk7XG4gICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgd2FybiQxKGBJbnZhbGlkIHdhdGNoIGhhbmRsZXIgc3BlY2lmaWVkIGJ5IGtleSBcIiR7cmF3LmhhbmRsZXJ9XCJgLCBoYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIHdhcm4kMShgSW52YWxpZCB3YXRjaCBvcHRpb246IFwiJHtrZXl9XCJgLCByYXcpO1xuICB9XG59XG5mdW5jdGlvbiByZXNvbHZlTWVyZ2VkT3B0aW9ucyhpbnN0YW5jZSkge1xuICBjb25zdCBiYXNlID0gaW5zdGFuY2UudHlwZTtcbiAgY29uc3QgeyBtaXhpbnMsIGV4dGVuZHM6IGV4dGVuZHNPcHRpb25zIH0gPSBiYXNlO1xuICBjb25zdCB7XG4gICAgbWl4aW5zOiBnbG9iYWxNaXhpbnMsXG4gICAgb3B0aW9uc0NhY2hlOiBjYWNoZSxcbiAgICBjb25maWc6IHsgb3B0aW9uTWVyZ2VTdHJhdGVnaWVzIH1cbiAgfSA9IGluc3RhbmNlLmFwcENvbnRleHQ7XG4gIGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChiYXNlKTtcbiAgbGV0IHJlc29sdmVkO1xuICBpZiAoY2FjaGVkKSB7XG4gICAgcmVzb2x2ZWQgPSBjYWNoZWQ7XG4gIH0gZWxzZSBpZiAoIWdsb2JhbE1peGlucy5sZW5ndGggJiYgIW1peGlucyAmJiAhZXh0ZW5kc09wdGlvbnMpIHtcbiAgICB7XG4gICAgICByZXNvbHZlZCA9IGJhc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc29sdmVkID0ge307XG4gICAgaWYgKGdsb2JhbE1peGlucy5sZW5ndGgpIHtcbiAgICAgIGdsb2JhbE1peGlucy5mb3JFYWNoKFxuICAgICAgICAobSkgPT4gbWVyZ2VPcHRpb25zKHJlc29sdmVkLCBtLCBvcHRpb25NZXJnZVN0cmF0ZWdpZXMsIHRydWUpXG4gICAgICApO1xuICAgIH1cbiAgICBtZXJnZU9wdGlvbnMocmVzb2x2ZWQsIGJhc2UsIG9wdGlvbk1lcmdlU3RyYXRlZ2llcyk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KGJhc2UpKSB7XG4gICAgY2FjaGUuc2V0KGJhc2UsIHJlc29sdmVkKTtcbiAgfVxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5mdW5jdGlvbiBtZXJnZU9wdGlvbnModG8sIGZyb20sIHN0cmF0cywgYXNNaXhpbiA9IGZhbHNlKSB7XG4gIGNvbnN0IHsgbWl4aW5zLCBleHRlbmRzOiBleHRlbmRzT3B0aW9ucyB9ID0gZnJvbTtcbiAgaWYgKGV4dGVuZHNPcHRpb25zKSB7XG4gICAgbWVyZ2VPcHRpb25zKHRvLCBleHRlbmRzT3B0aW9ucywgc3RyYXRzLCB0cnVlKTtcbiAgfVxuICBpZiAobWl4aW5zKSB7XG4gICAgbWl4aW5zLmZvckVhY2goXG4gICAgICAobSkgPT4gbWVyZ2VPcHRpb25zKHRvLCBtLCBzdHJhdHMsIHRydWUpXG4gICAgKTtcbiAgfVxuICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tKSB7XG4gICAgaWYgKGFzTWl4aW4gJiYga2V5ID09PSBcImV4cG9zZVwiKSB7XG4gICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdhcm4kMShcbiAgICAgICAgYFwiZXhwb3NlXCIgb3B0aW9uIGlzIGlnbm9yZWQgd2hlbiBkZWNsYXJlZCBpbiBtaXhpbnMgb3IgZXh0ZW5kcy4gSXQgc2hvdWxkIG9ubHkgYmUgZGVjbGFyZWQgaW4gdGhlIGJhc2UgY29tcG9uZW50IGl0c2VsZi5gXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHJhdCA9IGludGVybmFsT3B0aW9uTWVyZ2VTdHJhdHNba2V5XSB8fCBzdHJhdHMgJiYgc3RyYXRzW2tleV07XG4gICAgICB0b1trZXldID0gc3RyYXQgPyBzdHJhdCh0b1trZXldLCBmcm9tW2tleV0pIDogZnJvbVtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG87XG59XG5jb25zdCBpbnRlcm5hbE9wdGlvbk1lcmdlU3RyYXRzID0ge1xuICBkYXRhOiBtZXJnZURhdGFGbixcbiAgcHJvcHM6IG1lcmdlRW1pdHNPclByb3BzT3B0aW9ucyxcbiAgZW1pdHM6IG1lcmdlRW1pdHNPclByb3BzT3B0aW9ucyxcbiAgLy8gb2JqZWN0c1xuICBtZXRob2RzOiBtZXJnZU9iamVjdE9wdGlvbnMsXG4gIGNvbXB1dGVkOiBtZXJnZU9iamVjdE9wdGlvbnMsXG4gIC8vIGxpZmVjeWNsZVxuICBiZWZvcmVDcmVhdGU6IG1lcmdlQXNBcnJheSxcbiAgY3JlYXRlZDogbWVyZ2VBc0FycmF5LFxuICBiZWZvcmVNb3VudDogbWVyZ2VBc0FycmF5LFxuICBtb3VudGVkOiBtZXJnZUFzQXJyYXksXG4gIGJlZm9yZVVwZGF0ZTogbWVyZ2VBc0FycmF5LFxuICB1cGRhdGVkOiBtZXJnZUFzQXJyYXksXG4gIGJlZm9yZURlc3Ryb3k6IG1lcmdlQXNBcnJheSxcbiAgYmVmb3JlVW5tb3VudDogbWVyZ2VBc0FycmF5LFxuICBkZXN0cm95ZWQ6IG1lcmdlQXNBcnJheSxcbiAgdW5tb3VudGVkOiBtZXJnZUFzQXJyYXksXG4gIGFjdGl2YXRlZDogbWVyZ2VBc0FycmF5LFxuICBkZWFjdGl2YXRlZDogbWVyZ2VBc0FycmF5LFxuICBlcnJvckNhcHR1cmVkOiBtZXJnZUFzQXJyYXksXG4gIHNlcnZlclByZWZldGNoOiBtZXJnZUFzQXJyYXksXG4gIC8vIGFzc2V0c1xuICBjb21wb25lbnRzOiBtZXJnZU9iamVjdE9wdGlvbnMsXG4gIGRpcmVjdGl2ZXM6IG1lcmdlT2JqZWN0T3B0aW9ucyxcbiAgLy8gd2F0Y2hcbiAgd2F0Y2g6IG1lcmdlV2F0Y2hPcHRpb25zLFxuICAvLyBwcm92aWRlIC8gaW5qZWN0XG4gIHByb3ZpZGU6IG1lcmdlRGF0YUZuLFxuICBpbmplY3Q6IG1lcmdlSW5qZWN0XG59O1xuZnVuY3Rpb24gbWVyZ2VEYXRhRm4odG8sIGZyb20pIHtcbiAgaWYgKCFmcm9tKSB7XG4gICAgcmV0dXJuIHRvO1xuICB9XG4gIGlmICghdG8pIHtcbiAgICByZXR1cm4gZnJvbTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkRGF0YUZuKCkge1xuICAgIHJldHVybiBleHRlbmQoXG4gICAgICBpc0Z1bmN0aW9uKHRvKSA/IHRvLmNhbGwodGhpcywgdGhpcykgOiB0byxcbiAgICAgIGlzRnVuY3Rpb24oZnJvbSkgPyBmcm9tLmNhbGwodGhpcywgdGhpcykgOiBmcm9tXG4gICAgKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIG1lcmdlSW5qZWN0KHRvLCBmcm9tKSB7XG4gIHJldHVybiBtZXJnZU9iamVjdE9wdGlvbnMobm9ybWFsaXplSW5qZWN0KHRvKSwgbm9ybWFsaXplSW5qZWN0KGZyb20pKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUluamVjdChyYXcpIHtcbiAgaWYgKGlzQXJyYXkocmF3KSkge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXNbcmF3W2ldXSA9IHJhd1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICByZXR1cm4gcmF3O1xufVxuZnVuY3Rpb24gbWVyZ2VBc0FycmF5KHRvLCBmcm9tKSB7XG4gIHJldHVybiB0byA/IFsuLi5uZXcgU2V0KFtdLmNvbmNhdCh0bywgZnJvbSkpXSA6IGZyb207XG59XG5mdW5jdGlvbiBtZXJnZU9iamVjdE9wdGlvbnModG8sIGZyb20pIHtcbiAgcmV0dXJuIHRvID8gZXh0ZW5kKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpLCB0bywgZnJvbSkgOiBmcm9tO1xufVxuZnVuY3Rpb24gbWVyZ2VFbWl0c09yUHJvcHNPcHRpb25zKHRvLCBmcm9tKSB7XG4gIGlmICh0bykge1xuICAgIGlmIChpc0FycmF5KHRvKSAmJiBpc0FycmF5KGZyb20pKSB7XG4gICAgICByZXR1cm4gWy4uLi8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFsuLi50bywgLi4uZnJvbV0pXTtcbiAgICB9XG4gICAgcmV0dXJuIGV4dGVuZChcbiAgICAgIC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgbm9ybWFsaXplUHJvcHNPckVtaXRzKHRvKSxcbiAgICAgIG5vcm1hbGl6ZVByb3BzT3JFbWl0cyhmcm9tICE9IG51bGwgPyBmcm9tIDoge30pXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnJvbTtcbiAgfVxufVxuZnVuY3Rpb24gbWVyZ2VXYXRjaE9wdGlvbnModG8sIGZyb20pIHtcbiAgaWYgKCF0bykgcmV0dXJuIGZyb207XG4gIGlmICghZnJvbSkgcmV0dXJuIHRvO1xuICBjb25zdCBtZXJnZWQgPSBleHRlbmQoLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCksIHRvKTtcbiAgZm9yIChjb25zdCBrZXkgaW4gZnJvbSkge1xuICAgIG1lcmdlZFtrZXldID0gbWVyZ2VBc0FycmF5KHRvW2tleV0sIGZyb21ba2V5XSk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlZDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUFwcENvbnRleHQoKSB7XG4gIHJldHVybiB7XG4gICAgYXBwOiBudWxsLFxuICAgIGNvbmZpZzoge1xuICAgICAgaXNOYXRpdmVUYWc6IE5PLFxuICAgICAgcGVyZm9ybWFuY2U6IGZhbHNlLFxuICAgICAgZ2xvYmFsUHJvcGVydGllczoge30sXG4gICAgICBvcHRpb25NZXJnZVN0cmF0ZWdpZXM6IHt9LFxuICAgICAgZXJyb3JIYW5kbGVyOiB2b2lkIDAsXG4gICAgICB3YXJuSGFuZGxlcjogdm9pZCAwLFxuICAgICAgY29tcGlsZXJPcHRpb25zOiB7fVxuICAgIH0sXG4gICAgbWl4aW5zOiBbXSxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBkaXJlY3RpdmVzOiB7fSxcbiAgICBwcm92aWRlczogLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgb3B0aW9uc0NhY2hlOiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSxcbiAgICBwcm9wc0NhY2hlOiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSxcbiAgICBlbWl0c0NhY2hlOiAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKVxuICB9O1xufVxubGV0IHVpZCQxID0gMDtcbmZ1bmN0aW9uIGNyZWF0ZUFwcEFQSShyZW5kZXIyLCBoeWRyYXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVBcHAyKHJvb3RDb21wb25lbnQsIHJvb3RQcm9wcyA9IG51bGwpIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24ocm9vdENvbXBvbmVudCkpIHtcbiAgICAgIHJvb3RDb21wb25lbnQgPSBleHRlbmQoe30sIHJvb3RDb21wb25lbnQpO1xuICAgIH1cbiAgICBpZiAocm9vdFByb3BzICE9IG51bGwgJiYgIWlzT2JqZWN0KHJvb3RQcm9wcykpIHtcbiAgICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgd2FybiQxKGByb290IHByb3BzIHBhc3NlZCB0byBhcHAubW91bnQoKSBtdXN0IGJlIGFuIG9iamVjdC5gKTtcbiAgICAgIHJvb3RQcm9wcyA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRleHQgPSBjcmVhdGVBcHBDb250ZXh0KCk7XG4gICAgY29uc3QgaW5zdGFsbGVkUGx1Z2lucyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha1NldCgpO1xuICAgIGNvbnN0IHBsdWdpbkNsZWFudXBGbnMgPSBbXTtcbiAgICBsZXQgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgY29uc3QgYXBwID0gY29udGV4dC5hcHAgPSB7XG4gICAgICBfdWlkOiB1aWQkMSsrLFxuICAgICAgX2NvbXBvbmVudDogcm9vdENvbXBvbmVudCxcbiAgICAgIF9wcm9wczogcm9vdFByb3BzLFxuICAgICAgX2NvbnRhaW5lcjogbnVsbCxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0LFxuICAgICAgX2luc3RhbmNlOiBudWxsLFxuICAgICAgdmVyc2lvbixcbiAgICAgIGdldCBjb25maWcoKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0LmNvbmZpZztcbiAgICAgIH0sXG4gICAgICBzZXQgY29uZmlnKHYpIHtcbiAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICBgYXBwLmNvbmZpZyBjYW5ub3QgYmUgcmVwbGFjZWQuIE1vZGlmeSBpbmRpdmlkdWFsIG9wdGlvbnMgaW5zdGVhZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHVzZShwbHVnaW4sIC4uLm9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGluc3RhbGxlZFBsdWdpbnMuaGFzKHBsdWdpbikpIHtcbiAgICAgICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdhcm4kMShgUGx1Z2luIGhhcyBhbHJlYWR5IGJlZW4gYXBwbGllZCB0byB0YXJnZXQgYXBwLmApO1xuICAgICAgICB9IGVsc2UgaWYgKHBsdWdpbiAmJiBpc0Z1bmN0aW9uKHBsdWdpbi5pbnN0YWxsKSkge1xuICAgICAgICAgIGluc3RhbGxlZFBsdWdpbnMuYWRkKHBsdWdpbik7XG4gICAgICAgICAgcGx1Z2luLmluc3RhbGwoYXBwLCAuLi5vcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHBsdWdpbikpIHtcbiAgICAgICAgICBpbnN0YWxsZWRQbHVnaW5zLmFkZChwbHVnaW4pO1xuICAgICAgICAgIHBsdWdpbihhcHAsIC4uLm9wdGlvbnMpO1xuICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICBgQSBwbHVnaW4gbXVzdCBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhbiBvYmplY3Qgd2l0aCBhbiBcImluc3RhbGxcIiBmdW5jdGlvbi5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXBwO1xuICAgICAgfSxcbiAgICAgIG1peGluKG1peGluKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoIWNvbnRleHQubWl4aW5zLmluY2x1ZGVzKG1peGluKSkge1xuICAgICAgICAgICAgY29udGV4dC5taXhpbnMucHVzaChtaXhpbik7XG4gICAgICAgICAgfSBlbHNlIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICAgIFwiTWl4aW4gaGFzIGFscmVhZHkgYmVlbiBhcHBsaWVkIHRvIHRhcmdldCBhcHBcIiArIChtaXhpbi5uYW1lID8gYDogJHttaXhpbi5uYW1lfWAgOiBcIlwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFwcDtcbiAgICAgIH0sXG4gICAgICBjb21wb25lbnQobmFtZSwgY29tcG9uZW50KSB7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgdmFsaWRhdGVDb21wb25lbnROYW1lKG5hbWUsIGNvbnRleHQuY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmNvbXBvbmVudHNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgY29udGV4dC5jb21wb25lbnRzW25hbWVdKSB7XG4gICAgICAgICAgd2FybiQxKGBDb21wb25lbnQgXCIke25hbWV9XCIgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkIGluIHRhcmdldCBhcHAuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xuICAgICAgICByZXR1cm4gYXBwO1xuICAgICAgfSxcbiAgICAgIGRpcmVjdGl2ZShuYW1lLCBkaXJlY3RpdmUpIHtcbiAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICB2YWxpZGF0ZURpcmVjdGl2ZU5hbWUobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkaXJlY3RpdmUpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXJlY3RpdmVzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGNvbnRleHQuZGlyZWN0aXZlc1tuYW1lXSkge1xuICAgICAgICAgIHdhcm4kMShgRGlyZWN0aXZlIFwiJHtuYW1lfVwiIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZCBpbiB0YXJnZXQgYXBwLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuZGlyZWN0aXZlc1tuYW1lXSA9IGRpcmVjdGl2ZTtcbiAgICAgICAgcmV0dXJuIGFwcDtcbiAgICAgIH0sXG4gICAgICBtb3VudChyb290Q29udGFpbmVyLCBpc0h5ZHJhdGUsIG5hbWVzcGFjZSkge1xuICAgICAgICBpZiAoIWlzTW91bnRlZCkge1xuICAgICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHJvb3RDb250YWluZXIuX192dWVfYXBwX18pIHtcbiAgICAgICAgICAgIHdhcm4kMShcbiAgICAgICAgICAgICAgYFRoZXJlIGlzIGFscmVhZHkgYW4gYXBwIGluc3RhbmNlIG1vdW50ZWQgb24gdGhlIGhvc3QgY29udGFpbmVyLlxuIElmIHlvdSB3YW50IHRvIG1vdW50IGFub3RoZXIgYXBwIG9uIHRoZSBzYW1lIGhvc3QgY29udGFpbmVyLCB5b3UgbmVlZCB0byB1bm1vdW50IHRoZSBwcmV2aW91cyBhcHAgYnkgY2FsbGluZyBcXGBhcHAudW5tb3VudCgpXFxgIGZpcnN0LmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHZub2RlID0gYXBwLl9jZVZOb2RlIHx8IGNyZWF0ZVZOb2RlKHJvb3RDb21wb25lbnQsIHJvb3RQcm9wcyk7XG4gICAgICAgICAgdm5vZGUuYXBwQ29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgaWYgKG5hbWVzcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbmFtZXNwYWNlID0gXCJzdmdcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5hbWVzcGFjZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHZvaWQgMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICAgIGNvbnRleHQucmVsb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjbG9uZWQgPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgICAgICAgICAgICAgY2xvbmVkLmVsID0gbnVsbDtcbiAgICAgICAgICAgICAgcmVuZGVyMihjbG9uZWQsIHJvb3RDb250YWluZXIsIG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICByZW5kZXIyKHZub2RlLCByb290Q29udGFpbmVyLCBuYW1lc3BhY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgIGFwcC5fY29udGFpbmVyID0gcm9vdENvbnRhaW5lcjtcbiAgICAgICAgICByb290Q29udGFpbmVyLl9fdnVlX2FwcF9fID0gYXBwO1xuICAgICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IGZhbHNlKSB7XG4gICAgICAgICAgICBhcHAuX2luc3RhbmNlID0gdm5vZGUuY29tcG9uZW50O1xuICAgICAgICAgICAgZGV2dG9vbHNJbml0QXBwKGFwcCwgdmVyc2lvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnRQdWJsaWNJbnN0YW5jZSh2bm9kZS5jb21wb25lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICBgQXBwIGhhcyBhbHJlYWR5IGJlZW4gbW91bnRlZC5cbklmIHlvdSB3YW50IHRvIHJlbW91bnQgdGhlIHNhbWUgYXBwLCBtb3ZlIHlvdXIgYXBwIGNyZWF0aW9uIGxvZ2ljIGludG8gYSBmYWN0b3J5IGZ1bmN0aW9uIGFuZCBjcmVhdGUgZnJlc2ggYXBwIGluc3RhbmNlcyBmb3IgZWFjaCBtb3VudCAtIGUuZy4gXFxgY29uc3QgY3JlYXRlTXlBcHAgPSAoKSA9PiBjcmVhdGVBcHAoQXBwKVxcYGBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Vbm1vdW50KGNsZWFudXBGbikge1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB0eXBlb2YgY2xlYW51cEZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICBgRXhwZWN0ZWQgZnVuY3Rpb24gYXMgZmlyc3QgYXJndW1lbnQgdG8gYXBwLm9uVW5tb3VudCgpLCBidXQgZ290ICR7dHlwZW9mIGNsZWFudXBGbn1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBwbHVnaW5DbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuKTtcbiAgICAgIH0sXG4gICAgICB1bm1vdW50KCkge1xuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XG4gICAgICAgICAgY2FsbFdpdGhBc3luY0Vycm9ySGFuZGxpbmcoXG4gICAgICAgICAgICBwbHVnaW5DbGVhbnVwRm5zLFxuICAgICAgICAgICAgYXBwLl9pbnN0YW5jZSxcbiAgICAgICAgICAgIDE2XG4gICAgICAgICAgKTtcbiAgICAgICAgICByZW5kZXIyKG51bGwsIGFwcC5fY29udGFpbmVyKTtcbiAgICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBmYWxzZSkge1xuICAgICAgICAgICAgYXBwLl9pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgICAgICBkZXZ0b29sc1VubW91bnRBcHAoYXBwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIGFwcC5fY29udGFpbmVyLl9fdnVlX2FwcF9fO1xuICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICB3YXJuJDEoYENhbm5vdCB1bm1vdW50IGFuIGFwcCB0aGF0IGlzIG5vdCBtb3VudGVkLmApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvdmlkZShrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGtleSBpbiBjb250ZXh0LnByb3ZpZGVzKSB7XG4gICAgICAgICAgaWYgKGhhc093bihjb250ZXh0LnByb3ZpZGVzLCBrZXkpKSB7XG4gICAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICAgIGBBcHAgYWxyZWFkeSBwcm92aWRlcyBwcm9wZXJ0eSB3aXRoIGtleSBcIiR7U3RyaW5nKGtleSl9XCIuIEl0IHdpbGwgYmUgb3ZlcndyaXR0ZW4gd2l0aCB0aGUgbmV3IHZhbHVlLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhcm4kMShcbiAgICAgICAgICAgICAgYEFwcCBhbHJlYWR5IHByb3ZpZGVzIHByb3BlcnR5IHdpdGgga2V5IFwiJHtTdHJpbmcoa2V5KX1cIiBpbmhlcml0ZWQgZnJvbSBpdHMgcGFyZW50IGVsZW1lbnQuIEl0IHdpbGwgYmUgb3ZlcndyaXR0ZW4gd2l0aCB0aGUgbmV3IHZhbHVlLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQucHJvdmlkZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gYXBwO1xuICAgICAgfSxcbiAgICAgIHJ1bldpdGhDb250ZXh0KGZuKSB7XG4gICAgICAgIGNvbnN0IGxhc3RBcHAgPSBjdXJyZW50QXBwO1xuICAgICAgICBjdXJyZW50QXBwID0gYXBwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBmbigpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGN1cnJlbnRBcHAgPSBsYXN0QXBwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gYXBwO1xuICB9O1xufVxubGV0IGN1cnJlbnRBcHAgPSBudWxsO1xuZnVuY3Rpb24gcHJvdmlkZShrZXksIHZhbHVlKSB7XG4gIGlmICghY3VycmVudEluc3RhbmNlKSB7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIHdhcm4kMShgcHJvdmlkZSgpIGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIHNldHVwKCkuYCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBwcm92aWRlcyA9IGN1cnJlbnRJbnN0YW5jZS5wcm92aWRlcztcbiAgICBjb25zdCBwYXJlbnRQcm92aWRlcyA9IGN1cnJlbnRJbnN0YW5jZS5wYXJlbnQgJiYgY3VycmVudEluc3RhbmNlLnBhcmVudC5wcm92aWRlcztcbiAgICBpZiAocGFyZW50UHJvdmlkZXMgPT09IHByb3ZpZGVzKSB7XG4gICAgICBwcm92aWRlcyA9IGN1cnJlbnRJbnN0YW5jZS5wcm92aWRlcyA9IE9iamVjdC5jcmVhdGUocGFyZW50UHJvdmlkZXMpO1xuICAgIH1cbiAgICBwcm92aWRlc1trZXldID0gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGluamVjdCQxKGtleSwgZGVmYXVsdFZhbHVlLCB0cmVhdERlZmF1bHRBc0ZhY3RvcnkgPSBmYWxzZSkge1xuICBjb25zdCBpbnN0YW5jZSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpO1xuICBpZiAoaW5zdGFuY2UgfHwgY3VycmVudEFwcCkge1xuICAgIGxldCBwcm92aWRlcyA9IGN1cnJlbnRBcHAgPyBjdXJyZW50QXBwLl9jb250ZXh0LnByb3ZpZGVzIDogaW5zdGFuY2UgPyBpbnN0YW5jZS5wYXJlbnQgPT0gbnVsbCB8fCBpbnN0YW5jZS5jZSA/IGluc3RhbmNlLnZub2RlLmFwcENvbnRleHQgJiYgaW5zdGFuY2Uudm5vZGUuYXBwQ29udGV4dC5wcm92aWRlcyA6IGluc3RhbmNlLnBhcmVudC5wcm92aWRlcyA6IHZvaWQgMDtcbiAgICBpZiAocHJvdmlkZXMgJiYga2V5IGluIHByb3ZpZGVzKSB7XG4gICAgICByZXR1cm4gcHJvdmlkZXNba2V5XTtcbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gdHJlYXREZWZhdWx0QXNGYWN0b3J5ICYmIGlzRnVuY3Rpb24oZGVmYXVsdFZhbHVlKSA/IGRlZmF1bHRWYWx1ZS5jYWxsKGluc3RhbmNlICYmIGluc3RhbmNlLnByb3h5KSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIHdhcm4kMShgaW5qZWN0aW9uIFwiJHtTdHJpbmcoa2V5KX1cIiBub3QgZm91bmQuYCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICB3YXJuJDEoYGluamVjdCgpIGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIHNldHVwKCkgb3IgZnVuY3Rpb25hbCBjb21wb25lbnRzLmApO1xuICB9XG59XG5jb25zdCBpbnRlcm5hbE9iamVjdFByb3RvID0ge307XG5jb25zdCBjcmVhdGVJbnRlcm5hbE9iamVjdCA9ICgpID0+IE9iamVjdC5jcmVhdGUoaW50ZXJuYWxPYmplY3RQcm90byk7XG5jb25zdCBpc0ludGVybmFsT2JqZWN0ID0gKG9iaikgPT4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IGludGVybmFsT2JqZWN0UHJvdG87XG5mdW5jdGlvbiBpbml0UHJvcHMoaW5zdGFuY2UsIHJhd1Byb3BzLCBpc1N0YXRlZnVsLCBpc1NTUiA9IGZhbHNlKSB7XG4gIGNvbnN0IHByb3BzID0ge307XG4gIGNvbnN0IGF0dHJzID0gY3JlYXRlSW50ZXJuYWxPYmplY3QoKTtcbiAgaW5zdGFuY2UucHJvcHNEZWZhdWx0cyA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBzZXRGdWxsUHJvcHMoaW5zdGFuY2UsIHJhd1Byb3BzLCBwcm9wcywgYXR0cnMpO1xuICBmb3IgKGNvbnN0IGtleSBpbiBpbnN0YW5jZS5wcm9wc09wdGlvbnNbMF0pIHtcbiAgICBpZiAoIShrZXkgaW4gcHJvcHMpKSB7XG4gICAgICBwcm9wc1trZXldID0gdm9pZCAwO1xuICAgIH1cbiAgfVxuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIHZhbGlkYXRlUHJvcHMocmF3UHJvcHMgfHwge30sIHByb3BzLCBpbnN0YW5jZSk7XG4gIH1cbiAgaWYgKGlzU3RhdGVmdWwpIHtcbiAgICBpbnN0YW5jZS5wcm9wcyA9IGlzU1NSID8gcHJvcHMgOiBzaGFsbG93UmVhY3RpdmUocHJvcHMpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaW5zdGFuY2UudHlwZS5wcm9wcykge1xuICAgICAgaW5zdGFuY2UucHJvcHMgPSBhdHRycztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2UucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gIH1cbiAgaW5zdGFuY2UuYXR0cnMgPSBhdHRycztcbn1cbmZ1bmN0aW9uIGlzSW5IbXJDb250ZXh0KGluc3RhbmNlKSB7XG4gIHdoaWxlIChpbnN0YW5jZSkge1xuICAgIGlmIChpbnN0YW5jZS50eXBlLl9faG1ySWQpIHJldHVybiB0cnVlO1xuICAgIGluc3RhbmNlID0gaW5zdGFuY2UucGFyZW50O1xuICB9XG59XG5mdW5jdGlvbiB1cGRhdGVQcm9wcyhpbnN0YW5jZSwgcmF3UHJvcHMsIHJhd1ByZXZQcm9wcywgb3B0aW1pemVkKSB7XG4gIGNvbnN0IHtcbiAgICBwcm9wcyxcbiAgICBhdHRycyxcbiAgICB2bm9kZTogeyBwYXRjaEZsYWcgfVxuICB9ID0gaW5zdGFuY2U7XG4gIGNvbnN0IHJhd0N1cnJlbnRQcm9wcyA9IHRvUmF3KHByb3BzKTtcbiAgY29uc3QgW29wdGlvbnNdID0gaW5zdGFuY2UucHJvcHNPcHRpb25zO1xuICBsZXQgaGFzQXR0cnNDaGFuZ2VkID0gZmFsc2U7XG4gIGlmIChcbiAgICAvLyBhbHdheXMgZm9yY2UgZnVsbCBkaWZmIGluIGRldlxuICAgIC8vIC0gIzE5NDIgaWYgaG1yIGlzIGVuYWJsZWQgd2l0aCBzZmMgY29tcG9uZW50XG4gICAgLy8gLSB2aXRlIzg3MiBub24tc2ZjIGNvbXBvbmVudCB1c2VkIGJ5IHNmYyBjb21wb25lbnRcbiAgICAhKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgaXNJbkhtckNvbnRleHQoaW5zdGFuY2UpKSAmJiAob3B0aW1pemVkIHx8IHBhdGNoRmxhZyA+IDApICYmICEocGF0Y2hGbGFnICYgMTYpXG4gICkge1xuICAgIGlmIChwYXRjaEZsYWcgJiA4KSB7XG4gICAgICBjb25zdCBwcm9wc1RvVXBkYXRlID0gaW5zdGFuY2Uudm5vZGUuZHluYW1pY1Byb3BzO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wc1RvVXBkYXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBwcm9wc1RvVXBkYXRlW2ldO1xuICAgICAgICBpZiAoaXNFbWl0TGlzdGVuZXIoaW5zdGFuY2UuZW1pdHNPcHRpb25zLCBrZXkpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSByYXdQcm9wc1trZXldO1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIGlmIChoYXNPd24oYXR0cnMsIGtleSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gYXR0cnNba2V5XSkge1xuICAgICAgICAgICAgICBhdHRyc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgIGhhc0F0dHJzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbWVsaXplZEtleSA9IGNhbWVsaXplKGtleSk7XG4gICAgICAgICAgICBwcm9wc1tjYW1lbGl6ZWRLZXldID0gcmVzb2x2ZVByb3BWYWx1ZShcbiAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgcmF3Q3VycmVudFByb3BzLFxuICAgICAgICAgICAgICBjYW1lbGl6ZWRLZXksXG4gICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gYXR0cnNba2V5XSkge1xuICAgICAgICAgICAgYXR0cnNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgaGFzQXR0cnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHNldEZ1bGxQcm9wcyhpbnN0YW5jZSwgcmF3UHJvcHMsIHByb3BzLCBhdHRycykpIHtcbiAgICAgIGhhc0F0dHJzQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGxldCBrZWJhYktleTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByYXdDdXJyZW50UHJvcHMpIHtcbiAgICAgIGlmICghcmF3UHJvcHMgfHwgLy8gZm9yIGNhbWVsQ2FzZVxuICAgICAgIWhhc093bihyYXdQcm9wcywga2V5KSAmJiAvLyBpdCdzIHBvc3NpYmxlIHRoZSBvcmlnaW5hbCBwcm9wcyB3YXMgcGFzc2VkIGluIGFzIGtlYmFiLWNhc2VcbiAgICAgIC8vIGFuZCBjb252ZXJ0ZWQgdG8gY2FtZWxDYXNlICgjOTU1KVxuICAgICAgKChrZWJhYktleSA9IGh5cGhlbmF0ZShrZXkpKSA9PT0ga2V5IHx8ICFoYXNPd24ocmF3UHJvcHMsIGtlYmFiS2V5KSkpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICBpZiAocmF3UHJldlByb3BzICYmIC8vIGZvciBjYW1lbENhc2VcbiAgICAgICAgICAocmF3UHJldlByb3BzW2tleV0gIT09IHZvaWQgMCB8fCAvLyBmb3Iga2ViYWItY2FzZVxuICAgICAgICAgIHJhd1ByZXZQcm9wc1trZWJhYktleV0gIT09IHZvaWQgMCkpIHtcbiAgICAgICAgICAgIHByb3BzW2tleV0gPSByZXNvbHZlUHJvcFZhbHVlKFxuICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICByYXdDdXJyZW50UHJvcHMsXG4gICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIHByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF0dHJzICE9PSByYXdDdXJyZW50UHJvcHMpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJzKSB7XG4gICAgICAgIGlmICghcmF3UHJvcHMgfHwgIWhhc093bihyYXdQcm9wcywga2V5KSAmJiB0cnVlKSB7XG4gICAgICAgICAgZGVsZXRlIGF0dHJzW2tleV07XG4gICAgICAgICAgaGFzQXR0cnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoaGFzQXR0cnNDaGFuZ2VkKSB7XG4gICAgdHJpZ2dlcihpbnN0YW5jZS5hdHRycywgXCJzZXRcIiwgXCJcIik7XG4gIH1cbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICB2YWxpZGF0ZVByb3BzKHJhd1Byb3BzIHx8IHt9LCBwcm9wcywgaW5zdGFuY2UpO1xuICB9XG59XG5mdW5jdGlvbiBzZXRGdWxsUHJvcHMoaW5zdGFuY2UsIHJhd1Byb3BzLCBwcm9wcywgYXR0cnMpIHtcbiAgY29uc3QgW29wdGlvbnMsIG5lZWRDYXN0S2V5c10gPSBpbnN0YW5jZS5wcm9wc09wdGlvbnM7XG4gIGxldCBoYXNBdHRyc0NoYW5nZWQgPSBmYWxzZTtcbiAgbGV0IHJhd0Nhc3RWYWx1ZXM7XG4gIGlmIChyYXdQcm9wcykge1xuICAgIGZvciAobGV0IGtleSBpbiByYXdQcm9wcykge1xuICAgICAgaWYgKGlzUmVzZXJ2ZWRQcm9wKGtleSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZSA9IHJhd1Byb3BzW2tleV07XG4gICAgICBsZXQgY2FtZWxLZXk7XG4gICAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgY2FtZWxLZXkgPSBjYW1lbGl6ZShrZXkpKSkge1xuICAgICAgICBpZiAoIW5lZWRDYXN0S2V5cyB8fCAhbmVlZENhc3RLZXlzLmluY2x1ZGVzKGNhbWVsS2V5KSkge1xuICAgICAgICAgIHByb3BzW2NhbWVsS2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIChyYXdDYXN0VmFsdWVzIHx8IChyYXdDYXN0VmFsdWVzID0ge30pKVtjYW1lbEtleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghaXNFbWl0TGlzdGVuZXIoaW5zdGFuY2UuZW1pdHNPcHRpb25zLCBrZXkpKSB7XG4gICAgICAgIGlmICghKGtleSBpbiBhdHRycykgfHwgdmFsdWUgIT09IGF0dHJzW2tleV0pIHtcbiAgICAgICAgICBhdHRyc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgaGFzQXR0cnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAobmVlZENhc3RLZXlzKSB7XG4gICAgY29uc3QgcmF3Q3VycmVudFByb3BzID0gdG9SYXcocHJvcHMpO1xuICAgIGNvbnN0IGNhc3RWYWx1ZXMgPSByYXdDYXN0VmFsdWVzIHx8IEVNUFRZX09CSjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5lZWRDYXN0S2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gbmVlZENhc3RLZXlzW2ldO1xuICAgICAgcHJvcHNba2V5XSA9IHJlc29sdmVQcm9wVmFsdWUoXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHJhd0N1cnJlbnRQcm9wcyxcbiAgICAgICAga2V5LFxuICAgICAgICBjYXN0VmFsdWVzW2tleV0sXG4gICAgICAgIGluc3RhbmNlLFxuICAgICAgICAhaGFzT3duKGNhc3RWYWx1ZXMsIGtleSlcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBoYXNBdHRyc0NoYW5nZWQ7XG59XG5mdW5jdGlvbiByZXNvbHZlUHJvcFZhbHVlKG9wdGlvbnMsIHByb3BzLCBrZXksIHZhbHVlLCBpbnN0YW5jZSwgaXNBYnNlbnQpIHtcbiAgY29uc3Qgb3B0ID0gb3B0aW9uc1trZXldO1xuICBpZiAob3B0ICE9IG51bGwpIHtcbiAgICBjb25zdCBoYXNEZWZhdWx0ID0gaGFzT3duKG9wdCwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChoYXNEZWZhdWx0ICYmIHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IG9wdC5kZWZhdWx0O1xuICAgICAgaWYgKG9wdC50eXBlICE9PSBGdW5jdGlvbiAmJiAhb3B0LnNraXBGYWN0b3J5ICYmIGlzRnVuY3Rpb24oZGVmYXVsdFZhbHVlKSkge1xuICAgICAgICBjb25zdCB7IHByb3BzRGVmYXVsdHMgfSA9IGluc3RhbmNlO1xuICAgICAgICBpZiAoa2V5IGluIHByb3BzRGVmYXVsdHMpIHtcbiAgICAgICAgICB2YWx1ZSA9IHByb3BzRGVmYXVsdHNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCByZXNldCA9IHNldEN1cnJlbnRJbnN0YW5jZShpbnN0YW5jZSk7XG4gICAgICAgICAgdmFsdWUgPSBwcm9wc0RlZmF1bHRzW2tleV0gPSBkZWZhdWx0VmFsdWUuY2FsbChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBwcm9wc1xuICAgICAgICAgICk7XG4gICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoaW5zdGFuY2UuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuY2UuX3NldFByb3Aoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRbXG4gICAgICAwXG4gICAgICAvKiBzaG91bGRDYXN0ICovXG4gICAgXSkge1xuICAgICAgaWYgKGlzQWJzZW50ICYmICFoYXNEZWZhdWx0KSB7XG4gICAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKG9wdFtcbiAgICAgICAgMVxuICAgICAgICAvKiBzaG91bGRDYXN0VHJ1ZSAqL1xuICAgICAgXSAmJiAodmFsdWUgPT09IFwiXCIgfHwgdmFsdWUgPT09IGh5cGhlbmF0ZShrZXkpKSkge1xuICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbmNvbnN0IG1peGluUHJvcHNDYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gbm9ybWFsaXplUHJvcHNPcHRpb25zKGNvbXAsIGFwcENvbnRleHQsIGFzTWl4aW4gPSBmYWxzZSkge1xuICBjb25zdCBjYWNoZSA9IGFzTWl4aW4gPyBtaXhpblByb3BzQ2FjaGUgOiBhcHBDb250ZXh0LnByb3BzQ2FjaGU7XG4gIGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChjb21wKTtcbiAgaWYgKGNhY2hlZCkge1xuICAgIHJldHVybiBjYWNoZWQ7XG4gIH1cbiAgY29uc3QgcmF3ID0gY29tcC5wcm9wcztcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHt9O1xuICBjb25zdCBuZWVkQ2FzdEtleXMgPSBbXTtcbiAgbGV0IGhhc0V4dGVuZHMgPSBmYWxzZTtcbiAgaWYgKCFpc0Z1bmN0aW9uKGNvbXApKSB7XG4gICAgY29uc3QgZXh0ZW5kUHJvcHMgPSAocmF3MikgPT4ge1xuICAgICAgaGFzRXh0ZW5kcyA9IHRydWU7XG4gICAgICBjb25zdCBbcHJvcHMsIGtleXNdID0gbm9ybWFsaXplUHJvcHNPcHRpb25zKHJhdzIsIGFwcENvbnRleHQsIHRydWUpO1xuICAgICAgZXh0ZW5kKG5vcm1hbGl6ZWQsIHByb3BzKTtcbiAgICAgIGlmIChrZXlzKSBuZWVkQ2FzdEtleXMucHVzaCguLi5rZXlzKTtcbiAgICB9O1xuICAgIGlmICghYXNNaXhpbiAmJiBhcHBDb250ZXh0Lm1peGlucy5sZW5ndGgpIHtcbiAgICAgIGFwcENvbnRleHQubWl4aW5zLmZvckVhY2goZXh0ZW5kUHJvcHMpO1xuICAgIH1cbiAgICBpZiAoY29tcC5leHRlbmRzKSB7XG4gICAgICBleHRlbmRQcm9wcyhjb21wLmV4dGVuZHMpO1xuICAgIH1cbiAgICBpZiAoY29tcC5taXhpbnMpIHtcbiAgICAgIGNvbXAubWl4aW5zLmZvckVhY2goZXh0ZW5kUHJvcHMpO1xuICAgIH1cbiAgfVxuICBpZiAoIXJhdyAmJiAhaGFzRXh0ZW5kcykge1xuICAgIGlmIChpc09iamVjdChjb21wKSkge1xuICAgICAgY2FjaGUuc2V0KGNvbXAsIEVNUFRZX0FSUik7XG4gICAgfVxuICAgIHJldHVybiBFTVBUWV9BUlI7XG4gIH1cbiAgaWYgKGlzQXJyYXkocmF3KSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhaXNTdHJpbmcocmF3W2ldKSkge1xuICAgICAgICB3YXJuJDEoYHByb3BzIG11c3QgYmUgc3RyaW5ncyB3aGVuIHVzaW5nIGFycmF5IHN5bnRheC5gLCByYXdbaV0pO1xuICAgICAgfVxuICAgICAgY29uc3Qgbm9ybWFsaXplZEtleSA9IGNhbWVsaXplKHJhd1tpXSk7XG4gICAgICBpZiAodmFsaWRhdGVQcm9wTmFtZShub3JtYWxpemVkS2V5KSkge1xuICAgICAgICBub3JtYWxpemVkW25vcm1hbGl6ZWRLZXldID0gRU1QVFlfT0JKO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChyYXcpIHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhaXNPYmplY3QocmF3KSkge1xuICAgICAgd2FybiQxKGBpbnZhbGlkIHByb3BzIG9wdGlvbnNgLCByYXcpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiByYXcpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRLZXkgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgaWYgKHZhbGlkYXRlUHJvcE5hbWUobm9ybWFsaXplZEtleSkpIHtcbiAgICAgICAgY29uc3Qgb3B0ID0gcmF3W2tleV07XG4gICAgICAgIGNvbnN0IHByb3AgPSBub3JtYWxpemVkW25vcm1hbGl6ZWRLZXldID0gaXNBcnJheShvcHQpIHx8IGlzRnVuY3Rpb24ob3B0KSA/IHsgdHlwZTogb3B0IH0gOiBleHRlbmQoe30sIG9wdCk7XG4gICAgICAgIGNvbnN0IHByb3BUeXBlID0gcHJvcC50eXBlO1xuICAgICAgICBsZXQgc2hvdWxkQ2FzdCA9IGZhbHNlO1xuICAgICAgICBsZXQgc2hvdWxkQ2FzdFRydWUgPSB0cnVlO1xuICAgICAgICBpZiAoaXNBcnJheShwcm9wVHlwZSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvcFR5cGUubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gcHJvcFR5cGVbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSBpc0Z1bmN0aW9uKHR5cGUpICYmIHR5cGUubmFtZTtcbiAgICAgICAgICAgIGlmICh0eXBlTmFtZSA9PT0gXCJCb29sZWFuXCIpIHtcbiAgICAgICAgICAgICAgc2hvdWxkQ2FzdCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlTmFtZSA9PT0gXCJTdHJpbmdcIikge1xuICAgICAgICAgICAgICBzaG91bGRDYXN0VHJ1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaG91bGRDYXN0ID0gaXNGdW5jdGlvbihwcm9wVHlwZSkgJiYgcHJvcFR5cGUubmFtZSA9PT0gXCJCb29sZWFuXCI7XG4gICAgICAgIH1cbiAgICAgICAgcHJvcFtcbiAgICAgICAgICAwXG4gICAgICAgICAgLyogc2hvdWxkQ2FzdCAqL1xuICAgICAgICBdID0gc2hvdWxkQ2FzdDtcbiAgICAgICAgcHJvcFtcbiAgICAgICAgICAxXG4gICAgICAgICAgLyogc2hvdWxkQ2FzdFRydWUgKi9cbiAgICAgICAgXSA9IHNob3VsZENhc3RUcnVlO1xuICAgICAgICBpZiAoc2hvdWxkQ2FzdCB8fCBoYXNPd24ocHJvcCwgXCJkZWZhdWx0XCIpKSB7XG4gICAgICAgICAgbmVlZENhc3RLZXlzLnB1c2gobm9ybWFsaXplZEtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgcmVzID0gW25vcm1hbGl6ZWQsIG5lZWRDYXN0S2V5c107XG4gIGlmIChpc09iamVjdChjb21wKSkge1xuICAgIGNhY2hlLnNldChjb21wLCByZXMpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BOYW1lKGtleSkge1xuICBpZiAoa2V5WzBdICE9PSBcIiRcIiAmJiAhaXNSZXNlcnZlZFByb3Aoa2V5KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICB3YXJuJDEoYEludmFsaWQgcHJvcCBuYW1lOiBcIiR7a2V5fVwiIGlzIGEgcmVzZXJ2ZWQgcHJvcGVydHkuYCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZ2V0VHlwZShjdG9yKSB7XG4gIGlmIChjdG9yID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFwibnVsbFwiO1xuICB9XG4gIGlmICh0eXBlb2YgY3RvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGN0b3IubmFtZSB8fCBcIlwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjdG9yID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3QgbmFtZSA9IGN0b3IuY29uc3RydWN0b3IgJiYgY3Rvci5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIHJldHVybiBuYW1lIHx8IFwiXCI7XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BzKHJhd1Byb3BzLCBwcm9wcywgaW5zdGFuY2UpIHtcbiAgY29uc3QgcmVzb2x2ZWRWYWx1ZXMgPSB0b1Jhdyhwcm9wcyk7XG4gIGNvbnN0IG9wdGlvbnMgPSBpbnN0YW5jZS5wcm9wc09wdGlvbnNbMF07XG4gIGNvbnN0IGNhbWVsaXplUHJvcHNLZXkgPSBPYmplY3Qua2V5cyhyYXdQcm9wcykubWFwKChrZXkpID0+IGNhbWVsaXplKGtleSkpO1xuICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgbGV0IG9wdCA9IG9wdGlvbnNba2V5XTtcbiAgICBpZiAob3B0ID09IG51bGwpIGNvbnRpbnVlO1xuICAgIHZhbGlkYXRlUHJvcChcbiAgICAgIGtleSxcbiAgICAgIHJlc29sdmVkVmFsdWVzW2tleV0sXG4gICAgICBvcHQsXG4gICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gc2hhbGxvd1JlYWRvbmx5KHJlc29sdmVkVmFsdWVzKSA6IHJlc29sdmVkVmFsdWVzLFxuICAgICAgIWNhbWVsaXplUHJvcHNLZXkuaW5jbHVkZXMoa2V5KVxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcChuYW1lLCB2YWx1ZSwgcHJvcCwgcHJvcHMsIGlzQWJzZW50KSB7XG4gIGNvbnN0IHsgdHlwZSwgcmVxdWlyZWQsIHZhbGlkYXRvciwgc2tpcENoZWNrIH0gPSBwcm9wO1xuICBpZiAocmVxdWlyZWQgJiYgaXNBYnNlbnQpIHtcbiAgICB3YXJuJDEoJ01pc3NpbmcgcmVxdWlyZWQgcHJvcDogXCInICsgbmFtZSArICdcIicpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCAmJiAhcmVxdWlyZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGUgIT0gbnVsbCAmJiB0eXBlICE9PSB0cnVlICYmICFza2lwQ2hlY2spIHtcbiAgICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xuICAgIGNvbnN0IHR5cGVzID0gaXNBcnJheSh0eXBlKSA/IHR5cGUgOiBbdHlwZV07XG4gICAgY29uc3QgZXhwZWN0ZWRUeXBlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoICYmICFpc1ZhbGlkOyBpKyspIHtcbiAgICAgIGNvbnN0IHsgdmFsaWQsIGV4cGVjdGVkVHlwZSB9ID0gYXNzZXJ0VHlwZSh2YWx1ZSwgdHlwZXNbaV0pO1xuICAgICAgZXhwZWN0ZWRUeXBlcy5wdXNoKGV4cGVjdGVkVHlwZSB8fCBcIlwiKTtcbiAgICAgIGlzVmFsaWQgPSB2YWxpZDtcbiAgICB9XG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICB3YXJuJDEoZ2V0SW52YWxpZFR5cGVNZXNzYWdlKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmICh2YWxpZGF0b3IgJiYgIXZhbGlkYXRvcih2YWx1ZSwgcHJvcHMpKSB7XG4gICAgd2FybiQxKCdJbnZhbGlkIHByb3A6IGN1c3RvbSB2YWxpZGF0b3IgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFwiJyArIG5hbWUgKyAnXCIuJyk7XG4gIH1cbn1cbmNvbnN0IGlzU2ltcGxlVHlwZSA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKFxuICBcIlN0cmluZyxOdW1iZXIsQm9vbGVhbixGdW5jdGlvbixTeW1ib2wsQmlnSW50XCJcbik7XG5mdW5jdGlvbiBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlKSB7XG4gIGxldCB2YWxpZDtcbiAgY29uc3QgZXhwZWN0ZWRUeXBlID0gZ2V0VHlwZSh0eXBlKTtcbiAgaWYgKGV4cGVjdGVkVHlwZSA9PT0gXCJudWxsXCIpIHtcbiAgICB2YWxpZCA9IHZhbHVlID09PSBudWxsO1xuICB9IGVsc2UgaWYgKGlzU2ltcGxlVHlwZShleHBlY3RlZFR5cGUpKSB7XG4gICAgY29uc3QgdCA9IHR5cGVvZiB2YWx1ZTtcbiAgICB2YWxpZCA9IHQgPT09IGV4cGVjdGVkVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICghdmFsaWQgJiYgdCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gXCJPYmplY3RcIikge1xuICAgIHZhbGlkID0gaXNPYmplY3QodmFsdWUpO1xuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gXCJBcnJheVwiKSB7XG4gICAgdmFsaWQgPSBpc0FycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbGlkLFxuICAgIGV4cGVjdGVkVHlwZVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0SW52YWxpZFR5cGVNZXNzYWdlKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSB7XG4gIGlmIChleHBlY3RlZFR5cGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBgUHJvcCB0eXBlIFtdIGZvciBwcm9wIFwiJHtuYW1lfVwiIHdvbid0IG1hdGNoIGFueXRoaW5nLiBEaWQgeW91IG1lYW4gdG8gdXNlIHR5cGUgQXJyYXkgaW5zdGVhZD9gO1xuICB9XG4gIGxldCBtZXNzYWdlID0gYEludmFsaWQgcHJvcDogdHlwZSBjaGVjayBmYWlsZWQgZm9yIHByb3AgXCIke25hbWV9XCIuIEV4cGVjdGVkICR7ZXhwZWN0ZWRUeXBlcy5tYXAoY2FwaXRhbGl6ZSkuam9pbihcIiB8IFwiKX1gO1xuICBjb25zdCBleHBlY3RlZFR5cGUgPSBleHBlY3RlZFR5cGVzWzBdO1xuICBjb25zdCByZWNlaXZlZFR5cGUgPSB0b1Jhd1R5cGUodmFsdWUpO1xuICBjb25zdCBleHBlY3RlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgZXhwZWN0ZWRUeXBlKTtcbiAgY29uc3QgcmVjZWl2ZWRWYWx1ZSA9IHN0eWxlVmFsdWUodmFsdWUsIHJlY2VpdmVkVHlwZSk7XG4gIGlmIChleHBlY3RlZFR5cGVzLmxlbmd0aCA9PT0gMSAmJiBpc0V4cGxpY2FibGUoZXhwZWN0ZWRUeXBlKSAmJiAhaXNCb29sZWFuKGV4cGVjdGVkVHlwZSwgcmVjZWl2ZWRUeXBlKSkge1xuICAgIG1lc3NhZ2UgKz0gYCB3aXRoIHZhbHVlICR7ZXhwZWN0ZWRWYWx1ZX1gO1xuICB9XG4gIG1lc3NhZ2UgKz0gYCwgZ290ICR7cmVjZWl2ZWRUeXBlfSBgO1xuICBpZiAoaXNFeHBsaWNhYmxlKHJlY2VpdmVkVHlwZSkpIHtcbiAgICBtZXNzYWdlICs9IGB3aXRoIHZhbHVlICR7cmVjZWl2ZWRWYWx1ZX0uYDtcbiAgfVxuICByZXR1cm4gbWVzc2FnZTtcbn1cbmZ1bmN0aW9uIHN0eWxlVmFsdWUodmFsdWUsIHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IFwiU3RyaW5nXCIpIHtcbiAgICByZXR1cm4gYFwiJHt2YWx1ZX1cImA7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJOdW1iZXJcIikge1xuICAgIHJldHVybiBgJHtOdW1iZXIodmFsdWUpfWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfWA7XG4gIH1cbn1cbmZ1bmN0aW9uIGlzRXhwbGljYWJsZSh0eXBlKSB7XG4gIGNvbnN0IGV4cGxpY2l0VHlwZXMgPSBbXCJzdHJpbmdcIiwgXCJudW1iZXJcIiwgXCJib29sZWFuXCJdO1xuICByZXR1cm4gZXhwbGljaXRUeXBlcy5zb21lKChlbGVtKSA9PiB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IGVsZW0pO1xufVxuZnVuY3Rpb24gaXNCb29sZWFuKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGFyZ3Muc29tZSgoZWxlbSkgPT4gZWxlbS50b0xvd2VyQ2FzZSgpID09PSBcImJvb2xlYW5cIik7XG59XG5jb25zdCBpc0ludGVybmFsS2V5ID0gKGtleSkgPT4ga2V5ID09PSBcIl9cIiB8fCBrZXkgPT09IFwiX19cIiB8fCBrZXkgPT09IFwiX2N0eFwiIHx8IGtleSA9PT0gXCIkc3RhYmxlXCI7XG5jb25zdCBub3JtYWxpemVTbG90VmFsdWUgPSAodmFsdWUpID0+IGlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKG5vcm1hbGl6ZVZOb2RlKSA6IFtub3JtYWxpemVWTm9kZSh2YWx1ZSldO1xuY29uc3Qgbm9ybWFsaXplU2xvdCA9IChrZXksIHJhd1Nsb3QsIGN0eCkgPT4ge1xuICBpZiAocmF3U2xvdC5fbikge1xuICAgIHJldHVybiByYXdTbG90O1xuICB9XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB3aXRoQ3R4KCguLi5hcmdzKSA9PiB7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgY3VycmVudEluc3RhbmNlICYmICEoY3R4ID09PSBudWxsICYmIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSkgJiYgIShjdHggJiYgY3R4LnJvb3QgIT09IGN1cnJlbnRJbnN0YW5jZS5yb290KSkge1xuICAgICAgd2FybiQxKFxuICAgICAgICBgU2xvdCBcIiR7a2V5fVwiIGludm9rZWQgb3V0c2lkZSBvZiB0aGUgcmVuZGVyIGZ1bmN0aW9uOiB0aGlzIHdpbGwgbm90IHRyYWNrIGRlcGVuZGVuY2llcyB1c2VkIGluIHRoZSBzbG90LiBJbnZva2UgdGhlIHNsb3QgZnVuY3Rpb24gaW5zaWRlIHRoZSByZW5kZXIgZnVuY3Rpb24gaW5zdGVhZC5gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbm9ybWFsaXplU2xvdFZhbHVlKHJhd1Nsb3QoLi4uYXJncykpO1xuICB9LCBjdHgpO1xuICBub3JtYWxpemVkLl9jID0gZmFsc2U7XG4gIHJldHVybiBub3JtYWxpemVkO1xufTtcbmNvbnN0IG5vcm1hbGl6ZU9iamVjdFNsb3RzID0gKHJhd1Nsb3RzLCBzbG90cywgaW5zdGFuY2UpID0+IHtcbiAgY29uc3QgY3R4ID0gcmF3U2xvdHMuX2N0eDtcbiAgZm9yIChjb25zdCBrZXkgaW4gcmF3U2xvdHMpIHtcbiAgICBpZiAoaXNJbnRlcm5hbEtleShrZXkpKSBjb250aW51ZTtcbiAgICBjb25zdCB2YWx1ZSA9IHJhd1Nsb3RzW2tleV07XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICBzbG90c1trZXldID0gbm9ybWFsaXplU2xvdChrZXksIHZhbHVlLCBjdHgpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgdHJ1ZSkge1xuICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgYE5vbi1mdW5jdGlvbiB2YWx1ZSBlbmNvdW50ZXJlZCBmb3Igc2xvdCBcIiR7a2V5fVwiLiBQcmVmZXIgZnVuY3Rpb24gc2xvdHMgZm9yIGJldHRlciBwZXJmb3JtYW5jZS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplU2xvdFZhbHVlKHZhbHVlKTtcbiAgICAgIHNsb3RzW2tleV0gPSAoKSA9PiBub3JtYWxpemVkO1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IG5vcm1hbGl6ZVZOb2RlU2xvdHMgPSAoaW5zdGFuY2UsIGNoaWxkcmVuKSA9PiB7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFpc0tlZXBBbGl2ZShpbnN0YW5jZS52bm9kZSkgJiYgdHJ1ZSkge1xuICAgIHdhcm4kMShcbiAgICAgIGBOb24tZnVuY3Rpb24gdmFsdWUgZW5jb3VudGVyZWQgZm9yIGRlZmF1bHQgc2xvdC4gUHJlZmVyIGZ1bmN0aW9uIHNsb3RzIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UuYFxuICAgICk7XG4gIH1cbiAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVNsb3RWYWx1ZShjaGlsZHJlbik7XG4gIGluc3RhbmNlLnNsb3RzLmRlZmF1bHQgPSAoKSA9PiBub3JtYWxpemVkO1xufTtcbmNvbnN0IGFzc2lnblNsb3RzID0gKHNsb3RzLCBjaGlsZHJlbiwgb3B0aW1pemVkKSA9PiB7XG4gIGZvciAoY29uc3Qga2V5IGluIGNoaWxkcmVuKSB7XG4gICAgaWYgKG9wdGltaXplZCB8fCAhaXNJbnRlcm5hbEtleShrZXkpKSB7XG4gICAgICBzbG90c1trZXldID0gY2hpbGRyZW5ba2V5XTtcbiAgICB9XG4gIH1cbn07XG5jb25zdCBpbml0U2xvdHMgPSAoaW5zdGFuY2UsIGNoaWxkcmVuLCBvcHRpbWl6ZWQpID0+IHtcbiAgY29uc3Qgc2xvdHMgPSBpbnN0YW5jZS5zbG90cyA9IGNyZWF0ZUludGVybmFsT2JqZWN0KCk7XG4gIGlmIChpbnN0YW5jZS52bm9kZS5zaGFwZUZsYWcgJiAzMikge1xuICAgIGNvbnN0IGNhY2hlSW5kZXhlcyA9IGNoaWxkcmVuLl9fO1xuICAgIGlmIChjYWNoZUluZGV4ZXMpIGRlZihzbG90cywgXCJfX1wiLCBjYWNoZUluZGV4ZXMsIHRydWUpO1xuICAgIGNvbnN0IHR5cGUgPSBjaGlsZHJlbi5fO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICBhc3NpZ25TbG90cyhzbG90cywgY2hpbGRyZW4sIG9wdGltaXplZCk7XG4gICAgICBpZiAob3B0aW1pemVkKSB7XG4gICAgICAgIGRlZihzbG90cywgXCJfXCIsIHR5cGUsIHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBub3JtYWxpemVPYmplY3RTbG90cyhjaGlsZHJlbiwgc2xvdHMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgIG5vcm1hbGl6ZVZOb2RlU2xvdHMoaW5zdGFuY2UsIGNoaWxkcmVuKTtcbiAgfVxufTtcbmNvbnN0IHVwZGF0ZVNsb3RzID0gKGluc3RhbmNlLCBjaGlsZHJlbiwgb3B0aW1pemVkKSA9PiB7XG4gIGNvbnN0IHsgdm5vZGUsIHNsb3RzIH0gPSBpbnN0YW5jZTtcbiAgbGV0IG5lZWREZWxldGlvbkNoZWNrID0gdHJ1ZTtcbiAgbGV0IGRlbGV0aW9uQ29tcGFyaXNvblRhcmdldCA9IEVNUFRZX09CSjtcbiAgaWYgKHZub2RlLnNoYXBlRmxhZyAmIDMyKSB7XG4gICAgY29uc3QgdHlwZSA9IGNoaWxkcmVuLl87XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGlzSG1yVXBkYXRpbmcpIHtcbiAgICAgICAgYXNzaWduU2xvdHMoc2xvdHMsIGNoaWxkcmVuLCBvcHRpbWl6ZWQpO1xuICAgICAgICB0cmlnZ2VyKGluc3RhbmNlLCBcInNldFwiLCBcIiRzbG90c1wiKTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW1pemVkICYmIHR5cGUgPT09IDEpIHtcbiAgICAgICAgbmVlZERlbGV0aW9uQ2hlY2sgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFzc2lnblNsb3RzKHNsb3RzLCBjaGlsZHJlbiwgb3B0aW1pemVkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbmVlZERlbGV0aW9uQ2hlY2sgPSAhY2hpbGRyZW4uJHN0YWJsZTtcbiAgICAgIG5vcm1hbGl6ZU9iamVjdFNsb3RzKGNoaWxkcmVuLCBzbG90cyk7XG4gICAgfVxuICAgIGRlbGV0aW9uQ29tcGFyaXNvblRhcmdldCA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgbm9ybWFsaXplVk5vZGVTbG90cyhpbnN0YW5jZSwgY2hpbGRyZW4pO1xuICAgIGRlbGV0aW9uQ29tcGFyaXNvblRhcmdldCA9IHsgZGVmYXVsdDogMSB9O1xuICB9XG4gIGlmIChuZWVkRGVsZXRpb25DaGVjaykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNsb3RzKSB7XG4gICAgICBpZiAoIWlzSW50ZXJuYWxLZXkoa2V5KSAmJiBkZWxldGlvbkNvbXBhcmlzb25UYXJnZXRba2V5XSA9PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBzbG90c1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmxldCBzdXBwb3J0ZWQ7XG5sZXQgcGVyZjtcbmZ1bmN0aW9uIHN0YXJ0TWVhc3VyZShpbnN0YW5jZSwgdHlwZSkge1xuICBpZiAoaW5zdGFuY2UuYXBwQ29udGV4dC5jb25maWcucGVyZm9ybWFuY2UgJiYgaXNTdXBwb3J0ZWQoKSkge1xuICAgIHBlcmYubWFyayhgdnVlLSR7dHlwZX0tJHtpbnN0YW5jZS51aWR9YCk7XG4gIH1cbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgZmFsc2UpIHtcbiAgICBkZXZ0b29sc1BlcmZTdGFydChpbnN0YW5jZSwgdHlwZSwgaXNTdXBwb3J0ZWQoKSA/IHBlcmYubm93KCkgOiBEYXRlLm5vdygpKTtcbiAgfVxufVxuZnVuY3Rpb24gZW5kTWVhc3VyZShpbnN0YW5jZSwgdHlwZSkge1xuICBpZiAoaW5zdGFuY2UuYXBwQ29udGV4dC5jb25maWcucGVyZm9ybWFuY2UgJiYgaXNTdXBwb3J0ZWQoKSkge1xuICAgIGNvbnN0IHN0YXJ0VGFnID0gYHZ1ZS0ke3R5cGV9LSR7aW5zdGFuY2UudWlkfWA7XG4gICAgY29uc3QgZW5kVGFnID0gc3RhcnRUYWcgKyBgOmVuZGA7XG4gICAgcGVyZi5tYXJrKGVuZFRhZyk7XG4gICAgcGVyZi5tZWFzdXJlKFxuICAgICAgYDwke2Zvcm1hdENvbXBvbmVudE5hbWUoaW5zdGFuY2UsIGluc3RhbmNlLnR5cGUpfT4gJHt0eXBlfWAsXG4gICAgICBzdGFydFRhZyxcbiAgICAgIGVuZFRhZ1xuICAgICk7XG4gICAgcGVyZi5jbGVhck1hcmtzKHN0YXJ0VGFnKTtcbiAgICBwZXJmLmNsZWFyTWFya3MoZW5kVGFnKTtcbiAgfVxuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBmYWxzZSkge1xuICAgIGRldnRvb2xzUGVyZkVuZChpbnN0YW5jZSwgdHlwZSwgaXNTdXBwb3J0ZWQoKSA/IHBlcmYubm93KCkgOiBEYXRlLm5vdygpKTtcbiAgfVxufVxuZnVuY3Rpb24gaXNTdXBwb3J0ZWQoKSB7XG4gIGlmIChzdXBwb3J0ZWQgIT09IHZvaWQgMCkge1xuICAgIHJldHVybiBzdXBwb3J0ZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LnBlcmZvcm1hbmNlKSB7XG4gICAgc3VwcG9ydGVkID0gdHJ1ZTtcbiAgICBwZXJmID0gd2luZG93LnBlcmZvcm1hbmNlO1xuICB9IGVsc2Uge1xuICAgIHN1cHBvcnRlZCA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBzdXBwb3J0ZWQ7XG59XG5mdW5jdGlvbiBpbml0RmVhdHVyZUZsYWdzKCkge1xuICBjb25zdCBuZWVkV2FybiA9IFtdO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBuZWVkV2Fybi5sZW5ndGgpIHtcbiAgICBjb25zdCBtdWx0aSA9IG5lZWRXYXJuLmxlbmd0aCA+IDE7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYEZlYXR1cmUgZmxhZyR7bXVsdGkgPyBgc2AgOiBgYH0gJHtuZWVkV2Fybi5qb2luKFwiLCBcIil9ICR7bXVsdGkgPyBgYXJlYCA6IGBpc2B9IG5vdCBleHBsaWNpdGx5IGRlZmluZWQuIFlvdSBhcmUgcnVubmluZyB0aGUgZXNtLWJ1bmRsZXIgYnVpbGQgb2YgVnVlLCB3aGljaCBleHBlY3RzIHRoZXNlIGNvbXBpbGUtdGltZSBmZWF0dXJlIGZsYWdzIHRvIGJlIGdsb2JhbGx5IGluamVjdGVkIHZpYSB0aGUgYnVuZGxlciBjb25maWcgaW4gb3JkZXIgdG8gZ2V0IGJldHRlciB0cmVlLXNoYWtpbmcgaW4gdGhlIHByb2R1Y3Rpb24gYnVuZGxlLlxuXG5Gb3IgbW9yZSBkZXRhaWxzLCBzZWUgaHR0cHM6Ly9saW5rLnZ1ZWpzLm9yZy9mZWF0dXJlLWZsYWdzLmBcbiAgICApO1xuICB9XG59XG5jb25zdCBxdWV1ZVBvc3RSZW5kZXJFZmZlY3QgPSBxdWV1ZUVmZmVjdFdpdGhTdXNwZW5zZTtcbmZ1bmN0aW9uIGNyZWF0ZVJlbmRlcmVyKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGJhc2VDcmVhdGVSZW5kZXJlcihvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGJhc2VDcmVhdGVSZW5kZXJlcihvcHRpb25zLCBjcmVhdGVIeWRyYXRpb25GbnMpIHtcbiAge1xuICAgIGluaXRGZWF0dXJlRmxhZ3MoKTtcbiAgfVxuICBjb25zdCB0YXJnZXQgPSBnZXRHbG9iYWxUaGlzKCk7XG4gIHRhcmdldC5fX1ZVRV9fID0gdHJ1ZTtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgZmFsc2UpIHtcbiAgICBzZXREZXZ0b29sc0hvb2skMSh0YXJnZXQuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXywgdGFyZ2V0KTtcbiAgfVxuICBjb25zdCB7XG4gICAgaW5zZXJ0OiBob3N0SW5zZXJ0LFxuICAgIHJlbW92ZTogaG9zdFJlbW92ZSxcbiAgICBwYXRjaFByb3A6IGhvc3RQYXRjaFByb3AsXG4gICAgY3JlYXRlRWxlbWVudDogaG9zdENyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlVGV4dDogaG9zdENyZWF0ZVRleHQsXG4gICAgY3JlYXRlQ29tbWVudDogaG9zdENyZWF0ZUNvbW1lbnQsXG4gICAgc2V0VGV4dDogaG9zdFNldFRleHQsXG4gICAgc2V0RWxlbWVudFRleHQ6IGhvc3RTZXRFbGVtZW50VGV4dCxcbiAgICBwYXJlbnROb2RlOiBob3N0UGFyZW50Tm9kZSxcbiAgICBuZXh0U2libGluZzogaG9zdE5leHRTaWJsaW5nLFxuICAgIHNldFNjb3BlSWQ6IGhvc3RTZXRTY29wZUlkID0gTk9PUCxcbiAgICBpbnNlcnRTdGF0aWNDb250ZW50OiBob3N0SW5zZXJ0U3RhdGljQ29udGVudFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcGF0Y2ggPSAobjEsIG4yLCBjb250YWluZXIsIGFuY2hvciA9IG51bGwsIHBhcmVudENvbXBvbmVudCA9IG51bGwsIHBhcmVudFN1c3BlbnNlID0gbnVsbCwgbmFtZXNwYWNlID0gdm9pZCAwLCBzbG90U2NvcGVJZHMgPSBudWxsLCBvcHRpbWl6ZWQgPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGlzSG1yVXBkYXRpbmcgPyBmYWxzZSA6ICEhbjIuZHluYW1pY0NoaWxkcmVuKSA9PiB7XG4gICAgaWYgKG4xID09PSBuMikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobjEgJiYgIWlzU2FtZVZOb2RlVHlwZShuMSwgbjIpKSB7XG4gICAgICBhbmNob3IgPSBnZXROZXh0SG9zdE5vZGUobjEpO1xuICAgICAgdW5tb3VudChuMSwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgdHJ1ZSk7XG4gICAgICBuMSA9IG51bGw7XG4gICAgfVxuICAgIGlmIChuMi5wYXRjaEZsYWcgPT09IC0yKSB7XG4gICAgICBvcHRpbWl6ZWQgPSBmYWxzZTtcbiAgICAgIG4yLmR5bmFtaWNDaGlsZHJlbiA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsgdHlwZSwgcmVmOiByZWYzLCBzaGFwZUZsYWcgfSA9IG4yO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBUZXh0OlxuICAgICAgICBwcm9jZXNzVGV4dChuMSwgbjIsIGNvbnRhaW5lciwgYW5jaG9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENvbW1lbnQ6XG4gICAgICAgIHByb2Nlc3NDb21tZW50Tm9kZShuMSwgbjIsIGNvbnRhaW5lciwgYW5jaG9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFN0YXRpYzpcbiAgICAgICAgaWYgKG4xID09IG51bGwpIHtcbiAgICAgICAgICBtb3VudFN0YXRpY05vZGUobjIsIGNvbnRhaW5lciwgYW5jaG9yLCBuYW1lc3BhY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICBwYXRjaFN0YXRpY05vZGUobjEsIG4yLCBjb250YWluZXIsIG5hbWVzcGFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZyYWdtZW50OlxuICAgICAgICBwcm9jZXNzRnJhZ21lbnQoXG4gICAgICAgICAgbjEsXG4gICAgICAgICAgbjIsXG4gICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgIGFuY2hvcixcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoc2hhcGVGbGFnICYgMSkge1xuICAgICAgICAgIHByb2Nlc3NFbGVtZW50KFxuICAgICAgICAgICAgbjEsXG4gICAgICAgICAgICBuMixcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgIGFuY2hvcixcbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgICAgb3B0aW1pemVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGFwZUZsYWcgJiA2KSB7XG4gICAgICAgICAgcHJvY2Vzc0NvbXBvbmVudChcbiAgICAgICAgICAgIG4xLFxuICAgICAgICAgICAgbjIsXG4gICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICBhbmNob3IsXG4gICAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hhcGVGbGFnICYgNjQpIHtcbiAgICAgICAgICB0eXBlLnByb2Nlc3MoXG4gICAgICAgICAgICBuMSxcbiAgICAgICAgICAgIG4yLFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgICBvcHRpbWl6ZWQsXG4gICAgICAgICAgICBpbnRlcm5hbHNcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHNoYXBlRmxhZyAmIDEyOCkge1xuICAgICAgICAgIHR5cGUucHJvY2VzcyhcbiAgICAgICAgICAgIG4xLFxuICAgICAgICAgICAgbjIsXG4gICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICBhbmNob3IsXG4gICAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICAgIG9wdGltaXplZCxcbiAgICAgICAgICAgIGludGVybmFsc1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHdhcm4kMShcIkludmFsaWQgVk5vZGUgdHlwZTpcIiwgdHlwZSwgYCgke3R5cGVvZiB0eXBlfSlgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVmMyAhPSBudWxsICYmIHBhcmVudENvbXBvbmVudCkge1xuICAgICAgc2V0UmVmKHJlZjMsIG4xICYmIG4xLnJlZiwgcGFyZW50U3VzcGVuc2UsIG4yIHx8IG4xLCAhbjIpO1xuICAgIH0gZWxzZSBpZiAocmVmMyA9PSBudWxsICYmIG4xICYmIG4xLnJlZiAhPSBudWxsKSB7XG4gICAgICBzZXRSZWYobjEucmVmLCBudWxsLCBwYXJlbnRTdXNwZW5zZSwgbjEsIHRydWUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcHJvY2Vzc1RleHQgPSAobjEsIG4yLCBjb250YWluZXIsIGFuY2hvcikgPT4ge1xuICAgIGlmIChuMSA9PSBudWxsKSB7XG4gICAgICBob3N0SW5zZXJ0KFxuICAgICAgICBuMi5lbCA9IGhvc3RDcmVhdGVUZXh0KG4yLmNoaWxkcmVuKSxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBhbmNob3JcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVsID0gbjIuZWwgPSBuMS5lbDtcbiAgICAgIGlmIChuMi5jaGlsZHJlbiAhPT0gbjEuY2hpbGRyZW4pIHtcbiAgICAgICAgaG9zdFNldFRleHQoZWwsIG4yLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHByb2Nlc3NDb21tZW50Tm9kZSA9IChuMSwgbjIsIGNvbnRhaW5lciwgYW5jaG9yKSA9PiB7XG4gICAgaWYgKG4xID09IG51bGwpIHtcbiAgICAgIGhvc3RJbnNlcnQoXG4gICAgICAgIG4yLmVsID0gaG9zdENyZWF0ZUNvbW1lbnQobjIuY2hpbGRyZW4gfHwgXCJcIiksXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYW5jaG9yXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBuMi5lbCA9IG4xLmVsO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgbW91bnRTdGF0aWNOb2RlID0gKG4yLCBjb250YWluZXIsIGFuY2hvciwgbmFtZXNwYWNlKSA9PiB7XG4gICAgW24yLmVsLCBuMi5hbmNob3JdID0gaG9zdEluc2VydFN0YXRpY0NvbnRlbnQoXG4gICAgICBuMi5jaGlsZHJlbixcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGFuY2hvcixcbiAgICAgIG5hbWVzcGFjZSxcbiAgICAgIG4yLmVsLFxuICAgICAgbjIuYW5jaG9yXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgcGF0Y2hTdGF0aWNOb2RlID0gKG4xLCBuMiwgY29udGFpbmVyLCBuYW1lc3BhY2UpID0+IHtcbiAgICBpZiAobjIuY2hpbGRyZW4gIT09IG4xLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBhbmNob3IgPSBob3N0TmV4dFNpYmxpbmcobjEuYW5jaG9yKTtcbiAgICAgIHJlbW92ZVN0YXRpY05vZGUobjEpO1xuICAgICAgW24yLmVsLCBuMi5hbmNob3JdID0gaG9zdEluc2VydFN0YXRpY0NvbnRlbnQoXG4gICAgICAgIG4yLmNoaWxkcmVuLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGFuY2hvcixcbiAgICAgICAgbmFtZXNwYWNlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBuMi5lbCA9IG4xLmVsO1xuICAgICAgbjIuYW5jaG9yID0gbjEuYW5jaG9yO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgbW92ZVN0YXRpY05vZGUgPSAoeyBlbCwgYW5jaG9yIH0sIGNvbnRhaW5lciwgbmV4dFNpYmxpbmcpID0+IHtcbiAgICBsZXQgbmV4dDtcbiAgICB3aGlsZSAoZWwgJiYgZWwgIT09IGFuY2hvcikge1xuICAgICAgbmV4dCA9IGhvc3ROZXh0U2libGluZyhlbCk7XG4gICAgICBob3N0SW5zZXJ0KGVsLCBjb250YWluZXIsIG5leHRTaWJsaW5nKTtcbiAgICAgIGVsID0gbmV4dDtcbiAgICB9XG4gICAgaG9zdEluc2VydChhbmNob3IsIGNvbnRhaW5lciwgbmV4dFNpYmxpbmcpO1xuICB9O1xuICBjb25zdCByZW1vdmVTdGF0aWNOb2RlID0gKHsgZWwsIGFuY2hvciB9KSA9PiB7XG4gICAgbGV0IG5leHQ7XG4gICAgd2hpbGUgKGVsICYmIGVsICE9PSBhbmNob3IpIHtcbiAgICAgIG5leHQgPSBob3N0TmV4dFNpYmxpbmcoZWwpO1xuICAgICAgaG9zdFJlbW92ZShlbCk7XG4gICAgICBlbCA9IG5leHQ7XG4gICAgfVxuICAgIGhvc3RSZW1vdmUoYW5jaG9yKTtcbiAgfTtcbiAgY29uc3QgcHJvY2Vzc0VsZW1lbnQgPSAobjEsIG4yLCBjb250YWluZXIsIGFuY2hvciwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgbmFtZXNwYWNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCkgPT4ge1xuICAgIGlmIChuMi50eXBlID09PSBcInN2Z1wiKSB7XG4gICAgICBuYW1lc3BhY2UgPSBcInN2Z1wiO1xuICAgIH0gZWxzZSBpZiAobjIudHlwZSA9PT0gXCJtYXRoXCIpIHtcbiAgICAgIG5hbWVzcGFjZSA9IFwibWF0aG1sXCI7XG4gICAgfVxuICAgIGlmIChuMSA9PSBudWxsKSB7XG4gICAgICBtb3VudEVsZW1lbnQoXG4gICAgICAgIG4yLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGFuY2hvcixcbiAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgIG9wdGltaXplZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0Y2hFbGVtZW50KFxuICAgICAgICBuMSxcbiAgICAgICAgbjIsXG4gICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBtb3VudEVsZW1lbnQgPSAodm5vZGUsIGNvbnRhaW5lciwgYW5jaG9yLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCBuYW1lc3BhY2UsIHNsb3RTY29wZUlkcywgb3B0aW1pemVkKSA9PiB7XG4gICAgbGV0IGVsO1xuICAgIGxldCB2bm9kZUhvb2s7XG4gICAgY29uc3QgeyBwcm9wcywgc2hhcGVGbGFnLCB0cmFuc2l0aW9uLCBkaXJzIH0gPSB2bm9kZTtcbiAgICBlbCA9IHZub2RlLmVsID0gaG9zdENyZWF0ZUVsZW1lbnQoXG4gICAgICB2bm9kZS50eXBlLFxuICAgICAgbmFtZXNwYWNlLFxuICAgICAgcHJvcHMgJiYgcHJvcHMuaXMsXG4gICAgICBwcm9wc1xuICAgICk7XG4gICAgaWYgKHNoYXBlRmxhZyAmIDgpIHtcbiAgICAgIGhvc3RTZXRFbGVtZW50VGV4dChlbCwgdm5vZGUuY2hpbGRyZW4pO1xuICAgIH0gZWxzZSBpZiAoc2hhcGVGbGFnICYgMTYpIHtcbiAgICAgIG1vdW50Q2hpbGRyZW4oXG4gICAgICAgIHZub2RlLmNoaWxkcmVuLFxuICAgICAgICBlbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgcmVzb2x2ZUNoaWxkcmVuTmFtZXNwYWNlKHZub2RlLCBuYW1lc3BhY2UpLFxuICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgIG9wdGltaXplZFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGRpcnMpIHtcbiAgICAgIGludm9rZURpcmVjdGl2ZUhvb2sodm5vZGUsIG51bGwsIHBhcmVudENvbXBvbmVudCwgXCJjcmVhdGVkXCIpO1xuICAgIH1cbiAgICBzZXRTY29wZUlkKGVsLCB2bm9kZSwgdm5vZGUuc2NvcGVJZCwgc2xvdFNjb3BlSWRzLCBwYXJlbnRDb21wb25lbnQpO1xuICAgIGlmIChwcm9wcykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKGtleSAhPT0gXCJ2YWx1ZVwiICYmICFpc1Jlc2VydmVkUHJvcChrZXkpKSB7XG4gICAgICAgICAgaG9zdFBhdGNoUHJvcChlbCwga2V5LCBudWxsLCBwcm9wc1trZXldLCBuYW1lc3BhY2UsIHBhcmVudENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChcInZhbHVlXCIgaW4gcHJvcHMpIHtcbiAgICAgICAgaG9zdFBhdGNoUHJvcChlbCwgXCJ2YWx1ZVwiLCBudWxsLCBwcm9wcy52YWx1ZSwgbmFtZXNwYWNlKTtcbiAgICAgIH1cbiAgICAgIGlmICh2bm9kZUhvb2sgPSBwcm9wcy5vblZub2RlQmVmb3JlTW91bnQpIHtcbiAgICAgICAgaW52b2tlVk5vZGVIb29rKHZub2RlSG9vaywgcGFyZW50Q29tcG9uZW50LCB2bm9kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IGZhbHNlKSB7XG4gICAgICBkZWYoZWwsIFwiX192bm9kZVwiLCB2bm9kZSwgdHJ1ZSk7XG4gICAgICBkZWYoZWwsIFwiX192dWVQYXJlbnRDb21wb25lbnRcIiwgcGFyZW50Q29tcG9uZW50LCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKGRpcnMpIHtcbiAgICAgIGludm9rZURpcmVjdGl2ZUhvb2sodm5vZGUsIG51bGwsIHBhcmVudENvbXBvbmVudCwgXCJiZWZvcmVNb3VudFwiKTtcbiAgICB9XG4gICAgY29uc3QgbmVlZENhbGxUcmFuc2l0aW9uSG9va3MgPSBuZWVkVHJhbnNpdGlvbihwYXJlbnRTdXNwZW5zZSwgdHJhbnNpdGlvbik7XG4gICAgaWYgKG5lZWRDYWxsVHJhbnNpdGlvbkhvb2tzKSB7XG4gICAgICB0cmFuc2l0aW9uLmJlZm9yZUVudGVyKGVsKTtcbiAgICB9XG4gICAgaG9zdEluc2VydChlbCwgY29udGFpbmVyLCBhbmNob3IpO1xuICAgIGlmICgodm5vZGVIb29rID0gcHJvcHMgJiYgcHJvcHMub25Wbm9kZU1vdW50ZWQpIHx8IG5lZWRDYWxsVHJhbnNpdGlvbkhvb2tzIHx8IGRpcnMpIHtcbiAgICAgIHF1ZXVlUG9zdFJlbmRlckVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZub2RlSG9vayAmJiBpbnZva2VWTm9kZUhvb2sodm5vZGVIb29rLCBwYXJlbnRDb21wb25lbnQsIHZub2RlKTtcbiAgICAgICAgbmVlZENhbGxUcmFuc2l0aW9uSG9va3MgJiYgdHJhbnNpdGlvbi5lbnRlcihlbCk7XG4gICAgICAgIGRpcnMgJiYgaW52b2tlRGlyZWN0aXZlSG9vayh2bm9kZSwgbnVsbCwgcGFyZW50Q29tcG9uZW50LCBcIm1vdW50ZWRcIik7XG4gICAgICB9LCBwYXJlbnRTdXNwZW5zZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRTY29wZUlkID0gKGVsLCB2bm9kZSwgc2NvcGVJZCwgc2xvdFNjb3BlSWRzLCBwYXJlbnRDb21wb25lbnQpID0+IHtcbiAgICBpZiAoc2NvcGVJZCkge1xuICAgICAgaG9zdFNldFNjb3BlSWQoZWwsIHNjb3BlSWQpO1xuICAgIH1cbiAgICBpZiAoc2xvdFNjb3BlSWRzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsb3RTY29wZUlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBob3N0U2V0U2NvcGVJZChlbCwgc2xvdFNjb3BlSWRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmVudENvbXBvbmVudCkge1xuICAgICAgbGV0IHN1YlRyZWUgPSBwYXJlbnRDb21wb25lbnQuc3ViVHJlZTtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHN1YlRyZWUucGF0Y2hGbGFnID4gMCAmJiBzdWJUcmVlLnBhdGNoRmxhZyAmIDIwNDgpIHtcbiAgICAgICAgc3ViVHJlZSA9IGZpbHRlclNpbmdsZVJvb3Qoc3ViVHJlZS5jaGlsZHJlbikgfHwgc3ViVHJlZTtcbiAgICAgIH1cbiAgICAgIGlmICh2bm9kZSA9PT0gc3ViVHJlZSB8fCBpc1N1c3BlbnNlKHN1YlRyZWUudHlwZSkgJiYgKHN1YlRyZWUuc3NDb250ZW50ID09PSB2bm9kZSB8fCBzdWJUcmVlLnNzRmFsbGJhY2sgPT09IHZub2RlKSkge1xuICAgICAgICBjb25zdCBwYXJlbnRWTm9kZSA9IHBhcmVudENvbXBvbmVudC52bm9kZTtcbiAgICAgICAgc2V0U2NvcGVJZChcbiAgICAgICAgICBlbCxcbiAgICAgICAgICBwYXJlbnRWTm9kZSxcbiAgICAgICAgICBwYXJlbnRWTm9kZS5zY29wZUlkLFxuICAgICAgICAgIHBhcmVudFZOb2RlLnNsb3RTY29wZUlkcyxcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQucGFyZW50XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBtb3VudENoaWxkcmVuID0gKGNoaWxkcmVuLCBjb250YWluZXIsIGFuY2hvciwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgbmFtZXNwYWNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCwgc3RhcnQgPSAwKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV0gPSBvcHRpbWl6ZWQgPyBjbG9uZUlmTW91bnRlZChjaGlsZHJlbltpXSkgOiBub3JtYWxpemVWTm9kZShjaGlsZHJlbltpXSk7XG4gICAgICBwYXRjaChcbiAgICAgICAgbnVsbCxcbiAgICAgICAgY2hpbGQsXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYW5jaG9yLFxuICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgb3B0aW1pemVkXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcGF0Y2hFbGVtZW50ID0gKG4xLCBuMiwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgbmFtZXNwYWNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCkgPT4ge1xuICAgIGNvbnN0IGVsID0gbjIuZWwgPSBuMS5lbDtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBmYWxzZSkge1xuICAgICAgZWwuX192bm9kZSA9IG4yO1xuICAgIH1cbiAgICBsZXQgeyBwYXRjaEZsYWcsIGR5bmFtaWNDaGlsZHJlbiwgZGlycyB9ID0gbjI7XG4gICAgcGF0Y2hGbGFnIHw9IG4xLnBhdGNoRmxhZyAmIDE2O1xuICAgIGNvbnN0IG9sZFByb3BzID0gbjEucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IG5ld1Byb3BzID0gbjIucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGxldCB2bm9kZUhvb2s7XG4gICAgcGFyZW50Q29tcG9uZW50ICYmIHRvZ2dsZVJlY3Vyc2UocGFyZW50Q29tcG9uZW50LCBmYWxzZSk7XG4gICAgaWYgKHZub2RlSG9vayA9IG5ld1Byb3BzLm9uVm5vZGVCZWZvcmVVcGRhdGUpIHtcbiAgICAgIGludm9rZVZOb2RlSG9vayh2bm9kZUhvb2ssIHBhcmVudENvbXBvbmVudCwgbjIsIG4xKTtcbiAgICB9XG4gICAgaWYgKGRpcnMpIHtcbiAgICAgIGludm9rZURpcmVjdGl2ZUhvb2sobjIsIG4xLCBwYXJlbnRDb21wb25lbnQsIFwiYmVmb3JlVXBkYXRlXCIpO1xuICAgIH1cbiAgICBwYXJlbnRDb21wb25lbnQgJiYgdG9nZ2xlUmVjdXJzZShwYXJlbnRDb21wb25lbnQsIHRydWUpO1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGlzSG1yVXBkYXRpbmcpIHtcbiAgICAgIHBhdGNoRmxhZyA9IDA7XG4gICAgICBvcHRpbWl6ZWQgPSBmYWxzZTtcbiAgICAgIGR5bmFtaWNDaGlsZHJlbiA9IG51bGw7XG4gICAgfVxuICAgIGlmIChvbGRQcm9wcy5pbm5lckhUTUwgJiYgbmV3UHJvcHMuaW5uZXJIVE1MID09IG51bGwgfHwgb2xkUHJvcHMudGV4dENvbnRlbnQgJiYgbmV3UHJvcHMudGV4dENvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgaG9zdFNldEVsZW1lbnRUZXh0KGVsLCBcIlwiKTtcbiAgICB9XG4gICAgaWYgKGR5bmFtaWNDaGlsZHJlbikge1xuICAgICAgcGF0Y2hCbG9ja0NoaWxkcmVuKFxuICAgICAgICBuMS5keW5hbWljQ2hpbGRyZW4sXG4gICAgICAgIGR5bmFtaWNDaGlsZHJlbixcbiAgICAgICAgZWwsXG4gICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgIHJlc29sdmVDaGlsZHJlbk5hbWVzcGFjZShuMiwgbmFtZXNwYWNlKSxcbiAgICAgICAgc2xvdFNjb3BlSWRzXG4gICAgICApO1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgdHJhdmVyc2VTdGF0aWNDaGlsZHJlbihuMSwgbjIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIW9wdGltaXplZCkge1xuICAgICAgcGF0Y2hDaGlsZHJlbihcbiAgICAgICAgbjEsXG4gICAgICAgIG4yLFxuICAgICAgICBlbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgcmVzb2x2ZUNoaWxkcmVuTmFtZXNwYWNlKG4yLCBuYW1lc3BhY2UpLFxuICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAocGF0Y2hGbGFnID4gMCkge1xuICAgICAgaWYgKHBhdGNoRmxhZyAmIDE2KSB7XG4gICAgICAgIHBhdGNoUHJvcHMoZWwsIG9sZFByb3BzLCBuZXdQcm9wcywgcGFyZW50Q29tcG9uZW50LCBuYW1lc3BhY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhdGNoRmxhZyAmIDIpIHtcbiAgICAgICAgICBpZiAob2xkUHJvcHMuY2xhc3MgIT09IG5ld1Byb3BzLmNsYXNzKSB7XG4gICAgICAgICAgICBob3N0UGF0Y2hQcm9wKGVsLCBcImNsYXNzXCIsIG51bGwsIG5ld1Byb3BzLmNsYXNzLCBuYW1lc3BhY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0Y2hGbGFnICYgNCkge1xuICAgICAgICAgIGhvc3RQYXRjaFByb3AoZWwsIFwic3R5bGVcIiwgb2xkUHJvcHMuc3R5bGUsIG5ld1Byb3BzLnN0eWxlLCBuYW1lc3BhY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRjaEZsYWcgJiA4KSB7XG4gICAgICAgICAgY29uc3QgcHJvcHNUb1VwZGF0ZSA9IG4yLmR5bmFtaWNQcm9wcztcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzVG9VcGRhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHByb3BzVG9VcGRhdGVbaV07XG4gICAgICAgICAgICBjb25zdCBwcmV2ID0gb2xkUHJvcHNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSBuZXdQcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKG5leHQgIT09IHByZXYgfHwga2V5ID09PSBcInZhbHVlXCIpIHtcbiAgICAgICAgICAgICAgaG9zdFBhdGNoUHJvcChlbCwga2V5LCBwcmV2LCBuZXh0LCBuYW1lc3BhY2UsIHBhcmVudENvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGF0Y2hGbGFnICYgMSkge1xuICAgICAgICBpZiAobjEuY2hpbGRyZW4gIT09IG4yLmNoaWxkcmVuKSB7XG4gICAgICAgICAgaG9zdFNldEVsZW1lbnRUZXh0KGVsLCBuMi5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFvcHRpbWl6ZWQgJiYgZHluYW1pY0NoaWxkcmVuID09IG51bGwpIHtcbiAgICAgIHBhdGNoUHJvcHMoZWwsIG9sZFByb3BzLCBuZXdQcm9wcywgcGFyZW50Q29tcG9uZW50LCBuYW1lc3BhY2UpO1xuICAgIH1cbiAgICBpZiAoKHZub2RlSG9vayA9IG5ld1Byb3BzLm9uVm5vZGVVcGRhdGVkKSB8fCBkaXJzKSB7XG4gICAgICBxdWV1ZVBvc3RSZW5kZXJFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2bm9kZUhvb2sgJiYgaW52b2tlVk5vZGVIb29rKHZub2RlSG9vaywgcGFyZW50Q29tcG9uZW50LCBuMiwgbjEpO1xuICAgICAgICBkaXJzICYmIGludm9rZURpcmVjdGl2ZUhvb2sobjIsIG4xLCBwYXJlbnRDb21wb25lbnQsIFwidXBkYXRlZFwiKTtcbiAgICAgIH0sIHBhcmVudFN1c3BlbnNlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBhdGNoQmxvY2tDaGlsZHJlbiA9IChvbGRDaGlsZHJlbiwgbmV3Q2hpbGRyZW4sIGZhbGxiYWNrQ29udGFpbmVyLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCBuYW1lc3BhY2UsIHNsb3RTY29wZUlkcykgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5baV07XG4gICAgICBjb25zdCBuZXdWTm9kZSA9IG5ld0NoaWxkcmVuW2ldO1xuICAgICAgY29uc3QgY29udGFpbmVyID0gKFxuICAgICAgICAvLyBvbGRWTm9kZSBtYXkgYmUgYW4gZXJyb3JlZCBhc3luYyBzZXR1cCgpIGNvbXBvbmVudCBpbnNpZGUgU3VzcGVuc2VcbiAgICAgICAgLy8gd2hpY2ggd2lsbCBub3QgaGF2ZSBhIG1vdW50ZWQgZWxlbWVudFxuICAgICAgICBvbGRWTm9kZS5lbCAmJiAvLyAtIEluIHRoZSBjYXNlIG9mIGEgRnJhZ21lbnQsIHdlIG5lZWQgdG8gcHJvdmlkZSB0aGUgYWN0dWFsIHBhcmVudFxuICAgICAgICAvLyBvZiB0aGUgRnJhZ21lbnQgaXRzZWxmIHNvIGl0IGNhbiBtb3ZlIGl0cyBjaGlsZHJlbi5cbiAgICAgICAgKG9sZFZOb2RlLnR5cGUgPT09IEZyYWdtZW50IHx8IC8vIC0gSW4gdGhlIGNhc2Ugb2YgZGlmZmVyZW50IG5vZGVzLCB0aGVyZSBpcyBnb2luZyB0byBiZSBhIHJlcGxhY2VtZW50XG4gICAgICAgIC8vIHdoaWNoIGFsc28gcmVxdWlyZXMgdGhlIGNvcnJlY3QgcGFyZW50IGNvbnRhaW5lclxuICAgICAgICAhaXNTYW1lVk5vZGVUeXBlKG9sZFZOb2RlLCBuZXdWTm9kZSkgfHwgLy8gLSBJbiB0aGUgY2FzZSBvZiBhIGNvbXBvbmVudCwgaXQgY291bGQgY29udGFpbiBhbnl0aGluZy5cbiAgICAgICAgb2xkVk5vZGUuc2hhcGVGbGFnICYgKDYgfCA2NCB8IDEyOCkpID8gaG9zdFBhcmVudE5vZGUob2xkVk5vZGUuZWwpIDogKFxuICAgICAgICAgIC8vIEluIG90aGVyIGNhc2VzLCB0aGUgcGFyZW50IGNvbnRhaW5lciBpcyBub3QgYWN0dWFsbHkgdXNlZCBzbyB3ZVxuICAgICAgICAgIC8vIGp1c3QgcGFzcyB0aGUgYmxvY2sgZWxlbWVudCBoZXJlIHRvIGF2b2lkIGEgRE9NIHBhcmVudE5vZGUgY2FsbC5cbiAgICAgICAgICBmYWxsYmFja0NvbnRhaW5lclxuICAgICAgICApXG4gICAgICApO1xuICAgICAgcGF0Y2goXG4gICAgICAgIG9sZFZOb2RlLFxuICAgICAgICBuZXdWTm9kZSxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBudWxsLFxuICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBhdGNoUHJvcHMgPSAoZWwsIG9sZFByb3BzLCBuZXdQcm9wcywgcGFyZW50Q29tcG9uZW50LCBuYW1lc3BhY2UpID0+IHtcbiAgICBpZiAob2xkUHJvcHMgIT09IG5ld1Byb3BzKSB7XG4gICAgICBpZiAob2xkUHJvcHMgIT09IEVNUFRZX09CSikge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvbGRQcm9wcykge1xuICAgICAgICAgIGlmICghaXNSZXNlcnZlZFByb3Aoa2V5KSAmJiAhKGtleSBpbiBuZXdQcm9wcykpIHtcbiAgICAgICAgICAgIGhvc3RQYXRjaFByb3AoXG4gICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgIG9sZFByb3BzW2tleV0sXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gbmV3UHJvcHMpIHtcbiAgICAgICAgaWYgKGlzUmVzZXJ2ZWRQcm9wKGtleSkpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBuZXh0ID0gbmV3UHJvcHNba2V5XTtcbiAgICAgICAgY29uc3QgcHJldiA9IG9sZFByb3BzW2tleV07XG4gICAgICAgIGlmIChuZXh0ICE9PSBwcmV2ICYmIGtleSAhPT0gXCJ2YWx1ZVwiKSB7XG4gICAgICAgICAgaG9zdFBhdGNoUHJvcChlbCwga2V5LCBwcmV2LCBuZXh0LCBuYW1lc3BhY2UsIHBhcmVudENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChcInZhbHVlXCIgaW4gbmV3UHJvcHMpIHtcbiAgICAgICAgaG9zdFBhdGNoUHJvcChlbCwgXCJ2YWx1ZVwiLCBvbGRQcm9wcy52YWx1ZSwgbmV3UHJvcHMudmFsdWUsIG5hbWVzcGFjZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBwcm9jZXNzRnJhZ21lbnQgPSAobjEsIG4yLCBjb250YWluZXIsIGFuY2hvciwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgbmFtZXNwYWNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCkgPT4ge1xuICAgIGNvbnN0IGZyYWdtZW50U3RhcnRBbmNob3IgPSBuMi5lbCA9IG4xID8gbjEuZWwgOiBob3N0Q3JlYXRlVGV4dChcIlwiKTtcbiAgICBjb25zdCBmcmFnbWVudEVuZEFuY2hvciA9IG4yLmFuY2hvciA9IG4xID8gbjEuYW5jaG9yIDogaG9zdENyZWF0ZVRleHQoXCJcIik7XG4gICAgbGV0IHsgcGF0Y2hGbGFnLCBkeW5hbWljQ2hpbGRyZW4sIHNsb3RTY29wZUlkczogZnJhZ21lbnRTbG90U2NvcGVJZHMgfSA9IG4yO1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIC8vICM1NTIzIGRldiByb290IGZyYWdtZW50IG1heSBpbmhlcml0IGRpcmVjdGl2ZXNcbiAgICAoaXNIbXJVcGRhdGluZyB8fCBwYXRjaEZsYWcgJiAyMDQ4KSkge1xuICAgICAgcGF0Y2hGbGFnID0gMDtcbiAgICAgIG9wdGltaXplZCA9IGZhbHNlO1xuICAgICAgZHluYW1pY0NoaWxkcmVuID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGZyYWdtZW50U2xvdFNjb3BlSWRzKSB7XG4gICAgICBzbG90U2NvcGVJZHMgPSBzbG90U2NvcGVJZHMgPyBzbG90U2NvcGVJZHMuY29uY2F0KGZyYWdtZW50U2xvdFNjb3BlSWRzKSA6IGZyYWdtZW50U2xvdFNjb3BlSWRzO1xuICAgIH1cbiAgICBpZiAobjEgPT0gbnVsbCkge1xuICAgICAgaG9zdEluc2VydChmcmFnbWVudFN0YXJ0QW5jaG9yLCBjb250YWluZXIsIGFuY2hvcik7XG4gICAgICBob3N0SW5zZXJ0KGZyYWdtZW50RW5kQW5jaG9yLCBjb250YWluZXIsIGFuY2hvcik7XG4gICAgICBtb3VudENoaWxkcmVuKFxuICAgICAgICAvLyAjMTAwMDdcbiAgICAgICAgLy8gc3VjaCBmcmFnbWVudCBsaWtlIGA8PjwvPmAgd2lsbCBiZSBjb21waWxlZCBpbnRvXG4gICAgICAgIC8vIGEgZnJhZ21lbnQgd2hpY2ggZG9lc24ndCBoYXZlIGEgY2hpbGRyZW4uXG4gICAgICAgIC8vIEluIHRoaXMgY2FzZSBmYWxsYmFjayB0byBhbiBlbXB0eSBhcnJheVxuICAgICAgICBuMi5jaGlsZHJlbiB8fCBbXSxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBmcmFnbWVudEVuZEFuY2hvcixcbiAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgIG9wdGltaXplZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhdGNoRmxhZyA+IDAgJiYgcGF0Y2hGbGFnICYgNjQgJiYgZHluYW1pY0NoaWxkcmVuICYmIC8vICMyNzE1IHRoZSBwcmV2aW91cyBmcmFnbWVudCBjb3VsZCd2ZSBiZWVuIGEgQkFJTGVkIG9uZSBhcyBhIHJlc3VsdFxuICAgICAgLy8gb2YgcmVuZGVyU2xvdCgpIHdpdGggbm8gdmFsaWQgY2hpbGRyZW5cbiAgICAgIG4xLmR5bmFtaWNDaGlsZHJlbikge1xuICAgICAgICBwYXRjaEJsb2NrQ2hpbGRyZW4oXG4gICAgICAgICAgbjEuZHluYW1pY0NoaWxkcmVuLFxuICAgICAgICAgIGR5bmFtaWNDaGlsZHJlbixcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICBzbG90U2NvcGVJZHNcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICB0cmF2ZXJzZVN0YXRpY0NoaWxkcmVuKG4xLCBuMik7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgLy8gIzIwODAgaWYgdGhlIHN0YWJsZSBmcmFnbWVudCBoYXMgYSBrZXksIGl0J3MgYSA8dGVtcGxhdGUgdi1mb3I+IHRoYXQgbWF5XG4gICAgICAgICAgLy8gIGdldCBtb3ZlZCBhcm91bmQuIE1ha2Ugc3VyZSBhbGwgcm9vdCBsZXZlbCB2bm9kZXMgaW5oZXJpdCBlbC5cbiAgICAgICAgICAvLyAjMjEzNCBvciBpZiBpdCdzIGEgY29tcG9uZW50IHJvb3QsIGl0IG1heSBhbHNvIGdldCBtb3ZlZCBhcm91bmRcbiAgICAgICAgICAvLyBhcyB0aGUgY29tcG9uZW50IGlzIGJlaW5nIG1vdmVkLlxuICAgICAgICAgIG4yLmtleSAhPSBudWxsIHx8IHBhcmVudENvbXBvbmVudCAmJiBuMiA9PT0gcGFyZW50Q29tcG9uZW50LnN1YlRyZWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgdHJhdmVyc2VTdGF0aWNDaGlsZHJlbihcbiAgICAgICAgICAgIG4xLFxuICAgICAgICAgICAgbjIsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAvKiBzaGFsbG93ICovXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF0Y2hDaGlsZHJlbihcbiAgICAgICAgICBuMSxcbiAgICAgICAgICBuMixcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgZnJhZ21lbnRFbmRBbmNob3IsXG4gICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgb3B0aW1pemVkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBwcm9jZXNzQ29tcG9uZW50ID0gKG4xLCBuMiwgY29udGFpbmVyLCBhbmNob3IsIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIG5hbWVzcGFjZSwgc2xvdFNjb3BlSWRzLCBvcHRpbWl6ZWQpID0+IHtcbiAgICBuMi5zbG90U2NvcGVJZHMgPSBzbG90U2NvcGVJZHM7XG4gICAgaWYgKG4xID09IG51bGwpIHtcbiAgICAgIGlmIChuMi5zaGFwZUZsYWcgJiA1MTIpIHtcbiAgICAgICAgcGFyZW50Q29tcG9uZW50LmN0eC5hY3RpdmF0ZShcbiAgICAgICAgICBuMixcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdW50Q29tcG9uZW50KFxuICAgICAgICAgIG4yLFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBhbmNob3IsXG4gICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlQ29tcG9uZW50KG4xLCBuMiwgb3B0aW1pemVkKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG1vdW50Q29tcG9uZW50ID0gKGluaXRpYWxWTm9kZSwgY29udGFpbmVyLCBhbmNob3IsIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIG5hbWVzcGFjZSwgb3B0aW1pemVkKSA9PiB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBpbml0aWFsVk5vZGUuY29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2UoXG4gICAgICBpbml0aWFsVk5vZGUsXG4gICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICBwYXJlbnRTdXNwZW5zZVxuICAgICk7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgaW5zdGFuY2UudHlwZS5fX2htcklkKSB7XG4gICAgICByZWdpc3RlckhNUihpbnN0YW5jZSk7XG4gICAgfVxuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICBwdXNoV2FybmluZ0NvbnRleHQoaW5pdGlhbFZOb2RlKTtcbiAgICAgIHN0YXJ0TWVhc3VyZShpbnN0YW5jZSwgYG1vdW50YCk7XG4gICAgfVxuICAgIGlmIChpc0tlZXBBbGl2ZShpbml0aWFsVk5vZGUpKSB7XG4gICAgICBpbnN0YW5jZS5jdHgucmVuZGVyZXIgPSBpbnRlcm5hbHM7XG4gICAgfVxuICAgIHtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgIHN0YXJ0TWVhc3VyZShpbnN0YW5jZSwgYGluaXRgKTtcbiAgICAgIH1cbiAgICAgIHNldHVwQ29tcG9uZW50KGluc3RhbmNlLCBmYWxzZSwgb3B0aW1pemVkKTtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgIGVuZE1lYXN1cmUoaW5zdGFuY2UsIGBpbml0YCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGlzSG1yVXBkYXRpbmcpIGluaXRpYWxWTm9kZS5lbCA9IG51bGw7XG4gICAgaWYgKGluc3RhbmNlLmFzeW5jRGVwKSB7XG4gICAgICBwYXJlbnRTdXNwZW5zZSAmJiBwYXJlbnRTdXNwZW5zZS5yZWdpc3RlckRlcChpbnN0YW5jZSwgc2V0dXBSZW5kZXJFZmZlY3QsIG9wdGltaXplZCk7XG4gICAgICBpZiAoIWluaXRpYWxWTm9kZS5lbCkge1xuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGluc3RhbmNlLnN1YlRyZWUgPSBjcmVhdGVWTm9kZShDb21tZW50KTtcbiAgICAgICAgcHJvY2Vzc0NvbW1lbnROb2RlKG51bGwsIHBsYWNlaG9sZGVyLCBjb250YWluZXIsIGFuY2hvcik7XG4gICAgICAgIGluaXRpYWxWTm9kZS5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyLmVsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXR1cFJlbmRlckVmZmVjdChcbiAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgIGluaXRpYWxWTm9kZSxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBhbmNob3IsXG4gICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIG9wdGltaXplZFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIHBvcFdhcm5pbmdDb250ZXh0KCk7XG4gICAgICBlbmRNZWFzdXJlKGluc3RhbmNlLCBgbW91bnRgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHVwZGF0ZUNvbXBvbmVudCA9IChuMSwgbjIsIG9wdGltaXplZCkgPT4ge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbjIuY29tcG9uZW50ID0gbjEuY29tcG9uZW50O1xuICAgIGlmIChzaG91bGRVcGRhdGVDb21wb25lbnQobjEsIG4yLCBvcHRpbWl6ZWQpKSB7XG4gICAgICBpZiAoaW5zdGFuY2UuYXN5bmNEZXAgJiYgIWluc3RhbmNlLmFzeW5jUmVzb2x2ZWQpIHtcbiAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICBwdXNoV2FybmluZ0NvbnRleHQobjIpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUNvbXBvbmVudFByZVJlbmRlcihpbnN0YW5jZSwgbjIsIG9wdGltaXplZCk7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgcG9wV2FybmluZ0NvbnRleHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5uZXh0ID0gbjI7XG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuMi5lbCA9IG4xLmVsO1xuICAgICAgaW5zdGFuY2Uudm5vZGUgPSBuMjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNldHVwUmVuZGVyRWZmZWN0ID0gKGluc3RhbmNlLCBpbml0aWFsVk5vZGUsIGNvbnRhaW5lciwgYW5jaG9yLCBwYXJlbnRTdXNwZW5zZSwgbmFtZXNwYWNlLCBvcHRpbWl6ZWQpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRVcGRhdGVGbiA9ICgpID0+IHtcbiAgICAgIGlmICghaW5zdGFuY2UuaXNNb3VudGVkKSB7XG4gICAgICAgIGxldCB2bm9kZUhvb2s7XG4gICAgICAgIGNvbnN0IHsgZWwsIHByb3BzIH0gPSBpbml0aWFsVk5vZGU7XG4gICAgICAgIGNvbnN0IHsgYm0sIG0sIHBhcmVudCwgcm9vdCwgdHlwZSB9ID0gaW5zdGFuY2U7XG4gICAgICAgIGNvbnN0IGlzQXN5bmNXcmFwcGVyVk5vZGUgPSBpc0FzeW5jV3JhcHBlcihpbml0aWFsVk5vZGUpO1xuICAgICAgICB0b2dnbGVSZWN1cnNlKGluc3RhbmNlLCBmYWxzZSk7XG4gICAgICAgIGlmIChibSkge1xuICAgICAgICAgIGludm9rZUFycmF5Rm5zKGJtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzQXN5bmNXcmFwcGVyVk5vZGUgJiYgKHZub2RlSG9vayA9IHByb3BzICYmIHByb3BzLm9uVm5vZGVCZWZvcmVNb3VudCkpIHtcbiAgICAgICAgICBpbnZva2VWTm9kZUhvb2sodm5vZGVIb29rLCBwYXJlbnQsIGluaXRpYWxWTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlUmVjdXJzZShpbnN0YW5jZSwgdHJ1ZSk7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAocm9vdC5jZSAmJiAvLyBAdHMtZXhwZWN0LWVycm9yIF9kZWYgaXMgcHJpdmF0ZVxuICAgICAgICAgIHJvb3QuY2UuX2RlZi5zaGFkb3dSb290ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcm9vdC5jZS5faW5qZWN0Q2hpbGRTdHlsZSh0eXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICAgIHN0YXJ0TWVhc3VyZShpbnN0YW5jZSwgYHJlbmRlcmApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBzdWJUcmVlID0gaW5zdGFuY2Uuc3ViVHJlZSA9IHJlbmRlckNvbXBvbmVudFJvb3QoaW5zdGFuY2UpO1xuICAgICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgICBlbmRNZWFzdXJlKGluc3RhbmNlLCBgcmVuZGVyYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgICBzdGFydE1lYXN1cmUoaW5zdGFuY2UsIGBwYXRjaGApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXRjaChcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBzdWJUcmVlLFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICAgIGVuZE1lYXN1cmUoaW5zdGFuY2UsIGBwYXRjaGApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbml0aWFsVk5vZGUuZWwgPSBzdWJUcmVlLmVsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgcXVldWVQb3N0UmVuZGVyRWZmZWN0KG0sIHBhcmVudFN1c3BlbnNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzQXN5bmNXcmFwcGVyVk5vZGUgJiYgKHZub2RlSG9vayA9IHByb3BzICYmIHByb3BzLm9uVm5vZGVNb3VudGVkKSkge1xuICAgICAgICAgIGNvbnN0IHNjb3BlZEluaXRpYWxWTm9kZSA9IGluaXRpYWxWTm9kZTtcbiAgICAgICAgICBxdWV1ZVBvc3RSZW5kZXJFZmZlY3QoXG4gICAgICAgICAgICAoKSA9PiBpbnZva2VWTm9kZUhvb2sodm5vZGVIb29rLCBwYXJlbnQsIHNjb3BlZEluaXRpYWxWTm9kZSksXG4gICAgICAgICAgICBwYXJlbnRTdXNwZW5zZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluaXRpYWxWTm9kZS5zaGFwZUZsYWcgJiAyNTYgfHwgcGFyZW50ICYmIGlzQXN5bmNXcmFwcGVyKHBhcmVudC52bm9kZSkgJiYgcGFyZW50LnZub2RlLnNoYXBlRmxhZyAmIDI1Nikge1xuICAgICAgICAgIGluc3RhbmNlLmEgJiYgcXVldWVQb3N0UmVuZGVyRWZmZWN0KGluc3RhbmNlLmEsIHBhcmVudFN1c3BlbnNlKTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZS5pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBmYWxzZSkge1xuICAgICAgICAgIGRldnRvb2xzQ29tcG9uZW50QWRkZWQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGluaXRpYWxWTm9kZSA9IGNvbnRhaW5lciA9IGFuY2hvciA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgeyBuZXh0LCBidSwgdSwgcGFyZW50LCB2bm9kZSB9ID0gaW5zdGFuY2U7XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBub25IeWRyYXRlZEFzeW5jUm9vdCA9IGxvY2F0ZU5vbkh5ZHJhdGVkQXN5bmNSb290KGluc3RhbmNlKTtcbiAgICAgICAgICBpZiAobm9uSHlkcmF0ZWRBc3luY1Jvb3QpIHtcbiAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgIG5leHQuZWwgPSB2bm9kZS5lbDtcbiAgICAgICAgICAgICAgdXBkYXRlQ29tcG9uZW50UHJlUmVuZGVyKGluc3RhbmNlLCBuZXh0LCBvcHRpbWl6ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9uSHlkcmF0ZWRBc3luY1Jvb3QuYXN5bmNEZXAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghaW5zdGFuY2UuaXNVbm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRVcGRhdGVGbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9yaWdpbk5leHQgPSBuZXh0O1xuICAgICAgICBsZXQgdm5vZGVIb29rO1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHB1c2hXYXJuaW5nQ29udGV4dChuZXh0IHx8IGluc3RhbmNlLnZub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVSZWN1cnNlKGluc3RhbmNlLCBmYWxzZSk7XG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgbmV4dC5lbCA9IHZub2RlLmVsO1xuICAgICAgICAgIHVwZGF0ZUNvbXBvbmVudFByZVJlbmRlcihpbnN0YW5jZSwgbmV4dCwgb3B0aW1pemVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0ID0gdm5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ1KSB7XG4gICAgICAgICAgaW52b2tlQXJyYXlGbnMoYnUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2bm9kZUhvb2sgPSBuZXh0LnByb3BzICYmIG5leHQucHJvcHMub25Wbm9kZUJlZm9yZVVwZGF0ZSkge1xuICAgICAgICAgIGludm9rZVZOb2RlSG9vayh2bm9kZUhvb2ssIHBhcmVudCwgbmV4dCwgdm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZVJlY3Vyc2UoaW5zdGFuY2UsIHRydWUpO1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHN0YXJ0TWVhc3VyZShpbnN0YW5jZSwgYHJlbmRlcmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5leHRUcmVlID0gcmVuZGVyQ29tcG9uZW50Um9vdChpbnN0YW5jZSk7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgZW5kTWVhc3VyZShpbnN0YW5jZSwgYHJlbmRlcmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZUcmVlID0gaW5zdGFuY2Uuc3ViVHJlZTtcbiAgICAgICAgaW5zdGFuY2Uuc3ViVHJlZSA9IG5leHRUcmVlO1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgICAgIHN0YXJ0TWVhc3VyZShpbnN0YW5jZSwgYHBhdGNoYCk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0Y2goXG4gICAgICAgICAgcHJldlRyZWUsXG4gICAgICAgICAgbmV4dFRyZWUsXG4gICAgICAgICAgLy8gcGFyZW50IG1heSBoYXZlIGNoYW5nZWQgaWYgaXQncyBpbiBhIHRlbGVwb3J0XG4gICAgICAgICAgaG9zdFBhcmVudE5vZGUocHJldlRyZWUuZWwpLFxuICAgICAgICAgIC8vIGFuY2hvciBtYXkgaGF2ZSBjaGFuZ2VkIGlmIGl0J3MgaW4gYSBmcmFnbWVudFxuICAgICAgICAgIGdldE5leHRIb3N0Tm9kZShwcmV2VHJlZSksXG4gICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgbmFtZXNwYWNlXG4gICAgICAgICk7XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgZW5kTWVhc3VyZShpbnN0YW5jZSwgYHBhdGNoYCk7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dC5lbCA9IG5leHRUcmVlLmVsO1xuICAgICAgICBpZiAob3JpZ2luTmV4dCA9PT0gbnVsbCkge1xuICAgICAgICAgIHVwZGF0ZUhPQ0hvc3RFbChpbnN0YW5jZSwgbmV4dFRyZWUuZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1KSB7XG4gICAgICAgICAgcXVldWVQb3N0UmVuZGVyRWZmZWN0KHUsIHBhcmVudFN1c3BlbnNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodm5vZGVIb29rID0gbmV4dC5wcm9wcyAmJiBuZXh0LnByb3BzLm9uVm5vZGVVcGRhdGVkKSB7XG4gICAgICAgICAgcXVldWVQb3N0UmVuZGVyRWZmZWN0KFxuICAgICAgICAgICAgKCkgPT4gaW52b2tlVk5vZGVIb29rKHZub2RlSG9vaywgcGFyZW50LCBuZXh0LCB2bm9kZSksXG4gICAgICAgICAgICBwYXJlbnRTdXNwZW5zZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgZmFsc2UpIHtcbiAgICAgICAgICBkZXZ0b29sc0NvbXBvbmVudFVwZGF0ZWQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgICAgICAgcG9wV2FybmluZ0NvbnRleHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaW5zdGFuY2Uuc2NvcGUub24oKTtcbiAgICBjb25zdCBlZmZlY3QyID0gaW5zdGFuY2UuZWZmZWN0ID0gbmV3IFJlYWN0aXZlRWZmZWN0KGNvbXBvbmVudFVwZGF0ZUZuKTtcbiAgICBpbnN0YW5jZS5zY29wZS5vZmYoKTtcbiAgICBjb25zdCB1cGRhdGUgPSBpbnN0YW5jZS51cGRhdGUgPSBlZmZlY3QyLnJ1bi5iaW5kKGVmZmVjdDIpO1xuICAgIGNvbnN0IGpvYiA9IGluc3RhbmNlLmpvYiA9IGVmZmVjdDIucnVuSWZEaXJ0eS5iaW5kKGVmZmVjdDIpO1xuICAgIGpvYi5pID0gaW5zdGFuY2U7XG4gICAgam9iLmlkID0gaW5zdGFuY2UudWlkO1xuICAgIGVmZmVjdDIuc2NoZWR1bGVyID0gKCkgPT4gcXVldWVKb2Ioam9iKTtcbiAgICB0b2dnbGVSZWN1cnNlKGluc3RhbmNlLCB0cnVlKTtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgZWZmZWN0Mi5vblRyYWNrID0gaW5zdGFuY2UucnRjID8gKGUpID0+IGludm9rZUFycmF5Rm5zKGluc3RhbmNlLnJ0YywgZSkgOiB2b2lkIDA7XG4gICAgICBlZmZlY3QyLm9uVHJpZ2dlciA9IGluc3RhbmNlLnJ0ZyA/IChlKSA9PiBpbnZva2VBcnJheUZucyhpbnN0YW5jZS5ydGcsIGUpIDogdm9pZCAwO1xuICAgIH1cbiAgICB1cGRhdGUoKTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlQ29tcG9uZW50UHJlUmVuZGVyID0gKGluc3RhbmNlLCBuZXh0Vk5vZGUsIG9wdGltaXplZCkgPT4ge1xuICAgIG5leHRWTm9kZS5jb21wb25lbnQgPSBpbnN0YW5jZTtcbiAgICBjb25zdCBwcmV2UHJvcHMgPSBpbnN0YW5jZS52bm9kZS5wcm9wcztcbiAgICBpbnN0YW5jZS52bm9kZSA9IG5leHRWTm9kZTtcbiAgICBpbnN0YW5jZS5uZXh0ID0gbnVsbDtcbiAgICB1cGRhdGVQcm9wcyhpbnN0YW5jZSwgbmV4dFZOb2RlLnByb3BzLCBwcmV2UHJvcHMsIG9wdGltaXplZCk7XG4gICAgdXBkYXRlU2xvdHMoaW5zdGFuY2UsIG5leHRWTm9kZS5jaGlsZHJlbiwgb3B0aW1pemVkKTtcbiAgICBwYXVzZVRyYWNraW5nKCk7XG4gICAgZmx1c2hQcmVGbHVzaENicyhpbnN0YW5jZSk7XG4gICAgcmVzZXRUcmFja2luZygpO1xuICB9O1xuICBjb25zdCBwYXRjaENoaWxkcmVuID0gKG4xLCBuMiwgY29udGFpbmVyLCBhbmNob3IsIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIG5hbWVzcGFjZSwgc2xvdFNjb3BlSWRzLCBvcHRpbWl6ZWQgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IGMxID0gbjEgJiYgbjEuY2hpbGRyZW47XG4gICAgY29uc3QgcHJldlNoYXBlRmxhZyA9IG4xID8gbjEuc2hhcGVGbGFnIDogMDtcbiAgICBjb25zdCBjMiA9IG4yLmNoaWxkcmVuO1xuICAgIGNvbnN0IHsgcGF0Y2hGbGFnLCBzaGFwZUZsYWcgfSA9IG4yO1xuICAgIGlmIChwYXRjaEZsYWcgPiAwKSB7XG4gICAgICBpZiAocGF0Y2hGbGFnICYgMTI4KSB7XG4gICAgICAgIHBhdGNoS2V5ZWRDaGlsZHJlbihcbiAgICAgICAgICBjMSxcbiAgICAgICAgICBjMixcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKHBhdGNoRmxhZyAmIDI1Nikge1xuICAgICAgICBwYXRjaFVua2V5ZWRDaGlsZHJlbihcbiAgICAgICAgICBjMSxcbiAgICAgICAgICBjMixcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGFwZUZsYWcgJiA4KSB7XG4gICAgICBpZiAocHJldlNoYXBlRmxhZyAmIDE2KSB7XG4gICAgICAgIHVubW91bnRDaGlsZHJlbihjMSwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSk7XG4gICAgICB9XG4gICAgICBpZiAoYzIgIT09IGMxKSB7XG4gICAgICAgIGhvc3RTZXRFbGVtZW50VGV4dChjb250YWluZXIsIGMyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXZTaGFwZUZsYWcgJiAxNikge1xuICAgICAgICBpZiAoc2hhcGVGbGFnICYgMTYpIHtcbiAgICAgICAgICBwYXRjaEtleWVkQ2hpbGRyZW4oXG4gICAgICAgICAgICBjMSxcbiAgICAgICAgICAgIGMyLFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVubW91bnRDaGlsZHJlbihjMSwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwcmV2U2hhcGVGbGFnICYgOCkge1xuICAgICAgICAgIGhvc3RTZXRFbGVtZW50VGV4dChjb250YWluZXIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaGFwZUZsYWcgJiAxNikge1xuICAgICAgICAgIG1vdW50Q2hpbGRyZW4oXG4gICAgICAgICAgICBjMixcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgIGFuY2hvcixcbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgICAgb3B0aW1pemVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcGF0Y2hVbmtleWVkQ2hpbGRyZW4gPSAoYzEsIGMyLCBjb250YWluZXIsIGFuY2hvciwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgbmFtZXNwYWNlLCBzbG90U2NvcGVJZHMsIG9wdGltaXplZCkgPT4ge1xuICAgIGMxID0gYzEgfHwgRU1QVFlfQVJSO1xuICAgIGMyID0gYzIgfHwgRU1QVFlfQVJSO1xuICAgIGNvbnN0IG9sZExlbmd0aCA9IGMxLmxlbmd0aDtcbiAgICBjb25zdCBuZXdMZW5ndGggPSBjMi5sZW5ndGg7XG4gICAgY29uc3QgY29tbW9uTGVuZ3RoID0gTWF0aC5taW4ob2xkTGVuZ3RoLCBuZXdMZW5ndGgpO1xuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBjb21tb25MZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmV4dENoaWxkID0gYzJbaV0gPSBvcHRpbWl6ZWQgPyBjbG9uZUlmTW91bnRlZChjMltpXSkgOiBub3JtYWxpemVWTm9kZShjMltpXSk7XG4gICAgICBwYXRjaChcbiAgICAgICAgYzFbaV0sXG4gICAgICAgIG5leHRDaGlsZCxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBudWxsLFxuICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgb3B0aW1pemVkXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAob2xkTGVuZ3RoID4gbmV3TGVuZ3RoKSB7XG4gICAgICB1bm1vdW50Q2hpbGRyZW4oXG4gICAgICAgIGMxLFxuICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICB0cnVlLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgY29tbW9uTGVuZ3RoXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3VudENoaWxkcmVuKFxuICAgICAgICBjMixcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBhbmNob3IsXG4gICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICBvcHRpbWl6ZWQsXG4gICAgICAgIGNvbW1vbkxlbmd0aFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBhdGNoS2V5ZWRDaGlsZHJlbiA9IChjMSwgYzIsIGNvbnRhaW5lciwgcGFyZW50QW5jaG9yLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCBuYW1lc3BhY2UsIHNsb3RTY29wZUlkcywgb3B0aW1pemVkKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGwyID0gYzIubGVuZ3RoO1xuICAgIGxldCBlMSA9IGMxLmxlbmd0aCAtIDE7XG4gICAgbGV0IGUyID0gbDIgLSAxO1xuICAgIHdoaWxlIChpIDw9IGUxICYmIGkgPD0gZTIpIHtcbiAgICAgIGNvbnN0IG4xID0gYzFbaV07XG4gICAgICBjb25zdCBuMiA9IGMyW2ldID0gb3B0aW1pemVkID8gY2xvbmVJZk1vdW50ZWQoYzJbaV0pIDogbm9ybWFsaXplVk5vZGUoYzJbaV0pO1xuICAgICAgaWYgKGlzU2FtZVZOb2RlVHlwZShuMSwgbjIpKSB7XG4gICAgICAgIHBhdGNoKFxuICAgICAgICAgIG4xLFxuICAgICAgICAgIG4yLFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgc2xvdFNjb3BlSWRzLFxuICAgICAgICAgIG9wdGltaXplZFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICAgIHdoaWxlIChpIDw9IGUxICYmIGkgPD0gZTIpIHtcbiAgICAgIGNvbnN0IG4xID0gYzFbZTFdO1xuICAgICAgY29uc3QgbjIgPSBjMltlMl0gPSBvcHRpbWl6ZWQgPyBjbG9uZUlmTW91bnRlZChjMltlMl0pIDogbm9ybWFsaXplVk5vZGUoYzJbZTJdKTtcbiAgICAgIGlmIChpc1NhbWVWTm9kZVR5cGUobjEsIG4yKSkge1xuICAgICAgICBwYXRjaChcbiAgICAgICAgICBuMSxcbiAgICAgICAgICBuMixcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBwYXJlbnRDb21wb25lbnQsXG4gICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICAgIHNsb3RTY29wZUlkcyxcbiAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZTEtLTtcbiAgICAgIGUyLS07XG4gICAgfVxuICAgIGlmIChpID4gZTEpIHtcbiAgICAgIGlmIChpIDw9IGUyKSB7XG4gICAgICAgIGNvbnN0IG5leHRQb3MgPSBlMiArIDE7XG4gICAgICAgIGNvbnN0IGFuY2hvciA9IG5leHRQb3MgPCBsMiA/IGMyW25leHRQb3NdLmVsIDogcGFyZW50QW5jaG9yO1xuICAgICAgICB3aGlsZSAoaSA8PSBlMikge1xuICAgICAgICAgIHBhdGNoKFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGMyW2ldID0gb3B0aW1pemVkID8gY2xvbmVJZk1vdW50ZWQoYzJbaV0pIDogbm9ybWFsaXplVk5vZGUoYzJbaV0pLFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaSA+IGUyKSB7XG4gICAgICB3aGlsZSAoaSA8PSBlMSkge1xuICAgICAgICB1bm1vdW50KGMxW2ldLCBwYXJlbnRDb21wb25lbnQsIHBhcmVudFN1c3BlbnNlLCB0cnVlKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzMSA9IGk7XG4gICAgICBjb25zdCBzMiA9IGk7XG4gICAgICBjb25zdCBrZXlUb05ld0luZGV4TWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICAgIGZvciAoaSA9IHMyOyBpIDw9IGUyOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV4dENoaWxkID0gYzJbaV0gPSBvcHRpbWl6ZWQgPyBjbG9uZUlmTW91bnRlZChjMltpXSkgOiBub3JtYWxpemVWTm9kZShjMltpXSk7XG4gICAgICAgIGlmIChuZXh0Q2hpbGQua2V5ICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBrZXlUb05ld0luZGV4TWFwLmhhcyhuZXh0Q2hpbGQua2V5KSkge1xuICAgICAgICAgICAgd2FybiQxKFxuICAgICAgICAgICAgICBgRHVwbGljYXRlIGtleXMgZm91bmQgZHVyaW5nIHVwZGF0ZTpgLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShuZXh0Q2hpbGQua2V5KSxcbiAgICAgICAgICAgICAgYE1ha2Ugc3VyZSBrZXlzIGFyZSB1bmlxdWUuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAga2V5VG9OZXdJbmRleE1hcC5zZXQobmV4dENoaWxkLmtleSwgaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBqO1xuICAgICAgbGV0IHBhdGNoZWQgPSAwO1xuICAgICAgY29uc3QgdG9CZVBhdGNoZWQgPSBlMiAtIHMyICsgMTtcbiAgICAgIGxldCBtb3ZlZCA9IGZhbHNlO1xuICAgICAgbGV0IG1heE5ld0luZGV4U29GYXIgPSAwO1xuICAgICAgY29uc3QgbmV3SW5kZXhUb09sZEluZGV4TWFwID0gbmV3IEFycmF5KHRvQmVQYXRjaGVkKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0b0JlUGF0Y2hlZDsgaSsrKSBuZXdJbmRleFRvT2xkSW5kZXhNYXBbaV0gPSAwO1xuICAgICAgZm9yIChpID0gczE7IGkgPD0gZTE7IGkrKykge1xuICAgICAgICBjb25zdCBwcmV2Q2hpbGQgPSBjMVtpXTtcbiAgICAgICAgaWYgKHBhdGNoZWQgPj0gdG9CZVBhdGNoZWQpIHtcbiAgICAgICAgICB1bm1vdW50KHByZXZDaGlsZCwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgdHJ1ZSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld0luZGV4O1xuICAgICAgICBpZiAocHJldkNoaWxkLmtleSAhPSBudWxsKSB7XG4gICAgICAgICAgbmV3SW5kZXggPSBrZXlUb05ld0luZGV4TWFwLmdldChwcmV2Q2hpbGQua2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGogPSBzMjsgaiA8PSBlMjsgaisrKSB7XG4gICAgICAgICAgICBpZiAobmV3SW5kZXhUb09sZEluZGV4TWFwW2ogLSBzMl0gPT09IDAgJiYgaXNTYW1lVk5vZGVUeXBlKHByZXZDaGlsZCwgYzJbal0pKSB7XG4gICAgICAgICAgICAgIG5ld0luZGV4ID0gajtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdJbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgdW5tb3VudChwcmV2Q2hpbGQsIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0luZGV4VG9PbGRJbmRleE1hcFtuZXdJbmRleCAtIHMyXSA9IGkgKyAxO1xuICAgICAgICAgIGlmIChuZXdJbmRleCA+PSBtYXhOZXdJbmRleFNvRmFyKSB7XG4gICAgICAgICAgICBtYXhOZXdJbmRleFNvRmFyID0gbmV3SW5kZXg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGF0Y2goXG4gICAgICAgICAgICBwcmV2Q2hpbGQsXG4gICAgICAgICAgICBjMltuZXdJbmRleF0sXG4gICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgICApO1xuICAgICAgICAgIHBhdGNoZWQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgaW5jcmVhc2luZ05ld0luZGV4U2VxdWVuY2UgPSBtb3ZlZCA/IGdldFNlcXVlbmNlKG5ld0luZGV4VG9PbGRJbmRleE1hcCkgOiBFTVBUWV9BUlI7XG4gICAgICBqID0gaW5jcmVhc2luZ05ld0luZGV4U2VxdWVuY2UubGVuZ3RoIC0gMTtcbiAgICAgIGZvciAoaSA9IHRvQmVQYXRjaGVkIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gczIgKyBpO1xuICAgICAgICBjb25zdCBuZXh0Q2hpbGQgPSBjMltuZXh0SW5kZXhdO1xuICAgICAgICBjb25zdCBhbmNob3JWTm9kZSA9IGMyW25leHRJbmRleCArIDFdO1xuICAgICAgICBjb25zdCBhbmNob3IgPSBuZXh0SW5kZXggKyAxIDwgbDIgPyAoXG4gICAgICAgICAgLy8gIzEzNTU5LCBmYWxsYmFjayB0byBlbCBwbGFjZWhvbGRlciBmb3IgdW5yZXNvbHZlZCBhc3luYyBjb21wb25lbnRcbiAgICAgICAgICBhbmNob3JWTm9kZS5lbCB8fCBhbmNob3JWTm9kZS5wbGFjZWhvbGRlclxuICAgICAgICApIDogcGFyZW50QW5jaG9yO1xuICAgICAgICBpZiAobmV3SW5kZXhUb09sZEluZGV4TWFwW2ldID09PSAwKSB7XG4gICAgICAgICAgcGF0Y2goXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbmV4dENoaWxkLFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgcGFyZW50U3VzcGVuc2UsXG4gICAgICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgICAgICBzbG90U2NvcGVJZHMsXG4gICAgICAgICAgICBvcHRpbWl6ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgaWYgKGogPCAwIHx8IGkgIT09IGluY3JlYXNpbmdOZXdJbmRleFNlcXVlbmNlW2pdKSB7XG4gICAgICAgICAgICBtb3ZlKG5leHRDaGlsZCwgY29udGFpbmVyLCBhbmNob3IsIDIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBtb3ZlID0gKHZub2RlLCBjb250YWluZXIsIGFuY2hvciwgbW92ZVR5cGUsIHBhcmVudFN1c3BlbnNlID0gbnVsbCkgPT4ge1xuICAgIGNvbnN0IHsgZWwsIHR5cGUsIHRyYW5zaXRpb24sIGNoaWxkcmVuLCBzaGFwZUZsYWcgfSA9IHZub2RlO1xuICAgIGlmIChzaGFwZUZsYWcgJiA2KSB7XG4gICAgICBtb3ZlKHZub2RlLmNvbXBvbmVudC5zdWJUcmVlLCBjb250YWluZXIsIGFuY2hvciwgbW92ZVR5cGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2hhcGVGbGFnICYgMTI4KSB7XG4gICAgICB2bm9kZS5zdXNwZW5zZS5tb3ZlKGNvbnRhaW5lciwgYW5jaG9yLCBtb3ZlVHlwZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzaGFwZUZsYWcgJiA2NCkge1xuICAgICAgdHlwZS5tb3ZlKHZub2RlLCBjb250YWluZXIsIGFuY2hvciwgaW50ZXJuYWxzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IEZyYWdtZW50KSB7XG4gICAgICBob3N0SW5zZXJ0KGVsLCBjb250YWluZXIsIGFuY2hvcik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1vdmUoY2hpbGRyZW5baV0sIGNvbnRhaW5lciwgYW5jaG9yLCBtb3ZlVHlwZSk7XG4gICAgICB9XG4gICAgICBob3N0SW5zZXJ0KHZub2RlLmFuY2hvciwgY29udGFpbmVyLCBhbmNob3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gU3RhdGljKSB7XG4gICAgICBtb3ZlU3RhdGljTm9kZSh2bm9kZSwgY29udGFpbmVyLCBhbmNob3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZWVkVHJhbnNpdGlvbjIgPSBtb3ZlVHlwZSAhPT0gMiAmJiBzaGFwZUZsYWcgJiAxICYmIHRyYW5zaXRpb247XG4gICAgaWYgKG5lZWRUcmFuc2l0aW9uMikge1xuICAgICAgaWYgKG1vdmVUeXBlID09PSAwKSB7XG4gICAgICAgIHRyYW5zaXRpb24uYmVmb3JlRW50ZXIoZWwpO1xuICAgICAgICBob3N0SW5zZXJ0KGVsLCBjb250YWluZXIsIGFuY2hvcik7XG4gICAgICAgIHF1ZXVlUG9zdFJlbmRlckVmZmVjdCgoKSA9PiB0cmFuc2l0aW9uLmVudGVyKGVsKSwgcGFyZW50U3VzcGVuc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBsZWF2ZSwgZGVsYXlMZWF2ZSwgYWZ0ZXJMZWF2ZSB9ID0gdHJhbnNpdGlvbjtcbiAgICAgICAgY29uc3QgcmVtb3ZlMjIgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKHZub2RlLmN0eC5pc1VubW91bnRlZCkge1xuICAgICAgICAgICAgaG9zdFJlbW92ZShlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhvc3RJbnNlcnQoZWwsIGNvbnRhaW5lciwgYW5jaG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBlcmZvcm1MZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgICBsZWF2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlMjIoKTtcbiAgICAgICAgICAgIGFmdGVyTGVhdmUgJiYgYWZ0ZXJMZWF2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZGVsYXlMZWF2ZSkge1xuICAgICAgICAgIGRlbGF5TGVhdmUoZWwsIHJlbW92ZTIyLCBwZXJmb3JtTGVhdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlcmZvcm1MZWF2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhvc3RJbnNlcnQoZWwsIGNvbnRhaW5lciwgYW5jaG9yKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHVubW91bnQgPSAodm5vZGUsIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIGRvUmVtb3ZlID0gZmFsc2UsIG9wdGltaXplZCA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIHByb3BzLFxuICAgICAgcmVmOiByZWYzLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBkeW5hbWljQ2hpbGRyZW4sXG4gICAgICBzaGFwZUZsYWcsXG4gICAgICBwYXRjaEZsYWcsXG4gICAgICBkaXJzLFxuICAgICAgY2FjaGVJbmRleFxuICAgIH0gPSB2bm9kZTtcbiAgICBpZiAocGF0Y2hGbGFnID09PSAtMikge1xuICAgICAgb3B0aW1pemVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChyZWYzICE9IG51bGwpIHtcbiAgICAgIHBhdXNlVHJhY2tpbmcoKTtcbiAgICAgIHNldFJlZihyZWYzLCBudWxsLCBwYXJlbnRTdXNwZW5zZSwgdm5vZGUsIHRydWUpO1xuICAgICAgcmVzZXRUcmFja2luZygpO1xuICAgIH1cbiAgICBpZiAoY2FjaGVJbmRleCAhPSBudWxsKSB7XG4gICAgICBwYXJlbnRDb21wb25lbnQucmVuZGVyQ2FjaGVbY2FjaGVJbmRleF0gPSB2b2lkIDA7XG4gICAgfVxuICAgIGlmIChzaGFwZUZsYWcgJiAyNTYpIHtcbiAgICAgIHBhcmVudENvbXBvbmVudC5jdHguZGVhY3RpdmF0ZSh2bm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNob3VsZEludm9rZURpcnMgPSBzaGFwZUZsYWcgJiAxICYmIGRpcnM7XG4gICAgY29uc3Qgc2hvdWxkSW52b2tlVm5vZGVIb29rID0gIWlzQXN5bmNXcmFwcGVyKHZub2RlKTtcbiAgICBsZXQgdm5vZGVIb29rO1xuICAgIGlmIChzaG91bGRJbnZva2VWbm9kZUhvb2sgJiYgKHZub2RlSG9vayA9IHByb3BzICYmIHByb3BzLm9uVm5vZGVCZWZvcmVVbm1vdW50KSkge1xuICAgICAgaW52b2tlVk5vZGVIb29rKHZub2RlSG9vaywgcGFyZW50Q29tcG9uZW50LCB2bm9kZSk7XG4gICAgfVxuICAgIGlmIChzaGFwZUZsYWcgJiA2KSB7XG4gICAgICB1bm1vdW50Q29tcG9uZW50KHZub2RlLmNvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIGRvUmVtb3ZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNoYXBlRmxhZyAmIDEyOCkge1xuICAgICAgICB2bm9kZS5zdXNwZW5zZS51bm1vdW50KHBhcmVudFN1c3BlbnNlLCBkb1JlbW92ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzaG91bGRJbnZva2VEaXJzKSB7XG4gICAgICAgIGludm9rZURpcmVjdGl2ZUhvb2sodm5vZGUsIG51bGwsIHBhcmVudENvbXBvbmVudCwgXCJiZWZvcmVVbm1vdW50XCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoYXBlRmxhZyAmIDY0KSB7XG4gICAgICAgIHZub2RlLnR5cGUucmVtb3ZlKFxuICAgICAgICAgIHZub2RlLFxuICAgICAgICAgIHBhcmVudENvbXBvbmVudCxcbiAgICAgICAgICBwYXJlbnRTdXNwZW5zZSxcbiAgICAgICAgICBpbnRlcm5hbHMsXG4gICAgICAgICAgZG9SZW1vdmVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZHluYW1pY0NoaWxkcmVuICYmIC8vICM1MTU0XG4gICAgICAvLyB3aGVuIHYtb25jZSBpcyB1c2VkIGluc2lkZSBhIGJsb2NrLCBzZXRCbG9ja1RyYWNraW5nKC0xKSBtYXJrcyB0aGVcbiAgICAgIC8vIHBhcmVudCBibG9jayB3aXRoIGhhc09uY2U6IHRydWVcbiAgICAgIC8vIHNvIHRoYXQgaXQgZG9lc24ndCB0YWtlIHRoZSBmYXN0IHBhdGggZHVyaW5nIHVubW91bnQgLSBvdGhlcndpc2VcbiAgICAgIC8vIGNvbXBvbmVudHMgbmVzdGVkIGluIHYtb25jZSBhcmUgbmV2ZXIgdW5tb3VudGVkLlxuICAgICAgIWR5bmFtaWNDaGlsZHJlbi5oYXNPbmNlICYmIC8vICMxMTUzOiBmYXN0IHBhdGggc2hvdWxkIG5vdCBiZSB0YWtlbiBmb3Igbm9uLXN0YWJsZSAodi1mb3IpIGZyYWdtZW50c1xuICAgICAgKHR5cGUgIT09IEZyYWdtZW50IHx8IHBhdGNoRmxhZyA+IDAgJiYgcGF0Y2hGbGFnICYgNjQpKSB7XG4gICAgICAgIHVubW91bnRDaGlsZHJlbihcbiAgICAgICAgICBkeW5hbWljQ2hpbGRyZW4sXG4gICAgICAgICAgcGFyZW50Q29tcG9uZW50LFxuICAgICAgICAgIHBhcmVudFN1c3BlbnNlLFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gRnJhZ21lbnQgJiYgcGF0Y2hGbGFnICYgKDEyOCB8IDI1NikgfHwgIW9wdGltaXplZCAmJiBzaGFwZUZsYWcgJiAxNikge1xuICAgICAgICB1bm1vdW50Q2hpbGRyZW4oY2hpbGRyZW4sIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UpO1xuICAgICAgfVxuICAgICAgaWYgKGRvUmVtb3ZlKSB7XG4gICAgICAgIHJlbW92ZTIodm5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hvdWxkSW52b2tlVm5vZGVIb29rICYmICh2bm9kZUhvb2sgPSBwcm9wcyAmJiBwcm9wcy5vblZub2RlVW5tb3VudGVkKSB8fCBzaG91bGRJbnZva2VEaXJzKSB7XG4gICAgICBxdWV1ZVBvc3RSZW5kZXJFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2bm9kZUhvb2sgJiYgaW52b2tlVk5vZGVIb29rKHZub2RlSG9vaywgcGFyZW50Q29tcG9uZW50LCB2bm9kZSk7XG4gICAgICAgIHNob3VsZEludm9rZURpcnMgJiYgaW52b2tlRGlyZWN0aXZlSG9vayh2bm9kZSwgbnVsbCwgcGFyZW50Q29tcG9uZW50LCBcInVubW91bnRlZFwiKTtcbiAgICAgIH0sIHBhcmVudFN1c3BlbnNlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbW92ZTIgPSAodm5vZGUpID0+IHtcbiAgICBjb25zdCB7IHR5cGUsIGVsLCBhbmNob3IsIHRyYW5zaXRpb24gfSA9IHZub2RlO1xuICAgIGlmICh0eXBlID09PSBGcmFnbWVudCkge1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgdm5vZGUucGF0Y2hGbGFnID4gMCAmJiB2bm9kZS5wYXRjaEZsYWcgJiAyMDQ4ICYmIHRyYW5zaXRpb24gJiYgIXRyYW5zaXRpb24ucGVyc2lzdGVkKSB7XG4gICAgICAgIHZub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IENvbW1lbnQpIHtcbiAgICAgICAgICAgIGhvc3RSZW1vdmUoY2hpbGQuZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmUyKGNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlRnJhZ21lbnQoZWwsIGFuY2hvcik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlID09PSBTdGF0aWMpIHtcbiAgICAgIHJlbW92ZVN0YXRpY05vZGUodm5vZGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwZXJmb3JtUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgaG9zdFJlbW92ZShlbCk7XG4gICAgICBpZiAodHJhbnNpdGlvbiAmJiAhdHJhbnNpdGlvbi5wZXJzaXN0ZWQgJiYgdHJhbnNpdGlvbi5hZnRlckxlYXZlKSB7XG4gICAgICAgIHRyYW5zaXRpb24uYWZ0ZXJMZWF2ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKHZub2RlLnNoYXBlRmxhZyAmIDEgJiYgdHJhbnNpdGlvbiAmJiAhdHJhbnNpdGlvbi5wZXJzaXN0ZWQpIHtcbiAgICAgIGNvbnN0IHsgbGVhdmUsIGRlbGF5TGVhdmUgfSA9IHRyYW5zaXRpb247XG4gICAgICBjb25zdCBwZXJmb3JtTGVhdmUgPSAoKSA9PiBsZWF2ZShlbCwgcGVyZm9ybVJlbW92ZSk7XG4gICAgICBpZiAoZGVsYXlMZWF2ZSkge1xuICAgICAgICBkZWxheUxlYXZlKHZub2RlLmVsLCBwZXJmb3JtUmVtb3ZlLCBwZXJmb3JtTGVhdmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVyZm9ybUxlYXZlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlcmZvcm1SZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbW92ZUZyYWdtZW50ID0gKGN1ciwgZW5kKSA9PiB7XG4gICAgbGV0IG5leHQ7XG4gICAgd2hpbGUgKGN1ciAhPT0gZW5kKSB7XG4gICAgICBuZXh0ID0gaG9zdE5leHRTaWJsaW5nKGN1cik7XG4gICAgICBob3N0UmVtb3ZlKGN1cik7XG4gICAgICBjdXIgPSBuZXh0O1xuICAgIH1cbiAgICBob3N0UmVtb3ZlKGVuZCk7XG4gIH07XG4gIGNvbnN0IHVubW91bnRDb21wb25lbnQgPSAoaW5zdGFuY2UsIHBhcmVudFN1c3BlbnNlLCBkb1JlbW92ZSkgPT4ge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGluc3RhbmNlLnR5cGUuX19obXJJZCkge1xuICAgICAgdW5yZWdpc3RlckhNUihpbnN0YW5jZSk7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGJ1bSxcbiAgICAgIHNjb3BlLFxuICAgICAgam9iLFxuICAgICAgc3ViVHJlZSxcbiAgICAgIHVtLFxuICAgICAgbSxcbiAgICAgIGEsXG4gICAgICBwYXJlbnQsXG4gICAgICBzbG90czogeyBfXzogc2xvdENhY2hlS2V5cyB9XG4gICAgfSA9IGluc3RhbmNlO1xuICAgIGludmFsaWRhdGVNb3VudChtKTtcbiAgICBpbnZhbGlkYXRlTW91bnQoYSk7XG4gICAgaWYgKGJ1bSkge1xuICAgICAgaW52b2tlQXJyYXlGbnMoYnVtKTtcbiAgICB9XG4gICAgaWYgKHBhcmVudCAmJiBpc0FycmF5KHNsb3RDYWNoZUtleXMpKSB7XG4gICAgICBzbG90Q2FjaGVLZXlzLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgcGFyZW50LnJlbmRlckNhY2hlW3ZdID0gdm9pZCAwO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHNjb3BlLnN0b3AoKTtcbiAgICBpZiAoam9iKSB7XG4gICAgICBqb2IuZmxhZ3MgfD0gODtcbiAgICAgIHVubW91bnQoc3ViVHJlZSwgaW5zdGFuY2UsIHBhcmVudFN1c3BlbnNlLCBkb1JlbW92ZSk7XG4gICAgfVxuICAgIGlmICh1bSkge1xuICAgICAgcXVldWVQb3N0UmVuZGVyRWZmZWN0KHVtLCBwYXJlbnRTdXNwZW5zZSk7XG4gICAgfVxuICAgIHF1ZXVlUG9zdFJlbmRlckVmZmVjdCgoKSA9PiB7XG4gICAgICBpbnN0YW5jZS5pc1VubW91bnRlZCA9IHRydWU7XG4gICAgfSwgcGFyZW50U3VzcGVuc2UpO1xuICAgIGlmIChwYXJlbnRTdXNwZW5zZSAmJiBwYXJlbnRTdXNwZW5zZS5wZW5kaW5nQnJhbmNoICYmICFwYXJlbnRTdXNwZW5zZS5pc1VubW91bnRlZCAmJiBpbnN0YW5jZS5hc3luY0RlcCAmJiAhaW5zdGFuY2UuYXN5bmNSZXNvbHZlZCAmJiBpbnN0YW5jZS5zdXNwZW5zZUlkID09PSBwYXJlbnRTdXNwZW5zZS5wZW5kaW5nSWQpIHtcbiAgICAgIHBhcmVudFN1c3BlbnNlLmRlcHMtLTtcbiAgICAgIGlmIChwYXJlbnRTdXNwZW5zZS5kZXBzID09PSAwKSB7XG4gICAgICAgIHBhcmVudFN1c3BlbnNlLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgZmFsc2UpIHtcbiAgICAgIGRldnRvb2xzQ29tcG9uZW50UmVtb3ZlZChpbnN0YW5jZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCB1bm1vdW50Q2hpbGRyZW4gPSAoY2hpbGRyZW4sIHBhcmVudENvbXBvbmVudCwgcGFyZW50U3VzcGVuc2UsIGRvUmVtb3ZlID0gZmFsc2UsIG9wdGltaXplZCA9IGZhbHNlLCBzdGFydCA9IDApID0+IHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgdW5tb3VudChjaGlsZHJlbltpXSwgcGFyZW50Q29tcG9uZW50LCBwYXJlbnRTdXNwZW5zZSwgZG9SZW1vdmUsIG9wdGltaXplZCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXROZXh0SG9zdE5vZGUgPSAodm5vZGUpID0+IHtcbiAgICBpZiAodm5vZGUuc2hhcGVGbGFnICYgNikge1xuICAgICAgcmV0dXJuIGdldE5leHRIb3N0Tm9kZSh2bm9kZS5jb21wb25lbnQuc3ViVHJlZSk7XG4gICAgfVxuICAgIGlmICh2bm9kZS5zaGFwZUZsYWcgJiAxMjgpIHtcbiAgICAgIHJldHVybiB2bm9kZS5zdXNwZW5zZS5uZXh0KCk7XG4gICAgfVxuICAgIGNvbnN0IGVsID0gaG9zdE5leHRTaWJsaW5nKHZub2RlLmFuY2hvciB8fCB2bm9kZS5lbCk7XG4gICAgY29uc3QgdGVsZXBvcnRFbmQgPSBlbCAmJiBlbFtUZWxlcG9ydEVuZEtleV07XG4gICAgcmV0dXJuIHRlbGVwb3J0RW5kID8gaG9zdE5leHRTaWJsaW5nKHRlbGVwb3J0RW5kKSA6IGVsO1xuICB9O1xuICBsZXQgaXNGbHVzaGluZyA9IGZhbHNlO1xuICBjb25zdCByZW5kZXIyID0gKHZub2RlLCBjb250YWluZXIsIG5hbWVzcGFjZSkgPT4ge1xuICAgIGlmICh2bm9kZSA9PSBudWxsKSB7XG4gICAgICBpZiAoY29udGFpbmVyLl92bm9kZSkge1xuICAgICAgICB1bm1vdW50KGNvbnRhaW5lci5fdm5vZGUsIG51bGwsIG51bGwsIHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXRjaChcbiAgICAgICAgY29udGFpbmVyLl92bm9kZSB8fCBudWxsLFxuICAgICAgICB2bm9kZSxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICBuYW1lc3BhY2VcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5fdm5vZGUgPSB2bm9kZTtcbiAgICBpZiAoIWlzRmx1c2hpbmcpIHtcbiAgICAgIGlzRmx1c2hpbmcgPSB0cnVlO1xuICAgICAgZmx1c2hQcmVGbHVzaENicygpO1xuICAgICAgZmx1c2hQb3N0Rmx1c2hDYnMoKTtcbiAgICAgIGlzRmx1c2hpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGludGVybmFscyA9IHtcbiAgICBwOiBwYXRjaCxcbiAgICB1bTogdW5tb3VudCxcbiAgICBtOiBtb3ZlLFxuICAgIHI6IHJlbW92ZTIsXG4gICAgbXQ6IG1vdW50Q29tcG9uZW50LFxuICAgIG1jOiBtb3VudENoaWxkcmVuLFxuICAgIHBjOiBwYXRjaENoaWxkcmVuLFxuICAgIHBiYzogcGF0Y2hCbG9ja0NoaWxkcmVuLFxuICAgIG46IGdldE5leHRIb3N0Tm9kZSxcbiAgICBvOiBvcHRpb25zXG4gIH07XG4gIGxldCBoeWRyYXRlO1xuICByZXR1cm4ge1xuICAgIHJlbmRlcjogcmVuZGVyMixcbiAgICBoeWRyYXRlLFxuICAgIGNyZWF0ZUFwcDogY3JlYXRlQXBwQVBJKHJlbmRlcjIpXG4gIH07XG59XG5mdW5jdGlvbiByZXNvbHZlQ2hpbGRyZW5OYW1lc3BhY2UoeyB0eXBlLCBwcm9wcyB9LCBjdXJyZW50TmFtZXNwYWNlKSB7XG4gIHJldHVybiBjdXJyZW50TmFtZXNwYWNlID09PSBcInN2Z1wiICYmIHR5cGUgPT09IFwiZm9yZWlnbk9iamVjdFwiIHx8IGN1cnJlbnROYW1lc3BhY2UgPT09IFwibWF0aG1sXCIgJiYgdHlwZSA9PT0gXCJhbm5vdGF0aW9uLXhtbFwiICYmIHByb3BzICYmIHByb3BzLmVuY29kaW5nICYmIHByb3BzLmVuY29kaW5nLmluY2x1ZGVzKFwiaHRtbFwiKSA/IHZvaWQgMCA6IGN1cnJlbnROYW1lc3BhY2U7XG59XG5mdW5jdGlvbiB0b2dnbGVSZWN1cnNlKHsgZWZmZWN0OiBlZmZlY3QyLCBqb2IgfSwgYWxsb3dlZCkge1xuICBpZiAoYWxsb3dlZCkge1xuICAgIGVmZmVjdDIuZmxhZ3MgfD0gMzI7XG4gICAgam9iLmZsYWdzIHw9IDQ7XG4gIH0gZWxzZSB7XG4gICAgZWZmZWN0Mi5mbGFncyAmPSAtMzM7XG4gICAgam9iLmZsYWdzICY9IC01O1xuICB9XG59XG5mdW5jdGlvbiBuZWVkVHJhbnNpdGlvbihwYXJlbnRTdXNwZW5zZSwgdHJhbnNpdGlvbikge1xuICByZXR1cm4gKCFwYXJlbnRTdXNwZW5zZSB8fCBwYXJlbnRTdXNwZW5zZSAmJiAhcGFyZW50U3VzcGVuc2UucGVuZGluZ0JyYW5jaCkgJiYgdHJhbnNpdGlvbiAmJiAhdHJhbnNpdGlvbi5wZXJzaXN0ZWQ7XG59XG5mdW5jdGlvbiB0cmF2ZXJzZVN0YXRpY0NoaWxkcmVuKG4xLCBuMiwgc2hhbGxvdyA9IGZhbHNlKSB7XG4gIGNvbnN0IGNoMSA9IG4xLmNoaWxkcmVuO1xuICBjb25zdCBjaDIgPSBuMi5jaGlsZHJlbjtcbiAgaWYgKGlzQXJyYXkoY2gxKSAmJiBpc0FycmF5KGNoMikpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoMS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYzEgPSBjaDFbaV07XG4gICAgICBsZXQgYzIgPSBjaDJbaV07XG4gICAgICBpZiAoYzIuc2hhcGVGbGFnICYgMSAmJiAhYzIuZHluYW1pY0NoaWxkcmVuKSB7XG4gICAgICAgIGlmIChjMi5wYXRjaEZsYWcgPD0gMCB8fCBjMi5wYXRjaEZsYWcgPT09IDMyKSB7XG4gICAgICAgICAgYzIgPSBjaDJbaV0gPSBjbG9uZUlmTW91bnRlZChjaDJbaV0pO1xuICAgICAgICAgIGMyLmVsID0gYzEuZWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzaGFsbG93ICYmIGMyLnBhdGNoRmxhZyAhPT0gLTIpXG4gICAgICAgICAgdHJhdmVyc2VTdGF0aWNDaGlsZHJlbihjMSwgYzIpO1xuICAgICAgfVxuICAgICAgaWYgKGMyLnR5cGUgPT09IFRleHQpIHtcbiAgICAgICAgYzIuZWwgPSBjMS5lbDtcbiAgICAgIH1cbiAgICAgIGlmIChjMi50eXBlID09PSBDb21tZW50ICYmICFjMi5lbCkge1xuICAgICAgICBjMi5lbCA9IGMxLmVsO1xuICAgICAgfVxuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgYzIuZWwgJiYgKGMyLmVsLl9fdm5vZGUgPSBjMik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBnZXRTZXF1ZW5jZShhcnIpIHtcbiAgY29uc3QgcDIgPSBhcnIuc2xpY2UoKTtcbiAgY29uc3QgcmVzdWx0ID0gWzBdO1xuICBsZXQgaSwgaiwgdSwgdiwgYztcbiAgY29uc3QgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYXJySSA9IGFycltpXTtcbiAgICBpZiAoYXJySSAhPT0gMCkge1xuICAgICAgaiA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICBpZiAoYXJyW2pdIDwgYXJySSkge1xuICAgICAgICBwMltpXSA9IGo7XG4gICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHUgPSAwO1xuICAgICAgdiA9IHJlc3VsdC5sZW5ndGggLSAxO1xuICAgICAgd2hpbGUgKHUgPCB2KSB7XG4gICAgICAgIGMgPSB1ICsgdiA+PiAxO1xuICAgICAgICBpZiAoYXJyW3Jlc3VsdFtjXV0gPCBhcnJJKSB7XG4gICAgICAgICAgdSA9IGMgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHYgPSBjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYXJySSA8IGFycltyZXN1bHRbdV1dKSB7XG4gICAgICAgIGlmICh1ID4gMCkge1xuICAgICAgICAgIHAyW2ldID0gcmVzdWx0W3UgLSAxXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRbdV0gPSBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1ID0gcmVzdWx0Lmxlbmd0aDtcbiAgdiA9IHJlc3VsdFt1IC0gMV07XG4gIHdoaWxlICh1LS0gPiAwKSB7XG4gICAgcmVzdWx0W3VdID0gdjtcbiAgICB2ID0gcDJbdl07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGxvY2F0ZU5vbkh5ZHJhdGVkQXN5bmNSb290KGluc3RhbmNlKSB7XG4gIGNvbnN0IHN1YkNvbXBvbmVudCA9IGluc3RhbmNlLnN1YlRyZWUuY29tcG9uZW50O1xuICBpZiAoc3ViQ29tcG9uZW50KSB7XG4gICAgaWYgKHN1YkNvbXBvbmVudC5hc3luY0RlcCAmJiAhc3ViQ29tcG9uZW50LmFzeW5jUmVzb2x2ZWQpIHtcbiAgICAgIHJldHVybiBzdWJDb21wb25lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsb2NhdGVOb25IeWRyYXRlZEFzeW5jUm9vdChzdWJDb21wb25lbnQpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaW52YWxpZGF0ZU1vdW50KGhvb2tzKSB7XG4gIGlmIChob29rcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspXG4gICAgICBob29rc1tpXS5mbGFncyB8PSA4O1xuICB9XG59XG5jb25zdCBzc3JDb250ZXh0S2V5ID0gU3ltYm9sLmZvcihcInYtc2N4XCIpO1xuY29uc3QgdXNlU1NSQ29udGV4dCA9ICgpID0+IHtcbiAge1xuICAgIGNvbnN0IGN0eCA9IGluamVjdCQxKHNzckNvbnRleHRLZXkpO1xuICAgIGlmICghY3R4KSB7XG4gICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHdhcm4kMShcbiAgICAgICAgYFNlcnZlciByZW5kZXJpbmcgY29udGV4dCBub3QgcHJvdmlkZWQuIE1ha2Ugc3VyZSB0byBvbmx5IGNhbGwgdXNlU1NSQ29udGV4dCgpIGNvbmRpdGlvbmFsbHkgaW4gdGhlIHNlcnZlciBidWlsZC5gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY3R4O1xuICB9XG59O1xuZnVuY3Rpb24gd2F0Y2goc291cmNlLCBjYiwgb3B0aW9ucykge1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhaXNGdW5jdGlvbihjYikpIHtcbiAgICB3YXJuJDEoXG4gICAgICBgXFxgd2F0Y2goZm4sIG9wdGlvbnM/KVxcYCBzaWduYXR1cmUgaGFzIGJlZW4gbW92ZWQgdG8gYSBzZXBhcmF0ZSBBUEkuIFVzZSBcXGB3YXRjaEVmZmVjdChmbiwgb3B0aW9ucz8pXFxgIGluc3RlYWQuIFxcYHdhdGNoXFxgIG5vdyBvbmx5IHN1cHBvcnRzIFxcYHdhdGNoKHNvdXJjZSwgY2IsIG9wdGlvbnM/KSBzaWduYXR1cmUuYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGRvV2F0Y2goc291cmNlLCBjYiwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBkb1dhdGNoKHNvdXJjZSwgY2IsIG9wdGlvbnMgPSBFTVBUWV9PQkopIHtcbiAgY29uc3QgeyBpbW1lZGlhdGUsIGRlZXAsIGZsdXNoLCBvbmNlIH0gPSBvcHRpb25zO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhY2IpIHtcbiAgICBpZiAoaW1tZWRpYXRlICE9PSB2b2lkIDApIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgYHdhdGNoKCkgXCJpbW1lZGlhdGVcIiBvcHRpb24gaXMgb25seSByZXNwZWN0ZWQgd2hlbiB1c2luZyB0aGUgd2F0Y2goc291cmNlLCBjYWxsYmFjaywgb3B0aW9ucz8pIHNpZ25hdHVyZS5gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZGVlcCAhPT0gdm9pZCAwKSB7XG4gICAgICB3YXJuJDEoXG4gICAgICAgIGB3YXRjaCgpIFwiZGVlcFwiIG9wdGlvbiBpcyBvbmx5IHJlc3BlY3RlZCB3aGVuIHVzaW5nIHRoZSB3YXRjaChzb3VyY2UsIGNhbGxiYWNrLCBvcHRpb25zPykgc2lnbmF0dXJlLmBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChvbmNlICE9PSB2b2lkIDApIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgYHdhdGNoKCkgXCJvbmNlXCIgb3B0aW9uIGlzIG9ubHkgcmVzcGVjdGVkIHdoZW4gdXNpbmcgdGhlIHdhdGNoKHNvdXJjZSwgY2FsbGJhY2ssIG9wdGlvbnM/KSBzaWduYXR1cmUuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgYmFzZVdhdGNoT3B0aW9ucyA9IGV4dGVuZCh7fSwgb3B0aW9ucyk7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSBiYXNlV2F0Y2hPcHRpb25zLm9uV2FybiA9IHdhcm4kMTtcbiAgY29uc3QgcnVuc0ltbWVkaWF0ZWx5ID0gY2IgJiYgaW1tZWRpYXRlIHx8ICFjYiAmJiBmbHVzaCAhPT0gXCJwb3N0XCI7XG4gIGxldCBzc3JDbGVhbnVwO1xuICBpZiAoaXNJblNTUkNvbXBvbmVudFNldHVwKSB7XG4gICAgaWYgKGZsdXNoID09PSBcInN5bmNcIikge1xuICAgICAgY29uc3QgY3R4ID0gdXNlU1NSQ29udGV4dCgpO1xuICAgICAgc3NyQ2xlYW51cCA9IGN0eC5fX3dhdGNoZXJIYW5kbGVzIHx8IChjdHguX193YXRjaGVySGFuZGxlcyA9IFtdKTtcbiAgICB9IGVsc2UgaWYgKCFydW5zSW1tZWRpYXRlbHkpIHtcbiAgICAgIGNvbnN0IHdhdGNoU3RvcEhhbmRsZSA9ICgpID0+IHtcbiAgICAgIH07XG4gICAgICB3YXRjaFN0b3BIYW5kbGUuc3RvcCA9IE5PT1A7XG4gICAgICB3YXRjaFN0b3BIYW5kbGUucmVzdW1lID0gTk9PUDtcbiAgICAgIHdhdGNoU3RvcEhhbmRsZS5wYXVzZSA9IE5PT1A7XG4gICAgICByZXR1cm4gd2F0Y2hTdG9wSGFuZGxlO1xuICAgIH1cbiAgfVxuICBjb25zdCBpbnN0YW5jZSA9IGN1cnJlbnRJbnN0YW5jZTtcbiAgYmFzZVdhdGNoT3B0aW9ucy5jYWxsID0gKGZuLCB0eXBlLCBhcmdzKSA9PiBjYWxsV2l0aEFzeW5jRXJyb3JIYW5kbGluZyhmbiwgaW5zdGFuY2UsIHR5cGUsIGFyZ3MpO1xuICBsZXQgaXNQcmUgPSBmYWxzZTtcbiAgaWYgKGZsdXNoID09PSBcInBvc3RcIikge1xuICAgIGJhc2VXYXRjaE9wdGlvbnMuc2NoZWR1bGVyID0gKGpvYikgPT4ge1xuICAgICAgcXVldWVQb3N0UmVuZGVyRWZmZWN0KGpvYiwgaW5zdGFuY2UgJiYgaW5zdGFuY2Uuc3VzcGVuc2UpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoZmx1c2ggIT09IFwic3luY1wiKSB7XG4gICAgaXNQcmUgPSB0cnVlO1xuICAgIGJhc2VXYXRjaE9wdGlvbnMuc2NoZWR1bGVyID0gKGpvYiwgaXNGaXJzdFJ1bikgPT4ge1xuICAgICAgaWYgKGlzRmlyc3RSdW4pIHtcbiAgICAgICAgam9iKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUpvYihqb2IpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgYmFzZVdhdGNoT3B0aW9ucy5hdWdtZW50Sm9iID0gKGpvYikgPT4ge1xuICAgIGlmIChjYikge1xuICAgICAgam9iLmZsYWdzIHw9IDQ7XG4gICAgfVxuICAgIGlmIChpc1ByZSkge1xuICAgICAgam9iLmZsYWdzIHw9IDI7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgam9iLmlkID0gaW5zdGFuY2UudWlkO1xuICAgICAgICBqb2IuaSA9IGluc3RhbmNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3Qgd2F0Y2hIYW5kbGUgPSB3YXRjaCQxKHNvdXJjZSwgY2IsIGJhc2VXYXRjaE9wdGlvbnMpO1xuICBpZiAoaXNJblNTUkNvbXBvbmVudFNldHVwKSB7XG4gICAgaWYgKHNzckNsZWFudXApIHtcbiAgICAgIHNzckNsZWFudXAucHVzaCh3YXRjaEhhbmRsZSk7XG4gICAgfSBlbHNlIGlmIChydW5zSW1tZWRpYXRlbHkpIHtcbiAgICAgIHdhdGNoSGFuZGxlKCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB3YXRjaEhhbmRsZTtcbn1cbmZ1bmN0aW9uIGluc3RhbmNlV2F0Y2goc291cmNlLCB2YWx1ZSwgb3B0aW9ucykge1xuICBjb25zdCBwdWJsaWNUaGlzID0gdGhpcy5wcm94eTtcbiAgY29uc3QgZ2V0dGVyID0gaXNTdHJpbmcoc291cmNlKSA/IHNvdXJjZS5pbmNsdWRlcyhcIi5cIikgPyBjcmVhdGVQYXRoR2V0dGVyKHB1YmxpY1RoaXMsIHNvdXJjZSkgOiAoKSA9PiBwdWJsaWNUaGlzW3NvdXJjZV0gOiBzb3VyY2UuYmluZChwdWJsaWNUaGlzLCBwdWJsaWNUaGlzKTtcbiAgbGV0IGNiO1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICBjYiA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGNiID0gdmFsdWUuaGFuZGxlcjtcbiAgICBvcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgY29uc3QgcmVzZXQgPSBzZXRDdXJyZW50SW5zdGFuY2UodGhpcyk7XG4gIGNvbnN0IHJlcyA9IGRvV2F0Y2goZ2V0dGVyLCBjYi5iaW5kKHB1YmxpY1RoaXMpLCBvcHRpb25zKTtcbiAgcmVzZXQoKTtcbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGNyZWF0ZVBhdGhHZXR0ZXIoY3R4LCBwYXRoKSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdChcIi5cIik7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGV0IGN1ciA9IGN0eDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aCAmJiBjdXI7IGkrKykge1xuICAgICAgY3VyID0gY3VyW3NlZ21lbnRzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cjtcbiAgfTtcbn1cbmNvbnN0IGdldE1vZGVsTW9kaWZpZXJzID0gKHByb3BzLCBtb2RlbE5hbWUpID0+IHtcbiAgcmV0dXJuIG1vZGVsTmFtZSA9PT0gXCJtb2RlbFZhbHVlXCIgfHwgbW9kZWxOYW1lID09PSBcIm1vZGVsLXZhbHVlXCIgPyBwcm9wcy5tb2RlbE1vZGlmaWVycyA6IHByb3BzW2Ake21vZGVsTmFtZX1Nb2RpZmllcnNgXSB8fCBwcm9wc1tgJHtjYW1lbGl6ZShtb2RlbE5hbWUpfU1vZGlmaWVyc2BdIHx8IHByb3BzW2Ake2h5cGhlbmF0ZShtb2RlbE5hbWUpfU1vZGlmaWVyc2BdO1xufTtcbmZ1bmN0aW9uIGVtaXQoaW5zdGFuY2UsIGV2ZW50LCAuLi5yYXdBcmdzKSB7XG4gIGlmIChpbnN0YW5jZS5pc1VubW91bnRlZCkgcmV0dXJuO1xuICBjb25zdCBwcm9wcyA9IGluc3RhbmNlLnZub2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbWl0c09wdGlvbnMsXG4gICAgICBwcm9wc09wdGlvbnM6IFtwcm9wc09wdGlvbnNdXG4gICAgfSA9IGluc3RhbmNlO1xuICAgIGlmIChlbWl0c09wdGlvbnMpIHtcbiAgICAgIGlmICghKGV2ZW50IGluIGVtaXRzT3B0aW9ucykgJiYgdHJ1ZSkge1xuICAgICAgICBpZiAoIXByb3BzT3B0aW9ucyB8fCAhKHRvSGFuZGxlcktleShjYW1lbGl6ZShldmVudCkpIGluIHByb3BzT3B0aW9ucykpIHtcbiAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICBgQ29tcG9uZW50IGVtaXR0ZWQgZXZlbnQgXCIke2V2ZW50fVwiIGJ1dCBpdCBpcyBuZWl0aGVyIGRlY2xhcmVkIGluIHRoZSBlbWl0cyBvcHRpb24gbm9yIGFzIGFuIFwiJHt0b0hhbmRsZXJLZXkoY2FtZWxpemUoZXZlbnQpKX1cIiBwcm9wLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBlbWl0c09wdGlvbnNbZXZlbnRdO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWxpZGF0b3IpKSB7XG4gICAgICAgICAgY29uc3QgaXNWYWxpZCA9IHZhbGlkYXRvciguLi5yYXdBcmdzKTtcbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHdhcm4kMShcbiAgICAgICAgICAgICAgYEludmFsaWQgZXZlbnQgYXJndW1lbnRzOiBldmVudCB2YWxpZGF0aW9uIGZhaWxlZCBmb3IgZXZlbnQgXCIke2V2ZW50fVwiLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCBhcmdzID0gcmF3QXJncztcbiAgY29uc3QgaXNNb2RlbExpc3RlbmVyMiA9IGV2ZW50LnN0YXJ0c1dpdGgoXCJ1cGRhdGU6XCIpO1xuICBjb25zdCBtb2RpZmllcnMgPSBpc01vZGVsTGlzdGVuZXIyICYmIGdldE1vZGVsTW9kaWZpZXJzKHByb3BzLCBldmVudC5zbGljZSg3KSk7XG4gIGlmIChtb2RpZmllcnMpIHtcbiAgICBpZiAobW9kaWZpZXJzLnRyaW0pIHtcbiAgICAgIGFyZ3MgPSByYXdBcmdzLm1hcCgoYSkgPT4gaXNTdHJpbmcoYSkgPyBhLnRyaW0oKSA6IGEpO1xuICAgIH1cbiAgICBpZiAobW9kaWZpZXJzLm51bWJlcikge1xuICAgICAgYXJncyA9IHJhd0FyZ3MubWFwKGxvb3NlVG9OdW1iZXIpO1xuICAgIH1cbiAgfVxuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCBmYWxzZSkge1xuICAgIGRldnRvb2xzQ29tcG9uZW50RW1pdChpbnN0YW5jZSwgZXZlbnQsIGFyZ3MpO1xuICB9XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgY29uc3QgbG93ZXJDYXNlRXZlbnQgPSBldmVudC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChsb3dlckNhc2VFdmVudCAhPT0gZXZlbnQgJiYgcHJvcHNbdG9IYW5kbGVyS2V5KGxvd2VyQ2FzZUV2ZW50KV0pIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgYEV2ZW50IFwiJHtsb3dlckNhc2VFdmVudH1cIiBpcyBlbWl0dGVkIGluIGNvbXBvbmVudCAke2Zvcm1hdENvbXBvbmVudE5hbWUoXG4gICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgaW5zdGFuY2UudHlwZVxuICAgICAgICApfSBidXQgdGhlIGhhbmRsZXIgaXMgcmVnaXN0ZXJlZCBmb3IgXCIke2V2ZW50fVwiLiBOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCB5b3UgY2Fubm90IHVzZSB2LW9uIHRvIGxpc3RlbiB0byBjYW1lbENhc2UgZXZlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIHRlbXBsYXRlcy4gWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXCIke2h5cGhlbmF0ZShcbiAgICAgICAgICBldmVudFxuICAgICAgICApfVwiIGluc3RlYWQgb2YgXCIke2V2ZW50fVwiLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGxldCBoYW5kbGVyTmFtZTtcbiAgbGV0IGhhbmRsZXIgPSBwcm9wc1toYW5kbGVyTmFtZSA9IHRvSGFuZGxlcktleShldmVudCldIHx8IC8vIGFsc28gdHJ5IGNhbWVsQ2FzZSBldmVudCBoYW5kbGVyICgjMjI0OSlcbiAgcHJvcHNbaGFuZGxlck5hbWUgPSB0b0hhbmRsZXJLZXkoY2FtZWxpemUoZXZlbnQpKV07XG4gIGlmICghaGFuZGxlciAmJiBpc01vZGVsTGlzdGVuZXIyKSB7XG4gICAgaGFuZGxlciA9IHByb3BzW2hhbmRsZXJOYW1lID0gdG9IYW5kbGVyS2V5KGh5cGhlbmF0ZShldmVudCkpXTtcbiAgfVxuICBpZiAoaGFuZGxlcikge1xuICAgIGNhbGxXaXRoQXN5bmNFcnJvckhhbmRsaW5nKFxuICAgICAgaGFuZGxlcixcbiAgICAgIGluc3RhbmNlLFxuICAgICAgNixcbiAgICAgIGFyZ3NcbiAgICApO1xuICB9XG4gIGNvbnN0IG9uY2VIYW5kbGVyID0gcHJvcHNbaGFuZGxlck5hbWUgKyBgT25jZWBdO1xuICBpZiAob25jZUhhbmRsZXIpIHtcbiAgICBpZiAoIWluc3RhbmNlLmVtaXR0ZWQpIHtcbiAgICAgIGluc3RhbmNlLmVtaXR0ZWQgPSB7fTtcbiAgICB9IGVsc2UgaWYgKGluc3RhbmNlLmVtaXR0ZWRbaGFuZGxlck5hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGluc3RhbmNlLmVtaXR0ZWRbaGFuZGxlck5hbWVdID0gdHJ1ZTtcbiAgICBjYWxsV2l0aEFzeW5jRXJyb3JIYW5kbGluZyhcbiAgICAgIG9uY2VIYW5kbGVyLFxuICAgICAgaW5zdGFuY2UsXG4gICAgICA2LFxuICAgICAgYXJnc1xuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUVtaXRzT3B0aW9ucyhjb21wLCBhcHBDb250ZXh0LCBhc01peGluID0gZmFsc2UpIHtcbiAgY29uc3QgY2FjaGUgPSBhcHBDb250ZXh0LmVtaXRzQ2FjaGU7XG4gIGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChjb21wKTtcbiAgaWYgKGNhY2hlZCAhPT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIGNhY2hlZDtcbiAgfVxuICBjb25zdCByYXcgPSBjb21wLmVtaXRzO1xuICBsZXQgbm9ybWFsaXplZCA9IHt9O1xuICBsZXQgaGFzRXh0ZW5kcyA9IGZhbHNlO1xuICBpZiAoIWlzRnVuY3Rpb24oY29tcCkpIHtcbiAgICBjb25zdCBleHRlbmRFbWl0cyA9IChyYXcyKSA9PiB7XG4gICAgICBjb25zdCBub3JtYWxpemVkRnJvbUV4dGVuZCA9IG5vcm1hbGl6ZUVtaXRzT3B0aW9ucyhyYXcyLCBhcHBDb250ZXh0LCB0cnVlKTtcbiAgICAgIGlmIChub3JtYWxpemVkRnJvbUV4dGVuZCkge1xuICAgICAgICBoYXNFeHRlbmRzID0gdHJ1ZTtcbiAgICAgICAgZXh0ZW5kKG5vcm1hbGl6ZWQsIG5vcm1hbGl6ZWRGcm9tRXh0ZW5kKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmICghYXNNaXhpbiAmJiBhcHBDb250ZXh0Lm1peGlucy5sZW5ndGgpIHtcbiAgICAgIGFwcENvbnRleHQubWl4aW5zLmZvckVhY2goZXh0ZW5kRW1pdHMpO1xuICAgIH1cbiAgICBpZiAoY29tcC5leHRlbmRzKSB7XG4gICAgICBleHRlbmRFbWl0cyhjb21wLmV4dGVuZHMpO1xuICAgIH1cbiAgICBpZiAoY29tcC5taXhpbnMpIHtcbiAgICAgIGNvbXAubWl4aW5zLmZvckVhY2goZXh0ZW5kRW1pdHMpO1xuICAgIH1cbiAgfVxuICBpZiAoIXJhdyAmJiAhaGFzRXh0ZW5kcykge1xuICAgIGlmIChpc09iamVjdChjb21wKSkge1xuICAgICAgY2FjaGUuc2V0KGNvbXAsIG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoaXNBcnJheShyYXcpKSB7XG4gICAgcmF3LmZvckVhY2goKGtleSkgPT4gbm9ybWFsaXplZFtrZXldID0gbnVsbCk7XG4gIH0gZWxzZSB7XG4gICAgZXh0ZW5kKG5vcm1hbGl6ZWQsIHJhdyk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KGNvbXApKSB7XG4gICAgY2FjaGUuc2V0KGNvbXAsIG5vcm1hbGl6ZWQpO1xuICB9XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuZnVuY3Rpb24gaXNFbWl0TGlzdGVuZXIob3B0aW9ucywga2V5KSB7XG4gIGlmICghb3B0aW9ucyB8fCAhaXNPbihrZXkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGtleSA9IGtleS5zbGljZSgyKS5yZXBsYWNlKC9PbmNlJC8sIFwiXCIpO1xuICByZXR1cm4gaGFzT3duKG9wdGlvbnMsIGtleVswXS50b0xvd2VyQ2FzZSgpICsga2V5LnNsaWNlKDEpKSB8fCBoYXNPd24ob3B0aW9ucywgaHlwaGVuYXRlKGtleSkpIHx8IGhhc093bihvcHRpb25zLCBrZXkpO1xufVxubGV0IGFjY2Vzc2VkQXR0cnMgPSBmYWxzZTtcbmZ1bmN0aW9uIG1hcmtBdHRyc0FjY2Vzc2VkKCkge1xuICBhY2Nlc3NlZEF0dHJzID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudFJvb3QoaW5zdGFuY2UpIHtcbiAgY29uc3Qge1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICB2bm9kZSxcbiAgICBwcm94eSxcbiAgICB3aXRoUHJveHksXG4gICAgcHJvcHNPcHRpb25zOiBbcHJvcHNPcHRpb25zXSxcbiAgICBzbG90cyxcbiAgICBhdHRycyxcbiAgICBlbWl0OiBlbWl0MixcbiAgICByZW5kZXI6IHJlbmRlcjIsXG4gICAgcmVuZGVyQ2FjaGUsXG4gICAgcHJvcHMsXG4gICAgZGF0YSxcbiAgICBzZXR1cFN0YXRlLFxuICAgIGN0eCxcbiAgICBpbmhlcml0QXR0cnNcbiAgfSA9IGluc3RhbmNlO1xuICBjb25zdCBwcmV2ID0gc2V0Q3VycmVudFJlbmRlcmluZ0luc3RhbmNlKGluc3RhbmNlKTtcbiAgbGV0IHJlc3VsdDtcbiAgbGV0IGZhbGx0aHJvdWdoQXR0cnM7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgYWNjZXNzZWRBdHRycyA9IGZhbHNlO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKHZub2RlLnNoYXBlRmxhZyAmIDQpIHtcbiAgICAgIGNvbnN0IHByb3h5VG9Vc2UgPSB3aXRoUHJveHkgfHwgcHJveHk7XG4gICAgICBjb25zdCB0aGlzUHJveHkgPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHNldHVwU3RhdGUuX19pc1NjcmlwdFNldHVwID8gbmV3IFByb3h5KHByb3h5VG9Vc2UsIHtcbiAgICAgICAgZ2V0KHRhcmdldCwga2V5LCByZWNlaXZlcikge1xuICAgICAgICAgIHdhcm4kMShcbiAgICAgICAgICAgIGBQcm9wZXJ0eSAnJHtTdHJpbmcoXG4gICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgKX0nIHdhcyBhY2Nlc3NlZCB2aWEgJ3RoaXMnLiBBdm9pZCB1c2luZyAndGhpcycgaW4gdGVtcGxhdGVzLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpO1xuICAgICAgICB9XG4gICAgICB9KSA6IHByb3h5VG9Vc2U7XG4gICAgICByZXN1bHQgPSBub3JtYWxpemVWTm9kZShcbiAgICAgICAgcmVuZGVyMi5jYWxsKFxuICAgICAgICAgIHRoaXNQcm94eSxcbiAgICAgICAgICBwcm94eVRvVXNlLFxuICAgICAgICAgIHJlbmRlckNhY2hlLFxuICAgICAgICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBzaGFsbG93UmVhZG9ubHkocHJvcHMpIDogcHJvcHMsXG4gICAgICAgICAgc2V0dXBTdGF0ZSxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGN0eFxuICAgICAgICApXG4gICAgICApO1xuICAgICAgZmFsbHRocm91Z2hBdHRycyA9IGF0dHJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZW5kZXIyMiA9IENvbXBvbmVudDtcbiAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIGF0dHJzID09PSBwcm9wcykge1xuICAgICAgICBtYXJrQXR0cnNBY2Nlc3NlZCgpO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gbm9ybWFsaXplVk5vZGUoXG4gICAgICAgIHJlbmRlcjIyLmxlbmd0aCA+IDEgPyByZW5kZXIyMihcbiAgICAgICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gc2hhbGxvd1JlYWRvbmx5KHByb3BzKSA6IHByb3BzLFxuICAgICAgICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyB7XG4gICAgICAgICAgICBnZXQgYXR0cnMoKSB7XG4gICAgICAgICAgICAgIG1hcmtBdHRyc0FjY2Vzc2VkKCk7XG4gICAgICAgICAgICAgIHJldHVybiBzaGFsbG93UmVhZG9ubHkoYXR0cnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNsb3RzLFxuICAgICAgICAgICAgZW1pdDogZW1pdDJcbiAgICAgICAgICB9IDogeyBhdHRycywgc2xvdHMsIGVtaXQ6IGVtaXQyIH1cbiAgICAgICAgKSA6IHJlbmRlcjIyKFxuICAgICAgICAgICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBzaGFsbG93UmVhZG9ubHkocHJvcHMpIDogcHJvcHMsXG4gICAgICAgICAgbnVsbFxuICAgICAgICApXG4gICAgICApO1xuICAgICAgZmFsbHRocm91Z2hBdHRycyA9IENvbXBvbmVudC5wcm9wcyA/IGF0dHJzIDogZ2V0RnVuY3Rpb25hbEZhbGx0aHJvdWdoKGF0dHJzKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGJsb2NrU3RhY2subGVuZ3RoID0gMDtcbiAgICBoYW5kbGVFcnJvcihlcnIsIGluc3RhbmNlLCAxKTtcbiAgICByZXN1bHQgPSBjcmVhdGVWTm9kZShDb21tZW50KTtcbiAgfVxuICBsZXQgcm9vdCA9IHJlc3VsdDtcbiAgbGV0IHNldFJvb3QgPSB2b2lkIDA7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHJlc3VsdC5wYXRjaEZsYWcgPiAwICYmIHJlc3VsdC5wYXRjaEZsYWcgJiAyMDQ4KSB7XG4gICAgW3Jvb3QsIHNldFJvb3RdID0gZ2V0Q2hpbGRSb290KHJlc3VsdCk7XG4gIH1cbiAgaWYgKGZhbGx0aHJvdWdoQXR0cnMgJiYgaW5oZXJpdEF0dHJzICE9PSBmYWxzZSkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmYWxsdGhyb3VnaEF0dHJzKTtcbiAgICBjb25zdCB7IHNoYXBlRmxhZyB9ID0gcm9vdDtcbiAgICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICAgIGlmIChzaGFwZUZsYWcgJiAoMSB8IDYpKSB7XG4gICAgICAgIGlmIChwcm9wc09wdGlvbnMgJiYga2V5cy5zb21lKGlzTW9kZWxMaXN0ZW5lcikpIHtcbiAgICAgICAgICBmYWxsdGhyb3VnaEF0dHJzID0gZmlsdGVyTW9kZWxMaXN0ZW5lcnMoXG4gICAgICAgICAgICBmYWxsdGhyb3VnaEF0dHJzLFxuICAgICAgICAgICAgcHJvcHNPcHRpb25zXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByb290ID0gY2xvbmVWTm9kZShyb290LCBmYWxsdGhyb3VnaEF0dHJzLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgIWFjY2Vzc2VkQXR0cnMgJiYgcm9vdC50eXBlICE9PSBDb21tZW50KSB7XG4gICAgICAgIGNvbnN0IGFsbEF0dHJzID0gT2JqZWN0LmtleXMoYXR0cnMpO1xuICAgICAgICBjb25zdCBldmVudEF0dHJzID0gW107XG4gICAgICAgIGNvbnN0IGV4dHJhQXR0cnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhbGxBdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBhbGxBdHRyc1tpXTtcbiAgICAgICAgICBpZiAoaXNPbihrZXkpKSB7XG4gICAgICAgICAgICBpZiAoIWlzTW9kZWxMaXN0ZW5lcihrZXkpKSB7XG4gICAgICAgICAgICAgIGV2ZW50QXR0cnMucHVzaChrZXlbMl0udG9Mb3dlckNhc2UoKSArIGtleS5zbGljZSgzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4dHJhQXR0cnMucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXh0cmFBdHRycy5sZW5ndGgpIHtcbiAgICAgICAgICB3YXJuJDEoXG4gICAgICAgICAgICBgRXh0cmFuZW91cyBub24tcHJvcHMgYXR0cmlidXRlcyAoJHtleHRyYUF0dHJzLmpvaW4oXCIsIFwiKX0pIHdlcmUgcGFzc2VkIHRvIGNvbXBvbmVudCBidXQgY291bGQgbm90IGJlIGF1dG9tYXRpY2FsbHkgaW5oZXJpdGVkIGJlY2F1c2UgY29tcG9uZW50IHJlbmRlcnMgZnJhZ21lbnQgb3IgdGV4dCBvciB0ZWxlcG9ydCByb290IG5vZGVzLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudEF0dHJzLmxlbmd0aCkge1xuICAgICAgICAgIHdhcm4kMShcbiAgICAgICAgICAgIGBFeHRyYW5lb3VzIG5vbi1lbWl0cyBldmVudCBsaXN0ZW5lcnMgKCR7ZXZlbnRBdHRycy5qb2luKFwiLCBcIil9KSB3ZXJlIHBhc3NlZCB0byBjb21wb25lbnQgYnV0IGNvdWxkIG5vdCBiZSBhdXRvbWF0aWNhbGx5IGluaGVyaXRlZCBiZWNhdXNlIGNvbXBvbmVudCByZW5kZXJzIGZyYWdtZW50IG9yIHRleHQgcm9vdCBub2Rlcy4gSWYgdGhlIGxpc3RlbmVyIGlzIGludGVuZGVkIHRvIGJlIGEgY29tcG9uZW50IGN1c3RvbSBldmVudCBsaXN0ZW5lciBvbmx5LCBkZWNsYXJlIGl0IHVzaW5nIHRoZSBcImVtaXRzXCIgb3B0aW9uLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh2bm9kZS5kaXJzKSB7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgIWlzRWxlbWVudFJvb3Qocm9vdCkpIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgYFJ1bnRpbWUgZGlyZWN0aXZlIHVzZWQgb24gY29tcG9uZW50IHdpdGggbm9uLWVsZW1lbnQgcm9vdCBub2RlLiBUaGUgZGlyZWN0aXZlcyB3aWxsIG5vdCBmdW5jdGlvbiBhcyBpbnRlbmRlZC5gXG4gICAgICApO1xuICAgIH1cbiAgICByb290ID0gY2xvbmVWTm9kZShyb290LCBudWxsLCBmYWxzZSwgdHJ1ZSk7XG4gICAgcm9vdC5kaXJzID0gcm9vdC5kaXJzID8gcm9vdC5kaXJzLmNvbmNhdCh2bm9kZS5kaXJzKSA6IHZub2RlLmRpcnM7XG4gIH1cbiAgaWYgKHZub2RlLnRyYW5zaXRpb24pIHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhaXNFbGVtZW50Um9vdChyb290KSkge1xuICAgICAgd2FybiQxKFxuICAgICAgICBgQ29tcG9uZW50IGluc2lkZSA8VHJhbnNpdGlvbj4gcmVuZGVycyBub24tZWxlbWVudCByb290IG5vZGUgdGhhdCBjYW5ub3QgYmUgYW5pbWF0ZWQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgc2V0VHJhbnNpdGlvbkhvb2tzKHJvb3QsIHZub2RlLnRyYW5zaXRpb24pO1xuICB9XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHNldFJvb3QpIHtcbiAgICBzZXRSb290KHJvb3QpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHJvb3Q7XG4gIH1cbiAgc2V0Q3VycmVudFJlbmRlcmluZ0luc3RhbmNlKHByZXYpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuY29uc3QgZ2V0Q2hpbGRSb290ID0gKHZub2RlKSA9PiB7XG4gIGNvbnN0IHJhd0NoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gIGNvbnN0IGR5bmFtaWNDaGlsZHJlbiA9IHZub2RlLmR5bmFtaWNDaGlsZHJlbjtcbiAgY29uc3QgY2hpbGRSb290ID0gZmlsdGVyU2luZ2xlUm9vdChyYXdDaGlsZHJlbiwgZmFsc2UpO1xuICBpZiAoIWNoaWxkUm9vdCkge1xuICAgIHJldHVybiBbdm5vZGUsIHZvaWQgMF07XG4gIH0gZWxzZSBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiBjaGlsZFJvb3QucGF0Y2hGbGFnID4gMCAmJiBjaGlsZFJvb3QucGF0Y2hGbGFnICYgMjA0OCkge1xuICAgIHJldHVybiBnZXRDaGlsZFJvb3QoY2hpbGRSb290KTtcbiAgfVxuICBjb25zdCBpbmRleCA9IHJhd0NoaWxkcmVuLmluZGV4T2YoY2hpbGRSb290KTtcbiAgY29uc3QgZHluYW1pY0luZGV4ID0gZHluYW1pY0NoaWxkcmVuID8gZHluYW1pY0NoaWxkcmVuLmluZGV4T2YoY2hpbGRSb290KSA6IC0xO1xuICBjb25zdCBzZXRSb290ID0gKHVwZGF0ZWRSb290KSA9PiB7XG4gICAgcmF3Q2hpbGRyZW5baW5kZXhdID0gdXBkYXRlZFJvb3Q7XG4gICAgaWYgKGR5bmFtaWNDaGlsZHJlbikge1xuICAgICAgaWYgKGR5bmFtaWNJbmRleCA+IC0xKSB7XG4gICAgICAgIGR5bmFtaWNDaGlsZHJlbltkeW5hbWljSW5kZXhdID0gdXBkYXRlZFJvb3Q7XG4gICAgICB9IGVsc2UgaWYgKHVwZGF0ZWRSb290LnBhdGNoRmxhZyA+IDApIHtcbiAgICAgICAgdm5vZGUuZHluYW1pY0NoaWxkcmVuID0gWy4uLmR5bmFtaWNDaGlsZHJlbiwgdXBkYXRlZFJvb3RdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIFtub3JtYWxpemVWTm9kZShjaGlsZFJvb3QpLCBzZXRSb290XTtcbn07XG5mdW5jdGlvbiBmaWx0ZXJTaW5nbGVSb290KGNoaWxkcmVuLCByZWN1cnNlID0gdHJ1ZSkge1xuICBsZXQgc2luZ2xlUm9vdDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgaWYgKGlzVk5vZGUoY2hpbGQpKSB7XG4gICAgICBpZiAoY2hpbGQudHlwZSAhPT0gQ29tbWVudCB8fCBjaGlsZC5jaGlsZHJlbiA9PT0gXCJ2LWlmXCIpIHtcbiAgICAgICAgaWYgKHNpbmdsZVJvb3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2luZ2xlUm9vdCA9IGNoaWxkO1xuICAgICAgICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHJlY3Vyc2UgJiYgc2luZ2xlUm9vdC5wYXRjaEZsYWcgPiAwICYmIHNpbmdsZVJvb3QucGF0Y2hGbGFnICYgMjA0OCkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlclNpbmdsZVJvb3Qoc2luZ2xlUm9vdC5jaGlsZHJlbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNpbmdsZVJvb3Q7XG59XG5jb25zdCBnZXRGdW5jdGlvbmFsRmFsbHRocm91Z2ggPSAoYXR0cnMpID0+IHtcbiAgbGV0IHJlcztcbiAgZm9yIChjb25zdCBrZXkgaW4gYXR0cnMpIHtcbiAgICBpZiAoa2V5ID09PSBcImNsYXNzXCIgfHwga2V5ID09PSBcInN0eWxlXCIgfHwgaXNPbihrZXkpKSB7XG4gICAgICAocmVzIHx8IChyZXMgPSB7fSkpW2tleV0gPSBhdHRyc1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufTtcbmNvbnN0IGZpbHRlck1vZGVsTGlzdGVuZXJzID0gKGF0dHJzLCBwcm9wcykgPT4ge1xuICBjb25zdCByZXMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gYXR0cnMpIHtcbiAgICBpZiAoIWlzTW9kZWxMaXN0ZW5lcihrZXkpIHx8ICEoa2V5LnNsaWNlKDkpIGluIHByb3BzKSkge1xuICAgICAgcmVzW2tleV0gPSBhdHRyc1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufTtcbmNvbnN0IGlzRWxlbWVudFJvb3QgPSAodm5vZGUpID0+IHtcbiAgcmV0dXJuIHZub2RlLnNoYXBlRmxhZyAmICg2IHwgMSkgfHwgdm5vZGUudHlwZSA9PT0gQ29tbWVudDtcbn07XG5mdW5jdGlvbiBzaG91bGRVcGRhdGVDb21wb25lbnQocHJldlZOb2RlLCBuZXh0Vk5vZGUsIG9wdGltaXplZCkge1xuICBjb25zdCB7IHByb3BzOiBwcmV2UHJvcHMsIGNoaWxkcmVuOiBwcmV2Q2hpbGRyZW4sIGNvbXBvbmVudCB9ID0gcHJldlZOb2RlO1xuICBjb25zdCB7IHByb3BzOiBuZXh0UHJvcHMsIGNoaWxkcmVuOiBuZXh0Q2hpbGRyZW4sIHBhdGNoRmxhZyB9ID0gbmV4dFZOb2RlO1xuICBjb25zdCBlbWl0cyA9IGNvbXBvbmVudC5lbWl0c09wdGlvbnM7XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIChwcmV2Q2hpbGRyZW4gfHwgbmV4dENoaWxkcmVuKSAmJiBpc0htclVwZGF0aW5nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKG5leHRWTm9kZS5kaXJzIHx8IG5leHRWTm9kZS50cmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKG9wdGltaXplZCAmJiBwYXRjaEZsYWcgPj0gMCkge1xuICAgIGlmIChwYXRjaEZsYWcgJiAxMDI0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHBhdGNoRmxhZyAmIDE2KSB7XG4gICAgICBpZiAoIXByZXZQcm9wcykge1xuICAgICAgICByZXR1cm4gISFuZXh0UHJvcHM7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzUHJvcHNDaGFuZ2VkKHByZXZQcm9wcywgbmV4dFByb3BzLCBlbWl0cyk7XG4gICAgfSBlbHNlIGlmIChwYXRjaEZsYWcgJiA4KSB7XG4gICAgICBjb25zdCBkeW5hbWljUHJvcHMgPSBuZXh0Vk5vZGUuZHluYW1pY1Byb3BzO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkeW5hbWljUHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZHluYW1pY1Byb3BzW2ldO1xuICAgICAgICBpZiAobmV4dFByb3BzW2tleV0gIT09IHByZXZQcm9wc1trZXldICYmICFpc0VtaXRMaXN0ZW5lcihlbWl0cywga2V5KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChwcmV2Q2hpbGRyZW4gfHwgbmV4dENoaWxkcmVuKSB7XG4gICAgICBpZiAoIW5leHRDaGlsZHJlbiB8fCAhbmV4dENoaWxkcmVuLiRzdGFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcmV2UHJvcHMgPT09IG5leHRQcm9wcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXByZXZQcm9wcykge1xuICAgICAgcmV0dXJuICEhbmV4dFByb3BzO1xuICAgIH1cbiAgICBpZiAoIW5leHRQcm9wcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNQcm9wc0NoYW5nZWQocHJldlByb3BzLCBuZXh0UHJvcHMsIGVtaXRzKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBoYXNQcm9wc0NoYW5nZWQocHJldlByb3BzLCBuZXh0UHJvcHMsIGVtaXRzT3B0aW9ucykge1xuICBjb25zdCBuZXh0S2V5cyA9IE9iamVjdC5rZXlzKG5leHRQcm9wcyk7XG4gIGlmIChuZXh0S2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKHByZXZQcm9wcykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXh0S2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IG5leHRLZXlzW2ldO1xuICAgIGlmIChuZXh0UHJvcHNba2V5XSAhPT0gcHJldlByb3BzW2tleV0gJiYgIWlzRW1pdExpc3RlbmVyKGVtaXRzT3B0aW9ucywga2V5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUhPQ0hvc3RFbCh7IHZub2RlLCBwYXJlbnQgfSwgZWwpIHtcbiAgd2hpbGUgKHBhcmVudCkge1xuICAgIGNvbnN0IHJvb3QgPSBwYXJlbnQuc3ViVHJlZTtcbiAgICBpZiAocm9vdC5zdXNwZW5zZSAmJiByb290LnN1c3BlbnNlLmFjdGl2ZUJyYW5jaCA9PT0gdm5vZGUpIHtcbiAgICAgIHJvb3QuZWwgPSB2bm9kZS5lbDtcbiAgICB9XG4gICAgaWYgKHJvb3QgPT09IHZub2RlKSB7XG4gICAgICAodm5vZGUgPSBwYXJlbnQudm5vZGUpLmVsID0gZWw7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbmNvbnN0IGlzU3VzcGVuc2UgPSAodHlwZSkgPT4gdHlwZS5fX2lzU3VzcGVuc2U7XG5mdW5jdGlvbiBxdWV1ZUVmZmVjdFdpdGhTdXNwZW5zZShmbiwgc3VzcGVuc2UpIHtcbiAgaWYgKHN1c3BlbnNlICYmIHN1c3BlbnNlLnBlbmRpbmdCcmFuY2gpIHtcbiAgICBpZiAoaXNBcnJheShmbikpIHtcbiAgICAgIHN1c3BlbnNlLmVmZmVjdHMucHVzaCguLi5mbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1c3BlbnNlLmVmZmVjdHMucHVzaChmbik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHF1ZXVlUG9zdEZsdXNoQ2IoZm4pO1xuICB9XG59XG5jb25zdCBGcmFnbWVudCA9IFN5bWJvbC5mb3IoXCJ2LWZndFwiKTtcbmNvbnN0IFRleHQgPSBTeW1ib2wuZm9yKFwidi10eHRcIik7XG5jb25zdCBDb21tZW50ID0gU3ltYm9sLmZvcihcInYtY210XCIpO1xuY29uc3QgU3RhdGljID0gU3ltYm9sLmZvcihcInYtc3RjXCIpO1xuY29uc3QgYmxvY2tTdGFjayA9IFtdO1xubGV0IGN1cnJlbnRCbG9jayA9IG51bGw7XG5mdW5jdGlvbiBvcGVuQmxvY2soZGlzYWJsZVRyYWNraW5nID0gZmFsc2UpIHtcbiAgYmxvY2tTdGFjay5wdXNoKGN1cnJlbnRCbG9jayA9IGRpc2FibGVUcmFja2luZyA/IG51bGwgOiBbXSk7XG59XG5mdW5jdGlvbiBjbG9zZUJsb2NrKCkge1xuICBibG9ja1N0YWNrLnBvcCgpO1xuICBjdXJyZW50QmxvY2sgPSBibG9ja1N0YWNrW2Jsb2NrU3RhY2subGVuZ3RoIC0gMV0gfHwgbnVsbDtcbn1cbmxldCBpc0Jsb2NrVHJlZUVuYWJsZWQgPSAxO1xuZnVuY3Rpb24gc2V0QmxvY2tUcmFja2luZyh2YWx1ZSwgaW5WT25jZSA9IGZhbHNlKSB7XG4gIGlzQmxvY2tUcmVlRW5hYmxlZCArPSB2YWx1ZTtcbiAgaWYgKHZhbHVlIDwgMCAmJiBjdXJyZW50QmxvY2sgJiYgaW5WT25jZSkge1xuICAgIGN1cnJlbnRCbG9jay5oYXNPbmNlID0gdHJ1ZTtcbiAgfVxufVxuZnVuY3Rpb24gc2V0dXBCbG9jayh2bm9kZSkge1xuICB2bm9kZS5keW5hbWljQ2hpbGRyZW4gPSBpc0Jsb2NrVHJlZUVuYWJsZWQgPiAwID8gY3VycmVudEJsb2NrIHx8IEVNUFRZX0FSUiA6IG51bGw7XG4gIGNsb3NlQmxvY2soKTtcbiAgaWYgKGlzQmxvY2tUcmVlRW5hYmxlZCA+IDAgJiYgY3VycmVudEJsb2NrKSB7XG4gICAgY3VycmVudEJsb2NrLnB1c2godm5vZGUpO1xuICB9XG4gIHJldHVybiB2bm9kZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRCbG9jayh0eXBlLCBwcm9wcywgY2hpbGRyZW4sIHBhdGNoRmxhZywgZHluYW1pY1Byb3BzLCBzaGFwZUZsYWcpIHtcbiAgcmV0dXJuIHNldHVwQmxvY2soXG4gICAgY3JlYXRlQmFzZVZOb2RlKFxuICAgICAgdHlwZSxcbiAgICAgIHByb3BzLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBwYXRjaEZsYWcsXG4gICAgICBkeW5hbWljUHJvcHMsXG4gICAgICBzaGFwZUZsYWcsXG4gICAgICB0cnVlXG4gICAgKVxuICApO1xufVxuZnVuY3Rpb24gY3JlYXRlQmxvY2sodHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBwYXRjaEZsYWcsIGR5bmFtaWNQcm9wcykge1xuICByZXR1cm4gc2V0dXBCbG9jayhcbiAgICBjcmVhdGVWTm9kZShcbiAgICAgIHR5cGUsXG4gICAgICBwcm9wcyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgcGF0Y2hGbGFnLFxuICAgICAgZHluYW1pY1Byb3BzLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgKTtcbn1cbmZ1bmN0aW9uIGlzVk5vZGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gdmFsdWUuX192X2lzVk5vZGUgPT09IHRydWUgOiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzU2FtZVZOb2RlVHlwZShuMSwgbjIpIHtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgbjIuc2hhcGVGbGFnICYgNiAmJiBuMS5jb21wb25lbnQpIHtcbiAgICBjb25zdCBkaXJ0eUluc3RhbmNlcyA9IGhtckRpcnR5Q29tcG9uZW50cy5nZXQobjIudHlwZSk7XG4gICAgaWYgKGRpcnR5SW5zdGFuY2VzICYmIGRpcnR5SW5zdGFuY2VzLmhhcyhuMS5jb21wb25lbnQpKSB7XG4gICAgICBuMS5zaGFwZUZsYWcgJj0gLTI1NztcbiAgICAgIG4yLnNoYXBlRmxhZyAmPSAtNTEzO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbjEudHlwZSA9PT0gbjIudHlwZSAmJiBuMS5rZXkgPT09IG4yLmtleTtcbn1cbmNvbnN0IGNyZWF0ZVZOb2RlV2l0aEFyZ3NUcmFuc2Zvcm0gPSAoLi4uYXJncykgPT4ge1xuICByZXR1cm4gX2NyZWF0ZVZOb2RlKFxuICAgIC4uLmFyZ3NcbiAgKTtcbn07XG5jb25zdCBub3JtYWxpemVLZXkgPSAoeyBrZXkgfSkgPT4ga2V5ICE9IG51bGwgPyBrZXkgOiBudWxsO1xuY29uc3Qgbm9ybWFsaXplUmVmID0gKHtcbiAgcmVmOiByZWYzLFxuICByZWZfa2V5LFxuICByZWZfZm9yXG59KSA9PiB7XG4gIGlmICh0eXBlb2YgcmVmMyA9PT0gXCJudW1iZXJcIikge1xuICAgIHJlZjMgPSBcIlwiICsgcmVmMztcbiAgfVxuICByZXR1cm4gcmVmMyAhPSBudWxsID8gaXNTdHJpbmcocmVmMykgfHwgaXNSZWYocmVmMykgfHwgaXNGdW5jdGlvbihyZWYzKSA/IHsgaTogY3VycmVudFJlbmRlcmluZ0luc3RhbmNlLCByOiByZWYzLCBrOiByZWZfa2V5LCBmOiAhIXJlZl9mb3IgfSA6IHJlZjMgOiBudWxsO1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUJhc2VWTm9kZSh0eXBlLCBwcm9wcyA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCwgcGF0Y2hGbGFnID0gMCwgZHluYW1pY1Byb3BzID0gbnVsbCwgc2hhcGVGbGFnID0gdHlwZSA9PT0gRnJhZ21lbnQgPyAwIDogMSwgaXNCbG9ja05vZGUgPSBmYWxzZSwgbmVlZEZ1bGxDaGlsZHJlbk5vcm1hbGl6YXRpb24gPSBmYWxzZSkge1xuICBjb25zdCB2bm9kZSA9IHtcbiAgICBfX3ZfaXNWTm9kZTogdHJ1ZSxcbiAgICBfX3Zfc2tpcDogdHJ1ZSxcbiAgICB0eXBlLFxuICAgIHByb3BzLFxuICAgIGtleTogcHJvcHMgJiYgbm9ybWFsaXplS2V5KHByb3BzKSxcbiAgICByZWY6IHByb3BzICYmIG5vcm1hbGl6ZVJlZihwcm9wcyksXG4gICAgc2NvcGVJZDogY3VycmVudFNjb3BlSWQsXG4gICAgc2xvdFNjb3BlSWRzOiBudWxsLFxuICAgIGNoaWxkcmVuLFxuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICBzdXNwZW5zZTogbnVsbCxcbiAgICBzc0NvbnRlbnQ6IG51bGwsXG4gICAgc3NGYWxsYmFjazogbnVsbCxcbiAgICBkaXJzOiBudWxsLFxuICAgIHRyYW5zaXRpb246IG51bGwsXG4gICAgZWw6IG51bGwsXG4gICAgYW5jaG9yOiBudWxsLFxuICAgIHRhcmdldDogbnVsbCxcbiAgICB0YXJnZXRTdGFydDogbnVsbCxcbiAgICB0YXJnZXRBbmNob3I6IG51bGwsXG4gICAgc3RhdGljQ291bnQ6IDAsXG4gICAgc2hhcGVGbGFnLFxuICAgIHBhdGNoRmxhZyxcbiAgICBkeW5hbWljUHJvcHMsXG4gICAgZHluYW1pY0NoaWxkcmVuOiBudWxsLFxuICAgIGFwcENvbnRleHQ6IG51bGwsXG4gICAgY3R4OiBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2VcbiAgfTtcbiAgaWYgKG5lZWRGdWxsQ2hpbGRyZW5Ob3JtYWxpemF0aW9uKSB7XG4gICAgbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUsIGNoaWxkcmVuKTtcbiAgICBpZiAoc2hhcGVGbGFnICYgMTI4KSB7XG4gICAgICB0eXBlLm5vcm1hbGl6ZSh2bm9kZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgdm5vZGUuc2hhcGVGbGFnIHw9IGlzU3RyaW5nKGNoaWxkcmVuKSA/IDggOiAxNjtcbiAgfVxuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB2bm9kZS5rZXkgIT09IHZub2RlLmtleSkge1xuICAgIHdhcm4kMShgVk5vZGUgY3JlYXRlZCB3aXRoIGludmFsaWQga2V5IChOYU4pLiBWTm9kZSB0eXBlOmAsIHZub2RlLnR5cGUpO1xuICB9XG4gIGlmIChpc0Jsb2NrVHJlZUVuYWJsZWQgPiAwICYmIC8vIGF2b2lkIGEgYmxvY2sgbm9kZSBmcm9tIHRyYWNraW5nIGl0c2VsZlxuICAhaXNCbG9ja05vZGUgJiYgLy8gaGFzIGN1cnJlbnQgcGFyZW50IGJsb2NrXG4gIGN1cnJlbnRCbG9jayAmJiAvLyBwcmVzZW5jZSBvZiBhIHBhdGNoIGZsYWcgaW5kaWNhdGVzIHRoaXMgbm9kZSBuZWVkcyBwYXRjaGluZyBvbiB1cGRhdGVzLlxuICAvLyBjb21wb25lbnQgbm9kZXMgYWxzbyBzaG91bGQgYWx3YXlzIGJlIHBhdGNoZWQsIGJlY2F1c2UgZXZlbiBpZiB0aGVcbiAgLy8gY29tcG9uZW50IGRvZXNuJ3QgbmVlZCB0byB1cGRhdGUsIGl0IG5lZWRzIHRvIHBlcnNpc3QgdGhlIGluc3RhbmNlIG9uIHRvXG4gIC8vIHRoZSBuZXh0IHZub2RlIHNvIHRoYXQgaXQgY2FuIGJlIHByb3Blcmx5IHVubW91bnRlZCBsYXRlci5cbiAgKHZub2RlLnBhdGNoRmxhZyA+IDAgfHwgc2hhcGVGbGFnICYgNikgJiYgLy8gdGhlIEVWRU5UUyBmbGFnIGlzIG9ubHkgZm9yIGh5ZHJhdGlvbiBhbmQgaWYgaXQgaXMgdGhlIG9ubHkgZmxhZywgdGhlXG4gIC8vIHZub2RlIHNob3VsZCBub3QgYmUgY29uc2lkZXJlZCBkeW5hbWljIGR1ZSB0byBoYW5kbGVyIGNhY2hpbmcuXG4gIHZub2RlLnBhdGNoRmxhZyAhPT0gMzIpIHtcbiAgICBjdXJyZW50QmxvY2sucHVzaCh2bm9kZSk7XG4gIH1cbiAgcmV0dXJuIHZub2RlO1xufVxuY29uc3QgY3JlYXRlVk5vZGUgPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gY3JlYXRlVk5vZGVXaXRoQXJnc1RyYW5zZm9ybSA6IF9jcmVhdGVWTm9kZTtcbmZ1bmN0aW9uIF9jcmVhdGVWTm9kZSh0eXBlLCBwcm9wcyA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCwgcGF0Y2hGbGFnID0gMCwgZHluYW1pY1Byb3BzID0gbnVsbCwgaXNCbG9ja05vZGUgPSBmYWxzZSkge1xuICBpZiAoIXR5cGUgfHwgdHlwZSA9PT0gTlVMTF9EWU5BTUlDX0NPTVBPTkVOVCkge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICF0eXBlKSB7XG4gICAgICB3YXJuJDEoYEludmFsaWQgdm5vZGUgdHlwZSB3aGVuIGNyZWF0aW5nIHZub2RlOiAke3R5cGV9LmApO1xuICAgIH1cbiAgICB0eXBlID0gQ29tbWVudDtcbiAgfVxuICBpZiAoaXNWTm9kZSh0eXBlKSkge1xuICAgIGNvbnN0IGNsb25lZCA9IGNsb25lVk5vZGUoXG4gICAgICB0eXBlLFxuICAgICAgcHJvcHMsXG4gICAgICB0cnVlXG4gICAgICAvKiBtZXJnZVJlZjogdHJ1ZSAqL1xuICAgICk7XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBub3JtYWxpemVDaGlsZHJlbihjbG9uZWQsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKGlzQmxvY2tUcmVlRW5hYmxlZCA+IDAgJiYgIWlzQmxvY2tOb2RlICYmIGN1cnJlbnRCbG9jaykge1xuICAgICAgaWYgKGNsb25lZC5zaGFwZUZsYWcgJiA2KSB7XG4gICAgICAgIGN1cnJlbnRCbG9ja1tjdXJyZW50QmxvY2suaW5kZXhPZih0eXBlKV0gPSBjbG9uZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50QmxvY2sucHVzaChjbG9uZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBjbG9uZWQucGF0Y2hGbGFnID0gLTI7XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxuICBpZiAoaXNDbGFzc0NvbXBvbmVudCh0eXBlKSkge1xuICAgIHR5cGUgPSB0eXBlLl9fdmNjT3B0cztcbiAgfVxuICBpZiAocHJvcHMpIHtcbiAgICBwcm9wcyA9IGd1YXJkUmVhY3RpdmVQcm9wcyhwcm9wcyk7XG4gICAgbGV0IHsgY2xhc3M6IGtsYXNzLCBzdHlsZSB9ID0gcHJvcHM7XG4gICAgaWYgKGtsYXNzICYmICFpc1N0cmluZyhrbGFzcykpIHtcbiAgICAgIHByb3BzLmNsYXNzID0gbm9ybWFsaXplQ2xhc3Moa2xhc3MpO1xuICAgIH1cbiAgICBpZiAoaXNPYmplY3Qoc3R5bGUpKSB7XG4gICAgICBpZiAoaXNQcm94eShzdHlsZSkgJiYgIWlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICAgIHN0eWxlID0gZXh0ZW5kKHt9LCBzdHlsZSk7XG4gICAgICB9XG4gICAgICBwcm9wcy5zdHlsZSA9IG5vcm1hbGl6ZVN0eWxlKHN0eWxlKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGVGbGFnID0gaXNTdHJpbmcodHlwZSkgPyAxIDogaXNTdXNwZW5zZSh0eXBlKSA/IDEyOCA6IGlzVGVsZXBvcnQodHlwZSkgPyA2NCA6IGlzT2JqZWN0KHR5cGUpID8gNCA6IGlzRnVuY3Rpb24odHlwZSkgPyAyIDogMDtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgc2hhcGVGbGFnICYgNCAmJiBpc1Byb3h5KHR5cGUpKSB7XG4gICAgdHlwZSA9IHRvUmF3KHR5cGUpO1xuICAgIHdhcm4kMShcbiAgICAgIGBWdWUgcmVjZWl2ZWQgYSBDb21wb25lbnQgdGhhdCB3YXMgbWFkZSBhIHJlYWN0aXZlIG9iamVjdC4gVGhpcyBjYW4gbGVhZCB0byB1bm5lY2Vzc2FyeSBwZXJmb3JtYW5jZSBvdmVyaGVhZCBhbmQgc2hvdWxkIGJlIGF2b2lkZWQgYnkgbWFya2luZyB0aGUgY29tcG9uZW50IHdpdGggXFxgbWFya1Jhd1xcYCBvciB1c2luZyBcXGBzaGFsbG93UmVmXFxgIGluc3RlYWQgb2YgXFxgcmVmXFxgLmAsXG4gICAgICBgXG5Db21wb25lbnQgdGhhdCB3YXMgbWFkZSByZWFjdGl2ZTogYCxcbiAgICAgIHR5cGVcbiAgICApO1xuICB9XG4gIHJldHVybiBjcmVhdGVCYXNlVk5vZGUoXG4gICAgdHlwZSxcbiAgICBwcm9wcyxcbiAgICBjaGlsZHJlbixcbiAgICBwYXRjaEZsYWcsXG4gICAgZHluYW1pY1Byb3BzLFxuICAgIHNoYXBlRmxhZyxcbiAgICBpc0Jsb2NrTm9kZSxcbiAgICB0cnVlXG4gICk7XG59XG5mdW5jdGlvbiBndWFyZFJlYWN0aXZlUHJvcHMocHJvcHMpIHtcbiAgaWYgKCFwcm9wcykgcmV0dXJuIG51bGw7XG4gIHJldHVybiBpc1Byb3h5KHByb3BzKSB8fCBpc0ludGVybmFsT2JqZWN0KHByb3BzKSA/IGV4dGVuZCh7fSwgcHJvcHMpIDogcHJvcHM7XG59XG5mdW5jdGlvbiBjbG9uZVZOb2RlKHZub2RlLCBleHRyYVByb3BzLCBtZXJnZVJlZiA9IGZhbHNlLCBjbG9uZVRyYW5zaXRpb24gPSBmYWxzZSkge1xuICBjb25zdCB7IHByb3BzLCByZWY6IHJlZjMsIHBhdGNoRmxhZywgY2hpbGRyZW4sIHRyYW5zaXRpb24gfSA9IHZub2RlO1xuICBjb25zdCBtZXJnZWRQcm9wcyA9IGV4dHJhUHJvcHMgPyBtZXJnZVByb3BzKHByb3BzIHx8IHt9LCBleHRyYVByb3BzKSA6IHByb3BzO1xuICBjb25zdCBjbG9uZWQgPSB7XG4gICAgX192X2lzVk5vZGU6IHRydWUsXG4gICAgX192X3NraXA6IHRydWUsXG4gICAgdHlwZTogdm5vZGUudHlwZSxcbiAgICBwcm9wczogbWVyZ2VkUHJvcHMsXG4gICAga2V5OiBtZXJnZWRQcm9wcyAmJiBub3JtYWxpemVLZXkobWVyZ2VkUHJvcHMpLFxuICAgIHJlZjogZXh0cmFQcm9wcyAmJiBleHRyYVByb3BzLnJlZiA/IChcbiAgICAgIC8vICMyMDc4IGluIHRoZSBjYXNlIG9mIDxjb21wb25lbnQgOmlzPVwidm5vZGVcIiByZWY9XCJleHRyYVwiLz5cbiAgICAgIC8vIGlmIHRoZSB2bm9kZSBpdHNlbGYgYWxyZWFkeSBoYXMgYSByZWYsIGNsb25lVk5vZGUgd2lsbCBuZWVkIHRvIG1lcmdlXG4gICAgICAvLyB0aGUgcmVmcyBzbyB0aGUgc2luZ2xlIHZub2RlIGNhbiBiZSBzZXQgb24gbXVsdGlwbGUgcmVmc1xuICAgICAgbWVyZ2VSZWYgJiYgcmVmMyA/IGlzQXJyYXkocmVmMykgPyByZWYzLmNvbmNhdChub3JtYWxpemVSZWYoZXh0cmFQcm9wcykpIDogW3JlZjMsIG5vcm1hbGl6ZVJlZihleHRyYVByb3BzKV0gOiBub3JtYWxpemVSZWYoZXh0cmFQcm9wcylcbiAgICApIDogcmVmMyxcbiAgICBzY29wZUlkOiB2bm9kZS5zY29wZUlkLFxuICAgIHNsb3RTY29wZUlkczogdm5vZGUuc2xvdFNjb3BlSWRzLFxuICAgIGNoaWxkcmVuOiAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmIHBhdGNoRmxhZyA9PT0gLTEgJiYgaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbi5tYXAoZGVlcENsb25lVk5vZGUpIDogY2hpbGRyZW4sXG4gICAgdGFyZ2V0OiB2bm9kZS50YXJnZXQsXG4gICAgdGFyZ2V0U3RhcnQ6IHZub2RlLnRhcmdldFN0YXJ0LFxuICAgIHRhcmdldEFuY2hvcjogdm5vZGUudGFyZ2V0QW5jaG9yLFxuICAgIHN0YXRpY0NvdW50OiB2bm9kZS5zdGF0aWNDb3VudCxcbiAgICBzaGFwZUZsYWc6IHZub2RlLnNoYXBlRmxhZyxcbiAgICAvLyBpZiB0aGUgdm5vZGUgaXMgY2xvbmVkIHdpdGggZXh0cmEgcHJvcHMsIHdlIGNhbiBubyBsb25nZXIgYXNzdW1lIGl0c1xuICAgIC8vIGV4aXN0aW5nIHBhdGNoIGZsYWcgdG8gYmUgcmVsaWFibGUgYW5kIG5lZWQgdG8gYWRkIHRoZSBGVUxMX1BST1BTIGZsYWcuXG4gICAgLy8gbm90ZTogcHJlc2VydmUgZmxhZyBmb3IgZnJhZ21lbnRzIHNpbmNlIHRoZXkgdXNlIHRoZSBmbGFnIGZvciBjaGlsZHJlblxuICAgIC8vIGZhc3QgcGF0aHMgb25seS5cbiAgICBwYXRjaEZsYWc6IGV4dHJhUHJvcHMgJiYgdm5vZGUudHlwZSAhPT0gRnJhZ21lbnQgPyBwYXRjaEZsYWcgPT09IC0xID8gMTYgOiBwYXRjaEZsYWcgfCAxNiA6IHBhdGNoRmxhZyxcbiAgICBkeW5hbWljUHJvcHM6IHZub2RlLmR5bmFtaWNQcm9wcyxcbiAgICBkeW5hbWljQ2hpbGRyZW46IHZub2RlLmR5bmFtaWNDaGlsZHJlbixcbiAgICBhcHBDb250ZXh0OiB2bm9kZS5hcHBDb250ZXh0LFxuICAgIGRpcnM6IHZub2RlLmRpcnMsXG4gICAgdHJhbnNpdGlvbixcbiAgICAvLyBUaGVzZSBzaG91bGQgdGVjaG5pY2FsbHkgb25seSBiZSBub24tbnVsbCBvbiBtb3VudGVkIFZOb2Rlcy4gSG93ZXZlcixcbiAgICAvLyB0aGV5ICpzaG91bGQqIGJlIGNvcGllZCBmb3Iga2VwdC1hbGl2ZSB2bm9kZXMuIFNvIHdlIGp1c3QgYWx3YXlzIGNvcHlcbiAgICAvLyB0aGVtIHNpbmNlIHRoZW0gYmVpbmcgbm9uLW51bGwgZHVyaW5nIGEgbW91bnQgZG9lc24ndCBhZmZlY3QgdGhlIGxvZ2ljIGFzXG4gICAgLy8gdGhleSB3aWxsIHNpbXBseSBiZSBvdmVyd3JpdHRlbi5cbiAgICBjb21wb25lbnQ6IHZub2RlLmNvbXBvbmVudCxcbiAgICBzdXNwZW5zZTogdm5vZGUuc3VzcGVuc2UsXG4gICAgc3NDb250ZW50OiB2bm9kZS5zc0NvbnRlbnQgJiYgY2xvbmVWTm9kZSh2bm9kZS5zc0NvbnRlbnQpLFxuICAgIHNzRmFsbGJhY2s6IHZub2RlLnNzRmFsbGJhY2sgJiYgY2xvbmVWTm9kZSh2bm9kZS5zc0ZhbGxiYWNrKSxcbiAgICBwbGFjZWhvbGRlcjogdm5vZGUucGxhY2Vob2xkZXIsXG4gICAgZWw6IHZub2RlLmVsLFxuICAgIGFuY2hvcjogdm5vZGUuYW5jaG9yLFxuICAgIGN0eDogdm5vZGUuY3R4LFxuICAgIGNlOiB2bm9kZS5jZVxuICB9O1xuICBpZiAodHJhbnNpdGlvbiAmJiBjbG9uZVRyYW5zaXRpb24pIHtcbiAgICBzZXRUcmFuc2l0aW9uSG9va3MoXG4gICAgICBjbG9uZWQsXG4gICAgICB0cmFuc2l0aW9uLmNsb25lKGNsb25lZClcbiAgICApO1xuICB9XG4gIHJldHVybiBjbG9uZWQ7XG59XG5mdW5jdGlvbiBkZWVwQ2xvbmVWTm9kZSh2bm9kZSkge1xuICBjb25zdCBjbG9uZWQgPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgaWYgKGlzQXJyYXkodm5vZGUuY2hpbGRyZW4pKSB7XG4gICAgY2xvbmVkLmNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW4ubWFwKGRlZXBDbG9uZVZOb2RlKTtcbiAgfVxuICByZXR1cm4gY2xvbmVkO1xufVxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlKHRleHQgPSBcIiBcIiwgZmxhZyA9IDApIHtcbiAgcmV0dXJuIGNyZWF0ZVZOb2RlKFRleHQsIG51bGwsIHRleHQsIGZsYWcpO1xufVxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudFZOb2RlKHRleHQgPSBcIlwiLCBhc0Jsb2NrID0gZmFsc2UpIHtcbiAgcmV0dXJuIGFzQmxvY2sgPyAob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKENvbW1lbnQsIG51bGwsIHRleHQpKSA6IGNyZWF0ZVZOb2RlKENvbW1lbnQsIG51bGwsIHRleHQpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplVk5vZGUoY2hpbGQpIHtcbiAgaWYgKGNoaWxkID09IG51bGwgfHwgdHlwZW9mIGNoaWxkID09PSBcImJvb2xlYW5cIikge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZShDb21tZW50KTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KGNoaWxkKSkge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZShcbiAgICAgIEZyYWdtZW50LFxuICAgICAgbnVsbCxcbiAgICAgIC8vICMzNjY2LCBhdm9pZCByZWZlcmVuY2UgcG9sbHV0aW9uIHdoZW4gcmV1c2luZyB2bm9kZVxuICAgICAgY2hpbGQuc2xpY2UoKVxuICAgICk7XG4gIH0gZWxzZSBpZiAoaXNWTm9kZShjaGlsZCkpIHtcbiAgICByZXR1cm4gY2xvbmVJZk1vdW50ZWQoY2hpbGQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZShUZXh0LCBudWxsLCBTdHJpbmcoY2hpbGQpKTtcbiAgfVxufVxuZnVuY3Rpb24gY2xvbmVJZk1vdW50ZWQoY2hpbGQpIHtcbiAgcmV0dXJuIGNoaWxkLmVsID09PSBudWxsICYmIGNoaWxkLnBhdGNoRmxhZyAhPT0gLTEgfHwgY2hpbGQubWVtbyA/IGNoaWxkIDogY2xvbmVWTm9kZShjaGlsZCk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbih2bm9kZSwgY2hpbGRyZW4pIHtcbiAgbGV0IHR5cGUgPSAwO1xuICBjb25zdCB7IHNoYXBlRmxhZyB9ID0gdm5vZGU7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgdHlwZSA9IDE2O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJvYmplY3RcIikge1xuICAgIGlmIChzaGFwZUZsYWcgJiAoMSB8IDY0KSkge1xuICAgICAgY29uc3Qgc2xvdCA9IGNoaWxkcmVuLmRlZmF1bHQ7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBzbG90Ll9jICYmIChzbG90Ll9kID0gZmFsc2UpO1xuICAgICAgICBub3JtYWxpemVDaGlsZHJlbih2bm9kZSwgc2xvdCgpKTtcbiAgICAgICAgc2xvdC5fYyAmJiAoc2xvdC5fZCA9IHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gMzI7XG4gICAgICBjb25zdCBzbG90RmxhZyA9IGNoaWxkcmVuLl87XG4gICAgICBpZiAoIXNsb3RGbGFnICYmICFpc0ludGVybmFsT2JqZWN0KGNoaWxkcmVuKSkge1xuICAgICAgICBjaGlsZHJlbi5fY3R4ID0gY3VycmVudFJlbmRlcmluZ0luc3RhbmNlO1xuICAgICAgfSBlbHNlIGlmIChzbG90RmxhZyA9PT0gMyAmJiBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZS5zbG90cy5fID09PSAxKSB7XG4gICAgICAgICAgY2hpbGRyZW4uXyA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hpbGRyZW4uXyA9IDI7XG4gICAgICAgICAgdm5vZGUucGF0Y2hGbGFnIHw9IDEwMjQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihjaGlsZHJlbikpIHtcbiAgICBjaGlsZHJlbiA9IHsgZGVmYXVsdDogY2hpbGRyZW4sIF9jdHg6IGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSB9O1xuICAgIHR5cGUgPSAzMjtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZHJlbiA9IFN0cmluZyhjaGlsZHJlbik7XG4gICAgaWYgKHNoYXBlRmxhZyAmIDY0KSB7XG4gICAgICB0eXBlID0gMTY7XG4gICAgICBjaGlsZHJlbiA9IFtjcmVhdGVUZXh0Vk5vZGUoY2hpbGRyZW4pXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IDg7XG4gICAgfVxuICB9XG4gIHZub2RlLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHZub2RlLnNoYXBlRmxhZyB8PSB0eXBlO1xufVxuZnVuY3Rpb24gbWVyZ2VQcm9wcyguLi5hcmdzKSB7XG4gIGNvbnN0IHJldCA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b01lcmdlID0gYXJnc1tpXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0b01lcmdlKSB7XG4gICAgICBpZiAoa2V5ID09PSBcImNsYXNzXCIpIHtcbiAgICAgICAgaWYgKHJldC5jbGFzcyAhPT0gdG9NZXJnZS5jbGFzcykge1xuICAgICAgICAgIHJldC5jbGFzcyA9IG5vcm1hbGl6ZUNsYXNzKFtyZXQuY2xhc3MsIHRvTWVyZ2UuY2xhc3NdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwic3R5bGVcIikge1xuICAgICAgICByZXQuc3R5bGUgPSBub3JtYWxpemVTdHlsZShbcmV0LnN0eWxlLCB0b01lcmdlLnN0eWxlXSk7XG4gICAgICB9IGVsc2UgaWYgKGlzT24oa2V5KSkge1xuICAgICAgICBjb25zdCBleGlzdGluZyA9IHJldFtrZXldO1xuICAgICAgICBjb25zdCBpbmNvbWluZyA9IHRvTWVyZ2Vba2V5XTtcbiAgICAgICAgaWYgKGluY29taW5nICYmIGV4aXN0aW5nICE9PSBpbmNvbWluZyAmJiAhKGlzQXJyYXkoZXhpc3RpbmcpICYmIGV4aXN0aW5nLmluY2x1ZGVzKGluY29taW5nKSkpIHtcbiAgICAgICAgICByZXRba2V5XSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBpbmNvbWluZykgOiBpbmNvbWluZztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgIT09IFwiXCIpIHtcbiAgICAgICAgcmV0W2tleV0gPSB0b01lcmdlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5mdW5jdGlvbiBpbnZva2VWTm9kZUhvb2soaG9vaywgaW5zdGFuY2UsIHZub2RlLCBwcmV2Vk5vZGUgPSBudWxsKSB7XG4gIGNhbGxXaXRoQXN5bmNFcnJvckhhbmRsaW5nKGhvb2ssIGluc3RhbmNlLCA3LCBbXG4gICAgdm5vZGUsXG4gICAgcHJldlZOb2RlXG4gIF0pO1xufVxuY29uc3QgZW1wdHlBcHBDb250ZXh0ID0gY3JlYXRlQXBwQ29udGV4dCgpO1xubGV0IHVpZCA9IDA7XG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnRJbnN0YW5jZSh2bm9kZSwgcGFyZW50LCBzdXNwZW5zZSkge1xuICBjb25zdCB0eXBlID0gdm5vZGUudHlwZTtcbiAgY29uc3QgYXBwQ29udGV4dCA9IChwYXJlbnQgPyBwYXJlbnQuYXBwQ29udGV4dCA6IHZub2RlLmFwcENvbnRleHQpIHx8IGVtcHR5QXBwQ29udGV4dDtcbiAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgdWlkOiB1aWQrKyxcbiAgICB2bm9kZSxcbiAgICB0eXBlLFxuICAgIHBhcmVudCxcbiAgICBhcHBDb250ZXh0LFxuICAgIHJvb3Q6IG51bGwsXG4gICAgLy8gdG8gYmUgaW1tZWRpYXRlbHkgc2V0XG4gICAgbmV4dDogbnVsbCxcbiAgICBzdWJUcmVlOiBudWxsLFxuICAgIC8vIHdpbGwgYmUgc2V0IHN5bmNocm9ub3VzbHkgcmlnaHQgYWZ0ZXIgY3JlYXRpb25cbiAgICBlZmZlY3Q6IG51bGwsXG4gICAgdXBkYXRlOiBudWxsLFxuICAgIC8vIHdpbGwgYmUgc2V0IHN5bmNocm9ub3VzbHkgcmlnaHQgYWZ0ZXIgY3JlYXRpb25cbiAgICBqb2I6IG51bGwsXG4gICAgc2NvcGU6IG5ldyBFZmZlY3RTY29wZShcbiAgICAgIHRydWVcbiAgICAgIC8qIGRldGFjaGVkICovXG4gICAgKSxcbiAgICByZW5kZXI6IG51bGwsXG4gICAgcHJveHk6IG51bGwsXG4gICAgZXhwb3NlZDogbnVsbCxcbiAgICBleHBvc2VQcm94eTogbnVsbCxcbiAgICB3aXRoUHJveHk6IG51bGwsXG4gICAgcHJvdmlkZXM6IHBhcmVudCA/IHBhcmVudC5wcm92aWRlcyA6IE9iamVjdC5jcmVhdGUoYXBwQ29udGV4dC5wcm92aWRlcyksXG4gICAgaWRzOiBwYXJlbnQgPyBwYXJlbnQuaWRzIDogW1wiXCIsIDAsIDBdLFxuICAgIGFjY2Vzc0NhY2hlOiBudWxsLFxuICAgIHJlbmRlckNhY2hlOiBbXSxcbiAgICAvLyBsb2NhbCByZXNvbHZlZCBhc3NldHNcbiAgICBjb21wb25lbnRzOiBudWxsLFxuICAgIGRpcmVjdGl2ZXM6IG51bGwsXG4gICAgLy8gcmVzb2x2ZWQgcHJvcHMgYW5kIGVtaXRzIG9wdGlvbnNcbiAgICBwcm9wc09wdGlvbnM6IG5vcm1hbGl6ZVByb3BzT3B0aW9ucyh0eXBlLCBhcHBDb250ZXh0KSxcbiAgICBlbWl0c09wdGlvbnM6IG5vcm1hbGl6ZUVtaXRzT3B0aW9ucyh0eXBlLCBhcHBDb250ZXh0KSxcbiAgICAvLyBlbWl0XG4gICAgZW1pdDogbnVsbCxcbiAgICAvLyB0byBiZSBzZXQgaW1tZWRpYXRlbHlcbiAgICBlbWl0dGVkOiBudWxsLFxuICAgIC8vIHByb3BzIGRlZmF1bHQgdmFsdWVcbiAgICBwcm9wc0RlZmF1bHRzOiBFTVBUWV9PQkosXG4gICAgLy8gaW5oZXJpdEF0dHJzXG4gICAgaW5oZXJpdEF0dHJzOiB0eXBlLmluaGVyaXRBdHRycyxcbiAgICAvLyBzdGF0ZVxuICAgIGN0eDogRU1QVFlfT0JKLFxuICAgIGRhdGE6IEVNUFRZX09CSixcbiAgICBwcm9wczogRU1QVFlfT0JKLFxuICAgIGF0dHJzOiBFTVBUWV9PQkosXG4gICAgc2xvdHM6IEVNUFRZX09CSixcbiAgICByZWZzOiBFTVBUWV9PQkosXG4gICAgc2V0dXBTdGF0ZTogRU1QVFlfT0JKLFxuICAgIHNldHVwQ29udGV4dDogbnVsbCxcbiAgICAvLyBzdXNwZW5zZSByZWxhdGVkXG4gICAgc3VzcGVuc2UsXG4gICAgc3VzcGVuc2VJZDogc3VzcGVuc2UgPyBzdXNwZW5zZS5wZW5kaW5nSWQgOiAwLFxuICAgIGFzeW5jRGVwOiBudWxsLFxuICAgIGFzeW5jUmVzb2x2ZWQ6IGZhbHNlLFxuICAgIC8vIGxpZmVjeWNsZSBob29rc1xuICAgIC8vIG5vdCB1c2luZyBlbnVtcyBoZXJlIGJlY2F1c2UgaXQgcmVzdWx0cyBpbiBjb21wdXRlZCBwcm9wZXJ0aWVzXG4gICAgaXNNb3VudGVkOiBmYWxzZSxcbiAgICBpc1VubW91bnRlZDogZmFsc2UsXG4gICAgaXNEZWFjdGl2YXRlZDogZmFsc2UsXG4gICAgYmM6IG51bGwsXG4gICAgYzogbnVsbCxcbiAgICBibTogbnVsbCxcbiAgICBtOiBudWxsLFxuICAgIGJ1OiBudWxsLFxuICAgIHU6IG51bGwsXG4gICAgdW06IG51bGwsXG4gICAgYnVtOiBudWxsLFxuICAgIGRhOiBudWxsLFxuICAgIGE6IG51bGwsXG4gICAgcnRnOiBudWxsLFxuICAgIHJ0YzogbnVsbCxcbiAgICBlYzogbnVsbCxcbiAgICBzcDogbnVsbFxuICB9O1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGluc3RhbmNlLmN0eCA9IGNyZWF0ZURldlJlbmRlckNvbnRleHQoaW5zdGFuY2UpO1xuICB9IGVsc2Uge1xuICAgIGluc3RhbmNlLmN0eCA9IHsgXzogaW5zdGFuY2UgfTtcbiAgfVxuICBpbnN0YW5jZS5yb290ID0gcGFyZW50ID8gcGFyZW50LnJvb3QgOiBpbnN0YW5jZTtcbiAgaW5zdGFuY2UuZW1pdCA9IGVtaXQuYmluZChudWxsLCBpbnN0YW5jZSk7XG4gIGlmICh2bm9kZS5jZSkge1xuICAgIHZub2RlLmNlKGluc3RhbmNlKTtcbiAgfVxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5sZXQgY3VycmVudEluc3RhbmNlID0gbnVsbDtcbmNvbnN0IGdldEN1cnJlbnRJbnN0YW5jZSA9ICgpID0+IGN1cnJlbnRJbnN0YW5jZSB8fCBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2U7XG5sZXQgaW50ZXJuYWxTZXRDdXJyZW50SW5zdGFuY2U7XG5sZXQgc2V0SW5TU1JTZXR1cFN0YXRlO1xue1xuICBjb25zdCBnID0gZ2V0R2xvYmFsVGhpcygpO1xuICBjb25zdCByZWdpc3Rlckdsb2JhbFNldHRlciA9IChrZXksIHNldHRlcikgPT4ge1xuICAgIGxldCBzZXR0ZXJzO1xuICAgIGlmICghKHNldHRlcnMgPSBnW2tleV0pKSBzZXR0ZXJzID0gZ1trZXldID0gW107XG4gICAgc2V0dGVycy5wdXNoKHNldHRlcik7XG4gICAgcmV0dXJuICh2KSA9PiB7XG4gICAgICBpZiAoc2V0dGVycy5sZW5ndGggPiAxKSBzZXR0ZXJzLmZvckVhY2goKHNldCkgPT4gc2V0KHYpKTtcbiAgICAgIGVsc2Ugc2V0dGVyc1swXSh2KTtcbiAgICB9O1xuICB9O1xuICBpbnRlcm5hbFNldEN1cnJlbnRJbnN0YW5jZSA9IHJlZ2lzdGVyR2xvYmFsU2V0dGVyKFxuICAgIGBfX1ZVRV9JTlNUQU5DRV9TRVRURVJTX19gLFxuICAgICh2KSA9PiBjdXJyZW50SW5zdGFuY2UgPSB2XG4gICk7XG4gIHNldEluU1NSU2V0dXBTdGF0ZSA9IHJlZ2lzdGVyR2xvYmFsU2V0dGVyKFxuICAgIGBfX1ZVRV9TU1JfU0VUVEVSU19fYCxcbiAgICAodikgPT4gaXNJblNTUkNvbXBvbmVudFNldHVwID0gdlxuICApO1xufVxuY29uc3Qgc2V0Q3VycmVudEluc3RhbmNlID0gKGluc3RhbmNlKSA9PiB7XG4gIGNvbnN0IHByZXYgPSBjdXJyZW50SW5zdGFuY2U7XG4gIGludGVybmFsU2V0Q3VycmVudEluc3RhbmNlKGluc3RhbmNlKTtcbiAgaW5zdGFuY2Uuc2NvcGUub24oKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpbnN0YW5jZS5zY29wZS5vZmYoKTtcbiAgICBpbnRlcm5hbFNldEN1cnJlbnRJbnN0YW5jZShwcmV2KTtcbiAgfTtcbn07XG5jb25zdCB1bnNldEN1cnJlbnRJbnN0YW5jZSA9ICgpID0+IHtcbiAgY3VycmVudEluc3RhbmNlICYmIGN1cnJlbnRJbnN0YW5jZS5zY29wZS5vZmYoKTtcbiAgaW50ZXJuYWxTZXRDdXJyZW50SW5zdGFuY2UobnVsbCk7XG59O1xuY29uc3QgaXNCdWlsdEluVGFnID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoXCJzbG90LGNvbXBvbmVudFwiKTtcbmZ1bmN0aW9uIHZhbGlkYXRlQ29tcG9uZW50TmFtZShuYW1lLCB7IGlzTmF0aXZlVGFnIH0pIHtcbiAgaWYgKGlzQnVpbHRJblRhZyhuYW1lKSB8fCBpc05hdGl2ZVRhZyhuYW1lKSkge1xuICAgIHdhcm4kMShcbiAgICAgIFwiRG8gbm90IHVzZSBidWlsdC1pbiBvciByZXNlcnZlZCBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCBpZDogXCIgKyBuYW1lXG4gICAgKTtcbiAgfVxufVxuZnVuY3Rpb24gaXNTdGF0ZWZ1bENvbXBvbmVudChpbnN0YW5jZSkge1xuICByZXR1cm4gaW5zdGFuY2Uudm5vZGUuc2hhcGVGbGFnICYgNDtcbn1cbmxldCBpc0luU1NSQ29tcG9uZW50U2V0dXAgPSBmYWxzZTtcbmZ1bmN0aW9uIHNldHVwQ29tcG9uZW50KGluc3RhbmNlLCBpc1NTUiA9IGZhbHNlLCBvcHRpbWl6ZWQgPSBmYWxzZSkge1xuICBpc1NTUiAmJiBzZXRJblNTUlNldHVwU3RhdGUoaXNTU1IpO1xuICBjb25zdCB7IHByb3BzLCBjaGlsZHJlbiB9ID0gaW5zdGFuY2Uudm5vZGU7XG4gIGNvbnN0IGlzU3RhdGVmdWwgPSBpc1N0YXRlZnVsQ29tcG9uZW50KGluc3RhbmNlKTtcbiAgaW5pdFByb3BzKGluc3RhbmNlLCBwcm9wcywgaXNTdGF0ZWZ1bCwgaXNTU1IpO1xuICBpbml0U2xvdHMoaW5zdGFuY2UsIGNoaWxkcmVuLCBvcHRpbWl6ZWQgfHwgaXNTU1IpO1xuICBjb25zdCBzZXR1cFJlc3VsdCA9IGlzU3RhdGVmdWwgPyBzZXR1cFN0YXRlZnVsQ29tcG9uZW50KGluc3RhbmNlLCBpc1NTUikgOiB2b2lkIDA7XG4gIGlzU1NSICYmIHNldEluU1NSU2V0dXBTdGF0ZShmYWxzZSk7XG4gIHJldHVybiBzZXR1cFJlc3VsdDtcbn1cbmZ1bmN0aW9uIHNldHVwU3RhdGVmdWxDb21wb25lbnQoaW5zdGFuY2UsIGlzU1NSKSB7XG4gIHZhciBfYTtcbiAgY29uc3QgQ29tcG9uZW50ID0gaW5zdGFuY2UudHlwZTtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICBpZiAoQ29tcG9uZW50Lm5hbWUpIHtcbiAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShDb21wb25lbnQubmFtZSwgaW5zdGFuY2UuYXBwQ29udGV4dC5jb25maWcpO1xuICAgIH1cbiAgICBpZiAoQ29tcG9uZW50LmNvbXBvbmVudHMpIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoQ29tcG9uZW50LmNvbXBvbmVudHMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUobmFtZXNbaV0sIGluc3RhbmNlLmFwcENvbnRleHQuY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKENvbXBvbmVudC5kaXJlY3RpdmVzKSB7XG4gICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKENvbXBvbmVudC5kaXJlY3RpdmVzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsaWRhdGVEaXJlY3RpdmVOYW1lKG5hbWVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKENvbXBvbmVudC5jb21waWxlck9wdGlvbnMgJiYgaXNSdW50aW1lT25seSgpKSB7XG4gICAgICB3YXJuJDEoXG4gICAgICAgIGBcImNvbXBpbGVyT3B0aW9uc1wiIGlzIG9ubHkgc3VwcG9ydGVkIHdoZW4gdXNpbmcgYSBidWlsZCBvZiBWdWUgdGhhdCBpbmNsdWRlcyB0aGUgcnVudGltZSBjb21waWxlci4gU2luY2UgeW91IGFyZSB1c2luZyBhIHJ1bnRpbWUtb25seSBidWlsZCwgdGhlIG9wdGlvbnMgc2hvdWxkIGJlIHBhc3NlZCB2aWEgeW91ciBidWlsZCB0b29sIGNvbmZpZyBpbnN0ZWFkLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGluc3RhbmNlLmFjY2Vzc0NhY2hlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGluc3RhbmNlLnByb3h5ID0gbmV3IFByb3h5KGluc3RhbmNlLmN0eCwgUHVibGljSW5zdGFuY2VQcm94eUhhbmRsZXJzKTtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICBleHBvc2VQcm9wc09uUmVuZGVyQ29udGV4dChpbnN0YW5jZSk7XG4gIH1cbiAgY29uc3QgeyBzZXR1cCB9ID0gQ29tcG9uZW50O1xuICBpZiAoc2V0dXApIHtcbiAgICBwYXVzZVRyYWNraW5nKCk7XG4gICAgY29uc3Qgc2V0dXBDb250ZXh0ID0gaW5zdGFuY2Uuc2V0dXBDb250ZXh0ID0gc2V0dXAubGVuZ3RoID4gMSA/IGNyZWF0ZVNldHVwQ29udGV4dChpbnN0YW5jZSkgOiBudWxsO1xuICAgIGNvbnN0IHJlc2V0ID0gc2V0Q3VycmVudEluc3RhbmNlKGluc3RhbmNlKTtcbiAgICBjb25zdCBzZXR1cFJlc3VsdCA9IGNhbGxXaXRoRXJyb3JIYW5kbGluZyhcbiAgICAgIHNldHVwLFxuICAgICAgaW5zdGFuY2UsXG4gICAgICAwLFxuICAgICAgW1xuICAgICAgICAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gc2hhbGxvd1JlYWRvbmx5KGluc3RhbmNlLnByb3BzKSA6IGluc3RhbmNlLnByb3BzLFxuICAgICAgICBzZXR1cENvbnRleHRcbiAgICAgIF1cbiAgICApO1xuICAgIGNvbnN0IGlzQXN5bmNTZXR1cCA9IGlzUHJvbWlzZShzZXR1cFJlc3VsdCk7XG4gICAgcmVzZXRUcmFja2luZygpO1xuICAgIHJlc2V0KCk7XG4gICAgaWYgKChpc0FzeW5jU2V0dXAgfHwgaW5zdGFuY2Uuc3ApICYmICFpc0FzeW5jV3JhcHBlcihpbnN0YW5jZSkpIHtcbiAgICAgIG1hcmtBc3luY0JvdW5kYXJ5KGluc3RhbmNlKTtcbiAgICB9XG4gICAgaWYgKGlzQXN5bmNTZXR1cCkge1xuICAgICAgc2V0dXBSZXN1bHQudGhlbih1bnNldEN1cnJlbnRJbnN0YW5jZSwgdW5zZXRDdXJyZW50SW5zdGFuY2UpO1xuICAgICAgaWYgKGlzU1NSKSB7XG4gICAgICAgIHJldHVybiBzZXR1cFJlc3VsdC50aGVuKChyZXNvbHZlZFJlc3VsdCkgPT4ge1xuICAgICAgICAgIGhhbmRsZVNldHVwUmVzdWx0KGluc3RhbmNlLCByZXNvbHZlZFJlc3VsdCwgaXNTU1IpO1xuICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGhhbmRsZUVycm9yKGUsIGluc3RhbmNlLCAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5hc3luY0RlcCA9IHNldHVwUmVzdWx0O1xuICAgICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiAhaW5zdGFuY2Uuc3VzcGVuc2UpIHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gKF9hID0gQ29tcG9uZW50Lm5hbWUpICE9IG51bGwgPyBfYSA6IFwiQW5vbnltb3VzXCI7XG4gICAgICAgICAgd2FybiQxKFxuICAgICAgICAgICAgYENvbXBvbmVudCA8JHtuYW1lfT46IHNldHVwIGZ1bmN0aW9uIHJldHVybmVkIGEgcHJvbWlzZSwgYnV0IG5vIDxTdXNwZW5zZT4gYm91bmRhcnkgd2FzIGZvdW5kIGluIHRoZSBwYXJlbnQgY29tcG9uZW50IHRyZWUuIEEgY29tcG9uZW50IHdpdGggYXN5bmMgc2V0dXAoKSBtdXN0IGJlIG5lc3RlZCBpbiBhIDxTdXNwZW5zZT4gaW4gb3JkZXIgdG8gYmUgcmVuZGVyZWQuYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlU2V0dXBSZXN1bHQoaW5zdGFuY2UsIHNldHVwUmVzdWx0LCBpc1NTUik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZpbmlzaENvbXBvbmVudFNldHVwKGluc3RhbmNlLCBpc1NTUik7XG4gIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZVNldHVwUmVzdWx0KGluc3RhbmNlLCBzZXR1cFJlc3VsdCwgaXNTU1IpIHtcbiAgaWYgKGlzRnVuY3Rpb24oc2V0dXBSZXN1bHQpKSB7XG4gICAgaWYgKGluc3RhbmNlLnR5cGUuX19zc3JJbmxpbmVSZW5kZXIpIHtcbiAgICAgIGluc3RhbmNlLnNzclJlbmRlciA9IHNldHVwUmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5yZW5kZXIgPSBzZXR1cFJlc3VsdDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3Qoc2V0dXBSZXN1bHQpKSB7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgaXNWTm9kZShzZXR1cFJlc3VsdCkpIHtcbiAgICAgIHdhcm4kMShcbiAgICAgICAgYHNldHVwKCkgc2hvdWxkIG5vdCByZXR1cm4gVk5vZGVzIGRpcmVjdGx5IC0gcmV0dXJuIGEgcmVuZGVyIGZ1bmN0aW9uIGluc3RlYWQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgZmFsc2UpIHtcbiAgICAgIGluc3RhbmNlLmRldnRvb2xzUmF3U2V0dXBTdGF0ZSA9IHNldHVwUmVzdWx0O1xuICAgIH1cbiAgICBpbnN0YW5jZS5zZXR1cFN0YXRlID0gcHJveHlSZWZzKHNldHVwUmVzdWx0KTtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgZXhwb3NlU2V0dXBTdGF0ZU9uUmVuZGVyQ29udGV4dChpbnN0YW5jZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgc2V0dXBSZXN1bHQgIT09IHZvaWQgMCkge1xuICAgIHdhcm4kMShcbiAgICAgIGBzZXR1cCgpIHNob3VsZCByZXR1cm4gYW4gb2JqZWN0LiBSZWNlaXZlZDogJHtzZXR1cFJlc3VsdCA9PT0gbnVsbCA/IFwibnVsbFwiIDogdHlwZW9mIHNldHVwUmVzdWx0fWBcbiAgICApO1xuICB9XG4gIGZpbmlzaENvbXBvbmVudFNldHVwKGluc3RhbmNlLCBpc1NTUik7XG59XG5jb25zdCBpc1J1bnRpbWVPbmx5ID0gKCkgPT4gdHJ1ZTtcbmZ1bmN0aW9uIGZpbmlzaENvbXBvbmVudFNldHVwKGluc3RhbmNlLCBpc1NTUiwgc2tpcE9wdGlvbnMpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gaW5zdGFuY2UudHlwZTtcbiAgaWYgKCFpbnN0YW5jZS5yZW5kZXIpIHtcbiAgICBpbnN0YW5jZS5yZW5kZXIgPSBDb21wb25lbnQucmVuZGVyIHx8IE5PT1A7XG4gIH1cbiAge1xuICAgIGNvbnN0IHJlc2V0ID0gc2V0Q3VycmVudEluc3RhbmNlKGluc3RhbmNlKTtcbiAgICBwYXVzZVRyYWNraW5nKCk7XG4gICAgdHJ5IHtcbiAgICAgIGFwcGx5T3B0aW9ucyhpbnN0YW5jZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHJlc2V0VHJhY2tpbmcoKTtcbiAgICAgIHJlc2V0KCk7XG4gICAgfVxuICB9XG4gIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFDb21wb25lbnQucmVuZGVyICYmIGluc3RhbmNlLnJlbmRlciA9PT0gTk9PUCAmJiAhaXNTU1IpIHtcbiAgICBpZiAoQ29tcG9uZW50LnRlbXBsYXRlKSB7XG4gICAgICB3YXJuJDEoXG4gICAgICAgIGBDb21wb25lbnQgcHJvdmlkZWQgdGVtcGxhdGUgb3B0aW9uIGJ1dCBydW50aW1lIGNvbXBpbGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBidWlsZCBvZiBWdWUuIENvbmZpZ3VyZSB5b3VyIGJ1bmRsZXIgdG8gYWxpYXMgXCJ2dWVcIiB0byBcInZ1ZS9kaXN0L3Z1ZS5lc20tYnVuZGxlci5qc1wiLmBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4kMShgQ29tcG9uZW50IGlzIG1pc3NpbmcgdGVtcGxhdGUgb3IgcmVuZGVyIGZ1bmN0aW9uOiBgLCBDb21wb25lbnQpO1xuICAgIH1cbiAgfVxufVxuY29uc3QgYXR0cnNQcm94eUhhbmRsZXJzID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IHtcbiAgZ2V0KHRhcmdldCwga2V5KSB7XG4gICAgbWFya0F0dHJzQWNjZXNzZWQoKTtcbiAgICB0cmFjayh0YXJnZXQsIFwiZ2V0XCIsIFwiXCIpO1xuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfSxcbiAgc2V0KCkge1xuICAgIHdhcm4kMShgc2V0dXBDb250ZXh0LmF0dHJzIGlzIHJlYWRvbmx5LmApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHkoKSB7XG4gICAgd2FybiQxKGBzZXR1cENvbnRleHQuYXR0cnMgaXMgcmVhZG9ubHkuYCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IDoge1xuICBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICB0cmFjayh0YXJnZXQsIFwiZ2V0XCIsIFwiXCIpO1xuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfVxufTtcbmZ1bmN0aW9uIGdldFNsb3RzUHJveHkoaW5zdGFuY2UpIHtcbiAgcmV0dXJuIG5ldyBQcm94eShpbnN0YW5jZS5zbG90cywge1xuICAgIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgdHJhY2soaW5zdGFuY2UsIFwiZ2V0XCIsIFwiJHNsb3RzXCIpO1xuICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVTZXR1cENvbnRleHQoaW5zdGFuY2UpIHtcbiAgY29uc3QgZXhwb3NlID0gKGV4cG9zZWQpID0+IHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgaWYgKGluc3RhbmNlLmV4cG9zZWQpIHtcbiAgICAgICAgd2FybiQxKGBleHBvc2UoKSBzaG91bGQgYmUgY2FsbGVkIG9ubHkgb25jZSBwZXIgc2V0dXAoKS5gKTtcbiAgICAgIH1cbiAgICAgIGlmIChleHBvc2VkICE9IG51bGwpIHtcbiAgICAgICAgbGV0IGV4cG9zZWRUeXBlID0gdHlwZW9mIGV4cG9zZWQ7XG4gICAgICAgIGlmIChleHBvc2VkVHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlmIChpc0FycmF5KGV4cG9zZWQpKSB7XG4gICAgICAgICAgICBleHBvc2VkVHlwZSA9IFwiYXJyYXlcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzUmVmKGV4cG9zZWQpKSB7XG4gICAgICAgICAgICBleHBvc2VkVHlwZSA9IFwicmVmXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChleHBvc2VkVHlwZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIHdhcm4kMShcbiAgICAgICAgICAgIGBleHBvc2UoKSBzaG91bGQgYmUgcGFzc2VkIGEgcGxhaW4gb2JqZWN0LCByZWNlaXZlZCAke2V4cG9zZWRUeXBlfS5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5leHBvc2VkID0gZXhwb3NlZCB8fCB7fTtcbiAgfTtcbiAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICBsZXQgYXR0cnNQcm94eTtcbiAgICBsZXQgc2xvdHNQcm94eTtcbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICBnZXQgYXR0cnMoKSB7XG4gICAgICAgIHJldHVybiBhdHRyc1Byb3h5IHx8IChhdHRyc1Byb3h5ID0gbmV3IFByb3h5KGluc3RhbmNlLmF0dHJzLCBhdHRyc1Byb3h5SGFuZGxlcnMpKTtcbiAgICAgIH0sXG4gICAgICBnZXQgc2xvdHMoKSB7XG4gICAgICAgIHJldHVybiBzbG90c1Byb3h5IHx8IChzbG90c1Byb3h5ID0gZ2V0U2xvdHNQcm94eShpbnN0YW5jZSkpO1xuICAgICAgfSxcbiAgICAgIGdldCBlbWl0KCkge1xuICAgICAgICByZXR1cm4gKGV2ZW50LCAuLi5hcmdzKSA9PiBpbnN0YW5jZS5lbWl0KGV2ZW50LCAuLi5hcmdzKTtcbiAgICAgIH0sXG4gICAgICBleHBvc2VcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXR0cnM6IG5ldyBQcm94eShpbnN0YW5jZS5hdHRycywgYXR0cnNQcm94eUhhbmRsZXJzKSxcbiAgICAgIHNsb3RzOiBpbnN0YW5jZS5zbG90cyxcbiAgICAgIGVtaXQ6IGluc3RhbmNlLmVtaXQsXG4gICAgICBleHBvc2VcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBnZXRDb21wb25lbnRQdWJsaWNJbnN0YW5jZShpbnN0YW5jZSkge1xuICBpZiAoaW5zdGFuY2UuZXhwb3NlZCkge1xuICAgIHJldHVybiBpbnN0YW5jZS5leHBvc2VQcm94eSB8fCAoaW5zdGFuY2UuZXhwb3NlUHJveHkgPSBuZXcgUHJveHkocHJveHlSZWZzKG1hcmtSYXcoaW5zdGFuY2UuZXhwb3NlZCkpLCB7XG4gICAgICBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5IGluIHB1YmxpY1Byb3BlcnRpZXNNYXApIHtcbiAgICAgICAgICByZXR1cm4gcHVibGljUHJvcGVydGllc01hcFtrZXldKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhcyh0YXJnZXQsIGtleSkge1xuICAgICAgICByZXR1cm4ga2V5IGluIHRhcmdldCB8fCBrZXkgaW4gcHVibGljUHJvcGVydGllc01hcDtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLnByb3h5O1xuICB9XG59XG5jb25zdCBjbGFzc2lmeVJFID0gLyg/Ol58Wy1fXSkoXFx3KS9nO1xuY29uc3QgY2xhc3NpZnkgPSAoc3RyKSA9PiBzdHIucmVwbGFjZShjbGFzc2lmeVJFLCAoYykgPT4gYy50b1VwcGVyQ2FzZSgpKS5yZXBsYWNlKC9bLV9dL2csIFwiXCIpO1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQsIGluY2x1ZGVJbmZlcnJlZCA9IHRydWUpIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oQ29tcG9uZW50KSA/IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSA6IENvbXBvbmVudC5uYW1lIHx8IGluY2x1ZGVJbmZlcnJlZCAmJiBDb21wb25lbnQuX19uYW1lO1xufVxuZnVuY3Rpb24gZm9ybWF0Q29tcG9uZW50TmFtZShpbnN0YW5jZSwgQ29tcG9uZW50LCBpc1Jvb3QgPSBmYWxzZSkge1xuICBsZXQgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KTtcbiAgaWYgKCFuYW1lICYmIENvbXBvbmVudC5fX2ZpbGUpIHtcbiAgICBjb25zdCBtYXRjaCA9IENvbXBvbmVudC5fX2ZpbGUubWF0Y2goLyhbXi9cXFxcXSspXFwuXFx3KyQvKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIG5hbWUgPSBtYXRjaFsxXTtcbiAgICB9XG4gIH1cbiAgaWYgKCFuYW1lICYmIGluc3RhbmNlICYmIGluc3RhbmNlLnBhcmVudCkge1xuICAgIGNvbnN0IGluZmVyRnJvbVJlZ2lzdHJ5ID0gKHJlZ2lzdHJ5KSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiByZWdpc3RyeSkge1xuICAgICAgICBpZiAocmVnaXN0cnlba2V5XSA9PT0gQ29tcG9uZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgbmFtZSA9IGluZmVyRnJvbVJlZ2lzdHJ5KFxuICAgICAgaW5zdGFuY2UuY29tcG9uZW50cyB8fCBpbnN0YW5jZS5wYXJlbnQudHlwZS5jb21wb25lbnRzXG4gICAgKSB8fCBpbmZlckZyb21SZWdpc3RyeShpbnN0YW5jZS5hcHBDb250ZXh0LmNvbXBvbmVudHMpO1xuICB9XG4gIHJldHVybiBuYW1lID8gY2xhc3NpZnkobmFtZSkgOiBpc1Jvb3QgPyBgQXBwYCA6IGBBbm9ueW1vdXNgO1xufVxuZnVuY3Rpb24gaXNDbGFzc0NvbXBvbmVudCh2YWx1ZSkge1xuICByZXR1cm4gaXNGdW5jdGlvbih2YWx1ZSkgJiYgXCJfX3ZjY09wdHNcIiBpbiB2YWx1ZTtcbn1cbmNvbnN0IGNvbXB1dGVkID0gKGdldHRlck9yT3B0aW9ucywgZGVidWdPcHRpb25zKSA9PiB7XG4gIGNvbnN0IGMgPSBjb21wdXRlZCQxKGdldHRlck9yT3B0aW9ucywgZGVidWdPcHRpb25zLCBpc0luU1NSQ29tcG9uZW50U2V0dXApO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGNvbnN0IGkgPSBnZXRDdXJyZW50SW5zdGFuY2UoKTtcbiAgICBpZiAoaSAmJiBpLmFwcENvbnRleHQuY29uZmlnLndhcm5SZWN1cnNpdmVDb21wdXRlZCkge1xuICAgICAgYy5fd2FyblJlY3Vyc2l2ZSA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBjO1xufTtcbmZ1bmN0aW9uIGluaXRDdXN0b21Gb3JtYXR0ZXIoKSB7XG4gIGlmICghISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB8fCB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHZ1ZVN0eWxlID0geyBzdHlsZTogXCJjb2xvcjojM2JhNzc2XCIgfTtcbiAgY29uc3QgbnVtYmVyU3R5bGUgPSB7IHN0eWxlOiBcImNvbG9yOiMxNjc3ZmZcIiB9O1xuICBjb25zdCBzdHJpbmdTdHlsZSA9IHsgc3R5bGU6IFwiY29sb3I6I2Y1MjIyZFwiIH07XG4gIGNvbnN0IGtleXdvcmRTdHlsZSA9IHsgc3R5bGU6IFwiY29sb3I6I2ViMmY5NlwiIH07XG4gIGNvbnN0IGZvcm1hdHRlciA9IHtcbiAgICBfX3Z1ZV9jdXN0b21fZm9ybWF0dGVyOiB0cnVlLFxuICAgIGhlYWRlcihvYmopIHtcbiAgICAgIGlmICghaXNPYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChvYmouX19pc1Z1ZSkge1xuICAgICAgICByZXR1cm4gW1wiZGl2XCIsIHZ1ZVN0eWxlLCBgVnVlSW5zdGFuY2VgXTtcbiAgICAgIH0gZWxzZSBpZiAoaXNSZWYob2JqKSkge1xuICAgICAgICBwYXVzZVRyYWNraW5nKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gb2JqLnZhbHVlO1xuICAgICAgICByZXNldFRyYWNraW5nKCk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBbXCJzcGFuXCIsIHZ1ZVN0eWxlLCBnZW5SZWZGbGFnKG9iaildLFxuICAgICAgICAgIFwiPFwiLFxuICAgICAgICAgIGZvcm1hdFZhbHVlKHZhbHVlKSxcbiAgICAgICAgICBgPmBcbiAgICAgICAgXTtcbiAgICAgIH0gZWxzZSBpZiAoaXNSZWFjdGl2ZShvYmopKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBbXCJzcGFuXCIsIHZ1ZVN0eWxlLCBpc1NoYWxsb3cob2JqKSA/IFwiU2hhbGxvd1JlYWN0aXZlXCIgOiBcIlJlYWN0aXZlXCJdLFxuICAgICAgICAgIFwiPFwiLFxuICAgICAgICAgIGZvcm1hdFZhbHVlKG9iaiksXG4gICAgICAgICAgYD4ke2lzUmVhZG9ubHkob2JqKSA/IGAgKHJlYWRvbmx5KWAgOiBgYH1gXG4gICAgICAgIF07XG4gICAgICB9IGVsc2UgaWYgKGlzUmVhZG9ubHkob2JqKSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge30sXG4gICAgICAgICAgW1wic3BhblwiLCB2dWVTdHlsZSwgaXNTaGFsbG93KG9iaikgPyBcIlNoYWxsb3dSZWFkb25seVwiIDogXCJSZWFkb25seVwiXSxcbiAgICAgICAgICBcIjxcIixcbiAgICAgICAgICBmb3JtYXRWYWx1ZShvYmopLFxuICAgICAgICAgIFwiPlwiXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIGhhc0JvZHkob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIG9iai5fX2lzVnVlO1xuICAgIH0sXG4gICAgYm9keShvYmopIHtcbiAgICAgIGlmIChvYmogJiYgb2JqLl9faXNWdWUpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIC4uLmZvcm1hdEluc3RhbmNlKG9iai4kKVxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gZm9ybWF0SW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgICBjb25zdCBibG9ja3MgPSBbXTtcbiAgICBpZiAoaW5zdGFuY2UudHlwZS5wcm9wcyAmJiBpbnN0YW5jZS5wcm9wcykge1xuICAgICAgYmxvY2tzLnB1c2goY3JlYXRlSW5zdGFuY2VCbG9jayhcInByb3BzXCIsIHRvUmF3KGluc3RhbmNlLnByb3BzKSkpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2Uuc2V0dXBTdGF0ZSAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICBibG9ja3MucHVzaChjcmVhdGVJbnN0YW5jZUJsb2NrKFwic2V0dXBcIiwgaW5zdGFuY2Uuc2V0dXBTdGF0ZSkpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UuZGF0YSAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICBibG9ja3MucHVzaChjcmVhdGVJbnN0YW5jZUJsb2NrKFwiZGF0YVwiLCB0b1JhdyhpbnN0YW5jZS5kYXRhKSkpO1xuICAgIH1cbiAgICBjb25zdCBjb21wdXRlZDIgPSBleHRyYWN0S2V5cyhpbnN0YW5jZSwgXCJjb21wdXRlZFwiKTtcbiAgICBpZiAoY29tcHV0ZWQyKSB7XG4gICAgICBibG9ja3MucHVzaChjcmVhdGVJbnN0YW5jZUJsb2NrKFwiY29tcHV0ZWRcIiwgY29tcHV0ZWQyKSk7XG4gICAgfVxuICAgIGNvbnN0IGluamVjdGVkID0gZXh0cmFjdEtleXMoaW5zdGFuY2UsIFwiaW5qZWN0XCIpO1xuICAgIGlmIChpbmplY3RlZCkge1xuICAgICAgYmxvY2tzLnB1c2goY3JlYXRlSW5zdGFuY2VCbG9jayhcImluamVjdGVkXCIsIGluamVjdGVkKSk7XG4gICAgfVxuICAgIGJsb2Nrcy5wdXNoKFtcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7fSxcbiAgICAgIFtcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdHlsZToga2V5d29yZFN0eWxlLnN0eWxlICsgXCI7b3BhY2l0eTowLjY2XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCIkIChpbnRlcm5hbCk6IFwiXG4gICAgICBdLFxuICAgICAgW1wib2JqZWN0XCIsIHsgb2JqZWN0OiBpbnN0YW5jZSB9XVxuICAgIF0pO1xuICAgIHJldHVybiBibG9ja3M7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VCbG9jayh0eXBlLCB0YXJnZXQpIHtcbiAgICB0YXJnZXQgPSBleHRlbmQoe30sIHRhcmdldCk7XG4gICAgaWYgKCFPYmplY3Qua2V5cyh0YXJnZXQpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtcInNwYW5cIiwge31dO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3R5bGU6IFwibGluZS1oZWlnaHQ6MS4yNWVtO21hcmdpbi1ib3R0b206MC42ZW1cIiB9LFxuICAgICAgW1xuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3R5bGU6IFwiY29sb3I6IzQ3NjU4MlwiXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGVcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdHlsZTogXCJwYWRkaW5nLWxlZnQ6MS4yNWVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgLi4uT2JqZWN0LmtleXModGFyZ2V0KS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBbXCJzcGFuXCIsIGtleXdvcmRTdHlsZSwga2V5ICsgXCI6IFwiXSxcbiAgICAgICAgICAgIGZvcm1hdFZhbHVlKHRhcmdldFtrZXldLCBmYWxzZSlcbiAgICAgICAgICBdO1xuICAgICAgICB9KVxuICAgICAgXVxuICAgIF07XG4gIH1cbiAgZnVuY3Rpb24gZm9ybWF0VmFsdWUodiwgYXNSYXcgPSB0cnVlKSB7XG4gICAgaWYgKHR5cGVvZiB2ID09PSBcIm51bWJlclwiKSB7XG4gICAgICByZXR1cm4gW1wic3BhblwiLCBudW1iZXJTdHlsZSwgdl07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIFtcInNwYW5cIiwgc3RyaW5nU3R5bGUsIEpTT04uc3RyaW5naWZ5KHYpXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcmV0dXJuIFtcInNwYW5cIiwga2V5d29yZFN0eWxlLCB2XTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHYpKSB7XG4gICAgICByZXR1cm4gW1wib2JqZWN0XCIsIHsgb2JqZWN0OiBhc1JhdyA/IHRvUmF3KHYpIDogdiB9XTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtcInNwYW5cIiwgc3RyaW5nU3R5bGUsIFN0cmluZyh2KV07XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGV4dHJhY3RLZXlzKGluc3RhbmNlLCB0eXBlKSB7XG4gICAgY29uc3QgQ29tcCA9IGluc3RhbmNlLnR5cGU7XG4gICAgaWYgKGlzRnVuY3Rpb24oQ29tcCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZXh0cmFjdGVkID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gaW5zdGFuY2UuY3R4KSB7XG4gICAgICBpZiAoaXNLZXlPZlR5cGUoQ29tcCwga2V5LCB0eXBlKSkge1xuICAgICAgICBleHRyYWN0ZWRba2V5XSA9IGluc3RhbmNlLmN0eFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXh0cmFjdGVkO1xuICB9XG4gIGZ1bmN0aW9uIGlzS2V5T2ZUeXBlKENvbXAsIGtleSwgdHlwZSkge1xuICAgIGNvbnN0IG9wdHMgPSBDb21wW3R5cGVdO1xuICAgIGlmIChpc0FycmF5KG9wdHMpICYmIG9wdHMuaW5jbHVkZXMoa2V5KSB8fCBpc09iamVjdChvcHRzKSAmJiBrZXkgaW4gb3B0cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChDb21wLmV4dGVuZHMgJiYgaXNLZXlPZlR5cGUoQ29tcC5leHRlbmRzLCBrZXksIHR5cGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKENvbXAubWl4aW5zICYmIENvbXAubWl4aW5zLnNvbWUoKG0pID0+IGlzS2V5T2ZUeXBlKG0sIGtleSwgdHlwZSkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2VuUmVmRmxhZyh2KSB7XG4gICAgaWYgKGlzU2hhbGxvdyh2KSkge1xuICAgICAgcmV0dXJuIGBTaGFsbG93UmVmYDtcbiAgICB9XG4gICAgaWYgKHYuZWZmZWN0KSB7XG4gICAgICByZXR1cm4gYENvbXB1dGVkUmVmYDtcbiAgICB9XG4gICAgcmV0dXJuIGBSZWZgO1xuICB9XG4gIGlmICh3aW5kb3cuZGV2dG9vbHNGb3JtYXR0ZXJzKSB7XG4gICAgd2luZG93LmRldnRvb2xzRm9ybWF0dGVycy5wdXNoKGZvcm1hdHRlcik7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmRldnRvb2xzRm9ybWF0dGVycyA9IFtmb3JtYXR0ZXJdO1xuICB9XG59XG5jb25zdCB2ZXJzaW9uID0gXCIzLjUuMThcIjtcbmNvbnN0IHdhcm4gPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gd2FybiQxIDogTk9PUDtcbiEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgfHwgdHJ1ZSA/IGRldnRvb2xzJDEgOiB2b2lkIDA7XG4hIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IHRydWUgPyBzZXREZXZ0b29sc0hvb2skMSA6IE5PT1A7XG4vKipcbiogQHZ1ZS9ydW50aW1lLWRvbSB2My41LjE4XG4qIChjKSAyMDE4LXByZXNlbnQgWXV4aSAoRXZhbikgWW91IGFuZCBWdWUgY29udHJpYnV0b3JzXG4qIEBsaWNlbnNlIE1JVFxuKiovXG5sZXQgcG9saWN5ID0gdm9pZCAwO1xuY29uc3QgdHQgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy50cnVzdGVkVHlwZXM7XG5pZiAodHQpIHtcbiAgdHJ5IHtcbiAgICBwb2xpY3kgPSAvKiBAX19QVVJFX18gKi8gdHQuY3JlYXRlUG9saWN5KFwidnVlXCIsIHtcbiAgICAgIGNyZWF0ZUhUTUw6ICh2YWwpID0+IHZhbFxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB3YXJuKGBFcnJvciBjcmVhdGluZyB0cnVzdGVkIHR5cGVzIHBvbGljeTogJHtlfWApO1xuICB9XG59XG5jb25zdCB1bnNhZmVUb1RydXN0ZWRIVE1MID0gcG9saWN5ID8gKHZhbCkgPT4gcG9saWN5LmNyZWF0ZUhUTUwodmFsKSA6ICh2YWwpID0+IHZhbDtcbmNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuY29uc3QgbWF0aG1sTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtcbmNvbnN0IGRvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50IDogbnVsbDtcbmNvbnN0IHRlbXBsYXRlQ29udGFpbmVyID0gZG9jICYmIC8qIEBfX1BVUkVfXyAqLyBkb2MuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuY29uc3Qgbm9kZU9wcyA9IHtcbiAgaW5zZXJ0OiAoY2hpbGQsIHBhcmVudCwgYW5jaG9yKSA9PiB7XG4gICAgcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgYW5jaG9yIHx8IG51bGwpO1xuICB9LFxuICByZW1vdmU6IChjaGlsZCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGNoaWxkLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZUVsZW1lbnQ6ICh0YWcsIG5hbWVzcGFjZSwgaXMsIHByb3BzKSA9PiB7XG4gICAgY29uc3QgZWwgPSBuYW1lc3BhY2UgPT09IFwic3ZnXCIgPyBkb2MuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCB0YWcpIDogbmFtZXNwYWNlID09PSBcIm1hdGhtbFwiID8gZG9jLmNyZWF0ZUVsZW1lbnROUyhtYXRobWxOUywgdGFnKSA6IGlzID8gZG9jLmNyZWF0ZUVsZW1lbnQodGFnLCB7IGlzIH0pIDogZG9jLmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAodGFnID09PSBcInNlbGVjdFwiICYmIHByb3BzICYmIHByb3BzLm11bHRpcGxlICE9IG51bGwpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsIHByb3BzLm11bHRpcGxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xuICB9LFxuICBjcmVhdGVUZXh0OiAodGV4dCkgPT4gZG9jLmNyZWF0ZVRleHROb2RlKHRleHQpLFxuICBjcmVhdGVDb21tZW50OiAodGV4dCkgPT4gZG9jLmNyZWF0ZUNvbW1lbnQodGV4dCksXG4gIHNldFRleHQ6IChub2RlLCB0ZXh0KSA9PiB7XG4gICAgbm9kZS5ub2RlVmFsdWUgPSB0ZXh0O1xuICB9LFxuICBzZXRFbGVtZW50VGV4dDogKGVsLCB0ZXh0KSA9PiB7XG4gICAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB9LFxuICBwYXJlbnROb2RlOiAobm9kZSkgPT4gbm9kZS5wYXJlbnROb2RlLFxuICBuZXh0U2libGluZzogKG5vZGUpID0+IG5vZGUubmV4dFNpYmxpbmcsXG4gIHF1ZXJ5U2VsZWN0b3I6IChzZWxlY3RvcikgPT4gZG9jLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLFxuICBzZXRTY29wZUlkKGVsLCBpZCkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShpZCwgXCJcIik7XG4gIH0sXG4gIC8vIF9fVU5TQUZFX19cbiAgLy8gUmVhc29uOiBpbm5lckhUTUwuXG4gIC8vIFN0YXRpYyBjb250ZW50IGhlcmUgY2FuIG9ubHkgY29tZSBmcm9tIGNvbXBpbGVkIHRlbXBsYXRlcy5cbiAgLy8gQXMgbG9uZyBhcyB0aGUgdXNlciBvbmx5IHVzZXMgdHJ1c3RlZCB0ZW1wbGF0ZXMsIHRoaXMgaXMgc2FmZS5cbiAgaW5zZXJ0U3RhdGljQ29udGVudChjb250ZW50LCBwYXJlbnQsIGFuY2hvciwgbmFtZXNwYWNlLCBzdGFydCwgZW5kKSB7XG4gICAgY29uc3QgYmVmb3JlID0gYW5jaG9yID8gYW5jaG9yLnByZXZpb3VzU2libGluZyA6IHBhcmVudC5sYXN0Q2hpbGQ7XG4gICAgaWYgKHN0YXJ0ICYmIChzdGFydCA9PT0gZW5kIHx8IHN0YXJ0Lm5leHRTaWJsaW5nKSkge1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShzdGFydC5jbG9uZU5vZGUodHJ1ZSksIGFuY2hvcik7XG4gICAgICAgIGlmIChzdGFydCA9PT0gZW5kIHx8ICEoc3RhcnQgPSBzdGFydC5uZXh0U2libGluZykpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wbGF0ZUNvbnRhaW5lci5pbm5lckhUTUwgPSB1bnNhZmVUb1RydXN0ZWRIVE1MKFxuICAgICAgICBuYW1lc3BhY2UgPT09IFwic3ZnXCIgPyBgPHN2Zz4ke2NvbnRlbnR9PC9zdmc+YCA6IG5hbWVzcGFjZSA9PT0gXCJtYXRobWxcIiA/IGA8bWF0aD4ke2NvbnRlbnR9PC9tYXRoPmAgOiBjb250ZW50XG4gICAgICApO1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNvbnRhaW5lci5jb250ZW50O1xuICAgICAgaWYgKG5hbWVzcGFjZSA9PT0gXCJzdmdcIiB8fCBuYW1lc3BhY2UgPT09IFwibWF0aG1sXCIpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHRlbXBsYXRlLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHdoaWxlICh3cmFwcGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICB0ZW1wbGF0ZS5hcHBlbmRDaGlsZCh3cmFwcGVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBsYXRlLnJlbW92ZUNoaWxkKHdyYXBwZXIpO1xuICAgICAgfVxuICAgICAgcGFyZW50Lmluc2VydEJlZm9yZSh0ZW1wbGF0ZSwgYW5jaG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIGZpcnN0XG4gICAgICBiZWZvcmUgPyBiZWZvcmUubmV4dFNpYmxpbmcgOiBwYXJlbnQuZmlyc3RDaGlsZCxcbiAgICAgIC8vIGxhc3RcbiAgICAgIGFuY2hvciA/IGFuY2hvci5wcmV2aW91c1NpYmxpbmcgOiBwYXJlbnQubGFzdENoaWxkXG4gICAgXTtcbiAgfVxufTtcbmNvbnN0IHZ0Y0tleSA9IFN5bWJvbChcIl92dGNcIik7XG5mdW5jdGlvbiBwYXRjaENsYXNzKGVsLCB2YWx1ZSwgaXNTVkcpIHtcbiAgY29uc3QgdHJhbnNpdGlvbkNsYXNzZXMgPSBlbFt2dGNLZXldO1xuICBpZiAodHJhbnNpdGlvbkNsYXNzZXMpIHtcbiAgICB2YWx1ZSA9ICh2YWx1ZSA/IFt2YWx1ZSwgLi4udHJhbnNpdGlvbkNsYXNzZXNdIDogWy4uLnRyYW5zaXRpb25DbGFzc2VzXSkuam9pbihcIiBcIik7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgfSBlbHNlIGlmIChpc1NWRykge1xuICAgIGVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5jbGFzc05hbWUgPSB2YWx1ZTtcbiAgfVxufVxuY29uc3QgdlNob3dPcmlnaW5hbERpc3BsYXkgPSBTeW1ib2woXCJfdm9kXCIpO1xuY29uc3QgdlNob3dIaWRkZW4gPSBTeW1ib2woXCJfdnNoXCIpO1xuaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIDtcbmNvbnN0IENTU19WQVJfVEVYVCA9IFN5bWJvbCghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpID8gXCJDU1NfVkFSX1RFWFRcIiA6IFwiXCIpO1xuY29uc3QgZGlzcGxheVJFID0gLyhefDspXFxzKmRpc3BsYXlcXHMqOi87XG5mdW5jdGlvbiBwYXRjaFN0eWxlKGVsLCBwcmV2LCBuZXh0KSB7XG4gIGNvbnN0IHN0eWxlID0gZWwuc3R5bGU7XG4gIGNvbnN0IGlzQ3NzU3RyaW5nID0gaXNTdHJpbmcobmV4dCk7XG4gIGxldCBoYXNDb250cm9sbGVkRGlzcGxheSA9IGZhbHNlO1xuICBpZiAobmV4dCAmJiAhaXNDc3NTdHJpbmcpIHtcbiAgICBpZiAocHJldikge1xuICAgICAgaWYgKCFpc1N0cmluZyhwcmV2KSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwcmV2KSB7XG4gICAgICAgICAgaWYgKG5leHRba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRTdHlsZShzdHlsZSwga2V5LCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJldlN0eWxlIG9mIHByZXYuc3BsaXQoXCI7XCIpKSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gcHJldlN0eWxlLnNsaWNlKDAsIHByZXZTdHlsZS5pbmRleE9mKFwiOlwiKSkudHJpbSgpO1xuICAgICAgICAgIGlmIChuZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0U3R5bGUoc3R5bGUsIGtleSwgXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIG5leHQpIHtcbiAgICAgIGlmIChrZXkgPT09IFwiZGlzcGxheVwiKSB7XG4gICAgICAgIGhhc0NvbnRyb2xsZWREaXNwbGF5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHNldFN0eWxlKHN0eWxlLCBrZXksIG5leHRba2V5XSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpc0Nzc1N0cmluZykge1xuICAgICAgaWYgKHByZXYgIT09IG5leHQpIHtcbiAgICAgICAgY29uc3QgY3NzVmFyVGV4dCA9IHN0eWxlW0NTU19WQVJfVEVYVF07XG4gICAgICAgIGlmIChjc3NWYXJUZXh0KSB7XG4gICAgICAgICAgbmV4dCArPSBcIjtcIiArIGNzc1ZhclRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGUuY3NzVGV4dCA9IG5leHQ7XG4gICAgICAgIGhhc0NvbnRyb2xsZWREaXNwbGF5ID0gZGlzcGxheVJFLnRlc3QobmV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwcmV2KSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICB9XG4gIH1cbiAgaWYgKHZTaG93T3JpZ2luYWxEaXNwbGF5IGluIGVsKSB7XG4gICAgZWxbdlNob3dPcmlnaW5hbERpc3BsYXldID0gaGFzQ29udHJvbGxlZERpc3BsYXkgPyBzdHlsZS5kaXNwbGF5IDogXCJcIjtcbiAgICBpZiAoZWxbdlNob3dIaWRkZW5dKSB7XG4gICAgICBzdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG59XG5jb25zdCBzZW1pY29sb25SRSA9IC9bXlxcXFxdO1xccyokLztcbmNvbnN0IGltcG9ydGFudFJFID0gL1xccyohaW1wb3J0YW50JC87XG5mdW5jdGlvbiBzZXRTdHlsZShzdHlsZSwgbmFtZSwgdmFsKSB7XG4gIGlmIChpc0FycmF5KHZhbCkpIHtcbiAgICB2YWwuZm9yRWFjaCgodikgPT4gc2V0U3R5bGUoc3R5bGUsIG5hbWUsIHYpKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodmFsID09IG51bGwpIHZhbCA9IFwiXCI7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgIGlmIChzZW1pY29sb25SRS50ZXN0KHZhbCkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBgVW5leHBlY3RlZCBzZW1pY29sb24gYXQgdGhlIGVuZCBvZiAnJHtuYW1lfScgc3R5bGUgdmFsdWU6ICcke3ZhbH0nYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmFtZS5zdGFydHNXaXRoKFwiLS1cIikpIHtcbiAgICAgIHN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZWZpeGVkID0gYXV0b1ByZWZpeChzdHlsZSwgbmFtZSk7XG4gICAgICBpZiAoaW1wb3J0YW50UkUudGVzdCh2YWwpKSB7XG4gICAgICAgIHN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgIGh5cGhlbmF0ZShwcmVmaXhlZCksXG4gICAgICAgICAgdmFsLnJlcGxhY2UoaW1wb3J0YW50UkUsIFwiXCIpLFxuICAgICAgICAgIFwiaW1wb3J0YW50XCJcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlW3ByZWZpeGVkXSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmNvbnN0IHByZWZpeGVzID0gW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl07XG5jb25zdCBwcmVmaXhDYWNoZSA9IHt9O1xuZnVuY3Rpb24gYXV0b1ByZWZpeChzdHlsZSwgcmF3TmFtZSkge1xuICBjb25zdCBjYWNoZWQgPSBwcmVmaXhDYWNoZVtyYXdOYW1lXTtcbiAgaWYgKGNhY2hlZCkge1xuICAgIHJldHVybiBjYWNoZWQ7XG4gIH1cbiAgbGV0IG5hbWUgPSBjYW1lbGl6ZShyYXdOYW1lKTtcbiAgaWYgKG5hbWUgIT09IFwiZmlsdGVyXCIgJiYgbmFtZSBpbiBzdHlsZSkge1xuICAgIHJldHVybiBwcmVmaXhDYWNoZVtyYXdOYW1lXSA9IG5hbWU7XG4gIH1cbiAgbmFtZSA9IGNhcGl0YWxpemUobmFtZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgbmFtZTtcbiAgICBpZiAocHJlZml4ZWQgaW4gc3R5bGUpIHtcbiAgICAgIHJldHVybiBwcmVmaXhDYWNoZVtyYXdOYW1lXSA9IHByZWZpeGVkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmF3TmFtZTtcbn1cbmNvbnN0IHhsaW5rTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcbmZ1bmN0aW9uIHBhdGNoQXR0cihlbCwga2V5LCB2YWx1ZSwgaXNTVkcsIGluc3RhbmNlLCBpc0Jvb2xlYW4yID0gaXNTcGVjaWFsQm9vbGVhbkF0dHIoa2V5KSkge1xuICBpZiAoaXNTVkcgJiYga2V5LnN0YXJ0c1dpdGgoXCJ4bGluazpcIikpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlTlMoeGxpbmtOUywga2V5LnNsaWNlKDYsIGtleS5sZW5ndGgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc2V0QXR0cmlidXRlTlMoeGxpbmtOUywga2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IGlzQm9vbGVhbjIgJiYgIWluY2x1ZGVCb29sZWFuQXR0cih2YWx1ZSkpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIGtleSxcbiAgICAgICAgaXNCb29sZWFuMiA/IFwiXCIgOiBpc1N5bWJvbCh2YWx1ZSkgPyBTdHJpbmcodmFsdWUpIDogdmFsdWVcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBwYXRjaERPTVByb3AoZWwsIGtleSwgdmFsdWUsIHBhcmVudENvbXBvbmVudCwgYXR0ck5hbWUpIHtcbiAgaWYgKGtleSA9PT0gXCJpbm5lckhUTUxcIiB8fCBrZXkgPT09IFwidGV4dENvbnRlbnRcIikge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICBlbFtrZXldID0ga2V5ID09PSBcImlubmVySFRNTFwiID8gdW5zYWZlVG9UcnVzdGVkSFRNTCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWU7XG4gIGlmIChrZXkgPT09IFwidmFsdWVcIiAmJiB0YWcgIT09IFwiUFJPR1JFU1NcIiAmJiAvLyBjdXN0b20gZWxlbWVudHMgbWF5IHVzZSBfdmFsdWUgaW50ZXJuYWxseVxuICAhdGFnLmluY2x1ZGVzKFwiLVwiKSkge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGFnID09PSBcIk9QVElPTlwiID8gZWwuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgfHwgXCJcIiA6IGVsLnZhbHVlO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IChcbiAgICAgIC8vICMxMTY0NzogdmFsdWUgc2hvdWxkIGJlIHNldCBhcyBlbXB0eSBzdHJpbmcgZm9yIG51bGwgYW5kIHVuZGVmaW5lZCxcbiAgICAgIC8vIGJ1dCA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+IHNob3VsZCBiZSBzZXQgYXMgJ29uJy5cbiAgICAgIGVsLnR5cGUgPT09IFwiY2hlY2tib3hcIiA/IFwib25cIiA6IFwiXCJcbiAgICApIDogU3RyaW5nKHZhbHVlKTtcbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlIHx8ICEoXCJfdmFsdWVcIiBpbiBlbCkpIHtcbiAgICAgIGVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICB9XG4gICAgZWwuX3ZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBuZWVkUmVtb3ZlID0gZmFsc2U7XG4gIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBlbFtrZXldO1xuICAgIGlmICh0eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgdmFsdWUgPSBpbmNsdWRlQm9vbGVhbkF0dHIodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gbnVsbCAmJiB0eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICBuZWVkUmVtb3ZlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHZhbHVlID0gMDtcbiAgICAgIG5lZWRSZW1vdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuICB0cnkge1xuICAgIGVsW2tleV0gPSB2YWx1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpICYmICFuZWVkUmVtb3ZlKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBgRmFpbGVkIHNldHRpbmcgcHJvcCBcIiR7a2V5fVwiIG9uIDwke3RhZy50b0xvd2VyQ2FzZSgpfT46IHZhbHVlICR7dmFsdWV9IGlzIGludmFsaWQuYCxcbiAgICAgICAgZVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgbmVlZFJlbW92ZSAmJiBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUgfHwga2V5KTtcbn1cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWwsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG59XG5jb25zdCB2ZWlLZXkgPSBTeW1ib2woXCJfdmVpXCIpO1xuZnVuY3Rpb24gcGF0Y2hFdmVudChlbCwgcmF3TmFtZSwgcHJldlZhbHVlLCBuZXh0VmFsdWUsIGluc3RhbmNlID0gbnVsbCkge1xuICBjb25zdCBpbnZva2VycyA9IGVsW3ZlaUtleV0gfHwgKGVsW3ZlaUtleV0gPSB7fSk7XG4gIGNvbnN0IGV4aXN0aW5nSW52b2tlciA9IGludm9rZXJzW3Jhd05hbWVdO1xuICBpZiAobmV4dFZhbHVlICYmIGV4aXN0aW5nSW52b2tlcikge1xuICAgIGV4aXN0aW5nSW52b2tlci52YWx1ZSA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgPyBzYW5pdGl6ZUV2ZW50VmFsdWUobmV4dFZhbHVlLCByYXdOYW1lKSA6IG5leHRWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBbbmFtZSwgb3B0aW9uc10gPSBwYXJzZU5hbWUocmF3TmFtZSk7XG4gICAgaWYgKG5leHRWYWx1ZSkge1xuICAgICAgY29uc3QgaW52b2tlciA9IGludm9rZXJzW3Jhd05hbWVdID0gY3JlYXRlSW52b2tlcihcbiAgICAgICAgISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSA/IHNhbml0aXplRXZlbnRWYWx1ZShuZXh0VmFsdWUsIHJhd05hbWUpIDogbmV4dFZhbHVlLFxuICAgICAgICBpbnN0YW5jZVxuICAgICAgKTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoZWwsIG5hbWUsIGludm9rZXIsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAoZXhpc3RpbmdJbnZva2VyKSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKGVsLCBuYW1lLCBleGlzdGluZ0ludm9rZXIsIG9wdGlvbnMpO1xuICAgICAgaW52b2tlcnNbcmF3TmFtZV0gPSB2b2lkIDA7XG4gICAgfVxuICB9XG59XG5jb25zdCBvcHRpb25zTW9kaWZpZXJSRSA9IC8oPzpPbmNlfFBhc3NpdmV8Q2FwdHVyZSkkLztcbmZ1bmN0aW9uIHBhcnNlTmFtZShuYW1lKSB7XG4gIGxldCBvcHRpb25zO1xuICBpZiAob3B0aW9uc01vZGlmaWVyUkUudGVzdChuYW1lKSkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgICBsZXQgbTtcbiAgICB3aGlsZSAobSA9IG5hbWUubWF0Y2gob3B0aW9uc01vZGlmaWVyUkUpKSB7XG4gICAgICBuYW1lID0gbmFtZS5zbGljZSgwLCBuYW1lLmxlbmd0aCAtIG1bMF0ubGVuZ3RoKTtcbiAgICAgIG9wdGlvbnNbbVswXS50b0xvd2VyQ2FzZSgpXSA9IHRydWU7XG4gICAgfVxuICB9XG4gIGNvbnN0IGV2ZW50ID0gbmFtZVsyXSA9PT0gXCI6XCIgPyBuYW1lLnNsaWNlKDMpIDogaHlwaGVuYXRlKG5hbWUuc2xpY2UoMikpO1xuICByZXR1cm4gW2V2ZW50LCBvcHRpb25zXTtcbn1cbmxldCBjYWNoZWROb3cgPSAwO1xuY29uc3QgcCA9IC8qIEBfX1BVUkVfXyAqLyBQcm9taXNlLnJlc29sdmUoKTtcbmNvbnN0IGdldE5vdyA9ICgpID0+IGNhY2hlZE5vdyB8fCAocC50aGVuKCgpID0+IGNhY2hlZE5vdyA9IDApLCBjYWNoZWROb3cgPSBEYXRlLm5vdygpKTtcbmZ1bmN0aW9uIGNyZWF0ZUludm9rZXIoaW5pdGlhbFZhbHVlLCBpbnN0YW5jZSkge1xuICBjb25zdCBpbnZva2VyID0gKGUpID0+IHtcbiAgICBpZiAoIWUuX3Z0cykge1xuICAgICAgZS5fdnRzID0gRGF0ZS5ub3coKTtcbiAgICB9IGVsc2UgaWYgKGUuX3Z0cyA8PSBpbnZva2VyLmF0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhbGxXaXRoQXN5bmNFcnJvckhhbmRsaW5nKFxuICAgICAgcGF0Y2hTdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oZSwgaW52b2tlci52YWx1ZSksXG4gICAgICBpbnN0YW5jZSxcbiAgICAgIDUsXG4gICAgICBbZV1cbiAgICApO1xuICB9O1xuICBpbnZva2VyLnZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICBpbnZva2VyLmF0dGFjaGVkID0gZ2V0Tm93KCk7XG4gIHJldHVybiBpbnZva2VyO1xufVxuZnVuY3Rpb24gc2FuaXRpemVFdmVudFZhbHVlKHZhbHVlLCBwcm9wTmFtZSkge1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgd2FybihcbiAgICBgV3JvbmcgdHlwZSBwYXNzZWQgYXMgZXZlbnQgaGFuZGxlciB0byAke3Byb3BOYW1lfSAtIGRpZCB5b3UgZm9yZ2V0IEAgb3IgOiBpbiBmcm9udCBvZiB5b3VyIHByb3A/XG5FeHBlY3RlZCBmdW5jdGlvbiBvciBhcnJheSBvZiBmdW5jdGlvbnMsIHJlY2VpdmVkIHR5cGUgJHt0eXBlb2YgdmFsdWV9LmBcbiAgKTtcbiAgcmV0dXJuIE5PT1A7XG59XG5mdW5jdGlvbiBwYXRjaFN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbihlLCB2YWx1ZSkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBjb25zdCBvcmlnaW5hbFN0b3AgPSBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiA9ICgpID0+IHtcbiAgICAgIG9yaWdpbmFsU3RvcC5jYWxsKGUpO1xuICAgICAgZS5fc3RvcHBlZCA9IHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4gdmFsdWUubWFwKFxuICAgICAgKGZuKSA9PiAoZTIpID0+ICFlMi5fc3RvcHBlZCAmJiBmbiAmJiBmbihlMilcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuY29uc3QgaXNOYXRpdmVPbiA9IChrZXkpID0+IGtleS5jaGFyQ29kZUF0KDApID09PSAxMTEgJiYga2V5LmNoYXJDb2RlQXQoMSkgPT09IDExMCAmJiAvLyBsb3dlcmNhc2UgbGV0dGVyXG5rZXkuY2hhckNvZGVBdCgyKSA+IDk2ICYmIGtleS5jaGFyQ29kZUF0KDIpIDwgMTIzO1xuY29uc3QgcGF0Y2hQcm9wID0gKGVsLCBrZXksIHByZXZWYWx1ZSwgbmV4dFZhbHVlLCBuYW1lc3BhY2UsIHBhcmVudENvbXBvbmVudCkgPT4ge1xuICBjb25zdCBpc1NWRyA9IG5hbWVzcGFjZSA9PT0gXCJzdmdcIjtcbiAgaWYgKGtleSA9PT0gXCJjbGFzc1wiKSB7XG4gICAgcGF0Y2hDbGFzcyhlbCwgbmV4dFZhbHVlLCBpc1NWRyk7XG4gIH0gZWxzZSBpZiAoa2V5ID09PSBcInN0eWxlXCIpIHtcbiAgICBwYXRjaFN0eWxlKGVsLCBwcmV2VmFsdWUsIG5leHRWYWx1ZSk7XG4gIH0gZWxzZSBpZiAoaXNPbihrZXkpKSB7XG4gICAgaWYgKCFpc01vZGVsTGlzdGVuZXIoa2V5KSkge1xuICAgICAgcGF0Y2hFdmVudChlbCwga2V5LCBwcmV2VmFsdWUsIG5leHRWYWx1ZSwgcGFyZW50Q29tcG9uZW50KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoa2V5WzBdID09PSBcIi5cIiA/IChrZXkgPSBrZXkuc2xpY2UoMSksIHRydWUpIDoga2V5WzBdID09PSBcIl5cIiA/IChrZXkgPSBrZXkuc2xpY2UoMSksIGZhbHNlKSA6IHNob3VsZFNldEFzUHJvcChlbCwga2V5LCBuZXh0VmFsdWUsIGlzU1ZHKSkge1xuICAgIHBhdGNoRE9NUHJvcChlbCwga2V5LCBuZXh0VmFsdWUpO1xuICAgIGlmICghZWwudGFnTmFtZS5pbmNsdWRlcyhcIi1cIikgJiYgKGtleSA9PT0gXCJ2YWx1ZVwiIHx8IGtleSA9PT0gXCJjaGVja2VkXCIgfHwga2V5ID09PSBcInNlbGVjdGVkXCIpKSB7XG4gICAgICBwYXRjaEF0dHIoZWwsIGtleSwgbmV4dFZhbHVlLCBpc1NWRywgcGFyZW50Q29tcG9uZW50LCBrZXkgIT09IFwidmFsdWVcIik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIC8vICMxMTA4MSBmb3JjZSBzZXQgcHJvcHMgZm9yIHBvc3NpYmxlIGFzeW5jIGN1c3RvbSBlbGVtZW50XG4gICAgZWwuX2lzVnVlQ0UgJiYgKC9bQS1aXS8udGVzdChrZXkpIHx8ICFpc1N0cmluZyhuZXh0VmFsdWUpKVxuICApIHtcbiAgICBwYXRjaERPTVByb3AoZWwsIGNhbWVsaXplKGtleSksIG5leHRWYWx1ZSwgcGFyZW50Q29tcG9uZW50LCBrZXkpO1xuICB9IGVsc2Uge1xuICAgIGlmIChrZXkgPT09IFwidHJ1ZS12YWx1ZVwiKSB7XG4gICAgICBlbC5fdHJ1ZVZhbHVlID0gbmV4dFZhbHVlO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImZhbHNlLXZhbHVlXCIpIHtcbiAgICAgIGVsLl9mYWxzZVZhbHVlID0gbmV4dFZhbHVlO1xuICAgIH1cbiAgICBwYXRjaEF0dHIoZWwsIGtleSwgbmV4dFZhbHVlLCBpc1NWRyk7XG4gIH1cbn07XG5mdW5jdGlvbiBzaG91bGRTZXRBc1Byb3AoZWwsIGtleSwgdmFsdWUsIGlzU1ZHKSB7XG4gIGlmIChpc1NWRykge1xuICAgIGlmIChrZXkgPT09IFwiaW5uZXJIVE1MXCIgfHwga2V5ID09PSBcInRleHRDb250ZW50XCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoa2V5IGluIGVsICYmIGlzTmF0aXZlT24oa2V5KSAmJiBpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoa2V5ID09PSBcInNwZWxsY2hlY2tcIiB8fCBrZXkgPT09IFwiZHJhZ2dhYmxlXCIgfHwga2V5ID09PSBcInRyYW5zbGF0ZVwiIHx8IGtleSA9PT0gXCJhdXRvY29ycmVjdFwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChrZXkgPT09IFwiZm9ybVwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChrZXkgPT09IFwibGlzdFwiICYmIGVsLnRhZ05hbWUgPT09IFwiSU5QVVRcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoa2V5ID09PSBcInR5cGVcIiAmJiBlbC50YWdOYW1lID09PSBcIlRFWFRBUkVBXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGtleSA9PT0gXCJ3aWR0aFwiIHx8IGtleSA9PT0gXCJoZWlnaHRcIikge1xuICAgIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWU7XG4gICAgaWYgKHRhZyA9PT0gXCJJTUdcIiB8fCB0YWcgPT09IFwiVklERU9cIiB8fCB0YWcgPT09IFwiQ0FOVkFTXCIgfHwgdGFnID09PSBcIlNPVVJDRVwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChpc05hdGl2ZU9uKGtleSkgJiYgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBrZXkgaW4gZWw7XG59XG5jb25zdCBSRU1PVkFMID0ge307XG4vKiEgI19fTk9fU0lERV9FRkZFQ1RTX18gKi9cbi8vIEBfX05PX1NJREVfRUZGRUNUU19fXG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KG9wdGlvbnMsIGV4dHJhT3B0aW9ucywgX2NyZWF0ZUFwcCkge1xuICBjb25zdCBDb21wID0gLyogQF9fUFVSRV9fICovIGRlZmluZUNvbXBvbmVudChvcHRpb25zLCBleHRyYU9wdGlvbnMpO1xuICBpZiAoaXNQbGFpbk9iamVjdChDb21wKSkgZXh0ZW5kKENvbXAsIGV4dHJhT3B0aW9ucyk7XG4gIGNsYXNzIFZ1ZUN1c3RvbUVsZW1lbnQgZXh0ZW5kcyBWdWVFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsUHJvcHMpIHtcbiAgICAgIHN1cGVyKENvbXAsIGluaXRpYWxQcm9wcywgX2NyZWF0ZUFwcCk7XG4gICAgfVxuICB9XG4gIFZ1ZUN1c3RvbUVsZW1lbnQuZGVmID0gQ29tcDtcbiAgcmV0dXJuIFZ1ZUN1c3RvbUVsZW1lbnQ7XG59XG5jb25zdCBCYXNlQ2xhc3MgPSB0eXBlb2YgSFRNTEVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBIVE1MRWxlbWVudCA6IGNsYXNzIHtcbn07XG5jbGFzcyBWdWVFbGVtZW50IGV4dGVuZHMgQmFzZUNsYXNzIHtcbiAgY29uc3RydWN0b3IoX2RlZiwgX3Byb3BzID0ge30sIF9jcmVhdGVBcHAgPSBjcmVhdGVBcHApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2RlZiA9IF9kZWY7XG4gICAgdGhpcy5fcHJvcHMgPSBfcHJvcHM7XG4gICAgdGhpcy5fY3JlYXRlQXBwID0gX2NyZWF0ZUFwcDtcbiAgICB0aGlzLl9pc1Z1ZUNFID0gdHJ1ZTtcbiAgICB0aGlzLl9pbnN0YW5jZSA9IG51bGw7XG4gICAgdGhpcy5fYXBwID0gbnVsbDtcbiAgICB0aGlzLl9ub25jZSA9IHRoaXMuX2RlZi5ub25jZTtcbiAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9yZXNvbHZlZCA9IGZhbHNlO1xuICAgIHRoaXMuX251bWJlclByb3BzID0gbnVsbDtcbiAgICB0aGlzLl9zdHlsZUNoaWxkcmVuID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG4gICAgdGhpcy5fb2IgPSBudWxsO1xuICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QgJiYgX2NyZWF0ZUFwcCAhPT0gY3JlYXRlQXBwKSB7XG4gICAgICB0aGlzLl9yb290ID0gdGhpcy5zaGFkb3dSb290O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBgQ3VzdG9tIGVsZW1lbnQgaGFzIHByZS1yZW5kZXJlZCBkZWNsYXJhdGl2ZSBzaGFkb3cgcm9vdCBidXQgaXMgbm90IGRlZmluZWQgYXMgaHlkcmF0YWJsZS4gVXNlIFxcYGRlZmluZVNTUkN1c3RvbUVsZW1lbnRcXGAuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKF9kZWYuc2hhZG93Um9vdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcbiAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMuc2hhZG93Um9vdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuc2hhZG93Um9vdCAmJiAhdGhpcy5fcmVzb2x2ZWQpIHtcbiAgICAgIHRoaXMuX3BhcnNlU2xvdHMoKTtcbiAgICB9XG4gICAgdGhpcy5fY29ubmVjdGVkID0gdHJ1ZTtcbiAgICBsZXQgcGFyZW50ID0gdGhpcztcbiAgICB3aGlsZSAocGFyZW50ID0gcGFyZW50ICYmIChwYXJlbnQucGFyZW50Tm9kZSB8fCBwYXJlbnQuaG9zdCkpIHtcbiAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBWdWVFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIGlmICh0aGlzLl9yZXNvbHZlZCkge1xuICAgICAgICB0aGlzLl9tb3VudCh0aGlzLl9kZWYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuX3BlbmRpbmdSZXNvbHZlKSB7XG4gICAgICAgICAgdGhpcy5fcGVuZGluZ1Jlc29sdmUgPSBwYXJlbnQuX3BlbmRpbmdSZXNvbHZlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1Jlc29sdmUgPSB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlRGVmKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZURlZigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9zZXRQYXJlbnQocGFyZW50ID0gdGhpcy5fcGFyZW50KSB7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgdGhpcy5faW5zdGFuY2UucGFyZW50ID0gcGFyZW50Ll9pbnN0YW5jZTtcbiAgICAgIHRoaXMuX2luaGVyaXRQYXJlbnRDb250ZXh0KHBhcmVudCk7XG4gICAgfVxuICB9XG4gIF9pbmhlcml0UGFyZW50Q29udGV4dChwYXJlbnQgPSB0aGlzLl9wYXJlbnQpIHtcbiAgICBpZiAocGFyZW50ICYmIHRoaXMuX2FwcCkge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKFxuICAgICAgICB0aGlzLl9hcHAuX2NvbnRleHQucHJvdmlkZXMsXG4gICAgICAgIHBhcmVudC5faW5zdGFuY2UucHJvdmlkZXNcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9vYikge1xuICAgICAgICAgIHRoaXMuX29iLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICB0aGlzLl9vYiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXBwICYmIHRoaXMuX2FwcC51bm1vdW50KCk7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkgdGhpcy5faW5zdGFuY2UuY2UgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMuX2FwcCA9IHRoaXMuX2luc3RhbmNlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogcmVzb2x2ZSBpbm5lciBjb21wb25lbnQgZGVmaW5pdGlvbiAoaGFuZGxlIHBvc3NpYmxlIGFzeW5jIGNvbXBvbmVudClcbiAgICovXG4gIF9yZXNvbHZlRGVmKCkge1xuICAgIGlmICh0aGlzLl9wZW5kaW5nUmVzb2x2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fc2V0QXR0cih0aGlzLmF0dHJpYnV0ZXNbaV0ubmFtZSk7XG4gICAgfVxuICAgIHRoaXMuX29iID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgZm9yIChjb25zdCBtIG9mIG11dGF0aW9ucykge1xuICAgICAgICB0aGlzLl9zZXRBdHRyKG0uYXR0cmlidXRlTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fb2Iub2JzZXJ2ZSh0aGlzLCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG4gICAgY29uc3QgcmVzb2x2ZSA9IChkZWYyLCBpc0FzeW5jID0gZmFsc2UpID0+IHtcbiAgICAgIHRoaXMuX3Jlc29sdmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3BlbmRpbmdSZXNvbHZlID0gdm9pZCAwO1xuICAgICAgY29uc3QgeyBwcm9wcywgc3R5bGVzIH0gPSBkZWYyO1xuICAgICAgbGV0IG51bWJlclByb3BzO1xuICAgICAgaWYgKHByb3BzICYmICFpc0FycmF5KHByb3BzKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgIGNvbnN0IG9wdCA9IHByb3BzW2tleV07XG4gICAgICAgICAgaWYgKG9wdCA9PT0gTnVtYmVyIHx8IG9wdCAmJiBvcHQudHlwZSA9PT0gTnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoa2V5IGluIHRoaXMuX3Byb3BzKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Byb3BzW2tleV0gPSB0b051bWJlcih0aGlzLl9wcm9wc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChudW1iZXJQcm9wcyB8fCAobnVtYmVyUHJvcHMgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKSkpW2NhbWVsaXplKGtleSldID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX251bWJlclByb3BzID0gbnVtYmVyUHJvcHM7XG4gICAgICB0aGlzLl9yZXNvbHZlUHJvcHMoZGVmMik7XG4gICAgICBpZiAodGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIHRoaXMuX2FwcGx5U3R5bGVzKHN0eWxlcyk7XG4gICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgc3R5bGVzKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJDdXN0b20gZWxlbWVudCBzdHlsZSBpbmplY3Rpb24gaXMgbm90IHN1cHBvcnRlZCB3aGVuIHVzaW5nIHNoYWRvd1Jvb3Q6IGZhbHNlXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21vdW50KGRlZjIpO1xuICAgIH07XG4gICAgY29uc3QgYXN5bmNEZWYgPSB0aGlzLl9kZWYuX19hc3luY0xvYWRlcjtcbiAgICBpZiAoYXN5bmNEZWYpIHtcbiAgICAgIHRoaXMuX3BlbmRpbmdSZXNvbHZlID0gYXN5bmNEZWYoKS50aGVuKChkZWYyKSA9PiB7XG4gICAgICAgIGRlZjIuY29uZmlndXJlQXBwID0gdGhpcy5fZGVmLmNvbmZpZ3VyZUFwcDtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLl9kZWYgPSBkZWYyLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHRoaXMuX2RlZik7XG4gICAgfVxuICB9XG4gIF9tb3VudChkZWYyKSB7XG4gICAgaWYgKCghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHx8IGZhbHNlKSAmJiAhZGVmMi5uYW1lKSB7XG4gICAgICBkZWYyLm5hbWUgPSBcIlZ1ZUVsZW1lbnRcIjtcbiAgICB9XG4gICAgdGhpcy5fYXBwID0gdGhpcy5fY3JlYXRlQXBwKGRlZjIpO1xuICAgIHRoaXMuX2luaGVyaXRQYXJlbnRDb250ZXh0KCk7XG4gICAgaWYgKGRlZjIuY29uZmlndXJlQXBwKSB7XG4gICAgICBkZWYyLmNvbmZpZ3VyZUFwcCh0aGlzLl9hcHApO1xuICAgIH1cbiAgICB0aGlzLl9hcHAuX2NlVk5vZGUgPSB0aGlzLl9jcmVhdGVWTm9kZSgpO1xuICAgIHRoaXMuX2FwcC5tb3VudCh0aGlzLl9yb290KTtcbiAgICBjb25zdCBleHBvc2VkID0gdGhpcy5faW5zdGFuY2UgJiYgdGhpcy5faW5zdGFuY2UuZXhwb3NlZDtcbiAgICBpZiAoIWV4cG9zZWQpIHJldHVybjtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBleHBvc2VkKSB7XG4gICAgICBpZiAoIWhhc093bih0aGlzLCBrZXkpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgICAvLyB1bndyYXAgcmVmIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCBwdWJsaWMgaW5zdGFuY2UgYmVoYXZpb3JcbiAgICAgICAgICBnZXQ6ICgpID0+IHVucmVmKGV4cG9zZWRba2V5XSlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgd2FybihgRXhwb3NlZCBwcm9wZXJ0eSBcIiR7a2V5fVwiIGFscmVhZHkgZXhpc3RzIG9uIGN1c3RvbSBlbGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfcmVzb2x2ZVByb3BzKGRlZjIpIHtcbiAgICBjb25zdCB7IHByb3BzIH0gPSBkZWYyO1xuICAgIGNvbnN0IGRlY2xhcmVkUHJvcEtleXMgPSBpc0FycmF5KHByb3BzKSA/IHByb3BzIDogT2JqZWN0LmtleXMocHJvcHMgfHwge30pO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMpKSB7XG4gICAgICBpZiAoa2V5WzBdICE9PSBcIl9cIiAmJiBkZWNsYXJlZFByb3BLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgdGhpcy5fc2V0UHJvcChrZXksIHRoaXNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IG9mIGRlY2xhcmVkUHJvcEtleXMubWFwKGNhbWVsaXplKSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2dldFByb3Aoa2V5KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbCkge1xuICAgICAgICAgIHRoaXMuX3NldFByb3Aoa2V5LCB2YWwsIHRydWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgX3NldEF0dHIoa2V5KSB7XG4gICAgaWYgKGtleS5zdGFydHNXaXRoKFwiZGF0YS12LVwiKSkgcmV0dXJuO1xuICAgIGNvbnN0IGhhcyA9IHRoaXMuaGFzQXR0cmlidXRlKGtleSk7XG4gICAgbGV0IHZhbHVlID0gaGFzID8gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KSA6IFJFTU9WQUw7XG4gICAgY29uc3QgY2FtZWxLZXkgPSBjYW1lbGl6ZShrZXkpO1xuICAgIGlmIChoYXMgJiYgdGhpcy5fbnVtYmVyUHJvcHMgJiYgdGhpcy5fbnVtYmVyUHJvcHNbY2FtZWxLZXldKSB7XG4gICAgICB2YWx1ZSA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5fc2V0UHJvcChjYW1lbEtleSwgdmFsdWUsIGZhbHNlLCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfZ2V0UHJvcChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvcHNba2V5XTtcbiAgfVxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfc2V0UHJvcChrZXksIHZhbCwgc2hvdWxkUmVmbGVjdCA9IHRydWUsIHNob3VsZFVwZGF0ZSA9IGZhbHNlKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fcHJvcHNba2V5XSkge1xuICAgICAgaWYgKHZhbCA9PT0gUkVNT1ZBTCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fcHJvcHNba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Byb3BzW2tleV0gPSB2YWw7XG4gICAgICAgIGlmIChrZXkgPT09IFwia2V5XCIgJiYgdGhpcy5fYXBwKSB7XG4gICAgICAgICAgdGhpcy5fYXBwLl9jZVZOb2RlLmtleSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNob3VsZFVwZGF0ZSAmJiB0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaG91bGRSZWZsZWN0KSB7XG4gICAgICAgIGNvbnN0IG9iID0gdGhpcy5fb2I7XG4gICAgICAgIG9iICYmIG9iLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGh5cGhlbmF0ZShrZXkpLCBcIlwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShoeXBoZW5hdGUoa2V5KSwgdmFsICsgXCJcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbCkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGh5cGhlbmF0ZShrZXkpKTtcbiAgICAgICAgfVxuICAgICAgICBvYiAmJiBvYi5vYnNlcnZlKHRoaXMsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX3VwZGF0ZSgpIHtcbiAgICBjb25zdCB2bm9kZSA9IHRoaXMuX2NyZWF0ZVZOb2RlKCk7XG4gICAgaWYgKHRoaXMuX2FwcCkgdm5vZGUuYXBwQ29udGV4dCA9IHRoaXMuX2FwcC5fY29udGV4dDtcbiAgICByZW5kZXIodm5vZGUsIHRoaXMuX3Jvb3QpO1xuICB9XG4gIF9jcmVhdGVWTm9kZSgpIHtcbiAgICBjb25zdCBiYXNlUHJvcHMgPSB7fTtcbiAgICBpZiAoIXRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgYmFzZVByb3BzLm9uVm5vZGVNb3VudGVkID0gYmFzZVByb3BzLm9uVm5vZGVVcGRhdGVkID0gdGhpcy5fcmVuZGVyU2xvdHMuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgY29uc3Qgdm5vZGUgPSBjcmVhdGVWTm9kZSh0aGlzLl9kZWYsIGV4dGVuZChiYXNlUHJvcHMsIHRoaXMuX3Byb3BzKSk7XG4gICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdm5vZGUuY2UgPSAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgaW5zdGFuY2UuY2UgPSB0aGlzO1xuICAgICAgICBpbnN0YW5jZS5pc0NFID0gdHJ1ZTtcbiAgICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgICBpbnN0YW5jZS5jZVJlbG9hZCA9IChuZXdTdHlsZXMpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdHlsZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5fc3R5bGVzLmZvckVhY2goKHMpID0+IHRoaXMuX3Jvb3QucmVtb3ZlQ2hpbGQocykpO1xuICAgICAgICAgICAgICB0aGlzLl9zdHlsZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2FwcGx5U3R5bGVzKG5ld1N0eWxlcyk7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpc3BhdGNoID0gKGV2ZW50LCBhcmdzKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFxuICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgaXNQbGFpbk9iamVjdChhcmdzWzBdKSA/IGV4dGVuZCh7IGRldGFpbDogYXJncyB9LCBhcmdzWzBdKSA6IHsgZGV0YWlsOiBhcmdzIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICBpbnN0YW5jZS5lbWl0ID0gKGV2ZW50LCAuLi5hcmdzKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goZXZlbnQsIGFyZ3MpO1xuICAgICAgICAgIGlmIChoeXBoZW5hdGUoZXZlbnQpICE9PSBldmVudCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goaHlwaGVuYXRlKGV2ZW50KSwgYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zZXRQYXJlbnQoKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB2bm9kZTtcbiAgfVxuICBfYXBwbHlTdHlsZXMoc3R5bGVzLCBvd25lcikge1xuICAgIGlmICghc3R5bGVzKSByZXR1cm47XG4gICAgaWYgKG93bmVyKSB7XG4gICAgICBpZiAob3duZXIgPT09IHRoaXMuX2RlZiB8fCB0aGlzLl9zdHlsZUNoaWxkcmVuLmhhcyhvd25lcikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3R5bGVDaGlsZHJlbi5hZGQob3duZXIpO1xuICAgIH1cbiAgICBjb25zdCBub25jZSA9IHRoaXMuX25vbmNlO1xuICAgIGZvciAobGV0IGkgPSBzdHlsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICBpZiAobm9uY2UpIHMuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgcy50ZXh0Q29udGVudCA9IHN0eWxlc1tpXTtcbiAgICAgIHRoaXMuc2hhZG93Um9vdC5wcmVwZW5kKHMpO1xuICAgICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHtcbiAgICAgICAgaWYgKG93bmVyKSB7XG4gICAgICAgICAgaWYgKG93bmVyLl9faG1ySWQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2hpbGRTdHlsZXMpIHRoaXMuX2NoaWxkU3R5bGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGxldCBlbnRyeSA9IHRoaXMuX2NoaWxkU3R5bGVzLmdldChvd25lci5fX2htcklkKTtcbiAgICAgICAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fY2hpbGRTdHlsZXMuc2V0KG93bmVyLl9faG1ySWQsIGVudHJ5ID0gW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW50cnkucHVzaChzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKHRoaXMuX3N0eWxlcyB8fCAodGhpcy5fc3R5bGVzID0gW10pKS5wdXNoKHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBPbmx5IGNhbGxlZCB3aGVuIHNoYWRvd1Jvb3QgaXMgZmFsc2VcbiAgICovXG4gIF9wYXJzZVNsb3RzKCkge1xuICAgIGNvbnN0IHNsb3RzID0gdGhpcy5fc2xvdHMgPSB7fTtcbiAgICBsZXQgbjtcbiAgICB3aGlsZSAobiA9IHRoaXMuZmlyc3RDaGlsZCkge1xuICAgICAgY29uc3Qgc2xvdE5hbWUgPSBuLm5vZGVUeXBlID09PSAxICYmIG4uZ2V0QXR0cmlidXRlKFwic2xvdFwiKSB8fCBcImRlZmF1bHRcIjtcbiAgICAgIChzbG90c1tzbG90TmFtZV0gfHwgKHNsb3RzW3Nsb3ROYW1lXSA9IFtdKSkucHVzaChuKTtcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQobik7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBPbmx5IGNhbGxlZCB3aGVuIHNoYWRvd1Jvb3QgaXMgZmFsc2VcbiAgICovXG4gIF9yZW5kZXJTbG90cygpIHtcbiAgICBjb25zdCBvdXRsZXRzID0gKHRoaXMuX3RlbGVwb3J0VGFyZ2V0IHx8IHRoaXMpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzbG90XCIpO1xuICAgIGNvbnN0IHNjb3BlSWQgPSB0aGlzLl9pbnN0YW5jZS50eXBlLl9fc2NvcGVJZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dGxldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG8gPSBvdXRsZXRzW2ldO1xuICAgICAgY29uc3Qgc2xvdE5hbWUgPSBvLmdldEF0dHJpYnV0ZShcIm5hbWVcIikgfHwgXCJkZWZhdWx0XCI7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5fc2xvdHNbc2xvdE5hbWVdO1xuICAgICAgY29uc3QgcGFyZW50ID0gby5wYXJlbnROb2RlO1xuICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIGNvbnRlbnQpIHtcbiAgICAgICAgICBpZiAoc2NvcGVJZCAmJiBuLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHNjb3BlSWQgKyBcIi1zXCI7XG4gICAgICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKG4sIDEpO1xuICAgICAgICAgICAgbi5zZXRBdHRyaWJ1dGUoaWQsIFwiXCIpO1xuICAgICAgICAgICAgbGV0IGNoaWxkO1xuICAgICAgICAgICAgd2hpbGUgKGNoaWxkID0gd2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKGlkLCBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuLCBvKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKG8uZmlyc3RDaGlsZCkgcGFyZW50Lmluc2VydEJlZm9yZShvLmZpcnN0Q2hpbGQsIG8pO1xuICAgICAgfVxuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKG8pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfaW5qZWN0Q2hpbGRTdHlsZShjb21wKSB7XG4gICAgdGhpcy5fYXBwbHlTdHlsZXMoY29tcC5zdHlsZXMsIGNvbXApO1xuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9yZW1vdmVDaGlsZFN0eWxlKGNvbXApIHtcbiAgICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgICAgdGhpcy5fc3R5bGVDaGlsZHJlbi5kZWxldGUoY29tcCk7XG4gICAgICBpZiAodGhpcy5fY2hpbGRTdHlsZXMgJiYgY29tcC5fX2htcklkKSB7XG4gICAgICAgIGNvbnN0IG9sZFN0eWxlcyA9IHRoaXMuX2NoaWxkU3R5bGVzLmdldChjb21wLl9faG1ySWQpO1xuICAgICAgICBpZiAob2xkU3R5bGVzKSB7XG4gICAgICAgICAgb2xkU3R5bGVzLmZvckVhY2goKHMpID0+IHRoaXMuX3Jvb3QucmVtb3ZlQ2hpbGQocykpO1xuICAgICAgICAgIG9sZFN0eWxlcy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5jb25zdCByZW5kZXJlck9wdGlvbnMgPSAvKiBAX19QVVJFX18gKi8gZXh0ZW5kKHsgcGF0Y2hQcm9wIH0sIG5vZGVPcHMpO1xubGV0IHJlbmRlcmVyO1xuZnVuY3Rpb24gZW5zdXJlUmVuZGVyZXIoKSB7XG4gIHJldHVybiByZW5kZXJlciB8fCAocmVuZGVyZXIgPSBjcmVhdGVSZW5kZXJlcihyZW5kZXJlck9wdGlvbnMpKTtcbn1cbmNvbnN0IHJlbmRlciA9ICguLi5hcmdzKSA9PiB7XG4gIGVuc3VyZVJlbmRlcmVyKCkucmVuZGVyKC4uLmFyZ3MpO1xufTtcbmNvbnN0IGNyZWF0ZUFwcCA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IGFwcCA9IGVuc3VyZVJlbmRlcmVyKCkuY3JlYXRlQXBwKC4uLmFyZ3MpO1xuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkge1xuICAgIGluamVjdE5hdGl2ZVRhZ0NoZWNrKGFwcCk7XG4gICAgaW5qZWN0Q29tcGlsZXJPcHRpb25zQ2hlY2soYXBwKTtcbiAgfVxuICBjb25zdCB7IG1vdW50IH0gPSBhcHA7XG4gIGFwcC5tb3VudCA9IChjb250YWluZXJPclNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbm9ybWFsaXplQ29udGFpbmVyKGNvbnRhaW5lck9yU2VsZWN0b3IpO1xuICAgIGlmICghY29udGFpbmVyKSByZXR1cm47XG4gICAgY29uc3QgY29tcG9uZW50ID0gYXBwLl9jb21wb25lbnQ7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGNvbXBvbmVudCkgJiYgIWNvbXBvbmVudC5yZW5kZXIgJiYgIWNvbXBvbmVudC50ZW1wbGF0ZSkge1xuICAgICAgY29tcG9uZW50LnRlbXBsYXRlID0gY29udGFpbmVyLmlubmVySFRNTDtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5lci5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG4gICAgY29uc3QgcHJveHkgPSBtb3VudChjb250YWluZXIsIGZhbHNlLCByZXNvbHZlUm9vdE5hbWVzcGFjZShjb250YWluZXIpKTtcbiAgICBpZiAoY29udGFpbmVyIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInYtY2xvYWtcIik7XG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS12LWFwcFwiLCBcIlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3h5O1xuICB9O1xuICByZXR1cm4gYXBwO1xufTtcbmZ1bmN0aW9uIHJlc29sdmVSb290TmFtZXNwYWNlKGNvbnRhaW5lcikge1xuICBpZiAoY29udGFpbmVyIGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgIHJldHVybiBcInN2Z1wiO1xuICB9XG4gIGlmICh0eXBlb2YgTWF0aE1MRWxlbWVudCA9PT0gXCJmdW5jdGlvblwiICYmIGNvbnRhaW5lciBpbnN0YW5jZW9mIE1hdGhNTEVsZW1lbnQpIHtcbiAgICByZXR1cm4gXCJtYXRobWxcIjtcbiAgfVxufVxuZnVuY3Rpb24gaW5qZWN0TmF0aXZlVGFnQ2hlY2soYXBwKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcHAuY29uZmlnLCBcImlzTmF0aXZlVGFnXCIsIHtcbiAgICB2YWx1ZTogKHRhZykgPT4gaXNIVE1MVGFnKHRhZykgfHwgaXNTVkdUYWcodGFnKSB8fCBpc01hdGhNTFRhZyh0YWcpLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbn1cbmZ1bmN0aW9uIGluamVjdENvbXBpbGVyT3B0aW9uc0NoZWNrKGFwcCkge1xuICB7XG4gICAgY29uc3QgaXNDdXN0b21FbGVtZW50ID0gYXBwLmNvbmZpZy5pc0N1c3RvbUVsZW1lbnQ7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFwcC5jb25maWcsIFwiaXNDdXN0b21FbGVtZW50XCIsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGlzQ3VzdG9tRWxlbWVudDtcbiAgICAgIH0sXG4gICAgICBzZXQoKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgYFRoZSBcXGBpc0N1c3RvbUVsZW1lbnRcXGAgY29uZmlnIG9wdGlvbiBpcyBkZXByZWNhdGVkLiBVc2UgXFxgY29tcGlsZXJPcHRpb25zLmlzQ3VzdG9tRWxlbWVudFxcYCBpbnN0ZWFkLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjb21waWxlck9wdGlvbnMgPSBhcHAuY29uZmlnLmNvbXBpbGVyT3B0aW9ucztcbiAgICBjb25zdCBtc2cgPSBgVGhlIFxcYGNvbXBpbGVyT3B0aW9uc1xcYCBjb25maWcgb3B0aW9uIGlzIG9ubHkgcmVzcGVjdGVkIHdoZW4gdXNpbmcgYSBidWlsZCBvZiBWdWUuanMgdGhhdCBpbmNsdWRlcyB0aGUgcnVudGltZSBjb21waWxlciAoYWthIFwiZnVsbCBidWlsZFwiKS4gU2luY2UgeW91IGFyZSB1c2luZyB0aGUgcnVudGltZS1vbmx5IGJ1aWxkLCBcXGBjb21waWxlck9wdGlvbnNcXGAgbXVzdCBiZSBwYXNzZWQgdG8gXFxgQHZ1ZS9jb21waWxlci1kb21cXGAgaW4gdGhlIGJ1aWxkIHNldHVwIGluc3RlYWQuXG4tIEZvciB2dWUtbG9hZGVyOiBwYXNzIGl0IHZpYSB2dWUtbG9hZGVyJ3MgXFxgY29tcGlsZXJPcHRpb25zXFxgIGxvYWRlciBvcHRpb24uXG4tIEZvciB2dWUtY2xpOiBzZWUgaHR0cHM6Ly9jbGkudnVlanMub3JnL2d1aWRlL3dlYnBhY2suaHRtbCNtb2RpZnlpbmctb3B0aW9ucy1vZi1hLWxvYWRlclxuLSBGb3Igdml0ZTogcGFzcyBpdCB2aWEgQHZpdGVqcy9wbHVnaW4tdnVlIG9wdGlvbnMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdml0ZWpzL3ZpdGUtcGx1Z2luLXZ1ZS90cmVlL21haW4vcGFja2FnZXMvcGx1Z2luLXZ1ZSNleGFtcGxlLWZvci1wYXNzaW5nLW9wdGlvbnMtdG8tdnVlY29tcGlsZXItc2ZjYDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXBwLmNvbmZpZywgXCJjb21waWxlck9wdGlvbnNcIiwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICB3YXJuKG1zZyk7XG4gICAgICAgIHJldHVybiBjb21waWxlck9wdGlvbnM7XG4gICAgICB9LFxuICAgICAgc2V0KCkge1xuICAgICAgICB3YXJuKG1zZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNvbnRhaW5lcihjb250YWluZXIpIHtcbiAgaWYgKGlzU3RyaW5nKGNvbnRhaW5lcikpIHtcbiAgICBjb25zdCByZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcik7XG4gICAgaWYgKCEhKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgJiYgIXJlcykge1xuICAgICAgd2FybihcbiAgICAgICAgYEZhaWxlZCB0byBtb3VudCBhcHA6IG1vdW50IHRhcmdldCBzZWxlY3RvciBcIiR7Y29udGFpbmVyfVwiIHJldHVybmVkIG51bGwuYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICBpZiAoISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSAmJiB3aW5kb3cuU2hhZG93Um9vdCAmJiBjb250YWluZXIgaW5zdGFuY2VvZiB3aW5kb3cuU2hhZG93Um9vdCAmJiBjb250YWluZXIubW9kZSA9PT0gXCJjbG9zZWRcIikge1xuICAgIHdhcm4oXG4gICAgICBgbW91bnRpbmcgb24gYSBTaGFkb3dSb290IHdpdGggXFxge21vZGU6IFwiY2xvc2VkXCJ9XFxgIG1heSBsZWFkIHRvIHVucHJlZGljdGFibGUgYnVnc2BcbiAgICApO1xuICB9XG4gIHJldHVybiBjb250YWluZXI7XG59XG4vKipcbiogdnVlIHYzLjUuMThcbiogKGMpIDIwMTgtcHJlc2VudCBZdXhpIChFdmFuKSBZb3UgYW5kIFZ1ZSBjb250cmlidXRvcnNcbiogQGxpY2Vuc2UgTUlUXG4qKi9cbmZ1bmN0aW9uIGluaXREZXYoKSB7XG4gIHtcbiAgICBpbml0Q3VzdG9tRm9ybWF0dGVyKCk7XG4gIH1cbn1cbmlmICghIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gIGluaXREZXYoKTtcbn1cbmNvbnN0IF9ob2lzdGVkXzEkMiA9IHsgY2xhc3M6IFwic3VtbWFyeVwiIH07XG5jb25zdCBfaG9pc3RlZF8yJDEgPSB7IGNsYXNzOiBcInN1bW1hcnlcIiB9O1xuY29uc3QgX2hvaXN0ZWRfMyQxID0geyBrZXk6IDEgfTtcbmNvbnN0IF9zZmNfbWFpbiQ0ID0gLyogQF9fUFVSRV9fICovIGRlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogXCJCYWRnZS5jZVwiLFxuICBwcm9wczoge1xuICAgIGNoZWNrZXJSZXN1bHRzOiB7IHR5cGU6IEFycmF5IH0sXG4gICAgY29sbGFwc2VkOiB7IHR5cGU6IEJvb2xlYW4gfSxcbiAgICBwb3NpdGlvbjogeyBkZWZhdWx0OiBcImJsXCIsIHR5cGU6IFN0cmluZyB9LFxuICAgIGJhZGdlU3R5bGU6IHsgZGVmYXVsdDogXCJcIiwgdHlwZTogU3RyaW5nIH0sXG4gICAgb25DbGljazogeyB0eXBlOiBGdW5jdGlvbiB9XG4gIH0sXG4gIHNldHVwKF9fcHJvcHMpIHtcbiAgICBjb25zdCBwcm9wcyA9IF9fcHJvcHM7XG4gICAgY29uc3Qgc3VtbWFyeSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCBlcnJvckNvdW50ID0gMDtcbiAgICAgIGxldCB3YXJuaW5nQ291bnQgPSAwO1xuICAgICAgcHJvcHMuY2hlY2tlclJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdC5kaWFnbm9zdGljcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgICAgaWYgKGQubGV2ZWwgPT09IDEpIGVycm9yQ291bnQrKztcbiAgICAgICAgICBpZiAoZC5sZXZlbCA9PT0gMCkgd2FybmluZ0NvdW50Kys7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBlcnJvckNvdW50LCB3YXJuaW5nQ291bnQgfTtcbiAgICB9KTtcbiAgICBjb25zdCBiZ0NvbG9yQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAoIXN1bW1hcnkudmFsdWUpIHJldHVybiBcIlwiO1xuICAgICAgaWYgKHN1bW1hcnkudmFsdWUuZXJyb3JDb3VudCA+IDApIHJldHVybiBcInN1bW1hcnktZXJyb3JcIjtcbiAgICAgIGlmIChzdW1tYXJ5LnZhbHVlLndhcm5pbmdDb3VudCA+IDApIHJldHVybiBcInN1bW1hcnktd2FybmluZ1wiO1xuICAgICAgcmV0dXJuIFwic3VtbWFyeS1zdWNjZXNzXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIChfY3R4LCBfY2FjaGUpID0+IHtcbiAgICAgIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xhc3M6IG5vcm1hbGl6ZUNsYXNzKFtcbiAgICAgICAgICBcImJhZGdlLWJhc2VcIixcbiAgICAgICAgICBfY3R4LmNvbGxhcHNlZCA/IGB0by11bmNvbGxwYXNlICR7YmdDb2xvckNsYXNzLnZhbHVlfWAgOiBcInRvLWNvbGxwYXNlXCIsXG4gICAgICAgICAgYGJhZGdlLSR7X2N0eC5wb3NpdGlvbn1gXG4gICAgICAgIF0pLFxuICAgICAgICBzdHlsZTogbm9ybWFsaXplU3R5bGUoX2N0eC5iYWRnZVN0eWxlKSxcbiAgICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAvL0B0cy1pZ25vcmVcbiAgICAgICAgKC4uLmFyZ3MpID0+IF9jdHgub25DbGljayAmJiBfY3R4Lm9uQ2xpY2soLi4uYXJncykpXG4gICAgICB9LCBbXG4gICAgICAgIF9jdHguY29sbGFwc2VkID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soRnJhZ21lbnQsIHsga2V5OiAwIH0sIFtcbiAgICAgICAgICBjcmVhdGVCYXNlVk5vZGUoXCJzcGFuXCIsIF9ob2lzdGVkXzEkMiwgW1xuICAgICAgICAgICAgX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSBjcmVhdGVCYXNlVk5vZGUoXCJzcGFuXCIsIHsgY2xhc3M6IFwiZW1vamlcIiB9LCBcIuKdl++4j1wiLCAtMSkpLFxuICAgICAgICAgICAgY3JlYXRlVGV4dFZOb2RlKHRvRGlzcGxheVN0cmluZyhzdW1tYXJ5LnZhbHVlLmVycm9yQ291bnQpLCAxKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGNyZWF0ZUJhc2VWTm9kZShcInNwYW5cIiwgX2hvaXN0ZWRfMiQxLCBbXG4gICAgICAgICAgICBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9IGNyZWF0ZUJhc2VWTm9kZShcInNwYW5cIiwgeyBjbGFzczogXCJlbW9qaVwiIH0sIFwi4pqg77iPXCIsIC0xKSksXG4gICAgICAgICAgICBjcmVhdGVUZXh0Vk5vZGUodG9EaXNwbGF5U3RyaW5nKHN1bW1hcnkudmFsdWUud2FybmluZ0NvdW50KSwgMSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLCA2NCkpIDogKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIF9ob2lzdGVkXzMkMSwgXCJDbG9zZVwiKSlcbiAgICAgIF0sIDYpO1xuICAgIH07XG4gIH1cbn0pO1xuY29uc3QgX3N0eWxlXzAkNCA9IFwiXFxuLmJhZGdlLWJhc2Uge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDk5OTk5O1xcbiAgbWFyZ2luOiAwLjVlbTtcXG59XFxuLmJhZGdlLWJsIHtcXG4gIGJvdHRvbTogMHB4O1xcbiAgbGVmdDogMHB4O1xcbn1cXG4uYmFkZ2UtYnIge1xcbiAgYm90dG9tOiAwcHg7XFxuICByaWdodDogMHB4O1xcbn1cXG4uYmFkZ2UtdGwge1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxufVxcbi5iYWRnZS10ciB7XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxufVxcbi50by1jb2xscGFzZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNjMsIDc4LCA5Nik7XFxufVxcbi50by11bmNvbGxwYXNlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmVtb2ppIHtcXG4gIG1hcmdpbi1yaWdodDogMC41Y2g7XFxuICBmb250LWZhbWlseTogJ2FwcGxlIGNvbG9yIGVtb2ppLHNlZ29lIHVpIGVtb2ppLG5vdG8gY29sb3IgZW1vamksYW5kcm9pZCBlbW9qaSxlbW9qaXN5bWJvbHMsZW1vamlvbmUgbW96aWxsYSx0d2Vtb2ppIG1vemlsbGEsc2Vnb2UgdWkgc3ltYm9sJztcXG59XFxuLnN1bW1hcnkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZSk7XFxuICBtYXJnaW4tcmlnaHQ6IDFjaDtcXG59XFxuLnN1bW1hcnk6bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLnN1bW1hcnktZXJyb3Ige1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG59XFxuLnN1bW1hcnktd2FybmluZyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3cpO1xcbn1cXG5cIjtcbmNvbnN0IF9leHBvcnRfc2ZjID0gKHNmYywgcHJvcHMpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gc2ZjLl9fdmNjT3B0cyB8fCBzZmM7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBwcm9wcykge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuY29uc3QgQmFkZ2UgPSAvKiBAX19QVVJFX18gKi8gX2V4cG9ydF9zZmMoX3NmY19tYWluJDQsIFtbXCJzdHlsZXNcIiwgW19zdHlsZV8wJDRdXV0pO1xuY29uc3QgX2hvaXN0ZWRfMSQxID0geyBjbGFzczogXCJtZXNzYWdlLWl0ZW1cIiB9O1xuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwibWVzc2FnZVwiIH07XG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJmaWxlXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzQgPSB7XG4gIGtleTogMCxcbiAgY2xhc3M6IFwiZnJhbWVcIlxufTtcbmNvbnN0IF9ob2lzdGVkXzUgPSB7IGNsYXNzOiBcImZyYW1lLWNvZGVcIiB9O1xuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwic3RhY2tcIiB9O1xuY29uc3QgX3NmY19tYWluJDMgPSAvKiBAX19QVVJFX18gKi8gZGVmaW5lQ29tcG9uZW50KHtcbiAgX19uYW1lOiBcIkRpYWdub3N0aWMuY2VcIixcbiAgcHJvcHM6IHtcbiAgICBkaWFnbm9zdGljOiB7IHR5cGU6IG51bGwgfSxcbiAgICBiYXNlOiB7IHR5cGU6IFN0cmluZyB9XG4gIH0sXG4gIHNldHVwKF9fcHJvcHMpIHtcbiAgICBmdW5jdGlvbiBjYWxjTGluayh0ZXh0KSB7XG4gICAgICBsZXQgY3VySW5kZXggPSAwO1xuICAgICAgbGV0IG1hdGNoO1xuICAgICAgZmlsZVJFLmxhc3RJbmRleCA9IDA7XG4gICAgICBjb25zdCBsaW5rcyA9IFtdO1xuICAgICAgd2hpbGUgKG1hdGNoID0gZmlsZVJFLmV4ZWModGV4dCkpIHtcbiAgICAgICAgY29uc3QgeyAwOiBmaWxlMiwgaW5kZXggfSA9IG1hdGNoO1xuICAgICAgICBpZiAoaW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBmcmFnID0gdGV4dC5zbGljZShjdXJJbmRleCwgaW5kZXgpO1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSB7XG4gICAgICAgICAgICB0ZXh0Q29udGVudDogZmlsZTIsXG4gICAgICAgICAgICBvbmNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIGZldGNoKGAke19fcHJvcHMuYmFzZX1fX29wZW4taW4tZWRpdG9yP2ZpbGU9YCArIGVuY29kZVVSSUNvbXBvbmVudChmaWxlMikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgY3VySW5kZXggKz0gZnJhZy5sZW5ndGggKyBmaWxlMi5sZW5ndGg7XG4gICAgICAgICAgbGlua3MucHVzaChsaW5rKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGxpbmtzO1xuICAgIH1cbiAgICBjb25zdCBjaGVja2VyQ29sb3JNYXAgPSB7XG4gICAgICBUeXBlU2NyaXB0OiBcIiMzMTc4YzZcIixcbiAgICAgIEVTTGludDogXCIjN2I3ZmUzXCIsXG4gICAgICBCaW9tZTogXCIjNjBhNWZhXCIsXG4gICAgICBWTFM6IFwiIzY0YjU4N1wiLFxuICAgICAgXCJ2dWUtdHNjXCI6IFwiIzY0YjU4N1wiLFxuICAgICAgU3R5bGVsaW50OiBcIiNmZmZmZmZcIixcbiAgICAgIFwib3hsaW50XCI6IFwiI2E4YjFmZlwiXG4gICAgfTtcbiAgICBjb25zdCBmaWxlUkUgPSAvKD86W2EtekEtWl06XFxcXHxcXC8pLiooOlxcZCs6XFxkKyk/L2c7XG4gICAgY29uc3QgY29kZUZyYW1lUkUgPSAvXig/Oj4/XFxzK1xcZCtcXHMrXFx8Lip8XFxzK1xcfFxccypcXF4uKilcXHI/XFxuL2dtO1xuICAgIGNvbnN0IGhhc0ZyYW1lID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29kZUZyYW1lUkUubGFzdEluZGV4ID0gMDtcbiAgICAgIHJldHVybiBfX3Byb3BzLmRpYWdub3N0aWMuZnJhbWUgJiYgY29kZUZyYW1lUkUudGVzdChfX3Byb3BzLmRpYWdub3N0aWMuZnJhbWUpO1xuICAgIH0pO1xuICAgIGNvbnN0IGZpbGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gKF9fcHJvcHMuZGlhZ25vc3RpYy5sb2M/LmZpbGUgfHwgX19wcm9wcy5kaWFnbm9zdGljLmlkIHx8IFwidW5rbm93biBmaWxlXCIpLnNwbGl0KGA/YCk7XG4gICAgfSkudmFsdWVbMF07XG4gICAgY29uc3QgZXJyb3JTb3VyY2UgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jYWxjTGluayhcbiAgICAgICAgICBgJHtmaWxlfWAgKyAoX19wcm9wcy5kaWFnbm9zdGljLmxvYyA/IGA6JHtfX3Byb3BzLmRpYWdub3N0aWMubG9jLmxpbmV9OiR7X19wcm9wcy5kaWFnbm9zdGljLmxvYy5jb2x1bW59YCA6IFwiXCIpXG4gICAgICAgIClbMF0sXG4gICAgICAgIGxpbmtGaWxlczogdHJ1ZVxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gKF9jdHgsIF9jYWNoZSkgPT4ge1xuICAgICAgcmV0dXJuIG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJsaVwiLCBfaG9pc3RlZF8xJDEsIFtcbiAgICAgICAgY3JlYXRlQmFzZVZOb2RlKFwicHJlXCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9IGNyZWF0ZVRleHRWTm9kZShcIiAgICBcXG4gICAgXCIsIC0xKSksXG4gICAgICAgICAgY3JlYXRlQmFzZVZOb2RlKFwic3BhblwiLCB7XG4gICAgICAgICAgICBjbGFzczogXCJwbHVnaW5cIixcbiAgICAgICAgICAgIHN0eWxlOiBub3JtYWxpemVTdHlsZSh7IGNvbG9yOiBjaGVja2VyQ29sb3JNYXBbX2N0eC5kaWFnbm9zdGljLmNoZWNrZXJJZF0gfSlcbiAgICAgICAgICB9LCB0b0Rpc3BsYXlTdHJpbmcoYFske19jdHguZGlhZ25vc3RpYy5jaGVja2VySWR9XWApICsgXCIgXCIsIDUpLFxuICAgICAgICAgIGNyZWF0ZUJhc2VWTm9kZShcInNwYW5cIiwge1xuICAgICAgICAgICAgY2xhc3M6IG5vcm1hbGl6ZUNsYXNzKFtcIm1lc3NhZ2UtYm9keVwiLCBgbWVzc2FnZS1ib2R5LSR7X2N0eC5kaWFnbm9zdGljLmxldmVsfWBdKVxuICAgICAgICAgIH0sIHRvRGlzcGxheVN0cmluZyhfY3R4LmRpYWdub3N0aWMubWVzc2FnZSksIDMpLFxuICAgICAgICAgIF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gY3JlYXRlVGV4dFZOb2RlKFwiXFxuICBcIiwgLTEpKVxuICAgICAgICBdKSxcbiAgICAgICAgY3JlYXRlQmFzZVZOb2RlKFwicHJlXCIsIF9ob2lzdGVkXzMsIFtcbiAgICAgICAgICBjcmVhdGVCYXNlVk5vZGUoXCJhXCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBcImZpbGUtbGlua1wiLFxuICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICguLi5hcmdzKSA9PiBlcnJvclNvdXJjZS52YWx1ZS5vbmNsaWNrICYmIGVycm9yU291cmNlLnZhbHVlLm9uY2xpY2soLi4uYXJncykpXG4gICAgICAgICAgfSwgdG9EaXNwbGF5U3RyaW5nKGVycm9yU291cmNlLnZhbHVlLnRleHRDb250ZW50KSwgMSlcbiAgICAgICAgXSksXG4gICAgICAgIGhhc0ZyYW1lLnZhbHVlID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJwcmVcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICAgIGNyZWF0ZUJhc2VWTm9kZShcImNvZGVcIiwgX2hvaXN0ZWRfNSwgdG9EaXNwbGF5U3RyaW5nKF9jdHguZGlhZ25vc3RpYy5mcmFtZSksIDEpXG4gICAgICAgIF0pKSA6IGNyZWF0ZUNvbW1lbnRWTm9kZShcIlwiLCB0cnVlKSxcbiAgICAgICAgY3JlYXRlQmFzZVZOb2RlKFwicHJlXCIsIF9ob2lzdGVkXzYsIHRvRGlzcGxheVN0cmluZyhfY3R4LmRpYWdub3N0aWMuc3RhY2spLCAxKVxuICAgICAgXSk7XG4gICAgfTtcbiAgfVxufSk7XG5jb25zdCBfc3R5bGVfMCQzID0gXCJcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ubWVzc2FnZS1pdGVtIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzY2NjtcXG4gIHBhZGRpbmc6IDEycHggMCAwIDA7XFxufVxcbi5tZXNzYWdlIHtcXG4gIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vc3BhY2UpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcbi5mcmFtZSB7XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjIsIDI0LCAyOSwgMC44NSk7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5mcmFtZS1jb2RlIHtcXG4gIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZSk7XFxufVxcbnByZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1lc3NhZ2UtYm9keSB7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLyogd2FybmluZyAqL1xcbi5tZXNzYWdlLWJvZHktMCB7XFxuICBjb2xvcjogdmFyKC0teWVsbG93KTtcXG59XFxuXFxuLyogZXJyb3IgKi9cXG4ubWVzc2FnZS1ib2R5LTEge1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi8qIHN1Z2dlc3Rpb24gKi9cXG4ubWVzc2FnZS1ib2R5LTIge1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4vKiBtZXNzYWdlICovXFxuLm1lc3NhZ2UtYm9keS0zIHtcXG4gIGNvbG9yOiB2YXIoLS1kaW0pO1xcbn1cXG4uZmlsZSB7XFxuICBjb2xvcjogdmFyKC0tY3lhbik7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG4uc3RhY2sge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6IHZhcigtLWRpbSk7XFxufVxcbi5maWxlLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiO1xuY29uc3QgRGlhZ25vc3RpYyA9IC8qIEBfX1BVUkVfXyAqLyBfZXhwb3J0X3NmYyhfc2ZjX21haW4kMywgW1tcInN0eWxlc1wiLCBbX3N0eWxlXzAkM11dXSk7XG5jb25zdCBfc2ZjX21haW4kMiA9IC8qIEBfX1BVUkVfXyAqLyBkZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6IFwiQ2hlY2tlci5jZVwiLFxuICBwcm9wczoge1xuICAgIGRpYWdub3N0aWNzOiB7IHR5cGU6IEFycmF5IH0sXG4gICAgYmFzZTogeyB0eXBlOiBTdHJpbmcgfVxuICB9LFxuICBzZXR1cChfX3Byb3BzKSB7XG4gICAgY29uc3Qga2V5ID0gKGRpYWdub3N0aWMpID0+IHtcbiAgICAgIGlmIChkaWFnbm9zdGljLmxvYykge1xuICAgICAgICByZXR1cm4gYCR7ZGlhZ25vc3RpYy5sb2MuZmlsZX0tJHtkaWFnbm9zdGljLmxvYy5saW5lfS0ke2RpYWdub3N0aWMubG9jLmNvbHVtbn1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRpYWdub3N0aWMuaWQ7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKF9jdHgsIF9jYWNoZSkgPT4ge1xuICAgICAgcmV0dXJuIG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJ1bFwiLCBudWxsLCBbXG4gICAgICAgIChvcGVuQmxvY2sodHJ1ZSksIGNyZWF0ZUVsZW1lbnRCbG9jayhGcmFnbWVudCwgbnVsbCwgcmVuZGVyTGlzdChfY3R4LmRpYWdub3N0aWNzLCAoZCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2soRGlhZ25vc3RpYywge1xuICAgICAgICAgICAgZGlhZ25vc3RpYzogZCxcbiAgICAgICAgICAgIGJhc2U6IF9jdHguYmFzZSxcbiAgICAgICAgICAgIGtleToga2V5KGQpXG4gICAgICAgICAgfSwgbnVsbCwgOCwgW1wiZGlhZ25vc3RpY1wiLCBcImJhc2VcIl0pO1xuICAgICAgICB9KSwgMTI4KSlcbiAgICAgIF0pO1xuICAgIH07XG4gIH1cbn0pO1xuY29uc3QgX3N0eWxlXzAkMiA9IFwiXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxudWwge1xcbiAgcGFkZGluZy1pbmxpbmU6IDA7XFxuICBtYXJnaW4tYmxvY2s6IDA7XFxufVxcblwiO1xuY29uc3QgQ2hlY2tlciA9IC8qIEBfX1BVUkVfXyAqLyBfZXhwb3J0X3NmYyhfc2ZjX21haW4kMiwgW1tcInN0eWxlc1wiLCBbX3N0eWxlXzAkMl1dXSk7XG5jb25zdCBfc2ZjX21haW4kMSA9IC8qIEBfX1BVUkVfXyAqLyBkZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6IFwiTGlzdC5jZVwiLFxuICBwcm9wczoge1xuICAgIHVsU3R5bGU6IHsgZGVmYXVsdDogXCJcIiwgdHlwZTogU3RyaW5nIH0sXG4gICAgYmFzZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjaGVja2VyUmVzdWx0czogeyB0eXBlOiBBcnJheSB9XG4gIH0sXG4gIHNldHVwKF9fcHJvcHMpIHtcbiAgICByZXR1cm4gKF9jdHgsIF9jYWNoZSkgPT4ge1xuICAgICAgcmV0dXJuIG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJ1bFwiLCB7XG4gICAgICAgIHN0eWxlOiBub3JtYWxpemVTdHlsZShfY3R4LnVsU3R5bGUpXG4gICAgICB9LCBbXG4gICAgICAgIChvcGVuQmxvY2sodHJ1ZSksIGNyZWF0ZUVsZW1lbnRCbG9jayhGcmFnbWVudCwgbnVsbCwgcmVuZGVyTGlzdChfY3R4LmNoZWNrZXJSZXN1bHRzLCAoY2hlY2tlclJlc3VsdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcImxpXCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICBjcmVhdGVWTm9kZShDaGVja2VyLCB7XG4gICAgICAgICAgICAgIGRpYWdub3N0aWNzOiBjaGVja2VyUmVzdWx0LmRpYWdub3N0aWNzLFxuICAgICAgICAgICAgICBiYXNlOiBfY3R4LmJhc2UsXG4gICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICB9LCBudWxsLCA4LCBbXCJkaWFnbm9zdGljc1wiLCBcImJhc2VcIiwgXCJpbmRleFwiXSlcbiAgICAgICAgICBdKTtcbiAgICAgICAgfSksIDEyOCkpXG4gICAgICBdLCA0KTtcbiAgICB9O1xuICB9XG59KTtcbmNvbnN0IF9zdHlsZV8wJDEgPSBcIlxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbnVsIHtcXG4gIHBhZGRpbmctaW5saW5lOiAwO1xcbiAgbWFyZ2luLWJsb2NrOiAwO1xcbn1cXG5cIjtcbmNvbnN0IExpc3QgPSAvKiBAX19QVVJFX18gKi8gX2V4cG9ydF9zZmMoX3NmY19tYWluJDEsIFtbXCJzdHlsZXNcIiwgW19zdHlsZV8wJDFdXV0pO1xuY29uc3QgV1NfQ0hFQ0tFUl9FUlJPUl9FVkVOVCA9IFwidml0ZS1wbHVnaW4tY2hlY2tlcjplcnJvclwiO1xuY29uc3QgV1NfQ0hFQ0tFUl9SRUNPTk5FQ1RfRVZFTlQgPSBcInZpdGUtcGx1Z2luLWNoZWNrZXI6cmVjb25uZWN0XCI7XG5jb25zdCBvbkN1c3RvbU1lc3NhZ2UgPSBbXTtcbmNvbnN0IG9uUmVjb25uZWN0TWVzc2FnZSA9IFtdO1xuZnVuY3Rpb24gbGlzdGVuVG9DdXN0b21NZXNzYWdlKGNiKSB7XG4gIG9uQ3VzdG9tTWVzc2FnZS5wdXNoKGNiKTtcbn1cbmZ1bmN0aW9uIGxpc3RlblRvUmVjb25uZWN0TWVzc2FnZShjYikge1xuICBvblJlY29ubmVjdE1lc3NhZ2UucHVzaChjYik7XG59XG5mdW5jdGlvbiBwcmVwYXJlTGlzdGVuKCkge1xuICBjb25zdCBvbk1lc3NhZ2UgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHN3aXRjaCAoZGF0YS5ldmVudCkge1xuICAgICAgY2FzZSBXU19DSEVDS0VSX0VSUk9SX0VWRU5UOlxuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrZm4gb2Ygb25DdXN0b21NZXNzYWdlKSB7XG4gICAgICAgICAgY2FsbGJhY2tmbihkYXRhLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXU19DSEVDS0VSX1JFQ09OTkVDVF9FVkVOVDpcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFja2ZuIG9mIG9uUmVjb25uZWN0TWVzc2FnZSkge1xuICAgICAgICAgIGNhbGxiYWNrZm4oZGF0YS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG4gIHJldHVybiB7XG4gICAgc3RhcnRMaXN0ZW5pbmc6ICgpID0+IHtcbiAgICAgIGlmIChpbXBvcnQubWV0YS5ob3QpIHtcbiAgICAgICAgaW1wb3J0Lm1ldGEuaG90Lm9uKFwidml0ZS1wbHVnaW4tY2hlY2tlclwiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIG9uTWVzc2FnZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltcG9ydC5tZXRhLmhvdC5zZW5kKFwidml0ZS1wbHVnaW4tY2hlY2tlclwiLCB7IGV2ZW50OiBcInJ1bnRpbWUtbG9hZGVkXCIgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuY29uc3QgY2hlY2tlclJlc3VsdHMgPSByZWYoW10pO1xuZnVuY3Rpb24gdXBkYXRlRXJyb3JPdmVybGF5KHBheWxvYWRzKSB7XG4gIGNvbnN0IHBheWxvYWRBcnJheSA9IEFycmF5LmlzQXJyYXkocGF5bG9hZHMpID8gcGF5bG9hZHMgOiBbcGF5bG9hZHNdO1xuICBjb25zdCBuZXh0Q2hlY2tlclJlc3VsdHMgPSBbXG4gICAgLi4ucGF5bG9hZEFycmF5LFxuICAgIC4uLmNoZWNrZXJSZXN1bHRzLnZhbHVlLmZpbHRlcigoZXhpc3RDaGVja2VyUmVzdWx0KSA9PiB7XG4gICAgICByZXR1cm4gIXBheWxvYWRBcnJheS5tYXAoKHAyKSA9PiBwMi5jaGVja2VySWQpLmluY2x1ZGVzKGV4aXN0Q2hlY2tlclJlc3VsdC5jaGVja2VySWQpO1xuICAgIH0pXG4gIF07XG4gIGNoZWNrZXJSZXN1bHRzLnZhbHVlID0gbmV4dENoZWNrZXJSZXN1bHRzO1xufVxuZnVuY3Rpb24gcmVzdW1lRXJyb3JPdmVybGF5KGRhdGEpIHtcbiAgY29uc3QgcGF5bG9hZHNUb1Jlc3VtZSA9IGRhdGEubWFwKChkKSA9PiBkLmRhdGEpO1xuICB1cGRhdGVFcnJvck92ZXJsYXkocGF5bG9hZHNUb1Jlc3VtZSk7XG59XG5mdW5jdGlvbiB1c2VDaGVja2VyKCkge1xuICBjb25zdCB3cyA9IHByZXBhcmVMaXN0ZW4oKTtcbiAgbGlzdGVuVG9DdXN0b21NZXNzYWdlKHVwZGF0ZUVycm9yT3ZlcmxheSk7XG4gIGxpc3RlblRvUmVjb25uZWN0TWVzc2FnZShyZXN1bWVFcnJvck92ZXJsYXkpO1xuICB3cy5zdGFydExpc3RlbmluZygpO1xuICByZXR1cm4ge1xuICAgIGNoZWNrZXJSZXN1bHRzXG4gIH07XG59XG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJsaXN0LXNjcm9sbFwiIH07XG5jb25zdCBfc2ZjX21haW4gPSAvKiBAX19QVVJFX18gKi8gZGVmaW5lQ29tcG9uZW50KHtcbiAgLi4ue1xuICAgIGluaGVyaXRBdHRyczogZmFsc2VcbiAgfSxcbiAgX19uYW1lOiBcIkFwcC5jZVwiLFxuICBwcm9wczoge1xuICAgIGNoZWNrZXJSZXN1bHRzOiB7IHR5cGU6IEFycmF5IH0sXG4gICAgb3ZlcmxheUNvbmZpZzogeyBkZWZhdWx0OiB7fSwgdHlwZTogbnVsbCB9LFxuICAgIGJhc2U6IHsgdHlwZTogU3RyaW5nIH1cbiAgfSxcbiAgc2V0dXAoX19wcm9wcykge1xuICAgIGNvbnN0IHByb3BzID0gX19wcm9wcztcbiAgICBjb25zdCB7IGNoZWNrZXJSZXN1bHRzOiBjaGVja2VyUmVzdWx0czIgfSA9IHVzZUNoZWNrZXIoKTtcbiAgICBjb25zdCBzaG91bGRSZW5kZXIgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gY2hlY2tlclJlc3VsdHMyLnZhbHVlLnNvbWUoKHAyKSA9PiBwMi5kaWFnbm9zdGljcy5sZW5ndGggPiAwKTtcbiAgICB9KTtcbiAgICBjb25zdCBpbml0aWFsQ29sbGFwc2VkID0gcmVmKFxuICAgICAgcHJvcHM/Lm92ZXJsYXlDb25maWc/LmluaXRpYWxJc09wZW4gPT09IGZhbHNlIHx8IHByb3BzPy5vdmVybGF5Q29uZmlnPy5pbml0aWFsSXNPcGVuID09PSBcImVycm9yXCJcbiAgICApO1xuICAgIGlmIChwcm9wcz8ub3ZlcmxheUNvbmZpZz8uaW5pdGlhbElzT3BlbiA9PT0gXCJlcnJvclwiKSB7XG4gICAgICBjb25zdCB1bndhdGNoID0gd2F0Y2goY2hlY2tlclJlc3VsdHMyLCAoKSA9PiB7XG4gICAgICAgIGlmICghY2hlY2tlclJlc3VsdHMyLnZhbHVlLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hlY2tlclJlc3VsdHMyLnZhbHVlLnNvbWUoKHAyKSA9PiBwMi5kaWFnbm9zdGljcy5zb21lKChkKSA9PiBkLmxldmVsID09PSAxKSkpIHtcbiAgICAgICAgICBpbml0aWFsQ29sbGFwc2VkLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdW53YXRjaCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHVzZXJDb2xsYXBzZWQgPSByZWYodm9pZCAwKTtcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gICAgICB1c2VyQ29sbGFwc2VkLnZhbHVlID0gISh1c2VyQ29sbGFwc2VkLnZhbHVlID8/IGluaXRpYWxDb2xsYXBzZWQudmFsdWUpO1xuICAgIH07XG4gICAgY29uc3QgY29sbGFwc2VkID0gY29tcHV0ZWQoKCkgPT4gdXNlckNvbGxhcHNlZC52YWx1ZSA/PyBpbml0aWFsQ29sbGFwc2VkLnZhbHVlKTtcbiAgICByZXR1cm4gKF9jdHgsIF9jYWNoZSkgPT4ge1xuICAgICAgcmV0dXJuIHNob3VsZFJlbmRlci52YWx1ZSA/IChvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKEZyYWdtZW50LCB7IGtleTogMCB9LCBbXG4gICAgICAgIGNyZWF0ZVZOb2RlKEJhZGdlLCB7XG4gICAgICAgICAgY29sbGFwc2VkOiBjb2xsYXBzZWQudmFsdWUsXG4gICAgICAgICAgXCJjaGVja2VyLXJlc3VsdHNcIjogdW5yZWYoY2hlY2tlclJlc3VsdHMyKSxcbiAgICAgICAgICBwb3NpdGlvbjogX2N0eC5vdmVybGF5Q29uZmlnLnBvc2l0aW9uLFxuICAgICAgICAgIGJhZGdlU3R5bGU6IF9jdHgub3ZlcmxheUNvbmZpZy5iYWRnZVN0eWxlLFxuICAgICAgICAgIG9uQ2xpY2s6IHRvZ2dsZVxuICAgICAgICB9LCBudWxsLCA4LCBbXCJjb2xsYXBzZWRcIiwgXCJjaGVja2VyLXJlc3VsdHNcIiwgXCJwb3NpdGlvblwiLCBcImJhZGdlU3R5bGVcIl0pLFxuICAgICAgICBjcmVhdGVCYXNlVk5vZGUoXCJtYWluXCIsIHtcbiAgICAgICAgICBjbGFzczogbm9ybWFsaXplQ2xhc3MoW1wid2luZG93XCIsIGAke2NvbGxhcHNlZC52YWx1ZSA/IFwid2luZG93LWNvbGxhcHNlZFwiIDogXCJcIn1gXSksXG4gICAgICAgICAgc3R5bGU6IG5vcm1hbGl6ZVN0eWxlKF9jdHgub3ZlcmxheUNvbmZpZz8ucGFuZWxTdHlsZSlcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGNyZWF0ZUJhc2VWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgICAgICBjcmVhdGVWTm9kZShMaXN0LCB7XG4gICAgICAgICAgICAgIGNoZWNrZXJSZXN1bHRzOiB1bnJlZihjaGVja2VyUmVzdWx0czIpLFxuICAgICAgICAgICAgICBiYXNlOiBfY3R4LmJhc2UsXG4gICAgICAgICAgICAgIHVsU3R5bGU6IFwibWFyZ2luLWJvdHRvbTogMzZweDtcIlxuICAgICAgICAgICAgfSwgbnVsbCwgOCwgW1wiY2hlY2tlclJlc3VsdHNcIiwgXCJiYXNlXCJdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sIDYpXG4gICAgICBdLCA2NCkpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwiXCIsIHRydWUpO1xuICAgIH07XG4gIH1cbn0pO1xuY29uc3QgX3N0eWxlXzAgPSBcIlxcbjpob3N0IHtcXG4gIC0tbW9ub3NwYWNlOiAnU0ZNb25vLVJlZ3VsYXInLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAtLXJlZDogI2ZmNTU1NTtcXG4gIC0teWVsbG93OiAjZTJhYTUzO1xcbiAgLS1wdXJwbGU6ICNjZmE0ZmY7XFxuICAtLWJsdWU6ICNhNGMxZmY7XFxuICAtLWN5YW46ICMyZGQ5ZGE7XFxuICAtLWRpbTogI2M5YzljOTtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbn1cXG4ud2luZG93IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMSwgMjEsIDMzLCAwLjg1KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgei1pbmRleDogOTk5OTg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAzMCUpIDBweCAwcHggMjBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoNjMsIDc4LCA5Nik7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDEpO1xcbn1cXG4ud2luZG93LWNvbGxhcHNlZCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgxKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHM7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCkgc2NhbGUoMS4wMik7XFxufVxcbi5saXN0LXNjcm9sbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblwiO1xuY29uc3QgQXBwID0gLyogQF9fUFVSRV9fICovIF9leHBvcnRfc2ZjKF9zZmNfbWFpbiwgW1tcInN0eWxlc1wiLCBbX3N0eWxlXzBdXV0pO1xuY29uc3QgU2hhZG93RWxlbWVudCA9IC8qIEBfX1BVUkVfXyAqLyBkZWZpbmVDdXN0b21FbGVtZW50KEFwcCk7XG5jb25zdCBvdmVybGF5SWQgPSBcInZpdGUtcGx1Z2luLWNoZWNrZXItZXJyb3Itb3ZlcmxheVwiO1xuaWYgKGN1c3RvbUVsZW1lbnRzICYmICFjdXN0b21FbGVtZW50cy5nZXQob3ZlcmxheUlkKSkge1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUob3ZlcmxheUlkLCBTaGFkb3dFbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGluamVjdCh7XG4gIGJhc2UsXG4gIG92ZXJsYXlDb25maWdcbn0pIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ2aXRlLXBsdWdpbi1jaGVja2VyLWVycm9yLW92ZXJsYXlcIikpIHJldHVybjtcbiAgY29uc3Qgb3ZlcmxheUVsZSA9IG5ldyBTaGFkb3dFbGVtZW50KHtcbiAgICBiYXNlLFxuICAgIG92ZXJsYXlDb25maWdcbiAgfSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheUVsZSk7XG59XG5leHBvcnQge1xuICBpbmplY3Rcbn07XG47Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUVBLFNBQVMsUUFBUSxLQUFLO0FBQ3BCLFFBQU0sT0FBdUIsdUJBQU8sT0FBTyxJQUFJO0FBQy9DLGFBQVcsT0FBTyxJQUFJLE1BQU0sR0FBRyxFQUFHLE1BQUssR0FBRyxJQUFJO0FBQzlDLFNBQU8sQ0FBQyxRQUFRLE9BQU87QUFDekI7QUFD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