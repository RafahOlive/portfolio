function Sf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function xf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zs={exports:{}},Ao={},$s={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr=Symbol.for("react.element"),kf=Symbol.for("react.portal"),Ef=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),_f=Symbol.for("react.profiler"),Nf=Symbol.for("react.provider"),Pf=Symbol.for("react.context"),zf=Symbol.for("react.forward_ref"),$f=Symbol.for("react.suspense"),Of=Symbol.for("react.memo"),Tf=Symbol.for("react.lazy"),ru=Symbol.iterator;function Mf(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var Os={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ts=Object.assign,Ms={};function _n(e,t,n){this.props=e,this.context=t,this.refs=Ms,this.updater=n||Os}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rs(){}Rs.prototype=_n.prototype;function Gi(e,t,n){this.props=e,this.context=t,this.refs=Ms,this.updater=n||Os}var Ji=Gi.prototype=new Rs;Ji.constructor=Gi;Ts(Ji,_n.prototype);Ji.isPureReactComponent=!0;var ou=Array.isArray,Ls=Object.prototype.hasOwnProperty,qi={current:null},js={key:!0,ref:!0,__self:!0,__source:!0};function As(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Ls.call(t,r)&&!js.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Sr,type:e,key:l,ref:i,props:o,_owner:qi.current}}function Rf(e,t){return{$$typeof:Sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sr}function Lf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lu=/\/+/g;function Cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lf(""+e.key):t.toString(36)}function Xr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Sr:case kf:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Cl(i,0):r,ou(o)?(n="",e!=null&&(n=e.replace(lu,"$&/")+"/"),Xr(o,t,n,"",function(c){return c})):o!=null&&(bi(o)&&(o=Rf(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(lu,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ou(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+Cl(l,a);i+=Xr(l,t,n,u,o)}else if(u=Mf(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+Cl(l,a++),i+=Xr(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function zr(e,t,n){if(e==null)return e;var r=[],o=0;return Xr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function jf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},Kr={transition:null},Af={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Kr,ReactCurrentOwner:qi};L.Children={map:zr,forEach:function(e,t,n){zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zr(e,function(){t++}),t},toArray:function(e){return zr(e,function(t){return t})||[]},only:function(e){if(!bi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=_n;L.Fragment=Ef;L.Profiler=_f;L.PureComponent=Gi;L.StrictMode=Cf;L.Suspense=$f;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ts({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=qi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Ls.call(t,u)&&!js.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Sr,type:e.type,key:o,ref:l,props:r,_owner:i}};L.createContext=function(e){return e={$$typeof:Pf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nf,_context:e},e.Consumer=e};L.createElement=As;L.createFactory=function(e){var t=As.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:zf,render:e}};L.isValidElement=bi;L.lazy=function(e){return{$$typeof:Tf,_payload:{_status:-1,_result:e},_init:jf}};L.memo=function(e,t){return{$$typeof:Of,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Kr.transition;Kr.transition={};try{e()}finally{Kr.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return we.current.useCallback(e,t)};L.useContext=function(e){return we.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return we.current.useDeferredValue(e)};L.useEffect=function(e,t){return we.current.useEffect(e,t)};L.useId=function(){return we.current.useId()};L.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return we.current.useMemo(e,t)};L.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};L.useRef=function(e){return we.current.useRef(e)};L.useState=function(e){return we.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return we.current.useTransition()};L.version="18.2.0";$s.exports=L;var R=$s.exports;const O=xf(R),iu=Sf({__proto__:null,default:O},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If=R,Ff=Symbol.for("react.element"),Df=Symbol.for("react.fragment"),Vf=Object.prototype.hasOwnProperty,Hf=If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uf={key:!0,ref:!0,__self:!0,__source:!0};function Is(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Vf.call(t,r)&&!Uf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ff,type:e,key:l,ref:i,props:o,_owner:Hf.current}}Ao.Fragment=Df;Ao.jsx=Is;Ao.jsxs=Is;zs.exports=Ao;var P=zs.exports,ql={},Fs={exports:{}},Me={},Ds={exports:{}},Vs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,T){var M=N.length;N.push(T);e:for(;0<M;){var J=M-1>>>1,re=N[J];if(0<o(re,T))N[J]=T,N[M]=re,M=J;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var T=N[0],M=N.pop();if(M!==T){N[0]=M;e:for(var J=0,re=N.length,Nr=re>>>1;J<Nr;){var Lt=2*(J+1)-1,El=N[Lt],jt=Lt+1,Pr=N[jt];if(0>o(El,M))jt<re&&0>o(Pr,El)?(N[J]=Pr,N[jt]=M,J=jt):(N[J]=El,N[Lt]=M,J=Lt);else if(jt<re&&0>o(Pr,M))N[J]=Pr,N[jt]=M,J=jt;else break e}}return T}function o(N,T){var M=N.sortIndex-T.sortIndex;return M!==0?M:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],c=[],h=1,p=null,m=3,w=!1,g=!1,v=!1,$=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(N){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=N)r(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(c)}}function y(N){if(v=!1,d(N),!g)if(n(u)!==null)g=!0,xl(E);else{var T=n(c);T!==null&&kl(y,T.startTime-N)}}function E(N,T){g=!1,v&&(v=!1,f(z),z=-1),w=!0;var M=m;try{for(d(T),p=n(u);p!==null&&(!(p.expirationTime>T)||N&&!Ue());){var J=p.callback;if(typeof J=="function"){p.callback=null,m=p.priorityLevel;var re=J(p.expirationTime<=T);T=e.unstable_now(),typeof re=="function"?p.callback=re:p===n(u)&&r(u),d(T)}else r(u);p=n(u)}if(p!==null)var Nr=!0;else{var Lt=n(c);Lt!==null&&kl(y,Lt.startTime-T),Nr=!1}return Nr}finally{p=null,m=M,w=!1}}var C=!1,k=null,z=-1,G=5,j=-1;function Ue(){return!(e.unstable_now()-j<G)}function $n(){if(k!==null){var N=e.unstable_now();j=N;var T=!0;try{T=k(!0,N)}finally{T?On():(C=!1,k=null)}}else C=!1}var On;if(typeof s=="function")On=function(){s($n)};else if(typeof MessageChannel<"u"){var nu=new MessageChannel,wf=nu.port2;nu.port1.onmessage=$n,On=function(){wf.postMessage(null)}}else On=function(){$($n,0)};function xl(N){k=N,C||(C=!0,On())}function kl(N,T){z=$(function(){N(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,xl(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var T=3;break;default:T=m}var M=m;m=T;try{return N()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=m;m=N;try{return T()}finally{m=M}},e.unstable_scheduleCallback=function(N,T,M){var J=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?J+M:J):M=J,N){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=M+re,N={id:h++,callback:T,priorityLevel:N,startTime:M,expirationTime:re,sortIndex:-1},M>J?(N.sortIndex=M,t(c,N),n(u)===null&&N===n(c)&&(v?(f(z),z=-1):v=!0,kl(y,M-J))):(N.sortIndex=re,t(u,N),g||w||(g=!0,xl(E))),N},e.unstable_shouldYield=Ue,e.unstable_wrapCallback=function(N){var T=m;return function(){var M=m;m=T;try{return N.apply(this,arguments)}finally{m=M}}}})(Vs);Ds.exports=Vs;var Bf=Ds.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hs=R,Te=Bf;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Us=new Set,bn={};function Xt(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(bn[e]=t,e=0;e<t.length;e++)Us.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,Wf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,au={},uu={};function Qf(e){return bl.call(uu,e)?!0:bl.call(au,e)?!1:Wf.test(e)?uu[e]=!0:(au[e]=!0,!1)}function Yf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zf(e,t,n,r){if(t===null||typeof t>"u"||Yf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var ea=/[\-:]([a-z])/g;function ta(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ea,ta);fe[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ea,ta);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ea,ta);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function na(e,t,n,r){var o=fe.hasOwnProperty(t)?fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zf(t,n,o,r)&&(n=null),r||o===null?Qf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Hs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$r=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),ra=Symbol.for("react.strict_mode"),ei=Symbol.for("react.profiler"),Bs=Symbol.for("react.provider"),Ws=Symbol.for("react.context"),oa=Symbol.for("react.forward_ref"),ti=Symbol.for("react.suspense"),ni=Symbol.for("react.suspense_list"),la=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Qs=Symbol.for("react.offscreen"),su=Symbol.iterator;function Tn(e){return e===null||typeof e!="object"?null:(e=su&&e[su]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,_l;function Vn(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||""}return`
`+_l+e}var Nl=!1;function Pl(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vn(e):""}function Xf(e){switch(e.tag){case 5:return Vn(e.type);case 16:return Vn("Lazy");case 13:return Vn("Suspense");case 19:return Vn("SuspenseList");case 0:case 2:case 15:return e=Pl(e.type,!1),e;case 11:return e=Pl(e.type.render,!1),e;case 1:return e=Pl(e.type,!0),e;default:return""}}function ri(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Jt:return"Portal";case ei:return"Profiler";case ra:return"StrictMode";case ti:return"Suspense";case ni:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ws:return(e.displayName||"Context")+".Consumer";case Bs:return(e._context.displayName||"Context")+".Provider";case oa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case la:return t=e.displayName||null,t!==null?t:ri(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return ri(e(t))}catch{}}return null}function Kf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ri(t);case 8:return t===ra?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ys(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gf(e){var t=Ys(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Or(e){e._valueTracker||(e._valueTracker=Gf(e))}function Zs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ys(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function so(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oi(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xs(e,t){t=t.checked,t!=null&&na(e,"checked",t,!1)}function li(e,t){Xs(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ii(e,t.type,n):t.hasOwnProperty("defaultValue")&&ii(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ii(e,t,n){(t!=="number"||so(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hn=Array.isArray;function cn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ai(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function du(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Hn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function Ks(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ui(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,Js=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jf=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(e){Jf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wn[t]=Wn[e]})});function qs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wn.hasOwnProperty(e)&&Wn[e]?(""+t).trim():t+"px"}function bs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=qs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var qf=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function si(e,t){if(t){if(qf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var di=null,fn=null,dn=null;function mu(e){if(e=Er(e)){if(typeof di!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ho(t),di(e.stateNode,e.type,t))}}function ec(e){fn?dn?dn.push(e):dn=[e]:fn=e}function tc(){if(fn){var e=fn,t=dn;if(dn=fn=null,mu(e),t)for(e=0;e<t.length;e++)mu(t[e])}}function nc(e,t){return e(t)}function rc(){}var zl=!1;function oc(e,t,n){if(zl)return e(t,n);zl=!0;try{return nc(e,t,n)}finally{zl=!1,(fn!==null||dn!==null)&&(rc(),tc())}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ho(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var pi=!1;if(st)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){pi=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{pi=!1}function bf(e,t,n,r,o,l,i,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Qn=!1,co=null,fo=!1,mi=null,ed={onError:function(e){Qn=!0,co=e}};function td(e,t,n,r,o,l,i,a,u){Qn=!1,co=null,bf.apply(ed,arguments)}function nd(e,t,n,r,o,l,i,a,u){if(td.apply(this,arguments),Qn){if(Qn){var c=co;Qn=!1,co=null}else throw Error(S(198));fo||(fo=!0,mi=c)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hu(e){if(Kt(e)!==e)throw Error(S(188))}function rd(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return hu(o),e;if(l===r)return hu(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function ic(e){return e=rd(e),e!==null?ac(e):null}function ac(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ac(e);if(t!==null)return t;e=e.sibling}return null}var uc=Te.unstable_scheduleCallback,vu=Te.unstable_cancelCallback,od=Te.unstable_shouldYield,ld=Te.unstable_requestPaint,q=Te.unstable_now,id=Te.unstable_getCurrentPriorityLevel,aa=Te.unstable_ImmediatePriority,sc=Te.unstable_UserBlockingPriority,po=Te.unstable_NormalPriority,ad=Te.unstable_LowPriority,cc=Te.unstable_IdlePriority,Io=null,tt=null;function ud(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Io,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:fd,sd=Math.log,cd=Math.LN2;function fd(e){return e>>>=0,e===0?32:31-(sd(e)/cd|0)|0}var Mr=64,Rr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Un(a):(l&=i,l!==0&&(r=Un(l)))}else i=n&~o,i!==0?r=Un(i):l!==0&&(r=Un(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),o=1<<n,r|=e[n],t&=~o;return r}function dd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ze(l),a=1<<i,u=o[i];u===-1?(!(a&n)||a&r)&&(o[i]=dd(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fc(){var e=Mr;return Mr<<=1,!(Mr&4194240)&&(Mr=64),e}function $l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function md(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ze(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ua(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var D=0;function dc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pc,sa,mc,hc,vc,vi=!1,Lr=[],xt=null,kt=null,Et=null,nr=new Map,rr=new Map,yt=[],hd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yu(e,t){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function Rn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Er(t),t!==null&&sa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vd(e,t,n,r,o){switch(t){case"focusin":return xt=Rn(xt,e,t,n,r,o),!0;case"dragenter":return kt=Rn(kt,e,t,n,r,o),!0;case"mouseover":return Et=Rn(Et,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return nr.set(l,Rn(nr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,rr.set(l,Rn(rr.get(l)||null,e,t,n,r,o)),!0}return!1}function yc(e){var t=Ft(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=lc(n),t!==null){e.blockedOn=t,vc(e.priority,function(){mc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fi=r,n.target.dispatchEvent(r),fi=null}else return t=Er(n),t!==null&&sa(t),e.blockedOn=n,!1;t.shift()}return!0}function gu(e,t,n){Gr(e)&&n.delete(t)}function yd(){vi=!1,xt!==null&&Gr(xt)&&(xt=null),kt!==null&&Gr(kt)&&(kt=null),Et!==null&&Gr(Et)&&(Et=null),nr.forEach(gu),rr.forEach(gu)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,vi||(vi=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,yd)))}function or(e){function t(o){return Ln(o,e)}if(0<Lr.length){Ln(Lr[0],e);for(var n=1;n<Lr.length;n++){var r=Lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xt!==null&&Ln(xt,e),kt!==null&&Ln(kt,e),Et!==null&&Ln(Et,e),nr.forEach(t),rr.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)yc(n),n.blockedOn===null&&yt.shift()}var pn=pt.ReactCurrentBatchConfig,ho=!0;function gd(e,t,n,r){var o=D,l=pn.transition;pn.transition=null;try{D=1,ca(e,t,n,r)}finally{D=o,pn.transition=l}}function wd(e,t,n,r){var o=D,l=pn.transition;pn.transition=null;try{D=4,ca(e,t,n,r)}finally{D=o,pn.transition=l}}function ca(e,t,n,r){if(ho){var o=yi(e,t,n,r);if(o===null)Dl(e,t,r,vo,n),yu(e,r);else if(vd(o,e,t,n,r))r.stopPropagation();else if(yu(e,r),t&4&&-1<hd.indexOf(e)){for(;o!==null;){var l=Er(o);if(l!==null&&pc(l),l=yi(e,t,n,r),l===null&&Dl(e,t,r,vo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var vo=null;function yi(e,t,n,r){if(vo=null,e=ia(r),e=Ft(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vo=e,null}function gc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(id()){case aa:return 1;case sc:return 4;case po:case ad:return 16;case cc:return 536870912;default:return 16}default:return 16}}var wt=null,fa=null,Jr=null;function wc(){if(Jr)return Jr;var e,t=fa,n=t.length,r,o="value"in wt?wt.value:wt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Jr=o.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jr(){return!0}function wu(){return!1}function Re(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?jr:wu,this.isPropagationStopped=wu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},da=Re(Nn),kr=X({},Nn,{view:0,detail:0}),Sd=Re(kr),Ol,Tl,jn,Fo=X({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(Ol=e.screenX-jn.screenX,Tl=e.screenY-jn.screenY):Tl=Ol=0,jn=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),Su=Re(Fo),xd=X({},Fo,{dataTransfer:0}),kd=Re(xd),Ed=X({},kr,{relatedTarget:0}),Ml=Re(Ed),Cd=X({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),_d=Re(Cd),Nd=X({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pd=Re(Nd),zd=X({},Nn,{data:0}),xu=Re(zd),$d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Od={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Td={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Md(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Td[e])?!!t[e]:!1}function pa(){return Md}var Rd=X({},kr,{key:function(e){if(e.key){var t=$d[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Od[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pa,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ld=Re(Rd),jd=X({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=Re(jd),Ad=X({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pa}),Id=Re(Ad),Fd=X({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dd=Re(Fd),Vd=X({},Fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hd=Re(Vd),Ud=[9,13,27,32],ma=st&&"CompositionEvent"in window,Yn=null;st&&"documentMode"in document&&(Yn=document.documentMode);var Bd=st&&"TextEvent"in window&&!Yn,Sc=st&&(!ma||Yn&&8<Yn&&11>=Yn),Eu=String.fromCharCode(32),Cu=!1;function xc(e,t){switch(e){case"keyup":return Ud.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bt=!1;function Wd(e,t){switch(e){case"compositionend":return kc(t);case"keypress":return t.which!==32?null:(Cu=!0,Eu);case"textInput":return e=t.data,e===Eu&&Cu?null:e;default:return null}}function Qd(e,t){if(bt)return e==="compositionend"||!ma&&xc(e,t)?(e=wc(),Jr=fa=wt=null,bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sc&&t.locale!=="ko"?null:t.data;default:return null}}var Yd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yd[e.type]:t==="textarea"}function Ec(e,t,n,r){ec(r),t=yo(t,"onChange"),0<t.length&&(n=new da("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zn=null,lr=null;function Zd(e){Lc(e,0)}function Do(e){var t=nn(e);if(Zs(t))return e}function Xd(e,t){if(e==="change")return t}var Cc=!1;if(st){var Rl;if(st){var Ll="oninput"in document;if(!Ll){var Nu=document.createElement("div");Nu.setAttribute("oninput","return;"),Ll=typeof Nu.oninput=="function"}Rl=Ll}else Rl=!1;Cc=Rl&&(!document.documentMode||9<document.documentMode)}function Pu(){Zn&&(Zn.detachEvent("onpropertychange",_c),lr=Zn=null)}function _c(e){if(e.propertyName==="value"&&Do(lr)){var t=[];Ec(t,lr,e,ia(e)),oc(Zd,t)}}function Kd(e,t,n){e==="focusin"?(Pu(),Zn=t,lr=n,Zn.attachEvent("onpropertychange",_c)):e==="focusout"&&Pu()}function Gd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Do(lr)}function Jd(e,t){if(e==="click")return Do(t)}function qd(e,t){if(e==="input"||e==="change")return Do(t)}function bd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:bd;function ir(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!bl.call(t,o)||!Ke(e[o],t[o]))return!1}return!0}function zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $u(e,t){var n=zu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zu(n)}}function Nc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pc(){for(var e=window,t=so();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=so(e.document)}return t}function ha(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ep(e){var t=Pc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nc(n.ownerDocument.documentElement,n)){if(r!==null&&ha(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=$u(n,l);var i=$u(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tp=st&&"documentMode"in document&&11>=document.documentMode,en=null,gi=null,Xn=null,wi=!1;function Ou(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wi||en==null||en!==so(r)||(r=en,"selectionStart"in r&&ha(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xn&&ir(Xn,r)||(Xn=r,r=yo(gi,"onSelect"),0<r.length&&(t=new da("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=en)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tn={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},jl={},zc={};st&&(zc=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Vo(e){if(jl[e])return jl[e];if(!tn[e])return e;var t=tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zc)return jl[e]=t[n];return e}var $c=Vo("animationend"),Oc=Vo("animationiteration"),Tc=Vo("animationstart"),Mc=Vo("transitionend"),Rc=new Map,Tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){Rc.set(e,t),Xt(t,[e])}for(var Al=0;Al<Tu.length;Al++){var Il=Tu[Al],np=Il.toLowerCase(),rp=Il[0].toUpperCase()+Il.slice(1);Tt(np,"on"+rp)}Tt($c,"onAnimationEnd");Tt(Oc,"onAnimationIteration");Tt(Tc,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(Mc,"onTransitionEnd");yn("onMouseEnter",["mouseout","mouseover"]);yn("onMouseLeave",["mouseout","mouseover"]);yn("onPointerEnter",["pointerout","pointerover"]);yn("onPointerLeave",["pointerout","pointerover"]);Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),op=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function Mu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nd(r,t,void 0,e),e.currentTarget=null}function Lc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==l&&o.isPropagationStopped())break e;Mu(o,a,c),l=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,c=a.currentTarget,a=a.listener,u!==l&&o.isPropagationStopped())break e;Mu(o,a,c),l=u}}}if(fo)throw e=mi,fo=!1,mi=null,e}function B(e,t){var n=t[Ci];n===void 0&&(n=t[Ci]=new Set);var r=e+"__bubble";n.has(r)||(jc(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),jc(n,e,r,t)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Ir]){e[Ir]=!0,Us.forEach(function(n){n!=="selectionchange"&&(op.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ir]||(t[Ir]=!0,Fl("selectionchange",!1,t))}}function jc(e,t,n,r){switch(gc(t)){case 1:var o=gd;break;case 4:o=wd;break;default:o=ca}n=o.bind(null,t,n,e),o=void 0,!pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Ft(a),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}a=a.parentNode}}r=r.return}oc(function(){var c=l,h=ia(n),p=[];e:{var m=Rc.get(e);if(m!==void 0){var w=da,g=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":w=Ld;break;case"focusin":g="focus",w=Ml;break;case"focusout":g="blur",w=Ml;break;case"beforeblur":case"afterblur":w=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Id;break;case $c:case Oc:case Tc:w=_d;break;case Mc:w=Dd;break;case"scroll":w=Sd;break;case"wheel":w=Hd;break;case"copy":case"cut":case"paste":w=Pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ku}var v=(t&4)!==0,$=!v&&e==="scroll",f=v?m!==null?m+"Capture":null:m;v=[];for(var s=c,d;s!==null;){d=s;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=tr(s,f),y!=null&&v.push(ur(s,y,d)))),$)break;s=s.return}0<v.length&&(m=new w(m,g,null,n,h),p.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==fi&&(g=n.relatedTarget||n.fromElement)&&(Ft(g)||g[ct]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(g=n.relatedTarget||n.toElement,w=c,g=g?Ft(g):null,g!==null&&($=Kt(g),g!==$||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=c),w!==g)){if(v=Su,y="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(v=ku,y="onPointerLeave",f="onPointerEnter",s="pointer"),$=w==null?m:nn(w),d=g==null?m:nn(g),m=new v(y,s+"leave",w,n,h),m.target=$,m.relatedTarget=d,y=null,Ft(h)===c&&(v=new v(f,s+"enter",g,n,h),v.target=d,v.relatedTarget=$,y=v),$=y,w&&g)t:{for(v=w,f=g,s=0,d=v;d;d=Gt(d))s++;for(d=0,y=f;y;y=Gt(y))d++;for(;0<s-d;)v=Gt(v),s--;for(;0<d-s;)f=Gt(f),d--;for(;s--;){if(v===f||f!==null&&v===f.alternate)break t;v=Gt(v),f=Gt(f)}v=null}else v=null;w!==null&&Ru(p,m,w,v,!1),g!==null&&$!==null&&Ru(p,$,g,v,!0)}}e:{if(m=c?nn(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var E=Xd;else if(_u(m))if(Cc)E=qd;else{E=Gd;var C=Kd}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Jd);if(E&&(E=E(e,c))){Ec(p,E,n,h);break e}C&&C(e,m,c),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&ii(m,"number",m.value)}switch(C=c?nn(c):window,e){case"focusin":(_u(C)||C.contentEditable==="true")&&(en=C,gi=c,Xn=null);break;case"focusout":Xn=gi=en=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,Ou(p,n,h);break;case"selectionchange":if(tp)break;case"keydown":case"keyup":Ou(p,n,h)}var k;if(ma)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else bt?xc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Sc&&n.locale!=="ko"&&(bt||z!=="onCompositionStart"?z==="onCompositionEnd"&&bt&&(k=wc()):(wt=h,fa="value"in wt?wt.value:wt.textContent,bt=!0)),C=yo(c,z),0<C.length&&(z=new xu(z,e,null,n,h),p.push({event:z,listeners:C}),k?z.data=k:(k=kc(n),k!==null&&(z.data=k)))),(k=Bd?Wd(e,n):Qd(e,n))&&(c=yo(c,"onBeforeInput"),0<c.length&&(h=new xu("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=k))}Lc(p,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=tr(e,n),l!=null&&r.unshift(ur(e,l,o)),l=tr(e,t),l!=null&&r.push(ur(e,l,o))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ru(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=tr(n,l),u!=null&&i.unshift(ur(n,u,a))):o||(u=tr(n,l),u!=null&&i.push(ur(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var lp=/\r\n?/g,ip=/\u0000|\uFFFD/g;function Lu(e){return(typeof e=="string"?e:""+e).replace(lp,`
`).replace(ip,"")}function Fr(e,t,n){if(t=Lu(t),Lu(e)!==t&&n)throw Error(S(425))}function go(){}var Si=null,xi=null;function ki(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ei=typeof setTimeout=="function"?setTimeout:void 0,ap=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,up=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(sp)}:Ei;function sp(e){setTimeout(function(){throw e})}function Vl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);or(t)}function Ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),et="__reactFiber$"+Pn,sr="__reactProps$"+Pn,ct="__reactContainer$"+Pn,Ci="__reactEvents$"+Pn,cp="__reactListeners$"+Pn,fp="__reactHandles$"+Pn;function Ft(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Au(e);e!==null;){if(n=e[et])return n;e=Au(e)}return t}e=n,n=e.parentNode}return null}function Er(e){return e=e[et]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ho(e){return e[sr]||null}var _i=[],rn=-1;function Mt(e){return{current:e}}function W(e){0>rn||(e.current=_i[rn],_i[rn]=null,rn--)}function U(e,t){rn++,_i[rn]=e.current,e.current=t}var Ot={},ve=Mt(Ot),Ee=Mt(!1),Bt=Ot;function gn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function wo(){W(Ee),W(ve)}function Iu(e,t,n){if(ve.current!==Ot)throw Error(S(168));U(ve,t),U(Ee,n)}function Ac(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Kf(e)||"Unknown",o));return X({},n,r)}function So(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Bt=ve.current,U(ve,e),U(Ee,Ee.current),!0}function Fu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Ac(e,t,Bt),r.__reactInternalMemoizedMergedChildContext=e,W(Ee),W(ve),U(ve,e)):W(Ee),U(Ee,n)}var lt=null,Uo=!1,Hl=!1;function Ic(e){lt===null?lt=[e]:lt.push(e)}function dp(e){Uo=!0,Ic(e)}function Rt(){if(!Hl&&lt!==null){Hl=!0;var e=0,t=D;try{var n=lt;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,Uo=!1}catch(o){throw lt!==null&&(lt=lt.slice(e+1)),uc(aa,Rt),o}finally{D=t,Hl=!1}}return null}var on=[],ln=0,xo=null,ko=0,je=[],Ae=0,Wt=null,it=1,at="";function At(e,t){on[ln++]=ko,on[ln++]=xo,xo=e,ko=t}function Fc(e,t,n){je[Ae++]=it,je[Ae++]=at,je[Ae++]=Wt,Wt=e;var r=it;e=at;var o=32-Ze(r)-1;r&=~(1<<o),n+=1;var l=32-Ze(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,it=1<<32-Ze(t)+o|n<<o|r,at=l+e}else it=1<<l|n<<o|r,at=e}function va(e){e.return!==null&&(At(e,1),Fc(e,1,0))}function ya(e){for(;e===xo;)xo=on[--ln],on[ln]=null,ko=on[--ln],on[ln]=null;for(;e===Wt;)Wt=je[--Ae],je[Ae]=null,at=je[--Ae],je[Ae]=null,it=je[--Ae],je[Ae]=null}var $e=null,ze=null,Q=!1,Ye=null;function Dc(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,ze=Ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wt!==null?{id:it,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,ze=null,!0):!1;default:return!1}}function Ni(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pi(e){if(Q){var t=ze;if(t){var n=t;if(!Du(e,t)){if(Ni(e))throw Error(S(418));t=Ct(n.nextSibling);var r=$e;t&&Du(e,t)?Dc(r,n):(e.flags=e.flags&-4097|2,Q=!1,$e=e)}}else{if(Ni(e))throw Error(S(418));e.flags=e.flags&-4097|2,Q=!1,$e=e}}}function Vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Dr(e){if(e!==$e)return!1;if(!Q)return Vu(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ki(e.type,e.memoizedProps)),t&&(t=ze)){if(Ni(e))throw Vc(),Error(S(418));for(;t;)Dc(e,t),t=Ct(t.nextSibling)}if(Vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=$e?Ct(e.stateNode.nextSibling):null;return!0}function Vc(){for(var e=ze;e;)e=Ct(e.nextSibling)}function wn(){ze=$e=null,Q=!1}function ga(e){Ye===null?Ye=[e]:Ye.push(e)}var pp=pt.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Eo=Mt(null),Co=null,an=null,wa=null;function Sa(){wa=an=Co=null}function xa(e){var t=Eo.current;W(Eo),e._currentValue=t}function zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mn(e,t){Co=e,wa=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(wa!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(Co===null)throw Error(S(308));an=e,Co.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var Dt=null;function ka(e){Dt===null?Dt=[e]:Dt.push(e)}function Hc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ka(t)):(n.next=o.next,o.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function Ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ft(e,n)}return o=r.interleaved,o===null?(t.next=t,ka(r)):(t.next=o.next,o.next=t),r.interleaved=t,ft(e,n)}function br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ua(e,n)}}function Hu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _o(e,t,n,r){var o=e.updateQueue;vt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,i===null?l=c:i.next=c,i=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(l!==null){var p=o.baseState;i=0,h=c=u=null,a=l;do{var m=a.lane,w=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,v=a;switch(m=t,w=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){p=g.call(w,p,m);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,m=typeof g=="function"?g.call(w,p,m):g,m==null)break e;p=X({},p,m);break e;case 2:vt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=w,u=p):h=h.next=w,i|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(h===null&&(u=p),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Yt|=i,e.lanes=i,e.memoizedState=p}}function Uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Bc=new Hs.Component().refs;function $i(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bo={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Pt(e),l=ut(r,o);l.payload=t,n!=null&&(l.callback=n),t=_t(e,l,o),t!==null&&(Xe(t,e,o,r),br(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Pt(e),l=ut(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=_t(e,l,o),t!==null&&(Xe(t,e,o,r),br(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Pt(e),o=ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=_t(e,o,r),t!==null&&(Xe(t,e,r,n),br(t,e,r))}};function Bu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(o,l):!0}function Wc(e,t,n){var r=!1,o=Ot,l=t.contextType;return typeof l=="object"&&l!==null?l=De(l):(o=Ce(t)?Bt:ve.current,r=t.contextTypes,l=(r=r!=null)?gn(e,o):Ot),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Wu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bo.enqueueReplaceState(t,t.state,null)}function Oi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Bc,Ea(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=De(l):(l=Ce(t)?Bt:ve.current,o.context=gn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&($i(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Bo.enqueueReplaceState(o,o.state,null),_o(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function An(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;a===Bc&&(a=o.refs={}),i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Vr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qu(e){var t=e._init;return t(e._payload)}function Qc(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function o(f,s){return f=zt(f,s),f.index=0,f.sibling=null,f}function l(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,s,d,y){return s===null||s.tag!==6?(s=Xl(d,f.mode,y),s.return=f,s):(s=o(s,d),s.return=f,s)}function u(f,s,d,y){var E=d.type;return E===qt?h(f,s,d.props.children,y,d.key):s!==null&&(s.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Qu(E)===s.type)?(y=o(s,d.props),y.ref=An(f,s,d),y.return=f,y):(y=lo(d.type,d.key,d.props,null,f.mode,y),y.ref=An(f,s,d),y.return=f,y)}function c(f,s,d,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Kl(d,f.mode,y),s.return=f,s):(s=o(s,d.children||[]),s.return=f,s)}function h(f,s,d,y,E){return s===null||s.tag!==7?(s=Ut(d,f.mode,y,E),s.return=f,s):(s=o(s,d),s.return=f,s)}function p(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Xl(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case $r:return d=lo(s.type,s.key,s.props,null,f.mode,d),d.ref=An(f,null,s),d.return=f,d;case Jt:return s=Kl(s,f.mode,d),s.return=f,s;case ht:var y=s._init;return p(f,y(s._payload),d)}if(Hn(s)||Tn(s))return s=Ut(s,f.mode,d,null),s.return=f,s;Vr(f,s)}return null}function m(f,s,d,y){var E=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:a(f,s,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $r:return d.key===E?u(f,s,d,y):null;case Jt:return d.key===E?c(f,s,d,y):null;case ht:return E=d._init,m(f,s,E(d._payload),y)}if(Hn(d)||Tn(d))return E!==null?null:h(f,s,d,y,null);Vr(f,d)}return null}function w(f,s,d,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,a(s,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $r:return f=f.get(y.key===null?d:y.key)||null,u(s,f,y,E);case Jt:return f=f.get(y.key===null?d:y.key)||null,c(s,f,y,E);case ht:var C=y._init;return w(f,s,d,C(y._payload),E)}if(Hn(y)||Tn(y))return f=f.get(d)||null,h(s,f,y,E,null);Vr(s,y)}return null}function g(f,s,d,y){for(var E=null,C=null,k=s,z=s=0,G=null;k!==null&&z<d.length;z++){k.index>z?(G=k,k=null):G=k.sibling;var j=m(f,k,d[z],y);if(j===null){k===null&&(k=G);break}e&&k&&j.alternate===null&&t(f,k),s=l(j,s,z),C===null?E=j:C.sibling=j,C=j,k=G}if(z===d.length)return n(f,k),Q&&At(f,z),E;if(k===null){for(;z<d.length;z++)k=p(f,d[z],y),k!==null&&(s=l(k,s,z),C===null?E=k:C.sibling=k,C=k);return Q&&At(f,z),E}for(k=r(f,k);z<d.length;z++)G=w(k,f,z,d[z],y),G!==null&&(e&&G.alternate!==null&&k.delete(G.key===null?z:G.key),s=l(G,s,z),C===null?E=G:C.sibling=G,C=G);return e&&k.forEach(function(Ue){return t(f,Ue)}),Q&&At(f,z),E}function v(f,s,d,y){var E=Tn(d);if(typeof E!="function")throw Error(S(150));if(d=E.call(d),d==null)throw Error(S(151));for(var C=E=null,k=s,z=s=0,G=null,j=d.next();k!==null&&!j.done;z++,j=d.next()){k.index>z?(G=k,k=null):G=k.sibling;var Ue=m(f,k,j.value,y);if(Ue===null){k===null&&(k=G);break}e&&k&&Ue.alternate===null&&t(f,k),s=l(Ue,s,z),C===null?E=Ue:C.sibling=Ue,C=Ue,k=G}if(j.done)return n(f,k),Q&&At(f,z),E;if(k===null){for(;!j.done;z++,j=d.next())j=p(f,j.value,y),j!==null&&(s=l(j,s,z),C===null?E=j:C.sibling=j,C=j);return Q&&At(f,z),E}for(k=r(f,k);!j.done;z++,j=d.next())j=w(k,f,z,j.value,y),j!==null&&(e&&j.alternate!==null&&k.delete(j.key===null?z:j.key),s=l(j,s,z),C===null?E=j:C.sibling=j,C=j);return e&&k.forEach(function($n){return t(f,$n)}),Q&&At(f,z),E}function $(f,s,d,y){if(typeof d=="object"&&d!==null&&d.type===qt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case $r:e:{for(var E=d.key,C=s;C!==null;){if(C.key===E){if(E=d.type,E===qt){if(C.tag===7){n(f,C.sibling),s=o(C,d.props.children),s.return=f,f=s;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Qu(E)===C.type){n(f,C.sibling),s=o(C,d.props),s.ref=An(f,C,d),s.return=f,f=s;break e}n(f,C);break}else t(f,C);C=C.sibling}d.type===qt?(s=Ut(d.props.children,f.mode,y,d.key),s.return=f,f=s):(y=lo(d.type,d.key,d.props,null,f.mode,y),y.ref=An(f,s,d),y.return=f,f=y)}return i(f);case Jt:e:{for(C=d.key;s!==null;){if(s.key===C)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){n(f,s.sibling),s=o(s,d.children||[]),s.return=f,f=s;break e}else{n(f,s);break}else t(f,s);s=s.sibling}s=Kl(d,f.mode,y),s.return=f,f=s}return i(f);case ht:return C=d._init,$(f,s,C(d._payload),y)}if(Hn(d))return g(f,s,d,y);if(Tn(d))return v(f,s,d,y);Vr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(n(f,s.sibling),s=o(s,d),s.return=f,f=s):(n(f,s),s=Xl(d,f.mode,y),s.return=f,f=s),i(f)):n(f,s)}return $}var Sn=Qc(!0),Yc=Qc(!1),Cr={},nt=Mt(Cr),cr=Mt(Cr),fr=Mt(Cr);function Vt(e){if(e===Cr)throw Error(S(174));return e}function Ca(e,t){switch(U(fr,t),U(cr,e),U(nt,Cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ui(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ui(t,e)}W(nt),U(nt,t)}function xn(){W(nt),W(cr),W(fr)}function Zc(e){Vt(fr.current);var t=Vt(nt.current),n=ui(t,e.type);t!==n&&(U(cr,e),U(nt,n))}function _a(e){cr.current===e&&(W(nt),W(cr))}var Y=Mt(0);function No(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function Na(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var eo=pt.ReactCurrentDispatcher,Bl=pt.ReactCurrentBatchConfig,Qt=0,Z=null,te=null,le=null,Po=!1,Kn=!1,dr=0,mp=0;function de(){throw Error(S(321))}function Pa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function za(e,t,n,r,o,l){if(Qt=l,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,eo.current=e===null||e.memoizedState===null?gp:wp,e=n(r,o),Kn){l=0;do{if(Kn=!1,dr=0,25<=l)throw Error(S(301));l+=1,le=te=null,t.updateQueue=null,eo.current=Sp,e=n(r,o)}while(Kn)}if(eo.current=zo,t=te!==null&&te.next!==null,Qt=0,le=te=Z=null,Po=!1,t)throw Error(S(300));return e}function $a(){var e=dr!==0;return dr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Z.memoizedState=le=e:le=le.next=e,le}function Ve(){if(te===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=le===null?Z.memoizedState:le.next;if(t!==null)le=t,te=e;else{if(e===null)throw Error(S(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},le===null?Z.memoizedState=le=e:le=le.next=e}return le}function pr(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=Ve(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=te,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,u=null,c=l;do{var h=c.lane;if((Qt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,i=r):u=u.next=p,Z.lanes|=h,Yt|=h}c=c.next}while(c!==null&&c!==l);u===null?i=r:u.next=a,Ke(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Z.lanes|=l,Yt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=Ve(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ke(l,t.memoizedState)||(ke=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Xc(){}function Kc(e,t){var n=Z,r=Ve(),o=t(),l=!Ke(r.memoizedState,o);if(l&&(r.memoizedState=o,ke=!0),r=r.queue,Oa(qc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,mr(9,Jc.bind(null,n,r,o,t),void 0,null),ie===null)throw Error(S(349));Qt&30||Gc(n,t,o)}return o}function Gc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jc(e,t,n,r){t.value=n,t.getSnapshot=r,bc(t)&&e0(e)}function qc(e,t,n){return n(function(){bc(t)&&e0(e)})}function bc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function e0(e){var t=ft(e,1);t!==null&&Xe(t,e,1,-1)}function Yu(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:e},t.queue=e,e=e.dispatch=yp.bind(null,Z,e),[t.memoizedState,e]}function mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function t0(){return Ve().memoizedState}function to(e,t,n,r){var o=Je();Z.flags|=e,o.memoizedState=mr(1|t,n,void 0,r===void 0?null:r)}function Wo(e,t,n,r){var o=Ve();r=r===void 0?null:r;var l=void 0;if(te!==null){var i=te.memoizedState;if(l=i.destroy,r!==null&&Pa(r,i.deps)){o.memoizedState=mr(t,n,l,r);return}}Z.flags|=e,o.memoizedState=mr(1|t,n,l,r)}function Zu(e,t){return to(8390656,8,e,t)}function Oa(e,t){return Wo(2048,8,e,t)}function n0(e,t){return Wo(4,2,e,t)}function r0(e,t){return Wo(4,4,e,t)}function o0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function l0(e,t,n){return n=n!=null?n.concat([e]):null,Wo(4,4,o0.bind(null,t,e),n)}function Ta(){}function i0(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function a0(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function u0(e,t,n){return Qt&21?(Ke(n,t)||(n=fc(),Z.lanes|=n,Yt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function hp(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Bl.transition;Bl.transition={};try{e(!1),t()}finally{D=n,Bl.transition=r}}function s0(){return Ve().memoizedState}function vp(e,t,n){var r=Pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},c0(e))f0(t,n);else if(n=Hc(e,t,n,r),n!==null){var o=ge();Xe(n,e,r,o),d0(n,t,r)}}function yp(e,t,n){var r=Pt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(c0(e))f0(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,Ke(a,i)){var u=t.interleaved;u===null?(o.next=o,ka(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Hc(e,t,o,r),n!==null&&(o=ge(),Xe(n,e,r,o),d0(n,t,r))}}function c0(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function f0(e,t){Kn=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function d0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ua(e,n)}}var zo={readContext:De,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},gp={readContext:De,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Zu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,to(4194308,4,o0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return to(4194308,4,e,t)},useInsertionEffect:function(e,t){return to(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vp.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Yu,useDebugValue:Ta,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Yu(!1),t=e[0];return e=hp.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,o=Je();if(Q){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ie===null)throw Error(S(349));Qt&30||Gc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Zu(qc.bind(null,r,l,e),[e]),r.flags|=2048,mr(9,Jc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Je(),t=ie.identifierPrefix;if(Q){var n=at,r=it;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wp={readContext:De,useCallback:i0,useContext:De,useEffect:Oa,useImperativeHandle:l0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:a0,useReducer:Wl,useRef:t0,useState:function(){return Wl(pr)},useDebugValue:Ta,useDeferredValue:function(e){var t=Ve();return u0(t,te.memoizedState,e)},useTransition:function(){var e=Wl(pr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Xc,useSyncExternalStore:Kc,useId:s0,unstable_isNewReconciler:!1},Sp={readContext:De,useCallback:i0,useContext:De,useEffect:Oa,useImperativeHandle:l0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:a0,useReducer:Ql,useRef:t0,useState:function(){return Ql(pr)},useDebugValue:Ta,useDeferredValue:function(e){var t=Ve();return te===null?t.memoizedState=e:u0(t,te.memoizedState,e)},useTransition:function(){var e=Ql(pr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Xc,useSyncExternalStore:Kc,useId:s0,unstable_isNewReconciler:!1};function kn(e,t){try{var n="",r=t;do n+=Xf(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ti(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xp=typeof WeakMap=="function"?WeakMap:Map;function p0(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oo||(Oo=!0,Hi=r),Ti(e,t)},n}function m0(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ti(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ti(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Xu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=jp.bind(null,e,t,n),t.then(e,e))}function Ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var kp=pt.ReactCurrentOwner,ke=!1;function ye(e,t,n,r){t.child=e===null?Yc(t,null,n,r):Sn(t,e.child,n,r)}function Ju(e,t,n,r,o){n=n.render;var l=t.ref;return mn(t,o),r=za(e,t,n,r,l,o),n=$a(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(Q&&n&&va(t),t.flags|=1,ye(e,t,r,o),t.child)}function qu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Da(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,h0(e,t,l,r,o)):(e=lo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(i,r)&&e.ref===t.ref)return dt(e,t,o)}return t.flags|=1,e=zt(l,r),e.ref=t.ref,e.return=t,t.child=e}function h0(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(ir(l,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,dt(e,t,o)}return Mi(e,t,n,r,o)}function v0(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(sn,Pe),Pe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(sn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,U(sn,Pe),Pe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,U(sn,Pe),Pe|=r;return ye(e,t,o,n),t.child}function y0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mi(e,t,n,r,o){var l=Ce(n)?Bt:ve.current;return l=gn(t,l),mn(t,o),n=za(e,t,n,r,l,o),r=$a(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(Q&&r&&va(t),t.flags|=1,ye(e,t,n,o),t.child)}function bu(e,t,n,r,o){if(Ce(n)){var l=!0;So(t)}else l=!1;if(mn(t,o),t.stateNode===null)no(e,t),Wc(t,n,r),Oi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=Ce(n)?Bt:ve.current,c=gn(t,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Wu(t,i,r,c),vt=!1;var m=t.memoizedState;i.state=m,_o(t,r,i,o),u=t.memoizedState,a!==r||m!==u||Ee.current||vt?(typeof h=="function"&&($i(t,n,h,r),u=t.memoizedState),(a=vt||Bu(t,n,a,r,m,u,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Uc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:We(t.type,a),i.props=c,p=t.pendingProps,m=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=De(u):(u=Ce(n)?Bt:ve.current,u=gn(t,u));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==p||m!==u)&&Wu(t,i,r,u),vt=!1,m=t.memoizedState,i.state=m,_o(t,r,i,o);var g=t.memoizedState;a!==p||m!==g||Ee.current||vt?(typeof w=="function"&&($i(t,n,w,r),g=t.memoizedState),(c=vt||Bu(t,n,c,r,m,g,u)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,g,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,g,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),i.props=r,i.state=g,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ri(e,t,n,r,l,o)}function Ri(e,t,n,r,o,l){y0(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Fu(t,n,!1),dt(e,t,l);r=t.stateNode,kp.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Sn(t,e.child,null,l),t.child=Sn(t,null,a,l)):ye(e,t,a,l),t.memoizedState=r.state,o&&Fu(t,n,!0),t.child}function g0(e){var t=e.stateNode;t.pendingContext?Iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Iu(e,t.context,!1),Ca(e,t.containerInfo)}function es(e,t,n,r,o){return wn(),ga(o),t.flags|=256,ye(e,t,n,r),t.child}var Li={dehydrated:null,treeContext:null,retryLane:0};function ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function w0(e,t,n){var r=t.pendingProps,o=Y.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(Y,o&1),e===null)return Pi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Zo(i,r,0,null),e=Ut(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ji(n),t.memoizedState=Li,e):Ma(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Ep(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=zt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=zt(a,l):(l=Ut(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ji(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Li,r}return l=e.child,e=l.sibling,r=zt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ma(e,t){return t=Zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hr(e,t,n,r){return r!==null&&ga(r),Sn(t,e.child,null,n),e=Ma(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ep(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Yl(Error(S(422))),Hr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Zo({mode:"visible",children:r.children},o,0,null),l=Ut(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Sn(t,e.child,null,i),t.child.memoizedState=ji(i),t.memoizedState=Li,l);if(!(t.mode&1))return Hr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(S(419)),r=Yl(l,r,void 0),Hr(e,t,i,r)}if(a=(i&e.childLanes)!==0,ke||a){if(r=ie,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ft(e,o),Xe(r,e,o,-1))}return Fa(),r=Yl(Error(S(421))),Hr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ap.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,ze=Ct(o.nextSibling),$e=t,Q=!0,Ye=null,e!==null&&(je[Ae++]=it,je[Ae++]=at,je[Ae++]=Wt,it=e.id,at=e.overflow,Wt=t),t=Ma(t,r.children),t.flags|=4096,t)}function ts(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zi(e.return,t,n)}function Zl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function S0(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ye(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ts(e,n,t);else if(e.tag===19)ts(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Y,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&No(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Zl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&No(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Zl(t,!0,n,null,l);break;case"together":Zl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function no(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cp(e,t,n){switch(t.tag){case 3:g0(t),wn();break;case 5:Zc(t);break;case 1:Ce(t.type)&&So(t);break;case 4:Ca(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(Eo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?w0(e,t,n):(U(Y,Y.current&1),e=dt(e,t,n),e!==null?e.sibling:null);U(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return S0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,v0(e,t,n)}return dt(e,t,n)}var x0,Ai,k0,E0;x0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ai=function(){};k0=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Vt(nt.current);var l=null;switch(n){case"input":o=oi(e,o),r=oi(e,r),l=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":o=ai(e,o),r=ai(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=go)}si(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&B("scroll",e),l||a===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};E0=function(e,t,n,r){n!==r&&(t.flags|=4)};function In(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _p(e,t,n){var r=t.pendingProps;switch(ya(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ce(t.type)&&wo(),pe(t),null;case 3:return r=t.stateNode,xn(),W(Ee),W(ve),Na(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Dr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Wi(Ye),Ye=null))),Ai(e,t),pe(t),null;case 5:_a(t);var o=Vt(fr.current);if(n=t.type,e!==null&&t.stateNode!=null)k0(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return pe(t),null}if(e=Vt(nt.current),Dr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[et]=t,r[sr]=l,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Bn.length;o++)B(Bn[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":cu(r,l),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},B("invalid",r);break;case"textarea":du(r,l),B("invalid",r)}si(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Fr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Fr(r.textContent,a,e),o=["children",""+a]):bn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&B("scroll",r)}switch(n){case"input":Or(r),fu(r,l,!0);break;case"textarea":Or(r),pu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=go)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[et]=t,e[sr]=r,x0(e,t,!1,!1),t.stateNode=e;e:{switch(i=ci(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Bn.length;o++)B(Bn[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":cu(e,r),o=oi(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),B("invalid",e);break;case"textarea":du(e,r),o=ai(e,r),B("invalid",e);break;default:o=r}si(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?bs(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Js(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&er(e,u):typeof u=="number"&&er(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(bn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&B("scroll",e):u!=null&&na(e,l,u,i))}switch(n){case"input":Or(e),fu(e,r,!1);break;case"textarea":Or(e),pu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?cn(e,!!r.multiple,l,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)E0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Vt(fr.current),Vt(nt.current),Dr(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(l=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return pe(t),null;case 13:if(W(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&ze!==null&&t.mode&1&&!(t.flags&128))Vc(),wn(),t.flags|=98560,l=!1;else if(l=Dr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[et]=t}else wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),l=!1}else Ye!==null&&(Wi(Ye),Ye=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ne===0&&(ne=3):Fa())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return xn(),Ai(e,t),e===null&&ar(t.stateNode.containerInfo),pe(t),null;case 10:return xa(t.type._context),pe(t),null;case 17:return Ce(t.type)&&wo(),pe(t),null;case 19:if(W(Y),l=t.memoizedState,l===null)return pe(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)In(l,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=No(e),i!==null){for(t.flags|=128,In(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Y,Y.current&1|2),t.child}e=e.sibling}l.tail!==null&&q()>En&&(t.flags|=128,r=!0,In(l,!1),t.lanes=4194304)}else{if(!r)if(e=No(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),In(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Q)return pe(t),null}else 2*q()-l.renderingStartTime>En&&n!==1073741824&&(t.flags|=128,r=!0,In(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=q(),t.sibling=null,n=Y.current,U(Y,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Ia(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Np(e,t){switch(ya(t),t.tag){case 1:return Ce(t.type)&&wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),W(Ee),W(ve),Na(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _a(t),null;case 13:if(W(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Y),null;case 4:return xn(),null;case 10:return xa(t.type._context),null;case 22:case 23:return Ia(),null;case 24:return null;default:return null}}var Ur=!1,he=!1,Pp=typeof WeakSet=="function"?WeakSet:Set,_=null;function un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Ii(e,t,n){try{n()}catch(r){K(e,t,r)}}var ns=!1;function zp(e,t){if(Si=ho,e=Pc(),ha(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,c=0,h=0,p=e,m=null;t:for(;;){for(var w;p!==n||o!==0&&p.nodeType!==3||(a=i+o),p!==l||r!==0&&p.nodeType!==3||(u=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===e)break t;if(m===n&&++c===o&&(a=i),m===l&&++h===r&&(u=i),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xi={focusedElem:e,selectionRange:n},ho=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,$=g.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:We(t.type,v),$);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){K(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return g=ns,ns=!1,g}function Gn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ii(t,n,l)}o=o.next}while(o!==r)}}function Qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function C0(e){var t=e.alternate;t!==null&&(e.alternate=null,C0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[sr],delete t[Ci],delete t[cp],delete t[fp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _0(e){return e.tag===5||e.tag===3||e.tag===4}function rs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=go));else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}function Vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vi(e,t,n),e=e.sibling;e!==null;)Vi(e,t,n),e=e.sibling}var ue=null,Qe=!1;function mt(e,t,n){for(n=n.child;n!==null;)N0(e,t,n),n=n.sibling}function N0(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Io,n)}catch{}switch(n.tag){case 5:he||un(n,t);case 6:var r=ue,o=Qe;ue=null,mt(e,t,n),ue=r,Qe=o,ue!==null&&(Qe?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Qe?(e=ue,n=n.stateNode,e.nodeType===8?Vl(e.parentNode,n):e.nodeType===1&&Vl(e,n),or(e)):Vl(ue,n.stateNode));break;case 4:r=ue,o=Qe,ue=n.stateNode.containerInfo,Qe=!0,mt(e,t,n),ue=r,Qe=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Ii(n,t,i),o=o.next}while(o!==r)}mt(e,t,n);break;case 1:if(!he&&(un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,mt(e,t,n),he=r):mt(e,t,n);break;default:mt(e,t,n)}}function os(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pp),t.forEach(function(r){var o=Ip.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Qe=!1;break e;case 3:ue=a.stateNode.containerInfo,Qe=!0;break e;case 4:ue=a.stateNode.containerInfo,Qe=!0;break e}a=a.return}if(ue===null)throw Error(S(160));N0(l,i,o),ue=null,Qe=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){K(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)P0(t,e),t=t.sibling}function P0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ge(e),r&4){try{Gn(3,e,e.return),Qo(3,e)}catch(v){K(e,e.return,v)}try{Gn(5,e,e.return)}catch(v){K(e,e.return,v)}}break;case 1:Be(t,e),Ge(e),r&512&&n!==null&&un(n,n.return);break;case 5:if(Be(t,e),Ge(e),r&512&&n!==null&&un(n,n.return),e.flags&32){var o=e.stateNode;try{er(o,"")}catch(v){K(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Xs(o,l),ci(a,i);var c=ci(a,l);for(i=0;i<u.length;i+=2){var h=u[i],p=u[i+1];h==="style"?bs(o,p):h==="dangerouslySetInnerHTML"?Js(o,p):h==="children"?er(o,p):na(o,h,p,c)}switch(a){case"input":li(o,l);break;case"textarea":Ks(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?cn(o,!!l.multiple,w,!1):m!==!!l.multiple&&(l.defaultValue!=null?cn(o,!!l.multiple,l.defaultValue,!0):cn(o,!!l.multiple,l.multiple?[]:"",!1))}o[sr]=l}catch(v){K(e,e.return,v)}}break;case 6:if(Be(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(v){K(e,e.return,v)}}break;case 3:if(Be(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{or(t.containerInfo)}catch(v){K(e,e.return,v)}break;case 4:Be(t,e),Ge(e);break;case 13:Be(t,e),Ge(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ja=q())),r&4&&os(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||h,Be(t,e),he=c):Be(t,e),Ge(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(p=_=h;_!==null;){switch(m=_,w=m.child,m.tag){case 0:case 11:case 14:case 15:Gn(4,m,m.return);break;case 1:un(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){K(r,n,v)}}break;case 5:un(m,m.return);break;case 22:if(m.memoizedState!==null){is(p);continue}}w!==null?(w.return=m,_=w):is(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{o=p.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=p.stateNode,u=p.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=qs("display",i))}catch(v){K(e,e.return,v)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(v){K(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Be(t,e),Ge(e),r&4&&os(e);break;case 21:break;default:Be(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_0(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(er(o,""),r.flags&=-33);var l=rs(e);Vi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=rs(e);Di(e,a,i);break;default:throw Error(S(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $p(e,t,n){_=e,z0(e)}function z0(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ur;if(!i){var a=o.alternate,u=a!==null&&a.memoizedState!==null||he;a=Ur;var c=he;if(Ur=i,(he=u)&&!c)for(_=o;_!==null;)i=_,u=i.child,i.tag===22&&i.memoizedState!==null?as(o):u!==null?(u.return=i,_=u):as(o);for(;l!==null;)_=l,z0(l),l=l.sibling;_=o,Ur=a,he=c}ls(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,_=l):ls(e)}}function ls(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Uu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&or(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}he||t.flags&512&&Fi(t)}catch(m){K(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function is(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function as(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qo(4,t)}catch(u){K(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){K(t,o,u)}}var l=t.return;try{Fi(t)}catch(u){K(t,l,u)}break;case 5:var i=t.return;try{Fi(t)}catch(u){K(t,i,u)}}}catch(u){K(t,t.return,u)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var Op=Math.ceil,$o=pt.ReactCurrentDispatcher,Ra=pt.ReactCurrentOwner,Fe=pt.ReactCurrentBatchConfig,A=0,ie=null,ee=null,ce=0,Pe=0,sn=Mt(0),ne=0,hr=null,Yt=0,Yo=0,La=0,Jn=null,xe=null,ja=0,En=1/0,ot=null,Oo=!1,Hi=null,Nt=null,Br=!1,St=null,To=0,qn=0,Ui=null,ro=-1,oo=0;function ge(){return A&6?q():ro!==-1?ro:ro=q()}function Pt(e){return e.mode&1?A&2&&ce!==0?ce&-ce:pp.transition!==null?(oo===0&&(oo=fc()),oo):(e=D,e!==0||(e=window.event,e=e===void 0?16:gc(e.type)),e):1}function Xe(e,t,n,r){if(50<qn)throw qn=0,Ui=null,Error(S(185));xr(e,n,r),(!(A&2)||e!==ie)&&(e===ie&&(!(A&2)&&(Yo|=n),ne===4&&gt(e,ce)),_e(e,r),n===1&&A===0&&!(t.mode&1)&&(En=q()+500,Uo&&Rt()))}function _e(e,t){var n=e.callbackNode;pd(e,t);var r=mo(e,e===ie?ce:0);if(r===0)n!==null&&vu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&vu(n),t===1)e.tag===0?dp(us.bind(null,e)):Ic(us.bind(null,e)),up(function(){!(A&6)&&Rt()}),n=null;else{switch(dc(r)){case 1:n=aa;break;case 4:n=sc;break;case 16:n=po;break;case 536870912:n=cc;break;default:n=po}n=A0(n,$0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $0(e,t){if(ro=-1,oo=0,A&6)throw Error(S(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=mo(e,e===ie?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Mo(e,r);else{t=r;var o=A;A|=2;var l=T0();(ie!==e||ce!==t)&&(ot=null,En=q()+500,Ht(e,t));do try{Rp();break}catch(a){O0(e,a)}while(1);Sa(),$o.current=l,A=o,ee!==null?t=0:(ie=null,ce=0,t=ne)}if(t!==0){if(t===2&&(o=hi(e),o!==0&&(r=o,t=Bi(e,o))),t===1)throw n=hr,Ht(e,0),gt(e,r),_e(e,q()),n;if(t===6)gt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Tp(o)&&(t=Mo(e,r),t===2&&(l=hi(e),l!==0&&(r=l,t=Bi(e,l))),t===1))throw n=hr,Ht(e,0),gt(e,r),_e(e,q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:It(e,xe,ot);break;case 3:if(gt(e,r),(r&130023424)===r&&(t=ja+500-q(),10<t)){if(mo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ei(It.bind(null,e,xe,ot),t);break}It(e,xe,ot);break;case 4:if(gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ze(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Op(r/1960))-r,10<r){e.timeoutHandle=Ei(It.bind(null,e,xe,ot),r);break}It(e,xe,ot);break;case 5:It(e,xe,ot);break;default:throw Error(S(329))}}}return _e(e,q()),e.callbackNode===n?$0.bind(null,e):null}function Bi(e,t){var n=Jn;return e.current.memoizedState.isDehydrated&&(Ht(e,t).flags|=256),e=Mo(e,t),e!==2&&(t=xe,xe=n,t!==null&&Wi(t)),e}function Wi(e){xe===null?xe=e:xe.push.apply(xe,e)}function Tp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ke(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gt(e,t){for(t&=~La,t&=~Yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function us(e){if(A&6)throw Error(S(327));hn();var t=mo(e,0);if(!(t&1))return _e(e,q()),null;var n=Mo(e,t);if(e.tag!==0&&n===2){var r=hi(e);r!==0&&(t=r,n=Bi(e,r))}if(n===1)throw n=hr,Ht(e,0),gt(e,t),_e(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,xe,ot),_e(e,q()),null}function Aa(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(En=q()+500,Uo&&Rt())}}function Zt(e){St!==null&&St.tag===0&&!(A&6)&&hn();var t=A;A|=1;var n=Fe.transition,r=D;try{if(Fe.transition=null,D=1,e)return e()}finally{D=r,Fe.transition=n,A=t,!(A&6)&&Rt()}}function Ia(){Pe=sn.current,W(sn)}function Ht(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ap(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(ya(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wo();break;case 3:xn(),W(Ee),W(ve),Na();break;case 5:_a(r);break;case 4:xn();break;case 13:W(Y);break;case 19:W(Y);break;case 10:xa(r.type._context);break;case 22:case 23:Ia()}n=n.return}if(ie=e,ee=e=zt(e.current,null),ce=Pe=t,ne=0,hr=null,La=Yo=Yt=0,xe=Jn=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Dt=null}return e}function O0(e,t){do{var n=ee;try{if(Sa(),eo.current=zo,Po){for(var r=Z.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Po=!1}if(Qt=0,le=te=Z=null,Kn=!1,dr=0,Ra.current=null,n===null||n.return===null){ne=1,hr=t,ee=null;break}e:{var l=e,i=n.return,a=n,u=t;if(t=ce,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Ku(i);if(w!==null){w.flags&=-257,Gu(w,i,a,l,t),w.mode&1&&Xu(l,c,t),t=w,u=c;var g=t.updateQueue;if(g===null){var v=new Set;v.add(u),t.updateQueue=v}else g.add(u);break e}else{if(!(t&1)){Xu(l,c,t),Fa();break e}u=Error(S(426))}}else if(Q&&a.mode&1){var $=Ku(i);if($!==null){!($.flags&65536)&&($.flags|=256),Gu($,i,a,l,t),ga(kn(u,a));break e}}l=u=kn(u,a),ne!==4&&(ne=2),Jn===null?Jn=[l]:Jn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=p0(l,u,t);Hu(l,f);break e;case 1:a=u;var s=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Nt===null||!Nt.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=m0(l,a,t);Hu(l,y);break e}}l=l.return}while(l!==null)}R0(n)}catch(E){t=E,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function T0(){var e=$o.current;return $o.current=zo,e===null?zo:e}function Fa(){(ne===0||ne===3||ne===2)&&(ne=4),ie===null||!(Yt&268435455)&&!(Yo&268435455)||gt(ie,ce)}function Mo(e,t){var n=A;A|=2;var r=T0();(ie!==e||ce!==t)&&(ot=null,Ht(e,t));do try{Mp();break}catch(o){O0(e,o)}while(1);if(Sa(),A=n,$o.current=r,ee!==null)throw Error(S(261));return ie=null,ce=0,ne}function Mp(){for(;ee!==null;)M0(ee)}function Rp(){for(;ee!==null&&!od();)M0(ee)}function M0(e){var t=j0(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?R0(e):ee=t,Ra.current=null}function R0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Np(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=_p(n,t,Pe),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function It(e,t,n){var r=D,o=Fe.transition;try{Fe.transition=null,D=1,Lp(e,t,n,r)}finally{Fe.transition=o,D=r}return null}function Lp(e,t,n,r){do hn();while(St!==null);if(A&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(md(e,l),e===ie&&(ee=ie=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Br||(Br=!0,A0(po,function(){return hn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Fe.transition,Fe.transition=null;var i=D;D=1;var a=A;A|=4,Ra.current=null,zp(e,n),P0(n,e),ep(xi),ho=!!Si,xi=Si=null,e.current=n,$p(n),ld(),A=a,D=i,Fe.transition=l}else e.current=n;if(Br&&(Br=!1,St=e,To=o),l=e.pendingLanes,l===0&&(Nt=null),ud(n.stateNode),_e(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Oo)throw Oo=!1,e=Hi,Hi=null,e;return To&1&&e.tag!==0&&hn(),l=e.pendingLanes,l&1?e===Ui?qn++:(qn=0,Ui=e):qn=0,Rt(),null}function hn(){if(St!==null){var e=dc(To),t=Fe.transition,n=D;try{if(Fe.transition=null,D=16>e?16:e,St===null)var r=!1;else{if(e=St,St=null,To=0,A&6)throw Error(S(331));var o=A;for(A|=4,_=e.current;_!==null;){var l=_,i=l.child;if(_.flags&16){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(_=c;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:Gn(8,h,l)}var p=h.child;if(p!==null)p.return=h,_=p;else for(;_!==null;){h=_;var m=h.sibling,w=h.return;if(C0(h),h===c){_=null;break}if(m!==null){m.return=w,_=m;break}_=w}}}var g=l.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var $=v.sibling;v.sibling=null,v=$}while(v!==null)}}_=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,_=i;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Gn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,_=f;break e}_=l.return}}var s=e.current;for(_=s;_!==null;){i=_;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,_=d;else e:for(i=s;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qo(9,a)}}catch(E){K(a,a.return,E)}if(a===i){_=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,_=y;break e}_=a.return}}if(A=o,Rt(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Io,e)}catch{}r=!0}return r}finally{D=n,Fe.transition=t}}return!1}function ss(e,t,n){t=kn(n,t),t=p0(e,t,1),e=_t(e,t,1),t=ge(),e!==null&&(xr(e,1,t),_e(e,t))}function K(e,t,n){if(e.tag===3)ss(e,e,n);else for(;t!==null;){if(t.tag===3){ss(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=kn(n,e),e=m0(t,e,1),t=_t(t,e,1),e=ge(),t!==null&&(xr(t,1,e),_e(t,e));break}}t=t.return}}function jp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ce&n)===n&&(ne===4||ne===3&&(ce&130023424)===ce&&500>q()-ja?Ht(e,0):La|=n),_e(e,t)}function L0(e,t){t===0&&(e.mode&1?(t=Rr,Rr<<=1,!(Rr&130023424)&&(Rr=4194304)):t=1);var n=ge();e=ft(e,t),e!==null&&(xr(e,t,n),_e(e,n))}function Ap(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),L0(e,n)}function Ip(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),L0(e,n)}var j0;j0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,Cp(e,t,n);ke=!!(e.flags&131072)}else ke=!1,Q&&t.flags&1048576&&Fc(t,ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;no(e,t),e=t.pendingProps;var o=gn(t,ve.current);mn(t,n),o=za(null,t,r,e,o,n);var l=$a();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(l=!0,So(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ea(t),o.updater=Bo,t.stateNode=o,o._reactInternals=t,Oi(t,r,e,n),t=Ri(null,t,r,!0,l,n)):(t.tag=0,Q&&l&&va(t),ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(no(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Dp(r),e=We(r,e),o){case 0:t=Mi(null,t,r,e,n);break e;case 1:t=bu(null,t,r,e,n);break e;case 11:t=Ju(null,t,r,e,n);break e;case 14:t=qu(null,t,r,We(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Mi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),bu(e,t,r,o,n);case 3:e:{if(g0(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Uc(e,t),_o(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=kn(Error(S(423)),t),t=es(e,t,r,n,o);break e}else if(r!==o){o=kn(Error(S(424)),t),t=es(e,t,r,n,o);break e}else for(ze=Ct(t.stateNode.containerInfo.firstChild),$e=t,Q=!0,Ye=null,n=Yc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wn(),r===o){t=dt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return Zc(t),e===null&&Pi(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,ki(r,o)?i=null:l!==null&&ki(r,l)&&(t.flags|=32),y0(e,t),ye(e,t,i,n),t.child;case 6:return e===null&&Pi(t),null;case 13:return w0(e,t,n);case 4:return Ca(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Ju(e,t,r,o,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,U(Eo,r._currentValue),r._currentValue=i,l!==null)if(Ke(l.value,i)){if(l.children===o.children&&!Ee.current){t=dt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=ut(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),zi(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(S(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),zi(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,mn(t,n),o=De(o),r=r(o),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,o=We(r,t.pendingProps),o=We(r.type,o),qu(e,t,r,o,n);case 15:return h0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),no(e,t),t.tag=1,Ce(r)?(e=!0,So(t)):e=!1,mn(t,n),Wc(t,r,o),Oi(t,r,o,n),Ri(null,t,r,!0,e,n);case 19:return S0(e,t,n);case 22:return v0(e,t,n)}throw Error(S(156,t.tag))};function A0(e,t){return uc(e,t)}function Fp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new Fp(e,t,n,r)}function Da(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dp(e){if(typeof e=="function")return Da(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oa)return 11;if(e===la)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Da(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case qt:return Ut(n.children,o,l,t);case ra:i=8,o|=8;break;case ei:return e=Ie(12,n,t,o|2),e.elementType=ei,e.lanes=l,e;case ti:return e=Ie(13,n,t,o),e.elementType=ti,e.lanes=l,e;case ni:return e=Ie(19,n,t,o),e.elementType=ni,e.lanes=l,e;case Qs:return Zo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bs:i=10;break e;case Ws:i=9;break e;case oa:i=11;break e;case la:i=14;break e;case ht:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ie(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Ut(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function Zo(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=Qs,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function Kl(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Va(e,t,n,r,o,l,i,a,u){return e=new Vp(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ie(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ea(l),e}function Hp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function I0(e){if(!e)return Ot;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ce(n))return Ac(e,n,t)}return t}function F0(e,t,n,r,o,l,i,a,u){return e=Va(n,r,!0,e,o,l,i,a,u),e.context=I0(null),n=e.current,r=ge(),o=Pt(n),l=ut(r,o),l.callback=t??null,_t(n,l,o),e.current.lanes=o,xr(e,o,r),_e(e,r),e}function Xo(e,t,n,r){var o=t.current,l=ge(),i=Pt(o);return n=I0(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(o,t,i),e!==null&&(Xe(e,o,i,l),br(e,o,i)),i}function Ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ha(e,t){cs(e,t),(e=e.alternate)&&cs(e,t)}function Up(){return null}var D0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ua(e){this._internalRoot=e}Ko.prototype.render=Ua.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Xo(e,t,null,null)};Ko.prototype.unmount=Ua.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){Xo(null,e,null,null)}),t[ct]=null}};function Ko(e){this._internalRoot=e}Ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&yc(e)}};function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fs(){}function Bp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=Ro(i);l.call(c)}}var i=F0(t,r,e,0,null,!1,!1,"",fs);return e._reactRootContainer=i,e[ct]=i.current,ar(e.nodeType===8?e.parentNode:e),Zt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Ro(u);a.call(c)}}var u=Va(e,0,!1,null,null,!1,!1,"",fs);return e._reactRootContainer=u,e[ct]=u.current,ar(e.nodeType===8?e.parentNode:e),Zt(function(){Xo(t,u,n,r)}),u}function Jo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var u=Ro(i);a.call(u)}}Xo(t,i,e,o)}else i=Bp(n,t,e,o,r);return Ro(i)}pc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(ua(t,n|1),_e(t,q()),!(A&6)&&(En=q()+500,Rt()))}break;case 13:Zt(function(){var r=ft(e,1);if(r!==null){var o=ge();Xe(r,e,1,o)}}),Ha(e,1)}};sa=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ge();Xe(t,e,134217728,n)}Ha(e,134217728)}};mc=function(e){if(e.tag===13){var t=Pt(e),n=ft(e,t);if(n!==null){var r=ge();Xe(n,e,t,r)}Ha(e,t)}};hc=function(){return D};vc=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};di=function(e,t,n){switch(t){case"input":if(li(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ho(r);if(!o)throw Error(S(90));Zs(r),li(r,o)}}}break;case"textarea":Ks(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}};nc=Aa;rc=Zt;var Wp={usingClientEntryPoint:!1,Events:[Er,nn,Ho,ec,tc,Aa]},Fn={findFiberByHostInstance:Ft,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qp={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ic(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||Up,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{Io=Wr.inject(Qp),tt=Wr}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wp;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ba(t))throw Error(S(200));return Hp(e,t,null,n)};Me.createRoot=function(e,t){if(!Ba(e))throw Error(S(299));var n=!1,r="",o=D0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Va(e,1,!1,null,null,n,!1,r,o),e[ct]=t.current,ar(e.nodeType===8?e.parentNode:e),new Ua(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ic(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return Zt(e)};Me.hydrate=function(e,t,n){if(!Go(t))throw Error(S(200));return Jo(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!Ba(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=D0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=F0(t,null,e,1,n??null,o,!1,l,i),e[ct]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ko(t)};Me.render=function(e,t,n){if(!Go(t))throw Error(S(200));return Jo(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!Go(e))throw Error(S(40));return e._reactRootContainer?(Zt(function(){Jo(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Me.unstable_batchedUpdates=Aa;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Go(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Jo(e,t,n,!1,r)};Me.version="18.2.0-next-9e3b772b8-20220608";function V0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V0)}catch(e){console.error(e)}}V0(),Fs.exports=Me;var Yp=Fs.exports,ds=Yp;ql.createRoot=ds.createRoot,ql.hydrateRoot=ds.hydrateRoot;function Zp(){return P.jsxs(P.Fragment,{children:[P.jsxs("p",{className:"about",children:["Iniciei minha paixão por codificação em 2012, quando entrei na faculdade"," ",P.jsx("b",{children:"Eniac"})," para cursar Sistemas de Informação."]}),P.jsx("p",{className:"about",children:"Todo trabalho que envolvia programação, era direcionado à mim. Meus primeiros passos com HTML começaram aqui, e desde então nunca parei."}),P.jsx("p",{className:"about",children:"Em 2018 começei a investir de fato na minha carreira como programador."}),P.jsxs("p",{className:"about",children:["Comecei meus estudos com ",P.jsx("b",{children:"Cshapr"})," e ",P.jsx("b",{children:"Unity"})," para criar"," ",P.jsx("b",{children:P.jsx("a",{children:"Jogos"})}),", e também criei muitos sites para pessoas proximas utilizando o"," ",P.jsx("b",{children:"WordPress"})]}),P.jsx("p",{className:"about",children:"Em 2022 veio o meu primeiro SIM! Atuei como Desenvolvedor Frontend na Pacto Soluções. Pude atuar dentro de uma squad,"})]})}function Xp(){return P.jsx("h1",{children:"Experiências"})}function Kp(){return P.jsx(P.Fragment,{children:P.jsxs("div",{className:"box",children:[P.jsxs("div",{className:"box-text",children:[P.jsx("h3",{children:"Lista de tarefas"}),P.jsx("p",{children:"Aplicativo que armazena as tarefas do seu dia a dia."}),P.jsxs("div",{className:"box-techs",children:[P.jsx("div",{className:"boxbox",children:"React Native"}),P.jsx("div",{className:"boxbox",children:"React"}),P.jsx("div",{className:"boxbox",children:"React"}),P.jsx("div",{className:"boxbox",children:"React"})]})]}),P.jsx("div",{className:"box-img"})]})})}function Gp(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Jp(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var qp=function(){function e(n){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Jp(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=Gp(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),me="-ms-",Lo="-moz-",I="-webkit-",H0="comm",Wa="rule",Qa="decl",bp="@import",U0="@keyframes",e1="@layer",t1=Math.abs,qo=String.fromCharCode,n1=Object.assign;function r1(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function B0(e){return e.trim()}function o1(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function Qi(e,t){return e.indexOf(t)}function se(e,t){return e.charCodeAt(t)|0}function vr(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function Ya(e){return e.length}function Qr(e,t){return t.push(e),e}function l1(e,t){return e.map(t).join("")}var bo=1,Cn=1,W0=0,Ne=0,b=0,zn="";function el(e,t,n,r,o,l,i){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:bo,column:Cn,length:i,return:""}}function Dn(e,t){return n1(el("",null,null,"",null,null,0),e,{length:-e.length},t)}function i1(){return b}function a1(){return b=Ne>0?se(zn,--Ne):0,Cn--,b===10&&(Cn=1,bo--),b}function Oe(){return b=Ne<W0?se(zn,Ne++):0,Cn++,b===10&&(Cn=1,bo++),b}function rt(){return se(zn,Ne)}function io(){return Ne}function _r(e,t){return vr(zn,e,t)}function yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Q0(e){return bo=Cn=1,W0=qe(zn=e),Ne=0,[]}function Y0(e){return zn="",e}function ao(e){return B0(_r(Ne-1,Yi(e===91?e+2:e===40?e+1:e)))}function u1(e){for(;(b=rt())&&b<33;)Oe();return yr(e)>2||yr(b)>3?"":" "}function s1(e,t){for(;--t&&Oe()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return _r(e,io()+(t<6&&rt()==32&&Oe()==32))}function Yi(e){for(;Oe();)switch(b){case e:return Ne;case 34:case 39:e!==34&&e!==39&&Yi(b);break;case 40:e===41&&Yi(e);break;case 92:Oe();break}return Ne}function c1(e,t){for(;Oe()&&e+b!==47+10;)if(e+b===42+42&&rt()===47)break;return"/*"+_r(t,Ne-1)+"*"+qo(e===47?e:Oe())}function f1(e){for(;!yr(rt());)Oe();return _r(e,Ne)}function d1(e){return Y0(uo("",null,null,null,[""],e=Q0(e),0,[0],e))}function uo(e,t,n,r,o,l,i,a,u){for(var c=0,h=0,p=i,m=0,w=0,g=0,v=1,$=1,f=1,s=0,d="",y=o,E=l,C=r,k=d;$;)switch(g=s,s=Oe()){case 40:if(g!=108&&se(k,p-1)==58){Qi(k+=F(ao(s),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:k+=ao(s);break;case 9:case 10:case 13:case 32:k+=u1(g);break;case 92:k+=s1(io()-1,7);continue;case 47:switch(rt()){case 42:case 47:Qr(p1(c1(Oe(),io()),t,n),u);break;default:k+="/"}break;case 123*v:a[c++]=qe(k)*f;case 125*v:case 59:case 0:switch(s){case 0:case 125:$=0;case 59+h:f==-1&&(k=F(k,/\f/g,"")),w>0&&qe(k)-p&&Qr(w>32?ms(k+";",r,n,p-1):ms(F(k," ","")+";",r,n,p-2),u);break;case 59:k+=";";default:if(Qr(C=ps(k,t,n,c,h,o,a,d,y=[],E=[],p),l),s===123)if(h===0)uo(k,t,C,C,y,l,p,a,E);else switch(m===99&&se(k,3)===110?100:m){case 100:case 108:case 109:case 115:uo(e,C,C,r&&Qr(ps(e,C,C,0,0,o,a,d,o,y=[],p),E),o,E,p,a,r?y:E);break;default:uo(k,C,C,C,[""],E,0,a,E)}}c=h=w=0,v=f=1,d=k="",p=i;break;case 58:p=1+qe(k),w=g;default:if(v<1){if(s==123)--v;else if(s==125&&v++==0&&a1()==125)continue}switch(k+=qo(s),s*v){case 38:f=h>0?1:(k+="\f",-1);break;case 44:a[c++]=(qe(k)-1)*f,f=1;break;case 64:rt()===45&&(k+=ao(Oe())),m=rt(),h=p=qe(d=k+=f1(io())),s++;break;case 45:g===45&&qe(k)==2&&(v=0)}}return l}function ps(e,t,n,r,o,l,i,a,u,c,h){for(var p=o-1,m=o===0?l:[""],w=Ya(m),g=0,v=0,$=0;g<r;++g)for(var f=0,s=vr(e,p+1,p=t1(v=i[g])),d=e;f<w;++f)(d=B0(v>0?m[f]+" "+s:F(s,/&\f/g,m[f])))&&(u[$++]=d);return el(e,t,n,o===0?Wa:a,u,c,h)}function p1(e,t,n){return el(e,t,n,H0,qo(i1()),vr(e,2,-2),0)}function ms(e,t,n,r){return el(e,t,n,Qa,vr(e,0,r),vr(e,r+1,-1),r)}function vn(e,t){for(var n="",r=Ya(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function m1(e,t,n,r){switch(e.type){case e1:if(e.children.length)break;case bp:case Qa:return e.return=e.return||e.value;case H0:return"";case U0:return e.return=e.value+"{"+vn(e.children,r)+"}";case Wa:e.value=e.props.join(",")}return qe(n=vn(e.children,r))?e.return=e.value+"{"+n+"}":""}function h1(e){var t=Ya(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function v1(e){return function(t){t.root||(t=t.return)&&e(t)}}function y1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var g1=function(t,n,r){for(var o=0,l=0;o=l,l=rt(),o===38&&l===12&&(n[r]=1),!yr(l);)Oe();return _r(t,Ne)},w1=function(t,n){var r=-1,o=44;do switch(yr(o)){case 0:o===38&&rt()===12&&(n[r]=1),t[r]+=g1(Ne-1,n,r);break;case 2:t[r]+=ao(o);break;case 4:if(o===44){t[++r]=rt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=qo(o)}while(o=Oe());return t},S1=function(t,n){return Y0(w1(Q0(t),n))},hs=new WeakMap,x1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!hs.get(r))&&!o){hs.set(t,!0);for(var l=[],i=S1(n,l),a=r.props,u=0,c=0;u<i.length;u++)for(var h=0;h<a.length;h++,c++)t.props[c]=l[u]?i[u].replace(/&\f/g,a[h]):a[h]+" "+i[u]}}},k1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Z0(e,t){switch(r1(e,t)){case 5103:return I+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return I+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return I+e+Lo+e+me+e+e;case 6828:case 4268:return I+e+me+e+e;case 6165:return I+e+me+"flex-"+e+e;case 5187:return I+e+F(e,/(\w+).+(:[^]+)/,I+"box-$1$2"+me+"flex-$1$2")+e;case 5443:return I+e+me+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return I+e+me+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return I+e+me+F(e,"shrink","negative")+e;case 5292:return I+e+me+F(e,"basis","preferred-size")+e;case 6060:return I+"box-"+F(e,"-grow","")+I+e+me+F(e,"grow","positive")+e;case 4554:return I+F(e,/([^-])(transform)/g,"$1"+I+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,I+"$1"),/(image-set)/,I+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,I+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,I+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+I+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,I+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+I+"$2-$3$1"+Lo+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Qi(e,"stretch")?Z0(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(se(e,t+1)!==115)break;case 6444:switch(se(e,qe(e)-3-(~Qi(e,"!important")&&10))){case 107:return F(e,":",":"+I)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+I+(se(e,14)===45?"inline-":"")+"box$3$1"+I+"$2$3$1"+me+"$2box$3")+e}break;case 5936:switch(se(e,t+11)){case 114:return I+e+me+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return I+e+me+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return I+e+me+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return I+e+me+e+e}return e}var E1=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Qa:t.return=Z0(t.value,t.length);break;case U0:return vn([Dn(t,{value:F(t.value,"@","@"+I)})],o);case Wa:if(t.length)return l1(t.props,function(l){switch(o1(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return vn([Dn(t,{props:[F(l,/:(read-\w+)/,":"+Lo+"$1")]})],o);case"::placeholder":return vn([Dn(t,{props:[F(l,/:(plac\w+)/,":"+I+"input-$1")]}),Dn(t,{props:[F(l,/:(plac\w+)/,":"+Lo+"$1")]}),Dn(t,{props:[F(l,/:(plac\w+)/,me+"input-$1")]})],o)}return""})}},C1=[E1],_1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var $=v.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||C1,l={},i,a=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var $=v.getAttribute("data-emotion").split(" "),f=1;f<$.length;f++)l[$[f]]=!0;a.push(v)});var u,c=[x1,k1];{var h,p=[m1,v1(function(v){h.insert(v)})],m=h1(c.concat(o,p)),w=function($){return vn(d1($),m)};u=function($,f,s,d){h=s,w($?$+"{"+f.styles+"}":f.styles),d&&(g.inserted[f.name]=!0)}}var g={key:n,sheet:new qp({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:u};return g.sheet.hydrate(a),g},X0={exports:{}},V={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=typeof Symbol=="function"&&Symbol.for,Za=ae?Symbol.for("react.element"):60103,Xa=ae?Symbol.for("react.portal"):60106,tl=ae?Symbol.for("react.fragment"):60107,nl=ae?Symbol.for("react.strict_mode"):60108,rl=ae?Symbol.for("react.profiler"):60114,ol=ae?Symbol.for("react.provider"):60109,ll=ae?Symbol.for("react.context"):60110,Ka=ae?Symbol.for("react.async_mode"):60111,il=ae?Symbol.for("react.concurrent_mode"):60111,al=ae?Symbol.for("react.forward_ref"):60112,ul=ae?Symbol.for("react.suspense"):60113,N1=ae?Symbol.for("react.suspense_list"):60120,sl=ae?Symbol.for("react.memo"):60115,cl=ae?Symbol.for("react.lazy"):60116,P1=ae?Symbol.for("react.block"):60121,z1=ae?Symbol.for("react.fundamental"):60117,$1=ae?Symbol.for("react.responder"):60118,O1=ae?Symbol.for("react.scope"):60119;function Le(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Za:switch(e=e.type,e){case Ka:case il:case tl:case rl:case nl:case ul:return e;default:switch(e=e&&e.$$typeof,e){case ll:case al:case cl:case sl:case ol:return e;default:return t}}case Xa:return t}}}function K0(e){return Le(e)===il}V.AsyncMode=Ka;V.ConcurrentMode=il;V.ContextConsumer=ll;V.ContextProvider=ol;V.Element=Za;V.ForwardRef=al;V.Fragment=tl;V.Lazy=cl;V.Memo=sl;V.Portal=Xa;V.Profiler=rl;V.StrictMode=nl;V.Suspense=ul;V.isAsyncMode=function(e){return K0(e)||Le(e)===Ka};V.isConcurrentMode=K0;V.isContextConsumer=function(e){return Le(e)===ll};V.isContextProvider=function(e){return Le(e)===ol};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Za};V.isForwardRef=function(e){return Le(e)===al};V.isFragment=function(e){return Le(e)===tl};V.isLazy=function(e){return Le(e)===cl};V.isMemo=function(e){return Le(e)===sl};V.isPortal=function(e){return Le(e)===Xa};V.isProfiler=function(e){return Le(e)===rl};V.isStrictMode=function(e){return Le(e)===nl};V.isSuspense=function(e){return Le(e)===ul};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===tl||e===il||e===rl||e===nl||e===ul||e===N1||typeof e=="object"&&e!==null&&(e.$$typeof===cl||e.$$typeof===sl||e.$$typeof===ol||e.$$typeof===ll||e.$$typeof===al||e.$$typeof===z1||e.$$typeof===$1||e.$$typeof===O1||e.$$typeof===P1)};V.typeOf=Le;X0.exports=V;var T1=X0.exports,G0=T1,M1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},R1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J0={};J0[G0.ForwardRef]=M1;J0[G0.Memo]=R1;var L1=!0;function q0(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Ga=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||L1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},b0=function(t,n,r){Ga(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function j1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var A1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},I1=/[A-Z]|^ms/g,F1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ef=function(t){return t.charCodeAt(1)===45},vs=function(t){return t!=null&&typeof t!="boolean"},Gl=y1(function(e){return ef(e)?e:e.replace(I1,"-$&").toLowerCase()}),ys=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(F1,function(r,o,l){return be={name:o,styles:l,next:be},o})}return A1[t]!==1&&!ef(t)&&typeof n=="number"&&n!==0?n+"px":n};function gr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return be={name:n.name,styles:n.styles,next:be},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)be={name:r.name,styles:r.styles,next:be},r=r.next;var o=n.styles+";";return o}return D1(e,t,n)}case"function":{if(e!==void 0){var l=be,i=n(e);return be=l,gr(e,t,i)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function D1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=gr(e,t,n[o])+";";else for(var l in n){var i=n[l];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=l+"{"+t[i]+"}":vs(i)&&(r+=Gl(l)+":"+ys(l,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var a=0;a<i.length;a++)vs(i[a])&&(r+=Gl(l)+":"+ys(l,i[a])+";");else{var u=gr(e,t,i);switch(l){case"animation":case"animationName":{r+=Gl(l)+":"+u+";";break}default:r+=l+"{"+u+"}"}}}return r}var gs=/label:\s*([^\s;\n{]+)\s*(;|$)/g,be,Ja=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,l="";be=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,l+=gr(r,n,i)):l+=i[0];for(var a=1;a<t.length;a++)l+=gr(r,n,t[a]),o&&(l+=i[a]);gs.lastIndex=0;for(var u="",c;(c=gs.exec(l))!==null;)u+="-"+c[1];var h=j1(l)+u;return{name:h,styles:l,next:be}},V1=function(t){return t()},H1=iu["useInsertionEffect"]?iu["useInsertionEffect"]:!1,tf=H1||V1,qa={}.hasOwnProperty,nf=R.createContext(typeof HTMLElement<"u"?_1({key:"css"}):null);nf.Provider;var rf=function(t){return R.forwardRef(function(n,r){var o=R.useContext(nf);return t(n,o,r)})},of=R.createContext({}),Zi="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",U1=function(t,n){var r={};for(var o in n)qa.call(n,o)&&(r[o]=n[o]);return r[Zi]=t,r},B1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Ga(n,r,o),tf(function(){return b0(n,r,o)}),null},W1=rf(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Zi],l=[r],i="";typeof e.className=="string"?i=q0(t.registered,l,e.className):e.className!=null&&(i=e.className+" ");var a=Ja(l,void 0,R.useContext(of));i+=t.key+"-"+a.name;var u={};for(var c in e)qa.call(e,c)&&c!=="css"&&c!==Zi&&(u[c]=e[c]);return u.ref=n,u.className=i,R.createElement(R.Fragment,null,R.createElement(B1,{cache:t,serialized:a,isStringTag:typeof o=="string"}),R.createElement(o,u))}),Q1=W1,Y1=P.Fragment;function oe(e,t,n){return qa.call(t,"css")?P.jsx(Q1,U1(e,t),n):P.jsx(e,t,n)}function lf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ja(t)}var x=function(){var t=lf.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Z1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var l=t[r];if(l!=null){var i=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))i=e(l);else{i="";for(var a in l)l[a]&&a&&(i&&(i+=" "),i+=a)}break}default:i=l}i&&(o&&(o+=" "),o+=i)}}return o};function X1(e,t,n){var r=[],o=q0(e,r,n);return r.length<2?n:o+t(r)}var K1=function(t){var n=t.cache,r=t.serializedArr;return tf(function(){for(var o=0;o<r.length;o++)b0(n,r[o],!1)}),null},Jl=rf(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,h=new Array(c),p=0;p<c;p++)h[p]=arguments[p];var m=Ja(h,t.registered);return r.push(m),Ga(t,m,!1),t.key+"-"+m.name},l=function(){for(var c=arguments.length,h=new Array(c),p=0;p<c;p++)h[p]=arguments[p];return X1(t.registered,o,Z1(h))},i={css:o,cx:l,theme:R.useContext(of)},a=e.children(i);return n=!0,R.createElement(R.Fragment,null,R.createElement(K1,{cache:t,serializedArr:r}),a)}),G1=Object.defineProperty,J1=(e,t,n)=>t in e?G1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Yr=(e,t,n)=>(J1(e,typeof t!="symbol"?t+"":t,n),n),Xi=new Map,Zr=new WeakMap,ws=0,q1=void 0;function b1(e){return e?(Zr.has(e)||(ws+=1,Zr.set(e,ws.toString())),Zr.get(e)):"0"}function em(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?b1(e.root):e[t]}`).toString()}function tm(e){let t=em(e),n=Xi.get(t);if(!n){const r=new Map;let o;const l=new IntersectionObserver(i=>{i.forEach(a=>{var u;const c=a.isIntersecting&&o.some(h=>a.intersectionRatio>=h);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(u=r.get(a.target))==null||u.forEach(h=>{h(c,a)})})},e);o=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},Xi.set(t,n)}return n}function af(e,t,n={},r=q1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const u=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:o,observer:l,elements:i}=tm(n);let a=i.get(e)||[];return i.has(e)||i.set(e,a),a.push(t),l.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(i.delete(e),l.unobserve(e)),i.size===0&&(l.disconnect(),Xi.delete(o))}}function nm(e){return typeof e.children!="function"}var Ss=class extends R.Component{constructor(e){super(e),Yr(this,"node",null),Yr(this,"_unobserveCb",null),Yr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Yr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),nm(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:l}=this.props;this._unobserveCb=af(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:g}=this.state;return e({inView:w,entry:g,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:l,onChange:i,skip:a,trackVisibility:u,delay:c,initialInView:h,fallbackInView:p,...m}=this.props;return R.createElement(t||"div",{ref:this.handleNode,...m},e)}};function uf({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:l,skip:i,initialInView:a,fallbackInView:u,onChange:c}={}){var h;const[p,m]=R.useState(null),w=R.useRef(),[g,v]=R.useState({inView:!!a,entry:void 0});w.current=c,R.useEffect(()=>{if(i||!p)return;let d;return d=af(p,(y,E)=>{v({inView:y,entry:E}),w.current&&w.current(y,E),E.isIntersecting&&l&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},u),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,p,o,r,l,i,n,u,t]);const $=(h=g.entry)==null?void 0:h.target,f=R.useRef();!p&&$&&!l&&!i&&f.current!==$&&(f.current=$,v({inView:!!a,entry:void 0}));const s=[m,g.inView,g.entry];return s.ref=s[0],s.inView=s[1],s.entry=s[2],s}var sf={exports:{}},H={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),eu=Symbol.for("react.portal"),fl=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),ml=Symbol.for("react.provider"),hl=Symbol.for("react.context"),rm=Symbol.for("react.server_context"),vl=Symbol.for("react.forward_ref"),yl=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),wl=Symbol.for("react.memo"),Sl=Symbol.for("react.lazy"),om=Symbol.for("react.offscreen"),cf;cf=Symbol.for("react.module.reference");function He(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ba:switch(e=e.type,e){case fl:case pl:case dl:case yl:case gl:return e;default:switch(e=e&&e.$$typeof,e){case rm:case hl:case vl:case Sl:case wl:case ml:return e;default:return t}}case eu:return t}}}H.ContextConsumer=hl;H.ContextProvider=ml;H.Element=ba;H.ForwardRef=vl;H.Fragment=fl;H.Lazy=Sl;H.Memo=wl;H.Portal=eu;H.Profiler=pl;H.StrictMode=dl;H.Suspense=yl;H.SuspenseList=gl;H.isAsyncMode=function(){return!1};H.isConcurrentMode=function(){return!1};H.isContextConsumer=function(e){return He(e)===hl};H.isContextProvider=function(e){return He(e)===ml};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ba};H.isForwardRef=function(e){return He(e)===vl};H.isFragment=function(e){return He(e)===fl};H.isLazy=function(e){return He(e)===Sl};H.isMemo=function(e){return He(e)===wl};H.isPortal=function(e){return He(e)===eu};H.isProfiler=function(e){return He(e)===pl};H.isStrictMode=function(e){return He(e)===dl};H.isSuspense=function(e){return He(e)===yl};H.isSuspenseList=function(e){return He(e)===gl};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fl||e===pl||e===dl||e===yl||e===gl||e===om||typeof e=="object"&&e!==null&&(e.$$typeof===Sl||e.$$typeof===wl||e.$$typeof===ml||e.$$typeof===hl||e.$$typeof===vl||e.$$typeof===cf||e.getModuleId!==void 0)};H.typeOf=He;sf.exports=H;var lm=sf.exports;x`
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
`;x`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;x`
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
`;x`
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
`;x`
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
`;x`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;x`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const ff=x`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function im({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=ff,iterationCount:o=1}){return lf`
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
  `}function am(e){return e==null}function um(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function df(e,t){return n=>n?e():t()}function wr(e){return df(e,()=>null)}function Ki(e){return wr(()=>({opacity:0}))(e)}const pf=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:l=0,keyframes:i=ff,triggerOnce:a=!1,className:u,style:c,childClassName:h,childStyle:p,children:m,onVisibilityChange:w}=e,g=R.useMemo(()=>im({keyframes:i,duration:o}),[o,i]);return am(m)?null:um(m)?oe(cm,{...e,animationStyles:g,children:String(m)}):lm.isFragment(m)?oe(mf,{...e,animationStyles:g}):oe(Y1,{children:R.Children.map(m,(v,$)=>{if(!R.isValidElement(v))return null;const f=r+(t?$*o*n:0);switch(v.type){case"ol":case"ul":return oe(Jl,{children:({cx:s})=>oe(v.type,{...v.props,className:s(u,v.props.className),style:Object.assign({},c,v.props.style),children:oe(pf,{...e,children:v.props.children})})});case"li":return oe(Ss,{threshold:l,triggerOnce:a,onChange:w,children:({inView:s,ref:d})=>oe(Jl,{children:({cx:y})=>oe(v.type,{...v.props,ref:d,className:y(h,v.props.className),css:wr(()=>g)(s),style:Object.assign({},p,v.props.style,Ki(!s),{animationDelay:f+"ms"})})})});default:return oe(Ss,{threshold:l,triggerOnce:a,onChange:w,children:({inView:s,ref:d})=>oe("div",{ref:d,className:u,css:wr(()=>g)(s),style:Object.assign({},c,Ki(!s),{animationDelay:f+"ms"}),children:oe(Jl,{children:({cx:y})=>oe(v.type,{...v.props,className:y(h,v.props.className),style:Object.assign({},p,v.props.style)})})})})}})})},sm={display:"inline-block",whiteSpace:"pre"},cm=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:l=1e3,fraction:i=0,triggerOnce:a=!1,className:u,style:c,children:h,onVisibilityChange:p}=e,{ref:m,inView:w}=uf({triggerOnce:a,threshold:i,onChange:p});return df(()=>oe("div",{ref:m,className:u,style:Object.assign({},c,sm),children:h.split("").map((g,v)=>oe("span",{css:wr(()=>t)(w),style:{animationDelay:o+v*l*r+"ms"},children:g},v))}),()=>oe(mf,{...e,children:h}))(n)},mf=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:l,children:i,onVisibilityChange:a}=e,{ref:u,inView:c}=uf({triggerOnce:r,threshold:n,onChange:a});return oe("div",{ref:u,className:o,css:wr(()=>t)(c),style:Object.assign({},l,Ki(!c)),children:i})};x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;x`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;x`
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
`;x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;x`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;x`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;x`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;x`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;x`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const fm=x`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,dm=x`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,pm=x`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,mm=x`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,hm=x`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,vm=x`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,ym=x`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,gm=x`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function wm(e,t){switch(t){case"down":return e?hm:fm;case"right":return e?ym:pm;case"up":return e?gm:mm;case"left":default:return e?vm:dm}}const Sm=e=>{const{direction:t,reverse:n=!1,...r}=e,o=R.useMemo(()=>wm(n,t),[t,n]);return oe(pf,{keyframes:o,...r})};x`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
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
`;x`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;x`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;x`
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
`;const xm=R.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var km=Object.defineProperty,jo=Object.getOwnPropertySymbols,hf=Object.prototype.hasOwnProperty,vf=Object.prototype.propertyIsEnumerable,xs=(e,t,n)=>t in e?km(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ks=(e,t)=>{for(var n in t||(t={}))hf.call(t,n)&&xs(e,n,t[n]);if(jo)for(var n of jo(t))vf.call(t,n)&&xs(e,n,t[n]);return e},Es=(e,t)=>{var n={};for(var r in e)hf.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&jo)for(var r of jo(e))t.indexOf(r)<0&&vf.call(e,r)&&(n[r]=e[r]);return n};const tu=R.forwardRef((e,t)=>{const n=e,{alt:r,color:o,size:l,weight:i,mirrored:a,children:u,weights:c}=n,h=Es(n,["alt","color","size","weight","mirrored","children","weights"]),p=R.useContext(xm),{color:m="currentColor",size:w,weight:g="regular",mirrored:v=!1}=p,$=Es(p,["color","size","weight","mirrored"]);return O.createElement("svg",ks(ks({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l??w,height:l??w,fill:o??m,viewBox:"0 0 256 256",transform:a||v?"scale(-1, 1)":void 0},$),h),!!r&&O.createElement("title",null,r),u,c.get(i??g))});tu.displayName="IconBase";var Em=Object.defineProperty,Cm=Object.defineProperties,_m=Object.getOwnPropertyDescriptors,Cs=Object.getOwnPropertySymbols,Nm=Object.prototype.hasOwnProperty,Pm=Object.prototype.propertyIsEnumerable,_s=(e,t,n)=>t in e?Em(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zm=(e,t)=>{for(var n in t||(t={}))Nm.call(t,n)&&_s(e,n,t[n]);if(Cs)for(var n of Cs(t))Pm.call(t,n)&&_s(e,n,t[n]);return e},$m=(e,t)=>Cm(e,_m(t));const Om=new Map([["bold",O.createElement(O.Fragment,null,O.createElement("path",{d:"M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"}))],["duotone",O.createElement(O.Fragment,null,O.createElement("path",{d:"M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z",opacity:"0.2"}),O.createElement("path",{d:"M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"}))],["fill",O.createElement(O.Fragment,null,O.createElement("path",{d:"M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"}))],["light",O.createElement(O.Fragment,null,O.createElement("path",{d:"M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z"}))],["regular",O.createElement(O.Fragment,null,O.createElement("path",{d:"M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"}))],["thin",O.createElement(O.Fragment,null,O.createElement("path",{d:"M203.94,76.16A55.73,55.73,0,0,0,199.46,30,4,4,0,0,0,196,28a55.78,55.78,0,0,0-46,24H122A55.78,55.78,0,0,0,76,28a4,4,0,0,0-3.46,2,55.73,55.73,0,0,0-4.48,46.16A53.78,53.78,0,0,0,60,104v8a52.06,52.06,0,0,0,52,52h1.41A36,36,0,0,0,100,192v12H72a28,28,0,0,1-28-28A36,36,0,0,0,8,140a4,4,0,0,0,0,8,28,28,0,0,1,28,28,36,36,0,0,0,36,36h28v20a4,4,0,0,0,8,0V192a28,28,0,0,1,56,0v40a4,4,0,0,0,8,0V192a36,36,0,0,0-13.41-28H160a52.06,52.06,0,0,0,52-52v-8A53.78,53.78,0,0,0,203.94,76.16ZM204,112a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44v-8a45.76,45.76,0,0,1,7.71-24.89,4,4,0,0,0,.53-3.84,47.82,47.82,0,0,1,2.1-39.21,47.8,47.8,0,0,1,38.12,22.1A4,4,0,0,0,119.83,60h32.34a4,4,0,0,0,3.37-1.84,47.8,47.8,0,0,1,38.12-22.1,47.82,47.82,0,0,1,2.1,39.21,4,4,0,0,0,.53,3.83A45.85,45.85,0,0,1,204,104Z"}))]]),yf=R.forwardRef((e,t)=>O.createElement(tu,$m(zm({ref:t},e),{weights:Om})));yf.displayName="GithubLogo";var Tm=Object.defineProperty,Mm=Object.defineProperties,Rm=Object.getOwnPropertyDescriptors,Ns=Object.getOwnPropertySymbols,Lm=Object.prototype.hasOwnProperty,jm=Object.prototype.propertyIsEnumerable,Ps=(e,t,n)=>t in e?Tm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Am=(e,t)=>{for(var n in t||(t={}))Lm.call(t,n)&&Ps(e,n,t[n]);if(Ns)for(var n of Ns(t))jm.call(t,n)&&Ps(e,n,t[n]);return e},Im=(e,t)=>Mm(e,Rm(t));const Fm=new Map([["bold",O.createElement(O.Fragment,null,O.createElement("path",{d:"M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V124a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,152v24a12,12,0,0,1-24,0V152a16,16,0,0,0-32,0v24a12,12,0,0,1-24,0ZM96,124v52a12,12,0,0,1-24,0V124a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"}))],["duotone",O.createElement(O.Fragment,null,O.createElement("path",{d:"M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",opacity:"0.2"}),O.createElement("path",{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"}))],["fill",O.createElement(O.Fragment,null,O.createElement("path",{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"}))],["light",O.createElement(O.Fragment,null,O.createElement("path",{d:"M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z"}))],["regular",O.createElement(O.Fragment,null,O.createElement("path",{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"}))],["thin",O.createElement(O.Fragment,null,O.createElement("path",{d:"M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z"}))]]),gf=R.forwardRef((e,t)=>O.createElement(tu,Im(Am({ref:t},e),{weights:Fm})));gf.displayName="LinkedinLogo";function Dm(){const[e,t]=R.useState(!1),[n,r]=R.useState(!1),[o,l]=R.useState(!1);function i(){t(!0),r(!1),l(!1)}function a(){t(!1),r(!0),l(!1)}function u(){t(!1),r(!1),l(!0)}return P.jsxs("div",{className:"main",children:[P.jsxs("div",{className:"header",children:[P.jsxs("div",{className:"header_intro",children:[P.jsx("h1",{children:"Rafael Ribeiro"}),P.jsx("h2",{children:"Desenvolvedor Frontend e Engenheiro de Software"}),P.jsx("p",{children:"Crio sites responsivos, soluções web e alguns jogos 🎮"})]}),P.jsxs("div",{className:"header_menu",children:[P.jsx("button",{onClick:i,children:"Sobre"}),P.jsx("button",{onClick:a,children:"Experiência"}),P.jsx("button",{onClick:u,children:"Projetos"})]}),P.jsxs("div",{className:"header_socialMedia",children:[P.jsx("a",{href:"https://www.linkedin.com/in/rafaelribeirodev/",target:"_blank",children:P.jsx(gf,{size:24})}),P.jsx("a",{href:"https://github.com/RafahOlive",target:"_blank",children:P.jsx(yf,{size:24})})]})]}),P.jsx("div",{className:"right-side",children:P.jsxs(Sm,{direction:"right",duration:1e3,children:[e&&P.jsx(Zp,{}),n&&P.jsx(Xp,{}),o&&P.jsx(Kp,{})]})})]})}function Vm(){return P.jsx(P.Fragment,{children:P.jsx(Dm,{})})}ql.createRoot(document.getElementById("root")).render(P.jsx(O.StrictMode,{children:P.jsx(Vm,{})}));
