function p0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function m0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tf={exports:{}},Ni={},nf={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=Symbol.for("react.element"),h0=Symbol.for("react.portal"),y0=Symbol.for("react.fragment"),g0=Symbol.for("react.strict_mode"),v0=Symbol.for("react.profiler"),w0=Symbol.for("react.provider"),x0=Symbol.for("react.context"),S0=Symbol.for("react.forward_ref"),k0=Symbol.for("react.suspense"),E0=Symbol.for("react.memo"),C0=Symbol.for("react.lazy"),Cu=Symbol.iterator;function $0(e){return e===null||typeof e!="object"?null:(e=Cu&&e[Cu]||e["@@iterator"],typeof e=="function"?e:null)}var rf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},of=Object.assign,lf={};function ir(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||rf}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function af(){}af.prototype=ir.prototype;function ds(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||rf}var ps=ds.prototype=new af;ps.constructor=ds;of(ps,ir.prototype);ps.isPureReactComponent=!0;var $u=Array.isArray,sf=Object.prototype.hasOwnProperty,ms={current:null},uf={key:!0,ref:!0,__self:!0,__source:!0};function cf(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)sf.call(t,r)&&!uf.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:oo,type:e,key:i,ref:l,props:o,_owner:ms.current}}function _0(e,t){return{$$typeof:oo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hs(e){return typeof e=="object"&&e!==null&&e.$$typeof===oo}function P0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _u=/\/+/g;function xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?P0(""+e.key):t.toString(36)}function Lo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case oo:case h0:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+xl(l,0):r,$u(o)?(n="",e!=null&&(n=e.replace(_u,"$&/")+"/"),Lo(o,t,n,"",function(c){return c})):o!=null&&(hs(o)&&(o=_0(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(_u,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",$u(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+xl(i,a);l+=Lo(i,t,n,s,o)}else if(s=$0(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+xl(i,a++),l+=Lo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function mo(e,t,n){if(e==null)return e;var r=[],o=0;return Lo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function N0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},Mo={transition:null},z0={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Mo,ReactCurrentOwner:ms};I.Children={map:mo,forEach:function(e,t,n){mo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mo(e,function(){t++}),t},toArray:function(e){return mo(e,function(t){return t})||[]},only:function(e){if(!hs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=ir;I.Fragment=y0;I.Profiler=v0;I.PureComponent=ds;I.StrictMode=g0;I.Suspense=k0;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=of({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ms.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)sf.call(t,s)&&!uf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:oo,type:e.type,key:o,ref:i,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:x0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:w0,_context:e},e.Consumer=e};I.createElement=cf;I.createFactory=function(e){var t=cf.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:S0,render:e}};I.isValidElement=hs;I.lazy=function(e){return{$$typeof:C0,_payload:{_status:-1,_result:e},_init:N0}};I.memo=function(e,t){return{$$typeof:E0,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Mo.transition;Mo.transition={};try{e()}finally{Mo.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return Ne.current.useCallback(e,t)};I.useContext=function(e){return Ne.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};I.useEffect=function(e,t){return Ne.current.useEffect(e,t)};I.useId=function(){return Ne.current.useId()};I.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Ne.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};I.useRef=function(e){return Ne.current.useRef(e)};I.useState=function(e){return Ne.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Ne.current.useTransition()};I.version="18.2.0";nf.exports=I;var L=nf.exports;const ce=m0(L),Pu=p0({__proto__:null,default:ce},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0=L,R0=Symbol.for("react.element"),j0=Symbol.for("react.fragment"),O0=Object.prototype.hasOwnProperty,I0=T0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L0={key:!0,ref:!0,__self:!0,__source:!0};function ff(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)O0.call(t,r)&&!L0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:R0,type:e,key:i,ref:l,props:o,_owner:I0.current}}Ni.Fragment=j0;Ni.jsx=ff;Ni.jsxs=ff;tf.exports=Ni;var S=tf.exports,ia={},df={exports:{}},We={},pf={exports:{}},mf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,T){var R=_.length;_.push(T);e:for(;0<R;){var X=R-1>>>1,b=_[X];if(0<o(b,T))_[X]=T,_[R]=b,R=X;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var T=_[0],R=_.pop();if(R!==T){_[0]=R;e:for(var X=0,b=_.length,xt=b>>>1;X<xt;){var Ae=2*(X+1)-1,jt=_[Ae],De=Ae+1,Ke=_[De];if(0>o(jt,R))De<b&&0>o(Ke,jt)?(_[X]=Ke,_[De]=R,X=De):(_[X]=jt,_[Ae]=R,X=Ae);else if(De<b&&0>o(Ke,R))_[X]=Ke,_[De]=R,X=De;else break e}}return T}function o(_,T){var R=_.sortIndex-T.sortIndex;return R!==0?R:_.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],m=1,p=null,h=3,g=!1,w=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(_){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=_)r(c),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(c)}}function v(_){if(y=!1,d(_),!w)if(n(s)!==null)w=!0,an(k);else{var T=n(c);T!==null&&Xe(v,T.startTime-_)}}function k(_,T){w=!1,y&&(y=!1,f(z),z=-1),g=!0;var R=h;try{for(d(T),p=n(s);p!==null&&(!(p.expirationTime>T)||_&&!Me());){var X=p.callback;if(typeof X=="function"){p.callback=null,h=p.priorityLevel;var b=X(p.expirationTime<=T);T=e.unstable_now(),typeof b=="function"?p.callback=b:p===n(s)&&r(s),d(T)}else r(s);p=n(s)}if(p!==null)var xt=!0;else{var Ae=n(c);Ae!==null&&Xe(v,Ae.startTime-T),xt=!1}return xt}finally{p=null,h=R,g=!1}}var C=!1,x=null,z=-1,G=5,O=-1;function Me(){return!(e.unstable_now()-O<G)}function on(){if(x!==null){var _=e.unstable_now();O=_;var T=!0;try{T=x(!0,_)}finally{T?ln():(C=!1,x=null)}}else C=!1}var ln;if(typeof u=="function")ln=function(){u(on)};else if(typeof MessageChannel<"u"){var fo=new MessageChannel,vl=fo.port2;fo.port1.onmessage=on,ln=function(){vl.postMessage(null)}}else ln=function(){N(on,0)};function an(_){x=_,C||(C=!0,ln())}function Xe(_,T){z=N(function(){_(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,an(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var R=h;h=T;try{return _()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,T){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var R=h;h=_;try{return T()}finally{h=R}},e.unstable_scheduleCallback=function(_,T,R){var X=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?X+R:X):R=X,_){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=R+b,_={id:m++,callback:T,priorityLevel:_,startTime:R,expirationTime:b,sortIndex:-1},R>X?(_.sortIndex=R,t(c,_),n(s)===null&&_===n(c)&&(y?(f(z),z=-1):y=!0,Xe(v,R-X))):(_.sortIndex=b,t(s,_),w||g||(w=!0,an(k))),_},e.unstable_shouldYield=Me,e.unstable_wrapCallback=function(_){var T=h;return function(){var R=h;h=T;try{return _.apply(this,arguments)}finally{h=R}}}})(mf);pf.exports=mf;var M0=pf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf=L,He=M0;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yf=new Set,Lr={};function kn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(Lr[e]=t,e=0;e<t.length;e++)yf.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),la=Object.prototype.hasOwnProperty,A0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nu={},zu={};function D0(e){return la.call(zu,e)?!0:la.call(Nu,e)?!1:A0.test(e)?zu[e]=!0:(Nu[e]=!0,!1)}function F0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U0(e,t,n,r){if(t===null||typeof t>"u"||F0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var ys=/[\-:]([a-z])/g;function gs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ys,gs);ye[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ys,gs);ye[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ys,gs);ye[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function vs(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U0(t,n,o,r)&&(n=null),r||o===null?D0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),_n=Symbol.for("react.portal"),Pn=Symbol.for("react.fragment"),ws=Symbol.for("react.strict_mode"),aa=Symbol.for("react.profiler"),gf=Symbol.for("react.provider"),vf=Symbol.for("react.context"),xs=Symbol.for("react.forward_ref"),sa=Symbol.for("react.suspense"),ua=Symbol.for("react.suspense_list"),Ss=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),wf=Symbol.for("react.offscreen"),Tu=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=Tu&&e[Tu]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Sl;function xr(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||""}return`
`+Sl+e}var kl=!1;function El(e,t){if(!e||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xr(e):""}function B0(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function ca(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pn:return"Fragment";case _n:return"Portal";case aa:return"Profiler";case ws:return"StrictMode";case sa:return"Suspense";case ua:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vf:return(e.displayName||"Context")+".Consumer";case gf:return(e._context.displayName||"Context")+".Provider";case xs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ss:return t=e.displayName||null,t!==null?t:ca(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return ca(e(t))}catch{}}return null}function V0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ca(t);case 8:return t===ws?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function H0(e){var t=xf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yo(e){e._valueTracker||(e._valueTracker=H0(e))}function Sf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fa(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ru(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kf(e,t){t=t.checked,t!=null&&vs(e,"checked",t,!1)}function da(e,t){kf(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pa(e,t.type,n):t.hasOwnProperty("defaultValue")&&pa(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ju(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pa(e,t,n){(t!=="number"||ei(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sr=Array.isArray;function Fn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ma(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Sr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function Ef(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Iu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ha(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var go,$f=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=go.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W0=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(e){W0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$r[t]=$r[e]})});function _f(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$r.hasOwnProperty(e)&&$r[e]?(""+t).trim():t+"px"}function Pf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=_f(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Y0=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ya(e,t){if(t){if(Y0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var va=null;function ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wa=null,Un=null,Bn=null;function Lu(e){if(e=ao(e)){if(typeof wa!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Oi(t),wa(e.stateNode,e.type,t))}}function Nf(e){Un?Bn?Bn.push(e):Bn=[e]:Un=e}function zf(){if(Un){var e=Un,t=Bn;if(Bn=Un=null,Lu(e),t)for(e=0;e<t.length;e++)Lu(t[e])}}function Tf(e,t){return e(t)}function Rf(){}var Cl=!1;function jf(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Tf(e,t,n)}finally{Cl=!1,(Un!==null||Bn!==null)&&(Rf(),zf())}}function Ar(e,t){var n=e.stateNode;if(n===null)return null;var r=Oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var xa=!1;if(Pt)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){xa=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{xa=!1}function Q0(e,t,n,r,o,i,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var _r=!1,ti=null,ni=!1,Sa=null,X0={onError:function(e){_r=!0,ti=e}};function K0(e,t,n,r,o,i,l,a,s){_r=!1,ti=null,Q0.apply(X0,arguments)}function G0(e,t,n,r,o,i,l,a,s){if(K0.apply(this,arguments),_r){if(_r){var c=ti;_r=!1,ti=null}else throw Error(E(198));ni||(ni=!0,Sa=c)}}function En(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Of(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mu(e){if(En(e)!==e)throw Error(E(188))}function Z0(e){var t=e.alternate;if(!t){if(t=En(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Mu(o),e;if(i===r)return Mu(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function If(e){return e=Z0(e),e!==null?Lf(e):null}function Lf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lf(e);if(t!==null)return t;e=e.sibling}return null}var Mf=He.unstable_scheduleCallback,Au=He.unstable_cancelCallback,J0=He.unstable_shouldYield,q0=He.unstable_requestPaint,te=He.unstable_now,b0=He.unstable_getCurrentPriorityLevel,Es=He.unstable_ImmediatePriority,Af=He.unstable_UserBlockingPriority,ri=He.unstable_NormalPriority,em=He.unstable_LowPriority,Df=He.unstable_IdlePriority,zi=null,gt=null;function tm(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:om,nm=Math.log,rm=Math.LN2;function om(e){return e>>>=0,e===0?32:31-(nm(e)/rm|0)|0}var vo=64,wo=4194304;function kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function oi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=kr(a):(i&=l,i!==0&&(r=kr(i)))}else l=n&~o,l!==0?r=kr(l):i!==0&&(r=kr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),o=1<<n,r|=e[n],t&=~o;return r}function im(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-at(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=im(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ff(){var e=vo;return vo<<=1,!(vo&4194240)&&(vo=64),e}function $l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function io(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function am(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Cs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function Uf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bf,$s,Vf,Hf,Wf,Ea=!1,xo=[],Ht=null,Wt=null,Yt=null,Dr=new Map,Fr=new Map,Ft=[],sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Du(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":Dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(t.pointerId)}}function dr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ao(t),t!==null&&$s(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function um(e,t,n,r,o){switch(t){case"focusin":return Ht=dr(Ht,e,t,n,r,o),!0;case"dragenter":return Wt=dr(Wt,e,t,n,r,o),!0;case"mouseover":return Yt=dr(Yt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Dr.set(i,dr(Dr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Fr.set(i,dr(Fr.get(i)||null,e,t,n,r,o)),!0}return!1}function Yf(e){var t=cn(e.target);if(t!==null){var n=En(t);if(n!==null){if(t=n.tag,t===13){if(t=Of(n),t!==null){e.blockedOn=t,Wf(e.priority,function(){Vf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);va=r,n.target.dispatchEvent(r),va=null}else return t=ao(n),t!==null&&$s(t),e.blockedOn=n,!1;t.shift()}return!0}function Fu(e,t,n){Ao(e)&&n.delete(t)}function cm(){Ea=!1,Ht!==null&&Ao(Ht)&&(Ht=null),Wt!==null&&Ao(Wt)&&(Wt=null),Yt!==null&&Ao(Yt)&&(Yt=null),Dr.forEach(Fu),Fr.forEach(Fu)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ea||(Ea=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,cm)))}function Ur(e){function t(o){return pr(o,e)}if(0<xo.length){pr(xo[0],e);for(var n=1;n<xo.length;n++){var r=xo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&pr(Ht,e),Wt!==null&&pr(Wt,e),Yt!==null&&pr(Yt,e),Dr.forEach(t),Fr.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)Yf(n),n.blockedOn===null&&Ft.shift()}var Vn=Rt.ReactCurrentBatchConfig,ii=!0;function fm(e,t,n,r){var o=U,i=Vn.transition;Vn.transition=null;try{U=1,_s(e,t,n,r)}finally{U=o,Vn.transition=i}}function dm(e,t,n,r){var o=U,i=Vn.transition;Vn.transition=null;try{U=4,_s(e,t,n,r)}finally{U=o,Vn.transition=i}}function _s(e,t,n,r){if(ii){var o=Ca(e,t,n,r);if(o===null)Ll(e,t,r,li,n),Du(e,r);else if(um(o,e,t,n,r))r.stopPropagation();else if(Du(e,r),t&4&&-1<sm.indexOf(e)){for(;o!==null;){var i=ao(o);if(i!==null&&Bf(i),i=Ca(e,t,n,r),i===null&&Ll(e,t,r,li,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ll(e,t,r,null,n)}}var li=null;function Ca(e,t,n,r){if(li=null,e=ks(r),e=cn(e),e!==null)if(t=En(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Of(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return li=e,null}function Qf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b0()){case Es:return 1;case Af:return 4;case ri:case em:return 16;case Df:return 536870912;default:return 16}default:return 16}}var Bt=null,Ps=null,Do=null;function Xf(){if(Do)return Do;var e,t=Ps,n=t.length,r,o="value"in Bt?Bt.value:Bt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Do=o.slice(e,1<r?1-r:void 0)}function Fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function So(){return!0}function Uu(){return!1}function Ye(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?So:Uu,this.isPropagationStopped=Uu,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=Ye(lr),lo=q({},lr,{view:0,detail:0}),pm=Ye(lo),_l,Pl,mr,Ti=q({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mr&&(mr&&e.type==="mousemove"?(_l=e.screenX-mr.screenX,Pl=e.screenY-mr.screenY):Pl=_l=0,mr=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),Bu=Ye(Ti),mm=q({},Ti,{dataTransfer:0}),hm=Ye(mm),ym=q({},lo,{relatedTarget:0}),Nl=Ye(ym),gm=q({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),vm=Ye(gm),wm=q({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xm=Ye(wm),Sm=q({},lr,{data:0}),Vu=Ye(Sm),km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $m(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cm[e])?!!t[e]:!1}function zs(){return $m}var _m=q({},lo,{key:function(e){if(e.key){var t=km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Em[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zs,charCode:function(e){return e.type==="keypress"?Fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pm=Ye(_m),Nm=q({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hu=Ye(Nm),zm=q({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zs}),Tm=Ye(zm),Rm=q({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jm=Ye(Rm),Om=q({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=Ye(Om),Lm=[9,13,27,32],Ts=Pt&&"CompositionEvent"in window,Pr=null;Pt&&"documentMode"in document&&(Pr=document.documentMode);var Mm=Pt&&"TextEvent"in window&&!Pr,Kf=Pt&&(!Ts||Pr&&8<Pr&&11>=Pr),Wu=String.fromCharCode(32),Yu=!1;function Gf(e,t){switch(e){case"keyup":return Lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function Am(e,t){switch(e){case"compositionend":return Zf(t);case"keypress":return t.which!==32?null:(Yu=!0,Wu);case"textInput":return e=t.data,e===Wu&&Yu?null:e;default:return null}}function Dm(e,t){if(Nn)return e==="compositionend"||!Ts&&Gf(e,t)?(e=Xf(),Do=Ps=Bt=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kf&&t.locale!=="ko"?null:t.data;default:return null}}var Fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fm[e.type]:t==="textarea"}function Jf(e,t,n,r){Nf(r),t=ai(t,"onChange"),0<t.length&&(n=new Ns("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nr=null,Br=null;function Um(e){sd(e,0)}function Ri(e){var t=Rn(e);if(Sf(t))return e}function Bm(e,t){if(e==="change")return t}var qf=!1;if(Pt){var zl;if(Pt){var Tl="oninput"in document;if(!Tl){var Xu=document.createElement("div");Xu.setAttribute("oninput","return;"),Tl=typeof Xu.oninput=="function"}zl=Tl}else zl=!1;qf=zl&&(!document.documentMode||9<document.documentMode)}function Ku(){Nr&&(Nr.detachEvent("onpropertychange",bf),Br=Nr=null)}function bf(e){if(e.propertyName==="value"&&Ri(Br)){var t=[];Jf(t,Br,e,ks(e)),jf(Um,t)}}function Vm(e,t,n){e==="focusin"?(Ku(),Nr=t,Br=n,Nr.attachEvent("onpropertychange",bf)):e==="focusout"&&Ku()}function Hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ri(Br)}function Wm(e,t){if(e==="click")return Ri(t)}function Ym(e,t){if(e==="input"||e==="change")return Ri(t)}function Qm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Qm;function Vr(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!la.call(t,o)||!ct(e[o],t[o]))return!1}return!0}function Gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zu(e,t){var n=Gu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gu(n)}}function ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function td(){for(var e=window,t=ei();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ei(e.document)}return t}function Rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xm(e){var t=td(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ed(n.ownerDocument.documentElement,n)){if(r!==null&&Rs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Zu(n,i);var l=Zu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Km=Pt&&"documentMode"in document&&11>=document.documentMode,zn=null,$a=null,zr=null,_a=!1;function Ju(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_a||zn==null||zn!==ei(r)||(r=zn,"selectionStart"in r&&Rs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Vr(zr,r)||(zr=r,r=ai($a,"onSelect"),0<r.length&&(t=new Ns("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function ko(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tn={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},Rl={},nd={};Pt&&(nd=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function ji(e){if(Rl[e])return Rl[e];if(!Tn[e])return e;var t=Tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nd)return Rl[e]=t[n];return e}var rd=ji("animationend"),od=ji("animationiteration"),id=ji("animationstart"),ld=ji("transitionend"),ad=new Map,qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){ad.set(e,t),kn(t,[e])}for(var jl=0;jl<qu.length;jl++){var Ol=qu[jl],Gm=Ol.toLowerCase(),Zm=Ol[0].toUpperCase()+Ol.slice(1);tn(Gm,"on"+Zm)}tn(rd,"onAnimationEnd");tn(od,"onAnimationIteration");tn(id,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(ld,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function bu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,G0(r,t,void 0,e),e.currentTarget=null}function sd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;bu(o,a,c),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;bu(o,a,c),i=s}}}if(ni)throw e=Sa,ni=!1,Sa=null,e}function W(e,t){var n=t[Ra];n===void 0&&(n=t[Ra]=new Set);var r=e+"__bubble";n.has(r)||(ud(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),ud(n,e,r,t)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Eo]){e[Eo]=!0,yf.forEach(function(n){n!=="selectionchange"&&(Jm.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Eo]||(t[Eo]=!0,Il("selectionchange",!1,t))}}function ud(e,t,n,r){switch(Qf(t)){case 1:var o=fm;break;case 4:o=dm;break;default:o=_s}n=o.bind(null,t,n,e),o=void 0,!xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=cn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}jf(function(){var c=i,m=ks(n),p=[];e:{var h=ad.get(e);if(h!==void 0){var g=Ns,w=e;switch(e){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":g=Pm;break;case"focusin":w="focus",g=Nl;break;case"focusout":w="blur",g=Nl;break;case"beforeblur":case"afterblur":g=Nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Tm;break;case rd:case od:case id:g=vm;break;case ld:g=jm;break;case"scroll":g=pm;break;case"wheel":g=Im;break;case"copy":case"cut":case"paste":g=xm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Hu}var y=(t&4)!==0,N=!y&&e==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var u=c,d;u!==null;){d=u;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=Ar(u,f),v!=null&&y.push(Wr(u,v,d)))),N)break;u=u.return}0<y.length&&(h=new g(h,w,null,n,m),p.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==va&&(w=n.relatedTarget||n.fromElement)&&(cn(w)||w[Nt]))break e;if((g||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=c,w=w?cn(w):null,w!==null&&(N=En(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(y=Bu,v="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Hu,v="onPointerLeave",f="onPointerEnter",u="pointer"),N=g==null?h:Rn(g),d=w==null?h:Rn(w),h=new y(v,u+"leave",g,n,m),h.target=N,h.relatedTarget=d,v=null,cn(m)===c&&(y=new y(f,u+"enter",w,n,m),y.target=d,y.relatedTarget=N,v=y),N=v,g&&w)t:{for(y=g,f=w,u=0,d=y;d;d=Cn(d))u++;for(d=0,v=f;v;v=Cn(v))d++;for(;0<u-d;)y=Cn(y),u--;for(;0<d-u;)f=Cn(f),d--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=Cn(y),f=Cn(f)}y=null}else y=null;g!==null&&ec(p,h,g,y,!1),w!==null&&N!==null&&ec(p,N,w,y,!0)}}e:{if(h=c?Rn(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=Bm;else if(Qu(h))if(qf)k=Ym;else{k=Hm;var C=Vm}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Wm);if(k&&(k=k(e,c))){Jf(p,k,n,m);break e}C&&C(e,h,c),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&pa(h,"number",h.value)}switch(C=c?Rn(c):window,e){case"focusin":(Qu(C)||C.contentEditable==="true")&&(zn=C,$a=c,zr=null);break;case"focusout":zr=$a=zn=null;break;case"mousedown":_a=!0;break;case"contextmenu":case"mouseup":case"dragend":_a=!1,Ju(p,n,m);break;case"selectionchange":if(Km)break;case"keydown":case"keyup":Ju(p,n,m)}var x;if(Ts)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Nn?Gf(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Kf&&n.locale!=="ko"&&(Nn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Nn&&(x=Xf()):(Bt=m,Ps="value"in Bt?Bt.value:Bt.textContent,Nn=!0)),C=ai(c,z),0<C.length&&(z=new Vu(z,e,null,n,m),p.push({event:z,listeners:C}),x?z.data=x:(x=Zf(n),x!==null&&(z.data=x)))),(x=Mm?Am(e,n):Dm(e,n))&&(c=ai(c,"onBeforeInput"),0<c.length&&(m=new Vu("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=x))}sd(p,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ai(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ar(e,n),i!=null&&r.unshift(Wr(e,i,o)),i=Ar(e,t),i!=null&&r.push(Wr(e,i,o))),e=e.return}return r}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ec(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=Ar(n,i),s!=null&&l.unshift(Wr(n,s,a))):o||(s=Ar(n,i),s!=null&&l.push(Wr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var qm=/\r\n?/g,bm=/\u0000|\uFFFD/g;function tc(e){return(typeof e=="string"?e:""+e).replace(qm,`
`).replace(bm,"")}function Co(e,t,n){if(t=tc(t),tc(e)!==t&&n)throw Error(E(425))}function si(){}var Pa=null,Na=null;function za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,e1=typeof clearTimeout=="function"?clearTimeout:void 0,nc=typeof Promise=="function"?Promise:void 0,t1=typeof queueMicrotask=="function"?queueMicrotask:typeof nc<"u"?function(e){return nc.resolve(null).then(e).catch(n1)}:Ta;function n1(e){setTimeout(function(){throw e})}function Ml(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ur(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ar=Math.random().toString(36).slice(2),yt="__reactFiber$"+ar,Yr="__reactProps$"+ar,Nt="__reactContainer$"+ar,Ra="__reactEvents$"+ar,r1="__reactListeners$"+ar,o1="__reactHandles$"+ar;function cn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rc(e);e!==null;){if(n=e[yt])return n;e=rc(e)}return t}e=n,n=e.parentNode}return null}function ao(e){return e=e[yt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Oi(e){return e[Yr]||null}var ja=[],jn=-1;function nn(e){return{current:e}}function Q(e){0>jn||(e.current=ja[jn],ja[jn]=null,jn--)}function H(e,t){jn++,ja[jn]=e.current,e.current=t}var en={},Ee=nn(en),je=nn(!1),gn=en;function Xn(e,t){var n=e.type.contextTypes;if(!n)return en;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oe(e){return e=e.childContextTypes,e!=null}function ui(){Q(je),Q(Ee)}function oc(e,t,n){if(Ee.current!==en)throw Error(E(168));H(Ee,t),H(je,n)}function cd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,V0(e)||"Unknown",o));return q({},n,r)}function ci(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,gn=Ee.current,H(Ee,e),H(je,je.current),!0}function ic(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=cd(e,t,gn),r.__reactInternalMemoizedMergedChildContext=e,Q(je),Q(Ee),H(Ee,e)):Q(je),H(je,n)}var Et=null,Ii=!1,Al=!1;function fd(e){Et===null?Et=[e]:Et.push(e)}function i1(e){Ii=!0,fd(e)}function rn(){if(!Al&&Et!==null){Al=!0;var e=0,t=U;try{var n=Et;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Et=null,Ii=!1}catch(o){throw Et!==null&&(Et=Et.slice(e+1)),Mf(Es,rn),o}finally{U=t,Al=!1}}return null}var On=[],In=0,fi=null,di=0,Ge=[],Ze=0,vn=null,Ct=1,$t="";function sn(e,t){On[In++]=di,On[In++]=fi,fi=e,di=t}function dd(e,t,n){Ge[Ze++]=Ct,Ge[Ze++]=$t,Ge[Ze++]=vn,vn=e;var r=Ct;e=$t;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ct=1<<32-at(t)+o|n<<o|r,$t=i+e}else Ct=1<<i|n<<o|r,$t=e}function js(e){e.return!==null&&(sn(e,1),dd(e,1,0))}function Os(e){for(;e===fi;)fi=On[--In],On[In]=null,di=On[--In],On[In]=null;for(;e===vn;)vn=Ge[--Ze],Ge[Ze]=null,$t=Ge[--Ze],Ge[Ze]=null,Ct=Ge[--Ze],Ge[Ze]=null}var Be=null,Ue=null,K=!1,lt=null;function pd(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Ue=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:Ct,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Ue=null,!0):!1;default:return!1}}function Oa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ia(e){if(K){var t=Ue;if(t){var n=t;if(!lc(e,t)){if(Oa(e))throw Error(E(418));t=Qt(n.nextSibling);var r=Be;t&&lc(e,t)?pd(r,n):(e.flags=e.flags&-4097|2,K=!1,Be=e)}}else{if(Oa(e))throw Error(E(418));e.flags=e.flags&-4097|2,K=!1,Be=e}}}function ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function $o(e){if(e!==Be)return!1;if(!K)return ac(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!za(e.type,e.memoizedProps)),t&&(t=Ue)){if(Oa(e))throw md(),Error(E(418));for(;t;)pd(e,t),t=Qt(t.nextSibling)}if(ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=Be?Qt(e.stateNode.nextSibling):null;return!0}function md(){for(var e=Ue;e;)e=Qt(e.nextSibling)}function Kn(){Ue=Be=null,K=!1}function Is(e){lt===null?lt=[e]:lt.push(e)}var l1=Rt.ReactCurrentBatchConfig;function ot(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var pi=nn(null),mi=null,Ln=null,Ls=null;function Ms(){Ls=Ln=mi=null}function As(e){var t=pi.current;Q(pi),e._currentValue=t}function La(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hn(e,t){mi=e,Ls=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if(Ls!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(mi===null)throw Error(E(308));Ln=e,mi.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var fn=null;function Ds(e){fn===null?fn=[e]:fn.push(e)}function hd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ds(t)):(n.next=o.next,o.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function Fs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,zt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ds(r)):(t.next=o.next,o.next=t),r.interleaved=t,zt(e,n)}function Uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cs(e,n)}}function sc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hi(e,t,n,r){var o=e.updateQueue;Dt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,m=c=s=null,a=i;do{var h=a.lane,g=a.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(h=t,g=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(g,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,h=typeof w=="function"?w.call(g,p,h):w,h==null)break e;p=q({},p,h);break e;case 2:Dt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=g,s=p):m=m.next=g,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(m===null&&(s=p),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);xn|=l,e.lanes=l,e.memoizedState=p}}function uc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var gd=new hf.Component().refs;function Ma(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Li={isMounted:function(e){return(e=e._reactInternals)?En(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=Gt(e),i=_t(r,o);i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,o),t!==null&&(st(t,e,o,r),Uo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=Gt(e),i=_t(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,o),t!==null&&(st(t,e,o,r),Uo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=Gt(e),o=_t(n,r);o.tag=2,t!=null&&(o.callback=t),t=Xt(e,o,r),t!==null&&(st(t,e,r,n),Uo(t,e,r))}};function cc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,r)||!Vr(o,i):!0}function vd(e,t,n){var r=!1,o=en,i=t.contextType;return typeof i=="object"&&i!==null?i=be(i):(o=Oe(t)?gn:Ee.current,r=t.contextTypes,i=(r=r!=null)?Xn(e,o):en),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function fc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Li.enqueueReplaceState(t,t.state,null)}function Aa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=gd,Fs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=be(i):(i=Oe(t)?gn:Ee.current,o.context=Xn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ma(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Li.enqueueReplaceState(o,o.state,null),hi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===gd&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function _o(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dc(e){var t=e._init;return t(e._payload)}function wd(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Zt(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,d,v){return u===null||u.tag!==6?(u=Wl(d,f.mode,v),u.return=f,u):(u=o(u,d),u.return=f,u)}function s(f,u,d,v){var k=d.type;return k===Pn?m(f,u,d.props.children,v,d.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===At&&dc(k)===u.type)?(v=o(u,d.props),v.ref=hr(f,u,d),v.return=f,v):(v=Qo(d.type,d.key,d.props,null,f.mode,v),v.ref=hr(f,u,d),v.return=f,v)}function c(f,u,d,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Yl(d,f.mode,v),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function m(f,u,d,v,k){return u===null||u.tag!==7?(u=hn(d,f.mode,v,k),u.return=f,u):(u=o(u,d),u.return=f,u)}function p(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Wl(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ho:return d=Qo(u.type,u.key,u.props,null,f.mode,d),d.ref=hr(f,null,u),d.return=f,d;case _n:return u=Yl(u,f.mode,d),u.return=f,u;case At:var v=u._init;return p(f,v(u._payload),d)}if(Sr(u)||cr(u))return u=hn(u,f.mode,d,null),u.return=f,u;_o(f,u)}return null}function h(f,u,d,v){var k=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return k!==null?null:a(f,u,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ho:return d.key===k?s(f,u,d,v):null;case _n:return d.key===k?c(f,u,d,v):null;case At:return k=d._init,h(f,u,k(d._payload),v)}if(Sr(d)||cr(d))return k!==null?null:m(f,u,d,v,null);_o(f,d)}return null}function g(f,u,d,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,a(u,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ho:return f=f.get(v.key===null?d:v.key)||null,s(u,f,v,k);case _n:return f=f.get(v.key===null?d:v.key)||null,c(u,f,v,k);case At:var C=v._init;return g(f,u,d,C(v._payload),k)}if(Sr(v)||cr(v))return f=f.get(d)||null,m(u,f,v,k,null);_o(u,v)}return null}function w(f,u,d,v){for(var k=null,C=null,x=u,z=u=0,G=null;x!==null&&z<d.length;z++){x.index>z?(G=x,x=null):G=x.sibling;var O=h(f,x,d[z],v);if(O===null){x===null&&(x=G);break}e&&x&&O.alternate===null&&t(f,x),u=i(O,u,z),C===null?k=O:C.sibling=O,C=O,x=G}if(z===d.length)return n(f,x),K&&sn(f,z),k;if(x===null){for(;z<d.length;z++)x=p(f,d[z],v),x!==null&&(u=i(x,u,z),C===null?k=x:C.sibling=x,C=x);return K&&sn(f,z),k}for(x=r(f,x);z<d.length;z++)G=g(x,f,z,d[z],v),G!==null&&(e&&G.alternate!==null&&x.delete(G.key===null?z:G.key),u=i(G,u,z),C===null?k=G:C.sibling=G,C=G);return e&&x.forEach(function(Me){return t(f,Me)}),K&&sn(f,z),k}function y(f,u,d,v){var k=cr(d);if(typeof k!="function")throw Error(E(150));if(d=k.call(d),d==null)throw Error(E(151));for(var C=k=null,x=u,z=u=0,G=null,O=d.next();x!==null&&!O.done;z++,O=d.next()){x.index>z?(G=x,x=null):G=x.sibling;var Me=h(f,x,O.value,v);if(Me===null){x===null&&(x=G);break}e&&x&&Me.alternate===null&&t(f,x),u=i(Me,u,z),C===null?k=Me:C.sibling=Me,C=Me,x=G}if(O.done)return n(f,x),K&&sn(f,z),k;if(x===null){for(;!O.done;z++,O=d.next())O=p(f,O.value,v),O!==null&&(u=i(O,u,z),C===null?k=O:C.sibling=O,C=O);return K&&sn(f,z),k}for(x=r(f,x);!O.done;z++,O=d.next())O=g(x,f,z,O.value,v),O!==null&&(e&&O.alternate!==null&&x.delete(O.key===null?z:O.key),u=i(O,u,z),C===null?k=O:C.sibling=O,C=O);return e&&x.forEach(function(on){return t(f,on)}),K&&sn(f,z),k}function N(f,u,d,v){if(typeof d=="object"&&d!==null&&d.type===Pn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ho:e:{for(var k=d.key,C=u;C!==null;){if(C.key===k){if(k=d.type,k===Pn){if(C.tag===7){n(f,C.sibling),u=o(C,d.props.children),u.return=f,f=u;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===At&&dc(k)===C.type){n(f,C.sibling),u=o(C,d.props),u.ref=hr(f,C,d),u.return=f,f=u;break e}n(f,C);break}else t(f,C);C=C.sibling}d.type===Pn?(u=hn(d.props.children,f.mode,v,d.key),u.return=f,f=u):(v=Qo(d.type,d.key,d.props,null,f.mode,v),v.ref=hr(f,u,d),v.return=f,f=v)}return l(f);case _n:e:{for(C=d.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Yl(d,f.mode,v),u.return=f,f=u}return l(f);case At:return C=d._init,N(f,u,C(d._payload),v)}if(Sr(d))return w(f,u,d,v);if(cr(d))return y(f,u,d,v);_o(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=Wl(d,f.mode,v),u.return=f,f=u),l(f)):n(f,u)}return N}var Gn=wd(!0),xd=wd(!1),so={},vt=nn(so),Qr=nn(so),Xr=nn(so);function dn(e){if(e===so)throw Error(E(174));return e}function Us(e,t){switch(H(Xr,t),H(Qr,e),H(vt,so),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ha(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ha(t,e)}Q(vt),H(vt,t)}function Zn(){Q(vt),Q(Qr),Q(Xr)}function Sd(e){dn(Xr.current);var t=dn(vt.current),n=ha(t,e.type);t!==n&&(H(Qr,e),H(vt,n))}function Bs(e){Qr.current===e&&(Q(vt),Q(Qr))}var Z=nn(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dl=[];function Vs(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var Bo=Rt.ReactCurrentDispatcher,Fl=Rt.ReactCurrentBatchConfig,wn=0,J=null,ie=null,se=null,gi=!1,Tr=!1,Kr=0,a1=0;function ve(){throw Error(E(321))}function Hs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Ws(e,t,n,r,o,i){if(wn=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Bo.current=e===null||e.memoizedState===null?f1:d1,e=n(r,o),Tr){i=0;do{if(Tr=!1,Kr=0,25<=i)throw Error(E(301));i+=1,se=ie=null,t.updateQueue=null,Bo.current=p1,e=n(r,o)}while(Tr)}if(Bo.current=vi,t=ie!==null&&ie.next!==null,wn=0,se=ie=J=null,gi=!1,t)throw Error(E(300));return e}function Ys(){var e=Kr!==0;return Kr=0,e}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?J.memoizedState=se=e:se=se.next=e,se}function et(){if(ie===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=se===null?J.memoizedState:se.next;if(t!==null)se=t,ie=e;else{if(e===null)throw Error(E(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},se===null?J.memoizedState=se=e:se=se.next=e}return se}function Gr(e,t){return typeof t=="function"?t(e):t}function Ul(e){var t=et(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,c=i;do{var m=c.lane;if((wn&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,J.lanes|=m,xn|=m}c=c.next}while(c!==null&&c!==i);s===null?l=r:s.next=a,ct(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,J.lanes|=i,xn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=et(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ct(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function kd(){}function Ed(e,t){var n=J,r=et(),o=t(),i=!ct(r.memoizedState,o);if(i&&(r.memoizedState=o,Re=!0),r=r.queue,Qs(_d.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Zr(9,$d.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(E(349));wn&30||Cd(n,t,o)}return o}function Cd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $d(e,t,n,r){t.value=n,t.getSnapshot=r,Pd(t)&&Nd(e)}function _d(e,t,n){return n(function(){Pd(t)&&Nd(e)})}function Pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Nd(e){var t=zt(e,1);t!==null&&st(t,e,1,-1)}function pc(e){var t=dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},t.queue=e,e=e.dispatch=c1.bind(null,J,e),[t.memoizedState,e]}function Zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zd(){return et().memoizedState}function Vo(e,t,n,r){var o=dt();J.flags|=e,o.memoizedState=Zr(1|t,n,void 0,r===void 0?null:r)}function Mi(e,t,n,r){var o=et();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&Hs(r,l.deps)){o.memoizedState=Zr(t,n,i,r);return}}J.flags|=e,o.memoizedState=Zr(1|t,n,i,r)}function mc(e,t){return Vo(8390656,8,e,t)}function Qs(e,t){return Mi(2048,8,e,t)}function Td(e,t){return Mi(4,2,e,t)}function Rd(e,t){return Mi(4,4,e,t)}function jd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Od(e,t,n){return n=n!=null?n.concat([e]):null,Mi(4,4,jd.bind(null,t,e),n)}function Xs(){}function Id(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ld(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Md(e,t,n){return wn&21?(ct(n,t)||(n=Ff(),J.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function s1(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),t()}finally{U=n,Fl.transition=r}}function Ad(){return et().memoizedState}function u1(e,t,n){var r=Gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dd(e))Fd(t,n);else if(n=hd(e,t,n,r),n!==null){var o=Pe();st(n,e,r,o),Ud(n,t,r)}}function c1(e,t,n){var r=Gt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dd(e))Fd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,ct(a,l)){var s=t.interleaved;s===null?(o.next=o,Ds(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=hd(e,t,o,r),n!==null&&(o=Pe(),st(n,e,r,o),Ud(n,t,r))}}function Dd(e){var t=e.alternate;return e===J||t!==null&&t===J}function Fd(e,t){Tr=gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ud(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cs(e,n)}}var vi={readContext:be,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},f1={readContext:be,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:mc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4194308,4,jd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vo(4,2,e,t)},useMemo:function(e,t){var n=dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=u1.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:pc,useDebugValue:Xs,useDeferredValue:function(e){return dt().memoizedState=e},useTransition:function(){var e=pc(!1),t=e[0];return e=s1.bind(null,e[1]),dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,o=dt();if(K){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),fe===null)throw Error(E(349));wn&30||Cd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,mc(_d.bind(null,r,i,e),[e]),r.flags|=2048,Zr(9,$d.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=dt(),t=fe.identifierPrefix;if(K){var n=$t,r=Ct;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=a1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},d1={readContext:be,useCallback:Id,useContext:be,useEffect:Qs,useImperativeHandle:Od,useInsertionEffect:Td,useLayoutEffect:Rd,useMemo:Ld,useReducer:Ul,useRef:zd,useState:function(){return Ul(Gr)},useDebugValue:Xs,useDeferredValue:function(e){var t=et();return Md(t,ie.memoizedState,e)},useTransition:function(){var e=Ul(Gr)[0],t=et().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:Ed,useId:Ad,unstable_isNewReconciler:!1},p1={readContext:be,useCallback:Id,useContext:be,useEffect:Qs,useImperativeHandle:Od,useInsertionEffect:Td,useLayoutEffect:Rd,useMemo:Ld,useReducer:Bl,useRef:zd,useState:function(){return Bl(Gr)},useDebugValue:Xs,useDeferredValue:function(e){var t=et();return ie===null?t.memoizedState=e:Md(t,ie.memoizedState,e)},useTransition:function(){var e=Bl(Gr)[0],t=et().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:Ed,useId:Ad,unstable_isNewReconciler:!1};function Jn(e,t){try{var n="",r=t;do n+=B0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Da(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var m1=typeof WeakMap=="function"?WeakMap:Map;function Bd(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xi||(xi=!0,Ka=r),Da(e,t)},n}function Vd(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Da(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Da(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function hc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new m1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=N1.bind(null,e,t,n),t.then(e,e))}function yc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e)}var h1=Rt.ReactCurrentOwner,Re=!1;function $e(e,t,n,r){t.child=e===null?xd(t,null,n,r):Gn(t,e.child,n,r)}function vc(e,t,n,r,o){n=n.render;var i=t.ref;return Hn(t,o),r=Ws(e,t,n,r,i,o),n=Ys(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(K&&n&&js(t),t.flags|=1,$e(e,t,r,o),t.child)}function wc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!tu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Hd(e,t,i,r,o)):(e=Qo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Vr,n(l,r)&&e.ref===t.ref)return Tt(e,t,o)}return t.flags|=1,e=Zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Hd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Vr(i,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Tt(e,t,o)}return Fa(e,t,n,r,o)}function Wd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(An,Fe),Fe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(An,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(An,Fe),Fe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(An,Fe),Fe|=r;return $e(e,t,o,n),t.child}function Yd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fa(e,t,n,r,o){var i=Oe(n)?gn:Ee.current;return i=Xn(t,i),Hn(t,o),n=Ws(e,t,n,r,i,o),r=Ys(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(K&&r&&js(t),t.flags|=1,$e(e,t,n,o),t.child)}function xc(e,t,n,r,o){if(Oe(n)){var i=!0;ci(t)}else i=!1;if(Hn(t,o),t.stateNode===null)Ho(e,t),vd(t,n,r),Aa(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=be(c):(c=Oe(n)?gn:Ee.current,c=Xn(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&fc(t,l,r,c),Dt=!1;var h=t.memoizedState;l.state=h,hi(t,r,l,o),s=t.memoizedState,a!==r||h!==s||je.current||Dt?(typeof m=="function"&&(Ma(t,n,m,r),s=t.memoizedState),(a=Dt||cc(t,n,a,r,h,s,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,yd(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ot(t.type,a),l.props=c,p=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=be(s):(s=Oe(n)?gn:Ee.current,s=Xn(t,s));var g=n.getDerivedStateFromProps;(m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||h!==s)&&fc(t,l,r,s),Dt=!1,h=t.memoizedState,l.state=h,hi(t,r,l,o);var w=t.memoizedState;a!==p||h!==w||je.current||Dt?(typeof g=="function"&&(Ma(t,n,g,r),w=t.memoizedState),(c=Dt||cc(t,n,c,r,h,w,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ua(e,t,n,r,i,o)}function Ua(e,t,n,r,o,i){Yd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ic(t,n,!1),Tt(e,t,i);r=t.stateNode,h1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Gn(t,e.child,null,i),t.child=Gn(t,null,a,i)):$e(e,t,a,i),t.memoizedState=r.state,o&&ic(t,n,!0),t.child}function Qd(e){var t=e.stateNode;t.pendingContext?oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oc(e,t.context,!1),Us(e,t.containerInfo)}function Sc(e,t,n,r,o){return Kn(),Is(o),t.flags|=256,$e(e,t,n,r),t.child}var Ba={dehydrated:null,treeContext:null,retryLane:0};function Va(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xd(e,t,n){var r=t.pendingProps,o=Z.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(Z,o&1),e===null)return Ia(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Fi(l,r,0,null),e=hn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Va(n),t.memoizedState=Ba,e):Ks(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return y1(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Zt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Zt(a,i):(i=hn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Va(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ba,r}return i=e.child,e=i.sibling,r=Zt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ks(e,t){return t=Fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Po(e,t,n,r){return r!==null&&Is(r),Gn(t,e.child,null,n),e=Ks(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function y1(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Vl(Error(E(422))),Po(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Fi({mode:"visible",children:r.children},o,0,null),i=hn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Gn(t,e.child,null,l),t.child.memoizedState=Va(l),t.memoizedState=Ba,i);if(!(t.mode&1))return Po(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(E(419)),r=Vl(i,r,void 0),Po(e,t,l,r)}if(a=(l&e.childLanes)!==0,Re||a){if(r=fe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,zt(e,o),st(r,e,o,-1))}return eu(),r=Vl(Error(E(421))),Po(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=z1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ue=Qt(o.nextSibling),Be=t,K=!0,lt=null,e!==null&&(Ge[Ze++]=Ct,Ge[Ze++]=$t,Ge[Ze++]=vn,Ct=e.id,$t=e.overflow,vn=t),t=Ks(t,r.children),t.flags|=4096,t)}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),La(e.return,t,n)}function Hl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Kd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if($e(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&yi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Hl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&yi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Hl(t,!0,n,null,i);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function g1(e,t,n){switch(t.tag){case 3:Qd(t),Kn();break;case 5:Sd(t);break;case 1:Oe(t.type)&&ci(t);break;case 4:Us(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(pi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Xd(e,t,n):(H(Z,Z.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);H(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Wd(e,t,n)}return Tt(e,t,n)}var Gd,Ha,Zd,Jd;Gd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ha=function(){};Zd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,dn(vt.current);var i=null;switch(n){case"input":o=fa(e,o),r=fa(e,r),i=[];break;case"select":o=q({},o,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":o=ma(e,o),r=ma(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=si)}ya(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&W("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Jd=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function v1(e,t,n){var r=t.pendingProps;switch(Os(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Oe(t.type)&&ui(),we(t),null;case 3:return r=t.stateNode,Zn(),Q(je),Q(Ee),Vs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lt!==null&&(Ja(lt),lt=null))),Ha(e,t),we(t),null;case 5:Bs(t);var o=dn(Xr.current);if(n=t.type,e!==null&&t.stateNode!=null)Zd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return we(t),null}if(e=dn(vt.current),$o(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[yt]=t,r[Yr]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(o=0;o<Er.length;o++)W(Er[o],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Ru(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":Ou(r,i),W("invalid",r)}ya(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Co(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Co(r.textContent,a,e),o=["children",""+a]):Lr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":yo(r),ju(r,i,!0);break;case"textarea":yo(r),Iu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=si)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[yt]=t,e[Yr]=r,Gd(e,t,!1,!1),t.stateNode=e;e:{switch(l=ga(n,r),n){case"dialog":W("cancel",e),W("close",e),o=r;break;case"iframe":case"object":case"embed":W("load",e),o=r;break;case"video":case"audio":for(o=0;o<Er.length;o++)W(Er[o],e);o=r;break;case"source":W("error",e),o=r;break;case"img":case"image":case"link":W("error",e),W("load",e),o=r;break;case"details":W("toggle",e),o=r;break;case"input":Ru(e,r),o=fa(e,r),W("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=q({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ou(e,r),o=ma(e,r),W("invalid",e);break;default:o=r}ya(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Pf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&$f(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Mr(e,s):typeof s=="number"&&Mr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Lr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&W("scroll",e):s!=null&&vs(e,i,s,l))}switch(n){case"input":yo(e),ju(e,r,!1);break;case"textarea":yo(e),Iu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Fn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)Jd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=dn(Xr.current),dn(vt.current),$o(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(i=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Co(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Co(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return we(t),null;case 13:if(Q(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ue!==null&&t.mode&1&&!(t.flags&128))md(),Kn(),t.flags|=98560,i=!1;else if(i=$o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[yt]=t}else Kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),i=!1}else lt!==null&&(Ja(lt),lt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?le===0&&(le=3):eu())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Zn(),Ha(e,t),e===null&&Hr(t.stateNode.containerInfo),we(t),null;case 10:return As(t.type._context),we(t),null;case 17:return Oe(t.type)&&ui(),we(t),null;case 19:if(Q(Z),i=t.memoizedState,i===null)return we(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)yr(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=yi(e),l!==null){for(t.flags|=128,yr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>qn&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304)}else{if(!r)if(e=yi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!K)return we(t),null}else 2*te()-i.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=Z.current,H(Z,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return bs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function w1(e,t){switch(Os(t),t.tag){case 1:return Oe(t.type)&&ui(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zn(),Q(je),Q(Ee),Vs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bs(t),null;case 13:if(Q(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Z),null;case 4:return Zn(),null;case 10:return As(t.type._context),null;case 22:case 23:return bs(),null;case 24:return null;default:return null}}var No=!1,Se=!1,x1=typeof WeakSet=="function"?WeakSet:Set,P=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Wa(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Ec=!1;function S1(e,t){if(Pa=ii,e=td(),Rs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,m=0,p=e,h=null;t:for(;;){for(var g;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===e)break t;if(h===n&&++c===o&&(a=l),h===i&&++m===r&&(s=l),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Na={focusedElem:e,selectionRange:n},ii=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,N=w.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:ot(t.type,y),N);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){ee(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=Ec,Ec=!1,w}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Wa(t,n,i)}o=o.next}while(o!==r)}}function Ai(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ya(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qd(e){var t=e.alternate;t!==null&&(e.alternate=null,qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[Yr],delete t[Ra],delete t[r1],delete t[o1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bd(e){return e.tag===5||e.tag===3||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=si));else if(r!==4&&(e=e.child,e!==null))for(Qa(e,t,n),e=e.sibling;e!==null;)Qa(e,t,n),e=e.sibling}function Xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xa(e,t,n),e=e.sibling;e!==null;)Xa(e,t,n),e=e.sibling}var pe=null,it=!1;function It(e,t,n){for(n=n.child;n!==null;)ep(e,t,n),n=n.sibling}function ep(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 5:Se||Mn(n,t);case 6:var r=pe,o=it;pe=null,It(e,t,n),pe=r,it=o,pe!==null&&(it?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(it?(e=pe,n=n.stateNode,e.nodeType===8?Ml(e.parentNode,n):e.nodeType===1&&Ml(e,n),Ur(e)):Ml(pe,n.stateNode));break;case 4:r=pe,o=it,pe=n.stateNode.containerInfo,it=!0,It(e,t,n),pe=r,it=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Wa(n,t,l),o=o.next}while(o!==r)}It(e,t,n);break;case 1:if(!Se&&(Mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}It(e,t,n);break;case 21:It(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,It(e,t,n),Se=r):It(e,t,n);break;default:It(e,t,n)}}function $c(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new x1),t.forEach(function(r){var o=T1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,it=!1;break e;case 3:pe=a.stateNode.containerInfo,it=!0;break e;case 4:pe=a.stateNode.containerInfo,it=!0;break e}a=a.return}if(pe===null)throw Error(E(160));ep(i,l,o),pe=null,it=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){ee(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)tp(t,e),t=t.sibling}function tp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),ft(e),r&4){try{Rr(3,e,e.return),Ai(3,e)}catch(y){ee(e,e.return,y)}try{Rr(5,e,e.return)}catch(y){ee(e,e.return,y)}}break;case 1:rt(t,e),ft(e),r&512&&n!==null&&Mn(n,n.return);break;case 5:if(rt(t,e),ft(e),r&512&&n!==null&&Mn(n,n.return),e.flags&32){var o=e.stateNode;try{Mr(o,"")}catch(y){ee(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&kf(o,i),ga(a,l);var c=ga(a,i);for(l=0;l<s.length;l+=2){var m=s[l],p=s[l+1];m==="style"?Pf(o,p):m==="dangerouslySetInnerHTML"?$f(o,p):m==="children"?Mr(o,p):vs(o,m,p,c)}switch(a){case"input":da(o,i);break;case"textarea":Ef(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Fn(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?Fn(o,!!i.multiple,i.defaultValue,!0):Fn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Yr]=i}catch(y){ee(e,e.return,y)}}break;case 6:if(rt(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ee(e,e.return,y)}}break;case 3:if(rt(t,e),ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ur(t.containerInfo)}catch(y){ee(e,e.return,y)}break;case 4:rt(t,e),ft(e);break;case 13:rt(t,e),ft(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Js=te())),r&4&&$c(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(c=Se)||m,rt(t,e),Se=c):rt(t,e),ft(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(p=P=m;P!==null;){switch(h=P,g=h.child,h.tag){case 0:case 11:case 14:case 15:Rr(4,h,h.return);break;case 1:Mn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){ee(r,n,y)}}break;case 5:Mn(h,h.return);break;case 22:if(h.memoizedState!==null){Pc(p);continue}}g!==null?(g.return=h,P=g):Pc(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=_f("display",l))}catch(y){ee(e,e.return,y)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){ee(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:rt(t,e),ft(e),r&4&&$c(e);break;case 21:break;default:rt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bd(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Mr(o,""),r.flags&=-33);var i=Cc(e);Xa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Cc(e);Qa(e,a,l);break;default:throw Error(E(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function k1(e,t,n){P=e,np(e)}function np(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||No;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Se;a=No;var c=Se;if(No=l,(Se=s)&&!c)for(P=o;P!==null;)l=P,s=l.child,l.tag===22&&l.memoizedState!==null?Nc(o):s!==null?(s.return=l,P=s):Nc(o);for(;i!==null;)P=i,np(i),i=i.sibling;P=o,No=a,Se=c}_c(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):_c(e)}}function _c(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||Ai(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&uc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Ur(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Se||t.flags&512&&Ya(t)}catch(h){ee(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Pc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Nc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ai(4,t)}catch(s){ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ee(t,o,s)}}var i=t.return;try{Ya(t)}catch(s){ee(t,i,s)}break;case 5:var l=t.return;try{Ya(t)}catch(s){ee(t,l,s)}}}catch(s){ee(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var E1=Math.ceil,wi=Rt.ReactCurrentDispatcher,Gs=Rt.ReactCurrentOwner,qe=Rt.ReactCurrentBatchConfig,M=0,fe=null,oe=null,he=0,Fe=0,An=nn(0),le=0,Jr=null,xn=0,Di=0,Zs=0,jr=null,Te=null,Js=0,qn=1/0,St=null,xi=!1,Ka=null,Kt=null,zo=!1,Vt=null,Si=0,Or=0,Ga=null,Wo=-1,Yo=0;function Pe(){return M&6?te():Wo!==-1?Wo:Wo=te()}function Gt(e){return e.mode&1?M&2&&he!==0?he&-he:l1.transition!==null?(Yo===0&&(Yo=Ff()),Yo):(e=U,e!==0||(e=window.event,e=e===void 0?16:Qf(e.type)),e):1}function st(e,t,n,r){if(50<Or)throw Or=0,Ga=null,Error(E(185));io(e,n,r),(!(M&2)||e!==fe)&&(e===fe&&(!(M&2)&&(Di|=n),le===4&&Ut(e,he)),Ie(e,r),n===1&&M===0&&!(t.mode&1)&&(qn=te()+500,Ii&&rn()))}function Ie(e,t){var n=e.callbackNode;lm(e,t);var r=oi(e,e===fe?he:0);if(r===0)n!==null&&Au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Au(n),t===1)e.tag===0?i1(zc.bind(null,e)):fd(zc.bind(null,e)),t1(function(){!(M&6)&&rn()}),n=null;else{switch(Uf(r)){case 1:n=Es;break;case 4:n=Af;break;case 16:n=ri;break;case 536870912:n=Df;break;default:n=ri}n=cp(n,rp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rp(e,t){if(Wo=-1,Yo=0,M&6)throw Error(E(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=oi(e,e===fe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ki(e,r);else{t=r;var o=M;M|=2;var i=ip();(fe!==e||he!==t)&&(St=null,qn=te()+500,mn(e,t));do try{_1();break}catch(a){op(e,a)}while(1);Ms(),wi.current=i,M=o,oe!==null?t=0:(fe=null,he=0,t=le)}if(t!==0){if(t===2&&(o=ka(e),o!==0&&(r=o,t=Za(e,o))),t===1)throw n=Jr,mn(e,0),Ut(e,r),Ie(e,te()),n;if(t===6)Ut(e,r);else{if(o=e.current.alternate,!(r&30)&&!C1(o)&&(t=ki(e,r),t===2&&(i=ka(e),i!==0&&(r=i,t=Za(e,i))),t===1))throw n=Jr,mn(e,0),Ut(e,r),Ie(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:un(e,Te,St);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=Js+500-te(),10<t)){if(oi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ta(un.bind(null,e,Te,St),t);break}un(e,Te,St);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-at(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*E1(r/1960))-r,10<r){e.timeoutHandle=Ta(un.bind(null,e,Te,St),r);break}un(e,Te,St);break;case 5:un(e,Te,St);break;default:throw Error(E(329))}}}return Ie(e,te()),e.callbackNode===n?rp.bind(null,e):null}function Za(e,t){var n=jr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=ki(e,t),e!==2&&(t=Te,Te=n,t!==null&&Ja(t)),e}function Ja(e){Te===null?Te=e:Te.push.apply(Te,e)}function C1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ct(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Zs,t&=~Di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function zc(e){if(M&6)throw Error(E(327));Wn();var t=oi(e,0);if(!(t&1))return Ie(e,te()),null;var n=ki(e,t);if(e.tag!==0&&n===2){var r=ka(e);r!==0&&(t=r,n=Za(e,r))}if(n===1)throw n=Jr,mn(e,0),Ut(e,t),Ie(e,te()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Te,St),Ie(e,te()),null}function qs(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(qn=te()+500,Ii&&rn())}}function Sn(e){Vt!==null&&Vt.tag===0&&!(M&6)&&Wn();var t=M;M|=1;var n=qe.transition,r=U;try{if(qe.transition=null,U=1,e)return e()}finally{U=r,qe.transition=n,M=t,!(M&6)&&rn()}}function bs(){Fe=An.current,Q(An)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,e1(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Os(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ui();break;case 3:Zn(),Q(je),Q(Ee),Vs();break;case 5:Bs(r);break;case 4:Zn();break;case 13:Q(Z);break;case 19:Q(Z);break;case 10:As(r.type._context);break;case 22:case 23:bs()}n=n.return}if(fe=e,oe=e=Zt(e.current,null),he=Fe=t,le=0,Jr=null,Zs=Di=xn=0,Te=jr=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}fn=null}return e}function op(e,t){do{var n=oe;try{if(Ms(),Bo.current=vi,gi){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}gi=!1}if(wn=0,se=ie=J=null,Tr=!1,Kr=0,Gs.current=null,n===null||n.return===null){le=1,Jr=t,oe=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=he,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=a,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=yc(l);if(g!==null){g.flags&=-257,gc(g,l,a,i,t),g.mode&1&&hc(i,c,t),t=g,s=c;var w=t.updateQueue;if(w===null){var y=new Set;y.add(s),t.updateQueue=y}else w.add(s);break e}else{if(!(t&1)){hc(i,c,t),eu();break e}s=Error(E(426))}}else if(K&&a.mode&1){var N=yc(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),gc(N,l,a,i,t),Is(Jn(s,a));break e}}i=s=Jn(s,a),le!==4&&(le=2),jr===null?jr=[i]:jr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Bd(i,s,t);sc(i,f);break e;case 1:a=s;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Kt===null||!Kt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Vd(i,a,t);sc(i,v);break e}}i=i.return}while(i!==null)}ap(n)}catch(k){t=k,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function ip(){var e=wi.current;return wi.current=vi,e===null?vi:e}function eu(){(le===0||le===3||le===2)&&(le=4),fe===null||!(xn&268435455)&&!(Di&268435455)||Ut(fe,he)}function ki(e,t){var n=M;M|=2;var r=ip();(fe!==e||he!==t)&&(St=null,mn(e,t));do try{$1();break}catch(o){op(e,o)}while(1);if(Ms(),M=n,wi.current=r,oe!==null)throw Error(E(261));return fe=null,he=0,le}function $1(){for(;oe!==null;)lp(oe)}function _1(){for(;oe!==null&&!J0();)lp(oe)}function lp(e){var t=up(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?ap(e):oe=t,Gs.current=null}function ap(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=w1(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(n=v1(n,t,Fe),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function un(e,t,n){var r=U,o=qe.transition;try{qe.transition=null,U=1,P1(e,t,n,r)}finally{qe.transition=o,U=r}return null}function P1(e,t,n,r){do Wn();while(Vt!==null);if(M&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(am(e,i),e===fe&&(oe=fe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zo||(zo=!0,cp(ri,function(){return Wn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=qe.transition,qe.transition=null;var l=U;U=1;var a=M;M|=4,Gs.current=null,S1(e,n),tp(n,e),Xm(Na),ii=!!Pa,Na=Pa=null,e.current=n,k1(n),q0(),M=a,U=l,qe.transition=i}else e.current=n;if(zo&&(zo=!1,Vt=e,Si=o),i=e.pendingLanes,i===0&&(Kt=null),tm(n.stateNode),Ie(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(xi)throw xi=!1,e=Ka,Ka=null,e;return Si&1&&e.tag!==0&&Wn(),i=e.pendingLanes,i&1?e===Ga?Or++:(Or=0,Ga=e):Or=0,rn(),null}function Wn(){if(Vt!==null){var e=Uf(Si),t=qe.transition,n=U;try{if(qe.transition=null,U=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,Si=0,M&6)throw Error(E(331));var o=M;for(M|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(P=c;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:Rr(8,m,i)}var p=m.child;if(p!==null)p.return=m,P=p;else for(;P!==null;){m=P;var h=m.sibling,g=m.return;if(qd(m),m===c){P=null;break}if(h!==null){h.return=g,P=h;break}P=g}}}var w=i.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Rr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,P=f;break e}P=i.return}}var u=e.current;for(P=u;P!==null;){l=P;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,P=d;else e:for(l=u;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ai(9,a)}}catch(k){ee(a,a.return,k)}if(a===l){P=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,P=v;break e}P=a.return}}if(M=o,rn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(zi,e)}catch{}r=!0}return r}finally{U=n,qe.transition=t}}return!1}function Tc(e,t,n){t=Jn(n,t),t=Bd(e,t,1),e=Xt(e,t,1),t=Pe(),e!==null&&(io(e,1,t),Ie(e,t))}function ee(e,t,n){if(e.tag===3)Tc(e,e,n);else for(;t!==null;){if(t.tag===3){Tc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=Jn(n,e),e=Vd(t,e,1),t=Xt(t,e,1),e=Pe(),t!==null&&(io(t,1,e),Ie(t,e));break}}t=t.return}}function N1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(he&n)===n&&(le===4||le===3&&(he&130023424)===he&&500>te()-Js?mn(e,0):Zs|=n),Ie(e,t)}function sp(e,t){t===0&&(e.mode&1?(t=wo,wo<<=1,!(wo&130023424)&&(wo=4194304)):t=1);var n=Pe();e=zt(e,t),e!==null&&(io(e,t,n),Ie(e,n))}function z1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sp(e,n)}function T1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),sp(e,n)}var up;up=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,g1(e,t,n);Re=!!(e.flags&131072)}else Re=!1,K&&t.flags&1048576&&dd(t,di,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ho(e,t),e=t.pendingProps;var o=Xn(t,Ee.current);Hn(t,n),o=Ws(null,t,r,e,o,n);var i=Ys();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(i=!0,ci(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fs(t),o.updater=Li,t.stateNode=o,o._reactInternals=t,Aa(t,r,e,n),t=Ua(null,t,r,!0,i,n)):(t.tag=0,K&&i&&js(t),$e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ho(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=j1(r),e=ot(r,e),o){case 0:t=Fa(null,t,r,e,n);break e;case 1:t=xc(null,t,r,e,n);break e;case 11:t=vc(null,t,r,e,n);break e;case 14:t=wc(null,t,r,ot(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),Fa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),xc(e,t,r,o,n);case 3:e:{if(Qd(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,yd(e,t),hi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Jn(Error(E(423)),t),t=Sc(e,t,r,n,o);break e}else if(r!==o){o=Jn(Error(E(424)),t),t=Sc(e,t,r,n,o);break e}else for(Ue=Qt(t.stateNode.containerInfo.firstChild),Be=t,K=!0,lt=null,n=xd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kn(),r===o){t=Tt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return Sd(t),e===null&&Ia(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,za(r,o)?l=null:i!==null&&za(r,i)&&(t.flags|=32),Yd(e,t),$e(e,t,l,n),t.child;case 6:return e===null&&Ia(t),null;case 13:return Xd(e,t,n);case 4:return Us(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),vc(e,t,r,o,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,H(pi,r._currentValue),r._currentValue=l,i!==null)if(ct(i.value,l)){if(i.children===o.children&&!je.current){t=Tt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=_t(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),La(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),La(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}$e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Hn(t,n),o=be(o),r=r(o),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,o=ot(r,t.pendingProps),o=ot(r.type,o),wc(e,t,r,o,n);case 15:return Hd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ot(r,o),Ho(e,t),t.tag=1,Oe(r)?(e=!0,ci(t)):e=!1,Hn(t,n),vd(t,r,o),Aa(t,r,o,n),Ua(null,t,r,!0,e,n);case 19:return Kd(e,t,n);case 22:return Wd(e,t,n)}throw Error(E(156,t.tag))};function cp(e,t){return Mf(e,t)}function R1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new R1(e,t,n,r)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function j1(e){if(typeof e=="function")return tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xs)return 11;if(e===Ss)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")tu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Pn:return hn(n.children,o,i,t);case ws:l=8,o|=8;break;case aa:return e=Je(12,n,t,o|2),e.elementType=aa,e.lanes=i,e;case sa:return e=Je(13,n,t,o),e.elementType=sa,e.lanes=i,e;case ua:return e=Je(19,n,t,o),e.elementType=ua,e.lanes=i,e;case wf:return Fi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gf:l=10;break e;case vf:l=9;break e;case xs:l=11;break e;case Ss:l=14;break e;case At:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Je(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function hn(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function Fi(e,t,n,r){return e=Je(22,e,r,t),e.elementType=wf,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function O1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,o,i,l,a,s){return e=new O1(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fs(i),e}function I1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fp(e){if(!e)return en;e=e._reactInternals;e:{if(En(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Oe(n))return cd(e,n,t)}return t}function dp(e,t,n,r,o,i,l,a,s){return e=nu(n,r,!0,e,o,i,l,a,s),e.context=fp(null),n=e.current,r=Pe(),o=Gt(n),i=_t(r,o),i.callback=t??null,Xt(n,i,o),e.current.lanes=o,io(e,o,r),Ie(e,r),e}function Ui(e,t,n,r){var o=t.current,i=Pe(),l=Gt(o);return n=fp(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(o,t,l),e!==null&&(st(e,o,l,i),Uo(e,o,l)),l}function Ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ru(e,t){Rc(e,t),(e=e.alternate)&&Rc(e,t)}function L1(){return null}var pp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ou(e){this._internalRoot=e}Bi.prototype.render=ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ui(e,t,null,null)};Bi.prototype.unmount=ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){Ui(null,e,null,null)}),t[Nt]=null}};function Bi(e){this._internalRoot=e}Bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&Yf(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jc(){}function M1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ei(l);i.call(c)}}var l=dp(t,r,e,0,null,!1,!1,"",jc);return e._reactRootContainer=l,e[Nt]=l.current,Hr(e.nodeType===8?e.parentNode:e),Sn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Ei(s);a.call(c)}}var s=nu(e,0,!1,null,null,!1,!1,"",jc);return e._reactRootContainer=s,e[Nt]=s.current,Hr(e.nodeType===8?e.parentNode:e),Sn(function(){Ui(t,s,n,r)}),s}function Hi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Ei(l);a.call(s)}}Ui(t,l,e,o)}else l=M1(n,t,e,o,r);return Ei(l)}Bf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kr(t.pendingLanes);n!==0&&(Cs(t,n|1),Ie(t,te()),!(M&6)&&(qn=te()+500,rn()))}break;case 13:Sn(function(){var r=zt(e,1);if(r!==null){var o=Pe();st(r,e,1,o)}}),ru(e,1)}};$s=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Pe();st(t,e,134217728,n)}ru(e,134217728)}};Vf=function(e){if(e.tag===13){var t=Gt(e),n=zt(e,t);if(n!==null){var r=Pe();st(n,e,t,r)}ru(e,t)}};Hf=function(){return U};Wf=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};wa=function(e,t,n){switch(t){case"input":if(da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Oi(r);if(!o)throw Error(E(90));Sf(r),da(r,o)}}}break;case"textarea":Ef(e,n);break;case"select":t=n.value,t!=null&&Fn(e,!!n.multiple,t,!1)}};Tf=qs;Rf=Sn;var A1={usingClientEntryPoint:!1,Events:[ao,Rn,Oi,Nf,zf,qs]},gr={findFiberByHostInstance:cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},D1={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=If(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||L1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{zi=To.inject(D1),gt=To}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A1;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(t))throw Error(E(200));return I1(e,t,null,n)};We.createRoot=function(e,t){if(!iu(e))throw Error(E(299));var n=!1,r="",o=pp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,r,o),e[Nt]=t.current,Hr(e.nodeType===8?e.parentNode:e),new ou(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=If(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return Sn(e)};We.hydrate=function(e,t,n){if(!Vi(t))throw Error(E(200));return Hi(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!iu(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=pp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=dp(t,null,e,1,n??null,o,!1,i,l),e[Nt]=t.current,Hr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Bi(t)};We.render=function(e,t,n){if(!Vi(t))throw Error(E(200));return Hi(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!Vi(e))throw Error(E(40));return e._reactRootContainer?(Sn(function(){Hi(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};We.unstable_batchedUpdates=qs;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vi(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Hi(e,t,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";function mp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mp)}catch(e){console.error(e)}}mp(),df.exports=We;var F1=df.exports,Oc=F1;ia.createRoot=Oc.createRoot,ia.hydrateRoot=Oc.hydrateRoot;var ke=function(){return ke=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ke.apply(this,arguments)};function qr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function U1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Y="-ms-",Ir="-moz-",F="-webkit-",hp="comm",Wi="rule",lu="decl",B1="@import",yp="@keyframes",V1="@layer",H1=Math.abs,au=String.fromCharCode,qa=Object.assign;function W1(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function gp(e){return e.trim()}function kt(e,t){return(e=t.exec(e))?e[0]:e}function j(e,t,n){return e.replace(t,n)}function Xo(e,t){return e.indexOf(t)}function ue(e,t){return e.charCodeAt(t)|0}function bn(e,t,n){return e.slice(t,n)}function pt(e){return e.length}function vp(e){return e.length}function Cr(e,t){return t.push(e),e}function Y1(e,t){return e.map(t).join("")}function Ic(e,t){return e.filter(function(n){return!kt(n,t)})}var Yi=1,er=1,wp=0,tt=0,ne=0,sr="";function Qi(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Yi,column:er,length:l,return:"",siblings:a}}function Mt(e,t){return qa(Qi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $n(e){for(;e.root;)e=Mt(e.root,{children:[e]});Cr(e,e.siblings)}function Q1(){return ne}function X1(){return ne=tt>0?ue(sr,--tt):0,er--,ne===10&&(er=1,Yi--),ne}function ut(){return ne=tt<wp?ue(sr,tt++):0,er++,ne===10&&(er=1,Yi++),ne}function yn(){return ue(sr,tt)}function Ko(){return tt}function Xi(e,t){return bn(sr,e,t)}function ba(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function K1(e){return Yi=er=1,wp=pt(sr=e),tt=0,[]}function G1(e){return sr="",e}function Ql(e){return gp(Xi(tt-1,es(e===91?e+2:e===40?e+1:e)))}function Z1(e){for(;(ne=yn())&&ne<33;)ut();return ba(e)>2||ba(ne)>3?"":" "}function J1(e,t){for(;--t&&ut()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return Xi(e,Ko()+(t<6&&yn()==32&&ut()==32))}function es(e){for(;ut();)switch(ne){case e:return tt;case 34:case 39:e!==34&&e!==39&&es(ne);break;case 40:e===41&&es(e);break;case 92:ut();break}return tt}function q1(e,t){for(;ut()&&e+ne!==47+10;)if(e+ne===42+42&&yn()===47)break;return"/*"+Xi(t,tt-1)+"*"+au(e===47?e:ut())}function b1(e){for(;!ba(yn());)ut();return Xi(e,tt)}function eh(e){return G1(Go("",null,null,null,[""],e=K1(e),0,[0],e))}function Go(e,t,n,r,o,i,l,a,s){for(var c=0,m=0,p=l,h=0,g=0,w=0,y=1,N=1,f=1,u=0,d="",v=o,k=i,C=r,x=d;N;)switch(w=u,u=ut()){case 40:if(w!=108&&ue(x,p-1)==58){Xo(x+=j(Ql(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:x+=Ql(u);break;case 9:case 10:case 13:case 32:x+=Z1(w);break;case 92:x+=J1(Ko()-1,7);continue;case 47:switch(yn()){case 42:case 47:Cr(th(q1(ut(),Ko()),t,n,s),s);break;default:x+="/"}break;case 123*y:a[c++]=pt(x)*f;case 125*y:case 59:case 0:switch(u){case 0:case 125:N=0;case 59+m:f==-1&&(x=j(x,/\f/g,"")),g>0&&pt(x)-p&&Cr(g>32?Mc(x+";",r,n,p-1,s):Mc(j(x," ","")+";",r,n,p-2,s),s);break;case 59:x+=";";default:if(Cr(C=Lc(x,t,n,c,m,o,a,d,v=[],k=[],p,i),i),u===123)if(m===0)Go(x,t,C,C,v,i,p,a,k);else switch(h===99&&ue(x,3)===110?100:h){case 100:case 108:case 109:case 115:Go(e,C,C,r&&Cr(Lc(e,C,C,0,0,o,a,d,o,v=[],p,k),k),o,k,p,a,r?v:k);break;default:Go(x,C,C,C,[""],k,0,a,k)}}c=m=g=0,y=f=1,d=x="",p=l;break;case 58:p=1+pt(x),g=w;default:if(y<1){if(u==123)--y;else if(u==125&&y++==0&&X1()==125)continue}switch(x+=au(u),u*y){case 38:f=m>0?1:(x+="\f",-1);break;case 44:a[c++]=(pt(x)-1)*f,f=1;break;case 64:yn()===45&&(x+=Ql(ut())),h=yn(),m=p=pt(d=x+=b1(Ko())),u++;break;case 45:w===45&&pt(x)==2&&(y=0)}}return i}function Lc(e,t,n,r,o,i,l,a,s,c,m,p){for(var h=o-1,g=o===0?i:[""],w=vp(g),y=0,N=0,f=0;y<r;++y)for(var u=0,d=bn(e,h+1,h=H1(N=l[y])),v=e;u<w;++u)(v=gp(N>0?g[u]+" "+d:j(d,/&\f/g,g[u])))&&(s[f++]=v);return Qi(e,t,n,o===0?Wi:a,s,c,m,p)}function th(e,t,n,r){return Qi(e,t,n,hp,au(Q1()),bn(e,2,-2),0,r)}function Mc(e,t,n,r,o){return Qi(e,t,n,lu,bn(e,0,r),bn(e,r+1,-1),r,o)}function xp(e,t,n){switch(W1(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return Ir+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Ir+e+Y+e+e;case 5936:switch(ue(e,t+11)){case 114:return F+e+Y+j(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+Y+j(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+Y+j(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+Y+e+e;case 6165:return F+e+Y+"flex-"+e+e;case 5187:return F+e+j(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return F+e+Y+"flex-item-"+j(e,/flex-|-self/g,"")+(kt(e,/flex-|baseline/)?"":Y+"grid-row-"+j(e,/flex-|-self/g,""))+e;case 4675:return F+e+Y+"flex-line-pack"+j(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+Y+j(e,"shrink","negative")+e;case 5292:return F+e+Y+j(e,"basis","preferred-size")+e;case 6060:return F+"box-"+j(e,"-grow","")+F+e+Y+j(e,"grow","positive")+e;case 4554:return F+j(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return j(j(j(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return j(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return j(j(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!kt(e,/flex-|baseline/))return Y+"grid-column-align"+bn(e,t)+e;break;case 2592:case 3360:return Y+j(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,kt(r.props,/grid-\w+-end/)})?~Xo(e+(n=n[t].value),"span")?e:Y+j(e,"-start","")+e+Y+"grid-row-span:"+(~Xo(n,"span")?kt(n,/\d+/):+kt(n,/\d+/)-+kt(e,/\d+/))+";":Y+j(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return kt(r.props,/grid-\w+-start/)})?e:Y+j(j(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return j(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pt(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return j(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Ir+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xo(e,"stretch")?xp(j(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return j(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,c){return Y+o+":"+i+c+(l?Y+o+"-span:"+(a?s:+s-+i)+c:"")+e});case 4949:if(ue(e,t+6)===121)return j(e,":",":"+F)+e;break;case 6444:switch(ue(e,ue(e,14)===45?18:11)){case 120:return j(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(ue(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+Y+"$2box$3")+e;case 100:return j(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(e,"scroll-","scroll-snap-")+e}return e}function Ci(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function nh(e,t,n,r){switch(e.type){case V1:if(e.children.length)break;case B1:case lu:return e.return=e.return||e.value;case hp:return"";case yp:return e.return=e.value+"{"+Ci(e.children,r)+"}";case Wi:if(!pt(e.value=e.props.join(",")))return""}return pt(n=Ci(e.children,r))?e.return=e.value+"{"+n+"}":""}function rh(e){var t=vp(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function oh(e){return function(t){t.root||(t=t.return)&&e(t)}}function ih(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case lu:e.return=xp(e.value,e.length,n);return;case yp:return Ci([Mt(e,{value:j(e.value,"@","@"+F)})],r);case Wi:if(e.length)return Y1(n=e.props,function(o){switch(kt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$n(Mt(e,{props:[j(o,/:(read-\w+)/,":"+Ir+"$1")]})),$n(Mt(e,{props:[o]})),qa(e,{props:Ic(n,r)});break;case"::placeholder":$n(Mt(e,{props:[j(o,/:(plac\w+)/,":"+F+"input-$1")]})),$n(Mt(e,{props:[j(o,/:(plac\w+)/,":"+Ir+"$1")]})),$n(Mt(e,{props:[j(o,/:(plac\w+)/,Y+"input-$1")]})),$n(Mt(e,{props:[o]})),qa(e,{props:Ic(n,r)});break}return""})}}var Sp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",su=typeof window<"u"&&"HTMLElement"in window,lh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),ah={},Ki=Object.freeze([]),nr=Object.freeze({});function kp(e,t,n){return n===void 0&&(n=nr),e.theme!==n.theme&&e.theme||t||n.theme}var Ep=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uh=/(^-|-$)/g;function Ac(e){return e.replace(sh,"-").replace(uh,"")}var ch=/(a)(d)/gi,Dc=function(e){return String.fromCharCode(e+(e>25?39:97))};function ts(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Dc(t%52)+n;return(Dc(t%52)+n).replace(ch,"$1-$2")}var Xl,Dn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Cp=function(e){return Dn(5381,e)};function $p(e){return ts(Cp(e)>>>0)}function fh(e){return e.displayName||e.name||"Component"}function Kl(e){return typeof e=="string"&&!0}var _p=typeof Symbol=="function"&&Symbol.for,Pp=_p?Symbol.for("react.memo"):60115,dh=_p?Symbol.for("react.forward_ref"):60112,ph={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Np={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hh=((Xl={})[dh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xl[Pp]=Np,Xl);function Fc(e){return("type"in(t=e)&&t.type.$$typeof)===Pp?Np:"$$typeof"in e?hh[e.$$typeof]:ph;var t}var yh=Object.defineProperty,gh=Object.getOwnPropertyNames,Uc=Object.getOwnPropertySymbols,vh=Object.getOwnPropertyDescriptor,wh=Object.getPrototypeOf,Bc=Object.prototype;function zp(e,t,n){if(typeof t!="string"){if(Bc){var r=wh(t);r&&r!==Bc&&zp(e,r,n)}var o=gh(t);Uc&&(o=o.concat(Uc(t)));for(var i=Fc(e),l=Fc(t),a=0;a<o.length;++a){var s=o[a];if(!(s in mh||n&&n[s]||l&&s in l||i&&s in i)){var c=vh(t,s);try{yh(e,s,c)}catch{}}}}return e}function rr(e){return typeof e=="function"}function uu(e){return typeof e=="object"&&"styledComponentId"in e}function pn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ns(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function br(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function rs(e,t,n){if(n===void 0&&(n=!1),!n&&!br(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=rs(e[r],t[r]);else if(br(t))for(var r in t)e[r]=rs(e[r],t[r]);return e}function cu(e,t){Object.defineProperty(e,"toString",{value:t})}function uo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var xh=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw uo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),Zo=new Map,$i=new Map,Gl=1,Ro=function(e){if(Zo.has(e))return Zo.get(e);for(;$i.has(Gl);)Gl++;var t=Gl++;return Zo.set(e,t),$i.set(t,e),t},Sh=function(e,t){Zo.set(e,t),$i.set(t,e)},kh="style[".concat(tr,"][").concat("data-styled-version",'="').concat("6.0.5",'"]'),Eh=new RegExp("^".concat(tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ch=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},$h=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(Eh);if(s){var c=0|parseInt(s[1],10),m=s[2];c!==0&&(Sh(m,c),Ch(e,m,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}};function _h(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Tp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(tr,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(tr,"active"),r.setAttribute("data-styled-version","6.0.5");var l=_h();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Ph=function(){function e(t){this.element=Tp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw uo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Nh=function(){function e(t){this.element=Tp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),zh=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Vc=su,Th={isServer:!su,useCSSOMInjection:!lh},_i=function(){function e(t,n,r){t===void 0&&(t=nr),n===void 0&&(n={});var o=this;this.options=ke(ke({},Th),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&su&&Vc&&(Vc=!1,function(i){for(var l=document.querySelectorAll(kh),a=0,s=l.length;a<s;a++){var c=l[a];c&&c.getAttribute(tr)!=="active"&&($h(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),cu(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",c=function(p){var h=function(f){return $i.get(f)}(p);if(h===void 0)return"continue";var g=i.names.get(h),w=l.getGroup(p);if(g===void 0||w.length===0)return"continue";var y="".concat(tr,".g").concat(p,'[id="').concat(h,'"]'),N="";g!==void 0&&g.forEach(function(f){f.length>0&&(N+="".concat(f,","))}),s+="".concat(w).concat(y,'{content:"').concat(N,'"}').concat(`/*!sc*/
`)},m=0;m<a;m++)c(m);return s}(o)})}return e.registerId=function(t){return Ro(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ke(ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new zh(o):r?new Ph(o):new Nh(o)}(this.options),new xh(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ro(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ro(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ro(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Rh=/&/g,jh=/^\s*\/\/.*$/gm;function Rp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Rp(n.children,t)),n})}function Oh(e){var t,n,r,o=e===void 0?nr:e,i=o.options,l=i===void 0?nr:i,a=o.plugins,s=a===void 0?Ki:a,c=function(h,g,w){return w===n||w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},m=s.slice();m.push(function(h){h.type===Wi&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Rh,n).replace(r,c))}),l.prefix&&m.push(ih),m.push(nh);var p=function(h,g,w,y){g===void 0&&(g=""),w===void 0&&(w=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var N=h.replace(jh,""),f=eh(w||g?"".concat(w," ").concat(g," { ").concat(N," }"):N);l.namespace&&(f=Rp(f,l.namespace));var u=[];return Ci(f,rh(m.concat(oh(function(d){return u.push(d)})))),u};return p.hash=s.length?s.reduce(function(h,g){return g.name||uo(15),Dn(h,g.name)},5381).toString():"",p}var Ih=new _i,os=Oh(),jp=ce.createContext({shouldForwardProp:void 0,styleSheet:Ih,stylis:os});jp.Consumer;ce.createContext(void 0);function is(){return L.useContext(jp)}var Lh=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=os);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,cu(this,function(){throw uo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=os),this.name+t.hash},e}(),Mh=function(e){return e>="A"&&e<="Z"};function Hc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Mh(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Op=function(e){return e==null||e===!1||e===""},Ip=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Op(i)&&(Array.isArray(i)&&i.isCss||rr(i)?r.push("".concat(Hc(o),":"),i,";"):br(i)?r.push.apply(r,qr(qr(["".concat(o," {")],Ip(i),!1),["}"],!1)):r.push("".concat(Hc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Sp||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Jt(e,t,n,r){if(Op(e))return[];if(uu(e))return[".".concat(e.styledComponentId)];if(rr(e)){if(!rr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Jt(o,t,n,r)}var i;return e instanceof Lh?n?(e.inject(n,r),[e.getName(r)]):[e]:br(e)?Ip(e):Array.isArray(e)?Array.prototype.concat.apply(Ki,e.map(function(l){return Jt(l,t,n,r)})):[e.toString()]}function Lp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(rr(n)&&!uu(n))return!1}return!0}var Ah=Cp("6.0.5"),Dh=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Lp(t),this.componentId=n,this.baseHash=Dn(Ah,n),this.baseStyle=r,_i.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=pn(o,this.staticRulesId);else{var i=ns(Jt(this.rules,t,n,r)),l=ts(Dn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=pn(o,l),this.staticRulesId=l}else{for(var s=Dn(this.baseHash,r.hash),c="",m=0;m<this.rules.length;m++){var p=this.rules[m];if(typeof p=="string")c+=p;else if(p){var h=ns(Jt(p,t,n,r));s=Dn(s,h),c+=h}}if(c){var g=ts(s>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),o=pn(o,g)}}return o},e}(),fu=ce.createContext(void 0);fu.Consumer;var Zl={};function Fh(e,t,n){var r=uu(e),o=e,i=!Kl(e),l=t.attrs,a=l===void 0?Ki:l,s=t.componentId,c=s===void 0?function(d,v){var k=typeof d!="string"?"sc":Ac(d);Zl[k]=(Zl[k]||0)+1;var C="".concat(k,"-").concat($p("6.0.5"+k+Zl[k]));return v?"".concat(v,"-").concat(C):C}(t.displayName,t.parentComponentId):s,m=t.displayName;m===void 0&&function(d){return Kl(d)?"styled.".concat(d):"Styled(".concat(fh(d),")")}(e);var p=t.displayName&&t.componentId?"".concat(Ac(t.displayName),"-").concat(t.componentId):t.componentId||c,h=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;g=function(d,v){return w(d,v)&&y(d,v)}}else g=w}var N=new Dh(n,p,r?o.componentStyle:void 0);function f(d,v){return function(k,C,x){var z=k.attrs,G=k.componentStyle,O=k.defaultProps,Me=k.foldedComponentIds,on=k.styledComponentId,ln=k.target,fo=ce.useContext(fu),vl=is(),an=k.shouldForwardProp||vl.shouldForwardProp,Xe=function(xt,Ae,jt){for(var De,Ke=ke(ke({},Ae),{className:void 0,theme:jt}),wl=0;wl<xt.length;wl+=1){var po=rr(De=xt[wl])?De(Ke):De;for(var Ot in po)Ke[Ot]=Ot==="className"?pn(Ke[Ot],po[Ot]):Ot==="style"?ke(ke({},Ke[Ot]),po[Ot]):po[Ot]}return Ae.className&&(Ke.className=pn(Ke.className,Ae.className)),Ke}(z,C,kp(C,fo,O)||nr),_=Xe.as||ln,T={};for(var R in Xe)Xe[R]===void 0||R[0]==="$"||R==="as"||R==="theme"||(R==="forwardedAs"?T.as=Xe.forwardedAs:an&&!an(R,_)||(T[R]=Xe[R]));var X=function(xt,Ae){var jt=is(),De=xt.generateAndInjectStyles(Ae,jt.styleSheet,jt.stylis);return De}(G,Xe),b=pn(Me,on);return X&&(b+=" "+X),Xe.className&&(b+=" "+Xe.className),T[Kl(_)&&!Ep.has(_)?"class":"className"]=b,T.ref=x,L.createElement(_,T)}(u,d,v)}var u=ce.forwardRef(f);return u.attrs=h,u.componentStyle=N,u.shouldForwardProp=g,u.foldedComponentIds=r?pn(o.foldedComponentIds,o.styledComponentId):"",u.styledComponentId=p,u.target=r?o.target:e,Object.defineProperty(u,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?function(v){for(var k=[],C=1;C<arguments.length;C++)k[C-1]=arguments[C];for(var x=0,z=k;x<z.length;x++)rs(v,z[x],!0);return v}({},o.defaultProps,d):d}}),cu(u,function(){return".".concat(u.styledComponentId)}),i&&zp(u,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),u}function Wc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Yc=function(e){return Object.assign(e,{isCss:!0})};function Mp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(rr(e)||br(e)){var r=e;return Yc(Jt(Wc(Ki,qr([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Jt(o):Yc(Jt(Wc(o,t)))}function ls(e,t,n){if(n===void 0&&(n=nr),!t)throw uo(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Mp.apply(void 0,qr([o],i,!1)))};return r.attrs=function(o){return ls(e,t,ke(ke({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ls(e,t,ke(ke({},n),o))},r}var Ap=function(e){return ls(Fh,e)},ge=Ap;Ep.forEach(function(e){ge[e]=Ap(e)});var Uh=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Lp(t),_i.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(ns(Jt(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&_i.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Bh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Mp.apply(void 0,qr([e],t,!1)),o="sc-global-".concat($p(JSON.stringify(r))),i=new Uh(r,o),l=function(s){var c=is(),m=ce.useContext(fu),p=ce.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&a(p,s,c.styleSheet,m,c.stylis),ce.useLayoutEffect(function(){if(!c.styleSheet.server)return a(p,s,c.styleSheet,m,c.stylis),function(){return i.removeStyles(p,c.styleSheet)}},[p,s,c.styleSheet,m,c.stylis]),null};function a(s,c,m,p,h){if(i.isStatic)i.renderStyles(s,ah,m,h);else{var g=ke(ke({},c),{theme:kp(c,p,l.defaultProps)});i.renderStyles(s,g,m,h)}}return ce.memo(l)}const Lt=ge.p`
  word-spacing: 5px;
  line-height: 1.2;
  
`;function Vh(){return S.jsxs(S.Fragment,{children:[S.jsx(Lt,{children:"Engenheiro de software apaixonado por desenvolvimento web, focado principalmente no universo frontend. Meu nome é Rafael, e estou sempre buscando aprender e aprimorar minhas habilidades para criar experiências de usuário incríveis."}),S.jsx("br",{}),S.jsx(Lt,{children:"Iniciei minha paixão por codificação em 2012, quando entrei na faculdade Eniac para cursar Sistemas de Informação."}),S.jsx("br",{}),S.jsx(Lt,{children:"Todo trabalho que envolvia programação, era direcionado à mim. Meus primeiros passos com HTML começaram aqui, e desde então nunca parei."}),S.jsx("br",{}),S.jsx(Lt,{children:"Em 2018 começei a investir de fato na minha carreira como programador."}),S.jsx("br",{}),S.jsxs(Lt,{children:["Comecei meus estudos com ",S.jsx("b",{children:"Csharp"})," e ",S.jsx("b",{children:"Unity"})," para criar"," ",S.jsx("a",{href:"https://rafones12.itch.io/",target:"_blank",children:"Jogos"}),", e também criei muitos sites para pessoas proximas utilizando WordPress."]}),S.jsx("br",{}),S.jsx(Lt,{children:"Tenho experiência prática profissional de 2 anos no desenvolvimento front, interfaces de usuário responsivas e interativas, utilizando bibliotecas e frameworks modernos como React e Angular. Também estou familiarizado com o uso de preprocessadores CSS, controle de versão com Git e integração com APIs."}),S.jsx("br",{}),S.jsx(Lt,{children:"Além do código, sou um defensor da usabilidade e da acessibilidade, acreditando que a experiência do usuário é fundamental para o sucesso de qualquer projeto. Adoro trabalhar em equipes colaborativas, onde posso contribuir com minhas ideias e aprender com os outros."}),S.jsx("br",{}),S.jsxs(Lt,{children:["Hoje estou me especializando fortemente em ",S.jsx("b",{children:"React"})," e Javascript"]})]})}const Hh=ge.main`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  padding: 1rem;

  border-radius: 5px;

  transition: 0.3s;

  &:hover {
    box-shadow: 1px 1px 10px white;
  }
`,Wh=ge.div`
  color: #5c6b82;
`,Yh=ge.div`
  h3 {
    color: #d7dce5;
  }

  h4 {
    color: #5c6b82;
  }

  p {
    padding-top: 5px;
  }
`;function Qh(){return S.jsx(S.Fragment,{children:S.jsxs(Hh,{children:[S.jsx(Wh,{children:"2022 - 2023"}),S.jsxs(Yh,{children:[S.jsx("h3",{children:"Pacto Soluções"}),S.jsx("h4",{children:"Desenvolvedor frontend"}),S.jsx("p",{children:"Criação de páginas web utilizando componentes criados pela Pacto, usando Angular (Versão 8 /Node 12.22.12). Essas páginas tem interligação com o Backend onde eu criava formulários e exibo em listas."}),S.jsx("br",{}),S.jsx("p",{children:"Realizava a criação de novos componentes ou alteração dos mesmos de acordo com as especificações. Realizava as documentações dos componentes utilizando Storybook. Projeto iniciado por mim e orquestrado através do PM e tech lead, onde a estratégia eram documentar os componentes sem atrapalhar as sprints e criar um design system."}),S.jsx("br",{}),S.jsx("p",{children:"Adquiri conhecimentos em docker no decorrer do projeto para ter acesso aos serviços de backend local, para assim ganhar velocidade nas entregas. Participei de reuniões para arquitetar um novo design system da Pacto, junto com a reformulação dos componentes e alinhamento com o time de UX."}),S.jsx("br",{}),S.jsx("p",{children:"Usava o Gitlab como versionador e acompanhava as publicações através da pipeline. Utilizava o Jira para controle da sprint e apontamentos de horas."})]})]})})}const Jl="/portfolio/assets/todo-fd76723f.png",Xh=ge.div`
  width: auto;
  height: 28px;

  padding-left: 5px;
  padding-right: 5px;

  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #122b39;

  color: #5ee9d3;
`;function Ce(e){return S.jsx(Xh,{children:e.name})}const vr={extraSmall:"640px",small:"768px",medium:"1024px",large:"1280px",extraLarge:"1536px"},_e={extraSmall:`(min-width: ${vr.extraSmall})`,small:`(min-width: ${vr.small})`,medium:`(min-width: ${vr.medium})`,large:`(min-width: ${vr.large})`,extraLarge:`(min-width: ${vr.extraLarge})`},Kh=ge.div`
display: flex;
flex-direction: column;
gap: 2rem;
`,ql=ge.div`
  padding: 1rem ;

  border-radius: 5px;

  display: flex;
  flex-direction: row;

  transition: 0.3s;

  &:hover {
    box-shadow: 1px 1px 10px white;
  }

  @media ${_e.extraSmall} {
    display: flex;
    flex-direction: column;
  }
`,bl=ge.div`
  margin-right: 1rem;

  width: 120px;
  height: 68.9px;

  img {
    width: 120px;
    height: 68.9px;
  }

  @media ${_e.extraSmall} {
    margin-top: 1rem;

    width: 120px;
    height: 68.9px;

    order: 1;
  }
`,ea=ge.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: #d7dce5;
  }
`,ta=ge.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  a {
    color: #94a3b8;
    font-weight: bold;
  }
`,na=ge.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;

`;function Gh(){return S.jsxs(Kh,{children:[S.jsxs(ql,{children:[S.jsx(bl,{children:S.jsx("img",{src:Jl,sizes:"16px",alt:"Jogo da velha"})}),S.jsxs(ea,{children:[S.jsx("h3",{children:"Jogo da velha"}),S.jsx("p",{children:"Um jogo clássico para você se divertir com seus amigos."}),S.jsxs(ta,{children:[S.jsx("a",{href:"https://rafaholive.github.io/jogo-da-velha",target:"_blank",children:"Projeto"}),S.jsx("a",{href:"https://github.com/RafahOlive/jogo-da-velha",target:"_blank",children:"Repositorio"})]}),S.jsxs(na,{children:[S.jsx(Ce,{name:"Jogo"}),S.jsx(Ce,{name:"React"}),S.jsx(Ce,{name:"Typescript"}),S.jsx(Ce,{name:"Vite"}),S.jsx(Ce,{name:"Responsivo"})]})]})]}),S.jsxs(ql,{children:[S.jsx(bl,{children:S.jsx("img",{src:Jl,sizes:"16px",alt:"lista de tarefas"})}),S.jsxs(ea,{children:[S.jsx("h3",{children:"Lista de tarefas"}),S.jsx("p",{children:"Aplicativo que armazena informacões"}),S.jsxs(ta,{children:[S.jsx("a",{href:"https://rafaholive.github.io/todo-list-react/",target:"_blank",children:"Projeto"}),S.jsx("a",{href:"https://github.com/RafahOlive/todo-list-react",target:"_blank",children:"Repositorio"})]}),S.jsxs(na,{children:[S.jsx(Ce,{name:"React"}),S.jsx(Ce,{name:"Typescript"}),S.jsx(Ce,{name:"Vite"}),S.jsx(Ce,{name:"Responsivo"})]})]})]}),S.jsxs(ql,{children:[S.jsx(bl,{children:S.jsx("img",{src:Jl,sizes:"16px",alt:"E-commerce"})}),S.jsxs(ea,{children:[S.jsx("h3",{children:"E-Commerce"}),S.jsx("p",{children:"Site feito de exemplo de um e-commerce."}),S.jsx(ta,{children:S.jsx("a",{href:"https://github.com/RafahOlive/E-commerce",target:"_blank",children:"Repositorio"})}),S.jsxs(na,{children:[S.jsx(Ce,{name:"React"}),S.jsx(Ce,{name:"Typescript"}),S.jsx(Ce,{name:"Stitches"}),S.jsx(Ce,{name:"Nextjs"}),S.jsx(Ce,{name:"Stripe"}),S.jsx(Ce,{name:"Axios"})]})]})]})]})}function Zh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Jh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var qh=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Jh(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Zh(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),xe="-ms-",Pi="-moz-",A="-webkit-",Dp="comm",du="rule",pu="decl",bh="@import",Fp="@keyframes",ey="@layer",ty=Math.abs,Gi=String.fromCharCode,ny=Object.assign;function ry(e,t){return me(e,0)^45?(((t<<2^me(e,0))<<2^me(e,1))<<2^me(e,2))<<2^me(e,3):0}function Up(e){return e.trim()}function oy(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function as(e,t){return e.indexOf(t)}function me(e,t){return e.charCodeAt(t)|0}function eo(e,t,n){return e.slice(t,n)}function mt(e){return e.length}function mu(e){return e.length}function jo(e,t){return t.push(e),e}function iy(e,t){return e.map(t).join("")}var Zi=1,or=1,Bp=0,Le=0,re=0,ur="";function Ji(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Zi,column:or,length:l,return:""}}function wr(e,t){return ny(Ji("",null,null,"",null,null,0),e,{length:-e.length},t)}function ly(){return re}function ay(){return re=Le>0?me(ur,--Le):0,or--,re===10&&(or=1,Zi--),re}function Ve(){return re=Le<Bp?me(ur,Le++):0,or++,re===10&&(or=1,Zi++),re}function wt(){return me(ur,Le)}function Jo(){return Le}function co(e,t){return eo(ur,e,t)}function to(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vp(e){return Zi=or=1,Bp=mt(ur=e),Le=0,[]}function Hp(e){return ur="",e}function qo(e){return Up(co(Le-1,ss(e===91?e+2:e===40?e+1:e)))}function sy(e){for(;(re=wt())&&re<33;)Ve();return to(e)>2||to(re)>3?"":" "}function uy(e,t){for(;--t&&Ve()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return co(e,Jo()+(t<6&&wt()==32&&Ve()==32))}function ss(e){for(;Ve();)switch(re){case e:return Le;case 34:case 39:e!==34&&e!==39&&ss(re);break;case 40:e===41&&ss(e);break;case 92:Ve();break}return Le}function cy(e,t){for(;Ve()&&e+re!==47+10;)if(e+re===42+42&&wt()===47)break;return"/*"+co(t,Le-1)+"*"+Gi(e===47?e:Ve())}function fy(e){for(;!to(wt());)Ve();return co(e,Le)}function dy(e){return Hp(bo("",null,null,null,[""],e=Vp(e),0,[0],e))}function bo(e,t,n,r,o,i,l,a,s){for(var c=0,m=0,p=l,h=0,g=0,w=0,y=1,N=1,f=1,u=0,d="",v=o,k=i,C=r,x=d;N;)switch(w=u,u=Ve()){case 40:if(w!=108&&me(x,p-1)==58){as(x+=D(qo(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:x+=qo(u);break;case 9:case 10:case 13:case 32:x+=sy(w);break;case 92:x+=uy(Jo()-1,7);continue;case 47:switch(wt()){case 42:case 47:jo(py(cy(Ve(),Jo()),t,n),s);break;default:x+="/"}break;case 123*y:a[c++]=mt(x)*f;case 125*y:case 59:case 0:switch(u){case 0:case 125:N=0;case 59+m:f==-1&&(x=D(x,/\f/g,"")),g>0&&mt(x)-p&&jo(g>32?Xc(x+";",r,n,p-1):Xc(D(x," ","")+";",r,n,p-2),s);break;case 59:x+=";";default:if(jo(C=Qc(x,t,n,c,m,o,a,d,v=[],k=[],p),i),u===123)if(m===0)bo(x,t,C,C,v,i,p,a,k);else switch(h===99&&me(x,3)===110?100:h){case 100:case 108:case 109:case 115:bo(e,C,C,r&&jo(Qc(e,C,C,0,0,o,a,d,o,v=[],p),k),o,k,p,a,r?v:k);break;default:bo(x,C,C,C,[""],k,0,a,k)}}c=m=g=0,y=f=1,d=x="",p=l;break;case 58:p=1+mt(x),g=w;default:if(y<1){if(u==123)--y;else if(u==125&&y++==0&&ay()==125)continue}switch(x+=Gi(u),u*y){case 38:f=m>0?1:(x+="\f",-1);break;case 44:a[c++]=(mt(x)-1)*f,f=1;break;case 64:wt()===45&&(x+=qo(Ve())),h=wt(),m=p=mt(d=x+=fy(Jo())),u++;break;case 45:w===45&&mt(x)==2&&(y=0)}}return i}function Qc(e,t,n,r,o,i,l,a,s,c,m){for(var p=o-1,h=o===0?i:[""],g=mu(h),w=0,y=0,N=0;w<r;++w)for(var f=0,u=eo(e,p+1,p=ty(y=l[w])),d=e;f<g;++f)(d=Up(y>0?h[f]+" "+u:D(u,/&\f/g,h[f])))&&(s[N++]=d);return Ji(e,t,n,o===0?du:a,s,c,m)}function py(e,t,n){return Ji(e,t,n,Dp,Gi(ly()),eo(e,2,-2),0)}function Xc(e,t,n,r){return Ji(e,t,n,pu,eo(e,0,r),eo(e,r+1,-1),r)}function Yn(e,t){for(var n="",r=mu(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function my(e,t,n,r){switch(e.type){case ey:if(e.children.length)break;case bh:case pu:return e.return=e.return||e.value;case Dp:return"";case Fp:return e.return=e.value+"{"+Yn(e.children,r)+"}";case du:e.value=e.props.join(",")}return mt(n=Yn(e.children,r))?e.return=e.value+"{"+n+"}":""}function hy(e){var t=mu(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function yy(e){return function(t){t.root||(t=t.return)&&e(t)}}var gy=function(t,n,r){for(var o=0,i=0;o=i,i=wt(),o===38&&i===12&&(n[r]=1),!to(i);)Ve();return co(t,Le)},vy=function(t,n){var r=-1,o=44;do switch(to(o)){case 0:o===38&&wt()===12&&(n[r]=1),t[r]+=gy(Le-1,n,r);break;case 2:t[r]+=qo(o);break;case 4:if(o===44){t[++r]=wt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Gi(o)}while(o=Ve());return t},wy=function(t,n){return Hp(vy(Vp(t),n))},Kc=new WeakMap,xy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Kc.get(r))&&!o){Kc.set(t,!0);for(var i=[],l=wy(n,i),a=r.props,s=0,c=0;s<l.length;s++)for(var m=0;m<a.length;m++,c++)t.props[c]=i[s]?l[s].replace(/&\f/g,a[m]):a[m]+" "+l[s]}}},Sy=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Wp(e,t){switch(ry(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+Pi+e+xe+e+e;case 6828:case 4268:return A+e+xe+e+e;case 6165:return A+e+xe+"flex-"+e+e;case 5187:return A+e+D(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return A+e+xe+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return A+e+xe+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return A+e+xe+D(e,"shrink","negative")+e;case 5292:return A+e+xe+D(e,"basis","preferred-size")+e;case 6060:return A+"box-"+D(e,"-grow","")+A+e+xe+D(e,"grow","positive")+e;case 4554:return A+D(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mt(e)-1-t>6)switch(me(e,t+1)){case 109:if(me(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+Pi+(me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~as(e,"stretch")?Wp(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(me(e,t+1)!==115)break;case 6444:switch(me(e,mt(e)-3-(~as(e,"!important")&&10))){case 107:return D(e,":",":"+A)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(me(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+xe+"$2box$3")+e}break;case 5936:switch(me(e,t+11)){case 114:return A+e+xe+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+xe+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+xe+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return A+e+xe+e+e}return e}var ky=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case pu:t.return=Wp(t.value,t.length);break;case Fp:return Yn([wr(t,{value:D(t.value,"@","@"+A)})],o);case du:if(t.length)return iy(t.props,function(i){switch(oy(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Yn([wr(t,{props:[D(i,/:(read-\w+)/,":"+Pi+"$1")]})],o);case"::placeholder":return Yn([wr(t,{props:[D(i,/:(plac\w+)/,":"+A+"input-$1")]}),wr(t,{props:[D(i,/:(plac\w+)/,":"+Pi+"$1")]}),wr(t,{props:[D(i,/:(plac\w+)/,xe+"input-$1")]})],o)}return""})}},Ey=[ky],Cy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var N=y.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||Ey,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var N=y.getAttribute("data-emotion").split(" "),f=1;f<N.length;f++)i[N[f]]=!0;a.push(y)});var s,c=[xy,Sy];{var m,p=[my,yy(function(y){m.insert(y)})],h=hy(c.concat(o,p)),g=function(N){return Yn(dy(N),h)};s=function(N,f,u,d){m=u,g(N?N+"{"+f.styles+"}":f.styles),d&&(w.inserted[f.name]=!0)}}var w={key:n,sheet:new qh({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return w.sheet.hydrate(a),w},Yp={exports:{}},B={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de=typeof Symbol=="function"&&Symbol.for,hu=de?Symbol.for("react.element"):60103,yu=de?Symbol.for("react.portal"):60106,qi=de?Symbol.for("react.fragment"):60107,bi=de?Symbol.for("react.strict_mode"):60108,el=de?Symbol.for("react.profiler"):60114,tl=de?Symbol.for("react.provider"):60109,nl=de?Symbol.for("react.context"):60110,gu=de?Symbol.for("react.async_mode"):60111,rl=de?Symbol.for("react.concurrent_mode"):60111,ol=de?Symbol.for("react.forward_ref"):60112,il=de?Symbol.for("react.suspense"):60113,$y=de?Symbol.for("react.suspense_list"):60120,ll=de?Symbol.for("react.memo"):60115,al=de?Symbol.for("react.lazy"):60116,_y=de?Symbol.for("react.block"):60121,Py=de?Symbol.for("react.fundamental"):60117,Ny=de?Symbol.for("react.responder"):60118,zy=de?Symbol.for("react.scope"):60119;function Qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case hu:switch(e=e.type,e){case gu:case rl:case qi:case el:case bi:case il:return e;default:switch(e=e&&e.$$typeof,e){case nl:case ol:case al:case ll:case tl:return e;default:return t}}case yu:return t}}}function Qp(e){return Qe(e)===rl}B.AsyncMode=gu;B.ConcurrentMode=rl;B.ContextConsumer=nl;B.ContextProvider=tl;B.Element=hu;B.ForwardRef=ol;B.Fragment=qi;B.Lazy=al;B.Memo=ll;B.Portal=yu;B.Profiler=el;B.StrictMode=bi;B.Suspense=il;B.isAsyncMode=function(e){return Qp(e)||Qe(e)===gu};B.isConcurrentMode=Qp;B.isContextConsumer=function(e){return Qe(e)===nl};B.isContextProvider=function(e){return Qe(e)===tl};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===hu};B.isForwardRef=function(e){return Qe(e)===ol};B.isFragment=function(e){return Qe(e)===qi};B.isLazy=function(e){return Qe(e)===al};B.isMemo=function(e){return Qe(e)===ll};B.isPortal=function(e){return Qe(e)===yu};B.isProfiler=function(e){return Qe(e)===el};B.isStrictMode=function(e){return Qe(e)===bi};B.isSuspense=function(e){return Qe(e)===il};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===qi||e===rl||e===el||e===bi||e===il||e===$y||typeof e=="object"&&e!==null&&(e.$$typeof===al||e.$$typeof===ll||e.$$typeof===tl||e.$$typeof===nl||e.$$typeof===ol||e.$$typeof===Py||e.$$typeof===Ny||e.$$typeof===zy||e.$$typeof===_y)};B.typeOf=Qe;Yp.exports=B;var Ty=Yp.exports,Xp=Ty,Ry={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kp={};Kp[Xp.ForwardRef]=Ry;Kp[Xp.Memo]=jy;var Oy=!0;function Gp(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var vu=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Oy===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Zp=function(t,n,r){vu(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Iy(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Ly=/[A-Z]|^ms/g,My=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Jp=function(t){return t.charCodeAt(1)===45},Gc=function(t){return t!=null&&typeof t!="boolean"},ra=U1(function(e){return Jp(e)?e:e.replace(Ly,"-$&").toLowerCase()}),Zc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(My,function(r,o,i){return ht={name:o,styles:i,next:ht},o})}return Sp[t]!==1&&!Jp(t)&&typeof n=="number"&&n!==0?n+"px":n};function no(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ht={name:n.name,styles:n.styles,next:ht},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)ht={name:r.name,styles:r.styles,next:ht},r=r.next;var o=n.styles+";";return o}return Ay(e,t,n)}case"function":{if(e!==void 0){var i=ht,l=n(e);return ht=i,no(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Ay(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=no(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":Gc(l)&&(r+=ra(i)+":"+Zc(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)Gc(l[a])&&(r+=ra(i)+":"+Zc(i,l[a])+";");else{var s=no(e,t,l);switch(i){case"animation":case"animationName":{r+=ra(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var Jc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ht,wu=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";ht=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=no(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=no(r,n,t[a]),o&&(i+=l[a]);Jc.lastIndex=0;for(var s="",c;(c=Jc.exec(i))!==null;)s+="-"+c[1];var m=Iy(i)+s;return{name:m,styles:i,next:ht}},Dy=function(t){return t()},Fy=Pu["useInsertionEffect"]?Pu["useInsertionEffect"]:!1,qp=Fy||Dy,xu={}.hasOwnProperty,bp=L.createContext(typeof HTMLElement<"u"?Cy({key:"css"}):null);bp.Provider;var e0=function(t){return L.forwardRef(function(n,r){var o=L.useContext(bp);return t(n,o,r)})},t0=L.createContext({}),us="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Uy=function(t,n){var r={};for(var o in n)xu.call(n,o)&&(r[o]=n[o]);return r[us]=t,r},By=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return vu(n,r,o),qp(function(){return Zp(n,r,o)}),null},Vy=e0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[us],i=[r],l="";typeof e.className=="string"?l=Gp(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=wu(i,void 0,L.useContext(t0));l+=t.key+"-"+a.name;var s={};for(var c in e)xu.call(e,c)&&c!=="css"&&c!==us&&(s[c]=e[c]);return s.ref=n,s.className=l,L.createElement(L.Fragment,null,L.createElement(By,{cache:t,serialized:a,isStringTag:typeof o=="string"}),L.createElement(o,s))}),Hy=Vy,Wy=S.Fragment;function ae(e,t,n){return xu.call(t,"css")?S.jsx(Hy,Uy(e,t),n):S.jsx(e,t,n)}function n0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return wu(t)}var $=function(){var t=n0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Yy=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function Qy(e,t,n){var r=[],o=Gp(e,r,n);return r.length<2?n:o+t(r)}var Xy=function(t){var n=t.cache,r=t.serializedArr;return qp(function(){for(var o=0;o<r.length;o++)Zp(n,r[o],!1)}),null},oa=e0(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,m=new Array(c),p=0;p<c;p++)m[p]=arguments[p];var h=wu(m,t.registered);return r.push(h),vu(t,h,!1),t.key+"-"+h.name},i=function(){for(var c=arguments.length,m=new Array(c),p=0;p<c;p++)m[p]=arguments[p];return Qy(t.registered,o,Yy(m))},l={css:o,cx:i,theme:L.useContext(t0)},a=e.children(l);return n=!0,L.createElement(L.Fragment,null,L.createElement(Xy,{cache:t,serializedArr:r}),a)}),Ky=Object.defineProperty,Gy=(e,t,n)=>t in e?Ky(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Oo=(e,t,n)=>(Gy(e,typeof t!="symbol"?t+"":t,n),n),cs=new Map,Io=new WeakMap,qc=0,Zy=void 0;function Jy(e){return e?(Io.has(e)||(qc+=1,Io.set(e,qc.toString())),Io.get(e)):"0"}function qy(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Jy(e.root):e[t]}`).toString()}function by(e){let t=qy(e),n=cs.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(a=>{var s;const c=a.isIntersecting&&o.some(m=>a.intersectionRatio>=m);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(s=r.get(a.target))==null||s.forEach(m=>{m(c,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},cs.set(t,n)}return n}function r0(e,t,n={},r=Zy){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:i,elements:l}=by(n);let a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),cs.delete(o))}}function eg(e){return typeof e.children!="function"}var bc=class extends L.Component{constructor(e){super(e),Oo(this,"node",null),Oo(this,"_unobserveCb",null),Oo(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Oo(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),eg(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=r0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:g,entry:w}=this.state;return e({inView:g,entry:w,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:a,trackVisibility:s,delay:c,initialInView:m,fallbackInView:p,...h}=this.props;return L.createElement(t||"div",{ref:this.handleNode,...h},e)}};function o0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:a,fallbackInView:s,onChange:c}={}){var m;const[p,h]=L.useState(null),g=L.useRef(),[w,y]=L.useState({inView:!!a,entry:void 0});g.current=c,L.useEffect(()=>{if(l||!p)return;let d;return d=r0(p,(v,k)=>{y({inView:v,entry:k}),g.current&&g.current(v,k),k.isIntersecting&&i&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,p,o,r,i,l,n,s,t]);const N=(m=w.entry)==null?void 0:m.target,f=L.useRef();!p&&N&&!i&&!l&&f.current!==N&&(f.current=N,y({inView:!!a,entry:void 0}));const u=[h,w.inView,w.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var i0={exports:{}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Su=Symbol.for("react.element"),ku=Symbol.for("react.portal"),sl=Symbol.for("react.fragment"),ul=Symbol.for("react.strict_mode"),cl=Symbol.for("react.profiler"),fl=Symbol.for("react.provider"),dl=Symbol.for("react.context"),tg=Symbol.for("react.server_context"),pl=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),yl=Symbol.for("react.memo"),gl=Symbol.for("react.lazy"),ng=Symbol.for("react.offscreen"),l0;l0=Symbol.for("react.module.reference");function nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Su:switch(e=e.type,e){case sl:case cl:case ul:case ml:case hl:return e;default:switch(e=e&&e.$$typeof,e){case tg:case dl:case pl:case gl:case yl:case fl:return e;default:return t}}case ku:return t}}}V.ContextConsumer=dl;V.ContextProvider=fl;V.Element=Su;V.ForwardRef=pl;V.Fragment=sl;V.Lazy=gl;V.Memo=yl;V.Portal=ku;V.Profiler=cl;V.StrictMode=ul;V.Suspense=ml;V.SuspenseList=hl;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return nt(e)===dl};V.isContextProvider=function(e){return nt(e)===fl};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Su};V.isForwardRef=function(e){return nt(e)===pl};V.isFragment=function(e){return nt(e)===sl};V.isLazy=function(e){return nt(e)===gl};V.isMemo=function(e){return nt(e)===yl};V.isPortal=function(e){return nt(e)===ku};V.isProfiler=function(e){return nt(e)===cl};V.isStrictMode=function(e){return nt(e)===ul};V.isSuspense=function(e){return nt(e)===ml};V.isSuspenseList=function(e){return nt(e)===hl};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===sl||e===cl||e===ul||e===ml||e===hl||e===ng||typeof e=="object"&&e!==null&&(e.$$typeof===gl||e.$$typeof===yl||e.$$typeof===fl||e.$$typeof===dl||e.$$typeof===pl||e.$$typeof===l0||e.getModuleId!==void 0)};V.typeOf=nt;i0.exports=V;var rg=i0.exports;$`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;$`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;$`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;$`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;$`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;$`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;$`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;$`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;$`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;$`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;$`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;$`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;$`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const og=$`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,ig=$`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lg=$`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ag=$`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sg=$`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Eu=$`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ug=$`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,cg=$`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fg=$`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,dg=$`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pg=$`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mg=$`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,hg=$`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function yg({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Eu,iterationCount:o=1}){return n0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function gg(e){return e==null}function vg(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function a0(e,t){return n=>n?e():t()}function ro(e){return a0(e,()=>null)}function fs(e){return ro(()=>({opacity:0}))(e)}const s0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=Eu,triggerOnce:a=!1,className:s,style:c,childClassName:m,childStyle:p,children:h,onVisibilityChange:g}=e,w=L.useMemo(()=>yg({keyframes:l,duration:o}),[o,l]);return gg(h)?null:vg(h)?ae(xg,{...e,animationStyles:w,children:String(h)}):rg.isFragment(h)?ae(u0,{...e,animationStyles:w}):ae(Wy,{children:L.Children.map(h,(y,N)=>{if(!L.isValidElement(y))return null;const f=r+(t?N*o*n:0);switch(y.type){case"ol":case"ul":return ae(oa,{children:({cx:u})=>ae(y.type,{...y.props,className:u(s,y.props.className),style:Object.assign({},c,y.props.style),children:ae(s0,{...e,children:y.props.children})})});case"li":return ae(bc,{threshold:i,triggerOnce:a,onChange:g,children:({inView:u,ref:d})=>ae(oa,{children:({cx:v})=>ae(y.type,{...y.props,ref:d,className:v(m,y.props.className),css:ro(()=>w)(u),style:Object.assign({},p,y.props.style,fs(!u),{animationDelay:f+"ms"})})})});default:return ae(bc,{threshold:i,triggerOnce:a,onChange:g,children:({inView:u,ref:d})=>ae("div",{ref:d,className:s,css:ro(()=>w)(u),style:Object.assign({},c,fs(!u),{animationDelay:f+"ms"}),children:ae(oa,{children:({cx:v})=>ae(y.type,{...y.props,className:v(m,y.props.className),style:Object.assign({},p,y.props.style)})})})})}})})},wg={display:"inline-block",whiteSpace:"pre"},xg=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:c,children:m,onVisibilityChange:p}=e,{ref:h,inView:g}=o0({triggerOnce:a,threshold:l,onChange:p});return a0(()=>ae("div",{ref:h,className:s,style:Object.assign({},c,wg),children:m.split("").map((w,y)=>ae("span",{css:ro(()=>t)(g),style:{animationDelay:o+y*i*r+"ms"},children:w},y))}),()=>ae(u0,{...e,children:m}))(n)},u0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:a}=e,{ref:s,inView:c}=o0({triggerOnce:r,threshold:n,onChange:a});return ae("div",{ref:s,className:o,css:ro(()=>t)(c),style:Object.assign({},i,fs(!c)),children:l})};$`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;$`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;$`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;$`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;$`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Sg=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,kg=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Eg=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Cg=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,$g=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,_g=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Pg=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Ng=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,zg=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Tg=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Rg=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,jg=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Og=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Ig(e,t,n){switch(n){case"bottom-left":return t?kg:ig;case"bottom-right":return t?Eg:lg;case"down":return e?t?$g:sg:t?Cg:ag;case"left":return e?t?Pg:ug:t?_g:Eu;case"right":return e?t?zg:fg:t?Ng:cg;case"top-left":return t?Tg:dg;case"top-right":return t?Rg:pg;case"up":return e?t?Og:hg:t?jg:mg;default:return t?Sg:og}}const Lg=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=L.useMemo(()=>Ig(t,r,n),[t,n,r]);return ae(s0,{keyframes:i,...o})};$`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;$`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;$`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;$`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;$`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;$`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;$`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;$`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;$`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;var c0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ef=ce.createContext&&ce.createContext(c0),qt=globalThis&&globalThis.__assign||function(){return qt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},qt.apply(this,arguments)},Mg=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function f0(e){return e&&e.map(function(t,n){return ce.createElement(t.tag,qt({key:n},t.attr),f0(t.child))})}function d0(e){return function(t){return ce.createElement(Ag,qt({attr:qt({},e.attr)},t),f0(e.child))}}function Ag(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=Mg(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),ce.createElement("svg",qt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:qt(qt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&ce.createElement("title",null,i),e.children)};return ef!==void 0?ce.createElement(ef.Consumer,null,function(n){return t(n)}):t(c0)}function Dg(e){return d0({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}}]})(e)}function Fg(e){return d0({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}}]})(e)}const Ug=ge.main`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  padding-top: 3rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  display: flex;
  flex-direction: column;

  justify-content: center;

  @media ${_e.extraSmall} {
    max-width: 640px;
  }
  @media ${_e.small} {
    max-width: 768px;
  }
  @media ${_e.medium} {
    max-width: 1024px;
    display: flex;
    flex-direction: row;
  }
  @media ${_e.large} {
    max-width: 1280px;
    display: flex;
    flex-direction: row;
  }
  @media ${_e.extraLarge} {
    max-width: 1536px;
    display: flex;
    flex-direction: row;
  }
`,Bg=ge.header`
  h3 {
    padding-top: 12px;
  }

  p {
    padding-top: 16px;
  }

  @media ${_e.small} {
    position: static;
  }

  @media ${_e.medium} {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;

    position: sticky;
    top: 3rem;

    align-self: flex-start;
  }
`,Vg=ge.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  margin-top: 2rem;

  text-align: center;
    vertical-align: center;

  button, a {
    width: fit-content;
    background: none;
    border: none;
    cursor: pointer;

    font-family: "IBM Plex Sans";
    font-size: medium;
    color: #64748b;

    transition: 0.1s;
  }

  button:hover, a:hover {
    background: none;

    color: #ffffff;

    font-size: large;
  }
  @media ${_e.extraSmall} {
    display: flex;
    flex-direction: row;
    gap: 10px;

    margin-top: 1rem;
    button {
      width: auto;
      height: 30px;
    }
  }

  @media ${_e.small} {
    display: flex;
    flex-direction: row;
    gap: 10px;

    /* margin-top: 1rem; */
    button {
      width: auto;
      height: 30px;
    }
  }

  @media ${_e.medium} {
    display: flex;
    flex-direction: row;
    margin-top: 5.4rem;
  }

  @media ${_e.large} {
    display: flex;
    flex-direction: row;

    margin-top: 5.4rem;
  }
`,Hg=ge.div`
  margin-top: 2rem;
  margin-bottom: 5rem;

  a {
    color: #64748b;

    margin-top: 1rem;
    margin-right: 1rem;

    transition: 0.1s;
  }

  a:hover {
    color: #ffffff;
  }

  @media ${_e.extraSmall} {
    margin-top: 1rem;
  }
  @media ${_e.medium}{
    order: 2;
    margin-top: 30rem;
  }

`,Wg=ge.div`
  margin-top: 4rem;
  width: 100%;
  height: auto;
`;function Yg(){const[e,t]=L.useState(!1),[n,r]=L.useState(!1),[o,i]=L.useState(!1);function l(){t(!0),r(!1),i(!1)}function a(){t(!1),r(!0),i(!1)}function s(){t(!1),r(!1),i(!0)}return S.jsxs(Ug,{children:[S.jsxs(Bg,{children:[S.jsx("h1",{children:"Rafael Ribeiro"}),S.jsx("h3",{children:"Desenvolvedor Frontend e Engenheiro de Software"}),S.jsx("p",{children:"Crio sites responsivos, soluções web e alguns jogos 🎮"}),S.jsxs(Hg,{children:[S.jsx("a",{href:"https://www.linkedin.com/in/rafaelribeirodev/",target:"_blank",children:S.jsx(Fg,{size:24})}),S.jsx("a",{href:"https://github.com/RafahOlive",target:"_blank",children:S.jsx(Dg,{size:24})})]}),S.jsxs(Vg,{children:[S.jsx("button",{onClick:l,children:"Sobre"}),S.jsx("button",{onClick:a,children:"Experiência"}),S.jsx("button",{onClick:s,children:"Projetos"}),S.jsx("button",{children:S.jsx("a",{href:"/Currículo.pdf",target:"_blank",children:"Baixar Curriculo"})})]})]}),S.jsx(Wg,{children:S.jsxs(Lg,{duration:1e3,children:[e&&S.jsx(Vh,{}),n&&S.jsx(Qh,{}),o&&S.jsx(Gh,{})]})})]})}const Qg=Bh`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: 1;

  background: #0F172A;

  font-family: 'IBM Plex Sans';

}

a{
  text-decoration: none;
  color: #94a3b8;
  font-weight: bold;
}

p{
  font-size: 16px;
  color: #94A3B8;
}

h1{
  font-size: 2.5rem;
  line-height: 2.5rem;
}

h2{
    font-size: 1.125rem;
    line-height: 1.75rem;

    font-weight: 500;
}

h1, h3 {
    color: #e2e8f0;
  }

`;function Xg(){return S.jsxs(S.Fragment,{children:[S.jsx(Qg,{}),S.jsx(Yg,{})]})}ia.createRoot(document.getElementById("root")).render(S.jsx(ce.StrictMode,{children:S.jsx(Xg,{})}));
