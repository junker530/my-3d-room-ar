(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();var Gh={exports:{}},sl={};var w0;function nM(){if(w0)return sl;w0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,c){var u=null;if(c!==void 0&&(u=""+c),r.key!==void 0&&(u=""+r.key),"key"in r){c={};for(var h in r)h!=="key"&&(c[h]=r[h])}else c=r;return r=c.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:c}}return sl.Fragment=e,sl.jsx=n,sl.jsxs=n,sl}var D0;function iM(){return D0||(D0=1,Gh.exports=nM()),Gh.exports}var vs=iM(),kh={exports:{}},rt={};var L0;function aM(){if(L0)return rt;L0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function S(I,q,me){this.props=I,this.context=q,this.refs=y,this.updater=me||E}S.prototype.isReactComponent={},S.prototype.setState=function(I,q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,q,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function w(){}w.prototype=S.prototype;function L(I,q,me){this.props=I,this.context=q,this.refs=y,this.updater=me||E}var D=L.prototype=new w;D.constructor=L,A(D,S.prototype),D.isPureReactComponent=!0;var z=Array.isArray;function P(){}var F={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function U(I,q,me){var Ae=me.ref;return{$$typeof:o,type:I,key:q,ref:Ae!==void 0?Ae:null,props:me}}function fe(I,q){return U(I.type,q,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function Z(I){var q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(me){return q[me]})}var te=/\/+/g;function ce(I,q){return typeof I=="object"&&I!==null&&I.key!=null?Z(""+I.key):q.toString(36)}function J(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(P,P):(I.status="pending",I.then(function(q){I.status==="pending"&&(I.status="fulfilled",I.value=q)},function(q){I.status==="pending"&&(I.status="rejected",I.reason=q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function O(I,q,me,Ae,Pe){var ie=typeof I;(ie==="undefined"||ie==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(ie){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case o:case e:ve=!0;break;case g:return ve=I._init,O(ve(I._payload),q,me,Ae,Pe)}}if(ve)return Pe=Pe(I),ve=Ae===""?"."+ce(I,0):Ae,z(Pe)?(me="",ve!=null&&(me=ve.replace(te,"$&/")+"/"),O(Pe,q,me,"",function(Ze){return Ze})):Pe!=null&&(H(Pe)&&(Pe=fe(Pe,me+(Pe.key==null||I&&I.key===Pe.key?"":(""+Pe.key).replace(te,"$&/")+"/")+ve)),q.push(Pe)),1;ve=0;var Te=Ae===""?".":Ae+":";if(z(I))for(var Ge=0;Ge<I.length;Ge++)Ae=I[Ge],ie=Te+ce(Ae,Ge),ve+=O(Ae,q,me,ie,Pe);else if(Ge=x(I),typeof Ge=="function")for(I=Ge.call(I),Ge=0;!(Ae=I.next()).done;)Ae=Ae.value,ie=Te+ce(Ae,Ge++),ve+=O(Ae,q,me,ie,Pe);else if(ie==="object"){if(typeof I.then=="function")return O(J(I),q,me,Ae,Pe);throw q=String(I),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ve}function B(I,q,me){if(I==null)return I;var Ae=[],Pe=0;return O(I,Ae,"","",function(ie){return q.call(me,ie,Pe++)}),Ae}function se(I){if(I._status===-1){var q=I._result;q=q(),q.then(function(me){(I._status===0||I._status===-1)&&(I._status=1,I._result=me)},function(me){(I._status===0||I._status===-1)&&(I._status=2,I._result=me)}),I._status===-1&&(I._status=0,I._result=q)}if(I._status===1)return I._result.default;throw I._result}var oe=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Se={map:B,forEach:function(I,q,me){B(I,function(){q.apply(this,arguments)},me)},count:function(I){var q=0;return B(I,function(){q++}),q},toArray:function(I){return B(I,function(q){return q})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return rt.Activity=_,rt.Children=Se,rt.Component=S,rt.Fragment=n,rt.Profiler=r,rt.PureComponent=L,rt.StrictMode=a,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,rt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return F.H.useMemoCache(I)}},rt.cache=function(I){return function(){return I.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(I,q,me){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ae=A({},I.props),Pe=I.key;if(q!=null)for(ie in q.key!==void 0&&(Pe=""+q.key),q)!b.call(q,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&q.ref===void 0||(Ae[ie]=q[ie]);var ie=arguments.length-2;if(ie===1)Ae.children=me;else if(1<ie){for(var ve=Array(ie),Te=0;Te<ie;Te++)ve[Te]=arguments[Te+2];Ae.children=ve}return U(I.type,Pe,Ae)},rt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},rt.createElement=function(I,q,me){var Ae,Pe={},ie=null;if(q!=null)for(Ae in q.key!==void 0&&(ie=""+q.key),q)b.call(q,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Pe[Ae]=q[Ae]);var ve=arguments.length-2;if(ve===1)Pe.children=me;else if(1<ve){for(var Te=Array(ve),Ge=0;Ge<ve;Ge++)Te[Ge]=arguments[Ge+2];Pe.children=Te}if(I&&I.defaultProps)for(Ae in ve=I.defaultProps,ve)Pe[Ae]===void 0&&(Pe[Ae]=ve[Ae]);return U(I,ie,Pe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(I){return{$$typeof:h,render:I}},rt.isValidElement=H,rt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:se}},rt.memo=function(I,q){return{$$typeof:d,type:I,compare:q===void 0?null:q}},rt.startTransition=function(I){var q=F.T,me={};F.T=me;try{var Ae=I(),Pe=F.S;Pe!==null&&Pe(me,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(P,oe)}catch(ie){oe(ie)}finally{q!==null&&me.types!==null&&(q.types=me.types),F.T=q}},rt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},rt.use=function(I){return F.H.use(I)},rt.useActionState=function(I,q,me){return F.H.useActionState(I,q,me)},rt.useCallback=function(I,q){return F.H.useCallback(I,q)},rt.useContext=function(I){return F.H.useContext(I)},rt.useDebugValue=function(){},rt.useDeferredValue=function(I,q){return F.H.useDeferredValue(I,q)},rt.useEffect=function(I,q){return F.H.useEffect(I,q)},rt.useEffectEvent=function(I){return F.H.useEffectEvent(I)},rt.useId=function(){return F.H.useId()},rt.useImperativeHandle=function(I,q,me){return F.H.useImperativeHandle(I,q,me)},rt.useInsertionEffect=function(I,q){return F.H.useInsertionEffect(I,q)},rt.useLayoutEffect=function(I,q){return F.H.useLayoutEffect(I,q)},rt.useMemo=function(I,q){return F.H.useMemo(I,q)},rt.useOptimistic=function(I,q){return F.H.useOptimistic(I,q)},rt.useReducer=function(I,q,me){return F.H.useReducer(I,q,me)},rt.useRef=function(I){return F.H.useRef(I)},rt.useState=function(I){return F.H.useState(I)},rt.useSyncExternalStore=function(I,q,me){return F.H.useSyncExternalStore(I,q,me)},rt.useTransition=function(){return F.H.useTransition()},rt.version="19.2.4",rt}var U0;function Cp(){return U0||(U0=1,kh.exports=aM()),kh.exports}var Hn=Cp(),Xh={exports:{}},rl={},Wh={exports:{}},qh={};var N0;function sM(){return N0||(N0=1,(function(o){function e(O,B){var se=O.length;O.push(B);e:for(;0<se;){var oe=se-1>>>1,Se=O[oe];if(0<r(Se,B))O[oe]=B,O[se]=Se,se=oe;else break e}}function n(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var B=O[0],se=O.pop();if(se!==B){O[0]=se;e:for(var oe=0,Se=O.length,I=Se>>>1;oe<I;){var q=2*(oe+1)-1,me=O[q],Ae=q+1,Pe=O[Ae];if(0>r(me,se))Ae<Se&&0>r(Pe,me)?(O[oe]=Pe,O[Ae]=se,oe=Ae):(O[oe]=me,O[q]=se,oe=q);else if(Ae<Se&&0>r(Pe,se))O[oe]=Pe,O[Ae]=se,oe=Ae;else break e}}return B}function r(O,B){var se=O.sortIndex-B.sortIndex;return se!==0?se:O.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();o.unstable_now=function(){return u.now()-h}}var p=[],d=[],g=1,_=null,v=3,x=!1,E=!1,A=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var B=n(d);B!==null;){if(B.callback===null)a(d);else if(B.startTime<=O)a(d),B.sortIndex=B.expirationTime,e(p,B);else break;B=n(d)}}function z(O){if(A=!1,D(O),!E)if(n(p)!==null)E=!0,P||(P=!0,Z());else{var B=n(d);B!==null&&J(z,B.startTime-O)}}var P=!1,F=-1,b=5,U=-1;function fe(){return y?!0:!(o.unstable_now()-U<b)}function H(){if(y=!1,P){var O=o.unstable_now();U=O;var B=!0;try{e:{E=!1,A&&(A=!1,w(F),F=-1),x=!0;var se=v;try{t:{for(D(O),_=n(p);_!==null&&!(_.expirationTime>O&&fe());){var oe=_.callback;if(typeof oe=="function"){_.callback=null,v=_.priorityLevel;var Se=oe(_.expirationTime<=O);if(O=o.unstable_now(),typeof Se=="function"){_.callback=Se,D(O),B=!0;break t}_===n(p)&&a(p),D(O)}else a(p);_=n(p)}if(_!==null)B=!0;else{var I=n(d);I!==null&&J(z,I.startTime-O),B=!1}}break e}finally{_=null,v=se,x=!1}B=void 0}}finally{B?Z():P=!1}}}var Z;if(typeof L=="function")Z=function(){L(H)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ce=te.port2;te.port1.onmessage=H,Z=function(){ce.postMessage(null)}}else Z=function(){S(H,0)};function J(O,B){F=S(function(){O(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(O){switch(v){case 1:case 2:case 3:var B=3;break;default:B=v}var se=v;v=B;try{return O()}finally{v=se}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var se=v;v=O;try{return B()}finally{v=se}},o.unstable_scheduleCallback=function(O,B,se){var oe=o.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?oe+se:oe):se=oe,O){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=se+Se,O={id:g++,callback:B,priorityLevel:O,startTime:se,expirationTime:Se,sortIndex:-1},se>oe?(O.sortIndex=se,e(d,O),n(p)===null&&O===n(d)&&(A?(w(F),F=-1):A=!0,J(z,se-oe))):(O.sortIndex=Se,e(p,O),E||x||(E=!0,P||(P=!0,Z()))),O},o.unstable_shouldYield=fe,o.unstable_wrapCallback=function(O){var B=v;return function(){var se=v;v=B;try{return O.apply(this,arguments)}finally{v=se}}}})(qh)),qh}var O0;function rM(){return O0||(O0=1,Wh.exports=sM()),Wh.exports}var Yh={exports:{}},Ln={};var I0;function oM(){if(I0)return Ln;I0=1;var o=Cp();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function c(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ln.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(p,d,null,g)},Ln.flushSync=function(p){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=g,a.d.f()}},Ln.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Ln.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Ln.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Ln.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Ln.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Ln.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Ln.requestFormReset=function(p){a.d.r(p)},Ln.unstable_batchedUpdates=function(p,d){return p(d)},Ln.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Ln.useFormStatus=function(){return u.H.useHostTransitionStatus()},Ln.version="19.2.4",Ln}var P0;function lM(){if(P0)return Yh.exports;P0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Yh.exports=oM(),Yh.exports}var B0;function cM(){if(B0)return rl;B0=1;var o=rM(),e=Cp(),n=lM();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),t;if(m===l)return p(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var M=!1,R=f.child;R;){if(R===s){M=!0,s=f,l=m;break}if(R===l){M=!0,l=f,s=m;break}R=R.sibling}if(!M){for(R=m.child;R;){if(R===s){M=!0,s=m,l=f;break}if(R===l){M=!0,l=m,s=f;break}R=R.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var te=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===te?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case z:return"Suspense";case P:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case L:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case D:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return i=t.displayName||null,i!==null?i:ce(t.type)||"Memo";case b:i=t._payload,t=t._init;try{return ce(t(i))}catch{}}return null}var J=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},oe=[],Se=-1;function I(t){return{current:t}}function q(t){0>Se||(t.current=oe[Se],oe[Se]=null,Se--)}function me(t,i){Se++,oe[Se]=t.current,t.current=i}var Ae=I(null),Pe=I(null),ie=I(null),ve=I(null);function Te(t,i){switch(me(ie,i),me(Pe,t),me(Ae,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?J_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=J_(i),t=$_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(Ae),me(Ae,t)}function Ge(){q(Ae),q(Pe),q(ie)}function Ze(t){t.memoizedState!==null&&me(ve,t);var i=Ae.current,s=$_(i,t.type);i!==s&&(me(Pe,t),me(Ae,s))}function $e(t){Pe.current===t&&(q(Ae),q(Pe)),ve.current===t&&(q(ve),tl._currentValue=se)}var tn,yt;function _t(t){if(tn===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);tn=i&&i[1]||"",yt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+t+yt}var Ut=!1;function lt(t,i){if(!t||Ut)return"";Ut=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(le){var ae=le}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(le){ae=le}t.call(_e.prototype)}}else{try{throw Error()}catch(le){ae=le}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],R=m[1];if(M&&R){var V=M.split(`
`),ee=R.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ee.length&&!ee[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===ee.length)for(l=V.length-1,f=ee.length-1;1<=l&&0<=f&&V[l]!==ee[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==ee[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==ee[f]){var de=`
`+V[l].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=l&&0<=f);break}}}finally{Ut=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?_t(s):""}function en(t,i){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==i&&i!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return lt(t.type,!1);case 11:return lt(t.type.render,!1);case 1:return lt(t.type,!0);case 31:return _t("Activity");default:return""}}function G(t){try{var i="",s=null;do i+=en(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Kt=Object.prototype.hasOwnProperty,Rt=o.unstable_scheduleCallback,Ot=o.unstable_cancelCallback,We=o.unstable_shouldYield,N=o.unstable_requestPaint,T=o.unstable_now,Y=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,xe=o.unstable_UserBlockingPriority,he=o.unstable_NormalPriority,ke=o.unstable_LowPriority,Ce=o.unstable_IdlePriority,je=o.log,et=o.unstable_setDisableYieldValue,Ee=null,ye=null;function Ne(t){if(typeof je=="function"&&et(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(Ee,t)}catch{}}var Ue=Math.clz32?Math.clz32:W,Oe=Math.log,ut=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Oe(t)/ut|0)|0}var Re=256,be=262144,Ie=4194304;function Me(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ue(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~m,l!==0?f=Me(l):(M&=R,M!==0?f=Me(M):s||(s=R&~t,s!==0&&(f=Me(s))))):(R=l&~m,R!==0?f=Me(R):M!==0?f=Me(M):s||(s=l&~t,s!==0&&(f=Me(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Fe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function it(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Ct(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function On(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function bi(t,i,s,l,f,m){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,V=t.expirationTimes,ee=t.hiddenUpdates;for(s=M&~s;0<s;){var de=31-Ue(s),_e=1<<de;R[de]=0,V[de]=-1;var ae=ee[de];if(ae!==null)for(ee[de]=null,de=0;de<ae.length;de++){var le=ae[de];le!==null&&(le.lane&=-536870913)}s&=~_e}l!==0&&go(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(M&~i))}function go(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ue(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function $s(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ue(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function Ll(t,i){var s=i&-i;return s=(s&42)!==0?1:er(s),(s&(t.suspendedLanes|i))!==0?0:s}function er(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Hi(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:M0(t.type))}function nr(t,i){var s=B.p;try{return B.p=t,i()}finally{B.p=s}}var Ai=Math.random().toString(36).slice(2),ln="__reactFiber$"+Ai,gn="__reactProps$"+Ai,ra="__reactContainer$"+Ai,za="__reactEvents$"+Ai,Ul="__reactListeners$"+Ai,Nl="__reactHandles$"+Ai,Ol="__reactResources$"+Ai,Ms="__reactMarker$"+Ai;function _o(t){delete t[ln],delete t[gn],delete t[za],delete t[Ul],delete t[Nl]}function Ha(t){var i=t[ln];if(i)return i;for(var s=t.parentNode;s;){if(i=s[ra]||s[ln]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=r0(t);t!==null;){if(s=t[ln])return s;t=r0(t)}return i}t=s,s=t.parentNode}return null}function Va(t){if(t=t[ln]||t[ra]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Es(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function C(t){var i=t[Ol];return i||(i=t[Ol]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function X(t){t[Ms]=!0}var re=new Set,ne={};function Q(t,i){we(t,i),we(t+"Capture",i)}function we(t,i){for(ne[t]=i,t=0;t<i.length;t++)re.add(i[t])}var Be=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),De={},Xe={};function Ye(t){return Kt.call(Xe,t)?!0:Kt.call(De,t)?!1:Be.test(t)?Xe[t]=!0:(De[t]=!0,!1)}function nt(t,i,s){if(Ye(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function st(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function ze(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function ft(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qt(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){s=""+M,m.call(this,M)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function wt(t){if(!t._valueTracker){var i=Zt(t)?"checked":"value";t._valueTracker=Qt(t,i,""+t[i])}}function _n(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Zt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Ve(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function at(t){return t.replace(In,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Pn(t,i,s,l,f,m,M,R){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ft(i)):t.value!==""+ft(i)&&(t.value=""+ft(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?Ri(t,M,ft(i)):s!=null?Ri(t,M,ft(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+ft(R):t.removeAttribute("name")}function ei(t,i,s,l,f,m,M,R){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){wt(t);return}s=s!=null?""+ft(s):"",i=i!=null?""+ft(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),wt(t)}function Ri(t,i,s){i==="number"&&Ve(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function ti(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ft(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function It(t,i,s){if(i!=null&&(i=""+ft(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+ft(s):""}function cn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(J(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ft(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),wt(t)}function Bn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var un=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ci(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||un.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function oa(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Ci(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Ci(t,m,i[m])}function ir(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$x=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(t){return $x.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function la(){}var Fu=null;function zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ar=null,sr=null;function Qp(t){var i=Va(t);if(i&&(t=i.stateNode)){var s=t[gn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Pn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+at(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[gn]||null;if(!f)throw Error(a(90));Pn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&_n(l)}break e;case"textarea":It(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&ti(t,!!s.multiple,i,!1)}}}var Hu=!1;function Jp(t,i,s){if(Hu)return t(i,s);Hu=!0;try{var l=t(i);return l}finally{if(Hu=!1,(ar!==null||sr!==null)&&(Mc(),ar&&(i=ar,t=sr,sr=ar=null,Qp(i),t)))for(i=0;i<t.length;i++)Qp(t[i])}}function vo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[gn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=!1;if(ca)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Vu=!1}var Ga=null,Gu=null,Pl=null;function $p(){if(Pl)return Pl;var t,i=Gu,s=i.length,l,f="value"in Ga?Ga.value:Ga.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===f[m-l];l++);return Pl=f.slice(t,1<l?1-l:void 0)}function Bl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Fl(){return!0}function em(){return!1}function Wn(t){function i(s,l,f,m,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Fl:em,this.isPropagationStopped=em,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),i}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Wn(Ts),So=_({},Ts,{view:0,detail:0}),eS=Wn(So),ku,Xu,yo,Hl=_({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(ku=t.screenX-yo.screenX,Xu=t.screenY-yo.screenY):Xu=ku=0,yo=t),ku)},movementY:function(t){return"movementY"in t?t.movementY:Xu}}),tm=Wn(Hl),tS=_({},Hl,{dataTransfer:0}),nS=Wn(tS),iS=_({},So,{relatedTarget:0}),Wu=Wn(iS),aS=_({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),sS=Wn(aS),rS=_({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oS=Wn(rS),lS=_({},Ts,{data:0}),nm=Wn(lS),cS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=fS[t])?!!i[t]:!1}function qu(){return hS}var dS=_({},So,{key:function(t){if(t.key){var i=cS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pS=Wn(dS),mS=_({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=Wn(mS),gS=_({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),_S=Wn(gS),vS=_({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),xS=Wn(vS),SS=_({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yS=Wn(SS),MS=_({},Ts,{newState:0,oldState:0}),ES=Wn(MS),TS=[9,13,27,32],Yu=ca&&"CompositionEvent"in window,Mo=null;ca&&"documentMode"in document&&(Mo=document.documentMode);var bS=ca&&"TextEvent"in window&&!Mo,am=ca&&(!Yu||Mo&&8<Mo&&11>=Mo),sm=" ",rm=!1;function om(t,i){switch(t){case"keyup":return TS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rr=!1;function AS(t,i){switch(t){case"compositionend":return lm(i);case"keypress":return i.which!==32?null:(rm=!0,sm);case"textInput":return t=i.data,t===sm&&rm?null:t;default:return null}}function RS(t,i){if(rr)return t==="compositionend"||!Yu&&om(t,i)?(t=$p(),Pl=Gu=Ga=null,rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return am&&i.locale!=="ko"?null:i.data;default:return null}}var CS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!CS[t.type]:i==="textarea"}function um(t,i,s,l){ar?sr?sr.push(l):sr=[l]:ar=l,i=wc(i,"onChange"),0<i.length&&(s=new zl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Eo=null,To=null;function wS(t){q_(t,0)}function Vl(t){var i=Es(t);if(_n(i))return t}function fm(t,i){if(t==="change")return i}var hm=!1;if(ca){var ju;if(ca){var Ku="oninput"in document;if(!Ku){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),Ku=typeof dm.oninput=="function"}ju=Ku}else ju=!1;hm=ju&&(!document.documentMode||9<document.documentMode)}function pm(){Eo&&(Eo.detachEvent("onpropertychange",mm),To=Eo=null)}function mm(t){if(t.propertyName==="value"&&Vl(To)){var i=[];um(i,To,t,zu(t)),Jp(wS,i)}}function DS(t,i,s){t==="focusin"?(pm(),Eo=i,To=s,Eo.attachEvent("onpropertychange",mm)):t==="focusout"&&pm()}function LS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(To)}function US(t,i){if(t==="click")return Vl(i)}function NS(t,i){if(t==="input"||t==="change")return Vl(i)}function OS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ni=typeof Object.is=="function"?Object.is:OS;function bo(t,i){if(ni(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Kt.call(i,f)||!ni(t[f],i[f]))return!1}return!0}function gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _m(t,i){var s=gm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=gm(s)}}function vm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?vm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function xm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Ve(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Ve(t.document)}return i}function Zu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var IS=ca&&"documentMode"in document&&11>=document.documentMode,or=null,Qu=null,Ao=null,Ju=!1;function Sm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ju||or==null||or!==Ve(l)||(l=or,"selectionStart"in l&&Zu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ao&&bo(Ao,l)||(Ao=l,l=wc(Qu,"onSelect"),0<l.length&&(i=new zl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=or)))}function bs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var lr={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},$u={},ym={};ca&&(ym=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function As(t){if($u[t])return $u[t];if(!lr[t])return t;var i=lr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in ym)return $u[t]=i[s];return t}var Mm=As("animationend"),Em=As("animationiteration"),Tm=As("animationstart"),PS=As("transitionrun"),BS=As("transitionstart"),FS=As("transitioncancel"),bm=As("transitionend"),Am=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function wi(t,i){Am.set(t,i),Q(i,[t])}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],cr=0,tf=0;function kl(){for(var t=cr,i=tf=cr=0;i<t;){var s=di[i];di[i++]=null;var l=di[i];di[i++]=null;var f=di[i];di[i++]=null;var m=di[i];if(di[i++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}m!==0&&Rm(s,f,m)}}function Xl(t,i,s,l){di[cr++]=t,di[cr++]=i,di[cr++]=s,di[cr++]=l,tf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function nf(t,i,s,l){return Xl(t,i,s,l),Wl(t)}function Rs(t,i){return Xl(t,null,null,i),Wl(t)}function Rm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Ue(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Wl(t){if(50<jo)throw jo=0,hh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ur={};function zS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,i,s,l){return new zS(t,i,s,l)}function af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,i){var s=t.alternate;return s===null?(s=ii(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Cm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function ql(t,i,s,l,f,m){var M=0;if(l=t,typeof t=="function")af(t)&&(M=1);else if(typeof t=="string")M=Xy(t,s,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=ii(31,s,i,f),t.elementType=U,t.lanes=m,t;case A:return Cs(s.children,f,m,i);case y:M=8,f|=24;break;case S:return t=ii(12,s,i,f|2),t.elementType=S,t.lanes=m,t;case z:return t=ii(13,s,i,f),t.elementType=z,t.lanes=m,t;case P:return t=ii(19,s,i,f),t.elementType=P,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:M=10;break e;case w:M=9;break e;case D:M=11;break e;case F:M=14;break e;case b:M=16,l=null;break e}M=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=ii(M,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function Cs(t,i,s,l){return t=ii(7,t,l,i),t.lanes=s,t}function sf(t,i,s){return t=ii(6,t,null,i),t.lanes=s,t}function wm(t){var i=ii(18,null,null,0);return i.stateNode=t,i}function rf(t,i,s){return i=ii(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Dm=new WeakMap;function pi(t,i){if(typeof t=="object"&&t!==null){var s=Dm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:G(i)},Dm.set(t,i),i)}return{value:t,source:i,stack:G(i)}}var fr=[],hr=0,Yl=null,Ro=0,mi=[],gi=0,ka=null,Vi=1,Gi="";function fa(t,i){fr[hr++]=Ro,fr[hr++]=Yl,Yl=t,Ro=i}function Lm(t,i,s){mi[gi++]=Vi,mi[gi++]=Gi,mi[gi++]=ka,ka=t;var l=Vi;t=Gi;var f=32-Ue(l)-1;l&=~(1<<f),s+=1;var m=32-Ue(i)+f;if(30<m){var M=f-f%5;m=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Vi=1<<32-Ue(i)+f|s<<f|l,Gi=m+t}else Vi=1<<m|s<<f|l,Gi=t}function of(t){t.return!==null&&(fa(t,1),Lm(t,1,0))}function lf(t){for(;t===Yl;)Yl=fr[--hr],fr[hr]=null,Ro=fr[--hr],fr[hr]=null;for(;t===ka;)ka=mi[--gi],mi[gi]=null,Gi=mi[--gi],mi[gi]=null,Vi=mi[--gi],mi[gi]=null}function Um(t,i){mi[gi++]=Vi,mi[gi++]=Gi,mi[gi++]=ka,Vi=i.id,Gi=i.overflow,ka=t}var An=null,qt=null,Tt=!1,Xa=null,_i=!1,cf=Error(a(519));function Wa(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(pi(i,t)),cf}function Nm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[ln]=t,i[gn]=l,s){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(s=0;s<Zo.length;s++)xt(Zo[s],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":xt("invalid",i),ei(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xt("invalid",i);break;case"textarea":xt("invalid",i),cn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Z_(i.textContent,s)?(l.popover!=null&&(xt("beforetoggle",i),xt("toggle",i)),l.onScroll!=null&&xt("scroll",i),l.onScrollEnd!=null&&xt("scrollend",i),l.onClick!=null&&(i.onclick=la),i=!0):i=!1,i||Wa(t,!0)}function Om(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:An=An.return}}function dr(t){if(t!==An)return!1;if(!Tt)return Om(t),Tt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Rh(t.type,t.memoizedProps)),s=!s),s&&qt&&Wa(t),Om(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));qt=s0(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));qt=s0(t)}else i===27?(i=qt,ss(t.type)?(t=Uh,Uh=null,qt=t):qt=i):qt=An?xi(t.stateNode.nextSibling):null;return!0}function ws(){qt=An=null,Tt=!1}function uf(){var t=Xa;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Xa=null),t}function Co(t){Xa===null?Xa=[t]:Xa.push(t)}var ff=I(null),Ds=null,ha=null;function qa(t,i,s){me(ff,i._currentValue),i._currentValue=s}function da(t){t._currentValue=ff.current,q(ff)}function hf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function df(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;e:for(;m!==null;){var R=m;m=f;for(var V=0;V<i.length;V++)if(R.context===i[V]){m.lanes|=s,R=m.alternate,R!==null&&(R.lanes|=s),hf(m.return,s,t),l||(M=null);break e}m=R.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(a(341));M.lanes|=s,m=M.alternate,m!==null&&(m.lanes|=s),hf(M,s,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function pr(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var R=f.type;ni(f.pendingProps.value,M.value)||(t!==null?t.push(R):t=[R])}}else if(f===ve.current){if(M=f.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(tl):t=[tl])}f=f.return}t!==null&&df(i,t,s,l),i.flags|=262144}function jl(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ls(t){Ds=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Im(Ds,t)}function Kl(t,i){return Ds===null&&Ls(t),Im(t,i)}function Im(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ha===null){if(t===null)throw Error(a(308));ha=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ha=ha.next=i;return s}var HS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},VS=o.unstable_scheduleCallback,GS=o.unstable_NormalPriority,fn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new HS,data:new Map,refCount:0}}function wo(t){t.refCount--,t.refCount===0&&VS(GS,function(){t.controller.abort()})}var Do=null,mf=0,mr=0,gr=null;function kS(t,i){if(Do===null){var s=Do=[];mf=0,mr=vh(),gr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return mf++,i.then(Pm,Pm),i}function Pm(){if(--mf===0&&Do!==null){gr!==null&&(gr.status="fulfilled");var t=Do;Do=null,mr=0,gr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function XS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Bm=O.S;O.S=function(t,i){S_=T(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&kS(t,i),Bm!==null&&Bm(t,i)};var Us=I(null);function gf(){var t=Us.current;return t!==null?t:Wt.pooledCache}function Zl(t,i){i===null?me(Us,Us.current):me(Us,i.pool)}function Fm(){var t=gf();return t===null?null:{parent:fn._currentValue,pool:t}}var _r=Error(a(460)),_f=Error(a(474)),Ql=Error(a(542)),Jl={then:function(){}};function zm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(la,la),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Gm(t),t;default:if(typeof i.status=="string")i.then(la,la);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Gm(t),t}throw Os=i,_r}}function Ns(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Os=s,_r):s}}var Os=null;function Vm(){if(Os===null)throw Error(a(459));var t=Os;return Os=null,t}function Gm(t){if(t===_r||t===Ql)throw Error(a(483))}var vr=null,Lo=0;function $l(t){var i=Lo;return Lo+=1,vr===null&&(vr=[]),Hm(vr,t,i)}function Uo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ec(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function km(t){function i(j,k){if(t){var $=j.deletions;$===null?(j.deletions=[k],j.flags|=16):$.push(k)}}function s(j,k){if(!t)return null;for(;k!==null;)i(j,k),k=k.sibling;return null}function l(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function f(j,k){return j=ua(j,k),j.index=0,j.sibling=null,j}function m(j,k,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<k?(j.flags|=67108866,k):$):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function M(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function R(j,k,$,ge){return k===null||k.tag!==6?(k=sf($,j.mode,ge),k.return=j,k):(k=f(k,$),k.return=j,k)}function V(j,k,$,ge){var Qe=$.type;return Qe===A?de(j,k,$.props.children,ge,$.key):k!==null&&(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===b&&Ns(Qe)===k.type)?(k=f(k,$.props),Uo(k,$),k.return=j,k):(k=ql($.type,$.key,$.props,null,j.mode,ge),Uo(k,$),k.return=j,k)}function ee(j,k,$,ge){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=rf($,j.mode,ge),k.return=j,k):(k=f(k,$.children||[]),k.return=j,k)}function de(j,k,$,ge,Qe){return k===null||k.tag!==7?(k=Cs($,j.mode,ge,Qe),k.return=j,k):(k=f(k,$),k.return=j,k)}function _e(j,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=sf(""+k,j.mode,$),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return $=ql(k.type,k.key,k.props,null,j.mode,$),Uo($,k),$.return=j,$;case E:return k=rf(k,j.mode,$),k.return=j,k;case b:return k=Ns(k),_e(j,k,$)}if(J(k)||Z(k))return k=Cs(k,j.mode,$,null),k.return=j,k;if(typeof k.then=="function")return _e(j,$l(k),$);if(k.$$typeof===L)return _e(j,Kl(j,k),$);ec(j,k)}return null}function ae(j,k,$,ge){var Qe=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Qe!==null?null:R(j,k,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Qe?V(j,k,$,ge):null;case E:return $.key===Qe?ee(j,k,$,ge):null;case b:return $=Ns($),ae(j,k,$,ge)}if(J($)||Z($))return Qe!==null?null:de(j,k,$,ge,null);if(typeof $.then=="function")return ae(j,k,$l($),ge);if($.$$typeof===L)return ae(j,k,Kl(j,$),ge);ec(j,$)}return null}function le(j,k,$,ge,Qe){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return j=j.get($)||null,R(k,j,""+ge,Qe);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case x:return j=j.get(ge.key===null?$:ge.key)||null,V(k,j,ge,Qe);case E:return j=j.get(ge.key===null?$:ge.key)||null,ee(k,j,ge,Qe);case b:return ge=Ns(ge),le(j,k,$,ge,Qe)}if(J(ge)||Z(ge))return j=j.get($)||null,de(k,j,ge,Qe,null);if(typeof ge.then=="function")return le(j,k,$,$l(ge),Qe);if(ge.$$typeof===L)return le(j,k,$,Kl(k,ge),Qe);ec(k,ge)}return null}function He(j,k,$,ge){for(var Qe=null,Dt=null,qe=k,ht=k=0,Et=null;qe!==null&&ht<$.length;ht++){qe.index>ht?(Et=qe,qe=null):Et=qe.sibling;var Lt=ae(j,qe,$[ht],ge);if(Lt===null){qe===null&&(qe=Et);break}t&&qe&&Lt.alternate===null&&i(j,qe),k=m(Lt,k,ht),Dt===null?Qe=Lt:Dt.sibling=Lt,Dt=Lt,qe=Et}if(ht===$.length)return s(j,qe),Tt&&fa(j,ht),Qe;if(qe===null){for(;ht<$.length;ht++)qe=_e(j,$[ht],ge),qe!==null&&(k=m(qe,k,ht),Dt===null?Qe=qe:Dt.sibling=qe,Dt=qe);return Tt&&fa(j,ht),Qe}for(qe=l(qe);ht<$.length;ht++)Et=le(qe,j,ht,$[ht],ge),Et!==null&&(t&&Et.alternate!==null&&qe.delete(Et.key===null?ht:Et.key),k=m(Et,k,ht),Dt===null?Qe=Et:Dt.sibling=Et,Dt=Et);return t&&qe.forEach(function(us){return i(j,us)}),Tt&&fa(j,ht),Qe}function Je(j,k,$,ge){if($==null)throw Error(a(151));for(var Qe=null,Dt=null,qe=k,ht=k=0,Et=null,Lt=$.next();qe!==null&&!Lt.done;ht++,Lt=$.next()){qe.index>ht?(Et=qe,qe=null):Et=qe.sibling;var us=ae(j,qe,Lt.value,ge);if(us===null){qe===null&&(qe=Et);break}t&&qe&&us.alternate===null&&i(j,qe),k=m(us,k,ht),Dt===null?Qe=us:Dt.sibling=us,Dt=us,qe=Et}if(Lt.done)return s(j,qe),Tt&&fa(j,ht),Qe;if(qe===null){for(;!Lt.done;ht++,Lt=$.next())Lt=_e(j,Lt.value,ge),Lt!==null&&(k=m(Lt,k,ht),Dt===null?Qe=Lt:Dt.sibling=Lt,Dt=Lt);return Tt&&fa(j,ht),Qe}for(qe=l(qe);!Lt.done;ht++,Lt=$.next())Lt=le(qe,j,ht,Lt.value,ge),Lt!==null&&(t&&Lt.alternate!==null&&qe.delete(Lt.key===null?ht:Lt.key),k=m(Lt,k,ht),Dt===null?Qe=Lt:Dt.sibling=Lt,Dt=Lt);return t&&qe.forEach(function(tM){return i(j,tM)}),Tt&&fa(j,ht),Qe}function Xt(j,k,$,ge){if(typeof $=="object"&&$!==null&&$.type===A&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:e:{for(var Qe=$.key;k!==null;){if(k.key===Qe){if(Qe=$.type,Qe===A){if(k.tag===7){s(j,k.sibling),ge=f(k,$.props.children),ge.return=j,j=ge;break e}}else if(k.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===b&&Ns(Qe)===k.type){s(j,k.sibling),ge=f(k,$.props),Uo(ge,$),ge.return=j,j=ge;break e}s(j,k);break}else i(j,k);k=k.sibling}$.type===A?(ge=Cs($.props.children,j.mode,ge,$.key),ge.return=j,j=ge):(ge=ql($.type,$.key,$.props,null,j.mode,ge),Uo(ge,$),ge.return=j,j=ge)}return M(j);case E:e:{for(Qe=$.key;k!==null;){if(k.key===Qe)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){s(j,k.sibling),ge=f(k,$.children||[]),ge.return=j,j=ge;break e}else{s(j,k);break}else i(j,k);k=k.sibling}ge=rf($,j.mode,ge),ge.return=j,j=ge}return M(j);case b:return $=Ns($),Xt(j,k,$,ge)}if(J($))return He(j,k,$,ge);if(Z($)){if(Qe=Z($),typeof Qe!="function")throw Error(a(150));return $=Qe.call($),Je(j,k,$,ge)}if(typeof $.then=="function")return Xt(j,k,$l($),ge);if($.$$typeof===L)return Xt(j,k,Kl(j,$),ge);ec(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(s(j,k.sibling),ge=f(k,$),ge.return=j,j=ge):(s(j,k),ge=sf($,j.mode,ge),ge.return=j,j=ge),M(j)):s(j,k)}return function(j,k,$,ge){try{Lo=0;var Qe=Xt(j,k,$,ge);return vr=null,Qe}catch(qe){if(qe===_r||qe===Ql)throw qe;var Dt=ii(29,qe,null,j.mode);return Dt.lanes=ge,Dt.return=j,Dt}}}var Is=km(!0),Xm=km(!1),Ya=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Nt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Wl(t),Rm(t,null,s),i}return Xl(t,l,i,s),Wl(t)}function No(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,$s(t,s)}}function Sf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var yf=!1;function Oo(){if(yf){var t=gr;if(t!==null)throw t}}function Io(t,i,s,l){yf=!1;var f=t.updateQueue;Ya=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var V=R,ee=V.next;V.next=null,M===null?m=ee:M.next=ee,M=V;var de=t.alternate;de!==null&&(de=de.updateQueue,R=de.lastBaseUpdate,R!==M&&(R===null?de.firstBaseUpdate=ee:R.next=ee,de.lastBaseUpdate=V))}if(m!==null){var _e=f.baseState;M=0,de=ee=V=null,R=m;do{var ae=R.lane&-536870913,le=ae!==R.lane;if(le?(Mt&ae)===ae:(l&ae)===ae){ae!==0&&ae===mr&&(yf=!0),de!==null&&(de=de.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var He=t,Je=R;ae=i;var Xt=s;switch(Je.tag){case 1:if(He=Je.payload,typeof He=="function"){_e=He.call(Xt,_e,ae);break e}_e=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Je.payload,ae=typeof He=="function"?He.call(Xt,_e,ae):He,ae==null)break e;_e=_({},_e,ae);break e;case 2:Ya=!0}}ae=R.callback,ae!==null&&(t.flags|=64,le&&(t.flags|=8192),le=f.callbacks,le===null?f.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:R.tag,payload:R.payload,callback:R.callback,next:null},de===null?(ee=de=le,V=_e):de=de.next=le,M|=ae;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;le=R,R=le.next,le.next=null,f.lastBaseUpdate=le,f.shared.pending=null}}while(!0);de===null&&(V=_e),f.baseState=V,f.firstBaseUpdate=ee,f.lastBaseUpdate=de,m===null&&(f.shared.lanes=0),es|=M,t.lanes=M,t.memoizedState=_e}}function Wm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function qm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Wm(s[t],i)}var xr=I(null),tc=I(0);function Ym(t,i){t=Ma,me(tc,t),me(xr,i),Ma=t|i.baseLanes}function Mf(){me(tc,Ma),me(xr,xr.current)}function Ef(){Ma=tc.current,q(xr),q(tc)}var ai=I(null),vi=null;function Za(t){var i=t.alternate;me(sn,sn.current&1),me(ai,t),vi===null&&(i===null||xr.current!==null||i.memoizedState!==null)&&(vi=t)}function Tf(t){me(sn,sn.current),me(ai,t),vi===null&&(vi=t)}function jm(t){t.tag===22?(me(sn,sn.current),me(ai,t),vi===null&&(vi=t)):Qa()}function Qa(){me(sn,sn.current),me(ai,ai.current)}function si(t){q(ai),vi===t&&(vi=null),q(sn)}var sn=I(0);function nc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Dh(s)||Lh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var pa=0,ct=null,Gt=null,hn=null,ic=!1,Sr=!1,Ps=!1,ac=0,Po=0,yr=null,WS=0;function nn(){throw Error(a(321))}function bf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ni(t[s],i[s]))return!1;return!0}function Af(t,i,s,l,f,m){return pa=m,ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=t===null||t.memoizedState===null?Lg:Vf,Ps=!1,m=s(l,f),Ps=!1,Sr&&(m=Zm(i,s,l,f)),Km(t),m}function Km(t){O.H=zo;var i=Gt!==null&&Gt.next!==null;if(pa=0,hn=Gt=ct=null,ic=!1,Po=0,yr=null,i)throw Error(a(300));t===null||dn||(t=t.dependencies,t!==null&&jl(t)&&(dn=!0))}function Zm(t,i,s,l){ct=t;var f=0;do{if(Sr&&(yr=null),Po=0,Sr=!1,25<=f)throw Error(a(301));if(f+=1,hn=Gt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}O.H=Ug,m=i(s,l)}while(Sr);return m}function qS(){var t=O.H,i=t.useState()[0];return i=typeof i.then=="function"?Bo(i):i,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ct.flags|=1024),i}function Rf(){var t=ac!==0;return ac=0,t}function Cf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function wf(t){if(ic){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}ic=!1}pa=0,hn=Gt=ct=null,Sr=!1,Po=ac=0,yr=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ct.memoizedState=hn=t:hn=hn.next=t,hn}function rn(){if(Gt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var i=hn===null?ct.memoizedState:hn.next;if(i!==null)hn=i,Gt=t;else{if(t===null)throw ct.alternate===null?Error(a(467)):Error(a(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},hn===null?ct.memoizedState=hn=t:hn=hn.next=t}return hn}function sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(t){var i=Po;return Po+=1,yr===null&&(yr=[]),t=Hm(yr,t,i),i=ct,(hn===null?i.memoizedState:hn.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?Lg:Vf),t}function rc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bo(t);if(t.$$typeof===L)return Rn(t)}throw Error(a(438,String(t)))}function Df(t){var i=null,s=ct.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ct.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=sc(),ct.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=fe;return i.index++,s}function ma(t,i){return typeof i=="function"?i(t):i}function oc(t){var i=rn();return Lf(i,Gt,t)}function Lf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var R=M=null,V=null,ee=i,de=!1;do{var _e=ee.lane&-536870913;if(_e!==ee.lane?(Mt&_e)===_e:(pa&_e)===_e){var ae=ee.revertLane;if(ae===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),_e===mr&&(de=!0);else if((pa&ae)===ae){ee=ee.next,ae===mr&&(de=!0);continue}else _e={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},V===null?(R=V=_e,M=m):V=V.next=_e,ct.lanes|=ae,es|=ae;_e=ee.action,Ps&&s(m,_e),m=ee.hasEagerState?ee.eagerState:s(m,_e)}else ae={lane:_e,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},V===null?(R=V=ae,M=m):V=V.next=ae,ct.lanes|=_e,es|=_e;ee=ee.next}while(ee!==null&&ee!==i);if(V===null?M=m:V.next=R,!ni(m,t.memoizedState)&&(dn=!0,de&&(s=gr,s!==null)))throw s;t.memoizedState=m,t.baseState=M,t.baseQueue=V,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Uf(t){var i=rn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do m=t(m,M.action),M=M.next;while(M!==f);ni(m,i.memoizedState)||(dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Qm(t,i,s){var l=ct,f=rn(),m=Tt;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!ni((Gt||f).memoizedState,s);if(M&&(f.memoizedState=s,dn=!0),f=f.queue,If(eg.bind(null,l,f,t),[t]),f.getSnapshot!==i||M||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,Mr(9,{destroy:void 0},$m.bind(null,l,f,s,i),null),Wt===null)throw Error(a(349));m||(pa&127)!==0||Jm(l,i,s)}return s}function Jm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ct.updateQueue,i===null?(i=sc(),ct.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function $m(t,i,s,l){i.value=s,i.getSnapshot=l,tg(i)&&ng(t)}function eg(t,i,s){return s(function(){tg(i)&&ng(t)})}function tg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ni(t,s)}catch{return!0}}function ng(t){var i=Rs(t,2);i!==null&&Zn(i,t,2)}function Nf(t){var i=Fn();if(typeof t=="function"){var s=t;if(t=s(),Ps){Ne(!0);try{s()}finally{Ne(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},i}function ig(t,i,s,l){return t.baseState=s,Lf(t,Gt,typeof l=="function"?l:ma)}function YS(t,i,s,l,f){if(uc(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};O.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,ag(i,m)):(m.next=s.next,i.pending=s.next=m)}}function ag(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=O.T,M={};O.T=M;try{var R=s(f,l),V=O.S;V!==null&&V(M,R),sg(t,i,R)}catch(ee){Of(t,i,ee)}finally{m!==null&&M.types!==null&&(m.types=M.types),O.T=m}}else try{m=s(f,l),sg(t,i,m)}catch(ee){Of(t,i,ee)}}function sg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){rg(t,i,l)},function(l){return Of(t,i,l)}):rg(t,i,s)}function rg(t,i,s){i.status="fulfilled",i.value=s,og(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,ag(t,s)))}function Of(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,og(i),i=i.next;while(i!==l)}t.action=null}function og(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function lg(t,i){return i}function cg(t,i){if(Tt){var s=Wt.formState;if(s!==null){e:{var l=ct;if(Tt){if(qt){t:{for(var f=qt,m=_i;f.nodeType!==8;){if(!m){f=null;break t}if(f=xi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){qt=xi(f.nextSibling),l=f.data==="F!";break e}}Wa(l)}l=!1}l&&(i=s[0])}}return s=Fn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lg,lastRenderedState:i},s.queue=l,s=Cg.bind(null,ct,l),l.dispatch=s,l=Nf(!1),m=Hf.bind(null,ct,!1,l.queue),l=Fn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=YS.bind(null,ct,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function ug(t){var i=rn();return fg(i,Gt,t)}function fg(t,i,s){if(i=Lf(t,i,lg)[0],t=oc(ma)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Bo(i)}catch(M){throw M===_r?Ql:M}else l=i;i=rn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ct.flags|=2048,Mr(9,{destroy:void 0},jS.bind(null,f,s),null)),[l,m,t]}function jS(t,i){t.action=i}function hg(t){var i=rn(),s=Gt;if(s!==null)return fg(i,s,t);rn(),i=i.memoizedState,s=rn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Mr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ct.updateQueue,i===null&&(i=sc(),ct.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function dg(){return rn().memoizedState}function lc(t,i,s,l){var f=Fn();ct.flags|=t,f.memoizedState=Mr(1|i,{destroy:void 0},s,l===void 0?null:l)}function cc(t,i,s,l){var f=rn();l=l===void 0?null:l;var m=f.memoizedState.inst;Gt!==null&&l!==null&&bf(l,Gt.memoizedState.deps)?f.memoizedState=Mr(i,m,s,l):(ct.flags|=t,f.memoizedState=Mr(1|i,m,s,l))}function pg(t,i){lc(8390656,8,t,i)}function If(t,i){cc(2048,8,t,i)}function KS(t){ct.flags|=4;var i=ct.updateQueue;if(i===null)i=sc(),ct.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function mg(t){var i=rn().memoizedState;return KS({ref:i,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function gg(t,i){return cc(4,2,t,i)}function _g(t,i){return cc(4,4,t,i)}function vg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function xg(t,i,s){s=s!=null?s.concat([t]):null,cc(4,4,vg.bind(null,i,t),s)}function Pf(){}function Sg(t,i){var s=rn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&bf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function yg(t,i){var s=rn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&bf(i,l[1]))return l[0];if(l=t(),Ps){Ne(!0);try{t()}finally{Ne(!1)}}return s.memoizedState=[l,i],l}function Bf(t,i,s){return s===void 0||(pa&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=M_(),ct.lanes|=t,es|=t,s)}function Mg(t,i,s,l){return ni(s,i)?s:xr.current!==null?(t=Bf(t,s,l),ni(t,i)||(dn=!0),t):(pa&42)===0||(pa&1073741824)!==0&&(Mt&261930)===0?(dn=!0,t.memoizedState=s):(t=M_(),ct.lanes|=t,es|=t,i)}function Eg(t,i,s,l,f){var m=B.p;B.p=m!==0&&8>m?m:8;var M=O.T,R={};O.T=R,Hf(t,!1,i,s);try{var V=f(),ee=O.S;if(ee!==null&&ee(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var de=XS(V,l);Fo(t,i,de,li(t))}else Fo(t,i,l,li(t))}catch(_e){Fo(t,i,{then:function(){},status:"rejected",reason:_e},li())}finally{B.p=m,M!==null&&R.types!==null&&(M.types=R.types),O.T=M}}function ZS(){}function Ff(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Tg(t).queue;Eg(t,f,i,se,s===null?ZS:function(){return bg(t),s(l)})}function Tg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:se},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function bg(t){var i=Tg(t);i.next===null&&(i=t.alternate.memoizedState),Fo(t,i.next.queue,{},li())}function zf(){return Rn(tl)}function Ag(){return rn().memoizedState}function Rg(){return rn().memoizedState}function QS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=li();t=ja(s);var l=Ka(i,t,s);l!==null&&(Zn(l,i,s),No(l,i,s)),i={cache:pf()},t.payload=i;return}i=i.return}}function JS(t,i,s){var l=li();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},uc(t)?wg(i,s):(s=nf(t,i,s,l),s!==null&&(Zn(s,t,l),Dg(s,i,l)))}function Cg(t,i,s){var l=li();Fo(t,i,s,l)}function Fo(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(uc(t))wg(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,R=m(M,s);if(f.hasEagerState=!0,f.eagerState=R,ni(R,M))return Xl(t,i,f,0),Wt===null&&kl(),!1}catch{}if(s=nf(t,i,f,l),s!==null)return Zn(s,t,l),Dg(s,i,l),!0}return!1}function Hf(t,i,s,l){if(l={lane:2,revertLane:vh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},uc(t)){if(i)throw Error(a(479))}else i=nf(t,s,l,2),i!==null&&Zn(i,t,2)}function uc(t){var i=t.alternate;return t===ct||i!==null&&i===ct}function wg(t,i){Sr=ic=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Dg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,$s(t,s)}}var zo={readContext:Rn,use:rc,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};zo.useEffectEvent=nn;var Lg={readContext:Rn,use:rc,useCallback:function(t,i){return Fn().memoizedState=[t,i===void 0?null:i],t},useContext:Rn,useEffect:pg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,lc(4194308,4,vg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return lc(4194308,4,t,i)},useInsertionEffect:function(t,i){lc(4,2,t,i)},useMemo:function(t,i){var s=Fn();i=i===void 0?null:i;var l=t();if(Ps){Ne(!0);try{t()}finally{Ne(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Fn();if(s!==void 0){var f=s(i);if(Ps){Ne(!0);try{s(i)}finally{Ne(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=JS.bind(null,ct,t),[l.memoizedState,t]},useRef:function(t){var i=Fn();return t={current:t},i.memoizedState=t},useState:function(t){t=Nf(t);var i=t.queue,s=Cg.bind(null,ct,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Pf,useDeferredValue:function(t,i){var s=Fn();return Bf(s,t,i)},useTransition:function(){var t=Nf(!1);return t=Eg.bind(null,ct,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ct,f=Fn();if(Tt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Wt===null)throw Error(a(349));(Mt&127)!==0||Jm(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,pg(eg.bind(null,l,m,t),[t]),l.flags|=2048,Mr(9,{destroy:void 0},$m.bind(null,l,m,s,i),null),s},useId:function(){var t=Fn(),i=Wt.identifierPrefix;if(Tt){var s=Gi,l=Vi;s=(l&~(1<<32-Ue(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=ac++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=WS++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:zf,useFormState:cg,useActionState:cg,useOptimistic:function(t){var i=Fn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Hf.bind(null,ct,!0,s),s.dispatch=i,[t,i]},useMemoCache:Df,useCacheRefresh:function(){return Fn().memoizedState=QS.bind(null,ct)},useEffectEvent:function(t){var i=Fn(),s={impl:t};return i.memoizedState=s,function(){if((Nt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Vf={readContext:Rn,use:rc,useCallback:Sg,useContext:Rn,useEffect:If,useImperativeHandle:xg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:yg,useReducer:oc,useRef:dg,useState:function(){return oc(ma)},useDebugValue:Pf,useDeferredValue:function(t,i){var s=rn();return Mg(s,Gt.memoizedState,t,i)},useTransition:function(){var t=oc(ma)[0],i=rn().memoizedState;return[typeof t=="boolean"?t:Bo(t),i]},useSyncExternalStore:Qm,useId:Ag,useHostTransitionStatus:zf,useFormState:ug,useActionState:ug,useOptimistic:function(t,i){var s=rn();return ig(s,Gt,t,i)},useMemoCache:Df,useCacheRefresh:Rg};Vf.useEffectEvent=mg;var Ug={readContext:Rn,use:rc,useCallback:Sg,useContext:Rn,useEffect:If,useImperativeHandle:xg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:yg,useReducer:Uf,useRef:dg,useState:function(){return Uf(ma)},useDebugValue:Pf,useDeferredValue:function(t,i){var s=rn();return Gt===null?Bf(s,t,i):Mg(s,Gt.memoizedState,t,i)},useTransition:function(){var t=Uf(ma)[0],i=rn().memoizedState;return[typeof t=="boolean"?t:Bo(t),i]},useSyncExternalStore:Qm,useId:Ag,useHostTransitionStatus:zf,useFormState:hg,useActionState:hg,useOptimistic:function(t,i){var s=rn();return Gt!==null?ig(s,Gt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Df,useCacheRefresh:Rg};Ug.useEffectEvent=mg;function Gf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var kf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=li(),f=ja(l);f.payload=i,s!=null&&(f.callback=s),i=Ka(t,f,l),i!==null&&(Zn(i,t,l),No(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=li(),f=ja(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ka(t,f,l),i!==null&&(Zn(i,t,l),No(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=li(),l=ja(s);l.tag=2,i!=null&&(l.callback=i),i=Ka(t,l,s),i!==null&&(Zn(i,t,s),No(i,t,s))}};function Ng(t,i,s,l,f,m,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!bo(s,l)||!bo(f,m):!0}function Og(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&kf.enqueueReplaceState(i,i.state,null)}function Bs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function Ig(t){Gl(t)}function Pg(t){console.error(t)}function Bg(t){Gl(t)}function fc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Fg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Xf(t,i,s){return s=ja(s),s.tag=3,s.payload={element:null},s.callback=function(){fc(t,i)},s}function zg(t){return t=ja(t),t.tag=3,t}function Hg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){Fg(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){Fg(i,s,l),typeof f!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function $S(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&pr(i,s,f,!0),s=ai.current,s!==null){switch(s.tag){case 31:case 13:return vi===null?Ec():s.alternate===null&&an===0&&(an=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Jl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),mh(t,l,f)),!1;case 22:return s.flags|=65536,l===Jl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),mh(t,l,f)),!1}throw Error(a(435,s.tag))}return mh(t,l,f),Ec(),!1}if(Tt)return i=ai.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==cf&&(t=Error(a(422),{cause:l}),Co(pi(t,s)))):(l!==cf&&(i=Error(a(423),{cause:l}),Co(pi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=pi(l,s),f=Xf(t.stateNode,l,f),Sf(t,f),an!==4&&(an=2)),!1;var m=Error(a(520),{cause:l});if(m=pi(m,s),Yo===null?Yo=[m]:Yo.push(m),an!==4&&(an=2),i===null)return!0;l=pi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Xf(s.stateNode,l,t),Sf(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ts===null||!ts.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=zg(f),Hg(f,t,s,l),Sf(s,f),!1}s=s.return}while(s!==null);return!1}var Wf=Error(a(461)),dn=!1;function Cn(t,i,s,l){i.child=t===null?Xm(i,null,s,l):Is(i,t.child,s,l)}function Vg(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var M={};for(var R in l)R!=="ref"&&(M[R]=l[R])}else M=l;return Ls(i),l=Af(t,i,s,M,m,f),R=Rf(),t!==null&&!dn?(Cf(t,i,f),ga(t,i,f)):(Tt&&R&&of(i),i.flags|=1,Cn(t,i,l,f),i.child)}function Gg(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!af(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,kg(t,i,m,l,f)):(t=ql(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!$f(t,f)){var M=m.memoizedProps;if(s=s.compare,s=s!==null?s:bo,s(M,l)&&t.ref===i.ref)return ga(t,i,f)}return i.flags|=1,t=ua(m,l),t.ref=i.ref,t.return=i,i.child=t}function kg(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(bo(m,l)&&t.ref===i.ref)if(dn=!1,i.pendingProps=l=m,$f(t,f))(t.flags&131072)!==0&&(dn=!0);else return i.lanes=t.lanes,ga(t,i,f)}return qf(t,i,s,l,f)}function Xg(t,i,s,l){var f=l.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,i.child=null;return Wg(t,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(i,m!==null?m.cachePool:null),m!==null?Ym(i,m):Mf(),jm(i);else return l=i.lanes=536870912,Wg(t,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(Zl(i,m.cachePool),Ym(i,m),Qa(),i.memoizedState=null):(t!==null&&Zl(i,null),Mf(),Qa());return Cn(t,i,f,s),i.child}function Ho(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Wg(t,i,s,l,f){var m=gf();return m=m===null?null:{parent:fn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},t!==null&&Zl(i,null),Mf(),jm(i),t!==null&&pr(t,i,l,!0),i.childLanes=f,null}function hc(t,i){return i=pc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function qg(t,i,s){return Is(i,t.child,null,s),t=hc(i,i.pendingProps),t.flags|=2,si(i),i.memoizedState=null,t}function ey(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Tt){if(l.mode==="hidden")return t=hc(i,l),i.lanes=536870912,Ho(null,t);if(Tf(i),(t=qt)?(t=a0(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ka!==null?{id:Vi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},s=wm(t),s.return=i,i.child=s,An=i,qt=null)):t=null,t===null)throw Wa(i);return i.lanes=536870912,null}return hc(i,l)}var m=t.memoizedState;if(m!==null){var M=m.dehydrated;if(Tf(i),f)if(i.flags&256)i.flags&=-257,i=qg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(dn||pr(t,i,s,!1),f=(s&t.childLanes)!==0,dn||f){if(l=Wt,l!==null&&(M=Ll(l,s),M!==0&&M!==m.retryLane))throw m.retryLane=M,Rs(t,M),Zn(l,t,M),Wf;Ec(),i=qg(t,i,s)}else t=m.treeContext,qt=xi(M.nextSibling),An=i,Tt=!0,Xa=null,_i=!1,t!==null&&Um(i,t),i=hc(i,l),i.flags|=4096;return i}return t=ua(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function dc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function qf(t,i,s,l,f){return Ls(i),s=Af(t,i,s,l,void 0,f),l=Rf(),t!==null&&!dn?(Cf(t,i,f),ga(t,i,f)):(Tt&&l&&of(i),i.flags|=1,Cn(t,i,s,f),i.child)}function Yg(t,i,s,l,f,m){return Ls(i),i.updateQueue=null,s=Zm(i,l,s,f),Km(t),l=Rf(),t!==null&&!dn?(Cf(t,i,m),ga(t,i,m)):(Tt&&l&&of(i),i.flags|=1,Cn(t,i,s,m),i.child)}function jg(t,i,s,l,f){if(Ls(i),i.stateNode===null){var m=ur,M=s.contextType;typeof M=="object"&&M!==null&&(m=Rn(M)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=kf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},vf(i),M=s.contextType,m.context=typeof M=="object"&&M!==null?Rn(M):ur,m.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(Gf(i,s,M,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&kf.enqueueReplaceState(m,m.state,null),Io(i,l,m,f),Oo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var R=i.memoizedProps,V=Bs(s,R);m.props=V;var ee=m.context,de=s.contextType;M=ur,typeof de=="object"&&de!==null&&(M=Rn(de));var _e=s.getDerivedStateFromProps;de=typeof _e=="function"||typeof m.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,de||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(R||ee!==M)&&Og(i,m,l,M),Ya=!1;var ae=i.memoizedState;m.state=ae,Io(i,l,m,f),Oo(),ee=i.memoizedState,R||ae!==ee||Ya?(typeof _e=="function"&&(Gf(i,s,_e,l),ee=i.memoizedState),(V=Ya||Ng(i,s,V,l,ae,ee,M))?(de||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ee),m.props=l,m.state=ee,m.context=M,l=V):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,xf(t,i),M=i.memoizedProps,de=Bs(s,M),m.props=de,_e=i.pendingProps,ae=m.context,ee=s.contextType,V=ur,typeof ee=="object"&&ee!==null&&(V=Rn(ee)),R=s.getDerivedStateFromProps,(ee=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==_e||ae!==V)&&Og(i,m,l,V),Ya=!1,ae=i.memoizedState,m.state=ae,Io(i,l,m,f),Oo();var le=i.memoizedState;M!==_e||ae!==le||Ya||t!==null&&t.dependencies!==null&&jl(t.dependencies)?(typeof R=="function"&&(Gf(i,s,R,l),le=i.memoizedState),(de=Ya||Ng(i,s,de,l,ae,le,V)||t!==null&&t.dependencies!==null&&jl(t.dependencies))?(ee||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,le,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,le,V)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=le),m.props=l,m.state=le,m.context=V,l=de):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,dc(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=Is(i,t.child,null,f),i.child=Is(i,null,s,f)):Cn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=ga(t,i,f),t}function Kg(t,i,s,l){return ws(),i.flags|=256,Cn(t,i,s,l),i.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(t){return{baseLanes:t,cachePool:Fm()}}function Kf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=oi),t}function Zg(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(Tt){if(f?Za(i):Qa(),(t=qt)?(t=a0(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:ka!==null?{id:Vi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},s=wm(t),s.return=i,i.child=s,An=i,qt=null)):t=null,t===null)throw Wa(i);return Lh(t)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(Qa(),f=i.mode,R=pc({mode:"hidden",children:R},f),l=Cs(l,f,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=jf(s),l.childLanes=Kf(t,M,s),i.memoizedState=Yf,Ho(null,l)):(Za(i),Zf(i,R))}var V=t.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(m)i.flags&256?(Za(i),i.flags&=-257,i=Qf(t,i,s)):i.memoizedState!==null?(Qa(),i.child=t.child,i.flags|=128,i=null):(Qa(),R=l.fallback,f=i.mode,l=pc({mode:"visible",children:l.children},f),R=Cs(R,f,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,Is(i,t.child,null,s),l=i.child,l.memoizedState=jf(s),l.childLanes=Kf(t,M,s),i.memoizedState=Yf,i=Ho(null,l));else if(Za(i),Lh(R)){if(M=R.nextSibling&&R.nextSibling.dataset,M)var ee=M.dgst;M=ee,l=Error(a(419)),l.stack="",l.digest=M,Co({value:l,source:null,stack:null}),i=Qf(t,i,s)}else if(dn||pr(t,i,s,!1),M=(s&t.childLanes)!==0,dn||M){if(M=Wt,M!==null&&(l=Ll(M,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Rs(t,l),Zn(M,t,l),Wf;Dh(R)||Ec(),i=Qf(t,i,s)}else Dh(R)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,qt=xi(R.nextSibling),An=i,Tt=!0,Xa=null,_i=!1,t!==null&&Um(i,t),i=Zf(i,l.children),i.flags|=4096);return i}return f?(Qa(),R=l.fallback,f=i.mode,V=t.child,ee=V.sibling,l=ua(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,ee!==null?R=ua(ee,R):(R=Cs(R,f,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,Ho(null,l),l=i.child,R=t.child.memoizedState,R===null?R=jf(s):(f=R.cachePool,f!==null?(V=fn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=Fm(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=Kf(t,M,s),i.memoizedState=Yf,Ho(t.child,l)):(Za(i),s=t.child,t=s.sibling,s=ua(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=s,i.memoizedState=null,s)}function Zf(t,i){return i=pc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function pc(t,i){return t=ii(22,t,null,i),t.lanes=0,t}function Qf(t,i,s){return Is(i,t.child,null,s),t=Zf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Qg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),hf(t.return,i,s)}function Jf(t,i,s,l,f,m){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:m}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=s,M.tailMode=f,M.treeForkCount=m)}function Jg(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var M=sn.current,R=(M&2)!==0;if(R?(M=M&1|2,i.flags|=128):M&=1,me(sn,M),Cn(t,i,l,s),l=Tt?Ro:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qg(t,s,i);else if(t.tag===19)Qg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&nc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Jf(i,!1,f,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&nc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Jf(i,!0,s,null,m,l);break;case"together":Jf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ga(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),es|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(pr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ua(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ua(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function $f(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&jl(t)))}function ty(t,i,s){switch(i.tag){case 3:Te(i,i.stateNode.containerInfo),qa(i,fn,t.memoizedState.cache),ws();break;case 27:case 5:Ze(i);break;case 4:Te(i,i.stateNode.containerInfo);break;case 10:qa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Tf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Za(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Zg(t,i,s):(Za(i),t=ga(t,i,s),t!==null?t.sibling:null);Za(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(pr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Jg(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),me(sn,sn.current),l)break;return null;case 22:return i.lanes=0,Xg(t,i,s,i.pendingProps);case 24:qa(i,fn,t.memoizedState.cache)}return ga(t,i,s)}function $g(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)dn=!0;else{if(!$f(t,s)&&(i.flags&128)===0)return dn=!1,ty(t,i,s);dn=(t.flags&131072)!==0}else dn=!1,Tt&&(i.flags&1048576)!==0&&Lm(i,Ro,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Ns(i.elementType),i.type=t,typeof t=="function")af(t)?(l=Bs(t,l),i.tag=1,i=jg(null,i,t,l,s)):(i.tag=0,i=qf(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===D){i.tag=11,i=Vg(null,i,t,l,s);break e}else if(f===F){i.tag=14,i=Gg(null,i,t,l,s);break e}}throw i=ce(t)||t,Error(a(306,i,""))}}return i;case 0:return qf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Bs(l,i.pendingProps),jg(t,i,l,f,s);case 3:e:{if(Te(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,xf(t,i),Io(i,l,null,s);var M=i.memoizedState;if(l=M.cache,qa(i,fn,l),l!==m.cache&&df(i,[fn],s,!0),Oo(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Kg(t,i,l,s);break e}else if(l!==f){f=pi(Error(a(424)),i),Co(f),i=Kg(t,i,l,s);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qt=xi(t.firstChild),An=i,Tt=!0,Xa=null,_i=!0,s=Xm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ws(),l===f){i=ga(t,i,s);break e}Cn(t,i,l,s)}i=i.child}return i;case 26:return dc(t,i),t===null?(s=u0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Tt||(s=i.type,t=i.pendingProps,l=Dc(ie.current).createElement(s),l[ln]=i,l[gn]=t,wn(l,s,t),X(l),i.stateNode=l):i.memoizedState=u0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ze(i),t===null&&Tt&&(l=i.stateNode=o0(i.type,i.pendingProps,ie.current),An=i,_i=!0,f=qt,ss(i.type)?(Uh=f,qt=xi(l.firstChild)):qt=f),Cn(t,i,i.pendingProps.children,s),dc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Tt&&((f=l=qt)&&(l=Ly(l,i.type,i.pendingProps,_i),l!==null?(i.stateNode=l,An=i,qt=xi(l.firstChild),_i=!1,f=!0):f=!1),f||Wa(i)),Ze(i),f=i.type,m=i.pendingProps,M=t!==null?t.memoizedProps:null,l=m.children,Rh(f,m)?l=null:M!==null&&Rh(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=Af(t,i,qS,null,null,s),tl._currentValue=f),dc(t,i),Cn(t,i,l,s),i.child;case 6:return t===null&&Tt&&((t=s=qt)&&(s=Uy(s,i.pendingProps,_i),s!==null?(i.stateNode=s,An=i,qt=null,t=!0):t=!1),t||Wa(i)),null;case 13:return Zg(t,i,s);case 4:return Te(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Is(i,null,l,s):Cn(t,i,l,s),i.child;case 11:return Vg(t,i,i.type,i.pendingProps,s);case 7:return Cn(t,i,i.pendingProps,s),i.child;case 8:return Cn(t,i,i.pendingProps.children,s),i.child;case 12:return Cn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,qa(i,i.type,l.value),Cn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ls(i),f=Rn(f),l=l(f),i.flags|=1,Cn(t,i,l,s),i.child;case 14:return Gg(t,i,i.type,i.pendingProps,s);case 15:return kg(t,i,i.type,i.pendingProps,s);case 19:return Jg(t,i,s);case 31:return ey(t,i,s);case 22:return Xg(t,i,s,i.pendingProps);case 24:return Ls(i),l=Rn(fn),t===null?(f=gf(),f===null&&(f=Wt,m=pf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},vf(i),qa(i,fn,f)):((t.lanes&s)!==0&&(xf(t,i),Io(i,null,null,s),Oo()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),qa(i,fn,l)):(l=m.cache,qa(i,fn,l),l!==f.cache&&df(i,[fn],s,!0))),Cn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function _a(t){t.flags|=4}function eh(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(A_())t.flags|=8192;else throw Os=Jl,_f}else t.flags&=-16777217}function e_(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!m0(i))if(A_())t.flags|=8192;else throw Os=Jl,_f}function mc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Pt():536870912,t.lanes|=i,Ar|=i)}function Vo(t,i){if(!Tt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Yt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function ny(t,i,s){var l=i.pendingProps;switch(lf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(i),null;case 1:return Yt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),da(fn),Ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(dr(i)?_a(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,uf())),Yt(i),null;case 26:var f=i.type,m=i.memoizedState;return t===null?(_a(i),m!==null?(Yt(i),e_(i,m)):(Yt(i),eh(i,f,null,l,s))):m?m!==t.memoizedState?(_a(i),Yt(i),e_(i,m)):(Yt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&_a(i),Yt(i),eh(i,f,t,l,s)),null;case 27:if($e(i),s=ie.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Yt(i),null}t=Ae.current,dr(i)?Nm(i):(t=o0(f,l,s),i.stateNode=t,_a(i))}return Yt(i),null;case 5:if($e(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Yt(i),null}if(m=Ae.current,dr(i))Nm(i);else{var M=Dc(ie.current);switch(m){case 1:m=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=M.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}m[ln]=i,m[gn]=l;e:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)m.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break e;for(;M.sibling===null;){if(M.return===null||M.return===i)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=m;e:switch(wn(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&_a(i)}}return Yt(i),eh(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&_a(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ie.current,dr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=An,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[ln]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Z_(t.nodeValue,s)),t||Wa(i,!0)}else t=Dc(t).createTextNode(l),t[ln]=i,i.stateNode=t}return Yt(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=dr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[ln]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Yt(i),t=!1}else s=uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(si(i),i):(si(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Yt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=dr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[ln]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Yt(i),f=!1}else f=uf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(si(i),i):(si(i),null)}return si(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),mc(i,i.updateQueue),Yt(i),null);case 4:return Ge(),t===null&&Mh(i.stateNode.containerInfo),Yt(i),null;case 10:return da(i.type),Yt(i),null;case 19:if(q(sn),l=i.memoizedState,l===null)return Yt(i),null;if(f=(i.flags&128)!==0,m=l.rendering,m===null)if(f)Vo(l,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=nc(t),m!==null){for(i.flags|=128,Vo(l,!1),t=m.updateQueue,i.updateQueue=t,mc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Cm(s,t),s=s.sibling;return me(sn,sn.current&1|2),Tt&&fa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&T()>Sc&&(i.flags|=128,f=!0,Vo(l,!1),i.lanes=4194304)}else{if(!f)if(t=nc(m),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,mc(i,t),Vo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Tt)return Yt(i),null}else 2*T()-l.renderingStartTime>Sc&&s!==536870912&&(i.flags|=128,f=!0,Vo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(t=l.last,t!==null?t.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=T(),t.sibling=null,s=sn.current,me(sn,f?s&1|2:s&1),Tt&&fa(i,l.treeForkCount),t):(Yt(i),null);case 22:case 23:return si(i),Ef(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Yt(i),i.subtreeFlags&6&&(i.flags|=8192)):Yt(i),s=i.updateQueue,s!==null&&mc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&q(Us),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),da(fn),Yt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function iy(t,i){switch(lf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return da(fn),Ge(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return $e(i),null;case 31:if(i.memoizedState!==null){if(si(i),i.alternate===null)throw Error(a(340));ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(si(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return q(sn),null;case 4:return Ge(),null;case 10:return da(i.type),null;case 22:case 23:return si(i),Ef(),t!==null&&q(Us),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return da(fn),null;case 25:return null;default:return null}}function t_(t,i){switch(lf(i),i.tag){case 3:da(fn),Ge();break;case 26:case 27:case 5:$e(i);break;case 4:Ge();break;case 31:i.memoizedState!==null&&si(i);break;case 13:si(i);break;case 19:q(sn);break;case 10:da(i.type);break;case 22:case 23:si(i),Ef(),t!==null&&q(Us);break;case 24:da(fn)}}function Go(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,M=s.inst;l=m(),M.destroy=l}s=s.next}while(s!==f)}}catch(R){Ft(i,i.return,R)}}function Ja(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var M=l.inst,R=M.destroy;if(R!==void 0){M.destroy=void 0,f=i;var V=s,ee=R;try{ee()}catch(de){Ft(f,V,de)}}}l=l.next}while(l!==m)}}catch(de){Ft(i,i.return,de)}}function n_(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{qm(i,s)}catch(l){Ft(t,t.return,l)}}}function i_(t,i,s){s.props=Bs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Ft(t,i,l)}}function ko(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Ft(t,i,f)}}function ki(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Ft(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Ft(t,i,f)}else s.current=null}function a_(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Ft(t,t.return,f)}}function th(t,i,s){try{var l=t.stateNode;by(l,t.type,s,i),l[gn]=i}catch(f){Ft(t,t.return,f)}}function s_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ss(t.type)||t.tag===4}function nh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||s_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ss(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=la));else if(l!==4&&(l===27&&ss(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(ih(t,i,s),t=t.sibling;t!==null;)ih(t,i,s),t=t.sibling}function gc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&ss(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(gc(t,i,s),t=t.sibling;t!==null;)gc(t,i,s),t=t.sibling}function r_(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);wn(i,l,s),i[ln]=t,i[gn]=s}catch(m){Ft(t,t.return,m)}}var va=!1,pn=!1,ah=!1,o_=typeof WeakSet=="function"?WeakSet:Set,En=null;function ay(t,i){if(t=t.containerInfo,bh=Bc,t=xm(t),Zu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var M=0,R=-1,V=-1,ee=0,de=0,_e=t,ae=null;t:for(;;){for(var le;_e!==s||f!==0&&_e.nodeType!==3||(R=M+f),_e!==m||l!==0&&_e.nodeType!==3||(V=M+l),_e.nodeType===3&&(M+=_e.nodeValue.length),(le=_e.firstChild)!==null;)ae=_e,_e=le;for(;;){if(_e===t)break t;if(ae===s&&++ee===f&&(R=M),ae===m&&++de===l&&(V=M),(le=_e.nextSibling)!==null)break;_e=ae,ae=_e.parentNode}_e=le}s=R===-1||V===-1?null:{start:R,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ah={focusedElem:t,selectionRange:s},Bc=!1,En=i;En!==null;)if(i=En,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,En=t;else for(;En!==null;){switch(i=En,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var He=Bs(s.type,f);t=l.getSnapshotBeforeUpdate(He,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(Je){Ft(s,s.return,Je)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)wh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,En=t;break}En=i.return}}function l_(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(t,s),l&4&&Go(5,s);break;case 1:if(Sa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(M){Ft(s,s.return,M)}else{var f=Bs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Ft(s,s.return,M)}}l&64&&n_(s),l&512&&ko(s,s.return);break;case 3:if(Sa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{qm(t,i)}catch(M){Ft(s,s.return,M)}}break;case 27:i===null&&l&4&&r_(s);case 26:case 5:Sa(t,s),i===null&&l&4&&a_(s),l&512&&ko(s,s.return);break;case 12:Sa(t,s);break;case 31:Sa(t,s),l&4&&f_(t,s);break;case 13:Sa(t,s),l&4&&h_(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=dy.bind(null,s),Ny(t,s))));break;case 22:if(l=s.memoizedState!==null||va,!l){i=i!==null&&i.memoizedState!==null||pn,f=va;var m=pn;va=l,(pn=i)&&!m?ya(t,s,(s.subtreeFlags&8772)!==0):Sa(t,s),va=f,pn=m}break;case 30:break;default:Sa(t,s)}}function c_(t){var i=t.alternate;i!==null&&(t.alternate=null,c_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&_o(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,qn=!1;function xa(t,i,s){for(s=s.child;s!==null;)u_(t,i,s),s=s.sibling}function u_(t,i,s){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(Ee,s)}catch{}switch(s.tag){case 26:pn||ki(s,i),xa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:pn||ki(s,i);var l=Jt,f=qn;ss(s.type)&&(Jt=s.stateNode,qn=!1),xa(t,i,s),Jo(s.stateNode),Jt=l,qn=f;break;case 5:pn||ki(s,i);case 6:if(l=Jt,f=qn,Jt=null,xa(t,i,s),Jt=l,qn=f,Jt!==null)if(qn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(s.stateNode)}catch(m){Ft(s,i,m)}else try{Jt.removeChild(s.stateNode)}catch(m){Ft(s,i,m)}break;case 18:Jt!==null&&(qn?(t=Jt,n0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Or(t)):n0(Jt,s.stateNode));break;case 4:l=Jt,f=qn,Jt=s.stateNode.containerInfo,qn=!0,xa(t,i,s),Jt=l,qn=f;break;case 0:case 11:case 14:case 15:Ja(2,s,i),pn||Ja(4,s,i),xa(t,i,s);break;case 1:pn||(ki(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&i_(s,i,l)),xa(t,i,s);break;case 21:xa(t,i,s);break;case 22:pn=(l=pn)||s.memoizedState!==null,xa(t,i,s),pn=l;break;default:xa(t,i,s)}}function f_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Or(t)}catch(s){Ft(i,i.return,s)}}}function h_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Or(t)}catch(s){Ft(i,i.return,s)}}function sy(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new o_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new o_),i;default:throw Error(a(435,t.tag))}}function _c(t,i){var s=sy(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=py.bind(null,t,l);l.then(f,f)}})}function Yn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,M=i,R=M;e:for(;R!==null;){switch(R.tag){case 27:if(ss(R.type)){Jt=R.stateNode,qn=!1;break e}break;case 5:Jt=R.stateNode,qn=!1;break e;case 3:case 4:Jt=R.stateNode.containerInfo,qn=!0;break e}R=R.return}if(Jt===null)throw Error(a(160));u_(m,M,f),Jt=null,qn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)d_(i,t),i=i.sibling}var Di=null;function d_(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(i,t),jn(t),l&4&&(Ja(3,t,t.return),Go(3,t),Ja(5,t,t.return));break;case 1:Yn(i,t),jn(t),l&512&&(pn||s===null||ki(s,s.return)),l&64&&va&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Di;if(Yn(i,t),jn(t),l&512&&(pn||s===null||ki(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ms]||m[ln]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),wn(m,l,s),m[ln]=t,X(m),l=m;break e;case"link":var M=d0("link","href",f).get(l+(s.href||""));if(M){for(var R=0;R<M.length;R++)if(m=M[R],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(R,1);break t}}m=f.createElement(l),wn(m,l,s),f.head.appendChild(m);break;case"meta":if(M=d0("meta","content",f).get(l+(s.content||""))){for(R=0;R<M.length;R++)if(m=M[R],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(R,1);break t}}m=f.createElement(l),wn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[ln]=t,X(m),l=m}t.stateNode=l}else p0(f,t.type,t.stateNode);else t.stateNode=h0(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?p0(f,t.type,t.stateNode):h0(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&th(t,t.memoizedProps,s.memoizedProps)}break;case 27:Yn(i,t),jn(t),l&512&&(pn||s===null||ki(s,s.return)),s!==null&&l&4&&th(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Yn(i,t),jn(t),l&512&&(pn||s===null||ki(s,s.return)),t.flags&32){f=t.stateNode;try{Bn(f,"")}catch(He){Ft(t,t.return,He)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,th(t,f,s!==null?s.memoizedProps:f)),l&1024&&(ah=!0);break;case 6:if(Yn(i,t),jn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(He){Ft(t,t.return,He)}}break;case 3:if(Nc=null,f=Di,Di=Lc(i.containerInfo),Yn(i,t),Di=f,jn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Or(i.containerInfo)}catch(He){Ft(t,t.return,He)}ah&&(ah=!1,p_(t));break;case 4:l=Di,Di=Lc(t.stateNode.containerInfo),Yn(i,t),jn(t),Di=l;break;case 12:Yn(i,t),jn(t);break;case 31:Yn(i,t),jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_c(t,l)));break;case 13:Yn(i,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(xc=T()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_c(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,ee=va,de=pn;if(va=ee||f,pn=de||V,Yn(i,t),pn=de,va=ee,jn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||V||va||pn||Fs(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(m=V.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{R=V.stateNode;var _e=V.memoizedProps.style,ae=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;R.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(He){Ft(V,V.return,He)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(He){Ft(V,V.return,He)}}}else if(i.tag===18){if(s===null){V=i;try{var le=V.stateNode;f?i0(le,!0):i0(V.stateNode,!1)}catch(He){Ft(V,V.return,He)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,_c(t,s))));break;case 19:Yn(i,t),jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_c(t,l)));break;case 30:break;case 21:break;default:Yn(i,t),jn(t)}}function jn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(s_(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=nh(t);gc(t,m,f);break;case 5:var M=s.stateNode;s.flags&32&&(Bn(M,""),s.flags&=-33);var R=nh(t);gc(t,R,M);break;case 3:case 4:var V=s.stateNode.containerInfo,ee=nh(t);ih(t,ee,V);break;default:throw Error(a(161))}}catch(de){Ft(t,t.return,de)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function p_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;p_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Sa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)l_(t,i.alternate,i),i=i.sibling}function Fs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ja(4,i,i.return),Fs(i);break;case 1:ki(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&i_(i,i.return,s),Fs(i);break;case 27:Jo(i.stateNode);case 26:case 5:ki(i,i.return),Fs(i);break;case 22:i.memoizedState===null&&Fs(i);break;case 30:Fs(i);break;default:Fs(i)}t=t.sibling}}function ya(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:ya(f,m,s),Go(4,m);break;case 1:if(ya(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ee){Ft(l,l.return,ee)}if(l=m,f=l.updateQueue,f!==null){var R=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)Wm(V[f],R)}catch(ee){Ft(l,l.return,ee)}}s&&M&64&&n_(m),ko(m,m.return);break;case 27:r_(m);case 26:case 5:ya(f,m,s),s&&l===null&&M&4&&a_(m),ko(m,m.return);break;case 12:ya(f,m,s);break;case 31:ya(f,m,s),s&&M&4&&f_(f,m);break;case 13:ya(f,m,s),s&&M&4&&h_(f,m);break;case 22:m.memoizedState===null&&ya(f,m,s),ko(m,m.return);break;case 30:break;default:ya(f,m,s)}i=i.sibling}}function sh(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&wo(s))}function rh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&wo(t))}function Li(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)m_(t,i,s,l),i=i.sibling}function m_(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Li(t,i,s,l),f&2048&&Go(9,i);break;case 1:Li(t,i,s,l);break;case 3:Li(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&wo(t)));break;case 12:if(f&2048){Li(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,M=m.id,R=m.onPostCommit;typeof R=="function"&&R(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Ft(i,i.return,V)}}else Li(t,i,s,l);break;case 31:Li(t,i,s,l);break;case 13:Li(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?Li(t,i,s,l):Xo(t,i):m._visibility&2?Li(t,i,s,l):(m._visibility|=2,Er(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&sh(M,i);break;case 24:Li(t,i,s,l),f&2048&&rh(i.alternate,i);break;default:Li(t,i,s,l)}}function Er(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,M=i,R=s,V=l,ee=M.flags;switch(M.tag){case 0:case 11:case 15:Er(m,M,R,V,f),Go(8,M);break;case 23:break;case 22:var de=M.stateNode;M.memoizedState!==null?de._visibility&2?Er(m,M,R,V,f):Xo(m,M):(de._visibility|=2,Er(m,M,R,V,f)),f&&ee&2048&&sh(M.alternate,M);break;case 24:Er(m,M,R,V,f),f&&ee&2048&&rh(M.alternate,M);break;default:Er(m,M,R,V,f)}i=i.sibling}}function Xo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Xo(s,l),f&2048&&sh(l.alternate,l);break;case 24:Xo(s,l),f&2048&&rh(l.alternate,l);break;default:Xo(s,l)}i=i.sibling}}var Wo=8192;function Tr(t,i,s){if(t.subtreeFlags&Wo)for(t=t.child;t!==null;)g_(t,i,s),t=t.sibling}function g_(t,i,s){switch(t.tag){case 26:Tr(t,i,s),t.flags&Wo&&t.memoizedState!==null&&Wy(s,Di,t.memoizedState,t.memoizedProps);break;case 5:Tr(t,i,s);break;case 3:case 4:var l=Di;Di=Lc(t.stateNode.containerInfo),Tr(t,i,s),Di=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Wo,Wo=16777216,Tr(t,i,s),Wo=l):Tr(t,i,s));break;default:Tr(t,i,s)}}function __(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function qo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];En=l,x_(l,t)}__(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)v_(t),t=t.sibling}function v_(t){switch(t.tag){case 0:case 11:case 15:qo(t),t.flags&2048&&Ja(9,t,t.return);break;case 3:qo(t);break;case 12:qo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,vc(t)):qo(t);break;default:qo(t)}}function vc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];En=l,x_(l,t)}__(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ja(8,i,i.return),vc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,vc(i));break;default:vc(i)}t=t.sibling}}function x_(t,i){for(;En!==null;){var s=En;switch(s.tag){case 0:case 11:case 15:Ja(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:wo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,En=l;else e:for(s=t;En!==null;){l=En;var f=l.sibling,m=l.return;if(c_(l),l===s){En=null;break e}if(f!==null){f.return=m,En=f;break e}En=m}}}var ry={getCacheForType:function(t){var i=Rn(fn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Rn(fn).controller.signal}},oy=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Wt=null,vt=null,Mt=0,Bt=0,ri=null,$a=!1,br=!1,oh=!1,Ma=0,an=0,es=0,zs=0,lh=0,oi=0,Ar=0,Yo=null,Kn=null,ch=!1,xc=0,S_=0,Sc=1/0,yc=null,ts=null,vn=0,ns=null,Rr=null,Ea=0,uh=0,fh=null,y_=null,jo=0,hh=null;function li(){return(Nt&2)!==0&&Mt!==0?Mt&-Mt:O.T!==null?vh():Hi()}function M_(){if(oi===0)if((Mt&536870912)===0||Tt){var t=be;be<<=1,(be&3932160)===0&&(be=262144),oi=t}else oi=536870912;return t=ai.current,t!==null&&(t.flags|=32),oi}function Zn(t,i,s){(t===Wt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(Cr(t,0),is(t,Mt,oi,!1)),On(t,s),((Nt&2)===0||t!==Wt)&&(t===Wt&&((Nt&2)===0&&(zs|=s),an===4&&is(t,Mt,oi,!1)),Xi(t))}function E_(t,i,s){if((Nt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Fe(t,i),f=l?uy(t,i):ph(t,i,!0),m=l;do{if(f===0){br&&!l&&is(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!ly(s)){f=ph(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var R=t;f=Yo;var V=R.current.memoizedState.isDehydrated;if(V&&(Cr(R,M).flags|=256),M=ph(R,M,!1),M!==2){if(oh&&!V){R.errorRecoveryDisabledLanes|=m,zs|=m,f=4;break e}m=Kn,Kn=f,m!==null&&(Kn===null?Kn=m:Kn.push.apply(Kn,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){Cr(t,0),is(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:is(l,i,oi,!$a);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=xc+300-T(),10<f)){if(is(l,i,oi,!$a),ue(l,0,!0)!==0)break e;Ea=i,l.timeoutHandle=e0(T_.bind(null,l,s,Kn,yc,ch,i,oi,zs,Ar,$a,m,"Throttled",-0,0),f);break e}T_(l,s,Kn,yc,ch,i,oi,zs,Ar,$a,m,null,-0,0)}}break}while(!0);Xi(t)}function T_(t,i,s,l,f,m,M,R,V,ee,de,_e,ae,le){if(t.timeoutHandle=-1,_e=i.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},g_(i,m,_e);var He=(m&62914560)===m?xc-T():(m&4194048)===m?S_-T():0;if(He=qy(_e,He),He!==null){Ea=m,t.cancelPendingCommit=He(U_.bind(null,t,i,m,s,l,f,M,R,V,de,_e,null,ae,le)),is(t,m,M,!ee);return}}U_(t,i,m,s,l,f,M,R,V)}function ly(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!ni(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function is(t,i,s,l){i&=~lh,i&=~zs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Ue(f),M=1<<m;l[m]=-1,f&=~M}s!==0&&go(t,s,i)}function Mc(){return(Nt&6)===0?(Ko(0),!1):!0}function dh(){if(vt!==null){if(Bt===0)var t=vt.return;else t=vt,ha=Ds=null,wf(t),vr=null,Lo=0,t=vt;for(;t!==null;)t_(t.alternate,t),t=t.return;vt=null}}function Cr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Cy(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ea=0,dh(),Wt=t,vt=s=ua(t.current,null),Mt=i,Bt=0,ri=null,$a=!1,br=Fe(t,i),oh=!1,Ar=oi=lh=zs=es=an=0,Kn=Yo=null,ch=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Ue(l),m=1<<f;i|=t[f],l&=~m}return Ma=i,kl(),s}function b_(t,i){ct=null,O.H=zo,i===_r||i===Ql?(i=Vm(),Bt=3):i===_f?(i=Vm(),Bt=4):Bt=i===Wf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ri=i,vt===null&&(an=1,fc(t,pi(i,t.current)))}function A_(){var t=ai.current;return t===null?!0:(Mt&4194048)===Mt?vi===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===vi:!1}function R_(){var t=O.H;return O.H=zo,t===null?zo:t}function C_(){var t=O.A;return O.A=ry,t}function Ec(){an=4,$a||(Mt&4194048)!==Mt&&ai.current!==null||(br=!0),(es&134217727)===0&&(zs&134217727)===0||Wt===null||is(Wt,Mt,oi,!1)}function ph(t,i,s){var l=Nt;Nt|=2;var f=R_(),m=C_();(Wt!==t||Mt!==i)&&(yc=null,Cr(t,i)),i=!1;var M=an;e:do try{if(Bt!==0&&vt!==null){var R=vt,V=ri;switch(Bt){case 8:dh(),M=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(i=!0);var ee=Bt;if(Bt=0,ri=null,wr(t,R,V,ee),s&&br){M=0;break e}break;default:ee=Bt,Bt=0,ri=null,wr(t,R,V,ee)}}cy(),M=an;break}catch(de){b_(t,de)}while(!0);return i&&t.shellSuspendCounter++,ha=Ds=null,Nt=l,O.H=f,O.A=m,vt===null&&(Wt=null,Mt=0,kl()),M}function cy(){for(;vt!==null;)w_(vt)}function uy(t,i){var s=Nt;Nt|=2;var l=R_(),f=C_();Wt!==t||Mt!==i?(yc=null,Sc=T()+500,Cr(t,i)):br=Fe(t,i);e:do try{if(Bt!==0&&vt!==null){i=vt;var m=ri;t:switch(Bt){case 1:Bt=0,ri=null,wr(t,i,m,1);break;case 2:case 9:if(zm(m)){Bt=0,ri=null,D_(i);break}i=function(){Bt!==2&&Bt!==9||Wt!==t||(Bt=7),Xi(t)},m.then(i,i);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:zm(m)?(Bt=0,ri=null,D_(i)):(Bt=0,ri=null,wr(t,i,m,7));break;case 5:var M=null;switch(vt.tag){case 26:M=vt.memoizedState;case 5:case 27:var R=vt;if(M?m0(M):R.stateNode.complete){Bt=0,ri=null;var V=R.sibling;if(V!==null)vt=V;else{var ee=R.return;ee!==null?(vt=ee,Tc(ee)):vt=null}break t}}Bt=0,ri=null,wr(t,i,m,5);break;case 6:Bt=0,ri=null,wr(t,i,m,6);break;case 8:dh(),an=6;break e;default:throw Error(a(462))}}fy();break}catch(de){b_(t,de)}while(!0);return ha=Ds=null,O.H=l,O.A=f,Nt=s,vt!==null?0:(Wt=null,Mt=0,kl(),an)}function fy(){for(;vt!==null&&!We();)w_(vt)}function w_(t){var i=$g(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,i===null?Tc(t):vt=i}function D_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Yg(s,i,i.pendingProps,i.type,void 0,Mt);break;case 11:i=Yg(s,i,i.pendingProps,i.type.render,i.ref,Mt);break;case 5:wf(i);default:t_(s,i),i=vt=Cm(i,Ma),i=$g(s,i,Ma)}t.memoizedProps=t.pendingProps,i===null?Tc(t):vt=i}function wr(t,i,s,l){ha=Ds=null,wf(i),vr=null,Lo=0;var f=i.return;try{if($S(t,f,i,s,Mt)){an=1,fc(t,pi(s,t.current)),vt=null;return}}catch(m){if(f!==null)throw vt=f,m;an=1,fc(t,pi(s,t.current)),vt=null;return}i.flags&32768?(Tt||l===1?t=!0:br||(Mt&536870912)!==0?t=!1:($a=t=!0,(l===2||l===9||l===3||l===6)&&(l=ai.current,l!==null&&l.tag===13&&(l.flags|=16384))),L_(i,t)):Tc(i)}function Tc(t){var i=t;do{if((i.flags&32768)!==0){L_(i,$a);return}t=i.return;var s=ny(i.alternate,i,Ma);if(s!==null){vt=s;return}if(i=i.sibling,i!==null){vt=i;return}vt=i=t}while(i!==null);an===0&&(an=5)}function L_(t,i){do{var s=iy(t.alternate,t);if(s!==null){s.flags&=32767,vt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){vt=t;return}vt=t=s}while(t!==null);an=6,vt=null}function U_(t,i,s,l,f,m,M,R,V){t.cancelPendingCommit=null;do bc();while(vn!==0);if((Nt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=tf,bi(t,s,m,M,R,V),t===Wt&&(vt=Wt=null,Mt=0),Rr=i,ns=t,Ea=s,uh=m,fh=f,y_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,my(he,function(){return B_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,f=B.p,B.p=2,M=Nt,Nt|=4;try{ay(t,i,s)}finally{Nt=M,B.p=f,O.T=l}}vn=1,N_(),O_(),I_()}}function N_(){if(vn===1){vn=0;var t=ns,i=Rr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=O.T,O.T=null;var l=B.p;B.p=2;var f=Nt;Nt|=4;try{d_(i,t);var m=Ah,M=xm(t.containerInfo),R=m.focusedElem,V=m.selectionRange;if(M!==R&&R&&R.ownerDocument&&vm(R.ownerDocument.documentElement,R)){if(V!==null&&Zu(R)){var ee=V.start,de=V.end;if(de===void 0&&(de=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(de,R.value.length);else{var _e=R.ownerDocument||document,ae=_e&&_e.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),He=R.textContent.length,Je=Math.min(V.start,He),Xt=V.end===void 0?Je:Math.min(V.end,He);!le.extend&&Je>Xt&&(M=Xt,Xt=Je,Je=M);var j=_m(R,Je),k=_m(R,Xt);if(j&&k&&(le.rangeCount!==1||le.anchorNode!==j.node||le.anchorOffset!==j.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var $=_e.createRange();$.setStart(j.node,j.offset),le.removeAllRanges(),Je>Xt?(le.addRange($),le.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),le.addRange($))}}}}for(_e=[],le=R;le=le.parentNode;)le.nodeType===1&&_e.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<_e.length;R++){var ge=_e[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Bc=!!bh,Ah=bh=null}finally{Nt=f,B.p=l,O.T=s}}t.current=i,vn=2}}function O_(){if(vn===2){vn=0;var t=ns,i=Rr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=O.T,O.T=null;var l=B.p;B.p=2;var f=Nt;Nt|=4;try{l_(t,i.alternate,i)}finally{Nt=f,B.p=l,O.T=s}}vn=3}}function I_(){if(vn===4||vn===3){vn=0,N();var t=ns,i=Rr,s=Ea,l=y_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?vn=5:(vn=0,Rr=ns=null,P_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ts=null),tr(s),i=i.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(Ee,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=O.T,f=B.p,B.p=2,O.T=null;try{for(var m=t.onRecoverableError,M=0;M<l.length;M++){var R=l[M];m(R.value,{componentStack:R.stack})}}finally{O.T=i,B.p=f}}(Ea&3)!==0&&bc(),Xi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===hh?jo++:(jo=0,hh=t):jo=0,Ko(0)}}function P_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,wo(i)))}function bc(){return N_(),O_(),I_(),B_()}function B_(){if(vn!==5)return!1;var t=ns,i=uh;uh=0;var s=tr(Ea),l=O.T,f=B.p;try{B.p=32>s?32:s,O.T=null,s=fh,fh=null;var m=ns,M=Ea;if(vn=0,Rr=ns=null,Ea=0,(Nt&6)!==0)throw Error(a(331));var R=Nt;if(Nt|=4,v_(m.current),m_(m,m.current,M,s),Nt=R,Ko(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(Ee,m)}catch{}return!0}finally{B.p=f,O.T=l,P_(t,i)}}function F_(t,i,s){i=pi(s,i),i=Xf(t.stateNode,i,2),t=Ka(t,i,2),t!==null&&(On(t,2),Xi(t))}function Ft(t,i,s){if(t.tag===3)F_(t,t,s);else for(;i!==null;){if(i.tag===3){F_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ts===null||!ts.has(l))){t=pi(s,t),s=zg(2),l=Ka(i,s,2),l!==null&&(Hg(s,l,i,t),On(l,2),Xi(l));break}}i=i.return}}function mh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new oy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(oh=!0,f.add(s),t=hy.bind(null,t,i,s),i.then(t,t))}function hy(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Wt===t&&(Mt&s)===s&&(an===4||an===3&&(Mt&62914560)===Mt&&300>T()-xc?(Nt&2)===0&&Cr(t,0):lh|=s,Ar===Mt&&(Ar=0)),Xi(t)}function z_(t,i){i===0&&(i=Pt()),t=Rs(t,i),t!==null&&(On(t,i),Xi(t))}function dy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),z_(t,s)}function py(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),z_(t,s)}function my(t,i){return Rt(t,i)}var Ac=null,Dr=null,gh=!1,Rc=!1,_h=!1,as=0;function Xi(t){t!==Dr&&t.next===null&&(Dr===null?Ac=Dr=t:Dr=Dr.next=t),Rc=!0,gh||(gh=!0,_y())}function Ko(t,i){if(!_h&&Rc){_h=!0;do for(var s=!1,l=Ac;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var M=l.suspendedLanes,R=l.pingedLanes;m=(1<<31-Ue(42|t)+1)-1,m&=f&~(M&~R),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,k_(l,m))}else m=Mt,m=ue(l,l===Wt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Fe(l,m)||(s=!0,k_(l,m));l=l.next}while(s);_h=!1}}function gy(){H_()}function H_(){Rc=gh=!1;var t=0;as!==0&&Ry()&&(t=as);for(var i=T(),s=null,l=Ac;l!==null;){var f=l.next,m=V_(l,i);m===0?(l.next=null,s===null?Ac=f:s.next=f,f===null&&(Dr=s)):(s=l,(t!==0||(m&3)!==0)&&(Rc=!0)),l=f}vn!==0&&vn!==5||Ko(t),as!==0&&(as=0)}function V_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var M=31-Ue(m),R=1<<M,V=f[M];V===-1?((R&s)===0||(R&l)!==0)&&(f[M]=it(R,i)):V<=i&&(t.expiredLanes|=R),m&=~R}if(i=Wt,s=Mt,s=ue(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ot(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Fe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Ot(l),tr(s)){case 2:case 8:s=xe;break;case 32:s=he;break;case 268435456:s=Ce;break;default:s=he}return l=G_.bind(null,t),s=Rt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Ot(l),t.callbackPriority=2,t.callbackNode=null,2}function G_(t,i){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(bc()&&t.callbackNode!==s)return null;var l=Mt;return l=ue(t,t===Wt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(E_(t,l,i),V_(t,T()),t.callbackNode!=null&&t.callbackNode===s?G_.bind(null,t):null)}function k_(t,i){if(bc())return null;E_(t,i,!0)}function _y(){wy(function(){(Nt&6)!==0?Rt(pe,gy):H_()})}function vh(){if(as===0){var t=mr;t===0&&(t=Re,Re<<=1,(Re&261888)===0&&(Re=256)),as=t}return as}function X_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Il(""+t)}function W_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function vy(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=X_((f[gn]||null).action),M=l.submitter;M&&(i=(i=M[gn]||null)?X_(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var R=new zl("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(as!==0){var V=M?W_(f,M):new FormData(f);Ff(s,{pending:!0,data:V,method:f.method,action:m},null,V)}}else typeof m=="function"&&(R.preventDefault(),V=M?W_(f,M):new FormData(f),Ff(s,{pending:!0,data:V,method:f.method,action:m},m,V))},currentTarget:f}]})}}for(var xh=0;xh<ef.length;xh++){var Sh=ef[xh],xy=Sh.toLowerCase(),Sy=Sh[0].toUpperCase()+Sh.slice(1);wi(xy,"on"+Sy)}wi(Mm,"onAnimationEnd"),wi(Em,"onAnimationIteration"),wi(Tm,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(PS,"onTransitionRun"),wi(BS,"onTransitionStart"),wi(FS,"onTransitionCancel"),wi(bm,"onTransitionEnd"),we("onMouseEnter",["mouseout","mouseover"]),we("onMouseLeave",["mouseout","mouseover"]),we("onPointerEnter",["pointerout","pointerover"]),we("onPointerLeave",["pointerout","pointerover"]),Q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zo));function q_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var R=l[M],V=R.instance,ee=R.currentTarget;if(R=R.listener,V!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=ee;try{m(f)}catch(de){Gl(de)}f.currentTarget=null,m=V}else for(M=0;M<l.length;M++){if(R=l[M],V=R.instance,ee=R.currentTarget,R=R.listener,V!==m&&f.isPropagationStopped())break e;m=R,f.currentTarget=ee;try{m(f)}catch(de){Gl(de)}f.currentTarget=null,m=V}}}}function xt(t,i){var s=i[za];s===void 0&&(s=i[za]=new Set);var l=t+"__bubble";s.has(l)||(Y_(i,t,2,!1),s.add(l))}function yh(t,i,s){var l=0;i&&(l|=4),Y_(s,t,l,i)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function Mh(t){if(!t[Cc]){t[Cc]=!0,re.forEach(function(s){s!=="selectionchange"&&(yy.has(s)||yh(s,!1,t),yh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Cc]||(i[Cc]=!0,yh("selectionchange",!1,i))}}function Y_(t,i,s,l){switch(M0(i)){case 2:var f=Ky;break;case 8:f=Zy;break;default:f=Bh}s=f.bind(null,i,s,t),f=void 0,!Vu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Eh(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var R=l.stateNode.containerInfo;if(R===f)break;if(M===4)for(M=l.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;R!==null;){if(M=Ha(R),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){l=m=M;continue e}R=R.parentNode}}l=l.return}Jp(function(){var ee=m,de=zu(s),_e=[];e:{var ae=Am.get(t);if(ae!==void 0){var le=zl,He=t;switch(t){case"keypress":if(Bl(s)===0)break e;case"keydown":case"keyup":le=pS;break;case"focusin":He="focus",le=Wu;break;case"focusout":He="blur",le=Wu;break;case"beforeblur":case"afterblur":le=Wu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=nS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=_S;break;case Mm:case Em:case Tm:le=sS;break;case bm:le=xS;break;case"scroll":case"scrollend":le=eS;break;case"wheel":le=yS;break;case"copy":case"cut":case"paste":le=oS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=im;break;case"toggle":case"beforetoggle":le=ES}var Je=(i&4)!==0,Xt=!Je&&(t==="scroll"||t==="scrollend"),j=Je?ae!==null?ae+"Capture":null:ae;Je=[];for(var k=ee,$;k!==null;){var ge=k;if($=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||$===null||j===null||(ge=vo(k,j),ge!=null&&Je.push(Qo(k,ge,$))),Xt)break;k=k.return}0<Je.length&&(ae=new le(ae,He,null,s,de),_e.push({event:ae,listeners:Je}))}}if((i&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ae&&s!==Fu&&(He=s.relatedTarget||s.fromElement)&&(Ha(He)||He[ra]))break e;if((le||ae)&&(ae=de.window===de?de:(ae=de.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(He=s.relatedTarget||s.toElement,le=ee,He=He?Ha(He):null,He!==null&&(Xt=c(He),Je=He.tag,He!==Xt||Je!==5&&Je!==27&&Je!==6)&&(He=null)):(le=null,He=ee),le!==He)){if(Je=tm,ge="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Je=im,ge="onPointerLeave",j="onPointerEnter",k="pointer"),Xt=le==null?ae:Es(le),$=He==null?ae:Es(He),ae=new Je(ge,k+"leave",le,s,de),ae.target=Xt,ae.relatedTarget=$,ge=null,Ha(de)===ee&&(Je=new Je(j,k+"enter",He,s,de),Je.target=$,Je.relatedTarget=Xt,ge=Je),Xt=ge,le&&He)t:{for(Je=My,j=le,k=He,$=0,ge=j;ge;ge=Je(ge))$++;ge=0;for(var Qe=k;Qe;Qe=Je(Qe))ge++;for(;0<$-ge;)j=Je(j),$--;for(;0<ge-$;)k=Je(k),ge--;for(;$--;){if(j===k||k!==null&&j===k.alternate){Je=j;break t}j=Je(j),k=Je(k)}Je=null}else Je=null;le!==null&&j_(_e,ae,le,Je,!1),He!==null&&Xt!==null&&j_(_e,Xt,He,Je,!0)}}e:{if(ae=ee?Es(ee):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var Dt=fm;else if(cm(ae))if(hm)Dt=NS;else{Dt=LS;var qe=DS}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ee&&ir(ee.elementType)&&(Dt=fm):Dt=US;if(Dt&&(Dt=Dt(t,ee))){um(_e,Dt,s,de);break e}qe&&qe(t,ae,ee),t==="focusout"&&ee&&ae.type==="number"&&ee.memoizedProps.value!=null&&Ri(ae,"number",ae.value)}switch(qe=ee?Es(ee):window,t){case"focusin":(cm(qe)||qe.contentEditable==="true")&&(or=qe,Qu=ee,Ao=null);break;case"focusout":Ao=Qu=or=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,Sm(_e,s,de);break;case"selectionchange":if(IS)break;case"keydown":case"keyup":Sm(_e,s,de)}var ht;if(Yu)e:{switch(t){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else rr?om(t,s)&&(Et="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Et="onCompositionStart");Et&&(am&&s.locale!=="ko"&&(rr||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&rr&&(ht=$p()):(Ga=de,Gu="value"in Ga?Ga.value:Ga.textContent,rr=!0)),qe=wc(ee,Et),0<qe.length&&(Et=new nm(Et,t,null,s,de),_e.push({event:Et,listeners:qe}),ht?Et.data=ht:(ht=lm(s),ht!==null&&(Et.data=ht)))),(ht=bS?AS(t,s):RS(t,s))&&(Et=wc(ee,"onBeforeInput"),0<Et.length&&(qe=new nm("onBeforeInput","beforeinput",null,s,de),_e.push({event:qe,listeners:Et}),qe.data=ht)),vy(_e,t,ee,s,de)}q_(_e,i)})}function Qo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function wc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=vo(t,s),f!=null&&l.unshift(Qo(t,f,m)),f=vo(t,i),f!=null&&l.push(Qo(t,f,m))),t.tag===3)return l;t=t.return}return[]}function My(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function j_(t,i,s,l,f){for(var m=i._reactName,M=[];s!==null&&s!==l;){var R=s,V=R.alternate,ee=R.stateNode;if(R=R.tag,V!==null&&V===l)break;R!==5&&R!==26&&R!==27||ee===null||(V=ee,f?(ee=vo(s,m),ee!=null&&M.unshift(Qo(s,ee,V))):f||(ee=vo(s,m),ee!=null&&M.push(Qo(s,ee,V)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var Ey=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function K_(t){return(typeof t=="string"?t:""+t).replace(Ey,`
`).replace(Ty,"")}function Z_(t,i){return i=K_(i),K_(t)===i}function kt(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Bn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Bn(t,""+l);break;case"className":st(t,"class",l);break;case"tabIndex":st(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":st(t,s,l);break;case"style":oa(t,l,m);break;case"data":if(i!=="object"){st(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Il(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&kt(t,i,"name",f.name,f,null),kt(t,i,"formEncType",f.formEncType,f,null),kt(t,i,"formMethod",f.formMethod,f,null),kt(t,i,"formTarget",f.formTarget,f,null)):(kt(t,i,"encType",f.encType,f,null),kt(t,i,"method",f.method,f,null),kt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Il(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=la);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Il(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":xt("beforetoggle",t),xt("toggle",t),nt(t,"popover",l);break;case"xlinkActuate":ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ze(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ze(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ze(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ze(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":nt(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Jx.get(s)||s,nt(t,s,l))}}function Th(t,i,s,l,f,m){switch(s){case"style":oa(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Bn(t,l):(typeof l=="number"||typeof l=="bigint")&&Bn(t,""+l);break;case"onScroll":l!=null&&xt("scroll",t);break;case"onScrollEnd":l!=null&&xt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ne.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[gn]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):nt(t,s,l)}}}function wn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var M=s[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:kt(t,i,m,M,s,null)}}f&&kt(t,i,"srcSet",s.srcSet,s,null),l&&kt(t,i,"src",s.src,s,null);return;case"input":xt("invalid",t);var R=m=M=f=null,V=null,ee=null;for(l in s)if(s.hasOwnProperty(l)){var de=s[l];if(de!=null)switch(l){case"name":f=de;break;case"type":M=de;break;case"checked":V=de;break;case"defaultChecked":ee=de;break;case"value":m=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:kt(t,i,l,de,s,null)}}ei(t,m,R,V,ee,M,f,!1);return;case"select":xt("invalid",t),l=M=m=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":m=R;break;case"defaultValue":M=R;break;case"multiple":l=R;default:kt(t,i,f,R,s,null)}i=m,s=M,t.multiple=!!l,i!=null?ti(t,!!l,i,!1):s!=null&&ti(t,!!l,s,!0);return;case"textarea":xt("invalid",t),m=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(R=s[M],R!=null))switch(M){case"value":l=R;break;case"defaultValue":f=R;break;case"children":m=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:kt(t,i,M,R,s,null)}cn(t,l,f,m);return;case"option":for(V in s)s.hasOwnProperty(V)&&(l=s[V],l!=null)&&(V==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":kt(t,i,V,l,s,null));return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(l=0;l<Zo.length;l++)xt(Zo[l],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in s)if(s.hasOwnProperty(ee)&&(l=s[ee],l!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:kt(t,i,ee,l,s,null)}return;default:if(ir(i)){for(de in s)s.hasOwnProperty(de)&&(l=s[de],l!==void 0&&Th(t,i,de,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&kt(t,i,R,l,s,null))}function by(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,R=null,V=null,ee=null,de=null;for(le in s){var _e=s[le];if(s.hasOwnProperty(le)&&_e!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":V=_e;default:l.hasOwnProperty(le)||kt(t,i,le,null,l,_e)}}for(var ae in l){var le=l[ae];if(_e=s[ae],l.hasOwnProperty(ae)&&(le!=null||_e!=null))switch(ae){case"type":m=le;break;case"name":f=le;break;case"checked":ee=le;break;case"defaultChecked":de=le;break;case"value":M=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,i));break;default:le!==_e&&kt(t,i,ae,le,l,_e)}}Pn(t,M,R,V,ee,de,m,f);return;case"select":le=M=R=ae=null;for(m in s)if(V=s[m],s.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":le=V;default:l.hasOwnProperty(m)||kt(t,i,m,null,l,V)}for(f in l)if(m=l[f],V=s[f],l.hasOwnProperty(f)&&(m!=null||V!=null))switch(f){case"value":ae=m;break;case"defaultValue":R=m;break;case"multiple":M=m;default:m!==V&&kt(t,i,f,m,l,V)}i=R,s=M,l=le,ae!=null?ti(t,!!s,ae,!1):!!l!=!!s&&(i!=null?ti(t,!!s,i,!0):ti(t,!!s,s?[]:"",!1));return;case"textarea":le=ae=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:kt(t,i,R,null,l,f)}for(M in l)if(f=l[M],m=s[M],l.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":ae=f;break;case"defaultValue":le=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&kt(t,i,M,f,l,m)}It(t,ae,le);return;case"option":for(var He in s)ae=s[He],s.hasOwnProperty(He)&&ae!=null&&!l.hasOwnProperty(He)&&(He==="selected"?t.selected=!1:kt(t,i,He,null,l,ae));for(V in l)ae=l[V],le=s[V],l.hasOwnProperty(V)&&ae!==le&&(ae!=null||le!=null)&&(V==="selected"?t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":kt(t,i,V,ae,l,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in s)ae=s[Je],s.hasOwnProperty(Je)&&ae!=null&&!l.hasOwnProperty(Je)&&kt(t,i,Je,null,l,ae);for(ee in l)if(ae=l[ee],le=s[ee],l.hasOwnProperty(ee)&&ae!==le&&(ae!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(a(137,i));break;default:kt(t,i,ee,ae,l,le)}return;default:if(ir(i)){for(var Xt in s)ae=s[Xt],s.hasOwnProperty(Xt)&&ae!==void 0&&!l.hasOwnProperty(Xt)&&Th(t,i,Xt,void 0,l,ae);for(de in l)ae=l[de],le=s[de],!l.hasOwnProperty(de)||ae===le||ae===void 0&&le===void 0||Th(t,i,de,ae,l,le);return}}for(var j in s)ae=s[j],s.hasOwnProperty(j)&&ae!=null&&!l.hasOwnProperty(j)&&kt(t,i,j,null,l,ae);for(_e in l)ae=l[_e],le=s[_e],!l.hasOwnProperty(_e)||ae===le||ae==null&&le==null||kt(t,i,_e,ae,l,le)}function Q_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ay(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],m=f.transferSize,M=f.initiatorType,R=f.duration;if(m&&R&&Q_(M)){for(M=0,R=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],ee=V.startTime;if(ee>R)break;var de=V.transferSize,_e=V.initiatorType;de&&Q_(_e)&&(V=V.responseEnd,M+=de*(V<R?1:(R-ee)/(V-ee)))}if(--l,i+=8*(m+M)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var bh=null,Ah=null;function Dc(t){return t.nodeType===9?t:t.ownerDocument}function J_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Rh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ch=null;function Ry(){var t=window.event;return t&&t.type==="popstate"?t===Ch?!1:(Ch=t,!0):(Ch=null,!1)}var e0=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,t0=typeof Promise=="function"?Promise:void 0,wy=typeof queueMicrotask=="function"?queueMicrotask:typeof t0<"u"?function(t){return t0.resolve(null).then(t).catch(Dy)}:e0;function Dy(t){setTimeout(function(){throw t})}function ss(t){return t==="head"}function n0(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Or(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Jo(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Jo(s);for(var m=s.firstChild;m;){var M=m.nextSibling,R=m.nodeName;m[Ms]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=M}}else s==="body"&&Jo(t.ownerDocument.body);s=f}while(s);Or(i)}function i0(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function wh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":wh(s),_o(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Ly(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ms])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function Uy(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=xi(t.nextSibling),t===null))return null;return t}function a0(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=xi(t.nextSibling),t===null))return null;return t}function Dh(t){return t.data==="$?"||t.data==="$~"}function Lh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ny(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function xi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Uh=null;function s0(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return xi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function r0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function o0(t,i,s){switch(i=Dc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Jo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);_o(t)}var Si=new Map,l0=new Set;function Lc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=B.d;B.d={f:Oy,r:Iy,D:Py,C:By,L:Fy,m:zy,X:Vy,S:Hy,M:Gy};function Oy(){var t=Ta.f(),i=Mc();return t||i}function Iy(t){var i=Va(t);i!==null&&i.tag===5&&i.type==="form"?bg(i):Ta.r(t)}var Lr=typeof document>"u"?null:document;function c0(t,i,s){var l=Lr;if(l&&typeof i=="string"&&i){var f=at(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),l0.has(f)||(l0.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),wn(i,"link",t),X(i),l.head.appendChild(i)))}}function Py(t){Ta.D(t),c0("dns-prefetch",t,null)}function By(t,i){Ta.C(t,i),c0("preconnect",t,i)}function Fy(t,i,s){Ta.L(t,i,s);var l=Lr;if(l&&t&&i){var f='link[rel="preload"][as="'+at(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+at(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+at(s.imageSizes)+'"]')):f+='[href="'+at(t)+'"]';var m=f;switch(i){case"style":m=Ur(t);break;case"script":m=Nr(t)}Si.has(m)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Si.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector($o(m))||i==="script"&&l.querySelector(el(m))||(i=l.createElement("link"),wn(i,"link",t),X(i),l.head.appendChild(i)))}}function zy(t,i){Ta.m(t,i);var s=Lr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+at(l)+'"][href="'+at(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Nr(t)}if(!Si.has(m)&&(t=_({rel:"modulepreload",href:t},i),Si.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(el(m)))return}l=s.createElement("link"),wn(l,"link",t),X(l),s.head.appendChild(l)}}}function Hy(t,i,s){Ta.S(t,i,s);var l=Lr;if(l&&t){var f=C(l).hoistableStyles,m=Ur(t);i=i||"default";var M=f.get(m);if(!M){var R={loading:0,preload:null};if(M=l.querySelector($o(m)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Si.get(m))&&Nh(t,s);var V=M=l.createElement("link");X(V),wn(V,"link",t),V._p=new Promise(function(ee,de){V.onload=ee,V.onerror=de}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Uc(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:R},f.set(m,M)}}}function Vy(t,i){Ta.X(t,i);var s=Lr;if(s&&t){var l=C(s).hoistableScripts,f=Nr(t),m=l.get(f);m||(m=s.querySelector(el(f)),m||(t=_({src:t,async:!0},i),(i=Si.get(f))&&Oh(t,i),m=s.createElement("script"),X(m),wn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Gy(t,i){Ta.M(t,i);var s=Lr;if(s&&t){var l=C(s).hoistableScripts,f=Nr(t),m=l.get(f);m||(m=s.querySelector(el(f)),m||(t=_({src:t,async:!0,type:"module"},i),(i=Si.get(f))&&Oh(t,i),m=s.createElement("script"),X(m),wn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function u0(t,i,s,l){var f=(f=ie.current)?Lc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Ur(s.href),s=C(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ur(s.href);var m=C(f).hoistableStyles,M=m.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,M),(m=f.querySelector($o(t)))&&!m._p&&(M.instance=m,M.state.loading=5),Si.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Si.set(t,s),m||ky(f,t,s,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Nr(s),s=C(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Ur(t){return'href="'+at(t)+'"'}function $o(t){return'link[rel="stylesheet"]['+t+"]"}function f0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function ky(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),wn(i,"link",s),X(i),t.head.appendChild(i))}function Nr(t){return'[src="'+at(t)+'"]'}function el(t){return"script[async]"+t}function h0(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+at(s.href)+'"]');if(l)return i.instance=l,X(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),X(l),wn(l,"style",f),Uc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Ur(s.href);var m=t.querySelector($o(f));if(m)return i.state.loading|=4,i.instance=m,X(m),m;l=f0(s),(f=Si.get(f))&&Nh(l,f),m=(t.ownerDocument||t).createElement("link"),X(m);var M=m;return M._p=new Promise(function(R,V){M.onload=R,M.onerror=V}),wn(m,"link",l),i.state.loading|=4,Uc(m,s.precedence,t),i.instance=m;case"script":return m=Nr(s.src),(f=t.querySelector(el(m)))?(i.instance=f,X(f),f):(l=s,(f=Si.get(m))&&(l=_({},s),Oh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),X(f),wn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Uc(l,s.precedence,t));return i.instance}function Uc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,M=0;M<l.length;M++){var R=l[M];if(R.dataset.precedence===i)m=R;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Nh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Oh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Nc=null;function d0(t,i,s){if(Nc===null){var l=new Map,f=Nc=new Map;f.set(s,l)}else f=Nc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Ms]||m[ln]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=t+M;var R=l.get(M);R?R.push(m):l.set(M,[m])}}return l}function p0(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Xy(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function m0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Wy(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Ur(l.href),m=i.querySelector($o(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Oc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=m,X(m);return}m=i.ownerDocument||i,l=f0(l),(f=Si.get(f))&&Nh(l,f),m=m.createElement("link"),X(m);var M=m;M._p=new Promise(function(R,V){M.onload=R,M.onerror=V}),wn(m,"link",l),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Oc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Ih=0;function qy(t,i){return t.stylesheets&&t.count===0&&Pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Ih===0&&(Ih=62500*Ay());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Pc(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Ih?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ic=null;function Pc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ic=new Map,i.forEach(Yy,t),Ic=null,Oc.call(t))}function Yy(t,i){if(!(i.state.loading&4)){var s=Ic.get(t);if(s)var l=s.get(null);else{s=new Map,Ic.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=i.instance,M=f.getAttribute("data-precedence"),m=s.get(M)||l,m===l&&s.set(null,f),s.set(M,f),this.count++,l=Oc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var tl={$$typeof:L,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function jy(t,i,s,l,f,m,M,R,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function g0(t,i,s,l,f,m,M,R,V,ee,de,_e){return t=new jy(t,i,s,M,V,ee,de,_e,R),i=1,m===!0&&(i|=24),m=ii(3,null,null,i),t.current=m,m.stateNode=t,i=pf(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},vf(m),t}function _0(t){return t?(t=ur,t):ur}function v0(t,i,s,l,f,m){f=_0(f),l.context===null?l.context=f:l.pendingContext=f,l=ja(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ka(t,l,i),s!==null&&(Zn(s,t,i),No(s,t,i))}function x0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Ph(t,i){x0(t,i),(t=t.alternate)&&x0(t,i)}function S0(t){if(t.tag===13||t.tag===31){var i=Rs(t,67108864);i!==null&&Zn(i,t,67108864),Ph(t,67108864)}}function y0(t){if(t.tag===13||t.tag===31){var i=li();i=er(i);var s=Rs(t,i);s!==null&&Zn(s,t,i),Ph(t,i)}}var Bc=!0;function Ky(t,i,s,l){var f=O.T;O.T=null;var m=B.p;try{B.p=2,Bh(t,i,s,l)}finally{B.p=m,O.T=f}}function Zy(t,i,s,l){var f=O.T;O.T=null;var m=B.p;try{B.p=8,Bh(t,i,s,l)}finally{B.p=m,O.T=f}}function Bh(t,i,s,l){if(Bc){var f=Fh(l);if(f===null)Eh(t,i,l,Fc,s),E0(t,l);else if(Jy(f,t,i,s,l))l.stopPropagation();else if(E0(t,l),i&4&&-1<Qy.indexOf(t)){for(;f!==null;){var m=Va(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Me(m.pendingLanes);if(M!==0){var R=m;for(R.pendingLanes|=2,R.entangledLanes|=2;M;){var V=1<<31-Ue(M);R.entanglements[1]|=V,M&=~V}Xi(m),(Nt&6)===0&&(Sc=T()+500,Ko(0))}}break;case 31:case 13:R=Rs(m,2),R!==null&&Zn(R,m,2),Mc(),Ph(m,2)}if(m=Fh(l),m===null&&Eh(t,i,l,Fc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Eh(t,i,l,null,s)}}function Fh(t){return t=zu(t),zh(t)}var Fc=null;function zh(t){if(Fc=null,t=Ha(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Fc=t,null}function M0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case pe:return 2;case xe:return 8;case he:case ke:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var Hh=!1,rs=null,os=null,ls=null,nl=new Map,il=new Map,cs=[],Qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E0(t,i){switch(t){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":os=null;break;case"mouseover":case"mouseout":ls=null;break;case"pointerover":case"pointerout":nl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(i.pointerId)}}function al(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Va(i),i!==null&&S0(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Jy(t,i,s,l,f){switch(i){case"focusin":return rs=al(rs,t,i,s,l,f),!0;case"dragenter":return os=al(os,t,i,s,l,f),!0;case"mouseover":return ls=al(ls,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return nl.set(m,al(nl.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,il.set(m,al(il.get(m)||null,t,i,s,l,f)),!0}return!1}function T0(t){var i=Ha(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,nr(t.priority,function(){y0(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,nr(t.priority,function(){y0(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Fh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Fu=l,s.target.dispatchEvent(l),Fu=null}else return i=Va(s),i!==null&&S0(i),t.blockedOn=s,!1;i.shift()}return!0}function b0(t,i,s){zc(t)&&s.delete(i)}function $y(){Hh=!1,rs!==null&&zc(rs)&&(rs=null),os!==null&&zc(os)&&(os=null),ls!==null&&zc(ls)&&(ls=null),nl.forEach(b0),il.forEach(b0)}function Hc(t,i){t.blockedOn===i&&(t.blockedOn=null,Hh||(Hh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$y)))}var Vc=null;function A0(t){Vc!==t&&(Vc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vc===t&&(Vc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(zh(l||s)===null)continue;break}var m=Va(s);m!==null&&(t.splice(i,3),i-=3,Ff(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Or(t){function i(V){return Hc(V,t)}rs!==null&&Hc(rs,t),os!==null&&Hc(os,t),ls!==null&&Hc(ls,t),nl.forEach(i),il.forEach(i);for(var s=0;s<cs.length;s++){var l=cs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<cs.length&&(s=cs[0],s.blockedOn===null);)T0(s),s.blockedOn===null&&cs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],M=f[gn]||null;if(typeof m=="function")M||A0(s);else if(M){var R=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[gn]||null)R=M.formAction;else if(zh(f)!==null)continue}else R=M.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),A0(s)}}}function R0(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Vh(t){this._internalRoot=t}Gc.prototype.render=Vh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=li();v0(s,l,t,i,null,null)},Gc.prototype.unmount=Vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;v0(t.current,2,null,t,null,null),Mc(),i[ra]=null}};function Gc(t){this._internalRoot=t}Gc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Hi();t={blockedOn:null,target:t,priority:i};for(var s=0;s<cs.length&&i!==0&&i<cs[s].priority;s++);cs.splice(s,0,t),s===0&&T0(t)}};var C0=e.version;if(C0!=="19.2.4")throw Error(a(527,C0,"19.2.4"));B.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var eM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{Ee=kc.inject(eM),ye=kc}catch{}}return rl.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,l="",f=Ig,m=Pg,M=Bg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=g0(t,1,!1,null,null,s,l,null,f,m,M,R0),t[ra]=i.current,Mh(t),new Vh(i)},rl.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var l=!1,f="",m=Ig,M=Pg,R=Bg,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),i=g0(t,1,!0,i,s??null,l,f,V,m,M,R,R0),i.context=_0(null),s=i.current,l=li(),l=er(l),f=ja(l),f.callback=null,Ka(s,f,l),s=l,i.current.lanes=s,On(i,s),Xi(i),t[ra]=i.current,Mh(t),new Gc(i)},rl.version="19.2.4",rl}var F0;function uM(){if(F0)return Xh.exports;F0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xh.exports=cM(),Xh.exports}var fM=uM();const wp="183",hM=0,z0=1,dM=2,vu=1,pM=2,_l=3,Ia=0,Qn=1,Ii=2,Na=0,Qr=1,H0=2,V0=3,G0=4,mM=5,js=100,gM=101,_M=102,vM=103,xM=104,SM=200,yM=201,MM=202,EM=203,Nd=204,Od=205,TM=206,bM=207,AM=208,RM=209,CM=210,wM=211,DM=212,LM=213,UM=214,Id=0,Pd=1,Bd=2,eo=3,Fd=4,zd=5,Hd=6,Vd=7,lx=0,NM=1,OM=2,Qi=0,cx=1,ux=2,fx=3,hx=4,dx=5,px=6,mx=7,k0="attached",IM="detached",gx=300,Js=301,to=302,jh=303,Kh=304,Lu=306,no=1e3,Ki=1001,bu=1002,xn=1003,_x=1004,vl=1005,Sn=1006,xu=1007,La=1008,fi=1009,vx=1010,xx=1011,El=1012,Dp=1013,ea=1014,Ei=1015,Pa=1016,Lp=1017,Up=1018,Tl=1020,Sx=35902,yx=35899,Mx=1021,Ex=1022,Ti=1023,Ba=1026,Zs=1027,Np=1028,Op=1029,io=1030,Ip=1031,Pp=1033,Su=33776,yu=33777,Mu=33778,Eu=33779,Gd=35840,kd=35841,Xd=35842,Wd=35843,qd=36196,Yd=37492,jd=37496,Kd=37488,Zd=37489,Qd=37490,Jd=37491,$d=37808,ep=37809,tp=37810,np=37811,ip=37812,ap=37813,sp=37814,rp=37815,op=37816,lp=37817,cp=37818,up=37819,fp=37820,hp=37821,dp=36492,pp=36494,mp=36495,gp=36283,_p=36284,vp=36285,xp=36286,bl=2300,Al=2301,Zh=2302,X0=2303,W0=2400,q0=2401,Y0=2402,PM=2500,BM=0,Tx=1,Sp=2,FM=3200,bx=0,zM=1,xs="",Dn="srgb",Xn="srgb-linear",Au="linear",zt="srgb",Ir=7680,j0=519,HM=512,VM=513,GM=514,Bp=515,kM=516,XM=517,Fp=518,WM=519,yp=35044,K0="300 es",Zi=2e3,Rl=2001;function qM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function YM(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Cl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function jM(){const o=Cl("canvas");return o.style.display="block",o}const Z0={};function Ru(...o){const e="THREE."+o.shift();console.log(e,...o)}function Ax(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=o[1];n&&n.isStackTrace?o[0]+=" "+n.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function Ke(...o){o=Ax(o);const e="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...o)}}function tt(...o){o=Ax(o);const e="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...o)}}function Cu(...o){const e=o.join(" ");e in Z0||(Z0[e]=!0,Ke(...o))}function KM(o,e,n){return new Promise(function(a,r){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const ZM={[Id]:Pd,[Bd]:Hd,[Fd]:Vd,[eo]:zd,[Pd]:Id,[Hd]:Bd,[Vd]:Fd,[zd]:eo};class co{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let c=0,u=r.length;c<u;c++)r[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Q0=1234567;const Sl=Math.PI/180,ao=180/Math.PI;function Fi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[a&255]+Un[a>>8&255]+Un[a>>16&255]+Un[a>>24&255]).toLowerCase()}function St(o,e,n){return Math.max(e,Math.min(n,o))}function zp(o,e){return(o%e+e)%e}function QM(o,e,n,a,r){return a+(o-e)*(r-a)/(n-e)}function JM(o,e,n){return o!==e?(n-o)/(e-o):0}function yl(o,e,n){return(1-n)*o+n*e}function $M(o,e,n,a){return yl(o,e,1-Math.exp(-n*a))}function eE(o,e=1){return e-Math.abs(zp(o,e*2)-e)}function tE(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function nE(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function iE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function aE(o,e){return o+Math.random()*(e-o)}function sE(o){return o*(.5-Math.random())}function rE(o){o!==void 0&&(Q0=o);let e=Q0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oE(o){return o*Sl}function lE(o){return o*ao}function cE(o){return(o&o-1)===0&&o!==0}function uE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function fE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function hE(o,e,n,a,r){const c=Math.cos,u=Math.sin,h=c(n/2),p=u(n/2),d=c((e+a)/2),g=u((e+a)/2),_=c((e-a)/2),v=u((e-a)/2),x=c((a-e)/2),E=u((a-e)/2);switch(r){case"XYX":o.set(h*g,p*_,p*v,h*d);break;case"YZY":o.set(p*v,h*g,p*_,h*d);break;case"ZXZ":o.set(p*_,p*v,h*g,h*d);break;case"XZX":o.set(h*g,p*E,p*x,h*d);break;case"YXY":o.set(p*x,h*g,p*E,h*d);break;case"ZYZ":o.set(p*E,p*x,h*g,h*d);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Pi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ht(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const dE={DEG2RAD:Sl,RAD2DEG:ao,generateUUID:Fi,clamp:St,euclideanModulo:zp,mapLinear:QM,inverseLerp:JM,lerp:yl,damp:$M,pingpong:eE,smoothstep:tE,smootherstep:nE,randInt:iE,randFloat:aE,randFloatSpread:sE,seededRandom:rE,degToRad:oE,radToDeg:lE,isPowerOfTwo:cE,ceilPowerOfTwo:uE,floorPowerOfTwo:fE,setQuaternionFromProperEuler:hE,normalize:Ht,denormalize:Pi};class At{constructor(e=0,n=0){At.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(St(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*r+e.x,this.y=c*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ia{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,c,u,h){let p=a[r+0],d=a[r+1],g=a[r+2],_=a[r+3],v=c[u+0],x=c[u+1],E=c[u+2],A=c[u+3];if(_!==A||p!==v||d!==x||g!==E){let y=p*v+d*x+g*E+_*A;y<0&&(v=-v,x=-x,E=-E,A=-A,y=-y);let S=1-h;if(y<.9995){const w=Math.acos(y),L=Math.sin(w);S=Math.sin(S*w)/L,h=Math.sin(h*w)/L,p=p*S+v*h,d=d*S+x*h,g=g*S+E*h,_=_*S+A*h}else{p=p*S+v*h,d=d*S+x*h,g=g*S+E*h,_=_*S+A*h;const w=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=w,d*=w,g*=w,_*=w}}e[n]=p,e[n+1]=d,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,r,c,u){const h=a[r],p=a[r+1],d=a[r+2],g=a[r+3],_=c[u],v=c[u+1],x=c[u+2],E=c[u+3];return e[n]=h*E+g*_+p*x-d*v,e[n+1]=p*E+g*v+d*_-h*x,e[n+2]=d*E+g*x+h*v-p*_,e[n+3]=g*E-h*_-p*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,c=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(a/2),g=h(r/2),_=h(c/2),v=p(a/2),x=p(r/2),E=p(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_-v*x*E;break;case"YXZ":this._x=v*g*_+d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_+v*x*E;break;case"ZXY":this._x=v*g*_-d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_-v*x*E;break;case"ZYX":this._x=v*g*_-d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_+v*x*E;break;case"YZX":this._x=v*g*_+d*x*E,this._y=d*x*_+v*g*E,this._z=d*g*E-v*x*_,this._w=d*g*_-v*x*E;break;case"XZY":this._x=v*g*_-d*x*E,this._y=d*x*_-v*g*E,this._z=d*g*E+v*x*_,this._w=d*g*_+v*x*E;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],c=n[8],u=n[1],h=n[5],p=n[9],d=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-p)*x,this._y=(c-d)*x,this._z=(u-r)*x}else if(a>h&&a>_){const x=2*Math.sqrt(1+a-h-_);this._w=(g-p)/x,this._x=.25*x,this._y=(r+u)/x,this._z=(c+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-a-_);this._w=(c-d)/x,this._x=(r+u)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+_-a-h);this._w=(u-r)/x,this._x=(c+d)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,c=e._z,u=e._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+u*h+r*d-c*p,this._y=r*g+u*p+c*h-a*d,this._z=c*g+u*d+a*p-r*h,this._w=u*g-a*h-r*p-c*d,this._onChangeCallback(),this}slerp(e,n){let a=e._x,r=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(a=-a,r=-r,c=-c,u=-u,h=-h);let p=1-n;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,a=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(J0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(J0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*r,this.y=c[1]*n+c[4]*a+c[7]*r,this.z=c[2]*n+c[5]*a+c[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*r+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*r+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*r+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*r+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,c=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*r-h*a),g=2*(h*n-c*r),_=2*(c*a-u*n);return this.x=n+p*d+u*_-h*g,this.y=a+p*g+h*d-c*_,this.z=r+p*_+c*g-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*r,this.y=c[1]*n+c[5]*a+c[9]*r,this.z=c[2]*n+c[6]*a+c[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,c=e.z,u=n.x,h=n.y,p=n.z;return this.x=r*p-c*h,this.y=c*u-a*p,this.z=a*h-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Qh.copy(this).projectOnVector(e),this.sub(Qh)}reflect(e){return this.sub(Qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(St(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qh=new K,J0=new ia;class dt{constructor(e,n,a,r,c,u,h,p,d){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,p,d)}set(e,n,a,r,c,u,h,p,d){const g=this.elements;return g[0]=e,g[1]=r,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],d=a[1],g=a[4],_=a[7],v=a[2],x=a[5],E=a[8],A=r[0],y=r[3],S=r[6],w=r[1],L=r[4],D=r[7],z=r[2],P=r[5],F=r[8];return c[0]=u*A+h*w+p*z,c[3]=u*y+h*L+p*P,c[6]=u*S+h*D+p*F,c[1]=d*A+g*w+_*z,c[4]=d*y+g*L+_*P,c[7]=d*S+g*D+_*F,c[2]=v*A+x*w+E*z,c[5]=v*y+x*L+E*P,c[8]=v*S+x*D+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8];return n*u*g-n*h*d-a*c*g+a*h*p+r*c*d-r*u*p}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=g*u-h*d,v=h*p-g*c,x=d*c-u*p,E=n*_+a*v+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(r*d-g*a)*A,e[2]=(h*a-r*u)*A,e[3]=v*A,e[4]=(g*n-r*p)*A,e[5]=(r*c-h*n)*A,e[6]=x*A,e[7]=(a*p-d*n)*A,e[8]=(u*n-a*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,c,u,h){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*h)+u+e,-r*d,r*p,-r*(-d*u+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Jh.makeScale(e,n)),this}rotate(e){return this.premultiply(Jh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Jh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jh=new dt,$0=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ev=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pE(){const o={enabled:!0,workingColorSpace:Xn,spaces:{},convert:function(r,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===zt&&(r.r=Oa(r.r),r.g=Oa(r.g),r.b=Oa(r.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[c].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===zt&&(r.r=Jr(r.r),r.g=Jr(r.g),r.b=Jr(r.b))),r},workingToColorSpace:function(r,c){return this.convert(r,this.workingColorSpace,c)},colorSpaceToWorking:function(r,c){return this.convert(r,c,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xs?Au:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,c=this.workingColorSpace){return r.fromArray(this.spaces[c].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,c,u){return r.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,c){return Cu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,c)},toWorkingColorSpace:function(r,c){return Cu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Xn]:{primaries:e,whitePoint:a,transfer:Au,toXYZ:$0,fromXYZ:ev,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:a,transfer:zt,toXYZ:$0,fromXYZ:ev,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),o}const bt=pE();function Oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Jr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Pr;class mE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Pr===void 0&&(Pr=Cl("canvas")),Pr.width=e.width,Pr.height=e.height;const r=Pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=Pr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),c=r.data;for(let u=0;u<c.length;u++)c[u]=Oa(c[u]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Oa(n[a]/255)*255):n[a]=Oa(n[a]);return{data:n,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gE=0;class Hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let c;if(Array.isArray(r)){c=[];for(let u=0,h=r.length;u<h;u++)r[u].isDataTexture?c.push($h(r[u].image)):c.push($h(r[u]))}else c=$h(r);a.url=c}return n||(e.images[this.uuid]=a),a}}function $h(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?mE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let _E=0;const ed=new K;class bn extends co{constructor(e=bn.DEFAULT_IMAGE,n=bn.DEFAULT_MAPPING,a=Ki,r=Ki,c=Sn,u=La,h=Ti,p=fi,d=bn.DEFAULT_ANISOTROPY,g=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Fi(),this.name="",this.source=new Hp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){Ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case bu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case bu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=gx;bn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,a=0,r=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,c;const p=e.elements,d=p[0],g=p[4],_=p[8],v=p[1],x=p[5],E=p[9],A=p[2],y=p[6],S=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(E+y)<.1&&Math.abs(d+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(d+1)/2,D=(x+1)/2,z=(S+1)/2,P=(g+v)/4,F=(_+A)/4,b=(E+y)/4;return L>D&&L>z?L<.01?(a=0,r=.707106781,c=.707106781):(a=Math.sqrt(L),r=P/a,c=F/a):D>z?D<.01?(a=.707106781,r=0,c=.707106781):(r=Math.sqrt(D),a=P/r,c=b/r):z<.01?(a=.707106781,r=.707106781,c=0):(c=Math.sqrt(z),a=F/c,r=b/c),this.set(a,r,c,n),this}let w=Math.sqrt((y-E)*(y-E)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(w)<.001&&(w=1),this.x=(y-E)/w,this.y=(_-A)/w,this.z=(v-g)/w,this.w=Math.acos((d+x+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vE extends co{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:a.depth},c=new bn(r),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,c=this.textures.length;r<c;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Hp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends vE{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Rx extends bn{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xE extends bn{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mt{constructor(e,n,a,r,c,u,h,p,d,g,_,v,x,E,A,y){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,p,d,g,_,v,x,E,A,y)}set(e,n,a,r,c,u,h,p,d,g,_,v,x,E,A,y){const S=this.elements;return S[0]=e,S[4]=n,S[8]=a,S[12]=r,S[1]=c,S[5]=u,S[9]=h,S[13]=p,S[2]=d,S[6]=g,S[10]=_,S[14]=v,S[3]=x,S[7]=E,S[11]=A,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),c=1/Br.setFromMatrixColumn(e,1).length(),u=1/Br.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(r),d=Math.sin(r),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,E=h*g,A=h*_;n[0]=p*g,n[4]=-p*_,n[8]=d,n[1]=x+E*d,n[5]=v-A*d,n[9]=-h*p,n[2]=A-v*d,n[6]=E+x*d,n[10]=u*p}else if(e.order==="YXZ"){const v=p*g,x=p*_,E=d*g,A=d*_;n[0]=v+A*h,n[4]=E*h-x,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=x*h-E,n[6]=A+v*h,n[10]=u*p}else if(e.order==="ZXY"){const v=p*g,x=p*_,E=d*g,A=d*_;n[0]=v-A*h,n[4]=-u*_,n[8]=E+x*h,n[1]=x+E*h,n[5]=u*g,n[9]=A-v*h,n[2]=-u*d,n[6]=h,n[10]=u*p}else if(e.order==="ZYX"){const v=u*g,x=u*_,E=h*g,A=h*_;n[0]=p*g,n[4]=E*d-x,n[8]=v*d+A,n[1]=p*_,n[5]=A*d+v,n[9]=x*d-E,n[2]=-d,n[6]=h*p,n[10]=u*p}else if(e.order==="YZX"){const v=u*p,x=u*d,E=h*p,A=h*d;n[0]=p*g,n[4]=A-v*_,n[8]=E*_+x,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*_+E,n[10]=v-A*_}else if(e.order==="XZY"){const v=u*p,x=u*d,E=h*p,A=h*d;n[0]=p*g,n[4]=-_,n[8]=d*g,n[1]=v*_+A,n[5]=u*g,n[9]=x*_-E,n[2]=E*_-x,n[6]=h*g,n[10]=A*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SE,e,yE)}lookAt(e,n,a){const r=this.elements;return ci.subVectors(e,n),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),fs.crossVectors(a,ci),fs.lengthSq()===0&&(Math.abs(a.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),fs.crossVectors(a,ci)),fs.normalize(),Xc.crossVectors(ci,fs),r[0]=fs.x,r[4]=Xc.x,r[8]=ci.x,r[1]=fs.y,r[5]=Xc.y,r[9]=ci.y,r[2]=fs.z,r[6]=Xc.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],d=a[12],g=a[1],_=a[5],v=a[9],x=a[13],E=a[2],A=a[6],y=a[10],S=a[14],w=a[3],L=a[7],D=a[11],z=a[15],P=r[0],F=r[4],b=r[8],U=r[12],fe=r[1],H=r[5],Z=r[9],te=r[13],ce=r[2],J=r[6],O=r[10],B=r[14],se=r[3],oe=r[7],Se=r[11],I=r[15];return c[0]=u*P+h*fe+p*ce+d*se,c[4]=u*F+h*H+p*J+d*oe,c[8]=u*b+h*Z+p*O+d*Se,c[12]=u*U+h*te+p*B+d*I,c[1]=g*P+_*fe+v*ce+x*se,c[5]=g*F+_*H+v*J+x*oe,c[9]=g*b+_*Z+v*O+x*Se,c[13]=g*U+_*te+v*B+x*I,c[2]=E*P+A*fe+y*ce+S*se,c[6]=E*F+A*H+y*J+S*oe,c[10]=E*b+A*Z+y*O+S*Se,c[14]=E*U+A*te+y*B+S*I,c[3]=w*P+L*fe+D*ce+z*se,c[7]=w*F+L*H+D*J+z*oe,c[11]=w*b+L*Z+D*O+z*Se,c[15]=w*U+L*te+D*B+z*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],c=e[12],u=e[1],h=e[5],p=e[9],d=e[13],g=e[2],_=e[6],v=e[10],x=e[14],E=e[3],A=e[7],y=e[11],S=e[15],w=p*x-d*v,L=h*x-d*_,D=h*v-p*_,z=u*x-d*g,P=u*v-p*g,F=u*_-h*g;return n*(A*w-y*L+S*D)-a*(E*w-y*z+S*P)+r*(E*L-A*z+S*F)-c*(E*D-A*P+y*F)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],g=e[8],_=e[9],v=e[10],x=e[11],E=e[12],A=e[13],y=e[14],S=e[15],w=n*h-a*u,L=n*p-r*u,D=n*d-c*u,z=a*p-r*h,P=a*d-c*h,F=r*d-c*p,b=g*A-_*E,U=g*y-v*E,fe=g*S-x*E,H=_*y-v*A,Z=_*S-x*A,te=v*S-x*y,ce=w*te-L*Z+D*H+z*fe-P*U+F*b;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/ce;return e[0]=(h*te-p*Z+d*H)*J,e[1]=(r*Z-a*te-c*H)*J,e[2]=(A*F-y*P+S*z)*J,e[3]=(v*P-_*F-x*z)*J,e[4]=(p*fe-u*te-d*U)*J,e[5]=(n*te-r*fe+c*U)*J,e[6]=(y*D-E*F-S*L)*J,e[7]=(g*F-v*D+x*L)*J,e[8]=(u*Z-h*fe+d*b)*J,e[9]=(a*fe-n*Z-c*b)*J,e[10]=(E*P-A*D+S*w)*J,e[11]=(_*D-g*P-x*w)*J,e[12]=(h*U-u*H-p*b)*J,e[13]=(n*H-a*U+r*b)*J,e[14]=(A*L-E*z-y*w)*J,e[15]=(g*z-_*L+v*w)*J,this}scale(e){const n=this.elements,a=e.x,r=e.y,c=e.z;return n[0]*=a,n[4]*=r,n[8]*=c,n[1]*=a,n[5]*=r,n[9]*=c,n[2]*=a,n[6]*=r,n[10]*=c,n[3]*=a,n[7]*=r,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),c=1-a,u=e.x,h=e.y,p=e.z,d=c*u,g=c*h;return this.set(d*u+a,d*h-r*p,d*p+r*h,0,d*h+r*p,g*h+a,g*p-r*u,0,d*p-r*h,g*p+r*u,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,c,u){return this.set(1,a,c,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,d=c+c,g=u+u,_=h+h,v=c*d,x=c*g,E=c*_,A=u*g,y=u*_,S=h*_,w=p*d,L=p*g,D=p*_,z=a.x,P=a.y,F=a.z;return r[0]=(1-(A+S))*z,r[1]=(x+D)*z,r[2]=(E-L)*z,r[3]=0,r[4]=(x-D)*P,r[5]=(1-(v+S))*P,r[6]=(y+w)*P,r[7]=0,r[8]=(E+L)*F,r[9]=(y-w)*F,r[10]=(1-(v+A))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const c=this.determinant();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Br.set(r[0],r[1],r[2]).length();const h=Br.set(r[4],r[5],r[6]).length(),p=Br.set(r[8],r[9],r[10]).length();c<0&&(u=-u),Ui.copy(this);const d=1/u,g=1/h,_=1/p;return Ui.elements[0]*=d,Ui.elements[1]*=d,Ui.elements[2]*=d,Ui.elements[4]*=g,Ui.elements[5]*=g,Ui.elements[6]*=g,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,n.setFromRotationMatrix(Ui),a.x=u,a.y=h,a.z=p,this}makePerspective(e,n,a,r,c,u,h=Zi,p=!1){const d=this.elements,g=2*c/(n-e),_=2*c/(a-r),v=(n+e)/(n-e),x=(a+r)/(a-r);let E,A;if(p)E=c/(u-c),A=u*c/(u-c);else if(h===Zi)E=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(h===Rl)E=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,r,c,u,h=Zi,p=!1){const d=this.elements,g=2/(n-e),_=2/(a-r),v=-(n+e)/(n-e),x=-(a+r)/(a-r);let E,A;if(p)E=1/(u-c),A=u/(u-c);else if(h===Zi)E=-2/(u-c),A=-(u+c)/(u-c);else if(h===Rl)E=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Br=new K,Ui=new mt,SE=new K(0,0,0),yE=new K(1,1,1),fs=new K,Xc=new K,ci=new K,tv=new mt,nv=new ia;class ta{constructor(e=0,n=0,a=0,r=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,c=r[0],u=r[4],h=r[8],p=r[1],d=r[5],g=r[9],_=r[2],v=r[6],x=r[10];switch(n){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nv.setFromEuler(this),this.setFromQuaternion(nv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class Cx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ME=0;const iv=new K,Fr=new ia,ba=new mt,Wc=new K,ol=new K,EE=new K,TE=new ia,av=new K(1,0,0),sv=new K(0,1,0),rv=new K(0,0,1),ov={type:"added"},bE={type:"removed"},zr={type:"childadded",child:null},td={type:"childremoved",child:null};class $t extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new K,n=new ta,a=new ia,r=new K(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new dt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(av,e)}rotateY(e){return this.rotateOnAxis(sv,e)}rotateZ(e){return this.rotateOnAxis(rv,e)}translateOnAxis(e,n){return iv.copy(e).applyQuaternion(this.quaternion),this.position.add(iv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(av,e)}translateY(e){return this.translateOnAxis(sv,e)}translateZ(e){return this.translateOnAxis(rv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Wc.copy(e):Wc.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(ol,Wc,this.up):ba.lookAt(Wc,ol,this.up),this.quaternion.setFromRotationMatrix(ba),r&&(ba.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(ba),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ov),zr.child=e,this.dispatchEvent(zr),zr.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bE),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ov),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,e,EE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,TE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,r=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*r,c[13]+=a-c[1]*n-c[5]*a-c[9]*r,c[14]+=r-c[2]*n-c[6]*a-c[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(e.materials,this.material[p]));r.material=h}else r.material=c(e.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];r.animations.push(c(e.animations,p))}}if(n){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),E=u(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=r,a;function u(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}$t.DEFAULT_UP=new K(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qs extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AE={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,c=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,a),S=this._getHandJoint(d,A);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,E=.005;d.inputState.pinching&&v>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&c!==null&&(r=c),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(AE)))}return h!==null&&(h.visible=r!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Qs;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const wx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},qc={h:0,s:0,l:0};function id(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class ot{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,r=bt.workingColorSpace){return this.r=e,this.g=n,this.b=a,bt.colorSpaceToWorking(this,r),this}setHSL(e,n,a,r=bt.workingColorSpace){if(e=zp(e,1),n=St(n,0,1),a=St(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=id(u,c,e+1/3),this.g=id(u,c,e),this.b=id(u,c,e-1/3)}return bt.colorSpaceToWorking(this,r),this}setStyle(e,n=Dn){function a(c){c!==void 0&&parseFloat(c)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=r[1],h=r[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=r[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const a=wx[e.toLowerCase()];return a!==void 0?this.setHex(a,n):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return bt.workingToColorSpace(Nn.copy(this),e),Math.round(St(Nn.r*255,0,255))*65536+Math.round(St(Nn.g*255,0,255))*256+Math.round(St(Nn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.workingToColorSpace(Nn.copy(this),n);const a=Nn.r,r=Nn.g,c=Nn.b,u=Math.max(a,r,c),h=Math.min(a,r,c);let p,d;const g=(h+u)/2;if(h===u)p=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case a:p=(r-c)/_+(r<c?6:0);break;case r:p=(c-a)/_+2;break;case c:p=(a-r)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=g,e}getRGB(e,n=bt.workingColorSpace){return bt.workingToColorSpace(Nn.copy(this),n),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Dn){bt.workingToColorSpace(Nn.copy(this),e);const n=Nn.r,a=Nn.g,r=Nn.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+n,hs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(hs),e.getHSL(qc);const a=yl(hs.h,qc.h,n),r=yl(hs.s,qc.s,n),c=yl(hs.l,qc.l,n);return this.setHSL(a,r,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*r,this.g=c[1]*n+c[4]*a+c[7]*r,this.b=c[2]*n+c[5]*a+c[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new ot;ot.NAMES=wx;class RE extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ni=new K,Aa=new K,ad=new K,Ra=new K,Hr=new K,Vr=new K,lv=new K,sd=new K,rd=new K,od=new K,ld=new jt,cd=new jt,ud=new jt;class Bi{constructor(e=new K,n=new K,a=new K){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),Ni.subVectors(e,n),r.cross(Ni);const c=r.lengthSq();return c>0?r.multiplyScalar(1/Math.sqrt(c)):r.set(0,0,0)}static getBarycoord(e,n,a,r,c){Ni.subVectors(r,n),Aa.subVectors(a,n),ad.subVectors(e,n);const u=Ni.dot(Ni),h=Ni.dot(Aa),p=Ni.dot(ad),d=Aa.dot(Aa),g=Aa.dot(ad),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*p-h*g)*v,E=(u*g-h*p)*v;return c.set(1-x-E,E,x)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,n,a,r,c,u,h,p){return this.getBarycoord(e,n,a,r,Ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ra.x),p.addScaledVector(u,Ra.y),p.addScaledVector(h,Ra.z),p)}static getInterpolatedAttribute(e,n,a,r,c,u){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(e,n),cd.fromBufferAttribute(e,a),ud.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(ld,c.x),u.addScaledVector(cd,c.y),u.addScaledVector(ud,c.z),u}static isFrontFacing(e,n,a,r){return Ni.subVectors(a,n),Aa.subVectors(e,n),Ni.cross(Aa).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Ni.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,c){return Bi.getInterpolation(e,this.a,this.b,this.c,n,a,r,c)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,c=this.c;let u,h;Hr.subVectors(r,a),Vr.subVectors(c,a),sd.subVectors(e,a);const p=Hr.dot(sd),d=Vr.dot(sd);if(p<=0&&d<=0)return n.copy(a);rd.subVectors(e,r);const g=Hr.dot(rd),_=Vr.dot(rd);if(g>=0&&_<=g)return n.copy(r);const v=p*_-g*d;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(Hr,u);od.subVectors(e,c);const x=Hr.dot(od),E=Vr.dot(od);if(E>=0&&x<=E)return n.copy(c);const A=x*d-p*E;if(A<=0&&d>=0&&E<=0)return h=d/(d-E),n.copy(a).addScaledVector(Vr,h);const y=g*E-x*_;if(y<=0&&_-g>=0&&x-E>=0)return lv.subVectors(c,r),h=(_-g)/(_-g+(x-E)),n.copy(r).addScaledVector(lv,h);const S=1/(y+A+v);return u=A*S,h=v*S,n.copy(a).addScaledVector(Hr,u).addScaledVector(Vr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fa{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Oi):Oi.fromBufferAttribute(c,u),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Yc.copy(a.boundingBox)),Yc.applyMatrix4(e.matrixWorld),this.union(Yc)}const r=e.children;for(let c=0,u=r.length;c<u;c++)this.expandByObject(r[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ll),jc.subVectors(this.max,ll),Gr.subVectors(e.a,ll),kr.subVectors(e.b,ll),Xr.subVectors(e.c,ll),ds.subVectors(kr,Gr),ps.subVectors(Xr,kr),Hs.subVectors(Gr,Xr);let n=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-Hs.z,Hs.y,ds.z,0,-ds.x,ps.z,0,-ps.x,Hs.z,0,-Hs.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-Hs.y,Hs.x,0];return!fd(n,Gr,kr,Xr,jc)||(n=[1,0,0,0,1,0,0,0,1],!fd(n,Gr,kr,Xr,jc))?!1:(Kc.crossVectors(ds,ps),n=[Kc.x,Kc.y,Kc.z],fd(n,Gr,kr,Xr,jc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ca=[new K,new K,new K,new K,new K,new K,new K,new K],Oi=new K,Yc=new Fa,Gr=new K,kr=new K,Xr=new K,ds=new K,ps=new K,Hs=new K,ll=new K,jc=new K,Kc=new K,Vs=new K;function fd(o,e,n,a,r){for(let c=0,u=o.length-3;c<=u;c+=3){Vs.fromArray(o,c);const h=r.x*Math.abs(Vs.x)+r.y*Math.abs(Vs.y)+r.z*Math.abs(Vs.z),p=e.dot(Vs),d=n.dot(Vs),g=a.dot(Vs);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const mn=new K,Zc=new At;let CE=0;class kn{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=yp,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,c=this.itemSize;r<c;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Zc.fromBufferAttribute(this,n),Zc.applyMatrix3(e),this.setXY(n,Zc.x,Zc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix3(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix4(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)mn.fromBufferAttribute(this,n),mn.applyNormalMatrix(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)mn.fromBufferAttribute(this,n),mn.transformDirection(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Pi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Ht(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),a=Ht(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),a=Ht(a,this.array),r=Ht(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),a=Ht(a,this.array),r=Ht(r,this.array),c=Ht(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yp&&(e.usage=this.usage),e}}class Dx extends kn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Lx extends kn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Jn extends kn{constructor(e,n,a){super(new Float32Array(e),n,a)}}const wE=new Fa,cl=new K,hd=new K;class aa{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):wE.setFromPoints(e).getCenter(a);let r=0;for(let c=0,u=e.length;c<u;c++)r=Math.max(r,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cl.subVectors(e,this.center);const n=cl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(cl,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cl.copy(e.center).add(hd)),this.expandByPoint(cl.copy(e.center).sub(hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let DE=0;const yi=new mt,dd=new $t,Wr=new K,ui=new Fa,ul=new Fa,Tn=new K;class hi extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qM(e)?Lx:Dx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new dt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,n,a){return yi.makeTranslation(e,n,a),this.applyMatrix4(yi),this}scale(e,n,a){return yi.makeScale(e,n,a),this.applyMatrix4(yi),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,c=e.length;r<c;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Jn(a,3))}else{const a=Math.min(e.length,n.count);for(let r=0;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const c=n[a];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const a=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];ul.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(ui.min,ul.min),ui.expandByPoint(Tn),Tn.addVectors(ui.max,ul.max),ui.expandByPoint(Tn)):(ui.expandByPoint(ul.min),ui.expandByPoint(ul.max))}ui.getCenter(a);let r=0;for(let c=0,u=e.count;c<u;c++)Tn.fromBufferAttribute(e,c),r=Math.max(r,a.distanceToSquared(Tn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Tn.fromBufferAttribute(h,d),p&&(Wr.fromBufferAttribute(e,d),Tn.add(Wr)),r=Math.max(r,a.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let b=0;b<a.count;b++)h[b]=new K,p[b]=new K;const d=new K,g=new K,_=new K,v=new At,x=new At,E=new At,A=new K,y=new K;function S(b,U,fe){d.fromBufferAttribute(a,b),g.fromBufferAttribute(a,U),_.fromBufferAttribute(a,fe),v.fromBufferAttribute(c,b),x.fromBufferAttribute(c,U),E.fromBufferAttribute(c,fe),g.sub(d),_.sub(d),x.sub(v),E.sub(v);const H=1/(x.x*E.y-E.x*x.y);isFinite(H)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(H),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(H),h[b].add(A),h[U].add(A),h[fe].add(A),p[b].add(y),p[U].add(y),p[fe].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let b=0,U=w.length;b<U;++b){const fe=w[b],H=fe.start,Z=fe.count;for(let te=H,ce=H+Z;te<ce;te+=3)S(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new K,D=new K,z=new K,P=new K;function F(b){z.fromBufferAttribute(r,b),P.copy(z);const U=h[b];L.copy(U),L.sub(z.multiplyScalar(z.dot(U))).normalize(),D.crossVectors(P,U);const H=D.dot(p[b])<0?-1:1;u.setXYZW(b,L.x,L.y,L.z,H)}for(let b=0,U=w.length;b<U;++b){const fe=w[b],H=fe.start,Z=fe.count;for(let te=H,ce=H+Z;te<ce;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const r=new K,c=new K,u=new K,h=new K,p=new K,d=new K,g=new K,_=new K;if(e)for(let v=0,x=e.count;v<x;v+=3){const E=e.getX(v+0),A=e.getX(v+1),y=e.getX(v+2);r.fromBufferAttribute(n,E),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,A),d.fromBufferAttribute(a,y),h.add(g),p.add(g),d.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(A,p.x,p.y,p.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,x=n.count;v<x;v+=3)r.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Tn.fromBufferAttribute(e,n),Tn.normalize(),e.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(h,p){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(p.length*g);let x=0,E=0;for(let A=0,y=p.length;A<y;A++){h.isInterleavedBufferAttribute?x=p[A]*h.data.stride+h.offset:x=p[A]*g;for(let S=0;S<g;S++)v[E++]=d[x++]}return new kn(v,g,_)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hi,a=this.index.array,r=this.attributes;for(const h in r){const p=r[h],d=e(p,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=e(v,a);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const r={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(e.data))}g.length>0&&(r[p]=g,c=!0)}c&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const d in r){const g=r[d];this.setAttribute(d,g.clone(n))}const c=e.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class LE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=yp,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let r=0,c=this.stride;r<c;r++)this.array[e+r]=n.array[a+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new K;class Vp{constructor(e,n,a,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)zn.fromBufferAttribute(this,n),zn.applyMatrix4(e),this.setXYZ(n,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)zn.fromBufferAttribute(this,n),zn.applyNormalMatrix(e),this.setXYZ(n,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)zn.fromBufferAttribute(this,n),zn.transformDirection(e),this.setXYZ(n,zn.x,zn.y,zn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Pi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Ht(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Pi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Pi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Pi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Pi(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ht(n,this.array),a=Ht(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ht(n,this.array),a=Ht(a,this.array),r=Ht(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ht(n,this.array),a=Ht(a,this.array),r=Ht(r,this.array),c=Ht(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Ru("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return new kn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ru("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let UE=0;class $i extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Qr,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Od,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){Ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(a.blending=this.blending),this.side!==Ia&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Nd&&(a.blendSrc=this.blendSrc),this.blendDst!==Od&&(a.blendDst=this.blendDst),this.blendEquation!==js&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=r(e.textures),u=r(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let c=0;c!==r;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wa=new K,pd=new K,Qc=new K,ms=new K,md=new K,Jc=new K,gd=new K;class Uu{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wa.copy(this.origin).addScaledVector(this.direction,n),wa.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){pd.copy(e).add(n).multiplyScalar(.5),Qc.copy(n).sub(e).normalize(),ms.copy(this.origin).sub(pd);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Qc),h=ms.dot(this.direction),p=-ms.dot(Qc),d=ms.lengthSq(),g=Math.abs(1-u*u);let _,v,x,E;if(g>0)if(_=u*p-h,v=u*h-p,E=c*g,_>=0)if(v>=-E)if(v<=E){const A=1/g;_*=A,v*=A,x=_*(_+u*v+2*h)+v*(u*_+v+2*p)+d}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;else v<=-E?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-p),c),x=v*(v+2*p)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(pd).addScaledVector(Qc,v),x}intersectSphere(e,n){wa.subVectors(e.center,this.origin);const a=wa.dot(this.direction),r=wa.dot(wa)-a*a,c=e.radius*e.radius;if(r>c)return null;const u=Math.sqrt(c-r),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,c,u,h,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(e.min.x-v.x)*d,r=(e.max.x-v.x)*d):(a=(e.max.x-v.x)*d,r=(e.min.x-v.x)*d),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||c>r||((c>a||isNaN(a))&&(a=c),(u<r||isNaN(r))&&(r=u),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),a>p||h>r)||((h>a||a!==a)&&(a=h),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,wa)!==null}intersectTriangle(e,n,a,r,c){md.subVectors(n,e),Jc.subVectors(a,e),gd.crossVectors(md,Jc);let u=this.direction.dot(gd),h;if(u>0){if(r)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ms.subVectors(this.origin,e);const p=h*this.direction.dot(Jc.crossVectors(ms,Jc));if(p<0)return null;const d=h*this.direction.dot(md.cross(ms));if(d<0||p+d>u)return null;const g=-h*ms.dot(gd);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ss extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=lx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cv=new mt,Gs=new Uu,$c=new aa,uv=new K,eu=new K,tu=new K,nu=new K,_d=new K,iu=new K,fv=new K,au=new K;class $n extends $t{constructor(e=new hi,n=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const h=this.morphTargetInfluences;if(c&&h){iu.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=h[p],_=c[p];g!==0&&(_d.fromBufferAttribute(_,e),u?iu.addScaledVector(_d,g):iu.addScaledVector(_d.sub(n),g))}n.add(iu)}return n}raycast(e,n){const a=this.geometry,r=this.material,c=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),$c.copy(a.boundingSphere),$c.applyMatrix4(c),Gs.copy(e.ray).recast(e.near),!($c.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere($c,uv)===null||Gs.origin.distanceToSquared(uv)>(e.far-e.near)**2))&&(cv.copy(c).invert(),Gs.copy(e.ray).applyMatrix4(cv),!(a.boundingBox!==null&&Gs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Gs)))}_computeIntersections(e,n,a){let r;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const y=v[E],S=u[y.materialIndex],w=Math.max(y.start,x.start),L=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let D=w,z=L;D<z;D+=3){const P=h.getX(D),F=h.getX(D+1),b=h.getX(D+2);r=su(this,S,e,a,d,g,_,P,F,b),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{const E=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let y=E,S=A;y<S;y+=3){const w=h.getX(y),L=h.getX(y+1),D=h.getX(y+2);r=su(this,u,e,a,d,g,_,w,L,D),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const y=v[E],S=u[y.materialIndex],w=Math.max(y.start,x.start),L=Math.min(p.count,Math.min(y.start+y.count,x.start+x.count));for(let D=w,z=L;D<z;D+=3){const P=D,F=D+1,b=D+2;r=su(this,S,e,a,d,g,_,P,F,b),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{const E=Math.max(0,x.start),A=Math.min(p.count,x.start+x.count);for(let y=E,S=A;y<S;y+=3){const w=y,L=y+1,D=y+2;r=su(this,u,e,a,d,g,_,w,L,D),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}}}function NE(o,e,n,a,r,c,u,h){let p;if(e.side===Qn?p=a.intersectTriangle(u,c,r,!0,h):p=a.intersectTriangle(r,c,u,e.side===Ia,h),p===null)return null;au.copy(h),au.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(au);return d<n.near||d>n.far?null:{distance:d,point:au.clone(),object:o}}function su(o,e,n,a,r,c,u,h,p,d){o.getVertexPosition(h,eu),o.getVertexPosition(p,tu),o.getVertexPosition(d,nu);const g=NE(o,e,n,a,eu,tu,nu,fv);if(g){const _=new K;Bi.getBarycoord(fv,eu,tu,nu,_),r&&(g.uv=Bi.getInterpolatedAttribute(r,h,p,d,_,new At)),c&&(g.uv1=Bi.getInterpolatedAttribute(c,h,p,d,_,new At)),u&&(g.normal=Bi.getInterpolatedAttribute(u,h,p,d,_,new K),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:d,normal:new K,materialIndex:0};Bi.getNormal(eu,tu,nu,v.normal),g.face=v,g.barycoord=_}return g}const hv=new K,dv=new jt,pv=new jt,OE=new K,mv=new mt,ru=new K,vd=new aa,gv=new mt,xd=new Uu;class IE extends $n{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=k0,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fa),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,ru),this.boundingBox.expandByPoint(ru)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new aa),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,ru),this.boundingSphere.expandByPoint(ru)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vd.copy(this.boundingSphere),vd.applyMatrix4(r),e.ray.intersectsSphere(vd)!==!1&&(gv.copy(r).invert(),xd.copy(e.ray).applyMatrix4(gv),!(this.boundingBox!==null&&xd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,xd)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new jt,n=this.geometry.attributes.skinWeight;for(let a=0,r=n.count;a<r;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===k0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===IM?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,r=this.geometry;dv.fromBufferAttribute(r.attributes.skinIndex,e),pv.fromBufferAttribute(r.attributes.skinWeight,e),hv.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let c=0;c<4;c++){const u=pv.getComponent(c);if(u!==0){const h=dv.getComponent(c);mv.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),n.addScaledVector(OE.copy(hv).applyMatrix4(mv),u)}}return n.applyMatrix4(this.bindMatrixInverse)}}class Ux extends $t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gp extends bn{constructor(e=null,n=1,a=1,r,c,u,h,p,d=xn,g=xn,_,v){super(null,u,h,p,d,g,r,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _v=new mt,PE=new mt;class kp{constructor(e=[],n=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){Ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new mt;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const h=e[c]?e[c].matrixWorld:PE;_v.multiplyMatrices(h,n[c]),_v.toArray(a,c*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new kp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new Gp(n,e,e,Ti,Ei);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,r=e.bones.length;a<r;a++){const c=e.bones[a];let u=n[c];u===void 0&&(Ke("Skeleton: No bone found with UUID:",c),u=new Ux),this.bones.push(u),this.boneInverses.push(new mt().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let r=0,c=n.length;r<c;r++){const u=n[r];e.bones.push(u.uuid);const h=a[r];e.boneInverses.push(h.toArray())}return e}}class Mp extends kn{constructor(e,n,a,r=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qr=new mt,vv=new mt,ou=[],xv=new Fa,BE=new mt,fl=new $n,hl=new aa;class FE extends $n{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Mp(new Float32Array(a*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,BE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Fa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,qr),xv.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(xv)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new aa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,qr),hl.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(hl)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,r=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let h=0;h<a.length;h++)a[h]=r[u+h]}raycast(e,n){const a=this.matrixWorld,r=this.count;if(fl.geometry=this.geometry,fl.material=this.material,fl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(a),e.ray.intersectsSphere(hl)!==!1))for(let c=0;c<r;c++){this.getMatrixAt(c,qr),vv.multiplyMatrices(a,qr),fl.matrixWorld=vv,fl.raycast(e,ou);for(let u=0,h=ou.length;u<h;u++){const p=ou[u];p.instanceId=c,p.object=this,n.push(p)}ou.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Mp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const a=n.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new Gp(new Float32Array(r*this.count),r,this.count,Np,Ei));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const h=this.geometry.morphTargetsRelative?1:1-u,p=r*e;c[p]=h,c.set(a,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Sd=new K,zE=new K,HE=new dt;class Ys{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=Sd.subVectors(a,n).cross(zE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(Sd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/r;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||HE.getNormalMatrix(e),r=this.coplanarPoint(Sd).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ks=new aa,VE=new At(.5,.5),lu=new K;class Xp{constructor(e=new Ys,n=new Ys,a=new Ys,r=new Ys,c=new Ys,u=new Ys){this.planes=[e,n,a,r,c,u]}set(e,n,a,r,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(r),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Zi,a=!1){const r=this.planes,c=e.elements,u=c[0],h=c[1],p=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],E=c[8],A=c[9],y=c[10],S=c[11],w=c[12],L=c[13],D=c[14],z=c[15];if(r[0].setComponents(d-u,x-g,S-E,z-w).normalize(),r[1].setComponents(d+u,x+g,S+E,z+w).normalize(),r[2].setComponents(d+h,x+_,S+A,z+L).normalize(),r[3].setComponents(d-h,x-_,S-A,z-L).normalize(),a)r[4].setComponents(p,v,y,D).normalize(),r[5].setComponents(d-p,x-v,S-y,z-D).normalize();else if(r[4].setComponents(d-p,x-v,S-y,z-D).normalize(),n===Zi)r[5].setComponents(d+p,x+v,S+y,z+D).normalize();else if(n===Rl)r[5].setComponents(p,v,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){ks.center.set(0,0,0);const n=VE.distanceTo(e.center);return ks.radius=.7071067811865476+n,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(lu.x=r.normal.x>0?e.max.x:e.min.x,lu.y=r.normal.y>0?e.max.y:e.min.y,lu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nx extends $i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wu=new K,Du=new K,Sv=new mt,dl=new Uu,cu=new aa,yd=new K,yv=new K;class Wp extends $t{constructor(e=new hi,n=new Nx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let r=1,c=n.count;r<c;r++)wu.fromBufferAttribute(n,r-1),Du.fromBufferAttribute(n,r),a[r]=a[r-1],a[r]+=wu.distanceTo(Du);e.setAttribute("lineDistance",new Jn(a,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),cu.copy(a.boundingSphere),cu.applyMatrix4(r),cu.radius+=c,e.ray.intersectsSphere(cu)===!1)return;Sv.copy(r).invert(),dl.copy(e.ray).applyMatrix4(Sv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=a.index,v=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let A=x,y=E-1;A<y;A+=d){const S=g.getX(A),w=g.getX(A+1),L=uu(this,e,dl,p,S,w,A);L&&n.push(L)}if(this.isLineLoop){const A=g.getX(E-1),y=g.getX(x),S=uu(this,e,dl,p,A,y,E-1);S&&n.push(S)}}else{const x=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let A=x,y=E-1;A<y;A+=d){const S=uu(this,e,dl,p,A,A+1,A);S&&n.push(S)}if(this.isLineLoop){const A=uu(this,e,dl,p,E-1,x,E-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function uu(o,e,n,a,r,c,u){const h=o.geometry.attributes.position;if(wu.fromBufferAttribute(h,r),Du.fromBufferAttribute(h,c),n.distanceSqToSegment(wu,Du,yd,yv)>a)return;yd.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(yd);if(!(d<e.near||d>e.far))return{distance:d,point:yv.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const Mv=new K,Ev=new K;class GE extends Wp{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let r=0,c=n.count;r<c;r+=2)Mv.fromBufferAttribute(n,r),Ev.fromBufferAttribute(n,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+Mv.distanceTo(Ev);e.setAttribute("lineDistance",new Jn(a,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kE extends Wp{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class Ox extends $i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tv=new mt,Ep=new Uu,fu=new aa,hu=new K;class XE extends $t{constructor(e=new hi,n=new Ox){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),fu.copy(a.boundingSphere),fu.applyMatrix4(r),fu.radius+=c,e.ray.intersectsSphere(fu)===!1)return;Tv.copy(r).invert(),Ep.copy(e.ray).applyMatrix4(Tv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,_=a.attributes.position;if(d!==null){const v=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let E=v,A=x;E<A;E++){const y=d.getX(E);hu.fromBufferAttribute(_,y),bv(hu,y,p,r,e,n,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let E=v,A=x;E<A;E++)hu.fromBufferAttribute(_,E),bv(hu,E,p,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function bv(o,e,n,a,r,c,u){const h=Ep.distanceSqToPoint(o);if(h<n){const p=new K;Ep.closestPointToPoint(o,p),p.applyMatrix4(a);const d=r.ray.origin.distanceTo(p);if(d<r.near||d>r.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Ix extends bn{constructor(e=[],n=Js,a,r,c,u,h,p,d,g){super(e,n,a,r,c,u,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wl extends bn{constructor(e,n,a=ea,r,c,u,h=xn,p=xn,d,g=Ba,_=1){if(g!==Ba&&g!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,r,c,u,h,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class WE extends wl{constructor(e,n=ea,a=Js,r,c,u=xn,h=xn,p,d=Ba){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,a,r,c,u,h,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Px extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Dl extends hi{constructor(e=1,n=1,a=1,r=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:c,depthSegments:u};const h=this;r=Math.floor(r),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,a,n,e,u,c,0),E("z","y","x",1,-1,a,n,-e,u,c,1),E("x","z","y",1,1,e,a,n,r,u,2),E("x","z","y",1,-1,e,a,-n,r,u,3),E("x","y","z",1,-1,e,n,a,r,c,4),E("x","y","z",-1,-1,e,n,-a,r,c,5),this.setIndex(p),this.setAttribute("position",new Jn(d,3)),this.setAttribute("normal",new Jn(g,3)),this.setAttribute("uv",new Jn(_,2));function E(A,y,S,w,L,D,z,P,F,b,U){const fe=D/F,H=z/b,Z=D/2,te=z/2,ce=P/2,J=F+1,O=b+1;let B=0,se=0;const oe=new K;for(let Se=0;Se<O;Se++){const I=Se*H-te;for(let q=0;q<J;q++){const me=q*fe-Z;oe[A]=me*w,oe[y]=I*L,oe[S]=ce,d.push(oe.x,oe.y,oe.z),oe[A]=0,oe[y]=0,oe[S]=P>0?1:-1,g.push(oe.x,oe.y,oe.z),_.push(q/F),_.push(1-Se/b),B+=1}}for(let Se=0;Se<b;Se++)for(let I=0;I<F;I++){const q=v+I+J*Se,me=v+I+J*(Se+1),Ae=v+(I+1)+J*(Se+1),Pe=v+(I+1)+J*Se;p.push(q,me,Pe),p.push(me,Ae,Pe),se+=6}h.addGroup(x,se,U),x+=se,v+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nu extends hi{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const c=e/2,u=n/2,h=Math.floor(a),p=Math.floor(r),d=h+1,g=p+1,_=e/h,v=n/p,x=[],E=[],A=[],y=[];for(let S=0;S<g;S++){const w=S*v-u;for(let L=0;L<d;L++){const D=L*_-c;E.push(D,-w,0),A.push(0,0,1),y.push(L/h),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let w=0;w<h;w++){const L=w+d*S,D=w+d*(S+1),z=w+1+d*(S+1),P=w+1+d*S;x.push(L,D,P),x.push(D,z,P)}this.setIndex(x),this.setAttribute("position",new Jn(E,3)),this.setAttribute("normal",new Jn(A,3)),this.setAttribute("uv",new Jn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.width,e.height,e.widthSegments,e.heightSegments)}}class qp extends hi{constructor(e=.5,n=1,a=32,r=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:a,phiSegments:r,thetaStart:c,thetaLength:u},a=Math.max(3,a),r=Math.max(1,r);const h=[],p=[],d=[],g=[];let _=e;const v=(n-e)/r,x=new K,E=new At;for(let A=0;A<=r;A++){for(let y=0;y<=a;y++){const S=c+y/a*u;x.x=_*Math.cos(S),x.y=_*Math.sin(S),p.push(x.x,x.y,x.z),d.push(0,0,1),E.x=(x.x/n+1)/2,E.y=(x.y/n+1)/2,g.push(E.x,E.y)}_+=v}for(let A=0;A<r;A++){const y=A*(a+1);for(let S=0;S<a;S++){const w=S+y,L=w,D=w+a+1,z=w+a+2,P=w+1;h.push(L,D,P),h.push(D,z,P)}}this.setIndex(h),this.setAttribute("position",new Jn(p,3)),this.setAttribute("normal",new Jn(d,3)),this.setAttribute("uv",new Jn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function so(o){const e={};for(const n in o){e[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone():Array.isArray(r)?e[n][a]=r.slice():e[n][a]=r}}return e}function Vn(o){const e={};for(let n=0;n<o.length;n++){const a=so(o[n]);for(const r in a)e[r]=a[r]}return e}function qE(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Bx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const YE={clone:so,merge:Vn};var jE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class na extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jE,this.fragmentShader=KE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=qE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class ZE extends na{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yp extends $i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bx,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sa extends Yp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class QE extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JE extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function du(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function $E(o){function e(r,c){return o[r]-o[c]}const n=o.length,a=new Array(n);for(let r=0;r!==n;++r)a[r]=r;return a.sort(e),a}function Av(o,e,n){const a=o.length,r=new o.constructor(a);for(let c=0,u=0;u!==a;++c){const h=n[c]*e;for(let p=0;p!==e;++p)r[u++]=o[h+p]}return r}function Fx(o,e,n,a){let r=1,c=o[0];for(;c!==void 0&&c[a]===void 0;)c=o[r++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=o[r++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=o[r++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=o[r++];while(c!==void 0)}class uo{constructor(e,n,a,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,r=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<r)){for(let h=a+2;;){if(r===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=r,r=n[++a],e<r)break t}u=n.length;break n}if(!(e>=c)){const h=n[1];e<h&&(a=2,c=h);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(r=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const h=a+u>>>1;e<n[h]?u=h:a=h+1}if(r=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,r)}return this.interpolate_(a,c,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r;for(let u=0;u!==r;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class eT extends uo{constructor(e,n,a,r){super(e,n,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:W0,endingEnd:W0}}intervalChanged_(e,n,a){const r=this.parameterPositions;let c=e-2,u=e+1,h=r[c],p=r[u];if(h===void 0)switch(this.getSettings_().endingStart){case q0:c=e,h=2*n-a;break;case Y0:c=r.length-2,h=n+r[c]-r[c+1];break;default:c=e,h=a}if(p===void 0)switch(this.getSettings_().endingEnd){case q0:u=e,p=2*a-n;break;case Y0:u=1,p=a+r[1]-r[0];break;default:u=e-1,p=n}const d=(a-n)*.5,g=this.valueSize;this._weightPrev=d/(n-h),this._weightNext=d/(p-a),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,x=this._weightNext,E=(a-n)/(r-n),A=E*E,y=A*E,S=-v*y+2*v*A-v*E,w=(1+v)*y+(-1.5-2*v)*A+(-.5+v)*E+1,L=(-1-x)*y+(1.5+x)*A+.5*E,D=x*y-x*A;for(let z=0;z!==h;++z)c[z]=S*u[g+z]+w*u[d+z]+L*u[p+z]+D*u[_+z];return c}}class tT extends uo{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=(a-n)/(r-n),_=1-g;for(let v=0;v!==h;++v)c[v]=u[d+v]*_+u[p+v]*g;return c}}class nT extends uo{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class iT extends uo{interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,g=this.settings||this.DefaultSettings_,_=g.inTangents,v=g.outTangents;if(!_||!v){const A=(a-n)/(r-n),y=1-A;for(let S=0;S!==h;++S)c[S]=u[d+S]*y+u[p+S]*A;return c}const x=h*2,E=e-1;for(let A=0;A!==h;++A){const y=u[d+A],S=u[p+A],w=E*x+A*2,L=v[w],D=v[w+1],z=e*x+A*2,P=_[z],F=_[z+1];let b=(a-n)/(r-n),U,fe,H,Z,te;for(let ce=0;ce<8;ce++){U=b*b,fe=U*b,H=1-b,Z=H*H,te=Z*H;const O=te*n+3*Z*b*L+3*H*U*P+fe*r-a;if(Math.abs(O)<1e-10)break;const B=3*Z*(L-n)+6*H*b*(P-L)+3*U*(r-P);if(Math.abs(B)<1e-10)break;b=b-O/B,b=Math.max(0,Math.min(1,b))}c[A]=te*y+3*Z*b*D+3*H*U*F+fe*S}return c}}class zi{constructor(e,n,a,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=du(n,this.TimeBufferType),this.values=du(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:du(e.times,Array),values:du(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(a.interpolation=r)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new nT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const n=new iT(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.settings=this.settings),n}setInterpolation(e){let n;switch(e){case bl:n=this.InterpolantFactoryMethodDiscrete;break;case Al:n=this.InterpolantFactoryMethodLinear;break;case Zh:n=this.InterpolantFactoryMethodSmooth;break;case X0:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Ke("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bl;case this.InterpolantFactoryMethodLinear:return Al;case this.InterpolantFactoryMethodSmooth:return Zh;case this.InterpolantFactoryMethodBezier:return X0}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]*=e}return this}trim(e,n){const a=this.times,r=a.length;let c=0,u=r-1;for(;c!==r&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==r){c>=u&&(u=Math.max(u,1),c=u-1);const h=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*h,u*h)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,r=this.values,c=a.length;c===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let h=0;h!==c;h++){const p=a[h];if(typeof p=="number"&&isNaN(p)){tt("KeyframeTrack: Time is not a valid number.",this,h,p),e=!1;break}if(u!==null&&u>p){tt("KeyframeTrack: Out of order keys.",this,h,p,u),e=!1;break}u=p}if(r!==void 0&&YM(r))for(let h=0,p=r.length;h!==p;++h){const d=r[h];if(isNaN(d)){tt("KeyframeTrack: Value is not a valid number.",this,h,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===Zh,c=e.length-1;let u=1;for(let h=1;h<c;++h){let p=!1;const d=e[h],g=e[h+1];if(d!==g&&(h!==1||d!==e[0]))if(r)p=!0;else{const _=h*a,v=_-a,x=_+a;for(let E=0;E!==a;++E){const A=n[_+E];if(A!==n[v+E]||A!==n[x+E]){p=!0;break}}}if(p){if(h!==u){e[u]=e[h];const _=h*a,v=u*a;for(let x=0;x!==a;++x)n[v+x]=n[_+x]}++u}}if(c>0){e[u]=e[c];for(let h=c*a,p=u*a,d=0;d!==a;++d)n[p+d]=n[h+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,r=new a(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}zi.prototype.ValueTypeName="";zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=Al;class fo extends zi{constructor(e,n,a){super(e,n,a)}}fo.prototype.ValueTypeName="bool";fo.prototype.ValueBufferType=Array;fo.prototype.DefaultInterpolation=bl;fo.prototype.InterpolantFactoryMethodLinear=void 0;fo.prototype.InterpolantFactoryMethodSmooth=void 0;class zx extends zi{constructor(e,n,a,r){super(e,n,a,r)}}zx.prototype.ValueTypeName="color";class ro extends zi{constructor(e,n,a,r){super(e,n,a,r)}}ro.prototype.ValueTypeName="number";class aT extends uo{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=(a-n)/(r-n);let d=e*h;for(let g=d+h;d!==g;d+=4)ia.slerpFlat(c,0,u,d-h,u,d,p);return c}}class oo extends zi{constructor(e,n,a,r){super(e,n,a,r)}InterpolantFactoryMethodLinear(e){return new aT(this.times,this.values,this.getValueSize(),e)}}oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;class ho extends zi{constructor(e,n,a){super(e,n,a)}}ho.prototype.ValueTypeName="string";ho.prototype.ValueBufferType=Array;ho.prototype.DefaultInterpolation=bl;ho.prototype.InterpolantFactoryMethodLinear=void 0;ho.prototype.InterpolantFactoryMethodSmooth=void 0;class lo extends zi{constructor(e,n,a,r){super(e,n,a,r)}}lo.prototype.ValueTypeName="vector";class sT{constructor(e="",n=-1,a=[],r=PM){this.name=e,this.tracks=a,this.duration=n,this.blendMode=r,this.uuid=Fi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,r=1/(e.fps||1);for(let u=0,h=a.length;u!==h;++u)n.push(oT(a[u]).scale(r));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c.userData=JSON.parse(e.userData||"{}"),c}static toJSON(e){const n=[],a=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let c=0,u=a.length;c!==u;++c)n.push(zi.toJSON(a[c]));return r}static CreateFromMorphTargetSequence(e,n,a,r){const c=n.length,u=[];for(let h=0;h<c;h++){let p=[],d=[];p.push((h+c-1)%c,h,(h+1)%c),d.push(0,1,0);const g=$E(p);p=Av(p,1,g),d=Av(d,1,g),!r&&p[0]===0&&(p.push(c),d.push(d[0])),u.push(new ro(".morphTargetInfluences["+n[h].name+"]",p,d).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const r=e;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===n)return a[r];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const r={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,p=e.length;h<p;h++){const d=e[h],g=d.name.match(c);if(g&&g.length>1){const _=g[1];let v=r[_];v||(r[_]=v=[]),v.push(d)}}const u=[];for(const h in r)u.push(this.CreateFromMorphTargetSequence(h,r[h],n,a));return u}static parseAnimation(e,n){if(Ke("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return tt("AnimationClip: No animation in JSONLoader data."),null;const a=function(_,v,x,E,A){if(x.length!==0){const y=[],S=[];Fx(x,y,S,E),y.length!==0&&A.push(new _(v,y,S))}},r=[],c=e.name||"default",u=e.fps||30,h=e.blendMode;let p=e.length||-1;const d=e.hierarchy||[];for(let _=0;_<d.length;_++){const v=d[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const x={};let E;for(E=0;E<v.length;E++)if(v[E].morphTargets)for(let A=0;A<v[E].morphTargets.length;A++)x[v[E].morphTargets[A]]=-1;for(const A in x){const y=[],S=[];for(let w=0;w!==v[E].morphTargets.length;++w){const L=v[E];y.push(L.time),S.push(L.morphTarget===A?1:0)}r.push(new ro(".morphTargetInfluence["+A+"]",y,S))}p=x.length*u}else{const x=".bones["+n[_].name+"]";a(lo,x+".position",v,"pos",r),a(oo,x+".quaternion",v,"rot",r),a(lo,x+".scale",v,"scl",r)}}return r.length===0?null:new this(c,p,r,h)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,r=e.length;a!==r;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}}function rT(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ro;case"vector":case"vector2":case"vector3":case"vector4":return lo;case"color":return zx;case"quaternion":return oo;case"bool":case"boolean":return fo;case"string":return ho}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function oT(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rT(o.type);if(o.times===void 0){const n=[],a=[];Fx(o.keys,n,a,"value"),o.times=n,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Ua={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(Rv(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!Rv(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Rv(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class lT{constructor(e,n,a){const r=this;let c=!1,u=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){h++,c===!1&&r.onStart!==void 0&&r.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,r.onProgress!==void 0&&r.onProgress(g,u,h),u===h&&(c=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=d.length;_<v;_+=2){const x=d[_],E=d[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cT=new lT;class po{constructor(e){this.manager=e!==void 0?e:cT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const a=this;return new Promise(function(r,c){a.load(e,r,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}po.DEFAULT_MATERIAL_NAME="__DEFAULT";const Da={};class uT extends Error{constructor(e,n){super(e),this.response=n}}class Hx extends po{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=Ua.get(`file:${e}`);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0),c;if(Da[e]!==void 0){Da[e].push({onLoad:n,onProgress:a,onError:r});return}Da[e]=[],Da[e].push({onLoad:n,onProgress:a,onError:r});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=Da[e],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=v?parseInt(v):0,E=x!==0;let A=0;const y=new ReadableStream({start(S){w();function w(){_.read().then(({done:L,value:D})=>{if(L)S.close();else{A+=D.byteLength;const z=new ProgressEvent("progress",{lengthComputable:E,loaded:A,total:x});for(let P=0,F=g.length;P<F;P++){const b=g[P];b.onProgress&&b.onProgress(z)}S.enqueue(D),w()}},L=>{S.error(L)})}}});return new Response(y)}else throw new uT(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(v);return d.arrayBuffer().then(E=>x.decode(E))}}}).then(d=>{Ua.add(`file:${e}`,d);const g=Da[e];delete Da[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onLoad&&x.onLoad(d)}}).catch(d=>{const g=Da[e];if(g===void 0)throw this.manager.itemError(e),d;delete Da[e];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Yr=new WeakMap;class fT extends po{constructor(e){super(e)}load(e,n,a,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ua.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let _=Yr.get(u);_===void 0&&(_=[],Yr.set(u,_)),_.push({onLoad:n,onError:r})}return u}const h=Cl("img");function p(){g(),n&&n(this);const _=Yr.get(this)||[];for(let v=0;v<_.length;v++){const x=_[v];x.onLoad&&x.onLoad(this)}Yr.delete(this),c.manager.itemEnd(e)}function d(_){g(),r&&r(_),Ua.remove(`image:${e}`);const v=Yr.get(this)||[];for(let x=0;x<v.length;x++){const E=v[x];E.onError&&E.onError(_)}Yr.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Ua.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class hT extends po{constructor(e){super(e)}load(e,n,a,r){const c=new bn,u=new fT(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,r),c}}class Ou extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class dT extends Ou{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Md=new mt,Cv=new K,wv=new K;class jp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xp,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Cv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cv),wv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wv),n.updateMatrixWorld(),Md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Rl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pu=new K,mu=new ia,Wi=new K;class Vx extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pu,mu,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(pu,mu,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gs=new K,Dv=new At,Lv=new At;class Gn extends Vx{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(Sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,n){return this.getViewBounds(e,Dv,Lv),n.subVectors(Lv,Dv)}setViewOffset(e,n,a,r,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sl*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,c=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*r/p,n-=u.offsetY*a/d,r*=u.width/p,a*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+r,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class pT extends jp{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=ao*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||r!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=r,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mT extends Ou{constructor(e,n,a=0,r=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=a,this.angle=r,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new pT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class gT extends jp{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}}class _T extends Ou{constructor(e,n,a=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new gT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Iu extends Vx{constructor(e=-1,n=1,a=1,r=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class vT extends jp{constructor(){super(new Iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gx extends Ou{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new vT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Ml{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const Ed=new WeakMap;class xT extends po{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ua.get(`image-bitmap:${e}`);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(d=>{if(Ed.has(u)===!0)r&&r(Ed.get(u)),c.manager.itemError(e),c.manager.itemEnd(e);else return n&&n(d),c.manager.itemEnd(e),d});return}return setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader,h.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(e,h).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(d){return Ua.add(`image-bitmap:${e}`,d),n&&n(d),c.manager.itemEnd(e),d}).catch(function(d){r&&r(d),Ed.set(p,d),Ua.remove(`image-bitmap:${e}`),c.manager.itemError(e),c.manager.itemEnd(e)});Ua.add(`image-bitmap:${e}`,p),c.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const jr=-90,Kr=1;class ST extends $t{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(jr,Kr,e,n);r.layers=this.layers,this.add(r);const c=new Gn(jr,Kr,e,n);c.layers=this.layers,this.add(c);const u=new Gn(jr,Kr,e,n);u.layers=this.layers,this.add(u);const h=new Gn(jr,Kr,e,n);h.layers=this.layers,this.add(h);const p=new Gn(jr,Kr,e,n);p.layers=this.layers,this.add(p);const d=new Gn(jr,Kr,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,c,u,h,p]=n;for(const d of n)this.remove(d);if(e===Zi)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Rl)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,d,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(a,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(a,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(a,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(_,v,x),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class yT extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Kp="\\[\\]\\.:\\/",MT=new RegExp("["+Kp+"]","g"),Zp="[^"+Kp+"]",ET="[^"+Kp.replace("\\.","")+"]",TT=/((?:WC+[\/:])*)/.source.replace("WC",Zp),bT=/(WCOD+)?/.source.replace("WCOD",ET),AT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zp),RT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zp),CT=new RegExp("^"+TT+bT+AT+RT+"$"),wT=["material","materials","bones","map"];class DT{constructor(e,n,a){const r=a||Vt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,c=a.length;r!==c;++r)a[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Vt{constructor(e,n,a){this.path=n,this.parsedPath=a||Vt.parseTrackName(n),this.node=Vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Vt.Composite(e,n,a):new Vt(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(MT,"")}static parseTrackName(e){const n=CT.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const c=a.nodeName.substring(r+1);wT.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const p=a(h.children);if(p)return p}return null},r=a(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)e[n++]=a[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,r=n.propertyName;let c=n.propertyIndex;if(e||(e=Vt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=n.objectIndex;switch(a){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(d!==void 0){if(e[d]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[r];if(u===void 0){const d=n.nodeName;tt("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Vt.Composite=DT;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Uv(o,e,n,a){const r=LT(a);switch(n){case Mx:return o*e;case Np:return o*e/r.components*r.byteLength;case Op:return o*e/r.components*r.byteLength;case io:return o*e*2/r.components*r.byteLength;case Ip:return o*e*2/r.components*r.byteLength;case Ex:return o*e*3/r.components*r.byteLength;case Ti:return o*e*4/r.components*r.byteLength;case Pp:return o*e*4/r.components*r.byteLength;case Su:case yu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Mu:case Eu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case kd:case Wd:return Math.max(o,16)*Math.max(e,8)/4;case Gd:case Xd:return Math.max(o,8)*Math.max(e,8)/2;case qd:case Yd:case Kd:case Zd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case jd:case Qd:case Jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case tp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case np:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ip:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ap:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case sp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case rp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case op:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case lp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case cp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case up:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case fp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case hp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case dp:case pp:case mp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case gp:case _p:return Math.ceil(o/4)*Math.ceil(e/4)*8;case vp:case xp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LT(o){switch(o){case fi:case vx:return{byteLength:1,components:1};case El:case xx:case Pa:return{byteLength:2,components:1};case Lp:case Up:return{byteLength:2,components:4};case ea:case Dp:case Ei:return{byteLength:4,components:1};case Sx:case yx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wp}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wp);function kx(){let o=null,e=!1,n=null,a=null;function r(c,u){n(c,u),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function UT(o){const e=new WeakMap;function n(h,p){const d=h.array,g=h.usage,_=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=o.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,d){const g=p.array,_=p.updateRanges;if(o.bindBuffer(d,h),_.length===0)o.bufferSubData(d,0,g);else{_.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<_.length;x++){const E=_[v],A=_[x];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,_[v]=A)}_.length=v+1;for(let x=0,E=_.length;x<E;x++){const A=_[x];o.bufferSubData(d,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:r,remove:c,update:u}}var NT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OT=`#ifdef USE_ALPHAHASH
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
#endif`,IT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zT=`#ifdef USE_AOMAP
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
#endif`,HT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VT=`#ifdef USE_BATCHING
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
#endif`,GT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qT=`#ifdef USE_IRIDESCENCE
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
#endif`,YT=`#ifdef USE_BUMPMAP
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
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,nb=`#define PI 3.141592653589793
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
} // validated`,ib=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ab=`vec3 transformedNormal = objectNormal;
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
#endif`,sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ob=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ub=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fb=`#ifdef USE_ENVMAP
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
#endif`,hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
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
#endif`,pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_b=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sb=`#ifdef USE_GRADIENTMAP
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
}`,yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tb=`uniform bool receiveShadow;
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
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Db=`PhysicalMaterial material;
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
#endif`,Lb=`uniform sampler2D dfgLUT;
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
}`,Ub=`
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
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gb=`#if defined( USE_POINTS_UV )
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
#endif`,kb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`#ifdef USE_MORPHTARGETS
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
#endif`,Kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tA=`#ifdef USE_NORMALMAP
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
#endif`,nA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_A=`float getShadowMask() {
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
}`,vA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xA=`#ifdef USE_SKINNING
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
#endif`,SA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yA=`#ifdef USE_SKINNING
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
#endif`,MA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AA=`#ifdef USE_TRANSMISSION
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
#endif`,RA=`#ifdef USE_TRANSMISSION
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
#endif`,CA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NA=`uniform sampler2D t2D;
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
}`,OA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FA=`#include <common>
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
}`,zA=`#if DEPTH_PACKING == 3200
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
}`,HA=`#define DISTANCE
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
}`,VA=`#define DISTANCE
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
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`uniform float scale;
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
}`,WA=`uniform vec3 diffuse;
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
}`,qA=`#include <common>
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
}`,YA=`uniform vec3 diffuse;
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
}`,jA=`#define LAMBERT
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
}`,KA=`#define LAMBERT
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
}`,ZA=`#define MATCAP
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
}`,QA=`#define MATCAP
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
}`,JA=`#define NORMAL
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
}`,$A=`#define NORMAL
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
}`,e1=`#define PHONG
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
}`,t1=`#define PHONG
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
}`,n1=`#define STANDARD
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
}`,i1=`#define STANDARD
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
}`,a1=`#define TOON
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
}`,s1=`#define TOON
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
}`,r1=`uniform float size;
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
}`,o1=`uniform vec3 diffuse;
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
}`,l1=`#include <common>
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
}`,c1=`uniform vec3 color;
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
}`,u1=`uniform float rotation;
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
}`,f1=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:NT,alphahash_pars_fragment:OT,alphamap_fragment:IT,alphamap_pars_fragment:PT,alphatest_fragment:BT,alphatest_pars_fragment:FT,aomap_fragment:zT,aomap_pars_fragment:HT,batching_pars_vertex:VT,batching_vertex:GT,begin_vertex:kT,beginnormal_vertex:XT,bsdfs:WT,iridescence_fragment:qT,bumpmap_pars_fragment:YT,clipping_planes_fragment:jT,clipping_planes_pars_fragment:KT,clipping_planes_pars_vertex:ZT,clipping_planes_vertex:QT,color_fragment:JT,color_pars_fragment:$T,color_pars_vertex:eb,color_vertex:tb,common:nb,cube_uv_reflection_fragment:ib,defaultnormal_vertex:ab,displacementmap_pars_vertex:sb,displacementmap_vertex:rb,emissivemap_fragment:ob,emissivemap_pars_fragment:lb,colorspace_fragment:cb,colorspace_pars_fragment:ub,envmap_fragment:fb,envmap_common_pars_fragment:hb,envmap_pars_fragment:db,envmap_pars_vertex:pb,envmap_physical_pars_fragment:bb,envmap_vertex:mb,fog_vertex:gb,fog_pars_vertex:_b,fog_fragment:vb,fog_pars_fragment:xb,gradientmap_pars_fragment:Sb,lightmap_pars_fragment:yb,lights_lambert_fragment:Mb,lights_lambert_pars_fragment:Eb,lights_pars_begin:Tb,lights_toon_fragment:Ab,lights_toon_pars_fragment:Rb,lights_phong_fragment:Cb,lights_phong_pars_fragment:wb,lights_physical_fragment:Db,lights_physical_pars_fragment:Lb,lights_fragment_begin:Ub,lights_fragment_maps:Nb,lights_fragment_end:Ob,logdepthbuf_fragment:Ib,logdepthbuf_pars_fragment:Pb,logdepthbuf_pars_vertex:Bb,logdepthbuf_vertex:Fb,map_fragment:zb,map_pars_fragment:Hb,map_particle_fragment:Vb,map_particle_pars_fragment:Gb,metalnessmap_fragment:kb,metalnessmap_pars_fragment:Xb,morphinstance_vertex:Wb,morphcolor_vertex:qb,morphnormal_vertex:Yb,morphtarget_pars_vertex:jb,morphtarget_vertex:Kb,normal_fragment_begin:Zb,normal_fragment_maps:Qb,normal_pars_fragment:Jb,normal_pars_vertex:$b,normal_vertex:eA,normalmap_pars_fragment:tA,clearcoat_normal_fragment_begin:nA,clearcoat_normal_fragment_maps:iA,clearcoat_pars_fragment:aA,iridescence_pars_fragment:sA,opaque_fragment:rA,packing:oA,premultiplied_alpha_fragment:lA,project_vertex:cA,dithering_fragment:uA,dithering_pars_fragment:fA,roughnessmap_fragment:hA,roughnessmap_pars_fragment:dA,shadowmap_pars_fragment:pA,shadowmap_pars_vertex:mA,shadowmap_vertex:gA,shadowmask_pars_fragment:_A,skinbase_vertex:vA,skinning_pars_vertex:xA,skinning_vertex:SA,skinnormal_vertex:yA,specularmap_fragment:MA,specularmap_pars_fragment:EA,tonemapping_fragment:TA,tonemapping_pars_fragment:bA,transmission_fragment:AA,transmission_pars_fragment:RA,uv_pars_fragment:CA,uv_pars_vertex:wA,uv_vertex:DA,worldpos_vertex:LA,background_vert:UA,background_frag:NA,backgroundCube_vert:OA,backgroundCube_frag:IA,cube_vert:PA,cube_frag:BA,depth_vert:FA,depth_frag:zA,distance_vert:HA,distance_frag:VA,equirect_vert:GA,equirect_frag:kA,linedashed_vert:XA,linedashed_frag:WA,meshbasic_vert:qA,meshbasic_frag:YA,meshlambert_vert:jA,meshlambert_frag:KA,meshmatcap_vert:ZA,meshmatcap_frag:QA,meshnormal_vert:JA,meshnormal_frag:$A,meshphong_vert:e1,meshphong_frag:t1,meshphysical_vert:n1,meshphysical_frag:i1,meshtoon_vert:a1,meshtoon_frag:s1,points_vert:r1,points_frag:o1,shadow_vert:l1,shadow_frag:c1,sprite_vert:u1,sprite_frag:f1},Le={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ji={basic:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Vn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Vn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Vn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new ot(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Vn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Vn([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Vn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Vn([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Vn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Vn([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Vn([Le.common,Le.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Vn([Le.lights,Le.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ji.physical={uniforms:Vn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const gu={r:0,b:0,g:0},Xs=new ta,h1=new mt;function d1(o,e,n,a,r,c){const u=new ot(0);let h=r===!0?0:1,p,d,g=null,_=0,v=null;function x(w){let L=w.isScene===!0?w.background:null;if(L&&L.isTexture){const D=w.backgroundBlurriness>0;L=e.get(L,D)}return L}function E(w){let L=!1;const D=x(w);D===null?y(u,h):D&&D.isColor&&(y(D,1),L=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(o.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function A(w,L){const D=x(L);D&&(D.isCubeTexture||D.mapping===Lu)?(d===void 0&&(d=new $n(new Dl(1,1,1),new na({name:"BackgroundCubeMaterial",uniforms:so(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(z,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Xs.copy(L.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),d.material.uniforms.envMap.value=D,d.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(h1.makeRotationFromEuler(Xs)),d.material.toneMapped=bt.getTransfer(D.colorSpace)!==zt,(g!==D||_!==D.version||v!==o.toneMapping)&&(d.material.needsUpdate=!0,g=D,_=D.version,v=o.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new $n(new Nu(2,2),new na({name:"BackgroundMaterial",uniforms:so(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=bt.getTransfer(D.colorSpace)!==zt,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||_!==D.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,g=D,_=D.version,v=o.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function y(w,L){w.getRGB(gu,Bx(o)),n.buffers.color.setClear(gu.r,gu.g,gu.b,L,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,L=1){u.set(w),h=L,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,y(u,h)},render:E,addToRenderList:A,dispose:S}}function p1(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let c=r,u=!1;function h(H,Z,te,ce,J){let O=!1;const B=_(H,ce,te,Z);c!==B&&(c=B,d(c.object)),O=x(H,ce,te,J),O&&E(H,ce,te,J),J!==null&&e.update(J,o.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,D(H,Z,te,ce),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function p(){return o.createVertexArray()}function d(H){return o.bindVertexArray(H)}function g(H){return o.deleteVertexArray(H)}function _(H,Z,te,ce){const J=ce.wireframe===!0;let O=a[Z.id];O===void 0&&(O={},a[Z.id]=O);const B=H.isInstancedMesh===!0?H.id:0;let se=O[B];se===void 0&&(se={},O[B]=se);let oe=se[te.id];oe===void 0&&(oe={},se[te.id]=oe);let Se=oe[J];return Se===void 0&&(Se=v(p()),oe[J]=Se),Se}function v(H){const Z=[],te=[],ce=[];for(let J=0;J<n;J++)Z[J]=0,te[J]=0,ce[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:te,attributeDivisors:ce,object:H,attributes:{},index:null}}function x(H,Z,te,ce){const J=c.attributes,O=Z.attributes;let B=0;const se=te.getAttributes();for(const oe in se)if(se[oe].location>=0){const I=J[oe];let q=O[oe];if(q===void 0&&(oe==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),oe==="instanceColor"&&H.instanceColor&&(q=H.instanceColor)),I===void 0||I.attribute!==q||q&&I.data!==q.data)return!0;B++}return c.attributesNum!==B||c.index!==ce}function E(H,Z,te,ce){const J={},O=Z.attributes;let B=0;const se=te.getAttributes();for(const oe in se)if(se[oe].location>=0){let I=O[oe];I===void 0&&(oe==="instanceMatrix"&&H.instanceMatrix&&(I=H.instanceMatrix),oe==="instanceColor"&&H.instanceColor&&(I=H.instanceColor));const q={};q.attribute=I,I&&I.data&&(q.data=I.data),J[oe]=q,B++}c.attributes=J,c.attributesNum=B,c.index=ce}function A(){const H=c.newAttributes;for(let Z=0,te=H.length;Z<te;Z++)H[Z]=0}function y(H){S(H,0)}function S(H,Z){const te=c.newAttributes,ce=c.enabledAttributes,J=c.attributeDivisors;te[H]=1,ce[H]===0&&(o.enableVertexAttribArray(H),ce[H]=1),J[H]!==Z&&(o.vertexAttribDivisor(H,Z),J[H]=Z)}function w(){const H=c.newAttributes,Z=c.enabledAttributes;for(let te=0,ce=Z.length;te<ce;te++)Z[te]!==H[te]&&(o.disableVertexAttribArray(te),Z[te]=0)}function L(H,Z,te,ce,J,O,B){B===!0?o.vertexAttribIPointer(H,Z,te,J,O):o.vertexAttribPointer(H,Z,te,ce,J,O)}function D(H,Z,te,ce){A();const J=ce.attributes,O=te.getAttributes(),B=Z.defaultAttributeValues;for(const se in O){const oe=O[se];if(oe.location>=0){let Se=J[se];if(Se===void 0&&(se==="instanceMatrix"&&H.instanceMatrix&&(Se=H.instanceMatrix),se==="instanceColor"&&H.instanceColor&&(Se=H.instanceColor)),Se!==void 0){const I=Se.normalized,q=Se.itemSize,me=e.get(Se);if(me===void 0)continue;const Ae=me.buffer,Pe=me.type,ie=me.bytesPerElement,ve=Pe===o.INT||Pe===o.UNSIGNED_INT||Se.gpuType===Dp;if(Se.isInterleavedBufferAttribute){const Te=Se.data,Ge=Te.stride,Ze=Se.offset;if(Te.isInstancedInterleavedBuffer){for(let $e=0;$e<oe.locationSize;$e++)S(oe.location+$e,Te.meshPerAttribute);H.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let $e=0;$e<oe.locationSize;$e++)y(oe.location+$e);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let $e=0;$e<oe.locationSize;$e++)L(oe.location+$e,q/oe.locationSize,Pe,I,Ge*ie,(Ze+q/oe.locationSize*$e)*ie,ve)}else{if(Se.isInstancedBufferAttribute){for(let Te=0;Te<oe.locationSize;Te++)S(oe.location+Te,Se.meshPerAttribute);H.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Te=0;Te<oe.locationSize;Te++)y(oe.location+Te);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let Te=0;Te<oe.locationSize;Te++)L(oe.location+Te,q/oe.locationSize,Pe,I,q*ie,q/oe.locationSize*Te*ie,ve)}}else if(B!==void 0){const I=B[se];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(oe.location,I);break;case 3:o.vertexAttrib3fv(oe.location,I);break;case 4:o.vertexAttrib4fv(oe.location,I);break;default:o.vertexAttrib1fv(oe.location,I)}}}}w()}function z(){U();for(const H in a){const Z=a[H];for(const te in Z){const ce=Z[te];for(const J in ce){const O=ce[J];for(const B in O)g(O[B].object),delete O[B];delete ce[J]}}delete a[H]}}function P(H){if(a[H.id]===void 0)return;const Z=a[H.id];for(const te in Z){const ce=Z[te];for(const J in ce){const O=ce[J];for(const B in O)g(O[B].object),delete O[B];delete ce[J]}}delete a[H.id]}function F(H){for(const Z in a){const te=a[Z];for(const ce in te){const J=te[ce];if(J[H.id]===void 0)continue;const O=J[H.id];for(const B in O)g(O[B].object),delete O[B];delete J[H.id]}}}function b(H){for(const Z in a){const te=a[Z],ce=H.isInstancedMesh===!0?H.id:0,J=te[ce];if(J!==void 0){for(const O in J){const B=J[O];for(const se in B)g(B[se].object),delete B[se];delete J[O]}delete te[ce],Object.keys(te).length===0&&delete a[Z]}}}function U(){fe(),u=!0,c!==r&&(c=r,d(c.object))}function fe(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:U,resetDefaultState:fe,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:y,disableUnusedAttributes:w}}function m1(o,e,n){let a;function r(d){a=d}function c(d,g){o.drawArrays(a,d,g),n.update(g,a,1)}function u(d,g,_){_!==0&&(o.drawArraysInstanced(a,d,g,_),n.update(g,a,_))}function h(d,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,_);let x=0;for(let E=0;E<_;E++)x+=g[E];n.update(x,a,1)}function p(d,g,_,v){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<d.length;E++)u(d[E],g[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(a,d,0,g,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*v[A];n.update(E,a,1)}}this.setMode=r,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function g1(o,e,n,a){let r;function c(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(F){return!(F!==Ti&&a.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const b=F===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==fi&&a.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ei&&!b)}function p(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(Ke("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:D,maxSamples:z,samples:P}}function _1(o){const e=this;let n=null,a=0,r=!1,c=!1;const u=new Ys,h=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||r;return r=v,a=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,S=o.get(_);if(!r||E===null||E.length===0||c&&!y)c?g(null):d();else{const w=c?0:a,L=w*4;let D=S.clippingState||null;p.value=D,D=g(E,v,L,x);for(let z=0;z!==L;++z)D[z]=n[z];S.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,x,E){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=p.value,E!==!0||y===null){const S=x+A*4,w=v.matrixWorldInverse;h.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,D=x;L!==A;++L,D+=4)u.copy(_[L]).applyMatrix4(w,h),u.normal.toArray(y,D),y[D+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const ys=4,Nv=[.125,.215,.35,.446,.526,.582],Ks=20,v1=256,pl=new Iu,Ov=new ot;let Td=null,bd=0,Ad=0,Rd=!1;const x1=new K;class Iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,r=100,c={}){const{size:u=256,position:h=x1}=c;Td=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,r,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Td,bd,Ad),this._renderer.xr.enabled=Rd,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Js||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Td=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Pa,format:Ti,colorSpace:Xn,depthBuffer:!1},r=Pv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=S1(c)),this._blurMaterial=M1(c,e,n),this._ggxMaterial=y1(c,e,n)}return r}_compileMaterial(e){const n=new $n(new hi,e);this._renderer.compile(n,pl)}_sceneToCubeUV(e,n,a,r,c){const p=new Gn(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Ov),_.toneMapping=Qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $n(new Dl,new Ss({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let S=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,S=!0):(y.color.copy(Ov),S=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(p.up.set(0,d[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[L],c.y,c.z)):D===1?(p.up.set(0,0,d[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[L],c.z)):(p.up.set(0,d[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[L]));const z=this._cubeSize;Zr(r,D*z,L>2?z:0,z,z),_.setRenderTarget(r),S&&_.render(A,p),_.render(e,p)}_.toneMapping=x,_.autoClear=v,e.background=w}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===Js||e.mapping===to;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bv());const c=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Zr(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,pl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let c=1;c<r;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const r=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:E}=this,A=this._sizeLods[a],y=3*A*(a>E-ys?a-E+ys:0),S=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=E-n,Zr(c,y,S,3*A,2*A),r.setRenderTarget(c),r.render(h,pl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-a,Zr(e,y,S,3*A,2*A),r.setRenderTarget(e),r.render(h,pl)}_blur(e,n,a,r,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,r,"latitudinal",c),this._halfBlur(u,e,a,a,r,"longitudinal",c)}_halfBlur(e,n,a,r,c,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[r];_.material=d;const v=d.uniforms,x=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Ks-1),A=c/E,y=isFinite(c)?1+Math.floor(g*A):Ks;y>Ks&&Ke(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ks}`);const S=[];let w=0;for(let F=0;F<Ks;++F){const b=F/A,U=Math.exp(-b*b/2);S.push(U),F===0?w+=U:F<y&&(w+=2*U)}for(let F=0;F<S.length;F++)S[F]=S[F]/w;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-a;const D=this._sizeLods[r],z=3*D*(r>L-ys?r-L+ys:0),P=4*(this._cubeSize-D);Zr(n,z,P,3*D,2*D),p.setRenderTarget(n),p.render(_,pl)}}function S1(o){const e=[],n=[],a=[];let r=o;const c=o-ys+1+Nv.length;for(let u=0;u<c;u++){const h=Math.pow(2,r);e.push(h);let p=1/h;u>o-ys?p=Nv[u-o+ys-1]:u===0&&(p=0),n.push(p);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,A=3,y=2,S=1,w=new Float32Array(A*E*x),L=new Float32Array(y*E*x),D=new Float32Array(S*E*x);for(let P=0;P<x;P++){const F=P%3*2/3-1,b=P>2?0:-1,U=[F,b,0,F+2/3,b,0,F+2/3,b+1,0,F,b,0,F+2/3,b+1,0,F,b+1,0];w.set(U,A*E*P),L.set(v,y*E*P);const fe=[P,P,P,P,P,P];D.set(fe,S*E*P)}const z=new hi;z.setAttribute("position",new kn(w,A)),z.setAttribute("uv",new kn(L,y)),z.setAttribute("faceIndex",new kn(D,S)),a.push(new $n(z,null)),r>ys&&r--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Pv(o,e,n){const a=new Ji(o,e,n);return a.texture.mapping=Lu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Zr(o,e,n,a,r){o.viewport.set(e,n,a,r),o.scissor.set(e,n,a,r)}function y1(o,e,n){return new na({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:v1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function M1(o,e,n){const a=new Float32Array(Ks),r=new K(0,1,0);return new na({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Bv(){return new na({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Fv(){return new na({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Pu(){return`

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
	`}class Xx extends Ji{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new Ix(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Dl(5,5,5),c=new na({name:"CubemapFromEquirect",uniforms:so(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Qn,blending:Na});c.uniforms.tEquirect.value=n;const u=new $n(r,c),h=n.minFilter;return n.minFilter===La&&(n.minFilter=Sn),new ST(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,r=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,r);e.setRenderTarget(c)}}function E1(o){let e=new WeakMap,n=new WeakMap,a=null;function r(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===jh||x===Kh)if(e.has(v)){const E=e.get(v).texture;return h(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const A=new Xx(E.height);return A.fromEquirectangularTexture(o,v),e.set(v,A),v.addEventListener("dispose",d),h(A.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,E=x===jh||x===Kh,A=x===Js||x===to;if(E||A){let y=n.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return a===null&&(a=new Iv(o)),y=E?a.fromEquirectangular(v,y):a.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,n.set(v,y),y.texture;if(y!==void 0)return y.texture;{const w=v.image;return E&&w&&w.height>0||A&&w&&p(w)?(a===null&&(a=new Iv(o)),y=E?a.fromEquirectangular(v):a.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,n.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function h(v,x){return x===jh?v.mapping=Js:x===Kh&&(v.mapping=to),v}function p(v){let x=0;const E=6;for(let A=0;A<E;A++)v[A]!==void 0&&x++;return x===E}function d(v){const x=v.target;x.removeEventListener("dispose",d);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const E=n.get(x);E!==void 0&&(n.delete(x),E.dispose())}function _(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:r,dispose:_}}function T1(o){const e={};function n(a){if(e[a]!==void 0)return e[a];const r=o.getExtension(a);return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Cu("WebGLRenderer: "+a+" extension not supported."),r}}}function b1(o,e,n,a){const r={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete r[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const x in v)e.update(v[x],o.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,E=_.attributes.position;let A=0;if(E===void 0)return;if(x!==null){const w=x.array;A=x.version;for(let L=0,D=w.length;L<D;L+=3){const z=w[L+0],P=w[L+1],F=w[L+2];v.push(z,P,P,F,F,z)}}else{const w=E.array;A=E.version;for(let L=0,D=w.length/3-1;L<D;L+=3){const z=L+0,P=L+1,F=L+2;v.push(z,P,P,F,F,z)}}const y=new(E.count>=65535?Lx:Dx)(v,1);y.version=A;const S=c.get(_);S&&e.remove(S),c.set(_,y)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function A1(o,e,n){let a;function r(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function p(v,x){o.drawElements(a,x,c,v*u),n.update(x,a,1)}function d(v,x,E){E!==0&&(o.drawElementsInstanced(a,x,c,v*u,E),n.update(x,a,E))}function g(v,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,v,0,E);let y=0;for(let S=0;S<E;S++)y+=x[S];n.update(y,a,1)}function _(v,x,E,A){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<v.length;S++)d(v[S]/u,x[S],A[S]);else{y.multiDrawElementsInstancedWEBGL(a,x,0,c,v,0,A,0,E);let S=0;for(let w=0;w<E;w++)S+=x[w]*A[w];n.update(S,a,1)}}this.setMode=r,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function R1(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=h*(c/3);break;case o.LINES:n.lines+=h*(c/2);break;case o.LINE_STRIP:n.lines+=h*(c-1);break;case o.LINE_LOOP:n.lines+=h*c;break;case o.POINTS:n.points+=h*c;break;default:tt("WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function C1(o,e,n){const a=new WeakMap,r=new jt;function c(u,h,p){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let fe=function(){b.dispose(),a.delete(h),h.removeEventListener("dispose",fe)};var x=fe;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),A===!0&&(D=2),y===!0&&(D=3);let z=h.attributes.position.count*D,P=1;z>e.maxTextureSize&&(P=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const F=new Float32Array(z*P*4*_),b=new Rx(F,z,P,_);b.type=Ei,b.needsUpdate=!0;const U=D*4;for(let H=0;H<_;H++){const Z=S[H],te=w[H],ce=L[H],J=z*P*4*H;for(let O=0;O<Z.count;O++){const B=O*U;E===!0&&(r.fromBufferAttribute(Z,O),F[J+B+0]=r.x,F[J+B+1]=r.y,F[J+B+2]=r.z,F[J+B+3]=0),A===!0&&(r.fromBufferAttribute(te,O),F[J+B+4]=r.x,F[J+B+5]=r.y,F[J+B+6]=r.z,F[J+B+7]=0),y===!0&&(r.fromBufferAttribute(ce,O),F[J+B+8]=r.x,F[J+B+9]=r.y,F[J+B+10]=r.z,F[J+B+11]=ce.itemSize===4?r.w:1)}}v={count:_,texture:b,size:new At(z,P)},a.set(h,v),h.addEventListener("dispose",fe)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let E=0;for(let y=0;y<d.length;y++)E+=d[y];const A=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function w1(o,e,n,a,r){let c=new WeakMap;function u(d){const g=r.render.frame,_=d.geometry,v=e.get(d,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),c.get(d)!==g&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function p(d){const g=d.target;g.removeEventListener("dispose",p),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const D1={[cx]:"LINEAR_TONE_MAPPING",[ux]:"REINHARD_TONE_MAPPING",[fx]:"CINEON_TONE_MAPPING",[hx]:"ACES_FILMIC_TONE_MAPPING",[px]:"AGX_TONE_MAPPING",[mx]:"NEUTRAL_TONE_MAPPING",[dx]:"CUSTOM_TONE_MAPPING"};function L1(o,e,n,a,r){const c=new Ji(e,n,{type:o,depthBuffer:a,stencilBuffer:r}),u=new Ji(e,n,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),h=new hi;h.setAttribute("position",new Jn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Jn([0,2,0,0,2,0],2));const p=new ZE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new $n(h,p),g=new Iu(-1,1,1,-1,0,1);let _=null,v=null,x=!1,E,A=null,y=[],S=!1;this.setSize=function(w,L){c.setSize(w,L),u.setSize(w,L);for(let D=0;D<y.length;D++){const z=y[D];z.setSize&&z.setSize(w,L)}},this.setEffects=function(w){y=w,S=y.length>0&&y[0].isRenderPass===!0;const L=c.width,D=c.height;for(let z=0;z<y.length;z++){const P=y[z];P.setSize&&P.setSize(L,D)}},this.begin=function(w,L){if(x||w.toneMapping===Qi&&y.length===0)return!1;if(A=L,L!==null){const D=L.width,z=L.height;(c.width!==D||c.height!==z)&&this.setSize(D,z)}return S===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=Qi,!0},this.hasRenderPass=function(){return S},this.end=function(w,L){w.toneMapping=E,x=!0;let D=c,z=u;for(let P=0;P<y.length;P++){const F=y[P];if(F.enabled!==!1&&(F.render(w,z,D,L),F.needsSwap!==!1)){const b=D;D=z,z=b}}if(_!==w.outputColorSpace||v!==w.toneMapping){_=w.outputColorSpace,v=w.toneMapping,p.defines={},bt.getTransfer(_)===zt&&(p.defines.SRGB_TRANSFER="");const P=D1[v];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,w.setRenderTarget(A),w.render(d,g),A=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.dispose(),u.dispose(),h.dispose(),p.dispose()}}const Wx=new bn,Tp=new wl(1,1),qx=new Rx,Yx=new xE,jx=new Ix,zv=[],Hv=[],Vv=new Float32Array(16),Gv=new Float32Array(9),kv=new Float32Array(4);function mo(o,e,n){const a=o[0];if(a<=0||a>0)return o;const r=e*n;let c=zv[r];if(c===void 0&&(c=new Float32Array(r),zv[r]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,o[u].toArray(c,h)}return c}function yn(o,e){if(o.length!==e.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==e[n])return!1;return!0}function Mn(o,e){for(let n=0,a=e.length;n<a;n++)o[n]=e[n]}function Bu(o,e){let n=Hv[e];n===void 0&&(n=new Int32Array(e),Hv[e]=n);for(let a=0;a!==e;++a)n[a]=o.allocateTextureUnit();return n}function U1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function N1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;o.uniform2fv(this.addr,e),Mn(n,e)}}function O1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yn(n,e))return;o.uniform3fv(this.addr,e),Mn(n,e)}}function I1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;o.uniform4fv(this.addr,e),Mn(n,e)}}function P1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(yn(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(n,e)}else{if(yn(n,a))return;kv.set(a),o.uniformMatrix2fv(this.addr,!1,kv),Mn(n,a)}}function B1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(yn(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(n,e)}else{if(yn(n,a))return;Gv.set(a),o.uniformMatrix3fv(this.addr,!1,Gv),Mn(n,a)}}function F1(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(yn(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(n,e)}else{if(yn(n,a))return;Vv.set(a),o.uniformMatrix4fv(this.addr,!1,Vv),Mn(n,a)}}function z1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function H1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;o.uniform2iv(this.addr,e),Mn(n,e)}}function V1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yn(n,e))return;o.uniform3iv(this.addr,e),Mn(n,e)}}function G1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;o.uniform4iv(this.addr,e),Mn(n,e)}}function k1(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function X1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;o.uniform2uiv(this.addr,e),Mn(n,e)}}function W1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yn(n,e))return;o.uniform3uiv(this.addr,e),Mn(n,e)}}function q1(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;o.uniform4uiv(this.addr,e),Mn(n,e)}}function Y1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let c;this.type===o.SAMPLER_2D_SHADOW?(Tp.compareFunction=n.isReversedDepthBuffer()?Fp:Bp,c=Tp):c=Wx,n.setTexture2D(e||c,r)}function j1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||Yx,r)}function K1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||jx,r)}function Z1(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||qx,r)}function Q1(o){switch(o){case 5126:return U1;case 35664:return N1;case 35665:return O1;case 35666:return I1;case 35674:return P1;case 35675:return B1;case 35676:return F1;case 5124:case 35670:return z1;case 35667:case 35671:return H1;case 35668:case 35672:return V1;case 35669:case 35673:return G1;case 5125:return k1;case 36294:return X1;case 36295:return W1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}function J1(o,e){o.uniform1fv(this.addr,e)}function $1(o,e){const n=mo(e,this.size,2);o.uniform2fv(this.addr,n)}function eR(o,e){const n=mo(e,this.size,3);o.uniform3fv(this.addr,n)}function tR(o,e){const n=mo(e,this.size,4);o.uniform4fv(this.addr,n)}function nR(o,e){const n=mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function iR(o,e){const n=mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function aR(o,e){const n=mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function sR(o,e){o.uniform1iv(this.addr,e)}function rR(o,e){o.uniform2iv(this.addr,e)}function oR(o,e){o.uniform3iv(this.addr,e)}function lR(o,e){o.uniform4iv(this.addr,e)}function cR(o,e){o.uniform1uiv(this.addr,e)}function uR(o,e){o.uniform2uiv(this.addr,e)}function fR(o,e){o.uniform3uiv(this.addr,e)}function hR(o,e){o.uniform4uiv(this.addr,e)}function dR(o,e,n){const a=this.cache,r=e.length,c=Bu(n,r);yn(a,c)||(o.uniform1iv(this.addr,c),Mn(a,c));let u;this.type===o.SAMPLER_2D_SHADOW?u=Tp:u=Wx;for(let h=0;h!==r;++h)n.setTexture2D(e[h]||u,c[h])}function pR(o,e,n){const a=this.cache,r=e.length,c=Bu(n,r);yn(a,c)||(o.uniform1iv(this.addr,c),Mn(a,c));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||Yx,c[u])}function mR(o,e,n){const a=this.cache,r=e.length,c=Bu(n,r);yn(a,c)||(o.uniform1iv(this.addr,c),Mn(a,c));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||jx,c[u])}function gR(o,e,n){const a=this.cache,r=e.length,c=Bu(n,r);yn(a,c)||(o.uniform1iv(this.addr,c),Mn(a,c));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||qx,c[u])}function _R(o){switch(o){case 5126:return J1;case 35664:return $1;case 35665:return eR;case 35666:return tR;case 35674:return nR;case 35675:return iR;case 35676:return aR;case 5124:case 35670:return sR;case 35667:case 35671:return rR;case 35668:case 35672:return oR;case 35669:case 35673:return lR;case 5125:return cR;case 36294:return uR;case 36295:return fR;case 36296:return hR;case 35678:case 36198:case 36298:case 36306:case 35682:return dR;case 35679:case 36299:case 36307:return pR;case 35680:case 36300:case 36308:case 36293:return mR;case 36289:case 36303:case 36311:case 36292:return gR}}class vR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=Q1(n.type)}}class xR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_R(n.type)}}class SR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let c=0,u=r.length;c!==u;++c){const h=r[c];h.setValue(e,n[h.id],a)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function Xv(o,e){o.seq.push(e),o.map[e.id]=e}function yR(o,e,n){const a=o.name,r=a.length;for(Cd.lastIndex=0;;){const c=Cd.exec(a),u=Cd.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===r){Xv(n,d===void 0?new vR(h,o,e):new xR(h,o,e));break}else{let _=n.map[h];_===void 0&&(_=new SR(h),Xv(n,_)),n=_}}}class Tu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=e.getActiveUniform(n,u),p=e.getUniformLocation(n,h.name);yR(h,p,this)}const r=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(u):c.push(u);r.length>0&&(this.seq=r.concat(c))}setValue(e,n,a,r){const c=this.map[n];c!==void 0&&c.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,c=e.length;r!==c;++r){const u=e[r];u.id in n&&a.push(u)}return a}}function Wv(o,e,n){const a=o.createShader(e);return o.shaderSource(a,n),o.compileShader(a),a}const MR=37297;let ER=0;function TR(o,e){const n=o.split(`
`),a=[],r=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=r;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const qv=new dt;function bR(o){bt._getMatrix(qv,bt.workingColorSpace,o);const e=`mat3( ${qv.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(o)){case Au:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Yv(o,e,n){const a=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+TR(o.getShaderSource(e),h)}else return c}function AR(o,e){const n=bR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const RR={[cx]:"Linear",[ux]:"Reinhard",[fx]:"Cineon",[hx]:"ACESFilmic",[px]:"AgX",[mx]:"Neutral",[dx]:"Custom"};function CR(o,e){const n=RR[e];return n===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _u=new K;function wR(){bt.getLuminanceCoefficients(_u);const o=_u.x.toFixed(4),e=_u.y.toFixed(4),n=_u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function LR(o){const e=[];for(const n in o){const a=o[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function UR(o,e){const n={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const c=o.getActiveAttrib(e,r),u=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:o.getAttribLocation(e,u),locationSize:h}}return n}function xl(o){return o!==""}function jv(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NR=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(o){return o.replace(NR,IR)}const OR=new Map;function IR(o,e){let n=pt[e];if(n===void 0){const a=OR.get(e);if(a!==void 0)n=pt[a],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return bp(n)}const PR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zv(o){return o.replace(PR,BR)}function BR(o,e,n,a){let r="";for(let c=parseInt(e);c<parseInt(n);c++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return r}function Qv(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const FR={[vu]:"SHADOWMAP_TYPE_PCF",[_l]:"SHADOWMAP_TYPE_VSM"};function zR(o){return FR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const HR={[Js]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[Lu]:"ENVMAP_TYPE_CUBE_UV"};function VR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":HR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const GR={[to]:"ENVMAP_MODE_REFRACTION"};function kR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":GR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const XR={[lx]:"ENVMAP_BLENDING_MULTIPLY",[NM]:"ENVMAP_BLENDING_MIX",[OM]:"ENVMAP_BLENDING_ADD"};function WR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":XR[o.combine]||"ENVMAP_BLENDING_NONE"}function qR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function YR(o,e,n,a){const r=o.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=zR(n),d=VR(n),g=kR(n),_=WR(n),v=qR(n),x=DR(n),E=LR(c),A=r.createProgram();let y,S,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(xl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(xl).join(`
`),S.length>0&&(S+=`
`)):(y=[Qv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),S=[Qv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?pt.tonemapping_pars_fragment:"",n.toneMapping!==Qi?CR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,AR("linearToOutputTexel",n.outputColorSpace),wR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xl).join(`
`)),u=bp(u),u=jv(u,n),u=Kv(u,n),h=bp(h),h=jv(h,n),h=Kv(h,n),u=Zv(u),h=Zv(h),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",n.glslVersion===K0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===K0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=w+y+u,D=w+S+h,z=Wv(r,r.VERTEX_SHADER,L),P=Wv(r,r.FRAGMENT_SHADER,D);r.attachShader(A,z),r.attachShader(A,P),n.index0AttributeName!==void 0?r.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function F(H){if(o.debug.checkShaderErrors){const Z=r.getProgramInfoLog(A)||"",te=r.getShaderInfoLog(z)||"",ce=r.getShaderInfoLog(P)||"",J=Z.trim(),O=te.trim(),B=ce.trim();let se=!0,oe=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(se=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,A,z,P);else{const Se=Yv(r,z,"vertex"),I=Yv(r,P,"fragment");tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+J+`
`+Se+`
`+I)}else J!==""?Ke("WebGLProgram: Program Info Log:",J):(O===""||B==="")&&(oe=!1);oe&&(H.diagnostics={runnable:se,programLog:J,vertexShader:{log:O,prefix:y},fragmentShader:{log:B,prefix:S}})}r.deleteShader(z),r.deleteShader(P),b=new Tu(r,A),U=UR(r,A)}let b;this.getUniforms=function(){return b===void 0&&F(this),b};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let fe=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return fe===!1&&(fe=r.getProgramParameter(A,MR)),fe},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ER++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=z,this.fragmentShader=P,this}let jR=0;class KR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new ZR(e),n.set(e,a)),a}}class ZR{constructor(e){this.id=jR++,this.code=e,this.usedTimes=0}}function QR(o,e,n,a,r,c){const u=new Cx,h=new KR,p=new Set,d=[],g=new Map,_=a.logarithmicDepthBuffer;let v=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return p.add(b),b===0?"uv":`uv${b}`}function A(b,U,fe,H,Z){const te=H.fog,ce=Z.geometry,J=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,B=e.get(b.envMap||J,O),se=B&&B.mapping===Lu?B.image.height:null,oe=x[b.type];b.precision!==null&&(v=a.getMaxPrecision(b.precision),v!==b.precision&&Ke("WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const Se=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,I=Se!==void 0?Se.length:0;let q=0;ce.morphAttributes.position!==void 0&&(q=1),ce.morphAttributes.normal!==void 0&&(q=2),ce.morphAttributes.color!==void 0&&(q=3);let me,Ae,Pe,ie;if(oe){const Ct=ji[oe];me=Ct.vertexShader,Ae=Ct.fragmentShader}else me=b.vertexShader,Ae=b.fragmentShader,h.update(b),Pe=h.getVertexShaderID(b),ie=h.getFragmentShaderID(b);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ge=Z.isInstancedMesh===!0,Ze=Z.isBatchedMesh===!0,$e=!!b.map,tn=!!b.matcap,yt=!!B,_t=!!b.aoMap,Ut=!!b.lightMap,lt=!!b.bumpMap,en=!!b.normalMap,G=!!b.displacementMap,Kt=!!b.emissiveMap,Rt=!!b.metalnessMap,Ot=!!b.roughnessMap,We=b.anisotropy>0,N=b.clearcoat>0,T=b.dispersion>0,Y=b.iridescence>0,pe=b.sheen>0,xe=b.transmission>0,he=We&&!!b.anisotropyMap,ke=N&&!!b.clearcoatMap,Ce=N&&!!b.clearcoatNormalMap,je=N&&!!b.clearcoatRoughnessMap,et=Y&&!!b.iridescenceMap,Ee=Y&&!!b.iridescenceThicknessMap,ye=pe&&!!b.sheenColorMap,Ne=pe&&!!b.sheenRoughnessMap,Ue=!!b.specularMap,Oe=!!b.specularColorMap,ut=!!b.specularIntensityMap,W=xe&&!!b.transmissionMap,Re=xe&&!!b.thicknessMap,be=!!b.gradientMap,Ie=!!b.alphaMap,Me=b.alphaTest>0,ue=!!b.alphaHash,Fe=!!b.extensions;let it=Qi;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(it=o.toneMapping);const Pt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:me,fragmentShader:Ae,defines:b.defines,customVertexShaderID:Pe,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:Ze,batchingColor:Ze&&Z._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&Z.instanceColor!==null,instancingMorph:Ge&&Z.morphTexture!==null,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Xn,alphaToCoverage:!!b.alphaToCoverage,map:$e,matcap:tn,envMap:yt,envMapMode:yt&&B.mapping,envMapCubeUVHeight:se,aoMap:_t,lightMap:Ut,bumpMap:lt,normalMap:en,displacementMap:G,emissiveMap:Kt,normalMapObjectSpace:en&&b.normalMapType===zM,normalMapTangentSpace:en&&b.normalMapType===bx,metalnessMap:Rt,roughnessMap:Ot,anisotropy:We,anisotropyMap:he,clearcoat:N,clearcoatMap:ke,clearcoatNormalMap:Ce,clearcoatRoughnessMap:je,dispersion:T,iridescence:Y,iridescenceMap:et,iridescenceThicknessMap:Ee,sheen:pe,sheenColorMap:ye,sheenRoughnessMap:Ne,specularMap:Ue,specularColorMap:Oe,specularIntensityMap:ut,transmission:xe,transmissionMap:W,thicknessMap:Re,gradientMap:be,opaque:b.transparent===!1&&b.blending===Qr&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:ue,combine:b.combine,mapUv:$e&&E(b.map.channel),aoMapUv:_t&&E(b.aoMap.channel),lightMapUv:Ut&&E(b.lightMap.channel),bumpMapUv:lt&&E(b.bumpMap.channel),normalMapUv:en&&E(b.normalMap.channel),displacementMapUv:G&&E(b.displacementMap.channel),emissiveMapUv:Kt&&E(b.emissiveMap.channel),metalnessMapUv:Rt&&E(b.metalnessMap.channel),roughnessMapUv:Ot&&E(b.roughnessMap.channel),anisotropyMapUv:he&&E(b.anisotropyMap.channel),clearcoatMapUv:ke&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&E(b.sheenRoughnessMap.channel),specularMapUv:Ue&&E(b.specularMap.channel),specularColorMapUv:Oe&&E(b.specularColorMap.channel),specularIntensityMapUv:ut&&E(b.specularIntensityMap.channel),transmissionMapUv:W&&E(b.transmissionMap.channel),thicknessMapUv:Re&&E(b.thicknessMap.channel),alphaMapUv:Ie&&E(b.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(en||We),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ce.attributes.uv&&($e||Ie),fog:!!te,useFog:b.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||ce.attributes.normal===void 0&&en===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Te,skinning:Z.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:q,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&fe.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:$e&&b.map.isVideoTexture===!0&&bt.getTransfer(b.map.colorSpace)===zt,decodeVideoTextureEmissive:Kt&&b.emissiveMap.isVideoTexture===!0&&bt.getTransfer(b.emissiveMap.colorSpace)===zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ii,flipSided:b.side===Qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Fe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&b.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function y(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const fe in b.defines)U.push(fe),U.push(b.defines[fe]);return b.isRawShaderMaterial===!1&&(S(U,b),w(U,b),U.push(o.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function S(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function w(b,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),b.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),b.push(u.mask)}function L(b){const U=x[b.type];let fe;if(U){const H=ji[U];fe=YE.clone(H.uniforms)}else fe=b.uniforms;return fe}function D(b,U){let fe=g.get(U);return fe!==void 0?++fe.usedTimes:(fe=new YR(o,U,b,r),d.push(fe),g.set(U,fe)),fe}function z(b){if(--b.usedTimes===0){const U=d.indexOf(b);d[U]=d[d.length-1],d.pop(),g.delete(b.cacheKey),b.destroy()}}function P(b){h.remove(b)}function F(){h.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:L,acquireProgram:D,releaseProgram:z,releaseShaderCache:P,programs:d,dispose:F}}function JR(){let o=new WeakMap;function e(u){return o.has(u)}function n(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function a(u){o.delete(u)}function r(u,h,p){o.get(u)[h]=p}function c(){o=new WeakMap}return{has:e,get:n,remove:a,update:r,dispose:c}}function $R(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function Jv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function $v(){const o=[];let e=0;const n=[],a=[],r=[];function c(){e=0,n.length=0,a.length=0,r.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,E,A,y,S){let w=o[e];return w===void 0?(w={id:v.id,object:v,geometry:x,material:E,materialVariant:u(v),groupOrder:A,renderOrder:v.renderOrder,z:y,group:S},o[e]=w):(w.id=v.id,w.object=v,w.geometry=x,w.material=E,w.materialVariant=u(v),w.groupOrder=A,w.renderOrder=v.renderOrder,w.z=y,w.group=S),e++,w}function p(v,x,E,A,y,S){const w=h(v,x,E,A,y,S);E.transmission>0?a.push(w):E.transparent===!0?r.push(w):n.push(w)}function d(v,x,E,A,y,S){const w=h(v,x,E,A,y,S);E.transmission>0?a.unshift(w):E.transparent===!0?r.unshift(w):n.unshift(w)}function g(v,x){n.length>1&&n.sort(v||$R),a.length>1&&a.sort(x||Jv),r.length>1&&r.sort(x||Jv)}function _(){for(let v=e,x=o.length;v<x;v++){const E=o[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:a,transparent:r,init:c,push:p,unshift:d,finish:_,sort:g}}function eC(){let o=new WeakMap;function e(a,r){const c=o.get(a);let u;return c===void 0?(u=new $v,o.set(a,[u])):r>=c.length?(u=new $v,c.push(u)):u=c[r],u}function n(){o=new WeakMap}return{get:e,dispose:n}}function tC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new ot};break;case"SpotLight":n={position:new K,direction:new K,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=n,n}}}function nC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let iC=0;function aC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function sC(o){const e=new tC,n=nC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new K);const r=new K,c=new mt,u=new mt;function h(d){let g=0,_=0,v=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let x=0,E=0,A=0,y=0,S=0,w=0,L=0,D=0,z=0,P=0,F=0;d.sort(aC);for(let U=0,fe=d.length;U<fe;U++){const H=d[U],Z=H.color,te=H.intensity,ce=H.distance;let J=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===io?J=H.shadow.map.texture:J=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=Z.r*te,_+=Z.g*te,v+=Z.b*te;else if(H.isLightProbe){for(let O=0;O<9;O++)a.probe[O].addScaledVector(H.sh.coefficients[O],te);F++}else if(H.isDirectionalLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const B=H.shadow,se=n.get(H);se.shadowIntensity=B.intensity,se.shadowBias=B.bias,se.shadowNormalBias=B.normalBias,se.shadowRadius=B.radius,se.shadowMapSize=B.mapSize,a.directionalShadow[x]=se,a.directionalShadowMap[x]=J,a.directionalShadowMatrix[x]=H.shadow.matrix,w++}a.directional[x]=O,x++}else if(H.isSpotLight){const O=e.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(Z).multiplyScalar(te),O.distance=ce,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,a.spot[A]=O;const B=H.shadow;if(H.map&&(a.spotLightMap[z]=H.map,z++,B.updateMatrices(H),H.castShadow&&P++),a.spotLightMatrix[A]=B.matrix,H.castShadow){const se=n.get(H);se.shadowIntensity=B.intensity,se.shadowBias=B.bias,se.shadowNormalBias=B.normalBias,se.shadowRadius=B.radius,se.shadowMapSize=B.mapSize,a.spotShadow[A]=se,a.spotShadowMap[A]=J,D++}A++}else if(H.isRectAreaLight){const O=e.get(H);O.color.copy(Z).multiplyScalar(te),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),a.rectArea[y]=O,y++}else if(H.isPointLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const B=H.shadow,se=n.get(H);se.shadowIntensity=B.intensity,se.shadowBias=B.bias,se.shadowNormalBias=B.normalBias,se.shadowRadius=B.radius,se.shadowMapSize=B.mapSize,se.shadowCameraNear=B.camera.near,se.shadowCameraFar=B.camera.far,a.pointShadow[E]=se,a.pointShadowMap[E]=J,a.pointShadowMatrix[E]=H.shadow.matrix,L++}a.point[E]=O,E++}else if(H.isHemisphereLight){const O=e.get(H);O.skyColor.copy(H.color).multiplyScalar(te),O.groundColor.copy(H.groundColor).multiplyScalar(te),a.hemi[S]=O,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Le.LTC_FLOAT_1,a.rectAreaLTC2=Le.LTC_FLOAT_2):(a.rectAreaLTC1=Le.LTC_HALF_1,a.rectAreaLTC2=Le.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const b=a.hash;(b.directionalLength!==x||b.pointLength!==E||b.spotLength!==A||b.rectAreaLength!==y||b.hemiLength!==S||b.numDirectionalShadows!==w||b.numPointShadows!==L||b.numSpotShadows!==D||b.numSpotMaps!==z||b.numLightProbes!==F)&&(a.directional.length=x,a.spot.length=A,a.rectArea.length=y,a.point.length=E,a.hemi.length=S,a.directionalShadow.length=w,a.directionalShadowMap.length=w,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=w,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=D+z-P,a.spotLightMap.length=z,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=F,b.directionalLength=x,b.pointLength=E,b.spotLength=A,b.rectAreaLength=y,b.hemiLength=S,b.numDirectionalShadows=w,b.numPointShadows=L,b.numSpotShadows=D,b.numSpotMaps=z,b.numLightProbes=F,a.version=iC++)}function p(d,g){let _=0,v=0,x=0,E=0,A=0;const y=g.matrixWorldInverse;for(let S=0,w=d.length;S<w;S++){const L=d[S];if(L.isDirectionalLight){const D=a.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(y),_++}else if(L.isSpotLight){const D=a.spot[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(y),x++}else if(L.isRectAreaLight){const D=a.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),u.identity(),c.copy(L.matrixWorld),c.premultiply(y),u.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const D=a.point[v];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const D=a.hemi[A];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(y),A++}}}return{setup:h,setupView:p,state:a}}function ex(o){const e=new sC(o),n=[],a=[];function r(g){d.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){e.setup(n)}function p(g){e.setupView(n,g)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u}}function rC(o){let e=new WeakMap;function n(r,c=0){const u=e.get(r);let h;return u===void 0?(h=new ex(o),e.set(r,[h])):c>=u.length?(h=new ex(o),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const oC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lC=`uniform sampler2D shadow_pass;
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
}`,cC=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],uC=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],tx=new mt,ml=new K,wd=new K;function fC(o,e,n){let a=new Xp;const r=new At,c=new At,u=new jt,h=new QE,p=new JE,d={},g=n.maxTextureSize,_={[Ia]:Qn,[Qn]:Ia,[Ii]:Ii},v=new na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:oC,fragmentShader:lC}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new hi;E.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new $n(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let S=this.type;this.render=function(P,F,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===pM&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vu);const U=o.getRenderTarget(),fe=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(Na),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const te=S!==this.type;te&&F.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(J=>J.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,J=P.length;ce<J;ce++){const O=P[ce],B=O.shadow;if(B===void 0){Ke("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const se=B.getFrameExtents();r.multiply(se),c.copy(B.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(c.x=Math.floor(g/se.x),r.x=c.x*se.x,B.mapSize.x=c.x),r.y>g&&(c.y=Math.floor(g/se.y),r.y=c.y*se.y,B.mapSize.y=c.y));const oe=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=oe,B.map===null||te===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===_l){if(O.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ji(r.x,r.y,{format:io,type:Pa,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new wl(r.x,r.y,Ei),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=Ba,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=xn,B.map.depthTexture.magFilter=xn}else O.isPointLight?(B.map=new Xx(r.x),B.map.depthTexture=new WE(r.x,ea)):(B.map=new Ji(r.x,r.y),B.map.depthTexture=new wl(r.x,r.y,ea)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=Ba,this.type===vu?(B.map.depthTexture.compareFunction=oe?Fp:Bp,B.map.depthTexture.minFilter=Sn,B.map.depthTexture.magFilter=Sn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=xn,B.map.depthTexture.magFilter=xn);B.camera.updateProjectionMatrix()}const Se=B.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Se;I++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,I),o.clear();else{I===0&&(o.setRenderTarget(B.map),o.clear());const q=B.getViewport(I);u.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),Z.viewport(u)}if(O.isPointLight){const q=B.camera,me=B.matrix,Ae=O.distance||q.far;Ae!==q.far&&(q.far=Ae,q.updateProjectionMatrix()),ml.setFromMatrixPosition(O.matrixWorld),q.position.copy(ml),wd.copy(q.position),wd.add(cC[I]),q.up.copy(uC[I]),q.lookAt(wd),q.updateMatrixWorld(),me.makeTranslation(-ml.x,-ml.y,-ml.z),tx.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(tx,q.coordinateSystem,q.reversedDepth)}else B.updateMatrices(O);a=B.getFrustum(),D(F,b,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===_l&&w(B,b),B.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(U,fe,H)};function w(P,F){const b=e.update(A);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ji(r.x,r.y,{format:io,type:Pa})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(F,null,b,v,A,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(F,null,b,x,A,null)}function L(P,F,b,U){let fe=null;const H=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)fe=H;else if(fe=b.isPointLight===!0?p:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=fe.uuid,te=F.uuid;let ce=d[Z];ce===void 0&&(ce={},d[Z]=ce);let J=ce[te];J===void 0&&(J=fe.clone(),ce[te]=J,F.addEventListener("dispose",z)),fe=J}if(fe.visible=F.visible,fe.wireframe=F.wireframe,U===_l?fe.side=F.shadowSide!==null?F.shadowSide:F.side:fe.side=F.shadowSide!==null?F.shadowSide:_[F.side],fe.alphaMap=F.alphaMap,fe.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,fe.map=F.map,fe.clipShadows=F.clipShadows,fe.clippingPlanes=F.clippingPlanes,fe.clipIntersection=F.clipIntersection,fe.displacementMap=F.displacementMap,fe.displacementScale=F.displacementScale,fe.displacementBias=F.displacementBias,fe.wireframeLinewidth=F.wireframeLinewidth,fe.linewidth=F.linewidth,b.isPointLight===!0&&fe.isMeshDistanceMaterial===!0){const Z=o.properties.get(fe);Z.light=b}return fe}function D(P,F,b,U,fe){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&fe===_l)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);const te=e.update(P),ce=P.material;if(Array.isArray(ce)){const J=te.groups;for(let O=0,B=J.length;O<B;O++){const se=J[O],oe=ce[se.materialIndex];if(oe&&oe.visible){const Se=L(P,oe,U,fe);P.onBeforeShadow(o,P,F,b,te,Se,se),o.renderBufferDirect(b,null,te,Se,P,se),P.onAfterShadow(o,P,F,b,te,Se,se)}}}else if(ce.visible){const J=L(P,ce,U,fe);P.onBeforeShadow(o,P,F,b,te,J,null),o.renderBufferDirect(b,null,te,J,P,null),P.onAfterShadow(o,P,F,b,te,J,null)}}const Z=P.children;for(let te=0,ce=Z.length;te<ce;te++)D(Z[te],F,b,U,fe)}function z(P){P.target.removeEventListener("dispose",z);for(const b in d){const U=d[b],fe=P.target.uuid;fe in U&&(U[fe].dispose(),delete U[fe])}}}function hC(o,e){function n(){let W=!1;const Re=new jt;let be=null;const Ie=new jt(0,0,0,0);return{setMask:function(Me){be!==Me&&!W&&(o.colorMask(Me,Me,Me,Me),be=Me)},setLocked:function(Me){W=Me},setClear:function(Me,ue,Fe,it,Pt){Pt===!0&&(Me*=it,ue*=it,Fe*=it),Re.set(Me,ue,Fe,it),Ie.equals(Re)===!1&&(o.clearColor(Me,ue,Fe,it),Ie.copy(Re))},reset:function(){W=!1,be=null,Ie.set(-1,0,0,0)}}}function a(){let W=!1,Re=!1,be=null,Ie=null,Me=null;return{setReversed:function(ue){if(Re!==ue){const Fe=e.get("EXT_clip_control");ue?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Re=ue;const it=Me;Me=null,this.setClear(it)}},getReversed:function(){return Re},setTest:function(ue){ue?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(ue){be!==ue&&!W&&(o.depthMask(ue),be=ue)},setFunc:function(ue){if(Re&&(ue=ZM[ue]),Ie!==ue){switch(ue){case Id:o.depthFunc(o.NEVER);break;case Pd:o.depthFunc(o.ALWAYS);break;case Bd:o.depthFunc(o.LESS);break;case eo:o.depthFunc(o.LEQUAL);break;case Fd:o.depthFunc(o.EQUAL);break;case zd:o.depthFunc(o.GEQUAL);break;case Hd:o.depthFunc(o.GREATER);break;case Vd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ie=ue}},setLocked:function(ue){W=ue},setClear:function(ue){Me!==ue&&(Me=ue,Re&&(ue=1-ue),o.clearDepth(ue))},reset:function(){W=!1,be=null,Ie=null,Me=null,Re=!1}}}function r(){let W=!1,Re=null,be=null,Ie=null,Me=null,ue=null,Fe=null,it=null,Pt=null;return{setTest:function(Ct){W||(Ct?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Ct){Re!==Ct&&!W&&(o.stencilMask(Ct),Re=Ct)},setFunc:function(Ct,On,bi){(be!==Ct||Ie!==On||Me!==bi)&&(o.stencilFunc(Ct,On,bi),be=Ct,Ie=On,Me=bi)},setOp:function(Ct,On,bi){(ue!==Ct||Fe!==On||it!==bi)&&(o.stencilOp(Ct,On,bi),ue=Ct,Fe=On,it=bi)},setLocked:function(Ct){W=Ct},setClear:function(Ct){Pt!==Ct&&(o.clearStencil(Ct),Pt=Ct)},reset:function(){W=!1,Re=null,be=null,Ie=null,Me=null,ue=null,Fe=null,it=null,Pt=null}}}const c=new n,u=new a,h=new r,p=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,x=[],E=null,A=!1,y=null,S=null,w=null,L=null,D=null,z=null,P=null,F=new ot(0,0,0),b=0,U=!1,fe=null,H=null,Z=null,te=null,ce=null;const J=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const se=o.getParameter(o.VERSION);se.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(se)[1]),O=B>=1):se.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),O=B>=2);let oe=null,Se={};const I=o.getParameter(o.SCISSOR_BOX),q=o.getParameter(o.VIEWPORT),me=new jt().fromArray(I),Ae=new jt().fromArray(q);function Pe(W,Re,be,Ie){const Me=new Uint8Array(4),ue=o.createTexture();o.bindTexture(W,ue),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Fe=0;Fe<be;Fe++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,Ie,0,o.RGBA,o.UNSIGNED_BYTE,Me):o.texImage2D(Re+Fe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Me);return ue}const ie={};ie[o.TEXTURE_2D]=Pe(o.TEXTURE_2D,o.TEXTURE_2D,1),ie[o.TEXTURE_CUBE_MAP]=Pe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[o.TEXTURE_2D_ARRAY]=Pe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ie[o.TEXTURE_3D]=Pe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ve(o.DEPTH_TEST),u.setFunc(eo),lt(!1),en(z0),ve(o.CULL_FACE),_t(Na);function ve(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function Te(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Ge(W,Re){return _[W]!==Re?(o.bindFramebuffer(W,Re),_[W]=Re,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Re),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ze(W,Re){let be=x,Ie=!1;if(W){be=v.get(Re),be===void 0&&(be=[],v.set(Re,be));const Me=W.textures;if(be.length!==Me.length||be[0]!==o.COLOR_ATTACHMENT0){for(let ue=0,Fe=Me.length;ue<Fe;ue++)be[ue]=o.COLOR_ATTACHMENT0+ue;be.length=Me.length,Ie=!0}}else be[0]!==o.BACK&&(be[0]=o.BACK,Ie=!0);Ie&&o.drawBuffers(be)}function $e(W){return E!==W?(o.useProgram(W),E=W,!0):!1}const tn={[js]:o.FUNC_ADD,[gM]:o.FUNC_SUBTRACT,[_M]:o.FUNC_REVERSE_SUBTRACT};tn[vM]=o.MIN,tn[xM]=o.MAX;const yt={[SM]:o.ZERO,[yM]:o.ONE,[MM]:o.SRC_COLOR,[Nd]:o.SRC_ALPHA,[CM]:o.SRC_ALPHA_SATURATE,[AM]:o.DST_COLOR,[TM]:o.DST_ALPHA,[EM]:o.ONE_MINUS_SRC_COLOR,[Od]:o.ONE_MINUS_SRC_ALPHA,[RM]:o.ONE_MINUS_DST_COLOR,[bM]:o.ONE_MINUS_DST_ALPHA,[wM]:o.CONSTANT_COLOR,[DM]:o.ONE_MINUS_CONSTANT_COLOR,[LM]:o.CONSTANT_ALPHA,[UM]:o.ONE_MINUS_CONSTANT_ALPHA};function _t(W,Re,be,Ie,Me,ue,Fe,it,Pt,Ct){if(W===Na){A===!0&&(Te(o.BLEND),A=!1);return}if(A===!1&&(ve(o.BLEND),A=!0),W!==mM){if(W!==y||Ct!==U){if((S!==js||D!==js)&&(o.blendEquation(o.FUNC_ADD),S=js,D=js),Ct)switch(W){case Qr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case H0:o.blendFunc(o.ONE,o.ONE);break;case V0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case G0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:tt("WebGLState: Invalid blending: ",W);break}else switch(W){case Qr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case H0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case V0:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case G0:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",W);break}w=null,L=null,z=null,P=null,F.set(0,0,0),b=0,y=W,U=Ct}return}Me=Me||Re,ue=ue||be,Fe=Fe||Ie,(Re!==S||Me!==D)&&(o.blendEquationSeparate(tn[Re],tn[Me]),S=Re,D=Me),(be!==w||Ie!==L||ue!==z||Fe!==P)&&(o.blendFuncSeparate(yt[be],yt[Ie],yt[ue],yt[Fe]),w=be,L=Ie,z=ue,P=Fe),(it.equals(F)===!1||Pt!==b)&&(o.blendColor(it.r,it.g,it.b,Pt),F.copy(it),b=Pt),y=W,U=!1}function Ut(W,Re){W.side===Ii?Te(o.CULL_FACE):ve(o.CULL_FACE);let be=W.side===Qn;Re&&(be=!be),lt(be),W.blending===Qr&&W.transparent===!1?_t(Na):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ie=W.stencilWrite;h.setTest(Ie),Ie&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function lt(W){fe!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),fe=W)}function en(W){W!==hM?(ve(o.CULL_FACE),W!==H&&(W===z0?o.cullFace(o.BACK):W===dM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),H=W}function G(W){W!==Z&&(O&&o.lineWidth(W),Z=W)}function Kt(W,Re,be){W?(ve(o.POLYGON_OFFSET_FILL),(te!==Re||ce!==be)&&(te=Re,ce=be,u.getReversed()&&(Re=-Re),o.polygonOffset(Re,be))):Te(o.POLYGON_OFFSET_FILL)}function Rt(W){W?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function Ot(W){W===void 0&&(W=o.TEXTURE0+J-1),oe!==W&&(o.activeTexture(W),oe=W)}function We(W,Re,be){be===void 0&&(oe===null?be=o.TEXTURE0+J-1:be=oe);let Ie=Se[be];Ie===void 0&&(Ie={type:void 0,texture:void 0},Se[be]=Ie),(Ie.type!==W||Ie.texture!==Re)&&(oe!==be&&(o.activeTexture(be),oe=be),o.bindTexture(W,Re||ie[W]),Ie.type=W,Ie.texture=Re)}function N(){const W=Se[oe];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(W){tt("WebGLState:",W)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(W){tt("WebGLState:",W)}}function pe(){try{o.texSubImage2D(...arguments)}catch(W){tt("WebGLState:",W)}}function xe(){try{o.texSubImage3D(...arguments)}catch(W){tt("WebGLState:",W)}}function he(){try{o.compressedTexSubImage2D(...arguments)}catch(W){tt("WebGLState:",W)}}function ke(){try{o.compressedTexSubImage3D(...arguments)}catch(W){tt("WebGLState:",W)}}function Ce(){try{o.texStorage2D(...arguments)}catch(W){tt("WebGLState:",W)}}function je(){try{o.texStorage3D(...arguments)}catch(W){tt("WebGLState:",W)}}function et(){try{o.texImage2D(...arguments)}catch(W){tt("WebGLState:",W)}}function Ee(){try{o.texImage3D(...arguments)}catch(W){tt("WebGLState:",W)}}function ye(W){me.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),me.copy(W))}function Ne(W){Ae.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Ae.copy(W))}function Ue(W,Re){let be=d.get(Re);be===void 0&&(be=new WeakMap,d.set(Re,be));let Ie=be.get(W);Ie===void 0&&(Ie=o.getUniformBlockIndex(Re,W.name),be.set(W,Ie))}function Oe(W,Re){const Ie=d.get(Re).get(W);p.get(Re)!==Ie&&(o.uniformBlockBinding(Re,Ie,W.__bindingPointIndex),p.set(Re,Ie))}function ut(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},oe=null,Se={},_={},v=new WeakMap,x=[],E=null,A=!1,y=null,S=null,w=null,L=null,D=null,z=null,P=null,F=new ot(0,0,0),b=0,U=!1,fe=null,H=null,Z=null,te=null,ce=null,me.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:ve,disable:Te,bindFramebuffer:Ge,drawBuffers:Ze,useProgram:$e,setBlending:_t,setMaterial:Ut,setFlipSided:lt,setCullFace:en,setLineWidth:G,setPolygonOffset:Kt,setScissorTest:Rt,activeTexture:Ot,bindTexture:We,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:Y,texImage2D:et,texImage3D:Ee,updateUBOMapping:Ue,uniformBlockBinding:Oe,texStorage2D:Ce,texStorage3D:je,texSubImage2D:pe,texSubImage3D:xe,compressedTexSubImage2D:he,compressedTexSubImage3D:ke,scissor:ye,viewport:Ne,reset:ut}}function dC(o,e,n,a,r,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new At,g=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,T){return x?new OffscreenCanvas(N,T):Cl("canvas")}function A(N,T,Y){let pe=1;const xe=We(N);if((xe.width>Y||xe.height>Y)&&(pe=Y/Math.max(xe.width,xe.height)),pe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const he=Math.floor(pe*xe.width),ke=Math.floor(pe*xe.height);_===void 0&&(_=E(he,ke));const Ce=T?E(he,ke):_;return Ce.width=he,Ce.height=ke,Ce.getContext("2d").drawImage(N,0,0,he,ke),Ke("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+he+"x"+ke+")."),Ce}else return"data"in N&&Ke("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),N;return N}function y(N){return N.generateMipmaps}function S(N){o.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(N,T,Y,pe,xe=!1){if(N!==null){if(o[N]!==void 0)return o[N];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let he=T;if(T===o.RED&&(Y===o.FLOAT&&(he=o.R32F),Y===o.HALF_FLOAT&&(he=o.R16F),Y===o.UNSIGNED_BYTE&&(he=o.R8)),T===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(he=o.R8UI),Y===o.UNSIGNED_SHORT&&(he=o.R16UI),Y===o.UNSIGNED_INT&&(he=o.R32UI),Y===o.BYTE&&(he=o.R8I),Y===o.SHORT&&(he=o.R16I),Y===o.INT&&(he=o.R32I)),T===o.RG&&(Y===o.FLOAT&&(he=o.RG32F),Y===o.HALF_FLOAT&&(he=o.RG16F),Y===o.UNSIGNED_BYTE&&(he=o.RG8)),T===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(he=o.RG8UI),Y===o.UNSIGNED_SHORT&&(he=o.RG16UI),Y===o.UNSIGNED_INT&&(he=o.RG32UI),Y===o.BYTE&&(he=o.RG8I),Y===o.SHORT&&(he=o.RG16I),Y===o.INT&&(he=o.RG32I)),T===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(he=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(he=o.RGB16UI),Y===o.UNSIGNED_INT&&(he=o.RGB32UI),Y===o.BYTE&&(he=o.RGB8I),Y===o.SHORT&&(he=o.RGB16I),Y===o.INT&&(he=o.RGB32I)),T===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(he=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(he=o.RGBA16UI),Y===o.UNSIGNED_INT&&(he=o.RGBA32UI),Y===o.BYTE&&(he=o.RGBA8I),Y===o.SHORT&&(he=o.RGBA16I),Y===o.INT&&(he=o.RGBA32I)),T===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(he=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(he=o.R11F_G11F_B10F)),T===o.RGBA){const ke=xe?Au:bt.getTransfer(pe);Y===o.FLOAT&&(he=o.RGBA32F),Y===o.HALF_FLOAT&&(he=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(he=ke===zt?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(he=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(he=o.RGB5_A1)}return(he===o.R16F||he===o.R32F||he===o.RG16F||he===o.RG32F||he===o.RGBA16F||he===o.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function D(N,T){let Y;return N?T===null||T===ea||T===Tl?Y=o.DEPTH24_STENCIL8:T===Ei?Y=o.DEPTH32F_STENCIL8:T===El&&(Y=o.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ea||T===Tl?Y=o.DEPTH_COMPONENT24:T===Ei?Y=o.DEPTH_COMPONENT32F:T===El&&(Y=o.DEPTH_COMPONENT16),Y}function z(N,T){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==xn&&N.minFilter!==Sn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function P(N){const T=N.target;T.removeEventListener("dispose",P),b(T),T.isVideoTexture&&g.delete(T)}function F(N){const T=N.target;T.removeEventListener("dispose",F),fe(T)}function b(N){const T=a.get(N);if(T.__webglInit===void 0)return;const Y=N.source,pe=v.get(Y);if(pe){const xe=pe[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&U(N),Object.keys(pe).length===0&&v.delete(Y)}a.remove(N)}function U(N){const T=a.get(N);o.deleteTexture(T.__webglTexture);const Y=N.source,pe=v.get(Y);delete pe[T.__cacheKey],u.memory.textures--}function fe(N){const T=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let xe=0;xe<T.__webglFramebuffer[pe].length;xe++)o.deleteFramebuffer(T.__webglFramebuffer[pe][xe]);else o.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)o.deleteFramebuffer(T.__webglFramebuffer[pe]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=N.textures;for(let pe=0,xe=Y.length;pe<xe;pe++){const he=a.get(Y[pe]);he.__webglTexture&&(o.deleteTexture(he.__webglTexture),u.memory.textures--),a.remove(Y[pe])}a.remove(N)}let H=0;function Z(){H=0}function te(){const N=H;return N>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),H+=1,N}function ce(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function J(N,T){const Y=a.get(N);if(N.isVideoTexture&&Rt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){const pe=N.image;if(pe===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Y,N,T);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+T)}function O(N,T){const Y=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){ie(Y,N,T);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+T)}function B(N,T){const Y=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){ie(Y,N,T);return}n.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+T)}function se(N,T){const Y=a.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){ve(Y,N,T);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+T)}const oe={[no]:o.REPEAT,[Ki]:o.CLAMP_TO_EDGE,[bu]:o.MIRRORED_REPEAT},Se={[xn]:o.NEAREST,[_x]:o.NEAREST_MIPMAP_NEAREST,[vl]:o.NEAREST_MIPMAP_LINEAR,[Sn]:o.LINEAR,[xu]:o.LINEAR_MIPMAP_NEAREST,[La]:o.LINEAR_MIPMAP_LINEAR},I={[HM]:o.NEVER,[WM]:o.ALWAYS,[VM]:o.LESS,[Bp]:o.LEQUAL,[GM]:o.EQUAL,[Fp]:o.GEQUAL,[kM]:o.GREATER,[XM]:o.NOTEQUAL};function q(N,T){if(T.type===Ei&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Sn||T.magFilter===xu||T.magFilter===vl||T.magFilter===La||T.minFilter===Sn||T.minFilter===xu||T.minFilter===vl||T.minFilter===La)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,oe[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,oe[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,oe[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,Se[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,Se[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xn||T.minFilter!==vl&&T.minFilter!==La||T.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function me(N,T){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",P));const pe=T.source;let xe=v.get(pe);xe===void 0&&(xe={},v.set(pe,xe));const he=ce(T);if(he!==N.__cacheKey){xe[he]===void 0&&(xe[he]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Y=!0),xe[he].usedTimes++;const ke=xe[N.__cacheKey];ke!==void 0&&(xe[N.__cacheKey].usedTimes--,ke.usedTimes===0&&U(T)),N.__cacheKey=he,N.__webglTexture=xe[he].texture}return Y}function Ae(N,T,Y){return Math.floor(Math.floor(N/Y)/T)}function Pe(N,T,Y,pe){const he=N.updateRanges;if(he.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,Y,pe,T.data);else{he.sort((Ee,ye)=>Ee.start-ye.start);let ke=0;for(let Ee=1;Ee<he.length;Ee++){const ye=he[ke],Ne=he[Ee],Ue=ye.start+ye.count,Oe=Ae(Ne.start,T.width,4),ut=Ae(ye.start,T.width,4);Ne.start<=Ue+1&&Oe===ut&&Ae(Ne.start+Ne.count-1,T.width,4)===Oe?ye.count=Math.max(ye.count,Ne.start+Ne.count-ye.start):(++ke,he[ke]=Ne)}he.length=ke+1;const Ce=o.getParameter(o.UNPACK_ROW_LENGTH),je=o.getParameter(o.UNPACK_SKIP_PIXELS),et=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Ee=0,ye=he.length;Ee<ye;Ee++){const Ne=he[Ee],Ue=Math.floor(Ne.start/4),Oe=Math.ceil(Ne.count/4),ut=Ue%T.width,W=Math.floor(Ue/T.width),Re=Oe,be=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ut),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),n.texSubImage2D(o.TEXTURE_2D,0,ut,W,Re,be,Y,pe,T.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ce),o.pixelStorei(o.UNPACK_SKIP_PIXELS,je),o.pixelStorei(o.UNPACK_SKIP_ROWS,et)}}function ie(N,T,Y){let pe=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=o.TEXTURE_3D);const xe=me(N,T),he=T.source;n.bindTexture(pe,N.__webglTexture,o.TEXTURE0+Y);const ke=a.get(he);if(he.version!==ke.__version||xe===!0){n.activeTexture(o.TEXTURE0+Y);const Ce=bt.getPrimaries(bt.workingColorSpace),je=T.colorSpace===xs?null:bt.getPrimaries(T.colorSpace),et=T.colorSpace===xs||Ce===je?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Ee=A(T.image,!1,r.maxTextureSize);Ee=Ot(T,Ee);const ye=c.convert(T.format,T.colorSpace),Ne=c.convert(T.type);let Ue=L(T.internalFormat,ye,Ne,T.colorSpace,T.isVideoTexture);q(pe,T);let Oe;const ut=T.mipmaps,W=T.isVideoTexture!==!0,Re=ke.__version===void 0||xe===!0,be=he.dataReady,Ie=z(T,Ee);if(T.isDepthTexture)Ue=D(T.format===Zs,T.type),Re&&(W?n.texStorage2D(o.TEXTURE_2D,1,Ue,Ee.width,Ee.height):n.texImage2D(o.TEXTURE_2D,0,Ue,Ee.width,Ee.height,0,ye,Ne,null));else if(T.isDataTexture)if(ut.length>0){W&&Re&&n.texStorage2D(o.TEXTURE_2D,Ie,Ue,ut[0].width,ut[0].height);for(let Me=0,ue=ut.length;Me<ue;Me++)Oe=ut[Me],W?be&&n.texSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,ye,Ne,Oe.data):n.texImage2D(o.TEXTURE_2D,Me,Ue,Oe.width,Oe.height,0,ye,Ne,Oe.data);T.generateMipmaps=!1}else W?(Re&&n.texStorage2D(o.TEXTURE_2D,Ie,Ue,Ee.width,Ee.height),be&&Pe(T,Ee,ye,Ne)):n.texImage2D(o.TEXTURE_2D,0,Ue,Ee.width,Ee.height,0,ye,Ne,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Re&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,Ue,ut[0].width,ut[0].height,Ee.depth);for(let Me=0,ue=ut.length;Me<ue;Me++)if(Oe=ut[Me],T.format!==Ti)if(ye!==null)if(W){if(be)if(T.layerUpdates.size>0){const Fe=Uv(Oe.width,Oe.height,T.format,T.type);for(const it of T.layerUpdates){const Pt=Oe.data.subarray(it*Fe/Oe.data.BYTES_PER_ELEMENT,(it+1)*Fe/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,it,Oe.width,Oe.height,1,ye,Pt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,Ee.depth,ye,Oe.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,Ue,Oe.width,Oe.height,Ee.depth,0,Oe.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?be&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,Ee.depth,ye,Ne,Oe.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Me,Ue,Oe.width,Oe.height,Ee.depth,0,ye,Ne,Oe.data)}else{W&&Re&&n.texStorage2D(o.TEXTURE_2D,Ie,Ue,ut[0].width,ut[0].height);for(let Me=0,ue=ut.length;Me<ue;Me++)Oe=ut[Me],T.format!==Ti?ye!==null?W?be&&n.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,ye,Oe.data):n.compressedTexImage2D(o.TEXTURE_2D,Me,Ue,Oe.width,Oe.height,0,Oe.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?be&&n.texSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,ye,Ne,Oe.data):n.texImage2D(o.TEXTURE_2D,Me,Ue,Oe.width,Oe.height,0,ye,Ne,Oe.data)}else if(T.isDataArrayTexture)if(W){if(Re&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,Ue,Ee.width,Ee.height,Ee.depth),be)if(T.layerUpdates.size>0){const Me=Uv(Ee.width,Ee.height,T.format,T.type);for(const ue of T.layerUpdates){const Fe=Ee.data.subarray(ue*Me/Ee.data.BYTES_PER_ELEMENT,(ue+1)*Me/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ue,Ee.width,Ee.height,1,ye,Ne,Fe)}T.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ye,Ne,Ee.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Ue,Ee.width,Ee.height,Ee.depth,0,ye,Ne,Ee.data);else if(T.isData3DTexture)W?(Re&&n.texStorage3D(o.TEXTURE_3D,Ie,Ue,Ee.width,Ee.height,Ee.depth),be&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ye,Ne,Ee.data)):n.texImage3D(o.TEXTURE_3D,0,Ue,Ee.width,Ee.height,Ee.depth,0,ye,Ne,Ee.data);else if(T.isFramebufferTexture){if(Re)if(W)n.texStorage2D(o.TEXTURE_2D,Ie,Ue,Ee.width,Ee.height);else{let Me=Ee.width,ue=Ee.height;for(let Fe=0;Fe<Ie;Fe++)n.texImage2D(o.TEXTURE_2D,Fe,Ue,Me,ue,0,ye,Ne,null),Me>>=1,ue>>=1}}else if(ut.length>0){if(W&&Re){const Me=We(ut[0]);n.texStorage2D(o.TEXTURE_2D,Ie,Ue,Me.width,Me.height)}for(let Me=0,ue=ut.length;Me<ue;Me++)Oe=ut[Me],W?be&&n.texSubImage2D(o.TEXTURE_2D,Me,0,0,ye,Ne,Oe):n.texImage2D(o.TEXTURE_2D,Me,Ue,ye,Ne,Oe);T.generateMipmaps=!1}else if(W){if(Re){const Me=We(Ee);n.texStorage2D(o.TEXTURE_2D,Ie,Ue,Me.width,Me.height)}be&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,ye,Ne,Ee)}else n.texImage2D(o.TEXTURE_2D,0,Ue,ye,Ne,Ee);y(T)&&S(pe),ke.__version=he.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ve(N,T,Y){if(T.image.length!==6)return;const pe=me(N,T),xe=T.source;n.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+Y);const he=a.get(xe);if(xe.version!==he.__version||pe===!0){n.activeTexture(o.TEXTURE0+Y);const ke=bt.getPrimaries(bt.workingColorSpace),Ce=T.colorSpace===xs?null:bt.getPrimaries(T.colorSpace),je=T.colorSpace===xs||ke===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const et=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,ye=[];for(let ue=0;ue<6;ue++)!et&&!Ee?ye[ue]=A(T.image[ue],!0,r.maxCubemapSize):ye[ue]=Ee?T.image[ue].image:T.image[ue],ye[ue]=Ot(T,ye[ue]);const Ne=ye[0],Ue=c.convert(T.format,T.colorSpace),Oe=c.convert(T.type),ut=L(T.internalFormat,Ue,Oe,T.colorSpace),W=T.isVideoTexture!==!0,Re=he.__version===void 0||pe===!0,be=xe.dataReady;let Ie=z(T,Ne);q(o.TEXTURE_CUBE_MAP,T);let Me;if(et){W&&Re&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ut,Ne.width,Ne.height);for(let ue=0;ue<6;ue++){Me=ye[ue].mipmaps;for(let Fe=0;Fe<Me.length;Fe++){const it=Me[Fe];T.format!==Ti?Ue!==null?W?be&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe,0,0,it.width,it.height,Ue,it.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe,ut,it.width,it.height,0,it.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?be&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe,0,0,it.width,it.height,Ue,Oe,it.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe,ut,it.width,it.height,0,Ue,Oe,it.data)}}}else{if(Me=T.mipmaps,W&&Re){Me.length>0&&Ie++;const ue=We(ye[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,ut,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Ee){W?be&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ye[ue].width,ye[ue].height,Ue,Oe,ye[ue].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ut,ye[ue].width,ye[ue].height,0,Ue,Oe,ye[ue].data);for(let Fe=0;Fe<Me.length;Fe++){const Pt=Me[Fe].image[ue].image;W?be&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe+1,0,0,Pt.width,Pt.height,Ue,Oe,Pt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe+1,ut,Pt.width,Pt.height,0,Ue,Oe,Pt.data)}}else{W?be&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ue,Oe,ye[ue]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ut,Ue,Oe,ye[ue]);for(let Fe=0;Fe<Me.length;Fe++){const it=Me[Fe];W?be&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe+1,0,0,Ue,Oe,it.image[ue]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe+1,ut,Ue,Oe,it.image[ue])}}}y(T)&&S(o.TEXTURE_CUBE_MAP),he.__version=xe.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Te(N,T,Y,pe,xe,he){const ke=c.convert(Y.format,Y.colorSpace),Ce=c.convert(Y.type),je=L(Y.internalFormat,ke,Ce,Y.colorSpace),et=a.get(T),Ee=a.get(Y);if(Ee.__renderTarget=T,!et.__hasExternalTextures){const ye=Math.max(1,T.width>>he),Ne=Math.max(1,T.height>>he);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?n.texImage3D(xe,he,je,ye,Ne,T.depth,0,ke,Ce,null):n.texImage2D(xe,he,je,ye,Ne,0,ke,Ce,null)}n.bindFramebuffer(o.FRAMEBUFFER,N),Kt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,xe,Ee.__webglTexture,0,G(T)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,xe,Ee.__webglTexture,he),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ge(N,T,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const pe=T.depthTexture,xe=pe&&pe.isDepthTexture?pe.type:null,he=D(T.stencilBuffer,xe),ke=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Kt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(T),he,T.width,T.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(T),he,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,he,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ke,o.RENDERBUFFER,N)}else{const pe=T.textures;for(let xe=0;xe<pe.length;xe++){const he=pe[xe],ke=c.convert(he.format,he.colorSpace),Ce=c.convert(he.type),je=L(he.internalFormat,ke,Ce,he.colorSpace);Kt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(T),je,T.width,T.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(T),je,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,je,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ze(N,T,Y){const pe=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=a.get(T.depthTexture);if(xe.__renderTarget=T,(!xe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,T.depthTexture.addEventListener("dispose",P)),xe.__webglTexture===void 0){xe.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),q(o.TEXTURE_CUBE_MAP,T.depthTexture);const et=c.convert(T.depthTexture.format),Ee=c.convert(T.depthTexture.type);let ye;T.depthTexture.format===Ba?ye=o.DEPTH_COMPONENT24:T.depthTexture.format===Zs&&(ye=o.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ye,T.width,T.height,0,et,Ee,null)}}else J(T.depthTexture,0);const he=xe.__webglTexture,ke=G(T),Ce=pe?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,je=T.depthTexture.format===Zs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ba)Kt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,je,Ce,he,0,ke):o.framebufferTexture2D(o.FRAMEBUFFER,je,Ce,he,0);else if(T.depthTexture.format===Zs)Kt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,je,Ce,he,0,ke):o.framebufferTexture2D(o.FRAMEBUFFER,je,Ce,he,0);else throw new Error("Unknown depthTexture format")}function $e(N){const T=a.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const pe=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",xe)};pe.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=pe}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let pe=0;pe<6;pe++)Ze(T.__webglFramebuffer[pe],N,pe);else{const pe=N.texture.mipmaps;pe&&pe.length>0?Ze(T.__webglFramebuffer[0],N,0):Ze(T.__webglFramebuffer,N,0)}else if(Y){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=o.createRenderbuffer(),Ge(T.__webglDepthbuffer[pe],N,!1);else{const xe=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,he)}}else{const pe=N.texture.mipmaps;if(pe&&pe.length>0?n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Ge(T.__webglDepthbuffer,N,!1);else{const xe=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,he)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(N,T,Y){const pe=a.get(N);T!==void 0&&Te(pe.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&$e(N)}function yt(N){const T=N.texture,Y=a.get(N),pe=a.get(T);N.addEventListener("dispose",F);const xe=N.textures,he=N.isWebGLCubeRenderTarget===!0,ke=xe.length>1;if(ke||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=T.version,u.memory.textures++),he){Y.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Ce]=[];for(let je=0;je<T.mipmaps.length;je++)Y.__webglFramebuffer[Ce][je]=o.createFramebuffer()}else Y.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)Y.__webglFramebuffer[Ce]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(ke)for(let Ce=0,je=xe.length;Ce<je;Ce++){const et=a.get(xe[Ce]);et.__webglTexture===void 0&&(et.__webglTexture=o.createTexture(),u.memory.textures++)}if(N.samples>0&&Kt(N)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const je=xe[Ce];Y.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ce]);const et=c.convert(je.format,je.colorSpace),Ee=c.convert(je.type),ye=L(je.internalFormat,et,Ee,je.colorSpace,N.isXRRenderTarget===!0),Ne=G(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ne,ye,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Ge(Y.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(he){n.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),q(o.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)Te(Y.__webglFramebuffer[Ce][je],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,je);else Te(Y.__webglFramebuffer[Ce],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&S(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ke){for(let Ce=0,je=xe.length;Ce<je;Ce++){const et=xe[Ce],Ee=a.get(et);let ye=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ye=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(ye,Ee.__webglTexture),q(ye,et),Te(Y.__webglFramebuffer,N,et,o.COLOR_ATTACHMENT0+Ce,ye,0),y(et)&&S(ye)}n.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ce,pe.__webglTexture),q(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)Te(Y.__webglFramebuffer[je],N,T,o.COLOR_ATTACHMENT0,Ce,je);else Te(Y.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,Ce,0);y(T)&&S(Ce),n.unbindTexture()}N.depthBuffer&&$e(N)}function _t(N){const T=N.textures;for(let Y=0,pe=T.length;Y<pe;Y++){const xe=T[Y];if(y(xe)){const he=w(N),ke=a.get(xe).__webglTexture;n.bindTexture(he,ke),S(he),n.unbindTexture()}}}const Ut=[],lt=[];function en(N){if(N.samples>0){if(Kt(N)===!1){const T=N.textures,Y=N.width,pe=N.height;let xe=o.COLOR_BUFFER_BIT;const he=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ke=a.get(N),Ce=T.length>1;if(Ce)for(let et=0;et<T.length;et++)n.bindFramebuffer(o.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+et,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+et,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const je=N.texture.mipmaps;je&&je.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let et=0;et<T.length;et++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ke.__webglColorRenderbuffer[et]);const Ee=a.get(T[et]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ee,0)}o.blitFramebuffer(0,0,Y,pe,0,0,Y,pe,xe,o.NEAREST),p===!0&&(Ut.length=0,lt.length=0,Ut.push(o.COLOR_ATTACHMENT0+et),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ut.push(he),lt.push(he),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,lt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let et=0;et<T.length;et++){n.bindFramebuffer(o.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+et,o.RENDERBUFFER,ke.__webglColorRenderbuffer[et]);const Ee=a.get(T[et]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+et,o.TEXTURE_2D,Ee,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function G(N){return Math.min(r.maxSamples,N.samples)}function Kt(N){const T=a.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Rt(N){const T=u.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Ot(N,T){const Y=N.colorSpace,pe=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==Xn&&Y!==xs&&(bt.getTransfer(Y)===zt?(pe!==Ti||xe!==fi)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",Y)),T}function We(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=te,this.resetTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=se,this.rebindTextures=tn,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function pC(o,e){function n(a,r=xs){let c;const u=bt.getTransfer(r);if(a===fi)return o.UNSIGNED_BYTE;if(a===Lp)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Up)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Sx)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===yx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===vx)return o.BYTE;if(a===xx)return o.SHORT;if(a===El)return o.UNSIGNED_SHORT;if(a===Dp)return o.INT;if(a===ea)return o.UNSIGNED_INT;if(a===Ei)return o.FLOAT;if(a===Pa)return o.HALF_FLOAT;if(a===Mx)return o.ALPHA;if(a===Ex)return o.RGB;if(a===Ti)return o.RGBA;if(a===Ba)return o.DEPTH_COMPONENT;if(a===Zs)return o.DEPTH_STENCIL;if(a===Np)return o.RED;if(a===Op)return o.RED_INTEGER;if(a===io)return o.RG;if(a===Ip)return o.RG_INTEGER;if(a===Pp)return o.RGBA_INTEGER;if(a===Su||a===yu||a===Mu||a===Eu)if(u===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Su)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Su)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===yu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Mu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Gd||a===kd||a===Xd||a===Wd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Gd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===kd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Xd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Wd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===qd||a===Yd||a===jd||a===Kd||a===Zd||a===Qd||a===Jd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===qd||a===Yd)return u===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===jd)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Kd)return c.COMPRESSED_R11_EAC;if(a===Zd)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Qd)return c.COMPRESSED_RG11_EAC;if(a===Jd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===$d||a===ep||a===tp||a===np||a===ip||a===ap||a===sp||a===rp||a===op||a===lp||a===cp||a===up||a===fp||a===hp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===$d)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ep)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===tp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===np)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ip)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ap)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===sp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===rp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===op)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===lp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===cp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===up)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===fp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===hp)return u===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===dp||a===pp||a===mp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===dp)return u===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===pp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===mp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===gp||a===_p||a===vp||a===xp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===gp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===_p)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===vp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===xp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Tl?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const mC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gC=`
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

}`;class _C{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new Px(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new na({vertexShader:mC,fragmentShader:gC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $n(new Nu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vC extends co{constructor(e,n){super();const a=this;let r=null,c=1,u=null,h="local-floor",p=1,d=null,g=null,_=null,v=null,x=null,E=null;const A=typeof XRWebGLBinding<"u",y=new _C,S={},w=n.getContextAttributes();let L=null,D=null;const z=[],P=[],F=new At;let b=null;const U=new Gn;U.viewport=new jt;const fe=new Gn;fe.viewport=new jt;const H=[U,fe],Z=new yT;let te=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ve=z[ie];return ve===void 0&&(ve=new nd,z[ie]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ie){let ve=z[ie];return ve===void 0&&(ve=new nd,z[ie]=ve),ve.getGripSpace()},this.getHand=function(ie){let ve=z[ie];return ve===void 0&&(ve=new nd,z[ie]=ve),ve.getHandSpace()};function J(ie){const ve=P.indexOf(ie.inputSource);if(ve===-1)return;const Te=z[ve];Te!==void 0&&(Te.update(ie.inputSource,ie.frame,d||u),Te.dispatchEvent({type:ie.type,data:ie.inputSource}))}function O(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",B);for(let ie=0;ie<z.length;ie++){const ve=P[ie];ve!==null&&(P[ie]=null,z[ie].disconnect(ve))}te=null,ce=null,y.reset();for(const ie in S)delete S[ie];e.setRenderTarget(L),x=null,v=null,_=null,r=null,D=null,Pe.stop(),a.isPresenting=!1,e.setPixelRatio(b),e.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,a.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,a.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ie){d=ie},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(r,n)),_},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(L=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",O),r.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ge=null,Ze=null;w.depth&&(Ze=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=w.stencil?Zs:Ba,Ge=w.stencil?Tl:ea);const $e={colorFormat:n.RGBA8,depthFormat:Ze,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer($e),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new Ji(v.textureWidth,v.textureHeight,{format:Ti,type:fi,depthTexture:new wl(v.textureWidth,v.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(r,n,Te),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new Ji(x.framebufferWidth,x.framebufferHeight,{format:Ti,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await r.requestReferenceSpace(h),Pe.setContext(r),Pe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(ie){for(let ve=0;ve<ie.removed.length;ve++){const Te=ie.removed[ve],Ge=P.indexOf(Te);Ge>=0&&(P[Ge]=null,z[Ge].disconnect(Te))}for(let ve=0;ve<ie.added.length;ve++){const Te=ie.added[ve];let Ge=P.indexOf(Te);if(Ge===-1){for(let $e=0;$e<z.length;$e++)if($e>=P.length){P.push(Te),Ge=$e;break}else if(P[$e]===null){P[$e]=Te,Ge=$e;break}if(Ge===-1)break}const Ze=z[Ge];Ze&&Ze.connect(Te)}}const se=new K,oe=new K;function Se(ie,ve,Te){se.setFromMatrixPosition(ve.matrixWorld),oe.setFromMatrixPosition(Te.matrixWorld);const Ge=se.distanceTo(oe),Ze=ve.projectionMatrix.elements,$e=Te.projectionMatrix.elements,tn=Ze[14]/(Ze[10]-1),yt=Ze[14]/(Ze[10]+1),_t=(Ze[9]+1)/Ze[5],Ut=(Ze[9]-1)/Ze[5],lt=(Ze[8]-1)/Ze[0],en=($e[8]+1)/$e[0],G=tn*lt,Kt=tn*en,Rt=Ge/(-lt+en),Ot=Rt*-lt;if(ve.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ot),ie.translateZ(Rt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ze[10]===-1)ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const We=tn+Rt,N=yt+Rt,T=G-Ot,Y=Kt+(Ge-Ot),pe=_t*yt/N*We,xe=Ut*yt/N*We;ie.projectionMatrix.makePerspective(T,Y,pe,xe,We,N),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function I(ie,ve){ve===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ve.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let ve=ie.near,Te=ie.far;y.texture!==null&&(y.depthNear>0&&(ve=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),Z.near=fe.near=U.near=ve,Z.far=fe.far=U.far=Te,(te!==Z.near||ce!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),te=Z.near,ce=Z.far),Z.layers.mask=ie.layers.mask|6,U.layers.mask=Z.layers.mask&-5,fe.layers.mask=Z.layers.mask&-3;const Ge=ie.parent,Ze=Z.cameras;I(Z,Ge);for(let $e=0;$e<Ze.length;$e++)I(Ze[$e],Ge);Ze.length===2?Se(Z,U,fe):Z.projectionMatrix.copy(U.projectionMatrix),q(ie,Z,Ge)};function q(ie,ve,Te){Te===null?ie.matrix.copy(ve.matrixWorld):(ie.matrix.copy(Te.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ve.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ao*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(ie){p=ie,v!==null&&(v.fixedFoveation=ie),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(ie){return S[ie]};let me=null;function Ae(ie,ve){if(g=ve.getViewerPose(d||u),E=ve,g!==null){const Te=g.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let Ge=!1;Te.length!==Z.cameras.length&&(Z.cameras.length=0,Ge=!0);for(let yt=0;yt<Te.length;yt++){const _t=Te[yt];let Ut=null;if(x!==null)Ut=x.getViewport(_t);else{const en=_.getViewSubImage(v,_t);Ut=en.viewport,yt===0&&(e.setRenderTargetTextures(D,en.colorTexture,en.depthStencilTexture),e.setRenderTarget(D))}let lt=H[yt];lt===void 0&&(lt=new Gn,lt.layers.enable(yt),lt.viewport=new jt,H[yt]=lt),lt.matrix.fromArray(_t.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(_t.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),yt===0&&(Z.matrix.copy(lt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ge===!0&&Z.cameras.push(lt)}const Ze=r.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){_=a.getBinding();const yt=_.getDepthInformation(Te[0]);yt&&yt.isValid&&yt.texture&&y.init(yt,r.renderState)}if(Ze&&Ze.includes("camera-access")&&A){e.state.unbindTexture(),_=a.getBinding();for(let yt=0;yt<Te.length;yt++){const _t=Te[yt].camera;if(_t){let Ut=S[_t];Ut||(Ut=new Px,S[_t]=Ut);const lt=_.getCameraImage(_t);Ut.sourceTexture=lt}}}}for(let Te=0;Te<z.length;Te++){const Ge=P[Te],Ze=z[Te];Ge!==null&&Ze!==void 0&&Ze.update(Ge,ve,d||u)}me&&me(ie,ve),ve.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ve}),E=null}const Pe=new kx;Pe.setAnimationLoop(Ae),this.setAnimationLoop=function(ie){me=ie},this.dispose=function(){}}}const Ws=new ta,xC=new mt;function SC(o,e){function n(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,Bx(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function r(y,S,w,L,D){S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),_(y,S)):S.isMeshPhongMaterial?(c(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,D)):S.isMeshMatcapMaterial?(c(y,S),E(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),A(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?p(y,S,w,L):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,n(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Qn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,n(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Qn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,n(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,n(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=e.get(S),L=w.envMap,D=w.envMapRotation;L&&(y.envMap.value=L,Ws.copy(D),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),y.envMapRotation.value.setFromMatrix4(xC.makeRotationFromEuler(Ws)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,w,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=L*.5,S.map&&(y.map.value=S.map,n(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,w){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function A(y,S){const w=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function yC(o,e,n,a){let r={},c={},u=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,L){const D=L.program;a.uniformBlockBinding(w,D)}function d(w,L){let D=r[w.id];D===void 0&&(E(w),D=g(w),r[w.id]=D,w.addEventListener("dispose",y));const z=L.program;a.updateUBOMapping(w,z);const P=e.render.frame;c[w.id]!==P&&(v(w),c[w.id]=P)}function g(w){const L=_();w.__bindingPointIndex=L;const D=o.createBuffer(),z=w.__size,P=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,z,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function _(){for(let w=0;w<h;w++)if(u.indexOf(w)===-1)return u.push(w),w;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const L=r[w.id],D=w.uniforms,z=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let P=0,F=D.length;P<F;P++){const b=Array.isArray(D[P])?D[P]:[D[P]];for(let U=0,fe=b.length;U<fe;U++){const H=b[U];if(x(H,P,U,z)===!0){const Z=H.__offset,te=Array.isArray(H.value)?H.value:[H.value];let ce=0;for(let J=0;J<te.length;J++){const O=te[J],B=A(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,Z+ce,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,ce),ce+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Z,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(w,L,D,z){const P=w.value,F=L+"_"+D;if(z[F]===void 0)return typeof P=="number"||typeof P=="boolean"?z[F]=P:z[F]=P.clone(),!0;{const b=z[F];if(typeof P=="number"||typeof P=="boolean"){if(b!==P)return z[F]=P,!0}else if(b.equals(P)===!1)return b.copy(P),!0}return!1}function E(w){const L=w.uniforms;let D=0;const z=16;for(let F=0,b=L.length;F<b;F++){const U=Array.isArray(L[F])?L[F]:[L[F]];for(let fe=0,H=U.length;fe<H;fe++){const Z=U[fe],te=Array.isArray(Z.value)?Z.value:[Z.value];for(let ce=0,J=te.length;ce<J;ce++){const O=te[ce],B=A(O),se=D%z,oe=se%B.boundary,Se=se+oe;D+=oe,Se!==0&&z-Se<B.storage&&(D+=z-Se),Z.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=D,D+=B.storage}}}const P=D%z;return P>0&&(D+=z-P),w.__size=D,w.__cache={},this}function A(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ke("WebGLRenderer: Unsupported uniform value type.",w),L}function y(w){const L=w.target;L.removeEventListener("dispose",y);const D=u.indexOf(L.__bindingPointIndex);u.splice(D,1),o.deleteBuffer(r[L.id]),delete r[L.id],delete c[L.id]}function S(){for(const w in r)o.deleteBuffer(r[w]);u=[],r={},c={}}return{bind:p,update:d,dispose:S}}const MC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function EC(){return qi===null&&(qi=new Gp(MC,16,16,io,Pa),qi.name="DFG_LUT",qi.minFilter=Sn,qi.magFilter=Sn,qi.wrapS=Ki,qi.wrapT=Ki,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class TC{constructor(e={}){const{canvas:n=jM(),context:a=null,depth:r=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=fi}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=u;const A=x,y=new Set([Pp,Ip,Op]),S=new Set([fi,ea,El,Tl,Lp,Up]),w=new Uint32Array(4),L=new Int32Array(4);let D=null,z=null;const P=[],F=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let fe=!1;this._outputColorSpace=Dn;let H=0,Z=0,te=null,ce=-1,J=null;const O=new jt,B=new jt;let se=null;const oe=new ot(0);let Se=0,I=n.width,q=n.height,me=1,Ae=null,Pe=null;const ie=new jt(0,0,I,q),ve=new jt(0,0,I,q);let Te=!1;const Ge=new Xp;let Ze=!1,$e=!1;const tn=new mt,yt=new K,_t=new jt,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function en(){return te===null?me:1}let G=a;function Kt(C,X){return n.getContext(C,X)}try{const C={alpha:!0,depth:r,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wp}`),n.addEventListener("webglcontextlost",Fe,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",Pt,!1),G===null){const X="webgl2";if(G=Kt(X,C),G===null)throw Kt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw tt("WebGLRenderer: "+C.message),C}let Rt,Ot,We,N,T,Y,pe,xe,he,ke,Ce,je,et,Ee,ye,Ne,Ue,Oe,ut,W,Re,be,Ie;function Me(){Rt=new T1(G),Rt.init(),Re=new pC(G,Rt),Ot=new g1(G,Rt,e,Re),We=new hC(G,Rt),Ot.reversedDepthBuffer&&v&&We.buffers.depth.setReversed(!0),N=new R1(G),T=new JR,Y=new dC(G,Rt,We,T,Ot,Re,N),pe=new E1(U),xe=new UT(G),be=new p1(G,xe),he=new b1(G,xe,N,be),ke=new w1(G,he,xe,be,N),Oe=new C1(G,Ot,Y),ye=new _1(T),Ce=new QR(U,pe,Rt,Ot,be,ye),je=new SC(U,T),et=new eC,Ee=new rC(Rt),Ue=new d1(U,pe,We,ke,E,p),Ne=new fC(U,ke,Ot),Ie=new yC(G,N,Ot,We),ut=new m1(G,Rt,N),W=new A1(G,Rt,N),N.programs=Ce.programs,U.capabilities=Ot,U.extensions=Rt,U.properties=T,U.renderLists=et,U.shadowMap=Ne,U.state=We,U.info=N}Me(),A!==fi&&(b=new L1(A,n.width,n.height,r,c));const ue=new vC(U,G);this.xr=ue,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=Rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(I,q,!1))},this.getSize=function(C){return C.set(I,q)},this.setSize=function(C,X,re=!0){if(ue.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,q=X,n.width=Math.floor(C*me),n.height=Math.floor(X*me),re===!0&&(n.style.width=C+"px",n.style.height=X+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(I*me,q*me).floor()},this.setDrawingBufferSize=function(C,X,re){I=C,q=X,me=re,n.width=Math.floor(C*re),n.height=Math.floor(X*re),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(A===fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,X,re,ne){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,X,re,ne),We.viewport(O.copy(ie).multiplyScalar(me).round())},this.getScissor=function(C){return C.copy(ve)},this.setScissor=function(C,X,re,ne){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,X,re,ne),We.scissor(B.copy(ve).multiplyScalar(me).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(C){We.setScissorTest(Te=C)},this.setOpaqueSort=function(C){Ae=C},this.setTransparentSort=function(C){Pe=C},this.getClearColor=function(C){return C.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,re=!0){let ne=0;if(C){let Q=!1;if(te!==null){const we=te.texture.format;Q=y.has(we)}if(Q){const we=te.texture.type,Be=S.has(we),De=Ue.getClearColor(),Xe=Ue.getClearAlpha(),Ye=De.r,nt=De.g,st=De.b;Be?(w[0]=Ye,w[1]=nt,w[2]=st,w[3]=Xe,G.clearBufferuiv(G.COLOR,0,w)):(L[0]=Ye,L[1]=nt,L[2]=st,L[3]=Xe,G.clearBufferiv(G.COLOR,0,L))}else ne|=G.COLOR_BUFFER_BIT}X&&(ne|=G.DEPTH_BUFFER_BIT),re&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Fe,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",Pt,!1),Ue.dispose(),et.dispose(),Ee.dispose(),T.dispose(),pe.dispose(),ke.dispose(),be.dispose(),Ie.dispose(),Ce.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",er),ue.removeEventListener("sessionend",tr),Hi.stop()};function Fe(C){C.preventDefault(),Ru("WebGLRenderer: Context Lost."),fe=!0}function it(){Ru("WebGLRenderer: Context Restored."),fe=!1;const C=N.autoReset,X=Ne.enabled,re=Ne.autoUpdate,ne=Ne.needsUpdate,Q=Ne.type;Me(),N.autoReset=C,Ne.enabled=X,Ne.autoUpdate=re,Ne.needsUpdate=ne,Ne.type=Q}function Pt(C){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ct(C){const X=C.target;X.removeEventListener("dispose",Ct),On(X)}function On(C){bi(C),T.remove(C)}function bi(C){const X=T.get(C).programs;X!==void 0&&(X.forEach(function(re){Ce.releaseProgram(re)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,re,ne,Q,we){X===null&&(X=Ut);const Be=Q.isMesh&&Q.matrixWorld.determinant()<0,De=Ol(C,X,re,ne,Q);We.setMaterial(ne,Be);let Xe=re.index,Ye=1;if(ne.wireframe===!0){if(Xe=he.getWireframeAttribute(re),Xe===void 0)return;Ye=2}const nt=re.drawRange,st=re.attributes.position;let ze=nt.start*Ye,ft=(nt.start+nt.count)*Ye;we!==null&&(ze=Math.max(ze,we.start*Ye),ft=Math.min(ft,(we.start+we.count)*Ye)),Xe!==null?(ze=Math.max(ze,0),ft=Math.min(ft,Xe.count)):st!=null&&(ze=Math.max(ze,0),ft=Math.min(ft,st.count));const Zt=ft-ze;if(Zt<0||Zt===1/0)return;be.setup(Q,ne,De,re,Xe);let Qt,wt=ut;if(Xe!==null&&(Qt=xe.get(Xe),wt=W,wt.setIndex(Qt)),Q.isMesh)ne.wireframe===!0?(We.setLineWidth(ne.wireframeLinewidth*en()),wt.setMode(G.LINES)):wt.setMode(G.TRIANGLES);else if(Q.isLine){let _n=ne.linewidth;_n===void 0&&(_n=1),We.setLineWidth(_n*en()),Q.isLineSegments?wt.setMode(G.LINES):Q.isLineLoop?wt.setMode(G.LINE_LOOP):wt.setMode(G.LINE_STRIP)}else Q.isPoints?wt.setMode(G.POINTS):Q.isSprite&&wt.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Cu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))wt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const _n=Q._multiDrawStarts,Ve=Q._multiDrawCounts,In=Q._multiDrawCount,at=Xe?xe.get(Xe).bytesPerElement:1,Pn=T.get(ne).currentProgram.getUniforms();for(let ei=0;ei<In;ei++)Pn.setValue(G,"_gl_DrawID",ei),wt.render(_n[ei]/at,Ve[ei])}else if(Q.isInstancedMesh)wt.renderInstances(ze,Zt,Q.count);else if(re.isInstancedBufferGeometry){const _n=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ve=Math.min(re.instanceCount,_n);wt.renderInstances(ze,Zt,Ve)}else wt.render(ze,Zt)};function go(C,X,re){C.transparent===!0&&C.side===Ii&&C.forceSinglePass===!1?(C.side=Qn,C.needsUpdate=!0,za(C,X,re),C.side=Ia,C.needsUpdate=!0,za(C,X,re),C.side=Ii):za(C,X,re)}this.compile=function(C,X,re=null){re===null&&(re=C),z=Ee.get(re),z.init(X),F.push(z),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),C!==re&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),z.setupLights();const ne=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const we=Q.material;if(we)if(Array.isArray(we))for(let Be=0;Be<we.length;Be++){const De=we[Be];go(De,re,Q),ne.add(De)}else go(we,re,Q),ne.add(we)}),z=F.pop(),ne},this.compileAsync=function(C,X,re=null){const ne=this.compile(C,X,re);return new Promise(Q=>{function we(){if(ne.forEach(function(Be){T.get(Be).currentProgram.isReady()&&ne.delete(Be)}),ne.size===0){Q(C);return}setTimeout(we,10)}Rt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let $s=null;function Ll(C){$s&&$s(C)}function er(){Hi.stop()}function tr(){Hi.start()}const Hi=new kx;Hi.setAnimationLoop(Ll),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(C){$s=C,ue.setAnimationLoop(C),C===null?Hi.stop():Hi.start()},ue.addEventListener("sessionstart",er),ue.addEventListener("sessionend",tr),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(fe===!0)return;const re=ue.enabled===!0&&ue.isPresenting===!0,ne=b!==null&&(te===null||re)&&b.begin(U,te);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(X),X=ue.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,X,te),z=Ee.get(C,F.length),z.init(X),F.push(z),tn.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ge.setFromProjectionMatrix(tn,Zi,X.reversedDepth),$e=this.localClippingEnabled,Ze=ye.init(this.clippingPlanes,$e),D=et.get(C,P.length),D.init(),P.push(D),ue.enabled===!0&&ue.isPresenting===!0){const Be=U.xr.getDepthSensingMesh();Be!==null&&nr(Be,X,-1/0,U.sortObjects)}nr(C,X,0,U.sortObjects),D.finish(),U.sortObjects===!0&&D.sort(Ae,Pe),lt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,lt&&Ue.addToRenderList(D,C),this.info.render.frame++,Ze===!0&&ye.beginShadows();const Q=z.state.shadowsArray;if(Ne.render(Q,C,X),Ze===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&b.hasRenderPass())===!1){const Be=D.opaque,De=D.transmissive;if(z.setupLights(),X.isArrayCamera){const Xe=X.cameras;if(De.length>0)for(let Ye=0,nt=Xe.length;Ye<nt;Ye++){const st=Xe[Ye];ln(Be,De,C,st)}lt&&Ue.render(C);for(let Ye=0,nt=Xe.length;Ye<nt;Ye++){const st=Xe[Ye];Ai(D,C,st,st.viewport)}}else De.length>0&&ln(Be,De,C,X),lt&&Ue.render(C),Ai(D,C,X)}te!==null&&Z===0&&(Y.updateMultisampleRenderTarget(te),Y.updateRenderTargetMipmap(te)),ne&&b.end(U),C.isScene===!0&&C.onAfterRender(U,C,X),be.resetDefaultState(),ce=-1,J=null,F.pop(),F.length>0?(z=F[F.length-1],Ze===!0&&ye.setGlobalState(U.clippingPlanes,z.state.camera)):z=null,P.pop(),P.length>0?D=P[P.length-1]:D=null};function nr(C,X,re,ne){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)z.pushLight(C),C.castShadow&&z.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ge.intersectsSprite(C)){ne&&_t.setFromMatrixPosition(C.matrixWorld).applyMatrix4(tn);const Be=ke.update(C),De=C.material;De.visible&&D.push(C,Be,De,re,_t.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ge.intersectsObject(C))){const Be=ke.update(C),De=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_t.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),_t.copy(Be.boundingSphere.center)),_t.applyMatrix4(C.matrixWorld).applyMatrix4(tn)),Array.isArray(De)){const Xe=Be.groups;for(let Ye=0,nt=Xe.length;Ye<nt;Ye++){const st=Xe[Ye],ze=De[st.materialIndex];ze&&ze.visible&&D.push(C,Be,ze,re,_t.z,st)}}else De.visible&&D.push(C,Be,De,re,_t.z,null)}}const we=C.children;for(let Be=0,De=we.length;Be<De;Be++)nr(we[Be],X,re,ne)}function Ai(C,X,re,ne){const{opaque:Q,transmissive:we,transparent:Be}=C;z.setupLightsView(re),Ze===!0&&ye.setGlobalState(U.clippingPlanes,re),ne&&We.viewport(O.copy(ne)),Q.length>0&&gn(Q,X,re),we.length>0&&gn(we,X,re),Be.length>0&&gn(Be,X,re),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function ln(C,X,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ne.id]===void 0){const ze=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ne.id]=new Ji(1,1,{generateMipmaps:!0,type:ze?Pa:fi,minFilter:La,samples:Ot.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const we=z.state.transmissionRenderTarget[ne.id],Be=ne.viewport||O;we.setSize(Be.z*U.transmissionResolutionScale,Be.w*U.transmissionResolutionScale);const De=U.getRenderTarget(),Xe=U.getActiveCubeFace(),Ye=U.getActiveMipmapLevel();U.setRenderTarget(we),U.getClearColor(oe),Se=U.getClearAlpha(),Se<1&&U.setClearColor(16777215,.5),U.clear(),lt&&Ue.render(re);const nt=U.toneMapping;U.toneMapping=Qi;const st=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),z.setupLightsView(ne),Ze===!0&&ye.setGlobalState(U.clippingPlanes,ne),gn(C,re,ne),Y.updateMultisampleRenderTarget(we),Y.updateRenderTargetMipmap(we),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let ft=0,Zt=X.length;ft<Zt;ft++){const Qt=X[ft],{object:wt,geometry:_n,material:Ve,group:In}=Qt;if(Ve.side===Ii&&wt.layers.test(ne.layers)){const at=Ve.side;Ve.side=Qn,Ve.needsUpdate=!0,ra(wt,re,ne,_n,Ve,In),Ve.side=at,Ve.needsUpdate=!0,ze=!0}}ze===!0&&(Y.updateMultisampleRenderTarget(we),Y.updateRenderTargetMipmap(we))}U.setRenderTarget(De,Xe,Ye),U.setClearColor(oe,Se),st!==void 0&&(ne.viewport=st),U.toneMapping=nt}function gn(C,X,re){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,we=C.length;Q<we;Q++){const Be=C[Q],{object:De,geometry:Xe,group:Ye}=Be;let nt=Be.material;nt.allowOverride===!0&&ne!==null&&(nt=ne),De.layers.test(re.layers)&&ra(De,X,re,Xe,nt,Ye)}}function ra(C,X,re,ne,Q,we){C.onBeforeRender(U,X,re,ne,Q,we),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(U,X,re,ne,C,we),Q.transparent===!0&&Q.side===Ii&&Q.forceSinglePass===!1?(Q.side=Qn,Q.needsUpdate=!0,U.renderBufferDirect(re,X,ne,Q,C,we),Q.side=Ia,Q.needsUpdate=!0,U.renderBufferDirect(re,X,ne,Q,C,we),Q.side=Ii):U.renderBufferDirect(re,X,ne,Q,C,we),C.onAfterRender(U,X,re,ne,Q,we)}function za(C,X,re){X.isScene!==!0&&(X=Ut);const ne=T.get(C),Q=z.state.lights,we=z.state.shadowsArray,Be=Q.state.version,De=Ce.getParameters(C,Q.state,we,X,re),Xe=Ce.getProgramCacheKey(De);let Ye=ne.programs;ne.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const nt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ne.envMap=pe.get(C.envMap||ne.environment,nt),ne.envMapRotation=ne.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",Ct),Ye=new Map,ne.programs=Ye);let st=Ye.get(Xe);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Be)return Nl(C,De),st}else De.uniforms=Ce.getUniforms(C),C.onBeforeCompile(De,U),st=Ce.acquireProgram(De,Xe),Ye.set(Xe,st),ne.uniforms=De.uniforms;const ze=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ze.clippingPlanes=ye.uniform),Nl(C,De),ne.needsLights=_o(C),ne.lightsStateVersion=Be,ne.needsLights&&(ze.ambientLightColor.value=Q.state.ambient,ze.lightProbe.value=Q.state.probe,ze.directionalLights.value=Q.state.directional,ze.directionalLightShadows.value=Q.state.directionalShadow,ze.spotLights.value=Q.state.spot,ze.spotLightShadows.value=Q.state.spotShadow,ze.rectAreaLights.value=Q.state.rectArea,ze.ltc_1.value=Q.state.rectAreaLTC1,ze.ltc_2.value=Q.state.rectAreaLTC2,ze.pointLights.value=Q.state.point,ze.pointLightShadows.value=Q.state.pointShadow,ze.hemisphereLights.value=Q.state.hemi,ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ze.spotLightMatrix.value=Q.state.spotLightMatrix,ze.spotLightMap.value=Q.state.spotLightMap,ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function Ul(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Tu.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Nl(C,X){const re=T.get(C);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function Ol(C,X,re,ne,Q){X.isScene!==!0&&(X=Ut),Y.resetTextureUnits();const we=X.fog,Be=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,De=te===null?U.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Xn,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ye=pe.get(ne.envMap||Be,Xe),nt=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,st=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ze=!!re.morphAttributes.position,ft=!!re.morphAttributes.normal,Zt=!!re.morphAttributes.color;let Qt=Qi;ne.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Qt=U.toneMapping);const wt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,_n=wt!==void 0?wt.length:0,Ve=T.get(ne),In=z.state.lights;if(Ze===!0&&($e===!0||C!==J)){const un=C===J&&ne.id===ce;ye.setState(ne,C,un)}let at=!1;ne.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==In.state.version||Ve.outputColorSpace!==De||Q.isBatchedMesh&&Ve.batching===!1||!Q.isBatchedMesh&&Ve.batching===!0||Q.isBatchedMesh&&Ve.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ve.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ve.instancing===!1||!Q.isInstancedMesh&&Ve.instancing===!0||Q.isSkinnedMesh&&Ve.skinning===!1||!Q.isSkinnedMesh&&Ve.skinning===!0||Q.isInstancedMesh&&Ve.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ve.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ve.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ve.instancingMorph===!1&&Q.morphTexture!==null||Ve.envMap!==Ye||ne.fog===!0&&Ve.fog!==we||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ye.numPlanes||Ve.numIntersection!==ye.numIntersection)||Ve.vertexAlphas!==nt||Ve.vertexTangents!==st||Ve.morphTargets!==ze||Ve.morphNormals!==ft||Ve.morphColors!==Zt||Ve.toneMapping!==Qt||Ve.morphTargetsCount!==_n)&&(at=!0):(at=!0,Ve.__version=ne.version);let Pn=Ve.currentProgram;at===!0&&(Pn=za(ne,X,Q));let ei=!1,Ri=!1,ti=!1;const It=Pn.getUniforms(),cn=Ve.uniforms;if(We.useProgram(Pn.program)&&(ei=!0,Ri=!0,ti=!0),ne.id!==ce&&(ce=ne.id,Ri=!0),ei||J!==C){We.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),It.setValue(G,"projectionMatrix",C.projectionMatrix),It.setValue(G,"viewMatrix",C.matrixWorldInverse);const Ci=It.map.cameraPosition;Ci!==void 0&&Ci.setValue(G,yt.setFromMatrixPosition(C.matrixWorld)),Ot.logarithmicDepthBuffer&&It.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&It.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),J!==C&&(J=C,Ri=!0,ti=!0)}if(Ve.needsLights&&(In.state.directionalShadowMap.length>0&&It.setValue(G,"directionalShadowMap",In.state.directionalShadowMap,Y),In.state.spotShadowMap.length>0&&It.setValue(G,"spotShadowMap",In.state.spotShadowMap,Y),In.state.pointShadowMap.length>0&&It.setValue(G,"pointShadowMap",In.state.pointShadowMap,Y)),Q.isSkinnedMesh){It.setOptional(G,Q,"bindMatrix"),It.setOptional(G,Q,"bindMatrixInverse");const un=Q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),It.setValue(G,"boneTexture",un.boneTexture,Y))}Q.isBatchedMesh&&(It.setOptional(G,Q,"batchingTexture"),It.setValue(G,"batchingTexture",Q._matricesTexture,Y),It.setOptional(G,Q,"batchingIdTexture"),It.setValue(G,"batchingIdTexture",Q._indirectTexture,Y),It.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&It.setValue(G,"batchingColorTexture",Q._colorsTexture,Y));const Bn=re.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Oe.update(Q,re,Pn),(Ri||Ve.receiveShadow!==Q.receiveShadow)&&(Ve.receiveShadow=Q.receiveShadow,It.setValue(G,"receiveShadow",Q.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(cn.envMapIntensity.value=X.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=EC()),Ri&&(It.setValue(G,"toneMappingExposure",U.toneMappingExposure),Ve.needsLights&&Ms(cn,ti),we&&ne.fog===!0&&je.refreshFogUniforms(cn,we),je.refreshMaterialUniforms(cn,ne,me,q,z.state.transmissionRenderTarget[C.id]),Tu.upload(G,Ul(Ve),cn,Y)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Tu.upload(G,Ul(Ve),cn,Y),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&It.setValue(G,"center",Q.center),It.setValue(G,"modelViewMatrix",Q.modelViewMatrix),It.setValue(G,"normalMatrix",Q.normalMatrix),It.setValue(G,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const un=ne.uniformsGroups;for(let Ci=0,oa=un.length;Ci<oa;Ci++){const ir=un[Ci];Ie.update(ir,Pn),Ie.bind(ir,Pn)}}return Pn}function Ms(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function _o(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(C,X,re){const ne=T.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),T.get(C.texture).__webglTexture=X,T.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:re,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const re=T.get(C);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0};const Ha=G.createFramebuffer();this.setRenderTarget=function(C,X=0,re=0){te=C,H=X,Z=re;let ne=null,Q=!1,we=!1;if(C){const De=T.get(C);if(De.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(G.FRAMEBUFFER,De.__webglFramebuffer),O.copy(C.viewport),B.copy(C.scissor),se=C.scissorTest,We.viewport(O),We.scissor(B),We.setScissorTest(se),ce=-1;return}else if(De.__webglFramebuffer===void 0)Y.setupRenderTarget(C);else if(De.__hasExternalTextures)Y.rebindTextures(C,T.get(C.texture).__webglTexture,T.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(De.__boundDepthTexture!==nt){if(nt!==null&&T.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);const Ye=T.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[X])?ne=Ye[X][re]:ne=Ye[X],Q=!0):C.samples>0&&Y.useMultisampledRTT(C)===!1?ne=T.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?ne=Ye[re]:ne=Ye,O.copy(C.viewport),B.copy(C.scissor),se=C.scissorTest}else O.copy(ie).multiplyScalar(me).floor(),B.copy(ve).multiplyScalar(me).floor(),se=Te;if(re!==0&&(ne=Ha),We.bindFramebuffer(G.FRAMEBUFFER,ne)&&We.drawBuffers(C,ne),We.viewport(O),We.scissor(B),We.setScissorTest(se),Q){const De=T.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,De.__webglTexture,re)}else if(we){const De=X;for(let Xe=0;Xe<C.textures.length;Xe++){const Ye=T.get(C.textures[Xe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Xe,Ye.__webglTexture,re,De)}}else if(C!==null&&re!==0){const De=T.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,De.__webglTexture,re)}ce=-1},this.readRenderTargetPixels=function(C,X,re,ne,Q,we,Be,De=0){if(!(C&&C.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){We.bindFramebuffer(G.FRAMEBUFFER,Xe);try{const Ye=C.textures[De],nt=Ye.format,st=Ye.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+De),!Ot.textureFormatReadable(nt)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(st)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ne&&re>=0&&re<=C.height-Q&&G.readPixels(X,re,ne,Q,Re.convert(nt),Re.convert(st),we)}finally{const Ye=te!==null?T.get(te).__webglFramebuffer:null;We.bindFramebuffer(G.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,X,re,ne,Q,we,Be,De=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe)if(X>=0&&X<=C.width-ne&&re>=0&&re<=C.height-Q){We.bindFramebuffer(G.FRAMEBUFFER,Xe);const Ye=C.textures[De],nt=Ye.format,st=Ye.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+De),!Ot.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ze),G.bufferData(G.PIXEL_PACK_BUFFER,we.byteLength,G.STREAM_READ),G.readPixels(X,re,ne,Q,Re.convert(nt),Re.convert(st),0);const ft=te!==null?T.get(te).__webglFramebuffer:null;We.bindFramebuffer(G.FRAMEBUFFER,ft);const Zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await KM(G,Zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ze),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,we),G.deleteBuffer(ze),G.deleteSync(Zt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,re=0){const ne=Math.pow(2,-re),Q=Math.floor(C.image.width*ne),we=Math.floor(C.image.height*ne),Be=X!==null?X.x:0,De=X!==null?X.y:0;Y.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,re,0,0,Be,De,Q,we),We.unbindTexture()};const Va=G.createFramebuffer(),Es=G.createFramebuffer();this.copyTextureToTexture=function(C,X,re=null,ne=null,Q=0,we=0){let Be,De,Xe,Ye,nt,st,ze,ft,Zt;const Qt=C.isCompressedTexture?C.mipmaps[we]:C.image;if(re!==null)Be=re.max.x-re.min.x,De=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,Ye=re.min.x,nt=re.min.y,st=re.isBox3?re.min.z:0;else{const cn=Math.pow(2,-Q);Be=Math.floor(Qt.width*cn),De=Math.floor(Qt.height*cn),C.isDataArrayTexture?Xe=Qt.depth:C.isData3DTexture?Xe=Math.floor(Qt.depth*cn):Xe=1,Ye=0,nt=0,st=0}ne!==null?(ze=ne.x,ft=ne.y,Zt=ne.z):(ze=0,ft=0,Zt=0);const wt=Re.convert(X.format),_n=Re.convert(X.type);let Ve;X.isData3DTexture?(Y.setTexture3D(X,0),Ve=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Y.setTexture2DArray(X,0),Ve=G.TEXTURE_2D_ARRAY):(Y.setTexture2D(X,0),Ve=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const In=G.getParameter(G.UNPACK_ROW_LENGTH),at=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Pn=G.getParameter(G.UNPACK_SKIP_PIXELS),ei=G.getParameter(G.UNPACK_SKIP_ROWS),Ri=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Qt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Qt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ye),G.pixelStorei(G.UNPACK_SKIP_ROWS,nt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,st);const ti=C.isDataArrayTexture||C.isData3DTexture,It=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const cn=T.get(C),Bn=T.get(X),un=T.get(cn.__renderTarget),Ci=T.get(Bn.__renderTarget);We.bindFramebuffer(G.READ_FRAMEBUFFER,un.__webglFramebuffer),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let oa=0;oa<Xe;oa++)ti&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(C).__webglTexture,Q,st+oa),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(X).__webglTexture,we,Zt+oa)),G.blitFramebuffer(Ye,nt,Be,De,ze,ft,Be,De,G.DEPTH_BUFFER_BIT,G.NEAREST);We.bindFramebuffer(G.READ_FRAMEBUFFER,null),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||T.has(C)){const cn=T.get(C),Bn=T.get(X);We.bindFramebuffer(G.READ_FRAMEBUFFER,Va),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,Es);for(let un=0;un<Xe;un++)ti?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,cn.__webglTexture,Q,st+un):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,cn.__webglTexture,Q),It?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bn.__webglTexture,we,Zt+un):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Bn.__webglTexture,we),Q!==0?G.blitFramebuffer(Ye,nt,Be,De,ze,ft,Be,De,G.COLOR_BUFFER_BIT,G.NEAREST):It?G.copyTexSubImage3D(Ve,we,ze,ft,Zt+un,Ye,nt,Be,De):G.copyTexSubImage2D(Ve,we,ze,ft,Ye,nt,Be,De);We.bindFramebuffer(G.READ_FRAMEBUFFER,null),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else It?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Ve,we,ze,ft,Zt,Be,De,Xe,wt,_n,Qt.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Ve,we,ze,ft,Zt,Be,De,Xe,wt,Qt.data):G.texSubImage3D(Ve,we,ze,ft,Zt,Be,De,Xe,wt,_n,Qt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,we,ze,ft,Be,De,wt,_n,Qt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,we,ze,ft,Qt.width,Qt.height,wt,Qt.data):G.texSubImage2D(G.TEXTURE_2D,we,ze,ft,Be,De,wt,_n,Qt);G.pixelStorei(G.UNPACK_ROW_LENGTH,In),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,at),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Pn),G.pixelStorei(G.UNPACK_SKIP_ROWS,ei),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ri),we===0&&X.generateMipmaps&&G.generateMipmap(Ve),We.unbindTexture()},this.initRenderTarget=function(C){T.get(C).__webglFramebuffer===void 0&&Y.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Y.setTextureCube(C,0):C.isData3DTexture?Y.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Y.setTexture2DArray(C,0):Y.setTexture2D(C,0),We.unbindTexture()},this.resetState=function(){H=0,Z=0,te=null,We.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}function nx(o,e){if(e===BM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Sp||e===Tx){let n=o.getIndex();if(n===null){const u=[],h=o.getAttribute("position");if(h!==void 0){for(let p=0;p<h.count;p++)u.push(p);o.setIndex(u),n=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=n.count-2,r=[];if(e===Sp)for(let u=1;u<=a;u++)r.push(n.getX(0)),r.push(n.getX(u)),r.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(r.push(n.getX(u)),r.push(n.getX(u+1)),r.push(n.getX(u+2))):(r.push(n.getX(u+2)),r.push(n.getX(u+1)),r.push(n.getX(u)));r.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=o.clone();return c.setIndex(r),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}function bC(o){const e=new Map,n=new Map,a=o.clone();return Kx(o,a,function(r,c){e.set(c,r),n.set(r,c)}),a.traverse(function(r){if(!r.isSkinnedMesh)return;const c=r,u=e.get(r),h=u.skeleton.bones;c.skeleton=u.skeleton.clone(),c.bindMatrix.copy(u.bindMatrix),c.skeleton.bones=h.map(function(p){return n.get(p)}),c.bind(c.skeleton,c.bindMatrix)}),a}function Kx(o,e,n){n(o,e);for(let a=0;a<o.children.length;a++)Kx(o.children[a],e.children[a],n)}class AC extends po{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new LC(n)}),this.register(function(n){return new UC(n)}),this.register(function(n){return new VC(n)}),this.register(function(n){return new GC(n)}),this.register(function(n){return new kC(n)}),this.register(function(n){return new OC(n)}),this.register(function(n){return new IC(n)}),this.register(function(n){return new PC(n)}),this.register(function(n){return new BC(n)}),this.register(function(n){return new DC(n)}),this.register(function(n){return new FC(n)}),this.register(function(n){return new NC(n)}),this.register(function(n){return new HC(n)}),this.register(function(n){return new zC(n)}),this.register(function(n){return new CC(n)}),this.register(function(n){return new ix(n,gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new ix(n,gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new XC(n)})}load(e,n,a,r){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=Ml.extractUrlBase(e);u=Ml.resolveURL(d,this.path)}else u=Ml.extractUrlBase(e);this.manager.itemStart(e);const h=function(d){r?r(d):console.error(d),c.manager.itemError(e),c.manager.itemEnd(e)},p=new Hx(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(d){try{c.parse(d,u,function(g){n(g),c.manager.itemEnd(e)},h)}catch(g){h(g)}},a,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,r){let c;const u={},h={},p=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===Zx){try{u[gt.KHR_BINARY_GLTF]=new WC(e)}catch(_){r&&r(_);return}c=JSON.parse(u[gt.KHR_BINARY_GLTF].content)}else c=JSON.parse(p.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new aw(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](d);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[_.name]=_,u[_.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const _=c.extensionsUsed[g],v=c.extensionsRequired||[];switch(_){case gt.KHR_MATERIALS_UNLIT:u[_]=new wC;break;case gt.KHR_DRACO_MESH_COMPRESSION:u[_]=new qC(c,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:u[_]=new YC;break;case gt.KHR_MESH_QUANTIZATION:u[_]=new jC;break;default:v.indexOf(_)>=0&&h[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}d.setExtensions(u),d.setPlugins(h),d.parse(a,r)}parseAsync(e,n){const a=this;return new Promise(function(r,c){a.parse(e,n,r,c)})}}function RC(){let o={};return{get:function(e){return o[e]},add:function(e,n){o[e]=n},remove:function(e){delete o[e]},removeAll:function(){o={}}}}function on(o,e,n){const a=o.json.materials[e];return a.extensions&&a.extensions[n]?a.extensions[n]:null}const gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class CC{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,r=n.length;a<r;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let r=n.cache.get(a);if(r)return r;const c=n.json,p=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let d;const g=new ot(16777215);p.color!==void 0&&g.setRGB(p.color[0],p.color[1],p.color[2],Xn);const _=p.range!==void 0?p.range:0;switch(p.type){case"directional":d=new Gx(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new _T(g),d.distance=_;break;case"spot":d=new mT(g),d.distance=_,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,d.angle=p.spot.outerConeAngle,d.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return d.position.set(0,0,0),Yi(d,p),p.intensity!==void 0&&(d.intensity=p.intensity),d.name=n.createUniqueName(p.name||"light_"+e),r=Promise.resolve(d),n.cache.add(a,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(p){return a._getNodeRef(n.cache,h,p)})}}class wC{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ss}extendParams(e,n,a){const r=[];e.color=new ot(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Xn),e.opacity=u[3]}c.baseColorTexture!==void 0&&r.push(a.assignTexture(e,"map",c.baseColorTexture,Dn))}return Promise.all(r)}}class DC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const a=on(this.parser,e,this.name);return a===null||a.emissiveStrength!==void 0&&(n.emissiveIntensity=a.emissiveStrength),Promise.resolve()}}class LC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return on(this.parser,e,this.name)!==null?sa:null}extendMaterialParams(e,n){const a=on(this.parser,e,this.name);if(a===null)return Promise.resolve();const r=[];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const c=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new At(c,c)}return Promise.all(r)}}class UC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?sa:null}extendMaterialParams(e,n){const a=on(this.parser,e,this.name);return a===null||(n.dispersion=a.dispersion!==void 0?a.dispersion:0),Promise.resolve()}}class NC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return on(this.parser,e,this.name)!==null?sa:null}extendMaterialParams(e,n){const a=on(this.parser,e,this.name);if(a===null)return Promise.resolve();const r=[];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class OC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return on(this.parser,e,this.name)!==null?sa:null}extendMaterialParams(e,n){const a=on(this.parser,e,this.name);if(a===null)return Promise.resolve();const r=[];if(n.sheenColor=new ot(0,0,0),n.sheenRoughness=0,n.sheen=1,a.sheenColorFactor!==void 0){const c=a.sheenColorFactor;n.sheenColor.setRGB(c[0],c[1],c[2],Xn)}return a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(n,"sheenColorMap",a.sheenColorTexture,Dn)),a.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class IC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?sa:null}extendMaterialParams(e,n){const a=on(this.parser,e,this.name);if(a===null)return Promise.resolve();const r=[];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class PC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return on(this.parser,e,this.name)!==null?sa:null}extendMaterialParams(e,n){const a=on(this.parser,e,this.name);if(a===null)return Promise.resolve();const r=[];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;const c=a.attenuationColor||[1,1,1];return n.attenuationColor=new ot().setRGB(c[0],c[1],c[2],Xn),Promise.all(r)}}class BC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){return on(this.parser,e,this.name)!==null?sa:null}extendMaterialParams(e,n){const a=on(this.parser,e,this.name);return a===null||(n.ior=a.ior!==void 0?a.ior:1.5),Promise.resolve()}}class FC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return on(this.parser,e,this.name)!==null?sa:null}extendMaterialParams(e,n){const a=on(this.parser,e,this.name);if(a===null)return Promise.resolve();const r=[];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(this.parser.assignTexture(n,"specularIntensityMap",a.specularTexture));const c=a.specularColorFactor||[1,1,1];return n.specularColor=new ot().setRGB(c[0],c[1],c[2],Xn),a.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(n,"specularColorMap",a.specularColorTexture,Dn)),Promise.all(r)}}class zC{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){return on(this.parser,e,this.name)!==null?sa:null}extendMaterialParams(e,n){const a=on(this.parser,e,this.name);if(a===null)return Promise.resolve();const r=[];return n.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(this.parser.assignTexture(n,"bumpMap",a.bumpTexture)),Promise.all(r)}}class HC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return on(this.parser,e,this.name)!==null?sa:null}extendMaterialParams(e,n){const a=on(this.parser,e,this.name);if(a===null)return Promise.resolve();const r=[];return a.anisotropyStrength!==void 0&&(n.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(n.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(n,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class VC{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,r=a.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const c=r.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class GC{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class kC{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class ix{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const r=a.extensions[this.name],c=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const p=r.byteOffset||0,d=r.byteLength||0,g=r.count,_=r.byteStride,v=new Uint8Array(h,p,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,r.mode,r.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(x),g,_,v,r.mode,r.filter),x})})}else return null}}class XC{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const r=n.meshes[a.mesh];for(const d of r.primitives)if(d.mode!==Mi.TRIANGLES&&d.mode!==Mi.TRIANGLE_STRIP&&d.mode!==Mi.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,h=[],p={};for(const d in u)h.push(this.parser.getDependency("accessor",u[d]).then(g=>(p[d]=g,p[d])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(d=>{const g=d.pop(),_=g.isGroup?g.children:[g],v=d[0].count,x=[];for(const E of _){const A=new mt,y=new K,S=new ia,w=new K(1,1,1),L=new FE(E.geometry,E.material,v);for(let D=0;D<v;D++)p.TRANSLATION&&y.fromBufferAttribute(p.TRANSLATION,D),p.ROTATION&&S.fromBufferAttribute(p.ROTATION,D),p.SCALE&&w.fromBufferAttribute(p.SCALE,D),L.setMatrixAt(D,A.compose(y,S,w));for(const D in p)if(D==="_COLOR_0"){const z=p[D];L.instanceColor=new Mp(z.array,z.itemSize,z.normalized)}else D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE"&&E.geometry.setAttribute(D,p[D]);$t.prototype.copy.call(L,E),this.parser.assignFinalMaterial(L),x.push(L)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const Zx="glTF",gl=12,ax={JSON:1313821514,BIN:5130562};class WC{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,gl),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Zx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-gl,c=new DataView(e,gl);let u=0;for(;u<r;){const h=c.getUint32(u,!0);u+=4;const p=c.getUint32(u,!0);if(u+=4,p===ax.JSON){const d=new Uint8Array(e,gl+u,h);this.content=a.decode(d)}else if(p===ax.BIN){const d=gl+u;this.body=e.slice(d,d+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qC{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,r=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,h={},p={},d={};for(const g in u){const _=Ap[g]||g.toLowerCase();h[_]=u[g]}for(const g in e.attributes){const _=Ap[g]||g.toLowerCase();if(u[g]!==void 0){const v=a.accessors[e.attributes[g]],x=$r[v.componentType];d[_]=x.name,p[_]=v.normalized===!0}}return n.getDependency("bufferView",c).then(function(g){return new Promise(function(_,v){r.decodeDracoFile(g,function(x){for(const E in x.attributes){const A=x.attributes[E],y=p[E];y!==void 0&&(A.normalized=y)}_(x)},h,d,Xn,v)})})}}class YC{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class jC{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}}class Qx extends uo{constructor(e,n,a,r){super(e,n,a,r)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r*3+r;for(let u=0;u!==r;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=h*2,d=h*3,g=r-n,_=(a-n)/g,v=_*_,x=v*_,E=e*d,A=E-d,y=-2*x+3*v,S=x-v,w=1-y,L=S-v+_;for(let D=0;D!==h;D++){const z=u[A+D+h],P=u[A+D+p]*g,F=u[E+D+h],b=u[E+D]*g;c[D]=w*z+L*P+y*F+S*b}return c}}const KC=new ia;class ZC extends Qx{interpolate_(e,n,a,r){const c=super.interpolate_(e,n,a,r);return KC.fromArray(c).normalize().toArray(c),c}}const Mi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sx={9728:xn,9729:Sn,9984:_x,9985:xu,9986:vl,9987:La},rx={33071:Ki,33648:bu,10497:no},Dd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ap={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},QC={CUBICSPLINE:void 0,LINEAR:Al,STEP:bl},Ld={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function JC(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Yp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ia})),o.DefaultMaterial}function qs(o,e,n){for(const a in n.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function Yi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $C(o,e,n){let a=!1,r=!1,c=!1;for(let d=0,g=e.length;d<g;d++){const _=e[d];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(r=!0),_.COLOR_0!==void 0&&(c=!0),a&&r&&c)break}if(!a&&!r&&!c)return Promise.resolve(o);const u=[],h=[],p=[];for(let d=0,g=e.length;d<g;d++){const _=e[d];if(a){const v=_.POSITION!==void 0?n.getDependency("accessor",_.POSITION):o.attributes.position;u.push(v)}if(r){const v=_.NORMAL!==void 0?n.getDependency("accessor",_.NORMAL):o.attributes.normal;h.push(v)}if(c){const v=_.COLOR_0!==void 0?n.getDependency("accessor",_.COLOR_0):o.attributes.color;p.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p)]).then(function(d){const g=d[0],_=d[1],v=d[2];return a&&(o.morphAttributes.position=g),r&&(o.morphAttributes.normal=_),c&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function ew(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)o.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(o.morphTargetInfluences.length===n.length){o.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++)o.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tw(o){let e;const n=o.extensions&&o.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Ud(n.attributes):e=o.indices+":"+Ud(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,r=o.targets.length;a<r;a++)e+=":"+Ud(o.targets[a]);return e}function Ud(o){let e="";const n=Object.keys(o).sort();for(let a=0,r=n.length;a<r;a++)e+=n[a]+":"+o[n[a]]+";";return e}function Rp(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const iw=new mt;class aw{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new RC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,r=-1,c=!1,u=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const p=h.match(/Version\/(\d+)/);r=a&&p?parseInt(p[1],10):-1,c=h.indexOf("Firefox")>-1,u=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&r<17||c&&u<98?this.textureLoader=new hT(this.options.manager):this.textureLoader=new xT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,r=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const h={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:a,userData:{}};return qs(c,h,r),Yi(h,r),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(h)})).then(function(){for(const p of h.scenes)p.updateMatrixWorld();e(h)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let r=0,c=n.length;r<c;r++){const u=n[r].joints;for(let h=0,p=u.length;h<p;h++)e[u[h]].isBone=!0}for(let r=0,c=e.length;r<c;r++){const u=e[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const r=a.clone(),c=(u,h)=>{const p=this.associations.get(u);p!=null&&this.associations.set(h,p);for(const[d,g]of u.children.entries())c(g,h.children[d])};return c(a,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const r=e(n[a]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let r=0;r<n.length;r++){const c=e(n[r]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let r=this.cache.get(a);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":r=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(a,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(c,u){a.load(Ml.resolveURL(n.uri,r.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const r=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+r)})}loadAccessor(e){const n=this,a=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const u=Dd[r.type],h=$r[r.componentType],p=r.normalized===!0,d=new h(r.count*u);return Promise.resolve(new kn(d,u,p))}const c=[];return r.bufferView!==void 0?c.push(this.getDependency("bufferView",r.bufferView)):c.push(null),r.sparse!==void 0&&(c.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(c).then(function(u){const h=u[0],p=Dd[r.type],d=$r[r.componentType],g=d.BYTES_PER_ELEMENT,_=g*p,v=r.byteOffset||0,x=r.bufferView!==void 0?a.bufferViews[r.bufferView].byteStride:void 0,E=r.normalized===!0;let A,y;if(x&&x!==_){const S=Math.floor(v/x),w="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+S+":"+r.count;let L=n.cache.get(w);L||(A=new d(h,S*x,r.count*x/g),L=new LE(A,x/g),n.cache.add(w,L)),y=new Vp(L,p,v%x/g,E)}else h===null?A=new d(r.count*p):A=new d(h,v,r.count*p),y=new kn(A,p,E);if(r.sparse!==void 0){const S=Dd.SCALAR,w=$r[r.sparse.indices.componentType],L=r.sparse.indices.byteOffset||0,D=r.sparse.values.byteOffset||0,z=new w(u[1],L,r.sparse.count*S),P=new d(u[2],D,r.sparse.count*p);h!==null&&(y=new kn(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let F=0,b=z.length;F<b;F++){const U=z[F];if(y.setX(U,P[F*p]),p>=2&&y.setY(U,P[F*p+1]),p>=3&&y.setZ(U,P[F*p+2]),p>=4&&y.setW(U,P[F*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=E}return y})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let h=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(h=p)}return this.loadTextureImage(e,c,h)}loadTextureImage(e,n,a){const r=this,c=this.json,u=c.textures[e],h=c.images[n],p=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const d=this.loadImageSource(n,a).then(function(g){g.flipY=!1,g.name=u.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const v=(c.samplers||{})[u.sampler]||{};return g.magFilter=sx[v.magFilter]||Sn,g.minFilter=sx[v.minFilter]||La,g.wrapS=rx[v.wrapS]||no,g.wrapT=rx[v.wrapT]||no,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==xn&&g.minFilter!==Sn,r.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[p]=d,d}loadImageSource(e,n){const a=this,r=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const u=r.images[e],h=self.URL||self.webkitURL;let p=u.uri||"",d=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(_){d=!0;const v=new Blob([_],{type:u.mimeType});return p=h.createObjectURL(v),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(p).then(function(_){return new Promise(function(v,x){let E=v;n.isImageBitmapLoader===!0&&(E=function(A){const y=new bn(A);y.needsUpdate=!0,v(y)}),n.load(Ml.resolveURL(_,c.path),E,void 0,x)})}).then(function(_){return d===!0&&h.revokeObjectURL(p),Yi(_,u),_.userData.mimeType=u.mimeType||nw(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),_});return this.sourceCache[e]=g,g}assignTexture(e,n,a,r){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[gt.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const p=c.associations.get(u);u=c.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),c.associations.set(u,p)}}return r!==void 0&&(u.colorSpace=r),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const r=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new Ox,$i.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(h,p)),a=p}else if(e.isLine){const h="LineBasicMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new Nx,$i.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(h,p)),a=p}if(r||c||u){let h="ClonedMaterial:"+a.uuid+":";r&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let p=this.cache.get(h);p||(p=a.clone(),c&&(p.vertexColors=!0),u&&(p.flatShading=!0),r&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(h,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return Yp}loadMaterial(e){const n=this,a=this.json,r=this.extensions,c=a.materials[e];let u;const h={},p=c.extensions||{},d=[];if(p[gt.KHR_MATERIALS_UNLIT]){const _=r[gt.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),d.push(_.extendParams(h,c,n))}else{const _=c.pbrMetallicRoughness||{};if(h.color=new ot(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],Xn),h.opacity=v[3]}_.baseColorTexture!==void 0&&d.push(n.assignTexture(h,"map",_.baseColorTexture,Dn)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(d.push(n.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),d.push(n.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,h)})))}c.doubleSided===!0&&(h.side=Ii);const g=c.alphaMode||Ld.OPAQUE;if(g===Ld.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===Ld.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==Ss&&(d.push(n.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new At(1,1),c.normalTexture.scale!==void 0)){const _=c.normalTexture.scale;h.normalScale.set(_,_)}if(c.occlusionTexture!==void 0&&u!==Ss&&(d.push(n.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==Ss){const _=c.emissiveFactor;h.emissive=new ot().setRGB(_[0],_[1],_[2],Xn)}return c.emissiveTexture!==void 0&&u!==Ss&&d.push(n.assignTexture(h,"emissiveMap",c.emissiveTexture,Dn)),Promise.all(d).then(function(){const _=new u(h);return c.name&&(_.name=c.name),Yi(_,c),n.associations.set(_,{materials:e}),c.extensions&&qs(r,_,c),_})}createUniqueName(e){const n=Vt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,r=this.primitiveCache;function c(h){return a[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,n).then(function(p){return ox(p,h,n)})}const u=[];for(let h=0,p=e.length;h<p;h++){const d=e[h],g=tw(d),_=r[g];if(_)u.push(_.promise);else{let v;d.extensions&&d.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?v=c(d):v=ox(new hi,d,n),r[g]={primitive:d,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,r=this.extensions,c=a.meshes[e],u=c.primitives,h=[];for(let p=0,d=u.length;p<d;p++){const g=u[p].material===void 0?JC(this.cache):this.getDependency("material",u[p].material);h.push(g)}return h.push(n.loadGeometries(u)),Promise.all(h).then(function(p){const d=p.slice(0,p.length-1),g=p[p.length-1],_=[];for(let x=0,E=g.length;x<E;x++){const A=g[x],y=u[x];let S;const w=d[x];if(y.mode===Mi.TRIANGLES||y.mode===Mi.TRIANGLE_STRIP||y.mode===Mi.TRIANGLE_FAN||y.mode===void 0)S=c.isSkinnedMesh===!0?new IE(A,w):new $n(A,w),S.isSkinnedMesh===!0&&S.normalizeSkinWeights(),y.mode===Mi.TRIANGLE_STRIP?S.geometry=nx(S.geometry,Tx):y.mode===Mi.TRIANGLE_FAN&&(S.geometry=nx(S.geometry,Sp));else if(y.mode===Mi.LINES)S=new GE(A,w);else if(y.mode===Mi.LINE_STRIP)S=new Wp(A,w);else if(y.mode===Mi.LINE_LOOP)S=new kE(A,w);else if(y.mode===Mi.POINTS)S=new XE(A,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(S.geometry.morphAttributes).length>0&&ew(S,c),S.name=n.createUniqueName(c.name||"mesh_"+e),Yi(S,c),y.extensions&&qs(r,S,y),n.assignFinalMaterial(S),_.push(S)}for(let x=0,E=_.length;x<E;x++)n.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return c.extensions&&qs(r,_[0],c),_[0];const v=new Qs;c.extensions&&qs(r,v,c),n.associations.set(v,{meshes:e});for(let x=0,E=_.length;x<E;x++)v.add(_[x]);return v})}loadCamera(e){let n;const a=this.json.cameras[e],r=a[a.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Gn(dE.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):a.type==="orthographic"&&(n=new Iu(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),Yi(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let r=0,c=n.joints.length;r<c;r++)a.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(r){const c=r.pop(),u=r,h=[],p=[];for(let d=0,g=u.length;d<g;d++){const _=u[d];if(_){h.push(_);const v=new mt;c!==null&&v.fromArray(c.array,d*16),p.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[d])}return new kp(h,p)})}loadAnimation(e){const n=this.json,a=this,r=n.animations[e],c=r.name?r.name:"animation_"+e,u=[],h=[],p=[],d=[],g=[];for(let _=0,v=r.channels.length;_<v;_++){const x=r.channels[_],E=r.samplers[x.sampler],A=x.target,y=A.node,S=r.parameters!==void 0?r.parameters[E.input]:E.input,w=r.parameters!==void 0?r.parameters[E.output]:E.output;A.node!==void 0&&(u.push(this.getDependency("node",y)),h.push(this.getDependency("accessor",S)),p.push(this.getDependency("accessor",w)),d.push(E),g.push(A))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p),Promise.all(d),Promise.all(g)]).then(function(_){const v=_[0],x=_[1],E=_[2],A=_[3],y=_[4],S=[];for(let L=0,D=v.length;L<D;L++){const z=v[L],P=x[L],F=E[L],b=A[L],U=y[L];if(z===void 0)continue;z.updateMatrix&&z.updateMatrix();const fe=a._createAnimationTracks(z,P,F,b,U);if(fe)for(let H=0;H<fe.length;H++)S.push(fe[H])}const w=new sT(c,void 0,S);return Yi(w,r),w})}createNodeMesh(e){const n=this.json,a=this,r=n.nodes[e];return r.mesh===void 0?null:a.getDependency("mesh",r.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,r.mesh,c);return r.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let p=0,d=r.weights.length;p<d;p++)h.morphTargetInfluences[p]=r.weights[p]}),u})}loadNode(e){const n=this.json,a=this,r=n.nodes[e],c=a._loadNodeShallow(e),u=[],h=r.children||[];for(let d=0,g=h.length;d<g;d++)u.push(a.getDependency("node",h[d]));const p=r.skin===void 0?Promise.resolve(null):a.getDependency("skin",r.skin);return Promise.all([c,Promise.all(u),p]).then(function(d){const g=d[0],_=d[1],v=d[2];v!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(v,iw)});for(let x=0,E=_.length;x<E;x++)g.add(_[x]);if(g.userData.pivot!==void 0&&_.length>0){const x=g.userData.pivot,E=_[0];g.pivot=new K().fromArray(x),g.position.x-=x[0],g.position.y-=x[1],g.position.z-=x[2],E.position.set(0,0,0),delete g.userData.pivot}return g})}_loadNodeShallow(e){const n=this.json,a=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?r.createUniqueName(c.name):"",h=[],p=r._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return p&&h.push(p),c.camera!==void 0&&h.push(r.getDependency("camera",c.camera).then(function(d){return r._getNodeRef(r.cameraCache,c.camera,d)})),r._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){h.push(d)}),this.nodeCache[e]=Promise.all(h).then(function(d){let g;if(c.isBone===!0?g=new Ux:d.length>1?g=new Qs:d.length===1?g=d[0]:g=new $t,g!==d[0])for(let _=0,v=d.length;_<v;_++)g.add(d[_]);if(c.name&&(g.userData.name=c.name,g.name=u),Yi(g,c),c.extensions&&qs(a,g,c),c.matrix!==void 0){const _=new mt;_.fromArray(c.matrix),g.applyMatrix4(_)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);if(!r.associations.has(g))r.associations.set(g,{});else if(c.mesh!==void 0&&r.meshCache.refs[c.mesh]>1){const _=r.associations.get(g);r.associations.set(g,{..._})}return r.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],r=this,c=new Qs;a.name&&(c.name=r.createUniqueName(a.name)),Yi(c,a),a.extensions&&qs(n,c,a);const u=a.nodes||[],h=[];for(let p=0,d=u.length;p<d;p++)h.push(r.getDependency("node",u[p]));return Promise.all(h).then(function(p){for(let g=0,_=p.length;g<_;g++){const v=p[g];v.parent!==null?c.add(bC(v)):c.add(v)}const d=g=>{const _=new Map;for(const[v,x]of r.associations)(v instanceof $i||v instanceof bn)&&_.set(v,x);return g.traverse(v=>{const x=r.associations.get(v);x!=null&&_.set(v,x)}),_};return r.associations=d(c),c})}_createAnimationTracks(e,n,a,r,c){const u=[],h=e.name?e.name:e.uuid,p=[];_s[c.path]===_s.weights?e.traverse(function(v){v.morphTargetInfluences&&p.push(v.name?v.name:v.uuid)}):p.push(h);let d;switch(_s[c.path]){case _s.weights:d=ro;break;case _s.rotation:d=oo;break;case _s.translation:case _s.scale:d=lo;break;default:a.itemSize===1?d=ro:d=lo;break}const g=r.interpolation!==void 0?QC[r.interpolation]:Al,_=this._getArrayFromAccessor(a);for(let v=0,x=p.length;v<x;v++){const E=new d(p[v]+"."+_s[c.path],n.array,_,g);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),u.push(E)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=Rp(n.constructor),r=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=n[c]*a;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const r=this instanceof oo?ZC:Qx;return new r(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sw(o,e,n){const a=e.attributes,r=new Fa;if(a.POSITION!==void 0){const h=n.json.accessors[a.POSITION],p=h.min,d=h.max;if(p!==void 0&&d!==void 0){if(r.set(new K(p[0],p[1],p[2]),new K(d[0],d[1],d[2])),h.normalized){const g=Rp($r[h.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const h=new K,p=new K;for(let d=0,g=c.length;d<g;d++){const _=c[d];if(_.POSITION!==void 0){const v=n.json.accessors[_.POSITION],x=v.min,E=v.max;if(x!==void 0&&E!==void 0){if(p.setX(Math.max(Math.abs(x[0]),Math.abs(E[0]))),p.setY(Math.max(Math.abs(x[1]),Math.abs(E[1]))),p.setZ(Math.max(Math.abs(x[2]),Math.abs(E[2]))),v.normalized){const A=Rp($r[v.componentType]);p.multiplyScalar(A)}h.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(h)}o.boundingBox=r;const u=new aa;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function ox(o,e,n){const a=e.attributes,r=[];function c(u,h){return n.getDependency("accessor",u).then(function(p){o.setAttribute(h,p)})}for(const u in a){const h=Ap[u]||u.toLowerCase();h in o.attributes||r.push(c(a[u],h))}if(e.indices!==void 0&&!o.index){const u=n.getDependency("accessor",e.indices).then(function(h){o.setIndex(h)});r.push(u)}return bt.workingColorSpace!==Xn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),Yi(o,e),sw(o,e,n),Promise.all(r).then(function(){return e.targets!==void 0?$C(o,e.targets,n):o})}const rw="/my-3d-room-ar/room.glb";function ow(){const o=Hn.useRef(null),e=Hn.useRef(null),n=Hn.useRef(null),a=Hn.useRef(null),r=Hn.useRef(null),c=Hn.useRef(null),u=Hn.useRef(null),h=Hn.useRef(!1),p=Hn.useRef(null),[d,g]=Hn.useState(!1),[_,v]=Hn.useState(!1),[x,E]=Hn.useState(!1),[A,y]=Hn.useState("AR開始前: 床が見える場所で開始してください");Hn.useEffect(()=>{const L=o.current;if(!L)return;const D=new RE,z=new Gn(70,window.innerWidth/window.innerHeight,.01,20),P=new TC({antialias:!0,alpha:!0});n.current=P,P.xr.enabled=!0,P.setPixelRatio(window.devicePixelRatio),P.setSize(window.innerWidth,window.innerHeight),L.appendChild(P.domElement);const F=new dT(16777215,12303359,1.4);D.add(F);const b=new Gx(16777215,.6);b.position.set(0,6,0),D.add(b);const U=new qp(.12,.15,40).rotateX(-Math.PI/2),fe=new Ss({color:2409322}),H=new $n(U,fe);H.matrixAutoUpdate=!1,H.visible=!1,c.current=H,D.add(H),new AC().load(rw,B=>{const se=B.scene;se.traverse(oe=>{oe.isMesh&&(oe.castShadow=!0,oe.receiveShadow=!0,oe.material&&(oe.material.side=Ii,oe.material.transparent=!1,oe.material.opacity=1,oe.material.depthWrite=!0,oe.material.depthTest=!0))}),p.current=se,y("AR開始後、床を検出したらタップで部屋を配置")},void 0,()=>{y("room.glb の読み込みに失敗しました")});const te=P.xr.getController(0);te.addEventListener("select",()=>{const B=p.current,se=c.current;if(!B||!se||!se.visible)return;r.current||(r.current=B.clone(!0),D.add(r.current));const oe=r.current,Se=new K,I=new ia,q=new K;se.matrix.decompose(Se,I,q),oe.position.copy(Se),oe.quaternion.copy(I),oe.scale.set(1,1,1),y("配置完了: 別の場所をタップで再配置")}),D.add(te);const ce=()=>{E(!1),a.current=null,u.current=null,h.current=!1,c.current&&(c.current.visible=!1),y("AR終了")},J=()=>{z.aspect=window.innerWidth/window.innerHeight,z.updateProjectionMatrix(),P.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",J),P.setAnimationLoop((B,se)=>{if(se&&P.xr.isPresenting){const oe=P.xr.getSession(),Se=P.xr.getReferenceSpace();h.current||(oe.requestReferenceSpace("viewer").then(q=>{oe.requestHitTestSource({space:q}).then(me=>{u.current=me})}),oe.addEventListener("end",()=>{u.current&&(u.current.cancel(),u.current=null)}),h.current=!0);const I=u.current;if(I&&Se){const q=se.getHitTestResults(I);if(q.length>0){const me=q[0].getPose(Se);me&&(H.matrix.fromArray(me.transform.matrix),H.visible=!0)}else H.visible=!1}P.xr.hasDepthSensing()&&y(q=>q.includes("Depth Sensing有効")?q:`${q} / Depth Sensing有効`)}P.render(D,z)}),(async()=>{if(!navigator.xr){y("この端末/ブラウザではWebXRが利用できません");return}const B=await navigator.xr.isSessionSupported("immersive-ar");g(B),B||y("この端末/ブラウザではimmersive-arが未対応です")})(),()=>{window.removeEventListener("resize",J),a.current&&(a.current.removeEventListener("end",ce),a.current.end()),P.setAnimationLoop(null),P.dispose(),L.contains(P.domElement)&&L.removeChild(P.domElement)}},[]);const S=async()=>{if(!(!n.current||!navigator.xr||_)){v(!0);try{const L={requiredFeatures:["hit-test"],optionalFeatures:["depth-sensing","dom-overlay","light-estimation"],domOverlay:{root:e.current},depthSensing:{usagePreference:["cpu-optimized","gpu-optimized"],dataFormatPreference:["float32","luminance-alpha"]}},D=await navigator.xr.requestSession("immersive-ar",L);a.current=D,D.addEventListener("end",()=>{E(!1),a.current=null}),await n.current.xr.setSession(D),E(!0),y("AR開始: 床が検出されたらタップして配置")}catch{y("ARセッション開始に失敗しました")}finally{v(!1)}}},w=async()=>{a.current&&(await a.current.end(),E(!1))};return vs.jsxs("div",{className:"app-root",ref:e,children:[vs.jsx("div",{className:"canvas-root",ref:o}),vs.jsx("div",{className:"hud",children:vs.jsx("p",{children:A})}),x?vs.jsx("button",{className:"ar-action stop",onClick:w,children:"ARを終了"}):vs.jsx("button",{className:"ar-action",onClick:S,disabled:!d||_,children:_?"AR開始中...":"ARを開始"})]})}fM.createRoot(document.getElementById("root")).render(vs.jsx(Hn.StrictMode,{children:vs.jsx(ow,{})}));
