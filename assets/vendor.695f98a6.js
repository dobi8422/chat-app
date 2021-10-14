var k_=Object.defineProperty;var Ju=Object.getOwnPropertySymbols;var N_=Object.prototype.hasOwnProperty,P_=Object.prototype.propertyIsEnumerable;var Xu=(t,e,n)=>e in t?k_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Zu=(t,e)=>{for(var n in e||(e={}))N_.call(e,n)&&Xu(t,n,e[n]);if(Ju)for(var n of Ju(e))P_.call(e,n)&&Xu(t,n,e[n]);return t};function Ma(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const O_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",x_=Ma(O_);function ed(t){return!!t||t===""}function La(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Fe(i)?D_(i):La(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Fe(t))return t;if(xe(t))return t}}const M_=/;(?![^(]*\))/g,L_=/:(.+)/;function D_(t){const e={};return t.split(M_).forEach(n=>{if(n){const i=n.split(L_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Da(t){let e="";if(Fe(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const i=Da(t[n]);i&&(e+=i+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const SN=t=>t==null?"":ne(t)||xe(t)&&(t.toString===sd||!re(t.toString))?JSON.stringify(t,td,2):String(t),td=(t,e)=>e&&e.__v_isRef?td(t,e.value):Di(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:id(e)?{[`Set(${e.size})`]:[...e.values()]}:xe(e)&&!ne(e)&&!od(e)?String(e):e,Ie={},Li=[],xt=()=>{},F_=()=>!1,U_=/^on[^a-z]/,Us=t=>U_.test(t),Fa=t=>t.startsWith("onUpdate:"),Je=Object.assign,nd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},V_=Object.prototype.hasOwnProperty,ge=(t,e)=>V_.call(t,e),ne=Array.isArray,Di=t=>Vs(t)==="[object Map]",id=t=>Vs(t)==="[object Set]",re=t=>typeof t=="function",Fe=t=>typeof t=="string",Ua=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",rd=t=>xe(t)&&re(t.then)&&re(t.catch),sd=Object.prototype.toString,Vs=t=>sd.call(t),W_=t=>Vs(t).slice(8,-1),od=t=>Vs(t)==="[object Object]",Va=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ws=Ma(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},B_=/-(\w)/g,Ht=Bs(t=>t.replace(B_,(e,n)=>n?n.toUpperCase():"")),j_=/\B([A-Z])/g,qn=Bs(t=>t.replace(j_,"-$1").toLowerCase()),js=Bs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wa=Bs(t=>t?`on${js(t)}`:""),Ar=(t,e)=>!Object.is(t,e),$s=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Hs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},zs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ad;const $_=()=>ad||(ad=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Gn;const qs=[];class H_{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Gn&&(this.parent=Gn,this.index=(Gn.scopes||(Gn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(qs.push(this),Gn=this)}off(){this.active&&(qs.pop(),Gn=qs[qs.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function z_(t,e){e=e||Gn,e&&e.active&&e.effects.push(t)}const Ba=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ld=t=>(t.w&En)>0,cd=t=>(t.n&En)>0,q_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=En},G_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];ld(r)&&!cd(r)?r.delete(t):e[n++]=r,r.w&=~En,r.n&=~En}e.length=n}},ja=new WeakMap;let kr=0,En=1;const $a=30,Nr=[];let Kn;const Yn=Symbol(""),Ha=Symbol("");class za{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],z_(this,i)}run(){if(!this.active)return this.fn();if(!Nr.includes(this))try{return Nr.push(Kn=this),K_(),En=1<<++kr,kr<=$a?q_(this):ud(this),this.fn()}finally{kr<=$a&&G_(this),En=1<<--kr,In(),Nr.pop();const e=Nr.length;Kn=e>0?Nr[e-1]:void 0}}stop(){this.active&&(ud(this),this.onStop&&this.onStop(),this.active=!1)}}function ud(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Fi=!0;const qa=[];function Qn(){qa.push(Fi),Fi=!1}function K_(){qa.push(Fi),Fi=!0}function In(){const t=qa.pop();Fi=t===void 0?!0:t}function gt(t,e,n){if(!dd())return;let i=ja.get(t);i||ja.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Ba()),hd(r)}function dd(){return Fi&&Kn!==void 0}function hd(t,e){let n=!1;kr<=$a?cd(t)||(t.n|=En,n=!ld(t)):n=!t.has(Kn),n&&(t.add(Kn),Kn.deps.push(t))}function cn(t,e,n,i,r,s){const o=ja.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?Va(n)&&a.push(o.get("length")):(a.push(o.get(Yn)),Di(t)&&a.push(o.get(Ha)));break;case"delete":ne(t)||(a.push(o.get(Yn)),Di(t)&&a.push(o.get(Ha)));break;case"set":Di(t)&&a.push(o.get(Yn));break}if(a.length===1)a[0]&&Ga(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ga(Ba(l))}}function Ga(t,e){for(const n of ne(t)?t:[...t])(n!==Kn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Y_=Ma("__proto__,__v_isRef,__isVue"),fd=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Ua)),Q_=Ka(),J_=Ka(!1,!0),X_=Ka(!0),pd=Z_();function Z_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=pe(this);for(let s=0,o=this.length;s<o;s++)gt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(pe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qn();const i=pe(this)[e].apply(this,n);return In(),i}}),t}function Ka(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_raw"&&s===(t?e?mv:bd:e?Id:Ed).get(i))return i;const o=ne(i);if(!t&&o&&ge(pd,r))return Reflect.get(pd,r,s);const a=Reflect.get(i,r,s);return(Ua(r)?fd.has(r):Y_(r))||(t||gt(i,"get",r),e)?a:Me(a)?!o||!Va(r)?a.value:a:xe(a)?t?Zs(a):Cn(a):a}}const ev=md(),tv=md(!0);function md(t=!1){return function(n,i,r,s){let o=n[i];if(!t&&(r=pe(r),o=pe(o),!ne(n)&&Me(o)&&!Me(r)))return o.value=r,!0;const a=ne(n)&&Va(i)?Number(i)<n.length:ge(n,i),l=Reflect.set(n,i,r,s);return n===pe(s)&&(a?Ar(r,o)&&cn(n,"set",i,r):cn(n,"add",i,r)),l}}function nv(t,e){const n=ge(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&cn(t,"delete",e,void 0),i}function iv(t,e){const n=Reflect.has(t,e);return(!Ua(e)||!fd.has(e))&&gt(t,"has",e),n}function rv(t){return gt(t,"iterate",ne(t)?"length":Yn),Reflect.ownKeys(t)}const gd={get:Q_,set:ev,deleteProperty:nv,has:iv,ownKeys:rv},sv={get:X_,set(t,e){return!0},deleteProperty(t,e){return!0}},ov=Je({},gd,{get:J_,set:tv}),Ya=t=>t,Gs=t=>Reflect.getPrototypeOf(t);function Ks(t,e,n=!1,i=!1){t=t.__v_raw;const r=pe(t),s=pe(e);e!==s&&!n&&gt(r,"get",e),!n&&gt(r,"get",s);const{has:o}=Gs(r),a=i?Ya:n?Za:Pr;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Ys(t,e=!1){const n=this.__v_raw,i=pe(n),r=pe(t);return t!==r&&!e&&gt(i,"has",t),!e&&gt(i,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function Qs(t,e=!1){return t=t.__v_raw,!e&&gt(pe(t),"iterate",Yn),Reflect.get(t,"size",t)}function _d(t){t=pe(t);const e=pe(this);return Gs(e).has.call(e,t)||(e.add(t),cn(e,"add",t,t)),this}function vd(t,e){e=pe(e);const n=pe(this),{has:i,get:r}=Gs(n);let s=i.call(n,t);s||(t=pe(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Ar(e,o)&&cn(n,"set",t,e):cn(n,"add",t,e),this}function yd(t){const e=pe(this),{has:n,get:i}=Gs(e);let r=n.call(e,t);r||(t=pe(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&cn(e,"delete",t,void 0),s}function wd(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&cn(t,"clear",void 0,void 0),n}function Js(t,e){return function(i,r){const s=this,o=s.__v_raw,a=pe(o),l=e?Ya:t?Za:Pr;return!t&&gt(a,"iterate",Yn),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Xs(t,e,n){return function(...i){const r=this.__v_raw,s=pe(r),o=Di(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Ya:e?Za:Pr;return!e&&gt(s,"iterate",l?Ha:Yn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){return t==="delete"?!1:this}}function av(){const t={get(s){return Ks(this,s)},get size(){return Qs(this)},has:Ys,add:_d,set:vd,delete:yd,clear:wd,forEach:Js(!1,!1)},e={get(s){return Ks(this,s,!1,!0)},get size(){return Qs(this)},has:Ys,add:_d,set:vd,delete:yd,clear:wd,forEach:Js(!1,!0)},n={get(s){return Ks(this,s,!0)},get size(){return Qs(this,!0)},has(s){return Ys.call(this,s,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Js(!0,!1)},i={get(s){return Ks(this,s,!0,!0)},get size(){return Qs(this,!0)},has(s){return Ys.call(this,s,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Xs(s,!1,!1),n[s]=Xs(s,!0,!1),e[s]=Xs(s,!1,!0),i[s]=Xs(s,!0,!0)}),[t,n,e,i]}const[lv,cv,uv,dv]=av();function Qa(t,e){const n=e?t?dv:uv:t?cv:lv;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ge(n,r)&&r in i?n:i,r,s)}const hv={get:Qa(!1,!1)},fv={get:Qa(!1,!0)},pv={get:Qa(!0,!1)},Ed=new WeakMap,Id=new WeakMap,bd=new WeakMap,mv=new WeakMap;function gv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _v(t){return t.__v_skip||!Object.isExtensible(t)?0:gv(W_(t))}function Cn(t){return t&&t.__v_isReadonly?t:Ja(t,!1,gd,hv,Ed)}function vv(t){return Ja(t,!1,ov,fv,Id)}function Zs(t){return Ja(t,!0,sv,pv,bd)}function Ja(t,e,n,i,r){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=_v(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Ui(t){return Cd(t)?Ui(t.__v_raw):!!(t&&t.__v_isReactive)}function Cd(t){return!!(t&&t.__v_isReadonly)}function Td(t){return Ui(t)||Cd(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Xa(t){return Hs(t,"__v_skip",!0),t}const Pr=t=>xe(t)?Cn(t):t,Za=t=>xe(t)?Zs(t):t;function Sd(t){dd()&&(t=pe(t),t.dep||(t.dep=Ba()),hd(t.dep))}function Rd(t,e){t=pe(t),t.dep&&Ga(t.dep)}function Me(t){return Boolean(t&&t.__v_isRef===!0)}function Mt(t){return Ad(t,!1)}function yv(t){return Ad(t,!0)}function Ad(t,e){return Me(t)?t:new wv(t,e)}class wv{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:Pr(e)}get value(){return Sd(this),this._value}set value(e){e=this._shallow?e:pe(e),Ar(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Pr(e),Rd(this))}}function z(t){return Me(t)?t.value:t}const Ev={get:(t,e,n)=>z(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function kd(t){return Ui(t)?t:new Proxy(t,Ev)}class Iv{constructor(e,n){this._object=e,this._key=n,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function Tn(t,e){const n=t[e];return Me(n)?n:new Iv(t,e)}class bv{constructor(e,n,i){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new za(e,()=>{this._dirty||(this._dirty=!0,Rd(this))}),this.__v_isReadonly=i}get value(){const e=pe(this);return Sd(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ye(t,e){let n,i;const r=re(t);return r?(n=t,i=xt):(n=t.get,i=t.set),new bv(n,i,r||!i)}Promise.resolve();function Cv(t,e,...n){const i=t.vnode.props||Ie;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=i[u]||Ie;h?r=n.map(p=>p.trim()):d&&(r=n.map(zs))}let a,l=i[a=Wa(e)]||i[a=Wa(Ht(e))];!l&&s&&(l=i[a=Wa(qn(e))]),l&&Tt(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Tt(c,t,6,r)}}function Nd(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!re(t)){const l=c=>{const u=Nd(c,e,!0);u&&(a=!0,Je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(i.set(t,null),null):(ne(s)?s.forEach(l=>o[l]=null):Je(o,s),i.set(t,o),o)}function el(t,e){return!t||!Us(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,qn(e))||ge(t,e))}let bt=null,eo=null;function to(t){const e=bt;return bt=t,eo=t&&t.type.__scopeId||null,e}function RN(t){eo=t}function AN(){eo=null}function Tv(t,e=bt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&nh(-1);const s=to(e),o=t(...r);return to(s),i._d&&nh(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function tl(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:p,ctx:g,inheritAttrs:R}=t;let I,y;const T=to(t);try{if(n.shapeFlag&4){const D=r||i;I=Yt(u.call(D,D,d,s,p,h,g)),y=l}else{const D=e;I=Yt(D.length>1?D(s,{attrs:l,slots:a,emit:c}):D(s,null)),y=e.props?l:Sv(l)}}catch(D){xr.length=0,ho(D,t,1),I=_t(Kt)}let M=I;if(y&&R!==!1){const D=Object.keys(y),{shapeFlag:B}=M;D.length&&B&(1|6)&&(o&&D.some(Fa)&&(y=Rv(y,o)),M=Bi(M,y))}return n.dirs&&(M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),I=M,to(T),I}const Sv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Us(n))&&((e||(e={}))[n]=t[n]);return e},Rv=(t,e)=>{const n={};for(const i in t)(!Fa(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Av(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Pd(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==i[h]&&!el(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Pd(i,o,c):!0:!!o;return!1}function Pd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!el(n,s))return!0}return!1}function kv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Nv=t=>t.__isSuspense;function Pv(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Oy(t)}function Vi(t,e){if(je){let n=je.provides;const i=je.parent&&je.parent.provides;i===n&&(n=je.provides=Object.create(i)),n[t]=e}}function zt(t,e,n=!1){const i=je||bt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&re(e)?e.call(i.proxy):e}}function Ov(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ro(()=>{t.isMounted=!0}),Or(()=>{t.isUnmounting=!0}),t}const Ct=[Function,Array],xv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ct,onEnter:Ct,onAfterEnter:Ct,onEnterCancelled:Ct,onBeforeLeave:Ct,onLeave:Ct,onAfterLeave:Ct,onLeaveCancelled:Ct,onBeforeAppear:Ct,onAppear:Ct,onAfterAppear:Ct,onAppearCancelled:Ct},setup(t,{slots:e}){const n=oh(),i=Ov();let r;return()=>{const s=e.default&&Ld(e.default(),!0);if(!s||!s.length)return;const o=pe(t),{mode:a}=o,l=s[0];if(i.isLeaving)return il(l);const c=Md(l);if(!c)return il(l);const u=nl(c,o,i,n);rl(c,u);const d=n.subTree,h=d&&Md(d);let p=!1;const{getTransitionKey:g}=c.type;if(g){const R=g();r===void 0?r=R:R!==r&&(r=R,p=!0)}if(h&&h.type!==Kt&&(!ei(c,h)||p)){const R=nl(h,o,i,n);if(rl(h,R),a==="out-in")return i.isLeaving=!0,R.afterLeave=()=>{i.isLeaving=!1,n.update()},il(l);a==="in-out"&&c.type!==Kt&&(R.delayLeave=(I,y,T)=>{const M=xd(i,h);M[String(h.key)]=h,I._leaveCb=()=>{y(),I._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=T})}return l}}},Od=xv;function xd(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function nl(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:R,onAppear:I,onAfterAppear:y,onAppearCancelled:T}=e,M=String(t.key),D=xd(n,t),B=(q,te)=>{q&&Tt(q,i,9,te)},X={mode:s,persisted:o,beforeEnter(q){let te=a;if(!n.isMounted)if(r)te=R||a;else return;q._leaveCb&&q._leaveCb(!0);const j=D[M];j&&ei(t,j)&&j.el._leaveCb&&j.el._leaveCb(),B(te,[q])},enter(q){let te=l,j=c,ie=u;if(!n.isMounted)if(r)te=I||l,j=y||c,ie=T||u;else return;let ce=!1;const W=q._enterCb=de=>{ce||(ce=!0,de?B(ie,[q]):B(j,[q]),X.delayedLeave&&X.delayedLeave(),q._enterCb=void 0)};te?(te(q,W),te.length<=1&&W()):W()},leave(q,te){const j=String(t.key);if(q._enterCb&&q._enterCb(!0),n.isUnmounting)return te();B(d,[q]);let ie=!1;const ce=q._leaveCb=W=>{ie||(ie=!0,te(),W?B(g,[q]):B(p,[q]),q._leaveCb=void 0,D[j]===t&&delete D[j])};D[j]=t,h?(h(q,ce),h.length<=1&&ce()):ce()},clone(q){return nl(q,e,n,i)}};return X}function il(t){if(no(t))return t=Bi(t),t.children=null,t}function Md(t){return no(t)?t.children?t.children[0]:void 0:t}function rl(t,e){t.shapeFlag&6&&t.component?rl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ld(t,e=!1){let n=[],i=0;for(let r=0;r<t.length;r++){const s=t[r];s.type===Gt?(s.patchFlag&128&&i++,n=n.concat(Ld(s.children,e))):(e||s.type!==Kt)&&n.push(s)}if(i>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Wi(t){return re(t)?{setup:t,name:t.name}:t}const sl=t=>!!t.type.__asyncLoader,no=t=>t.type.__isKeepAlive;function Mv(t,e){Dd(t,"a",e)}function Lv(t,e){Dd(t,"da",e)}function Dd(t,e,n=je){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}t()});if(io(e,i,n),n){let r=n.parent;for(;r&&r.parent;)no(r.parent.vnode)&&Dv(i,e,n,r),r=r.parent}}function Dv(t,e,n,i){const r=io(e,t,i,!0);Fd(()=>{nd(i[e],r)},n)}function io(t,e,n=je,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qn(),ji(n);const a=Tt(e,n,t,o);return ti(),In(),a});return i?r.unshift(s):r.push(s),s}}const un=t=>(e,n=je)=>(!uo||t==="sp")&&io(t,e,n),Fv=un("bm"),ro=un("m"),Uv=un("bu"),Vv=un("u"),Or=un("bum"),Fd=un("um"),Wv=un("sp"),Bv=un("rtg"),jv=un("rtc");function $v(t,e=je){io("ec",t,e)}let ol=!0;function Hv(t){const e=Wd(t),n=t.proxy,i=t.ctx;ol=!1,e.beforeCreate&&Ud(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:g,activated:R,deactivated:I,beforeDestroy:y,beforeUnmount:T,destroyed:M,unmounted:D,render:B,renderTracked:X,renderTriggered:q,errorCaptured:te,serverPrefetch:j,expose:ie,inheritAttrs:ce,components:W,directives:de,filters:ke}=e;if(c&&zv(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const ue=o[le];re(ue)&&(i[le]=ue.bind(n))}if(r){const le=r.call(n,n);xe(le)&&(t.data=Cn(le))}if(ol=!0,s)for(const le in s){const ue=s[le],U=re(ue)?ue.bind(n,n):re(ue.get)?ue.get.bind(n,n):xt,me=!re(ue)&&re(ue.set)?ue.set.bind(n):xt,Re=ye({get:U,set:me});Object.defineProperty(i,le,{enumerable:!0,configurable:!0,get:()=>Re.value,set:it=>Re.value=it})}if(a)for(const le in a)Vd(a[le],i,n,le);if(l){const le=re(l)?l.call(n):l;Reflect.ownKeys(le).forEach(ue=>{Vi(ue,le[ue])})}u&&Ud(u,t,"c");function he(le,ue){ne(ue)?ue.forEach(U=>le(U.bind(n))):ue&&le(ue.bind(n))}if(he(Fv,d),he(ro,h),he(Uv,p),he(Vv,g),he(Mv,R),he(Lv,I),he($v,te),he(jv,X),he(Bv,q),he(Or,T),he(Fd,D),he(Wv,j),ne(ie))if(ie.length){const le=t.exposed||(t.exposed={});ie.forEach(ue=>{Object.defineProperty(le,ue,{get:()=>n[ue],set:U=>n[ue]=U})})}else t.exposed||(t.exposed={});B&&t.render===xt&&(t.render=B),ce!=null&&(t.inheritAttrs=ce),W&&(t.components=W),de&&(t.directives=de)}function zv(t,e,n=xt,i=!1){ne(t)&&(t=al(t));for(const r in t){const s=t[r];let o;xe(s)?"default"in s?o=zt(s.from||r,s.default,!0):o=zt(s.from||r):o=zt(s),Me(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ud(t,e,n){Tt(ne(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Vd(t,e,n,i){const r=i.includes(".")?bh(n,i):()=>n[i];if(Fe(t)){const s=e[t];re(s)&&lt(r,s)}else if(re(t))lt(r,t.bind(n));else if(xe(t))if(ne(t))t.forEach(s=>Vd(s,e,n,i));else{const s=re(t.handler)?t.handler.bind(n):e[t.handler];re(s)&&lt(r,s,t)}}function Wd(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>so(l,c,o,!0)),so(l,e,o)),s.set(e,l),l}function so(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&so(t,s,n,!0),r&&r.forEach(o=>so(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=qv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qv={data:Bd,props:Jn,emits:Jn,methods:Jn,computed:Jn,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:Jn,directives:Jn,watch:Kv,provide:Bd,inject:Gv};function Bd(t,e){return e?t?function(){return Je(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function Gv(t,e){return Jn(al(t),al(e))}function al(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Jn(t,e){return t?Je(Je(Object.create(null),t),e):e}function Kv(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const i in e)n[i]=rt(t[i],e[i]);return n}function Yv(t,e,n,i=!1){const r={},s={};Hs(s,ao,1),t.propsDefaults=Object.create(null),jd(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:vv(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Qv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=pe(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];const p=e[h];if(l)if(ge(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=Ht(h);r[g]=ll(l,a,g,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{jd(t,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!ge(e,d)&&((u=qn(d))===d||!ge(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=ll(l,a,d,void 0,t,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!ge(e,d))&&(delete s[d],c=!0)}c&&cn(t,"set","$attrs")}function jd(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ws(l))continue;const c=e[l];let u;r&&ge(r,u=Ht(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:el(t.emitsOptions,l)||c!==i[l]&&(i[l]=c,o=!0)}if(s){const l=pe(n),c=a||Ie;for(let u=0;u<s.length;u++){const d=s[u];n[d]=ll(r,l,d,c[d],t,!ge(c,d))}}return o}function ll(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&re(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(ji(r),i=c[n]=l.call(null,e),ti())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===qn(n))&&(i=!0))}return i}function $d(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!re(t)){const u=d=>{l=!0;const[h,p]=$d(d,e,!0);Je(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return i.set(t,Li),Li;if(ne(s))for(let u=0;u<s.length;u++){const d=Ht(s[u]);Hd(d)&&(o[d]=Ie)}else if(s)for(const u in s){const d=Ht(u);if(Hd(d)){const h=s[u],p=o[d]=ne(h)||re(h)?{type:h}:h;if(p){const g=Gd(Boolean,p.type),R=Gd(String,p.type);p[0]=g>-1,p[1]=R<0||g<R,(g>-1||ge(p,"default"))&&a.push(d)}}}const c=[o,a];return i.set(t,c),c}function Hd(t){return t[0]!=="$"}function zd(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function qd(t,e){return zd(t)===zd(e)}function Gd(t,e){return ne(e)?e.findIndex(n=>qd(n,t)):re(e)&&qd(e,t)?0:-1}const Kd=t=>t[0]==="_"||t==="$stable",cl=t=>ne(t)?t.map(Yt):[Yt(t)],Jv=(t,e,n)=>{const i=Tv((...r)=>cl(e(...r)),n);return i._c=!1,i},Yd=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Kd(r))continue;const s=t[r];if(re(s))e[r]=Jv(r,s,i);else if(s!=null){const o=cl(s);e[r]=()=>o}}},Qd=(t,e)=>{const n=cl(e);t.slots.default=()=>n},Xv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),Hs(e,"_",n)):Yd(e,t.slots={})}else t.slots={},e&&Qd(t,e);Hs(t.slots,ao,1)},Zv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Ie;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Je(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Yd(e,r)),o=e}else e&&(Qd(t,e),o={default:1});if(s)for(const a in r)!Kd(a)&&!(a in o)&&delete r[a]};function kN(t,e){const n=bt;if(n===null)return t;const i=n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Ie]=e[s];re(o)&&(o={mounted:o,updated:o}),o.deep&&ni(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Xn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Qn(),Tt(l,n,8,[t.el,a,t,e]),In())}}function Jd(){return{app:null,config:{isNativeTag:F_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ey=0;function ty(t,e){return function(i,r=null){r!=null&&!xe(r)&&(r=null);const s=Jd(),o=new Set;let a=!1;const l=s.app={_uid:ey++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:My,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&re(c.install)?(o.add(c),c.install(l,...u)):re(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const h=_t(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,vl(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}const st=Pv;function ny(t){return iy(t)}function iy(t,e){const n=$_();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=xt,cloneNode:g,insertStaticContent:R}=t,I=(f,m,_,w=null,b=null,P=null,V=!1,A=null,O=!!m.dynamicChildren)=>{if(f===m)return;f&&!ei(f,m)&&(w=G(f),De(f,b,P,!0),f=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:S,ref:K,shapeFlag:H}=m;switch(S){case fl:y(f,m,_,w);break;case Kt:T(f,m,_,w);break;case pl:f==null&&M(m,_,w,V);break;case Gt:de(f,m,_,w,b,P,V,A,O);break;default:H&1?X(f,m,_,w,b,P,V,A,O):H&6?ke(f,m,_,w,b,P,V,A,O):(H&64||H&128)&&S.process(f,m,_,w,b,P,V,A,O,C)}K!=null&&b&&ul(K,f&&f.ref,P,m||f,!m)},y=(f,m,_,w)=>{if(f==null)i(m.el=a(m.children),_,w);else{const b=m.el=f.el;m.children!==f.children&&c(b,m.children)}},T=(f,m,_,w)=>{f==null?i(m.el=l(m.children||""),_,w):m.el=f.el},M=(f,m,_,w)=>{[f.el,f.anchor]=R(f.children,m,_,w)},D=({el:f,anchor:m},_,w)=>{let b;for(;f&&f!==m;)b=h(f),i(f,_,w),f=b;i(m,_,w)},B=({el:f,anchor:m})=>{let _;for(;f&&f!==m;)_=h(f),r(f),f=_;r(m)},X=(f,m,_,w,b,P,V,A,O)=>{V=V||m.type==="svg",f==null?q(m,_,w,b,P,V,A,O):ie(f,m,b,P,V,A,O)},q=(f,m,_,w,b,P,V,A)=>{let O,S;const{type:K,props:H,shapeFlag:Y,transition:ee,patchFlag:fe,dirs:Ne}=f;if(f.el&&g!==void 0&&fe===-1)O=f.el=g(f.el);else{if(O=f.el=o(f.type,P,H&&H.is,H),Y&8?u(O,f.children):Y&16&&j(f.children,O,null,w,b,P&&K!=="foreignObject",V,A),Ne&&Xn(f,null,w,"created"),H){for(const Ae in H)Ae!=="value"&&!Ws(Ae)&&s(O,Ae,null,H[Ae],P,f.children,w,b,L);"value"in H&&s(O,"value",null,H.value),(S=H.onVnodeBeforeMount)&&qt(S,w,f)}te(O,f,f.scopeId,V,w)}Ne&&Xn(f,null,w,"beforeMount");const Ee=(!b||b&&!b.pendingBranch)&&ee&&!ee.persisted;Ee&&ee.beforeEnter(O),i(O,m,_),((S=H&&H.onVnodeMounted)||Ee||Ne)&&st(()=>{S&&qt(S,w,f),Ee&&ee.enter(O),Ne&&Xn(f,null,w,"mounted")},b)},te=(f,m,_,w,b)=>{if(_&&p(f,_),w)for(let P=0;P<w.length;P++)p(f,w[P]);if(b){let P=b.subTree;if(m===P){const V=b.vnode;te(f,V,V.scopeId,V.slotScopeIds,b.parent)}}},j=(f,m,_,w,b,P,V,A,O=0)=>{for(let S=O;S<f.length;S++){const K=f[S]=A?Sn(f[S]):Yt(f[S]);I(null,K,m,_,w,b,P,V,A)}},ie=(f,m,_,w,b,P,V)=>{const A=m.el=f.el;let{patchFlag:O,dynamicChildren:S,dirs:K}=m;O|=f.patchFlag&16;const H=f.props||Ie,Y=m.props||Ie;let ee;(ee=Y.onVnodeBeforeUpdate)&&qt(ee,_,m,f),K&&Xn(m,f,_,"beforeUpdate");const fe=b&&m.type!=="foreignObject";if(S?ce(f.dynamicChildren,S,A,_,w,fe,P):V||U(f,m,A,null,_,w,fe,P,!1),O>0){if(O&16)W(A,m,H,Y,_,w,b);else if(O&2&&H.class!==Y.class&&s(A,"class",null,Y.class,b),O&4&&s(A,"style",H.style,Y.style,b),O&8){const Ne=m.dynamicProps;for(let Ee=0;Ee<Ne.length;Ee++){const Ae=Ne[Ee],Ot=H[Ae],Mi=Y[Ae];(Mi!==Ot||Ae==="value")&&s(A,Ae,Ot,Mi,b,f.children,_,w,L)}}O&1&&f.children!==m.children&&u(A,m.children)}else!V&&S==null&&W(A,m,H,Y,_,w,b);((ee=Y.onVnodeUpdated)||K)&&st(()=>{ee&&qt(ee,_,m,f),K&&Xn(m,f,_,"updated")},w)},ce=(f,m,_,w,b,P,V)=>{for(let A=0;A<m.length;A++){const O=f[A],S=m[A],K=O.el&&(O.type===Gt||!ei(O,S)||O.shapeFlag&(6|64))?d(O.el):_;I(O,S,K,null,w,b,P,V,!0)}},W=(f,m,_,w,b,P,V)=>{if(_!==w){for(const A in w){if(Ws(A))continue;const O=w[A],S=_[A];O!==S&&A!=="value"&&s(f,A,S,O,V,m.children,b,P,L)}if(_!==Ie)for(const A in _)!Ws(A)&&!(A in w)&&s(f,A,_[A],null,V,m.children,b,P,L);"value"in w&&s(f,"value",_.value,w.value)}},de=(f,m,_,w,b,P,V,A,O)=>{const S=m.el=f?f.el:a(""),K=m.anchor=f?f.anchor:a("");let{patchFlag:H,dynamicChildren:Y,slotScopeIds:ee}=m;ee&&(A=A?A.concat(ee):ee),f==null?(i(S,_,w),i(K,_,w),j(m.children,_,K,b,P,V,A,O)):H>0&&H&64&&Y&&f.dynamicChildren?(ce(f.dynamicChildren,Y,_,b,P,V,A),(m.key!=null||b&&m===b.subTree)&&Xd(f,m,!0)):U(f,m,_,K,b,P,V,A,O)},ke=(f,m,_,w,b,P,V,A,O)=>{m.slotScopeIds=A,f==null?m.shapeFlag&512?b.ctx.activate(m,_,w,V,O):tt(m,_,w,b,P,V,O):he(f,m,O)},tt=(f,m,_,w,b,P,V)=>{const A=f.component=gy(f,w,b);if(no(f)&&(A.ctx.renderer=C),_y(A),A.asyncDep){if(b&&b.registerDep(A,le),!f.el){const O=A.subTree=_t(Kt);T(null,O,m,_)}return}le(A,f,m,_,b,P,V)},he=(f,m,_)=>{const w=m.component=f.component;if(Av(f,m,_))if(w.asyncDep&&!w.asyncResolved){ue(w,m,_);return}else w.next=m,Ny(w.update),w.update();else m.component=f.component,m.el=f.el,w.vnode=m},le=(f,m,_,w,b,P,V)=>{const A=()=>{if(f.isMounted){let{next:K,bu:H,u:Y,parent:ee,vnode:fe}=f,Ne=K,Ee;O.allowRecurse=!1,K?(K.el=fe.el,ue(f,K,V)):K=fe,H&&$s(H),(Ee=K.props&&K.props.onVnodeBeforeUpdate)&&qt(Ee,ee,K,fe),O.allowRecurse=!0;const Ae=tl(f),Ot=f.subTree;f.subTree=Ae,I(Ot,Ae,d(Ot.el),G(Ot),f,b,P),K.el=Ae.el,Ne===null&&kv(f,Ae.el),Y&&st(Y,b),(Ee=K.props&&K.props.onVnodeUpdated)&&st(()=>qt(Ee,ee,K,fe),b)}else{let K;const{el:H,props:Y}=m,{bm:ee,m:fe,parent:Ne}=f,Ee=sl(m);if(O.allowRecurse=!1,ee&&$s(ee),!Ee&&(K=Y&&Y.onVnodeBeforeMount)&&qt(K,Ne,m),O.allowRecurse=!0,H&&x){const Ae=()=>{f.subTree=tl(f),x(H,f.subTree,f,b,null)};Ee?m.type.__asyncLoader().then(()=>!f.isUnmounted&&Ae()):Ae()}else{const Ae=f.subTree=tl(f);I(null,Ae,_,w,f,b,P),m.el=Ae.el}if(fe&&st(fe,b),!Ee&&(K=Y&&Y.onVnodeMounted)){const Ae=m;st(()=>qt(K,Ne,Ae),b)}m.shapeFlag&256&&f.a&&st(f.a,b),f.isMounted=!0,m=_=w=null}},O=new za(A,()=>gh(f.update),f.scope),S=f.update=O.run.bind(O);S.id=f.uid,O.allowRecurse=S.allowRecurse=!0,S()},ue=(f,m,_)=>{m.component=f;const w=f.vnode.props;f.vnode=m,f.next=null,Qv(f,m.props,w,_),Zv(f,m.children,_),Qn(),Il(void 0,f.update),In()},U=(f,m,_,w,b,P,V,A,O=!1)=>{const S=f&&f.children,K=f?f.shapeFlag:0,H=m.children,{patchFlag:Y,shapeFlag:ee}=m;if(Y>0){if(Y&128){Re(S,H,_,w,b,P,V,A,O);return}else if(Y&256){me(S,H,_,w,b,P,V,A,O);return}}ee&8?(K&16&&L(S,b,P),H!==S&&u(_,H)):K&16?ee&16?Re(S,H,_,w,b,P,V,A,O):L(S,b,P,!0):(K&8&&u(_,""),ee&16&&j(H,_,w,b,P,V,A,O))},me=(f,m,_,w,b,P,V,A,O)=>{f=f||Li,m=m||Li;const S=f.length,K=m.length,H=Math.min(S,K);let Y;for(Y=0;Y<H;Y++){const ee=m[Y]=O?Sn(m[Y]):Yt(m[Y]);I(f[Y],ee,_,null,b,P,V,A,O)}S>K?L(f,b,P,!0,!1,H):j(m,_,w,b,P,V,A,O,H)},Re=(f,m,_,w,b,P,V,A,O)=>{let S=0;const K=m.length;let H=f.length-1,Y=K-1;for(;S<=H&&S<=Y;){const ee=f[S],fe=m[S]=O?Sn(m[S]):Yt(m[S]);if(ei(ee,fe))I(ee,fe,_,null,b,P,V,A,O);else break;S++}for(;S<=H&&S<=Y;){const ee=f[H],fe=m[Y]=O?Sn(m[Y]):Yt(m[Y]);if(ei(ee,fe))I(ee,fe,_,null,b,P,V,A,O);else break;H--,Y--}if(S>H){if(S<=Y){const ee=Y+1,fe=ee<K?m[ee].el:w;for(;S<=Y;)I(null,m[S]=O?Sn(m[S]):Yt(m[S]),_,fe,b,P,V,A,O),S++}}else if(S>Y)for(;S<=H;)De(f[S],b,P,!0),S++;else{const ee=S,fe=S,Ne=new Map;for(S=fe;S<=Y;S++){const mt=m[S]=O?Sn(m[S]):Yt(m[S]);mt.key!=null&&Ne.set(mt.key,S)}let Ee,Ae=0;const Ot=Y-fe+1;let Mi=!1,Ku=0;const Rr=new Array(Ot);for(S=0;S<Ot;S++)Rr[S]=0;for(S=ee;S<=H;S++){const mt=f[S];if(Ae>=Ot){De(mt,b,P,!0);continue}let $t;if(mt.key!=null)$t=Ne.get(mt.key);else for(Ee=fe;Ee<=Y;Ee++)if(Rr[Ee-fe]===0&&ei(mt,m[Ee])){$t=Ee;break}$t===void 0?De(mt,b,P,!0):(Rr[$t-fe]=S+1,$t>=Ku?Ku=$t:Mi=!0,I(mt,m[$t],_,null,b,P,V,A,O),Ae++)}const Yu=Mi?ry(Rr):Li;for(Ee=Yu.length-1,S=Ot-1;S>=0;S--){const mt=fe+S,$t=m[mt],Qu=mt+1<K?m[mt+1].el:w;Rr[S]===0?I(null,$t,_,Qu,b,P,V,A,O):Mi&&(Ee<0||S!==Yu[Ee]?it($t,_,Qu,2):Ee--)}}},it=(f,m,_,w,b=null)=>{const{el:P,type:V,transition:A,children:O,shapeFlag:S}=f;if(S&6){it(f.component.subTree,m,_,w);return}if(S&128){f.suspense.move(m,_,w);return}if(S&64){V.move(f,m,_,C);return}if(V===Gt){i(P,m,_);for(let H=0;H<O.length;H++)it(O[H],m,_,w);i(f.anchor,m,_);return}if(V===pl){D(f,m,_);return}if(w!==2&&S&1&&A)if(w===0)A.beforeEnter(P),i(P,m,_),st(()=>A.enter(P),b);else{const{leave:H,delayLeave:Y,afterLeave:ee}=A,fe=()=>i(P,m,_),Ne=()=>{H(P,()=>{fe(),ee&&ee()})};Y?Y(P,fe,Ne):Ne()}else i(P,m,_)},De=(f,m,_,w=!1,b=!1)=>{const{type:P,props:V,ref:A,children:O,dynamicChildren:S,shapeFlag:K,patchFlag:H,dirs:Y}=f;if(A!=null&&ul(A,null,_,f,!0),K&256){m.ctx.deactivate(f);return}const ee=K&1&&Y,fe=!sl(f);let Ne;if(fe&&(Ne=V&&V.onVnodeBeforeUnmount)&&qt(Ne,m,f),K&6)$(f.component,_,w);else{if(K&128){f.suspense.unmount(_,w);return}ee&&Xn(f,null,m,"beforeUnmount"),K&64?f.type.remove(f,m,_,b,C,w):S&&(P!==Gt||H>0&&H&64)?L(S,m,_,!1,!0):(P===Gt&&H&(128|256)||!b&&K&16)&&L(O,m,_),w&&ln(f)}(fe&&(Ne=V&&V.onVnodeUnmounted)||ee)&&st(()=>{Ne&&qt(Ne,m,f),ee&&Xn(f,null,m,"unmounted")},_)},ln=f=>{const{type:m,el:_,anchor:w,transition:b}=f;if(m===Gt){E(_,w);return}if(m===pl){B(f);return}const P=()=>{r(_),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:V,delayLeave:A}=b,O=()=>V(_,P);A?A(f.el,P,O):O()}else P()},E=(f,m)=>{let _;for(;f!==m;)_=h(f),r(f),f=_;r(m)},$=(f,m,_)=>{const{bum:w,scope:b,update:P,subTree:V,um:A}=f;w&&$s(w),b.stop(),P&&(P.active=!1,De(V,f,m,_)),A&&st(A,m),st(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},L=(f,m,_,w=!1,b=!1,P=0)=>{for(let V=P;V<f.length;V++)De(f[V],m,_,w,b)},G=f=>f.shapeFlag&6?G(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),v=(f,m,_)=>{f==null?m._vnode&&De(m._vnode,null,null,!0):I(m._vnode||null,f,m,null,null,null,_),yh(),m._vnode=f},C={p:I,um:De,m:it,r:ln,mt:tt,mc:j,pc:U,pbc:ce,n:G,o:t};let F,x;return e&&([F,x]=e(C)),{render:v,hydrate:F,createApp:ty(v,F)}}function ul(t,e,n,i,r=!1){if(ne(t)){t.forEach((h,p)=>ul(h,e&&(ne(e)?e[p]:e),n,i,r));return}if(sl(i)&&!r)return;const s=i.shapeFlag&4?vl(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ie?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,ge(d,c)&&(d[c]=null)):Me(c)&&(c.value=null)),Fe(l)){const h=()=>{u[l]=o,ge(d,l)&&(d[l]=o)};o?(h.id=-1,st(h,n)):h()}else if(Me(l)){const h=()=>{l.value=o};o?(h.id=-1,st(h,n)):h()}else re(l)&&dn(l,a,12,[o,u])}function qt(t,e,n,i=null){Tt(t,e,7,[n,i])}function Xd(t,e,n=!1){const i=t.children,r=e.children;if(ne(i)&&ne(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Sn(r[s]),a.el=o.el),n||Xd(o,a))}}function ry(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const sy=t=>t.__isTeleport,dl="components";function NN(t,e){return eh(dl,t,!0,e)||t}const Zd=Symbol();function hl(t){return Fe(t)?eh(dl,t,!1)||t:t||Zd}function eh(t,e,n=!0,i=!1){const r=bt||je;if(r){const s=r.type;if(t===dl){const a=dh(s);if(a&&(a===e||a===Ht(e)||a===js(Ht(e))))return s}const o=th(r[t]||s[t],e)||th(r.appContext[t],e);return!o&&i?s:o}}function th(t,e){return t&&(t[e]||t[Ht(e)]||t[js(Ht(e))])}const Gt=Symbol(void 0),fl=Symbol(void 0),Kt=Symbol(void 0),pl=Symbol(void 0),xr=[];let Zn=null;function oy(t=!1){xr.push(Zn=t?null:[])}function ay(){xr.pop(),Zn=xr[xr.length-1]||null}let oo=1;function nh(t){oo+=t}function ih(t){return t.dynamicChildren=oo>0?Zn||Li:null,ay(),oo>0&&Zn&&Zn.push(t),t}function PN(t,e,n,i,r,s){return ih(sh(t,e,n,i,r,s,!0))}function ly(t,e,n,i,r){return ih(_t(t,e,n,i,r,!0))}function ml(t){return t?t.__v_isVNode===!0:!1}function ei(t,e){return t.type===e.type&&t.key===e.key}const ao="__vInternal",rh=({key:t})=>t!=null?t:null,lo=({ref:t})=>t!=null?Fe(t)||Me(t)||re(t)?{i:bt,r:t}:t:null;function sh(t,e=null,n=null,i=0,r=null,s=t===Gt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rh(e),ref:e&&lo(e),scopeId:eo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(gl(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),oo>0&&!o&&Zn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Zn.push(l),l}const _t=cy;function cy(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Zd)&&(t=Kt),ml(t)){const a=Bi(t,e,!0);return n&&gl(a,n),a}if(by(t)&&(t=t.__vccOpts),e){e=uy(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=Da(a)),xe(l)&&(Td(l)&&!ne(l)&&(l=Je({},l)),e.style=La(l))}const o=Fe(t)?1:Nv(t)?128:sy(t)?64:xe(t)?4:re(t)?2:0;return sh(t,e,n,i,r,o,s,!0)}function uy(t){return t?Td(t)||ao in t?Je({},t):t:null}function Bi(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?hy(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&rh(a),ref:e&&e.ref?n&&r?ne(r)?r.concat(lo(e)):[r,lo(e)]:lo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bi(t.ssContent),ssFallback:t.ssFallback&&Bi(t.ssFallback),el:t.el,anchor:t.anchor}}function dy(t=" ",e=0){return _t(fl,null,t,e)}function ON(t="",e=!1){return e?(oy(),ly(Kt,null,t)):_t(Kt,null,t)}function Yt(t){return t==null||typeof t=="boolean"?_t(Kt):ne(t)?_t(Gt,null,t.slice()):typeof t=="object"?Sn(t):_t(fl,null,String(t))}function Sn(t){return t.el===null||t.memo?t:Bi(t)}function gl(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(i&(1|64)){const r=e.default;r&&(r._c&&(r._d=!1),gl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ao in e)?e._ctx=bt:r===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),i&64?(n=16,e=[dy(e)]):n=8);t.children=e,t.shapeFlag|=n}function hy(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Da([e.class,i.class]));else if(r==="style")e.style=La([e.style,i.style]);else if(Us(r)){const s=e[r],o=i[r];s!==o&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function xN(t,e,n,i){let r;const s=n&&n[i];if(ne(t)||Fe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(xe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const _l=t=>t?ah(t)?vl(t)||t.proxy:_l(t.parent):null,co=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_l(t.parent),$root:t=>_l(t.root),$emit:t=>t.emit,$options:t=>Wd(t),$forceUpdate:t=>()=>gh(t.update),$nextTick:t=>zi.bind(t.proxy),$watch:t=>xy.bind(t)}),fy={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 0:return i[e];case 1:return r[e];case 3:return n[e];case 2:return s[e]}else{if(i!==Ie&&ge(i,e))return o[e]=0,i[e];if(r!==Ie&&ge(r,e))return o[e]=1,r[e];if((c=t.propsOptions[0])&&ge(c,e))return o[e]=2,s[e];if(n!==Ie&&ge(n,e))return o[e]=3,n[e];ol&&(o[e]=4)}}const u=co[e];let d,h;if(u)return e==="$attrs"&&gt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ie&&ge(n,e))return o[e]=3,n[e];if(h=l.config.globalProperties,ge(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;if(r!==Ie&&ge(r,e))r[e]=n;else if(i!==Ie&&ge(i,e))i[e]=n;else if(ge(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return n[o]!==void 0||t!==Ie&&ge(t,o)||e!==Ie&&ge(e,o)||(a=s[0])&&ge(a,o)||ge(i,o)||ge(co,o)||ge(r.config.globalProperties,o)}},py=Jd();let my=0;function gy(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||py,s={uid:my++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,update:null,scope:new H_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$d(i,r),emitsOptions:Nd(i,r),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:i.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Cv.bind(null,s),t.ce&&t.ce(s),s}let je=null;const oh=()=>je||bt,ji=t=>{je=t,t.scope.on()},ti=()=>{je&&je.scope.off(),je=null};function ah(t){return t.vnode.shapeFlag&4}let uo=!1;function _y(t,e=!1){uo=e;const{props:n,children:i}=t.vnode,r=ah(t);Yv(t,n,r,e),Xv(t,i);const s=r?vy(t,e):void 0;return uo=!1,s}function vy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xa(new Proxy(t.ctx,fy));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?wy(t):null;ji(t),Qn();const s=dn(i,t,0,[t.props,r]);if(In(),ti(),rd(s)){if(s.then(ti,ti),e)return s.then(o=>{lh(t,o,e)}).catch(o=>{ho(o,t,0)});t.asyncDep=s}else lh(t,s,e)}else uh(t,e)}function lh(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=kd(e)),uh(t,n)}let ch;function uh(t,e,n){const i=t.type;if(!t.render){if(!e&&ch&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Je(Je({isCustomElement:s,delimiters:a},o),l);i.render=ch(r,c)}}t.render=i.render||xt}ji(t),Qn(),Hv(t),In(),ti()}function yy(t){return new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}})}function wy(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=yy(t))},slots:t.slots,emit:t.emit,expose:e}}function vl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(kd(Xa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in co)return co[n](t)}}))}const Ey=/(?:^|[-_])(\w)/g,Iy=t=>t.replace(Ey,e=>e.toUpperCase()).replace(/[-_]/g,"");function dh(t){return re(t)&&t.displayName||t.name}function hh(t,e,n=!1){let i=dh(e);if(!i&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(i=r[1])}if(!i&&t&&t.parent){const r=s=>{for(const o in s)if(s[o]===e)return o};i=r(t.components||t.parent.type.components)||r(t.appContext.components)}return i?Iy(i):n?"App":"Anonymous"}function by(t){return re(t)&&"__vccOpts"in t}const Mr=[];function fh(t,...e){Qn();const n=Mr.length?Mr[Mr.length-1].component:null,i=n&&n.appContext.config.warnHandler,r=Cy();if(i)dn(i,n,11,[t+e.join(""),n&&n.proxy,r.map(({vnode:s})=>`at <${hh(n,s.type)}>`).join(`
`),r]);else{const s=[`[Vue warn]: ${t}`,...e];r.length&&s.push(`
`,...Ty(r)),console.warn(...s)}In()}function Cy(){let t=Mr[Mr.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const i=t.component&&t.component.parent;t=i&&i.vnode}return e}function Ty(t){const e=[];return t.forEach((n,i)=>{e.push(...i===0?[]:[`
`],...Sy(n))}),e}function Sy({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",i=t.component?t.component.parent==null:!1,r=` at <${hh(t.component,t.type,i)}`,s=">"+n;return t.props?[r,...Ry(t.props),s]:[r+s]}function Ry(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(i=>{e.push(...ph(i,t[i]))}),n.length>3&&e.push(" ..."),e}function ph(t,e,n){return Fe(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Me(e)?(e=ph(t,pe(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):re(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=pe(e),n?e:[`${t}=`,e])}function dn(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){ho(s,e,n)}return r}function Tt(t,e,n,i){if(re(t)){const s=dn(t,e,n,i);return s&&rd(s)&&s.catch(o=>{ho(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(Tt(t[s],e,n,i));return r}function ho(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){dn(l,null,10,[t,o,a]);return}}Ay(t,n,r,i)}function Ay(t,e,n,i=!0){console.error(t)}let fo=!1,yl=!1;const vt=[];let hn=0;const Lr=[];let Dr=null,$i=0;const Fr=[];let Rn=null,Hi=0;const mh=Promise.resolve();let wl=null,El=null;function zi(t){const e=wl||mh;return t?e.then(this?t.bind(this):t):e}function ky(t){let e=hn+1,n=vt.length;for(;e<n;){const i=e+n>>>1;Ur(vt[i])<t?e=i+1:n=i}return e}function gh(t){(!vt.length||!vt.includes(t,fo&&t.allowRecurse?hn+1:hn))&&t!==El&&(t.id==null?vt.push(t):vt.splice(ky(t.id),0,t),_h())}function _h(){!fo&&!yl&&(yl=!0,wl=mh.then(wh))}function Ny(t){const e=vt.indexOf(t);e>hn&&vt.splice(e,1)}function vh(t,e,n,i){ne(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&n.push(t),_h()}function Py(t){vh(t,Dr,Lr,$i)}function Oy(t){vh(t,Rn,Fr,Hi)}function Il(t,e=null){if(Lr.length){for(El=e,Dr=[...new Set(Lr)],Lr.length=0,$i=0;$i<Dr.length;$i++)Dr[$i]();Dr=null,$i=0,El=null,Il(t,e)}}function yh(t){if(Fr.length){const e=[...new Set(Fr)];if(Fr.length=0,Rn){Rn.push(...e);return}for(Rn=e,Rn.sort((n,i)=>Ur(n)-Ur(i)),Hi=0;Hi<Rn.length;Hi++)Rn[Hi]();Rn=null,Hi=0}}const Ur=t=>t.id==null?1/0:t.id;function wh(t){yl=!1,fo=!0,Il(t),vt.sort((n,i)=>Ur(n)-Ur(i));const e=xt;try{for(hn=0;hn<vt.length;hn++){const n=vt[hn];n&&n.active!==!1&&dn(n,null,14)}}finally{hn=0,vt.length=0,yh(),fo=!1,wl=null,(vt.length||Lr.length||Fr.length)&&wh(t)}}const Eh={};function lt(t,e,n){return Ih(t,e,n)}function Ih(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=Ie){const a=je;let l,c=!1,u=!1;if(Me(t)?(l=()=>t.value,c=!!t._shallow):Ui(t)?(l=()=>t,i=!0):ne(t)?(u=!0,c=t.some(Ui),l=()=>t.map(y=>{if(Me(y))return y.value;if(Ui(y))return ni(y);if(re(y))return dn(y,a,2)})):re(t)?e?l=()=>dn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Tt(t,a,3,[h])}:l=xt,e&&i){const y=l;l=()=>ni(y())}let d,h=y=>{d=I.onStop=()=>{dn(y,a,4)}};if(uo)return h=xt,e?n&&Tt(e,a,3,[l(),u?[]:void 0,h]):l(),xt;let p=u?[]:Eh;const g=()=>{if(!!I.active)if(e){const y=I.run();(i||c||(u?y.some((T,M)=>Ar(T,p[M])):Ar(y,p)))&&(d&&d(),Tt(e,a,3,[y,p===Eh?void 0:p,h]),p=y)}else I.run()};g.allowRecurse=!!e;let R;r==="sync"?R=g:r==="post"?R=()=>st(g,a&&a.suspense):R=()=>{!a||a.isMounted?Py(g):g()};const I=new za(l,R);return e?n?g():p=I.run():r==="post"?st(I.run.bind(I),a&&a.suspense):I.run(),()=>{I.stop(),a&&a.scope&&nd(a.scope.effects,I)}}function xy(t,e,n){const i=this.proxy,r=Fe(t)?t.includes(".")?bh(i,t):()=>i[t]:t.bind(i,i);let s;re(e)?s=e:(s=e.handler,n=e);const o=je;ji(this);const a=Ih(r,s.bind(i),n);return o?ji(o):ti(),a}function bh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function ni(t,e){if(!xe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))ni(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)ni(t[n],e);else if(id(t)||Di(t))t.forEach(n=>{ni(n,e)});else if(od(t))for(const n in t)ni(t[n],e);return t}function ii(t,e,n){const i=arguments.length;return i===2?xe(e)&&!ne(e)?ml(e)?_t(t,null,[e]):_t(t,e):_t(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ml(n)&&(n=[n]),_t(t,e,n))}const My="3.2.19",Ly="http://www.w3.org/2000/svg",qi=typeof document!="undefined"?document:null,Ch=new Map,Dy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?qi.createElementNS(Ly,t):qi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>qi.createTextNode(t),createComment:t=>qi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i){const r=n?n.previousSibling:e.lastChild;let s=Ch.get(t);if(!s){const o=qi.createElement("template");if(o.innerHTML=i?`<svg>${t}</svg>`:t,s=o.content,i){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}Ch.set(t,s)}return e.insertBefore(s.cloneNode(!0),n),[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Fy(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Uy(t,e,n){const i=t.style,r=i.display;if(!n)t.removeAttribute("style");else if(Fe(n))e!==n&&(i.cssText=n);else{for(const s in n)bl(i,s,n[s]);if(e&&!Fe(e))for(const s in e)n[s]==null&&bl(i,s,"")}"_vod"in t&&(i.display=r)}const Th=/\s*!important$/;function bl(t,e,n){if(ne(n))n.forEach(i=>bl(t,e,i));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=Vy(t,e);Th.test(n)?t.setProperty(qn(i),n.replace(Th,""),"important"):t[i]=n}}const Sh=["Webkit","Moz","ms"],Cl={};function Vy(t,e){const n=Cl[e];if(n)return n;let i=Ht(e);if(i!=="filter"&&i in t)return Cl[e]=i;i=js(i);for(let r=0;r<Sh.length;r++){const s=Sh[r]+i;if(s in t)return Cl[e]=s}return e}const Rh="http://www.w3.org/1999/xlink";function Wy(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Rh,e.slice(6,e.length)):t.setAttributeNS(Rh,e,n);else{const s=x_(e);n==null||s&&!ed(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function By(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const a=n==null?"":n;t.value!==a&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=ed(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch(l){}t.removeAttribute(e);return}}try{t[e]=n}catch(a){}}let po=Date.now,Ah=!1;if(typeof window!="undefined"){po()>document.createEvent("Event").timeStamp&&(po=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Ah=!!(t&&Number(t[1])<=53)}let Tl=0;const jy=Promise.resolve(),$y=()=>{Tl=0},Hy=()=>Tl||(jy.then($y),Tl=po());function Gi(t,e,n,i){t.addEventListener(e,n,i)}function zy(t,e,n,i){t.removeEventListener(e,n,i)}function qy(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Gy(e);if(i){const c=s[e]=Ky(i,r);Gi(t,a,c,l)}else o&&(zy(t,a,o,l),s[e]=void 0)}}const kh=/(?:Once|Passive|Capture)$/;function Gy(t){let e;if(kh.test(t)){e={};let n;for(;n=t.match(kh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[qn(t.slice(2)),e]}function Ky(t,e){const n=i=>{const r=i.timeStamp||po();(Ah||r>=n.attached-1)&&Tt(Yy(i,n.value),e,5,[i])};return n.value=t,n.attached=Hy(),n}function Yy(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i(r))}else return e}const Nh=/^on[a-z]/,Qy=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?Fy(t,i,r):e==="style"?Uy(t,n,i):Us(e)?Fa(e)||qy(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jy(t,e,i,r))?By(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Wy(t,e,i,r))};function Jy(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Nh.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Nh.test(e)&&Fe(n)?!1:e in t}const An="transition",Vr="animation",Ph=(t,{slots:e})=>ii(Od,Xy(t),e);Ph.displayName="Transition";const Oh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ph.props=Je({},Od.props,Oh);const ri=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},xh=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function Xy(t){const e={};for(const W in t)W in Oh||(e[W]=t[W]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=Zy(r),R=g&&g[0],I=g&&g[1],{onBeforeEnter:y,onEnter:T,onEnterCancelled:M,onLeave:D,onLeaveCancelled:B,onBeforeAppear:X=y,onAppear:q=T,onAppearCancelled:te=M}=e,j=(W,de,ke)=>{Ki(W,de?u:a),Ki(W,de?c:o),ke&&ke()},ie=(W,de)=>{Ki(W,p),Ki(W,h),de&&de()},ce=W=>(de,ke)=>{const tt=W?q:T,he=()=>j(de,W,ke);ri(tt,[de,he]),Mh(()=>{Ki(de,W?l:s),kn(de,W?u:a),xh(tt)||Lh(de,i,R,he)})};return Je(e,{onBeforeEnter(W){ri(y,[W]),kn(W,s),kn(W,o)},onBeforeAppear(W){ri(X,[W]),kn(W,l),kn(W,c)},onEnter:ce(!1),onAppear:ce(!0),onLeave(W,de){const ke=()=>ie(W,de);kn(W,d),nw(),kn(W,h),Mh(()=>{Ki(W,d),kn(W,p),xh(D)||Lh(W,i,I,ke)}),ri(D,[W,ke])},onEnterCancelled(W){j(W,!1),ri(M,[W])},onAppearCancelled(W){j(W,!0),ri(te,[W])},onLeaveCancelled(W){ie(W),ri(B,[W])}})}function Zy(t){if(t==null)return null;if(xe(t))return[Sl(t.enter),Sl(t.leave)];{const e=Sl(t);return[e,e]}}function Sl(t){return zs(t)}function kn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ki(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Mh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ew=0;function Lh(t,e,n,i){const r=t._endId=++ew,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=tw(t,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),s()},h=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function tw(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(An+"Delay"),s=i(An+"Duration"),o=Dh(r,s),a=i(Vr+"Delay"),l=i(Vr+"Duration"),c=Dh(a,l);let u=null,d=0,h=0;e===An?o>0&&(u=An,d=o,h=s.length):e===Vr?c>0&&(u=Vr,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?An:Vr:null,h=u?u===An?s.length:l.length:0);const p=u===An&&/\b(transform|all)(,|$)/.test(n[An+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:p}}function Dh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Fh(n)+Fh(t[i])))}function Fh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function nw(){return document.body.offsetHeight}const Uh=t=>{const e=t.props["onUpdate:modelValue"];return ne(e)?n=>$s(e,n):e};function iw(t){t.target.composing=!0}function Vh(t){const e=t.target;e.composing&&(e.composing=!1,rw(e,"input"))}function rw(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const MN={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=Uh(r);const s=i||r.props&&r.props.type==="number";Gi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=zs(a)),t._assign(a)}),n&&Gi(t,"change",()=>{t.value=t.value.trim()}),e||(Gi(t,"compositionstart",iw),Gi(t,"compositionend",Vh),Gi(t,"change",Vh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=Uh(s),t.composing||document.activeElement===t&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&zs(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},sw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},LN=(t,e)=>n=>{if(!("key"in n))return;const i=qn(n.key);if(e.some(r=>r===i||sw[r]===i))return t(n)},ow=Je({patchProp:Qy},Dy);let Wh;function aw(){return Wh||(Wh=ny(ow))}const DN=(...t)=>{const e=aw().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=lw(i);if(!r)return;const s=e._component;!re(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function lw(t){return Fe(t)?document.querySelector(t):t}function cw(){return Bh().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Bh(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const uw=typeof Proxy=="function",dw="devtools-plugin:setup",hw="plugin:settings:set";class fw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Zu({},i);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(s,a)}catch(o){}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch(a){}s=o}},n.on(hw,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function pw(t,e){const n=Bh(),i=cw(),r=uw&&t.enableEarlyProxy;if(i&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(dw,t,e);else{const s=r?new fw(t,i):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:s}),s&&e(s.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var mw="store";function Yi(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function jh(t){return t!==null&&typeof t=="object"}function gw(t){return t&&typeof t.then=="function"}function _w(t,e){return function(){return t(e)}}function $h(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function Hh(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;mo(t,n,[],t._modules.root,!0),Rl(t,n,e)}function Rl(t,e,n){var i=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,s={};Yi(r,function(o,a){s[a]=_w(o,t),Object.defineProperty(t.getters,a,{get:function(){return s[a]()},enumerable:!0})}),t._state=Cn({data:e}),t.strict&&Iw(t),i&&n&&t._withCommit(function(){i.data=null})}function mo(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=Al(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=i.state})}var c=i.context=vw(t,o,n);i.forEachMutation(function(u,d){var h=o+d;yw(t,h,u,c)}),i.forEachAction(function(u,d){var h=u.root?d:o+d,p=u.handler||u;ww(t,h,p,c)}),i.forEachGetter(function(u,d){var h=o+d;Ew(t,h,u,c)}),i.forEachChild(function(u,d){mo(t,e,n.concat(d),u,r)})}function vw(t,e,n){var i=e==="",r={dispatch:i?t.dispatch:function(s,o,a){var l=go(s,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:i?t.commit:function(s,o,a){var l=go(s,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return zh(t,e)}},state:{get:function(){return Al(t.state,n)}}}),r}function zh(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function yw(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,i.state,o)})}function ww(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},o);return gw(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function Ew(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(i.state,i.getters,s.state,s.getters)})}function Iw(t){lt(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Al(t,e){return e.reduce(function(n,i){return n[i]},t)}function go(t,e,n){return jh(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var bw="vuex bindings",qh="vuex:mutations",kl="vuex:actions",Qi="vuex",Cw=0;function Tw(t,e){pw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[bw]},function(n){n.addTimelineLayer({id:qh,label:"Vuex Mutations",color:Gh}),n.addTimelineLayer({id:kl,label:"Vuex Actions",color:Gh}),n.addInspector({id:Qi,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(i){if(i.app===t&&i.inspectorId===Qi)if(i.filter){var r=[];Jh(r,e._modules.root,i.filter,""),i.rootNodes=r}else i.rootNodes=[Qh(e._modules.root,"")]}),n.on.getInspectorState(function(i){if(i.app===t&&i.inspectorId===Qi){var r=i.nodeId;zh(e,r),i.state=Aw(Nw(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(i){if(i.app===t&&i.inspectorId===Qi){var r=i.nodeId,s=i.path;r!=="root"&&(s=r.split("/").filter(Boolean).concat(s)),e._withCommit(function(){i.set(e._state.data,s,i.state.value)})}}),e.subscribe(function(i,r){var s={};i.payload&&(s.payload=i.payload),s.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(Qi),n.sendInspectorState(Qi),n.addTimelineEvent({layerId:qh,event:{time:Date.now(),title:i.type,data:s}})}),e.subscribeAction({before:function(i,r){var s={};i.payload&&(s.payload=i.payload),i._id=Cw++,i._time=Date.now(),s.state=r,n.addTimelineEvent({layerId:kl,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:s}})},after:function(i,r){var s={},o=Date.now()-i._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(s.payload=i.payload),s.state=r,n.addTimelineEvent({layerId:kl,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:s}})}})})}var Gh=8702998,Sw=6710886,Rw=16777215,Kh={label:"namespaced",textColor:Rw,backgroundColor:Sw};function Yh(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Qh(t,e){return{id:e||"root",label:Yh(e),tags:t.namespaced?[Kh]:[],children:Object.keys(t._children).map(function(n){return Qh(t._children[n],e+n+"/")})}}function Jh(t,e,n,i){i.includes(n)&&t.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[Kh]:[]}),Object.keys(e._children).forEach(function(r){Jh(t,e._children[r],n,i+r+"/")})}function Aw(t,e,n){e=n==="root"?e:e[n];var i=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(i.length){var s=kw(e);r.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?Yh(o):o,editable:!1,value:Nl(function(){return s[o]})}})}return r}function kw(t){var e={};return Object.keys(t).forEach(function(n){var i=n.split("/");if(i.length>1){var r=e,s=i.pop();i.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[s]=Nl(function(){return t[n]})}else e[n]=Nl(function(){return t[n]})}),e}function Nw(t,e){var n=e.split("/").filter(function(i){return i});return n.reduce(function(i,r,s){var o=i[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return s===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Nl(t){try{return t()}catch(e){return e}}var Lt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},Xh={namespaced:{configurable:!0}};Xh.namespaced.get=function(){return!!this._rawModule.namespaced};Lt.prototype.addChild=function(e,n){this._children[e]=n};Lt.prototype.removeChild=function(e){delete this._children[e]};Lt.prototype.getChild=function(e){return this._children[e]};Lt.prototype.hasChild=function(e){return e in this._children};Lt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Lt.prototype.forEachChild=function(e){Yi(this._children,e)};Lt.prototype.forEachGetter=function(e){this._rawModule.getters&&Yi(this._rawModule.getters,e)};Lt.prototype.forEachAction=function(e){this._rawModule.actions&&Yi(this._rawModule.actions,e)};Lt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Yi(this._rawModule.mutations,e)};Object.defineProperties(Lt.prototype,Xh);var si=function(e){this.register([],e,!1)};si.prototype.get=function(e){return e.reduce(function(n,i){return n.getChild(i)},this.root)};si.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(i,r){return n=n.getChild(r),i+(n.namespaced?r+"/":"")},"")};si.prototype.update=function(e){Zh([],this.root,e)};si.prototype.register=function(e,n,i){var r=this;i===void 0&&(i=!0);var s=new Lt(n,i);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&Yi(n.modules,function(a,l){r.register(e.concat(l),a,i)})};si.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1],r=n.getChild(i);!r||!r.runtime||n.removeChild(i)};si.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1];return n?n.hasChild(i):!1};function Zh(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return;Zh(t.concat(i),e.getChild(i),n.modules[i])}}function FN(t){return new ct(t)}var ct=function(e){var n=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var r=e.strict;r===void 0&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new si(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(h,p){return l.call(o,h,p)},this.commit=function(h,p,g){return c.call(o,h,p,g)},this.strict=r;var u=this._modules.root.state;mo(this,u,[],this._modules.root),Rl(this,u),i.forEach(function(d){return d(n)})},Pl={state:{configurable:!0}};ct.prototype.install=function(e,n){e.provide(n||mw,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&Tw(e,this)};Pl.state.get=function(){return this._state.data};Pl.state.set=function(t){};ct.prototype.commit=function(e,n,i){var r=this,s=go(e,n,i),o=s.type,a=s.payload,l={type:o,payload:a},c=this._mutations[o];!c||(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};ct.prototype.dispatch=function(e,n){var i=this,r=go(e,n),s=r.type,o=r.payload,a={type:s,payload:o},l=this._actions[s];if(!!l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch(u){}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(h){try{i._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,i.state)})}catch(p){}u(h)},function(h){try{i._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,i.state,h)})}catch(p){}d(h)})})}};ct.prototype.subscribe=function(e,n){return $h(e,this._subscribers,n)};ct.prototype.subscribeAction=function(e,n){var i=typeof e=="function"?{before:e}:e;return $h(i,this._actionSubscribers,n)};ct.prototype.watch=function(e,n,i){var r=this;return lt(function(){return e(r.state,r.getters)},n,Object.assign({},i))};ct.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ct.prototype.registerModule=function(e,n,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),mo(this,this.state,e,this._modules.get(e),i.preserveState),Rl(this,this.state)};ct.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=Al(n.state,e.slice(0,-1));delete i[e[e.length-1]]}),Hh(this)};ct.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ct.prototype.hotUpdate=function(e){this._modules.update(e),Hh(this,!0)};ct.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ct.prototype,Pl);var UN=tf(function(t,e){var n={};return ef(e).forEach(function(i){var r=i.key,s=i.val;s=t+s,n[r]=function(){if(!(t&&!nf(this.$store,"mapGetters",t)))return this.$store.getters[s]},n[r].vuex=!0}),n}),VN=tf(function(t,e){var n={};return ef(e).forEach(function(i){var r=i.key,s=i.val;n[r]=function(){for(var a=[],l=arguments.length;l--;)a[l]=arguments[l];var c=this.$store.dispatch;if(t){var u=nf(this.$store,"mapActions",t);if(!u)return;c=u.context.dispatch}return typeof s=="function"?s.apply(this,[c].concat(a)):c.apply(this.$store,[s].concat(a))}}),n});function ef(t){return Pw(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function Pw(t){return Array.isArray(t)||jh(t)}function tf(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function nf(t,e,n){var i=t._modulesNamespaceMap[n];return i}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const rf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const k=function(t,e){if(!t)throw Ji(e)},Ji=function(t){return new Error("Firebase Database ("+rf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const sf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)==55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)==56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ow=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ol={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),i.push(n[u],n[d],n[h],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ow(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw Error();const h=s<<2|a>>4;if(i.push(h),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const g=c<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},of=function(t){const e=sf(t);return Ol.encodeByteArray(e,!0)},af=function(t){return of(t).replace(/\./g,"")},xl=function(t){try{return Ol.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function xw(t){return Wr(void 0,t)}function Wr(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Mw(n)||(t[n]=Wr(t[n],e[n]));return t}function Mw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ut{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Lw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[af(JSON.stringify(n)),af(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Le(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ml(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function lf(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function Dw(){return typeof self=="object"&&self.self===self}function cf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _o(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uf(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function df(){return rf.NODE_ADMIN===!0}function Ll(){return typeof indexedDB=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Fw="FirebaseError";class St extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=Fw,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Uw(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new St(r,a,i)}}function Uw(t,e){return t.replace(Vw,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Vw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Br(t){return JSON.parse(t)}function Ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const hf=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Br(xl(s[0])||""),n=Br(xl(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(s){}return{header:e,claims:n,data:i,signature:r}},Ww=function(t){const e=hf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Bw=function(t){const e=hf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ai(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yo(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Dl(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(ff(s)&&ff(o)){if(!Dl(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function ff(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function li(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Xi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function jr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(r<<5|r>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function pf(t,e){const n=new $w(t,e);return n.subscribe.bind(n)}class $w{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Hw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Fl),r.error===void 0&&(r.error=Fl),r.complete===void 0&&(r.complete=Fl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(o){}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fl(){}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const J=function(t,e,n,i){let r;if(i<e?r="at least "+e:i>n&&(r=n===0?"none":"no more than "+n),r){const s=t+" failed: Was called with "+i+(i===1?" argument.":" arguments.")+" Expects "+r+".";throw new Error(s)}};function dt(t,e){return`${t} failed: ${e} argument `}function $e(t,e,n,i){if(!(i&&!n)&&typeof n!="function")throw new Error(dt(t,e)+"must be a valid function.")}function mf(t,e,n,i){if(!(i&&!n)&&(typeof n!="object"||n===null))throw new Error(dt(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const zw=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,k(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},wo=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Z(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
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
***************************************************************************** */function Ul(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function qw(t,e,n,i){function r(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(d){o(d)}}function l(u){try{c(i.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(t,e||[])).next())})}function Gw(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return l([c,u])}}function l(c){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,r&&(s=c[0]&2?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],r=0}finally{i=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Vl(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Eo(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function gf(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}var Qt=function(){function t(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
 * @license
 * Copyright 2019 Google LLC
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
 */var ci="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */var _f=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var i=new ut;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch(s){}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,i;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(Yw(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch(d){}try{for(var r=Vl(this.instancesDeferred.entries()),s=r.next();!s.done;s=r.next()){var o=Eo(s.value,2),a=o[0],l=o[1],c=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:c});l.resolve(u)}catch(d){}}}catch(d){n={error:d}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=ci),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return qw(this,void 0,void 0,function(){var e;return Gw(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(gf(gf([],Eo(e.filter(function(i){return"INTERNAL"in i}).map(function(i){return i.INTERNAL.delete()}))),Eo(e.filter(function(i){return"_delete"in i}).map(function(i){return i._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=ci),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=ci),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,i;e===void 0&&(e={});var r=e.options,s=r===void 0?{}:r,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var l=Vl(this.instancesDeferred.entries()),c=l.next();!c.done;c=l.next()){var u=Eo(c.value,2),d=u[0],h=u[1],p=this.normalizeInstanceIdentifier(d);o===p&&h.resolve(a)}}catch(g){n={error:g}}finally{try{c&&!c.done&&(i=l.return)&&i.call(l)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var i,r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);var o=this.instances.get(r);return o&&e(o,r),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var i,r,s=this.onInitCallbacks.get(n);if(!!s)try{for(var o=Vl(s),a=o.next();!a.done;a=o.next()){var l=a.value;try{l(e,n)}catch(c){}}}catch(c){i={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,i=e.options,r=i===void 0?{}:i,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Kw(n),options:r}),this.instances.set(n,s),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=ci),this.component?this.component.multipleInstances?e:ci:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function Kw(t){return t===ci?void 0:t}function Yw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */var vf=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new _f(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Wl=[];var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const yf={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},Qw=we.INFO,Jw={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},Xw=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Jw[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $r{constructor(e){this.name=e,this._logLevel=Qw,this._logHandler=Xw,this._userLogHandler=null,Wl.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}function Zw(t){Wl.forEach(e=>{e.setLogLevel(t)})}function eE(t,e){for(const n of Wl){let i=null;e&&e.level&&(i=yf[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(r,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch(c){return null}}).filter(l=>l).join(" ");s>=(i!=null?i:r.logLevel)&&t({level:we[s].toLowerCase(),message:a,args:o,type:r.name})}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class tE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nE(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function nE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wf="@firebase/app",iE="0.7.3";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Bl=new $r("@firebase/app"),rE="@firebase/app-compat",sE="@firebase/analytics-compat",oE="@firebase/analytics",aE="@firebase/app-check-compat",lE="@firebase/app-check",cE="@firebase/auth",uE="@firebase/auth-compat",dE="@firebase/database",hE="@firebase/database-compat",fE="@firebase/functions",pE="@firebase/functions-compat",mE="@firebase/installations",gE="@firebase/installations-compat",_E="@firebase/messaging",vE="@firebase/messaging-compat",yE="@firebase/performance",wE="@firebase/performance-compat",EE="@firebase/remote-config",IE="@firebase/remote-config-compat",bE="@firebase/storage",CE="@firebase/storage-compat",TE="@firebase/firestore",SE="@firebase/firestore-compat",RE="firebase",AE="9.1.2";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ui="[DEFAULT]",kE={[wf]:"fire-core",[rE]:"fire-core-compat",[oE]:"fire-analytics",[sE]:"fire-analytics-compat",[lE]:"fire-app-check",[aE]:"fire-app-check-compat",[cE]:"fire-auth",[uE]:"fire-auth-compat",[dE]:"fire-rtdb",[hE]:"fire-rtdb-compat",[fE]:"fire-fn",[pE]:"fire-fn-compat",[mE]:"fire-iid",[gE]:"fire-iid-compat",[_E]:"fire-fcm",[vE]:"fire-fcm-compat",[yE]:"fire-perf",[wE]:"fire-perf-compat",[EE]:"fire-rc",[IE]:"fire-rc-compat",[bE]:"fire-gcs",[CE]:"fire-gcs-compat",[TE]:"fire-fst",[SE]:"fire-fst-compat","fire-js":"fire-js",[RE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Nn=new Map,Hr=new Map;function Io(t,e){try{t.container.addComponent(e)}catch(n){Bl.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ef(t,e){t.container.addOrOverwriteComponent(e)}function di(t){const e=t.name;if(Hr.has(e))return Bl.debug(`There were multiple attempts to register component ${e}.`),!1;Hr.set(e,t);for(const n of Nn.values())Io(n,t);return!0}function If(t,e){return t.container.getProvider(e)}function NE(t,e,n=ui){If(t,e).clearInstance(n)}function PE(){Hr.clear()}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const OE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},zr=new oi("app","Firebase",OE);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class xE{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const hi=AE;function bf(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ui,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw zr.create("bad-app-name",{appName:String(i)});const r=Nn.get(i);if(r){if(Dl(t,r.options)&&Dl(n,r.config))return r;throw zr.create("duplicate-app",{appName:i})}const s=new vf(i);for(const a of Hr.values())s.addComponent(a);const o=new xE(t,n,s);return Nn.set(i,o),o}function ME(t=ui){const e=Nn.get(t);if(!e)throw zr.create("no-app",{appName:t});return e}function LE(){return Array.from(Nn.values())}async function Cf(t){const e=t.name;Nn.has(e)&&(Nn.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function fi(t,e,n){var i;let r=(i=kE[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bl.warn(a.join(" "));return}di(new Qt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function Tf(t,e){if(t!==null&&typeof t!="function")throw zr.create("invalid-log-argument");eE(t,e)}function Sf(t){Zw(t)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function DE(t){di(new Qt("platform-logger",e=>new tE(e),"PRIVATE")),fi(wf,iE,t),fi("fire-js","")}DE();var FE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:hi,_DEFAULT_ENTRY_NAME:ui,_addComponent:Io,_addOrOverwriteComponent:Ef,_apps:Nn,_clearComponents:PE,_components:Hr,_getProvider:If,_registerComponent:di,_removeServiceInstance:NE,deleteApp:Cf,getApp:ME,getApps:LE,initializeApp:bf,onLog:Tf,registerVersion:fi,setLogLevel:Sf,FirebaseError:St});/**
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
 */class UE{constructor(e,n){this._delegate=e,this.firebase=n,Io(e,new Qt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Cf(this._delegate)))}_getService(e,n=ui){var i;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((i=r.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:n})}_removeServiceInstance(e,n=ui){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Io(this._delegate,e)}_addOrOverwriteComponent(e){Ef(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const VE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Rf=new oi("app-compat","Firebase",VE);/**
 * @license
 * Copyright 2019 Google LLC
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
 */function WE(t){const e={},n={__esModule:!0,initializeApp:s,app:r,registerVersion:fi,setLogLevel:Sf,onLog:Tf,apps:null,SDK_VERSION:hi,INTERNAL:{registerComponent:a,removeApp:i,useAsService:l,modularAPIs:FE}};n.default=n,Object.defineProperty(n,"apps",{get:o});function i(c){delete e[c]}function r(c){if(c=c||ui,!yt(e,c))throw Rf.create("no-app",{appName:c});return e[c]}r.App=t;function s(c,u={}){const d=bf(c,u);if(yt(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const u=c.name,d=u.replace("-compat","");if(di(c)&&c.type==="PUBLIC"){const h=(p=r())=>{if(typeof p[d]!="function")throw Rf.create("invalid-app-argument",{appName:u});return p[d]()};c.serviceProps!==void 0&&Wr(h,c.serviceProps),n[d]=h,t.prototype[d]=function(...p){return this._getService.bind(this,u).apply(this,c.multipleInstances?p:[])}}return c.type==="PUBLIC"?n[d]:null}function l(c,u){return u==="serverAuth"?null:u}return n}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Af(){const t=WE(UE);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Af,extendNamespace:e,createSubscribe:pf,ErrorFactory:oi,deepExtend:Wr});function e(n){Wr(t,n)}return t}const BE=Af();/**
 * @license
 * Copyright 2019 Google LLC
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
 */const kf=new $r("@firebase/app-compat"),jE="@firebase/app-compat",$E="0.1.4";/**
 * @license
 * Copyright 2019 Google LLC
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
 */function HE(t){fi(jE,$E,t)}/**
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
 */if(Dw()&&self.firebase!==void 0){kf.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&kf.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const qr=BE;HE();var zE="firebase",qE="9.1.2";/**
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
 */qr.registerVersion(zE,qE,"app-compat");const GE="@firebase/database",KE="0.12.1";/**
 * @license
 * Copyright 2019 Google LLC
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
 */let Nf="";function Pf(t){Nf=t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class YE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Br(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class QE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Of=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new YE(e)}}catch(e){}return new QE},pi=Of("localStorage"),jl=Of("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Zi=new $r("@firebase/database"),xf=function(){let t=1;return function(){return t++}}(),Mf=function(t){const e=zw(t),n=new jw;n.update(e);const i=n.digest();return Ol.encodeByteArray(i)},Gr=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Gr.apply(null,i):typeof i=="object"?e+=Ue(i):e+=i,e+=" "}return e};let mi=null,Lf=!0;const Df=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Zi.logLevel=we.VERBOSE,mi=Zi.log.bind(Zi),e&&jl.set("logging_enabled",!0)):typeof t=="function"?mi=t:(mi=null,jl.remove("logging_enabled"))},He=function(...t){if(Lf===!0&&(Lf=!1,mi===null&&jl.get("logging_enabled")===!0&&Df(!0)),mi){const e=Gr.apply(null,t);mi(e)}},Kr=function(t){return function(...e){He(t,...e)}},$l=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gr(...t);Zi.error(e)},Jt=function(...t){const e=`FIREBASE FATAL ERROR: ${Gr(...t)}`;throw Zi.error(e),new Error(e)},ot=function(...t){const e="FIREBASE WARNING: "+Gr(...t);Zi.warn(e)},JE=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},XE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fn="[MIN_NAME]",Xt="[MAX_NAME]",gi=function(t,e){if(t===e)return 0;if(t===fn||e===Xt)return-1;if(e===fn||t===Xt)return 1;{const n=Co(t),i=Co(e);return n!==null?i!==null?n-i==0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},ZE=function(t,e){return t===e?0:t<e?-1:1},Yr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ue(e))},Hl=function(t){if(typeof t!="object"||t===null)return Ue(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ue(e[i]),n+=":",n+=Hl(t[e[i]]);return n+="}",n},Ff=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Uf=function(t){k(!bo(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t==-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},eI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const iI=new RegExp("^-?(0*)\\d{1,10}$"),Vf=-2147483648,zl=2147483647,Co=function(t){if(iI.test(t)){const e=Number(t);if(e>=Vf&&e<=zl)return e}return null},er=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},rI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qr=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
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
 */class sI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class oI{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(He("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ot(e)}}class tr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ql="5",Wf="v",Bf="s",jf="r",$f="f",Hf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zf="ls",aI="p",Gl="ac",qf="websocket",Gf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Kf{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function lI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Yf(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let i;if(e===qf)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Gf)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lI(t)&&(n.ns=t.namespace);const r=[];return ze(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cI{constructor(){this.counters_={}}incrementCounter(e,n=1){yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return xw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Kl={},Yl={};function Ql(t){const e=t.toString();return Kl[e]||(Kl[e]=new cI),Kl[e]}function uI(t,e){const n=t.toString();return Yl[n]||(Yl[n]=e()),Yl[n]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&er(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Qf="start",hI="close",fI="pLPCommand",pI="pRTLPCB",Jf="id",Xf="pw",Zf="ser",mI="cb",gI="seg",_I="ts",vI="d",yI="dframe",ep=1870,tp=30,wI=ep-tp,EI=25e3,II=3e4;class nr{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Kr(e),this.stats_=Ql(n),this.urlFn=l=>(this.appCheckToken&&(l[Gl]=this.appCheckToken),Yf(n,Gf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(II)),XE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jl((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qf)this.id=a,this.password=l;else if(o===hI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Qf]="t",i[Zf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[mI]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Wf]=ql,this.transportSessionId&&(i[Bf]=this.transportSessionId),this.lastSessionId&&(i[zf]=this.lastSessionId),this.applicationId&&(i[aI]=this.applicationId),this.appCheckToken&&(i[Gl]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Hf.test(location.hostname)&&(i[jf]=$f);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nr.forceAllow_=!0}static forceDisallow(){nr.forceDisallow_=!0}static isAvailable(){return nr.forceAllow_?!0:!nr.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!eI()&&!tI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=of(n),r=Ff(i,wI);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[yI]="t",i[Jf]=e,i[Xf]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Jl{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xf(),window[fI+this.uniqueCallbackIdentifier]=e,window[pI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Jl.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){He("frame writing exception"),a.stack&&He(a.stack),He(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||He("No IE domain setting required")}catch(n){const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Jf]=this.myID,e[Xf]=this.myPW,e[Zf]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tp+i.length<=ep;){const o=this.pendingSegs.shift();i=i+"&"+gI+r+"="+o.seg+"&"+_I+r+"="+o.ts+"&"+vI+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(EI)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{He("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch(i){}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const bI=16384,CI=45e3;let To=null;typeof MozWebSocket!="undefined"?To=MozWebSocket:typeof WebSocket!="undefined"&&(To=WebSocket);class Dt{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Kr(this.connId),this.stats_=Ql(n),this.connURL=Dt.connectionURL_(n,o,a,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r){const s={};return s[Wf]=ql,typeof location!="undefined"&&location.hostname&&Hf.test(location.hostname)&&(s[jf]=$f),n&&(s[Bf]=n),i&&(s[zf]=i),r&&(s[Gl]=r),Yf(e,qf,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pi.set("previous_websocket_failure",!0);try{if(!df()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new To(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&To!==null&&!Dt.forceDisallow_}static previouslyFailed(){return pi.isInMemoryStorage||pi.get("previous_websocket_failure")===!0}markConnectionHealthy(){pi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Br(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ff(n,bI);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(CI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dt.responsesRequiredToBeHealthy=2;Dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Xl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[nr,Dt]}initTransports_(e){const n=Dt&&Dt.isAvailable();let i=n&&!Dt.previouslyFailed();if(e.webSocketOnly&&(n||ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Dt];else{const r=this.transports_=[];for(const s of Xl.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const TI=6e4,SI=5e3,RI=10*1024,AI=100*1024,Zl="t",np="d",kI="s",ip="r",NI="e",rp="o",sp="a",op="n",ap="p",PI="h";class OI{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Kr("c:"+this.id+":"),this.transportManager_=new Xl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Qr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>AI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zl in e){const n=e[Zl];n===sp?this.upgradeIfSecondaryHealthy_():n===ip?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===rp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yr("t",e),i=Yr("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ap,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:op,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yr("t",e),i=Yr("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yr(Zl,e);if(np in e){const i=e[np];if(n===PI)this.onHandshake_(i);else if(n===op){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===kI?this.onConnectionShutdown_(i):n===ip?this.onReset_(i):n===NI?$l("Server Error: "+i):n===rp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$l("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ql!==i&&ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Qr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ap,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lp{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cp{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class So extends cp{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Ml()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new So}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const up=32,dp=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new ve("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pn(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function ec(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function xI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Jr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Pe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ve)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new ve(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function at(t,e){const n=se(t),i=se(e);if(n===null)return e;if(n===i)return at(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function MI(t,e){const n=Jr(t,0),i=Jr(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=gi(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function tc(t,e){if(Pn(t)!==Pn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Rt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Pn(t)>Pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class LI{constructor(e,n){this.errorPrefix_=n,this.parts_=Jr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=wo(this.parts_[i]);fp(this)}}function DI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wo(e),fp(t)}function FI(t){const e=t.parts_.pop();t.byteLength_-=wo(e),t.parts_.length>0&&(t.byteLength_-=1)}function fp(t){if(t.byteLength_>dp)throw new Error(t.errorPrefix_+"has a key path longer than "+dp+" bytes ("+t.byteLength_+").");if(t.parts_.length>up)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+up+") or object contains a cycle "+_i(t))}function _i(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nc extends cp{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new nc}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Xr=1e3,UI=60*5*1e3,VI=3*1e3,pp=30*1e3,WI=1.3,BI=3e4,jI="server_kill",mp=3;class pn extends lp{constructor(e,n,i,r,s,o,a,l){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pn.nextPersistentConnectionId_++,this.log_=Kr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xr,this.maxReconnectDelay_=UI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!df())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");nc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&So.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(Ue(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new ut,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||r!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},VI),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;pn.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yt(e,"w")){const i=ai(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Bw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ww(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$l("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>BI&&(this.reconnectDelay_=Xr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*WI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+pn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?He("getToken() completed but was canceled"):(He("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new OI(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{ot(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(jI)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ot(d),l())}}}interrupt(e){He("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){He("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vo(this.interruptReasons_)&&(this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Hl(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new ve(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){He("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mp&&(this.reconnectDelay_=pp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){He("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Nf.replace(/\./g,"-")]=1,Ml()?e["framework.cordova"]=1:_o()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=So.getInstance().currentlyOnline();return vo(this.interruptReasons_)&&e}}pn.nextPersistentConnectionId_=0;pn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ro{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ae(fn,e),r=new ae(fn,n);return this.compare(i,r)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Ao;class gp extends Ro{static get __EMPTY_NODE(){return Ao}static set __EMPTY_NODE(e){Ao=e}compare(e,n){return gi(e.name,n.name)}isDefinedOn(e){throw Ji("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Xt,Ao)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,Ao)}toString(){return".key"}}const Zt=new gp;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ko{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:qe.RED,this.left=r!=null?r:ht.EMPTY_NODE,this.right=s!=null?s:ht.EMPTY_NODE}copy(e,n,i,r,s){return new qe(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class $I{copy(e,n,i,r,s){return this}insert(e,n,i){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ht{constructor(e,n=ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ko(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ko(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ko(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ko(this.root_,null,this.comparator_,!0,e)}}ht.EMPTY_NODE=new $I;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function HI(t,e){return gi(t.name,e.name)}function ic(t,e){return gi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let rc;function zI(t){rc=t}const _p=function(t){return typeof t=="number"?"number:"+Uf(t):"string:"+t},vp=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yt(e,".sv"),"Priority must be a string or number.")}else k(t===rc||t.isEmpty(),"priority of unexpected type.");k(t===rc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */let yp;class Ge{constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vp(this.priorityNode_)}static set __childrenNodeConstructor(e){yp=e}static get __childrenNodeConstructor(){return yp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:se(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=se(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(k(i!==".priority"||Pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_p(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Uf(this.value_):e+=this.value_,this.lazyHash_=Mf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=Ge.VALUE_TYPE_ORDER.indexOf(n),s=Ge.VALUE_TYPE_ORDER.indexOf(i);return k(r>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
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
 */let wp,Ep;function qI(t){wp=t}function GI(t){Ep=t}class KI extends Ro{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?gi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Xt,new Ge("[PRIORITY-POST]",Ep))}makePost(e,n){const i=wp(e);return new ae(n,new Ge("[PRIORITY-POST]",i))}toString(){return".priority"}}const Te=new KI;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const YI=Math.log(2);class QI{constructor(e){const n=s=>parseInt(Math.log(s)/YI,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const No=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new qe(h,d.node,qe.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=r(l,p),R=r(p+1,c);return d=t[p],h=n?n(d):d,new qe(h,d.node,qe.BLACK,g,R)}},s=function(l){let c=null,u=null,d=t.length;const h=function(g,R){const I=d-g,y=d;d-=g;const T=r(I+1,y),M=t[I],D=n?n(M):M;p(new qe(D,M.node,R,null,T))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const R=l.nextBitIsOne(),I=Math.pow(2,l.count-(g+1));R?h(I,qe.BLACK):(h(I,qe.BLACK),h(I,qe.RED))}return u},o=new QI(t.length),a=s(o);return new ht(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */let sc;const ir={};class mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(ir&&Te,"ChildrenNode.ts has not been loaded"),sc=sc||new mn({".priority":ir},{".priority":Te}),sc}get(e){const n=ai(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ht?n:null}hasIndex(e){return yt(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Zt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(ae.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=No(i,e.getCompare()):a=ir;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new mn(u,c)}addToIndexes(e,n){const i=yo(this.indexes_,(r,s)=>{const o=ai(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),r===ir)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ae.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),No(a,o.getCompare())}else return ir;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new ae(e.name,a))),l.insert(e,e.node)}});return new mn(i,this.indexSet_)}removeFromIndexes(e,n){const i=yo(this.indexes_,r=>{if(r===ir)return r;{const s=n.get(e.name);return s?r.remove(new ae(e.name,s)):r}});return new mn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Zr;class Q{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&vp(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zr||(Zr=new Q(new ht(ic),null,mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zr}updatePriority(e){return this.children_.isEmpty()?this:new Q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Zr:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ae(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Zr:this.priorityNode_;return new Q(r,o,s)}}updateChild(e,n){const i=se(e);if(i===null)return n;{k(se(e)!==".priority"||Pn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(be(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),i++,s&&Q.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_p(this.getPriority().val())+":"),this.forEachChild(Te,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Mf(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new ae(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,ae.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===es?-1:0}withIndex(e){if(e===Zt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Te),r=n.getIterator(Te);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zt?null:this.indexMap_.get(e.toString())}}Q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class JI extends Q{constructor(){super(new ht(ic),Q.EMPTY_NODE,mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Q.EMPTY_NODE}isEmpty(){return!1}}const es=new JI;Object.defineProperties(ae,{MIN:{value:new ae(fn,Q.EMPTY_NODE)},MAX:{value:new ae(Xt,es)}});gp.__EMPTY_NODE=Q.EMPTY_NODE;Ge.__childrenNodeConstructor=Q;zI(es);GI(es);/**
 * @license
 * Copyright 2017 Google LLC
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
 */const XI=!0;function Oe(t,e=null){if(t===null)return Q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,Oe(e))}if(!(t instanceof Array)&&XI){const n=[];let i=!1;if(ze(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Oe(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new ae(o,l)))}}),n.length===0)return Q.EMPTY_NODE;const s=No(n,HI,o=>o.name,ic);if(i){const o=No(n,Te.getCompare());return new Q(s,Oe(e),new mn({".priority":o},{".priority":Te}))}else return new Q(s,Oe(e),mn.Default)}else{let n=Q.EMPTY_NODE;return ze(t,(i,r)=>{if(yt(t,i)&&i.substring(0,1)!=="."){const s=Oe(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Oe(e))}}qI(Oe);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class oc extends Ro{constructor(e){super();this.indexPath_=e,k(!oe(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?gi(e.name,n.name):s}makePost(e,n){const i=Oe(e),r=Q.EMPTY_NODE.updateChild(this.indexPath_,i);return new ae(n,r)}maxPost(){const e=Q.EMPTY_NODE.updateChild(this.indexPath_,es);return new ae(Xt,e)}toString(){return Jr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ZI extends Ro{compare(e,n){const i=e.node.compareTo(n.node);return i===0?gi(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const i=Oe(e);return new ae(n,i)}toString(){return".value"}}const ac=new ZI;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const rr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",lc="-",Ip="z",bp=786,eb=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=rr.charAt(n%64),n=Math.floor(n/64);k(n===0,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=rr.charAt(e[r]);return k(o.length===20,"nextPushId: Length should be 20."),o}}(),Cp=function(t){if(t===""+zl)return lc;const e=Co(t);if(e!=null)return""+(e+1);const n=new Array(t.length);for(let o=0;o<n.length;o++)n[o]=t.charAt(o);if(n.length<bp)return n.push(lc),n.join("");let i=n.length-1;for(;i>=0&&n[i]===Ip;)i--;if(i===-1)return Xt;const r=n[i],s=rr.charAt(rr.indexOf(r)+1);return n[i]=s,n.slice(0,i+1).join("")},Tp=function(t){if(t===""+Vf)return fn;const e=Co(t);if(e!=null)return""+(e-1);const n=new Array(t.length);for(let i=0;i<n.length;i++)n[i]=t.charAt(i);return n[n.length-1]===lc?n.length===1?""+zl:(delete n[n.length-1],n.join("")):(n[n.length-1]=rr.charAt(rr.indexOf(n[n.length-1])-1),n.join("")+Ip.repeat(bp-n.length))};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Sp(t){return{type:"value",snapshotNode:t}}function sr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ts(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ns(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function tb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cc{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(ts(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(sr(n,i)):o.trackChildChange(ns(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Te,(r,s)=>{n.hasChild(r)||i.trackChildChange(ts(r,s))}),n.isLeafNode()||n.forEachChild(Te,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(ns(r,s,o))}else i.trackChildChange(sr(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class is{constructor(e){this.indexedFilter_=new cc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=is.getStartPost_(e),this.endPost_=is.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,s,o){return this.matches(new ae(n,i))||(i=Q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=Q.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(Q.EMPTY_NODE);const s=this;return n.forEachChild(Te,(o,a)=>{s.matches(new ae(o,a))||(r=r.updateImmediateChild(o,Q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nb{constructor(e){this.rangedFilter_=new is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new ae(n,i))||(i=Q.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=Q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=Q.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(Q.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(h,p)=>d(p,h)}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const d=l.getNext();!u&&a(s,d)<=0&&(u=!0),u&&c<this.limit_&&a(d,o)<=0?c++:r=r.updateImmediateChild(d.name,Q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,p)=>d(p,h)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new ae(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=r.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(u&&!i.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(ns(n,i,d)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(ts(n,d));const R=a.updateImmediateChild(n,Q.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(sr(h.name,h.node)),R.updateImmediateChild(h.name,h.node)):R}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ts(c.name,c.node)),s.trackChildChange(sr(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,Q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Po{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fn}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new Po;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ib(t){return t.loadsAllData()?new cc(t.getIndex()):t.hasLimit()?new nb(t):new is(t)}function rb(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function sb(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function uc(t,e,n){const i=t.copy();return i.startSet_=!0,e===void 0&&(e=null),i.indexStartValue_=e,n!=null?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function ob(t,e,n){let i;if(t.index_===Zt)typeof e=="string"&&(e=Cp(e)),i=uc(t,e,n);else{let r;n==null?r=Xt:r=Cp(n),i=uc(t,e,r)}return i.startAfterSet_=!0,i}function dc(t,e,n){const i=t.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,n!==void 0?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function ab(t,e,n){let i,r;return t.index_===Zt?(typeof e=="string"&&(e=Tp(e)),r=dc(t,e,n)):(n==null?i=fn:i=Tp(n),r=dc(t,e,i)),r.endBeforeSet_=!0,r}function Oo(t,e){const n=t.copy();return n.index_=e,n}function Rp(t){const e={};if(t.isDefault())return e;let n;return t.index_===Te?n="$priority":t.index_===ac?n="$value":t.index_===Zt?n="$key":(k(t.index_ instanceof oc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ue(n),t.startSet_&&(e.startAt=Ue(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ue(t.indexStartName_))),t.endSet_&&(e.endAt=Ue(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ue(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ap(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xo extends lp{constructor(e,n,i,r){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Kr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=xo.getListenId_(e,i),a={};this.listens_[o]=a;const l=Rp(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,i),ai(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",r(h,null)}})}unlisten(e,n){const i=xo.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Rp(e._queryParams),i=e._path.toString(),r=new ut;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+li(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Br(a.responseText)}catch(c){ot("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ot("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lb{constructor(){this.rootNode_=Q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Mo(){return{value:null,children:new Map}}function or(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=se(e);t.children.has(i)||t.children.set(i,Mo());const r=t.children.get(i);e=be(e),or(r,e,n)}}function hc(t,e){if(oe(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Te,(i,r)=>{or(t,new ve(i),r)}),hc(t,e)}}else if(t.children.size>0){const n=se(e);return e=be(e),t.children.has(n)&&hc(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function fc(t,e,n){t.value!==null?n(e,t.value):cb(t,(i,r)=>{const s=new ve(e.toString()+"/"+i);fc(r,s,n)})}function cb(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ub{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ze(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const kp=10*1e3,db=30*1e3,hb=5*60*1e3;class fb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ub(e);const i=kp+(db-kp)*Math.random();Qr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ze(e,(r,s)=>{s>0&&yt(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Qr(this.reportStats_.bind(this),Math.floor(Math.random()*2*hb))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ft||(Ft={}));function pc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Lo{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Ft.ACK_USER_WRITE,this.source=pc()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Lo(_e(),n,this.revert)}}else return k(se(this.path)===e,"operationForChild called for unrelated child."),new Lo(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rs{constructor(e,n){this.source=e,this.path=n,this.type=Ft.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new rs(this.source,_e()):new rs(this.source,be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vi{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Ft.OVERWRITE}operationForChild(e){return oe(this.path)?new vi(this.source,_e(),this.snap.getImmediateChild(e)):new vi(this.source,be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ar{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Ft.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new vi(this.source,_e(),n.value):new ar(this.source,_e(),n)}else return k(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ar(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class On{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mb(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(tb(o.childName,o.snapshotNode))}),ss(t,r,"child_removed",e,i,n),ss(t,r,"child_added",e,i,n),ss(t,r,"child_moved",s,i,n),ss(t,r,"child_changed",e,i,n),ss(t,r,"value",e,i,n),r}function ss(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>_b(t,a,l)),o.forEach(a=>{const l=gb(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function gb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function _b(t,e,n){if(e.childName==null||n.childName==null)throw Ji("Should only compare child_ events.");const i=new ae(e.childName,e.snapshotNode),r=new ae(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Do(t,e){return{eventCache:t,serverCache:e}}function os(t,e,n,i){return Do(new On(e,n,i),t.serverCache)}function Np(t,e,n,i){return Do(t.eventCache,new On(e,n,i))}function Fo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function yi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let _c;const vb=()=>(_c||(_c=new ht(ZE)),_c);class Se{constructor(e,n=vb()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return ze(e,(i,r)=>{n=n.set(new ve(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(oe(e))return null;{const i=se(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(be(e),n);return s!=null?{path:Pe(new ve(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=se(e),i=this.children.get(n);return i!==null?i.subtree(be(e)):new Se(null)}}set(e,n){if(oe(e))return new Se(n,this.children);{const i=se(e),s=(this.children.get(i)||new Se(null)).set(be(e),n),o=this.children.insert(i,s);return new Se(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=se(e),i=this.children.get(n);if(i){const r=i.remove(be(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Se(null):new Se(this.value,s)}else return this}}get(e){if(oe(e))return this.value;{const n=se(e),i=this.children.get(n);return i?i.get(be(e)):null}}setTree(e,n){if(oe(e))return n;{const i=se(e),s=(this.children.get(i)||new Se(null)).setTree(be(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new Se(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(Pe(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(oe(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(be(e),Pe(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,i){if(oe(e))return this;{this.value&&i(n,this.value);const r=se(e),s=this.children.get(r);return s?s.foreachOnPath_(be(e),Pe(n,r),i):new Se(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(Pe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ut{constructor(e){this.writeTree_=e}static empty(){return new Ut(new Se(null))}}function as(t,e,n){if(oe(e))return new Ut(new Se(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=at(r,e);return s=s.updateChild(o,n),new Ut(t.writeTree_.set(r,s))}else{const r=new Se(n),s=t.writeTree_.setTree(e,r);return new Ut(s)}}}function vc(t,e,n){let i=t;return ze(n,(r,s)=>{i=as(i,Pe(e,r),s)}),i}function Pp(t,e){if(oe(e))return Ut.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new Ut(n)}}function yc(t,e){return wi(t,e)!=null}function wi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(at(n.path,e)):null}function Op(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(i,r)=>{e.push(new ae(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new ae(i,r.value))}),e}function xn(t,e){if(oe(e))return t;{const n=wi(t,e);return n!=null?new Ut(new Se(n)):new Ut(t.writeTree_.subtree(e))}}function wc(t){return t.writeTree_.isEmpty()}function lr(t,e){return xp(_e(),t.writeTree_,e)}function xp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=xp(Pe(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Pe(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Uo(t,e){return Up(e,t)}function yb(t,e,n,i,r){k(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=as(t.visibleWrites,e,n)),t.lastWriteId=i}function wb(t,e,n,i){k(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=vc(t.visibleWrites,e,n),t.lastWriteId=i}function Eb(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Ib(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&bb(a,i.path)?r=!1:Rt(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return Cb(t),!0;if(i.snap)t.visibleWrites=Pp(t.visibleWrites,i.path);else{const a=i.children;ze(a,l=>{t.visibleWrites=Pp(t.visibleWrites,Pe(i.path,l))})}return!0}else return!1}function bb(t,e){if(t.snap)return Rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Rt(Pe(t.path,n),e))return!0;return!1}function Cb(t){t.visibleWrites=Mp(t.allWrites,Tb,_e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Tb(t){return t.visible}function Mp(t,e,n){let i=Ut.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Rt(n,o)?(a=at(n,o),i=as(i,a,s.snap)):Rt(o,n)&&(a=at(o,n),i=as(i,_e(),s.snap.getChild(a)));else if(s.children){if(Rt(n,o))a=at(n,o),i=vc(i,a,s.children);else if(Rt(o,n))if(a=at(o,n),oe(a))i=vc(i,_e(),s.children);else{const l=ai(s.children,se(a));if(l){const c=l.getChild(be(a));i=as(i,_e(),c)}}}else throw Ji("WriteRecord should have .snap or .children")}}return i}function Lp(t,e,n,i,r){if(!i&&!r){const s=wi(t.visibleWrites,e);if(s!=null)return s;{const o=xn(t.visibleWrites,e);if(wc(o))return n;if(n==null&&!yc(o,_e()))return null;{const a=n||Q.EMPTY_NODE;return lr(o,a)}}}else{const s=xn(t.visibleWrites,e);if(!r&&wc(s))return n;if(!r&&n==null&&!yc(s,_e()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Rt(c.path,e)||Rt(e,c.path))},a=Mp(t.allWrites,o,e),l=n||Q.EMPTY_NODE;return lr(a,l)}}}function Sb(t,e,n){let i=Q.EMPTY_NODE;const r=wi(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Te,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=xn(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const l=lr(xn(s,new ve(o)),a);i=i.updateImmediateChild(o,l)}),Op(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=xn(t.visibleWrites,e);return Op(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Rb(t,e,n,i,r){k(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Pe(e,n);if(yc(t.visibleWrites,s))return null;{const o=xn(t.visibleWrites,s);return wc(o)?r.getChild(n):lr(o,r.getChild(n))}}function Ab(t,e,n,i){const r=Pe(e,n),s=wi(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=xn(t.visibleWrites,r);return lr(o,i.getNode().getImmediateChild(n))}else return null}function kb(t,e){return wi(t.visibleWrites,e)}function Nb(t,e,n,i,r,s,o){let a;const l=xn(t.visibleWrites,e),c=wi(l,_e());if(c!=null)a=c;else if(n!=null)a=lr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=h.getNext();for(;p&&u.length<r;)d(p,i)!==0&&u.push(p),p=h.getNext();return u}else return[]}function Pb(){return{visibleWrites:Ut.empty(),allWrites:[],lastWriteId:-1}}function Vo(t,e,n,i){return Lp(t.writeTree,t.treePath,e,n,i)}function Ec(t,e){return Sb(t.writeTree,t.treePath,e)}function Dp(t,e,n,i){return Rb(t.writeTree,t.treePath,e,n,i)}function Wo(t,e){return kb(t.writeTree,Pe(t.treePath,e))}function Ob(t,e,n,i,r,s){return Nb(t.writeTree,t.treePath,e,n,i,r,s)}function Ic(t,e,n){return Ab(t.writeTree,t.treePath,e,n)}function Fp(t,e){return Up(Pe(t.treePath,e),t.writeTree)}function Up(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,ns(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,ts(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,sr(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,ns(i,e.snapshotNode,r.oldSnap));else throw Ji("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Mb{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Vp=new Mb;class bc{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new On(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ic(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:yi(this.viewCache_),s=Ob(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Lb(t){return{filter:t}}function Db(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fb(t,e,n,i,r){const s=new xb;let o,a;if(n.type===Ft.OVERWRITE){const c=n;c.source.fromUser?o=Cc(t,e,c.path,c.snap,i,r,s):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!oe(c.path),o=Bo(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Ft.MERGE){const c=n;c.source.fromUser?o=Vb(t,e,c.path,c.children,i,r,s):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Tc(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Ft.ACK_USER_WRITE){const c=n;c.revert?o=jb(t,e,c.path,i,r,s):o=Wb(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Ft.LISTEN_COMPLETE)o=Bb(t,e,n.path,i,s);else throw Ji("Unknown operation type: "+n.type);const l=s.getChanges();return Ub(e,o,l),{viewCache:o,changes:l}}function Ub(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Fo(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Sp(Fo(e)))}}function Wp(t,e,n,i,r,s){const o=e.eventCache;if(Wo(i,n)!=null)return e;{let a,l;if(oe(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=yi(e),u=c instanceof Q?c:Q.EMPTY_NODE,d=Ec(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Vo(i,yi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=se(n);if(c===".priority"){k(Pn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Dp(i,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=be(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Dp(i,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Ic(i,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,r,s):a=o.getNode()}}return os(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function Bo(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(oe(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),p,null)}else{const p=se(n);if(!l.isCompleteForPath(n)&&Pn(n)>1)return e;const g=be(n),I=l.getNode().getImmediateChild(p).updateChild(g,i);p===".priority"?c=u.updatePriority(l.getNode(),I):c=u.updateChild(l.getNode(),p,I,g,Vp,null)}const d=Np(e,c,l.isFullyInitialized()||oe(n),u.filtersNodes()),h=new bc(r,d,s);return Wp(t,d,n,r,h,a)}function Cc(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new bc(r,e,s);if(oe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=os(e,c,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=os(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=be(n),p=a.getNode().getImmediateChild(d);let g;if(oe(h))g=i;else{const R=u.getCompleteChild(d);R!=null?ec(h)===".priority"&&R.getChild(hp(h)).isEmpty()?g=R:g=R.updateChild(h,i):g=Q.EMPTY_NODE}if(p.equals(g))l=e;else{const R=t.filter.updateChild(a.getNode(),d,g,h,u,o);l=os(e,R,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Bp(t,e){return t.eventCache.isCompleteForChild(e)}function Vb(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=Pe(n,l);Bp(e,se(u))&&(a=Cc(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=Pe(n,l);Bp(e,se(u))||(a=Cc(t,a,u,c,r,s,o))}),a}function jp(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Tc(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;oe(n)?c=i:c=new Se(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),g=jp(t,p,h);l=Bo(t,l,new ve(d),g,r,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const p=!e.serverCache.isCompleteForChild(d)&&h.value===void 0;if(!u.hasChild(d)&&!p){const g=e.serverCache.getNode().getImmediateChild(d),R=jp(t,g,h);l=Bo(t,l,new ve(d),R,r,s,o,a)}}),l}function Wb(t,e,n,i,r,s,o){if(Wo(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(oe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Bo(t,e,n,l.getNode().getChild(n),r,s,a,o);if(oe(n)){let c=new Se(null);return l.getNode().forEachChild(Zt,(u,d)=>{c=c.set(new ve(u),d)}),Tc(t,e,n,c,r,s,a,o)}else return e}else{let c=new Se(null);return i.foreach((u,d)=>{const h=Pe(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Tc(t,e,n,c,r,s,a,o)}}function Bb(t,e,n,i,r){const s=e.serverCache,o=Np(e,s.getNode(),s.isFullyInitialized()||oe(n),s.isFiltered());return Wp(t,o,n,i,Vp,r)}function jb(t,e,n,i,r,s){let o;if(Wo(i,n)!=null)return e;{const a=new bc(i,e,r),l=e.eventCache.getNode();let c;if(oe(n)||se(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Vo(i,yi(e));else{const d=e.serverCache.getNode();k(d instanceof Q,"serverChildren would be complete if leaf node"),u=Ec(i,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=se(n);let d=Ic(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,be(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Q.EMPTY_NODE,be(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Vo(i,yi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Wo(i,_e())!=null,os(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $b{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new cc(i.getIndex()),s=ib(i);this.processor_=Lb(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(Q.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Q.EMPTY_NODE,a.getNode(),null),u=new On(l,o.isFullyInitialized(),r.filtersNodes()),d=new On(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Do(d,u),this.eventGenerator_=new pb(this.query_)}get query(){return this.query_}}function Hb(t){return t.viewCache_.serverCache.getNode()}function zb(t){return Fo(t.viewCache_)}function qb(t,e){const n=yi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function $p(t){return t.eventRegistrations_.length===0}function Gb(t,e){t.eventRegistrations_.push(e)}function Hp(t,e,n){const i=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function zp(t,e,n,i){e.type===Ft.MERGE&&e.source.queryId!==null&&(k(yi(t.viewCache_),"We should always have a full cache before handling merges"),k(Fo(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=Fb(t.processor_,r,e,n,i);return Db(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,qp(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Kb(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(s,o)=>{i.push(sr(s,o))}),n.isFullyInitialized()&&i.push(Sp(n.getNode())),qp(t,i,n.getNode(),e)}function qp(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return mb(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let jo;class Gp{constructor(){this.views=new Map}}function Yb(t){k(!jo,"__referenceConstructor has already been defined"),jo=t}function Qb(){return k(jo,"Reference.ts has not been loaded"),jo}function Jb(t){return t.views.size===0}function Sc(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return k(s!=null,"SyncTree gave us an op for an invalid query."),zp(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(zp(o,e,n,i));return s}}function Kp(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Vo(n,r?i:null),l=!1;a?l=!0:i instanceof Q?(a=Ec(n,i),l=!1):(a=Q.EMPTY_NODE,l=!1);const c=Do(new On(a,l,!1),new On(i,r,!1));return new $b(e,c)}return o}function Xb(t,e,n,i,r,s){const o=Kp(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Gb(o,n),Kb(o,n)}function Zb(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=Ln(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(Hp(c,n,i)),$p(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(Hp(l,n,i)),$p(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ln(t)&&s.push(new(Qb())(e._repo,e._path)),{removed:s,events:o}}function Yp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mn(t,e){let n=null;for(const i of t.views.values())n=n||qb(i,e);return n}function Qp(t,e){if(e._queryParams.loadsAllData())return $o(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Jp(t,e){return Qp(t,e)!=null}function Ln(t){return $o(t)!=null}function $o(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Ho;function eC(t){k(!Ho,"__referenceConstructor has already been defined"),Ho=t}function tC(){return k(Ho,"Reference.ts has not been loaded"),Ho}let nC=1;class Xp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=Pb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Rc(t,e,n,i,r){return yb(t.pendingWriteTree_,e,n,i,r),r?cr(t,new vi(pc(),e,n)):[]}function iC(t,e,n,i){wb(t.pendingWriteTree_,e,n,i);const r=Se.fromObject(n);return cr(t,new ar(pc(),e,r))}function Dn(t,e,n=!1){const i=Eb(t.pendingWriteTree_,e);if(Ib(t.pendingWriteTree_,e)){let s=new Se(null);return i.snap!=null?s=s.set(_e(),!0):ze(i.children,o=>{s=s.set(new ve(o),!0)}),cr(t,new Lo(i.path,s,n))}else return[]}function ls(t,e,n){return cr(t,new vi(mc(),e,n))}function rC(t,e,n){const i=Se.fromObject(n);return cr(t,new ar(mc(),e,i))}function sC(t,e){return cr(t,new rs(mc(),e))}function oC(t,e,n){const i=kc(t,n);if(i){const r=Nc(i),s=r.path,o=r.queryId,a=at(s,e),l=new rs(gc(o),a);return Pc(t,s,l)}else return[]}function Ac(t,e,n,i){const r=e._path,s=t.syncPointTree_.get(r);let o=[];if(s&&(e._queryIdentifier==="default"||Jp(s,e))){const a=Zb(s,e,n,i);Jb(s)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,h)=>Ln(h));if(c&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const h=uC(d);for(let p=0;p<h.length;++p){const g=h[p],R=g.query,I=nm(t,g);t.listenProvider_.startListening(cs(R),qo(t,R),I.hashFn,I.onComplete)}}}if(!u&&l.length>0&&!i)if(c){const d=null;t.listenProvider_.stopListening(cs(e),d)}else l.forEach(d=>{const h=t.queryToTagMap.get(Go(d));t.listenProvider_.stopListening(cs(d),h)});dC(t,l)}return o}function aC(t,e,n,i){const r=kc(t,i);if(r!=null){const s=Nc(r),o=s.path,a=s.queryId,l=at(o,e),c=new vi(gc(a),l,n);return Pc(t,o,c)}else return[]}function lC(t,e,n,i){const r=kc(t,i);if(r){const s=Nc(r),o=s.path,a=s.queryId,l=at(o,e),c=Se.fromObject(n),u=new ar(gc(a),l,c);return Pc(t,o,u)}else return[]}function Zp(t,e,n){const i=e._path;let r=null,s=!1;t.syncPointTree_.foreachOnPath(i,(d,h)=>{const p=at(d,i);r=r||Mn(h,p),s=s||Ln(h)});let o=t.syncPointTree_.get(i);o?(s=s||Ln(o),r=r||Mn(o,_e())):(o=new Gp,t.syncPointTree_=t.syncPointTree_.set(i,o));let a;r!=null?a=!0:(a=!1,r=Q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((h,p)=>{const g=Mn(p,_e());g&&(r=r.updateImmediateChild(h,g))}));const l=Jp(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=Go(e);k(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=hC();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const c=Uo(t.pendingWriteTree_,i);let u=Xb(o,e,n,c,r,a);if(!l&&!s){const d=Qp(o,e);u=u.concat(fC(t,e,d))}return u}function zo(t,e,n){const i=!0,r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=at(o,e),c=Mn(a,l);if(c)return c});return Lp(r,e,s,n,i)}function cC(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=at(c,n);i=i||Mn(u,d)});let r=t.syncPointTree_.get(n);r?i=i||Mn(r,_e()):(r=new Gp,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=i!=null,o=s?new On(i,!0,!1):null,a=Uo(t.pendingWriteTree_,e._path),l=Kp(r,e,a,s?o.getNode():Q.EMPTY_NODE,s);return zb(l)}function cr(t,e){return em(e,t.syncPointTree_,null,Uo(t.pendingWriteTree_,_e()))}function em(t,e,n,i){if(oe(t.path))return tm(t,e,n,i);{const r=e.get(_e());n==null&&r!=null&&(n=Mn(r,_e()));let s=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Fp(i,o);s=s.concat(em(a,l,c,u))}return r&&(s=s.concat(Sc(r,t,i,n))),s}}function tm(t,e,n,i){const r=e.get(_e());n==null&&r!=null&&(n=Mn(r,_e()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Fp(i,o),u=t.operationForChild(o);u&&(s=s.concat(tm(u,a,l,c)))}),r&&(s=s.concat(Sc(r,t,i,n))),s}function nm(t,e){const n=e.query,i=qo(t,n);return{hashFn:()=>(Hb(e)||Q.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?oC(t,n._path,i):sC(t,n._path);{const s=nI(r,n);return Ac(t,n,null,s)}}}}function qo(t,e){const n=Go(e);return t.queryToTagMap.get(n)}function Go(t){return t._path.toString()+"$"+t._queryIdentifier}function kc(t,e){return t.tagToQueryMap.get(e)}function Nc(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function Pc(t,e,n){const i=t.syncPointTree_.get(e);k(i,"Missing sync point for query tag that we're tracking");const r=Uo(t.pendingWriteTree_,e);return Sc(i,n,r,null)}function uC(t){return t.fold((e,n,i)=>{if(n&&Ln(n))return[$o(n)];{let r=[];return n&&(r=Yp(n)),ze(i,(s,o)=>{r=r.concat(o)}),r}})}function cs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(tC())(t._repo,t._path):t}function dC(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=Go(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function hC(){return nC++}function fC(t,e,n){const i=e._path,r=qo(t,e),s=nm(t,n),o=t.listenProvider_.startListening(cs(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)k(!Ln(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!oe(c)&&u&&Ln(u))return[$o(u).query];{let h=[];return u&&(h=h.concat(Yp(u).map(p=>p.query))),ze(d,(p,g)=>{h=h.concat(g)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(cs(u),qo(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Oc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Oc(n)}node(){return this.node_}}class xc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new xc(this.syncTree_,n)}node(){return zo(this.syncTree_,this.path_)}}const pC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},im=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gC(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},gC=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&k(!1,"Unexpected increment value: "+i);const r=e.node();if(k(r!==null&&typeof r!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},rm=function(t,e,n,i){return Lc(e,new xc(n,t),i)},Mc=function(t,e,n){return Lc(t,new Oc(e),n)};function Lc(t,e,n){const i=t.getPriority().val(),r=im(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=im(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Ge(a,Oe(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Ge(r))),o.forEachChild(Te,(a,l)=>{const c=Lc(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Dc{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Ko(t,e){let n=e instanceof ve?e:new ve(e),i=t,r=se(n);for(;r!==null;){const s=ai(i.node.children,r)||{children:{},childCount:0};i=new Dc(r,i,s),n=be(n),r=se(n)}return i}function Ei(t){return t.node.value}function Fc(t,e){t.node.value=e,Uc(t)}function sm(t){return t.node.childCount>0}function _C(t){return Ei(t)===void 0&&!sm(t)}function Yo(t,e){ze(t.node.children,(n,i)=>{e(new Dc(n,t,i))})}function om(t,e,n,i){n&&!i&&e(t),Yo(t,r=>{om(r,e,!0,i)}),n&&i&&e(t)}function vC(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function us(t){return new ve(t.parent===null?t.name:us(t.parent)+"/"+t.name)}function Uc(t){t.parent!==null&&yC(t.parent,t.name,t)}function yC(t,e,n){const i=_C(n),r=yt(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Uc(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Uc(t))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const wC=/[\[\].#$\/\u0000-\u001F\u007F]/,EC=/[\[\].#$\u0000-\u001F\u007F]/,Vc=10*1024*1024,Qo=function(t){return typeof t=="string"&&t.length!==0&&!wC.test(t)},am=function(t){return typeof t=="string"&&t.length!==0&&!EC.test(t)},IC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),am(t)},ds=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!bo(t)||t&&typeof t=="object"&&yt(t,".sv")},en=function(t,e,n,i){i&&e===void 0||hs(dt(t,"value"),e,n)},hs=function(t,e,n){const i=n instanceof ve?new LI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+_i(i));if(typeof e=="function")throw new Error(t+"contains a function "+_i(i)+" with contents = "+e.toString());if(bo(e))throw new Error(t+"contains "+e.toString()+" "+_i(i));if(typeof e=="string"&&e.length>Vc/3&&wo(e)>Vc)throw new Error(t+"contains a string greater than "+Vc+" utf8 bytes "+_i(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(ze(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Qo(o)))throw new Error(t+" contains an invalid key ("+o+") "+_i(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);DI(i,o),hs(t,a,i),FI(i)}),r&&s)throw new Error(t+' contains ".value" child '+_i(i)+" in addition to actual children.")}},bC=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=Jr(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Qo(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(MI);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&Rt(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},lm=function(t,e,n,i){if(i&&e===void 0)return;const r=dt(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];ze(e,(o,a)=>{const l=new ve(o);if(hs(r,a,Pe(n,l)),ec(l)===".priority"&&!ds(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),bC(r,s)},Wc=function(t,e,n){if(!(n&&e===void 0)){if(bo(e))throw new Error(dt(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ds(e))throw new Error(dt(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},fs=function(t,e,n,i){if(!(i&&n===void 0)&&!Qo(n))throw new Error(dt(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},ps=function(t,e,n,i){if(!(i&&n===void 0)&&!am(n))throw new Error(dt(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},CC=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ps(t,e,n,i)},At=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},cm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Qo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!IC(n))throw new Error(dt(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class TC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Jo(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!tc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Bc(t,e,n){Jo(t,n),um(t,i=>tc(i,e))}function kt(t,e,n){Jo(t,n),um(t,i=>Rt(i,e)||Rt(e,i))}function um(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(SC(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function SC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();mi&&He("event: "+n.toString()),er(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const dm="repo_interrupt",RC=25;class AC{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mo(),this.transactionQueueTree_=new Dc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kC(t,e,n){if(t.stats_=Ql(t.repoInfo_),t.forceRestClient_||rI())t.server_=new xo(t.repoInfo_,(i,r,s,o)=>{fm(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>pm(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new pn(t.repoInfo_,e,(i,r,s,o)=>{fm(t,i,r,s,o)},i=>{pm(t,i)},i=>{NC(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=uI(t.repoInfo_,()=>new fb(t.stats_,t.server_)),t.infoData_=new lb,t.infoSyncTree_=new Xp({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=ls(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jc(t,"connected",!1),t.serverSyncTree_=new Xp({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);kt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function hm(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ms(t){return pC({timestamp:hm(t)})}function fm(t,e,n,i,r){t.dataUpdateCount++;const s=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=yo(n,c=>Oe(c));o=lC(t.serverSyncTree_,s,l,r)}else{const l=Oe(n);o=aC(t.serverSyncTree_,s,l,r)}else if(i){const l=yo(n,c=>Oe(c));o=rC(t.serverSyncTree_,s,l)}else{const l=Oe(n);o=ls(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=dr(t,s)),kt(t.eventQueue_,a,o)}function pm(t,e){jc(t,"connected",e),e===!1&&xC(t)}function NC(t,e){ze(e,(n,i)=>{jc(t,n,i)})}function jc(t,e,n){const i=new ve("/.info/"+e),r=Oe(n);t.infoData_.updateSnapshot(i,r);const s=ls(t.infoSyncTree_,i,r);kt(t.eventQueue_,i,s)}function Xo(t){return t.nextWriteId_++}function PC(t,e){const n=cC(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(i=>{const r=Oe(i).withIndex(e._queryParams.getIndex()),s=ls(t.serverSyncTree_,e._path,r);return Bc(t.eventQueue_,e._path,s),Promise.resolve(r)},i=>(ur(t,"get for query "+Ue(e)+" failed: "+i),Promise.reject(new Error(i))))}function $c(t,e,n,i,r){ur(t,"set",{path:e.toString(),value:n,priority:i});const s=ms(t),o=Oe(n,i),a=zo(t.serverSyncTree_,e),l=Mc(o,a,s),c=Xo(t),u=Rc(t.serverSyncTree_,e,l,c,!0);Jo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,p)=>{const g=h==="ok";g||ot("set at "+e+" failed: "+h);const R=Dn(t.serverSyncTree_,c,!g);kt(t.eventQueue_,e,R),Fn(t,r,h,p)});const d=qc(t,e);dr(t,d),kt(t.eventQueue_,d,[])}function OC(t,e,n,i){ur(t,"update",{path:e.toString(),value:n});let r=!0;const s=ms(t),o={};if(ze(n,(a,l)=>{r=!1,o[a]=rm(Pe(e,a),Oe(l),t.serverSyncTree_,s)}),r)He("update() called with empty data.  Don't do anything."),Fn(t,i,"ok",void 0);else{const a=Xo(t),l=iC(t.serverSyncTree_,e,o,a);Jo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||ot("update at "+e+" failed: "+c);const h=Dn(t.serverSyncTree_,a,!d),p=h.length>0?dr(t,e):e;kt(t.eventQueue_,p,h),Fn(t,i,c,u)}),ze(n,c=>{const u=qc(t,Pe(e,c));dr(t,u)}),kt(t.eventQueue_,e,[])}}function xC(t){ur(t,"onDisconnectEvents");const e=ms(t),n=Mo();fc(t.onDisconnect_,_e(),(r,s)=>{const o=rm(r,s,t.serverSyncTree_,e);or(n,r,o)});let i=[];fc(n,_e(),(r,s)=>{i=i.concat(ls(t.serverSyncTree_,r,s));const o=qc(t,r);dr(t,o)}),t.onDisconnect_=Mo(),kt(t.eventQueue_,_e(),i)}function MC(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&hc(t.onDisconnect_,e),Fn(t,n,i,r)})}function mm(t,e,n,i){const r=Oe(n);t.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&or(t.onDisconnect_,e,r),Fn(t,i,s,o)})}function LC(t,e,n,i,r){const s=Oe(n,i);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&or(t.onDisconnect_,e,s),Fn(t,r,o,a)})}function DC(t,e,n,i){if(vo(n)){He("onDisconnect().update() called with empty data.  Don't do anything."),Fn(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(r,s)=>{r==="ok"&&ze(n,(o,a)=>{const l=Oe(a);or(t.onDisconnect_,Pe(e,o),l)}),Fn(t,i,r,s)})}function FC(t,e,n){let i;se(e._path)===".info"?i=Zp(t.infoSyncTree_,e,n):i=Zp(t.serverSyncTree_,e,n),Bc(t.eventQueue_,e._path,i)}function Hc(t,e,n){let i;se(e._path)===".info"?i=Ac(t.infoSyncTree_,e,n):i=Ac(t.serverSyncTree_,e,n),Bc(t.eventQueue_,e._path,i)}function gm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(dm)}function UC(t){t.persistentConnection_&&t.persistentConnection_.resume(dm)}function ur(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),He(n,...e)}function Fn(t,e,n,i){e&&er(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function VC(t,e,n,i,r,s){ur(t,"transaction on "+e);const o={path:e,update:n,onComplete:i,status:null,order:xf(),applyLocally:s,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=zc(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{hs("transaction failed: Data returned ",l,o.path),o.status=0;const c=Ko(t.transactionQueueTree_,e),u=Ei(c)||[];u.push(o),Fc(c,u);let d;typeof l=="object"&&l!==null&&yt(l,".priority")?(d=ai(l,".priority"),k(ds(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(zo(t.serverSyncTree_,e)||Q.EMPTY_NODE).getPriority().val();const h=ms(t),p=Oe(l,d),g=Mc(p,a,h);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=g,o.currentWriteId=Xo(t);const R=Rc(t.serverSyncTree_,e,g,o.currentWriteId,o.applyLocally);kt(t.eventQueue_,e,R),Zo(t,t.transactionQueueTree_)}}function zc(t,e,n){return zo(t.serverSyncTree_,e,n)||Q.EMPTY_NODE}function Zo(t,e=t.transactionQueueTree_){if(e||ea(t,e),Ei(e)){const n=vm(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&WC(t,us(e),n)}else sm(e)&&Yo(e,n=>{Zo(t,n)})}function WC(t,e,n){const i=n.map(c=>c.currentWriteId),r=zc(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];k(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=at(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ur(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Dn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ea(t,Ko(t.transactionQueueTree_,e)),Zo(t,t.transactionQueueTree_),kt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)er(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ot("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}dr(t,e)}},o)}function dr(t,e){const n=_m(t,e),i=us(n),r=vm(t,n);return BC(t,r,i),i}function BC(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=at(n,l.path);let u=!1,d;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(Dn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=RC)u=!0,d="maxretry",r=r.concat(Dn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=zc(t,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){hs("transaction failed: Data returned ",p,l.path);let g=Oe(p);typeof p=="object"&&p!=null&&yt(p,".priority")||(g=g.updatePriority(h.getPriority()));const I=l.currentWriteId,y=ms(t),T=Mc(g,h,y);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=T,l.currentWriteId=Xo(t),o.splice(o.indexOf(I),1),r=r.concat(Rc(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),r=r.concat(Dn(t.serverSyncTree_,I,!0))}else u=!0,d="nodata",r=r.concat(Dn(t.serverSyncTree_,l.currentWriteId,!0))}kt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}ea(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)er(i[a]);Zo(t,t.transactionQueueTree_)}function _m(t,e){let n,i=t.transactionQueueTree_;for(n=se(e);n!==null&&Ei(i)===void 0;)i=Ko(i,n),e=be(e),n=se(e);return i}function vm(t,e){const n=[];return ym(t,e,n),n.sort((i,r)=>i.order-r.order),n}function ym(t,e,n){const i=Ei(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Yo(e,r=>{ym(t,r,n)})}function ea(t,e){const n=Ei(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Fc(e,n.length>0?n:void 0)}Yo(e,i=>{ea(t,i)})}function qc(t,e){const n=us(_m(t,e)),i=Ko(t.transactionQueueTree_,e);return vC(i,r=>{Gc(t,r)}),Gc(t,i),om(i,r=>{Gc(t,r)}),n}function Gc(t,e){const n=Ei(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Dn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Fc(e,void 0):n.length=s+1,kt(t.eventQueue_,us(e),r);for(let o=0;o<i.length;o++)er(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function jC(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(s){}e+="/"+r}return e}function $C(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ot(`Invalid query segment '${n}' in query '${t}'`)}return e}const Kc=function(t,e){const n=HC(t),i=n.namespace;n.domain==="firebase.com"&&Jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||JE();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Kf(n.host,n.secure,i,e,r,"",i!==n.subdomain),path:new ve(n.pathString)}},HC=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(r=jC(t.substring(u,d)));const h=$C(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class wm{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ue(this.snapshot.exportVal())}}class Em{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Im{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */class zC{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new ut;return MC(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){At("OnDisconnect.remove",this._path);const e=new ut;return mm(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){At("OnDisconnect.set",this._path),en("OnDisconnect.set",e,this._path,!1);const n=new ut;return mm(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){At("OnDisconnect.setWithPriority",this._path),en("OnDisconnect.setWithPriority",e,this._path,!1),Wc("OnDisconnect.setWithPriority",n,!1);const i=new ut;return LC(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){At("OnDisconnect.update",this._path),lm("OnDisconnect.update",e,this._path,!1);const n=new ut;return DC(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class ft{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return oe(this._path)?null:ec(this._path)}get ref(){return new Nt(this._repo,this._path)}get _queryIdentifier(){const e=Ap(this._queryParams),n=Hl(e);return n==="{}"?"default":n}get _queryObject(){return Ap(this._queryParams)}isEqual(e){if(e=Z(e),!(e instanceof ft))return!1;const n=this._repo===e._repo,i=tc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+xI(this._path)}}function ta(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Un(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Zt){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==fn)throw new Error(i);if(typeof e!="string")throw new Error(r)}if(t.hasEnd()){if(t.getIndexEndName()!==Xt)throw new Error(i);if(typeof n!="string")throw new Error(r)}}else if(t.getIndex()===Te){if(e!=null&&!ds(e)||n!=null&&!ds(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(k(t.getIndex()instanceof oc||t.getIndex()===ac,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function na(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Nt extends ft{constructor(e,n){super(e,n,new Po,!1)}get parent(){const e=hp(this._path);return e===null?null:new Nt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ii{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),i=bi(this.ref,e);return new Ii(this._node.getChild(n),i,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Ii(r,bi(this.ref,i),Te)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bm(t,e){return t=Z(t),t._checkNotDeleted("ref"),e!==void 0?bi(t._root,e):t._root}function Cm(t,e){t=Z(t),t._checkNotDeleted("refFromURL");const n=Kc(e,t._repo.repoInfo_.nodeAdmin);cm("refFromURL",n);const i=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&i.host!==t._repo.repoInfo_.host&&Jt("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+t._repo.repoInfo_.host+")"),bm(t,n.path.toString())}function bi(t,e){return t=Z(t),se(t._path)===null?CC("child","path",e,!1):ps("child","path",e,!1),new Nt(t._repo,Pe(t._path,e))}function qC(t,e){t=Z(t),At("push",t._path),en("push",e,t._path,!0);const n=hm(t._repo),i=eb(n),r=bi(t,i),s=bi(t,i);let o;return e!=null?o=Yc(s,e).then(()=>s):o=Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function GC(t){return At("remove",t._path),Yc(t,null)}function Yc(t,e){t=Z(t),At("set",t._path),en("set",e,t._path,!1);const n=new ut;return $c(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function KC(t,e){t=Z(t),At("setPriority",t._path),Wc("setPriority",e,!1);const n=new ut;return $c(t._repo,Pe(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function YC(t,e,n){if(At("setWithPriority",t._path),en("setWithPriority",e,t._path,!1),Wc("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const i=new ut;return $c(t._repo,t._path,e,n,i.wrapCallback(()=>{})),i.promise}function QC(t,e){lm("update",e,t._path,!1);const n=new ut;return OC(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function JC(t){return t=Z(t),PC(t._repo,t).then(e=>new Ii(e,new Nt(t._repo,t._path),t._queryParams.getIndex()))}class ia{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new wm("value",this,new Ii(e.snapshotNode,new Nt(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Em(this,e,n):null}matches(e){return e instanceof ia?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ra{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Em(this,e,n):null}createEvent(e,n){k(e.childName!=null,"Child events should have a childName.");const i=bi(new Nt(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new wm(e.type,this,new Ii(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ra?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function gs(t,e,n,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const l=n,c=(u,d)=>{Hc(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Im(n,s||void 0),a=e==="value"?new ia(o):new ra(e,o);return FC(t._repo,t,a),()=>Hc(t._repo,t,a)}function Qc(t,e,n,i){return gs(t,"value",e,n,i)}function Tm(t,e,n,i){return gs(t,"child_added",e,n,i)}function Sm(t,e,n,i){return gs(t,"child_changed",e,n,i)}function Rm(t,e,n,i){return gs(t,"child_moved",e,n,i)}function Am(t,e,n,i){return gs(t,"child_removed",e,n,i)}function km(t,e,n){let i=null;const r=n?new Im(n):null;e==="value"?i=new ia(r):e&&(i=new ra(e,r)),Hc(t._repo,t,i)}class Vt{}class Nm extends Vt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){en("endAt",this._value,e._path,!0);const n=dc(e._queryParams,this._value,this._key);if(na(n),Un(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ft(e._repo,e._path,n,e._orderByCalled)}}function XC(t,e){return fs("endAt","key",e,!0),new Nm(t,e)}class ZC extends Vt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){en("endBefore",this._value,e._path,!1);const n=ab(e._queryParams,this._value,this._key);if(na(n),Un(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ft(e._repo,e._path,n,e._orderByCalled)}}function eT(t,e){return fs("endBefore","key",e,!0),new ZC(t,e)}class Pm extends Vt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){en("startAt",this._value,e._path,!0);const n=uc(e._queryParams,this._value,this._key);if(na(n),Un(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ft(e._repo,e._path,n,e._orderByCalled)}}function tT(t=null,e){return fs("startAt","key",e,!0),new Pm(t,e)}class nT extends Vt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){en("startAfter",this._value,e._path,!1);const n=ob(e._queryParams,this._value,this._key);if(na(n),Un(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ft(e._repo,e._path,n,e._orderByCalled)}}function iT(t,e){return fs("startAfter","key",e,!0),new nT(t,e)}class rT extends Vt{constructor(e){super();this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ft(e._repo,e._path,rb(e._queryParams,this._limit),e._orderByCalled)}}function sT(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new rT(t)}class oT extends Vt{constructor(e){super();this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ft(e._repo,e._path,sb(e._queryParams,this._limit),e._orderByCalled)}}function aT(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new oT(t)}class lT extends Vt{constructor(e){super();this._path=e}_apply(e){ta(e,"orderByChild");const n=new ve(this._path);if(oe(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new oc(n),r=Oo(e._queryParams,i);return Un(r),new ft(e._repo,e._path,r,!0)}}function cT(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ps("orderByChild","path",t,!1),new lT(t)}class uT extends Vt{_apply(e){ta(e,"orderByKey");const n=Oo(e._queryParams,Zt);return Un(n),new ft(e._repo,e._path,n,!0)}}function dT(){return new uT}class hT extends Vt{_apply(e){ta(e,"orderByPriority");const n=Oo(e._queryParams,Te);return Un(n),new ft(e._repo,e._path,n,!0)}}function fT(){return new hT}class pT extends Vt{_apply(e){ta(e,"orderByValue");const n=Oo(e._queryParams,ac);return Un(n),new ft(e._repo,e._path,n,!0)}}function mT(){return new pT}class gT extends Vt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){if(en("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Nm(this._value,this._key)._apply(new Pm(this._value,this._key)._apply(e))}}function _T(t,e){return fs("equalTo","key",e,!0),new gT(t,e)}function Wt(t,...e){let n=Z(t);for(const i of e)n=i._apply(n);return n}Yb(Nt);eC(Nt);/**
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
 */const vT="FIREBASE_DATABASE_EMULATOR_HOST",Jc={};let yT=!1;function wT(t,e,n,i){t.repoInfo_=new Kf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),i&&(t.authTokenProvider_=i)}function Om(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),He("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Kc(s,r),a=o.repoInfo,l,c;typeof process!="undefined"&&(c=process.env[vT]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Kc(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new tr(tr.OWNER):new oI(t.name,t.options,e);cm("Invalid Firebase Database URL",o),oe(o.path)||Jt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=IT(a,t,u,new sI(t.name,n));return new bT(d,t)}function ET(t,e){const n=Jc[e];(!n||n[t.key]!==t)&&Jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),gm(t),delete n[t.key]}function IT(t,e,n,i){let r=Jc[e.name];r||(r={},Jc[e.name]=r);let s=r[t.toURLString()];return s&&Jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new AC(t,yT,n,i),r[t.toURLString()]=s,s}class bT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Nt(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ET(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jt("Cannot call "+e+" on a deleted database.")}}function CT(t,e,n,i={}){t=Z(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Jt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new tr(tr.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Lw(i.mockUserToken,t.app.options.projectId);s=new tr(o)}wT(r,e,n,s)}function TT(t){t=Z(t),t._checkNotDeleted("goOffline"),gm(t._repo)}function ST(t){t=Z(t),t._checkNotDeleted("goOnline"),UC(t._repo)}function RT(t,e){Df(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function AT(t){Pf(hi),di(new Qt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Om(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),fi(GE,KE,t)}/**
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
 */const kT={".sv":"timestamp"};function NT(){return kT}function PT(t){return{".sv":{increment:t}}}/**
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
 */class OT{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function xT(t,e,n){var i;if(t=Z(t),At("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const r=(i=n==null?void 0:n.applyLocally)!==null&&i!==void 0?i:!0,s=new ut,o=(l,c,u)=>{let d=null;l?s.reject(l):(d=new Ii(u,new Nt(t._repo,t._path),Te),s.resolve(new OT(c,d)))},a=Qc(t,()=>{});return VC(t._repo,t._path,e,o,a,r),s.promise}pn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};AT();const MT="@firebase/database-compat",LT="0.1.1";/**
 * @license
 * Copyright 2021 Google LLC
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
 */const DT=new $r("@firebase/database-compat"),xm=function(t){const e="FIREBASE WARNING: "+t;DT.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
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
 */const FT=function(t,e,n,i){if(!(i&&n===void 0)&&typeof n!="boolean")throw new Error(dt(t,e)+"must be a boolean.")},UT=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(dt(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class VT{constructor(e){this._delegate=e}cancel(e){J("OnDisconnect.cancel",0,1,arguments.length),$e("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),i=>e(i)),n}remove(e){J("OnDisconnect.remove",0,1,arguments.length),$e("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),i=>e(i)),n}set(e,n){J("OnDisconnect.set",1,2,arguments.length),$e("OnDisconnect.set","onComplete",n,!0);const i=this._delegate.set(e);return n&&i.then(()=>n(null),r=>n(r)),i}setWithPriority(e,n,i){J("OnDisconnect.setWithPriority",2,3,arguments.length),$e("OnDisconnect.setWithPriority","onComplete",i,!0);const r=this._delegate.setWithPriority(e,n);return i&&r.then(()=>i(null),s=>i(s)),r}update(e,n){if(J("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,xm("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}$e("OnDisconnect.update","onComplete",n,!0);const i=this._delegate.update(e);return n&&i.then(()=>n(null),r=>n(r)),i}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class WT{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return J("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vn{constructor(e,n){this._database=e,this._delegate=n}val(){return J("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return J("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return J("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return J("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return J("DataSnapshot.child",0,1,arguments.length),e=String(e),ps("DataSnapshot.child","path",e,!1),new Vn(this._database,this._delegate.child(e))}hasChild(e){return J("DataSnapshot.hasChild",1,1,arguments.length),ps("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return J("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return J("DataSnapshot.forEach",1,1,arguments.length),$e("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new Vn(this._database,n)))}hasChildren(){return J("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return J("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return J("DataSnapshot.ref",0,0,arguments.length),new wt(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Xe{constructor(e,n){this.database=e,this._delegate=n}on(e,n,i,r){var s;J("Query.on",2,4,arguments.length),$e("Query.on","callback",n,!1);const o=Xe.getCancelAndContextArgs_("Query.on",i,r),a=(c,u)=>{n.call(o.context,new Vn(this.database,c),u)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return Qc(this._delegate,a,l),n;case"child_added":return Tm(this._delegate,a,l),n;case"child_removed":return Am(this._delegate,a,l),n;case"child_changed":return Sm(this._delegate,a,l),n;case"child_moved":return Rm(this._delegate,a,l),n;default:throw new Error(dt("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,i){if(J("Query.off",0,3,arguments.length),UT("Query.off",e,!0),$e("Query.off","callback",n,!0),mf("Query.off","context",i,!0),n){const r=()=>{};r.userCallback=n,r.context=i,km(this._delegate,e,r)}else km(this._delegate,e)}get(){return JC(this._delegate).then(e=>new Vn(this.database,e))}once(e,n,i,r){J("Query.once",1,4,arguments.length),$e("Query.once","callback",n,!0);const s=Xe.getCancelAndContextArgs_("Query.once",i,r),o=new ut,a=(c,u)=>{const d=new Vn(this.database,c);n&&n.call(s.context,d,u),o.resolve(d)};a.userCallback=n,a.context=s.context;const l=c=>{s.cancel&&s.cancel.call(s.context,c),o.reject(c)};switch(e){case"value":Qc(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":Tm(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":Am(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":Sm(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":Rm(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(dt("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return J("Query.limitToFirst",1,1,arguments.length),new Xe(this.database,Wt(this._delegate,sT(e)))}limitToLast(e){return J("Query.limitToLast",1,1,arguments.length),new Xe(this.database,Wt(this._delegate,aT(e)))}orderByChild(e){return J("Query.orderByChild",1,1,arguments.length),new Xe(this.database,Wt(this._delegate,cT(e)))}orderByKey(){return J("Query.orderByKey",0,0,arguments.length),new Xe(this.database,Wt(this._delegate,dT()))}orderByPriority(){return J("Query.orderByPriority",0,0,arguments.length),new Xe(this.database,Wt(this._delegate,fT()))}orderByValue(){return J("Query.orderByValue",0,0,arguments.length),new Xe(this.database,Wt(this._delegate,mT()))}startAt(e=null,n){return J("Query.startAt",0,2,arguments.length),new Xe(this.database,Wt(this._delegate,tT(e,n)))}startAfter(e=null,n){return J("Query.startAfter",0,2,arguments.length),new Xe(this.database,Wt(this._delegate,iT(e,n)))}endAt(e=null,n){return J("Query.endAt",0,2,arguments.length),new Xe(this.database,Wt(this._delegate,XC(e,n)))}endBefore(e=null,n){return J("Query.endBefore",0,2,arguments.length),new Xe(this.database,Wt(this._delegate,eT(e,n)))}equalTo(e,n){return J("Query.equalTo",1,2,arguments.length),new Xe(this.database,Wt(this._delegate,_T(e,n)))}toString(){return J("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return J("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(J("Query.isEqual",1,1,arguments.length),!(e instanceof Xe)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,i){const r={cancel:void 0,context:void 0};if(n&&i)r.cancel=n,$e(e,"cancel",r.cancel,!0),r.context=i,mf(e,"context",r.context,!0);else if(n)if(typeof n=="object"&&n!==null)r.context=n;else if(typeof n=="function")r.cancel=n;else throw new Error(dt(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return r}get ref(){return new wt(this.database,new Nt(this._delegate._repo,this._delegate._path))}}class wt extends Xe{constructor(e,n){super(e,new ft(n._repo,n._path,new Po,!1));this.database=e,this._delegate=n}getKey(){return J("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return J("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new wt(this.database,bi(this._delegate,e))}getParent(){J("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new wt(this.database,e):null}getRoot(){return J("Reference.root",0,0,arguments.length),new wt(this.database,this._delegate.root)}set(e,n){J("Reference.set",1,2,arguments.length),$e("Reference.set","onComplete",n,!0);const i=Yc(this._delegate,e);return n&&i.then(()=>n(null),r=>n(r)),i}update(e,n){if(J("Reference.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,xm("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}At("Reference.update",this._delegate._path),$e("Reference.update","onComplete",n,!0);const i=QC(this._delegate,e);return n&&i.then(()=>n(null),r=>n(r)),i}setWithPriority(e,n,i){J("Reference.setWithPriority",2,3,arguments.length),$e("Reference.setWithPriority","onComplete",i,!0);const r=YC(this._delegate,e,n);return i&&r.then(()=>i(null),s=>i(s)),r}remove(e){J("Reference.remove",0,1,arguments.length),$e("Reference.remove","onComplete",e,!0);const n=GC(this._delegate);return e&&n.then(()=>e(null),i=>e(i)),n}transaction(e,n,i){J("Reference.transaction",1,3,arguments.length),$e("Reference.transaction","transactionUpdate",e,!1),$e("Reference.transaction","onComplete",n,!0),FT("Reference.transaction","applyLocally",i,!0);const r=xT(this._delegate,e,{applyLocally:i}).then(s=>new WT(s.committed,new Vn(this.database,s.snapshot)));return n&&r.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),r}setPriority(e,n){J("Reference.setPriority",1,2,arguments.length),$e("Reference.setPriority","onComplete",n,!0);const i=KC(this._delegate,e);return n&&i.then(()=>n(null),r=>n(r)),i}push(e,n){J("Reference.push",0,2,arguments.length),$e("Reference.push","onComplete",n,!0);const i=qC(this._delegate,e),r=i.then(o=>new wt(this.database,o));n&&r.then(()=>n(null),o=>n(o));const s=new wt(this.database,i);return s.then=r.then.bind(r),s.catch=r.catch.bind(r,void 0),s}onDisconnect(){return At("Reference.onDisconnect",this._delegate._path),new VT(new zC(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _s{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete()}}useEmulator(e,n,i={}){CT(this._delegate,e,n,i)}ref(e){if(J("database.ref",0,1,arguments.length),e instanceof wt){const n=Cm(this._delegate,e.toString());return new wt(this,n)}else{const n=bm(this._delegate,e);return new wt(this,n)}}refFromURL(e){J("database.refFromURL",1,1,arguments.length);const i=Cm(this._delegate,e);return new wt(this,i)}goOffline(){return J("database.goOffline",0,0,arguments.length),TT(this._delegate)}goOnline(){return J("database.goOnline",0,0,arguments.length),ST(this._delegate)}}_s.ServerValue={TIMESTAMP:NT(),increment:t=>PT(t)};/**
 * @license
 * Copyright 2017 Google LLC
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
 */function BT({app:t,url:e,version:n,customAuthImpl:i,namespace:r,nodeAdmin:s=!1}){Pf(n);const o=new _f("auth-internal",new vf("database-standalone"));return o.setComponent(new Qt("auth-internal",()=>i,"PRIVATE")),{instance:new _s(Om(t,o,void 0,e,s),t),namespace:r}}var jT=Object.freeze({__proto__:null,initStandalone:BT});/**
 * @license
 * Copyright 2021 Google LLC
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
 */const $T=_s.ServerValue;function HT(t){t.INTERNAL.registerComponent(new Qt("database-compat",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:n});return new _s(r,i)},"PUBLIC").setServiceProps({Reference:wt,Query:Xe,Database:_s,DataSnapshot:Vn,enableLogging:RT,INTERNAL:jT,ServerValue:$T}).setMultipleInstances(!0)),t.registerVersion(MT,LT)}HT(qr);const vs={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},hr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function zT(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Mm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qT=zT,GT=Mm,Lm=new oi("auth","Firebase",Mm());/**
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
 */const Dm=new $r("@firebase/auth");function sa(t,...e){Dm.logLevel<=we.ERROR&&Dm.error(`Auth (${hi}): ${t}`,...e)}/**
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
 */function Ze(t,...e){throw Xc(t,...e)}function et(t,...e){return Xc(t,...e)}function Fm(t,e,n){const i=Object.assign(Object.assign({},GT()),{[e]:n});return new oi("auth","Firebase",i).create(e,{appName:t.name})}function fr(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Ze(t,"argument-error"),Fm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xc(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Lm.create(t,...e)}function N(t,e,...n){if(!t)throw Xc(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sa(e),new Error(e)}function Bt(t,e){t||tn(e)}/**
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
 */const Um=new Map;function Et(t){Bt(t instanceof Function,"Expected a class definition");let e=Um.get(t);return e?(Bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Um.set(t,e),e)}function KT(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Et);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ys(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zc(){return Vm()==="http:"||Vm()==="https:"}function Vm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function YT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zc()||cf()||"connection"in navigator)?navigator.onLine:!0}function QT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ws{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ml()||_o()}get(){return YT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eu(t,e){Bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class tu{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const XT=new ws(3e4,6e4);function Ve(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ke(t,e,n,i,r={}){return Wm(t,r,()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=li(Object.assign({key:t.config.apiKey},o)).slice(1),l=new(tu.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),tu.fetch()(Bm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Wm(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},JT),e);try{const r=new ZT(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw oa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw oa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw oa(t,"email-already-in-use",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fm(t,u,c);Ze(t,u)}}catch(r){if(r instanceof St)throw r;Ze(t,"network-request-failed")}}async function gn(t,e,n,i,r={}){const s=await Ke(t,e,n,i,r);return"mfaPendingCredential"in s&&Ze(t,"multi-factor-auth-required",{serverResponse:s}),s}function Bm(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?eu(t.config,r):`${t.config.apiScheme}://${r}`}class ZT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(et(this.auth,"timeout")),XT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oa(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=et(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function eS(t,e){return Ke(t,"POST","/v1/accounts:delete",e)}async function tS(t,e){return Ke(t,"POST","/v1/accounts:update",e)}async function nS(t,e){return Ke(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Es(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function iS(t,e=!1){const n=Z(t),i=await n.getIdToken(e),r=aa(i);N(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Es(nu(r.auth_time)),issuedAtTime:Es(nu(r.iat)),expirationTime:Es(nu(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nu(t){return Number(t)*1e3}function aa(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return sa("JWT malformed, contained fewer than 3 sections"),null;try{const r=xl(n);return r?JSON.parse(r):(sa("Failed to decode base64 JWT payload"),null)}catch(r){return sa("Caught error parsing JWT payload as JSON",r),null}}function rS(t){const e=aa(t);return N(e,"internal-error"),N(typeof e.exp!="undefined","internal-error"),N(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _n(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof St&&sS(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function sS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class oS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Is(t){var e;const n=t.auth,i=await t.getIdToken(),r=await _n(t,nS(n,{idToken:i}));N(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?cS(s.providerUserInfo):[],a=lS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jm(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function aS(t){const e=Z(t);await Is(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lS(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function cS(t){return t.map(e=>{var{providerId:n}=e,i=Ul(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function uS(t,e){const n=await Wm(t,{},()=>{const i=li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Bm(t,r,"/v1/token",`key=${s}`);return tu.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken!="undefined","internal-error"),N(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):rS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await uS(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new bs;return i&&(N(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(N(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
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
 */function Wn(t,e){N(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ci{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Ul(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new oS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new jm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _n(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iS(this,e)}reload(){return aS(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Is(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _n(this,eS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:D,isAnonymous:B,providerData:X,stsTokenManager:q}=n;N(M&&q,e,"internal-error");const te=bs.fromJSON(this.name,q);N(typeof M=="string",e,"internal-error"),Wn(d,e.name),Wn(h,e.name),N(typeof D=="boolean",e,"internal-error"),N(typeof B=="boolean",e,"internal-error"),Wn(p,e.name),Wn(g,e.name),Wn(R,e.name),Wn(I,e.name),Wn(y,e.name),Wn(T,e.name);const j=new Ci({uid:M,auth:e,email:h,emailVerified:D,displayName:d,isAnonymous:B,photoURL:g,phoneNumber:p,tenantId:R,stsTokenManager:te,createdAt:y,lastLoginAt:T});return X&&Array.isArray(X)&&(j.providerData=X.map(ie=>Object.assign({},ie))),I&&(j._redirectEventId=I),j}static async _fromIdTokenResponse(e,n,i=!1){const r=new bs;r.updateFromServerResponse(n);const s=new Ci({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Is(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class $m{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$m.type="NONE";const Cs=$m;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Ti(t,e,n){return`firebase:${t}:${e}:${n}`}class pr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Ti(this.userKey,r.apiKey,s),this.fullPersistenceKey=Ti("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new pr(Et(Cs),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Et(Cs);const o=Ti(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Ci._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch(u){}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new pr(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch(u){}})),new pr(s,e,i))}}/**
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
 */function Hm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Km(e))return"Blackberry";if(Ym(e))return"Webos";if(iu(e))return"Safari";if((e.includes("chrome/")||qm(e))&&!e.includes("edge/"))return"Chrome";if(Ts(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function zm(t=Le()){return/firefox\//i.test(t)}function iu(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qm(t=Le()){return/crios\//i.test(t)}function Gm(t=Le()){return/iemobile/i.test(t)}function Ts(t=Le()){return/android/i.test(t)}function Km(t=Le()){return/blackberry/i.test(t)}function Ym(t=Le()){return/webos/i.test(t)}function mr(t=Le()){return/iphone|ipad|ipod/i.test(t)}function dS(t=Le()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function hS(t=Le()){var e;return mr(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function fS(){return uf()&&document.documentMode===10}function Qm(t=Le()){return mr(t)||Ts(t)||Ym(t)||Km(t)||/windows phone/i.test(t)||Gm(t)}function pS(){try{return!!(window&&window!==window.top)}catch(t){return!1}}/**
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
 */function Jm(t,e=[]){let n;switch(t){case"Browser":n=Hm(Le());break;case"Worker":n=`${Hm(Le())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${i}`}/**
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
 */class mS{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xm(this),this.idTokenSubscription=new Xm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Et(n)),this._initializationPromise=this.queue(async()=>{var i;this._deleted||(this.persistenceManager=await pr.create(this,e),!this._deleted&&(((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(i){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Is(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Z(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Et(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await pr.create(this,[Et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Ye(t){return Z(t)}class Xm{constructor(e){this.auth=e,this.observer=null,this.addObserver=pf(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function gS(t,e,n){const i=Ye(t);N(i._canInitEmulator,i,"emulator-config-failed"),N(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n==null?void 0:n.disableWarnings),s=Zm(e),{host:o,port:a}=_S(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||vS()}function Zm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _S(t){const e=Zm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:eg(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:eg(o)}}}function eg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class gr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}/**
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
 */async function tg(t,e){return Ke(t,"POST","/v1/accounts:resetPassword",Ve(t,e))}async function ng(t,e){return Ke(t,"POST","/v1/accounts:update",e)}async function yS(t,e){return Ke(t,"POST","/v1/accounts:update",Ve(t,e))}/**
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
 */async function wS(t,e){return gn(t,"POST","/v1/accounts:signInWithPassword",Ve(t,e))}async function la(t,e){return Ke(t,"POST","/v1/accounts:sendOobCode",Ve(t,e))}async function ES(t,e){return la(t,e)}async function IS(t,e){return la(t,e)}async function bS(t,e){return la(t,e)}async function CS(t,e){return la(t,e)}/**
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
 */async function TS(t,e){return gn(t,"POST","/v1/accounts:signInWithEmailLink",Ve(t,e))}async function SS(t,e){return gn(t,"POST","/v1/accounts:signInWithEmailLink",Ve(t,e))}/**
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
 */class Ss extends gr{constructor(e,n,i,r=null){super("password",i);this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ss(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Ss(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return wS(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return TS(e,{email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ng(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return SS(e,{idToken:n,email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vn(t,e){return gn(t,"POST","/v1/accounts:signInWithIdp",Ve(t,e))}/**
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
 */const RS="http://localhost";class nn extends gr{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Ul(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new nn(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,vn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vn(e,n)}buildRequest(){const e={requestUri:RS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=li(n)}return e}}/**
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
 */async function AS(t,e){return Ke(t,"POST","/v1/accounts:sendVerificationCode",Ve(t,e))}async function kS(t,e){return gn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ve(t,e))}async function NS(t,e){const n=await gn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ve(t,e));if(n.temporaryProof)throw oa(t,"account-exists-with-different-credential",n);return n}const PS={USER_NOT_FOUND:"user-not-found"};async function OS(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return gn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ve(t,n),PS)}/**
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
 */class Si extends gr{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new Si({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Si({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return kS(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return NS(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return OS(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!n&&!r&&!s?null:new Si({verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
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
 */function xS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MS(t){const e=Xi(jr(t)).link,n=e?Xi(jr(e)).deep_link_id:null,i=Xi(jr(t)).deep_link_id;return(i?Xi(jr(i)).link:null)||i||n||e||t}class ca{constructor(e){var n,i,r,s,o,a;const l=Xi(jr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=xS((r=l.mode)!==null&&r!==void 0?r:null);N(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=MS(e);try{return new ca(n)}catch(i){return null}}}/**
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
 */class Bn{constructor(){this.providerId=Bn.PROVIDER_ID}static credential(e,n){return Ss._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=ca.parseLink(n);return N(i,"argument-error"),Ss._fromEmailAndCode(e,i.code,i.tenantId)}}Bn.PROVIDER_ID="password";Bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class _r extends jn{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class vr extends _r{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),nn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),nn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return vr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return vr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:r,pendingToken:s,nonce:o,providerId:a}=e;if(!i&&!r&&!n&&!s||!a)return null;try{return new vr(a)._credential({idToken:n,accessToken:i,nonce:o,pendingToken:s})}catch(l){return null}}}/**
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
 */class rn extends _r{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch(n){return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
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
 */class sn extends _r{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return nn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return sn.credential(n,i)}catch(r){return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
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
 */class on extends _r{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch(n){return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
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
 */const LS="http://localhost";class ua extends gr{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return vn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,vn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,pendingToken:s}=n;return!i||!r||!s||i!==r?null:new ua(i,s)}static _create(e,n){return new ua(e,n)}buildRequest(){return{requestUri:LS,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */class an extends _r{constructor(){super("twitter.com")}static credential(e,n){return nn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return an.credential(n,i)}catch(r){return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
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
 */async function ig(t,e){return gn(t,"POST","/v1/accounts:signUp",Ve(t,e))}/**
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
 */class Pt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Ci._fromIdTokenResponse(e,i,r),o=rg(i);return new Pt({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=rg(i);return new Pt({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function rg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function DS(t){var e;const n=Ye(t);if(await n._initializationPromise,(e=n.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new Pt({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await ig(n,{returnSecureToken:!0}),r=await Pt._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}/**
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
 */class da extends St{constructor(e,n,i,r){var s;super(n.code,n.message);this.operationType=i,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,da.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,i,r){return new da(e,n,i,r)}}function sg(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?da._fromErrorAndOperation(t,s,e,i):s})}/**
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
 */function og(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function FS(t,e){const n=Z(t);await ha(!0,n,e);const{providerUserInfo:i}=await tS(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),r=og(i||[]);return n.providerData=n.providerData.filter(s=>r.has(s.providerId)),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function ru(t,e,n=!1){const i=await _n(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pt._forOperation(t,"link",i)}async function ha(t,e,n){await Is(e);const i=og(e.providerData),r=t===!1?"provider-already-linked":"no-such-provider";N(i.has(n)===t,e.auth,r)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function ag(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await _n(t,sg(i,r,e,t),n);N(s.idToken,i,"internal-error");const o=aa(s.idToken);N(o,i,"internal-error");const{sub:a}=o;return N(t.uid===a,i,"user-mismatch"),Pt._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ze(i,"user-mismatch"),s}}/**
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
 */async function lg(t,e,n=!1){const i="signIn",r=await sg(t,i,e),s=await Pt._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function fa(t,e){return lg(Ye(t),e)}async function cg(t,e){const n=Z(t);return await ha(!1,n,e.providerId),ru(n,e)}async function ug(t,e){return ag(Z(t),e)}/**
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
 */async function US(t,e){return gn(t,"POST","/v1/accounts:signInWithCustomToken",Ve(t,e))}/**
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
 */async function VS(t,e){const n=Ye(t),i=await US(n,{token:e,returnSecureToken:!0}),r=await Pt._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}/**
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
 */class pa{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?su._fromServerResponse(e,n):Ze(e,"internal-error")}}class su extends pa{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new su(n)}}/**
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
 */function ma(t,e,n){var i;N(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function WS(t,e,n){const i=Z(t),r={requestType:"PASSWORD_RESET",email:e};n&&ma(i,r,n),await IS(i,r)}async function BS(t,e,n){await tg(Z(t),{oobCode:e,newPassword:n})}async function jS(t,e){await yS(Z(t),{oobCode:e})}async function dg(t,e){const n=Z(t),i=await tg(n,{oobCode:e}),r=i.requestType;switch(N(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(i.mfaInfo,n,"internal-error");default:N(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=pa._fromServerResponse(Ye(n),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function $S(t,e){const{data:n}=await dg(Z(t),e);return n.email}async function HS(t,e,n){const i=Ye(t),r=await ig(i,{returnSecureToken:!0,email:e,password:n}),s=await Pt._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function zS(t,e,n){return fa(Z(t),Bn.credential(e,n))}/**
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
 */async function qS(t,e,n){const i=Z(t),r={requestType:"EMAIL_SIGNIN",email:e};N(n.handleCodeInApp,i,"argument-error"),n&&ma(i,r,n),await bS(i,r)}function GS(t,e){const n=ca.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function KS(t,e,n){const i=Z(t),r=Bn.credentialWithLink(e,n||ys());return N(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),fa(i,r)}/**
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
 */async function YS(t,e){return Ke(t,"POST","/v1/accounts:createAuthUri",Ve(t,e))}/**
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
 */async function QS(t,e){const n=Zc()?ys():"http://localhost",i={identifier:e,continueUri:n},{signinMethods:r}=await YS(Z(t),i);return r||[]}async function JS(t,e){const n=Z(t),i=await t.getIdToken(),r={requestType:"VERIFY_EMAIL",idToken:i};e&&ma(n.auth,r,e);const{email:s}=await ES(n.auth,r);s!==t.email&&await t.reload()}async function XS(t,e,n){const i=Z(t),r=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:r,newEmail:e};n&&ma(i.auth,s,n);const{email:o}=await CS(i.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function ZS(t,e){return Ke(t,"POST","/v1/accounts:update",e)}/**
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
 */async function e0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Z(t),s={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await _n(i,ZS(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function t0(t,e){return hg(Z(t),e,null)}function n0(t,e){return hg(Z(t),null,e)}async function hg(t,e,n){const{auth:i}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await _n(t,ng(i,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function i0(t){var e,n;if(!t)return null;const{providerId:i}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(t==null?void 0:t.idToken)){const o=(n=(e=aa(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new yr(s,a)}}if(!i)return null;switch(i){case"facebook.com":return new r0(s,r);case"github.com":return new s0(s,r);case"google.com":return new o0(s,r);case"twitter.com":return new a0(s,r,t.screenName||null);case"custom":case"anonymous":return new yr(s,null);default:return new yr(s,i,r)}}class yr{constructor(e,n,i={}){this.isNewUser=e,this.providerId=n,this.profile=i}}class fg extends yr{constructor(e,n,i,r){super(e,n,i);this.username=r}}class r0 extends yr{constructor(e,n){super(e,"facebook.com",n)}}class s0 extends fg{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class o0 extends yr{constructor(e,n){super(e,"google.com",n)}}class a0 extends fg{constructor(e,n,i){super(e,"twitter.com",n,i)}}function l0(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:i0(n)}class Ri{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new Ri("enroll",e)}static _fromMfaPendingCredential(e){return new Ri("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,i;if(e==null?void 0:e.multiFactorSession){if((n=e.multiFactorSession)===null||n===void 0?void 0:n.pendingCredential)return Ri._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((i=e.multiFactorSession)===null||i===void 0?void 0:i.idToken)return Ri._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class ou{constructor(e,n,i){this.session=e,this.hints=n,this.signInResolver=i}static _fromError(e,n){const i=Ye(e),r=(n.serverResponse.mfaInfo||[]).map(o=>pa._fromServerResponse(i,o));N(n.serverResponse.mfaPendingCredential,i,"internal-error");const s=Ri._fromMfaPendingCredential(n.serverResponse.mfaPendingCredential);return new ou(s,r,async o=>{const a=await o._process(i,s);delete n.serverResponse.mfaInfo,delete n.serverResponse.mfaPendingCredential;const l=Object.assign(Object.assign({},n.serverResponse),{idToken:a.idToken,refreshToken:a.refreshToken});switch(n.operationType){case"signIn":const c=await Pt._fromIdTokenResponse(i,n.operationType,l);return await i._updateCurrentUser(c.user),c;case"reauthenticate":return N(n.user,i,"internal-error"),Pt._forOperation(n.user,n.operationType,l);default:Ze(i,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function c0(t,e){var n;const i=Z(t),r=e;return N(e.operationType,i,"argument-error"),N((n=r.serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,i,"argument-error"),ou._fromError(i,r)}/**
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
 */function u0(t,e){return Ke(t,"POST","/v2/accounts/mfaEnrollment:start",Ve(t,e))}function d0(t,e){return Ke(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ve(t,e))}function h0(t,e){return Ke(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ve(t,e))}class au{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(i=>pa._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new au(e)}async getSession(){return Ri._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const i=e,r=await this.getSession(),s=await _n(this.user,i._process(this.user.auth,r,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),r=await _n(this.user,h0(this.user.auth,{idToken:i,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const lu=new WeakMap;function f0(t){const e=Z(t);return lu.has(e)||lu.set(e,au._fromUser(e)),lu.get(e)}const ga="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class pg{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ga,"1"),this.storage.removeItem(ga),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
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
 */function p0(){const t=Le();return iu(t)||mr(t)}const m0=1e3,g0=10;class mg extends pg{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=p0()&&pS(),this.fallbackToPolling=Qm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);fS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,g0):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},m0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mg.type="LOCAL";const cu=mg;/**
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
 */class gg extends pg{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gg.type="SESSION";const Ai=gg;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function _0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class _a{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new _a(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await _0(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_a.receivers=[];/**
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
 */function Rs(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class v0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Rs("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function We(){return window}function y0(t){We().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function uu(){return typeof We().WorkerGlobalScope!="undefined"&&typeof We().importScripts=="function"}async function w0(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}function E0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function I0(){return uu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const _g="firebaseLocalStorageDb",b0=1,va="firebaseLocalStorage",vg="fbase_key";class As{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ya(t,e){return t.transaction([va],e?"readwrite":"readonly").objectStore(va)}function C0(){const t=indexedDB.deleteDatabase(_g);return new As(t).toPromise()}function du(){const t=indexedDB.open(_g,b0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(va,{keyPath:vg})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(va)?e(i):(i.close(),await C0(),e(await du()))})})}async function yg(t,e,n){const i=ya(t,!0).put({[vg]:e,value:n});return new As(i).toPromise()}async function T0(t,e){const n=ya(t,!1).get(e),i=await new As(n).toPromise();return i===void 0?null:i.value}function wg(t,e){const n=ya(t,!0).delete(e);return new As(n).toPromise()}const S0=800,R0=3;class Eg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await du(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>R0)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_a._getInstance(I0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await w0(),!this.activeServiceWorker)return;this.sender=new v0(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||E0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await du();return await yg(e,ga,"1"),await wg(e,ga),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>yg(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>T0(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ya(r,!1).getAll();return new As(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Eg.type="LOCAL";const wa=Eg;/**
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
 */function A0(t,e){return Ke(t,"POST","/v2/accounts/mfaSignIn:start",Ve(t,e))}function k0(t,e){return Ke(t,"POST","/v2/accounts/mfaSignIn:finalize",Ve(t,e))}/**
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
 */async function N0(t){return(await Ke(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function P0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ig(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=et("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",P0().appendChild(i)})}function bg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const O0=500,x0=6e4,Ea=1e12;class M0{constructor(e){this.auth=e,this.counter=Ea,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new L0(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||Ea;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||Ea;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||Ea;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class L0{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;N(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=D0(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch(i){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch(i){}this.isVisible&&this.execute()},x0)},O0))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function D0(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const hu=bg("rcb"),F0=new ws(3e4,6e4),U0="https://www.google.com/recaptcha/api.js?";class V0{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!We().grecaptcha}load(e,n=""){return N(W0(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(We().grecaptcha):new Promise((i,r)=>{const s=We().setTimeout(()=>{r(et(e,"network-request-failed"))},F0.get());We()[hu]=()=>{We().clearTimeout(s),delete We()[hu];const a=We().grecaptcha;if(!a){r(et(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const d=l(c,u);return this.counter++,d},this.hostLanguage=n,i(a)};const o=`${U0}?${li({onload:hu,render:"explicit",hl:n})}`;Ig(o).catch(()=>{clearTimeout(s),r(et(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!We().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function W0(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class B0{async load(e){return new M0(e)}clearedOneInstance(){}}/**
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
 */const Cg="recaptcha",j0={theme:"light",type:"image"};class $0{constructor(e,n=Object.assign({},j0),i){this.parameters=n,this.type=Cg,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ye(i),this.isInvisible=this.parameters.size==="invisible",N(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;N(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new B0:new V0,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(r=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=We()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(Zc()&&!uu(),this.auth,"internal-error"),await H0(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await N0(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function H0(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class fu{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Si._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function z0(t,e,n){const i=Ye(t),r=await Ia(i,e,Z(n));return new fu(r,s=>fa(i,s))}async function q0(t,e,n){const i=Z(t);await ha(!1,i,"phone");const r=await Ia(i.auth,e,Z(n));return new fu(r,s=>cg(i,s))}async function G0(t,e,n){const i=Z(t),r=await Ia(i.auth,e,Z(n));return new fu(r,s=>ug(i,s))}async function Ia(t,e,n){var i;const r=await n.verify();try{N(typeof r=="string",t,"argument-error"),N(n.type===Cg,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await u0(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await A0(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await AS(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return o}}finally{n._reset()}}async function K0(t,e){await ru(Z(t),e)}/**
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
 */class jt{constructor(e){this.providerId=jt.PROVIDER_ID,this.auth=Ye(e)}verifyPhoneNumber(e,n){return Ia(this.auth,e,Z(n))}static credential(e,n){return Si._fromVerification(e,n)}static credentialFromResult(e){const n=e;return jt.credentialFromTaggedObject(n)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:i}=e;return n&&i?Si._fromTokenResponse(n,i):null}}jt.PROVIDER_ID="phone";jt.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ki(t,e){return e?Et(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class pu extends gr{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Y0(t){return lg(t.auth,new pu(t),t.bypassAuthState)}function Q0(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),ag(n,new pu(t),t.bypassAuthState)}async function J0(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),ru(n,new pu(t),t.bypassAuthState)}/**
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
 */class Tg{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Y0;case"linkViaPopup":case"linkViaRedirect":return J0;case"reauthViaPopup":case"reauthViaRedirect":return Q0;default:Ze(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const X0=new ws(2e3,1e4);async function Z0(t,e,n){const i=Ye(t);fr(t,e,jn);const r=ki(i,n);return new yn(i,"signInViaPopup",e,r).executeNotNull()}async function eR(t,e,n){const i=Z(t);fr(i.auth,e,jn);const r=ki(i.auth,n);return new yn(i.auth,"reauthViaPopup",e,r,i).executeNotNull()}async function tR(t,e,n){const i=Z(t);fr(i.auth,e,jn);const r=ki(i.auth,n);return new yn(i.auth,"linkViaPopup",e,r,i).executeNotNull()}class yn extends Tg{constructor(e,n,i,r,s){super(e,n,r,s);this.provider=i,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=Rs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,X0.get())};e()}}yn.currentPopupAction=null;/**
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
 */const nR="pendingRedirect",mu=new Map;class iR extends Tg{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=mu.get(this.auth._key());if(!e){try{const i=await rR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}mu.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rR(t,e){const n=Sg(e),i=await _u(t)._get(n)==="true";return await _u(t)._remove(n),i}async function gu(t,e){return _u(t)._set(Sg(e),"true")}function sR(){mu.clear()}function _u(t){return Et(t._redirectPersistence)}function Sg(t){return Ti(nR,t.config.apiKey,t.name)}/**
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
 */function oR(t,e,n){return aR(t,e,n)}async function aR(t,e,n){const i=Ye(t);fr(t,e,jn);const r=ki(i,n);return await gu(r,i),r._openRedirect(i,e,"signInViaRedirect")}function lR(t,e,n){return cR(t,e,n)}async function cR(t,e,n){const i=Z(t);fr(i.auth,e,jn);const r=ki(i.auth,n);await gu(r,i.auth);const s=await Rg(i);return r._openRedirect(i.auth,e,"reauthViaRedirect",s)}function uR(t,e,n){return dR(t,e,n)}async function dR(t,e,n){const i=Z(t);fr(i.auth,e,jn);const r=ki(i.auth,n);await ha(!1,i,e.providerId),await gu(r,i.auth);const s=await Rg(i);return r._openRedirect(i.auth,e,"linkViaRedirect",s)}async function hR(t,e){return await Ye(t)._initializationPromise,ba(t,e,!1)}async function ba(t,e,n=!1){const i=Ye(t),r=ki(i,e),o=await new iR(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function Rg(t){const e=Rs(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const fR=10*60*1e3;class Ag{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ng(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(et(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fR&&this.cachedEventUids.clear(),this.cachedEventUids.has(kg(e))}saveEventToCache(e){this.cachedEventUids.add(kg(e)),this.lastProcessedEventTime=Date.now()}}function kg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ng({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ng(t);default:return!1}}/**
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
 */async function Pg(t,e={}){return Ke(t,"GET","/v1/projects",e)}/**
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
 */const mR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gR=/^https?/;async function _R(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Pg(t);for(const n of e)try{if(vR(n))return}catch(i){}Ze(t,"unauthorized-domain")}function vR(t){const e=ys(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!gR.test(n))return!1;if(mR.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const yR=new ws(3e4,6e4);function Og(){const t=We().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wR(t){return new Promise((e,n)=>{var i,r,s;function o(){Og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Og(),n(et(t,"network-request-failed"))},timeout:yR.get()})}if((r=(i=We().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((s=We().gapi)===null||s===void 0?void 0:s.load)o();else{const a=bg("iframefcb");return We()[a]=()=>{gapi.load?o():n(et(t,"network-request-failed"))},Ig(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Ca=null,e})}let Ca=null;function ER(t){return Ca=Ca||wR(t),Ca}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const IR=new ws(5e3,15e3),bR="__/auth/iframe",CR="emulator/auth/iframe",TR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},SR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RR(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eu(e,CR):`https://${t.config.authDomain}/${bR}`,i={apiKey:e.apiKey,appName:t.name,v:hi},r=SR.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${li(i).slice(1)}`}async function AR(t){const e=await ER(t),n=We().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:RR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TR,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),a=We().setTimeout(()=>{s(o)},IR.get());function l(){We().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const kR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NR=500,PR=600,OR="_blank",xR="http://localhost";class xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function MR(t,e,n,i=NR,r=PR){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},kR),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Le().toLowerCase();n&&(a=qm(c)?OR:n),zm(c)&&(e=e||xR,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[p,g])=>`${h}${p}=${g},`,"");if(hS(c)&&a!=="_self")return LR(e||"",a),new xg(null);const d=window.open(e||"",a,u);N(d,t,"popup-blocked");try{d.focus()}catch(h){}return new xg(d)}function LR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const DR="__/auth/handler",FR="emulator/auth/handler";function vu(t,e,n,i,r,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:hi,eventId:r};if(e instanceof jn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof _r){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${UR(t)}?${li(a).slice(1)}`}function UR({config:t}){return t.emulator?eu(t,FR):`https://${t.authDomain}/${DR}`}/**
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
 */const yu="webStorageSupport";class VR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ai,this._completeRedirectFn=ba}async _openPopup(e,n,i,r){var s;Bt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=vu(e,n,i,ys(),r);return MR(e,o,Rs())}async _openRedirect(e,n,i,r){return await this._originValidation(e),y0(vu(e,n,i,ys(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Bt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i}async initAndGetManager(e){const n=await AR(e),i=new Ag(e);return n.register("authEvent",r=>(N(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yu,{type:yu},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[yu];o!==void 0&&n(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_R(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qm()||iu()||mr()}}const WR=VR;class BR{constructor(e){this.factorId=e}_process(e,n,i){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,i);case"signin":return this._finalizeSignIn(e,n.credential);default:return tn("unexpected MultiFactorSessionType")}}}class wu extends BR{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new wu(e)}_finalizeEnroll(e,n,i){return d0(e,{idToken:n,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return k0(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Mg{constructor(){}static assertion(e){return wu._fromCredential(e)}}Mg.FACTOR_ID="phone";var jR="@firebase/auth",$R="0.18.2";/**
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
 */class HR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qR(t){di(new Qt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(o=>{N(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),N(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jm(t)},l=new mS(o,a);return KT(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),di(new Qt("auth-internal",e=>{const n=Ye(e.getProvider("auth").getImmediate());return(i=>new HR(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fi(jR,$R,zR(t))}qR("Browser");/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Ni(){return window}/**
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
 */const GR=2e3;async function KR(t,e,n){var i;const{BuildInfo:r}=Ni();Bt(e.sessionId,"AuthEvent did not contain a session ID");const s=await ZR(e.sessionId),o={};return mr()?o.ibi=r.packageName:Ts()?o.apn=r.packageName:Ze(t,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=s,vu(t,n,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,o)}async function YR(t){const{BuildInfo:e}=Ni(),n={};mr()?n.iosBundleId=e.packageName:Ts()?n.androidPackageName=e.packageName:Ze(t,"operation-not-supported-in-this-environment"),await Pg(t,n)}function QR(t){const{cordova:e}=Ni();return new Promise(n=>{e.plugins.browsertab.isAvailable(i=>{let r=null;i?e.plugins.browsertab.openUrl(t):r=e.InAppBrowser.open(t,dS()?"_blank":"_system","location=yes"),n(r)})})}async function JR(t,e,n){const{cordova:i}=Ni();let r=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=i.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(et(t,"redirect-cancelled-by-user"))},GR))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Ts()&&document.addEventListener("visibilitychange",u,!1),r=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{r()}}function XR(t){var e,n,i,r,s,o,a,l,c,u;const d=Ni();N(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(r=(i=d==null?void 0:d.cordova)===null||i===void 0?void 0:i.plugins)===null||r===void 0?void 0:r.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((u=(c=d==null?void 0:d.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ZR(t){const e=eA(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}function eA(t){if(Bt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}/**
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
 */const tA=20;class nA extends Ag{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function iA(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:oA(),postBody:null,tenantId:t.tenantId,error:et(t,"no-auth-event")}}function rA(t,e){return Eu()._set(Iu(t),e)}async function Lg(t){const e=await Eu()._get(Iu(t));return e&&await Eu()._remove(Iu(t)),e}function sA(t,e){var n,i;const r=lA(e);if(r.includes("/__/auth/callback")){const s=Ta(r),o=s.firebaseError?aA(decodeURIComponent(s.firebaseError)):null,a=(i=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||i===void 0?void 0:i[1],l=a?et(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:r,postBody:null}}return null}function oA(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<tA;n++){const i=Math.floor(Math.random()*e.length);t.push(e.charAt(i))}return t.join("")}function Eu(){return Et(cu)}function Iu(t){return Ti("authEvent",t.config.apiKey,t.name)}function aA(t){try{return JSON.parse(t)}catch(e){return null}}function lA(t){const e=Ta(t),n=e.link?decodeURIComponent(e.link):void 0,i=Ta(n).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ta(r).link||r||i||n||t}function Ta(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return Xi(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const cA=500;class uA{constructor(){this._redirectPersistence=Ai,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ba}async _initialize(e){const n=e._key();let i=this.eventManagers.get(n);return i||(i=new nA(e),this.eventManagers.set(n,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){Ze(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,i,r){XR(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),sR(),await this._originValidation(e);const o=iA(e,i,r);await rA(e,o);const a=await KR(e,o,n),l=await QR(a);return JR(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YR(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:i,handleOpenURL:r,BuildInfo:s}=Ni(),o=setTimeout(async()=>{await Lg(e),n.onEvent(Dg())},cA),a=async u=>{clearTimeout(o);const d=await Lg(e);let h=null;d&&(u==null?void 0:u.url)&&(h=sA(d,u.url)),n.onEvent(h||Dg())};typeof i!="undefined"&&typeof i.subscribe=="function"&&i.subscribe(null,a);const l=r,c=`${s.packageName.toLowerCase()}://`;Ni().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(c)&&a({url:u}),typeof l=="function")try{l(u)}catch(d){console.error(d)}}}}const dA=uA;function Dg(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:et("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function hA(t,e){Ye(t)._logFramework(e)}var fA="@firebase/auth-compat",pA="0.1.5";/**
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
 */const mA=1e3;function Sa(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function gA(){return Sa()==="http:"||Sa()==="https:"}function Fg(t=Le()){return!!((Sa()==="file:"||Sa()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function _A(){return _o()||lf()}function vA(){return uf()&&(document==null?void 0:document.documentMode)===11}function yA(t=Le()){return/Edge\/\d+/.test(t)}function wA(t=Le()){return vA()||yA(t)}function Ug(){try{const t=self.localStorage,e=Rs();if(t)return t.setItem(e,"1"),t.removeItem(e),wA()?Ll():!0}catch(t){return bu()&&Ll()}return!1}function bu(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Cu(){return(gA()||cf()||Fg())&&!_A()&&Ug()&&!bu()}function Vg(){return Fg()&&typeof document!="undefined"}async function EA(){return Vg()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},mA);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
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
 */const It={LOCAL:"local",NONE:"none",SESSION:"session"},ks=N,Wg="persistence";function IA(t,e){if(ks(Object.values(It).includes(e),t,"invalid-persistence-type"),_o()){ks(e!==It.SESSION,t,"unsupported-persistence-type");return}if(lf()){ks(e===It.NONE,t,"unsupported-persistence-type");return}if(bu()){ks(e===It.NONE||e===It.LOCAL&&Ll(),t,"unsupported-persistence-type");return}ks(e===It.NONE||Ug(),t,"unsupported-persistence-type")}async function Tu(t){await t._initializationPromise;const e=Bg(),n=Ti(Wg,t.config.apiKey,t.name);(e==null?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function bA(t,e){const n=Bg();if(!(n==null?void 0:n.sessionStorage))return[];const i=Ti(Wg,t,e);switch(n.sessionStorage.getItem(i)){case It.NONE:return[Cs];case It.LOCAL:return[wa,Ai];case It.SESSION:return[Ai];default:return[]}}function Bg(){return typeof window!="undefined"?window:null}/**
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
 */const CA=N;class $n{constructor(){this.browserResolver=Et(WR),this.cordovaResolver=Et(dA),this.underlyingResolver=null,this._redirectPersistence=Ai,this._completeRedirectFn=ba}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,i,r)}async _openRedirect(e,n,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,i,r)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Vg()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return CA(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await EA();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function jg(t){return t.unwrap()}function TA(t){return t.wrapped()}/**
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
 */function SA(t){return $g(t)}function RA(t,e){var n;const i=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const r=e;r.resolver=new AA(t,c0(t,e))}else if(i){const r=$g(e),s=e;r&&(s.credential=r,s.tenantId=i.tenantId||void 0,s.email=i.email||void 0,s.phoneNumber=i.phoneNumber||void 0)}}function $g(t){const{_tokenResponse:e}=t instanceof St?t.customData:t;if(!e)return null;if(!(t instanceof St)&&"temporaryProof"in e&&"phoneNumber"in e)return jt.credentialFromResult(t);const n=e.providerId;if(!n||n===vs.PASSWORD)return null;let i;switch(n){case vs.GOOGLE:i=sn;break;case vs.FACEBOOK:i=rn;break;case vs.GITHUB:i=on;break;case vs.TWITTER:i=an;break;default:const{oauthIdToken:r,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!r&&!a?null:a?n.startsWith("saml.")?ua._create(n,a):nn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:r,accessToken:s}):new vr(n).credential({idToken:r,accessToken:s,rawNonce:l})}return t instanceof St?i.credentialFromError(t):i.credentialFromResult(t)}function pt(t,e){return e.catch(n=>{throw n instanceof St&&RA(t,n),n}).then(n=>{const i=n.operationType,r=n.user;return{operationType:i,credential:SA(n),additionalUserInfo:l0(n),user:wn.getOrCreate(r)}})}async function Su(t,e){const n=await e;return{verificationId:n.verificationId,confirm:i=>pt(t,n.confirm(i))}}class AA{constructor(e,n){this.resolver=n,this.auth=TA(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return pt(jg(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class wn{constructor(e){this._delegate=e,this.multiFactor=f0(e)}static getOrCreate(e){return wn.USER_MAP.has(e)||wn.USER_MAP.set(e,new wn(e)),wn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return pt(this.auth,cg(this._delegate,e))}async linkWithPhoneNumber(e,n){return Su(this.auth,q0(this._delegate,e,n))}async linkWithPopup(e){return pt(this.auth,tR(this._delegate,e,$n))}async linkWithRedirect(e){return await Tu(Ye(this.auth)),uR(this._delegate,e,$n)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return pt(this.auth,ug(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Su(this.auth,G0(this._delegate,e,n))}reauthenticateWithPopup(e){return pt(this.auth,eR(this._delegate,e,$n))}async reauthenticateWithRedirect(e){return await Tu(Ye(this.auth)),lR(this._delegate,e,$n)}sendEmailVerification(e){return JS(this._delegate,e)}async unlink(e){return await FS(this._delegate,e),this}updateEmail(e){return t0(this._delegate,e)}updatePassword(e){return n0(this._delegate,e)}updatePhoneNumber(e){return K0(this._delegate,e)}updateProfile(e){return e0(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return XS(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}wn.USER_MAP=new WeakMap;/**
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
 */const Ns=N;class Ru{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;Ns(i,"invalid-api-key",{appName:e.name});let r=[Cs];if(typeof window!="undefined"){r=bA(i,e.name);for(const o of[wa,cu,Ai])r.includes(o)||r.push(o)}Ns(i,"invalid-api-key",{appName:e.name});const s=typeof window!="undefined"?$n:void 0;this._delegate=n.initialize({options:{persistence:r,popupRedirectResolver:s}}),this._delegate._updateErrorMap(qT),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?wn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){gS(this._delegate,e,n)}applyActionCode(e){return jS(this._delegate,e)}checkActionCode(e){return dg(this._delegate,e)}confirmPasswordReset(e,n){return BS(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return pt(this._delegate,HS(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return QS(this._delegate,e)}isSignInWithEmailLink(e){return GS(this._delegate,e)}async getRedirectResult(){Ns(Cu(),this._delegate,"operation-not-supported-in-this-environment");const e=await hR(this._delegate,$n);return e?pt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){hA(this._delegate,e)}onAuthStateChanged(e,n,i){const{next:r,error:s,complete:o}=Hg(e,n,i);return this._delegate.onAuthStateChanged(r,s,o)}onIdTokenChanged(e,n,i){const{next:r,error:s,complete:o}=Hg(e,n,i);return this._delegate.onIdTokenChanged(r,s,o)}sendSignInLinkToEmail(e,n){return qS(this._delegate,e,n)}sendPasswordResetEmail(e,n){return WS(this._delegate,e,n||void 0)}async setPersistence(e){IA(this._delegate,e);let n;switch(e){case It.SESSION:n=Ai;break;case It.LOCAL:n=await Et(wa)._isAvailable()?wa:cu;break;case It.NONE:n=Cs;break;default:return Ze("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return pt(this._delegate,DS(this._delegate))}signInWithCredential(e){return pt(this._delegate,fa(this._delegate,e))}signInWithCustomToken(e){return pt(this._delegate,VS(this._delegate,e))}signInWithEmailAndPassword(e,n){return pt(this._delegate,zS(this._delegate,e,n))}signInWithEmailLink(e,n){return pt(this._delegate,KS(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Su(this._delegate,z0(this._delegate,e,n))}async signInWithPopup(e){return Ns(Cu(),this._delegate,"operation-not-supported-in-this-environment"),pt(this._delegate,Z0(this._delegate,e,$n))}async signInWithRedirect(e){return Ns(Cu(),this._delegate,"operation-not-supported-in-this-environment"),await Tu(this._delegate),oR(this._delegate,e,$n)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return $S(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Ru.Persistence=It;function Hg(t,e,n){let i=t;typeof t!="function"&&({next:i,error:e,complete:n}=t);const r=i;return{next:o=>r(o&&wn.getOrCreate(o)),error:e,complete:n}}/**
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
 */class Au{constructor(){this.providerId="phone",this._delegate=new jt(jg(qr.auth()))}static credential(e,n){return jt.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Au.PHONE_SIGN_IN_METHOD=jt.PHONE_SIGN_IN_METHOD;Au.PROVIDER_ID=jt.PROVIDER_ID;/**
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
 */const kA=N;class NA{constructor(e,n,i=qr.app()){var r;kA((r=i.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new $0(e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const PA="auth-compat";function OA(t){t.INTERNAL.registerComponent(new Qt(PA,e=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new Ru(n,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:hr.EMAIL_SIGNIN,PASSWORD_RESET:hr.PASSWORD_RESET,RECOVER_EMAIL:hr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:hr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:hr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:hr.VERIFY_EMAIL}},EmailAuthProvider:Bn,FacebookAuthProvider:rn,GithubAuthProvider:on,GoogleAuthProvider:sn,OAuthProvider:vr,PhoneAuthProvider:Au,PhoneMultiFactorGenerator:Mg,RecaptchaVerifier:NA,TwitterAuthProvider:an,Auth:Ru,AuthCredential:gr,Error:St}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(fA,pA)}OA(qr);/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const zg=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",wr=t=>zg?Symbol(t):"_vr_"+t,xA=wr("rvlm"),qg=wr("rvd"),ku=wr("r"),Gg=wr("rl"),Nu=wr("rvl"),Er=typeof window!="undefined";function MA(t){return t.__esModule||zg&&t[Symbol.toStringTag]==="Module"}const Ce=Object.assign;function Pu(t,e){const n={};for(const i in e){const r=e[i];n[i]=Array.isArray(r)?r.map(t):t(r)}return n}const Ps=()=>{},LA=/\/$/,DA=t=>t.replace(LA,"");function Ou(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),s=e.slice(a+1,l>-1?l:e.length),r=t(s)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=WA(i!=null?i:e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function FA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Kg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UA(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ir(e.matched[i],n.matched[r])&&Yg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ir(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Yg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!VA(t[n],e[n]))return!1;return!0}function VA(t,e){return Array.isArray(t)?Qg(t,e):Array.isArray(e)?Qg(e,t):t===e}function Qg(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function WA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Os;(function(t){t.pop="pop",t.push="push"})(Os||(Os={}));var xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xs||(xs={}));function BA(t){if(!t)if(Er){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),DA(t)}const jA=/^[^#]+#/;function $A(t,e){return t.replace(jA,"#")+e}function HA(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ra=()=>({left:window.pageXOffset,top:window.pageYOffset});function zA(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=HA(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Jg(t,e){return(history.state?history.state.position-e:-1)+t}const xu=new Map;function qA(t,e){xu.set(t,e)}function GA(t){const e=xu.get(t);return xu.delete(t),e}let KA=()=>location.protocol+"//"+location.host;function Xg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Kg(l,"")}return Kg(n,t)+i+r}function YA(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=Xg(t,location),g=n.value,R=e.value;let I=0;if(h){if(n.value=p,e.value=h,o&&o===g){o=null;return}I=R?h.position-R.position:0}else i(p);r.forEach(y=>{y(n.value,g,{delta:I,type:Os.pop,direction:I?I>0?xs.forward:xs.back:xs.unknown})})};function l(){o=n.value}function c(h){r.push(h);const p=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:h}=window;!h.state||h.replaceState(Ce({},h.state,{scroll:Ra()}),"")}function d(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Zg(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Ra():null}}function QA(t){const{history:e,location:n}=window,i={value:Xg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:KA()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=Ce({},e.state,Zg(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Ce({},r.value,e.state,{forward:l,scroll:Ra()});s(u.current,u,!0);const d=Ce({},Zg(i.value,l,null),{position:u.position+1},c);s(l,d,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function JA(t){t=BA(t);const e=QA(t),n=YA(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Ce({location:"",base:t,go:i,createHref:$A.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function WN(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),JA(t)}function XA(t){return typeof t=="string"||t&&typeof t=="object"}function e_(t){return typeof t=="string"||typeof t=="symbol"}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},t_=wr("nf");var n_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(n_||(n_={}));function br(t,e){return Ce(new Error,{type:t,[t_]:!0},e)}function Pi(t,e){return t instanceof Error&&t_ in t&&(e==null||!!(t.type&e))}const i_="[^/]+?",ZA={sensitive:!1,strict:!1,start:!0,end:!0},ek=/[.+*?^${}()[\]/\\]/g;function tk(t,e){const n=Ce({},ZA,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const h=c[d];let p=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(ek,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:R,optional:I,regexp:y}=h;s.push({name:g,repeatable:R,optional:I});const T=y||i_;if(T!==i_){p+=10;try{new RegExp(`(${T})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+D.message)}}let M=R?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;d||(M=I&&c.length<2?`(?:/${M})`:"/"+M),I&&(M+="?"),r+=M,p+=20,I&&(p+=-8),R&&(p+=-20),T===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=s[h-1];d[g.name]=p&&g.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:R,optional:I}=p,y=g in c?c[g]:"";if(Array.isArray(y)&&!R)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=Array.isArray(y)?y.join("/"):y;if(!T)if(I)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=T}}return u}return{re:o,score:i,keys:s,parse:a,stringify:l}}function nk(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ik(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=nk(i[n],r[n]);if(s)return s;n++}return r.length-i.length}const rk={type:0,value:""},sk=/[a-zA-Z0-9_]/;function ok(t){if(!t)return[[]];if(t==="/")return[[rk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:sk.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function ak(t,e,n){const i=tk(ok(t.path),n),r=Ce(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function lk(t,e){const n=[],i=new Map;e=s_({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,d,h){const p=!h,g=uk(u);g.aliasOf=h&&h.record;const R=s_(e,u),I=[g];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of M)I.push(Ce({},g,{components:h?h.record.components:g.components,path:D,aliasOf:h?h.record:g}))}let y,T;for(const M of I){const{path:D}=M;if(d&&D[0]!=="/"){const B=d.record.path,X=B[B.length-1]==="/"?"":"/";M.path=d.record.path+(D&&X+D)}if(y=ak(M,d,R),h?h.alias.push(y):(T=T||y,T!==y&&T.alias.push(y),p&&u.name&&!r_(y)&&o(u.name)),"children"in g){const B=g.children;for(let X=0;X<B.length;X++)s(B[X],y,h&&h.children[X])}h=h||y,l(y)}return T?()=>{o(T)}:Ps}function o(u){if(e_(u)){const d=i.get(u);d&&(i.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&ik(u,n[d])>=0;)d++;n.splice(d,0,u),u.record.name&&!r_(u)&&i.set(u.record.name,u)}function c(u,d){let h,p={},g,R;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw br(1,{location:u});R=h.record.name,p=Ce(ck(d.params,h.keys.filter(T=>!T.optional).map(T=>T.name)),u.params),g=h.stringify(p)}else if("path"in u)g=u.path,h=n.find(T=>T.re.test(g)),h&&(p=h.parse(g),R=h.record.name);else{if(h=d.name?i.get(d.name):n.find(T=>T.re.test(d.path)),!h)throw br(1,{location:u,currentLocation:d});R=h.record.name,p=Ce({},d.params,u.params),g=h.stringify(p)}const I=[];let y=h;for(;y;)I.unshift(y.record),y=y.parent;return{name:R,path:g,params:p,matched:I,meta:hk(I)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ck(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function uk(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:dk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function dk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function r_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hk(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function s_(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const o_=/#/g,fk=/&/g,pk=/\//g,mk=/=/g,gk=/\?/g,a_=/\+/g,_k=/%5B/g,vk=/%5D/g,l_=/%5E/g,yk=/%60/g,c_=/%7B/g,wk=/%7C/g,u_=/%7D/g,Ek=/%20/g;function Mu(t){return encodeURI(""+t).replace(wk,"|").replace(_k,"[").replace(vk,"]")}function Ik(t){return Mu(t).replace(c_,"{").replace(u_,"}").replace(l_,"^")}function Lu(t){return Mu(t).replace(a_,"%2B").replace(Ek,"+").replace(o_,"%23").replace(fk,"%26").replace(yk,"`").replace(c_,"{").replace(u_,"}").replace(l_,"^")}function bk(t){return Lu(t).replace(mk,"%3D")}function Ck(t){return Mu(t).replace(o_,"%23").replace(gk,"%3F")}function Tk(t){return t==null?"":Ck(t).replace(pk,"%2F")}function Aa(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Sk(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(a_," "),o=s.indexOf("="),a=Aa(o<0?s:s.slice(0,o)),l=o<0?null:Aa(s.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function d_(t){let e="";for(let n in t){const i=t[n];if(n=bk(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(i)?i.map(s=>s&&Lu(s)):[i&&Lu(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Rk(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Array.isArray(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function Ms(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function zn(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(br(4,{from:n,to:e})):d instanceof Error?a(d):XA(d)?a(br(2,{from:e,to:d})):(s&&i.enterCallbacks[r]===s&&typeof d=="function"&&s.push(d),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Du(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Ak(a)){const c=(a.__vccOpts||a)[e];c&&r.push(zn(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=MA(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&zn(h,n,i,s,o)()}))}}return r}function Ak(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function h_(t){const e=zt(ku),n=zt(Gg),i=ye(()=>e.resolve(z(t.to))),r=ye(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Ir.bind(null,u));if(h>-1)return h;const p=f_(l[c-2]);return c>1&&f_(u)===p&&d[d.length-1].path!==p?d.findIndex(Ir.bind(null,l[c-2])):h}),s=ye(()=>r.value>-1&&Ok(n.params,i.value.params)),o=ye(()=>r.value>-1&&r.value===n.matched.length-1&&Yg(n.params,i.value.params));function a(l={}){return Pk(l)?e[z(t.replace)?"replace":"push"](z(t.to)).catch(Ps):Promise.resolve()}return{route:i,href:ye(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const kk=Wi({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:h_,setup(t,{slots:e}){const n=Cn(h_(t)),{options:i}=zt(ku),r=ye(()=>({[p_(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[p_(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:ii("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),Nk=kk;function Pk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ok(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function f_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const p_=(t,e,n)=>t!=null?t:e!=null?e:n,xk=Wi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=zt(Nu),r=ye(()=>t.route||i.value),s=zt(qg,0),o=ye(()=>r.value.matched[s]);Vi(qg,s+1),Vi(xA,o),Vi(Nu,r);const a=Mt();return lt(()=>[a.value,o.value,t.name],([l,c,u],[d,h,p])=>{c&&(c.instances[u]=l,h&&h!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!Ir(c,h)||!d)&&(c.enterCallbacks[u]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return m_(n.default,{Component:u,route:l});const h=c.props[t.name],p=h?h===!0?l.params:typeof h=="function"?h(l):h:null,R=ii(u,Ce({},p,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return m_(n.default,{Component:R,route:l})||R}}});function m_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Mk=xk;function BN(t){const e=lk(t.routes,t),n=t.parseQuery||Sk,i=t.stringifyQuery||d_,r=t.history,s=Ms(),o=Ms(),a=Ms(),l=yv(Hn);let c=Hn;Er&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Pu.bind(null,E=>""+E),d=Pu.bind(null,Tk),h=Pu.bind(null,Aa);function p(E,$){let L,G;return e_(E)?(L=e.getRecordMatcher(E),G=$):G=E,e.addRoute(G,L)}function g(E){const $=e.getRecordMatcher(E);$&&e.removeRoute($)}function R(){return e.getRoutes().map(E=>E.record)}function I(E){return!!e.getRecordMatcher(E)}function y(E,$){if($=Ce({},$||l.value),typeof E=="string"){const x=Ou(n,E,$.path),f=e.resolve({path:x.path},$),m=r.createHref(x.fullPath);return Ce(x,f,{params:h(f.params),hash:Aa(x.hash),redirectedFrom:void 0,href:m})}let L;if("path"in E)L=Ce({},E,{path:Ou(n,E.path,$.path).path});else{const x=Ce({},E.params);for(const f in x)x[f]==null&&delete x[f];L=Ce({},E,{params:d(E.params)}),$.params=d($.params)}const G=e.resolve(L,$),v=E.hash||"";G.params=u(h(G.params));const C=FA(i,Ce({},E,{hash:Ik(v),path:G.path})),F=r.createHref(C);return Ce({fullPath:C,hash:v,query:i===d_?Rk(E.query):E.query||{}},G,{redirectedFrom:void 0,href:F})}function T(E){return typeof E=="string"?Ou(n,E,l.value.path):Ce({},E)}function M(E,$){if(c!==E)return br(8,{from:$,to:E})}function D(E){return q(E)}function B(E){return D(Ce(T(E),{replace:!0}))}function X(E){const $=E.matched[E.matched.length-1];if($&&$.redirect){const{redirect:L}=$;let G=typeof L=="function"?L(E):L;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=T(G):{path:G},G.params={}),Ce({query:E.query,hash:E.hash,params:E.params},G)}}function q(E,$){const L=c=y(E),G=l.value,v=E.state,C=E.force,F=E.replace===!0,x=X(L);if(x)return q(Ce(T(x),{state:v,force:C,replace:F}),$||L);const f=L;f.redirectedFrom=$;let m;return!C&&UA(i,G,L)&&(m=br(16,{to:f,from:G}),me(G,G,!0,!1)),(m?Promise.resolve(m):j(f,G)).catch(_=>Pi(_)?_:le(_,f,G)).then(_=>{if(_){if(Pi(_,2))return q(Ce(T(_.to),{state:v,force:C,replace:F}),$||f)}else _=ce(f,G,!0,F,v);return ie(f,G,_),_})}function te(E,$){const L=M(E,$);return L?Promise.reject(L):Promise.resolve()}function j(E,$){let L;const[G,v,C]=Lk(E,$);L=Du(G.reverse(),"beforeRouteLeave",E,$);for(const x of G)x.leaveGuards.forEach(f=>{L.push(zn(f,E,$))});const F=te.bind(null,E,$);return L.push(F),Cr(L).then(()=>{L=[];for(const x of s.list())L.push(zn(x,E,$));return L.push(F),Cr(L)}).then(()=>{L=Du(v,"beforeRouteUpdate",E,$);for(const x of v)x.updateGuards.forEach(f=>{L.push(zn(f,E,$))});return L.push(F),Cr(L)}).then(()=>{L=[];for(const x of E.matched)if(x.beforeEnter&&!$.matched.includes(x))if(Array.isArray(x.beforeEnter))for(const f of x.beforeEnter)L.push(zn(f,E,$));else L.push(zn(x.beforeEnter,E,$));return L.push(F),Cr(L)}).then(()=>(E.matched.forEach(x=>x.enterCallbacks={}),L=Du(C,"beforeRouteEnter",E,$),L.push(F),Cr(L))).then(()=>{L=[];for(const x of o.list())L.push(zn(x,E,$));return L.push(F),Cr(L)}).catch(x=>Pi(x,8)?x:Promise.reject(x))}function ie(E,$,L){for(const G of a.list())G(E,$,L)}function ce(E,$,L,G,v){const C=M(E,$);if(C)return C;const F=$===Hn,x=Er?history.state:{};L&&(G||F?r.replace(E.fullPath,Ce({scroll:F&&x&&x.scroll},v)):r.push(E.fullPath,v)),l.value=E,me(E,$,L,F),U()}let W;function de(){W=r.listen((E,$,L)=>{const G=y(E),v=X(G);if(v){q(Ce(v,{replace:!0}),G).catch(Ps);return}c=G;const C=l.value;Er&&qA(Jg(C.fullPath,L.delta),Ra()),j(G,C).catch(F=>Pi(F,4|8)?F:Pi(F,2)?(q(F.to,G).then(x=>{Pi(x,4|16)&&!L.delta&&L.type===Os.pop&&r.go(-1,!1)}).catch(Ps),Promise.reject()):(L.delta&&r.go(-L.delta,!1),le(F,G,C))).then(F=>{F=F||ce(G,C,!1),F&&(L.delta?r.go(-L.delta,!1):L.type===Os.pop&&Pi(F,4|16)&&r.go(-1,!1)),ie(G,C,F)}).catch(Ps)})}let ke=Ms(),tt=Ms(),he;function le(E,$,L){U(E);const G=tt.list();return G.length?G.forEach(v=>v(E,$,L)):console.error(E),Promise.reject(E)}function ue(){return he&&l.value!==Hn?Promise.resolve():new Promise((E,$)=>{ke.add([E,$])})}function U(E){he||(he=!0,de(),ke.list().forEach(([$,L])=>E?L(E):$()),ke.reset())}function me(E,$,L,G){const{scrollBehavior:v}=t;if(!Er||!v)return Promise.resolve();const C=!L&&GA(Jg(E.fullPath,0))||(G||!L)&&history.state&&history.state.scroll||null;return zi().then(()=>v(E,$,C)).then(F=>F&&zA(F)).catch(F=>le(F,E,$))}const Re=E=>r.go(E);let it;const De=new Set;return{currentRoute:l,addRoute:p,removeRoute:g,hasRoute:I,getRoutes:R,resolve:y,options:t,push:D,replace:B,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:tt.add,isReady:ue,install(E){const $=this;E.component("RouterLink",Nk),E.component("RouterView",Mk),E.config.globalProperties.$router=$,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>z(l)}),Er&&!it&&l.value===Hn&&(it=!0,D(r.location).catch(v=>{}));const L={};for(const v in Hn)L[v]=ye(()=>l.value[v]);E.provide(ku,$),E.provide(Gg,Cn(L)),E.provide(Nu,l);const G=E.unmount;De.add(E),E.unmount=function(){De.delete(E),De.size<1&&(c=Hn,W&&W(),l.value=Hn,it=!1,he=!1),G()}}}}function Cr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Lk(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ir(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ir(c,l))||r.push(l))}return[n,i,r]}/**
  * vee-validate v4.5.2
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */function Oi(t){return typeof t=="function"}function ka(t){return t==null}const Tr=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function g_(t){return Number(t)>=0}function Dk(t){const e=parseFloat(t);return isNaN(e)?t:e}const __={};function jN(t,e){Uk(t,e),__[t]=e}function Fk(t){return __[t]}function Uk(t,e){if(!Oi(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}const xi=Symbol("vee-validate-form"),Vk=Symbol("vee-validate-field-instance"),Na=Symbol("Default empty value");function Fu(t){return Oi(t)&&!!t.__locatorRef}function Wk(t){return["input","textarea","select"].includes(t)}function Bk(t,e){return Wk(t)&&e.type==="file"}function Ls(t){return!!t&&Oi(t.validate)}function Ds(t){return t==="checkbox"||t==="radio"}function jk(t){return Tr(t)||Array.isArray(t)}function $k(t){return Array.isArray(t)?t.length===0:Tr(t)&&Object.keys(t).length===0}function Pa(t){return/^\[.+\]$/i.test(t)}function Hk(t){return v_(t)&&t.multiple}function v_(t){return t.tagName==="SELECT"}function zk(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function qk(t,e){return zk(t,e)||Bk(t,e)}function Gk(t){return Uu(t)&&t.target&&"submit"in t.target}function Uu(t){return t?!!(typeof Event!="undefined"&&Oi(Event)&&t instanceof Event||t&&t.srcElement):!1}function Vu(t,e){return e in t&&t[e]!==Na}function Wu(t){return Pa(t)?t.replace(/\[|\]/gi,""):t}function Qe(t,e,n){return t?Pa(e)?t[Wu(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((r,s)=>jk(r)&&s in r?r[s]:n,t):n}function Sr(t,e,n){if(Pa(e)){t[Wu(e)]=n;return}const i=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let s=0;s<i.length;s++){if(s===i.length-1){r[i[s]]=n;return}(!(i[s]in r)||ka(r[i[s]]))&&(r[i[s]]=g_(i[s+1])?[]:{}),r=r[i[s]]}}function Bu(t,e){if(Array.isArray(t)&&g_(e)){t.splice(Number(e),1);return}Tr(t)&&delete t[e]}function ju(t,e){if(Pa(e)){delete t[Wu(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let s=0;s<n.length;s++){if(s===n.length-1){Bu(i,n[s]);break}if(!(n[s]in i)||ka(i[n[s]]))break;i=i[n[s]]}const r=n.map((s,o)=>Qe(t,n.slice(0,o).join(".")));for(let s=r.length-1;s>=0;s--)if(!!$k(r[s])){if(s===0){Bu(t,n[0]);continue}Bu(r[s-1],n[s-1])}}function nt(t){return Object.keys(t)}function Fs(t,e=void 0){const n=oh();return(n==null?void 0:n.provides[t])||zt(t,e)}function y_(t){fh(`[vee-validate]: ${t}`)}function $u(t,e,n){if(Array.isArray(t)){const i=[...t],r=i.indexOf(e);return r>=0?i.splice(r,1):i.push(e),i}return t===e?n:e}function Kk(t,e=0){let n=null,i=[];return function(...r){return n&&window.clearTimeout(n),n=window.setTimeout(()=>{const s=t(...r);i.forEach(o=>o(s)),i=[]},e),new Promise(s=>i.push(s))}}const Oa=(t,e,n)=>e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var i,r;return(r=(i=e.slots).default)===null||r===void 0?void 0:r.call(i,n())}}:e.slots.default;function Hu(t){if(w_(t))return t._value}function w_(t){return"_value"in t}function zu(t){if(!Uu(t))return t;const e=t.target;if(Ds(e.type)&&w_(e))return Hu(e);if(e.type==="file"&&e.files)return Array.from(e.files);if(Hk(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(Hu);if(v_(e)){const n=Array.from(e.options).find(i=>i.selected);return n?Hu(n):e.value}return e.value}function E_(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?Tr(t)&&t._$$isNormalized?t:Tr(t)?Object.keys(t).reduce((n,i)=>{const r=Yk(t[i]);return t[i]!==!1&&(n[i]=I_(r)),n},e):typeof t!="string"?e:t.split("|").reduce((n,i)=>{const r=Qk(i);return r.name&&(n[r.name]=I_(r.params)),n},e):e}function Yk(t){return t===!0?[]:Array.isArray(t)||Tr(t)?t:[t]}function I_(t){const e=n=>typeof n=="string"&&n[0]==="@"?Jk(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,i)=>(n[i]=e(t[i]),n),{})}const Qk=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function Jk(t){const e=n=>Qe(n,t)||n[t];return e.__locatorRef=t,e}function Xk(t){return Array.isArray(t)?t.filter(Fu):nt(t).filter(e=>Fu(t[e])).map(e=>t[e])}const Zk={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let qu=Object.assign({},Zk);const Gu=()=>qu,eN=t=>{qu=Object.assign(Object.assign({},qu),t)},$N=eN;async function b_(t,e,n={}){const i=n==null?void 0:n.bails,r={name:(n==null?void 0:n.name)||"{field}",rules:e,bails:i!=null?i:!0,formData:(n==null?void 0:n.values)||{}},o=(await tN(r,t)).errors;return{errors:o,valid:!o.length}}async function tN(t,e){if(Ls(t.rules))return nN(e,t.rules,{bails:t.bails});if(Oi(t.rules)){const o={field:t.name,form:t.formData,value:e},a=await t.rules(e,o),l=typeof a!="string"&&a,c=typeof a=="string"?a:C_(o);return{errors:l?[]:[c]}}const n=Object.assign(Object.assign({},t),{rules:E_(t.rules)}),i=[],r=Object.keys(n.rules),s=r.length;for(let o=0;o<s;o++){const a=r[o],l=await iN(n,e,{name:a,params:n.rules[a]});if(l.error&&(i.push(l.error),t.bails))return{errors:i}}return{errors:i}}async function nN(t,e,n){var i;return{errors:await e.validate(t,{abortEarly:(i=n.bails)!==null&&i!==void 0?i:!0}).then(()=>[]).catch(s=>{if(s.name==="ValidationError")return s.errors;throw s})}}async function iN(t,e,n){const i=Fk(n.name);if(!i)throw new Error(`No such validator '${n.name}' exists.`);const r=rN(n.params,t.formData),s={field:t.name,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:r})},o=await i(e,r,s);return typeof o=="string"?{error:o}:{error:o?void 0:C_(s)}}function C_(t){const e=Gu().generateMessage;return e?e(t):"Field is invalid"}function rN(t,e){const n=i=>Fu(i)?i(e):i;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((i,r)=>(i[r]=n(t[r]),i),{})}async function sN(t,e){const n=await t.validate(e,{abortEarly:!1}).then(()=>[]).catch(s=>{if(s.name!=="ValidationError")throw s;return s.inner||[]}),i={},r={};for(const s of n){const o=s.errors;i[s.path]={valid:!o.length,errors:o},o.length&&(r[s.path]=o[0])}return{valid:!n.length,results:i,errors:r}}async function oN(t,e,n){const r=nt(t).map(async c=>{var u,d,h;const p=await b_(Qe(e,c),t[c],{name:((u=n==null?void 0:n.names)===null||u===void 0?void 0:u[c])||c,values:e,bails:(h=(d=n==null?void 0:n.bailsMap)===null||d===void 0?void 0:d[c])!==null&&h!==void 0?h:!0});return Object.assign(Object.assign({},p),{path:c})});let s=!0;const o=await Promise.all(r),a={},l={};for(const c of o)a[c.path]={valid:c.valid,errors:c.errors},c.valid||(s=!1,l[c.path]=c.errors[0]);return{valid:s,results:a,errors:l}}function T_(t,e,n){typeof n.value=="object"&&(n.value=Be(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function Be(t){if(typeof t!="object")return t;var e=0,n,i,r,s=Object.prototype.toString.call(t);if(s==="[object Object]"?r=Object.create(t.__proto__||null):s==="[object Array]"?r=Array(t.length):s==="[object Set]"?(r=new Set,t.forEach(function(o){r.add(Be(o))})):s==="[object Map]"?(r=new Map,t.forEach(function(o,a){r.set(Be(a),Be(o))})):s==="[object Date]"?r=new Date(+t):s==="[object RegExp]"?r=new RegExp(t.source,t.flags):s==="[object DataView]"?r=new t.constructor(Be(t.buffer)):s==="[object ArrayBuffer]"?r=t.slice(0):s.slice(-6)==="Array]"&&(r=new t.constructor(t)),r){for(i=Object.getOwnPropertySymbols(t);e<i.length;e++)T_(r,i[e],Object.getOwnPropertyDescriptor(t,i[e]));for(e=0,i=Object.getOwnPropertyNames(t);e<i.length;e++)Object.hasOwnProperty.call(r,n=i[e])&&r[n]===t[n]||T_(r,n,Object.getOwnPropertyDescriptor(t,n))}return r||t}var xa=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var i,r,s;if(Array.isArray(e)){if(i=e.length,i!=n.length)return!1;for(r=i;r--!=0;)if(!t(e[r],n[r]))return!1;return!0}if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(r of e.entries())if(!n.has(r[0]))return!1;for(r of e.entries())if(!t(r[1],n.get(r[0])))return!1;return!0}if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(r of e.entries())if(!n.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if(i=e.length,i!=n.length)return!1;for(r=i;r--!=0;)if(e[r]!==n[r])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),i=s.length,i!==Object.keys(n).length)return!1;for(r=i;r--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[r]))return!1;for(r=i;r--!=0;){var o=s[r];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n};let S_=0;function aN(t,e){const{value:n,initialValue:i,setInitialValue:r}=lN(t,e.modelValue,!e.standalone),{errorMessage:s,errors:o,setErrors:a}=uN(t,!e.standalone),l=cN(n,i,o),c=S_>=Number.MAX_SAFE_INTEGER?0:++S_;function u(d){var h;"value"in d&&(n.value=d.value),"errors"in d&&a(d.errors),"touched"in d&&(l.touched=(h=d.touched)!==null&&h!==void 0?h:l.touched),"initialValue"in d&&r(d.initialValue)}return{id:c,path:t,value:n,initialValue:i,meta:l,errors:o,errorMessage:s,setState:u}}function lN(t,e,n){const i=n?Fs(xi,void 0):void 0,r=Mt(z(e));function s(){return i?Qe(i.meta.value.initialValues,z(t),z(r)):z(r)}function o(u){if(!i){r.value=u;return}i.setFieldInitialValue(z(t),u)}const a=ye(s);if(!i)return{value:Mt(s()),initialValue:a,setInitialValue:o};const l=e?z(e):Qe(i.values,z(t),z(a));return i.stageInitialValue(z(t),l),{value:ye({get(){return Qe(i.values,z(t))},set(u){i.setFieldValue(z(t),u)}}),initialValue:a,setInitialValue:o}}function cN(t,e,n){const i=Cn({touched:!1,pending:!1,valid:!0,validated:!!z(n).length,initialValue:ye(()=>z(e)),dirty:ye(()=>!xa(z(t),z(e)))});return lt(n,r=>{i.valid=!r.length},{immediate:!0,flush:"sync"}),i}function uN(t,e){const n=e?Fs(xi,void 0):void 0;function i(s){return s?Array.isArray(s)?s:[s]:[]}if(!n){const s=Mt([]);return{errors:s,errorMessage:ye(()=>s.value[0]),setErrors:o=>{s.value=i(o)}}}const r=ye(()=>n.errorBag.value[z(t)]||[]);return{errors:r,errorMessage:ye(()=>r.value[0]),setErrors:s=>{n.setFieldErrorBag(z(t),i(s))}}}function dN(t,e,n){return Ds(n==null?void 0:n.type)?pN(t,e,n):R_(t,e,n)}function R_(t,e,n){const{initialValue:i,validateOnMount:r,bails:s,type:o,checkedValue:a,label:l,validateOnValueUpdate:c,uncheckedValue:u,standalone:d}=hN(z(t),n),h=d?void 0:Fs(xi),{id:p,value:g,initialValue:R,meta:I,setState:y,errors:T,errorMessage:M}=aN(t,{modelValue:i,standalone:d}),D=()=>{I.touched=!0},B=ye(()=>{let U=z(e);const me=z(h==null?void 0:h.schema);return me&&!Ls(me)&&(U=fN(me,z(t))||U),Ls(U)||Oi(U)?U:E_(U)});async function X(U){var me,Re;return(h==null?void 0:h.validateSchema)?(me=(await h.validateSchema(U)).results[z(t)])!==null&&me!==void 0?me:{valid:!0,errors:[]}:b_(g.value,B.value,{name:z(l)||z(t),values:(Re=h==null?void 0:h.values)!==null&&Re!==void 0?Re:{},bails:s})}async function q(){I.pending=!0,I.validated=!0;const U=await X("validated-only");return y({errors:U.errors}),I.pending=!1,U}async function te(){const U=await X("silent");return I.valid=U.valid,U}function j(U){return!(U==null?void 0:U.mode)||(U==null?void 0:U.mode)==="force"||(U==null?void 0:U.mode)==="validated-only"?q():te()}const ie=(U,me=!0)=>{const Re=zu(U);g.value=Re,!c&&me&&q()};ro(()=>{if(r)return q();(!h||!h.validateSchema)&&te()});function ce(U){I.touched=U}let W;function de(){W=lt(g,c?q:te,{deep:!0})}de();function ke(U){var me;W==null||W();const Re=U&&"value"in U?U.value:R.value;y({value:Be(Re),initialValue:Be(Re),touched:(me=U==null?void 0:U.touched)!==null&&me!==void 0?me:!1,errors:(U==null?void 0:U.errors)||[]}),I.pending=!1,I.validated=!1,te(),zi(()=>{de()})}function tt(U){g.value=U}function he(U){y({errors:Array.isArray(U)?U:[U]})}const le={id:p,name:t,label:l,value:g,meta:I,errors:T,errorMessage:M,type:o,checkedValue:a,uncheckedValue:u,bails:s,resetField:ke,handleReset:()=>ke(),validate:j,handleChange:ie,handleBlur:D,setState:y,setTouched:ce,setErrors:he,setValue:tt};if(Vi(Vk,le),Me(e)&&typeof z(e)!="function"&&lt(e,(U,me)=>{xa(U,me)||(I.validated?q():te())},{deep:!0}),!h)return le;h.register(le),Or(()=>{h.unregister(le)});const ue=ye(()=>{const U=B.value;return!U||Oi(U)||Ls(U)?{}:Object.keys(U).reduce((me,Re)=>{const it=Xk(U[Re]).map(De=>De.__locatorRef).reduce((De,ln)=>{const E=Qe(h.values,ln)||h.values[ln];return E!==void 0&&(De[ln]=E),De},{});return Object.assign(me,it),me},{})});return lt(ue,(U,me)=>{if(!Object.keys(U).length)return;!xa(U,me)&&(I.validated?q():te())}),le}function hN(t,e){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:t,validateOnValueUpdate:!0,standalone:!1});if(!e)return n();const i="valueProp"in e?e.valueProp:e.checkedValue;return Object.assign(Object.assign(Object.assign({},n()),e||{}),{checkedValue:i})}function fN(t,e){if(!!t)return t[e]}function pN(t,e,n){const i=(n==null?void 0:n.standalone)?void 0:Fs(xi),r=n==null?void 0:n.checkedValue,s=n==null?void 0:n.uncheckedValue;function o(a){const l=a.handleChange,c=ye(()=>{const d=z(a.value),h=z(r);return Array.isArray(d)?d.includes(h):h===d});function u(d,h=!0){var p,g;if(c.value===((g=(p=d)===null||p===void 0?void 0:p.target)===null||g===void 0?void 0:g.checked))return;let R=zu(d);i||(R=$u(z(a.value),z(r),z(s))),l(R,h)}return Or(()=>{c.value&&u(z(r),!1)}),Object.assign(Object.assign({},a),{checked:c,checkedValue:r,uncheckedValue:s,handleChange:u})}return o(R_(t,e,n))}const HN=Wi({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>Gu().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:Na},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1}},setup(t,e){const n=Tn(t,"rules"),i=Tn(t,"name"),r=Tn(t,"label"),s=Tn(t,"uncheckedValue"),o=Vu(t,"onUpdate:modelValue"),{errors:a,value:l,errorMessage:c,validate:u,handleChange:d,handleBlur:h,setTouched:p,resetField:g,handleReset:R,meta:I,checked:y,setErrors:T}=dN(i,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:_N(t,e),checkedValue:e.attrs.value,uncheckedValue:s,label:r,validateOnValueUpdate:!1}),M=o?function(ie,ce=!0){d(ie,ce),e.emit("update:modelValue",l.value)}:d,D=j=>{Ds(e.attrs.type)||(l.value=zu(j))},B=o?function(ie){D(ie),e.emit("update:modelValue",l.value)}:D,X=ye(()=>{const{validateOnInput:j,validateOnChange:ie,validateOnBlur:ce,validateOnModelUpdate:W}=mN(t),de=[h,e.attrs.onBlur,ce?u:void 0].filter(Boolean),ke=[ue=>M(ue,j),e.attrs.onInput].filter(Boolean),tt=[ue=>M(ue,ie),e.attrs.onChange].filter(Boolean),he={name:t.name,onBlur:de,onInput:ke,onChange:tt};W&&(he["onUpdate:modelValue"]=[M]),Ds(e.attrs.type)&&y?he.checked=y.value:he.value=l.value;const le=A_(t,e);return qk(le,e.attrs)&&delete he.value,he}),q=Tn(t,"modelValue");lt(q,j=>{j===Na&&l.value===void 0||j!==gN(l.value,t.modelModifiers)&&(l.value=j===Na?void 0:j,u())});function te(){return{field:X.value,value:l.value,meta:I,errors:a.value,errorMessage:c.value,validate:u,resetField:g,handleChange:M,handleInput:B,handleReset:R,handleBlur:h,setTouched:p,setErrors:T}}return e.expose({setErrors:T,setTouched:p,reset:g,validate:u,handleChange:d}),()=>{const j=hl(A_(t,e)),ie=Oa(j,e,te);return j?ii(j,Object.assign(Object.assign({},e.attrs),X.value),ie):ie}}});function A_(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function mN(t){var e,n,i,r;const{validateOnInput:s,validateOnChange:o,validateOnBlur:a,validateOnModelUpdate:l}=Gu();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:s,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:o,validateOnBlur:(i=t.validateOnBlur)!==null&&i!==void 0?i:a,validateOnModelUpdate:(r=t.validateOnModelUpdate)!==null&&r!==void 0?r:l}}function gN(t,e){return e.number?Dk(t):t}function _N(t,e){return Ds(e.attrs.type)?Vu(t,"modelValue")?t.modelValue:void 0:Vu(t,"modelValue")?t.modelValue:e.attrs.value}let vN=0;function yN(t){const e=vN++,n=Mt({}),i=Mt(!1),r=Mt(0),s={},o=Cn(Be(z(t==null?void 0:t.initialValues)||{})),{errorBag:a,setErrorBag:l,setFieldErrorBag:c}=IN(t==null?void 0:t.initialErrors),u=ye(()=>nt(a.value).reduce((v,C)=>{const F=a.value[C];return F&&F.length&&(v[C]=F[0]),v},{}));function d(v){const C=n.value[v];return Array.isArray(C)?C[0]:C}function h(v){return!!n.value[v]}const p=ye(()=>nt(n.value).reduce((v,C)=>{const F=d(C);return F&&(v[C]=z(F.label||F.name)||""),v},{})),g=ye(()=>nt(n.value).reduce((v,C)=>{var F;const x=d(C);return x&&(v[C]=(F=x.bails)!==null&&F!==void 0?F:!0),v},{})),R=Object.assign({},(t==null?void 0:t.initialErrors)||{}),{initialValues:I,originalInitialValues:y,setInitialValues:T}=EN(n,o,t==null?void 0:t.initialValues),M=wN(n,o,I,u),D=t==null?void 0:t.validationSchema,B={formId:e,fieldsByPath:n,values:o,errorBag:a,errors:u,schema:D,submitCount:r,meta:M,isSubmitting:i,fieldArraysLookup:s,validateSchema:z(D)?L:void 0,validate:U,register:le,unregister:ue,setFieldErrorBag:c,validateField:me,setFieldValue:ie,setValues:ce,setErrors:j,setFieldError:te,setFieldTouched:W,setTouched:de,resetForm:ke,handleSubmit:Re,stageInitialValue:ln,unsetInitialValue:De,setFieldInitialValue:it};function X(v){return Array.isArray(v)}function q(v,C){return Array.isArray(v)?v.forEach(C):C(v)}function te(v,C){c(v,C)}function j(v){l(v)}function ie(v,C,{force:F}={force:!1}){var x;const f=n.value[v],m=Be(C);if(!f){Sr(o,v,m);return}if(X(f)&&((x=f[0])===null||x===void 0?void 0:x.type)==="checkbox"&&!Array.isArray(C)){const w=Be($u(Qe(o,v)||[],C,void 0));Sr(o,v,w);return}let _=C;!X(f)&&f.type==="checkbox"&&!F&&(_=Be($u(Qe(o,v),C,z(f.uncheckedValue)))),Sr(o,v,_)}function ce(v){nt(o).forEach(C=>{delete o[C]}),nt(v).forEach(C=>{ie(C,v[C])}),Object.values(s).forEach(C=>C&&C.reset())}function W(v,C){const F=n.value[v];F&&q(F,x=>x.setTouched(C))}function de(v){nt(v).forEach(C=>{W(C,!!v[C])})}function ke(v){(v==null?void 0:v.values)?(T(v.values),ce(v==null?void 0:v.values)):(T(y.value),ce(y.value)),Object.values(n.value).forEach(C=>{!C||q(C,F=>F.resetField())}),(v==null?void 0:v.touched)&&de(v.touched),j((v==null?void 0:v.errors)||{}),r.value=(v==null?void 0:v.submitCount)||0}function tt(v,C){const F=Xa(v),x=C;if(!n.value[x]){n.value[x]=F;return}const f=n.value[x];f&&!Array.isArray(f)&&(n.value[x]=[f]),n.value[x]=[...n.value[x],F]}function he(v,C){const F=C,x=n.value[F];if(!!x){if(!X(x)&&v.id===x.id){delete n.value[F];return}if(X(x)){const f=x.findIndex(m=>m.id===v.id);if(f===-1)return;if(x.splice(f,1),x.length===1){n.value[F]=x[0];return}x.length||delete n.value[F]}}}function le(v){const C=z(v.name);tt(v,C),Me(v.name)&&lt(v.name,async(x,f)=>{await zi(),he(v,f),tt(v,x),(u.value[f]||u.value[x])&&me(x),await zi(),h(f)||ju(o,f)});const F=z(v.errorMessage);F&&(R==null?void 0:R[C])!==F&&me(C),delete R[C]}function ue(v){const C=z(v.name);he(v,C),zi(()=>{h(C)||(te(C,void 0),ju(o,C))})}async function U(v){if(B.validateSchema)return B.validateSchema((v==null?void 0:v.mode)||"force");const C=await Promise.all(Object.values(n.value).map(f=>{const m=Array.isArray(f)?f[0]:f;return m?m.validate(v).then(_=>({key:z(m.name),valid:_.valid,errors:_.errors})):Promise.resolve({key:"",valid:!0,errors:[]})})),F={},x={};for(const f of C)F[f.key]={valid:f.valid,errors:f.errors},f.errors.length&&(x[f.key]=f.errors[0]);return{valid:C.every(f=>f.valid),results:F,errors:x}}async function me(v){const C=n.value[v];return C?Array.isArray(C)?C.map(F=>F.validate())[0]:C.validate():(fh(`field with name ${v} was not found`),Promise.resolve({errors:[],valid:!0}))}function Re(v,C){return function(x){return x instanceof Event&&(x.preventDefault(),x.stopPropagation()),de(nt(n.value).reduce((f,m)=>(f[m]=!0,f),{})),i.value=!0,r.value++,U().then(f=>{if(f.valid&&typeof v=="function")return v(Be(o),{evt:x,setErrors:j,setFieldError:te,setTouched:de,setFieldTouched:W,setValues:ce,setFieldValue:ie,resetForm:ke});!f.valid&&typeof C=="function"&&C({values:Be(o),evt:x,errors:f.errors,results:f.results})}).then(f=>(i.value=!1,f),f=>{throw i.value=!1,f})}}function it(v,C){Sr(I.value,v,Be(C))}function De(v){ju(I.value,v)}function ln(v,C){Sr(o,v,C),it(v,C)}async function E(){const v=z(D);return v?Ls(v)?await sN(v,o):await oN(v,o,{names:p.value,bailsMap:g.value}):{valid:!0,results:{},errors:{}}}const $=Kk(E,5);async function L(v){const C=await $(),F=B.fieldsByPath.value||{},x=nt(B.errorBag.value);return[...new Set([...nt(C.results),...nt(F),...x])].reduce((m,_)=>{const w=F[_],b=(C.results[_]||{errors:[]}).errors,P={errors:b,valid:!b.length};if(m.results[_]=P,P.valid||(m.errors[_]=P.errors[0]),!w)return te(_,b),m;if(q(w,A=>A.meta.valid=P.valid),v==="silent")return m;const V=Array.isArray(w)?w.some(A=>A.meta.validated):w.meta.validated;return v==="validated-only"&&!V||q(w,A=>A.setState({errors:P.errors})),m},{valid:C.valid,results:{},errors:{}})}const G=Re((v,{evt:C})=>{Gk(C)&&C.target.submit()});return ro(()=>{if((t==null?void 0:t.initialErrors)&&j(t.initialErrors),(t==null?void 0:t.initialTouched)&&de(t.initialTouched),t==null?void 0:t.validateOnMount){U();return}B.validateSchema&&B.validateSchema("silent")}),Me(D)&&lt(D,()=>{var v;(v=B.validateSchema)===null||v===void 0||v.call(B,"validated-only")}),Vi(xi,B),{errors:u,meta:M,values:o,isSubmitting:i,submitCount:r,validate:U,validateField:me,handleReset:()=>ke(),resetForm:ke,handleSubmit:Re,submitForm:G,setFieldError:te,setErrors:j,setFieldValue:ie,setValues:ce,setFieldTouched:W,setTouched:de}}function wN(t,e,n,i){const r={touched:"some",pending:"some",valid:"every"},s=ye(()=>!xa(e,z(n))),o=ye(()=>{const a=Object.values(t.value).flat(1).filter(Boolean);return nt(r).reduce((l,c)=>{const u=r[c];return l[c]=a[u](d=>d.meta[c]),l},{})});return ye(()=>Object.assign(Object.assign({initialValues:z(n)},o.value),{valid:o.value.valid&&!nt(i.value).length,dirty:s.value}))}function EN(t,e,n){const i=Mt(Be(z(n))||{}),r=Mt(Be(z(n))||{});function s(o,a=!1){i.value=Be(o),r.value=Be(o),!!a&&nt(t.value).forEach(l=>{const c=t.value[l],u=Array.isArray(c)?c.some(h=>h.meta.touched):c==null?void 0:c.meta.touched;if(!c||u)return;const d=Qe(i.value,l);Sr(e,l,Be(d))})}return Me(n)&&lt(n,o=>{s(o,!0)},{deep:!0}),{initialValues:i,originalInitialValues:r,setInitialValues:s}}function IN(t){const e=Mt({});function n(s){return Array.isArray(s)?s:s?[s]:[]}function i(s,o){if(!o){delete e.value[s];return}e.value[s]=n(o)}function r(s){e.value=nt(s).reduce((o,a)=>{const l=s[a];return l&&(o[a]=n(l)),o},{})}return t&&r(t),{errorBag:e,setErrorBag:r,setFieldErrorBag:i}}const zN=Wi({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0}},setup(t,e){const n=Tn(t,"initialValues"),i=Tn(t,"validationSchema"),{errors:r,values:s,meta:o,isSubmitting:a,submitCount:l,validate:c,validateField:u,handleReset:d,resetForm:h,handleSubmit:p,submitForm:g,setErrors:R,setFieldError:I,setFieldValue:y,setValues:T,setFieldTouched:M,setTouched:D}=yN({validationSchema:i.value?i:void 0,initialValues:n,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount}),B=t.onSubmit?p(t.onSubmit,t.onInvalidSubmit):g;function X(j){Uu(j)&&j.preventDefault(),d(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function q(j,ie){return p(typeof j=="function"&&!ie?j:ie,t.onInvalidSubmit)(j)}function te(){return{meta:o.value,errors:r.value,values:s,isSubmitting:a.value,submitCount:l.value,validate:c,validateField:u,handleSubmit:q,handleReset:d,submitForm:g,setErrors:R,setFieldError:I,setFieldValue:y,setValues:T,setFieldTouched:M,setTouched:D,resetForm:h}}return e.expose({setFieldError:I,setErrors:R,setFieldValue:y,setValues:T,setFieldTouched:M,setTouched:D,resetForm:h,validate:c,validateField:u}),function(){const ie=t.as==="form"?t.as:hl(t.as),ce=Oa(ie,e,te);if(!t.as)return ce;const W=t.as==="form"?{novalidate:!0}:{};return ii(ie,Object.assign(Object.assign(Object.assign({},W),e.attrs),{onSubmit:B,onReset:X}),ce)}}});let bN=0;function CN(t){const e=bN++,n=Fs(xi,void 0),i=Mt([]),r=()=>{},s={fields:Zs(i),remove:r,push:r,swap:r,insert:r,update:r,replace:r,prepend:r};if(!n)return y_("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"),s;if(!z(t))return y_("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"),s;let o=0;function a(){const y=Qe(n==null?void 0:n.values,z(t),[]);i.value=y.map(c),l()}a();function l(){const y=i.value.length;for(let T=0;T<y;T++){const M=i.value[T];M.isFirst=T===0,M.isLast=T===y-1}}function c(y){const T=o++;return{key:T,value:ye(()=>{const D=Qe(n==null?void 0:n.values,z(t),[]),B=i.value.findIndex(X=>X.key===T);return B===-1?y:D[B]}),isFirst:!1,isLast:!1}}function u(y){const T=z(t),M=Qe(n==null?void 0:n.values,T);if(!M||!Array.isArray(M))return;const D=[...M];D.splice(y,1),n==null||n.unsetInitialValue(T+`[${y}]`),n==null||n.setFieldValue(T,D),i.value.splice(y,1),l()}function d(y){const T=z(t),M=Qe(n==null?void 0:n.values,T),D=ka(M)?[]:M;if(!Array.isArray(D))return;const B=[...D];B.push(y),n==null||n.stageInitialValue(T+`[${B.length-1}]`,y),n==null||n.setFieldValue(T,B),i.value.push(c(y)),l()}function h(y,T){const M=z(t),D=Qe(n==null?void 0:n.values,M);if(!Array.isArray(D)||!D[y]||!D[T])return;const B=[...D],X=[...i.value],q=B[y];B[y]=B[T],B[T]=q;const te=X[y];X[y]=X[T],X[T]=te,n==null||n.setFieldValue(M,B),i.value=X,l()}function p(y,T){const M=z(t),D=Qe(n==null?void 0:n.values,M);if(!Array.isArray(D)||D.length<y)return;const B=[...D],X=[...i.value];B.splice(y,0,T),X.splice(y,0,c(T)),n==null||n.setFieldValue(M,B),i.value=X,l()}function g(y){const T=z(t);n==null||n.setFieldValue(T,y),a()}function R(y,T){const M=z(t),D=Qe(n==null?void 0:n.values,M);!Array.isArray(D)||D.length-1<y||n==null||n.setFieldValue(`${M}[${y}]`,T)}function I(y){const T=z(t),M=Qe(n==null?void 0:n.values,T),D=ka(M)?[]:M;if(!Array.isArray(D))return;const B=[y,...D];n==null||n.stageInitialValue(T+`[${B.length-1}]`,y),n==null||n.setFieldValue(T,B),i.value.unshift(c(y)),l()}return n.fieldArraysLookup[e]={reset:a},Or(()=>{delete n.fieldArraysLookup[e]}),{fields:Zs(i),remove:u,push:d,swap:h,insert:p,update:R,replace:g,prepend:I}}Wi({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(t,e){const{push:n,remove:i,swap:r,insert:s,replace:o,update:a,prepend:l,fields:c}=CN(Tn(t,"name"));function u(){return{fields:c.value,push:n,remove:i,swap:r,insert:s,update:a,replace:o,prepend:l}}return e.expose({push:n,remove:i,swap:r,insert:s,update:a,replace:o,prepend:l}),()=>Oa(void 0,e,u)}});const qN=Wi({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=zt(xi,void 0),i=ye(()=>n==null?void 0:n.errors.value[t.name]);function r(){return{message:i.value}}return()=>{if(!i.value)return;const s=t.as?hl(t.as):t.as,o=Oa(s,e,r),a=Object.assign({role:"alert"},e.attrs);return!s&&(Array.isArray(o)||!o)&&(o==null?void 0:o.length)?o:(Array.isArray(o)||!o)&&!(o==null?void 0:o.length)?ii(s||"span",a,i.value):ii(s,a,o)}}});export{LN as A,Da as B,qN as E,Gt as F,Ph as T,sh as a,_t as b,PN as c,ON as d,dy as e,ly as f,VN as g,xN as h,AN as i,qr as j,BN as k,WN as l,UN as m,$N as n,oy as o,RN as p,jN as q,NN as r,FN as s,SN as t,DN as u,zN as v,Tv as w,HN as x,kN as y,MN as z};
