(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function SS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Kf={exports:{}},wo={};var bg;function MS(){if(bg)return wo;bg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var Ag;function yS(){return Ag||(Ag=1,Kf.exports=MS()),Kf.exports}var Te=yS(),Qf={exports:{}},se={};var Rg;function ES(){if(Rg)return se;Rg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function v(P,Z,_t){this.props=P,this.context=Z,this.refs=M,this.updater=_t||T}v.prototype.isReactComponent={},v.prototype.setState=function(P,Z){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Z,"setState")},v.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function C(){}C.prototype=v.prototype;function L(P,Z,_t){this.props=P,this.context=Z,this.refs=M,this.updater=_t||T}var D=L.prototype=new C;D.constructor=L,w(D,v.prototype),D.isPureReactComponent=!0;var H=Array.isArray;function B(){}var F={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function U(P,Z,_t){var At=_t.ref;return{$$typeof:o,type:P,key:Z,ref:At!==void 0?At:null,props:_t}}function Q(P,Z){return U(P.type,Z,P.props)}function I(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function Y(P){var Z={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(_t){return Z[_t]})}var tt=/\/+/g;function rt(P,Z){return typeof P=="object"&&P!==null&&P.key!=null?Y(""+P.key):Z.toString(36)}function q(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(B,B):(P.status="pending",P.then(function(Z){P.status==="pending"&&(P.status="fulfilled",P.value=Z)},function(Z){P.status==="pending"&&(P.status="rejected",P.reason=Z)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function N(P,Z,_t,At,zt){var at=typeof P;(at==="undefined"||at==="boolean")&&(P=null);var vt=!1;if(P===null)vt=!0;else switch(at){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(P.$$typeof){case o:case e:vt=!0;break;case S:return vt=P._init,N(vt(P._payload),Z,_t,At,zt)}}if(vt)return zt=zt(P),vt=At===""?"."+rt(P,0):At,H(zt)?(_t="",vt!=null&&(_t=vt.replace(tt,"$&/")+"/"),N(zt,Z,_t,"",function(Zt){return Zt})):zt!=null&&(I(zt)&&(zt=Q(zt,_t+(zt.key==null||P&&P.key===zt.key?"":(""+zt.key).replace(tt,"$&/")+"/")+vt)),Z.push(zt)),1;vt=0;var Tt=At===""?".":At+":";if(H(P))for(var Vt=0;Vt<P.length;Vt++)At=P[Vt],at=Tt+rt(At,Vt),vt+=N(At,Z,_t,at,zt);else if(Vt=y(P),typeof Vt=="function")for(P=Vt.call(P),Vt=0;!(At=P.next()).done;)At=At.value,at=Tt+rt(At,Vt++),vt+=N(At,Z,_t,at,zt);else if(at==="object"){if(typeof P.then=="function")return N(q(P),Z,_t,At,zt);throw Z=String(P),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return vt}function z(P,Z,_t){if(P==null)return P;var At=[],zt=0;return N(P,At,"","",function(at){return Z.call(_t,at,zt++)}),At}function ot(P){if(P._status===-1){var Z=P._result;Z=Z(),Z.then(function(_t){(P._status===0||P._status===-1)&&(P._status=1,P._result=_t)},function(_t){(P._status===0||P._status===-1)&&(P._status=2,P._result=_t)}),P._status===-1&&(P._status=0,P._result=Z)}if(P._status===1)return P._result.default;throw P._result}var dt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Et={map:z,forEach:function(P,Z,_t){z(P,function(){Z.apply(this,arguments)},_t)},count:function(P){var Z=0;return z(P,function(){Z++}),Z},toArray:function(P){return z(P,function(Z){return Z})||[]},only:function(P){if(!I(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return se.Activity=x,se.Children=Et,se.Component=v,se.Fragment=i,se.Profiler=l,se.PureComponent=L,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,se.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},se.cache=function(P){return function(){return P.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(P,Z,_t){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var At=w({},P.props),zt=P.key;if(Z!=null)for(at in Z.key!==void 0&&(zt=""+Z.key),Z)!b.call(Z,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Z.ref===void 0||(At[at]=Z[at]);var at=arguments.length-2;if(at===1)At.children=_t;else if(1<at){for(var vt=Array(at),Tt=0;Tt<at;Tt++)vt[Tt]=arguments[Tt+2];At.children=vt}return U(P.type,zt,At)},se.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},se.createElement=function(P,Z,_t){var At,zt={},at=null;if(Z!=null)for(At in Z.key!==void 0&&(at=""+Z.key),Z)b.call(Z,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(zt[At]=Z[At]);var vt=arguments.length-2;if(vt===1)zt.children=_t;else if(1<vt){for(var Tt=Array(vt),Vt=0;Vt<vt;Vt++)Tt[Vt]=arguments[Vt+2];zt.children=Tt}if(P&&P.defaultProps)for(At in vt=P.defaultProps,vt)zt[At]===void 0&&(zt[At]=vt[At]);return U(P,at,zt)},se.createRef=function(){return{current:null}},se.forwardRef=function(P){return{$$typeof:p,render:P}},se.isValidElement=I,se.lazy=function(P){return{$$typeof:S,_payload:{_status:-1,_result:P},_init:ot}},se.memo=function(P,Z){return{$$typeof:d,type:P,compare:Z===void 0?null:Z}},se.startTransition=function(P){var Z=F.T,_t={};F.T=_t;try{var At=P(),zt=F.S;zt!==null&&zt(_t,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(B,dt)}catch(at){dt(at)}finally{Z!==null&&_t.types!==null&&(Z.types=_t.types),F.T=Z}},se.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},se.use=function(P){return F.H.use(P)},se.useActionState=function(P,Z,_t){return F.H.useActionState(P,Z,_t)},se.useCallback=function(P,Z){return F.H.useCallback(P,Z)},se.useContext=function(P){return F.H.useContext(P)},se.useDebugValue=function(){},se.useDeferredValue=function(P,Z){return F.H.useDeferredValue(P,Z)},se.useEffect=function(P,Z){return F.H.useEffect(P,Z)},se.useEffectEvent=function(P){return F.H.useEffectEvent(P)},se.useId=function(){return F.H.useId()},se.useImperativeHandle=function(P,Z,_t){return F.H.useImperativeHandle(P,Z,_t)},se.useInsertionEffect=function(P,Z){return F.H.useInsertionEffect(P,Z)},se.useLayoutEffect=function(P,Z){return F.H.useLayoutEffect(P,Z)},se.useMemo=function(P,Z){return F.H.useMemo(P,Z)},se.useOptimistic=function(P,Z){return F.H.useOptimistic(P,Z)},se.useReducer=function(P,Z,_t){return F.H.useReducer(P,Z,_t)},se.useRef=function(P){return F.H.useRef(P)},se.useState=function(P){return F.H.useState(P)},se.useSyncExternalStore=function(P,Z,_t){return F.H.useSyncExternalStore(P,Z,_t)},se.useTransition=function(){return F.H.useTransition()},se.version="19.2.4",se}var Cg;function Ud(){return Cg||(Cg=1,Qf.exports=ES()),Qf.exports}var Pe=Ud();const TS=SS(Pe);var Jf={exports:{}},Do={},$f={exports:{}},th={};var wg;function bS(){return wg||(wg=1,(function(o){function e(N,z){var ot=N.length;N.push(z);t:for(;0<ot;){var dt=ot-1>>>1,Et=N[dt];if(0<l(Et,z))N[dt]=z,N[ot]=Et,ot=dt;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var z=N[0],ot=N.pop();if(ot!==z){N[0]=ot;t:for(var dt=0,Et=N.length,P=Et>>>1;dt<P;){var Z=2*(dt+1)-1,_t=N[Z],At=Z+1,zt=N[At];if(0>l(_t,ot))At<Et&&0>l(zt,_t)?(N[dt]=zt,N[At]=ot,dt=At):(N[dt]=_t,N[Z]=ot,dt=Z);else if(At<Et&&0>l(zt,ot))N[dt]=zt,N[At]=ot,dt=At;else break t}}return z}function l(N,z){var ot=N.sortIndex-z.sortIndex;return ot!==0?ot:N.id-z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],S=1,x=null,g=3,y=!1,T=!1,w=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var z=i(d);z!==null;){if(z.callback===null)s(d);else if(z.startTime<=N)s(d),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(d)}}function H(N){if(w=!1,D(N),!T)if(i(m)!==null)T=!0,B||(B=!0,Y());else{var z=i(d);z!==null&&q(H,z.startTime-N)}}var B=!1,F=-1,b=5,U=-1;function Q(){return M?!0:!(o.unstable_now()-U<b)}function I(){if(M=!1,B){var N=o.unstable_now();U=N;var z=!0;try{t:{T=!1,w&&(w=!1,C(F),F=-1),y=!0;var ot=g;try{e:{for(D(N),x=i(m);x!==null&&!(x.expirationTime>N&&Q());){var dt=x.callback;if(typeof dt=="function"){x.callback=null,g=x.priorityLevel;var Et=dt(x.expirationTime<=N);if(N=o.unstable_now(),typeof Et=="function"){x.callback=Et,D(N),z=!0;break e}x===i(m)&&s(m),D(N)}else s(m);x=i(m)}if(x!==null)z=!0;else{var P=i(d);P!==null&&q(H,P.startTime-N),z=!1}}break t}finally{x=null,g=ot,y=!1}z=void 0}}finally{z?Y():B=!1}}}var Y;if(typeof L=="function")Y=function(){L(I)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,rt=tt.port2;tt.port1.onmessage=I,Y=function(){rt.postMessage(null)}}else Y=function(){v(I,0)};function q(N,z){F=v(function(){N(o.unstable_now())},z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(N){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var ot=g;g=z;try{return N()}finally{g=ot}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ot=g;g=N;try{return z()}finally{g=ot}},o.unstable_scheduleCallback=function(N,z,ot){var dt=o.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?dt+ot:dt):ot=dt,N){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=ot+Et,N={id:S++,callback:z,priorityLevel:N,startTime:ot,expirationTime:Et,sortIndex:-1},ot>dt?(N.sortIndex=ot,e(d,N),i(m)===null&&N===i(d)&&(w?(C(F),F=-1):w=!0,q(H,ot-dt))):(N.sortIndex=Et,e(m,N),T||y||(T=!0,B||(B=!0,Y()))),N},o.unstable_shouldYield=Q,o.unstable_wrapCallback=function(N){var z=g;return function(){var ot=g;g=z;try{return N.apply(this,arguments)}finally{g=ot}}}})(th)),th}var Dg;function AS(){return Dg||(Dg=1,$f.exports=bS()),$f.exports}var eh={exports:{}},bn={};var Ug;function RS(){if(Ug)return bn;Ug=1;var o=Ud();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)d+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,d,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,bn.createPortal=function(m,d){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return u(m,d,null,S)},bn.flushSync=function(m){var d=h.T,S=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=S,s.d.f()}},bn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},bn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var S=d.as,x=p(S,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;S==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):S==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},bn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var S=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},bn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var S=d.as,x=p(S,d.crossOrigin);s.d.L(m,S,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},bn.preloadModule=function(m,d){if(typeof m=="string")if(d){var S=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},bn.requestFormReset=function(m){s.d.r(m)},bn.unstable_batchedUpdates=function(m,d){return m(d)},bn.useFormState=function(m,d,S){return h.H.useFormState(m,d,S)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.2.4",bn}var Lg;function CS(){if(Lg)return eh.exports;Lg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),eh.exports=RS(),eh.exports}var Ng;function wS(){if(Ng)return Do;Ng=1;var o=AS(),e=Ud(),i=CS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,A=c.child;A;){if(A===a){_=!0,a=c,r=f;break}if(A===r){_=!0,r=c,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,r=c;break}if(A===r){_=!0,r=f,a=c;break}A=A.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),Q=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var tt=Symbol.for("react.client.reference");function rt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===tt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case B:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case L:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:rt(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return rt(t(n))}catch{}}return null}var q=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},dt=[],Et=-1;function P(t){return{current:t}}function Z(t){0>Et||(t.current=dt[Et],dt[Et]=null,Et--)}function _t(t,n){Et++,dt[Et]=t.current,t.current=n}var At=P(null),zt=P(null),at=P(null),vt=P(null);function Tt(t,n){switch(_t(at,n),_t(zt,t),_t(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?j0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=j0(n),t=Z0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(At),_t(At,t)}function Vt(){Z(At),Z(zt),Z(at)}function Zt(t){t.memoizedState!==null&&_t(vt,t);var n=At.current,a=Z0(n,t.type);n!==a&&(_t(zt,t),_t(At,a))}function Jt(t){zt.current===t&&(Z(At),Z(zt)),vt.current===t&&(Z(vt),bo._currentValue=ot)}var Je,_e;function pe(t){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+t+_e}var Ue=!1;function oe(t,n){if(!t||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ct){var st=ct}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(ct){st=ct}t.call(gt.prototype)}}else{try{throw Error()}catch(ct){st=ct}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ct){if(ct&&st&&typeof ct.stack=="string")return[ct.stack,st.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var G=_.split(`
`),nt=A.split(`
`);for(c=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(r===G.length||c===nt.length)for(r=G.length-1,c=nt.length-1;1<=r&&0<=c&&G[r]!==nt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(G[r]!==nt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||G[r]!==nt[c]){var ht=`
`+G[r].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=r&&0<=c);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pe(a):""}function Ke(t,n){switch(t.tag){case 26:case 27:case 5:return pe(t.type);case 16:return pe("Lazy");case 13:return t.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return oe(t.type,!1);case 11:return oe(t.type.render,!1);case 1:return oe(t.type,!0);case 31:return pe("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=Ke(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var qe=Object.prototype.hasOwnProperty,ye=o.unstable_scheduleCallback,Ne=o.unstable_cancelCallback,Wt=o.unstable_shouldYield,O=o.unstable_requestPaint,E=o.unstable_now,j=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ft=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,jt=o.log,$t=o.unstable_setDisableYieldValue,yt=null,St=null;function Nt(t){if(typeof jt=="function"&&$t(t),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(yt,t)}catch{}}var Lt=Math.clz32?Math.clz32:W,Ot=Math.log,ce=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Ot(t)/ce|0)|0}var Rt=256,bt=262144,Pt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ut(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?c=Mt(r):(_&=A,_!==0?c=Mt(_):a||(a=A&~t,a!==0&&(c=Mt(a))))):(A=r&~f,A!==0?c=Mt(A):_!==0?c=Mt(_):a||(a=r&~t,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function It(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var t=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vi(t,n,a,r,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,G=t.expirationTimes,nt=t.hiddenUpdates;for(a=_&~a;0<a;){var ht=31-Lt(a),gt=1<<ht;A[ht]=0,G[ht]=-1;var st=nt[ht];if(st!==null)for(nt[ht]=null,ht=0;ht<st.length;ht++){var ct=st[ht];ct!==null&&(ct.lane&=-536870913)}a&=~gt}r!==0&&Br(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Br(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Lt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ns(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Lt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Zo(t,n){var a=n&-n;return a=(a&42)!==0?1:Os(a),(a&(t.suspendedLanes|n))!==0?0:a}function Os(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ps(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ui(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:vg(t.type))}function zs(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var xi=Math.random().toString(36).slice(2),sn="__reactFiber$"+xi,dn="__reactProps$"+xi,ki="__reactContainer$"+xi,ya="__reactEvents$"+xi,Ko="__reactListeners$"+xi,Qo="__reactHandles$"+xi,Jo="__reactResources$"+xi,ns="__reactMarker$"+xi;function Hr(t){delete t[sn],delete t[dn],delete t[ya],delete t[Ko],delete t[Qo]}function Ea(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ki]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=ng(t);t!==null;){if(a=t[sn])return a;t=ng(t)}return n}t=a,a=t.parentNode}return null}function Ta(t){if(t=t[sn]||t[ki]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function is(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function R(t){var n=t[Jo];return n||(n=t[Jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(t){t[ns]=!0}var lt=new Set,it={};function J(t,n){wt(t,n),wt(t+"Capture",n)}function wt(t,n){for(it[t]=n,t=0;t<n.length;t++)lt.add(n[t])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dt={},kt={};function Yt(t){return qe.call(kt,t)?!0:qe.call(Dt,t)?!1:Ft.test(t)?kt[t]=!0:(Dt[t]=!0,!1)}function ee(t,n,a){if(Yt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Bt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ye(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Re(t){if(!t._valueTracker){var n=Ye(t)?"checked":"value";t._valueTracker=je(t,n,""+t[n])}}function pn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Ye(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Gt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function ie(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Un(t,n,a,r,c,f,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ue(n)):t.value!==""+ue(n)&&(t.value=""+ue(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Si(t,_,ue(n)):a!=null?Si(t,_,ue(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ue(A):t.removeAttribute("name")}function qn(t,n,a,r,c,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Re(t);return}a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Re(t)}function Si(t,n,a){n==="number"&&Gt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Yn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Oe(t,n,a){if(n!=null&&(n=""+ue(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ue(a):""}function rn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(q(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ue(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Re(t)}function Ln(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var on=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mi(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||on.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Wi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Mi(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Mi(t,f,n[f])}function Fs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(t){return _v.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var qc=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Is=null,Bs=null;function Yd(t){var n=Ta(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Un(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[dn]||null;if(!c)throw Error(s(90));Un(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&pn(r)}break t;case"textarea":Oe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Yn(t,!!a.multiple,n,!1)}}}var jc=!1;function jd(t,n,a){if(jc)return t(n,a);jc=!0;try{var r=t(n);return r}finally{if(jc=!1,(Is!==null||Bs!==null)&&(Hl(),Is&&(n=Is,t=Bs,Bs=Is=null,Yd(n),t)))for(n=0;n<t.length;n++)Yd(t[n])}}function Gr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[dn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(Yi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Zc=!1}var ba=null,Kc=null,tl=null;function Zd(){if(tl)return tl;var t,n=Kc,a=n.length,r,c="value"in ba?ba.value:ba.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return tl=c.slice(t,1<r?1-r:void 0)}function el(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function Kd(){return!1}function In(t){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:Kd,this.isPropagationStopped=Kd,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=In(as),Xr=x({},as,{view:0,detail:0}),vv=In(Xr),Qc,Jc,kr,al=x({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==kr&&(kr&&t.type==="mousemove"?(Qc=t.screenX-kr.screenX,Jc=t.screenY-kr.screenY):Jc=Qc=0,kr=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Jc}}),Qd=In(al),xv=x({},al,{dataTransfer:0}),Sv=In(xv),Mv=x({},Xr,{relatedTarget:0}),$c=In(Mv),yv=x({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=In(yv),Tv=x({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bv=In(Tv),Av=x({},as,{data:0}),Jd=In(Av),Rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=wv[t])?!!n[t]:!1}function tu(){return Dv}var Uv=x({},Xr,{key:function(t){if(t.key){var n=Rv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lv=In(Uv),Nv=x({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=In(Nv),Ov=x({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Pv=In(Ov),zv=x({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=In(zv),Iv=x({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=In(Iv),Hv=x({},as,{newState:0,oldState:0}),Gv=In(Hv),Vv=[9,13,27,32],eu=Yi&&"CompositionEvent"in window,Wr=null;Yi&&"documentMode"in document&&(Wr=document.documentMode);var Xv=Yi&&"TextEvent"in window&&!Wr,tp=Yi&&(!eu||Wr&&8<Wr&&11>=Wr),ep=" ",np=!1;function ip(t,n){switch(t){case"keyup":return Vv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function kv(t,n){switch(t){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,ep);case"textInput":return t=n.data,t===ep&&np?null:t;default:return null}}function Wv(t,n){if(Hs)return t==="compositionend"||!eu&&ip(t,n)?(t=Zd(),tl=Kc=ba=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!qv[t.type]:n==="textarea"}function rp(t,n,a,r){Is?Bs?Bs.push(r):Bs=[r]:Is=r,n=Yl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var qr=null,Yr=null;function Yv(t){V0(t,0)}function sl(t){var n=is(t);if(pn(n))return t}function op(t,n){if(t==="change")return n}var lp=!1;if(Yi){var nu;if(Yi){var iu="oninput"in document;if(!iu){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),iu=typeof cp.oninput=="function"}nu=iu}else nu=!1;lp=nu&&(!document.documentMode||9<document.documentMode)}function up(){qr&&(qr.detachEvent("onpropertychange",fp),Yr=qr=null)}function fp(t){if(t.propertyName==="value"&&sl(Yr)){var n=[];rp(n,Yr,t,Yc(t)),jd(Yv,n)}}function jv(t,n,a){t==="focusin"?(up(),qr=n,Yr=a,qr.attachEvent("onpropertychange",fp)):t==="focusout"&&up()}function Zv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sl(Yr)}function Kv(t,n){if(t==="click")return sl(n)}function Qv(t,n){if(t==="input"||t==="change")return sl(n)}function Jv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:Jv;function jr(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!qe.call(n,c)||!jn(t[c],n[c]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dp(t,n){var a=hp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=hp(a)}}function pp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?pp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function mp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Gt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Gt(t.document)}return n}function au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $v=Yi&&"documentMode"in document&&11>=document.documentMode,Gs=null,su=null,Zr=null,ru=!1;function gp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ru||Gs==null||Gs!==Gt(r)||(r=Gs,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&jr(Zr,r)||(Zr=r,r=Yl(su,"onSelect"),0<r.length&&(n=new il("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Gs)))}function ss(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vs={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},ou={},_p={};Yi&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function rs(t){if(ou[t])return ou[t];if(!Vs[t])return t;var n=Vs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return ou[t]=n[a];return t}var vp=rs("animationend"),xp=rs("animationiteration"),Sp=rs("animationstart"),tx=rs("transitionrun"),ex=rs("transitionstart"),nx=rs("transitioncancel"),Mp=rs("transitionend"),yp=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function yi(t,n){yp.set(t,n),J(n,[t])}var rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],Xs=0,cu=0;function ol(){for(var t=Xs,n=cu=Xs=0;n<t;){var a=ri[n];ri[n++]=null;var r=ri[n];ri[n++]=null;var c=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&Ep(a,c,f)}}function ll(t,n,a,r){ri[Xs++]=t,ri[Xs++]=n,ri[Xs++]=a,ri[Xs++]=r,cu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function uu(t,n,a,r){return ll(t,n,a,r),cl(t)}function os(t,n){return ll(t,null,null,n),cl(t)}function Ep(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Lt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function cl(t){if(50<vo)throw vo=0,Sf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ks={};function ix(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,r){return new ix(t,n,a,r)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Tp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ul(t,n,a,r,c,f){var _=0;if(r=t,typeof t=="function")fu(t)&&(_=1);else if(typeof t=="string")_=lS(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case U:return t=Zn(31,a,n,c),t.elementType=U,t.lanes=f,t;case w:return ls(a.children,c,f,n);case M:_=8,c|=24;break;case v:return t=Zn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case H:return t=Zn(13,a,n,c),t.elementType=H,t.lanes=f,t;case B:return t=Zn(19,a,n,c),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:_=10;break t;case C:_=9;break t;case D:_=11;break t;case F:_=14;break t;case b:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Zn(_,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function ls(t,n,a,r){return t=Zn(7,t,r,n),t.lanes=a,t}function hu(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function bp(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function du(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ap=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=Ap.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},Ap.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Ws=[],qs=0,fl=null,Kr=0,li=[],ci=0,Aa=null,Li=1,Ni="";function Zi(t,n){Ws[qs++]=Kr,Ws[qs++]=fl,fl=t,Kr=n}function Rp(t,n,a){li[ci++]=Li,li[ci++]=Ni,li[ci++]=Aa,Aa=t;var r=Li;t=Ni;var c=32-Lt(r)-1;r&=~(1<<c),a+=1;var f=32-Lt(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Li=1<<32-Lt(n)+c|a<<c|r,Ni=f+t}else Li=1<<f|a<<c|r,Ni=t}function pu(t){t.return!==null&&(Zi(t,1),Rp(t,1,0))}function mu(t){for(;t===fl;)fl=Ws[--qs],Ws[qs]=null,Kr=Ws[--qs],Ws[qs]=null;for(;t===Aa;)Aa=li[--ci],li[ci]=null,Ni=li[--ci],li[ci]=null,Li=li[--ci],li[ci]=null}function Cp(t,n){li[ci++]=Li,li[ci++]=Ni,li[ci++]=Aa,Li=n.id,Ni=n.overflow,Aa=t}var Sn=null,ke=null,Se=!1,Ra=null,ui=!1,gu=Error(s(519));function Ca(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(oi(n,t)),gu}function wp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[sn]=t,n[dn]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)ge(So[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),qn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),rn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||q0(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Ca(t,!0)}function Dp(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Sn=Sn.return}}function Ys(t){if(t!==Sn)return!1;if(!Se)return Dp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Pf(t.type,t.memoizedProps)),a=!a),a&&ke&&Ca(t),Dp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=eg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=eg(t)}else n===27?(n=ke,Va(t.type)?(t=Hf,Hf=null,ke=t):ke=n):ke=Sn?hi(t.stateNode.nextSibling):null;return!0}function cs(){ke=Sn=null,Se=!1}function _u(){var t=Ra;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),Ra=null),t}function Qr(t){Ra===null?Ra=[t]:Ra.push(t)}var vu=P(null),us=null,Ki=null;function wa(t,n,a){_t(vu,n._currentValue),n._currentValue=a}function Qi(t){t._currentValue=vu.current,Z(vu)}function xu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Su(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),xu(f.return,a,t),r||(_=null);break t}f=A.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),xu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function js(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=c.type;jn(c.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(c===vt.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(bo):t=[bo])}c=c.return}t!==null&&Su(n,t,a,r),n.flags|=262144}function hl(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fs(t){us=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return Up(us,t)}function dl(t,n){return us===null&&fs(t),Up(t,n)}function Up(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(t===null)throw Error(s(308));Ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ki=Ki.next=n;return a}var ax=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},sx=o.unstable_scheduleCallback,rx=o.unstable_NormalPriority,ln={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new ax,data:new Map,refCount:0}}function Jr(t){t.refCount--,t.refCount===0&&sx(rx,function(){t.controller.abort()})}var $r=null,yu=0,Zs=0,Ks=null;function ox(t,n){if($r===null){var a=$r=[];yu=0,Zs=Af(),Ks={status:"pending",value:void 0,then:function(r){a.push(r)}}}return yu++,n.then(Lp,Lp),n}function Lp(){if(--yu===0&&$r!==null){Ks!==null&&(Ks.status="fulfilled");var t=$r;$r=null,Zs=0,Ks=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function lx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Np=N.S;N.S=function(t,n){g0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ox(t,n),Np!==null&&Np(t,n)};var hs=P(null);function Eu(){var t=hs.current;return t!==null?t:Xe.pooledCache}function pl(t,n){n===null?_t(hs,hs.current):_t(hs,n.pool)}function Op(){var t=Eu();return t===null?null:{parent:ln._currentValue,pool:t}}var Qs=Error(s(460)),Tu=Error(s(474)),ml=Error(s(542)),gl={then:function(){}};function Pp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ip(t),t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ip(t),t}throw ps=n,Qs}}function ds(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ps=a,Qs):a}}var ps=null;function Fp(){if(ps===null)throw Error(s(459));var t=ps;return ps=null,t}function Ip(t){if(t===Qs||t===ml)throw Error(s(483))}var Js=null,to=0;function _l(t){var n=to;return to+=1,Js===null&&(Js=[]),zp(Js,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function vl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Bp(t){function n(K,X){if(t){var et=K.deletions;et===null?(K.deletions=[X],K.flags|=16):et.push(X)}}function a(K,X){if(!t)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function r(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function c(K,X){return K=ji(K,X),K.index=0,K.sibling=null,K}function f(K,X,et){return K.index=et,t?(et=K.alternate,et!==null?(et=et.index,et<X?(K.flags|=67108866,X):et):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function _(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function A(K,X,et,mt){return X===null||X.tag!==6?(X=hu(et,K.mode,mt),X.return=K,X):(X=c(X,et),X.return=K,X)}function G(K,X,et,mt){var Kt=et.type;return Kt===w?ht(K,X,et.props.children,mt,et.key):X!==null&&(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&ds(Kt)===X.type)?(X=c(X,et.props),eo(X,et),X.return=K,X):(X=ul(et.type,et.key,et.props,null,K.mode,mt),eo(X,et),X.return=K,X)}function nt(K,X,et,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=du(et,K.mode,mt),X.return=K,X):(X=c(X,et.children||[]),X.return=K,X)}function ht(K,X,et,mt,Kt){return X===null||X.tag!==7?(X=ls(et,K.mode,mt,Kt),X.return=K,X):(X=c(X,et),X.return=K,X)}function gt(K,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=hu(""+X,K.mode,et),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return et=ul(X.type,X.key,X.props,null,K.mode,et),eo(et,X),et.return=K,et;case T:return X=du(X,K.mode,et),X.return=K,X;case b:return X=ds(X),gt(K,X,et)}if(q(X)||Y(X))return X=ls(X,K.mode,et,null),X.return=K,X;if(typeof X.then=="function")return gt(K,_l(X),et);if(X.$$typeof===L)return gt(K,dl(K,X),et);vl(K,X)}return null}function st(K,X,et,mt){var Kt=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Kt!==null?null:A(K,X,""+et,mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===Kt?G(K,X,et,mt):null;case T:return et.key===Kt?nt(K,X,et,mt):null;case b:return et=ds(et),st(K,X,et,mt)}if(q(et)||Y(et))return Kt!==null?null:ht(K,X,et,mt,null);if(typeof et.then=="function")return st(K,X,_l(et),mt);if(et.$$typeof===L)return st(K,X,dl(K,et),mt);vl(K,et)}return null}function ct(K,X,et,mt,Kt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(et)||null,A(X,K,""+mt,Kt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return K=K.get(mt.key===null?et:mt.key)||null,G(X,K,mt,Kt);case T:return K=K.get(mt.key===null?et:mt.key)||null,nt(X,K,mt,Kt);case b:return mt=ds(mt),ct(K,X,et,mt,Kt)}if(q(mt)||Y(mt))return K=K.get(et)||null,ht(X,K,mt,Kt,null);if(typeof mt.then=="function")return ct(K,X,et,_l(mt),Kt);if(mt.$$typeof===L)return ct(K,X,et,dl(X,mt),Kt);vl(X,mt)}return null}function Ht(K,X,et,mt){for(var Kt=null,Ce=null,qt=X,fe=X=0,xe=null;qt!==null&&fe<et.length;fe++){qt.index>fe?(xe=qt,qt=null):xe=qt.sibling;var we=st(K,qt,et[fe],mt);if(we===null){qt===null&&(qt=xe);break}t&&qt&&we.alternate===null&&n(K,qt),X=f(we,X,fe),Ce===null?Kt=we:Ce.sibling=we,Ce=we,qt=xe}if(fe===et.length)return a(K,qt),Se&&Zi(K,fe),Kt;if(qt===null){for(;fe<et.length;fe++)qt=gt(K,et[fe],mt),qt!==null&&(X=f(qt,X,fe),Ce===null?Kt=qt:Ce.sibling=qt,Ce=qt);return Se&&Zi(K,fe),Kt}for(qt=r(qt);fe<et.length;fe++)xe=ct(qt,K,fe,et[fe],mt),xe!==null&&(t&&xe.alternate!==null&&qt.delete(xe.key===null?fe:xe.key),X=f(xe,X,fe),Ce===null?Kt=xe:Ce.sibling=xe,Ce=xe);return t&&qt.forEach(function(Ya){return n(K,Ya)}),Se&&Zi(K,fe),Kt}function Qt(K,X,et,mt){if(et==null)throw Error(s(151));for(var Kt=null,Ce=null,qt=X,fe=X=0,xe=null,we=et.next();qt!==null&&!we.done;fe++,we=et.next()){qt.index>fe?(xe=qt,qt=null):xe=qt.sibling;var Ya=st(K,qt,we.value,mt);if(Ya===null){qt===null&&(qt=xe);break}t&&qt&&Ya.alternate===null&&n(K,qt),X=f(Ya,X,fe),Ce===null?Kt=Ya:Ce.sibling=Ya,Ce=Ya,qt=xe}if(we.done)return a(K,qt),Se&&Zi(K,fe),Kt;if(qt===null){for(;!we.done;fe++,we=et.next())we=gt(K,we.value,mt),we!==null&&(X=f(we,X,fe),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return Se&&Zi(K,fe),Kt}for(qt=r(qt);!we.done;fe++,we=et.next())we=ct(qt,K,fe,we.value,mt),we!==null&&(t&&we.alternate!==null&&qt.delete(we.key===null?fe:we.key),X=f(we,X,fe),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return t&&qt.forEach(function(xS){return n(K,xS)}),Se&&Zi(K,fe),Kt}function Ve(K,X,et,mt){if(typeof et=="object"&&et!==null&&et.type===w&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var Kt=et.key;X!==null;){if(X.key===Kt){if(Kt=et.type,Kt===w){if(X.tag===7){a(K,X.sibling),mt=c(X,et.props.children),mt.return=K,K=mt;break t}}else if(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&ds(Kt)===X.type){a(K,X.sibling),mt=c(X,et.props),eo(mt,et),mt.return=K,K=mt;break t}a(K,X);break}else n(K,X);X=X.sibling}et.type===w?(mt=ls(et.props.children,K.mode,mt,et.key),mt.return=K,K=mt):(mt=ul(et.type,et.key,et.props,null,K.mode,mt),eo(mt,et),mt.return=K,K=mt)}return _(K);case T:t:{for(Kt=et.key;X!==null;){if(X.key===Kt)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(K,X.sibling),mt=c(X,et.children||[]),mt.return=K,K=mt;break t}else{a(K,X);break}else n(K,X);X=X.sibling}mt=du(et,K.mode,mt),mt.return=K,K=mt}return _(K);case b:return et=ds(et),Ve(K,X,et,mt)}if(q(et))return Ht(K,X,et,mt);if(Y(et)){if(Kt=Y(et),typeof Kt!="function")throw Error(s(150));return et=Kt.call(et),Qt(K,X,et,mt)}if(typeof et.then=="function")return Ve(K,X,_l(et),mt);if(et.$$typeof===L)return Ve(K,X,dl(K,et),mt);vl(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(K,X.sibling),mt=c(X,et),mt.return=K,K=mt):(a(K,X),mt=hu(et,K.mode,mt),mt.return=K,K=mt),_(K)):a(K,X)}return function(K,X,et,mt){try{to=0;var Kt=Ve(K,X,et,mt);return Js=null,Kt}catch(qt){if(qt===Qs||qt===ml)throw qt;var Ce=Zn(29,qt,null,K.mode);return Ce.lanes=mt,Ce.return=K,Ce}}}var ms=Bp(!0),Hp=Bp(!1),Da=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=cl(t),Ep(t,null,a),n}return ll(t,r,n,a),cl(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ns(t,a)}}function Ru(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Cu=!1;function io(){if(Cu){var t=Ks;if(t!==null)throw t}}function ao(t,n,a,r){Cu=!1;var c=t.updateQueue;Da=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var G=A,nt=G.next;G.next=null,_===null?f=nt:_.next=nt,_=G;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==_&&(A===null?ht.firstBaseUpdate=nt:A.next=nt,ht.lastBaseUpdate=G))}if(f!==null){var gt=c.baseState;_=0,ht=nt=G=null,A=f;do{var st=A.lane&-536870913,ct=st!==A.lane;if(ct?(ve&st)===st:(r&st)===st){st!==0&&st===Zs&&(Cu=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ht=t,Qt=A;st=n;var Ve=a;switch(Qt.tag){case 1:if(Ht=Qt.payload,typeof Ht=="function"){gt=Ht.call(Ve,gt,st);break t}gt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Qt.payload,st=typeof Ht=="function"?Ht.call(Ve,gt,st):Ht,st==null)break t;gt=x({},gt,st);break t;case 2:Da=!0}}st=A.callback,st!==null&&(t.flags|=64,ct&&(t.flags|=8192),ct=c.callbacks,ct===null?c.callbacks=[st]:ct.push(st))}else ct={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(nt=ht=ct,G=gt):ht=ht.next=ct,_|=st;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,c.lastBaseUpdate=ct,c.shared.pending=null}}while(!0);ht===null&&(G=gt),c.baseState=G,c.firstBaseUpdate=nt,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),Fa|=_,t.lanes=_,t.memoizedState=gt}}function Gp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Vp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Gp(a[t],n)}var $s=P(null),xl=P(0);function Xp(t,n){t=ra,_t(xl,t),_t($s,n),ra=t|n.baseLanes}function wu(){_t(xl,ra),_t($s,$s.current)}function Du(){ra=xl.current,Z($s),Z(xl)}var Kn=P(null),fi=null;function Na(t){var n=t.alternate;_t(nn,nn.current&1),_t(Kn,t),fi===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(fi=t)}function Uu(t){_t(nn,nn.current),_t(Kn,t),fi===null&&(fi=t)}function kp(t){t.tag===22?(_t(nn,nn.current),_t(Kn,t),fi===null&&(fi=t)):Oa()}function Oa(){_t(nn,nn.current),_t(Kn,Kn.current)}function Qn(t){Z(Kn),fi===t&&(fi=null),Z(nn)}var nn=P(0);function Sl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||If(a)||Bf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=0,le=null,He=null,cn=null,Ml=!1,tr=!1,gs=!1,yl=0,so=0,er=null,cx=0;function $e(){throw Error(s(321))}function Lu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function Nu(t,n,a,r,c,f){return Ji=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?Rm:ju,gs=!1,f=a(r,c),gs=!1,tr&&(f=qp(n,a,r,c)),Wp(t),f}function Wp(t){N.H=lo;var n=He!==null&&He.next!==null;if(Ji=0,cn=He=le=null,Ml=!1,so=0,er=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&hl(t)&&(un=!0))}function qp(t,n,a,r){le=t;var c=0;do{if(tr&&(er=null),so=0,tr=!1,25<=c)throw Error(s(301));if(c+=1,cn=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Cm,f=n(a,r)}while(tr);return f}function ux(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(le.flags|=1024),n}function Ou(){var t=yl!==0;return yl=0,t}function Pu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zu(t){if(Ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ml=!1}Ji=0,cn=He=le=null,tr=!1,so=yl=0,er=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?le.memoizedState=cn=t:cn=cn.next=t,cn}function an(){if(He===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=cn===null?le.memoizedState:cn.next;if(n!==null)cn=n,He=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},cn===null?le.memoizedState=cn=t:cn=cn.next=t}return cn}function El(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=so;return so+=1,er===null&&(er=[]),t=zp(er,t,n),n=le,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Rm:ju),t}function Tl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===L)return Mn(t)}throw Error(s(438,String(t)))}function Fu(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=El(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Q;return n.index++,a}function $i(t,n){return typeof n=="function"?n(t):n}function bl(t){var n=an();return Iu(n,He,t)}function Iu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=_=null,G=null,nt=n,ht=!1;do{var gt=nt.lane&-536870913;if(gt!==nt.lane?(ve&gt)===gt:(Ji&gt)===gt){var st=nt.revertLane;if(st===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),gt===Zs&&(ht=!0);else if((Ji&st)===st){nt=nt.next,st===Zs&&(ht=!0);continue}else gt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(A=G=gt,_=f):G=G.next=gt,le.lanes|=st,Fa|=st;gt=nt.action,gs&&a(f,gt),f=nt.hasEagerState?nt.eagerState:a(f,gt)}else st={lane:gt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(A=G=st,_=f):G=G.next=st,le.lanes|=gt,Fa|=gt;nt=nt.next}while(nt!==null&&nt!==n);if(G===null?_=f:G.next=A,!jn(f,t.memoizedState)&&(un=!0,ht&&(a=Ks,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=G,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Bu(t){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);jn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Yp(t,n,a){var r=le,c=an(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!jn((He||c).memoizedState,a);if(_&&(c.memoizedState=a,un=!0),c=c.queue,Vu(Kp.bind(null,r,c,t),[t]),c.getSnapshot!==n||_||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,nr(9,{destroy:void 0},Zp.bind(null,r,c,a,n),null),Xe===null)throw Error(s(349));f||(Ji&127)!==0||jp(r,n,a)}return a}function jp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=El(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Zp(t,n,a,r){n.value=a,n.getSnapshot=r,Qp(n)&&Jp(t)}function Kp(t,n,a){return a(function(){Qp(n)&&Jp(t)})}function Qp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function Jp(t){var n=os(t,2);n!==null&&Xn(n,t,2)}function Hu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),gs){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},n}function $p(t,n,a,r){return t.baseState=a,Iu(t,He,typeof r=="function"?r:$i)}function fx(t,n,a,r,c){if(Cl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};N.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,tm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function tm(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=N.T,_={};N.T=_;try{var A=a(c,r),G=N.S;G!==null&&G(_,A),em(t,n,A)}catch(nt){Gu(t,n,nt)}finally{f!==null&&_.types!==null&&(f.types=_.types),N.T=f}}else try{f=a(c,r),em(t,n,f)}catch(nt){Gu(t,n,nt)}}function em(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){nm(t,n,r)},function(r){return Gu(t,n,r)}):nm(t,n,a)}function nm(t,n,a){n.status="fulfilled",n.value=a,im(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,tm(t,a)))}function Gu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,im(n),n=n.next;while(n!==r)}t.action=null}function im(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function am(t,n){return n}function sm(t,n){if(Se){var a=Xe.formState;if(a!==null){t:{var r=le;if(Se){if(ke){e:{for(var c=ke,f=ui;c.nodeType!==8;){if(!f){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ke=hi(c.nextSibling),r=c.data==="F!";break t}}Ca(r)}r=!1}r&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:n},a.queue=r,a=Tm.bind(null,le,r),r.dispatch=a,r=Hu(!1),f=Yu.bind(null,le,!1,r.queue),r=Nn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=fx.bind(null,le,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function rm(t){var n=an();return om(n,He,t)}function om(t,n,a){if(n=Iu(t,n,am)[0],t=bl($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ro(n)}catch(_){throw _===Qs?ml:_}else r=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,nr(9,{destroy:void 0},hx.bind(null,c,a),null)),[r,f,t]}function hx(t,n){t.action=n}function lm(t){var n=an(),a=He;if(a!==null)return om(n,a,t);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function nr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=El(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function cm(){return an().memoizedState}function Al(t,n,a,r){var c=Nn();le.flags|=t,c.memoizedState=nr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Rl(t,n,a,r){var c=an();r=r===void 0?null:r;var f=c.memoizedState.inst;He!==null&&r!==null&&Lu(r,He.memoizedState.deps)?c.memoizedState=nr(n,f,a,r):(le.flags|=t,c.memoizedState=nr(1|n,f,a,r))}function um(t,n){Al(8390656,8,t,n)}function Vu(t,n){Rl(2048,8,t,n)}function dx(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=El(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function fm(t){var n=an().memoizedState;return dx({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function hm(t,n){return Rl(4,2,t,n)}function dm(t,n){return Rl(4,4,t,n)}function pm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function mm(t,n,a){a=a!=null?a.concat([t]):null,Rl(4,4,pm.bind(null,n,t),a)}function Xu(){}function gm(t,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Lu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function _m(t,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Lu(n,r[1]))return r[0];if(r=t(),gs){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[r,n],r}function ku(t,n,a){return a===void 0||(Ji&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=v0(),le.lanes|=t,Fa|=t,a)}function vm(t,n,a,r){return jn(a,n)?a:$s.current!==null?(t=ku(t,a,r),jn(t,n)||(un=!0),t):(Ji&42)===0||(Ji&1073741824)!==0&&(ve&261930)===0?(un=!0,t.memoizedState=a):(t=v0(),le.lanes|=t,Fa|=t,n)}function xm(t,n,a,r,c){var f=z.p;z.p=f!==0&&8>f?f:8;var _=N.T,A={};N.T=A,Yu(t,!1,n,a);try{var G=c(),nt=N.S;if(nt!==null&&nt(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ht=lx(G,r);oo(t,n,ht,ti(t))}else oo(t,n,r,ti(t))}catch(gt){oo(t,n,{then:function(){},status:"rejected",reason:gt},ti())}finally{z.p=f,_!==null&&A.types!==null&&(_.types=A.types),N.T=_}}function px(){}function Wu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=Sm(t).queue;xm(t,c,n,ot,a===null?px:function(){return Mm(t),a(r)})}function Sm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Mm(t){var n=Sm(t);n.next===null&&(n=t.alternate.memoizedState),oo(t,n.next.queue,{},ti())}function qu(){return Mn(bo)}function ym(){return an().memoizedState}function Em(){return an().memoizedState}function mx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=Ua(a);var r=La(n,t,a);r!==null&&(Xn(r,n,a),no(r,n,a)),n={cache:Mu()},t.payload=n;return}n=n.return}}function gx(t,n,a){var r=ti();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(t)?bm(n,a):(a=uu(t,n,a,r),a!==null&&(Xn(a,t,r),Am(a,n,r)))}function Tm(t,n,a){var r=ti();oo(t,n,a,r)}function oo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(t))bm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(c.hasEagerState=!0,c.eagerState=A,jn(A,_))return ll(t,n,c,0),Xe===null&&ol(),!1}catch{}if(a=uu(t,n,c,r),a!==null)return Xn(a,t,r),Am(a,n,r),!0}return!1}function Yu(t,n,a,r){if(r={lane:2,revertLane:Af(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cl(t)){if(n)throw Error(s(479))}else n=uu(t,a,r,2),n!==null&&Xn(n,t,2)}function Cl(t){var n=t.alternate;return t===le||n!==null&&n===le}function bm(t,n){tr=Ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Am(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ns(t,a)}}var lo={readContext:Mn,use:Tl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};lo.useEffectEvent=$e;var Rm={readContext:Mn,use:Tl,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:um,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Al(4194308,4,pm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Al(4194308,4,t,n)},useInsertionEffect:function(t,n){Al(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var r=t();if(gs){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Nn();if(a!==void 0){var c=a(n);if(gs){Nt(!0);try{a(n)}finally{Nt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=gx.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Hu(t);var n=t.queue,a=Tm.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(t,n){var a=Nn();return ku(a,t,n)},useTransition:function(){var t=Hu(!1);return t=xm.bind(null,le,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=le,c=Nn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(ve&127)!==0||jp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,um(Kp.bind(null,r,f,t),[t]),r.flags|=2048,nr(9,{destroy:void 0},Zp.bind(null,r,f,a,n),null),a},useId:function(){var t=Nn(),n=Xe.identifierPrefix;if(Se){var a=Ni,r=Li;a=(r&~(1<<32-Lt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=cx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qu,useFormState:sm,useActionState:sm,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Fu,useCacheRefresh:function(){return Nn().memoizedState=mx.bind(null,le)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ju={readContext:Mn,use:Tl,useCallback:gm,useContext:Mn,useEffect:Vu,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:bl,useRef:cm,useState:function(){return bl($i)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=an();return vm(a,He.memoizedState,t,n)},useTransition:function(){var t=bl($i)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Yp,useId:ym,useHostTransitionStatus:qu,useFormState:rm,useActionState:rm,useOptimistic:function(t,n){var a=an();return $p(a,He,t,n)},useMemoCache:Fu,useCacheRefresh:Em};ju.useEffectEvent=fm;var Cm={readContext:Mn,use:Tl,useCallback:gm,useContext:Mn,useEffect:Vu,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:Bu,useRef:cm,useState:function(){return Bu($i)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=an();return He===null?ku(a,t,n):vm(a,He.memoizedState,t,n)},useTransition:function(){var t=Bu($i)[0],n=an().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Yp,useId:ym,useHostTransitionStatus:qu,useFormState:lm,useActionState:lm,useOptimistic:function(t,n){var a=an();return He!==null?$p(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:Em};Cm.useEffectEvent=fm;function Zu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ti(),c=Ua(r);c.payload=n,a!=null&&(c.callback=a),n=La(t,c,r),n!==null&&(Xn(n,t,r),no(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ti(),c=Ua(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=La(t,c,r),n!==null&&(Xn(n,t,r),no(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),r=Ua(a);r.tag=2,n!=null&&(r.callback=n),n=La(t,r,a),n!==null&&(Xn(n,t,a),no(n,t,a))}};function wm(t,n,a,r,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!jr(a,r)||!jr(c,f):!0}function Dm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Ku.enqueueReplaceState(n,n.state,null)}function _s(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Um(t){rl(t)}function Lm(t){console.error(t)}function Nm(t){rl(t)}function wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Om(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Qu(t,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(t,n)},a}function Pm(t){return t=Ua(t),t.tag=3,t}function zm(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Om(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Om(n,a,r),typeof c!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function _x(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&js(n,a,c,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?Gl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ef(t,r,c)),!1;case 22:return a.flags|=65536,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ef(t,r,c)),!1}throw Error(s(435,a.tag))}return Ef(t,r,c),Gl(),!1}if(Se)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==gu&&(t=Error(s(422),{cause:r}),Qr(oi(t,a)))):(r!==gu&&(n=Error(s(423),{cause:r}),Qr(oi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=oi(r,a),c=Qu(t.stateNode,r,c),Ru(t,c),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:r});if(f=oi(f,a),_o===null?_o=[f]:_o.push(f),tn!==4&&(tn=2),n===null)return!0;r=oi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Qu(a.stateNode,r,t),Ru(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Pm(c),zm(c,t,a,r),Ru(a,c),!1}a=a.return}while(a!==null);return!1}var Ju=Error(s(461)),un=!1;function yn(t,n,a,r){n.child=t===null?Hp(n,null,a,r):ms(n,t.child,a,r)}function Fm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var A in r)A!=="ref"&&(_[A]=r[A])}else _=r;return fs(n),r=Nu(t,n,a,_,f,c),A=Ou(),t!==null&&!un?(Pu(t,n,c),ta(t,n,c)):(Se&&A&&pu(n),n.flags|=1,yn(t,n,r,c),n.child)}function Im(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bm(t,n,f,r,c)):(t=ul(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!of(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:jr,a(_,r)&&t.ref===n.ref)return ta(t,n,c)}return n.flags|=1,t=ji(f,r),t.ref=n.ref,t.return=n,n.child=t}function Bm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(jr(f,r)&&t.ref===n.ref)if(un=!1,n.pendingProps=r=f,of(t,c))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ta(t,n,c)}return $u(t,n,a,r,c)}function Hm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Gm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&pl(n,f!==null?f.cachePool:null),f!==null?Xp(n,f):wu(),kp(n);else return r=n.lanes=536870912,Gm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(pl(n,f.cachePool),Xp(n,f),Oa(),n.memoizedState=null):(t!==null&&pl(n,null),wu(),Oa());return yn(t,n,c,a),n.child}function co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gm(t,n,a,r,c){var f=Eu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&pl(n,null),wu(),kp(n),t!==null&&js(t,n,r,!0),n.childLanes=c,null}function Dl(t,n){return n=Ll({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vm(t,n,a){return ms(n,t.child,null,a),t=Dl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function vx(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=Dl(n,r),n.lanes=536870912,co(null,t);if(Uu(n),(t=ke)?(t=tg(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=bp(t),a.return=n,n.child=a,Sn=n,ke=null)):t=null,t===null)throw Ca(n);return n.lanes=536870912,null}return Dl(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Uu(n),c)if(n.flags&256)n.flags&=-257,n=Vm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||js(t,n,a,!1),c=(a&t.childLanes)!==0,un||c){if(r=Xe,r!==null&&(_=Zo(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,os(t,_),Xn(r,t,_),Ju;Gl(),n=Vm(t,n,a)}else t=f.treeContext,ke=hi(_.nextSibling),Sn=n,Se=!0,Ra=null,ui=!1,t!==null&&Cp(n,t),n=Dl(n,r),n.flags|=4096;return n}return t=ji(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ul(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function $u(t,n,a,r,c){return fs(n),a=Nu(t,n,a,r,void 0,c),r=Ou(),t!==null&&!un?(Pu(t,n,c),ta(t,n,c)):(Se&&r&&pu(n),n.flags|=1,yn(t,n,a,c),n.child)}function Xm(t,n,a,r,c,f){return fs(n),n.updateQueue=null,a=qp(n,r,a,c),Wp(t),r=Ou(),t!==null&&!un?(Pu(t,n,f),ta(t,n,f)):(Se&&r&&pu(n),n.flags|=1,yn(t,n,a,f),n.child)}function km(t,n,a,r,c){if(fs(n),n.stateNode===null){var f=ks,_=a.contextType;typeof _=="object"&&_!==null&&(f=Mn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},bu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Mn(_):ks,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Zu(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Ku.enqueueReplaceState(f,f.state,null),ao(n,r,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,G=_s(a,A);f.props=G;var nt=f.context,ht=a.contextType;_=ks,typeof ht=="object"&&ht!==null&&(_=Mn(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||nt!==_)&&Dm(n,f,r,_),Da=!1;var st=n.memoizedState;f.state=st,ao(n,r,f,c),io(),nt=n.memoizedState,A||st!==nt||Da?(typeof gt=="function"&&(Zu(n,a,gt,r),nt=n.memoizedState),(G=Da||wm(n,a,G,r,st,nt,_))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=_,r=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Au(t,n),_=n.memoizedProps,ht=_s(a,_),f.props=ht,gt=n.pendingProps,st=f.context,nt=a.contextType,G=ks,typeof nt=="object"&&nt!==null&&(G=Mn(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==gt||st!==G)&&Dm(n,f,r,G),Da=!1,st=n.memoizedState,f.state=st,ao(n,r,f,c),io();var ct=n.memoizedState;_!==gt||st!==ct||Da||t!==null&&t.dependencies!==null&&hl(t.dependencies)?(typeof A=="function"&&(Zu(n,a,A,r),ct=n.memoizedState),(ht=Da||wm(n,a,ht,r,st,ct,G)||t!==null&&t.dependencies!==null&&hl(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ct,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ct,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ct),f.props=r,f.state=ct,f.context=G,r=ht):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ul(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ms(n,t.child,null,c),n.child=ms(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ta(t,n,c),t}function Wm(t,n,a,r){return cs(),n.flags|=256,yn(t,n,a,r),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(t){return{baseLanes:t,cachePool:Op()}}function nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function qm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?Na(n):Oa(),(t=ke)?(t=tg(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=bp(t),a.return=n,n.child=a,Sn=n,ke=null)):t=null,t===null)throw Ca(n);return Bf(t)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,c?(Oa(),c=n.mode,A=Ll({mode:"hidden",children:A},c),r=ls(r,c,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=ef(a),r.childLanes=nf(t,_,a),n.memoizedState=tf,co(null,r)):(Na(n),af(n,A))}var G=t.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=sf(t,n,a)):n.memoizedState!==null?(Oa(),n.child=t.child,n.flags|=128,n=null):(Oa(),A=r.fallback,c=n.mode,r=Ll({mode:"visible",children:r.children},c),A=ls(A,c,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,ms(n,t.child,null,a),r=n.child,r.memoizedState=ef(a),r.childLanes=nf(t,_,a),n.memoizedState=tf,n=co(null,r));else if(Na(n),Bf(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var nt=_.dgst;_=nt,r=Error(s(419)),r.stack="",r.digest=_,Qr({value:r,source:null,stack:null}),n=sf(t,n,a)}else if(un||js(t,n,a,!1),_=(a&t.childLanes)!==0,un||_){if(_=Xe,_!==null&&(r=Zo(_,a),r!==0&&r!==G.retryLane))throw G.retryLane=r,os(t,r),Xn(_,t,r),Ju;If(A)||Gl(),n=sf(t,n,a)}else If(A)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,ke=hi(A.nextSibling),Sn=n,Se=!0,Ra=null,ui=!1,t!==null&&Cp(n,t),n=af(n,r.children),n.flags|=4096);return n}return c?(Oa(),A=r.fallback,c=n.mode,G=t.child,nt=G.sibling,r=ji(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,nt!==null?A=ji(nt,A):(A=ls(A,c,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,co(null,r),r=n.child,A=t.child.memoizedState,A===null?A=ef(a):(c=A.cachePool,c!==null?(G=ln._currentValue,c=c.parent!==G?{parent:G,pool:G}:c):c=Op(),A={baseLanes:A.baseLanes|a,cachePool:c}),r.memoizedState=A,r.childLanes=nf(t,_,a),n.memoizedState=tf,co(t.child,r)):(Na(n),a=t.child,t=a.sibling,a=ji(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function af(t,n){return n=Ll({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ll(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function sf(t,n,a){return ms(n,t.child,null,a),t=af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ym(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),xu(t.return,n,a)}function rf(t,n,a,r,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function jm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=nn.current,A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,_t(nn,_),yn(t,n,r,a),r=Se?Kr:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ym(t,a,n);else if(t.tag===19)Ym(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Sl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),rf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Sl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}rf(n,!0,a,null,f,r);break;case"together":rf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(js(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&hl(t)))}function xx(t,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),wa(n,ln,t.memoizedState.cache),cs();break;case 27:case 5:Zt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qm(t,n,a):(Na(n),t=ta(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(js(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return jm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_t(nn,nn.current),r)break;return null;case 22:return n.lanes=0,Hm(t,n,a,n.pendingProps);case 24:wa(n,ln,t.memoizedState.cache)}return ta(t,n,a)}function Zm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!of(t,a)&&(n.flags&128)===0)return un=!1,xx(t,n,a);un=(t.flags&131072)!==0}else un=!1,Se&&(n.flags&1048576)!==0&&Rp(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ds(n.elementType),n.type=t,typeof t=="function")fu(t)?(r=_s(t,r),n.tag=1,n=km(null,n,t,r,a)):(n.tag=0,n=$u(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=Fm(null,n,t,r,a);break t}else if(c===F){n.tag=14,n=Im(null,n,t,r,a);break t}}throw n=rt(t)||t,Error(s(306,n,""))}}return n;case 0:return $u(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=_s(r,n.pendingProps),km(t,n,r,c,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Au(t,n),ao(n,r,null,a);var _=n.memoizedState;if(r=_.cache,wa(n,ln,r),r!==f.cache&&Su(n,[ln],a,!0),io(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Wm(t,n,r,a);break t}else if(r!==c){c=oi(Error(s(424)),n),Qr(c),n=Wm(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ke=hi(t.firstChild),Sn=n,Se=!0,Ra=null,ui=!0,a=Hp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(cs(),r===c){n=ta(t,n,a);break t}yn(t,n,r,a)}n=n.child}return n;case 26:return Ul(t,n),t===null?(a=rg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,r=jl(at.current).createElement(a),r[sn]=n,r[dn]=t,En(r,a,t),k(r),n.stateNode=r):n.memoizedState=rg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zt(n),t===null&&Se&&(r=n.stateNode=ig(n.type,n.pendingProps,at.current),Sn=n,ui=!0,c=ke,Va(n.type)?(Hf=c,ke=hi(r.firstChild)):ke=c),yn(t,n,n.pendingProps.children,a),Ul(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=r=ke)&&(r=Zx(r,n.type,n.pendingProps,ui),r!==null?(n.stateNode=r,Sn=n,ke=hi(r.firstChild),ui=!1,c=!0):c=!1),c||Ca(n)),Zt(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,Pf(c,f)?r=null:_!==null&&Pf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Nu(t,n,ux,null,null,a),bo._currentValue=c),Ul(t,n),yn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=ke)&&(a=Kx(a,n.pendingProps,ui),a!==null?(n.stateNode=a,Sn=n,ke=null,t=!0):t=!1),t||Ca(n)),null;case 13:return qm(t,n,a);case 4:return Tt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ms(n,null,r,a):yn(t,n,r,a),n.child;case 11:return Fm(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,wa(n,n.type,r.value),yn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,fs(n),c=Mn(c),r=r(c),n.flags|=1,yn(t,n,r,a),n.child;case 14:return Im(t,n,n.type,n.pendingProps,a);case 15:return Bm(t,n,n.type,n.pendingProps,a);case 19:return jm(t,n,a);case 31:return vx(t,n,a);case 22:return Hm(t,n,a,n.pendingProps);case 24:return fs(n),r=Mn(ln),t===null?(c=Eu(),c===null&&(c=Xe,f=Mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},bu(n),wa(n,ln,c)):((t.lanes&a)!==0&&(Au(t,n),ao(n,null,null,a),io()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),wa(n,ln,r)):(r=f.cache,wa(n,ln,r),r!==c.cache&&Su(n,[ln],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ea(t){t.flags|=4}function lf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(y0())t.flags|=8192;else throw ps=gl,Tu}else t.flags&=-16777217}function Km(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!fg(n))if(y0())t.flags|=8192;else throw ps=gl,Tu}function Nl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ze():536870912,t.lanes|=n,rr|=n)}function uo(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Sx(t,n,a){var r=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Qi(ln),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ys(n)?ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_u())),We(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ea(n),f!==null?(We(n),Km(n,f)):(We(n),lf(n,c,null,r,a))):f?f!==t.memoizedState?(ea(n),We(n),Km(n,f)):(We(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ea(n),We(n),lf(n,c,t,r,a)),null;case 27:if(Jt(n),a=at.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}t=At.current,Ys(n)?wp(n):(t=ig(c,r,a),n.stateNode=t,ea(n))}return We(n),null;case 5:if(Jt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(f=At.current,Ys(n))wp(n);else{var _=jl(at.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[sn]=n,f[dn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(En(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ea(n)}}return We(n),lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ea(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=at.current,Ys(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||q0(t.nodeValue,a)),t||Ca(n,!0)}else t=jl(t).createTextNode(r),t[sn]=n,n.stateNode=t}return We(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ys(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[sn]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),t=!1}else a=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return We(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ys(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[sn]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Nl(n,n.updateQueue),We(n),null);case 4:return Vt(),t===null&&Df(n.stateNode.containerInfo),We(n),null;case 10:return Qi(n.type),We(n),null;case 19:if(Z(nn),r=n.memoizedState,r===null)return We(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)uo(r,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Sl(t),f!==null){for(n.flags|=128,uo(r,!1),t=f.updateQueue,n.updateQueue=t,Nl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Tp(a,t),a=a.sibling;return _t(nn,nn.current&1|2),Se&&Zi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&E()>Il&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304)}else{if(!c)if(t=Sl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Nl(n,t),uo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return We(n),null}else 2*E()-r.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=E(),t.sibling=null,a=nn.current,_t(nn,c?a&1|2:a&1),Se&&Zi(n,r.treeForkCount),t):(We(n),null);case 22:case 23:return Qn(n),Du(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Nl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Z(hs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(ln),We(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Mx(t,n){switch(mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Qi(ln),Vt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Jt(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(nn),null;case 4:return Vt(),null;case 10:return Qi(n.type),null;case 22:case 23:return Qn(n),Du(),t!==null&&Z(hs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Qi(ln),null;case 25:return null;default:return null}}function Qm(t,n){switch(mu(n),n.tag){case 3:Qi(ln),Vt();break;case 26:case 27:case 5:Jt(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:Z(nn);break;case 10:Qi(n.type);break;case 22:case 23:Qn(n),Du(),t!==null&&Z(hs);break;case 24:Qi(ln)}}function fo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(A){Ie(n,n.return,A)}}function Pa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var _=r.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,c=n;var G=a,nt=A;try{nt()}catch(ht){Ie(c,G,ht)}}}r=r.next}while(r!==f)}}catch(ht){Ie(n,n.return,ht)}}function Jm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Vp(n,a)}catch(r){Ie(t,t.return,r)}}}function $m(t,n,a){a.props=_s(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ie(t,n,r)}}function ho(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Ie(t,n,c)}}function Oi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ie(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(t,n,c)}else a.current=null}function t0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ie(t,t.return,c)}}function cf(t,n,a){try{var r=t.stateNode;Xx(r,t.type,a,n),r[dn]=n}catch(c){Ie(t,t.return,c)}}function e0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function uf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||e0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(r!==4&&(r===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,a),t=t.sibling;t!==null;)ff(t,n,a),t=t.sibling}function Ol(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ol(t,n,a),t=t.sibling;t!==null;)Ol(t,n,a),t=t.sibling}function n0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,r,a),n[sn]=t,n[dn]=a}catch(f){Ie(t,t.return,f)}}var na=!1,fn=!1,hf=!1,i0=typeof WeakSet=="function"?WeakSet:Set,vn=null;function yx(t,n){if(t=t.containerInfo,Nf=ec,t=mp(t),au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,A=-1,G=-1,nt=0,ht=0,gt=t,st=null;e:for(;;){for(var ct;gt!==a||c!==0&&gt.nodeType!==3||(A=_+c),gt!==f||r!==0&&gt.nodeType!==3||(G=_+r),gt.nodeType===3&&(_+=gt.nodeValue.length),(ct=gt.firstChild)!==null;)st=gt,gt=ct;for(;;){if(gt===t)break e;if(st===a&&++nt===c&&(A=_),st===f&&++ht===r&&(G=_),(ct=gt.nextSibling)!==null)break;gt=st,st=gt.parentNode}gt=ct}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:t,selectionRange:a},ec=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ht=_s(a.type,c);t=r.getSnapshotBeforeUpdate(Ht,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Qt){Ie(a,a.return,Qt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Ff(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ff(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function a0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:aa(t,a),r&4&&fo(5,a);break;case 1:if(aa(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ie(a,a.return,_)}else{var c=_s(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ie(a,a.return,_)}}r&64&&Jm(a),r&512&&ho(a,a.return);break;case 3:if(aa(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vp(t,n)}catch(_){Ie(a,a.return,_)}}break;case 27:n===null&&r&4&&n0(a);case 26:case 5:aa(t,a),n===null&&r&4&&t0(a),r&512&&ho(a,a.return);break;case 12:aa(t,a);break;case 31:aa(t,a),r&4&&o0(t,a);break;case 13:aa(t,a),r&4&&l0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ux.bind(null,a),Qx(t,a))));break;case 22:if(r=a.memoizedState!==null||na,!r){n=n!==null&&n.memoizedState!==null||fn,c=na;var f=fn;na=r,(fn=n)&&!f?sa(t,a,(a.subtreeFlags&8772)!==0):aa(t,a),na=c,fn=f}break;case 30:break;default:aa(t,a)}}function s0(t){var n=t.alternate;n!==null&&(t.alternate=null,s0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Hr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,Bn=!1;function ia(t,n,a){for(a=a.child;a!==null;)r0(t,n,a),a=a.sibling}function r0(t,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:fn||Oi(a,n),ia(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Oi(a,n);var r=Ze,c=Bn;Va(a.type)&&(Ze=a.stateNode,Bn=!1),ia(t,n,a),yo(a.stateNode),Ze=r,Bn=c;break;case 5:fn||Oi(a,n);case 6:if(r=Ze,c=Bn,Ze=null,ia(t,n,a),Ze=r,Bn=c,Ze!==null)if(Bn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:Ze!==null&&(Bn?(t=Ze,J0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),pr(t)):J0(Ze,a.stateNode));break;case 4:r=Ze,c=Bn,Ze=a.stateNode.containerInfo,Bn=!0,ia(t,n,a),Ze=r,Bn=c;break;case 0:case 11:case 14:case 15:Pa(2,a,n),fn||Pa(4,a,n),ia(t,n,a);break;case 1:fn||(Oi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&$m(a,n,r)),ia(t,n,a);break;case 21:ia(t,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,ia(t,n,a),fn=r;break;default:ia(t,n,a)}}function o0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{pr(t)}catch(a){Ie(n,n.return,a)}}}function l0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{pr(t)}catch(a){Ie(n,n.return,a)}}function Ex(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new i0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new i0),n;default:throw Error(s(435,t.tag))}}function Pl(t,n){var a=Ex(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Lx.bind(null,t,r);r.then(c,c)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,_=n,A=_;t:for(;A!==null;){switch(A.tag){case 27:if(Va(A.type)){Ze=A.stateNode,Bn=!1;break t}break;case 5:Ze=A.stateNode,Bn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Bn=!0;break t}A=A.return}if(Ze===null)throw Error(s(160));r0(f,_,c),Ze=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)c0(n,t),n=n.sibling}var Ei=null;function c0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),r&4&&(Pa(3,t,t.return),fo(3,t),Pa(5,t,t.return));break;case 1:Hn(n,t),Gn(t),r&512&&(fn||a===null||Oi(a,a.return)),r&64&&na&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=Ei;if(Hn(n,t),Gn(t),r&512&&(fn||a===null||Oi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ns]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,r,a),f[sn]=t,k(f),r=f;break t;case"link":var _=cg("link","href",c).get(r+(a.href||""));if(_){for(var A=0;A<_.length;A++)if(f=_[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(A,1);break e}}f=c.createElement(r),En(f,r,a),c.head.appendChild(f);break;case"meta":if(_=cg("meta","content",c).get(r+(a.content||""))){for(A=0;A<_.length;A++)if(f=_[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(A,1);break e}}f=c.createElement(r),En(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=t,k(f),r=f}t.stateNode=r}else ug(c,t.type,t.stateNode);else t.stateNode=lg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ug(c,t.type,t.stateNode):lg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&cf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),r&512&&(fn||a===null||Oi(a,a.return)),a!==null&&r&4&&cf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),r&512&&(fn||a===null||Oi(a,a.return)),t.flags&32){c=t.stateNode;try{Ln(c,"")}catch(Ht){Ie(t,t.return,Ht)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,cf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(hf=!0);break;case 6:if(Hn(n,t),Gn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ht){Ie(t,t.return,Ht)}}break;case 3:if(Ql=null,c=Ei,Ei=Zl(n.containerInfo),Hn(n,t),Ei=c,Gn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(Ht){Ie(t,t.return,Ht)}hf&&(hf=!1,u0(t));break;case 4:r=Ei,Ei=Zl(t.stateNode.containerInfo),Hn(n,t),Gn(t),Ei=r;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Pl(t,r)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=E()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Pl(t,r)));break;case 22:c=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,nt=na,ht=fn;if(na=nt||c,fn=ht||G,Hn(n,t),fn=ht,na=nt,Gn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||G||na||fn||vs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=G.stateNode;var gt=G.memoizedProps.style,st=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Ht){Ie(G,G.return,Ht)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=c?"":G.memoizedProps}catch(Ht){Ie(G,G.return,Ht)}}}else if(n.tag===18){if(a===null){G=n;try{var ct=G.stateNode;c?$0(ct,!0):$0(G.stateNode,!1)}catch(Ht){Ie(G,G.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Pl(t,a))));break;case 19:Hn(n,t),Gn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Pl(t,r)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(e0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(t);Ol(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Ln(_,""),a.flags&=-33);var A=uf(t);Ol(t,A,_);break;case 3:case 4:var G=a.stateNode.containerInfo,nt=uf(t);ff(t,nt,G);break;default:throw Error(s(161))}}catch(ht){Ie(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function u0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;u0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function aa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)a0(t,n.alternate,n),n=n.sibling}function vs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),vs(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$m(n,n.return,a),vs(n);break;case 27:yo(n.stateNode);case 26:case 5:Oi(n,n.return),vs(n);break;case 22:n.memoizedState===null&&vs(n);break;case 30:vs(n);break;default:vs(n)}t=t.sibling}}function sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:sa(c,f,a),fo(4,f);break;case 1:if(sa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){Ie(r,r.return,nt)}if(r=f,c=r.updateQueue,c!==null){var A=r.stateNode;try{var G=c.shared.hiddenCallbacks;if(G!==null)for(c.shared.hiddenCallbacks=null,c=0;c<G.length;c++)Gp(G[c],A)}catch(nt){Ie(r,r.return,nt)}}a&&_&64&&Jm(f),ho(f,f.return);break;case 27:n0(f);case 26:case 5:sa(c,f,a),a&&r===null&&_&4&&t0(f),ho(f,f.return);break;case 12:sa(c,f,a);break;case 31:sa(c,f,a),a&&_&4&&o0(c,f);break;case 13:sa(c,f,a),a&&_&4&&l0(c,f);break;case 22:f.memoizedState===null&&sa(c,f,a),ho(f,f.return);break;case 30:break;default:sa(c,f,a)}n=n.sibling}}function df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Jr(a))}function pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t))}function Ti(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)f0(t,n,a,r),n=n.sibling}function f0(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,r),c&2048&&fo(9,n);break;case 1:Ti(t,n,a,r);break;case 3:Ti(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t)));break;case 12:if(c&2048){Ti(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,A=f.onPostCommit;typeof A=="function"&&A(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Ie(n,n.return,G)}}else Ti(t,n,a,r);break;case 31:Ti(t,n,a,r);break;case 13:Ti(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(t,n,a,r):po(t,n):f._visibility&2?Ti(t,n,a,r):(f._visibility|=2,ir(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&df(_,n);break;case 24:Ti(t,n,a,r),c&2048&&pf(n.alternate,n);break;default:Ti(t,n,a,r)}}function ir(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,A=a,G=r,nt=_.flags;switch(_.tag){case 0:case 11:case 15:ir(f,_,A,G,c),fo(8,_);break;case 23:break;case 22:var ht=_.stateNode;_.memoizedState!==null?ht._visibility&2?ir(f,_,A,G,c):po(f,_):(ht._visibility|=2,ir(f,_,A,G,c)),c&&nt&2048&&df(_.alternate,_);break;case 24:ir(f,_,A,G,c),c&&nt&2048&&pf(_.alternate,_);break;default:ir(f,_,A,G,c)}n=n.sibling}}function po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:po(a,r),c&2048&&df(r.alternate,r);break;case 24:po(a,r),c&2048&&pf(r.alternate,r);break;default:po(a,r)}n=n.sibling}}var mo=8192;function ar(t,n,a){if(t.subtreeFlags&mo)for(t=t.child;t!==null;)h0(t,n,a),t=t.sibling}function h0(t,n,a){switch(t.tag){case 26:ar(t,n,a),t.flags&mo&&t.memoizedState!==null&&cS(a,Ei,t.memoizedState,t.memoizedProps);break;case 5:ar(t,n,a);break;case 3:case 4:var r=Ei;Ei=Zl(t.stateNode.containerInfo),ar(t,n,a),Ei=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=mo,mo=16777216,ar(t,n,a),mo=r):ar(t,n,a));break;default:ar(t,n,a)}}function d0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,m0(r,t)}d0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)p0(t),t=t.sibling}function p0(t){switch(t.tag){case 0:case 11:case 15:go(t),t.flags&2048&&Pa(9,t,t.return);break;case 3:go(t);break;case 12:go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zl(t)):go(t);break;default:go(t)}}function zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,m0(r,t)}d0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}t=t.sibling}}function m0(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=t;vn!==null;){r=vn;var c=r.sibling,f=r.return;if(s0(r),r===a){vn=null;break t}if(c!==null){c.return=f,vn=c;break t}vn=f}}}var Tx={getCacheForType:function(t){var n=Mn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(ln).controller.signal}},bx=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,me=null,ve=0,Fe=0,Jn=null,za=!1,sr=!1,mf=!1,ra=0,tn=0,Fa=0,xs=0,gf=0,$n=0,rr=0,_o=null,Vn=null,_f=!1,Fl=0,g0=0,Il=1/0,Bl=null,Ia=null,mn=0,Ba=null,or=null,oa=0,vf=0,xf=null,_0=null,vo=0,Sf=null;function ti(){return(Le&2)!==0&&ve!==0?ve&-ve:N.T!==null?Af():Ui()}function v0(){if($n===0)if((ve&536870912)===0||Se){var t=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Xn(t,n,a){(t===Xe&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(lr(t,0),Ha(t,ve,$n,!1)),wn(t,a),((Le&2)===0||t!==Xe)&&(t===Xe&&((Le&2)===0&&(xs|=a),tn===4&&Ha(t,ve,$n,!1)),Pi(t))}function x0(t,n,a){if((Le&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||It(t,n),c=r?Cx(t,n):yf(t,n,!0),f=r;do{if(c===0){sr&&!r&&Ha(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ax(a)){c=yf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=t;c=_o;var G=A.current.memoizedState.isDehydrated;if(G&&(lr(A,_).flags|=256),_=yf(A,_,!1),_!==2){if(mf&&!G){A.errorRecoveryDisabledLanes|=f,xs|=f,c=4;break t}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){lr(t,0),Ha(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ha(r,n,$n,!za);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Fl+300-E(),10<c)){if(Ha(r,n,$n,!za),ut(r,0,!0)!==0)break t;oa=n,r.timeoutHandle=K0(S0.bind(null,r,a,Vn,Bl,_f,n,$n,xs,rr,za,f,"Throttled",-0,0),c);break t}S0(r,a,Vn,Bl,_f,n,$n,xs,rr,za,f,null,-0,0)}}break}while(!0);Pi(t)}function S0(t,n,a,r,c,f,_,A,G,nt,ht,gt,st,ct){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},h0(n,f,gt);var Ht=(f&62914560)===f?Fl-E():(f&4194048)===f?g0-E():0;if(Ht=uS(gt,Ht),Ht!==null){oa=f,t.cancelPendingCommit=Ht(C0.bind(null,t,n,f,a,r,c,_,A,G,ht,gt,null,st,ct)),Ha(t,f,_,!nt);return}}C0(t,n,f,a,r,c,_,A,G)}function Ax(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!jn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(t,n,a,r){n&=~gf,n&=~xs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Lt(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Br(t,a,n)}function Hl(){return(Le&6)===0?(xo(0),!1):!0}function Mf(){if(me!==null){if(Fe===0)var t=me.return;else t=me,Ki=us=null,zu(t),Js=null,to=0,t=me;for(;t!==null;)Qm(t.alternate,t),t=t.return;me=null}}function lr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,qx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),oa=0,Mf(),Xe=t,me=a=ji(t.current,null),ve=n,Fe=0,Jn=null,za=!1,sr=It(t,n),mf=!1,rr=$n=gf=xs=Fa=tn=0,Vn=_o=null,_f=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Lt(r),f=1<<c;n|=t[c],r&=~f}return ra=n,ol(),a}function M0(t,n){le=null,N.H=lo,n===Qs||n===ml?(n=Fp(),Fe=3):n===Tu?(n=Fp(),Fe=4):Fe=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,me===null&&(tn=1,wl(t,oi(n,t.current)))}function y0(){var t=Kn.current;return t===null?!0:(ve&4194048)===ve?fi===null:(ve&62914560)===ve||(ve&536870912)!==0?t===fi:!1}function E0(){var t=N.H;return N.H=lo,t===null?lo:t}function T0(){var t=N.A;return N.A=Tx,t}function Gl(){tn=4,za||(ve&4194048)!==ve&&Kn.current!==null||(sr=!0),(Fa&134217727)===0&&(xs&134217727)===0||Xe===null||Ha(Xe,ve,$n,!1)}function yf(t,n,a){var r=Le;Le|=2;var c=E0(),f=T0();(Xe!==t||ve!==n)&&(Bl=null,lr(t,n)),n=!1;var _=tn;t:do try{if(Fe!==0&&me!==null){var A=me,G=Jn;switch(Fe){case 8:Mf(),_=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var nt=Fe;if(Fe=0,Jn=null,cr(t,A,G,nt),a&&sr){_=0;break t}break;default:nt=Fe,Fe=0,Jn=null,cr(t,A,G,nt)}}Rx(),_=tn;break}catch(ht){M0(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Ki=us=null,Le=r,N.H=c,N.A=f,me===null&&(Xe=null,ve=0,ol()),_}function Rx(){for(;me!==null;)b0(me)}function Cx(t,n){var a=Le;Le|=2;var r=E0(),c=T0();Xe!==t||ve!==n?(Bl=null,Il=E()+500,lr(t,n)):sr=It(t,n);t:do try{if(Fe!==0&&me!==null){n=me;var f=Jn;e:switch(Fe){case 1:Fe=0,Jn=null,cr(t,n,f,1);break;case 2:case 9:if(Pp(f)){Fe=0,Jn=null,A0(n);break}n=function(){Fe!==2&&Fe!==9||Xe!==t||(Fe=7),Pi(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Pp(f)?(Fe=0,Jn=null,A0(n)):(Fe=0,Jn=null,cr(t,n,f,7));break;case 5:var _=null;switch(me.tag){case 26:_=me.memoizedState;case 5:case 27:var A=me;if(_?fg(_):A.stateNode.complete){Fe=0,Jn=null;var G=A.sibling;if(G!==null)me=G;else{var nt=A.return;nt!==null?(me=nt,Vl(nt)):me=null}break e}}Fe=0,Jn=null,cr(t,n,f,5);break;case 6:Fe=0,Jn=null,cr(t,n,f,6);break;case 8:Mf(),tn=6;break t;default:throw Error(s(462))}}wx();break}catch(ht){M0(t,ht)}while(!0);return Ki=us=null,N.H=r,N.A=c,Le=a,me!==null?0:(Xe=null,ve=0,ol(),tn)}function wx(){for(;me!==null&&!Wt();)b0(me)}function b0(t){var n=Zm(t.alternate,t,ra);t.memoizedProps=t.pendingProps,n===null?Vl(t):me=n}function A0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Xm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Xm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:zu(n);default:Qm(a,n),n=me=Tp(n,ra),n=Zm(a,n,ra)}t.memoizedProps=t.pendingProps,n===null?Vl(t):me=n}function cr(t,n,a,r){Ki=us=null,zu(n),Js=null,to=0;var c=n.return;try{if(_x(t,c,n,a,ve)){tn=1,wl(t,oi(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;tn=1,wl(t,oi(a,t.current)),me=null;return}n.flags&32768?(Se||r===1?t=!0:sr||(ve&536870912)!==0?t=!1:(za=t=!0,(r===2||r===9||r===3||r===6)&&(r=Kn.current,r!==null&&r.tag===13&&(r.flags|=16384))),R0(n,t)):Vl(n)}function Vl(t){var n=t;do{if((n.flags&32768)!==0){R0(n,za);return}t=n.return;var a=Sx(n.alternate,n,ra);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);tn===0&&(tn=5)}function R0(t,n){do{var a=Mx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);tn=6,me=null}function C0(t,n,a,r,c,f,_,A,G){t.cancelPendingCommit=null;do Xl();while(mn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=cu,vi(t,a,f,_,A,G),t===Xe&&(me=Xe=null,ve=0),or=n,Ba=t,oa=a,vf=f,xf=c,_0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Nx(ft,function(){return N0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,c=z.p,z.p=2,_=Le,Le|=4;try{yx(t,n,a)}finally{Le=_,z.p=c,N.T=r}}mn=1,w0(),D0(),U0()}}function w0(){if(mn===1){mn=0;var t=Ba,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var r=z.p;z.p=2;var c=Le;Le|=4;try{c0(n,t);var f=Of,_=mp(t.containerInfo),A=f.focusedElem,G=f.selectionRange;if(_!==A&&A&&A.ownerDocument&&pp(A.ownerDocument.documentElement,A)){if(G!==null&&au(A)){var nt=G.start,ht=G.end;if(ht===void 0&&(ht=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(ht,A.value.length);else{var gt=A.ownerDocument||document,st=gt&&gt.defaultView||window;if(st.getSelection){var ct=st.getSelection(),Ht=A.textContent.length,Qt=Math.min(G.start,Ht),Ve=G.end===void 0?Qt:Math.min(G.end,Ht);!ct.extend&&Qt>Ve&&(_=Ve,Ve=Qt,Qt=_);var K=dp(A,Qt),X=dp(A,Ve);if(K&&X&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var et=gt.createRange();et.setStart(K.node,K.offset),ct.removeAllRanges(),Qt>Ve?(ct.addRange(et),ct.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ct.addRange(et))}}}}for(gt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&gt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}ec=!!Nf,Of=Nf=null}finally{Le=c,z.p=r,N.T=a}}t.current=n,mn=2}}function D0(){if(mn===2){mn=0;var t=Ba,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var r=z.p;z.p=2;var c=Le;Le|=4;try{a0(t,n.alternate,n)}finally{Le=c,z.p=r,N.T=a}}mn=3}}function U0(){if(mn===4||mn===3){mn=0,O();var t=Ba,n=or,a=oa,r=_0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,or=Ba=null,L0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ia=null),Ps(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=N.T,c=z.p,z.p=2,N.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var A=r[_];f(A.value,{componentStack:A.stack})}}finally{N.T=n,z.p=c}}(oa&3)!==0&&Xl(),Pi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Sf?vo++:(vo=0,Sf=t):vo=0,xo(0)}}function L0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Jr(n)))}function Xl(){return w0(),D0(),U0(),N0()}function N0(){if(mn!==5)return!1;var t=Ba,n=vf;vf=0;var a=Ps(oa),r=N.T,c=z.p;try{z.p=32>a?32:a,N.T=null,a=xf,xf=null;var f=Ba,_=oa;if(mn=0,or=Ba=null,oa=0,(Le&6)!==0)throw Error(s(331));var A=Le;if(Le|=4,p0(f.current),f0(f,f.current,_,a),Le=A,xo(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{z.p=c,N.T=r,L0(t,n)}}function O0(t,n,a){n=oi(a,n),n=Qu(t.stateNode,n,2),t=La(t,n,2),t!==null&&(wn(t,2),Pi(t))}function Ie(t,n,a){if(t.tag===3)O0(t,t,a);else for(;n!==null;){if(n.tag===3){O0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){t=oi(a,t),a=Pm(2),r=La(n,a,2),r!==null&&(zm(a,r,n,t),wn(r,2),Pi(r));break}}n=n.return}}function Ef(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new bx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(mf=!0,c.add(a),t=Dx.bind(null,t,n,a),n.then(t,t))}function Dx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(ve&a)===a&&(tn===4||tn===3&&(ve&62914560)===ve&&300>E()-Fl?(Le&2)===0&&lr(t,0):gf|=a,rr===ve&&(rr=0)),Pi(t)}function P0(t,n){n===0&&(n=ze()),t=os(t,n),t!==null&&(wn(t,n),Pi(t))}function Ux(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),P0(t,a)}function Lx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),P0(t,a)}function Nx(t,n){return ye(t,n)}var kl=null,ur=null,Tf=!1,Wl=!1,bf=!1,Ga=0;function Pi(t){t!==ur&&t.next===null&&(ur===null?kl=ur=t:ur=ur.next=t),Wl=!0,Tf||(Tf=!0,Px())}function xo(t,n){if(!bf&&Wl){bf=!0;do for(var a=!1,r=kl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Lt(42|t)+1)-1,f&=c&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,B0(r,f))}else f=ve,f=ut(r,r===Xe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||It(r,f)||(a=!0,B0(r,f));r=r.next}while(a);bf=!1}}function Ox(){z0()}function z0(){Wl=Tf=!1;var t=0;Ga!==0&&Wx()&&(t=Ga);for(var n=E(),a=null,r=kl;r!==null;){var c=r.next,f=F0(r,n);f===0?(r.next=null,a===null?kl=c:a.next=c,c===null&&(ur=a)):(a=r,(t!==0||(f&3)!==0)&&(Wl=!0)),r=c}mn!==0&&mn!==5||xo(t),Ga!==0&&(Ga=0)}function F0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Lt(f),A=1<<_,G=c[_];G===-1?((A&a)===0||(A&r)!==0)&&(c[_]=ne(A,n)):G<=n&&(t.expiredLanes|=A),f&=~A}if(n=Xe,a=ve,a=ut(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||It(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Ne(r),Ps(a)){case 2:case 8:a=xt;break;case 32:a=ft;break;case 268435456:a=Ct;break;default:a=ft}return r=I0.bind(null,t),a=ye(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Ne(r),t.callbackPriority=2,t.callbackNode=null,2}function I0(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xl()&&t.callbackNode!==a)return null;var r=ve;return r=ut(t,t===Xe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(x0(t,r,n),F0(t,E()),t.callbackNode!=null&&t.callbackNode===a?I0.bind(null,t):null)}function B0(t,n){if(Xl())return null;x0(t,n,!0)}function Px(){Yx(function(){(Le&6)!==0?ye(pt,Ox):z0()})}function Af(){if(Ga===0){var t=Zs;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ga=t}return Ga}function H0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$o(""+t)}function G0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function zx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=H0((c[dn]||null).action),_=r.submitter;_&&(n=(n=_[dn]||null)?H0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new il("action","action",null,r,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ga!==0){var G=_?G0(c,_):new FormData(c);Wu(a,{pending:!0,data:G,method:c.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=_?G0(c,_):new FormData(c),Wu(a,{pending:!0,data:G,method:c.method,action:f},f,G))},currentTarget:c}]})}}for(var Rf=0;Rf<lu.length;Rf++){var Cf=lu[Rf],Fx=Cf.toLowerCase(),Ix=Cf[0].toUpperCase()+Cf.slice(1);yi(Fx,"on"+Ix)}yi(vp,"onAnimationEnd"),yi(xp,"onAnimationIteration"),yi(Sp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(tx,"onTransitionRun"),yi(ex,"onTransitionStart"),yi(nx,"onTransitionCancel"),yi(Mp,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function V0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var A=r[_],G=A.instance,nt=A.currentTarget;if(A=A.listener,G!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=nt;try{f(c)}catch(ht){rl(ht)}c.currentTarget=null,f=G}else for(_=0;_<r.length;_++){if(A=r[_],G=A.instance,nt=A.currentTarget,A=A.listener,G!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=nt;try{f(c)}catch(ht){rl(ht)}c.currentTarget=null,f=G}}}}function ge(t,n){var a=n[ya];a===void 0&&(a=n[ya]=new Set);var r=t+"__bubble";a.has(r)||(X0(n,t,2,!1),a.add(r))}function wf(t,n,a){var r=0;n&&(r|=4),X0(a,t,r,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Df(t){if(!t[ql]){t[ql]=!0,lt.forEach(function(a){a!=="selectionchange"&&(Bx.has(a)||wf(a,!1,t),wf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ql]||(n[ql]=!0,wf("selectionchange",!1,n))}}function X0(t,n,a,r){switch(vg(n)){case 2:var c=dS;break;case 8:c=pS;break;default:c=Wf}a=c.bind(null,n,a,t),c=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Uf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var A=r.stateNode.containerInfo;if(A===c)break;if(_===4)for(_=r.return;_!==null;){var G=_.tag;if((G===3||G===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;A!==null;){if(_=Ea(A),_===null)return;if(G=_.tag,G===5||G===6||G===26||G===27){r=f=_;continue t}A=A.parentNode}}r=r.return}jd(function(){var nt=f,ht=Yc(a),gt=[];t:{var st=yp.get(t);if(st!==void 0){var ct=il,Ht=t;switch(t){case"keypress":if(el(a)===0)break t;case"keydown":case"keyup":ct=Lv;break;case"focusin":Ht="focus",ct=$c;break;case"focusout":Ht="blur",ct=$c;break;case"beforeblur":case"afterblur":ct=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Pv;break;case vp:case xp:case Sp:ct=Ev;break;case Mp:ct=Fv;break;case"scroll":case"scrollend":ct=vv;break;case"wheel":ct=Bv;break;case"copy":case"cut":case"paste":ct=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=$d;break;case"toggle":case"beforetoggle":ct=Gv}var Qt=(n&4)!==0,Ve=!Qt&&(t==="scroll"||t==="scrollend"),K=Qt?st!==null?st+"Capture":null:st;Qt=[];for(var X=nt,et;X!==null;){var mt=X;if(et=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||et===null||K===null||(mt=Gr(X,K),mt!=null&&Qt.push(Mo(X,mt,et))),Ve)break;X=X.return}0<Qt.length&&(st=new ct(st,Ht,null,a,ht),gt.push({event:st,listeners:Qt}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",ct=t==="mouseout"||t==="pointerout",st&&a!==qc&&(Ht=a.relatedTarget||a.fromElement)&&(Ea(Ht)||Ht[ki]))break t;if((ct||st)&&(st=ht.window===ht?ht:(st=ht.ownerDocument)?st.defaultView||st.parentWindow:window,ct?(Ht=a.relatedTarget||a.toElement,ct=nt,Ht=Ht?Ea(Ht):null,Ht!==null&&(Ve=u(Ht),Qt=Ht.tag,Ht!==Ve||Qt!==5&&Qt!==27&&Qt!==6)&&(Ht=null)):(ct=null,Ht=nt),ct!==Ht)){if(Qt=Qd,mt="onMouseLeave",K="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=$d,mt="onPointerLeave",K="onPointerEnter",X="pointer"),Ve=ct==null?st:is(ct),et=Ht==null?st:is(Ht),st=new Qt(mt,X+"leave",ct,a,ht),st.target=Ve,st.relatedTarget=et,mt=null,Ea(ht)===nt&&(Qt=new Qt(K,X+"enter",Ht,a,ht),Qt.target=et,Qt.relatedTarget=Ve,mt=Qt),Ve=mt,ct&&Ht)e:{for(Qt=Hx,K=ct,X=Ht,et=0,mt=K;mt;mt=Qt(mt))et++;mt=0;for(var Kt=X;Kt;Kt=Qt(Kt))mt++;for(;0<et-mt;)K=Qt(K),et--;for(;0<mt-et;)X=Qt(X),mt--;for(;et--;){if(K===X||X!==null&&K===X.alternate){Qt=K;break e}K=Qt(K),X=Qt(X)}Qt=null}else Qt=null;ct!==null&&k0(gt,st,ct,Qt,!1),Ht!==null&&Ve!==null&&k0(gt,Ve,Ht,Qt,!0)}}t:{if(st=nt?is(nt):window,ct=st.nodeName&&st.nodeName.toLowerCase(),ct==="select"||ct==="input"&&st.type==="file")var Ce=op;else if(sp(st))if(lp)Ce=Qv;else{Ce=Zv;var qt=jv}else ct=st.nodeName,!ct||ct.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&Fs(nt.elementType)&&(Ce=op):Ce=Kv;if(Ce&&(Ce=Ce(t,nt))){rp(gt,Ce,a,ht);break t}qt&&qt(t,st,nt),t==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&Si(st,"number",st.value)}switch(qt=nt?is(nt):window,t){case"focusin":(sp(qt)||qt.contentEditable==="true")&&(Gs=qt,su=nt,Zr=null);break;case"focusout":Zr=su=Gs=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,gp(gt,a,ht);break;case"selectionchange":if($v)break;case"keydown":case"keyup":gp(gt,a,ht)}var fe;if(eu)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Hs?ip(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(tp&&a.locale!=="ko"&&(Hs||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Hs&&(fe=Zd()):(ba=ht,Kc="value"in ba?ba.value:ba.textContent,Hs=!0)),qt=Yl(nt,xe),0<qt.length&&(xe=new Jd(xe,t,null,a,ht),gt.push({event:xe,listeners:qt}),fe?xe.data=fe:(fe=ap(a),fe!==null&&(xe.data=fe)))),(fe=Xv?kv(t,a):Wv(t,a))&&(xe=Yl(nt,"onBeforeInput"),0<xe.length&&(qt=new Jd("onBeforeInput","beforeinput",null,a,ht),gt.push({event:qt,listeners:xe}),qt.data=fe)),zx(gt,t,nt,a,ht)}V0(gt,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Yl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gr(t,a),c!=null&&r.unshift(Mo(t,c,f)),c=Gr(t,n),c!=null&&r.push(Mo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Hx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function k0(t,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var A=a,G=A.alternate,nt=A.stateNode;if(A=A.tag,G!==null&&G===r)break;A!==5&&A!==26&&A!==27||nt===null||(G=nt,c?(nt=Gr(a,f),nt!=null&&_.unshift(Mo(a,nt,G))):c||(nt=Gr(a,f),nt!=null&&_.push(Mo(a,nt,G)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Gx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function W0(t){return(typeof t=="string"?t:""+t).replace(Gx,`
`).replace(Vx,"")}function q0(t,n){return n=W0(n),W0(t)===n}function Ge(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ln(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ln(t,""+r);break;case"className":ae(t,"class",r);break;case"tabIndex":ae(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ae(t,a,r);break;case"style":Wi(t,r,f);break;case"data":if(n!=="object"){ae(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=$o(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",c.name,c,null),Ge(t,n,"formEncType",c.formEncType,c,null),Ge(t,n,"formMethod",c.formMethod,c,null),Ge(t,n,"formTarget",c.formTarget,c,null)):(Ge(t,n,"encType",c.encType,c,null),Ge(t,n,"method",c.method,c,null),Ge(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=$o(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=qi);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=$o(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ge("beforetoggle",t),ge("toggle",t),ee(t,"popover",r);break;case"xlinkActuate":Bt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Bt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Bt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Bt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Bt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Bt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ee(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gv.get(a)||a,ee(t,a,r))}}function Lf(t,n,a,r,c,f){switch(a){case"style":Wi(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Ln(t,r):(typeof r=="number"||typeof r=="bigint")&&Ln(t,""+r);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"onClick":r!=null&&(t.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!it.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ee(t,a,r)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,f,_,a,null)}}c&&Ge(t,n,"srcSet",a.srcSet,a,null),r&&Ge(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var A=f=_=c=null,G=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":c=ht;break;case"type":_=ht;break;case"checked":G=ht;break;case"defaultChecked":nt=ht;break;case"value":f=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ge(t,n,r,ht,a,null)}}qn(t,f,A,G,nt,_,c,!1);return;case"select":ge("invalid",t),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":r=A;default:Ge(t,n,c,A,a,null)}n=f,a=_,t.multiple=!!r,n!=null?Yn(t,!!r,n,!1):a!=null&&Yn(t,!!r,a,!0);return;case"textarea":ge("invalid",t),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":r=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ge(t,n,_,A,a,null)}rn(t,r,c,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(r=a[G],r!=null)&&(G==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Ge(t,n,G,r,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(r=0;r<So.length;r++)ge(So[r],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,nt,r,a,null)}return;default:if(Fs(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&Lf(t,n,ht,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Ge(t,n,A,r,a,null))}function Xx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,A=null,G=null,nt=null,ht=null;for(ct in a){var gt=a[ct];if(a.hasOwnProperty(ct)&&gt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=gt;default:r.hasOwnProperty(ct)||Ge(t,n,ct,null,r,gt)}}for(var st in r){var ct=r[st];if(gt=a[st],r.hasOwnProperty(st)&&(ct!=null||gt!=null))switch(st){case"type":f=ct;break;case"name":c=ct;break;case"checked":nt=ct;break;case"defaultChecked":ht=ct;break;case"value":_=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==gt&&Ge(t,n,st,ct,r,gt)}}Un(t,_,A,G,nt,ht,f,c);return;case"select":ct=_=A=st=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ct=G;default:r.hasOwnProperty(f)||Ge(t,n,f,null,r,G)}for(c in r)if(f=r[c],G=a[c],r.hasOwnProperty(c)&&(f!=null||G!=null))switch(c){case"value":st=f;break;case"defaultValue":A=f;break;case"multiple":_=f;default:f!==G&&Ge(t,n,c,f,r,G)}n=A,a=_,r=ct,st!=null?Yn(t,!!a,st,!1):!!r!=!!a&&(n!=null?Yn(t,!!a,n,!0):Yn(t,!!a,a?[]:"",!1));return;case"textarea":ct=st=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ge(t,n,A,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":st=c;break;case"defaultValue":ct=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ge(t,n,_,c,r,f)}Oe(t,st,ct);return;case"option":for(var Ht in a)st=a[Ht],a.hasOwnProperty(Ht)&&st!=null&&!r.hasOwnProperty(Ht)&&(Ht==="selected"?t.selected=!1:Ge(t,n,Ht,null,r,st));for(G in r)st=r[G],ct=a[G],r.hasOwnProperty(G)&&st!==ct&&(st!=null||ct!=null)&&(G==="selected"?t.selected=st&&typeof st!="function"&&typeof st!="symbol":Ge(t,n,G,st,r,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)st=a[Qt],a.hasOwnProperty(Qt)&&st!=null&&!r.hasOwnProperty(Qt)&&Ge(t,n,Qt,null,r,st);for(nt in r)if(st=r[nt],ct=a[nt],r.hasOwnProperty(nt)&&st!==ct&&(st!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Ge(t,n,nt,st,r,ct)}return;default:if(Fs(n)){for(var Ve in a)st=a[Ve],a.hasOwnProperty(Ve)&&st!==void 0&&!r.hasOwnProperty(Ve)&&Lf(t,n,Ve,void 0,r,st);for(ht in r)st=r[ht],ct=a[ht],!r.hasOwnProperty(ht)||st===ct||st===void 0&&ct===void 0||Lf(t,n,ht,st,r,ct);return}}for(var K in a)st=a[K],a.hasOwnProperty(K)&&st!=null&&!r.hasOwnProperty(K)&&Ge(t,n,K,null,r,st);for(gt in r)st=r[gt],ct=a[gt],!r.hasOwnProperty(gt)||st===ct||st==null&&ct==null||Ge(t,n,gt,st,r,ct)}function Y0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,A=c.duration;if(f&&A&&Y0(_)){for(_=0,A=c.responseEnd,r+=1;r<a.length;r++){var G=a[r],nt=G.startTime;if(nt>A)break;var ht=G.transferSize,gt=G.initiatorType;ht&&Y0(gt)&&(G=G.responseEnd,_+=ht*(G<A?1:(A-nt)/(G-nt)))}if(--r,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nf=null,Of=null;function jl(t){return t.nodeType===9?t:t.ownerDocument}function j0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Pf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Wx(){var t=window.event;return t&&t.type==="popstate"?t===zf?!1:(zf=t,!0):(zf=null,!1)}var K0=typeof setTimeout=="function"?setTimeout:void 0,qx=typeof clearTimeout=="function"?clearTimeout:void 0,Q0=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Q0<"u"?function(t){return Q0.resolve(null).then(t).catch(jx)}:K0;function jx(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function J0(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),pr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")yo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[ns]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&yo(t.ownerDocument.body);a=c}while(a);pr(n)}function $0(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Ff(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),Hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Zx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ns])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function Kx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function tg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hi(t.nextSibling),t===null))return null;return t}function If(t){return t.data==="$?"||t.data==="$~"}function Bf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Qx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Hf=null;function eg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return hi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function ng(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function ig(t,n,a){switch(n=jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Hr(t)}var di=new Map,ag=new Set;function Zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=z.d;z.d={f:Jx,r:$x,D:tS,C:eS,L:nS,m:iS,X:sS,S:aS,M:rS};function Jx(){var t=la.f(),n=Hl();return t||n}function $x(t){var n=Ta(t);n!==null&&n.tag===5&&n.type==="form"?Mm(n):la.r(t)}var fr=typeof document>"u"?null:document;function sg(t,n,a){var r=fr;if(r&&typeof n=="string"&&n){var c=ie(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),ag.has(c)||(ag.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),En(n,"link",t),k(n),r.head.appendChild(n)))}}function tS(t){la.D(t),sg("dns-prefetch",t,null)}function eS(t,n){la.C(t,n),sg("preconnect",t,n)}function nS(t,n,a){la.L(t,n,a);var r=fr;if(r&&t&&n){var c='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ie(a.imageSizes)+'"]')):c+='[href="'+ie(t)+'"]';var f=c;switch(n){case"style":f=hr(t);break;case"script":f=dr(t)}di.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),di.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(Eo(f))||n==="script"&&r.querySelector(To(f))||(n=r.createElement("link"),En(n,"link",t),k(n),r.head.appendChild(n)))}}function iS(t,n){la.m(t,n);var a=fr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ie(r)+'"][href="'+ie(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=dr(t)}if(!di.has(f)&&(t=x({rel:"modulepreload",href:t},n),di.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}r=a.createElement("link"),En(r,"link",t),k(r),a.head.appendChild(r)}}}function aS(t,n,a){la.S(t,n,a);var r=fr;if(r&&t){var c=R(r).hoistableStyles,f=hr(t);n=n||"default";var _=c.get(f);if(!_){var A={loading:0,preload:null};if(_=r.querySelector(Eo(f)))A.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=di.get(f))&&Gf(t,a);var G=_=r.createElement("link");k(G),En(G,"link",t),G._p=new Promise(function(nt,ht){G.onload=nt,G.onerror=ht}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Kl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:A},c.set(f,_)}}}function sS(t,n){la.X(t,n);var a=fr;if(a&&t){var r=R(a).hoistableScripts,c=dr(t),f=r.get(c);f||(f=a.querySelector(To(c)),f||(t=x({src:t,async:!0},n),(n=di.get(c))&&Vf(t,n),f=a.createElement("script"),k(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function rS(t,n){la.M(t,n);var a=fr;if(a&&t){var r=R(a).hoistableScripts,c=dr(t),f=r.get(c);f||(f=a.querySelector(To(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=di.get(c))&&Vf(t,n),f=a.createElement("script"),k(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function rg(t,n,a,r){var c=(c=at.current)?Zl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hr(a.href),a=R(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hr(a.href);var f=R(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(Eo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),di.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(t,a),f||oS(c,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=dr(a),a=R(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function hr(t){return'href="'+ie(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function og(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function oS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),En(n,"link",a),k(n),t.head.appendChild(n))}function dr(t){return'[src="'+ie(t)+'"]'}function To(t){return"script[async]"+t}function lg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ie(a.href)+'"]');if(r)return n.instance=r,k(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),k(r),En(r,"style",c),Kl(r,a.precedence,t),n.instance=r;case"stylesheet":c=hr(a.href);var f=t.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,k(f),f;r=og(a),(c=di.get(c))&&Gf(r,c),f=(t.ownerDocument||t).createElement("link"),k(f);var _=f;return _._p=new Promise(function(A,G){_.onload=A,_.onerror=G}),En(f,"link",r),n.state.loading|=4,Kl(f,a.precedence,t),n.instance=f;case"script":return f=dr(a.src),(c=t.querySelector(To(f)))?(n.instance=c,k(c),c):(r=a,(c=di.get(f))&&(r=x({},a),Vf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),k(c),En(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Kl(r,a.precedence,t));return n.instance}function Kl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var A=r[_];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ql=null;function cg(t,n,a){if(Ql===null){var r=new Map,c=Ql=new Map;c.set(a,r)}else c=Ql,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ns]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var A=r.get(_);A?A.push(f):r.set(_,[f])}}return r}function ug(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function lS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function fg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=hr(r.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Jl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,r=og(r),(c=di.get(c))&&Gf(r,c),f=f.createElement("link"),k(f);var _=f;_._p=new Promise(function(A,G){_.onload=A,_.onerror=G}),En(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Jl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function uS(t,n){return t.stylesheets&&t.count===0&&tc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&tc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Xf===0&&(Xf=62500*kx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&tc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Xf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $l=null;function tc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$l=new Map,n.forEach(fS,t),$l=null,Jl.call(t))}function fS(t,n){if(!(n.state.loading&4)){var a=$l.get(t);if(a)var r=a.get(null);else{a=new Map,$l.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=Jl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var bo={$$typeof:L,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function hS(t,n,a,r,c,f,_,A,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function hg(t,n,a,r,c,f,_,A,G,nt,ht,gt){return t=new hS(t,n,a,_,G,nt,ht,gt,A),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),t.current=f,f.stateNode=t,n=Mu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},bu(f),t}function dg(t){return t?(t=ks,t):ks}function pg(t,n,a,r,c,f){c=dg(c),r.context===null?r.context=c:r.pendingContext=c,r=Ua(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=La(t,r,n),a!==null&&(Xn(a,t,n),no(a,t,n))}function mg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function kf(t,n){mg(t,n),(t=t.alternate)&&mg(t,n)}function gg(t){if(t.tag===13||t.tag===31){var n=os(t,67108864);n!==null&&Xn(n,t,67108864),kf(t,67108864)}}function _g(t){if(t.tag===13||t.tag===31){var n=ti();n=Os(n);var a=os(t,n);a!==null&&Xn(a,t,n),kf(t,n)}}var ec=!0;function dS(t,n,a,r){var c=N.T;N.T=null;var f=z.p;try{z.p=2,Wf(t,n,a,r)}finally{z.p=f,N.T=c}}function pS(t,n,a,r){var c=N.T;N.T=null;var f=z.p;try{z.p=8,Wf(t,n,a,r)}finally{z.p=f,N.T=c}}function Wf(t,n,a,r){if(ec){var c=qf(r);if(c===null)Uf(t,n,r,nc,a),xg(t,r);else if(gS(c,t,n,a,r))r.stopPropagation();else if(xg(t,r),n&4&&-1<mS.indexOf(t)){for(;c!==null;){var f=Ta(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Mt(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var G=1<<31-Lt(_);A.entanglements[1]|=G,_&=~G}Pi(f),(Le&6)===0&&(Il=E()+500,xo(0))}}break;case 31:case 13:A=os(f,2),A!==null&&Xn(A,f,2),Hl(),kf(f,2)}if(f=qf(r),f===null&&Uf(t,n,r,nc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Uf(t,n,r,null,a)}}function qf(t){return t=Yc(t),Yf(t)}var nc=null;function Yf(t){if(nc=null,t=Ea(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return nc=t,null}function vg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case pt:return 2;case xt:return 8;case ft:case Xt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var jf=!1,Xa=null,ka=null,Wa=null,Ao=new Map,Ro=new Map,qa=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xg(t,n){switch(t){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ta(n),n!==null&&gg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function gS(t,n,a,r,c){switch(n){case"focusin":return Xa=Co(Xa,t,n,a,r,c),!0;case"dragenter":return ka=Co(ka,t,n,a,r,c),!0;case"mouseover":return Wa=Co(Wa,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,t,n,a,r,c)),!0}return!1}function Sg(t){var n=Ea(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,zs(t.priority,function(){_g(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,zs(t.priority,function(){_g(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);qc=r,a.target.dispatchEvent(r),qc=null}else return n=Ta(a),n!==null&&gg(n),t.blockedOn=a,!1;n.shift()}return!0}function Mg(t,n,a){ic(t)&&a.delete(n)}function _S(){jf=!1,Xa!==null&&ic(Xa)&&(Xa=null),ka!==null&&ic(ka)&&(ka=null),Wa!==null&&ic(Wa)&&(Wa=null),Ao.forEach(Mg),Ro.forEach(Mg)}function ac(t,n){t.blockedOn===n&&(t.blockedOn=null,jf||(jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,_S)))}var sc=null;function yg(t){sc!==t&&(sc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){sc===t&&(sc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Yf(r||a)===null)continue;break}var f=Ta(a);f!==null&&(t.splice(n,3),n-=3,Wu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function pr(t){function n(G){return ac(G,t)}Xa!==null&&ac(Xa,t),ka!==null&&ac(ka,t),Wa!==null&&ac(Wa,t),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<qa.length;a++){var r=qa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)Sg(a),a.blockedOn===null&&qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[dn]||null;if(typeof f=="function")_||yg(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[dn]||null)A=_.formAction;else if(Yf(c)!==null)continue}else A=_.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),yg(a)}}}function Eg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Zf(t){this._internalRoot=t}rc.prototype.render=Zf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ti();pg(a,r,t,n,null,null)},rc.prototype.unmount=Zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;pg(t.current,2,null,t,null,null),Hl(),n[ki]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ui();t={blockedOn:null,target:t,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,t),a===0&&Sg(t)}};var Tg=e.version;if(Tg!=="19.2.4")throw Error(s(527,Tg,"19.2.4"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var vS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{yt=oc.inject(vS),St=oc}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Um,f=Lm,_=Nm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=hg(t,1,!1,null,null,a,r,null,c,f,_,Eg),t[ki]=n.current,Df(t),new Zf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Um,_=Lm,A=Nm,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=hg(t,1,!0,n,a??null,r,c,G,f,_,A,Eg),n.context=dg(null),a=n.current,r=ti(),r=Os(r),c=Ua(r),c.callback=null,La(a,c,r),a=r,n.current.lanes=a,wn(n,a),Pi(n),t[ki]=n.current,Df(t),new rc(n)},Do.version="19.2.4",Do}var Og;function DS(){if(Og)return Jf.exports;Og=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=wS(),Jf.exports}var US=DS();const Ld="183",LS=0,Pg=1,NS=2,Lc=1,OS=2,Io=3,va=0,Wn=1,pa=2,ga=0,wr=1,Fh=2,zg=3,Fg=4,PS=5,Cs=100,zS=101,FS=102,IS=103,BS=104,HS=200,GS=201,VS=202,XS=203,Ih=204,Bh=205,kS=206,WS=207,qS=208,YS=209,jS=210,ZS=211,KS=212,QS=213,JS=214,Hh=0,Gh=1,Vh=2,Ur=3,Xh=4,kh=5,Wh=6,qh=7,P_=0,$S=1,tM=2,Gi=0,z_=1,F_=2,I_=3,B_=4,H_=5,G_=6,V_=7,X_=300,Ls=301,Lr=302,nh=303,ih=304,Gc=306,Yh=1e3,ma=1001,jh=1002,Tn=1003,eM=1004,lc=1005,Cn=1006,ah=1007,Ds=1008,ai=1009,k_=1010,W_=1011,Go=1012,Nd=1013,Xi=1014,Bi=1015,xa=1016,Od=1017,Pd=1018,Vo=1020,q_=35902,Y_=35899,j_=1021,Z_=1022,wi=1023,Sa=1026,Us=1027,K_=1028,zd=1029,Nr=1030,Fd=1031,Id=1033,Nc=33776,Oc=33777,Pc=33778,zc=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,td=37492,ed=37496,nd=37488,id=37489,ad=37490,sd=37491,rd=37808,od=37809,ld=37810,cd=37811,ud=37812,fd=37813,hd=37814,dd=37815,pd=37816,md=37817,gd=37818,_d=37819,vd=37820,xd=37821,Sd=36492,Md=36494,yd=36495,Ed=36283,Td=36284,bd=36285,Ad=36286,nM=3200,iM=0,aM=1,ts="",mi="srgb",Or="srgb-linear",Ic="linear",Be="srgb",mr=7680,Ig=519,sM=512,rM=513,oM=514,Bd=515,lM=516,cM=517,Hd=518,uM=519,Bg=35044,Hg="300 es",Hi=2e3,Xo=2001;function fM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hM(){const o=Bc("canvas");return o.style.display="block",o}const Gg={};function Vg(...o){const e="THREE."+o.shift();console.log(e,...o)}function Q_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function re(...o){o=Q_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function De(...o){o=Q_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Hc(...o){const e=o.join(" ");e in Gg||(Gg[e]=!0,re(...o))}function dM(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const pM={[Hh]:Gh,[Vh]:Wh,[Xh]:qh,[Ur]:kh,[Gh]:Hh,[Wh]:Vh,[qh]:Xh,[kh]:Ur};class zr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=Math.PI/180,Rd=180/Math.PI;function Wo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function mM(o,e){return(o%e+e)%e}function rh(o,e,i){return(1-i)*o+i*e}function Uo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,i=0){Ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,p){let m=s[l+0],d=s[l+1],S=s[l+2],x=s[l+3],g=u[h+0],y=u[h+1],T=u[h+2],w=u[h+3];if(x!==w||m!==g||d!==y||S!==T){let M=m*g+d*y+S*T+x*w;M<0&&(g=-g,y=-y,T=-T,w=-w,M=-M);let v=1-p;if(M<.9995){const C=Math.acos(M),L=Math.sin(C);v=Math.sin(v*C)/L,p=Math.sin(p*C)/L,m=m*v+g*p,d=d*v+y*p,S=S*v+T*p,x=x*v+w*p}else{m=m*v+g*p,d=d*v+y*p,S=S*v+T*p,x=x*v+w*p;const C=1/Math.sqrt(m*m+d*d+S*S+x*x);m*=C,d*=C,S*=C,x*=C}}e[i]=m,e[i+1]=d,e[i+2]=S,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,h){const p=s[l],m=s[l+1],d=s[l+2],S=s[l+3],x=u[h],g=u[h+1],y=u[h+2],T=u[h+3];return e[i]=p*T+S*x+m*y-d*g,e[i+1]=m*T+S*g+d*x-p*y,e[i+2]=d*T+S*y+p*g-m*x,e[i+3]=S*T-p*x-m*g-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(s/2),S=p(l/2),x=p(u/2),g=m(s/2),y=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=g*S*x+d*y*T,this._y=d*y*x-g*S*T,this._z=d*S*T+g*y*x,this._w=d*S*x-g*y*T;break;case"YXZ":this._x=g*S*x+d*y*T,this._y=d*y*x-g*S*T,this._z=d*S*T-g*y*x,this._w=d*S*x+g*y*T;break;case"ZXY":this._x=g*S*x-d*y*T,this._y=d*y*x+g*S*T,this._z=d*S*T+g*y*x,this._w=d*S*x-g*y*T;break;case"ZYX":this._x=g*S*x-d*y*T,this._y=d*y*x+g*S*T,this._z=d*S*T-g*y*x,this._w=d*S*x+g*y*T;break;case"YZX":this._x=g*S*x+d*y*T,this._y=d*y*x+g*S*T,this._z=d*S*T-g*y*x,this._w=d*S*x-g*y*T;break;case"XZY":this._x=g*S*x-d*y*T,this._y=d*y*x-g*S*T,this._z=d*S*T+g*y*x,this._w=d*S*x+g*y*T;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],p=i[5],m=i[9],d=i[2],S=i[6],x=i[10],g=s+p+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(S-m)*y,this._y=(u-d)*y,this._z=(h-l)*y}else if(s>p&&s>x){const y=2*Math.sqrt(1+s-p-x);this._w=(S-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+d)/y}else if(p>x){const y=2*Math.sqrt(1+p-s-x);this._w=(u-d)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+S)/y}else{const y=2*Math.sqrt(1+x-s-p);this._w=(h-l)/y,this._x=(u+d)/y,this._y=(m+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,p=i._x,m=i._y,d=i._z,S=i._w;return this._x=s*S+h*p+l*d-u*m,this._y=l*S+h*m+u*p-s*d,this._z=u*S+h*d+s*m-l*p,this._w=h*S-s*p-l*m-u*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,u=e._z,h=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,u=-u,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),S=Math.sin(d);m=Math.sin(m*d)/S,i=Math.sin(i*d)/S,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,i=0,s=0){$.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Xg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Xg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*s),S=2*(p*i-u*l),x=2*(u*s-h*i);return this.x=i+m*d+h*x-p*S,this.y=s+m*S+p*d-u*x,this.z=l+m*x+u*S-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*h-s*m,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oh=new $,Xg=new Fr;class he{constructor(e,i,s,l,u,h,p,m,d){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,p,m,d)}set(e,i,s,l,u,h,p,m,d){const S=this.elements;return S[0]=e,S[1]=l,S[2]=p,S[3]=i,S[4]=u,S[5]=m,S[6]=s,S[7]=h,S[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],S=s[4],x=s[7],g=s[2],y=s[5],T=s[8],w=l[0],M=l[3],v=l[6],C=l[1],L=l[4],D=l[7],H=l[2],B=l[5],F=l[8];return u[0]=h*w+p*C+m*H,u[3]=h*M+p*L+m*B,u[6]=h*v+p*D+m*F,u[1]=d*w+S*C+x*H,u[4]=d*M+S*L+x*B,u[7]=d*v+S*D+x*F,u[2]=g*w+y*C+T*H,u[5]=g*M+y*L+T*B,u[8]=g*v+y*D+T*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],S=e[8];return i*h*S-i*p*d-s*u*S+s*p*m+l*u*d-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],S=e[8],x=S*h-p*d,g=p*m-S*u,y=d*u-h*m,T=i*x+s*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=x*w,e[1]=(l*d-S*s)*w,e[2]=(p*s-l*h)*w,e[3]=g*w,e[4]=(S*i-l*m)*w,e[5]=(l*u-p*i)*w,e[6]=y*w,e[7]=(s*m-d*i)*w,e[8]=(h*i-s*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,p){const m=Math.cos(u),d=Math.sin(u);return this.set(s*m,s*d,-s*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(lh.makeScale(e,i)),this}rotate(e){return this.premultiply(lh.makeRotation(-e)),this}translate(e,i){return this.premultiply(lh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lh=new he,kg=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wg=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gM(){const o={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ts?Ic:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Hc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Hc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Or]:{primaries:e,whitePoint:s,transfer:Ic,toXYZ:kg,fromXYZ:Wg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:s,transfer:Be,toXYZ:kg,fromXYZ:Wg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),o}const be=gM();function _a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Dr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gr;class _M{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{gr===void 0&&(gr=Bc("canvas")),gr.width=e.width,gr.height=e.height;const l=gr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Bc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=_a(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(_a(i[s]/255)*255):i[s]=_a(i[s]);return{data:i,width:e.width,height:e.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vM=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?u.push(ch(l[h].image)):u.push(ch(l[h]))}else u=ch(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function ch(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_M.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let xM=0;const uh=new $;class Pn extends zr{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ma,l=ma,u=Cn,h=Ds,p=wi,m=ai,d=Pn.DEFAULT_ANISOTROPY,S=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Wo(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==X_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yh:e.x=e.x-Math.floor(e.x);break;case ma:e.x=e.x<0?0:1;break;case jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yh:e.y=e.y-Math.floor(e.y);break;case ma:e.y=e.y<0?0:1;break;case jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=X_;Pn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,d=m[0],S=m[4],x=m[8],g=m[1],y=m[5],T=m[9],w=m[2],M=m[6],v=m[10];if(Math.abs(S-g)<.01&&Math.abs(x-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(S+g)<.1&&Math.abs(x+w)<.1&&Math.abs(T+M)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(d+1)/2,D=(y+1)/2,H=(v+1)/2,B=(S+g)/4,F=(x+w)/4,b=(T+M)/4;return L>D&&L>H?L<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(L),l=B/s,u=F/s):D>H?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=B/l,u=b/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=F/u,l=b/u),this.set(s,l,u,i),this}let C=Math.sqrt((M-T)*(M-T)+(x-w)*(x-w)+(g-S)*(g-S));return Math.abs(C)<.001&&(C=1),this.x=(M-T)/C,this.y=(x-w)/C,this.z=(g-S)/C,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SM extends zr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},u=new Pn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Gd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends SM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class J_ extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MM extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qe{constructor(e,i,s,l,u,h,p,m,d,S,x,g,y,T,w,M){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,p,m,d,S,x,g,y,T,w,M)}set(e,i,s,l,u,h,p,m,d,S,x,g,y,T,w,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=h,v[9]=p,v[13]=m,v[2]=d,v[6]=S,v[10]=x,v[14]=g,v[3]=y,v[7]=T,v[11]=w,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/_r.setFromMatrixColumn(e,0).length(),u=1/_r.setFromMatrixColumn(e,1).length(),h=1/_r.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),S=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const g=h*S,y=h*x,T=p*S,w=p*x;i[0]=m*S,i[4]=-m*x,i[8]=d,i[1]=y+T*d,i[5]=g-w*d,i[9]=-p*m,i[2]=w-g*d,i[6]=T+y*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*S,y=m*x,T=d*S,w=d*x;i[0]=g+w*p,i[4]=T*p-y,i[8]=h*d,i[1]=h*x,i[5]=h*S,i[9]=-p,i[2]=y*p-T,i[6]=w+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*S,y=m*x,T=d*S,w=d*x;i[0]=g-w*p,i[4]=-h*x,i[8]=T+y*p,i[1]=y+T*p,i[5]=h*S,i[9]=w-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*S,y=h*x,T=p*S,w=p*x;i[0]=m*S,i[4]=T*d-y,i[8]=g*d+w,i[1]=m*x,i[5]=w*d+g,i[9]=y*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,y=h*d,T=p*m,w=p*d;i[0]=m*S,i[4]=w-g*x,i[8]=T*x+y,i[1]=x,i[5]=h*S,i[9]=-p*S,i[2]=-d*S,i[6]=y*x+T,i[10]=g-w*x}else if(e.order==="XZY"){const g=h*m,y=h*d,T=p*m,w=p*d;i[0]=m*S,i[4]=-x,i[8]=d*S,i[1]=g*x+w,i[5]=h*S,i[9]=y*x-T,i[2]=T*x-y,i[6]=p*S,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yM,e,EM)}lookAt(e,i,s){const l=this.elements;return ei.subVectors(e,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ja.crossVectors(s,ei),ja.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ja.crossVectors(s,ei)),ja.normalize(),cc.crossVectors(ei,ja),l[0]=ja.x,l[4]=cc.x,l[8]=ei.x,l[1]=ja.y,l[5]=cc.y,l[9]=ei.y,l[2]=ja.z,l[6]=cc.z,l[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],S=s[1],x=s[5],g=s[9],y=s[13],T=s[2],w=s[6],M=s[10],v=s[14],C=s[3],L=s[7],D=s[11],H=s[15],B=l[0],F=l[4],b=l[8],U=l[12],Q=l[1],I=l[5],Y=l[9],tt=l[13],rt=l[2],q=l[6],N=l[10],z=l[14],ot=l[3],dt=l[7],Et=l[11],P=l[15];return u[0]=h*B+p*Q+m*rt+d*ot,u[4]=h*F+p*I+m*q+d*dt,u[8]=h*b+p*Y+m*N+d*Et,u[12]=h*U+p*tt+m*z+d*P,u[1]=S*B+x*Q+g*rt+y*ot,u[5]=S*F+x*I+g*q+y*dt,u[9]=S*b+x*Y+g*N+y*Et,u[13]=S*U+x*tt+g*z+y*P,u[2]=T*B+w*Q+M*rt+v*ot,u[6]=T*F+w*I+M*q+v*dt,u[10]=T*b+w*Y+M*N+v*Et,u[14]=T*U+w*tt+M*z+v*P,u[3]=C*B+L*Q+D*rt+H*ot,u[7]=C*F+L*I+D*q+H*dt,u[11]=C*b+L*Y+D*N+H*Et,u[15]=C*U+L*tt+D*z+H*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],p=e[5],m=e[9],d=e[13],S=e[2],x=e[6],g=e[10],y=e[14],T=e[3],w=e[7],M=e[11],v=e[15],C=m*y-d*g,L=p*y-d*x,D=p*g-m*x,H=h*y-d*S,B=h*g-m*S,F=h*x-p*S;return i*(w*C-M*L+v*D)-s*(T*C-M*H+v*B)+l*(T*L-w*H+v*F)-u*(T*D-w*B+M*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],p=e[5],m=e[6],d=e[7],S=e[8],x=e[9],g=e[10],y=e[11],T=e[12],w=e[13],M=e[14],v=e[15],C=i*p-s*h,L=i*m-l*h,D=i*d-u*h,H=s*m-l*p,B=s*d-u*p,F=l*d-u*m,b=S*w-x*T,U=S*M-g*T,Q=S*v-y*T,I=x*M-g*w,Y=x*v-y*w,tt=g*v-y*M,rt=C*tt-L*Y+D*I+H*Q-B*U+F*b;if(rt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/rt;return e[0]=(p*tt-m*Y+d*I)*q,e[1]=(l*Y-s*tt-u*I)*q,e[2]=(w*F-M*B+v*H)*q,e[3]=(g*B-x*F-y*H)*q,e[4]=(m*Q-h*tt-d*U)*q,e[5]=(i*tt-l*Q+u*U)*q,e[6]=(M*D-T*F-v*L)*q,e[7]=(S*F-g*D+y*L)*q,e[8]=(h*Y-p*Q+d*b)*q,e[9]=(s*Q-i*Y-u*b)*q,e[10]=(T*B-w*D+v*C)*q,e[11]=(x*D-S*B-y*C)*q,e[12]=(p*U-h*I-m*b)*q,e[13]=(i*I-s*U+l*b)*q,e[14]=(w*L-T*H-M*C)*q,e[15]=(S*H-x*L+g*C)*q,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,p=e.y,m=e.z,d=u*h,S=u*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,S*p+s,S*m-l*h,0,d*m-l*p,S*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,p=i._z,m=i._w,d=u+u,S=h+h,x=p+p,g=u*d,y=u*S,T=u*x,w=h*S,M=h*x,v=p*x,C=m*d,L=m*S,D=m*x,H=s.x,B=s.y,F=s.z;return l[0]=(1-(w+v))*H,l[1]=(y+D)*H,l[2]=(T-L)*H,l[3]=0,l[4]=(y-D)*B,l[5]=(1-(g+v))*B,l[6]=(M+C)*B,l[7]=0,l[8]=(T+L)*F,l[9]=(M-C)*F,l[10]=(1-(g+w))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return s.set(1,1,1),i.identity(),this;let h=_r.set(l[0],l[1],l[2]).length();const p=_r.set(l[4],l[5],l[6]).length(),m=_r.set(l[8],l[9],l[10]).length();u<0&&(h=-h),bi.copy(this);const d=1/h,S=1/p,x=1/m;return bi.elements[0]*=d,bi.elements[1]*=d,bi.elements[2]*=d,bi.elements[4]*=S,bi.elements[5]*=S,bi.elements[6]*=S,bi.elements[8]*=x,bi.elements[9]*=x,bi.elements[10]*=x,i.setFromRotationMatrix(bi),s.x=h,s.y=p,s.z=m,this}makePerspective(e,i,s,l,u,h,p=Hi,m=!1){const d=this.elements,S=2*u/(i-e),x=2*u/(s-l),g=(i+e)/(i-e),y=(s+l)/(s-l);let T,w;if(m)T=u/(h-u),w=h*u/(h-u);else if(p===Hi)T=-(h+u)/(h-u),w=-2*h*u/(h-u);else if(p===Xo)T=-h/(h-u),w=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=S,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,u,h,p=Hi,m=!1){const d=this.elements,S=2/(i-e),x=2/(s-l),g=-(i+e)/(i-e),y=-(s+l)/(s-l);let T,w;if(m)T=1/(h-u),w=h/(h-u);else if(p===Hi)T=-2/(h-u),w=-(h+u)/(h-u);else if(p===Xo)T=-1/(h-u),w=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=S,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const _r=new $,bi=new Qe,yM=new $(0,0,0),EM=new $(1,1,1),ja=new $,cc=new $,ei=new $,qg=new Qe,Yg=new Fr;class Ma{constructor(e=0,i=0,s=0,l=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],p=l[8],m=l[1],d=l[5],S=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,d),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-S,y),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return qg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qg,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Yg.setFromEuler(this),this.setFromQuaternion(Yg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class $_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TM=0;const jg=new $,vr=new Fr,ca=new Qe,uc=new $,Lo=new $,bM=new $,AM=new Fr,Zg=new $(1,0,0),Kg=new $(0,1,0),Qg=new $(0,0,1),Jg={type:"added"},RM={type:"removed"},xr={type:"childadded",child:null},fh={type:"childremoved",child:null};class zn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new $,i=new Ma,s=new Fr,l=new $(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new he}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vr.setFromAxisAngle(e,i),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,i){return vr.setFromAxisAngle(e,i),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(Zg,e)}rotateY(e){return this.rotateOnAxis(Kg,e)}rotateZ(e){return this.rotateOnAxis(Qg,e)}translateOnAxis(e,i){return jg.copy(e).applyQuaternion(this.quaternion),this.position.add(jg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Zg,e)}translateY(e){return this.translateOnAxis(Kg,e)}translateZ(e){return this.translateOnAxis(Qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?uc.copy(e):uc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Lo,uc,this.up):ca.lookAt(uc,Lo,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),vr.setFromRotationMatrix(ca),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jg),xr.child=e,this.dispatchEvent(xr),xr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(RM),fh.child=e,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jg),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,bM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,AM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,S=m.length;d<S;d++){const x=m[d];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),S=h(e.images),x=h(e.shapes),g=h(e.skeletons),y=h(e.animations),T=h(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),S.length>0&&(s.images=S),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(p){const m=[];for(const d in p){const S=p[d];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}zn.DEFAULT_UP=new $(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bo extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CM={type:"move"};class hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,s),v=this._getHandJoint(d,w);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const S=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=S.position.distanceTo(x.position),y=.02,T=.005;d.inputState.pinching&&g>y+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=y-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Bo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},fc={h:0,s:0,l:0};function dh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class te{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=s,be.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=be.workingColorSpace){if(e=mM(e,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=dh(h,u,e+1/3),this.g=dh(h,u,e),this.b=dh(h,u,e-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function s(u){u!==void 0&&parseFloat(u)<1&&re("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:re("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const s=tv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return be.workingToColorSpace(Rn.copy(this),e),Math.round(Me(Rn.r*255,0,255))*65536+Math.round(Me(Rn.g*255,0,255))*256+Math.round(Me(Rn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.workingToColorSpace(Rn.copy(this),i);const s=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(s,l,u),p=Math.min(s,l,u);let m,d;const S=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=S<=.5?x/(h+p):x/(2-h-p),h){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=d,e.l=S,e}getRGB(e,i=be.workingColorSpace){return be.workingToColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=mi){be.workingToColorSpace(Rn.copy(this),e);const i=Rn.r,s=Rn.g,l=Rn.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(fc);const s=rh(Za.h,fc.h,i),l=rh(Za.s,fc.s,i),u=rh(Za.l,fc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new te;te.NAMES=tv;class wM extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ai=new $,ua=new $,ph=new $,fa=new $,Sr=new $,Mr=new $,$g=new $,mh=new $,gh=new $,_h=new $,vh=new en,xh=new en,Sh=new en;class Ci{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ai.subVectors(e,i),l.cross(Ai);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Ai.subVectors(l,i),ua.subVectors(s,i),ph.subVectors(e,i);const h=Ai.dot(Ai),p=Ai.dot(ua),m=Ai.dot(ph),d=ua.dot(ua),S=ua.dot(ph),x=h*d-p*p;if(x===0)return u.set(0,0,0),null;const g=1/x,y=(d*m-p*S)*g,T=(h*S-p*m)*g;return u.set(1-y-T,T,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,i,s,l,u,h,p,m){return this.getBarycoord(e,i,s,l,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,fa.x),m.addScaledVector(h,fa.y),m.addScaledVector(p,fa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return vh.setScalar(0),xh.setScalar(0),Sh.setScalar(0),vh.fromBufferAttribute(e,i),xh.fromBufferAttribute(e,s),Sh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(vh,u.x),h.addScaledVector(xh,u.y),h.addScaledVector(Sh,u.z),h}static isFrontFacing(e,i,s,l){return Ai.subVectors(s,i),ua.subVectors(e,i),Ai.cross(ua).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),Ai.cross(ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ci.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,p;Sr.subVectors(l,s),Mr.subVectors(u,s),mh.subVectors(e,s);const m=Sr.dot(mh),d=Mr.dot(mh);if(m<=0&&d<=0)return i.copy(s);gh.subVectors(e,l);const S=Sr.dot(gh),x=Mr.dot(gh);if(S>=0&&x<=S)return i.copy(l);const g=m*x-S*d;if(g<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(s).addScaledVector(Sr,h);_h.subVectors(e,u);const y=Sr.dot(_h),T=Mr.dot(_h);if(T>=0&&y<=T)return i.copy(u);const w=y*d-m*T;if(w<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(Mr,p);const M=S*T-y*x;if(M<=0&&x-S>=0&&y-T>=0)return $g.subVectors(u,l),p=(x-S)/(x-S+(y-T)),i.copy(l).addScaledVector($g,p);const v=1/(M+w+g);return h=w*v,p=g*v,i.copy(s).addScaledVector(Sr,h).addScaledVector(Mr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qo{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ri.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ri.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ri.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=u.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Ri):Ri.fromBufferAttribute(u,h),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hc.copy(s.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),dc.subVectors(this.max,No),yr.subVectors(e.a,No),Er.subVectors(e.b,No),Tr.subVectors(e.c,No),Ka.subVectors(Er,yr),Qa.subVectors(Tr,Er),Ss.subVectors(yr,Tr);let i=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-Ss.z,Ss.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,Ss.z,0,-Ss.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-Ss.y,Ss.x,0];return!Mh(i,yr,Er,Tr,dc)||(i=[1,0,0,0,1,0,0,0,1],!Mh(i,yr,Er,Tr,dc))?!1:(pc.crossVectors(Ka,Qa),i=[pc.x,pc.y,pc.z],Mh(i,yr,Er,Tr,dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ha=[new $,new $,new $,new $,new $,new $,new $,new $],Ri=new $,hc=new qo,yr=new $,Er=new $,Tr=new $,Ka=new $,Qa=new $,Ss=new $,No=new $,dc=new $,pc=new $,Ms=new $;function Mh(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Ms.fromArray(o,u);const p=l.x*Math.abs(Ms.x)+l.y*Math.abs(Ms.y)+l.z*Math.abs(Ms.z),m=e.dot(Ms),d=i.dot(Ms),S=s.dot(Ms);if(Math.max(-Math.max(m,d,S),Math.min(m,d,S))>p)return!1}return!0}const hn=new $,mc=new Ae;let DM=0;class gi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Bg,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(e),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bg&&(e.usage=this.usage),e}}class ev extends gi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class nv extends gi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Fn extends gi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const UM=new qo,Oo=new $,yh=new $;class Vc{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):UM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Oo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(yh)),this.expandByPoint(Oo.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let LM=0;const pi=new Qe,Eh=new zn,br=new $,ni=new qo,Po=new qo,xn=new $;class si extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fM(e)?nv:ev)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new he().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,s){return pi.makeTranslation(e,i,s),this.applyMatrix4(pi),this}scale(e,i,s){return pi.makeScale(e,i,s),this.applyMatrix4(pi),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Fn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const p=i[u];Po.setFromBufferAttribute(p),this.morphTargetsRelative?(xn.addVectors(ni.min,Po.min),ni.expandByPoint(xn),xn.addVectors(ni.max,Po.max),ni.expandByPoint(xn)):(ni.expandByPoint(Po.min),ni.expandByPoint(Po.max))}ni.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)xn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let u=0,h=i.length;u<h;u++){const p=i[u],m=this.morphTargetsRelative;for(let d=0,S=p.count;d<S;d++)xn.fromBufferAttribute(p,d),m&&(br.fromBufferAttribute(e,d),xn.add(br)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new $,m[b]=new $;const d=new $,S=new $,x=new $,g=new Ae,y=new Ae,T=new Ae,w=new $,M=new $;function v(b,U,Q){d.fromBufferAttribute(s,b),S.fromBufferAttribute(s,U),x.fromBufferAttribute(s,Q),g.fromBufferAttribute(u,b),y.fromBufferAttribute(u,U),T.fromBufferAttribute(u,Q),S.sub(d),x.sub(d),y.sub(g),T.sub(g);const I=1/(y.x*T.y-T.x*y.y);isFinite(I)&&(w.copy(S).multiplyScalar(T.y).addScaledVector(x,-y.y).multiplyScalar(I),M.copy(x).multiplyScalar(y.x).addScaledVector(S,-T.x).multiplyScalar(I),p[b].add(w),p[U].add(w),p[Q].add(w),m[b].add(M),m[U].add(M),m[Q].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let b=0,U=C.length;b<U;++b){const Q=C[b],I=Q.start,Y=Q.count;for(let tt=I,rt=I+Y;tt<rt;tt+=3)v(e.getX(tt+0),e.getX(tt+1),e.getX(tt+2))}const L=new $,D=new $,H=new $,B=new $;function F(b){H.fromBufferAttribute(l,b),B.copy(H);const U=p[b];L.copy(U),L.sub(H.multiplyScalar(H.dot(U))).normalize(),D.crossVectors(B,U);const I=D.dot(m[b])<0?-1:1;h.setXYZW(b,L.x,L.y,L.z,I)}for(let b=0,U=C.length;b<U;++b){const Q=C[b],I=Q.start,Y=Q.count;for(let tt=I,rt=I+Y;tt<rt;tt+=3)F(e.getX(tt+0)),F(e.getX(tt+1)),F(e.getX(tt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new $,u=new $,h=new $,p=new $,m=new $,d=new $,S=new $,x=new $;if(e)for(let g=0,y=e.count;g<y;g+=3){const T=e.getX(g+0),w=e.getX(g+1),M=e.getX(g+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),S.subVectors(h,u),x.subVectors(l,u),S.cross(x),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),d.fromBufferAttribute(s,M),p.add(S),m.add(S),d.add(S),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),S.subVectors(h,u),x.subVectors(l,u),S.cross(x),s.setXYZ(g+0,S.x,S.y,S.z),s.setXYZ(g+1,S.x,S.y,S.z),s.setXYZ(g+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(p,m){const d=p.array,S=p.itemSize,x=p.normalized,g=new d.constructor(m.length*S);let y=0,T=0;for(let w=0,M=m.length;w<M;w++){p.isInterleavedBufferAttribute?y=m[w]*p.data.stride+p.offset:y=m[w]*S;for(let v=0;v<S;v++)g[T++]=d[y++]}return new gi(g,S,x)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new si,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const u=this.morphAttributes;for(const p in u){const m=[],d=u[p];for(let S=0,x=d.length;S<x;S++){const g=d[S],y=e(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],S=[];for(let x=0,g=d.length;x<g;x++){const y=d[x];S.push(y.toJSON(e.data))}S.length>0&&(l[m]=S,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const S=l[d];this.setAttribute(d,S.clone(i))}const u=e.morphAttributes;for(const d in u){const S=[],x=u[d];for(let g=0,y=x.length;g<y;g++)S.push(x[g].clone(i));this.morphAttributes[d]=S}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,S=h.length;d<S;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let NM=0;class Yo extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=wr,this.side=va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Bh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(s.blending=this.blending),this.side!==va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ih&&(s.blendSrc=this.blendSrc),this.blendDst!==Bh&&(s.blendDst=this.blendDst),this.blendEquation!==Cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ig&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const p in u){const m=u[p];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const da=new $,Th=new $,gc=new $,Ja=new $,bh=new $,_c=new $,Ah=new $;class iv{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(da.copy(this.origin).addScaledVector(this.direction,i),da.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Th.copy(e).add(i).multiplyScalar(.5),gc.copy(i).sub(e).normalize(),Ja.copy(this.origin).sub(Th);const u=e.distanceTo(i)*.5,h=-this.direction.dot(gc),p=Ja.dot(this.direction),m=-Ja.dot(gc),d=Ja.lengthSq(),S=Math.abs(1-h*h);let x,g,y,T;if(S>0)if(x=h*m-p,g=h*p-m,T=u*S,x>=0)if(g>=-T)if(g<=T){const w=1/S;x*=w,g*=w,y=x*(x+h*g+2*p)+g*(h*x+g+2*m)+d}else g=u,x=Math.max(0,-(h*g+p)),y=-x*x+g*(g+2*m)+d;else g=-u,x=Math.max(0,-(h*g+p)),y=-x*x+g*(g+2*m)+d;else g<=-T?(x=Math.max(0,-(-h*u+p)),g=x>0?-u:Math.min(Math.max(-u,-m),u),y=-x*x+g*(g+2*m)+d):g<=T?(x=0,g=Math.min(Math.max(-u,-m),u),y=g*(g+2*m)+d):(x=Math.max(0,-(h*u+p)),g=x>0?u:Math.min(Math.max(-u,-m),u),y=-x*x+g*(g+2*m)+d);else g=h>0?-u:u,x=Math.max(0,-(h*g+p)),y=-x*x+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Th).addScaledVector(gc,g),y}intersectSphere(e,i){da.subVectors(e.center,this.origin);const s=da.dot(this.direction),l=da.dot(da)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,p,m;const d=1/this.direction.x,S=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(s=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(s=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),S>=0?(u=(e.min.y-g.y)*S,h=(e.max.y-g.y)*S):(u=(e.max.y-g.y)*S,h=(e.min.y-g.y)*S),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,da)!==null}intersectTriangle(e,i,s,l,u){bh.subVectors(i,e),_c.subVectors(s,e),Ah.crossVectors(bh,_c);let h=this.direction.dot(Ah),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;Ja.subVectors(this.origin,e);const m=p*this.direction.dot(_c.crossVectors(Ja,_c));if(m<0)return null;const d=p*this.direction.dot(bh.cross(Ja));if(d<0||m+d>h)return null;const S=-p*Ja.dot(Ah);return S<0?null:this.at(S/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vd extends Yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const t_=new Qe,ys=new iv,vc=new Vc,e_=new $,xc=new $,Sc=new $,Mc=new $,Rh=new $,yc=new $,n_=new $,Ec=new $;class Di extends zn{constructor(e=new si,i=new Vd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){yc.set(0,0,0);for(let m=0,d=u.length;m<d;m++){const S=p[m],x=u[m];S!==0&&(Rh.fromBufferAttribute(x,e),h?yc.addScaledVector(Rh,S):yc.addScaledVector(Rh.sub(i),S))}i.add(yc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(u),ys.copy(e.ray).recast(e.near),!(vc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(vc,e_)===null||ys.origin.distanceToSquared(e_)>(e.far-e.near)**2))&&(t_.copy(u).invert(),ys.copy(e.ray).applyMatrix4(t_),!(s.boundingBox!==null&&ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ys)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,p=u.index,m=u.attributes.position,d=u.attributes.uv,S=u.attributes.uv1,x=u.attributes.normal,g=u.groups,y=u.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const M=g[T],v=h[M.materialIndex],C=Math.max(M.start,y.start),L=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let D=C,H=L;D<H;D+=3){const B=p.getX(D),F=p.getX(D+1),b=p.getX(D+2);l=Tc(this,v,e,s,d,S,x,B,F,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=T,v=w;M<v;M+=3){const C=p.getX(M),L=p.getX(M+1),D=p.getX(M+2);l=Tc(this,h,e,s,d,S,x,C,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const M=g[T],v=h[M.materialIndex],C=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=C,H=L;D<H;D+=3){const B=D,F=D+1,b=D+2;l=Tc(this,v,e,s,d,S,x,B,F,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=T,v=w;M<v;M+=3){const C=M,L=M+1,D=M+2;l=Tc(this,h,e,s,d,S,x,C,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function OM(o,e,i,s,l,u,h,p){let m;if(e.side===Wn?m=s.intersectTriangle(h,u,l,!0,p):m=s.intersectTriangle(l,u,h,e.side===va,p),m===null)return null;Ec.copy(p),Ec.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(Ec);return d<i.near||d>i.far?null:{distance:d,point:Ec.clone(),object:o}}function Tc(o,e,i,s,l,u,h,p,m,d){o.getVertexPosition(p,xc),o.getVertexPosition(m,Sc),o.getVertexPosition(d,Mc);const S=OM(o,e,i,s,xc,Sc,Mc,n_);if(S){const x=new $;Ci.getBarycoord(n_,xc,Sc,Mc,x),l&&(S.uv=Ci.getInterpolatedAttribute(l,p,m,d,x,new Ae)),u&&(S.uv1=Ci.getInterpolatedAttribute(u,p,m,d,x,new Ae)),h&&(S.normal=Ci.getInterpolatedAttribute(h,p,m,d,x,new $),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new $,materialIndex:0};Ci.getNormal(xc,Sc,Mc,g.normal),S.face=g,S.barycoord=x}return S}class PM extends Pn{constructor(e=null,i=1,s=1,l,u,h,p,m,d=Tn,S=Tn,x,g){super(null,h,p,m,d,S,l,u,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ch=new $,zM=new $,FM=new he;class Rs{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Ch.subVectors(s,i).cross(zM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Ch),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||FM.getNormalMatrix(e),l=this.coplanarPoint(Ch).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Vc,IM=new Ae(.5,.5),bc=new $;class Xd{constructor(e=new Rs,i=new Rs,s=new Rs,l=new Rs,u=new Rs,h=new Rs){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(u),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Hi,s=!1){const l=this.planes,u=e.elements,h=u[0],p=u[1],m=u[2],d=u[3],S=u[4],x=u[5],g=u[6],y=u[7],T=u[8],w=u[9],M=u[10],v=u[11],C=u[12],L=u[13],D=u[14],H=u[15];if(l[0].setComponents(d-h,y-S,v-T,H-C).normalize(),l[1].setComponents(d+h,y+S,v+T,H+C).normalize(),l[2].setComponents(d+p,y+x,v+w,H+L).normalize(),l[3].setComponents(d-p,y-x,v-w,H-L).normalize(),s)l[4].setComponents(m,g,M,D).normalize(),l[5].setComponents(d-m,y-g,v-M,H-D).normalize();else if(l[4].setComponents(d-m,y-g,v-M,H-D).normalize(),i===Hi)l[5].setComponents(d+m,y+g,v+M,H+D).normalize();else if(i===Xo)l[5].setComponents(m,g,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const i=IM.distanceTo(e.center);return Es.radius=.7071067811865476+i,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(bc.x=l.normal.x>0?e.max.x:e.min.x,bc.y=l.normal.y>0?e.max.y:e.min.y,bc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class BM extends Yo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const i_=new Qe,Cd=new iv,Ac=new Vc,Rc=new $;class HM extends zn{constructor(e=new si,i=new BM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=u,e.ray.intersectsSphere(Ac)===!1)return;i_.copy(l).invert(),Cd.copy(e.ray).applyMatrix4(i_);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=s.index,x=s.attributes.position;if(d!==null){const g=Math.max(0,h.start),y=Math.min(d.count,h.start+h.count);for(let T=g,w=y;T<w;T++){const M=d.getX(T);Rc.fromBufferAttribute(x,M),a_(Rc,M,m,l,e,i,this)}}else{const g=Math.max(0,h.start),y=Math.min(x.count,h.start+h.count);for(let T=g,w=y;T<w;T++)Rc.fromBufferAttribute(x,T),a_(Rc,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function a_(o,e,i,s,l,u,h){const p=Cd.distanceSqToPoint(o);if(p<i){const m=new $;Cd.closestPointToPoint(o,m),m.applyMatrix4(s);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;u.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class av extends Pn{constructor(e=[],i=Ls,s,l,u,h,p,m,d,S){super(e,i,s,l,u,h,p,m,d,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ko extends Pn{constructor(e,i,s=Xi,l,u,h,p=Tn,m=Tn,d,S=Sa,x=1){if(S!==Sa&&S!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,u,h,p,m,S,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class GM extends ko{constructor(e,i=Xi,s=Ls,l,u,h=Tn,p=Tn,m,d=Sa){const S={width:e,height:e,depth:1},x=[S,S,S,S,S,S];super(e,e,i,s,l,u,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jo extends si{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const p=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],d=[],S=[],x=[];let g=0,y=0;T("z","y","x",-1,-1,s,i,e,h,u,0),T("z","y","x",1,-1,s,i,-e,h,u,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,u,4),T("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Fn(d,3)),this.setAttribute("normal",new Fn(S,3)),this.setAttribute("uv",new Fn(x,2));function T(w,M,v,C,L,D,H,B,F,b,U){const Q=D/F,I=H/b,Y=D/2,tt=H/2,rt=B/2,q=F+1,N=b+1;let z=0,ot=0;const dt=new $;for(let Et=0;Et<N;Et++){const P=Et*I-tt;for(let Z=0;Z<q;Z++){const _t=Z*Q-Y;dt[w]=_t*C,dt[M]=P*L,dt[v]=rt,d.push(dt.x,dt.y,dt.z),dt[w]=0,dt[M]=0,dt[v]=B>0?1:-1,S.push(dt.x,dt.y,dt.z),x.push(Z/F),x.push(1-Et/b),z+=1}}for(let Et=0;Et<b;Et++)for(let P=0;P<F;P++){const Z=g+P+q*Et,_t=g+P+q*(Et+1),At=g+(P+1)+q*(Et+1),zt=g+(P+1)+q*Et;m.push(Z,_t,zt),m.push(_t,At,zt),ot+=6}p.addGroup(y,ot,U),y+=ot,g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class kd extends si{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const u=[],h=[];p(l),d(s),S(),this.setAttribute("position",new Fn(u,3)),this.setAttribute("normal",new Fn(u.slice(),3)),this.setAttribute("uv",new Fn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(C){const L=new $,D=new $,H=new $;for(let B=0;B<i.length;B+=3)y(i[B+0],L),y(i[B+1],D),y(i[B+2],H),m(L,D,H,C)}function m(C,L,D,H){const B=H+1,F=[];for(let b=0;b<=B;b++){F[b]=[];const U=C.clone().lerp(D,b/B),Q=L.clone().lerp(D,b/B),I=B-b;for(let Y=0;Y<=I;Y++)Y===0&&b===B?F[b][Y]=U:F[b][Y]=U.clone().lerp(Q,Y/I)}for(let b=0;b<B;b++)for(let U=0;U<2*(B-b)-1;U++){const Q=Math.floor(U/2);U%2===0?(g(F[b][Q+1]),g(F[b+1][Q]),g(F[b][Q])):(g(F[b][Q+1]),g(F[b+1][Q+1]),g(F[b+1][Q]))}}function d(C){const L=new $;for(let D=0;D<u.length;D+=3)L.x=u[D+0],L.y=u[D+1],L.z=u[D+2],L.normalize().multiplyScalar(C),u[D+0]=L.x,u[D+1]=L.y,u[D+2]=L.z}function S(){const C=new $;for(let L=0;L<u.length;L+=3){C.x=u[L+0],C.y=u[L+1],C.z=u[L+2];const D=M(C)/2/Math.PI+.5,H=v(C)/Math.PI+.5;h.push(D,1-H)}T(),x()}function x(){for(let C=0;C<h.length;C+=6){const L=h[C+0],D=h[C+2],H=h[C+4],B=Math.max(L,D,H),F=Math.min(L,D,H);B>.9&&F<.1&&(L<.2&&(h[C+0]+=1),D<.2&&(h[C+2]+=1),H<.2&&(h[C+4]+=1))}}function g(C){u.push(C.x,C.y,C.z)}function y(C,L){const D=C*3;L.x=e[D+0],L.y=e[D+1],L.z=e[D+2]}function T(){const C=new $,L=new $,D=new $,H=new $,B=new Ae,F=new Ae,b=new Ae;for(let U=0,Q=0;U<u.length;U+=9,Q+=6){C.set(u[U+0],u[U+1],u[U+2]),L.set(u[U+3],u[U+4],u[U+5]),D.set(u[U+6],u[U+7],u[U+8]),B.set(h[Q+0],h[Q+1]),F.set(h[Q+2],h[Q+3]),b.set(h[Q+4],h[Q+5]),H.copy(C).add(L).add(D).divideScalar(3);const I=M(H);w(B,Q+0,C,I),w(F,Q+2,L,I),w(b,Q+4,D,I)}}function w(C,L,D,H){H<0&&C.x===1&&(h[L]=C.x-1),D.x===0&&D.z===0&&(h[L]=H/2/Math.PI+.5)}function M(C){return Math.atan2(C.z,-C.x)}function v(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kd(e.vertices,e.indices,e.radius,e.detail)}}class Wd extends kd{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Wd(e.radius,e.detail)}}class Xc extends si{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,S=m+1,x=e/p,g=i/m,y=[],T=[],w=[],M=[];for(let v=0;v<S;v++){const C=v*g-h;for(let L=0;L<d;L++){const D=L*x-u;T.push(D,-C,0),w.push(0,0,1),M.push(L/p),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let C=0;C<p;C++){const L=C+d*v,D=C+d*(v+1),H=C+1+d*(v+1),B=C+1+d*v;y.push(L,D,B),y.push(D,H,B)}this.setIndex(y),this.setAttribute("position",new Fn(T,3)),this.setAttribute("normal",new Fn(w,3)),this.setAttribute("uv",new Fn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.width,e.height,e.widthSegments,e.heightSegments)}}class qd extends si{constructor(e=1,i=.4,s=12,l=48,u=Math.PI*2,h=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:u,thetaStart:h,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],d=[],S=[],x=[],g=new $,y=new $,T=new $;for(let w=0;w<=s;w++){const M=h+w/s*p;for(let v=0;v<=l;v++){const C=v/l*u;y.x=(e+i*Math.cos(M))*Math.cos(C),y.y=(e+i*Math.cos(M))*Math.sin(C),y.z=i*Math.sin(M),d.push(y.x,y.y,y.z),g.x=e*Math.cos(C),g.y=e*Math.sin(C),T.subVectors(y,g).normalize(),S.push(T.x,T.y,T.z),x.push(v/l),x.push(w/s)}}for(let w=1;w<=s;w++)for(let M=1;M<=l;M++){const v=(l+1)*w+M-1,C=(l+1)*(w-1)+M-1,L=(l+1)*(w-1)+M,D=(l+1)*w+M;m.push(v,C,D),m.push(C,L,D)}this.setIndex(m),this.setAttribute("position",new Fn(d,3)),this.setAttribute("normal",new Fn(S,3)),this.setAttribute("uv",new Fn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Pr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const s=Pr(o[i]);for(const l in s)e[l]=s[l]}return e}function VM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function rv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const XM={clone:Pr,merge:On};var kM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kM,this.fragmentShader=WM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=VM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class qM extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class YM extends Yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jM extends Yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ov extends zn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new te(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const wh=new Qe,s_=new $,r_=new $;class ZM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;s_.setFromMatrixPosition(e.matrixWorld),i.position.copy(s_),r_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(r_),i.updateMatrixWorld(),wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Xo||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cc=new $,wc=new Fr,zi=new $;class lv extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cc,wc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,wc,zi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Cc,wc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,wc,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $a=new $,o_=new Ae,l_=new Ae;class ii extends lv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,i){return this.getViewBounds(e,o_,l_),i.subVectors(l_,o_)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(sh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class KM extends ZM{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class QM extends ov{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new KM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class cv extends lv{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,h=u+d*this.view.width,p-=S*this.view.offsetY,m=p-S*this.view.height}this.projectionMatrix.makeOrthographic(u,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class JM extends ov{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ar=-90,Rr=1;class $M extends zn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(Ar,Rr,e,i);l.layers=this.layers,this.add(l);const u=new ii(Ar,Rr,e,i);u.layers=this.layers,this.add(u);const h=new ii(Ar,Rr,e,i);h.layers=this.layers,this.add(h);const p=new ii(Ar,Rr,e,i);p.layers=this.layers,this.add(p);const m=new ii(Ar,Rr,e,i);m.layers=this.layers,this.add(m);const d=new ii(Ar,Rr,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,p,m]=i;for(const d of i)this.remove(d);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Xo)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,p,m,d,S]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(x,g,y),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class ty extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function c_(o,e,i,s){const l=ey(s);switch(i){case j_:return o*e;case K_:return o*e/l.components*l.byteLength;case zd:return o*e/l.components*l.byteLength;case Nr:return o*e*2/l.components*l.byteLength;case Fd:return o*e*2/l.components*l.byteLength;case Z_:return o*e*3/l.components*l.byteLength;case wi:return o*e*4/l.components*l.byteLength;case Id:return o*e*4/l.components*l.byteLength;case Nc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kh:case Jh:return Math.max(o,16)*Math.max(e,8)/4;case Zh:case Qh:return Math.max(o,8)*Math.max(e,8)/2;case $h:case td:case nd:case id:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ed:case ad:case sd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ld:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case cd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case fd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case hd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case pd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case md:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case gd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case _d:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case vd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case xd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Sd:case Md:case yd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ed:case Td:return Math.ceil(o/4)*Math.ceil(e/4)*8;case bd:case Ad:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ey(o){switch(o){case ai:case k_:return{byteLength:1,components:1};case Go:case W_:case xa:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case Xi:case Nd:case Bi:return{byteLength:4,components:1};case q_:case Y_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);function uv(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function ny(o){const e=new WeakMap;function i(p,m){const d=p.array,S=p.usage,x=d.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,d,S),p.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const S=m.array,x=m.updateRanges;if(o.bindBuffer(d,p),x.length===0)o.bufferSubData(d,0,S);else{x.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<x.length;y++){const T=x[g],w=x[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,x[g]=w)}x.length=g+1;for(let y=0,T=x.length;y<T;y++){const w=x[y];o.bufferSubData(d,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=e.get(p);(!S||S.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:u,update:h}}var iy=`#ifdef USE_ALPHAHASH
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
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,by=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oy=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bE=`#ifdef USE_NORMALMAP
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
}`,LE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NE=`vec4 mvPosition = vec4( transformed, 1.0 );
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
#endif`,FE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iT=`uniform sampler2D t2D;
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`#include <common>
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
}`,cT=`#if DEPTH_PACKING == 3200
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
}`,uT=`#define DISTANCE
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
}`,fT=`#define DISTANCE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`uniform float scale;
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#include <common>
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
}`,_T=`uniform vec3 diffuse;
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
}`,vT=`#define LAMBERT
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
}`,xT=`#define LAMBERT
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
}`,ST=`#define MATCAP
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
}`,MT=`#define MATCAP
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
}`,yT=`#define NORMAL
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
}`,ET=`#define NORMAL
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
}`,TT=`#define PHONG
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
}`,bT=`#define PHONG
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
}`,AT=`#define STANDARD
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
}`,RT=`#define STANDARD
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
}`,CT=`#define TOON
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
}`,wT=`#define TOON
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
}`,DT=`uniform float size;
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
}`,UT=`uniform vec3 diffuse;
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
}`,LT=`#include <common>
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
}`,NT=`uniform vec3 color;
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
}`,OT=`uniform float rotation;
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
}`,PT=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:iy,alphahash_pars_fragment:ay,alphamap_fragment:sy,alphamap_pars_fragment:ry,alphatest_fragment:oy,alphatest_pars_fragment:ly,aomap_fragment:cy,aomap_pars_fragment:uy,batching_pars_vertex:fy,batching_vertex:hy,begin_vertex:dy,beginnormal_vertex:py,bsdfs:my,iridescence_fragment:gy,bumpmap_pars_fragment:_y,clipping_planes_fragment:vy,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:My,color_fragment:yy,color_pars_fragment:Ey,color_pars_vertex:Ty,color_vertex:by,common:Ay,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Cy,displacementmap_pars_vertex:wy,displacementmap_vertex:Dy,emissivemap_fragment:Uy,emissivemap_pars_fragment:Ly,colorspace_fragment:Ny,colorspace_pars_fragment:Oy,envmap_fragment:Py,envmap_common_pars_fragment:zy,envmap_pars_fragment:Fy,envmap_pars_vertex:Iy,envmap_physical_pars_fragment:Zy,envmap_vertex:By,fog_vertex:Hy,fog_pars_vertex:Gy,fog_fragment:Vy,fog_pars_fragment:Xy,gradientmap_pars_fragment:ky,lightmap_pars_fragment:Wy,lights_lambert_fragment:qy,lights_lambert_pars_fragment:Yy,lights_pars_begin:jy,lights_toon_fragment:Ky,lights_toon_pars_fragment:Qy,lights_phong_fragment:Jy,lights_phong_pars_fragment:$y,lights_physical_fragment:tE,lights_physical_pars_fragment:eE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:aE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:rE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:lE,map_fragment:cE,map_pars_fragment:uE,map_particle_fragment:fE,map_particle_pars_fragment:hE,metalnessmap_fragment:dE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:gE,morphnormal_vertex:_E,morphtarget_pars_vertex:vE,morphtarget_vertex:xE,normal_fragment_begin:SE,normal_fragment_maps:ME,normal_pars_fragment:yE,normal_pars_vertex:EE,normal_vertex:TE,normalmap_pars_fragment:bE,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:wE,opaque_fragment:DE,packing:UE,premultiplied_alpha_fragment:LE,project_vertex:NE,dithering_fragment:OE,dithering_pars_fragment:PE,roughnessmap_fragment:zE,roughnessmap_pars_fragment:FE,shadowmap_pars_fragment:IE,shadowmap_pars_vertex:BE,shadowmap_vertex:HE,shadowmask_pars_fragment:GE,skinbase_vertex:VE,skinning_pars_vertex:XE,skinning_vertex:kE,skinnormal_vertex:WE,specularmap_fragment:qE,specularmap_pars_fragment:YE,tonemapping_fragment:jE,tonemapping_pars_fragment:ZE,transmission_fragment:KE,transmission_pars_fragment:QE,uv_pars_fragment:JE,uv_pars_vertex:$E,uv_vertex:tT,worldpos_vertex:eT,background_vert:nT,background_frag:iT,backgroundCube_vert:aT,backgroundCube_frag:sT,cube_vert:rT,cube_frag:oT,depth_vert:lT,depth_frag:cT,distance_vert:uT,distance_frag:fT,equirect_vert:hT,equirect_frag:dT,linedashed_vert:pT,linedashed_frag:mT,meshbasic_vert:gT,meshbasic_frag:_T,meshlambert_vert:vT,meshlambert_frag:xT,meshmatcap_vert:ST,meshmatcap_frag:MT,meshnormal_vert:yT,meshnormal_frag:ET,meshphong_vert:TT,meshphong_frag:bT,meshphysical_vert:AT,meshphysical_frag:RT,meshtoon_vert:CT,meshtoon_frag:wT,points_vert:DT,points_frag:UT,shadow_vert:LT,shadow_frag:NT,sprite_vert:OT,sprite_frag:PT},Ut={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Ii={basic:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:On([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:On([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new te(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:On([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:On([Ut.points,Ut.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:On([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:On([Ut.common,Ut.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:On([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:On([Ut.sprite,Ut.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:On([Ut.common,Ut.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:On([Ut.lights,Ut.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ii.physical={uniforms:On([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Dc={r:0,b:0,g:0},Ts=new Ma,zT=new Qe;function FT(o,e,i,s,l,u){const h=new te(0);let p=l===!0?0:1,m,d,S=null,x=0,g=null;function y(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const D=C.backgroundBlurriness>0;L=e.get(L,D)}return L}function T(C){let L=!1;const D=y(C);D===null?M(h,p):D&&D.isColor&&(M(D,1),L=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,u):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(C,L){const D=y(L);D&&(D.isCubeTexture||D.mapping===Gc)?(d===void 0&&(d=new Di(new jo(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Pr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(H,B,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Ts.copy(L.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),d.material.uniforms.envMap.value=D,d.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(zT.makeRotationFromEuler(Ts)),d.material.toneMapped=be.getTransfer(D.colorSpace)!==Be,(S!==D||x!==D.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,S=D,x=D.version,g=o.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Di(new Xc(2,2),new _i({name:"BackgroundMaterial",uniforms:Pr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=be.getTransfer(D.colorSpace)!==Be,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(S!==D||x!==D.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,S=D,x=D.version,g=o.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,L){C.getRGB(Dc,rv(o)),i.buffers.color.setClear(Dc.r,Dc.g,Dc.b,L,u)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,L=1){h.set(C),p=L,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,M(h,p)},render:T,addToRenderList:w,dispose:v}}function IT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let u=l,h=!1;function p(I,Y,tt,rt,q){let N=!1;const z=x(I,rt,tt,Y);u!==z&&(u=z,d(u.object)),N=y(I,rt,tt,q),N&&T(I,rt,tt,q),q!==null&&e.update(q,o.ELEMENT_ARRAY_BUFFER),(N||h)&&(h=!1,D(I,Y,tt,rt),q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return o.createVertexArray()}function d(I){return o.bindVertexArray(I)}function S(I){return o.deleteVertexArray(I)}function x(I,Y,tt,rt){const q=rt.wireframe===!0;let N=s[Y.id];N===void 0&&(N={},s[Y.id]=N);const z=I.isInstancedMesh===!0?I.id:0;let ot=N[z];ot===void 0&&(ot={},N[z]=ot);let dt=ot[tt.id];dt===void 0&&(dt={},ot[tt.id]=dt);let Et=dt[q];return Et===void 0&&(Et=g(m()),dt[q]=Et),Et}function g(I){const Y=[],tt=[],rt=[];for(let q=0;q<i;q++)Y[q]=0,tt[q]=0,rt[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:tt,attributeDivisors:rt,object:I,attributes:{},index:null}}function y(I,Y,tt,rt){const q=u.attributes,N=Y.attributes;let z=0;const ot=tt.getAttributes();for(const dt in ot)if(ot[dt].location>=0){const P=q[dt];let Z=N[dt];if(Z===void 0&&(dt==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),dt==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),P===void 0||P.attribute!==Z||Z&&P.data!==Z.data)return!0;z++}return u.attributesNum!==z||u.index!==rt}function T(I,Y,tt,rt){const q={},N=Y.attributes;let z=0;const ot=tt.getAttributes();for(const dt in ot)if(ot[dt].location>=0){let P=N[dt];P===void 0&&(dt==="instanceMatrix"&&I.instanceMatrix&&(P=I.instanceMatrix),dt==="instanceColor"&&I.instanceColor&&(P=I.instanceColor));const Z={};Z.attribute=P,P&&P.data&&(Z.data=P.data),q[dt]=Z,z++}u.attributes=q,u.attributesNum=z,u.index=rt}function w(){const I=u.newAttributes;for(let Y=0,tt=I.length;Y<tt;Y++)I[Y]=0}function M(I){v(I,0)}function v(I,Y){const tt=u.newAttributes,rt=u.enabledAttributes,q=u.attributeDivisors;tt[I]=1,rt[I]===0&&(o.enableVertexAttribArray(I),rt[I]=1),q[I]!==Y&&(o.vertexAttribDivisor(I,Y),q[I]=Y)}function C(){const I=u.newAttributes,Y=u.enabledAttributes;for(let tt=0,rt=Y.length;tt<rt;tt++)Y[tt]!==I[tt]&&(o.disableVertexAttribArray(tt),Y[tt]=0)}function L(I,Y,tt,rt,q,N,z){z===!0?o.vertexAttribIPointer(I,Y,tt,q,N):o.vertexAttribPointer(I,Y,tt,rt,q,N)}function D(I,Y,tt,rt){w();const q=rt.attributes,N=tt.getAttributes(),z=Y.defaultAttributeValues;for(const ot in N){const dt=N[ot];if(dt.location>=0){let Et=q[ot];if(Et===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(Et=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(Et=I.instanceColor)),Et!==void 0){const P=Et.normalized,Z=Et.itemSize,_t=e.get(Et);if(_t===void 0)continue;const At=_t.buffer,zt=_t.type,at=_t.bytesPerElement,vt=zt===o.INT||zt===o.UNSIGNED_INT||Et.gpuType===Nd;if(Et.isInterleavedBufferAttribute){const Tt=Et.data,Vt=Tt.stride,Zt=Et.offset;if(Tt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<dt.locationSize;Jt++)v(dt.location+Jt,Tt.meshPerAttribute);I.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Jt=0;Jt<dt.locationSize;Jt++)M(dt.location+Jt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Jt=0;Jt<dt.locationSize;Jt++)L(dt.location+Jt,Z/dt.locationSize,zt,P,Vt*at,(Zt+Z/dt.locationSize*Jt)*at,vt)}else{if(Et.isInstancedBufferAttribute){for(let Tt=0;Tt<dt.locationSize;Tt++)v(dt.location+Tt,Et.meshPerAttribute);I.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Tt=0;Tt<dt.locationSize;Tt++)M(dt.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Tt=0;Tt<dt.locationSize;Tt++)L(dt.location+Tt,Z/dt.locationSize,zt,P,Z*at,Z/dt.locationSize*Tt*at,vt)}}else if(z!==void 0){const P=z[ot];if(P!==void 0)switch(P.length){case 2:o.vertexAttrib2fv(dt.location,P);break;case 3:o.vertexAttrib3fv(dt.location,P);break;case 4:o.vertexAttrib4fv(dt.location,P);break;default:o.vertexAttrib1fv(dt.location,P)}}}}C()}function H(){U();for(const I in s){const Y=s[I];for(const tt in Y){const rt=Y[tt];for(const q in rt){const N=rt[q];for(const z in N)S(N[z].object),delete N[z];delete rt[q]}}delete s[I]}}function B(I){if(s[I.id]===void 0)return;const Y=s[I.id];for(const tt in Y){const rt=Y[tt];for(const q in rt){const N=rt[q];for(const z in N)S(N[z].object),delete N[z];delete rt[q]}}delete s[I.id]}function F(I){for(const Y in s){const tt=s[Y];for(const rt in tt){const q=tt[rt];if(q[I.id]===void 0)continue;const N=q[I.id];for(const z in N)S(N[z].object),delete N[z];delete q[I.id]}}}function b(I){for(const Y in s){const tt=s[Y],rt=I.isInstancedMesh===!0?I.id:0,q=tt[rt];if(q!==void 0){for(const N in q){const z=q[N];for(const ot in z)S(z[ot].object),delete z[ot];delete q[N]}delete tt[rt],Object.keys(tt).length===0&&delete s[Y]}}}function U(){Q(),h=!0,u!==l&&(u=l,d(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:Q,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfObject:b,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function BT(o,e,i){let s;function l(d){s=d}function u(d,S){o.drawArrays(s,d,S),i.update(S,s,1)}function h(d,S,x){x!==0&&(o.drawArraysInstanced(s,d,S,x),i.update(S,s,x))}function p(d,S,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,S,0,x);let y=0;for(let T=0;T<x;T++)y+=S[T];i.update(y,s,1)}function m(d,S,x,g){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<d.length;T++)h(d[T],S[T],g[T]);else{y.multiDrawArraysInstancedWEBGL(s,d,0,S,0,g,0,x);let T=0;for(let w=0;w<x;w++)T+=S[w]*g[w];i.update(T,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function HT(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==wi&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const b=F===xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ai&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Bi&&!b)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const S=m(d);S!==d&&(re("WebGLRenderer:",d,"not supported, using",S,"instead."),d=S);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:D,maxSamples:H,samples:B}}function GT(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Rs,p=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||s!==0||l;return l=g,s=x.length,y},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,g){i=S(x,g,0)},this.setState=function(x,g,y){const T=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,v=o.get(x);if(!l||T===null||T.length===0||u&&!M)u?S(null):d();else{const C=u?0:s,L=C*4;let D=v.clippingState||null;m.value=D,D=S(T,g,L,y);for(let H=0;H!==L;++H)D[H]=i[H];v.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(x,g,y,T){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=m.value,T!==!0||M===null){const v=y+w*4,C=g.matrixWorldInverse;p.getNormalMatrix(C),(M===null||M.length<v)&&(M=new Float32Array(v));for(let L=0,D=y;L!==w;++L,D+=4)h.copy(x[L]).applyMatrix4(C,p),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const es=4,u_=[.125,.215,.35,.446,.526,.582],ws=20,VT=256,zo=new cv,f_=new te;let Dh=null,Uh=0,Lh=0,Nh=!1;const XT=new $;class h_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:p=XT}=u;Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dh,Uh,Lh),this._renderer.xr.enabled=Nh,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ls||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:xa,format:wi,colorSpace:Or,depthBuffer:!1},l=d_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kT(u)),this._blurMaterial=qT(u,e,i),this._ggxMaterial=WT(u,e,i)}return l}_compileMaterial(e){const i=new Di(new si,e);this._renderer.compile(i,zo)}_sceneToCubeUV(e,i,s,l,u){const m=new ii(90,1,i,s),d=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(f_),x.toneMapping=Gi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new jo,new Vd({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let v=!1;const C=e.background;C?C.isColor&&(M.color.copy(C),e.background=null,v=!0):(M.color.copy(f_),v=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,d[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+S[L],u.y,u.z)):D===1?(m.up.set(0,0,d[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+S[L],u.z)):(m.up.set(0,d[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+S[L]));const H=this._cubeSize;Cr(l,D*H,L>2?H:0,H,H),x.setRenderTarget(l),v&&x.render(w,m),x.render(e,m)}x.toneMapping=y,x.autoClear=g,e.background=C}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ls||e.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;Cr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,zo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-S*S),g=0+d*1.25,y=x*g,{_lodMax:T}=this,w=this._sizeLods[s],M=3*w*(s>T-es?s-T+es:0),v=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=T-i,Cr(u,M,v,3*w,2*w),l.setRenderTarget(u),l.render(p,zo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-s,Cr(e,M,v,3*w,2*w),l.setRenderTarget(e),l.render(p,zo)}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const S=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,y=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*ws-1),w=u/T,M=isFinite(u)?1+Math.floor(S*w):ws;M>ws&&re(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ws}`);const v=[];let C=0;for(let F=0;F<ws;++F){const b=F/w,U=Math.exp(-b*b/2);v.push(U),F===0?C+=U:F<M&&(C+=2*U)}for(let F=0;F<v.length;F++)v[F]=v[F]/C;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=v,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:L}=this;g.dTheta.value=T,g.mipInt.value=L-s;const D=this._sizeLods[l],H=3*D*(l>L-es?l-L+es:0),B=4*(this._cubeSize-D);Cr(i,H,B,3*D,2*D),m.setRenderTarget(i),m.render(x,zo)}}function kT(o){const e=[],i=[],s=[];let l=o;const u=o-es+1+u_.length;for(let h=0;h<u;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>o-es?m=u_[h-o+es-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),S=-d,x=1+d,g=[S,S,x,S,x,x,S,S,x,x,S,x],y=6,T=6,w=3,M=2,v=1,C=new Float32Array(w*T*y),L=new Float32Array(M*T*y),D=new Float32Array(v*T*y);for(let B=0;B<y;B++){const F=B%3*2/3-1,b=B>2?0:-1,U=[F,b,0,F+2/3,b,0,F+2/3,b+1,0,F,b,0,F+2/3,b+1,0,F,b+1,0];C.set(U,w*T*B),L.set(g,M*T*B);const Q=[B,B,B,B,B,B];D.set(Q,v*T*B)}const H=new si;H.setAttribute("position",new gi(C,w)),H.setAttribute("uv",new gi(L,M)),H.setAttribute("faceIndex",new gi(D,v)),s.push(new Di(H,null)),l>es&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function d_(o,e,i){const s=new Vi(o,e,i);return s.texture.mapping=Gc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function WT(o,e,i){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function qT(o,e,i){const s=new Float32Array(ws),l=new $(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kc(),fragmentShader:`

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
			`},l=new jo(5,5,5),u=new _i({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:ga});u.uniforms.tEquirect.value=i;const h=new Di(l,u),p=i.minFilter;return i.minFilter===Ds&&(i.minFilter=Cn),new $M(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}function YT(o){let e=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):u(g)}function u(g){if(g&&g.isTexture){const y=g.mapping;if(y===nh||y===ih)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new fv(T.height);return w.fromEquirectangularTexture(o,g),e.set(g,w),g.addEventListener("dispose",d),p(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,T=y===nh||y===ih,w=y===Ls||y===Lr;if(T||w){let M=i.get(g);const v=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new h_(o)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return T&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new h_(o)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",S),M.texture):null}}}return g}function p(g,y){return y===nh?g.mapping=Ls:y===ih&&(g.mapping=Lr),g}function m(g){let y=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&y++;return y===T}function d(g){const y=g.target;y.removeEventListener("dispose",d);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function S(g){const y=g.target;y.removeEventListener("dispose",S);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function jT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Hc("WebGLRenderer: "+s+" extension not supported."),l}}}function ZT(o,e,i,s){const l={},u=new WeakMap;function h(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const y=u.get(g);y&&(e.remove(y),u.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)e.update(g[y],o.ARRAY_BUFFER)}function d(x){const g=[],y=x.index,T=x.attributes.position;let w=0;if(T===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let L=0,D=C.length;L<D;L+=3){const H=C[L+0],B=C[L+1],F=C[L+2];g.push(H,B,B,F,F,H)}}else{const C=T.array;w=T.version;for(let L=0,D=C.length/3-1;L<D;L+=3){const H=L+0,B=L+1,F=L+2;g.push(H,B,B,F,F,H)}}const M=new(T.count>=65535?nv:ev)(g,1);M.version=w;const v=u.get(x);v&&e.remove(v),u.set(x,M)}function S(x){const g=u.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&d(x)}else d(x);return u.get(x)}return{get:p,update:m,getWireframeAttribute:S}}function KT(o,e,i){let s;function l(g){s=g}let u,h;function p(g){u=g.type,h=g.bytesPerElement}function m(g,y){o.drawElements(s,y,u,g*h),i.update(y,s,1)}function d(g,y,T){T!==0&&(o.drawElementsInstanced(s,y,u,g*h,T),i.update(y,s,T))}function S(g,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,g,0,T);let M=0;for(let v=0;v<T;v++)M+=y[v];i.update(M,s,1)}function x(g,y,T,w){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<g.length;v++)d(g[v]/h,y[v],w[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,u,g,0,w,0,T);let v=0;for(let C=0;C<T;C++)v+=y[C]*w[C];i.update(v,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=S,this.renderMultiDrawInstances=x}function QT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:De("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function JT(o,e,i){const s=new WeakMap,l=new en;function u(h,p,m){const d=h.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=S!==void 0?S.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let Q=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",Q)};var y=Q;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],L=p.morphAttributes.color||[];let D=0;T===!0&&(D=1),w===!0&&(D=2),M===!0&&(D=3);let H=p.attributes.position.count*D,B=1;H>e.maxTextureSize&&(B=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const F=new Float32Array(H*B*4*x),b=new J_(F,H,B,x);b.type=Bi,b.needsUpdate=!0;const U=D*4;for(let I=0;I<x;I++){const Y=v[I],tt=C[I],rt=L[I],q=H*B*4*I;for(let N=0;N<Y.count;N++){const z=N*U;T===!0&&(l.fromBufferAttribute(Y,N),F[q+z+0]=l.x,F[q+z+1]=l.y,F[q+z+2]=l.z,F[q+z+3]=0),w===!0&&(l.fromBufferAttribute(tt,N),F[q+z+4]=l.x,F[q+z+5]=l.y,F[q+z+6]=l.z,F[q+z+7]=0),M===!0&&(l.fromBufferAttribute(rt,N),F[q+z+8]=l.x,F[q+z+9]=l.y,F[q+z+10]=l.z,F[q+z+11]=rt.itemSize===4?l.w:1)}}g={count:x,texture:b,size:new Ae(H,B)},s.set(p,g),p.addEventListener("dispose",Q)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<d.length;M++)T+=d[M];const w=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:u}}function $T(o,e,i,s,l){let u=new WeakMap;function h(d){const S=l.render.frame,x=d.geometry,g=e.get(d,x);if(u.get(g)!==S&&(e.update(g),u.set(g,S)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),u.get(d)!==S&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),u.set(d,S))),d.isSkinnedMesh){const y=d.skeleton;u.get(y)!==S&&(y.update(),u.set(y,S))}return g}function p(){u=new WeakMap}function m(d){const S=d.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:h,dispose:p}}const tb={[z_]:"LINEAR_TONE_MAPPING",[F_]:"REINHARD_TONE_MAPPING",[I_]:"CINEON_TONE_MAPPING",[B_]:"ACES_FILMIC_TONE_MAPPING",[G_]:"AGX_TONE_MAPPING",[V_]:"NEUTRAL_TONE_MAPPING",[H_]:"CUSTOM_TONE_MAPPING"};function eb(o,e,i,s,l){const u=new Vi(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Vi(e,i,{type:xa,depthBuffer:!1,stencilBuffer:!1}),p=new si;p.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const m=new qM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Di(p,m),S=new cv(-1,1,1,-1,0,1);let x=null,g=null,y=!1,T,w=null,M=[],v=!1;this.setSize=function(C,L){u.setSize(C,L),h.setSize(C,L);for(let D=0;D<M.length;D++){const H=M[D];H.setSize&&H.setSize(C,L)}},this.setEffects=function(C){M=C,v=M.length>0&&M[0].isRenderPass===!0;const L=u.width,D=u.height;for(let H=0;H<M.length;H++){const B=M[H];B.setSize&&B.setSize(L,D)}},this.begin=function(C,L){if(y||C.toneMapping===Gi&&M.length===0)return!1;if(w=L,L!==null){const D=L.width,H=L.height;(u.width!==D||u.height!==H)&&this.setSize(D,H)}return v===!1&&C.setRenderTarget(u),T=C.toneMapping,C.toneMapping=Gi,!0},this.hasRenderPass=function(){return v},this.end=function(C,L){C.toneMapping=T,y=!0;let D=u,H=h;for(let B=0;B<M.length;B++){const F=M[B];if(F.enabled!==!1&&(F.render(C,H,D,L),F.needsSwap!==!1)){const b=D;D=H,H=b}}if(x!==C.outputColorSpace||g!==C.toneMapping){x=C.outputColorSpace,g=C.toneMapping,m.defines={},be.getTransfer(x)===Be&&(m.defines.SRGB_TRANSFER="");const B=tb[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(w),C.render(d,S),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),h.dispose(),p.dispose(),m.dispose()}}const hv=new Pn,wd=new ko(1,1),dv=new J_,pv=new MM,mv=new av,g_=[],__=[],v_=new Float32Array(16),x_=new Float32Array(9),S_=new Float32Array(4);function Ir(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=g_[l];if(u===void 0&&(u=new Float32Array(l),g_[l]=u),e!==0){s.toArray(u,0);for(let h=1,p=0;h!==e;++h)p+=i,o[h].toArray(u,p)}return u}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Wc(o,e){let i=__[e];i===void 0&&(i=new Int32Array(e),__[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function nb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function rb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;S_.set(s),o.uniformMatrix2fv(this.addr,!1,S_),_n(i,s)}}function ob(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;x_.set(s),o.uniformMatrix3fv(this.addr,!1,x_),_n(i,s)}}function lb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;v_.set(s),o.uniformMatrix4fv(this.addr,!1,v_),_n(i,s)}}function cb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function hb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function db(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function pb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function mb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function gb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function _b(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(wd.compareFunction=i.isReversedDepthBuffer()?Hd:Bd,u=wd):u=hv,i.setTexture2D(e||u,l)}function vb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||pv,l)}function xb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||mv,l)}function Sb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||dv,l)}function Mb(o){switch(o){case 5126:return nb;case 35664:return ib;case 35665:return ab;case 35666:return sb;case 35674:return rb;case 35675:return ob;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return fb;case 35669:case 35673:return hb;case 5125:return db;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return Sb}}function yb(o,e){o.uniform1fv(this.addr,e)}function Eb(o,e){const i=Ir(e,this.size,2);o.uniform2fv(this.addr,i)}function Tb(o,e){const i=Ir(e,this.size,3);o.uniform3fv(this.addr,i)}function bb(o,e){const i=Ir(e,this.size,4);o.uniform4fv(this.addr,i)}function Ab(o,e){const i=Ir(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Rb(o,e){const i=Ir(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Cb(o,e){const i=Ir(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function wb(o,e){o.uniform1iv(this.addr,e)}function Db(o,e){o.uniform2iv(this.addr,e)}function Ub(o,e){o.uniform3iv(this.addr,e)}function Lb(o,e){o.uniform4iv(this.addr,e)}function Nb(o,e){o.uniform1uiv(this.addr,e)}function Ob(o,e){o.uniform2uiv(this.addr,e)}function Pb(o,e){o.uniform3uiv(this.addr,e)}function zb(o,e){o.uniform4uiv(this.addr,e)}function Fb(o,e,i){const s=this.cache,l=e.length,u=Wc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=wd:h=hv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,u[p])}function Ib(o,e,i){const s=this.cache,l=e.length,u=Wc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||pv,u[h])}function Bb(o,e,i){const s=this.cache,l=e.length,u=Wc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||mv,u[h])}function Hb(o,e,i){const s=this.cache,l=e.length,u=Wc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||dv,u[h])}function Gb(o){switch(o){case 5126:return yb;case 35664:return Eb;case 35665:return Tb;case 35666:return bb;case 35674:return Ab;case 35675:return Rb;case 35676:return Cb;case 5124:case 35670:return wb;case 35667:case 35671:return Db;case 35668:case 35672:return Ub;case 35669:case 35673:return Lb;case 5125:return Nb;case 36294:return Ob;case 36295:return Pb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Bb;case 36289:case 36303:case 36311:case 36292:return Hb}}class Vb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Mb(i.type)}}class Xb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Gb(i.type)}}class kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const p=l[u];p.setValue(e,i[p.id],s)}}}const Oh=/(\w+)(\])?(\[|\.)?/g;function M_(o,e){o.seq.push(e),o.map[e.id]=e}function Wb(o,e,i){const s=o.name,l=s.length;for(Oh.lastIndex=0;;){const u=Oh.exec(s),h=Oh.lastIndex;let p=u[1];const m=u[2]==="]",d=u[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){M_(i,d===void 0?new Vb(p,o,e):new Xb(p,o,e));break}else{let x=i.map[p];x===void 0&&(x=new kb(p),M_(i,x)),i=x}}}class Fc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);Wb(p,m,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const p=i[u],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function y_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const qb=37297;let Yb=0;function jb(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const E_=new he;function Zb(o){be._getMatrix(E_,be.workingColorSpace,o);const e=`mat3( ${E_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Ic:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function T_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+jb(o.getShaderSource(e),p)}else return u}function Kb(o,e){const i=Zb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Qb={[z_]:"Linear",[F_]:"Reinhard",[I_]:"Cineon",[B_]:"ACESFilmic",[G_]:"AgX",[V_]:"Neutral",[H_]:"Custom"};function Jb(o,e){const i=Qb[e];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new $;function $b(){be.getLuminanceCoefficients(Uc);const o=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function e1(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function n1(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:p}}return i}function Ho(o){return o!==""}function b_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(o){return o.replace(i1,s1)}const a1=new Map;function s1(o,e){let i=de[e];if(i===void 0){const s=a1.get(e);if(s!==void 0)i=de[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Dd(i)}const r1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R_(o){return o.replace(r1,o1)}function o1(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function C_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const l1={[Lc]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function c1(o){return l1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const u1={[Ls]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[Gc]:"ENVMAP_TYPE_CUBE_UV"};function f1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":u1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const h1={[Lr]:"ENVMAP_MODE_REFRACTION"};function d1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":h1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const p1={[P_]:"ENVMAP_BLENDING_MULTIPLY",[$S]:"ENVMAP_BLENDING_MIX",[tM]:"ENVMAP_BLENDING_ADD"};function m1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":p1[o.combine]||"ENVMAP_BLENDING_NONE"}function g1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function _1(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=c1(i),d=f1(i),S=d1(i),x=m1(i),g=g1(i),y=t1(i),T=e1(u),w=l.createProgram();let M,v,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ho).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ho).join(`
`),v.length>0&&(v+=`
`)):(M=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),v=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+S:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?de.tonemapping_pars_fragment:"",i.toneMapping!==Gi?Jb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Kb("linearToOutputTexel",i.outputColorSpace),$b(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),h=Dd(h),h=b_(h,i),h=A_(h,i),p=Dd(p),p=b_(p,i),p=A_(p,i),h=R_(h),p=R_(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===Hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=C+M+h,D=C+v+p,H=y_(l,l.VERTEX_SHADER,L),B=y_(l,l.FRAGMENT_SHADER,D);l.attachShader(w,H),l.attachShader(w,B),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function F(I){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(w)||"",tt=l.getShaderInfoLog(H)||"",rt=l.getShaderInfoLog(B)||"",q=Y.trim(),N=tt.trim(),z=rt.trim();let ot=!0,dt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,H,B);else{const Et=T_(l,H,"vertex"),P=T_(l,B,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+q+`
`+Et+`
`+P)}else q!==""?re("WebGLProgram: Program Info Log:",q):(N===""||z==="")&&(dt=!1);dt&&(I.diagnostics={runnable:ot,programLog:q,vertexShader:{log:N,prefix:M},fragmentShader:{log:z,prefix:v}})}l.deleteShader(H),l.deleteShader(B),b=new Fc(l,w),U=n1(l,w)}let b;this.getUniforms=function(){return b===void 0&&F(this),b};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let Q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=l.getProgramParameter(w,qb)),Q},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Yb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=B,this}let v1=0;class x1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new S1(e),i.set(e,s)),s}}class S1{constructor(e){this.id=v1++,this.code=e,this.usedTimes=0}}function M1(o,e,i,s,l,u){const h=new $_,p=new x1,m=new Set,d=[],S=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,U,Q,I,Y){const tt=I.fog,rt=Y.geometry,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,z=e.get(b.envMap||q,N),ot=z&&z.mapping===Gc?z.image.height:null,dt=y[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&re("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const Et=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,P=Et!==void 0?Et.length:0;let Z=0;rt.morphAttributes.position!==void 0&&(Z=1),rt.morphAttributes.normal!==void 0&&(Z=2),rt.morphAttributes.color!==void 0&&(Z=3);let _t,At,zt,at;if(dt){const Ee=Ii[dt];_t=Ee.vertexShader,At=Ee.fragmentShader}else _t=b.vertexShader,At=b.fragmentShader,p.update(b),zt=p.getVertexShaderID(b),at=p.getFragmentShaderID(b);const vt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Vt=Y.isInstancedMesh===!0,Zt=Y.isBatchedMesh===!0,Jt=!!b.map,Je=!!b.matcap,_e=!!z,pe=!!b.aoMap,Ue=!!b.lightMap,oe=!!b.bumpMap,Ke=!!b.normalMap,V=!!b.displacementMap,qe=!!b.emissiveMap,ye=!!b.metalnessMap,Ne=!!b.roughnessMap,Wt=b.anisotropy>0,O=b.clearcoat>0,E=b.dispersion>0,j=b.iridescence>0,pt=b.sheen>0,xt=b.transmission>0,ft=Wt&&!!b.anisotropyMap,Xt=O&&!!b.clearcoatMap,Ct=O&&!!b.clearcoatNormalMap,jt=O&&!!b.clearcoatRoughnessMap,$t=j&&!!b.iridescenceMap,yt=j&&!!b.iridescenceThicknessMap,St=pt&&!!b.sheenColorMap,Nt=pt&&!!b.sheenRoughnessMap,Lt=!!b.specularMap,Ot=!!b.specularColorMap,ce=!!b.specularIntensityMap,W=xt&&!!b.transmissionMap,Rt=xt&&!!b.thicknessMap,bt=!!b.gradientMap,Pt=!!b.alphaMap,Mt=b.alphaTest>0,ut=!!b.alphaHash,It=!!b.extensions;let ne=Gi;b.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const ze={shaderID:dt,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:At,defines:b.defines,customVertexShaderID:zt,customFragmentShaderID:at,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Zt,batchingColor:Zt&&Y._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&Y.instanceColor!==null,instancingMorph:Vt&&Y.morphTexture!==null,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Or,alphaToCoverage:!!b.alphaToCoverage,map:Jt,matcap:Je,envMap:_e,envMapMode:_e&&z.mapping,envMapCubeUVHeight:ot,aoMap:pe,lightMap:Ue,bumpMap:oe,normalMap:Ke,displacementMap:V,emissiveMap:qe,normalMapObjectSpace:Ke&&b.normalMapType===aM,normalMapTangentSpace:Ke&&b.normalMapType===iM,metalnessMap:ye,roughnessMap:Ne,anisotropy:Wt,anisotropyMap:ft,clearcoat:O,clearcoatMap:Xt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:jt,dispersion:E,iridescence:j,iridescenceMap:$t,iridescenceThicknessMap:yt,sheen:pt,sheenColorMap:St,sheenRoughnessMap:Nt,specularMap:Lt,specularColorMap:Ot,specularIntensityMap:ce,transmission:xt,transmissionMap:W,thicknessMap:Rt,gradientMap:bt,opaque:b.transparent===!1&&b.blending===wr&&b.alphaToCoverage===!1,alphaMap:Pt,alphaTest:Mt,alphaHash:ut,combine:b.combine,mapUv:Jt&&T(b.map.channel),aoMapUv:pe&&T(b.aoMap.channel),lightMapUv:Ue&&T(b.lightMap.channel),bumpMapUv:oe&&T(b.bumpMap.channel),normalMapUv:Ke&&T(b.normalMap.channel),displacementMapUv:V&&T(b.displacementMap.channel),emissiveMapUv:qe&&T(b.emissiveMap.channel),metalnessMapUv:ye&&T(b.metalnessMap.channel),roughnessMapUv:Ne&&T(b.roughnessMap.channel),anisotropyMapUv:ft&&T(b.anisotropyMap.channel),clearcoatMapUv:Xt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:St&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&T(b.sheenRoughnessMap.channel),specularMapUv:Lt&&T(b.specularMap.channel),specularColorMapUv:Ot&&T(b.specularColorMap.channel),specularIntensityMapUv:ce&&T(b.specularIntensityMap.channel),transmissionMapUv:W&&T(b.transmissionMap.channel),thicknessMapUv:Rt&&T(b.thicknessMap.channel),alphaMapUv:Pt&&T(b.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Ke||Wt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!rt.attributes.uv&&(Jt||Pt),fog:!!tt,useFog:b.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||rt.attributes.normal===void 0&&Ke===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Tt,skinning:Y.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Z,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&Q.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:Jt&&b.map.isVideoTexture===!0&&be.getTransfer(b.map.colorSpace)===Be,decodeVideoTextureEmissive:qe&&b.emissiveMap.isVideoTexture===!0&&be.getTransfer(b.emissiveMap.colorSpace)===Be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pa,flipSided:b.side===Wn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:It&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&b.extensions.multiDraw===!0||Zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ze.vertexUv1s=m.has(1),ze.vertexUv2s=m.has(2),ze.vertexUv3s=m.has(3),m.clear(),ze}function M(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Q in b.defines)U.push(Q),U.push(b.defines[Q]);return b.isRawShaderMaterial===!1&&(v(U,b),C(U,b),U.push(o.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function v(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function C(b,U){h.disableAll(),U.instancing&&h.enable(0),U.instancingColor&&h.enable(1),U.instancingMorph&&h.enable(2),U.matcap&&h.enable(3),U.envMap&&h.enable(4),U.normalMapObjectSpace&&h.enable(5),U.normalMapTangentSpace&&h.enable(6),U.clearcoat&&h.enable(7),U.iridescence&&h.enable(8),U.alphaTest&&h.enable(9),U.vertexColors&&h.enable(10),U.vertexAlphas&&h.enable(11),U.vertexUv1s&&h.enable(12),U.vertexUv2s&&h.enable(13),U.vertexUv3s&&h.enable(14),U.vertexTangents&&h.enable(15),U.anisotropy&&h.enable(16),U.alphaHash&&h.enable(17),U.batching&&h.enable(18),U.dispersion&&h.enable(19),U.batchingColor&&h.enable(20),U.gradientMap&&h.enable(21),b.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.reversedDepthBuffer&&h.enable(4),U.skinning&&h.enable(5),U.morphTargets&&h.enable(6),U.morphNormals&&h.enable(7),U.morphColors&&h.enable(8),U.premultipliedAlpha&&h.enable(9),U.shadowMapEnabled&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.decodeVideoTextureEmissive&&h.enable(20),U.alphaToCoverage&&h.enable(21),b.push(h.mask)}function L(b){const U=y[b.type];let Q;if(U){const I=Ii[U];Q=XM.clone(I.uniforms)}else Q=b.uniforms;return Q}function D(b,U){let Q=S.get(U);return Q!==void 0?++Q.usedTimes:(Q=new _1(o,U,b,l),d.push(Q),S.set(U,Q)),Q}function H(b){if(--b.usedTimes===0){const U=d.indexOf(b);d[U]=d[d.length-1],d.pop(),S.delete(b.cacheKey),b.destroy()}}function B(b){p.remove(b)}function F(){p.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:L,acquireProgram:D,releaseProgram:H,releaseShaderCache:B,programs:d,dispose:F}}function y1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function s(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function E1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function w_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function D_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,T,w,M,v){let C=o[e];return C===void 0?(C={id:g.id,object:g,geometry:y,material:T,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:v},o[e]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=T,C.materialVariant=h(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=v),e++,C}function m(g,y,T,w,M,v){const C=p(g,y,T,w,M,v);T.transmission>0?s.push(C):T.transparent===!0?l.push(C):i.push(C)}function d(g,y,T,w,M,v){const C=p(g,y,T,w,M,v);T.transmission>0?s.unshift(C):T.transparent===!0?l.unshift(C):i.unshift(C)}function S(g,y){i.length>1&&i.sort(g||E1),s.length>1&&s.sort(y||w_),l.length>1&&l.sort(y||w_)}function x(){for(let g=e,y=o.length;g<y;g++){const T=o[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:d,finish:x,sort:S}}function T1(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new D_,o.set(s,[h])):l>=u.length?(h=new D_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function b1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new te};break;case"SpotLight":i={position:new $,direction:new $,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new te,groundColor:new te};break;case"RectAreaLight":i={color:new te,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=i,i}}}function A1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let R1=0;function C1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function w1(o){const e=new b1,i=A1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new $);const l=new $,u=new Qe,h=new Qe;function p(d){let S=0,x=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let y=0,T=0,w=0,M=0,v=0,C=0,L=0,D=0,H=0,B=0,F=0;d.sort(C1);for(let U=0,Q=d.length;U<Q;U++){const I=d[U],Y=I.color,tt=I.intensity,rt=I.distance;let q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Nr?q=I.shadow.map.texture:q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)S+=Y.r*tt,x+=Y.g*tt,g+=Y.b*tt;else if(I.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(I.sh.coefficients[N],tt);F++}else if(I.isDirectionalLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,ot=i.get(I);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,s.directionalShadow[y]=ot,s.directionalShadowMap[y]=q,s.directionalShadowMatrix[y]=I.shadow.matrix,C++}s.directional[y]=N,y++}else if(I.isSpotLight){const N=e.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(Y).multiplyScalar(tt),N.distance=rt,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,s.spot[w]=N;const z=I.shadow;if(I.map&&(s.spotLightMap[H]=I.map,H++,z.updateMatrices(I),I.castShadow&&B++),s.spotLightMatrix[w]=z.matrix,I.castShadow){const ot=i.get(I);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,s.spotShadow[w]=ot,s.spotShadowMap[w]=q,D++}w++}else if(I.isRectAreaLight){const N=e.get(I);N.color.copy(Y).multiplyScalar(tt),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),s.rectArea[M]=N,M++}else if(I.isPointLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){const z=I.shadow,ot=i.get(I);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,ot.shadowCameraNear=z.camera.near,ot.shadowCameraFar=z.camera.far,s.pointShadow[T]=ot,s.pointShadowMap[T]=q,s.pointShadowMatrix[T]=I.shadow.matrix,L++}s.point[T]=N,T++}else if(I.isHemisphereLight){const N=e.get(I);N.skyColor.copy(I.color).multiplyScalar(tt),N.groundColor.copy(I.groundColor).multiplyScalar(tt),s.hemi[v]=N,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=x,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==y||b.pointLength!==T||b.spotLength!==w||b.rectAreaLength!==M||b.hemiLength!==v||b.numDirectionalShadows!==C||b.numPointShadows!==L||b.numSpotShadows!==D||b.numSpotMaps!==H||b.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+H-B,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=F,b.directionalLength=y,b.pointLength=T,b.spotLength=w,b.rectAreaLength=M,b.hemiLength=v,b.numDirectionalShadows=C,b.numPointShadows=L,b.numSpotShadows=D,b.numSpotMaps=H,b.numLightProbes=F,s.version=R1++)}function m(d,S){let x=0,g=0,y=0,T=0,w=0;const M=S.matrixWorldInverse;for(let v=0,C=d.length;v<C;v++){const L=d[v];if(L.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),x++}else if(L.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),h.identity(),u.copy(L.matrixWorld),u.premultiply(M),h.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),g++}else if(L.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(M),w++}}}return{setup:p,setupView:m,state:s}}function U_(o){const e=new w1(o),i=[],s=[];function l(S){d.camera=S,i.length=0,s.length=0}function u(S){i.push(S)}function h(S){s.push(S)}function p(){e.setup(i)}function m(S){e.setupView(i,S)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:h}}function D1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let p;return h===void 0?(p=new U_(o),e.set(l,[p])):u>=h.length?(p=new U_(o),h.push(p)):p=h[u],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const U1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L1=`uniform sampler2D shadow_pass;
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
}`,N1=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],O1=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],L_=new Qe,Fo=new $,Ph=new $;function P1(o,e,i){let s=new Xd;const l=new Ae,u=new Ae,h=new en,p=new YM,m=new jM,d={},S=i.maxTextureSize,x={[va]:Wn,[Wn]:va,[pa]:pa},g=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:U1,fragmentShader:L1}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new si;T.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Di(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let v=this.type;this.render=function(B,F,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;this.type===OS&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lc);const U=o.getRenderTarget(),Q=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(ga),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const tt=v!==this.type;tt&&F.traverse(function(rt){rt.material&&(Array.isArray(rt.material)?rt.material.forEach(q=>q.needsUpdate=!0):rt.material.needsUpdate=!0)});for(let rt=0,q=B.length;rt<q;rt++){const N=B[rt],z=N.shadow;if(z===void 0){re("WebGLShadowMap:",N,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const ot=z.getFrameExtents();l.multiply(ot),u.copy(z.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/ot.x),l.x=u.x*ot.x,z.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/ot.y),l.y=u.y*ot.y,z.mapSize.y=u.y));const dt=o.state.buffers.depth.getReversed();if(z.camera._reversedDepth=dt,z.map===null||tt===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Io){if(N.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Vi(l.x,l.y,{format:Nr,type:xa,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),z.map.texture.name=N.name+".shadowMap",z.map.depthTexture=new ko(l.x,l.y,Bi),z.map.depthTexture.name=N.name+".shadowMapDepth",z.map.depthTexture.format=Sa,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Tn,z.map.depthTexture.magFilter=Tn}else N.isPointLight?(z.map=new fv(l.x),z.map.depthTexture=new GM(l.x,Xi)):(z.map=new Vi(l.x,l.y),z.map.depthTexture=new ko(l.x,l.y,Xi)),z.map.depthTexture.name=N.name+".shadowMap",z.map.depthTexture.format=Sa,this.type===Lc?(z.map.depthTexture.compareFunction=dt?Hd:Bd,z.map.depthTexture.minFilter=Cn,z.map.depthTexture.magFilter=Cn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Tn,z.map.depthTexture.magFilter=Tn);z.camera.updateProjectionMatrix()}const Et=z.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Et;P++){if(z.map.isWebGLCubeRenderTarget)o.setRenderTarget(z.map,P),o.clear();else{P===0&&(o.setRenderTarget(z.map),o.clear());const Z=z.getViewport(P);h.set(u.x*Z.x,u.y*Z.y,u.x*Z.z,u.y*Z.w),Y.viewport(h)}if(N.isPointLight){const Z=z.camera,_t=z.matrix,At=N.distance||Z.far;At!==Z.far&&(Z.far=At,Z.updateProjectionMatrix()),Fo.setFromMatrixPosition(N.matrixWorld),Z.position.copy(Fo),Ph.copy(Z.position),Ph.add(N1[P]),Z.up.copy(O1[P]),Z.lookAt(Ph),Z.updateMatrixWorld(),_t.makeTranslation(-Fo.x,-Fo.y,-Fo.z),L_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),z._frustum.setFromProjectionMatrix(L_,Z.coordinateSystem,Z.reversedDepth)}else z.updateMatrices(N);s=z.getFrustum(),D(F,b,z.camera,N,this.type)}z.isPointLightShadow!==!0&&this.type===Io&&C(z,b),z.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(U,Q,I)};function C(B,F){const b=e.update(w);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Vi(l.x,l.y,{format:Nr,type:xa})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(F,null,b,g,w,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(F,null,b,y,w,null)}function L(B,F,b,U){let Q=null;const I=b.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(I!==void 0)Q=I;else if(Q=b.isPointLight===!0?m:p,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Y=Q.uuid,tt=F.uuid;let rt=d[Y];rt===void 0&&(rt={},d[Y]=rt);let q=rt[tt];q===void 0&&(q=Q.clone(),rt[tt]=q,F.addEventListener("dispose",H)),Q=q}if(Q.visible=F.visible,Q.wireframe=F.wireframe,U===Io?Q.side=F.shadowSide!==null?F.shadowSide:F.side:Q.side=F.shadowSide!==null?F.shadowSide:x[F.side],Q.alphaMap=F.alphaMap,Q.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Q.map=F.map,Q.clipShadows=F.clipShadows,Q.clippingPlanes=F.clippingPlanes,Q.clipIntersection=F.clipIntersection,Q.displacementMap=F.displacementMap,Q.displacementScale=F.displacementScale,Q.displacementBias=F.displacementBias,Q.wireframeLinewidth=F.wireframeLinewidth,Q.linewidth=F.linewidth,b.isPointLight===!0&&Q.isMeshDistanceMaterial===!0){const Y=o.properties.get(Q);Y.light=b}return Q}function D(B,F,b,U,Q){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&Q===Io)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,B.matrixWorld);const tt=e.update(B),rt=B.material;if(Array.isArray(rt)){const q=tt.groups;for(let N=0,z=q.length;N<z;N++){const ot=q[N],dt=rt[ot.materialIndex];if(dt&&dt.visible){const Et=L(B,dt,U,Q);B.onBeforeShadow(o,B,F,b,tt,Et,ot),o.renderBufferDirect(b,null,tt,Et,B,ot),B.onAfterShadow(o,B,F,b,tt,Et,ot)}}}else if(rt.visible){const q=L(B,rt,U,Q);B.onBeforeShadow(o,B,F,b,tt,q,null),o.renderBufferDirect(b,null,tt,q,B,null),B.onAfterShadow(o,B,F,b,tt,q,null)}}const Y=B.children;for(let tt=0,rt=Y.length;tt<rt;tt++)D(Y[tt],F,b,U,Q)}function H(B){B.target.removeEventListener("dispose",H);for(const b in d){const U=d[b],Q=B.target.uuid;Q in U&&(U[Q].dispose(),delete U[Q])}}}function z1(o,e){function i(){let W=!1;const Rt=new en;let bt=null;const Pt=new en(0,0,0,0);return{setMask:function(Mt){bt!==Mt&&!W&&(o.colorMask(Mt,Mt,Mt,Mt),bt=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,ut,It,ne,ze){ze===!0&&(Mt*=ne,ut*=ne,It*=ne),Rt.set(Mt,ut,It,ne),Pt.equals(Rt)===!1&&(o.clearColor(Mt,ut,It,ne),Pt.copy(Rt))},reset:function(){W=!1,bt=null,Pt.set(-1,0,0,0)}}}function s(){let W=!1,Rt=!1,bt=null,Pt=null,Mt=null;return{setReversed:function(ut){if(Rt!==ut){const It=e.get("EXT_clip_control");ut?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Rt=ut;const ne=Mt;Mt=null,this.setClear(ne)}},getReversed:function(){return Rt},setTest:function(ut){ut?vt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(ut){bt!==ut&&!W&&(o.depthMask(ut),bt=ut)},setFunc:function(ut){if(Rt&&(ut=pM[ut]),Pt!==ut){switch(ut){case Hh:o.depthFunc(o.NEVER);break;case Gh:o.depthFunc(o.ALWAYS);break;case Vh:o.depthFunc(o.LESS);break;case Ur:o.depthFunc(o.LEQUAL);break;case Xh:o.depthFunc(o.EQUAL);break;case kh:o.depthFunc(o.GEQUAL);break;case Wh:o.depthFunc(o.GREATER);break;case qh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=ut}},setLocked:function(ut){W=ut},setClear:function(ut){Mt!==ut&&(Mt=ut,Rt&&(ut=1-ut),o.clearDepth(ut))},reset:function(){W=!1,bt=null,Pt=null,Mt=null,Rt=!1}}}function l(){let W=!1,Rt=null,bt=null,Pt=null,Mt=null,ut=null,It=null,ne=null,ze=null;return{setTest:function(Ee){W||(Ee?vt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Ee){Rt!==Ee&&!W&&(o.stencilMask(Ee),Rt=Ee)},setFunc:function(Ee,wn,vi){(bt!==Ee||Pt!==wn||Mt!==vi)&&(o.stencilFunc(Ee,wn,vi),bt=Ee,Pt=wn,Mt=vi)},setOp:function(Ee,wn,vi){(ut!==Ee||It!==wn||ne!==vi)&&(o.stencilOp(Ee,wn,vi),ut=Ee,It=wn,ne=vi)},setLocked:function(Ee){W=Ee},setClear:function(Ee){ze!==Ee&&(o.clearStencil(Ee),ze=Ee)},reset:function(){W=!1,Rt=null,bt=null,Pt=null,Mt=null,ut=null,It=null,ne=null,ze=null}}}const u=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let S={},x={},g=new WeakMap,y=[],T=null,w=!1,M=null,v=null,C=null,L=null,D=null,H=null,B=null,F=new te(0,0,0),b=0,U=!1,Q=null,I=null,Y=null,tt=null,rt=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,z=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ot)[1]),N=z>=1):ot.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),N=z>=2);let dt=null,Et={};const P=o.getParameter(o.SCISSOR_BOX),Z=o.getParameter(o.VIEWPORT),_t=new en().fromArray(P),At=new en().fromArray(Z);function zt(W,Rt,bt,Pt){const Mt=new Uint8Array(4),ut=o.createTexture();o.bindTexture(W,ut),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<bt;It++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Rt+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return ut}const at={};at[o.TEXTURE_2D]=zt(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=zt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=zt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=zt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),p.setClear(0),vt(o.DEPTH_TEST),h.setFunc(Ur),oe(!1),Ke(Pg),vt(o.CULL_FACE),pe(ga);function vt(W){S[W]!==!0&&(o.enable(W),S[W]=!0)}function Tt(W){S[W]!==!1&&(o.disable(W),S[W]=!1)}function Vt(W,Rt){return x[W]!==Rt?(o.bindFramebuffer(W,Rt),x[W]=Rt,W===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Rt),W===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Zt(W,Rt){let bt=y,Pt=!1;if(W){bt=g.get(Rt),bt===void 0&&(bt=[],g.set(Rt,bt));const Mt=W.textures;if(bt.length!==Mt.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let ut=0,It=Mt.length;ut<It;ut++)bt[ut]=o.COLOR_ATTACHMENT0+ut;bt.length=Mt.length,Pt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(bt)}function Jt(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const Je={[Cs]:o.FUNC_ADD,[zS]:o.FUNC_SUBTRACT,[FS]:o.FUNC_REVERSE_SUBTRACT};Je[IS]=o.MIN,Je[BS]=o.MAX;const _e={[HS]:o.ZERO,[GS]:o.ONE,[VS]:o.SRC_COLOR,[Ih]:o.SRC_ALPHA,[jS]:o.SRC_ALPHA_SATURATE,[qS]:o.DST_COLOR,[kS]:o.DST_ALPHA,[XS]:o.ONE_MINUS_SRC_COLOR,[Bh]:o.ONE_MINUS_SRC_ALPHA,[YS]:o.ONE_MINUS_DST_COLOR,[WS]:o.ONE_MINUS_DST_ALPHA,[ZS]:o.CONSTANT_COLOR,[KS]:o.ONE_MINUS_CONSTANT_COLOR,[QS]:o.CONSTANT_ALPHA,[JS]:o.ONE_MINUS_CONSTANT_ALPHA};function pe(W,Rt,bt,Pt,Mt,ut,It,ne,ze,Ee){if(W===ga){w===!0&&(Tt(o.BLEND),w=!1);return}if(w===!1&&(vt(o.BLEND),w=!0),W!==PS){if(W!==M||Ee!==U){if((v!==Cs||D!==Cs)&&(o.blendEquation(o.FUNC_ADD),v=Cs,D=Cs),Ee)switch(W){case wr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fh:o.blendFunc(o.ONE,o.ONE);break;case zg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Fg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:De("WebGLState: Invalid blending: ",W);break}else switch(W){case wr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case zg:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fg:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",W);break}C=null,L=null,H=null,B=null,F.set(0,0,0),b=0,M=W,U=Ee}return}Mt=Mt||Rt,ut=ut||bt,It=It||Pt,(Rt!==v||Mt!==D)&&(o.blendEquationSeparate(Je[Rt],Je[Mt]),v=Rt,D=Mt),(bt!==C||Pt!==L||ut!==H||It!==B)&&(o.blendFuncSeparate(_e[bt],_e[Pt],_e[ut],_e[It]),C=bt,L=Pt,H=ut,B=It),(ne.equals(F)===!1||ze!==b)&&(o.blendColor(ne.r,ne.g,ne.b,ze),F.copy(ne),b=ze),M=W,U=!1}function Ue(W,Rt){W.side===pa?Tt(o.CULL_FACE):vt(o.CULL_FACE);let bt=W.side===Wn;Rt&&(bt=!bt),oe(bt),W.blending===wr&&W.transparent===!1?pe(ga):pe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const Pt=W.stencilWrite;p.setTest(Pt),Pt&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),qe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){Q!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),Q=W)}function Ke(W){W!==LS?(vt(o.CULL_FACE),W!==I&&(W===Pg?o.cullFace(o.BACK):W===NS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),I=W}function V(W){W!==Y&&(N&&o.lineWidth(W),Y=W)}function qe(W,Rt,bt){W?(vt(o.POLYGON_OFFSET_FILL),(tt!==Rt||rt!==bt)&&(tt=Rt,rt=bt,h.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,bt))):Tt(o.POLYGON_OFFSET_FILL)}function ye(W){W?vt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Ne(W){W===void 0&&(W=o.TEXTURE0+q-1),dt!==W&&(o.activeTexture(W),dt=W)}function Wt(W,Rt,bt){bt===void 0&&(dt===null?bt=o.TEXTURE0+q-1:bt=dt);let Pt=Et[bt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Et[bt]=Pt),(Pt.type!==W||Pt.texture!==Rt)&&(dt!==bt&&(o.activeTexture(bt),dt=bt),o.bindTexture(W,Rt||at[W]),Pt.type=W,Pt.texture=Rt)}function O(){const W=Et[dt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function j(){try{o.compressedTexImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function pt(){try{o.texSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function xt(){try{o.texSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function Ct(){try{o.texStorage2D(...arguments)}catch(W){De("WebGLState:",W)}}function jt(){try{o.texStorage3D(...arguments)}catch(W){De("WebGLState:",W)}}function $t(){try{o.texImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function yt(){try{o.texImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function St(W){_t.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function Nt(W){At.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Lt(W,Rt){let bt=d.get(Rt);bt===void 0&&(bt=new WeakMap,d.set(Rt,bt));let Pt=bt.get(W);Pt===void 0&&(Pt=o.getUniformBlockIndex(Rt,W.name),bt.set(W,Pt))}function Ot(W,Rt){const Pt=d.get(Rt).get(W);m.get(Rt)!==Pt&&(o.uniformBlockBinding(Rt,Pt,W.__bindingPointIndex),m.set(Rt,Pt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},dt=null,Et={},x={},g=new WeakMap,y=[],T=null,w=!1,M=null,v=null,C=null,L=null,D=null,H=null,B=null,F=new te(0,0,0),b=0,U=!1,Q=null,I=null,Y=null,tt=null,rt=null,_t.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),p.reset()}return{buffers:{color:u,depth:h,stencil:p},enable:vt,disable:Tt,bindFramebuffer:Vt,drawBuffers:Zt,useProgram:Jt,setBlending:pe,setMaterial:Ue,setFlipSided:oe,setCullFace:Ke,setLineWidth:V,setPolygonOffset:qe,setScissorTest:ye,activeTexture:Ne,bindTexture:Wt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:j,texImage2D:$t,texImage3D:yt,updateUBOMapping:Lt,uniformBlockBinding:Ot,texStorage2D:Ct,texStorage3D:jt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Xt,scissor:St,viewport:Nt,reset:ce}}function F1(o,e,i,s,l,u,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ae,S=new WeakMap;let x;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,E){return y?new OffscreenCanvas(O,E):Bc("canvas")}function w(O,E,j){let pt=1;const xt=Wt(O);if((xt.width>j||xt.height>j)&&(pt=j/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ft=Math.floor(pt*xt.width),Xt=Math.floor(pt*xt.height);x===void 0&&(x=T(ft,Xt));const Ct=E?T(ft,Xt):x;return Ct.width=ft,Ct.height=Xt,Ct.getContext("2d").drawImage(O,0,0,ft,Xt),re("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ft+"x"+Xt+")."),Ct}else return"data"in O&&re("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),O;return O}function M(O){return O.generateMipmaps}function v(O){o.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,E,j,pt,xt=!1){if(O!==null){if(o[O]!==void 0)return o[O];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ft=E;if(E===o.RED&&(j===o.FLOAT&&(ft=o.R32F),j===o.HALF_FLOAT&&(ft=o.R16F),j===o.UNSIGNED_BYTE&&(ft=o.R8)),E===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(ft=o.R8UI),j===o.UNSIGNED_SHORT&&(ft=o.R16UI),j===o.UNSIGNED_INT&&(ft=o.R32UI),j===o.BYTE&&(ft=o.R8I),j===o.SHORT&&(ft=o.R16I),j===o.INT&&(ft=o.R32I)),E===o.RG&&(j===o.FLOAT&&(ft=o.RG32F),j===o.HALF_FLOAT&&(ft=o.RG16F),j===o.UNSIGNED_BYTE&&(ft=o.RG8)),E===o.RG_INTEGER&&(j===o.UNSIGNED_BYTE&&(ft=o.RG8UI),j===o.UNSIGNED_SHORT&&(ft=o.RG16UI),j===o.UNSIGNED_INT&&(ft=o.RG32UI),j===o.BYTE&&(ft=o.RG8I),j===o.SHORT&&(ft=o.RG16I),j===o.INT&&(ft=o.RG32I)),E===o.RGB_INTEGER&&(j===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),j===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),j===o.UNSIGNED_INT&&(ft=o.RGB32UI),j===o.BYTE&&(ft=o.RGB8I),j===o.SHORT&&(ft=o.RGB16I),j===o.INT&&(ft=o.RGB32I)),E===o.RGBA_INTEGER&&(j===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),j===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),j===o.UNSIGNED_INT&&(ft=o.RGBA32UI),j===o.BYTE&&(ft=o.RGBA8I),j===o.SHORT&&(ft=o.RGBA16I),j===o.INT&&(ft=o.RGBA32I)),E===o.RGB&&(j===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),j===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),E===o.RGBA){const Xt=xt?Ic:be.getTransfer(pt);j===o.FLOAT&&(ft=o.RGBA32F),j===o.HALF_FLOAT&&(ft=o.RGBA16F),j===o.UNSIGNED_BYTE&&(ft=Xt===Be?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function D(O,E){let j;return O?E===null||E===Xi||E===Vo?j=o.DEPTH24_STENCIL8:E===Bi?j=o.DEPTH32F_STENCIL8:E===Go&&(j=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===Vo?j=o.DEPTH_COMPONENT24:E===Bi?j=o.DEPTH_COMPONENT32F:E===Go&&(j=o.DEPTH_COMPONENT16),j}function H(O,E){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Tn&&O.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function B(O){const E=O.target;E.removeEventListener("dispose",B),b(E),E.isVideoTexture&&S.delete(E)}function F(O){const E=O.target;E.removeEventListener("dispose",F),Q(E)}function b(O){const E=s.get(O);if(E.__webglInit===void 0)return;const j=O.source,pt=g.get(j);if(pt){const xt=pt[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&U(O),Object.keys(pt).length===0&&g.delete(j)}s.remove(O)}function U(O){const E=s.get(O);o.deleteTexture(E.__webglTexture);const j=O.source,pt=g.get(j);delete pt[E.__cacheKey],h.memory.textures--}function Q(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let xt=0;xt<E.__webglFramebuffer[pt].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[pt][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[pt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=O.textures;for(let pt=0,xt=j.length;pt<xt;pt++){const ft=s.get(j[pt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),s.remove(j[pt])}s.remove(O)}let I=0;function Y(){I=0}function tt(){const O=I;return O>=l.maxTextures&&re("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),I+=1,O}function rt(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function q(O,E){const j=s.get(O);if(O.isVideoTexture&&ye(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&j.__version!==O.version){const pt=O.image;if(pt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{at(j,O,E);return}}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+E)}function N(O,E){const j=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){at(j,O,E);return}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+E)}function z(O,E){const j=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){at(j,O,E);return}i.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+E)}function ot(O,E){const j=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&j.__version!==O.version){vt(j,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+E)}const dt={[Yh]:o.REPEAT,[ma]:o.CLAMP_TO_EDGE,[jh]:o.MIRRORED_REPEAT},Et={[Tn]:o.NEAREST,[eM]:o.NEAREST_MIPMAP_NEAREST,[lc]:o.NEAREST_MIPMAP_LINEAR,[Cn]:o.LINEAR,[ah]:o.LINEAR_MIPMAP_NEAREST,[Ds]:o.LINEAR_MIPMAP_LINEAR},P={[sM]:o.NEVER,[uM]:o.ALWAYS,[rM]:o.LESS,[Bd]:o.LEQUAL,[oM]:o.EQUAL,[Hd]:o.GEQUAL,[lM]:o.GREATER,[cM]:o.NOTEQUAL};function Z(O,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===ah||E.magFilter===lc||E.magFilter===Ds||E.minFilter===Cn||E.minFilter===ah||E.minFilter===lc||E.minFilter===Ds)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,dt[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,dt[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,dt[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Et[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==lc&&E.minFilter!==Ds||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function _t(O,E){let j=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",B));const pt=E.source;let xt=g.get(pt);xt===void 0&&(xt={},g.set(pt,xt));const ft=rt(E);if(ft!==O.__cacheKey){xt[ft]===void 0&&(xt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,j=!0),xt[ft].usedTimes++;const Xt=xt[O.__cacheKey];Xt!==void 0&&(xt[O.__cacheKey].usedTimes--,Xt.usedTimes===0&&U(E)),O.__cacheKey=ft,O.__webglTexture=xt[ft].texture}return j}function At(O,E,j){return Math.floor(Math.floor(O/j)/E)}function zt(O,E,j,pt){const ft=O.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,j,pt,E.data);else{ft.sort((yt,St)=>yt.start-St.start);let Xt=0;for(let yt=1;yt<ft.length;yt++){const St=ft[Xt],Nt=ft[yt],Lt=St.start+St.count,Ot=At(Nt.start,E.width,4),ce=At(St.start,E.width,4);Nt.start<=Lt+1&&Ot===ce&&At(Nt.start+Nt.count-1,E.width,4)===Ot?St.count=Math.max(St.count,Nt.start+Nt.count-St.start):(++Xt,ft[Xt]=Nt)}ft.length=Xt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),$t=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let yt=0,St=ft.length;yt<St;yt++){const Nt=ft[yt],Lt=Math.floor(Nt.start/4),Ot=Math.ceil(Nt.count/4),ce=Lt%E.width,W=Math.floor(Lt/E.width),Rt=Ot,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ce,W,Rt,bt,j,pt,E.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,$t)}}function at(O,E,j){let pt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=o.TEXTURE_3D);const xt=_t(O,E),ft=E.source;i.bindTexture(pt,O.__webglTexture,o.TEXTURE0+j);const Xt=s.get(ft);if(ft.version!==Xt.__version||xt===!0){i.activeTexture(o.TEXTURE0+j);const Ct=be.getPrimaries(be.workingColorSpace),jt=E.colorSpace===ts?null:be.getPrimaries(E.colorSpace),$t=E.colorSpace===ts||Ct===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let yt=w(E.image,!1,l.maxTextureSize);yt=Ne(E,yt);const St=u.convert(E.format,E.colorSpace),Nt=u.convert(E.type);let Lt=L(E.internalFormat,St,Nt,E.colorSpace,E.isVideoTexture);Z(pt,E);let Ot;const ce=E.mipmaps,W=E.isVideoTexture!==!0,Rt=Xt.__version===void 0||xt===!0,bt=ft.dataReady,Pt=H(E,yt);if(E.isDepthTexture)Lt=D(E.format===Us,E.type),Rt&&(W?i.texStorage2D(o.TEXTURE_2D,1,Lt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Lt,yt.width,yt.height,0,St,Nt,null));else if(E.isDataTexture)if(ce.length>0){W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Lt,ce[0].width,ce[0].height);for(let Mt=0,ut=ce.length;Mt<ut;Mt++)Ot=ce[Mt],W?bt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Nt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,St,Nt,Ot.data);E.generateMipmaps=!1}else W?(Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Lt,yt.width,yt.height),bt&&zt(E,yt,St,Nt)):i.texImage2D(o.TEXTURE_2D,0,Lt,yt.width,yt.height,0,St,Nt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Lt,ce[0].width,ce[0].height,yt.depth);for(let Mt=0,ut=ce.length;Mt<ut;Mt++)if(Ot=ce[Mt],E.format!==wi)if(St!==null)if(W){if(bt)if(E.layerUpdates.size>0){const It=c_(Ot.width,Ot.height,E.format,E.type);for(const ne of E.layerUpdates){const ze=Ot.data.subarray(ne*It/Ot.data.BYTES_PER_ELEMENT,(ne+1)*It/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ne,Ot.width,Ot.height,1,St,ze)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,St,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Lt,Ot.width,Ot.height,yt.depth,0,Ot.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,yt.depth,St,Nt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Lt,Ot.width,Ot.height,yt.depth,0,St,Nt,Ot.data)}else{W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Pt,Lt,ce[0].width,ce[0].height);for(let Mt=0,ut=ce.length;Mt<ut;Mt++)Ot=ce[Mt],E.format!==wi?St!==null?W?bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,Ot.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?bt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,St,Nt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Lt,Ot.width,Ot.height,0,St,Nt,Ot.data)}else if(E.isDataArrayTexture)if(W){if(Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Lt,yt.width,yt.height,yt.depth),bt)if(E.layerUpdates.size>0){const Mt=c_(yt.width,yt.height,E.format,E.type);for(const ut of E.layerUpdates){const It=yt.data.subarray(ut*Mt/yt.data.BYTES_PER_ELEMENT,(ut+1)*Mt/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ut,yt.width,yt.height,1,St,Nt,It)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,St,Nt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Lt,yt.width,yt.height,yt.depth,0,St,Nt,yt.data);else if(E.isData3DTexture)W?(Rt&&i.texStorage3D(o.TEXTURE_3D,Pt,Lt,yt.width,yt.height,yt.depth),bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,St,Nt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Lt,yt.width,yt.height,yt.depth,0,St,Nt,yt.data);else if(E.isFramebufferTexture){if(Rt)if(W)i.texStorage2D(o.TEXTURE_2D,Pt,Lt,yt.width,yt.height);else{let Mt=yt.width,ut=yt.height;for(let It=0;It<Pt;It++)i.texImage2D(o.TEXTURE_2D,It,Lt,Mt,ut,0,St,Nt,null),Mt>>=1,ut>>=1}}else if(ce.length>0){if(W&&Rt){const Mt=Wt(ce[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height)}for(let Mt=0,ut=ce.length;Mt<ut;Mt++)Ot=ce[Mt],W?bt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,St,Nt,Ot):i.texImage2D(o.TEXTURE_2D,Mt,Lt,St,Nt,Ot);E.generateMipmaps=!1}else if(W){if(Rt){const Mt=Wt(yt);i.texStorage2D(o.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height)}bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,St,Nt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Lt,St,Nt,yt);M(E)&&v(pt),Xt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function vt(O,E,j){if(E.image.length!==6)return;const pt=_t(O,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+j);const ft=s.get(xt);if(xt.version!==ft.__version||pt===!0){i.activeTexture(o.TEXTURE0+j);const Xt=be.getPrimaries(be.workingColorSpace),Ct=E.colorSpace===ts?null:be.getPrimaries(E.colorSpace),jt=E.colorSpace===ts||Xt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const $t=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,St=[];for(let ut=0;ut<6;ut++)!$t&&!yt?St[ut]=w(E.image[ut],!0,l.maxCubemapSize):St[ut]=yt?E.image[ut].image:E.image[ut],St[ut]=Ne(E,St[ut]);const Nt=St[0],Lt=u.convert(E.format,E.colorSpace),Ot=u.convert(E.type),ce=L(E.internalFormat,Lt,Ot,E.colorSpace),W=E.isVideoTexture!==!0,Rt=ft.__version===void 0||pt===!0,bt=xt.dataReady;let Pt=H(E,Nt);Z(o.TEXTURE_CUBE_MAP,E);let Mt;if($t){W&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ce,Nt.width,Nt.height);for(let ut=0;ut<6;ut++){Mt=St[ut].mipmaps;for(let It=0;It<Mt.length;It++){const ne=Mt[It];E.format!==wi?Lt!==null?W?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,0,0,ne.width,ne.height,Lt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,ce,ne.width,ne.height,0,ne.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,0,0,ne.width,ne.height,Lt,Ot,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,ce,ne.width,ne.height,0,Lt,Ot,ne.data)}}}else{if(Mt=E.mipmaps,W&&Rt){Mt.length>0&&Pt++;const ut=Wt(St[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ce,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(yt){W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,St[ut].width,St[ut].height,Lt,Ot,St[ut].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ce,St[ut].width,St[ut].height,0,Lt,Ot,St[ut].data);for(let It=0;It<Mt.length;It++){const ze=Mt[It].image[ut].image;W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,0,0,ze.width,ze.height,Lt,Ot,ze.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,ce,ze.width,ze.height,0,Lt,Ot,ze.data)}}else{W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Lt,Ot,St[ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ce,Lt,Ot,St[ut]);for(let It=0;It<Mt.length;It++){const ne=Mt[It];W?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,0,0,Lt,Ot,ne.image[ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,ce,Lt,Ot,ne.image[ut])}}}M(E)&&v(o.TEXTURE_CUBE_MAP),ft.__version=xt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Tt(O,E,j,pt,xt,ft){const Xt=u.convert(j.format,j.colorSpace),Ct=u.convert(j.type),jt=L(j.internalFormat,Xt,Ct,j.colorSpace),$t=s.get(E),yt=s.get(j);if(yt.__renderTarget=E,!$t.__hasExternalTextures){const St=Math.max(1,E.width>>ft),Nt=Math.max(1,E.height>>ft);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ft,jt,St,Nt,E.depth,0,Xt,Ct,null):i.texImage2D(xt,ft,jt,St,Nt,0,Xt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),qe(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,xt,yt.__webglTexture,0,V(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,xt,yt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(O,E,j){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const pt=E.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ft=D(E.stencilBuffer,xt),Xt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;qe(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),ft,E.width,E.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),ft,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ft,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,O)}else{const pt=E.textures;for(let xt=0;xt<pt.length;xt++){const ft=pt[xt],Xt=u.convert(ft.format,ft.colorSpace),Ct=u.convert(ft.type),jt=L(ft.internalFormat,Xt,Ct,ft.colorSpace);qe(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),jt,E.width,E.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),jt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,jt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Zt(O,E,j){const pt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(E.depthTexture);if(xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),Z(o.TEXTURE_CUBE_MAP,E.depthTexture);const $t=u.convert(E.depthTexture.format),yt=u.convert(E.depthTexture.type);let St;E.depthTexture.format===Sa?St=o.DEPTH_COMPONENT24:E.depthTexture.format===Us&&(St=o.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,St,E.width,E.height,0,$t,yt,null)}}else q(E.depthTexture,0);const ft=xt.__webglTexture,Xt=V(E),Ct=pt?o.TEXTURE_CUBE_MAP_POSITIVE_X+j:o.TEXTURE_2D,jt=E.depthTexture.format===Us?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Sa)qe(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ct,ft,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ct,ft,0);else if(E.depthTexture.format===Us)qe(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ct,ft,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ct,ft,0);else throw new Error("Unknown depthTexture format")}function Jt(O){const E=s.get(O),j=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const pt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=pt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let pt=0;pt<6;pt++)Zt(E.__webglFramebuffer[pt],O,pt);else{const pt=O.texture.mipmaps;pt&&pt.length>0?Zt(E.__webglFramebuffer[0],O,0):Zt(E.__webglFramebuffer,O,0)}else if(j){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=o.createRenderbuffer(),Vt(E.__webglDepthbuffer[pt],O,!1);else{const xt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ft)}}else{const pt=O.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Vt(E.__webglDepthbuffer,O,!1);else{const xt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(O,E,j){const pt=s.get(O);E!==void 0&&Tt(pt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&Jt(O)}function _e(O){const E=O.texture,j=s.get(O),pt=s.get(E);O.addEventListener("dispose",F);const xt=O.textures,ft=O.isWebGLCubeRenderTarget===!0,Xt=xt.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=E.version,h.memory.textures++),ft){j.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Ct]=[];for(let jt=0;jt<E.mipmaps.length;jt++)j.__webglFramebuffer[Ct][jt]=o.createFramebuffer()}else j.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)j.__webglFramebuffer[Ct]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Ct=0,jt=xt.length;Ct<jt;Ct++){const $t=s.get(xt[Ct]);$t.__webglTexture===void 0&&($t.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&qe(O)===!1){j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const jt=xt[Ct];j.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[Ct]);const $t=u.convert(jt.format,jt.colorSpace),yt=u.convert(jt.type),St=L(jt.internalFormat,$t,yt,jt.colorSpace,O.isXRRenderTarget===!0),Nt=V(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,St,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,j.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),Vt(j.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),Z(o.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Tt(j.__webglFramebuffer[Ct][jt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,jt);else Tt(j.__webglFramebuffer[Ct],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ct=0,jt=xt.length;Ct<jt;Ct++){const $t=xt[Ct],yt=s.get($t);let St=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(St=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(St,yt.__webglTexture),Z(St,$t),Tt(j.__webglFramebuffer,O,$t,o.COLOR_ATTACHMENT0+Ct,St,0),M($t)&&v(St)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ct=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,pt.__webglTexture),Z(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Tt(j.__webglFramebuffer[jt],O,E,o.COLOR_ATTACHMENT0,Ct,jt);else Tt(j.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,Ct,0);M(E)&&v(Ct),i.unbindTexture()}O.depthBuffer&&Jt(O)}function pe(O){const E=O.textures;for(let j=0,pt=E.length;j<pt;j++){const xt=E[j];if(M(xt)){const ft=C(O),Xt=s.get(xt).__webglTexture;i.bindTexture(ft,Xt),v(ft),i.unbindTexture()}}}const Ue=[],oe=[];function Ke(O){if(O.samples>0){if(qe(O)===!1){const E=O.textures,j=O.width,pt=O.height;let xt=o.COLOR_BUFFER_BIT;const ft=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(O),Ct=E.length>1;if(Ct)for(let $t=0;$t<E.length;$t++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const jt=O.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let $t=0;$t<E.length;$t++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[$t]);const yt=s.get(E[$t]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,j,pt,0,0,j,pt,xt,o.NEAREST),m===!0&&(Ue.length=0,oe.length=0,Ue.push(o.COLOR_ATTACHMENT0+$t),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ue.push(ft),oe.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,oe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let $t=0;$t<E.length;$t++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[$t]);const yt=s.get(E[$t]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function V(O){return Math.min(l.maxSamples,O.samples)}function qe(O){const E=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ye(O){const E=h.render.frame;S.get(O)!==E&&(S.set(O,E),O.update())}function Ne(O,E){const j=O.colorSpace,pt=O.format,xt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||j!==Or&&j!==ts&&(be.getTransfer(j)===Be?(pt!==wi||xt!==ai)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",j)),E}function Wt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=tt,this.resetTextureUnits=Y,this.setTexture2D=q,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=ot,this.rebindTextures=Je,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function I1(o,e){function i(s,l=ts){let u;const h=be.getTransfer(l);if(s===ai)return o.UNSIGNED_BYTE;if(s===Od)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Pd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===q_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Y_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===k_)return o.BYTE;if(s===W_)return o.SHORT;if(s===Go)return o.UNSIGNED_SHORT;if(s===Nd)return o.INT;if(s===Xi)return o.UNSIGNED_INT;if(s===Bi)return o.FLOAT;if(s===xa)return o.HALF_FLOAT;if(s===j_)return o.ALPHA;if(s===Z_)return o.RGB;if(s===wi)return o.RGBA;if(s===Sa)return o.DEPTH_COMPONENT;if(s===Us)return o.DEPTH_STENCIL;if(s===K_)return o.RED;if(s===zd)return o.RED_INTEGER;if(s===Nr)return o.RG;if(s===Fd)return o.RG_INTEGER;if(s===Id)return o.RGBA_INTEGER;if(s===Nc||s===Oc||s===Pc||s===zc)if(h===Be)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Nc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Nc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Zh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===$h||s===td)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===ed)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===nd)return u.COMPRESSED_R11_EAC;if(s===id)return u.COMPRESSED_SIGNED_R11_EAC;if(s===ad)return u.COMPRESSED_RG11_EAC;if(s===sd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===rd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===od)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ld)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ud)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===md)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_d)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sd||s===Md||s===yd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Sd)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Md)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ed||s===Td||s===bd||s===Ad)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Ed)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Td)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ad)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const B1=`
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

}`;class G1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new sv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new _i({vertexShader:B1,fragmentShader:H1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new Xc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V1 extends zr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,p="local-floor",m=1,d=null,S=null,x=null,g=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",M=new G1,v={},C=i.getContextAttributes();let L=null,D=null;const H=[],B=[],F=new Ae;let b=null;const U=new ii;U.viewport=new en;const Q=new ii;Q.viewport=new en;const I=[U,Q],Y=new ty;let tt=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let vt=H[at];return vt===void 0&&(vt=new hh,H[at]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(at){let vt=H[at];return vt===void 0&&(vt=new hh,H[at]=vt),vt.getGripSpace()},this.getHand=function(at){let vt=H[at];return vt===void 0&&(vt=new hh,H[at]=vt),vt.getHandSpace()};function q(at){const vt=B.indexOf(at.inputSource);if(vt===-1)return;const Tt=H[vt];Tt!==void 0&&(Tt.update(at.inputSource,at.frame,d||h),Tt.dispatchEvent({type:at.type,data:at.inputSource}))}function N(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",z);for(let at=0;at<H.length;at++){const vt=B[at];vt!==null&&(B[at]=null,H[at].disconnect(vt))}tt=null,rt=null,M.reset();for(const at in v)delete v[at];e.setRenderTarget(L),y=null,g=null,x=null,l=null,D=null,zt.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){u=at,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){p=at,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(at){d=at},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",N),l.addEventListener("inputsourceschange",z),C.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Vt=null,Zt=null;C.depth&&(Zt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=C.stencil?Us:Sa,Vt=C.stencil?Vo:Xi);const Jt={colorFormat:i.RGBA8,depthFormat:Zt,scaleFactor:u};x=this.getBinding(),g=x.createProjectionLayer(Jt),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new Vi(g.textureWidth,g.textureHeight,{format:wi,type:ai,depthTexture:new ko(g.textureWidth,g.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Tt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Vi(y.framebufferWidth,y.framebufferHeight,{format:wi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),zt.setContext(l),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function z(at){for(let vt=0;vt<at.removed.length;vt++){const Tt=at.removed[vt],Vt=B.indexOf(Tt);Vt>=0&&(B[Vt]=null,H[Vt].disconnect(Tt))}for(let vt=0;vt<at.added.length;vt++){const Tt=at.added[vt];let Vt=B.indexOf(Tt);if(Vt===-1){for(let Jt=0;Jt<H.length;Jt++)if(Jt>=B.length){B.push(Tt),Vt=Jt;break}else if(B[Jt]===null){B[Jt]=Tt,Vt=Jt;break}if(Vt===-1)break}const Zt=H[Vt];Zt&&Zt.connect(Tt)}}const ot=new $,dt=new $;function Et(at,vt,Tt){ot.setFromMatrixPosition(vt.matrixWorld),dt.setFromMatrixPosition(Tt.matrixWorld);const Vt=ot.distanceTo(dt),Zt=vt.projectionMatrix.elements,Jt=Tt.projectionMatrix.elements,Je=Zt[14]/(Zt[10]-1),_e=Zt[14]/(Zt[10]+1),pe=(Zt[9]+1)/Zt[5],Ue=(Zt[9]-1)/Zt[5],oe=(Zt[8]-1)/Zt[0],Ke=(Jt[8]+1)/Jt[0],V=Je*oe,qe=Je*Ke,ye=Vt/(-oe+Ke),Ne=ye*-oe;if(vt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ne),at.translateZ(ye),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Zt[10]===-1)at.projectionMatrix.copy(vt.projectionMatrix),at.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Wt=Je+ye,O=_e+ye,E=V-Ne,j=qe+(Vt-Ne),pt=pe*_e/O*Wt,xt=Ue*_e/O*Wt;at.projectionMatrix.makePerspective(E,j,pt,xt,Wt,O),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function P(at,vt){vt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(vt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let vt=at.near,Tt=at.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),Y.near=Q.near=U.near=vt,Y.far=Q.far=U.far=Tt,(tt!==Y.near||rt!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),tt=Y.near,rt=Y.far),Y.layers.mask=at.layers.mask|6,U.layers.mask=Y.layers.mask&-5,Q.layers.mask=Y.layers.mask&-3;const Vt=at.parent,Zt=Y.cameras;P(Y,Vt);for(let Jt=0;Jt<Zt.length;Jt++)P(Zt[Jt],Vt);Zt.length===2?Et(Y,U,Q):Y.projectionMatrix.copy(U.projectionMatrix),Z(at,Y,Vt)};function Z(at,vt,Tt){Tt===null?at.matrix.copy(vt.matrixWorld):(at.matrix.copy(Tt.matrixWorld),at.matrix.invert(),at.matrix.multiply(vt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(vt.projectionMatrix),at.projectionMatrixInverse.copy(vt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Rd*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(at){m=at,g!==null&&(g.fixedFoveation=at),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=at)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(at){return v[at]};let _t=null;function At(at,vt){if(S=vt.getViewerPose(d||h),T=vt,S!==null){const Tt=S.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let Vt=!1;Tt.length!==Y.cameras.length&&(Y.cameras.length=0,Vt=!0);for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e];let Ue=null;if(y!==null)Ue=y.getViewport(pe);else{const Ke=x.getViewSubImage(g,pe);Ue=Ke.viewport,_e===0&&(e.setRenderTargetTextures(D,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(D))}let oe=I[_e];oe===void 0&&(oe=new ii,oe.layers.enable(_e),oe.viewport=new en,I[_e]=oe),oe.matrix.fromArray(pe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(pe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),_e===0&&(Y.matrix.copy(oe.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Vt===!0&&Y.cameras.push(oe)}const Zt=l.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const _e=x.getDepthInformation(Tt[0]);_e&&_e.isValid&&_e.texture&&M.init(_e,l.renderState)}if(Zt&&Zt.includes("camera-access")&&w){e.state.unbindTexture(),x=s.getBinding();for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e].camera;if(pe){let Ue=v[pe];Ue||(Ue=new sv,v[pe]=Ue);const oe=x.getCameraImage(pe);Ue.sourceTexture=oe}}}}for(let Tt=0;Tt<H.length;Tt++){const Vt=B[Tt],Zt=H[Tt];Vt!==null&&Zt!==void 0&&Zt.update(Vt,vt,d||h)}_t&&_t(at,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),T=null}const zt=new uv;zt.setAnimationLoop(At),this.setAnimationLoop=function(at){_t=at},this.dispose=function(){}}}const bs=new Ma,X1=new Qe;function k1(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,rv(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,C,L,D){v.isMeshBasicMaterial?u(M,v):v.isMeshLambertMaterial?(u(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(u(M,v),x(M,v)):v.isMeshPhongMaterial?(u(M,v),S(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(u(M,v),g(M,v),v.isMeshPhysicalMaterial&&y(M,v,D)):v.isMeshMatcapMaterial?(u(M,v),T(M,v)):v.isMeshDepthMaterial?u(M,v):v.isMeshDistanceMaterial?(u(M,v),w(M,v)):v.isMeshNormalMaterial?u(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&p(M,v)):v.isPointsMaterial?m(M,v,C,L):v.isSpriteMaterial?d(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Wn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Wn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const C=e.get(v),L=C.envMap,D=C.envMapRotation;L&&(M.envMap.value=L,bs.copy(D),bs.x*=-1,bs.y*=-1,bs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),M.envMapRotation.value.setFromMatrix4(X1.makeRotationFromEuler(bs)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function p(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,C,L){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*C,M.scale.value=L*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function S(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function g(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,C){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Wn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,v){v.matcap&&(M.matcap.value=v.matcap)}function w(M,v){const C=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function W1(o,e,i,s){let l={},u={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const D=L.program;s.uniformBlockBinding(C,D)}function d(C,L){let D=l[C.id];D===void 0&&(T(C),D=S(C),l[C.id]=D,C.addEventListener("dispose",M));const H=L.program;s.updateUBOMapping(C,H);const B=e.render.frame;u[C.id]!==B&&(g(C),u[C.id]=B)}function S(C){const L=x();C.__bindingPointIndex=L;const D=o.createBuffer(),H=C.__size,B=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function x(){for(let C=0;C<p;C++)if(h.indexOf(C)===-1)return h.push(C),C;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=l[C.id],D=C.uniforms,H=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let B=0,F=D.length;B<F;B++){const b=Array.isArray(D[B])?D[B]:[D[B]];for(let U=0,Q=b.length;U<Q;U++){const I=b[U];if(y(I,B,U,H)===!0){const Y=I.__offset,tt=Array.isArray(I.value)?I.value:[I.value];let rt=0;for(let q=0;q<tt.length;q++){const N=tt[q],z=w(N);typeof N=="number"||typeof N=="boolean"?(I.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,Y+rt,I.__data)):N.isMatrix3?(I.__data[0]=N.elements[0],I.__data[1]=N.elements[1],I.__data[2]=N.elements[2],I.__data[3]=0,I.__data[4]=N.elements[3],I.__data[5]=N.elements[4],I.__data[6]=N.elements[5],I.__data[7]=0,I.__data[8]=N.elements[6],I.__data[9]=N.elements[7],I.__data[10]=N.elements[8],I.__data[11]=0):(N.toArray(I.__data,rt),rt+=z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,L,D,H){const B=C.value,F=L+"_"+D;if(H[F]===void 0)return typeof B=="number"||typeof B=="boolean"?H[F]=B:H[F]=B.clone(),!0;{const b=H[F];if(typeof B=="number"||typeof B=="boolean"){if(b!==B)return H[F]=B,!0}else if(b.equals(B)===!1)return b.copy(B),!0}return!1}function T(C){const L=C.uniforms;let D=0;const H=16;for(let F=0,b=L.length;F<b;F++){const U=Array.isArray(L[F])?L[F]:[L[F]];for(let Q=0,I=U.length;Q<I;Q++){const Y=U[Q],tt=Array.isArray(Y.value)?Y.value:[Y.value];for(let rt=0,q=tt.length;rt<q;rt++){const N=tt[rt],z=w(N),ot=D%H,dt=ot%z.boundary,Et=ot+dt;D+=dt,Et!==0&&H-Et<z.storage&&(D+=H-Et),Y.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=z.storage}}}const B=D%H;return B>0&&(D+=H-B),C.__size=D,C.__cache={},this}function w(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",C),L}function M(C){const L=C.target;L.removeEventListener("dispose",M);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function v(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},u={}}return{bind:m,update:d,dispose:v}}const q1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function Y1(){return Fi===null&&(Fi=new PM(q1,16,16,Nr,xa),Fi.name="DFG_LUT",Fi.minFilter=Cn,Fi.magFilter=Cn,Fi.wrapS=ma,Fi.wrapT=ma,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class j1{constructor(e={}){const{canvas:i=hM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ai}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const w=y,M=new Set([Id,Fd,zd]),v=new Set([ai,Xi,Go,Vo,Od,Pd]),C=new Uint32Array(4),L=new Int32Array(4);let D=null,H=null;const B=[],F=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let Q=!1;this._outputColorSpace=mi;let I=0,Y=0,tt=null,rt=-1,q=null;const N=new en,z=new en;let ot=null;const dt=new te(0);let Et=0,P=i.width,Z=i.height,_t=1,At=null,zt=null;const at=new en(0,0,P,Z),vt=new en(0,0,P,Z);let Tt=!1;const Vt=new Xd;let Zt=!1,Jt=!1;const Je=new Qe,_e=new $,pe=new en,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ke(){return tt===null?_t:1}let V=s;function qe(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:S,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ld}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",ne,!1),i.addEventListener("webglcontextcreationerror",ze,!1),V===null){const k="webgl2";if(V=qe(k,R),V===null)throw qe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw De("WebGLRenderer: "+R.message),R}let ye,Ne,Wt,O,E,j,pt,xt,ft,Xt,Ct,jt,$t,yt,St,Nt,Lt,Ot,ce,W,Rt,bt,Pt;function Mt(){ye=new jT(V),ye.init(),Rt=new I1(V,ye),Ne=new HT(V,ye,e,Rt),Wt=new z1(V,ye),Ne.reversedDepthBuffer&&g&&Wt.buffers.depth.setReversed(!0),O=new QT(V),E=new y1,j=new F1(V,ye,Wt,E,Ne,Rt,O),pt=new YT(U),xt=new ny(V),bt=new IT(V,xt),ft=new ZT(V,xt,O,bt),Xt=new $T(V,ft,xt,bt,O),Ot=new JT(V,Ne,j),St=new GT(E),Ct=new M1(U,pt,ye,Ne,bt,St),jt=new k1(U,E),$t=new T1,yt=new D1(ye),Lt=new FT(U,pt,Wt,Xt,T,m),Nt=new P1(U,Xt,Ne),Pt=new W1(V,O,Ne,Wt),ce=new BT(V,ye,O),W=new KT(V,ye,O),O.programs=Ct.programs,U.capabilities=Ne,U.extensions=ye,U.properties=E,U.renderLists=$t,U.shadowMap=Nt,U.state=Wt,U.info=O}Mt(),w!==ai&&(b=new eb(w,i.width,i.height,l,u));const ut=new V1(U,V);this.xr=ut,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(P,Z,!1))},this.getSize=function(R){return R.set(P,Z)},this.setSize=function(R,k,lt=!0){if(ut.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Z=k,i.width=Math.floor(R*_t),i.height=Math.floor(k*_t),lt===!0&&(i.style.width=R+"px",i.style.height=k+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(P*_t,Z*_t).floor()},this.setDrawingBufferSize=function(R,k,lt){P=R,Z=k,_t=lt,i.width=Math.floor(R*lt),i.height=Math.floor(k*lt),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(w===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,k,lt,it){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,k,lt,it),Wt.viewport(N.copy(at).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,k,lt,it){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,k,lt,it),Wt.scissor(z.copy(vt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){Wt.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){zt=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,lt=!0){let it=0;if(R){let J=!1;if(tt!==null){const wt=tt.texture.format;J=M.has(wt)}if(J){const wt=tt.texture.type,Ft=v.has(wt),Dt=Lt.getClearColor(),kt=Lt.getClearAlpha(),Yt=Dt.r,ee=Dt.g,ae=Dt.b;Ft?(C[0]=Yt,C[1]=ee,C[2]=ae,C[3]=kt,V.clearBufferuiv(V.COLOR,0,C)):(L[0]=Yt,L[1]=ee,L[2]=ae,L[3]=kt,V.clearBufferiv(V.COLOR,0,L))}else it|=V.COLOR_BUFFER_BIT}k&&(it|=V.DEPTH_BUFFER_BIT),lt&&(it|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&V.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",ne,!1),i.removeEventListener("webglcontextcreationerror",ze,!1),Lt.dispose(),$t.dispose(),yt.dispose(),E.dispose(),pt.dispose(),Xt.dispose(),bt.dispose(),Pt.dispose(),Ct.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Os),ut.removeEventListener("sessionend",Ps),Ui.stop()};function It(R){R.preventDefault(),Vg("WebGLRenderer: Context Lost."),Q=!0}function ne(){Vg("WebGLRenderer: Context Restored."),Q=!1;const R=O.autoReset,k=Nt.enabled,lt=Nt.autoUpdate,it=Nt.needsUpdate,J=Nt.type;Mt(),O.autoReset=R,Nt.enabled=k,Nt.autoUpdate=lt,Nt.needsUpdate=it,Nt.type=J}function ze(R){De("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ee(R){const k=R.target;k.removeEventListener("dispose",Ee),wn(k)}function wn(R){vi(R),E.remove(R)}function vi(R){const k=E.get(R).programs;k!==void 0&&(k.forEach(function(lt){Ct.releaseProgram(lt)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,lt,it,J,wt){k===null&&(k=Ue);const Ft=J.isMesh&&J.matrixWorld.determinant()<0,Dt=Jo(R,k,lt,it,J);Wt.setMaterial(it,Ft);let kt=lt.index,Yt=1;if(it.wireframe===!0){if(kt=ft.getWireframeAttribute(lt),kt===void 0)return;Yt=2}const ee=lt.drawRange,ae=lt.attributes.position;let Bt=ee.start*Yt,ue=(ee.start+ee.count)*Yt;wt!==null&&(Bt=Math.max(Bt,wt.start*Yt),ue=Math.min(ue,(wt.start+wt.count)*Yt)),kt!==null?(Bt=Math.max(Bt,0),ue=Math.min(ue,kt.count)):ae!=null&&(Bt=Math.max(Bt,0),ue=Math.min(ue,ae.count));const Ye=ue-Bt;if(Ye<0||Ye===1/0)return;bt.setup(J,it,Dt,lt,kt);let je,Re=ce;if(kt!==null&&(je=xt.get(kt),Re=W,Re.setIndex(je)),J.isMesh)it.wireframe===!0?(Wt.setLineWidth(it.wireframeLinewidth*Ke()),Re.setMode(V.LINES)):Re.setMode(V.TRIANGLES);else if(J.isLine){let pn=it.linewidth;pn===void 0&&(pn=1),Wt.setLineWidth(pn*Ke()),J.isLineSegments?Re.setMode(V.LINES):J.isLineLoop?Re.setMode(V.LINE_LOOP):Re.setMode(V.LINE_STRIP)}else J.isPoints?Re.setMode(V.POINTS):J.isSprite&&Re.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Hc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Re.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const pn=J._multiDrawStarts,Gt=J._multiDrawCounts,Dn=J._multiDrawCount,ie=kt?xt.get(kt).bytesPerElement:1,Un=E.get(it).currentProgram.getUniforms();for(let qn=0;qn<Dn;qn++)Un.setValue(V,"_gl_DrawID",qn),Re.render(pn[qn]/ie,Gt[qn])}else if(J.isInstancedMesh)Re.renderInstances(Bt,Ye,J.count);else if(lt.isInstancedBufferGeometry){const pn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Gt=Math.min(lt.instanceCount,pn);Re.renderInstances(Bt,Ye,Gt)}else Re.render(Bt,Ye)};function Br(R,k,lt){R.transparent===!0&&R.side===pa&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,ya(R,k,lt),R.side=va,R.needsUpdate=!0,ya(R,k,lt),R.side=pa):ya(R,k,lt)}this.compile=function(R,k,lt=null){lt===null&&(lt=R),H=yt.get(lt),H.init(k),F.push(H),lt.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(H.pushLight(J),J.castShadow&&H.pushShadow(J))}),R!==lt&&R.traverseVisible(function(J){J.isLight&&J.layers.test(k.layers)&&(H.pushLight(J),J.castShadow&&H.pushShadow(J))}),H.setupLights();const it=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const wt=J.material;if(wt)if(Array.isArray(wt))for(let Ft=0;Ft<wt.length;Ft++){const Dt=wt[Ft];Br(Dt,lt,J),it.add(Dt)}else Br(wt,lt,J),it.add(wt)}),H=F.pop(),it},this.compileAsync=function(R,k,lt=null){const it=this.compile(R,k,lt);return new Promise(J=>{function wt(){if(it.forEach(function(Ft){E.get(Ft).currentProgram.isReady()&&it.delete(Ft)}),it.size===0){J(R);return}setTimeout(wt,10)}ye.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ns=null;function Zo(R){Ns&&Ns(R)}function Os(){Ui.stop()}function Ps(){Ui.start()}const Ui=new uv;Ui.setAnimationLoop(Zo),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(R){Ns=R,ut.setAnimationLoop(R),R===null?Ui.stop():Ui.start()},ut.addEventListener("sessionstart",Os),ut.addEventListener("sessionend",Ps),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;const lt=ut.enabled===!0&&ut.isPresenting===!0,it=b!==null&&(tt===null||lt)&&b.begin(U,tt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(k),k=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,k,tt),H=yt.get(R,F.length),H.init(k),F.push(H),Je.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Vt.setFromProjectionMatrix(Je,Hi,k.reversedDepth),Jt=this.localClippingEnabled,Zt=St.init(this.clippingPlanes,Jt),D=$t.get(R,B.length),D.init(),B.push(D),ut.enabled===!0&&ut.isPresenting===!0){const Ft=U.xr.getDepthSensingMesh();Ft!==null&&zs(Ft,k,-1/0,U.sortObjects)}zs(R,k,0,U.sortObjects),D.finish(),U.sortObjects===!0&&D.sort(At,zt),oe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,oe&&Lt.addToRenderList(D,R),this.info.render.frame++,Zt===!0&&St.beginShadows();const J=H.state.shadowsArray;if(Nt.render(J,R,k),Zt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&b.hasRenderPass())===!1){const Ft=D.opaque,Dt=D.transmissive;if(H.setupLights(),k.isArrayCamera){const kt=k.cameras;if(Dt.length>0)for(let Yt=0,ee=kt.length;Yt<ee;Yt++){const ae=kt[Yt];sn(Ft,Dt,R,ae)}oe&&Lt.render(R);for(let Yt=0,ee=kt.length;Yt<ee;Yt++){const ae=kt[Yt];xi(D,R,ae,ae.viewport)}}else Dt.length>0&&sn(Ft,Dt,R,k),oe&&Lt.render(R),xi(D,R,k)}tt!==null&&Y===0&&(j.updateMultisampleRenderTarget(tt),j.updateRenderTargetMipmap(tt)),it&&b.end(U),R.isScene===!0&&R.onAfterRender(U,R,k),bt.resetDefaultState(),rt=-1,q=null,F.pop(),F.length>0?(H=F[F.length-1],Zt===!0&&St.setGlobalState(U.clippingPlanes,H.state.camera)):H=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function zs(R,k,lt,it){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)H.pushLight(R),R.castShadow&&H.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){it&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);const Ft=Xt.update(R),Dt=R.material;Dt.visible&&D.push(R,Ft,Dt,lt,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const Ft=Xt.update(R),Dt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),pe.copy(Ft.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(Dt)){const kt=Ft.groups;for(let Yt=0,ee=kt.length;Yt<ee;Yt++){const ae=kt[Yt],Bt=Dt[ae.materialIndex];Bt&&Bt.visible&&D.push(R,Ft,Bt,lt,pe.z,ae)}}else Dt.visible&&D.push(R,Ft,Dt,lt,pe.z,null)}}const wt=R.children;for(let Ft=0,Dt=wt.length;Ft<Dt;Ft++)zs(wt[Ft],k,lt,it)}function xi(R,k,lt,it){const{opaque:J,transmissive:wt,transparent:Ft}=R;H.setupLightsView(lt),Zt===!0&&St.setGlobalState(U.clippingPlanes,lt),it&&Wt.viewport(N.copy(it)),J.length>0&&dn(J,k,lt),wt.length>0&&dn(wt,k,lt),Ft.length>0&&dn(Ft,k,lt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function sn(R,k,lt,it){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[it.id]===void 0){const Bt=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[it.id]=new Vi(1,1,{generateMipmaps:!0,type:Bt?xa:ai,minFilter:Ds,samples:Math.max(4,Ne.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const wt=H.state.transmissionRenderTarget[it.id],Ft=it.viewport||N;wt.setSize(Ft.z*U.transmissionResolutionScale,Ft.w*U.transmissionResolutionScale);const Dt=U.getRenderTarget(),kt=U.getActiveCubeFace(),Yt=U.getActiveMipmapLevel();U.setRenderTarget(wt),U.getClearColor(dt),Et=U.getClearAlpha(),Et<1&&U.setClearColor(16777215,.5),U.clear(),oe&&Lt.render(lt);const ee=U.toneMapping;U.toneMapping=Gi;const ae=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),H.setupLightsView(it),Zt===!0&&St.setGlobalState(U.clippingPlanes,it),dn(R,lt,it),j.updateMultisampleRenderTarget(wt),j.updateRenderTargetMipmap(wt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ue=0,Ye=k.length;ue<Ye;ue++){const je=k[ue],{object:Re,geometry:pn,material:Gt,group:Dn}=je;if(Gt.side===pa&&Re.layers.test(it.layers)){const ie=Gt.side;Gt.side=Wn,Gt.needsUpdate=!0,ki(Re,lt,it,pn,Gt,Dn),Gt.side=ie,Gt.needsUpdate=!0,Bt=!0}}Bt===!0&&(j.updateMultisampleRenderTarget(wt),j.updateRenderTargetMipmap(wt))}U.setRenderTarget(Dt,kt,Yt),U.setClearColor(dt,Et),ae!==void 0&&(it.viewport=ae),U.toneMapping=ee}function dn(R,k,lt){const it=k.isScene===!0?k.overrideMaterial:null;for(let J=0,wt=R.length;J<wt;J++){const Ft=R[J],{object:Dt,geometry:kt,group:Yt}=Ft;let ee=Ft.material;ee.allowOverride===!0&&it!==null&&(ee=it),Dt.layers.test(lt.layers)&&ki(Dt,k,lt,kt,ee,Yt)}}function ki(R,k,lt,it,J,wt){R.onBeforeRender(U,k,lt,it,J,wt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(U,k,lt,it,R,wt),J.transparent===!0&&J.side===pa&&J.forceSinglePass===!1?(J.side=Wn,J.needsUpdate=!0,U.renderBufferDirect(lt,k,it,J,R,wt),J.side=va,J.needsUpdate=!0,U.renderBufferDirect(lt,k,it,J,R,wt),J.side=pa):U.renderBufferDirect(lt,k,it,J,R,wt),R.onAfterRender(U,k,lt,it,J,wt)}function ya(R,k,lt){k.isScene!==!0&&(k=Ue);const it=E.get(R),J=H.state.lights,wt=H.state.shadowsArray,Ft=J.state.version,Dt=Ct.getParameters(R,J.state,wt,k,lt),kt=Ct.getProgramCacheKey(Dt);let Yt=it.programs;it.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,it.fog=k.fog;const ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;it.envMap=pt.get(R.envMap||it.environment,ee),it.envMapRotation=it.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",Ee),Yt=new Map,it.programs=Yt);let ae=Yt.get(kt);if(ae!==void 0){if(it.currentProgram===ae&&it.lightsStateVersion===Ft)return Qo(R,Dt),ae}else Dt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(Dt,U),ae=Ct.acquireProgram(Dt,kt),Yt.set(kt,ae),it.uniforms=Dt.uniforms;const Bt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Bt.clippingPlanes=St.uniform),Qo(R,Dt),it.needsLights=Hr(R),it.lightsStateVersion=Ft,it.needsLights&&(Bt.ambientLightColor.value=J.state.ambient,Bt.lightProbe.value=J.state.probe,Bt.directionalLights.value=J.state.directional,Bt.directionalLightShadows.value=J.state.directionalShadow,Bt.spotLights.value=J.state.spot,Bt.spotLightShadows.value=J.state.spotShadow,Bt.rectAreaLights.value=J.state.rectArea,Bt.ltc_1.value=J.state.rectAreaLTC1,Bt.ltc_2.value=J.state.rectAreaLTC2,Bt.pointLights.value=J.state.point,Bt.pointLightShadows.value=J.state.pointShadow,Bt.hemisphereLights.value=J.state.hemi,Bt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Bt.spotLightMatrix.value=J.state.spotLightMatrix,Bt.spotLightMap.value=J.state.spotLightMap,Bt.pointShadowMatrix.value=J.state.pointShadowMatrix),it.currentProgram=ae,it.uniformsList=null,ae}function Ko(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Fc.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Qo(R,k){const lt=E.get(R);lt.outputColorSpace=k.outputColorSpace,lt.batching=k.batching,lt.batchingColor=k.batchingColor,lt.instancing=k.instancing,lt.instancingColor=k.instancingColor,lt.instancingMorph=k.instancingMorph,lt.skinning=k.skinning,lt.morphTargets=k.morphTargets,lt.morphNormals=k.morphNormals,lt.morphColors=k.morphColors,lt.morphTargetsCount=k.morphTargetsCount,lt.numClippingPlanes=k.numClippingPlanes,lt.numIntersection=k.numClipIntersection,lt.vertexAlphas=k.vertexAlphas,lt.vertexTangents=k.vertexTangents,lt.toneMapping=k.toneMapping}function Jo(R,k,lt,it,J){k.isScene!==!0&&(k=Ue),j.resetTextureUnits();const wt=k.fog,Ft=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?k.environment:null,Dt=tt===null?U.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Or,kt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Yt=pt.get(it.envMap||Ft,kt),ee=it.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ae=!!lt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Bt=!!lt.morphAttributes.position,ue=!!lt.morphAttributes.normal,Ye=!!lt.morphAttributes.color;let je=Gi;it.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(je=U.toneMapping);const Re=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,pn=Re!==void 0?Re.length:0,Gt=E.get(it),Dn=H.state.lights;if(Zt===!0&&(Jt===!0||R!==q)){const on=R===q&&it.id===rt;St.setState(it,R,on)}let ie=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Dn.state.version||Gt.outputColorSpace!==Dt||J.isBatchedMesh&&Gt.batching===!1||!J.isBatchedMesh&&Gt.batching===!0||J.isBatchedMesh&&Gt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Gt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Gt.instancing===!1||!J.isInstancedMesh&&Gt.instancing===!0||J.isSkinnedMesh&&Gt.skinning===!1||!J.isSkinnedMesh&&Gt.skinning===!0||J.isInstancedMesh&&Gt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Gt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Gt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Gt.instancingMorph===!1&&J.morphTexture!==null||Gt.envMap!==Yt||it.fog===!0&&Gt.fog!==wt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==St.numPlanes||Gt.numIntersection!==St.numIntersection)||Gt.vertexAlphas!==ee||Gt.vertexTangents!==ae||Gt.morphTargets!==Bt||Gt.morphNormals!==ue||Gt.morphColors!==Ye||Gt.toneMapping!==je||Gt.morphTargetsCount!==pn)&&(ie=!0):(ie=!0,Gt.__version=it.version);let Un=Gt.currentProgram;ie===!0&&(Un=ya(it,k,J));let qn=!1,Si=!1,Yn=!1;const Oe=Un.getUniforms(),rn=Gt.uniforms;if(Wt.useProgram(Un.program)&&(qn=!0,Si=!0,Yn=!0),it.id!==rt&&(rt=it.id,Si=!0),qn||q!==R){Wt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Oe.setValue(V,"projectionMatrix",R.projectionMatrix),Oe.setValue(V,"viewMatrix",R.matrixWorldInverse);const Mi=Oe.map.cameraPosition;Mi!==void 0&&Mi.setValue(V,_e.setFromMatrixPosition(R.matrixWorld)),Ne.logarithmicDepthBuffer&&Oe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Oe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),q!==R&&(q=R,Si=!0,Yn=!0)}if(Gt.needsLights&&(Dn.state.directionalShadowMap.length>0&&Oe.setValue(V,"directionalShadowMap",Dn.state.directionalShadowMap,j),Dn.state.spotShadowMap.length>0&&Oe.setValue(V,"spotShadowMap",Dn.state.spotShadowMap,j),Dn.state.pointShadowMap.length>0&&Oe.setValue(V,"pointShadowMap",Dn.state.pointShadowMap,j)),J.isSkinnedMesh){Oe.setOptional(V,J,"bindMatrix"),Oe.setOptional(V,J,"bindMatrixInverse");const on=J.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Oe.setValue(V,"boneTexture",on.boneTexture,j))}J.isBatchedMesh&&(Oe.setOptional(V,J,"batchingTexture"),Oe.setValue(V,"batchingTexture",J._matricesTexture,j),Oe.setOptional(V,J,"batchingIdTexture"),Oe.setValue(V,"batchingIdTexture",J._indirectTexture,j),Oe.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&Oe.setValue(V,"batchingColorTexture",J._colorsTexture,j));const Ln=lt.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Ot.update(J,lt,Un),(Si||Gt.receiveShadow!==J.receiveShadow)&&(Gt.receiveShadow=J.receiveShadow,Oe.setValue(V,"receiveShadow",J.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&k.environment!==null&&(rn.envMapIntensity.value=k.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=Y1()),Si&&(Oe.setValue(V,"toneMappingExposure",U.toneMappingExposure),Gt.needsLights&&ns(rn,Yn),wt&&it.fog===!0&&jt.refreshFogUniforms(rn,wt),jt.refreshMaterialUniforms(rn,it,_t,Z,H.state.transmissionRenderTarget[R.id]),Fc.upload(V,Ko(Gt),rn,j)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Fc.upload(V,Ko(Gt),rn,j),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Oe.setValue(V,"center",J.center),Oe.setValue(V,"modelViewMatrix",J.modelViewMatrix),Oe.setValue(V,"normalMatrix",J.normalMatrix),Oe.setValue(V,"modelMatrix",J.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const on=it.uniformsGroups;for(let Mi=0,Wi=on.length;Mi<Wi;Mi++){const Fs=on[Mi];Pt.update(Fs,Un),Pt.bind(Fs,Un)}}return Un}function ns(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Hr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(R,k,lt){const it=E.get(R);it.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=k,E.get(R.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:lt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const lt=E.get(R);lt.__webglFramebuffer=k,lt.__useDefaultFramebuffer=k===void 0};const Ea=V.createFramebuffer();this.setRenderTarget=function(R,k=0,lt=0){tt=R,I=k,Y=lt;let it=null,J=!1,wt=!1;if(R){const Dt=E.get(R);if(Dt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(V.FRAMEBUFFER,Dt.__webglFramebuffer),N.copy(R.viewport),z.copy(R.scissor),ot=R.scissorTest,Wt.viewport(N),Wt.scissor(z),Wt.setScissorTest(ot),rt=-1;return}else if(Dt.__webglFramebuffer===void 0)j.setupRenderTarget(R);else if(Dt.__hasExternalTextures)j.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Dt.__boundDepthTexture!==ee){if(ee!==null&&E.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(wt=!0);const Yt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Yt[k])?it=Yt[k][lt]:it=Yt[k],J=!0):R.samples>0&&j.useMultisampledRTT(R)===!1?it=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Yt)?it=Yt[lt]:it=Yt,N.copy(R.viewport),z.copy(R.scissor),ot=R.scissorTest}else N.copy(at).multiplyScalar(_t).floor(),z.copy(vt).multiplyScalar(_t).floor(),ot=Tt;if(lt!==0&&(it=Ea),Wt.bindFramebuffer(V.FRAMEBUFFER,it)&&Wt.drawBuffers(R,it),Wt.viewport(N),Wt.scissor(z),Wt.setScissorTest(ot),J){const Dt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Dt.__webglTexture,lt)}else if(wt){const Dt=k;for(let kt=0;kt<R.textures.length;kt++){const Yt=E.get(R.textures[kt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+kt,Yt.__webglTexture,lt,Dt)}}else if(R!==null&&lt!==0){const Dt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Dt.__webglTexture,lt)}rt=-1},this.readRenderTargetPixels=function(R,k,lt,it,J,wt,Ft,Dt=0){if(!(R&&R.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(kt=kt[Ft]),kt){Wt.bindFramebuffer(V.FRAMEBUFFER,kt);try{const Yt=R.textures[Dt],ee=Yt.format,ae=Yt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Dt),!Ne.textureFormatReadable(ee)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(ae)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-it&&lt>=0&&lt<=R.height-J&&V.readPixels(k,lt,it,J,Rt.convert(ee),Rt.convert(ae),wt)}finally{const Yt=tt!==null?E.get(tt).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,k,lt,it,J,wt,Ft,Dt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(kt=kt[Ft]),kt)if(k>=0&&k<=R.width-it&&lt>=0&&lt<=R.height-J){Wt.bindFramebuffer(V.FRAMEBUFFER,kt);const Yt=R.textures[Dt],ee=Yt.format,ae=Yt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Dt),!Ne.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Bt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Bt),V.bufferData(V.PIXEL_PACK_BUFFER,wt.byteLength,V.STREAM_READ),V.readPixels(k,lt,it,J,Rt.convert(ee),Rt.convert(ae),0);const ue=tt!==null?E.get(tt).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,ue);const Ye=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await dM(V,Ye,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Bt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,wt),V.deleteBuffer(Bt),V.deleteSync(Ye),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,lt=0){const it=Math.pow(2,-lt),J=Math.floor(R.image.width*it),wt=Math.floor(R.image.height*it),Ft=k!==null?k.x:0,Dt=k!==null?k.y:0;j.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,Ft,Dt,J,wt),Wt.unbindTexture()};const Ta=V.createFramebuffer(),is=V.createFramebuffer();this.copyTextureToTexture=function(R,k,lt=null,it=null,J=0,wt=0){let Ft,Dt,kt,Yt,ee,ae,Bt,ue,Ye;const je=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(lt!==null)Ft=lt.max.x-lt.min.x,Dt=lt.max.y-lt.min.y,kt=lt.isBox3?lt.max.z-lt.min.z:1,Yt=lt.min.x,ee=lt.min.y,ae=lt.isBox3?lt.min.z:0;else{const rn=Math.pow(2,-J);Ft=Math.floor(je.width*rn),Dt=Math.floor(je.height*rn),R.isDataArrayTexture?kt=je.depth:R.isData3DTexture?kt=Math.floor(je.depth*rn):kt=1,Yt=0,ee=0,ae=0}it!==null?(Bt=it.x,ue=it.y,Ye=it.z):(Bt=0,ue=0,Ye=0);const Re=Rt.convert(k.format),pn=Rt.convert(k.type);let Gt;k.isData3DTexture?(j.setTexture3D(k,0),Gt=V.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(j.setTexture2DArray(k,0),Gt=V.TEXTURE_2D_ARRAY):(j.setTexture2D(k,0),Gt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);const Dn=V.getParameter(V.UNPACK_ROW_LENGTH),ie=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Un=V.getParameter(V.UNPACK_SKIP_PIXELS),qn=V.getParameter(V.UNPACK_SKIP_ROWS),Si=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,je.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,je.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Yt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ee),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ae);const Yn=R.isDataArrayTexture||R.isData3DTexture,Oe=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const rn=E.get(R),Ln=E.get(k),on=E.get(rn.__renderTarget),Mi=E.get(Ln.__renderTarget);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,on.__webglFramebuffer),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Wi=0;Wi<kt;Wi++)Yn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,J,ae+Wi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(k).__webglTexture,wt,Ye+Wi)),V.blitFramebuffer(Yt,ee,Ft,Dt,Bt,ue,Ft,Dt,V.DEPTH_BUFFER_BIT,V.NEAREST);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||E.has(R)){const rn=E.get(R),Ln=E.get(k);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,Ta),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,is);for(let on=0;on<kt;on++)Yn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,rn.__webglTexture,J,ae+on):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,rn.__webglTexture,J),Oe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ln.__webglTexture,wt,Ye+on):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ln.__webglTexture,wt),J!==0?V.blitFramebuffer(Yt,ee,Ft,Dt,Bt,ue,Ft,Dt,V.COLOR_BUFFER_BIT,V.NEAREST):Oe?V.copyTexSubImage3D(Gt,wt,Bt,ue,Ye+on,Yt,ee,Ft,Dt):V.copyTexSubImage2D(Gt,wt,Bt,ue,Yt,ee,Ft,Dt);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Oe?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Gt,wt,Bt,ue,Ye,Ft,Dt,kt,Re,pn,je.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(Gt,wt,Bt,ue,Ye,Ft,Dt,kt,Re,je.data):V.texSubImage3D(Gt,wt,Bt,ue,Ye,Ft,Dt,kt,Re,pn,je):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,wt,Bt,ue,Ft,Dt,Re,pn,je.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,wt,Bt,ue,je.width,je.height,Re,je.data):V.texSubImage2D(V.TEXTURE_2D,wt,Bt,ue,Ft,Dt,Re,pn,je);V.pixelStorei(V.UNPACK_ROW_LENGTH,Dn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ie),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Un),V.pixelStorei(V.UNPACK_SKIP_ROWS,qn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Si),wt===0&&k.generateMipmaps&&V.generateMipmap(Gt),Wt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&j.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?j.setTextureCube(R,0):R.isData3DTexture?j.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?j.setTexture2DArray(R,0):j.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){I=0,Y=0,tt=null,Wt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}const As={idle:{core:new te(9133302),glow:new te(6514417),particles:new te(10980346),ambient:new te(1710638)},listening:{core:new te(62975),glow:new te(440020),particles:new te(2282478),ambient:new te(662062)},thinking:{core:new te(16711790),glow:new te(15485081),particles:new te(16020150),ambient:new te(3017242)},speaking:{core:new te(458639),glow:new te(1096065),particles:new te(3462041),ambient:new te(667162)},error:{core:new te(16711764),glow:new te(15680580),particles:new te(16281969),ambient:new te(3017226)}},Z1=({state:o="idle",volume:e=0})=>{const i=Pe.useRef(null),s=Pe.useRef(null),l=Pe.useRef(null),u=Pe.useRef(null),h=Pe.useRef(null),p=Pe.useRef(null),m=Pe.useRef(As.idle),d=Pe.useRef(As.idle),S=Pe.useCallback(()=>{if(!i.current)return;const x=new wM;s.current=x;const g=new j1({antialias:!0,alpha:!0});g.setSize(i.current.offsetWidth,i.current.offsetHeight),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setClearColor(0,0),i.current.appendChild(g.domElement),l.current=g;const y=new ii(45,i.current.offsetWidth/i.current.offsetHeight,.1,100);y.position.z=5;const T=new Wd(1.2,4),w=new _i({uniforms:{uTime:{value:0},uColor:{value:As.idle.core},uVolume:{value:0}},vertexShader:`
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
      `,transparent:!0,side:va}),M=new Di(T,w);x.add(M),u.current=M;const v=500,C=new si,L=new Float32Array(v*3),D=new Float32Array(v),H=new Float32Array(v),B=new Float32Array(v);for(let q=0;q<v;q++){const N=Math.random()*Math.PI*2,z=1.5+Math.random()*2,ot=Math.random()*Math.PI;L[q*3]=z*Math.sin(ot)*Math.cos(N),L[q*3+1]=z*Math.sin(ot)*Math.sin(N),L[q*3+2]=z*Math.cos(ot),D[q]=Math.random()*4+1,H[q]=N,B[q]=z}C.setAttribute("position",new gi(L,3)),C.setAttribute("size",new gi(D,1));const F=new _i({uniforms:{uTime:{value:0},uColor:{value:As.idle.particles},uVolume:{value:0}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Fh}),b=new HM(C,F);x.add(b),h.current=b;const U=new Bo;for(let q=0;q<3;q++){const N=new qd(1.5+q*.4,.01,16,100),z=new Vd({color:As.idle.glow,transparent:!0,opacity:.3/(q+1)}),ot=new Di(N,z);ot.rotation.x=Math.PI/2+q*.3,ot.rotation.y=q*.5,U.add(ot)}x.add(U),p.current=U;const Q=new JM(4210752,.5);x.add(Q);const I=new QM(As.idle.core,1,10);I.position.set(0,0,3),x.add(I);let Y=0;const tt=()=>{requestAnimationFrame(tt),Y+=.016;const q=m.current,N=d.current;if(N.core.lerp(q.core,.02),N.glow.lerp(q.glow,.02),N.particles.lerp(q.particles,.02),w.uniforms&&(w.uniforms.uTime.value=Y,w.uniforms.uColor.value.copy(N.core),w.uniforms.uVolume.value=e),F.uniforms&&(F.uniforms.uTime.value=Y,F.uniforms.uColor.value.copy(N.particles),F.uniforms.uVolume.value=e),p.current&&p.current.children.forEach((z,ot)=>{z.rotation.z=Y*(.1+ot*.05),z.rotation.x=Math.PI/2+Math.sin(Y*.5+ot)*.3,z.material.opacity=.3/(ot+1)*(.5+e*.5),z.material.color.copy(N.glow)}),u.current){const z=1+e*.3;u.current.scale.setScalar(z)}g.render(x,y)};tt();const rt=()=>{if(!i.current)return;const q=i.current.offsetWidth,N=i.current.offsetHeight;y.aspect=q/N,y.updateProjectionMatrix(),g.setSize(q,N)};return window.addEventListener("resize",rt),()=>{window.removeEventListener("resize",rt),i.current&&g.domElement&&i.current.removeChild(g.domElement),g.dispose()}},[]);return Pe.useEffect(()=>{m.current=As[o]},[o]),Pe.useEffect(()=>S(),[S]),Te.jsx("div",{ref:i,style:{width:"100%",height:"100%",position:"relative"}})},zh="https://iaputa.alvarezconsult.com/api",N_="iaputa_sk_7f3a9b2c1d4e5f6a8b9c0d1e2f3a4b5c",O_={hola:"¡Hola! Soy IAPuta OS, tu asistente IA personal de élite. ¿En qué puedo ayudarte hoy?",hello:"Hello! I am IAPuta OS, your luxury AI assistant. How can I act for you?",ayuda:`Tengo acceso a:
• 📷 Análisis de visión y pantalla
• 🌐 Búsquedas avanzadas
• 💻 Shell y manipulación local
• 🧠 Multi-LLM en fallback (Groq → Ollama → OpenRouter)`,default:"Entendido. En modo demo puro no conecto con el backend esclavo en local, por favor levanta la API de FastAPI."};function K1(){const[o,e]=Pe.useState([]),[i,s]=Pe.useState(""),[l,u]=Pe.useState(!1),[h,p]=Pe.useState(!1),[m,d]=Pe.useState(null),[S,x]=Pe.useState(!1),[g,y]=Pe.useState(!1),[T,w]=Pe.useState("idle"),[M,v]=Pe.useState(0),C=Pe.useRef(null),L=Pe.useRef(null),D=Pe.useRef([]);Pe.useEffect(()=>{fetch(`${zh}/status`,{signal:AbortSignal.timeout(3e3)}).then(Q=>{Q.ok||p(!0)}).catch(()=>p(!0))},[]),Pe.useEffect(()=>{C.current?.scrollIntoView({behavior:"smooth"})},[o]);const H=Pe.useCallback(Q=>{if("speechSynthesis"in window){window.speechSynthesis.cancel();const I=new SpeechSynthesisUtterance(Q);I.lang="es-ES",I.rate=1,I.pitch=1,I.onstart=()=>{y(!0),w("speaking")},I.onend=()=>{y(!1),w("idle")},I.onerror=()=>{y(!1),w("idle")},window.speechSynthesis.speak(I)}},[]),B=Pe.useCallback(async()=>{try{const Q=await navigator.mediaDevices.getUserMedia({audio:!0}),I=new MediaRecorder(Q);L.current=I,D.current=[],I.ondataavailable=Y=>{Y.data.size>0&&D.current.push(Y.data)},I.onstop=async()=>{Q.getTracks().forEach(rt=>rt.stop()),x(!1),w("thinking");const Y=new Blob(D.current,{type:"audio/webm"});if(h){e(rt=>[...rt,{id:crypto.randomUUID(),role:"user",content:"🎤 [Voz capturada]",timestamp:new Date}]),setTimeout(()=>{e(rt=>[...rt,{id:crypto.randomUUID(),role:"assistant",content:"Grabación procesada localmente en demo.",timestamp:new Date}]),H("Procesado localmente."),w("idle")},1e3);return}const tt=new FormData;tt.append("audio_file",Y,"audio.webm"),e(rt=>[...rt,{id:crypto.randomUUID(),role:"user",content:"🎤 [Procesando comandos de voz...]",timestamp:new Date}]);try{const q=await(await fetch(`${zh}/voice-command`,{method:"POST",headers:{"x-api-key":N_},body:tt})).json(),N={id:crypto.randomUUID(),role:"assistant",content:q.response||q.transcript||"Sin respuesta",timestamp:new Date,audioUrl:q.audio_url};e(z=>[...z,N]),q.audio_url?new Audio(q.audio_url).play().catch(()=>H(q.response||q.transcript||"")):H(q.response||q.transcript||"")}catch(rt){e(q=>[...q,{id:crypto.randomUUID(),role:"system",content:`❌ Error de backend esclavo: ${String(rt)}`,timestamp:new Date}]),w("error"),setTimeout(()=>w("idle"),3e3)}},I.start(),x(!0),w("listening"),setTimeout(()=>{L.current&&L.current.state==="recording"&&L.current.stop()},15e3)}catch{w("error"),setTimeout(()=>w("idle"),3e3)}},[h,H]),F=Pe.useCallback(()=>{L.current&&L.current.state==="recording"&&L.current.stop()},[]),b=Pe.useCallback(async Q=>{if(Q.trim())if(u(!0),w("thinking"),e(I=>[...I,{id:crypto.randomUUID(),role:"user",content:Q,timestamp:new Date}]),h){const I=Q.toLowerCase();let Y=O_.default;for(const[tt,rt]of Object.entries(O_))if(I.includes(tt)){Y=rt;break}setTimeout(()=>{e(tt=>[...tt,{id:crypto.randomUUID(),role:"assistant",content:Y,timestamp:new Date}]),H(Y),u(!1)},1e3)}else{try{const Y=await(await fetch(`${zh}/text-command`,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":N_},body:JSON.stringify({text:Q})})).json(),tt={id:crypto.randomUUID(),role:"assistant",content:Y.response||Y.error||"Sin respuesta",timestamp:new Date,audioUrl:Y.audio_url};e(rt=>[...rt,tt]),Y.audio_url?new Audio(Y.audio_url).play().catch(()=>H(Y.response||"")):H(Y.response||"")}catch(I){e(Y=>[...Y,{id:crypto.randomUUID(),role:"system",content:`❌ Host: Imposible conectar al backend local: ${String(I)}`,timestamp:new Date}]),w("error"),setTimeout(()=>w("idle"),3e3)}u(!1)}},[h,H]),U=Q=>{Q.preventDefault(),i.trim()&&!l&&(b(i),s(""))};return Te.jsxs("div",{className:"app-container",children:[Te.jsx("div",{className:"luxury-orb-background",children:Te.jsx(Z1,{state:T,volume:M})}),Te.jsx("div",{className:"luxury-dashboard",children:Te.jsxs("div",{className:"glass-panel chat-glass-panel",children:[Te.jsx("header",{className:"glass-header",children:Te.jsxs("div",{className:"brand",children:[Te.jsx("span",{className:"brand-logo",children:"🤖"}),Te.jsxs("div",{className:"brand-text",children:[Te.jsx("h1",{children:"IAPuta OS"}),Te.jsx("span",{className:`status-badge ${h?"demo":"online"}`,children:h?"Host Only":"Host + Local"})]})]})}),Te.jsxs("div",{className:"chat-area",children:[o.length===0?Te.jsxs("div",{className:"chat-empty-state",children:[Te.jsx("h2",{children:"Awaiting Directives"}),Te.jsx("p",{children:"El núcleo neuronal está conectado. Estoy lista para gestionar tu entorno."})]}):o.map(Q=>Te.jsx("div",{className:`chat-message chat-message--${Q.role}`,children:Te.jsxs("div",{className:"chat-bubble",children:[Te.jsx("p",{children:Q.content}),Te.jsx("span",{className:"chat-time",children:Q.timestamp.toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"})})]})},Q.id)),l&&Te.jsx("div",{className:"chat-message chat-message--loading",children:Te.jsx("div",{className:"chat-bubble",children:Te.jsxs("div",{className:"loader-dots",children:[Te.jsx("span",{}),Te.jsx("span",{}),Te.jsx("span",{})]})})}),Te.jsx("div",{ref:C})]}),Te.jsxs("form",{className:"glass-input-dock",onSubmit:U,children:[Te.jsx("input",{type:"text",placeholder:"Inyectar comandos al núcleo...",value:i,onChange:Q=>s(Q.target.value),disabled:l,className:"glass-input"}),Te.jsx("button",{type:"button",className:`btn-icon ${S?"pulsing":""}`,onClick:S?F:B,children:S?"⏹️":"🎤"}),Te.jsx("button",{type:"button",className:"btn-icon",onClick:()=>d("📸"),children:"👁️"})]})]})})]})}US.createRoot(document.getElementById("root")).render(Te.jsx(TS.StrictMode,{children:Te.jsx(K1,{})}));
