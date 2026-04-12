(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function SS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Kf={exports:{}},wo={};var T0;function MS(){if(T0)return wo;T0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var A0;function yS(){return A0||(A0=1,Kf.exports=MS()),Kf.exports}var ie=yS(),Qf={exports:{}},re={};var R0;function ES(){if(R0)return re;R0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function v(z,K,_t){this.props=z,this.context=K,this.refs=M,this.updater=_t||b}v.prototype.isReactComponent={},v.prototype.setState=function(z,K){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,K,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function C(){}C.prototype=v.prototype;function N(z,K,_t){this.props=z,this.context=K,this.refs=M,this.updater=_t||b}var D=N.prototype=new C;D.constructor=N,w(D,v.prototype),D.isPureReactComponent=!0;var B=Array.isArray;function F(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(z,K,_t){var At=_t.ref;return{$$typeof:o,type:z,key:K,ref:At!==void 0?At:null,props:_t}}function ot(z,K){return U(z.type,K,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function k(z){var K={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(_t){return K[_t]})}var j=/\/+/g;function J(z,K){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):K.toString(36)}function X(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(F,F):(z.status="pending",z.then(function(K){z.status==="pending"&&(z.status="fulfilled",z.value=K)},function(K){z.status==="pending"&&(z.status="rejected",z.reason=K)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function L(z,K,_t,At,zt){var at=typeof z;(at==="undefined"||at==="boolean")&&(z=null);var vt=!1;if(z===null)vt=!0;else switch(at){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(z.$$typeof){case o:case e:vt=!0;break;case x:return vt=z._init,L(vt(z._payload),K,_t,At,zt)}}if(vt)return zt=zt(z),vt=At===""?"."+J(z,0):At,B(zt)?(_t="",vt!=null&&(_t=vt.replace(j,"$&/")+"/"),L(zt,K,_t,"",function(Zt){return Zt})):zt!=null&&(G(zt)&&(zt=ot(zt,_t+(zt.key==null||z&&z.key===zt.key?"":(""+zt.key).replace(j,"$&/")+"/")+vt)),K.push(zt)),1;vt=0;var bt=At===""?".":At+":";if(B(z))for(var Vt=0;Vt<z.length;Vt++)At=z[Vt],at=bt+J(At,Vt),vt+=L(At,K,_t,at,zt);else if(Vt=y(z),typeof Vt=="function")for(z=Vt.call(z),Vt=0;!(At=z.next()).done;)At=At.value,at=bt+J(At,Vt++),vt+=L(At,K,_t,at,zt);else if(at==="object"){if(typeof z.then=="function")return L(X(z),K,_t,At,zt);throw K=String(z),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return vt}function P(z,K,_t){if(z==null)return z;var At=[],zt=0;return L(z,At,"","",function(at){return K.call(_t,at,zt++)}),At}function rt(z){if(z._status===-1){var K=z._result;K=K(),K.then(function(_t){(z._status===0||z._status===-1)&&(z._status=1,z._result=_t)},function(_t){(z._status===0||z._status===-1)&&(z._status=2,z._result=_t)}),z._status===-1&&(z._status=0,z._result=K)}if(z._status===1)return z._result.default;throw z._result}var dt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Et={map:P,forEach:function(z,K,_t){P(z,function(){K.apply(this,arguments)},_t)},count:function(z){var K=0;return P(z,function(){K++}),K},toArray:function(z){return P(z,function(K){return K})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return re.Activity=S,re.Children=Et,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=N,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,re.__COMPILER_RUNTIME={__proto__:null,c:function(z){return I.H.useMemoCache(z)}},re.cache=function(z){return function(){return z.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(z,K,_t){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var At=w({},z.props),zt=z.key;if(K!=null)for(at in K.key!==void 0&&(zt=""+K.key),K)!T.call(K,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&K.ref===void 0||(At[at]=K[at]);var at=arguments.length-2;if(at===1)At.children=_t;else if(1<at){for(var vt=Array(at),bt=0;bt<at;bt++)vt[bt]=arguments[bt+2];At.children=vt}return U(z.type,zt,At)},re.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:u,_context:z},z},re.createElement=function(z,K,_t){var At,zt={},at=null;if(K!=null)for(At in K.key!==void 0&&(at=""+K.key),K)T.call(K,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(zt[At]=K[At]);var vt=arguments.length-2;if(vt===1)zt.children=_t;else if(1<vt){for(var bt=Array(vt),Vt=0;Vt<vt;Vt++)bt[Vt]=arguments[Vt+2];zt.children=bt}if(z&&z.defaultProps)for(At in vt=z.defaultProps,vt)zt[At]===void 0&&(zt[At]=vt[At]);return U(z,at,zt)},re.createRef=function(){return{current:null}},re.forwardRef=function(z){return{$$typeof:p,render:z}},re.isValidElement=G,re.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:rt}},re.memo=function(z,K){return{$$typeof:d,type:z,compare:K===void 0?null:K}},re.startTransition=function(z){var K=I.T,_t={};I.T=_t;try{var At=z(),zt=I.S;zt!==null&&zt(_t,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(F,dt)}catch(at){dt(at)}finally{K!==null&&_t.types!==null&&(K.types=_t.types),I.T=K}},re.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},re.use=function(z){return I.H.use(z)},re.useActionState=function(z,K,_t){return I.H.useActionState(z,K,_t)},re.useCallback=function(z,K){return I.H.useCallback(z,K)},re.useContext=function(z){return I.H.useContext(z)},re.useDebugValue=function(){},re.useDeferredValue=function(z,K){return I.H.useDeferredValue(z,K)},re.useEffect=function(z,K){return I.H.useEffect(z,K)},re.useEffectEvent=function(z){return I.H.useEffectEvent(z)},re.useId=function(){return I.H.useId()},re.useImperativeHandle=function(z,K,_t){return I.H.useImperativeHandle(z,K,_t)},re.useInsertionEffect=function(z,K){return I.H.useInsertionEffect(z,K)},re.useLayoutEffect=function(z,K){return I.H.useLayoutEffect(z,K)},re.useMemo=function(z,K){return I.H.useMemo(z,K)},re.useOptimistic=function(z,K){return I.H.useOptimistic(z,K)},re.useReducer=function(z,K,_t){return I.H.useReducer(z,K,_t)},re.useRef=function(z){return I.H.useRef(z)},re.useState=function(z){return I.H.useState(z)},re.useSyncExternalStore=function(z,K,_t){return I.H.useSyncExternalStore(z,K,_t)},re.useTransition=function(){return I.H.useTransition()},re.version="19.2.4",re}var C0;function Ud(){return C0||(C0=1,Qf.exports=ES()),Qf.exports}var Pe=Ud();const bS=SS(Pe);var Jf={exports:{}},Do={},$f={exports:{}},th={};var w0;function TS(){return w0||(w0=1,(function(o){function e(L,P){var rt=L.length;L.push(P);t:for(;0<rt;){var dt=rt-1>>>1,Et=L[dt];if(0<l(Et,P))L[dt]=P,L[rt]=Et,rt=dt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var P=L[0],rt=L.pop();if(rt!==P){L[0]=rt;t:for(var dt=0,Et=L.length,z=Et>>>1;dt<z;){var K=2*(dt+1)-1,_t=L[K],At=K+1,zt=L[At];if(0>l(_t,rt))At<Et&&0>l(zt,_t)?(L[dt]=zt,L[At]=rt,dt=At):(L[dt]=_t,L[K]=rt,dt=K);else if(At<Et&&0>l(zt,rt))L[dt]=zt,L[At]=rt,dt=At;else break t}}return P}function l(L,P){var rt=L.sortIndex-P.sortIndex;return rt!==0?rt:L.id-P.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],x=1,S=null,g=3,y=!1,b=!1,w=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(L){for(var P=i(d);P!==null;){if(P.callback===null)s(d);else if(P.startTime<=L)s(d),P.sortIndex=P.expirationTime,e(m,P);else break;P=i(d)}}function B(L){if(w=!1,D(L),!b)if(i(m)!==null)b=!0,F||(F=!0,k());else{var P=i(d);P!==null&&X(B,P.startTime-L)}}var F=!1,I=-1,T=5,U=-1;function ot(){return M?!0:!(o.unstable_now()-U<T)}function G(){if(M=!1,F){var L=o.unstable_now();U=L;var P=!0;try{t:{b=!1,w&&(w=!1,C(I),I=-1),y=!0;var rt=g;try{e:{for(D(L),S=i(m);S!==null&&!(S.expirationTime>L&&ot());){var dt=S.callback;if(typeof dt=="function"){S.callback=null,g=S.priorityLevel;var Et=dt(S.expirationTime<=L);if(L=o.unstable_now(),typeof Et=="function"){S.callback=Et,D(L),P=!0;break e}S===i(m)&&s(m),D(L)}else s(m);S=i(m)}if(S!==null)P=!0;else{var z=i(d);z!==null&&X(B,z.startTime-L),P=!1}}break t}finally{S=null,g=rt,y=!1}P=void 0}}finally{P?k():F=!1}}}var k;if(typeof N=="function")k=function(){N(G)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,J=j.port2;j.port1.onmessage=G,k=function(){J.postMessage(null)}}else k=function(){v(G,0)};function X(L,P){I=v(function(){L(o.unstable_now())},P)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(L){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var rt=g;g=P;try{return L()}finally{g=rt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,P){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var rt=g;g=L;try{return P()}finally{g=rt}},o.unstable_scheduleCallback=function(L,P,rt){var dt=o.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?dt+rt:dt):rt=dt,L){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=rt+Et,L={id:x++,callback:P,priorityLevel:L,startTime:rt,expirationTime:Et,sortIndex:-1},rt>dt?(L.sortIndex=rt,e(d,L),i(m)===null&&L===i(d)&&(w?(C(I),I=-1):w=!0,X(B,rt-dt))):(L.sortIndex=Et,e(m,L),b||y||(b=!0,F||(F=!0,k()))),L},o.unstable_shouldYield=ot,o.unstable_wrapCallback=function(L){var P=g;return function(){var rt=g;g=P;try{return L.apply(this,arguments)}finally{g=rt}}}})(th)),th}var D0;function AS(){return D0||(D0=1,$f.exports=TS()),$f.exports}var eh={exports:{}},Tn={};var U0;function RS(){if(U0)return Tn;U0=1;var o=Ud();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)d+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,d,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:d,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(m,d){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return u(m,d,null,x)},Tn.flushSync=function(m){var d=h.T,x=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=x,s.d.f()}},Tn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Tn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Tn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var x=d.as,S=p(x,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;x==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:y}):x==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Tn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var x=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Tn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var x=d.as,S=p(x,d.crossOrigin);s.d.L(m,x,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Tn.preloadModule=function(m,d){if(typeof m=="string")if(d){var x=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Tn.requestFormReset=function(m){s.d.r(m)},Tn.unstable_batchedUpdates=function(m,d){return m(d)},Tn.useFormState=function(m,d,x){return h.H.useFormState(m,d,x)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.2.4",Tn}var N0;function CS(){if(N0)return eh.exports;N0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),eh.exports=RS(),eh.exports}var L0;function wS(){if(L0)return Do;L0=1;var o=AS(),e=Ud(),i=CS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,A=c.child;A;){if(A===a){_=!0,a=c,r=f;break}if(A===r){_=!0,r=c,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,r=c;break}if(A===r){_=!0,r=f,a=c;break}A=A.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ot=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var j=Symbol.for("react.client.reference");function J(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===j?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case F:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:J(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return J(t(n))}catch{}}return null}var X=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},dt=[],Et=-1;function z(t){return{current:t}}function K(t){0>Et||(t.current=dt[Et],dt[Et]=null,Et--)}function _t(t,n){Et++,dt[Et]=t.current,t.current=n}var At=z(null),zt=z(null),at=z(null),vt=z(null);function bt(t,n){switch(_t(at,n),_t(zt,t),_t(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?jg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=jg(n),t=Zg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(At),_t(At,t)}function Vt(){K(At),K(zt),K(at)}function Zt(t){t.memoizedState!==null&&_t(vt,t);var n=At.current,a=Zg(n,t.type);n!==a&&(_t(zt,t),_t(At,a))}function Jt(t){zt.current===t&&(K(At),K(zt)),vt.current===t&&(K(vt),To._currentValue=rt)}var Je,ve;function me(t){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+t+ve}var Ue=!1;function le(t,n){if(!t||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ct){var st=ct}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(ct){st=ct}t.call(gt.prototype)}}else{try{throw Error()}catch(ct){st=ct}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ct){if(ct&&st&&typeof ct.stack=="string")return[ct.stack,st.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var H=_.split(`
`),nt=A.split(`
`);for(c=r=0;r<H.length&&!H[r].includes("DetermineComponentFrameRoot");)r++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(r===H.length||c===nt.length)for(r=H.length-1,c=nt.length-1;1<=r&&0<=c&&H[r]!==nt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(H[r]!==nt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||H[r]!==nt[c]){var ht=`
`+H[r].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=r&&0<=c);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?me(a):""}function Ke(t,n){switch(t.tag){case 26:case 27:case 5:return me(t.type);case 16:return me("Lazy");case 13:return t.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return me("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=Ke(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var qe=Object.prototype.hasOwnProperty,Ee=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,Wt=o.unstable_shouldYield,O=o.unstable_requestPaint,E=o.unstable_now,Z=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ft=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,jt=o.log,$t=o.unstable_setDisableYieldValue,yt=null,St=null;function Lt(t){if(typeof jt=="function"&&$t(t),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(yt,t)}catch{}}var Nt=Math.clz32?Math.clz32:Y,Ot=Math.log,ue=Math.LN2;function Y(t){return t>>>=0,t===0?32:31-(Ot(t)/ue|0)|0}var Rt=256,Tt=262144,Pt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ut(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?c=Mt(r):(_&=A,_!==0?c=Mt(_):a||(a=A&~t,a!==0&&(c=Mt(a))))):(A=r&~f,A!==0?c=Mt(A):_!==0?c=Mt(_):a||(a=r&~t,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ft(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var t=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),t}function be(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vi(t,n,a,r,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,nt=t.hiddenUpdates;for(a=_&~a;0<a;){var ht=31-Nt(a),gt=1<<ht;A[ht]=0,H[ht]=-1;var st=nt[ht];if(st!==null)for(nt[ht]=null,ht=0;ht<st.length;ht++){var ct=st[ht];ct!==null&&(ct.lane&=-536870913)}a&=~gt}r!==0&&Br(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Br(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Nt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ls(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Nt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Zo(t,n){var a=n&-n;return a=(a&42)!==0?1:Os(a),(a&(t.suspendedLanes|n))!==0?0:a}function Os(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ps(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ui(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:v0(t.type))}function zs(t,n){var a=P.p;try{return P.p=t,n()}finally{P.p=a}}var xi=Math.random().toString(36).slice(2),sn="__reactFiber$"+xi,dn="__reactProps$"+xi,ki="__reactContainer$"+xi,ya="__reactEvents$"+xi,Ko="__reactListeners$"+xi,Qo="__reactHandles$"+xi,Jo="__reactResources$"+xi,ns="__reactMarker$"+xi;function Hr(t){delete t[sn],delete t[dn],delete t[ya],delete t[Ko],delete t[Qo]}function Ea(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ki]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=n0(t);t!==null;){if(a=t[sn])return a;t=n0(t)}return n}t=a,a=t.parentNode}return null}function ba(t){if(t=t[sn]||t[ki]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function is(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function R(t){var n=t[Jo];return n||(n=t[Jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function q(t){t[ns]=!0}var lt=new Set,it={};function $(t,n){wt(t,n),wt(t+"Capture",n)}function wt(t,n){for(it[t]=n,t=0;t<n.length;t++)lt.add(n[t])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dt={},kt={};function Yt(t){return qe.call(kt,t)?!0:qe.call(Dt,t)?!1:It.test(t)?kt[t]=!0:(Dt[t]=!0,!1)}function ee(t,n,a){if(Yt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function se(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Bt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ye(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Re(t){if(!t._valueTracker){var n=Ye(t)?"checked":"value";t._valueTracker=je(t,n,""+t[n])}}function pn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Ye(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Gt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function ae(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Un(t,n,a,r,c,f,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+fe(n)):t.value!==""+fe(n)&&(t.value=""+fe(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Si(t,_,fe(n)):a!=null?Si(t,_,fe(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+fe(A):t.removeAttribute("name")}function qn(t,n,a,r,c,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Re(t);return}a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Re(t)}function Si(t,n,a){n==="number"&&Gt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Yn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Oe(t,n,a){if(n!=null&&(n=""+fe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+fe(a):""}function rn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(X(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=fe(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Re(t)}function Nn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var on=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mi(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||on.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Wi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Mi(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Mi(t,f,n[f])}function Is(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(t){return _v.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var qc=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fs=null,Bs=null;function Yd(t){var n=ba(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Un(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[dn]||null;if(!c)throw Error(s(90));Un(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&pn(r)}break t;case"textarea":Oe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Yn(t,!!a.multiple,n,!1)}}}var jc=!1;function jd(t,n,a){if(jc)return t(n,a);jc=!0;try{var r=t(n);return r}finally{if(jc=!1,(Fs!==null||Bs!==null)&&(Hl(),Fs&&(n=Fs,t=Bs,Bs=Fs=null,Yd(n),t)))for(n=0;n<t.length;n++)Yd(t[n])}}function Gr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[dn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(Yi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Zc=!1}var Ta=null,Kc=null,tl=null;function Zd(){if(tl)return tl;var t,n=Kc,a=n.length,r,c="value"in Ta?Ta.value:Ta.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return tl=c.slice(t,1<r?1-r:void 0)}function el(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function Kd(){return!1}function Fn(t){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:Kd,this.isPropagationStopped=Kd,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Fn(as),Xr=S({},as,{view:0,detail:0}),vv=Fn(Xr),Qc,Jc,kr,al=S({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==kr&&(kr&&t.type==="mousemove"?(Qc=t.screenX-kr.screenX,Jc=t.screenY-kr.screenY):Jc=Qc=0,kr=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Jc}}),Qd=Fn(al),xv=S({},al,{dataTransfer:0}),Sv=Fn(xv),Mv=S({},Xr,{relatedTarget:0}),$c=Fn(Mv),yv=S({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=Fn(yv),bv=S({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tv=Fn(bv),Av=S({},as,{data:0}),Jd=Fn(Av),Rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=wv[t])?!!n[t]:!1}function tu(){return Dv}var Uv=S({},Xr,{key:function(t){if(t.key){var n=Rv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nv=Fn(Uv),Lv=S({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=Fn(Lv),Ov=S({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Pv=Fn(Ov),zv=S({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iv=Fn(zv),Fv=S({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=Fn(Fv),Hv=S({},as,{newState:0,oldState:0}),Gv=Fn(Hv),Vv=[9,13,27,32],eu=Yi&&"CompositionEvent"in window,Wr=null;Yi&&"documentMode"in document&&(Wr=document.documentMode);var Xv=Yi&&"TextEvent"in window&&!Wr,tp=Yi&&(!eu||Wr&&8<Wr&&11>=Wr),ep=" ",np=!1;function ip(t,n){switch(t){case"keyup":return Vv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function kv(t,n){switch(t){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,ep);case"textInput":return t=n.data,t===ep&&np?null:t;default:return null}}function Wv(t,n){if(Hs)return t==="compositionend"||!eu&&ip(t,n)?(t=Zd(),tl=Kc=Ta=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!qv[t.type]:n==="textarea"}function rp(t,n,a,r){Fs?Bs?Bs.push(r):Bs=[r]:Fs=r,n=Yl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var qr=null,Yr=null;function Yv(t){Vg(t,0)}function sl(t){var n=is(t);if(pn(n))return t}function op(t,n){if(t==="change")return n}var lp=!1;if(Yi){var nu;if(Yi){var iu="oninput"in document;if(!iu){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),iu=typeof cp.oninput=="function"}nu=iu}else nu=!1;lp=nu&&(!document.documentMode||9<document.documentMode)}function up(){qr&&(qr.detachEvent("onpropertychange",fp),Yr=qr=null)}function fp(t){if(t.propertyName==="value"&&sl(Yr)){var n=[];rp(n,Yr,t,Yc(t)),jd(Yv,n)}}function jv(t,n,a){t==="focusin"?(up(),qr=n,Yr=a,qr.attachEvent("onpropertychange",fp)):t==="focusout"&&up()}function Zv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sl(Yr)}function Kv(t,n){if(t==="click")return sl(n)}function Qv(t,n){if(t==="input"||t==="change")return sl(n)}function Jv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:Jv;function jr(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!qe.call(n,c)||!jn(t[c],n[c]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dp(t,n){var a=hp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=hp(a)}}function pp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?pp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function mp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Gt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Gt(t.document)}return n}function au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $v=Yi&&"documentMode"in document&&11>=document.documentMode,Gs=null,su=null,Zr=null,ru=!1;function gp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ru||Gs==null||Gs!==Gt(r)||(r=Gs,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&jr(Zr,r)||(Zr=r,r=Yl(su,"onSelect"),0<r.length&&(n=new il("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Gs)))}function ss(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vs={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},ou={},_p={};Yi&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function rs(t){if(ou[t])return ou[t];if(!Vs[t])return t;var n=Vs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return ou[t]=n[a];return t}var vp=rs("animationend"),xp=rs("animationiteration"),Sp=rs("animationstart"),tx=rs("transitionrun"),ex=rs("transitionstart"),nx=rs("transitioncancel"),Mp=rs("transitionend"),yp=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function yi(t,n){yp.set(t,n),$(n,[t])}var rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],Xs=0,cu=0;function ol(){for(var t=Xs,n=cu=Xs=0;n<t;){var a=ri[n];ri[n++]=null;var r=ri[n];ri[n++]=null;var c=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&Ep(a,c,f)}}function ll(t,n,a,r){ri[Xs++]=t,ri[Xs++]=n,ri[Xs++]=a,ri[Xs++]=r,cu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function uu(t,n,a,r){return ll(t,n,a,r),cl(t)}function os(t,n){return ll(t,null,null,n),cl(t)}function Ep(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Nt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function cl(t){if(50<vo)throw vo=0,Sf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ks={};function ix(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,r){return new ix(t,n,a,r)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function bp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ul(t,n,a,r,c,f){var _=0;if(r=t,typeof t=="function")fu(t)&&(_=1);else if(typeof t=="string")_=lS(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case U:return t=Zn(31,a,n,c),t.elementType=U,t.lanes=f,t;case w:return ls(a.children,c,f,n);case M:_=8,c|=24;break;case v:return t=Zn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case B:return t=Zn(13,a,n,c),t.elementType=B,t.lanes=f,t;case F:return t=Zn(19,a,n,c),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:_=10;break t;case C:_=9;break t;case D:_=11;break t;case I:_=14;break t;case T:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Zn(_,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function ls(t,n,a,r){return t=Zn(7,t,r,n),t.lanes=a,t}function hu(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function Tp(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function du(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ap=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=Ap.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},Ap.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Ws=[],qs=0,fl=null,Kr=0,li=[],ci=0,Aa=null,Ni=1,Li="";function Zi(t,n){Ws[qs++]=Kr,Ws[qs++]=fl,fl=t,Kr=n}function Rp(t,n,a){li[ci++]=Ni,li[ci++]=Li,li[ci++]=Aa,Aa=t;var r=Ni;t=Li;var c=32-Nt(r)-1;r&=~(1<<c),a+=1;var f=32-Nt(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Ni=1<<32-Nt(n)+c|a<<c|r,Li=f+t}else Ni=1<<f|a<<c|r,Li=t}function pu(t){t.return!==null&&(Zi(t,1),Rp(t,1,0))}function mu(t){for(;t===fl;)fl=Ws[--qs],Ws[qs]=null,Kr=Ws[--qs],Ws[qs]=null;for(;t===Aa;)Aa=li[--ci],li[ci]=null,Li=li[--ci],li[ci]=null,Ni=li[--ci],li[ci]=null}function Cp(t,n){li[ci++]=Ni,li[ci++]=Li,li[ci++]=Aa,Ni=n.id,Li=n.overflow,Aa=t}var Sn=null,ke=null,Me=!1,Ra=null,ui=!1,gu=Error(s(519));function Ca(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(oi(n,t)),gu}function wp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[sn]=t,n[dn]=r,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)_e(So[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),qn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),rn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||qg(n.textContent,a)?(r.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),r.onScroll!=null&&_e("scroll",n),r.onScrollEnd!=null&&_e("scrollend",n),r.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Ca(t,!0)}function Dp(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Sn=Sn.return}}function Ys(t){if(t!==Sn)return!1;if(!Me)return Dp(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Pf(t.type,t.memoizedProps)),a=!a),a&&ke&&Ca(t),Dp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=e0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=e0(t)}else n===27?(n=ke,Va(t.type)?(t=Hf,Hf=null,ke=t):ke=n):ke=Sn?hi(t.stateNode.nextSibling):null;return!0}function cs(){ke=Sn=null,Me=!1}function _u(){var t=Ra;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),Ra=null),t}function Qr(t){Ra===null?Ra=[t]:Ra.push(t)}var vu=z(null),us=null,Ki=null;function wa(t,n,a){_t(vu,n._currentValue),n._currentValue=a}function Qi(t){t._currentValue=vu.current,K(vu)}function xu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Su(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),xu(f.return,a,t),r||(_=null);break t}f=A.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),xu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function js(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=c.type;jn(c.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(c===vt.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(To):t=[To])}c=c.return}t!==null&&Su(n,t,a,r),n.flags|=262144}function hl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fs(t){us=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return Up(us,t)}function dl(t,n){return us===null&&fs(t),Up(t,n)}function Up(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(t===null)throw Error(s(308));Ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ki=Ki.next=n;return a}var ax=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},sx=o.unstable_scheduleCallback,rx=o.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new ax,data:new Map,refCount:0}}function Jr(t){t.refCount--,t.refCount===0&&sx(rx,function(){t.controller.abort()})}var $r=null,yu=0,Zs=0,Ks=null;function ox(t,n){if($r===null){var a=$r=[];yu=0,Zs=Af(),Ks={status:"pending",value:void 0,then:function(r){a.push(r)}}}return yu++,n.then(Np,Np),n}function Np(){if(--yu===0&&$r!==null){Ks!==null&&(Ks.status="fulfilled");var t=$r;$r=null,Zs=0,Ks=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function lx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Lp=L.S;L.S=function(t,n){gg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ox(t,n),Lp!==null&&Lp(t,n)};var hs=z(null);function Eu(){var t=hs.current;return t!==null?t:Xe.pooledCache}function pl(t,n){n===null?_t(hs,hs.current):_t(hs,n.pool)}function Op(){var t=Eu();return t===null?null:{parent:ln._currentValue,pool:t}}var Qs=Error(s(460)),bu=Error(s(474)),ml=Error(s(542)),gl={then:function(){}};function Pp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fp(t),t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fp(t),t}throw ps=n,Qs}}function ds(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ps=a,Qs):a}}var ps=null;function Ip(){if(ps===null)throw Error(s(459));var t=ps;return ps=null,t}function Fp(t){if(t===Qs||t===ml)throw Error(s(483))}var Js=null,to=0;function _l(t){var n=to;return to+=1,Js===null&&(Js=[]),zp(Js,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function vl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Bp(t){function n(Q,W){if(t){var et=Q.deletions;et===null?(Q.deletions=[W],Q.flags|=16):et.push(W)}}function a(Q,W){if(!t)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function r(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function c(Q,W){return Q=ji(Q,W),Q.index=0,Q.sibling=null,Q}function f(Q,W,et){return Q.index=et,t?(et=Q.alternate,et!==null?(et=et.index,et<W?(Q.flags|=67108866,W):et):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function _(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,W,et,mt){return W===null||W.tag!==6?(W=hu(et,Q.mode,mt),W.return=Q,W):(W=c(W,et),W.return=Q,W)}function H(Q,W,et,mt){var Kt=et.type;return Kt===w?ht(Q,W,et.props.children,mt,et.key):W!==null&&(W.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===T&&ds(Kt)===W.type)?(W=c(W,et.props),eo(W,et),W.return=Q,W):(W=ul(et.type,et.key,et.props,null,Q.mode,mt),eo(W,et),W.return=Q,W)}function nt(Q,W,et,mt){return W===null||W.tag!==4||W.stateNode.containerInfo!==et.containerInfo||W.stateNode.implementation!==et.implementation?(W=du(et,Q.mode,mt),W.return=Q,W):(W=c(W,et.children||[]),W.return=Q,W)}function ht(Q,W,et,mt,Kt){return W===null||W.tag!==7?(W=ls(et,Q.mode,mt,Kt),W.return=Q,W):(W=c(W,et),W.return=Q,W)}function gt(Q,W,et){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=hu(""+W,Q.mode,et),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return et=ul(W.type,W.key,W.props,null,Q.mode,et),eo(et,W),et.return=Q,et;case b:return W=du(W,Q.mode,et),W.return=Q,W;case T:return W=ds(W),gt(Q,W,et)}if(X(W)||k(W))return W=ls(W,Q.mode,et,null),W.return=Q,W;if(typeof W.then=="function")return gt(Q,_l(W),et);if(W.$$typeof===N)return gt(Q,dl(Q,W),et);vl(Q,W)}return null}function st(Q,W,et,mt){var Kt=W!==null?W.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Kt!==null?null:A(Q,W,""+et,mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===Kt?H(Q,W,et,mt):null;case b:return et.key===Kt?nt(Q,W,et,mt):null;case T:return et=ds(et),st(Q,W,et,mt)}if(X(et)||k(et))return Kt!==null?null:ht(Q,W,et,mt,null);if(typeof et.then=="function")return st(Q,W,_l(et),mt);if(et.$$typeof===N)return st(Q,W,dl(Q,et),mt);vl(Q,et)}return null}function ct(Q,W,et,mt,Kt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Q=Q.get(et)||null,A(W,Q,""+mt,Kt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return Q=Q.get(mt.key===null?et:mt.key)||null,H(W,Q,mt,Kt);case b:return Q=Q.get(mt.key===null?et:mt.key)||null,nt(W,Q,mt,Kt);case T:return mt=ds(mt),ct(Q,W,et,mt,Kt)}if(X(mt)||k(mt))return Q=Q.get(et)||null,ht(W,Q,mt,Kt,null);if(typeof mt.then=="function")return ct(Q,W,et,_l(mt),Kt);if(mt.$$typeof===N)return ct(Q,W,et,dl(W,mt),Kt);vl(W,mt)}return null}function Ht(Q,W,et,mt){for(var Kt=null,Ce=null,qt=W,he=W=0,Se=null;qt!==null&&he<et.length;he++){qt.index>he?(Se=qt,qt=null):Se=qt.sibling;var we=st(Q,qt,et[he],mt);if(we===null){qt===null&&(qt=Se);break}t&&qt&&we.alternate===null&&n(Q,qt),W=f(we,W,he),Ce===null?Kt=we:Ce.sibling=we,Ce=we,qt=Se}if(he===et.length)return a(Q,qt),Me&&Zi(Q,he),Kt;if(qt===null){for(;he<et.length;he++)qt=gt(Q,et[he],mt),qt!==null&&(W=f(qt,W,he),Ce===null?Kt=qt:Ce.sibling=qt,Ce=qt);return Me&&Zi(Q,he),Kt}for(qt=r(qt);he<et.length;he++)Se=ct(qt,Q,he,et[he],mt),Se!==null&&(t&&Se.alternate!==null&&qt.delete(Se.key===null?he:Se.key),W=f(Se,W,he),Ce===null?Kt=Se:Ce.sibling=Se,Ce=Se);return t&&qt.forEach(function(Ya){return n(Q,Ya)}),Me&&Zi(Q,he),Kt}function Qt(Q,W,et,mt){if(et==null)throw Error(s(151));for(var Kt=null,Ce=null,qt=W,he=W=0,Se=null,we=et.next();qt!==null&&!we.done;he++,we=et.next()){qt.index>he?(Se=qt,qt=null):Se=qt.sibling;var Ya=st(Q,qt,we.value,mt);if(Ya===null){qt===null&&(qt=Se);break}t&&qt&&Ya.alternate===null&&n(Q,qt),W=f(Ya,W,he),Ce===null?Kt=Ya:Ce.sibling=Ya,Ce=Ya,qt=Se}if(we.done)return a(Q,qt),Me&&Zi(Q,he),Kt;if(qt===null){for(;!we.done;he++,we=et.next())we=gt(Q,we.value,mt),we!==null&&(W=f(we,W,he),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return Me&&Zi(Q,he),Kt}for(qt=r(qt);!we.done;he++,we=et.next())we=ct(qt,Q,he,we.value,mt),we!==null&&(t&&we.alternate!==null&&qt.delete(we.key===null?he:we.key),W=f(we,W,he),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return t&&qt.forEach(function(xS){return n(Q,xS)}),Me&&Zi(Q,he),Kt}function Ve(Q,W,et,mt){if(typeof et=="object"&&et!==null&&et.type===w&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var Kt=et.key;W!==null;){if(W.key===Kt){if(Kt=et.type,Kt===w){if(W.tag===7){a(Q,W.sibling),mt=c(W,et.props.children),mt.return=Q,Q=mt;break t}}else if(W.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===T&&ds(Kt)===W.type){a(Q,W.sibling),mt=c(W,et.props),eo(mt,et),mt.return=Q,Q=mt;break t}a(Q,W);break}else n(Q,W);W=W.sibling}et.type===w?(mt=ls(et.props.children,Q.mode,mt,et.key),mt.return=Q,Q=mt):(mt=ul(et.type,et.key,et.props,null,Q.mode,mt),eo(mt,et),mt.return=Q,Q=mt)}return _(Q);case b:t:{for(Kt=et.key;W!==null;){if(W.key===Kt)if(W.tag===4&&W.stateNode.containerInfo===et.containerInfo&&W.stateNode.implementation===et.implementation){a(Q,W.sibling),mt=c(W,et.children||[]),mt.return=Q,Q=mt;break t}else{a(Q,W);break}else n(Q,W);W=W.sibling}mt=du(et,Q.mode,mt),mt.return=Q,Q=mt}return _(Q);case T:return et=ds(et),Ve(Q,W,et,mt)}if(X(et))return Ht(Q,W,et,mt);if(k(et)){if(Kt=k(et),typeof Kt!="function")throw Error(s(150));return et=Kt.call(et),Qt(Q,W,et,mt)}if(typeof et.then=="function")return Ve(Q,W,_l(et),mt);if(et.$$typeof===N)return Ve(Q,W,dl(Q,et),mt);vl(Q,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,W!==null&&W.tag===6?(a(Q,W.sibling),mt=c(W,et),mt.return=Q,Q=mt):(a(Q,W),mt=hu(et,Q.mode,mt),mt.return=Q,Q=mt),_(Q)):a(Q,W)}return function(Q,W,et,mt){try{to=0;var Kt=Ve(Q,W,et,mt);return Js=null,Kt}catch(qt){if(qt===Qs||qt===ml)throw qt;var Ce=Zn(29,qt,null,Q.mode);return Ce.lanes=mt,Ce.return=Q,Ce}}}var ms=Bp(!0),Hp=Bp(!1),Da=!1;function Tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Na(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=cl(t),Ep(t,null,a),n}return ll(t,r,n,a),cl(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ls(t,a)}}function Ru(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Cu=!1;function io(){if(Cu){var t=Ks;if(t!==null)throw t}}function ao(t,n,a,r){Cu=!1;var c=t.updateQueue;Da=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var H=A,nt=H.next;H.next=null,_===null?f=nt:_.next=nt,_=H;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==_&&(A===null?ht.firstBaseUpdate=nt:A.next=nt,ht.lastBaseUpdate=H))}if(f!==null){var gt=c.baseState;_=0,ht=nt=H=null,A=f;do{var st=A.lane&-536870913,ct=st!==A.lane;if(ct?(xe&st)===st:(r&st)===st){st!==0&&st===Zs&&(Cu=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ht=t,Qt=A;st=n;var Ve=a;switch(Qt.tag){case 1:if(Ht=Qt.payload,typeof Ht=="function"){gt=Ht.call(Ve,gt,st);break t}gt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Qt.payload,st=typeof Ht=="function"?Ht.call(Ve,gt,st):Ht,st==null)break t;gt=S({},gt,st);break t;case 2:Da=!0}}st=A.callback,st!==null&&(t.flags|=64,ct&&(t.flags|=8192),ct=c.callbacks,ct===null?c.callbacks=[st]:ct.push(st))}else ct={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(nt=ht=ct,H=gt):ht=ht.next=ct,_|=st;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,c.lastBaseUpdate=ct,c.shared.pending=null}}while(!0);ht===null&&(H=gt),c.baseState=H,c.firstBaseUpdate=nt,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),Ia|=_,t.lanes=_,t.memoizedState=gt}}function Gp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Vp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Gp(a[t],n)}var $s=z(null),xl=z(0);function Xp(t,n){t=ra,_t(xl,t),_t($s,n),ra=t|n.baseLanes}function wu(){_t(xl,ra),_t($s,$s.current)}function Du(){ra=xl.current,K($s),K(xl)}var Kn=z(null),fi=null;function La(t){var n=t.alternate;_t(nn,nn.current&1),_t(Kn,t),fi===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(fi=t)}function Uu(t){_t(nn,nn.current),_t(Kn,t),fi===null&&(fi=t)}function kp(t){t.tag===22?(_t(nn,nn.current),_t(Kn,t),fi===null&&(fi=t)):Oa()}function Oa(){_t(nn,nn.current),_t(Kn,Kn.current)}function Qn(t){K(Kn),fi===t&&(fi=null),K(nn)}var nn=z(0);function Sl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||Bf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=0,ce=null,He=null,cn=null,Ml=!1,tr=!1,gs=!1,yl=0,so=0,er=null,cx=0;function $e(){throw Error(s(321))}function Nu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function Lu(t,n,a,r,c,f){return Ji=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?Rm:ju,gs=!1,f=a(r,c),gs=!1,tr&&(f=qp(n,a,r,c)),Wp(t),f}function Wp(t){L.H=lo;var n=He!==null&&He.next!==null;if(Ji=0,cn=He=ce=null,Ml=!1,so=0,er=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&hl(t)&&(un=!0))}function qp(t,n,a,r){ce=t;var c=0;do{if(tr&&(er=null),so=0,tr=!1,25<=c)throw Error(s(301));if(c+=1,cn=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Cm,f=n(a,r)}while(tr);return f}function ux(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(ce.flags|=1024),n}function Ou(){var t=yl!==0;return yl=0,t}function Pu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zu(t){if(Ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ml=!1}Ji=0,cn=He=ce=null,tr=!1,so=yl=0,er=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ce.memoizedState=cn=t:cn=cn.next=t,cn}function an(){if(He===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=cn===null?ce.memoizedState:cn.next;if(n!==null)cn=n,He=t;else{if(t===null)throw ce.alternate===null?Error(s(467)):Error(s(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},cn===null?ce.memoizedState=cn=t:cn=cn.next=t}return cn}function El(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=so;return so+=1,er===null&&(er=[]),t=zp(er,t,n),n=ce,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Rm:ju),t}function bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===N)return Mn(t)}throw Error(s(438,String(t)))}function Iu(t){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ce.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=El(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=ot;return n.index++,a}function $i(t,n){return typeof n=="function"?n(t):n}function Tl(t){var n=an();return Fu(n,He,t)}function Fu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=_=null,H=null,nt=n,ht=!1;do{var gt=nt.lane&-536870913;if(gt!==nt.lane?(xe&gt)===gt:(Ji&gt)===gt){var st=nt.revertLane;if(st===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),gt===Zs&&(ht=!0);else if((Ji&st)===st){nt=nt.next,st===Zs&&(ht=!0);continue}else gt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=gt,_=f):H=H.next=gt,ce.lanes|=st,Ia|=st;gt=nt.action,gs&&a(f,gt),f=nt.hasEagerState?nt.eagerState:a(f,gt)}else st={lane:gt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(A=H=st,_=f):H=H.next=st,ce.lanes|=gt,Ia|=gt;nt=nt.next}while(nt!==null&&nt!==n);if(H===null?_=f:H.next=A,!jn(f,t.memoizedState)&&(un=!0,ht&&(a=Ks,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=H,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Bu(t){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);jn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Yp(t,n,a){var r=ce,c=an(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!jn((He||c).memoizedState,a);if(_&&(c.memoizedState=a,un=!0),c=c.queue,Vu(Kp.bind(null,r,c,t),[t]),c.getSnapshot!==n||_||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,nr(9,{destroy:void 0},Zp.bind(null,r,c,a,n),null),Xe===null)throw Error(s(349));f||(Ji&127)!==0||jp(r,n,a)}return a}function jp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=El(),ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Zp(t,n,a,r){n.value=a,n.getSnapshot=r,Qp(n)&&Jp(t)}function Kp(t,n,a){return a(function(){Qp(n)&&Jp(t)})}function Qp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function Jp(t){var n=os(t,2);n!==null&&Xn(n,t,2)}function Hu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),gs){Lt(!0);try{a()}finally{Lt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},n}function $p(t,n,a,r){return t.baseState=a,Fu(t,He,typeof r=="function"?r:$i)}function fx(t,n,a,r,c){if(Cl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};L.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,tm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function tm(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=L.T,_={};L.T=_;try{var A=a(c,r),H=L.S;H!==null&&H(_,A),em(t,n,A)}catch(nt){Gu(t,n,nt)}finally{f!==null&&_.types!==null&&(f.types=_.types),L.T=f}}else try{f=a(c,r),em(t,n,f)}catch(nt){Gu(t,n,nt)}}function em(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){nm(t,n,r)},function(r){return Gu(t,n,r)}):nm(t,n,a)}function nm(t,n,a){n.status="fulfilled",n.value=a,im(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,tm(t,a)))}function Gu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,im(n),n=n.next;while(n!==r)}t.action=null}function im(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function am(t,n){return n}function sm(t,n){if(Me){var a=Xe.formState;if(a!==null){t:{var r=ce;if(Me){if(ke){e:{for(var c=ke,f=ui;c.nodeType!==8;){if(!f){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ke=hi(c.nextSibling),r=c.data==="F!";break t}}Ca(r)}r=!1}r&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:n},a.queue=r,a=bm.bind(null,ce,r),r.dispatch=a,r=Hu(!1),f=Yu.bind(null,ce,!1,r.queue),r=Ln(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=fx.bind(null,ce,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function rm(t){var n=an();return om(n,He,t)}function om(t,n,a){if(n=Fu(t,n,am)[0],t=Tl($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ro(n)}catch(_){throw _===Qs?ml:_}else r=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,nr(9,{destroy:void 0},hx.bind(null,c,a),null)),[r,f,t]}function hx(t,n){t.action=n}function lm(t){var n=an(),a=He;if(a!==null)return om(n,a,t);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function nr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ce.updateQueue,n===null&&(n=El(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function cm(){return an().memoizedState}function Al(t,n,a,r){var c=Ln();ce.flags|=t,c.memoizedState=nr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Rl(t,n,a,r){var c=an();r=r===void 0?null:r;var f=c.memoizedState.inst;He!==null&&r!==null&&Nu(r,He.memoizedState.deps)?c.memoizedState=nr(n,f,a,r):(ce.flags|=t,c.memoizedState=nr(1|n,f,a,r))}function um(t,n){Al(8390656,8,t,n)}function Vu(t,n){Rl(2048,8,t,n)}function dx(t){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=El(),ce.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function fm(t){var n=an().memoizedState;return dx({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function hm(t,n){return Rl(4,2,t,n)}function dm(t,n){return Rl(4,4,t,n)}function pm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function mm(t,n,a){a=a!=null?a.concat([t]):null,Rl(4,4,pm.bind(null,n,t),a)}function Xu(){}function gm(t,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Nu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function _m(t,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Nu(n,r[1]))return r[0];if(r=t(),gs){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[r,n],r}function ku(t,n,a){return a===void 0||(Ji&1073741824)!==0&&(xe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=vg(),ce.lanes|=t,Ia|=t,a)}function vm(t,n,a,r){return jn(a,n)?a:$s.current!==null?(t=ku(t,a,r),jn(t,n)||(un=!0),t):(Ji&42)===0||(Ji&1073741824)!==0&&(xe&261930)===0?(un=!0,t.memoizedState=a):(t=vg(),ce.lanes|=t,Ia|=t,n)}function xm(t,n,a,r,c){var f=P.p;P.p=f!==0&&8>f?f:8;var _=L.T,A={};L.T=A,Yu(t,!1,n,a);try{var H=c(),nt=L.S;if(nt!==null&&nt(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ht=lx(H,r);oo(t,n,ht,ti(t))}else oo(t,n,r,ti(t))}catch(gt){oo(t,n,{then:function(){},status:"rejected",reason:gt},ti())}finally{P.p=f,_!==null&&A.types!==null&&(_.types=A.types),L.T=_}}function px(){}function Wu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=Sm(t).queue;xm(t,c,n,rt,a===null?px:function(){return Mm(t),a(r)})}function Sm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:rt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Mm(t){var n=Sm(t);n.next===null&&(n=t.alternate.memoizedState),oo(t,n.next.queue,{},ti())}function qu(){return Mn(To)}function ym(){return an().memoizedState}function Em(){return an().memoizedState}function mx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=Ua(a);var r=Na(n,t,a);r!==null&&(Xn(r,n,a),no(r,n,a)),n={cache:Mu()},t.payload=n;return}n=n.return}}function gx(t,n,a){var r=ti();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(t)?Tm(n,a):(a=uu(t,n,a,r),a!==null&&(Xn(a,t,r),Am(a,n,r)))}function bm(t,n,a){var r=ti();oo(t,n,a,r)}function oo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(t))Tm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(c.hasEagerState=!0,c.eagerState=A,jn(A,_))return ll(t,n,c,0),Xe===null&&ol(),!1}catch{}if(a=uu(t,n,c,r),a!==null)return Xn(a,t,r),Am(a,n,r),!0}return!1}function Yu(t,n,a,r){if(r={lane:2,revertLane:Af(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cl(t)){if(n)throw Error(s(479))}else n=uu(t,a,r,2),n!==null&&Xn(n,t,2)}function Cl(t){var n=t.alternate;return t===ce||n!==null&&n===ce}function Tm(t,n){tr=Ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Am(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ls(t,a)}}var lo={readContext:Mn,use:bl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};lo.useEffectEvent=$e;var Rm={readContext:Mn,use:bl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:um,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Al(4194308,4,pm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Al(4194308,4,t,n)},useInsertionEffect:function(t,n){Al(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var r=t();if(gs){Lt(!0);try{t()}finally{Lt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Ln();if(a!==void 0){var c=a(n);if(gs){Lt(!0);try{a(n)}finally{Lt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=gx.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Hu(t);var n=t.queue,a=bm.bind(null,ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(t,n){var a=Ln();return ku(a,t,n)},useTransition:function(){var t=Hu(!1);return t=xm.bind(null,ce,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ce,c=Ln();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(xe&127)!==0||jp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,um(Kp.bind(null,r,f,t),[t]),r.flags|=2048,nr(9,{destroy:void 0},Zp.bind(null,r,f,a,n),null),a},useId:function(){var t=Ln(),n=Xe.identifierPrefix;if(Me){var a=Li,r=Ni;a=(r&~(1<<32-Nt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=cx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qu,useFormState:sm,useActionState:sm,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:Iu,useCacheRefresh:function(){return Ln().memoizedState=mx.bind(null,ce)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ju={readContext:Mn,use:bl,useCallback:gm,useContext:Mn,useEffect:Vu,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:Tl,useRef:cm,useState:function(){return Tl($i)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=an();return vm(a,He.memoizedState,t,n)},useTransition:function(){var t=Tl($i)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Yp,useId:ym,useHostTransitionStatus:qu,useFormState:rm,useActionState:rm,useOptimistic:function(t,n){var a=an();return $p(a,He,t,n)},useMemoCache:Iu,useCacheRefresh:Em};ju.useEffectEvent=fm;var Cm={readContext:Mn,use:bl,useCallback:gm,useContext:Mn,useEffect:Vu,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:Bu,useRef:cm,useState:function(){return Bu($i)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=an();return He===null?ku(a,t,n):vm(a,He.memoizedState,t,n)},useTransition:function(){var t=Bu($i)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Yp,useId:ym,useHostTransitionStatus:qu,useFormState:lm,useActionState:lm,useOptimistic:function(t,n){var a=an();return He!==null?$p(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:Em};Cm.useEffectEvent=fm;function Zu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ti(),c=Ua(r);c.payload=n,a!=null&&(c.callback=a),n=Na(t,c,r),n!==null&&(Xn(n,t,r),no(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ti(),c=Ua(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Na(t,c,r),n!==null&&(Xn(n,t,r),no(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),r=Ua(a);r.tag=2,n!=null&&(r.callback=n),n=Na(t,r,a),n!==null&&(Xn(n,t,a),no(n,t,a))}};function wm(t,n,a,r,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!jr(a,r)||!jr(c,f):!0}function Dm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Ku.enqueueReplaceState(n,n.state,null)}function _s(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Um(t){rl(t)}function Nm(t){console.error(t)}function Lm(t){rl(t)}function wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Om(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Qu(t,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(t,n)},a}function Pm(t){return t=Ua(t),t.tag=3,t}function zm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Om(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Om(n,a,r),typeof c!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function _x(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&js(n,a,c,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?Gl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ef(t,r,c)),!1;case 22:return a.flags|=65536,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ef(t,r,c)),!1}throw Error(s(435,a.tag))}return Ef(t,r,c),Gl(),!1}if(Me)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==gu&&(t=Error(s(422),{cause:r}),Qr(oi(t,a)))):(r!==gu&&(n=Error(s(423),{cause:r}),Qr(oi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=oi(r,a),c=Qu(t.stateNode,r,c),Ru(t,c),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:r});if(f=oi(f,a),_o===null?_o=[f]:_o.push(f),tn!==4&&(tn=2),n===null)return!0;r=oi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Qu(a.stateNode,r,t),Ru(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fa===null||!Fa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Pm(c),zm(c,t,a,r),Ru(a,c),!1}a=a.return}while(a!==null);return!1}var Ju=Error(s(461)),un=!1;function yn(t,n,a,r){n.child=t===null?Hp(n,null,a,r):ms(n,t.child,a,r)}function Im(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var A in r)A!=="ref"&&(_[A]=r[A])}else _=r;return fs(n),r=Lu(t,n,a,_,f,c),A=Ou(),t!==null&&!un?(Pu(t,n,c),ta(t,n,c)):(Me&&A&&pu(n),n.flags|=1,yn(t,n,r,c),n.child)}function Fm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bm(t,n,f,r,c)):(t=ul(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!of(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:jr,a(_,r)&&t.ref===n.ref)return ta(t,n,c)}return n.flags|=1,t=ji(f,r),t.ref=n.ref,t.return=n,n.child=t}function Bm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(jr(f,r)&&t.ref===n.ref)if(un=!1,n.pendingProps=r=f,of(t,c))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ta(t,n,c)}return $u(t,n,a,r,c)}function Hm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Gm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&pl(n,f!==null?f.cachePool:null),f!==null?Xp(n,f):wu(),kp(n);else return r=n.lanes=536870912,Gm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(pl(n,f.cachePool),Xp(n,f),Oa(),n.memoizedState=null):(t!==null&&pl(n,null),wu(),Oa());return yn(t,n,c,a),n.child}function co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gm(t,n,a,r,c){var f=Eu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&pl(n,null),wu(),kp(n),t!==null&&js(t,n,r,!0),n.childLanes=c,null}function Dl(t,n){return n=Nl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vm(t,n,a){return ms(n,t.child,null,a),t=Dl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function vx(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(r.mode==="hidden")return t=Dl(n,r),n.lanes=536870912,co(null,t);if(Uu(n),(t=ke)?(t=t0(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Tp(t),a.return=n,n.child=a,Sn=n,ke=null)):t=null,t===null)throw Ca(n);return n.lanes=536870912,null}return Dl(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Uu(n),c)if(n.flags&256)n.flags&=-257,n=Vm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||js(t,n,a,!1),c=(a&t.childLanes)!==0,un||c){if(r=Xe,r!==null&&(_=Zo(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,os(t,_),Xn(r,t,_),Ju;Gl(),n=Vm(t,n,a)}else t=f.treeContext,ke=hi(_.nextSibling),Sn=n,Me=!0,Ra=null,ui=!1,t!==null&&Cp(n,t),n=Dl(n,r),n.flags|=4096;return n}return t=ji(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ul(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function $u(t,n,a,r,c){return fs(n),a=Lu(t,n,a,r,void 0,c),r=Ou(),t!==null&&!un?(Pu(t,n,c),ta(t,n,c)):(Me&&r&&pu(n),n.flags|=1,yn(t,n,a,c),n.child)}function Xm(t,n,a,r,c,f){return fs(n),n.updateQueue=null,a=qp(n,r,a,c),Wp(t),r=Ou(),t!==null&&!un?(Pu(t,n,f),ta(t,n,f)):(Me&&r&&pu(n),n.flags|=1,yn(t,n,a,f),n.child)}function km(t,n,a,r,c){if(fs(n),n.stateNode===null){var f=ks,_=a.contextType;typeof _=="object"&&_!==null&&(f=Mn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Tu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Mn(_):ks,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Zu(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Ku.enqueueReplaceState(f,f.state,null),ao(n,r,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,H=_s(a,A);f.props=H;var nt=f.context,ht=a.contextType;_=ks,typeof ht=="object"&&ht!==null&&(_=Mn(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||nt!==_)&&Dm(n,f,r,_),Da=!1;var st=n.memoizedState;f.state=st,ao(n,r,f,c),io(),nt=n.memoizedState,A||st!==nt||Da?(typeof gt=="function"&&(Zu(n,a,gt,r),nt=n.memoizedState),(H=Da||wm(n,a,H,r,st,nt,_))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=_,r=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Au(t,n),_=n.memoizedProps,ht=_s(a,_),f.props=ht,gt=n.pendingProps,st=f.context,nt=a.contextType,H=ks,typeof nt=="object"&&nt!==null&&(H=Mn(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==gt||st!==H)&&Dm(n,f,r,H),Da=!1,st=n.memoizedState,f.state=st,ao(n,r,f,c),io();var ct=n.memoizedState;_!==gt||st!==ct||Da||t!==null&&t.dependencies!==null&&hl(t.dependencies)?(typeof A=="function"&&(Zu(n,a,A,r),ct=n.memoizedState),(ht=Da||wm(n,a,ht,r,st,ct,H)||t!==null&&t.dependencies!==null&&hl(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ct,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ct,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ct),f.props=r,f.state=ct,f.context=H,r=ht):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ul(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ms(n,t.child,null,c),n.child=ms(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ta(t,n,c),t}function Wm(t,n,a,r){return cs(),n.flags|=256,yn(t,n,a,r),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(t){return{baseLanes:t,cachePool:Op()}}function nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function qm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(c?La(n):Oa(),(t=ke)?(t=t0(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Tp(t),a.return=n,n.child=a,Sn=n,ke=null)):t=null,t===null)throw Ca(n);return Bf(t)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,c?(Oa(),c=n.mode,A=Nl({mode:"hidden",children:A},c),r=ls(r,c,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=ef(a),r.childLanes=nf(t,_,a),n.memoizedState=tf,co(null,r)):(La(n),af(n,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=sf(t,n,a)):n.memoizedState!==null?(Oa(),n.child=t.child,n.flags|=128,n=null):(Oa(),A=r.fallback,c=n.mode,r=Nl({mode:"visible",children:r.children},c),A=ls(A,c,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,ms(n,t.child,null,a),r=n.child,r.memoizedState=ef(a),r.childLanes=nf(t,_,a),n.memoizedState=tf,n=co(null,r));else if(La(n),Bf(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var nt=_.dgst;_=nt,r=Error(s(419)),r.stack="",r.digest=_,Qr({value:r,source:null,stack:null}),n=sf(t,n,a)}else if(un||js(t,n,a,!1),_=(a&t.childLanes)!==0,un||_){if(_=Xe,_!==null&&(r=Zo(_,a),r!==0&&r!==H.retryLane))throw H.retryLane=r,os(t,r),Xn(_,t,r),Ju;Ff(A)||Gl(),n=sf(t,n,a)}else Ff(A)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,ke=hi(A.nextSibling),Sn=n,Me=!0,Ra=null,ui=!1,t!==null&&Cp(n,t),n=af(n,r.children),n.flags|=4096);return n}return c?(Oa(),A=r.fallback,c=n.mode,H=t.child,nt=H.sibling,r=ji(H,{mode:"hidden",children:r.children}),r.subtreeFlags=H.subtreeFlags&65011712,nt!==null?A=ji(nt,A):(A=ls(A,c,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,co(null,r),r=n.child,A=t.child.memoizedState,A===null?A=ef(a):(c=A.cachePool,c!==null?(H=ln._currentValue,c=c.parent!==H?{parent:H,pool:H}:c):c=Op(),A={baseLanes:A.baseLanes|a,cachePool:c}),r.memoizedState=A,r.childLanes=nf(t,_,a),n.memoizedState=tf,co(t.child,r)):(La(n),a=t.child,t=a.sibling,a=ji(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function af(t,n){return n=Nl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Nl(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function sf(t,n,a){return ms(n,t.child,null,a),t=af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ym(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),xu(t.return,n,a)}function rf(t,n,a,r,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function jm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=nn.current,A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,_t(nn,_),yn(t,n,r,a),r=Me?Kr:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ym(t,a,n);else if(t.tag===19)Ym(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Sl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),rf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Sl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}rf(n,!0,a,null,f,r);break;case"together":rf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(js(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&hl(t)))}function xx(t,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),wa(n,ln,t.memoizedState.cache),cs();break;case 27:case 5:Zt(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qm(t,n,a):(La(n),t=ta(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(js(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return jm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_t(nn,nn.current),r)break;return null;case 22:return n.lanes=0,Hm(t,n,a,n.pendingProps);case 24:wa(n,ln,t.memoizedState.cache)}return ta(t,n,a)}function Zm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!of(t,a)&&(n.flags&128)===0)return un=!1,xx(t,n,a);un=(t.flags&131072)!==0}else un=!1,Me&&(n.flags&1048576)!==0&&Rp(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ds(n.elementType),n.type=t,typeof t=="function")fu(t)?(r=_s(t,r),n.tag=1,n=km(null,n,t,r,a)):(n.tag=0,n=$u(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=Im(null,n,t,r,a);break t}else if(c===I){n.tag=14,n=Fm(null,n,t,r,a);break t}}throw n=J(t)||t,Error(s(306,n,""))}}return n;case 0:return $u(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=_s(r,n.pendingProps),km(t,n,r,c,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Au(t,n),ao(n,r,null,a);var _=n.memoizedState;if(r=_.cache,wa(n,ln,r),r!==f.cache&&Su(n,[ln],a,!0),io(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Wm(t,n,r,a);break t}else if(r!==c){c=oi(Error(s(424)),n),Qr(c),n=Wm(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ke=hi(t.firstChild),Sn=n,Me=!0,Ra=null,ui=!0,a=Hp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(cs(),r===c){n=ta(t,n,a);break t}yn(t,n,r,a)}n=n.child}return n;case 26:return Ul(t,n),t===null?(a=r0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,t=n.pendingProps,r=jl(at.current).createElement(a),r[sn]=n,r[dn]=t,En(r,a,t),q(r),n.stateNode=r):n.memoizedState=r0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zt(n),t===null&&Me&&(r=n.stateNode=i0(n.type,n.pendingProps,at.current),Sn=n,ui=!0,c=ke,Va(n.type)?(Hf=c,ke=hi(r.firstChild)):ke=c),yn(t,n,n.pendingProps.children,a),Ul(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((c=r=ke)&&(r=Zx(r,n.type,n.pendingProps,ui),r!==null?(n.stateNode=r,Sn=n,ke=hi(r.firstChild),ui=!1,c=!0):c=!1),c||Ca(n)),Zt(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,Pf(c,f)?r=null:_!==null&&Pf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Lu(t,n,ux,null,null,a),To._currentValue=c),Ul(t,n),yn(t,n,r,a),n.child;case 6:return t===null&&Me&&((t=a=ke)&&(a=Kx(a,n.pendingProps,ui),a!==null?(n.stateNode=a,Sn=n,ke=null,t=!0):t=!1),t||Ca(n)),null;case 13:return qm(t,n,a);case 4:return bt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ms(n,null,r,a):yn(t,n,r,a),n.child;case 11:return Im(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,wa(n,n.type,r.value),yn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,fs(n),c=Mn(c),r=r(c),n.flags|=1,yn(t,n,r,a),n.child;case 14:return Fm(t,n,n.type,n.pendingProps,a);case 15:return Bm(t,n,n.type,n.pendingProps,a);case 19:return jm(t,n,a);case 31:return vx(t,n,a);case 22:return Hm(t,n,a,n.pendingProps);case 24:return fs(n),r=Mn(ln),t===null?(c=Eu(),c===null&&(c=Xe,f=Mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Tu(n),wa(n,ln,c)):((t.lanes&a)!==0&&(Au(t,n),ao(n,null,null,a),io()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),wa(n,ln,r)):(r=f.cache,wa(n,ln,r),r!==c.cache&&Su(n,[ln],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ea(t){t.flags|=4}function lf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(yg())t.flags|=8192;else throw ps=gl,bu}else t.flags&=-16777217}function Km(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!f0(n))if(yg())t.flags|=8192;else throw ps=gl,bu}function Ll(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ze():536870912,t.lanes|=n,rr|=n)}function uo(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Sx(t,n,a){var r=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Qi(ln),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ys(n)?ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_u())),We(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ea(n),f!==null?(We(n),Km(n,f)):(We(n),lf(n,c,null,r,a))):f?f!==t.memoizedState?(ea(n),We(n),Km(n,f)):(We(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ea(n),We(n),lf(n,c,t,r,a)),null;case 27:if(Jt(n),a=at.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}t=At.current,Ys(n)?wp(n):(t=i0(c,r,a),n.stateNode=t,ea(n))}return We(n),null;case 5:if(Jt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(f=At.current,Ys(n))wp(n);else{var _=jl(at.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[sn]=n,f[dn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(En(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ea(n)}}return We(n),lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ea(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=at.current,Ys(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||qg(t.nodeValue,a)),t||Ca(n,!0)}else t=jl(t).createTextNode(r),t[sn]=n,n.stateNode=t}return We(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ys(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[sn]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),t=!1}else a=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return We(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ys(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[sn]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),We(n),null);case 4:return Vt(),t===null&&Df(n.stateNode.containerInfo),We(n),null;case 10:return Qi(n.type),We(n),null;case 19:if(K(nn),r=n.memoizedState,r===null)return We(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)uo(r,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Sl(t),f!==null){for(n.flags|=128,uo(r,!1),t=f.updateQueue,n.updateQueue=t,Ll(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)bp(a,t),a=a.sibling;return _t(nn,nn.current&1|2),Me&&Zi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&E()>Fl&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304)}else{if(!c)if(t=Sl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ll(n,t),uo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Me)return We(n),null}else 2*E()-r.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=E(),t.sibling=null,a=nn.current,_t(nn,c?a&1|2:a&1),Me&&Zi(n,r.treeForkCount),t):(We(n),null);case 22:case 23:return Qn(n),Du(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&K(hs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(ln),We(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Mx(t,n){switch(mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Qi(ln),Vt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Jt(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(nn),null;case 4:return Vt(),null;case 10:return Qi(n.type),null;case 22:case 23:return Qn(n),Du(),t!==null&&K(hs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Qi(ln),null;case 25:return null;default:return null}}function Qm(t,n){switch(mu(n),n.tag){case 3:Qi(ln),Vt();break;case 26:case 27:case 5:Jt(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:K(nn);break;case 10:Qi(n.type);break;case 22:case 23:Qn(n),Du(),t!==null&&K(hs);break;case 24:Qi(ln)}}function fo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(A){Fe(n,n.return,A)}}function Pa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var _=r.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,c=n;var H=a,nt=A;try{nt()}catch(ht){Fe(c,H,ht)}}}r=r.next}while(r!==f)}}catch(ht){Fe(n,n.return,ht)}}function Jm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Vp(n,a)}catch(r){Fe(t,t.return,r)}}}function $m(t,n,a){a.props=_s(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Fe(t,n,r)}}function ho(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Fe(t,n,c)}}function Oi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Fe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(t,n,c)}else a.current=null}function tg(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Fe(t,t.return,c)}}function cf(t,n,a){try{var r=t.stateNode;Xx(r,t.type,a,n),r[dn]=n}catch(c){Fe(t,t.return,c)}}function eg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function uf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(r!==4&&(r===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,a),t=t.sibling;t!==null;)ff(t,n,a),t=t.sibling}function Ol(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ol(t,n,a),t=t.sibling;t!==null;)Ol(t,n,a),t=t.sibling}function ng(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,r,a),n[sn]=t,n[dn]=a}catch(f){Fe(t,t.return,f)}}var na=!1,fn=!1,hf=!1,ig=typeof WeakSet=="function"?WeakSet:Set,vn=null;function yx(t,n){if(t=t.containerInfo,Lf=ec,t=mp(t),au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,A=-1,H=-1,nt=0,ht=0,gt=t,st=null;e:for(;;){for(var ct;gt!==a||c!==0&&gt.nodeType!==3||(A=_+c),gt!==f||r!==0&&gt.nodeType!==3||(H=_+r),gt.nodeType===3&&(_+=gt.nodeValue.length),(ct=gt.firstChild)!==null;)st=gt,gt=ct;for(;;){if(gt===t)break e;if(st===a&&++nt===c&&(A=_),st===f&&++ht===r&&(H=_),(ct=gt.nextSibling)!==null)break;gt=st,st=gt.parentNode}gt=ct}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:t,selectionRange:a},ec=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ht=_s(a.type,c);t=r.getSnapshotBeforeUpdate(Ht,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Qt){Fe(a,a.return,Qt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)If(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":If(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function ag(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:aa(t,a),r&4&&fo(5,a);break;case 1:if(aa(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Fe(a,a.return,_)}else{var c=_s(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Fe(a,a.return,_)}}r&64&&Jm(a),r&512&&ho(a,a.return);break;case 3:if(aa(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vp(t,n)}catch(_){Fe(a,a.return,_)}}break;case 27:n===null&&r&4&&ng(a);case 26:case 5:aa(t,a),n===null&&r&4&&tg(a),r&512&&ho(a,a.return);break;case 12:aa(t,a);break;case 31:aa(t,a),r&4&&og(t,a);break;case 13:aa(t,a),r&4&&lg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ux.bind(null,a),Qx(t,a))));break;case 22:if(r=a.memoizedState!==null||na,!r){n=n!==null&&n.memoizedState!==null||fn,c=na;var f=fn;na=r,(fn=n)&&!f?sa(t,a,(a.subtreeFlags&8772)!==0):aa(t,a),na=c,fn=f}break;case 30:break;default:aa(t,a)}}function sg(t){var n=t.alternate;n!==null&&(t.alternate=null,sg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Hr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,Bn=!1;function ia(t,n,a){for(a=a.child;a!==null;)rg(t,n,a),a=a.sibling}function rg(t,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:fn||Oi(a,n),ia(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Oi(a,n);var r=Ze,c=Bn;Va(a.type)&&(Ze=a.stateNode,Bn=!1),ia(t,n,a),yo(a.stateNode),Ze=r,Bn=c;break;case 5:fn||Oi(a,n);case 6:if(r=Ze,c=Bn,Ze=null,ia(t,n,a),Ze=r,Bn=c,Ze!==null)if(Bn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Ze!==null&&(Bn?(t=Ze,Jg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),pr(t)):Jg(Ze,a.stateNode));break;case 4:r=Ze,c=Bn,Ze=a.stateNode.containerInfo,Bn=!0,ia(t,n,a),Ze=r,Bn=c;break;case 0:case 11:case 14:case 15:Pa(2,a,n),fn||Pa(4,a,n),ia(t,n,a);break;case 1:fn||(Oi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&$m(a,n,r)),ia(t,n,a);break;case 21:ia(t,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,ia(t,n,a),fn=r;break;default:ia(t,n,a)}}function og(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{pr(t)}catch(a){Fe(n,n.return,a)}}}function lg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{pr(t)}catch(a){Fe(n,n.return,a)}}function Ex(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ig),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ig),n;default:throw Error(s(435,t.tag))}}function Pl(t,n){var a=Ex(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Nx.bind(null,t,r);r.then(c,c)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,_=n,A=_;t:for(;A!==null;){switch(A.tag){case 27:if(Va(A.type)){Ze=A.stateNode,Bn=!1;break t}break;case 5:Ze=A.stateNode,Bn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Bn=!0;break t}A=A.return}if(Ze===null)throw Error(s(160));rg(f,_,c),Ze=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)cg(n,t),n=n.sibling}var Ei=null;function cg(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),r&4&&(Pa(3,t,t.return),fo(3,t),Pa(5,t,t.return));break;case 1:Hn(n,t),Gn(t),r&512&&(fn||a===null||Oi(a,a.return)),r&64&&na&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=Ei;if(Hn(n,t),Gn(t),r&512&&(fn||a===null||Oi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ns]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,r,a),f[sn]=t,q(f),r=f;break t;case"link":var _=c0("link","href",c).get(r+(a.href||""));if(_){for(var A=0;A<_.length;A++)if(f=_[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(A,1);break e}}f=c.createElement(r),En(f,r,a),c.head.appendChild(f);break;case"meta":if(_=c0("meta","content",c).get(r+(a.content||""))){for(A=0;A<_.length;A++)if(f=_[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(A,1);break e}}f=c.createElement(r),En(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=t,q(f),r=f}t.stateNode=r}else u0(c,t.type,t.stateNode);else t.stateNode=l0(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?u0(c,t.type,t.stateNode):l0(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&cf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),r&512&&(fn||a===null||Oi(a,a.return)),a!==null&&r&4&&cf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),r&512&&(fn||a===null||Oi(a,a.return)),t.flags&32){c=t.stateNode;try{Nn(c,"")}catch(Ht){Fe(t,t.return,Ht)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,cf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(hf=!0);break;case 6:if(Hn(n,t),Gn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ht){Fe(t,t.return,Ht)}}break;case 3:if(Ql=null,c=Ei,Ei=Zl(n.containerInfo),Hn(n,t),Ei=c,Gn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(Ht){Fe(t,t.return,Ht)}hf&&(hf=!1,ug(t));break;case 4:r=Ei,Ei=Zl(t.stateNode.containerInfo),Hn(n,t),Gn(t),Ei=r;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Pl(t,r)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Il=E()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Pl(t,r)));break;case 22:c=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,nt=na,ht=fn;if(na=nt||c,fn=ht||H,Hn(n,t),fn=ht,na=nt,Gn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||H||na||fn||vs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=H.stateNode;var gt=H.memoizedProps.style,st=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Ht){Fe(H,H.return,Ht)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=c?"":H.memoizedProps}catch(Ht){Fe(H,H.return,Ht)}}}else if(n.tag===18){if(a===null){H=n;try{var ct=H.stateNode;c?$g(ct,!0):$g(H.stateNode,!1)}catch(Ht){Fe(H,H.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Pl(t,a))));break;case 19:Hn(n,t),Gn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Pl(t,r)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(eg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(t);Ol(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Nn(_,""),a.flags&=-33);var A=uf(t);Ol(t,A,_);break;case 3:case 4:var H=a.stateNode.containerInfo,nt=uf(t);ff(t,nt,H);break;default:throw Error(s(161))}}catch(ht){Fe(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ug(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function aa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ag(t,n.alternate,n),n=n.sibling}function vs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),vs(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$m(n,n.return,a),vs(n);break;case 27:yo(n.stateNode);case 26:case 5:Oi(n,n.return),vs(n);break;case 22:n.memoizedState===null&&vs(n);break;case 30:vs(n);break;default:vs(n)}t=t.sibling}}function sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:sa(c,f,a),fo(4,f);break;case 1:if(sa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){Fe(r,r.return,nt)}if(r=f,c=r.updateQueue,c!==null){var A=r.stateNode;try{var H=c.shared.hiddenCallbacks;if(H!==null)for(c.shared.hiddenCallbacks=null,c=0;c<H.length;c++)Gp(H[c],A)}catch(nt){Fe(r,r.return,nt)}}a&&_&64&&Jm(f),ho(f,f.return);break;case 27:ng(f);case 26:case 5:sa(c,f,a),a&&r===null&&_&4&&tg(f),ho(f,f.return);break;case 12:sa(c,f,a);break;case 31:sa(c,f,a),a&&_&4&&og(c,f);break;case 13:sa(c,f,a),a&&_&4&&lg(c,f);break;case 22:f.memoizedState===null&&sa(c,f,a),ho(f,f.return);break;case 30:break;default:sa(c,f,a)}n=n.sibling}}function df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Jr(a))}function pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t))}function bi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fg(t,n,a,r),n=n.sibling}function fg(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,r),c&2048&&fo(9,n);break;case 1:bi(t,n,a,r);break;case 3:bi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t)));break;case 12:if(c&2048){bi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,A=f.onPostCommit;typeof A=="function"&&A(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Fe(n,n.return,H)}}else bi(t,n,a,r);break;case 31:bi(t,n,a,r);break;case 13:bi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?bi(t,n,a,r):po(t,n):f._visibility&2?bi(t,n,a,r):(f._visibility|=2,ir(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&df(_,n);break;case 24:bi(t,n,a,r),c&2048&&pf(n.alternate,n);break;default:bi(t,n,a,r)}}function ir(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,A=a,H=r,nt=_.flags;switch(_.tag){case 0:case 11:case 15:ir(f,_,A,H,c),fo(8,_);break;case 23:break;case 22:var ht=_.stateNode;_.memoizedState!==null?ht._visibility&2?ir(f,_,A,H,c):po(f,_):(ht._visibility|=2,ir(f,_,A,H,c)),c&&nt&2048&&df(_.alternate,_);break;case 24:ir(f,_,A,H,c),c&&nt&2048&&pf(_.alternate,_);break;default:ir(f,_,A,H,c)}n=n.sibling}}function po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:po(a,r),c&2048&&df(r.alternate,r);break;case 24:po(a,r),c&2048&&pf(r.alternate,r);break;default:po(a,r)}n=n.sibling}}var mo=8192;function ar(t,n,a){if(t.subtreeFlags&mo)for(t=t.child;t!==null;)hg(t,n,a),t=t.sibling}function hg(t,n,a){switch(t.tag){case 26:ar(t,n,a),t.flags&mo&&t.memoizedState!==null&&cS(a,Ei,t.memoizedState,t.memoizedProps);break;case 5:ar(t,n,a);break;case 3:case 4:var r=Ei;Ei=Zl(t.stateNode.containerInfo),ar(t,n,a),Ei=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=mo,mo=16777216,ar(t,n,a),mo=r):ar(t,n,a));break;default:ar(t,n,a)}}function dg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,mg(r,t)}dg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pg(t),t=t.sibling}function pg(t){switch(t.tag){case 0:case 11:case 15:go(t),t.flags&2048&&Pa(9,t,t.return);break;case 3:go(t);break;case 12:go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zl(t)):go(t);break;default:go(t)}}function zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,mg(r,t)}dg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}t=t.sibling}}function mg(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=t;vn!==null;){r=vn;var c=r.sibling,f=r.return;if(sg(r),r===a){vn=null;break t}if(c!==null){c.return=f,vn=c;break t}vn=f}}}var bx={getCacheForType:function(t){var n=Mn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(ln).controller.signal}},Tx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Xe=null,ge=null,xe=0,Ie=0,Jn=null,za=!1,sr=!1,mf=!1,ra=0,tn=0,Ia=0,xs=0,gf=0,$n=0,rr=0,_o=null,Vn=null,_f=!1,Il=0,gg=0,Fl=1/0,Bl=null,Fa=null,mn=0,Ba=null,or=null,oa=0,vf=0,xf=null,_g=null,vo=0,Sf=null;function ti(){return(Ne&2)!==0&&xe!==0?xe&-xe:L.T!==null?Af():Ui()}function vg(){if($n===0)if((xe&536870912)===0||Me){var t=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Xn(t,n,a){(t===Xe&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(lr(t,0),Ha(t,xe,$n,!1)),wn(t,a),((Ne&2)===0||t!==Xe)&&(t===Xe&&((Ne&2)===0&&(xs|=a),tn===4&&Ha(t,xe,$n,!1)),Pi(t))}function xg(t,n,a){if((Ne&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ft(t,n),c=r?Cx(t,n):yf(t,n,!0),f=r;do{if(c===0){sr&&!r&&Ha(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ax(a)){c=yf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=t;c=_o;var H=A.current.memoizedState.isDehydrated;if(H&&(lr(A,_).flags|=256),_=yf(A,_,!1),_!==2){if(mf&&!H){A.errorRecoveryDisabledLanes|=f,xs|=f,c=4;break t}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){lr(t,0),Ha(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ha(r,n,$n,!za);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Il+300-E(),10<c)){if(Ha(r,n,$n,!za),ut(r,0,!0)!==0)break t;oa=n,r.timeoutHandle=Kg(Sg.bind(null,r,a,Vn,Bl,_f,n,$n,xs,rr,za,f,"Throttled",-0,0),c);break t}Sg(r,a,Vn,Bl,_f,n,$n,xs,rr,za,f,null,-0,0)}}break}while(!0);Pi(t)}function Sg(t,n,a,r,c,f,_,A,H,nt,ht,gt,st,ct){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},hg(n,f,gt);var Ht=(f&62914560)===f?Il-E():(f&4194048)===f?gg-E():0;if(Ht=uS(gt,Ht),Ht!==null){oa=f,t.cancelPendingCommit=Ht(Cg.bind(null,t,n,f,a,r,c,_,A,H,ht,gt,null,st,ct)),Ha(t,f,_,!nt);return}}Cg(t,n,f,a,r,c,_,A,H)}function Ax(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!jn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(t,n,a,r){n&=~gf,n&=~xs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Nt(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Br(t,a,n)}function Hl(){return(Ne&6)===0?(xo(0),!1):!0}function Mf(){if(ge!==null){if(Ie===0)var t=ge.return;else t=ge,Ki=us=null,zu(t),Js=null,to=0,t=ge;for(;t!==null;)Qm(t.alternate,t),t=t.return;ge=null}}function lr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,qx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),oa=0,Mf(),Xe=t,ge=a=ji(t.current,null),xe=n,Ie=0,Jn=null,za=!1,sr=Ft(t,n),mf=!1,rr=$n=gf=xs=Ia=tn=0,Vn=_o=null,_f=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Nt(r),f=1<<c;n|=t[c],r&=~f}return ra=n,ol(),a}function Mg(t,n){ce=null,L.H=lo,n===Qs||n===ml?(n=Ip(),Ie=3):n===bu?(n=Ip(),Ie=4):Ie=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,ge===null&&(tn=1,wl(t,oi(n,t.current)))}function yg(){var t=Kn.current;return t===null?!0:(xe&4194048)===xe?fi===null:(xe&62914560)===xe||(xe&536870912)!==0?t===fi:!1}function Eg(){var t=L.H;return L.H=lo,t===null?lo:t}function bg(){var t=L.A;return L.A=bx,t}function Gl(){tn=4,za||(xe&4194048)!==xe&&Kn.current!==null||(sr=!0),(Ia&134217727)===0&&(xs&134217727)===0||Xe===null||Ha(Xe,xe,$n,!1)}function yf(t,n,a){var r=Ne;Ne|=2;var c=Eg(),f=bg();(Xe!==t||xe!==n)&&(Bl=null,lr(t,n)),n=!1;var _=tn;t:do try{if(Ie!==0&&ge!==null){var A=ge,H=Jn;switch(Ie){case 8:Mf(),_=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var nt=Ie;if(Ie=0,Jn=null,cr(t,A,H,nt),a&&sr){_=0;break t}break;default:nt=Ie,Ie=0,Jn=null,cr(t,A,H,nt)}}Rx(),_=tn;break}catch(ht){Mg(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Ki=us=null,Ne=r,L.H=c,L.A=f,ge===null&&(Xe=null,xe=0,ol()),_}function Rx(){for(;ge!==null;)Tg(ge)}function Cx(t,n){var a=Ne;Ne|=2;var r=Eg(),c=bg();Xe!==t||xe!==n?(Bl=null,Fl=E()+500,lr(t,n)):sr=Ft(t,n);t:do try{if(Ie!==0&&ge!==null){n=ge;var f=Jn;e:switch(Ie){case 1:Ie=0,Jn=null,cr(t,n,f,1);break;case 2:case 9:if(Pp(f)){Ie=0,Jn=null,Ag(n);break}n=function(){Ie!==2&&Ie!==9||Xe!==t||(Ie=7),Pi(t)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Pp(f)?(Ie=0,Jn=null,Ag(n)):(Ie=0,Jn=null,cr(t,n,f,7));break;case 5:var _=null;switch(ge.tag){case 26:_=ge.memoizedState;case 5:case 27:var A=ge;if(_?f0(_):A.stateNode.complete){Ie=0,Jn=null;var H=A.sibling;if(H!==null)ge=H;else{var nt=A.return;nt!==null?(ge=nt,Vl(nt)):ge=null}break e}}Ie=0,Jn=null,cr(t,n,f,5);break;case 6:Ie=0,Jn=null,cr(t,n,f,6);break;case 8:Mf(),tn=6;break t;default:throw Error(s(462))}}wx();break}catch(ht){Mg(t,ht)}while(!0);return Ki=us=null,L.H=r,L.A=c,Ne=a,ge!==null?0:(Xe=null,xe=0,ol(),tn)}function wx(){for(;ge!==null&&!Wt();)Tg(ge)}function Tg(t){var n=Zm(t.alternate,t,ra);t.memoizedProps=t.pendingProps,n===null?Vl(t):ge=n}function Ag(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Xm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Xm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:zu(n);default:Qm(a,n),n=ge=bp(n,ra),n=Zm(a,n,ra)}t.memoizedProps=t.pendingProps,n===null?Vl(t):ge=n}function cr(t,n,a,r){Ki=us=null,zu(n),Js=null,to=0;var c=n.return;try{if(_x(t,c,n,a,xe)){tn=1,wl(t,oi(a,t.current)),ge=null;return}}catch(f){if(c!==null)throw ge=c,f;tn=1,wl(t,oi(a,t.current)),ge=null;return}n.flags&32768?(Me||r===1?t=!0:sr||(xe&536870912)!==0?t=!1:(za=t=!0,(r===2||r===9||r===3||r===6)&&(r=Kn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Rg(n,t)):Vl(n)}function Vl(t){var n=t;do{if((n.flags&32768)!==0){Rg(n,za);return}t=n.return;var a=Sx(n.alternate,n,ra);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);tn===0&&(tn=5)}function Rg(t,n){do{var a=Mx(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);tn=6,ge=null}function Cg(t,n,a,r,c,f,_,A,H){t.cancelPendingCommit=null;do Xl();while(mn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=cu,vi(t,a,f,_,A,H),t===Xe&&(ge=Xe=null,xe=0),or=n,Ba=t,oa=a,vf=f,xf=c,_g=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Lx(ft,function(){return Lg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,c=P.p,P.p=2,_=Ne,Ne|=4;try{yx(t,n,a)}finally{Ne=_,P.p=c,L.T=r}}mn=1,wg(),Dg(),Ug()}}function wg(){if(mn===1){mn=0;var t=Ba,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var r=P.p;P.p=2;var c=Ne;Ne|=4;try{cg(n,t);var f=Of,_=mp(t.containerInfo),A=f.focusedElem,H=f.selectionRange;if(_!==A&&A&&A.ownerDocument&&pp(A.ownerDocument.documentElement,A)){if(H!==null&&au(A)){var nt=H.start,ht=H.end;if(ht===void 0&&(ht=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(ht,A.value.length);else{var gt=A.ownerDocument||document,st=gt&&gt.defaultView||window;if(st.getSelection){var ct=st.getSelection(),Ht=A.textContent.length,Qt=Math.min(H.start,Ht),Ve=H.end===void 0?Qt:Math.min(H.end,Ht);!ct.extend&&Qt>Ve&&(_=Ve,Ve=Qt,Qt=_);var Q=dp(A,Qt),W=dp(A,Ve);if(Q&&W&&(ct.rangeCount!==1||ct.anchorNode!==Q.node||ct.anchorOffset!==Q.offset||ct.focusNode!==W.node||ct.focusOffset!==W.offset)){var et=gt.createRange();et.setStart(Q.node,Q.offset),ct.removeAllRanges(),Qt>Ve?(ct.addRange(et),ct.extend(W.node,W.offset)):(et.setEnd(W.node,W.offset),ct.addRange(et))}}}}for(gt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&gt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}ec=!!Lf,Of=Lf=null}finally{Ne=c,P.p=r,L.T=a}}t.current=n,mn=2}}function Dg(){if(mn===2){mn=0;var t=Ba,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var r=P.p;P.p=2;var c=Ne;Ne|=4;try{ag(t,n.alternate,n)}finally{Ne=c,P.p=r,L.T=a}}mn=3}}function Ug(){if(mn===4||mn===3){mn=0,O();var t=Ba,n=or,a=oa,r=_g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,or=Ba=null,Ng(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Fa=null),Ps(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=L.T,c=P.p,P.p=2,L.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var A=r[_];f(A.value,{componentStack:A.stack})}}finally{L.T=n,P.p=c}}(oa&3)!==0&&Xl(),Pi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Sf?vo++:(vo=0,Sf=t):vo=0,xo(0)}}function Ng(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Jr(n)))}function Xl(){return wg(),Dg(),Ug(),Lg()}function Lg(){if(mn!==5)return!1;var t=Ba,n=vf;vf=0;var a=Ps(oa),r=L.T,c=P.p;try{P.p=32>a?32:a,L.T=null,a=xf,xf=null;var f=Ba,_=oa;if(mn=0,or=Ba=null,oa=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,pg(f.current),fg(f,f.current,_,a),Ne=A,xo(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{P.p=c,L.T=r,Ng(t,n)}}function Og(t,n,a){n=oi(a,n),n=Qu(t.stateNode,n,2),t=Na(t,n,2),t!==null&&(wn(t,2),Pi(t))}function Fe(t,n,a){if(t.tag===3)Og(t,t,a);else for(;n!==null;){if(n.tag===3){Og(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fa===null||!Fa.has(r))){t=oi(a,t),a=Pm(2),r=Na(n,a,2),r!==null&&(zm(a,r,n,t),wn(r,2),Pi(r));break}}n=n.return}}function Ef(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Tx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(mf=!0,c.add(a),t=Dx.bind(null,t,n,a),n.then(t,t))}function Dx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(xe&a)===a&&(tn===4||tn===3&&(xe&62914560)===xe&&300>E()-Il?(Ne&2)===0&&lr(t,0):gf|=a,rr===xe&&(rr=0)),Pi(t)}function Pg(t,n){n===0&&(n=ze()),t=os(t,n),t!==null&&(wn(t,n),Pi(t))}function Ux(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Pg(t,a)}function Nx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Pg(t,a)}function Lx(t,n){return Ee(t,n)}var kl=null,ur=null,bf=!1,Wl=!1,Tf=!1,Ga=0;function Pi(t){t!==ur&&t.next===null&&(ur===null?kl=ur=t:ur=ur.next=t),Wl=!0,bf||(bf=!0,Px())}function xo(t,n){if(!Tf&&Wl){Tf=!0;do for(var a=!1,r=kl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Nt(42|t)+1)-1,f&=c&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Bg(r,f))}else f=xe,f=ut(r,r===Xe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ft(r,f)||(a=!0,Bg(r,f));r=r.next}while(a);Tf=!1}}function Ox(){zg()}function zg(){Wl=bf=!1;var t=0;Ga!==0&&Wx()&&(t=Ga);for(var n=E(),a=null,r=kl;r!==null;){var c=r.next,f=Ig(r,n);f===0?(r.next=null,a===null?kl=c:a.next=c,c===null&&(ur=a)):(a=r,(t!==0||(f&3)!==0)&&(Wl=!0)),r=c}mn!==0&&mn!==5||xo(t),Ga!==0&&(Ga=0)}function Ig(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Nt(f),A=1<<_,H=c[_];H===-1?((A&a)===0||(A&r)!==0)&&(c[_]=ne(A,n)):H<=n&&(t.expiredLanes|=A),f&=~A}if(n=Xe,a=xe,a=ut(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Le(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ft(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Le(r),Ps(a)){case 2:case 8:a=xt;break;case 32:a=ft;break;case 268435456:a=Ct;break;default:a=ft}return r=Fg.bind(null,t),a=Ee(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Le(r),t.callbackPriority=2,t.callbackNode=null,2}function Fg(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xl()&&t.callbackNode!==a)return null;var r=xe;return r=ut(t,t===Xe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(xg(t,r,n),Ig(t,E()),t.callbackNode!=null&&t.callbackNode===a?Fg.bind(null,t):null)}function Bg(t,n){if(Xl())return null;xg(t,n,!0)}function Px(){Yx(function(){(Ne&6)!==0?Ee(pt,Ox):zg()})}function Af(){if(Ga===0){var t=Zs;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ga=t}return Ga}function Hg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$o(""+t)}function Gg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function zx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Hg((c[dn]||null).action),_=r.submitter;_&&(n=(n=_[dn]||null)?Hg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new il("action","action",null,r,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ga!==0){var H=_?Gg(c,_):new FormData(c);Wu(a,{pending:!0,data:H,method:c.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=_?Gg(c,_):new FormData(c),Wu(a,{pending:!0,data:H,method:c.method,action:f},f,H))},currentTarget:c}]})}}for(var Rf=0;Rf<lu.length;Rf++){var Cf=lu[Rf],Ix=Cf.toLowerCase(),Fx=Cf[0].toUpperCase()+Cf.slice(1);yi(Ix,"on"+Fx)}yi(vp,"onAnimationEnd"),yi(xp,"onAnimationIteration"),yi(Sp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(tx,"onTransitionRun"),yi(ex,"onTransitionStart"),yi(nx,"onTransitionCancel"),yi(Mp,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Vg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var A=r[_],H=A.instance,nt=A.currentTarget;if(A=A.listener,H!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=nt;try{f(c)}catch(ht){rl(ht)}c.currentTarget=null,f=H}else for(_=0;_<r.length;_++){if(A=r[_],H=A.instance,nt=A.currentTarget,A=A.listener,H!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=nt;try{f(c)}catch(ht){rl(ht)}c.currentTarget=null,f=H}}}}function _e(t,n){var a=n[ya];a===void 0&&(a=n[ya]=new Set);var r=t+"__bubble";a.has(r)||(Xg(n,t,2,!1),a.add(r))}function wf(t,n,a){var r=0;n&&(r|=4),Xg(a,t,r,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Df(t){if(!t[ql]){t[ql]=!0,lt.forEach(function(a){a!=="selectionchange"&&(Bx.has(a)||wf(a,!1,t),wf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ql]||(n[ql]=!0,wf("selectionchange",!1,n))}}function Xg(t,n,a,r){switch(v0(n)){case 2:var c=dS;break;case 8:c=pS;break;default:c=Wf}a=c.bind(null,n,a,t),c=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Uf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var A=r.stateNode.containerInfo;if(A===c)break;if(_===4)for(_=r.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;A!==null;){if(_=Ea(A),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){r=f=_;continue t}A=A.parentNode}}r=r.return}jd(function(){var nt=f,ht=Yc(a),gt=[];t:{var st=yp.get(t);if(st!==void 0){var ct=il,Ht=t;switch(t){case"keypress":if(el(a)===0)break t;case"keydown":case"keyup":ct=Nv;break;case"focusin":Ht="focus",ct=$c;break;case"focusout":Ht="blur",ct=$c;break;case"beforeblur":case"afterblur":ct=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Pv;break;case vp:case xp:case Sp:ct=Ev;break;case Mp:ct=Iv;break;case"scroll":case"scrollend":ct=vv;break;case"wheel":ct=Bv;break;case"copy":case"cut":case"paste":ct=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=$d;break;case"toggle":case"beforetoggle":ct=Gv}var Qt=(n&4)!==0,Ve=!Qt&&(t==="scroll"||t==="scrollend"),Q=Qt?st!==null?st+"Capture":null:st;Qt=[];for(var W=nt,et;W!==null;){var mt=W;if(et=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||et===null||Q===null||(mt=Gr(W,Q),mt!=null&&Qt.push(Mo(W,mt,et))),Ve)break;W=W.return}0<Qt.length&&(st=new ct(st,Ht,null,a,ht),gt.push({event:st,listeners:Qt}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",ct=t==="mouseout"||t==="pointerout",st&&a!==qc&&(Ht=a.relatedTarget||a.fromElement)&&(Ea(Ht)||Ht[ki]))break t;if((ct||st)&&(st=ht.window===ht?ht:(st=ht.ownerDocument)?st.defaultView||st.parentWindow:window,ct?(Ht=a.relatedTarget||a.toElement,ct=nt,Ht=Ht?Ea(Ht):null,Ht!==null&&(Ve=u(Ht),Qt=Ht.tag,Ht!==Ve||Qt!==5&&Qt!==27&&Qt!==6)&&(Ht=null)):(ct=null,Ht=nt),ct!==Ht)){if(Qt=Qd,mt="onMouseLeave",Q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=$d,mt="onPointerLeave",Q="onPointerEnter",W="pointer"),Ve=ct==null?st:is(ct),et=Ht==null?st:is(Ht),st=new Qt(mt,W+"leave",ct,a,ht),st.target=Ve,st.relatedTarget=et,mt=null,Ea(ht)===nt&&(Qt=new Qt(Q,W+"enter",Ht,a,ht),Qt.target=et,Qt.relatedTarget=Ve,mt=Qt),Ve=mt,ct&&Ht)e:{for(Qt=Hx,Q=ct,W=Ht,et=0,mt=Q;mt;mt=Qt(mt))et++;mt=0;for(var Kt=W;Kt;Kt=Qt(Kt))mt++;for(;0<et-mt;)Q=Qt(Q),et--;for(;0<mt-et;)W=Qt(W),mt--;for(;et--;){if(Q===W||W!==null&&Q===W.alternate){Qt=Q;break e}Q=Qt(Q),W=Qt(W)}Qt=null}else Qt=null;ct!==null&&kg(gt,st,ct,Qt,!1),Ht!==null&&Ve!==null&&kg(gt,Ve,Ht,Qt,!0)}}t:{if(st=nt?is(nt):window,ct=st.nodeName&&st.nodeName.toLowerCase(),ct==="select"||ct==="input"&&st.type==="file")var Ce=op;else if(sp(st))if(lp)Ce=Qv;else{Ce=Zv;var qt=jv}else ct=st.nodeName,!ct||ct.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&Is(nt.elementType)&&(Ce=op):Ce=Kv;if(Ce&&(Ce=Ce(t,nt))){rp(gt,Ce,a,ht);break t}qt&&qt(t,st,nt),t==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&Si(st,"number",st.value)}switch(qt=nt?is(nt):window,t){case"focusin":(sp(qt)||qt.contentEditable==="true")&&(Gs=qt,su=nt,Zr=null);break;case"focusout":Zr=su=Gs=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,gp(gt,a,ht);break;case"selectionchange":if($v)break;case"keydown":case"keyup":gp(gt,a,ht)}var he;if(eu)t:{switch(t){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Hs?ip(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(tp&&a.locale!=="ko"&&(Hs||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Hs&&(he=Zd()):(Ta=ht,Kc="value"in Ta?Ta.value:Ta.textContent,Hs=!0)),qt=Yl(nt,Se),0<qt.length&&(Se=new Jd(Se,t,null,a,ht),gt.push({event:Se,listeners:qt}),he?Se.data=he:(he=ap(a),he!==null&&(Se.data=he)))),(he=Xv?kv(t,a):Wv(t,a))&&(Se=Yl(nt,"onBeforeInput"),0<Se.length&&(qt=new Jd("onBeforeInput","beforeinput",null,a,ht),gt.push({event:qt,listeners:Se}),qt.data=he)),zx(gt,t,nt,a,ht)}Vg(gt,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Yl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gr(t,a),c!=null&&r.unshift(Mo(t,c,f)),c=Gr(t,n),c!=null&&r.push(Mo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Hx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function kg(t,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var A=a,H=A.alternate,nt=A.stateNode;if(A=A.tag,H!==null&&H===r)break;A!==5&&A!==26&&A!==27||nt===null||(H=nt,c?(nt=Gr(a,f),nt!=null&&_.unshift(Mo(a,nt,H))):c||(nt=Gr(a,f),nt!=null&&_.push(Mo(a,nt,H)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Gx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function Wg(t){return(typeof t=="string"?t:""+t).replace(Gx,`
`).replace(Vx,"")}function qg(t,n){return n=Wg(n),Wg(t)===n}function Ge(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Nn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Nn(t,""+r);break;case"className":se(t,"class",r);break;case"tabIndex":se(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":se(t,a,r);break;case"style":Wi(t,r,f);break;case"data":if(n!=="object"){se(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=$o(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",c.name,c,null),Ge(t,n,"formEncType",c.formEncType,c,null),Ge(t,n,"formMethod",c.formMethod,c,null),Ge(t,n,"formTarget",c.formTarget,c,null)):(Ge(t,n,"encType",c.encType,c,null),Ge(t,n,"method",c.method,c,null),Ge(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=$o(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=qi);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=$o(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":_e("beforetoggle",t),_e("toggle",t),ee(t,"popover",r);break;case"xlinkActuate":Bt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Bt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Bt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Bt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Bt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Bt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ee(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gv.get(a)||a,ee(t,a,r))}}function Nf(t,n,a,r,c,f){switch(a){case"style":Wi(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Nn(t,r):(typeof r=="number"||typeof r=="bigint")&&Nn(t,""+r);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"onClick":r!=null&&(t.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!it.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ee(t,a,r)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,f,_,a,null)}}c&&Ge(t,n,"srcSet",a.srcSet,a,null),r&&Ge(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var A=f=_=c=null,H=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":c=ht;break;case"type":_=ht;break;case"checked":H=ht;break;case"defaultChecked":nt=ht;break;case"value":f=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ge(t,n,r,ht,a,null)}}qn(t,f,A,H,nt,_,c,!1);return;case"select":_e("invalid",t),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":r=A;default:Ge(t,n,c,A,a,null)}n=f,a=_,t.multiple=!!r,n!=null?Yn(t,!!r,n,!1):a!=null&&Yn(t,!!r,a,!0);return;case"textarea":_e("invalid",t),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":r=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ge(t,n,_,A,a,null)}rn(t,r,c,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(r=a[H],r!=null)&&(H==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Ge(t,n,H,r,a,null));return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(r=0;r<So.length;r++)_e(So[r],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,nt,r,a,null)}return;default:if(Is(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&Nf(t,n,ht,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Ge(t,n,A,r,a,null))}function Xx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,A=null,H=null,nt=null,ht=null;for(ct in a){var gt=a[ct];if(a.hasOwnProperty(ct)&&gt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":H=gt;default:r.hasOwnProperty(ct)||Ge(t,n,ct,null,r,gt)}}for(var st in r){var ct=r[st];if(gt=a[st],r.hasOwnProperty(st)&&(ct!=null||gt!=null))switch(st){case"type":f=ct;break;case"name":c=ct;break;case"checked":nt=ct;break;case"defaultChecked":ht=ct;break;case"value":_=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==gt&&Ge(t,n,st,ct,r,gt)}}Un(t,_,A,H,nt,ht,f,c);return;case"select":ct=_=A=st=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ct=H;default:r.hasOwnProperty(f)||Ge(t,n,f,null,r,H)}for(c in r)if(f=r[c],H=a[c],r.hasOwnProperty(c)&&(f!=null||H!=null))switch(c){case"value":st=f;break;case"defaultValue":A=f;break;case"multiple":_=f;default:f!==H&&Ge(t,n,c,f,r,H)}n=A,a=_,r=ct,st!=null?Yn(t,!!a,st,!1):!!r!=!!a&&(n!=null?Yn(t,!!a,n,!0):Yn(t,!!a,a?[]:"",!1));return;case"textarea":ct=st=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ge(t,n,A,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":st=c;break;case"defaultValue":ct=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ge(t,n,_,c,r,f)}Oe(t,st,ct);return;case"option":for(var Ht in a)st=a[Ht],a.hasOwnProperty(Ht)&&st!=null&&!r.hasOwnProperty(Ht)&&(Ht==="selected"?t.selected=!1:Ge(t,n,Ht,null,r,st));for(H in r)st=r[H],ct=a[H],r.hasOwnProperty(H)&&st!==ct&&(st!=null||ct!=null)&&(H==="selected"?t.selected=st&&typeof st!="function"&&typeof st!="symbol":Ge(t,n,H,st,r,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)st=a[Qt],a.hasOwnProperty(Qt)&&st!=null&&!r.hasOwnProperty(Qt)&&Ge(t,n,Qt,null,r,st);for(nt in r)if(st=r[nt],ct=a[nt],r.hasOwnProperty(nt)&&st!==ct&&(st!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Ge(t,n,nt,st,r,ct)}return;default:if(Is(n)){for(var Ve in a)st=a[Ve],a.hasOwnProperty(Ve)&&st!==void 0&&!r.hasOwnProperty(Ve)&&Nf(t,n,Ve,void 0,r,st);for(ht in r)st=r[ht],ct=a[ht],!r.hasOwnProperty(ht)||st===ct||st===void 0&&ct===void 0||Nf(t,n,ht,st,r,ct);return}}for(var Q in a)st=a[Q],a.hasOwnProperty(Q)&&st!=null&&!r.hasOwnProperty(Q)&&Ge(t,n,Q,null,r,st);for(gt in r)st=r[gt],ct=a[gt],!r.hasOwnProperty(gt)||st===ct||st==null&&ct==null||Ge(t,n,gt,st,r,ct)}function Yg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,A=c.duration;if(f&&A&&Yg(_)){for(_=0,A=c.responseEnd,r+=1;r<a.length;r++){var H=a[r],nt=H.startTime;if(nt>A)break;var ht=H.transferSize,gt=H.initiatorType;ht&&Yg(gt)&&(H=H.responseEnd,_+=ht*(H<A?1:(A-nt)/(H-nt)))}if(--r,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Lf=null,Of=null;function jl(t){return t.nodeType===9?t:t.ownerDocument}function jg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Pf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Wx(){var t=window.event;return t&&t.type==="popstate"?t===zf?!1:(zf=t,!0):(zf=null,!1)}var Kg=typeof setTimeout=="function"?setTimeout:void 0,qx=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(t){return Qg.resolve(null).then(t).catch(jx)}:Kg;function jx(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function Jg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),pr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")yo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[ns]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&yo(t.ownerDocument.body);a=c}while(a);pr(n)}function $g(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function If(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),Hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Zx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ns])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function Kx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function t0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hi(t.nextSibling),t===null))return null;return t}function Ff(t){return t.data==="$?"||t.data==="$~"}function Bf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Qx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Hf=null;function e0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return hi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function n0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function i0(t,n,a){switch(n=jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Hr(t)}var di=new Map,a0=new Set;function Zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=P.d;P.d={f:Jx,r:$x,D:tS,C:eS,L:nS,m:iS,X:sS,S:aS,M:rS};function Jx(){var t=la.f(),n=Hl();return t||n}function $x(t){var n=ba(t);n!==null&&n.tag===5&&n.type==="form"?Mm(n):la.r(t)}var fr=typeof document>"u"?null:document;function s0(t,n,a){var r=fr;if(r&&typeof n=="string"&&n){var c=ae(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),a0.has(c)||(a0.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),En(n,"link",t),q(n),r.head.appendChild(n)))}}function tS(t){la.D(t),s0("dns-prefetch",t,null)}function eS(t,n){la.C(t,n),s0("preconnect",t,n)}function nS(t,n,a){la.L(t,n,a);var r=fr;if(r&&t&&n){var c='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ae(a.imageSizes)+'"]')):c+='[href="'+ae(t)+'"]';var f=c;switch(n){case"style":f=hr(t);break;case"script":f=dr(t)}di.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),di.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(Eo(f))||n==="script"&&r.querySelector(bo(f))||(n=r.createElement("link"),En(n,"link",t),q(n),r.head.appendChild(n)))}}function iS(t,n){la.m(t,n);var a=fr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ae(r)+'"][href="'+ae(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=dr(t)}if(!di.has(f)&&(t=S({rel:"modulepreload",href:t},n),di.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}r=a.createElement("link"),En(r,"link",t),q(r),a.head.appendChild(r)}}}function aS(t,n,a){la.S(t,n,a);var r=fr;if(r&&t){var c=R(r).hoistableStyles,f=hr(t);n=n||"default";var _=c.get(f);if(!_){var A={loading:0,preload:null};if(_=r.querySelector(Eo(f)))A.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=di.get(f))&&Gf(t,a);var H=_=r.createElement("link");q(H),En(H,"link",t),H._p=new Promise(function(nt,ht){H.onload=nt,H.onerror=ht}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Kl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:A},c.set(f,_)}}}function sS(t,n){la.X(t,n);var a=fr;if(a&&t){var r=R(a).hoistableScripts,c=dr(t),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(t=S({src:t,async:!0},n),(n=di.get(c))&&Vf(t,n),f=a.createElement("script"),q(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function rS(t,n){la.M(t,n);var a=fr;if(a&&t){var r=R(a).hoistableScripts,c=dr(t),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(t=S({src:t,async:!0,type:"module"},n),(n=di.get(c))&&Vf(t,n),f=a.createElement("script"),q(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function r0(t,n,a,r){var c=(c=at.current)?Zl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hr(a.href),a=R(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hr(a.href);var f=R(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(Eo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),di.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(t,a),f||oS(c,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=dr(a),a=R(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function hr(t){return'href="'+ae(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function o0(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function oS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),En(n,"link",a),q(n),t.head.appendChild(n))}function dr(t){return'[src="'+ae(t)+'"]'}function bo(t){return"script[async]"+t}function l0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ae(a.href)+'"]');if(r)return n.instance=r,q(r),r;var c=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),q(r),En(r,"style",c),Kl(r,a.precedence,t),n.instance=r;case"stylesheet":c=hr(a.href);var f=t.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,q(f),f;r=o0(a),(c=di.get(c))&&Gf(r,c),f=(t.ownerDocument||t).createElement("link"),q(f);var _=f;return _._p=new Promise(function(A,H){_.onload=A,_.onerror=H}),En(f,"link",r),n.state.loading|=4,Kl(f,a.precedence,t),n.instance=f;case"script":return f=dr(a.src),(c=t.querySelector(bo(f)))?(n.instance=c,q(c),c):(r=a,(c=di.get(f))&&(r=S({},a),Vf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),q(c),En(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Kl(r,a.precedence,t));return n.instance}function Kl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var A=r[_];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ql=null;function c0(t,n,a){if(Ql===null){var r=new Map,c=Ql=new Map;c.set(a,r)}else c=Ql,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ns]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var A=r.get(_);A?A.push(f):r.set(_,[f])}}return r}function u0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function lS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function f0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=hr(r.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Jl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,q(f);return}f=n.ownerDocument||n,r=o0(r),(c=di.get(c))&&Gf(r,c),f=f.createElement("link"),q(f);var _=f;_._p=new Promise(function(A,H){_.onload=A,_.onerror=H}),En(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Jl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function uS(t,n){return t.stylesheets&&t.count===0&&tc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&tc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Xf===0&&(Xf=62500*kx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&tc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Xf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $l=null;function tc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$l=new Map,n.forEach(fS,t),$l=null,Jl.call(t))}function fS(t,n){if(!(n.state.loading&4)){var a=$l.get(t);if(a)var r=a.get(null);else{a=new Map,$l.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=Jl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var To={$$typeof:N,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function hS(t,n,a,r,c,f,_,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function h0(t,n,a,r,c,f,_,A,H,nt,ht,gt){return t=new hS(t,n,a,_,H,nt,ht,gt,A),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),t.current=f,f.stateNode=t,n=Mu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Tu(f),t}function d0(t){return t?(t=ks,t):ks}function p0(t,n,a,r,c,f){c=d0(c),r.context===null?r.context=c:r.pendingContext=c,r=Ua(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Na(t,r,n),a!==null&&(Xn(a,t,n),no(a,t,n))}function m0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function kf(t,n){m0(t,n),(t=t.alternate)&&m0(t,n)}function g0(t){if(t.tag===13||t.tag===31){var n=os(t,67108864);n!==null&&Xn(n,t,67108864),kf(t,67108864)}}function _0(t){if(t.tag===13||t.tag===31){var n=ti();n=Os(n);var a=os(t,n);a!==null&&Xn(a,t,n),kf(t,n)}}var ec=!0;function dS(t,n,a,r){var c=L.T;L.T=null;var f=P.p;try{P.p=2,Wf(t,n,a,r)}finally{P.p=f,L.T=c}}function pS(t,n,a,r){var c=L.T;L.T=null;var f=P.p;try{P.p=8,Wf(t,n,a,r)}finally{P.p=f,L.T=c}}function Wf(t,n,a,r){if(ec){var c=qf(r);if(c===null)Uf(t,n,r,nc,a),x0(t,r);else if(gS(c,t,n,a,r))r.stopPropagation();else if(x0(t,r),n&4&&-1<mS.indexOf(t)){for(;c!==null;){var f=ba(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Mt(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var H=1<<31-Nt(_);A.entanglements[1]|=H,_&=~H}Pi(f),(Ne&6)===0&&(Fl=E()+500,xo(0))}}break;case 31:case 13:A=os(f,2),A!==null&&Xn(A,f,2),Hl(),kf(f,2)}if(f=qf(r),f===null&&Uf(t,n,r,nc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Uf(t,n,r,null,a)}}function qf(t){return t=Yc(t),Yf(t)}var nc=null;function Yf(t){if(nc=null,t=Ea(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return nc=t,null}function v0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case pt:return 2;case xt:return 8;case ft:case Xt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var jf=!1,Xa=null,ka=null,Wa=null,Ao=new Map,Ro=new Map,qa=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x0(t,n){switch(t){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ba(n),n!==null&&g0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function gS(t,n,a,r,c){switch(n){case"focusin":return Xa=Co(Xa,t,n,a,r,c),!0;case"dragenter":return ka=Co(ka,t,n,a,r,c),!0;case"mouseover":return Wa=Co(Wa,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,t,n,a,r,c)),!0}return!1}function S0(t){var n=Ea(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,zs(t.priority,function(){_0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,zs(t.priority,function(){_0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);qc=r,a.target.dispatchEvent(r),qc=null}else return n=ba(a),n!==null&&g0(n),t.blockedOn=a,!1;n.shift()}return!0}function M0(t,n,a){ic(t)&&a.delete(n)}function _S(){jf=!1,Xa!==null&&ic(Xa)&&(Xa=null),ka!==null&&ic(ka)&&(ka=null),Wa!==null&&ic(Wa)&&(Wa=null),Ao.forEach(M0),Ro.forEach(M0)}function ac(t,n){t.blockedOn===n&&(t.blockedOn=null,jf||(jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,_S)))}var sc=null;function y0(t){sc!==t&&(sc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){sc===t&&(sc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Yf(r||a)===null)continue;break}var f=ba(a);f!==null&&(t.splice(n,3),n-=3,Wu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function pr(t){function n(H){return ac(H,t)}Xa!==null&&ac(Xa,t),ka!==null&&ac(ka,t),Wa!==null&&ac(Wa,t),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<qa.length;a++){var r=qa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)S0(a),a.blockedOn===null&&qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[dn]||null;if(typeof f=="function")_||y0(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[dn]||null)A=_.formAction;else if(Yf(c)!==null)continue}else A=_.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),y0(a)}}}function E0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Zf(t){this._internalRoot=t}rc.prototype.render=Zf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ti();p0(a,r,t,n,null,null)},rc.prototype.unmount=Zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;p0(t.current,2,null,t,null,null),Hl(),n[ki]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ui();t={blockedOn:null,target:t,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,t),a===0&&S0(t)}};var b0=e.version;if(b0!=="19.2.4")throw Error(s(527,b0,"19.2.4"));P.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var vS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{yt=oc.inject(vS),St=oc}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Um,f=Nm,_=Lm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=h0(t,1,!1,null,null,a,r,null,c,f,_,E0),t[ki]=n.current,Df(t),new Zf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Um,_=Nm,A=Lm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=h0(t,1,!0,n,a??null,r,c,H,f,_,A,E0),n.context=d0(null),a=n.current,r=ti(),r=Os(r),c=Ua(r),c.callback=null,Na(a,c,r),a=r,n.current.lanes=a,wn(n,a),Pi(n),t[ki]=n.current,Df(t),new rc(n)},Do.version="19.2.4",Do}var O0;function DS(){if(O0)return Jf.exports;O0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=wS(),Jf.exports}var US=DS();const Nd="183",NS=0,P0=1,LS=2,Nc=1,OS=2,Fo=3,va=0,Wn=1,pa=2,ga=0,wr=1,Ih=2,z0=3,I0=4,PS=5,Cs=100,zS=101,IS=102,FS=103,BS=104,HS=200,GS=201,VS=202,XS=203,Fh=204,Bh=205,kS=206,WS=207,qS=208,YS=209,jS=210,ZS=211,KS=212,QS=213,JS=214,Hh=0,Gh=1,Vh=2,Ur=3,Xh=4,kh=5,Wh=6,qh=7,P_=0,$S=1,tM=2,Gi=0,z_=1,I_=2,F_=3,B_=4,H_=5,G_=6,V_=7,X_=300,Ns=301,Nr=302,nh=303,ih=304,Gc=306,Yh=1e3,ma=1001,jh=1002,bn=1003,eM=1004,lc=1005,Cn=1006,ah=1007,Ds=1008,ai=1009,k_=1010,W_=1011,Go=1012,Ld=1013,Xi=1014,Bi=1015,xa=1016,Od=1017,Pd=1018,Vo=1020,q_=35902,Y_=35899,j_=1021,Z_=1022,wi=1023,Sa=1026,Us=1027,K_=1028,zd=1029,Lr=1030,Id=1031,Fd=1033,Lc=33776,Oc=33777,Pc=33778,zc=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,td=37492,ed=37496,nd=37488,id=37489,ad=37490,sd=37491,rd=37808,od=37809,ld=37810,cd=37811,ud=37812,fd=37813,hd=37814,dd=37815,pd=37816,md=37817,gd=37818,_d=37819,vd=37820,xd=37821,Sd=36492,Md=36494,yd=36495,Ed=36283,bd=36284,Td=36285,Ad=36286,nM=3200,iM=0,aM=1,ts="",mi="srgb",Or="srgb-linear",Fc="linear",Be="srgb",mr=7680,F0=519,sM=512,rM=513,oM=514,Bd=515,lM=516,cM=517,Hd=518,uM=519,B0=35044,H0="300 es",Hi=2e3,Xo=2001;function fM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hM(){const o=Bc("canvas");return o.style.display="block",o}const G0={};function V0(...o){const e="THREE."+o.shift();console.log(e,...o)}function Q_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function oe(...o){o=Q_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function De(...o){o=Q_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Hc(...o){const e=o.join(" ");e in G0||(G0[e]=!0,oe(...o))}function dM(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const pM={[Hh]:Gh,[Vh]:Wh,[Xh]:qh,[Ur]:kh,[Gh]:Hh,[Wh]:Vh,[qh]:Xh,[kh]:Ur};class zr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=Math.PI/180,Rd=180/Math.PI;function Wo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function mM(o,e){return(o%e+e)%e}function rh(o,e,i){return(1-i)*o+i*e}function Uo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,i=0){Ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ir{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,p){let m=s[l+0],d=s[l+1],x=s[l+2],S=s[l+3],g=u[h+0],y=u[h+1],b=u[h+2],w=u[h+3];if(S!==w||m!==g||d!==y||x!==b){let M=m*g+d*y+x*b+S*w;M<0&&(g=-g,y=-y,b=-b,w=-w,M=-M);let v=1-p;if(M<.9995){const C=Math.acos(M),N=Math.sin(C);v=Math.sin(v*C)/N,p=Math.sin(p*C)/N,m=m*v+g*p,d=d*v+y*p,x=x*v+b*p,S=S*v+w*p}else{m=m*v+g*p,d=d*v+y*p,x=x*v+b*p,S=S*v+w*p;const C=1/Math.sqrt(m*m+d*d+x*x+S*S);m*=C,d*=C,x*=C,S*=C}}e[i]=m,e[i+1]=d,e[i+2]=x,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,u,h){const p=s[l],m=s[l+1],d=s[l+2],x=s[l+3],S=u[h],g=u[h+1],y=u[h+2],b=u[h+3];return e[i]=p*b+x*S+m*y-d*g,e[i+1]=m*b+x*g+d*S-p*y,e[i+2]=d*b+x*y+p*g-m*S,e[i+3]=x*b-p*S-m*g-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(s/2),x=p(l/2),S=p(u/2),g=m(s/2),y=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=g*x*S+d*y*b,this._y=d*y*S-g*x*b,this._z=d*x*b+g*y*S,this._w=d*x*S-g*y*b;break;case"YXZ":this._x=g*x*S+d*y*b,this._y=d*y*S-g*x*b,this._z=d*x*b-g*y*S,this._w=d*x*S+g*y*b;break;case"ZXY":this._x=g*x*S-d*y*b,this._y=d*y*S+g*x*b,this._z=d*x*b+g*y*S,this._w=d*x*S-g*y*b;break;case"ZYX":this._x=g*x*S-d*y*b,this._y=d*y*S+g*x*b,this._z=d*x*b-g*y*S,this._w=d*x*S+g*y*b;break;case"YZX":this._x=g*x*S+d*y*b,this._y=d*y*S+g*x*b,this._z=d*x*b-g*y*S,this._w=d*x*S-g*y*b;break;case"XZY":this._x=g*x*S-d*y*b,this._y=d*y*S-g*x*b,this._z=d*x*b+g*y*S,this._w=d*x*S+g*y*b;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],p=i[5],m=i[9],d=i[2],x=i[6],S=i[10],g=s+p+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(x-m)*y,this._y=(u-d)*y,this._z=(h-l)*y}else if(s>p&&s>S){const y=2*Math.sqrt(1+s-p-S);this._w=(x-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+d)/y}else if(p>S){const y=2*Math.sqrt(1+p-s-S);this._w=(u-d)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+S-s-p);this._w=(h-l)/y,this._x=(u+d)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,p=i._x,m=i._y,d=i._z,x=i._w;return this._x=s*x+h*p+l*d-u*m,this._y=l*x+h*m+u*p-s*d,this._z=u*x+h*d+s*m-l*p,this._w=h*x-s*p-l*m-u*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,u=e._z,h=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,u=-u,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),x=Math.sin(d);m=Math.sin(m*d)/x,i=Math.sin(i*d)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(e=0,i=0,s=0){tt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(X0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(X0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*s),x=2*(p*i-u*l),S=2*(u*s-h*i);return this.x=i+m*d+h*S-p*x,this.y=s+m*x+p*d-u*S,this.z=l+m*S+u*x-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*h-s*m,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oh=new tt,X0=new Ir;class de{constructor(e,i,s,l,u,h,p,m,d){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,p,m,d)}set(e,i,s,l,u,h,p,m,d){const x=this.elements;return x[0]=e,x[1]=l,x[2]=p,x[3]=i,x[4]=u,x[5]=m,x[6]=s,x[7]=h,x[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],x=s[4],S=s[7],g=s[2],y=s[5],b=s[8],w=l[0],M=l[3],v=l[6],C=l[1],N=l[4],D=l[7],B=l[2],F=l[5],I=l[8];return u[0]=h*w+p*C+m*B,u[3]=h*M+p*N+m*F,u[6]=h*v+p*D+m*I,u[1]=d*w+x*C+S*B,u[4]=d*M+x*N+S*F,u[7]=d*v+x*D+S*I,u[2]=g*w+y*C+b*B,u[5]=g*M+y*N+b*F,u[8]=g*v+y*D+b*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],x=e[8];return i*h*x-i*p*d-s*u*x+s*p*m+l*u*d-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],x=e[8],S=x*h-p*d,g=p*m-x*u,y=d*u-h*m,b=i*S+s*g+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=S*w,e[1]=(l*d-x*s)*w,e[2]=(p*s-l*h)*w,e[3]=g*w,e[4]=(x*i-l*m)*w,e[5]=(l*u-p*i)*w,e[6]=y*w,e[7]=(s*m-d*i)*w,e[8]=(h*i-s*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,p){const m=Math.cos(u),d=Math.sin(u);return this.set(s*m,s*d,-s*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(lh.makeScale(e,i)),this}rotate(e){return this.premultiply(lh.makeRotation(-e)),this}translate(e,i){return this.premultiply(lh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lh=new de,k0=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W0=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gM(){const o={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ts?Fc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Hc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Hc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Or]:{primaries:e,whitePoint:s,transfer:Fc,toXYZ:k0,fromXYZ:W0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:s,transfer:Be,toXYZ:k0,fromXYZ:W0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),o}const Te=gM();function _a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Dr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gr;class _M{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{gr===void 0&&(gr=Bc("canvas")),gr.width=e.width,gr.height=e.height;const l=gr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Bc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=_a(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(_a(i[s]/255)*255):i[s]=_a(i[s]);return{data:i,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vM=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?u.push(ch(l[h].image)):u.push(ch(l[h]))}else u=ch(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function ch(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_M.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let xM=0;const uh=new tt;class Pn extends zr{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ma,l=ma,u=Cn,h=Ds,p=wi,m=ai,d=Pn.DEFAULT_ANISOTROPY,x=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Wo(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==X_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yh:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yh:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=X_;Pn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,d=m[0],x=m[4],S=m[8],g=m[1],y=m[5],b=m[9],w=m[2],M=m[6],v=m[10];if(Math.abs(x-g)<.01&&Math.abs(S-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+w)<.1&&Math.abs(b+M)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(d+1)/2,D=(y+1)/2,B=(v+1)/2,F=(x+g)/4,I=(S+w)/4,T=(b+M)/4;return N>D&&N>B?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=F/s,u=I/s):D>B?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=F/l,u=T/l):B<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),s=I/u,l=T/u),this.set(s,l,u,i),this}let C=Math.sqrt((M-b)*(M-b)+(S-w)*(S-w)+(g-x)*(g-x));return Math.abs(C)<.001&&(C=1),this.x=(M-b)/C,this.y=(S-w)/C,this.z=(g-x)/C,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SM extends zr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},u=new Pn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Gd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends SM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class J_ extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=bn,this.minFilter=bn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MM extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=bn,this.minFilter=bn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qe{constructor(e,i,s,l,u,h,p,m,d,x,S,g,y,b,w,M){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,p,m,d,x,S,g,y,b,w,M)}set(e,i,s,l,u,h,p,m,d,x,S,g,y,b,w,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=h,v[9]=p,v[13]=m,v[2]=d,v[6]=x,v[10]=S,v[14]=g,v[3]=y,v[7]=b,v[11]=w,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/_r.setFromMatrixColumn(e,0).length(),u=1/_r.setFromMatrixColumn(e,1).length(),h=1/_r.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),x=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const g=h*x,y=h*S,b=p*x,w=p*S;i[0]=m*x,i[4]=-m*S,i[8]=d,i[1]=y+b*d,i[5]=g-w*d,i[9]=-p*m,i[2]=w-g*d,i[6]=b+y*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*x,y=m*S,b=d*x,w=d*S;i[0]=g+w*p,i[4]=b*p-y,i[8]=h*d,i[1]=h*S,i[5]=h*x,i[9]=-p,i[2]=y*p-b,i[6]=w+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*x,y=m*S,b=d*x,w=d*S;i[0]=g-w*p,i[4]=-h*S,i[8]=b+y*p,i[1]=y+b*p,i[5]=h*x,i[9]=w-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*x,y=h*S,b=p*x,w=p*S;i[0]=m*x,i[4]=b*d-y,i[8]=g*d+w,i[1]=m*S,i[5]=w*d+g,i[9]=y*d-b,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,y=h*d,b=p*m,w=p*d;i[0]=m*x,i[4]=w-g*S,i[8]=b*S+y,i[1]=S,i[5]=h*x,i[9]=-p*x,i[2]=-d*x,i[6]=y*S+b,i[10]=g-w*S}else if(e.order==="XZY"){const g=h*m,y=h*d,b=p*m,w=p*d;i[0]=m*x,i[4]=-S,i[8]=d*x,i[1]=g*S+w,i[5]=h*x,i[9]=y*S-b,i[2]=b*S-y,i[6]=p*x,i[10]=w*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yM,e,EM)}lookAt(e,i,s){const l=this.elements;return ei.subVectors(e,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ja.crossVectors(s,ei),ja.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ja.crossVectors(s,ei)),ja.normalize(),cc.crossVectors(ei,ja),l[0]=ja.x,l[4]=cc.x,l[8]=ei.x,l[1]=ja.y,l[5]=cc.y,l[9]=ei.y,l[2]=ja.z,l[6]=cc.z,l[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],x=s[1],S=s[5],g=s[9],y=s[13],b=s[2],w=s[6],M=s[10],v=s[14],C=s[3],N=s[7],D=s[11],B=s[15],F=l[0],I=l[4],T=l[8],U=l[12],ot=l[1],G=l[5],k=l[9],j=l[13],J=l[2],X=l[6],L=l[10],P=l[14],rt=l[3],dt=l[7],Et=l[11],z=l[15];return u[0]=h*F+p*ot+m*J+d*rt,u[4]=h*I+p*G+m*X+d*dt,u[8]=h*T+p*k+m*L+d*Et,u[12]=h*U+p*j+m*P+d*z,u[1]=x*F+S*ot+g*J+y*rt,u[5]=x*I+S*G+g*X+y*dt,u[9]=x*T+S*k+g*L+y*Et,u[13]=x*U+S*j+g*P+y*z,u[2]=b*F+w*ot+M*J+v*rt,u[6]=b*I+w*G+M*X+v*dt,u[10]=b*T+w*k+M*L+v*Et,u[14]=b*U+w*j+M*P+v*z,u[3]=C*F+N*ot+D*J+B*rt,u[7]=C*I+N*G+D*X+B*dt,u[11]=C*T+N*k+D*L+B*Et,u[15]=C*U+N*j+D*P+B*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],p=e[5],m=e[9],d=e[13],x=e[2],S=e[6],g=e[10],y=e[14],b=e[3],w=e[7],M=e[11],v=e[15],C=m*y-d*g,N=p*y-d*S,D=p*g-m*S,B=h*y-d*x,F=h*g-m*x,I=h*S-p*x;return i*(w*C-M*N+v*D)-s*(b*C-M*B+v*F)+l*(b*N-w*B+v*I)-u*(b*D-w*F+M*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],x=e[8],S=e[9],g=e[10],y=e[11],b=e[12],w=e[13],M=e[14],v=e[15],C=i*p-s*h,N=i*m-l*h,D=i*d-u*h,B=s*m-l*p,F=s*d-u*p,I=l*d-u*m,T=x*w-S*b,U=x*M-g*b,ot=x*v-y*b,G=S*M-g*w,k=S*v-y*w,j=g*v-y*M,J=C*j-N*k+D*G+B*ot-F*U+I*T;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/J;return e[0]=(p*j-m*k+d*G)*X,e[1]=(l*k-s*j-u*G)*X,e[2]=(w*I-M*F+v*B)*X,e[3]=(g*F-S*I-y*B)*X,e[4]=(m*ot-h*j-d*U)*X,e[5]=(i*j-l*ot+u*U)*X,e[6]=(M*D-b*I-v*N)*X,e[7]=(x*I-g*D+y*N)*X,e[8]=(h*k-p*ot+d*T)*X,e[9]=(s*ot-i*k-u*T)*X,e[10]=(b*F-w*D+v*C)*X,e[11]=(S*D-x*F-y*C)*X,e[12]=(p*U-h*G-m*T)*X,e[13]=(i*G-s*U+l*T)*X,e[14]=(w*N-b*B-M*C)*X,e[15]=(x*B-S*N+g*C)*X,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,p=e.y,m=e.z,d=u*h,x=u*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,x*p+s,x*m-l*h,0,d*m-l*p,x*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,p=i._z,m=i._w,d=u+u,x=h+h,S=p+p,g=u*d,y=u*x,b=u*S,w=h*x,M=h*S,v=p*S,C=m*d,N=m*x,D=m*S,B=s.x,F=s.y,I=s.z;return l[0]=(1-(w+v))*B,l[1]=(y+D)*B,l[2]=(b-N)*B,l[3]=0,l[4]=(y-D)*F,l[5]=(1-(g+v))*F,l[6]=(M+C)*F,l[7]=0,l[8]=(b+N)*I,l[9]=(M-C)*I,l[10]=(1-(g+w))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return s.set(1,1,1),i.identity(),this;let h=_r.set(l[0],l[1],l[2]).length();const p=_r.set(l[4],l[5],l[6]).length(),m=_r.set(l[8],l[9],l[10]).length();u<0&&(h=-h),Ti.copy(this);const d=1/h,x=1/p,S=1/m;return Ti.elements[0]*=d,Ti.elements[1]*=d,Ti.elements[2]*=d,Ti.elements[4]*=x,Ti.elements[5]*=x,Ti.elements[6]*=x,Ti.elements[8]*=S,Ti.elements[9]*=S,Ti.elements[10]*=S,i.setFromRotationMatrix(Ti),s.x=h,s.y=p,s.z=m,this}makePerspective(e,i,s,l,u,h,p=Hi,m=!1){const d=this.elements,x=2*u/(i-e),S=2*u/(s-l),g=(i+e)/(i-e),y=(s+l)/(s-l);let b,w;if(m)b=u/(h-u),w=h*u/(h-u);else if(p===Hi)b=-(h+u)/(h-u),w=-2*h*u/(h-u);else if(p===Xo)b=-h/(h-u),w=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=x,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=S,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,u,h,p=Hi,m=!1){const d=this.elements,x=2/(i-e),S=2/(s-l),g=-(i+e)/(i-e),y=-(s+l)/(s-l);let b,w;if(m)b=1/(h-u),w=h/(h-u);else if(p===Hi)b=-2/(h-u),w=-(h+u)/(h-u);else if(p===Xo)b=-1/(h-u),w=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=x,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=S,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const _r=new tt,Ti=new Qe,yM=new tt(0,0,0),EM=new tt(1,1,1),ja=new tt,cc=new tt,ei=new tt,q0=new Qe,Y0=new Ir;class Ma{constructor(e=0,i=0,s=0,l=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],p=l[8],m=l[1],d=l[5],x=l[9],S=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ye(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,d),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-x,y),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return q0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(q0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Y0.setFromEuler(this),this.setFromQuaternion(Y0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class $_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bM=0;const j0=new tt,vr=new Ir,ca=new Qe,uc=new tt,No=new tt,TM=new tt,AM=new Ir,Z0=new tt(1,0,0),K0=new tt(0,1,0),Q0=new tt(0,0,1),J0={type:"added"},RM={type:"removed"},xr={type:"childadded",child:null},fh={type:"childremoved",child:null};class zn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new tt,i=new Ma,s=new Ir,l=new tt(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new de}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vr.setFromAxisAngle(e,i),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,i){return vr.setFromAxisAngle(e,i),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(Z0,e)}rotateY(e){return this.rotateOnAxis(K0,e)}rotateZ(e){return this.rotateOnAxis(Q0,e)}translateOnAxis(e,i){return j0.copy(e).applyQuaternion(this.quaternion),this.position.add(j0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Z0,e)}translateY(e){return this.translateOnAxis(K0,e)}translateZ(e){return this.translateOnAxis(Q0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?uc.copy(e):uc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(No,uc,this.up):ca.lookAt(uc,No,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),vr.setFromRotationMatrix(ca),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(J0),xr.child=e,this.dispatchEvent(xr),xr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(RM),fh.child=e,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(J0),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,TM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,AM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,x=m.length;d<x;d++){const S=m[d];u(e.shapes,S)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),x=h(e.images),S=h(e.shapes),g=h(e.skeletons),y=h(e.animations),b=h(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),x.length>0&&(s.images=x),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(p){const m=[];for(const d in p){const x=p[d];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}zn.DEFAULT_UP=new tt(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bo extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CM={type:"move"};class hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,s),v=this._getHandJoint(d,w);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const x=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],g=x.position.distanceTo(S.position),y=.02,b=.005;d.inputState.pinching&&g>y+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=y-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Bo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},fc={h:0,s:0,l:0};function dh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class te{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Te.workingColorSpace){if(e=mM(e,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=dh(h,u,e+1/3),this.g=dh(h,u,e),this.b=dh(h,u,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function s(u){u!==void 0&&parseFloat(u)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:oe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const s=tv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Te.workingToColorSpace(Rn.copy(this),e),Math.round(ye(Rn.r*255,0,255))*65536+Math.round(ye(Rn.g*255,0,255))*256+Math.round(ye(Rn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(Rn.copy(this),i);const s=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(s,l,u),p=Math.min(s,l,u);let m,d;const x=(p+h)/2;if(p===h)m=0,d=0;else{const S=h-p;switch(d=x<=.5?S/(h+p):S/(2-h-p),h){case s:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-s)/S+2;break;case u:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=d,e.l=x,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=mi){Te.workingToColorSpace(Rn.copy(this),e);const i=Rn.r,s=Rn.g,l=Rn.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(fc);const s=rh(Za.h,fc.h,i),l=rh(Za.s,fc.s,i),u=rh(Za.l,fc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new te;te.NAMES=tv;class wM extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ai=new tt,ua=new tt,ph=new tt,fa=new tt,Sr=new tt,Mr=new tt,$0=new tt,mh=new tt,gh=new tt,_h=new tt,vh=new en,xh=new en,Sh=new en;class Ci{constructor(e=new tt,i=new tt,s=new tt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ai.subVectors(e,i),l.cross(Ai);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Ai.subVectors(l,i),ua.subVectors(s,i),ph.subVectors(e,i);const h=Ai.dot(Ai),p=Ai.dot(ua),m=Ai.dot(ph),d=ua.dot(ua),x=ua.dot(ph),S=h*d-p*p;if(S===0)return u.set(0,0,0),null;const g=1/S,y=(d*m-p*x)*g,b=(h*x-p*m)*g;return u.set(1-y-b,b,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,i,s,l,u,h,p,m){return this.getBarycoord(e,i,s,l,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,fa.x),m.addScaledVector(h,fa.y),m.addScaledVector(p,fa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return vh.setScalar(0),xh.setScalar(0),Sh.setScalar(0),vh.fromBufferAttribute(e,i),xh.fromBufferAttribute(e,s),Sh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(vh,u.x),h.addScaledVector(xh,u.y),h.addScaledVector(Sh,u.z),h}static isFrontFacing(e,i,s,l){return Ai.subVectors(s,i),ua.subVectors(e,i),Ai.cross(ua).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),Ai.cross(ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ci.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,p;Sr.subVectors(l,s),Mr.subVectors(u,s),mh.subVectors(e,s);const m=Sr.dot(mh),d=Mr.dot(mh);if(m<=0&&d<=0)return i.copy(s);gh.subVectors(e,l);const x=Sr.dot(gh),S=Mr.dot(gh);if(x>=0&&S<=x)return i.copy(l);const g=m*S-x*d;if(g<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(s).addScaledVector(Sr,h);_h.subVectors(e,u);const y=Sr.dot(_h),b=Mr.dot(_h);if(b>=0&&y<=b)return i.copy(u);const w=y*d-m*b;if(w<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(s).addScaledVector(Mr,p);const M=x*b-y*S;if(M<=0&&S-x>=0&&y-b>=0)return $0.subVectors(u,l),p=(S-x)/(S-x+(y-b)),i.copy(l).addScaledVector($0,p);const v=1/(M+w+g);return h=w*v,p=g*v,i.copy(s).addScaledVector(Sr,h).addScaledVector(Mr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qo{constructor(e=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ri.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ri.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ri.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=u.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Ri):Ri.fromBufferAttribute(u,h),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hc.copy(s.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),dc.subVectors(this.max,Lo),yr.subVectors(e.a,Lo),Er.subVectors(e.b,Lo),br.subVectors(e.c,Lo),Ka.subVectors(Er,yr),Qa.subVectors(br,Er),Ss.subVectors(yr,br);let i=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-Ss.z,Ss.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,Ss.z,0,-Ss.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-Ss.y,Ss.x,0];return!Mh(i,yr,Er,br,dc)||(i=[1,0,0,0,1,0,0,0,1],!Mh(i,yr,Er,br,dc))?!1:(pc.crossVectors(Ka,Qa),i=[pc.x,pc.y,pc.z],Mh(i,yr,Er,br,dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ha=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Ri=new tt,hc=new qo,yr=new tt,Er=new tt,br=new tt,Ka=new tt,Qa=new tt,Ss=new tt,Lo=new tt,dc=new tt,pc=new tt,Ms=new tt;function Mh(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Ms.fromArray(o,u);const p=l.x*Math.abs(Ms.x)+l.y*Math.abs(Ms.y)+l.z*Math.abs(Ms.z),m=e.dot(Ms),d=i.dot(Ms),x=s.dot(Ms);if(Math.max(-Math.max(m,d,x),Math.min(m,d,x))>p)return!1}return!0}const hn=new tt,mc=new Ae;let DM=0;class gi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=B0,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(e),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==B0&&(e.usage=this.usage),e}}class ev extends gi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class nv extends gi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class In extends gi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const UM=new qo,Oo=new tt,yh=new tt;class Vc{constructor(e=new tt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):UM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Oo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(yh)),this.expandByPoint(Oo.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let NM=0;const pi=new Qe,Eh=new zn,Tr=new tt,ni=new qo,Po=new qo,xn=new tt;class si extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fM(e)?nv:ev)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new de().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,s){return pi.makeTranslation(e,i,s),this.applyMatrix4(pi),this}scale(e,i,s){return pi.makeScale(e,i,s),this.applyMatrix4(pi),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new In(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(e){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const p=i[u];Po.setFromBufferAttribute(p),this.morphTargetsRelative?(xn.addVectors(ni.min,Po.min),ni.expandByPoint(xn),xn.addVectors(ni.max,Po.max),ni.expandByPoint(xn)):(ni.expandByPoint(Po.min),ni.expandByPoint(Po.max))}ni.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)xn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let u=0,h=i.length;u<h;u++){const p=i[u],m=this.morphTargetsRelative;for(let d=0,x=p.count;d<x;d++)xn.fromBufferAttribute(p,d),m&&(Tr.fromBufferAttribute(e,d),xn.add(Tr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new tt,m[T]=new tt;const d=new tt,x=new tt,S=new tt,g=new Ae,y=new Ae,b=new Ae,w=new tt,M=new tt;function v(T,U,ot){d.fromBufferAttribute(s,T),x.fromBufferAttribute(s,U),S.fromBufferAttribute(s,ot),g.fromBufferAttribute(u,T),y.fromBufferAttribute(u,U),b.fromBufferAttribute(u,ot),x.sub(d),S.sub(d),y.sub(g),b.sub(g);const G=1/(y.x*b.y-b.x*y.y);isFinite(G)&&(w.copy(x).multiplyScalar(b.y).addScaledVector(S,-y.y).multiplyScalar(G),M.copy(S).multiplyScalar(y.x).addScaledVector(x,-b.x).multiplyScalar(G),p[T].add(w),p[U].add(w),p[ot].add(w),m[T].add(M),m[U].add(M),m[ot].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,U=C.length;T<U;++T){const ot=C[T],G=ot.start,k=ot.count;for(let j=G,J=G+k;j<J;j+=3)v(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const N=new tt,D=new tt,B=new tt,F=new tt;function I(T){B.fromBufferAttribute(l,T),F.copy(B);const U=p[T];N.copy(U),N.sub(B.multiplyScalar(B.dot(U))).normalize(),D.crossVectors(F,U);const G=D.dot(m[T])<0?-1:1;h.setXYZW(T,N.x,N.y,N.z,G)}for(let T=0,U=C.length;T<U;++T){const ot=C[T],G=ot.start,k=ot.count;for(let j=G,J=G+k;j<J;j+=3)I(e.getX(j+0)),I(e.getX(j+1)),I(e.getX(j+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new tt,u=new tt,h=new tt,p=new tt,m=new tt,d=new tt,x=new tt,S=new tt;if(e)for(let g=0,y=e.count;g<y;g+=3){const b=e.getX(g+0),w=e.getX(g+1),M=e.getX(g+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),x.subVectors(h,u),S.subVectors(l,u),x.cross(S),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),d.fromBufferAttribute(s,M),p.add(x),m.add(x),d.add(x),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),x.subVectors(h,u),S.subVectors(l,u),x.cross(S),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(p,m){const d=p.array,x=p.itemSize,S=p.normalized,g=new d.constructor(m.length*x);let y=0,b=0;for(let w=0,M=m.length;w<M;w++){p.isInterleavedBufferAttribute?y=m[w]*p.data.stride+p.offset:y=m[w]*x;for(let v=0;v<x;v++)g[b++]=d[y++]}return new gi(g,x,S)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new si,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const u=this.morphAttributes;for(const p in u){const m=[],d=u[p];for(let x=0,S=d.length;x<S;x++){const g=d[x],y=e(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],x=[];for(let S=0,g=d.length;S<g;S++){const y=d[S];x.push(y.toJSON(e.data))}x.length>0&&(l[m]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const x=l[d];this.setAttribute(d,x.clone(i))}const u=e.morphAttributes;for(const d in u){const x=[],S=u[d];for(let g=0,y=S.length;g<y;g++)x.push(S[g].clone(i));this.morphAttributes[d]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,x=h.length;d<x;d++){const S=h[d];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let LM=0;class Yo extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=wr,this.side=va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Bh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(s.blending=this.blending),this.side!==va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Fh&&(s.blendSrc=this.blendSrc),this.blendDst!==Bh&&(s.blendDst=this.blendDst),this.blendEquation!==Cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const p in u){const m=u[p];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const da=new tt,bh=new tt,gc=new tt,Ja=new tt,Th=new tt,_c=new tt,Ah=new tt;class iv{constructor(e=new tt,i=new tt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(da.copy(this.origin).addScaledVector(this.direction,i),da.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){bh.copy(e).add(i).multiplyScalar(.5),gc.copy(i).sub(e).normalize(),Ja.copy(this.origin).sub(bh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(gc),p=Ja.dot(this.direction),m=-Ja.dot(gc),d=Ja.lengthSq(),x=Math.abs(1-h*h);let S,g,y,b;if(x>0)if(S=h*m-p,g=h*p-m,b=u*x,S>=0)if(g>=-b)if(g<=b){const w=1/x;S*=w,g*=w,y=S*(S+h*g+2*p)+g*(h*S+g+2*m)+d}else g=u,S=Math.max(0,-(h*g+p)),y=-S*S+g*(g+2*m)+d;else g=-u,S=Math.max(0,-(h*g+p)),y=-S*S+g*(g+2*m)+d;else g<=-b?(S=Math.max(0,-(-h*u+p)),g=S>0?-u:Math.min(Math.max(-u,-m),u),y=-S*S+g*(g+2*m)+d):g<=b?(S=0,g=Math.min(Math.max(-u,-m),u),y=g*(g+2*m)+d):(S=Math.max(0,-(h*u+p)),g=S>0?u:Math.min(Math.max(-u,-m),u),y=-S*S+g*(g+2*m)+d);else g=h>0?-u:u,S=Math.max(0,-(h*g+p)),y=-S*S+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(bh).addScaledVector(gc,g),y}intersectSphere(e,i){da.subVectors(e.center,this.origin);const s=da.dot(this.direction),l=da.dot(da)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,p,m;const d=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return d>=0?(s=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(s=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),x>=0?(u=(e.min.y-g.y)*x,h=(e.max.y-g.y)*x):(u=(e.max.y-g.y)*x,h=(e.min.y-g.y)*x),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),S>=0?(p=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(p=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,da)!==null}intersectTriangle(e,i,s,l,u){Th.subVectors(i,e),_c.subVectors(s,e),Ah.crossVectors(Th,_c);let h=this.direction.dot(Ah),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;Ja.subVectors(this.origin,e);const m=p*this.direction.dot(_c.crossVectors(Ja,_c));if(m<0)return null;const d=p*this.direction.dot(Th.cross(Ja));if(d<0||m+d>h)return null;const x=-p*Ja.dot(Ah);return x<0?null:this.at(x/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vd extends Yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const t_=new Qe,ys=new iv,vc=new Vc,e_=new tt,xc=new tt,Sc=new tt,Mc=new tt,Rh=new tt,yc=new tt,n_=new tt,Ec=new tt;class Di extends zn{constructor(e=new si,i=new Vd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){yc.set(0,0,0);for(let m=0,d=u.length;m<d;m++){const x=p[m],S=u[m];x!==0&&(Rh.fromBufferAttribute(S,e),h?yc.addScaledVector(Rh,x):yc.addScaledVector(Rh.sub(i),x))}i.add(yc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(u),ys.copy(e.ray).recast(e.near),!(vc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(vc,e_)===null||ys.origin.distanceToSquared(e_)>(e.far-e.near)**2))&&(t_.copy(u).invert(),ys.copy(e.ray).applyMatrix4(t_),!(s.boundingBox!==null&&ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ys)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,p=u.index,m=u.attributes.position,d=u.attributes.uv,x=u.attributes.uv1,S=u.attributes.normal,g=u.groups,y=u.drawRange;if(p!==null)if(Array.isArray(h))for(let b=0,w=g.length;b<w;b++){const M=g[b],v=h[M.materialIndex],C=Math.max(M.start,y.start),N=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let D=C,B=N;D<B;D+=3){const F=p.getX(D),I=p.getX(D+1),T=p.getX(D+2);l=bc(this,v,e,s,d,x,S,F,I,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=b,v=w;M<v;M+=3){const C=p.getX(M),N=p.getX(M+1),D=p.getX(M+2);l=bc(this,h,e,s,d,x,S,C,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,w=g.length;b<w;b++){const M=g[b],v=h[M.materialIndex],C=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=C,B=N;D<B;D+=3){const F=D,I=D+1,T=D+2;l=bc(this,v,e,s,d,x,S,F,I,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=b,v=w;M<v;M+=3){const C=M,N=M+1,D=M+2;l=bc(this,h,e,s,d,x,S,C,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function OM(o,e,i,s,l,u,h,p){let m;if(e.side===Wn?m=s.intersectTriangle(h,u,l,!0,p):m=s.intersectTriangle(l,u,h,e.side===va,p),m===null)return null;Ec.copy(p),Ec.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(Ec);return d<i.near||d>i.far?null:{distance:d,point:Ec.clone(),object:o}}function bc(o,e,i,s,l,u,h,p,m,d){o.getVertexPosition(p,xc),o.getVertexPosition(m,Sc),o.getVertexPosition(d,Mc);const x=OM(o,e,i,s,xc,Sc,Mc,n_);if(x){const S=new tt;Ci.getBarycoord(n_,xc,Sc,Mc,S),l&&(x.uv=Ci.getInterpolatedAttribute(l,p,m,d,S,new Ae)),u&&(x.uv1=Ci.getInterpolatedAttribute(u,p,m,d,S,new Ae)),h&&(x.normal=Ci.getInterpolatedAttribute(h,p,m,d,S,new tt),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new tt,materialIndex:0};Ci.getNormal(xc,Sc,Mc,g.normal),x.face=g,x.barycoord=S}return x}class PM extends Pn{constructor(e=null,i=1,s=1,l,u,h,p,m,d=bn,x=bn,S,g){super(null,h,p,m,d,x,l,u,S,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ch=new tt,zM=new tt,IM=new de;class Rs{constructor(e=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Ch.subVectors(s,i).cross(zM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Ch),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||IM.getNormalMatrix(e),l=this.coplanarPoint(Ch).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Vc,FM=new Ae(.5,.5),Tc=new tt;class Xd{constructor(e=new Rs,i=new Rs,s=new Rs,l=new Rs,u=new Rs,h=new Rs){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(u),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Hi,s=!1){const l=this.planes,u=e.elements,h=u[0],p=u[1],m=u[2],d=u[3],x=u[4],S=u[5],g=u[6],y=u[7],b=u[8],w=u[9],M=u[10],v=u[11],C=u[12],N=u[13],D=u[14],B=u[15];if(l[0].setComponents(d-h,y-x,v-b,B-C).normalize(),l[1].setComponents(d+h,y+x,v+b,B+C).normalize(),l[2].setComponents(d+p,y+S,v+w,B+N).normalize(),l[3].setComponents(d-p,y-S,v-w,B-N).normalize(),s)l[4].setComponents(m,g,M,D).normalize(),l[5].setComponents(d-m,y-g,v-M,B-D).normalize();else if(l[4].setComponents(d-m,y-g,v-M,B-D).normalize(),i===Hi)l[5].setComponents(d+m,y+g,v+M,B+D).normalize();else if(i===Xo)l[5].setComponents(m,g,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const i=FM.distanceTo(e.center);return Es.radius=.7071067811865476+i,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Tc.x=l.normal.x>0?e.max.x:e.min.x,Tc.y=l.normal.y>0?e.max.y:e.min.y,Tc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class BM extends Yo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const i_=new Qe,Cd=new iv,Ac=new Vc,Rc=new tt;class HM extends zn{constructor(e=new si,i=new BM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=u,e.ray.intersectsSphere(Ac)===!1)return;i_.copy(l).invert(),Cd.copy(e.ray).applyMatrix4(i_);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=s.index,S=s.attributes.position;if(d!==null){const g=Math.max(0,h.start),y=Math.min(d.count,h.start+h.count);for(let b=g,w=y;b<w;b++){const M=d.getX(b);Rc.fromBufferAttribute(S,M),a_(Rc,M,m,l,e,i,this)}}else{const g=Math.max(0,h.start),y=Math.min(S.count,h.start+h.count);for(let b=g,w=y;b<w;b++)Rc.fromBufferAttribute(S,b),a_(Rc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function a_(o,e,i,s,l,u,h){const p=Cd.distanceSqToPoint(o);if(p<i){const m=new tt;Cd.closestPointToPoint(o,m),m.applyMatrix4(s);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;u.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class av extends Pn{constructor(e=[],i=Ns,s,l,u,h,p,m,d,x){super(e,i,s,l,u,h,p,m,d,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ko extends Pn{constructor(e,i,s=Xi,l,u,h,p=bn,m=bn,d,x=Sa,S=1){if(x!==Sa&&x!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:S};super(g,l,u,h,p,m,x,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class GM extends ko{constructor(e,i=Xi,s=Ns,l,u,h=bn,p=bn,m,d=Sa){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,i,s,l,u,h,p,m,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jo extends si{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const p=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],d=[],x=[],S=[];let g=0,y=0;b("z","y","x",-1,-1,s,i,e,h,u,0),b("z","y","x",1,-1,s,i,-e,h,u,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new In(d,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(S,2));function b(w,M,v,C,N,D,B,F,I,T,U){const ot=D/I,G=B/T,k=D/2,j=B/2,J=F/2,X=I+1,L=T+1;let P=0,rt=0;const dt=new tt;for(let Et=0;Et<L;Et++){const z=Et*G-j;for(let K=0;K<X;K++){const _t=K*ot-k;dt[w]=_t*C,dt[M]=z*N,dt[v]=J,d.push(dt.x,dt.y,dt.z),dt[w]=0,dt[M]=0,dt[v]=F>0?1:-1,x.push(dt.x,dt.y,dt.z),S.push(K/I),S.push(1-Et/T),P+=1}}for(let Et=0;Et<T;Et++)for(let z=0;z<I;z++){const K=g+z+X*Et,_t=g+z+X*(Et+1),At=g+(z+1)+X*(Et+1),zt=g+(z+1)+X*Et;m.push(K,_t,zt),m.push(_t,At,zt),rt+=6}p.addGroup(y,rt,U),y+=rt,g+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class kd extends si{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const u=[],h=[];p(l),d(s),x(),this.setAttribute("position",new In(u,3)),this.setAttribute("normal",new In(u.slice(),3)),this.setAttribute("uv",new In(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(C){const N=new tt,D=new tt,B=new tt;for(let F=0;F<i.length;F+=3)y(i[F+0],N),y(i[F+1],D),y(i[F+2],B),m(N,D,B,C)}function m(C,N,D,B){const F=B+1,I=[];for(let T=0;T<=F;T++){I[T]=[];const U=C.clone().lerp(D,T/F),ot=N.clone().lerp(D,T/F),G=F-T;for(let k=0;k<=G;k++)k===0&&T===F?I[T][k]=U:I[T][k]=U.clone().lerp(ot,k/G)}for(let T=0;T<F;T++)for(let U=0;U<2*(F-T)-1;U++){const ot=Math.floor(U/2);U%2===0?(g(I[T][ot+1]),g(I[T+1][ot]),g(I[T][ot])):(g(I[T][ot+1]),g(I[T+1][ot+1]),g(I[T+1][ot]))}}function d(C){const N=new tt;for(let D=0;D<u.length;D+=3)N.x=u[D+0],N.y=u[D+1],N.z=u[D+2],N.normalize().multiplyScalar(C),u[D+0]=N.x,u[D+1]=N.y,u[D+2]=N.z}function x(){const C=new tt;for(let N=0;N<u.length;N+=3){C.x=u[N+0],C.y=u[N+1],C.z=u[N+2];const D=M(C)/2/Math.PI+.5,B=v(C)/Math.PI+.5;h.push(D,1-B)}b(),S()}function S(){for(let C=0;C<h.length;C+=6){const N=h[C+0],D=h[C+2],B=h[C+4],F=Math.max(N,D,B),I=Math.min(N,D,B);F>.9&&I<.1&&(N<.2&&(h[C+0]+=1),D<.2&&(h[C+2]+=1),B<.2&&(h[C+4]+=1))}}function g(C){u.push(C.x,C.y,C.z)}function y(C,N){const D=C*3;N.x=e[D+0],N.y=e[D+1],N.z=e[D+2]}function b(){const C=new tt,N=new tt,D=new tt,B=new tt,F=new Ae,I=new Ae,T=new Ae;for(let U=0,ot=0;U<u.length;U+=9,ot+=6){C.set(u[U+0],u[U+1],u[U+2]),N.set(u[U+3],u[U+4],u[U+5]),D.set(u[U+6],u[U+7],u[U+8]),F.set(h[ot+0],h[ot+1]),I.set(h[ot+2],h[ot+3]),T.set(h[ot+4],h[ot+5]),B.copy(C).add(N).add(D).divideScalar(3);const G=M(B);w(F,ot+0,C,G),w(I,ot+2,N,G),w(T,ot+4,D,G)}}function w(C,N,D,B){B<0&&C.x===1&&(h[N]=C.x-1),D.x===0&&D.z===0&&(h[N]=B/2/Math.PI+.5)}function M(C){return Math.atan2(C.z,-C.x)}function v(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kd(e.vertices,e.indices,e.radius,e.detail)}}class Wd extends kd{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Wd(e.radius,e.detail)}}class Xc extends si{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,x=m+1,S=e/p,g=i/m,y=[],b=[],w=[],M=[];for(let v=0;v<x;v++){const C=v*g-h;for(let N=0;N<d;N++){const D=N*S-u;b.push(D,-C,0),w.push(0,0,1),M.push(N/p),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let C=0;C<p;C++){const N=C+d*v,D=C+d*(v+1),B=C+1+d*(v+1),F=C+1+d*v;y.push(N,D,F),y.push(D,B,F)}this.setIndex(y),this.setAttribute("position",new In(b,3)),this.setAttribute("normal",new In(w,3)),this.setAttribute("uv",new In(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.width,e.height,e.widthSegments,e.heightSegments)}}class qd extends si{constructor(e=1,i=.4,s=12,l=48,u=Math.PI*2,h=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:u,thetaStart:h,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],d=[],x=[],S=[],g=new tt,y=new tt,b=new tt;for(let w=0;w<=s;w++){const M=h+w/s*p;for(let v=0;v<=l;v++){const C=v/l*u;y.x=(e+i*Math.cos(M))*Math.cos(C),y.y=(e+i*Math.cos(M))*Math.sin(C),y.z=i*Math.sin(M),d.push(y.x,y.y,y.z),g.x=e*Math.cos(C),g.y=e*Math.sin(C),b.subVectors(y,g).normalize(),x.push(b.x,b.y,b.z),S.push(v/l),S.push(w/s)}}for(let w=1;w<=s;w++)for(let M=1;M<=l;M++){const v=(l+1)*w+M-1,C=(l+1)*(w-1)+M-1,N=(l+1)*(w-1)+M,D=(l+1)*w+M;m.push(v,C,D),m.push(C,N,D)}this.setIndex(m),this.setAttribute("position",new In(d,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Pr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const s=Pr(o[i]);for(const l in s)e[l]=s[l]}return e}function VM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function rv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const XM={clone:Pr,merge:On};var kM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kM,this.fragmentShader=WM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=VM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class qM extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class YM extends Yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jM extends Yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ov extends zn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new te(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const wh=new Qe,s_=new tt,r_=new tt;class ZM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;s_.setFromMatrixPosition(e.matrixWorld),i.position.copy(s_),r_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(r_),i.updateMatrixWorld(),wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Xo||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cc=new tt,wc=new Ir,zi=new tt;class lv extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cc,wc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,wc,zi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Cc,wc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,wc,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $a=new tt,o_=new Ae,l_=new Ae;class ii extends lv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,i){return this.getViewBounds(e,o_,l_),i.subVectors(l_,o_)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(sh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class KM extends ZM{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class QM extends ov{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new KM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class cv extends lv{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,h=u+d*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(u,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class JM extends ov{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ar=-90,Rr=1;class $M extends zn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(Ar,Rr,e,i);l.layers=this.layers,this.add(l);const u=new ii(Ar,Rr,e,i);u.layers=this.layers,this.add(u);const h=new ii(Ar,Rr,e,i);h.layers=this.layers,this.add(h);const p=new ii(Ar,Rr,e,i);p.layers=this.layers,this.add(p);const m=new ii(Ar,Rr,e,i);m.layers=this.layers,this.add(m);const d=new ii(Ar,Rr,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,p,m]=i;for(const d of i)this.remove(d);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Xo)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,p,m,d,x]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(S,g,y),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class ty extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function c_(o,e,i,s){const l=ey(s);switch(i){case j_:return o*e;case K_:return o*e/l.components*l.byteLength;case zd:return o*e/l.components*l.byteLength;case Lr:return o*e*2/l.components*l.byteLength;case Id:return o*e*2/l.components*l.byteLength;case Z_:return o*e*3/l.components*l.byteLength;case wi:return o*e*4/l.components*l.byteLength;case Fd:return o*e*4/l.components*l.byteLength;case Lc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kh:case Jh:return Math.max(o,16)*Math.max(e,8)/4;case Zh:case Qh:return Math.max(o,8)*Math.max(e,8)/2;case $h:case td:case nd:case id:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ed:case ad:case sd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ld:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case cd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case fd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case hd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case pd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case md:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case gd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case _d:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case vd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case xd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Sd:case Md:case yd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ed:case bd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Td:case Ad:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ey(o){switch(o){case ai:case k_:return{byteLength:1,components:1};case Go:case W_:case xa:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case Xi:case Ld:case Bi:return{byteLength:4,components:1};case q_:case Y_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);function uv(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function ny(o){const e=new WeakMap;function i(p,m){const d=p.array,x=p.usage,S=d.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,d,x),p.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,d){const x=m.array,S=m.updateRanges;if(o.bindBuffer(d,p),S.length===0)o.bufferSubData(d,0,x);else{S.sort((y,b)=>y.start-b.start);let g=0;for(let y=1;y<S.length;y++){const b=S[g],w=S[y];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,S[g]=w)}S.length=g+1;for(let y=0,b=S.length;y<b;y++){const w=S[y];o.bufferSubData(d,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:u,update:h}}var iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,py=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,my=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_y=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,by=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ay=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ly="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Py=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ky=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ME=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,NE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ib=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ub=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Eb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ob=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:iy,alphahash_pars_fragment:ay,alphamap_fragment:sy,alphamap_pars_fragment:ry,alphatest_fragment:oy,alphatest_pars_fragment:ly,aomap_fragment:cy,aomap_pars_fragment:uy,batching_pars_vertex:fy,batching_vertex:hy,begin_vertex:dy,beginnormal_vertex:py,bsdfs:my,iridescence_fragment:gy,bumpmap_pars_fragment:_y,clipping_planes_fragment:vy,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:My,color_fragment:yy,color_pars_fragment:Ey,color_pars_vertex:by,color_vertex:Ty,common:Ay,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Cy,displacementmap_pars_vertex:wy,displacementmap_vertex:Dy,emissivemap_fragment:Uy,emissivemap_pars_fragment:Ny,colorspace_fragment:Ly,colorspace_pars_fragment:Oy,envmap_fragment:Py,envmap_common_pars_fragment:zy,envmap_pars_fragment:Iy,envmap_pars_vertex:Fy,envmap_physical_pars_fragment:Zy,envmap_vertex:By,fog_vertex:Hy,fog_pars_vertex:Gy,fog_fragment:Vy,fog_pars_fragment:Xy,gradientmap_pars_fragment:ky,lightmap_pars_fragment:Wy,lights_lambert_fragment:qy,lights_lambert_pars_fragment:Yy,lights_pars_begin:jy,lights_toon_fragment:Ky,lights_toon_pars_fragment:Qy,lights_phong_fragment:Jy,lights_phong_pars_fragment:$y,lights_physical_fragment:tE,lights_physical_pars_fragment:eE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:aE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:rE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:lE,map_fragment:cE,map_pars_fragment:uE,map_particle_fragment:fE,map_particle_pars_fragment:hE,metalnessmap_fragment:dE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:gE,morphnormal_vertex:_E,morphtarget_pars_vertex:vE,morphtarget_vertex:xE,normal_fragment_begin:SE,normal_fragment_maps:ME,normal_pars_fragment:yE,normal_pars_vertex:EE,normal_vertex:bE,normalmap_pars_fragment:TE,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:wE,opaque_fragment:DE,packing:UE,premultiplied_alpha_fragment:NE,project_vertex:LE,dithering_fragment:OE,dithering_pars_fragment:PE,roughnessmap_fragment:zE,roughnessmap_pars_fragment:IE,shadowmap_pars_fragment:FE,shadowmap_pars_vertex:BE,shadowmap_vertex:HE,shadowmask_pars_fragment:GE,skinbase_vertex:VE,skinning_pars_vertex:XE,skinning_vertex:kE,skinnormal_vertex:WE,specularmap_fragment:qE,specularmap_pars_fragment:YE,tonemapping_fragment:jE,tonemapping_pars_fragment:ZE,transmission_fragment:KE,transmission_pars_fragment:QE,uv_pars_fragment:JE,uv_pars_vertex:$E,uv_vertex:tb,worldpos_vertex:eb,background_vert:nb,background_frag:ib,backgroundCube_vert:ab,backgroundCube_frag:sb,cube_vert:rb,cube_frag:ob,depth_vert:lb,depth_frag:cb,distance_vert:ub,distance_frag:fb,equirect_vert:hb,equirect_frag:db,linedashed_vert:pb,linedashed_frag:mb,meshbasic_vert:gb,meshbasic_frag:_b,meshlambert_vert:vb,meshlambert_frag:xb,meshmatcap_vert:Sb,meshmatcap_frag:Mb,meshnormal_vert:yb,meshnormal_frag:Eb,meshphong_vert:bb,meshphong_frag:Tb,meshphysical_vert:Ab,meshphysical_frag:Rb,meshtoon_vert:Cb,meshtoon_frag:wb,points_vert:Db,points_frag:Ub,shadow_vert:Nb,shadow_frag:Lb,sprite_vert:Ob,sprite_frag:Pb},Ut={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Fi={basic:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:On([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:On([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new te(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:On([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:On([Ut.points,Ut.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:On([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:On([Ut.common,Ut.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:On([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:On([Ut.sprite,Ut.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:On([Ut.common,Ut.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:On([Ut.lights,Ut.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Fi.physical={uniforms:On([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Dc={r:0,b:0,g:0},bs=new Ma,zb=new Qe;function Ib(o,e,i,s,l,u){const h=new te(0);let p=l===!0?0:1,m,d,x=null,S=0,g=null;function y(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const D=C.backgroundBlurriness>0;N=e.get(N,D)}return N}function b(C){let N=!1;const D=y(C);D===null?M(h,p):D&&D.isColor&&(M(D,1),N=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(C,N){const D=y(N);D&&(D.isCubeTexture||D.mapping===Gc)?(d===void 0&&(d=new Di(new jo(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Pr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),bs.copy(N.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),d.material.uniforms.envMap.value=D,d.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(zb.makeRotationFromEuler(bs)),d.material.toneMapped=Te.getTransfer(D.colorSpace)!==Be,(x!==D||S!==D.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,x=D,S=D.version,g=o.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Di(new Xc(2,2),new _i({name:"BackgroundMaterial",uniforms:Pr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Te.getTransfer(D.colorSpace)!==Be,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||S!==D.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,x=D,S=D.version,g=o.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,N){C.getRGB(Dc,rv(o)),i.buffers.color.setClear(Dc.r,Dc.g,Dc.b,N,u)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,N=1){h.set(C),p=N,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,M(h,p)},render:b,addToRenderList:w,dispose:v}}function Fb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let u=l,h=!1;function p(G,k,j,J,X){let L=!1;const P=S(G,J,j,k);u!==P&&(u=P,d(u.object)),L=y(G,J,j,X),L&&b(G,J,j,X),X!==null&&e.update(X,o.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,D(G,k,j,J),X!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return o.createVertexArray()}function d(G){return o.bindVertexArray(G)}function x(G){return o.deleteVertexArray(G)}function S(G,k,j,J){const X=J.wireframe===!0;let L=s[k.id];L===void 0&&(L={},s[k.id]=L);const P=G.isInstancedMesh===!0?G.id:0;let rt=L[P];rt===void 0&&(rt={},L[P]=rt);let dt=rt[j.id];dt===void 0&&(dt={},rt[j.id]=dt);let Et=dt[X];return Et===void 0&&(Et=g(m()),dt[X]=Et),Et}function g(G){const k=[],j=[],J=[];for(let X=0;X<i;X++)k[X]=0,j[X]=0,J[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:j,attributeDivisors:J,object:G,attributes:{},index:null}}function y(G,k,j,J){const X=u.attributes,L=k.attributes;let P=0;const rt=j.getAttributes();for(const dt in rt)if(rt[dt].location>=0){const z=X[dt];let K=L[dt];if(K===void 0&&(dt==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),dt==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),z===void 0||z.attribute!==K||K&&z.data!==K.data)return!0;P++}return u.attributesNum!==P||u.index!==J}function b(G,k,j,J){const X={},L=k.attributes;let P=0;const rt=j.getAttributes();for(const dt in rt)if(rt[dt].location>=0){let z=L[dt];z===void 0&&(dt==="instanceMatrix"&&G.instanceMatrix&&(z=G.instanceMatrix),dt==="instanceColor"&&G.instanceColor&&(z=G.instanceColor));const K={};K.attribute=z,z&&z.data&&(K.data=z.data),X[dt]=K,P++}u.attributes=X,u.attributesNum=P,u.index=J}function w(){const G=u.newAttributes;for(let k=0,j=G.length;k<j;k++)G[k]=0}function M(G){v(G,0)}function v(G,k){const j=u.newAttributes,J=u.enabledAttributes,X=u.attributeDivisors;j[G]=1,J[G]===0&&(o.enableVertexAttribArray(G),J[G]=1),X[G]!==k&&(o.vertexAttribDivisor(G,k),X[G]=k)}function C(){const G=u.newAttributes,k=u.enabledAttributes;for(let j=0,J=k.length;j<J;j++)k[j]!==G[j]&&(o.disableVertexAttribArray(j),k[j]=0)}function N(G,k,j,J,X,L,P){P===!0?o.vertexAttribIPointer(G,k,j,X,L):o.vertexAttribPointer(G,k,j,J,X,L)}function D(G,k,j,J){w();const X=J.attributes,L=j.getAttributes(),P=k.defaultAttributeValues;for(const rt in L){const dt=L[rt];if(dt.location>=0){let Et=X[rt];if(Et===void 0&&(rt==="instanceMatrix"&&G.instanceMatrix&&(Et=G.instanceMatrix),rt==="instanceColor"&&G.instanceColor&&(Et=G.instanceColor)),Et!==void 0){const z=Et.normalized,K=Et.itemSize,_t=e.get(Et);if(_t===void 0)continue;const At=_t.buffer,zt=_t.type,at=_t.bytesPerElement,vt=zt===o.INT||zt===o.UNSIGNED_INT||Et.gpuType===Ld;if(Et.isInterleavedBufferAttribute){const bt=Et.data,Vt=bt.stride,Zt=Et.offset;if(bt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<dt.locationSize;Jt++)v(dt.location+Jt,bt.meshPerAttribute);G.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Jt=0;Jt<dt.locationSize;Jt++)M(dt.location+Jt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Jt=0;Jt<dt.locationSize;Jt++)N(dt.location+Jt,K/dt.locationSize,zt,z,Vt*at,(Zt+K/dt.locationSize*Jt)*at,vt)}else{if(Et.isInstancedBufferAttribute){for(let bt=0;bt<dt.locationSize;bt++)v(dt.location+bt,Et.meshPerAttribute);G.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let bt=0;bt<dt.locationSize;bt++)M(dt.location+bt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let bt=0;bt<dt.locationSize;bt++)N(dt.location+bt,K/dt.locationSize,zt,z,K*at,K/dt.locationSize*bt*at,vt)}}else if(P!==void 0){const z=P[rt];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(dt.location,z);break;case 3:o.vertexAttrib3fv(dt.location,z);break;case 4:o.vertexAttrib4fv(dt.location,z);break;default:o.vertexAttrib1fv(dt.location,z)}}}}C()}function B(){U();for(const G in s){const k=s[G];for(const j in k){const J=k[j];for(const X in J){const L=J[X];for(const P in L)x(L[P].object),delete L[P];delete J[X]}}delete s[G]}}function F(G){if(s[G.id]===void 0)return;const k=s[G.id];for(const j in k){const J=k[j];for(const X in J){const L=J[X];for(const P in L)x(L[P].object),delete L[P];delete J[X]}}delete s[G.id]}function I(G){for(const k in s){const j=s[k];for(const J in j){const X=j[J];if(X[G.id]===void 0)continue;const L=X[G.id];for(const P in L)x(L[P].object),delete L[P];delete X[G.id]}}}function T(G){for(const k in s){const j=s[k],J=G.isInstancedMesh===!0?G.id:0,X=j[J];if(X!==void 0){for(const L in X){const P=X[L];for(const rt in P)x(P[rt].object),delete P[rt];delete X[L]}delete j[J],Object.keys(j).length===0&&delete s[k]}}}function U(){ot(),h=!0,u!==l&&(u=l,d(u.object))}function ot(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:ot,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function Bb(o,e,i){let s;function l(d){s=d}function u(d,x){o.drawArrays(s,d,x),i.update(x,s,1)}function h(d,x,S){S!==0&&(o.drawArraysInstanced(s,d,x,S),i.update(x,s,S))}function p(d,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,x,0,S);let y=0;for(let b=0;b<S;b++)y+=x[b];i.update(y,s,1)}function m(d,x,S,g){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<d.length;b++)h(d[b],x[b],g[b]);else{y.multiDrawArraysInstancedWEBGL(s,d,0,x,0,g,0,S);let b=0;for(let w=0;w<S;w++)b+=x[w]*g[w];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Hb(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==wi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const T=I===xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ai&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Bi&&!T)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const x=m(d);x!==d&&(oe("WebGLRenderer:",d,"not supported, using",x,"instead."),d=x);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=o.getParameter(o.MAX_SAMPLES),F=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:D,maxSamples:B,samples:F}}function Gb(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Rs,p=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||s!==0||l;return l=g,s=S.length,y},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,g){i=x(S,g,0)},this.setState=function(S,g,y){const b=S.clippingPlanes,w=S.clipIntersection,M=S.clipShadows,v=o.get(S);if(!l||b===null||b.length===0||u&&!M)u?x(null):d();else{const C=u?0:s,N=C*4;let D=v.clippingState||null;m.value=D,D=x(b,g,N,y);for(let B=0;B!==N;++B)D[B]=i[B];v.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(S,g,y,b){const w=S!==null?S.length:0;let M=null;if(w!==0){if(M=m.value,b!==!0||M===null){const v=y+w*4,C=g.matrixWorldInverse;p.getNormalMatrix(C),(M===null||M.length<v)&&(M=new Float32Array(v));for(let N=0,D=y;N!==w;++N,D+=4)h.copy(S[N]).applyMatrix4(C,p),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const es=4,u_=[.125,.215,.35,.446,.526,.582],ws=20,Vb=256,zo=new cv,f_=new te;let Dh=null,Uh=0,Nh=0,Lh=!1;const Xb=new tt;class h_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:p=Xb}=u;Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dh,Uh,Nh),this._renderer.xr.enabled=Lh,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ns||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:xa,format:wi,colorSpace:Or,depthBuffer:!1},l=d_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kb(u)),this._blurMaterial=qb(u,e,i),this._ggxMaterial=Wb(u,e,i)}return l}_compileMaterial(e){const i=new Di(new si,e);this._renderer.compile(i,zo)}_sceneToCubeUV(e,i,s,l,u){const m=new ii(90,1,i,s),d=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,y=S.toneMapping;S.getClearColor(f_),S.toneMapping=Gi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new jo,new Vd({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let v=!1;const C=e.background;C?C.isColor&&(M.color.copy(C),e.background=null,v=!0):(M.color.copy(f_),v=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(m.up.set(0,d[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[N],u.y,u.z)):D===1?(m.up.set(0,0,d[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[N],u.z)):(m.up.set(0,d[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[N]));const B=this._cubeSize;Cr(l,D*B,N>2?B:0,B,B),S.setRenderTarget(l),v&&S.render(w,m),S.render(e,m)}S.toneMapping=y,S.autoClear=g,e.background=C}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ns||e.mapping===Nr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;Cr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,zo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),S=Math.sqrt(d*d-x*x),g=0+d*1.25,y=S*g,{_lodMax:b}=this,w=this._sizeLods[s],M=3*w*(s>b-es?s-b+es:0),v=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=b-i,Cr(u,M,v,3*w,2*w),l.setRenderTarget(u),l.render(p,zo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-s,Cr(e,M,v,3*w,2*w),l.setRenderTarget(e),l.render(p,zo)}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[l];S.material=d;const g=d.uniforms,y=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*ws-1),w=u/b,M=isFinite(u)?1+Math.floor(x*w):ws;M>ws&&oe(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ws}`);const v=[];let C=0;for(let I=0;I<ws;++I){const T=I/w,U=Math.exp(-T*T/2);v.push(U),I===0?C+=U:I<M&&(C+=2*U)}for(let I=0;I<v.length;I++)v[I]=v[I]/C;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=v,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=b,g.mipInt.value=N-s;const D=this._sizeLods[l],B=3*D*(l>N-es?l-N+es:0),F=4*(this._cubeSize-D);Cr(i,B,F,3*D,2*D),m.setRenderTarget(i),m.render(S,zo)}}function kb(o){const e=[],i=[],s=[];let l=o;const u=o-es+1+u_.length;for(let h=0;h<u;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>o-es?m=u_[h-o+es-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),x=-d,S=1+d,g=[x,x,S,x,S,S,x,x,S,S,x,S],y=6,b=6,w=3,M=2,v=1,C=new Float32Array(w*b*y),N=new Float32Array(M*b*y),D=new Float32Array(v*b*y);for(let F=0;F<y;F++){const I=F%3*2/3-1,T=F>2?0:-1,U=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];C.set(U,w*b*F),N.set(g,M*b*F);const ot=[F,F,F,F,F,F];D.set(ot,v*b*F)}const B=new si;B.setAttribute("position",new gi(C,w)),B.setAttribute("uv",new gi(N,M)),B.setAttribute("faceIndex",new gi(D,v)),s.push(new Di(B,null)),l>es&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function d_(o,e,i){const s=new Vi(o,e,i);return s.texture.mapping=Gc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function Wb(o,e,i){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function qb(o,e,i){const s=new Float32Array(ws),l=new tt(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function p_(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function m_(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class fv extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new av(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new jo(5,5,5),u=new _i({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:ga});u.uniforms.tEquirect.value=i;const h=new Di(l,u),p=i.minFilter;return i.minFilter===Ds&&(i.minFilter=Cn),new $M(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}function Yb(o){let e=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):u(g)}function u(g){if(g&&g.isTexture){const y=g.mapping;if(y===nh||y===ih)if(e.has(g)){const b=e.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new fv(b.height);return w.fromEquirectangularTexture(o,g),e.set(g,w),g.addEventListener("dispose",d),p(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,b=y===nh||y===ih,w=y===Ns||y===Nr;if(b||w){let M=i.get(g);const v=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new h_(o)),M=b?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return b&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new h_(o)),M=b?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",x),M.texture):null}}}return g}function p(g,y){return y===nh?g.mapping=Ns:y===ih&&(g.mapping=Nr),g}function m(g){let y=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&y++;return y===b}function d(g){const y=g.target;y.removeEventListener("dispose",d);const b=e.get(y);b!==void 0&&(e.delete(y),b.dispose())}function x(g){const y=g.target;y.removeEventListener("dispose",x);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function jb(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Hc("WebGLRenderer: "+s+" extension not supported."),l}}}function Zb(o,e,i,s){const l={},u=new WeakMap;function h(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",h),delete l[g.id];const y=u.get(g);y&&(e.remove(y),u.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const y in g)e.update(g[y],o.ARRAY_BUFFER)}function d(S){const g=[],y=S.index,b=S.attributes.position;let w=0;if(b===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let N=0,D=C.length;N<D;N+=3){const B=C[N+0],F=C[N+1],I=C[N+2];g.push(B,F,F,I,I,B)}}else{const C=b.array;w=b.version;for(let N=0,D=C.length/3-1;N<D;N+=3){const B=N+0,F=N+1,I=N+2;g.push(B,F,F,I,I,B)}}const M=new(b.count>=65535?nv:ev)(g,1);M.version=w;const v=u.get(S);v&&e.remove(v),u.set(S,M)}function x(S){const g=u.get(S);if(g){const y=S.index;y!==null&&g.version<y.version&&d(S)}else d(S);return u.get(S)}return{get:p,update:m,getWireframeAttribute:x}}function Kb(o,e,i){let s;function l(g){s=g}let u,h;function p(g){u=g.type,h=g.bytesPerElement}function m(g,y){o.drawElements(s,y,u,g*h),i.update(y,s,1)}function d(g,y,b){b!==0&&(o.drawElementsInstanced(s,y,u,g*h,b),i.update(y,s,b))}function x(g,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,g,0,b);let M=0;for(let v=0;v<b;v++)M+=y[v];i.update(M,s,1)}function S(g,y,b,w){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<g.length;v++)d(g[v]/h,y[v],w[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,u,g,0,w,0,b);let v=0;for(let C=0;C<b;C++)v+=y[C]*w[C];i.update(v,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=x,this.renderMultiDrawInstances=S}function Qb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:De("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Jb(o,e,i){const s=new WeakMap,l=new en;function u(h,p,m){const d=h.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=x!==void 0?x.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let ot=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",ot)};var y=ot;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let B=p.attributes.position.count*D,F=1;B>e.maxTextureSize&&(F=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const I=new Float32Array(B*F*4*S),T=new J_(I,B,F,S);T.type=Bi,T.needsUpdate=!0;const U=D*4;for(let G=0;G<S;G++){const k=v[G],j=C[G],J=N[G],X=B*F*4*G;for(let L=0;L<k.count;L++){const P=L*U;b===!0&&(l.fromBufferAttribute(k,L),I[X+P+0]=l.x,I[X+P+1]=l.y,I[X+P+2]=l.z,I[X+P+3]=0),w===!0&&(l.fromBufferAttribute(j,L),I[X+P+4]=l.x,I[X+P+5]=l.y,I[X+P+6]=l.z,I[X+P+7]=0),M===!0&&(l.fromBufferAttribute(J,L),I[X+P+8]=l.x,I[X+P+9]=l.y,I[X+P+10]=l.z,I[X+P+11]=J.itemSize===4?l.w:1)}}g={count:S,texture:T,size:new Ae(B,F)},s.set(p,g),p.addEventListener("dispose",ot)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:u}}function $b(o,e,i,s,l){let u=new WeakMap;function h(d){const x=l.render.frame,S=d.geometry,g=e.get(d,S);if(u.get(g)!==x&&(e.update(g),u.set(g,x)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),u.get(d)!==x&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),u.set(d,x))),d.isSkinnedMesh){const y=d.skeleton;u.get(y)!==x&&(y.update(),u.set(y,x))}return g}function p(){u=new WeakMap}function m(d){const x=d.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:h,dispose:p}}const tT={[z_]:"LINEAR_TONE_MAPPING",[I_]:"REINHARD_TONE_MAPPING",[F_]:"CINEON_TONE_MAPPING",[B_]:"ACES_FILMIC_TONE_MAPPING",[G_]:"AGX_TONE_MAPPING",[V_]:"NEUTRAL_TONE_MAPPING",[H_]:"CUSTOM_TONE_MAPPING"};function eT(o,e,i,s,l){const u=new Vi(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Vi(e,i,{type:xa,depthBuffer:!1,stencilBuffer:!1}),p=new si;p.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new In([0,2,0,0,2,0],2));const m=new qM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Di(p,m),x=new cv(-1,1,1,-1,0,1);let S=null,g=null,y=!1,b,w=null,M=[],v=!1;this.setSize=function(C,N){u.setSize(C,N),h.setSize(C,N);for(let D=0;D<M.length;D++){const B=M[D];B.setSize&&B.setSize(C,N)}},this.setEffects=function(C){M=C,v=M.length>0&&M[0].isRenderPass===!0;const N=u.width,D=u.height;for(let B=0;B<M.length;B++){const F=M[B];F.setSize&&F.setSize(N,D)}},this.begin=function(C,N){if(y||C.toneMapping===Gi&&M.length===0)return!1;if(w=N,N!==null){const D=N.width,B=N.height;(u.width!==D||u.height!==B)&&this.setSize(D,B)}return v===!1&&C.setRenderTarget(u),b=C.toneMapping,C.toneMapping=Gi,!0},this.hasRenderPass=function(){return v},this.end=function(C,N){C.toneMapping=b,y=!0;let D=u,B=h;for(let F=0;F<M.length;F++){const I=M[F];if(I.enabled!==!1&&(I.render(C,B,D,N),I.needsSwap!==!1)){const T=D;D=B,B=T}}if(S!==C.outputColorSpace||g!==C.toneMapping){S=C.outputColorSpace,g=C.toneMapping,m.defines={},Te.getTransfer(S)===Be&&(m.defines.SRGB_TRANSFER="");const F=tT[g];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(w),C.render(d,x),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),h.dispose(),p.dispose(),m.dispose()}}const hv=new Pn,wd=new ko(1,1),dv=new J_,pv=new MM,mv=new av,g_=[],__=[],v_=new Float32Array(16),x_=new Float32Array(9),S_=new Float32Array(4);function Fr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=g_[l];if(u===void 0&&(u=new Float32Array(l),g_[l]=u),e!==0){s.toArray(u,0);for(let h=1,p=0;h!==e;++h)p+=i,o[h].toArray(u,p)}return u}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Wc(o,e){let i=__[e];i===void 0&&(i=new Int32Array(e),__[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function nT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function iT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function aT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function sT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function rT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;S_.set(s),o.uniformMatrix2fv(this.addr,!1,S_),_n(i,s)}}function oT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;x_.set(s),o.uniformMatrix3fv(this.addr,!1,x_),_n(i,s)}}function lT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;v_.set(s),o.uniformMatrix4fv(this.addr,!1,v_),_n(i,s)}}function cT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function fT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function hT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function dT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function _T(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(wd.compareFunction=i.isReversedDepthBuffer()?Hd:Bd,u=wd):u=hv,i.setTexture2D(e||u,l)}function vT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||pv,l)}function xT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||mv,l)}function ST(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||dv,l)}function MT(o){switch(o){case 5126:return nT;case 35664:return iT;case 35665:return aT;case 35666:return sT;case 35674:return rT;case 35675:return oT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return fT;case 35669:case 35673:return hT;case 5125:return dT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return ST}}function yT(o,e){o.uniform1fv(this.addr,e)}function ET(o,e){const i=Fr(e,this.size,2);o.uniform2fv(this.addr,i)}function bT(o,e){const i=Fr(e,this.size,3);o.uniform3fv(this.addr,i)}function TT(o,e){const i=Fr(e,this.size,4);o.uniform4fv(this.addr,i)}function AT(o,e){const i=Fr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function RT(o,e){const i=Fr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function CT(o,e){const i=Fr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function wT(o,e){o.uniform1iv(this.addr,e)}function DT(o,e){o.uniform2iv(this.addr,e)}function UT(o,e){o.uniform3iv(this.addr,e)}function NT(o,e){o.uniform4iv(this.addr,e)}function LT(o,e){o.uniform1uiv(this.addr,e)}function OT(o,e){o.uniform2uiv(this.addr,e)}function PT(o,e){o.uniform3uiv(this.addr,e)}function zT(o,e){o.uniform4uiv(this.addr,e)}function IT(o,e,i){const s=this.cache,l=e.length,u=Wc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=wd:h=hv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,u[p])}function FT(o,e,i){const s=this.cache,l=e.length,u=Wc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||pv,u[h])}function BT(o,e,i){const s=this.cache,l=e.length,u=Wc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||mv,u[h])}function HT(o,e,i){const s=this.cache,l=e.length,u=Wc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||dv,u[h])}function GT(o){switch(o){case 5126:return yT;case 35664:return ET;case 35665:return bT;case 35666:return TT;case 35674:return AT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return wT;case 35667:case 35671:return DT;case 35668:case 35672:return UT;case 35669:case 35673:return NT;case 5125:return LT;case 36294:return OT;case 36295:return PT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return HT}}class VT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=MT(i.type)}}class XT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=GT(i.type)}}class kT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const p=l[u];p.setValue(e,i[p.id],s)}}}const Oh=/(\w+)(\])?(\[|\.)?/g;function M_(o,e){o.seq.push(e),o.map[e.id]=e}function WT(o,e,i){const s=o.name,l=s.length;for(Oh.lastIndex=0;;){const u=Oh.exec(s),h=Oh.lastIndex;let p=u[1];const m=u[2]==="]",d=u[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){M_(i,d===void 0?new VT(p,o,e):new XT(p,o,e));break}else{let S=i.map[p];S===void 0&&(S=new kT(p),M_(i,S)),i=S}}}class Ic{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);WT(p,m,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const p=i[u],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function y_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const qT=37297;let YT=0;function jT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const E_=new de;function ZT(o){Te._getMatrix(E_,Te.workingColorSpace,o);const e=`mat3( ${E_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Fc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function b_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+jT(o.getShaderSource(e),p)}else return u}function KT(o,e){const i=ZT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const QT={[z_]:"Linear",[I_]:"Reinhard",[F_]:"Cineon",[B_]:"ACESFilmic",[G_]:"AgX",[V_]:"Neutral",[H_]:"Custom"};function JT(o,e){const i=QT[e];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new tt;function $T(){Te.getLuminanceCoefficients(Uc);const o=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function e1(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function n1(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:p}}return i}function Ho(o){return o!==""}function T_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(o){return o.replace(i1,s1)}const a1=new Map;function s1(o,e){let i=pe[e];if(i===void 0){const s=a1.get(e);if(s!==void 0)i=pe[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Dd(i)}const r1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R_(o){return o.replace(r1,o1)}function o1(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function C_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const l1={[Nc]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function c1(o){return l1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const u1={[Ns]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[Gc]:"ENVMAP_TYPE_CUBE_UV"};function f1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":u1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const h1={[Nr]:"ENVMAP_MODE_REFRACTION"};function d1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":h1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const p1={[P_]:"ENVMAP_BLENDING_MULTIPLY",[$S]:"ENVMAP_BLENDING_MIX",[tM]:"ENVMAP_BLENDING_ADD"};function m1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":p1[o.combine]||"ENVMAP_BLENDING_NONE"}function g1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function _1(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=c1(i),d=f1(i),x=d1(i),S=m1(i),g=g1(i),y=t1(i),b=e1(u),w=l.createProgram();let M,v,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ho).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ho).join(`
`),v.length>0&&(v+=`
`)):(M=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),v=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+x:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?pe.tonemapping_pars_fragment:"",i.toneMapping!==Gi?JT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,KT("linearToOutputTexel",i.outputColorSpace),$T(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),h=Dd(h),h=T_(h,i),h=A_(h,i),p=Dd(p),p=T_(p,i),p=A_(p,i),h=R_(h),p=R_(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===H0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===H0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=C+M+h,D=C+v+p,B=y_(l,l.VERTEX_SHADER,N),F=y_(l,l.FRAGMENT_SHADER,D);l.attachShader(w,B),l.attachShader(w,F),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(G){if(o.debug.checkShaderErrors){const k=l.getProgramInfoLog(w)||"",j=l.getShaderInfoLog(B)||"",J=l.getShaderInfoLog(F)||"",X=k.trim(),L=j.trim(),P=J.trim();let rt=!0,dt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(rt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,B,F);else{const Et=b_(l,B,"vertex"),z=b_(l,F,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+X+`
`+Et+`
`+z)}else X!==""?oe("WebGLProgram: Program Info Log:",X):(L===""||P==="")&&(dt=!1);dt&&(G.diagnostics={runnable:rt,programLog:X,vertexShader:{log:L,prefix:M},fragmentShader:{log:P,prefix:v}})}l.deleteShader(B),l.deleteShader(F),T=new Ic(l,w),U=n1(l,w)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let ot=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ot===!1&&(ot=l.getProgramParameter(w,qT)),ot},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=F,this}let v1=0;class x1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new S1(e),i.set(e,s)),s}}class S1{constructor(e){this.id=v1++,this.code=e,this.usedTimes=0}}function M1(o,e,i,s,l,u){const h=new $_,p=new x1,m=new Set,d=[],x=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,U,ot,G,k){const j=G.fog,J=k.geometry,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,P=e.get(T.envMap||X,L),rt=P&&P.mapping===Gc?P.image.height:null,dt=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&oe("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Et=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,z=Et!==void 0?Et.length:0;let K=0;J.morphAttributes.position!==void 0&&(K=1),J.morphAttributes.normal!==void 0&&(K=2),J.morphAttributes.color!==void 0&&(K=3);let _t,At,zt,at;if(dt){const be=Fi[dt];_t=be.vertexShader,At=be.fragmentShader}else _t=T.vertexShader,At=T.fragmentShader,p.update(T),zt=p.getVertexShaderID(T),at=p.getFragmentShaderID(T);const vt=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),Vt=k.isInstancedMesh===!0,Zt=k.isBatchedMesh===!0,Jt=!!T.map,Je=!!T.matcap,ve=!!P,me=!!T.aoMap,Ue=!!T.lightMap,le=!!T.bumpMap,Ke=!!T.normalMap,V=!!T.displacementMap,qe=!!T.emissiveMap,Ee=!!T.metalnessMap,Le=!!T.roughnessMap,Wt=T.anisotropy>0,O=T.clearcoat>0,E=T.dispersion>0,Z=T.iridescence>0,pt=T.sheen>0,xt=T.transmission>0,ft=Wt&&!!T.anisotropyMap,Xt=O&&!!T.clearcoatMap,Ct=O&&!!T.clearcoatNormalMap,jt=O&&!!T.clearcoatRoughnessMap,$t=Z&&!!T.iridescenceMap,yt=Z&&!!T.iridescenceThicknessMap,St=pt&&!!T.sheenColorMap,Lt=pt&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,Ot=!!T.specularColorMap,ue=!!T.specularIntensityMap,Y=xt&&!!T.transmissionMap,Rt=xt&&!!T.thicknessMap,Tt=!!T.gradientMap,Pt=!!T.alphaMap,Mt=T.alphaTest>0,ut=!!T.alphaHash,Ft=!!T.extensions;let ne=Gi;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const ze={shaderID:dt,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:At,defines:T.defines,customVertexShaderID:zt,customFragmentShaderID:at,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Zt,batchingColor:Zt&&k._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&k.instanceColor!==null,instancingMorph:Vt&&k.morphTexture!==null,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Or,alphaToCoverage:!!T.alphaToCoverage,map:Jt,matcap:Je,envMap:ve,envMapMode:ve&&P.mapping,envMapCubeUVHeight:rt,aoMap:me,lightMap:Ue,bumpMap:le,normalMap:Ke,displacementMap:V,emissiveMap:qe,normalMapObjectSpace:Ke&&T.normalMapType===aM,normalMapTangentSpace:Ke&&T.normalMapType===iM,metalnessMap:Ee,roughnessMap:Le,anisotropy:Wt,anisotropyMap:ft,clearcoat:O,clearcoatMap:Xt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:jt,dispersion:E,iridescence:Z,iridescenceMap:$t,iridescenceThicknessMap:yt,sheen:pt,sheenColorMap:St,sheenRoughnessMap:Lt,specularMap:Nt,specularColorMap:Ot,specularIntensityMap:ue,transmission:xt,transmissionMap:Y,thicknessMap:Rt,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===wr&&T.alphaToCoverage===!1,alphaMap:Pt,alphaTest:Mt,alphaHash:ut,combine:T.combine,mapUv:Jt&&b(T.map.channel),aoMapUv:me&&b(T.aoMap.channel),lightMapUv:Ue&&b(T.lightMap.channel),bumpMapUv:le&&b(T.bumpMap.channel),normalMapUv:Ke&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:qe&&b(T.emissiveMap.channel),metalnessMapUv:Ee&&b(T.metalnessMap.channel),roughnessMapUv:Le&&b(T.roughnessMap.channel),anisotropyMapUv:ft&&b(T.anisotropyMap.channel),clearcoatMapUv:Xt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:St&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&b(T.sheenRoughnessMap.channel),specularMapUv:Nt&&b(T.specularMap.channel),specularColorMapUv:Ot&&b(T.specularColorMap.channel),specularIntensityMapUv:ue&&b(T.specularIntensityMap.channel),transmissionMapUv:Y&&b(T.transmissionMap.channel),thicknessMapUv:Rt&&b(T.thicknessMap.channel),alphaMapUv:Pt&&b(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ke||Wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(Jt||Pt),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&Ke===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:bt,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:K,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&ot.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:Jt&&T.map.isVideoTexture===!0&&Te.getTransfer(T.map.colorSpace)===Be,decodeVideoTextureEmissive:qe&&T.emissiveMap.isVideoTexture===!0&&Te.getTransfer(T.emissiveMap.colorSpace)===Be,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===pa,flipSided:T.side===Wn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ft&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&T.extensions.multiDraw===!0||Zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ze.vertexUv1s=m.has(1),ze.vertexUv2s=m.has(2),ze.vertexUv3s=m.has(3),m.clear(),ze}function M(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ot in T.defines)U.push(ot),U.push(T.defines[ot]);return T.isRawShaderMaterial===!1&&(v(U,T),C(U,T),U.push(o.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function v(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function C(T,U){h.disableAll(),U.instancing&&h.enable(0),U.instancingColor&&h.enable(1),U.instancingMorph&&h.enable(2),U.matcap&&h.enable(3),U.envMap&&h.enable(4),U.normalMapObjectSpace&&h.enable(5),U.normalMapTangentSpace&&h.enable(6),U.clearcoat&&h.enable(7),U.iridescence&&h.enable(8),U.alphaTest&&h.enable(9),U.vertexColors&&h.enable(10),U.vertexAlphas&&h.enable(11),U.vertexUv1s&&h.enable(12),U.vertexUv2s&&h.enable(13),U.vertexUv3s&&h.enable(14),U.vertexTangents&&h.enable(15),U.anisotropy&&h.enable(16),U.alphaHash&&h.enable(17),U.batching&&h.enable(18),U.dispersion&&h.enable(19),U.batchingColor&&h.enable(20),U.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.reversedDepthBuffer&&h.enable(4),U.skinning&&h.enable(5),U.morphTargets&&h.enable(6),U.morphNormals&&h.enable(7),U.morphColors&&h.enable(8),U.premultipliedAlpha&&h.enable(9),U.shadowMapEnabled&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.decodeVideoTextureEmissive&&h.enable(20),U.alphaToCoverage&&h.enable(21),T.push(h.mask)}function N(T){const U=y[T.type];let ot;if(U){const G=Fi[U];ot=XM.clone(G.uniforms)}else ot=T.uniforms;return ot}function D(T,U){let ot=x.get(U);return ot!==void 0?++ot.usedTimes:(ot=new _1(o,U,T,l),d.push(ot),x.set(U,ot)),ot}function B(T){if(--T.usedTimes===0){const U=d.indexOf(T);d[U]=d[d.length-1],d.pop(),x.delete(T.cacheKey),T.destroy()}}function F(T){p.remove(T)}function I(){p.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:N,acquireProgram:D,releaseProgram:B,releaseShaderCache:F,programs:d,dispose:I}}function y1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function s(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function E1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function w_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function D_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,b,w,M,v){let C=o[e];return C===void 0?(C={id:g.id,object:g,geometry:y,material:b,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:v},o[e]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=b,C.materialVariant=h(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=v),e++,C}function m(g,y,b,w,M,v){const C=p(g,y,b,w,M,v);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function d(g,y,b,w,M,v){const C=p(g,y,b,w,M,v);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function x(g,y){i.length>1&&i.sort(g||E1),s.length>1&&s.sort(y||w_),l.length>1&&l.sort(y||w_)}function S(){for(let g=e,y=o.length;g<y;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:d,finish:S,sort:x}}function b1(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new D_,o.set(s,[h])):l>=u.length?(h=new D_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function T1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new tt,color:new te};break;case"SpotLight":i={position:new tt,direction:new tt,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new te,groundColor:new te};break;case"RectAreaLight":i={color:new te,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[e.id]=i,i}}}function A1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let R1=0;function C1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function w1(o){const e=new T1,i=A1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new tt);const l=new tt,u=new Qe,h=new Qe;function p(d){let x=0,S=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let y=0,b=0,w=0,M=0,v=0,C=0,N=0,D=0,B=0,F=0,I=0;d.sort(C1);for(let U=0,ot=d.length;U<ot;U++){const G=d[U],k=G.color,j=G.intensity,J=G.distance;let X=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Lr?X=G.shadow.map.texture:X=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=k.r*j,S+=k.g*j,g+=k.b*j;else if(G.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(G.sh.coefficients[L],j);I++}else if(G.isDirectionalLight){const L=e.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const P=G.shadow,rt=i.get(G);rt.shadowIntensity=P.intensity,rt.shadowBias=P.bias,rt.shadowNormalBias=P.normalBias,rt.shadowRadius=P.radius,rt.shadowMapSize=P.mapSize,s.directionalShadow[y]=rt,s.directionalShadowMap[y]=X,s.directionalShadowMatrix[y]=G.shadow.matrix,C++}s.directional[y]=L,y++}else if(G.isSpotLight){const L=e.get(G);L.position.setFromMatrixPosition(G.matrixWorld),L.color.copy(k).multiplyScalar(j),L.distance=J,L.coneCos=Math.cos(G.angle),L.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),L.decay=G.decay,s.spot[w]=L;const P=G.shadow;if(G.map&&(s.spotLightMap[B]=G.map,B++,P.updateMatrices(G),G.castShadow&&F++),s.spotLightMatrix[w]=P.matrix,G.castShadow){const rt=i.get(G);rt.shadowIntensity=P.intensity,rt.shadowBias=P.bias,rt.shadowNormalBias=P.normalBias,rt.shadowRadius=P.radius,rt.shadowMapSize=P.mapSize,s.spotShadow[w]=rt,s.spotShadowMap[w]=X,D++}w++}else if(G.isRectAreaLight){const L=e.get(G);L.color.copy(k).multiplyScalar(j),L.halfWidth.set(G.width*.5,0,0),L.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=L,M++}else if(G.isPointLight){const L=e.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),L.distance=G.distance,L.decay=G.decay,G.castShadow){const P=G.shadow,rt=i.get(G);rt.shadowIntensity=P.intensity,rt.shadowBias=P.bias,rt.shadowNormalBias=P.normalBias,rt.shadowRadius=P.radius,rt.shadowMapSize=P.mapSize,rt.shadowCameraNear=P.camera.near,rt.shadowCameraFar=P.camera.far,s.pointShadow[b]=rt,s.pointShadowMap[b]=X,s.pointShadowMatrix[b]=G.shadow.matrix,N++}s.point[b]=L,b++}else if(G.isHemisphereLight){const L=e.get(G);L.skyColor.copy(G.color).multiplyScalar(j),L.groundColor.copy(G.groundColor).multiplyScalar(j),s.hemi[v]=L,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=S,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==v||T.numDirectionalShadows!==C||T.numPointShadows!==N||T.numSpotShadows!==D||T.numSpotMaps!==B||T.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=D+B-F,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=I,T.directionalLength=y,T.pointLength=b,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=v,T.numDirectionalShadows=C,T.numPointShadows=N,T.numSpotShadows=D,T.numSpotMaps=B,T.numLightProbes=I,s.version=R1++)}function m(d,x){let S=0,g=0,y=0,b=0,w=0;const M=x.matrixWorldInverse;for(let v=0,C=d.length;v<C;v++){const N=d[v];if(N.isDirectionalLight){const D=s.directional[S];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(N.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),h.identity(),u.copy(N.matrixWorld),u.premultiply(M),h.extractRotation(u),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),g++}else if(N.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:p,setupView:m,state:s}}function U_(o){const e=new w1(o),i=[],s=[];function l(x){d.camera=x,i.length=0,s.length=0}function u(x){i.push(x)}function h(x){s.push(x)}function p(){e.setup(i)}function m(x){e.setupView(i,x)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:h}}function D1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let p;return h===void 0?(p=new U_(o),e.set(l,[p])):u>=h.length?(p=new U_(o),h.push(p)):p=h[u],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const U1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,L1=[new tt(1,0,0),new tt(-1,0,0),new tt(0,1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1)],O1=[new tt(0,-1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,-1,0),new tt(0,-1,0)],N_=new Qe,Io=new tt,Ph=new tt;function P1(o,e,i){let s=new Xd;const l=new Ae,u=new Ae,h=new en,p=new YM,m=new jM,d={},x=i.maxTextureSize,S={[va]:Wn,[Wn]:va,[pa]:pa},g=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:U1,fragmentShader:N1}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new si;b.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Di(b,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let v=this.type;this.render=function(F,I,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;this.type===OS&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Nc);const U=o.getRenderTarget(),ot=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),k=o.state;k.setBlending(ga),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const j=v!==this.type;j&&I.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(X=>X.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,X=F.length;J<X;J++){const L=F[J],P=L.shadow;if(P===void 0){oe("WebGLShadowMap:",L,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const rt=P.getFrameExtents();l.multiply(rt),u.copy(P.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/rt.x),l.x=u.x*rt.x,P.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/rt.y),l.y=u.y*rt.y,P.mapSize.y=u.y));const dt=o.state.buffers.depth.getReversed();if(P.camera._reversedDepth=dt,P.map===null||j===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Fo){if(L.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Vi(l.x,l.y,{format:Lr,type:xa,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),P.map.texture.name=L.name+".shadowMap",P.map.depthTexture=new ko(l.x,l.y,Bi),P.map.depthTexture.name=L.name+".shadowMapDepth",P.map.depthTexture.format=Sa,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=bn,P.map.depthTexture.magFilter=bn}else L.isPointLight?(P.map=new fv(l.x),P.map.depthTexture=new GM(l.x,Xi)):(P.map=new Vi(l.x,l.y),P.map.depthTexture=new ko(l.x,l.y,Xi)),P.map.depthTexture.name=L.name+".shadowMap",P.map.depthTexture.format=Sa,this.type===Nc?(P.map.depthTexture.compareFunction=dt?Hd:Bd,P.map.depthTexture.minFilter=Cn,P.map.depthTexture.magFilter=Cn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=bn,P.map.depthTexture.magFilter=bn);P.camera.updateProjectionMatrix()}const Et=P.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<Et;z++){if(P.map.isWebGLCubeRenderTarget)o.setRenderTarget(P.map,z),o.clear();else{z===0&&(o.setRenderTarget(P.map),o.clear());const K=P.getViewport(z);h.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),k.viewport(h)}if(L.isPointLight){const K=P.camera,_t=P.matrix,At=L.distance||K.far;At!==K.far&&(K.far=At,K.updateProjectionMatrix()),Io.setFromMatrixPosition(L.matrixWorld),K.position.copy(Io),Ph.copy(K.position),Ph.add(L1[z]),K.up.copy(O1[z]),K.lookAt(Ph),K.updateMatrixWorld(),_t.makeTranslation(-Io.x,-Io.y,-Io.z),N_.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),P._frustum.setFromProjectionMatrix(N_,K.coordinateSystem,K.reversedDepth)}else P.updateMatrices(L);s=P.getFrustum(),D(I,T,P.camera,L,this.type)}P.isPointLightShadow!==!0&&this.type===Fo&&C(P,T),P.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(U,ot,G)};function C(F,I){const T=e.update(w);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Vi(l.x,l.y,{format:Lr,type:xa})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(I,null,T,g,w,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(I,null,T,y,w,null)}function N(F,I,T,U){let ot=null;const G=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)ot=G;else if(ot=T.isPointLight===!0?m:p,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const k=ot.uuid,j=I.uuid;let J=d[k];J===void 0&&(J={},d[k]=J);let X=J[j];X===void 0&&(X=ot.clone(),J[j]=X,I.addEventListener("dispose",B)),ot=X}if(ot.visible=I.visible,ot.wireframe=I.wireframe,U===Fo?ot.side=I.shadowSide!==null?I.shadowSide:I.side:ot.side=I.shadowSide!==null?I.shadowSide:S[I.side],ot.alphaMap=I.alphaMap,ot.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,ot.map=I.map,ot.clipShadows=I.clipShadows,ot.clippingPlanes=I.clippingPlanes,ot.clipIntersection=I.clipIntersection,ot.displacementMap=I.displacementMap,ot.displacementScale=I.displacementScale,ot.displacementBias=I.displacementBias,ot.wireframeLinewidth=I.wireframeLinewidth,ot.linewidth=I.linewidth,T.isPointLight===!0&&ot.isMeshDistanceMaterial===!0){const k=o.properties.get(ot);k.light=T}return ot}function D(F,I,T,U,ot){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&ot===Fo)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const j=e.update(F),J=F.material;if(Array.isArray(J)){const X=j.groups;for(let L=0,P=X.length;L<P;L++){const rt=X[L],dt=J[rt.materialIndex];if(dt&&dt.visible){const Et=N(F,dt,U,ot);F.onBeforeShadow(o,F,I,T,j,Et,rt),o.renderBufferDirect(T,null,j,Et,F,rt),F.onAfterShadow(o,F,I,T,j,Et,rt)}}}else if(J.visible){const X=N(F,J,U,ot);F.onBeforeShadow(o,F,I,T,j,X,null),o.renderBufferDirect(T,null,j,X,F,null),F.onAfterShadow(o,F,I,T,j,X,null)}}const k=F.children;for(let j=0,J=k.length;j<J;j++)D(k[j],I,T,U,ot)}function B(F){F.target.removeEventListener("dispose",B);for(const T in d){const U=d[T],ot=F.target.uuid;ot in U&&(U[ot].dispose(),delete U[ot])}}}function z1(o,e){function i(){let Y=!1;const Rt=new en;let Tt=null;const Pt=new en(0,0,0,0);return{setMask:function(Mt){Tt!==Mt&&!Y&&(o.colorMask(Mt,Mt,Mt,Mt),Tt=Mt)},setLocked:function(Mt){Y=Mt},setClear:function(Mt,ut,Ft,ne,ze){ze===!0&&(Mt*=ne,ut*=ne,Ft*=ne),Rt.set(Mt,ut,Ft,ne),Pt.equals(Rt)===!1&&(o.clearColor(Mt,ut,Ft,ne),Pt.copy(Rt))},reset:function(){Y=!1,Tt=null,Pt.set(-1,0,0,0)}}}function s(){let Y=!1,Rt=!1,Tt=null,Pt=null,Mt=null;return{setReversed:function(ut){if(Rt!==ut){const Ft=e.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Rt=ut;const ne=Mt;Mt=null,this.setClear(ne)}},getReversed:function(){return Rt},setTest:function(ut){ut?vt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(ut){Tt!==ut&&!Y&&(o.depthMask(ut),Tt=ut)},setFunc:function(ut){if(Rt&&(ut=pM[ut]),Pt!==ut){switch(ut){case Hh:o.depthFunc(o.NEVER);break;case Gh:o.depthFunc(o.ALWAYS);break;case Vh:o.depthFunc(o.LESS);break;case Ur:o.depthFunc(o.LEQUAL);break;case Xh:o.depthFunc(o.EQUAL);break;case kh:o.depthFunc(o.GEQUAL);break;case Wh:o.depthFunc(o.GREATER);break;case qh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=ut}},setLocked:function(ut){Y=ut},setClear:function(ut){Mt!==ut&&(Mt=ut,Rt&&(ut=1-ut),o.clearDepth(ut))},reset:function(){Y=!1,Tt=null,Pt=null,Mt=null,Rt=!1}}}function l(){let Y=!1,Rt=null,Tt=null,Pt=null,Mt=null,ut=null,Ft=null,ne=null,ze=null;return{setTest:function(be){Y||(be?vt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(be){Rt!==be&&!Y&&(o.stencilMask(be),Rt=be)},setFunc:function(be,wn,vi){(Tt!==be||Pt!==wn||Mt!==vi)&&(o.stencilFunc(be,wn,vi),Tt=be,Pt=wn,Mt=vi)},setOp:function(be,wn,vi){(ut!==be||Ft!==wn||ne!==vi)&&(o.stencilOp(be,wn,vi),ut=be,Ft=wn,ne=vi)},setLocked:function(be){Y=be},setClear:function(be){ze!==be&&(o.clearStencil(be),ze=be)},reset:function(){Y=!1,Rt=null,Tt=null,Pt=null,Mt=null,ut=null,Ft=null,ne=null,ze=null}}}const u=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let x={},S={},g=new WeakMap,y=[],b=null,w=!1,M=null,v=null,C=null,N=null,D=null,B=null,F=null,I=new te(0,0,0),T=0,U=!1,ot=null,G=null,k=null,j=null,J=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,P=0;const rt=o.getParameter(o.VERSION);rt.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(rt)[1]),L=P>=1):rt.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),L=P>=2);let dt=null,Et={};const z=o.getParameter(o.SCISSOR_BOX),K=o.getParameter(o.VIEWPORT),_t=new en().fromArray(z),At=new en().fromArray(K);function zt(Y,Rt,Tt,Pt){const Mt=new Uint8Array(4),ut=o.createTexture();o.bindTexture(Y,ut),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<Tt;Ft++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Rt+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return ut}const at={};at[o.TEXTURE_2D]=zt(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=zt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=zt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=zt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),p.setClear(0),vt(o.DEPTH_TEST),h.setFunc(Ur),le(!1),Ke(P0),vt(o.CULL_FACE),me(ga);function vt(Y){x[Y]!==!0&&(o.enable(Y),x[Y]=!0)}function bt(Y){x[Y]!==!1&&(o.disable(Y),x[Y]=!1)}function Vt(Y,Rt){return S[Y]!==Rt?(o.bindFramebuffer(Y,Rt),S[Y]=Rt,Y===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Rt),Y===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Zt(Y,Rt){let Tt=y,Pt=!1;if(Y){Tt=g.get(Rt),Tt===void 0&&(Tt=[],g.set(Rt,Tt));const Mt=Y.textures;if(Tt.length!==Mt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let ut=0,Ft=Mt.length;ut<Ft;ut++)Tt[ut]=o.COLOR_ATTACHMENT0+ut;Tt.length=Mt.length,Pt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(Tt)}function Jt(Y){return b!==Y?(o.useProgram(Y),b=Y,!0):!1}const Je={[Cs]:o.FUNC_ADD,[zS]:o.FUNC_SUBTRACT,[IS]:o.FUNC_REVERSE_SUBTRACT};Je[FS]=o.MIN,Je[BS]=o.MAX;const ve={[HS]:o.ZERO,[GS]:o.ONE,[VS]:o.SRC_COLOR,[Fh]:o.SRC_ALPHA,[jS]:o.SRC_ALPHA_SATURATE,[qS]:o.DST_COLOR,[kS]:o.DST_ALPHA,[XS]:o.ONE_MINUS_SRC_COLOR,[Bh]:o.ONE_MINUS_SRC_ALPHA,[YS]:o.ONE_MINUS_DST_COLOR,[WS]:o.ONE_MINUS_DST_ALPHA,[ZS]:o.CONSTANT_COLOR,[KS]:o.ONE_MINUS_CONSTANT_COLOR,[QS]:o.CONSTANT_ALPHA,[JS]:o.ONE_MINUS_CONSTANT_ALPHA};function me(Y,Rt,Tt,Pt,Mt,ut,Ft,ne,ze,be){if(Y===ga){w===!0&&(bt(o.BLEND),w=!1);return}if(w===!1&&(vt(o.BLEND),w=!0),Y!==PS){if(Y!==M||be!==U){if((v!==Cs||D!==Cs)&&(o.blendEquation(o.FUNC_ADD),v=Cs,D=Cs),be)switch(Y){case wr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ih:o.blendFunc(o.ONE,o.ONE);break;case z0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case I0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:De("WebGLState: Invalid blending: ",Y);break}else switch(Y){case wr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ih:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case z0:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I0:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",Y);break}C=null,N=null,B=null,F=null,I.set(0,0,0),T=0,M=Y,U=be}return}Mt=Mt||Rt,ut=ut||Tt,Ft=Ft||Pt,(Rt!==v||Mt!==D)&&(o.blendEquationSeparate(Je[Rt],Je[Mt]),v=Rt,D=Mt),(Tt!==C||Pt!==N||ut!==B||Ft!==F)&&(o.blendFuncSeparate(ve[Tt],ve[Pt],ve[ut],ve[Ft]),C=Tt,N=Pt,B=ut,F=Ft),(ne.equals(I)===!1||ze!==T)&&(o.blendColor(ne.r,ne.g,ne.b,ze),I.copy(ne),T=ze),M=Y,U=!1}function Ue(Y,Rt){Y.side===pa?bt(o.CULL_FACE):vt(o.CULL_FACE);let Tt=Y.side===Wn;Rt&&(Tt=!Tt),le(Tt),Y.blending===wr&&Y.transparent===!1?me(ga):me(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),u.setMask(Y.colorWrite);const Pt=Y.stencilWrite;p.setTest(Pt),Pt&&(p.setMask(Y.stencilWriteMask),p.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),p.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),qe(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(Y){ot!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),ot=Y)}function Ke(Y){Y!==NS?(vt(o.CULL_FACE),Y!==G&&(Y===P0?o.cullFace(o.BACK):Y===LS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),G=Y}function V(Y){Y!==k&&(L&&o.lineWidth(Y),k=Y)}function qe(Y,Rt,Tt){Y?(vt(o.POLYGON_OFFSET_FILL),(j!==Rt||J!==Tt)&&(j=Rt,J=Tt,h.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,Tt))):bt(o.POLYGON_OFFSET_FILL)}function Ee(Y){Y?vt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function Le(Y){Y===void 0&&(Y=o.TEXTURE0+X-1),dt!==Y&&(o.activeTexture(Y),dt=Y)}function Wt(Y,Rt,Tt){Tt===void 0&&(dt===null?Tt=o.TEXTURE0+X-1:Tt=dt);let Pt=Et[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Et[Tt]=Pt),(Pt.type!==Y||Pt.texture!==Rt)&&(dt!==Tt&&(o.activeTexture(Tt),dt=Tt),o.bindTexture(Y,Rt||at[Y]),Pt.type=Y,Pt.texture=Rt)}function O(){const Y=Et[dt];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function Z(){try{o.compressedTexImage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function pt(){try{o.texSubImage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function xt(){try{o.texSubImage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function Ct(){try{o.texStorage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function jt(){try{o.texStorage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function $t(){try{o.texImage2D(...arguments)}catch(Y){De("WebGLState:",Y)}}function yt(){try{o.texImage3D(...arguments)}catch(Y){De("WebGLState:",Y)}}function St(Y){_t.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),_t.copy(Y))}function Lt(Y){At.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),At.copy(Y))}function Nt(Y,Rt){let Tt=d.get(Rt);Tt===void 0&&(Tt=new WeakMap,d.set(Rt,Tt));let Pt=Tt.get(Y);Pt===void 0&&(Pt=o.getUniformBlockIndex(Rt,Y.name),Tt.set(Y,Pt))}function Ot(Y,Rt){const Pt=d.get(Rt).get(Y);m.get(Rt)!==Pt&&(o.uniformBlockBinding(Rt,Pt,Y.__bindingPointIndex),m.set(Rt,Pt))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},dt=null,Et={},S={},g=new WeakMap,y=[],b=null,w=!1,M=null,v=null,C=null,N=null,D=null,B=null,F=null,I=new te(0,0,0),T=0,U=!1,ot=null,G=null,k=null,j=null,J=null,_t.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),p.reset()}return{buffers:{color:u,depth:h,stencil:p},enable:vt,disable:bt,bindFramebuffer:Vt,drawBuffers:Zt,useProgram:Jt,setBlending:me,setMaterial:Ue,setFlipSided:le,setCullFace:Ke,setLineWidth:V,setPolygonOffset:qe,setScissorTest:Ee,activeTexture:Le,bindTexture:Wt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:Z,texImage2D:$t,texImage3D:yt,updateUBOMapping:Nt,uniformBlockBinding:Ot,texStorage2D:Ct,texStorage3D:jt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Xt,scissor:St,viewport:Lt,reset:ue}}function I1(o,e,i,s,l,u,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ae,x=new WeakMap;let S;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return y?new OffscreenCanvas(O,E):Bc("canvas")}function w(O,E,Z){let pt=1;const xt=Wt(O);if((xt.width>Z||xt.height>Z)&&(pt=Z/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ft=Math.floor(pt*xt.width),Xt=Math.floor(pt*xt.height);S===void 0&&(S=b(ft,Xt));const Ct=E?b(ft,Xt):S;return Ct.width=ft,Ct.height=Xt,Ct.getContext("2d").drawImage(O,0,0,ft,Xt),oe("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ft+"x"+Xt+")."),Ct}else return"data"in O&&oe("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),O;return O}function M(O){return O.generateMipmaps}function v(O){o.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(O,E,Z,pt,xt=!1){if(O!==null){if(o[O]!==void 0)return o[O];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ft=E;if(E===o.RED&&(Z===o.FLOAT&&(ft=o.R32F),Z===o.HALF_FLOAT&&(ft=o.R16F),Z===o.UNSIGNED_BYTE&&(ft=o.R8)),E===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ft=o.R8UI),Z===o.UNSIGNED_SHORT&&(ft=o.R16UI),Z===o.UNSIGNED_INT&&(ft=o.R32UI),Z===o.BYTE&&(ft=o.R8I),Z===o.SHORT&&(ft=o.R16I),Z===o.INT&&(ft=o.R32I)),E===o.RG&&(Z===o.FLOAT&&(ft=o.RG32F),Z===o.HALF_FLOAT&&(ft=o.RG16F),Z===o.UNSIGNED_BYTE&&(ft=o.RG8)),E===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ft=o.RG8UI),Z===o.UNSIGNED_SHORT&&(ft=o.RG16UI),Z===o.UNSIGNED_INT&&(ft=o.RG32UI),Z===o.BYTE&&(ft=o.RG8I),Z===o.SHORT&&(ft=o.RG16I),Z===o.INT&&(ft=o.RG32I)),E===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),Z===o.UNSIGNED_INT&&(ft=o.RGB32UI),Z===o.BYTE&&(ft=o.RGB8I),Z===o.SHORT&&(ft=o.RGB16I),Z===o.INT&&(ft=o.RGB32I)),E===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),Z===o.UNSIGNED_INT&&(ft=o.RGBA32UI),Z===o.BYTE&&(ft=o.RGBA8I),Z===o.SHORT&&(ft=o.RGBA16I),Z===o.INT&&(ft=o.RGBA32I)),E===o.RGB&&(Z===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),Z===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),E===o.RGBA){const Xt=xt?Fc:Te.getTransfer(pt);Z===o.FLOAT&&(ft=o.RGBA32F),Z===o.HALF_FLOAT&&(ft=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(ft=Xt===Be?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function D(O,E){let Z;return O?E===null||E===Xi||E===Vo?Z=o.DEPTH24_STENCIL8:E===Bi?Z=o.DEPTH32F_STENCIL8:E===Go&&(Z=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===Vo?Z=o.DEPTH_COMPONENT24:E===Bi?Z=o.DEPTH_COMPONENT32F:E===Go&&(Z=o.DEPTH_COMPONENT16),Z}function B(O,E){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==bn&&O.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function F(O){const E=O.target;E.removeEventListener("dispose",F),T(E),E.isVideoTexture&&x.delete(E)}function I(O){const E=O.target;E.removeEventListener("dispose",I),ot(E)}function T(O){const E=s.get(O);if(E.__webglInit===void 0)return;const Z=O.source,pt=g.get(Z);if(pt){const xt=pt[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&U(O),Object.keys(pt).length===0&&g.delete(Z)}s.remove(O)}function U(O){const E=s.get(O);o.deleteTexture(E.__webglTexture);const Z=O.source,pt=g.get(Z);delete pt[E.__cacheKey],h.memory.textures--}function ot(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let xt=0;xt<E.__webglFramebuffer[pt].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[pt][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[pt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=O.textures;for(let pt=0,xt=Z.length;pt<xt;pt++){const ft=s.get(Z[pt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),s.remove(Z[pt])}s.remove(O)}let G=0;function k(){G=0}function j(){const O=G;return O>=l.maxTextures&&oe("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function J(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function X(O,E){const Z=s.get(O);if(O.isVideoTexture&&Ee(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Z.__version!==O.version){const pt=O.image;if(pt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{at(Z,O,E);return}}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+E)}function L(O,E){const Z=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){at(Z,O,E);return}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+E)}function P(O,E){const Z=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){at(Z,O,E);return}i.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+E)}function rt(O,E){const Z=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Z.__version!==O.version){vt(Z,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+E)}const dt={[Yh]:o.REPEAT,[ma]:o.CLAMP_TO_EDGE,[jh]:o.MIRRORED_REPEAT},Et={[bn]:o.NEAREST,[eM]:o.NEAREST_MIPMAP_NEAREST,[lc]:o.NEAREST_MIPMAP_LINEAR,[Cn]:o.LINEAR,[ah]:o.LINEAR_MIPMAP_NEAREST,[Ds]:o.LINEAR_MIPMAP_LINEAR},z={[sM]:o.NEVER,[uM]:o.ALWAYS,[rM]:o.LESS,[Bd]:o.LEQUAL,[oM]:o.EQUAL,[Hd]:o.GEQUAL,[lM]:o.GREATER,[cM]:o.NOTEQUAL};function K(O,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===ah||E.magFilter===lc||E.magFilter===Ds||E.minFilter===Cn||E.minFilter===ah||E.minFilter===lc||E.minFilter===Ds)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,dt[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,dt[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,dt[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Et[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===bn||E.minFilter!==lc&&E.minFilter!==Ds||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function _t(O,E){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",F));const pt=E.source;let xt=g.get(pt);xt===void 0&&(xt={},g.set(pt,xt));const ft=J(E);if(ft!==O.__cacheKey){xt[ft]===void 0&&(xt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,Z=!0),xt[ft].usedTimes++;const Xt=xt[O.__cacheKey];Xt!==void 0&&(xt[O.__cacheKey].usedTimes--,Xt.usedTimes===0&&U(E)),O.__cacheKey=ft,O.__webglTexture=xt[ft].texture}return Z}function At(O,E,Z){return Math.floor(Math.floor(O/Z)/E)}function zt(O,E,Z,pt){const ft=O.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Z,pt,E.data);else{ft.sort((yt,St)=>yt.start-St.start);let Xt=0;for(let yt=1;yt<ft.length;yt++){const St=ft[Xt],Lt=ft[yt],Nt=St.start+St.count,Ot=At(Lt.start,E.width,4),ue=At(St.start,E.width,4);Lt.start<=Nt+1&&Ot===ue&&At(Lt.start+Lt.count-1,E.width,4)===Ot?St.count=Math.max(St.count,Lt.start+Lt.count-St.start):(++Xt,ft[Xt]=Lt)}ft.length=Xt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),$t=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,St=ft.length;yt<St;yt++){const Lt=ft[yt],Nt=Math.floor(Lt.start/4),Ot=Math.ceil(Lt.count/4),ue=Nt%E.width,Y=Math.floor(Nt/E.width),Rt=Ot,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(o.TEXTURE_2D,0,ue,Y,Rt,Tt,Z,pt,E.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,$t)}}function at(O,E,Z){let pt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=o.TEXTURE_3D);const xt=_t(O,E),ft=E.source;i.bindTexture(pt,O.__webglTexture,o.TEXTURE0+Z);const Xt=s.get(ft);if(ft.version!==Xt.__version||xt===!0){i.activeTexture(o.TEXTURE0+Z);const Ct=Te.getPrimaries(Te.workingColorSpace),jt=E.colorSpace===ts?null:Te.getPrimaries(E.colorSpace),$t=E.colorSpace===ts||Ct===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let yt=w(E.image,!1,l.maxTextureSize);yt=Le(E,yt);const St=u.convert(E.format,E.colorSpace),Lt=u.convert(E.type);let Nt=N(E.internalFormat,St,Lt,E.colorSpace,E.isVideoTexture);K(pt,E);let Ot;const ue=E.mipmaps,Y=E.isVideoTexture!==!0,Rt=Xt.__version===void 0||xt===!0,Tt=ft.dataReady,Pt=B(E,yt);if(E.isDepthTexture)Nt=D(E.format===Us,E.type),Rt&&(Y?i.texStorage2D(o.TEXTURE_2D,1,Nt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Nt,yt.width,yt.height,0,St,Lt,null));else if(E.isDataTexture)if(ue.length>0){Y&&Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Nt,ue[0].width,ue[0].height);for(let Mt=0,ut=ue.length;Mt<ut;Mt++)Ot=ue[Mt],Y?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Lt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Nt,Ot.width,Ot.height,0,St,Lt,Ot.data);E.generateMipmaps=!1}else Y?(Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Nt,yt.width,yt.height),Tt&&zt(E,yt,St,Lt)):i.texImage2D(o.TEXTURE_2D,0,Nt,yt.width,yt.height,0,St,Lt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Y&&Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Nt,ue[0].width,ue[0].height,yt.depth);for(let Mt=0,ut=ue.length;Mt<ut;Mt++)if(Ot=ue[Mt],E.format!==wi)if(St!==null)if(Y){if(Tt)if(E.layerUpdates.size>0){const Ft=c_(Ot.width,Ot.height,E.format,E.type);for(const ne of E.layerUpdates){const ze=Ot.data.subarray(ne*Ft/Ot.data.BYTES_PER_ELEMENT,(ne+1)*Ft/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ne,Ot.width,Ot.height,1,St,ze)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,St,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Nt,Ot.width,Ot.height,yt.depth,0,Ot.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,St,Lt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Nt,Ot.width,Ot.height,yt.depth,0,St,Lt,Ot.data)}else{Y&&Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Nt,ue[0].width,ue[0].height);for(let Mt=0,ut=ue.length;Mt<ut;Mt++)Ot=ue[Mt],E.format!==wi?St!==null?Y?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Nt,Ot.width,Ot.height,0,Ot.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Lt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Nt,Ot.width,Ot.height,0,St,Lt,Ot.data)}else if(E.isDataArrayTexture)if(Y){if(Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Nt,yt.width,yt.height,yt.depth),Tt)if(E.layerUpdates.size>0){const Mt=c_(yt.width,yt.height,E.format,E.type);for(const ut of E.layerUpdates){const Ft=yt.data.subarray(ut*Mt/yt.data.BYTES_PER_ELEMENT,(ut+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ut,yt.width,yt.height,1,St,Lt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,St,Lt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Nt,yt.width,yt.height,yt.depth,0,St,Lt,yt.data);else if(E.isData3DTexture)Y?(Rt&&i.texStorage3D(o.TEXTURE_3D,Pt,Nt,yt.width,yt.height,yt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,St,Lt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Nt,yt.width,yt.height,yt.depth,0,St,Lt,yt.data);else if(E.isFramebufferTexture){if(Rt)if(Y)i.texStorage2D(o.TEXTURE_2D,Pt,Nt,yt.width,yt.height);else{let Mt=yt.width,ut=yt.height;for(let Ft=0;Ft<Pt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,Nt,Mt,ut,0,St,Lt,null),Mt>>=1,ut>>=1}}else if(ue.length>0){if(Y&&Rt){const Mt=Wt(ue[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Nt,Mt.width,Mt.height)}for(let Mt=0,ut=ue.length;Mt<ut;Mt++)Ot=ue[Mt],Y?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,St,Lt,Ot):i.texImage2D(o.TEXTURE_2D,Mt,Nt,St,Lt,Ot);E.generateMipmaps=!1}else if(Y){if(Rt){const Mt=Wt(yt);i.texStorage2D(o.TEXTURE_2D,Pt,Nt,Mt.width,Mt.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,St,Lt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Nt,St,Lt,yt);M(E)&&v(pt),Xt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function vt(O,E,Z){if(E.image.length!==6)return;const pt=_t(O,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+Z);const ft=s.get(xt);if(xt.version!==ft.__version||pt===!0){i.activeTexture(o.TEXTURE0+Z);const Xt=Te.getPrimaries(Te.workingColorSpace),Ct=E.colorSpace===ts?null:Te.getPrimaries(E.colorSpace),jt=E.colorSpace===ts||Xt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const $t=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,St=[];for(let ut=0;ut<6;ut++)!$t&&!yt?St[ut]=w(E.image[ut],!0,l.maxCubemapSize):St[ut]=yt?E.image[ut].image:E.image[ut],St[ut]=Le(E,St[ut]);const Lt=St[0],Nt=u.convert(E.format,E.colorSpace),Ot=u.convert(E.type),ue=N(E.internalFormat,Nt,Ot,E.colorSpace),Y=E.isVideoTexture!==!0,Rt=ft.__version===void 0||pt===!0,Tt=xt.dataReady;let Pt=B(E,Lt);K(o.TEXTURE_CUBE_MAP,E);let Mt;if($t){Y&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ue,Lt.width,Lt.height);for(let ut=0;ut<6;ut++){Mt=St[ut].mipmaps;for(let Ft=0;Ft<Mt.length;Ft++){const ne=Mt[Ft];E.format!==wi?Nt!==null?Y?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,0,0,ne.width,ne.height,Nt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,ue,ne.width,ne.height,0,ne.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,0,0,ne.width,ne.height,Nt,Ot,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft,ue,ne.width,ne.height,0,Nt,Ot,ne.data)}}}else{if(Mt=E.mipmaps,Y&&Rt){Mt.length>0&&Pt++;const ut=Wt(St[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ue,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(yt){Y?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,St[ut].width,St[ut].height,Nt,Ot,St[ut].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ue,St[ut].width,St[ut].height,0,Nt,Ot,St[ut].data);for(let Ft=0;Ft<Mt.length;Ft++){const ze=Mt[Ft].image[ut].image;Y?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,0,0,ze.width,ze.height,Nt,Ot,ze.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,ue,ze.width,ze.height,0,Nt,Ot,ze.data)}}else{Y?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Nt,Ot,St[ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ue,Nt,Ot,St[ut]);for(let Ft=0;Ft<Mt.length;Ft++){const ne=Mt[Ft];Y?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,0,0,Nt,Ot,ne.image[ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ft+1,ue,Nt,Ot,ne.image[ut])}}}M(E)&&v(o.TEXTURE_CUBE_MAP),ft.__version=xt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function bt(O,E,Z,pt,xt,ft){const Xt=u.convert(Z.format,Z.colorSpace),Ct=u.convert(Z.type),jt=N(Z.internalFormat,Xt,Ct,Z.colorSpace),$t=s.get(E),yt=s.get(Z);if(yt.__renderTarget=E,!$t.__hasExternalTextures){const St=Math.max(1,E.width>>ft),Lt=Math.max(1,E.height>>ft);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ft,jt,St,Lt,E.depth,0,Xt,Ct,null):i.texImage2D(xt,ft,jt,St,Lt,0,Xt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),qe(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,xt,yt.__webglTexture,0,V(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,xt,yt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(O,E,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const pt=E.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ft=D(E.stencilBuffer,xt),Xt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;qe(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),ft,E.width,E.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),ft,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ft,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,O)}else{const pt=E.textures;for(let xt=0;xt<pt.length;xt++){const ft=pt[xt],Xt=u.convert(ft.format,ft.colorSpace),Ct=u.convert(ft.type),jt=N(ft.internalFormat,Xt,Ct,ft.colorSpace);qe(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),jt,E.width,E.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),jt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,jt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Zt(O,E,Z){const pt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(E.depthTexture);if(xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),K(o.TEXTURE_CUBE_MAP,E.depthTexture);const $t=u.convert(E.depthTexture.format),yt=u.convert(E.depthTexture.type);let St;E.depthTexture.format===Sa?St=o.DEPTH_COMPONENT24:E.depthTexture.format===Us&&(St=o.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,St,E.width,E.height,0,$t,yt,null)}}else X(E.depthTexture,0);const ft=xt.__webglTexture,Xt=V(E),Ct=pt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Z:o.TEXTURE_2D,jt=E.depthTexture.format===Us?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Sa)qe(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ct,ft,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ct,ft,0);else if(E.depthTexture.format===Us)qe(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ct,ft,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ct,ft,0);else throw new Error("Unknown depthTexture format")}function Jt(O){const E=s.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const pt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=pt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let pt=0;pt<6;pt++)Zt(E.__webglFramebuffer[pt],O,pt);else{const pt=O.texture.mipmaps;pt&&pt.length>0?Zt(E.__webglFramebuffer[0],O,0):Zt(E.__webglFramebuffer,O,0)}else if(Z){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=o.createRenderbuffer(),Vt(E.__webglDepthbuffer[pt],O,!1);else{const xt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ft)}}else{const pt=O.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Vt(E.__webglDepthbuffer,O,!1);else{const xt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(O,E,Z){const pt=s.get(O);E!==void 0&&bt(pt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&Jt(O)}function ve(O){const E=O.texture,Z=s.get(O),pt=s.get(E);O.addEventListener("dispose",I);const xt=O.textures,ft=O.isWebGLCubeRenderTarget===!0,Xt=xt.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=E.version,h.memory.textures++),ft){Z.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Ct]=[];for(let jt=0;jt<E.mipmaps.length;jt++)Z.__webglFramebuffer[Ct][jt]=o.createFramebuffer()}else Z.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)Z.__webglFramebuffer[Ct]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Ct=0,jt=xt.length;Ct<jt;Ct++){const $t=s.get(xt[Ct]);$t.__webglTexture===void 0&&($t.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&qe(O)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const jt=xt[Ct];Z.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ct]);const $t=u.convert(jt.format,jt.colorSpace),yt=u.convert(jt.type),St=N(jt.internalFormat,$t,yt,jt.colorSpace,O.isXRRenderTarget===!0),Lt=V(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,St,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),Vt(Z.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),K(o.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)bt(Z.__webglFramebuffer[Ct][jt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,jt);else bt(Z.__webglFramebuffer[Ct],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ct=0,jt=xt.length;Ct<jt;Ct++){const $t=xt[Ct],yt=s.get($t);let St=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(St=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(St,yt.__webglTexture),K(St,$t),bt(Z.__webglFramebuffer,O,$t,o.COLOR_ATTACHMENT0+Ct,St,0),M($t)&&v(St)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ct=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,pt.__webglTexture),K(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)bt(Z.__webglFramebuffer[jt],O,E,o.COLOR_ATTACHMENT0,Ct,jt);else bt(Z.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,Ct,0);M(E)&&v(Ct),i.unbindTexture()}O.depthBuffer&&Jt(O)}function me(O){const E=O.textures;for(let Z=0,pt=E.length;Z<pt;Z++){const xt=E[Z];if(M(xt)){const ft=C(O),Xt=s.get(xt).__webglTexture;i.bindTexture(ft,Xt),v(ft),i.unbindTexture()}}}const Ue=[],le=[];function Ke(O){if(O.samples>0){if(qe(O)===!1){const E=O.textures,Z=O.width,pt=O.height;let xt=o.COLOR_BUFFER_BIT;const ft=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(O),Ct=E.length>1;if(Ct)for(let $t=0;$t<E.length;$t++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const jt=O.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let $t=0;$t<E.length;$t++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[$t]);const yt=s.get(E[$t]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,Z,pt,0,0,Z,pt,xt,o.NEAREST),m===!0&&(Ue.length=0,le.length=0,Ue.push(o.COLOR_ATTACHMENT0+$t),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ue.push(ft),le.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,le)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let $t=0;$t<E.length;$t++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[$t]);const yt=s.get(E[$t]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function V(O){return Math.min(l.maxSamples,O.samples)}function qe(O){const E=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(O){const E=h.render.frame;x.get(O)!==E&&(x.set(O,E),O.update())}function Le(O,E){const Z=O.colorSpace,pt=O.format,xt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Z!==Or&&Z!==ts&&(Te.getTransfer(Z)===Be?(pt!==wi||xt!==ai)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",Z)),E}function Wt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=j,this.resetTextureUnits=k,this.setTexture2D=X,this.setTexture2DArray=L,this.setTexture3D=P,this.setTextureCube=rt,this.rebindTextures=Je,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function F1(o,e){function i(s,l=ts){let u;const h=Te.getTransfer(l);if(s===ai)return o.UNSIGNED_BYTE;if(s===Od)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Pd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===q_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Y_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===k_)return o.BYTE;if(s===W_)return o.SHORT;if(s===Go)return o.UNSIGNED_SHORT;if(s===Ld)return o.INT;if(s===Xi)return o.UNSIGNED_INT;if(s===Bi)return o.FLOAT;if(s===xa)return o.HALF_FLOAT;if(s===j_)return o.ALPHA;if(s===Z_)return o.RGB;if(s===wi)return o.RGBA;if(s===Sa)return o.DEPTH_COMPONENT;if(s===Us)return o.DEPTH_STENCIL;if(s===K_)return o.RED;if(s===zd)return o.RED_INTEGER;if(s===Lr)return o.RG;if(s===Id)return o.RG_INTEGER;if(s===Fd)return o.RGBA_INTEGER;if(s===Lc||s===Oc||s===Pc||s===zc)if(h===Be)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Lc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Lc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Zh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===$h||s===td)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===ed)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===nd)return u.COMPRESSED_R11_EAC;if(s===id)return u.COMPRESSED_SIGNED_R11_EAC;if(s===ad)return u.COMPRESSED_RG11_EAC;if(s===sd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===rd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===od)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ld)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ud)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===md)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_d)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sd||s===Md||s===yd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Sd)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Md)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ed||s===bd||s===Td||s===Ad)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Ed)return u.COMPRESSED_RED_RGTC1_EXT;if(s===bd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Td)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ad)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const B1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class G1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new sv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new _i({vertexShader:B1,fragmentShader:H1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new Xc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V1 extends zr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,p="local-floor",m=1,d=null,x=null,S=null,g=null,y=null,b=null;const w=typeof XRWebGLBinding<"u",M=new G1,v={},C=i.getContextAttributes();let N=null,D=null;const B=[],F=[],I=new Ae;let T=null;const U=new ii;U.viewport=new en;const ot=new ii;ot.viewport=new en;const G=[U,ot],k=new ty;let j=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let vt=B[at];return vt===void 0&&(vt=new hh,B[at]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(at){let vt=B[at];return vt===void 0&&(vt=new hh,B[at]=vt),vt.getGripSpace()},this.getHand=function(at){let vt=B[at];return vt===void 0&&(vt=new hh,B[at]=vt),vt.getHandSpace()};function X(at){const vt=F.indexOf(at.inputSource);if(vt===-1)return;const bt=B[vt];bt!==void 0&&(bt.update(at.inputSource,at.frame,d||h),bt.dispatchEvent({type:at.type,data:at.inputSource}))}function L(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",P);for(let at=0;at<B.length;at++){const vt=F[at];vt!==null&&(F[at]=null,B[at].disconnect(vt))}j=null,J=null,M.reset();for(const at in v)delete v[at];e.setRenderTarget(N),y=null,g=null,S=null,l=null,D=null,zt.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){u=at,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){p=at,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(at){d=at},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&w&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",L),l.addEventListener("inputsourceschange",P),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Vt=null,Zt=null;C.depth&&(Zt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=C.stencil?Us:Sa,Vt=C.stencil?Vo:Xi);const Jt={colorFormat:i.RGBA8,depthFormat:Zt,scaleFactor:u};S=this.getBinding(),g=S.createProjectionLayer(Jt),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new Vi(g.textureWidth,g.textureHeight,{format:wi,type:ai,depthTexture:new ko(g.textureWidth,g.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const bt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Vi(y.framebufferWidth,y.framebufferHeight,{format:wi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),zt.setContext(l),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function P(at){for(let vt=0;vt<at.removed.length;vt++){const bt=at.removed[vt],Vt=F.indexOf(bt);Vt>=0&&(F[Vt]=null,B[Vt].disconnect(bt))}for(let vt=0;vt<at.added.length;vt++){const bt=at.added[vt];let Vt=F.indexOf(bt);if(Vt===-1){for(let Jt=0;Jt<B.length;Jt++)if(Jt>=F.length){F.push(bt),Vt=Jt;break}else if(F[Jt]===null){F[Jt]=bt,Vt=Jt;break}if(Vt===-1)break}const Zt=B[Vt];Zt&&Zt.connect(bt)}}const rt=new tt,dt=new tt;function Et(at,vt,bt){rt.setFromMatrixPosition(vt.matrixWorld),dt.setFromMatrixPosition(bt.matrixWorld);const Vt=rt.distanceTo(dt),Zt=vt.projectionMatrix.elements,Jt=bt.projectionMatrix.elements,Je=Zt[14]/(Zt[10]-1),ve=Zt[14]/(Zt[10]+1),me=(Zt[9]+1)/Zt[5],Ue=(Zt[9]-1)/Zt[5],le=(Zt[8]-1)/Zt[0],Ke=(Jt[8]+1)/Jt[0],V=Je*le,qe=Je*Ke,Ee=Vt/(-le+Ke),Le=Ee*-le;if(vt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Le),at.translateZ(Ee),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Zt[10]===-1)at.projectionMatrix.copy(vt.projectionMatrix),at.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Wt=Je+Ee,O=ve+Ee,E=V-Le,Z=qe+(Vt-Le),pt=me*ve/O*Wt,xt=Ue*ve/O*Wt;at.projectionMatrix.makePerspective(E,Z,pt,xt,Wt,O),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function z(at,vt){vt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(vt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let vt=at.near,bt=at.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(bt=M.depthFar)),k.near=ot.near=U.near=vt,k.far=ot.far=U.far=bt,(j!==k.near||J!==k.far)&&(l.updateRenderState({depthNear:k.near,depthFar:k.far}),j=k.near,J=k.far),k.layers.mask=at.layers.mask|6,U.layers.mask=k.layers.mask&-5,ot.layers.mask=k.layers.mask&-3;const Vt=at.parent,Zt=k.cameras;z(k,Vt);for(let Jt=0;Jt<Zt.length;Jt++)z(Zt[Jt],Vt);Zt.length===2?Et(k,U,ot):k.projectionMatrix.copy(U.projectionMatrix),K(at,k,Vt)};function K(at,vt,bt){bt===null?at.matrix.copy(vt.matrixWorld):(at.matrix.copy(bt.matrixWorld),at.matrix.invert(),at.matrix.multiply(vt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(vt.projectionMatrix),at.projectionMatrixInverse.copy(vt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Rd*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(at){m=at,g!==null&&(g.fixedFoveation=at),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=at)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(k)},this.getCameraTexture=function(at){return v[at]};let _t=null;function At(at,vt){if(x=vt.getViewerPose(d||h),b=vt,x!==null){const bt=x.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let Vt=!1;bt.length!==k.cameras.length&&(k.cameras.length=0,Vt=!0);for(let ve=0;ve<bt.length;ve++){const me=bt[ve];let Ue=null;if(y!==null)Ue=y.getViewport(me);else{const Ke=S.getViewSubImage(g,me);Ue=Ke.viewport,ve===0&&(e.setRenderTargetTextures(D,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(D))}let le=G[ve];le===void 0&&(le=new ii,le.layers.enable(ve),le.viewport=new en,G[ve]=le),le.matrix.fromArray(me.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(me.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ve===0&&(k.matrix.copy(le.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Vt===!0&&k.cameras.push(le)}const Zt=l.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){S=s.getBinding();const ve=S.getDepthInformation(bt[0]);ve&&ve.isValid&&ve.texture&&M.init(ve,l.renderState)}if(Zt&&Zt.includes("camera-access")&&w){e.state.unbindTexture(),S=s.getBinding();for(let ve=0;ve<bt.length;ve++){const me=bt[ve].camera;if(me){let Ue=v[me];Ue||(Ue=new sv,v[me]=Ue);const le=S.getCameraImage(me);Ue.sourceTexture=le}}}}for(let bt=0;bt<B.length;bt++){const Vt=F[bt],Zt=B[bt];Vt!==null&&Zt!==void 0&&Zt.update(Vt,vt,d||h)}_t&&_t(at,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),b=null}const zt=new uv;zt.setAnimationLoop(At),this.setAnimationLoop=function(at){_t=at},this.dispose=function(){}}}const Ts=new Ma,X1=new Qe;function k1(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,rv(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,C,N,D){v.isMeshBasicMaterial?u(M,v):v.isMeshLambertMaterial?(u(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(u(M,v),S(M,v)):v.isMeshPhongMaterial?(u(M,v),x(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(u(M,v),g(M,v),v.isMeshPhysicalMaterial&&y(M,v,D)):v.isMeshMatcapMaterial?(u(M,v),b(M,v)):v.isMeshDepthMaterial?u(M,v):v.isMeshDistanceMaterial?(u(M,v),w(M,v)):v.isMeshNormalMaterial?u(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&p(M,v)):v.isPointsMaterial?m(M,v,C,N):v.isSpriteMaterial?d(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Wn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Wn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const C=e.get(v),N=C.envMap,D=C.envMapRotation;N&&(M.envMap.value=N,Ts.copy(D),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),M.envMapRotation.value.setFromMatrix4(X1.makeRotationFromEuler(Ts)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function p(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,C,N){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*C,M.scale.value=N*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function x(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function S(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function g(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,C){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Wn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function w(M,v){const C=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function W1(o,e,i,s){let l={},u={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const D=N.program;s.uniformBlockBinding(C,D)}function d(C,N){let D=l[C.id];D===void 0&&(b(C),D=x(C),l[C.id]=D,C.addEventListener("dispose",M));const B=N.program;s.updateUBOMapping(C,B);const F=e.render.frame;u[C.id]!==F&&(g(C),u[C.id]=F)}function x(C){const N=S();C.__bindingPointIndex=N;const D=o.createBuffer(),B=C.__size,F=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,B,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function S(){for(let C=0;C<p;C++)if(h.indexOf(C)===-1)return h.push(C),C;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=l[C.id],D=C.uniforms,B=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let F=0,I=D.length;F<I;F++){const T=Array.isArray(D[F])?D[F]:[D[F]];for(let U=0,ot=T.length;U<ot;U++){const G=T[U];if(y(G,F,U,B)===!0){const k=G.__offset,j=Array.isArray(G.value)?G.value:[G.value];let J=0;for(let X=0;X<j.length;X++){const L=j[X],P=w(L);typeof L=="number"||typeof L=="boolean"?(G.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,k+J,G.__data)):L.isMatrix3?(G.__data[0]=L.elements[0],G.__data[1]=L.elements[1],G.__data[2]=L.elements[2],G.__data[3]=0,G.__data[4]=L.elements[3],G.__data[5]=L.elements[4],G.__data[6]=L.elements[5],G.__data[7]=0,G.__data[8]=L.elements[6],G.__data[9]=L.elements[7],G.__data[10]=L.elements[8],G.__data[11]=0):(L.toArray(G.__data,J),J+=P.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,k,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,N,D,B){const F=C.value,I=N+"_"+D;if(B[I]===void 0)return typeof F=="number"||typeof F=="boolean"?B[I]=F:B[I]=F.clone(),!0;{const T=B[I];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return B[I]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function b(C){const N=C.uniforms;let D=0;const B=16;for(let I=0,T=N.length;I<T;I++){const U=Array.isArray(N[I])?N[I]:[N[I]];for(let ot=0,G=U.length;ot<G;ot++){const k=U[ot],j=Array.isArray(k.value)?k.value:[k.value];for(let J=0,X=j.length;J<X;J++){const L=j[J],P=w(L),rt=D%B,dt=rt%P.boundary,Et=rt+dt;D+=dt,Et!==0&&B-Et<P.storage&&(D+=B-Et),k.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=D,D+=P.storage}}}const F=D%B;return F>0&&(D+=B-F),C.__size=D,C.__cache={},this}function w(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",C),N}function M(C){const N=C.target;N.removeEventListener("dispose",M);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function v(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},u={}}return{bind:m,update:d,dispose:v}}const q1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function Y1(){return Ii===null&&(Ii=new PM(q1,16,16,Lr,xa),Ii.name="DFG_LUT",Ii.minFilter=Cn,Ii.magFilter=Cn,Ii.wrapS=ma,Ii.wrapT=ma,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class j1{constructor(e={}){const{canvas:i=hM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ai}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const w=y,M=new Set([Fd,Id,zd]),v=new Set([ai,Xi,Go,Vo,Od,Pd]),C=new Uint32Array(4),N=new Int32Array(4);let D=null,B=null;const F=[],I=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let ot=!1;this._outputColorSpace=mi;let G=0,k=0,j=null,J=-1,X=null;const L=new en,P=new en;let rt=null;const dt=new te(0);let Et=0,z=i.width,K=i.height,_t=1,At=null,zt=null;const at=new en(0,0,z,K),vt=new en(0,0,z,K);let bt=!1;const Vt=new Xd;let Zt=!1,Jt=!1;const Je=new Qe,ve=new tt,me=new en,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Ke(){return j===null?_t:1}let V=s;function qe(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nd}`),i.addEventListener("webglcontextlost",Ft,!1),i.addEventListener("webglcontextrestored",ne,!1),i.addEventListener("webglcontextcreationerror",ze,!1),V===null){const q="webgl2";if(V=qe(q,R),V===null)throw qe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw De("WebGLRenderer: "+R.message),R}let Ee,Le,Wt,O,E,Z,pt,xt,ft,Xt,Ct,jt,$t,yt,St,Lt,Nt,Ot,ue,Y,Rt,Tt,Pt;function Mt(){Ee=new jb(V),Ee.init(),Rt=new F1(V,Ee),Le=new Hb(V,Ee,e,Rt),Wt=new z1(V,Ee),Le.reversedDepthBuffer&&g&&Wt.buffers.depth.setReversed(!0),O=new Qb(V),E=new y1,Z=new I1(V,Ee,Wt,E,Le,Rt,O),pt=new Yb(U),xt=new ny(V),Tt=new Fb(V,xt),ft=new Zb(V,xt,O,Tt),Xt=new $b(V,ft,xt,Tt,O),Ot=new Jb(V,Le,Z),St=new Gb(E),Ct=new M1(U,pt,Ee,Le,Tt,St),jt=new k1(U,E),$t=new b1,yt=new D1(Ee),Nt=new Ib(U,pt,Wt,Xt,b,m),Lt=new P1(U,Xt,Le),Pt=new W1(V,O,Le,Wt),ue=new Bb(V,Ee,O),Y=new Kb(V,Ee,O),O.programs=Ct.programs,U.capabilities=Le,U.extensions=Ee,U.properties=E,U.renderLists=$t,U.shadowMap=Lt,U.state=Wt,U.info=O}Mt(),w!==ai&&(T=new eT(w,i.width,i.height,l,u));const ut=new V1(U,V);this.xr=ut,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(z,K,!1))},this.getSize=function(R){return R.set(z,K)},this.setSize=function(R,q,lt=!0){if(ut.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,K=q,i.width=Math.floor(R*_t),i.height=Math.floor(q*_t),lt===!0&&(i.style.width=R+"px",i.style.height=q+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(z*_t,K*_t).floor()},this.setDrawingBufferSize=function(R,q,lt){z=R,K=q,_t=lt,i.width=Math.floor(R*lt),i.height=Math.floor(q*lt),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(w===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,q,lt,it){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,q,lt,it),Wt.viewport(L.copy(at).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,q,lt,it){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,q,lt,it),Wt.scissor(P.copy(vt).multiplyScalar(_t).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(R){Wt.setScissorTest(bt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){zt=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,lt=!0){let it=0;if(R){let $=!1;if(j!==null){const wt=j.texture.format;$=M.has(wt)}if($){const wt=j.texture.type,It=v.has(wt),Dt=Nt.getClearColor(),kt=Nt.getClearAlpha(),Yt=Dt.r,ee=Dt.g,se=Dt.b;It?(C[0]=Yt,C[1]=ee,C[2]=se,C[3]=kt,V.clearBufferuiv(V.COLOR,0,C)):(N[0]=Yt,N[1]=ee,N[2]=se,N[3]=kt,V.clearBufferiv(V.COLOR,0,N))}else it|=V.COLOR_BUFFER_BIT}q&&(it|=V.DEPTH_BUFFER_BIT),lt&&(it|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&V.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ft,!1),i.removeEventListener("webglcontextrestored",ne,!1),i.removeEventListener("webglcontextcreationerror",ze,!1),Nt.dispose(),$t.dispose(),yt.dispose(),E.dispose(),pt.dispose(),Xt.dispose(),Tt.dispose(),Pt.dispose(),Ct.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Os),ut.removeEventListener("sessionend",Ps),Ui.stop()};function Ft(R){R.preventDefault(),V0("WebGLRenderer: Context Lost."),ot=!0}function ne(){V0("WebGLRenderer: Context Restored."),ot=!1;const R=O.autoReset,q=Lt.enabled,lt=Lt.autoUpdate,it=Lt.needsUpdate,$=Lt.type;Mt(),O.autoReset=R,Lt.enabled=q,Lt.autoUpdate=lt,Lt.needsUpdate=it,Lt.type=$}function ze(R){De("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function be(R){const q=R.target;q.removeEventListener("dispose",be),wn(q)}function wn(R){vi(R),E.remove(R)}function vi(R){const q=E.get(R).programs;q!==void 0&&(q.forEach(function(lt){Ct.releaseProgram(lt)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,lt,it,$,wt){q===null&&(q=Ue);const It=$.isMesh&&$.matrixWorld.determinant()<0,Dt=Jo(R,q,lt,it,$);Wt.setMaterial(it,It);let kt=lt.index,Yt=1;if(it.wireframe===!0){if(kt=ft.getWireframeAttribute(lt),kt===void 0)return;Yt=2}const ee=lt.drawRange,se=lt.attributes.position;let Bt=ee.start*Yt,fe=(ee.start+ee.count)*Yt;wt!==null&&(Bt=Math.max(Bt,wt.start*Yt),fe=Math.min(fe,(wt.start+wt.count)*Yt)),kt!==null?(Bt=Math.max(Bt,0),fe=Math.min(fe,kt.count)):se!=null&&(Bt=Math.max(Bt,0),fe=Math.min(fe,se.count));const Ye=fe-Bt;if(Ye<0||Ye===1/0)return;Tt.setup($,it,Dt,lt,kt);let je,Re=ue;if(kt!==null&&(je=xt.get(kt),Re=Y,Re.setIndex(je)),$.isMesh)it.wireframe===!0?(Wt.setLineWidth(it.wireframeLinewidth*Ke()),Re.setMode(V.LINES)):Re.setMode(V.TRIANGLES);else if($.isLine){let pn=it.linewidth;pn===void 0&&(pn=1),Wt.setLineWidth(pn*Ke()),$.isLineSegments?Re.setMode(V.LINES):$.isLineLoop?Re.setMode(V.LINE_LOOP):Re.setMode(V.LINE_STRIP)}else $.isPoints?Re.setMode(V.POINTS):$.isSprite&&Re.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Hc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Re.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const pn=$._multiDrawStarts,Gt=$._multiDrawCounts,Dn=$._multiDrawCount,ae=kt?xt.get(kt).bytesPerElement:1,Un=E.get(it).currentProgram.getUniforms();for(let qn=0;qn<Dn;qn++)Un.setValue(V,"_gl_DrawID",qn),Re.render(pn[qn]/ae,Gt[qn])}else if($.isInstancedMesh)Re.renderInstances(Bt,Ye,$.count);else if(lt.isInstancedBufferGeometry){const pn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Gt=Math.min(lt.instanceCount,pn);Re.renderInstances(Bt,Ye,Gt)}else Re.render(Bt,Ye)};function Br(R,q,lt){R.transparent===!0&&R.side===pa&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,ya(R,q,lt),R.side=va,R.needsUpdate=!0,ya(R,q,lt),R.side=pa):ya(R,q,lt)}this.compile=function(R,q,lt=null){lt===null&&(lt=R),B=yt.get(lt),B.init(q),I.push(B),lt.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(B.pushLight($),$.castShadow&&B.pushShadow($))}),R!==lt&&R.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(B.pushLight($),$.castShadow&&B.pushShadow($))}),B.setupLights();const it=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const wt=$.material;if(wt)if(Array.isArray(wt))for(let It=0;It<wt.length;It++){const Dt=wt[It];Br(Dt,lt,$),it.add(Dt)}else Br(wt,lt,$),it.add(wt)}),B=I.pop(),it},this.compileAsync=function(R,q,lt=null){const it=this.compile(R,q,lt);return new Promise($=>{function wt(){if(it.forEach(function(It){E.get(It).currentProgram.isReady()&&it.delete(It)}),it.size===0){$(R);return}setTimeout(wt,10)}Ee.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ls=null;function Zo(R){Ls&&Ls(R)}function Os(){Ui.stop()}function Ps(){Ui.start()}const Ui=new uv;Ui.setAnimationLoop(Zo),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(R){Ls=R,ut.setAnimationLoop(R),R===null?Ui.stop():Ui.start()},ut.addEventListener("sessionstart",Os),ut.addEventListener("sessionend",Ps),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ot===!0)return;const lt=ut.enabled===!0&&ut.isPresenting===!0,it=T!==null&&(j===null||lt)&&T.begin(U,j);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(q),q=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,q,j),B=yt.get(R,I.length),B.init(q),I.push(B),Je.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Vt.setFromProjectionMatrix(Je,Hi,q.reversedDepth),Jt=this.localClippingEnabled,Zt=St.init(this.clippingPlanes,Jt),D=$t.get(R,F.length),D.init(),F.push(D),ut.enabled===!0&&ut.isPresenting===!0){const It=U.xr.getDepthSensingMesh();It!==null&&zs(It,q,-1/0,U.sortObjects)}zs(R,q,0,U.sortObjects),D.finish(),U.sortObjects===!0&&D.sort(At,zt),le=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,le&&Nt.addToRenderList(D,R),this.info.render.frame++,Zt===!0&&St.beginShadows();const $=B.state.shadowsArray;if(Lt.render($,R,q),Zt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&T.hasRenderPass())===!1){const It=D.opaque,Dt=D.transmissive;if(B.setupLights(),q.isArrayCamera){const kt=q.cameras;if(Dt.length>0)for(let Yt=0,ee=kt.length;Yt<ee;Yt++){const se=kt[Yt];sn(It,Dt,R,se)}le&&Nt.render(R);for(let Yt=0,ee=kt.length;Yt<ee;Yt++){const se=kt[Yt];xi(D,R,se,se.viewport)}}else Dt.length>0&&sn(It,Dt,R,q),le&&Nt.render(R),xi(D,R,q)}j!==null&&k===0&&(Z.updateMultisampleRenderTarget(j),Z.updateRenderTargetMipmap(j)),it&&T.end(U),R.isScene===!0&&R.onAfterRender(U,R,q),Tt.resetDefaultState(),J=-1,X=null,I.pop(),I.length>0?(B=I[I.length-1],Zt===!0&&St.setGlobalState(U.clippingPlanes,B.state.camera)):B=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function zs(R,q,lt,it){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)B.pushLight(R),R.castShadow&&B.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){it&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);const It=Xt.update(R),Dt=R.material;Dt.visible&&D.push(R,It,Dt,lt,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const It=Xt.update(R),Dt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),me.copy(It.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(Dt)){const kt=It.groups;for(let Yt=0,ee=kt.length;Yt<ee;Yt++){const se=kt[Yt],Bt=Dt[se.materialIndex];Bt&&Bt.visible&&D.push(R,It,Bt,lt,me.z,se)}}else Dt.visible&&D.push(R,It,Dt,lt,me.z,null)}}const wt=R.children;for(let It=0,Dt=wt.length;It<Dt;It++)zs(wt[It],q,lt,it)}function xi(R,q,lt,it){const{opaque:$,transmissive:wt,transparent:It}=R;B.setupLightsView(lt),Zt===!0&&St.setGlobalState(U.clippingPlanes,lt),it&&Wt.viewport(L.copy(it)),$.length>0&&dn($,q,lt),wt.length>0&&dn(wt,q,lt),It.length>0&&dn(It,q,lt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function sn(R,q,lt,it){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[it.id]===void 0){const Bt=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[it.id]=new Vi(1,1,{generateMipmaps:!0,type:Bt?xa:ai,minFilter:Ds,samples:Math.max(4,Le.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const wt=B.state.transmissionRenderTarget[it.id],It=it.viewport||L;wt.setSize(It.z*U.transmissionResolutionScale,It.w*U.transmissionResolutionScale);const Dt=U.getRenderTarget(),kt=U.getActiveCubeFace(),Yt=U.getActiveMipmapLevel();U.setRenderTarget(wt),U.getClearColor(dt),Et=U.getClearAlpha(),Et<1&&U.setClearColor(16777215,.5),U.clear(),le&&Nt.render(lt);const ee=U.toneMapping;U.toneMapping=Gi;const se=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),B.setupLightsView(it),Zt===!0&&St.setGlobalState(U.clippingPlanes,it),dn(R,lt,it),Z.updateMultisampleRenderTarget(wt),Z.updateRenderTargetMipmap(wt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let fe=0,Ye=q.length;fe<Ye;fe++){const je=q[fe],{object:Re,geometry:pn,material:Gt,group:Dn}=je;if(Gt.side===pa&&Re.layers.test(it.layers)){const ae=Gt.side;Gt.side=Wn,Gt.needsUpdate=!0,ki(Re,lt,it,pn,Gt,Dn),Gt.side=ae,Gt.needsUpdate=!0,Bt=!0}}Bt===!0&&(Z.updateMultisampleRenderTarget(wt),Z.updateRenderTargetMipmap(wt))}U.setRenderTarget(Dt,kt,Yt),U.setClearColor(dt,Et),se!==void 0&&(it.viewport=se),U.toneMapping=ee}function dn(R,q,lt){const it=q.isScene===!0?q.overrideMaterial:null;for(let $=0,wt=R.length;$<wt;$++){const It=R[$],{object:Dt,geometry:kt,group:Yt}=It;let ee=It.material;ee.allowOverride===!0&&it!==null&&(ee=it),Dt.layers.test(lt.layers)&&ki(Dt,q,lt,kt,ee,Yt)}}function ki(R,q,lt,it,$,wt){R.onBeforeRender(U,q,lt,it,$,wt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(U,q,lt,it,R,wt),$.transparent===!0&&$.side===pa&&$.forceSinglePass===!1?($.side=Wn,$.needsUpdate=!0,U.renderBufferDirect(lt,q,it,$,R,wt),$.side=va,$.needsUpdate=!0,U.renderBufferDirect(lt,q,it,$,R,wt),$.side=pa):U.renderBufferDirect(lt,q,it,$,R,wt),R.onAfterRender(U,q,lt,it,$,wt)}function ya(R,q,lt){q.isScene!==!0&&(q=Ue);const it=E.get(R),$=B.state.lights,wt=B.state.shadowsArray,It=$.state.version,Dt=Ct.getParameters(R,$.state,wt,q,lt),kt=Ct.getProgramCacheKey(Dt);let Yt=it.programs;it.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,it.fog=q.fog;const ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;it.envMap=pt.get(R.envMap||it.environment,ee),it.envMapRotation=it.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",be),Yt=new Map,it.programs=Yt);let se=Yt.get(kt);if(se!==void 0){if(it.currentProgram===se&&it.lightsStateVersion===It)return Qo(R,Dt),se}else Dt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(Dt,U),se=Ct.acquireProgram(Dt,kt),Yt.set(kt,se),it.uniforms=Dt.uniforms;const Bt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Bt.clippingPlanes=St.uniform),Qo(R,Dt),it.needsLights=Hr(R),it.lightsStateVersion=It,it.needsLights&&(Bt.ambientLightColor.value=$.state.ambient,Bt.lightProbe.value=$.state.probe,Bt.directionalLights.value=$.state.directional,Bt.directionalLightShadows.value=$.state.directionalShadow,Bt.spotLights.value=$.state.spot,Bt.spotLightShadows.value=$.state.spotShadow,Bt.rectAreaLights.value=$.state.rectArea,Bt.ltc_1.value=$.state.rectAreaLTC1,Bt.ltc_2.value=$.state.rectAreaLTC2,Bt.pointLights.value=$.state.point,Bt.pointLightShadows.value=$.state.pointShadow,Bt.hemisphereLights.value=$.state.hemi,Bt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Bt.spotLightMatrix.value=$.state.spotLightMatrix,Bt.spotLightMap.value=$.state.spotLightMap,Bt.pointShadowMatrix.value=$.state.pointShadowMatrix),it.currentProgram=se,it.uniformsList=null,se}function Ko(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Ic.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Qo(R,q){const lt=E.get(R);lt.outputColorSpace=q.outputColorSpace,lt.batching=q.batching,lt.batchingColor=q.batchingColor,lt.instancing=q.instancing,lt.instancingColor=q.instancingColor,lt.instancingMorph=q.instancingMorph,lt.skinning=q.skinning,lt.morphTargets=q.morphTargets,lt.morphNormals=q.morphNormals,lt.morphColors=q.morphColors,lt.morphTargetsCount=q.morphTargetsCount,lt.numClippingPlanes=q.numClippingPlanes,lt.numIntersection=q.numClipIntersection,lt.vertexAlphas=q.vertexAlphas,lt.vertexTangents=q.vertexTangents,lt.toneMapping=q.toneMapping}function Jo(R,q,lt,it,$){q.isScene!==!0&&(q=Ue),Z.resetTextureUnits();const wt=q.fog,It=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?q.environment:null,Dt=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Or,kt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Yt=pt.get(it.envMap||It,kt),ee=it.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,se=!!lt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Bt=!!lt.morphAttributes.position,fe=!!lt.morphAttributes.normal,Ye=!!lt.morphAttributes.color;let je=Gi;it.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(je=U.toneMapping);const Re=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,pn=Re!==void 0?Re.length:0,Gt=E.get(it),Dn=B.state.lights;if(Zt===!0&&(Jt===!0||R!==X)){const on=R===X&&it.id===J;St.setState(it,R,on)}let ae=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Dn.state.version||Gt.outputColorSpace!==Dt||$.isBatchedMesh&&Gt.batching===!1||!$.isBatchedMesh&&Gt.batching===!0||$.isBatchedMesh&&Gt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Gt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Gt.instancing===!1||!$.isInstancedMesh&&Gt.instancing===!0||$.isSkinnedMesh&&Gt.skinning===!1||!$.isSkinnedMesh&&Gt.skinning===!0||$.isInstancedMesh&&Gt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Gt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Gt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Gt.instancingMorph===!1&&$.morphTexture!==null||Gt.envMap!==Yt||it.fog===!0&&Gt.fog!==wt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==St.numPlanes||Gt.numIntersection!==St.numIntersection)||Gt.vertexAlphas!==ee||Gt.vertexTangents!==se||Gt.morphTargets!==Bt||Gt.morphNormals!==fe||Gt.morphColors!==Ye||Gt.toneMapping!==je||Gt.morphTargetsCount!==pn)&&(ae=!0):(ae=!0,Gt.__version=it.version);let Un=Gt.currentProgram;ae===!0&&(Un=ya(it,q,$));let qn=!1,Si=!1,Yn=!1;const Oe=Un.getUniforms(),rn=Gt.uniforms;if(Wt.useProgram(Un.program)&&(qn=!0,Si=!0,Yn=!0),it.id!==J&&(J=it.id,Si=!0),qn||X!==R){Wt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Oe.setValue(V,"projectionMatrix",R.projectionMatrix),Oe.setValue(V,"viewMatrix",R.matrixWorldInverse);const Mi=Oe.map.cameraPosition;Mi!==void 0&&Mi.setValue(V,ve.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&Oe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Oe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),X!==R&&(X=R,Si=!0,Yn=!0)}if(Gt.needsLights&&(Dn.state.directionalShadowMap.length>0&&Oe.setValue(V,"directionalShadowMap",Dn.state.directionalShadowMap,Z),Dn.state.spotShadowMap.length>0&&Oe.setValue(V,"spotShadowMap",Dn.state.spotShadowMap,Z),Dn.state.pointShadowMap.length>0&&Oe.setValue(V,"pointShadowMap",Dn.state.pointShadowMap,Z)),$.isSkinnedMesh){Oe.setOptional(V,$,"bindMatrix"),Oe.setOptional(V,$,"bindMatrixInverse");const on=$.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Oe.setValue(V,"boneTexture",on.boneTexture,Z))}$.isBatchedMesh&&(Oe.setOptional(V,$,"batchingTexture"),Oe.setValue(V,"batchingTexture",$._matricesTexture,Z),Oe.setOptional(V,$,"batchingIdTexture"),Oe.setValue(V,"batchingIdTexture",$._indirectTexture,Z),Oe.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&Oe.setValue(V,"batchingColorTexture",$._colorsTexture,Z));const Nn=lt.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Ot.update($,lt,Un),(Si||Gt.receiveShadow!==$.receiveShadow)&&(Gt.receiveShadow=$.receiveShadow,Oe.setValue(V,"receiveShadow",$.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&q.environment!==null&&(rn.envMapIntensity.value=q.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=Y1()),Si&&(Oe.setValue(V,"toneMappingExposure",U.toneMappingExposure),Gt.needsLights&&ns(rn,Yn),wt&&it.fog===!0&&jt.refreshFogUniforms(rn,wt),jt.refreshMaterialUniforms(rn,it,_t,K,B.state.transmissionRenderTarget[R.id]),Ic.upload(V,Ko(Gt),rn,Z)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Ic.upload(V,Ko(Gt),rn,Z),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Oe.setValue(V,"center",$.center),Oe.setValue(V,"modelViewMatrix",$.modelViewMatrix),Oe.setValue(V,"normalMatrix",$.normalMatrix),Oe.setValue(V,"modelMatrix",$.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const on=it.uniformsGroups;for(let Mi=0,Wi=on.length;Mi<Wi;Mi++){const Is=on[Mi];Pt.update(Is,Un),Pt.bind(Is,Un)}}return Un}function ns(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Hr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,q,lt){const it=E.get(R);it.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=q,E.get(R.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:lt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const lt=E.get(R);lt.__webglFramebuffer=q,lt.__useDefaultFramebuffer=q===void 0};const Ea=V.createFramebuffer();this.setRenderTarget=function(R,q=0,lt=0){j=R,G=q,k=lt;let it=null,$=!1,wt=!1;if(R){const Dt=E.get(R);if(Dt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(V.FRAMEBUFFER,Dt.__webglFramebuffer),L.copy(R.viewport),P.copy(R.scissor),rt=R.scissorTest,Wt.viewport(L),Wt.scissor(P),Wt.setScissorTest(rt),J=-1;return}else if(Dt.__webglFramebuffer===void 0)Z.setupRenderTarget(R);else if(Dt.__hasExternalTextures)Z.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Dt.__boundDepthTexture!==ee){if(ee!==null&&E.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(wt=!0);const Yt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Yt[q])?it=Yt[q][lt]:it=Yt[q],$=!0):R.samples>0&&Z.useMultisampledRTT(R)===!1?it=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Yt)?it=Yt[lt]:it=Yt,L.copy(R.viewport),P.copy(R.scissor),rt=R.scissorTest}else L.copy(at).multiplyScalar(_t).floor(),P.copy(vt).multiplyScalar(_t).floor(),rt=bt;if(lt!==0&&(it=Ea),Wt.bindFramebuffer(V.FRAMEBUFFER,it)&&Wt.drawBuffers(R,it),Wt.viewport(L),Wt.scissor(P),Wt.setScissorTest(rt),$){const Dt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Dt.__webglTexture,lt)}else if(wt){const Dt=q;for(let kt=0;kt<R.textures.length;kt++){const Yt=E.get(R.textures[kt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+kt,Yt.__webglTexture,lt,Dt)}}else if(R!==null&&lt!==0){const Dt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Dt.__webglTexture,lt)}J=-1},this.readRenderTargetPixels=function(R,q,lt,it,$,wt,It,Dt=0){if(!(R&&R.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(kt=kt[It]),kt){Wt.bindFramebuffer(V.FRAMEBUFFER,kt);try{const Yt=R.textures[Dt],ee=Yt.format,se=Yt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Dt),!Le.textureFormatReadable(ee)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(se)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-it&&lt>=0&&lt<=R.height-$&&V.readPixels(q,lt,it,$,Rt.convert(ee),Rt.convert(se),wt)}finally{const Yt=j!==null?E.get(j).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,q,lt,it,$,wt,It,Dt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(kt=kt[It]),kt)if(q>=0&&q<=R.width-it&&lt>=0&&lt<=R.height-$){Wt.bindFramebuffer(V.FRAMEBUFFER,kt);const Yt=R.textures[Dt],ee=Yt.format,se=Yt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Dt),!Le.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Bt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Bt),V.bufferData(V.PIXEL_PACK_BUFFER,wt.byteLength,V.STREAM_READ),V.readPixels(q,lt,it,$,Rt.convert(ee),Rt.convert(se),0);const fe=j!==null?E.get(j).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,fe);const Ye=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await dM(V,Ye,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Bt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,wt),V.deleteBuffer(Bt),V.deleteSync(Ye),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,lt=0){const it=Math.pow(2,-lt),$=Math.floor(R.image.width*it),wt=Math.floor(R.image.height*it),It=q!==null?q.x:0,Dt=q!==null?q.y:0;Z.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,It,Dt,$,wt),Wt.unbindTexture()};const ba=V.createFramebuffer(),is=V.createFramebuffer();this.copyTextureToTexture=function(R,q,lt=null,it=null,$=0,wt=0){let It,Dt,kt,Yt,ee,se,Bt,fe,Ye;const je=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(lt!==null)It=lt.max.x-lt.min.x,Dt=lt.max.y-lt.min.y,kt=lt.isBox3?lt.max.z-lt.min.z:1,Yt=lt.min.x,ee=lt.min.y,se=lt.isBox3?lt.min.z:0;else{const rn=Math.pow(2,-$);It=Math.floor(je.width*rn),Dt=Math.floor(je.height*rn),R.isDataArrayTexture?kt=je.depth:R.isData3DTexture?kt=Math.floor(je.depth*rn):kt=1,Yt=0,ee=0,se=0}it!==null?(Bt=it.x,fe=it.y,Ye=it.z):(Bt=0,fe=0,Ye=0);const Re=Rt.convert(q.format),pn=Rt.convert(q.type);let Gt;q.isData3DTexture?(Z.setTexture3D(q,0),Gt=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Z.setTexture2DArray(q,0),Gt=V.TEXTURE_2D_ARRAY):(Z.setTexture2D(q,0),Gt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const Dn=V.getParameter(V.UNPACK_ROW_LENGTH),ae=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Un=V.getParameter(V.UNPACK_SKIP_PIXELS),qn=V.getParameter(V.UNPACK_SKIP_ROWS),Si=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,je.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,je.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Yt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ee),V.pixelStorei(V.UNPACK_SKIP_IMAGES,se);const Yn=R.isDataArrayTexture||R.isData3DTexture,Oe=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const rn=E.get(R),Nn=E.get(q),on=E.get(rn.__renderTarget),Mi=E.get(Nn.__renderTarget);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,on.__webglFramebuffer),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Wi=0;Wi<kt;Wi++)Yn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,$,se+Wi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(q).__webglTexture,wt,Ye+Wi)),V.blitFramebuffer(Yt,ee,It,Dt,Bt,fe,It,Dt,V.DEPTH_BUFFER_BIT,V.NEAREST);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||E.has(R)){const rn=E.get(R),Nn=E.get(q);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,ba),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,is);for(let on=0;on<kt;on++)Yn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,rn.__webglTexture,$,se+on):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,rn.__webglTexture,$),Oe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Nn.__webglTexture,wt,Ye+on):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nn.__webglTexture,wt),$!==0?V.blitFramebuffer(Yt,ee,It,Dt,Bt,fe,It,Dt,V.COLOR_BUFFER_BIT,V.NEAREST):Oe?V.copyTexSubImage3D(Gt,wt,Bt,fe,Ye+on,Yt,ee,It,Dt):V.copyTexSubImage2D(Gt,wt,Bt,fe,Yt,ee,It,Dt);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Oe?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Gt,wt,Bt,fe,Ye,It,Dt,kt,Re,pn,je.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Gt,wt,Bt,fe,Ye,It,Dt,kt,Re,je.data):V.texSubImage3D(Gt,wt,Bt,fe,Ye,It,Dt,kt,Re,pn,je):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,wt,Bt,fe,It,Dt,Re,pn,je.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,wt,Bt,fe,je.width,je.height,Re,je.data):V.texSubImage2D(V.TEXTURE_2D,wt,Bt,fe,It,Dt,Re,pn,je);V.pixelStorei(V.UNPACK_ROW_LENGTH,Dn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ae),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Un),V.pixelStorei(V.UNPACK_SKIP_ROWS,qn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Si),wt===0&&q.generateMipmaps&&V.generateMipmap(Gt),Wt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&Z.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Z.setTextureCube(R,0):R.isData3DTexture?Z.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Z.setTexture2DArray(R,0):Z.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){G=0,k=0,j=null,Wt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}const As={idle:{core:new te(9133302),glow:new te(6514417),particles:new te(10980346),ambient:new te(1710638)},listening:{core:new te(62975),glow:new te(440020),particles:new te(2282478),ambient:new te(662062)},thinking:{core:new te(16711790),glow:new te(15485081),particles:new te(16020150),ambient:new te(3017242)},speaking:{core:new te(458639),glow:new te(1096065),particles:new te(3462041),ambient:new te(667162)},error:{core:new te(16711764),glow:new te(15680580),particles:new te(16281969),ambient:new te(3017226)}},Z1=({state:o="idle",volume:e=0})=>{const i=Pe.useRef(null),s=Pe.useRef(null),l=Pe.useRef(null),u=Pe.useRef(null),h=Pe.useRef(null),p=Pe.useRef(null),m=Pe.useRef(As.idle),d=Pe.useRef(As.idle),x=Pe.useCallback(()=>{if(!i.current)return;const S=new wM;s.current=S;const g=new j1({antialias:!0,alpha:!0});g.setSize(i.current.offsetWidth,i.current.offsetHeight),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setClearColor(0,0),i.current.appendChild(g.domElement),l.current=g;const y=new ii(45,i.current.offsetWidth/i.current.offsetHeight,.1,100);y.position.z=5;const b=new Wd(1.2,4),w=new _i({uniforms:{uTime:{value:0},uColor:{value:As.idle.core},uVolume:{value:0}},vertexShader:`
        uniform float uTime;
        uniform float uVolume;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        // Simplex noise
        vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        
        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289(i);
          vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          vec4 x = x_ * ns.x + ns.yyyy;
          vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }
        
        void main() {
          vUv = uv;
          vNormal = normal;
          vPosition = position;
          
          float noise = snoise(position * 1.5 + uTime * 0.5) * 0.15;
          noise += snoise(position * 3.0 + uTime * 0.3) * 0.08;
          noise += uVolume * snoise(position * 5.0 + uTime) * 0.1;
          
          vec3 newPosition = position + normal * noise;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uColor;
        uniform float uVolume;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        void main() {
          // Fresnel effect
          vec3 viewDir = normalize(cameraPosition - vPosition);
          float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.0);
          
          // Inner glow
          float innerGlow = pow(max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0), 2.0);
          
          // Color mix
          vec3 coreColor = uColor;
          vec3 glowColor = mix(uColor, vec3(1.0), 0.3);
          
          // Final color
          vec3 finalColor = mix(coreColor * 0.5, glowColor, fresnel);
          finalColor += vec3(1.0) * innerGlow * 0.3;
          finalColor += uVolume * 0.2;
          
          float alpha = 0.7 + fresnel * 0.3 + uVolume * 0.2;
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,transparent:!0,side:va}),M=new Di(b,w);S.add(M),u.current=M;const v=500,C=new si,N=new Float32Array(v*3),D=new Float32Array(v),B=new Float32Array(v),F=new Float32Array(v);for(let X=0;X<v;X++){const L=Math.random()*Math.PI*2,P=1.5+Math.random()*2,rt=Math.random()*Math.PI;N[X*3]=P*Math.sin(rt)*Math.cos(L),N[X*3+1]=P*Math.sin(rt)*Math.sin(L),N[X*3+2]=P*Math.cos(rt),D[X]=Math.random()*4+1,B[X]=L,F[X]=P}C.setAttribute("position",new gi(N,3)),C.setAttribute("size",new gi(D,1));const I=new _i({uniforms:{uTime:{value:0},uColor:{value:As.idle.particles},uVolume:{value:0}},vertexShader:`
        attribute float size;
        uniform float uTime;
        uniform float uVolume;
        varying float vAlpha;
        
        void main() {
          vec3 pos = position;
          float angle = atan(pos.y, pos.x) + uTime * 0.2;
          float radius = length(pos.xy);
          pos.x = cos(angle) * radius;
          pos.y = sin(angle) * radius;
          pos.z += sin(uTime + length(pos) * 2.0) * 0.2;
          
          vAlpha = 0.3 + sin(uTime * 2.0 + length(pos)) * 0.3 + uVolume * 0.4;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (2.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vAlpha;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Ih}),T=new HM(C,I);S.add(T),h.current=T;const U=new Bo;for(let X=0;X<3;X++){const L=new qd(1.5+X*.4,.01,16,100),P=new Vd({color:As.idle.glow,transparent:!0,opacity:.3/(X+1)}),rt=new Di(L,P);rt.rotation.x=Math.PI/2+X*.3,rt.rotation.y=X*.5,U.add(rt)}S.add(U),p.current=U;const ot=new JM(4210752,.5);S.add(ot);const G=new QM(As.idle.core,1,10);G.position.set(0,0,3),S.add(G);let k=0;const j=()=>{requestAnimationFrame(j),k+=.016;const X=m.current,L=d.current;if(L.core.lerp(X.core,.02),L.glow.lerp(X.glow,.02),L.particles.lerp(X.particles,.02),w.uniforms&&(w.uniforms.uTime.value=k,w.uniforms.uColor.value.copy(L.core),w.uniforms.uVolume.value=e),I.uniforms&&(I.uniforms.uTime.value=k,I.uniforms.uColor.value.copy(L.particles),I.uniforms.uVolume.value=e),p.current&&p.current.children.forEach((P,rt)=>{P.rotation.z=k*(.1+rt*.05),P.rotation.x=Math.PI/2+Math.sin(k*.5+rt)*.3,P.material.opacity=.3/(rt+1)*(.5+e*.5),P.material.color.copy(L.glow)}),u.current){const P=1+e*.3;u.current.scale.setScalar(P)}g.render(S,y)};j();const J=()=>{if(!i.current)return;const X=i.current.offsetWidth,L=i.current.offsetHeight;y.aspect=X/L,y.updateProjectionMatrix(),g.setSize(X,L)};return window.addEventListener("resize",J),()=>{window.removeEventListener("resize",J),i.current&&g.domElement&&i.current.removeChild(g.domElement),g.dispose()}},[]);return Pe.useEffect(()=>{m.current=As[o]},[o]),Pe.useEffect(()=>x(),[x]),ie.jsx("div",{ref:i,style:{width:"100%",height:"100%",position:"relative"}})},zh="https://iaputa.alvarezconsult.com/api",L_="iaputa_sk_7f3a9b2c1d4e5f6a8b9c0d1e2f3a4b5c",O_={hola:"¡Hola! Soy IAPuta OS, tu asistente IA personal. ¿En qué puedo ayudarte hoy?",hello:"Hello! I am IAPuta OS, your personal AI assistant. How can I help you?",ayuda:`Puedo ayudarte con:
• 📷 Análisis de imágenes y pantalla
• 📧 Gestión de correos y calendario
• 🐍 Código Python
• 🔍 Búsquedas web
• 💻 Control del sistema`,default:"Entiendo tu consulta. En modo demo mis respuestas son limitadas. Para funcionalidad completa necesitas el backend."};function K1(){const[o,e]=Pe.useState([]),[i,s]=Pe.useState(""),[l,u]=Pe.useState(!1),[h,p]=Pe.useState(!1),[m,d]=Pe.useState(null),[x,S]=Pe.useState(!1),[g,y]=Pe.useState(!1),[b,w]=Pe.useState("idle"),[M,v]=Pe.useState(0),C=Pe.useRef(null),N=Pe.useRef(null),D=Pe.useRef([]);Pe.useEffect(()=>{fetch(`${zh}/status`,{signal:AbortSignal.timeout(3e3)}).then(k=>{k.ok||p(!0)}).catch(()=>p(!0))},[]),Pe.useEffect(()=>{C.current?.scrollIntoView({behavior:"smooth"})},[o]);const B=Pe.useCallback(k=>{if("speechSynthesis"in window){window.speechSynthesis.cancel();const j=new SpeechSynthesisUtterance(k);j.lang="es-ES",j.rate=1,j.pitch=1,j.onstart=()=>{y(!0),w("speaking")},j.onend=()=>{y(!1),w("idle")},j.onerror=()=>{y(!1),w("idle")},window.speechSynthesis.speak(j)}},[]),F=Pe.useCallback(async()=>{try{const k=await navigator.mediaDevices.getUserMedia({audio:!0}),j=new MediaRecorder(k);N.current=j,D.current=[],j.ondataavailable=J=>{J.data.size>0&&D.current.push(J.data)},j.onstop=async()=>{k.getTracks().forEach(X=>X.stop()),S(!1),w("thinking");const J=new Blob(D.current,{type:"audio/webm"});if(h)e(X=>[...X,{id:crypto.randomUUID(),role:"user",content:"🎤 [Mensaje de voz]",timestamp:new Date}]),setTimeout(()=>{const X="He recibido tu mensaje de voz. En modo demo no puedo transcribirlo, pero en modo completo usaría Whisper para convertir tu voz a texto.";e(L=>[...L,{id:crypto.randomUUID(),role:"assistant",content:X,timestamp:new Date}]),B(X)},1e3);else{const X=new FormData;X.append("audio_file",J,"audio.webm"),e(L=>[...L,{id:crypto.randomUUID(),role:"user",content:"🎤 [Procesando voz...]",timestamp:new Date}]);try{const P=await(await fetch(`${zh}/voice-command`,{method:"POST",headers:{"x-api-key":L_},body:X})).json(),rt={id:crypto.randomUUID(),role:"assistant",content:P.response||P.transcript||"Sin respuesta",timestamp:new Date,audioUrl:P.audio_url};e(dt=>[...dt,rt]),P.audio_url?new Audio(P.audio_url).play().catch(()=>B(P.response||P.transcript||"")):B(P.response||P.transcript||"")}catch(L){e(P=>[...P,{id:crypto.randomUUID(),role:"system",content:`❌ Error de voz: ${String(L)}`,timestamp:new Date}]),w("error"),setTimeout(()=>w("idle"),3e3)}}},j.start(),S(!0),w("listening"),setTimeout(()=>{N.current&&N.current.state==="recording"&&N.current.stop()},15e3)}catch(k){e(j=>[...j,{id:crypto.randomUUID(),role:"system",content:`❌ Error micrófono: ${String(k)}`,timestamp:new Date}]),w("error"),setTimeout(()=>w("idle"),3e3)}},[h,B]),I=Pe.useCallback(()=>{N.current&&N.current.state==="recording"&&N.current.stop()},[]),T=Pe.useCallback(async k=>{if(k.trim())if(u(!0),w("thinking"),e(j=>[...j,{id:crypto.randomUUID(),role:"user",content:k,timestamp:new Date}]),h){const j=k.toLowerCase();let J=O_.default;for(const[X,L]of Object.entries(O_))if(j.includes(X)){J=L;break}setTimeout(()=>{e(X=>[...X,{id:crypto.randomUUID(),role:"assistant",content:J,timestamp:new Date}]),B(J),u(!1)},1e3)}else{try{const J=await(await fetch(`${zh}/text-command`,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":L_},body:JSON.stringify({text:k})})).json(),X={id:crypto.randomUUID(),role:"assistant",content:J.response||J.error||"Sin respuesta",timestamp:new Date,audioUrl:J.audio_url};e(L=>[...L,X]),J.audio_url?new Audio(J.audio_url).play().catch(()=>B(J.response||"")):B(J.response||"")}catch(j){e(J=>[...J,{id:crypto.randomUUID(),role:"system",content:`❌ Error: ${String(j)}`,timestamp:new Date}]),w("error"),setTimeout(()=>w("idle"),3e3)}u(!1)}},[h,B]),U=k=>{k.preventDefault(),i.trim()&&!l&&(T(i),s(""))},ot=async()=>{try{const k=await navigator.mediaDevices.getUserMedia({video:!0}),j=document.createElement("video");j.srcObject=k,await j.play();const J=document.createElement("canvas");J.width=j.videoWidth,J.height=j.videoHeight,J.getContext("2d").drawImage(j,0,0),k.getTracks().forEach(X=>X.stop()),d(J.toDataURL("image/jpeg")),e(X=>[...X,{id:crypto.randomUUID(),role:"system",content:"📷 Cámara capturada correctamente.",timestamp:new Date}])}catch(k){e(j=>[...j,{id:crypto.randomUUID(),role:"system",content:`❌ Error cámara: ${String(k)}`,timestamp:new Date}])}},G=async()=>{try{const k=await navigator.mediaDevices.getDisplayMedia({video:!0}),j=document.createElement("video");j.srcObject=k,await j.play();const J=document.createElement("canvas");J.width=j.videoWidth,J.height=j.videoHeight,J.getContext("2d").drawImage(j,0,0),k.getTracks().forEach(X=>X.stop()),d(J.toDataURL("image/jpeg")),e(X=>[...X,{id:crypto.randomUUID(),role:"system",content:"🖥️ Pantalla capturada correctamente.",timestamp:new Date}])}catch(k){e(j=>[...j,{id:crypto.randomUUID(),role:"system",content:`❌ Error captura: ${String(k)}`,timestamp:new Date}])}};return ie.jsxs("div",{className:"app-container",children:[ie.jsxs("header",{className:"app-header",children:[ie.jsxs("div",{className:"header-brand",children:[ie.jsx("div",{className:"header-logo",children:"🤖"}),ie.jsxs("div",{children:[ie.jsx("h1",{className:"header-title",children:"IAPuta OS"}),ie.jsx("p",{className:"header-subtitle",children:h?"🟡 Modo Demo":"🟢 Conectado"})]})]}),ie.jsxs("div",{className:"header-actions",children:[ie.jsx("button",{className:"action-btn",onClick:ot,title:"Capturar cámara",children:"📷"}),ie.jsx("button",{className:"action-btn",onClick:G,title:"Capturar pantalla",children:"🖥️"}),ie.jsx("button",{className:"action-btn",onClick:()=>{e([]),d(null),window.speechSynthesis.cancel(),w("idle")},title:"Limpiar chat",children:"🗑️"})]})]}),ie.jsxs("main",{className:"app-main",children:[ie.jsx("div",{className:"orb-section",children:ie.jsxs("div",{className:"orb-container",children:[ie.jsx(Z1,{state:b,volume:M}),ie.jsxs("div",{className:"orb-status",children:[ie.jsx("span",{className:`orb-status-dot orb-status-dot--${b}`}),ie.jsxs("span",{className:"orb-status-text",children:[b==="idle"&&"Listo",b==="listening"&&"Escuchando...",b==="thinking"&&"Pensando...",b==="speaking"&&"Hablando...",b==="error"&&"Error"]})]})]})}),m&&ie.jsxs("div",{className:"vision-panel",children:[ie.jsxs("div",{className:"vision-header",children:[ie.jsx("span",{className:"vision-title",children:"👁️ Visión"}),ie.jsx("button",{className:"vision-close",onClick:()=>d(null),children:"✕"})]}),ie.jsx("img",{src:m,alt:"Visión",className:"vision-image"})]}),ie.jsxs("div",{className:"chat-container",children:[o.length===0&&ie.jsxs("div",{className:"chat-empty",children:[ie.jsx("h2",{className:"chat-empty-title",children:"IAPuta OS"}),ie.jsx("p",{className:"chat-empty-desc",children:"Tu asistente IA personal con voz. Escribe o habla para comenzar."})]}),o.map(k=>ie.jsx("div",{className:`message message--${k.role}`,children:ie.jsxs("div",{className:"message-bubble",children:[k.content,ie.jsx("div",{className:"message-time",children:k.timestamp.toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"})}),k.role==="assistant"&&ie.jsx("button",{className:"audio-btn",onClick:()=>B(k.content),children:"🔊 Escuchar"})]})},k.id)),l&&ie.jsxs("div",{className:"loading-indicator",children:[ie.jsxs("div",{className:"loading-dots",children:[ie.jsx("div",{className:"loading-dot"}),ie.jsx("div",{className:"loading-dot"}),ie.jsx("div",{className:"loading-dot"})]}),ie.jsx("span",{children:"Pensando..."})]}),ie.jsx("div",{ref:C})]}),ie.jsxs("form",{className:"input-bar",onSubmit:U,children:[ie.jsx("input",{className:"input-field",type:"text",value:i,onChange:k=>s(k.target.value),placeholder:"Escribe tu mensaje...",disabled:l}),ie.jsx("button",{type:"button",className:`input-btn--mic ${x?"recording":""}`,onClick:x?I:F,title:x?"Detener grabación":"Grabar voz",children:x?"⏹️":"🎤"}),ie.jsx("button",{className:"input-btn input-btn--primary",type:"submit",disabled:l||!i.trim(),children:"Enviar"})]})]}),ie.jsx("footer",{className:"app-footer",children:"MSBrossAI © 2026 — IAPuta OS v8.0"})]})}US.createRoot(document.getElementById("root")).render(ie.jsx(bS.StrictMode,{children:ie.jsx(K1,{})}));
