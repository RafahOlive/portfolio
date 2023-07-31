function xp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function kp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uf={exports:{}},Ni={},cf={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro=Symbol.for("react.element"),Ep=Symbol.for("react.portal"),Cp=Symbol.for("react.fragment"),$p=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),Pp=Symbol.for("react.provider"),Np=Symbol.for("react.context"),zp=Symbol.for("react.forward_ref"),Op=Symbol.for("react.suspense"),Rp=Symbol.for("react.memo"),Tp=Symbol.for("react.lazy"),wu=Symbol.iterator;function Ap(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var ff={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},df=Object.assign,pf={};function ir(e,t,n){this.props=e,this.context=t,this.refs=pf,this.updater=n||ff}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mf(){}mf.prototype=ir.prototype;function ls(e,t,n){this.props=e,this.context=t,this.refs=pf,this.updater=n||ff}var as=ls.prototype=new mf;as.constructor=ls;df(as,ir.prototype);as.isPureReactComponent=!0;var Su=Array.isArray,hf=Object.prototype.hasOwnProperty,ss={current:null},yf={key:!0,ref:!0,__self:!0,__source:!0};function gf(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)hf.call(t,r)&&!yf.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ro,type:e,key:i,ref:l,props:o,_owner:ss.current}}function Ip(e,t){return{$$typeof:ro,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function us(e){return typeof e=="object"&&e!==null&&e.$$typeof===ro}function jp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xu=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jp(""+e.key):t.toString(36)}function Io(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ro:case Ep:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Sl(l,0):r,Su(o)?(n="",e!=null&&(n=e.replace(xu,"$&/")+"/"),Io(o,t,n,"",function(c){return c})):o!=null&&(us(o)&&(o=Ip(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(xu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Su(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Sl(i,a);l+=Io(i,t,n,s,o)}else if(s=Ap(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Sl(i,a++),l+=Io(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function po(e,t,n){if(e==null)return e;var r=[],o=0;return Io(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Mp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},jo={transition:null},Lp={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:jo,ReactCurrentOwner:ss};M.Children={map:po,forEach:function(e,t,n){po(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return po(e,function(){t++}),t},toArray:function(e){return po(e,function(t){return t})||[]},only:function(e){if(!us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=ir;M.Fragment=Cp;M.Profiler=_p;M.PureComponent=ls;M.StrictMode=$p;M.Suspense=Op;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lp;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=df({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ss.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)hf.call(t,s)&&!yf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ro,type:e.type,key:o,ref:i,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:Np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pp,_context:e},e.Consumer=e};M.createElement=gf;M.createFactory=function(e){var t=gf.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:zp,render:e}};M.isValidElement=us;M.lazy=function(e){return{$$typeof:Tp,_payload:{_status:-1,_result:e},_init:Mp}};M.memo=function(e,t){return{$$typeof:Rp,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=jo.transition;jo.transition={};try{e()}finally{jo.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return _e.current.useCallback(e,t)};M.useContext=function(e){return _e.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};M.useEffect=function(e,t){return _e.current.useEffect(e,t)};M.useId=function(){return _e.current.useId()};M.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return _e.current.useMemo(e,t)};M.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};M.useRef=function(e){return _e.current.useRef(e)};M.useState=function(e){return _e.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return _e.current.useTransition()};M.version="18.2.0";cf.exports=M;var I=cf.exports;const O=kp(I),ku=xp({__proto__:null,default:O},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=I,Dp=Symbol.for("react.element"),Vp=Symbol.for("react.fragment"),Hp=Object.prototype.hasOwnProperty,Up=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bp={key:!0,ref:!0,__self:!0,__source:!0};function vf(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Hp.call(t,r)&&!Bp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Dp,type:e,key:i,ref:l,props:o,_owner:Up.current}}Ni.Fragment=Vp;Ni.jsx=vf;Ni.jsxs=vf;uf.exports=Ni;var $=uf.exports,bl={},wf={exports:{}},Ue={},Sf={exports:{}},xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,R){var T=_.length;_.push(R);e:for(;0<T;){var X=T-1>>>1,ee=_[X];if(0<o(ee,R))_[X]=R,_[T]=ee,T=X;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var R=_[0],T=_.pop();if(T!==R){_[0]=T;e:for(var X=0,ee=_.length,wt=ee>>>1;X<wt;){var je=2*(X+1)-1,Rt=_[je],Me=je+1,Qe=_[Me];if(0>o(Rt,T))Me<ee&&0>o(Qe,Rt)?(_[X]=Qe,_[Me]=T,X=Me):(_[X]=Rt,_[je]=T,X=je);else if(Me<ee&&0>o(Qe,T))_[X]=Qe,_[Me]=T,X=Me;else break e}}return R}function o(_,R){var T=_.sortIndex-R.sortIndex;return T!==0?T:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],m=1,p=null,h=3,g=!1,v=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(_){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=_)r(c),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(c)}}function w(_){if(y=!1,d(_),!v)if(n(s)!==null)v=!0,rn(x);else{var R=n(c);R!==null&&Ye(w,R.startTime-_)}}function x(_,R){v=!1,y&&(y=!1,f(z),z=-1),g=!0;var T=h;try{for(d(R),p=n(s);p!==null&&(!(p.expirationTime>R)||_&&!Ie());){var X=p.callback;if(typeof X=="function"){p.callback=null,h=p.priorityLevel;var ee=X(p.expirationTime<=R);R=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(s)&&r(s),d(R)}else r(s);p=n(s)}if(p!==null)var wt=!0;else{var je=n(c);je!==null&&Ye(w,je.startTime-R),wt=!1}return wt}finally{p=null,h=T,g=!1}}var E=!1,S=null,z=-1,G=5,j=-1;function Ie(){return!(e.unstable_now()-j<G)}function tn(){if(S!==null){var _=e.unstable_now();j=_;var R=!0;try{R=S(!0,_)}finally{R?nn():(E=!1,S=null)}}else E=!1}var nn;if(typeof u=="function")nn=function(){u(tn)};else if(typeof MessageChannel<"u"){var co=new MessageChannel,vl=co.port2;co.port1.onmessage=tn,nn=function(){vl.postMessage(null)}}else nn=function(){N(tn,0)};function rn(_){S=_,E||(E=!0,nn())}function Ye(_,R){z=N(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,rn(x))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var T=h;h=R;try{return _()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=h;h=_;try{return R()}finally{h=T}},e.unstable_scheduleCallback=function(_,R,T){var X=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?X+T:X):T=X,_){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=T+ee,_={id:m++,callback:R,priorityLevel:_,startTime:T,expirationTime:ee,sortIndex:-1},T>X?(_.sortIndex=T,t(c,_),n(s)===null&&_===n(c)&&(y?(f(z),z=-1):y=!0,Ye(w,T-X))):(_.sortIndex=ee,t(s,_),v||g||(v=!0,rn(x))),_},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(_){var R=h;return function(){var T=h;h=R;try{return _.apply(this,arguments)}finally{h=T}}}})(xf);Sf.exports=xf;var Wp=Sf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf=I,He=Wp;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ef=new Set,Ir={};function Sn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(Ir[e]=t,e=0;e<t.length;e++)Ef.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ea=Object.prototype.hasOwnProperty,Yp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eu={},Cu={};function Qp(e){return ea.call(Cu,e)?!0:ea.call(Eu,e)?!1:Yp.test(e)?Cu[e]=!0:(Eu[e]=!0,!1)}function Zp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xp(e,t,n,r){if(t===null||typeof t>"u"||Zp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var cs=/[\-:]([a-z])/g;function fs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cs,fs);ye[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cs,fs);ye[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cs,fs);ye[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ds(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xp(t,n,o,r)&&(n=null),r||o===null?Qp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ot=kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mo=Symbol.for("react.element"),_n=Symbol.for("react.portal"),Pn=Symbol.for("react.fragment"),ps=Symbol.for("react.strict_mode"),ta=Symbol.for("react.profiler"),Cf=Symbol.for("react.provider"),$f=Symbol.for("react.context"),ms=Symbol.for("react.forward_ref"),na=Symbol.for("react.suspense"),ra=Symbol.for("react.suspense_list"),hs=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),_f=Symbol.for("react.offscreen"),$u=Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=$u&&e[$u]||e["@@iterator"],typeof e=="function"?e:null)}var b=Object.assign,xl;function wr(e){if(xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xl=t&&t[1]||""}return`
`+xl+e}var kl=!1;function El(e,t){if(!e||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wr(e):""}function Kp(e){switch(e.tag){case 5:return wr(e.type);case 16:return wr("Lazy");case 13:return wr("Suspense");case 19:return wr("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pn:return"Fragment";case _n:return"Portal";case ta:return"Profiler";case ps:return"StrictMode";case na:return"Suspense";case ra:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $f:return(e.displayName||"Context")+".Consumer";case Cf:return(e._context.displayName||"Context")+".Provider";case ms:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hs:return t=e.displayName||null,t!==null?t:oa(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return oa(e(t))}catch{}}return null}function Gp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oa(t);case 8:return t===ps?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jp(e){var t=Pf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ho(e){e._valueTracker||(e._valueTracker=Jp(e))}function Nf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ia(e,t){var n=t.checked;return b({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _u(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zf(e,t){t=t.checked,t!=null&&ds(e,"checked",t,!1)}function la(e,t){zf(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?aa(e,t.type,n):t.hasOwnProperty("defaultValue")&&aa(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function aa(e,t,n){(t!=="number"||bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sr=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return b({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Sr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function Of(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yo,Tf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yo=yo||document.createElement("div"),yo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qp=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){qp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cr[t]=Cr[e]})});function Af(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+t).trim():t+"px"}function If(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Af(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var bp=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(e,t){if(t){if(bp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function fa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var da=null;function ys(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pa=null,Vn=null,Hn=null;function Ou(e){if(e=lo(e)){if(typeof pa!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ai(t),pa(e.stateNode,e.type,t))}}function jf(e){Vn?Hn?Hn.push(e):Hn=[e]:Vn=e}function Mf(){if(Vn){var e=Vn,t=Hn;if(Hn=Vn=null,Ou(e),t)for(e=0;e<t.length;e++)Ou(t[e])}}function Lf(e,t){return e(t)}function Ff(){}var Cl=!1;function Df(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Lf(e,t,n)}finally{Cl=!1,(Vn!==null||Hn!==null)&&(Ff(),Mf())}}function Mr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ai(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var ma=!1;if(_t)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){ma=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{ma=!1}function e1(e,t,n,r,o,i,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var $r=!1,ei=null,ti=!1,ha=null,t1={onError:function(e){$r=!0,ei=e}};function n1(e,t,n,r,o,i,l,a,s){$r=!1,ei=null,e1.apply(t1,arguments)}function r1(e,t,n,r,o,i,l,a,s){if(n1.apply(this,arguments),$r){if($r){var c=ei;$r=!1,ei=null}else throw Error(k(198));ti||(ti=!0,ha=c)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ru(e){if(xn(e)!==e)throw Error(k(188))}function o1(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ru(o),e;if(i===r)return Ru(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Hf(e){return e=o1(e),e!==null?Uf(e):null}function Uf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Uf(e);if(t!==null)return t;e=e.sibling}return null}var Bf=He.unstable_scheduleCallback,Tu=He.unstable_cancelCallback,i1=He.unstable_shouldYield,l1=He.unstable_requestPaint,ne=He.unstable_now,a1=He.unstable_getCurrentPriorityLevel,gs=He.unstable_ImmediatePriority,Wf=He.unstable_UserBlockingPriority,ni=He.unstable_NormalPriority,s1=He.unstable_LowPriority,Yf=He.unstable_IdlePriority,zi=null,yt=null;function u1(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:d1,c1=Math.log,f1=Math.LN2;function d1(e){return e>>>=0,e===0?32:31-(c1(e)/f1|0)|0}var go=64,vo=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=xr(a):(i&=l,i!==0&&(r=xr(i)))}else l=n&~o,l!==0?r=xr(l):i!==0&&(r=xr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),o=1<<n,r|=e[n],t&=~o;return r}function p1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-it(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=p1(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ya(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qf(){var e=go;return go<<=1,!(go&4194240)&&(go=64),e}function $l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function h1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-it(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function vs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function Zf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xf,ws,Kf,Gf,Jf,ga=!1,wo=[],Ht=null,Ut=null,Bt=null,Lr=new Map,Fr=new Map,Lt=[],y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(t.pointerId)}}function dr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=lo(t),t!==null&&ws(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function g1(e,t,n,r,o){switch(t){case"focusin":return Ht=dr(Ht,e,t,n,r,o),!0;case"dragenter":return Ut=dr(Ut,e,t,n,r,o),!0;case"mouseover":return Bt=dr(Bt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Lr.set(i,dr(Lr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Fr.set(i,dr(Fr.get(i)||null,e,t,n,r,o)),!0}return!1}function qf(e){var t=sn(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=Vf(n),t!==null){e.blockedOn=t,Jf(e.priority,function(){Kf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);da=r,n.target.dispatchEvent(r),da=null}else return t=lo(n),t!==null&&ws(t),e.blockedOn=n,!1;t.shift()}return!0}function Iu(e,t,n){Mo(e)&&n.delete(t)}function v1(){ga=!1,Ht!==null&&Mo(Ht)&&(Ht=null),Ut!==null&&Mo(Ut)&&(Ut=null),Bt!==null&&Mo(Bt)&&(Bt=null),Lr.forEach(Iu),Fr.forEach(Iu)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,ga||(ga=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,v1)))}function Dr(e){function t(o){return pr(o,e)}if(0<wo.length){pr(wo[0],e);for(var n=1;n<wo.length;n++){var r=wo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&pr(Ht,e),Ut!==null&&pr(Ut,e),Bt!==null&&pr(Bt,e),Lr.forEach(t),Fr.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)qf(n),n.blockedOn===null&&Lt.shift()}var Un=Ot.ReactCurrentBatchConfig,oi=!0;function w1(e,t,n,r){var o=H,i=Un.transition;Un.transition=null;try{H=1,Ss(e,t,n,r)}finally{H=o,Un.transition=i}}function S1(e,t,n,r){var o=H,i=Un.transition;Un.transition=null;try{H=4,Ss(e,t,n,r)}finally{H=o,Un.transition=i}}function Ss(e,t,n,r){if(oi){var o=va(e,t,n,r);if(o===null)jl(e,t,r,ii,n),Au(e,r);else if(g1(o,e,t,n,r))r.stopPropagation();else if(Au(e,r),t&4&&-1<y1.indexOf(e)){for(;o!==null;){var i=lo(o);if(i!==null&&Xf(i),i=va(e,t,n,r),i===null&&jl(e,t,r,ii,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else jl(e,t,r,null,n)}}var ii=null;function va(e,t,n,r){if(ii=null,e=ys(r),e=sn(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ii=e,null}function bf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a1()){case gs:return 1;case Wf:return 4;case ni:case s1:return 16;case Yf:return 536870912;default:return 16}default:return 16}}var Dt=null,xs=null,Lo=null;function e0(){if(Lo)return Lo;var e,t=xs,n=t.length,r,o="value"in Dt?Dt.value:Dt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Lo=o.slice(e,1<r?1-r:void 0)}function Fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function So(){return!0}function ju(){return!1}function Be(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?So:ju,this.isPropagationStopped=ju,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ks=Be(lr),io=b({},lr,{view:0,detail:0}),x1=Be(io),_l,Pl,mr,Oi=b({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mr&&(mr&&e.type==="mousemove"?(_l=e.screenX-mr.screenX,Pl=e.screenY-mr.screenY):Pl=_l=0,mr=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),Mu=Be(Oi),k1=b({},Oi,{dataTransfer:0}),E1=Be(k1),C1=b({},io,{relatedTarget:0}),Nl=Be(C1),$1=b({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),_1=Be($1),P1=b({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),N1=Be(P1),z1=b({},lr,{data:0}),Lu=Be(z1),O1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=T1[e])?!!t[e]:!1}function Es(){return A1}var I1=b({},io,{key:function(e){if(e.key){var t=O1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?R1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Es,charCode:function(e){return e.type==="keypress"?Fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),j1=Be(I1),M1=b({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=Be(M1),L1=b({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Es}),F1=Be(L1),D1=b({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),V1=Be(D1),H1=b({},Oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),U1=Be(H1),B1=[9,13,27,32],Cs=_t&&"CompositionEvent"in window,_r=null;_t&&"documentMode"in document&&(_r=document.documentMode);var W1=_t&&"TextEvent"in window&&!_r,t0=_t&&(!Cs||_r&&8<_r&&11>=_r),Du=String.fromCharCode(32),Vu=!1;function n0(e,t){switch(e){case"keyup":return B1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function Y1(e,t){switch(e){case"compositionend":return r0(t);case"keypress":return t.which!==32?null:(Vu=!0,Du);case"textInput":return e=t.data,e===Du&&Vu?null:e;default:return null}}function Q1(e,t){if(Nn)return e==="compositionend"||!Cs&&n0(e,t)?(e=e0(),Lo=xs=Dt=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return t0&&t.locale!=="ko"?null:t.data;default:return null}}var Z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Z1[e.type]:t==="textarea"}function o0(e,t,n,r){jf(r),t=li(t,"onChange"),0<t.length&&(n=new ks("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pr=null,Vr=null;function X1(e){h0(e,0)}function Ri(e){var t=Rn(e);if(Nf(t))return e}function K1(e,t){if(e==="change")return t}var i0=!1;if(_t){var zl;if(_t){var Ol="oninput"in document;if(!Ol){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),Ol=typeof Uu.oninput=="function"}zl=Ol}else zl=!1;i0=zl&&(!document.documentMode||9<document.documentMode)}function Bu(){Pr&&(Pr.detachEvent("onpropertychange",l0),Vr=Pr=null)}function l0(e){if(e.propertyName==="value"&&Ri(Vr)){var t=[];o0(t,Vr,e,ys(e)),Df(X1,t)}}function G1(e,t,n){e==="focusin"?(Bu(),Pr=t,Vr=n,Pr.attachEvent("onpropertychange",l0)):e==="focusout"&&Bu()}function J1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ri(Vr)}function q1(e,t){if(e==="click")return Ri(t)}function b1(e,t){if(e==="input"||e==="change")return Ri(t)}function em(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:em;function Hr(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ea.call(t,o)||!st(e[o],t[o]))return!1}return!0}function Wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yu(e,t){var n=Wu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wu(n)}}function a0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?a0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function s0(){for(var e=window,t=bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bo(e.document)}return t}function $s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tm(e){var t=s0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&a0(n.ownerDocument.documentElement,n)){if(r!==null&&$s(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Yu(n,i);var l=Yu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nm=_t&&"documentMode"in document&&11>=document.documentMode,zn=null,wa=null,Nr=null,Sa=!1;function Qu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sa||zn==null||zn!==bo(r)||(r=zn,"selectionStart"in r&&$s(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Hr(Nr,r)||(Nr=r,r=li(wa,"onSelect"),0<r.length&&(t=new ks("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},Rl={},u0={};_t&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Ti(e){if(Rl[e])return Rl[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in u0)return Rl[e]=t[n];return e}var c0=Ti("animationend"),f0=Ti("animationiteration"),d0=Ti("animationstart"),p0=Ti("transitionend"),m0=new Map,Zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){m0.set(e,t),Sn(t,[e])}for(var Tl=0;Tl<Zu.length;Tl++){var Al=Zu[Tl],rm=Al.toLowerCase(),om=Al[0].toUpperCase()+Al.slice(1);qt(rm,"on"+om)}qt(c0,"onAnimationEnd");qt(f0,"onAnimationIteration");qt(d0,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(p0,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function Xu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,r1(r,t,void 0,e),e.currentTarget=null}function h0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Xu(o,a,c),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Xu(o,a,c),i=s}}}if(ti)throw e=ha,ti=!1,ha=null,e}function Y(e,t){var n=t[$a];n===void 0&&(n=t[$a]=new Set);var r=e+"__bubble";n.has(r)||(y0(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),y0(n,e,r,t)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[ko]){e[ko]=!0,Ef.forEach(function(n){n!=="selectionchange"&&(im.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ko]||(t[ko]=!0,Il("selectionchange",!1,t))}}function y0(e,t,n,r){switch(bf(t)){case 1:var o=w1;break;case 4:o=S1;break;default:o=Ss}n=o.bind(null,t,n,e),o=void 0,!ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function jl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=sn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Df(function(){var c=i,m=ys(n),p=[];e:{var h=m0.get(e);if(h!==void 0){var g=ks,v=e;switch(e){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":g=j1;break;case"focusin":v="focus",g=Nl;break;case"focusout":v="blur",g=Nl;break;case"beforeblur":case"afterblur":g=Nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=E1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=F1;break;case c0:case f0:case d0:g=_1;break;case p0:g=V1;break;case"scroll":g=x1;break;case"wheel":g=U1;break;case"copy":case"cut":case"paste":g=N1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fu}var y=(t&4)!==0,N=!y&&e==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var u=c,d;u!==null;){d=u;var w=d.stateNode;if(d.tag===5&&w!==null&&(d=w,f!==null&&(w=Mr(u,f),w!=null&&y.push(Br(u,w,d)))),N)break;u=u.return}0<y.length&&(h=new g(h,v,null,n,m),p.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==da&&(v=n.relatedTarget||n.fromElement)&&(sn(v)||v[Pt]))break e;if((g||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?sn(v):null,v!==null&&(N=xn(v),v!==N||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(y=Mu,w="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Fu,w="onPointerLeave",f="onPointerEnter",u="pointer"),N=g==null?h:Rn(g),d=v==null?h:Rn(v),h=new y(w,u+"leave",g,n,m),h.target=N,h.relatedTarget=d,w=null,sn(m)===c&&(y=new y(f,u+"enter",v,n,m),y.target=d,y.relatedTarget=N,w=y),N=w,g&&v)t:{for(y=g,f=v,u=0,d=y;d;d=En(d))u++;for(d=0,w=f;w;w=En(w))d++;for(;0<u-d;)y=En(y),u--;for(;0<d-u;)f=En(f),d--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=En(y),f=En(f)}y=null}else y=null;g!==null&&Ku(p,h,g,y,!1),v!==null&&N!==null&&Ku(p,N,v,y,!0)}}e:{if(h=c?Rn(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var x=K1;else if(Hu(h))if(i0)x=b1;else{x=J1;var E=G1}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=q1);if(x&&(x=x(e,c))){o0(p,x,n,m);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&aa(h,"number",h.value)}switch(E=c?Rn(c):window,e){case"focusin":(Hu(E)||E.contentEditable==="true")&&(zn=E,wa=c,Nr=null);break;case"focusout":Nr=wa=zn=null;break;case"mousedown":Sa=!0;break;case"contextmenu":case"mouseup":case"dragend":Sa=!1,Qu(p,n,m);break;case"selectionchange":if(nm)break;case"keydown":case"keyup":Qu(p,n,m)}var S;if(Cs)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Nn?n0(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(t0&&n.locale!=="ko"&&(Nn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Nn&&(S=e0()):(Dt=m,xs="value"in Dt?Dt.value:Dt.textContent,Nn=!0)),E=li(c,z),0<E.length&&(z=new Lu(z,e,null,n,m),p.push({event:z,listeners:E}),S?z.data=S:(S=r0(n),S!==null&&(z.data=S)))),(S=W1?Y1(e,n):Q1(e,n))&&(c=li(c,"onBeforeInput"),0<c.length&&(m=new Lu("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=S))}h0(p,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function li(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Mr(e,n),i!=null&&r.unshift(Br(e,i,o)),i=Mr(e,t),i!=null&&r.push(Br(e,i,o))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ku(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=Mr(n,i),s!=null&&l.unshift(Br(n,s,a))):o||(s=Mr(n,i),s!=null&&l.push(Br(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var lm=/\r\n?/g,am=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(lm,`
`).replace(am,"")}function Eo(e,t,n){if(t=Gu(t),Gu(e)!==t&&n)throw Error(k(425))}function ai(){}var xa=null,ka=null;function Ea(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,sm=typeof clearTimeout=="function"?clearTimeout:void 0,Ju=typeof Promise=="function"?Promise:void 0,um=typeof queueMicrotask=="function"?queueMicrotask:typeof Ju<"u"?function(e){return Ju.resolve(null).then(e).catch(cm)}:Ca;function cm(e){setTimeout(function(){throw e})}function Ml(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Dr(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ar=Math.random().toString(36).slice(2),ht="__reactFiber$"+ar,Wr="__reactProps$"+ar,Pt="__reactContainer$"+ar,$a="__reactEvents$"+ar,fm="__reactListeners$"+ar,dm="__reactHandles$"+ar;function sn(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qu(e);e!==null;){if(n=e[ht])return n;e=qu(e)}return t}e=n,n=e.parentNode}return null}function lo(e){return e=e[ht]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ai(e){return e[Wr]||null}var _a=[],Tn=-1;function bt(e){return{current:e}}function Z(e){0>Tn||(e.current=_a[Tn],_a[Tn]=null,Tn--)}function W(e,t){Tn++,_a[Tn]=e.current,e.current=t}var Jt={},Ee=bt(Jt),Oe=bt(!1),hn=Jt;function Zn(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Re(e){return e=e.childContextTypes,e!=null}function si(){Z(Oe),Z(Ee)}function bu(e,t,n){if(Ee.current!==Jt)throw Error(k(168));W(Ee,t),W(Oe,n)}function g0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,Gp(e)||"Unknown",o));return b({},n,r)}function ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,hn=Ee.current,W(Ee,e),W(Oe,Oe.current),!0}function ec(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=g0(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,Z(Oe),Z(Ee),W(Ee,e)):Z(Oe),W(Oe,n)}var kt=null,Ii=!1,Ll=!1;function v0(e){kt===null?kt=[e]:kt.push(e)}function pm(e){Ii=!0,v0(e)}function en(){if(!Ll&&kt!==null){Ll=!0;var e=0,t=H;try{var n=kt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,Ii=!1}catch(o){throw kt!==null&&(kt=kt.slice(e+1)),Bf(gs,en),o}finally{H=t,Ll=!1}}return null}var An=[],In=0,ci=null,fi=0,Ze=[],Xe=0,yn=null,Et=1,Ct="";function ln(e,t){An[In++]=fi,An[In++]=ci,ci=e,fi=t}function w0(e,t,n){Ze[Xe++]=Et,Ze[Xe++]=Ct,Ze[Xe++]=yn,yn=e;var r=Et;e=Ct;var o=32-it(r)-1;r&=~(1<<o),n+=1;var i=32-it(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Et=1<<32-it(t)+o|n<<o|r,Ct=i+e}else Et=1<<i|n<<o|r,Ct=e}function _s(e){e.return!==null&&(ln(e,1),w0(e,1,0))}function Ps(e){for(;e===ci;)ci=An[--In],An[In]=null,fi=An[--In],An[In]=null;for(;e===yn;)yn=Ze[--Xe],Ze[Xe]=null,Ct=Ze[--Xe],Ze[Xe]=null,Et=Ze[--Xe],Ze[Xe]=null}var De=null,Fe=null,K=!1,ot=null;function S0(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Fe=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yn!==null?{id:Et,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Fe=null,!0):!1;default:return!1}}function Pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Na(e){if(K){var t=Fe;if(t){var n=t;if(!tc(e,t)){if(Pa(e))throw Error(k(418));t=Wt(n.nextSibling);var r=De;t&&tc(e,t)?S0(r,n):(e.flags=e.flags&-4097|2,K=!1,De=e)}}else{if(Pa(e))throw Error(k(418));e.flags=e.flags&-4097|2,K=!1,De=e}}}function nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function Co(e){if(e!==De)return!1;if(!K)return nc(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ea(e.type,e.memoizedProps)),t&&(t=Fe)){if(Pa(e))throw x0(),Error(k(418));for(;t;)S0(e,t),t=Wt(t.nextSibling)}if(nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=De?Wt(e.stateNode.nextSibling):null;return!0}function x0(){for(var e=Fe;e;)e=Wt(e.nextSibling)}function Xn(){Fe=De=null,K=!1}function Ns(e){ot===null?ot=[e]:ot.push(e)}var mm=Ot.ReactCurrentBatchConfig;function nt(e,t){if(e&&e.defaultProps){t=b({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var di=bt(null),pi=null,jn=null,zs=null;function Os(){zs=jn=pi=null}function Rs(e){var t=di.current;Z(di),e._currentValue=t}function za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){pi=e,zs=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(zs!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(pi===null)throw Error(k(308));jn=e,pi.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var un=null;function Ts(e){un===null?un=[e]:un.push(e)}function k0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ts(t)):(n.next=o.next,o.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function As(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Nt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ts(r)):(t.next=o.next,o.next=t),r.interleaved=t,Nt(e,n)}function Do(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vs(e,n)}}function rc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mi(e,t,n,r){var o=e.updateQueue;Mt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,m=c=s=null,a=i;do{var h=a.lane,g=a.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(h=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){p=v.call(g,p,h);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,p,h):v,h==null)break e;p=b({},p,h);break e;case 2:Mt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=g,s=p):m=m.next=g,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(m===null&&(s=p),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);vn|=l,e.lanes=l,e.memoizedState=p}}function oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var C0=new kf.Component().refs;function Oa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ji={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),o=Zt(e),i=$t(r,o);i.payload=t,n!=null&&(i.callback=n),t=Yt(e,i,o),t!==null&&(lt(t,e,o,r),Do(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),o=Zt(e),i=$t(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Yt(e,i,o),t!==null&&(lt(t,e,o,r),Do(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=Zt(e),o=$t(n,r);o.tag=2,t!=null&&(o.callback=t),t=Yt(e,o,r),t!==null&&(lt(t,e,r,n),Do(t,e,r))}};function ic(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Hr(n,r)||!Hr(o,i):!0}function $0(e,t,n){var r=!1,o=Jt,i=t.contextType;return typeof i=="object"&&i!==null?i=Je(i):(o=Re(t)?hn:Ee.current,r=t.contextTypes,i=(r=r!=null)?Zn(e,o):Jt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ji,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function lc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ji.enqueueReplaceState(t,t.state,null)}function Ra(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=C0,As(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Je(i):(i=Re(t)?hn:Ee.current,o.context=Zn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Oa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ji.enqueueReplaceState(o,o.state,null),mi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===C0&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function $o(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ac(e){var t=e._init;return t(e._payload)}function _0(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Xt(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,d,w){return u===null||u.tag!==6?(u=Wl(d,f.mode,w),u.return=f,u):(u=o(u,d),u.return=f,u)}function s(f,u,d,w){var x=d.type;return x===Pn?m(f,u,d.props.children,w,d.key):u!==null&&(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===jt&&ac(x)===u.type)?(w=o(u,d.props),w.ref=hr(f,u,d),w.return=f,w):(w=Yo(d.type,d.key,d.props,null,f.mode,w),w.ref=hr(f,u,d),w.return=f,w)}function c(f,u,d,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Yl(d,f.mode,w),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function m(f,u,d,w,x){return u===null||u.tag!==7?(u=pn(d,f.mode,w,x),u.return=f,u):(u=o(u,d),u.return=f,u)}function p(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Wl(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case mo:return d=Yo(u.type,u.key,u.props,null,f.mode,d),d.ref=hr(f,null,u),d.return=f,d;case _n:return u=Yl(u,f.mode,d),u.return=f,u;case jt:var w=u._init;return p(f,w(u._payload),d)}if(Sr(u)||cr(u))return u=pn(u,f.mode,d,null),u.return=f,u;$o(f,u)}return null}function h(f,u,d,w){var x=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return x!==null?null:a(f,u,""+d,w);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case mo:return d.key===x?s(f,u,d,w):null;case _n:return d.key===x?c(f,u,d,w):null;case jt:return x=d._init,h(f,u,x(d._payload),w)}if(Sr(d)||cr(d))return x!==null?null:m(f,u,d,w,null);$o(f,d)}return null}function g(f,u,d,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(d)||null,a(u,f,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case mo:return f=f.get(w.key===null?d:w.key)||null,s(u,f,w,x);case _n:return f=f.get(w.key===null?d:w.key)||null,c(u,f,w,x);case jt:var E=w._init;return g(f,u,d,E(w._payload),x)}if(Sr(w)||cr(w))return f=f.get(d)||null,m(u,f,w,x,null);$o(u,w)}return null}function v(f,u,d,w){for(var x=null,E=null,S=u,z=u=0,G=null;S!==null&&z<d.length;z++){S.index>z?(G=S,S=null):G=S.sibling;var j=h(f,S,d[z],w);if(j===null){S===null&&(S=G);break}e&&S&&j.alternate===null&&t(f,S),u=i(j,u,z),E===null?x=j:E.sibling=j,E=j,S=G}if(z===d.length)return n(f,S),K&&ln(f,z),x;if(S===null){for(;z<d.length;z++)S=p(f,d[z],w),S!==null&&(u=i(S,u,z),E===null?x=S:E.sibling=S,E=S);return K&&ln(f,z),x}for(S=r(f,S);z<d.length;z++)G=g(S,f,z,d[z],w),G!==null&&(e&&G.alternate!==null&&S.delete(G.key===null?z:G.key),u=i(G,u,z),E===null?x=G:E.sibling=G,E=G);return e&&S.forEach(function(Ie){return t(f,Ie)}),K&&ln(f,z),x}function y(f,u,d,w){var x=cr(d);if(typeof x!="function")throw Error(k(150));if(d=x.call(d),d==null)throw Error(k(151));for(var E=x=null,S=u,z=u=0,G=null,j=d.next();S!==null&&!j.done;z++,j=d.next()){S.index>z?(G=S,S=null):G=S.sibling;var Ie=h(f,S,j.value,w);if(Ie===null){S===null&&(S=G);break}e&&S&&Ie.alternate===null&&t(f,S),u=i(Ie,u,z),E===null?x=Ie:E.sibling=Ie,E=Ie,S=G}if(j.done)return n(f,S),K&&ln(f,z),x;if(S===null){for(;!j.done;z++,j=d.next())j=p(f,j.value,w),j!==null&&(u=i(j,u,z),E===null?x=j:E.sibling=j,E=j);return K&&ln(f,z),x}for(S=r(f,S);!j.done;z++,j=d.next())j=g(S,f,z,j.value,w),j!==null&&(e&&j.alternate!==null&&S.delete(j.key===null?z:j.key),u=i(j,u,z),E===null?x=j:E.sibling=j,E=j);return e&&S.forEach(function(tn){return t(f,tn)}),K&&ln(f,z),x}function N(f,u,d,w){if(typeof d=="object"&&d!==null&&d.type===Pn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case mo:e:{for(var x=d.key,E=u;E!==null;){if(E.key===x){if(x=d.type,x===Pn){if(E.tag===7){n(f,E.sibling),u=o(E,d.props.children),u.return=f,f=u;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===jt&&ac(x)===E.type){n(f,E.sibling),u=o(E,d.props),u.ref=hr(f,E,d),u.return=f,f=u;break e}n(f,E);break}else t(f,E);E=E.sibling}d.type===Pn?(u=pn(d.props.children,f.mode,w,d.key),u.return=f,f=u):(w=Yo(d.type,d.key,d.props,null,f.mode,w),w.ref=hr(f,u,d),w.return=f,f=w)}return l(f);case _n:e:{for(E=d.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Yl(d,f.mode,w),u.return=f,f=u}return l(f);case jt:return E=d._init,N(f,u,E(d._payload),w)}if(Sr(d))return v(f,u,d,w);if(cr(d))return y(f,u,d,w);$o(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=Wl(d,f.mode,w),u.return=f,f=u),l(f)):n(f,u)}return N}var Kn=_0(!0),P0=_0(!1),ao={},gt=bt(ao),Yr=bt(ao),Qr=bt(ao);function cn(e){if(e===ao)throw Error(k(174));return e}function Is(e,t){switch(W(Qr,t),W(Yr,e),W(gt,ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ua(t,e)}Z(gt),W(gt,t)}function Gn(){Z(gt),Z(Yr),Z(Qr)}function N0(e){cn(Qr.current);var t=cn(gt.current),n=ua(t,e.type);t!==n&&(W(Yr,e),W(gt,n))}function js(e){Yr.current===e&&(Z(gt),Z(Yr))}var J=bt(0);function hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function Ms(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var Vo=Ot.ReactCurrentDispatcher,Dl=Ot.ReactCurrentBatchConfig,gn=0,q=null,le=null,ue=null,yi=!1,zr=!1,Zr=0,hm=0;function ve(){throw Error(k(321))}function Ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function Fs(e,t,n,r,o,i){if(gn=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vo.current=e===null||e.memoizedState===null?wm:Sm,e=n(r,o),zr){i=0;do{if(zr=!1,Zr=0,25<=i)throw Error(k(301));i+=1,ue=le=null,t.updateQueue=null,Vo.current=xm,e=n(r,o)}while(zr)}if(Vo.current=gi,t=le!==null&&le.next!==null,gn=0,ue=le=q=null,yi=!1,t)throw Error(k(300));return e}function Ds(){var e=Zr!==0;return Zr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?q.memoizedState=ue=e:ue=ue.next=e,ue}function qe(){if(le===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?q.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(k(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?q.memoizedState=ue=e:ue=ue.next=e}return ue}function Xr(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=qe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,c=i;do{var m=c.lane;if((gn&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,q.lanes|=m,vn|=m}c=c.next}while(c!==null&&c!==i);s===null?l=r:s.next=a,st(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,vn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=qe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);st(i,t.memoizedState)||(ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function z0(){}function O0(e,t){var n=q,r=qe(),o=t(),i=!st(r.memoizedState,o);if(i&&(r.memoizedState=o,ze=!0),r=r.queue,Vs(A0.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Kr(9,T0.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(k(349));gn&30||R0(n,t,o)}return o}function R0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function T0(e,t,n,r){t.value=n,t.getSnapshot=r,I0(t)&&j0(e)}function A0(e,t,n){return n(function(){I0(t)&&j0(e)})}function I0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function j0(e){var t=Nt(e,1);t!==null&&lt(t,e,1,-1)}function sc(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:e},t.queue=e,e=e.dispatch=vm.bind(null,q,e),[t.memoizedState,e]}function Kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function M0(){return qe().memoizedState}function Ho(e,t,n,r){var o=ft();q.flags|=e,o.memoizedState=Kr(1|t,n,void 0,r===void 0?null:r)}function Mi(e,t,n,r){var o=qe();r=r===void 0?null:r;var i=void 0;if(le!==null){var l=le.memoizedState;if(i=l.destroy,r!==null&&Ls(r,l.deps)){o.memoizedState=Kr(t,n,i,r);return}}q.flags|=e,o.memoizedState=Kr(1|t,n,i,r)}function uc(e,t){return Ho(8390656,8,e,t)}function Vs(e,t){return Mi(2048,8,e,t)}function L0(e,t){return Mi(4,2,e,t)}function F0(e,t){return Mi(4,4,e,t)}function D0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function V0(e,t,n){return n=n!=null?n.concat([e]):null,Mi(4,4,D0.bind(null,t,e),n)}function Hs(){}function H0(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function U0(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function B0(e,t,n){return gn&21?(st(n,t)||(n=Qf(),q.lanes|=n,vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function ym(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Dl.transition;Dl.transition={};try{e(!1),t()}finally{H=n,Dl.transition=r}}function W0(){return qe().memoizedState}function gm(e,t,n){var r=Zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Y0(e))Q0(t,n);else if(n=k0(e,t,n,r),n!==null){var o=$e();lt(n,e,r,o),Z0(n,t,r)}}function vm(e,t,n){var r=Zt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y0(e))Q0(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,st(a,l)){var s=t.interleaved;s===null?(o.next=o,Ts(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=k0(e,t,o,r),n!==null&&(o=$e(),lt(n,e,r,o),Z0(n,t,r))}}function Y0(e){var t=e.alternate;return e===q||t!==null&&t===q}function Q0(e,t){zr=yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Z0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vs(e,n)}}var gi={readContext:Je,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},wm={readContext:Je,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:uc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4194308,4,D0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ho(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gm.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:sc,useDebugValue:Hs,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=sc(!1),t=e[0];return e=ym.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=ft();if(K){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),fe===null)throw Error(k(349));gn&30||R0(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,uc(A0.bind(null,r,i,e),[e]),r.flags|=2048,Kr(9,T0.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=fe.identifierPrefix;if(K){var n=Ct,r=Et;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sm={readContext:Je,useCallback:H0,useContext:Je,useEffect:Vs,useImperativeHandle:V0,useInsertionEffect:L0,useLayoutEffect:F0,useMemo:U0,useReducer:Vl,useRef:M0,useState:function(){return Vl(Xr)},useDebugValue:Hs,useDeferredValue:function(e){var t=qe();return B0(t,le.memoizedState,e)},useTransition:function(){var e=Vl(Xr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:z0,useSyncExternalStore:O0,useId:W0,unstable_isNewReconciler:!1},xm={readContext:Je,useCallback:H0,useContext:Je,useEffect:Vs,useImperativeHandle:V0,useInsertionEffect:L0,useLayoutEffect:F0,useMemo:U0,useReducer:Hl,useRef:M0,useState:function(){return Hl(Xr)},useDebugValue:Hs,useDeferredValue:function(e){var t=qe();return le===null?t.memoizedState=e:B0(t,le.memoizedState,e)},useTransition:function(){var e=Hl(Xr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:z0,useSyncExternalStore:O0,useId:W0,unstable_isNewReconciler:!1};function Jn(e,t){try{var n="",r=t;do n+=Kp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ta(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var km=typeof WeakMap=="function"?WeakMap:Map;function X0(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wi||(wi=!0,Ua=r),Ta(e,t)},n}function K0(e,t,n){n=$t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ta(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ta(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function cc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new km;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Mm.bind(null,e,t,n),t.then(e,e))}function fc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e)}var Em=Ot.ReactCurrentOwner,ze=!1;function Ce(e,t,n,r){t.child=e===null?P0(t,null,n,r):Kn(t,e.child,n,r)}function pc(e,t,n,r,o){n=n.render;var i=t.ref;return Bn(t,o),r=Fs(e,t,n,r,i,o),n=Ds(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zt(e,t,o)):(K&&n&&_s(t),t.flags|=1,Ce(e,t,r,o),t.child)}function mc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ks(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,G0(e,t,i,r,o)):(e=Yo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Hr,n(l,r)&&e.ref===t.ref)return zt(e,t,o)}return t.flags|=1,e=Xt(i,r),e.ref=t.ref,e.return=t,t.child=e}function G0(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Hr(i,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,zt(e,t,o)}return Aa(e,t,n,r,o)}function J0(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Ln,Le),Le|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Ln,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(Ln,Le),Le|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(Ln,Le),Le|=r;return Ce(e,t,o,n),t.child}function q0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Aa(e,t,n,r,o){var i=Re(n)?hn:Ee.current;return i=Zn(t,i),Bn(t,o),n=Fs(e,t,n,r,i,o),r=Ds(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zt(e,t,o)):(K&&r&&_s(t),t.flags|=1,Ce(e,t,n,o),t.child)}function hc(e,t,n,r,o){if(Re(n)){var i=!0;ui(t)}else i=!1;if(Bn(t,o),t.stateNode===null)Uo(e,t),$0(t,n,r),Ra(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Je(c):(c=Re(n)?hn:Ee.current,c=Zn(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&lc(t,l,r,c),Mt=!1;var h=t.memoizedState;l.state=h,mi(t,r,l,o),s=t.memoizedState,a!==r||h!==s||Oe.current||Mt?(typeof m=="function"&&(Oa(t,n,m,r),s=t.memoizedState),(a=Mt||ic(t,n,a,r,h,s,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,E0(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:nt(t.type,a),l.props=c,p=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Je(s):(s=Re(n)?hn:Ee.current,s=Zn(t,s));var g=n.getDerivedStateFromProps;(m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||h!==s)&&lc(t,l,r,s),Mt=!1,h=t.memoizedState,l.state=h,mi(t,r,l,o);var v=t.memoizedState;a!==p||h!==v||Oe.current||Mt?(typeof g=="function"&&(Oa(t,n,g,r),v=t.memoizedState),(c=Mt||ic(t,n,c,r,h,v,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ia(e,t,n,r,i,o)}function Ia(e,t,n,r,o,i){q0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ec(t,n,!1),zt(e,t,i);r=t.stateNode,Em.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Kn(t,e.child,null,i),t.child=Kn(t,null,a,i)):Ce(e,t,a,i),t.memoizedState=r.state,o&&ec(t,n,!0),t.child}function b0(e){var t=e.stateNode;t.pendingContext?bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bu(e,t.context,!1),Is(e,t.containerInfo)}function yc(e,t,n,r,o){return Xn(),Ns(o),t.flags|=256,Ce(e,t,n,r),t.child}var ja={dehydrated:null,treeContext:null,retryLane:0};function Ma(e){return{baseLanes:e,cachePool:null,transitions:null}}function ed(e,t,n){var r=t.pendingProps,o=J.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(J,o&1),e===null)return Na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Di(l,r,0,null),e=pn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ma(n),t.memoizedState=ja,e):Us(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Cm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Xt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Xt(a,i):(i=pn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ma(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ja,r}return i=e.child,e=i.sibling,r=Xt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Us(e,t){return t=Di({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _o(e,t,n,r){return r!==null&&Ns(r),Kn(t,e.child,null,n),e=Us(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ul(Error(k(422))),_o(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Di({mode:"visible",children:r.children},o,0,null),i=pn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Kn(t,e.child,null,l),t.child.memoizedState=Ma(l),t.memoizedState=ja,i);if(!(t.mode&1))return _o(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=Ul(i,r,void 0),_o(e,t,l,r)}if(a=(l&e.childLanes)!==0,ze||a){if(r=fe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nt(e,o),lt(r,e,o,-1))}return Xs(),r=Ul(Error(k(421))),_o(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Lm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Fe=Wt(o.nextSibling),De=t,K=!0,ot=null,e!==null&&(Ze[Xe++]=Et,Ze[Xe++]=Ct,Ze[Xe++]=yn,Et=e.id,Ct=e.overflow,yn=t),t=Us(t,r.children),t.flags|=4096,t)}function gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),za(e.return,t,n)}function Bl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function td(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gc(e,n,t);else if(e.tag===19)gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&hi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Bl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&hi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Bl(t,!0,n,null,i);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Uo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $m(e,t,n){switch(t.tag){case 3:b0(t),Xn();break;case 5:N0(t);break;case 1:Re(t.type)&&ui(t);break;case 4:Is(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(di,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?ed(e,t,n):(W(J,J.current&1),e=zt(e,t,n),e!==null?e.sibling:null);W(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return td(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,J0(e,t,n)}return zt(e,t,n)}var nd,La,rd,od;nd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};La=function(){};rd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,cn(gt.current);var i=null;switch(n){case"input":o=ia(e,o),r=ia(e,r),i=[];break;case"select":o=b({},o,{value:void 0}),r=b({},r,{value:void 0}),i=[];break;case"textarea":o=sa(e,o),r=sa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ai)}ca(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ir.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ir.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&Y("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};od=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _m(e,t,n){var r=t.pendingProps;switch(Ps(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Re(t.type)&&si(),we(t),null;case 3:return r=t.stateNode,Gn(),Z(Oe),Z(Ee),Ms(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(Ya(ot),ot=null))),La(e,t),we(t),null;case 5:js(t);var o=cn(Qr.current);if(n=t.type,e!==null&&t.stateNode!=null)rd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return we(t),null}if(e=cn(gt.current),Co(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ht]=t,r[Wr]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<kr.length;o++)Y(kr[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":_u(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":Nu(r,i),Y("invalid",r)}ca(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Eo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Eo(r.textContent,a,e),o=["children",""+a]):Ir.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Y("scroll",r)}switch(n){case"input":ho(r),Pu(r,i,!0);break;case"textarea":ho(r),zu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ai)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ht]=t,e[Wr]=r,nd(e,t,!1,!1),t.stateNode=e;e:{switch(l=fa(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<kr.length;o++)Y(kr[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":_u(e,r),o=ia(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=b({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Nu(e,r),o=sa(e,r),Y("invalid",e);break;default:o=r}ca(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?If(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Tf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&jr(e,s):typeof s=="number"&&jr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ir.hasOwnProperty(i)?s!=null&&i==="onScroll"&&Y("scroll",e):s!=null&&ds(e,i,s,l))}switch(n){case"input":ho(e),Pu(e,r,!1);break;case"textarea":ho(e),zu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Dn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)od(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=cn(Qr.current),cn(gt.current),Co(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(i=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:Eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Eo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return we(t),null;case 13:if(Z(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Fe!==null&&t.mode&1&&!(t.flags&128))x0(),Xn(),t.flags|=98560,i=!1;else if(i=Co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[ht]=t}else Xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),i=!1}else ot!==null&&(Ya(ot),ot=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ae===0&&(ae=3):Xs())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Gn(),La(e,t),e===null&&Ur(t.stateNode.containerInfo),we(t),null;case 10:return Rs(t.type._context),we(t),null;case 17:return Re(t.type)&&si(),we(t),null;case 19:if(Z(J),i=t.memoizedState,i===null)return we(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)yr(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=hi(e),l!==null){for(t.flags|=128,yr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>qn&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304)}else{if(!r)if(e=hi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!K)return we(t),null}else 2*ne()-i.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=J.current,W(J,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return Zs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Pm(e,t){switch(Ps(t),t.tag){case 1:return Re(t.type)&&si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),Z(Oe),Z(Ee),Ms(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return js(t),null;case 13:if(Z(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(J),null;case 4:return Gn(),null;case 10:return Rs(t.type._context),null;case 22:case 23:return Zs(),null;case 24:return null;default:return null}}var Po=!1,xe=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,P=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Fa(e,t,n){try{n()}catch(r){te(e,t,r)}}var vc=!1;function zm(e,t){if(xa=oi,e=s0(),$s(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,m=0,p=e,h=null;t:for(;;){for(var g;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===e)break t;if(h===n&&++c===o&&(a=l),h===i&&++m===r&&(s=l),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ka={focusedElem:e,selectionRange:n},oi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,N=v.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:nt(t.type,y),N);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=vc,vc=!1,v}function Or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Fa(t,n,i)}o=o.next}while(o!==r)}}function Li(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Da(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function id(e){var t=e.alternate;t!==null&&(e.alternate=null,id(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[Wr],delete t[$a],delete t[fm],delete t[dm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ld(e){return e.tag===5||e.tag===3||e.tag===4}function wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ai));else if(r!==4&&(e=e.child,e!==null))for(Va(e,t,n),e=e.sibling;e!==null;)Va(e,t,n),e=e.sibling}function Ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}var pe=null,rt=!1;function At(e,t,n){for(n=n.child;n!==null;)ad(e,t,n),n=n.sibling}function ad(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 5:xe||Mn(n,t);case 6:var r=pe,o=rt;pe=null,At(e,t,n),pe=r,rt=o,pe!==null&&(rt?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(rt?(e=pe,n=n.stateNode,e.nodeType===8?Ml(e.parentNode,n):e.nodeType===1&&Ml(e,n),Dr(e)):Ml(pe,n.stateNode));break;case 4:r=pe,o=rt,pe=n.stateNode.containerInfo,rt=!0,At(e,t,n),pe=r,rt=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Fa(n,t,l),o=o.next}while(o!==r)}At(e,t,n);break;case 1:if(!xe&&(Mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,t,a)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,At(e,t,n),xe=r):At(e,t,n);break;default:At(e,t,n)}}function Sc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nm),t.forEach(function(r){var o=Fm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,rt=!1;break e;case 3:pe=a.stateNode.containerInfo,rt=!0;break e;case 4:pe=a.stateNode.containerInfo,rt=!0;break e}a=a.return}if(pe===null)throw Error(k(160));ad(i,l,o),pe=null,rt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){te(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sd(t,e),t=t.sibling}function sd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),ut(e),r&4){try{Or(3,e,e.return),Li(3,e)}catch(y){te(e,e.return,y)}try{Or(5,e,e.return)}catch(y){te(e,e.return,y)}}break;case 1:tt(t,e),ut(e),r&512&&n!==null&&Mn(n,n.return);break;case 5:if(tt(t,e),ut(e),r&512&&n!==null&&Mn(n,n.return),e.flags&32){var o=e.stateNode;try{jr(o,"")}catch(y){te(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&zf(o,i),fa(a,l);var c=fa(a,i);for(l=0;l<s.length;l+=2){var m=s[l],p=s[l+1];m==="style"?If(o,p):m==="dangerouslySetInnerHTML"?Tf(o,p):m==="children"?jr(o,p):ds(o,m,p,c)}switch(a){case"input":la(o,i);break;case"textarea":Of(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Dn(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?Dn(o,!!i.multiple,i.defaultValue,!0):Dn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Wr]=i}catch(y){te(e,e.return,y)}}break;case 6:if(tt(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){te(e,e.return,y)}}break;case 3:if(tt(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(y){te(e,e.return,y)}break;case 4:tt(t,e),ut(e);break;case 13:tt(t,e),ut(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ys=ne())),r&4&&Sc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(c=xe)||m,tt(t,e),xe=c):tt(t,e),ut(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(p=P=m;P!==null;){switch(h=P,g=h.child,h.tag){case 0:case 11:case 14:case 15:Or(4,h,h.return);break;case 1:Mn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:Mn(h,h.return);break;case 22:if(h.memoizedState!==null){kc(p);continue}}g!==null?(g.return=h,P=g):kc(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Af("display",l))}catch(y){te(e,e.return,y)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){te(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:tt(t,e),ut(e),r&4&&Sc(e);break;case 21:break;default:tt(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ld(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(jr(o,""),r.flags&=-33);var i=wc(e);Ha(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=wc(e);Va(e,a,l);break;default:throw Error(k(161))}}catch(s){te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Om(e,t,n){P=e,ud(e)}function ud(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Po;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||xe;a=Po;var c=xe;if(Po=l,(xe=s)&&!c)for(P=o;P!==null;)l=P,s=l.child,l.tag===22&&l.memoizedState!==null?Ec(o):s!==null?(s.return=l,P=s):Ec(o);for(;i!==null;)P=i,ud(i),i=i.sibling;P=o,Po=a,xe=c}xc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):xc(e)}}function xc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||Li(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:nt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&oc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}oc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Dr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}xe||t.flags&512&&Da(t)}catch(h){te(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function kc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Ec(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Li(4,t)}catch(s){te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){te(t,o,s)}}var i=t.return;try{Da(t)}catch(s){te(t,i,s)}break;case 5:var l=t.return;try{Da(t)}catch(s){te(t,l,s)}}}catch(s){te(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var Rm=Math.ceil,vi=Ot.ReactCurrentDispatcher,Bs=Ot.ReactCurrentOwner,Ge=Ot.ReactCurrentBatchConfig,L=0,fe=null,ie=null,he=0,Le=0,Ln=bt(0),ae=0,Gr=null,vn=0,Fi=0,Ws=0,Rr=null,Ne=null,Ys=0,qn=1/0,St=null,wi=!1,Ua=null,Qt=null,No=!1,Vt=null,Si=0,Tr=0,Ba=null,Bo=-1,Wo=0;function $e(){return L&6?ne():Bo!==-1?Bo:Bo=ne()}function Zt(e){return e.mode&1?L&2&&he!==0?he&-he:mm.transition!==null?(Wo===0&&(Wo=Qf()),Wo):(e=H,e!==0||(e=window.event,e=e===void 0?16:bf(e.type)),e):1}function lt(e,t,n,r){if(50<Tr)throw Tr=0,Ba=null,Error(k(185));oo(e,n,r),(!(L&2)||e!==fe)&&(e===fe&&(!(L&2)&&(Fi|=n),ae===4&&Ft(e,he)),Te(e,r),n===1&&L===0&&!(t.mode&1)&&(qn=ne()+500,Ii&&en()))}function Te(e,t){var n=e.callbackNode;m1(e,t);var r=ri(e,e===fe?he:0);if(r===0)n!==null&&Tu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tu(n),t===1)e.tag===0?pm(Cc.bind(null,e)):v0(Cc.bind(null,e)),um(function(){!(L&6)&&en()}),n=null;else{switch(Zf(r)){case 1:n=gs;break;case 4:n=Wf;break;case 16:n=ni;break;case 536870912:n=Yf;break;default:n=ni}n=gd(n,cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cd(e,t){if(Bo=-1,Wo=0,L&6)throw Error(k(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=ri(e,e===fe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xi(e,r);else{t=r;var o=L;L|=2;var i=dd();(fe!==e||he!==t)&&(St=null,qn=ne()+500,dn(e,t));do try{Im();break}catch(a){fd(e,a)}while(1);Os(),vi.current=i,L=o,ie!==null?t=0:(fe=null,he=0,t=ae)}if(t!==0){if(t===2&&(o=ya(e),o!==0&&(r=o,t=Wa(e,o))),t===1)throw n=Gr,dn(e,0),Ft(e,r),Te(e,ne()),n;if(t===6)Ft(e,r);else{if(o=e.current.alternate,!(r&30)&&!Tm(o)&&(t=xi(e,r),t===2&&(i=ya(e),i!==0&&(r=i,t=Wa(e,i))),t===1))throw n=Gr,dn(e,0),Ft(e,r),Te(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:an(e,Ne,St);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=Ys+500-ne(),10<t)){if(ri(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ca(an.bind(null,e,Ne,St),t);break}an(e,Ne,St);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-it(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rm(r/1960))-r,10<r){e.timeoutHandle=Ca(an.bind(null,e,Ne,St),r);break}an(e,Ne,St);break;case 5:an(e,Ne,St);break;default:throw Error(k(329))}}}return Te(e,ne()),e.callbackNode===n?cd.bind(null,e):null}function Wa(e,t){var n=Rr;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=xi(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&Ya(t)),e}function Ya(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function Tm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!st(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~Ws,t&=~Fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function Cc(e){if(L&6)throw Error(k(327));Wn();var t=ri(e,0);if(!(t&1))return Te(e,ne()),null;var n=xi(e,t);if(e.tag!==0&&n===2){var r=ya(e);r!==0&&(t=r,n=Wa(e,r))}if(n===1)throw n=Gr,dn(e,0),Ft(e,t),Te(e,ne()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Ne,St),Te(e,ne()),null}function Qs(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(qn=ne()+500,Ii&&en())}}function wn(e){Vt!==null&&Vt.tag===0&&!(L&6)&&Wn();var t=L;L|=1;var n=Ge.transition,r=H;try{if(Ge.transition=null,H=1,e)return e()}finally{H=r,Ge.transition=n,L=t,!(L&6)&&en()}}function Zs(){Le=Ln.current,Z(Ln)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sm(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Ps(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&si();break;case 3:Gn(),Z(Oe),Z(Ee),Ms();break;case 5:js(r);break;case 4:Gn();break;case 13:Z(J);break;case 19:Z(J);break;case 10:Rs(r.type._context);break;case 22:case 23:Zs()}n=n.return}if(fe=e,ie=e=Xt(e.current,null),he=Le=t,ae=0,Gr=null,Ws=Fi=vn=0,Ne=Rr=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}un=null}return e}function fd(e,t){do{var n=ie;try{if(Os(),Vo.current=gi,yi){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}yi=!1}if(gn=0,ue=le=q=null,zr=!1,Zr=0,Bs.current=null,n===null||n.return===null){ae=1,Gr=t,ie=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=he,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=a,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=fc(l);if(g!==null){g.flags&=-257,dc(g,l,a,i,t),g.mode&1&&cc(i,c,t),t=g,s=c;var v=t.updateQueue;if(v===null){var y=new Set;y.add(s),t.updateQueue=y}else v.add(s);break e}else{if(!(t&1)){cc(i,c,t),Xs();break e}s=Error(k(426))}}else if(K&&a.mode&1){var N=fc(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),dc(N,l,a,i,t),Ns(Jn(s,a));break e}}i=s=Jn(s,a),ae!==4&&(ae=2),Rr===null?Rr=[i]:Rr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=X0(i,s,t);rc(i,f);break e;case 1:a=s;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Qt===null||!Qt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=K0(i,a,t);rc(i,w);break e}}i=i.return}while(i!==null)}md(n)}catch(x){t=x,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function dd(){var e=vi.current;return vi.current=gi,e===null?gi:e}function Xs(){(ae===0||ae===3||ae===2)&&(ae=4),fe===null||!(vn&268435455)&&!(Fi&268435455)||Ft(fe,he)}function xi(e,t){var n=L;L|=2;var r=dd();(fe!==e||he!==t)&&(St=null,dn(e,t));do try{Am();break}catch(o){fd(e,o)}while(1);if(Os(),L=n,vi.current=r,ie!==null)throw Error(k(261));return fe=null,he=0,ae}function Am(){for(;ie!==null;)pd(ie)}function Im(){for(;ie!==null&&!i1();)pd(ie)}function pd(e){var t=yd(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?md(e):ie=t,Bs.current=null}function md(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pm(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ie=null;return}}else if(n=_m(n,t,Le),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ae===0&&(ae=5)}function an(e,t,n){var r=H,o=Ge.transition;try{Ge.transition=null,H=1,jm(e,t,n,r)}finally{Ge.transition=o,H=r}return null}function jm(e,t,n,r){do Wn();while(Vt!==null);if(L&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(h1(e,i),e===fe&&(ie=fe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||No||(No=!0,gd(ni,function(){return Wn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ge.transition,Ge.transition=null;var l=H;H=1;var a=L;L|=4,Bs.current=null,zm(e,n),sd(n,e),tm(ka),oi=!!xa,ka=xa=null,e.current=n,Om(n),l1(),L=a,H=l,Ge.transition=i}else e.current=n;if(No&&(No=!1,Vt=e,Si=o),i=e.pendingLanes,i===0&&(Qt=null),u1(n.stateNode),Te(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(wi)throw wi=!1,e=Ua,Ua=null,e;return Si&1&&e.tag!==0&&Wn(),i=e.pendingLanes,i&1?e===Ba?Tr++:(Tr=0,Ba=e):Tr=0,en(),null}function Wn(){if(Vt!==null){var e=Zf(Si),t=Ge.transition,n=H;try{if(Ge.transition=null,H=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,Si=0,L&6)throw Error(k(331));var o=L;for(L|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(P=c;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:Or(8,m,i)}var p=m.child;if(p!==null)p.return=m,P=p;else for(;P!==null;){m=P;var h=m.sibling,g=m.return;if(id(m),m===c){P=null;break}if(h!==null){h.return=g,P=h;break}P=g}}}var v=i.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Or(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,P=f;break e}P=i.return}}var u=e.current;for(P=u;P!==null;){l=P;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,P=d;else e:for(l=u;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Li(9,a)}}catch(x){te(a,a.return,x)}if(a===l){P=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,P=w;break e}P=a.return}}if(L=o,en(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(zi,e)}catch{}r=!0}return r}finally{H=n,Ge.transition=t}}return!1}function $c(e,t,n){t=Jn(n,t),t=X0(e,t,1),e=Yt(e,t,1),t=$e(),e!==null&&(oo(e,1,t),Te(e,t))}function te(e,t,n){if(e.tag===3)$c(e,e,n);else for(;t!==null;){if(t.tag===3){$c(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=Jn(n,e),e=K0(t,e,1),t=Yt(t,e,1),e=$e(),t!==null&&(oo(t,1,e),Te(t,e));break}}t=t.return}}function Mm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(he&n)===n&&(ae===4||ae===3&&(he&130023424)===he&&500>ne()-Ys?dn(e,0):Ws|=n),Te(e,t)}function hd(e,t){t===0&&(e.mode&1?(t=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):t=1);var n=$e();e=Nt(e,t),e!==null&&(oo(e,t,n),Te(e,n))}function Lm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hd(e,n)}function Fm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),hd(e,n)}var yd;yd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,$m(e,t,n);ze=!!(e.flags&131072)}else ze=!1,K&&t.flags&1048576&&w0(t,fi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Uo(e,t),e=t.pendingProps;var o=Zn(t,Ee.current);Bn(t,n),o=Fs(null,t,r,e,o,n);var i=Ds();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(i=!0,ui(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,As(t),o.updater=ji,t.stateNode=o,o._reactInternals=t,Ra(t,r,e,n),t=Ia(null,t,r,!0,i,n)):(t.tag=0,K&&i&&_s(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Uo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Vm(r),e=nt(r,e),o){case 0:t=Aa(null,t,r,e,n);break e;case 1:t=hc(null,t,r,e,n);break e;case 11:t=pc(null,t,r,e,n);break e;case 14:t=mc(null,t,r,nt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nt(r,o),Aa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nt(r,o),hc(e,t,r,o,n);case 3:e:{if(b0(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,E0(e,t),mi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Jn(Error(k(423)),t),t=yc(e,t,r,n,o);break e}else if(r!==o){o=Jn(Error(k(424)),t),t=yc(e,t,r,n,o);break e}else for(Fe=Wt(t.stateNode.containerInfo.firstChild),De=t,K=!0,ot=null,n=P0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xn(),r===o){t=zt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return N0(t),e===null&&Na(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ea(r,o)?l=null:i!==null&&Ea(r,i)&&(t.flags|=32),q0(e,t),Ce(e,t,l,n),t.child;case 6:return e===null&&Na(t),null;case 13:return ed(e,t,n);case 4:return Is(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kn(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nt(r,o),pc(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(di,r._currentValue),r._currentValue=l,i!==null)if(st(i.value,l)){if(i.children===o.children&&!Oe.current){t=zt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=$t(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),za(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),za(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Bn(t,n),o=Je(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=nt(r,t.pendingProps),o=nt(r.type,o),mc(e,t,r,o,n);case 15:return G0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nt(r,o),Uo(e,t),t.tag=1,Re(r)?(e=!0,ui(t)):e=!1,Bn(t,n),$0(t,r,o),Ra(t,r,o,n),Ia(null,t,r,!0,e,n);case 19:return td(e,t,n);case 22:return J0(e,t,n)}throw Error(k(156,t.tag))};function gd(e,t){return Bf(e,t)}function Dm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new Dm(e,t,n,r)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vm(e){if(typeof e=="function")return Ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ms)return 11;if(e===hs)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ks(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Pn:return pn(n.children,o,i,t);case ps:l=8,o|=8;break;case ta:return e=Ke(12,n,t,o|2),e.elementType=ta,e.lanes=i,e;case na:return e=Ke(13,n,t,o),e.elementType=na,e.lanes=i,e;case ra:return e=Ke(19,n,t,o),e.elementType=ra,e.lanes=i,e;case _f:return Di(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cf:l=10;break e;case $f:l=9;break e;case ms:l=11;break e;case hs:l=14;break e;case jt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ke(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function pn(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function Di(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=_f,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gs(e,t,n,r,o,i,l,a,s){return e=new Hm(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ke(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},As(i),e}function Um(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vd(e){if(!e)return Jt;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Re(n))return g0(e,n,t)}return t}function wd(e,t,n,r,o,i,l,a,s){return e=Gs(n,r,!0,e,o,i,l,a,s),e.context=vd(null),n=e.current,r=$e(),o=Zt(n),i=$t(r,o),i.callback=t??null,Yt(n,i,o),e.current.lanes=o,oo(e,o,r),Te(e,r),e}function Vi(e,t,n,r){var o=t.current,i=$e(),l=Zt(o);return n=vd(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(o,t,l),e!==null&&(lt(e,o,l,i),Do(e,o,l)),l}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Js(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function Bm(){return null}var Sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function qs(e){this._internalRoot=e}Hi.prototype.render=qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Vi(e,t,null,null)};Hi.prototype.unmount=qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){Vi(null,e,null,null)}),t[Pt]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&qf(e)}};function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pc(){}function Wm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ki(l);i.call(c)}}var l=wd(t,r,e,0,null,!1,!1,"",Pc);return e._reactRootContainer=l,e[Pt]=l.current,Ur(e.nodeType===8?e.parentNode:e),wn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=ki(s);a.call(c)}}var s=Gs(e,0,!1,null,null,!1,!1,"",Pc);return e._reactRootContainer=s,e[Pt]=s.current,Ur(e.nodeType===8?e.parentNode:e),wn(function(){Vi(t,s,n,r)}),s}function Bi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=ki(l);a.call(s)}}Vi(t,l,e,o)}else l=Wm(n,t,e,o,r);return ki(l)}Xf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xr(t.pendingLanes);n!==0&&(vs(t,n|1),Te(t,ne()),!(L&6)&&(qn=ne()+500,en()))}break;case 13:wn(function(){var r=Nt(e,1);if(r!==null){var o=$e();lt(r,e,1,o)}}),Js(e,1)}};ws=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=$e();lt(t,e,134217728,n)}Js(e,134217728)}};Kf=function(e){if(e.tag===13){var t=Zt(e),n=Nt(e,t);if(n!==null){var r=$e();lt(n,e,t,r)}Js(e,t)}};Gf=function(){return H};Jf=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};pa=function(e,t,n){switch(t){case"input":if(la(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ai(r);if(!o)throw Error(k(90));Nf(r),la(r,o)}}}break;case"textarea":Of(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};Lf=Qs;Ff=wn;var Ym={usingClientEntryPoint:!1,Events:[lo,Rn,Ai,jf,Mf,Qs]},gr={findFiberByHostInstance:sn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qm={bundleType:gr.bundleType,version:gr.version,rendererPackageName:gr.rendererPackageName,rendererConfig:gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hf(e),e===null?null:e.stateNode},findFiberByHostInstance:gr.findFiberByHostInstance||Bm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zo.isDisabled&&zo.supportsFiber)try{zi=zo.inject(Qm),yt=zo}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ym;Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bs(t))throw Error(k(200));return Um(e,t,null,n)};Ue.createRoot=function(e,t){if(!bs(e))throw Error(k(299));var n=!1,r="",o=Sd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gs(e,1,!1,null,null,n,!1,r,o),e[Pt]=t.current,Ur(e.nodeType===8?e.parentNode:e),new qs(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Hf(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return wn(e)};Ue.hydrate=function(e,t,n){if(!Ui(t))throw Error(k(200));return Bi(null,e,t,!0,n)};Ue.hydrateRoot=function(e,t,n){if(!bs(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Sd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=wd(t,null,e,1,n??null,o,!1,i,l),e[Pt]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Hi(t)};Ue.render=function(e,t,n){if(!Ui(t))throw Error(k(200));return Bi(null,e,t,!1,n)};Ue.unmountComponentAtNode=function(e){if(!Ui(e))throw Error(k(40));return e._reactRootContainer?(wn(function(){Bi(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1};Ue.unstable_batchedUpdates=Qs;Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ui(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Bi(e,t,n,!1,r)};Ue.version="18.2.0-next-9e3b772b8-20220608";function xd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xd)}catch(e){console.error(e)}}xd(),wf.exports=Ue;var Zm=wf.exports,Nc=Zm;bl.createRoot=Nc.createRoot,bl.hydrateRoot=Nc.hydrateRoot;var ke=function(){return ke=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ke.apply(this,arguments)};function Jr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function Xm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Q="-ms-",Ar="-moz-",V="-webkit-",kd="comm",Wi="rule",eu="decl",Km="@import",Ed="@keyframes",Gm="@layer",Jm=Math.abs,tu=String.fromCharCode,Qa=Object.assign;function qm(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function Cd(e){return e.trim()}function xt(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function Qo(e,t){return e.indexOf(t)}function ce(e,t){return e.charCodeAt(t)|0}function bn(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function $d(e){return e.length}function Er(e,t){return t.push(e),e}function bm(e,t){return e.map(t).join("")}function zc(e,t){return e.filter(function(n){return!xt(n,t)})}var Yi=1,er=1,_d=0,be=0,re=0,sr="";function Qi(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Yi,column:er,length:l,return:"",siblings:a}}function It(e,t){return Qa(Qi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Cn(e){for(;e.root;)e=It(e.root,{children:[e]});Er(e,e.siblings)}function eh(){return re}function th(){return re=be>0?ce(sr,--be):0,er--,re===10&&(er=1,Yi--),re}function at(){return re=be<_d?ce(sr,be++):0,er++,re===10&&(er=1,Yi++),re}function mn(){return ce(sr,be)}function Zo(){return be}function Zi(e,t){return bn(sr,e,t)}function Za(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nh(e){return Yi=er=1,_d=dt(sr=e),be=0,[]}function rh(e){return sr="",e}function Ql(e){return Cd(Zi(be-1,Xa(e===91?e+2:e===40?e+1:e)))}function oh(e){for(;(re=mn())&&re<33;)at();return Za(e)>2||Za(re)>3?"":" "}function ih(e,t){for(;--t&&at()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return Zi(e,Zo()+(t<6&&mn()==32&&at()==32))}function Xa(e){for(;at();)switch(re){case e:return be;case 34:case 39:e!==34&&e!==39&&Xa(re);break;case 40:e===41&&Xa(e);break;case 92:at();break}return be}function lh(e,t){for(;at()&&e+re!==47+10;)if(e+re===42+42&&mn()===47)break;return"/*"+Zi(t,be-1)+"*"+tu(e===47?e:at())}function ah(e){for(;!Za(mn());)at();return Zi(e,be)}function sh(e){return rh(Xo("",null,null,null,[""],e=nh(e),0,[0],e))}function Xo(e,t,n,r,o,i,l,a,s){for(var c=0,m=0,p=l,h=0,g=0,v=0,y=1,N=1,f=1,u=0,d="",w=o,x=i,E=r,S=d;N;)switch(v=u,u=at()){case 40:if(v!=108&&ce(S,p-1)==58){Qo(S+=A(Ql(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:S+=Ql(u);break;case 9:case 10:case 13:case 32:S+=oh(v);break;case 92:S+=ih(Zo()-1,7);continue;case 47:switch(mn()){case 42:case 47:Er(uh(lh(at(),Zo()),t,n,s),s);break;default:S+="/"}break;case 123*y:a[c++]=dt(S)*f;case 125*y:case 59:case 0:switch(u){case 0:case 125:N=0;case 59+m:f==-1&&(S=A(S,/\f/g,"")),g>0&&dt(S)-p&&Er(g>32?Rc(S+";",r,n,p-1,s):Rc(A(S," ","")+";",r,n,p-2,s),s);break;case 59:S+=";";default:if(Er(E=Oc(S,t,n,c,m,o,a,d,w=[],x=[],p,i),i),u===123)if(m===0)Xo(S,t,E,E,w,i,p,a,x);else switch(h===99&&ce(S,3)===110?100:h){case 100:case 108:case 109:case 115:Xo(e,E,E,r&&Er(Oc(e,E,E,0,0,o,a,d,o,w=[],p,x),x),o,x,p,a,r?w:x);break;default:Xo(S,E,E,E,[""],x,0,a,x)}}c=m=g=0,y=f=1,d=S="",p=l;break;case 58:p=1+dt(S),g=v;default:if(y<1){if(u==123)--y;else if(u==125&&y++==0&&th()==125)continue}switch(S+=tu(u),u*y){case 38:f=m>0?1:(S+="\f",-1);break;case 44:a[c++]=(dt(S)-1)*f,f=1;break;case 64:mn()===45&&(S+=Ql(at())),h=mn(),m=p=dt(d=S+=ah(Zo())),u++;break;case 45:v===45&&dt(S)==2&&(y=0)}}return i}function Oc(e,t,n,r,o,i,l,a,s,c,m,p){for(var h=o-1,g=o===0?i:[""],v=$d(g),y=0,N=0,f=0;y<r;++y)for(var u=0,d=bn(e,h+1,h=Jm(N=l[y])),w=e;u<v;++u)(w=Cd(N>0?g[u]+" "+d:A(d,/&\f/g,g[u])))&&(s[f++]=w);return Qi(e,t,n,o===0?Wi:a,s,c,m,p)}function uh(e,t,n,r){return Qi(e,t,n,kd,tu(eh()),bn(e,2,-2),0,r)}function Rc(e,t,n,r,o){return Qi(e,t,n,eu,bn(e,0,r),bn(e,r+1,-1),r,o)}function Pd(e,t,n){switch(qm(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return Ar+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+Ar+e+Q+e+e;case 5936:switch(ce(e,t+11)){case 114:return V+e+Q+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+Q+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+Q+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+Q+e+e;case 6165:return V+e+Q+"flex-"+e+e;case 5187:return V+e+A(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return V+e+Q+"flex-item-"+A(e,/flex-|-self/g,"")+(xt(e,/flex-|baseline/)?"":Q+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return V+e+Q+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+Q+A(e,"shrink","negative")+e;case 5292:return V+e+Q+A(e,"basis","preferred-size")+e;case 6060:return V+"box-"+A(e,"-grow","")+V+e+Q+A(e,"grow","positive")+e;case 4554:return V+A(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!xt(e,/flex-|baseline/))return Q+"grid-column-align"+bn(e,t)+e;break;case 2592:case 3360:return Q+A(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,xt(r.props,/grid-\w+-end/)})?~Qo(e+(n=n[t].value),"span")?e:Q+A(e,"-start","")+e+Q+"grid-row-span:"+(~Qo(n,"span")?xt(n,/\d+/):+xt(n,/\d+/)-+xt(e,/\d+/))+";":Q+A(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return xt(r.props,/grid-\w+-start/)})?e:Q+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+Ar+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Qo(e,"stretch")?Pd(A(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,c){return Q+o+":"+i+c+(l?Q+o+"-span:"+(a?s:+s-+i)+c:"")+e});case 4949:if(ce(e,t+6)===121)return A(e,":",":"+V)+e;break;case 6444:switch(ce(e,ce(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(ce(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+Q+"$2box$3")+e;case 100:return A(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function Ei(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ch(e,t,n,r){switch(e.type){case Gm:if(e.children.length)break;case Km:case eu:return e.return=e.return||e.value;case kd:return"";case Ed:return e.return=e.value+"{"+Ei(e.children,r)+"}";case Wi:if(!dt(e.value=e.props.join(",")))return""}return dt(n=Ei(e.children,r))?e.return=e.value+"{"+n+"}":""}function fh(e){var t=$d(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function dh(e){return function(t){t.root||(t=t.return)&&e(t)}}function ph(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case eu:e.return=Pd(e.value,e.length,n);return;case Ed:return Ei([It(e,{value:A(e.value,"@","@"+V)})],r);case Wi:if(e.length)return bm(n=e.props,function(o){switch(xt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Cn(It(e,{props:[A(o,/:(read-\w+)/,":"+Ar+"$1")]})),Cn(It(e,{props:[o]})),Qa(e,{props:zc(n,r)});break;case"::placeholder":Cn(It(e,{props:[A(o,/:(plac\w+)/,":"+V+"input-$1")]})),Cn(It(e,{props:[A(o,/:(plac\w+)/,":"+Ar+"$1")]})),Cn(It(e,{props:[A(o,/:(plac\w+)/,Q+"input-$1")]})),Cn(It(e,{props:[o]})),Qa(e,{props:zc(n,r)});break}return""})}}var Nd={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",nu=typeof window<"u"&&"HTMLElement"in window,mh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),hh={},Xi=Object.freeze([]),nr=Object.freeze({});function zd(e,t,n){return n===void 0&&(n=nr),e.theme!==n.theme&&e.theme||t||n.theme}var Od=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),yh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gh=/(^-|-$)/g;function Tc(e){return e.replace(yh,"-").replace(gh,"")}var vh=/(a)(d)/gi,Ac=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ka(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ac(t%52)+n;return(Ac(t%52)+n).replace(vh,"$1-$2")}var Zl,Fn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Rd=function(e){return Fn(5381,e)};function Td(e){return Ka(Rd(e)>>>0)}function wh(e){return e.displayName||e.name||"Component"}function Xl(e){return typeof e=="string"&&!0}var Ad=typeof Symbol=="function"&&Symbol.for,Id=Ad?Symbol.for("react.memo"):60115,Sh=Ad?Symbol.for("react.forward_ref"):60112,xh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Eh=((Zl={})[Sh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zl[Id]=jd,Zl);function Ic(e){return("type"in(t=e)&&t.type.$$typeof)===Id?jd:"$$typeof"in e?Eh[e.$$typeof]:xh;var t}var Ch=Object.defineProperty,$h=Object.getOwnPropertyNames,jc=Object.getOwnPropertySymbols,_h=Object.getOwnPropertyDescriptor,Ph=Object.getPrototypeOf,Mc=Object.prototype;function Md(e,t,n){if(typeof t!="string"){if(Mc){var r=Ph(t);r&&r!==Mc&&Md(e,r,n)}var o=$h(t);jc&&(o=o.concat(jc(t)));for(var i=Ic(e),l=Ic(t),a=0;a<o.length;++a){var s=o[a];if(!(s in kh||n&&n[s]||l&&s in l||i&&s in i)){var c=_h(t,s);try{Ch(e,s,c)}catch{}}}}return e}function rr(e){return typeof e=="function"}function ru(e){return typeof e=="object"&&"styledComponentId"in e}function fn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ga(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function qr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ja(e,t,n){if(n===void 0&&(n=!1),!n&&!qr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ja(e[r],t[r]);else if(qr(t))for(var r in t)e[r]=Ja(e[r],t[r]);return e}function ou(e,t){Object.defineProperty(e,"toString",{value:t})}function so(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Nh=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw so(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),Ko=new Map,Ci=new Map,Kl=1,Oo=function(e){if(Ko.has(e))return Ko.get(e);for(;Ci.has(Kl);)Kl++;var t=Kl++;return Ko.set(e,t),Ci.set(t,e),t},zh=function(e,t){Ko.set(e,t),Ci.set(t,e)},Oh="style[".concat(tr,"][").concat("data-styled-version",'="').concat("6.0.5",'"]'),Rh=new RegExp("^".concat(tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Th=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Ah=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(Rh);if(s){var c=0|parseInt(s[1],10),m=s[2];c!==0&&(zh(m,c),Th(e,m,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}};function Ih(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ld=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(tr,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(tr,"active"),r.setAttribute("data-styled-version","6.0.5");var l=Ih();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},jh=function(){function e(t){this.element=Ld(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw so(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Mh=function(){function e(t){this.element=Ld(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Lh=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Lc=nu,Fh={isServer:!nu,useCSSOMInjection:!mh},$i=function(){function e(t,n,r){t===void 0&&(t=nr),n===void 0&&(n={});var o=this;this.options=ke(ke({},Fh),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&nu&&Lc&&(Lc=!1,function(i){for(var l=document.querySelectorAll(Oh),a=0,s=l.length;a<s;a++){var c=l[a];c&&c.getAttribute(tr)!=="active"&&(Ah(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),ou(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",c=function(p){var h=function(f){return Ci.get(f)}(p);if(h===void 0)return"continue";var g=i.names.get(h),v=l.getGroup(p);if(g===void 0||v.length===0)return"continue";var y="".concat(tr,".g").concat(p,'[id="').concat(h,'"]'),N="";g!==void 0&&g.forEach(function(f){f.length>0&&(N+="".concat(f,","))}),s+="".concat(v).concat(y,'{content:"').concat(N,'"}').concat(`/*!sc*/
`)},m=0;m<a;m++)c(m);return s}(o)})}return e.registerId=function(t){return Oo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ke(ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Lh(o):r?new jh(o):new Mh(o)}(this.options),new Nh(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Oo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Oo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Oo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Dh=/&/g,Vh=/^\s*\/\/.*$/gm;function Fd(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Fd(n.children,t)),n})}function Hh(e){var t,n,r,o=e===void 0?nr:e,i=o.options,l=i===void 0?nr:i,a=o.plugins,s=a===void 0?Xi:a,c=function(h,g,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):h},m=s.slice();m.push(function(h){h.type===Wi&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Dh,n).replace(r,c))}),l.prefix&&m.push(ph),m.push(ch);var p=function(h,g,v,y){g===void 0&&(g=""),v===void 0&&(v=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var N=h.replace(Vh,""),f=sh(v||g?"".concat(v," ").concat(g," { ").concat(N," }"):N);l.namespace&&(f=Fd(f,l.namespace));var u=[];return Ei(f,fh(m.concat(dh(function(d){return u.push(d)})))),u};return p.hash=s.length?s.reduce(function(h,g){return g.name||so(15),Fn(h,g.name)},5381).toString():"",p}var Uh=new $i,qa=Hh(),Dd=O.createContext({shouldForwardProp:void 0,styleSheet:Uh,stylis:qa});Dd.Consumer;O.createContext(void 0);function ba(){return I.useContext(Dd)}var Bh=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=qa);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ou(this,function(){throw so(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=qa),this.name+t.hash},e}(),Wh=function(e){return e>="A"&&e<="Z"};function Fc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Wh(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Vd=function(e){return e==null||e===!1||e===""},Hd=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Vd(i)&&(Array.isArray(i)&&i.isCss||rr(i)?r.push("".concat(Fc(o),":"),i,";"):qr(i)?r.push.apply(r,Jr(Jr(["".concat(o," {")],Hd(i),!1),["}"],!1)):r.push("".concat(Fc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Nd||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Kt(e,t,n,r){if(Vd(e))return[];if(ru(e))return[".".concat(e.styledComponentId)];if(rr(e)){if(!rr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Kt(o,t,n,r)}var i;return e instanceof Bh?n?(e.inject(n,r),[e.getName(r)]):[e]:qr(e)?Hd(e):Array.isArray(e)?Array.prototype.concat.apply(Xi,e.map(function(l){return Kt(l,t,n,r)})):[e.toString()]}function Ud(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(rr(n)&&!ru(n))return!1}return!0}var Yh=Rd("6.0.5"),Qh=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ud(t),this.componentId=n,this.baseHash=Fn(Yh,n),this.baseStyle=r,$i.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=fn(o,this.staticRulesId);else{var i=Ga(Kt(this.rules,t,n,r)),l=Ka(Fn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=fn(o,l),this.staticRulesId=l}else{for(var s=Fn(this.baseHash,r.hash),c="",m=0;m<this.rules.length;m++){var p=this.rules[m];if(typeof p=="string")c+=p;else if(p){var h=Ga(Kt(p,t,n,r));s=Fn(s,h),c+=h}}if(c){var g=Ka(s>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),o=fn(o,g)}}return o},e}(),iu=O.createContext(void 0);iu.Consumer;var Gl={};function Zh(e,t,n){var r=ru(e),o=e,i=!Xl(e),l=t.attrs,a=l===void 0?Xi:l,s=t.componentId,c=s===void 0?function(d,w){var x=typeof d!="string"?"sc":Tc(d);Gl[x]=(Gl[x]||0)+1;var E="".concat(x,"-").concat(Td("6.0.5"+x+Gl[x]));return w?"".concat(w,"-").concat(E):E}(t.displayName,t.parentComponentId):s,m=t.displayName;m===void 0&&function(d){return Xl(d)?"styled.".concat(d):"Styled(".concat(wh(d),")")}(e);var p=t.displayName&&t.componentId?"".concat(Tc(t.displayName),"-").concat(t.componentId):t.componentId||c,h=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var v=o.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;g=function(d,w){return v(d,w)&&y(d,w)}}else g=v}var N=new Qh(n,p,r?o.componentStyle:void 0);function f(d,w){return function(x,E,S){var z=x.attrs,G=x.componentStyle,j=x.defaultProps,Ie=x.foldedComponentIds,tn=x.styledComponentId,nn=x.target,co=O.useContext(iu),vl=ba(),rn=x.shouldForwardProp||vl.shouldForwardProp,Ye=function(wt,je,Rt){for(var Me,Qe=ke(ke({},je),{className:void 0,theme:Rt}),wl=0;wl<wt.length;wl+=1){var fo=rr(Me=wt[wl])?Me(Qe):Me;for(var Tt in fo)Qe[Tt]=Tt==="className"?fn(Qe[Tt],fo[Tt]):Tt==="style"?ke(ke({},Qe[Tt]),fo[Tt]):fo[Tt]}return je.className&&(Qe.className=fn(Qe.className,je.className)),Qe}(z,E,zd(E,co,j)||nr),_=Ye.as||nn,R={};for(var T in Ye)Ye[T]===void 0||T[0]==="$"||T==="as"||T==="theme"||(T==="forwardedAs"?R.as=Ye.forwardedAs:rn&&!rn(T,_)||(R[T]=Ye[T]));var X=function(wt,je){var Rt=ba(),Me=wt.generateAndInjectStyles(je,Rt.styleSheet,Rt.stylis);return Me}(G,Ye),ee=fn(Ie,tn);return X&&(ee+=" "+X),Ye.className&&(ee+=" "+Ye.className),R[Xl(_)&&!Od.has(_)?"class":"className"]=ee,R.ref=S,I.createElement(_,R)}(u,d,w)}var u=O.forwardRef(f);return u.attrs=h,u.componentStyle=N,u.shouldForwardProp=g,u.foldedComponentIds=r?fn(o.foldedComponentIds,o.styledComponentId):"",u.styledComponentId=p,u.target=r?o.target:e,Object.defineProperty(u,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?function(w){for(var x=[],E=1;E<arguments.length;E++)x[E-1]=arguments[E];for(var S=0,z=x;S<z.length;S++)Ja(w,z[S],!0);return w}({},o.defaultProps,d):d}}),ou(u,function(){return".".concat(u.styledComponentId)}),i&&Md(u,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),u}function Dc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Vc=function(e){return Object.assign(e,{isCss:!0})};function Bd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(rr(e)||qr(e)){var r=e;return Vc(Kt(Dc(Xi,Jr([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Kt(o):Vc(Kt(Dc(o,t)))}function es(e,t,n){if(n===void 0&&(n=nr),!t)throw so(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Bd.apply(void 0,Jr([o],i,!1)))};return r.attrs=function(o){return es(e,t,ke(ke({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return es(e,t,ke(ke({},n),o))},r}var Wd=function(e){return es(Zh,e)},ge=Wd;Od.forEach(function(e){ge[e]=Wd(e)});var Xh=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ud(t),$i.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Ga(Kt(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&$i.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Kh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Bd.apply(void 0,Jr([e],t,!1)),o="sc-global-".concat(Td(JSON.stringify(r))),i=new Xh(r,o),l=function(s){var c=ba(),m=O.useContext(iu),p=O.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&a(p,s,c.styleSheet,m,c.stylis),O.useLayoutEffect(function(){if(!c.styleSheet.server)return a(p,s,c.styleSheet,m,c.stylis),function(){return i.removeStyles(p,c.styleSheet)}},[p,s,c.styleSheet,m,c.stylis]),null};function a(s,c,m,p,h){if(i.isStatic)i.renderStyles(s,hh,m,h);else{var g=ke(ke({},c),{theme:zd(c,p,l.defaultProps)});i.renderStyles(s,g,m,h)}}return O.memo(l)}const $n=ge.p`
  word-spacing: 5px;
  line-height: 1.2;
  
`;function Gh(){return $.jsxs($.Fragment,{children:[$.jsx($n,{children:"Iniciei minha paixão por codificação em 2012, quando entrei na faculdade Eniac para cursar Sistemas de Informação."}),$.jsx($n,{children:"Todo trabalho que envolvia programação, era direcionado à mim. Meus primeiros passos com HTML começaram aqui, e desde então nunca parei."}),$.jsx($n,{children:"Em 2018 começei a investir de fato na minha carreira como programador."}),$.jsxs($n,{children:["Comecei meus estudos com ",$.jsx("b",{children:"Csharp"})," e ",$.jsx("b",{children:"Unity"})," para criar"," ",$.jsx("a",{href:"https://rafones12.itch.io/",target:"_blank",children:"Jogos"}),", e também criei muitos sites para pessoas proximas utilizando WordPress."]}),$.jsxs($n,{children:["Em 2022 veio o meu primeiro SIM! Atuei como Desenvolvedor Frontend na"," ",$.jsx("b",{children:"Pacto Soluções"}),". Pude atuar dentro de uma squad, aprender as pecularidades do Angular, versionar codigos com GIT, depositar horas no Jira, e entender como um sistema robusto é mantido."]}),$.jsxs($n,{children:["Hoje estou me especializando fortemente em ",$.jsx("b",{children:"React"}),", Javascript e suas principais funções."]})]})}const Jh=ge.main`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  padding: 1rem;

  border-radius: 5px;

  transition: 0.3s;

  &:hover {
    box-shadow: 1px 1px 10px white;
  }
`,qh=ge.div`
  color: #5c6b82;
`,bh=ge.div`
  h3 {
    color: #d7dce5;
  }

  h4 {
    color: #5c6b82;
  }

  p {
    padding-top: 5px;
  }
`;function ey(){return $.jsx($.Fragment,{children:$.jsxs(Jh,{children:[$.jsx(qh,{children:"2022 - 2023"}),$.jsxs(bh,{children:[$.jsx("h3",{children:"Pacto Soluções"}),$.jsx("h4",{children:"Desenvolvedor frontend"}),$.jsx("p",{children:"Migração do sistema em JSX para Angular"})]})]})})}const Hc="/portfolio/assets/todo-fd76723f.png",ty=ge.div`
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
`;function ct(e){return $.jsx(ty,{children:e.name})}const on={mobileS:"320px",mobileM:"375px",mobileL:"641px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px"},kn={mobileS:`(min-width: ${on.mobileS})`,mobileM:`(min-width: ${on.mobileM})`,mobileL:`screen and (max-width: ${on.mobileL})`,tablet:`(min-width: ${on.tablet})`,laptop:`(min-width: ${on.laptop})`,laptopL:`(min-width: ${on.laptopL})`,desktop:`(min-width: ${on.desktop})`},ny=ge.div`
display: flex;
flex-direction: column;
gap: 2rem;
`,Uc=ge.div`
  padding: 1rem ;

  border-radius: 5px;

  display: flex;
  flex-direction: row;

  transition: 0.3s;

  &:hover {
    box-shadow: 1px 1px 10px white;
  }

  @media ${kn.mobileL} {
    /* width: auto;
    height: auto; */

    display: flex;
    flex-direction: column;
    order: 2;
  }
`,Bc=ge.div`
  margin-right: 1rem;

  width: 120px;
  height: 68.9px;

  img {
    width: 120px;
    height: 68.9px;
  }

  @media ${kn.mobileL} {
    margin-top: 1rem;

    width: 120px;
    height: 68.9px;

    order: 1;
  }
`,Wc=ge.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: #d7dce5;
  }
`,Yc=ge.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  a {
    color: #94a3b8;
    font-weight: bold;
  }
`,Qc=ge.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;

`;function ry(){return $.jsxs(ny,{children:[$.jsxs(Uc,{children:[$.jsx(Bc,{children:$.jsx("img",{src:Hc,sizes:"16px",alt:"lista de tarefas"})}),$.jsxs(Wc,{children:[$.jsx("h3",{children:"Lista de tarefas"}),$.jsx("p",{children:"Aplicativo que armazena informacões"}),$.jsxs(Yc,{children:[$.jsx("a",{href:"https://rafaholive.github.io/todo-list-react/",target:"_blank",children:"Projeto"}),$.jsx("a",{href:"https://github.com/RafahOlive/todo-list-react",target:"_blank",children:"Repositorio"})]}),$.jsxs(Qc,{children:[$.jsx(ct,{name:"React"}),$.jsx(ct,{name:"Typescript"}),$.jsx(ct,{name:"Vite"}),$.jsx(ct,{name:"Responsivo"})]})]})]}),$.jsxs(Uc,{children:[$.jsx(Bc,{children:$.jsx("img",{src:Hc,sizes:"16px",alt:"E-commerce"})}),$.jsxs(Wc,{children:[$.jsx("h3",{children:"E-Commerce"}),$.jsx("p",{children:"Site feito de exemplo de um e-commerce."}),$.jsx(Yc,{children:$.jsx("a",{href:"https://github.com/RafahOlive/E-commerce",target:"_blank",children:"Repositorio"})}),$.jsxs(Qc,{children:[$.jsx(ct,{name:"React"}),$.jsx(ct,{name:"Typescript"}),$.jsx(ct,{name:"Stiches"}),$.jsx(ct,{name:"Nextjs"}),$.jsx(ct,{name:"Stripe"}),$.jsx(ct,{name:"Axios"})]})]})]})]})}function oy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function iy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var ly=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(iy(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=oy(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Se="-ms-",_i="-moz-",F="-webkit-",Yd="comm",lu="rule",au="decl",ay="@import",Qd="@keyframes",sy="@layer",uy=Math.abs,Ki=String.fromCharCode,cy=Object.assign;function fy(e,t){return me(e,0)^45?(((t<<2^me(e,0))<<2^me(e,1))<<2^me(e,2))<<2^me(e,3):0}function Zd(e){return e.trim()}function dy(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function ts(e,t){return e.indexOf(t)}function me(e,t){return e.charCodeAt(t)|0}function br(e,t,n){return e.slice(t,n)}function pt(e){return e.length}function su(e){return e.length}function Ro(e,t){return t.push(e),e}function py(e,t){return e.map(t).join("")}var Gi=1,or=1,Xd=0,Ae=0,oe=0,ur="";function Ji(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Gi,column:or,length:l,return:""}}function vr(e,t){return cy(Ji("",null,null,"",null,null,0),e,{length:-e.length},t)}function my(){return oe}function hy(){return oe=Ae>0?me(ur,--Ae):0,or--,oe===10&&(or=1,Gi--),oe}function Ve(){return oe=Ae<Xd?me(ur,Ae++):0,or++,oe===10&&(or=1,Gi++),oe}function vt(){return me(ur,Ae)}function Go(){return Ae}function uo(e,t){return br(ur,e,t)}function eo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kd(e){return Gi=or=1,Xd=pt(ur=e),Ae=0,[]}function Gd(e){return ur="",e}function Jo(e){return Zd(uo(Ae-1,ns(e===91?e+2:e===40?e+1:e)))}function yy(e){for(;(oe=vt())&&oe<33;)Ve();return eo(e)>2||eo(oe)>3?"":" "}function gy(e,t){for(;--t&&Ve()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return uo(e,Go()+(t<6&&vt()==32&&Ve()==32))}function ns(e){for(;Ve();)switch(oe){case e:return Ae;case 34:case 39:e!==34&&e!==39&&ns(oe);break;case 40:e===41&&ns(e);break;case 92:Ve();break}return Ae}function vy(e,t){for(;Ve()&&e+oe!==47+10;)if(e+oe===42+42&&vt()===47)break;return"/*"+uo(t,Ae-1)+"*"+Ki(e===47?e:Ve())}function wy(e){for(;!eo(vt());)Ve();return uo(e,Ae)}function Sy(e){return Gd(qo("",null,null,null,[""],e=Kd(e),0,[0],e))}function qo(e,t,n,r,o,i,l,a,s){for(var c=0,m=0,p=l,h=0,g=0,v=0,y=1,N=1,f=1,u=0,d="",w=o,x=i,E=r,S=d;N;)switch(v=u,u=Ve()){case 40:if(v!=108&&me(S,p-1)==58){ts(S+=D(Jo(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:S+=Jo(u);break;case 9:case 10:case 13:case 32:S+=yy(v);break;case 92:S+=gy(Go()-1,7);continue;case 47:switch(vt()){case 42:case 47:Ro(xy(vy(Ve(),Go()),t,n),s);break;default:S+="/"}break;case 123*y:a[c++]=pt(S)*f;case 125*y:case 59:case 0:switch(u){case 0:case 125:N=0;case 59+m:f==-1&&(S=D(S,/\f/g,"")),g>0&&pt(S)-p&&Ro(g>32?Xc(S+";",r,n,p-1):Xc(D(S," ","")+";",r,n,p-2),s);break;case 59:S+=";";default:if(Ro(E=Zc(S,t,n,c,m,o,a,d,w=[],x=[],p),i),u===123)if(m===0)qo(S,t,E,E,w,i,p,a,x);else switch(h===99&&me(S,3)===110?100:h){case 100:case 108:case 109:case 115:qo(e,E,E,r&&Ro(Zc(e,E,E,0,0,o,a,d,o,w=[],p),x),o,x,p,a,r?w:x);break;default:qo(S,E,E,E,[""],x,0,a,x)}}c=m=g=0,y=f=1,d=S="",p=l;break;case 58:p=1+pt(S),g=v;default:if(y<1){if(u==123)--y;else if(u==125&&y++==0&&hy()==125)continue}switch(S+=Ki(u),u*y){case 38:f=m>0?1:(S+="\f",-1);break;case 44:a[c++]=(pt(S)-1)*f,f=1;break;case 64:vt()===45&&(S+=Jo(Ve())),h=vt(),m=p=pt(d=S+=wy(Go())),u++;break;case 45:v===45&&pt(S)==2&&(y=0)}}return i}function Zc(e,t,n,r,o,i,l,a,s,c,m){for(var p=o-1,h=o===0?i:[""],g=su(h),v=0,y=0,N=0;v<r;++v)for(var f=0,u=br(e,p+1,p=uy(y=l[v])),d=e;f<g;++f)(d=Zd(y>0?h[f]+" "+u:D(u,/&\f/g,h[f])))&&(s[N++]=d);return Ji(e,t,n,o===0?lu:a,s,c,m)}function xy(e,t,n){return Ji(e,t,n,Yd,Ki(my()),br(e,2,-2),0)}function Xc(e,t,n,r){return Ji(e,t,n,au,br(e,0,r),br(e,r+1,-1),r)}function Yn(e,t){for(var n="",r=su(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function ky(e,t,n,r){switch(e.type){case sy:if(e.children.length)break;case ay:case au:return e.return=e.return||e.value;case Yd:return"";case Qd:return e.return=e.value+"{"+Yn(e.children,r)+"}";case lu:e.value=e.props.join(",")}return pt(n=Yn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ey(e){var t=su(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Cy(e){return function(t){t.root||(t=t.return)&&e(t)}}var $y=function(t,n,r){for(var o=0,i=0;o=i,i=vt(),o===38&&i===12&&(n[r]=1),!eo(i);)Ve();return uo(t,Ae)},_y=function(t,n){var r=-1,o=44;do switch(eo(o)){case 0:o===38&&vt()===12&&(n[r]=1),t[r]+=$y(Ae-1,n,r);break;case 2:t[r]+=Jo(o);break;case 4:if(o===44){t[++r]=vt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ki(o)}while(o=Ve());return t},Py=function(t,n){return Gd(_y(Kd(t),n))},Kc=new WeakMap,Ny=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Kc.get(r))&&!o){Kc.set(t,!0);for(var i=[],l=Py(n,i),a=r.props,s=0,c=0;s<l.length;s++)for(var m=0;m<a.length;m++,c++)t.props[c]=i[s]?l[s].replace(/&\f/g,a[m]):a[m]+" "+l[s]}}},zy=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Jd(e,t){switch(fy(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+_i+e+Se+e+e;case 6828:case 4268:return F+e+Se+e+e;case 6165:return F+e+Se+"flex-"+e+e;case 5187:return F+e+D(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+Se+"flex-$1$2")+e;case 5443:return F+e+Se+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return F+e+Se+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return F+e+Se+D(e,"shrink","negative")+e;case 5292:return F+e+Se+D(e,"basis","preferred-size")+e;case 6060:return F+"box-"+D(e,"-grow","")+F+e+Se+D(e,"grow","positive")+e;case 4554:return F+D(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+Se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pt(e)-1-t>6)switch(me(e,t+1)){case 109:if(me(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+_i+(me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ts(e,"stretch")?Jd(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(me(e,t+1)!==115)break;case 6444:switch(me(e,pt(e)-3-(~ts(e,"!important")&&10))){case 107:return D(e,":",":"+F)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(me(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+Se+"$2box$3")+e}break;case 5936:switch(me(e,t+11)){case 114:return F+e+Se+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+Se+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+Se+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return F+e+Se+e+e}return e}var Oy=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case au:t.return=Jd(t.value,t.length);break;case Qd:return Yn([vr(t,{value:D(t.value,"@","@"+F)})],o);case lu:if(t.length)return py(t.props,function(i){switch(dy(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Yn([vr(t,{props:[D(i,/:(read-\w+)/,":"+_i+"$1")]})],o);case"::placeholder":return Yn([vr(t,{props:[D(i,/:(plac\w+)/,":"+F+"input-$1")]}),vr(t,{props:[D(i,/:(plac\w+)/,":"+_i+"$1")]}),vr(t,{props:[D(i,/:(plac\w+)/,Se+"input-$1")]})],o)}return""})}},Ry=[Oy],Ty=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var N=y.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||Ry,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var N=y.getAttribute("data-emotion").split(" "),f=1;f<N.length;f++)i[N[f]]=!0;a.push(y)});var s,c=[Ny,zy];{var m,p=[ky,Cy(function(y){m.insert(y)})],h=Ey(c.concat(o,p)),g=function(N){return Yn(Sy(N),h)};s=function(N,f,u,d){m=u,g(N?N+"{"+f.styles+"}":f.styles),d&&(v.inserted[f.name]=!0)}}var v={key:n,sheet:new ly({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return v.sheet.hydrate(a),v},qd={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de=typeof Symbol=="function"&&Symbol.for,uu=de?Symbol.for("react.element"):60103,cu=de?Symbol.for("react.portal"):60106,qi=de?Symbol.for("react.fragment"):60107,bi=de?Symbol.for("react.strict_mode"):60108,el=de?Symbol.for("react.profiler"):60114,tl=de?Symbol.for("react.provider"):60109,nl=de?Symbol.for("react.context"):60110,fu=de?Symbol.for("react.async_mode"):60111,rl=de?Symbol.for("react.concurrent_mode"):60111,ol=de?Symbol.for("react.forward_ref"):60112,il=de?Symbol.for("react.suspense"):60113,Ay=de?Symbol.for("react.suspense_list"):60120,ll=de?Symbol.for("react.memo"):60115,al=de?Symbol.for("react.lazy"):60116,Iy=de?Symbol.for("react.block"):60121,jy=de?Symbol.for("react.fundamental"):60117,My=de?Symbol.for("react.responder"):60118,Ly=de?Symbol.for("react.scope"):60119;function We(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case uu:switch(e=e.type,e){case fu:case rl:case qi:case el:case bi:case il:return e;default:switch(e=e&&e.$$typeof,e){case nl:case ol:case al:case ll:case tl:return e;default:return t}}case cu:return t}}}function bd(e){return We(e)===rl}U.AsyncMode=fu;U.ConcurrentMode=rl;U.ContextConsumer=nl;U.ContextProvider=tl;U.Element=uu;U.ForwardRef=ol;U.Fragment=qi;U.Lazy=al;U.Memo=ll;U.Portal=cu;U.Profiler=el;U.StrictMode=bi;U.Suspense=il;U.isAsyncMode=function(e){return bd(e)||We(e)===fu};U.isConcurrentMode=bd;U.isContextConsumer=function(e){return We(e)===nl};U.isContextProvider=function(e){return We(e)===tl};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===uu};U.isForwardRef=function(e){return We(e)===ol};U.isFragment=function(e){return We(e)===qi};U.isLazy=function(e){return We(e)===al};U.isMemo=function(e){return We(e)===ll};U.isPortal=function(e){return We(e)===cu};U.isProfiler=function(e){return We(e)===el};U.isStrictMode=function(e){return We(e)===bi};U.isSuspense=function(e){return We(e)===il};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===qi||e===rl||e===el||e===bi||e===il||e===Ay||typeof e=="object"&&e!==null&&(e.$$typeof===al||e.$$typeof===ll||e.$$typeof===tl||e.$$typeof===nl||e.$$typeof===ol||e.$$typeof===jy||e.$$typeof===My||e.$$typeof===Ly||e.$$typeof===Iy)};U.typeOf=We;qd.exports=U;var Fy=qd.exports,ep=Fy,Dy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tp={};tp[ep.ForwardRef]=Dy;tp[ep.Memo]=Vy;var Hy=!0;function np(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var du=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Hy===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},rp=function(t,n,r){du(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Uy(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var By=/[A-Z]|^ms/g,Wy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,op=function(t){return t.charCodeAt(1)===45},Gc=function(t){return t!=null&&typeof t!="boolean"},Jl=Xm(function(e){return op(e)?e:e.replace(By,"-$&").toLowerCase()}),Jc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Wy,function(r,o,i){return mt={name:o,styles:i,next:mt},o})}return Nd[t]!==1&&!op(t)&&typeof n=="number"&&n!==0?n+"px":n};function to(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return mt={name:n.name,styles:n.styles,next:mt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)mt={name:r.name,styles:r.styles,next:mt},r=r.next;var o=n.styles+";";return o}return Yy(e,t,n)}case"function":{if(e!==void 0){var i=mt,l=n(e);return mt=i,to(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Yy(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=to(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":Gc(l)&&(r+=Jl(i)+":"+Jc(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)Gc(l[a])&&(r+=Jl(i)+":"+Jc(i,l[a])+";");else{var s=to(e,t,l);switch(i){case"animation":case"animationName":{r+=Jl(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var qc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,mt,pu=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";mt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=to(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=to(r,n,t[a]),o&&(i+=l[a]);qc.lastIndex=0;for(var s="",c;(c=qc.exec(i))!==null;)s+="-"+c[1];var m=Uy(i)+s;return{name:m,styles:i,next:mt}},Qy=function(t){return t()},Zy=ku["useInsertionEffect"]?ku["useInsertionEffect"]:!1,ip=Zy||Qy,mu={}.hasOwnProperty,lp=I.createContext(typeof HTMLElement<"u"?Ty({key:"css"}):null);lp.Provider;var ap=function(t){return I.forwardRef(function(n,r){var o=I.useContext(lp);return t(n,o,r)})},sp=I.createContext({}),rs="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Xy=function(t,n){var r={};for(var o in n)mu.call(n,o)&&(r[o]=n[o]);return r[rs]=t,r},Ky=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return du(n,r,o),ip(function(){return rp(n,r,o)}),null},Gy=ap(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[rs],i=[r],l="";typeof e.className=="string"?l=np(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=pu(i,void 0,I.useContext(sp));l+=t.key+"-"+a.name;var s={};for(var c in e)mu.call(e,c)&&c!=="css"&&c!==rs&&(s[c]=e[c]);return s.ref=n,s.className=l,I.createElement(I.Fragment,null,I.createElement(Ky,{cache:t,serialized:a,isStringTag:typeof o=="string"}),I.createElement(o,s))}),Jy=Gy,qy=$.Fragment;function se(e,t,n){return mu.call(t,"css")?$.jsx(Jy,Xy(e,t),n):$.jsx(e,t,n)}function up(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return pu(t)}var C=function(){var t=up.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},by=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function eg(e,t,n){var r=[],o=np(e,r,n);return r.length<2?n:o+t(r)}var tg=function(t){var n=t.cache,r=t.serializedArr;return ip(function(){for(var o=0;o<r.length;o++)rp(n,r[o],!1)}),null},ql=ap(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,m=new Array(c),p=0;p<c;p++)m[p]=arguments[p];var h=pu(m,t.registered);return r.push(h),du(t,h,!1),t.key+"-"+h.name},i=function(){for(var c=arguments.length,m=new Array(c),p=0;p<c;p++)m[p]=arguments[p];return eg(t.registered,o,by(m))},l={css:o,cx:i,theme:I.useContext(sp)},a=e.children(l);return n=!0,I.createElement(I.Fragment,null,I.createElement(tg,{cache:t,serializedArr:r}),a)}),ng=Object.defineProperty,rg=(e,t,n)=>t in e?ng(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,To=(e,t,n)=>(rg(e,typeof t!="symbol"?t+"":t,n),n),os=new Map,Ao=new WeakMap,bc=0,og=void 0;function ig(e){return e?(Ao.has(e)||(bc+=1,Ao.set(e,bc.toString())),Ao.get(e)):"0"}function lg(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?ig(e.root):e[t]}`).toString()}function ag(e){let t=lg(e),n=os.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(a=>{var s;const c=a.isIntersecting&&o.some(m=>a.intersectionRatio>=m);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(s=r.get(a.target))==null||s.forEach(m=>{m(c,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},os.set(t,n)}return n}function cp(e,t,n={},r=og){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:i,elements:l}=ag(n);let a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),os.delete(o))}}function sg(e){return typeof e.children!="function"}var ef=class extends I.Component{constructor(e){super(e),To(this,"node",null),To(this,"_unobserveCb",null),To(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),To(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),sg(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=cp(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:g,entry:v}=this.state;return e({inView:g,entry:v,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:a,trackVisibility:s,delay:c,initialInView:m,fallbackInView:p,...h}=this.props;return I.createElement(t||"div",{ref:this.handleNode,...h},e)}};function fp({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:a,fallbackInView:s,onChange:c}={}){var m;const[p,h]=I.useState(null),g=I.useRef(),[v,y]=I.useState({inView:!!a,entry:void 0});g.current=c,I.useEffect(()=>{if(l||!p)return;let d;return d=cp(p,(w,x)=>{y({inView:w,entry:x}),g.current&&g.current(w,x),x.isIntersecting&&i&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,p,o,r,i,l,n,s,t]);const N=(m=v.entry)==null?void 0:m.target,f=I.useRef();!p&&N&&!i&&!l&&f.current!==N&&(f.current=N,y({inView:!!a,entry:void 0}));const u=[h,v.inView,v.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var dp={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hu=Symbol.for("react.element"),yu=Symbol.for("react.portal"),sl=Symbol.for("react.fragment"),ul=Symbol.for("react.strict_mode"),cl=Symbol.for("react.profiler"),fl=Symbol.for("react.provider"),dl=Symbol.for("react.context"),ug=Symbol.for("react.server_context"),pl=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),yl=Symbol.for("react.memo"),gl=Symbol.for("react.lazy"),cg=Symbol.for("react.offscreen"),pp;pp=Symbol.for("react.module.reference");function et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case hu:switch(e=e.type,e){case sl:case cl:case ul:case ml:case hl:return e;default:switch(e=e&&e.$$typeof,e){case ug:case dl:case pl:case gl:case yl:case fl:return e;default:return t}}case yu:return t}}}B.ContextConsumer=dl;B.ContextProvider=fl;B.Element=hu;B.ForwardRef=pl;B.Fragment=sl;B.Lazy=gl;B.Memo=yl;B.Portal=yu;B.Profiler=cl;B.StrictMode=ul;B.Suspense=ml;B.SuspenseList=hl;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return et(e)===dl};B.isContextProvider=function(e){return et(e)===fl};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===hu};B.isForwardRef=function(e){return et(e)===pl};B.isFragment=function(e){return et(e)===sl};B.isLazy=function(e){return et(e)===gl};B.isMemo=function(e){return et(e)===yl};B.isPortal=function(e){return et(e)===yu};B.isProfiler=function(e){return et(e)===cl};B.isStrictMode=function(e){return et(e)===ul};B.isSuspense=function(e){return et(e)===ml};B.isSuspenseList=function(e){return et(e)===hl};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===sl||e===cl||e===ul||e===ml||e===hl||e===cg||typeof e=="object"&&e!==null&&(e.$$typeof===gl||e.$$typeof===yl||e.$$typeof===fl||e.$$typeof===dl||e.$$typeof===pl||e.$$typeof===pp||e.getModuleId!==void 0)};B.typeOf=et;dp.exports=B;var fg=dp.exports;C`
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
`;C`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;C`
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
`;C`
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
`;C`
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
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
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
`;const dg=C`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,pg=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mg=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,hg=C`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yg=C`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gu=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gg=C`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vg=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wg=C`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sg=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xg=C`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,kg=C`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Eg=C`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Cg({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=gu,iterationCount:o=1}){return up`
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
  `}function $g(e){return e==null}function _g(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function mp(e,t){return n=>n?e():t()}function no(e){return mp(e,()=>null)}function is(e){return no(()=>({opacity:0}))(e)}const hp=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=gu,triggerOnce:a=!1,className:s,style:c,childClassName:m,childStyle:p,children:h,onVisibilityChange:g}=e,v=I.useMemo(()=>Cg({keyframes:l,duration:o}),[o,l]);return $g(h)?null:_g(h)?se(Ng,{...e,animationStyles:v,children:String(h)}):fg.isFragment(h)?se(yp,{...e,animationStyles:v}):se(qy,{children:I.Children.map(h,(y,N)=>{if(!I.isValidElement(y))return null;const f=r+(t?N*o*n:0);switch(y.type){case"ol":case"ul":return se(ql,{children:({cx:u})=>se(y.type,{...y.props,className:u(s,y.props.className),style:Object.assign({},c,y.props.style),children:se(hp,{...e,children:y.props.children})})});case"li":return se(ef,{threshold:i,triggerOnce:a,onChange:g,children:({inView:u,ref:d})=>se(ql,{children:({cx:w})=>se(y.type,{...y.props,ref:d,className:w(m,y.props.className),css:no(()=>v)(u),style:Object.assign({},p,y.props.style,is(!u),{animationDelay:f+"ms"})})})});default:return se(ef,{threshold:i,triggerOnce:a,onChange:g,children:({inView:u,ref:d})=>se("div",{ref:d,className:s,css:no(()=>v)(u),style:Object.assign({},c,is(!u),{animationDelay:f+"ms"}),children:se(ql,{children:({cx:w})=>se(y.type,{...y.props,className:w(m,y.props.className),style:Object.assign({},p,y.props.style)})})})})}})})},Pg={display:"inline-block",whiteSpace:"pre"},Ng=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:c,children:m,onVisibilityChange:p}=e,{ref:h,inView:g}=fp({triggerOnce:a,threshold:l,onChange:p});return mp(()=>se("div",{ref:h,className:s,style:Object.assign({},c,Pg),children:m.split("").map((v,y)=>se("span",{css:no(()=>t)(g),style:{animationDelay:o+y*i*r+"ms"},children:v},y))}),()=>se(yp,{...e,children:m}))(n)},yp=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:a}=e,{ref:s,inView:c}=fp({triggerOnce:r,threshold:n,onChange:a});return se("div",{ref:s,className:o,css:no(()=>t)(c),style:Object.assign({},i,is(!c)),children:l})};C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;C`
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
`;const zg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Og=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Rg=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Tg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Ag=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Ig=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,jg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Mg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Lg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Fg=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Dg=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Vg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Hg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Ug(e,t,n){switch(n){case"bottom-left":return t?Og:pg;case"bottom-right":return t?Rg:mg;case"down":return e?t?Ag:yg:t?Tg:hg;case"left":return e?t?jg:gg:t?Ig:gu;case"right":return e?t?Lg:wg:t?Mg:vg;case"top-left":return t?Fg:Sg;case"top-right":return t?Dg:xg;case"up":return e?t?Hg:Eg:t?Vg:kg;default:return t?zg:dg}}const Bg=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=I.useMemo(()=>Ug(t,r,n),[t,n,r]);return se(hp,{keyframes:i,...o})};C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;C`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
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
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;C`
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
`;const Wg=I.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var Yg=Object.defineProperty,Pi=Object.getOwnPropertySymbols,gp=Object.prototype.hasOwnProperty,vp=Object.prototype.propertyIsEnumerable,tf=(e,t,n)=>t in e?Yg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nf=(e,t)=>{for(var n in t||(t={}))gp.call(t,n)&&tf(e,n,t[n]);if(Pi)for(var n of Pi(t))vp.call(t,n)&&tf(e,n,t[n]);return e},rf=(e,t)=>{var n={};for(var r in e)gp.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Pi)for(var r of Pi(e))t.indexOf(r)<0&&vp.call(e,r)&&(n[r]=e[r]);return n};const vu=I.forwardRef((e,t)=>{const n=e,{alt:r,color:o,size:i,weight:l,mirrored:a,children:s,weights:c}=n,m=rf(n,["alt","color","size","weight","mirrored","children","weights"]),p=I.useContext(Wg),{color:h="currentColor",size:g,weight:v="regular",mirrored:y=!1}=p,N=rf(p,["color","size","weight","mirrored"]);return O.createElement("svg",nf(nf({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i??g,height:i??g,fill:o??h,viewBox:"0 0 256 256",transform:a||y?"scale(-1, 1)":void 0},N),m),!!r&&O.createElement("title",null,r),s,c.get(l??v))});vu.displayName="IconBase";var Qg=Object.defineProperty,Zg=Object.defineProperties,Xg=Object.getOwnPropertyDescriptors,of=Object.getOwnPropertySymbols,Kg=Object.prototype.hasOwnProperty,Gg=Object.prototype.propertyIsEnumerable,lf=(e,t,n)=>t in e?Qg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jg=(e,t)=>{for(var n in t||(t={}))Kg.call(t,n)&&lf(e,n,t[n]);if(of)for(var n of of(t))Gg.call(t,n)&&lf(e,n,t[n]);return e},qg=(e,t)=>Zg(e,Xg(t));const bg=new Map([["bold",O.createElement(O.Fragment,null,O.createElement("path",{d:"M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"}))],["duotone",O.createElement(O.Fragment,null,O.createElement("path",{d:"M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z",opacity:"0.2"}),O.createElement("path",{d:"M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"}))],["fill",O.createElement(O.Fragment,null,O.createElement("path",{d:"M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"}))],["light",O.createElement(O.Fragment,null,O.createElement("path",{d:"M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z"}))],["regular",O.createElement(O.Fragment,null,O.createElement("path",{d:"M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"}))],["thin",O.createElement(O.Fragment,null,O.createElement("path",{d:"M203.94,76.16A55.73,55.73,0,0,0,199.46,30,4,4,0,0,0,196,28a55.78,55.78,0,0,0-46,24H122A55.78,55.78,0,0,0,76,28a4,4,0,0,0-3.46,2,55.73,55.73,0,0,0-4.48,46.16A53.78,53.78,0,0,0,60,104v8a52.06,52.06,0,0,0,52,52h1.41A36,36,0,0,0,100,192v12H72a28,28,0,0,1-28-28A36,36,0,0,0,8,140a4,4,0,0,0,0,8,28,28,0,0,1,28,28,36,36,0,0,0,36,36h28v20a4,4,0,0,0,8,0V192a28,28,0,0,1,56,0v40a4,4,0,0,0,8,0V192a36,36,0,0,0-13.41-28H160a52.06,52.06,0,0,0,52-52v-8A53.78,53.78,0,0,0,203.94,76.16ZM204,112a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44v-8a45.76,45.76,0,0,1,7.71-24.89,4,4,0,0,0,.53-3.84,47.82,47.82,0,0,1,2.1-39.21,47.8,47.8,0,0,1,38.12,22.1A4,4,0,0,0,119.83,60h32.34a4,4,0,0,0,3.37-1.84,47.8,47.8,0,0,1,38.12-22.1,47.82,47.82,0,0,1,2.1,39.21,4,4,0,0,0,.53,3.83A45.85,45.85,0,0,1,204,104Z"}))]]),wp=I.forwardRef((e,t)=>O.createElement(vu,qg(Jg({ref:t},e),{weights:bg})));wp.displayName="GithubLogo";var ev=Object.defineProperty,tv=Object.defineProperties,nv=Object.getOwnPropertyDescriptors,af=Object.getOwnPropertySymbols,rv=Object.prototype.hasOwnProperty,ov=Object.prototype.propertyIsEnumerable,sf=(e,t,n)=>t in e?ev(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,iv=(e,t)=>{for(var n in t||(t={}))rv.call(t,n)&&sf(e,n,t[n]);if(af)for(var n of af(t))ov.call(t,n)&&sf(e,n,t[n]);return e},lv=(e,t)=>tv(e,nv(t));const av=new Map([["bold",O.createElement(O.Fragment,null,O.createElement("path",{d:"M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V124a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,152v24a12,12,0,0,1-24,0V152a16,16,0,0,0-32,0v24a12,12,0,0,1-24,0ZM96,124v52a12,12,0,0,1-24,0V124a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"}))],["duotone",O.createElement(O.Fragment,null,O.createElement("path",{d:"M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",opacity:"0.2"}),O.createElement("path",{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"}))],["fill",O.createElement(O.Fragment,null,O.createElement("path",{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"}))],["light",O.createElement(O.Fragment,null,O.createElement("path",{d:"M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z"}))],["regular",O.createElement(O.Fragment,null,O.createElement("path",{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"}))],["thin",O.createElement(O.Fragment,null,O.createElement("path",{d:"M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z"}))]]),Sp=I.forwardRef((e,t)=>O.createElement(vu,lv(iv({ref:t},e),{weights:av})));Sp.displayName="LinkedinLogo";const sv=ge.main`
  margin-top: 5.7rem;

  padding: 0 10rem;

  @media ${kn.mobileL} {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    margin-top: 3rem;

    padding: 0 2rem;

  }
`,uv=ge.header`
  position: fixed;

  width: 33rem;
  height: auto;

  h1,
  h2 {
    color: #e2e8f0;
  }

  h2 {
    padding-top: 12px;
  }

  p {
    padding-top: 16px;
  }

  @media ${kn.mobileL} {
    position: relative;
    width: auto;
    height: auto;

    margin-top: auto;
  }
`,cv=ge.div`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;

  button {
    width: 100px;
    height: 30px;

    background: none;
    border: none;
    cursor: pointer;

    font-family: "IBM Plex Sans";
    font-size: medium;
    color: #64748b;
    text-align: left;

    margin-top: 1rem;

    transition: 0.1s;
  }

  button:hover {
    background: none;

    color: #ffffff;

    font-size: large;
  }

  @media ${kn.mobileL} {
    display: flex;
    flex-direction: row;

    justify-content: left;

    margin-top: 1rem;

    button {
      width: auto;
      height: 30px;
    }

    button:not(:first-child) {
      margin-left: 1rem;
    }
  }
`,fv=ge.div`
  margin-top: 10rem;

  a {
    color: #64748b;

    margin-top: 1rem;
    margin-right: 1rem;

    transition: 0.1s;
  }

  a:hover {
    color: #ffffff;
  }

  @media ${kn.mobileL} {
    margin-top: 1rem;
  }
`,dv=ge.div`
  width: 33rem;
  height: auto;

  margin-left: auto;

  /* testes */
  /* border: 1px solid pink;
  background: white; */

  @media ${kn.mobileL} {
    width: auto;
    height: auto;

    margin-left: 0;
  }
`;function pv(){const[e,t]=I.useState(!1),[n,r]=I.useState(!1),[o,i]=I.useState(!1);function l(){t(!0),r(!1),i(!1)}function a(){t(!1),r(!0),i(!1)}function s(){t(!1),r(!1),i(!0)}return $.jsxs(sv,{children:[$.jsxs(uv,{children:[$.jsx("h1",{children:"Rafael Ribeiro"}),$.jsx("h2",{children:"Desenvolvedor Frontend e Engenheiro de Software"}),$.jsx("p",{children:"Crio sites responsivos, soluções web e alguns jogos 🎮"}),$.jsxs(cv,{children:[$.jsx("button",{onClick:l,children:"Sobre"}),$.jsx("button",{onClick:a,children:"Experiência"}),$.jsx("button",{onClick:s,children:"Projetos"})]}),$.jsxs(fv,{children:[$.jsx("a",{href:"https://www.linkedin.com/in/rafaelribeirodev/",target:"_blank",children:$.jsx(Sp,{size:24})}),$.jsx("a",{href:"https://github.com/RafahOlive",target:"_blank",children:$.jsx(wp,{size:24})})]})]}),$.jsx(dv,{children:$.jsxs(Bg,{duration:1e3,children:[e&&$.jsx(Gh,{}),n&&$.jsx(ey,{}),o&&$.jsx(ry,{})]})})]})}const mv=Kh`
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


`;function hv(){return $.jsxs($.Fragment,{children:[$.jsx(mv,{}),$.jsx(pv,{})]})}bl.createRoot(document.getElementById("root")).render($.jsx(O.StrictMode,{children:$.jsx(hv,{})}));
